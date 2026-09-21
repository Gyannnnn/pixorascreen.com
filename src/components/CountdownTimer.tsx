import React, { useRef, useEffect, useState, useCallback } from 'react';
import type { Tool } from '../data/tools';
import type { Locale } from '../data/locales';

interface CountdownTimerProps {
  tool: Tool;
  locale: Locale;
  isCard?: boolean;
}

type Mode = 'timer' | 'stopwatch';
type AlarmSound = 'chime' | 'beep';

const PRESETS = [1, 5, 10, 15, 25, 60];

const pad = (n: number, width = 2) => String(Math.floor(n)).padStart(width, '0');

// Timer shows HH:MM:SS only once it needs to, so short durations keep the digits
// as large as possible. The stopwatch always carries hundredths.
const formatTimer = (ms: number) => {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return h > 0 ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
};

const formatStopwatch = (ms: number) => {
  const clamped = Math.max(0, ms);
  const h = Math.floor(clamped / 3600000);
  const m = Math.floor((clamped % 3600000) / 60000);
  const s = Math.floor((clamped % 60000) / 1000);
  const cs = Math.floor((clamped % 1000) / 10);
  return h > 0 ? `${pad(h)}:${pad(m)}:${pad(s)}.${pad(cs)}` : `${pad(m)}:${pad(s)}.${pad(cs)}`;
};

