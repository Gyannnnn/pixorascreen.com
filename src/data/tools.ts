import type { Locale } from './locales';

export type ToolCategoryId = 'colors' | 'savers' | 'pranks' | 'fake';
export type ToolKind = 'color' | 'test' | 'saver' | 'prank' | 'fake';

export type Tool = {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  localizedSlugs: Partial<Record<Exclude<Locale, 'en'>, string>>;
  category: ToolCategoryId;
  kind: ToolKind;
  color?: string;
  rgb?: string;
  accent?: string;
  /** English card summary (other locales: toolSummary() in translations.ts). Also feeds related-tool scoring. */
  summary: string;
  /** Not rendered: keyword inputs for getRelatedTools() only. Page text lives in src/content/tools/. */
  intent: string;
  useCases: string[];
  thumbnail?: string;
};

export const categories: Record<ToolCategoryId, { name: string; description: string }> = {
  colors: {
    name: 'Color Screens',
    description: 'Clean full-screen colors for lighting, photography, display checks, and ambient use.',
  },
  // testing: {
  //   name: 'Screen Testing',
  //   description: 'Purpose-built utilities for finding display defects, calibrating perception, and checking panels.',
  // },
  savers: {
    name: 'Screen Savers',
    description: 'Low-distraction animated screens for ambience, desk setups, and always-on displays.',
  },
  pranks: {
    name: 'Prank Screens',
    description: 'Convincing but harmless screens for jokes, demos, and theatrical browser effects.',
  },
  fake: {
    name: 'Fake Screens',
    description: 'Realistic operating-system style scenes for videos, demos, and staged presentations.',
  },
};

const localizedColor = (es: string, pt: string, fr: string, de: string, hi: string, ja: string) => ({
  es,
  pt,
  fr,
  de,
  hi,
  ja,
});

