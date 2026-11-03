import { appMetaInfo } from '../data';

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Veri Güvenilirliği ve Beta Uyarısı (Disclaimer) Kutusu */}
        <aside
          aria-label="Veri Güncelliği ve Beta Süreci Uyarısı"
          className="rounded-2xl bg-black/40 border border-amber-500/30 p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-amber-500/40 hover:shadow-[0_0_14px_-6px_rgba(245,158,11,0.35)] transform-gpu transition-all duration-300"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                Veri Güncelliği Uyarısı
              </span>
              <p className="text-xs sm:text-sm font-bold text-white">
                {appMetaInfo.disclaimerText}
              </p>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {appMetaInfo.disclaimerDetail}
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              <span
                className="w-2 h-2 rounded-full bg-emerald-400"
                aria-hidden="true"
              />
              {appMetaInfo.patchBadge}
            </span>
          </div>
        </aside>

        {/* Alt Bilgi Barı */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2.5">
            <span
              className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black flex items-center justify-center text-xs"
              aria-hidden="true"
            >
              DL
            </span>
            <p className="text-slate-200 font-medium">
              {appMetaInfo.brandName} {appMetaInfo.brandHighlight} •{' '}
              {appMetaInfo.brandSubtitle}
            </p>
          </div>

          <nav
            aria-label="Alt Bilgi Bölüm Bağlantıları"
            className="flex flex-wrap items-center gap-4 text-slate-300"
          >
            <a
              href="#matchup-section"
              className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded px-1"
            >
              Hero Matchup
            </a>
            <span aria-hidden="true">•</span>
            <a
              href="#meta-section"
              className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded px-1"
            >
              Genel Meta
            </a>
            <span aria-hidden="true">•</span>
            <a
              href="#map-macro-section"
              className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded px-1"
            >
              Harita &amp; Zamanlamalar
            </a>
            <span aria-hidden="true">•</span>
            <a
              href="#methodology-section"
              className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded px-1"
            >
              Metodoloji
            </a>
          </nav>

          <p className="text-xs text-slate-300 text-center sm:text-right">
            {appMetaInfo.footerBuildNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
