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

function EmptySlot({ label, subLabel }) {
  return (
    <div className="w-full h-full min-w-0 flex flex-col rounded-2xl border border-dashed border-emerald-500/20 bg-zinc-950/75 p-2.5">
      <div className="w-full aspect-square rounded-xl bg-black/60 border border-white/5 flex items-center justify-center p-3 text-center">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          {label}
        </span>
      </div>
      <div className="pt-2 px-0.5">
        <p className="text-xs font-bold text-slate-400 truncate">{subLabel}</p>
        <p className="text-[10px] uppercase tracking-wider text-slate-500 truncate">Slot Hazır</p>
      </div>
    </div>
  );
}

function LaneResult({ result }) {
  if (!result) {
    return (
      <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-300/70">
        ✦ VS • Çarpışma Hattı ✦
      </span>
    );
  }
  const style = outcomeStyles[result.outcome];
  const damage = result.damageToEnemy || result.damageToPlayer;
  return (
    <div className="text-center space-y-1 min-w-0">
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black border ${style.className}`}
      >
        <span aria-hidden="true">{style.icon}</span>
        {style.label}
        {damage > 0 && <span>• {damage} HP</span>}
      </span>
      <p className="text-[10px] text-slate-200 leading-snug break-words">{result.reason}</p>
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
      className="relative rounded-3xl border border-amber-500/30 ring-1 ring-inset ring-emerald-500/20 p-4 sm:p-6 shadow-lg overflow-hidden bg-[#06090e] bg-[radial-gradient(ellipse_75%_55%_at_50%_50%,rgba(16,185,129,0.14),rgba(88,28,135,0.18)_55%,rgba(5,7,11,0.96)_100%)]"
    >
      {/* 1930'lar Noir & Okült Taktik Masası Katmanları (Grid + Mistik Çember + Vignette) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(52,211,153,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:28px_28px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.75)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full border border-emerald-400/10 ring-8 ring-purple-500/5"
      />

      {/* Taktik Masası Köşe İşaretleri */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-amber-400/50 rounded-tl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-amber-400/50 rounded-tr"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-amber-400/50 rounded-bl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-amber-400/50 rounded-br"
      />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 pb-3.5 mb-4 border-b border-emerald-500/15">
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
          />
          <h3 id="battler-board-heading" className="text-base sm:text-lg font-extrabold text-white">
            Okült Taktik Masası • 4 Koridor Savaş Alanı
          </h3>
        </div>
        <span className="text-[11px] font-semibold text-emerald-200/80">
          Üst Hat: Yapay Zeka (Kırmızı) • Alt Hat: Sen (Kehribar)
        </span>
      </div>

      <ol className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {autoBattlerConfig.lanes.map((lane, i) => {
          const enemyCard = enemyBoard[i];
          const playerCard = playerBoard[i];
          return (
            <li key={lane.id} className="min-w-0">
              <article
                aria-label={`${lane.label} çarpışma alanı`}
                className="h-full flex flex-col gap-3 rounded-2xl bg-zinc-950/85 border border-emerald-500/20 ring-1 ring-inset ring-purple-500/10 p-3 shadow-md"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-300/80 sm:hidden">
                    Düşman
                  </span>
                  <h4
                    className={`mx-auto px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-widest border ${laneAccent[lane.accent]}`}
                  >
                    {lane.label}
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300/80 sm:hidden">
                    Sen
                  </span>
                </div>

                {/* Küçük ekranda yan yana (2 sütun), sm ve üzerinde alt alta dizilim */}
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-2.5 sm:gap-3 items-stretch flex-1 min-w-0">
                  <div className="min-w-0 flex flex-col order-1">
                    {enemyCard ? (
                      <BattlerCard card={enemyCard} size="board" side="enemy" />
                    ) : (
                      <EmptySlot label="Düşman Boş" subLabel="Rakip Slotu" />
                    )}
                  </div>

                  <div className="col-span-2 sm:col-span-1 order-3 sm:order-2 min-h-[2.75rem] flex items-center justify-center border-t sm:border-y border-emerald-500/15 bg-black/40 rounded-lg px-2 py-2">
                    <LaneResult result={lastCombat?.[i]} />
                  </div>

                  <div className="min-w-0 flex flex-col gap-2 order-2 sm:order-3">
                    {playerCard ? (
                      <BattlerCard card={playerCard} size="board" side="player" />
                    ) : hasSelection && !disabled ? (
                      <button
                        type="button"
                        onClick={() => onPlace(i)}
                        aria-label={`Seçili kartı ${lane.label} koridoruna yerleştir`}
                        className="w-full h-full min-w-0 flex flex-col rounded-2xl border-2 border-dashed border-purple-400/60 bg-purple-950/30 p-2.5 text-center transform-gpu will-change-transform transition-[transform,background-color] duration-200 hover:scale-[1.02] hover:bg-purple-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                      >
                        <div className="w-full aspect-square rounded-xl bg-purple-950/60 border border-purple-400/30 flex items-center justify-center p-2">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-purple-200">
                            + Yerleştir
                          </span>
                        </div>
                        <div className="pt-2 px-0.5 text-left">
                          <p className="text-xs font-bold text-purple-200 truncate">Seçili Kartı Koy</p>
                          <p className="text-[10px] uppercase tracking-wider text-purple-300/80 truncate">
                            {lane.label}
                          </p>
                        </div>
                      </button>
                    ) : (
                      <EmptySlot label="Slot Boş" subLabel="Senin Slotun" />
                    )}

                    {playerCard && !disabled && (
                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          type="button"
                          onClick={() => onPlace(i)}
                          disabled={!hasSelection}
                          aria-label={`Seçili kartı ${lane.label} koridoruna yerleştir veya eşya olarak tak`}
                          className="text-[10px] font-bold py-1.5 px-1 rounded-lg bg-purple-500/15 text-purple-200 border border-purple-500/40 hover:bg-purple-500/25 transition-colors disabled:opacity-30 disabled:cursor-not-allowed truncate focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                        >
                          Değiştir/Tak
                        </button>
                        <button
                          type="button"
                          onClick={() => onReturn(i)}
                          aria-label={`${playerCard.name} kartını yedek kulübesine geri al`}
                          className="text-[10px] font-bold py-1.5 px-1 rounded-lg bg-white/5 text-slate-200 border border-white/10 hover:bg-white/10 transition-colors truncate focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                        >
                          Geri Al
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
