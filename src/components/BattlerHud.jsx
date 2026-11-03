import { autoBattlerConfig } from '../data';

const difficultyOptions = Object.values(autoBattlerConfig.difficulties);

const difficultyToneStyles = {
  easy: {
    active: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/60 shadow-[0_0_10px_-3px_rgba(16,185,129,0.5)]',
    idle: 'bg-black/40 text-slate-300 border-white/10 hover:border-emerald-500/40 hover:text-emerald-200',
  },
  normal: {
    active: 'bg-amber-500/20 text-amber-200 border-amber-400/60 shadow-[0_0_10px_-3px_rgba(245,158,11,0.5)]',
    idle: 'bg-black/40 text-slate-300 border-white/10 hover:border-amber-500/40 hover:text-amber-200',
  },
  hard: {
    active: 'bg-rose-500/20 text-rose-200 border-rose-400/60 shadow-[0_0_10px_-3px_rgba(244,63,94,0.5)]',
    idle: 'bg-black/40 text-slate-300 border-white/10 hover:border-rose-500/40 hover:text-rose-200',
  },
};

function HpBar({ label, hp, tone }) {
  const pct = Math.max(0, Math.min(100, (hp / autoBattlerConfig.startingHp) * 100));
  const barTone =
    tone === 'player' ? 'from-amber-500 to-orange-600' : 'from-rose-600 to-red-800';
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between gap-2 mb-0.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 truncate">
          {label}
        </span>
        <span className="text-xs font-black text-white shrink-0">
          {hp} <span className="text-slate-400 font-semibold">/ {autoBattlerConfig.startingHp} HP</span>
        </span>
      </div>
      <div
        role="progressbar"
        aria-label={`${label} can puanı`}
        aria-valuemin={0}
        aria-valuemax={autoBattlerConfig.startingHp}
        aria-valuenow={hp}
        className="h-2 rounded-full bg-black/60 border border-white/10 overflow-hidden"
      >
        <div
          className={`h-full origin-left bg-gradient-to-r ${barTone} transform-gpu will-change-transform transition-transform duration-500`}
          style={{ transform: `scaleX(${pct / 100})` }}
        />
      </div>
    </div>
  );
}

export default function BattlerHud({
  state,
  timeLeft,
  onSetDifficulty,
  onEndRound,
  onReset,
}) {
  const isOver = state.phase === 'gameOver';
  const isUrgent = !isOver && timeLeft <= 10;
  const currentDifficulty =
    autoBattlerConfig.difficulties[state.difficulty] || autoBattlerConfig.difficulties.normal;

  return (
    <section
      aria-labelledby="battler-hud-heading"
      className="rounded-2xl bg-black/40 border border-white/10 p-2.5 sm:p-3.5 shadow-md"
    >
      <h3 id="battler-hud-heading" className="sr-only">
        Oyun Durumu ve Zorluk Seçimi
      </h3>

      <div className="flex flex-col lg:flex-row lg:items-center gap-2.5">
        {/* Zorluk Seçici */}
        <div
          role="group"
          aria-label="Zorluk seviyesi seçimi"
          className="inline-flex items-center gap-1 self-start lg:self-auto shrink-0"
        >
          {difficultyOptions.map((diff) => {
            const isSelected = state.difficulty === diff.id;
            const styles = difficultyToneStyles[diff.id] || difficultyToneStyles.normal;
            return (
              <button
                key={diff.id}
                type="button"
                aria-pressed={isSelected}
                aria-label={`Zorluk seviyesini ${diff.label} yap`}
                onClick={() => onSetDifficulty(diff.id)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  isSelected ? styles.active : styles.idle
                }`}
              >
                {diff.label}
              </button>
            );
          })}
        </div>

        {/* Can Barları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1 min-w-0">
          <HpBar label="Sen" hp={state.playerHp} tone="player" />
          <HpBar
            label={`Yapay Zeka (${currentDifficulty.label})`}
            hp={state.enemyHp}
            tone="enemy"
          />
        </div>

        {/* Tur, Ruh, Süre ve Butonlar */}
        <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2">
          <dl className="grid grid-cols-3 gap-1.5 flex-1 sm:flex-initial">
            <div className="px-2 py-1 rounded-lg bg-black/50 border border-purple-500/30 text-center">
              <dt className="text-[9px] uppercase tracking-wider text-purple-300 font-bold">Tur</dt>
              <dd className="text-sm font-black text-white leading-none mt-0.5">
                {state.round}
              </dd>
            </div>
            <div className="px-2 py-1 rounded-lg bg-black/50 border border-emerald-500/30 text-center">
              <dt className="text-[9px] uppercase tracking-wider text-emerald-300 font-bold">Ruh</dt>
              <dd className="text-sm font-black text-white leading-none mt-0.5">
                <span aria-hidden="true">◈ </span>
                {state.playerSoul}
              </dd>
            </div>
            <div
              className={`px-2 py-1 rounded-lg bg-black/50 border text-center transition-colors ${
                isUrgent
                  ? 'border-rose-500/60 bg-rose-950/40'
                  : 'border-amber-500/30'
              }`}
            >
              <dt
                className={`text-[9px] uppercase tracking-wider font-bold ${
                  isUrgent ? 'text-rose-300' : 'text-amber-300'
                }`}
              >
                Süre
              </dt>
              <dd
                aria-label={`Kalan tur süresi ${timeLeft} saniye`}
                className={`text-sm font-black leading-none mt-0.5 tabular-nums ${
                  isUrgent ? 'text-rose-300 animate-pulse will-change-opacity' : 'text-white'
                }`}
              >
                {isOver ? '—' : `${timeLeft}sn`}
              </dd>
            </div>
          </dl>

          <div className="flex items-center gap-1.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onReset}
              aria-label="Oyunu sıfırla ve yeniden başlat"
              className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg text-xs font-bold bg-white/5 text-slate-200 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Sıfırla
            </button>
            <button
              type="button"
              onClick={onEndRound}
              disabled={isOver}
              aria-label="Turu bitir ve koridor çarpışmalarını başlat"
              className="flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-black bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 border border-amber-300/60 transform-gpu will-change-transform transition-[transform,box-shadow] duration-200 hover:scale-105 hover:shadow-[0_0_14px_-4px_rgba(245,158,11,0.6)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              Turu Bitir ⚔
            </button>
          </div>
        </div>
      </div>

      <p aria-live="polite" className="mt-2 text-[11px] text-slate-300 border-t border-white/10 pt-1.5 truncate">
        {state.message}
      </p>
    </section>
  );
}
