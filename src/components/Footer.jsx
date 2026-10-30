export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
        <div className="flex items-center gap-2.5">
          <span
            className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black flex items-center justify-center text-xs"
            aria-hidden="true"
          >
            DL
          </span>
          <p className="text-slate-200 font-medium">
            Deadlock Taktiksel Matchup &amp; Counter Rehberi
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
          React (Vite) &amp; Tailwind CSS ile geliştirilmiştir • Vercel Deploy
          Uyumlu
        </p>
      </div>
    </footer>
  );
}
