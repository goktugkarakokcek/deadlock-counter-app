import { autoBattlerConfig } from '../data';
import {
  createEmptyBoard,
  getAiIncome,
  getIncome,
  getSellValue,
  planAiBoard,
  resolveCombat,
  rollShop,
} from './autoBattlerEngine';

const cfg = autoBattlerConfig;

// Rastgelelik içeren tüm hesaplamalar (market, AI planı) reducer dışında
// üretilir ve payload olarak gelir; böylece reducer saf (pure) kalır.
export function createInitialState(difficulty = cfg.defaultDifficulty) {
  const playerIncome = getIncome(1);
  const aiIncome = getAiIncome(1, difficulty);
  const diffLabel = cfg.difficulties?.[difficulty]?.label || 'Normal';
  return {
    phase: 'planning',
    difficulty,
    round: 1,
    playerHp: cfg.startingHp,
    enemyHp: cfg.startingHp,
    playerSoul: playerIncome,
    enemySoul: aiIncome,
    shop: rollShop(),
    bench: [],
    playerBoard: createEmptyBoard(),
    enemyBoard: createEmptyBoard(),
    selectedUid: null,
    lastCombat: null,
    winner: null,
    message: `Tur 1 (${diffLabel} Mod): Her iki tahta boş. Marketten kart satın alıp koridorlara yerleştir ve Turu Bitir.`,
  };
}

export function prepareEndRoundPayload(state) {
  const ai = planAiBoard(
    state.enemyBoard,
    state.enemySoul,
    state.playerBoard,
    state.round,
    state.difficulty
  );
  const combat = resolveCombat(state.playerBoard, ai.board);
  const damageToPlayer = combat.reduce((sum, r) => sum + r.damageToPlayer, 0);
  const damageToEnemy = combat.reduce((sum, r) => sum + r.damageToEnemy, 0);
  const playerHp = Math.max(0, state.playerHp - damageToPlayer);
  const enemyHp = Math.max(0, state.enemyHp - damageToEnemy);
  const isOver = playerHp === 0 || enemyHp === 0;

  if (isOver) {
    return {
      combat,
      playerHp,
      enemyHp,
      isOver,
      damageToPlayer,
      damageToEnemy,
      enemyBoard: ai.board,
      enemySoul: ai.soul,
    };
  }

  const nextRound = state.round + 1;
  const income = getIncome(nextRound);
  const aiIncome = getAiIncome(nextRound, state.difficulty);
  return {
    combat,
    playerHp,
    enemyHp,
    isOver,
    damageToPlayer,
    damageToEnemy,
    income,
    enemyBoard: ai.board,
    enemySoul: ai.soul + aiIncome,
    shop: rollShop(),
  };
}

const findBenchCard = (state, uid) => state.bench.find((c) => c.uid === uid);

