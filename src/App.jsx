import { useState } from 'react';
import {
  characters,
  matchups,
  getMirrorMatchup,
  getPendingMatchup,
  defaultTabId,
} from './data';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import HeroMatchup from './components/HeroMatchup';
import PopularBuilds from './components/PopularBuilds';
import GeneralMeta from './components/GeneralMeta';
import MapRoutes from './components/MapRoutes';
import Methodology from './components/Methodology';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState(defaultTabId);
  const [playerHeroId, setPlayerHeroId] = useState('abrams');
  const [enemyHeroId, setEnemyHeroId] = useState('vindicta');

  const playerHero = characters.find((c) => c.id === playerHeroId) || null;
  const enemyHero = characters.find((c) => c.id === enemyHeroId) || null;
  const hasBothSelected = Boolean(playerHero && enemyHero);
  const hasAnySelection = Boolean(playerHeroId || enemyHeroId);

  const matchupKey = hasBothSelected
    ? `${playerHero.id}_vs_${enemyHero.id}`
    : null;
  const isMirror = hasBothSelected && playerHero.id === enemyHero.id;
  const currentMatchup = hasBothSelected
    ? isMirror
      ? getMirrorMatchup(playerHero)
      : matchups[matchupKey] || getPendingMatchup(playerHero, enemyHero)
    : null;

  const handleSwapHeroes = () => {
    setPlayerHeroId(enemyHeroId);
    setEnemyHeroId(playerHeroId);
  };

  const handleClearSelections = () => {
    setPlayerHeroId('');
    setEnemyHeroId('');
  };

  const handleRestoreDefaults = () => {
    setPlayerHeroId('abrams');
    setEnemyHeroId('vindicta');
  };

  // Yalnızca aktif sekmenin içeriği render edilir
  const renderActivePanel = () => {
    switch (activeTab) {
      case 'builds':
        return (
          <PopularBuilds
            playerHero={playerHero}
            onSelectPlayerHero={setPlayerHeroId}
          />
        );
      case 'meta':
        return <GeneralMeta />;
      case 'map':
        return <MapRoutes />;
      case 'methodology':
        return <Methodology />;
      case 'matchup':
      default:
        return (
          <HeroMatchup
            playerHero={playerHero}
            enemyHero={enemyHero}
            hasBothSelected={hasBothSelected}
            hasAnySelection={hasAnySelection}
            currentMatchup={currentMatchup}
            onSelectPlayerHero={setPlayerHeroId}
            onSelectEnemyHero={setEnemyHeroId}
            onSwapHeroes={handleSwapHeroes}
            onClearSelections={handleClearSelections}
            onRestoreDefaults={handleRestoreDefaults}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />
      <TabNavigation activeTab={activeTab} onChangeTab={setActiveTab} />

      <main
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="flex-grow"
      >
        {renderActivePanel()}
      </main>

      <Footer />
    </div>
  );
}
