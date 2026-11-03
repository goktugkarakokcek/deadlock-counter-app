import { characters, itemsCatalog, autoBattlerConfig } from '../data';

const cfg = autoBattlerConfig;
const heroList = characters;
const itemList = Object.values(itemsCatalog);
const heroesByName = characters.reduce((acc, hero) => {
  acc[hero.name] = hero;
  return acc;
}, {});

const itemsByLookupName = itemList.reduce((acc, item) => {
  acc[item.name] = item;
  const short = item.name.split(' (')[0].trim();
  if (!acc[short]) acc[short] = item;
  return acc;
}, {});

const baseName = (name = '') => name.split(' (')[0].trim().toLowerCase();
const randomOf = (list) => list[Math.floor(Math.random() * list.length)];
const createUid = (refId) =>
  `${refId}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

// ---------------------------------------------------------------------------
// Karakter Ana Özelliği (Weapon / Vitality / Spirit) ve Kart Üretimi
// ---------------------------------------------------------------------------
export function getHeroTrait(hero) {
  const tally = { Weapon: 0, Vitality: 0, Spirit: 0 };
  const builds = hero.popularBuilds || {};
  Object.values(builds)
    .flat()
    .forEach((itemName) => {
      const found =
        itemsByLookupName[itemName] ||
        itemsByLookupName[String(itemName).split(' (')[0].trim()];
      if (found && tally[found.category] !== undefined) {
        tally[found.category] += 1;
      }
    });

  // Eşitlik durumunda karakterin role ve stats verisine göre belirle
  const { survive = 0, damage = 0, control = 0 } = hero.stats || {};
  if (survive >= 80) tally.Vitality += 0.5;
  else if (control >= 75) tally.Spirit += 0.5;
  else if (damage >= 80) tally.Weapon += 0.5;

  return Object.entries(tally).sort((a, b) => b[1] - a[1])[0][0];
}

export function getHeroPower(hero) {
  const { survive = 0, damage = 0, mobility = 0, control = 0 } = hero.stats || {};
  return Math.round((survive + damage + mobility + control) / 4);
}

export function createHeroCard(hero) {
  const trait = getHeroTrait(hero);
  return {
    uid: createUid(hero.id),
    kind: 'hero',
    refId: hero.id,
    name: hero.name,
    subtitle: hero.role,
    trait,
    category: trait,
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
    trait: item.category,
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

export function isFrontlineSlot(slotIndex) {
  return slotIndex < cfg.boardCols;
}

// ---------------------------------------------------------------------------
// Comp (Sinerji) Sistemi: Weapon, Vitality, Spirit (2 veya 3+ karakter -> %10 / %20 bonus)
// ---------------------------------------------------------------------------
export function evaluateBoardSynergies(board = []) {
  const counts = { Weapon: 0, Vitality: 0, Spirit: 0 };

  board.forEach((card) => {
    if (!card) return;
    const trait = card.trait || card.category;
    if (trait && counts[trait] !== undefined) {
      counts[trait] += 1;
    }
  });

  const traits = Object.values(cfg.synergies).map((syn) => {
    const count = counts[syn.id] || 0;
    let activeTier = null;
    syn.tiers.forEach((tier) => {
      if (count >= tier.count) activeTier = tier;
    });
    const nextTier = syn.tiers.find((tier) => count < tier.count) || syn.tiers[syn.tiers.length - 1];
    const bonusPct = activeTier ? activeTier.bonusPct : 0;

    return {
      ...syn,
      count,
      activeTier,
      bonusPct,
      nextTierCount: nextTier.count,
    };
  });

  const activeTraits = traits.filter((t) => t.bonusPct > 0);
  const totalBonusPct = activeTraits.reduce((sum, t) => sum + t.bonusPct, 0);
  const weaponBonus = traits.find((t) => t.id === 'Weapon')?.bonusPct || 0;
  const vitalityBonus = traits.find((t) => t.id === 'Vitality')?.bonusPct || 0;
  const spiritBonus = traits.find((t) => t.id === 'Spirit')?.bonusPct || 0;

  return {
    traits,
    activeTraits,
    activeCount: activeTraits.length,
    totalBonusPct,
    powerMultiplier: 1 + totalBonusPct,
    damageMultiplier: 1 + weaponBonus + spiritBonus,
    damageReduction: Math.min(0.4, vitalityBonus),
  };
}

// ---------------------------------------------------------------------------
// Counter ve 2x4 Sütun (Ön Saf + Arka Saf) Çarpışma Çözümlemesi
// ---------------------------------------------------------------------------
function heroCounters(attackerCard, defenderCard) {
  if (!attackerCard || !defenderCard) return { value: false, reason: null };
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

export function getCardPower(card, slotIndex = null, synergyMultiplier = 1) {
  if (!card) return 0;
  const rowBonus =
    slotIndex === null
      ? 0
      : isFrontlineSlot(slotIndex)
      ? cfg.rowDefs.frontline.bonusPower
      : cfg.rowDefs.backline.bonusPower;
  const raw = card.power + (card.item ? card.item.power : 0) + rowBonus;
  return Math.round(raw * synergyMultiplier);
}

function getColumnSquad(board, colIndex, synergyMultiplier) {
  const frontSlot = colIndex;
  const backSlot = colIndex + cfg.boardCols;
  const front = board[frontSlot] || null;
  const back = board[backSlot] || null;
  const lead = front || back;
  const support = front && back ? back : null;

  const frontPower = front ? getCardPower(front, frontSlot, synergyMultiplier) : 0;
  const backPower = back ? getCardPower(back, backSlot, synergyMultiplier) : 0;
  const totalPower = front && back ? frontPower + Math.round(backPower * 0.55) : frontPower || backPower;

  return { front, back, lead, support, totalPower };
}

function checkSquadCounter(attackerSquad, defenderSquad) {
  if (!attackerSquad.lead || !defenderSquad.lead) return { value: false, reason: null };
  const leadCheck = heroCounters(attackerSquad.lead, defenderSquad.lead);
  if (leadCheck.value) return leadCheck;
  if (attackerSquad.support) {
    const supportCheck = heroCounters(attackerSquad.support, defenderSquad.lead);
    if (supportCheck.value) {
      return { value: true, reason: `Arka Saf Desteği: ${supportCheck.reason}` };
    }
  }
  return { value: false, reason: null };
}

export function resolveColumn(
  playerBoard,
  enemyBoard,
  colIndex,
  playerSynergies,
  enemySynergies
) {
  const pSquad = getColumnSquad(playerBoard, colIndex, playerSynergies.powerMultiplier);
  const eSquad = getColumnSquad(enemyBoard, colIndex, enemySynergies.powerMultiplier);

  const scalePlayerDamage = (raw) =>
    Math.max(1, Math.round(raw * playerSynergies.damageMultiplier * (1 - enemySynergies.damageReduction)));
  const scaleEnemyDamage = (raw) =>
    Math.max(1, Math.round(raw * enemySynergies.damageMultiplier * (1 - playerSynergies.damageReduction)));

  const base = {
    lane: colIndex,
    player: pSquad.lead,
    enemy: eSquad.lead,
    playerPower: pSquad.totalPower,
    enemyPower: eSquad.totalPower,
    damageToPlayer: 0,
    damageToEnemy: 0,
  };

  if (!pSquad.lead && !eSquad.lead) {
    return { ...base, outcome: 'empty', reason: 'Koridor boş' };
  }
  if (pSquad.lead && !eSquad.lead) {
    return {
      ...base,
      outcome: 'player',
      reason: 'Savunmasız koridor',
      damageToEnemy: scalePlayerDamage(cfg.damage.unopposed),
    };
  }
  if (!pSquad.lead && eSquad.lead) {
    return {
      ...base,
      outcome: 'enemy',
      reason: 'Savunmasız koridor',
      damageToPlayer: scaleEnemyDamage(cfg.damage.unopposed),
    };
  }

  const playerCounter = checkSquadCounter(pSquad, eSquad);
  const enemyCounter = checkSquadCounter(eSquad, pSquad);

  if (playerCounter.value && !enemyCounter.value) {
    return {
      ...base,
      outcome: 'player',
      reason: playerCounter.reason,
      damageToEnemy: scalePlayerDamage(cfg.damage.counter),
    };
  }
  if (enemyCounter.value && !playerCounter.value) {
    return {
      ...base,
      outcome: 'enemy',
      reason: enemyCounter.reason,
      damageToPlayer: scaleEnemyDamage(cfg.damage.counter),
    };
  }

  const prefix = playerCounter.value ? 'Karşılıklı counter • ' : '';
  if (pSquad.totalPower > eSquad.totalPower) {
    return {
      ...base,
      outcome: 'player',
      reason: `${prefix}Güç üstünlüğü (${pSquad.totalPower} - ${eSquad.totalPower})`,
      damageToEnemy: scalePlayerDamage(cfg.damage.clash),
    };
  }
  if (eSquad.totalPower > pSquad.totalPower) {
    return {
      ...base,
      outcome: 'enemy',
      reason: `${prefix}Güç üstünlüğü (${eSquad.totalPower} - ${pSquad.totalPower})`,
      damageToPlayer: scaleEnemyDamage(cfg.damage.clash),
    };
  }
  return { ...base, outcome: 'draw', reason: `${prefix}Eşit güç (${pSquad.totalPower})` };
}

export function resolveCombat(playerBoard, enemyBoard) {
  const playerSynergies = evaluateBoardSynergies(playerBoard);
  const enemySynergies = evaluateBoardSynergies(enemyBoard);
  return Array.from({ length: cfg.boardCols }, (_, colIndex) =>
    resolveColumn(playerBoard, enemyBoard, colIndex, playerSynergies, enemySynergies)
  );
}

// ---------------------------------------------------------------------------
// Yapay Zeka (Düşman) 2x4 Tahta Planlaması (Zorluk & Sinerji Destekli)
// ---------------------------------------------------------------------------
function getHeroCost(hero) {
  return cfg.heroCostByDifficulty[hero.difficulty] ?? cfg.defaultHeroCost;
}

function scoreHeroAgainstTarget(candidate, target, existingTraits = {}) {
  let score = getHeroPower(candidate);
  const trait = getHeroTrait(candidate);
  if (existingTraits[trait] >= 1) score += 18; // Sinerji tamamlama eğilimi

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

function pickCounterHero(targetCard, budget, weighted = false, existingTraits = {}) {
  const affordable = heroList.filter((h) => getHeroCost(h) <= budget);
  if (!affordable.length) return null;

  const target = targetCard ? heroesByName[targetCard.name] : null;
  if (!target) {
    if (!weighted) return randomOf(affordable);
    const sorted = [...affordable].sort(
      (a, b) => scoreHeroAgainstTarget(b, null, existingTraits) - scoreHeroAgainstTarget(a, null, existingTraits)
    );
    return randomOf(sorted.slice(0, 3));
  }

  if (weighted) {
    const scored = affordable
      .map((hero) => ({ hero, score: scoreHeroAgainstTarget(hero, target, existingTraits) }))
      .sort((a, b) => b.score - a.score);
    const bestScore = scored[0].score;
    const topPool = scored.filter((entry) => entry.score >= bestScore - 5).map((e) => e.hero);
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

  const getExistingTraits = () => {
    const counts = { Weapon: 0, Vitality: 0, Spirit: 0 };
    board.forEach((c) => {
      if (c?.trait && counts[c.trait] !== undefined) counts[c.trait] += 1;
    });
    return counts;
  };

  const getPlayerColumnLead = (colIndex) =>
    playerBoard[colIndex] || playerBoard[colIndex + cfg.boardCols] || null;

  const buyHeroForCol = (colIndex) => {
    const affordable = heroList.filter((h) => getHeroCost(h) <= soul);
    if (!affordable.length) return null;

    const canInspectLane = !isFirstRound || diff.weightedCounterPick;
    const playerCard = canInspectLane ? getPlayerColumnLead(colIndex) : null;
    const shouldCounterPick =
      diff.counterPickChance > 0 && Math.random() < diff.counterPickChance;

    const chosenHero = shouldCounterPick
      ? pickCounterHero(playerCard, soul, diff.weightedCounterPick, getExistingTraits())
      : randomOf(affordable);

    if (!chosenHero) return null;
    const card = createHeroCard(chosenHero);
    if (card.cost > soul) return null;
    soul -= card.cost;
    return card;
  };

  // 1) Counterlanan ön saf kahramanlarını değiştir (1. tur hariç)
  if (!isFirstRound && diff.replaceCounteredChance > 0) {
    for (let col = 0; col < cfg.boardCols; col += 1) {
      const frontCard = board[col];
      const playerLead = getPlayerColumnLead(col);
      if (frontCard && playerLead && heroCounters(playerLead, frontCard).value) {
        if (Math.random() < diff.replaceCounteredChance) {
          const replacement = buyHeroForCol(col);
          if (replacement) board[col] = replacement;
        }
      }
    }
  }

  // 2) 2x4 tahtadaki sütunları doldur (Vitality ön safa, Weapon/Spirit arka safa veya boş slota)
  const cols = [0, 1, 2, 3];
  const orderedCols =
    !diff.prioritizePlayerLanes || (isFirstRound && !diff.weightedCounterPick)
      ? cols.sort(() => Math.random() - 0.5)
      : cols.sort(
          (a, b) => Number(Boolean(getPlayerColumnLead(b))) - Number(Boolean(getPlayerColumnLead(a)))
        );

  orderedCols.forEach((col) => {
    if (heroesAddedThisRound >= maxNewHeroesPerRound) return;
    const frontIdx = col;
    const backIdx = col + cfg.boardCols;
    if (board[frontIdx] && board[backIdx]) return;

    const card = buyHeroForCol(col);
    if (!card) return;

    // Kolay modda rastgele satıra koy; Normal/Zor modda Vitality ön safa, nişancı/büyücü arka safa
    if (!diff.prioritizePlayerLanes) {
      const targetIdx = !board[frontIdx] && !board[backIdx]
        ? Math.random() < 0.5 ? frontIdx : backIdx
        : !board[frontIdx] ? frontIdx : backIdx;
      board[targetIdx] = card;
    } else if (!board[frontIdx] && !board[backIdx]) {
      const prefersFront = card.trait === 'Vitality';
      board[prefersFront ? frontIdx : backIdx] = card;
    } else if (!board[frontIdx]) {
      board[frontIdx] = card;
    } else {
      board[backIdx] = card;
    }
    heroesAddedThisRound += 1;
  });

  // 3) Kalan ruhla counter eşya tak (1. tur hariç)
  if (!isFirstRound && diff.counterItemChance > 0) {
    board.forEach((card, slotIdx) => {
      const col = slotIdx % cfg.boardCols;
      const playerCard = getPlayerColumnLead(col);
      if (!card || card.item || !playerCard) return;
      if (Math.random() >= diff.counterItemChance) return;
      const item = pickCounterItem(playerCard, soul, diff.weightedCounterPick);
      if (item) {
        soul -= item.cost;
        board[slotIdx] = { ...card, item };
      }
    });
  }

  return { board, soul };
}