export const tools: Tool[] = [
  { id: 'white-screen', name: 'White Screen', shortName: 'White', slug: 'white-screen', localizedSlugs: localizedColor('pantalla-blanca', 'tela-branca', 'ecran-blanc', 'weisser-bildschirm', 'safed-screen', 'shiroi-gamen'), category: 'colors', kind: 'color', color: '#ffffff', rgb: '255, 255, 255', summary: 'A pure white fullscreen tool for cleaning checks, soft lighting, display inspection, and photography fill.', intent: 'maximum neutral brightness without visual clutter', useCases: ['dust and smudge detection', 'soft light for video calls', 'product photography fill', 'edge uniformity checks'] },
  { id: 'black-screen', name: 'Black Screen', shortName: 'Black', slug: 'black-screen', localizedSlugs: localizedColor('pantalla-negra', 'tela-preta', 'ecran-noir', 'schwarzer-bildschirm', 'kala-screen', 'kuroi-gamen'), category: 'colors', kind: 'color', color: '#000000', rgb: '0, 0, 0', summary: 'A true black fullscreen surface for OLED checks, dead pixel discovery, glare reduction, and dark-room use.', intent: 'a quiet black field with no page chrome', useCases: ['dead pixel checks', 'OLED contrast inspection', 'dark room standby', 'projector black-level reference'] },
  { id: 'green-screen', name: 'Green Screen', shortName: 'Green', slug: 'green-screen', localizedSlugs: localizedColor('pantalla-verde', 'tela-verde', 'ecran-vert', 'gruener-bildschirm', 'hara-screen', 'midori-gamen'), category: 'colors', kind: 'color', color: '#00ff00', rgb: '0, 255, 0', summary: 'A free green screen online tool using the standard chroma key green (#00FF00) for video editing, streaming backgrounds, TikTok and social content, display testing, and photography lighting reference.', intent: 'the exact chroma key green (#00FF00) for clean video keying, streaming backgrounds, and display testing', useCases: ['chroma key video editing', 'streaming and video call backgrounds', 'TikTok and social media content creation', 'display panel testing', 'photography lighting reference'] },
  { id: 'blue-screen', name: 'Blue Screen', shortName: 'Blue', slug: 'blue-screen', localizedSlugs: localizedColor('pantalla-azul', 'tela-azul', 'ecran-bleu', 'blauer-bildschirm', 'neela-screen', 'aoi-gamen'), category: 'colors', kind: 'color', color: '#0066ff', rgb: '0, 102, 255', summary: 'A saturated blue fullscreen field for display color checks, ambient tone, and video setups.', intent: 'stable blue light without controls blocking the view', useCases: ['blue channel testing', 'ambient desk lighting', 'video color wash', 'contrast comparison'] },
  { id: 'red-screen', name: 'Red Screen', shortName: 'Red', slug: 'red-screen', localizedSlugs: localizedColor('pantalla-roja', 'tela-vermelha', 'ecran-rouge', 'roter-bildschirm', 'lal-screen', 'akai-gamen'), category: 'colors', kind: 'color', color: '#ff0000', rgb: '255, 0, 0', summary: 'A free red screen online tool to turn your display into a solid red fullscreen light, perform red subpixel dead pixel checks, preserve night vision, and create ambient red lighting.', intent: 'pure red light online to test displays, preserve night vision, check subpixels, or set up video lighting', useCases: ['red subpixel dead pixel checks', 'night vision preservation', 'TikTok light cast', 'display monitor screen cleaning', 'projector color alignment', 'eye comfort reading'] },
  { id: 'orange-screen', name: 'Orange Screen', shortName: 'Orange', slug: 'orange-screen', localizedSlugs: localizedColor('pantalla-naranja', 'tela-laranja', 'ecran-orange', 'oranger-bildschirm', 'narangi-screen', 'orenji-gamen'), category: 'colors', kind: 'color', color: '#ff8a00', rgb: '255, 138, 0', summary: 'A warm orange fullscreen page online for ambient lighting, photography fill, display testing, and aesthetic backgrounds.', intent: 'get a full orange screen online free for pc, mobile, or iphone to test displays, generate warm light, or clean monitors', useCases: ['orange screen light for video calls', 'full orange screen background aesthetic', 'orange screen for pc and mobile diagnostics', 'orange screen of death check', 'orange screen method image tracing', 'orange screen online png download'] },
  { id: 'yellow-screen', name: 'Yellow Screen', shortName: 'Yellow', slug: 'yellow-screen', localizedSlugs: localizedColor('pantalla-amarilla', 'tela-amarela', 'ecran-jaune', 'gelber-bildschirm', 'peela-screen', 'kiiroi-gamen'), category: 'colors', kind: 'color', color: '#ffdd00', rgb: '255, 221, 0', summary: 'A bright yellow screen for visibility checks, warm fill light, and attention-grabbing full-screen color.', intent: 'high visibility yellow without distractions', useCases: ['screen brightness checks', 'warning-style visuals', 'creative lighting', 'color contrast experiments'] },
  { id: 'purple-screen', name: 'Purple Screen', shortName: 'Purple', slug: 'purple-screen', localizedSlugs: localizedColor('pantalla-morada', 'tela-roxa', 'ecran-violet', 'lila-bildschirm', 'baingani-screen', 'murasaki-gamen'), category: 'colors', kind: 'color', color: '#7c3aed', rgb: '124, 58, 237', summary: 'A blank purple screen online tool for custom wallpapers, ambient lighting cast, video backgrounds, and screen testing.', intent: 'get a full purple screen online free for PC, mobile, or iPhone to test displays, generate ambient vibe light, or clean monitors', useCases: ['purple screen light for video calls', 'purple screen wallpaper background', 'purple screen for phone and tv diagnostics', 'blank computer screen testing', 'ubuntu purple screen startup check', 'purple screen savers visual vibe'] },
  { id: 'pink-screen', name: 'Pink Screen', shortName: 'Pink', slug: 'pink-screen', localizedSlugs: localizedColor('pantalla-rosa', 'tela-rosa', 'ecran-rose', 'rosa-bildschirm', 'gulabi-screen', 'pinku-gamen'), category: 'colors', kind: 'color', color: '#ff4db8', rgb: '255, 77, 184', summary: 'A vivid pink fullscreen color for lighting, chromatic testing, and polished visual backdrops.', intent: 'controlled pink light for practical and creative use', useCases: ['creator backdrops', 'color wash lighting', 'display tone comparison', 'visual mood boards'] },
  { id: 'cyan-screen', name: 'Cyan Screen', shortName: 'Cyan', slug: 'cyan-screen', localizedSlugs: localizedColor('pantalla-cian', 'tela-ciano', 'ecran-cyan', 'cyan-bildschirm', 'cyan-screen', 'shian-gamen'), category: 'colors', kind: 'color', color: '#00e5ff', rgb: '0, 229, 255', summary: 'A crisp cyan fullscreen utility for color channel checks, ambient lighting, and digital backgrounds.', intent: 'bright cool color with easy value copying', useCases: ['cool ambient lighting', 'cyan channel checks', 'video backgrounds', 'design color reference'] },
  { id: 'brown-screen', name: 'Brown Screen', shortName: 'Brown', slug: 'brown-screen', localizedSlugs: localizedColor('pantalla-marron', 'tela-marrom', 'ecran-marron', 'brauner-bildschirm', 'bhura-screen', 'chairo-gamen'), category: 'colors', kind: 'color', color: '#7a4a24', rgb: '122, 74, 36', summary: 'A calm brown fullscreen color for warm references, staged scenes, and display tone comparison.', intent: 'earth-toned screen color with utility controls', useCases: ['warm palette checks', 'set dressing screens', 'photography fill', 'contrast testing'] },
  { id: 'grey-screen', name: 'Grey Screen', shortName: 'Grey', slug: 'grey-screen', localizedSlugs: localizedColor('pantalla-gris', 'tela-cinza', 'ecran-gris', 'grauer-bildschirm', 'slate-screen', 'haiiro-gamen'), category: 'colors', kind: 'color', color: '#808080', rgb: '128, 128, 128', summary: 'A neutral grey fullscreen surface for uniformity, brightness balance, and midtone display checks.', intent: 'balanced midtone output for evaluating panels', useCases: ['dirty screen effect checks', 'midtone uniformity', 'brightness balance', 'neutral background'] },
  { id: 'custom-color-screen', name: 'Custom Color Screen', shortName: 'Custom Color', slug: 'custom-color-screen', localizedSlugs: {}, category: 'colors', kind: 'color', color: '#0070f3', rgb: '0, 112, 243', summary: 'Build any fullscreen color using HEX, RGB, HSL, picker, randomizer, recent colors, and favorites.', intent: 'one screen where any exact color can become fullscreen', useCases: ['brand color previews', 'wallpaper experiments', 'lighting tests', 'design handoff checks'] },
  { id: 'gradient-screen', name: 'Gradient Screen', shortName: 'Gradient', slug: 'gradient-screen', localizedSlugs: {}, category: 'colors', kind: 'color', color: 'linear-gradient(135deg, #007cf0, #00dfd8, #7928ca, #ff0080, #f9cb28)', summary: 'A polished fullscreen gradient for visual testing, creative backdrops, and ambient display use.', intent: 'smooth multi-stop color transitions across the display', useCases: ['banding checks', 'video backdrops', 'ambient color washes', 'wallpaper previews'] },
  { id: 'rgb-screen', name: 'RGB Screen', shortName: 'RGB', slug: 'rgb-screen', localizedSlugs: localizedColor('pantalla-rgb', 'tela-rgb', 'ecran-rgb', 'rgb-bildschirm', 'rgb-screen', 'rgb-gamen'), category: 'colors', kind: 'color', color: '#00ff88', rgb: '0, 255, 136', summary: 'A fullscreen RGB screen test & color calibration utility to inspect subpixel health, find dead/stuck pixels, test monitor color channels, and generate solid wallpapers.', intent: 'full-screen subpixel diagnosis, monitor color channel calibration, and stuck pixel detection', useCases: ['RGB subpixel health test', 'dead and stuck pixel detection', 'monitor color channel calibration', 'OLED and IPS panel uniformity test', 'RGB fill light and background preview'] },
  { id: 'hex-screen', name: 'HEX Screen', shortName: 'HEX', slug: 'hex-screen', localizedSlugs: localizedColor('pantalla-hex', 'tela-hex', 'ecran-hex', 'hex-bildschirm', 'hex-screen', 'hex-gamen'), category: 'colors', kind: 'color', color: '#171717', rgb: '23, 23, 23', summary: 'A fullscreen HEX color tool to preview exact CSS hex codes, test multi-color palettes, check dark mode shades, and download custom wallpapers.', intent: 'full-screen HEX color code previewing, brand color testing, and palette validation', useCases: ['CSS HEX color code previews', 'brand guidelines color testing', 'dark mode HEX shade review (#121212, #000000)', 'HEX color palette comparison', '4K HEX wallpaper download'] },
  { id: 'dead-pixel-test', name: 'Dead Pixel Test', shortName: 'Dead Pixel', slug: 'dead-pixel-test', localizedSlugs: localizedColor('test-de-pixeles-muertos', 'teste-de-pixels-mortos', 'test-de-pixels-morts', 'pixelfehler-test', 'mrit-pixel-test', 'dotto-nuke-test'), category: 'colors', kind: 'test', color: '#808080', rgb: '128, 128, 128', summary: 'A guided six color test that cycles black, white, red, green, blue, and grey fullscreen to check any screen for dead pixels, stuck pixels, and backlight bleeding.', intent: 'a complete, repeatable inspection pass instead of a single solid color', useCases: ['new monitor and laptop checks', 'phone and tablet screen inspection', 'used device and resale checks', 'warranty claim documentation', 'sub-pixel channel isolation', 'backlight uniformity checks'] },
  { id: 'oled-burn-in-test', name: 'OLED Burn-In Test', shortName: 'Burn-In', slug: 'oled-burn-in-test', localizedSlugs: {}, category: 'colors', kind: 'test', color: '#808080', rgb: '128, 128, 128', summary: 'A two mode OLED burn-in test: flat grey and color fills to reveal existing ghosting, plus a moving pattern that helps prevent uneven pixel ageing on OLED and AMOLED screens.', intent: 'both halves of the burn-in problem, checking for it and helping prevent it, on one screen', useCases: ['OLED and AMOLED phone checks', 'OLED TV and monitor inspection', 'used device and resale checks', 'idle screen protection', 'image retention checks on LCD', 'warranty claim documentation'] },
  // { id: 'stuck-pixel-fix', name: 'Stuck Pixel Fix', shortName: 'Stuck Pixel', slug: 'stuck-pixel-fix', localizedSlugs: {}, category: 'testing', kind: 'test', color: '#ff0000', summary: 'Run fast color transitions that may help loosen a stuck pixel while you monitor the result.', intent: 'controlled flashing patterns with safety guidance', useCases: ['stuck subpixel attempts', 'short repair sessions', 'panel troubleshooting', 'before-and-after checks'] },
  // { id: 'burn-in-test', name: 'Burn-in Test', shortName: 'Burn-in', slug: 'burn-in-test', localizedSlugs: {}, category: 'testing', kind: 'test', color: '#111111', summary: 'Reveal image retention and OLED burn-in patterns with neutral fills and contrast transitions.', intent: 'careful retention inspection without unnecessary page UI', useCases: ['OLED checks', 'phone trade-in inspection', 'TV uniformity review', 'static UI retention tests'] },
  // { id: 'brightness-test', name: 'Brightness Test', shortName: 'Brightness', slug: 'brightness-test', localizedSlugs: {}, category: 'testing', kind: 'test', color: '#f7f7f7', summary: 'Evaluate brightness steps, glare, and comfort with controlled full-screen luminance levels.', intent: 'quick perceived brightness calibration', useCases: ['desk setup tuning', 'laptop brightness comparison', 'projector checks', 'eye comfort review'] },
  // { id: 'contrast-test', name: 'Contrast Test', shortName: 'Contrast', slug: 'contrast-test', localizedSlugs: {}, category: 'testing', kind: 'test', color: '#101010', summary: 'Check black, white, and midtone contrast with readable patterns and fullscreen comparisons.', intent: 'make contrast issues visible quickly', useCases: ['accessibility QA', 'monitor comparison', 'projector setup', 'content review'] },
  // { id: 'gamma-test', name: 'Gamma Test', shortName: 'Gamma', slug: 'gamma-test', localizedSlugs: {}, category: 'testing', kind: 'test', color: '#777777', summary: 'Use neutral tone references to evaluate gamma perception and midtone rendering.', intent: 'midtone-focused display evaluation', useCases: ['photo editing setup', 'monitor comparison', 'tone curve review', 'print preview preparation'] },
  // { id: 'gradient-test', name: 'Gradient Test', shortName: 'Gradient Test', slug: 'gradient-test', localizedSlugs: {}, category: 'testing', kind: 'test', color: 'linear-gradient(90deg, #000, #fff)', summary: 'Inspect banding, uneven gradients, and compression artifacts with fullscreen gradients.', intent: 'smooth gradient inspection across the entire panel', useCases: ['banding checks', 'GPU output review', 'projector calibration', 'wallpaper QA'] },
  // { id: 'color-accuracy-test', name: 'Color Accuracy Test', shortName: 'Color Accuracy', slug: 'color-accuracy-test', localizedSlugs: {}, category: 'testing', kind: 'test', color: '#0070f3', summary: 'Compare key color fields and neutral tones for practical display color review.', intent: 'accessible color reference pages for non-lab checks', useCases: ['design review', 'monitor comparison', 'video setup', 'presentation QA'] },
  { id: 'fireplace-screen', name: 'Fireplace Screen', shortName: 'Fireplace', slug: 'fireplace-screen', localizedSlugs: {}, category: 'savers', kind: 'saver', color: 'linear-gradient(180deg, #190a05, #ff5a1f)', summary: 'An online virtual fireplace screen for desktop, laptop, monitor, and TV displays to create cozy room ambience with realistic fire visuals and crackling audio.', intent: 'cozy virtual fireplace ambience with realistic animated flames, crackling fire sound, and responsive fullscreen controls', useCases: ['desktop & laptop ambience', 'TV fireplace background', 'study & focus environment', 'holiday & winter decor', 'relaxing screensaver alternative'] },
  { id: 'aquarium-screen', name: 'Aquarium Screen', shortName: 'Aquarium', slug: 'aquarium-screen', localizedSlugs: { es: 'pantalla-de-acuario', pt: 'tela-de-aquario', fr: 'ecran-aquarium', de: 'aquarium-bildschirm', hi: 'aquarium-screen', ja: 'aquarium-gamen' }, category: 'savers', kind: 'saver', color: 'linear-gradient(180deg, #003d66, #00bcd4)', summary: 'A free online aquarium screen tool to turn any display into a relaxing virtual fish tank with animated tropical fish, water bubbles, ocean soundscapes, custom color themes, and clock overlay.', intent: 'free virtual aquarium screen online for desktop, laptop, monitor, and Smart TV with animated tropical fish, bubbles, ocean soundscapes, and clock overlay', useCases: ['desktop & laptop ambience', 'TV aquarium background', 'office & study relaxation', 'café & waiting room displays', 'fullscreen screensaver alternative', 'second monitor decoration'] },
  { id: 'matrix-screen', name: 'Matrix Screen', shortName: 'Matrix', slug: 'matrix-screen', localizedSlugs: { es: 'pantalla-matrix', pt: 'tela-matrix', fr: 'ecran-matrix', de: 'matrix-bildschirm', hi: 'matrix-screen', ja: 'matrix-gamen' }, category: 'savers', kind: 'saver', color: '#001b0b', summary: 'An online Matrix screen with customizable digital rain, neon colors, and glitch effects for desktop, laptop, monitor, and TV — no download needed.', intent: 'customizable Matrix-style digital rain with personalized text, multiple color themes, ambient audio drones, and fullscreen immersion', useCases: ['developer & coding desk setup', 'cyberpunk gaming room ambience', 'streaming & video backgrounds', 'hacker-style display decoration', 'TV ambient screensaver', 'creative workspace atmosphere'] },
  { id: 'rain-screen', name: 'Rain Screen', shortName: 'Rain', slug: 'rain-screen', localizedSlugs: { es: 'pantalla-de-lluvia', pt: 'tela-de-chuva', fr: 'ecran-pluie', de: 'regen-bildschirm', hi: 'rain-screen', ja: 'rain-gamen' }, category: 'savers', kind: 'saver', color: 'linear-gradient(180deg, #0f172a, #64748b)', summary: 'An online rain screen with realistic rain streaks, raindrops on glass, ambient thunder, and customizable audio for desktop, laptop, monitor, and TV — no download needed.', intent: 'immersive rain ambience with dual rain modes, adjustable wind and density, lightning effects, and fullscreen controls for focus, study, sleep, and relaxation', useCases: ['desktop & laptop ambience', 'study & deep work sessions', 'sleep & relaxation aid', 'cozy rainy day atmosphere', 'café & waiting room displays', 'livestream backgrounds', 'virtual rain screensaver', 'room decoration & mood lighting'] },
  { id: 'snow-screen', name: 'Snow Screen', shortName: 'Snow', slug: 'snow-screen', localizedSlugs: { es: 'pantalla-de-nieve', pt: 'tela-de-neve', fr: 'ecran-de-neige', de: 'schnee-bildschirm', hi: 'snow-screen', ja: 'snow-gamen' }, category: 'savers', kind: 'saver', color: 'linear-gradient(180deg, #eff6ff, #ffffff)', summary: 'An online snow screen with falling snow, photorealistic snowflakes, wind drift, and 20 color presets for desktop, laptop, monitor, and TV — no download needed.', intent: 'immersive winter ambience with customizable snowfall, wind, flake size, photorealistic images, and fullscreen controls for seasonal decor and relaxation', useCases: ['desktop & laptop ambience', 'Christmas & holiday decoration', 'cozy winter room atmosphere', 'study & relaxation background', 'café & office winter displays', 'Smart TV seasonal screensaver', 'livestream backgrounds', 'festive party decoration'] },
  { id: 'galaxy-screen', name: 'Galaxy Screen', shortName: 'Galaxy', slug: 'galaxy-screen', localizedSlugs: {}, category: 'savers', kind: 'saver', color: 'radial-gradient(circle, #7c3aed, #020617)', summary: 'An interactive online galaxy screen with realistic spiral galaxy simulation, 5 color themes, star density and rotation controls, gravitational lensing black hole effect, and ambient space audio — no download needed.', intent: 'realistic and customizable spiral galaxy animation with interactive gravitational lensing, adjustable 3D parameters, and ambient space soundscapes for immersive fullscreen display', useCases: ['desktop & laptop ambience', 'TV & home theater background', 'relaxation & meditation', 'space-themed room decoration', 'gaming room ambience', 'streaming & video backgrounds', 'classroom astronomy displays', 'digital signage & exhibitions', 'OLED display showcase'] },
  { id: 'stars-screen', name: 'Stars Screen', shortName: 'Stars', slug: 'stars-screen', localizedSlugs: {}, category: 'savers', kind: 'saver', color: '#020617', summary: 'A quiet star-field screen saver for dark displays, projectors, and ambient backgrounds.', intent: 'minimal starry display that does not overwhelm a room', useCases: ['projector ambience', 'dark desk setup', 'stage background', 'calm screensaver'] },
  { id: 'dvd-screensaver', name: 'Bouncing DVD Logo Screensaver', shortName: 'DVD Logo', slug: 'dvd-screensaver', localizedSlugs: {}, category: 'savers', kind: 'saver', color: '#0b0b12', summary: 'The classic bouncing DVD logo screensaver online, running fullscreen with adjustable speed, logo size, and background color, and a new logo color on every bounce.', intent: 'the familiar bouncing logo loop, running fullscreen with the corner hit finally kept score of', useCases: ['streaming intermissions and starting-soon screens', 'office and store ambient displays', 'a calm loop to focus or think against', 'nostalgia and second-screen viewing', 'waiting-room and event background'] },
  { id: 'clock-screen', name: 'Clock Screen', shortName: 'Clock', slug: 'clock-screen', localizedSlugs: {}, category: 'savers', kind: 'saver', color: '#111111', summary: 'An online flip clock in fullscreen with retro flip animation, 6 aesthetic themes, Pomodoro focus timer, ambient sound effects, and brightness dimmer — no download needed.', intent: 'aesthetic fullscreen flip clock experience with retro flip-card animation, customizable themes, and integrated Pomodoro timer for focus sessions', useCases: ['desktop & laptop ambience', 'study & focus sessions', 'Pomodoro productivity', 'second monitor clock display', 'classroom & exam timers', 'live streaming & video backgrounds', 'bedside & nightstand clock', 'office & meeting room displays'] },
  { id: 'countdown-timer', name: 'Countdown Timer & Stopwatch', shortName: 'Timer', slug: 'countdown-timer', localizedSlugs: {}, category: 'savers', kind: 'saver', color: '#0b0b0f', summary: 'A fullscreen countdown timer and stopwatch with a display big enough to read from the back of a room, quick presets, a custom duration, selectable alarms, and lap times.', intent: 'a timer you can read from across the room rather than a widget you have to walk up to', useCases: ['presentations and conference talks', 'classroom activities and exams', 'workshops and timed exercises', 'cooking and kitchen timing', 'workouts and interval training', 'focus and study sessions'] },
  { id: 'ambient-screen', name: 'Ambient Screen', shortName: 'Ambient', slug: 'ambient-screen', localizedSlugs: { es: 'pantalla-ambiental', pt: 'tela-ambiente', fr: 'ecran-ambiant', de: 'ambiente-bildschirm', hi: 'ambient-screen', ja: 'ambient-gamen' }, category: 'savers', kind: 'saver', color: 'linear-gradient(135deg, #007cf0, #ff0080, #f9cb28)', summary: 'A free online ambient screen tool to turn your display into an aesthetic animated background with fluid gradients, floating stars, relaxing soundscapes, Pomodoro focus timer, and guided breathing.', intent: 'get a free ambient screen online for desktop, laptop, monitor, or Smart TV to boost focus, practice meditation, or create relaxing background ambience', useCases: ['desktop & laptop focus ambience', 'meditation & mindfulness relaxation', 'Pomodoro productivity sessions', 'Smart TV ambient living room display', 'relaxing bedroom & bedside lighting', 'office & study background atmosphere', 'guided box breathing exercises', 'lofi & rainfall soundscape mixing'] },
  { id: 'broken-screen', name: 'Broken Screen', shortName: 'Broken', slug: 'broken-screen', localizedSlugs: {}, category: 'pranks', kind: 'prank', color: '#0b0b0b', summary: 'A harmless broken-screen prank page with a convincing fullscreen cracked-display effect. The best fake broken screen simulator for pranks, jokes, and funny theatrical moments.', intent: 'realistic cracked display simulation for harmless pranks, video scenes, and theatrical staging without any downloads or installations', useCases: ['friendly jokes on friends and family', 'fake broken monitor prank', 'fake broken laptop screen prank', 'fake cracked phone display prank', 'April Fool prank and office jokes', 'video scenes and YouTube prank content', 'TikTok and social media prank videos', 'stage props and theatrical productions', 'gaming stream intermissions', 'classroom demonstrations'] },
  { id: 'hacker-typer', name: 'Hacker Typer', shortName: 'Hacker Typer', slug: 'hacker-typer', localizedSlugs: {}, category: 'pranks', kind: 'prank', color: '#001b0b', summary: 'A fake terminal typing screen for cinematic demos, jokes, and presentation moments.', intent: 'convincing terminal-style interaction in the browser', useCases: ['video scenes', 'classroom demos', 'friendly jokes', 'event screens'] },
  { id: 'blue-screen-prank', name: 'Blue Screen Prank', shortName: 'Blue Screen', slug: 'blue-screen-prank', localizedSlugs: {}, category: 'pranks', kind: 'prank', color: '#0078d7', summary: 'A highly realistic Windows BSOD simulation with animated progress, stop codes, and fullscreen crash behavior. The most convincing fake blue screen prank online — no download, no risk.', intent: 'an authentic Windows BSOD experience that feels indistinguishable from the real screen — perfect for pranks, content creation, and tech demonstrations', useCases: ['pranking friends and family', 'fake Windows crash at the office', 'YouTube and TikTok prank videos', 'livestream and gaming intermissions', 'tech training and educational demos', 'theater and stage productions', 'April Fools Day pranks', 'content creation and thumbnail props'] },
  { id: 'windows-xp-crash', name: 'Windows XP Crash', shortName: 'XP Crash', slug: 'windows-xp-crash', localizedSlugs: { es: 'xp-crash', pt: 'xp-crash', fr: 'xp-crash', de: 'xp-crash', hi: 'xp-crash', ja: 'xp-crash' }, category: 'pranks', kind: 'prank', color: '#003399', summary: 'A realistic Windows XP crash simulator for desktop pranks, retro nostalgia, and harmless fun. Recreate the full XP desktop experience — explorer.exe error dialogs, cascading crash windows, and classic BSOD transition.', intent: 'authentic Windows XP crash simulation with desktop environment, explorer.exe error dialogs, cascading crash windows, and nostalgic BSOD transition for pranks and retro computing enthusiasts', useCases: ['Windows XP desktop prank simulation', 'retro computing nostalgia experience', 'friendly office and classroom pranks', 'YouTube and TikTok prank video content', 'livestream and gaming intermissions', 'April Fools pranks and creative staging', 'BSOD nostalgia and retro desktop recreation', 'explorer.exe error cascade visual effect', 'fullscreen prank effect for friends', 'educational retro OS demonstration'] },
  { id: 'radar-screen', name: 'Radar Screen', shortName: 'Radar', slug: 'radar-screen', localizedSlugs: { es: 'pantalla-de-radar', pt: 'tela-de-radar', fr: 'ecran-radar', de: 'radar-bildschirm', hi: 'radar-screen', ja: 'radar-gamen' }, category: 'pranks', kind: 'prank', color: '#001b0b', summary: 'A free online radar screen simulator with real-time sweep animation, sonar ping audio, target tracking, and customizable tactical display. Fullscreen radar effect for desktop, laptop, monitor, and TV — no download needed.', intent: 'immersive fullscreen radar simulation with authentic sweep beam, target interception, simple geolocation, and customizable tactical HUD for presentations, streaming, room decoration, and creative staging', useCases: ['presentation and livestream backgrounds', 'sci-fi and cyberpunk room decoration', 'YouTube and video production props', 'escape room and theatrical staging', 'gaming room and hacker setup ambience', 'classroom STEM demonstrations', 'party decoration and event displays', 'streaming overlays and intermission screens', 'tactical and military themed displays', 'film and content creation backgrounds'] },
  { id: 'white-noise-screen', name: 'White Noise Screen', shortName: 'White Noise', slug: 'white-noise-screen', localizedSlugs: { es: 'pantalla-ruido-blanco', pt: 'tela-ruido-branco', fr: 'ecran-bruit-blanc', de: 'weiss-rauschen-bildschirm', hi: 'white-noise-screen', ja: 'shiroi-noizu-gamen' }, category: 'pranks', kind: 'prank', color: '#d4d4d4', summary: 'A free online white noise screen (TV static) simulator with authentic analog noise, CRT scanlines, VHS glitch effects, and audio static. Fullscreen retro TV effect for desktop, laptop, monitor, and TV — no download needed.', intent: 'authentic fullscreen analog television static simulation with multiple noise styles, CRT scanline overlay, VHS drift effects, and realistic audio static for retro effects, film production, and entertainment', useCases: ['retro TV and VHS aesthetic scenes', 'film and video production backgrounds', 'YouTube and streaming intermission screens', 'horror and Halloween themed displays', 'cinematic transitions and title sequences', 'escape room and theatre stage props', 'photography and creative backdrops', 'gaming room and ambience decoration', 'presentation and event visual effects', 'music video and content creation props'] },
  { id: 'fake-virus-screen', name: 'Fake Virus Screen', shortName: 'Fake Virus', slug: 'fake-virus-screen', localizedSlugs: {}, category: 'pranks', kind: 'prank', color: '#111827', summary: 'A harmless fake virus screen simulator with 4 realistic alert styles — Chrome malware warning, Microsoft Defender SmartScreen, Windows Security antivirus dashboard, and WannaCry ransomware. Free online prank tool for theatrical browser effects, video staging, and classroom demonstrations.', intent: 'a dramatic fake virus warning experience that looks convincing but stays completely safe, reversible, and browser-only', useCases: ['friendly pranks and office jokes', 'YouTube and TikTok prank videos', 'streaming and gaming intermissions', 'cybersecurity awareness demonstrations', 'classroom and training presentations', 'theatre stage productions and escape rooms', 'Halloween and party effects', 'video production and content creation'] },
  { id: 'fake-video-call', name: 'Fake Video Call Screen', shortName: 'Video Call', slug: 'fake-video-call', localizedSlugs: {}, category: 'pranks', kind: 'prank', color: '#0d1117', summary: 'A generic fullscreen video call simulation with a participant grid, mute and camera controls, a connecting state, and a freeze effect that mimics a bad connection. Nothing connects and no camera is used.', intent: 'a convincing but entirely fake video call you can put on screen for a joke, a skit, or a moment away from the desk', useCases: ['pranks and April Fools jokes', 'YouTube and TikTok skits', 'video and social content backdrops', 'presentations about video-call etiquette', 'a lighthearted reason to step away briefly', 'screen recording and stage backdrops'] },
  // { id: 'terminal-screen', name: 'Terminal Screen', shortName: 'Terminal', slug: 'terminal-screen', localizedSlugs: {}, category: 'pranks', kind: 'prank', color: '#050505', summary: 'A premium terminal-style fullscreen page for demos, code-themed scenes, and ambient setups.', intent: 'minimal terminal atmosphere without installing anything', useCases: ['developer videos', 'demo backdrops', 'event staging', 'ambient screen'] },
  { id: 'windows-update', name: 'Fake Windows Update Screen', shortName: 'Windows Update', slug: 'windows-update', localizedSlugs: {}, category: 'fake', kind: 'fake', color: '#0078d7', summary: 'A realistic fake Windows Update screen simulator with 4 modes — spinning dots, update progress bar, blue screen of death, and recovery mode. Free online prank tool for harmless staged demos, video props, classroom jokes, and event screens.', intent: 'a convincing Windows Update simulation for harmless pranks, video production, and screen effects', useCases: ['friendly pranks and office jokes', 'YouTube and TikTok prank videos', 'streaming and gaming intermissions', 'video production and content creation', 'classroom demonstrations', 'theatre stage productions and escape rooms', 'event screens and conference displays', 'screen recording backdrops'] },
  // { id: 'windows-xp-screen', name: 'Windows XP Screen', shortName: 'Windows XP', slug: 'windows-xp-screen', localizedSlugs: {}, category: 'fake', kind: 'fake', color: '#3b82f6', summary: 'A nostalgic desktop-inspired fake screen for retro videos, demos, and themed presentations.', intent: 'retro desktop atmosphere inside a static webpage', useCases: ['retro videos', 'demo staging', 'party displays', 'nostalgia projects'] },
  // { id: 'windows-11-screen', name: 'Windows 11 Screen', shortName: 'Windows 11', slug: 'windows-11-screen', localizedSlugs: {}, category: 'fake', kind: 'fake', color: '#0ea5e9', summary: 'A modern desktop-inspired fake screen for videos, staged interfaces, and presentation pauses.', intent: 'polished system-style scene without claiming to be the OS', useCases: ['screen recordings', 'video props', 'demo breaks', 'presentation staging'] },
  { id: 'ubuntu-screen', name: 'Ubuntu Update', shortName: 'Ubuntu', slug: 'ubuntu-screen', localizedSlugs: {}, category: 'fake', kind: 'fake', color: '#e95420', summary: 'A realistic fake Ubuntu update screen simulator with authentic boot animation, non-linear progress simulation, reboot cycles, and Ubuntu terminal aesthetic in realistic orange-and-purple brand colors. Free online tool for Linux demos, video production, classroom training, and harmless pranks.', intent: 'a convincing Ubuntu update and boot screen simulation for Linux demonstrations, educational training, video production, and harmless pranks', useCases: ['Linux demonstrations and training', 'YouTube and TikTok video production', 'streaming and OBS intermission screens', 'classroom and university Linux lectures', 'technology event displays and trade shows', 'theatre stage productions and escape rooms', 'developer environment backgrounds', 'screen recording and presentation backdrops'] },
  { id: 'macos-screen', name: 'macOS Update', shortName: 'macOS', slug: 'macos-screen', localizedSlugs: {}, category: 'fake', kind: 'fake', color: '#1a1a1a', summary: 'A realistic fake macOS update screen simulator with 5 update scenarios (macOS Sequoia, Security Response, App Store, Firmware, Beta), 4 operational modes (Realistic, Timer, Manual, Infinite), and 3 themes including Dark Mode. Authentic Apple-style visuals with auto-restart animation and synthesized sounds. Free online tool for Apple UI demos, video production, and harmless pranks.', intent: 'a convincing macOS update and installation simulation for Apple UI demonstrations, video production, educational training, and harmless pranks', useCases: ['Apple UI demonstrations and mockups', 'YouTube and TikTok video production', 'streaming and OBS intermission screens', 'classroom and university macOS training', 'client presentations and software demos', 'theatre stage productions and escape rooms', 'technology event displays and trade shows', 'screen recording and presentation backdrops'] },
  { id: 'android-update', name: 'Android Update Screen', shortName: 'Android Update', slug: 'android-update', localizedSlugs: {}, category: 'fake', kind: 'fake', color: '#3ddc84', summary: 'A realistic fake Android system update screen simulator with authentic Android robot branding, configurable update duration (1min to 1hr), adjustable starting percentage, and two-phase restart animation with boot dots. Free online tool for mobile UI demos, video production, classroom training, and harmless pranks.', intent: 'a convincing Android system update simulation for mobile UI demonstrations, video production, educational training, and harmless pranks', useCases: ['mobile UI demonstrations and mockups', 'YouTube and TikTok video production', 'streaming and OBS intermission screens', 'classroom and university mobile OS training', 'technology event displays and trade shows', 'theatre stage productions and escape rooms', 'phone review and unboxing video backgrounds', 'screen recording and presentation backdrops'] },
];

