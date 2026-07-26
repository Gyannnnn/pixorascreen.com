import { defaultLocale, localeOrder, locales, type Locale } from './locales';
import { tools, type Tool } from './tools';
import { toolName, toolSummary, toolFaqs } from './translations';

export const siteName = 'Free Online Screen';
export const siteUrl = 'https://freeonlinescreen.com';
export const defaultDescription =
  'Free Online Screen is a premium collection of fullscreen color screens, display tests, screen savers, prank screens, and fake update screens.';

export function toolPath(tool: Tool, locale: Locale = defaultLocale) {
  const slug = locale === defaultLocale ? tool.slug : tool.localizedSlugs[locale as Exclude<Locale, 'en'>] ?? tool.slug;
  const prefix = locales[locale].pathPrefix;
  return `${prefix}/${slug}/`;
}

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function allToolPaths() {
  return tools.flatMap((tool) => localeOrder.map((locale) => ({ tool, locale, path: toolPath(tool, locale) })));
}

export function alternatesForTool(tool: Tool) {
  return localeOrder.map((locale) => ({
    locale,
    lang: locales[locale].lang,
    href: absoluteUrl(toolPath(tool, locale)),
  }));
}

const customTitles: Partial<Record<string, Partial<Record<Locale, string>>>> = {
  'gradient-screen': {
    en: 'Gradient Screen Online - Fullscreen Color Banding & Calibration Test',
    es: 'Pantalla de Degradado Online - Test de Banding de Color y Calibración',
    pt: 'Tela de Degradê Online - Teste de Color Banding e Calibragem',
    fr: 'Écran Dégradé en Ligne - Test de Banding de Couleur & Calibration',
    de: 'Farbverlauf-Bildschirm Online - Color Banding Test & Kalibrierung',
    hi: 'ग्रेडिएंट स्क्रीन ऑनलाइन - कलर बैंडिंग टेस्ट और मॉनिटर जांच',
    ja: 'グラデーション画面 オンライン - カラーバンディングテスト＆表示色診断',
  },
  'rgb-screen': {
    en: 'RGB Screen Test Online - Fullscreen Subpixel & Color Calibration',
    es: 'Prueba de Pantalla RGB Online - Test de Subpíxeles y Calibración',
    pt: 'Teste de Tela RGB Online - Teste de Subpixels e Calibragem',
    fr: 'Test Écran RGB en Ligne - Étalonnage Sous-Pixels & Couleurs',
    de: 'RGB-Bildschirmtest Online - Subpixel & Farb-Kalibrierung',
    hi: 'आरजीबी स्क्रीन टेस्ट ऑनलाइन - फुलस्क्रीन सब-पिक्सेल और कलर कैलिब्रेशन',
    ja: 'RGB画面テスト オンライン - 全画面サブピクセル＆カラーキャリブレーション',
  },
  'hex-screen': {
    en: 'HEX Screen Test Online - Fullscreen Color Code Preview & Palette Tool',
    es: 'Pantalla HEX Online - Vista Previa de Códigos de Color y Paletas',
    pt: 'Tela HEX Online - Pré-visualização de Códigos de Cor e Paletas',
    fr: 'Écran HEX en Ligne - Aperçu des Codes Couleur & Palette Plein Écran',
    de: 'HEX-Bildschirm Online - Farbcode-Vorschau & Paletten-Tool',
    hi: 'हेक्स स्क्रीन ऑनलाइन - फुलस्क्रीन कलर कोड प्रीव्यू और पैलेट टूल',
    ja: 'HEX画面 オンライン - 全画面カラーコードプレビュー＆パレットツール',
  },
  'fireplace-screen': {
    en: 'Fireplace Screen – Online Virtual Fireplace for Desktop, TV & Laptop',
    es: 'Pantalla de Chimenea Online - Chimenea Virtual en Pantalla Completa',
    pt: 'Tela de Lareira Online - Lareira Virtual em Tela Cheia para Desktop e TV',
    fr: 'Écran de Cheminée en Ligne - Cheminée Virtuelle Plein Écran',
    de: 'Kaminfeuer-Bildschirm Online - Virtuelles Kaminfeuer für Desktop & TV',
    hi: 'फायरप्लेस स्क्रीन ऑनलाइन - डेस्कटॉप और टीवी के लिए वर्चुअल फायरप्लेस',
    ja: '暖炉の画面 オンライン - デスクトップ＆TV用バーチャル暖炉全画面',
  },
  'aquarium-screen': {
    en: 'Aquarium Screen – Free Online Virtual Aquarium for Desktop & Laptop',
    es: 'Pantalla de Acuario Online - Acuario Virtual Gratis para Escritorio y Portátil',
    pt: 'Tela de Aquário Online - Aquário Virtual Grátis para Desktop e Notebook',
    fr: 'Écran d\'Aquarium en Ligne - Aquarium Virtuel Gratuit pour PC et Portable',
    de: 'Aquarium-Bildschirm Online - Kostenloses Virtuelles Aquarium für Desktop & Laptop',
    hi: 'एक्वेरियम स्क्रीन ऑनलाइन - डेस्कटॉप और लैपटॉप के लिए मुफ्त वर्चुअल एक्वेरियम',
    ja: 'アクアリウム画面 オンライン - デスクトップ＆ノートPC用無料バーチャルアクアリウム',
  },
  'matrix-screen': {
    en: 'Matrix Screen – Online Digital Rain & Customizable Matrix Effect',
    es: 'Pantalla Matrix Online - Lluvia Digital y Efecto Matrix Personalizable',
    pt: 'Tela Matrix Online - Chuva Digital e Efeito Matrix Personalizável',
    fr: 'Écran Matrix en Ligne - Pluie Numérique et Effet Matrix Personnalisable',
    de: 'Matrix-Bildschirm Online - Digitaler Regen & Anpassbarer Matrix-Effekt',
    hi: 'मैट्रिक्स स्क्रीन ऑनलाइन - डिजिटल रेन और कस्टमाइज़ेबल मैट्रिक्स इफ़ेक्ट',
    ja: 'マトリックス画面 オンライン - デジタルレイン＆カスタマイズ可能なマトリックスエフェクト',
  },
  'ambient-screen': {
    en: 'Ambient Screen – Free Interactive Ambient Display with Animated Gradients & Soundscapes',
    es: 'Pantalla Ambiental Online - Fondo Ambiental Interactivo con Gradientes y Sonidos',
    pt: 'Tela Ambiente Online - Fundo Ambiente Interativo com Gradientes e Sons',
    fr: 'Écran Ambiant en Ligne - Fond d\'Écran Interactif avec Dégradés et Paysages Sonores',
    de: 'Ambiente-Bildschirm Online - Interaktiver Ambient-Hintergrund mit Farbverläufen & Klängen',
    hi: 'एम्बिएंट स्क्रीन ऑनलाइन - एनिमेटेड ग्रेडिएंट और साउंडस्केप के साथ इंटरैक्टिव एम्बिएंट डिस्प्ले',
    ja: 'アンビエント画面 オンライン - アニメーショングラデーションとサウンドスケープを備えたインタラクティブなアンビエントディスプレイ',
  },
  'snow-screen': {
    en: 'Snow Screen – Free Online Falling Snow & Winter Ambience for Desktop & Laptop',
    es: 'Pantalla de Nieve Online - Nieve Cayendo y Ambiente Invernal para Escritorio y Portátil',
    pt: 'Tela de Neve Online - Neve Caindo e Ambiente de Inverno para Desktop e Notebook',
    fr: 'Écran de Neige en Ligne - Chute de Neige et Ambiance Hivernale pour PC et Portable',
    de: 'Schnee-Bildschirm Online - Fallender Schnee & Winter-Atmosphäre für Desktop & Laptop',
    hi: 'स्नो स्क्रीन ऑनलाइन - डेस्कटॉप और लैपटॉप के लिए गिरती बर्फ और सर्दियों का माहौल',
    ja: '雪の画面（スノースクリーン）オンライン - デスクトップ・ノートPC向け冬の雰囲気',
  },
  'rain-screen': {
    en: 'Rain Screen – Free Online Rain Ambience & Rainy Window Effect for Desktop',
    es: 'Pantalla de Lluvia Online - Ambiente de Lluvia Realista para Escritorio y TV',
    pt: 'Tela de Chuva Online - Ambiente de Chuva Realista para Desktop e TV',
    fr: 'Écran de Pluie en Ligne - Ambiance Pluvieuse Réaliste pour PC et TV',
    de: 'Regen-Bildschirm Online - Realistische Regen-Atmosphäre für Desktop & TV',
    hi: 'रेन स्क्रीन ऑनलाइन - डेस्कटॉप और टीवी के लिए यथार्थवादी बारिश का माहौल',
    ja: '雨の画面（レインスクリーン）オンライン - デスクトップ・TV向けリアルな雨の雰囲気',
  },
  'clock-screen': {
    en: 'Flip Clock Online – Aesthetic Fullscreen Flip Clock with Pomodoro Timer',
    es: 'Reloj Flip Online - Reloj Flip Estético a Pantalla Completa con Temporizador Pomodoro',
    pt: 'Relógio Flip Online - Relógio Flip Estético em Tela Cheia com Timer Pomodoro',
    fr: 'Horloge à Volets en Ligne - Horloge à Volets Esthétique Plein Écran avec Minuteur Pomodoro',
    de: 'Klipp-Klapp-Uhr Online - Ästhetische Vollbild-Klappuhr mit Pomodoro-Timer',
    hi: 'फ्लिप घड़ी ऑनलाइन - पोमोडोरो टाइमर के साथ एस्थेटिक फुलस्क्रीन फ्लिप घड़ी',
    ja: 'フリップ時計 オンライン - ポモドーロタイマー付き高級感のある全画面フリップ時計',
  },
  'galaxy-screen': {
    en: 'Galaxy Screen – Interactive Spiral Galaxy Simulation with Real-Time Controls',
    es: 'Pantalla de Galaxia Online - Simulación Interactiva de Galaxia Espiral en Tiempo Real',
    pt: 'Tela de Galáxia Online - Simulação Interativa de Galáxia Espiral em Tempo Real',
    fr: 'Écran Galaxie en Ligne - Simulation Interactive de Galaxie Spirale en Temps Réel',
    de: 'Galaxie-Bildschirm Online - Interaktive Spiralgalaxie-Simulation in Echtzeit',
    hi: 'गैलेक्सी स्क्रीन ऑनलाइन - रीयल-टाइम नियंत्रणों के साथ इंटरैक्टिव सर्पिल आकाशगंगा सिमुलेशन',
    ja: '銀河画面 オンライン - リアルタイム操作可能なインタラクティブ渦巻銀河シミュレーション',
  },
  'broken-screen': {
    en: 'Broken Screen Prank - Free Fake Cracked Screen Simulator Online',
    es: 'Broma de Pantalla Rota - Simulador de Pantalla Agrietada Falsa Gratis Online',
    pt: 'Pegadinha de Tela Quebrada - Simulador de Tela Rachada Falsa Grátis Online',
    fr: 'Blague d\'Écran Cassé - Simulateur d\'Écran Fissuré Gratuit en Ligne',
    de: 'Kaputter Bildschirm Scherz - Kostenloser Fake-Cracked-Screen-Simulator Online',
    hi: 'टूटी स्क्रीन प्रैंक - मुफ्त ऑनलाइन फर्जी क्रैक-डिस्प्ले सिम्युलेटर',
    ja: '壊れた画面 いたずら - 無料オンライン偽のひび割れ画面シミュレーター',
  },
  'blue-screen-prank': {
    en: 'Fake Blue Screen Prank - BSOD Simulator & Windows Crash Prank Online',
    es: 'Broma de Pantalla Azul Falsa - Simulador BSOD y Broma de Fallo de Windows',
    pt: 'Pegadinha de Tela Azul Falsa - Simulador BSOD e Pegadinha de Crash do Windows',
    fr: 'Blague d\'Écran Bleu Faux - Simulateur BSOD et Farce de Plantage Windows',
    de: 'Falscher Blauer Bildschirm Streich - BSOD-Simulator & Windows-Absturz-Prank',
    hi: 'फर्जी ब्लू स्क्रीन प्रैंक - BSOD सिम्युलेटर और विंडोज क्रैश प्रैंक ऑनलाइन',
    ja: '偽のブルースクリーンいたずら - BSODシミュレーター＆Windowsクラッシュいたずらオンライン',
  },
  'windows-xp-crash': {
    en: 'Windows XP Crash Simulator - Fake Explorer.exe Error & BSOD Prank Online',
    es: 'Simulador de Crash de Windows XP - Falso Error de Explorer.exe y Broma BSOD',
    pt: 'Simulador de Crash do Windows XP - Erro Falso do Explorer.exe e Pegadinha BSOD',
    fr: 'Simulateur de Plantage Windows XP - Fausse Erreur Explorer.exe et Farce BSOD',
    de: 'Windows XP Absturz Simulator - Gefälschter Explorer.exe Fehler & BSOD Streich',
    hi: 'विंडोज एक्सपी क्रैश सिम्युलेटर - फर्जी explorer.exe त्रुटि और BSOD प्रैंक ऑनलाइन',
    ja: 'Windows XPクラッシュシミュレーター - 偽のexplorer.exeエラー＆BSODいたずらオンライン',
  },
};

