import BattlerCard from './BattlerCard';
import { autoBattlerConfig } from '../data';
import { getSellValue } from '../game/autoBattlerEngine';

export default function BattlerBench({ bench, selectedUid, disabled, onSelect, onSell }) {
  const emptySlots = Math.max(0, autoBattlerConfig.benchSize - bench.length);

  return (
    <section
      aria-labelledby="battler-bench-heading"
      className="rounded-2xl bg-black/40 border border-white/10 p-4 sm:p-5 shadow-md"
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <div>
          <h3 id="battler-bench-heading" className="text-lg font-extrabold text-white">
            Yedek Kulübesi
          </h3>
          <p className="text-xs text-slate-400">Bir kart seç, ardından tahtadaki koridora yerleştir.</p>
        </div>
        <span className="text-xs font-bold text-slate-300">
          {bench.length} / {autoBattlerConfig.benchSize}
        </span>
      </div>

      <ul className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
        {bench.map((card) => {
          const isSelected = card.uid === selectedUid;
          return (
            <li key={card.uid} className="flex flex-col gap-1.5">
              <button
                type="button"
                onClick={() => onSelect(card.uid)}
                disabled={disabled}
                aria-pressed={isSelected}
                aria-label={`${card.name} kartını ${isSelected ? 'seçimden çıkar' : 'seç'}`}
                className="text-left rounded-xl transform-gpu will-change-transform transition-transform duration-200 hover:scale-[1.04] disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                <BattlerCard card={card} size="bench" side="player" isSelected={isSelected} />
              </button>
              <button
                type="button"
                onClick={() => onSell(card.uid)}
                disabled={disabled}
                aria-label={`${card.name} kartını ${getSellValue(card)} ruh karşılığında sat`}
                className="text-[10px] font-bold py-1 rounded-lg bg-rose-500/10 text-rose-200 border border-rose-500/30 hover:bg-rose-500/20 transition-colors disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
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
            className="min-h-[9rem] rounded-xl border border-dashed border-white/10 bg-black/20"
          />
        ))}
      </ul>
    </section>
  );
}
