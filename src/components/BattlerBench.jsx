import { useEffect, useRef, useState } from 'react';
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
  const touchStartPos = useRef(null);
  const emptySlots = Math.max(0, autoBattlerConfig.benchSize - bench.length);

  const processDropPayload = (payload) => {
    if (!payload || disabled) return;
    if (payload.source === 'shop' && typeof payload.shopIndex === 'number') {
      onBuyFromShop(payload.shopIndex);
    } else if (payload.source === 'board' && typeof payload.slotIndex === 'number') {
      onReturnFromBoard(payload.slotIndex);
    }
  };

  useEffect(() => {
    const handleCustomDrop = (e) => {
      if (e.detail?.target === 'bench') {
        processDropPayload(e.detail.payload);
      }
    };
    window.addEventListener('deadlock-touch-drop', handleCustomDrop);
    return () => window.removeEventListener('deadlock-touch-drop', handleCustomDrop);
  });

  const handleDragStart = (event, card) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    event.stopPropagation();
    const payloadObj = { source: 'bench', uid: card.uid };
    const payload = JSON.stringify(payloadObj);
    window.__deadlockDrag = payloadObj;

    event.dataTransfer.effectAllowed = 'move';
    try {
      event.dataTransfer.setData('text/plain', payload);
      event.dataTransfer.setData('application/json', payload);
    } catch {
      // Fallback: window.__deadlockDrag devrede
    }
  };

  const handleDragEnd = () => {
    window.__deadlockDrag = null;
    setIsDragOver(false);
  };

  const handleTouchStart = (event, card) => {
    if (disabled) return;
    const touch = event.touches[0];
    touchStartPos.current = { x: touch.clientX, y: touch.clientY };
    window.__deadlockDrag = { source: 'bench', uid: card.uid };
  };

  const handleTouchEnd = (event) => {
    if (!touchStartPos.current || !window.__deadlockDrag) return;
    const touch = event.changedTouches[0];
    const dx = Math.abs(touch.clientX - touchStartPos.current.x);
    const dy = Math.abs(touch.clientY - touchStartPos.current.y);
    const payload = window.__deadlockDrag;
    touchStartPos.current = null;
    window.__deadlockDrag = null;

    if (dx < 10 && dy < 10) return;

    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    const slotEl = target?.closest('[data-player-slot]');
    if (slotEl) {
      window.dispatchEvent(
        new CustomEvent('deadlock-touch-drop', {
          detail: { target: 'board', slotIndex: Number(slotEl.dataset.playerSlot), payload },
        })
      );
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    if (disabled) return;
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'move';
    if (!isDragOver) setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.stopPropagation();
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsDragOver(false);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(false);
    if (disabled) return;

    let payload = window.__deadlockDrag || null;
    if (!payload) {
      try {
        const raw =
          event.dataTransfer.getData('application/json') ||
          event.dataTransfer.getData('text/plain');
        if (raw) payload = JSON.parse(raw);
      } catch {
        payload = null;
      }
    }
    window.__deadlockDrag = null;
    processDropPayload(payload);
  };

  return (
    <section
      aria-labelledby="battler-bench-heading"
      data-bench-drop="true"
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
              <div
                role="button"
                tabIndex={disabled ? -1 : 0}
                draggable={!disabled}
                onDragStart={(e) => handleDragStart(e, card)}
                onDragEnd={handleDragEnd}
                onTouchStart={(e) => handleTouchStart(e, card)}
                onTouchEnd={handleTouchEnd}
                onClick={() => !disabled && onSelect(card.uid)}
                onKeyDown={(e) => {
                  if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    onSelect(card.uid);
                  }
                }}
                aria-pressed={isSelected}
                aria-disabled={disabled}
                aria-label={`${card.name} kartını ${isSelected ? 'seçimden çıkar' : 'seç veya tahtaya sürükle'}`}
                className={`w-full flex-1 min-w-0 text-left rounded-xl select-none transition-transform duration-200 [&_*]:pointer-events-none ${
                  disabled
                    ? 'cursor-not-allowed opacity-40'
                    : 'cursor-grab active:cursor-grabbing hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400'
                }`}
              >
                <BattlerCard
                  card={card}
                  size="bench"
                  side="player"
                  isSelected={isSelected}
                />
              </div>
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
            className={`min-w-0 flex flex-col items-center rounded-xl border border-dashed p-1.5 transition-colors pointer-events-none ${
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