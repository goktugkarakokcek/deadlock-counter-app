import { characters, itemsCatalog, autoBattlerConfig } from '../data';

const cfg = autoBattlerConfig;
const heroList = characters;
const itemList = Object.values(itemsCatalog);
const heroesByName = characters.reduce((acc, hero) => {
  acc[hero.name] = hero;
  return acc;
}, {});

const baseName = (name = '') => name.split(' (')[0].trim().toLowerCase();
const randomOf = (list) => list[Math.floor(Math.random() * list.length)];
const createUid = (refId) =>
  `${refId}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

// ---------------------------------------------------------------------------
// Kart üretimi
// ---------------------------------------------------------------------------
export function getHeroPower(hero) {
  const { survive = 0, damage = 0, mobility = 0, control = 0 } = hero.stats || {};
  return Math.round((survive + damage + mobility + control) / 4);
}

export function createHeroCard(hero) {
  return {
    uid: createUid(hero.id),
    kind: 'hero',
    refId: hero.id,
    name: hero.name,
    subtitle: hero.role,
    image: hero.image,
    imageAlt: hero.imageAlt,
    cost: cfg.heroCostByDifficulty[hero.difficulty] ?? cfg.defaultHeroCost,
    power: getHeroPower(hero),
    item: null,
  };
}

export function createItemCard(item) {
  const soul = parseInt(String(item.cost).replace(/\D/g, ''), 10);
  const cost = cfg.itemCostBySoul[soul] ?? 2;
  return {
    uid: createUid(item.id),
    kind: 'item',
    refId: item.id,
    name: item.name,
    subtitle: item.category,
    category: item.category,
    image: item.image,
    imageAlt: item.imageAlt,
    cost,
    power: cost * cfg.itemPowerPerCost,
  };
}

export function rollShop() {
  return Array.from({ length: cfg.shopSize }, () =>
    Math.random() < cfg.heroShopChance
      ? createHeroCard(randomOf(heroList))
      : createItemCard(randomOf(itemList))
  );
}

export function getIncome(round) {
  return Math.min(cfg.income.base + (round - 1) * cfg.income.perRound, cfg.income.max);
}

export function getAiIncome(round, difficultyId = cfg.defaultDifficulty) {
  const diff = cfg.difficulties?.[difficultyId] || cfg.difficulties?.normal;
  const baseIncome = getIncome(round);
  if (!diff) return baseIncome;
  return Math.max(diff.minAiIncome, baseIncome + diff.aiIncomeBonus);
}

export function getSellValue(card) {
  const baseValue = Math.max(1, Math.floor(card.cost / 2));
  const itemValue = card.item ? Math.max(1, Math.floor(card.item.cost / 2)) : 0;
  return baseValue + itemValue;
}

export function createEmptyBoard() {
  return Array.from({ length: cfg.boardSlots }, () => null);
}

// ---------------------------------------------------------------------------
// Counter çözümleme (data.js -> counters / counteredBy / counterItems)
// ---------------------------------------------------------------------------
function heroCounters(attackerCard, defenderCard) {
  const attacker = heroesByName[attackerCard.name];
  const defender = heroesByName[defenderCard.name];
  if (!attacker || !defender) return { value: false, reason: null };

  if (attacker.counters?.includes(defender.name) || defender.counteredBy?.includes(attacker.name)) {
    return { value: true, reason: `${attacker.name}, ${defender.name} karakterini counterlıyor` };
  }

  const item = attackerCard.item;
  if (item) {
    const counteredByBase = (defender.counteredBy || []).map(baseName);
    if (defender.counterItems?.includes(item.refId) || counteredByBase.includes(baseName(item.name))) {
      return { value: true, reason: `${item.name.split(' (')[0]}, ${defender.name} için counter eşya` };
    }
  }
  return { value: false, reason: null };
}

export function getCardPower(card) {
  if (!card) return 0;
  return card.power + (card.item ? card.item.power : 0);
}

export function resolveLane(playerCard, enemyCard, laneIndex) {
  const base = { lane: laneIndex, player: playerCard, enemy: enemyCard, damageToPlayer: 0, damageToEnemy: 0 };

  if (!playerCard && !enemyCard) return { ...base, outcome: 'empty', reason: 'Koridor boş' };
  if (playerCard && !enemyCard)
    return { ...base, outcome: 'player', reason: 'Savunmasız koridor', damageToEnemy: cfg.damage.unopposed };
  if (!playerCard && enemyCard)
    return { ...base, outcome: 'enemy', reason: 'Savunmasız koridor', damageToPlayer: cfg.damage.unopposed };

  const playerCounter = heroCounters(playerCard, enemyCard);
  const enemyCounter = heroCounters(enemyCard, playerCard);

  if (playerCounter.value && !enemyCounter.value)
    return { ...base, outcome: 'player', reason: playerCounter.reason, damageToEnemy: cfg.damage.counter };
  if (enemyCounter.value && !playerCounter.value)
    return { ...base, outcome: 'enemy', reason: enemyCounter.reason, damageToPlayer: cfg.damage.counter };

  const playerPower = getCardPower(playerCard);
  const enemyPower = getCardPower(enemyCard);
  const prefix = playerCounter.value ? 'Karşılıklı counter • ' : '';

  if (playerPower > enemyPower)
    return { ...base, outcome: 'player', reason: `${prefix}Güç üstünlüğü (${playerPower} - ${enemyPower})`, damageToEnemy: cfg.damage.clash };
  if (enemyPower > playerPower)
    return { ...base, outcome: 'enemy', reason: `${prefix}Güç üstünlüğü (${enemyPower} - ${playerPower})`, damageToPlayer: cfg.damage.clash };
  return { ...base, outcome: 'draw', reason: `${prefix}Eşit güç (${playerPower})` };
}

export function resolveCombat(playerBoard, enemyBoard) {
  return playerBoard.map((card, i) => resolveLane(card, enemyBoard[i], i));
}

// ---------------------------------------------------------------------------
// Yapay Zeka (Düşman) tahta planlaması (Zorluk Seviyesine Göre Ağırlıklandırmalı)
// ---------------------------------------------------------------------------
function getHeroCost(hero) {
  return cfg.heroCostByDifficulty[hero.difficulty] ?? cfg.defaultHeroCost;
}

function scoreHeroAgainstTarget(candidate, target) {
  let score = getHeroPower(candidate);
  if (!target) return score;

  const countersDirect = candidate.counters?.includes(target.name);
  const inCounteredBy = target.counteredBy?.includes(candidate.name);
  const isCounteredBack =
    target.counters?.includes(candidate.name) || candidate.counteredBy?.includes(target.name);

  if (countersDirect || inCounteredBy) score += 100;
  if (countersDirect && inCounteredBy) score += 25;
  if (isCounteredBack) score -= 90;

  return score;
}

function pickCounterHero(targetCard, budget, weighted = false) {
  const affordable = heroList.filter((h) => getHeroCost(h) <= budget);
  if (!affordable.length) return null;

  const target = targetCard ? heroesByName[targetCard.name] : null;
  if (!target) {
    if (!weighted) return randomOf(affordable);
    const sorted = [...affordable].sort((a, b) => getHeroPower(b) - getHeroPower(a));
    return randomOf(sorted.slice(0, 3));
  }

  if (weighted) {
    const scored = affordable
      .map((hero) => ({ hero, score: scoreHeroAgainstTarget(hero, target) }))
      .sort((a, b) => b.score - a.score);
    const bestScore = scored[0].score;
    const topPool = scored.filter((entry) => entry.score >= bestScore - 4).map((e) => e.hero);
    return randomOf(topPool);
  }

  const pool = affordable.filter(
    (h) => target.counteredBy?.includes(h.name) || h.counters?.includes(target.name)
  );
  return pool.length ? randomOf(pool) : randomOf(affordable);
}

function pickCounterItem(targetCard, budget, weighted = false) {
  const target = targetCard ? heroesByName[targetCard.name] : null;
  if (!target) return null;
  const counteredByBase = (target.counteredBy || []).map(baseName);
  const pool = itemList
    .filter((it) => target.counterItems?.includes(it.id) || counteredByBase.includes(baseName(it.name)))
    .map(createItemCard)
    .filter((card) => card.cost <= budget);

  if (!pool.length) return null;
  if (weighted) {
    pool.sort((a, b) => b.power - a.power);
    return pool[0];
  }
  return randomOf(pool);
}

export function planAiBoard(
  aiBoard,
  aiSoul,
  playerBoard,
  round = 1,
  difficultyId = cfg.defaultDifficulty
) {
  const diff = cfg.difficulties?.[difficultyId] || cfg.difficulties?.normal;
  const board = [...aiBoard];
  let soul = aiSoul;
  const isFirstRound = round === 1;
  let heroesAddedThisRound = 0;
  const maxNewHeroesPerRound = isFirstRound ? 1 : diff.maxNewHeroesPerRound;

  const buyHeroFor = (laneIndex) => {
    const affordable = heroList.filter((h) => getHeroCost(h) <= soul);
    if (!affordable.length) return null;

    // Kolay modda tamamen rastgele seçim; Normal/Zor modda counter ağırlıklı seçim
    const canInspectLane = !isFirstRound || diff.weightedCounterPick;
    const playerCard = canInspectLane ? playerBoard[laneIndex] : null;
    const shouldCounterPick =
      diff.counterPickChance > 0 && Math.random() < diff.counterPickChance;

    const chosenHero = shouldCounterPick
      ? pickCounterHero(playerCard, soul, diff.weightedCounterPick)
      : randomOf(affordable);

    if (!chosenHero) return null;
    const card = createHeroCard(chosenHero);
    if (card.cost > soul) return null;
    soul -= card.cost;
    return card;
  };

  // 1) Counterlanan kahramanları değiştir (1. tur hariç ve zorluk şansına göre)
  if (!isFirstRound && diff.replaceCounteredChance > 0) {
    board.forEach((card, i) => {
      const playerCard = playerBoard[i];
      if (!card || !playerCard) return;
      const isCountered = resolveLane(playerCard, card, i).outcome === 'player';
      if (isCountered && Math.random() < diff.replaceCounteredChance) {
        const replacement = buyHeroFor(i);
        if (replacement) board[i] = replacement;
      }
    });
  }

  // 2) Boş koridorları doldur (Kolay modda ve 1. turda tamamen rastgele koridor seçimi)
  const indices = board.map((_, i) => i);
  const order =
    !diff.prioritizePlayerLanes || (isFirstRound && !diff.weightedCounterPick)
      ? indices.sort(() => Math.random() - 0.5)
      : indices.sort((a, b) => Number(Boolean(playerBoard[b])) - Number(Boolean(playerBoard[a])));

  order.forEach((i) => {
    if (!board[i] && heroesAddedThisRound < maxNewHeroesPerRound) {
      const card = buyHeroFor(i);
      if (card) {
        board[i] = card;
        heroesAddedThisRound += 1;
      }
    }
  });

  // 3) Kalan ruhla counter eşya tak (1. tur hariç)
  if (!isFirstRound && diff.counterItemChance > 0) {
    board.forEach((card, i) => {
      const playerCard = playerBoard[i];
      if (!card || card.item || !playerCard) return;
      if (Math.random() >= diff.counterItemChance) return;
      const item = pickCounterItem(playerCard, soul, diff.weightedCounterPick);
      if (item) {
        soul -= item.cost;
        board[i] = { ...card, item };
      }
    });
  }

  return { board, soul };
}
