import { useRef } from 'react';
import { appTabs } from '../data';

export default function TabNavigation({ activeTab, onChangeTab }) {
  const tabRefs = useRef({});

  // Klavye erişilebilirliği: ok tuşları, Home ve End ile sekmeler arası gezinme
  const handleKeyDown = (event, index) => {
    let nextIndex = null;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % appTabs.length;
    if (event.key === 'ArrowLeft')
      nextIndex = (index - 1 + appTabs.length) % appTabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = appTabs.length - 1;
    if (nextIndex === null) return;

    event.preventDefault();
    const nextTab = appTabs[nextIndex];
    onChangeTab(nextTab.id);
    tabRefs.current[nextTab.id]?.focus();
  };

  return (
    <nav
      aria-label="Ana sayfa modülleri"
      className="bg-black/40 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          role="tablist"
          aria-label="Modül sekmeleri"
          className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {appTabs.map((tab, index) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[tab.id] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`tabpanel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => onChangeTab(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border bg-clip-padding transform-gpu will-change-transform transition-[transform,box-shadow,background-color,border-color] duration-200 hover:scale-105 motion-reduce:hover:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 border-amber-300/60 shadow-[0_0_12px_-4px_rgba(245,158,11,0.55)]'
                    : 'bg-white/5 text-slate-200 border-white/10 hover:bg-purple-500/15 hover:text-purple-200 hover:border-purple-400/50 hover:shadow-[0_0_12px_-4px_rgba(168,85,247,0.5)]'
                }`}
              >
                <span aria-hidden="true">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
