import { categoryStyles, createPlaceholderDataUri } from '../data';

const sizeStyles = {
  shop: { image: 'h-28', title: 'text-sm' },
  bench: { image: 'h-20', title: 'text-xs' },
  board: { image: 'h-24', title: 'text-sm' },
};

const sideStyles = {
  player: 'border-amber-500/30',
  enemy: 'border-rose-500/30',
  neutral: 'border-white/10',
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
      className={`relative h-full flex flex-col rounded-xl overflow-hidden bg-gradient-to-b from-zinc-900/90 to-black/80 border ${
        isSelected
          ? 'border-purple-400/80 ring-2 ring-purple-500/50 shadow-[0_0_16px_-4px_rgba(168,85,247,0.6)]'
          : itemStyle?.border || sideStyles[side]
      }`}
    >
      <div className={`relative ${sizing.image} bg-black/60 flex items-center justify-center overflow-hidden`}>
        <img
          src={card.image}
          alt={card.imageAlt || `${card.name} görseli`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = createPlaceholderDataUri(card.name, accent);
          }}
          className={`w-full h-full ${isItem ? 'object-contain p-3' : 'object-cover object-top'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" aria-hidden="true" />
        <span className="absolute top-1.5 left-1.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[11px] font-black bg-black/70 text-emerald-300 border border-emerald-500/40">
          <span aria-hidden="true">◈</span>
          {card.cost}
        </span>
        <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-md text-[11px] font-black bg-black/70 text-amber-300 border border-amber-500/40">
          {isItem ? `+${card.power}` : `⚔ ${totalPower}`}
        </span>
      </div>

      <div className="flex-1 flex flex-col gap-1 px-2.5 py-2">
        <h4 className={`${sizing.title} font-extrabold text-white leading-tight truncate`}>
          {card.name.split(' (')[0]}
        </h4>
        <p className="text-[10px] uppercase tracking-wider text-slate-400 truncate">
          {isItem ? itemStyle.label : 'Kahraman'}
        </p>
        {card.item && (
          <p className="mt-auto inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-500/15 text-purple-200 border border-purple-500/30 truncate">
            <span aria-hidden="true">✦</span>
            {card.item.name.split(' (')[0]}
          </p>
        )}
      </div>
    </article>
  );
}
