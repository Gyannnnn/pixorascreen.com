import React, { useState, useEffect, useRef } from 'react';
import type { Tool } from '../data/tools';
import type { Locale } from '../data/locales';

interface Props {
  tool: Tool;
  locale: Locale;
  aquariumAudioFiles: string[];
  isCard?: boolean;
}

interface Fish {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  type: 'clown' | 'tang' | 'butterfly' | 'betta';
  color: string;
  accentColor: string;
  wiggleSpeed: number;
  wigglePhase: number;
  targetX: number;
  targetY: number;
  mouthOpen: boolean;
}

interface Bubble {
  x: number;
  y: number;
  r: number;
  speed: number;
  wobbleSpeed: number;
  wobbleRange: number;
  wobblePhase: number;
}

interface Food {
  x: number;
  y: number;
  speed: number;
}

const PRESETS = [
  { id: 'lagoon', name: 'Lagoon Turquoise', bgGrad: 'linear-gradient(to bottom, #115e59, #075985, #0f172a)' },
  { id: 'deepreef', name: 'Deep Sea Reef', bgGrad: 'linear-gradient(to bottom, #0c4a6e, #082f49, #020617)' },
  { id: 'trench', name: 'Abyssal Zone', bgGrad: 'linear-gradient(to bottom, #1e1b4b, #0f172a, #020617)' },
  { id: 'sunset', name: 'Coral Sunset', bgGrad: 'linear-gradient(to bottom, #701a75, #4a044e, #0f172a)' },
];

