import { useEffect, useRef, useState } from 'react';
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
    ? 'border-amber-400 bg-amber-500/15 ring-1 ring-amber-400/40'
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
      className={`w-full h-full min-w-0 flex flex-col items-center rounded-xl border border-dashed p-1.5 transition-colors pointer-events-none ${borderTone}`}
    >
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-black/65 border border-white/10 flex flex-col items-center justify-center p-1 text-center shrink-0">
        <span
          aria-hidden="true"
          className="w-6 h-6 rotate-45 rounded border border-white/15 bg-white/[0.03] flex items-center justify-center mb-0.5"
        >
          <span className="-rotate-45 text-[10px] font-black text-slate-300">
            {isFrontline ? '🛡️' : '🎯'}
          </span>
        </span>
        <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-300 truncate max-w-full">
          {isHighlighted ? '+ Bırak' : slotTitle}
        </span>
      </div>

      <div className="w-full pt-1 px-0.5 flex items-center justify-center">
        <span
          className={`text-[9px] font-black uppercase tracking-wider px-1.5 py-0.2 rounded border truncate ${badgeTone}`}
        >
          {isFrontline ? 'Ön Saf (+4)' : 'Arka Saf (+4)'}
        </span>
      </div>
    </div>
  );
}

function ColumnClashCell({ lane, result }) {
  const style = result ? outcomeStyles[result.outcome] : null;
  const damage = result ? result.damageToEnemy || result.damageToPlayer : 0;

  return (
    <div className="rounded-lg bg-black/65 border border-emerald-500/20 px-2 py-1 flex flex-col items-center justify-center text-center">
      <div className="flex items-center justify-center gap-1.5 flex-wrap">
        <span
          className={`px-2 py-0.2 rounded-full text-[9px] font-black uppercase tracking-wider border ${laneAccent[lane.accent]}`}
        >
          {lane.label}
        </span>
        {result ? (
          <span
            className={`inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-full text-[9px] font-black border ${style.className}`}
          >
            <span aria-hidden="true">{style.icon}</span>
            {style.label}
            {damage > 0 && <span>• {damage}HP</span>}
          </span>
        ) : (
          <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-300/70">
            ✦ VS ✦
          </span>
        )}
      </div>
      {result && (
        <p className="w-full text-[9px] text-slate-300 leading-tight mt-0.5 truncate">
          {result.reason}
        </p>
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
  onBuyToSlot,
  onMoveSlot,
  onReturn,
}) {
  const [dragOverSlot, setDragOverSlot] = useState(null);
  const touchStartPos = useRef(null);
  const playerSyn = evaluateBoardSynergies(playerBoard);
  const enemySyn = evaluateBoardSynergies(enemyBoard);

  const executeSlotDrop = (payload, slotIndex) => {
    if (!payload || disabled || typeof slotIndex !== 'number') return;
    if (payload.source === 'shop' && typeof payload.shopIndex === 'number') {
      if (typeof onBuyToSlot === 'function') {
        onBuyToSlot(payload.shopIndex, slotIndex);
      }
    } else if (payload.source === 'bench' && payload.uid) {
      onPlace(slotIndex, payload.uid);
    } else if (payload.source === 'board' && typeof payload.slotIndex === 'number') {
      onMoveSlot(payload.slotIndex, slotIndex);
    }
  };

  useEffect(() => {
    const handleCustomDrop = (e) => {
      if (e.detail?.target === 'board') {
        executeSlotDrop(e.detail.payload, e.detail.slotIndex);
      }
    };
    window.addEventListener('deadlock-touch-drop', handleCustomDrop);
    return () => window.removeEventListener('deadlock-touch-drop', handleCustomDrop);
  });

  const handleSlotDragStart = (event, slotIndex) => {
    if (disabled || !playerBoard[slotIndex]) {
      event.preventDefault();
      return;
    }
    event.stopPropagation();
    const payloadObj = { source: 'board', slotIndex };
    const payload = JSON.stringify(payloadObj);
    window.__deadlockDrag = payloadObj;

    event.dataTransfer.effectAllowed = 'move';
    try {
      event.dataTransfer.setData('text/plain', payload);
      event.dataTransfer.setData('application/json', payload);
    } catch {
      // Fallback: window.__deadlockDrag devrede
    }
  };

  const handleSlotDragEnd = () => {
    window.__deadlockDrag = null;
    setDragOverSlot(null);
  };

  const handleSlotTouchStart = (event, slotIndex) => {
    if (disabled || !playerBoard[slotIndex]) return;
    const touch = event.touches[0];
    touchStartPos.current = { x: touch.clientX, y: touch.clientY };
    window.__deadlockDrag = { source: 'board', slotIndex };
  };

  const handleSlotTouchEnd = (event) => {
    if (!touchStartPos.current || !window.__deadlockDrag) return;
    const touch = event.changedTouches[0];
    const dx = Math.abs(touch.clientX - touchStartPos.current.x);
    const dy = Math.abs(touch.clientY - touchStartPos.current.y);
    const payload = window.__deadlockDrag;
    touchStartPos.current = null;
    window.__deadlockDrag = null;

    if (dx < 10 && dy < 10) return;

    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    const slotEl = target?.closest('[data-player-slot]');
    const benchEl = target?.closest('[data-bench-drop]');

    if (slotEl) {
      executeSlotDrop(payload, Number(slotEl.dataset.playerSlot));
    } else if (benchEl) {
      window.dispatchEvent(
        new CustomEvent('deadlock-touch-drop', {
          detail: { target: 'bench', payload },
        })
      );
    }
  };

  const handleSlotDragOver = (event, slotIndex) => {
    event.preventDefault();
    if (disabled) return;
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'move';
    if (dragOverSlot !== slotIndex) setDragOverSlot(slotIndex);
  };

  const handleSlotDragLeave = (event, slotIndex) => {
    event.stopPropagation();
    if (!event.currentTarget.contains(event.relatedTarget) && dragOverSlot === slotIndex) {
      setDragOverSlot(null);
    }
  };

  const handleSlotDrop = (event, slotIndex) => {
    event.preventDefault();
    event.stopPropagation();
    setDragOverSlot(null);
    if (disabled) return;

    let payload = window.__deadlockDrag || null;
    if (!payload) {
      try {
        const raw =
          event.dataTransfer.getData('application/json') ||
          event.dataTransfer.getData('text/plain');
        if (raw) payload = JSON.parse(raw);
      } catch {
        payload = null;
      }
    }
    window.__deadlockDrag = null;
    executeSlotDrop(payload, slotIndex);
  };

  const renderEnemyRow = (rowIndex, rowTitle, rowBadge) => {
    const isFront = rowIndex === 0;
    return (
      <div
        className={`rounded-xl p-1.5 sm:p-2 border ${
          isFront
            ? 'bg-rose-950/20 border-rose-500/30'
            : 'bg-black/45 border-white/10'
        }`}
      >
        <div className="flex items-center justify-between gap-2 mb-1 px-1">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-300">
            {rowTitle}
          </span>
          <span className="text-[9px] font-bold text-slate-400">{rowBadge}</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
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
                    slotTitle={lane.label}
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
        className={`rounded-xl p-1.5 sm:p-2 border ${
          isFront
            ? 'bg-emerald-950/20 border-emerald-500/35 ring-1 ring-inset ring-emerald-500/15'
            : 'bg-purple-950/20 border-purple-500/35 ring-1 ring-inset ring-purple-500/15'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1 px-1">
          <div className="flex items-center gap-1.5">
            <span
              className={`px-1.5 py-0.2 rounded text-[9px] font-black uppercase tracking-wider border ${
                isFront
                  ? 'bg-emerald-500/20 text-emerald-200 border-emerald-400/40'
                  : 'bg-purple-500/20 text-purple-200 border-purple-400/40'
              }`}
            >
              {isFront ? '🛡️ Ön Saf' : '🎯 Arka Saf'}
            </span>
            <span className="text-[11px] font-bold text-white">{rowTitle}</span>
          </div>
          <span className="text-[10px] font-semibold text-slate-300 hidden sm:inline">
            {rowSubtitle}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
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
                data-player-slot={slotIndex}
                onDragOver={(e) => handleSlotDragOver(e, slotIndex)}
                onDragLeave={(e) => handleSlotDragLeave(e, slotIndex)}
                onDrop={(e) => handleSlotDrop(e, slotIndex)}
                className={`min-w-0 flex flex-col gap-1 rounded-xl transition-transform duration-150 ${
                  isOver ? 'scale-[1.02] ring-2 ring-amber-400' : ''
                }`}
              >
                {card ? (
                  <div
                    draggable={!disabled}
                    onDragStart={(e) => handleSlotDragStart(e, slotIndex)}
                    onDragEnd={handleSlotDragEnd}
                    onTouchStart={(e) => handleSlotTouchStart(e, slotIndex)}
                    onTouchEnd={handleSlotTouchEnd}
                    className="flex-1 cursor-grab active:cursor-grabbing select-none [&_*]:pointer-events-none"
                  >
                    <BattlerCard
                      card={card}
                      size="board"
                      side="player"
                      displayPower={boostedPower}
                    />
                  </div>
                ) : (
                  <div
                    role="button"
                    tabIndex={disabled ? -1 : 0}
                    onClick={() => hasSelection && !disabled && onPlace(slotIndex)}
                    onKeyDown={(e) => {
                      if (hasSelection && !disabled && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault();
                        onPlace(slotIndex);
                      }
                    }}
                    aria-disabled={disabled || !hasSelection}
                    aria-label={`${lane.label} ${isFront ? 'Ön Saf' : 'Arka Saf'} slotu — kart sürükle veya seçili kartı yerleştir`}
                    className={`w-full h-full text-left rounded-xl select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                      hasSelection && !disabled ? 'cursor-pointer' : ''
                    }`}
                  >
                    <TacticalEmptySocket
                      isFrontline={isFront}
                      isEnemy={false}
                      isHighlighted={isOver || hasSelection}
                      slotTitle={lane.label}
                    />
                  </div>
                )}

                {card && !disabled && (
                  <div className="grid grid-cols-2 gap-1">
                    <button
                      type="button"
                      onClick={() => onPlace(slotIndex)}
                      disabled={!hasSelection}
                      aria-label={`Seçili kartı ${lane.label} slotuna yerleştir veya eşya olarak tak`}
                      className="text-[9px] font-bold py-0.5 px-1 rounded bg-purple-500/15 text-purple-200 border border-purple-500/40 hover:bg-purple-500/25 transition-colors disabled:opacity-30 disabled:cursor-not-allowed truncate focus:outline-none focus-visible:ring-1 focus-visible:ring-purple-400"
                    >
                      Tak/Değiş
                    </button>
                    <button
                      type="button"
                      onClick={() => onReturn(slotIndex)}
                      aria-label={`${card.name} kartını yedek kulübesine geri al`}
                      className="text-[9px] font-bold py-0.5 px-1 rounded bg-white/5 text-slate-200 border border-white/10 hover:bg-white/10 transition-colors truncate focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
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
      className="relative w-full h-full rounded-2xl border border-amber-500/30 ring-1 ring-inset ring-emerald-500/20 p-2.5 sm:p-3.5 shadow-lg overflow-hidden bg-[#06090e] bg-[radial-gradient(ellipse_75%_55%_at_50%_50%,rgba(16,185,129,0.14),rgba(88,28,135,0.18)_55%,rgba(5,7,11,0.96)_100%)] flex flex-col justify-between"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(52,211,153,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:28px_28px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.75)_100%)]"
      />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 mb-2 border-b border-emerald-500/15">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
          />
          <h3 id="battler-board-heading" className="text-xs sm:text-sm font-extrabold text-white">
            TFT 2x4 Taktik Masası (Ön Saf &amp; Arka Saf Izgarası)
          </h3>
        </div>
        <span className="text-[10px] font-semibold text-emerald-200/80">
          Marketten veya Yedek Kulübesinden 2x4 Slotlara Sürükle &amp; Bırak
          <span className="inline sm:hidden text-amber-300/80 ml-1">• (Yana kaydır)</span>
        </span>
      </div>

      <div className="w-full overflow-x-auto [scrollbar-width:thin] pb-1">
        <div className="min-w-[420px] sm:min-w-full relative z-10 flex-1 flex flex-col justify-between space-y-1.5">
          {renderEnemyRow(1, 'Yapay Zeka • Arka Saf', 'Menzil Hattı')}
          {renderEnemyRow(0, 'Yapay Zeka • Ön Saf', 'Öncü Hat')}

          <div
            aria-label="Koridor çarpışma sonuçları"
            className="grid grid-cols-4 gap-1.5 py-0.5"
          >
            {autoBattlerConfig.lanes.map((lane, col) => (
              <ColumnClashCell key={lane.id} lane={lane} result={lastCombat?.[col]} />
            ))}
          </div>

          {renderPlayerRow(0, 'Ön Saf (Frontline)', '+4 Siper Gücü • İlk Çarpışma')}
          {renderPlayerRow(1, 'Arka Saf (Backline)', '+4 Menzil • +%55 Destek Gücü')}
        </div>
      </div>
    </section>
  );
}