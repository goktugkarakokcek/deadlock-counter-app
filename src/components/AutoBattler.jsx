import { useEffect, useRef, useState } from 'react';
import { autoBattlerConfig } from '../data';
import BattlerHud from './BattlerHud';
import BattlerBoard from './BattlerBoard';
import BattlerSynergies from './BattlerSynergies';
import BattlerShop from './BattlerShop';
import BattlerBench from './BattlerBench';
import BattlerGameOver from './BattlerGameOver';

export default function AutoBattler({ game }) {
  const { state, actions } = game;
  const isOver = state.phase === 'gameOver';
  const { damage, roundDurationSeconds } = autoBattlerConfig;

  const [timeLeft, setTimeLeft] = useState(roundDurationSeconds);
  const endRoundRef = useRef(actions.endRound);

  useEffect(() => {
    endRoundRef.current = actions.endRound;
  }, [actions.endRound]);

  // Yeni tura geçildiğinde sayacı sıfırla
  useEffect(() => {
    setTimeLeft(roundDurationSeconds);
  }, [state.round, roundDurationSeconds]);

  // 1 saniyelik geri sayım; 0'a ulaştığında otomatik olarak Turu Bitir tetiklenir
  useEffect(() => {
    if (isOver) return undefined;

    const timerId = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timerId);
  }, [isOver, state.round]);

  useEffect(() => {
    if (!isOver && timeLeft === 0) {
      setTimeLeft(roundDurationSeconds);
      endRoundRef.current();
    }
  }, [timeLeft, isOver, roundDurationSeconds]);

  const handleEndRound = () => {
    setTimeLeft(roundDurationSeconds);
    actions.endRound();
  };

  const handleResetGame = () => {
    setTimeLeft(roundDurationSeconds);
    actions.resetGame();
  };

  return (
    <section
      id="autobattler-section"
      aria-labelledby="autobattler-heading"
      className="w-full max-w-full overflow-x-hidden py-3 sm:py-5 border-b border-white/5"
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 space-y-3 overflow-x-hidden">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-purple-500/15 text-purple-300 border border-purple-500/30">
              TFT Taktiksel Çarpışma
            </span>
            <h2
              id="autobattler-heading"
              className="text-lg sm:text-2xl font-black text-white tracking-tight"
            >
              Deadlock{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500">
                Auto-Battler
              </span>
            </h2>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug">
            Counter: <strong className="text-amber-300">{damage.counter} HP</strong> • Güç Üstünlüğü:{' '}
            <strong className="text-amber-300">{damage.clash} HP</strong> • Savunmasız:{' '}
            <strong className="text-amber-300">{damage.unopposed} HP</strong> • Sinerji (2/3+):{' '}
            <strong className="text-emerald-300">+%10/+%20</strong>
          </p>
        </header>

        <BattlerHud
          state={state}
          timeLeft={timeLeft}
          onSetDifficulty={actions.setDifficulty}
          onEndRound={handleEndRound}
          onReset={handleResetGame}
        />

        {isOver && (
          <BattlerGameOver
            winner={state.winner}
            round={state.round}
            onReset={handleResetGame}
          />
        )}

        {/* Mobil: Savaş Tahtası (order-1) -> Market & Bench (order-2) -> Sinerji Paneli (order-3)
            Masaüstü (lg:): Sol Sinerji (lg:order-1 lg:col-span-4 / xl:col-span-3) + Sağ Tahta (lg:order-2 lg:col-span-8 / xl:col-span-9), altlarında Market & Bench (lg:order-3) */}
        <div className="w-full max-w-full flex flex-col lg:grid lg:grid-cols-12 gap-3 sm:gap-4 items-stretch">
          {/* Savaş Tahtası: Mobilde ilk sırada, Masaüstünde sağ sütunda */}
          <div className="order-1 lg:order-2 lg:col-span-8 xl:col-span-9 flex flex-col w-full min-w-0">
            <BattlerBoard
              playerBoard={state.playerBoard}
              enemyBoard={state.enemyBoard}
              lastCombat={state.lastCombat}
              hasSelection={Boolean(state.selectedUid)}
              disabled={isOver}
              onPlace={actions.placeOnLane}
              onBuyToSlot={actions.buyCardToBoard}
              onMoveSlot={actions.moveBoardSlot}
              onReturn={actions.returnToBench}
            />
          </div>

          {/* Market & Yedek Kulübesi: Mobilde 2. sırada, Masaüstünde 3. sırada (alt satır) */}
          <div className="order-2 lg:order-3 lg:col-span-12 w-full grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4">
            <BattlerShop
              shop={state.shop}
              soul={state.playerSoul}
              disabled={isOver}
              onBuy={actions.buyCard}
              onReroll={actions.rerollShop}
            />
            <BattlerBench
              bench={state.bench}
              selectedUid={state.selectedUid}
              disabled={isOver}
              onSelect={actions.selectBenchCard}
              onSell={actions.sellBenchCard}
              onBuyFromShop={actions.buyCard}
              onReturnFromBoard={actions.returnToBench}
            />
          </div>

          {/* Sinerji Paneli: Mobilde en altta (3. sırada), Masaüstünde 1. sırada (sol sütunda) */}
          <div className="order-3 lg:order-1 lg:col-span-4 xl:col-span-3 flex flex-col w-full min-w-0">
            <BattlerSynergies
              playerBoard={state.playerBoard}
              enemyBoard={state.enemyBoard}
            />
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-400">{autoBattlerConfig.disclaimer}</p>
      </div>
    </section>
  );
}
