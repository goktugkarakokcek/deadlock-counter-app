import { useState } from 'react';
import BattlerCard from './BattlerCard';
import { autoBattlerConfig } from '../data';
import { getSellValue } from '../game/autoBattlerEngine';

export default function BattlerBench({
  bench,
  selectedUid,
  disabled,
  onSelect,
  onSell,
  onBuyFromShop,
  onReturnFromBoard,
}) {
  const [isDragOver, setIsDragOver] = useState(false);
  const emptySlots = Math.max(0, autoBattlerConfig.benchSize - bench.length);

  const handleDragStart = (event, card) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData(
      'application/x-deadlock-card',
      JSON.stringify({ source: 'bench', uid: card.uid })
    );
    onSelect(card.uid);
  };

  const handleDragOver = (event) => {
    if (disabled) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    if (!isDragOver) setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsDragOver(false);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);
    if (disabled) return;

    try {
      const raw = event.dataTransfer.getData('application/x-deadlock-card');
      if (!raw) return;
      const payload = JSON.parse(raw);
      if (payload.source === 'shop' && typeof payload.shopIndex === 'number') {
        onBuyFromShop(payload.shopIndex);
      } else if (payload.source === 'board' && typeof payload.slotIndex === 'number') {
        onReturnFromBoard(payload.slotIndex);
      }
    } catch {
      // Geçersiz sürükleme verisini yoksay
    }
  };

  return (
    <section
      aria-labelledby="battler-bench-heading"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`rounded-2xl bg-black/40 border p-3 sm:p-3.5 shadow-md overflow-hidden transition-colors ${
        isDragOver
          ? 'border-amber-400/80 ring-2 ring-amber-400/40 bg-amber-950/20'
          : 'border-white/10'
      }`}
    >
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="min-w-0">
          <h3 id="battler-bench-heading" className="text-xs sm:text-sm font-extrabold text-white">
            Yedek Kulübesi (Bench)
          </h3>
          <p className="text-[11px] text-slate-400 truncate">
            Marketten buraya bırak; buradan da 2x4 tahtaya sürükle.
          </p>
        </div>
        <span className="shrink-0 text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
          {bench.length} / {autoBattlerConfig.benchSize}
        </span>
      </div>

      <ul className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-2">
        {bench.map((card) => {
          const isSelected = card.uid === selectedUid;
          return (
            <li key={card.uid} className="min-w-0 flex flex-col gap-1">
              <button
                type="button"
                draggable={!disabled}
                onDragStart={(e) => handleDragStart(e, card)}
                onClick={() => onSelect(card.uid)}
                disabled={disabled}
                aria-pressed={isSelected}
                aria-label={`${card.name} kartını ${isSelected ? 'seçimden çıkar' : 'seç veya tahtaya sürükle'}`}
                className="w-full flex-1 min-w-0 text-left rounded-xl cursor-grab active:cursor-grabbing transform-gpu will-change-transform transition-transform duration-200 hover:scale-[1.03] disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                <BattlerCard card={card} size="bench" side="player" isSelected={isSelected} />
              </button>
              <button
                type="button"
                onClick={() => onSell(card.uid)}
                disabled={disabled}
                aria-label={`${card.name} kartını ${getSellValue(card)} ruh karşılığında sat`}
                className="w-full text-[9px] font-bold py-0.5 px-1 rounded bg-rose-500/10 text-rose-200 border border-rose-500/30 hover:bg-rose-500/20 transition-colors disabled:opacity-40 truncate focus:outline-none focus-visible:ring-1 focus-visible:ring-rose-400"
              >
                Sat (+◈{getSellValue(card)})
              </button>
            </li>
          );
        })}
        {Array.from({ length: emptySlots }, (_, i) => (
          <li
            key={`bench-empty-${i}`}
            aria-hidden="true"
            className={`min-w-0 flex flex-col items-center rounded-xl border border-dashed p-1.5 transition-colors ${
              isDragOver
                ? 'border-amber-400/50 bg-amber-500/10'
                : 'border-white/10 bg-black/20'
            }`}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-black/30 border border-white/5 flex items-center justify-center p-1 text-center shrink-0">
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                {isDragOver ? '+ Bırak' : 'Boş'}
              </span>
            </div>
            <div className="pt-1 text-center">
              <p className="text-[10px] font-bold text-slate-600 truncate">Yedek</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