const customDescriptions: Partial<Record<string, Partial<Record<Locale, string>>>> = {
  'gradient-screen': {
    en: 'Smooth multi-stop color transitions across the display for color banding tests, display calibration, and ambient backdrops. Open in fullscreen.',
    es: 'Una pantalla de degradado a pantalla completa para pruebas de banding de color, calibración de monitores y fondos creativos. Abrir en pantalla completa.',
    pt: 'Uma tela de degradê em tela cheia para testes de color banding, calibragem de monitor e fundos criativos. Abra em tela cheia.',
    fr: 'Un écran dégradé plein écran pour tester le banding de couleur, calibrer les moniteurs et créer des arrière-plans créatifs. Basculer en plein écran.',
    de: 'Ein Vollbild-Farbverlauf-Bildschirm für Color Banding Tests, Monitor-Kalibrierung und kreative Hintergründe. Im Vollbildmodus öffnen.',
    hi: 'कलर बैंडिंग परीक्षण, मॉनिटर कैलिब्रेशन और एम्बिएंट बैकग्राउंड के लिए एक फुलस्क्रीन ग्रेडिएंट स्क्रीन टूल। फुलस्क्रीन में खोलें।',
    ja: '液晶のカラーバンディング試験、表示色キャリブレーション、動画用背景に最適な全画面グラデーション表示ツール。全画面で開く。',
  },
  'rgb-screen': {
    en: 'Perform an RGB screen test online in full screen. Inspect red, green, and blue subpixels, test for stuck or dead pixels, check monitor color channels, and calibrate displays.',
    es: 'Realiza un test de pantalla RGB online a pantalla completa. Analiza subpíxeles rojos, verdes y azules, detecta píxeles muertos y calibra los colores de tu monitor.',
    pt: 'Faça um teste de tela RGB online em tela cheia. Inspecione subpixels vermelhos, verdes e azuis, encontre pixels mortos e calibre as cores do seu monitor.',
    fr: 'Testez votre écran RGB en ligne en plein écran. Inspectez les sous-pixels rouge, vert et bleu, détectez les pixels morts et étalonnez la couleur de votre moniteur.',
    de: 'Führen Sie einen RGB-Bildschirmtest online im Vollbildmodus durch. Überprüfen Sie Rot-, Grün- und Blau-Subpixel, finden Sie Pixelfehler und kalibrieren Sie Monitore.',
    hi: 'ऑनलाइन फुलस्क्रीन आरजीबी स्क्रीन टेस्ट चलाएं। लाल, हरे और नीले सब-पिक्सेल की जांच करें, खराब पिक्सल खोजें और मॉनिटर रंग चैनलों को कैलिब्रेट करें।',
    ja: 'オンラインで全画面RGB画面テストを実行。赤・緑・青のサブピクセル診断、ドット抜け検出、液晶ディスプレイのカラーキャリブレーションに最適。',
  },
  'hex-screen': {
    en: 'Preview exact CSS HEX color codes in full screen. Test brand colors, compare 4-color palettes, inspect dark mode shades (#121212, #000000), and download 4K wallpapers.',
    es: 'Visualiza códigos de color HEX exactos en pantalla completa. Prueba colores de marca, compara paletas de 4 colores, evalúa tonos de modo oscuro y descarga fondos 4K.',
    pt: 'Visualize códigos de cor HEX exatos em tela cheia. Teste cores de marca, compare paletas de 4 cores, inspecione tons de modo escuro e baixe papéis de parede 4K.',
    fr: 'Affichez des codes couleur HEX exacts en plein écran. Testez vos couleurs de marque, comparez des palettes de 4 couleurs, évaluez les teintes sombres et téléchargez des fonds 4K.',
    de: 'Vorschau exakter CSS-HEX-Farbcodes im Vollbildmodus. Testen Sie Markenfarben, vergleichen Sie 4-Farben-Paletten, prüfen Sie Dunkelmodus-Töne und laden Sie 4K-Wallpaper herunter.',
    hi: 'फुलस्क्रीन में सटीक CSS हेक्स कोड का प्रीव्यू करें। ब्रांड रंग टेस्ट करें, 4-कलर पैलेट की तुलना करें, डार्क मोड रंगों (#121212) की जांच करें और 4K वॉलपेपर डाउनलोड करें।',
    ja: 'CSSのHEXカラーコードを全画面で即座にプレビュー。ブランドカラーの検証、4色パレット比較、ダークモードシェード診断、4K壁紙ダウンロードに対応。',
  },
  'fireplace-screen': {
    en: 'Turn any screen into a cozy online virtual fireplace. Fullscreen fireplace background with crackling audio, customizable flame colors, and sleep timer for desktop, laptop, monitor, and TV.',
    es: 'Transforma cualquier pantalla en una chimenea virtual en línea. Fondo de chimenea a pantalla completa con sonido de fuego, temporizador y colores para escritorio y TV.',
    pt: 'Transforme qualquer tela em uma lareira virtual online. Fundo de lareira em tela cheia com áudio de fogueira, timer e cores personalizadas para desktop, notebook e TV.',
    fr: 'Transformez n\'importe quel écran en cheminée virtuelle chaleureuse. Fond de cheminée plein écran avec son de crépitement, minuteur et couleurs pour PC et TV.',
    de: 'Verwandeln Sie jeden Bildschirm in ein gemütliches virtuelles Kaminfeuer. Vollbild-Kaminfeuer mit Knistergeräuschen, Timer und Flammenfarben für Laptop, Monitor und TV.',
    hi: 'किसी भी स्क्रीन को आरामदायक ऑनलाइन वर्चुअल फायरप्लेस में बदलें। डेस्कटॉप, लैपटॉप और टीवी के लिए जलती आग की आवाज़ और टाइमर के साथ फुलस्क्रीन फायरप्लेस बैकग्राउंड।',
    ja: 'あらゆる画面を心地よいオンラインバーチャル暖炉に変身。デスクトップ、ノートPC、TV向けの全画面暖炉背景、焚き火サウンド、スリープタイマー搭載。',
  },
  'aquarium-screen': {
    en: 'Turn any screen into a free online virtual aquarium with animated tropical fish, bubbles, and underwater ambience. Fullscreen aquarium background for desktop, laptop, monitor, and TV — no download needed.',
    es: 'Convierte cualquier pantalla en un acuario virtual online gratis con peces tropicales animados, burbujas y ambiente submarino. Fondo de acuario a pantalla completa para escritorio, portátil, monitor y TV.',
    pt: 'Transforme qualquer tela em um aquário virtual online grátis com peixes tropicais animados, bolhas e ambiente subaquático. Fundo de aquário em tela cheia para desktop, notebook, monitor e TV.',
    fr: 'Transformez n\'importe quel écran en un aquarium virtuel en ligne gratuit avec des poissons tropicaux animés, des bulles et une ambiance sous-marine. Fond d\'aquarium plein écran pour PC, portable, moniteur et TV.',
    de: 'Verwandeln Sie jeden Bildschirm in ein kostenloses virtuelles Aquarium mit animierten tropischen Fischen, Blasen und Unterwasser-Atmosphäre. Vollbild-Aquarium-Hintergrund für Desktop, Laptop, Monitor und TV.',
    hi: 'किसी भी स्क्रीन को एनिमेटेड उष्णकटिबंधीय मछली, बुलबुले और पानी के नीचे के माहौल के साथ मुफ्त ऑनलाइन वर्चुअल एक्वेरियम में बदलें। डेस्कटॉप, लैपटॉप, मॉनिटर और टीवी के लिए फुलस्क्रीन एक्वेरियम बैकग्राउंड।',
    ja: 'アニメーションの熱帯魚、泡、水中の雰囲気を備えた無料のオンラインバーチャルアクアリウムにどんな画面でも変身。デスクトップ、ノートPC、モニター、TV向けの全画面アクアリウム背景。ダウンロード不要。',
  },
  'matrix-screen': {
    en: 'Customize an online Matrix screen with falling digital rain, neon glow colors, cyberpunk audio drones, and custom name text. Fullscreen Matrix effect for desktop, laptop, monitor, and TV — no install required.',
    es: 'Personaliza una pantalla Matrix online con lluvia digital, colores neón, drones de audio cyberpunk y texto personalizado. Efecto Matrix a pantalla completa para escritorio, portátil, monitor y TV.',
    pt: 'Personalize uma tela Matrix online com chuva digital caindo, cores neon, drones de áudio cyberpunk e texto personalizado. Efeito Matrix em tela cheia para desktop, notebook, monitor e TV.',
    fr: 'Personnalisez un écran Matrix en ligne avec pluie numérique, lueurs néon, drones audio cyberpunk et texte personnalisé. Effet Matrix plein écran pour PC, portable, moniteur et TV.',
    de: 'Passen Sie einen Online-Matrix-Bildschirm mit digitalem Regen, Neon-Glow-Farben, Cyberpunk-Audio-Drones und benutzerdefiniertem Text an. Vollbild-Matrix-Effekt für Desktop, Laptop, Monitor und TV.',
    hi: 'डिजिटल रेन, नियॉन ग्लो रंग, साइबरपंक ऑडियो ड्रोन और कस्टम टेक्स्ट के साथ ऑनलाइन मैट्रिक्स स्क्रीन को कस्टमाइज़ करें। डेस्कटॉप, लैपटॉप, मॉनिटर और टीवी के लिए फुलस्क्रीन मैट्रिक्स इफ़ेक्ट।',
    ja: 'デジタルレイン、ネオンカラー、サイバーパンクオーディオ、カスタムテキストでオンラインマトリックス画面をカスタマイズ。デスクトップ、ノートPC、モニター、TV向けの全画面マトリックスエフェクト。インストール不要。',
  },
  'ambient-screen': {
    en: 'Turn any screen into a free interactive ambient display with animated fluid gradients, cosmic stars, a 4-channel soundscape mixer, guided breathing, Pomodoro timer, and live clock overlay. Fullscreen ambient background for desktop, laptop, monitor, TV, and mobile — no install needed.',
    es: 'Convierte cualquier pantalla en un display ambiental interactivo gratis con gradientes fluidos animados, estrellas cósmicas, mezclador de sonidos de 4 canales, respiración guiada, temporizador Pomodoro y reloj. Fondo ambiental a pantalla completa para escritorio, portátil, monitor, TV y móvil.',
    pt: 'Transforme qualquer tela em um display ambiente interativo grátis com gradientes fluidos animados, estrelas cósmicas, mixer de som de 4 canais, respiração guiada, timer Pomodoro e relógio. Fundo ambiente em tela cheia para desktop, notebook, monitor, TV e celular.',
    fr: 'Transformez n\'importe quel écran en un affichage ambiant interactif gratuit avec des dégradés fluides animés, des étoiles cosmiques, un mixeur sonore 4 canaux, une respiration guidée, un minuteur Pomodoro et une horloge. Fond ambiant plein écran pour PC, portable, moniteur, TV et mobile.',
    de: 'Verwandeln Sie jeden Bildschirm in ein interaktives Ambient-Display mit animierten fließenden Farbverläufen, kosmischen Sternen, einem 4-Kanal-Soundmixer, geführter Atmung, Pomodoro-Timer und Live-Uhr. Vollbild-Ambient-Hintergrund für Desktop, Laptop, Monitor, TV und Handy.',
    hi: 'किसी भी स्क्रीन को एनिमेटेड फ्लूइड ग्रेडिएंट, कॉस्मिक स्टार्स, 4-चैनल साउंडस्केप मिक्सर, गाइडेड ब्रीदिंग, पोमोडोरो टाइमर और लाइव क्लॉक के साथ मुफ्त इंटरैक्टिव एम्बिएंट डिस्प्ले में बदलें। डेस्कटॉप, लैपटॉप, मॉनिटर, टीवी और मोबाइल के लिए फुलस्क्रीन एम्बिएंट बैकग्राउंड।',
    ja: 'アニメーションフルイドグラデーション、宇宙の星、4チャンネルサウンドスケープミキサー、ガイド付き呼吸法、ポモドーロタイマー、ライブ時計を備えた無料のインタラクティブなアンビエントディスプレイにどんな画面でも変身。デスクトップ、ノートPC、モニター、TV、モバイル向けの全画面アンビエント背景。インストール不要。',
  },
  'snow-screen': {
    en: 'Turn any screen into a free online snow screen with customizable snowfall, photorealistic snowflakes, wind drift, 20 color presets, and ambient audio. Fullscreen winter ambience for desktop, laptop, monitor, and TV — no download needed.',
    es: 'Convierte cualquier pantalla en una pantalla de nieve online gratis con nevadas personalizables, copos fotorrealistas, viento, 20 colores y audio ambiente. Ambiente invernal a pantalla completa para escritorio, portátil, monitor y TV.',
    pt: 'Transforme qualquer tela em uma tela de neve online grátis com nevascas personalizáveis, flocos fotorrealistas, vento, 20 cores e áudio ambiente. Ambiente de inverno em tela cheia para desktop, notebook, monitor e TV.',
    fr: 'Transformez n\'importe quel écran en un écran de neige en ligne gratuit avec chutes de neige personnalisables, flocons photoréalistes, vent, 20 couleurs et audio d\'ambiance. Ambiance hivernale plein écran pour PC, portable, moniteur et TV.',
    de: 'Verwandeln Sie jeden Bildschirm in einen kostenlosen Online-Schneebildschirm mit anpassbarem Schneefall, fotorealistischen Flocken, Wind, 20 Farben und Ambient-Audio. Vollbild-Winteratmosphäre für Desktop, Laptop, Monitor und TV.',
    hi: 'किसी भी स्क्रीन को अनुकूलन योग्य बर्फबारी, फोटोरियलिस्टिक स्नोफ्लेक्स, हवा, 20 रंग प्रीसेट और एम्बिएंट ऑडियो के साथ मुफ्त ऑनलाइन स्नो स्क्रीन में बदलें। डेस्कटॉप, लैपटॉप, मॉनिटर और टीवी के लिए फुलस्क्रीन विंटर एम्बिएंस।',
    ja: 'カスタマイズ可能な降雪、フォトリアルな雪片、風、20色のカラープリセット、環境音を備えた無料のオンライン雪の画面にどんな画面でも変身。デスクトップ、ノートPC、モニター、TV向けの全画面冬の雰囲気。ダウンロード不要。',
  },
  'rain-screen': {
    en: 'Turn any screen into a free online rain screen with realistic rain streaks, raindrops on glass, adjustable wind, ambient lightning, and 8 color presets. Fullscreen rain ambience for desktop, laptop, monitor, and TV — no download needed.',
    es: 'Convierte cualquier pantalla en una pantalla de lluvia online gratis con gotas realistas, lluvia sobre vidrio, viento ajustable, relámpagos ambientales y 8 colores. Ambiente de lluvia a pantalla completa para escritorio, portátil, monitor y TV.',
    pt: 'Transforme qualquer tela em uma tela de chuva online grátis com gotas realistas, chuva no vidro, vento ajustável, relâmpagos ambiente e 8 cores. Ambiente de chuva em tela cheia para desktop, notebook, monitor e TV.',
    fr: 'Transformez n\'importe quel écran en un écran de pluie en ligne gratuit avec des gouttes réalistes, de la pluie sur verre, du vent réglable, des éclairs d\'ambiance et 8 couleurs. Ambiance pluvieuse plein écran pour PC, portable, moniteur et TV.',
    de: 'Verwandeln Sie jeden Bildschirm in einen kostenlosen Online-Regenbildschirm mit realistischen Regentropfen, Regen auf Glas, einstellbarem Wind, Umgebungsblitzen und 8 Farben. Vollbild-Regenatmosphäre für Desktop, Laptop, Monitor und TV.',
    hi: 'किसी भी स्क्रीन को यथार्थवादी बारिश की बूंदों, कांच पर बारिश, समायोज्य हवा, एम्बिएंट लाइटनिंग और 8 रंगों के साथ मुफ्त ऑनलाइन रेन स्क्रीन में बदलें। डेस्कटॉप, लैपटॉप, मॉनिटर और टीवी के लिए फुलस्क्रीन रेन एम्बिएंस।',
    ja: 'リアルな雨粒、窓ガラスの雨、調整可能な風、環境雷、8色のカラープリセットを備えた無料のオンライン雨画面にどんな画面でも変身。デスクトップ、ノートPC、モニター、TV向けの全画面雨の雰囲気。ダウンロード不要。',
  },
  'clock-screen': {
    en: 'Turn any screen into a free online flip clock with realistic retro flip-card animation, 6 aesthetic themes, 12/24h format, seconds toggle, Pomodoro timer, and ambient click sound. Fullscreen clock for desktop, laptop, monitor, and TV — no download needed.',
    es: 'Convierte cualquier pantalla en un reloj flip online gratis con animación realista de tarjetas giratorias, 6 temas estéticos, formato 12/24h, segundos, temporizador Pomodoro y sonido de clic ambiental. Reloj a pantalla completa para escritorio, portátil, monitor y TV.',
    pt: 'Transforme qualquer tela em um relógio flip online grátis com animação realista de cartas giratórias, 6 temas estéticos, formato 12/24h, segundos, timer Pomodoro e som de clique ambiente. Relógio em tela cheia para desktop, notebook, monitor e TV.',
    fr: 'Transformez n\'importe quel écran en une horloge à volets en ligne gratuite avec animation réaliste de cartes à bascule, 6 thèmes esthétiques, format 12/24h, secondes, minuteur Pomodoro et son de clic d\'ambiance. Horloge plein écran pour PC, portable, moniteur et TV.',
    de: 'Verwandeln Sie jeden Bildschirm in eine kostenlose Online-Klappuhr mit realistischer Kippkarten-Animation, 6 ästhetischen Designs, 12/24h-Format, Sekunden, Pomodoro-Timer und dezentem Klick-Sound. Vollbild-Uhr für Desktop, Laptop, Monitor und TV.',
    hi: 'किसी भी स्क्रीन को यथार्थवादी रेट्रो फ्लिप-कार्ड एनिमेशन, 6 एस्थेटिक थीम, 12/24 घंटे प्रारूप, सेकंड, पोमोडोरो टाइमर और एम्बिएंट क्लिक साउंड के साथ मुफ्त ऑनलाइन फ्लिप घड़ी में बदलें। डेस्कटॉप, लैपटॉप, मॉनिटर और टीवी के लिए फुलस्क्रीन घड़ी — बिना डाउनलोड के।',
    ja: 'リアルなレトロフリップカードアニメーション、6つの美的テーマ、12/24時間表示、秒表示、ポモドーロタイマー、環境クリック音を備えた無料のオンラインフリップ時計にどんな画面でも変身。デスクトップ、ノートPC、モニター、TV向け全画面時計。ダウンロード不要。',
  },
  'galaxy-screen': {
    en: 'Turn any screen into a free online galaxy screen with realistic spiral galaxy animation, 5 color themes, adjustable star density, rotation speed, 3D tilt, gravitational lensing black hole effect, and ambient space audio. Fullscreen galaxy for desktop, laptop, monitor, and TV — no download needed.',
    es: 'Convierte cualquier pantalla en una pantalla de galaxia online gratis con animación realista de galaxia espiral, 5 temas de color, densidad de estrellas ajustable, velocidad de rotación, inclinación 3D, efecto de lente gravitacional de agujero negro y audio espacial ambiental. Galaxia a pantalla completa para escritorio, portátil, monitor y TV.',
    pt: 'Transforme qualquer tela em uma tela de galáxia online grátis com animação realista de galáxia espiral, 5 temas de cor, densidade de estrelas ajustável, velocidade de rotação, inclinação 3D, efeito de lente gravitacional de buraco negro e áudio espacial ambiente. Galáxia em tela cheia para desktop, notebook, monitor e TV.',
    fr: 'Transformez n\'importe quel écran en un écran de galaxie en ligne gratuit avec animation réaliste de galaxie spirale, 5 thèmes de couleur, densité d\'étoiles réglable, vitesse de rotation, inclinaison 3D, effet de lentille gravitationnelle de trou noir et audio spatial d\'ambiance. Galaxie plein écran pour PC, portable, moniteur et TV.',
    de: 'Verwandeln Sie jeden Bildschirm in einen kostenlosen Online-Galaxie-Bildschirm mit realistischer Spiralgalaxie-Animation, 5 Farbthemen, einstellbarer Sterndichte, Rotationsgeschwindigkeit, 3D-Neigung, Gravitationslinsen-Schwarzes-Loch-Effekt und Ambient-Weltraum-Audio. Vollbild-Galaxie für Desktop, Laptop, Monitor und TV.',
    hi: 'किसी भी स्क्रीन को यथार्थवादी सर्पिल आकाशगंगा एनिमेशन, 5 रंग थीम, समायोज्य तारा घनत्व, घूर्णन गति, 3D झुकाव, गुरुत्वाकर्षण लेंसिंग ब्लैक होल प्रभाव और एम्बिएंट स्पेस ऑडियो के साथ मुफ्त ऑनलाइन गैलेक्सी स्क्रीन में बदलें। डेस्कटॉप, लैपटॉप, मॉनिटर और टीवी के लिए फुलस्क्रीन गैलेक्सी — बिना डाउनलोड के।',
    ja: 'リアルな渦巻銀河アニメーション、5つのカラーテーマ、調整可能な星の密度、回転速度、3D傾き、重力レンズ効果のブラックホール、環境宇宙音声を備えた無料のオンライン銀河画面にどんな画面でも変身。デスクトップ、ノートPC、モニター、TV向け全画面銀河。ダウンロード不要。',
  },
  'broken-screen': {
    en: 'Turn any screen into a realistic fake broken screen. The best free online prank tool for April Fools, office jokes, social media content, and harmless fun. 8 cracked-screen styles in fullscreen.',
    es: 'Convierte cualquier pantalla en una falsa pantalla rota realista. La mejor herramienta de broma online gratis para bromas de oficina y contenido para redes sociales. 8 estilos de pantalla agrietada a pantalla completa.',
    pt: 'Transforme qualquer tela em uma tela quebrada falsa realista. A melhor ferramenta de pegadinha online grátis para brincadeiras de escritório e conteúdo para mídias sociais. 8 estilos de tela rachada em tela cheia.',
    fr: 'Transformez n\'importe quel écran en un faux écran cassé réaliste. Le meilleur outil de blague en ligne gratuit pour les farces au bureau et le contenu pour les réseaux sociaux. 8 styles d\'écran fissuré en plein écran.',
    de: 'Verwandeln Sie jeden Bildschirm in einen realistischen falschen kaputten Bildschirm. Das beste kostenlose Online-Scherz-Tool für Bürostreiche und Social-Media-Inhalte. 8 Stile für gesprungene Bildschirme im Vollbildmodus.',
    hi: 'किसी भी स्क्रीन को यथार्थवादी फर्जी टूटी स्क्रीन में बदलें। ऑफिस मजाक और सोशल मीडिया कंटेंट के लिए सबसे अच्छा मुफ्त ऑनलाइन प्रैंक टूल। फुलस्क्रीन में 8 क्रैक-स्क्रीन शैलियाँ।',
    ja: 'あらゆる画面をリアルな偽の壊れた画面に変身。エイプリルフール、オフィスジョーク、ソーシャルメディアコンテンツに最適な無料オンラインいたずらツール。全画面で8種類のひび割れスタイル。',
  },
  'blue-screen-prank': {
    en: 'Turn any screen into a realistic fake Windows BSOD crash. The most convincing blue screen prank online with animated progress, 8 stop codes, QR code, and configurable simulation. Free, harmless, no download.',
    es: 'Convierte cualquier pantalla en un falso fallo BSOD de Windows realista. La broma de pantalla azul más convincente online con progreso animado, 8 códigos de fallo, código QR y simulación configurable. Gratis, inofensivo, sin descarga.',
    pt: 'Transforme qualquer tela em um falso crash BSOD do Windows realista. A pegadinha de tela azul mais convincente online com progresso animado, 8 códigos de parada, QR Code e simulação configurável. Grátis, inofensivo, sem download.',
    fr: 'Transformez n\'importe quel écran en un faux plantage BSOD Windows réaliste. La blague d\'écran bleu la plus convaincante en ligne avec progression animée, 8 codes d\'arrêt, QR code et simulation configurable. Gratuit, inoffensif, sans téléchargement.',
    de: 'Verwandeln Sie jeden Bildschirm in einen realistischen falschen Windows-BSOD-Absturz. Der überzeugendste blaue-Bildschirm-Streich online mit animiertem Fortschritt, 8 Stoppcodes, QR-Code und konfigurierbarer Simulation. Kostenlos, harmlos, kein Download.',
    hi: 'किसी भी स्क्रीन को यथार्थवादी फर्जी विंडोज BSOD क्रैश में बदलें। एनिमेटेड प्रोग्रेस, 8 स्टॉप कोड, QR कोड और कॉन्फ़िगरेबल सिमुलेशन के साथ सबसे विश्वसनीय ब्लू स्क्रीन प्रैंक ऑनलाइन। मुफ्त, हानिरहित, बिना डाउनलोड।',
    ja: 'あらゆる画面をリアルな偽のWindows BSODクラッシュに変身。アニメーション進行、8つのストップコード、QRコード、設定可能なシミュレーションを備えた最も説得力のあるオンラインブルースクリーンいたずら。無料、無害、ダウンロード不要。',
  },
  'windows-xp-crash': {
    en: 'Turn any screen into a realistic Windows XP crash simulator with full desktop simulation, explorer.exe error dialogs, cascading crash windows, and classic BSOD transition. Free, harmless, no download — pure retro nostalgia.',
    es: 'Convierte cualquier pantalla en un realista simulador de crash de Windows XP con simulación completa del escritorio, diálogos de error de explorer.exe, ventanas de error en cascada y transición BSOD clásica. Gratis, inofensivo, sin descarga — pura nostalgia retro.',
    pt: 'Transforme qualquer tela em um realista simulador de crash do Windows XP com simulação completa da área de trabalho, diálogos de erro do explorer.exe, janelas de erro em cascata e transição BSOD clássica. Grátis, inofensivo, sem download — pura nostalgia retrô.',
    fr: 'Transformez n\'importe quel écran en un simulateur réaliste de plantage Windows XP avec simulation complète du bureau, dialogues d\'erreur explorer.exe, fenêtres d\'erreur en cascade et transition BSOD classique. Gratuit, inoffensif, sans téléchargement — pure nostalgie rétro.',
    de: 'Verwandeln Sie jeden Bildschirm in einen realistischen Windows XP Absturzsimulator mit vollständiger Desktop-Simulation, Explorer.exe-Fehlerdialogen, kaskadierenden Fehlerfenstern und klassischem BSOD-Übergang. Kostenlos, harmlos, kein Download — pure Retro-Nostalgie.',
    hi: 'किसी भी स्क्रीन को एक यथार्थवादी विंडोज एक्सपी क्रैश सिम्युलेटर में बदलें, जिसमें पूर्ण डेस्कटॉप सिमुलेशन, explorer.exe त्रुटि डायलॉग, कैस्केडिंग क्रैश विंडो और क्लासिक BSOD ट्रांज़िशन शामिल है। मुफ्त, हानिरहित, बिना डाउनलोड — शुद्ध रेट्रो नॉस्टेल्जिया।',
    ja: 'あらゆる画面を、完全なデスクトップシミュレーション、explorer.exeエラーダイアログ、カスケードクラッシュウィンドウ、クラシックBSOD移行を備えたリアルなWindows XPクラッシュシミュレーターに変身。無料、無害、ダウンロード不要 — 純粋なレトロノスタルジア。',
  },
};