export const popularTools = tools.filter((tool) =>
  ['white-screen', 'black-screen', 'red-screen', 'green-screen', 'blue-screen', 'broken-screen', 'windows-update'].includes(tool.id),
);

// Semantic closeness between categories. Same category is the strongest signal,
// but tools in other categories (ambience, pranks, fake OS screens) are still related.
type ActiveCategoryId = Exclude<ToolCategoryId, 'testing'>;
const categoryAffinity: Record<ActiveCategoryId, Partial<Record<ActiveCategoryId, number>>> = {
  colors: { colors: 10, savers: 5, pranks: 4, fake: 3 },
  savers: { savers: 10, colors: 5, pranks: 3, fake: 2 },
  pranks: { pranks: 10, fake: 7, colors: 4, savers: 3 },
  fake: { fake: 10, pranks: 7, colors: 3, savers: 2 },
};

const stopwords = new Set([
  'a', 'an', 'the', 'and', 'or', 'for', 'with', 'without', 'of', 'to', 'in', 'on', 'as', 'at', 'by', 'from',
  'your', 'you', 'it', 'is', 'are', 'was', 'this', 'that', 'these', 'those', 'no', 'not', 'any', 'all', 'own',
  'can', 'could', 'do', 'does', 'has', 'have', 'how', 'what', 'why', 'when', 'where', 'which', 'who', 'its',
  'our', 'their', 'one', 'two', 'also', 'only', 'just', 'into', 'through', 'over', 'under', 'up', 'down', 'out',
  'off', 'more', 'most', 'other', 'some', 'such', 'than', 'there', 'they', 'but', 'if', 'so', 'very', 'ever', 'once',
]);

