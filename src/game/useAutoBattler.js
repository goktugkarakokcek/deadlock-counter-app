import { useCallback, useReducer } from 'react';
import { autoBattlerReducer, createInitialState, prepareEndRoundPayload } from './autoBattlerReducer';
import { rollShop } from './autoBattlerEngine';

export default function useAutoBattler() {
  const [state, dispatch] = useReducer(autoBattlerReducer, undefined, createInitialState);

  const buyCard = useCallback((index) => dispatch({ type: 'BUY_CARD', index }), []);
  const rerollShop = useCallback(() => dispatch({ type: 'REROLL_SHOP', shop: rollShop() }), []);
  const selectBenchCard = useCallback((uid) => dispatch({ type: 'SELECT_BENCH_CARD', uid }), []);
  const sellBenchCard = useCallback((uid) => dispatch({ type: 'SELL_BENCH_CARD', uid }), []);
  const placeOnLane = useCallback((lane) => dispatch({ type: 'PLACE_ON_LANE', lane }), []);
  const returnToBench = useCallback((lane) => dispatch({ type: 'RETURN_TO_BENCH', lane }), []);
  const endRound = useCallback(
    () => dispatch({ type: 'END_ROUND', payload: prepareEndRoundPayload(state) }),
    [state]
  );
  const resetGame = useCallback(
    () => dispatch({ type: 'RESET_GAME', state: createInitialState() }),
    []
  );

  return {
    state,
    actions: {
      buyCard,
      rerollShop,
      selectBenchCard,
      sellBenchCard,
      placeOnLane,
      returnToBench,
      endRound,
      resetGame,
    },
  };
}
