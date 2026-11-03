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
      className="rounded-2xl bg-black/40 border border-white/10 p-3.5 sm:p-5 shadow-md overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
        <div className="min-w-0">
          <h3 id="battler-shop-heading" className="text-base sm:text-lg font-extrabold text-white">
            Market (Mağaza)
          </h3>
          <p className="text-xs text-slate-400">
            Kartları <strong className="text-slate-200">Yedek Kulübesine sürükle</strong> veya tıklayarak satın al.
          </p>
        </div>
        <button
          type="button"
          onClick={onReroll}
          disabled={disabled || soul < autoBattlerConfig.rerollCost}
          aria-label={`Marketi ${autoBattlerConfig.rerollCost} ruh karşılığında yenile`}
          className="self-start sm:self-auto shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold bg-purple-500/15 text-purple-200 border border-purple-500/40 hover:bg-purple-500/25 transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
        >
          ↻ Yenile (◈ {autoBattlerConfig.rerollCost})
        </button>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
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
                  aria-label={`${card.name} satın al veya yedek kulübesine sürükle, ${card.cost} ruh`}
                  className="w-full h-full min-w-0 text-left rounded-2xl cursor-grab active:cursor-grabbing transform-gpu will-change-transform transition-transform duration-200 hover:scale-[1.03] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <BattlerCard card={card} size="shop" />
                </button>
              ) : (
                <div className="w-full h-full min-w-0 flex flex-col rounded-2xl border border-dashed border-white/10 bg-black/30 p-2.5">
                  <div className="w-full aspect-square rounded-xl bg-black/40 border border-white/5 flex items-center justify-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Satıldı
                    </span>
                  </div>
                  <div className="pt-2 px-0.5">
                    <p className="text-xs font-bold text-slate-500 truncate">Alındı</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-600 truncate">Slot Boş</p>
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