const singular = (token: string) => (token.length > 3 && token.endsWith('s') ? token.slice(0, -1) : token);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter((token) => token.length > 1 && !stopwords.has(token))
    .map(singular);
}

const toolTerms = (tool: Tool) => [tool.name, tool.summary, tool.intent, ...tool.useCases].flatMap(tokenize);

// Term frequency across all tools, used to weight rarer (more distinguishing) keywords higher.
const termFrequency = new Map<string, number>();
for (const tool of tools) {
  for (const term of new Set(toolTerms(tool))) {
    termFrequency.set(term, (termFrequency.get(term) ?? 0) + 1);
  }
}
const termWeight = (term: string) => Math.log((tools.length + 1) / (1 + (termFrequency.get(term) ?? 0))) + 1;

function toolVector(tool: Tool): Map<string, number> {
  const vector = new Map<string, number>();
  const add = (text: string, weight: number) => {
    for (const term of tokenize(text)) {
      vector.set(term, (vector.get(term) ?? 0) + weight);
    }
  };
  add(tool.name, 3);
  add(tool.summary, 1);
  add(tool.intent, 1.5);
  for (const useCase of tool.useCases) add(useCase, 1);
  return vector;
}

// Cosine similarity of weighted keyword vectors across name, summary, intent, and use cases.
function keywordSimilarity(a: Tool, b: Tool): number {
  const va = toolVector(a);
  const vb = toolVector(b);
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (const [term, w] of va) {
    const weighted = w * termWeight(term);
    normA += weighted * weighted;
    const other = vb.get(term);
    if (other) dot += weighted * other * termWeight(term);
  }
  for (const [term, w] of vb) {
    const weighted = w * termWeight(term);
    normB += weighted * weighted;
  }
  return normA > 0 && normB > 0 ? dot / Math.sqrt(normA * normB) : 0;
}