export default function CountdownTimer({ tool, locale, isCard = false }: CountdownTimerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [mode, setMode] = useState<Mode>('timer');
  const [isDark, setIsDark] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isIdle, setIsIdle] = useState(false);

  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);

  const [presetMs, setPresetMs] = useState(5 * 60_000);
  // Seeded from the preset rather than zero, so the first paint already shows the
  // duration instead of flashing 00:00 until the first animation frame lands.
  const [display, setDisplay] = useState(presetMs);
  const [customMin, setCustomMin] = useState('5');
  const [customSec, setCustomSec] = useState('0');

  const [laps, setLaps] = useState<number[]>([]);
  const [alarmOn, setAlarmOn] = useState(true);
  const [alarmSound, setAlarmSound] = useState<AlarmSound>('chime');

  // Timing is anchored to wall-clock timestamps rather than accumulated ticks.
  // Browsers throttle timers in background tabs, so counting intervals would drift;
  // a deadline stays correct however long the tab was hidden.
  const deadlineRef = useRef<number | null>(null);
  const remainingRef = useRef(presetMs);
  const startedAtRef = useRef<number | null>(null);
  const accumulatedRef = useRef(0);
  const alarmOnRef = useRef(alarmOn);
  const alarmSoundRef = useRef(alarmSound);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const firedRef = useRef(false);

  useEffect(() => { alarmOnRef.current = alarmOn; }, [alarmOn]);
  useEffect(() => { alarmSoundRef.current = alarmSound; }, [alarmSound]);

  const playAlarm = useCallback(() => {
    if (!alarmOnRef.current) return;
    try {
      if (!audioCtxRef.current) {
        const Ctor = window.AudioContext || (window as any).webkitAudioContext;
        if (!Ctor) return;
        audioCtxRef.current = new Ctor();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') void ctx.resume();
      const now = ctx.currentTime;
      const pattern =
        alarmSoundRef.current === 'chime'
          ? [{ f: 880, t: 0 }, { f: 1175, t: 0.18 }, { f: 1568, t: 0.36 }, { f: 1175, t: 0.62 }]
          : [{ f: 1000, t: 0 }, { f: 1000, t: 0.22 }, { f: 1000, t: 0.44 }, { f: 1000, t: 0.66 }];
      for (const { f, t } of pattern) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = alarmSoundRef.current === 'chime' ? 'triangle' : 'square';
        osc.frequency.value = f;
        const start = now + t;
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.3, start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.2);
        osc.connect(gain).connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.22);
      }
    } catch {
      /* the visual flash still signals the end if audio is unavailable */
    }
  }, []);

  // Display loop
  useEffect(() => {
    if (isCard) {
      setDisplay(presetMs);
      return;
    }
    let animId: number;
    const tick = () => {
      if (mode === 'timer') {
        const left = deadlineRef.current !== null ? deadlineRef.current - Date.now() : remainingRef.current;
        setDisplay(Math.max(0, left));
        if (left <= 0 && deadlineRef.current !== null && !firedRef.current) {
          firedRef.current = true;
          deadlineRef.current = null;
          remainingRef.current = 0;
          setRunning(false);
          setFinished(true);
          playAlarm();
        }
      } else {
        const live = accumulatedRef.current + (startedAtRef.current !== null ? Date.now() - startedAtRef.current : 0);
        setDisplay(live);
      }
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [mode, isCard, presetMs, playAlarm]);

  const startPause = useCallback(() => {
    if (mode === 'timer') {
      if (finished) return;
      if (deadlineRef.current !== null) {
        remainingRef.current = Math.max(0, deadlineRef.current - Date.now());
        deadlineRef.current = null;
        setRunning(false);
      } else {
        if (remainingRef.current <= 0) return;
        firedRef.current = false;
        deadlineRef.current = Date.now() + remainingRef.current;
        setRunning(true);
        // Creating the context inside the click keeps autoplay policy happy, so the
        // alarm can still fire later without another interaction.
        if (alarmOnRef.current && !audioCtxRef.current) {
          try {
            const Ctor = window.AudioContext || (window as any).webkitAudioContext;
            if (Ctor) audioCtxRef.current = new Ctor();
          } catch { /* ignore */ }
        }
      }
    } else {
      if (startedAtRef.current !== null) {
        accumulatedRef.current += Date.now() - startedAtRef.current;
        startedAtRef.current = null;
        setRunning(false);
      } else {
        startedAtRef.current = Date.now();
        setRunning(true);
      }
    }
  }, [mode, finished]);

  const reset = useCallback(() => {
    setFinished(false);
    setRunning(false);
    firedRef.current = false;
    if (mode === 'timer') {
      deadlineRef.current = null;
      remainingRef.current = presetMs;
      setDisplay(presetMs);
    } else {
      startedAtRef.current = null;
      accumulatedRef.current = 0;
      setLaps([]);
      setDisplay(0);
    }
  }, [mode, presetMs]);

  const lap = useCallback(() => {
    if (mode !== 'stopwatch') return;
    const live = accumulatedRef.current + (startedAtRef.current !== null ? Date.now() - startedAtRef.current : 0);
    if (live <= 0) return;
    setLaps((prev) => [live, ...prev]);
  }, [mode]);

  const applyPreset = useCallback((minutes: number) => {
    const ms = minutes * 60_000;
    setPresetMs(ms);
    setCustomMin(String(minutes));
    setCustomSec('0');
    deadlineRef.current = null;
    remainingRef.current = ms;
    firedRef.current = false;
    setRunning(false);
    setFinished(false);
    setDisplay(ms);
  }, []);

  const applyCustom = useCallback(() => {
    const m = Math.max(0, Math.min(999, Number(customMin) || 0));
    const sec = Math.max(0, Math.min(59, Number(customSec) || 0));
    const ms = (m * 60 + sec) * 1000;
    if (ms <= 0) return;
    setPresetMs(ms);
    deadlineRef.current = null;
    remainingRef.current = ms;
    firedRef.current = false;
    setRunning(false);
    setFinished(false);
    setDisplay(ms);
  }, [customMin, customSec]);

  const switchMode = useCallback((next: Mode) => {
    setMode(next);
    setRunning(false);
    setFinished(false);
    firedRef.current = false;
    deadlineRef.current = null;
    startedAtRef.current = null;
    accumulatedRef.current = 0;
    if (next === 'timer') {
      remainingRef.current = presetMs;
      setDisplay(presetMs);
    } else {
      setLaps([]);
      setDisplay(0);
    }
  }, [presetMs]);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current || isCard) return;
    if (!document.fullscreenElement) containerRef.current.requestFullscreen().catch(() => {});
    else document.exitFullscreen().catch(() => {});
  }, [isCard]);

  useEffect(() => {
    if (isCard) return;
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, [isCard]);

  useEffect(() => {
    if (isCard || !isFullscreen) { setIsIdle(false); return; }
    let timer: number;
    const resetIdle = () => {
      setIsIdle(false);
      clearTimeout(timer);
      timer = window.setTimeout(() => setIsIdle(true), 3000);
    };
    window.addEventListener('mousemove', resetIdle);
    window.addEventListener('keydown', resetIdle);
    resetIdle();
    return () => {
      window.removeEventListener('mousemove', resetIdle);
      window.removeEventListener('keydown', resetIdle);
      clearTimeout(timer);
    };
  }, [isFullscreen, isCard]);

  useEffect(() => {
    if (isCard) return;
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLSelectElement ||
        target instanceof HTMLTextAreaElement
      ) return;
      const key = event.key;
      if (key === ' ' || key === 'Spacebar') { event.preventDefault(); startPause(); }
      else if (key === 'r' || key === 'R') reset();
      else if (key === 'l' || key === 'L') lap();
      else if (key === 'f' || key === 'F') toggleFullscreen();
      else if (key === 'm' || key === 'M') switchMode(mode === 'timer' ? 'stopwatch' : 'timer');
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isCard, startPause, reset, lap, toggleFullscreen, switchMode, mode]);

  useEffect(() => () => { void audioCtxRef.current?.close().catch(() => {}); }, []);

  const bg = finished ? undefined : isDark ? '#0b0b0f' : '#f7f7f8';
  const fg = isDark ? '#ffffff' : '#111114';
  const text = mode === 'timer' ? formatTimer(display) : formatStopwatch(display);
  const chip = isDark ? 'border-white/15 bg-white/5 text-white/80' : 'border-black/10 bg-black/5 text-black/70';
  const chipOn = isDark ? 'border-white/60 bg-white text-black' : 'border-black/70 bg-black text-white';

  return (
    <div
      ref={containerRef}
      className={`countdown-container relative flex w-full flex-col overflow-hidden select-none ${
        isCard ? 'h-full pointer-events-none' : 'h-[480px] rounded-2xl shadow-2xl'
      } ${isFullscreen ? 'is-fullscreen h-screen! w-screen! fixed! inset-0 z-99999 rounded-none!' : ''} ${
        isIdle && isFullscreen ? 'cursor-none' : ''
      } ${finished ? 'countdown-finished' : ''}`}
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Large readout */}
      <div className="flex flex-1 flex-col items-center justify-center px-4">
        <p className="countdown-readout font-mono font-semibold tabular-nums leading-none tracking-tight" aria-live="off">
          {text}
        </p>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] opacity-60">
          {finished ? "Time's up" : mode === 'timer' ? 'Countdown' : 'Stopwatch'}
        </p>

        {mode === 'stopwatch' && laps.length > 0 && !isCard && (
          <div className="mt-4 max-h-28 w-full max-w-sm overflow-y-auto rounded-lg border px-1 text-sm" style={{ borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)' }}>
            <ul>
              {laps.map((value, index) => (
                <li key={laps.length - index} className="flex items-center justify-between px-3 py-1.5 font-mono text-xs opacity-80">
                  <span>Lap {laps.length - index}</span>
                  <span className="tabular-nums">{formatStopwatch(value)}</span>
                  <span className="tabular-nums opacity-60">
                    +{formatStopwatch(value - (laps[index + 1] ?? 0))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Top-right utilities */}
      {!isCard && (
        <div className={`absolute right-4 top-4 z-20 flex items-center gap-2.5 transition-opacity duration-300 ${isIdle && isFullscreen ? 'pointer-events-none opacity-0' : 'opacity-100'}`}>
          <button
            type="button"
            onClick={() => setIsDark((v) => !v)}
            className={`grid size-10 place-items-center rounded-xl border backdrop-blur-md transition-all cursor-pointer ${chip}`}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title="Toggle theme"
          >
            {isDark ? (
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" /></svg>
            ) : (
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
            )}
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            className={`grid size-10 place-items-center rounded-xl border backdrop-blur-md transition-all cursor-pointer ${chip}`}
            aria-label="Toggle Fullscreen"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? (
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14h6v6M20 10h-6V4" /></svg>
            ) : (
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" /></svg>
            )}
          </button>
        </div>
      )}

      {/* Controls */}
      {!isCard && (
        <div className={`relative z-20 border-t px-4 py-3 transition-opacity duration-300 sm:px-5 ${isIdle && isFullscreen ? 'pointer-events-none opacity-0' : 'opacity-100'}`} style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)' }}>
          <div className="flex flex-wrap items-center gap-2">
            <div className={`inline-flex rounded-lg border p-0.5 ${chip}`} role="group" aria-label="Mode">
              {(['timer', 'stopwatch'] as Mode[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => switchMode(m)}
                  aria-pressed={mode === m}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium capitalize transition-colors cursor-pointer ${mode === m ? chipOn : ''}`}
                >
                  {m}
                </button>
              ))}
            </div>

            <button type="button" onClick={startPause} className={`rounded-lg border px-4 py-1.5 text-sm font-semibold transition-colors cursor-pointer ${chipOn}`}>
              {running ? 'Pause' : 'Start'}
            </button>
            <button type="button" onClick={reset} className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer ${chip}`}>
              Reset
            </button>
            {mode === 'stopwatch' && (
              <button type="button" onClick={lap} className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer ${chip}`}>
                Lap
              </button>
            )}

            {mode === 'timer' && (
              <label className={`ml-auto flex cursor-pointer items-center gap-2 rounded-lg border px-2.5 py-1.5 text-xs ${chip}`}>
                <input type="checkbox" checked={alarmOn} onChange={(e) => setAlarmOn(e.target.checked)} className="size-3.5 cursor-pointer accent-current" />
                Alarm
                <select
                  value={alarmSound}
                  onChange={(e) => setAlarmSound(e.target.value as AlarmSound)}
                  className="cursor-pointer bg-transparent text-xs outline-none"
                  aria-label="Alarm sound"
                  style={{ color: 'inherit' }}
                >
                  <option value="chime" style={{ color: '#111' }}>Chime</option>
                  <option value="beep" style={{ color: '#111' }}>Beep</option>
                </select>
              </label>
            )}
          </div>

          {mode === 'timer' && (
            <div className="mt-2.5 flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-wide opacity-60">Presets</span>
              {PRESETS.map((minutes) => (
                <button
                  key={minutes}
                  type="button"
                  onClick={() => applyPreset(minutes)}
                  className={`rounded-full border px-2.5 py-1 text-xs font-medium transition-all cursor-pointer ${presetMs === minutes * 60_000 ? chipOn : chip}`}
                >
                  {minutes}m
                </button>
              ))}
              <span className="ml-1 flex items-center gap-1 text-xs opacity-80">
                <input
                  type="number"
                  min="0"
                  max="999"
                  value={customMin}
                  onChange={(e) => setCustomMin(e.target.value)}
                  className={`w-14 rounded-md border bg-transparent px-1.5 py-1 text-center font-mono text-xs outline-none ${chip}`}
                  aria-label="Custom minutes"
                />
                <span className="opacity-60">m</span>
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={customSec}
                  onChange={(e) => setCustomSec(e.target.value)}
                  className={`w-14 rounded-md border bg-transparent px-1.5 py-1 text-center font-mono text-xs outline-none ${chip}`}
                  aria-label="Custom seconds"
                />
                <span className="opacity-60">s</span>
                <button type="button" onClick={applyCustom} className={`ml-1 rounded-md border px-2.5 py-1 text-xs font-medium cursor-pointer ${chip}`}>
                  Set
                </button>
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
