import React, { useState, useEffect, useRef } from 'react';
import type { Tool } from '../data/tools';
import type { Locale } from '../data/locales';

interface Props {
  tool: Tool;
  locale: Locale;
  isCard?: boolean;
}

const THEMES = [
  { id: 'retro', name: 'Warm Retro', bg: '#14110F', card: '#2A2420', text: '#F7F2EA', notch: '#1A1715', accent: '#C89A63', divider: '#1A1715', shadow: '0 8px 30px rgba(0,0,0,0.45)', labelColor: '#F7F2EA' },
  { id: 'oled', name: 'Pure OLED', bg: '#000000', card: '#121212', text: '#ffffff', notch: '#000000', accent: '#3b3b3b', divider: '#000000', labelColor: '#ffffff' },
  { id: 'minimalist', name: 'Soft White', bg: '#ffffff', card: '#282828', text: '#cccccc', notch: '#181818', accent: '#0ea5e9', divider: '#121212', labelColor: '#282828' },
  { id: 'cyberpunk', name: 'Cyber Grid', bg: 'radial-gradient(circle at center, #020617 0%, #090d1f 100%)', card: '#0f172a', text: '#22d3ee', notch: '#020617', accent: '#ec4899', isGlass: true, divider: '#020617', labelColor: '#22d3ee' },
  { id: 'rose', name: 'Rose Gold', bg: 'linear-gradient(135deg, #fbcfe8 0%, #f472b6 100%)', card: '#fdf4f5', text: '#9d174d', notch: '#fbcfe8', accent: '#fb7185', isGlass: true, divider: '#fbcfe8', labelColor: '#9d174d' },
  { id: 'space', name: 'Space Dusk', bg: 'linear-gradient(180deg, #09090b 0%, #13112c 50%, #070612 100%)', card: '#15102a', text: '#fcd34d', notch: '#09090b', accent: '#a78bfa', isGlass: true, divider: '#09090b', labelColor: '#fcd34d' }
];

// Synth click sound
const playFlipSound = (volume: number) => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const bufferSize = ctx.sampleRate * 0.04;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const playClick = (delay: number, pitch: number) => {
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(pitch, ctx.currentTime + delay);
      filter.Q.setValueAtTime(3.0, ctx.currentTime + delay);
      
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(volume * 0.06, ctx.currentTime + delay + 0.001);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + 0.015);

      source.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      source.start(ctx.currentTime + delay);
      source.stop(ctx.currentTime + delay + 0.025);
    };

    playClick(0, 1000 + Math.random() * 200);
    playClick(0.012, 900 + Math.random() * 200);

    setTimeout(() => ctx.close().catch(() => {}), 150);
  } catch (e) {}
};

// Synth alarm bell
const playAlarmSound = (volume: number) => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();

    const playTone = (freq: number, delay: number, dur: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
      
      gain.gain.setValueAtTime(0, ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(volume * 0.15, ctx.currentTime + delay + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + dur);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + dur + 0.1);
    };

    // Beautiful chord (E5, G#5, B5)
    playTone(659.25, 0, 1.6);
    playTone(830.61, 0.1, 1.8);
    playTone(987.77, 0.2, 2.2);

    setTimeout(() => ctx.close().catch(() => {}), 2500);
  } catch (e) {}
};

// Flip Digit Component
interface FlipDigitProps {
  value: string;
  theme: typeof THEMES[0];
  isGlass?: boolean;
}

