import { categoryStyles, createPlaceholderDataUri } from '../data';

const sizeStyles = {
  shop: {
    pad: 'p-2',
    frame: 'w-20 h-20 sm:w-24 sm:h-24 rounded-xl',
    title: 'text-xs',
  },
  bench: {
    pad: 'p-1.5',
    frame: 'w-16 h-16 sm:w-20 sm:h-20 rounded-xl',
    title: 'text-[11px]',
  },
  board: {
    pad: 'p-1.5',
    frame: 'w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-amber-400/30',
    title: 'text-[11px] sm:text-xs',
  },
};

const sideStyles = {
  player: 'border-amber-500/40 hover:border-amber-400/70',
  enemy: 'border-rose-500/40',
  neutral: 'border-white/10 hover:border-amber-500/40',
};

const traitShortLabels = {
  Weapon: 'Weapon',
  Vitality: 'Vitality',
  Spirit: 'Spirit',
};

export default function BattlerCard({
  card,
  size = 'shop',
  side = 'neutral',
  isSelected = false,
  displayPower = null,
  draggable,
  onDragStart,
  className = '',
  ...rest
}) {
  const sizing = sizeStyles[size] || sizeStyles.shop;
  const isItem = card.kind === 'item';
  const traitKey = card.trait || card.category || 'Spirit';
  const traitStyle = categoryStyles[traitKey] || categoryStyles.Spirit;
  const accent = traitStyle?.accent || (side === 'enemy' ? '#f43f5e' : '#f59e0b');
  const totalPower =
    displayPower !== null ? displayPower : card.power + (card.item ? card.item.power : 0);

  return (
    <article
      draggable={draggable}
      onDragStart={onDragStart}
      aria-label={`${card.name} (${traitKey}), maliyet ${card.cost} ruh, güç ${totalPower}`}
      className={`relative w-full h-full min-w-0 flex flex-col items-center rounded-xl overflow-hidden bg-gradient-to-b from-zinc-900/95 to-black/90 border ${sizing.pad} transition-colors duration-200 ${
        isSelected
          ? 'border-purple-400/80 ring-2 ring-purple-500/50 shadow-[0_0_12px_-4px_rgba(168,85,247,0.6)]'
          : isItem
          ? traitStyle.border
          : sideStyles[side]
      } ${className}`}
      {...rest}
    >
      {/* Kompakt kare (w-16/w-20) görsel çerçevesi */}
      <div
        className={`relative ${sizing.frame} overflow-hidden bg-black/75 border border-white/10 ring-1 ring-inset ring-white/5 flex items-center justify-center shrink-0`}
      >
        <img
          src={card.image}
          alt={card.imageAlt || `${card.name} görseli`}
          loading="lazy"
          draggable={false}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = createPlaceholderDataUri(card.name, accent);
          }}
          className={`w-full h-full select-none ${
            isItem ? 'object-contain p-2' : 'object-cover object-center'
          }`}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 pointer-events-none"
          aria-hidden="true"
        />
        <span className="absolute top-1 left-1 inline-flex items-center gap-0.5 px-1 py-0.2 rounded text-[9px] font-black bg-black/85 text-emerald-300 border border-emerald-500/40 leading-tight">
          <span aria-hidden="true">◈</span>
          {card.cost}
        </span>
        <span className="absolute top-1 right-1 px-1 py-0.2 rounded text-[9px] font-black bg-black/85 text-amber-300 border border-amber-500/40 leading-tight">
          {isItem ? `+${card.power}` : `⚔${totalPower}`}
        </span>
        <span
          className={`absolute bottom-1 left-1 px-1 py-0.2 rounded text-[8px] font-extrabold uppercase tracking-wider border leading-tight ${traitStyle.badge}`}
        >
          {traitShortLabels[traitKey] || traitKey}
        </span>
      </div>

      <div className="w-full min-w-0 flex flex-col items-center text-center pt-1 px-0.5">
        <h4 className={`w-full ${sizing.title} font-extrabold text-white leading-tight truncate`}>
          {card.name.split(' (')[0]}
        </h4>
        <p className="w-full text-[9px] text-slate-400 leading-tight truncate">
          {isItem ? 'Eşya' : traitStyle.label.split(' ')[0]}
        </p>
        {card.item && (
          <p className="mt-0.5 max-w-full inline-flex items-center gap-0.5 text-[9px] font-bold px-1 py-0.2 rounded bg-purple-500/15 text-purple-200 border border-purple-500/30 truncate">
            <span aria-hidden="true">✦</span>
            <span className="truncate">{card.item.name.split(' (')[0]}</span>
          </p>
        )}
      </div>
    </article>
  );
}
