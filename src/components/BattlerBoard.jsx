import BattlerCard from './BattlerCard';
import { autoBattlerConfig } from '../data';

const laneAccent = {
  amber: 'text-amber-300 border-amber-500/40 bg-amber-500/10',
  purple: 'text-purple-300 border-purple-500/40 bg-purple-500/10',
  rose: 'text-rose-300 border-rose-500/40 bg-rose-500/10',
  emerald: 'text-emerald-300 border-emerald-500/40 bg-emerald-500/10',
};

const outcomeStyles = {
  player: { label: 'Kazandın', className: 'text-amber-200 bg-amber-500/15 border-amber-500/40', icon: '▲' },
  enemy: { label: 'Kaybettin', className: 'text-rose-200 bg-rose-500/15 border-rose-500/40', icon: '▼' },
  draw: { label: 'Berabere', className: 'text-slate-200 bg-white/5 border-white/15', icon: '=' },
  empty: { label: 'Boş', className: 'text-slate-400 bg-black/30 border-white/10', icon: '·' },
};

function EmptySlot({ label }) {
  return (
    <div className="h-full min-h-[11rem] rounded-xl border border-dashed border-white/10 bg-black/30 flex items-center justify-center px-3 text-center text-[11px] font-bold uppercase tracking-wider text-slate-500">
      {label}
    </div>
  );
}

function LaneResult({ result }) {
  if (!result) {
    return <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">VS</span>;
  }
  const style = outcomeStyles[result.outcome];
  const damage = result.damageToEnemy || result.damageToPlayer;
  return (
    <div className="text-center space-y-1">
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-black border ${style.className}`}>
        <span aria-hidden="true">{style.icon}</span>
        {style.label}
        {damage > 0 && <span>• {damage} HP</span>}
      </span>
      <p className="text-[10px] text-slate-400 leading-snug">{result.reason}</p>
    </div>
  );
}

export default function BattlerBoard({
  playerBoard,
  enemyBoard,
  lastCombat,
  hasSelection,
  disabled,
  onPlace,
  onReturn,
}) {
  return (
    <section
      aria-labelledby="battler-board-heading"
      className="rounded-2xl bg-gradient-to-b from-rose-950/30 via-black/50 to-amber-950/20 border border-white/10 p-4 sm:p-5 shadow-md"
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <h3 id="battler-board-heading" className="text-lg font-extrabold text-white">
          Savaş Tahtası
        </h3>
        <span className="text-[11px] font-semibold text-slate-400">Üst sıra: Yapay Zeka • Alt sıra: Sen</span>
      </div>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {autoBattlerConfig.lanes.map((lane, i) => {
          const enemyCard = enemyBoard[i];
          const playerCard = playerBoard[i];
          return (
            <li key={lane.id}>
              <article
                aria-label={`${lane.label} çarpışma alanı`}
                className="h-full flex flex-col gap-3 rounded-xl bg-black/40 border border-white/10 p-3"
              >
                <h4 className={`self-center px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-widest border ${laneAccent[lane.accent]}`}>
                  {lane.label}
                </h4>

                <div>
                  {enemyCard ? (
                    <BattlerCard card={enemyCard} size="board" side="enemy" />
                  ) : (
                    <EmptySlot label="Düşman slotu boş" />
                  )}
                </div>

                <div className="min-h-[3rem] flex items-center justify-center border-y border-white/5 py-2">
                  <LaneResult result={lastCombat?.[i]} />
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  {playerCard ? (
                    <BattlerCard card={playerCard} size="board" side="player" />
                  ) : hasSelection && !disabled ? (
                    <button
                      type="button"
                      onClick={() => onPlace(i)}
                      aria-label={`Seçili kartı ${lane.label} koridoruna yerleştir`}
                      className="min-h-[11rem] rounded-xl border-2 border-dashed border-purple-400/50 bg-purple-500/10 text-xs font-bold uppercase tracking-wider text-purple-200 transform-gpu will-change-transform transition-[transform,background-color] duration-200 hover:scale-[1.02] hover:bg-purple-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                    >
                      + Buraya Yerleştir
                    </button>
                  ) : (
                    <EmptySlot label="Senin slotun boş" />
                  )}

                  {playerCard && !disabled && (
                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        type="button"
                        onClick={() => onPlace(i)}
                        disabled={!hasSelection}
                        aria-label={`Seçili kartı ${lane.label} koridoruna yerleştir veya eşya olarak tak`}
                        className="text-[10px] font-bold py-1.5 rounded-lg bg-purple-500/15 text-purple-200 border border-purple-500/40 hover:bg-purple-500/25 transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                      >
                        Değiştir / Tak
                      </button>
                      <button
                        type="button"
                        onClick={() => onReturn(i)}
                        aria-label={`${playerCard.name} kartını yedek kulübesine geri al`}
                        className="text-[10px] font-bold py-1.5 rounded-lg bg-white/5 text-slate-200 border border-white/10 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                      >
                        Geri Al
                      </button>
                    </div>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
