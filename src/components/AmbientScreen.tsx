import React, { useState, useEffect, useRef } from 'react';
import type { Tool } from '../data/tools';
import type { Locale } from '../data/locales';

interface AmbientScreenProps {
  tool: Tool;
  locale: Locale;
  ambientAudioFiles?: string[];
  isCard?: boolean;
}

// Preset color palettes for the fluid blobs
const PRESETS = [
  {
    id: 'oled',
    name: 'Cyber Neon',
    colors: ['#121212', '#22d3ee', '#ec4899', '#3b0066'],
    themeBg: '#000000',
  },
  {
    id: 'aurora',
    name: 'Aurora Dreams',
    colors: ['#00f2fe', '#4facfe', '#00cdac', '#028090'],
    themeBg: '#021820',
  },
  {
    id: 'sunset',
    name: 'Sunset Solitude',
    colors: ['#ff9a9e', '#fecfef', '#f5576c', '#fa709f'],
    themeBg: '#1a050f',
  },
  {
    id: 'forest',
    name: 'Deep Forest',
    colors: ['#11998e', '#38ef7d', '#f9cb28', '#1c3e35'],
    themeBg: '#091c15',
  },
  {
    id: 'sakura',
    name: 'Cherry Blossom',
    colors: ['#fbc2eb', '#a6c1ee', '#fad0c4', '#f190b7'],
    themeBg: '#0d1326',
  },
  {
    id: 'mystic',
    name: 'Cosmic Myst',
    colors: ['#667eea', '#764ba2', '#b721ff', '#21d4fd'],
    themeBg: '#0b071e',
  },
];

// Helper to play synthesized timer chime
const playTimerBell = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    
    // Primary sound frequency
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
    gain1.gain.setValueAtTime(0.2, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    
    // Harmony frequency (minor third)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(622.25, ctx.currentTime); // D#5
    gain2.gain.setValueAtTime(0.1, ctx.currentTime);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + 2.0);
    osc2.stop(ctx.currentTime + 2.0);
  } catch (err) {
    console.warn('Web Audio synthesis blocked or failed:', err);
  }
};

// Helper to clean up filenames for dynamic audio display
const formatAudioName = (fileUrl: string) => {
  try {
    const parts = fileUrl.split('/');
    const filename = parts[parts.length - 1]; // get filename
    const baseName = filename.substring(0, filename.lastIndexOf('.')); // remove extension
    
    // Replace hyphens, underscores, and remove trailing numeric IDs
    const cleaned = baseName
      .replace(/[-_]/g, ' ')
      .replace(/\b\d+\b/g, '') // remove pure numbers
      .trim();
      
    // Capitalize words
    return cleaned
      .split(' ')
      .filter(Boolean)
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  } catch (err) {
    return 'Custom Audio';
  }
};

