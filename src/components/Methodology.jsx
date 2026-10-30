import { methodologyData } from '../data';

export default function Methodology() {
  return (
    <section
      id="methodology-section"
      aria-labelledby="methodology-heading"
      className="py-14 sm:py-16 bg-slate-900/40"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="max-w-3xl">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-purple-500/15 text-purple-300 border border-purple-500/30 mb-3">
              Bölüm 04 • Araç Hakkında &amp; Metodoloji
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
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
            <p>
              <strong className="text-white">Mimari Not:</strong> Tüm karakter
              profilleri, eşya maliyetleri ve harita rotaları{' '}
              <code className="px-1.5 py-0.5 rounded bg-slate-950 text-amber-300 border border-slate-800">
                src/data.js
              </code>{' '}
              üzerinden modüler bileşenlere aktarılır.
            </p>
            <a
              href="#matchup-section"
              aria-label="Sayfanın en üstündeki Hero Matchup simülatörüne dön"
              className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded px-2 py-1"
            >
              ↑ Simülatöre Dön
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
