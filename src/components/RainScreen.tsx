import React, { useState, useEffect, useRef } from 'react';
import type { Tool } from '../data/tools';
import type { Locale } from '../data/locales';
import { getToolAssets } from '../utils/assets';

interface RainScreenProps {
  tool: Tool;
  locale: Locale;
  backgrounds?: string[];
  audioFiles?: string[];
  isCard?: boolean;
}

interface DualRangeSliderProps {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onChange: (val: [number, number]) => void;
  label: string;
  formatValue?: (val: number) => string;
}

const DualRangeSlider: React.FC<DualRangeSliderProps> = ({
  min,
  max,
  step = 0.1,
  value,
  onChange,
  label,
  formatValue = (v) => v.toFixed(1),
}) => {
  const [minVal, maxVal] = value;
  const [activeSlider, setActiveSlider] = useState<'min' | 'max'>('min');

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.min(Number(e.target.value), maxVal - step);
    onChange([Number(val.toFixed(2)), maxVal]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(Number(e.target.value), minVal + step);
    onChange([minVal, Number(val.toFixed(2))]);
  };

  const minPercent = ((minVal - min) / (max - min)) * 100;
  const maxPercent = ((maxVal - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center text-xs font-medium text-neutral-300">
        <span>{label}</span>
        <span className="font-mono text-xs text-sky-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-white/5">
          {formatValue(minVal)} – {formatValue(maxVal)}
        </span>
      </div>
      <div className="relative h-6 flex items-center">
        <div className="absolute inset-x-0 h-1 bg-neutral-800 rounded-full" />
        <div 
          className="absolute h-1 bg-linear-to-r from-sky-400 to-indigo-500 rounded-full"
          style={{
            left: `${minPercent}%`,
            right: `${100 - maxPercent}%`
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={handleMinChange}
          onMouseDown={() => setActiveSlider('min')}
          onTouchStart={() => setActiveSlider('min')}
          style={{ zIndex: activeSlider === 'min' ? 30 : 10 }}
          className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none cursor-pointer outline-none slider-thumb-pointer"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxVal}
          onChange={handleMaxChange}
          onMouseDown={() => setActiveSlider('max')}
          onTouchStart={() => setActiveSlider('max')}
          style={{ zIndex: activeSlider === 'max' ? 30 : 10 }}
          className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none cursor-pointer outline-none slider-thumb-pointer"
        />
      </div>
    </div>
  );
};

const AESTHETIC_RAIN_COLORS = [
  { name: 'Pure Water', value: 'rgba(255, 255, 255, 0.45)' },
  { name: 'Glacier Teal', value: 'rgba(56, 189, 248, 0.5)' },
  { name: 'Emerald Forest', value: 'rgba(52, 211, 153, 0.5)' },
  { name: 'Electric Violet', value: 'rgba(232, 121, 249, 0.55)' },
  { name: 'Sunset Amber', value: 'rgba(251, 191, 36, 0.5)' },
  { name: 'Muted Slate', value: 'rgba(148, 163, 184, 0.45)' },
  { name: 'Crimson Storm', value: 'rgba(248, 113, 113, 0.5)' },
  { name: 'Cyber Neon Green', value: 'rgba(34, 211, 238, 0.55)' }
];

// Falling Rain Drop Class
class RainStreak {
  x: number = 0;
  y: number = 0;
  vy: number = 0;
  vx: number = 0;
  length: number = 0;
  weight: number = 0;
  opacity: number = 0;

  constructor(width: number, height: number, minSpeed: number, maxSpeed: number, wind: number) {
    this.reset(width, height, minSpeed, maxSpeed, wind, true);
  }

  reset(width: number, height: number, minSpeed: number, maxSpeed: number, wind: number, init: boolean = false) {
    this.x = Math.random() * (width + 300) - 150;
    this.y = init ? Math.random() * height : -60;
    this.vy = minSpeed + Math.random() * (maxSpeed - minSpeed);
    this.vx = wind + (Math.random() - 0.5) * 0.6;
    this.length = 15 + Math.random() * 25;
    this.weight = 0.8 + Math.random() * 1.5;
    this.opacity = 0.15 + Math.random() * 0.45;
  }

  update(width: number, height: number, minSpeed: number, maxSpeed: number, wind: number, spawnSplash: (x: number, y: number) => void) {
    this.y += this.vy;
    this.x += this.vx;

    // Contact with the virtual floor (near bottom)
    if (this.y >= height - 30) {
      spawnSplash(this.x, height - 30);
      this.reset(width, height, minSpeed, maxSpeed, wind);
    }

    if (this.x < -200 || this.x > width + 200) {
      this.reset(width, height, minSpeed, maxSpeed, wind);
    }
  }

  draw(ctx: CanvasRenderingContext2D, color: string) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.globalAlpha = this.opacity;
    ctx.lineWidth = this.weight;
    ctx.moveTo(this.x, this.y);
    // slanting rain line projection
    ctx.lineTo(this.x + this.vx * 1.2, this.y + this.vy * 0.8 + this.length);
    ctx.stroke();
  }
}

// Ground/Splashing Arc Classes
class RainSplashParticle {
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
  radius: number = 0;
  alpha: number = 1.0;
  life: number = 0;
  maxLife: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 3;
    this.vy = -Math.random() * 2 - 1.2;
    this.radius = 0.8 + Math.random() * 1.5;
    this.maxLife = 10 + Math.random() * 15;
    this.life = 0;
    this.alpha = 1.0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.15; // Gravity
    this.life++;
    this.alpha = Math.max(0, 1 - this.life / this.maxLife);
  }

  draw(ctx: CanvasRenderingContext2D, color: string) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.globalAlpha = this.alpha * 0.55;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Rain on Glass Window classes
class GlassDroplet {
  x: number = 0;
  y: number = 0;
  r: number = 0;
  speed: number = 0;
  opacity: number = 0;
  trail: { x: number; y: number; r: number }[] = [];
  lastSlide: number = 0;
  slideDelay: number = 0;

  constructor(width: number, height: number) {
    this.reset(width, height, true);
  }

  reset(width: number, height: number, init: boolean = false) {
    this.x = Math.random() * width;
    this.y = init ? Math.random() * height : -30;
    this.r = 1.2 + Math.random() * 4.0;
    this.opacity = 0.25 + Math.random() * 0.5;
    this.speed = 0.4 + Math.random() * 1.4;
    this.trail = [];
    this.slideDelay = Math.random() * 2500;
    this.lastSlide = Date.now() + this.slideDelay;
  }

  update(width: number, height: number) {
    // Sliding simulation
    if (Date.now() > this.lastSlide) {
      if (this.trail.length > 25) {
        this.trail.shift();
      }
      this.trail.push({ x: this.x, y: this.y, r: this.r * 0.8 });
      
      this.y += this.speed;
      // Zigzag slither path
      this.x += (Math.random() - 0.5) * 0.45;

      // Accelerate dripping occasionally
      if (Math.random() < 0.15) {
        this.speed += 0.1;
      }

      if (this.y > height + 20) {
        this.reset(width, height);
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D, color: string) {
    // Draw trail
    ctx.fillStyle = color;
    ctx.globalAlpha = this.opacity * 0.12;
    this.trail.forEach(t => {
      ctx.beginPath();
      ctx.arc(t.x, t.y, t.r, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw main droplet
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    // Shininess glare arc
    ctx.beginPath();
    ctx.arc(this.x - this.r * 0.3, this.y - this.r * 0.3, this.r * 0.28, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.globalAlpha = this.opacity * 0.75;
    ctx.fill();
  }
}

const formatAudioName = (fileUrl: string) => {
  try {
    const fileName = decodeURIComponent(fileUrl.split('/').pop() || '');
    const baseName = fileName.replace(/\.[^/.]+$/, '');
    const cleaned = baseName
      .replace(/^([a-z0-9]+-)+/i, '')
      .replace(/[-_]/g, ' ')
      .replace(/\(\d+\)/g, '')
      .trim();
    if (cleaned.length > 2) {
      return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
    }
    return baseName || 'Soundtrack';
  } catch {
    return 'Soundtrack';
  }
};

export default function RainScreen({ tool, locale, backgrounds: propBg = [], audioFiles: propAudio = [], isCard = false }: RainScreenProps) {
  // Dynamically discover assets if props are empty or not passed
  const discovered = getToolAssets('rain-screen');
  const backgrounds = propBg.length > 0 ? propBg : discovered.backgrounds;
  const audioFiles = propAudio.length > 0 ? propAudio : discovered.audioFiles;

  // Custom states
  const [panelOpen, setPanelOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hudVisible, setHudVisible] = useState(true);

  // Customizer Properties
  const [rainType, setRainType] = useState<'streaks' | 'glass'>('streaks');
  const [density, setDensity] = useState(isCard ? 60 : 180);
  const [speed, setSpeed] = useState<[number, number]>([12.0, 24.0]);
  const [wind, setWind] = useState(1.5);
  const [splashesEnabled, setSplashesEnabled] = useState(true);
  const [color, setColor] = useState(AESTHETIC_RAIN_COLORS[0].value);
  const bgList = backgrounds.length > 0 ? backgrounds : ['/assets/rain-screen/backgrounds/bg.png'];
  const [selectedBg, setSelectedBg] = useState<string>(bgList[0]);

  // Sound States - Default to first audio file if available
  const [selectedBgm, setSelectedBgm] = useState<string>(audioFiles.length > 0 ? audioFiles[0] : 'none');
  const [bgmPlaying, setBgmPlaying] = useState<boolean>(false);
  const [bgmVolume, setBgmVolume] = useState<number>(0.5);

  // Thunder / Lightning States
  const [thunderEnabled, setThunderEnabled] = useState(false);
  const [thunderInterval, setThunderInterval] = useState(15);

  // Refs
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const thunderEnabledRef = useRef(thunderEnabled);
  const thunderIntervalRef = useRef(thunderInterval);

  useEffect(() => {
    thunderEnabledRef.current = thunderEnabled;
  }, [thunderEnabled]);

  useEffect(() => {
    thunderIntervalRef.current = thunderInterval;
  }, [thunderInterval]);

  // Default parameters for quick reset
  const resetToDefaults = () => {
    setRainType('streaks');
    setDensity(180);
    setSpeed([12.0, 24.0]);
    setWind(1.5);
    setSplashesEnabled(true);
    setColor(AESTHETIC_RAIN_COLORS[0].value);
    setSelectedBg(bgList[0]);
    setSelectedBgm(audioFiles.length > 0 ? audioFiles[0] : 'none');
    setBgmVolume(0.5);
    setBgmPlaying(false);
    setThunderEnabled(false);
    setThunderInterval(15);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'SELECT' || activeEl.tagName === 'TEXTAREA')) {
        return;
      }

      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        setPanelOpen(prev => !prev);
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key.toLowerCase() === 'r') {
        e.preventDefault();
        resetToDefaults();
      } else if (e.key.toLowerCase() === 'm') {
        e.preventDefault();
        if (selectedBgm !== 'none') {
          setBgmPlaying(p => !p);
        }
      }
    };

    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, [selectedBgm, backgrounds, audioFiles]);

  // Enable audio playback on first user gesture if blocked
  useEffect(() => {
    const handleUserGesture = () => {
      if (selectedBgm !== 'none' && !bgmPlaying) {
        setBgmPlaying(true);
      }
    };

    window.addEventListener('click', handleUserGesture, { once: true });
    window.addEventListener('keydown', handleUserGesture, { once: true });

    return () => {
      window.removeEventListener('click', handleUserGesture);
      window.removeEventListener('keydown', handleUserGesture);
    };
  }, [selectedBgm]);

  // Robust Audio Engine control
  useEffect(() => {
    if (selectedBgm === 'none' || !selectedBgm) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      return;
    }

    let resolvedUrl: string;
    try {
      resolvedUrl = new URL(encodeURI(selectedBgm), window.location.origin).href;
    } catch {
      resolvedUrl = selectedBgm;
    }

    if (!audioRef.current) {
      audioRef.current = new Audio(resolvedUrl);
      audioRef.current.loop = true;
    } else if (audioRef.current.src !== resolvedUrl) {
      audioRef.current.pause();
      audioRef.current.src = resolvedUrl;
      audioRef.current.load();
    }

    audioRef.current.volume = bgmVolume;

    if (bgmPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log('Audio playback gesture deferred:', err);
        });
      }
    } else {
      audioRef.current.pause();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [selectedBgm, bgmPlaying, bgmVolume]);

  // Mouse activity timer HUD overlay toggles
  const handleMouseMove = () => {
    setHudVisible(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (isFullscreen) {
        setHudVisible(false);
      }
    }, 3000);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isFullscreen]);

  // Native Fullscreen wrappers
  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
        document.documentElement.classList.add('is-rain-fullscreen');
      }).catch(err => {
        console.error('Fullscreen toggle failure:', err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const active = !!document.fullscreenElement;
      setIsFullscreen(active);
      if (!active) {
        document.documentElement.classList.remove('is-rain-fullscreen');
        setHudVisible(true);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.documentElement.classList.remove('is-rain-fullscreen');
    };
  }, []);

  // Realistic Simulation Canvas Cycle
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 800;
    let height = 480;

    // Particle arrays
    const streaks: RainStreak[] = [];
    const glassDrops: GlassDroplet[] = [];
    const staticDrops: { x: number; y: number; r: number; opacity: number }[] = [];
    let splashParticles: RainSplashParticle[] = [];

    // Lightning variables
    let lastFlashTime = performance.now();
    let nextFlashDelay = thunderIntervalRef.current * 1000 * (0.7 + Math.random() * 0.6);
    let flashActive = false;
    let flashStartTime = 0;
    let flashIntensity = 0;
    let flashX = width * 0.5;

    // Helper to spawn static condensation beads on window
    const spawnStaticDrops = () => {
      staticDrops.length = 0;
      const staticCount = Math.floor((width * height) / 9000);
      for (let i = 0; i < staticCount; i++) {
        staticDrops.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 0.6 + Math.random() * 1.8,
          opacity: 0.15 + Math.random() * 0.35
        });
      }
    };

    const handleResize = () => {
      if (isCard && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth || 320;
        height = canvas.height = canvas.parentElement.clientHeight || 200;
      } else {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
      spawnStaticDrops();
    };
    handleResize();

    let resizeObserver: ResizeObserver | null = null;
    if (isCard && typeof ResizeObserver !== 'undefined' && canvas.parentElement) {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(canvas.parentElement);
    } else {
      window.addEventListener('resize', handleResize);
    }

    // Splash spawn callback
    const spawnSplash = (x: number, y: number) => {
      if (!splashesEnabled) return;
      // Add 2-3 rising splash drop particles
      for (let i = 0; i < 2; i++) {
        splashParticles.push(new RainSplashParticle(x, y));
      }
    };

    // Render loop
    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      // Handle rain density allocations
      if (rainType === 'streaks') {
        if (streaks.length < density) {
          const diff = density - streaks.length;
          for (let i = 0; i < diff; i++) {
            streaks.push(new RainStreak(width, height, speed[0], speed[1], wind));
          }
        } else if (streaks.length > density) {
          streaks.splice(density);
        }

        // Draw falling streaks
        streaks.forEach(s => {
          s.update(width, height, speed[0], speed[1], wind, spawnSplash);
          s.draw(ctx, color);
        });

        // Draw landing splash arrays
        if (splashesEnabled) {
          splashParticles = splashParticles.filter(p => {
            p.update();
            p.draw(ctx, color);
            return p.alpha > 0.01;
          });
        }
      } else {
        // Redraw static window drops
        ctx.fillStyle = color;
        staticDrops.forEach(d => {
          ctx.beginPath();
          ctx.globalAlpha = d.opacity;
          ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
          ctx.fill();
        });

        // Render sliding drops
        const glassDensity = Math.floor(density / 3.5);
        if (glassDrops.length < glassDensity) {
          const diff = glassDensity - glassDrops.length;
          for (let i = 0; i < diff; i++) {
            glassDrops.push(new GlassDroplet(width, height));
          }
        } else if (glassDrops.length > glassDensity) {
          glassDrops.splice(glassDensity);
        }

        glassDrops.forEach(gd => {
          gd.update(width, height);
          gd.draw(ctx, color);
        });
      }

      // Update lightning/thunder if enabled
      if (thunderEnabledRef.current) {
        const now = performance.now();
        if (!flashActive && now - lastFlashTime > nextFlashDelay) {
          flashActive = true;
          flashStartTime = now;
          flashX = width * (0.2 + Math.random() * 0.6);
          lastFlashTime = now;
          nextFlashDelay = thunderIntervalRef.current * 1000 * (0.75 + Math.random() * 0.5);
        }
      } else {
        flashActive = false;
        flashIntensity = 0;
      }

      if (flashActive) {
        const elapsed = performance.now() - flashStartTime;
        const flashDuration = 1000;
        if (elapsed > flashDuration) {
          flashActive = false;
          flashIntensity = 0;
        } else {
          // Double pulse lightning:
          // Peak 1: at 60ms, intensity up to 0.12
          // Valley: at 160ms, intensity down to 0.02
          // Peak 2: at 240ms, intensity up to 0.06
          // Fade: from 240ms to 1000ms, decays to 0
          if (elapsed < 60) {
            flashIntensity = (elapsed / 60) * 0.12;
          } else if (elapsed < 160) {
            const t = (elapsed - 60) / 100;
            flashIntensity = 0.12 - t * 0.10;
          } else if (elapsed < 240) {
            const t = (elapsed - 160) / 80;
            flashIntensity = 0.02 + t * 0.04;
          } else {
            const t = (elapsed - 240) / 760;
            flashIntensity = 0.06 * (1 - t);
          }
        }
      }

      if (flashIntensity > 0) {
        ctx.save();
        const grad = ctx.createRadialGradient(
          flashX, 0, 10,
          flashX, 0, Math.max(width, height) * 0.9
        );
        grad.addColorStop(0, `rgba(255, 255, 255, ${flashIntensity * 1.5})`);
        grad.addColorStop(0.2, `rgba(240, 248, 255, ${flashIntensity * 0.9})`);
        grad.addColorStop(0.5, `rgba(230, 242, 255, ${flashIntensity * 0.4})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      }

      animId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(animId);
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [rainType, density, speed, wind, splashesEnabled, color]);

  return (
    <div
      ref={containerRef}
      className={`rain-container relative w-full overflow-hidden border border-white/10 transition-all duration-300 select-none ${
        isCard ? 'w-full h-full pointer-events-none' : 'h-[480px] bg-cover bg-center rounded-2xl shadow-2xl'
      } ${
        isFullscreen ? 'h-screen w-screen border-none rounded-none' : ''
      }`}
      style={{ cursor: hudVisible ? 'default' : 'none' }}
    >
      {/* Background Frame Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 pointer-events-none"
        style={{
          backgroundImage: selectedBg ? `url("${encodeURI(selectedBg)}")` : 'none',
          filter: rainType === 'glass' ? 'blur(1.5px) brightness(0.85)' : 'brightness(0.92)'
        }}
      />

      {/* Radial Lofi Vignette Overlay */}
      <div className="bg-radial-vignette absolute inset-0 pointer-events-none z-5" />

      {/* Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-10 pointer-events-none"
      />

      {/* Screen Title & Options Header */}
      {!isCard && (
        <div 
          className={`absolute top-4 left-4 z-40 flex items-center gap-3 transition-opacity duration-300 pointer-events-none ${
            hudVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-8 w-8 rounded-lg bg-sky-500/20 backdrop-blur-md border border-sky-400/30 flex items-center justify-center">
            <svg className="w-[18px] h-[18px] text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
              <line x1="8" y1="16" x2="8" y2="21" />
              <line x1="12" y1="16" x2="12" y2="21" />
              <line x1="16" y1="16" x2="16" y2="21" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide leading-tight">Rain Savvy</h3>
            <p className="text-[10px] text-neutral-400 tracking-wider">AESTHETIC Lofi RAINSCREEN</p>
          </div>
        </div>
      )}

      {/* Top Right HUD action buttons */}
      {!isCard && (
        <div 
          className={`absolute top-4 right-4 z-40 flex items-center gap-2 transition-opacity duration-300 ${
            hudVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={() => setPanelOpen(prev => !prev)}
            className={`flex items-center justify-center w-9 h-9 rounded-lg backdrop-blur-xl border transition-all duration-200 cursor-pointer ${
              panelOpen 
                ? 'bg-sky-500/10 border-sky-400/40 text-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.25)]' 
                : 'bg-neutral-900/60 border-white/10 text-neutral-300 hover:border-white/30 hover:bg-neutral-900/80'
            }`}
            aria-label="Toggle Control Panel"
            title="Toggle Control Settings (Space)"
          >
            <svg className={`w-[18px] h-[18px] transition-transform duration-300 ${panelOpen ? 'rotate-90 text-sky-400' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>

          <button
            onClick={toggleFullscreen}
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-900/60 backdrop-blur-xl border border-white/10 text-neutral-300 hover:border-white/30 hover:bg-neutral-900/80 transition-all duration-200 cursor-pointer"
            aria-label="Toggle Fullscreen"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? (
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M10 14l-7 7" />
              </svg>
            ) : (
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Settings Drawer Panel */}
      {isCard ? null :
        <div
          className={`absolute inset-x-4 bottom-4 z-40 bg-neutral-950/85 backdrop-blur-xl border border-white/10 rounded-2xl p-4 transition-all duration-300 shadow-2xl flex flex-col max-h-[85%] ${
            panelOpen && hudVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
          }`}
        >
        <div className="flex justify-between items-center border-b border-white/5 pb-2 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs text-sky-400">⚡</span>
            <span className="text-xs font-semibold text-white uppercase tracking-wider">Rain Control Center</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={resetToDefaults}
              className="text-[10px] text-neutral-400 hover:text-white px-2 py-0.5 rounded border border-white/5 bg-neutral-900/40 hover:bg-neutral-800 transition-colors duration-150 cursor-pointer"
            >
              Reset to Defaults
            </button>
            <button 
              onClick={() => setPanelOpen(false)}
              className="text-[11px] text-neutral-500 hover:text-white transition-colors duration-150 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable Contents */}
        <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3 mt-2 min-h-0 custom-scrollbar">
          {/* Sliders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Block - Count & Speeds */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-xs font-medium text-neutral-300">
                  <span>Rain Drops Intensity</span>
                  <span className="font-mono text-xs text-sky-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-white/5">
                    {density}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="600"
                  step="5"
                  value={density}
                  onChange={(e) => setDensity(Number(e.target.value))}
                  className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
              </div>

              <DualRangeSlider
                min={5.0}
                max={35.0}
                step={0.5}
                value={speed}
                onChange={setSpeed}
                label="Falling Velocity"
              />
            </div>

            {/* Right Block - Wind Vector slant & Rain Styles */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-xs font-medium text-neutral-300">
                  <span>Wind Slope (Angle)</span>
                  <span className="font-mono text-xs text-sky-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-white/5">
                    {wind.toFixed(1)}
                  </span>
                </div>
                <input
                  type="range"
                  min="-6.0"
                  max="6.0"
                  step="0.2"
                  value={wind}
                  onChange={(e) => setWind(Number(e.target.value))}
                  disabled={rainType === 'glass'}
                  className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-sky-400 disabled:opacity-40"
                />
              </div>

              {/* Split Switch for Streaks vs Wet Glass */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">Animation Mode</span>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <button
                    onClick={() => setRainType('streaks')}
                    className={`py-1.5 rounded-lg text-xs font-semibold cursor-pointer border transition-all duration-200 ${
                      rainType === 'streaks'
                        ? 'bg-sky-500/20 border-sky-400 text-sky-300'
                        : 'bg-neutral-900/40 border-white/5 text-neutral-450 hover:text-white'
                    }`}
                  >
                    🌧️ Active Rain Streaks
                  </button>
                  <button
                    onClick={() => setRainType('glass')}
                    className={`py-1.5 rounded-lg text-xs font-semibold cursor-pointer border transition-all duration-200 ${
                      rainType === 'glass'
                        ? 'bg-sky-500/20 border-sky-400 text-sky-300'
                        : 'bg-neutral-900/40 border-white/5 text-neutral-450 hover:text-white'
                    }`}
                  >
                    🪟 Raindrops on Glass
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Side-by-side controls for Color Tint & Sound */}
          <div className="border-t border-white/5 pt-3 mt-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Left Block - Color & Effects selections */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="streaksSplashes"
                    checked={splashesEnabled}
                    onChange={(e) => setSplashesEnabled(e.target.checked)}
                    disabled={rainType === 'glass'}
                    className="w-4 h-4 rounded border-neutral-700 bg-neutral-800 text-sky-500 checked:bg-sky-500 checked:border-sky-500 focus:ring-sky-500/20 focus:ring-2 cursor-pointer disabled:opacity-40"
                  />
                  <label 
                    htmlFor="streaksSplashes" 
                    className={`text-xs font-semibold text-neutral-300 cursor-pointer select-none ${
                      rainType === 'glass' ? 'opacity-45 cursor-not-allowed' : ''
                    }`}
                  >
                    💦 Floor Splashes
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="thunderEnabled"
                    checked={thunderEnabled}
                    onChange={(e) => setThunderEnabled(e.target.checked)}
                    className="w-4 h-4 rounded border-neutral-700 bg-neutral-800 text-sky-500 checked:bg-sky-500 checked:border-sky-500 focus:ring-sky-500/20 focus:ring-2 cursor-pointer"
                  />
                  <label 
                    htmlFor="thunderEnabled" 
                    className="text-xs font-semibold text-neutral-300 cursor-pointer select-none"
                  >
                    ⚡ Ambient Lightning
                  </label>
                </div>
              </div>

              {thunderEnabled && (
                <div className="flex flex-col gap-1.5 bg-sky-950/20 rounded-xl p-3 border border-sky-500/10 animate-fadeIn">
                  <div className="flex justify-between items-center text-[10px] text-neutral-300">
                    <span className="flex items-center gap-1">⚡ Lightning Flash Interval</span>
                    <span className="font-mono text-sky-400 bg-neutral-900/60 px-1.5 py-0.5 rounded border border-white/5">
                      every ~{thunderInterval}s
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    step="5"
                    value={thunderInterval}
                    onChange={(e) => setThunderInterval(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-sky-450"
                  />
                </div>
              )}

              <div className="flex flex-col gap-2 bg-white/5 rounded-xl p-3 border border-white/5 animate-fadeIn">
                <span className="text-[11px] font-semibold text-neutral-350 uppercase tracking-wider">Select Glow/Color Preset</span>
                <div className="flex flex-wrap gap-2 mt-1 justify-start">
                  {AESTHETIC_RAIN_COLORS.map((item) => (
                    <button
                      key={item.value}
                      onClick={() => setColor(item.value)}
                      className={`h-7 w-7 rounded-full border flex items-center justify-center transition-all duration-150 relative group cursor-pointer ${
                        color === item.value 
                          ? 'border-sky-400 scale-110 shadow-[0_0_10px_rgba(56,189,248,0.5)]' 
                          : 'border-white/10 hover:border-white/30 hover:scale-105'
                      }`}
                      style={{ backgroundColor: item.value }}
                      title={item.name}
                    >
                      {color === item.value && (
                        <span className="text-shadow-sm font-bold text-[9px] drop-shadow-md text-neutral-900">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Block - Audio BGM managers */}
            <div className="flex flex-col gap-2 bg-white/5 rounded-xl p-3 border border-white/5 lg:mt-7 mt-1 h-full justify-center">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-semibold text-neutral-300 uppercase tracking-wider">Ambient Soundtrack</span>
                {audioFiles.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setBgmPlaying(!bgmPlaying)}
                    disabled={selectedBgm === 'none'}
                    className={`px-2.5 py-0.5 rounded-md text-[9px] font-semibold uppercase tracking-wider border flex items-center gap-1 transition-all duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
                      bgmPlaying 
                        ? 'bg-sky-500/20 border-sky-400 text-sky-300 shadow-[0_0_8px_rgba(56,189,248,0.25)]' 
                        : 'bg-neutral-800 border-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {bgmPlaying ? 'Playing' : 'Muted'}
                  </button>
                )}
              </div>

              {audioFiles.length === 0 ? (
                <div className="text-[10px] text-neutral-500 italic pb-1">No ambient files placed in backgrounds/bgm folder.</div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1.5">
                  <div className="flex flex-col gap-1">
                    <select
                      value={selectedBgm}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSelectedBgm(val);
                        if (val !== 'none') {
                          setBgmPlaying(true);
                        } else {
                          setBgmPlaying(false);
                        }
                      }}
                      className="bg-neutral-900 border border-white/10 text-xs text-white rounded-lg p-2 outline-none focus:border-sky-400 cursor-pointer"
                    >
                      <option value="none">Mute / No Sound</option>
                      {audioFiles.map((bgm, idx) => (
                        <option key={bgm} value={bgm}>
                          🎵 {formatAudioName(bgm)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* BGM Volume */}
                  <div className="flex flex-col gap-1 justify-center">
                    <div className="flex justify-between items-center text-[10px] text-neutral-400">
                      <span>Sound Volume</span>
                      <span className="font-mono text-sky-450">{Math.round(bgmVolume * 100)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.0"
                      max="1.0"
                      step="0.05"
                      value={bgmVolume}
                      onChange={(e) => setBgmVolume(Number(e.target.value))}
                      disabled={selectedBgm === 'none' || !bgmPlaying}
                      className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-sky-400 disabled:opacity-40"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Dynamic Background Image Scene Selector */}
          <div className="border-t border-white/5 pt-3 mt-1 flex flex-col gap-2">
            <span className="text-[11px] font-semibold text-neutral-350 uppercase tracking-wider">Select Background Scene</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1">
              {bgList.map((bg, idx) => (
                <button
                  key={bg}
                  onClick={() => setSelectedBg(bg)}
                  className={`relative h-14 rounded-lg overflow-hidden border transition-all duration-200 group cursor-pointer ${
                    selectedBg === bg 
                      ? 'border-sky-400 scale-102 shadow-[0_0_8px_rgba(56,189,248,0.3)]' 
                      : 'border-white/10 hover:border-white/35 hover:scale-101'
                  }`}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url("${encodeURI(bg)}")` }}
                  />
                  {selectedBg === bg && (
                    <div className="absolute top-1.5 right-1.5 h-4 w-4 rounded-full bg-sky-500 flex items-center justify-center border border-white/20 shadow-md">
                      <span className="text-[9px] font-bold text-white">✓</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Footnote Keyboard hints */}
          <div className="text-[10px] text-neutral-555 border-t border-white/5 pt-2 flex flex-wrap gap-x-4 gap-y-1">
            <span>⌨️ Press <strong className="text-neutral-300">F</strong> for Fullscreen</span>
            <span>• Space to Toggle Settings</span>
            <span>• <strong className="text-neutral-305">M</strong> to Toggle Sound Mode</span>
            <span>• <strong className="text-neutral-305">R</strong> to Reset defaults</span>
          </div>
        </div>
      </div>}
    </div>
  );
}