export function autoBattlerReducer(state, action) {
  if (
    state.phase === 'gameOver' &&
    action.type !== 'RESET_GAME' &&
    action.type !== 'SET_DIFFICULTY'
  ) {
    return state;
  }

  switch (action.type) {
    case 'SET_DIFFICULTY': {
      const nextDiff = cfg.difficulties?.[action.difficulty]
        ? action.difficulty
        : cfg.defaultDifficulty;
      const diffInfo = cfg.difficulties[nextDiff];
      const enemySoul =
        state.round === 1 && !state.lastCombat
          ? getAiIncome(1, nextDiff)
          : state.enemySoul;
      return {
        ...state,
        difficulty: nextDiff,
        enemySoul,
        message: `Zorluk seviyesi "${diffInfo.label}" olarak ayarlandı: ${diffInfo.description}`,
      };
    }

    case 'BUY_CARD': {
      const card = state.shop[action.index];
      if (!card) return state;
      if (card.cost > state.playerSoul)
        return { ...state, message: `Yetersiz ruh: ${card.name} için ${card.cost} ruh gerekli.` };
      if (state.bench.length >= cfg.benchSize)
        return { ...state, message: 'Yedek kulübesi dolu. Kart sat veya tahtaya yerleştir.' };
      const shop = state.shop.map((c, i) => (i === action.index ? null : c));
      return {
        ...state,
        shop,
        bench: [...state.bench, card],
        playerSoul: state.playerSoul - card.cost,
        selectedUid: card.uid,
        message: `${card.name} satın alındı. Yerleştirmek için bir koridor seç.`,
      };
    }

    case 'REROLL_SHOP': {
      if (state.playerSoul < cfg.rerollCost)
        return { ...state, message: 'Marketi yenilemek için yeterli ruh yok.' };
      return {
        ...state,
        shop: action.shop,
        playerSoul: state.playerSoul - cfg.rerollCost,
        message: 'Market yenilendi.',
      };
    }

    case 'SELECT_BENCH_CARD':
      return {
        ...state,
        selectedUid: state.selectedUid === action.uid ? null : action.uid,
      };

    case 'SELL_BENCH_CARD': {
      const card = findBenchCard(state, action.uid);
      if (!card) return state;
      const value = getSellValue(card);
      return {
        ...state,
        bench: state.bench.filter((c) => c.uid !== action.uid),
        playerSoul: state.playerSoul + value,
        selectedUid: state.selectedUid === action.uid ? null : state.selectedUid,
        message: `${card.name} ${value} ruh karşılığında satıldı.`,
      };
    }

    case 'PLACE_ON_LANE': {
      const card = findBenchCard(state, state.selectedUid);
      if (!card) return { ...state, message: 'Önce yedek kulübesinden bir kart seç.' };
      const occupant = state.playerBoard[action.lane];
      let bench = state.bench.filter((c) => c.uid !== card.uid);
      const playerBoard = [...state.playerBoard];

      if (card.kind === 'hero') {
        playerBoard[action.lane] = card;
        if (occupant) bench = [...bench, occupant];
        return {
          ...state,
          bench,
          playerBoard,
          selectedUid: null,
          message: `${card.name}, ${cfg.lanes[action.lane].label} koridoruna yerleştirildi.`,
        };
      }

      if (!occupant)
        return { ...state, message: 'Eşyalar yalnızca kahraman bulunan koridorlara takılabilir.' };
      if (occupant.item) bench = [...bench, occupant.item];
      playerBoard[action.lane] = { ...occupant, item: card };
      return {
        ...state,
        bench,
        playerBoard,
        selectedUid: null,
        message: `${card.name}, ${occupant.name} kahramanına takıldı.`,
      };
    }

    case 'RETURN_TO_BENCH': {
      const occupant = state.playerBoard[action.lane];
      if (!occupant) return state;
      if (state.bench.length >= cfg.benchSize)
        return { ...state, message: 'Yedek kulübesi dolu; kahraman geri alınamadı.' };
      const playerBoard = state.playerBoard.map((c, i) => (i === action.lane ? null : c));
      return {
        ...state,
        playerBoard,
        bench: [...state.bench, occupant],
        message: `${occupant.name} yedek kulübesine geri alındı.`,
      };
    }

    case 'END_ROUND': {
      const p = action.payload;
      const summary = `Tur ${state.round}: Rakibe ${p.damageToEnemy} hasar verdin, ${p.damageToPlayer} hasar aldın.`;

      if (p.isOver) {
        const winner =
          p.playerHp === 0 && p.enemyHp === 0 ? 'draw' : p.enemyHp === 0 ? 'player' : 'enemy';
        return {
          ...state,
          phase: 'gameOver',
          playerHp: p.playerHp,
          enemyHp: p.enemyHp,
          enemySoul: p.enemySoul,
          enemyBoard: p.enemyBoard,
          lastCombat: p.combat,
          winner,
          selectedUid: null,
          message: summary,
        };
      }

      return {
        ...state,
        round: state.round + 1,
        playerHp: p.playerHp,
        enemyHp: p.enemyHp,
        playerSoul: state.playerSoul + p.income,
        enemySoul: p.enemySoul,
        enemyBoard: p.enemyBoard,
        shop: p.shop,
        lastCombat: p.combat,
        selectedUid: null,
        message: `${summary} +${p.income} ruh kazandın.`,
      };
    }

    case 'RESET_GAME':
      return action.state;

    default:
      return state;
  }
}
