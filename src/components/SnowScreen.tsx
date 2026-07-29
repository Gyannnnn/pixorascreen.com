import React, { useState, useEffect, useRef } from 'react';
import Snowfall from 'react-snowfall';
import type { Tool } from '../data/tools';
import type { Locale } from '../data/locales';
import { getToolAssets } from '../utils/assets';

interface SnowScreenProps {
  tool: Tool;
  locale: Locale;
  backgrounds?: string[];
  audioFiles?: string[];
  isCard?: boolean;
}

// Custom Dual Range Slider
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
        {/* Track Background */}
        <div className="absolute inset-x-0 h-1 bg-neutral-800 rounded-full" />
        
        {/* Highlighted Range */}
        <div 
          className="absolute h-1 bg-linear-to-r from-sky-400 to-indigo-500 rounded-full"
          style={{
            left: `${minPercent}%`,
            right: `${100 - maxPercent}%`
          }}
        />

        {/* Min Input Slider */}
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

        {/* Max Input Slider */}
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

// 20 Aesthetic Colors List
const AESTHETIC_COLORS = [
  { name: 'Pure Snow', value: '#ffffff' },
  { name: 'Glacier Blue', value: '#e0f2fe' },
  { name: 'Aurora Green', value: '#adfec9' },
  { name: 'Pale Lavender', value: '#f3e8ff' },
  { name: 'Ice Rose', value: '#fce7f3' },
  { name: 'Soft Mint', value: '#ecfdf5' },
  { name: 'Golden Amber', value: '#fef3c7' },
  { name: 'Neon Coral', value: '#fca5a5' },
  { name: 'Seafoam Teal', value: '#99f6e4' },
  { name: 'Arctic Slub', value: '#e2e8f0' },
  { name: 'Mellow Peach', value: '#fed7aa' },
  { name: 'Lemon Chiffon', value: '#fef08a' },
  { name: 'Electric Cyan', value: '#00f5ff' },
  { name: 'Orchid Glow', value: '#fda4af' },
  { name: 'Ethereal Violet', value: '#d8b4fe' },
  { name: 'Deep Indigo', value: '#818cf8' },
  { name: 'Emerald Glow', value: '#34d399' },
  { name: 'Sunset Orange', value: '#fb923c' },
  { name: 'Rose Quartz', value: '#f472b6' },
  { name: 'Warm Charcoal', value: '#94a3b8' },
];

