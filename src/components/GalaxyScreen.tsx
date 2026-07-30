import React, { useRef, useEffect, useState } from 'react';
import type { Tool } from '../data/tools';
import type { Locale } from '../data/locales';

interface GalaxyScreenProps {
  tool: Tool;
  locale: Locale;
  ambientAudioFiles?: string[];
  isCard?: boolean;
}

interface GalaxyTheme {
  name: string;
  id: string;
  coreColor: string;
  arm1Color: string; // Inner arm color (young stars)
  arm2Color: string; // Outer arm color
  dustColor: string; // Interstellar dust lanes
  nebulaGlow: string; // Background soft cloud
}

const GALAXY_THEMES: GalaxyTheme[] = [
  {
    name: 'Andromeda Blue',
    id: 'andromeda',
    coreColor: '#fffaed', // warm pale white
    arm1Color: '#60a5fa', // bright blue
    arm2Color: '#3b82f6', // deep blue
    dustColor: 'rgba(68, 64, 60, 0.45)', // dark brownish stone
    nebulaGlow: 'rgba(29, 78, 216, 0.12)' // deep royal nebula
  },
  {
    name: 'Cosmic Amber',
    id: 'cosmic',
    coreColor: '#ffffff',
    arm1Color: '#f59e0b', // warm gold
    arm2Color: '#ef4444', // stellar red
    dustColor: 'rgba(41, 37, 36, 0.5)', // dark organic charcoal
    nebulaGlow: 'rgba(180, 83, 9, 0.1)' // faint amber halo
  },
  {
    name: 'Orion Purple',
    id: 'orion',
    coreColor: '#fff7ed',
    arm1Color: '#d946ef', // magenta
    arm2Color: '#a855f7', // violet
    dustColor: 'rgba(24, 24, 27, 0.5)', // sleek space black dust
    nebulaGlow: 'rgba(109, 40, 217, 0.12)' // violet nebula
  },
  {
    name: 'Ghostly Teal',
    id: 'ghostly',
    coreColor: '#f0fdfa',
    arm1Color: '#2dd4bf', // teal
    arm2Color: '#0d9488', // emerald
    dustColor: 'rgba(12, 10, 9, 0.45)',
    nebulaGlow: 'rgba(15, 118, 110, 0.1)'
  },
  {
    name: 'OLED Monochrome',
    id: 'monochrome',
    coreColor: '#ffffff',
    arm1Color: '#e4e4e7', // silver
    arm2Color: '#a1a1aa', // zinc
    dustColor: 'rgba(9, 9, 11, 0.6)', // absolute pitch dust
    nebulaGlow: 'rgba(255, 255, 255, 0.02)'
  }
];

