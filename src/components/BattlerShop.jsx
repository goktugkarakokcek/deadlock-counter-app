import BattlerCard from './BattlerCard';
import { autoBattlerConfig } from '../data';

export default function BattlerShop({ shop, soul, disabled, onBuy, onReroll }) {
  return (
    <section
      aria-labelledby="battler-shop-heading"
      className="rounded-2xl bg-black/40 border border-white/10 p-4 sm:p-5 shadow-md"
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <div>
          <h3 id="battler-shop-heading" className="text-lg font-extrabold text-white">
            Market
          </h3>
          <p className="text-xs text-slate-400">Ruh harcayarak kahraman veya eşya satın al.</p>
        </div>
        <button
          type="button"
          onClick={onReroll}
          disabled={disabled || soul < autoBattlerConfig.rerollCost}
          aria-label={`Marketi ${autoBattlerConfig.rerollCost} ruh karşılığında yenile`}
          className="shrink-0 px-3 py-2 rounded-xl text-xs font-bold bg-purple-500/15 text-purple-200 border border-purple-500/40 hover:bg-purple-500/25 transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
        >
          ↻ Yenile (◈ {autoBattlerConfig.rerollCost})
        </button>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {shop.map((card, index) => (
          <li key={card ? card.uid : `sold-${index}`} className="min-h-[13rem]">
            {card ? (
              <button
                type="button"
                onClick={() => onBuy(index)}
                disabled={disabled || card.cost > soul}
                aria-label={`${card.name} satın al, ${card.cost} ruh`}
                className="w-full h-full text-left rounded-xl transform-gpu will-change-transform transition-transform duration-200 hover:scale-[1.04] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <BattlerCard card={card} size="shop" />
              </button>
            ) : (
              <div className="h-full rounded-xl border border-dashed border-white/10 bg-black/30 flex items-center justify-center text-xs font-bold uppercase tracking-wider text-slate-500">
                Satıldı
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
