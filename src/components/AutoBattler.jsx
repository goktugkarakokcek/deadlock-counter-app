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
      className="py-3 sm:py-5 border-b border-white/5 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 space-y-3">
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

        {/* Sol: Aktif Sinerjiler (Comp) Paneli | Sağ: 2x4 TFT Savaş Tahtası */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch">
          <div className="lg:col-span-4 xl:col-span-3 flex">
            <BattlerSynergies
              playerBoard={state.playerBoard}
              enemyBoard={state.enemyBoard}
            />
          </div>
          <div className="lg:col-span-8 xl:col-span-9">
            <BattlerBoard
              playerBoard={state.playerBoard}
              enemyBoard={state.enemyBoard}
              lastCombat={state.lastCombat}
              hasSelection={Boolean(state.selectedUid)}
              disabled={isOver}
              onPlace={actions.placeOnLane}
              onMoveSlot={actions.moveBoardSlot}
              onReturn={actions.returnToBench}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4">
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

        <p className="text-center text-[11px] text-slate-400">{autoBattlerConfig.disclaimer}</p>
      </div>
    </section>
  );
}
