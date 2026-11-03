import { appMetaInfo } from '../data';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/90 border-b border-slate-800/80">
      {/* Veri Güncelliği ve Beta Süreci Uyarısı Üst Şeridi (data.js'den dinamik çekilir) */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-1.5 text-center">
        <p className="text-[11px] sm:text-xs font-medium text-amber-200 max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400"
            aria-hidden="true"
          />
          <span>{appMetaInfo.disclaimerText}</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        <a
          href="/"
          aria-label="Deadlock Tactics ana sayfa"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1 shrink-0"
        >
          <div
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-md shadow-amber-500/20"
            aria-hidden="true"
          >
            DL
          </div>
          <div>
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-white block leading-none">
              {appMetaInfo.brandName}{' '}
              <span className="text-amber-400">
                {appMetaInfo.brandHighlight}
              </span>
            </span>
            <span className="text-[11px] text-slate-300 font-medium block mt-0.5">
              {appMetaInfo.brandSubtitle}
            </span>
          </div>
        </a>

        {/* Dinamik Yama / Son Güncelleme Etiketi (Badge) */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            <span
              className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
              aria-hidden="true"
            />
            {appMetaInfo.patchBadge}
          </span>
        </div>
      </div>
    </header>
  );
}
