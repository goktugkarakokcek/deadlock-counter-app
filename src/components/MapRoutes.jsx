import { mapMacroData, timelineBadgeStyles } from '../data';

export default function MapRoutes() {
  return (
    <section
      id="map-macro-section"
      aria-labelledby="map-macro-heading"
      className="py-14 sm:py-16 border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bölüm Başlığı (H2) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-sky-500/15 text-sky-300 border border-sky-500/30 mb-3">
            Bölüm 03 • Harita Rotasyonları &amp; Spawn Takvimi
          </span>
          <h2
            id="map-macro-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight"
          >
            Harita ve Makro Zamanlamalar
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Deadlock haritasında ruh (Soul) ve kalıcı istatistik (Golden Statue)
            kazandıran{' '}
            <strong className="text-white font-semibold">
              Kutu (Crate) rotaları
            </strong>
            , koridorlar arası hızlı geçiş sağlayan{' '}
            <strong className="text-white font-semibold">
              Tünel (Transit) hatları
            </strong>{' '}
            ve maçın kaderini belirleyen{' '}
            <strong className="text-white font-semibold">
              kritik spawn süreleri
            </strong>
            .
          </p>
        </div>

        {/* ALT BÖLÜM 1: KUTU (CRATE) ROTALARI VE YAKLAŞIK KUTU SAYILARI (H3 -> H4) */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2.5">
                <span
                  className="w-3 h-7 rounded bg-amber-400 inline-block"
                  aria-hidden="true"
                />
                Kutu (Crate) Rotaları ve Yaklaşık Kutu Sayıları
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                Trooper dalgaları arasında ekstra Ruh ve kalıcı Altın Heykel
                (Golden Statue) buff’ı toplamak için optimize edilmiş rotalar
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 self-start sm:self-auto">
              Yenilenme Süresi: Her 3 Dakika (180 Sn)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {mapMacroData.crateRoutes.map((route) => (
              <article
                key={route.id}
                className="rounded-2xl bg-slate-900/95 border border-slate-800 hover:border-amber-500/40 p-6 flex flex-col justify-between shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
                    <span className="text-xs font-extrabold px-3 py-1 rounded-lg bg-amber-500 text-slate-950 shadow-sm">
                      <span aria-hidden="true">📦 </span>
                      {route.crateCount}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-yellow-500/15 text-yellow-300 border border-yellow-500/30">
                      <span aria-hidden="true">🗽 </span>
                      {route.statueCount}
                    </span>
                  </div>

                  <h4 className="text-lg font-extrabold text-white mb-2">
                    {route.routeTitle}
                  </h4>

                  <div className="flex items-center gap-3 text-xs text-slate-300 mb-4">
                    <span>
                      <span aria-hidden="true">⏱ </span>Ortalama Süre:{' '}
                      {route.avgDuration}
                    </span>
                    <span aria-hidden="true">•</span>
                    <span className="text-emerald-300 font-semibold">
                      {route.difficulty}
                    </span>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed mb-5">
                    {route.description}
                  </p>
                </div>

                <ul className="pt-4 border-t border-slate-800/90 space-y-2">
                  {route.tips.map((tip, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-200 flex items-start gap-2 leading-relaxed"
                    >
                      <span
                        className="text-amber-400 font-bold mt-0.5"
                        aria-hidden="true"
                      >
                        ▸
                      </span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* ALT BÖLÜM 2: TÜNEL (TRANSIT) ROTALARI VE GEÇİŞ HATLARI (H3 -> H4) */}
        <div className="mb-14">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2.5">
              <span
                className="w-3 h-7 rounded bg-sky-400 inline-block"
                aria-hidden="true"
              />
              Tünel (Transit) Rotaları ve Harita Geçiş Hatları
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              Koridorlar arası görünmeden rotasyon yapmayı ve baskınlardan
              (Gank) kaçmayı sağlayan yeraltı tünelleri ve ulaşım ağları
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {mapMacroData.transitRoutes.map((transit) => (
              <article
                key={transit.id}
                className="rounded-2xl bg-slate-900/95 border border-slate-800 hover:border-sky-500/40 p-6 flex flex-col justify-between shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">
                      {transit.badge}
                    </span>
                    <span className="text-xs text-slate-300 font-medium">
                      {transit.routeType}
                    </span>
                  </div>

                  <h4 className="text-lg font-extrabold text-white mb-3">
                    {transit.name}
                  </h4>

                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-0.5">
                      Bağlantı Hattı:
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-amber-300">
                      {transit.connects}
                    </span>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed">
                    {transit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ALT BÖLÜM 3: ÖNEMLİ SPAWN SÜRELERİ ZAMAN ÇİZELGESİ (TIMELINE) (H3 -> H4) */}
        <article
          aria-labelledby="spawn-timeline-heading"
          className="rounded-3xl bg-slate-900/95 border border-slate-800 p-6 sm:p-8 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-5 border-b border-slate-800">
            <div>
              <h3
                id="spawn-timeline-heading"
                className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2.5"
              >
                <span
                  className="w-3 h-7 rounded bg-emerald-400 inline-block"
                  aria-hidden="true"
                />
                Kritik Spawn Süreleri Zaman Çizelgesi (Timeline)
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                İlk nötr kampların çıkışı, Sinner’s Sacrifice, Mid-Boss ve Soul
                Urn (Ruh Vazosu) doğuş dakikaları
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 self-start sm:self-auto">
              <span aria-hidden="true">⏱ </span>Maç İçi Dakika Akışı (00:00 →
              10:00+)
            </span>
          </div>

          <ol className="relative border-l-2 border-slate-700 ml-3 sm:ml-6 space-y-6">
            {mapMacroData.spawnTimeline.map((item) => {
              const badgeStyle =
                timelineBadgeStyles[item.badgeColor] ||
                timelineBadgeStyles.amber;

              return (
                <li key={item.time} className="ml-6 relative">
                  <span
                    className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-amber-400 ring-4 ring-slate-900"
                    aria-hidden="true"
                  />

                  <div className="p-5 rounded-2xl bg-slate-950/85 border border-slate-800/90 hover:border-slate-700 transition-all shadow-md">
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="text-sm sm:text-base font-black px-3 py-0.5 rounded-lg bg-amber-500 text-slate-950">
                        {item.time} Dk
                      </span>
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-md border ${badgeStyle}`}
                      >
                        {item.phase}
                      </span>
                      <h4 className="text-base sm:text-lg font-extrabold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </article>
      </div>
    </section>
  );
}
