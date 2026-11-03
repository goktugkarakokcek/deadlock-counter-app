import { useState } from 'react';
import BattlerCard from './BattlerCard';
import { autoBattlerConfig } from '../data';
import {
  evaluateBoardSynergies,
  getCardPower,
  isFrontlineSlot,
} from '../game/autoBattlerEngine';

const laneAccent = {
  amber: 'text-amber-300 border-amber-500/40 bg-amber-500/10',
  purple: 'text-purple-300 border-purple-500/40 bg-purple-500/10',
  rose: 'text-rose-300 border-rose-500/40 bg-rose-500/10',
  emerald: 'text-emerald-300 border-emerald-500/40 bg-emerald-500/10',
};

const outcomeStyles = {
  player: {
    label: 'Kazandın',
    className: 'text-amber-200 bg-amber-500/15 border-amber-500/40',
    icon: '▲',
  },
  enemy: {
    label: 'Kaybettin',
    className: 'text-rose-200 bg-rose-500/15 border-rose-500/40',
    icon: '▼',
  },
  draw: {
    label: 'Berabere',
    className: 'text-slate-200 bg-white/5 border-white/15',
    icon: '=',
  },
  empty: {
    label: 'Boş',
    className: 'text-slate-400 bg-black/30 border-white/10',
    icon: '·',
  },
};

function TacticalEmptySocket({ isFrontline, isEnemy, isHighlighted, slotTitle }) {
  const borderTone = isHighlighted
    ? 'border-amber-400 bg-amber-500/15 ring-2 ring-amber-400/40'
    : isEnemy
    ? isFrontline
      ? 'border-rose-500/30 bg-rose-950/15'
      : 'border-rose-500/15 bg-black/40'
    : isFrontline
    ? 'border-emerald-500/35 bg-emerald-950/15 hover:border-emerald-400/60'
    : 'border-purple-500/35 bg-purple-950/15 hover:border-purple-400/60';

  const badgeTone = isFrontline
    ? 'text-emerald-300/90 border-emerald-500/30 bg-emerald-500/10'
    : 'text-purple-300/90 border-purple-500/30 bg-purple-500/10';

  return (
    <div
      className={`w-full h-full min-w-0 flex flex-col rounded-2xl border-2 border-dashed p-2 transition-colors ${borderTone}`}
    >
      {/* TFT tarzı sekizgen/altıgen hissi veren iç taktiksel yuva */}
      <div className="relative w-full aspect-square rounded-2xl bg-black/65 border border-white/10 ring-1 ring-inset ring-white/5 flex flex-col items-center justify-center p-2 text-center">
        <span
          aria-hidden="true"
          className="w-8 h-8 sm:w-9 sm:h-9 rotate-45 rounded-lg border border-white/15 bg-white/[0.03] flex items-center justify-center mb-1.5"
        >
          <span className="-rotate-45 text-xs font-black text-slate-300">
            {isFrontline ? '🛡️' : '🎯'}
          </span>
        </span>
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-300">
          {isHighlighted ? '+ Buraya Bırak' : slotTitle}
        </span>
      </div>

      <div className="pt-1.5 px-0.5 flex items-center justify-between gap-1">
        <span className={`text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded border truncate ${badgeTone}`}>
          {isFrontline ? 'Ön Saf (+4)' : 'Arka Saf (+4)'}
        </span>
        <span className="text-[9px] font-semibold text-slate-500 truncate">
          {isEnemy ? 'AI' : 'Slot'}
        </span>
      </div>
    </div>
  );
}

function ColumnClashCell({ lane, result }) {
  const style = result ? outcomeStyles[result.outcome] : null;
  const damage = result ? result.damageToEnemy || result.damageToPlayer : 0;

  return (
    <div className="rounded-xl bg-black/65 border border-emerald-500/20 px-2.5 py-2 flex flex-col items-center justify-center text-center min-h-[4rem]">
      <span
        className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest border mb-1 ${laneAccent[lane.accent]}`}
      >
        {lane.label}
      </span>
      {result ? (
        <>
          <span
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black border ${style.className}`}
          >
            <span aria-hidden="true">{style.icon}</span>
            {style.label}
            {damage > 0 && <span>• {damage} HP</span>}
          </span>
          <p className="text-[10px] text-slate-300 leading-tight mt-1 line-clamp-2">
            {result.reason}
          </p>
        </>
      ) : (
        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300/70">
          ✦ Çarpışma Hattı ✦
        </span>
      )}
    </div>
  );
}

