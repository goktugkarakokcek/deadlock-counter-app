import { generalMetaTips } from '../data';

export default function GeneralMeta() {
  return (
    <section
      id="meta-section"
      aria-labelledby="meta-heading"
      className="py-14 sm:py-16 border-b border-white/5"
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
            Eternus) maç kazanmanın temelini oluşturan 4 profesyonel makro ve
            mikro strateji sütunu.
          </p>
        </div>

        {/* 4 Temel Meta Kartı (H2 -> H3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {generalMetaTips.map((meta) => (
            <article
              key={meta.id}
              className="rounded-2xl bg-black/40 border border-white/10 hover:border-slate-700 p-6 flex flex-col justify-between shadow-md transition-all"
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

                <p className="text-sm text-slate-200 leading-relaxed mb-5">
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
  );
}
