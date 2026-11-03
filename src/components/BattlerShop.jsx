import BattlerCard from './BattlerCard';
import { autoBattlerConfig } from '../data';

export default function BattlerShop({ shop, soul, disabled, onBuy, onReroll }) {
  const handleDragStart = (event, index, card) => {
    if (disabled || card.cost > soul) {
      event.preventDefault();
      return;
    }
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData(
      'application/x-deadlock-card',
      JSON.stringify({ source: 'shop', shopIndex: index })
    );
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
                <button
                  type="button"
                  draggable={canAfford}
                  onDragStart={(e) => handleDragStart(e, index, card)}
                  onClick={() => onBuy(index)}
                  disabled={!canAfford}
                  aria-label={`${card.name} satın al veya doğrudan tahtaya/kulübeye sürükle, ${card.cost} ruh`}
                  className="w-full h-full min-w-0 text-left rounded-xl cursor-grab active:cursor-grabbing transform-gpu will-change-transform transition-transform duration-200 hover:scale-[1.03] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <BattlerCard card={card} size="shop" />
                </button>
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
