const winnerCopy = {
  player: {
    title: 'Zafer!',
    text: 'Yapay zekanın tüm koridorlarını çökerttin. Counter bilgin sahada karşılık buldu.',
    className: 'border-amber-500/50 from-amber-500/15',
    titleClass: 'text-amber-300',
  },
  enemy: {
    title: 'Yenilgi',
    text: 'Yapay zeka koridorlarda üstünlük kurdu. Counter ilişkilerini inceleyip tekrar dene.',
    className: 'border-rose-500/50 from-rose-500/15',
    titleClass: 'text-rose-300',
  },
  draw: {
    title: 'Berabere',
    text: 'İki taraf da aynı turda düştü. Bir rövanş şart.',
    className: 'border-purple-500/50 from-purple-500/15',
    titleClass: 'text-purple-300',
  },
};

export default function BattlerGameOver({ winner, round, onReset }) {
  const copy = winnerCopy[winner];
  if (!copy) return null;
  return (
    <aside
      role="alert"
      aria-label="Oyun sonucu"
      className={`rounded-2xl bg-gradient-to-r ${copy.className} to-black/60 border p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md`}
    >
      <div>
        <h3 className={`text-2xl font-black ${copy.titleClass}`}>{copy.title}</h3>
        <p className="text-sm text-slate-200 mt-1">
          {copy.text} <span className="text-slate-400">({round}. tur)</span>
        </p>
      </div>
      <button
        type="button"
        onClick={onReset}
        aria-label="Yeni Auto-Battler oyunu başlat"
        className="shrink-0 px-5 py-2.5 rounded-xl text-sm font-black bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 border border-amber-300/60 transform-gpu will-change-transform transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
      >
        Yeniden Başla
      </button>
    </aside>
  );
}
