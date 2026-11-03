import { autoBattlerConfig } from '../data';
import {
  createEmptyBoard,
  getAiIncome,
  getIncome,
  getSellValue,
  isFrontlineSlot,
  planAiBoard,
  resolveCombat,
  rollShop,
} from './autoBattlerEngine';

const cfg = autoBattlerConfig;

const getSlotLabel = (slotIndex) => {
  const col = slotIndex % cfg.boardCols;
  const laneLabel = cfg.lanes[col]?.label || `Koridor ${col + 1}`;
  const rowLabel = isFrontlineSlot(slotIndex)
    ? cfg.rowDefs.frontline.shortLabel
    : cfg.rowDefs.backline.shortLabel;
  return `${laneLabel} (${rowLabel})`;
};

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
    message: `Tur 1 (${diffLabel} Mod): Marketten kartları doğrudan 2x4 tahtadaki slotlara veya Yedek Kulübesine sürükle (veya tıkla).`,
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
        return { ...state, message: 'Yedek kulübesi dolu. Kart sat veya doğrudan tahtaya sürükle.' };
      const shop = state.shop.map((c, i) => (i === action.index ? null : c));
      return {
        ...state,
        shop,
        bench: [...state.bench, card],
        playerSoul: state.playerSoul - card.cost,
        selectedUid: card.uid,
        message: `${card.name} Yedek Kulübesine eklendi. Tahtadaki bir slota sürükle veya tıkla.`,
      };
    }

    case 'BUY_TO_BOARD': {
      const { shopIndex, slotIndex } = action;
      const card = state.shop[shopIndex];
      if (!card || slotIndex == null) return state;
      if (card.cost > state.playerSoul)
        return { ...state, message: `Yetersiz ruh: ${card.name} için ${card.cost} ruh gerekli.` };

      const occupant = state.playerBoard[slotIndex];
      const playerBoard = [...state.playerBoard];
      let bench = [...state.bench];
      const slotLabel = getSlotLabel(slotIndex);

      if (card.kind === 'hero') {
        if (occupant && bench.length >= cfg.benchSize) {
          return {
            ...state,
            message: 'Hedef slot dolu ve yedek kulübesinde boş yer yok; boş bir tahta slotuna sürükle.',
          };
        }
        if (occupant) bench = [...bench, occupant];
        playerBoard[slotIndex] = card;
        const shop = state.shop.map((c, i) => (i === shopIndex ? null : c));
        return {
          ...state,
          shop,
          bench,
          playerBoard,
          playerSoul: state.playerSoul - card.cost,
          selectedUid: null,
          message: `${card.name} (${card.cost} ruh) satın alındı ve doğrudan ${slotLabel} slotuna yerleştirildi.`,
        };
      }

      if (!occupant) {
        return {
          ...state,
          message: 'Eşya kartları yalnızca üzerinde kahraman bulunan tahta slotlarına sürüklenebilir.',
        };
      }
      if (occupant.item && bench.length >= cfg.benchSize) {
        return {
          ...state,
          message: 'Kahramanın üzerinde zaten eşya var ve yedek kulübesi dolu.',
        };
      }
      if (occupant.item) bench = [...bench, occupant.item];
      playerBoard[slotIndex] = { ...occupant, item: card };
      const shop = state.shop.map((c, i) => (i === shopIndex ? null : c));
      return {
        ...state,
        shop,
        bench,
        playerBoard,
        playerSoul: state.playerSoul - card.cost,
        selectedUid: null,
        message: `${card.name} (${card.cost} ruh) satın alındı ve ${occupant.name} kahramanına takıldı.`,
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
      const targetUid = action.benchUid || state.selectedUid;
      const card = findBenchCard(state, targetUid);
      if (!card) return { ...state, message: 'Önce yedek kulübesinden bir kart seç veya sürükle.' };
      const slotIndex = action.lane;
      const occupant = state.playerBoard[slotIndex];
      let bench = state.bench.filter((c) => c.uid !== card.uid);
      const playerBoard = [...state.playerBoard];
      const slotLabel = getSlotLabel(slotIndex);

      if (card.kind === 'hero') {
        playerBoard[slotIndex] = card;
        if (occupant) bench = [...bench, occupant];
        return {
          ...state,
          bench,
          playerBoard,
          selectedUid: null,
          message: `${card.name}, ${slotLabel} slotuna yerleştirildi.`,
        };
      }

      if (!occupant)
        return { ...state, message: 'Eşyalar yalnızca kahraman bulunan tahta slotlarına takılabilir.' };
      if (occupant.item) bench = [...bench, occupant.item];
      playerBoard[slotIndex] = { ...occupant, item: card };
      return {
        ...state,
        bench,
        playerBoard,
        selectedUid: null,
        message: `${card.name}, ${occupant.name} kahramanına takıldı.`,
      };
    }

    case 'MOVE_BOARD_SLOT': {
      const { fromSlot, toSlot } = action;
      if (fromSlot === toSlot || fromSlot == null || toSlot == null) return state;
      const sourceCard = state.playerBoard[fromSlot];
      if (!sourceCard) return state;
      const playerBoard = [...state.playerBoard];
      const targetCard = playerBoard[toSlot];
      playerBoard[toSlot] = sourceCard;
      playerBoard[fromSlot] = targetCard || null;
      return {
        ...state,
        playerBoard,
        selectedUid: null,
        message: `${sourceCard.name}, ${getSlotLabel(toSlot)} konumuna taşındı.`,
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