export default function GalaxyScreen({ tool, locale, ambientAudioFiles = [], isCard = false }: GalaxyScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  // UI States
  const [panelOpen, setPanelOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hudVisible, setHudVisible] = useState(true);

  // Galaxy customizer configurations
  const [starCount, setStarCount] = useState(isCard ? 2000 : 6000);
  const [rotationSpeed, setRotationSpeed] = useState(0.4); // multiplier
  const [tiltAngle, setTiltAngle] = useState(62); // degrees
  const [coreIntensity, setCoreIntensity] = useState(0.85); // multiplier
  const [selectedTheme, setSelectedTheme] = useState<GalaxyTheme>(GALAXY_THEMES[0]);
  const [gravityLensing, setGravityLensing] = useState(true);

  // Audio BGM states
  const audioList = ambientAudioFiles.length > 0 ? ambientAudioFiles : [
    '/assets/ambient-screen/bgm/apalonbeats-ambient-ambient-music-549447.mp3',
    '/assets/ambient-screen/bgm/samuelfjohanns-uplifting-pad-texture-113842.mp3'
  ];
  const [selectedBgm, setSelectedBgm] = useState<string>('none');
  const [bgmPlaying, setBgmPlaying] = useState(false);
  const [bgmVolume, setBgmVolume] = useState(0.4);

  // Interactive mouse position tracking
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  // Fullscreen implementation
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      setHudVisible(true);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const resetToDefaults = () => {
    setStarCount(6000);
    setRotationSpeed(0.4);
    setTiltAngle(62);
    setCoreIntensity(0.85);
    setSelectedTheme(GALAXY_THEMES[0]);
    setGravityLensing(true);
    setSelectedBgm('none');
    setBgmPlaying(false);
    setBgmVolume(0.4);
  };

  // Keyboard shortcut actions
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
  }, [selectedBgm]);

  // Audio Engine Lifecycle
  useEffect(() => {
    if (isCard) return;
    if (selectedBgm === 'none') {
      audioRef.current?.pause();
      return;
    }
    if (!audioRef.current) {
      audioRef.current = new Audio(selectedBgm);
      audioRef.current.loop = true;
    } else if (audioRef.current.src !== window.location.origin + selectedBgm) {
      audioRef.current.pause();
      audioRef.current.src = selectedBgm;
      if (bgmPlaying) audioRef.current.play().catch(() => {});
    }

    audioRef.current.volume = bgmVolume;
    if (bgmPlaying) {
      audioRef.current.play().catch(() => setBgmPlaying(false));
    } else {
      audioRef.current.pause();
    }

    return () => audioRef.current?.pause();
  }, [selectedBgm, bgmPlaying, bgmVolume, isCard]);

  // Cursor HUD Hide logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setHudVisible(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    // Track canvas coordinate matching for mouse lensing
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) * (canvas.width / rect.width);
      mouseRef.current.y = (e.clientY - rect.top) * (canvas.height / rect.height);
      mouseRef.current.active = true;
    }

    timeoutRef.current = window.setTimeout(() => {
      if (isFullscreen) {
        setHudVisible(false);
      }
    }, 4500);
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isFullscreen]);

  // Core Simulation Math and Drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 800;
    let height = 480;

    // Realistic Star Particle class
    interface Star {
      r: number; // orbital radius
      baseAngle: number; // initial radial angle
      armOffset: number; // spiral arm curve modifier
      z: number; // height offset in disk
      size: number;
      speed: number;
      type: 'bulge' | 'arm' | 'dust';
      brightness: number;
      glowIntensity: number;
    }

    const stars: Star[] = [];

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
      
      // Scale star vectors if size changes
      stars.forEach(star => {
        if (oldWidth > 10 && oldHeight > 10) {
          const ratio = Math.min(width / oldWidth, height / oldHeight);
          star.r *= ratio;
        }
      });
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

    // Generate Galaxy structure
    const generateGalaxy = () => {
      stars.length = 0;
      const maxRadius = Math.min(width, height) * 0.45;
      const bulgeCount = Math.floor(starCount * 0.35); // 35% in dense core
      const armCount = starCount - bulgeCount;

      // 1. Bulge generation (spherical/elliptical cluster)
      for (let i = 0; i < bulgeCount; i++) {
        // Gaussian distribution for realistic star cluster density
        const u1 = Math.random() || 0.0001;
        const u2 = Math.random();
        const randGeo = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
        
        const r = Math.abs(randGeo * (maxRadius * 0.15));
        const baseAngle = Math.random() * Math.PI * 2;
        const z = (Math.random() - 0.5) * (maxRadius * 0.12) * (1 - r / (maxRadius * 0.3));

        stars.push({
          r,
          baseAngle,
          armOffset: 0,
          z,
          size: 0.6 + Math.random() * 1.4,
          speed: 1.0, 
          type: 'bulge',
          brightness: 0.4 + Math.random() * 0.6,
          glowIntensity: Math.random() > 0.85 ? Math.random() * 1.5 : 0
        });
      }

      // 2. Spiral arms & Dust lane particles
      const numArms = 2;
      const armThetaFactor = 2.4; // spiral arm wind factor

      for (let i = 0; i < armCount; i++) {
        // Distribute stars outwards
        const progress = Math.random();
        const r = progress * maxRadius;
        
        // Pick an arm index
        const armIndex = i % numArms;
        const armAngle = (armIndex * 2 * Math.PI) / numArms;

        // Spiral angle based on distance (Logarithmic spiral behavior)
        const spiralAngle = r * (0.0125 * armThetaFactor);
        
        // Gaussian spread around the arm vector, widening towards outer edge
        const u1 = Math.random() || 0.0001;
        const u2 = Math.random();
        const spread = (Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2)) * (0.15 + progress * 0.3);

        const baseAngle = armAngle + spiralAngle + spread;
        const z = (Math.random() - 0.5) * (maxRadius * 0.05) * (1 - progress * 0.7);

        // Decide if it is interstellar dust lane or star
        const isDust = i % 8 === 0 && r > maxRadius * 0.18 && r < maxRadius * 0.8;

        stars.push({
          r,
          baseAngle,
          armOffset: spiralAngle,
          z,
          size: isDust ? 6 + Math.random() * 12 : 0.8 + Math.random() * 1.8,
          speed: 1.0,
          type: isDust ? 'dust' : 'arm',
          brightness: isDust ? 0.08 + Math.random() * 0.06 : 0.3 + Math.random() * 0.7,
          glowIntensity: !isDust && Math.random() > 0.9 ? Math.random() * 2.0 : 0
        });
      }
    };

    generateGalaxy();

    // Rotational angles
    let globalAngle = 0;
    const tiltRad = (tiltAngle * Math.PI) / 180;
    const tiltCos = Math.cos(tiltRad);
    const tiltSin = Math.sin(tiltRad);

    // Orientation tilt (slanted at 28 degrees visually)
    const orientRad = (-28 * Math.PI) / 180;
    const orientCos = Math.cos(orientRad);
    const orientSin = Math.sin(orientRad);

    const tick = () => {
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, width, height);

      // 1. Render soft cosmic background nebula glow
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.scale(1, tiltCos); // squashed by vertical tilt aspect
      ctx.rotate(orientRad);

      const grad = ctx.createRadialGradient(
        0, 0, 5,
        0, 0, Math.max(width, height) * 0.45
      );
      grad.addColorStop(0, selectedTheme.nebulaGlow.replace('0.12', '0.24').replace('0.1', '0.2'));
      grad.addColorStop(0.3, selectedTheme.nebulaGlow);
      grad.addColorStop(0.7, selectedTheme.nebulaGlow.replace('0.12', '0.04').replace('0.1', '0.03'));
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = grad;
      ctx.fillRect(-width, -height, width * 2, height * 2);
      ctx.restore();

      // 2. Draw central galactic core glow
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.scale(1, tiltCos);
      ctx.rotate(orientRad);

      const coreGrad = ctx.createRadialGradient(
        0, 0, 0,
        0, 0, Math.min(width, height) * 0.12
      );
      coreGrad.addColorStop(0, `rgba(255, 250, 240, ${0.85 * coreIntensity})`);
      coreGrad.addColorStop(0.2, `rgba(255, 226, 172, ${0.6 * coreIntensity})`);
      coreGrad.addColorStop(0.5, `rgba(253, 186, 116, ${0.28 * coreIntensity})`);
      coreGrad.addColorStop(1, 'rgba(0,0,0,0)');
      
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(width, height) * 0.12, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 3. Render stars and dust particles
      globalAngle += 0.0035 * rotationSpeed;

      // Mouse lensing physics constants
      const mState = mouseRef.current;
      const lensStrength = 550;
      const lensRadiusSq = 75 * 75;
      const eventHorizon = 12;

      stars.forEach((star, index) => {
        // Calculate dynamic rotation angle based on flat spiral rotation model
        // Inner bulge spins faster, outer arms spin at uniform orbital speed
        const orbitalPeriod = rotationSpeed * (0.015 / (1.0 + star.r * 0.0055));
        star.baseAngle += orbitalPeriod;

        // Determine 3D coordinates based on galaxy rotation plane
        const xVal = star.r * Math.cos(star.baseAngle);
        const yVal = star.r * Math.sin(star.baseAngle);

        // Project coordinate with 3D inclination tilt (X-axis rotate)
        const projX = xVal;
        const projY = yVal * tiltCos - star.z * tiltSin;

        // Apply 2D layout alignment rotation (screen orientation)
        const finalX = width / 2 + (projX * orientCos - projY * orientSin);
        const finalY = height / 2 + (projX * orientSin + projY * orientCos);

        // Render point properties
        let renderX = finalX;
        let renderY = finalY;

        // Gravitational lensing physics model
        if (gravityLensing && mState.active) {
          const dx = finalX - mState.x;
          const dy = finalY - mState.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < lensRadiusSq) {
            const dist = Math.sqrt(distSq);
            if (dist < eventHorizon) {
              return; // light swallowed inside event horizon black hole
            }
            // Deflected light vector projection (Einstein ring simulation)
            const bend = lensStrength / (dist + 3.0);
            renderX = mState.x + dx * (1 + bend / dist);
            renderY = mState.y + dy * (1 + bend / dist);
          }
        }

        // Draw star or dust based on element type
        if (star.type === 'dust') {
          // Render dark obscuring dust cloud lane
          ctx.beginPath();
          ctx.arc(renderX, renderY, star.size, 0, Math.PI * 2);
          ctx.fillStyle = selectedTheme.dustColor;
          ctx.globalAlpha = star.brightness;
          ctx.fill();
        } else {
          // Twinkle logic
          star.brightness += (Math.random() - 0.5) * 0.02;
          star.brightness = Math.min(Math.max(star.brightness, 0.28), 0.95);

          ctx.beginPath();
          ctx.arc(renderX, renderY, star.size, 0, Math.PI * 2);
          
          // Color channel assignment based on category
          if (star.type === 'bulge') {
            ctx.fillStyle = `${selectedTheme.coreColor}`;
          } else {
            // arms are mixtures of blue stars and gas glows
            ctx.fillStyle = star.r > Math.min(width, height) * 0.28 
              ? selectedTheme.arm2Color 
              : selectedTheme.arm1Color;
          }

          ctx.globalAlpha = star.brightness;

          // Glowing star flare enhancement (larger stars)
          if (star.glowIntensity > 0) {
            ctx.shadowBlur = star.size * 3.5;
            ctx.shadowColor = ctx.fillStyle;
            ctx.fill();
            ctx.shadowBlur = 0; // reset
          } else {
            ctx.fill();
          }
        }
      });

      // 4. Render interactive black hole event horizon silhouette
      if (gravityLensing && mState.active) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(mState.x, mState.y, eventHorizon, 0, Math.PI * 2);
        ctx.fillStyle = '#000000';
        ctx.fill();
        // Accretion light ring
        ctx.beginPath();
        ctx.arc(mState.x, mState.y, eventHorizon + 1.8, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 235, 185, 0.45)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.restore();
      }

      ctx.globalAlpha = 1.0;
      animId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(animId);
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', resize);
      }
    };
  }, [starCount, rotationSpeed, tiltAngle, coreIntensity, selectedTheme, gravityLensing]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`galaxy-container relative w-full overflow-hidden transition-all duration-300 select-none ${
        isCard ? 'w-full h-full pointer-events-none' : 'h-[480px] rounded-2xl shadow-2xl'
      } ${
        isFullscreen ? 'is-fullscreen h-screen! w-screen! fixed! inset-0 z-99999 rounded-none!' : ''
      }`}
      style={{ backgroundColor: '#020617', cursor: hudVisible ? 'default' : 'none' }}
    >
      {/* Background stars canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Screen Title & HUD Header */}
      {!isCard && (
        <div 
          className={`absolute top-4 left-4 z-40 flex items-center gap-3 transition-opacity duration-300 pointer-events-none ${
            hudVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-8 w-8 rounded-lg bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 flex items-center justify-center">
            <svg className="w-[18px] h-[18px] text-indigo-400/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide leading-tight">Cosmogony</h3>
            <p className="text-[10px] text-gray-400 tracking-wider">REALISTIC GALAXY SIMULATION</p>
          </div>
        </div>
      )}

      {/* Control Action Buttons (Top Right) */}
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
                ? 'bg-indigo-500/10 border-indigo-400/40 text-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.25)]' 
                : 'bg-neutral-900/60 border-white/10 text-neutral-300 hover:border-white/30 hover:bg-neutral-900/80'
            }`}
            aria-label="Toggle Control Center"
            title="Toggle Controls (Space)"
          >
            <svg className={`w-[18px] h-[18px] transition-transform duration-300 ${panelOpen ? 'rotate-90 text-indigo-400' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
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
                <path d="M4 14h6v6M20 10h-6V4" />
              </svg>
            ) : (
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Control Drawer Center */}
      {isCard ? null :
        <div
          className={`absolute inset-x-4 bottom-4 z-40 bg-neutral-950/85 backdrop-blur-xl border border-white/10 rounded-2xl p-4 transition-all duration-300 shadow-2xl flex flex-col max-h-[85%] ${
            panelOpen && hudVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
          }`}
        >
        <div className="flex justify-between items-center border-b border-white/5 pb-2 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs text-indigo-400">🌌</span>
            <span className="text-xs font-semibold text-white uppercase tracking-wider">Galaxy Customization Panel</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={resetToDefaults}
              className="text-[10px] text-neutral-400 hover:text-white px-2 py-0.5 rounded border border-white/5 bg-neutral-900/40 hover:bg-neutral-800 transition-colors duration-150 cursor-pointer"
            >
              Reset Defaults
            </button>
            <button 
              onClick={() => setPanelOpen(false)}
              className="text-[11px] text-neutral-500 hover:text-white transition-colors duration-150 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Configurations Layout scroll block */}
        <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-4 mt-3 min-h-0 custom-scrollbar">
          {/* Main settings grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left side slider column */}
            <div className="flex flex-col gap-3.5">
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-xs font-medium text-neutral-300">
                  <span>Star Cluster Density</span>
                  <span className="font-mono text-xs text-indigo-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-white/5">
                    {starCount}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="12000"
                  step="500"
                  value={starCount}
                  onChange={(e) => setStarCount(Number(e.target.value))}
                  className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-xs font-medium text-neutral-300">
                  <span>Rotation Velocity</span>
                  <span className="font-mono text-xs text-indigo-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-white/5">
                    {rotationSpeed.toFixed(1)}x
                  </span>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="1.5"
                  step="0.1"
                  value={rotationSpeed}
                  onChange={(e) => setRotationSpeed(Number(e.target.value))}
                  className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-xs font-medium text-neutral-300">
                  <span>Inclination Tilt (3D Angle)</span>
                  <span className="font-mono text-xs text-indigo-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-white/5">
                    {tiltAngle}°
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="85"
                  step="2"
                  value={tiltAngle}
                  onChange={(e) => setTiltAngle(Number(e.target.value))}
                  className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>
            </div>

            {/* Right side slider column */}
            <div className="flex flex-col gap-3.5">
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-xs font-medium text-neutral-300">
                  <span>Core Glow Intensity</span>
                  <span className="font-mono text-xs text-indigo-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-white/5">
                    {coreIntensity.toFixed(2)}x
                  </span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="2.0"
                  step="0.05"
                  value={coreIntensity}
                  onChange={(e) => setCoreIntensity(Number(e.target.value))}
                  className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              {/* Gravity lensing black hole toggle */}
              <div className="flex justify-between items-center p-2 rounded-xl bg-neutral-900/40 border border-white/5">
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-medium text-neutral-300">Space Lensing Black Hole</span>
                  <span className="text-[10px] text-neutral-500 mt-0.5">Mouse simulates massive body gravity distortion</span>
                </div>
                <button
                  onClick={() => setGravityLensing(g => !g)}
                  className={`w-9 h-5 rounded-full relative transition-colors duration-200 focus:outline-none cursor-pointer ${
                    gravityLensing ? 'bg-indigo-500' : 'bg-neutral-800'
                  }`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-200 ${
                    gravityLensing ? 'translate-x-4' : 'translate-x-0'
                  }`} />
                </button>
              </div>

              {/* Sound volume slider */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-xs font-medium text-neutral-300">
                  <span>Sound Volume</span>
                  <span className="font-mono text-xs text-indigo-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-white/5">
                    {Math.round(bgmVolume * 100)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1.0"
                  step="0.05"
                  value={bgmVolume}
                  onChange={(e) => setBgmVolume(Number(e.target.value))}
                  disabled={selectedBgm === 'none'}
                  className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 disabled:opacity-30"
                />
              </div>
            </div>
          </div>

          {/* Theme options selection */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-neutral-300 tracking-wider">Galaxy Constellation Presets</span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {GALAXY_THEMES.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme)}
                  className={`px-2 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 cursor-pointer ${
                    selectedTheme.id === theme.id
                      ? 'bg-indigo-500/10 border-indigo-400 text-indigo-300'
                      : 'bg-neutral-900/50 border-white/5 text-neutral-400 hover:text-neutral-200 hover:border-white/20'
                  }`}
                >
                  {theme.name}
                </button>
              ))}
            </div>
          </div>

          {/* Audio stream selection */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-neutral-300 tracking-wider">Space Soundscape Audio</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setSelectedBgm('none'); setBgmPlaying(false); }}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 cursor-pointer ${
                  selectedBgm === 'none'
                    ? 'bg-red-500/10 border-red-500/40 text-red-400'
                    : 'bg-neutral-900/50 border-white/5 text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Mute Audio
              </button>
              {audioList.map((bgm, idx) => {
                const isSelected = selectedBgm === bgm;
                const trackName = bgm.split('/').pop()?.split('-')[0] || `Ambient Pad ${idx + 1}`;
                return (
                  <button
                    key={bgm}
                    onClick={() => { setSelectedBgm(bgm); setBgmPlaying(true); }}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-500/10 border-indigo-400 text-indigo-300'
                        : 'bg-neutral-900/50 border-white/5 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    <span>{isSelected && bgmPlaying ? '🔊' : '📁'}</span>
                    <span className="capitalize">{trackName}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}