export default function SnowScreen({ tool, locale, backgrounds: propBg = [], audioFiles: propAudio = [], isCard = false }: SnowScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom Images State
  const [snowflakeImages, setSnowflakeImages] = useState<HTMLImageElement[]>([]);

  // Discovered Background Scenes & Audio Tracks
  const discovered = getToolAssets('snow-screen');
  const backgrounds = propBg.length > 0 ? propBg : discovered.backgrounds;
  const audioFiles = propAudio.length > 0 ? propAudio : discovered.audioFiles;

  const bgList = backgrounds.length > 0 ? backgrounds : ['/assets/snow-screen/backgrounds/bg.jpg'];
  const bgmList = audioFiles;

  // Selected background & sound options
  const [selectedBg, setSelectedBg] = useState<string>(bgList[0]);
  const [selectedBgm, setSelectedBgm] = useState<string>(bgmList.length > 0 ? bgmList[0] : 'none');
  const [bgmPlaying, setBgmPlaying] = useState<boolean>(false);
  const [bgmVolume, setBgmVolume] = useState<number>(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Default states
  const [snowflakeCount, setSnowflakeCount] = useState<number>(isCard ? 50 : 200);
  const [speed, setSpeed] = useState<[number, number]>([0.5, 2.5]);
  const [wind, setWind] = useState<[number, number]>([-0.5, 1.5]);
  const [radius, setRadius] = useState<[number, number]>([1.0, 4.0]);
  
  // Custom image options
  const [useImage, setUseImage] = useState<boolean>(false);
  const [imageOpacity, setImageOpacity] = useState<number>(0.8);
  const [imageRotationSpeed, setImageRotationSpeed] = useState<number>(1.0);
  const [imageRadius, setImageRadius] = useState<[number, number]>([12.0, 28.0]);

  // Circle snowflake color default
  const [color, setColor] = useState<string>('#ffffff');

  // Control panel toggle states
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isIdle, setIsIdle] = useState<boolean>(false);

  // Pre-load snowflake SVGs
  useEffect(() => {
    const urls = [
      '/assets/snow-screen/snowflake1.svg',
      '/assets/snow-screen/snowflake2.svg',
      '/assets/snow-screen/snowflake3.svg',
    ];
    const imgs = urls.map((url) => {
      const img = new Image();
      img.src = url;
      return img;
    });
    setSnowflakeImages(imgs);
  }, []);

  // Fullscreen event listener
  useEffect(() => {
    const onFullscreenChange = () => {
      const isCurrentlyFs = !!document.fullscreenElement;
      setIsFullscreen(isCurrentlyFs);
      if (isCurrentlyFs) {
        document.documentElement.classList.add('is-snow-fullscreen');
      } else {
        document.documentElement.classList.remove('is-snow-fullscreen');
      }
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, []);

  // Idle timer for cursor and control hiding in Fullscreen
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
      }, 3000); // 3 seconds idle
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

      // If typing in any input, ignore shortcuts
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
      } else if (key === 'c') {
        e.preventDefault();
        setUseImage((prev) => !prev);
      } else if (key === 'm') {
        e.preventDefault();
        setBgmPlaying((prev) => !prev);
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
  }, [isFullscreen]);

  // Audio playback and loop setup
  useEffect(() => {
    if (selectedBgm !== 'none' && selectedBgm) {
      let resolvedUrl: string;
      try {
        resolvedUrl = new URL(encodeURI(selectedBgm), window.location.origin).href;
      } catch {
        resolvedUrl = selectedBgm;
      }

      const currentSource = audioRef.current ? audioRef.current.src : '';

      if (!audioRef.current || currentSource !== resolvedUrl) {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        const audio = new Audio(resolvedUrl);
        audio.loop = true;
        audio.volume = bgmVolume;
        audioRef.current = audio;
      }

      if (bgmPlaying) {
        audioRef.current.play().catch((err) => {
          console.warn("Autoplay blocked or audio load error:", err);
        });
      } else {
        audioRef.current.pause();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  }, [selectedBgm, bgmPlaying]);

  // Sync volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = bgmVolume;
    }
  }, [bgmVolume]);

  // Audio cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

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
    setSnowflakeCount(200);
    setSpeed([0.5, 2.5]);
    setWind([-0.5, 1.5]);
    setRadius([1.0, 4.0]);
    setImageRadius([12.0, 28.0]);
    setUseImage(false);
    setImageOpacity(0.8);
    setImageRotationSpeed(1.0);
    setColor('#ffffff');
    setSelectedBg(bgList[0]);
    setSelectedBgm('none');
    setBgmPlaying(false);
    setBgmVolume(0.5);
  };

  return (
    <div
      ref={containerRef}
      className={`snow-container relative w-full overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 select-none bg-cover bg-center ${
        isCard ? 'w-full h-full pointer-events-none' : 'h-[480px] rounded-2xl'
      } ${
        isFullscreen ? 'is-fullscreen h-screen! w-screen! fixed! inset-0 z-99999 rounded-none!' : ''
      } ${isIdle && isFullscreen ? 'cursor-none' : ''}`}
      style={{ backgroundImage: `url(${selectedBg})` }}
    >
      {/* Snowfall Effect layer */}
      <Snowfall
        snowflakeCount={snowflakeCount}
        speed={speed}
        wind={wind}
        radius={useImage ? imageRadius : radius}
        color={useImage ? undefined : color}
        images={useImage ? snowflakeImages : undefined}
        opacity={useImage ? [imageOpacity * 0.3, imageOpacity] : undefined}
        rotationSpeed={useImage ? [-imageRotationSpeed, imageRotationSpeed] : undefined}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      />

      {/* Subtle vignette/shading overlay for atmospheric depth */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-6" />

      {/* Interactive Trigger in non-fullscreen */}
      {!isFullscreen && !isCard && (
        <div 
          className="absolute inset-0 cursor-pointer z-4"
          onClick={toggleFullscreen}
          title="Click to go Fullscreen"
        />
      )}

      {/* Top controls (Gear + Fullscreen) */}
      {!isCard && (
        <div 
          className={`absolute top-4 right-4 flex items-center gap-2.5 z-20 transition-opacity duration-300 ${
            isIdle && isFullscreen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`flex items-center justify-center w-10 h-10 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 text-white cursor-pointer transition-transform duration-300 backdrop-blur-md ${
              showSettings ? 'rotate-90 border-sky-400/50 text-sky-400' : ''
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

      {/* Control Drawer Panel (frosted glass) */}
      {isCard ? null :
        <div 
          className={`absolute bottom-0 inset-x-0 bg-neutral-950/85 backdrop-blur-xl border-t border-white/10 transition-transform duration-300 ease-out z-10 overflow-y-auto px-5 py-4 max-h-[75%] md:max-h-[60%] flex flex-col gap-4 ${
            showSettings ? 'translate-y-0' : 'translate-y-full'
          } ${isIdle && isFullscreen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase">Snow Customizer</h3>
            <p className="text-[10px] text-neutral-400 mt-0.5">Customize winter atmosphere and aesthetics</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={resetToDefaults}
              className="text-[11px] font-medium text-sky-400 bg-sky-950/30 hover:bg-sky-900/40 border border-sky-500/20 px-2.5 py-1 rounded-lg cursor-pointer transition-colors"
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

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Left Block - Counts & Speeds */}
          <div className="flex flex-col gap-3">
            {/* Snowflake Count */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-xs font-medium text-neutral-300">
                <span>Snowflake Count</span>
                <span className="font-mono text-xs text-sky-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-white/5">
                  {snowflakeCount}
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="800"
                step="10"
                value={snowflakeCount}
                onChange={(e) => setSnowflakeCount(Number(e.target.value))}
                className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
              />
            </div>

            {/* Speed Range Slider */}
            <DualRangeSlider
              min={0.1}
              max={8.0}
              step={0.1}
              value={speed}
              onChange={setSpeed}
              label="Falling Speed"
            />
          </div>

          {/* Right Block - Wind & Radius */}
          <div className="flex flex-col gap-3">
            {/* Wind Range Slider */}
            <DualRangeSlider
              min={-5.0}
              max={5.0}
              step={0.1}
              value={wind}
              onChange={setWind}
              label="Wind Drift"
            />

            {/* Radius Range Slider */}
            {!useImage ? (
              <DualRangeSlider
                min={0.5}
                max={15.0}
                step={0.5}
                value={radius}
                onChange={setRadius}
                label="Flake Size (Radius)"
              />
            ) : (
              <div className="flex flex-col gap-1 bg-sky-950/20 border border-sky-400/10 rounded-xl px-3 py-2 text-center h-full justify-center">
                <span className="text-xs text-sky-300 font-semibold">❄️ Photorealistic Mode Active</span>
                <span className="text-[10px] text-neutral-400 leading-tight">Circle size settings are disabled. Sizing is governed by the Photorealistic controls below.</span>
              </div>
            )}
          </div>
        </div>

        {/* Custom Image snow, Color selection, and Ambient Sounds side-by-side */}
        <div className="border-t border-white/5 pt-3 mt-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* Left Column: Custom Image Options OR Circle Color Tint Options */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="useImageCheckbox"
                checked={useImage}
                onChange={(e) => setUseImage(e.target.checked)}
                className="w-4 h-4 rounded border-neutral-700 bg-neutral-800 text-sky-500 checked:bg-sky-500 checked:border-sky-500 focus:ring-sky-500/20 focus:ring-2 cursor-pointer"
              />
              <label htmlFor="useImageCheckbox" className="text-xs font-semibold text-neutral-200 cursor-pointer select-none">
                ❄️ Use Photorealistic Snowflake Images
              </label>
            </div>

            {useImage ? (
              /* Sub-controls when Image selected */
              <div className="flex flex-col gap-3 bg-white/5 rounded-xl p-3 border border-white/5 mt-1 animate-fadeIn">
                {/* Image Flake Size Slider */}
                <DualRangeSlider
                  min={5.0}
                  max={50.0}
                  step={1.0}
                  value={imageRadius}
                  onChange={setImageRadius}
                  label="Image Snowflake Size"
                />

                {/* Opacity Control */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-xs font-medium text-neutral-300">
                    <span>Image Max Opacity</span>
                    <span className="font-mono text-xs text-sky-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-white/5">
                      {Math.round(imageOpacity * 100)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="1.0"
                    step="0.05"
                    value={imageOpacity}
                    onChange={(e) => setImageOpacity(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                  />
                </div>

                {/* Rotation Speed Control */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-xs font-medium text-neutral-300">
                    <span>Rotation Speed</span>
                    <span className="font-mono text-xs text-sky-450 bg-neutral-900/60 px-2 py-0.5 rounded border border-white/5">
                      {imageRotationSpeed.toFixed(1)}x
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.0"
                    max="4.0"
                    step="0.1"
                    value={imageRotationSpeed}
                    onChange={(e) => setImageRotationSpeed(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                  />
                </div>
              </div>
            ) : (
              /* Color selector when Image is NOT selected - Circular options! */
              <div className="flex flex-col gap-2 bg-white/5 rounded-xl p-3 border border-white/5 mt-1 animate-fadeIn h-full justify-center">
                <span className="text-[11px] font-semibold text-neutral-300 uppercase tracking-wider">Select Crystal Color Tint</span>
                <div className="flex flex-wrap gap-2 mt-1 justify-start">
                  {AESTHETIC_COLORS.map((item) => (
                    <button
                      key={item.value}
                      onClick={() => setColor(item.value)}
                      className={`h-7 w-7 rounded-full border flex items-center justify-center transition-all duration-150 relative group cursor-pointer ${
                        color === item.value 
                          ? 'border-sky-400 scale-110 shadow-[0_0_10px_rgba(56,189,248,0.5)]' 
                          : 'border-white/15 hover:border-white/35 hover:scale-105'
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
            )}
          </div>

          {/* Right Column: Dynamic Audio Sounds selector */}
          <div className="flex flex-col gap-2 bg-white/5 rounded-xl p-3 border border-white/5 lg:mt-7 mt-1 h-full justify-center">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-semibold text-neutral-300 uppercase tracking-wider">Ambient Sound Effects</span>
              {bgmList.length > 0 && (
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

            {bgmList.length === 0 ? (
              <div className="text-[10px] text-neutral-500 italic pb-1">No ambient files placed in backgrounds/bgm folder.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1.5">
                <div className="flex flex-col gap-1">
                  <select
                    value={selectedBgm}
                    onChange={(e) => {
                      setSelectedBgm(e.target.value);
                      if (e.target.value !== 'none') {
                        setBgmPlaying(true);
                      }
                    }}
                    className="bg-neutral-900 border border-white/10 text-xs text-white rounded-lg p-2 outline-none focus:border-sky-400 cursor-pointer"
                  >
                    <option value="none">Mute / No Sound</option>
                    {bgmList.map((bgm, idx) => (
                      <option key={bgm} value={bgm}>
                        Background Sound {idx + 1}
                      </option>
                    ))}
                  </select>
                </div>

                {/* BGM Volume */}
                <div className="flex flex-col gap-1 justify-center">
                  <div className="flex justify-between items-center text-[10px] text-neutral-400">
                    <span>Sound Volume</span>
                    <span className="font-mono text-sky-400">{Math.round(bgmVolume * 100)}%</span>
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

        {/* Dynamic Background Image Scene selector */}
        <div className="border-t border-white/5 pt-3 mt-1 flex flex-col gap-2">
          <span className="text-[11px] font-semibold text-neutral-300 uppercase tracking-wider">Select Background Scene</span>
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
                  style={{ backgroundImage: `url(${bg})` }}
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
        <div className="text-[10px] text-neutral-500 border-t border-white/5 pt-2 flex flex-wrap gap-x-4 gap-y-1">
          <span>⌨️ Press <strong className="text-neutral-400">F</strong> for Fullscreen</span>
          <span>• Space to Toggle Settings</span>
          <span>• <strong className="text-neutral-400">C</strong> to Toggle Image Mode</span>
          <span>• <strong className="text-neutral-400">M</strong> to Toggle Sound Mode</span>
          <span>• <strong className="text-neutral-400">R</strong> to Reset defaults</span>
        </div>
      </div>}
    </div>
  );
}
