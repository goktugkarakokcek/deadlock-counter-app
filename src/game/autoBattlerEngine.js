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
// Yapay Zeka (Düşman) tahta planlaması
// ---------------------------------------------------------------------------
function pickCounterHero(targetCard) {
  const target = heroesByName[targetCard.name];
  if (!target) return null;
  const pool = heroList.filter(
    (h) => target.counteredBy?.includes(h.name) || h.counters?.includes(target.name)
  );
  return pool.length ? randomOf(pool) : null;
}

function pickCounterItem(targetCard, budget) {
  const target = heroesByName[targetCard.name];
  if (!target) return null;
  const counteredByBase = (target.counteredBy || []).map(baseName);
  const pool = itemList
    .filter((it) => target.counterItems?.includes(it.id) || counteredByBase.includes(baseName(it.name)))
    .map(createItemCard)
    .filter((card) => card.cost <= budget);
  return pool.length ? randomOf(pool) : null;
}

export function planAiBoard(aiBoard, aiSoul, playerBoard) {
  const board = [...aiBoard];
  let soul = aiSoul;

  const buyHeroFor = (laneIndex) => {
    const playerCard = playerBoard[laneIndex];
    const counterHero =
      playerCard && Math.random() < cfg.ai.counterPickChance ? pickCounterHero(playerCard) : null;
    const card = createHeroCard(counterHero || randomOf(heroList));
    if (card.cost > soul) return null;
    soul -= card.cost;
    return card;
  };

  // 1) Counterlanan kahramanları değiştir
  board.forEach((card, i) => {
    const playerCard = playerBoard[i];
    if (!card || !playerCard) return;
    const isCountered = resolveLane(playerCard, card, i).outcome === 'player';
    if (isCountered && Math.random() < cfg.ai.replaceCounteredChance) {
      const replacement = buyHeroFor(i);
      if (replacement) board[i] = replacement;
    }
  });

  // 2) Boş koridorları doldur (önce oyuncunun dolu koridorları)
  const order = board
    .map((_, i) => i)
    .sort((a, b) => Number(Boolean(playerBoard[b])) - Number(Boolean(playerBoard[a])));
  order.forEach((i) => {
    if (!board[i]) {
      const card = buyHeroFor(i);
      if (card) board[i] = card;
    }
  });

  // 3) Kalan ruhla counter eşya tak
  board.forEach((card, i) => {
    const playerCard = playerBoard[i];
    if (!card || card.item || !playerCard) return;
    if (Math.random() >= cfg.ai.counterItemChance) return;
    const item = pickCounterItem(playerCard, soul);
    if (item) {
      soul -= item.cost;
      board[i] = { ...card, item };
    }
  });

  return { board, soul };
}
