import { useState } from 'react';
import {
  characters,
  matchups,
  getMirrorMatchup,
  getPendingMatchup,
} from './data';
import Header from './components/Header';
import HeroMatchup from './components/HeroMatchup';
import GeneralMeta from './components/GeneralMeta';
import MapRoutes from './components/MapRoutes';
import Methodology from './components/Methodology';
import Footer from './components/Footer';

export default function App() {
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

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />

      <main className="flex-grow">
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
        <GeneralMeta />
        <MapRoutes />
        <Methodology />
      </main>

      <Footer />
    </div>
  );
}
