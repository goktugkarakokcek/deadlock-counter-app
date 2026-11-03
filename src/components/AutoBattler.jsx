import { useEffect, useRef, useState } from 'react';
import { autoBattlerConfig } from '../data';
import BattlerHud from './BattlerHud';
import BattlerBoard from './BattlerBoard';
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
      className="py-8 sm:py-14 border-b border-white/5 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
        <header className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-purple-500/15 text-purple-300 border border-purple-500/30 mb-3">
            Mini Oyun • Taktiksel Çarpışma
          </span>
          <h2
            id="autobattler-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight"
          >
            Deadlock{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500">
              Auto-Battler
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Her tur ruh kazan, marketten kart satın al ve {roundDurationSeconds} saniye içinde 4
            koridora yerleştir. <strong className="text-white">Turu Bitir</strong> dediğinde (veya süre
            dolduğunda) karşılıklı koridorlar çarpışır: counter avantajı{' '}
            <strong className="text-amber-300">{damage.counter} HP</strong>, güç üstünlüğü{' '}
            <strong className="text-amber-300">{damage.clash} HP</strong>, savunmasız koridor{' '}
            <strong className="text-amber-300">{damage.unopposed} HP</strong> hasar verir.
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

        <BattlerBoard
          playerBoard={state.playerBoard}
          enemyBoard={state.enemyBoard}
          lastCombat={state.lastCombat}
          hasSelection={Boolean(state.selectedUid)}
          disabled={isOver}
          onPlace={actions.placeOnLane}
          onReturn={actions.returnToBench}
        />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6">
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
          />
        </div>

        <p className="text-center text-xs text-slate-400">{autoBattlerConfig.disclaimer}</p>
      </div>
    </section>
  );
}
