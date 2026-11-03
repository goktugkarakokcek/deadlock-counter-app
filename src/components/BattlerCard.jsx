import { categoryStyles, createPlaceholderDataUri } from '../data';

const sizeStyles = {
  shop: { pad: 'p-2.5', title: 'text-xs sm:text-sm' },
  bench: { pad: 'p-2', title: 'text-xs' },
  board: { pad: 'p-2.5', title: 'text-xs sm:text-sm' },
};

const sideStyles = {
  player: 'border-amber-500/35 hover:border-amber-400/60',
  enemy: 'border-rose-500/35',
  neutral: 'border-white/10 hover:border-amber-500/40',
};

export default function BattlerCard({ card, size = 'shop', side = 'neutral', isSelected = false }) {
  const sizing = sizeStyles[size] || sizeStyles.shop;
  const isItem = card.kind === 'item';
  const itemStyle = isItem ? categoryStyles[card.category] || categoryStyles.Spirit : null;
  const accent = itemStyle?.accent || (side === 'enemy' ? '#f43f5e' : '#f59e0b');
  const totalPower = card.power + (card.item ? card.item.power : 0);

  return (
    <article
      aria-label={`${card.name} kartı, maliyet ${card.cost} ruh, güç ${totalPower}`}
      className={`relative w-full h-full min-w-0 flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900/90 to-black/85 border ${sizing.pad} transition-colors duration-200 ${
        isSelected
          ? 'border-purple-400/80 ring-2 ring-purple-500/50 shadow-[0_0_14px_-4px_rgba(168,85,247,0.6)]'
          : itemStyle?.border || sideStyles[side]
      }`}
    >
      {/* Kare (1:1) maskeli görsel çerçevesi - karakter portrelerinin oranını korur */}
      <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-black/70 border border-white/10 ring-1 ring-inset ring-white/5 flex items-center justify-center shrink-0">
        <img
          src={card.image}
          alt={card.imageAlt || `${card.name} görseli`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = createPlaceholderDataUri(card.name, accent);
          }}
          className={`w-full h-full ${
            isItem ? 'object-contain p-3 sm:p-4' : 'object-cover object-center'
          }`}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 pointer-events-none"
          aria-hidden="true"
        />
        <span className="absolute top-1.5 left-1.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-black bg-black/80 text-emerald-300 border border-emerald-500/40 shadow-sm">
          <span aria-hidden="true">◈</span>
          {card.cost}
        </span>
        <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-black bg-black/80 text-amber-300 border border-amber-500/40 shadow-sm">
          {isItem ? `+${card.power}` : `⚔ ${totalPower}`}
        </span>
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-1 pt-2 px-0.5">
        <h4 className={`${sizing.title} font-extrabold text-white leading-tight truncate`}>
          {card.name.split(' (')[0]}
        </h4>
        <p className="text-[10px] uppercase tracking-wider text-slate-400 truncate">
          {isItem ? itemStyle.label : 'Kahraman'}
        </p>
        {card.item && (
          <p className="mt-auto inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-purple-500/15 text-purple-200 border border-purple-500/30 truncate">
            <span aria-hidden="true">✦</span>
            <span className="truncate">{card.item.name.split(' (')[0]}</span>
          </p>
        )}
      </div>
    </article>
  );
}
