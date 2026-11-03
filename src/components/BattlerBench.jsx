import BattlerCard from './BattlerCard';
import { autoBattlerConfig } from '../data';
import { getSellValue } from '../game/autoBattlerEngine';

export default function BattlerBench({ bench, selectedUid, disabled, onSelect, onSell }) {
  const emptySlots = Math.max(0, autoBattlerConfig.benchSize - bench.length);

  return (
    <section
      aria-labelledby="battler-bench-heading"
      className="rounded-2xl bg-black/40 border border-white/10 p-3.5 sm:p-5 shadow-md overflow-hidden"
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="min-w-0">
          <h3 id="battler-bench-heading" className="text-base sm:text-lg font-extrabold text-white">
            Yedek Kulübesi
          </h3>
          <p className="text-xs text-slate-400">Bir kart seç, ardından tahtadaki koridora yerleştir.</p>
        </div>
        <span className="shrink-0 text-xs font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
          {bench.length} / {autoBattlerConfig.benchSize}
        </span>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-3">
        {bench.map((card) => {
          const isSelected = card.uid === selectedUid;
          return (
            <li key={card.uid} className="min-w-0 flex flex-col gap-1.5">
              <button
                type="button"
                onClick={() => onSelect(card.uid)}
                disabled={disabled}
                aria-pressed={isSelected}
                aria-label={`${card.name} kartını ${isSelected ? 'seçimden çıkar' : 'seç'}`}
                className="w-full flex-1 min-w-0 text-left rounded-2xl transform-gpu will-change-transform transition-transform duration-200 hover:scale-[1.03] disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                <BattlerCard card={card} size="bench" side="player" isSelected={isSelected} />
              </button>
              <button
                type="button"
                onClick={() => onSell(card.uid)}
                disabled={disabled}
                aria-label={`${card.name} kartını ${getSellValue(card)} ruh karşılığında sat`}
                className="w-full text-[10px] font-bold py-1.5 px-1 rounded-lg bg-rose-500/10 text-rose-200 border border-rose-500/30 hover:bg-rose-500/20 transition-colors disabled:opacity-40 truncate focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
              >
                Sat (+◈ {getSellValue(card)})
              </button>
            </li>
          );
        })}
        {Array.from({ length: emptySlots }, (_, i) => (
          <li
            key={`bench-empty-${i}`}
            aria-hidden="true"
            className="min-w-0 flex flex-col rounded-2xl border border-dashed border-white/10 bg-black/20 p-2"
          >
            <div className="w-full aspect-square rounded-xl bg-black/30 border border-white/5 flex items-center justify-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                Boş
              </span>
            </div>
            <div className="pt-2 px-0.5">
              <p className="text-xs font-bold text-slate-600 truncate">Yedek Slot</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-700 truncate">Hazır</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