export default function BattlerBoard({
  playerBoard,
  enemyBoard,
  lastCombat,
  hasSelection,
  disabled,
  onPlace,
  onMoveSlot,
  onReturn,
}) {
  const [dragOverSlot, setDragOverSlot] = useState(null);
  const playerSyn = evaluateBoardSynergies(playerBoard);
  const enemySyn = evaluateBoardSynergies(enemyBoard);

  const handleSlotDragStart = (event, slotIndex) => {
    if (disabled || !playerBoard[slotIndex]) {
      event.preventDefault();
      return;
    }
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData(
      'application/x-deadlock-card',
      JSON.stringify({ source: 'board', slotIndex })
    );
  };

  const handleSlotDragOver = (event, slotIndex) => {
    if (disabled) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    if (dragOverSlot !== slotIndex) setDragOverSlot(slotIndex);
  };

  const handleSlotDragLeave = (event, slotIndex) => {
    if (!event.currentTarget.contains(event.relatedTarget) && dragOverSlot === slotIndex) {
      setDragOverSlot(null);
    }
  };

  const handleSlotDrop = (event, slotIndex) => {
    event.preventDefault();
    setDragOverSlot(null);
    if (disabled) return;

    try {
      const raw = event.dataTransfer.getData('application/x-deadlock-card');
      if (!raw) return;
      const payload = JSON.parse(raw);
      if (payload.source === 'bench' && payload.uid) {
        onPlace(slotIndex, payload.uid);
      } else if (payload.source === 'board' && typeof payload.slotIndex === 'number') {
        onMoveSlot(payload.slotIndex, slotIndex);
      }
    } catch {
      // Geçersiz sürükleme verisini yoksay
    }
  };

  const renderEnemyRow = (rowIndex, rowTitle, rowBadge) => {
    const isFront = rowIndex === 0;
    return (
      <div
        className={`rounded-2xl p-2.5 sm:p-3 border ${
          isFront
            ? 'bg-rose-950/20 border-rose-500/30'
            : 'bg-black/45 border-white/10'
        }`}
      >
        <div className="flex items-center justify-between gap-2 mb-2 px-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-300">
            {rowTitle}
          </span>
          <span className="text-[10px] font-bold text-slate-400">{rowBadge}</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {autoBattlerConfig.lanes.map((lane, col) => {
            const slotIndex = rowIndex * autoBattlerConfig.boardCols + col;
            const card = enemyBoard[slotIndex];
            const boostedPower = card
              ? getCardPower(card, slotIndex, enemySyn.powerMultiplier)
              : null;
            return (
              <div key={`enemy-${slotIndex}`} className="min-w-0">
                {card ? (
                  <BattlerCard
                    card={card}
                    size="board"
                    side="enemy"
                    displayPower={boostedPower}
                  />
                ) : (
                  <TacticalEmptySocket
                    isFrontline={isFront}
                    isEnemy
                    isHighlighted={false}
                    slotTitle={`${lane.label}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderPlayerRow = (rowIndex, rowTitle, rowSubtitle) => {
    const isFront = isFrontlineSlot(rowIndex * autoBattlerConfig.boardCols);
    return (
      <div
        className={`rounded-2xl p-2.5 sm:p-3 border ${
          isFront
            ? 'bg-emerald-950/20 border-emerald-500/35 ring-1 ring-inset ring-emerald-500/15'
            : 'bg-purple-950/20 border-purple-500/35 ring-1 ring-inset ring-purple-500/15'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 px-1">
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider border ${
                isFront
                  ? 'bg-emerald-500/20 text-emerald-200 border-emerald-400/40'
                  : 'bg-purple-500/20 text-purple-200 border-purple-400/40'
              }`}
            >
              {isFront ? '🛡️ Ön Saf (Frontline)' : '🎯 Arka Saf (Backline)'}
            </span>
            <span className="text-xs font-bold text-white">{rowTitle}</span>
          </div>
          <span className="text-[11px] font-semibold text-slate-300">{rowSubtitle}</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {autoBattlerConfig.lanes.map((lane, col) => {
            const slotIndex = rowIndex * autoBattlerConfig.boardCols + col;
            const card = playerBoard[slotIndex];
            const isOver = dragOverSlot === slotIndex;
            const boostedPower = card
              ? getCardPower(card, slotIndex, playerSyn.powerMultiplier)
              : null;

            return (
              <div
                key={`player-${slotIndex}`}
                onDragOver={(e) => handleSlotDragOver(e, slotIndex)}
                onDragLeave={(e) => handleSlotDragLeave(e, slotIndex)}
                onDrop={(e) => handleSlotDrop(e, slotIndex)}
                className={`min-w-0 flex flex-col gap-1.5 rounded-2xl transition-transform duration-150 ${
                  isOver ? 'scale-[1.02] ring-2 ring-amber-400' : ''
                }`}
              >
                {card ? (
                  <div
                    draggable={!disabled}
                    onDragStart={(e) => handleSlotDragStart(e, slotIndex)}
                    className="flex-1 cursor-grab active:cursor-grabbing"
                  >
                    <BattlerCard
                      card={card}
                      size="board"
                      side="player"
                      displayPower={boostedPower}
                    />
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => hasSelection && !disabled && onPlace(slotIndex)}
                    disabled={disabled}
                    aria-label={`${lane.label} ${isFront ? 'Ön Saf' : 'Arka Saf'} slotu — kart sürükle veya seçili kartı yerleştir`}
                    className="w-full h-full text-left rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    <TacticalEmptySocket
                      isFrontline={isFront}
                      isEnemy={false}
                      isHighlighted={isOver || hasSelection}
                      slotTitle={lane.label}
                    />
                  </button>
                )}

                {card && !disabled && (
                  <div className="grid grid-cols-2 gap-1">
                    <button
                      type="button"
                      onClick={() => onPlace(slotIndex)}
                      disabled={!hasSelection}
                      aria-label={`Seçili kartı ${lane.label} slotuna yerleştir veya eşya olarak tak`}
                      className="text-[10px] font-bold py-1 px-1 rounded-lg bg-purple-500/15 text-purple-200 border border-purple-500/40 hover:bg-purple-500/25 transition-colors disabled:opacity-30 disabled:cursor-not-allowed truncate focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                    >
                      Değiştir/Tak
                    </button>
                    <button
                      type="button"
                      onClick={() => onReturn(slotIndex)}
                      aria-label={`${card.name} kartını yedek kulübesine geri al`}
                      className="text-[10px] font-bold py-1 px-1 rounded-lg bg-white/5 text-slate-200 border border-white/10 hover:bg-white/10 transition-colors truncate focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    >
                      Geri Al
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section
      aria-labelledby="battler-board-heading"
      className="relative rounded-3xl border border-amber-500/30 ring-1 ring-inset ring-emerald-500/20 p-3.5 sm:p-5 shadow-lg overflow-hidden bg-[#06090e] bg-[radial-gradient(ellipse_75%_55%_at_50%_50%,rgba(16,185,129,0.14),rgba(88,28,135,0.18)_55%,rgba(5,7,11,0.96)_100%)]"
    >
      {/* 1930'lar Noir & Okült Taktik Masası Katmanları */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(52,211,153,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:28px_28px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.75)_100%)]"
      />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 pb-3 mb-4 border-b border-emerald-500/15">
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
          />
          <h3 id="battler-board-heading" className="text-base sm:text-lg font-extrabold text-white">
            TFT 2x4 Taktik Masası (Ön Saf &amp; Arka Saf Izgarası)
          </h3>
        </div>
        <span className="text-[11px] font-semibold text-emerald-200/80">
          Kartları Yedek Kulübesinden 2x4 Slotlara Sürükle &amp; Bırak
        </span>
      </div>

      <div className="relative z-10 space-y-3.5">
        {/* Yapay Zeka 2x4 Alanı: Üstte Arka Saf, Merkeze Yakın Ön Saf */}
        {renderEnemyRow(1, 'Yapay Zeka • Arka Saf (Backline)', 'Menzilli Destek Hattı')}
        {renderEnemyRow(0, 'Yapay Zeka • Ön Saf (Frontline)', 'Öncü Çarpışma Hattı')}

        {/* Merkez 4 Koridor Çarpışma Sonuç Hattı */}
        <div
          aria-label="Koridor çarpışma sonuçları"
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-1"
        >
          {autoBattlerConfig.lanes.map((lane, col) => (
            <ColumnClashCell key={lane.id} lane={lane} result={lastCombat?.[col]} />
          ))}
        </div>

        {/* Oyuncu 2x4 Alanı: Merkeze Yakın Ön Saf, Altta Arka Saf */}
        {renderPlayerRow(
          0,
          'Senin Ön Safın',
          '+4 Siper Gücü • İlk Çarpışmayı Karşılar'
        )}
        {renderPlayerRow(
          1,
          'Senin Arka Safın',
          '+4 Menzil Desteği • Ön Safa +%55 Güç ve Counter Desteği Verir'
        )}
      </div>
    </section>
  );
}
