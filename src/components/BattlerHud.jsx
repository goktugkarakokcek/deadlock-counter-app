import { autoBattlerConfig } from '../data';

function HpBar({ label, hp, tone }) {
  const pct = Math.max(0, Math.min(100, (hp / autoBattlerConfig.startingHp) * 100));
  const barTone =
    tone === 'player' ? 'from-amber-500 to-orange-600' : 'from-rose-600 to-red-800';
  return (
    <div className="flex-1 min-w-[10rem]">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-300">{label}</span>
        <span className="text-sm font-black text-white">
          {hp} <span className="text-slate-400 font-semibold">/ {autoBattlerConfig.startingHp} HP</span>
        </span>
      </div>
      <div
        role="progressbar"
        aria-label={`${label} can puanı`}
        aria-valuemin={0}
        aria-valuemax={autoBattlerConfig.startingHp}
        aria-valuenow={hp}
        className="h-3 rounded-full bg-black/60 border border-white/10 overflow-hidden"
      >
        <div
          className={`h-full origin-left bg-gradient-to-r ${barTone} transform-gpu will-change-transform transition-transform duration-500`}
          style={{ transform: `scaleX(${pct / 100})` }}
        />
      </div>
    </div>
  );
}

export default function BattlerHud({ state, onEndRound, onReset }) {
  const isOver = state.phase === 'gameOver';
  return (
    <section
      aria-labelledby="battler-hud-heading"
      className="rounded-2xl bg-black/40 border border-white/10 p-4 sm:p-5 shadow-md"
    >
      <h3 id="battler-hud-heading" className="sr-only">
        Oyun Durumu
      </h3>
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="flex flex-wrap gap-4 flex-1">
          <HpBar label="Sen" hp={state.playerHp} tone="player" />
          <HpBar label="Yapay Zeka" hp={state.enemyHp} tone="enemy" />
        </div>

        <dl className="flex items-center gap-3 shrink-0">
          <div className="px-3 py-1.5 rounded-xl bg-black/50 border border-purple-500/30 text-center">
            <dt className="text-[10px] uppercase tracking-wider text-purple-300 font-bold">Tur</dt>
            <dd className="text-lg font-black text-white leading-none mt-0.5">{state.round}</dd>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-black/50 border border-emerald-500/30 text-center">
            <dt className="text-[10px] uppercase tracking-wider text-emerald-300 font-bold">Ruh</dt>
            <dd className="text-lg font-black text-white leading-none mt-0.5">
              <span aria-hidden="true">◈ </span>
              {state.playerSoul}
            </dd>
          </div>
        </dl>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onReset}
            aria-label="Oyunu sıfırla ve yeniden başlat"
            className="px-3.5 py-2.5 rounded-xl text-sm font-bold bg-white/5 text-slate-200 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            Sıfırla
          </button>
          <button
            type="button"
            onClick={onEndRound}
            disabled={isOver}
            aria-label="Turu bitir ve koridor çarpışmalarını başlat"
            className="px-5 py-2.5 rounded-xl text-sm font-black bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 border border-amber-300/60 transform-gpu will-change-transform transition-[transform,box-shadow] duration-200 hover:scale-105 hover:shadow-[0_0_14px_-4px_rgba(245,158,11,0.6)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            Turu Bitir ⚔
          </button>
        </div>
      </div>

      <p aria-live="polite" className="mt-4 text-xs sm:text-sm text-slate-200 border-t border-white/10 pt-3">
        {state.message}
      </p>
    </section>
  );
}
