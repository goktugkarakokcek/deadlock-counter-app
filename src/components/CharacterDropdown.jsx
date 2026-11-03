import { useState, useRef, useEffect } from 'react';
import { characters, createPlaceholderDataUri } from '../data';

export function PatchTrendBadge({ trend, compact = false }) {
  if (trend === 'buff') {
    return (
      <span
        title="Yama Radarı: Güçlendirildi (Buff)"
        aria-label="Son yamada güçlendirildi (Buff)"
        className={`inline-flex items-center gap-0.5 font-extrabold rounded border bg-green-500/15 border-green-500/40 text-green-400 shrink-0 ${
          compact ? 'px-1 py-0.5 text-[10px]' : 'px-1.5 py-0.5 text-xs'
        }`}
      >
        <svg
          className={compact ? 'w-3 h-3 text-green-400' : 'w-3.5 h-3.5 text-green-400'}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        {!compact && <span>BUFF</span>}
      </span>
    );
  }

  if (trend === 'nerf') {
    return (
      <span
        title="Yama Radarı: Zayıflatıldı (Nerf)"
        aria-label="Son yamada zayıflatıldı (Nerf)"
        className={`inline-flex items-center gap-0.5 font-extrabold rounded border bg-red-500/15 border-red-500/40 text-red-500 shrink-0 ${
          compact ? 'px-1 py-0.5 text-[10px]' : 'px-1.5 py-0.5 text-xs'
        }`}
      >
        <svg
          className={compact ? 'w-3 h-3 text-red-500' : 'w-3.5 h-3.5 text-red-500'}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
        {!compact && <span>NERF</span>}
      </span>
    );
  }

  return null;
}

export default function CharacterDropdown({
  id,
  label,
  subLabel,
  selectedHero,
  onSelect,
  accentClass = 'amber',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const isAmber = accentClass === 'amber';
  const ringStyle = isAmber
    ? 'focus-visible:ring-amber-400 border-amber-500/40 hover:border-amber-400'
    : 'focus-visible:ring-rose-400 border-rose-500/40 hover:border-rose-400';
  const tagStyle = isAmber
    ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
    : 'bg-rose-500/15 text-rose-300 border-rose-500/30';

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="flex items-center justify-between mb-2">
        <label
          id={`${id}-label`}
          htmlFor={`${id}-button`}
          className="text-sm font-bold uppercase tracking-wider text-slate-200"
        >
          {label}
        </label>
        <span
          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${tagStyle}`}
        >
          {subLabel}
        </span>
      </div>

      {/* Görsel Destekli Dropdown Tetikleyici Butonu */}
      <button
        id={`${id}-button`}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={`${id}-label ${id}-button`}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full flex items-center justify-between gap-4 p-3.5 rounded-xl bg-black/40 border-2 transition-all duration-200 text-left shadow-lg focus:outline-none focus-visible:ring-2 ${ringStyle}`}
      >
        {selectedHero ? (
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-slate-800 border border-slate-700 shrink-0">
              <img
                src={selectedHero.image}
                alt={selectedHero.imageAlt}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = createPlaceholderDataUri(
                    selectedHero.name,
                    isAmber ? '#f59e0b' : '#f43f5e'
                  );
                }}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-lg font-extrabold text-white truncate">
                  {selectedHero.name}
                </span>
                <PatchTrendBadge trend={selectedHero.patchTrend} />
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  Zorluk: {selectedHero.difficulty}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 truncate mt-0.5">
                {selectedHero.role}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3.5 min-w-0">
            <div
              className="w-14 h-14 rounded-lg bg-slate-800/80 border border-dashed border-slate-600 flex items-center justify-center text-slate-300 font-black text-xl shrink-0"
              aria-hidden="true"
            >
              ?
            </div>
            <div className="min-w-0">
              <span className="text-base sm:text-lg font-bold text-slate-200 block truncate">
                Karakter Seçiniz...
              </span>
              <p className="text-xs text-slate-300 truncate mt-0.5">
                Listeden veya aşağıdaki hızlı seçim butonlarından bir hero seçin
              </p>
            </div>
          </div>
        )}

        <span
          aria-hidden="true"
          className={`p-2 rounded-lg bg-slate-800 text-slate-200 transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180 bg-slate-700' : ''
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      {/* Açılır Görselli Seçenek Listesi */}
      {isOpen && (
        <ul
          role="listbox"
          aria-labelledby={`${id}-label`}
          className="absolute z-30 mt-2 w-full max-h-72 overflow-y-auto rounded-xl bg-slate-900 border border-slate-700 shadow-lg divide-y divide-slate-800/80"
        >
          {characters.map((hero) => {
            const isSelected = selectedHero?.id === hero.id;
            return (
              <li
                key={hero.id}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onSelect(hero.id);
                  setIsOpen(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelect(hero.id);
                    setIsOpen(false);
                  }
                }}
                tabIndex={0}
                className={`flex items-center justify-between gap-3 p-3 cursor-pointer transition-colors focus:outline-none focus:bg-slate-800 ${
                  isSelected
                    ? 'bg-slate-800/90 border-l-4 border-amber-400'
                    : 'hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={hero.image}
                    alt={hero.imageAlt}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = createPlaceholderDataUri(
                        hero.name,
                        isAmber ? '#f59e0b' : '#f43f5e'
                      );
                    }}
                    className="w-12 h-12 rounded-lg object-cover bg-slate-800 border border-slate-700 shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-bold text-white truncate">
                        {hero.name}
                      </p>
                      <PatchTrendBadge trend={hero.patchTrend} compact />
                    </div>
                    <p className="text-xs text-slate-300 truncate">
                      {hero.role}
                    </p>
                  </div>
                </div>
                {isSelected && (
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40 shrink-0">
                    Seçili
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      )}

      {/* Hızlı Seçim Görsel Hapları */}
      <div
        className="mt-3 flex items-center gap-2 flex-wrap"
        role="group"
        aria-label={`${label} için hızlı karakter seçimi`}
      >
        <span className="text-xs text-slate-300 mr-1">Hızlı Seç:</span>
        {characters.map((hero) => {
          const active = selectedHero?.id === hero.id;
          return (
            <button
              key={hero.id}
              type="button"
              onClick={() => onSelect(hero.id)}
              aria-label={`${label} olarak ${hero.name} seç`}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                active
                  ? isAmber
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-sm'
                    : 'bg-rose-500 text-white border-rose-400 font-bold shadow-sm'
                  : 'bg-slate-900 text-slate-200 border-slate-800 hover:border-slate-600 hover:text-white'
              }`}
            >
              <img
                src={hero.image}
                alt={`${hero.name} karakter ikonu`}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = createPlaceholderDataUri(hero.name);
                }}
                className="w-4 h-4 rounded-full object-cover"
              />
              <span>{hero.name}</span>
              <PatchTrendBadge trend={hero.patchTrend} compact />
            </button>
          );
        })}
      </div>
    </div>
  );
}
