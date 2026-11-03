import { categoryStyles, createPlaceholderDataUri } from '../data';

const sizeStyles = {
  shop: { pad: 'p-2.5', title: 'text-xs sm:text-sm' },
  bench: { pad: 'p-2', title: 'text-xs' },
  board: { pad: 'p-2', title: 'text-xs sm:text-sm' },
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
      aria-label={`${card.name} (${traitKey}), maliyet ${card.cost} ruh, güç ${totalPower}`}
      className={`relative w-full h-full min-w-0 flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900/95 to-black/90 border ${sizing.pad} transition-colors duration-200 ${
        isSelected
          ? 'border-purple-400/80 ring-2 ring-purple-500/50 shadow-[0_0_14px_-4px_rgba(168,85,247,0.6)]'
          : isItem
          ? traitStyle.border
          : sideStyles[side]
      }`}
    >
      {/* Kare (1:1) TFT piyon/madalyon çerçevesi */}
      <div
        className={`relative w-full aspect-square overflow-hidden bg-black/75 border flex items-center justify-center shrink-0 ${
          size === 'board'
            ? 'rounded-2xl border-amber-400/30 ring-1 ring-inset ring-white/10'
            : 'rounded-xl border-white/10 ring-1 ring-inset ring-white/5'
        }`}
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
            isItem ? 'object-contain p-3 sm:p-4' : 'object-cover object-center'
          }`}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 pointer-events-none"
          aria-hidden="true"
        />
        <span className="absolute top-1.5 left-1.5 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-lg text-[10px] font-black bg-black/85 text-emerald-300 border border-emerald-500/40 shadow-sm">
          <span aria-hidden="true">◈</span>
          {card.cost}
        </span>
        <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-lg text-[10px] font-black bg-black/85 text-amber-300 border border-amber-500/40 shadow-sm">
          {isItem ? `+${card.power}` : `⚔ ${totalPower}`}
        </span>

        {/* Sinerji / Trait Etiketi */}
        <span
          className={`absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider border ${traitStyle.badge}`}
        >
          {traitShortLabels[traitKey] || traitKey}
        </span>
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-0.5 pt-1.5 px-0.5">
        <h4 className={`${sizing.title} font-extrabold text-white leading-tight truncate`}>
          {card.name.split(' (')[0]}
        </h4>
        <p className="text-[10px] text-slate-400 truncate">
          {isItem ? 'Eşya Kartı' : traitStyle.label}
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
