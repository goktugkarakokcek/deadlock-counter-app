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
      className="bg-slate-950 border-b border-slate-800/80"
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
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-200 border-slate-800 hover:bg-slate-800 hover:text-amber-300 hover:border-slate-700'
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
