import React, { useRef, useEffect, useState, useCallback } from 'react';
import type { Tool } from '../data/tools';
import type { Locale } from '../data/locales';

interface DvdScreensaverProps {
  tool: Tool;
  locale: Locale;
  isCard?: boolean;
}

// The colors the logo cycles through on each bounce. Kept saturated so every
// switch is obvious against a dark background.
const LOGO_COLORS = [
  '#ff3b30', '#ff9500', '#ffcc00', '#34c759', '#00c7be',
  '#30b0c7', '#007aff', '#5856d6', '#af52de', '#ff2d55',
];

export default function DvdScreensaver({ tool, locale, isCard = false }: DvdScreensaverProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [speed, setSpeed] = useState(isCard ? 1.6 : 1.2);
  const [logoSize, setLogoSize] = useState(isCard ? 70 : 120);
  const [bgColor, setBgColor] = useState('#0b0b12');
  const [paused, setPaused] = useState(false);

  // The animation loop reads these through refs so that dragging a slider retunes
  // the motion in place instead of tearing down the loop and resetting the logo.
  const speedRef = useRef(speed);
  const logoSizeRef = useRef(logoSize);
  const pausedRef = useRef(paused);
  const bgColorRef = useRef(bgColor);
  const resetRef = useRef(0);

  useEffect(() => { speedRef.current = speed; }, [speed]);
  useEffect(() => { logoSizeRef.current = logoSize; }, [logoSize]);
  useEffect(() => { pausedRef.current = paused; }, [paused]);
  useEffect(() => { bgColorRef.current = bgColor; }, [bgColor]);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current || isCard) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, [isCard]);

  useEffect(() => {
    if (isCard) return;
    const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, [isCard]);

  // Idle cursor hide when fullscreen
  useEffect(() => {
    if (isCard || !isFullscreen) {
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
  }, [isFullscreen, isCard]);

  // Keyboard shortcuts
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
      if (key === ' ' || key === 'Spacebar') {
        event.preventDefault();
        setPaused((prev) => !prev);
      } else if (key === 'r' || key === 'R') {
        resetRef.current += 1;
      } else if (key === 'f' || key === 'F') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isCard, toggleFullscreen]);

  // Bounce animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 800;
    let height = 480;
    let dpr = 1;

    let colorIndex = Math.floor(Math.random() * LOGO_COLORS.length);
    let x = 0;
    let y = 0;
    let dx = 1;
    let dy = 1;
    let seenReset = resetRef.current;
    let placed = false;

    const logoWidth = () => logoSizeRef.current;
    const logoHeight = () => logoSizeRef.current * 0.45;

    const nextColor = () => {
      let next = colorIndex;
      while (next === colorIndex) next = Math.floor(Math.random() * LOGO_COLORS.length);
      colorIndex = next;
    };

    // The logo always travels at 45 degrees, so the only thing that distinguishes one
    // run from another is where it starts. Starting from the centre every time would
    // make the whole path identical on every visit, so the position is randomised
    // alongside the direction.
    const place = () => {
      x = Math.random() * Math.max(1, width - logoWidth());
      y = Math.random() * Math.max(1, height - logoHeight());
      dx = Math.random() > 0.5 ? 1 : -1;
      dy = Math.random() > 0.5 ? 1 : -1;
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const host = isCard ? canvas.parentElement : canvas;
      const cssW = (isCard ? host?.clientWidth : canvas.clientWidth) || 800;
      const cssH = (isCard ? host?.clientHeight : canvas.clientHeight) || 480;
      width = cssW;
      height = cssH;
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!placed) {
        place();
        placed = true;
      } else {
        // Keep the logo inside the new bounds after a resize or fullscreen switch.
        x = Math.min(x, Math.max(0, width - logoWidth()));
        y = Math.min(y, Math.max(0, height - logoHeight()));
      }
    };
    resize();

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && canvas.parentElement) {
      resizeObserver = new ResizeObserver(() => resize());
      resizeObserver.observe(canvas.parentElement);
    } else {
      window.addEventListener('resize', resize);
    }

    // A stylized DVD wordmark: the disc ellipse with the letters across it. Drawn
    // with canvas primitives so it scales cleanly at any logo size.
    const drawLogo = (w: number, h: number, color: string) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = color;

      ctx.beginPath();
      ctx.ellipse(w / 2, h * 0.78, w * 0.46, h * 0.2, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = `italic 900 ${h * 0.72}px "Helvetica Neue", Arial, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('DVD', w / 2, h * 0.38);

      ctx.fillStyle = bgColorRef.current;
      ctx.font = `700 ${h * 0.17}px Arial, sans-serif`;
      ctx.fillText('VIDEO', w / 2, h * 0.79);
      ctx.restore();
    };

    const draw = () => {
      const w = logoWidth();
      const h = logoHeight();

      if (resetRef.current !== seenReset) {
        seenReset = resetRef.current;
        place();
      }

      ctx.fillStyle = bgColorRef.current;
      ctx.fillRect(0, 0, width, height);

      if (!pausedRef.current) {
        const step = speedRef.current * 2;
        x += dx * step;
        y += dy * step;

        const hitLeft = x <= 0;
        const hitRight = x + w >= width;
        const hitTop = y <= 0;
        const hitBottom = y + h >= height;
        const bouncedX = hitLeft || hitRight;
        const bouncedY = hitTop || hitBottom;

        if (bouncedX) {
          x = hitLeft ? 0 : width - w;
          dx = -dx;
        }
        if (bouncedY) {
          y = hitTop ? 0 : height - h;
          dy = -dy;
        }

        if (bouncedX || bouncedY) {
          nextColor();
        }
      }

      const color = LOGO_COLORS[colorIndex];
      drawLogo(w, h, color);

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      if (resizeObserver) resizeObserver.disconnect();
      else window.removeEventListener('resize', resize);
    };
  }, [isCard, isFullscreen]);

  return (
    <div
      ref={containerRef}
      className={`dvd-container relative w-full overflow-hidden select-none ${
        isCard ? 'w-full h-full pointer-events-none' : 'h-[480px] rounded-2xl shadow-2xl'
      } ${
        isFullscreen ? 'is-fullscreen h-screen! w-screen! fixed! inset-0 z-99999 rounded-none!' : ''
      } ${isIdle && isFullscreen ? 'cursor-none' : ''}`}
      style={{ backgroundColor: bgColor }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Top right controls */}
      {!isCard && (
        <div
          className={`absolute top-4 right-4 flex items-center gap-2.5 z-20 transition-opacity duration-300 ${
            isIdle && isFullscreen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <button
            onClick={() => setPaused((prev) => !prev)}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 text-white cursor-pointer transition-all duration-200 backdrop-blur-md hover:border-white/25"
            aria-label={paused ? 'Resume animation' : 'Pause animation'}
            title={paused ? 'Resume (Space)' : 'Pause (Space)'}
          >
            {paused ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
            )}
          </button>
          <button
            onClick={() => setShowSettings((prev) => !prev)}
            className={`flex items-center justify-center w-10 h-10 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 text-white cursor-pointer transition-all duration-200 backdrop-blur-md hover:border-white/25 ${
              showSettings ? 'rotate-90 border-white/30' : ''
            }`}
            aria-label="Toggle settings"
            title="Settings"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
          <button
            onClick={toggleFullscreen}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 text-white cursor-pointer transition-all duration-200 backdrop-blur-md hover:border-white/25"
            aria-label="Toggle Fullscreen"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 14h6v6M20 10h-6V4" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Settings drawer */}
      {!isCard && (
        <div
          className={`absolute inset-x-0 bottom-0 z-30 transition-transform duration-300 ${
            showSettings ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="m-3 rounded-2xl border border-white/10 bg-neutral-950/90 p-4 backdrop-blur-xl sm:m-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-wide text-white/60">Screensaver settings</p>
              <button
                onClick={() => setShowSettings(false)}
                className="rounded-md p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
                aria-label="Close settings"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span>Speed</span>
                  <span className="font-mono text-xs text-white bg-white/10 px-2 py-0.5 rounded border border-white/5">{speed.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="4"
                  step="0.1"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="mt-2 w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white"
                  aria-label="Animation speed"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span>Logo size</span>
                  <span className="font-mono text-xs text-white bg-white/10 px-2 py-0.5 rounded border border-white/5">{logoSize}px</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="260"
                  step="10"
                  value={logoSize}
                  onChange={(e) => setLogoSize(Number(e.target.value))}
                  className="mt-2 w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white"
                  aria-label="Logo size"
                />
              </div>

              <div>
                <p className="text-xs text-white/70">Background</p>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="h-8 w-12 cursor-pointer rounded border border-white/15 bg-transparent"
                    aria-label="Background color"
                  />
                  <span className="font-mono text-xs text-white/70">{bgColor}</span>
                </div>
              </div>

              <div className="flex flex-col justify-end gap-2">
                <button
                  type="button"
                  onClick={() => { resetRef.current += 1; }}
                  className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/10 cursor-pointer"
                >
                  Reset position (R)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