export default function AmbientScreen({ tool, locale, ambientAudioFiles = [], isCard = false }: AmbientScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fluidCanvasRef = useRef<HTMLCanvasElement>(null);
  const starsCanvasRef = useRef<HTMLCanvasElement>(null);

  // Core settings
  const [selectedPreset, setSelectedPreset] = useState(PRESETS[0]);
  const [flowSpeed, setFlowSpeed] = useState(isCard ? 0.4 : 0.6); // Velocity scale (0 to 2)
  const [starDensity, setStarDensity] = useState(isCard ? 20 : 60); // Count of static/drift stars
  const [overlayMode, setOverlayMode] = useState<'none' | 'clock' | 'breathing' | 'timer'>(isCard ? 'none' : 'clock');
  const [clockTypography, setClockTypography] = useState<'sans' | 'serif' | 'mono'>('sans');
  const [showAmPm, setShowAmPm] = useState(true);
  const [showDate, setShowDate] = useState(true);

  // Interactive controls
  // Settings panel removed for simplified UI


  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  // Settings panel visibility (kept for potential future use)
  const [showSettings, setShowSettings] = useState(false);

  // Soundscape Mixer States
  const [isLofiOn, setIsLofiOn] = useState(false);
  const [isRainOn, setIsRainOn] = useState(false);
  const [isFireOn, setIsFireOn] = useState(false);

  const [volLofi, setVolLofi] = useState(0.4);
  const [volRain, setVolRain] = useState(0.3);
  const [volFire, setVolFire] = useState(0.3);

  // Audio refs
  const audioLofiRef = useRef<HTMLAudioElement | null>(null);
  const audioRainRef = useRef<HTMLAudioElement | null>(null);
  const audioFireRef = useRef<HTMLAudioElement | null>(null);

  // Dynamic Custom Audio States
  const [activeCustomAudios, setActiveCustomAudios] = useState<Record<string, boolean>>({});
  const [customAudiosVolume, setCustomAudiosVolume] = useState<Record<string, number>>({});
  const customAudioInstancesRef = useRef<Record<string, HTMLAudioElement>>({});

  // Guided Breathing States
  const [breathePhase, setBreathePhase] = useState<'inhale' | 'hold1' | 'exhale' | 'hold2'>('inhale');
  const [breatheSeconds, setBreatheSeconds] = useState(4);

  // Pomodoro/Timer States
  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [pomoPreset, setPomoPreset] = useState<number>(25);

  // Time clock ticks
  const [time, setTime] = useState(new Date());

  // Mouse coords for interactive fluid hover
  const mouseRef = useRef({ x: -1000, y: -1000 });

  // Update Clock State
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Guided breathing loop
  useEffect(() => {
    if (overlayMode !== 'breathing') return;
    const interval = setInterval(() => {
      setBreatheSeconds((prev) => {
        if (prev <= 1) {
          // Switch phase (4 seconds for each)
          setBreathePhase((current) => {
            if (current === 'inhale') return 'hold1';
            if (current === 'hold1') return 'exhale';
            if (current === 'exhale') return 'hold2';
            return 'inhale';
          });
          return 4;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [overlayMode]);

  // Pomodoro countdown timer
  useEffect(() => {
    if (!timerRunning || overlayMode !== 'timer') return;
    const interval = setInterval(() => {
      if (timerSeconds === 0) {
        if (timerMinutes === 0) {
          setTimerRunning(false);
          playTimerBell();
          setTimerMinutes(pomoPreset);
        } else {
          setTimerMinutes((prev) => prev - 1);
          setTimerSeconds(59);
        }
      } else {
        setTimerSeconds((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timerRunning, timerMinutes, timerSeconds, overlayMode, pomoPreset]);

  // 1. Fluid Canvas Animation Loop
  useEffect(() => {
    const canvas = fluidCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = 400); // Low resolution + high blur is performant
    let height = (canvas.height = 300);

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = 400;
      height = canvas.height = 300;
    };
    window.addEventListener('resize', resize);

    // Blob parameters
    interface Blob {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      color: string;
      targetR: number;
    }

    const colors = selectedPreset.colors;
    const blobs: Blob[] = colors.map((col, idx) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      r: 80 + Math.random() * 60,
      color: col,
      targetR: 80 + Math.random() * 60,
    }));

    const draw = () => {
      ctx.fillStyle = selectedPreset.themeBg;
      ctx.fillRect(0, 0, width, height);

      // Mouse attraction
      const mx = (mouseRef.current.x / (containerRef.current?.clientWidth || 1)) * width;
      const my = (mouseRef.current.y / (containerRef.current?.clientHeight || 1)) * height;

      blobs.forEach((blob) => {
        // Move blobs organically
        blob.x += blob.vx * flowSpeed;
        blob.y += blob.vy * flowSpeed;

        // Bounce walls
        if (blob.x - blob.r < 0) {
          blob.x = blob.r;
          blob.vx *= -1;
        } else if (blob.x + blob.r > width) {
          blob.x = width - blob.r;
          blob.vx *= -1;
        }

        if (blob.y - blob.r < 0) {
          blob.y = blob.r;
          blob.vy *= -1;
        } else if (blob.y + blob.r > height) {
          blob.y = height - blob.r;
          blob.vy *= -1;
        }

        // Mouse attraction physics
        if (mouseRef.current.x !== -1000) {
          const dx = mx - blob.x;
          const dy = my - blob.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            // Gently pull toward mouse
            blob.vx += (dx / dist) * 0.02 * flowSpeed;
            blob.vy += (dy / dist) * 0.02 * flowSpeed;
            
            // Limit velocity
            const currentSpeed = Math.hypot(blob.vx, blob.vy);
            if (currentSpeed > 2.5) {
              blob.vx = (blob.vx / currentSpeed) * 2.5;
              blob.vy = (blob.vy / currentSpeed) * 2.5;
            }
          }
        }

        // Draw soft glowing dots
        ctx.beginPath();
        const radGrad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
        radGrad.addColorStop(0, blob.color);
        radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = radGrad;
        ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [selectedPreset, flowSpeed]);

  // 2. Stars Canvas Animation Loop
  useEffect(() => {
    const canvas = starsCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 800;
    let height = 480;

    interface Star {
      x: number;
      y: number;
      size: number;
      alpha: number;
      speed: number;
      angle: number;
    }

    let stars: Star[] = [];

    const initStars = (w: number, h: number) => {
      stars = Array.from({ length: starDensity }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: 0.5 + Math.random() * 1.5,
        alpha: 0.1 + Math.random() * 0.7,
        speed: 0.05 + Math.random() * 0.1,
        angle: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const oldWidth = width;
      const oldHeight = height;
      if (isCard && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth || 320;
        height = canvas.height = canvas.parentElement.clientHeight || 200;
      } else {
        width = canvas.width = canvas.clientWidth || 800;
        height = canvas.height = canvas.clientHeight || 480;
      }

      if (stars.length === 0) {
        initStars(width, height);
      } else {
        stars.forEach((star) => {
          if (oldWidth <= 10 || oldHeight <= 10) {
            star.x = Math.random() * width;
            star.y = Math.random() * height;
          } else {
            star.x = (star.x / oldWidth) * width;
            star.y = (star.y / oldHeight) * height;
          }
        });
      }
    };
    resize();

    let resizeObserver: ResizeObserver | null = null;
    if (isCard && typeof ResizeObserver !== 'undefined' && canvas.parentElement) {
      resizeObserver = new ResizeObserver(() => {
        resize();
      });
      resizeObserver.observe(canvas.parentElement);
    } else {
      window.addEventListener('resize', resize);
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Drag mouse effect on stars
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      stars.forEach((star) => {
        // Slowly drift stars
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        // Reset if star drifts off screen
        if (star.x < 0) star.x = width;
        else if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        else if (star.y > height) star.y = 0;

        // Twinkle
        star.alpha += (Math.random() - 0.5) * 0.05;
        if (star.alpha < 0.1) star.alpha = 0.1;
        if (star.alpha > 0.9) star.alpha = 0.9;

        // Push away from mouse
        if (mx !== -1000) {
          const dx = star.x - mx;
          const dy = star.y - my;
          const dist = Math.hypot(dx, dy);
          if (dist < 80) {
            // Push star away
            star.x += (dx / dist) * 2;
            star.y += (dy / dist) * 2;
          }
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', resize);
      }
    };
  }, [starDensity]);

  // 3. Audio mixer handles
  useEffect(() => {
    if (isCard) return;
    // 🎵 Lofi track creation
    if (!audioLofiRef.current) {
      const audio = new Audio('/assets/snow-screen/bgm/bg.mp3');
      audio.loop = true;
      audioLofiRef.current = audio;
    }
    audioLofiRef.current.volume = volLofi;

    if (isLofiOn) {
      audioLofiRef.current.play().catch((err) => console.log('Autoplay blocked:', err));
    } else {
      audioLofiRef.current.pause();
    }
  }, [isLofiOn, volLofi, isCard]);

  useEffect(() => {
    if (isCard) return;
    // 🌧️ Rain track creation
    if (!audioRainRef.current) {
      const audio = new Audio('/assets/rain-screen/bgm/dragon-studio-gentle-rain-07-437321.mp3');
      audio.loop = true;
      audioRainRef.current = audio;
    }
    audioRainRef.current.volume = volRain;

    if (isRainOn) {
      audioRainRef.current.play().catch((err) => console.log('Autoplay blocked:', err));
    } else {
      audioRainRef.current.pause();
    }
  }, [isRainOn, volRain, isCard]);

  useEffect(() => {
    if (isCard) return;
    // 🔥 Crackling Fireplace track creation
    if (!audioFireRef.current) {
      const audio = new Audio('/assets/fire-screen/fire-screen.mp3');
      audio.loop = true;
      audioFireRef.current = audio;
    }
    audioFireRef.current.volume = volFire;

    if (isFireOn) {
      audioFireRef.current.play().catch((err) => console.log('Autoplay blocked:', err));
    } else {
      audioFireRef.current.pause();
    }
  }, [isFireOn, volFire, isCard]);

  // Sync custom background ambient audios
  useEffect(() => {
    if (isCard || !ambientAudioFiles) return;

    ambientAudioFiles.forEach((file) => {
      if (!customAudioInstancesRef.current[file]) {
        const audio = new Audio(file);
        audio.loop = true;
        customAudioInstancesRef.current[file] = audio;
      }

      const audio = customAudioInstancesRef.current[file];
      const isPlaying = activeCustomAudios[file] || false;
      const vol = customAudiosVolume[file] !== undefined ? customAudiosVolume[file] : 0.4;
      
      if (isFinite(vol)) {
        audio.volume = vol;
      }
      
      if (isPlaying) {
        audio.play().catch((err) => console.log('Autoplay blocked:', err));
      } else {
        audio.pause();
      }
    });
  }, [ambientAudioFiles, activeCustomAudios, customAudiosVolume, isCard]);

  // Cleanup audios
  useEffect(() => {
    return () => {
      audioLofiRef.current?.pause();
      audioRainRef.current?.pause();
      audioFireRef.current?.pause();
      
      // Cleanup all dynamic custom audios
      Object.values(customAudioInstancesRef.current).forEach((audio) => {
        try {
          audio.pause();
        } catch (e) {}
      });
    };
  }, []);

  // Fullscreen hook
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  // Mouse idle timer
  useEffect(() => {
    if (!isFullscreen) {
      setIsIdle(false);
      return;
    }
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
  }, [isFullscreen]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLSelectElement
      ) {
        return;
      }

      if (key === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (key === ' ') {
        e.preventDefault();
        setShowSettings((prev) => !prev);
      } else if (key === 'c') {
        e.preventDefault();
        setOverlayMode((m) => (m === 'clock' ? 'none' : 'clock'));
      } else if (key === 'b') {
        e.preventDefault();
        setOverlayMode((m) => (m === 'breathing' ? 'none' : 'breathing'));
      } else if (key === 'escape' && isFullscreen) {
        e.preventDefault();
        document.exitFullscreen().catch(() => {});
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000 };
  };

  // Helper date/time formatting
  const timeFormatted = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    let ampm = '';

    if (showAmPm) {
      ampm = hours >= 12 ? ' PM' : ' AM';
      hours = hours % 12 || 12;
    }

    return `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}${ampm}`;
  };

  const dateFormatted = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return time.toLocaleDateString(undefined, options);
  };

  // Timer helper values
  const formattedTimer = () => {
    const m = timerMinutes.toString().padStart(2, '0');
    const s = timerSeconds.toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`ambient-container relative w-full overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-center items-center select-none ${
        isCard ? 'w-full h-full pointer-events-none' : 'h-[480px] rounded-2xl'
      } ${
        isFullscreen ? 'is-fullscreen h-screen! w-screen! fixed! inset-0 z-99999 rounded-none!' : ''
      } ${isIdle && isFullscreen ? 'cursor-none' : ''}`}
      style={{ backgroundColor: selectedPreset.themeBg }}
    >
      {/* Background Liquid Gradient Layer with high CSS blur */}
      <canvas
        ref={fluidCanvasRef}
        className={`absolute inset-0 w-full h-full pointer-events-none filter saturate-150 scale-110 opacity-70 z-0 ${
          isCard ? 'blur-[22px]' : 'blur-[90px]'
        }`}
      />

      {/* Floating particles/stars overlay */}
      <canvas
        ref={starsCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-1"
      />

      {/* Subtle vignette/shading overlay */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-2" />

      {/* Action overlay clicks for fullscreen trigger in normal mode */}
      {!isFullscreen && !isCard && (
        <div
          onClick={toggleFullscreen}
          className="absolute inset-0 cursor-pointer z-3"
          title="Click to go Fullscreen"
        />
      )}

      {/* MAIN SCREEN INFO LAYER */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 text-white w-full h-full pointer-events-none">
        
        {/* Typographically stunning Clock Display */}
        {overlayMode === 'clock' && (
          <div className="animate-fadeIn mt-4 flex flex-col items-center select-none drop-shadow-md">
            <span
              className={`font-bold transition-all duration-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] ${
                clockTypography === 'serif'
                  ? 'font-serif text-5xl sm:text-7xl tracking-tight'
                  : clockTypography === 'mono'
                  ? 'font-mono text-5xl sm:text-6xl tracking-wide'
                  : 'font-sans text-5.55xl sm:text-7.5xl tracking-tighter'
              }`}
            >
              {timeFormatted()}
            </span>
            {showDate && (
              <span className="text-xs sm:text-sm tracking-[0.2em] font-light opacity-85 mt-3 select-none flex items-center gap-1.5 uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
                {dateFormatted()}
              </span>
            )}
          </div>
        )}

        {/* Guided Breathing Bubble (Unique Standout Feature) */}
        {overlayMode === 'breathing' && (
          <div className="animate-fadeIn flex flex-col items-center select-none z-10 pointer-events-auto">
            {/* Breathing Bubble */}
            <div
              className={`flex flex-col items-center justify-center rounded-full border border-white/20 backdrop-blur-md transition-all duration-4000 ease-in-out ${
                breathePhase === 'inhale'
                  ? 'w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] bg-white/20 scale-105 shadow-[0_0_40px_rgba(255,255,255,0.4)]'
                  : breathePhase === 'hold1'
                  ? 'w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] bg-cyan-500/25 border-cyan-300/40 scale-102 shadow-[0_0_50px_rgba(6,182,212,0.4)]'
                  : breathePhase === 'exhale'
                  ? 'w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] bg-white/5 scale-90 shadow-[0_0_15px_rgba(255,255,255,0.05)]'
                  : 'w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] bg-indigo-500/10 border-indigo-300/30 scale-90 shadow-[0_0_20px_rgba(99,102,241,0.25)]'
              }`}
            >
              <h2 className="text-xl sm:text-2xl font-semibold tracking-wide font-sans text-white capitalize drop-shadow-sm select-none">
                {breathePhase === 'inhale' && 'Inhale...'}
                {breathePhase === 'hold1' && 'Hold...'}
                {breathePhase === 'exhale' && 'Exhale...'}
                {breathePhase === 'hold2' && 'Rest...'}
              </h2>
              <span className="text-[11px] font-mono opacity-80 mt-1 sm:mt-1.5 bg-black/35 px-2.5 py-0.5 rounded-full select-none">
                {breatheSeconds}s
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-neutral-300 font-light mt-6 tracking-widest uppercase opacity-75 backdrop-blur-xs px-4 py-1.5 rounded-full bg-black/20 border border-white/5 font-mono">
              Guided Focus • Box Breathing (4s Cycle)
            </p>
          </div>
        )}

        {/* Minimalist Pomodoro/Timer Overlay */}
        {overlayMode === 'timer' && (
          <div className="animate-fadeIn flex flex-col items-center select-none z-10 pointer-events-auto">
            {/* Round Ring Timer */}
            <div className="relative flex items-center justify-center w-[160px] h-[165px] sm:w-[190px] sm:h-[195px]">
              {/* Circular SVG Progress */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="74"
                  className="stroke-white/10 fill-none"
                  strokeWidth="5"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="74"
                  className="stroke-amber-400 fill-none transition-all duration-1000"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray={`${Math.PI * 2 * 74}`}
                  strokeDashoffset={`${
                    Math.PI *
                    2 *
                    74 *
                    (1 - (timerMinutes * 60 + timerSeconds) / (pomoPreset * 60))
                  }`}
                />
              </svg>
              <div className="flex flex-col items-center z-10">
                <span className="font-mono text-3.5xl sm:text-4.5xl font-bold tracking-tight text-white drop-shadow-md">
                  {formattedTimer()}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-neutral-400 mt-1 select-none">
                  {timerRunning ? 'Focusing...' : 'Paused'}
                </span>
              </div>
            </div>

            {/* Timer Actions */}
            <div className="flex items-center gap-3 mt-5">
              <button
                onClick={() => setTimerRunning(!timerRunning)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider cursor-pointer border transition-colors ${
                  timerRunning
                    ? 'bg-red-500/20 border-red-500/40 text-red-300 hover:bg-red-500/35 animate-none'
                    : 'bg-green-500/25 border-green-500/45 text-green-300 hover:bg-green-500/35'
                }`}
              >
                {timerRunning ? 'Pause' : 'Start'}
              </button>
              <button
                onClick={() => {
                  setTimerRunning(false);
                  setTimerSeconds(0);
                  setTimerMinutes(pomoPreset);
                }}
                className="px-3.5 py-1.5 rounded-lg text-xs bg-neutral-800 border border-white/10 text-neutral-400 hover:text-white capitalize transition-colors cursor-pointer"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Top right control shortcuts (Gear + Fullscreen) */}
      {!isCard && (
        <div
          className={`absolute top-4 right-4 flex items-center gap-2.5 z-20 transition-opacity duration-300 ${
            isIdle && isFullscreen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`flex items-center justify-center w-10 h-10 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 text-white cursor-pointer transition-transform duration-300 backdrop-blur-md ${
              showSettings ? 'rotate-90 border-amber-400/50 text-amber-400' : ''
            }`}
            aria-label="Toggle Control Panel"
            title="Toggle Control Panel"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
          <button
            onClick={toggleFullscreen}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 text-white cursor-pointer transition-all duration-200 backdrop-blur-md hover:border-white/25"
            aria-label="Toggle Fullscreen"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M10 14l-7 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* CUSTOMIZER DRAWER PANEL */}
      {isCard ? null :
        <div
          className={`absolute bottom-0 inset-x-0 bg-neutral-950/85 backdrop-blur-xl border-t border-white/10 transition-transform duration-300 ease-out z-20 overflow-y-auto px-5 py-4 max-h-[75%] md:max-h-[60%] flex flex-col gap-4 text-white custom-scrollbar ${
            showSettings ? 'translate-y-0' : 'translate-y-full'
          } ${isIdle && isFullscreen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
        {/* Drawers Header */}
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase">Ambient Settings</h3>
            <p className="text-[10px] text-neutral-450 mt-0.5">Customize interactive ambient lighting and atmospheric soundscapes</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setSelectedPreset(PRESETS[0]);
                setFlowSpeed(0.6);
                setStarDensity(60);
                setOverlayMode('clock');
                setClockTypography('sans');
                setShowAmPm(true);
                setShowDate(true);
                setIsLofiOn(false);
                setIsRainOn(false);
                setIsFireOn(false);
                setActiveCustomAudios({});
                setCustomAudiosVolume({});
              }}
              className="text-[10px] font-semibold text-amber-400 bg-amber-950/30 hover:bg-amber-900/40 border border-amber-500/20 px-2.5 py-1 rounded-lg cursor-pointer transition-colors"
            >
              Reset Defaults
            </button>
            <button
              onClick={() => setShowSettings(false)}
              className="text-neutral-450 hover:text-white px-2 py-0.5 font-bold cursor-pointer text-xs"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Preset Gradient Selection */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-semibold text-neutral-350 uppercase tracking-wider">Aether Gradient Presets</span>
            <div className="grid grid-cols-3 gap-2 mt-1 font-mono">
              {PRESETS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPreset(p)}
                  className={`flex flex-col gap-1 items-center justify-center p-2 rounded-lg border text-center cursor-pointer transition-all duration-200 relative ${
                    selectedPreset.id === p.id
                      ? 'border-amber-400 bg-white/5 ring-1 ring-amber-500/20 shadow-[0_0_8px_rgba(251,191,36,0.15)]'
                      : 'border-white/10 bg-neutral-900/40 hover:border-white/25 hover:bg-neutral-900/70'
                  }`}
                >
                  {/* Small round preview of colors */}
                  <div className="flex gap-0.5 mt-0.5">
                    {p.colors.slice(0, 3).map((c, i) => (
                      <div
                        key={i}
                        className="w-2.5 h-2.5 rounded-full border border-black/20"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-medium text-neutral-300 mt-1 font-sans">{p.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Flow Parameters */}
          <div className="flex flex-col gap-3 justify-center">
            
            {/* Speed Range Slider */}
            <div className="flex flex-col gap-1.5 animate-none">
              <div className="flex justify-between items-center text-xs font-medium text-neutral-300">
                <span>Morphing Flow Speed</span>
                <span className="font-mono text-xs text-amber-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-white/5">
                  {flowSpeed === 0 ? 'Frozen' : `${Math.round(flowSpeed * 100)}%`}
                </span>
              </div>
              <input
                type="range"
                min="0.0"
                max="2.0"
                step="0.1"
                value={flowSpeed}
                onChange={(e) => setFlowSpeed(Number(e.target.value))}
                className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-450"
              />
            </div>

            {/* Particle Density Slider */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-xs font-medium text-neutral-300">
                <span>Cosmic Star Density</span>
                <span className="font-mono text-xs text-amber-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-white/5">
                  {starDensity} stars
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="150"
                step="5"
                value={starDensity}
                onChange={(e) => setStarDensity(Number(e.target.value))}
                className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-450 animate-none"
              />
            </div>
          </div>
        </div>

        {/* Middle row: Soundscape Mixer & Focus Overlays */}
        <div className="border-t border-white/5 pt-3 mt-0.5 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Atmospheric Audio Soundscape mixer */}
          <div className="flex flex-col gap-2.5 bg-white/5 rounded-xl p-3 border border-white/5">
            <span className="text-[11px] font-semibold text-neutral-350 uppercase tracking-wider block border-b border-white/5 pb-1">
              Atmospheric Soundscape Mixer
            </span>
            <div className="flex flex-col gap-2 mt-1">
              
              {/* Custom dynamic audio tracks list */}
              {ambientAudioFiles && ambientAudioFiles.length > 0 && (
                <>
                  <div className="text-[10px] font-semibold text-neutral-450 uppercase tracking-widest pb-1 select-none">
                    Custom Ambient Tracks
                  </div>
                  {ambientAudioFiles.map((file) => {
                    const cleanName = formatAudioName(file);
                    const isPlaying = activeCustomAudios[file] || false;
                    const vol = customAudiosVolume[file] !== undefined ? customAudiosVolume[file] : 0.4;
                    const cleanId = `custom-audio-${file.replace(/[^a-zA-Z0-9]/g, '-')}`;
                    return (
                      <div key={file} className="flex items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2 max-w-[55%] truncate">
                          <input
                            type="checkbox"
                            id={cleanId}
                            checked={isPlaying}
                            onChange={(e) => {
                              setActiveCustomAudios((prev) => ({
                                ...prev,
                                [file]: e.target.checked
                              }));
                            }}
                            className="w-3.5 h-3.5 rounded border-neutral-700 bg-neutral-900 text-amber-400 checked:bg-amber-400 focus:ring-amber-550/20 cursor-pointer shrink-0"
                          />
                          <label htmlFor={cleanId} className="font-medium text-neutral-250 cursor-pointer truncate hover:text-white" title={cleanName}>
                            🎵 {cleanName}
                          </label>
                        </div>
                        <input
                          type="range"
                          min="0.0"
                          max="1.0"
                          step="0.05"
                          value={vol}
                          onChange={(e) => {
                            setCustomAudiosVolume((prev) => ({
                              ...prev,
                              [file]: Number(e.target.value)
                            }));
                          }}
                          disabled={!isPlaying}
                          className="w-20 sm:w-28 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-450 disabled:opacity-30 shrink-0"
                        />
                      </div>
                    );
                  })}
                  <div className="border-t border-white/5 my-1.5" />
                </>
              )}

              {/* Channel 1: Lofi Synth */}
              <div className="flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="lofiToggle"
                    checked={isLofiOn}
                    onChange={(e) => setIsLofiOn(e.target.checked)}
                    className="w-3.5 h-3.5 rounded border-neutral-700 bg-neutral-900 text-amber-400 checked:bg-amber-400 focus:ring-amber-550/20 cursor-pointer"
                  />
                  <label htmlFor="lofiToggle" className="font-medium text-neutral-250 cursor-pointer">
                    🎵 Calming Lofi Synth
                  </label>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="1.0"
                  step="0.05"
                  value={volLofi}
                  onChange={(e) => setVolLofi(Number(e.target.value))}
                  disabled={!isLofiOn}
                  className="w-20 sm:w-28 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-450 disabled:opacity-30"
                />
              </div>

              {/* Channel 2: Cozy Rainfall */}
              <div className="flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="rainToggle"
                    checked={isRainOn}
                    onChange={(e) => setIsRainOn(e.target.checked)}
                    className="w-3.5 h-3.5 rounded border-neutral-700 bg-neutral-900 text-amber-400 checked:bg-amber-400 focus:ring-amber-550/20 cursor-pointer"
                  />
                  <label htmlFor="rainToggle" className="font-medium text-neutral-250 cursor-pointer">
                    🌧️ Gentle Rainfall
                  </label>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="1.0"
                  step="0.05"
                  value={volRain}
                  onChange={(e) => setVolRain(Number(e.target.value))}
                  disabled={!isRainOn}
                  className="w-20 sm:w-28 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-450 disabled:opacity-30"
                />
              </div>

              {/* Channel 3: Cozy Fireplace */}
              <div className="flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="fireToggle"
                    checked={isFireOn}
                    onChange={(e) => setIsFireOn(e.target.checked)}
                    className="w-3.5 h-3.5 rounded border-neutral-700 bg-neutral-900 text-amber-400 checked:bg-amber-400 focus:ring-amber-550/20 cursor-pointer"
                  />
                  <label htmlFor="fireToggle" className="font-medium text-neutral-250 cursor-pointer">
                    🔥 Crackling Hearth
                  </label>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="1.0"
                  step="0.05"
                  value={volFire}
                  onChange={(e) => setVolFire(Number(e.target.value))}
                  disabled={!isFireOn}
                  className="w-20 sm:w-28 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-450 disabled:opacity-30"
                />
              </div>

            </div>
          </div>

          {/* Ambient overlays - Clock, Breathe, timer */}
          <div className="flex flex-col gap-2 bg-white/5 rounded-xl p-3 border border-white/5">
            <span className="text-[11px] font-semibold text-neutral-350 uppercase tracking-wider block border-b border-white/5 pb-1">
              Screen Overlay Focus Mode
            </span>
            <div className="grid grid-cols-4 gap-2 mt-1.5">
              {(['none', 'clock', 'breathing', 'timer'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setOverlayMode(mode)}
                  className={`py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wider border cursor-pointer transition-all ${
                    overlayMode === mode
                      ? 'border-amber-400 bg-amber-500/10 text-white animate-none'
                      : 'border-white/5 bg-neutral-900/30 text-neutral-400 hover:text-white'
                  }`}
                >
                  {mode === 'none' && 'None'}
                  {mode === 'clock' && 'Clock'}
                  {mode === 'breathing' && 'Breathe'}
                  {mode === 'timer' && 'Timer'}
                </button>
              ))}
            </div>

            {/* Mode-specific settings sub-drawers */}
            <div className="mt-2 text-xs">
              
              {/* Setup Clock settings */}
              {overlayMode === 'clock' && (
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 animate-fadeIn p-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest">Font:</span>
                    <div className="flex gap-1">
                      {(['sans', 'serif', 'mono'] as const).map((typo) => (
                        <button
                          key={typo}
                          onClick={() => setClockTypography(typo)}
                          className={`px-1.5 py-0.5 rounded text-[10px] max-w-max border capitalize cursor-pointer ${
                            clockTypography === typo
                              ? 'bg-neutral-800 border-neutral-600 text-amber-300 font-bold'
                              : 'bg-neutral-950 border-white/5 text-neutral-550 hover:text-white'
                          }`}
                        >
                          {typo}
                        </button>
                      ))}
                    </div>
                  </div>
                  <label className="flex items-center gap-1 text-[10px] text-neutral-350 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={showAmPm}
                      onChange={(e) => setShowAmPm(e.target.checked)}
                      className="w-3 h-3 rounded bg-neutral-955 border-neutral-700 text-amber-400 checked:bg-amber-400 focus:ring-amber-550/20 cursor-pointer"
                    />
                    AM/PM
                  </label>
                  <label className="flex items-center gap-1 text-[10px] text-neutral-350 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={showDate}
                      onChange={(e) => setShowDate(e.target.checked)}
                      className="w-3 h-3 rounded bg-neutral-955 border-neutral-700 text-amber-400 checked:bg-amber-400 focus:ring-amber-550/20 cursor-pointer"
                    />
                    Date
                  </label>
                </div>
              )}

              {/* Setup Breathing settings */}
              {overlayMode === 'breathing' && (
                <div className="text-[10px] text-neutral-400 italic animate-fadeIn py-1">
                  💡 Inhale as the circle expands, hold your breath, and exhale as it relaxes (Box breathing). Great for study/focus.
                </div>
              )}

              {/* Setup Timer settings */}
              {overlayMode === 'timer' && (
                <div className="flex items-center gap-2.5 animate-fadeIn p-1">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest">Duration:</span>
                  <div className="flex gap-1.5">
                    {([5, 15, 25, 45] as const).map((m) => (
                      <button
                        key={m}
                        onClick={() => {
                          setTimerMinutes(m);
                          setTimerSeconds(0);
                          setPomoPreset(m);
                          setTimerRunning(false);
                        }}
                        className={`px-2 py-0.5 rounded text-[10px] border cursor-pointer ${
                          pomoPreset === m
                            ? 'bg-neutral-800 border-neutral-600 text-amber-300 font-bold'
                            : 'bg-neutral-900 border-white/5 text-neutral-500 hover:text-neutral-300'
                        }`}
                      >
                        {m}m
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Shortcuts / footer info inside drawer */}
        <div className="text-[10px] text-neutral-500 border-t border-white/5 pt-2 flex flex-wrap gap-x-4 gap-y-1">
          <span>⌨️ Keyboards: <strong className="text-neutral-400">F</strong> Fullscreen</span>
          <span>• <strong className="text-neutral-400">Space</strong> Settings</span>
          <span>• <strong className="text-neutral-300">C</strong> Clock</span>
          <span>• <strong className="text-neutral-300">B</strong> Breathe</span>
          <span>• <strong className="text-neutral-400">Esc</strong> Exit</span>
        </div>
      </div>}
    </div>
  );
}
