import { useState, useRef, useEffect } from 'react';
import {
  characters,
  matchups,
  getMirrorMatchup,
  generalMetaTips,
  methodologyData,
} from './data';

// Görsel henüz manuel eklenmediyse kırık ikon göstermemek için şık SVG Data URI üreteci
// (<img /> etiketini ve semantic alt metnini DOM'da korur)
const createPlaceholderDataUri = (label, accentColor = '#f59e0b') => {
  const initials = label
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a"/>
        <stop offset="100%" stop-color="#1e293b"/>
      </linearGradient>
    </defs>
    <rect width="160" height="160" rx="20" fill="url(#bg)" stroke="${accentColor}" stroke-width="4"/>
    <circle cx="80" cy="64" r="28" fill="${accentColor}" fill-opacity="0.18" stroke="${accentColor}" stroke-width="2"/>
    <text x="80" y="73" text-anchor="middle" fill="#f8fafc" font-family="system-ui, sans-serif" font-weight="800" font-size="24">${initials}</text>
    <text x="80" y="128" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-weight="600" font-size="13">${label.slice(0, 14)}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// Kategoriye göre Tailwind renk şeması (Yüksek Kontrastlı)
const categoryStyles = {
  Weapon: {
    badge: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    border: 'border-orange-500/30 hover:border-orange-400/60',
    accent: '#fb923c',
    label: 'Weapon (Silah)',
  },
  Vitality: {
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    border: 'border-emerald-500/30 hover:border-emerald-400/60',
    accent: '#34d399',
    label: 'Vitality (Dayanıklılık)',
  },
  Spirit: {
    badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    border: 'border-purple-500/30 hover:border-purple-400/60',
    accent: '#c084fc',
    label: 'Spirit (Ruh Gücü)',
  },
};

const difficultyStyles = {
  Avantajlı: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  Dengeli: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
  Zorlu: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  'Yüksek Tehdit': 'bg-rose-500/20 text-rose-300 border-rose-500/40',
};

// Görsel Destekli Erişilebilir (Accessible) Karakter Seçici Dropdown Bileşeni
function CharacterDropdown({
  id,
  label,
  subLabel,
  selectedHero,
  onSelect,
  accentClass = 'amber',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Dışarı tıklandığında veya Escape tuşuna basıldığında menüyü kapat
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
        className={`w-full flex items-center justify-between gap-4 p-3.5 rounded-xl bg-slate-900/95 border-2 transition-all duration-200 text-left shadow-lg focus:outline-none focus-visible:ring-2 ${ringStyle}`}
      >
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
              <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Zorluk: {selectedHero.difficulty}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 truncate mt-0.5">
              {selectedHero.role}
            </p>
          </div>
        </div>

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
          className="absolute z-30 mt-2 w-full rounded-xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden divide-y divide-slate-800/80"
        >
          {characters.map((hero) => {
            const isSelected = hero.id === selectedHero.id;
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
                    <p className="text-sm font-bold text-white truncate">
                      {hero.name}
                    </p>
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

      {/* Hızlı Seçim Görsel Hapları (Mobil ve Masaüstü Kolaylığı) */}
      <div
        className="mt-3 flex items-center gap-2 flex-wrap"
        aria-label={`${label} için hızlı karakter seçimi`}
      >
        <span className="text-xs text-slate-400 mr-1">Hızlı Seç:</span>
        {characters.map((hero) => {
          const active = hero.id === selectedHero.id;
          return (
            <button
              key={hero.id}
              type="button"
              onClick={() => onSelect(hero.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                active
                  ? isAmber
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-sm'
                    : 'bg-rose-500 text-white border-rose-400 font-bold shadow-sm'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-600 hover:text-white'
              }`}
            >
              <img
                src={hero.image}
                alt={`${hero.name} küçük ikon`}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = createPlaceholderDataUri(hero.name);
                }}
                className="w-4 h-4 rounded-full object-cover"
              />
              {hero.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  const [playerHeroId, setPlayerHeroId] = useState('abrams');
  const [enemyHeroId, setEnemyHeroId] = useState('vindicta');

  const playerHero =
    characters.find((c) => c.id === playerHeroId) || characters[0];
  const enemyHero =
    characters.find((c) => c.id === enemyHeroId) || characters[1];

  // Dinamik Matchup Anahtarı
  const matchupKey = `${playerHero.id}_vs_${enemyHero.id}`;
  const isMirror = playerHero.id === enemyHero.id;
  const currentMatchup = isMirror
    ? getMirrorMatchup(playerHero)
    : matchups[matchupKey];

  // Karakterleri tek tıkla yer değiştirme fonksiyonu
  const handleSwapHeroes = () => {
    setPlayerHeroId(enemyHeroId);
    setEnemyHeroId(playerHeroId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {/* ÜST GEZİNME VE HEADER (Semantic <header> & <nav>) */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/90 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#matchup-section"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-md shadow-amber-500/20">
              DL
            </div>
            <div>
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-white block leading-none">
                DEADLOCK <span className="text-amber-400">TACTICS</span>
              </span>
              <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                Rekabetçi Matchup &amp; Counter Asistanı
              </span>
            </div>
          </a>

          <nav aria-label="Sayfa Bölümleri" className="hidden md:flex items-center gap-1">
            <a
              href="#matchup-section"
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              1. Hero Matchup Analizi
            </a>
            <a
              href="#meta-section"
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              2. Genel Meta Tavsiyeleri
            </a>
            <a
              href="#methodology-section"
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              3. Metodoloji &amp; Hakkında
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Meta Güncel
            </span>
          </div>
        </div>
      </header>

      {/* ANA İÇERİK (Semantic <main>) */}
      <main className="flex-grow">
        {/* =========================================================
            1. BÖLÜM: HERO MATCHUP BÖLÜMÜ (KARAKTER SEÇİMİ, ITEM & PLAYSTYLE)
           ========================================================= */}
        <section
          id="matchup-section"
          aria-labelledby="matchup-heading"
          className="relative py-10 sm:py-14 border-b border-slate-800/80 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Bölüm Başlığı */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-500/15 text-amber-300 border border-amber-500/30 mb-3">
                Bölüm 01 • Dinamik Karşılaşma Simülatörü
              </span>
              <h1
                id="matchup-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight"
              >
                Hero Matchup &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">
                  Counter Build
                </span>{' '}
                Rehberi
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
                Kendi oynadığınız karakteri ve koridordaki veya maçtaki rakip
                karakteri seçin. Rakibin yetenek setini etkisiz kılacak{' '}
                <strong className="text-white font-semibold">
                  en kritik oyun içi eşyaları (items)
                </strong>{' '}
                ve safha bazlı{' '}
                <strong className="text-white font-semibold">
                  taktiksel oynayış (playstyle)
                </strong>{' '}
                planını anında görüntüleyin.
              </p>
            </div>

            {/* İki Adet Görsel Destekli Dropdown / Select Paneli */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-2xl mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
                {/* Sol: Senin Karakterin */}
                <div className="lg:col-span-5">
                  <CharacterDropdown
                    id="player-hero-select"
                    label="Senin Karakterin"
                    subLabel="Oynadığın Hero"
                    selectedHero={playerHero}
                    onSelect={setPlayerHeroId}
                    accentClass="amber"
                  />
                </div>

                {/* Orta: VS & Swap Butonu */}
                <div className="lg:col-span-1 flex flex-row lg:flex-col items-center justify-center gap-3 py-2">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center font-black text-sm text-amber-400 shadow-inner">
                    VS
                  </div>
                  <button
                    type="button"
                    onClick={handleSwapHeroes}
                    title="Karakterlerin yerini değiştir"
                    aria-label="Senin karakterin ile rakip karakterin yerini değiştir"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    <svg
                      className="w-4 h-4 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </svg>
                    Değiştir
                  </button>
                </div>

                {/* Sağ: Rakip Karakter */}
                <div className="lg:col-span-5">
                  <CharacterDropdown
                    id="enemy-hero-select"
                    label="Rakip Karakter"
                    subLabel="Karşındaki Tehdit"
                    selectedHero={enemyHero}
                    onSelect={setEnemyHeroId}
                    accentClass="rose"
                  />
                </div>
              </div>

              {/* Seçili Karakterlerin Kısa Yetenek Özeti Barı */}
              <div className="mt-6 pt-6 border-t border-slate-800/90 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-amber-500/20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        Senin Avantajların ({playerHero.name})
                      </span>
                      <span className="text-xs text-slate-400">
                        {playerHero.title}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {playerHero.shortBio}
                    </p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {playerHero.abilities.map((ab) => (
                      <span
                        key={ab}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {ab}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-rose-500/20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                        Dikkat Edilecek Rakip Yetenekleri ({enemyHero.name})
                      </span>
                      <span className="text-xs text-slate-400">
                        {enemyHero.title}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {enemyHero.shortBio}
                    </p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {enemyHero.abilities.map((ab) => (
                      <span
                        key={ab}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-900 text-rose-200/90 border border-rose-950"
                      >
                        {ab}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Karşılaşma Özet Banner'ı */}
            <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800/90 border border-slate-700/80 p-5 sm:p-6 mb-10 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                    {playerHero.name}{' '}
                    <span className="text-amber-400 font-black">vs</span>{' '}
                    {enemyHero.name} Analizi
                  </h2>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      difficultyStyles[currentMatchup.difficulty] ||
                      difficultyStyles.Dengeli
                    }`}
                  >
                    Zorluk: {currentMatchup.difficulty}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-200 border border-slate-700">
                    Kazanma Oranı Dengesi: {currentMatchup.advantageScore}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
                {currentMatchup.summary}
              </p>

              <div className="mt-4 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                <span
                  className="text-amber-400 font-black text-lg leading-none mt-0.5"
                  aria-hidden="true"
                >
                  ★
                </span>
                <p className="text-xs sm:text-sm text-amber-100">
                  <strong className="font-bold text-amber-300">
                    Kazanma Koşulu (Win Condition):{' '}
                  </strong>
                  {currentMatchup.playstyle.winCondition}
                </p>
              </div>
            </div>

            {/* DİNAMİK ÇIKTI 1: ÖNERİLEN COUNTER EŞYALARI (GÖRSELLİ VE AÇIKLAMALI) */}
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-white flex items-center gap-2.5">
                    <span
                      className="w-3 h-7 rounded bg-amber-400 inline-block"
                      aria-hidden="true"
                    />
                    Önerilen Counter Eşyalar (Items)
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {enemyHero.name} karşısında {playerHero.name} oynarken
                    alınması gereken en yüksek verimli eşyalar
                  </p>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  Görseller local <code>/assets/items/</code> dizininden yüklenir
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentMatchup.recommendedItems.map((item) => {
                  const catStyle =
                    categoryStyles[item.category] || categoryStyles.Spirit;
                  return (
                    <article
                      key={item.id}
                      className={`rounded-2xl bg-slate-900/90 border-2 p-5 flex flex-col justify-between transition-all duration-200 shadow-lg ${catStyle.border}`}
                    >
                      <div>
                        {/* Eşya Üst Bilgisi ve Görseli */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-16 h-16 rounded-xl bg-slate-950 border border-slate-700 p-1.5 shrink-0 flex items-center justify-center overflow-hidden shadow-md">
                            <img
                              src={item.image}
                              alt={item.imageAlt}
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = createPlaceholderDataUri(
                                  item.name,
                                  catStyle.accent
                                );
                              }}
                              className="w-full h-full object-contain rounded-lg"
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <span
                                className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${catStyle.badge}`}
                              >
                                {catStyle.label}
                              </span>
                              <span className="text-xs font-extrabold text-emerald-300 bg-emerald-950/60 border border-emerald-700/40 px-2 py-0.5 rounded">
                                {item.cost}
                              </span>
                            </div>

                            <h4 className="text-lg font-extrabold text-white mt-1.5 truncate">
                              {item.name}
                            </h4>

                            <div className="flex items-center gap-2 mt-1 text-xs text-slate-300">
                              <span>{item.tier}</span>
                              <span>•</span>
                              <span className="text-amber-300 font-medium">
                                {item.activation}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Öncelik Rozeti */}
                        <div className="mb-3">
                          <span className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-800 text-amber-300 border border-slate-700">
                            Öncelik: {item.priority}
                          </span>
                        </div>

                        {/* Eşyanın Genel Etkisi */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                          {item.baseDesc}
                        </p>
                      </div>

                      {/* Neden Bu Karşılaşmada Alınmalı? */}
                      <div className="pt-3.5 border-t border-slate-800 bg-slate-950/60 -mx-5 -mb-5 p-4 rounded-b-2xl">
                        <p className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                          Neden {enemyHero.name} Karşısında Alınmalı?
                        </p>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                          {item.matchupReason}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* DİNAMİK ÇIKTI 2: TAKTİKSEL OYNAYIŞ (PLAYSTYLE) ÖNERİLERİ */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-white flex items-center gap-2.5">
                  <span
                    className="w-3 h-7 rounded bg-emerald-400 inline-block"
                    aria-hidden="true"
                  />
                  Taktiksel Oynayış (Playstyle) Rehberi
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  Maçın dakikasına göre {playerHero.name} ile {enemyHero.name}{' '}
                  karşısında izlenmesi gereken safha stratejileri
                </p>
              </div>

              {/* 3 Oyun Evresi Kartları */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <article className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">
                      00:00 - 10:00 Dk
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      Safha 1
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Erken Oyun &amp; Koridor (Laning)
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {currentMatchup.playstyle.earlyGame}
                  </p>
                </article>

                <article className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      10:00 - 22:00 Dk
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      Safha 2
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Orta Oyun &amp; Rotasyon (Mid-Game)
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {currentMatchup.playstyle.midGame}
                  </p>
                </article>

                <article className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-rose-500/15 text-rose-300 border border-rose-500/30">
                      22:00+ Dk
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      Safha 3
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Geç Oyun &amp; Takım Savaşı (Late-Game)
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {currentMatchup.playstyle.lateGame}
                  </p>
                </article>
              </div>

              {/* Kritik Mekanik Counter İpuçları */}
              <article className="rounded-2xl bg-slate-900/95 border border-slate-800 p-5 sm:p-6">
                <h4 className="text-base sm:text-lg font-extrabold text-white mb-4 flex items-center gap-2">
                  <span className="text-amber-400" aria-hidden="true">
                    ⚡
                  </span>
                  {enemyHero.name} Karşısında Kritik Mikro-Mekanik İpuçları
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentMatchup.playstyle.counterTips.map((tip, index) => (
                    <li
                      key={index}
                      className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/90 text-sm text-slate-200 leading-relaxed flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. BÖLÜM: GENEL META TAVSİYELERİ (3 KOLONLU STATİK KARTLAR)
           ========================================================= */}
        <section
          id="meta-section"
          aria-labelledby="meta-heading"
          className="py-14 sm:py-16 border-b border-slate-800/80 bg-slate-950"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 mb-3">
                Bölüm 02 • Makro Oyun &amp; Harita Rehberi
              </span>
              <h2
                id="meta-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight"
              >
                Güncel Deadlock Genel Meta Tavsiyeleri
              </h2>
              <p className="mt-3 text-base text-slate-300 leading-relaxed">
                Oynadığınız karakterden bağımsız olarak üst liglerde (Phantom ve
                Eternus) maç kazanmanın temelini oluşturan 3 makro strateji
                sütunu.
              </p>
            </div>

            {/* 3 Kolonlu Statik Meta Kartları */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
              {generalMetaTips.map((meta) => (
                <article
                  key={meta.id}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between shadow-xl transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        {meta.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-white mb-1">
                      {meta.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-400 mb-4">
                      {meta.subtitle}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {meta.description}
                    </p>

                    <ul className="space-y-2.5 mb-6">
                      {meta.highlights.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-xs sm:text-sm text-slate-200 flex items-start gap-2.5 leading-relaxed"
                        >
                          <span
                            className="text-emerald-400 font-bold mt-0.5"
                            aria-hidden="true"
                          >
                            ✓
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-800/90 bg-slate-950/60 -mx-6 -mb-6 p-5 rounded-b-2xl">
                    <div className="text-xl font-black text-amber-400">
                      {meta.keyMetric}
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      {meta.metricLabel}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            3. BÖLÜM: ARAÇ HAKKINDA / METODOLOJİ
           ========================================================= */}
        <section
          id="methodology-section"
          aria-labelledby="methodology-heading"
          className="py-14 sm:py-16 bg-slate-900/40"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <div className="max-w-3xl">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-purple-500/15 text-purple-300 border border-purple-500/30 mb-3">
                  Bölüm 03 • Araç Hakkında &amp; Metodoloji
                </span>
                <h2
                  id="methodology-heading"
                  className="text-2xl sm:text-3xl font-black text-white tracking-tight"
                >
                  {methodologyData.title}
                </h2>
                <p className="text-sm sm:text-base font-medium text-amber-300 mt-1">
                  {methodologyData.subtitle}
                </p>
                <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
                  {methodologyData.leadText}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {methodologyData.pillars.map((pillar) => (
                  <article
                    key={pillar.step}
                    className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/90"
                  >
                    <span className="text-xs font-black px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Adım {pillar.step}
                    </span>
                    <h3 className="text-base font-extrabold text-white mt-3 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
                <p>
                  <strong className="text-white">Mimari Not:</strong> Tüm
                  karakter profilleri, eşya maliyetleri ve karşılaşma matrisleri{' '}
                  <code className="px-1.5 py-0.5 rounded bg-slate-950 text-amber-300 border border-slate-800">
                    src/data.js
                  </code>{' '}
                  üzerinden dinamik olarak beslenmektedir.
                </p>
                <a
                  href="#matchup-section"
                  className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded px-2 py-1"
                >
                  ↑ Simülatöre Dön
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ALT BİLGİ / FOOTER (Semantic <footer>) */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black flex items-center justify-center text-xs">
              DL
            </span>
            <p className="text-slate-300 font-medium">
              Deadlock Taktiksel Matchup &amp; Counter Rehberi
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <a
              href="#matchup-section"
              className="hover:text-white transition-colors"
            >
              Hero Matchup
            </a>
            <span>•</span>
            <a
              href="#meta-section"
              className="hover:text-white transition-colors"
            >
              Genel Meta
            </a>
            <span>•</span>
            <a
              href="#methodology-section"
              className="hover:text-white transition-colors"
            >
              Metodoloji
            </a>
          </div>

          <p className="text-xs text-slate-400 text-center sm:text-right">
            React (Vite) &amp; Tailwind CSS ile geliştirilmiştir • Vercel Deploy
            Uyumlu
          </p>
        </div>
      </footer>
    </div>
  );
}
