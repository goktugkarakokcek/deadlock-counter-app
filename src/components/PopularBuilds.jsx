import CharacterDropdown, { PatchTrendBadge } from './CharacterDropdown';
import {
  itemsCatalog,
  categoryStyles,
  buildStages,
  createPlaceholderDataUri,
} from '../data';

const itemsByName = Object.values(itemsCatalog).reduce((acc, item) => {
  acc[item.name] = item;
  const baseName = item.name.split(' (')[0].trim();
  if (!acc[baseName]) acc[baseName] = item;
  return acc;
}, {});

export default function PopularBuilds({ playerHero, onSelectPlayerHero }) {
  return (
    <section
      id="builds-section"
      aria-labelledby="builds-heading"
      className="py-10 sm:py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-purple-500/15 text-purple-300 border border-purple-500/30 mb-3">
            Meta Dizilimi
          </span>
          <h2
            id="builds-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight"
          >
            Popüler Buildler
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Karakterini seç; oyun safhasına göre standart meta eşya dizilimini
            görüntüle.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-10">
          <CharacterDropdown
            id="builds-hero-select"
            label="Senin Karakterin"
            subLabel="Build görmek istediğin Hero"
            selectedHero={playerHero}
            onSelect={onSelectPlayerHero}
            accentClass="amber"
          />
        </div>

        {playerHero?.popularBuilds ? (
          <article aria-labelledby="builds-hero-heading">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
              <div>
                <h3
                  id="builds-hero-heading"
                  className="text-2xl font-extrabold text-white flex items-center gap-2.5"
                >
                  <span
                    className="w-3 h-7 rounded bg-purple-400 inline-block"
                    aria-hidden="true"
                  />
                  {playerHero.name} Popüler Build (Meta Dizilimi)
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  {playerHero.name} ({playerHero.role}) için oyun safhasına göre
                  en yüksek kazanma oranına sahip standart meta eşya dizilimi
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 self-start sm:self-auto">
                Early • Core • Late Game
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {buildStages.map((stage) => {
                const stageItems = playerHero.popularBuilds[stage.key] || [];
                return (
                  <article
                    key={stage.key}
                    className="rounded-2xl bg-zinc-950/50 border border-white/10 p-5 shadow-xl backdrop-blur-md hover:border-amber-500/40 hover:shadow-[0_0_28px_-8px_rgba(245,158,11,0.35)] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-2 pb-3.5 mb-4 border-b border-slate-800">
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${stage.accentDot}`}
                            aria-hidden="true"
                          />
                          <h4 className="text-base sm:text-lg font-extrabold text-white">
                            {stage.title}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {stage.subtitle}
                        </p>
                      </div>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border shrink-0 ${stage.badgeClass}`}
                      >
                        {stageItems.length} Eşya
                      </span>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                      {stageItems.map((itemName) => {
                        const catalogItem = itemsByName[itemName];
                        const catStyle =
                          categoryStyles[catalogItem?.category] ||
                          categoryStyles.Spirit;
                        const imgSrc =
                          catalogItem?.image ||
                          createPlaceholderDataUri(itemName, catStyle.accent);
                        const imgAlt =
                          catalogItem?.imageAlt || `${itemName} eşya ikonu`;

                        return (
                          <li
                            key={itemName}
                            className={`flex items-center gap-3.5 p-2.5 rounded-xl bg-zinc-950/50 border transition-all duration-150 ${catStyle.border} backdrop-blur-md`}
                          >
                            <div className="w-12 h-12 rounded-lg bg-slate-950 border border-slate-700/80 p-1 shrink-0 flex items-center justify-center overflow-hidden shadow">
                              <img
                                src={imgSrc}
                                alt={imgAlt}
                                onError={(e) => {
                                  e.currentTarget.onerror = null;
                                  e.currentTarget.src =
                                    createPlaceholderDataUri(
                                      itemName,
                                      catStyle.accent
                                    );
                                }}
                                className="w-full h-full object-contain rounded"
                              />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-1.5">
                                <p className="text-xs sm:text-sm font-bold text-white truncate">
                                  {itemName}
                                </p>
                                <PatchTrendBadge
                                  trend={catalogItem?.patchTrend}
                                  compact
                                />
                              </div>
                              <div className="flex items-center gap-2 mt-1 flex-wrap">
                                <span
                                  className={`text-[10px] font-bold px-2 py-0.5 rounded border ${catStyle.badge}`}
                                >
                                  {catStyle.label}
                                </span>
                                {catalogItem?.cost && (
                                  <span className="text-[11px] font-extrabold text-emerald-300">
                                    {catalogItem.cost}
                                  </span>
                                )}
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </article>
                );
              })}
            </div>
          </article>
        ) : (
          <div className="py-12 px-4 text-center max-w-xl mx-auto rounded-2xl bg-zinc-950/50 border border-white/10 backdrop-blur-md hover:border-amber-500/40 hover:shadow-[0_0_28px_-8px_rgba(245,158,11,0.35)] transition-all duration-300">
            <h3 className="text-xl font-extrabold text-white">
              {playerHero ? 'Build Verisi Bekleniyor' : 'Karakter Seçilmedi'}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-200 leading-relaxed">
              {playerHero
                ? `${playerHero.name} için popüler build verisi henüz girilmedi (TBD).`
                : 'Popüler build dizilimini görmek için yukarıdan bir karakter seçin.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