export default function AquariumScreen({ tool, locale, aquariumAudioFiles, isCard = false }: Props) {
  const [showSettings, setShowSettings] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedBg, setSelectedBg] = useState(PRESETS[0]);
  const [fishCount, setFishCount] = useState(isCard ? 5 : 12);
  const [fishSpeed, setFishSpeed] = useState(1.0);
  const [bubbleDensity, setBubbleDensity] = useState(isCard ? 10 : 25);
  const [breathePhase, setBreathePhase] = useState<'inhale' | 'hold1' | 'exhale' | 'hold2'>('inhale');
  const [breatheSeconds, setBreatheSeconds] = useState(4);
  const [overlayMode, setOverlayMode] = useState<'none' | 'clock' | 'breathing' | 'timer'>('clock');
  
  // Timer States
  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [pomoPreset, setPomoPreset] = useState(25);

  // Audio States
  const [isDroneOn, setIsDroneOn] = useState(false);
  const [isBubblesSynthOn, setIsBubblesSynthOn] = useState(false);
  const [volDrone, setVolDrone] = useState(0.4);
  const [volBubbles, setVolBubbles] = useState(0.3);
  const [activeCustomAudios, setActiveCustomAudios] = useState<Record<string, boolean>>({});
  const [customAudiosVolume, setCustomAudiosVolume] = useState<Record<string, number>>({});
  const [isIdle, setIsIdle] = useState(false);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, clickX: -1000, clickY: -1000, action: 'feed' });
  const idleTimeoutRef = useRef<number | null>(null);

  // Synth Refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const droneOsc1Ref = useRef<OscillatorNode | null>(null);
  const droneOsc2Ref = useRef<OscillatorNode | null>(null);
  const droneFilterRef = useRef<BiquadFilterNode | null>(null);
  const droneGainRef = useRef<GainNode | null>(null);
  const bubbleIntervalRef = useRef<number | null>(null);
  const customAudioInstancesRef = useRef<Record<string, HTMLAudioElement>>({});

  const [time, setTime] = useState(new Date());

  // Update Clock Time
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Idle status mouse hiding
  const resetIdleTimer = () => {
    setIsIdle(false);
    if (idleTimeoutRef.current) window.clearTimeout(idleTimeoutRef.current);
    idleTimeoutRef.current = window.setTimeout(() => {
      setIsIdle(true);
    }, 4000);
  };

  useEffect(() => {
    window.addEventListener('mousemove', resetIdleTimer);
    return () => {
      window.removeEventListener('mousemove', resetIdleTimer);
      if (idleTimeoutRef.current) window.clearTimeout(idleTimeoutRef.current);
    };
  }, []);

  // Guided Breathing Loop (4-4-4-4 Box Breathing)
  useEffect(() => {
    if (overlayMode !== 'breathing') return;
    const interval = setInterval(() => {
      setBreatheSeconds((sec) => {
        if (sec <= 1) {
          setBreathePhase((phase) => {
            if (phase === 'inhale') return 'hold1';
            if (phase === 'hold1') return 'exhale';
            if (phase === 'exhale') return 'hold2';
            return 'inhale';
          });
          return 4;
        }
        return sec - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [overlayMode]);

  // Focus Pomodoro Timer Loop
  useEffect(() => {
    if (!timerRunning || overlayMode !== 'timer') return;
    const interval = setInterval(() => {
      setTimerSeconds((sec) => {
        if (sec <= 0) {
          setTimerMinutes((min) => {
            if (min <= 0) {
              setTimerRunning(false);
              try {
                // Play soft chime
                const ctx = initAudioCtx();
                if (ctx) {
                  const osc = ctx.createOscillator();
                  const gain = ctx.createGain();
                  osc.type = 'sine';
                  osc.frequency.setValueAtTime(523.25, ctx.currentTime);
                  gain.gain.setValueAtTime(0.2, ctx.currentTime);
                  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
                  osc.connect(gain);
                  gain.connect(ctx.destination);
                  osc.start();
                  osc.stop(ctx.currentTime + 1.6);
                }
              } catch (e) {}
              return pomoPreset;
            }
            return min - 1;
          });
          return 59;
        }
        return sec - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerRunning, overlayMode, pomoPreset]);

  // Audio Context Lazily Initializer
  const initAudioCtx = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Synthesize Ocean Rumble Drone
  useEffect(() => {
    if (isDroneOn) {
      const ctx = initAudioCtx();
      if (!ctx) return;

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(45, ctx.currentTime); // low sub base
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(45.5, ctx.currentTime); // stereo beat freq

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(75, ctx.currentTime);
      filter.Q.setValueAtTime(3.0, ctx.currentTime);

      gain.gain.setValueAtTime(volDrone * 0.18, ctx.currentTime);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();

      droneOsc1Ref.current = osc1;
      droneOsc2Ref.current = osc2;
      droneFilterRef.current = filter;
      droneGainRef.current = gain;

      // Slow resonant filter swept LFO simulation
      let direction = 1;
      let val = 75;
      const filterLfo = window.setInterval(() => {
        val += direction * 0.4;
        if (val > 105 || val < 65) direction *= -1;
        try {
          filter.frequency.setValueAtTime(val, ctx.currentTime);
        } catch (e) {}
      }, 50);

      return () => {
        clearInterval(filterLfo);
        try {
          osc1.stop();
          osc2.stop();
        } catch (e) {}
      };
    } else {
      try {
        droneOsc1Ref.current?.stop();
        droneOsc2Ref.current?.stop();
      } catch (e) {}
    }
  }, [isDroneOn]);

  useEffect(() => {
    if (droneGainRef.current && audioCtxRef.current) {
      droneGainRef.current.gain.setValueAtTime(volDrone * 0.18, audioCtxRef.current.currentTime);
    }
  }, [volDrone]);

  // Synthesize Aquatic Bubble Gurgles
  useEffect(() => {
    if (isBubblesSynthOn) {
      const ctx = initAudioCtx();
      if (!ctx) return;

      const triggerBubblePop = () => {
        if (!isBubblesSynthOn) return;
        try {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          
          osc.type = 'sine';
          const baseFreq = 180 + Math.random() * 260;
          osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
          // Bubble sound: sweep frequency rapidly upwards
          osc.frequency.exponentialRampToValueAtTime(baseFreq * 2.8, ctx.currentTime + 0.15);

          gain.gain.setValueAtTime(volBubbles * 0.05, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);

          osc.connect(gain);
          gain.connect(ctx.destination);
          
          osc.start();
          osc.stop(ctx.currentTime + 0.2);
        } catch (e) {}
      };

      bubbleIntervalRef.current = window.setInterval(() => {
        if (Math.random() < 0.65) {
          triggerBubblePop();
        }
      }, 350);

      return () => {
        if (bubbleIntervalRef.current) {
          clearInterval(bubbleIntervalRef.current);
          bubbleIntervalRef.current = null;
        }
      };
    }
  }, [isBubblesSynthOn, volBubbles]);

  // Native Custom Soundscapes engine
  useEffect(() => {
    if (isCard || !aquariumAudioFiles) return;

    aquariumAudioFiles.forEach((file) => {
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

  }, [aquariumAudioFiles, activeCustomAudios, customAudiosVolume, isCard]);

  // Cleanup music elements on unmount
  useEffect(() => {
    return () => {
      Object.values(customAudioInstancesRef.current).forEach((audio) => {
        try {
          audio.pause();
        } catch (e) {}
      });
      try {
        droneOsc1Ref.current?.stop();
        droneOsc2Ref.current?.stop();
        if (bubbleIntervalRef.current) clearInterval(bubbleIntervalRef.current);
      } catch (e) {}
    };
  }, []);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName;
      if (activeTag === 'INPUT' || activeTag === 'SELECT' || activeTag === 'TEXTAREA') return;

      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        setShowSettings((s) => !s);
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key.toLowerCase() === 'c') {
        e.preventDefault();
        setOverlayMode((m) => (m === 'clock' ? 'none' : 'clock'));
      } else if (e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setOverlayMode((m) => (m === 'breathing' ? 'none' : 'breathing'));
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  // Fullscreen helper
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.error('Fullscreen request rejected:', err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Main Canvas Ecological Render loop logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 800;
    let height = 480;

    const handleResize = () => {
      if (!canvas) return;
      if (isCard && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth || 320;
        height = canvas.height = canvas.parentElement.clientHeight || 200;
      } else {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
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

    // Dynamic Lists
    const fishList: Fish[] = [];
    const bubblesList: Bubble[] = [];
    const foodList: Food[] = [];

    // Plankton micro-particles list
    const planktonList: { x: number; y: number; r: number; speedY: number; speedX: number; phase: number }[] = [];
    for (let i = 0; i < 45; i++) {
      planktonList.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.8 + Math.random() * 1.5,
        speedY: -(0.08 + Math.random() * 0.18),
        speedX: (Math.random() - 0.5) * 0.12,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Helper to generate fish
    const fishColors = [
      { type: 'clown', color: '#ff7a00', accent: '#ffffff' },
      { type: 'tang', color: '#2563eb', accent: '#facc15' },
      { type: 'butterfly', color: '#facc15', accent: '#1e293b' },
      { type: 'betta', color: '#db2777', accent: '#a21caf' },
    ] as const;

    const spawnFish = (count: number) => {
      fishList.length = 0;
      for (let i = 0; i < count; i++) {
        const choice = fishColors[i % fishColors.length];
        fishList.push({
          x: Math.random() * width,
          y: 80 + Math.random() * (height - 200),
          vx: (Math.random() - 0.5) * 2.5,
          vy: (Math.random() - 0.5) * 1.0,
          size: 20 + Math.random() * 22,
          type: choice.type,
          color: choice.color,
          accentColor: choice.accent,
          wiggleSpeed: 0.12 + Math.random() * 0.08,
          wigglePhase: Math.random() * Math.PI * 2,
          targetX: Math.random() * width,
          targetY: Math.random() * height,
          mouthOpen: false,
        });
      }
    };

    spawnFish(fishCount);

    const tick = () => {
      const timeMs = Date.now() * 0.0008;

      // 1. Draw solid blue-teal background water column color
      ctx.fillStyle = selectedBg.bgGrad.includes('gradient') ? '#083344' : '#082f49';
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      if (selectedBg.id === 'lagoon') {
        grad.addColorStop(0, '#134e4a');
        grad.addColorStop(0.5, '#075985');
        grad.addColorStop(1, '#020617');
      } else if (selectedBg.id === 'deepreef') {
        grad.addColorStop(0, '#0c4a6e');
        grad.addColorStop(0.5, '#082f49');
        grad.addColorStop(1, '#020617');
      } else if (selectedBg.id === 'trench') {
        grad.addColorStop(0, '#1e1b4b');
        grad.addColorStop(0.5, '#0f172a');
        grad.addColorStop(1, '#020617');
      } else {
        grad.addColorStop(0, '#701a75');
        grad.addColorStop(0.5, '#3b0764');
        grad.addColorStop(1, '#020617');
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // 1b. Realistic caustics distortion lines in water column
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.038)';
      ctx.lineWidth = 4;
      for (let w = 0; w < 4; w++) {
        ctx.beginPath();
        for (let x = 0; x < width + 40; x += 50) {
          const yOffsetPos = 90 + w * 130 + Math.sin(x * 0.007 + timeMs * 1.4 + w * 1.6) * 20 + Math.cos(x * 0.003 - timeMs * 0.9) * 12;
          if (x === 0) ctx.moveTo(x, yOffsetPos);
          else ctx.lineTo(x, yOffsetPos);
        }
        ctx.stroke();
      }
      ctx.restore();

      // 1c. Micro plankton drifting
      ctx.save();
      ctx.fillStyle = 'rgba(224, 242, 254, 0.28)'; // translucent light sky blue
      planktonList.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(timeMs * 0.4 + p.phase) * 0.05;

        // Wrap around borders
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // 2. Render God Rays filtering down from water surface
      for (let i = 0; i < 4; i++) {
        const xOffset = Math.sin(timeMs + i * 1.8) * 80;
        const beamGrad = ctx.createLinearGradient(width * 0.2 + i * width * 0.2 + xOffset, 0, width * 0.15 + i * width * 0.2 + xOffset, height);
        beamGrad.addColorStop(0, 'rgba(255, 255, 255, 0.07)');
        beamGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.015)');
        beamGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = beamGrad;
        ctx.beginPath();
        ctx.moveTo(width * 0.1 + i * width * 0.2 + xOffset, 0);
        ctx.lineTo(width * 0.3 + i * width * 0.2 + xOffset, 0);
        ctx.lineTo(width * 0.5 + i * width * 0.2 + xOffset * 1.8, height);
        ctx.lineTo(width * 0.0 + i * width * 0.2 + xOffset * 1.8, height);
        ctx.closePath();
        ctx.fill();
      }

      // 3. Render Sand seabed and corals landscape at bottom
      ctx.save();
      // Draw backdrop layer sand hill
      const sandBackGrad = ctx.createLinearGradient(0, height - 90, 0, height);
      sandBackGrad.addColorStop(0, '#164e63');
      sandBackGrad.addColorStop(1, '#0f172a');
      ctx.fillStyle = sandBackGrad;
      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.quadraticCurveTo(width * 0.35, height - 85, width * 0.7, height - 40);
      ctx.quadraticCurveTo(width * 0.85, height - 20, width, height - 55);
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      // Foreground sand hill
      const sandForeGrad = ctx.createLinearGradient(0, height - 60, 0, height);
      sandForeGrad.addColorStop(0, '#155e75');
      sandForeGrad.addColorStop(1, '#0e172c');
      ctx.fillStyle = sandForeGrad;
      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.quadraticCurveTo(width * 0.25, height - 35, width * 0.5, height - 50);
      ctx.quadraticCurveTo(width * 0.75, height - 65, width, height - 30);
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // 4. Swaying Sea Kelp/Plants at bottom
      ctx.save();
      ctx.strokeStyle = '#0f766e';
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      const plantCount = Math.floor(width / 75);
      for (let i = 0; i < plantCount; i++) {
        const plantX = i * 75 + 30;
        const plantH = 140 + Math.sin(i * 1.1) * 50;
        const sway = Math.sin(timeMs * 1.5 + i * 0.6) * 22;

        ctx.strokeStyle = i % 2 === 0 ? '#115e59' : '#0d9488';
        ctx.lineWidth = i % 2 === 0 ? 8 : 5;

        ctx.beginPath();
        ctx.moveTo(plantX, height - 20);
        ctx.quadraticCurveTo(plantX - sway * 0.5, height - plantH * 0.5, plantX + sway, height - plantH);
        ctx.stroke();
      }
      ctx.restore();

      // 5. Update/Spawn Bubbles
      if (bubblesList.length < bubbleDensity) {
        bubblesList.push({
          x: Math.random() * width,
          y: height + 20,
          r: 2 + Math.random() * 5,
          speed: 0.8 + Math.random() * 1.4,
          wobbleSpeed: 0.05 + Math.random() * 0.05,
          wobbleRange: 1 + Math.random() * 4,
          wobblePhase: Math.random() * Math.PI,
        });
      }

      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      for (let i = bubblesList.length - 1; i >= 0; i--) {
        const b = bubblesList[i];
        b.y -= b.speed;
        b.wobblePhase += b.wobbleSpeed;
        const bubbleX = b.x + Math.sin(b.wobblePhase) * b.wobbleRange;

        // Render bubble bubble paths
        ctx.beginPath();
        ctx.arc(bubbleX, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Shimmer glint point
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(bubbleX - b.r * 0.35, b.y - b.r * 0.35, b.r * 0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)'; // reset

        if (b.y < -30) {
          bubblesList.splice(i, 1);
        }
      }
      ctx.restore();

      // 6. Food particles falling
      if (mouseRef.current.clickX !== -1000) {
        foodList.push({
          x: mouseRef.current.clickX,
          y: mouseRef.current.clickY,
          speed: 0.65 + Math.random() * 0.5,
        });
        mouseRef.current.clickX = -1000;
        mouseRef.current.clickY = -1000;
      }

      ctx.save();
      ctx.fillStyle = '#f87171'; // reddish brown flakes
      ctx.shadowColor = '#f87171';
      ctx.shadowBlur = 3;
      for (let i = foodList.length - 1; i >= 0; i--) {
        const f = foodList[i];
        f.y += f.speed;

        ctx.beginPath();
        ctx.arc(f.x, f.y, 3.2, 0, Math.PI * 2);
        ctx.fill();

        if (f.y > height - 30) {
          foodList.splice(i, 1);
        }
      }
      ctx.restore();

      // 7. Update/Draw Swimming Procedural Fish
      fishList.forEach((fish) => {
        // AI: Target logic
        let currentTargetX = fish.targetX;
        let currentTargetY = fish.targetY;

        // If there's food, seek the nearest flake
        if (foodList.length > 0) {
          let closestFood: Food | null = null;
          let closestDist = 99999;
          foodList.forEach((f) => {
            const d = Math.hypot(f.x - fish.x, f.y - fish.y);
            if (d < closestDist) {
              closestDist = d;
              closestFood = f;
            }
          });
          if (closestFood) {
            currentTargetX = (closestFood as Food).x;
            currentTargetY = (closestFood as Food).y;
          }
        }

        // Steer towards target
        const dx = currentTargetX - fish.x;
        const dy = currentTargetY - fish.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 15) {
          fish.vx += (dx / dist) * 0.08 * fishSpeed;
          fish.vy += (dy / dist) * 0.04 * fishSpeed;
        } else {
          // Choose new wandertarget
          fish.targetX = Math.random() * width;
          fish.targetY = 60 + Math.random() * (height - 180);
        }

        // Speed limiters
        const maxV = 2.2 * fishSpeed;
        const currentSpeed = Math.hypot(fish.vx, fish.vy);
        if (currentSpeed > maxV) {
          fish.vx = (fish.vx / currentSpeed) * maxV;
          fish.vy = (fish.vy / currentSpeed) * maxV;
        }

        // Move coordinates
        fish.x += fish.vx;
        fish.y += fish.vy;

        // Boundary bounce
        if (fish.x < 30) { fish.x = 30; fish.vx *= -0.8; }
        if (fish.x > width - 30) { fish.x = width - 30; fish.vx *= -0.8; }
        if (fish.y < 50) { fish.y = 50; fish.vy *= -0.8; }
        if (fish.y > height - 100) { fish.y = height - 100; fish.vy *= -0.8; }

        // Interaction: Eating food collision
        foodList.forEach((food, fIdx) => {
          if (Math.hypot(food.x - fish.x, food.y - fish.y) < fish.size + 8) {
            // Eat!
            foodList.splice(fIdx, 1);
            fish.mouthOpen = true;
            setTimeout(() => { fish.mouthOpen = false; }, 400);

            // Pop bubbles popping reward effect
            for (let b = 0; b < 4; b++) {
              bubblesList.push({
                x: fish.x + (fish.vx > 0 ? fish.size : -fish.size),
                y: fish.y,
                r: 1.5 + Math.random() * 2.5,
                speed: 1.5 + Math.random() * 1.5,
                wobbleSpeed: 0.1,
                wobbleRange: 2,
                wobblePhase: Math.random() * Math.PI,
              });
            }

            // Play cute bubble pop sound!
            if (isBubblesSynthOn) {
              try {
                const ctx = initAudioCtx();
                if (ctx) {
                  const o = ctx.createOscillator();
                  const g = ctx.createGain();
                  o.type = 'sine';
                  o.frequency.setValueAtTime(450, ctx.currentTime);
                  o.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.08);
                  g.gain.setValueAtTime(volBubbles * 0.12, ctx.currentTime);
                  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);
                  o.connect(g);
                  g.connect(ctx.destination);
                  o.start();
                  o.stop(ctx.currentTime + 0.12);
                }
              } catch (e) {}
            }
          }
        });

        // DRAW PROCEDURAL FISH
        ctx.save();
        ctx.translate(fish.x, fish.y);

        // Flip based on direction
        const facingLeft = fish.vx < 0;
        ctx.scale(facingLeft ? 1 : -1, 1);

        fish.wigglePhase += fish.wiggleSpeed * (1 + currentSpeed * 0.65);
        const wiggleAngle = Math.sin(fish.wigglePhase) * 0.38;

        // Tail Fin
        ctx.save();
        ctx.translate(fish.size * 0.85, 0);
        ctx.rotate(wiggleAngle);
        ctx.fillStyle = fish.accentColor;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(fish.size * 0.5, fish.size * 0.5, fish.size * 0.75, fish.size * 0.6);
        ctx.quadraticCurveTo(fish.size * 0.35, 0, fish.size * 0.75, -fish.size * 0.6);
        ctx.quadraticCurveTo(fish.size * 0.5, -fish.size * 0.5, 0, 0);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // Main Body Oval
        ctx.fillStyle = fish.color;
        ctx.beginPath();
        // Head start to tail
        ctx.ellipse(0, 0, fish.size, fish.size * 0.52, 0, 0, Math.PI * 2);
        ctx.fill();

        // White stripes for Clownfish
        if (fish.type === 'clown') {
          ctx.fillStyle = fish.accentColor;
          ctx.beginPath();
          ctx.ellipse(-fish.size * 0.2, 0, fish.size * 0.15, fish.size * 0.45, 0, 0, Math.PI * 2);
          ctx.ellipse(fish.size * 0.25, 0, fish.size * 0.1, fish.size * 0.32, 0, 0, Math.PI * 2);
          ctx.fill();
        }

        // Long Bettas Flowing Fins
        if (fish.type === 'betta') {
          ctx.fillStyle = fish.accentColor;
          ctx.beginPath();
          ctx.moveTo(-fish.size * 0.25, -fish.size * 0.4);
          ctx.quadraticCurveTo(fish.size * 0.6, -fish.size * 0.9, fish.size * 0.2, -fish.size * 0.3);
          ctx.moveTo(-fish.size * 0.1, fish.size * 0.4);
          ctx.quadraticCurveTo(fish.size * 0.5, fish.size * 0.85, fish.size * 0.15, fish.size * 0.3);
          ctx.fill();
        }

        // Pectoral Fin
        ctx.fillStyle = fish.accentColor;
        ctx.beginPath();
        ctx.ellipse(-fish.size * 0.15, fish.size * 0.1, fish.size * 0.25, fish.size * 0.14, Math.PI / 6, 0, Math.PI * 2);
        ctx.fill();

        // Eye
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(-fish.size * 0.58, -fish.size * 0.12, fish.size * 0.11, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(-fish.size * 0.62, -fish.size * 0.12, fish.size * 0.055, 0, Math.PI * 2);
        ctx.fill();

        // Animated Mouth
        ctx.strokeStyle = fish.color;
        ctx.lineWidth = 2.5;
        if (fish.mouthOpen) {
          ctx.fillStyle = '#0f172a';
          ctx.beginPath();
          ctx.arc(-fish.size * 0.92, fish.size * 0.06, fish.size * 0.1, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      // 8. Box breathing indicator overlay circle scale
      let breathScale = 1.0;
      if (overlayMode === 'breathing') {
        if (breathePhase === 'inhale') {
          breathScale = 0.88 + (1 - breatheSeconds / 4) * 0.28;
        } else if (breathePhase === 'hold1') {
          breathScale = 1.16;
        } else if (breathePhase === 'exhale') {
          breathScale = 1.16 - (1 - breatheSeconds / 4) * 0.28;
        } else {
          breathScale = 0.88;
        }
      }

      // Draw subtle bubbles in center during breathe sessions
      if (overlayMode === 'breathing' && Math.random() < 0.25) {
        bubblesList.push({
          x: width / 2 + (Math.random() - 0.5) * 80,
          y: height / 2 + 30,
          r: 1 + Math.random() * 3,
          speed: 1.0 + Math.random() * 0.8,
          wobbleSpeed: 0.1,
          wobbleRange: 3,
          wobblePhase: Math.random() * Math.PI,
        });
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
  }, [selectedBg, fishCount, fishSpeed, bubbleDensity, overlayMode, breatheSeconds, breathePhase, isBubblesSynthOn, volBubbles]);

  const timeFormatted = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12 || 12;
    return `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}${ampm}`;
  };

  const dateFormatted = () => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return time.toLocaleDateString(undefined, options);
  };

  const formatAudioName = (file: string) => {
    const parts = file.split('/');
    const name = parts[parts.length - 1] || 'Track';
    return name.replace(/\.[^/.]+$/, "").replace(/-|_/g, " ");
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseRef.current.x = e.clientX - rect.left;
        mouseRef.current.y = e.clientY - rect.top;
      }}
      onMouseLeave={() => {
        mouseRef.current.x = -1000;
        mouseRef.current.y = -1000;
      }}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseRef.current.clickX = e.clientX - rect.left;
        mouseRef.current.clickY = e.clientY - rect.top;
        // spawn bubble gurgles pop on tap
        initAudioCtx();
      }}
      className={`aquarium-container relative w-full overflow-hidden flex flex-col items-center justify-center select-none ${
        isCard ? 'w-full h-full' : 'h-[480px] rounded-2xl border border-white/10 shadow-2xl'
      } ${
        isFullscreen ? 'fixed! inset-0 h-screen! w-screen! rounded-none! z-50' : ''
      }`}
      style={{ cursor: isIdle && isFullscreen ? 'none' : 'default' }}
    >
      {/* 1. Ecological Simulation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(2,6,23,0.65)_100%)] pointer-events-none z-1" />

      {/* 2. Top-left Status Indicator */}
      {!isFullscreen && !isCard && (
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-1 text-[10px] sm:text-xs text-cyan-200/80 font-mono tracking-widest pointer-events-none select-none">
          <span>AQUATIC SIMULATOR SYSTEM</span>
          <span className="text-emerald-400 opacity-90">ORGANISMS STATE: ACTIVE ({fishCount} Fish)</span>
        </div>
      )}

      {/* 3. FOCUS MODES OVERLAYS */}
      {!isCard && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-5">
        
        {/* Clock Overlay */}
        {overlayMode === 'clock' && (
          <div className="flex flex-col items-center justify-center px-10 py-6 rounded-3xl border border-white/10 bg-slate-950/45 backdrop-blur-md shadow-2xl animate-fadeIn select-none pointer-events-auto">
            <h1 className="text-4xl sm:text-5xl font-mono font-extralight tracking-widest text-slate-100 drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
              {timeFormatted()}
            </h1>
            <div className="h-[1px] w-20 bg-cyan-400/40 my-3" />
            <p className="text-[9px] sm:text-[10px] text-cyan-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] tracking-widest font-mono uppercase">
              {dateFormatted()}
            </p>
          </div>
        )}

        {/* Guided Breathing Coach */}
        {overlayMode === 'breathing' && (
          <div className="flex flex-col items-center gap-4 animate-fadeIn select-none pointer-events-none">
            <div className="w-36 h-36 rounded-full border border-cyan-400/20 flex items-center justify-center relative bg-black/10 backdrop-blur-[1px]">
              <div 
                className={`absolute inset-0 rounded-full border-2 border-cyan-350/50 transition-all duration-1000 ${
                  breathePhase === 'inhale' ? 'scale-110 opacity-70' : 
                  breathePhase === 'hold1' ? 'scale-110 opacity-100' :
                  breathePhase === 'exhale' ? 'scale-90 opacity-40' : 'scale-90 opacity-15'
                }`}
              />
              <div className="flex flex-col items-center">
                <span className="text-xs tracking-[0.25em] font-medium text-cyan-300 uppercase font-mono">
                  {breathePhase === 'inhale' && 'Inhale'}
                  {breathePhase === 'hold1' && 'Hold'}
                  {breathePhase === 'exhale' && 'Exhale'}
                  {breathePhase === 'hold2' && 'Hold'}
                </span>
                <span className="text-3xl font-light font-mono text-white mt-1">
                  {breatheSeconds}s
                </span>
              </div>
            </div>
            <p className="text-[9px] text-cyan-200/60 font-mono tracking-widest uppercase">
              Aquarium Wave sync coach
            </p>
          </div>
        )}

        {/* Pomodoro Timer */}
        {overlayMode === 'timer' && (
          <div className="flex flex-col items-center gap-2.5 animate-fadeIn select-none pointer-events-auto">
            <div className="text-4xl sm:text-6xl font-light font-mono text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] tracking-wider">
              {timerMinutes.toString().padStart(2, '0')}:{timerSeconds.toString().padStart(2, '0')}
            </div>
            
            <div className="flex gap-2Pointer pointer-events-auto">
              <button
                onClick={(e) => { e.stopPropagation(); setTimerRunning((r) => !r); }}
                className="px-3.5 py-1 rounded-full border border-white/20 text-[10px] font-semibold text-neutral-200 bg-neutral-950/60 hover:bg-neutral-900 hover:text-white cursor-pointer active:scale-95 transition-all uppercase tracking-wider mr-2"
              >
                {timerRunning ? 'Pause' : 'Start'}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setTimerRunning(false);
                  setTimerMinutes(pomoPreset);
                  setTimerSeconds(0);
                }}
                className="px-3.5 py-1 rounded-full border border-white/20 text-[10px] font-semibold text-neutral-200 bg-neutral-950/60 hover:bg-neutral-900 hover:text-white cursor-pointer active:scale-95 transition-all uppercase tracking-wider"
              >
                Reset
              </button>
            </div>
            <p className="text-[9px] text-cyan-200/50 font-mono uppercase tracking-widest">
              Marine Focus Countdown
            </p>
          </div>
        )}

        </div>
      )}

      {/* 4. Settings Toggler & Fullscreen floating buttons */}
      {!isCard && (
        <div className={`absolute bottom-4 right-4 z-10 flex items-center gap-3 transition-opacity duration-300 ${
          isIdle && isFullscreen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
        <button
          onClick={(e) => { e.stopPropagation(); setShowSettings((s) => !s); }}
          className={`flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950/80 hover:bg-slate-900 border cursor-pointer hover:border-cyan-400/40 transition-all active:scale-95 duration-300 ${
            showSettings ? 'rotate-90 text-cyan-400 border-cyan-500/20' : 'border-white/10 text-white'
          }`}
          title="Toggle settings panel"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
          className="w-10 h-10 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-white/10 flex items-center justify-center text-white shadow-xl cursor-pointer hover:border-cyan-400/40 transition-all active:scale-95"
          title="Toggle fullscreen View"
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

      {/* User click notification helper */}
      {!isCard && (
        <div className="absolute bottom-4 left-4 z-10 text-[9px] text-cyan-200/50 font-mono tracking-wider pointer-events-none">
          * CLICK WATER TO FEED FISH FLAKES
        </div>
      )}

      {/* 5. SETTINGS DRAWER MENU */}
      {isCard ? null :
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute bottom-0 inset-x-0 bg-slate-950/90 backdrop-blur-xl border-t border-white/10 transition-transform duration-300 ease-out z-20 overflow-y-auto px-5 py-4 max-h-[75%] md:max-h-[60%] flex flex-col gap-4 text-white custom-scrollbar ${
            showSettings ? 'translate-y-0' : 'translate-y-full'
          } ${isIdle && isFullscreen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase">Marine Aquarium Settings</h3>
            <p className="text-[10px] text-slate-400 mt-0.5">Customize fish species counts, water currents, soundscapes and synth drone</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setSelectedBg(PRESETS[0]);
                setFishCount(12);
                setFishSpeed(1.0);
                setBubbleDensity(25);
                setOverlayMode('clock');
                setIsDroneOn(false);
                setIsBubblesSynthOn(false);
                setActiveCustomAudios({});
              }}
              className="text-[10px] font-semibold text-cyan-400 bg-cyan-950/30 hover:bg-cyan-900/40 border border-cyan-500/20 px-2.5 py-1 rounded-lg cursor-pointer transition-colors"
            >
              Reset Ecosystem
            </button>
            <button
              onClick={() => setShowSettings(false)}
              className="text-neutral-450 hover:text-white p-1 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/5 cursor-pointer transition-all duration-200"
              aria-label="Close settings"
            >
              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Preset Background Water Colors */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">Aquatic Light Gradients</span>
            <div className="grid grid-cols-2 gap-2 mt-1">
              {PRESETS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedBg(p)}
                  className={`p-2.5 rounded-lg border text-left cursor-pointer transition-all duration-200 ${
                    selectedBg.id === p.id
                      ? 'border-cyan-400 bg-cyan-900/10 ring-1 ring-cyan-500/20'
                      : 'border-white/10 bg-slate-900/40 hover:border-white/20'
                  }`}
                >
                  <div className="text-[10px] font-medium text-slate-200">{p.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Physics parameters */}
          <div className="flex flex-col gap-2.5 justify-center">
            {/* Fish count */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center text-xs text-slate-350">
                <span>Ecosystem Fish Count</span>
                <span className="font-mono text-[10px] text-cyan-400">{fishCount} Fish</span>
              </div>
              <input
                type="range"
                min="3"
                max="26"
                step="1"
                value={fishCount}
                onChange={(e) => setFishCount(Number(e.target.value))}
                className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Fish swim speed */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center text-xs text-slate-350">
                <span>Water Current (Swim Speed)</span>
                <span className="font-mono text-[10px] text-cyan-400">{Math.round(fishSpeed * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.4"
                max="2.0"
                step="0.1"
                value={fishSpeed}
                onChange={(e) => setFishSpeed(Number(e.target.value))}
                className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>
          </div>
        </div>

        {/* Sound generators & focus modes */}
        <div className="border-t border-white/5 pt-3 mt-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Sounds */}
          <div className="flex flex-col gap-2 bg-white/5 rounded-xl p-3 border border-white/5">
            <span className="text-[10px] font-semibold text-slate-350 uppercase tracking-widest block border-b border-white/5 pb-1">
              Aquatic Audio synthesizers
            </span>
            
            <div className="flex flex-col gap-2 mt-1.5">
              {/* Sound 1: Deep ocean drone */}
              <div className="flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="aqDrone"
                    checked={isDroneOn}
                    onChange={(e) => setIsDroneOn(e.target.checked)}
                    className="w-3.5 h-3.5 rounded border-neutral-700 bg-neutral-900 text-cyan-400 checked:bg-cyan-400 focus:ring-cyan-550/20 cursor-pointer"
                  />
                  <label htmlFor="aqDrone" className="font-medium text-slate-300 cursor-pointer">
                    🌊 Sub Ocean Deep Drone
                  </label>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="1.0"
                  step="0.05"
                  value={volDrone}
                  onChange={(e) => setVolDrone(Number(e.target.value))}
                  disabled={!isDroneOn}
                  className="w-24 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 disabled:opacity-30"
                />
              </div>

              {/* Sound 2: Bubble pops */}
              <div className="flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="aqBubbles"
                    checked={isBubblesSynthOn}
                    onChange={(e) => setIsBubblesSynthOn(e.target.checked)}
                    className="w-3.5 h-3.5 rounded border-neutral-700 bg-neutral-900 text-cyan-400 checked:bg-cyan-400 focus:ring-cyan-550/20 cursor-pointer"
                  />
                  <label htmlFor="aqBubbles" className="font-medium text-slate-300 cursor-pointer">
                    🫧 Bubble Pops Synth
                  </label>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="1.0"
                  step="0.05"
                  value={volBubbles}
                  onChange={(e) => setVolBubbles(Number(e.target.value))}
                  disabled={!isBubblesSynthOn}
                  className="w-24 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 disabled:opacity-30"
                />
              </div>

              {/* Dynamic BGM files uploaded */}
              {aquariumAudioFiles && aquariumAudioFiles.length > 0 && (
                <>
                  <div className="text-[10px] font-semibold text-slate-450 uppercase tracking-widest pt-2 border-t border-white/5 mt-1 select-none">
                    Custom marine tracks
                  </div>
                  {aquariumAudioFiles.map((file) => {
                    const cleanName = formatAudioName(file);
                    const isPlaying = activeCustomAudios[file] || false;
                    const vol = customAudiosVolume[file] !== undefined ? customAudiosVolume[file] : 0.4;
                    const cleanId = `aquarium-audio-${file.replace(/[^a-zA-Z0-9]/g, '-')}`;
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
                            className="w-3.5 h-3.5 rounded border-neutral-700 bg-neutral-900 text-cyan-400 checked:bg-cyan-400 focus:ring-cyan-550/20 cursor-pointer shrink-0"
                          />
                          <label htmlFor={cleanId} className="font-medium text-slate-200 cursor-pointer truncate hover:text-white" title={cleanName}>
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
                          className="w-24 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 disabled:opacity-20 shrink-0"
                        />
                      </div>
                    );
                  })}
                </>
              )}

            </div>
          </div>

          {/* Overlays Focus Mode */}
          <div className="flex flex-col gap-2 bg-white/5 rounded-xl p-3 border border-white/5">
            <span className="text-[10px] font-semibold text-slate-350 uppercase tracking-widest block border-b border-white/5 pb-1">
              Marine Focus Overlays
            </span>
            <div className="grid grid-cols-4 gap-2 mt-1.5">
              {(['none', 'clock', 'breathing', 'timer'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => {
                    setOverlayMode(mode);
                    if (mode === 'timer') {
                      setTimerMinutes(pomoPreset);
                      setTimerSeconds(0);
                      setTimerRunning(false);
                    }
                  }}
                  className={`py-2 rounded-lg border text-center font-medium transition-all text-[10px] uppercase cursor-pointer tracking-wider ${
                    overlayMode === mode
                      ? 'border-cyan-400 bg-cyan-900/10 text-white font-semibold'
                      : 'border-white/10 bg-slate-900/40 text-neutral-400 hover:text-white'
                  }`}
                >
                  {mode === 'none' ? 'Off' : mode}
                </button>
              ))}
            </div>

            {/* Pomodoro controls inside settings drawer */}
            {overlayMode === 'timer' && (
              <div className="flex flex-col gap-1.5 mt-2 pt-2 border-t border-white/5 animate-fadeIn">
                <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase block">Timer Limit</span>
                <div className="flex gap-2">
                  {([10, 25, 50] as const).map((duration) => (
                    <button
                      key={duration}
                      onClick={() => {
                        setPomoPreset(duration);
                        setTimerMinutes(duration);
                        setTimerSeconds(0);
                        setTimerRunning(false);
                      }}
                      className={`flex-1 py-1 rounded border text-[10px] font-mono cursor-pointer transition-colors ${
                        pomoPreset === duration
                          ? 'border-cyan-400 bg-cyan-950/20 text-cyan-300 font-bold'
                          : 'border-white/10 bg-slate-900/40 text-slate-300'
                      }`}
                    >
                      {duration} Min
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>}
    </div>
  );
}
