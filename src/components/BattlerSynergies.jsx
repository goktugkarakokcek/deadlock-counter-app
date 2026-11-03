import { evaluateBoardSynergies } from '../game/autoBattlerEngine';

export default function BattlerSynergies({ playerBoard, enemyBoard }) {
  const playerSyn = evaluateBoardSynergies(playerBoard);
  const enemySyn = evaluateBoardSynergies(enemyBoard);

  return (
    <aside
      aria-labelledby="battler-synergies-heading"
      className="w-full h-full rounded-2xl bg-zinc-950/85 border border-purple-500/25 ring-1 ring-inset ring-white/5 p-3 sm:p-3.5 shadow-lg flex flex-col justify-between gap-2.5"
    >
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-white/10">
            <div>
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-purple-300 block">
                TFT Comp Sistemi
              </span>
              <h3 id="battler-synergies-heading" className="text-xs sm:text-sm font-extrabold text-white">
                Aktif Sinerjiler
              </h3>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-purple-500/15 text-purple-200 border border-purple-500/40">
              {playerSyn.activeCount} Aktif
            </span>
          </div>

          <p className="text-[11px] text-slate-300 leading-snug mb-2">
            Aynı özellikten <strong className="text-amber-300">2 birim</strong>{' '}
            <strong className="text-emerald-300">+%10</strong>,{' '}
            <strong className="text-amber-300">3+ birim</strong>{' '}
            <strong className="text-emerald-300">+%20</strong> güç/hasar verir.
          </p>
        </div>

        <ul className="flex-1 flex flex-col justify-around gap-2 my-1">
          {playerSyn.traits.map((trait) => {
            const isActive = trait.bonusPct > 0;
            const fillPct = Math.min(100, (trait.count / 3) * 100);
            return (
              <li
                key={trait.id}
                className={`rounded-xl p-2 border transition-colors ${
                  isActive
                    ? 'bg-gradient-to-r from-zinc-900 to-black border-amber-400/50 shadow-[0_0_10px_-4px_rgba(245,158,11,0.4)]'
                    : 'bg-black/40 border-white/10'
                }`}
              >
                <div className="flex items-center justify-between gap-1.5">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span
                      aria-hidden="true"
                      className={`w-6 h-6 rounded-md flex items-center justify-center text-xs border shrink-0 ${trait.badgeClass}`}
                    >
                      {trait.icon}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xs font-extrabold text-white truncate leading-tight">
                        {trait.name}
                      </h4>
                      <div className="flex items-center gap-1 mt-0.5">
                        {trait.tiers.map((t) => {
                          const tierReached = trait.count >= t.count;
                          return (
                            <span
                              key={t.count}
                              className={`text-[9px] font-black px-1 rounded border leading-tight ${
                                tierReached
                                  ? 'bg-amber-500 text-slate-950 border-amber-300'
                                  : 'bg-white/5 text-slate-400 border-white/10'
                              }`}
                            >
                              {t.count}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`shrink-0 text-[10px] font-black px-1.5 py-0.5 rounded border ${
                      isActive
                        ? 'bg-emerald-500/20 text-emerald-200 border-emerald-400/50'
                        : 'bg-white/5 text-slate-400 border-white/10'
                    }`}
                  >
                    {isActive ? `+%${Math.round(trait.bonusPct * 100)}` : `${trait.count}/2`}
                  </span>
                </div>

                <div
                  role="progressbar"
                  aria-label={`${trait.name} sinerji ilerlemesi`}
                  aria-valuemin={0}
                  aria-valuemax={3}
                  aria-valuenow={Math.min(3, trait.count)}
                  className="h-1 rounded-full bg-black/70 border border-white/5 overflow-hidden my-1.5"
                >
                  <div
                    className={`h-full origin-left bg-gradient-to-r ${trait.barClass} transform-gpu transition-transform duration-300`}
                    style={{ transform: `scaleX(${fillPct / 100})` }}
                  />
                </div>

                <p className="text-[10px] text-slate-300 leading-tight truncate">
                  {trait.activeTier ? trait.activeTier.label : trait.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Toplam Sinerji Özeti & Rakip Sinerji Durumu */}
      <div className="pt-2 border-t border-white/10 space-y-1 text-[11px]">
        <div className="flex items-center justify-between text-slate-200">
          <span className="font-semibold">Senin Sinerji Bonusun:</span>
          <span className="font-black text-emerald-300">
            +%{Math.round(playerSyn.totalBonusPct * 100)}
          </span>
        </div>
        <div className="flex items-center justify-between text-slate-400">
          <span>Rakip (AI) Sinerji:</span>
          <span className="font-bold text-rose-300 truncate max-w-[9rem]">
            {enemySyn.activeCount > 0
              ? `${enemySyn.activeTraits.map((t) => t.shortLabel).join(', ')} (+%${Math.round(
                  enemySyn.totalBonusPct * 100
                )})`
              : 'Yok (0)'}
          </span>
        </div>
      </div>
    </aside>
  );
}