function FlipDigit({ value, theme, isGlass }: FlipDigitProps) {
  const [curr, setCurr] = useState(value);
  const [next, setNext] = useState(value);
  const [prev, setPrev] = useState(value);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (value !== next) {
      setPrev(curr);
      setNext(value);
      setFlipping(true);
      const timer = setTimeout(() => {
        setCurr(value);
        setFlipping(false);
      }, 750);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const parentStyle = {
    borderColor: isGlass ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
    boxShadow: theme.shadow || undefined,
    borderRadius: 'var(--card-br, 12px)',
  };

  const childCardStyle = {
    backgroundColor: theme.card,
    color: theme.text,
    fontFamily: 'var(--font-mono)'
  };

  const topHalfStyle = {
    ...childCardStyle,
    borderTopLeftRadius: 'var(--card-br, 12px)',
    borderTopRightRadius: 'var(--card-br, 12px)',
  };

  const bottomHalfStyle = {
    ...childCardStyle,
    borderBottomLeftRadius: 'var(--card-br, 12px)',
    borderBottomRightRadius: 'var(--card-br, 12px)',
  };

  const lineStyle = { backgroundColor: theme.notch };

  // To make glassmorphism works nicely
  const glassClasses = isGlass 
    ? 'backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] border' 
    : 'shadow-md';

  return (
    <div 
      className={`flip-card-unit relative select-none clock-perspective ${glassClasses}`}
      style={parentStyle}
    >
      {/* 1. Static Top (New) */}
      <div 
        key="static-top"
        className="absolute inset-x-0 top-0 h-1/2 overflow-hidden flex items-end justify-center"
        style={topHalfStyle}
      >
        <span className="inline-block font-bold leading-none select-none translate-y-1/2">
          {next}
        </span>
      </div>

      {/* 2. Static Bottom (Old) */}
      <div 
        key="static-bottom"
        className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden flex items-start justify-center"
        style={bottomHalfStyle}
      >
        <span className="inline-block font-bold leading-none select-none -translate-y-1/2">
          {curr}
        </span>
      </div>

      {/* 3. Flipping Top (Old, rotates 0 to -180) */}
      <div
        key={`flip-top-${next}`}
        className={`absolute inset-x-0 top-0 h-1/2 overflow-hidden flex items-end justify-center origin-bottom backface-hidden z-10 ${
          flipping ? 'animate-flip-top' : ''
        }`}
        style={topHalfStyle}
      >
        <span className="inline-block font-bold leading-none select-none translate-y-1/2">
          {flipping ? prev : curr}
        </span>
      </div>

      {/* 4. Flipping Bottom (New, rotates 180 to 0) */}
      <div
        key={`flip-bottom-${next}`}
        className={`absolute inset-x-0 bottom-0 h-1/2 overflow-hidden flex items-start justify-center origin-top backface-hidden z-15 ${
          flipping ? 'animate-flip-bottom' : 'rotate-x-180'
        }`}
        style={bottomHalfStyle}
      >
        <span className="inline-block font-bold leading-none select-none -translate-y-1/2">
          {next}
        </span>
      </div>

      {/* Central horizontal line divider */}
      <div 
        className="absolute top-1/2 inset-x-0 h-px z-20 pointer-events-none" 
        style={{ backgroundColor: theme.divider || `${theme.text}1c` }}
      />
      {/* Side notches */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 rounded-r-sm z-25 pointer-events-none" style={{ ...lineStyle, width: 'var(--card-notch-w, 4px)', height: 'var(--card-notch-h, 8px)' }} />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 rounded-l-sm z-25 pointer-events-none" style={{ ...lineStyle, width: 'var(--card-notch-w, 4px)', height: 'var(--card-notch-h, 8px)' }} />
    </div>
  );
}

export default function ClockScreen({ tool, locale, isCard = false }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Persistence Key
  const storageKey = 'freescreen-flipclock-settings';

  // Config States
  const [is24Hour, setIs24Hour] = useState(true);
  const [showSeconds, setShowSeconds] = useState(!isCard);
  const [soundMode, setSoundMode] = useState<'mute' | 'flip'>('flip');
  const [themeId, setThemeId] = useState('minimalist');
  const [customLabel, setCustomLabel] = useState('');
  
  // Timer Mode State
  const [isTimerMode, setIsTimerMode] = useState(false);
  const [timerPresetMin, setTimerPresetMin] = useState(25); // Pomodoro Default
  const [timerSecondsLeft, setTimerSecondsLeft] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);

  // Layout States
  const [showSettings, setShowSettings] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [brightness, setBrightness] = useState(100);

  // Time representation - start with a beautiful mock time '10:08' for isCard mode to avoid SSR hydration match issues
  const [timeDigits, setTimeDigits] = useState(() => {
    if (isCard) {
      return { h1: '1', h2: '0', m1: '0', m2: '8', s1: '0', s2: '0', ampm: '' };
    }
    return { h1: '0', h2: '0', m1: '0', m2: '0', s1: '0', s2: '0', ampm: '' };
  });

  // Load config on mount
  useEffect(() => {
    if (isCard) return;
    try {
      const stored = lStorage.getItem(storageKey);
      if (stored) {
        const config = JSON.parse(stored);
        if (config.is24Hour !== undefined) setIs24Hour(config.is24Hour);
        if (config.showSeconds !== undefined) setShowSeconds(config.showSeconds);
        if (config.soundMode !== undefined) setSoundMode(config.soundMode);
        if (config.themeId !== undefined) setThemeId(config.themeId);
        if (config.customLabel !== undefined) setCustomLabel(config.customLabel);
        if (config.isTimerMode !== undefined) setIsTimerMode(config.isTimerMode);
        if (config.timerPresetMin !== undefined) {
          setTimerPresetMin(config.timerPresetMin);
          setTimerSecondsLeft(config.timerPresetMin * 60);
        }
      }
    } catch (e) {}

    // Fullscreens event listener
    const onFsChange = () => {
      const isCurrentlyFs = !!document.fullscreenElement;
      setIsFullscreen(isCurrentlyFs);
      if (isCurrentlyFs) {
        document.documentElement.classList.add('is-clock-fullscreen');
      } else {
        document.documentElement.classList.remove('is-clock-fullscreen');
      }
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, [isCard]);

  // Save config on changes
  useEffect(() => {
    if (isCard) return;
    try {
      const config = { is24Hour, showSeconds, soundMode, themeId, customLabel, isTimerMode, timerPresetMin };
      lStorage.setItem(storageKey, JSON.stringify(config));
    } catch(e) {}
  }, [is24Hour, showSeconds, soundMode, themeId, customLabel, isTimerMode, timerPresetMin, isCard]);

  // Safe window local storage helper
  const lStorage = {
    getItem: (key: string) => typeof window !== 'undefined' ? window.localStorage.getItem(key) : null,
    setItem: (key: string, val: string) => { if (typeof window !== 'undefined') window.localStorage.setItem(key, val); }
  };

  // Idle timer in fullscreen
  useEffect(() => {
    if (isCard || !isFullscreen) {
      setIsIdle(false);
      return;
    }
    let timeoutId: number;
    const resetIdle = () => {
      setIsIdle(false);
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => setIsIdle(true), 3000);
    };

    window.addEventListener('mousemove', resetIdle);
    window.addEventListener('keydown', resetIdle);
    window.addEventListener('click', resetIdle);
    resetIdle();

    return () => {
      window.removeEventListener('mousemove', resetIdle);
      window.removeEventListener('keydown', resetIdle);
      window.removeEventListener('click', resetIdle);
      clearTimeout(timeoutId);
    };
  }, [isFullscreen, isCard]);

  // Sync / Run Clock Time and Timer ticks
  useEffect(() => {
    if (isCard) return;
    let clockInterval: number;

    const updateTime = () => {
      const now = new Date();

      if (isTimerMode) {
        // Render Countdown Minutes & Seconds & Hours (if preset > 60m, let's keep it simple as MM:SS)
        const total = timerSecondsLeft;
        const minsLeft = Math.floor(total / 60);
        const secsLeft = total % 60;
        
        const mStr = String(minsLeft).padStart(2, '0');
        const sStr = String(secsLeft).padStart(2, '0');
        
        setTimeDigits({
          h1: mStr[0],
          h2: mStr[1],
          m1: sStr[0],
          m2: sStr[1],
          s1: '0',
          s2: '0', 
          ampm: 'TMR' // Label representation
        });
      } else {
        // Normal Clock Mode
        let hours = now.getHours();
        const mins = now.getMinutes();
        const secs = now.getSeconds();
        let ampm = '';

        if (!is24Hour) {
          ampm = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12;
          hours = hours ? hours : 12;
        }

        const hStr = String(hours).padStart(2, '0');
        const mStr = String(mins).padStart(2, '0');
        const sStr = String(secs).padStart(2, '0');

        setTimeDigits({
          h1: hStr[0],
          h2: hStr[1],
          m1: mStr[0],
          m2: mStr[1],
          s1: sStr[0],
          s2: sStr[1],
          ampm
        });
      }
    };

    updateTime();
    // High-resolution interval check (every 100ms) to update in sync with real clocks
    clockInterval = window.setInterval(updateTime, 100);

    return () => clearInterval(clockInterval);
  }, [is24Hour, isTimerMode, timerSecondsLeft, isCard]);

  // Simulated clock for card / preview mode (changes every 2 seconds to show flip animation)
  useEffect(() => {
    if (!isCard) return;

    let simMinutes = 8;
    let simHours = 10;

    const interval = setInterval(() => {
      simMinutes += 1;
      if (simMinutes >= 60) {
        simMinutes = 0;
        simHours = (simHours + 1) % 24;
      }

      const hStr = String(simHours).padStart(2, '0');
      const mStr = String(simMinutes).padStart(2, '0');

      setTimeDigits({
        h1: hStr[0],
        h2: hStr[1],
        m1: mStr[0],
        m2: mStr[1],
        s1: '0',
        s2: '0',
        ampm: ''
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isCard]);

  // Countdown timer decrement ticks
  useEffect(() => {
    if (isCard || !isTimerMode || !timerRunning) return;

    const timerInterval = window.setInterval(() => {
      setTimerSecondsLeft((prev) => {
        if (prev <= 1) {
          // Finished! Play alarm chord
          setTimerRunning(false);
          playAlarmSound(0.5);
          return 0;
        }
        
        // Tick flip sound
        if (soundMode === 'flip') {
          playFlipSound(0.2);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [isTimerMode, timerRunning, soundMode, isCard]);

  // Play flip sound on digits updates (only in clock mode, every second)
  const prevSecRef = useRef('');
  const prevMinRef = useRef('');
  useEffect(() => {
    if (isCard || soundMode !== 'flip') return;

    if (isTimerMode) {
      // In Timer mode, tick triggers in seconds decrement useEffect above
      return;
    }

    if (showSeconds) {
      if (timeDigits.s2 !== prevSecRef.current) {
        playFlipSound(0.2);
        prevSecRef.current = timeDigits.s2;
      }
    } else {
      if (timeDigits.m2 !== prevMinRef.current) {
        // Silence except major flip every minute
        playFlipSound(0.5);
        prevMinRef.current = timeDigits.m2;
      }
    }
  }, [timeDigits, showSeconds, soundMode, isTimerMode, isCard]);

  // Keyboard Shortcuts handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      // Ignore shortcuts if in settings input
      if (document.activeElement instanceof HTMLInputElement) return;

      if (key === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (key === 'space') {
        e.preventDefault();
        if (isTimerMode) {
          setTimerRunning((prev) => !prev);
        } else {
          setShowSettings((prev) => !prev);
        }
      } else if (key === 's') {
        e.preventDefault();
        setSoundMode((prev) => prev === 'mute' ? 'flip' : 'mute');
      } else if (key === 't') {
        e.preventDefault();
        setIsTimerMode((prev) => {
          const next = !prev;
          if (next) {
            setTimerSecondsLeft(timerPresetMin * 60);
            setTimerRunning(false);
          }
          return next;
        });
      } else if (key === 'r') {
        e.preventDefault();
        resetAllToDefaults();
      } else if (key === 'escape' && isFullscreen) {
        e.preventDefault();
        exitFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, isTimerMode, timerPresetMin]);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      exitFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  };

  const resetAllToDefaults = () => {
    setIs24Hour(true);
    setShowSeconds(true);
    setSoundMode('flip');
    setThemeId('minimalist');
    setCustomLabel('');
    setIsTimerMode(false);
    setTimerPresetMin(25);
    setTimerSecondsLeft(25 * 60);
    setTimerRunning(false);
    setBrightness(100);
  };

  const currentTheme = isCard 
    ? (THEMES.find((t) => t.id === 'minimalist') || THEMES[0])
    : (THEMES.find((t) => t.id === themeId) || THEMES[0]);
  const activeTimerMinutes = Math.floor(timerSecondsLeft / 60);
  const activeTimerSeconds = timerSecondsLeft % 60;

  return (
    <div
      ref={containerRef}
      className={`clock-screen-container relative w-full overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
        isCard ? 'w-full h-full pointer-events-none is-card-mode' : 'h-[480px] rounded-2xl'
      } ${
        isFullscreen ? 'is-fullscreen h-screen! w-screen! fixed! inset-0 rounded-none!' : ''
      } ${isIdle && isFullscreen ? 'cursor-none' : ''}`}
      style={{ 
        background: currentTheme.bg,
        color: currentTheme.text,
        zIndex: isFullscreen ? 99999 : undefined
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        /* 3D Perspective and backface visibility support */
        .clock-perspective {
          perspective: 300px;
          -webkit-perspective: 300px;
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .origin-bottom {
          transform-origin: bottom center;
        }
        .origin-top {
          transform-origin: top center;
        }
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
        .animate-flip-top {
          animation: flip-top 0.75s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
          transform-style: preserve-3d;
          will-change: transform;
        }
        .animate-flip-bottom {
          animation: flip-bottom 0.75s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
          transform-style: preserve-3d;
          will-change: transform;
        }
        @keyframes flip-top {
          0% { transform: rotateX(0deg); }
          100% { transform: rotateX(-180deg); }
        }
        @keyframes flip-bottom {
          0% { transform: rotateX(180deg); }
          100% { transform: rotateX(0deg); }
        }

        /* Default sizes for Clock Screen */
        .clock-screen-container {
          transition: background-color 0.5s ease-in-out, filter 0.2s;
          --card-w: 36px;
          --card-h: 54px;
          --card-fs: 38px;
          --card-br: 6px;
          --card-notch-w: 3px;
          --card-notch-h: 6px;
        }
        @media (min-width: 380px) {
          .clock-screen-container {
            --card-w: 46px;
            --card-h: 70px;
            --card-fs: 48px;
            --card-br: 8px;
            --card-notch-w: 4px;
            --card-notch-h: 8px;
          }
        }
        @media (min-width: 480px) {
          .clock-screen-container {
            --card-w: 58px;
            --card-h: 88px;
            --card-fs: 64px;
            --card-br: 10px;
            --card-notch-w: 4px;
            --card-notch-h: 8px;
          }
        }
        @media (min-width: 640px) {
          .clock-screen-container {
            --card-w: 66px;
            --card-h: 98px;
            --card-fs: 70px;
            --card-br: 11px;
            --card-notch-w: 4px;
            --card-notch-h: 8px;
          }
        }
        @media (min-width: 768px) {
          .clock-screen-container {
            --card-w: 72px;
            --card-h: 108px;
            --card-fs: 78px;
            --card-br: 12px;
            --card-notch-w: 4px;
            --card-notch-h: 8px;
          }
        }
        @media (min-width: 1024px) {
          .clock-screen-container {
            --card-w: 78px;
            --card-h: 114px;
            --card-fs: 82px;
            --card-br: 12px;
            --card-notch-w: 4px;
            --card-notch-h: 8px;
          }
        }

        /* Large Screen Fullscreen Mode fluid sizing */
        .clock-screen-container.is-fullscreen {
          --card-w: 10vw;
          --card-h: 15vw;
          --card-fs: 11vw;
          --card-br: 1.5vw;
          --card-notch-w: 0.5vw;
          --card-notch-h: 1vw;
        }
        @media (min-width: 1280px) {
          .clock-screen-container.is-fullscreen {
            --card-w: 8vw;
            --card-h: 12vw;
            --card-fs: 9vw;
            --card-br: 1.2vw;
            --card-notch-w: 0.4vw;
            --card-notch-h: 0.8vw;
          }
        }

        /* When rendering in card preview mode, cap sizes to fit perfectly as a thumbnail */
        .clock-screen-container.is-card-mode {
          --card-w: 32px;
          --card-h: 48px;
          --card-fs: 34px;
          --card-br: 5px;
          --card-notch-w: 2px;
          --card-notch-h: 5px;
        }

        /* Apply sizes to card unit */
        .flip-card-unit {
          width: var(--card-w);
          height: var(--card-h);
        }
        .flip-card-unit span {
          font-size: var(--card-fs);
        }
      ` }} />

      {/* Global Dimmer for Brightness Slider */}
      <div 
        className="absolute inset-0 pointer-events-none transition-colors duration-200"
        style={{
          backgroundColor: brightness < 100 
            ? `rgba(0, 0, 0, ${(100 - brightness) / 100})` 
            : 'transparent',
          zIndex: 18
        }}
      />

      {/* Floating control buttons */}
      {!isCard && (
        <div 
          className={`absolute top-4 right-4 flex items-center gap-2.5 z-30 transition-opacity duration-300 ${
            isIdle && isFullscreen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {isTimerMode && (
            <button
              onClick={() => setTimerRunning(!timerRunning)}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 text-white cursor-pointer backdrop-blur-md transition-colors"
              title={timerRunning ? "Pause Timer" : "Start Timer"}
              aria-label="Play or Pause countdown timer"
            >
              {timerRunning ? (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              ) : (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              )}
            </button>
          )}
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`flex items-center justify-center w-10 h-10 rounded-xl bg-black/40 hover:bg-black/60 border cursor-pointer transition-all duration-300 backdrop-blur-md ${
              showSettings ? 'rotate-90 text-white' : 'border-white/10 text-white'
            }`}
            style={showSettings ? { borderColor: currentTheme.accent, color: currentTheme.accent } : {}}
            aria-label="Toggle clock controls panel"
            title="Clock Settings"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
          </button>
          <button
            onClick={toggleFullscreen}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 text-white cursor-pointer backdrop-blur-md hover:border-white/20 transition-colors"
            aria-label="Toggle Fullscreen"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M10 14l-7 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 00 2-2v-3M3 16v3a2 2 0 00 2 2h3" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* CLOCK / TIMER GRAPHIC VIEW */}
      <div className="flex flex-col items-center justify-center gap-6 md:gap-8 z-10 scale-95 sm:scale-100">
        
        {/* Flip Cards Container */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 relative">
          
          {isTimerMode ? (
            // COUNTDOWN TIMER DISPLAY (MM : SS)
            <>
              {/* Minutes digits */}
              <div className="flex items-center gap-1">
                <FlipDigit value={timeDigits.h1} theme={currentTheme} isGlass={currentTheme.isGlass} />
                <FlipDigit value={timeDigits.h2} theme={currentTheme} isGlass={currentTheme.isGlass} />
              </div>

              {/* Colon */}
              <div className="w-[12px] md:w-[18px] lg:w-[24px] flex flex-col justify-center items-center gap-3.5 md:gap-5 select-none my-auto">
                <div className="size-2 sm:size-2.5 md:size-3.5 lg:size-4 rounded-full bg-current transition-opacity duration-200" style={{ opacity: timerRunning && (new Date().getMilliseconds() < 500) ? 0.35 : 0.95 }} />
                <div className="size-2 sm:size-2.5 md:size-3.5 lg:size-4 rounded-full bg-current transition-opacity duration-200" style={{ opacity: timerRunning && (new Date().getMilliseconds() < 500) ? 0.35 : 0.95 }} />
              </div>

              {/* Seconds digits */}
              <div className="flex items-center gap-1">
                <FlipDigit value={timeDigits.m1} theme={currentTheme} isGlass={currentTheme.isGlass} />
                <FlipDigit value={timeDigits.m2} theme={currentTheme} isGlass={currentTheme.isGlass} />
              </div>
            </>
          ) : (
            // NORMAL CLOCK DISPLAY (HH : MM : SS)
            <>
              {/* Hours digits */}
              <div className="flex items-center gap-1">
                <FlipDigit value={timeDigits.h1} theme={currentTheme} isGlass={currentTheme.isGlass} />
                <FlipDigit value={timeDigits.h2} theme={currentTheme} isGlass={currentTheme.isGlass} />
              </div>

              {/* Blink Colon 1 */}
              <div className="w-[12px] md:w-[18px] lg:w-[24px] flex flex-col justify-center items-center gap-3.5 md:gap-5 select-none my-auto">
                <div className="size-2 sm:size-2.5 md:size-3.5 lg:size-4 rounded-full bg-current transition-opacity duration-200" style={{ opacity: (new Date().getMilliseconds() < 500) ? 0.35 : 0.95 }} />
                <div className="size-2 sm:size-2.5 md:size-3.5 lg:size-4 rounded-full bg-current transition-opacity duration-200" style={{ opacity: (new Date().getMilliseconds() < 500) ? 0.35 : 0.95 }} />
              </div>

              {/* Minutes digits */}
              <div className="flex items-center gap-1">
                <FlipDigit value={timeDigits.m1} theme={currentTheme} isGlass={currentTheme.isGlass} />
                <FlipDigit value={timeDigits.m2} theme={currentTheme} isGlass={currentTheme.isGlass} />
              </div>

              {/* Seconds block (Conditionally rendered) */}
              {showSeconds && (
                <>
                  {/* Blink Colon 2 */}
                  <div className="w-[12px] md:w-[18px] lg:w-[24px] flex flex-col justify-center items-center gap-3.5 md:gap-5 select-none my-auto">
                    <div className="size-2 sm:size-2.5 md:size-3.5 lg:size-4 rounded-full bg-current transition-opacity duration-200" style={{ opacity: (new Date().getMilliseconds() < 500) ? 0.35 : 0.95 }} />
                    <div className="size-2 sm:size-2.5 md:size-3.5 lg:size-4 rounded-full bg-current transition-opacity duration-200" style={{ opacity: (new Date().getMilliseconds() < 500) ? 0.35 : 0.95 }} />
                  </div>

                  {/* Seconds digits */}
                  <div className="flex items-center gap-1">
                    <FlipDigit value={timeDigits.s1} theme={currentTheme} isGlass={currentTheme.isGlass} />
                    <FlipDigit value={timeDigits.s2} theme={currentTheme} isGlass={currentTheme.isGlass} />
                  </div>
                </>
              )}

              {/* AM/PM indicator labels (For 12 Hour Mode) */}
              {!is24Hour && (
                <div className="flex flex-col justify-end gap-1 ml-2.5 self-center pb-1 h-[72px] sm:h-[95px] md:h-[120px] select-none text-[10px] sm:text-xs">
                  <span className={`font-mono font-bold tracking-wider transition-colors duration-300 ${timeDigits.ampm === 'AM' ? 'opacity-100 font-extrabold' : 'opacity-30'}`} style={{ color: timeDigits.ampm === 'AM' ? currentTheme.accent : undefined }}>AM</span>
                  <span className={`font-mono font-bold tracking-wider transition-colors duration-300 ${timeDigits.ampm === 'PM' ? 'opacity-100 font-extrabold' : 'opacity-30'}`} style={{ color: timeDigits.ampm === 'PM' ? currentTheme.accent : undefined }}>PM</span>
                </div>
              )}
            </>
          )}

        </div>

        {/* Elegant User custom Label or State Display */}
        {customLabel.trim() && (
          <div 
            className="text-xs sm:text-sm tracking-[0.2em] uppercase font-light text-center max-w-[280px] sm:max-w-[420px] truncate select-none"
            style={{ 
              color: currentTheme.labelColor || currentTheme.text,
              opacity: 0.75,
              textShadow: currentTheme.id === 'minimalist' ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.15)'
            }}
          >
            {customLabel}
          </div>
        )}

        {/* Countdown mode notifications and labels */}
        {isTimerMode && !timerRunning && timerSecondsLeft === 0 && (
          <div className="text-xs sm:text-sm text-center px-4 py-1.5 rounded-lg font-mono animate-bounce" style={{ backgroundColor: `${currentTheme.accent}25`, color: currentTheme.accent }}>
            ⏱️ Timer Finished!
          </div>
        )}
      </div>

      {/* SETTINGS DRAWER */}
      {isCard ? null :
        <div 
          className={`absolute bottom-0 inset-x-0 bg-neutral-950/90 [backdrop-filter:blur(24px)] border-t border-white/10 z-20 transition-transform duration-300 ease-out overflow-y-auto px-5 py-4 max-h-[85%] sm:max-h-[62%] flex flex-col gap-4 custom-scrollbar text-white ${
            showSettings ? 'translate-y-0' : 'translate-y-full'
          } ${isIdle && isFullscreen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
        {/* Drawers Header */}
        <div className="flex justify-between items-center border-b border-white/10 pb-3">
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase flex items-center gap-1.5 font-mono text-white">
              <span className="inline-block size-2 rounded-full bg-current animate-pulse" style={{ color: currentTheme.accent }} />
              Flip Clock Customizer
            </h3>
            <p className="text-[10px] text-neutral-400 mt-0.5">Adjust clock display, timer preferences, ticking, and aesthetics</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={resetAllToDefaults}
              className="text-[11px] font-medium text-white hover:text-neutral-200 border border-white/20 hover:bg-white/10 px-2.5 py-1 rounded-lg cursor-pointer transition-colors"
            >
              Reset Defaults
            </button>
            <button
              onClick={() => setShowSettings(false)}
              className="text-xs text-neutral-400 hover:text-white px-2 py-1 font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Setting Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            
            {/* Mode Swapper: Clock vs. Countdown Timer */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-neutral-300">⏲️ Operation Mode</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsTimerMode(false)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                    !isTimerMode
                      ? 'bg-white/10 border-white/30 text-white'
                      : 'bg-neutral-900 border-white/5 text-neutral-400 hover:text-white hover:border-white/15'
                  }`}
                >
                  Standard Clock
                </button>
                <button
                  onClick={() => {
                    setIsTimerMode(true);
                    setTimerSecondsLeft(timerPresetMin * 60);
                    setTimerRunning(false);
                  }}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                    isTimerMode
                      ? 'bg-white/10 border-white/30 text-white'
                      : 'bg-neutral-900 border-white/5 text-neutral-400 hover:text-white hover:border-white/15'
                  }`}
                >
                  Focus Countdown
                </button>
              </div>
            </div>

            {/* Display preferences (only relevant in clock mode) */}
            {!isTimerMode ? (
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-neutral-300">📺 Display Options</span>
                <div className="flex flex-wrap gap-3">
                  <label className="flex items-center gap-2 text-xs text-neutral-300 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      checked={is24Hour}
                      onChange={(e) => setIs24Hour(e.target.checked)}
                      className="accent-white size-3.5 cursor-pointer"
                    />
                    24-Hour Format
                  </label>
                  <label className="flex items-center gap-2 text-xs text-neutral-300 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      checked={showSeconds}
                      onChange={(e) => setShowSeconds(e.target.checked)}
                      className="accent-white size-3.5 cursor-pointer"
                    />
                    Show Seconds
                  </label>
                </div>
              </div>
            ) : (
              // Countdown preferences
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-semibold text-neutral-300">
                  <span>⏱️ Timer Preset (Minutes)</span>
                  <span className="font-mono text-green-400">{timerPresetMin}m</span>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="range"
                    min="1"
                    max="180"
                    value={timerPresetMin}
                    onChange={(e) => {
                      const min = Number(e.target.value);
                      setTimerPresetMin(min);
                      setTimerSecondsLeft(min * 60);
                      setTimerRunning(false);
                    }}
                    className="flex-1 h-1 bg-neutral-800 rounded appearance-none cursor-pointer accent-white"
                  />
                  <button
                    onClick={() => {
                      setTimerSecondsLeft(timerPresetMin * 60);
                      setTimerRunning(false);
                    }}
                    className="text-[10px] bg-red-950/20 text-red-400 border border-red-500/25 px-2 py-0.5 rounded cursor-pointer"
                  >
                    Reset Timer
                  </button>
                </div>
              </div>
            )}

            {/* Custom Label Reminder */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="clockLabelText" className="text-xs font-semibold text-neutral-300">
                ✍️ Focus Reminder / Custom Label
              </label>
              <input
                id="clockLabelText"
                type="text"
                maxLength={40}
                placeholder="Deep Work, Study, Rest, Breathe..."
                value={customLabel}
                onChange={(e) => setCustomLabel(e.target.value)}
                className="w-full bg-neutral-900 border border-white/10 focus:border-white/35 text-white rounded-lg px-3 py-1.5 text-xs outline-none transition-colors"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            
            {/* Audio Settings */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-neutral-300">🔊 Sound Effects</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setSoundMode('mute')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                    soundMode === 'mute'
                      ? 'bg-white/10 border-white/30 text-white'
                      : 'bg-neutral-900 border-white/5 text-neutral-400 hover:text-white hover:border-white/15'
                  }`}
                >
                  🔕 Mute
                </button>
                <button
                  onClick={() => {
                    setSoundMode('flip');
                    playFlipSound(0.25);
                  }}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    soundMode === 'flip'
                      ? 'bg-white/10 border-white/30 text-white'
                      : 'bg-neutral-900 border-white/5 text-neutral-400 hover:text-white hover:border-white/15'
                  }`}
                >
                  🔔 Retro Click
                </button>
              </div>
            </div>

            {/* Global Brightness Slider */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-xs font-semibold text-neutral-300">
                <span>💡 Screen Brightness Dimmer</span>
                <span className="font-mono">{brightness}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                className="w-full h-1 bg-neutral-800 rounded appearance-none cursor-pointer accent-white"
              />
            </div>
          </div>
        </div>

        {/* Theme select section */}
        <div className="border-t border-white/5 pt-3 mt-1.5 flex flex-col gap-2">
          <span className="text-[11px] font-semibold text-neutral-300 uppercase tracking-widest font-mono">Select Aesthetic Theme</span>
          <div className="flex flex-wrap gap-2">
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setThemeId(theme.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition-all cursor-pointer ${
                  themeId === theme.id
                    ? 'border-white scale-102 bg-white/5 text-white shadow-sm'
                    : 'border-white/10 hover:border-white/20 bg-neutral-950/40 text-neutral-400 hover:text-white'
                }`}
                style={{
                  boxShadow: themeId === theme.id ? `0 0 10px ${theme.accent}20` : 'none'
                }}
              >
                <span 
                  className="inline-block size-3 rounded-full border border-white/15 shadow-xs" 
                  style={{ background: theme.accent }}
                />
                {theme.name}
              </button>
            ))}
          </div>
        </div>
      </div>}
    </div>
  );
}
