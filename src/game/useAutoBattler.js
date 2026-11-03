import { useCallback, useReducer } from 'react';
import { autoBattlerReducer, createInitialState, prepareEndRoundPayload } from './autoBattlerReducer';
import { rollShop } from './autoBattlerEngine';

export default function useAutoBattler() {
  const [state, dispatch] = useReducer(autoBattlerReducer, undefined, createInitialState);

  const setDifficulty = useCallback(
    (difficulty) => dispatch({ type: 'SET_DIFFICULTY', difficulty }),
    []
  );
  const buyCard = useCallback((index) => dispatch({ type: 'BUY_CARD', index }), []);
  const buyCardToBoard = useCallback(
    (shopIndex, slotIndex) => dispatch({ type: 'BUY_TO_BOARD', shopIndex, slotIndex }),
    []
  );
  const rerollShop = useCallback(() => dispatch({ type: 'REROLL_SHOP', shop: rollShop() }), []);
  const selectBenchCard = useCallback((uid) => dispatch({ type: 'SELECT_BENCH_CARD', uid }), []);
  const sellBenchCard = useCallback((uid) => dispatch({ type: 'SELL_BENCH_CARD', uid }), []);
  const placeOnLane = useCallback(
    (lane, benchUid = null) => dispatch({ type: 'PLACE_ON_LANE', lane, benchUid }),
    []
  );
  const moveBoardSlot = useCallback(
    (fromSlot, toSlot) => dispatch({ type: 'MOVE_BOARD_SLOT', fromSlot, toSlot }),
    []
  );
  const returnToBench = useCallback((lane) => dispatch({ type: 'RETURN_TO_BENCH', lane }), []);
  const endRound = useCallback(
    () => dispatch({ type: 'END_ROUND', payload: prepareEndRoundPayload(state) }),
    [state]
  );
  const resetGame = useCallback(
    () => dispatch({ type: 'RESET_GAME', state: createInitialState(state.difficulty) }),
    [state.difficulty]
  );

  return {
    state,
    actions: {
      setDifficulty,
      buyCard,
      buyCardToBoard,
      rerollShop,
      selectBenchCard,
      sellBenchCard,
      placeOnLane,
      moveBoardSlot,
      returnToBench,
      endRound,
      resetGame,
    },
  };
}
