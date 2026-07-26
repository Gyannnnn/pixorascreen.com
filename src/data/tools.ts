import type { Locale } from './locales';

export type ToolCategoryId = 'colors' | 'testing' | 'savers' | 'pranks' | 'fake';
export type ToolKind = 'color' | 'test' | 'saver' | 'prank' | 'fake';

export type Tool = {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  localizedSlugs: Partial<Record<Exclude<Locale, 'en'>, string>>;
  localizedName?: Partial<Record<Locale, string>>;
  localizedSummary?: Partial<Record<Locale, string>>;
  category: ToolCategoryId;
  kind: ToolKind;
  color?: string;
  rgb?: string;
  accent?: string;
  summary: string;
  intent: string;
  useCases: string[];
  controls: string[];
  faqs: { question: string; answer: string }[];
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

const colorFaqs = (name: string) => [
  {
    question: `What is the ${name.toLowerCase()} page used for?`,
    answer: `Use the ${name.toLowerCase()} page as a full-screen color field for display checks, lighting, photography backgrounds, visual comfort tests, and quick color reference work.`,
  },
  {
    question: `Can I adjust the ${name.toLowerCase()} brightness?`,
    answer: 'Yes. The reusable screen controls include brightness, color formats, copying, favorites, random color, and fullscreen mode.',
  },
  {
    question: 'Does it work on phones and tablets?',
    answer: 'Yes. The tool is responsive, touch-friendly, keyboard accessible, and designed to run as a static page with minimal JavaScript.',
  },
];

const orangeFaqs = () => [
  {
    question: 'Why is my screen turning orange?',
    answer: 'Your screen might turn orange due to active night light settings (like Windows 10 Night light or iPhone Night Shift) designed to reduce blue light. Other causes could include a faulty display cable, outdated graphics drivers, or a hardware defect (sometimes referred to as an orange screen of death on PC or orange screen iPhone freeze). Using a controlled orange screen online tool is a safe way to test if the issue is software or hardware-related.'
  },
  {
    question: 'What is the orange screen?',
    answer: 'The orange screen is a fullscreen display utility showing a pure, vibrant orange color. In display configuration and troubleshooting, it helps users test subpixel performance, check color accuracy, and identify panel issues like dead pixels, backlight bleeding, or dirty spots.'
  },
  {
    question: 'How do I turn my screen orange?',
    answer: 'You can easily turn your screen orange by opening our free online orange screen utility. Select the tool, adjust the brightness slider if needed, and click the Fullscreen button or press the "F" key on your keyboard to get a full orange screen for mobile or PC.'
  },
  {
    question: 'What is the orange screen method?',
    answer: 'The orange screen method is a creative tracing and drawing technique. By setting a tablet or display to a bright orange fullscreen background, you can place a piece of paper over it to copy an image that a classmate or artist drew, using the screen as a steady light box.'
  },
  {
    question: 'What color is orange in HTML?',
    answer: 'In HTML and CSS, standard orange is represented by the hexadecimal color code #FFA500 (or rgb(255, 165, 0)). Our orange screen online tool displays a curated, warm orange color (#FF8A00) designed for optimal display calibration and cozy ambient lighting.'
  }
];

// const testingFaqs = (name: string) => [
//   {
//     question: `How should I use the ${name.toLowerCase()}?`,
//     answer: `Open the ${name.toLowerCase()}, clean your display, raise brightness gradually, then inspect the screen from normal and close viewing distances.`,
//   },
//   {
//     question: 'Can a browser tool repair hardware damage?',
//     answer: 'No browser tool can guarantee hardware repair. These utilities help reveal issues, reduce image retention risk, or run visual patterns for troubleshooting.',
//   },
//   {
//     question: 'Should I use fullscreen mode?',
//     answer: 'Fullscreen mode is recommended because browser chrome and surrounding UI can hide edge defects or change perceived brightness.',
//   },
// ];

const effectFaqs = (name: string) => [
  {
    question: `Is the ${name.toLowerCase()} safe to use?`,
    answer: `Yes. The ${name.toLowerCase()} is a browser-only visual utility. It does not install software, change system settings, or access personal files.`,
  },
  {
    question: 'Can I share the current screen?',
    answer: 'Each page has a stable URL, and color-based pages can copy color values for quick sharing in design and testing workflows.',
  },
  {
    question: 'Does the page require an account?',
    answer: 'No. Free Online Screen is designed as a free, fast, static-first utility with no account requirement.',
  },
];

const localizedColor = (es: string, pt: string, fr: string, de: string, hi: string, ja: string) => ({
  es,
  pt,
  fr,
  de,
  hi,
  ja,
});

export const tools: Tool[] = [
  { id: 'white-screen', name: 'White Screen', shortName: 'White', slug: 'white-screen', localizedSlugs: localizedColor('pantalla-blanca', 'tela-branca', 'ecran-blanc', 'weisser-bildschirm', 'safed-screen', 'shiroi-gamen'), category: 'colors', kind: 'color', color: '#ffffff', rgb: '255, 255, 255', summary: 'A pure white fullscreen tool for cleaning checks, soft lighting, display inspection, and photography fill.', intent: 'maximum neutral brightness without visual clutter', useCases: ['dust and smudge detection', 'soft light for video calls', 'product photography fill', 'edge uniformity checks'], controls: ['fullscreen', 'brightness', 'copy HEX', 'copy RGB', 'custom color picker'], faqs: colorFaqs('White Screen') },
  { id: 'black-screen', name: 'Black Screen', shortName: 'Black', slug: 'black-screen', localizedSlugs: localizedColor('pantalla-negra', 'tela-preta', 'ecran-noir', 'schwarzer-bildschirm', 'kala-screen', 'kuroi-gamen'), category: 'colors', kind: 'color', color: '#000000', rgb: '0, 0, 0', summary: 'A true black fullscreen surface for OLED checks, dead pixel discovery, glare reduction, and dark-room use.', intent: 'a quiet black field with no page chrome', useCases: ['dead pixel checks', 'OLED contrast inspection', 'dark room standby', 'projector black-level reference'], controls: ['fullscreen', 'brightness', 'copy HEX', 'copy RGB', 'favorite colors'], faqs: colorFaqs('Black Screen') },
  { id: 'green-screen', name: 'Green Screen', shortName: 'Green', slug: 'green-screen', localizedSlugs: localizedColor('pantalla-verde', 'tela-verde', 'ecran-vert', 'gruener-bildschirm', 'hara-screen', 'midori-gamen'), category: 'colors', kind: 'color', color: '#00ff00', rgb: '0, 255, 0', summary: 'A vivid green fullscreen page for chroma key previews, panel checks, and color reference.', intent: 'clean chroma-style green for quick visual testing', useCases: ['chroma key lighting checks', 'color channel inspection', 'video background setup', 'presentation effects'], controls: ['fullscreen', 'brightness', 'copy HEX', 'copy RGB', 'HEX input'], faqs: colorFaqs('Green Screen') },
  { id: 'blue-screen', name: 'Blue Screen', shortName: 'Blue', slug: 'blue-screen', localizedSlugs: localizedColor('pantalla-azul', 'tela-azul', 'ecran-bleu', 'blauer-bildschirm', 'neela-screen', 'aoi-gamen'), category: 'colors', kind: 'color', color: '#0066ff', rgb: '0, 102, 255', summary: 'A saturated blue fullscreen field for display color checks, ambient tone, and video setups.', intent: 'stable blue light without controls blocking the view', useCases: ['blue channel testing', 'ambient desk lighting', 'video color wash', 'contrast comparison'], controls: ['fullscreen', 'brightness', 'copy HEX', 'copy RGB', 'RGB input'], faqs: colorFaqs('Blue Screen') },
  { id: 'red-screen', name: 'Red Screen', shortName: 'Red', slug: 'red-screen', localizedSlugs: localizedColor('pantalla-roja', 'tela-vermelha', 'ecran-rouge', 'roter-bildschirm', 'lal-screen', 'akai-gamen'), category: 'colors', kind: 'color', color: '#ff0000', rgb: '255, 0, 0', summary: 'A pure red fullscreen utility for pixel inspection, color testing, and low-light visual reference.', intent: 'pure red light online to test displays, preserve night vision, check pixels, or setup video calls', useCases: ['red subpixel dead pixel checks', 'night vision preservation', 'TikTok light cast', 'display monitor screen cleaning', 'projector color alignment', 'eye comfort reading'], controls: ['fullscreen', 'brightness', 'copy HEX', 'copy RGB', 'HSL input'], faqs: colorFaqs('Red Screen') },
  { id: 'orange-screen', name: 'Orange Screen', shortName: 'Orange', slug: 'orange-screen', localizedSlugs: localizedColor('pantalla-naranja', 'tela-laranja', 'ecran-orange', 'oranger-bildschirm', 'narangi-screen', 'orenji-gamen'), category: 'colors', kind: 'color', color: '#ff8a00', rgb: '255, 138, 0', summary: 'A warm orange fullscreen page online for ambient lighting, photography fill, display testing, and aesthetic backgrounds.', intent: 'get a full orange screen online free for pc, mobile, or iphone to test displays, generate warm light, or clean monitors', useCases: ['orange screen light for video calls', 'full orange screen background aesthetic', 'orange screen for pc and mobile diagnostics', 'orange screen of death check', 'orange screen method image tracing', 'orange screen online png download'], controls: ['fullscreen', 'brightness', 'copy HEX', 'copy RGB', 'custom color picker'], faqs: orangeFaqs() },
  { id: 'yellow-screen', name: 'Yellow Screen', shortName: 'Yellow', slug: 'yellow-screen', localizedSlugs: localizedColor('pantalla-amarilla', 'tela-amarela', 'ecran-jaune', 'gelber-bildschirm', 'peela-screen', 'kiiroi-gamen'), category: 'colors', kind: 'color', color: '#ffdd00', rgb: '255, 221, 0', summary: 'A bright yellow screen for visibility checks, warm fill light, and attention-grabbing full-screen color.', intent: 'high visibility yellow without distractions', useCases: ['screen brightness checks', 'warning-style visuals', 'creative lighting', 'color contrast experiments'], controls: ['fullscreen', 'brightness', 'copy HEX', 'copy RGB', 'random color'], faqs: colorFaqs('Yellow Screen') },
  { id: 'purple-screen', name: 'Purple Screen', shortName: 'Purple', slug: 'purple-screen', localizedSlugs: localizedColor('pantalla-morada', 'tela-roxa', 'ecran-violet', 'lila-bildschirm', 'baingani-screen', 'murasaki-gamen'), category: 'colors', kind: 'color', color: '#7c3aed', rgb: '124, 58, 237', summary: 'A blank purple screen online tool for custom wallpapers, ambient lighting cast, video backgrounds, and screen testing.', intent: 'get a full purple screen online free for PC, mobile, or iPhone to test displays, generate ambient vibe light, or clean monitors', useCases: ['purple screen light for video calls', 'purple screen wallpaper background', 'purple screen for phone and tv diagnostics', 'blank computer screen testing', 'ubuntu purple screen startup check', 'purple screen savers visual vibe'], controls: ['fullscreen', 'brightness', 'copy HEX', 'copy RGB', 'favorite colors'], faqs: colorFaqs('Purple Screen') },
  { id: 'pink-screen', name: 'Pink Screen', shortName: 'Pink', slug: 'pink-screen', localizedSlugs: localizedColor('pantalla-rosa', 'tela-rosa', 'ecran-rose', 'rosa-bildschirm', 'gulabi-screen', 'pinku-gamen'), category: 'colors', kind: 'color', color: '#ff4db8', rgb: '255, 77, 184', summary: 'A vivid pink fullscreen color for lighting, chromatic testing, and polished visual backdrops.', intent: 'controlled pink light for practical and creative use', useCases: ['creator backdrops', 'color wash lighting', 'display tone comparison', 'visual mood boards'], controls: ['fullscreen', 'brightness', 'copy HEX', 'copy RGB', 'HEX history'], faqs: colorFaqs('Pink Screen') },
  { id: 'cyan-screen', name: 'Cyan Screen', shortName: 'Cyan', slug: 'cyan-screen', localizedSlugs: localizedColor('pantalla-cian', 'tela-ciano', 'ecran-cyan', 'cyan-bildschirm', 'cyan-screen', 'shian-gamen'), category: 'colors', kind: 'color', color: '#00e5ff', rgb: '0, 229, 255', summary: 'A crisp cyan fullscreen utility for color channel checks, ambient lighting, and digital backgrounds.', intent: 'bright cool color with easy value copying', useCases: ['cool ambient lighting', 'cyan channel checks', 'video backgrounds', 'design color reference'], controls: ['fullscreen', 'brightness', 'copy HEX', 'copy RGB', 'share current screen'], faqs: colorFaqs('Cyan Screen') },
  { id: 'brown-screen', name: 'Brown Screen', shortName: 'Brown', slug: 'brown-screen', localizedSlugs: localizedColor('pantalla-marron', 'tela-marrom', 'ecran-marron', 'brauner-bildschirm', 'bhura-screen', 'chairo-gamen'), category: 'colors', kind: 'color', color: '#7a4a24', rgb: '122, 74, 36', summary: 'A calm brown fullscreen color for warm references, staged scenes, and display tone comparison.', intent: 'earth-toned screen color with utility controls', useCases: ['warm palette checks', 'set dressing screens', 'photography fill', 'contrast testing'], controls: ['fullscreen', 'brightness', 'copy HEX', 'copy RGB', 'custom color picker'], faqs: colorFaqs('Brown Screen') },
  { id: 'grey-screen', name: 'Grey Screen', shortName: 'Grey', slug: 'grey-screen', localizedSlugs: localizedColor('pantalla-gris', 'tela-cinza', 'ecran-gris', 'grauer-bildschirm', 'slate-screen', 'haiiro-gamen'), category: 'colors', kind: 'color', color: '#808080', rgb: '128, 128, 128', summary: 'A neutral grey fullscreen surface for uniformity, brightness balance, and midtone display checks.', intent: 'balanced midtone output for evaluating panels', useCases: ['dirty screen effect checks', 'midtone uniformity', 'brightness balance', 'neutral background'], controls: ['fullscreen', 'brightness', 'copy HEX', 'copy RGB', 'RGB input'], faqs: colorFaqs('Grey Screen') },
  { id: 'custom-color-screen', name: 'Custom Color Screen', shortName: 'Custom Color', slug: 'custom-color-screen', localizedSlugs: {}, category: 'colors', kind: 'color', color: '#0070f3', rgb: '0, 112, 243', summary: 'Build any fullscreen color using HEX, RGB, HSL, picker, randomizer, recent colors, and favorites.', intent: 'one screen where any exact color can become fullscreen', useCases: ['brand color previews', 'wallpaper experiments', 'lighting tests', 'design handoff checks'], controls: ['fullscreen', 'brightness', 'HEX input', 'RGB input', 'HSL input', 'random color'], faqs: colorFaqs('Custom Color Screen') },
  { id: 'gradient-screen', name: 'Gradient Screen', shortName: 'Gradient', slug: 'gradient-screen', localizedSlugs: {}, category: 'colors', kind: 'color', color: 'linear-gradient(135deg, #007cf0, #00dfd8, #7928ca, #ff0080, #f9cb28)', summary: 'A polished fullscreen gradient for visual testing, creative backdrops, and ambient display use.', intent: 'smooth multi-stop color transitions across the display', useCases: ['banding checks', 'video backdrops', 'ambient color washes', 'wallpaper previews'], controls: ['fullscreen', 'brightness', 'copy color', 'download wallpaper', 'ambient mode'], faqs: colorFaqs('Gradient Screen') },
  { id: 'rgb-screen', name: 'RGB Screen', shortName: 'RGB', slug: 'rgb-screen', localizedSlugs: localizedColor('pantalla-rgb', 'tela-rgb', 'ecran-rgb', 'rgb-bildschirm', 'rgb-screen', 'rgb-gamen'), category: 'colors', kind: 'color', color: '#00ff88', rgb: '0, 255, 136', summary: 'A fullscreen RGB screen test & color calibration utility to inspect subpixel health, find dead/stuck pixels, test monitor color channels, and generate solid wallpapers.', intent: 'full-screen subpixel diagnosis, monitor color channel calibration, and stuck pixel detection', useCases: ['RGB subpixel health test', 'dead and stuck pixel detection', 'monitor color channel calibration', 'OLED and IPS panel uniformity test', 'RGB fill light and background preview'], controls: ['fullscreen', 'brightness', 'RGB subpixel channels', 'copy RGB/HEX', 'auto color cycle', 'wallpaper download'], faqs: colorFaqs('RGB Screen') },
  { id: 'hex-screen', name: 'HEX Screen', shortName: 'HEX', slug: 'hex-screen', localizedSlugs: localizedColor('pantalla-hex', 'tela-hex', 'ecran-hex', 'hex-bildschirm', 'hex-screen', 'hex-gamen'), category: 'colors', kind: 'color', color: '#171717', rgb: '23, 23, 23', summary: 'A fullscreen HEX color tool to preview exact CSS hex codes, test multi-color palettes, check dark mode shades, and download custom wallpapers.', intent: 'full-screen HEX color code previewing, brand color testing, and palette validation', useCases: ['CSS HEX color code previews', 'brand guidelines color testing', 'dark mode HEX shade review (#121212, #000000)', 'HEX color palette comparison', '4K HEX wallpaper download'], controls: ['fullscreen', 'brightness', 'HEX & RGB input', 'copy HEX', 'HEX presets', 'wallpaper download'], faqs: colorFaqs('HEX Screen') },
  // { id: 'dead-pixel-test', name: 'Dead Pixel Test', shortName: 'Dead Pixel', slug: 'dead-pixel-test', localizedSlugs: {}, category: 'testing', kind: 'test', color: '#ffffff', summary: 'Cycle clean solid colors to reveal dead pixels, stuck pixels, dust, and edge defects.', intent: 'systematic pixel inspection across high-contrast colors', useCases: ['new monitor checks', 'phone screen inspection', 'laptop resale checks', 'warranty documentation'], controls: ['fullscreen', 'keyboard shortcuts', 'color cycle', 'brightness', 'escape hint'], faqs: testingFaqs('Dead Pixel Test') },
  // { id: 'stuck-pixel-fix', name: 'Stuck Pixel Fix', shortName: 'Stuck Pixel', slug: 'stuck-pixel-fix', localizedSlugs: {}, category: 'testing', kind: 'test', color: '#ff0000', summary: 'Run fast color transitions that may help loosen a stuck pixel while you monitor the result.', intent: 'controlled flashing patterns with safety guidance', useCases: ['stuck subpixel attempts', 'short repair sessions', 'panel troubleshooting', 'before-and-after checks'], controls: ['fullscreen', 'timer', 'speed control', 'reduced motion respect', 'pause'], faqs: testingFaqs('Stuck Pixel Fix') },
  // { id: 'burn-in-test', name: 'Burn-in Test', shortName: 'Burn-in', slug: 'burn-in-test', localizedSlugs: {}, category: 'testing', kind: 'test', color: '#111111', summary: 'Reveal image retention and OLED burn-in patterns with neutral fills and contrast transitions.', intent: 'careful retention inspection without unnecessary page UI', useCases: ['OLED checks', 'phone trade-in inspection', 'TV uniformity review', 'static UI retention tests'], controls: ['fullscreen', 'brightness', 'neutral colors', 'timer', 'related tests'], faqs: testingFaqs('Burn-in Test') },
  // { id: 'brightness-test', name: 'Brightness Test', shortName: 'Brightness', slug: 'brightness-test', localizedSlugs: {}, category: 'testing', kind: 'test', color: '#f7f7f7', summary: 'Evaluate brightness steps, glare, and comfort with controlled full-screen luminance levels.', intent: 'quick perceived brightness calibration', useCases: ['desk setup tuning', 'laptop brightness comparison', 'projector checks', 'eye comfort review'], controls: ['fullscreen', 'brightness slider', 'shortcuts', 'copy setting', 'timer'], faqs: testingFaqs('Brightness Test') },
  // { id: 'contrast-test', name: 'Contrast Test', shortName: 'Contrast', slug: 'contrast-test', localizedSlugs: {}, category: 'testing', kind: 'test', color: '#101010', summary: 'Check black, white, and midtone contrast with readable patterns and fullscreen comparisons.', intent: 'make contrast issues visible quickly', useCases: ['accessibility QA', 'monitor comparison', 'projector setup', 'content review'], controls: ['fullscreen', 'contrast pattern', 'brightness', 'keyboard shortcuts', 'related tools'], faqs: testingFaqs('Contrast Test') },
  // { id: 'gamma-test', name: 'Gamma Test', shortName: 'Gamma', slug: 'gamma-test', localizedSlugs: {}, category: 'testing', kind: 'test', color: '#777777', summary: 'Use neutral tone references to evaluate gamma perception and midtone rendering.', intent: 'midtone-focused display evaluation', useCases: ['photo editing setup', 'monitor comparison', 'tone curve review', 'print preview preparation'], controls: ['fullscreen', 'brightness', 'neutral grey', 'guidance', 'shortcuts'], faqs: testingFaqs('Gamma Test') },
  // { id: 'gradient-test', name: 'Gradient Test', shortName: 'Gradient Test', slug: 'gradient-test', localizedSlugs: {}, category: 'testing', kind: 'test', color: 'linear-gradient(90deg, #000, #fff)', summary: 'Inspect banding, uneven gradients, and compression artifacts with fullscreen gradients.', intent: 'smooth gradient inspection across the entire panel', useCases: ['banding checks', 'GPU output review', 'projector calibration', 'wallpaper QA'], controls: ['fullscreen', 'brightness', 'orientation toggle', 'download wallpaper', 'related tests'], faqs: testingFaqs('Gradient Test') },
  // { id: 'color-accuracy-test', name: 'Color Accuracy Test', shortName: 'Color Accuracy', slug: 'color-accuracy-test', localizedSlugs: {}, category: 'testing', kind: 'test', color: '#0070f3', summary: 'Compare key color fields and neutral tones for practical display color review.', intent: 'accessible color reference pages for non-lab checks', useCases: ['design review', 'monitor comparison', 'video setup', 'presentation QA'], controls: ['fullscreen', 'color picker', 'copy values', 'brightness', 'related screens'], faqs: testingFaqs('Color Accuracy Test') },
  { id: 'fireplace-screen', name: 'Fireplace Screen', shortName: 'Fireplace', slug: 'fireplace-screen', localizedSlugs: {}, category: 'savers', kind: 'saver', color: 'linear-gradient(180deg, #190a05, #ff5a1f)', summary: 'An online virtual fireplace screen for desktop, laptop, monitor, and TV displays to create cozy room ambience with realistic fire visuals and crackling audio.', intent: 'cozy virtual fireplace ambience with realistic animated flames, crackling fire sound, and responsive fullscreen controls', useCases: ['desktop & laptop ambience', 'TV fireplace background', 'study & focus environment', 'holiday & winter decor', 'relaxing screensaver alternative'], controls: ['fullscreen mode', 'flame color styles', 'crackle sound', 'sleep timer', 'brightness control'], faqs: effectFaqs('Fireplace Screen') },
  { id: 'aquarium-screen', name: 'Aquarium Screen', shortName: 'Aquarium', slug: 'aquarium-screen', localizedSlugs: { es: 'pantalla-de-acuario', pt: 'tela-de-aquario', fr: 'ecran-aquarium', de: 'aquarium-bildschirm', hi: 'aquarium-screen', ja: 'aquarium-gamen' }, category: 'savers', kind: 'saver', color: 'linear-gradient(180deg, #003d66, #00bcd4)', summary: 'An online aquarium screen for desktop, laptop, monitor, and TV. A free virtual aquarium with animated fish, bubbles, and underwater ambience — no download required.', intent: 'relaxing underwater animated ambience for any screen with tropical fish, adjustable backgrounds, and fullscreen controls', useCases: ['desktop & laptop ambience', 'TV aquarium background', 'office & study relaxation', 'café & waiting room displays', 'fullscreen screensaver alternative', 'second monitor decoration'], controls: ['fullscreen mode', 'background presets', 'ambient sounds', 'fish count & speed', 'overlay modes', 'sleep timer'], faqs: effectFaqs('Aquarium Screen') },
  { id: 'matrix-screen', name: 'Matrix Screen', shortName: 'Matrix', slug: 'matrix-screen', localizedSlugs: { es: 'pantalla-matrix', pt: 'tela-matrix', fr: 'ecran-matrix', de: 'matrix-bildschirm', hi: 'matrix-screen', ja: 'matrix-gamen' }, category: 'savers', kind: 'saver', color: '#001b0b', summary: 'An online Matrix screen with customizable digital rain, neon colors, and glitch effects for desktop, laptop, monitor, and TV — no download needed.', intent: 'customizable Matrix-style digital rain with personalized text, multiple color themes, ambient audio drones, and fullscreen immersion', useCases: ['developer & coding desk setup', 'cyberpunk gaming room ambience', 'streaming & video backgrounds', 'hacker-style display decoration', 'TV ambient screensaver', 'creative workspace atmosphere'], controls: ['fullscreen mode', 'custom name/text', 'color themes', 'rain speed & density', 'font size & glow', 'audio drones', 'stream character types', 'reset to defaults'], faqs: effectFaqs('Matrix Screen') },
  { id: 'rain-screen', name: 'Rain Screen', shortName: 'Rain', slug: 'rain-screen', localizedSlugs: { es: 'pantalla-de-lluvia', pt: 'tela-de-chuva', fr: 'ecran-pluie', de: 'regen-bildschirm', hi: 'rain-screen', ja: 'rain-gamen' }, category: 'savers', kind: 'saver', color: 'linear-gradient(180deg, #0f172a, #64748b)', summary: 'An online rain screen with realistic rain streaks, raindrops on glass, ambient thunder, and customizable audio for desktop, laptop, monitor, and TV — no download needed.', intent: 'immersive rain ambience with dual rain modes, adjustable wind and density, lightning effects, and fullscreen controls for focus, study, sleep, and relaxation', useCases: ['desktop & laptop ambience', 'study & deep work sessions', 'sleep & relaxation aid', 'cozy rainy day atmosphere', 'café & waiting room displays', 'livestream backgrounds', 'virtual rain screensaver', 'room decoration & mood lighting'], controls: ['fullscreen mode', 'rain density & speed', 'wind angle control', '8 color presets', 'raindrops on glass mode', 'ambient lightning', 'background scenes', 'audio soundtracks', 'floor splashes toggle', 'reset to defaults'], faqs: effectFaqs('Rain Screen') },
  { id: 'snow-screen', name: 'Snow Screen', shortName: 'Snow', slug: 'snow-screen', localizedSlugs: { es: 'pantalla-de-nieve', pt: 'tela-de-neve', fr: 'ecran-de-neige', de: 'schnee-bildschirm', hi: 'snow-screen', ja: 'snow-gamen' }, category: 'savers', kind: 'saver', color: 'linear-gradient(180deg, #eff6ff, #ffffff)', summary: 'An online snow screen with falling snow, photorealistic snowflakes, wind drift, and 20 color presets for desktop, laptop, monitor, and TV — no download needed.', intent: 'immersive winter ambience with customizable snowfall, wind, flake size, photorealistic images, and fullscreen controls for seasonal decor and relaxation', useCases: ['desktop & laptop ambience', 'Christmas & holiday decoration', 'cozy winter room atmosphere', 'study & relaxation background', 'café & office winter displays', 'Smart TV seasonal screensaver', 'livestream backgrounds', 'festive party decoration'], controls: ['fullscreen mode', 'snowflake count & speed', 'wind drift control', '20 color presets', 'photorealistic snowflake images', 'background scenes', 'audio soundtracks', 'snowflake size & rotation', 'reset to defaults'], faqs: effectFaqs('Snow Screen') },
  { id: 'galaxy-screen', name: 'Galaxy Screen', shortName: 'Galaxy', slug: 'galaxy-screen', localizedSlugs: {}, category: 'savers', kind: 'saver', color: 'radial-gradient(circle, #7c3aed, #020617)', summary: 'An interactive online galaxy screen with realistic spiral galaxy simulation, 5 color themes, star density and rotation controls, gravitational lensing black hole effect, and ambient space audio — no download needed.', intent: 'realistic and customizable spiral galaxy animation with interactive gravitational lensing, adjustable 3D parameters, and ambient space soundscapes for immersive fullscreen display', useCases: ['desktop & laptop ambience', 'TV & home theater background', 'relaxation & meditation', 'space-themed room decoration', 'gaming room ambience', 'streaming & video backgrounds', 'classroom astronomy displays', 'digital signage & exhibitions', 'OLED display showcase'], controls: ['fullscreen mode', '5 galaxy color themes', 'star cluster density', 'rotation velocity', 'inclination tilt (3D angle)', 'core glow intensity', 'space lensing black hole toggle', 'space soundscape audio', 'sound volume', 'keyboard shortcuts', 'reset defaults'], faqs: effectFaqs('Galaxy Screen') },
  { id: 'stars-screen', name: 'Stars Screen', shortName: 'Stars', slug: 'stars-screen', localizedSlugs: {}, category: 'savers', kind: 'saver', color: '#020617', summary: 'A quiet star-field screen saver for dark displays, projectors, and ambient backgrounds.', intent: 'minimal starry display that does not overwhelm a room', useCases: ['projector ambience', 'dark desk setup', 'stage background', 'calm screensaver'], controls: ['fullscreen', 'brightness', 'ambient mode', 'timer', 'reduced motion'], faqs: effectFaqs('Stars Screen') },
  { id: 'clock-screen', name: 'Clock Screen', shortName: 'Clock', slug: 'clock-screen', localizedSlugs: {}, category: 'savers', kind: 'saver', color: '#111111', summary: 'An online flip clock in fullscreen with retro flip animation, 6 aesthetic themes, Pomodoro focus timer, ambient sound effects, and brightness dimmer — no download needed.', intent: 'aesthetic fullscreen flip clock experience with retro flip-card animation, customizable themes, and integrated Pomodoro timer for focus sessions', useCases: ['desktop & laptop ambience', 'study & focus sessions', 'Pomodoro productivity', 'second monitor clock display', 'classroom & exam timers', 'live streaming & video backgrounds', 'bedside & nightstand clock', 'office & meeting room displays'], controls: ['fullscreen mode', '6 theme presets', '12/24 hour format', 'seconds toggle', 'focus countdown timer', 'Pomodoro presets', 'retro click sound', 'brightness dimmer', 'custom focus label', 'keyboard shortcuts'], faqs: effectFaqs('Clock Screen') },
  { id: 'ambient-screen', name: 'Ambient Screen', shortName: 'Ambient', slug: 'ambient-screen', localizedSlugs: { es: 'pantalla-ambiental', pt: 'tela-ambiente', fr: 'ecran-ambiant', de: 'ambiente-bildschirm', hi: 'ambient-screen', ja: 'ambient-gamen' }, category: 'savers', kind: 'saver', color: 'linear-gradient(135deg, #007cf0, #ff0080, #f9cb28)', summary: 'An interactive ambient screen with animated gradients, cosmic particles, soundscape mixer, clock, Pomodoro timer, and guided breathing — for desktop, laptop, monitor, TV, and mobile.', intent: 'immersive ambient atmosphere with animated fluid gradients, interactive mouse physics, star particles, multi-channel soundscapes, and productivity overlays', useCases: ['desktop & laptop ambience', 'focus & deep work sessions', 'meditation & mindfulness', 'Pomodoro productivity', 'Smart TV ambient display', 'bedroom relaxation lighting', 'office & café atmosphere', 'streaming backgrounds', 'yoga & breathing exercises'], controls: ['6 gradient presets', 'morphing flow speed', 'cosmic star density', '4-channel soundscape mixer', 'clock overlay with font styles', 'guided breathing exercise', 'Pomodoro timer', 'fullscreen mode', 'keyboard shortcuts', 'reset to defaults'], faqs: effectFaqs('Ambient Screen') },
  { id: 'broken-screen', name: 'Broken Screen', shortName: 'Broken', slug: 'broken-screen', localizedSlugs: {}, category: 'pranks', kind: 'prank', color: '#0b0b0b', summary: 'A harmless broken-screen prank page with a convincing fullscreen cracked-display effect. The best fake broken screen simulator for pranks, jokes, and funny theatrical moments.', intent: 'realistic cracked display simulation for harmless pranks, video scenes, and theatrical staging without any downloads or installations', useCases: ['friendly jokes on friends and family', 'fake broken monitor prank', 'fake broken laptop screen prank', 'fake cracked phone display prank', 'April Fool prank and office jokes', 'video scenes and YouTube prank content', 'TikTok and social media prank videos', 'stage props and theatrical productions', 'gaming stream intermissions', 'classroom demonstrations'], controls: ['fullscreen', 'escape hint', 'brightness', 'share current screen', 'timer'], faqs: effectFaqs('Broken Screen') },
  { id: 'hacker-typer', name: 'Hacker Typer', shortName: 'Hacker Typer', slug: 'hacker-typer', localizedSlugs: {}, category: 'pranks', kind: 'prank', color: '#001b0b', summary: 'A fake terminal typing screen for cinematic demos, jokes, and presentation moments.', intent: 'convincing terminal-style interaction in the browser', useCases: ['video scenes', 'classroom demos', 'friendly jokes', 'event screens'], controls: ['fullscreen', 'keyboard shortcuts', 'speed control', 'theme toggle', 'clear screen'], faqs: effectFaqs('Hacker Typer') },
  { id: 'blue-screen-prank', name: 'Blue Screen Prank', shortName: 'Blue Screen', slug: 'blue-screen-prank', localizedSlugs: {}, category: 'pranks', kind: 'prank', color: '#0078d7', summary: 'A highly realistic Windows BSOD simulation with animated progress, stop codes, and fullscreen crash behavior. The most convincing fake blue screen prank online — no download, no risk.', intent: 'an authentic Windows BSOD experience that feels indistinguishable from the real screen — perfect for pranks, content creation, and tech demonstrations', useCases: ['pranking friends and family', 'fake Windows crash at the office', 'YouTube and TikTok prank videos', 'livestream and gaming intermissions', 'tech training and educational demos', 'theater and stage productions', 'April Fools Day pranks', 'content creation and thumbnail props'], controls: ['fullscreen', 'escape hint', 'animated progress', 'stop codes', 'QR code'], faqs: effectFaqs('Blue Screen Prank') },
  { id: 'windows-xp-crash', name: 'Windows XP Crash', shortName: 'XP Crash', slug: 'windows-xp-crash', localizedSlugs: { es: 'xp-crash', pt: 'xp-crash', fr: 'xp-crash', de: 'xp-crash', hi: 'xp-crash', ja: 'xp-crash' }, category: 'pranks', kind: 'prank', color: '#003399', summary: 'A realistic Windows XP crash simulator for desktop pranks, retro nostalgia, and harmless fun. Recreate the full XP desktop experience — explorer.exe error dialogs, cascading crash windows, and classic BSOD transition.', intent: 'authentic Windows XP crash simulation with desktop environment, explorer.exe error dialogs, cascading crash windows, and nostalgic BSOD transition for pranks and retro computing enthusiasts', useCases: ['Windows XP desktop prank simulation', 'retro computing nostalgia experience', 'friendly office and classroom pranks', 'YouTube and TikTok prank video content', 'livestream and gaming intermissions', 'April Fools pranks and creative staging', 'BSOD nostalgia and retro desktop recreation', 'explorer.exe error cascade visual effect', 'fullscreen prank effect for friends', 'educational retro OS demonstration'], controls: ['fullscreen prank mode', 'explorer.exe error dialogs', 'cascading crash windows', 'BSOD transition', 'configurable crash delay', 'XP warning sound effects', 'desktop reset', 'drag cascade glitch', 'keyboard shortcuts', 'brightness control'], faqs: [
      {
        question: 'Is the Windows XP Crash prank safe?',
        answer: 'Yes, it is completely safe. The Windows XP crash simulator runs entirely in your browser using HTML, CSS, and JavaScript. It does not install any software, modify system files, access personal data, or make any changes to your operating system.'
      },
      {
        question: 'Can this damage my computer?',
        answer: 'No. This is a purely visual browser-based simulation. It displays an animated version of the Windows XP desktop with simulated error dialogs and a fake BSOD screen. No files are modified, no system settings are changed, and no software is installed. Press Escape to exit fullscreen at any time.'
      },
      {
        question: 'How do I start the Windows XP crash simulation?',
        answer: 'Click the "Fullscreen Prank" button or press the "F" key on your keyboard. The simulation will launch in fullscreen mode. By default, clicking around the desktop or clicking dialog buttons spawns cascading explorer.exe error windows. After the configured delay (5-30 seconds), the screen transitions to the classic Windows XP Blue Screen of Death (BSOD).'
      },
      {
        question: 'How do I exit the XP crash prank?',
        answer: 'Press the Escape (Esc) key on your keyboard. This will exit fullscreen mode and automatically reset the simulation, returning the page to its normal state. No trace of the prank remains on your device.'
      },
      {
        question: 'Does the prank work on Mac, Linux, or Chromebook?',
        answer: 'Yes, the Windows XP crash simulator works on any device with a modern web browser — Windows PCs, Macs, Linux machines, Chromebooks, tablets, and smartphones. The entire simulation runs in the browser using standard web technologies.'
      },
      {
        question: 'Can I customise the crash timing?',
        answer: 'Yes. Use the "On Start" dropdown to choose between Cascade mode (error dialogs -> BSOD) or Instant BSOD mode. Use the "BSOD Delay" dropdown to set the crash delay to 5, 12, 20, or 30 seconds. You can also toggle the XP warning bell sound on or off.'
      },
      {
        question: 'What happens when I click the error dialogs?',
        answer: 'Clicking "Send Error Report", "Don\'t Send", or the close button on an explorer.exe error dialog spawns additional error windows in a cascading pattern. Each click creates more dialogs, escalating the chaos. Clicking the desktop itself also spawns new error windows, making the simulation increasingly dramatic.'
      },
      {
        question: 'What is the drag cascade glitch?',
        answer: 'When you drag an error dialog by its title bar, the dialog leaves visual "trails" on a canvas overlay behind it. This simulates the glitchy artifact effect common on old Windows systems when multiple error dialogs overlapped, creating a nostalgic visual artifact.'
      },
      {
        question: 'Does the simulation include the Windows XP desktop?',
        answer: 'Yes. The simulator recreates the classic Windows XP desktop including the Bliss wallpaper (blue sky, green hills, sun), desktop icons (My Computer, Recycle Bin, Internet Explorer, My Documents), the iconic green Start button, and the taskbar with system tray and live clock.'
      }
    ] },
  { id: 'radar-screen', name: 'Radar Screen', shortName: 'Radar', slug: 'radar-screen', localizedSlugs: { es: 'pantalla-de-radar', pt: 'tela-de-radar', fr: 'ecran-radar', de: 'radar-bildschirm', hi: 'radar-screen', ja: 'radar-gamen' }, category: 'pranks', kind: 'prank', color: '#001b0b', summary: 'A free online radar screen simulator with real-time sweep animation, sonar ping audio, target tracking, and customizable tactical display. Fullscreen radar effect for desktop, laptop, monitor, and TV — no download needed.', intent: 'immersive fullscreen radar simulation with authentic sweep beam, target interception, simple geolocation, and customizable tactical HUD for presentations, streaming, room decoration, and creative staging', useCases: ['presentation and livestream backgrounds', 'sci-fi and cyberpunk room decoration', 'YouTube and video production props', 'escape room and theatrical staging', 'gaming room and hacker setup ambience', 'classroom STEM demonstrations', 'party decoration and event displays', 'streaming overlays and intermission screens', 'tactical and military themed displays', 'film and content creation backgrounds'], controls: ['fullscreen mode', 'sweep speed RPM slider', 'sonar ping volume and mute', 'target intrusion density', 'three color themes', 'geolocation detection', 'click-to-intercept targets', 'pause and resume sweep', 'brightness', 'reset simulation logs'], faqs: [
      {
        question: 'What is the Radar Screen simulator?',
        answer: 'The Radar Screen is a free, browser-based radar simulation that displays a realistic animated radar display with a rotating sweep beam, concentric range rings, compass headings, procedural terrain coastline, and simulated bogey targets. It is designed for entertainment, presentations, streaming backgrounds, room decoration, and creative staging — not as an actual radar instrument.'
      },
      {
        question: 'Is the Radar Screen simulator safe?',
        answer: 'Yes, it is completely safe. The radar simulation runs entirely in your browser using HTML, CSS, JavaScript, and Canvas. It does not install any software, modify system files, access personal data, or make any changes to your operating system. It is a purely visual browser-based simulation.'
      },
      {
        question: 'Is the Radar Screen simulator really free?',
        answer: 'Yes, it is completely free. No account, no registration, no credit card, and no hidden fees. The radar screen is a free online tool available to everyone with no usage limits.'
      },
      {
        question: 'Does the radar simulator require downloading anything?',
        answer: 'No. The radar screen simulator runs directly in your browser. There is nothing to download, install, or configure. Just open the page and the radar animation starts immediately. Works on any device with a modern browser.'
      },
      {
        question: 'Can I control the radar sweep speed?',
        answer: 'Yes. Open the settings panel (gear icon) and use the Sweep Speed slider to adjust the rotation speed from 4 to 30 RPM (rotations per minute). A slower speed creates a more realistic, calm radar display. A faster speed creates a more intense, action-oriented feel.'
      },
      {
        question: 'Can I mute the sonar ping sound?',
        answer: 'Yes. Open the settings panel and use the Sonar Ping Sound Volume slider to adjust the volume, or click the Mute button to disable sonar audio entirely. The radar continues to animate visually even when audio is muted. You can also press the S key to toggle sonar audio on and off.'
      },
      {
        question: 'Does the radar screen work on mobile devices?',
        answer: 'Yes, the radar screen simulator works on any device with a modern web browser — Windows PCs, Macs, Linux machines, Chromebooks, tablets, smartphones, and Smart TVs. The simulation adapts to different screen sizes and touch input for interactive target clicking.'
      },
      {
        question: 'Can I use the radar screen in a presentation?',
        answer: 'Yes, the radar screen makes an excellent presentation background, livestream backdrop, or video conference visual. Enter fullscreen mode by pressing F or clicking the fullscreen button for the most immersive display. The ambient radar animation adds a professional tactical aesthetic to any presentation or stream.'
      },
      {
        question: 'Can I use the radar screen as a video background?',
        answer: 'Absolutely. The radar simulation works as a fullscreen background for YouTube videos, Twitch streams, TikTok content, video calls, and screen recordings. The three color themes — Military Green, Oceanic Blue, and Red Alert — let you match the radar aesthetic to your content style.'
      },
      {
        question: 'What do the different radar color themes do?',
        answer: 'The radar offers three color themes. Military Green (the default) recreates the classic green radar phosphor display found in aviation and military systems. Oceanic Blue gives a modern naval sonar aesthetic. Red Alert creates a high-tension tactical look. Switch between them in the settings panel under "Styling Frequency Theme."'
      },
      {
        question: 'How does the radar target system work?',
        answer: 'The radar randomly generates bogey targets that move toward the center of the display. Friendly targets appear as green dots. Hostile targets appear as red dots with tracking boxes and trigger an Impact Intrusion Warning banner when they enter the critical center corridor. Click on a hostile bogey to intercept it — a yellow crosshair marks intercepted targets.'
      },
      {
        question: 'Does the radar work offline?',
        answer: 'After the initial page load, the radar simulation runs entirely client-side using Canvas and JavaScript. Once the page is cached by your browser, the animation continues to work without an active internet connection.'
      },
      {
        question: 'Can I use this on a Smart TV?',
        answer: 'Yes. The radar screen works on Smart TVs with web browsers. Open the URL in the TV browser, enter fullscreen mode, and the animated radar display fills the screen. It works great as a decorative ambient display for themed parties, gaming rooms, and room decoration.'
      }
    ] },
  { id: 'white-noise-screen', name: 'White Noise Screen', shortName: 'White Noise', slug: 'white-noise-screen', localizedSlugs: {}, category: 'pranks', kind: 'prank', color: '#d4d4d4', summary: 'A static-style white noise visual for retro TV effects, transitions, and prank screens.', intent: 'safe static-screen effect with motion controls', useCases: ['retro TV scenes', 'transition screens', 'video props', 'friendly jokes'], controls: ['fullscreen', 'brightness', 'reduced motion', 'timer', 'pause'], faqs: effectFaqs('White Noise Screen') },
  { id: 'fake-virus-screen', name: 'Fake Virus Screen', shortName: 'Fake Virus', slug: 'fake-virus-screen', localizedSlugs: {}, category: 'pranks', kind: 'prank', color: '#111827', summary: 'A clearly harmless fake virus screen for theatrical browser pranks and video staging.', intent: 'dramatic visual effect that stays safe and reversible', useCases: ['friendly pranks', 'video scenes', 'training examples', 'event visuals'], controls: ['fullscreen', 'escape hint', 'timer', 'brightness', 'clear screen'], faqs: effectFaqs('Fake Virus Screen') },
  // { id: 'terminal-screen', name: 'Terminal Screen', shortName: 'Terminal', slug: 'terminal-screen', localizedSlugs: {}, category: 'pranks', kind: 'prank', color: '#050505', summary: 'A premium terminal-style fullscreen page for demos, code-themed scenes, and ambient setups.', intent: 'minimal terminal atmosphere without installing anything', useCases: ['developer videos', 'demo backdrops', 'event staging', 'ambient screen'], controls: ['fullscreen', 'theme toggle', 'brightness', 'keyboard shortcuts', 'copy prompt'], faqs: effectFaqs('Terminal Screen') },
  { id: 'windows-update', name: 'Fake Windows Update Screen', shortName: 'Windows Update', slug: 'windows-update', localizedSlugs: {}, category: 'fake', kind: 'fake', color: '#0078d7', summary: 'A fake update progress screen for harmless staged demos, pauses, and prank scenarios.', intent: 'recognizable update-progress concept without system access', useCases: ['friendly pauses', 'video props', 'classroom jokes', 'event screens'], controls: ['fullscreen', 'timer', 'progress control', 'escape hint', 'brightness'], faqs: effectFaqs('Windows Update Screen') },
  // { id: 'windows-xp-screen', name: 'Windows XP Screen', shortName: 'Windows XP', slug: 'windows-xp-screen', localizedSlugs: {}, category: 'fake', kind: 'fake', color: '#3b82f6', summary: 'A nostalgic desktop-inspired fake screen for retro videos, demos, and themed presentations.', intent: 'retro desktop atmosphere inside a static webpage', useCases: ['retro videos', 'demo staging', 'party displays', 'nostalgia projects'], controls: ['fullscreen', 'brightness', 'timer', 'share screen', 'related fake screens'], faqs: effectFaqs('Windows XP Screen') },
  // { id: 'windows-11-screen', name: 'Windows 11 Screen', shortName: 'Windows 11', slug: 'windows-11-screen', localizedSlugs: {}, category: 'fake', kind: 'fake', color: '#0ea5e9', summary: 'A modern desktop-inspired fake screen for videos, staged interfaces, and presentation pauses.', intent: 'polished system-style scene without claiming to be the OS', useCases: ['screen recordings', 'video props', 'demo breaks', 'presentation staging'], controls: ['fullscreen', 'brightness', 'timer', 'share screen', 'theme toggle'], faqs: effectFaqs('Windows 11 Screen') },
  { id: 'ubuntu-screen', name: 'Ubuntu Update', shortName: 'Ubuntu', slug: 'ubuntu-screen', localizedSlugs: {}, category: 'fake', kind: 'fake', color: '#e95420', summary: 'A realistic Ubuntu update installation screen for harmless pranks, staged demos, and video props.', intent: 'convincing Ubuntu update experience in-browser', useCases: ['Linux demos', 'video scenes', 'event screens', 'training setups'], controls: ['fullscreen', 'brightness', 'timer', 'progress control', 'escape hint', 'themes'], faqs: effectFaqs('Ubuntu Update Screen') },
  { id: 'macos-screen', name: 'macOS Update', shortName: 'macOS', slug: 'macos-screen', localizedSlugs: {}, category: 'fake', kind: 'fake', color: '#1a1a1a', summary: 'A realistic macOS update installation screen for harmless pranks, staged demos, and video props.', intent: 'convincing macOS update experience in-browser', useCases: ['friendly pranks', 'video staging', 'demo pauses', 'event screens', 'classroom jokes'], controls: ['fullscreen', 'timer', 'progress control', 'escape hint', 'themes'], faqs: effectFaqs('macOS Update') },
  { id: 'android-update', name: 'Android Update Screen', shortName: 'Android Update', slug: 'android-update', localizedSlugs: {}, category: 'fake', kind: 'fake', color: '#3ddc84', summary: 'A realistic Android update installation screen for harmless pranks, staged demos, and video props.', intent: 'convincing Android update experience in-browser', useCases: ['phone videos', 'friendly pranks', 'classroom demos', 'presentation staging', 'video props'], controls: ['fullscreen', 'timer', 'progress control', 'escape hint', 'themes'], faqs: effectFaqs('Android Update Screen') },
];

export const popularTools = tools.filter((tool) =>
  ['white-screen', 'black-screen', 'red-screen', 'green-screen', 'blue-screen', 'broken-screen', 'windows-update'].includes(tool.id),
);

export function getRelatedTools(tool: Tool, limit = 6) {
  return tools.filter((candidate) => candidate.id !== tool.id && candidate.category === tool.category).slice(0, limit);
}
