import React, { useState, useEffect, useRef } from 'react';
import type { Tool } from '../data/tools';
import type { Locale } from '../data/locales';

interface MatrixScreenProps {
  tool: Tool;
  locale: Locale;
  audioFiles?: string[];
  isCard?: boolean;
}

const KATAKANA = "ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";
const ALPHANUMERIC = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const COLOR_PRESETS = [
  { name: 'Classic Green', id: 'green', primary: '#22c55e', glow: '#4ade80', bg: '#022c22' },
  { name: 'Cyberpunk Cyan', id: 'cyan', primary: '#06b6d4', glow: '#22d3ee', bg: '#083344' },
  { name: 'Crimson Red', id: 'red', primary: '#ef4444', glow: '#f87171', bg: '#450a0a' },
  { name: 'Amber Gold', id: 'orange', primary: '#f59e0b', glow: '#fbbf24', bg: '#451a03' },
  { name: 'Neon Purple', id: 'purple', primary: '#a855f7', glow: '#c084fc', bg: '#3b0764' },
  { name: 'Rainbow', id: 'rainbow', primary: '#f43f5e', glow: '#fda4af', bg: '#030712' },
];

// Helper to convert hex colors or hsla strings safely into transparency-ready rgba values
const hexToRgba = (hex: string, opacity: number) => {
  if (hex.startsWith('hsla')) {
    return hex.replace(/, 1\)$/, `, ${opacity})`);
  }
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export default function MatrixScreen({ tool, locale, isCard = false }: MatrixScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Custom User Input Text / Username
  const [customText, setCustomText] = useState<string>('');
  
  // Character mode: 'classic' | 'binary' | 'alpha' | 'custom' | 'custom-seq'
  const [charSet, setCharSet] = useState<string>('classic');

  // Sliders and controls
  const [fontSize, setFontSize] = useState<number>(16);
  const [speed, setSpeed] = useState<number>(1.0);
  const [density, setDensity] = useState<number>(1.0);
  const [trailLength, setTrailLength] = useState<number>(0.06);
  const [glowStrength, setGlowStrength] = useState<number>(isCard ? 0 : 15);
  const [colorTheme, setColorTheme] = useState<string>('green');

  // Sound Options: 'none' | 'drone1' | 'drone2' | 'drone3'
  const [soundType, setSoundType] = useState<string>('none');
  const [volume, setVolume] = useState<number>(0.3);
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);

  // Drawer / UI State
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isIdle, setIsIdle] = useState<boolean>(false);

  // Web Audio Synth references
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthNodesRef = useRef<{
    osc1: OscillatorNode;
    osc2: OscillatorNode;
    noise: ScriptProcessorNode | null;
    noiseFilter: BiquadFilterNode | null;
    gainNode: GainNode;
  } | null>(null);

  // Automatically update character set when typing in custom name
  useEffect(() => {
    if (customText.trim().length > 0) {
      if (charSet === 'classic' || charSet === 'binary' || charSet === 'alpha') {
        setCharSet('custom-seq');
      }
    } else {
      if (charSet === 'custom' || charSet === 'custom-seq') {
        setCharSet('classic');
      }
    }
  }, [customText]);

  // Fullscreen event listener
  useEffect(() => {
    const onFullscreenChange = () => {
      const isCurrentlyFs = !!document.fullscreenElement;
      setIsFullscreen(isCurrentlyFs);
      if (isCurrentlyFs) {
        document.documentElement.classList.add('is-matrix-fullscreen');
      } else {
        document.documentElement.classList.remove('is-matrix-fullscreen');
      }
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, []);

  // Idle timer in Fullscreen
  useEffect(() => {
    if (!isFullscreen) {
      setIsIdle(false);
      return;
    }

    let timeoutId: number;
    const resetIdle = () => {
      setIsIdle(false);
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setIsIdle(true);
      }, 3000);
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
  }, [isFullscreen]);

  // Keyboard Shortcuts handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      // If active in standard inputs, ignore shortcuts
      if (
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLSelectElement ||
        document.activeElement instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (key === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (key === 'space') {
        e.preventDefault();
        setShowSettings((prev) => !prev);
      } else if (key === 'm') {
        e.preventDefault();
        setAudioPlaying((prev) => !prev);
      } else if (key === 'c') {
        e.preventDefault();
        setCharSet((prev) => {
          if (prev === 'classic') return 'binary';
          if (prev === 'binary') return 'alpha';
          if (prev === 'alpha' && customText) return 'custom-seq';
          if (prev === 'custom-seq' && customText) return 'custom';
          return 'classic';
        });
      } else if (key === 'r') {
        e.preventDefault();
        resetToDefaults();
      } else if (key === 'escape' && isFullscreen) {
        e.preventDefault();
        exitFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, customText]);

  // Web Audio synthesizer drones engine
  const startSynthDrone = (type: string) => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(volume * 0.15, ctx.currentTime);

      let osc1 = ctx.createOscillator();
      let osc2 = ctx.createOscillator();
      let lpFilter = ctx.createBiquadFilter();
      let noise: ScriptProcessorNode | null = null;
      let noiseFilter: BiquadFilterNode | null = null;

      if (type === 'drone1') {
        // Deep Grid Hum (Low sawtooth thick bass with whir noise)
        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(55, ctx.currentTime);

        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(55.25, ctx.currentTime);

        lpFilter.type = 'lowpass';
        lpFilter.frequency.setValueAtTime(95, ctx.currentTime);

        osc1.connect(lpFilter);
        osc2.connect(lpFilter);
        lpFilter.connect(gain);

        if (ctx.createScriptProcessor) {
          const bufferSize = 4096;
          noise = ctx.createScriptProcessor(bufferSize, 1, 1);
          noise.onaudioprocess = (e) => {
            const output = e.outputBuffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
              output[i] = Math.random() * 2 - 1;
            }
          };

          noiseFilter = ctx.createBiquadFilter();
          noiseFilter.type = 'bandpass';
          noiseFilter.frequency.setValueAtTime(140, ctx.currentTime);
          noiseFilter.Q.setValueAtTime(0.8, ctx.currentTime);

          const noiseGain = ctx.createGain();
          noiseGain.gain.setValueAtTime(0.012, ctx.currentTime);

          noise.connect(noiseFilter);
          noiseFilter.connect(noiseGain);
          noiseGain.connect(gain);
        }
      } else if (type === 'drone2') {
        // Mainframe Resonance (Hollow resonant hardware rack whir)
        osc1.type = 'square';
        osc1.frequency.setValueAtTime(73.4, ctx.currentTime); // D2 note

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(220, ctx.currentTime); // A3 note

        lpFilter.type = 'bandpass';
        lpFilter.frequency.setValueAtTime(180, ctx.currentTime);
        lpFilter.Q.setValueAtTime(2.2, ctx.currentTime);

        osc1.connect(lpFilter);
        osc2.connect(lpFilter);
        lpFilter.connect(gain);

        if (ctx.createScriptProcessor) {
          const bufferSize = 4096;
          noise = ctx.createScriptProcessor(bufferSize, 1, 1);
          noise.onaudioprocess = (e) => {
            const output = e.outputBuffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
              output[i] = Math.random() * 2 - 1;
            }
          };

          noiseFilter = ctx.createBiquadFilter();
          noiseFilter.type = 'lowpass';
          noiseFilter.frequency.setValueAtTime(800, ctx.currentTime);

          const noiseGain = ctx.createGain();
          noiseGain.gain.setValueAtTime(0.008, ctx.currentTime);

          noise.connect(noiseFilter);
          noiseFilter.connect(noiseGain);
          noiseGain.connect(gain);
        }
      } else if (type === 'drone3') {
        // Data Pulse Drone (Low sawtooth modulated by an LFO)
        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(90, ctx.currentTime);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(90.5, ctx.currentTime);

        lpFilter.type = 'lowpass';
        lpFilter.frequency.setValueAtTime(150, ctx.currentTime);

        const pulseGain = ctx.createGain();
        pulseGain.gain.setValueAtTime(0.7, ctx.currentTime);

        osc1.connect(pulseGain);
        osc2.connect(pulseGain);
        pulseGain.connect(lpFilter);
        lpFilter.connect(gain);

        const lfoOsc = ctx.createOscillator();
        lfoOsc.frequency.setValueAtTime(1.5, ctx.currentTime); // 1.5Hz pulsing rate

        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(45, ctx.currentTime);

        lfoOsc.connect(lfoGain);
        lfoGain.connect(lpFilter.frequency);
        lfoOsc.start();

        (osc1 as any).lfo = lfoOsc;
      }

      gain.connect(ctx.destination);
      osc1.start();
      osc2.start();

      synthNodesRef.current = {
        osc1,
        osc2,
        noise,
        noiseFilter,
        gainNode: gain
      };
    } catch (e) {
      console.warn("Failed to initialize synth Web Audio API:", e);
    }
  };

  const stopSynthDrone = () => {
    if (synthNodesRef.current) {
      try {
        synthNodesRef.current.osc1.stop();
        if ((synthNodesRef.current.osc1 as any).lfo) {
          (synthNodesRef.current.osc1 as any).lfo.stop();
        }
        synthNodesRef.current.osc2.stop();
        if (synthNodesRef.current.noise) {
          synthNodesRef.current.noise.disconnect();
        }
      } catch (err) {}
      synthNodesRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
  };

  // Sync sound choices and state
  useEffect(() => {
    if (isCard) return;
    stopSynthDrone();
    if (audioPlaying && soundType !== 'none') {
      startSynthDrone(soundType);
    }
  }, [soundType, audioPlaying, isCard]);

  // Sync volumes
  useEffect(() => {
    if (synthNodesRef.current && audioCtxRef.current) {
      synthNodesRef.current.gainNode.gain.setValueAtTime(volume * 0.15, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  // Clean unmount audio
  useEffect(() => {
    return () => {
      stopSynthDrone();
    };
  }, []);

  // Matrix digit rain engine rendering loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Resizing calculations
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth || 320;
      canvas.height = canvas.parentElement.clientHeight || 200;
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
    document.addEventListener('fullscreenchange', handleResize);

    // Grid states
    let width = canvas.width;
    let height = canvas.height;
    
    // Grid columns calculations based on Font Size and spacing Density
    const getColumnProps = () => {
      const colWidth = Math.max(8, fontSize * density);
      const cols = Math.floor(canvas.width / colWidth) + 2;
      return { cols, colWidth };
    };

    let { cols, colWidth } = getColumnProps();

    // Setup pixel-based head positions for smooth movement
    let yPositions: number[] = Array(cols).fill(0).map(() => Math.random() * -canvas.height);
    // Pixel speed steps (pixels per frame)
    let colSpeeds: number[] = Array(cols).fill(0).map(() => 1.5 + Math.random() * 4.5);
    
    // Color themes mapping
    const getThemeColors = (colIdx: number) => {
      if (colorTheme === 'rainbow') {
        const hue = (colIdx / cols) * 360;
        return {
          primary: `hsla(${hue}, 100%, 55%, 1)`,
          glow: `hsla(${hue}, 100%, 75%, 1)`
        };
      }
      const p = COLOR_PRESETS.find(t => t.id === colorTheme) || COLOR_PRESETS[0];
      return { primary: p.primary, glow: p.glow };
    };

    const renderLoop = () => {
      width = canvas.width;
      height = canvas.height;

      // Re-evaluate columns in case adjustments/resizes happened
      const currentProps = getColumnProps();
      if (currentProps.cols !== cols || currentProps.colWidth !== colWidth) {
        cols = currentProps.cols;
        colWidth = currentProps.colWidth;
        const oldY = [...yPositions];
        const oldSpeed = [...colSpeeds];
        yPositions = Array(cols).fill(0).map((_, i) => oldY[i] !== undefined ? oldY[i] : Math.random() * -height);
        colSpeeds = Array(cols).fill(0).map((_, i) => oldSpeed[i] !== undefined ? oldSpeed[i] : 1.5 + Math.random() * 4.5);
      }

      // Draw solid black to prevent overlapping visual smears
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillRect(0, 0, width, height);

      const cleanCustom = customText.trim();

      // Loop rendering columns
      for (let i = 0; i < cols; i++) {
        const x = i * colWidth;
        const yHead = yPositions[i];
        
        // Decay speed
        const decay = Math.max(0.04, trailLength * 2.0);
        const streamLen = Math.floor(1 / decay);

        // Pick characters based on offset and absolute grid index seed
        const getCharForStreamIndex = (rOffset: number, headY: number) => {
          const seed = Math.floor(headY / fontSize);
          
          if ((charSet === 'custom' || charSet === 'custom-seq') && cleanCustom.length > 0) {
            if (charSet === 'custom-seq') {
              // Word travels down spelling out the text: e.g. Neo -> N at head, E next, O next
              return cleanCustom[rOffset % cleanCustom.length];
            } else {
              // Random sample based on stream segment
              const seedVal = Math.abs(Math.sin((seed - rOffset) + i * 29));
              return cleanCustom[Math.floor(seedVal * cleanCustom.length)];
            }
          }

          if (charSet === 'binary') {
            const seedVal = Math.abs(Math.sin((seed - rOffset) + i * 13));
            return seedVal > 0.5 ? '0' : '1';
          }

          if (charSet === 'alpha') {
            const seedVal = Math.abs(Math.sin((seed - rOffset) + i * 7));
            return ALPHANUMERIC[Math.floor(seedVal * ALPHANUMERIC.length)];
          }

          const seedVal = Math.abs(Math.sin((seed - rOffset) + i * 83));
          return KATAKANA[Math.floor(seedVal * KATAKANA.length)];
        };

        for (let r = 0; r < streamLen; r++) {
          const y = yHead - (r * fontSize);
          
          // Don't draw if above canvas or below canvas
          if (y < -fontSize || y - fontSize > height) continue;

          const char = getCharForStreamIndex(r, yHead);
          if (!char) continue;

          const opacity = Math.max(0, 1 - (r * decay));
          if (opacity <= 0) continue;

          const colors = getThemeColors(i);

          // Apply glow to head droplets
          if (glowStrength > 0 && r < 3) {
            ctx.shadowBlur = glowStrength * (1 - r * 0.33);
            ctx.shadowColor = colors.glow;
          } else {
            ctx.shadowBlur = 0;
          }

          if (r === 0) {
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.font = `bold ${fontSize}px monospace`;
          } else {
            ctx.fillStyle = hexToRgba(colors.primary, opacity);
            ctx.font = `${fontSize}px monospace`;
          }

          ctx.fillText(char, x, y);
        }

        // Reset shadow limits
        ctx.shadowBlur = 0;

        // Progress column head position in pixels for butter-smooth 60fps scrolling!
        yPositions[i] += (colSpeeds[i] * 0.45) * speed;

        // Loop reset when stream is fully off-screen
        if (yHead - (streamLen * fontSize) > height) {
          yPositions[i] = -fontSize - (Math.random() * 150);
          colSpeeds[i] = 1.5 + Math.random() * 4.5;
        }
      }

      requestRef.current = requestAnimationFrame(renderLoop);
    };

    const requestRef = { current: requestAnimationFrame(renderLoop) };

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', handleResize);
      }
      document.removeEventListener('fullscreenchange', handleResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, [fontSize, speed, density, trailLength, glowStrength, colorTheme, charSet, customText]);

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

  const resetToDefaults = () => {
    setCustomText('');
    setCharSet('classic');
    setFontSize(16);
    setSpeed(1.0);
    setDensity(1.0);
    setTrailLength(0.06);
    setGlowStrength(15);
    setColorTheme('green');
    setSoundType('none');
    setVolume(0.3);
    setAudioPlaying(false);
  };

  return (
    <div
      ref={containerRef}
      className={`matrix-container relative w-full overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 select-none ${
        isCard ? 'w-full h-full pointer-events-none' : 'h-[480px] bg-black rounded-2xl'
      } ${
        isFullscreen ? 'is-fullscreen h-screen! w-screen! fixed! inset-0 z-99999 rounded-none!' : ''
      } ${isIdle && isFullscreen ? 'cursor-none' : ''}`}
      style={{ backgroundColor: '#000000' }}
    >
      {/* Rendering canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 size-full block z-5"
      />

      {/* Subtle vignette/shading overlay for code-rain atmospheric depth */}
      <div 
        className="absolute inset-0 pointer-events-none z-6"
        style={{
          background: 'radial-gradient(circle at center, transparent 35%, rgba(0, 0, 0, 0.7) 100%)'
        }}
      />

      {/* Interactive Trigger in non-fullscreen */}
      {!isFullscreen && !isCard && (
        <div 
          className="absolute inset-0 cursor-pointer z-4"
          onClick={toggleFullscreen}
          title="Click to go Fullscreen"
        />
      )}

      {/* Top right floating controls */}
      {!isCard && (
        <div 
          className={`absolute top-4 right-4 flex items-center gap-2.5 z-20 transition-opacity duration-300 ${
            isIdle && isFullscreen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`flex items-center justify-center w-10 h-10 rounded-xl bg-black/50 hover:bg-black/75 border border-white/10 text-white cursor-pointer transition-transform duration-300 backdrop-blur-md ${
              showSettings ? 'rotate-90 border-green-400/50 text-green-400' : ''
            }`}
            aria-label="Toggle Customizer settings options"
            title="Toggle settings panel"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
          <button
            onClick={toggleFullscreen}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-black/50 hover:bg-black/75 border border-white/10 text-white cursor-pointer transition-all duration-200 backdrop-blur-md hover:border-white/20"
            aria-label="Toggle Fullscreen view"
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

      {/* Settings Drawer */}
      {isCard ? null :
        <div 
          className={`absolute bottom-0 inset-x-0 bg-neutral-950/90 [backdrop-filter:blur(24px)] border-t border-white/10 transition-transform duration-300 ease-out z-10 overflow-y-auto px-5 py-4 max-h-[78%] md:max-h-[60%] flex flex-col gap-4 custom-scrollbar ${
            showSettings ? 'translate-y-0' : 'translate-y-full'
          } ${isIdle && isFullscreen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-white/10 pb-2.5">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase flex items-center gap-1.5 font-mono">
              <span className="inline-block size-2 rounded-full bg-green-500 animate-pulse" />
              Matrix Code Customizer
            </h3>
            <p className="text-[10px] text-neutral-400 mt-0.5">Customize digital streams, colors, and audio environment</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={resetToDefaults}
              className="text-[11px] font-medium text-green-400 bg-green-950/20 hover:bg-green-900/35 border border-green-500/25 px-2.5 py-1 rounded-lg cursor-pointer transition-colors"
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

        {/* Input variables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-3.5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="customTextVal" className="text-xs font-semibold text-neutral-300">
                👤 Custom Name / Text Rain
              </label>
              <input
                id="customTextVal"
                type="text"
                placeholder="Enter Name or Message..."
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                maxLength={45}
                className="w-full bg-neutral-900 border border-white/10 focus:border-green-500 hover:border-white/20 text-white rounded-lg px-3 py-2 text-xs outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="characterSelector" className="text-xs font-semibold text-neutral-300">
                🧬 Stream Character Type
              </label>
              <select
                id="characterSelector"
                value={charSet}
                onChange={(e) => setCharSet(e.target.value)}
                className="bg-neutral-900 border border-white/10 focus:border-green-500 hover:border-white/20 text-xs text-white rounded-lg p-2 outline-none cursor-pointer transition-colors"
              >
                <option value="classic">Classical Matrix (Half-width Katakana)</option>
                <option value="binary">Binary Code (0 and 1)</option>
                <option value="alpha">Alphanumeric (English characters)</option>
                {customText.trim().length > 0 && (
                  <>
                    <option value="custom-seq">Custom String (Sequence Spell-out)</option>
                    <option value="custom">Custom String (Random Sample)</option>
                  </>
                )}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-xs font-medium text-neutral-300">
                <span>Font Size</span>
                <span className="font-mono text-xs text-green-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-white/5">
                  {fontSize}px
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="36"
                step="2"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-xs font-medium text-neutral-300">
                <span>Rain Speed</span>
                <span className="font-mono text-xs text-green-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-white/5">
                  {speed.toFixed(1)}x
                </span>
              </div>
              <input
                type="range"
                min="0.2"
                max="3.0"
                step="0.1"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-xs font-medium text-neutral-300">
                <span>Stream Density</span>
                <span className="font-mono text-xs text-green-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-white/5">
                  {(1 / density).toFixed(1)}x
                </span>
              </div>
              <input
                type="range"
                min="0.6"
                max="2.0"
                step="0.1"
                value={2.6 - density}
                onChange={(e) => setDensity(2.6 - Number(e.target.value))}
                className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-xs font-medium text-neutral-300">
                <span>Trail Length</span>
                <span className="font-mono text-xs text-green-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-white/5">
                  {Math.round((0.25 - trailLength) * 400)}%
                </span>
              </div>
              <input
                type="range"
                min="0.02"
                max="0.24"
                step="0.01"
                value={0.26 - trailLength}
                onChange={(e) => setTrailLength(0.26 - Number(e.target.value))}
                className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-3.5 mt-0.5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-semibold text-neutral-300 uppercase tracking-wider font-mono">Select Glow Palette</span>
            <div className="flex flex-wrap gap-2 mt-1">
              {COLOR_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => setColorTheme(preset.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                    colorTheme === preset.id
                      ? 'border-green-400 scale-102 bg-white/5'
                      : 'border-white/10 hover:border-white/20 bg-neutral-950/40 text-neutral-400 hover:text-white'
                  }`}
                  style={{
                    boxShadow: colorTheme === preset.id ? `0 0 10px ${preset.primary}22` : 'none'
                  }}
                >
                  <span 
                    className="inline-block size-3 rounded-full border border-white/15" 
                    style={{
                      background: preset.id === 'rainbow'
                        ? 'linear-gradient(to right, #ff4545, #3bff3b, #3b3bff)'
                        : preset.primary
                    }}
                  />
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1.5 justify-center">
            <div className="flex justify-between items-center text-xs font-medium text-neutral-300">
              <span className="flex items-center gap-1">✨ Glow Intensity</span>
              <span className="font-mono text-xs text-green-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-white/5">
                {glowStrength}px
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="25"
              step="1"
              value={glowStrength}
              onChange={(e) => setGlowStrength(Number(e.target.value))}
              className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
          </div>
        </div>

        {/* Ambient environment sound system Row */}
        <div className="border-t border-white/5 pt-3.5 mt-0.5 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-[11px] font-semibold text-neutral-300 uppercase tracking-wider font-mono">Ambient Audio Synthesizer</span>
            <button
              type="button"
              onClick={() => setAudioPlaying(!audioPlaying)}
              disabled={soundType === 'none'}
              className={`px-2.5 py-0.5 rounded-md text-[9px] font-semibold uppercase tracking-wider border flex items-center gap-1 transition-all duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
                audioPlaying 
                  ? 'bg-green-500/20 border-green-400 text-green-300 shadow-[0_0_8px_rgba(34,197,94,0.25)]' 
                  : 'bg-neutral-800 border-white/5 text-neutral-400 hover:text-white'
              }`}
            >
              {audioPlaying ? 'Sound On' : 'Sound Off'}
            </button>
          </div>
          
          <div className="grid grid-cols-4 gap-2 mt-1">
            <button
              onClick={() => {
                setSoundType('none');
                setAudioPlaying(false);
              }}
              className={`px-3 py-2 rounded-lg text-xs font-semibold border text-center transition-colors cursor-pointer ${
                soundType === 'none'
                  ? 'bg-neutral-900 border-green-500 text-green-400 shadow-[0_0_8px_rgba(34,197,94,0.15)]'
                  : 'bg-neutral-950/40 border-white/10 text-neutral-400 hover:text-white'
              }`}
            >
              🔇 Muted
            </button>
            <button
              onClick={() => {
                setSoundType('drone1');
                setAudioPlaying(true);
              }}
              className={`px-3 py-2 rounded-lg text-xs font-semibold border text-center transition-colors cursor-pointer ${
                soundType === 'drone1'
                  ? 'bg-neutral-900 border-green-500 text-green-400 shadow-[0_0_8px_rgba(34,197,94,0.15)]'
                  : 'bg-neutral-950/40 border-white/10 text-neutral-400 hover:text-white'
              }`}
            >
              📟 Grid Hum
            </button>
            <button
              onClick={() => {
                setSoundType('drone2');
                setAudioPlaying(true);
              }}
              className={`px-3 py-2 rounded-lg text-xs font-semibold border text-center transition-colors cursor-pointer ${
                soundType === 'drone2'
                  ? 'bg-neutral-900 border-green-500 text-green-400 shadow-[0_0_8px_rgba(34,197,94,0.15)]'
                  : 'bg-neutral-950/40 border-white/10 text-neutral-400 hover:text-white'
              }`}
            >
              🧬 Mainframe Room
            </button>
            <button
              onClick={() => {
                setSoundType('drone3');
                setAudioPlaying(true);
              }}
              className={`px-3 py-2 rounded-lg text-xs font-semibold border text-center transition-colors cursor-pointer ${
                soundType === 'drone3'
                  ? 'bg-neutral-900 border-green-500 text-green-400 shadow-[0_0_8px_rgba(34,197,94,0.15)]'
                  : 'bg-neutral-950/40 border-white/10 text-neutral-400 hover:text-white'
              }`}
            >
              🛰️ Data Pulse
            </button>
          </div>
        </div>

        <div className="border-t border-white/5 pt-3.5 mt-0.5 flex flex-col gap-1.5">
          <div className="flex justify-between items-center text-[10px] text-neutral-400">
            <span>Synthesizer Master Volume</span>
            <span className="font-mono text-green-400">{Math.round(volume * 100)}%</span>
          </div>
          <input
            type="range"
            min="0.0"
            max="1.0"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            disabled={soundType === 'none' || !audioPlaying}
            className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500 disabled:opacity-40"
          />
        </div>

        {/* Keyboard Shortcuts Footer notes */}
        <div className="text-[10px] text-neutral-500 border-t border-white/5 pt-2 flex flex-wrap gap-x-4 gap-y-1">
          <span>⌨️ Press <strong className="text-neutral-400">F</strong> for Fullscreen</span>
          <span>• Space for Options Drawer</span>
          <span>• <strong className="text-neutral-400">M</strong> to Toggle Sounds</span>
          <span>• <strong className="text-neutral-400">C</strong> to Cycle Matrix Modes</span>
          <span>• <strong className="text-neutral-400">R</strong> to Reset defaults</span>
        </div>
      </div>}
    </div>
  );
}
