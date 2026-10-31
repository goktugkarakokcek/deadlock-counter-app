import CharacterDropdown from './CharacterDropdown';
import {
  itemsCatalog,
  categoryStyles,
  difficultyStyles,
  createPlaceholderDataUri,
} from '../data';

const itemsByName = Object.values(itemsCatalog).reduce((acc, item) => {
  acc[item.name] = item;
  const baseName = item.name.split(' (')[0].trim();
  if (!acc[baseName]) acc[baseName] = item;
  return acc;
}, {});

const buildStages = [
  {
    key: 'earlyGame',
    title: 'Early Game (Erken Oyun)',
    subtitle: 'Koridor & Başlangıç ($ 800)',
    badgeClass: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    accentDot: 'bg-sky-400',
  },
  {
    key: 'coreItems',
    title: 'Core Items (Çekirdek Eşyalar)',
    subtitle: 'Orta Oyun Güç Patlaması ($ 1600 - $ 3200)',
    badgeClass: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    accentDot: 'bg-amber-400',
  },
  {
    key: 'lateGame',
    title: 'Late Game (Geç Oyun)',
    subtitle: 'Maksimum Taşıyıcı Dizilimi ($ 6400)',
    badgeClass: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    accentDot: 'bg-purple-400',
  },
];

export default function HeroMatchup({
  playerHero,
  enemyHero,
  hasBothSelected,
  hasAnySelection,
  currentMatchup,
  onSelectPlayerHero,
  onSelectEnemyHero,
  onSwapHeroes,
  onClearSelections,
  onRestoreDefaults,
}) {
  return (
    <section
      id="matchup-section"
      aria-labelledby="matchup-heading"
      className="relative py-10 sm:py-14 border-b border-slate-800/80 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bölüm Ana Başlığı (H1) */}
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

        {/* İki Adet Görsel Destekli Dropdown / Select Paneli (Semantic <article>) */}
        <article
          aria-labelledby="selection-panel-heading"
          className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-2xl mb-10"
        >
          {/* Panel Üst Bilgi (H2) ve Seçimleri Temizle Aksiyon Çubuğu */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-800/90">
            <div>
              <h2
                id="selection-panel-heading"
                className="text-base sm:text-lg font-extrabold text-white flex items-center gap-2"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full bg-amber-400"
                  aria-hidden="true"
                />
                Karakter Eşleşmesi Seçim Paneli
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Karşılaşma analizini güncellemek için karakterleri seçin veya
                mevcut seçimleri sıfırlayın.
              </p>
            </div>

            <div className="flex items-center gap-2.5 self-start sm:self-auto">
              {!hasBothSelected && (
                <button
                  type="button"
                  onClick={onRestoreDefaults}
                  aria-label="Varsayılan Abrams ve Vindicta eşleşmesini yükle"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  Varsayılan Eşleşme
                </button>
              )}

              <button
                type="button"
                onClick={onClearSelections}
                disabled={!hasAnySelection}
                aria-label="Seçilen karakterleri sıfırla ve temizle"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${
                  hasAnySelection
                    ? 'bg-rose-500/15 hover:bg-rose-500/25 text-rose-200 border-rose-500/40 hover:border-rose-400 shadow-md shadow-rose-950/50 cursor-pointer'
                    : 'bg-slate-800/50 text-slate-400 border-slate-800 cursor-not-allowed'
                }`}
              >
                <svg
                  className="w-4 h-4 text-rose-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Seçimleri Temizle
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
            {/* Sol: Senin Karakterin */}
            <div className="lg:col-span-5">
              <CharacterDropdown
                id="player-hero-select"
                label="Senin Karakterin"
                subLabel="Oynadığın Hero"
                selectedHero={playerHero}
                onSelect={onSelectPlayerHero}
                accentClass="amber"
              />
            </div>

            {/* Orta: VS & Swap Butonu */}
            <div className="lg:col-span-1 flex flex-row lg:flex-col items-center justify-center gap-3 py-2">
              <div
                className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center font-black text-sm text-amber-400 shadow-inner"
                aria-hidden="true"
              >
                VS
              </div>
              <button
                type="button"
                onClick={onSwapHeroes}
                disabled={!hasAnySelection}
                title="Karakterlerin yerini değiştir"
                aria-label="Senin karakterin ile rakip karakterin yerini değiştir"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  hasAnySelection
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-600'
                    : 'bg-slate-900 text-slate-400 border-slate-800 cursor-not-allowed'
                }`}
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
                onSelect={onSelectEnemyHero}
                accentClass="rose"
              />
            </div>
          </div>

          {/* Seçili Karakterlerin Kısa Yetenek Özeti Barı (H3 Başlık Hiyerarşisi) */}
          {hasBothSelected && (
            <div className="mt-6 pt-6 border-t border-slate-800/90 grid grid-cols-1 md:grid-cols-2 gap-4">
              <aside
                aria-label={`${playerHero.name} karakter avantajları`}
                className="p-4 rounded-xl bg-slate-950/70 border border-amber-500/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Senin Avantajların ({playerHero.name})
                    </h3>
                    <span className="text-xs text-slate-300">
                      {playerHero.title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {playerHero.shortBio}
                  </p>
                </div>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {playerHero.abilities.map((ab) => (
                    <li
                      key={ab}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-900 text-slate-200 border border-slate-800"
                    >
                      {ab}
                    </li>
                  ))}
                </ul>
              </aside>

              <aside
                aria-label={`${enemyHero.name} dikkat edilecek rakip yetenekleri`}
                className="p-4 rounded-xl bg-slate-950/70 border border-rose-500/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400">
                      Dikkat Edilecek Rakip Yetenekleri ({enemyHero.name})
                    </h3>
                    <span className="text-xs text-slate-300">
                      {enemyHero.title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {enemyHero.shortBio}
                  </p>
                </div>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {enemyHero.abilities.map((ab) => (
                    <li
                      key={ab}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-900 text-rose-200 border border-rose-950"
                    >
                      {ab}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          )}
        </article>

        {/* SONUÇLARIN GÖSTERİLDİĞİ ANA KART ALANI (Gölgeli, Yuvarlak Köşeli, Belirgin Arkaplanlı) */}
        <article
          id="matchup-results-card"
          aria-live="polite"
          className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800/90 border-2 border-amber-500/30 ring-1 ring-white/10 shadow-2xl shadow-amber-500/10 p-6 sm:p-8 lg:p-10 backdrop-blur-xl"
        >
          {hasBothSelected && currentMatchup ? (
            <>
              {/* Karşılaşma Özet Banner'ı (H2) */}
              <div className="rounded-2xl bg-slate-950/85 border border-slate-700/80 p-5 sm:p-6 mb-10 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-lg bg-amber-500 text-slate-950">
                      Aktif Rapor
                    </span>
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

              {/* DİNAMİK ÇIKTI 1: ÖNERİLEN COUNTER EŞYALARI (H3 -> H4) */}
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
                  <span className="text-xs text-slate-300 font-medium">
                    Görseller local <code>/assets/items/</code> dizininden
                    yüklenir
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {currentMatchup.recommendedItems.map((item) => {
                    const catStyle =
                      categoryStyles[item.category] || categoryStyles.Spirit;
                    return (
                      <article
                        key={item.id}
                        className={`rounded-2xl bg-slate-950/90 border-2 p-5 flex flex-col justify-between transition-all duration-200 shadow-xl ${catStyle.border}`}
                      >
                        <div>
                          {/* Eşya Üst Bilgisi ve Görseli */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-16 h-16 rounded-xl bg-slate-900 border border-slate-700 p-1.5 shrink-0 flex items-center justify-center overflow-hidden shadow-md">
                              <img
                                src={item.image}
                                alt={item.imageAlt}
                                onError={(e) => {
                                  e.currentTarget.onerror = null;
                                  e.currentTarget.src =
                                    createPlaceholderDataUri(
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
                          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                            {item.baseDesc}
                          </p>
                        </div>

                        {/* Neden Bu Karşılaşmada Alınmalı? */}
                        <div className="pt-3.5 border-t border-slate-800 bg-slate-900/80 -mx-5 -mb-5 p-4 rounded-b-2xl">
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

              {/* YENİ BÖLÜM: POPÜLER BUILD (META DİZİLİMİ) */}
              {playerHero.popularBuilds && (
                <div className="mb-12">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
                    <div>
                      <h3 className="text-2xl font-extrabold text-white flex items-center gap-2.5">
                        <span
                          className="w-3 h-7 rounded bg-purple-400 inline-block"
                          aria-hidden="true"
                        />
                        {playerHero.name} Popüler Build (Meta Dizilimi)
                      </h3>
                      <p className="text-sm text-slate-300 mt-1">
                        {playerHero.name} ({playerHero.role}) için oyun safhasına
                        göre en yüksek kazanma oranına sahip standart meta eşya
                        dizilimi
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 self-start sm:self-auto">
                      Early • Core • Late Game
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {buildStages.map((stage) => {
                      const stageItems =
                        playerHero.popularBuilds[stage.key] || [];
                      return (
                        <article
                          key={stage.key}
                          className="rounded-2xl bg-slate-950/90 border border-slate-800/90 p-5 shadow-xl flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 pb-3.5 mb-4 border-b border-slate-800">
                              <div>
                                <div className="flex items-center gap-2">
                                  <span
                                    className={`w-2.5 h-2.5 rounded-full ${stage.accentDot}`}
                                    aria-hidden="true"
                                  />
                                  <h4 className="text-base sm:text-lg font-extrabold text-white">
                                    {stage.title}
                                  </h4>
                                </div>
                                <p className="text-xs text-slate-400 mt-0.5">
                                  {stage.subtitle}
                                </p>
                              </div>
                              <span
                                className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border shrink-0 ${stage.badgeClass}`}
                              >
                                {stageItems.length} Eşya
                              </span>
                            </div>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                              {stageItems.map((itemName) => {
                                const catalogItem = itemsByName[itemName];
                                const catStyle =
                                  categoryStyles[catalogItem?.category] ||
                                  categoryStyles.Spirit;
                                const imgSrc =
                                  catalogItem?.image ||
                                  createPlaceholderDataUri(
                                    itemName,
                                    catStyle.accent
                                  );
                                const imgAlt =
                                  catalogItem?.imageAlt ||
                                  `${itemName} eşya ikonu`;

                                return (
                                  <li
                                    key={itemName}
                                    className={`flex items-center gap-3.5 p-2.5 rounded-xl bg-slate-900/90 border transition-all duration-150 ${catStyle.border}`}
                                  >
                                    <div className="w-12 h-12 rounded-lg bg-slate-950 border border-slate-700/80 p-1 shrink-0 flex items-center justify-center overflow-hidden shadow">
                                      <img
                                        src={imgSrc}
                                        alt={imgAlt}
                                        onError={(e) => {
                                          e.currentTarget.onerror = null;
                                          e.currentTarget.src =
                                            createPlaceholderDataUri(
                                              itemName,
                                              catStyle.accent
                                            );
                                        }}
                                        className="w-full h-full object-contain rounded"
                                      />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                      <p className="text-xs sm:text-sm font-bold text-white truncate">
                                        {itemName}
                                      </p>
                                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                                        <span
                                          className={`text-[10px] font-bold px-2 py-0.5 rounded border ${catStyle.badge}`}
                                        >
                                          {catStyle.label}
                                        </span>
                                        {catalogItem?.cost && (
                                          <span className="text-[11px] font-extrabold text-emerald-300">
                                            {catalogItem.cost}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* DİNAMİK ÇIKTI 2: TAKTİKSEL OYNAYIŞ (PLAYSTYLE) ÖNERİLERİ (H3 -> H4) */}
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
                  <article className="rounded-2xl bg-slate-950/85 border border-slate-800 p-5 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">
                        00:00 - 10:00 Dk
                      </span>
                      <span className="text-xs text-slate-300 font-semibold">
                        Safha 1
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Erken Oyun &amp; Koridor (Laning)
                    </h4>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {currentMatchup.playstyle.earlyGame}
                    </p>
                  </article>

                  <article className="rounded-2xl bg-slate-950/85 border border-slate-800 p-5 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        10:00 - 22:00 Dk
                      </span>
                      <span className="text-xs text-slate-300 font-semibold">
                        Safha 2
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Orta Oyun &amp; Rotasyon (Mid-Game)
                    </h4>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {currentMatchup.playstyle.midGame}
                    </p>
                  </article>

                  <article className="rounded-2xl bg-slate-950/85 border border-slate-800 p-5 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-rose-500/15 text-rose-300 border border-rose-500/30">
                        22:00+ Dk
                      </span>
                      <span className="text-xs text-slate-300 font-semibold">
                        Safha 3
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Geç Oyun &amp; Takım Savaşı (Late-Game)
                    </h4>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {currentMatchup.playstyle.lateGame}
                    </p>
                  </article>
                </div>

                {/* Kritik Mekanik Counter İpuçları */}
                <article className="rounded-2xl bg-slate-950/90 border border-slate-800 p-5 sm:p-6 shadow-lg">
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
                        className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 text-sm text-slate-200 leading-relaxed flex items-start gap-3"
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
            </>
          ) : (
            /* Seçimler Temizlendiğinde Gösterilen Boş Durum (Empty State) */
            <div className="py-12 px-4 text-center max-w-xl mx-auto">
              <div
                className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg"
                aria-hidden="true"
              >
                ⚔️
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Karakter Seçimleri Temizlendi
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-200 leading-relaxed">
                Önerilen counter eşyaları (items) ve safha bazlı taktiksel
                oynayış (playstyle) rehberini görüntülemek için yukarıdan{' '}
                <strong className="text-amber-300">Senin Karakterin</strong> ve{' '}
                <strong className="text-rose-300">Rakip Karakter</strong>{' '}
                seçimlerini yapın.
              </p>
              <button
                type="button"
                onClick={onRestoreDefaults}
                aria-label="Örnek karşılaşma olan Abrams vs Vindicta analizini yükle"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-extrabold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                Örnek Karşılaşmayı Yükle (Abrams vs Vindicta)
              </button>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}