const popularToolIds = new Set(popularTools.map((tool) => tool.id));

// Same category is the strongest signal, but tools in other categories (ambience,
// pranks, fake OS screens) are still related. Popular tools get a small boost
// because they carry the most user intent and SEO weight.
function relatednessScore(a: Tool, b: Tool): number {
  const affinity = (categoryAffinity[a.category as ActiveCategoryId] ?? {})[b.category as ActiveCategoryId] ?? 0;
  const keywords = keywordSimilarity(a, b) * 6;
  return affinity + keywords + (popularToolIds.has(b.id) ? 1.5 : 0);
}

// Editorially pinned relations, keyed by the page being viewed. Relatedness is
// keyword-driven, so a newer tool can be a genuinely good suggestion on a page yet
// never win a slot from older siblings that share more vocabulary with each other.
// Pinned ids are placed first and then count towards the per-category cap like any
// other pick, so the spread across categories is unchanged.
const pinnedRelations: Partial<Record<string, string[]>> = {
  'matrix-screen': ['dvd-screensaver'],
  'rain-screen': ['dvd-screensaver'],
  'galaxy-screen': ['dvd-screensaver'],
  'stars-screen': ['dvd-screensaver'],
};

export function getRelatedTools(tool: Tool, limit = 9): Tool[] {
  const candidates = tools
    .filter((candidate) => candidate.id !== tool.id)
    .map((candidate) => ({ tool: candidate, score: relatednessScore(tool, candidate) }))
    .sort((a, b) => b.score - a.score || a.tool.id.localeCompare(b.tool.id));

  // Cap picks per category so recommendations span categories instead of one big group.
  const maxPerCategory = Math.max(2, Math.ceil(limit / 3));
  const perCategory = new Map<ToolCategoryId, number>();
  const related: Tool[] = [];
  const taken = new Set<string>();

  const take = (candidate: Tool) => {
    if (taken.has(candidate.id) || candidate.id === tool.id) return;
    if (related.length >= limit) return;
    const count = perCategory.get(candidate.category) ?? 0;
    if (count >= maxPerCategory) return;
    related.push(candidate);
    taken.add(candidate.id);
    perCategory.set(candidate.category, count + 1);
  };

  for (const id of pinnedRelations[tool.id] ?? []) {
    const pinned = tools.find((candidate) => candidate.id === id);
    if (pinned) take(pinned);
  }
  for (const { tool: candidate } of candidates) {
    if (related.length >= limit) break;
    take(candidate);
  }
  return related;
}
