import { useRef } from 'react';
import BattlerCard from './BattlerCard';
import { autoBattlerConfig } from '../data';

export default function BattlerShop({ shop, soul, disabled, onBuy, onReroll }) {
  const touchStartPos = useRef(null);

  const handleDragStart = (event, index, card) => {
    if (disabled || !card || card.cost > soul) {
      event.preventDefault();
      return;
    }
    event.stopPropagation();
    const payloadObj = { source: 'shop', shopIndex: index };
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
  };

  const handleTouchStart = (event, index, card) => {
    if (disabled || !card || card.cost > soul) return;
    const touch = event.touches[0];
    touchStartPos.current = { x: touch.clientX, y: touch.clientY, index };
    window.__deadlockDrag = { source: 'shop', shopIndex: index };
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
    const benchEl = target?.closest('[data-bench-drop]');

    if (slotEl) {
      window.dispatchEvent(
        new CustomEvent('deadlock-touch-drop', {
          detail: { target: 'board', slotIndex: Number(slotEl.dataset.playerSlot), payload },
        })
      );
    } else if (benchEl) {
      window.dispatchEvent(
        new CustomEvent('deadlock-touch-drop', {
          detail: { target: 'bench', payload },
        })
      );
    }
  };

  return (
    <section
      aria-labelledby="battler-shop-heading"
      className="rounded-2xl bg-black/40 border border-white/10 p-3 sm:p-3.5 shadow-md overflow-hidden"
    >
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="min-w-0">
          <h3 id="battler-shop-heading" className="text-xs sm:text-sm font-extrabold text-white">
            Market (Mağaza)
          </h3>
          <p className="text-[11px] text-slate-400 truncate">
            Kartları doğrudan tahtaya veya yedek kulübesine sürükle ya da tıkla.
          </p>
        </div>
        <button
          type="button"
          onClick={onReroll}
          disabled={disabled || soul < autoBattlerConfig.rerollCost}
          aria-label={`Marketi ${autoBattlerConfig.rerollCost} ruh karşılığında yenile`}
          className="shrink-0 px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-purple-500/15 text-purple-200 border border-purple-500/40 hover:bg-purple-500/25 transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
        >
          ↻ Yenile (◈ {autoBattlerConfig.rerollCost})
        </button>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {shop.map((card, index) => {
          const canAfford = Boolean(card && !disabled && card.cost <= soul);
          return (
            <li key={card ? card.uid : `sold-${index}`} className="min-w-0 flex">
              {card ? (
                <div
                  role="button"
                  tabIndex={canAfford ? 0 : -1}
                  draggable={canAfford}
                  onDragStart={(e) => handleDragStart(e, index, card)}
                  onDragEnd={handleDragEnd}
                  onTouchStart={(e) => handleTouchStart(e, index, card)}
                  onTouchEnd={handleTouchEnd}
                  onClick={() => canAfford && onBuy(index)}
                  onKeyDown={(e) => {
                    if (canAfford && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      onBuy(index);
                    }
                  }}
                  aria-disabled={!canAfford}
                  aria-label={`${card.name} satın al veya doğrudan tahtaya/kulübeye sürükle, ${card.cost} ruh`}
                  className={`w-full h-full min-w-0 text-left rounded-xl select-none transition-transform duration-200 [&_*]:pointer-events-none ${
                    canAfford
                      ? 'cursor-grab active:cursor-grabbing hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400'
                      : 'opacity-40 cursor-not-allowed'
                  }`}
                >
                  <BattlerCard card={card} size="shop" />
                </div>
              ) : (
                <div className="w-full h-full min-w-0 flex flex-col items-center rounded-xl border border-dashed border-white/10 bg-black/30 p-2">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Satıldı
                    </span>
                  </div>
                  <div className="pt-1 text-center">
                    <p className="text-[11px] font-bold text-slate-500 truncate">Alındı</p>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}