export function titleForTool(tool: Tool, locale: Locale = defaultLocale) {
  if (customTitles[tool.id]?.[locale]) {
    return customTitles[tool.id]![locale]!;
  }
  const tName = toolName(locale, tool);
  return `${tName} Online - Free Fullscreen Tool`;
}

export function descriptionForTool(tool: Tool, locale: Locale = defaultLocale) {
  if (customDescriptions[tool.id]?.[locale]) {
    return customDescriptions[tool.id]![locale]!;
  }
  const tSummary = toolSummary(locale, tool);
  return `${tSummary} Open in fullscreen, adjust brightness, and test your display.`;
}

export function alternatesForHome() {
  return localeOrder.map((locale) => ({
    locale,
    lang: locales[locale].lang,
    href: absoluteUrl(locales[locale].pathPrefix || '/'),
  }));
}

export function landingJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

function stripHtml(text: string): string {
  return text.replace(/<[^>]*>/g, '');
}

export function toolJsonLd(tool: Tool, path: string, locale: Locale = defaultLocale) {
  const url = absoluteUrl(path);
  const tName = toolName(locale, tool);
  const baseSchemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: titleForTool(tool, locale),
      url,
      description: descriptionForTool(tool, locale),
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
      mainEntity: {
        '@type': 'SoftwareApplication',
        name: tName,
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: tName, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: toolFaqs(locale, tool.id, tool.faqs).map((faq) => ({
        '@type': 'Question',
        name: stripHtml(faq.question),
        acceptedAnswer: {
          '@type': 'Answer',
          text: stripHtml(faq.answer),
        },
      })),
    },
  ];

  if (tool.id === 'rgb-screen') {
    baseSchemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Perform an RGB Subpixel & Display Test',
      description: 'A step-by-step guide to testing monitor subpixels, detecting stuck or dead pixels, and calibrating RGB color channels.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Open Fullscreen RGB Tool',
          text: 'Click the Fullscreen button or press "F" to launch full screen mode without browser UI distortion.'
        },
        {
          '@type': 'HowToStep',
          name: 'Inspect Primary RGB Channels',
          text: 'Cycle through Pure Red (#FF0000), Pure Green (#00FF00), and Pure Blue (#0000FF) screens to isolate and test each subpixel channel.'
        },
        {
          '@type': 'HowToStep',
          name: 'Spot Stuck vs. Dead Subpixels',
          text: 'Look closely for permanently illuminated bright dots (stuck subpixels) or dark unlit spots (dead pixels) across the panel.'
        },
        {
          '@type': 'HowToStep',
          name: 'Calibrate Monitor Color Gain',
          text: 'Adjust your monitor Hardware OSD menu for Red, Green, and Blue gains until screen luminance and white points match your desired reference.'
        }
      ]
    });
  }

  if (tool.id === 'hex-screen') {
    baseSchemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Preview and Test HEX Color Codes Fullscreen',
      description: 'A step-by-step guide to testing CSS HEX color codes, dark mode shades, and color palettes on real monitor displays.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Enter Your HEX Color Code',
          text: 'Type or paste any 6-digit or 3-digit HEX code (e.g. #0070F3, #121212) into the color input box.'
        },
        {
          '@type': 'HowToStep',
          name: 'Launch Fullscreen View',
          text: 'Click Fullscreen or press "F" to project your exact HEX color across the entire display without browser UI interference.'
        },
        {
          '@type': 'HowToStep',
          name: 'Compare Palettes and Contrast',
          text: 'Select up to 4 HEX color swatches to compare side-by-side split screens or evaluate dark mode contrast.'
        },
        {
          '@type': 'HowToStep',
          name: 'Download HD/4K Wallpapers',
          text: 'Choose your desired screen orientation and download crisp PNG wallpapers rendered directly from your HEX color codes.'
        }
      ]
    });
  }

  if (tool.id === 'fireplace-screen') {
    baseSchemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Turn Any Display into an Online Virtual Fireplace Screen',
      description: 'A quick guide to creating a cozy ambient fireplace background on desktop, laptop, monitor, or TV with sound effects.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Open the Fireplace Screen Tool',
          text: 'Load the page on your laptop, PC, desktop monitor, tablet, or Smart TV web browser.'
        },
        {
          '@type': 'HowToStep',
          name: 'Adjust Sound & Flame Colors',
          text: 'Toggle crackling fire sound, set volume levels, and select your flame color style (Classic Orange, Blue Mystic, Emerald Wood, Violet Phantom).'
        },
        {
          '@type': 'HowToStep',
          name: 'Enter Fullscreen View',
          text: 'Click the Fullscreen button or press "F" to remove browser bars and display a seamless cozy fireplace background.'
        },
        {
          '@type': 'HowToStep',
          name: 'Set Optional Sleep Timer',
          text: 'Enable the automatic sleep timer (15, 30, 60, or 90 minutes) for nighttime relaxation, study sessions, or sleeping.'
        }
      ]
    });
  }

  if (tool.id === 'clock-screen') {
    baseSchemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Use an Online Flip Clock as a Fullscreen Timer & Focus Tool',
      description: 'A step-by-step guide to setting up and customizing an aesthetic flip clock online with Pomodoro timer, themes, and keyboard shortcuts.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Open the Flip Clock Tool',
          text: 'Load the page on your laptop, desktop monitor, tablet, or Smart TV web browser. The flip clock displays the current time immediately with retro flip-card animation.'
        },
        {
          '@type': 'HowToStep',
          name: 'Customize Theme & Format',
          text: 'Press Space to open settings. Choose from 6 themes (Warm Retro, Pure OLED, Soft White, Cyber Grid, Rose Gold, Space Dusk). Toggle 12/24-hour format and show or hide seconds.'
        },
        {
          '@type': 'HowToStep',
          name: 'Enable Fullscreen View',
          text: 'Click the Fullscreen button or press "F" to fill your entire display with the flip clock. The interface auto-hides after a few seconds of inactivity for a clean view.'
        },
        {
          '@type': 'HowToStep',
          name: 'Activate the Pomodoro Timer',
          text: 'Press "T" to switch to Countdown mode. Select a preset focus interval (5, 10, 15, 25, 40, or 60 minutes) or set a custom duration. The flip animation counts down visually.'
        },
        {
          '@type': 'HowToStep',
          name: 'Adjust Sound & Brightness',
          text: 'Toggle retro click sound with "S" or the mute button. Use the brightness slider (10% to 100%) to adjust the clock visibility for any room lighting condition. Press "R" to reset the countdown.'
        }
      ]
    });
  }

  if (tool.id === 'blue-screen-prank') {
    baseSchemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Prank Someone with a Fake Blue Screen of Death (BSOD)',
      description: 'A step-by-step guide to using the online fake blue screen prank tool to simulate a realistic Windows crash screen for harmless pranks, video content, and tech demonstrations.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Open the Fake BSOD Simulator',
          text: 'Load the blue-screen-prank page on any device with a modern browser — desktop, laptop, tablet, phone, or Smart TV.'
        },
        {
          '@type': 'HowToStep',
          name: 'Configure the Simulation',
          text: 'Click the gear icon to open settings. Adjust the total duration (5 to 180 seconds) to control how fast the progress percentage climbs. Set the starting percentage (0% to 95%) to skip ahead for immediate effect.'
        },
        {
          '@type': 'HowToStep',
          name: 'Launch Fullscreen Mode',
          text: 'Click the Fullscreen button or press the "F" key on your keyboard. The screen will instantly fill with an authentic Windows BSOD, hiding all browser chrome for maximum realism.'
        },
        {
          '@type': 'HowToStep',
          name: 'Watch the Animated Crash Simulation',
          text: 'The progress percentage climbs automatically from the configured start point using realistic Windows easing curves with randomized pauses. The displayed stop code, QR code, and sad face emoticon match the real Windows 10/11 BSOD design.'
        },
        {
          '@type': 'HowToStep',
          name: 'Exit the Simulation Safely',
          text: 'Press the Escape (Esc) key to exit fullscreen mode instantly. The simulation ends immediately and the page returns to normal. No system changes, no installed software, zero trace left on the device.'
        }
      ]
    });
  }

  if (tool.id === 'windows-xp-crash') {
    baseSchemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Use the Windows XP Crash Simulator for Pranks & Nostalgia',
      description: 'A step-by-step guide to using the online Windows XP crash simulator to recreate the classic XP desktop crash experience for harmless pranks, retro nostalgia, and content creation.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Open the Windows XP Crash Simulator',
          text: 'Load the windows-xp-crash page on any device with a modern browser — desktop, laptop, tablet, phone, or Smart TV.'
        },
        {
          '@type': 'HowToStep',
          name: 'Configure the Crash Settings',
          text: 'Use the controls panel to select the trigger mode: "Encounter Dialog -> Cascade -> BSOD" for a gradual crash escalation, or "Instant BSOD" for immediate blue screen. Set the BSOD delay (5, 12, 20, or 30 seconds) and toggle the XP warning bell sound on or off.'
        },
        {
          '@type': 'HowToStep',
          name: 'Launch Fullscreen Prank Mode',
          text: 'Click the "Fullscreen Prank" button or press the "F" key on your keyboard. The screen fills with an authentic Windows XP desktop featuring the Bliss wallpaper, desktop icons, taskbar, and live system clock.'
        },
        {
          '@type': 'HowToStep',
          name: 'Trigger the Crash Simulation',
          text: 'Click anywhere on the desktop or click the dialog buttons to spawn cascading explorer.exe error windows. Each click creates more error dialogs, escalating the crash effect. After the configured delay, the screen transitions to the classic Windows XP BSOD with a memory dump counter.'
        },
        {
          '@type': 'HowToStep',
          name: 'Reset and Exit Safely',
          text: 'Press the Escape (Esc) key to exit fullscreen mode instantly. The simulation resets automatically — all error dialogs disappear, the BSOD hides, and the desktop returns to its initial state. No system changes, no installed software, zero trace left on the device.'
        }
      ]
    });
  }

  return baseSchemas;
}
