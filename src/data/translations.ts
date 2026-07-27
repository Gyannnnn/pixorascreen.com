import type { Locale } from './locales';

const site: Record<Locale, Record<string, string>> = {
  en: {
    'site.title': 'Free Online Screen',
    'site.tagline': 'Premium Fullscreen Utilities',
    'hero.eyebrow': 'FREE FULLSCREEN UTILITIES',
    'hero.heading': 'The fastest way to turn any display into a useful screen.',
    'hero.subtitle': 'Color screens, display tests, ambient savers, prank screens, and fake update pages in one premium, static-first web app.',
    'hero.browse': 'Browse tools',
    'hero.run_test': 'Run a screen test',
    'analysis.eyebrow': 'WHY IT MATTERS',
    'analysis.heading': 'Consistent by design.',
    'analysis.p1': 'Most screen utility sites are just pages that happen to share a domain. Open a color screen, then a prank — the controls move around, the layout shifts, and nothing feels connected.',
    'analysis.p2': 'Free Online Screen is different. Every tool uses the same controls, the same shortcuts, the same layout. Brightness, fullscreen, copy colors — they work the same way everywhere. No accounts, no ads, no slow scripts. Just a fast static page that puts the screen first and stays consistent across every tool.',
    'nav.tools': 'Tools',
    'nav.search': 'Search...',
    'nav.search_tools': 'Search tools...',
    'nav.menu': 'Menu',
    'nav.language': 'Language',
    'nav.theme': 'Toggle theme',
    'footer.description': 'Premium fullscreen utilities for color, display testing, ambience, pranks, and fake screens. Static, fast, accessible, and free.',
    'footer.categories': 'Categories',
    'footer.popular': 'Popular Pages',
    'footer.languages': 'Languages',
    'footer.company': 'Company',
    'footer.about': 'About',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.contact': 'Contact',
    'footer.github': 'GitHub',
    'tool.shortcuts': 'SHORTCUTS',
    'tool.shortcuts_heading': 'Designed for fast repeat use.',
    'tool.shortcut_fullscreen': 'Fullscreen mode',
    'tool.shortcut_random': 'Random color',
    'tool.shortcut_copy': 'Copy current color',
    'tool.shortcut_download': 'Download image',
    'tool.faq': 'FAQ',
    'tool.faq_heading': 'Questions about {name}.',
    'tool.related': 'RELATED TOOLS',
    'tool.related_heading': 'Similar fullscreen utilities.',
    'tool.related_searches': 'PEOPLE ALSO SEARCH FOR',
    'tool.related_searches_heading': 'Common terms related to white screens.',
    'tool.all_tools': 'All tools',
    'tool.breadcrumb_home': 'Home',
    'screen.color': 'Color',
    'screen.hex': 'HEX',
    'screen.rgb': 'RGB',
    'screen.hsl': 'HSL',
    'screen.brightness': 'Brightness',
    'screen.fullscreen': 'Fullscreen',
    'screen.copy_hex': 'Copy HEX',
    'screen.copy_rgb': 'Copy RGB',
    'screen.random': 'Random',
    'screen.favorite': 'Favorite color',
    'screen.favorites': 'Favorite colors',
    'screen.choose_color': 'Choose screen color',
    'screen.hex_value': 'HEX color value',
    'screen.rgb_value': 'RGB color value',
    'screen.hsl_value': 'HSL color value',
    'screen.brightness_label': 'Screen brightness',
    'screen.fullscreen_hint': 'Press Escape to exit fullscreen',
    'screen.status_hex_copied': 'HEX copied',
    'screen.status_rgb_copied': 'RGB copied',
    'screen.status_color_copied': 'Color copied',
    'screen.status_favorite_added': 'Favorite added',
    'screen.status_favorite_removed': 'Favorite removed',
    'screen.status_already_saved': 'Already saved',
    'screen.download': 'Download',
    'screen.orientation_landscape': 'Landscape (1920x1080)',
    'screen.orientation_portrait': 'Portrait (1080x1920)',
    'screen.orientation_square': 'Square (1080x1080)',
    'screen.orientation_device': 'My screen size',
    'screen.subpixel_tests': 'Subpixel Tests:',
    'screen.pure_red': 'Pure Red',
    'screen.pure_green': 'Pure Green',
    'screen.pure_blue': 'Pure Blue',
    'screen.white': 'White',
    'screen.black': 'Black',
    'screen.rgb_split': 'RGB Split',
    'screen.hex_presets': 'HEX Presets:',
    'screen.oled_black': 'OLED Black (#000000)',
    'screen.dark_mode': 'Dark Mode (#121212)',
    'screen.palette_reset': '4-Color Palette Split',
  },
  es: {
    'site.title': 'Free Online Screen',
    'site.tagline': 'Utilidades de pantalla completa premium',
    'hero.eyebrow': 'UTILIDADES GRATUITAS DE PANTALLA COMPLETA',
    'hero.heading': 'La forma más rápida de convertir cualquier pantalla en una herramienta útil.',
    'hero.subtitle': 'Pantallas de color, pruebas de display, salvapantallas, bromas y pantallas falsas en una sola app web premium y estática.',
    'hero.browse': 'Explorar herramientas',
    'hero.run_test': 'Hacer una prueba',
    'analysis.eyebrow': 'POR QUÉ IMPORTA',
    'analysis.heading': 'Consistente por diseño.',
    'analysis.p1': 'La mayoría de los sitios de pantallas son solo páginas que comparten un dominio. Abre una de color y luego una de broma — los controles cambian, el diseño se mueve, nada se siente conectado.',
    'analysis.p2': 'Free Online Screen es diferente. Cada herramienta usa los mismos controles, los mismos atajos, el mismo diseño. Brillo, pantalla completa, copiar color — funcionan igual en todas partes. Sin cuentas, sin anuncios, sin scripts lentos. Solo una página rápida que pone la pantalla primero y se mantiene consistente en cada herramienta.',
    'nav.tools': 'Herramientas',
    'nav.search': 'Buscar...',
    'nav.search_tools': 'Buscar herramientas...',
    'nav.menu': 'Menú',
    'nav.language': 'Idioma',
    'nav.theme': 'Cambiar tema',
    'footer.description': 'Utilidades premium de pantalla completa para color, pruebas de display, ambiente, bromas y pantallas falsas. Estático, rápido, accesible y gratuito.',
    'footer.categories': 'Categorías',
    'footer.popular': 'Páginas Populares',
    'footer.languages': 'Idiomas',
    'footer.company': 'Empresa',
    'footer.about': 'Acerca de',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.contact': 'Contacto',
    'footer.github': 'GitHub',
    'tool.shortcuts': 'ATAJOS',
    'tool.shortcuts_heading': 'Diseñado para uso rápido y repetido.',
    'tool.shortcut_fullscreen': 'Modo pantalla completa',
    'tool.shortcut_random': 'Color aleatorio',
    'tool.shortcut_copy': 'Copiar color actual',
    'tool.shortcut_download': 'Descargar imagen',
    'tool.faq': 'PREGUNTAS FRECUENTES',
    'tool.faq_heading': 'Preguntas sobre {name}.',
    'tool.related': 'HERRAMIENTAS RELACIONADAS',
    'tool.related_heading': 'Utilidades de pantalla completa similares.',
    'tool.related_searches': 'LA GENTE TAMBIÉN BUSCA',
    'tool.related_searches_heading': 'Términos comunes para pantallas blancas.',
    'tool.all_tools': 'Todas las herramientas',
    'tool.breadcrumb_home': 'Inicio',
    'screen.color': 'Color',
    'screen.hex': 'HEX',
    'screen.rgb': 'RGB',
    'screen.hsl': 'HSL',
    'screen.brightness': 'Brillo',
    'screen.fullscreen': 'Pantalla completa',
    'screen.copy_hex': 'Copiar HEX',
    'screen.copy_rgb': 'Copiar RGB',
    'screen.random': 'Aleatorio',
    'screen.favorite': 'Color favorito',
    'screen.favorites': 'Colores favoritos',
    'screen.choose_color': 'Elegir color',
    'screen.hex_value': 'Valor HEX',
    'screen.rgb_value': 'Valor RGB',
    'screen.hsl_value': 'Valor HSL',
    'screen.brightness_label': 'Brillo de pantalla',
    'screen.fullscreen_hint': 'Presiona Escape para salir',
    'screen.status_hex_copied': 'HEX copiado',
    'screen.status_rgb_copied': 'RGB copiado',
    'screen.status_color_copied': 'Color copiado',
    'screen.status_favorite_added': 'Favorito añadido',
    'screen.status_favorite_removed': 'Favorito eliminado',
    'screen.status_already_saved': 'Ya guardado',
    'screen.download': 'Descargar',
    'screen.orientation_landscape': 'Horizontal (1920x1080)',
    'screen.orientation_portrait': 'Vertical (1080x1920)',
    'screen.orientation_square': 'Cuadrada (1080x1080)',
    'screen.orientation_device': 'Mi pantalla',
    'screen.subpixel_tests': 'Pruebas de Subpíxel:',
    'screen.pure_red': 'Rojo Puro',
    'screen.pure_green': 'Verde Puro',
    'screen.pure_blue': 'Azul Puro',
    'screen.white': 'Blanco',
    'screen.black': 'Negro',
    'screen.rgb_split': 'División RGB',
    'screen.hex_presets': 'Ajustes HEX:',
    'screen.oled_black': 'Negro OLED (#000000)',
    'screen.dark_mode': 'Modo Oscuro (#121212)',
    'screen.palette_reset': 'Paleta de 4 Colores',
  },
  pt: {
    'site.title': 'Free Online Screen',
    'site.tagline': 'Utilitários Premium de Tela Cheia',
    'hero.eyebrow': 'UTILITÁRIOS GRATUITOS DE TELA CHEIA',
    'hero.heading': 'A maneira mais rápida de transformar qualquer tela em uma ferramenta útil.',
    'hero.subtitle': 'Telas coloridas, testes de display, protetores de tela, brincadeiras e telas falsas em um único app web premium e estático.',
    'hero.browse': 'Explorar ferramentas',
    'hero.run_test': 'Fazer um teste',
    'analysis.eyebrow': 'POR QUE IMPORTA',
    'analysis.heading': 'Consistente por design.',
    'analysis.p1': 'A maioria dos sites de telas são apenas páginas que compartilham um domínio. Abra uma tela colorida e depois uma de brincadeira — os controles mudam, o layout se altera, nada parece conectado.',
    'analysis.p2': 'O Free Online Screen é diferente. Cada ferramenta usa os mesmos controles, os mesmos atalhos, o mesmo layout. Brilho, tela cheia, copiar cores — funcionam da mesma forma em toda parte. Sem contas, sem anúncios, sem scripts lentos. Apenas uma página rápida que coloca a tela em primeiro lugar e mantém a consistência em cada ferramenta.',
    'nav.tools': 'Ferramentas',
    'nav.search': 'Pesquisar...',
    'nav.search_tools': 'Pesquisar ferramentas...',
    'nav.menu': 'Menu',
    'nav.language': 'Idioma',
    'nav.theme': 'Alternar tema',
    'footer.description': 'Utilitários premium de tela cheia para cor, teste de display, ambiente, brincadeiras e telas falsas. Estático, rápido, acessível e gratuito.',
    'footer.categories': 'Categorias',
    'footer.popular': 'Páginas Populares',
    'footer.languages': 'Idiomas',
    'footer.company': 'Empresa',
    'footer.about': 'Sobre',
    'footer.privacy': 'Privacidade',
    'footer.terms': 'Termos',
    'footer.contact': 'Contato',
    'footer.github': 'GitHub',
    'tool.shortcuts': 'ATALHOS',
    'tool.shortcuts_heading': 'Projetado para uso rápido e repetido.',
    'tool.shortcut_fullscreen': 'Modo tela cheia',
    'tool.shortcut_random': 'Cor aleatória',
    'tool.shortcut_copy': 'Copiar cor atual',
    'tool.shortcut_download': 'Baixar imagem',
    'tool.faq': 'PERGUNTAS FREQUENTES',
    'tool.faq_heading': 'Perguntas sobre {name}.',
    'tool.related': 'FERRAMENTAS RELACIONADAS',
    'tool.related_heading': 'Utilitários de tela cheia similares.',
    'tool.related_searches': 'AS PESSOAS TAMBÉM PESQUISAM',
    'tool.related_searches_heading': 'Termos comuns para telas brancas.',
    'tool.all_tools': 'Todas as ferramentas',
    'tool.breadcrumb_home': 'Início',
    'screen.color': 'Cor',
    'screen.hex': 'HEX',
    'screen.rgb': 'RGB',
    'screen.hsl': 'HSL',
    'screen.brightness': 'Brilho',
    'screen.fullscreen': 'Tela cheia',
    'screen.copy_hex': 'Copiar HEX',
    'screen.copy_rgb': 'Copiar RGB',
    'screen.random': 'Aleatório',
    'screen.favorite': 'Cor favorita',
    'screen.favorites': 'Cores favoritas',
    'screen.choose_color': 'Escolher cor',
    'screen.hex_value': 'Valor HEX',
    'screen.rgb_value': 'Valor RGB',
    'screen.hsl_value': 'Valor HSL',
    'screen.brightness_label': 'Brilho da tela',
    'screen.fullscreen_hint': 'Pressione Escape para sair',
    'screen.status_hex_copied': 'HEX copiado',
    'screen.status_rgb_copied': 'RGB copiado',
    'screen.status_color_copied': 'Cor copiada',
    'screen.status_favorite_added': 'Favorito adicionado',
    'screen.status_favorite_removed': 'Favorito removido',
    'screen.status_already_saved': 'Já salvo',
    'screen.download': 'Baixar',
    'screen.orientation_landscape': 'Paisagem (1920x1080)',
    'screen.orientation_portrait': 'Retrato (1080x1920)',
    'screen.orientation_square': 'Quadrado (1080x1080)',
    'screen.orientation_device': 'Minha tela',
    'screen.subpixel_tests': 'Testes de Subpixel:',
    'screen.pure_red': 'Vermelho Puro',
    'screen.pure_green': 'Verde Puro',
    'screen.pure_blue': 'Azul Puro',
    'screen.white': 'Branco',
    'screen.black': 'Preto',
    'screen.rgb_split': 'Divisão RGB',
    'screen.hex_presets': 'Predefinições HEX:',
    'screen.oled_black': 'Preto OLED (#000000)',
    'screen.dark_mode': 'Modo Escuro (#121212)',
    'screen.palette_reset': 'Paleta de 4 Cores',
  },
  fr: {
    'site.title': 'Free Online Screen',
    'site.tagline': 'Utilitaires Premium Plein Écran',
    'hero.eyebrow': 'UTILITAIRES GRATUITS PLEIN ÉCRAN',
    'hero.heading': 'Le moyen le plus rapide de transformer n\'importe quel écran en un outil utile.',
    'hero.subtitle': 'Écrans colorés, tests d\'affichage, économiseurs d\'écran, farces et faux écrans dans une seule application web premium et statique.',
    'hero.browse': 'Parcourir les outils',
    'hero.run_test': 'Effectuer un test',
    'analysis.eyebrow': 'POURQUOI CELA COMPTE',
    'analysis.heading': 'Cohérent par conception.',
    'analysis.p1': 'La plupart des sites d\'écrans ne sont que des pages qui partagent un domaine. Ouvrez un écran coloré puis une farce — les contrôles changent, la disposition bouge, rien ne semble connecté.',
    'analysis.p2': 'Free Online Screen est différent. Chaque outil utilise les mêmes contrôles, les mêmes raccourcis, la même disposition. Luminosité, plein écran, copier les couleurs — ils fonctionnent partout de la même manière. Pas de comptes, pas de publicités, pas de scripts lents. Juste une page rapide qui met l\'écran en premier et reste cohérente sur chaque outil.',
    'nav.tools': 'Outils',
    'nav.search': 'Rechercher...',
    'nav.search_tools': 'Rechercher des outils...',
    'nav.menu': 'Menu',
    'nav.language': 'Langue',
    'nav.theme': 'Changer le thème',
    'footer.description': 'Utilitaires premium plein écran pour la couleur, les tests d\'affichage, l\'ambiance, les farces et les faux écrans. Statique, rapide, accessible et gratuit.',
    'footer.categories': 'Catégories',
    'footer.popular': 'Pages Populaires',
    'footer.languages': 'Langues',
    'footer.company': 'Entreprise',
    'footer.about': 'À propos',
    'footer.privacy': 'Confidentialité',
    'footer.terms': 'Conditions',
    'footer.contact': 'Contact',
    'footer.github': 'GitHub',
    'tool.shortcuts': 'RACCOURCIS',
    'tool.shortcuts_heading': 'Conçu pour une utilisation rapide et répétée.',
    'tool.shortcut_fullscreen': 'Mode plein écran',
    'tool.shortcut_random': 'Couleur aléatoire',
    'tool.shortcut_copy': 'Copier la couleur',
    'tool.shortcut_download': 'Télécharger l\'image',
    'tool.faq': 'FAQ',
    'tool.faq_heading': 'Questions sur {name}.',
    'tool.related': 'OUTILS CONNEXES',
    'tool.related_heading': 'Utilitaires plein écran similaires.',
    'tool.related_searches': 'LES GENS RECHERCHENT AUSSI',
    'tool.related_searches_heading': 'Termes courants liés aux écrans blancs.',
    'tool.all_tools': 'Tous les outils',
    'tool.breadcrumb_home': 'Accueil',
    'screen.color': 'Couleur',
    'screen.hex': 'HEX',
    'screen.rgb': 'RGB',
    'screen.hsl': 'HSL',
    'screen.brightness': 'Luminosité',
    'screen.fullscreen': 'Plein écran',
    'screen.copy_hex': 'Copier HEX',
    'screen.copy_rgb': 'Copier RGB',
    'screen.random': 'Aléatoire',
    'screen.favorite': 'Couleur favorite',
    'screen.favorites': 'Couleurs favorites',
    'screen.choose_color': 'Choisir une couleur',
    'screen.hex_value': 'Valeur HEX',
    'screen.rgb_value': 'Valeur RGB',
    'screen.hsl_value': 'Valeur HSL',
    'screen.brightness_label': 'Luminosité',
    'screen.fullscreen_hint': 'Appuyez sur Échap pour quitter',
    'screen.status_hex_copied': 'HEX copié',
    'screen.status_rgb_copied': 'RGB copié',
    'screen.status_color_copied': 'Couleur copiée',
    'screen.status_favorite_added': 'Favori ajouté',
    'screen.status_favorite_removed': 'Favori supprimé',
    'screen.status_already_saved': 'Déjà enregistré',
    'screen.download': 'Télécharger',
    'screen.orientation_landscape': 'Paysage (1920x1080)',
    'screen.orientation_portrait': 'Portrait (1080x1920)',
    'screen.orientation_square': 'Carré (1080x1080)',
    'screen.orientation_device': 'Mon écran',
    'screen.subpixel_tests': 'Tests de Sous-Pixels:',
    'screen.pure_red': 'Rouge Pur',
    'screen.pure_green': 'Vert Pur',
    'screen.pure_blue': 'Bleu Pur',
    'screen.white': 'Blanc',
    'screen.black': 'Noir',
    'screen.rgb_split': 'Division RGB',
    'screen.hex_presets': 'Préréglages HEX:',
    'screen.oled_black': 'Noir OLED (#000000)',
    'screen.dark_mode': 'Mode Sombre (#121212)',
    'screen.palette_reset': 'Palette de 4 Couleurs',
  },
  de: {
    'site.title': 'Free Online Screen',
    'site.tagline': 'Premium Vollbild-Dienstprogramme',
    'hero.eyebrow': 'KOSTENLOSE VOLLBILD-DIENSTPROGRAMME',
    'hero.heading': 'Der schnellste Weg, jeden Bildschirm in ein nützliches Werkzeug zu verwandeln.',
    'hero.subtitle': 'Farbbildschirme, Display-Tests, Bildschirmschoner, Scherze und gefälschte Bildschirme in einer einzigen premium, statischen Web-App.',
    'hero.browse': 'Werkzeuge durchsuchen',
    'hero.run_test': 'Einen Test durchführen',
    'analysis.eyebrow': 'WARUM ES WICHTIG IST',
    'analysis.heading': 'Durchdacht konsistent.',
    'analysis.p1': 'Die meisten Bildschirmseiten sind nur Seiten, die zufällig dieselbe Domain teilen. Öffne einen Farbbildschirm, dann einen Scherz — die Bedienelemente wandern, das Layout verschiebt sich, nichts fühlt sich verbunden an.',
    'analysis.p2': 'Free Online Screen ist anders. Jedes Werkzeug verwendet dieselben Bedienelemente, dieselben Tastenkürzel, dasselbe Layout. Helligkeit, Vollbild, Farben kopieren — sie funktionieren überall gleich. Keine Konten, keine Werbung, keine langsamen Skripte. Nur eine schnelle, statische Seite, die den Bildschirm in den Vordergrund stellt und bei jedem Werkzeug konsistent bleibt.',
    'nav.tools': 'Werkzeuge',
    'nav.search': 'Suchen...',
    'nav.search_tools': 'Werkzeuge suchen...',
    'nav.menu': 'Menü',
    'nav.language': 'Sprache',
    'nav.theme': 'Design wechseln',
    'footer.description': 'Premium Vollbild-Dienstprogramme für Farbe, Display-Tests, Ambiente, Scherze und gefälschte Bildschirme. Statisch, schnell, zugänglich und kostenlos.',
    'footer.categories': 'Kategorien',
    'footer.popular': 'Beliebte Seiten',
    'footer.languages': 'Sprachen',
    'footer.company': 'Unternehmen',
    'footer.about': 'Über uns',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.contact': 'Kontakt',
    'footer.github': 'GitHub',
    'tool.shortcuts': 'TASTENKÜRZEL',
    'tool.shortcuts_heading': 'Konzipiert für schnelle, wiederholte Nutzung.',
    'tool.shortcut_fullscreen': 'Vollbildmodus',
    'tool.shortcut_random': 'Zufällige Farbe',
    'tool.shortcut_copy': 'Aktuelle Farbe kopieren',
    'tool.shortcut_download': 'Bild herunterladen',
    'tool.faq': 'FAQ',
    'tool.faq_heading': 'Fragen zu {name}.',
    'tool.related': 'VERWANDTE WERKZEUGE',
    'tool.related_heading': 'Ähnliche Vollbild-Dienstprogramme.',
    'tool.related_searches': 'BELIEBTE SUCHANFRAGEN',
    'tool.related_searches_heading': 'Häufige Begriffe zu weißem Bildschirm.',
    'tool.all_tools': 'Alle Werkzeuge',
    'tool.breadcrumb_home': 'Startseite',
    'screen.color': 'Farbe',
    'screen.hex': 'HEX',
    'screen.rgb': 'RGB',
    'screen.hsl': 'HSL',
    'screen.brightness': 'Helligkeit',
    'screen.fullscreen': 'Vollbild',
    'screen.copy_hex': 'HEX kopieren',
    'screen.copy_rgb': 'RGB kopieren',
    'screen.random': 'Zufällig',
    'screen.favorite': 'Lieblingsfarbe',
    'screen.favorites': 'Lieblingsfarben',
    'screen.choose_color': 'Farbe auswählen',
    'screen.hex_value': 'HEX-Wert',
    'screen.rgb_value': 'RGB-Wert',
    'screen.hsl_value': 'HSL-Wert',
    'screen.brightness_label': 'Bildschirmhelligkeit',
    'screen.fullscreen_hint': 'Drücken Sie Escape zum Beenden',
    'screen.status_hex_copied': 'HEX kopiert',
    'screen.status_rgb_copied': 'RGB kopiert',
    'screen.status_color_copied': 'Farbe kopiert',
    'screen.status_favorite_added': 'Favorit hinzugefügt',
    'screen.status_favorite_removed': 'Favorit entfernt',
    'screen.status_already_saved': 'Bereits gespeichert',
    'screen.download': 'Herunterladen',
    'screen.orientation_landscape': 'Querformat (1920x1080)',
    'screen.orientation_portrait': 'Hochformat (1080x1920)',
    'screen.orientation_square': 'Quadratisch (1080x1080)',
    'screen.orientation_device': 'Bildschirmgröße',
    'screen.subpixel_tests': 'Subpixel-Tests:',
    'screen.pure_red': 'Reines Rot',
    'screen.pure_green': 'Reines Grün',
    'screen.pure_blue': 'Reines Blau',
    'screen.white': 'Weiß',
    'screen.black': 'Schwarz',
    'screen.rgb_split': 'RGB-Aufteilung',
    'screen.hex_presets': 'HEX-Voreinstellungen:',
    'screen.oled_black': 'OLED-Schwarz (#000000)',
    'screen.dark_mode': 'Dunkelmodus (#121212)',
    'screen.palette_reset': '4-Farben-Palette',
  },
  hi: {
    'site.title': 'फ्री ऑनलाइन स्क्रीन',
    'site.tagline': 'प्रीमियम फुलस्क्रीन उपयोगिताएँ',
    'hero.eyebrow': 'मुफ्त फुलस्क्रीन उपयोगिताएँ',
    'hero.heading': 'किसी भी डिस्प्ले को उपयोगी स्क्रीन में बदलने का सबसे तेज़ तरीका।',
    'hero.subtitle': 'रंग स्क्रीन, डिस्प्ले टेस्ट, एम्बिएंट सेवर, प्रैंक स्क्रीन और फर्जी अपडेट पेज सभी एक प्रीमियम, स्टैटिक-फर्स्ट वेब ऐप में।',
    'hero.browse': 'उपकरण देखें',
    'hero.run_test': 'स्क्रीन टेस्ट करें',
    'analysis.eyebrow': 'यह क्यों मायने रखता है',
    'analysis.heading': 'डिज़ाइन से एकसमान।',
    'analysis.p1': 'अधिकांश स्क्रीन यूटिलिटी साइटें सिर्फ ऐसे पेज होते हैं जो एक ही डोमेन साझा करते हैं। कोई रंग स्क्रीन खोलें, फिर कोई प्रैंक — कंट्रोल बदल जाते हैं, लेआउट हिल जाता है, कुछ भी जुड़ा हुआ नहीं लगता।',
    'analysis.p2': 'Free Online Screen अलग है। हर टूल एक ही कंट्रोल, एक ही शॉर्टकट, एक ही लेआउट का उपयोग करता है। ब्राइटनेस, फुलस्क्रीन, कलर कॉपी — सब जगह एक जैसे काम करते हैं। कोई अकाउंट नहीं, कोई विज्ञापन नहीं, कोई धीमी स्क्रिप्ट नहीं। बस एक तेज़ स्टैटिक पेज जो स्क्रीन को पहले रखता है और हर टूल में एकसमान रहता है।',
    'nav.tools': 'उपकरण',
    'nav.search': 'खोजें...',
    'nav.search_tools': 'उपकरण खोजें...',
    'nav.menu': 'मेन्यू',
    'nav.language': 'भाषा',
    'nav.theme': 'थीम बदलें',
    'footer.description': 'रंग, डिस्प्ले टेस्टिंग, एम्बिएंस, प्रैंक और फर्जी स्क्रीन के लिए प्रीमियम फुलस्क्रीन उपयोगिताएँ। स्टैटिक, तेज़, सुलभ और मुफ्त।',
    'footer.categories': 'श्रेणियाँ',
    'footer.popular': 'लोकप्रिय पेज',
    'footer.languages': 'भाषाएँ',
    'footer.company': 'कंपनी',
    'footer.about': 'हमारे बारे में',
    'footer.privacy': 'गोपनीयता',
    'footer.terms': 'शर्तें',
    'footer.contact': 'संपर्क',
    'footer.github': 'GitHub',
    'tool.shortcuts': 'शॉर्टकट',
    'tool.shortcuts_heading': 'तेज़ और दोहराव उपयोग के लिए डिज़ाइन किया गया।',
    'tool.shortcut_fullscreen': 'फुलस्क्रीन मोड',
    'tool.shortcut_random': 'रैंडम रंग',
    'tool.shortcut_copy': 'वर्तमान रंग कॉपी करें',
    'tool.shortcut_download': 'छवि डाउनलोड करें',
    'tool.faq': 'सामान्य प्रश्न',
    'tool.faq_heading': '{name} के बारे में प्रश्न।',
    'tool.related': 'संबंधित उपकरण',
    'tool.related_heading': 'समान फुलस्क्रीन उपयोगिताएँ।',
    'tool.related_searches': 'लोग यह भी खोजते हैं',
    'tool.related_searches_heading': 'सफेद स्क्रीन से जुड़े सामान्य शब्द।',
    'tool.all_tools': 'सभी उपकरण',
    'tool.breadcrumb_home': 'होम',
    'screen.color': 'रंग',
    'screen.hex': 'HEX',
    'screen.rgb': 'RGB',
    'screen.hsl': 'HSL',
    'screen.brightness': 'चमक',
    'screen.fullscreen': 'फुलस्क्रीन',
    'screen.copy_hex': 'HEX कॉपी करें',
    'screen.copy_rgb': 'RGB कॉपी करें',
    'screen.random': 'रैंडम',
    'screen.favorite': 'पसंदीदा रंग',
    'screen.favorites': 'पसंदीदा रंग',
    'screen.choose_color': 'स्क्रीन का रंग चुनें',
    'screen.hex_value': 'HEX रंग मान',
    'screen.rgb_value': 'RGB रंग मान',
    'screen.hsl_value': 'HSL रंग मान',
    'screen.brightness_label': 'स्क्रीन की चमक',
    'screen.fullscreen_hint': 'बाहर निकलने के लिए Escape दबाएं',
    'screen.status_hex_copied': 'HEX कॉपी हुआ',
    'screen.status_rgb_copied': 'RGB कॉपी हुआ',
    'screen.status_color_copied': 'रंग कॉपी हुआ',
    'screen.status_favorite_added': 'पसंदीदा जोड़ा गया',
    'screen.status_favorite_removed': 'पसंदीदा हटाया गया',
    'screen.status_already_saved': 'पहले से सहेजा हुआ',
    'screen.download': 'डाउनलोड',
    'screen.orientation_landscape': 'लैंडस्केप (1920x1080)',
    'screen.orientation_portrait': 'पोर्ट्रेट (1080x1920)',
    'screen.orientation_square': 'वर्गाकार (1080x1080)',
    'screen.orientation_device': 'मेरा स्क्रीन आकार',
    'screen.subpixel_tests': 'सब-पिक्सेल परीक्षण:',
    'screen.pure_red': 'शुद्ध लाल',
    'screen.pure_green': 'शुद्ध हरा',
    'screen.pure_blue': 'शुद्ध नीला',
    'screen.white': 'सफेद',
    'screen.black': 'काला',
    'screen.rgb_split': 'आरजीबी विभाजन',
    'screen.hex_presets': 'हेक्स प्रीसेट्स:',
    'screen.oled_black': 'OLED काला (#000000)',
    'screen.dark_mode': 'डार्क मोड (#121212)',
    'screen.palette_reset': '4-कलर पैलेट',
  },
  ja: {
    'site.title': 'Free Online Screen',
    'site.tagline': 'プレミアム全画面ユーティリティ',
    'hero.eyebrow': '無料の全画面ユーティリティ',
    'hero.heading': 'あらゆるディスプレイを便利な画面に変える最速の方法。',
    'hero.subtitle': 'カラー画面、ディスプレイテスト、アンビエントセーバー、いたずら画面、偽のアップデートページを1つのプレミアムな静的ファーストWebアプリに。',
    'hero.browse': 'ツールを見る',
    'hero.run_test': '画面テストを実行',
    'analysis.eyebrow': 'なぜ重要なのか',
    'analysis.heading': '設計による一貫性。',
    'analysis.p1': 'ほとんどの画面ユーティリティサイトは、単に同じドメインを共有しているだけのページです。カラー画面を開いて、次にいたずら画面を開く — コントロールが変わり、レイアウトが変わり、何も繋がっている感じがしません。',
    'analysis.p2': 'Free Online Screenは違います。すべてのツールが同じコントロール、同じショートカット、同じレイアウトを使用します。明るさ、全画面表示、色のコピー — どこでも同じように機能します。アカウント不要、広告なし、遅いスクリプトなし。画面を最優先にし、すべてのツールで一貫性を保つ高速な静的ページです。',
    'nav.tools': 'ツール',
    'nav.search': '検索...',
    'nav.search_tools': 'ツールを検索...',
    'nav.menu': 'メニュー',
    'nav.language': '言語',
    'nav.theme': 'テーマ切替',
    'footer.description': 'カラー、ディスプレイテスト、アンビエンス、いたずら、偽の画面のためのプレミアム全画面ユーティリティ。静的、高速、アクセシブル、無料。',
    'footer.categories': 'カテゴリ',
    'footer.popular': '人気のページ',
    'footer.languages': '言語',
    'footer.company': '会社',
    'footer.about': '概要',
    'footer.privacy': 'プライバシー',
    'footer.terms': '利用規約',
    'footer.contact': 'お問い合わせ',
    'footer.github': 'GitHub',
    'tool.shortcuts': 'ショートカット',
    'tool.shortcuts_heading': '高速な繰り返し使用のために設計。',
    'tool.shortcut_fullscreen': '全画面モード',
    'tool.shortcut_random': 'ランダムカラー',
    'tool.shortcut_copy': '現在の色をコピー',
    'tool.shortcut_download': '画像をダウンロード',
    'tool.faq': 'よくある質問',
    'tool.faq_heading': '{name}についての質問。',
    'tool.related': '関連ツール',
    'tool.related_heading': '類似の全画面ユーティリティ。',
    'tool.related_searches': '関連規格・他の人はこちらも検索',
    'tool.related_searches_heading': '白い画面に関連するよく検索される用語。',
    'tool.all_tools': 'すべてのツール',
    'tool.breadcrumb_home': 'ホーム',
    'screen.color': '色',
    'screen.hex': 'HEX',
    'screen.rgb': 'RGB',
    'screen.hsl': 'HSL',
    'screen.brightness': '明るさ',
    'screen.fullscreen': '全画面',
    'screen.copy_hex': 'HEXをコピー',
    'screen.copy_rgb': 'RGBをコピー',
    'screen.random': 'ランダム',
    'screen.favorite': 'お気に入りの色',
    'screen.favorites': 'お気に入りの色',
    'screen.choose_color': '画面の色を選択',
    'screen.hex_value': 'HEX色の値',
    'screen.rgb_value': 'RGB色の値',
    'screen.hsl_value': 'HSL色の値',
    'screen.brightness_label': '画面の明るさ',
    'screen.fullscreen_hint': '終了するにはEscapeを押してください',
    'screen.status_hex_copied': 'HEXをコピーしました',
    'screen.status_rgb_copied': 'RGBをコピーしました',
    'screen.status_color_copied': '色をコピーしました',
    'screen.status_favorite_added': 'お気に入りに追加',
    'screen.status_favorite_removed': 'お気に入りを削除',
    'screen.status_already_saved': 'すでに保存済み',
    'screen.download': 'ダウンロード',
    'screen.orientation_landscape': '横長 (1920x1080)',
    'screen.orientation_portrait': '縦長 (1080x1920)',
    'screen.orientation_square': '正方形 (1080x1080)',
    'screen.orientation_device': '画面サイズ',
    'screen.subpixel_tests': 'サブピクセルテスト:',
    'screen.pure_red': '純粋な赤',
    'screen.pure_green': '純粋な緑',
    'screen.pure_blue': '純粋な青',
    'screen.white': '白',
    'screen.black': '黒',
    'screen.rgb_split': 'RGB分割',
    'screen.hex_presets': 'HEXプリセット:',
    'screen.oled_black': 'OLEDブラック (#000000)',
    'screen.dark_mode': 'ダークモード (#121212)',
    'screen.palette_reset': '4色パレット分割',
  },
};

const toolNames: Record<string, Partial<Record<Locale, string>>> = {
  'white-screen': { es: 'Pantalla Blanca', pt: 'Tela Branca', fr: 'Écran Blanc', de: 'Weißer Bildschirm', hi: 'सफेद स्क्रीन', ja: '白い画面' },
  'black-screen': { es: 'Pantalla Negra', pt: 'Tela Preta', fr: 'Écran Noir', de: 'Schwarzer Bildschirm', hi: 'काली स्क्रीन', ja: '黒い画面' },
  'green-screen': { es: 'Pantalla Verde', pt: 'Tela Verde', fr: 'Écran Vert', de: 'Grüner Bildschirm', hi: 'हरी स्क्रीन', ja: '緑の画面' },
  'blue-screen': { es: 'Pantalla Azul', pt: 'Tela Azul', fr: 'Écran Bleu', de: 'Blauer Bildschirm', hi: 'नीली स्क्रीन', ja: '青い画面' },
  'red-screen': { es: 'Pantalla Roja', pt: 'Tela Vermelha', fr: 'Écran Rouge', de: 'Roter Bildschirm', hi: 'लाल स्क्रीन', ja: '赤い画面' },
  'orange-screen': { es: 'Pantalla Naranja', pt: 'Tela Laranja', fr: 'Écran Orange', de: 'Oranger Bildschirm', hi: 'नारंगी स्क्रीन', ja: 'オレンジの画面' },
  'yellow-screen': { es: 'Pantalla Amarilla', pt: 'Tela Amarela', fr: 'Écran Jaune', de: 'Gelber Bildschirm', hi: 'पीली स्क्रीन', ja: '黄色の画面' },
  'purple-screen': { es: 'Pantalla Morada', pt: 'Tela Roxa', fr: 'Écran Violet', de: 'Lila Bildschirm', hi: 'बैंगनी स्क्रीन', ja: '紫の画面' },
  'pink-screen': { es: 'Pantalla Rosa', pt: 'Tela Rosa', fr: 'Écran Rose', de: 'Rosa Bildschirm', hi: 'गुलाबी स्क्रीन', ja: 'ピンクの画面' },
  'cyan-screen': { es: 'Pantalla Cian', pt: 'Tela Ciano', fr: 'Écran Cyan', de: 'Cyan Bildschirm', hi: 'स्यान स्क्रीन', ja: 'シアンの画面' },
  'brown-screen': { es: 'Pantalla Marrón', pt: 'Tela Marrom', fr: 'Écran Marron', de: 'Brauner Bildschirm', hi: 'भूरी स्क्रीन', ja: '茶色の画面' },
  'grey-screen': { es: 'Pantalla Gris', pt: 'Tela Cinza', fr: 'Écran Gris', de: 'Grauer Bildschirm', hi: 'स्लेटी स्क्रीन', ja: '灰色の画面' },
  'custom-color-screen': { es: 'Pantalla de Color Personalizado', pt: 'Tela de Cor Personalizada', fr: 'Écran Couleur Personnalisé', de: 'Benutzerdefinierter Farbbildschirm', hi: 'कस्टम कलर स्क्रीन', ja: 'カスタムカラー画面' },
  'gradient-screen': { es: 'Pantalla de Degradado', pt: 'Tela de Degradê', fr: 'Écran Dégradé', de: 'Farbverlauf-Bildschirm', hi: 'ग्रेडिएंट स्क्रीन', ja: 'グラデーション画面' },
  'macos-screen': { es: 'Actualización de macOS', pt: 'Atualização do macOS', fr: 'Mise à jour macOS', de: 'macOS-Aktualisierung', hi: 'macOS अपडेट', ja: 'macOSアップデート' },
  'radar-screen': { es: 'Pantalla de Radar', pt: 'Tela de Radar', fr: 'Écran Radar', de: 'Radar-Bildschirm', hi: 'रडार स्क्रीन', ja: 'レーダー画面' },
  'fireplace-screen': { es: 'Pantalla de Chimenea', pt: 'Tela de Lareira', fr: 'Écran de Cheminée', de: 'Kaminfeuer-Bildschirm', hi: 'फायरप्लेस स्क्रीन', ja: '暖炉の画面' },
  'snow-screen': { es: 'Pantalla de Nieve', pt: 'Tela de Neve', fr: 'Écran de Neige', de: 'Schneefall-Bildschirm', hi: 'स्नो स्क्रीन', ja: '雪の画面' },
  'matrix-screen': { es: 'Pantalla Matrix', pt: 'Tela Matrix', fr: 'Écran Matrix', de: 'Matrix-Bildschirm', hi: 'मैट्रिक्स स्क्रीन', ja: 'マトリックス画面' },
  'rain-screen': { es: 'Pantalla de Lluvia', pt: 'Tela de Chuva', fr: 'Écran de Pluie', de: 'Regen-Bildschirm', hi: 'रेन स्क्रीन', ja: '雨の画面' },
  'clock-screen': { es: 'Reloj Flip', pt: 'Relógio Flip', fr: 'Horloge à Volets', de: 'Klipp-Klapp-Uhr', hi: 'फ्लिप घड़ी', ja: 'フリップ時計' },
  'rgb-screen': { es: 'Pantalla RGB', pt: 'Tela RGB', fr: 'Écran RGB', de: 'RGB-Bildschirm', hi: 'आरजीबी स्क्रीन', ja: 'RGB画面' },
  'hex-screen': { es: 'Pantalla HEX', pt: 'Tela HEX', fr: 'Écran HEX', de: 'HEX-Bildschirm', hi: 'हेक्स स्क्रीन', ja: 'HEX画面' },
  'aquarium-screen': { es: 'Pantalla de Acuario', pt: 'Tela de Aquário', fr: 'Écran d\'Aquarium', de: 'Aquarium-Bildschirm', hi: 'एक्वेरियम स्क्रीन', ja: 'アクアリウム画面' },
  'ambient-screen': { es: 'Pantalla Ambiental', pt: 'Tela Ambiente', fr: 'Écran Ambiant', de: 'Ambiente-Bildschirm', hi: 'एम्बिएंट स्क्रीन', ja: 'アンビエント画面' },
  'galaxy-screen': { es: 'Pantalla de Galaxia', pt: 'Tela de Galáxia', fr: 'Écran Galaxie', de: 'Galaxie-Bildschirm', hi: 'गैलेक्सी स्क्रीन', ja: '銀河の画面' },
  'broken-screen': { es: 'Pantalla Rota', pt: 'Tela Quebrada', fr: 'Écran Cassé', de: 'Kaputter Bildschirm', hi: 'टूटी स्क्रीन', ja: '壊れた画面' },
  'blue-screen-prank': { es: 'Broma de Pantalla Azul', pt: 'Pegadinha de Tela Azul', fr: 'Blague d\'Écran Bleu', de: 'Blauer-Bildschirm-Streich', hi: 'ब्लू स्क्रीन प्रैंक', ja: '青い画面のいたずら' },
  'windows-xp-crash': { es: 'Crash de Windows XP', pt: 'Crash do Windows XP', fr: 'Plantage Windows XP', de: 'Windows XP Absturz', hi: 'विंडोज एक्सपी क्रैश', ja: 'Windows XPクラッシュ' },
  'white-noise-screen': { es: 'Pantalla de Ruido Blanco', pt: 'Tela de Ruído Branco', fr: 'Écran Bruit Blanc', de: 'Weißes-Rauschen-Bildschirm', hi: 'व्हाइट नॉइज़ स्क्रीन', ja: 'ホワイトノイズ画面' },
  'fake-virus-screen': { es: 'Pantalla de Virus Falsa', pt: 'Tela de Vírus Falsa', fr: 'Fausse Écran de Virus', de: 'Gefälschter Virus-Bildschirm', hi: 'फर्जी वायरस स्क्रीन', ja: '偽ウイルス画面' },
  'windows-update': { es: 'Pantalla de Actualización de Windows Falsa', pt: 'Tela de Atualização do Windows Falsa', fr: 'Fausse Écran de Mise à Jour Windows', de: 'Gefälschter Windows-Update-Bildschirm', hi: 'फर्जी विंडोज अपडेट स्क्रीन', ja: '偽Windowsアップデート画面' },
  'ubuntu-screen': { es: 'Actualización de Ubuntu', pt: 'Atualização do Ubuntu', fr: 'Mise à Jour Ubuntu', de: 'Ubuntu-Update', hi: 'उबंटू अपडेट', ja: 'Ubuntuアップデート' },
};

const toolSummaries: Record<string, Partial<Record<Locale, string>>> = {
  'custom-color-screen': {
    es: 'Una herramienta versátil de prueba de color de pantalla para generar cualquier pantalla completa de color sólido para comprobar la uniformidad del monitor, fugas de luz e identificar píxeles muertos.',
    pt: 'Uma ferramenta versátil de teste de cor de tela para gerar qualquer cor de preenchimento em tela cheia para verificar uniformidade do monitor, pixels mortos e vazamento de luz.',
    fr: 'Un outil de test de couleur d\'écran polyvalent pour générer des couleurs unies plein écran afin de diagnostiquer les pixels morts, les fuites de lumière et l\'uniformité de la dalle.',
    de: 'Ein vielseitiges Bildschirm-Farbtest-Tool zur Generierung jeder Vollbildfarbe für Gleichmäßigkeitsprüfungen, Pixelfehler- und Backlight-Bleed-Tests.',
    hi: 'डिस्प्ले यूनिफॉर्मिटी, डेड पिक्सल और बैकलाइट ब्लीड की जांच के लिए स्क्रीन को किसी भी रंग में बदलने वाला एक बहुमुखी स्क्रीन कलर टेस्टिंग टूल।',
    ja: 'ディスプレイ表示の均一性診断、ドット抜けチェック、バックライト漏れの検出用に、任意の単色全画面を表示できる画面色テストツール。',
  },
  'gradient-screen': {
    es: 'Una pantalla de degradado a pantalla completa para pruebas de banding, fondos creativos y decoración ambiental con transiciones suaves de color.',
    pt: 'Uma tela de degradê em tela cheia para testes de banding, fundos criativos e uso de iluminação ambiente com transições de cor suaves.',
    fr: 'Un écran dégradé plein écran pour tester le banding (bandes de couleur), créer des arrière-plans créatifs et de l\'éclairage d\'ambiance.',
    de: 'Ein Vollbild-Farbverlauf-Bildschirm für Banding-Tests, kreative Hintergründe und Ambient-Lighting mit nahtlosen Farbübergängen.',
    hi: 'कलर बैंडिंग परीक्षण, रचनात्मक पृष्ठभूमि और चिकनी रंग संक्रमणों के साथ परिवेश प्रकाश प्रभाव के लिए एक फुलस्क्रीन ग्रेडिएंट स्क्रीन टूल।',
    ja: '液晶のカラーバンディング試験や動画用背景、なめらかな変色グラフィックによる間接照明に最適な全画面グラデーション表示ツール。',
  },
  'rgb-screen': {
    es: 'Un probador de pantalla RGB en pantalla completa para calibrar canales de color, encontrar píxeles muertos y verificar la uniformidad del display.',
    pt: 'Um testador de tela RGB em tela cheia para calibrar canais de cores primárias, encontrar pixels mortos e checar a uniformidade do display.',
    fr: 'Un outil écran RGB plein écran pour calibrer vos sous-pixels, détecter les pixels morts et vérifier l\'uniformité de votre dalle.',
    de: 'Ein Vollbild-RGB-Bildschirmtest zur Farbkanal-Kalibrierung, Pixelfehlersuche und Gleichmäßigkeitsprüfung Ihres Displays.',
    hi: 'रंग चैनलों को कैलिब्रेट करने, खराब पिक्सल खोजने और डिस्प्ले की यूनिफॉर्मिटी जांचने के लिए एक फुलस्क्रीन आरजीबी स्क्रीन टूल।',
    ja: 'カラーチャネルのキャリブレーション、ドット抜けチェック、液晶ディスプレイの均一性診断に役立つ全画面RGB画面テストツール。',
  },
  'hex-screen': {
    es: 'Una herramienta de prueba de color HEX a pantalla completa para diseñadores y desarrolladores para previsualizar códigos CSS, probar paletas de color y evaluar tonos oscuros.',
    pt: 'Uma ferramenta de teste de cor HEX em tela cheia para designers e desenvolvedores pré-visualizarem códigos CSS, testarem paletas de cor e inspecionarem tons escuros.',
    fr: 'Un outil de couleur HEX plein écran pour les designers et développeurs afin de prévisualiser des codes couleur CSS, tester des palettes et évaluer les teintes sombres.',
    de: 'Ein Vollbild-HEX-Farbtest-Tool für Designer und Entwickler zur Vorschau von CSS-Farbcodes, zum Testen von Farbpaletten und Prüfen von Dunkelmodus-Tönen.',
    hi: 'डिजाइनरों और डेवलपर्स के लिए सटीक CSS हेक्स कोड का प्रीव्यू करने, कलर पैलेट का परीक्षण करने और डार्क मोड टोन की जांच करने के लिए एक फुलस्क्रीन हेक्स स्क्रीन टूल।',
    ja: 'デザイナーやWeb開発者がCSSカラーコードを全画面で即座に検証し、カラーパレット比較やダークモード表示をテストできる全画面HEX画面ツール。',
  },
  'white-screen': { hi: 'सफाई जांच, नरम रोशनी, डिस्प्ले निरीक्षण और फोटोग्राफी फिल के लिए एक शुद्ध सफेद फुलस्क्रीन टूल।' },
  'black-screen': { hi: 'OLED जांच, डेड पिक्सल खोज, चकाचौंध कम करने और अंधेरे कमरे में उपयोग के लिए एक वास्तविक काली फुलस्क्रीन सतह।' },
  'green-screen': { hi: 'क्रोमा की प्रीव्यू, पैनल जांच और रंग संदर्भ के लिए एक जीवंत हरा फुलस्क्रीन पेज।' },
  'blue-screen': { hi: 'डिस्प्ले रंग जांच, एम्बिएंट टोन और वीडियो सेटअप के लिए एक संतृप्त नीला फुलस्क्रीन क्षेत्र।' },
  'radar-screen': {
    es: 'Un simulador de radar online gratis con animación de barrido en tiempo real, sonido de ping de sónar, seguimiento de objetivos y pantalla táctica personalizable. Efecto radar a pantalla completa para escritorio, portátil, monitor y TV — sin descarga.',
    pt: 'Um simulador de radar online grátis com animação de varredura em tempo real, som de ping de sonar, rastreamento de alvos e display tático personalizável. Efeito radar em tela cheia para desktop, notebook, monitor e TV — sem download.',
    fr: 'Un simulateur radar en ligne gratuit avec animation de balayage en temps réel, son ping sonar, suivi de cibles et affichage tactique personnalisable. Effet radar plein écran pour PC, portable, moniteur et TV — sans téléchargement.',
    de: 'Ein kostenloser Online-Radar-Simulator mit Echtzeit-Sweep-Animation, Sonar-Ping-Audio, Zielverfolgung und anpassbarer taktischer Anzeige. Vollbild-Radar-Effekt für Desktop, Laptop, Monitor und TV — kein Download nötig.',
    hi: 'रीयल-टाइम स्वीप एनिमेशन, सोनार पिंग ऑडियो, टार्गेट ट्रैकिंग और कस्टमाइज़ेबल टैक्टिकल डिस्प्ले के साथ मुफ्त ऑनलाइन रडार स्क्रीन सिम्युलेटर। डेस्कटॉप, लैपटॉप, मॉनिटर और टीवी के लिए फुलस्क्रीन रडार इफ़ेक्ट — बिना डाउनलोड के।',
    ja: 'リアルタイムスイープアニメーション、ソナーピング音声、ターゲット追跡、カスタマイズ可能な戦術ディスプレイを備えた無料のオンラインレーダー画面シミュレーター。デスクトップ、ノートPC、モニター、TV向け全画面レーダー効果。ダウンロード不要。',
  },
  'fireplace-screen': {
    es: 'Un protector de pantalla cálido inspirado en una chimenea para ambientación, calor de fondo y configuraciones de escritorio acogedoras.',
    pt: 'Um protetor de tela quente inspirado em lareiras para ambiente, calor de fundo e setups de mesa aconchegantes.',
    fr: 'Un économiseur d\'écran chaleureux inspiré d\'une cheminée pour l\'ambiance, la chaleur de fond et les installations de bureau douillettes.',
    de: 'Ein warmer Kaminfeuer-Bildschirmschoner für Ambiente, Hintergrundwärme und gemütliche Schreibtische.',
    hi: 'एम्बिएंस, बैकग्राउंड गर्मी और आरामदायक डेस्क सेटअप के लिए एक गर्म फायरप्लेस से प्रेरित स्क्रीन सेवर।',
    ja: '雰囲気、背景の温かさ、心地よいデスクセットアップのための、温かみのある暖炉風スクリーンセーバー。',
  },
  'snow-screen': {
    es: 'Un salvapantallas de nieve interactivo y estético con viento personalizable, velocidad de caída, tamaño de copos y opciones de color o imágenes.',
    pt: 'Um protetor de tela de neve interativo e estético com vento, velocidade, tamanho dos flocos personalizáveis, e suporte a cores ou imagens.',
    fr: 'Un économiseur d\'écran de neige interactif et esthétique avec vent, vitesse et taille de flocons personnalisables, ainsi que des modes couleur ou image.',
    de: 'Ein interaktiver und ästhetischer Schneefall-Bildschirmschoner mit anpassbarem Wind, Geschwindigkeit, Flakengröße, Farb- oder Grafikmodus.',
    hi: 'एक इंटरैक्टिव और सौंदर्य स्नो स्क्रीन सेवर जिसमें अनुकूलन योग्य हवा, गति, बर्फ के आकार और चुनिंदा रंग या छवियों का समर्थन है।',
    ja: '風向き、速度、雪片の大きさ、カラーまたは画像モードを自由にカスタマイズできる、インタラクティブで美しい雪 of スクリーンセーバー。',
  },
  'matrix-screen': {
    es: 'Un salvapantallas interactivo con efecto de lluvia de código de Matrix, velocidad ajustable, colores de brillo cyberpunk y texto/nombre personalizado.',
    pt: 'Um protetor de tela do Matrix interativo com efeito de chuva de código, velocidade ajustável, cores cyberpunk e texto/nome personalizado.',
    fr: 'Un économiseur d\'écran Matrix interactif avec effet de pluie de code, vitesse ajustable, couleurs cyberpunk et texte/nom personnalisé.',
    de: 'Ein interaktiver Matrix-Coderegen-Bildschirmschoner mit anpassbarer Geschwindigkeit, leuchtenden Cyberpunk-Farben und eigenem Text oder Namen.',
    hi: 'एक इंटरैक्टिव मैट्रिक्स कोड रेन स्क्रीन सेवर जिसमें अनुकूलन योग्य गति, नियॉन ग्लो रंग और कस्टम टेक्स्ट या नाम का समर्थन है।',
    ja: '速度、サイバーパンクのグローカラー、カスタムテキストや名前をカスタマイズできる、インタラクティブなマトリックス・コードレイン・スクリーンセーバー。',
  },
  'aquarium-screen': {
    es: 'Un acuario virtual online en pantalla completa con peces tropicales animados, burbujas y ambiente submarino relajante para escritorio, portátil, monitor y TV.',
    pt: 'Um aquário virtual online em tela cheia com peixes tropicais animados, bolhas e ambiente subaquático relaxante para desktop, notebook, monitor e TV.',
    fr: 'Un aquarium virtuel en ligne plein écran avec des poissons tropicaux animés, des bulles et une ambiance sous-marine relaxante pour PC, portable, moniteur et TV.',
    de: 'Ein virtuelles Aquarium online im Vollbildmodus mit animierten tropischen Fischen, Blasen und entspannender Unterwasser-Atmosphäre für Desktop, Laptop, Monitor und TV.',
    hi: 'एनिमेटेड उष्णकटिबंधीय मछली, बुलबुले और आरामदेह पानी के नीचे के माहौल के साथ डेस्कटॉप, लैपटॉप, मॉनिटर और टीवी के लिए एक फुलस्क्रीन ऑनलाइन वर्चुअल एक्वेरियम।',
    ja: 'デスクトップ、ノートPC、モニター、TV向けの、アニメーションの熱帯魚、泡、リラックスできる水中の雰囲気を備えた全画面オンラインバーチャルアクアリウム。',
  },
  'rain-screen': {
    es: 'Una pantalla de lluvia online con gotas realistas, lluvia sobre vidrio, truenos ambientales, fondos personalizables y 8 colores para escritorio, portátil, monitor y TV — sin descarga.',
    pt: 'Uma tela de chuva online com gotas realistas, chuva no vidro, trovões ambiente, fundos personalizáveis e 8 cores para desktop, notebook, monitor e TV — sem download.',
    fr: 'Un écran de pluie en ligne avec des gouttes réalistes, pluie sur verre, tonnerre d\'ambiance, arrière-plans personnalisables et 8 couleurs pour PC, portable, moniteur et TV — sans téléchargement.',
    de: 'Ein Online-Regenbildschirm mit realistischen Tropfen, Regen auf Glas, Umgebungsdonner, anpassbaren Hintergründen und 8 Farben für Desktop, Laptop, Monitor und TV — kein Download nötig.',
    hi: 'यथार्थवादी बूंदों, कांच पर बारिश, एम्बिएंट गरज, अनुकूलन योग्य पृष्ठभूमि और 8 रंगों के साथ डेस्कटॉप, लैपटॉप, मॉनिटर और टीवी के लिए ऑनलाइन रेन स्क्रीन — बिना डाउनलोड के।',
    ja: 'リアルな雨粒、窓ガラスの雨、環境雷、カスタマイズ可能な背景、8色のカラープリセットを備えたデスクトップ、ノートPC、モニター、TV向けのオンライン雨画面。ダウンロード不要。',
  },
  'clock-screen': {
    es: 'Un reloj flip online a pantalla completa con animación flip retro realista, 6 temas estéticos (Warm Retro, Pure OLED, Soft White, Cyber Grid, Rose Gold, Space Dusk), cronógrafo Pomodoro, sonido de clic ambiental y control de brillo — sin descarga.',
    pt: 'Um relógio flip online em tela cheia com animação flip retrô realista, 6 temas estéticos (Warm Retro, Pure OLED, Soft White, Cyber Grid, Rose Gold, Space Dusk), timer Pomodoro, som de clique ambiente e controle de brilho — sem download.',
    fr: 'Une horloge à volets en ligne plein écran avec animation flip rétro réaliste, 6 thèmes esthétiques (Warm Retro, Pure OLED, Soft White, Cyber Grid, Rose Gold, Space Dusk), minuteur Pomodoro, son de clic d\'ambiance et contrôle de la luminosité — sans téléchargement.',
    de: 'Eine Online-Klappuhr im Vollbildmodus mit realistischer Retro-Flip-Animation, 6 ästhetischen Designs (Warm Retro, Pure OLED, Soft White, Cyber Grid, Rose Gold, Space Dusk), Pomodoro-Timer, Umgebungs-Klickgeräusch und Helligkeitsregelung — kein Download nötig.',
    hi: 'यथार्थवादी रेट्रो फ्लिप एनिमेशन, 6 एस्थेटिक थीम (Warm Retro, Pure OLED, Soft White, Cyber Grid, Rose Gold, Space Dusk), पोमोडोरो टाइमर, एम्बिएंट क्लिक साउंड और ब्राइटनेस कंट्रोल के साथ फुलस्क्रीन ऑनलाइन फ्लिप घड़ी — बिना डाउनलोड के।',
    ja: 'リアルなレトロフリップアニメーション、6つの美的テーマ（Warm Retro、Pure OLED、Soft White、Cyber Grid、Rose Gold、Space Dusk）、ポモドーロタイマー、環境クリック音、明るさ調節を備えた全画面オンラインフリップ時計。ダウンロード不要。',
  },
  'ambient-screen': {
    es: 'Una pantalla ambiental interactiva con gradientes animados, partículas cósmicas, mezclador de sonido de 4 canales, reloj, temporizador Pomodoro y respiración guiada — para escritorio, portátil, monitor, TV y móvil.',
    pt: 'Uma tela ambiente interativa com gradientes animados, partículas cósmicas, mixer de som de 4 canais, relógio, timer Pomodoro e respiração guiada — para desktop, notebook, monitor, TV e celular.',
    fr: 'Un écran ambiant interactif avec des dégradés animés, des particules cosmiques, un mixeur sonore 4 canaux, une horloge, un minuteur Pomodoro et une respiration guidée — pour PC, portable, moniteur, TV et mobile.',
    de: 'Ein interaktiver Ambiente-Bildschirm mit animierten Farbverläufen, kosmischen Partikeln, 4-Kanal-Soundmixer, Uhr, Pomodoro-Timer und geführter Atmung — für Desktop, Laptop, Monitor, TV und Handy.',
    hi: 'एनिमेटेड ग्रेडिएंट, कॉस्मिक पार्टिकल्स, 4-चैनल साउंडस्केप मिक्सर, घड़ी, पोमोडोरो टाइमर और गाइडेड ब्रीदिंग के साथ एक इंटरैक्टिव एम्बिएंट स्क्रीन — डेस्कटॉप, लैपटॉप, मॉनिटर, टीवी और मोबाइल के लिए।',
    ja: 'アニメーショングラデーション、宇宙のパーティクル、4チャンネルサウンドスケープミキサー、時計、ポモドーロタイマー、ガイド付き呼吸法を備えたインタラクティブなアンビエント画面。デスクトップ、ノートPC、モニター、TV、モバイル対応。',
  },
  'galaxy-screen': {
    es: 'Una pantalla de galaxia espiral interactiva online con simulación realista de galaxia, 5 temas de color (Andromeda Blue, Cosmic Amber, Orion Purple, Ghostly Teal, OLED Monochrome), control de densidad estelar, velocidad de rotación, inclinación 3D, efecto de lente gravitacional de agujero negro y audio espacial ambiental — sin descarga.',
    pt: 'Uma tela de galáxia espiral interativa online com simulação realista de galáxia, 5 temas de cor (Andromeda Blue, Cosmic Amber, Orion Purple, Ghostly Teal, OLED Monochrome), controle de densidade estelar, velocidade de rotação, inclinação 3D, efeito de lente gravitacional de buraco negro e áudio espacial ambiente — sem download.',
    fr: 'Un écran de galaxie spirale interactif en ligne avec simulation réaliste de galaxie, 5 thèmes de couleur (Andromeda Blue, Cosmic Amber, Orion Purple, Ghostly Teal, OLED Monochrome), contrôle de la densité stellaire, vitesse de rotation, inclinaison 3D, effet de lentille gravitationnelle de trou noir et audio spatial d\'ambiance — sans téléchargement.',
    de: 'Ein interaktiver Online-Spiralgalaxie-Bildschirm mit realistischer Galaxiensimulation, 5 Farbthemen (Andromeda Blue, Cosmic Amber, Orion Purple, Ghostly Teal, OLED Monochrome), Sterndichteregelung, Rotationsgeschwindigkeit, 3D-Neigung, Gravitationslinsen-Schwarzes-Loch-Effekt und Ambient-Weltraum-Audio — kein Download nötig.',
    hi: 'यथार्थवादी आकाशगंगा सिमुलेशन, 5 रंग थीम (Andromeda Blue, Cosmic Amber, Orion Purple, Ghostly Teal, OLED Monochrome), तारा घनत्व नियंत्रण, घूर्णन गति, 3D झुकाव, गुरुत्वाकर्षण लेंसिंग ब्लैक होल प्रभाव और एम्बिएंट स्पेस ऑडियो के साथ एक इंटरैक्टिव ऑनलाइन सर्पिल गैलेक्सी स्क्रीन — बिना डाउनलोड के।',
    ja: 'リアルな銀河シミュレーション、5つのカラーテーマ（Andromeda Blue、Cosmic Amber、Orion Purple、Ghostly Teal、OLED Monochrome）、星密度コントロール、回転速度、3D傾き、重力レンズ効果のブラックホール、環境宇宙音声を備えたインタラクティブなオンライン渦巻銀河画面。ダウンロード不要。',
  },
  'broken-screen': {
    es: 'Una página de broma inofensiva de pantalla rota con un convincente efecto de pantalla agrietada a pantalla completa para bromas y diversión.',
    pt: 'Uma página de pegadinha inofensiva de tela quebrada com um efeito convincente de tela rachada em tela cheia para brincadeiras e diversão.',
    fr: 'Une page de blague inoffensive d\'écran cassé avec un effet d\'écran fissuré en plein écran convaincant pour des plaisanteries et du divertissement.',
    de: 'Eine harmlose Scherzseite mit kaputtem Bildschirm und einem überzeugenden Vollbild-Cracked-Display-Effekt für Streiche und Spaß.',
    hi: 'एक हानिरहित टूटी स्क्रीन प्रैंक पेज जिसमें मजाक और मनोरंजन के लिए एक विश्वसनीय फुलस्क्रीन क्रैक-डिस्प्ले इफ़ेक्ट है।',
    ja: '壊れた画面のいたずらページ。ジョークや楽しみのために、説得力のある全画面ひび割れディスプレイエフェクトを備えた無害なページ。',
  },
  'blue-screen-prank': {
    es: 'Una simulación realista de la pantalla azul de Windows (BSOD) con progreso animado, códigos de fallo y comportamiento de pantalla completa para bromas y contenido de vídeo.',
    pt: 'Uma simulação realista da tela azul do Windows (BSOD) com progresso animado, códigos de erro e comportamento em tela cheia para pegadinhas e conteúdo de vídeo.',
    fr: 'Une simulation réaliste de l\'écran bleu Windows (BSOD) avec progression animée, codes d\'erreur et comportement plein écran pour des farces et du contenu vidéo.',
    de: 'Eine realistische Windows-BSOD-Simulation mit animiertem Fortschritt, Stoppcodes und Vollbild-Crash-Verhalten für Streiche und Videoinhalte.',
    hi: 'एनिमेटेड प्रोग्रेस, स्टॉप कोड और फुलस्क्रीन क्रैश व्यवहार के साथ एक यथार्थवादी विंडोज़ BSOD सिमुलेशन प्रैंक और वीडियो कंटेंट के लिए।',
    ja: 'アニメーション進行、ストップコード、全画面クラッシュ動作を備えたリアルなWindows BSODシミュレーション。いたずらや動画コンテンツに最適。',
  },
  'windows-xp-crash': {
    es: 'Un simulador realista de crash de Windows XP con escritorio completo, diálogos de error de explorer.exe y transición BSOD clásica para bromas y nostalgia retro.',
    pt: 'Um simulador realista de crash do Windows XP com área de trabalho completa, diálogos de erro do explorer.exe e transição BSOD clássica para pegadinhas e nostalgia retrô.',
    fr: 'Un simulateur réaliste de plantage Windows XP avec bureau complet, dialogues d\'erreur explorer.exe et transition BSOD classique pour farces et nostalgie rétro.',
    de: 'Ein realistischer Windows XP-Absturzsimulator mit vollständigem Desktop, Explorer.exe-Fehlerdialogen und klassischem BSOD-Übergang für Streiche und Retro-Nostalgie.',
    hi: 'पूर्ण डेस्कटॉप, explorer.exe त्रुटि संवाद और क्लासिक BSOD संक्रमण के साथ एक यथार्थवादी विंडोज एक्सपी क्रैश सिम्युलेटर प्रैंक और रेट्रो नॉस्टेल्जिया के लिए।',
    ja: '完全なデスクトップ、explorer.exeエラーダイアログ、クラシックなBSOD移行を備えたリアルなWindows XPクラッシュシミュレーター。いたずらやレトロノスタルジアに最適。',
  },
  'white-noise-screen': {
    es: 'Un simulador de ruido blanco (estática de TV) online gratis con ruido analógico auténtico, líneas CRT, efectos VHS y audio de estática. Efecto retro de TV a pantalla completa para escritorio, portátil, monitor y TV — sin descarga.',
    pt: 'Um simulador de ruído branco (estática de TV) online grátis com ruído analógico autêntico, linhas CRT, efeitos VHS e áudio de estática. Efeito retrô de TV em tela cheia para desktop, notebook, monitor e TV — sem download.',
    fr: 'Un simulateur de bruit blanc (neige TV) en ligne gratuit avec bruit analogique authentique, lignes CRT, effets VHS et audio statique. Effet TV rétro plein écran pour PC, portable, moniteur et TV — sans téléchargement.',
    de: 'Ein kostenloser Online-Weißes-Rauschen-Simulator (TV-Rauschen) mit authentischem Analograuschen, CRT-Zeilen, VHS-Effekten und Audiostatik. Vollbild-Retro-TV-Effekt für Desktop, Laptop, Monitor und TV — kein Download nötig.',
    hi: 'प्रामाणिक एनालॉग नॉइज़, CRT स्कैनलाइन, VHS इफ़ेक्ट और ऑडियो स्टैटिक के साथ मुफ्त ऑनलाइन व्हाइट नॉइज़ स्क्रीन (टीवी स्टैटिक) सिम्युलेटर। डेस्कटॉप, लैपटॉप, मॉनिटर और टीवी के लिए फुलस्क्रीन रेट्रो टीवी इफ़ेक्ट — बिना डाउनलोड के।',
    ja: '本物そっくりのアナログノイズ、CRTスキャンライン、VHSエフェクト、オーディオノイズを備えた無料のオンラインホワイトノイズ画面（テレビノイズ）シミュレーター。デスクトップ、ノートPC、モニター、TV向け全画面レトロTV効果。ダウンロード不要。',
  },
  'fake-virus-screen': {
    es: 'Un simulador de pantalla de virus falso inofensivo con 4 estilos de alerta realistas: advertencia de malware de Chrome, Microsoft Defender SmartScreen, panel de antivirus de Windows Security y ransomware WannaCry. Herramienta de broma online gratis para efectos teatrales en el navegador, producción de videos y demostraciones educativas.',
    pt: 'Um simulador de tela de vírus falsa inofensivo com 4 estilos de alerta realistas — aviso de malware do Chrome, Microsoft Defender SmartScreen, painel antivírus do Windows Security e ransomware WannaCry. Ferramenta de pegadinha online grátis para efeitos teatrais no navegador, produção de vídeos e demonstrações educativas.',
    fr: 'Un simulateur d\'écran de virus faux inoffensif avec 4 styles d\'alerte réalistes — avertissement de malware Chrome, Microsoft Defender SmartScreen, tableau de bord antivirus Windows Security et ransomware WannaCry. Outil de farce en ligne gratuit pour effets théâtraux dans le navigateur, production vidéo et démonstrations éducatives.',
    de: 'Ein harmloser gefälschter Virusbildschirm-Simulator mit 4 realistischen Alarmstilen — Chrome-Malware-Warnung, Microsoft Defender SmartScreen, Windows Security Antivirus-Dashboard und WannaCry-Ransomware. Kostenloses Online-Streich-Tool für theatralische Browser-Effekte, Videoproduktion und Bildungsdemonstrationen.',
    hi: '4 यथार्थवादी अलर्ट शैलियों — क्रोम मैलवेयर चेतावनी, माइक्रोसॉफ्ट डिफ़ेंडर स्मार्टस्क्रीन, विंडोज सिक्योरिटी एंटीवायरस डैशबोर्ड और वानाक्राई रैनसमवेयर — के साथ एक हानिरहित फर्जी वायरस स्क्रीन सिम्युलेटर। ब्राउज़र थिएट्रिकल इफ़ेक्ट, वीडियो निर्माण और शैक्षिक प्रदर्शनों के लिए मुफ्त ऑनलाइन प्रैंक टूल।',
    ja: '4つのリアルなアラートスタイル — Chromeマルウェア警告、Microsoft Defender SmartScreen、Windowsセキュリティアンチウイルスダッシュボード、WannaCryランサムウェア — を備えた無害な偽ウイルス画面シミュレーター。ブラウザの劇的効果、動画制作、教育デモ用の無料オンラインいたずらツール。',
  },
  'windows-update': {
    es: 'Un simulador realista de pantalla de actualización de Windows falsa con 4 modos: puntos giratorios, barra de progreso, pantalla azul y recuperación. Herramienta de broma online gratis para demos escenificadas, videos educativos y efectos de pantalla.',
    pt: 'Um simulador realista de tela de atualização do Windows falsa com 4 modos: pontos giratórios, barra de progresso, tela azul e recuperação. Ferramenta de pegadinha online grátis para demonstrações encenadas, vídeos educativos e efeitos de tela.',
    fr: 'Un simulateur réaliste de fausse écran de mise à jour Windows avec 4 modes — points tournants, barre de progression, écran bleu et récupération. Outil de farce en ligne gratuit pour démos scénarisées, vidéos éducatives et effets d\'écran.',
    de: 'Ein realistischer gefälschter Windows-Update-Bildschirm-Simulator mit 4 Modi — drehende Punkte, Fortschrittsbalken, blauer Bildschirm und Wiederherstellung. Kostenloses Online-Streich-Tool für inszenierte Demos, Lehrvideos und Bildschirmeffekte.',
    hi: '4 मोड — स्पिनिंग डॉट्स, प्रोग्रेस बार, ब्लू स्क्रीन और रिकवरी — के साथ एक यथार्थवादी फर्जी विंडोज अपडेट स्क्रीन सिम्युलेटर। मंचित डेमो, शैक्षिक वीडियो और स्क्रीन इफ़ेक्ट के लिए मुफ्त ऑनलाइन प्रैंक टूल।',
    ja: '4つのモード — 回転ドット、進捗バー、青画面、回復 — を備えたリアルな偽Windowsアップデート画面シミュレーター。演出デモ、教育ビデオ、画面効果用の無料オンラインいたずらツール。',
  },
  'ubuntu-screen': {
    es: 'Un simulador realista de pantalla de actualización de Ubuntu falsa con animación de arranque auténtica, barra de progreso no lineal, ciclo de reinicio y estética de terminal Ubuntu con colores naranja y morado realistas. Herramienta online gratis para demos de Linux, producción de videos, entrenamiento educativo y bromas inofensivas.',
    pt: 'Um simulador realista de tela de atualização do Ubuntu falsa com animação de boot autêntica, progressão não linear, ciclo de reinicialização e estética de terminal Ubuntu com laranja e roxo realistas. Ferramenta online grátis para demonstrações Linux, produção de vídeo, treinamento educacional e pegadinhas inofensivas.',
    fr: 'Un simulateur réaliste de fausse écran de mise à jour Ubuntu avec animation de démarrage authentique, progression non linéaire, cycle de redémarrage et esthétique de terminal Ubuntu aux couleurs orange et violet réalistes. Outil en ligne gratuit pour démos Linux, production vidéo, formation éducative et farces inoffensives.',
    de: 'Ein realistischer gefälschter Ubuntu-Update-Bildschirm-Simulator mit authentischer Boot-Animation, nicht-linearer Fortschrittsanzeige, Neustartzyklus und Ubuntu-Terminal-Ästhetik in realistischen Orange-und-Lila-Farben. Kostenloses Online-Tool für Linux-Demos, Videoproduktion, Schulungen und harmlose Streiche.',
    hi: 'प्रामाणिक बूट एनिमेशन, नॉन-लीनियर प्रोग्रेस, रीबूट चक्र और यथार्थवादी नारंगी-और-बैंगनी रंगों में उबंटू टर्मिनल एस्थेटिक के साथ एक यथार्थवादी फर्जी उबंटू अपडेट स्क्रीन सिम्युलेटर। लिनक्स डेमो, वीडियो निर्माण, शैक्षिक प्रशिक्षण और हानिरहित प्रैंक के लिए मुफ्त ऑनलाइन टूल।',
    ja: '本格的なブートアニメーション、非線形進行、再起動サイクル、リアルなオレンジとパープルのUbuntuターミナル美学を備えたリアルな偽Ubuntuアップデート画面シミュレーター。Linuxデモ、動画制作、教育トレーニング、無害ないたずらに最適な無料オンラインツール。',
  },
};

export function t(locale: Locale, key: string, params?: Record<string, string>): string {
  const value = site[locale]?.[key] ?? site.en[key] ?? key;
  if (params) {
    return Object.entries(params).reduce((str, [k, v]) => str.replace(`{${k}}`, v), value);
  }
  return value;
}

export function toolName(locale: Locale, tool: { id: string; name: string }): string {
  return toolNames[tool.id]?.[locale] ?? tool.name;
}

export function toolSummary(locale: Locale, tool: { id: string; summary: string }): string {
  return toolSummaries[tool.id]?.[locale] ?? tool.summary;
}

export const localizedFaqs: Record<string, Partial<Record<Locale, { question: string; answer: string }[]>>> = {
  'white-screen': {
    en: [
      {
        question: 'What is a white screen? (What does a white screen mean?)',
        answer: 'A white screen is a pure white color field that covers your entire display. It acts as a neutral visual utility for monitor testing, checking for dead or stuck subpixels, providing soft illumination, or serving as a photography background.'
      },
      {
        question: 'How to get a white screen? (How do I get a white screen? / How do I open a white screen?)',
        answer: 'You can easily open a white screen on this website. Choose the White Screen tool and click the Fullscreen button or press the "F" shortcut key to fill your entire display with neutral white.'
      },
      {
        question: 'How do I open a full white screen?',
        answer: 'To open a full white screen without browser tabs or search bars, click the "Fullscreen" button on our white screen tool, or press "F" on your keyboard. This hides all distractions and lets the white color occupy the entire display area.'
      },
      {
        question: 'Can I use a white screen on a phone? (How to get white screen on phone?)',
        answer: 'Yes, our white screen tool is fully compatible with all smartphones and tablets. Open the page in your mobile browser, optionally adjust the brightness using the slider, and enter fullscreen mode to use it as a mobile light panel or screen checker.'
      },
      {
        question: 'What is a white screen used for?',
        answer: 'Common uses for a white screen include checking for screen dirt or dust, finding dead and stuck display pixels, acting as light for video calls or selfies, and casting soft, neutral fill light for product photography.'
      },
      {
        question: 'Is this white screen good for monitor testing?',
        answer: 'Yes, a clean white screen is one of the best tools to inspect a display for uniformity issues, backlight bleeding at the edges, and stuck or dead pixels. We suggest setting it to fullscreen and adjusting the brightness to inspect the panel clearly.'
      },
      {
        question: 'Can I use this as a bright white screen?',
        answer: 'Yes! The tool renders a solid #ffffff color, which is the maximum brightness output for any screen. You can raise your device\'s physical brightness and use our on-screen brightness slider to fine-tune the amount of light.'
      },
      {
        question: 'How to photo a white background?',
        answer: 'Place your subject in front of a monitor or television running our fullscreen white screen. It will act as a bright, even white background and light source. Adjust camera exposure or use additional ambient lighting to avoid harsh silhouettes.'
      }
    ],
    es: [
      {
        question: '¿Qué es una pantalla blanca? (¿Qué significa una pantalla blanca?)',
        answer: 'Una pantalla blanca es un campo de color blanco puro que cubre toda la pantalla. Funciona como una herramienta visual neutra para pruebas de monitores, comprobación de píxeles muertos o atascados, iluminación suave o como fondo fotográfico.'
      },
      {
        question: '¿Cómo obtener una pantalla blanca? (¿Cómo pongo la pantalla en blanco?)',
        answer: 'Puedes abrir fácilmente una pantalla blanca en esta web. Selecciona la herramienta Pantalla Blanca y haz clic en el botón de Pantalla Completa o presiona la tecla de acceso rápido "F" para llenar tu pantalla.'
      },
      {
        question: '¿Cómo abro una pantalla blanca completa?',
        answer: 'Para abrir una pantalla blanca completa sin pestañas del navegador ni barras de búsqueda, haz clic en el botón de "Pantalla Completa" en nuestra herramienta de pantalla blanca, o presiona "F" en tu teclado.'
      },
      {
        question: '¿Puedo usar la pantalla blanca en un teléfono? (¿Cómo tener pantalla blanca en el celular?)',
        answer: 'Sí, nuestra herramienta es compatible con todos los smartphones y tablets. Abre la página en el navegador de tu móvil, ajusta el brillo si es necesario y entra en modo de pantalla completa para usarla como panel de luz o comprobador.'
      },
      {
        question: '¿Para qué sirve una pantalla blanca?',
        answer: 'Los usos más comunes incluyen comprobar si hay suciedad o polvo en la pantalla, detectar píxeles muertos y atascados, iluminar videollamadas o selfies, y servir de luz suave de relleno para fotografía de producto.'
      },
      {
        question: '¿Es buena esta pantalla blanca para probar mi monitor?',
        answer: 'Sí, una pantalla blanca limpia es de las mejores utilidades para inspeccionar uniformidad del panel, fugas de luz en los bordes y píxeles atascados. Recomendamos ponerla a pantalla completa y ajustar el brillo para revisarlo con claridad.'
      },
      {
        question: '¿Puedo usar esto como una pantalla blanca brillante?',
        answer: 'Sí. La herramienta muestra el color sólido #ffffff (máxima salida de brillo). Sube el brillo físico de tu dispositivo y usa el deslizador integrado en la web para regular la luz a tu gusto.'
      },
      {
        question: '¿Cómo fotografiar con un fondo blanco?',
        answer: 'Coloca el objeto delante de un monitor o televisión con nuestra pantalla blanca a pantalla completa. Servirá de fondo blanco brillante y homogéneo. Ajusta la exposición de la cámara para lograr la mejor iluminación.'
      }
    ],
    pt: [
      {
        question: 'O que é uma tela branca? (O que significa uma tela branca?)',
        answer: 'Uma tela branca é um campo de cor branca pura que cobre todo o seu monitor. Funciona como um utilitário visual neutro para testes de monitor, verificação de pixels mortos ou travados, iluminação suave ou fundo fotográfico.'
      },
      {
        question: 'Como conseguir uma tela branca? (Como faço para ter tela branca?)',
        answer: 'Você pode abrir facilmente uma tela branca neste site. Escolha a ferramenta de Tela Branca e clique no botão de Tela Cheia ou pressione a tecla de atalho "F" para preencher seu monitor com branco puro.'
      },
      {
        question: 'Como abrir uma tela branca completa?',
        answer: 'Para abrir uma tela branca completa sem abas de navegador ou barras de pesquisa, clique no botão "Tela Cheia" ou pressione "F" no seu teclado. Isso oculta distrações para que a cor branca preencha toda a tela.'
      },
      {
        question: 'Posso usar a tela branca no celular? (Como ter tela branca no celular?)',
        answer: 'Sim, nosso site é totalmente compatível com smartphones e tablets. Abra a página no navegador do celular, ajuste o brilho e entre em tela cheia para usar como painel de luz ou testador.'
      },
      {
        question: 'Para que serve uma tela branca?',
        answer: 'Os usos mais comuns incluem verificar sujeira ou poeira na tela, encontrar pixels mortos e travados, iluminar chamadas de vídeo ou selfies, e fornecer luz de preenchimento neutra para fotografia.'
      },
      {
        question: 'Esta tela branca é boa para testar monitor?',
        answer: 'Sim, uma tela branca limpa é excelente para inspecionar problemas de uniformidade de painel, vazamento de luz nas bordas e pixels defeituosos. Recomendamos usar o modo tela cheia e ajustar o brilho para inspecionar melhor.'
      },
      {
        question: 'Posso usar isso como uma tela branca brilhante?',
        answer: 'Sim! A ferramenta renderiza a cor sólida #ffffff, que representa o brilho máximo de qualquer tela. Você pode aumentar o brilho físico do aparelho e usar o nosso controle de brilho interno para ajustar.'
      },
      {
        question: 'Como fotografar com fundo branco?',
        answer: 'Posicione seu objeto à frente de um monitor ou TV exibindo nossa tela branca em tela cheia. Ela servirá como fundo brilhante e uniforme. Ajuste a exposição da câmera para evitar silhuetas indesejadas.'
      }
    ],
    fr: [
      {
        question: 'Qu\'est-ce qu\'un écran blanc ? (Que signifie un écran blanc ?)',
        answer: 'Un écran blanc est un champ de couleur blanc pur qui recouvre tout votre affichage. Il sert d\'utilitaire neutre pour tester les moniteurs, détecter les pixels morts ou bloqués, fournir un éclairage doux ou de fond pour la photo.'
      },
      {
        question: 'Comment avoir un écran blanc ? (Comment afficher un écran blanc ?)',
        answer: 'Vous pouvez facilement ouvrir un écran blanc sur ce site. Sélectionnez l\'outil Écran Blanc et cliquez sur le bouton Plein Écran ou appuyez sur la touche "F" pour remplir tout votre affichage de blanc pur.'
      },
      {
        question: 'Comment ouvrir un écran blanc complet ?',
        answer: 'Pour ouvrir un écran blanc complet sans onglets ou barres de recherche, cliquez sur le bouton "Plein Écran" ou appuyez sur "F" sur votre clavier. Cela masquera les distractions pour afficher uniquement du blanc.'
      },
      {
        question: 'Puis-je utiliser un écran blanc sur un téléphone ? (Comment avoir un écran blanc sur mobile ?)',
        answer: 'Oui, notre outil est compatible avec tous les smartphones et toutes les tablettes. Ouvrez la page dans votre navigateur mobile, ajustez la luminosité si besoin, et passez en plein écran pour l\'utiliser comme panneau lumineux.'
      },
      {
        question: 'À quoi sert un écran blanc ?',
        answer: 'Il est couramment utilisé pour détecter la poussière et les saletés sur l\'écran, repérer les pixels morts ou bloqués, éclairer vos appels vidéo ou selfies, ou servir de lumière douce de remplissage pour la photo de produits.'
      },
      {
        question: 'Cet écran blanc est-il adapté pour tester un moniteur ?',
        answer: 'Oui, un écran blanc propre est l\'un des meilleurs moyens d\'inspecter l\'uniformité de la dalle, le "backlight bleeding" sur les bords, et les défauts de pixels. Mettez en plein écran et réglez la luminosité pour inspecter l\'écran.'
      },
      {
        question: 'Puis-je l\'utiliser comme un écran blanc très brillant ?',
        answer: 'Oui ! L\'outil affiche la couleur unie #ffffff, correspondant à la luminosité maximale de votre écran. Augmentez la luminosité physique de votre appareil et utilisez notre curseur pour ajuster le rendu.'
      },
      {
        question: 'Comment photographier sur fond blanc ?',
        answer: 'Placez votre sujet devant un écran ou un téléviseur affichant notre écran blanc en plein écran. Il agira comme un fond blanc lumineux et uniforme. Ajustez l\'exposition de l\'appareil photo.'
      }
    ],
    de: [
      {
        question: 'Was ist ein weißer Bildschirm? (Was bedeutet ein weißer Bildschirm?)',
        answer: 'Ein weißer Bildschirm ist ein rein weißes Farbfeld, das das gesamte Display abdeckt. Er dient als neutrales Werkzeug für Monitortests, das Finden toter Pixel, sanfte Beleuchtung oder als Fotohintergrund.'
      },
      {
        question: 'Wie bekomme ich einen weißen Bildschirm? (Wie öffne ich einen weißen Bildschirm?)',
        answer: 'Sie können einen weißen Bildschirm ganz einfach auf dieser Website öffnen. Wählen Sie das Werkzeug "Weißer Bildschirm" und klicken Sie auf Vollbild oder drücken Sie die Taste "F", um das gesamte Display weiß auszufüllen.'
      },
      {
        question: 'Wie öffne ich einen kompletten weißer Bildschirm?',
        answer: 'Um einen vollständigen weißen Bildschirm ohne Browsertabs oder Suchleisten zu öffnen, klicken Sie auf den Button "Vollbild" oder drücken Sie "F" auf Ihrer Tastatur. Dadurch wird jegliche Ablenkung ausgeblendet.'
      },
      {
        question: 'Kann ich einen weißen Bildschirm auf dem Handy nutzen?',
        answer: 'Ja, unser Tool ist vollständig mit Smartphones und Tablets kompatibel. Öffnen Sie die Seite im mobilen Browser, passen Sie die Helligkeit an und aktivieren Sie den Vollbildmodus für ein helles Leuchtpanel.'
      },
      {
        question: 'Wofür wird ein weißer Bildschirm verwendet?',
        answer: 'Häufige Anwendungsfälle sind das Überprüfen von Displays auf Staub oder Schmutz, das Aufspüren toter und hängender Pixel, die Beleuchtung bei Videoanrufen oder Selfies sowie als weiches Studiolicht für Produktfotos.'
      },
      {
        question: 'Ist dieser weiße Bildschirm gut für Monitortests geeignet?',
        answer: 'Ja, ein sauberer weißer Bildschirm eignet sich hervorragend zur Überprüfung der Ausleuchtung, von Lichthöfen (Backlight Bleeding) und Pixelfehlern. Wir empfehlen, den Vollbildmodus zu nutzen und die Helligkeit anzupassen.'
      },
      {
        question: 'Kann ich das als besonders hellen weißen Bildschirm nutzen?',
        answer: 'Ja! Das Tool gibt die reine Farbe #ffffff aus, was der maximalen Helligkeit jedes Bildschirms entspricht. Maximieren Sie die Helligkeit Ihres Geräts und nutzen Sie unseren Helligkeitsregler zur Feinabstimmung.'
      },
      {
        question: 'Wie fotografiere ich einen weißen Hintergrund?',
        answer: 'Platzieren Sie Ihr Motiv vor einem Monitor oder TV, auf dem unser weißer Bildschirm im Vollbildmodus läuft. Er fungiert als gleichmäßiger weißer Hintergrund. Passen Sie die Belichtung an, um Silhouetten zu vermeiden.'
      }
    ],
    hi: [
      {
        question: 'व्हाइट स्क्रीन क्या है? (सफेद स्क्रीन का क्या मतलब है?)',
        answer: 'सफेद स्क्रीन एक शुद्ध सफेद रंग का क्षेत्र है जो आपके पूरे डिस्प्ले को कवर करता है। यह मॉनिटर परीक्षण, खराब या फंसे हुए पिक्सल की जांच करने, नरम रोशनी प्रदान करने, या फोटोग्राफी पृष्ठभूमि के रूप में उपयोग किया जाता है।'
      },
      {
        question: 'सफेद स्क्रीन कैसे प्राप्त करें? (सफेद स्क्रीन कैसे खोलें?)',
        answer: 'आप इस वेबसाइट पर आसानी से सफेद स्क्रीन खोल सकते हैं। व्हाइट स्क्रीन टूल चुनें और अपने पूरे डिस्प्ले को सफेद रंग से भरने के लिए फुलस्क्रीन बटन पर क्लिक करें या "F" शॉर्टकट बटन दबाएं।'
      },
      {
        question: 'मैं पूरी सफेद स्क्रीन कैसे खोलूं?',
        answer: 'बिना ब्राउज़र टैब या सर्च बार के पूरी सफेद स्क्रीन खोलने के लिए, हमारे व्हाइट स्क्रीन टूल पर "फुलस्क्रीन" बटन पर क्लिक करें, या कीबोर्ड पर "F" दबाएं। इससे अन्य सभी चीजें छिप जाती हैं।'
      },
      {
        question: 'क्या मैं फोन पर सफेद स्क्रीन का उपयोग कर सकता हूं?',
        answer: 'हाँ, हमारा टूल सभी स्मार्टफोन और टैबलेट के साथ पूरी तरह से काम करता है। मोबाइल ब्राउज़र में पेज खोलें, आवश्यकतानुसार ब्राइटनेस बढ़ाएं और फुलस्क्रीन मोड में जाकर इसका उपयोग लाइट पैनल के रूप में करें।'
      },
      {
        question: 'सफेद स्क्रीन का उपयोग किस लिए किया जाता है?',
        answer: 'सफेद स्क्रीन का उपयोग धूल की जांच करने, खराब पिक्सल खोजने, वीडियो कॉल या सेल्फी के लिए चेहरे पर रोशनी डालने, और छोटी वस्तुओं की फोटोग्राफी के लिए किया जाता है।'
      },
      {
        question: 'क्या यह सफेद स्क्रीन मॉनिटर परीक्षण के लिए अच्छी है?',
        answer: 'हाँ, एक साफ सफेद स्क्रीन डिस्प्ले की कलर यूनिफॉर्मिटी, किनारों पर बैकलाइट लीकेज (ब्लीडिंग) और खराब पिक्सल की जांच करने का उत्कृष्ट तरीका है। सर्वोत्तम जांच के लिए फुलस्क्रीन मोड चालू करें।'
      },
      {
        question: 'क्या मैं इसे एक चमकदार सफेद स्क्रीन के रूप में उपयोग कर सकता हूं?',
        answer: 'हाँ! यह टूल सॉलिड #ffffff रंग प्रदर्शित करता है जो स्क्रीन की अधिकतम चमक आउटपुट है। अपने डिवाइस की ब्राइटनेस बढ़ाएं और एडजस्ट करने के लिए हमारे ब्राइटनेस स्लाइडर का उपयोग करें।'
      },
      {
        question: 'सफेद बैकग्राउंड की फोटो कैसे लें?',
        answer: 'अपनी वस्तु को मॉनिटर या टीवी के सामने रखें जिस पर हमारा सफेद स्क्रीन टूल फुलस्क्रीन में चल रहा हो। यह एक चमकदार और समान सफेद बैकग्राउंड के रूप में कार्य करेगा। सही एक्सपोजर सेटिंग्स का प्रयोग करें।'
      }
    ],
    ja: [
      {
        question: '白い画面（ホワイトスクリーン）とは何ですか？',
        answer: '白い画面とは、画面全体を純白のカラーフィールドで覆う機能です。モニターの検査、ドット抜けやスタックピクセルの確認、簡易的な照明、撮影用の背景など、多目的に利用できるツールです。'
      },
      {
        question: '白い画面を表示させるには？（どうやって白い画面を出しますか？）',
        answer: '当サイトで簡単に白い画面を開くことができます。「ホワイトスクリーン」ツールを選択し、全画面ボタンをクリックするか、ショートカットキー「F」を押すと画面全体が真っ白になります。'
      },
      {
        question: '全画面で真っ白な画面を開くにはどうすればいいですか？',
        answer: 'ブラウザのタブや検索バーを非表示にして全画面表示にするには、白い画面ツールの「全画面」ボタンをクリックするか、キーボードの「F」キーを押します。これにより白い背景のみが表示されます。'
      },
      {
        question: 'スマホで白い画面を使えますか？',
        answer: 'はい、スマートフォンやタブレット of ブラウザでも完全に動作します。ページを開いて明るさを調整し、全画面ボタンをタップすることで、簡易的なライトパネルやディスプレイチェック器として使えます。'
      },
      {
        question: '白い画面はどのような用途に使われますか？',
        answer: 'ドット抜けのチェック、画面のホコリや汚れの検知、Webカメラでのビデオ通話やセルフィー時のレフ板（顔を明るく照らすライト）、小物撮影の背景照明などに使われます。'
      },
      {
        question: 'この白い画面はモニターのテストに適していますか？',
        answer: 'はい、モニターの色ムラや四隅のバックライト漏れ、ドット抜けを入念にテストするには、全画面の白い画面が最もシンプルで効果的です。全画面表示にし、明るさを調節して確認することをおすすめします。'
      },
      {
        question: '高輝度な明るい白い画面として使えますか？',
        answer: 'はい！最高輝度のソリッドカラー「#ffffff」を出力します。お使いのパソコンやスマートフォンの画面輝度を最大に設定し、当ツール上の明るさ調整スライダーと合わせて細かく光量をカスタムしてください。'
      },
      {
        question: '背景を白くして写真を撮るにはどうすればいいですか？',
        answer: '白い画面を全画面表示したモニターやテレビの前に被写体を置きます。これが均一で明るい白い背景およびソフトライトの役割を果たします。カメラの露出を調整することで、綺麗な白背景の写真が撮れます。'
      }
    ]
  },
  'black-screen': {
    en: [
      {
        question: 'How to show black screen?',
        answer: 'You can easily show a black screen by opening this page and clicking the "Fullscreen" button or pressing the "F" shortcut key on your keyboard. This expands a pure #000000 black field to cover your entire display.'
      },
      {
        question: 'What is a black screen?',
        answer: 'A black screen is a solid color display panel running pure black (#000000). It is used for monitor testing, checking backlight bleeding, saving battery on OLED screens, and creating a neutral dark frame.'
      },
      {
        question: 'What is black screen mode?',
        answer: 'Black screen mode is a browser-based blank state that fills the screen with flat black. It acts as a standby visual to reduce brightness, clean dust off physical panels, or dim second monitors without going into OS sleep mode.'
      },
      {
        question: 'How can I turn my screen black?',
        answer: 'To turn your screen black instantly, load this free online tool on any monitor, laptop, or handset browser and activate fullscreen. Escape at any time by pressing Esc or clicking target settings.'
      }
    ],
    es: [
      {
        question: '¿Cómo mostrar una pantalla negra?',
        answer: 'Puedes mostrar una pantalla negra fácilmente abriendo esta página y haciendo clic en el botón "Pantalla completa" o presionando la tecla de acceso rápido "F". Esto expande un campo negro puro (#000000) en todo tu monitor.'
      },
      {
        question: '¿Qué es una pantalla negra?',
        answer: 'Una pantalla negra es una visualización de color sólido en negro puro (#000000). Se utiliza para probar monitores, comprobar fugas de luz, ahorrar batería en pantallas OLED y crear un panel oscuro neutro.'
      },
      {
        question: '¿Qué es el modo de pantalla negra?',
        answer: 'El modo de pantalla negra es un estado en blanco basado en el navegador que llena la pantalla con negro plano. Sirve como estado de espera para reducir el brillo, limpiar el polvo de paneles o atenuar pantallas secundarias sin apagar la computadora.'
      },
      {
        question: '¿Cómo puedo poner mi pantalla en negro?',
        answer: 'Para poner tu pantalla en negro al instante, abre esta utilidad gratuita en cualquier monitor, portátil o móvil y activa la pantalla completa. Sal en cualquier momento presionando la tecla Esc.'
      }
    ],
    pt: [
      {
        question: 'Como mostrar uma tela preta?',
        answer: 'Você pode exibir uma tela preta facilmente abrindo esta página e clicando no botão "Tela Cheia" ou pressionando a tecla de atalho "F". Isso estende um campo preto puro (#000000) para cobrir todo o seu monitor.'
      },
      {
        question: 'O que é uma tela preta?',
        answer: 'Uma tela preta é um display de cor sólida que roda preto puro (#000000). É usada para testes de monitor, verificar vazamento de luz, economizar bateria em telas OLED e criar um quadro escuro neutro.'
      },
      {
        question: 'O que é o modo tela preta?',
        answer: 'O modo tela preta é um estado em branco baseado no navegador que preenche a tela com preto plano. Funciona como um descanso visual para reduzir o brilho, limpar poeira de painéis ou escurecer telas secundárias.'
      },
      {
        question: 'Como posso deixar minha tela preta?',
        answer: 'Para deixar sua tela preta instantaneamente, carregue esta ferramenta online gratuita em qualquer monitor, notebook ou celular e ative o modo tela cheia. Saia a qualquer momento com a tecla Esc.'
      }
    ],
    fr: [
      {
        question: 'Comment afficher un écran noir?',
        answer: 'Vous pouvez facilement afficher un écran noir en ouvrant cette page et en cliquant sur "Plein écran" ou en appuyant sur la touche de raccourci "F". Cela affiche un fond noir pur #000000 sur toute la surface de votre moniteur.'
      },
      {
        question: 'Qu\'est-ce qu\'un écran noir?',
        answer: 'Un écran noir est une surface de couleur unie affichant du noir pur #000000. Il sert à tester les moniteurs, vérifier les fuites de lumière, économiser la batterie sur écran OLED et servir de fond neutre sombre.'
      },
      {
        question: 'Qu\'est-ce que le mode écran noir?',
        answer: 'Le mode écran noir est un état vide basé sur le navigateur qui remplit l\'écran de noir mat. Il s\'utilise comme veille visuelle pour réduire la luminosité, nettoyer la poussière des dalles ou assombrir un écran secondaire.'
      },
      {
        question: 'Comment puis-je rendre mon écran noir?',
        answer: 'Pour rendre votre écran noir instantanément, chargez cet outil gratuit dans le navigateur de votre PC, portable ou smartphone et passez en plein écran. Quittez à tout moment via la touche Échap.'
      }
    ],
    de: [
      {
        question: 'Wie zeigt man einen schwarzen Bildschirm an?',
        answer: 'Sie können ganz einfach einen schwarzen Bildschirm anzeigen, indem Sie diese Seite öffnen und auf die Schaltfläche "Vollbild" klicken oder die Schnellwahltaste "F" drücken. Dadurch wird eine rein schwarze Fläche (#000000) über Ihr gesamtes Display gelegt.'
      },
      {
        question: 'Was ist ein schwarzer Bildschirm?',
        answer: 'Ein schwarzer Bildschirm ist eine solide Farbfläche mit reinem Schwarz (#000000). Er wird für Monitortests, Kontrollen auf Backlight-Bleeding, zum Stromsparen bei OLED-Displays und als neutraler dunkler Hintergrund verwendet.'
      },
      {
        question: 'Was ist der Schwarzbild-Modus?',
        answer: 'Der Schwarzbild-Modus ist ein browserbasierter Leerzustand, der das Display mit flachem Schwarz füllt. Er dient als Standby-Visualisierung, um die Helligkeit zu reduzieren, Staub von physischen Panels zu wischen oder Zweitmonitore abzudunkeln.'
      },
      {
        question: 'Wie kann ich meinen Bildschirm schwarz machen?',
        answer: 'Um Ihren Bildschirm sofort schwarz zu schalten, laden Sie dieses kostenlose Online-Tool auf einem beliebigen Monitor, Laptop oder Mobiltelefon und aktivieren Sie das Vollbild. Drücken Sie jederzeit die Esc-Taste zum Verlassen.'
      }
    ],
    hi: [
      {
        question: 'ब्लैक स्क्रीन कैसे दिखाएं?',
        answer: 'आप इस पेज को खोलकर और "फुलस्क्रीन" बटन पर क्लिक करके या अपने कीबोर्ड पर "F" शॉर्टकट की दबाकर आसानी से ब्लैक स्क्रीन दिखा सकते हैं। यह आपके पूरे डिस्प्ले को कवर करने के लिए एक शुद्ध #000000 काला फील्ड प्रदर्शित करता है।'
      },
      {
        question: 'ब्लैक स्क्रीन क्या है?',
        answer: 'ब्लैक स्क्रीन एक ठोस काले रंग (#000000) का एक फील्ड है। इसका उपयोग मॉनिटर परीक्षण, बैकलाइट लीकेज की जांच, OLED स्क्रीन पर बैटरी बचाने और एक गहरे रंग के फ्रेम के निर्माण के लिए किया जाता है।'
      },
      {
        question: 'ब्लैक स्क्रीन मोड क्या है?',
        answer: 'ब्लैक स्क्रीन मोड एक ब्राउज़र-आधारित रिक्त अवस्था है जो स्क्रीन को समतल काले रंग से भर देती है। यह चमक कम करने, मॉनिटर से धूल साफ करने और सहायक स्क्रीन को बिना बंद किए धीमा करने का काम करता है।'
      },
      {
        question: 'मैं अपनी स्क्रीन को काला कैसे कर सकता हूँ?',
        answer: 'अपनी स्क्रीन को तुरंत काला करने के लिए, किसी भी मॉनिटर, लैपटॉप या मोबाइल ब्राउज़र पर इस मुफ्त ऑनलाइन टूल को लोड करें और फुलस्क्रीन मोड सक्रिय करें। आप किसी भी समय Esc दबाकर बाहर आ सकते हैं।'
      }
    ],
    ja: [
      {
        question: '黒い画面を表示するにはどうすればよいですか？',
        answer: 'このページを開いて、「全画面」ボタンをクリックするか、キーボードの「F」キーを押すだけで、簡単に黒い画面を表示できます。これにより、画面全体に完全な黒（#000000）の表示が広がります。'
      },
      {
        question: '黒い画面とは何ですか？',
        answer: '黒い画面とは、完全な黒（#000000）を表示するソリッドカラーの機能です。液晶のバックライト漏れ検査、OLED（有機EL）画面のピクセル消灯による節電、モニターのドット抜けテストなどに活用されています。'
      },
      {
        question: '黒い画面モードとは何ですか？',
        answer: '黒い画面モードは、画面全体をフラットな黒で埋めるブラウザ上のスリープ状態です。ディスプレイの明るさを減らしたり、画面表面のホコリを拭き取ったり、電源を切らずにサブモニターを暗転させるのに最適です。'
      },
      {
        question: '画面を黒くする方法は？',
        answer: '画面を今すぐ真っ黒にするには、PC、ノートパソコン、スマホのブラウザでこの無料オンラインツールを開き、全画面表示にするだけです。キーボードのEscキーを押すことでいつでも解除できます。'
      }
    ]
  },
  'green-screen': {
    en: [
      {
        question: 'How to get a green screen online? (Full green screen online free)',
        answer: 'You can easily open a <strong>full green screen online</strong> by loading this free tool in any browser and entering fullscreen mode. It offers a <strong>real green screen free</strong> of banners and watermarks, suitable for chroma key checks.'
      },
      {
        question: 'What is an online green screen tool used for? (Green screen generator)',
        answer: 'A <strong>green screen online tool</strong> serves as a <strong>green screen generator</strong> for video content and Zoom calls. It is used to cast a green glow for selfies, create <strong>green screen backgrounds</strong>, relax eyes with a calming forest hue, and identify monitor dead pixels.'
      },
      {
        question: 'How do I test my screen for color or display problems? (Green screen test online)',
        answer: 'Start a <strong>green screen test online</strong> to evaluate backlight uniformity and check for stuck pixels. If you have a <strong>green screen display problem</strong> on a monitor or projector, a solid green screen makes anomalies visible.'
      },
      {
        question: 'Can I download green screen backgrounds? (Green screen backgrounds free / 4k)',
        answer: 'Yes, click the download button in the toolbar to save <strong>green screen backgrounds free</strong> of charge. You can save a high-res <strong>real green screen png</strong> or capture <strong>green screen backgrounds 4k</strong> templates without copyright limits.'
      }
    ],
    es: [
      {
        question: '¿Cómo obtener una pantalla verde online gratis? (Pantalla verde completa)',
        answer: 'Puedes abrir una <strong>pantalla verde completa online</strong> de forma gratuita cargando esta herramienta en tu navegador e ingresando al modo de pantalla completa. Ofrece un fondo verde puro y limpio sin marcas de agua.'
      },
      {
        question: '¿Para qué sirve una herramienta de pantalla verde online?',
        answer: 'Se utiliza principalmente como un generador de <strong>fondos de pantalla verde</strong> para efectos de video y edición en Photoshop. También es ideal para proyectar una luz de color verde en videollamadas, limpiar la pantalla o relajar los ojos imitando el tono de la naturaleza.'
      },
      {
        question: '¿Cómo probar mi monitor en busca de píxeles muertos o problemas de pantalla? (Prueba de pantalla verde online)',
        answer: 'Ejecuta una <strong>prueba de pantalla verde online</strong> para verificar la uniformidad del color. Si sospechas de un <strong>problema en la pantalla verde</strong> o píxeles defectuosos, este color brillante revela rápidamente motas de suciedad o píxeles quemados.'
      },
      {
        question: '¿Puedo descargar fondos de pantalla verde?',
        answer: 'Sí, puedes realizar una <strong>descarga de fondos de pantalla verde gratis</strong> desde la barra lateral. Descarga una <strong>imagen de pantalla verde png</strong> real o plantillas en resolución 4K sin derechos de autor.'
      }
    ],
    pt: [
      {
        question: 'Como colocar a tela verde inteira online grátis? (Tela verde completa)',
        answer: 'Você pode abrir uma <strong>tela verde completa online</strong> carregando esta ferramenta gratuita no navegador e ativando o modo tela cheia. Ela fornece um fundo cromaqui real livre de anúncios.'
      },
      {
        question: 'Para que serve um gerador de tela verde online?',
        answer: 'Um <strong>gerador de tela verde</strong> serve para criar <strong>fundos de tela verde</strong> para gravação de vídeos e montagens no Photoshop. Também deita uma luz verde relaxante para videochamadas e ajuda na limpeza do monitor.'
      },
      {
        question: 'Como fazer um teste de tela verde online no monitor?',
        answer: 'Inicie um <strong>teste de tela verde online</strong> para avaliar a integridade das cores do seu painel. Se notar algum <strong>problema de exibição na tela verde</strong>, esse fundo sólido facilita localizar pixels mortos ou poeira física no visor.'
      },
      {
        question: 'Como baixar fundo de tela verde grátis? (Fundo de tela verde grátis / 4k)',
        answer: 'Você pode <strong>baixar fundos de tela verde gratuitamente</strong> em alta definição. Obtenha uma <strong>imagem de tela verde png</strong> ou layouts em 4K sem direitos autorais para usar em suas edições.'
      }
    ],
    fr: [
      {
        question: 'Comment afficher un écran vert complet en ligne ? (Écran vert complet en ligne)',
        answer: 'Lancez notre outil dans votre navigateur et activez le mode plein écran pour obtenir un <strong>écran vert complet en ligne</strong>. C\'est un outil d\'<strong>écran vert réel gratuit</strong> sans logo ni distorsion.'
      },
      {
        question: 'Quelle est l\'utilité d\'un outil d\'écran vert en ligne ?',
        answer: 'Cet <strong>outil d\'écran vert en ligne</strong> sert de générateur pour créer des <strong>arrière-plans d\'écran vert</strong> pour le montage vidéo et Photoshop. Il fournit également une lumière verte apaisante pour réduire la fatigue oculaire et éclairer les appels vidéo.'
      },
      {
        question: 'Comment faire un test d\'écran vert pour détecter les défauts d\'affichage ?',
        answer: 'Faites un <strong>test d\'écran vert en ligne</strong> pour vérifier l\'uniformité de la dalle et trouver d\'éventuels pixels morts. Si votre moniteur présente un <strong>problème d\'affichage d\'écran vert</strong>, la couleur pure rend visible chaque anomalie.'
      },
      {
        question: 'Comment télécharger des arrière-plans d\'écran vert gratuits ?',
        answer: 'Utilisez les commandes pour <strong>télécharger des arrière-plans d\'écran vert gratuits</strong>. Enregistrez une image d\'<strong>écran vert réel png</strong> ou des fonds en 4K libres de droits pour vos créations.'
      }
    ],
    de: [
      {
        question: 'Wie bekomme ich einen grünen Bildschirm online? (Vollständig grüner Bildschirm online)',
        answer: 'Sie können einen <strong>vollständig grünen Bildschirm online</strong> kostenlos anzeigen, indem Sie dieses Tool im Browser öffnen und den Vollbildmodus aktivieren. Es dient als <strong>echter grüner Bildschirm</strong> ohne störende Banner.'
      },
      {
        question: 'Wofür wird ein Online-Grünschirm-Generator verwendet?',
        answer: 'Ein <strong>grüner Bildschirm online</strong> wird als Generator für <strong>Grünschirm-Hintergründe</strong> bei der Videobearbeitung und in Photoshop genutzt. Er strahlt ein beruhigendes grünes Licht aus, um die Augen zu entspannen und dient als Videocall-Beleuchtung.'
      },
      {
        question: 'Wie teste ich meinen Monitor auf Pixelfehler und Probleme? (Grüner bildschirm test online)',
        answer: 'Führen Sie einen <strong>grüner bildschirm test online</strong> durch. Falls Ihr Display ein <strong>grüner bildschirm anzeigeproblem</strong> aufweist, lassen sich tote Pixel und Schmutzflecken auf der reinen grünen Fläche sofort identifizieren.'
      },
      {
        question: 'Kann ich grüne Hintergründe kostenlos herunterladen?',
        answer: 'Ja, Sie können <strong>freie grüne bildschirmhintergründe</strong> über die Seitenleiste herunterladen. Sichern Sie sich eine <strong>echte grüne bildschirmdatei als png</strong> oder 4K-Hintergründe ohne Urheberrecht.'
      }
    ],
    hi: [
      {
        question: 'ऑनलाइन फुल ग्रीन स्क्रीन कैसे प्राप्त करें? (फुल ग्रीन स्क्रीन ऑनलाइन)',
        answer: 'आप किसी भी ब्राउज़र में इस टूल को खोलकर और फुलस्क्रीन मोड चालू करके <strong>फुल ग्रीन स्क्रीन ऑनलाइन</strong> प्राप्त कर सकते हैं। यह वॉटरमार्क के बिना एक <strong>वास्तविक फ्री ग्रीन स्क्रीन</strong> प्रदान करता है।'
      },
      {
        question: 'ऑनलाइन ग्रीन स्क्रीन टूल का उपयोग किस लिए किया जाता है?',
        answer: 'एक <strong>ग्रीन स्क्रीन ऑनलाइन टूल</strong> का उपयोग वीडियो एडिटिंग और फ़ोटोशॉप के लिए <strong>ग्रीन स्क्रीन बैकग्राउंड</strong> जनरेटर के रूप में किया जाता है। यह आँखों के तनाव को कम करने के लिए शांत हरी रोशनी और वीडियो कॉल्स के लिए लाइटिंग भी देता है।'
      },
      {
        question: 'डिस्प्ले या कलर की समस्याओं के लिए स्क्रीन टेस्ट कैसे करें? (ग्रीन स्क्रीन टेस्ट ऑनलाइन)',
        answer: 'डिस्प्ले यूनिफॉर्मिटी जांचने के लिए <strong>ग्रीन स्क्रीन टेस्ट ऑनलाइन</strong> चलाएं। यदि आपके मॉनिटर या प्रोजेक्टर में <strong>ग्रीन स्क्रीन डिस्प्ले समस्या</strong> है, तो यह ठोस हरा रंग डेड पिक्सल और धूल के धब्बों को आसानी से दिखाता है।'
      },
      {
        question: 'क्या मैं नो-कॉपीराइट ग्रीन स्क्रीन बैकग्राउंड डाउनलोड कर सकता हूँ?',
        answer: 'हाँ, साइडबार का उपयोग करके <strong>फ्री ग्रीन स्क्रीन बैकग्राउंड</strong> डाउनलोड करें। आप अपनी एडिटिंग के लिए 4k और <strong>असली ग्रीन स्क्रीन PNG</strong> फाइलें बिना किसी कॉपीराइट के डाउनलोड कर सकते।'
      }
    ],
    ja: [
      {
        question: 'オンラインでグリーンバックを全画面で表示するには？ (グリーンバック全画面)',
        answer: 'ブラウザでこのツールを開き、全画面表示にするだけで、簡単に<strong>グリーンバック全画面</strong>を表示できます。広告や透かしのない、完全無料の**リアルなグリーンスクリーン**をご利用いただけます。'
      },
      {
        question: 'グリーンスクリーンツールの用途は何ですか？',
        answer: 'この<strong>グリーンスクリーンオンラインツール</strong>は、動画編集やフォトショップのクロマキー背景ジェネレーターとして利用されます。その他、目の疲れを癒すリラックス照明、ウェブ会議のグリーンライト、画面のドット抜けや汚れの掃除用としても役立ちます。'
      },
      {
        question: 'モニターのドット抜けやディスプレイ問題をテストするには？ (グリーンスクリーンテストオンライン)',
        answer: '画面のドット抜けやバックライト漏れを確かめるには、<strong>グリーンスクリーンテストオンライン</strong>を実行してください。モニターに<strong>グリーンスクリーン表示問題</strong>がある場合、均一な緑色背景が不具合のあるピクセルやガラスの汚れを浮かび上がらせます。'
      },
      {
        question: 'クロマキー合成用のグリーン背景素材をダウンロードできますか？',
        answer: 'はい、サイドメニューから**グリーンスクリーン背景無料ダウンロード**が可能です。動画や写真編集に最適な高解像度の**グリーンスクリーンpng**や4Kグリーン背景素材を、著作権フリーで保存していただけます。'
      }
    ]
  },
  'blue-screen': {
    en: [
      {
        question: 'What is a blue screen? (What does a blue screen mean?)',
        answer: 'A <strong>blue screen</strong> is a solid blue display field covering the entire monitor. While historically associated with a system crash or error, a clean <strong>blue screen online</strong> serves as an interactive utility for screen cleaning, detecting dead pixels, testing projector colors, or casting a serene <strong>blue screen light effect</strong>.'
      },
      {
        question: 'How to get a blue screen online? (Fake blue screen online)',
        answer: 'You can launch a full <strong>blue screen online</strong> directly from this website. Open the page and click the Fullscreen button or press the "F" hotkey to display a clean, high-resolution blue field. It is also useful as a <strong>fake blue screen online</strong> mockup for presentation mockups, digital video production, or software testing.'
      },
      {
        question: 'Is there a sysinternals blue screen tool simulation?',
        answer: 'Sysinternals offers diagnostic tools (like NotMyFault) to trigger actual system crashes for developers. If you want a safe visual simulator rather than crashing your OS, our online <strong>blue screen</strong> tool provides a harmless full-screen blue display that can be used to simulate backgrounds or test monitor coloring safely.'
      },
      {
        question: 'How to use a blue screen for monitor cleaning and dead pixel tests?',
        answer: 'In fullscreen mode, a deep solid blue is ideal for <strong>blue screen monitor cleaning</strong> and finding display imperfections. Setting a bright blue background helps you <strong>find dead pixels</strong> or <strong>find dirty spots</strong> on the panel. The color channel highlights stuck pixels that are failing to render blue, making it easy to wipe down the glass clean.'
      },
      {
        question: 'How can I use a blue screen light effect for remote calls?',
        answer: 'You can turn your display into a soft <strong>blue color light</strong> panel. By casting a solid <strong>blue light online</strong>, it creates a modern blue background or glow. It functions as a <strong>blue light for video calls</strong> and a <strong>blue light for selfie</strong> lighting, providing a cool LED ambient vibe directly from your browser.'
      }
    ],
    es: [
      {
        question: '¿Qué es una pantalla azul? (¿Qué significa la pantalla azul?)',
        answer: 'Una <strong>pantalla azul</strong> es un campo de visualización de color azul sólido. Aunque históricamente se asocia con un error del sistema, una <strong>pantalla azul online</strong> limpia sirve como una utilidad para la limpieza de monitores, detección de píxeles muertos o para proyectar un relajante <strong>efecto de luz de pantalla azul</strong>.'
      },
      {
        question: '¿Cómo obtener una pantalla azul online? (Pantalla azul falsa online)',
        answer: 'Puedes abrir una <strong>pantalla azul online</strong> completa directamente en esta web. Elige la herramienta y activa el modo de pantalla completa para simular una <strong>pantalla azul de error falsa online</strong> sin dañar tu ordenador, útil para presentaciones, desarrollo web o desarrollo artístico.'
      },
      {
        question: '¿Existe una simulación de la herramienta de pantalla azul de Sysinternals?',
        answer: 'Las herramientas de desarrollo de Sysinternals (como NotMyFault) están diseñadas para forzar fallos del sistema reales. Si buscas una simulación puramente visual e inofensiva de color sólido, nuestra utilidad online ofrece un fondo azul completo seguro para pruebas de color e iluminación.'
      },
      {
        question: '¿Cómo usar la pantalla azul para la limpieza de monitores y buscar píxeles muertos?',
        answer: 'La visualización sólida en azul es ideal para la <strong>limpieza de pantalla del monitor</strong> y detectar imperfecciones. Un fondo azul te ayuda a <strong>encontrar píxeles muertos</strong> u obstruidos y <strong>localizar manchas sucias</strong> en el panel físico, facilitando el mantenimiento del cristal.'
      },
      {
        question: '¿Cómo usar un efecto de luz de pantalla azul para videollamadas y selfies?',
        answer: 'Puedes usar tu pantalla como un panel de <strong>luz azul online</strong> o <strong>luz de color azul</strong> suave. Funciona como una excelente <strong>luz azul para videollamadas</strong> y <strong>luz azul para selfies</strong>, generando un ambiente futurista o iluminación fría desde tu navegador.'
      }
    ],
    pt: [
      {
        question: 'O que é uma tela azul? (O que significa tela azul?)',
        answer: 'Uma <strong>tela azul</strong> é um campo visual de cor azul sólida. Embora remeta historicamente a um erro crítico do sistema, nossa <strong>tela azul online</strong> limpa serve para limpeza de monitores, avaliação de pixels ou como um <strong>efeito de luz de tela azul</strong> para iluminação.'
      },
      {
        question: 'Como iniciar uma tela azul online? (Tela azul falsa online)',
        answer: 'Você pode iniciar uma <strong>tela azul online</strong> cheia nesta plataforma. Basta abrir o site e clicar no botão "Tela Cheia" para ter uma <strong>tela azul falsa online</strong> inofensiva, ideal para testes de vídeo, demonstrações em slides ou mockups.'
      },
      {
        question: 'Existe simulação para a ferramenta de tela azul da Sysinternals?',
        answer: 'A suíte de desenvolvedores Sysinternals possui utilitários como NotMyFault para induzir travamentos reais. Se você deseja apenas um fundo sólido azul seguro, use nosso simulador de tela azul online para testes visuais sem risco de corromper seu sistema de arquivos.'
      },
      {
        question: 'Como usar a tela azul para limpeza de monitor e pixels mortos?',
        answer: 'O azul puro é muito útil para a <strong>limpeza de monitor com tela azul</strong> e detecção de falhas. A projeção azul ajuda você a <strong>encontrar pixels mortos</strong> ou travados e <strong>achar manchas de poeira</strong> no vidro, permitindo limpar o monitor perfeitamente.'
      },
      {
        question: 'Como usar o efeito de luz azul para reuniões e selfies?',
        answer: 'Ajuste sua tela como um painel de <strong>luz azul online</strong> ou emissor de <strong>luz de cor azul</strong>. Este utilitário atua como <strong>luz azul para videochamadas</strong> e <strong>luz azul para selfie</strong>, proporcionando uma iluminação LED ideal diretamente no navegador.'
      }
    ],
    fr: [
      {
        question: 'Qu\'est-ce qu\'un écran bleu ? (Que signifie un écran bleu ?)',
        answer: 'Un <strong>écran bleu</strong> est un fond uni de couleur bleue. Bien qu\'associé traditionnellement à une panne du système d\'exploitation, notre <strong>écran bleu en ligne</strong> propre sert d\'outil utile pour nettoyer son moniteur, détecter des pixels morts, ou projeter un <strong>effet de lumière d\'écran bleu</strong> relaxant.'
      },
      {
        question: 'Comment afficher un écran bleu en ligne ? (Faux écran bleu en ligne)',
        answer: 'Lancez un <strong>écran bleu en ligne</strong> complet sur notre site en un clic. Entrez en plein écran pour simuler un <strong>faux écran bleu en ligne</strong> de manière sécurisée, ce qui est pratique pour des tests graphiques, des effets visuels ou des arrière-plans créatifs.'
      },
      {
        question: 'Existe-t-il un outil de simulation d\'écran bleu Sysinternals ?',
        answer: 'Les outils Sysinternals (comme NotMyFault) forcent de réels plantages système à des fins de diagnostic. Si vous désirez une alternative visuelle inoffensive pour simuler une interface bleue unie, notre site propose un écran bleu neutre sans aucun risque logiciel.'
      },
      {
        question: 'Comment utiliser un écran bleu pour le nettoyage d\'écran et tester les pixels morts ?',
        answer: 'Un bleu uni intense est parfait pour le <strong>nettoyage d\'écran avec écran bleu</strong> et le dépistage de défauts. Le fond bleu aide à <strong>trouver des pixels morts</strong> ou figés et à <strong>repérer des tâches de saleté</strong> sur la dalle de votre ordinateur.'
      },
      {
        question: 'Comment utiliser un effet d\'éclairage bleu pour mes réunions et selfies ?',
        answer: 'Transformez votre appareil en panneau de <strong>lumière bleue en ligne</strong> ou de <strong>lumière de couleur bleue</strong>. Il sert de <strong>lumière bleue pour visioconférence</strong> ou de <strong>lumière bleue pour selfie</strong>, diffusant une lueur LED moderne depuis votre navigateur.'
      }
    ],
    de: [
      {
        question: 'Was ist ein blauer Bildschirm? (Was bedeutet ein blauer Bildschirm?)',
        answer: 'Ein <strong>blauer Bildschirm</strong> ist eine einfarbig blaue Anzeigefläche. Obwohl historische Abstürze damit gemeint sein können, dient unser sauberer <strong>blauer Bildschirm online</strong> als Werkzeug zur Monitorreinigung, Pixelfehlerprüfung oder zur Erzeugung eines <strong>blaue Bildschirm-Lichteffekts</strong>.'
      },
      {
        question: 'Wie bekomme ich einen blauen Bildschirm online? (Absturz-Simulation / Falscher blauer Bildschirm)',
        answer: 'Sie können einen <strong>blauen Bildschirm online</strong> direkt über diesen Browser-Link im Vollbildmodus starten. Nutzen Sie ihn als <strong>falschen blauen Bildschirm online</strong> für Simulationen, Videobearbeitungen oder Design-Prototypen ohne Gefahr für Ihr Betriebssystem.'
      },
      {
        question: 'Gibt es eine Simulation des bekannten Sysinternals Blue Screen Tools?',
        answer: 'Sysinternals-Programme wie NotMyFault stürzen Windows-Systeme zu Testzwecken real ab. Suchen Sie nach einer sicheren farblichen Simulation für Video oder Anzeige, erhalten Sie hier einen unbedenklichen blauen Hintergrund ohne Gefahren.'
      },
      {
        question: 'Wie hilft ein blauer Bildschirm bei der Monitorreinigung und Pixelfehler-Suche?',
        answer: 'Ein sattes Blau eignet sich hervorragend zur <strong>Monitorreinigung mit blauem Bildschirm</strong> und Sichtprüfung. Das solide Blau hilft Ihnen dabei, <strong>Pixelfehler zu finden</strong> oder <strong>Schmutzflecken aufzuspüren</strong>, um die Glasoberfläche des Panels streifenfrei zu reinigen.'
      },
      {
        question: 'Wie nutze ich ein blaues Licht für Video-Bewerbungen und Selfies?',
        answer: 'Nutzen Sie das Display als <strong>blaues Licht online</strong> bzw. Quelle für <strong>blaues Farblicht</strong>. Das Tool strahlt ein weiches <strong>blaues Licht für Videocalls</strong> und <strong>blaues Licht für Selfies</strong> aus und erzeugt eine coole, technik-affine LED-Atmosphäre.'
      }
    ],
    hi: [
      {
        question: 'नीली स्क्रीन क्या है? (नीली स्क्रीन का क्या मतलब है?)',
        answer: '**नीली स्क्रीन** मॉनिटर पर एक ठोस नीला रंग क्षेत्र है। हालाँकि ऐतिहासिक रूप से यह कंप्यूटर क्रैश या सिस्टम एरर से जुड़ा है, लेकिन यह <strong>नीली स्क्रीन ऑनलाइन</strong> टूल डिस्प्ले साफ करने, खराब पिक्सल खोजने या <strong>ब्लू स्क्रीन लाइट इफेक्ट</strong> के लिए एक उपयोगी साधन है।'
      },
      {
        question: 'ऑनलाइन नीली स्क्रीन कैसे शुरू करें? (नकली नीली स्क्रीन ऑनलाइन)',
        answer: 'आप इस वेबसाइट से फुल-स्क्रीन <strong>नीली स्क्रीन ऑनलाइन</strong> खोल सकते हैं। यह प्रस्तुतिकरण, वीडियो प्रभावों या सॉफ्टवेयर परीक्षण के लिए एक सुरक्षित <strong>नकली नीली स्क्रीन ऑनलाइन</strong> के रूप में काम कर सकती है जिससे कंप्यूटर को कोई नुकसान नहीं होता।'
      },
      {
        question: 'क्या सिसइंटरनल्स (sysinternals) का कोई ब्लू स्क्रीन टूल उपलब्ध है?',
        answer: 'सिसइंटरनल्स का NotMyFault टूल वास्तव में ऑपरेटिंग सिस्टम को क्रैश करने में मदद करता है। यदि आप बिना सिस्टम क्रैश किए केवल एक ठोस नीला पृष्ठभूमि रंग चाहते हैं, तो हमारा ऑनलाइन टूल पूरी सुरक्षा के साथ नीली स्क्रीन का लाइव सिम्युलेटर देता है।'
      },
      {
        question: 'स्क्रीन क्लीनिंग और डेड पिक्सल परीक्षण के लिए नीली स्क्रीन का उपयोग कैसे करें?',
        answer: 'फुलस्क्रीन मोड में ठोस नीला रंग <strong>नीली स्क्रीन मॉनिटर क्लीनिंग</strong> और डिस्प्ले की खामियां जांचने का बेहतरीन तरीका है। नीला रंग आपको स्क्रीन पर <strong>डेड पिक्सल ढूंढने</strong> या <strong>धूल-मिट्टी के गंदे धब्बे खोजने</strong> में काफी मदद करता है।'
      },
      {
        question: 'वीडियो कॉल और सेल्फी के लिए ब्लू स्क्रीन लाइट इफेक्ट का उपयोग कैसे करें?',
        answer: 'अपनी स्क्रीन को एक <strong>ब्लू लाइट ऑनलाइन</strong> उत्पन्न करने वाले सुंदर पैनल में बदलें। यह टूल <strong>वीडियो कॉल के लिए ब्लू लाइट</strong> या <strong>सेल्फी के लिए ब्लू लाइट</strong> के रूप में काम करता है, जो कैमरे के सामने एक समान <strong>नीला रंग प्रकाश</strong> प्रभाव फेंकता है।'
      }
    ],
    ja: [
      {
        question: 'ブルースクリーンとは？（青い画面はどういう意味ですか？）',
        answer: '**ブルースクリーン（青い画面）**とは、液晶画面全体に表示された純粋な青いカラーフィールドです。エラーやPCの故障（ブルースクリーン）を連想させますが、この<strong>ブルースクリーンオンライン</strong>ツールは、液晶チェック、掃除、または<strong>青い画面の光効果</strong>用として使われます。'
      },
      {
        question: 'オンラインで青い画面を表示するには？（偽のブルースクリーンオンライン）',
        answer: '当サイトから簡単に全画面の<strong>ブルースクリーンオンライン</strong>を起動できます。システムに全く影響を与えずに<strong>偽のブルースクリーンオンライン</strong>として動作するため、プレゼンテーションのデモ、映像制作、テスト背景に安全に活用できます。'
      },
      {
        question: 'Sysinternalsのブルースクリーンツールと何が違いますか？',
        answer: 'Sysinternals of NotMyFault等の開発ツールは実際にシステムをクラッシュさせる特性があります。当サイトのツールは、危険なクラッシュを一切伴わず、単なる青色の全画面背景をブラウザ上で安全にエミュレートします。'
      },
      {
        question: 'モニター掃除やドット抜けテストに青い画面をどう使いますか？',
        answer: '液晶の手入れ時には、全面の<strong>掃除用ブルースクリーン</strong>を表示することでパネルの品質を細かく点検できます。<strong>モニター掃除用ブルースクリーン</strong>を利用することで、パネルに生じた<strong>ドット抜けを発見</strong>したり、<strong>液晶の汚れを発見</strong>することが非常に簡単になります。'
      },
      {
        question: 'ビデオ通話やセルフィー用の青色照明（LED）として使うには？',
        answer: 'ディスプレイの輝度を上げ、<strong>ブルーライトオンライン</strong>投光器や高彩度な<strong>青いカラーライト</strong>として使えます。自撮り用の<strong>セルフィー用ブルーライト</strong>や、<strong>ビデオ通話用ブルーライト</strong>として、寒色系のLED照明効果を手軽に作れます。'
      }
    ]
  },
  'red-screen': {
    en: [
      {
        question: 'What is a red screen and why is my screen red?',
        answer: 'A red screen is a solid color display panel running pure red (#ff0000). If you are asking why is my screen red on a laptop, TV, or phone, it could be due to active eye comfort configurations (like Night Shift), a GPU driver issue, or a hardware defect. However, launching a clean online red screen background is a controlled way to test your display or preserve night vision.'
      },
      {
        question: 'How to get a red screen on iPhone? (How to make iPhone screen red)',
        answer: 'To learn how to get red screen on iPhone, you can use our web-based tool. Select the Red Screen and click Fullscreen in Safari. If you want to know how to make iphone screen red permanently, go to iOS Settings > Accessibility > Display & Text Size > Color Filters, turn them on, and select Red Color Tint. Users also query how to get red screen on iphone for nocturnal reading and camera fill.'
      },
      {
        question: 'How to make Red Dead Online full screen? (How to full screen Red Dead Online)',
        answer: 'To learn how to make red dead online full screen or how to full screen red dead online on PC, press the Alt + Enter shortcut key on your keyboard while the game is active. You can also open the game settings, navigate to the graphics options, and change the screen mode from Windowed or Borderless Windowed to Fullscreen.'
      },
      {
        question: 'Is there a DS Lite red screen error? (What is red screen door?)',
        answer: 'A ds lite red screen of death indicates a boot failure, often caused by a loose BIOS chip or faulty cartridge slot. Some retro gamers also mention the red screen door effect, which relates to subpixel layouts on older LCD panels that make the pixel borders visible, resembling a screen door.'
      }
    ],
    es: [
      {
        question: '¿Qué es una pantalla roja y por qué mi pantalla está roja?',
        answer: 'Una pantalla roja es un fondo de color rojo puro (#ff0000). Si te preguntas por qué mi pantalla está roja en una portátil, TV o móvil, podría deberse a configuraciones de luz nocturna activa (Night Shift), un error del controlador de la GPU o un fallo físico. Sin embargo, abrir un fondo de pantalla roja controlado es muy útil para comprobar el estado del monitor o cuidar la vista en la oscuridad.'
      },
      {
        question: '¿Cómo poner la pantalla roja en iPhone? (Cómo hacer la pantalla del iPhone roja)',
        answer: 'Para saber cómo poner la pantalla roja en iPhone, puedes abrir nuestra herramienta web en Safari y pulsar el botón de Pantalla Completa. Si deseas hacer la pantalla del iPhone roja de forma permanente, ve a Ajustes > Accesibilidad > Pantalla y tamaño de texto > Filtros de color, actívalos y selecciona Matiz Rojo. Muchos usuarios aplican la pantalla roja en iPhone para leer de noche o usarlo como luz de relleno.'
      },
      {
        question: '¿Cómo poner Red Dead Online en pantalla completa? (Cómo hacer pantalla completa en Red Dead Online)',
        answer: 'Para saber cómo poner Red Dead Online en pantalla completa o cómo hacer pantalla completa en Red Dead Online en PC, presiona el atajo Alt + Enter en el teclado mientras juegas. También puedes abrir el menú de ajustes del juego, ir a opciones gráficas y cambiar el Modo de Pantalla de Ventana/Sin Bordes a Pantalla Completa.'
      },
      {
        question: '¿Existe un error de pantalla roja en DS Lite? (¿Qué es la puerta de pantalla roja?)',
        answer: 'La pantalla roja en DS Lite señala un error crítico de arranque, usualmente causado por un chip de BIOS suelto o problemas en la ranura del cartucho. La frase puerta de pantalla roja (Screen Door Effect) describe la separación visible entre píxeles en pantallas LCD antiguas, asemejándose a una rejilla o mosquitero.'
      }
    ],
    pt: [
      {
        question: 'O que é uma tela vermelha e por que minha tela está vermelha?',
        answer: 'Uma tela vermelha é um painel exibindo cor vermelha pura (#ff0000). Se você está perguntando por que minha tela está vermelha no notebook, TV ou celular, pode ser devido a filtros de conforto ocular ativados (como Night Shift), erro no driver da GPU ou defeito físico de hardware. Mas abrir uma tela vermelha de fundo completo na web é excelente para testes e para proteger a visão no escuro.'
      },
      {
        question: 'Como deixar a tela vermelha no iPhone? (Como colocar tela vermelha no iPhone)',
        answer: 'Para aprender como colocar tela vermelha no iPhone, abra nossa ferramenta no Safari e clique em Tela Cheia. Se você quer saber como deixar a tela do iPhone vermelha de forma contínua, acesse Ajustes > Acessibilidade > Tela e Tamanho do Texto > Filtros de Cor, ative a opção e selecione Filtro Vermelho. Criadores utilizam a tela vermelha no iPhone para ler à noite e obter iluminação de estúdio.'
      },
      {
        question: 'Como colocar o Red Dead Online em tela cheia? (Como deixar Red Dead Online em tela cheia)',
        answer: 'Para saber como colocar o Red Dead Online em tela cheia ou como deixar Red Dead Online em tela cheia no PC, aperte o atalho Alt + Enter no seu teclado enquanto o jogo roda. Alternativamente, acesse as configurações do game, vá em opções gráficas, e altere o modo da tela de Modo Janela para Tela Cheia (Fullscreen).'
      },
      {
        question: 'O que significa a tela vermelha no DS Lite? (O que é porta de tela vermelha?)',
        answer: 'A tela vermelha no DS Lite de boot indica falha de hardware, geralmente um chip de BIOS solto ou problema na entrada de cartuchos. Já a expressão efeito porta de tela vermelha refere-se à visibilidade da divisão dos subpixels em telas LCD retro antigas, deixando-as com aspecto de grade.'
      }
    ],
    fr: [
      {
        question: "Qu'est-ce qu'un écran rouge et pourquoi mon écran est-il rouge?",
        answer: "Un écran rouge désigne l'affichage d'un fond uni rouge vif (#ff0000). Si vous vous demandez pourquoi mon écran est rouge sur un ordinateur, une TV ou un téléphone, cela peut venir d'un mode de confort des yeux (comme Night Shift), d'un pilote graphique corrompu, ou d'une panne de dalle. Cependant, lancer un arrière-plan écran rouge contrôlé permet de diagnostiquer l'écran ou de préserver sa vision nocturne."
      },
      {
        question: "Comment mettre l'écran rouge sur iPhone? (Comment rendre l'écran de l'iPhone rouge)",
        answer: "Pour savoir comment mettre l'écran rouge sur iPhone, ouvrez Safari, accédez à notre appli web et activez le mode Plein écran. Pour rendre l'écran de l'iPhone rouge de façon permanente, allez dans Réglages > Accessibilité > Affichage et taille du texte > Filtres de couleur, activez-les et choisissez Nuance rouge. L'usage d'un écran rouge sur iPhone est parfait pour lire la nuit sans fatigue."
      },
      {
        question: "Comment mettre Red Dead Online en plein écran? (Comment passer Red Dead Online en plein écran)",
        answer: "Pour savoir comment mettre Red Dead Online en plein écran ou comment passer Red Dead Online en plein écran sur PC, appuyez sur le raccourci Alt + Entrée sur votre clavier lorsque le jeu tourne. Vous pouvez également ouvrir les paramètres du jeu, aller dans l'onglet des graphismes, puis changer le mode d'affichage de Fenêtré en Plein écran."
      },
      {
        question: "Qu'est-ce que l'erreur d'écran rouge sur DS Lite? (C'est quoi l'effet porte d'écran rouge?)",
        answer: "Un écran rouge sur DS Lite indique un échec critique du démarrage d'origine matérielle (BIOS ou slot cartouche défaillant). Le terme effet porte d'écran rouge (Screen Door Effect) fait référence à la grille de séparation des pixels visible sur de vieux écrans LCD rétro."
      }
    ],
    de: [
      {
        question: 'Was ist ein roter Bildschirm und warum ist mein Bildschirm rot?',
        answer: 'Ein roter Bildschirm ist eine vollflächige Farbausgabe von reinem Rot (#ff0000). Wenn Sie sich fragen, warum ist mein Bildschirm rot (z. B. auf Laptop, TV oder Smartphone), liegt das oft an aktiven Augenkomfort-Funktionen (wie Night Shift), Grafikkartentreiber-Fehlern oder Hardware-Defekten. Das Öffnen eines sauberen Online-roten Bildschirmhintergrunds dient jedoch zum sicheren Paneltest oder zur Schonung der Augen.'
      },
      {
        question: 'Wie bekomme ich einen roten Bildschirm auf dem iPhone? (Wie macht man den iPhone Bildschirm rot)',
        answer: 'Um einen roten Bildschirm auf dem iPhone zu aktivieren, nutzen Sie unser Tool in Safari und wählen Sie den Vollbildmodus. Wenn Sie wissen möchten, wie man den iPhone-Bildschirm dauerhaft rot macht, gehen Sie zu Einstellungen > Bedienungshilfen > Anzeige & Textgröße > Farbfilter, aktivieren Sie diese und wählen Sie Rotstich. Viele Nutzer verwenden den roten Bildschirm auf dem iPhone für Nachtlektüre oder als Ambient-Studiolicht.'
      },
      {
        question: 'Wie macht man Red Dead Online zum Vollbild? (Wie spiele ich Red Dead Online im Vollbildmodus)',
        answer: 'Um Red Dead Online ins Vollbild zu bringen oder Red Dead Online als Vollbild zu spielen auf dem PC, drücken Sie einfach das Tastenkürzel Alt + Enter während das Spiel läuft. Alternativ können Sie in den Grafikeinstellungen des Spiels den Anzeigemodus von Fenstermodus oder Rahmenloser Fenstermodus auf Vollbild ändern.'
      },
      {
        question: 'Was bedeutet der rote Bildschirm beim DS Lite? (Was ist der Rote-Screen-Door-Effekt?)',
        answer: 'Ein roter Bildschirm beim DS Lite deutet auf einen Boot-Fehler hin, der meist durch einen losen BIOS-Chip oder einen defekten Modulschacht verursacht wird. Als Rote-Screen-Door-Effekt bezeichnet man die sichtbare Pixelgitterstruktur auf älteren LCD-Bildschirmen, bei denen die Ränder der roten Subpixel wie eine Fliegengittertür wirken.'
      }
    ],
    hi: [
      {
        question: 'लाल स्क्रीन क्या है और मेरी स्क्रीन लाल क्यों है?',
        answer: 'एक लाल स्क्रीन शुद्ध लाल रंग (#ff0000) प्रदर्शित करने वाला एक ठोस कलर पैनल है। यदि आप पूछ रहे हैं कि लैपटॉप, टीवी या मोबाइल पर मेरी स्क्रीन लाल क्यों है, तो यह सक्रिय आई कम्फर्ट मोड (जैसे नाइट शील्ड), जीपीयू ड्राइवर की खराबी, या हार्डवेयर दोष के कारण हो सकता है। हालांकि, वेब पर लाल स्क्रीन बैकग्राउंड चलाना स्क्रीन की जांच करने और नाइट विजन बचाने का एक सुरक्षित साधन है।'
      },
      {
        question: 'आईफोन की स्क्रीन को लाल कैसे करें? (आईफोन पर लाल स्क्रीन कैसे लाएं)',
        answer: 'सीखने के लिए कि आईफोन पर लाल स्क्रीन कैसे लाएं, आप हमारे वेब टूल को सफारी पर खोलें और फुलस्क्रीन पर क्लिक करें। यदि आप आईफोन की स्क्रीन को हमेशा के लिए लाल करना चाहते हैं, तो आईओएस सेटिंग्स > एक्सेसिबिलिटी > डिस्प्ले एंड टेक्स्ट साइज > कलर फिल्टर पर जाएं, उन्हें चालू करें और रेड कलर टिंट चुनें। रात में रीडिंग और सॉफ्ट स्टूडियो लाइट के लिए लोग आईफोन पर लाल स्क्रीन का उपयोग करते हैं।'
      },
      {
        question: 'रेड डेड ऑनलाइन को फुल स्क्रीन कैसे करें? (Red Dead Online को स्क्रीन पर पूरा कैसे लाएं)',
        answer: 'यह जानने के लिए कि Red Dead Online को फुल स्क्रीन कैसे करें, पीसी पर गेम चालू होने के दौरान अपने कीबोर्ड पर Alt + Enter दबाएं। इसके अलावा, आप गेम की सेटिंग्स में जा सकते हैं, ग्राफिक्स विकल्पों पर नेविगेट कर सकते हैं, और डिस्प्ले मोड को विंडो मोड से बदलकर फुलस्क्रीन कर सकते हैं।'
      },
      {
        question: 'क्या DS Lite लाल स्क्रीन एरर कोई बड़ी समस्या है? (स्क्रीन डोर इफेक्ट क्या है?)',
        answer: 'एक DS Lite लाल स्क्रीन एरर कंसोल के सिस्टम बूट विफलता को दर्शाता है, जो ढीली BIOS चिप या खराब कार्ट्रिज स्लॉट के कारण होता है। वहीं, कुछ पुरानी एलसीडी स्क्रीन पर दिखाई देने वाली बारीक पिक्सेल ग्रिड की रेखाओं को स्क्रीन डोर इफेक्ट कहा जाता है, जो खिड़की की जाली जैसी दिखती हैं।'
      }
    ],
    ja: [
      {
        question: '赤い画面とは何ですか？なぜ画面が赤くなっているのですか？',
        answer: 'デジタルにおける赤い画面は、画面全体に純粋な赤色（#ff0000）を表示した配色です。もしパソコンやテレビ、スマホの画面でなぜ画面が赤いのか疑問に持たれた場合、OSの夜間モード（Night Shift）設定、グラフィックドライバの問題、または液晶のハード故障が考えられます。当機能のように全画面に赤い画面 背景をきれいに表示することは、ドット抜けチェックや夜間の暗順応保護に活用されます。'
      },
      {
        question: 'iPhoneで画面を赤くする（赤い画面を表示する）方法は？',
        answer: 'パソコンやブラウザを使わずにiPhoneで赤い画面を取得する方法として、Safariで当サイトを開き、全画面ボタンを押してください。iOS機能でiPhoneの画面を永続的に赤く設定する方法は、設定 > アクセシビリティ > 画面表示とテキストサイズ > カラーフィルタを「オン」にして「赤の色合い」を選びます。夜間の液晶読書や撮影用ライトとして活用されます。'
      },
      {
        question: 'レッド・デッド・オンラインをフルスクリーン表示にするには？',
        answer: 'PC版でゲーム画面をRDR2（レッド・デッド・オンライン）でフルスクリーンに変更するには、ゲームがアクティブな状態でキーボードの「Alt + Enter」キーを同時に押してください。または、ゲームのグラフィック設定メニューから表示モードをウィンドウモードや境界線なしウィンドウモードからフルスクリーン（全画面）に変更してください。'
      },
      {
        question: 'DS Liteの赤い画面エラーは何ですか？（レッド・スクリーンドア効果とは？）',
        answer: '海外で知られるDS Liteの赤い画面（Red Screen of Death）はブート失敗などの液晶의フリーズ系バグを指し、BIOSチップやカセット端子の接触不良が主原因です。また往年の液晶技術において、赤色サブピクセルの隙間が見えてしまう格子状の網目をスクリーンドア効果（網目効果）と呼びます。'
      }
    ]
  },
  'orange-screen': {
    en: [
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
    ],
    es: [
      {
        question: '¿Por qué mi pantalla se está poniendo naranja?',
        answer: 'Tu pantalla puede ponerse naranja debido al modo de luz nocturna activo (como Luz nocturna en Windows 10 o Night Shift en iPhone) diseñado para reducir la luz azul. Otras causas pueden ser un cable de pantalla defectuoso, controladores de tarjeta gráfica desactualizados o un problema de hardware (pantalla naranja de la muerte). Abrir una pantalla naranja online controlada es una forma segura de verificar si es un problema de software o de hardware.'
      },
      {
        question: '¿Qué es la pantalla naranja?',
        answer: 'La pantalla naranja es una utilidad de pantalla completa que muestra un color naranja puro y brillante. Se utiliza para probar el rendimiento de los subpíxeles, verificar la precisión de los colores en el panel y detectar píxeles muertos o manchas de suciedad.'
      },
      {
        question: '¿Cómo pongo mi pantalla en naranja?',
        answer: 'Puedes poner tu pantalla naranja fácilmente abriendo nuestra utilidad web gratuita. Selecciona la herramienta, ajusta el brillo si lo deseas y presiona el botón de Pantalla Completa o la tecla "F" en tu teclado para obtener una pantalla naranja completa en PC o móvil.'
      },
      {
        question: '¿Qué es el método de la pantalla naranja?',
        answer: 'El método de la pantalla naranja es una técnica creativa para calcar o copiar imágenes. Al configurar una tableta o monitor con un fondo naranja brillante a pantalla completa, puedes colocar un papel encima para calcar un dibujo que haya hecho un compañero de clase, usando el monitor como mesa de luz.'
      },
      {
        question: '¿Qué color es el naranja en HTML?',
        answer: 'En HTML y CSS, el color naranja estándar se representa con el código hexadecimal #FFA500 (o rgb(255, 165, 0)). Nuestra herramienta de pantalla naranja online utiliza un tono naranja cálido y optimizado (#FF8A00) para pruebas de pantalla y luz ambiental.'
      }
    ],
    pt: [
      {
        question: 'Por que minha tela está ficando laranja?',
        answer: 'A sua tela pode ficar laranja devido à ativação do modo de conforto ocular (como a Luz Noturna no Windows 10 ou o Night Shift no iPhone) para reduzir a luz azul. Outras causas incluem um cabo de vídeo com defeito, drivers da placa de vídeo desatualizados ou uma falha de hardware (conhecida como tela laranja da morte). Usar uma tela laranja online controlada é uma maneira segura de testar se o problema é físico ou de software.'
      },
      {
        question: 'O que é a tela laranja?',
        answer: 'A tela laranja é um utilitário de tela inteira que exibe uma cor laranja pura e vibrante. É usada para testar o desempenho dos subpixels do monitor, verificar a fidelidade das cores e identificar problemas como pixels mortos e manchas de sujeira.'
      },
      {
        question: 'Como faço para deixar minha tela laranja?',
        answer: 'Você pode deixar sua tela laranja facilmente usando nossa ferramenta online gratuita. Basta selecionar a ferramenta, ajustar o brilho e clicar no botão Tela Cheia ou pressionar a tecla "F" no seu teclado para ter uma tela laranja completa no PC ou celular.'
      },
      {
        question: 'O que é o método da tela laranja?',
        answer: 'O método da tela laranja é uma técnica de desenho e decalque. Ao exibir uma tela laranja brilhante em tela cheia no monitor ou tablet, você pode colocar uma folha de papel sobre ela para contornar e copiar um desenho feito por um colega ou artista, funcionando como uma mesa de luz estável.'
      },
      {
        question: 'Qual é o código da cor laranja em HTML?',
        answer: 'Em HTML e CSS, a cor laranja padrão possui o código hexadecimal #FFA500 (ou rgb(255, 165, 0)). Nossa ferramenta de tela laranja online utiliza um tom laranja quente customizado (#FF8A00), projetado para calibração de displays e iluminação decorativa.'
      }
    ],
    fr: [
      {
        question: 'Pourquoi mon écran devient-il orange ?',
        answer: 'Votre écran peut devenir orange en raison de l\'activation du mode nuit (comme la fonction Éclairage nocturne sous Windows 10 ou Night Shift sur iPhone) conçu pour limiter la lumière bleue. D\'autres causes possibles sont un câble d\'affichage défectueux, des pilotes graphiques obsolètes ou une panne matérielle (parfois appelée écran orange de la mort). Utiliser notre outil d\'écran orange contrôlé en ligne est un bon moyen de tester si le problème est logiciel ou matériel.'
      },
      {
        question: 'Qu\'est-ce que l\'écran orange ?',
        answer: 'L\'écran orange est un utilitaire en plein écran affichant une couleur orange pure et vive. Il permet de tester les performances des sous-pixels, de vérifier le rendu des couleurs d\'un moniteur et de détecter des pixels défectueux ou des poussières.'
      },
      {
        question: 'Comment mettre mon écran en orange ?',
        answer: 'Vous pouvez facilement afficher un écran orange en ouvrant notre outil gratuit en ligne. Sélectionnez le widget de couleur orange, réglez la luminosité et cliquez sur le bouton Plein écran ou appuyez sur la touche "F" de votre clavier pour obtenir un écran orange complet sur PC ou mobile.'
      },
      {
        question: 'Qu\'est-ce que la méthode de l\'écran orange ?',
        answer: 'La méthode de l\'écran orange désigne une méthode de dessin et de calque. En affichant un écran orange vif en plein écran sur une tablette ou un écran, vous pouvez poser une feuille de papier par-dessus afin de calquer et copier un dessin réalisé par un camarade de classe ou un artiste, l\'écran servant de table lumineuse.'
      },
      {
        question: 'Quelle est la couleur orange en HTML ?',
        answer: 'En HTML et CSS, l\'orange standard correspond au code hexadécimal #FFA500 (ou rgb(255, 165, 0)). Notre outil d\'écran orange en ligne affiche une teinte d\'orange chaude et optimisée (#FF8A00) parfaite pour calibrer les dalles ou éclairer une pièce.'
      }
    ],
    de: [
      {
        question: 'Warum wird mein Bildschirm orange?',
        answer: 'Ihr Bildschirm kann sich orange färben, wenn der Nachtmodus (wie das Nachtlicht in Windows 10 oder Night Shift auf dem iPhone) aktiv ist, um blaues Licht zu reduzieren. Weitere Ursachen sind ein defektes Bildschirmkabel, veraltete Grafikkartentreiber oder ein Hardware-Defekt (manchmal als oranger Bildschirm des Todes bezeichnet). Unser kontrollierter oranger Bildschirm online hilft Ihnen, die Ursache sicher einzugrenzen.'
      },
      {
        question: 'Was ist der orange Bildschirm?',
        answer: 'Der orange Bildschirm ist ein Vollbild-Utility, das ein reines, kräftiges Orange anzeigt. Es dient zum Testen der Subpixel-Performance, zur Überprüfung der Farbtreue des Monitors sowie zum Aufspüren von Pixelfehlern oder Schmutzflecken.'
      },
      {
        question: 'Wie mache ich meinen Bildschirm orange?',
        answer: 'Sie können Ihren Bildschirm ganz einfach über unser kostenloses Online-Tool orange färben. Wählen Sie das Werkzeug aus, passen Sie die Helligkeit an und klicken Sie auf Vollbild oder drücken Sie die Taste "F" auf Ihrer Tastatur für einen kompletten orangen Bildschirm auf dem PC oder Smartphone.'
      },
      {
        question: 'Was ist die Orange-Bildschirm-Methode?',
        answer: 'Die Orange-Bildschirm-Methode ist eine kreative Technik zum Abpausen und Zeichnen. Wenn Sie ein Tablet oder einen Monitor auf Vollbild-Orange einstellen, können Sie ein Blatt Papier darüberlegen, um ein von einem Mitschüler gezeichnetes Bild abzuzeichnen, wobei das Display als Leuchttisch fungiert.'
      },
      {
        question: 'Welche Farbe hat Orange in HTML?',
        answer: 'In HTML und CSS wird das Standard-Orange durch den Hex-Farbcode #FFA500 (oder rgb(255, 165, 0)) dargestellt. Unser Online-Tool verwendet ein warmes, optimiertes Orange (#FF8A00) für eine angenehme Beleuchtung und Monitorprüfungen.'
      }
    ],
    hi: [
      {
        question: 'मेरी स्क्रीन नारंगी (ऑरेंज) क्यों हो रही है?',
        answer: 'आपकी स्क्रीन नारंगी होने का मुख्य कारण नाइट लाइट सेटिंग (जैसे विंडोज 10 नाइट लाइट या आईफोन नाइट शिफ्ट) का सक्रिय होना हो सकता है, जो नीली रोशनी को कम करती है। अन्य कारणों में खराब डिस्प्ले केबल, पुराने ग्राफिक्स ड्राइवर, या हार्डवेयर खराबी (ऑरेंज स्क्रीन ऑफ डेथ) शामिल हैं। किसी सुरक्षित ऑनलाइन ऑरेंज स्क्रीन टूल को लॉन्च करना यह जांचने का एक आसान तरीका है कि समस्या सॉफ्टवेयर में है या हार्डवेयर में।'
      },
      {
        question: 'ऑरेंज स्क्रीन क्या है?',
        answer: 'नारंगी स्क्रीन एक फुलस्क्रीन डिस्प्ले टूल है जो एक शुद्ध और चटक नारंगी रंग प्रदर्शित करता है। इसका उपयोग सबपिक्सेल की सेहत जांचने, डिस्प्ले की रंग सटीकता (कलर कैलिब्रेशन) का परीक्षण करने और स्क्रीन पर मौजूद डेड पिक्सल या गंदगी के धब्बों का पता लगाने के लिए किया जाता है।'
      },
      {
        question: 'मैं अपनी स्क्रीन को नारंगी कैसे करूँ?',
        answer: 'आप हमारे मुफ्त ऑनलाइन ऑरेंज स्क्रीन यूटिलिटी का उपयोग करके अपनी स्क्रीन को आसानी से नारंगी रंग में बदल सकते हैं। टूल का चयन करें, आवश्यकतानुसार ब्राइटनेस बढ़ाएं और पीसी या मोबाइल पर पूरी ऑरेंज स्क्रीन खोलने के लिए फुलस्क्रीन बटन पर क्लिक करें या कीबोर्ड पर "F" दबाएं।'
      },
      {
        question: 'ऑरेंज स्क्रीन विधि (मेथड) क्या है?',
        answer: 'ऑरेंज स्क्रीन विधि एक रचनात्मक ट्रेसिंग (चित्र छापने) की तकनीक है। अपने टैबलेट या मॉनिटर पर एक चमकीली नारंगी फुलस्क्रीन बैकग्राउंड सेट करके, आप उसके ऊपर एक कागज रखकर अपने किसी सहपाठी या कलाकार द्वारा बनाए गए चित्र को आसानी से कॉपी (ट्रेस) कर सकते हैं।'
      },
      {
        question: 'HTML में नारंगी रंग का कोड क्या है?',
        answer: 'HTML और CSS में, मानक नारंगी रंग को हेक्साडेसिमल कोड #FFA500 (या rgb(255, 165, 0)) द्वारा दर्शाया जाता है। हमारा ऑनलाइन ऑरेंज स्क्रीन टूल एक विशेष वार्म नारंगी रंग (#FF8A00) प्रदर्शित करता है जो आँखों के आराम और स्क्रीन टेस्टिंग के लिए अनुकूल है।'
      }
    ],
    ja: [
      {
        question: '画面がオレンジ色になるのはなぜですか？',
        answer: '画面がオレンジ色になる主な原因は、ブルーライトを軽減するための夜間モード（Windows 10の夜間モードやiPhoneのNight Shiftなど）が調整・有効化されているためです。その他、ディスプレイケーブルの接触不良、グラフィックドライバの不具合、または物理的な液晶故障（オレンジスクリーン・オブ・デスなど）の可能性もあります。当サイトのオレンジ画面表示ツールを使って不具合がOS設定によるものか、またはハードウェアの異常かを確認できます。'
      },
      {
        question: 'オレンジスクリーン（オレンジの画面）とは何ですか？',
        answer: 'オレンジスクリーンとは、画面全体に純粋で鮮やかなオレンジ色を表示する全画面表示ユーティリティです。ディスプレイのサブピクセル検査、発色のキャリブレーション、画面のドット抜けや汚れの位置の特定などに使用されます。'
      },
      {
        question: '液晶画面をオレンジ色にする方法は？',
        answer: '当サイトの無料オンライン「オレンジスクリーン」ツールを使用すれば、簡単に画面をオレンジ色にできます。ツールを選択し、必要に応じて輝度を調整し、全画面ボタンをクリックするか、キーボードの「F」キーを押して全画面表示に切り替えます。'
      },
      {
        question: 'オレンジスクリーン・メソッド（方法）とは何ですか？',
        answer: 'オレンジスクリーン・メソッドとは、イラストのトレース（すかし写し）や模写に用いられるクリエイティブな技法です。タブレットやモニターを明るいオレンジ色の全画面背景に設定し、その上に紙を置くことで、クラスメートが描いた絵などを簡単にトレースするライトボックスとして画面を活用できます。'
      },
      {
        question: 'HTMLでのオレンジ色のカラーコードは何ですか？',
        answer: 'HTMLやCSSにおいて、標準のオレンジ色は16進数カラーコード #FFA500（または rgb(255, 165, 0））で表されます。当サイトのオレンジ画面ツールは、ディスプレイ調整や温かみのある間接照明として最適な、厳選されたウォームオレンジ（#FF8A00）を出力します।'
      }
    ]
  },
  'purple-screen': {
    en: [
      {
        question: 'What is a purple screen?',
        answer: 'A purple screen is a solid, full-screen color panel showing a pure purple background online. It functions as a blank computer screen utility used for screen cleaning, display testing, generating ambient light, and wellness app visuals.'
      },
      {
        question: 'What is the purple screen color?',
        answer: 'The default color of our purple screen online tool is a vibrant, balanced purple hex code #7C3AED (or rgb(124, 58, 237)). Using our browser controls, you can adjust settings to display a light purple screen or a dark purple screen to match your exact aesthetic.'
      },
      {
        question: 'What is a purple screen of death?',
        answer: 'A purple screen of death (PSoD) is an diagnostic crash screen indicating a kernel panic or hardware failure, most famously associated with VMware ESXi servers. On consoles like the Nintendo Switch or laptops, it points to GPU or display hardware failures.'
      },
      {
        question: 'What is the purple screen error?',
        answer: 'A purple screen error is usually associated with display interface issues, outdated graphics drivers, or startup freezes. For example, an ubuntu purple screen lock on boot is often resolved by updating boot parameters, while a purple screen on TV sets usually indicates a faulty HDMI connection.'
      },
      {
        question: 'What does dark purple mean?',
        answer: 'In color theory, dark purple represents tranquility, royalty, creativity, and spiritual depth. Displaying a dark purple screen or utilizing it as a purple screen saver (or screen savers) helps calm the mind, which is why wellness apps use it for meditation and relaxation exercises.'
      },
      {
        question: 'How is dark purple called?',
        answer: 'Dark purple is known by various names such as violet, plum, eggplant (aubergine), grape, or royal purple. You can enter any of these hex color codes into our custom picker to render a full purple screen background.'
      },
      {
        question: 'Why is my home screen purple?',
        answer: 'If you suddenly experience an iphone purple screen glitch or your TV home screen has turned purple, check for activated color filters in accessibility settings or a loose display cable. Launching our clean purple screen phone diagnostic panel is a great way to inspect your screen for dead pixels and verify color accuracy.'
      }
    ],
    es: [
      {
        question: '¿Qué es una pantalla morada?',
        answer: 'Una pantalla morada (purple screen) es un panel de color sólido a pantalla completa que muestra un fondo morado puro en línea. Funciona como una utilidad de pantalla de ordenador en blanco para limpieza de monitores, pruebas de visualización, creación de luz de fondo y uso en aplicaciones de relajación.'
      },
      {
        question: '¿Cuál es el color de la pantalla morada?',
        answer: 'El color predeterminado de nuestra herramienta es un tono morado vibrante (#7C3AED). Con los controles del navegador, puedes alternar entre una pantalla morada clara (light purple screen) y una pantalla morada oscura (dark purple screen) de acuerdo con tus preferencias estéticas.'
      },
      {
        question: '¿Qué es una pantalla morada de la muerte?',
        answer: 'La pantalla morada de la muerte (PSoD) es un error crítico de diagnóstico provocado por fallos de hardware o pánicos de kernel en servidores VMware ESXi. En consolas de videojuegos como Nintendo Switch o portátiles, señala un problema físico en la tarjeta gráfica.'
      },
      {
        question: '¿Qué es el error de pantalla morada?',
        answer: 'Un error de pantalla morada suele deberse a problemas de conexión de video o controladores de GPU desactualizados. Por ejemplo, un bloqueo de pantalla morada en Ubuntu (ubuntu purple screen) al arrancar suele solucionarse editando los parámetros de inicio, mientras que una pantalla morada en TV suele indicar un cable HDMI dañado.'
      },
      {
        question: '¿Qué significa el morado oscuro?',
        answer: 'En psicología del color, el morado oscuro representa la realeza, el misterio, la creatividad y la calma. Usar una pantalla morada oscura o configurarla como un salvapantallas morado ayuda a relajar la mente, razón por la cual las aplicaciones de bienestar lo emplean para la meditación.'
      },
      {
        question: '¿Cómo se le llama al morado oscuro?',
        answer: 'El morado oscuro recibe varios nombres según el tono exacto, como violeta, ciruela, berenjena o púrpura real. Puedes ingresar cualquiera de estos códigos hexadecimales en nuestra herramienta para mostrar un fondo morado completo.'
      },
      {
        question: '¿Por qué mi pantalla de inicio está morada?',
        answer: 'Si de repente tu teléfono experimenta un glitch de pantalla morada en iPhone o la pantalla de inicio de tu TV se volvió morada, verifica si hay filtros de color activos o un cable suelto. Abrir nuestra pantalla morada en el móvil es ideal para comprobar la uniformidad del panel y ver si es un fallo de hardware.'
      }
    ],
    pt: [
      {
        question: 'O que é uma tela roxa?',
        answer: 'Uma tela roxa (purple screen) é um painel de cor sólida em tela cheia que exibe um fundo roxo puro online. Funciona como um utilitário de tela de computador em branco usado para limpeza de monitores, testes de display, iluminação ambiente e uso em aplicativos de bem-estar.'
      },
      {
        question: 'Qual é a cor da tela roxa?',
        answer: 'A cor padrão da nossa ferramenta de tela roxa online é um código hexadecimal vibrante (#7C3AED). Utilizando nossos controles de cor, você pode ajustar facilmente a exibição entre uma tela roxa clara (light purple screen) e uma tela roxa escura (dark purple screen).'
      },
      {
        question: 'O que é a tela roxa da morte?',
        answer: 'A tela roxa da morte (PSoD) é uma tela de erro crítico gerada por pânico de kernel no VMware ESXi ou falha grave de hardware. Em dispositivos domésticos, uma tela roxa repentina na TV ou celular pode apontar para problemas físicos no display ou processador gráfico.'
      },
      {
        question: 'O que é o erro da tela roxa?',
        answer: 'O erro da tela roxa geralmente representa uma interrupção na conexão de vídeo ou inicialização do sistema. Por exemplo, uma inicialização travada com tela roxa no Ubuntu (ubuntu purple screen) é comum por incompatibilidade de driver gráfico, enquanto uma tela roxa na TV costuma ser culpa de um cabo HDMI frouxo.'
      },
      {
        question: 'O que significa roxo escuro?',
        answer: 'Na teoria das cores, o roxo escuro simboliza nobreza, mistério, criatividade e meditação profunda. Exibir uma tela roxa escura ou usá-la como protetor de tela roxo (purple screen saver/savers) atua reduzindo o estresse mental em rotinas de relaxamento.'
      },
      {
        question: 'Como o roxo escuro é chamado?',
        answer: 'O roxo escuro é conhecido por vários nomes como violeta, ameixa, berinjela ou púrpura real. Você pode digitar qualquer uma destas cores hexadecimais em nosso seletor personalizado para gerar um fundo de tela roxo completo.'
      },
      {
        question: 'Por que a minha tela de início está roxa?',
        answer: 'Se você notar um problema de tela roxa no iPhone ou se a tela de início da TV ficou roxa de repente, confira os filtros de acessibilidade ativos nas configurações ou cabos HDMI. Usar a nossa tela roxa no celular ajuda a descartar defeitos de hardware e encontrar pixels mortos.'
      }
    ],
    fr: [
      {
        question: "Qu'est-ce qu'un écran violet ?",
        answer: "Un écran violet (purple screen) est un arrière-plan uni affichant une couleur violette pure en plein écran. Cet écran d'ordinateur vide sert au nettoyage de moniteur, aux tests de dalles, à l'éclairage de studio et aux séances de méditation."
      },
      {
        question: "Quelle est la couleur de l'écran violet ?",
        answer: "La couleur par défaut est le violet vif #7C3AED. Grâce à notre palette interactive, vous pouvez obtenir un écran violet clair (light purple screen) ou un écran violet foncé (dark purple screen) selon l'ambiance recherchée ou les besoins de calibrage de votre affichage."
      },
      {
        question: "Qu'est-ce que l'écran violet de la mort ?",
        answer: "L'écran violet de la mort (PSoD) est un crash de diagnostic système sur VMware ESXi provoqué par un problème matériel ou un kernel panic. Sur des consoles de jeu portables comme la Nintendo Switch, cela révèle une surchauffe ou une panne de carte mère."
      },
      {
        question: "Qu'est-ce que l'erreur d'écran violet ?",
        answer: "Une erreur d'écran violet est typiquement le signe d'une faille de transmission vidéo ou de pilote. Par exemple, un blocage d'écran violet sur Ubuntu (ubuntu purple screen) au démarrage provient souvent de pilotes Nvidia, tandis qu'un écran violet sur TV provient d'un câble HDMI défectueux."
      },
      {
        question: "Que signifie le violet foncé ?",
        answer: "Le violet foncé symbolise la sérénité, le luxe, la créativité et le bien-être. Projeter un écran violet foncé ou avoir un économiseur d'écran violet (purple screen saver/savers) chez soi favorise le sommeil et la relaxation, d'où son adoption dans les applications bien-être."
      },
      {
        question: "Comment appelle-t-on le violet foncé ?",
        answer: "Le violet foncé abrite de multiples dénominations selon les nuances : prune, aubergine, violet indigo ou pourpre. Saisissez n'importe lequel de ces codes hexadécimaux dans notre sélecteur personnalisé pour afficher le fond violet de votre choix."
      },
      {
        question: "Pourquoi mon écran d'accueil est-il violet ?",
        answer: "Si vous observez un affichage écran violet sur iPhone (iphone purple screen) suspect ou si le menu de votre TV vire au violet, vérifiez les filtres de couleur dans vos réglages d'accessibilité. Ouvrez notre écran violet sur téléphone pour dépister facilement les pixels défectueux."
      }
    ],
    de: [
      {
        question: 'Was ist ein lila Bildschirm?',
        answer: 'Ein lila Bildschirm (violett/purple screen) ist eine vollflächige Farbanzeige von reinem Lila. Das Tool dient als leerer Computerbildschirm zum Reinigen von Displays, für Farbtests, als Fotolicht und zur Entspannung in Wellness-Apps.'
      },
      {
        question: 'Welche Farbe hat der lila Bildschirm?',
        answer: 'Die Standardfarbe ist ein sattes Violett (#7C3AED). Über unsere Farbregler können Sie einfach zwischen einem helllila Bildschirm (light purple screen) und einem dunkellila Bildschirm (dark purple screen) wechseln, um die Helligkeit optimal anzupassen.'
      },
      {
        question: 'Was ist ein lila Bildschirm des Todes?',
        answer: 'Der lila Bildschirm des Todes (PSoD) ist ein kritischer Diagnosebildschirm bei VMware ESXi-Servern, der auf Kernel-Panik oder Hardware-Fehler hinweist. Bei PCs oder der Nintendo Switch deutet ein plötzlicher violetter Bildschirm auf GPU-Probleme hin.'
      },
      {
        question: 'Was ist der lila Bildschirmfehler?',
        answer: 'Dieser Fehler deutet in der Regel auf Treiber- oder Anschlussfehler bei Monitoren hin. So ist ein eingefrorener lila Bildschirm unter Ubuntu (ubuntu purple screen) beim Booten auf Grafiktreiber-Konflikte zurückzuführen, während lila Bildschirme auf Fernsehern oft HDMI-Kabelprobleme sind.'
      },
      {
        question: 'Was bedeutet dunkles Lila?',
        answer: 'Dunkellila steht für Kreativität, Eleganz, beruhigende Harmonie und Meditation. Die Verwendung eines dunkellila Bildschirms oder eines lila Bildschirmschoners (purple screen saver/savers) hilft, den Geist zu entspannen, weshalb Wellness-Apps das sanfte Licht sehr schätzen.'
      },
      {
        question: 'Wie wird dunkles Lila genannt?',
        answer: 'Dunkellila wird je nach Nuance auch als Pflaume, Aubergine, Indigo oder Violett bezeichnet. Jede dieser Hex-Farben können Sie in unserer Palette manuell eingeben und im Vollbildmodus anzeigen lassen.'
      },
      {
        question: 'Warum ist mein Startbildschirm lila?',
        answer: 'Wenn Ihre Anzeige plötzlich ein lila Bildschirm auf dem iPhone wird oder Ihr Fernseher einen lila Farbstich hat, sollten Sie die Barrierefreiheit-Farbfilter prüfen oder das Kabel checken. Nutzen Sie unseren lila Bildschirm auf dem Handy für einen sicheren Pixel- und Farbtreue-Test.'
      }
    ],
    hi: [
      {
        question: 'बैंगनी स्क्रीन क्या है?',
        answer: 'एक बैंगनी स्क्रीन (purple screen) ऑनलाइन उपलब्ध एक ठोस, फुल-स्क्रीन बैंगनी रंग का बैकग्राउंड है। यह एक खाली कंप्यूटर स्क्रीन यूटिलिटी के रूप में काम करता है जिसका उपयोग मॉनिटर की सफाई, पिक्सेल टेस्टिंग और कमरे में रंगीन प्रकाश के लिए किया जाता है।'
      },
      {
        question: 'बैंगनी स्क्रीन का रंग कोड क्या है?',
        answer: 'हमारे टूल का डिफ़ॉल्ट कोड #7C3AED है। आप हमारे आसान कंट्रोल्स का उपयोग करके हल्की बैंगनी स्क्रीन (light purple screen) या डार्क बैंगनी स्क्रीन (dark purple screen) के बीच चुनाव कर सकते हैं।'
      },
      {
        question: 'पर्पल स्क्रीन ऑफ डेथ क्या है?',
        answer: 'पर्पल स्क्रीन ऑफ डेथ (PSoD) एक एरर स्क्रीन है जो वीएमवेयर ईएसएक्सआई (VMware ESXi) सर्वर पर कर्नल पैनिक या सिस्टम विफलता के कारण दिखाई देती है। लैपटॉप या गेम कंसोल पर यह हार्डवेयर/ग्राफिक्स कार्ड की खराबी को दर्शाता है।'
      },
      {
        question: 'बैंगनी स्क्रीन त्रुटि (एरर) क्या है?',
        answer: 'यह त्रुटि आमतौर पर डिस्प्ले केबल या ड्राइवर्स की समस्या को दर्शाती है। उदाहरण के लिए, बूट के दौरान उत्पन्न होने वाली उबंटू बैंगनी स्क्रीन (ubuntu purple screen) की समस्या आटोमेटिक ड्राइवर इनकम्पैटिबिलिटी के कारण होती है, जबकि टीवी पर बैंगनी स्क्रीन एचडीएमआई (HDMI) केबल ढीली होने की वजह से होती है।'
      },
      {
        question: 'डार्क बैंगनी का क्या अर्थ है?',
        answer: 'रंग मनोविज्ञान में डार्क पर्पल रचनात्मकता, शांति, और विलासिता का प्रतीक माना जाता है। डार्क बैंगनी स्क्रीन का बैकग्राउंड या बैंगनी स्क्रीन सेवर (purple screen saver/savers) मन को शांत करने में मदद करता है, इसलिए ध्यान के लिए बनाए गए वेलनेस ऐप्स में इसका व्यापक उपयोग होता है।'
      },
      {
        question: 'गहरे बैंगनी को क्या पुकारा जाता है?',
        answer: 'गहरे बैंगनी रंग को इसके अलग-अलग शेड्स के अनुसार प्लम (आलू बुखारा), वायलट, जामुनी, बैंगन (औबरजीन) या रॉयल पर्पल कहा जाता है। आप इनमें से किसी भी कोड को हमारे कस्टम पिकर में डालकर फुल पर्पल स्क्रीन देख सकते हैं।'
      },
      {
        question: 'मेरी होम स्क्रीन बैंगनी क्यों है?',
        answer: 'यदि आपकी आईफोन बैंगनी स्क्रीन बूट लूप में फंस गई है या टीवी स्क्रीन बैंगनी हो गई है, तो सेटिंग्स में जाकर कलर फिल्टर एक्सेसिबिलिटी विकल्प या ढीली केबल्स की जांच करें। अपने फोन की स्क्रीन की जांच करने और डेड पिक्सल्स ढूंढने के लिए आप हमारे टूल का उपयोग कर सकते हैं।'
      }
    ],
    ja: [
      {
        question: '紫の画面とは何ですか？',
        answer: '紫の画面（purple screen）は、ブラウザいっぱいに表示される均一な紫色の背景ツールです。画面の掃除、液晶ドット抜けチェック、部屋の間接照明、カラーセラピー、そして瞑想やリラックスを提供するウェルネスアプリの背景として使用されます。'
      },
      {
        question: '紫の画面の具体的な色は何ですか？',
        answer: 'デフォルトの色は、鮮やかで均整の取れたパープルカラー（#7C3AED）です。ツール内の設定を使って、好みの 薄い紫の画面（light purple screen）や 濃い紫の画面（dark purple screen）へ簡単に変更できます。'
      },
      {
        question: 'パープルスクリーン・オブ・デスとは何ですか？',
        answer: 'パープルスクリーン・オブ・デス（PSoD）は、VMware ESXi環境などでカーネルパニックや致命的なハードウェア障害が発生した際に表示されるエラー画面です。任天堂スイッチやパソコンの画面でこれが生じた場合、内部GPUの故障を意味することが多いです。'
      },
      {
        question: 'パープルスクリーンの接続エラーとは？',
        answer: 'ディスプレイケーブルの接触不良や、起動時グラフィックドライバの問題で発生します। たとえば、Linux起動時の Ubuntuの紫の画面（ubuntu purple screen）でのハングアップはドライバ設定の衝突によるもので、テレビ画面の紫化はHDMI端子の接触不良が主な原因です।'
      },
      {
        question: '濃い紫（ダークパープル）にはどんな効果がありますか？',
        answer: '色彩心理学において、濃い紫は高貴さ、神秘性、創造性、精神の安定を象徴します। 濃い紫の画面 を表示したり、紫のスクリーンセーバー（purple screen saver/savers）をデスクトップPCに設定することは、瞑想アプリのように脳をリラックスさせる効果があります।'
      },
      {
        question: '濃い紫はどのように呼ばれますか？',
        answer: 'バリエーションによりバイオレット、プラム（梅色）、茄子黒、葡萄色、ロイヤルパープルなど様々な名称で呼ばれます। カラーコードを使って、お好みの濃い紫の画面を全画面出力できます।'
      },
      {
        question: 'スマホのホーム画面が紫になっているのはなぜですか？',
        answer: 'iPhoneの紫の画面（iphone purple screen）バグやテレビの起動メニューの紫化は、液晶ケーブルの浮き・水没、またはカラーフィルタ等のアクセシビリティ設定によるものです। 当サイトのスマホ用紫の画面で動作させてテストしてハードの問題か確かめられます।'
      }
    ]
  },
  'pink-screen': {
    en: [
      {
        question: 'Why is my screen pink?',
        answer: 'A pink screen can indicate a hardware or software issue. On computer monitors and TVs (like a Samsung TV pink screen), it is often caused by a loose HDMI cable, faulty connection pins, or outdated graphics drivers. On an iPhone or MacBook, a sudden pink screen may be a temporary software glitch or a sign of physical screen damage.'
      },
      {
        question: 'What does pink screen mean?',
        answer: 'A pink screen usually means there is a problem with the display signal or hardware. In critical cases, it is referred to as a "pink screen of death" (GPU crash). In design and everyday use, a blank pink screen simply means a full-color canvas used for photo lighting, screen testing, or workspace vibe customization.'
      },
      {
        question: 'How to get pink home screen for iphone?',
        answer: 'To get a pink home screen for iPhone, you can configure iOS color filters. Go to Settings > Accessibility > Display & Text Size > Color Filters, toggle them on, select "Color Tint", and choose a pink shade. You can also use our online tool as a pink screen light on phone or save a pink screen color code wallpaper.'
      },
      {
        question: 'How do I make my screen pink?',
        answer: 'You can easily make your screen pink by visiting our free online pink screen utility. Simply open the tool on your PC, mobile, or TV, and click the Fullscreen button or press the "F" key on your keyboard to get a total pink screen backdrop.'
      },
      {
        question: 'Does pink light exist?',
        answer: 'Scientifically, pink light does not exist as a single spectral wavelength. Instead, your brain perceives a pink light effect when red and blue light waves are combined. You can use our tool to generate a hot pink screen or light pink screen for creative photography and visual inspiration.'
      },
      {
        question: 'What is the pink screen thing?',
        answer: 'The "pink screen thing" refers to the trend of using a full pink screen as a soft lighting source for video calls, a design canvas, or a backdrop for creating social media videos. It is also used as a diagnostic tool for checking display uniformity and screen cleaning.'
      },
      {
        question: 'Why is my screen light pink?',
        answer: 'A light pink screen tint on your device can be caused by active color filters, night shift settings, or software adjustments like True Tone. It can also suggest an aging liquid crystal panel or a slight calibration bias. Open our tool to compare different shades and test your panel accuracy.'
      }
    ],
    es: [
      {
        question: '¿Por qué mi pantalla está rosa?',
        answer: 'Una pantalla rosa puede indicar un problema de hardware o software. En monitores de computadora y televisores (como una pantalla rosa en TV Samsung), suele deberse a un cable HDMI flojo, pines de conexión dañados o controladores gráficos desactualizados. En un iPhone o MacBook, una pantalla rosa repentina puede ser un error de software temporal o un signo de daño físico en la pantalla.'
      },
      {
        question: '¿Qué significa la pantalla rosa?',
        answer: 'Una pantalla rosa suele significar un problema con la señal de video o el hardware de visualización. En casos críticos, se conoce como "pantalla rosa de la muerte" (fallo de GPU). En el uso diario, una pantalla rosa en blanco simplemente representa un fondo de color sólido para iluminación fotográfica, pruebas de pantalla o decoración estética.'
      },
      {
        question: '¿Cómo tener la pantalla de inicio rosa en iPhone?',
        answer: 'Para obtener una pantalla de inicio rosa en iPhone, ve a los Ajustes de iOS > Accesibilidad > Pantalla y tamaño de texto > Filtros de color, actívalos, selecciona "Tinte de color" y elige una tonalidad rosa. También puedes usar nuestro sitio web en Safari como luz de pantalla rosa en el teléfono o guardar un fondo rosa de pantalla.'
      },
      {
        question: '¿Cómo hago para que mi pantalla sea rosa?',
        answer: 'Puedes poner tu pantalla rosa fácilmente ingresando a nuestra herramienta online de pantalla de color rosa. Elige el color rosa, haz clic en el botón de Pantalla Completa o presiona la tecla "F" en tu teclado para rellenar todo el monitor.'
      },
      {
        question: '¿Existe la luz rosa?',
        answer: 'Científicamente, el rosa no existe como una sola longitud de onda en el espectro. Tu cerebro percibe el efecto de luz rosa cuando las ondas de luz roja y azul se superponen y mezclan a la vez. Puedes simularlo usando nuestra pantalla rosa brillante o rosa claro para tus fotos y decoración.'
      },
      {
        question: '¿Qué es eso de la pantalla rosa?',
        answer: 'La tendencia de la "pantalla rosa" se refiere a usar una pantalla de color rosa completa como iluminación suave para videollamadas, un lienzo de diseño para inspiración visual o un fondo para grabar videos de redes sociales. También sirve como probador de píxeles y limpieza de monitores.'
      },
      {
        question: '¿Por qué mi pantalla es de color rosa claro?',
        answer: 'Una pantalla de tono rosa claro puede deberse a opciones de filtros activos, configuraciones de luz nocturna (Night Shift) o ajustes cromáticos del sistema. También puede deberse a un desgaste en las lámparas de retroiluminación. Usa nuestro test de color para comparar niveles y uniformidad.'
      }
    ],
    pt: [
      {
        question: 'Por que minha tela está rosa?',
        answer: 'Uma tela rosa pode indicar um problema de hardware ou de software. Em monitores de computador e TVs (como uma tela rosa na TV Samsung), costuma ser causada por um cabo HDMI frouxo, pinos de conexão danificados ou drivers gráficos desatualizados. Em um iPhone ou MacBook, uma tela rosa repentina pode ser um bug temporário de software ou um sinal de dano físico na tela.'
      },
      {
        question: 'O que significa tela rosa?',
        answer: 'Uma tela rosa geralmente significa que há um erro na transmissão de sinal de vídeo ou no hardware da tela. Em falhas críticas, isso é chamado de "tela rosa da morte" (pane da GPU). Em tarefas cotidianas e design, uma tela rosa em branco simplesmente representa um fundo uniforme usado para iluminação ou calibração.'
      },
      {
        question: 'Como ter a tela inicial rosa no iPhone?',
        answer: 'Para deixar a tela inicial do iPhone rosa, acesse os Ajustes do iOS > Acessibilidade > Tela e Tamanho do Texto > Filtros de Cor, ative-os, escolha "Tom de Cor" e defina a cor rosa. Você também pode acessar nosso site no Safari para usar o celular como painel de luz rosa ou salvar um papel de parede rosa.'
      },
      {
        question: 'Como faço para deixar minha tela rosa?',
        answer: 'Você pode deixar sua tela rosa acessando a nossa ferramenta de tela rosa online gratuita. Abra o utilitário em seu computador ou celular e clique no botão de Tela Cheia ou pressione a tecla "F" no teclado para ver uma tela rosa completa.'
      },
      {
        question: 'A luz rosa existe?',
        answer: 'Cientificamente, a luz rosa não possui um comprimento de onda espectral único no espectro eletromagnético. O cérebro cria o efeito de luz rosa ao misturar ondas de luz vermelha e azul estimuladas juntas. Você pode usar nossa tela rosa brilhante ou rosa claro para simular essa luz em fotos.'
      },
      {
        question: 'O que é a mania da tela rosa?',
        answer: 'O termo "tela rosa" refere-se à prática de usar uma tela rosa em tela cheia como fonte de luz suave para chamadas de vídeo, plano de fundo estético para gravar vídeos, ou painel de referência para designers. É útil também para limpeza de monitores e testes de pixels.'
      },
      {
        question: 'Por que minha tela está rosa claro?',
        answer: 'Uma leve tonalidade rosa claro no ecrã pode surgir devido a filtros de tela ativados, modo de visualização noturna (Night Shift) ou True Tone. Também pode resultar de um painel LCD envelhecido. Acesse nosso painel para testar as cores e verificar a exatidão das subpixels do dispositivo.'
      }
    ],
    fr: [
      {
        question: 'Pourquoi mon écran est-il rose?',
        answer: 'Un écran rose peut indiquer un problème matériel ou logiciel. Sur les moniteurs d\'ordinateurs et les téléviseurs (comme un écran rose sur TV Samsung), cela est souvent causé par un câble HDMI desserré, des broches de connexion endommagées ou des pilotes graphiques obsolètes. Sur un iPhone ou un MacBook, un écran rose soudain peut être un problème logiciel temporaire ou un signe de dommage physique de l\'écran.'
      },
      {
        question: 'Que signifie un écran rose?',
        answer: 'Un écran rose indique généralement un défaut du signal d\'affichage ou du contrôleur vidéo. Dans les cas graves, on l\'appelle l\'« écran rose de la mort » (plantage graphique). Pour un usage général, un écran rose vide fait office d\'arrière-plan de couleur unie facilitant l\'éclairage de portraits ou la détection de pixels défectueux.'
      },
      {
        question: 'Comment avoir un écran d\'accueil rose sur iPhone?',
        answer: 'Pour obtenir un écran d\'accueil rose sur iPhone, rendez-vous dans Réglages > Accessibilité > Affichage et taille du texte > Filtres de couleur, activez-les, choisissez "Nuance de couleur" et réglez sur le rose. Vous pouvez aussi ouvrir notre site pour utiliser votre téléphone comme lumière d\'écran rose.'
      },
      {
        question: 'Comment rendre mon écran rose?',
        answer: 'Pour afficher un écran rose, visitez notre outil d\'écran rose en ligne gratuit. Cliquez sur le bouton Plein Écran ou appuyez sur le raccourci clavier "F" pour remplir tout l\'affichage avec une lumière rose.'
      },
      {
        question: 'La lumière rose existe-t-elle?',
        answer: 'Scientiquement, la lumière rose n\'a pas de longueur d\'onde propre dans le spectre lumineux. Le cerveau perçoit un effet de lumière rose lorsqu\'il combine simultanément des signaux lumineux rouges et bleus. Notre écran rose vif ou rose clair permet d\'obtenir ce rendu en photo.'
      },
      {
        question: 'C\'est quoi le truc de l\'écran rose?',
        answer: 'L\'utilisation d\'un « écran rose » fait référence à la méthode consistant à afficher un écran rose uniforme comme source d\'éclairage d\'ambiance pour les réunions, comme fond de création de vidéos ou pour calibrer des moniteurs professionnels. Ce service est aussi un atout pour le nettoyage de dalle.'
      },
      {
        question: 'Pourquoi mon écran est-il rose clair?',
        answer: 'Un filtre rose clair ou un filtre de couleur appliqué par les options d\'accessibilité d\'iOS/Windows, ou des technologies comme le mode nuit, peuvent teinter l\'écran. Cela peut aussi être dû à une usure d\'un écran LCD rétroéclairé. Lancez notre test de couleur totale afin de vérifier la régularité du rendu.'
      }
    ],
    de: [
      {
        question: 'Warum ist mein Bildschirm rosa?',
        answer: 'Ein rosa Bildschirm kann auf ein Hardware- oder Softwareproblem hinweisen. Bei Computermonitoren und Fernsehern (wie einem rosa Bildschirm beim Samsung TV) wird dies oft durch ein loses HDMI-Kabel, beschädigte Anschlusskontakte oder veraltete Grafiktreiber verursacht. Auf einem iPhone oder MacBook kann ein plötzlicher rosa Bildschirm ein temporärer Softwarefehler oder ein Displayschaden sein.'
      },
      {
        question: 'Was bedeutet ein rosa Bildschirm?',
        answer: 'Das Erscheinen eines rosa Bildschirms deutet meist auf Übertragungsfehler von der GPU oder Signalfehler hin. Bei schweren Hardwarefehlern spricht man vom "rosa Bildschirm des Todes". Im Alltag stellt eine leere rosa Bildschirmseite einfach eine einfarbige Fläche für weiches Fotolicht oder Monitortests dar.'
      },
      {
        question: 'Wie bekomme ich einen rosa Startbildschirm auf dem iPhone?',
        answer: 'Gehen Sie am iPhone zu Einstellungen > Bedienungshilfen > Anzeige & Textgröße > Farbfilter. Aktivieren Sie die Filter, wählen Sie "Farbstich" und stellen Sie einen Rosaton ein. Alternativ können Sie dieses Tool als rosa Bildschirm-Taschenlampe auf dem Telefon im Vollbild verwenden.'
      },
      {
        question: 'Wie mache ich meinen Bildschirm rosa?',
        answer: 'Sie können Ihren Bildschirm ganz einfach rosa machen, indem Sie unser kostenloses Online-Farbwerkzeug aufrufen, den Rosa-Ton auswählen und den Vollbild-Button anklicken (oder einfach die Taste "F" auf Ihrer Tastatur drücken).'
      },
      {
        question: 'Existiert rosa Licht?',
        answer: 'Physikalisch gesehen existiert Rosa nicht als einzelne Wellenlänge im elektromagnetischen Spektrum. Stattdessen nimmt das menschliche Auge einen rosa Lichteffekt wahr, wenn gleichzeitig rote und blaue Lichtwellen gemischt werden. Mit einem hellrosa Bildschirm oder knallrosa Bildschirm lässt sich dieser effekt simulieren.'
      },
      {
        question: 'Was hat es mit dem rosa Bildschirm auf sich?',
        answer: 'Die Nutzung eines rosa Bildschirms dient in erster Linie als kreatives Hilfsmittel: zum Beleuchten von Selfies oder Videocalls, als weicher Hintergrund für TikTok-Videos, zum Abzeichnen von Bildern oder als Diagnosewerkzeug beim Monitorreinigen, um Staub und defekte Pixel aufzuspüren.'
      },
      {
        question: 'Warum ist mein Bildschirm hellrosa?',
        answer: 'Ein hellrosa Bildschirm-Farbstich deines Geräts liegt meist an aktivierten Farbfiltern, dem Nachtmodus oder True-Tone-Regulierung. Bei älteren LCD-Panels kann es auch ein Zeichen für Abnutzung der Kathoden-Beleuchtung sein. Nutzen Sie unser Diagnosetool, um die Farbreinheit Ihres Monitors zu beurteilen.'
      }
    ],
    hi: [
      {
        question: 'मेरी स्क्रीन गुलाबी क्यों है?',
        answer: 'गुलाबी स्क्रीन हार्डवेयर या सॉफ्टवेयर की समस्या का संकेत हो सकती है। कंप्यूटर मॉनिटर और टीवी (जैसे सैमसंग टीवी गुलाबी स्क्रीन) पर, यह अक्सर ढीले एचडीएमआई केबल, खराब कनेक्शन पिन या पुराने ग्राफिक्स ड्राइवर के कारण होता है। आईफोन या मैकबुक पर, अचानक गुलाबी स्क्रीन आना एक अस्थायी सॉफ्टवेयर गड़बड़ी या स्क्रीन को हुए भौतिक नुकसान का संकेत हो सकता है।'
      },
      {
        question: 'मेरी स्क्रीन का गुलाबी होना क्या दर्शाता है?',
        answer: 'एक गुलाबी स्क्रीन आमतौर पर इंगित करती है कि डिस्प्ले सिग्नल या हार्डवेयर में कोई समस्या है। अधिक गंभीर मामलों में, इसे "पिंक स्क्रीन ऑफ डेथ" (जीपीयू क्रैश) कहा जाता है। आम उपयोग और डिजायन कला में, एक खाली गुलाबी स्क्रीन सिर्फ एक ठोस रंग का कैनवास है जिसका उपयोग फोटो लाइटिंग या स्क्रीन परीक्षण के लिए किया जाता है।'
      },
      {
        question: 'आईफोन के लिए गुलाबी होम स्क्रीन कैसे प्राप्त करें?',
        answer: 'आईफोन के लिए गुलाबी होम स्क्रीन प्राप्त करने के लिए, आप आईओएस कलर फिल्टर सेटिंग्स को कॉन्फ़िगर कर सकते हैं। इसके लिए सेटिंग्स > एक्सेसिबिलिटी > डिस्प्ले एंड टेक्स्ट साइज > कलर फिल्टर पर जाएं, उन्हें चालू करें, "कलर टिंट" चुनें, और एक गुलाबी रंग का चयन करें। आप फ़ोटो के लिए हमारे ऑनलाइन टूल का भी उपयोग कर सकते हैं।'
      },
      {
        question: 'मैं अपनी स्क्रीन को गुलाबी कैसे करूँ?',
        answer: 'आप हमारे मुफ्त ऑनलाइन पिंक स्क्रीन टूल पर जाकर अपनी स्क्रीन को आसानी से गुलाबी बना सकते हैं। बस अपने पीसी, मोबाइल या टीवी पर यह टूल खोलें और पूरी स्क्रीन को गुलाबी करने के लिए फुलस्क्रीन बटन पर क्लिक करें या कीबोर्ड पर "F" दबाएं।'
      },
      {
        question: 'क्या गुलाबी रोशनी का कोई अस्तित्व है?',
        answer: 'वैज्ञानिक रूप से, गुलाबी रंग इलेक्ट्रोमैग्नेटिक स्पेक्ट्रम पर एक स्वतंत्र तरंग दैर्ध्य (वेवलेंथ) के रूप में मौजूद नहीं है। इसके बजाय, जब लाल और नीले प्रकाश तरंगों को एक साथ मिलाया जाता है, तो आपका मस्तिष्क गुलाबी प्रकाश प्रभाव को महसूस करता है। फोटोग्राफी के लिए एक चमकीली या हल्की गुलाबी स्क्रीन का उपयोग करें।'
      },
      {
        question: 'यह पिंक स्क्रीन क्या चीज है?',
        answer: '"पिंक स्क्रीन" वास्तव में वह माध्यम है जिसके तहत लोग वीडियो कॉल में चेहरे पर हल्की रोशनी डालने, यूट्यूब वीडियो के लिए एक सुंदर बैकग्राउंड सेट करने, या मॉनिटर की सफाई के दौरान डेड पिक्सेल का निरीक्षण करने के लिए फुल पिंक स्क्रीन का उपयोग करते हैं।'
      },
      {
        question: 'मेरी स्क्रीन हल्की गुलाबी क्यों है?',
        answer: 'आपकी स्क्रीन का रंग हल्का गुलाबी होने का कारण एक्टिव कलर फिल्टर, नाइट मोड (नाईट शिफ्ट) की सक्रियता या आपके डिस्प्ले पैनल का पुराना होना हो सकता है। हमारे टूल का उपयोग करके आप विभिन्न रंगों के स्तरों की तुलना कर सकते हैं और डिस्प्ले की कलर यूनिफॉर्मिटी जांच सकते हैं।'
      }
    ],
    ja: [
      {
        question: '画面がピンク色になるのはなぜですか？',
        answer: '画面が突然ピンク色になるのは、ハードウェアまたはソフトウェアの問題を示しています。パソコン用モニターやテレビ（Samsungのテレビなど）では、HDMIケーブルの緩み、コネクタピンの曲がり、またはグラフィックドライバー of 破損が主な原因です。iPhoneやMacBookの場合、一時的なシステムエラーや、液晶パネル自体の故障・破損が考えられます。'
      },
      {
        question: 'ピンクの画面は何を意味しますか？',
        answer: '画面がピンク一色になる場合、一般的にはディスプレイ信号の伝送エラーかハードウェアのトラブルを意味します。致命的なクラッシュの場合は「ピンクスクリーンオブデス」と呼ばれます。一方、日常的な使用例では、撮影時の照明用背景や液晶パネルの点検用として一時的に映す無地のピンク表示を意味します。'
      },
      {
        question: 'iPhoneのホーム画面をピンクにする方法は？',
        answer: 'iPhoneのホーム画面をピンク色に調整するには、iOSの設定アプリから「アクセシビリティ」＞「画面表示とテキストサイズ」＞「カラーフィルタ」をオンにし、「色合い」でピンク（赤系統）を選択します。また、当サイトをSafariで起動しフルスクリーンで使用することで手軽なピンクライトとしても使えます。'
      },
      {
        question: '画面をピンク色にするにはどうすればよいですか？',
        answer: '当サイトの無料オンライン「ピンク画面」ツールを使い、ブラウザで起動するのが最も簡単です。PCやスマートフォンでツールを開き、全画面ボタンをクリックするか、キーボードの「F」キーを押すだけで、画面一面をピンク色の単一カラーに切り替えられます。'
      },
      {
        question: 'ピンク色の光は科学的に存在しますか？',
        answer: '科学的には、ピンクは単一の物理的な波長を持つ光（スペクトル色）ではなく、赤色と青色の光（または紫の波長）が混合したものです。目の赤と青の受容体が同時に刺激を感知すると、脳はそれを「ピンク」の光効果として認識します。撮影用の照明やムードライトとして本ツールを活用できます。'
      },
      {
        question: 'ピンク画面の用途には何がありますか？',
        answer: '「ピンク画面」は、動画配信の明るいバックグラウンド、ビデオ通話時の顔色を優しく照らす間接照明、デザイン用のカラーインスピレーションなどに活用されます。また、液晶ディスプレイを清掃する際、画面の汚れやデッドピクセル（ドット抜け）を見つけやすくする掃除用としても使用されます。'
      },
      {
        question: '画面が薄いピンク色なのはなぜですか？',
        answer: 'ディスプレイ全体がうっすらとライトピンクを帯びている場合、iOSやWindowのカラーフィルタ、夜間モード（Night Shiftなど）、True Toneの調整が要因として考えられます。また、古い液晶パネルの劣化で偏色している疑いもあります。全画面表示でムラや輝度をテストして状態を確認してください。'
      }
    ]
  },
  'cyan-screen': {
    en: [
      {
        question: 'What is a cyan screen? (What does a cyan screen mean?)',
        answer: 'A cyan screen is a fullscreen display of a pure cyan color (#00e5ff), which is a bright, soothing blend of green and blue light. It is commonly used as a cool ambient light, a display calibration test, or a creative photo background.'
      },
      {
        question: 'How to get a cyan screen? (How do I make my screen cyan?)',
        answer: 'Simply visit our Cyan Screen tool and click the "Fullscreen" button or press the "F" key on your keyboard. This will instantly turn your computer monitor or mobile device screen into a solid, bright cyan field.'
      },
      {
        question: 'Does cyan light exist?',
        answer: 'Yes, cyan light exists both as a spectral color (a light wavelength of around 490–520 nanometers) and as a subtractive primary color. It is made by mixing equal amounts of blue and green light.'
      },
      {
        question: 'What is a cyan screen used for?',
        answer: 'It is widely used by UI designers to test color correctness, by photographers as a cyan background or cool fill light, by users seeking a calming cyan screen saver, and for cleaning displays to reveal dust.'
      },
      {
        question: 'Why is my screen cyan? (Why did my monitor turn cyan/blue?)',
        answer: 'An accidental cyan tint or "cyan screen of death" usually indicates a physical cable issue (loose VGA/HDMI connection showing cyan/blue filter) or a software color management conflict. Use our solid cyan screen tool to verify color homogeneity.'
      }
    ],
    es: [
      {
        question: '¿Qué es una pantalla cian? (¿Qué significa una pantalla cian?)',
        answer: 'Una pantalla cian es un campo de color cian puro (#00e5ff), una luz fresca que mezcla verde y azul. Se utiliza como luz ambiental relajante, prueba de monitores o fondo creativo para fotos.'
      },
      {
        question: '¿Cómo obtener una pantalla cian? (¿Cómo hago mi pantalla cian?)',
        answer: 'Entra en nuestra herramienta de Pantalla Cian y presiona el botón "Pantalla Completa" o la tecla "F". Esto convertirá instantáneamente la pantalla de tu móvil o computadora en un fondo cian completo.'
      },
      {
        question: '¿Existe la luz cian?',
        answer: 'Sí, la luz cian existe como color espectral (con una longitud de onda de unos 490 a 520 nanómetros) y se produce mezclando cantidades iguales de luz azul y verde en pantallas RGB.'
      },
      {
        question: '¿Para qué sirve una pantalla cian?',
        answer: 'Sirve para revisar píxeles de color en pantallas, como luz de relleno fría para fotos y retratos, como salvapantallas cian relajante o para detectar suciedad en el cristal de tus dispositivos.'
      },
      {
        question: '¿Por qué mi pantalla está cian?',
        answer: 'Si la pantalla muestra un tinte cian permanente, puede ser por un cable HDMI o VGA mal conectado, un perfil de color erróneo o un problema gráfico en la GPU. Usa nuestro fondo cian sólido para comprobar si la pantalla responde bien.'
      }
    ],
    pt: [
      {
        question: 'O que é uma tela ciano? (O que significa uma tela ciano?)',
        answer: 'Uma tela ciano é uma exibição em tela cheia do azul-piscina ou ciano puro (#00e5ff), combinando luz verde e azul. É muito usada para iluminação fria de fundo, testes de cor de monitores ou fundos fotográficos.'
      },
      {
        question: 'Como conseguir uma tela ciano? (Como deixar a tela ciano?)',
        answer: 'Basta acessar a nossa ferramenta de Tela Ciano e clicar no botão "Tela Cheia" ou apertar a tecla "F". A sua tela ficará totalmente preenchida pela cor ciano sólido.'
      },
      {
        question: 'A luz ciano existe?',
        answer: 'Sim, a luz ciano existe tanto como cor espectral (com comprimento de onda entre 490 e 520 nanômetros) quanto pela combinação RGB de intensidades iguais de luz azul e verde.'
      },
      {
        question: 'Para que serve a tela ciano?',
        answer: 'É usada como protetor de tela ciano, luz de preenchimento fria para fotos e vídeos, pelos designers para verificação de contraste de interface e para limpeza de display por destacar poeira.'
      },
      {
        question: 'Por que minha tela está ciano?',
        answer: 'Um tom ciano involuntário geralmente aponta para cabos de vídeo (HDMI/VGA) frouxos, defeito de solda no conector do monitor ou desajuste no perfil de cor do sistema. Use nosso site para checar se a tela exibe canais RGB corretamente.'
      }
    ],
    fr: [
      {
        question: "Qu'est-ce qu'un écran cyan ? (Que signifie un écran cyan ?)",
        answer: 'Un écran cyan est un affichage plein écran de couleur cyan uni (#00e5ff), combinant lumière bleue et verte. Il sert de lumière d\'ambiance froide, de test d\'affichage ou d\'arrière-plan de studio.'
      },
      {
        question: 'Comment obtenir un écran cyan ? (Comment rendre mon écran cyan ?)',
        answer: 'Ouvrez notre outil d\'Écran Cyan et cliquez sur le bouton "Plein écran" ou appuyez sur "F". L\'affichage de votre ordinateur ou appareil mobile deviendra instantanément bleu-vert cyan.'
      },
      {
        question: 'La lumière cyan existe-t-elle ?',
        answer: 'Oui, la lumière cyan existe scientifiquement dans le spectre visible (longueur d\'onde de 490 à 520 nm) et est une couleur primaire soustractive formée par le mélange équilibré de bleu et de vert.'
      },
      {
        question: 'À quoi sert un écran cyan ?',
        answer: 'Il est utilisé comme économiseur d\'écran cyan apaisant, comme source de lumière cyan pour la photo et la vidéo, pour vérifier la colorimétrie des dalles LCD/OLED, et pour nettoyer les écrans.'
      },
      {
        question: 'Pourquoi mon écran est-il cyan ?',
        answer: 'Un affichage anormalement cyan est souvent causé par un câble vidéo mal branché (perte du canal rouge), un mauvais étalonnage logiciel ou une panne matérielle. Testez votre écran sur cette page pour isoler le problème.'
      }
    ],
    de: [
      {
        question: 'Was ist ein cyanfarbener Bildschirm? (Was bedeutet ein Cyan Bildschirm?)',
        answer: 'Ein Cyan Bildschirm ist eine Vollbildanzeige der reinen Farbe Cyan (#00e5ff), einer Mischung aus blauem und grünem Licht. Er wird als kühles Umgebungslicht, Designhintergrund oder zur Displaykalibrierung verwendet.'
      },
      {
        question: 'Wie bekomme ich einen cyanfarbenen Bildschirm? (Wie mache ich meinen Bildschirm cyan?)',
        answer: 'Wählen Sie einfach unser Cyan Bildschirm-Tool aus und klicken Sie auf die Schaltfläche "Vollbild" oder drücken Sie die Taste "F". Ihr Monitor oder Smartphone-Display wird sofort komplett cyanfarben.'
      },
      {
        question: 'Gibt es cyanfarbenes Licht?',
        answer: 'Ja, cyanfarbenes Licht existiert als Spektralfarbe mit einer Wellenlänge von etwa 490–520 Nanometern sowie als additive Farbmischung aus blauem und grünem Licht auf Monitoren.'
      },
      {
        question: 'Wofür wird ein Cyan Bildschirm verwendet?',
        answer: 'Häufige Verwendungszwecke sind die Fotobelichtung mit kühlem Fülllicht, die Nutzung als erholsamer Cyan Bildschirmschoner, die Überprüfung von Farbkanälen sowie das Erkennen von Schmutz beim Reinigen des Monitors.'
      },
      {
        question: 'Warum is mein Bildschirm cyanfarben?',
        answer: 'Ein ungewollter Cyan-Farbstich deutet meist auf ein lockeres Monitorkabel (z. B. HDMI/VGA) hin, bei dem der Rotkanal fehlt, oder auf veränderte Farbeinstellungen. Prüfen Sie Ihr Display mit unserer Vollbildfläche.'
      }
    ],
    hi: [
      {
        question: 'स्यान स्क्रीन क्या है? (स्यान स्क्रीन का क्या अर्थ है?)',
        answer: 'स्यान स्क्रीन (Cyan Screen) एक पूर्ण स्क्रीन प्रदर्शित करने वाला शुद्ध नीला-हरा रंग (#00e5ff) है। यह मुख्य रूप से कूल एम्बिएंट लाइटिंग, डिस्प्ले कैलिब्रेशन और रचनात्मक फोटोग्राफी बैकग्राउंड के रूप में उपयोग की जाती है।'
      },
      {
        question: 'स्क्रीन को स्यान कैसे बनाएं? (How do I make my screen cyan?)',
        answer: 'हमारे स्यान स्क्रीन ऑनलाइन टूल पर जाएं और "फ़ुलस्क्रीन" बटन पर क्लिक करें या कीबोर्ड पर "F" दबाएं। आपकी स्क्रीन तुरंत चमकीली स्यान रंग में बदल जाएगी।'
      },
      {
        question: 'क्या स्यान प्रकाश (Cyan Light) का अस्तित्व है?',
        answer: 'हाँ, स्यान प्रकाश दृश्य स्पेक्ट्रम में लगभग 490–520 नैनोमीटर तरंगदैर्ध्य (wavelength) के साथ प्राकृतिक रूप से मौजूद है, और स्क्रीन पर यह नीले और हरे रंग के प्रकाश के मिश्रण से बनता है।'
      },
      {
        question: 'स्यान स्क्रीन का उपयोग किस लिए किया जाता है?',
        answer: 'इसका उपयोग फ़ोटोग्राफ़र द्वारा स्यान बैकग्राउंड या चेहरे पर ठंडी लाइट डालने, डिज़ाइनरों द्वारा कलर ग्रेडिंग जांचने, और स्क्रीन साफ करते समय धूल के कणों को देखने के लिए किया जाता है।'
      },
      {
        question: 'मेरी स्क्रीन स्यान रंग की क्यों हो गई है?',
        answer: 'यदि डिस्प्ले पर अचानक अप्राकृतिक स्यान रंग दिखता है, तो यह ढीले VGA/HDMI केबल, मॉनिटर के रेड कलर चैनल में खराबी, या कलर प्रोफाइल एरर के कारण हो सकता है। हमारे पेज की मदद से इसकी जांच करें।'
      }
    ],
    ja: [
      {
        question: 'シアン画面とは何ですか？ (シアン画面の意味)',
        answer: 'シアン画面（Cyan Screen）とは、緑と青がバランスよく混ざった鮮やかなシアン色（#00e5ff）をディスプレイに全画面表示するツールです。冷涼な雰囲気の間接照明、モニターの発色テスト、撮影用の背景として活用されます।'
      },
      {
        question: '画面をシアン色にするにはどうすればよいですか？',
        answer: '当サイトのシアン画面ツールにアクセスし、「全画面」ボタンをクリックするか、キーボードの「F」キーを押すだけで、PCやスマートフォンの画面が瞬時にきれいなシアンに変わります。'
      },
      {
        question: 'シアンの光は実際に存在しますか？',
        answer: 'はい、シアンの光は可視光線の波長において約490〜520ナノメートルに位置する単一色として存在します。RGBディスプレイ上では、青色と緑色の光を同等の強さで発光させることで表現されます।'
      },
      {
        question: 'シアン画面はどのような用途に使われますか？',
        answer: '写真の涼しげな背景照明（撮影用シアンライト）、目に優しいシアンのスクリーンセーバー、ウェブデザイン時の配色確認、また画面を清掃する際、ホコリや傷を検知するために使われます।'
      },
      {
        question: 'ディスプレイがシアンっぽく（青緑に）なるのはなぜですか？',
        answer: '画面全体がシアン色に偏っている場合、VGAケーブルやHDMI接続ピンの緩みによる赤入力チャンネルの欠落、グラフィックカードのスリープ復帰エラー、またはOSのカラーマネジメント異常が疑われます。本ツールのベタ塗り画面で液晶自体に異常がないか切り分けてください।'
      }
    ]
  },
  'brown-screen': {
    en: [
      {
        question: 'What is a brown screen used for?',
        answer: 'A brown screen is used for reducing eye strain during night screen time, easing visual fatigue with low-contrast warmth, and promoting grounding and steady focus. It is also used as cozy room lighting, warm photography backdrops, or for testing color calibration on displays.'
      },
      {
        question: 'Is brown good for sleep?',
        answer: 'Yes. Because brown has zero blue light output, it prevents melatonin suppression, making it one of the most soothing colors for late-night device use and preparing your body for restful sleep.'
      },
      {
        question: 'Can brown help with anxiety?',
        answer: 'Yes, brown is psychologically associated with the earth, stability, and security. Viewing a solid brown screen can foster a sense of being rooted and safe, which helps counter restlessness and reduce anxiety.'
      },
      {
        question: 'Why does brown feel calming?',
        answer: 'Throughout evolutionary history, humans lived surrounded by natural brown tones like soil, wood, and stone. Our brains are hardwired to recognize brown as familiar, safe, and stable, creating an subconscious feeling of calm.'
      },
      {
        question: 'What chakra is brown associated with?',
        answer: 'Brown is closely associated with the Root Chakra (Mula-dhara), which governs stability, basic survival needs, grounding, and our connection to the physical earth.'
      }
    ],
    es: [
      {
        question: '¿Para qué sirve una pantalla marrón?',
        answer: 'Se utiliza para reducir la fatiga visual en la noche, facilitar un enfoque constante y lograr conexión a la tierra (grounding). También sirve como luz de ambiente acogedora, iluminación cálida para retratos o como fondo de fotografía.'
      },
      {
        question: '¿Es el marrón bueno para dormir?',
        answer: 'Sí, debido a que emite una luz muy cálida sin luz azul, ayuda a evitar la supresión de la melatonina, preparando tu mente y cuerpo para un sueño reparador en la noche.'
      },
      {
        question: '¿Puede el marrón aliviar la ansiedad?',
        answer: 'Sí, el marrón se vincula psicológicamente con la estabilidad del suelo, la seguridad y el refugio. Ver una pantalla marrón sólido puede calmar una mente inquieta, promoviendo una sensación de serenidad.'
      },
      {
        question: '¿Por qué el marrón produce calma?',
        answer: 'Los humanos evolucionamos rodeados de tonos tierra, corteza de árboles y rocas. Nuestro cerebro interpreta instintivamente estos colores tierra como entornos seguros y familiares, reduciendo la agitación mental.'
      },
      {
        question: '¿Con qué chakra se asocia el color marrón?',
        answer: 'El marrón se asocia con el Chakra Raíz (Muladhara), que rige el sentido de supervivencia, la estabilidad, la conexión física y el enraizamiento con la tierra.'
      }
    ],
    pt: [
      {
        question: 'Para que serve uma tela marrom?',
        answer: 'É usada para reduzir o cansaço ocular à noite, promover foco contínuo e fazer grounding (enraizamento). Também serve para criar uma iluminação aconchegante de quarto, preenchimento de fotos com tom quente ou testes de dalles.'
      },
      {
        question: 'O marrom é bom para o sono?',
        answer: 'Sim. A cor marrom possui uma emissão mínima de luz azul. Ela não atrapalha a produção de melatonina, sendo ideal para relaxamento antes de deitar e para uma ótima qualidade de sono.'
      },
      {
        question: 'O marrom pode ajudar com a ansiedade?',
        answer: 'Sim, a psicologia das cores conecta o marrom à terra, estabilidade e proteção física. Olhar para uma tela marrom sólida em momentos tensos ajuda a desacelerar a mente e reduzir o sentimento de incerteza.'
      },
      {
        question: 'Por que o marrom traz sensação de calma?',
        answer: 'Nós evoluímos cercados por marrons naturais (terra firme, troncos, rochas). O cérebro humano decodifica tons terrosos como sinônimos de abrigo e estabilidade evolutiva, acalmando o sistema nervoso central.'
      },
      {
        question: 'Qual chakra está associado ao marrom?',
        answer: 'O marrom está ligado ao Chakra Básico ou Raiz (Muladhara), que representa a nossa conexão com a terra física, ancoragem, segurança essencial e estabilidade.'
      }
    ],
    fr: [
      {
        question: 'À quoi sert un écran marron ?',
        answer: 'Il sert à limiter la fatigue oculaire la nuit, à stimuler une concentration calme et à favoriser l\'enracinement (grounding). On l\'utilise aussi comme éclairage chaleureux de cabine, arrière-plan sépia ou test colorimétrique.'
      },
      {
        question: 'Le marron est-il bon pour le sommeil ?',
        answer: 'Oui. N\'émettant aucune lumière bleue nocive, la couleur marron ne perturbe pas la synthèse de la mélatonine, ce qui prépare idéalement votre cerveau à s\'endormir.'
      },
      {
        question: 'Le marron aide-t-il contre l\'anxiété ?',
        answer: 'Oui, le marron est lié à la terre et à la stabilité d\'un foyer sûr. Fixer une image entièrement marron procure un ancrage solide qui apaise le stress et tempère l\'agitation mentale.'
      },
      {
        question: 'Pourquoi le marron est-il si relaxant ?',
        answer: 'Au fil de l\'évolution, l\'homme a vécu entouré de brun (sol, bois, écorce). Notre inconscient associe ces teintes à la sécurité des éléments naturels, installant ainsi un climat de sérénité.'
      },
      {
        question: 'À quel chakra la couleur marron est-elle associée ?',
        answer: 'Le marron est associé au Chakra Racine (Muladhara), symbole de stabilité, d\'assise matérielle, d\'enracinement à la terre et de survie.'
      }
    ],
    de: [
      {
        question: 'Wofür wird ein brauner Bildschirm verwendet?',
        answer: 'Er dient zur Reduzierung der Augenbelastung im Dunkeln, zur Förderung von Fokus und mentaler Erdung (Grounding), als gemütliches Studiolicht oder warmer Sepia-Hintergrund für die Kameraästhetik.'
      },
      {
        question: 'Ist Braun gut für den Schlaf?',
        answer: 'Ja. Ein braunes Display emittiert quasi kein Blaulicht, wodurch die Ausschüttung von Melatonin nicht blockiert wird. Das macht es ideal für die Bildschirmnutzung vor dem Schlafengehen.'
      },
      {
        question: 'Hilft Braun bei Angstzuständen?',
        answer: 'Ja, Braun vermittelt ein Gefühl von Solidität, Verlässlichkeit und Schutz. Die ruhige, erdfarbene Fläche wirkt ausgleichend und hilft, eine überreizte Psyche bei Stress oder Panik zu zentrieren.'
      },
      {
        question: 'Warum wirkt Braun beruhigend?',
        answer: 'Aus evolutionärer Sicht waren Menschen stets von Erdtönen, Holz und Felsen umgeben. Unser Gehirn stuft braune Nuancen intuitiv als naturnah und vertraut ein, was zu einer unbewussten Beruhigung führt.'
      },
      {
        question: 'Welchem Chakra wird die Farbe Braun zugeordnet?',
        answer: 'Braun wird dem Wurzelchakra (Muladhara) zugeordnet, welches für Urvertrauen, Stabilität, Selbsterhaltung und die Erdung steht.'
      }
    ],
    hi: [
      {
        question: 'भूरी स्क्रीन (Brown Screen) का उपयोग किस लिए किया जाता है?',
        answer: 'इसका उपयोग रात में आंखों के तनाव को कम करने, स्थिरता (grounding) बढ़ाने, कमरे को कोजी लुक देने, फोटोग्राफी में गर्म सेपिया लाइटिंग करने और डिस्प्ले कलर टोन जांचने के लिए किया जाता है।'
      },
      {
        question: 'क्या भूरा रंग नींद के लिए अच्छा है?',
        answer: 'हाँ, भूरे रंग में ब्लू लाइट नगण्य होती है, जो हार्मोन मेलाटोनिन के स्तर को कम नहीं होने देती। इसलिए रात में सोने से पहले इस स्क्रीन को चालू रखने से नींद में खलल नहीं पड़ता।'
      },
      {
        question: 'क्या भूरा रंग चिंता (Anxiety) को दूर करने में मदद कर सकता है?',
        answer: 'हाँ, मनोवैज्ञानिक रूप से भूरा रंग धरती, स्थिरता और सुरक्षा की भावना से जुड़ा है। ठोस भूरी स्क्रीन को देखने से दिमाग शांत होता है और मानसिक तनाव या घबराहट कम होती है।'
      },
      {
        question: 'भूरा रंग शांत और आरामदायक क्यों महसूस कराता है?',
        answer: 'मानव विकास की शुरुआत मिट्टी, लकड़ी, पेड़ों की छाल और चट्टानों के साए में हुई है। हमारा अवचेतन मन इन प्राकृतिक रंगों को सुरक्षित और विश्वसनीय मानता है, जिससे शांति का अहसास होता है।'
      },
      {
        question: 'भूरा रंग किस चक्र से संबंधित है?',
        answer: 'भूरा रंग \'मूलाधार चक्र\' (Root Chakra) से संबंधित है, जो स्थिरता, जीवन की बुनियादी सुरक्षा, और भौतिक पृथ्वी से हमारे संबंध का संचालन करता है।'
      }
    ],
    ja: [
      {
        question: '茶色画面はどのような用途に使われますか？',
        answer: '夜間のブルーライト低減によるドライアイ軽減、集中力維持、グラウンディング（地に足を付ける瞑想）に使用されます。また、木目調のコジーなインテリアの間接照明、セピア写真の背景光源、液晶検査にも適しています।'
      },
      {
        question: '茶色は睡眠に良い影響を与えますか？',
        answer: 'はい。茶色は脳を覚醒させるブルーライトをほぼ含まないため、睡眠を促進するホルモンであるメラトニンの分泌を妨げず、就寝前のディスプレイテストとして非常に優秀です。'
      },
      {
        question: '茶色は不安（アンザエティ）の和らげに効果的ですか？',
        answer: 'はい、色彩心理学において茶色は大地、安定、安全性の象徴です。無地の茶色の光を見つめることで心が落ち着き、現実へのつながりを感じることでストレスや不安感情を和らげます。'
      },
      {
        question: 'なぜ茶色は心を落ち着かせるのですか？',
        answer: '人類は進化の過程で、土や樹木、岩など自然界の茶色に囲まれて暮らしきました。私たちの脳は本能的に茶色を「なじみ深く、安定した安全な場所」と認識するため、心が深く落ち着きます。'
      },
      {
        question: '茶色はどのチャクラに関連していますか？',
        answer: '茶色は「第1チャクラ（ルートチャクラ／尾骨のチャクラ）」に深く関連しており、グラウンディング、生命力、精神 of 安定、地球へのつながりを司ります。'
      }
    ]
  },
  'grey-screen': {
    en: [
      {
        question: 'What is Gray Screen used for?',
        answer: 'A Gray Screen is commonly used for monitor uniformity checks, color balance tests, and checking display defects. It also provides a neutral, glare-free background for product photography, design previews, and VFX editing.'
      },
      {
        question: 'Does a gray screen help find backlight bleed?',
        answer: 'Yes. While black screens show total bleed, a neutral gray screen is excellent for identifying subtle clouding, uneven backlight distribution, and dirty screen effect (DSE) across the panel.'
      },
      {
        question: 'How do I enter or exit fullscreen?',
        answer: 'Simply click anywhere on the gray canvas or use the fullscreen control button. On desktop browsers, you can also press F11 or the "F" shortcut key. To exit, press "Esc".'
      },
      {
        question: 'Can I download a gray image?',
        answer: 'Yes, you can generate and download custom gray layouts. Using the toolbar control, you can export a solid gray canvas in 1080p, 4K, or custom resolutions as a PNG image.'
      },
      {
        question: 'Can I choose a specific gray shade?',
        answer: 'Yes. You can pick preset tones or use our custom color picker with exact HEX or RGB inputs to get exactly a 50% gray screen, dark gray screen, or light gray screen.'
      },
      {
        question: 'What is a gray screen test?',
        answer: 'A gray screen test displays a solid gray color across the entire panel to evaluate how evenly a monitor, tablet, TV, or laptop renders mid-tones without being blinded by pure bright white.'
      },
      {
        question: 'Is grey screen test the same as gray screen test?',
        answer: 'Yes, "grey screen test" and "gray screen test" describe the same diagnostic method. "Gray" is the spelling standard in American English, whereas "grey" is favored in British English.'
      },
      {
        question: 'Which gray color is used by default?',
        answer: 'The default gray color is #808080 (RGB 128, 128, 128), which is the standard 50% gray tone.'
      },
      {
        question: 'Can gray screen test monitor uniformity?',
        answer: 'Yes, a gray uniformity test is the most popular way to check monitor uniformity since variations in illumination and panel tint stand out clearly on neutral mid-tones.'
      },
      {
        question: 'When should I use a dark gray screen test?',
        answer: 'Use a dark gray screen test (like 5% or 10% gray) to check OLED displays for burn-in, inspect LCD screens for low-luminance bleeding, or test cameras under dim but balanced lighting conditions.'
      }
    ],
    es: [
      {
        question: '¿Para qué se utiliza la Pantalla Gris?',
        answer: 'La pantalla gris se usa comúnmente para comprobar la uniformidad del monitor, verificar el balance de color y buscar defectos. También sirve de fondo neutro para fotografía de productos y edición VFX.'
      },
      {
        question: '¿Ayuda una pantalla gris a detectar fugas de retroiluminación?',
        answer: 'Sí. Una pantalla gris neutra es muy efectiva para identificar sutiles manchas nubladas, distribución desigual de la luz y el efecto de pantalla sucia (DSE) en el panel.'
      },
      {
        question: '¿Cómo entro o salgo de la pantalla completa?',
        answer: 'Simplemente haz clic en el lienzo gris o usa el botón de pantalla completa. En ordenadores, puedes presionar la tecla F11 o la tecla rápida "F". Pulsa "Esc" para salir.'
      },
      {
        question: '¿Puedo descargar una imagen gris?',
        answer: 'Sí. Utiliza los controles de descarga integrados para guardar un fondo gris sólido en 1080p, 4K o resoluciones personalizadas como una imagen PNG de alta calidad.'
      },
      {
        question: '¿Puedo elegir un tono de gris específico?',
        answer: 'Sí. Puedes usar los controles de color o el selector personalizado para ajustar el tono exacto (como gris oscuro o gris al 50%) mediante valores HEX o RGB.'
      },
      {
        question: '¿Qué es una prueba de pantalla gris?',
        answer: 'Es un test que muestra un color gris sólido en todo el panel para evaluar cómo renderiza el dispositivo los tonos medios sin el brillo cegador del blanco puro.'
      },
      {
        question: '¿Es "grey screen test" lo mismo que "gray screen test"?',
        answer: 'Sí, se refieren al mismo procedimiento. La diferencia es regional, "gray" se prefiere en inglés americano y "grey" en inglés británico.'
      },
      {
        question: '¿Qué color gris se utiliza por defecto?',
        answer: 'El color gris predeterminado es #808080 (RGB 128, 128, 128), que representa el estándar de gris al 50%.'
      },
      {
        question: '¿Puede comprobar la uniformidad del monitor la prueba de pantalla gris?',
        answer: 'Sí, la prueba de uniformidad gris es muy recomendada porque las variaciones de retroiluminación y sombras destacan claramente en un tono medio neutro.'
      },
      {
        question: '¿Cuándo debo usar una prueba de pantalla gris oscuro?',
        answer: 'Usa una prueba de gris oscuro (como 5% o 10% de gris) para revisar quemados en pantallas OLED, comprobar fugas de luz en entornos de bajo brillo, o para VFX.'
      }
    ],
    pt: [
      {
        question: 'Para que é usada a Tela Cinza?',
        answer: 'A tela cinza é usada para testes de uniformidade do monitor, calibração de contraste e identificação de defeitos de cores. Funciona também como fundo neutro para fotografias de produtos e composições VFX.'
      },
      {
        question: 'Uma tela cinza ajuda a encontrar vazamento de luz?',
        answer: 'Sim. A tela cinza neutra é excelente para identificar manchas nubladas sutis, má distribuição de brilho e o efeito de tela suja (DSE) em novos painéis LCD ou LED.'
      },
      {
        question: 'Como eu entro ou saio do modo tela cheia?',
        answer: 'Dê um clique em qualquer área cinza ou use o botão de controle de tela cheia. Em navegadores de computador, aperte F11 ou a atalho "F". Para sair, pressione "Esc".'
      },
      {
        question: 'Posso baixar uma imagem cinza?',
        answer: 'Sim. Por meio do painel de download, você pode salvar a tela cheia cinza nas dimensões de 1080p, 4K ou resoluções personalizadas em formato PNG sem compressão.'
      },
      {
        question: 'Posso escolher um tom de cinza específico?',
        answer: 'Sim. Customize o matiz em nossa caixa de controle usando códigos de cores HEX ou RGB para obter cinza 50%, cinza escuro ou tons de cinza claro.'
      },
      {
        question: 'O que é um teste de tela cinza?',
        answer: 'Consiste em exibir uma cor cinza neutra lisa em toda a área visível do aparelho para analisar a reprodução de meio-tom sem sofrer com o brilho excessivo do branco.'
      },
      {
        question: 'O teste "grey screen" é o mesmo que o teste "gray screen"?',
        answer: 'Sim, ambos descrevem o mesmo procedimento de aferição de uniformidade. A grafia varia apenas conforme a região ("gray" nos EUA, "grey" no Reino Unido).'
      },
      {
        question: 'Qual cor cinza é usada por padrão?',
        answer: 'O cinza padrão é a tonalidade de código hexadecimal #808080 (RGB 128, 128, 128), equivalente ao cinza médio ou cinza 50%.'
      },
      {
        question: 'O teste de tela cinza pode medir a uniformidade do monitor?',
        answer: 'Sim, o teste cinza é ideal para avaliar a conformidade de displays, já que variações de matizes e vazamento do backlight saltam aos olhos nesse tom neutro.'
      },
      {
        question: 'Quando devo usar um teste de tela cinza escuro?',
        answer: 'Recomenda-se o teste cinza escuro (cinza entre 5% e 15%) para verificar retenção de brilho em displays OLED, vazamentos de luz sob pouca luz e calibragem de câmeras.'
      }
    ],
    fr: [
      {
        question: 'À quoi sert un Écran Gris ?',
        answer: 'Il est utilisé pour tester la conformité du rétroéclairage d\'un moniteur, l\'équilibre des couleurs et révéler les taches DSE. Il sert aussi de fond neutre pour les photos de produits ou la production VFX.'
      },
      {
        question: 'Un écran gris aide-t-il à repérer les fuites de lumière ?',
        answer: 'Oui, un écran gris neutre est très efficace pour identifier le backlight bleeding, les taches nuageuses et l\'effet d\'écran sale sur les dalles LCD/LED.'
      },
      {
        question: 'Comment puis-je passer en plein écran ou en sortir ?',
        answer: 'Cliquez simplement sur la partie grise centrale ou utilisez le bouton de contrôle plein écran. Sur ordinateur, appuyez sur F11 ou le raccourci "F". Pressez "Échap" pour quitter.'
      },
      {
        question: 'Puis-je télécharger une image grise ?',
        answer: 'Oui, vous pouvez enregistrer le fond gris en 1080p, 4K ou dans une taille personnalisée sous forme de fichier image PNG grâce à l\'interface de téléchargement.'
      },
      {
        question: 'Puis-je choisir une nuance de gris précise ?',
        answer: 'Oui. Le sélecteur de couleurs personnalisé vous permet d\'ajuster les coordonnées HEX ou RGB pour afficher exactement un écran gris 50% ou gris foncé.'
      },
      {
        question: 'Qu\'est-ce qu\'un test d\'écran gris ?',
        answer: 'Ce diagnostic consiste à projeter une couleur grise neutre sur tout l\'affichage pour évaluer le comportement des tons moyens sur l\'appareil sans effet d\'éblouissement.'
      },
      {
        question: 'Le test "grey screen" est-il identique au test "gray screen" ?',
        answer: 'Oui. Les deux désignent exactement la même méthode. "Gray" est employé en anglais américain et "grey" est préféré en anglais britannique.'
      },
      {
        question: 'Quel gris est affiché par défaut ?',
        answer: 'Le gris configuré d\'office est la nuance #808080 (RGB 128, 128, 128), qui correspond à la valeur exacte d\'un gris à 50%.'
      },
      {
        question: 'Le test d\'écran gris permet-il d\'évaluer l\'uniformité du moniteur ?',
        answer: 'Oui, le test d\'uniformité de gris est l\'un des meilleurs outils car les écarts de luminosité ressortent mieux sur un fond uni de ton neutre moyen.'
      },
      {
        question: 'Quand faut-il privilégier un test d\'écran gris foncé ?',
        answer: 'Utilisez un gris sombre (5% à 15%) pour contrôler la rémanence ou le burn in sur dalle OLED, mesurer les fuites de lumière dans le noir ou ajuster des plans de caméra.'
      }
    ],
    de: [
      {
        question: 'Wofür wird ein Grauer Bildschirm verwendet?',
        answer: 'Ein grauer Bildschirm wird für Monitorgleichmäßigkeitstests, Kontrasteinstellungen und zur Erkennung von Displayfehlern verwendet. Er dient zudem als neutraler VFX- und Fotohintergrund.'
      },
      {
        question: 'Hilft ein grauer Bildschirm dabei, Backlight Bleed zu finden?',
        answer: 'Ja. Ein absolut farbneutraler Grauton ist hervorragend geeignet, um Lichthöfe (Backlight Bleeding) und den bewährten Dirty-Screen-Effekt (DSE) auf dem Panel zu lokalisieren.'
      },
      {
        question: 'Wie kann ich den Vollbildmodus aktivieren oder beenden?',
        answer: 'Klicken Sie einfach auf das graue Feld oder auf die Vollbild-Schaltfläche. Am PC können Sie auch F11 oder die Schnellwahltaste "F" drücken. Beenden Sie mit der "Esc"-Taste.'
      },
      {
        question: 'Kann ich ein graues Bild herunterladen?',
        answer: 'Ja. Verwenden Sie den Download-Bereich, um die graue Grafik in 1080p, 4K oder benutzerdefinierten Größen als hochqualitative PNG-Datei herunterzuladen und lokal zu sichern.'
      },
      {
        question: 'Kann ich einen bestimmten Grauton auswählen?',
        answer: 'Ja. Sie können die Steuerung nutzen, um die exakten HEX- oder RGB-Werte zu manipulieren und so genau einen 50% grauen Bildschirm oder einen dunklen Grauton zu erzeugen.'
      },
      {
        question: 'Was ist ein grauer Bildschirm Test?',
        answer: 'Ein grauer Bildschirm Test projiziert eine flache, neutrale Graufarbe auf das Display, um die Homogenität der mittleren Tonwerte ohne störende Blendeffekte zu untersuchen.'
      },
      {
        question: 'Ist ein "grey screen test" dasselbe wie ein "gray screen test"?',
        answer: 'Ja. Beide Ausdrücke beschreiben das identische Prüfverfahren. "Gray" ist die bevorzugte Schreibweise im amerikanischen Englisch, "grey" im britischen Englisch.'
      },
      {
        question: 'Welches Grau wird standardmäßig verwendet?',
        answer: 'Standardmäßig wird die neutrale Farbe #808080 verwendet (RGB 128, 128, 128), was dem etablierten Farbwert von 50%igem Grau entspricht.'
      },
      {
        question: 'Kommen bei grauen Bildschirmtests Helligkeitsunterschiede zum Vorschein?',
        answer: 'Ja, Helligkeits- und Farbabweichungen werden auf einer neutralen Midtone-Fläche für das menschliche Auge sehr gut sichtbar, weshalb Tests sehr beliebt sind.'
      },
      {
        question: 'Wann sollte ich einen dunklen grauen Bildschirm Test machen?',
        answer: 'Wählen Sie dunkles Grau (etwa 5% bis 15% Helligkeit) zur OLED-Panelprüfung auf Einbrenneffekte, zum Aufspüren feiner Edge-Bleeding-Fehler oder für VFX-Projekte.'
      }
    ],
    hi: [
      {
        question: 'ग्रे स्क्रीन का उपयोग किस लिए किया जाता है?',
        answer: 'ग्रे स्क्रीन का उपयोग आमतौर पर मॉनिटर यूनिफ़ॉर्मिटी जांच, कंट्रास्ट कैलिब्रेशन और डिस्प्ले दोषों की जांच के लिए किया जाता है। यह व्लॉगिंग और फोटोग्राफी के लिए एक न्यूट्रल बैकग्राउंड भी है।'
      },
      {
        question: 'क्या ग्रे स्क्रीन बैकलाइट लीकेज (ब्लीडिंग) को खोजने में मदद करती है?',
        answer: 'हाँ। ग्रे स्क्रीन अत्यधिक प्रभावी है क्योंकि यह चमक के अंतर, असमान बैकलाइट वितरण, और डर्टी स्क्रीन इफेक्ट (DSE) को काले या सफेद रंग की तुलना में अधिक स्पष्ट रूप से दिखाती है।'
      },
      {
        question: 'मैं फुलस्क्रीन मोड चालू या बंद कैसे करूं?',
        answer: 'अपनी स्क्रीन पर कहीं भी क्लिक करें या फुलस्क्रीन बटन पर टैप करें। डेस्कटॉप पर आप कीबोर्ड से F11 या "F" बटन दबा सकते हैं। बाहर आने के लिए "Esc" बटन दबाएं।'
      },
      {
        question: 'क्या मैं ग्रे इमेज डाउनलोड कर सकता हूं?',
        answer: 'हाँ। आप डाउनलोड नियंत्रण का उपयोग करके 1080p, 4K या कस्टम रिज़ॉल्यूशन में ग्रे पीएनजी इमेज आसानी से डाउनलोड कर सकते।'
      },
      {
        question: 'क्या मैं एक विशिष्ट ग्रे शेड चुन सकता हूं?',
        answer: 'हाँ। आप हमारे रंग पिकर (कलर पिकर) में HEX या RGB मान दर्ज करके 50% ग्रे स्क्रीन, डार्क ग्रे स्क्रीन या लाइट ग्रे स्क्रीन का चयन कर सकते हैं।'
      },
      {
        question: 'ग्रे स्क्रीन टेस्ट क्या है?',
        answer: 'ग्रे स्क्रीन टेस्ट में स्क्रीन पर केवल ग्रे रंग प्रदर्शित किया जाता है ताकि यह आंका जा सके कि कोई डिस्प्ले चमक और कंट्रास्ट के स्तर पर मिड-टोन्स को कितना सही और समान दिखा रहा है।'
      },
      {
        question: 'क्या "grey screen test" and "gray screen test" एक ही हैं?',
        answer: 'हाँ। दोनों शब्द एक ही स्क्रीन जांच विधि को दर्शाते हैं। अमेरिकन अंग्रेजी में "gray" और ब्रिटिश अंग्रेजी में "grey" वर्तनी का उपयोग किया जाता है।'
      },
      {
        question: 'डिफ़ॉल्ट रूप से किस ग्रे रंग का उपयोग किया जाता है?',
        answer: 'नेचुरल रूप से #808080 (RGB 128, 128, 128) रंग का उपयोग किया जाता है, जो मानक 50% ग्रे रंग माना जाता है।'
      },
      {
        question: 'क्या ग्रे स्क्रीन टेस्ट मॉनिटर के संतुलन को माप सकता है?',
        answer: 'हाँ। ग्रे यूनिफॉर्मिटी टेस्ट पैनल की चमक और रंग की असमानता को जांचने का सर्वोत्तम तरीका है क्योंकि इस पर हर त्रुटि स्पष्ट रूप से दिखाई देती है।'
      },
      {
        question: 'मुझे डार्क ग्रे स्क्रीन टेस्ट का उपयोग कब करना चाहिए?',
        answer: 'डार्क ग्रे स्क्रीन (लगभग 5% से 15% ग्रे) का उपयोग ओएलईडी स्क्रीन पर बर्न-इन इमेज चेक करने, कम रोशनी में बैकलाइट लीकेज जांचने और वीएफएक्स संपादन संदर्भ के लिए किया जाना चाहिए।'
      }
    ],
    ja: [
      {
        question: '灰色の画面（グレー画面）はどのような用途に使われますか？',
        answer: 'モニターの輝度均一性テスト、カラーバランスの確認、表示欠陥の検査に使用されます。また、商品撮影 of 物撮り背景やVFXなどの映像編集時の基準色として使われます。'
      },
      {
        question: '灰色の画面はバックライト漏れ（光漏れ）の検知に役立ちますか？',
        answer: 'はい、非常に効果的です。真っ白や真っ黒よりも、中間色である灰色の方が液晶パネルのわずかな輝度ムラや汚れの陰影、「ダートスクリーン現象 (DSE)」を明瞭に表示できます。'
      },
      {
        question: '全画面（フルスクリーン）モードにする方法と解除方法は？',
        answer: '灰色部分の任意の場所をクリックするか、全画面ボタンを押します。PCではF11またはキーボードの「F」キーでも可能です。元の画面に戻るには「Esc」キーを押します。'
      },
      {
        question: '灰色の画像をダウンロードすることは可能ですか？',
        answer: 'はい、ダウンロード機能を使って、1080p、4K、およびカスタムサイズに合わせた無地のグレー画像を高品質なPNGデータとして生成・保存することが可能です。'
      },
      {
        question: '特定のグレーの明度・色調を選ぶことはできますか？',
        answer: 'はい。RGB入力スライダーや内蔵 of カラーピッカーを利用し、HEXコードなどで 50%グレーやダークグレー、ライトグレーなどをお好みで調合して全画面化できます。'
      },
      {
        question: '灰色の画面 テストとは何ですか？',
        answer: 'ディスプレイ全体にグレートーンを出力することで、画面の光量ムラやドット欠け、色再現の偏りを眩しすぎないソフトな視野の下で診断・評価する簡易検査のことです。'
      },
      {
        question: '"grey screen test" と "gray screen test" は同じものですか？',
        answer: 'はい、全く同一のテストです。綴りの違いによるもので、「gray」は米国で、「grey」は英国や豪州などで主に利用される標準的な英語表記です。'
      },
      {
        question: 'デフォルトで使用されている灰色のカラーは何ですか？',
        answer: '起動時の初期灰色は「#808080」(RGB 128, 128, 128) です。これはウェブおよび印刷等で広く採用されている標準的な50%グレーです。'
      },
      {
        question: '灰色の画面 テストはモニターの均一性を診るのに適していますか？',
        answer: 'はい、灰色均一性テストはモニターの品質測定において最も一般的です。中間の明度であるため、バックライトの偏りやにじみが強調されて見えやすくなります。'
      },
      {
        question: '濃い灰色の画面（ダークグレー）テストはいつ使いますか？',
        answer: '有機EL (OLED) パネルの焼き付き進行レベルをチェックする場合や、暗いスタジオ等でバックライトのにじみを抑えた低輝度状態でのグラディエーション検査、VFX撮影に使います。'
      }
    ]
  },
  'custom-color-screen': {
    en: [
      {
        question: 'What is a screen color testing tool used for?',
        answer: 'A screen color testing tool displays solid color fields to inspect display uniformity, calibrate color balance, test white levels, check for backlight bleeding, and identify panel defects like stuck or dead pixels.'
      },
      {
        question: 'How can I test my screen for dead pixels?',
        answer: 'Enter fullscreen mode on our tool and cycle through solid colors—especially red, green, blue, black, and white. Look closely for any tiny dots that remain off-color or don\'t match the background.'
      },
      {
        question: 'Does this tool support color calibration?',
        answer: 'Yes, you can generate specific color swatches using HEX, RGB, or HSL inputs. It helps you visually match display profiles or calibrate projector outputs against reference cards.'
      },
      {
        question: 'What is backlight bleeding and how do I spot it?',
        answer: 'Backlight bleeding is light leaking around display edges. Test this by using a dark color screen (like dark gray, black, or blue) in a dim room and inspecting panel borders for bright halos.'
      },
      {
        question: 'Can I choose any custom color for testing?',
        answer: 'Yes, you can insert exact Hex values (e.g. #FF0000), RGB numbers (e.g., 255, 0, 0), HSL parameters, or open the interactive OS color picker to generate any custom screen color.'
      },
      {
        question: 'Is it safe to run a screen color test on OLED panels?',
        answer: 'Absolutely. Static color screens are completely safe to view for testing purposes. Just avoid leaving highly bright static screens on for hours to prevent organic panel wear.'
      },
      {
        question: 'Can I save my custom screen color palettes?',
        answer: 'Yes! The tool stores your recently generated screen colors so you can quickly switch back, and allows you to add specific colors to your favorites list.'
      },
      {
        question: 'What is the RGB screen test mode?',
        answer: 'It is a diagnostic routine where you cycle through Red, Green, and Blue subpixels to identify exactly which channel is lagging or defective.'
      },
      {
        question: 'Can I download solid color wallpapers?',
        answer: 'Yes, you can choose horizontal, vertical, or device-specific square ratios, input your custom color index, and download high-resolution PNG screen images.'
      },
      {
        question: 'Does a screen color test work on mobile phones and TVs?',
        answer: 'Yes, because our web utility runs client-side inside standard browsers, it works seamlessly on smartphones (iPhones/Androids), tablets, laptops, PCs, and smart TVs.'
      }
    ],
    es: [
      {
        question: '¿Para qué se utiliza una herramienta de prueba de color de pantalla?',
        answer: 'Se utiliza para comprobar la uniformidad del display, calibrar la temperatura, revisar niveles de brillo y buscar defectos como píxeles atascados o fugas de luz.'
      },
      {
        question: '¿Cómo puedo probar mi pantalla para detectar píxeles muertos?',
        answer: 'Activa la pantalla completa y alterna entre colores sólidos como rojo, verde, azul, blanco y negro. Busca pequeños puntos que no coincidan con el color mostrado.'
      },
      {
        question: '¿Esta herramienta ayuda en la calibración de color?',
        answer: 'Sí, permite generar muestras de color precisas usando códigos HEX, RGB o HSL para emparejar perfiles visuales o ajustar proyectores frente a cartas de color.'
      },
      {
        question: '¿Qué es la fuga de retroiluminación y cómo la detecto?',
        answer: 'Es la filtración de luz en los bordes del monitor. Pruébalo usando colores oscuros en una habitación con poca luz y observando bordes brillantes anormales.'
      },
      {
        question: '¿Puedo elegir cualquier color personalizado para la prueba?',
        answer: 'Sí, puedes ingresar valores Hexadecimales libres, rangos de RGB o HSL, o bien utilizar el selector interactivo para conseguir el color de prueba óptimo.'
      },
      {
        question: '¿Es seguro hacer pruebas con pantallas de colores en paneles OLED?',
        answer: 'Sí, es completamente inofensivo abrir pantallas de color sólido para diagnósticos. Se aconseja evitar dejar pantallas brillantes durante muchas horas para prevenir desgaste.'
      },
      {
        question: '¿Puedo guardar mis paletas de colores personalizadas?',
        answer: '¡Sí! La herramienta ofrece un historial automático de tus colores recientes y te permite marcar tus tonos favoritos para acceder a ellos rápidamente.'
      },
      {
        question: '¿Qué es el modo de prueba de pantalla RGB?',
        answer: 'Es un método de escaneo en el que se alternan de forma pura los canales Rojo, Verde y Azul para determinar qué subpíxel específico de la cuadrícula falla.'
      },
      {
        question: '¿Puedo descargar fondos de pantalla de colores sólidos?',
        answer: 'Sí, puedes definir proporciones (horizontal, vertical o cuadrada), ajustar el tono deseado y descargar un archivo PNG de alta resolución.'
      },
      {
        question: '¿Funciona la herramienta en teléfonos móviles y televisores?',
        answer: 'Sí, al ser un utilitario web ligero, es totalmente compatible con smartphones, tabletas, portátiles, PC de escritorio y Smart TVs.'
      }
    ],
    pt: [
      {
        question: 'Para que serve uma ferramenta de teste de cor de tela?',
        answer: 'Serve para verificar uniformidade de luz, calibrar balanço térmico de cores, analisar tons de brilho e identificar falhas de componentes como subpixels inoperantes.'
      },
      {
        question: 'Como posso testar minha tela contra pixels mortos?',
        answer: 'Acesse a tela cheia no testador e mude sequencialmente entre cores sólidas. Fique atento a pontos pretos ou desalinhados cromáticos que permaneçam fixos.'
      },
      {
        question: 'Esse utilitário suporta calibração de cor de monitor?',
        answer: 'Sim, você pode gerar valores correspondentes aos perfis RGB, HEX ou HSL do seu projeto para equiparar monitores visuais ou saídas de vídeo de projetor.'
      },
      {
        question: 'O que é vazamento de luz e como posso testá-lo?',
        answer: 'Ocorre quando luz do backlight vaza pelas bordas do monitor LCD ou IPS. Faça o teste abrindo cores escuras em salas com pouca luz e cheque as bordas.'
      },
      {
        question: 'Posso definir qualquer cor sólida personalizada para testes?',
        answer: 'Sim, use controle numérico HEX, entradas RGB, ajustes HSL ou escolha cores diretamente da paleta do sistema operacional no picker.'
      },
      {
        question: 'É seguro rodar testes de cor de tela em painéis OLED?',
        answer: 'Sim, é perfeitamente seguro para checagens intermitentes. Apenas evite displays estáticos brilhantes por longas horas contínuas para prevenir retração de imagem.'
      },
      {
        question: 'É possível salvar minhas cores favoritas geradas?',
        answer: 'Sim! Nosso sistema guarda o histórico de suas cores recentes modificadas e disponibiliza uma lista de favoritos de fácil navegação permanente.'
      },
      {
        question: 'O que representa o teste de tela modo RGB?',
        answer: 'É uma rotina onde você isola os canais vermelho, verde e azul de forma pura para inspecionar falhas individuais de acendimento de cada subpixel físico.'
      },
      {
        question: 'Consigo baixar papéis de parede de cores lisas?',
        answer: 'Sim. Escolha a orientação (horizontal, vertical ou quadrada) e baixe a imagem unicolor gerada como arquivo PNG de alta qualidade.'
      },
      {
        question: 'O teste de tela funciona em celulares e Smart TVs?',
        answer: 'Sim, nossa ferramenta funciona diretamente nos navegadores nativos de Smart TVs, tablets, notebooks, desktops e smartphones.'
      }
    ],
    fr: [
      {
        question: 'À quoi sert un outil de test de couleur d\'écran ?',
        answer: 'Il sert à analyser la distribution de la lumière, calibrer le profil thermique d\'un moniteur, tester la balance des blancs et localiser des anomalies de sous-pixels.'
      },
      {
        question: 'Comment puis-je tester mon écran pour repérer des pixels morts ?',
        answer: 'Activez le plein écran et balayez les couleurs de base (rouge, vert, bleu, blanc, noir). Repérez les minuscules points qui ne changent pas de couleur.'
      },
      {
        question: 'Cet outil aide-t-il dans l\'étalonnage de couleurs ?',
        answer: 'Oui, en saisissant des codes HEX ou RGB précis, vous affichez des mires unies pour régler vos écrans ou ajuster l\'affichage de vos vidéoprojecteurs.'
      },
      {
        question: 'Qu\'est-ce qu\'une fuite de lumière et comment la diagnostiquer ?',
        answer: 'C\'est le flux lumineux du rétroéclairage qui déborde sur les coins de l\'écran. Testez cela avec un ton sombre en pièce obscure en inspectant les rebords.'
      },
      {
        question: 'Puis-je utiliser n\'importe quel code couleur pour le test ?',
        answer: 'Oui, vous êtes libre d\'utiliser les codes HEX, HSL, RGB ou d\'ouvrir le sélecteur graphique système pour générer exactement la couleur requise.'
      },
      {
        question: 'Y a-t-il un risque à tester une dalle OLED avec des couleurs unies ?',
        answer: 'Non, l\'utilisation intermittente de fonds unis n\'endommage pas les dalles OLED. Évitez simplement de laisser des images fixes très lumineuses pendant des heures.'
      },
      {
        question: 'Puis-je mémoriser mes propres couleurs de test ?',
        answer: 'Oui ! L\'outil enregistre les teintes récemment générées et vous permet d\'ajouter vos favorites à un volet d\'accès rapide.'
      },
      {
        question: 'À quoi sert le test de balayage d\'écran RGB ?',
        answer: 'C\'est une vérification alternant le Rouge, le Vert et le Bleu pour valider la justesse de chaque canal couleur physique de votre panneau.'
      },
      {
        question: 'Puis-je télécharger les fonds de couleurs solides créés ?',
        answer: 'Oui, le bouton d\'exportation génère une image PNG unie en haute résolution, adaptée aux dimensions horizontales, verticales ou carrées.'
      },
      {
        question: 'L\'outil de test est-il compatible avec les mobiles et TV connectées ?',
        answer: 'Oui, comme il s\'agit d\'une page Web réactive s\'exécutant sur le navigateur, elle est compatible avec les iPhone, Android, téléviseurs et ordinateurs.'
      }
    ],
    de: [
      {
        question: 'Wofür wird ein Bildschirm-Farbtest-Tool verwendet?',
        answer: 'Es wird verwendet, um die Homogenität der Beleuchtung zu messen, Kontrasteinstellungen zu kalibrieren und Panelfehler wie festhängende oder tote Pixel aufzuspüren.'
      },
      {
        question: 'Wie kann ich mein Display auf Pixelfehler prüfen?',
        answer: 'Schalten Sie auf Vollbild und wechseln Sie zwischen Grundfarben wie Rot, Grün, Blau, Schwarz und Weiß. Suchen Sie nach Punkten, die farblich abweichen.'
      },
      {
        question: 'Unterstützt dieses Tool die Farbkalibrierung von Monitoren?',
        answer: 'Ja. Durch die Generierung exakter HEX- oder RGB-Volltonflächen können Sie Helligkeitswerte anpassen oder Projektoren mit Referenzkarten abgleichen.'
      },
      {
        question: 'Was ist Backlight Bleeding und wie teste ich es?',
        answer: 'Das ist ungewollter Lichtaustritt an den Gehäuserändern von LCDs. Testen Sie dies mit dunklen Testfarben in einem abgedunkelten Raum an den Rändern.'
      },
      {
        question: 'Kann ich jede beliebige Testfarbe selbst bestimmen?',
        answer: 'Ja. Sie können frei HEX-Codes, RGB-Kombinationen oder HSL-Werte eintippen oder die Farbauswahl nutzen, um jeden Farbton anzuzeigen.'
      },
      {
        question: 'Sind einfarbige Farbtests sicher für OLED-Bildschirme?',
        answer: 'Ja, die kurze Nutzung einfarbiger Flächen zur Fehlerprüfung ist absolut sicher. Vermeiden Sie es jedoch, extrem helle Farben stundenlang statisch anzuzeigen.'
      },
      {
        question: 'Kann ich meine erstellten Testfarben speichern?',
        answer: 'Ja! Das Tool speichert automatisch Ihren Farblauf in der Historie und erlaubt das Hinzufügen von Lieblingsfarben zu Ihren Favoriten.'
      },
      {
        question: 'Was bringt der RGB-Bildschirmtestmodus?',
        answer: 'Er ermöglicht das gezielte Ansteuern der roten, grünen und blauen Subpixel, um festzustellen, bei welchem Kanal Fehler oder Defekte vorliegen.'
      },
      {
        question: 'Kann ich einfarbige Hintergründe lokal speichern?',
        answer: 'Ja, Sie können das Bildformat wählen (Querformat, Hochformat oder quadratisch) und die einfarbige Fläche direkt als PNG-Bilddatei herunterladen.'
      },
      {
        question: 'Funktionen die Bildschirm-Farbtests auch auf Handys und Smart-TVs?',
        answer: 'Ja. Da unser Tool online im Webbrowser läuft, ist es auf allen Smartphones, Tablets, Computern und Smart-TVs sofort einsetzbar.'
      }
    ],
    hi: [
      {
        question: 'स्क्रीन कलर टेस्टिंग टूल का उपयोग किस लिए किया जाता है?',
        answer: 'यह टूल स्क्रीन की चौड़ाई में रंगों की समानता जांचने, व्हाइट बैलेंस दुरुस्त करने, बैकलाइट लीकेज देखने और पिक्सल्स के दोषों को खोजने के लिए किया जाता है।'
      },
      {
        question: 'मैं अपनी स्क्रीन पर खराब पिक्सल (डेड पिक्सल) की जांच कैसे कर सकता हूं?',
        answer: 'फुलस्क्रीन मोड चालू करें और लाल, हरा, नीला, सफेद और काला जैसे ठोस रंगों को बदलें। ध्यान दें कि कोई छोटा बिंदु स्क्रीन के अन्य रंग से मेल खा रहा है या नहीं।'
      },
      {
        question: 'क्या यह टूल मॉनिटर के कलर एडजस्टमेंट में मदद करता है?',
        answer: 'हाँ, आप विशिष्ट रूप से HEX या RGB दर्ज करके सटीक रंग की सतह देख सकते हैं, जो मॉनिटर या प्रोजेक्टर की बीम सेटिंग्स को परफेक्ट एडजस्ट करने में सहायक है।'
      },
      {
        question: 'बैकलाइट ब्लीडिंग क्या है और मैं इसकी जांच कैसे करूं?',
        answer: 'यह स्क्रीन के किनारों से रोशनी का बेवजह लीक होना है। अंधेरे कमरे में स्क्रीन पर डार्क शेड्स (जैसे ब्लैक या नेवी ब्लू) लगाकर इसे आसानी से देखा जा सकता है।'
      },
      {
        question: 'क्या मैं टेस्टिंग के लिए किसी भी पसंदीदा रंग का चुनाव कर सकता हूं?',
        answer: 'हाँ, आप मुक्त रूप से HEX वैल्यू, RGB कोड, HSL मान दर्ज कर सकते हैं या रंग समूह विंडो से सटीक रंग चुनकर पूरी स्क्रीन को उस पर बदल सकते हैं।'
      },
      {
        question: 'क्या ओएलईडी स्क्रीन पर रंगीन डिस्प्ले टेस्ट चलाना ठीक है?',
        answer: 'हाँ, परीक्षण अवधि के लिए रंगीन स्क्रीन चलाना पूर्णतः सुरक्षित है। हालाँकि, ओएलईडी सुरक्षा के लिए स्क्रीन को अत्यधिक तेज चमक में लंबे समय तक चालू न छोड़ें।'
      },
      {
        question: 'क्या मैं हाल ही में तैयार की गई पेंट्स को सहेज सकता हूं?',
        answer: 'हाँ! यह टूल हालिया रंगों का संग्रह रखता है ताकि आप उन्हें दोबारा जल्दी पा सकें, और आप किसी रंग को अपनी पसंदीदा पसंद के रूप में बुकमार्क भी कर सकते हैं।'
      },
      {
        question: 'आरजीबी स्क्रीन टेस्ट क्या है?',
        answer: 'इस परीक्षण के तहत लाल (Red), हरा (Green), और नीला (Blue) रंगों का शुद्ध चक्र चलाया जाता है ताकि यह पता लगाया जा सके कि कौन से रंग चैनल कमजोर या टूटे हुए हैं।'
      },
      {
        question: 'क्या मैं सॉलिड कलर इमेज डाउनलोड कर सकता हूं?',
        answer: 'हाँ, आप वांछित रंग का चुनाव करके विभिन्न रेशियो (वर्टिकल, हॉरिजॉन्टल) में अनुकूल उच्च गुणवत्ता वाली पीएनजी फाइल डाउनलोड कर सकते हैं।'
      },
      {
        question: 'क्या यह स्क्रीन टेस्ट मोबाइल और टीवी पर भी चलता है?',
        answer: 'हाँ, चूंकि यह वेब-आधारित उपयोगिता है, यह आईफोन, एंड्रॉइड, टैबलेट, डेस्कटॉप, टीवी और हर वेब ब्राउज़र इनेबल्ड डिवाइस पर कार्य करता है।'
      }
    ],
    ja: [
      {
        question: '画面色テストツールは具体的に何に使われますか？',
        answer: 'ディスプレイ照度の均一性診断、ホワイトバランス調整、カラーチャネル検証、明るさ測定、そしてドット抜けやバックライト漏れの有無検査に使用されます。'
      },
      {
        question: '画面のドット抜けをテスト調べるには？',
        answer: 'ディスプレイを全画面表示にし、赤・青・緑・白・黒の各単色パターンを循環させます。背景色と異なる反応をしないドットがないかを目視でチェックします。'
      },
      {
        question: 'このツールでモニターの色調整（キャリブレーション）は行えますか？',
        answer: 'はい。HEXコード、RGB値、HSL値を入力して基準カラーを再現し、お使いの液晶端末やプロジェクターのカラープロファイル調整に活用いただけます。'
      },
      {
        question: 'バックライト漏れとは何ですか？どのように見つけますか？',
        answer: '液晶の隅部から内部照明の光が滲み出てしまう現象です。部屋の明かりを暗くし、画面を暗色（黒やグレー）にしてフチの漏光を目視検査することが最適です。'
      },
      {
        question: 'テスト用のカラーは自由に作ることができますか？',
        answer: 'はい。16進数HEX値やRGBパラメーターの設定に加え、デバイス組み込みのカラーチューナーを使ってお望みのテストトーンを無制限で作成可能です。'
      },
      {
        question: 'OLED（有機EL）画面で単色カラーテストを行うのは安全ですか？',
        answer: 'はい、表示検証目的での短時間の再生であれば安全です。焼き付きを極力防ぐため、全画面チェック時の超高輝度のまま長時間放置することは避けてください。'
      },
      {
        question: '自分で生成した単色カラーパターンを保存できますか？',
        answer: 'はい。本システムは直近に生成した色のヒストリー記録を保持するほか、特に検証頻度の高い任意の色パレットをお気に入りパネルに永続保存できます。'
      },
      {
        question: 'RGB画面テストモードとは何ですか？',
        answer: '液晶ディスプレイの3原色（Red、Green、Blue）の赤・緑・青チャネルをそれぞれ単独で発光させ、どの色が異常かを確認する基本診断パターンです。'
      },
      {
        question: '単色のカラー壁紙画像をダウンロードすることは可能ですか？',
        answer: 'はい。縦長、横長、正方形の中から希望のアスペクト比を指定し、指定色を最高画質のPNGデータとして手軽にパソコンやスマホに保存できます。'
      },
      {
        question: 'スマホやスマートTVのブラウザからでも使えますか？',
        answer: 'はい。軽快なウェブアプリとして構築されているため、デスクトップ、ノートPCの他、iPhone、Android端末、各種スマートTVブラウザに対応します。'
      }
    ]
  },
  'gradient-screen': {
    en: [
      {
        question: 'What is a gradient screen used for?',
        answer: 'A gradient screen is mainly used to check for display color banding, test panel bit-depth, and evaluate how smoothly a display renders color transitions. It is also used as a colorful, aesthetic background or soft lighting source for video calls.'
      },
      {
        question: 'How can I test my monitor for color banding?',
        answer: 'Set the gradient screen to fullscreen. Inspect the color transitions closely: if you see smooth, seamless blending, your monitor is fine. If you see distinct, blocky stripes, lines, or stair steps, your display is showing color banding.'
      },
      {
        question: 'What causes display banding issues?',
        answer: 'Color banding is usually caused by low panel bit depth (e.g. 10-bit vs 8-bit), compressed video sources, incorrect color range settings in your GPU driver (like Limited instead of Full dynamic range), or aging cables.'
      },
      {
        question: 'Can I customize the gradient colors?',
        answer: 'By default, you can cycle through beautifully curated gradients. If you want custom single-color sweeps, you can use our Custom Color Screen tool or choose specific modes to evaluate how transitions behave across red, green, blue, and yellow channels.'
      },
      {
        question: 'Does dynamic contrast affect gradients?',
        answer: 'Yes. Adaptive brightness or dynamic contrast settings on televisions and monitors tend to amplify banding because they artificially adjust backlight zones, creating visible steps of luminance in smooth transitions.'
      }
    ],
    es: [
      {
        question: '¿Para qué se utiliza una pantalla de degradado?',
        answer: 'Una pantalla de degradado se utiliza principalmente para comprobar la presencia de bandas de color (color banding), evaluar la profundidad de bits de la pantalla y comprobar cómo el panel dibuja las transiciones. También funciona como fondo estético de color o iluminación suave.'
      },
      {
        question: '¿Cómo pruebo mi monitor para detectar bandas de color?',
        answer: 'Pon la pantalla de degradado en pantalla completa e inspecciona la transición de cerca: si el degradado es suave y continuo, el monitor funciona bien; si notas rayas, líneas o escalones bien definidos, tu monitor de vídeo tiene banding de color.'
      },
      {
        question: '¿Qué causa los problemas de bandas de color?',
        answer: 'La principal causa es una profundidad de bits baja en el panel (como 8 bits frente a 10 bits), archivos comprimidos, un rango dinámico limitado en los ajustes de tu tarjeta gráfica o cables defectuosos.'
      },
      {
        question: '¿Puedo personalizar la paleta del degradado?',
        answer: 'Por defecto, puedes alternar entre varios degradados seleccionados. Si deseas tonalidades personalizadas con un solo color de fondo, puedes utilizar nuestra herramienta de Pantalla de Color Personalizado.'
      },
      {
        question: '¿El contraste dinámico afecta a los degradados?',
        answer: 'Sí. El contraste dinámico de los televisores y monitores tiende a acentuar el banding de color porque altera las zonas de retroiluminación, lo que produce tramos de iluminación toscos que rompen la transición.'
      }
    ],
    pt: [
      {
        question: 'Para que é usada uma tela de degradê?',
        answer: 'Uma tela de degradê serve para detectar color banding (faixas de cores), medir o suporte a profundidade de bits do display e testar transições. Também é usada de forma decorativa como fundo estético ou painel de iluminação.'
      },
      {
        question: 'Como testar o monitor para detectar color banding?',
        answer: 'Coloque a tela de degradê no modo tela cheia e examine o espectro visual. Transições limpas e sem emendas indicam que a tela está saudável de calibragem. Se houver degraus ou faixas horizontais/verticais bem definidas, indica a presença de banding.'
      },
      {
        question: 'O que causa os problemas de faixas de cores no display?',
        answer: 'Costuma estar relacionado a profundidades de bits limitadas no painel físico (ex: 8-bits em vez de 10-bits), transmissões de sinal com compressão excessiva de imagem, faixas de cores reduzidas pelo driver GPU ou conectores ruins.'
      },
      {
        question: 'Posso modificar as cores do degradê?',
        answer: 'O painel conta com variados esquemas de cores pré-definidos. Caso seu teste precise de uma cor específica pura, experimente nossa ferramenta de Tela de Cor Personalizada.'
      },
      {
        question: 'O contraste dinâmico do monitor influencia transições?',
        answer: 'Sim. Processamentos ativos de brilho dinâmico ou contraste otimizado aumentam o banding de cores, pois o hardware tenta dividir a imagem por blocos de luz, criando quebras perceptíveis.'
      }
    ],
    fr: [
      {
        question: 'À quoi sert un écran dégradé ?',
        answer: 'Un écran dégradé est idéal pour détecter le banding de couleur, évaluer la profondeur de bits d\'une dalle LCD/OLED et inspecter les transitions. Il sert également d\'arrière-plan esthétique ou de panneau de lumière.'
      },
      {
        question: 'Comment tester mon écran pour repérer le banding ?',
        answer: 'Passez l\'écran dégradé en mode plein écran et étudiez la transition de teintes. Si le dégradé est continu et harmonieux, la dalle est excellente. Si des bandes, lignes ou marches d\'escalier distinctes apparaissent, votre écran souffre de banding.'
      },
      {
        question: 'Qu\'est-ce qui provoque l\'apparition de banding à l\'affichage ?',
        answer: 'Cela provient généralement d\'une profondeur de couleur insuffisante (8 bits au lieu de 10 bits), de formats d\'image fortement compressés, de réglages GPU limités ou d\'un câble d\'affichage manquant de bande passante.'
      },
      {
        question: 'Puis-je régler les couleurs du dégradé personnalisé ?',
        answer: 'Vous disposez de plusieurs combinaisons esthétiques prêtes à l\'emploi. Si vous devez diagnostiquer des teintes précises sur fond uni, nous vous invitons à essayer notre outil Écran Couleur Personnalisé.'
      },
      {
        question: 'Le contraste dynamique influe-t-il sur les dégradés ?',
        answer: 'Oui. Les options de luminosité adaptative ou de contraste automatique des téléviseurs et écrans accentuent le banding en modifiant le rétroéclairage par zones, brisant la transition naturelle.'
      }
    ],
    de: [
      {
        question: 'Wofür wird ein Verlauf-Bildschirm verwendet?',
        answer: 'Ein Verlauf-Bildschirm dient primär der Erkennung von Color Banding (Farbstreifen), um die Farbtiefe des Panels zu bewerten und sanfte Farbrampen zu beurteilen. Er wird auch als dekorativer, bunter Hintergrund oder indirekte Lichtquelle genutzt.'
      },
      {
        question: 'Wie teste ich meinen Monitor auf Color Banding?',
        answer: 'Schalten Sie die Farbverlaufs-Anzeige in den Vollbildmodus. Betrachten Sie die Farbdarstellung: Wenn die Farbstufen flüssig ineinander übergehen, ist Ihr Panel fehlerfrei. Erkennen Sie dagegen dicke, blockige Teilstufen oder Streifen, liegt Banding vor.'
      },
      {
        question: 'Was verursacht störende Farbstreifen (Banding)?',
        answer: 'Häufige Ursachen sind eine geringe Panel-Farbtiefe (z.B. 8-Bit statt 10-Bit), stark komprimiertes Videomaterial, ein falsch eingestellter Dynamikbereich in den Grafikkarteneinstellungen oder unzureichende Kabelbandbreite.'
      },
      {
        question: 'Kann ich die Farbverläufe verändern?',
        answer: 'Die App bietet eine Reihe von professionellen Farbkombinationen, die Sie durchwechseln können. Für unifarbene Kontrollen empfiehlt sich unser Tool Benutzerdefinierter Farbbildschirm.'
      },
      {
        question: 'Hat dynamischer Kontrast Einfluss auf Verlauf-Tests?',
        answer: 'Ja. Adaptive Kontrasterhöhungen auf Fernsehgeräten oder Monitoren verstärken Banding meist deutlich, da sie die Beleuchtungszonen abrupt regeln und Farbübergänge stückeln.'
      }
    ],
    hi: [
      {
        question: 'ग्रेडिएंट स्क्रीन का उपयोग किस लिए किया जाता है?',
        answer: 'ग्रेडिएंट स्क्रीन का इस्तेमाल मुख्य रूप से डिस्प्ले कलर बैंडिंग (कलर स्ट्रिप्स) की जांच करने, स्क्रीन की बीट-डेप्थ को मापने और आसान कलर ट्रांज़िशन देखने के लिए किया जाता है। इसे अक्सर फोटो बैकग्राउंड या सॉफ्ट लाइटिंग के लिए भी इस्तेमाल करते।'
      },
      {
        question: 'मैं अपने मॉनिटर में कलर बैंडिंग की जांच कैसे करूं?',
        answer: 'ग्रेडिएंट स्क्रीन को फुलस्क्रीन मोड में ओपन करें। इसके रंग के बहाव को ध्यान से देखें: यदि रंग का बहाव बिना किसी रुकावट के सामान्य रूप से मिल रहा है, तो स्क्रीन ठीक है। यदि रंग में अलग धारियां, पट्टियां या सीढ़ी जैसे कदम दिख रहे हैं, तो मॉनिटर में बैंडिंग है।'
      },
      {
        question: 'स्क्रीन में बैंडिंग के क्या कारण हो सकते हैं?',
        answer: 'कलर बैंडिंग का मुख्य कारण कम बिट डेप्थ (जैसे 8-बिट बनाम 10-बिट), बहुत ज्यादा कंप्रेस किए गए वीडियो, आपके जीपीयू सेटिंग में सीमित कलर रेंज, या खराब केबल होते हैं।'
      },
      {
        question: 'क्या मैं स्क्रीन के मुख्य रंगों को बदल सकता हूं?',
        answer: 'आप टूलबार से विविध सुंदर रंगीन ग्रेडिएंट्स का चयन कर सकते हैं। यदि आप एक ही रंग की सतह पर जांच करना चाहते हैं, तो कृपया हमारे कस्टम कलर स्क्रीन टूल का उपयोग करें।'
      },
      {
        question: 'क्या मॉनिटर का डायनेमिक कंट्रास्ट ट्यूनिंग ग्रेडिएंट्स को प्रभावित करता है?',
        answer: 'हां। मॉनिटर या टीवी का डायनेमिक कंट्रास्ट फीचर स्क्रीन पर बैंडिंग को बढ़ा देता है, क्योंकि यह बैकलाइट ज़ोन को काफी आक्रामक रूप से ट्यून करता है, जिससे सामान्य ट्रांज़िशन में भी असंतुलन आ जाता है।'
      }
    ],
    ja: [
      {
        question: 'グラデーション画面はどのような目的で使われますか？',
        answer: '主にディスプレイのカラーバンディング（階調の縞模様）の検知、ビット深度の確認、表示色推移が均一であるかの診断に用いられます。また、ビデオ通話時のカラーライトや背景照明としても利用可能です。'
      },
      {
        question: 'モニターのカラーバンディングをテストするには？',
        answer: 'グラデーション画面を全画面でロードし、色の変化を観察します。滑らかなグラデーションであれば製品に問題はありません。はっきりとした縞やブロック状の境界線（階調のステップ）が見える場合、ディスプレイはバンディングを引き起こしています。'
      },
      {
        question: 'バンディングが発生する原因は何ですか？',
        answer: '主な要因は、モニターの対応ビット深度不足（8-bit vs 10-bit）、高度に編集・圧縮された映像ソース、グラフィックスドライバの設定による出力制限、または伝送帯域不足の古いディスプレイケーブルです。'
      },
      {
        question: 'グラデーションの色合いを調整できますか？',
        answer: '当サイトでは、複数のカラープリセットを順番にロードして検査できます。単一色による確実なドット抜け・バックライト検査は、当サイトのカスタムカラー画面を使用することをおすすめします。'
      },
      {
        question: 'ダイナミックコントラスト機能はテストに悪影響を与えますか？',
        answer: 'はい。モニターの輝度自動調整（ダイナミックコントラスト）やスマート省エネ機能は、バックライトの加減を急激に行うため階調表現を損なってしまい、本来滑らかな表示をさらにバンディングが目立つ状態にします。'
      }
    ]
  },
  'rgb-screen': {
    en: [
      {
        question: 'What is an RGB screen test used for?',
        answer: 'An RGB screen test is used to check the health of red, green, and blue subpixels on a display. By displaying solid primary colors, users can isolate display channel issues, find stuck or dead pixels, and calibrate color rendering.'
      },
      {
        question: 'How does the RGB screen light help analyze subpixels?',
        answer: 'A display consists of tiny red, green, and blue subpixels. Projected in full screen, each primary RGB color feeds only specific subpixels of the panel. This makes it easy to check if any specific color channel fails or shows uneven illumination.'
      },
      {
        question: 'Can an RGB test detect dead and stuck pixels?',
        answer: 'Yes. Stuck pixels are subpixels that stay permanently on, often appearing as a bright green, red, or blue dot on contrasting screens. Dead pixels remain dark. Running an RGB screen test helps you identify exactly which channel is affected.'
      },
      {
        question: 'How do I calibrate my monitor using RGB values?',
        answer: 'Open our RGB tool in full screen mode, type or copy specific RGB values, and match them against reference devices. You can adjust the hardware color channels (Red, Green, Blue) in your monitor\'s OSD menu until the screen output matches your desired color profile.'
      },
      {
        question: 'Should I perform the RGB test at max brightness?',
        answer: 'Yes, testing at maximum brightness is recommended for finding stuck subpixels and backlight bleed. However, you should also lower the brightness to inspect panel uniformity and check color balance under average viewing conditions.'
      }
    ],
    es: [
      {
        question: '¿Para qué se utiliza una prueba de pantalla RGB?',
        answer: 'Una prueba de pantalla RGB se utiliza para comprobar la salud de los subpíxeles rojos, verdes y azules de un panel. Al alternar entre los colores primarios sólidos, se pueden diagnosticar fallos en los canales de color, encontrar píxeles muertos y calibrar el monitor.'
      },
      {
        question: '¿Cómo ayuda la luz de pantalla RGB a analizar los subpíxeles?',
        answer: 'Los paneles digitales se componen de miles de minúsculos subpíxeles RGB (rojo, verde, azul). Al proyectar cada uno de estos colores en pantalla completa, se encienden solo los subpíxeles correspondientes, aislando cualquier defecto de iluminación o mezcla en dicho canal.'
      },
      {
        question: '¿Puede un test de pantalla RGB detectar píxeles muertos y atascados?',
        answer: 'Sí. Los píxeles atascados permanecen iluminados en un solo color (como rojo, verde o azul) incluso sobre un fondo diferente. Los píxeles muertos permanecen apagados (negros). Al ciclar entre pantallas de color RGB completas, se hace evidente qué canal falla.'
      },
      {
        question: '¿Cómo calibro mi monitor usando valores RGB?',
        answer: 'Abre nuestra herramienta RGB a pantalla completa, introduce los valores RGB exactos y compáralos con pantallas de referencia. Puedes ajustar las ganancias de color (rojo, verde y azul) en el menú interno (OSD) del monitor hasta equilibrar el color.'
      },
      {
        question: '¿Debo hacer la prueba de color RGB al brillo máximo?',
        answer: 'Sí, es recomendable llevar la pantalla al brillo máximo para detectar fugas de retroiluminación y subpíxeles atascados en tonos claros. Tras esto, disminuye el brillo para evaluar la uniformidad del color en condiciones normales de uso.'
      }
    ],
    pt: [
      {
        question: 'Para que serve um teste de tela RGB?',
        answer: 'Um teste de tela RGB é usado para verificar a saúde dos subpixels vermelho, verde e azul de um display. Projetar cores primárias puras em tela cheia ajuda a isolar problemas de canais de cor cromáticos, localizar pixels travados e calibrar o monitor.'
      },
      {
        question: 'Como a luz de tela RGB ajuda a analisar subpixels?',
        answer: 'As telas modernas utilizam pequenos conjuntos de subpixels RGB. Ao exibir cada cor primária separadamente em tela cheia, o monitor ativa unicamente os subpixels daquela cor específica, permitindo identificar áreas apagadas ou com iluminação irregular.'
      },
      {
        question: 'O teste RGB consegue detectar pixels mortos e travados?',
        answer: 'Sim. Pixels travados (stuck) ficam acesos direto, aparecendo como um ponto vermelho, verde ou azul persistente. Pixels mortos (dead) não acendem e ficam pretos. Rodar o teste de cor RGB facilita o diagnóstico de qual canal está defeituoso.'
      },
      {
        question: 'Como calibrar o monitor usando canais RGB?',
        answer: 'Abra a ferramenta RGB em tela cheia, insira valores RGB específicos e compare o resultado com um monitor de referência. Você pode ajustar as propriedades de cor (R, G, B) no menu OSD do monitor físico até obter a reprodução fiel desejada.'
      },
      {
        question: 'Devo realizar o teste RGB com o brilho máximo?',
        answer: 'Sim, testar com o brilho no máximo ajuda a flagrar vazamentos de retroiluminação e subpixels presos em áreas claras. Em seguida, diminua o brilho para inspecionar a uniformidade cromática geral do painel.'
      }
    ],
    fr: [
      {
        question: 'À quoi sert un test d\'écran RGB ?',
        answer: 'Un test d\'écran RGB sert à analyser la santé des sous-pixels rouges, verts et bleus d\'un moniteur. En affichant des couleurs primaires pures, l\'utilisateur peut repérer les anomalies de canaux de couleur, détecter les pixels morts et calibrer le blanc.'
      },
      {
        question: 'Comment l\'éclairage d\'écran RGB aide-t-il à inspecter la dalle ?',
        answer: 'Chaque pixel d\'une dalle numérique est divisé en sous-pixels RGB. En affichant un écran rouge, vert ou bleu complet, seuls les sous-pixels de la couleur choisie s\'illuminent, ce qui isole instantanément les anomalies d\'éclairage ou de canal.'
      },
      {
        question: 'Le test RGB peut-il localiser les pixels morts et bloqués ?',
        answer: 'Oui. Les pixels bloqués restent continuellement allumés (souvent sous forme de point rouge, vert ou bleu), tandis que les pixels morts restent sombres. Le balayage RGB permet d\'identifier précisément quel canal ou sous-pixel est endommagé.'
      },
      {
        question: 'Comment étalonner mon écran avec les composants RGB ?',
        answer: 'Affichez notre utilitaire RGB en plein écran, entrez vos valeurs de référence et observez le rendu. Vous pouvez ajuster les réglages des canaux rouge, vert et bleu via les menus système ou le menu physique (OSD) du moniteur pour corriger la dérive.'
      },
      {
        question: 'Faut-il tester l\'écran RGB avec la luminosité au maximum ?',
        answer: 'Oui. La luminosité maximale facilite la détection des sous-pixels bloqués et des fuites de lumière. Il est ensuite conseillé de réduire la luminosité pour inspecter l\'homogénéité du rétroéclairage à un niveau d\'usage classique.'
      }
    ],
    de: [
      {
        question: 'Wozu dient ein RGB-Bildschirmtest?',
        answer: 'Ein RGB-Bildschirmtest wird verwendet, um die Funktion der roten, grünen und blauen Subpixel eines Panels zu prüfen. Durch Anzeige reinster Grundfarben lassen sich defekte Farbkanäle isolieren, Pixelfehler finden und Farbabweichungen korrigieren.'
      },
      {
        question: 'Wie hilft die RGB-Bildschirmbeleuchtung beim Testen?',
        answer: 'Digitale Bildschirme bestehen aus winzigen roten, grünen und blauen Subpixeln. Durch die vollflächige RGB-Darstellung wird jeweils nur eine Subpixel-Gattung adressiert, wodurch Fehler oder ungleichmäßige Ausleuchtungen im Nu auffallen.'
      },
      {
        question: 'Kann ein RGB-Test tote und hängende Pixel finden?',
        answer: 'Ja. Ein hängender Pixel (stuck) leuchtet dauerhaft in einer Farbe (z. B. rot, grün oder blau) auf kontrastierendem Grund. Ein toter Pixel (dead) bleibt schwarz. Der RGB-Farbwechsel zeigt sofort, welcher Farbkanal defekt ist.'
      },
      {
        question: 'Wie kalibriere ich meinen Monitor mit RGB-Werten?',
        answer: 'Öffnen Sie das RGB-Tool im Vollbildmodus, geben Sie die gewünschten RGB-Farbwerte ein und vergleichen Sie das Ergebnis mit Referenzen. Nutzen Sie das OSD-Menü Ihres Monitors, um die Farbkanäle (Rot, Grün, Blau) anzupassen, bis der Abgleich passt.'
      },
      {
        question: 'Sollte ich den RGB-Test bei maximaler Helligkeit machen?',
        answer: 'Ja, für das Entdecken hängender Subpixel und Backlight-Bleeding ist maximale Helligkeit ideal. Reduzieren Sie die Helligkeit anschließend, um die allgemeine Farbuniformität bei durchschnittlichen Lichtverhältnissen zu prüfen.'
      }
    ],
    hi: [
      {
        question: 'आरजीबी स्क्रीन टेस्ट का उपयोग किस लिए किया जाता है?',
        answer: 'आरजीबी स्क्रीन टेस्ट का उपयोग डिस्प्ले के लाल, हरे और नीले सब-पिक्सल्स के स्वास्थ्य की जांच करने के लिए किया जाता है। मुख्य रंगों को चलाकर, उपयोगकर्ता आसानी से डिस्प्ले चैनल की समस्याओं, खराब पिक्सल्स को ढूंढ सकते हैं और रंगों को कैलिब्रेट कर सकते हैं।'
      },
      {
        question: 'पिक्सल्स की जांच में आरजीबी स्क्रीन लाइट कैसे मदद करती है?',
        answer: 'एक डिजिटल स्क्रीन हजारों छोटे लाल (R), हरे (G) और नीले (B) सब-पिक्सल्स से बनी होती है। स्क्रीन को फुल स्क्रीन करने पर, प्रत्येक मुख्य आरजीबी रंग केवल विशेष सब-पिक्सल्स को उजागर करता है, जिससे चैनल की खामियां पकड़ में आ जाती हैं।'
      },
      {
        question: 'क्या एक आरजीबी टेस्ट डेड और अटके हुए पिक्सल का पता लगा सकता है?',
        answer: 'हां। अटका हुआ पिक्सेल (stuck pixel) हमेशा चमकदार हरा, लाल या नीला दिखाई देता है, जबकि बंद या खराब पिक्सेल (dead pixel) हमेशा काला रहता है। आरजीबी टेस्ट में स्क्रीन का रंग बदलने पर यह तुरंत सामने आ जाता है।'
      },
      {
        question: 'मैं आरजीबी (RGB) मानों का उपयोग करके अपने मॉनिटर को कैसे कैलिब्रेट कर सकता हूं?',
        answer: 'हमारे ऑनलाइन टूल में आरजीबी पेज को फुल स्क्रीन करें, सटीक मान भरें, और फिर अपने मॉनिटर के भौतिक मेनू (OSD) पर जाकर लाल, हरे और नीले रंग के स्तर को तब तक ट्यून करें जब तक कि स्क्रीन का रंग वांछित कलर प्रोफाइल से बिल्कुल मेल न खाए।'
      },
      {
        question: 'क्या मुझे अधिकतम ब्राइटनेस पर आरजीबी टेस्ट करना चाहिए?',
        answer: 'हां, अटके हुए सब-पिक्सल्स और बैकलाइट लीकेज का पता लगाने के लिए अधिकतम ब्राइटनेस सबसे उपयुक्त है। इसके बाद, सामान्य उपयोग के माहौल में स्क्रीन का संतुलन देखने के लिए ब्राइटनेस को कम करके भी जांच करनी चाहिए।'
      }
    ],
    ja: [
      {
        question: 'RGB画面テストは何のために使用されますか？',
        answer: '赤・緑・青の各サブピクセルのドット抜けやカラーチャンネルの健全性を検査するために使用されます。液晶パネルに物理的な原色単色を表示することで、特定の出力チャンネルの故障を切り分け、正しい色再現性をチェックできます।'
      },
      {
        question: 'RGBフルカラースクリーンライトはどのように液晶のチェックに役立ちますか？',
        answer: '液晶画面は非常に小さなRGB（赤・緑・青）のサブピクセルから構成されています。ディスプレイに純彩色の各カラーを全画面投射することで、特定のサブピクセルだけを発光させることができ、光り方のばらつきや素子の破損を視覚的に検知できます।'
      },
      {
        question: 'RGBカラーテストでドット抜けや常時点灯ピクセルを特定できますか？',
        answer: '可能です。常に特定の原色（赤、緑、青など）で光り続ける常時点灯（スタックピクセル）や、消灯したままのドット抜け（デッドピクセル）は、画面全体のRGBカラーを交互に入力することで、異常があるサブピクセルを瞬時に発見できます।'
      },
      {
        question: 'RGBカラーコードを指定してモニターを調整するには？',
        answer: '当ツールのRGBコード入力欄に任意の数値を入力して全画面表示し、カラーチャートと比較します。色表現にズレがある場合、液晶モニター側のOSD設定メニュー等から赤・緑・青（R/G/B）のゲイン数値を手動で変更し調整します।'
      },
      {
        question: 'RGBテスト時のモニターの輝度は最大値にした方が良いですか？',
        answer: 'はい、常時点灯ピクセルや液晶端部のバックライト漏れを検出するには最大輝度でのテストが効果的です。ただし、日常的な色再現性の確認には、一般的な輝度レベルに下げた状態でも発色のバランスを確認することが重要です।'
      }
    ]
  },
  'hex-screen': {
    en: [
      {
        question: 'What is a HEX color screen tool used for?',
        answer: 'A HEX color screen tool allows designers, developers, and testers to preview 6-digit or 3-digit CSS hex codes (#RRGGBB) in full screen. It is used for verifying brand guidelines, reviewing color palette contrast, testing dark mode shades, and generating solid wallpapers.'
      },
      {
        question: 'How do I test dark mode HEX shades like #121212 on OLED displays?',
        answer: 'Enter dark mode hexadecimal values such as #000000, #121212, or #1E1E1E into our HEX color tool and switch to fullscreen mode. This lets you inspect OLED black crush, panel backlighting, and dark theme UI contrast in real viewing conditions.'
      },
      {
        question: 'Can I compare multiple HEX colors side by side?',
        answer: 'Yes! Our tool supports 4 interactive color swatches. You can enter separate HEX codes for each swatch to view split-screen color palettes or test complementary branding shades across your panel.'
      },
      {
        question: 'How do HEX color codes differ from RGB and HSL?',
        answer: 'HEX is a hexadecimal base-16 representation of Red, Green, and Blue light (00 to FF). RGB uses 0-255 decimal values, and HSL uses Hue, Saturation, and Lightness. Our tool automatically converts and displays all three formats instantly.'
      },
      {
        question: 'Can I download a 4K wallpaper with my custom HEX code?',
        answer: 'Yes. Select your orientation (landscape, portrait, square, or device native size) and click Download to generate a high-resolution PNG file containing your exact HEX color code.'
      }
    ],
    es: [
      {
        question: '¿Para qué sirve una herramienta de pantalla de color HEX?',
        answer: 'Una herramienta de pantalla de color HEX permite a diseñadores y desarrolladores previsualizar códigos CSS hexadecimales (#RRGGBB) a pantalla completa. Se usa para verificar guías de marca, evaluar el contraste de paletas, probar tonos oscuros y descargar fondos.'
      },
      {
        question: '¿Cómo pruebo tonos de modo oscuro como #121212 en pantallas OLED?',
        answer: 'Introduce valores hexadecimales oscuros como #000000, #121212 o #1E1E1E en nuestro probador HEX y activa la pantalla completa. Esto te permite evaluar el aplastamiento de negros en paneles OLED y el contraste real de la interfaz.'
      },
      {
        question: '¿Puedo comparar varios colores HEX uno al lado del otro?',
        answer: '¡Sí! Nuestra herramienta incluye 4 paletas interactivas. Puedes ingresar códigos HEX distintos en cada una para comparar combinaciones de colores en pantalla dividida.'
      },
      {
        question: '¿En qué se diferencian los códigos HEX de RGB y HSL?',
        answer: 'HEX es una representación hexadecimal en base 16 de rojo, verde y azul (00 a FF). RGB utiliza valores decimales (0-255) y HSL mide tono, saturación y luminosidad. Nuestro software convierte y muestra los tres formatos al instante.'
      },
      {
        question: '¿Puedo descargar un fondo de pantalla 4K con mi código HEX personalizado?',
        answer: 'Sí. Elige la orientación deseada (horizontal, vertical, cuadrada o el tamaño exacto de tu dispositivo) y haz clic en Descargar para obtener una imagen PNG en alta definición.'
      }
    ],
    pt: [
      {
        question: 'Para que serve uma ferramenta de tela de cor HEX?',
        answer: 'Uma ferramenta de tela de cor HEX permite que designers e desenvolvedores pré-visualizem códigos CSS hexadecimais (#RRGGBB) em tela cheia. É usada para validar manuais de marca, testar contraste de paletas, inspecionar temas escuros e gerar papéis de parede.'
      },
      {
        question: 'Como testar tons de modo escuro como #121212 em telas OLED?',
        answer: 'Insira códigos hexadecimais como #000000, #121212 ou #1E1E1E em nosso utilitário HEX e abra em tela cheia. Isso ajuda a identificar vazamentos de backlight e testar a fidelidade de tons escuros em painéis OLED.'
      },
      {
        question: 'Posso comparar várias cores HEX lado a lado?',
        answer: 'Sim! Nosso utilitário conta com 4 amostras interativas. Você pode definir códigos HEX diferentes em cada amostra para comparar uma paleta dividida em 4 colunas na tela.'
      },
      {
        question: 'Qual a diferença entre códigos HEX, RGB e HSL?',
        answer: 'O formato HEX é a representação hexadecimal dos canais Vermelho, Verde e Azul (00 a FF). O RGB usa valores numéricos decimais de 0 a 255, enquanto o HSL mede Matiz, Saturação e Luminosidade. Nossa ferramenta converte todos automaticamente.'
      },
      {
        question: 'Posso baixar um papel de parede 4K com o meu código HEX?',
        answer: 'Sim. Escolha a orientação desejada (paisagem, retrato, quadrado ou o tamanho exato da sua tela) e clique em Baixar para gerar o arquivo PNG em alta resolução.'
      }
    ],
    fr: [
      {
        question: 'À quoi sert un outil d\'écran de couleur HEX ?',
        answer: 'Un outil d\'écran de couleur HEX permet aux designers et développeurs de prévisualiser des codes couleur CSS hexadécimaux (#RRGGBB) en plein écran. Il sert à valider des chartes graphiques, vérifier les contrastes de palettes et tester les modes sombres.'
      },
      {
        question: 'Comment tester les teintes sombres comme #121212 sur un écran OLED ?',
        answer: 'Saisissez vos codes hexadécimaux sombres comme #000000, #121212 ou #1E1E1E et basculez en plein écran. Cela vous permet d\'analyser les noirs profonds sur dalles OLED et l\'uniformité du rétroéclairage.'
      },
      {
        question: 'Puis-je comparer plusieurs couleurs HEX côte à côte ?',
        answer: 'Oui ! Notre outil propose 4 vignettes de couleur interactives. Vous pouvez attribuer un code HEX distinct à chaque vignette pour afficher une palette séparée en 4 bandes verticales.'
      },
      {
        question: 'Quelle est la différence entre les codes HEX, RGB et HSL ?',
        answer: 'HEX est une représentation hexadécimale (base 16) des canaux rouge, vert et bleu (de 00 à FF). RGB utilise des valeurs de 0 à 255, tandis que HSL utilise la teinte, la saturation et la luminosité. Notre page convertit les trois en temps réel.'
      },
      {
        question: 'Puis-je télécharger un fond d\'écran 4K avec mon code HEX ?',
        answer: 'Oui. Sélectionnez l\'orientation souhaitée (paysage, portrait, carré ou résolution de votre appareil) et cliquez sur Télécharger pour générer un fichier PNG haute définition.'
      }
    ],
    de: [
      {
        question: 'Wozu dient ein HEX-Farbbildschirm-Tool?',
        answer: 'Ein HEX-Farbbildschirm-Tool ermöglicht Designern und Entwicklern die Vollbild-Vorschau von CSS-Hex-Farbcodes (#RRGGBB). Es wird zur Überprüfung von Markenrichtlinien, zum Testen von Palettenkontrasten und zur Bewertung von Dunkelmodus-Farbtönen verwendet.'
      },
      {
        question: 'Wie teste ich Dunkelmodus-HEX-Töne wie #121212 auf OLED-Displays?',
        answer: 'Geben Sie dunkle Hex-Werte wie #000000, #121212 oder #1E1E1E in unser HEX-Tool ein und wechseln Sie in den Vollbildmodus. Dadurch können Sie OLED-Schwarzwertdarstellung und Display-Hintergrundbeleuchtung unter echten Bedingungen prüfen.'
      },
      {
        question: 'Kann ich mehrere HEX-Farben nebeneinander vergleichen?',
        answer: 'Ja! Unser Tool unterstützt 4 interaktive Farbfelder. Sie können für jedes Feld eigene HEX-Codes eingeben, um eine Farbpalette im 4-Spalten-Splitvergleich darzustellen.'
      },
      {
        question: 'Wie unterscheiden sich HEX-Farbcodes von RGB und HSL?',
        answer: 'HEX ist die hexadezimale Schreibweise der Rot-, Grün- und Blaukanäle (00 bis FF). RGB nutzt Dezimalwerte von 0 bis 255, während HSL Farbton, Sättigung und Helligkeit beschreibt. Unser Tool konvertiert alle Formate automatisch.'
      },
      {
        question: 'Kann ich ein 4K-Wallpaper mit meinem HEX-Farbcode herunterladen?',
        answer: 'Ja. Wählen Sie Ihr gewünschtes Format (Querformat, Hochformat, Quadratisch oder eigene Bildschirmgröße) und klicken Sie auf Herunterladen, um ein hochauflösendes PNG zu generieren.'
      }
    ],
    hi: [
      {
        question: 'हेक्स (HEX) कलर स्क्रीन टूल का उपयोग किस लिए किया जाता है?',
        answer: 'एक हेक्स कलर स्क्रीन टूल डिजाइनरों और डेवलपर्स को फुलस्क्रीन में सटीक CSS हेक्स कोड (#RRGGBB) का प्रीव्यू करने की अनुमति देता है। इसका उपयोग ब्रांड रंगों की जांच, कलर पैलेट कंट्रास्ट का परीक्षण और वॉलपेपर बनाने के लिए किया जाता है।'
      },
      {
        question: 'मैं OLED स्क्रीन पर #121212 जैसे डार्क मोड हेक्स रंगों का परीक्षण कैसे करूं?',
        answer: 'हमारे हेक्स टूल में #000000, #121212 या #1E1E1E जैसे मान भरें और फुलस्क्रीन करें। इससे आप OLED डिस्प्ले पर वास्तविक डार्क मोड थीम और बैकलाइट के संतुलन की जांच कर सकते हैं।'
      },
      {
        question: 'क्या मैं एक साथ कई हेक्स (HEX) रंगों की तुलना कर सकता हूं?',
        answer: 'हां! हमारा टूल 4 इंटरैक्टिव स्वाचेज का समर्थन करता है। आप प्रत्येक स्वाच में अलग-अलग हेक्स कोड दर्ज करके स्क्रीन पर 4-कलर पैलेट की तुलना कर सकते हैं।'
      },
      {
        question: 'हेक्स (HEX) कलर कोड RGB और HSL से कैसे भिन्न हैं?',
        answer: 'HEX लाल, हरे और नीले रंग का हेक्साडेसिमल (base-16) रूप है (00 से FF)। RGB 0-255 संख्यात्मक मानों का उपयोग करता है, जबकि HSL ह्यू, सैचुरेशन और लाइटनेस मापता है। हमारा टूल तीनों को तुरंत बदलता है।'
      },
      {
        question: 'क्या मैं अपने कस्टम हेक्स कोड के साथ 4K वॉलपेपर डाउनलोड कर सकता हूं?',
        answer: 'हां। अपना पसंदीदा ओरिएंटेशन (लैंडस्केप, पोर्ट्रेट, वर्गाकार या डिवाइस आकार) चुनें और सटीक रंगों में हाई-डेफिनिशन PNG छवि प्राप्त करने के लिए डाउनलोड बटन पर क्लिक करें।'
      }
    ],
    ja: [
      {
        question: 'HEXカラー画面ツールは何のために使用されますか？',
        answer: 'HEXカラー画面ツールは、デザイナーやWeb開発者がCSSの16進数カラーコード（#RRGGBB）を全画面表示で即座に検証するために使用されます。ブランドガイドラインの確認、カラーパレットのコントラスト評価、ダークモード発色テスト、壁紙生成に活用されます Japan'
      },
      {
        question: 'OLEDディスプレイで #121212 などのダークモードHEXコードをテストするには？',
        answer: '当ツールに #000000、#121212、#1E1E1E などのダークモードコードを入力し、全画面表示にします。これにより、OLEDディスプレイの黒の再現性やバックライトの光漏れ、実際のUI表示バランスを完璧に診断できます Japan'
      },
      {
        question: '複数のHEXカラーコードを並べて比較できますか？',
        answer: '可能です！当ツールは4つのインタラクティブなカラーパレットをサポートしています。各スロットに異なるHEXコードを入力することで、4分割されたカラーパレットの組み合わせを画面全体で比較できます Japan'
      },
      {
        question: 'HEXカラーコードはRGBやHSLとどのように違いますか？',
        answer: 'HEXは赤・緑・青の光の強度を16進数（00〜FF）で表記したコードです。RGBは0〜255の10進数で表記し、HSLは色相・ saturation・輝度を表します。当ツールはこれら3つの形式を自動的に相互変換して表示します Japan'
      },
      {
        question: '指定したHEXカラーコードで4K壁紙をダウンロードできますか？',
        answer: 'はい。ダウンロード方向（横長、縦長、正方形、お使いの端末サイズ）を選択し「ダウンロード」をクリックすると、指定したHEXコードの高品質なPNG壁紙画像を保存できます Japan'
      }
    ]
  },
  'fireplace-screen': {
    en: [
      {
        question: 'What is an online fireplace screen?',
        answer: 'An online fireplace screen is a web-based ambient tool that renders a realistic virtual fireplace on your monitor, desktop, laptop, PC, or Smart TV. Unlike physical metal or glass fireplace screen guards, it turns your digital display into a glowing hearth complete with smooth flame visuals, warm ambient lighting, and crackling fire audio.'
      },
      {
        question: 'Why use a virtual fireplace screen on desktop, laptop, or TV?',
        answer: 'A virtual fireplace creates an instant cozy room atmosphere without real smoke, fire hazards, or maintenance. It is ideal for relaxing after work, background ambience while studying or reading, sleeping, holiday decor (Christmas, Thanksgiving, winter), or creating an inviting ambiance in offices, cafés, and waiting rooms.'
      },
      {
        question: 'How do I open this fireplace screen in full screen mode?',
        answer: 'Click the "Fullscreen" button in the control toolbar or press the "F" shortcut key on your keyboard. This removes browser tabs, bookmark bars, and interface elements to deliver a full-screen ambient fireplace background.'
      },
      {
        question: 'Does this online fireplace screen include real crackling audio?',
        answer: 'Yes. It features customizable crackling fire sound effects with an adjustable volume slider. You can turn the sound on or off, adjust crackle intensity, or even layer rain sound effects for the ultimate cozy ambient backdrop.'
      },
      {
        question: 'Do I need to download an app or sign up to use this digital fireplace?',
        answer: 'No downloads, browser extensions, or account sign-ups are required. Free Online Screen is a lightweight, static-first web utility that runs instantly in any web browser on Windows, macOS, Linux, ChromeOS, iOS, Android, and Smart TV browsers.'
      },
      {
        question: 'Can I use this fireplace screen as a screensaver alternative?',
        answer: 'Yes! It functions as an ideal always-on ambient screen saver alternative for idle desktop monitors, laptop screens, or room televisions. You can also configure the built-in sleep timer (15, 30, 60, or 90 minutes) to automatically stop audio when falling asleep.'
      },
      {
        question: 'Can I change the flame colors and intensity?',
        answer: 'Yes. The settings drawer allows you to select from multiple flame visual styles—including Classic Orange, Blue Mystic, Emerald Wood, and Violet Phantom—as well as adjust flame size and crackle level to match your room lighting and mood.'
      }
    ],
    es: [
      {
        question: '¿Qué es una pantalla de chimenea virtual en línea?',
        answer: 'Una pantalla de chimenea en línea es una aplicación web ambiental que muestra una chimenea virtual realista en tu monitor, escritorio, portátil, PC o Smart TV. A diferencia de las pantallas físicas de metal o cristal para chimeneas de obra, convierte tu pantalla digital en un hogar cálido con animación de llamas y sonido de fuego crepitante.'
      },
      {
        question: '¿Por qué usar una chimenea virtual en el ordenador o televisor?',
        answer: 'Una chimenea virtual crea al instante una atmósfera acogedora sin humo, calor peligroso ni mantenimiento. Es perfecta para relajarse tras el trabajo, como fondo de concentración para estudiar o leer, para dormir, como decoración en invierno/Navidad o para ambientar oficinas, cafeterías y salas de espera.'
      },
      {
        question: '¿Cómo abro la chimenea a pantalla completa?',
        answer: 'Haz clic en el botón "Pantalla completa" de la barra de control o presiona la tecla de acceso rápido "F" en tu teclado. Esto oculta las pestañas del navegador para ofrecer un fondo de chimenea envolvente a pantalla completa.'
      },
      {
        question: '¿Incluye sonido real de fuego crepitante?',
        answer: 'Sí. Dispone de un efecto de sonido de chisporroteo de leña personalizable con control de volumen. Puedes activar o desactivar el sonido, ajustar la intensidad del fuego e incluso añadir lluvia suave de fondo.'
      },
      {
        question: '¿Necesito descargar alguna aplicación o registrarme?',
        answer: 'No requiere descargas, extensiones ni registro de usuario. Funciona de manera instantánea en cualquier navegador web en Windows, Mac, Linux, Smart TV, iOS y Android.'
      },
      {
        question: '¿Se puede usar como alternativa a un salvapantallas?',
        answer: '¡Sí! Funciona como un excelente protector de pantalla ambiental para monitores y televisores. Además, incluye un temporizador de apagado (15, 30, 60 o 90 minutos) ideal para ir a dormir.'
      }
    ],
    pt: [
      {
        question: 'O que é uma tela de lareira virtual online?',
        answer: 'Uma tela de lareira online é uma aplicação web de ambiente que exibe uma lareira virtual realista no seu monitor, desktop, notebook, PC ou Smart TV. Diferente de telas físicas de metal para lareiras de alvenaria, ela transforma qualquer display em uma fogueira aconchegante com som de estalados de madeira e chamas quentes.'
      },
      {
        question: 'Por que usar uma lareira virtual no computador ou TV?',
        answer: 'Uma lareira virtual cria uma atmosfera acolhedora instantânea sem fumaça ou riscos de incêndio. É perfeita para relaxar no fim do dia, fundo ambientado para estudo e leitura, momentos de descanso, decoração de inverno e Natal, ou para salas de espera e escritórios.'
      },
      {
        question: 'Como colocar a lareira em tela cheia?',
        answer: 'Clique no botão "Tela Cheia" ou pressione a tecla atalho "F" no teclado. Isso remove barras do navegador e exibe a lareira em toda a tela.'
      },
      {
        question: 'Inclui som real de fogueira estalando?',
        answer: 'Sim, possui áudio de madeira estalando ajustável com controle de volume. Você pode ligar/desligar o som, alterar a intensidade do fogo e ajustar o volume conforme seu ambiente.'
      },
      {
        question: 'Preciso baixar aplicativo ou fazer cadastro?',
        answer: 'Não é necessário nenhum download ou cadastro. Funciona instantaneamente em qualquer navegador moderno de computador, celular ou Smart TV.'
      },
      {
        question: 'Posso usar como protetor de tela (screensaver)?',
        answer: 'Sim! É uma alternativa perfeita a protetores de tela convencionais para monitores ociosos e conta com um timer de desligamento (15, 30, 60 ou 90 minutos).'
      }
    ],
    fr: [
      {
        question: 'Qu\'est-ce qu\'un écran de cheminée virtuelle en ligne ?',
        answer: 'Un écran de cheminée en ligne est une application web d\'ambiance qui affiche une cheminée virtuelle réaliste sur votre moniteur, ordinateur, portable ou Smart TV. Contrairement aux pare-feu physiques en métal ou verre, il transforme votre écran en un foyer chaleureux avec animation de flammes et son de bois qui crépite.'
      },
      {
        question: 'Pourquoi utiliser une cheminée virtuelle sur PC ou TV ?',
        answer: 'Une cheminée virtuelle crée une atmosphère chaleureuse sans fumée ni entretien. Elle est idéale pour se détendre après le travail, comme fond sonore et visuel pour étudier ou lire, pour s\'endormir, pour les décorations d\'hiver et de Noël, ou pour habiller un bureau ou une salle d\'attente.'
      },
      {
        question: 'Comment passer la cheminée en plein écran ?',
        answer: 'Cliquez sur le bouton "Plein écran" ou appuyez sur la touche "F" du clavier pour masquer les barres du navigateur et profiter d\'un fond de cheminée immersif.'
      },
      {
        question: 'Y a-t-il un véritable son de feu de bois qui crépite ?',
        answer: 'Oui, l\'outil intègre un effet sonore de crépitement de feu avec curseur de volume réglable. Vous pouvez activer/désactiver le son et ajuster la couleur des flammes (Orange classique, Bleu mystique, Émeraude, Violet).'
      },
      {
        question: 'Faut-il télécharger un logiciel ou créer un compte ?',
        answer: 'Aucun téléchargement ni inscription n\'est nécessaire. L\'application s\'exécute instantanément dans votre navigateur web sur Windows, Mac, Linux, iOS, Android et Smart TV.'
      },
      {
        question: 'Peut-on l\'utiliser comme économiseur d\'écran ?',
        answer: 'Oui ! C\'est une excellente alternative d\'économiseur d\'écran d\'ambiance avec minuteur de sommeil réglable (15, 30, 60 ou 90 minutes).'
      }
    ],
    de: [
      {
        question: 'Was ist ein virtueller Kaminfeuer-Bildschirm online?',
        answer: 'Ein online Kaminfeuer-Bildschirm ist eine Web-Anwendung, die ein realistisches virtuelles Kaminfeuer auf Ihrem Monitor, Desktop, Laptop oder Smart TV anzeigt. Anders als physische Funkenschutzgitter aus Metall oder Glas verwandelt dieser digitale Kamin Ihren Bildschirm in eine gemütliche Feuerstelle mit Flammenanimationen und Knistergeräuschen.'
      },
      {
        question: 'Warum sollte man ein virtuelles Kaminfeuer auf PC oder TV nutzen?',
        answer: 'Ein virtuelles Kaminfeuer schafft eine gemütliche Raumatmosphäre ohne Rauch oder Brandgefahr. Ideal zum Entspannen nach der Arbeit, als Hintergrund zum Lernen oder Lesen, als Schlafhilfe, für die Weihnachts- und Winterzeit oder zur Raumgestaltung in Büros und Cafés.'
      },
      {
        question: 'Wie öffne ich das Kaminfeuer im Vollbildmodus?',
        answer: 'Klicken Sie auf die Schaltfläche "Vollbild" oder drücken Sie die Taste "F" auf Ihrer Tastatur, um Browserleisten auszublenden und das Kaminfeuer im Vollbild zu genießen.'
      },
      {
        question: 'Gibt es echte Kaminfeuer-Knistergeräusche?',
        answer: 'Ja, die Seite enthält anpassbare Knistergeräusche mit Lautstärkeregler. Sie können den Ton ein- oder ausschalten, Flammenfarben anpassen und sogar sanften Regen hinzufügen.'
      },
      {
        question: 'Muss ich eine App herunterladen oder mich registrieren?',
        answer: 'Keine Downloads oder Registrierungen erforderlich. Die Web-App läuft sofort in allen gängigen Webbrowsern auf Windows, Mac, Linux, iOS, Android und Smart TV.'
      },
      {
        question: 'Kann ich diesen Kamin-Bildschirm als Bildschirmschoner nutzen?',
        answer: 'Ja! Er eignet sich hervorragend als Bildschirmschoner-Alternative und verfügt über einen integrierten Sleep-Timer (15, 30, 60 oder 90 Minuten).'
      }
    ],
    hi: [
      {
        question: 'ऑनलाइन वर्चुअल फायरप्लेस स्क्रीन क्या है?',
        answer: 'एक ऑनलाइन फायरप्लेस स्क्रीन एक वेब-आधारित ऐप है जो आपके मॉनिटर, डेस्कटॉप, लैपटॉप या स्मार्ट टीवी पर एक यथार्थवादी वर्चुअल फायरप्लेस प्रदर्शित करता है। यह भौतिक लोहे या कांच के फायरप्लेस गार्ड से अलग है और आपकी स्क्रीन को जलती आग और लकड़ी की आवाज वाले आरामदायक वातावरण में बदल देता है।'
      },
      {
        question: 'डेस्कटॉप या टीवी पर वर्चुअल फायरप्लेस का उपयोग क्यों करें?',
        answer: 'एक वर्चुअल फायरप्लेस बिना किसी धुएं या आग के खतरे के कमरे में आरामदायक माहौल बनाता है। यह काम के बाद आराम करने, पढ़ाई के दौरान बैकग्राउंड म्यूजिक/एम्बिएंस, सोने, सर्दियों और दिवाली/क्रिसमस की सजावट, या कार्यालयों और कैफे के लिए एकदम सही है।'
      },
      {
        question: 'मैं इसे फुलस्क्रीन मोड में कैसे खोलूं?',
        answer: 'कंट्रोल बार पर "फुलस्क्रीन" बटन पर क्लिक करें या अपने कीबोर्ड पर "F" बटन दबाएं। यह ब्राउज़र बार को हटा देता है और एक सहज फुलस्क्रीन फायरप्लेस अनुभव प्रदान करता है।'
      },
      {
        question: 'क्या इसमें आग जलने और चटकने की असली आवाज़ शामिल है?',
        answer: 'हां, इसमें वॉल्यूम नियंत्रण के साथ लकड़ी चटकने की वास्तविक ध्वनि शामिल है। आप ध्वनि चालू या बंद कर सकते हैं और आग की लपटों के रंग चुन सकते हैं।'
      },
      {
        question: 'क्या मुझे कोई ऐप डाउनलोड या साइन अप करने की आवश्यकता है?',
        answer: 'कोई डाउनलोड या अकाउंट की आवश्यकता नहीं है। फ्री ऑनलाइन स्क्रीन किसी भी वेब ब्राउज़र (विंडोज, मैक, लिनक्स, आईओएस, एंड्रॉइड, टीवी) पर तुरंत चलती है।'
      },
      {
        question: 'क्या मैं इसे स्क्रीनसेवर के रूप में उपयोग कर सकता हूं?',
        answer: 'हां! यह एक बेहतरीन स्क्रीनसेवर विकल्प के रूप में काम करता है और इसमें 15, 30, 60 या 90 मिनट का स्लीप टाइमर भी है।'
      }
    ],
    ja: [
      {
        question: 'オンラインバーチャル暖炉画面とは何ですか？',
        answer: 'オンライン暖炉画面は、PC、ノートPC、モニター、Smart TVにリアルなバーチャル暖炉を表示するWebアプリです。物理的な暖炉用スクリーン（金網やガラスカバー）とは異なり、デジタル画面を薪の焚き火の音と炎のアニメーションで温かみのある空間に変身させます。'
      },
      {
        question: 'デスクトップやTVでバーチャル暖炉を使う理由は？',
        answer: '煙や火災の心配なく、瞬時に心地よい空間演出が可能です。仕事後のリラックスタイム、勉強や読書の背景BGM・映像、睡眠前の癒やし、冬やクリスマスシーズンのインテリア、カフェやオフィスの環境映像に最適です。'
      },
      {
        question: '全画面表示（フルスクリーン）にするには？',
        answer: 'コントロールバーの「全画面」ボタンをクリックするか、キーボードの「F」キーを押すと、ブラウザのヘッダーが隠れ、画面全体が焚き火の暖炉になります。'
      },
      {
        question: '本物の薪がはぜるサウンド（音）は含まれていますか？',
        answer: 'はい。音量調整が可能な薪のパチパチ音（クラックル音）を搭載しています。音のON/OFF切り替えや、炎のカラーテーマ（クラシックオレンジ、ブルー、エメラルド、バイオレット）の変更も自由自在です。'
      },
      {
        question: 'アプリのダウンロードや会員登録は必要ですか？',
        answer: 'ダウンロードも会員登録も一切不要です。Windows、Mac、Linux、iOS、Android、Smart TVなどの主要ブラウザで即座に動作します。'
      },
      {
        question: 'スクリーンセーバーの代わりに使えますか？',
        answer: 'はい！常時表示のアンビエントスクリーンセーバーとして最適です。また、15分・30分・60分・90分のスリープタイマー機能も備わっています。'
      }
    ]
  },
  'aquarium-screen': {
    en: [
      {
        question: 'What is an online aquarium screen?',
        answer: 'An online aquarium screen is a browser-based virtual aquarium that runs in full screen on your desktop, laptop, monitor, or TV. It displays animated tropical fish, rising bubbles, swaying seaweed, and underwater light effects to create a relaxing aquatic ambience — no downloads, software, or fish tank maintenance required.'
      },
      {
        question: 'How do I use this virtual aquarium on my desktop or laptop?',
        answer: 'Simply open the page in your browser, click the Fullscreen button or press the "F" key on your keyboard. The aquarium will fill your entire screen with swimming fish and underwater motion. Use the settings panel (press Space) to adjust fish count, swim speed, background color, and sound.'
      },
      {
        question: 'Can I display this aquarium on my TV?',
        answer: 'Yes. Open the aquarium screen page in your Smart TV browser, laptop connected to your TV via HDMI, or any streaming device with a web browser. Press "F" for full screen and enjoy a living aquarium backdrop on your television without any special hardware.'
      },
      {
        question: 'Is the aquarium screen free? Do I need to download anything?',
        answer: 'Yes, it is completely free. No downloads, extensions, or account sign-ups are required. It runs instantly in any modern web browser on Windows, macOS, Linux, ChromeOS, iOS, Android, and Smart TVs.'
      },
      {
        question: 'Can I use this as a screensaver alternative?',
        answer: 'Absolutely. The aquarium screen works perfectly as an always-on ambient display or screensaver alternative. Leave it running on a secondary monitor, idle desktop, or TV to create a calming underwater environment.'
      },
      {
        question: 'Does the aquarium have sound effects?',
        answer: 'Yes. It features an optional ocean ambient drone and bubble pop synth sounds, plus support for custom uploaded background music tracks. You can adjust volume or mute all audio from the settings panel.'
      },
      {
        question: 'Can I customize the aquarium appearance?',
        answer: 'Yes. The settings panel lets you choose from 4 water color themes (Lagoon Turquoise, Deep Sea Reef, Abyssal Zone, Coral Sunset), adjust fish count from 3 to 26, change swim speed, and add overlay modes like a clock, breathing guide, or Pomodoro timer.'
      }
    ],
    es: [
      {
        question: '¿Qué es una pantalla de acuario online?',
        answer: 'Una pantalla de acuario online es un acuario virtual basado en navegador que se ejecuta a pantalla completa en tu escritorio, portátil, monitor o TV. Muestra peces tropicales animados, burbujas, algas marinas y efectos de luz submarina para crear un ambiente acuático relajante, sin descargas ni mantenimiento.'
      },
      {
        question: '¿Cómo uso este acuario virtual en mi ordenador o portátil?',
        answer: 'Abre la página en tu navegador, haz clic en el botón de Pantalla Completa o presiona la tecla "F". El acuario llenará toda tu pantalla con peces nadando. Usa el panel de ajustes (tecla Espacio) para cambiar el número de peces, velocidad, color de fondo y sonido.'
      },
      {
        question: '¿Puedo mostrar este acuario en mi televisor?',
        answer: 'Sí. Abre la página en el navegador de tu Smart TV, o conecta tu portátil al TV por HDMI y ponlo a pantalla completa con la tecla "F" para disfrutar de un fondo de acuario en tu televisor.'
      },
      {
        question: '¿Es gratis? ¿Necesito descargar algo?',
        answer: 'Sí, es completamente gratis. No requiere descargas, extensiones ni registro. Funciona al instante en cualquier navegador moderno en Windows, macOS, Linux, iOS, Android y Smart TV.'
      },
      {
        question: '¿Puedo usarlo como alternativa a un salvapantallas?',
        answer: 'Por supuesto. Funciona perfectamente como pantalla ambiental o salvapantallas. Déjalo corriendo en un monitor secundario, escritorio inactivo o TV para crear un entorno submarino relajante.'
      },
      {
        question: '¿Tiene efectos de sonido?',
        answer: 'Sí. Incluye un drone oceánico ambiental opcional y burbujas sintéticas, además de soporte para canciones de fondo personalizadas. Puedes ajustar el volumen desde el panel de configuración.'
      }
    ],
    pt: [
      {
        question: 'O que é uma tela de aquário online?',
        answer: 'Uma tela de aquário online é um aquário virtual baseado em navegador que funciona em tela cheia no seu desktop, notebook, monitor ou TV. Exibe peixes tropicais animados, bolhas, algas marinhas e efeitos de luz subaquática para criar um ambiente aquático relaxante — sem downloads ou manutenção.'
      },
      {
        question: 'Como usar este aquário virtual no meu computador ou notebook?',
        answer: 'Abra a página no navegador, clique no botão Tela Cheia ou pressione a tecla "F". O aquário preencherá toda a tela com peixes nadando. Use o painel de configurações (tecla Espaço) para ajustar número de peixes, velocidade, cor de fundo e som.'
      },
      {
        question: 'Posso exibir este aquário na minha TV?',
        answer: 'Sim. Abra a página no navegador da sua Smart TV ou conecte o notebook na TV via HDMI e ative o modo tela cheia com a tecla "F" para um fundo de aquário na televisão.'
      },
      {
        question: 'É grátis? Preciso baixar algo?',
        answer: 'Sim, é completamente grátis. Não requer downloads, extensões ou cadastro. Funciona instantaneamente em qualquer navegador moderno no Windows, macOS, Linux, iOS, Android e Smart TVs.'
      },
      {
        question: 'Posso usar como alternativa a um protetor de tela?',
        answer: 'Com certeza. Funciona perfeitamente como display ambiental ou protetor de tela. Deixe rodando em um monitor secundário, desktop inativo ou TV para criar um ambiente subaquático relaxante.'
      },
      {
        question: 'Tem efeitos sonoros?',
        answer: 'Sim. Inclui um drone oceânico ambiente opcional e sons de bolhas, além de suporte para músicas de fundo personalizadas. Você pode ajustar o volume no painel de configurações.'
      }
    ],
    fr: [
      {
        question: 'Qu\'est-ce qu\'un écran d\'aquarium en ligne ?',
        answer: 'Un écran d\'aquarium en ligne est un aquarium virtuel dans votre navigateur qui fonctionne en plein écran sur votre PC, portable, moniteur ou TV. Il affiche des poissons tropicaux animés, des bulles, des algues et des effets de lumière sous-marine pour créer une ambiance aquatique relaxante — sans téléchargement ni entretien.'
      },
      {
        question: 'Comment utiliser cet aquarium virtuel sur mon ordinateur ou portable ?',
        answer: 'Ouvrez la page dans votre navigateur, cliquez sur le bouton Plein écran ou appuyez sur la touche "F". L\'aquarium remplira tout votre écran de poissons. Utilisez le panneau de réglages (touche Espace) pour modifier le nombre de poissons, la vitesse, la couleur de fond et le son.'
      },
      {
        question: 'Puis-je afficher cet aquarium sur ma TV ?',
        answer: 'Oui. Ouvrez la page dans le navigateur de votre Smart TV ou connectez votre PC à la TV par HDMI, puis appuyez sur "F" pour profiter d\'un fond d\'aquarium sur votre téléviseur.'
      },
      {
        question: 'Est-ce gratuit ? Dois-je télécharger quelque chose ?',
        answer: 'Oui, c\'est entièrement gratuit. Aucun téléchargement, extension ou inscription requis. Ça fonctionne instantanément dans tout navigateur moderne sur Windows, macOS, Linux, iOS, Android et Smart TV.'
      },
      {
        question: 'Puis-je l\'utiliser comme économiseur d\'écran ?',
        answer: 'Absolument. L\'écran d\'aquarium fonctionne parfaitement comme affichage d\'ambiance ou économiseur d\'écran. Laissez-le tourner sur un moniteur secondaire, un bureau inactif ou une TV pour créer un environnement sous-marin apaisant.'
      },
      {
        question: 'Y a-t-il des effets sonores ?',
        answer: 'Oui. Il propose un drone océanique d\'ambiance optionnel et des sons de bulles, ainsi que la prise en charge de musiques de fond personnalisées. Vous pouvez régler le volume depuis le panneau de configuration.'
      }
    ],
    de: [
      {
        question: 'Was ist ein Online-Aquarium-Bildschirm?',
        answer: 'Ein Online-Aquarium-Bildschirm ist ein browserbasiertes virtuelles Aquarium, das im Vollbildmodus auf Ihrem Desktop, Laptop, Monitor oder TV läuft. Es zeigt animierte tropische Fische, aufsteigende Blasen, Seetang und Unterwasserlichteffekte — ohne Downloads oder Aquarienpflege.'
      },
      {
        question: 'Wie benutze ich dieses virtuelle Aquarium auf meinem Computer oder Laptop?',
        answer: 'Öffnen Sie die Seite im Browser, klicken Sie auf den Vollbild-Button oder drücken Sie die Taste "F". Das Aquarium füllt den gesamten Bildschirm mit schwimmenden Fischen. Nutzen Sie das Einstellungs-Panel (Leertaste) für Fischanzahl, Geschwindigkeit, Hintergrundfarbe und Sound.'
      },
      {
        question: 'Kann ich dieses Aquarium auf meinem Fernseher anzeigen?',
        answer: 'Ja. Öffnen Sie die Seite im Browser Ihres Smart TVs oder verbinden Sie Ihren Laptop per HDMI mit dem TV und drücken Sie "F" für das Vollbild-Aquarium.'
      },
      {
        question: 'Ist es kostenlos? Muss ich etwas herunterladen?',
        answer: 'Ja, es ist völlig kostenlos. Keine Downloads, Erweiterungen oder Anmeldungen erforderlich. Es läuft sofort in jedem modernen Browser unter Windows, macOS, Linux, iOS, Android und Smart TV.'
      },
      {
        question: 'Kann ich es als Bildschirmschoner-Alternative nutzen?',
        answer: 'Absolut. Der Aquarium-Bildschirm eignet sich perfekt als Daueranzeige oder Bildschirmschoner. Lassen Sie ihn auf einem Zweitmonitor, inaktiven Desktop oder TV laufen für eine beruhigende Unterwasser-Atmosphäre.'
      },
      {
        question: 'Hat es Soundeffekte?',
        answer: 'Ja. Es bietet einen optionalen Ozean-Ambient-Drone und Blasen-Synth-Sounds sowie Unterstützung für benutzerdefinierte Hintergrundmusik. Die Lautstärke lässt sich im Einstellungs-Panel regeln.'
      }
    ],
    hi: [
      {
        question: 'ऑनलाइन एक्वेरियम स्क्रीन क्या है?',
        answer: 'एक ऑनलाइन एक्वेरियम स्क्रीन एक ब्राउज़र-आधारित वर्चुअल एक्वेरियम है जो आपके डेस्कटॉप, लैपटॉप, मॉनिटर या टीवी पर फुलस्क्रीन चलता है। यह एनिमेटेड उष्णकटिबंधीय मछली, बुलबुले, समुद्री शैवाल और पानी के नीचे प्रकाश प्रभाव प्रदर्शित करता है — बिना डाउनलोड या मेंटेनेंस के।'
      },
      {
        question: 'मैं इस वर्चुअल एक्वेरियम को अपने कंप्यूटर या लैपटॉप पर कैसे उपयोग करूं?',
        answer: 'पेज को अपने ब्राउज़र में खोलें, फुलस्क्रीन बटन पर क्लिक करें या कीबोर्ड पर "F" दबाएं। एक्वेरियम आपकी पूरी स्क्रीन को तैरती मछलियों से भर देगा। सेटिंग्स पैनल (स्पेस बार) का उपयोग करके मछलियों की संख्या, गति, पृष्ठभूमि रंग और ध्वनि बदलें।'
      },
      {
        question: 'क्या मैं यह एक्वेरियम अपने टीवी पर दिखा सकता हूं?',
        answer: 'हां। अपने स्मार्ट टीवी ब्राउज़र में पेज खोलें या लैपटॉप को HDMI के माध्यम से टीवी से कनेक्ट करें और फुलस्क्रीन के लिए "F" दबाएं।'
      },
      {
        question: 'क्या यह मुफ्त है? क्या मुझे कुछ डाउनलोड करने की आवश्यकता है?',
        answer: 'हां, यह पूरी तरह से मुफ्त है। किसी डाउनलोड, एक्सटेंशन या अकाउंट की आवश्यकता नहीं है। यह Windows, macOS, Linux, iOS, Android और स्मार्ट टीवी पर तुरंत चलता है।'
      },
      {
        question: 'क्या मैं इसे स्क्रीनसेवर के रूप में उपयोग कर सकता हूं?',
        answer: 'बिल्कुल। एक्वेरियम स्क्रीन एक ऑलवेज-ऑन एम्बिएंट डिस्प्ले या स्क्रीनसेवर के रूप में एकदम सही काम करती है। इसे सेकेंडरी मॉनिटर, निष्क्रिय डेस्कटॉप या टीवी पर चलाएं।'
      },
      {
        question: 'क्या इसमें ध्वनि प्रभाव हैं?',
        answer: 'हां। इसमें वैकल्पिक समुद्री एम्बिएंट ड्रोन और बुलबुले की आवाज़ें हैं, साथ ही कस्टम बैकग्राउंड संगीत का समर्थन भी है। आप सेटिंग्स पैनल से वॉल्यूम समायोजित कर सकते हैं।'
      }
    ],
    ja: [
      {
        question: 'オンラインアクアリウム画面とは何ですか？',
        answer: 'オンラインアクアリウム画面は、デスクトップ、ノートPC、モニター、TVで全画面表示できるブラウザベースのバーチャルアクアリウムです。アニメーションの熱帯魚、泡、海藻、水中の光の効果を表示し、リラックスできる水辺の雰囲気を演出します。ダウンロードや水槽のメンテナンスは不要です。'
      },
      {
        question: 'パソコンやノートPCでこのバーチャルアクアリウムを使うには？',
        answer: 'ブラウザでページを開き、全画面ボタンをクリックするかキーボードの「F」キーを押すだけです。アクアリウムが画面全体に広がり、魚が泳ぎます。設定パネル（スペースキー）で魚の数、泳ぐ速度、背景色、サウンドを調整できます。'
      },
      {
        question: 'このアクアリウムをテレビに表示できますか？',
        answer: 'はい。Smart TVのブラウザでページを開くか、ノートPCをHDMIでテレビに接続し、「F」キーで全画面表示にすると、テレビでアクアリウム背景をお楽しみいただけます。'
      },
      {
        question: '無料ですか？ダウンロードは必要ですか？',
        answer: 'はい、完全に無料です。ダウンロード、拡張機能、アカウント登録は一切不要です。Windows、macOS、Linux、iOS、Android、Smart TVの最新ブラウザですぐに動作します。'
      },
      {
        question: 'スクリーンセーバーの代わりに使えますか？',
        answer: 'もちろん。アクアリウム画面は常時表示のアンビエントディスプレイやスクリーンセーバーとして最適です。セカンドモニターや待機中のデスクトップ、テレビで実行して、落ち着く水中環境を演出してください。'
      },
      {
        question: 'サウンドエフェクトはありますか？',
        answer: 'はい。オプションの海洋アンビエントドローン音や泡のシンセ音、さらにカスタムBGMのアップロードに対応しています。音量は設定パネルから調整可能です。'
      }
    ]
  },
  'matrix-screen': {
    en: [
      {
        question: 'What is a Matrix screen?',
        answer: 'A Matrix screen is a browser-based animated display that recreates the iconic falling green code rain from The Matrix films. It runs in full screen on your desktop, laptop, monitor, or TV, featuring cascading katakana characters, binary digits, and alphanumeric symbols with customizable colors, speed, and glow effects — no downloads or installation required.'
      },
      {
        question: 'How do I use this Matrix screen on my desktop or laptop?',
        answer: 'Open the page in your browser, click the Fullscreen button or press the "F" key on your keyboard. The Matrix digital rain will fill your entire screen. Press Space to open the settings drawer where you can customize character sets, colors, speed, font size, glow intensity, and more.'
      },
      {
        question: 'Can I add my own custom text to the Matrix rain?',
        answer: 'Yes. Type any word or message (up to 45 characters) in the "Custom Name / Text Rain" input field. Your text can appear as a repeating sequence spelling down each column or as random characters sampled from your input. The character set automatically switches when you type.'
      },
      {
        question: 'Can I change the colors of the Matrix rain?',
        answer: 'Yes. Choose from 6 color themes: Classic Green, Cyberpunk Cyan, Crimson Red, Amber Gold, Neon Purple, and Rainbow. Each theme has a matching glow color and dark background. You can also adjust the glow intensity from 0 to 25 pixels.'
      },
      {
        question: 'Is this Matrix screen free? Do I need to download anything?',
        answer: 'Yes, it is completely free. No downloads, extensions, or account sign-ups are required. It runs instantly in any modern web browser on Windows, macOS, Linux, ChromeOS, iOS, Android, and Smart TVs.'
      },
      {
        question: 'Can I use this as a screensaver alternative?',
        answer: 'Absolutely. The Matrix screen works perfectly as an always-on ambient display or screensaver alternative. Leave it running on a secondary monitor, idle desktop, or TV for a cyberpunk-themed visual atmosphere.'
      },
      {
        question: 'Does the Matrix screen have sound effects?',
        answer: 'Yes. It features 3 ambient audio drones inspired by cyberpunk atmospheres: Deep Grid Hum, Mainframe Resonance, and Data Pulse Drone. You can toggle sound on/off with the "M" key and adjust volume from the settings panel.'
      },
      {
        question: 'Can I adjust the speed and density of the falling code?',
        answer: 'Yes. Use the Rain Speed slider (0.2x to 3.0x) to control how fast characters fall, and the Stream Density slider to adjust how many columns of code appear on screen. You can also control trail length and font size for the perfect visual effect.'
      }
    ],
    es: [
      {
        question: '¿Qué es una pantalla Matrix?',
        answer: 'Una pantalla Matrix es una pantalla animada basada en navegador que recrea la icónica lluvia de código verde de las películas Matrix. Se ejecuta a pantalla completa en tu escritorio, portátil, monitor o TV, con caracteres katakana, dígitos binarios y símbolos alfanuméricos personalizables — sin descargas ni instalación.'
      },
      {
        question: '¿Cómo uso esta pantalla Matrix en mi ordenador o portátil?',
        answer: 'Abre la página en tu navegador, haz clic en Pantalla Completa o presiona "F". La lluvia digital Matrix llenará tu pantalla. Presiona Espacio para abrir el panel de ajustes y personalizar caracteres, colores, velocidad, tamaño de fuente y más.'
      },
      {
        question: '¿Puedo añadir mi propio texto a la lluvia Matrix?',
        answer: 'Sí. Escribe cualquier mensaje (máx. 45 caracteres) en el campo de texto personalizado. Puede aparecer como secuencia que cae por las columnas o como caracteres aleatorios de tu texto.'
      },
      {
        question: '¿Puedo cambiar los colores de la lluvia Matrix?',
        answer: 'Sí. Elige entre 6 temas: Verde Clásico, Cian Cyberpunk, Rojo Carmesí, Ámbar Dorado, Púrpura Neón y Arcoíris. Cada tema tiene su propio color de brillo y fondo oscuro.'
      },
      {
        question: '¿Es gratis? ¿Necesito descargar algo?',
        answer: 'Sí, es completamente gratis. No requiere descargas, extensiones ni registro. Funciona al instante en Windows, macOS, Linux, iOS, Android y Smart TV.'
      },
      {
        question: '¿Puedo usarlo como salvapantallas?',
        answer: 'Por supuesto. Funciona perfectamente como pantalla ambiental o salvapantallas. Déjalo corriendo en un monitor secundario, escritorio inactivo o TV para una atmósfera cyberpunk.'
      },
      {
        question: '¿Tiene efectos de sonido?',
        answer: 'Sí. Incluye 3 drones ambientales cyberpunk: Zumbido de Red, Resonancia Mainframe y Pulso de Datos. Puedes activar/desactivar el sonido con la tecla "M".'
      }
    ],
    pt: [
      {
        question: 'O que é uma tela Matrix?',
        answer: 'Uma tela Matrix é uma tela animada baseada em navegador que recria a icônica chuva de código verde dos filmes Matrix. Funciona em tela cheia no seu desktop, notebook, monitor ou TV, com caracteres katakana, dígitos binários e símbolos alfanuméricos — sem downloads ou instalação.'
      },
      {
        question: 'Como usar esta tela Matrix no meu computador ou notebook?',
        answer: 'Abra a página no navegador, clique em Tela Cheia ou pressione "F". A chuva digital Matrix preencherá sua tela. Pressione Espaço para abrir o painel de configurações.'
      },
      {
        question: 'Posso adicionar meu próprio texto à chuva Matrix?',
        answer: 'Sim. Digite qualquer mensagem (máx. 45 caracteres) no campo de texto personalizado. Pode aparecer como sequência descendo pelas colunas ou como caracteres aleatórios do seu texto.'
      },
      {
        question: 'Posso mudar as cores da chuva Matrix?',
        answer: 'Sim. Escolha entre 6 temas: Verde Clássico, Ciano Cyberpunk, Vermelho Carmesim, Âmbar Dourado, Roxo Neon e Arco-Íris. Cada tema tem cor de brilho e fundo escuro próprios.'
      },
      {
        question: 'É grátis? Preciso baixar algo?',
        answer: 'Sim, é completamente grátis. Não requer downloads, extensões ou cadastro. Funciona instantaneamente em Windows, macOS, Linux, iOS, Android e Smart TVs.'
      },
      {
        question: 'Posso usar como protetor de tela?',
        answer: 'Com certeza. Funciona perfeitamente como display ambiental ou protetor de tela para uma atmosfera cyberpunk.'
      },
      {
        question: 'Tem efeitos sonoros?',
        answer: 'Sim. Inclui 3 drones ambientais cyberpunk: Zumbido da Rede, Ressonância Mainframe e Pulso de Dados. Ative/desative com a tecla "M".'
      }
    ],
    fr: [
      {
        question: 'Qu\'est-ce qu\'un écran Matrix ?',
        answer: 'Un écran Matrix est un affichage animé dans votre navigateur qui recrée la célèbre pluie de code vert des films Matrix. Il fonctionne en plein écran sur votre PC, portable, moniteur ou TV avec des caractères katakana, des chiffres binaires et des symboles personnalisables — sans téléchargement ni installation.'
      },
      {
        question: 'Comment utiliser cet écran Matrix sur mon ordinateur ou portable ?',
        answer: 'Ouvrez la page dans votre navigateur, cliquez sur Plein écran ou appuyez sur "F". La pluie numérique Matrix remplira votre écran. Appuyez sur Espace pour ouvrir les réglages.'
      },
      {
        question: 'Puis-je ajouter mon propre texte à la pluie Matrix ?',
        answer: 'Oui. Saisissez un message (45 caractères max) dans le champ de texte personnalisé. Il peut apparaître en séquence descendant le long des colonnes ou en caractères aléatoires.'
      },
      {
        question: 'Puis-je changer les couleurs de la pluie Matrix ?',
        answer: 'Oui. Choisissez parmi 6 thèmes : Vert Classique, Cyan Cyberpunk, Rouge Carmin, Ambre Doré, Violet Néon et Arc-en-Ciel. Chaque thème a sa propre lueur et son fond sombre.'
      },
      {
        question: 'Est-ce gratuit ? Dois-je télécharger quelque chose ?',
        answer: 'Oui, c\'est entièrement gratuit. Aucun téléchargement, extension ou inscription requis. Fonctionne sur Windows, macOS, Linux, iOS, Android et Smart TV.'
      },
      {
        question: 'Puis-je l\'utiliser comme économiseur d\'écran ?',
        answer: 'Absolument. Il fonctionne parfaitement comme affichage d\'ambiance ou économiseur d\'écran pour une atmosphère cyberpunk.'
      },
      {
        question: 'Y a-t-il des effets sonores ?',
        answer: 'Oui. Il propose 3 drones ambiant cyberpunk : Bourdonnement de Grille, Résonance Mainframe et Pulsation de Données. Activez/désactivez le son avec la touche "M".'
      }
    ],
    de: [
      {
        question: 'Was ist ein Matrix-Bildschirm?',
        answer: 'Ein Matrix-Bildschirm ist eine browserbasierte animierte Anzeige, die den ikonischen grünen Code-Regen aus den Matrix-Filmen nachbildet. Er läuft im Vollbildmodus auf Ihrem Desktop, Laptop, Monitor oder TV mit anpassbaren Katakana-Zeichen, Binärziffern und alphanumerischen Symbolen — ohne Downloads oder Installation.'
      },
      {
        question: 'Wie benutze ich diesen Matrix-Bildschirm auf meinem Computer oder Laptop?',
        answer: 'Öffnen Sie die Seite im Browser, klicken Sie auf Vollbild oder drücken Sie "F". Der Matrix-Regen füllt Ihren gesamten Bildschirm. Drücken Sie die Leertaste für die Einstellungen.'
      },
      {
        question: 'Kann ich meinen eigenen Text zum Matrix-Regen hinzufügen?',
        answer: 'Ja. Geben Sie eine Nachricht (max. 45 Zeichen) in das Textfeld ein. Sie kann als Sequenz die Spalten hinunterlaufen oder als zufällige Zeichen aus Ihrem Text erscheinen.'
      },
      {
        question: 'Kann ich die Farben des Matrix-Regens ändern?',
        answer: 'Ja. Wählen Sie aus 6 Farbschemata: Klassisches Grün, Cyberpunk-Cyan, Purpurrot, Goldgelb, Neon-Lila und Regenbogen. Jedes Schema hat eigene Leuchtfarbe und dunklen Hintergrund.'
      },
      {
        question: 'Ist es kostenlos? Muss ich etwas herunterladen?',
        answer: 'Ja, es ist völlig kostenlos. Keine Downloads, Erweiterungen oder Anmeldungen erforderlich. Läuft auf Windows, macOS, Linux, iOS, Android und Smart TV.'
      },
      {
        question: 'Kann ich es als Bildschirmschoner nutzen?',
        answer: 'Absolut. Es eignet sich perfekt als Daueranzeige oder Bildschirmschoner für eine Cyberpunk-Atmosphäre.'
      },
      {
        question: 'Hat es Soundeffekte?',
        answer: 'Ja. Es bietet 3 Ambient-Drones: Netzbrummen, Mainframe-Resonanz und Datenpuls-Drone. Ton mit der "M"-Taste ein-/ausschalten.'
      }
    ],
    hi: [
      {
        question: 'मैट्रिक्स स्क्रीन क्या है?',
        answer: 'मैट्रिक्स स्क्रीन एक ब्राउज़र-आधारित एनिमेटेड डिस्प्ले है जो मैट्रिक्स फिल्मों के प्रसिद्ध हरे कोड रेन को दोहराता है। यह आपके डेस्कटॉप, लैपटॉप, मॉनिटर या टीवी पर फुलस्क्रीन चलता है — बिना डाउनलोड या इंस्टॉलेशन के।'
      },
      {
        question: 'मैं इस मैट्रिक्स स्क्रीन को अपने कंप्यूटर या लैपटॉप पर कैसे उपयोग करूं?',
        answer: 'पेज को ब्राउज़र में खोलें, फुलस्क्रीन बटन पर क्लिक करें या "F" दबाएं। मैट्रिक्स डिजिटल रेन आपकी पूरी स्क्रीन भर देगा। सेटिंग्स के लिए स्पेस बार दबाएं।'
      },
      {
        question: 'क्या मैं मैट्रिक्स रेन में अपना खुद का टेक्स्ट जोड़ सकता हूं?',
        answer: 'हां। कस्टम टेक्स्ट फील्ड में कोई भी संदेश (अधिकतम 45 अक्षर) टाइप करें। यह कॉलम में अनुक्रम के रूप में या आपके टेक्स्ट से यादृच्छिक वर्णों के रूप में दिखाई दे सकता है।'
      },
      {
        question: 'क्या मैं मैट्रिक्स रेन के रंग बदल सकता हूं?',
        answer: 'हां। 6 रंग थीम में से चुनें: क्लासिक ग्रीन, साइबरपंक सियान, क्रिमसन रेड, एम्बर गोल्ड, नियॉन पर्पल और रेनबो। प्रत्येक थीम का अपना ग्लो रंग और डार्क बैकग्राउंड है।'
      },
      {
        question: 'क्या यह मुफ्त है? क्या मुझे कुछ डाउनलोड करने की आवश्यकता है?',
        answer: 'हां, यह पूरी तरह से मुफ्त है। किसी डाउनलोड, एक्सटेंशन या अकाउंट की आवश्यकता नहीं है।'
      },
      {
        question: 'क्या मैं इसे स्क्रीनसेवर के रूप में उपयोग कर सकता हूं?',
        answer: 'बिल्कुल। यह साइबरपंक-थीम वाले माहौल के लिए एकदम सही स्क्रीनसेवर विकल्प है।'
      },
      {
        question: 'क्या इसमें ध्वनि प्रभाव हैं?',
        answer: 'हां। इसमें 3 एम्बिएंट ऑडियो ड्रोन हैं: डीप ग्रिड हम, मेंफ्रेम रेज़ोनेंस और डेटा पल्स ड्रोन। ध्वनि को "M" कुंजी से चालू/बंद करें।'
      }
    ],
    ja: [
      {
        question: 'マトリックス画面とは何ですか？',
        answer: 'マトリックス画面は、映画『マトリックス』の象徴的な緑色のコードの雨を再現するブラウザベースのアニメーション表示です。デスクトップ、ノートPC、モニター、TVで全画面表示でき、カタカナ文字、2進数、英数字をカスタマイズ可能。ダウンロードやインストールは不要です。'
      },
      {
        question: 'パソコンやノートPCでこのマトリックス画面を使うには？',
        answer: 'ブラウザでページを開き、全画面ボタンをクリックするか「F」キーを押すだけです。マトリックスのデジタルレインが画面全体に広がります。スペースキーで設定パネルを開けます。'
      },
      {
        question: 'マトリックスの雨に自分のテキストを追加できますか？',
        answer: 'はい。「カスタムテキスト」入力フィールドに任意のメッセージ（最大45文字）を入力してください。列を流れるシーケンスとして、またはテキストからランダムに抽出された文字として表示できます。'
      },
      {
        question: 'マトリックスの雨の色を変更できますか？',
        answer: 'はい。6つのカラーテーマ（クラシックグリーン、サイバーパンクシアン、クリムゾンレッド、アンバーゴールド、ネオンパープル、レインボー）から選択できます。各テーマに発光色とダーク背景が設定されています。'
      },
      {
        question: '無料ですか？ダウンロードは必要ですか？',
        answer: 'はい、完全に無料です。ダウンロード、拡張機能、アカウント登録は一切不要です。Windows、macOS、Linux、iOS、Android、Smart TVで即座に動作します。'
      },
      {
        question: 'スクリーンセーバーの代わりに使えますか？',
        answer: 'もちろん。サイバーパンクなビジュアル atmosphere の常時表示ディスプレイやスクリーンセーバーとして最適です。'
      },
      {
        question: 'サウンドエフェクトはありますか？',
        answer: 'はい。3つのサイバーパンク風アンビエントドローン（Deep Grid Hum、Mainframe Resonance、Data Pulse Drone）を搭載。「M」キーでサウンドのオン/オフを切り替えられます。'
      }
    ]
  },
  'rain-screen': {
    en: [
      {
        question: 'What is a Rain Screen?',
        answer: 'A Rain Screen is a browser-based animated display that creates realistic rainfall effects on your screen. It features falling rain streaks, sliding raindrops on glass, floor splashes, ambient lightning, and optional rain sounds — all customizable in real time. Use it on your desktop, laptop, monitor, or TV for ambience, relaxation, study focus, or as a screensaver alternative — no install required.'
      },
      {
        question: 'How do I use this Rain Screen on my desktop or laptop?',
        answer: 'Open the page in your browser, click the Fullscreen button or press the "F" key on your keyboard. The rain animation fills your entire screen. Press Space to open the settings panel where you can customize rain density, speed, wind angle, color, and audio. The interface auto-hides in fullscreen mode to keep the rain ambience clean and distraction-free.'
      },
      {
        question: 'Can I switch between rain modes?',
        answer: 'Yes. Choose between two rain modes: "Active Rain Streaks" for falling diagonal rain or "Raindrops on Glass" for a rainy window effect with sliding droplets that zigzag down your screen. Each mode creates a distinctly different ambient feel.'
      },
      {
        question: 'Can I adjust rain intensity and speed?',
        answer: 'Yes. Use the Rain Drops Intensity slider (10 to 600 particles) to control how much rain appears on screen. The Falling Velocity dual-range slider lets you set both minimum and maximum speed (5.0 to 35.0), creating natural variation in how fast drops fall.'
      },
      {
        question: 'Can I change the wind direction and rain angle?',
        answer: 'Yes. The Wind Slope control adjusts the rain angle from -6.0 to 6.0, simulating wind blowing the rain sideways. Combined with falling velocity, this creates realistic storm-like movement in the active rain streaks mode.'
      },
      {
        question: 'Can I enable lightning and thunder effects?',
        answer: 'Yes. Toggle the Ambient Lightning checkbox to enable realistic lightning flashes with a double-pulse effect. The Lightning Flash Interval slider lets you set how often lightning strikes (every 5 to 60 seconds). Lightning appears at random horizontal positions for natural variety.'
      },
      {
        question: 'Can I change the rain color and background scene?',
        answer: 'Yes. Choose from 8 aesthetic rain color presets: Pure Water, Glacier Teal, Emerald Forest, Electric Violet, Sunset Amber, Muted Slate, Crimson Storm, and Cyber Neon Green. You can also select from multiple background scenes to match your mood — from misty forests to urban cityscapes.'
      },
      {
        question: 'Does the Rain Screen have sound effects? Can I add my own audio?',
        answer: 'The page supports ambient rain audio soundtracks that load automatically when available. You can select different audio tracks, adjust volume, and toggle sound on/off with the "M" key. The page reads audio files and background images from the asset directory for easy customization.'
      }
    ],
    es: [
      {
        question: '¿Qué es una pantalla de lluvia?',
        answer: 'Una pantalla de lluvia es un display animado basado en navegador que crea efectos de lluvia realistas en tu pantalla. Incluye gotas cayendo, lluvia sobre vidrio, salpicaduras, relámpagos y sonido de lluvia opcional. Úsala en escritorio, portátil, monitor o TV para ambiente, relajación o como salvapantallas.'
      },
      {
        question: '¿Cómo uso esta pantalla de lluvia en mi ordenador?',
        answer: 'Abre la página en tu navegador, haz clic en Pantalla Completa o presiona "F". Presiona Espacio para abrir el panel de ajustes donde puedes personalizar intensidad, velocidad, viento y sonido.'
      },
      {
        question: '¿Puedo cambiar entre modos de lluvia?',
        answer: 'Sí. Elige entre "Gotas de Lluvia Activas" para lluvia diagonal cayendo o "Gotas sobre Vidrio" para un efecto de ventana lluviosa con gotas que se deslizan en zigzag.'
      },
      {
        question: '¿Puedo ajustar la intensidad y velocidad de la lluvia?',
        answer: 'Sí. Usa el control de Intensidad (10 a 600 partículas) y el control de Velocidad de Caída (5.0 a 35.0) para crear variación natural.'
      },
      {
        question: '¿Puedo cambiar la dirección del viento y el ángulo de la lluvia?',
        answer: 'Sí. El control de Viento ajusta el ángulo de -6.0 a 6.0, simulando el viento moviendo la lluvia lateralmente.'
      },
      {
        question: '¿Puedo activar relámpagos y truenos?',
        answer: 'Sí. Activa la opción de Relámpagos y ajusta el intervalo (5 a 60 segundos). Los relámpagos aparecen en posiciones aleatorias con un efecto de doble pulso.'
      },
      {
        question: '¿Puedo cambiar el color de la lluvia y el fondo?',
        answer: 'Sí. Elige entre 8 colores: Agua Pura, Teal Glaciar, Bosque Esmeralda, Violeta Eléctrico, Ámbar Atardecer, Pizarra Suave, Tormenta Carmesí y Verde Neón Cyber. También puedes seleccionar entre múltiples fondos de escena.'
      }
    ],
    pt: [
      {
        question: 'O que é uma tela de chuva?',
        answer: 'Uma tela de chuva é um display animado baseado em navegador que cria efeitos de chuva realistas na sua tela. Inclui gotas caindo, chuva no vidro, respingos, relâmpagos e som de chuva opcional. Use no desktop, notebook, monitor ou TV para ambiente, relaxamento ou como protetor de tela.'
      },
      {
        question: 'Como uso esta tela de chuva no meu computador?',
        answer: 'Abra a página no navegador, clique em Tela Cheia ou pressione "F". Pressione Espaço para abrir o painel de configurações para personalizar intensidade, velocidade, vento e som.'
      },
      {
        question: 'Posso alternar entre modos de chuva?',
        answer: 'Sim. Escolha entre "Gotas de Chuva Ativas" para chuva diagonal ou "Gotas no Vidro" para efeito de janela chuvosa com gotas deslizando em ziguezague.'
      },
      {
        question: 'Posso ajustar a intensidade e velocidade da chuva?',
        answer: 'Sim. Use o controle de Intensidade (10 a 600 partículas) e o controle de Velocidade (5.0 a 35.0) para criar variação natural.'
      },
      {
        question: 'Posso mudar a direção do vento e o ângulo da chuva?',
        answer: 'Sim. O controle de Vento ajusta o ângulo de -6.0 a 6.0, simulando o vento movendo a chuva lateralmente.'
      },
      {
        question: 'Posso ativar relâmpagos e trovões?',
        answer: 'Sim. Ative a opção de Relâmpagos e ajuste o intervalo (5 a 60 segundos). Os relâmpagos aparecem em posições aleatórias com efeito de duplo pulso.'
      },
      {
        question: 'Posso mudar a cor da chuva e o fundo?',
        answer: 'Sim. Escolha entre 8 cores: Água Pura, Teal Glacial, Floresta Esmeralda, Violeta Elétrico, Âmbar Pôr do Sol, Ardósia Suave, Tempestade Carmesim e Verde Neon Cyber. Selecione entre vários fundos de cena.'
      }
    ],
    fr: [
      {
        question: 'Qu\'est-ce qu\'un écran de pluie ?',
        answer: 'Un écran de pluie est un affichage animé dans votre navigateur qui crée des effets de pluie réalistes sur votre écran. Il comprend des gouttes tombantes, de la pluie sur verre, des éclaboussures, des éclairs et un son de pluie optionnel. Utilisez-le sur PC, portable, moniteur ou TV pour l\'ambiance, la relaxation ou comme économiseur d\'écran.'
      },
      {
        question: 'Comment utiliser cet écran de pluie sur mon ordinateur ?',
        answer: 'Ouvrez la page dans votre navigateur, cliquez sur Plein écran ou appuyez sur "F". Appuyez sur Espace pour ouvrir le panneau des réglages pour personnaliser l\'intensité, la vitesse, le vent et le son.'
      },
      {
        question: 'Puis-je basculer entre les modes de pluie ?',
        answer: 'Oui. Choisissez entre "Gouttes de Pluie Actives" pour une pluie diagonale ou "Gouttes sur Verre" pour un effet de fenêtre pluvieuse avec des gouttes glissant en zigzag.'
      },
      {
        question: 'Puis-je régler l\'intensité et la vitesse de la pluie ?',
        answer: 'Oui. Utilisez le curseur d\'Intensité (10 à 600 particules) et le curseur de Vitesse (5.0 à 35.0) pour créer une variation naturelle.'
      },
      {
        question: 'Puis-je changer la direction du vent et l\'angle de la pluie ?',
        answer: 'Oui. Le contrôle du Vent ajuste l\'angle de -6.0 à 6.0, simulant le vent poussant la pluie latéralement.'
      },
      {
        question: 'Puis-je activer les éclairs et le tonnerre ?',
        answer: 'Oui. Activez l\'option Éclairs et ajustez l\'intervalle (5 à 60 secondes). Les éclairs apparaissent à des positions aléatoires avec un effet de double pulse.'
      },
      {
        question: 'Puis-je changer la couleur de la pluie et l\'arrière-plan ?',
        answer: 'Oui. Choisissez parmi 8 couleurs : Eau Pure, Teal Glaciaire, Forêt Émeraude, Violet Électrique, Ambre Coucher, Ardoise Douce, Tempête Cramoisie et Vert Cyber Neon. Sélectionnez parmi plusieurs arrière-plans de scène.'
      }
    ],
    de: [
      {
        question: 'Was ist ein Regen-Bildschirm?',
        answer: 'Ein Regen-Bildschirm ist eine browserbasierte animierte Anzeige, die realistische Regenfälle auf Ihrem Bildschirm erzeugt. Mit fallenden Regenstreifen, Regentropfen auf Glas, Spritzern, Blitzen und optionalen Regengeräuschen. Für Desktop, Laptop, Monitor oder TV als Bildschirmschoner oder für Ambience.'
      },
      {
        question: 'Wie benutze ich diesen Regen-Bildschirm auf meinem Computer?',
        answer: 'Öffnen Sie die Seite im Browser, klicken Sie auf Vollbild oder drücken Sie "F". Drücken Sie die Leertaste für das Einstellungspanel zur Anpassung von Intensität, Geschwindigkeit, Wind und Sound.'
      },
      {
        question: 'Kann ich zwischen Regenmodi wechseln?',
        answer: 'Ja. Wählen Sie zwischen "Aktive Regenstreifen" für diagonal fallenden Regen oder "Regentropfen auf Glas" für einen Regenscheiben-Effekt mit Tropfen, die im Zickzack gleiten.'
      },
      {
        question: 'Kann ich die Regenintensität und -geschwindigkeit einstellen?',
        answer: 'Ja. Mit dem Intensitätsregler (10 bis 600 Partikel) und dem Geschwindigkeitsregler (5.0 bis 35.0) erzeugen Sie natürliche Variation.'
      },
      {
        question: 'Kann ich die Windrichtung und den Regenwinkel ändern?',
        answer: 'Ja. Der Windregler stellt den Winkel von -6.0 bis 6.0 ein und simuliert so Wind, der den Regen seitlich weht.'
      },
      {
        question: 'Kann ich Blitze und Donner aktivieren?',
        answer: 'Ja. Aktivieren Sie die Blitz-Option und stellen Sie das Intervall ein (5 bis 60 Sekunden). Die Blitze erscheinen an zufälligen Positionen mit einem Doppelpuls-Effekt.'
      },
      {
        question: 'Kann ich die Regenfarbe und den Hintergrund ändern?',
        answer: 'Ja. Wählen Sie aus 8 Farben: Reines Wasser, Gletscher-Teal, Smaragdwald, Elektrisches Violett, Sonnenuntergang-Amber, Sanftes Schiefergrau, Purpursturm und Cyber-Neon-Grün. Wählen Sie aus mehreren Hintergrundszenen.'
      }
    ],
    hi: [
      {
        question: 'रेन स्क्रीन क्या है?',
        answer: 'रेन स्क्रीन एक ब्राउज़र-आधारित एनिमेटेड डिस्प्ले है जो आपकी स्क्रीन पर यथार्थवादी बारिश प्रभाव बनाता है। इसमें गिरती बारिश की बूंदें, कांच पर फिसलती बूंदें, फर्श पर छींटे, बिजली की चमक और वैकल्पिक बारिश की आवाज़ शामिल है।'
      },
      {
        question: 'मैं अपने कंप्यूटर पर इस रेन स्क्रीन का उपयोग कैसे करूं?',
        answer: 'पेज को ब्राउज़र में खोलें, फुलस्क्रीन बटन पर क्लिक करें या "F" दबाएं। सेटिंग्स के लिए स्पेस बार दबाएं जहां आप तीव्रता, गति, हवा और ध्वनि को कस्टमाइज़ कर सकते हैं।'
      },
      {
        question: 'क्या मैं बारिश मोड के बीच स्विच कर सकता हूं?',
        answer: 'हां। "एक्टिव रेन स्ट्रीक्स" विकर्ण गिरती बारिश के लिए या "रेनड्रॉप्स ऑन ग्लास" खिड़की पर बारिश प्रभाव के लिए चुनें।'
      },
      {
        question: 'क्या मैं बारिश की तीव्रता और गति को समायोजित कर सकता हूं?',
        answer: 'हां। तीव्रता स्लाइडर (10 से 600 कण) और गति स्लाइडर (5.0 से 35.0) का उपयोग करें।'
      },
      {
        question: 'क्या मैं बारिश का रंग और पृष्ठभूमि बदल सकता हूं?',
        answer: 'हां। 8 रंगों में से चुनें: शुद्ध पानी, ग्लेशियर टील, एमराल्ड फ़ॉरेस्ट, इलेक्ट्रिक वायलेट, सनसेट एम्बर, म्यूटेड स्लेट, क्रिमसन स्टॉर्म और साइबर नियॉन ग्रीन। कई पृष्ठभूमि दृश्यों में से चुनें।'
      },
      {
        question: 'क्या मैं बिजली और गरज चालू कर सकता हूं?',
        answer: 'हां। एम्बिएंट लाइटनिंग विकल्प चालू करें और अंतराल (5 से 60 सेकंड) सेट करें। बिजली यादृच्छिक स्थितियों पर दिखाई देती है।'
      },
      {
        question: 'क्या रेन स्क्रीन में ध्वनि प्रभाव हैं?',
        answer: 'हां। पेज एम्बिएंट रेन ऑडियो साउंडट्रैक को सपोर्ट करता है। आप विभिन्न ट्रैक चुन सकते हैं, वॉल्यूम एडजस्ट कर सकते हैं और "M" कुंजी से ध्वनि चालू/बंद कर सकते हैं।'
      }
    ],
    ja: [
      {
        question: '雨の画面（レインスクリーン）とは何ですか？',
        answer: '雨の画面は、ブラウザベースのアニメーション表示で、画面にリアルな雨のエフェクトを再現します。雨粒の落下、窓ガラスの雨、床の跳ね返り、雷光、オプションの雨音を備えています。デスクトップ、ノートPC、モニター、TVで雰囲気作りやリラクゼーション、スクリーンセーバーとしてご利用いただけます。'
      },
      {
        question: 'パソコンでこの雨の画面を使うには？',
        answer: 'ブラウザでページを開き、全画面ボタンをクリックするか「F」キーを押します。スペースキーで設定パネルを開き、雨の強さ、速度、風、サウンドをカスタマイズできます。'
      },
      {
        question: '雨のモードを切り替えられますか？',
        answer: 'はい。「アクティブな雨粒」モードでは斜めに降る雨を、「窓ガラスの雨粒」モードでは水滴が画面上をジグザグに滑り落ちる窓効果をお楽しみいただけます。'
      },
      {
        question: '雨の強さと速度を調整できますか？',
        answer: 'はい。強度スライダー（10〜600粒子）と落下速度スライダー（5.0〜35.0）を使用して自然な変化を作り出せます。'
      },
      {
        question: '雨の色と背景を変更できますか？',
        answer: 'はい。8色のプリセット（ピュアウォーター、グレイシャーティール、エメラルドフォレスト、エレクトリックバイオレット、サンセットアンバー、ミューテッドスレート、クリムゾンストーム、サイバーネオングリーン）と複数の背景シーンから選択できます。'
      },
      {
        question: '雷や稲妻を有効にできますか？',
        answer: 'はい。環境雷オプションをオンにし、間隔（5〜60秒）を設定します。雷はランダムな位置にダブルパルス効果で表示されます。'
      },
      {
        question: '雨の画面にサウンドエフェクトはありますか？',
        answer: 'はい。環境雨のオーディオサウンドトラックをサポートしています。「M」キーでサウンドのオン/オフを切り替え、音量も調整できます。'
      }
    ]
  },
  'snow-screen': {
    en: [
      {
        question: 'What is a Snow Screen?',
        answer: 'A Snow Screen is a browser-based animated display that creates realistic falling snow on your screen. It features customizable snowflake count, speed, wind drift, flake size, 20 color presets, photorealistic snowflake images, and optional winter ambience audio. Use it on your desktop, laptop, monitor, or TV for seasonal decoration, relaxation, or as a screensaver alternative — no download required.'
      },
      {
        question: 'How do I use this Snow Screen on my desktop or laptop?',
        answer: 'Open the page in your browser, click the Fullscreen button or press the "F" key on your keyboard. The snowfall animation fills your entire screen. Press Space to open the settings panel where you can customize snowflake count, falling speed, wind drift, flake size, color, and audio. The interface auto-hides in fullscreen mode to keep the winter ambience clean and distraction-free.'
      },
      {
        question: 'Can I customize the snowfall appearance?',
        answer: 'Yes. Adjust snowflake count from 20 to 800 particles, falling speed with a dual-range slider (0.1 to 8.0), wind drift direction and intensity (-5.0 to 5.0), and flake size from 0.5 to 15.0 pixels. You can also toggle photorealistic snowflake images mode for detailed SVG snowflake shapes with adjustable size, opacity, and rotation speed.'
      },
      {
        question: 'Can I change the snowflake colors?',
        answer: 'Yes. Choose from 20 aesthetic color presets: Pure Snow, Glacier Blue, Aurora Green, Pale Lavender, Ice Rose, Soft Mint, Golden Amber, Neon Coral, Seafoam Teal, Arctic Slub, Mellow Peach, Lemon Chiffon, Electric Cyan, Orchid Glow, Ethereal Violet, Deep Indigo, Emerald Glow, Sunset Orange, Rose Quartz, and Warm Charcoal.'
      },
      {
        question: 'Can I use photorealistic snowflake images?',
        answer: 'Yes. Toggle the "Photorealistic Snowflake Images" mode to display detailed SVG snowflake shapes instead of colored circles. In this mode, you can control image snowflake size (5.0 to 50.0 pixels), opacity (10% to 100%), and rotation speed (0x to 4x) for a more realistic winter effect.'
      },
      {
        question: 'Can I change the background scene?',
        answer: 'Yes. The Snow Screen supports multiple winter background scenes that load automatically from the asset directory. You can switch between different winter landscapes, including snowy forests, mountain views, and festive seasonal scenes from the Background Scene selector in the settings panel.'
      },
      {
        question: 'Does the Snow Screen have sound effects?',
        answer: 'The page supports ambient winter audio soundtracks that load automatically when available. You can select different audio tracks from the dropdown, adjust volume, and toggle sound on/off with the "M" key for a complete winter ambience experience.'
      },
      {
        question: 'Can I use the Snow Screen for Christmas and holiday decoration?',
        answer: 'Absolutely. The Snow Screen is perfect for Christmas decorations, holiday parties, and winter seasonal displays. Use it on your Smart TV, desktop monitor, or laptop as a festive screensaver alternative. Combine winter background scenes, photorealistic snowflakes, and ambient audio for a complete cozy holiday atmosphere.'
      }
    ],
    es: [
      {
        question: '¿Qué es una pantalla de nieve?',
        answer: 'Una pantalla de nieve es un display animado basado en navegador que crea nieve cayendo en tu pantalla. Incluye copos personalizables, velocidad, viento, 20 colores, imágenes fotorrealistas y audio de ambiente invernal. Úsala en escritorio, portátil, monitor o TV para decoración navideña, relajación o como salvapantallas.'
      },
      {
        question: '¿Cómo uso esta pantalla de nieve en mi ordenador?',
        answer: 'Abre la página en tu navegador, haz clic en Pantalla Completa o presiona "F". Presiona Espacio para abrir el panel de ajustes y personalizar la cantidad de copos, velocidad, viento, tamaño y color.'
      },
      {
        question: '¿Puedo personalizar la apariencia de la nieve?',
        answer: 'Sí. Ajusta la cantidad de copos (20 a 800), velocidad (0.1 a 8.0), viento (-5.0 a 5.0) y tamaño de copo (0.5 a 15.0). Activa el modo de imágenes fotorrealistas para copos SVG detallados con opacidad y velocidad de rotación ajustables.'
      },
      {
        question: '¿Puedo cambiar los colores de los copos?',
        answer: 'Sí. Elige entre 20 colores: Nieve Pura, Azul Glaciar, Verde Aurora, Lavanda Pálida, Rosa Hielo, Menta Suave, Ámbar Dorado, Coral Neón, Verde Espuma, Pizarra Ártica, Durazno Suave, Limón Chiffon, Cian Eléctrico, Orquídea, Violeta Etéreo, Índigo Profundo, Verde Esmeralda, Naranja Atardecer, Cuarzo Rosa y Carbón Cálido.'
      },
      {
        question: '¿Puedo usar la pantalla de nieve para decoración navideña?',
        answer: 'Absolutamente. Es perfecta para decoración navideña, fiestas y ambientes invernales. Úsala en tu Smart TV, monitor o portátil como salvapantallas festivo con fondos invernales y audio ambiente.'
      }
    ],
    pt: [
      {
        question: 'O que é uma tela de neve?',
        answer: 'Uma tela de neve é um display animado baseado em navegador que cria neve caindo na sua tela. Inclui flocos personalizáveis, velocidade, vento, 20 cores, imagens fotorrealistas e áudio de inverno. Use no desktop, notebook, monitor ou TV para decoração natalina, relaxamento ou como protetor de tela.'
      },
      {
        question: 'Como uso esta tela de neve no meu computador?',
        answer: 'Abra a página no navegador, clique em Tela Cheia ou pressione "F". Pressione Espaço para abrir o painel de configurações para personalizar flocos, velocidade, vento, tamanho e cor.'
      },
      {
        question: 'Posso personalizar a aparência da neve?',
        answer: 'Sim. Ajuste a quantidade de flocos (20 a 800), velocidade (0.1 a 8.0), vento (-5.0 a 5.0) e tamanho (0.5 a 15.0). Ative o modo de imagens fotorrealistas para flocos SVG detalhados.'
      },
      {
        question: 'Posso mudar as cores dos flocos de neve?',
        answer: 'Sim. Escolha entre 20 cores: Neve Pura, Azul Glacial, Verde Aurora, Lavanda Pálida, Rosa Gelo, Menta Suave, Âmbar Dourado, Coral Neon, Verde Espuma, Ardósia Ártica, Pêssego Suave, Limão Chiffon, Ciano Elétrico, Orquídea, Violeta Etéreo, Índigo Profundo, Verde Esmeralda, Laranja Pôr do Sol, Quartzo Rosa e Carvão Quente.'
      },
      {
        question: 'Posso usar a tela de neve para decoração de Natal?',
        answer: 'Com certeza. Perfeita para decoração natalina, festas e ambientes de inverno. Use na Smart TV, monitor ou notebook como protetor de tela festivo.'
      }
    ],
    fr: [
      {
        question: 'Qu\'est-ce qu\'un écran de neige ?',
        answer: 'Un écran de neige est un affichage animé dans votre navigateur qui crée de la neige tombant sur votre écran. Avec flocons personnalisables, vitesse, vent, 20 couleurs, images photoréalistes et audio d\'ambiance hivernale. Pour PC, portable, moniteur ou TV — décoration de Noël, relaxation ou économiseur d\'écran.'
      },
      {
        question: 'Comment utiliser cet écran de neige sur mon ordinateur ?',
        answer: 'Ouvrez la page dans votre navigateur, cliquez sur Plein écran ou appuyez sur "F". Appuyez sur Espace pour ouvrir le panneau des réglages pour personnaliser les flocons, la vitesse, le vent, la taille et la couleur.'
      },
      {
        question: 'Puis-je personnaliser l\'apparence de la neige ?',
        answer: 'Oui. Ajustez le nombre de flocons (20 à 800), la vitesse (0.1 à 8.0), le vent (-5.0 à 5.0) et la taille (0.5 à 15.0). Activez le mode photoréaliste pour des flocons SVG détaillés.'
      },
      {
        question: 'Puis-je changer la couleur des flocons ?',
        answer: 'Oui. Choisissez parmi 20 couleurs : Neige Pure, Bleu Glaciaire, Vert Aurore, Lavande Pâle, Rose Glace, Menthe Douce, Ambre Doré, Corail Néon, Écume de Mer, Ardoise Arctique, Pêche Douce, Citron Chiffon, Cyan Électrique, Orchidée, Violet Éthéré, Indigo Profond, Vert Émeraude, Orange Coucher, Quartz Rose et Charbon Chaud.'
      },
      {
        question: 'Puis-je utiliser l\'écran de neige pour la décoration de Noël ?',
        answer: 'Absolument. Parfait pour la décoration de Noël, les fêtes et les ambiances hivernales. Utilisez-le sur votre Smart TV, moniteur ou portable comme économiseur d\'écran festif.'
      }
    ],
    de: [
      {
        question: 'Was ist ein Schnee-Bildschirm?',
        answer: 'Ein Schnee-Bildschirm ist eine browserbasierte animierte Anzeige, die fallenden Schnee auf Ihrem Bildschirm erzeugt. Mit anpassbaren Flocken, Geschwindigkeit, Wind, 20 Farben, fotorealistischen Bildern und Winter-Ambient-Audio. Für Desktop, Laptop, Monitor oder TV — Weihnachtsdekoration, Entspannung oder als Bildschirmschoner.'
      },
      {
        question: 'Wie benutze ich diesen Schnee-Bildschirm auf meinem Computer?',
        answer: 'Öffnen Sie die Seite im Browser, klicken Sie auf Vollbild oder drücken Sie "F". Drücken Sie die Leertaste für das Einstellungspanel zur Anpassung von Flockenanzahl, Geschwindigkeit, Wind, Größe und Farbe.'
      },
      {
        question: 'Kann ich das Aussehen des Schnees anpassen?',
        answer: 'Ja. Passen Sie die Flockenanzahl (20 bis 800), Geschwindigkeit (0.1 bis 8.0), Wind (-5.0 bis 5.0) und Flockengröße (0.5 bis 15.0) an. Schalten Sie den fotorealistischen Modus für detaillierte SVG-Schneeflocken ein.'
      },
      {
        question: 'Kann ich die Schneeflockenfarben ändern?',
        answer: 'Ja. Wählen Sie aus 20 Farben: Reiner Schnee, Gletscherblau, Aurora-Grün, Blasses Lavendel, Eisrose, Weiche Minze, Goldener Bernstein, Neon-Koralle, Meerschaum, Arktisches Schiefergrau, Sanfter Pfirsich, Zitronen-Chiffon, Elektrisches Cyan, Orchidee, Ätherisches Violett, Tiefes Indigo, Smaragdgrün, Sonnenuntergang-Orange, Rosenquarz und Warmer Holzkohle.'
      },
      {
        question: 'Kann ich den Schnee-Bildschirm für Weihnachtsdekoration nutzen?',
        answer: 'Absolut. Perfekt für Weihnachtsdekoration, Festlichkeiten und Winterambiente. Verwenden Sie ihn auf Ihrem Smart TV, Monitor oder Laptop als festlichen Bildschirmschoner.'
      }
    ],
    hi: [
      {
        question: 'स्नो स्क्रीन क्या है?',
        answer: 'स्नो स्क्रीन एक ब्राउज़र-आधारित एनिमेटेड डिस्प्ले है जो आपकी स्क्रीन पर गिरती बर्फ बनाता है। इसमें अनुकूलन योग्य बर्फ के टुकड़े, गति, हवा, 20 रंग, फोटोरियलिस्टिक इमेज और विंटर ऑडियो शामिल हैं। डेस्कटॉप, लैपटॉप, मॉनिटर या टीवी पर क्रिसमस सजावट या स्क्रीनसेवर के लिए उपयोग करें।'
      },
      {
        question: 'मैं अपने कंप्यूटर पर इस स्नो स्क्रीन का उपयोग कैसे करूं?',
        answer: 'पेज को ब्राउज़र में खोलें, फुलस्क्रीन बटन पर क्लिक करें या "F" दबाएं। सेटिंग्स के लिए स्पेस बार दबाएं और बर्फ के टुकड़ों की संख्या, गति, हवा, आकार और रंग को कस्टमाइज़ करें।'
      },
      {
        question: 'क्या मैं बर्फ के रंग बदल सकता हूं?',
        answer: 'हां। 20 रंगों में से चुनें: प्योर स्नो, ग्लेशियर ब्लू, ऑरोरा ग्रीन, पेल लैवेंडर, आइस रोज़, सॉफ्ट मिंट, गोल्डन एम्बर, नियॉन कोरल, सीफोम टील, आर्कटिक स्लेट, मेलो पीच, लेमन शिफॉन, इलेक्ट्रिक सियान, ऑर्किड ग्लो, एथेरियल वायलेट, डीप इंडिगो, एमराल्ड ग्लो, सनसेट ऑरेंज, रोज़ क्वार्ट्ज और वार्म चारकोल।'
      },
      {
        question: 'क्या मैं फोटोरियलिस्टिक स्नोफ्लेक इमेज का उपयोग कर सकता हूं?',
        answer: 'हां। "फोटोरियलिस्टिक स्नोफ्लेक इमेज" मोड चालू करें। इस मोड में आप बर्फ के टुकड़ों का आकार (5.0 से 50.0), अपारदर्शिता (10% से 100%) और घूर्णन गति (0x से 4x) नियंत्रित कर सकते हैं।'
      },
      {
        question: 'क्या मैं स्नो स्क्रीन को क्रिसमस सजावट के लिए उपयोग कर सकता हूं?',
        answer: 'बिल्कुल। यह क्रिसमस सजावट, छुट्टियों और सर्दियों के माहौल के लिए एकदम सही है। इसे अपने स्मार्ट टीवी, मॉनिटर या लैपटॉप पर त्योहारी स्क्रीनसेवर के रूप में उपयोग करें।'
      }
    ],
    ja: [
      {
        question: '雪の画面（スノースクリーン）とは何ですか？',
        answer: '雪の画面は、ブラウザベースのアニメーション表示で、画面にリアルな降雪を再現します。カスタマイズ可能な雪片の数、速度、風、20色のカラープリセット、フォトリアルな雪の画像、冬の環境音を備えています。デスクトップ、ノートPC、モニター、TVでクリスマス飾りやリラクゼーション、スクリーンセーバーとしてご利用いただけます。'
      },
      {
        question: 'パソコンでこの雪の画面を使うには？',
        answer: 'ブラウザでページを開き、全画面ボタンをクリックするか「F」キーを押します。スペースキーで設定パネルを開き、雪片の数、速度、風、サイズ、色をカスタマイズできます。'
      },
      {
        question: '雪の色を変更できますか？',
        answer: 'はい。20色のプリセット（ピュアスノー、グレイシャーブルー、オーロラグリーン、ペールラベンダー、アイスローズ、ソフトミント、ゴールデンアンバー、ネオンコーラル、シーフォームティール、アークティックスレート、メローピーチ、レモンシフォン、エレクトリックシアン、オーキッドグロー、エセリアルバイオレット、ディープインディゴ、エメラルドグロー、サンセットオレンジ、ローズクォーツ、ウォームチャコール）から選択できます。'
      },
      {
        question: '雪の画面をクリスマス飾りに使えますか？',
        answer: 'もちろん。クリスマスの飾り付け、ホリデーパーティー、冬の季節演出に最適です。スマートTV、モニター、ノートPCでお楽しみいただけます。'
      }
    ]
  },
  'ambient-screen': {
    en: [
      {
        question: 'What is an Ambient Screen?',
        answer: 'An Ambient Screen is a browser-based interactive display that transforms any screen into a calming visual environment. It features animated fluid gradients with 6 color presets, floating cosmic star particles, a 4-channel soundscape mixer (lofi synth, gentle rainfall, crackling hearth, and custom tracks), and overlay modes including a live clock, guided breathing exercise, and Pomodoro timer. Use it on your desktop, laptop, monitor, TV, tablet, or mobile for focus, relaxation, meditation, or productivity — no download required.'
      },
      {
        question: 'How do I use the Ambient Screen on my desktop or laptop?',
        answer: 'Open the page in your browser, click the Fullscreen button or press the "F" key. The animated gradient and star particles fill your entire screen. Press Space to open the settings panel where you can customize gradient presets, morphing flow speed, cosmic star density, soundscape mixer channels, and overlay modes. The interface auto-hides in fullscreen mode to keep the ambient experience clean and distraction-free.'
      },
      {
        question: 'Can I change the gradient colors and animation?',
        answer: 'Yes. Choose from 6 gradient presets: Cyber Neon (dark cyan/pink/purple), Aurora Dreams (blue/teal), Sunset Solitude (pink/red/orange), Deep Forest (green/yellow), Cherry Blossom (soft pink/lavender), and Cosmic Myst (purple/violet/blue). Adjust the Morphing Flow Speed slider from 0.0 (frozen) to 2.0 (fast) to control how quickly the fluid blobs move and morph across your display.'
      },
      {
        question: 'What are the cosmic star particles?',
        answer: 'The Ambient Screen features floating star particles that drift slowly across the display with a gentle twinkling effect. You can adjust star density from 10 to 150 particles using the Cosmic Star Density slider. The stars also respond to mouse movement — they gently push away from your cursor for an interactive, immersive experience.'
      },
      {
        question: 'Can I mix ambient sounds?',
        answer: 'Yes. The Ambient Screen includes a 4-channel Atmospheric Soundscape Mixer with independent volume controls for each channel: Calming Lofi Synth, Gentle Rainfall, Crackling Hearth, and any Custom Ambient Tracks loaded from the asset directory. Toggle each channel on/off and adjust individual volume levels to create your perfect ambient soundscape.'
      },
      {
        question: 'What overlay modes are available?',
        answer: 'Four overlay modes are available: None (clean ambient background), Clock (live digital clock with sans/serif/mono font styles, AM/PM toggle, and date display), Breathing (guided box breathing exercise with an expanding/contracting circle — 4-second cycles of inhale, hold, exhale, rest), and Timer (Pomodoro timer with preset durations of 5, 15, 25, and 45 minutes, start/pause controls, and a circular SVG progress ring).'
      },
      {
        question: 'Can I use the Ambient Screen for meditation and breathing exercises?',
        answer: 'Yes. The guided breathing overlay mode leads you through box breathing cycles: inhale for 4 seconds as the circle expands, hold for 4 seconds, exhale for 4 seconds as the circle contracts, and rest for 4 seconds. The visual bubble animation and timer make it easy to follow along. Combined with the ambient soundscapes and animated gradients, it creates a complete meditation and mindfulness environment.'
      },
      {
        question: 'Is the Ambient Screen free? Does it work on mobile and TV?',
        answer: 'Yes, it is completely free with no downloads, extensions, or account sign-ups required. It runs instantly in any modern web browser on Windows, macOS, Linux, ChromeOS, iOS, Android, and Smart TVs. The responsive design adapts to desktop monitors, laptop screens, tablets, mobile phones, and large TV displays for a beautiful ambient experience everywhere.'
      }
    ],
    es: [
      {
        question: '¿Qué es una pantalla ambiental?',
        answer: 'Una pantalla ambiental es un display interactivo basado en navegador que transforma cualquier pantalla en un entorno visual relajante. Incluye gradientes animados con 6 presets, partículas estelares, mezclador de sonidos de 4 canales y modos de superposición como reloj, respiración guiada y temporizador Pomodoro.'
      },
      {
        question: '¿Cómo uso la pantalla ambiental en mi ordenador?',
        answer: 'Abre la página en tu navegador, presiona "F" para pantalla completa. Presiona Espacio para abrir el panel de ajustes y personalizar gradientes, velocidad, estrellas, sonidos y modos de superposición.'
      },
      {
        question: '¿Puedo cambiar los colores del gradiente?',
        answer: 'Sí. Elige entre 6 presets: Cyber Neon, Aurora Dreams, Sunset Solitude, Deep Forest, Cherry Blossom y Cosmic Myst. Ajusta la velocidad de 0.0 (congelado) a 2.0 (rápido).'
      },
      {
        question: '¿Puedo mezclar sonidos ambientales?',
        answer: 'Sí. El mezclador de 4 canales incluye Lofi Synth, Lluvia Suave, Chimenea y pistas personalizadas. Cada canal tiene control independiente de volumen y activación.'
      },
      {
        question: '¿Qué modos de superposición están disponibles?',
        answer: 'Cuatro modos: Ninguno, Reloj (con estilos de fuente), Respiración (ejercicio de respiración guiada) y Temporizador Pomodoro (5, 15, 25 y 45 minutos).'
      }
    ],
    pt: [
      {
        question: 'O que é uma tela ambiente?',
        answer: 'Uma tela ambiente é um display interativo baseado em navegador que transforma qualquer tela em um ambiente visual relaxante. Inclui gradientes animados com 6 presets, partículas estelares, mixer de som de 4 canais e modos de sobreposição como relógio, respiração guiada e timer Pomodoro.'
      },
      {
        question: 'Como uso a tela ambiente no meu computador?',
        answer: 'Abra a página no navegador, pressione "F" para tela cheia. Pressione Espaço para abrir o painel de configurações.'
      },
      {
        question: 'Posso mudar as cores do gradiente?',
        answer: 'Sim. Escolha entre 6 presets: Cyber Neon, Aurora Dreams, Sunset Solitude, Deep Forest, Cherry Blossom e Cosmic Myst. Ajuste a velocidade de 0.0 a 2.0.'
      },
      {
        question: 'Posso misturar sons ambientes?',
        answer: 'Sim. O mixer de 4 canais inclui Lofi Synth, Chuva Suave, Lareira e faixas personalizadas com controle de volume independente.'
      },
      {
        question: 'Quais modos de sobreposição estão disponíveis?',
        answer: 'Quatro modos: Nenhum, Relógio, Respiração (exercício guiado) e Timer Pomodoro (5, 15, 25 e 45 minutos).'
      }
    ],
    fr: [
      {
        question: 'Qu\'est-ce qu\'un écran ambiant ?',
        answer: 'Un écran ambiant est un affichage interactif dans votre navigateur qui transforme n\'importe quel écran en un environnement visuel apaisant. Avec des dégradés animés (6 thèmes), des particules d\'étoiles cosmiques, un mixeur sonore 4 canaux et des modes superposition : horloge, respiration guidée et minuteur Pomodoro.'
      },
      {
        question: 'Comment utiliser l\'écran ambiant sur mon ordinateur ?',
        answer: 'Ouvrez la page dans votre navigateur, appuyez sur "F" pour le plein écran. Appuyez sur Espace pour ouvrir les paramètres.'
      },
      {
        question: 'Puis-je changer les couleurs du dégradé ?',
        answer: 'Oui. Choisissez parmi 6 thèmes : Cyber Neon, Aurora Dreams, Sunset Solitude, Deep Forest, Cherry Blossom et Cosmic Myst. Réglez la vitesse de 0.0 à 2.0.'
      },
      {
        question: 'Puis-je mixer des sons d\'ambiance ?',
        answer: 'Oui. Le mixeur 4 canaux comprend Lofi Synth, Pluie Douce, Cheminée Crépitante et pistes personnalisées avec volume indépendant.'
      },
      {
        question: 'Quels modes de superposition sont disponibles ?',
        answer: 'Quatre modes : Aucun, Horloge, Respiration (exercice guidé) et Minuteur Pomodoro (5, 15, 25 et 45 minutes).'
      }
    ],
    de: [
      {
        question: 'Was ist ein Ambiente-Bildschirm?',
        answer: 'Ein Ambiente-Bildschirm ist eine interaktive browserbasierte Anzeige, die jeden Bildschirm in eine beruhigende visuelle Umgebung verwandelt. Mit animierten Farbverläufen (6 Presets), kosmischen Sternpartikeln, 4-Kanal-Soundmixer und Overlay-Modi wie Uhr, geführter Atmung und Pomodoro-Timer.'
      },
      {
        question: 'Wie benutze ich den Ambiente-Bildschirm auf meinem Computer?',
        answer: 'Öffnen Sie die Seite im Browser, drücken Sie "F" für Vollbild. Drücken Sie die Leertaste für die Einstellungen.'
      },
      {
        question: 'Kann ich die Farbverläufe ändern?',
        answer: 'Ja. Wählen Sie aus 6 Presets: Cyber Neon, Aurora Dreams, Sunset Solitude, Deep Forest, Cherry Blossom und Cosmic Myst. Passen Sie die Geschwindigkeit von 0.0 bis 2.0 an.'
      },
      {
        question: 'Kann ich Ambient-Sounds mischen?',
        answer: 'Ja. Der 4-Kanal-Soundmixer bietet Lofi Synth, Sanften Regen, Kaminfeuer und benutzerdefinierte Titel mit unabhängiger Lautstärkeregelung.'
      },
      {
        question: 'Welche Overlay-Modi sind verfügbar?',
        answer: 'Vier Modi: Keiner, Uhr (mit Schriftarten), Atmung (geführte Atemübung) und Pomodoro-Timer (5, 15, 25 und 45 Minuten).'
      }
    ],
    hi: [
      {
        question: 'एम्बिएंट स्क्रीन क्या है?',
        answer: 'एम्बिएंट स्क्रीन एक ब्राउज़र-आधारित इंटरैक्टिव डिस्प्ले है जो किसी भी स्क्रीन को शांत दृश्य वातावरण में बदल देता है। इसमें 6 ग्रेडिएंट प्रीसेट, तारे, 4-चैनल साउंडस्केप मिक्सर और ओवरले मोड शामिल हैं।'
      },
      {
        question: 'मैं अपने कंप्यूटर पर एम्बिएंट स्क्रीन का उपयोग कैसे करूं?',
        answer: 'पेज को ब्राउज़र में खोलें, "F" दबाकर फुलस्क्रीन करें। सेटिंग्स के लिए स्पेस बार दबाएं।'
      },
      {
        question: 'क्या मैं ग्रेडिएंट रंग बदल सकता हूं?',
        answer: 'हां। 6 प्रीसेट में से चुनें: साइबर नियॉन, ऑरोरा ड्रीम्स, सनसेट सॉलिट्यूड, डीप फ़ॉरेस्ट, चेरी ब्लॉसम और कॉस्मिक मिस्ट। गति 0.0 से 2.0 तक समायोजित करें।'
      },
      {
        question: 'क्या मैं एम्बिएंट ध्वनियाँ मिक्स कर सकता हूं?',
        answer: 'हां। 4-चैनल मिक्सर में लोफाई सिंथ, हल्की बारिश, जलती आग और कस्टम ट्रैक शामिल हैं। प्रत्येक चैनल का अलग वॉल्यूम नियंत्रण है।'
      },
      {
        question: 'कौन से ओवरले मोड उपलब्ध हैं?',
        answer: 'चार मोड: कोई नहीं, घड़ी, श्वास (निर्देशित श्वास व्यायाम) और पोमोडोरो टाइमर (5, 15, 25 और 45 मिनट)।'
      }
    ],
    ja: [
      {
        question: 'アンビエント画面とは何ですか？',
        answer: 'アンビエント画面は、ブラウザベースのインタラクティブディスプレイで、画面を落ち着くビジュアル環境に変えます。6つのグラデーションプリセット、星のパーティクル、4チャンネルサウンドスケープミキサー、時計、ガイド付き呼吸法、ポモドーロタイマーを搭載。'
      },
      {
        question: 'パソコンでアンビエント画面を使うには？',
        answer: 'ブラウザでページを開き、「F」キーで全画面表示。スペースキーで設定パネルを開きます。'
      },
      {
        question: 'グラデーションの色を変更できますか？',
        answer: 'はい。6つのプリセット（Cyber Neon、Aurora Dreams、Sunset Solitude、Deep Forest、Cherry Blossom、Cosmic Myst）から選択。速度は0.0〜2.0で調整。'
      },
      {
        question: '環境音をミックスできますか？',
        answer: 'はい。4チャンネルミキサー（Lofi Synth、穏やかな雨、暖炉、カスタムトラック）で各チャンネルの音量を個別に制御。'
      },
      {
        question: 'どのオーバーレイモードがありますか？',
        answer: '4つのモード：なし、時計、呼吸法（ガイド付き）、ポモドーロタイマー（5、15、25、45分）。'
      }
    ]
  },
  'clock-screen': {
    en: [
      {
        question: 'What is a flip clock screen?',
        answer: 'A flip clock screen is an online browser-based display that shows the current time using retro flip-card animation, where each digit flips down to reveal the next number — mimicking vintage mechanical alarm clocks and airport split-flap displays. Our version includes 6 aesthetic themes, Pomodoro timer, sound effects, and brightness control — all in fullscreen, no download needed.'
      },
      {
        question: 'How do I use this flip clock on my desktop or laptop?',
        answer: 'Open the page in your browser, click the Fullscreen button or press "F" on your keyboard. The clock fills your entire screen with the retro flip animation. Press Space to open the settings panel where you can customize the theme, toggle 12/24h format, show or hide seconds, enable the countdown timer, adjust brightness, and control sound.'
      },
      {
        question: 'What themes are available?',
        answer: 'There are 6 aesthetic themes to choose from: Warm Retro (vintage amber glow), Pure OLED (deep blacks with crisp white text), Soft White (clean minimal look), Cyber Grid (neon grid background), Rose Gold (warm pink metallic), and Space Dusk (dark cosmic gradient). Each theme transforms the entire look and feel of the clock.'
      },
      {
        question: 'Does this flip clock have a fullscreen mode?',
        answer: 'Yes. Click the Fullscreen button or press the "F" key to enter fullscreen mode. The browser UI hides automatically, letting the clock fill your entire display. Press Esc to exit. An idle detection feature dims controls after a few seconds of inactivity for a clean, distraction-free display.'
      },
      {
        question: 'Can I use this as a Pomodoro timer or countdown?',
        answer: 'Yes. Press "T" or open settings to switch to Countdown mode. Select from preset Pomodoro intervals (5, 10, 15, 25, 40, 60 minutes) or set a custom duration. The flip animation works during countdown too — digits flip down as the timer counts. Press "R" to reset, and an alarm chord sounds when the timer reaches zero.'
      },
      {
        question: 'What keyboard shortcuts are available?',
        answer: 'F — Fullscreen toggle, Space — Toggle settings/timer panel, S — Toggle sound on/off, T — Switch between clock and countdown mode, R — Reset countdown, Esc — Exit fullscreen or close settings.'
      },
      {
        question: 'Does the flip clock have sound effects?',
        answer: 'Yes. A retro click sound plays during flip animations, recreating the satisfying mechanical flap sound of vintage flip clocks. The "S" key toggles sound on and off, or use the Mute toggle in settings. When the countdown timer reaches zero, a synthesized alarm chord plays to alert you.'
      },
      {
        question: 'Can I adjust the brightness?',
        answer: 'Yes. Use the Brightness slider (10% to 100%) to control the clock\'s visual intensity. This is especially useful in dark rooms — lower the brightness for a soft, non-intrusive night clock that won\'t disturb your sleep.'
      }
    ],
    es: [
      {
        question: '¿Qué es una pantalla de reloj flip?',
        answer: 'Una pantalla de reloj flip es una pantalla online basada en navegador que muestra la hora actual con animación retro de tarjetas giratorias, imitando los relojes despertadores mecánicos vintage. Nuestra versión incluye 6 temas estéticos, temporizador Pomodoro, efectos de sonido y control de brillo — todo en pantalla completa.'
      },
      {
        question: '¿Cómo uso este reloj flip en mi escritorio o portátil?',
        answer: 'Abre la página en tu navegador, haz clic en Pantalla Completa o presiona "F". Presiona Espacio para abrir el panel de ajustes donde puedes personalizar el tema, formato 12/24h, segundos, temporizador y brillo.'
      },
      {
        question: '¿Qué temas están disponibles?',
        answer: 'Hay 6 temas estéticos: Warm Retro (brillo ámbar vintage), Pure OLED (negros profundos), Soft White (minimalista), Cyber Grid (cuadrícula neón), Rose Gold (rosa metálico) y Space Dusk (gradiente cósmico oscuro).'
      },
      {
        question: '¿Tiene modo de pantalla completa?',
        answer: 'Sí. Haz clic en Pantalla Completa o presiona "F". La interfaz se oculta automáticamente. Presiona Esc para salir. La detección de inactividad atenúa los controles tras unos segundos para una visualización limpia.'
      },
      {
        question: '¿Puedo usarlo como temporizador Pomodoro?',
        answer: 'Sí. Presiona "T" para cambiar al modo Cuenta Atrás. Elige entre intervalos Pomodoro predefinidos (5, 10, 15, 25, 40, 60 min) o personaliza la duración. Presiona "R" para reiniciar.'
      },
      {
        question: '¿Qué atajos de teclado hay?',
        answer: 'F — Pantalla completa, Espacio — Abrir/cerrar configuración, S — Silenciar/activar sonido, T — Cambiar modo reloj/cuenta atrás, R — Reiniciar, Esc — Salir.'
      },
      {
        question: '¿Tiene efectos de sonido?',
        answer: 'Sí. Un clic retro suena durante las animaciones flip. La tecla "S" activa/desactiva el sonido. Al terminar la cuenta atrás, suena una alarma sintetizada.'
      },
      {
        question: '¿Puedo ajustar el brillo?',
        answer: 'Sí. Usa el control deslizante de Brillo (10% a 100%) para regular la intensidad visual, ideal para usar el reloj por la noche sin molestar.'
      }
    ],
    pt: [
      {
        question: 'O que é uma tela de relógio flip?',
        answer: 'Uma tela de relógio flip é uma exibição online baseada em navegador que mostra as horas com animação retrô de cartas giratórias, imitando relógios mecânicos vintage. Nossa versão inclui 6 temas estéticos, timer Pomodoro, efeitos sonoros e controle de brilho — tudo em tela cheia.'
      },
      {
        question: 'Como usar este relógio flip no meu desktop ou notebook?',
        answer: 'Abra a página no navegador, clique em Tela Cheia ou pressione "F". Pressione Espaço para abrir o painel de configurações e personalizar tema, formato 12/24h, segundos, timer e brilho.'
      },
      {
        question: 'Quais temas estão disponíveis?',
        answer: '6 temas estéticos: Warm Retro (brilho âmbar vintage), Pure OLED (pretos profundos), Soft White (minimalista), Cyber Grid (grade neon), Rose Gold (rosa metálico) e Space Dusk (gradiente cósmico escuro).'
      },
      {
        question: 'Tem modo tela cheia?',
        answer: 'Sim. Clique em Tela Cheia ou pressione "F". A interface se oculta automaticamente. Pressione Esc para sair.'
      },
      {
        question: 'Posso usar como timer Pomodoro?',
        answer: 'Sim. Pressione "T" para mudar para o modo Contagem Regressiva. Escolha entre intervalos Pomodoro (5, 10, 15, 25, 40, 60 min) ou personalize. Pressione "R" para reiniciar.'
      },
      {
        question: 'Quais atalhos de teclado existem?',
        answer: 'F — Tela cheia, Espaço — Configurações, S — Som liga/desliga, T — Alternar modo, R — Reiniciar, Esc — Sair.'
      },
      {
        question: 'Tem efeitos sonoros?',
        answer: 'Sim. Um clique retrô soa nas animações flip. A tecla "S" liga/desliga o som. Um alarme toca quando o timer chega a zero.'
      },
      {
        question: 'Posso ajustar o brilho?',
        answer: 'Sim. Use o controle deslizante de Brilho (10% a 100%) para ajustar a intensidade, ideal para usar à noite sem incomodar.'
      }
    ],
    fr: [
      {
        question: 'Qu\'est-ce qu\'un écran d\'horloge à volets ?',
        answer: 'Un écran d\'horloge à volets est un affichage en ligne basé sur navigateur qui montre l\'heure avec une animation rétro de cartes à bascule. Notre version inclut 6 thèmes esthétiques, un minuteur Pomodoro, des effets sonores et un contrôle de luminosité — tout en plein écran.'
      },
      {
        question: 'Comment utiliser cette horloge sur mon PC ou portable ?',
        answer: 'Ouvrez la page dans votre navigateur, cliquez sur Plein Écran ou appuyez sur "F". Appuyez sur Espace pour ouvrir les paramètres et personnaliser le thème, le format 12/24h, les secondes, le minuteur et la luminosité.'
      },
      {
        question: 'Quels thèmes sont disponibles ?',
        answer: '6 thèmes esthétiques : Warm Retro (lueur ambrée vintage), Pure OLED (noirs profonds), Soft White (minimaliste), Cyber Grid (grille néon), Rose Gold (rose métallique) et Space Dusk (dégradé cosmique sombre).'
      },
      {
        question: 'A-t-elle un mode plein écran ?',
        answer: 'Oui. Cliquez sur Plein Écran ou appuyez sur "F". L\'interface se masque automatiquement. Appuyez sur Esc pour quitter.'
      },
      {
        question: 'Puis-je l\'utiliser comme minuteur Pomodoro ?',
        answer: 'Oui. Appuyez sur "T" pour passer en mode Compte à Rebours. Choisissez parmi les intervalles Pomodoro (5, 10, 15, 25, 40, 60 min) ou personnalisez la durée. Appuyez sur "R" pour réinitialiser.'
      },
      {
        question: 'Quels sont les raccourcis clavier ?',
        answer: 'F — Plein écran, Espace — Paramètres, S — Son marche/arrêt, T — Changer de mode, R — Réinitialiser, Esc — Quitter.'
      },
      {
        question: 'Y a-t-il des effets sonores ?',
        answer: 'Oui. Un clic rétro se joue pendant les animations flip. La touche "S" active/désactive le son. Une alarme sonore retentit à la fin du compte à rebours.'
      },
      {
        question: 'Puis-je régler la luminosité ?',
        answer: 'Oui. Utilisez le curseur de Luminosité (10% à 100%) pour ajuster l\'intensité visuelle, idéal pour une utilisation nocturne.'
      }
    ],
    de: [
      {
        question: 'Was ist ein Klipp-Klapp-Uhr-Bildschirm?',
        answer: 'Ein Klipp-Klapp-Uhr-Bildschirm ist eine browserbasierte Online-Anzeige, die die aktuelle Uhrzeit mit einer Retro-Kippkarten-Animation darstellt. Unsere Version bietet 6 ästhetische Designs, Pomodoro-Timer, Soundeffekte und Helligkeitsregelung — alles im Vollbildmodus.'
      },
      {
        question: 'Wie benutze ich diese Klappuhr auf meinem Desktop oder Laptop?',
        answer: 'Öffnen Sie die Seite im Browser, klicken Sie auf Vollbild oder drücken Sie "F". Drücken Sie die Leertaste für die Einstellungen, um Design, 12/24h-Format, Sekunden, Timer und Helligkeit anzupassen.'
      },
      {
        question: 'Welche Designs sind verfügbar?',
        answer: '6 ästhetische Designs: Warm Retro (Vintage-Amber-Glow), Pure OLED (tiefe Schwarztöne), Soft White (minimalistisch), Cyber Grid (Neon-Gitter), Rose Gold (rosé-metallisch) und Space Dusk (dunkler kosmischer Verlauf).'
      },
      {
        question: 'Hat es einen Vollbildmodus?',
        answer: 'Ja. Klicken Sie auf Vollbild oder drücken Sie "F". Die Benutzeroberfläche blendet sich automatisch aus. Drücken Sie Esc zum Beenden.'
      },
      {
        question: 'Kann ich es als Pomodoro-Timer verwenden?',
        answer: 'Ja. Drücken Sie "T" für den Countdown-Modus. Wählen Sie aus voreingestellten Pomodoro-Intervallen (5, 10, 15, 25, 40, 60 Min.) oder stellen Sie eine benutzerdefinierte Dauer ein. Drücken Sie "R" zum Zurücksetzen.'
      },
      {
        question: 'Welche Tastenkombinationen gibt es?',
        answer: 'F — Vollbild, Leertaste — Einstellungen, S — Ton ein/aus, T — Modus wechseln, R — Zurücksetzen, Esc — Beenden.'
      },
      {
        question: 'Hat es Soundeffekte?',
        answer: 'Ja. Ein Retro-Klickgeräusch ertönt bei den Flip-Animationen. Die Taste "S" schaltet den Ton ein/aus. Ein Alarmton ertönt, wenn der Countdown Null erreicht.'
      },
      {
        question: 'Kann ich die Helligkeit einstellen?',
        answer: 'Ja. Mit dem Helligkeitsregler (10% bis 100%) können Sie die visuelle Intensität anpassen — ideal für die Nutzung als Nachtuhr.'
      }
    ],
    hi: [
      {
        question: 'फ्लिप घड़ी स्क्रीन क्या है?',
        answer: 'फ्लिप घड़ी स्क्रीन एक ब्राउज़र-आधारित ऑनलाइन डिस्प्ले है जो रेट्रो फ्लिप-कार्ड एनिमेशन के साथ वर्तमान समय दिखाती है। हमारे संस्करण में 6 एस्थेटिक थीम, पोमोडोरो टाइमर, ध्वनि प्रभाव और चमक नियंत्रण शामिल हैं — सभी फुलस्क्रीन में।'
      },
      {
        question: 'मैं अपने डेस्कटॉप या लैपटॉप पर इस फ्लिप घड़ी का उपयोग कैसे करूं?',
        answer: 'पेज को ब्राउज़र में खोलें, फुलस्क्रीन बटन पर क्लिक करें या "F" दबाएं। सेटिंग्स के लिए स्पेस दबाएं जहां आप थीम, 12/24 घंटे प्रारूप, सेकंड, टाइमर और चमक को कस्टमाइज़ कर सकते हैं।'
      },
      {
        question: 'कौन सी थीम उपलब्ध हैं?',
        answer: '6 एस्थेटिक थीम: वार्म रेट्रो (एम्बर ग्लो), प्योर OLED (गहरा काला), सॉफ्ट व्हाइट (मिनिमल), साइबर ग्रिड (नीयन ग्रिड), रोज़ गोल्ड (गुलाबी धात्विक) और स्पेस डस्क (कॉस्मिक ग्रेडिएंट)।'
      },
      {
        question: 'क्या इसमें फुलस्क्रीन मोड है?',
        answer: 'हां। फुलस्क्रीन बटन पर क्लिक करें या "F" दबाएं। Esc दबाकर बाहर निकलें।'
      },
      {
        question: 'क्या मैं इसे पोमोडोरो टाइमर के रूप में उपयोग कर सकता हूं?',
        answer: 'हां। "T" दबाकर काउंटडाउन मोड पर जाएं। प्रीसेट पोमोडोरो अंतराल (5, 10, 15, 25, 40, 60 मिनट) चुनें या कस्टम समय सेट करें।'
      },
      {
        question: 'कौन से कीबोर्ड शॉर्टकट उपलब्ध हैं?',
        answer: 'F — फुलस्क्रीन, स्पेस — सेटिंग्स, S — ध्वनि चालू/बंद, T — मोड बदलें, R — रीसेट, Esc — बाहर निकलें।'
      },
      {
        question: 'क्या इसमें ध्वनि प्रभाव हैं?',
        answer: 'हां। फ्लिप एनिमेशन के दौरान रेट्रो क्लिक ध्वनि बजती है। "S" कुंजी से ध्वनि चालू/बंद करें।'
      },
      {
        question: 'क्या मैं चमक समायोजित कर सकता हूं?',
        answer: 'हां। चमक स्लाइडर (10% से 100%) का उपयोग करें, रात में उपयोग के लिए आदर्श।'
      }
    ],
    ja: [
      {
        question: 'フリップ時計画面とは何ですか？',
        answer: 'フリップ時計画面は、ブラウザベースのオンライン表示で、数字がパタパタとめくれるレトロなフリップカードアニメーションで現在時刻を表示します。6つの美的テーマ、ポモドーロタイマー、効果音、明るさ調節を搭載。全画面表示対応、ダウンロード不要。'
      },
      {
        question: 'デスクトップやノートPCでこのフリップ時計を使うには？',
        answer: 'ブラウザでページを開き、全画面ボタンをクリックするか「F」キーを押します。スペースキーで設定パネルを開き、テーマ、12/24時間表示、秒表示、タイマー、明るさをカスタマイズできます。'
      },
      {
        question: '利用可能なテーマは？',
        answer: '6つの美的テーマ：Warm Retro（ビンテージアンバーグロー）、Pure OLED（深い黒）、Soft White（クリーンミニマル）、Cyber Grid（ネオングリッド）、Rose Gold（ローズゴールドメタリック）、Space Dusk（ダークコズミックグラデーション）。'
      },
      {
        question: '全画面モードはありますか？',
        answer: 'はい。全画面ボタンをクリックするか「F」キーを押します。Escキーで終了。数秒操作がないと自動的にコントロールがフェードアウトします。'
      },
      {
        question: 'ポモドーロタイマーとして使えますか？',
        answer: 'はい。「T」キーでカウントダウンモードに切り替え。プリセット（5、10、15、25、40、60分）から選択するか、カスタム時間を設定。「R」キーでリセット。'
      },
      {
        question: 'キーボードショートカットは？',
        answer: 'F — 全画面、スペース — 設定、S — サウンドON/OFF、T — モード切替、R — リセット、Esc — 終了。'
      },
      {
        question: '効果音はありますか？',
        answer: 'はい。フリップアニメーション時にレトロなクリック音が再生されます。「S」キーでON/OFF切り替え。'
      },
      {
        question: '明るさの調整はできますか？',
        answer: 'はい。明るさスライダー（10%〜100%）で視覚的な強度を調整。夜間の使用に最適です。'
      }
    ]
  },
  'placeholder-screen': {
    en: []
  },
  'broken-screen': {
    en: [
      {
        question: 'What is a fake broken screen?',
        answer: 'A fake broken screen is a realistic cracked-screen image displayed on a monitor or device to simulate physical screen damage. It is a harmless prank tool used for jokes, video content, and theatrical effects without actually damaging the display.'
      },
      {
        question: 'How does a broken screen prank work?',
        answer: 'The broken screen prank works by displaying a high-resolution photo-realistic cracked-screen image in fullscreen mode. The effect is so convincing that observers often believe the display is physically shattered. You can switch between 8 different crack styles and adjust brightness to match the lighting environment for maximum realism.'
      },
      {
        question: 'Can I use this broken screen simulator on my phone?',
        answer: 'Yes, the broken screen simulator works on all smartphones and tablets. Open the page in your mobile browser, tap the fullscreen button, and rotate to landscape if desired. The realistic cracked display is perfect for convincing friends and family in any setting.'
      },
      {
        question: 'Is the broken screen tool free to use?',
        answer: 'Yes, the broken screen tool is completely free. No account, no signup, and no download required. It works directly in your browser on desktop, laptop, tablet, phone, and Smart TV. Perfect for last-minute pranks, April Fools Day, or spontaneous jokes.'
      },
      {
        question: 'How to clean a simulated cracked screen?',
        answer: 'Since the crack is just a fullscreen image and not real damage, no physical repair is needed. Simply click Fullscreen again or press the Escape key to exit fullscreen mode, and the screen will instantly return to normal. The tool is perfectly safe for all devices.'
      },
      {
        question: 'What styles of cracked screens are available?',
        answer: 'The tool includes 8 different cracked-screen images ranging from minor spiderweb cracks to heavy shatter patterns. You can cycle through them to find the most convincing look for your prank. Each image is rendered in high resolution for maximum realism on any display size.'
      }
    ],
    es: [
      {
        question: '¿Qué es una pantalla rota falsa?',
        answer: 'Una pantalla rota falsa es una imagen realista de pantalla agrietada que se muestra en un monitor o dispositivo para simular daños físicos en la pantalla. Es una herramienta de broma inofensiva para chistes, videos y efectos teatrales sin dañar realmente la pantalla.'
      },
      {
        question: '¿Cómo funciona la broma de la pantalla rota?',
        answer: 'La broma de la pantalla rota funciona mostrando una imagen fotorrealista de pantalla agrietada en modo pantalla completa. El efecto es tan convincente que los observadores suelen creer que la pantalla está físicamente rota. Puedes cambiar entre 8 estilos de grietas diferentes y ajustar el brillo.'
      },
      {
        question: '¿Puedo usar el simulador de pantalla rota en mi teléfono?',
        answer: 'Sí, el simulador funciona en todos los teléfonos inteligentes y tabletas. Abre la página en tu navegador móvil, pulsa el botón de pantalla completa y, si lo deseas, gira a horizontal. La pantalla agrietada realista es perfecta para engañar a amigos y familiares.'
      },
      {
        question: '¿La herramienta de pantalla rota es gratuita?',
        answer: 'Sí, la herramienta de pantalla rota es completamente gratuita. Sin cuenta, sin registro y sin necesidad de descarga. Funciona directamente en tu navegador en cualquier dispositivo.'
      },
      {
        question: '¿Hay diferentes estilos de pantalla agrietada?',
        answer: 'La herramienta incluye 8 imágenes diferentes de pantallas agrietadas, desde pequeñas telarañas hasta patrones de rotura severos. Puedes recorrerlas para encontrar el aspecto más convincente para tu broma.'
      }
    ],
    pt: [
      {
        question: 'O que é uma tela quebrada falsa?',
        answer: 'Uma tela quebrada falsa é uma imagem realista de tela rachada exibida em um monitor para simular danos físicos na tela. É uma ferramenta de pegadinha inofensiva para brincadeiras, vídeos e efeitos teatrais sem danificar a tela.'
      },
      {
        question: 'Como funciona a pegadinha da tela quebrada?',
        answer: 'A pegadinha funciona exibindo uma imagem fotorrealista de tela rachada em modo tela cheia. O efeito é tão convincente que observadores geralmente acreditam que a tela está fisicamente quebrada. Você pode alternar entre 8 estilos de rachaduras e ajustar o brilho.'
      },
      {
        question: 'Posso usar o simulador de tela quebrada no meu celular?',
        answer: 'Sim, o simulador funciona em todos os smartphones e tablets. Abra a página no seu navegador móvel, toque no botão de tela cheia e gire para paisagem se desejar. A tela rachada realista é perfeita para enganar amigos e familiares.'
      },
      {
        question: 'A ferramenta de tela quebrada é gratuita?',
        answer: 'Sim, a ferramenta é completamente gratuita. Sem conta, sem cadastro e sem necessidade de download. Funciona diretamente no seu navegador em desktop, laptop, tablet, celular e Smart TV.'
      }
    ],
    fr: [
      {
        question: 'Qu\'est-ce qu\'un faux écran cassé ?',
        answer: 'Un faux écran cassé est une image réaliste d\'écran fissuré affichée sur un moniteur pour simuler des dommages physiques. C\'est un outil de blague inoffensif pour des farces, vidéos et effets théâtraux sans endommager l\'écran.'
      },
      {
        question: 'Comment fonctionne la blague de l\'écran cassé ?',
        answer: 'La blague fonctionne en affichant une image photoréaliste d\'écran fissuré en plein écran. L\'effet est si convaincant que les observateurs croient souvent que l\'écran est physiquement brisé. Vous pouvez changer entre 8 styles de fissures et ajuster la luminosité.'
      },
      {
        question: 'Puis-je utiliser le simulateur d\'écran cassé sur mon téléphone ?',
        answer: 'Oui, le simulateur fonctionne sur tous les smartphones et tablettes. Ouvrez la page dans votre navigateur mobile, appuyez sur le bouton plein écran et pivotez en paysage si souhaité. L\'écran fissuré réaliste est parfait pour tromper amis et famille.'
      },
      {
        question: 'L\'outil d\'écran cassé est-il gratuit ?',
        answer: 'Oui, l\'outil est entièrement gratuit. Sans compte, sans inscription et sans téléchargement nécessaire. Il fonctionne directement dans votre navigateur sur tous les appareils.'
      }
    ],
    de: [
      {
        question: 'Was ist ein falscher kaputter Bildschirm?',
        answer: 'Ein falscher kaputter Bildschirm ist ein realistisches Bild eines gesprungenen Displays, das auf einem Monitor angezeigt wird, um physische Schäden zu simulieren. Es ist ein harmloses Scherzwerkzeug für Witze, Videos und Theater-Effekte.'
      },
      {
        question: 'Wie funktioniert der kaputter-Bildschirm-Streich?',
        answer: 'Der Streich funktioniert durch die Anzeige eines fotorealistischen Bildes eines gesprungenen Bildschirms im Vollbildmodus. Der Effekt ist so überzeugend, dass Beobachter oft glauben, der Bildschirm sei physisch zerbrochen. Sie können zwischen 8 verschiedenen Riss-Stilen wechseln.'
      },
      {
        question: 'Kann ich den kaputter-Bildschirm-Simulator auf meinem Handy verwenden?',
        answer: 'Ja, der Simulator funktioniert auf allen Smartphones und Tablets. Öffnen Sie die Seite in Ihrem mobilen Browser, tippen Sie auf die Vollbild-Schaltfläche. Der realistische gesprungene Bildschirm ist perfekt, um Freunde und Familie zu überraschen.'
      },
      {
        question: 'Ist das kaputter-Bildschirm-Tool kostenlos?',
        answer: 'Ja, das Tool ist völlig kostenlos. Kein Konto, keine Anmeldung und kein Download erforderlich. Es funktioniert direkt in Ihrem Browser auf allen Geräten.'
      }
    ],
    hi: [
      {
        question: 'फर्जी टूटी स्क्रीन क्या है?',
        answer: 'फर्जी टूटी स्क्रीन एक यथार्थवादी क्रैक-डिस्प्ले इमेज है जो स्क्रीन पर शारीरिक क्षति का अनुकरण करने के लिए दिखाई जाती है। यह मजाक, वीडियो सामग्री और नाटकीय प्रभावों के लिए एक हानिरहित प्रैंक टूल है।'
      },
      {
        question: 'टूटी स्क्रीन प्रैंक कैसे काम करता है?',
        answer: 'टूटी स्क्रीन प्रैंक फुलस्क्रीन मोड में एक फोटो-रियलिस्टिक क्रैक-स्क्रीन इमेज प्रदर्शित करके काम करता है। प्रभाव इतना विश्वसनीय है कि देखने वाले अक्सर मान लेते हैं कि स्क्रीन वास्तव में टूट गई है। आप 8 अलग-अलग क्रैक स्टाइल के बीच स्विच कर सकते हैं।'
      },
      {
        question: 'क्या मैं अपने फोन पर टूटी स्क्रीन सिम्युलेटर का उपयोग कर सकता हूँ?',
        answer: 'हाँ, सिम्युलेटर सभी स्मार्टफोन और टैबलेट पर काम करता है। अपने मोबाइल ब्राउज़र में पेज खोलें और फुलस्क्रीन बटन दबाएँ। यथार्थवादी क्रैक डिस्प्ले दोस्तों और परिवार को आश्चर्यचकित करने के लिए एकदम सही है।'
      },
      {
        question: 'क्या टूटी स्क्रीन टूल मुफ्त है?',
        answer: 'हाँ, टूल पूरी तरह से मुफ्त है। कोई खाता, कोई साइनअप और कोई डाउनलोड आवश्यक नहीं है। यह डेस्कटॉप, लैपटॉप, टैबलेट, फोन और स्मार्ट टीवी पर आपके ब्राउज़र में सीधे काम करता है।'
      }
    ],
    ja: [
      {
        question: '偽の壊れた画面とは何ですか？',
        answer: '偽の壊れた画面とは、モニターに表示されるリアルなひび割れ画像で、物理的な画面の損傷をシミュレートします。ジョーク、ビデオコンテンツ、劇的な効果のための無害ないたずらツールです。'
      },
      {
        question: '壊れた画面のいたずらはどのように機能しますか？',
        answer: '全画面モードでフォトリアリスティックなひび割れ画像を表示することで機能します。その効果は非常に説得力があり、見た人はディスプレイが物理的に壊れていると信じてしまうことがよくあります。8種類のひび割れスタイルを切り替えられます。'
      },
      {
        question: 'スマートフォンで壊れた画面シミュレーターを使用できますか？',
        answer: 'はい、シミュレーターはすべてのスマートフォンとタブレットで動作します。モバイルブラウザでページを開き、全画面ボタンをタップしてください。リアルなひび割れディスプレイは、友人や家族を驚かせるのに最適です。'
      },
      {
        question: '壊れた画面ツールは無料ですか？',
        answer: 'はい、完全に無料です。アカウントやサインアップ、ダウンロードは必要ありません。デスクトップ、ノートPC、タブレット、スマートフォン、Smart TVでブラウザから直接動作します。'
      }
    ]
  },
  'blue-screen-prank': {
    en: [
      {
        question: 'What is a fake blue screen of death (BSOD)?',
        answer: 'A fake blue screen of death is a browser-based simulation that replicates the Windows BSOD error screen. It displays the familiar blue background, sad face emoticon, stop code, QR code, and animated progress counter — all without actually crashing the computer. It is a harmless prank tool used for jokes, video content, and tech demonstrations.'
      },
      {
        question: 'Is the fake BSOD prank safe for my computer?',
        answer: 'Yes, completely safe. The fake BSOD is rendered entirely in your browser using HTML, CSS, and JavaScript. It does not install software, modify system files, access personal data, or change any settings. Closing the browser tab or pressing Escape instantly ends the simulation with zero impact on your device.'
      },
      {
        question: 'How realistic is the blue screen simulator?',
        answer: 'The simulator is a pixel-accurate replica of the modern Windows 10 and Windows 11 BSOD. It includes the authentic blue background (#0078D7), the large sad face ":/" emoticon, the "Your PC ran into a problem" message, a randomly selected stop code (like CRITICAL_PROCESS_DIED or SYSTEM_SERVICE_EXCEPTION), a QR code matching Windows style, and an animated progress percentage that uses realistic Windows easing and random pauses. In fullscreen mode on any device it is highly convincing.'
      },
      {
        question: 'How do I launch the blue screen prank?',
        answer: 'Click the Fullscreen button or press the "F" key on your keyboard. The screen will instantly switch to fullscreen mode and begin the animated crash simulation with the progress counter climbing from your configured start percentage. The entire browser interface is hidden for maximum realism.'
      },
      {
        question: 'How do I exit the fake blue screen?',
        answer: 'Press the Escape (Esc) key on your keyboard to exit fullscreen mode instantly. The prank ends immediately and the page returns to normal. This works on all devices and browsers. The tool deliberately provides no other way to interact during fullscreen to maintain the illusion, but Escape always works.'
      },
      {
        question: 'Can I customize the blue screen simulation?',
        answer: 'Yes. Click the gear icon in the bottom-left corner to open the settings panel. You can adjust the total duration (5 to 180 seconds) which controls how fast the progress percentage climbs, and the starting percentage (0% to 95%) which lets you skip ahead to a more advanced progress state for immediate effect.'
      },
      {
        question: 'Does the fake BSOD work on Mac, Linux, or Chromebook?',
        answer: 'Yes, the simulator works in any modern browser on any operating system including Windows, macOS, Linux, and ChromeOS. While the prank is most convincing on a Windows PC where users expect to see a Windows BSOD, the simulation works identically on all platforms and is equally effective for video content and demonstrations.'
      },
      {
        question: 'What stop codes does the BSOD simulator use?',
        answer: 'The simulator randomly selects from 8 authentic Windows stop codes: CRITICAL_PROCESS_DIED, SYSTEM_SERVICE_EXCEPTION, MEMORY_MANAGEMENT, IRQL_NOT_LESS_OR_EQUAL, KMODE_EXCEPTION_NOT_HANDLED, PAGE_FAULT_IN_NONPAGED_AREA, DRIVER_IRQL_NOT_LESS_OR_EQUAL, and BAD_POOL_HEADER. Each one is a real Windows stop code, making the simulation more convincing.'
      }
    ],
    es: [
      {
        question: '¿Qué es una pantalla azul de la muerte (BSOD) falsa?',
        answer: 'Es una simulación en el navegador que replica la pantalla de error BSOD de Windows. Muestra el fondo azul, el emoticono de cara triste, el código de fallo, el código QR y el contador de progreso animado — todo sin estrellar realmente el ordenador. Es una herramienta de broma inofensiva.'
      },
      {
        question: '¿Es segura la broma de la pantalla azul falsa?',
        answer: 'Sí, completamente segura. Se renderiza enteramente en tu navegador usando HTML, CSS y JavaScript. No instala software, modifica archivos del sistema ni cambia ninguna configuración.'
      },
      {
        question: '¿Qué realista es el simulador de pantalla azul?',
        answer: 'Es una réplica de precisión de píxel del BSOD moderno de Windows 10 y 11. Incluye el fondo azul auténtico, la cara triste ":(" , el mensaje de error, un código de fallo aleatorio, un código QR y un porcentaje de progreso animado con easing realista de Windows y pausas aleatorias.'
      },
      {
        question: '¿Cómo lanzo la broma de pantalla azul?',
        answer: 'Haz clic en el botón de Pantalla Completa o presiona la tecla "F". La pantalla cambiará a modo completo y comenzará la simulación animada de fallo con el contador de progreso subiendo.'
      },
      {
        question: '¿Cómo salgo de la pantalla azul falsa?',
        answer: 'Presiona la tecla Escape (Esc) para salir del modo pantalla completa instantáneamente. La broma termina de inmediato y la página vuelve a la normalidad.'
      },
      {
        question: '¿Puedo personalizar la simulación?',
        answer: 'Sí. Haz clic en el icono de engranaje en la esquina inferior izquierda para abrir el panel de configuración. Puedes ajustar la duración total (5 a 180 segundos) y el porcentaje inicial (0% a 95%).'
      },
      {
        question: '¿Funciona la pantalla azul falsa en Mac, Linux o Chromebook?',
        answer: 'Sí, funciona en cualquier navegador moderno en cualquier sistema operativo. La broma es más convincente en una PC con Windows, pero la simulación funciona igual en todas las plataformas.'
      }
    ],
    pt: [
      {
        question: 'O que é uma tela azul da morte (BSOD) falsa?',
        answer: 'É uma simulação baseada em navegador que replica a tela de erro BSOD do Windows. Exibe o fundo azul, rosto triste, código de parada, QR Code e contador de progresso animado — sem realmente travar o computador.'
      },
      {
        question: 'A pegadinha da tela azul falsa é segura?',
        answer: 'Sim, completamente segura. É renderizada inteiramente no navegador usando HTML, CSS e JavaScript. Não instala software nem modifica arquivos do sistema.'
      },
      {
        question: 'Quão realista é o simulador de tela azul?',
        answer: 'É uma réplica em nível de pixel do BSOD moderno do Windows 10 e 11. Inclui o fundo azul autêntico, rosto triste ":(" , mensagem de erro, código de parada aleatório, QR Code e porcentagem de progresso animada.'
      },
      {
        question: 'Como saio da tela azul falsa?',
        answer: 'Pressione a tecla Escape (Esc) para sair do modo tela cheia instantaneamente. A pegadinha termina imediatamente.'
      },
      {
        question: 'Funciona no Mac, Linux ou Chromebook?',
        answer: 'Sim, funciona em qualquer navegador moderno em qualquer sistema operacional. A pegadinha é mais convincente em um PC Windows, mas funciona igualmente em todas as plataformas.'
      }
    ],
    fr: [
      {
        question: 'Qu\'est-ce qu\'un écran bleu de la mort (BSOD) faux ?',
        answer: 'C\'est une simulation dans le navigateur qui reproduit l\'écran d\'erreur BSOD de Windows. Elle affiche le fond bleu, le visage triste, le code d\'arrêt, le QR code et le compteur de progression animé — sans vraiment planter l\'ordinateur.'
      },
      {
        question: 'La blague de l\'écran bleu est-elle sûre ?',
        answer: 'Oui, totalement sûre. Elle est entièrement rendue dans votre navigateur avec HTML, CSS et JavaScript. Elle n\'installe aucun logiciel et ne modifie aucun fichier système.'
      },
      {
        question: 'Comment lancer la simulation d\'écran bleu ?',
        answer: 'Cliquez sur le bouton Plein écran ou appuyez sur la touche "F". L\'écran passe en mode plein écran et la simulation animée de plantage commence.'
      },
      {
        question: 'Comment quitter l\'écran bleu simulé ?',
        answer: 'Appuyez sur la touche Échap (Esc) pour quitter instantanément le mode plein écran. La blague se termine immédiatement.'
      }
    ],
    de: [
      {
        question: 'Was ist ein falscher blauer Bildschirm des Todes (BSOD)?',
        answer: 'Eine browserbasierte Simulation, die den Windows-BSOD-Fehlerbildschirm nachbildet. Sie zeigt den blauen Hintergrund, das traurige Gesicht, den Stoppcode, den QR-Code und den animierten Fortschrittszähler — ohne den Computer tatsächlich abstürzen zu lassen.'
      },
      {
        question: 'Ist der falsche BSOD-Streich sicher?',
        answer: 'Ja, völlig sicher. Er wird vollständig im Browser mit HTML, CSS und JavaScript dargestellt. Es wird keine Software installiert und keine Systemdateien werden geändert.'
      },
      {
        question: 'Wie starte ich den Blauen-Bildschirm-Streich?',
        answer: 'Klicken Sie auf die Vollbild-Schaltfläche oder drücken Sie die Taste "F". Der Bildschirm wechselt sofort in den Vollbildmodus und die animierte Absturzsimulation beginnt.'
      },
      {
        question: 'Wie beende ich den falschen blauen Bildschirm?',
        answer: 'Drücken Sie die Escape-Taste (Esc), um den Vollbildmodus sofort zu beenden. Der Streich ist sofort vorbei.'
      }
    ],
    hi: [
      {
        question: 'फर्जी ब्लू स्क्रीन ऑफ डेथ (BSOD) क्या है?',
        answer: 'यह एक ब्राउज़र-आधारित सिमुलेशन है जो विंडोज़ BSOD एरर स्क्रीन की नकल करता है। यह कंप्यूटर को क्रैश किए बिना नीली पृष्ठभूमि, उदास चेहरा, स्टॉप कोड, QR कोड और एनिमेटेड प्रोग्रेस काउंटर प्रदर्शित करता है।'
      },
      {
        question: 'क्या फर्जी BSOD प्रैंक मेरे कंप्यूटर के लिए सुरक्षित है?',
        answer: 'हाँ, पूरी तरह से सुरक्षित। यह पूरी तरह से आपके ब्राउज़र में HTML, CSS और JavaScript का उपयोग करके रेंडर किया जाता है। यह कोई सॉफ़्टवेयर इंस्टॉल नहीं करता या सिस्टम फ़ाइलों को संशोधित नहीं करता।'
      },
      {
        question: 'मैं ब्लू स्क्रीन प्रैंक कैसे शुरू करूँ?',
        answer: 'फुलस्क्रीन बटन पर क्लिक करें या कीबोर्ड पर "F" कुंजी दबाएँ। स्क्रीन तुरंत फुलस्क्रीन मोड में बदल जाएगी और एनिमेटेड क्रैश सिमुलेशन शुरू हो जाएगा।'
      },
      {
        question: 'मैं फर्जी ब्लू स्क्रीन से कैसे बाहर निकलूँ?',
        answer: 'अपने कीबोर्ड पर Escape (Esc) कुंजी दबाएँ। प्रैंक तुरंत समाप्त हो जाता है और पेज सामान्य हो जाता है।'
      }
    ],
    ja: [
      {
        question: '偽のブルースクリーンオブデス（BSOD）とは何ですか？',
        answer: 'WindowsのBSODエラー画面を再現するブラウザベースのシミュレーションです。実際にコンピュータをクラッシュさせることなく、青い背景、悲しい顔、ストップコード、QRコード、アニメーション進行カウンターを表示します。'
      },
      {
        question: '偽のBSODいたずらは安全ですか？',
        answer: 'はい、完全に安全です。ブラウザ内でHTML、CSS、JavaScriptを使用してレンダリングされます。ソフトウェアをインストールしたり、システムファイルを変更したりすることはありません。'
      },
      {
        question: '偽のブルースクリーンを終了するには？',
        answer: 'キーボードのEscape（Esc）キーを押すと、全画面モードが即座に終了します。いたずらはすぐに終了し、ページは通常に戻ります。'
      }
    ]
  },
  'windows-xp-crash': {
    en: [
      {
        question: 'Is the Windows XP Crash Simulator safe?',
        answer: 'Yes, it is completely safe. The Windows XP crash simulator runs entirely in your browser using HTML, CSS, and JavaScript. It does not install any software, modify system files, access personal data, or make any changes to your operating system. It is a purely visual browser-based simulation.'
      },
      {
        question: 'How do I start the Windows XP crash simulation?',
        answer: 'Click the "Fullscreen Prank" button or press the "F" key on your keyboard. The simulation launches in fullscreen mode. By default, clicking around the desktop spawns cascading explorer.exe error windows. After the configured delay (5-30 seconds), the screen transitions to the classic Windows XP BSOD with a memory dump counter.'
      },
      {
        question: 'How do I exit the Windows XP crash prank?',
        answer: 'Press the Escape (Esc) key on your keyboard. This exits fullscreen mode and automatically resets the simulation, returning the page to its normal state. All error dialogs disappear and the desktop returns to its initial setup.'
      },
      {
        question: 'Can I customise the Windows XP crash settings?',
        answer: 'Yes. Use the "On Start" dropdown to choose between Cascade mode (progressively escalating error dialogs before BSOD) or Instant BSOD mode. Use the "BSOD Delay" dropdown to set the crash delay to 5, 12, 20, or 30 seconds. You can also toggle the XP warning bell sound on or off.'
      },
      {
        question: 'Does the Windows XP crash simulation work on Mac or Linux?',
        answer: 'Yes, it works on any device with a modern web browser — Windows PCs, Macs, Linux machines, Chromebooks, tablets, and smartphones. The entire simulation runs in the browser using standard web technologies.'
      },
      {
        question: 'What makes this different from a real Windows XP crash?',
        answer: 'This is a purely visual recreation using HTML, CSS, and JavaScript. It simulates the look and feel of a Windows XP desktop and crash sequence but makes no actual system changes. No files are modified, no software is installed, and no operating system settings are altered. It is completely harmless and reversible by pressing Escape.'
      }
    ],
    es: [
      {
        question: '¿Es seguro el simulador de crash de Windows XP?',
        answer: 'Sí, es completamente seguro. El simulador de crash de Windows XP se ejecuta enteramente en su navegador usando HTML, CSS y JavaScript. No instala software, modifica archivos del sistema ni realiza cambios en su sistema operativo.'
      },
      {
        question: '¿Cómo inicio la simulación de crash de Windows XP?',
        answer: 'Haga clic en el botón "Fullscreen Prank" o presione la tecla "F" en su teclado. La simulación se inicia en modo de pantalla completa. Por defecto, al hacer clic en el escritorio aparecen ventanas de error de explorer.exe en cascada. Después de la demora configurada (5-30 segundos), la pantalla transiciona al BSOD clásico de Windows XP.'
      },
      {
        question: '¿Cómo salgo de la broma de crash de Windows XP?',
        answer: 'Presione la tecla Escape (Esc) en su teclado. Esto sale del modo de pantalla completa y reinicia automáticamente la simulación. Todos los diálogos de error desaparecen y el escritorio vuelve a su estado inicial.'
      },
      {
        question: '¿Puedo personalizar la configuración del crash?',
        answer: 'Sí. Use el menú desplegable "On Start" para elegir entre el modo Cascade (diálogos de error progresivos antes del BSOD) o el modo Instant BSOD. Use "BSOD Delay" para establecer la demora en 5, 12, 20 o 30 segundos. También puede activar o desactivar el sonido de advertencia de XP.'
      }
    ],
    pt: [
      {
        question: 'O simulador de crash do Windows XP é seguro?',
        answer: 'Sim, é completamente seguro. O simulador de crash do Windows XP funciona inteiramente no seu navegador usando HTML, CSS e JavaScript. Não instala software, modifica arquivos do sistema nem altera o sistema operacional.'
      },
      {
        question: 'Como iniciar a simulação de crash do Windows XP?',
        answer: 'Clique no botão "Fullscreen Prank" ou pressione a tecla "F" no teclado. A simulação inicia em modo tela cheia. Clicar na área de trabalho gera janelas de erro do explorer.exe em cascata. Após o atraso configurado (5-30 segundos), a tela faz a transição para o BSOD clássico do Windows XP.'
      },
      {
        question: 'Como sair da pegadinha de crash do Windows XP?',
        answer: 'Pressione a tecla Escape (Esc) no teclado. Isso sai do modo tela cheia e reinicia automaticamente a simulação. Todos os diálogos de erro desaparecem e a área de trabalho volta ao estado inicial.'
      },
      {
        question: 'Posso personalizar as configurações do crash?',
        answer: 'Sim. Use o menu "On Start" para escolher entre o modo Cascade (diálogos de erro progressivos antes do BSOD) ou o modo Instant BSOD. Use "BSOD Delay" para definir o atraso em 5, 12, 20 ou 30 segundos. Você também pode ativar ou desativar o som de aviso do XP.'
      }
    ],
    fr: [
      {
        question: 'Le simulateur de plantage Windows XP est-il sûr ?',
        answer: 'Oui, il est totalement sûr. Le simulateur de plantage Windows XP fonctionne entièrement dans votre navigateur en utilisant HTML, CSS et JavaScript. Il n\'installe aucun logiciel, ne modifie aucun fichier système et n\'apporte aucune modification à votre système d\'exploitation.'
      },
      {
        question: 'Comment démarrer la simulation de plantage Windows XP ?',
        answer: 'Cliquez sur le bouton "Fullscreen Prank" ou appuyez sur la touche "F" de votre clavier. La simulation se lance en plein écran. Cliquer sur le bureau génère des fenêtres d\'erreur explorer.exe en cascade. Après le délai configuré (5-30 secondes), l\'écran passe au BSOD classique de Windows XP.'
      },
      {
        question: 'Comment quitter la farce de plantage Windows XP ?',
        answer: 'Appuyez sur la touche Échap (Esc) de votre clavier. Cela quitte le mode plein écran et réinitialise automatiquement la simulation. Toutes les boîtes de dialogue d\'erreur disparaissent et le bureau revient à son état initial.'
      },
      {
        question: 'Puis-je personnaliser les paramètres du plantage ?',
        answer: 'Oui. Utilisez le menu "On Start" pour choisir entre le mode Cascade (boîtes de dialogue d\'erreur progressives avant le BSOD) ou le mode Instant BSOD. Utilisez "BSOD Delay" pour définir le délai à 5, 12, 20 ou 30 secondes. Vous pouvez également activer ou désactiver le son d\'avertissement XP.'
      }
    ],
    de: [
      {
        question: 'Ist der Windows XP Absturzsimulator sicher?',
        answer: 'Ja, er ist völlig sicher. Der Windows XP Absturzsimulator läuft vollständig in Ihrem Browser mit HTML, CSS und JavaScript. Er installiert keine Software, ändert keine Systemdateien und nimmt keine Änderungen an Ihrem Betriebssystem vor.'
      },
      {
        question: 'Wie starte ich die Windows XP Absturzsimulation?',
        answer: 'Klicken Sie auf den "Fullscreen Prank"-Button oder drücken Sie die "F"-Taste auf Ihrer Tastatur. Die Simulation startet im Vollbildmodus. Durch Klicken auf den Desktop erscheinen kaskadierende Explorer.exe-Fehlerfenster. Nach der eingestellten Verzögerung (5-30 Sekunden) erfolgt der Übergang zum klassischen Windows XP BSOD.'
      },
      {
        question: 'Wie beende ich den Windows XP Absturz-Streich?',
        answer: 'Drücken Sie die Escape-Taste (Esc) auf Ihrer Tastatur. Dies beendet den Vollbildmodus und setzt die Simulation automatisch zurück. Alle Fehlerdialoge verschwinden und der Desktop kehrt in seinen Ausgangszustand zurück.'
      },
      {
        question: 'Kann ich die Absturzeinstellungen anpassen?',
        answer: 'Ja. Verwenden Sie das "On Start"-Menü, um zwischen Cascade-Modus (fortschreitende Fehlerdialoge vor dem BSOD) oder Instant BSOD-Modus zu wählen. Mit "BSOD Delay" stellen Sie die Verzögerung auf 5, 12, 20 oder 30 Sekunden ein. Sie können auch den XP-Warnton ein- oder ausschalten.'
      }
    ],
    hi: [
      {
        question: 'क्या विंडोज एक्सपी क्रैश सिम्युलेटर सुरक्षित है?',
        answer: 'हाँ, यह पूरी तरह से सुरक्षित है। विंडोज एक्सपी क्रैश सिम्युलेटर HTML, CSS और JavaScript का उपयोग करके पूरी तरह से आपके ब्राउज़र में चलता है। यह कोई सॉफ़्टवेयर इंस्टॉल नहीं करता, सिस्टम फ़ाइलों में बदलाव नहीं करता, या आपके ऑपरेटिंग सिस्टम में कोई बदलाव नहीं करता।'
      },
      {
        question: 'मैं विंडोज एक्सपी क्रैश सिमुलेशन कैसे शुरू करूँ?',
        answer: '"Fullscreen Prank" बटन पर क्लिक करें या अपने कीबोर्ड पर "F" कुंजी दबाएँ। सिमुलेशन फुलस्क्रीन मोड में शुरू होता है। डेस्कटॉप पर क्लिक करने से कैस्केडिंग explorer.exe त्रुटि विंडो दिखाई देती हैं। निर्धारित देरी (5-30 सेकंड) के बाद, स्क्रीन क्लासिक विंडोज एक्सपी BSOD में बदल जाती है।'
      },
      {
        question: 'मैं विंडोज एक्सपी क्रैश प्रैंक से कैसे बाहर निकलूँ?',
        answer: 'अपने कीबोर्ड पर Escape (Esc) कुंजी दबाएँ। यह फुलस्क्रीन मोड से बाहर निकलता है और स्वचालित रूप से सिमुलेशन को रीसेट करता है। सभी त्रुटि डायलॉग गायब हो जाते हैं और डेस्कटॉप अपनी प्रारंभिक स्थिति में वापस आ जाता है।'
      },
      {
        question: 'क्या मैं क्रैश सेटिंग्स को कस्टमाइज़ कर सकता हूँ?',
        answer: 'हाँ। "On Start" ड्रॉपडाउन का उपयोग करके कैस्केड मोड (BSOD से पहले प्रगतिशील त्रुटि डायलॉग) या इंस्टेंट BSOD मोड चुनें। "BSOD Delay" का उपयोग करके 5, 12, 20 या 30 सेकंड की देरी सेट करें। आप XP चेतावनी घंटी ध्वनि को चालू या बंद भी कर सकते हैं।'
      }
    ],
    ja: [
      {
        question: 'Windows XPクラッシュシミュレーターは安全ですか？',
        answer: 'はい、完全に安全です。Windows XPクラッシュシミュレーターはHTML、CSS、JavaScriptを使用してブラウザ内で完全に動作します。ソフトウェアをインストールしたり、システムファイルを変更したり、オペレーティングシステムに変更を加えたりすることはありません。'
      },
      {
        question: 'Windows XPクラッシュシミュレーションを開始するには？',
        answer: '「Fullscreen Prank」ボタンをクリックするか、キーボードの「F」キーを押します。シミュレーションが全画面モードで起動します。デスクトップをクリックすると、explorer.exeエラーウィンドウがカスケード表示されます。設定された遅延（5〜30秒）後、画面はクラシックなWindows XP BSODに移行します。'
      },
      {
        question: 'Windows XPクラッシュのいたずらを終了するには？',
        answer: 'キーボードのEscape（Esc）キーを押します。全画面モードが終了し、シミュレーションが自動的にリセットされます。すべてのエラーダイアログが消え、デスクトップは初期状態に戻ります。'
      },
      {
        question: 'クラッシュ設定をカスタマイズできますか？',
        answer: 'はい。「On Start」ドロップダウンでカスケードモード（BSOD前の段階的なエラーダイアログ）またはインスタントBSODモードを選択できます。「BSOD Delay」で5、12、20、30秒の遅延を設定できます。XP警告音のオン/オフも切り替えられます。'
      }
    ]
  },
  'radar-screen': {
    en: [
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
        question: 'Does the radar simulator require downloading?',
        answer: 'No. The radar screen simulator runs directly in your browser. There is nothing to download, install, or configure. Just open the page and the radar animation starts immediately. Works on any device with a modern browser.'
      },
      {
        question: 'Can I control the radar sweep speed?',
        answer: 'Yes. Open the settings panel (gear icon) and use the Sweep Speed slider to adjust the rotation speed from 4 to 30 RPM. A slower speed creates a more realistic, calm radar display. A faster speed creates a more intense, action-oriented feel.'
      },
      {
        question: 'Can I mute the sonar ping sound?',
        answer: 'Yes. Open the settings panel and use the Sonar Ping Sound Volume slider to adjust the volume, or click the Mute button to disable sonar audio entirely. The radar continues to animate visually even when audio is muted. You can also press the S key to toggle sonar audio.'
      },
      {
        question: 'Does it work on mobile devices?',
        answer: 'Yes, the radar screen simulator works on any device with a modern web browser — Windows PCs, Macs, Linux machines, Chromebooks, tablets, smartphones, and Smart TVs. The simulation adapts to different screen sizes and touch input.'
      },
      {
        question: 'Can I use the radar screen in presentations and videos?',
        answer: 'Yes, the radar screen makes an excellent presentation background, livestream backdrop, YouTube video background, or video conference visual. Enter fullscreen mode by pressing F or clicking the fullscreen button for the most immersive display. Three color themes let you match the radar aesthetic to your content style.'
      },
      {
        question: 'What do the different radar color themes do?',
        answer: 'The radar offers three color themes. Military Green recreates the classic green phosphor radar display. Oceanic Blue gives a modern naval sonar aesthetic. Red Alert creates a high-tension tactical look. Switch between them in the settings panel under Styling Frequency Theme.'
      },
      {
        question: 'How does the radar target system work?',
        answer: 'The radar randomly generates bogey targets that move toward the center. Friendly targets appear as green dots. Hostile targets appear as red dots with tracking boxes and trigger an Impact Intrusion Warning when entering the critical center corridor. Click a hostile bogey to intercept it — a yellow crosshair marks intercepted targets.'
      },
      {
        question: 'Can I use the radar screen on a Smart TV?',
        answer: 'Yes. The radar screen works on Smart TVs with web browsers. Open the URL in the TV browser, enter fullscreen mode, and the animated radar display fills the screen. Great as a decorative ambient display for themed parties and room decoration.'
      }
    ],
    es: [
      {
        question: '¿Qué es el simulador de pantalla de radar?',
        answer: 'El Radar Screen es una simulación de radar gratuita basada en navegador que muestra una pantalla de radar animada realista con un haz de barrido giratorio, anillos de alcance concéntricos, rumbos de brújula, costa de terreno procedural y objetivos simulados. Está diseñado para entretenimiento, presentaciones, fondos de streaming, decoración de habitaciones y montajes creativos.'
      },
      {
        question: '¿Es seguro el simulador de radar?',
        answer: 'Sí, es completamente seguro. La simulación de radar se ejecuta completamente en su navegador usando HTML, CSS, JavaScript y Canvas. No instala software, modifica archivos del sistema ni accede a datos personales.'
      },
      {
        question: '¿El simulador de radar es realmente gratuito?',
        answer: 'Sí, es completamente gratuito. Sin cuenta, sin registro, sin tarjeta de crédito y sin cargos ocultos. Es una herramienta gratuita disponible para todos.'
      },
      {
        question: '¿Requiere descarga el simulador de radar?',
        answer: 'No. El simulador de radar se ejecuta directamente en su navegador. No hay nada que descargar, instalar o configurar. Solo abra la página y la animación comienza inmediatamente.'
      },
      {
        question: '¿Puedo controlar la velocidad del barrido del radar?',
        answer: 'Sí. Abra el panel de configuración y use el control deslizante de velocidad de barrido para ajustar la velocidad de rotación de 4 a 30 RPM.'
      }
    ],
    pt: [
      {
        question: 'O que é o simulador de tela de radar?',
        answer: 'O Radar Screen é uma simulação de radar gratuita baseada em navegador que exibe uma tela de radar animada realista com feixe de varredura giratório, anéis de alcance concêntricos, marcas de bússola, costa de terreno procedural e alvos simulados. Projetado para entretenimento, apresentações, fundos de streaming e decoração.'
      },
      {
        question: 'O simulador de radar é seguro?',
        answer: 'Sim, é completamente seguro. A simulação de radar funciona inteiramente no seu navegador usando HTML, CSS, JavaScript e Canvas. Não instala software nem modifica arquivos do sistema.'
      },
      {
        question: 'O simulador de radar é realmente grátis?',
        answer: 'Sim, é completamente grátis. Sem conta, sem registro, sem cartão de crédito e sem taxas ocultas. É uma ferramenta gratuita disponível para todos.'
      }
    ],
    fr: [
      {
        question: 'Qu\'est-ce que le simulateur d\'écran radar ?',
        answer: 'Le Radar Screen est une simulation radar gratuite basée sur navigateur qui affiche un affichage radar animé réaliste avec un faisceau de balayage rotatif, des anneaux de portée concentriques, des relèvements de boussole, un littoral de terrain procédural et des cibles simulées.'
      },
      {
        question: 'Le simulateur radar est-il sûr ?',
        answer: 'Oui, il est totalement sûr. La simulation radar fonctionne entièrement dans votre navigateur en utilisant HTML, CSS, JavaScript et Canvas. Elle n\'installe aucun logiciel et ne modifie aucun fichier système.'
      },
      {
        question: 'Le simulateur radar est-il vraiment gratuit ?',
        answer: 'Oui, il est complètement gratuit. Sans compte, sans inscription, sans carte de crédit et sans frais cachés. C\'est un outil gratuit accessible à tous.'
      }
    ],
    de: [
      {
        question: 'Was ist der Radar-Bildschirm-Simulator?',
        answer: 'Der Radar Screen ist eine kostenlose, browserbasierte Radarsimulation, die eine realistische animierte Radar-Anzeige mit rotierendem Sweep-Strahl, konzentrischen Reichweitenringen, Kompasspeilungen, prozeduraler Küstenlinie und simulierten Bogey-Zielen darstellt.'
      },
      {
        question: 'Ist der Radar-Simulator sicher?',
        answer: 'Ja, er ist völlig sicher. Die Radarsimulation läuft vollständig in Ihrem Browser mit HTML, CSS, JavaScript und Canvas. Sie installiert keine Software und ändert keine Systemdateien.'
      },
      {
        question: 'Ist der Radar-Simulator wirklich kostenlos?',
        answer: 'Ja, er ist völlig kostenlos. Kein Konto, keine Registrierung, keine Kreditkarte und keine versteckten Gebühren. Es ist ein kostenloses Tool, das allen zur Verfügung steht.'
      }
    ],
    hi: [
      {
        question: 'रडार स्क्रीन सिम्युलेटर क्या है?',
        answer: 'रडार स्क्रीन एक मुफ्त, ब्राउज़र-आधारित रडार सिमुलेशन है जो घूमने वाली स्वीप बीम, संकेंद्रित रेंज रिंग, कम्पास हेडिंग, प्रोसीजरल टेरेन कोस्टलाइन और सिम्युलेटेड बोगी टार्गेट के साथ एक यथार्थवादी एनिमेटेड रडार डिस्प्ले प्रदर्शित करता है।'
      },
      {
        question: 'क्या रडार सिम्युलेटर सुरक्षित है?',
        answer: 'हाँ, यह पूरी तरह से सुरक्षित है। रडार सिमुलेशन HTML, CSS, JavaScript और Canvas का उपयोग करके पूरी तरह से आपके ब्राउज़र में चलता है। यह कोई सॉफ़्टवेयर इंस्टॉल नहीं करता या सिस्टम फ़ाइलों को संशोधित नहीं करता।'
      }
    ],
    ja: [
      {
        question: 'レーダー画面シミュレーターとは何ですか？',
        answer: 'レーダー画面は、回転するスイープビーム、同心円状のレンジリング、コンパス方位、手続き型地形海岸線、シミュレートされたブギーターゲットを備えたリアルなアニメーションレーダーディスプレイを表示する無料のブラウザベースレーダーシミュレーションです。'
      },
      {
        question: 'レーダーシミュレーターは安全ですか？',
        answer: 'はい、完全に安全です。レーダーシミュレーションはHTML、CSS、JavaScript、Canvasを使用してブラウザ内で完全に動作します。ソフトウェアをインストールしたり、システムファイルを変更したりすることはありません。'
      }
    ]
  },
  'white-noise-screen': {
    en: [
      {
        question: 'What is the White Noise Screen simulator?',
        answer: 'The White Noise Screen is a free, browser-based TV static simulator that generates realistic analog television noise (snow), CRT scanline effects, and VHS glitch visuals directly in your browser. It is designed for entertainment, film production, streaming backgrounds, and creative staging — not as an actual television diagnostic tool.'
      },
      {
        question: 'Is the White Noise Screen safe?',
        answer: 'Yes, it is completely safe. The white noise simulation runs entirely in your browser using HTML, CSS, JavaScript, and Canvas. It does not install any software, modify system files, access personal data, or make any changes to your operating system.'
      },
      {
        question: 'Is the White Noise Screen really free?',
        answer: 'Yes, it is completely free. No account, no registration, no credit card, and no hidden fees. The white noise screen is a free online tool available to everyone with no usage limits.'
      },
      {
        question: 'Does the white noise simulator require downloading?',
        answer: 'No. The white noise screen runs directly in your browser. There is nothing to download, install, or configure. Just open the page and the static animation starts immediately.'
      },
      {
        question: 'What static styles are available?',
        answer: 'Three static styles are included. Analog mode generates classic gray television snow. Color mode creates rainbow static with full-spectrum noise. VHS mode adds drifting horizontal bands, noise streak lines, and analog sync sway that mimics damaged VHS cassette playback.'
      },
      {
        question: 'What are CRT scanlines?',
        answer: 'CRT scanlines simulate the horizontal lines visible on old cathode-ray tube televisions. The effect uses a repeating overlay pattern across the display and can be toggled on or off via the CRT Scanlines checkbox in settings.'
      },
      {
        question: 'Does the white noise screen include sound?',
        answer: 'Yes, the simulator includes three audio noise modes. Static mode generates a pulsing sound with a gentle breathing effect like a detuned analog TV. White noise mode produces a flat, consistent hiss. Pink noise mode creates a deeper, warmer sound. Audio can also be set to Off.'
      },
      {
        question: 'Can I enable a No Signal screen?',
        answer: 'Yes. In the settings panel, check the NO SIGNAL Logo checkbox to display a retro-style AV-1 NO SIGNAL TV indicator badge in the top-left corner of the screen.'
      },
      {
        question: 'Can I use the white noise screen for videos?',
        answer: 'Absolutely. The white noise simulation works as a fullscreen background for YouTube videos, Twitch streams, TikTok content, film production, and screen recordings. The three static styles and CRT effects are ideal for retro intros, horror scenes, and cinematic transitions.'
      },
      {
        question: 'Does the white noise screen work offline?',
        answer: 'After the initial page load, the white noise simulation runs entirely client-side using Canvas, JavaScript, and the Web Audio API. Once the page is cached, the static animation and audio continue without an active internet connection.'
      }
    ],
    es: [
      {
        question: '¿Qué es el simulador de pantalla de ruido blanco?',
        answer: 'El White Noise Screen es un simulador de estática de TV gratuito basado en navegador que genera ruido de televisión analógico realista, efectos de líneas CRT y efectos visuales VHS directamente en su navegador.'
      },
      {
        question: '¿Es segura la pantalla de ruido blanco?',
        answer: 'Sí, es completamente segura. La simulación de ruido blanco se ejecuta completamente en su navegador usando HTML, CSS, JavaScript y Canvas. No instala software ni modifica archivos del sistema.'
      },
      {
        question: '¿La pantalla de ruido blanco es realmente gratuita?',
        answer: 'Sí, es completamente gratuita. Sin cuenta, sin registro, sin tarjeta de crédito y sin cargos ocultos.'
      }
    ],
    pt: [
      {
        question: 'O que é o simulador de tela de ruído branco?',
        answer: 'O White Noise Screen é um simulador de estática de TV gratuito baseado em navegador que gera ruído de televisão analógico realista, efeitos de linhas CRT e efeitos visuais VHS diretamente no seu navegador.'
      },
      {
        question: 'A tela de ruído branco é segura?',
        answer: 'Sim, é completamente segura. A simulação de ruído branco funciona inteiramente no seu navegador usando HTML, CSS, JavaScript e Canvas. Não instala software nem modifica arquivos do sistema.'
      }
    ],
    fr: [
      {
        question: 'Qu\'est-ce que le simulateur d\'écran bruit blanc ?',
        answer: 'Le White Noise Screen est un simulateur de neige TV gratuit basé sur navigateur qui génère un bruit de télévision analogique réaliste, des effets de lignes CRT et des effets visuels VHS directement dans votre navigateur.'
      },
      {
        question: 'L\'écran bruit blanc est-il sûr ?',
        answer: 'Oui, il est totalement sûr. La simulation de bruit blanc fonctionne entièrement dans votre navigateur en utilisant HTML, CSS, JavaScript et Canvas. Elle n\'installe aucun logiciel et ne modifie aucun fichier système.'
      }
    ],
    de: [
      {
        question: 'Was ist der Weißes-Rauschen-Bildschirm-Simulator?',
        answer: 'Der White Noise Screen ist ein kostenloser, browserbasierter TV-Rauschen-Simulator, der realistisches analoges Fernsehflimmern, CRT-Zeileneffekte und VHS-Glitcheffekte direkt in Ihrem Browser erzeugt.'
      },
      {
        question: 'Ist der Weißes-Rauschen-Bildschirm sicher?',
        answer: 'Ja, er ist völlig sicher. Die Weißes-Rauschen-Simulation läuft vollständig in Ihrem Browser mit HTML, CSS, JavaScript und Canvas. Sie installiert keine Software und ändert keine Systemdateien.'
      }
    ],
    hi: [
      {
        question: 'व्हाइट नॉइज़ स्क्रीन सिम्युलेटर क्या है?',
        answer: 'व्हाइट नॉइज़ स्क्रीन एक मुफ्त, ब्राउज़र-आधारित टीवी स्टैटिक सिम्युलेटर है जो सीधे आपके ब्राउज़र में यथार्थवादी एनालॉग टेलीविज़न नॉइज़, CRT स्कैनलाइन प्रभाव और VHS ग्लिच विज़ुअल उत्पन्न करता है।'
      },
      {
        question: 'क्या व्हाइट नॉइज़ स्क्रीन सुरक्षित है?',
        answer: 'हाँ, यह पूरी तरह से सुरक्षित है। व्हाइट नॉइज़ सिमुलेशन HTML, CSS, JavaScript और Canvas का उपयोग करके पूरी तरह से आपके ब्राउज़र में चलता है।'
      }
    ],
    ja: [
      {
        question: 'ホワイトノイズ画面シミュレーターとは何ですか？',
        answer: 'ホワイトノイズ画面は、ブラウザベースの無料テレビノイズシミュレーターで、リアルなアナログテレビノイズ、CRTスキャンライン効果、VHSグリッチ映像をブラウザ上で直接生成します。'
      },
      {
        question: 'ホワイトノイズ画面は安全ですか？',
        answer: 'はい、完全に安全です。ホワイトノイズシミュレーションはHTML、CSS、JavaScript、Canvasを使用してブラウザ内で完全に動作します。ソフトウェアをインストールしたり、システムファイルを変更したりすることはありません。'
      }
    ]
  },
  'fake-virus-screen': {
    en: [
      {
        question: 'Is the fake virus screen safe?',
        answer: 'Yes, it is completely safe. The fake virus screen is a browser-only visual simulation using HTML, CSS, and JavaScript. It does not install any software, modify system files, access personal data, or make any changes to your operating system. No malware, no downloads, no risk.'
      },
      {
        question: 'Does the fake virus screen install malware?',
        answer: 'No. This is a purely visual browser-based simulation. It displays animated fake security alerts, antivirus dashboards, and ransomware screens entirely within your browser. Nothing is downloaded, installed, or executed on your device.'
      },
      {
        question: 'How do I exit the fake virus screen fullscreen?',
        answer: 'Press the Escape (Esc) key on your keyboard to exit fullscreen mode instantly. This stops all animations, sounds, and returns the page to its normal state. No trace of the simulation remains on your device.'
      },
      {
        question: 'What alert styles are included?',
        answer: 'The simulator includes 4 alert styles: a Google Chrome malware warning (Deceptive site ahead), a Microsoft Defender SmartScreen blocked site page, a Windows Security antivirus dashboard with fake scan progress, and a WannaCry ransomware screen with countdown timers.'
      },
      {
        question: 'Does the fake virus screen work on mobile?',
        answer: 'Yes, it works on any device with a modern web browser — Windows, Mac, Linux, Chromebook, tablets, and smartphones. The simulation adapts to different screen sizes and supports touch input for interactive elements.'
      },
      {
        question: 'Can I use the fake virus screen in a video or stream?',
        answer: 'Yes, the fake virus screen is perfect for YouTube videos, TikTok content, Twitch streams, and video production. Use it as a prank visual, reaction content setup, or intermission screen. The fullscreen mode hides browser UI for clean recording.'
      },
      {
        question: 'Does the simulator make sound?',
        answer: 'Yes, each alert style has a unique synthesized sound effect created using the Web Audio API. The Chrome and SmartScreen styles play a continuous siren, Defender plays notification chimes, and WannaCry plays high-pitch alert beeps. You can toggle sound on and off by pressing the S key or using the settings panel.'
      },
      {
        question: 'Can I customise the fake virus simulation?',
        answer: 'Yes. Open the settings panel (gear icon) to switch between the 4 alert styles using the template dropdown. Toggle sound on or off. The keyboard shortcuts let you switch styles quickly: press 1 for Chrome, 2 for SmartScreen, 3 for Defender, or 4 for WannaCry.'
      },
      {
        question: 'What keyboard shortcuts are available?',
        answer: 'In fullscreen mode: press F to enter fullscreen, press 1-4 to switch alert styles (1=Chrome, 2=SmartScreen, 3=Defender, 4=WannaCry), press S to toggle sound on and off, and press Esc to exit fullscreen and end the simulation.'
      },
      {
        question: 'Is the fake virus screen free?',
        answer: 'Yes, it is completely free. No account, no registration, no credit card, and no hidden fees. The fake virus screen is a free online tool available to everyone with no usage limits.'
      },
      {
        question: 'Can I use this for cybersecurity training?',
        answer: 'Yes, the fake virus screen is an excellent tool for cybersecurity awareness demonstrations, classroom presentations, and training sessions. It helps illustrate what fake virus warnings and ransomware screens look like without any actual risk.'
      },
      {
        question: 'Does it work in OBS or streaming software?',
        answer: 'Yes. Open the page in a browser window, use it as a browser source in OBS Studio, Streamlabs, or any streaming software with browser capture. The fullscreen mode hides browser chrome for a clean capture. The simulation runs smoothly without performance issues.'
      },
      {
        question: 'Does the fake virus screen collect data?',
        answer: 'No. The fake virus screen collects no data. Everything runs locally in your browser. There are no analytics, no tracking scripts, no cookies, and no data sent to any server after the initial page load.'
      },
      {
        question: 'Can I use the fake virus screen for an escape room?',
        answer: 'Yes, the fake virus screen (especially the WannaCry ransomware template) works great as an escape room prop, haunted house effect, theatre production visual, or Halloween decoration. The fullscreen mode and sound effects add to the immersive experience.'
      }
    ],
    es: [
      {
        question: '¿Es segura la pantalla de virus falsa?',
        answer: 'Sí, es completamente segura. La pantalla de virus falsa es una simulación visual que solo funciona en el navegador usando HTML, CSS y JavaScript. No instala ningún software, no modifica archivos del sistema, no accede a datos personales y no realiza cambios en su sistema operativo. Sin malware, sin descargas, sin riesgo.'
      },
      {
        question: '¿La pantalla de virus falsa instala malware?',
        answer: 'No. Esta es una simulación puramente visual basada en el navegador. Muestra alertas de seguridad falsas animadas, paneles antivirus y pantallas de ransomware completamente dentro de su navegador. No se descarga, instala ni ejecuta nada en su dispositivo.'
      },
      {
        question: '¿Cómo salgo del modo de pantalla completa de la pantalla de virus falsa?',
        answer: 'Presione la tecla Escape (Esc) en su teclado para salir del modo de pantalla completa al instante. Esto detiene todas las animaciones y sonidos y devuelve la página a su estado normal. No queda ningún rastro de la simulación en su dispositivo.'
      },
      {
        question: '¿Qué estilos de alerta están incluidos?',
        answer: 'El simulador incluye 4 estilos de alerta: una advertencia de malware de Google Chrome (sitio engañoso), una página de sitio bloqueado de Microsoft Defender SmartScreen, un panel antivirus de Windows Security con progreso de escaneo falso y una pantalla de ransomware WannaCry con temporizadores de cuenta regresiva.'
      },
      {
        question: '¿La pantalla de virus falsa funciona en móviles?',
        answer: 'Sí, funciona en cualquier dispositivo con un navegador web moderno: Windows, Mac, Linux, Chromebook, tabletas y teléfonos inteligentes. La simulación se adapta a diferentes tamaños de pantalla.'
      },
      {
        question: '¿Puedo usar la pantalla de virus falsa en un video o transmisión?',
        answer: 'Sí, es perfecta para videos de YouTube, contenido de TikTok, transmisiones de Twitch y producción de video. El modo de pantalla completa oculta la interfaz del navegador para una grabación limpia.'
      },
      {
        question: '¿El simulador hace sonido?',
        answer: 'Sí, cada estilo de alerta tiene un efecto de sonido sintetizado único creado con la API de audio web. Puede activar y desactivar el sonido presionando la tecla S o usando el panel de configuración.'
      },
      {
        question: '¿Puedo personalizar la simulación de virus falsa?',
        answer: 'Sí. Abra el panel de configuración para cambiar entre los 4 estilos de alerta. Use los atajos de teclado: presione 1 para Chrome, 2 para SmartScreen, 3 para Defender o 4 para WannaCry.'
      },
      {
        question: '¿La pantalla de virus falsa es gratuita?',
        answer: 'Sí, es completamente gratuita. Sin cuenta, sin registro, sin tarjeta de crédito y sin tarifas ocultas.'
      },
      {
        question: '¿Puedo usar esto para capacitación en ciberseguridad?',
        answer: 'Sí, la pantalla de virus falsa es una excelente herramienta para demostraciones de concienciación sobre ciberseguridad, presentaciones en el aula y sesiones de capacitación.'
      },
      {
        question: '¿La pantalla de virus falsa recopila datos?',
        answer: 'No. La pantalla de virus falsa no recopila datos. Todo se ejecuta localmente en su navegador. No hay análisis, scripts de seguimiento, cookies ni datos enviados a ningún servidor.'
      }
    ],
    pt: [
      {
        question: 'A tela de vírus falsa é segura?',
        answer: 'Sim, é completamente segura. A tela de vírus falsa é uma simulação visual apenas no navegador usando HTML, CSS e JavaScript. Não instala software, não modifica arquivos do sistema, não acessa dados pessoais e não faz alterações no seu sistema operacional. Sem malware, sem downloads, sem risco.'
      },
      {
        question: 'A tela de vírus falsa instala malware?',
        answer: 'Não. Esta é uma simulação puramente visual baseada em navegador. Ela exibe alertas de segurança falsos animados, painéis antivírus e telas de ransomware inteiramente dentro do seu navegador. Nada é baixado, instalado ou executado no seu dispositivo.'
      },
      {
        question: 'Como saio do modo tela cheia da tela de vírus falsa?',
        answer: 'Pressione a tecla Escape (Esc) no seu teclado para sair do modo tela cheia instantaneamente. Isso interrompe todas as animações e sons e retorna a página ao estado normal.'
      },
      {
        question: 'Quais estilos de alerta estão incluídos?',
        answer: 'O simulador inclui 4 estilos de alerta: um aviso de malware do Google Chrome (site enganoso), uma página de site bloqueado do Microsoft Defender SmartScreen, um painel antivírus do Windows Security com progresso de varredura falso e uma tela de ransomware WannaCry com temporizadores regressivos.'
      },
      {
        question: 'A tela de vírus falsa funciona em dispositivos móveis?',
        answer: 'Sim, funciona em qualquer dispositivo com um navegador web moderno — Windows, Mac, Linux, Chromebook, tablets e smartphones.'
      },
      {
        question: 'Posso usar a tela de vírus falsa em um vídeo ou transmissão?',
        answer: 'Sim, é perfeita para vídeos do YouTube, conteúdo TikTok, transmissões ao vivo e produção de vídeo. O modo tela cheia oculta a interface do navegador para uma gravação limpa.'
      },
      {
        question: 'O simulador faz som?',
        answer: 'Sim, cada estilo de alerta tem um efeito sonoro sintetizado único criado com a Web Audio API. Você pode ativar e desativar o som pressionando a tecla S.'
      },
      {
        question: 'Posso personalizar a simulação de vírus falsa?',
        answer: 'Sim. Abra o painel de configurações para alternar entre os 4 estilos de alerta. Use os atalhos de teclado: pressione 1 para Chrome, 2 para SmartScreen, 3 para Defender ou 4 para WannaCry.'
      },
      {
        question: 'A tela de vírus falsa é gratuita?',
        answer: 'Sim, é completamente gratuita. Sem conta, sem registro, sem cartão de crédito e sem taxas ocultas.'
      },
      {
        question: 'Posso usar isso para treinamento de segurança cibernética?',
        answer: 'Sim, a tela de vírus falsa é uma excelente ferramenta para demonstrações de conscientização sobre segurança cibernética e sessões de treinamento.'
      },
      {
        question: 'A tela de vírus falsa coleta dados?',
        answer: 'Não. A tela de vírus falsa não coleta dados. Tudo é executado localmente no seu navegador. Não há análises, scripts de rastreamento, cookies ou dados enviados a qualquer servidor.'
      }
    ],
    fr: [
      {
        question: 'La fausse écran de virus est-elle sûre ?',
        answer: 'Oui, elle est totalement sûre. La fausse écran de virus est une simulation visuelle uniquement dans le navigateur utilisant HTML, CSS et JavaScript. Elle n\'installe aucun logiciel, ne modifie aucun fichier système et n\'accède à aucune donnée personnelle.'
      },
      {
        question: 'La fausse écran de virus installe-t-elle un malware ?',
        answer: 'Non. Il s\'agit d\'une simulation purement visuelle basée sur le navigateur. Rien n\'est téléchargé, installé ou exécuté sur votre appareil.'
      },
      {
        question: 'Comment quitter le mode plein écran de la fausse écran de virus ?',
        answer: 'Appuyez sur la touche Échap (Esc) de votre clavier pour quitter le mode plein écran instantanément. Cela arrête toutes les animations et tous les sons.'
      },
      {
        question: 'Quels styles d\'alerte sont inclus ?',
        answer: 'Le simulateur inclut 4 styles d\'alerte : un avertissement de malware Google Chrome, une page de site bloqué Microsoft Defender SmartScreen, un tableau de bord antivirus Windows Security et un écran de ransomware WannaCry.'
      },
      {
        question: 'La fausse écran de virus fonctionne-t-elle sur mobile ?',
        answer: 'Oui, elle fonctionne sur tout appareil doté d\'un navigateur web moderne — Windows, Mac, Linux, Chromebook, tablettes et smartphones.'
      },
      {
        question: 'La simulation produit-elle du son ?',
        answer: 'Oui, chaque style d\'alerte a un effet sonore synthétisé unique créé avec l\'API Web Audio. Vous pouvez activer/désactiver le son avec la touche S.'
      },
      {
        question: 'Puis-je personnaliser la simulation de faux virus ?',
        answer: 'Oui. Ouvrez le panneau des paramètres pour changer de style d\'alerte ou utilisez les touches 1 à 4 pour changer rapidement.'
      },
      {
        question: 'La fausse écran de virus est-elle gratuite ?',
        answer: 'Oui, elle est entièrement gratuite. Sans compte, sans inscription et sans frais cachés.'
      },
      {
        question: 'Puis-je l\'utiliser pour la formation en cybersécurité ?',
        answer: 'Oui, elle est excellente pour les démonstrations de sensibilisation à la cybersécurité et les présentations en classe.'
      },
      {
        question: 'La fausse écran de virus collecte-t-elle des données ?',
        answer: 'Non, elle ne collecte aucune donnée. Tout fonctionne localement dans votre navigateur.'
      }
    ],
    de: [
      {
        question: 'Ist der gefälschte Virus-Bildschirm sicher?',
        answer: 'Ja, er ist völlig sicher. Der gefälschte Virus-Bildschirm ist eine reine Browser-Visual-Simulation mit HTML, CSS und JavaScript. Es installiert keine Software, ändert keine Systemdateien und greift nicht auf persönliche Daten zu.'
      },
      {
        question: 'Installiert der gefälschte Virus-Bildschirm Malware?',
        answer: 'Nein. Es handelt sich um eine rein visuelle, browserbasierte Simulation. Es wird nichts auf Ihrem Gerät heruntergeladen, installiert oder ausgeführt.'
      },
      {
        question: 'Wie verlasse ich den Vollbildmodus des gefälschten Virus-Bildschirms?',
        answer: 'Drücken Sie die Escape-Taste (Esc) auf Ihrer Tastatur, um den Vollbildmodus sofort zu verlassen. Alle Animationen und Töne werden gestoppt.'
      },
      {
        question: 'Welche Alarmstile sind enthalten?',
        answer: 'Der Simulator enthält 4 Alarmstile: eine Google Chrome-Malware-Warnung, eine Microsoft Defender SmartScreen-Seite, ein Windows Security Antivirus-Dashboard und einen WannaCry-Ransomware-Bildschirm.'
      },
      {
        question: 'Funktioniert der gefälschte Virus-Bildschirm auf Mobilgeräten?',
        answer: 'Ja, er funktioniert auf jedem Gerät mit einem modernen Webbrowser — Windows, Mac, Linux, Chromebook, Tablets und Smartphones.'
      },
      {
        question: 'Erzeugt der Simulator Ton?',
        answer: 'Ja, jeder Alarmstil hat einen einzigartigen synthetisierten Soundeffekt, der mit der Web Audio API erstellt wurde. Sie können den Ton mit der Taste S ein- und ausschalten.'
      },
      {
        question: 'Kann ich die gefälschte Virus-Simulation anpassen?',
        answer: 'Ja. Öffnen Sie das Einstellungsfeld, um zwischen den 4 Alarmstilen zu wechseln, oder verwenden Sie die Tasten 1 bis 4 für schnelle Änderungen.'
      },
      {
        question: 'Ist der gefälschte Virus-Bildschirm kostenlos?',
        answer: 'Ja, er ist völlig kostenlos. Kein Konto, keine Registrierung und keine versteckten Gebühren.'
      },
      {
        question: 'Kann ich dies für Cybersicherheitsschulungen verwenden?',
        answer: 'Ja, er ist ein ausgezeichnetes Werkzeug für Cybersicherheits-Demonstrationen und Schulungssitzungen.'
      },
      {
        question: 'Sammelt der gefälschte Virus-Bildschirm Daten?',
        answer: 'Nein, er sammelt keine Daten. Alles läuft lokal in Ihrem Browser. Keine Analysen, Tracking-Skripte oder Cookies.'
      }
    ],
    hi: [
      {
        question: 'क्या फर्जी वायरस स्क्रीन सुरक्षित है?',
        answer: 'हाँ, यह पूरी तरह से सुरक्षित है। फर्जी वायरस स्क्रीन HTML, CSS और JavaScript का उपयोग करके केवल ब्राउज़र में चलने वाला एक दृश्य सिमुलेशन है। यह कोई सॉफ्टवेयर इंस्टॉल नहीं करता, सिस्टम फ़ाइलों को संशोधित नहीं करता, व्यक्तिगत डेटा तक नहीं पहुँचता और आपके ऑपरेटिंग सिस्टम में कोई बदलाव नहीं करता।'
      },
      {
        question: 'क्या फर्जी वायरस स्क्रीन मैलवेयर इंस्टॉल करती है?',
        answer: 'नहीं। यह पूरी तरह से ब्राउज़र-आधारित दृश्य सिमुलेशन है। आपके डिवाइस पर कुछ भी डाउनलोड, इंस्टॉल या एक्सीक्यूट नहीं किया जाता है।'
      },
      {
        question: 'मैं फर्जी वायरस स्क्रीन फुलस्क्रीन से कैसे बाहर निकलूं?',
        answer: 'अपने कीबोर्ड पर Escape (Esc) कुंजी दबाएं। यह सभी एनिमेशन और ध्वनियों को रोक देता है और पेज को सामान्य स्थिति में लौटा देता है।'
      },
      {
        question: 'कौन से अलर्ट स्टाइल शामिल हैं?',
        answer: 'सिम्युलेटर में 4 अलर्ट शैलियाँ शामिल हैं: एक Google Chrome मैलवेयर चेतावनी, Microsoft Defender SmartScreen पेज, Windows Security एंटीवायरस डैशबोर्ड और WannaCry रैनसमवेयर स्क्रीन।'
      },
      {
        question: 'क्या फर्जी वायरस स्क्रीन मोबाइल पर काम करती है?',
        answer: 'हाँ, यह किसी भी आधुनिक वेब ब्राउज़र वाले डिवाइस पर काम करती है — विंडोज, मैक, लिनक्स, क्रोमबुक, टैबलेट और स्मार्टफोन।'
      },
      {
        question: 'क्या सिम्युलेटर ध्वनि उत्पन्न करता है?',
        answer: 'हाँ, प्रत्येक अलर्ट शैली में Web Audio API से बना एक अनूठा सिंथेसाइज़्ड ध्वनि प्रभाव है। आप S कुंजी दबाकर ध्वनि को चालू या बंद कर सकते हैं।'
      },
      {
        question: 'क्या फर्जी वायरस स्क्रीन मुफ्त है?',
        answer: 'हाँ, यह पूरी तरह से मुफ्त है। कोई खाता, पंजीकरण या छिपी हुई फीस नहीं।'
      },
      {
        question: 'क्या मैं इसका उपयोग साइबर सुरक्षा प्रशिक्षण के लिए कर सकता हूँ?',
        answer: 'हाँ, फर्जी वायरस स्क्रीन साइबर सुरक्षा जागरूकता प्रदर्शनों और प्रशिक्षण सत्रों के लिए एक उत्कृष्ट उपकरण है।'
      },
      {
        question: 'क्या फर्जी वायरस स्क्रीन डेटा एकत्र करती है?',
        answer: 'नहीं, यह कोई डेटा एकत्र नहीं करती। सब कुछ आपके ब्राउज़र में स्थानीय रूप से चलता है।'
      }
    ],
    ja: [
      {
        question: '偽ウイルス画面は安全ですか？',
        answer: 'はい、完全に安全です。偽ウイルス画面はHTML、CSS、JavaScriptを使用したブラウザのみの視覚シミュレーションです。ソフトウェアをインストールしたり、システムファイルを変更したり、個人データにアクセスしたりすることはありません。'
      },
      {
        question: '偽ウイルス画面はマルウェアをインストールしますか？',
        answer: 'いいえ。これは純粋にブラウザベースの視覚シミュレーションです。お使いのデバイスにダウンロード、インストール、実行されるものは何もありません。'
      },
      {
        question: '偽ウイルス画面の全画面を終了するにはどうすればよいですか？',
        answer: 'キーボードのEscape（Esc）キーを押すと、すぐに全画面モードを終了できます。すべてのアニメーションとサウンドが停止します。'
      },
      {
        question: 'どのようなアラートスタイルがありますか？',
        answer: 'シミュレーターには4つのアラートスタイルがあります：Google Chromeのマルウェア警告、Microsoft Defender SmartScreen、Windows Securityアンチウイルスダッシュボード、WannaCryランサムウェア画面。'
      },
      {
        question: '偽ウイルス画面はモバイルで動作しますか？',
        answer: 'はい、モダンなウェブブラウザを搭載したあらゆるデバイスで動作します — Windows、Mac、Linux、Chromebook、タブレット、スマートフォン。'
      },
      {
        question: 'シミュレーターは音を出しますか？',
        answer: 'はい、各アラートスタイルにはWeb Audio APIで作成された独自の合成サウンドエフェクトがあります。Sキーを押すとサウンドのオン/オフを切り替えられます。'
      },
      {
        question: '偽ウイルス画面は無料ですか？',
        answer: 'はい、完全に無料です。アカウントも登録も隠れた料金もありません。'
      },
      {
        question: 'サイバーセキュリティトレーニングに使用できますか？',
        answer: 'はい、偽ウイルス画面はサイバーセキュリティ意識向上のデモやトレーニングセッションに最適なツールです。'
      },
      {
        question: '偽ウイルス画面はデータを収集しますか？',
        answer: 'いいえ、データは収集しません。すべてブラウザ内でローカルに動作します。分析、トラッキングスクリプト、Cookieは一切ありません。'
      }
    ]
  },
  'windows-update': {
    en: [
      {
        question: 'Is the fake Windows Update screen safe?',
        answer: 'Yes, it is completely safe. The fake Windows Update screen is a browser-only visual simulation using HTML, CSS, and JavaScript. It does not install any software, modify system files, access personal data, or make any changes to your operating system. No malware, no downloads, no risk.'
      },
      {
        question: 'Does the fake Windows Update screen actually update my system?',
        answer: 'No. This is a purely visual browser-based simulation. It displays animated fake update screens — spinning dots, progress bars, blue screens, and recovery screens — entirely within your browser. Nothing is downloaded, installed, or executed on your device. Your system is never modified.'
      },
      {
        question: 'How do I exit the fake Windows Update screen fullscreen?',
        answer: 'Press the Escape (Esc) key on your keyboard to exit fullscreen mode instantly. This stops all animations and returns the page to its normal state. No trace of the simulation remains on your device.'
      },
      {
        question: 'What simulation modes are included?',
        answer: 'The simulator includes 4 modes: Spinning Dots mode shows the classic "Getting Windows ready" animation; Update Progress mode displays a percentage progress bar; Blue Screen mode simulates a Windows blue screen of death with error messages; Recovery mode shows "Automatic Repair" or "Preparing Automatic Repair" screens. You can switch between modes in fullscreen using keyboard shortcuts 1-4.'
      },
      {
        question: 'Does the fake Windows Update screen work on mobile?',
        answer: 'Yes, it works on any device with a modern web browser — Windows, Mac, Linux, Chromebook, tablets, and smartphones. The simulation adapts to different screen sizes and supports touch input. Fullscreen mode works on supported mobile browsers.'
      },
      {
        question: 'Can I use the fake Windows Update screen in a video or stream?',
        answer: 'Yes, the fake Windows Update screen is perfect for YouTube videos, TikTok content, Twitch streams, and video production. Use it as a prank visual, intermission screen, or background effect. The fullscreen mode hides browser UI for clean recording. It also works as a browser source in OBS Studio and streaming software.'
      },
      {
        question: 'Can I control the speed of the simulation?',
        answer: 'Yes. Adjust the speed slider in the settings panel to control animation speed. Slow speed works best for extended pranks and background effects. Medium speed creates a natural update feel. Fast speed works for quick demos. You can also pause and resume the animation using the R key.'
      },
      {
        question: 'What keyboard shortcuts are available?',
        answer: 'In fullscreen mode: press F to enter fullscreen, press 1-4 to switch simulation modes (1=Spinning Dots, 2=Update Progress, 3=Blue Screen, 4=Recovery), press R to toggle pause/resume, and press Esc to exit fullscreen and end the simulation.'
      },
      {
        question: 'Is the fake Windows Update screen free?',
        answer: 'Yes, it is completely free. No account, no registration, no credit card, and no hidden fees. The fake Windows Update screen is a free online tool available to everyone with no usage limits.'
      },
      {
        question: 'Can I use this for classroom demonstrations?',
        answer: 'Yes, the fake Windows Update screen is excellent for classroom presentations, technology demonstrations, and training sessions. It helps illustrate what different Windows update and error screens look like without affecting real systems.'
      },
      {
        question: 'Does the fake Windows Update screen collect data?',
        answer: 'No. The fake Windows Update screen collects no data. Everything runs locally in your browser. There are no analytics, no tracking scripts, no cookies, and no data sent to any server after the initial page load.'
      },
      {
        question: 'Can I use the fake Windows Update screen for an escape room or theatre?',
        answer: 'Yes, the fake Windows Update screen works great as an escape room prop, theatre production visual, Halloween decoration, or party effect. The 4 modes provide variety for different scenes and scenarios.'
      }
    ],
    es: [
      {
        question: '¿Es segura la pantalla de actualización de Windows falsa?',
        answer: 'Sí, es completamente segura. La pantalla de actualización de Windows falsa es una simulación visual que solo funciona en el navegador usando HTML, CSS y JavaScript. No instala ningún software, no modifica archivos del sistema, no accede a datos personales y no realiza cambios en su sistema operativo. Sin malware, sin descargas, sin riesgo.'
      },
      {
        question: '¿La pantalla de actualización de Windows falsa realmente actualiza mi sistema?',
        answer: 'No. Esta es una simulación puramente visual basada en el navegador. Muestra pantallas de actualización falsas animadas: puntos giratorios, barras de progreso, pantalla azul y pantallas de recuperación, completamente dentro de su navegador. No se descarga, instala ni ejecuta nada en su dispositivo.'
      },
      {
        question: '¿Cómo salgo del modo de pantalla completa de la actualización falsa de Windows?',
        answer: 'Presione la tecla Escape (Esc) en su teclado para salir del modo de pantalla completa al instante. Esto detiene todas las animaciones y devuelve la página a su estado normal.'
      },
      {
        question: '¿Qué modos de simulación están incluidos?',
        answer: 'El simulador incluye 4 modos: el modo de puntos giratorios muestra la animación clásica de "Preparando Windows"; el modo de progreso de actualización muestra una barra de progreso con porcentaje; el modo de pantalla azul simula una pantalla azul de Windows con mensajes de error; el modo de recuperación muestra pantallas de "Reparación automática".'
      },
      {
        question: '¿La pantalla de actualización falsa de Windows funciona en dispositivos móviles?',
        answer: 'Sí, funciona en cualquier dispositivo con un navegador web moderno: Windows, Mac, Linux, Chromebook, tabletas y teléfonos inteligentes. La simulación se adapta a diferentes tamaños de pantalla.'
      },
      {
        question: '¿Es gratuita la pantalla de actualización de Windows falsa?',
        answer: 'Sí, es completamente gratuita. Sin cuenta, sin registro, sin tarjeta de crédito y sin cargos ocultos. Disponible para todos sin límites de uso.'
      }
    ],
    pt: [
      {
        question: 'A tela de atualização falsa do Windows é segura?',
        answer: 'Sim, é completamente segura. A tela de atualização falsa do Windows é uma simulação visual baseada apenas no navegador usando HTML, CSS e JavaScript. Não instala software, não modifica arquivos do sistema, não acessa dados pessoais e não faz alterações no seu sistema operacional.'
      },
      {
        question: 'A tela de atualização falsa do Windows realmente atualiza meu sistema?',
        answer: 'Não. Esta é uma simulação puramente visual baseada no navegador. Exibe telas de atualização falsas animadas — pontos giratórios, barras de progresso, tela azul e telas de recuperação — inteiramente dentro do seu navegador.'
      },
      {
        question: 'Como saio do modo tela cheia da atualização falsa do Windows?',
        answer: 'Pressione a tecla Escape (Esc) no seu teclado para sair do modo tela cheia instantaneamente. Isso para todas as animações e retorna a página ao seu estado normal.'
      },
      {
        question: 'Quais modos de simulação estão incluídos?',
        answer: 'O simulador inclui 4 modos: modo de pontos giratórios mostra a animação clássica de "Preparando o Windows"; modo de progresso de atualização exibe uma barra de progresso com porcentagem; modo de tela azul simula uma tela azul do Windows; modo de recuperação mostra telas de "Reparo automático".'
      }
    ],
    fr: [
      {
        question: 'La fausse écran de mise à jour Windows est-elle sûre ?',
        answer: 'Oui, elle est totalement sûre. La fausse écran de mise à jour Windows est une simulation visuelle basée uniquement sur le navigateur utilisant HTML, CSS et JavaScript. Elle n\'installe aucun logiciel, ne modifie aucun fichier système et n\'accède à aucune donnée personnelle.'
      },
      {
        question: 'La fausse écran de mise à jour Windows met-elle réellement à jour mon système ?',
        answer: 'Non. Il s\'agit d\'une simulation purement visuelle basée sur le navigateur. Elle affiche de fausses écrans de mise à jour animés — points tournants, barres de progression, écran bleu et écrans de récupération — entièrement dans votre navigateur.'
      },
      {
        question: 'Comment quitter le mode plein écran de la fausse mise à jour Windows ?',
        answer: 'Appuyez sur la touche Échap (Esc) de votre clavier pour quitter instantanément le mode plein écran. Cela arrête toutes les animations et ramène la page à son état normal.'
      },
      {
        question: 'Quels modes de simulation sont inclus ?',
        answer: 'Le simulateur comprend 4 modes : le mode points tournants affiche l\'animation classique "Préparation de Windows" ; le mode progression affiche une barre de pourcentage ; le mode écran bleu simule un écran bleu Windows ; le mode récupération affiche les écrans de "Réparation automatique".'
      }
    ],
    de: [
      {
        question: 'Ist der gefälschte Windows-Update-Bildschirm sicher?',
        answer: 'Ja, er ist völlig sicher. Der gefälschte Windows-Update-Bildschirm ist eine reine Browser-Visualisierung mit HTML, CSS und JavaScript. Er installiert keine Software, ändert keine Systemdateien und greift nicht auf persönliche Daten zu.'
      },
      {
        question: 'Führt der gefälschte Windows-Update-Bildschirm tatsächlich ein Update durch?',
        answer: 'Nein. Dies ist eine rein visuelle browserbasierte Simulation. Sie zeigt animierte gefälschte Update-Bildschirme — drehende Punkte, Fortschrittsbalken, blauen Bildschirm und Wiederherstellungsbildschirme — vollständig in Ihrem Browser an.'
      },
      {
        question: 'Wie verlasse ich den Vollbildmodus des gefälschten Windows-Updates?',
        answer: 'Drücken Sie die Escape-Taste (Esc) auf Ihrer Tastatur, um den Vollbildmodus sofort zu verlassen. Alle Animationen werden gestoppt und die Seite kehrt in ihren Normalzustand zurück.'
      },
      {
        question: 'Welche Simulationsmodi sind enthalten?',
        answer: 'Der Simulator umfasst 4 Modi: Der Modus mit drehenden Punkten zeigt die klassische "Windows wird vorbereitet"-Animation; der Fortschrittsmodus zeigt einen Prozentbalken; der Bluescreen-Modus simuliert einen Windows-Bluescreen; der Wiederherstellungsmodus zeigt "Automatische Reparatur"-Bildschirme.'
      }
    ],
    hi: [
      {
        question: 'क्या फर्जी विंडोज अपडेट स्क्रीन सुरक्षित है?',
        answer: 'हाँ, यह पूरी तरह से सुरक्षित है। फर्जी विंडोज अपडेट स्क्रीन HTML, CSS और JavaScript का उपयोग करके एक ब्राउज़र-आधारित दृश्य सिमुलेशन है। यह कोई सॉफ़्टवेयर इंस्टॉल नहीं करता, सिस्टम फ़ाइलों को संशोधित नहीं करता, और व्यक्तिगत डेटा तक पहुँच नहीं बनाता।'
      },
      {
        question: 'क्या फर्जी विंडोज अपडेट स्क्रीन वास्तव में मेरे सिस्टम को अपडेट करती है?',
        answer: 'नहीं। यह पूरी तरह से ब्राउज़र-आधारित दृश्य सिमुलेशन है। यह पूरी तरह से आपके ब्राउज़र के भीतर एनिमेटेड फर्जी अपडेट स्क्रीन प्रदर्शित करता है — स्पिनिंग डॉट्स, प्रोग्रेस बार, ब्लू स्क्रीन और रिकवरी स्क्रीन।'
      },
      {
        question: 'मैं फर्जी विंडोज अपडेट स्क्रीन फुलस्क्रीन से कैसे बाहर निकलूं?',
        answer: 'अपने कीबोर्ड पर Escape (Esc) कुंजी दबाएं। यह सभी एनिमेशन रोक देता है और पेज को सामान्य स्थिति में लौटा देता है।'
      },
      {
        question: 'कौन से सिमुलेशन मोड शामिल हैं?',
        answer: 'सिम्युलेटर में 4 मोड शामिल हैं: स्पिनिंग डॉट्स मोड क्लासिक "गेटिंग विंडोज रेडी" एनिमेशन दिखाता है; अपडेट प्रोग्रेस मोड प्रतिशत प्रोग्रेस बार दिखाता है; ब्लू स्क्रीन मोड विंडोज ब्लू स्क्रीन का अनुकरण करता है; रिकवरी मोड "ऑटोमैटिक रिपेयर" स्क्रीन दिखाता है।'
      }
    ],
    ja: [
      {
        question: '偽Windowsアップデート画面は安全ですか？',
        answer: 'はい、完全に安全です。偽Windowsアップデート画面はHTML、CSS、JavaScriptを使用したブラウザのみの視覚的シミュレーションです。ソフトウェアのインストール、システムファイルの変更、個人データへのアクセスは一切行いません。'
      },
      {
        question: '偽Windowsアップデート画面は実際にシステムを更新しますか？',
        answer: 'いいえ。これは純粋にブラウザベースの視覚的シミュレーションです。回転ドット、進捗バー、青画面、回復画面など、偽のアップデート画面をブラウザ内で表示するだけです。'
      },
      {
        question: '偽Windowsアップデート画面の全画面を終了するには？',
        answer: 'キーボードのEscape（Esc）キーを押すと、すぐに全画面モードを終了できます。すべてのアニメーションが停止し、ページは通常の状態に戻ります。'
      },
      {
        question: 'どのようなシミュレーションモードがありますか？',
        answer: '4つのモードがあります：回転ドットモードは「Windowsを準備しています」アニメーションを表示；進捗モードは進捗バーを表示；青画面モードはWindowsブルースクリーンを模倣；回復モードは「自動修復」画面を表示します。'
      }
    ]
  },
  'ubuntu-screen': {
    en: [
      {
        question: 'Is the Ubuntu screen simulator safe?',
        answer: 'Yes, it is completely safe. The Ubuntu screen simulator is a browser-only visual simulation using HTML, CSS, and JavaScript. It does not install any software, modify system files, access personal data, or make any changes to your operating system. No malware, no downloads, no risk.'
      },
      {
        question: 'Does the Ubuntu screen simulator actually install Ubuntu?',
        answer: 'No. This is a purely visual browser-based simulation. It displays an animated fake Ubuntu boot screen and update progress animation entirely within your browser. Nothing is downloaded, installed, or executed on your device. Your system is never modified.'
      },
      {
        question: 'How do I exit the Ubuntu screen fullscreen?',
        answer: 'Press the Escape (Esc) key on your keyboard to exit fullscreen mode instantly. This stops all animations and returns the page to its normal state. No trace of the simulation remains on your device.'
      },
      {
        question: 'What does the Ubuntu screen simulator show?',
        answer: 'The simulator shows a realistic Ubuntu update installation screen with an authentic boot animation featuring the Ubuntu logo, a non-linear progress bar that mimics real update behaviour with realistic speed variations, random pauses, and stick points at common percentages, plus a reboot cycle animation.'
      },
      {
        question: 'Does the Ubuntu screen simulator work on mobile?',
        answer: 'Yes, it works on any device with a modern web browser — Windows, Mac, Linux, Chromebook, tablets, and smartphones. The simulation adapts to different screen sizes and supports touch input. Fullscreen mode works on supported mobile browsers.'
      },
      {
        question: 'Can I use the Ubuntu screen simulator in a video or stream?',
        answer: 'Yes, the Ubuntu screen simulator is perfect for YouTube videos, TikTok content, Twitch streams, and video production. Use it as a Linux demo visual, intermission screen, or background effect. The fullscreen mode hides browser UI for clean recording. It also works as a browser source in OBS Studio and streaming software.'
      },
      {
        question: 'Can I use this for teaching Linux?',
        answer: 'Yes, the Ubuntu screen simulator is excellent for Linux classroom presentations, university lectures, computer science demonstrations, and training sessions. It helps illustrate what Ubuntu boot and update screens look like without needing to run a virtual machine or install Ubuntu on a real system.'
      },
      {
        question: 'What keyboard shortcuts are available?',
        answer: 'In fullscreen mode: press F to toggle fullscreen, and press Esc to exit fullscreen and end the simulation. The cursor auto-hides after 2 seconds of inactivity in fullscreen mode for a clean presentation look.'
      },
      {
        question: 'Is the Ubuntu screen simulator free?',
        answer: 'Yes, it is completely free. No account, no registration, no credit card, and no hidden fees. The Ubuntu screen simulator is a free online tool available to everyone with no usage limits.'
      },
      {
        question: 'Can I use it for OBS or streaming?',
        answer: 'Yes. Open the page in a browser window, use it as a browser source in OBS Studio, Streamlabs, or any streaming software with browser capture. The fullscreen mode hides browser chrome for a clean capture. The simulation runs smoothly without performance issues.'
      },
      {
        question: 'Does the Ubuntu screen simulator collect data?',
        answer: 'No. The Ubuntu screen simulator collects no data. Everything runs locally in your browser. There are no analytics, no tracking scripts, no cookies, and no data sent to any server after the initial page load.'
      },
      {
        question: 'Can I use the Ubuntu screen simulator for an escape room or theatre?',
        answer: 'Yes, the Ubuntu screen simulator works great as an escape room prop, theatre production visual, technology event display, or trade show installation. The realistic Ubuntu boot and update screens provide authentic Linux-themed visuals for any creative project.'
      },
      {
        question: 'Does the simulation have realistic progress behaviour?',
        answer: 'Yes. The progress simulation uses a non-linear curve that starts slow, accelerates in the middle, and decelerates near completion — just like real Ubuntu updates. It also includes random speed spurts (0.5-5% jumps), stick points at common percentages (5, 14, 28, 40, 55, 65, 76, 84, 92, 97), and random pauses to create a completely authentic feel.'
      }
    ],
    es: [
      {
        question: '¿Es seguro el simulador de pantalla Ubuntu?',
        answer: 'Sí, es completamente seguro. El simulador de pantalla Ubuntu es una simulación visual basada en el navegador que utiliza HTML, CSS y JavaScript. No instala software, no modifica archivos del sistema, no accede a datos personales y no realiza cambios en su sistema operativo.'
      },
      {
        question: '¿El simulador de pantalla Ubuntu realmente instala Ubuntu?',
        answer: 'No. Esta es una simulación puramente visual basada en el navegador. Muestra una animación falsa de pantalla de arranque y progreso de actualización de Ubuntu completamente dentro de su navegador. No se descarga, instala ni ejecuta nada en su dispositivo.'
      },
      {
        question: '¿Cómo salgo del modo de pantalla completa del simulador Ubuntu?',
        answer: 'Presione la tecla Escape (Esc) en su teclado para salir del modo de pantalla completa al instante. Esto detiene todas las animaciones y devuelve la página a su estado normal.'
      },
      {
        question: '¿Qué muestra el simulador de pantalla Ubuntu?',
        answer: 'El simulador muestra una pantalla realista de instalación de actualización de Ubuntu con una animación de arranque auténtica con el logotipo de Ubuntu, una barra de progreso no lineal que imita el comportamiento real de las actualizaciones, y un ciclo de reinicio animado.'
      },
      {
        question: '¿Es gratuito el simulador de pantalla Ubuntu?',
        answer: 'Sí, es completamente gratuito. Sin cuenta, sin registro, sin tarjeta de crédito y sin cargos ocultos. Disponible para todos sin límites de uso.'
      },
      {
        question: '¿Puedo usarlo para enseñar Linux?',
        answer: 'Sí, el simulador de pantalla Ubuntu es excelente para presentaciones en clase de Linux, conferencias universitarias y sesiones de entrenamiento. Ayuda a ilustrar cómo se ven las pantallas de arranque y actualización de Ubuntu sin necesidad de ejecutar una máquina virtual.'
      }
    ],
    pt: [
      {
        question: 'O simulador de tela Ubuntu é seguro?',
        answer: 'Sim, é completamente seguro. O simulador de tela Ubuntu é uma simulação visual baseada no navegador usando HTML, CSS e JavaScript. Não instala software, não modifica arquivos do sistema, não acessa dados pessoais e não faz alterações no seu sistema operacional.'
      },
      {
        question: 'O simulador de tela Ubuntu realmente instala o Ubuntu?',
        answer: 'Não. Esta é uma simulação puramente visual baseada no navegador. Exibe uma animação falsa de tela de boot e progresso de atualização do Ubuntu inteiramente dentro do seu navegador.'
      },
      {
        question: 'Como saio do modo tela cheia do simulador Ubuntu?',
        answer: 'Pressione a tecla Escape (Esc) no seu teclado para sair do modo tela cheia instantaneamente. Isso para todas as animações e retorna a página ao seu estado normal.'
      },
      {
        question: 'O que o simulador de tela Ubuntu mostra?',
        answer: 'O simulador mostra uma tela realista de instalação de atualização do Ubuntu com animação de boot autêntica, barra de progresso não linear que imita o comportamento real de atualizações, e um ciclo de reinicialização animado.'
      }
    ],
    fr: [
      {
        question: 'Le simulateur d\'écran Ubuntu est-il sûr ?',
        answer: 'Oui, il est totalement sûr. Le simulateur d\'écran Ubuntu est une simulation visuelle basée sur le navigateur utilisant HTML, CSS et JavaScript. Il n\'installe aucun logiciel, ne modifie aucun fichier système et n\'accède à aucune donnée personnelle.'
      },
      {
        question: 'Le simulateur d\'écran Ubuntu installe-t-il réellement Ubuntu ?',
        answer: 'Non. Il s\'agit d\'une simulation purement visuelle basée sur le navigateur. Elle affiche une fausse animation d\'écran de démarrage et de progression de mise à jour Ubuntu entièrement dans votre navigateur.'
      },
      {
        question: 'Comment quitter le mode plein écran du simulateur Ubuntu ?',
        answer: 'Appuyez sur la touche Échap (Esc) de votre clavier pour quitter instantanément le mode plein écran. Cela arrête toutes les animations et ramène la page à son état normal.'
      },
      {
        question: 'Que montre le simulateur d\'écran Ubuntu ?',
        answer: 'Le simulateur affiche un écran réaliste d\'installation de mise à jour Ubuntu avec une animation de démarrage authentique, une barre de progression non linéaire imitant le comportement réel des mises à jour, et un cycle de redémarrage animé.'
      }
    ],
    de: [
      {
        question: 'Ist der Ubuntu-Bildschirm-Simulator sicher?',
        answer: 'Ja, er ist völlig sicher. Der Ubuntu-Bildschirm-Simulator ist eine reine Browser-Visualisierung mit HTML, CSS und JavaScript. Er installiert keine Software, ändert keine Systemdateien und greift nicht auf persönliche Daten zu.'
      },
      {
        question: 'Installiert der Ubuntu-Bildschirm-Simulator tatsächlich Ubuntu?',
        answer: 'Nein. Dies ist eine rein visuelle browserbasierte Simulation. Sie zeigt eine animierte gefälschte Ubuntu-Boot- und Update-Fortschrittsanzeige vollständig in Ihrem Browser an.'
      },
      {
        question: 'Wie verlasse ich den Vollbildmodus des Ubuntu-Simulators?',
        answer: 'Drücken Sie die Escape-Taste (Esc) auf Ihrer Tastatur, um den Vollbildmodus sofort zu verlassen. Alle Animationen werden gestoppt und die Seite kehrt in ihren Normalzustand zurück.'
      },
      {
        question: 'Was zeigt der Ubuntu-Bildschirm-Simulator?',
        answer: 'Der Simulator zeigt einen realistischen Ubuntu-Update-Installationsbildschirm mit authentischer Boot-Animation, nicht-linearer Fortschrittsanzeige und einem animierten Neustartzyklus.'
      }
    ],
    hi: [
      {
        question: 'क्या उबंटू स्क्रीन सिम्युलेटर सुरक्षित है?',
        answer: 'हाँ, यह पूरी तरह से सुरक्षित है। उबंटू स्क्रीन सिम्युलेटर HTML, CSS और JavaScript का उपयोग करके एक ब्राउज़र-आधारित दृश्य सिमुलेशन है। यह कोई सॉफ़्टवेयर इंस्टॉल नहीं करता, सिस्टम फ़ाइलों को संशोधित नहीं करता, और व्यक्तिगत डेटा तक पहुँच नहीं बनाता।'
      },
      {
        question: 'क्या उबंटू स्क्रीन सिम्युलेटर वास्तव में उबंटू इंस्टॉल करता है?',
        answer: 'नहीं। यह पूरी तरह से ब्राउज़र-आधारित दृश्य सिमुलेशन है। यह पूरी तरह से आपके ब्राउज़र के भीतर एक एनिमेटेड फर्जी उबंटू बूट स्क्रीन और अपडेट प्रोग्रेस प्रदर्शित करता है।'
      },
      {
        question: 'मैं उबंटू स्क्रीन फुलस्क्रीन से कैसे बाहर निकलूं?',
        answer: 'अपने कीबोर्ड पर Escape (Esc) कुंजी दबाएं। यह सभी एनिमेशन रोक देता है और पेज को सामान्य स्थिति में लौटा देता है।'
      },
      {
        question: 'उबंटू स्क्रीन सिम्युलेटर क्या दिखाता है?',
        answer: 'सिम्युलेटर उबंटू लोगो के साथ एक प्रामाणिक बूट एनिमेशन, यथार्थवादी गति भिन्नताओं के साथ एक नॉन-लीनियर प्रोग्रेस बार, और एक रीबूट चक्र एनिमेशन के साथ एक यथार्थवादी उबंटू अपडेट इंस्टॉलेशन स्क्रीन दिखाता है।'
      }
    ],
    ja: [
      {
        question: 'Ubuntu画面シミュレーターは安全ですか？',
        answer: 'はい、完全に安全です。Ubuntu画面シミュレーターはHTML、CSS、JavaScriptを使用したブラウザのみの視覚的シミュレーションです。ソフトウェアのインストール、システムファイルの変更、個人データへのアクセスは一切行いません。'
      },
      {
        question: 'Ubuntu画面シミュレーターは実際にUbuntuをインストールしますか？',
        answer: 'いいえ。これは純粋にブラウザベースの視覚的シミュレーションです。偽のUbuntuブート画面と更新進捗アニメーションをブラウザ内で表示するだけです。'
      },
      {
        question: 'Ubuntu画面シミュレーターの全画面を終了するには？',
        answer: 'キーボードのEscape（Esc）キーを押すと、すぐに全画面モードを終了できます。すべてのアニメーションが停止し、ページは通常の状態に戻ります。'
      },
      {
        question: 'Ubuntu画面シミュレーターは何を表示しますか？',
        answer: 'Ubuntuロゴを使用した本格的なブートアニメーション、実際のアップデート動作を模倣した非線形進捗バー、および再起動サイクルアニメーションを備えた、リアルなUbuntuアップデートインストール画面を表示します。'
      }
    ]
  }
};

export function toolFaqs(locale: Locale, toolId: string, defaultFaqs: { question: string; answer: string }[]): { question: string; answer: string }[] {
  const faqs = localizedFaqs[toolId]?.[locale] ?? defaultFaqs;
  return faqs.map((faq) => ({
    question: faq.question.replace(/<[^>]*>/g, '').replace(/\*\*/g, '').trim(),
    answer: faq.answer.replace(/<[^>]*>/g, '').replace(/\*\*/g, '').trim(),
  }));
}

export function getRelatedSearches(locale: Locale): string[] {
  const searches: Record<Locale, string[]> = {
    en: [
      'White screen Wallpaper',
      'White screen light',
      'White screen Windows',
      'White screen test',
      'White screen Photo',
      'White screen youtube',
      'White screen online',
      'White screen download',
      'White screen background',
      'White screen image'
    ],
    es: [
      'Fondo de pantalla blanca',
      'Luz de pantalla blanca',
      'Pantalla blanca Windows',
      'Prueba de pantalla blanca',
      'Foto con pantalla blanca',
      'Pantalla blanca youtube',
      'Pantalla blanca online',
      'Descargar pantalla blanca',
      'Fondo blanco pantalla',
      'Imagen de pantalla blanca'
    ],
    pt: [
      'Papel de parede tela branca',
      'Luz de tela branca',
      'Tela branca Windows',
      'Teste de tela branca',
      'Foto com tela branca',
      'Tela branca youtube',
      'Tela branca online',
      'Baixar tela branca',
      'Fundo branco tela',
      'Imagem de tela branca'
    ],
    fr: [
      "Fond d'écran blanc",
      "Lumière écran blanc",
      "Écran blanc Windows",
      "Test écran blanc",
      "Photo écran blanc",
      "Écran blanc youtube",
      "Écran blanc en ligne",
      "Télécharger écran blanc",
      "Arrière-plan écran blanc",
      "Image écran blanc"
    ],
    de: [
      'Weißer Bildschirm Hintergrund',
      'Weißer Bildschirm Licht',
      'Weißer Bildschirm Windows',
      'Weißer Bildschirm Test',
      'Weißer Bildschirm Foto',
      'Weißer Bildschirm youtube',
      'Weißer Bildschirm online',
      'Weißer Bildschirm herunterladen',
      'Weißer Hintergrund Bildschirm',
      'Weißer Bildschirm Bild'
    ],
    hi: [
      'सफेद स्क्रीन वॉलपेपर',
      'सफेद स्क्रीन लाइट',
      'सफेद स्क्रीन विंडोज़',
      'सफेद स्क्रीन परीक्षण',
      'सफेद स्क्रीन फोटो',
      'सफेद स्क्रीन यूट्यूब',
      'सफेद स्क्रीन ऑनलाइन',
      'सफेद स्क्रीन डाउनलोड',
      'सफेद स्क्रीन बैकग्राउंड',
      'सफेद स्क्रीन इमेज'
    ],
    ja: [
      '白い画面 壁紙',
      '白い画面 ライト',
      '白い画面 Windows',
      '白い画面 テスト',
      '白い画面 写真',
      '白い画面 youtube',
      '白い画面 オンライン',
      '白い画面 ダウンロード',
      '白い画面 背景',
      '白い画面 画像'
    ]
  };
  return searches[locale] ?? searches.en;
}

export function getBlogKeywordsContent(locale: Locale, toolId: string = 'white-screen'): { heading: string; paragraphs: string[] } {
  if (toolId === 'fireplace-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Online Virtual Fireplace Screen for Desktop, Laptop & TV Ambience',
        paragraphs: [
          'Transform any computer display, laptop monitor, PC, or Smart TV into an immersive online <strong>fireplace screen</strong>. Our <strong>virtual fireplace</strong> provides realistic flame animations, soft ambient illumination, and cozy <strong>fireplace video</strong> warmth without ads, heavy streaming buffering, or unwanted visual distractions. Whether you want a relaxing <strong>fireplace screensaver</strong> alternative while working at your desk, a glowing <strong>digital fireplace</strong> backdrop for your living room TV, or a <strong>cozy fireplace screen</strong> for winter evenings, this tool offers an instant web-based solution.',
          'Enjoy authentic ambient sound with our customizable <strong>crackling fireplace</strong> audio controller. Fine-tune the crackle intensity and volume to create a peaceful focus environment for studying, reading, coding, or sleeping. The <strong>fireplace ambience</strong> is also a popular choice for holiday decor (Christmas, winter gatherings), offices, cafés, waiting rooms, and video creators seeking a clean YouTube ambient replacement without video interruptions or battery-draining app downloads.',
          'Designed for seamless performance on all devices, this interactive <strong>fireplace on screen</strong> lets you switch between 4 unique flame color styles—Classic Orange, Blue Mystic, Emerald Wood, and Violet Phantom. Adjust screen brightness, toggle soft rain overlays, or set a 15-to-90-minute sleep timer. Press Fullscreen or the "F" shortcut key to project a full-screen <strong>ambient fireplace</strong> across your monitor for an instant, comfortable hearth experience anytime.'
        ]
      },
      es: {
        heading: 'Pantalla de Chimenea Virtual Online para Escritorio, Portátil y TV',
        paragraphs: [
          'Transforma cualquier pantalla de ordenador, portátil, monitor o Smart TV en una acogedora <strong>pantalla de chimenea</strong> en línea. Nuestra <strong>chimenea virtual</strong> ofrece una animación de llamas realista, iluminación cálida de fondo y ambiente de <strong>chimenea en pantalla completa</strong> sin anuncios, descargas pesadas ni interrupciones de reproducción.',
          'Disfruta de un ambiente de relax absoluto con nuestro sonido de <strong>chimenea crepitante</strong> personalizable. Ajusta el volumen del chisporroteo de la leña para crear el entorno perfecto para estudiar, trabajar, leer o dormir. Es una alternativa ideal al clásico <strong>salvapantallas de chimenea</strong> para ordenadores, decoración en Navidad e invierno, o para ambientar cafeterías, oficinas y salones.',
          'Diseñada para ofrecer el máximo rendimiento en todos los dispositivos, esta <strong>chimenea digital</strong> te permite personalizar el color del fuego (naranja clásico, azul místico, esmeralda y violeta), regular el brillo de la pantalla y activar un temporizador de apagado automático de 15 a 90 minutos presionando la tecla "F".'
        ]
      },
      pt: {
        heading: 'Tela de Lareira Virtual Online para Desktop, Notebook e Smart TV',
        paragraphs: [
          'Transforme qualquer tela de computador, notebook, monitor ou Smart TV em uma acolhedora <strong>tela de lareira</strong> online. Nossa <strong>lareira virtual</strong> oferece animação realista de chamas, iluminação ambiente quente e um fundo de lareira aconchegante sem anúncios ou downloads pesados.',
          'Aproveite o som de <strong>fogueira estalando</strong> com controle de volume ajustável. Crie o ambiente perfeito para focar nos estudos, trabalhar, ler ou dormir. Esta <strong>lareira digital</strong> é a escolha perfeita para substituição de protetor de tela, decoração de inverno e Natal, ou para criar um clima relaxante em escritórios, cafés e salas de estar.',
          'Com suporte completo a tela cheia, personalize os tons do fogo (Laranja Clássico, Azul Místico, Verde Esmeralda e Violeta), ajuste o brilho do monitor e configure o timer de desligamento automático de 15 a 90 minutos com o atalho de teclado "F".'
        ]
      },
      fr: {
        heading: 'Écran de Cheminée Virtuelle en Ligne pour PC, Portable et TV',
        paragraphs: [
          'Transformez n\'importe quel écran d\'ordinateur, portable, moniteur ou Smart TV en un <strong>écran de cheminée</strong> virtuelle en ligne. Notre outil offre des animations de flammes réalistes, un éclairage d\'ambiance chaleureux et un fond de cheminée apaisant sans publicités ni téléchargements.',
          'Profitez d\'un son de <strong>crépitement de feu</strong> de bois authentique avec réglage du volume. Créez un environnement calme pour étudier, travailler, lire ou vous endormir. Cet <strong>économiseur d\'écran cheminée</strong> est parfait pour les soirées d\'hiver, la décoration de Noël, ou pour installer une ambiance cosy dans un bureau, un café ou un salon.',
          'Passez en plein écran d\'une simple pression sur la touche "F", choisissez parmi 4 styles de couleurs de flammes (Orange classique, Bleu mystique, Émeraude, Violet) et utilisez le minuteur de sommeil (15 à 90 minutes).'
        ]
      },
      de: {
        heading: 'Virtueller Kaminfeuer-Bildschirm Online für Desktop, Laptop & TV',
        paragraphs: [
          'Verwandeln Sie jeden Computerbildschirm, Laptop, Monitor oder Smart TV in einen gemütlichen <strong>Kaminfeuer-Bildschirm</strong> online. Unser <strong>virtuelles Kaminfeuer</strong> bietet ein realistisches Flammenbild, warme Hintergrundbeleuchtung und ein entspannendes Kaminfeuer auf dem Bildschirm ohne Werbung oder Downloads.',
          'Genießen Sie authentische <strong>Kaminfeuer-Knistergeräusche</strong> mit anpassbarem Lautstärkeregler. Schaffen Sie die ideale Atmosphäre zum Lernen, Arbeiten, Lesen oder Einschlafen. Eine perfekte Alternative zum klassischen <strong>Kamin-Bildschirmschoner</strong>, für die Winter- und Weihnachtszeit oder zur stimmungsvollen Beleuchtung in Wohnzimmern und Büros.',
          'Schalten Sie mit der Taste "F" in den Vollbildmodus, wählen Sie aus 4 Flammenfarben (Klassisch Orange, Mystisches Blau, Smaragdgrün, Violett) und nutzen Sie den integrierten Sleep-Timer (15 bis 90 Minuten).'
        ]
      },
      hi: {
        heading: 'डेस्कटॉप, लैपटॉप और टीवी के लिए ऑनलाइन वर्चुअल फायरप्लेस स्क्रीन',
        paragraphs: [
          'अपने कंप्यूटर, लैपटॉप, मॉनिटर या स्मार्ट टीवी को एक सुंदर <strong>ऑनलाइन फायरप्लेस स्क्रीन</strong> में बदलें। हमारा <strong>वर्चुअल फायरप्लेस</strong> वास्तविक आग की लपटों का दृश्य, हल्की गर्म रोशनी और बिना किसी विज्ञापन या भारी डाउनलोड के आरामदायक <strong>फायरप्लेस बैकग्राउंड</strong> प्रदान करता है।',
          'आग जलने और <strong>लकड़ी चटकने की असली आवाज़</strong> के साथ शांतिपूर्ण माहौल का आनंद लें। पढ़ाई करने, काम करने, पढ़ने या सोने के लिए आदर्श वातावरण बनाएं। यह <strong>स्क्रीनसेवर</strong> का एक बेहतरीन विकल्प है, जो सर्दियों, क्रिसमस, कार्यालयों, कैफे और रहने वाले कमरे के लिए एकदम सही है।',
          'कीबोर्ड शॉर्टकट "F" दबाकर फुलस्क्रीन मोड चालू करें, आग के 4 रंगों (क्लासिक ऑरेंज, ब्लू, ग्रीन, वायलेट) में से चुनें और 15 से 90 मिनट का स्लीप टाइमर सेट करें।'
        ]
      },
      ja: {
        heading: 'デスクトップ・ノートPC・TV用オンラインバーチャル暖炉画面',
        paragraphs: [
          'パソコンのモニター、ノートPC、Smart TVの画面を、温かみのある<strong>オンラインバーチャル暖炉画面</strong>に変身させましょう。リアルな炎のアニメーションと心地よい空間演出を、広告や重いダウンロードなしで全画面表示できます。',
          '調節可能な<strong>薪のパチパチ音</strong>（クラックル音）で、読書、勉強、仕事、睡眠に最適なリラックス空間を演出します。通常の<strong>暖炉スクリーンセーバー</strong>の代わりとして、冬やクリスマスのインテリア、カフェやオフィスの環境映像、YouTubeの焚き火動画の代替として人気です。',
          'キーボードの「F」キーで即座にフルスクリーンに切り替え可能。クラシックオレンジ、ブルー、エメラルド、バイオレットの4つの炎のカラーテーマ切り替えや、15分〜90分のスリープタイマーにも対応しています。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'aquarium-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Online Aquarium Screen — Free Virtual Aquarium for Desktop & Laptop',
        paragraphs: [
          'Transform any computer display, laptop monitor, PC, or Smart TV into a stunning <strong>online aquarium screen</strong>. Our free <strong>virtual aquarium</strong> brings the tranquility of an underwater world to your screen with animated tropical fish, rising bubbles, swaying seaweed, and mesmerizing light effects. Whether you need a relaxing <strong>aquarium background</strong> for your desktop while working, a captivating <strong>fish screen</strong> for your living room TV, or a calming <strong>aquarium screensaver</strong> alternative for your laptop, this tool provides an instant, browser-based solution — no downloads or fish tank maintenance required.',
          'Studies have shown that watching fish in an aquarium reduces stress and improves mood. Our <strong>digital aquarium</strong> delivers these therapeutic benefits without the cost, cleaning, or care of a real tank. Use it as a <strong>relaxing aquarium</strong> for meditation breaks, a soothing <strong>ambient aquarium</strong> backdrop for video calls, or a <strong>fullscreen aquarium</strong> display for waiting rooms, cafés, and office lobbies. The gentle motion of swimming fish creates a calming atmosphere that enhances focus, reduces anxiety, and beautifies any room.',
          'Designed for seamless performance across all devices, this <strong>animated aquarium</strong> lets you customize your underwater experience. Choose from 4 water color themes — Lagoon Turquoise, Deep Sea Reef, Abyssal Zone, and Coral Sunset. Adjust fish count from 3 to 26, control swim speed, toggle ambient ocean sounds and bubble effects, or upload your own background music. Press Fullscreen or the "F" key to project a full-screen <strong>aquarium display</strong> across your monitor, laptop, or TV for an immersive, calming underwater experience anytime.'
        ]
      },
      es: {
        heading: 'Pantalla de Acuario Online — Acuario Virtual Gratis para Escritorio y Portátil',
        paragraphs: [
          'Transforma cualquier pantalla de ordenador, portátil, monitor o Smart TV en una impresionante <strong>pantalla de acuario online</strong>. Nuestro <strong>acuario virtual</strong> gratuito lleva la tranquilidad del mundo submarino a tu pantalla con peces tropicales animados, burbujas, algas marinas y fascinantes efectos de luz. Ya sea que necesites un <strong>fondo de acuario</strong> relajante para tu escritorio, una cautivadora <strong>pantalla de peces</strong> para tu TV o un <strong>salvapantallas de acuario</strong> para tu portátil, esta herramienta ofrece una solución instantánea en el navegador.',
          'Los estudios demuestran que ver peces en un acuario reduce el estrés y mejora el estado de ánimo. Nuestro <strong>acuario digital</strong> ofrece estos beneficios terapéuticos sin el costo ni mantenimiento de un tanque real. Úsalo como <strong>acuario relajante</strong> para descansos de meditación, como fondo de <strong>acuario ambiental</strong> para videollamadas, o como <strong>acuario a pantalla completa</strong> en salas de espera, cafés y oficinas.',
          'Personaliza tu experiencia submarina con 4 temas de color (Turquesa Laguna, Arrecife Profundo, Zona Abisal y Atardecer de Coral). Ajusta el número de peces, la velocidad de nado, activa sonidos oceánicos ambientales o sube tu propia música de fondo. Presiona "F" para proyectar un <strong>acuario en pantalla completa</strong> en tu monitor, portátil o televisor.'
        ]
      },
      pt: {
        heading: 'Tela de Aquário Online — Aquário Virtual Grátis para Desktop e Notebook',
        paragraphs: [
          'Transforme qualquer tela de computador, notebook, monitor ou Smart TV em um impressionante <strong>aquário online</strong>. Nosso <strong>aquário virtual</strong> gratuito leva a tranquilidade do mundo subaquático para sua tela com peixes tropicais animados, bolhas, algas marinhas e efeitos de luz. Seja para um <strong>fundo de aquário</strong> relaxante no escritório, uma <strong>tela de peixes</strong> para sua TV ou um <strong>protetor de tela de aquário</strong> para seu notebook, esta ferramenta oferece uma solução instantânea no navegador.',
          'Pesquisas comprovam que observar peixes em um aquário reduz o estresse. Nosso <strong>aquário digital</strong> oferece esses benefícios terapêuticos sem custo ou manutenção. Use como <strong>aquário relaxante</strong> para pausas de meditação, <strong>aquário ambiente</strong> para videochamadas, ou <strong>aquário em tela cheia</strong> em salas de espera e cafés.',
          'Personalize com 4 temas de cor (Turquesa da Lagoa, Recife Profundo, Zona Abissal e Pôr do Sol Coral). Ajuste a quantidade de peixes, velocidade, sons oceânicos ou adicione sua própria música. Pressione "F" para um <strong>aquário em tela cheia</strong> no seu monitor, notebook ou TV.'
        ]
      },
      fr: {
        heading: 'Écran d\'Aquarium en Ligne — Aquarium Virtuel Gratuit pour PC et Portable',
        paragraphs: [
          'Transformez n\'importe quel écran d\'ordinateur, portable, moniteur ou Smart TV en un superbe <strong>écran d\'aquarium en ligne</strong>. Notre <strong>aquarium virtuel</strong> gratuit apporte la tranquillité du monde sous-marin à votre écran avec des poissons tropicaux animés, des bulles, des algues et des effets de lumière captivants. Fond d\'<strong>aquarium relaxant</strong> pour le bureau, <strong>écran à poissons</strong> pour votre TV ou <strong>économiseur d\'écran aquarium</strong> pour votre portable, cet outil fonctionne instantanément dans votre navigateur.',
          'Notre <strong>aquarium numérique</strong> offre des bienfaits thérapeutiques sans entretien. Utilisez-le comme <strong>aquarium apaisant</strong> pour la méditation, <strong>aquarium d\'ambiance</strong> pour vos visioconférences, ou <strong>aquarium plein écran</strong> dans les salles d\'attente et cafés.',
          'Personnalisez avec 4 thèmes de couleur (Lagon Turquoise, Récif Profond, Zone Abyssale, Coucher de Corail). Ajustez le nombre de poissons, la vitesse, activez les sons océaniques ou ajoutez votre propre musique. Appuyez sur "F" pour un <strong>aquarium plein écran</strong> sur votre moniteur, portable ou TV.'
        ]
      },
      de: {
        heading: 'Aquarium-Bildschirm Online — Kostenloses Virtuelles Aquarium für Desktop & Laptop',
        paragraphs: [
          'Verwandeln Sie jeden Computerbildschirm, Laptop, Monitor oder Smart TV in einen atemberaubenden <strong>Aquarium-Bildschirm online</strong>. Unser kostenloses <strong>virtuelles Aquarium</strong> bringt die Ruhe der Unterwasserwelt auf Ihren Bildschirm mit animierten tropischen Fischen, Blasen, Seetang und faszinierenden Lichteffekten. Ob als entspannender <strong>Aquarium-Hintergrund</strong> für den Schreibtisch, fesselnder <strong>Fischbildschirm</strong> für den TV oder <strong>Aquarium-Bildschirmschoner</strong> für den Laptop.',
          'Unser <strong>digitales Aquarium</strong> bietet therapeutische Vorteile ohne Kosten oder Pflege. Nutzen Sie es als <strong>entspannendes Aquarium</strong> für Meditationspausen, <strong>Ambient-Aquarium</strong> für Videokonferenzen oder <strong>Vollbild-Aquarium</strong> in Wartezimmern und Cafés.',
          'Wählen Sie aus 4 Farbthemen (Lagunen-Türkis, Tiefsee-Riff, Abyssal-Zone, Korallen-Sonnenuntergang). Passen Sie Fischzahl, Schwimmgeschwindigkeit und Sound an. Drücken Sie "F" für ein <strong>Vollbild-Aquarium</strong> auf Monitor, Laptop oder TV.'
        ]
      },
      hi: {
        heading: 'ऑनलाइन एक्वेरियम स्क्रीन — डेस्कटॉप और लैपटॉप के लिए मुफ्त वर्चुअल एक्वेरियम',
        paragraphs: [
          'किसी भी कंप्यूटर डिस्प्ले, लैपटॉप मॉनिटर, पीसी या स्मार्ट टीवी को एक शानदार <strong>ऑनलाइन एक्वेरियम स्क्रीन</strong> में बदलें। हमारा मुफ्त <strong>वर्चुअल एक्वेरियम</strong> एनिमेटेड उष्णकटिबंधीय मछली, बुलबुले और मंत्रमुग्ध करने वाले प्रकाश प्रभावों के साथ पानी के नीचे की दुनिया की शांति को आपकी स्क्रीन पर लाता है।',
          'हमारा <strong>डिजिटल एक्वेरियम</strong> बिना किसी लागत या रखरखाव के चिकित्सीय लाभ प्रदान करता है। इसका उपयोग ध्यान के लिए <strong>आरामदेह एक्वेरियम</strong>, वीडियो कॉल के लिए <strong>एम्बिएंट एक्वेरियम</strong>, या प्रतीक्षालय और कैफे में <strong>फुलस्क्रीन एक्वेरियम</strong> के रूप में करें।',
          '4 रंग थीम (लैगून फ़िरोज़ा, डीप सी रीफ, एबिसल ज़ोन, कोरल सनसेट) में से चुनें। मछलियों की संख्या, तैरने की गति और ध्वनि को समायोजित करें। फुलस्क्रीन के लिए "F" दबाएं।'
        ]
      },
      ja: {
        heading: 'オンラインアクアリウム画面 — デスクトップ・ノートPC向け無料バーチャルアクアリウム',
        paragraphs: [
          'パソコン、ノートPC、モニター、Smart TVの画面を、美しい<strong>オンラインアクアリウム画面</strong>に変身させましょう。アニメーションの熱帯魚、泡、海藻、魅惑的な水中照明効果で、水の世界の静けさをあなたの画面にお届けします。デスク用のリラックスできる<strong>アクアリウム背景</strong>、リビングのTV用の<strong>魚の画面</strong>、ノートPC用の<strong>アクアリウムスクリーンセーバー</strong>として最適です。',
          '魚の鑑賞がストレスを軽減し気分を向上させることは研究で実証されています。この<strong>デジタルアクアリウム</strong>は、本物の水槽のコストや手入れなしで治療効果を提供します。瞑想休憩用の<strong>リラックスアクアリウム</strong>、ビデオ通話用の<strong>アンビエントアクアリウム</strong>、待合室やカフェでの<strong>全画面アクアリウム</strong>表示としてご活用ください。',
          'ラグーンティール、深海礁、アビサルゾーン、コーラルサンセットの4つの水中カラーテーマから選択可能。魚の数（3〜26匹）、泳ぐ速度、海中サウンドを調整し、お好みのBGMをアップロードすることもできます。「F」キーを押せばモニターやTVで<strong>全画面アクアリウム</strong>をお楽しみいただけます。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'matrix-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Matrix Screen Online — Customizable Digital Rain for Desktop & Laptop',
        paragraphs: [
          'Transform any computer display, laptop monitor, PC, or Smart TV into an immersive <strong>Matrix screen</strong> with cascading <strong>digital rain</strong>. Our free online <strong>Matrix effect</strong> recreates the iconic green code waterfall from the films, rendered in real-time HTML5 Canvas with customizable katakana, binary, and alphanumeric characters. Whether you want a <strong>Matrix wallpaper</strong> for your developer desk, a <strong>hacker screen</strong> backdrop for streaming, or a <strong>cyberpunk screen</strong> for your gaming room, this tool delivers a fully customizable <strong>Matrix display</strong> — no downloads, no installation, no ads.',
          'Personalize every aspect of the <strong>Matrix animation</strong> with 6 visual controls and 6 color themes. Adjust rain speed (0.2x to 3.0x), stream density, trail length, font size (10px to 36px), and glow intensity (0 to 25px). Switch between Classic Green, Cyberpunk Cyan, Crimson Red, Amber Gold, Neon Purple, or Rainbow color schemes. Type any custom name or message to appear as <strong>code rain</strong> text, cycling through character sets with the "C" key. The <strong>Matrix screensaver</strong> experience is fully under your control.',
          'Complete the atmosphere with 3 cyberpunk ambient audio drones — Deep Grid Hum, Mainframe Resonance, and Data Pulse Drone — each synthesized in real-time using the Web Audio API. Press "F" for fullscreen immersion across your monitor, laptop, or TV, with an auto-hide interface that keeps the <strong>Matrix background</strong> clean and distraction-free. Use the "R" key to instantly reset all settings to defaults, or press Space to open the settings drawer and fine-tune every parameter of your <strong>Matrix desktop background</strong>.'
        ]
      },
      es: {
        heading: 'Pantalla Matrix Online — Lluvia Digital Personalizable para Escritorio y Portátil',
        paragraphs: [
          'Transforma cualquier pantalla en una <strong>pantalla Matrix</strong> inmersiva con <strong>lluvia digital</strong> en cascada. Nuestro <strong>efecto Matrix</strong> online gratuito recrea la icónica cascada de código verde de las películas, renderizada en Canvas HTML5 con caracteres katakana, binarios y alfanuméricos personalizables. Perfecta como <strong>fondo Matrix</strong> para tu escritorio de desarrollador, <strong>pantalla hacker</strong> para streaming o <strong>pantalla cyberpunk</strong> para tu sala de juegos.',
          'Personaliza cada aspecto de la <strong>animación Matrix</strong> con 6 controles visuales y 6 temas de color. Ajusta velocidad, densidad, longitud de estela, tamaño de fuente e intensidad de brillo. Elige entre Verde Clásico, Cian Cyberpunk, Rojo Carmesí, Ámbar Dorado, Púrpura Neón o Arcoíris. Escribe cualquier nombre o mensaje personalizado para que aparezca como <strong>lluvia de código</strong>.',
          'Completa la atmósfera con 3 drones de audio cyberpunk ambientales. Presiona "F" para inmersión a pantalla completa y "R" para restablecer todos los ajustes. La interfaz se oculta automáticamente para mantener el <strong>fondo Matrix</strong> limpio y sin distracciones.'
        ]
      },
      pt: {
        heading: 'Tela Matrix Online — Chuva Digital Personalizável para Desktop e Notebook',
        paragraphs: [
          'Transforme qualquer tela em uma <strong>tela Matrix</strong> imersiva com <strong>chuva digital</strong> em cascata. Nosso <strong>efeito Matrix</strong> online gratuito recria a icônica cascata de código verde dos filmes, renderizada em Canvas HTML5 com caracteres katakana, binários e alfanuméricos personalizáveis. Perfeito como <strong>fundo Matrix</strong> para seu setup de desenvolvedor, <strong>tela hacker</strong> para streaming ou <strong>tela cyberpunk</strong> para sala de jogos.',
          'Personalize cada aspecto da <strong>animação Matrix</strong> com 6 controles visuais e 6 temas de cor. Ajuste velocidade, densidade, rastro, tamanho da fonte e brilho. Escolha entre Verde Clássico, Ciano Cyberpunk, Vermelho Carmesim, Âmbar Dourado, Roxo Neon ou Arco-Íris. Digite qualquer nome ou mensagem na <strong>chuva de código</strong>.',
          'Complete com 3 drones de áudio cyberpunk ambiente. Pressione "F" para imersão em tela cheia e "R" para restaurar padrões. Interface com ocultação automática para um <strong>fundo Matrix</strong> limpo.'
        ]
      },
      fr: {
        heading: 'Écran Matrix en Ligne — Pluie Numérique Personnalisable pour PC et Portable',
        paragraphs: [
          'Transformez n\'importe quel écran en un <strong>écran Matrix</strong> immersif avec <strong>pluie numérique</strong> en cascade. Notre <strong>effet Matrix</strong> gratuit en ligne recrée la cascade de code vert emblématique des films, rendue en Canvas HTML5 avec caractères katakana, binaires et alphanumériques personnalisables. Parfait comme <strong>fond Matrix</strong> pour votre bureau de développeur, <strong>écran hacker</strong> pour le streaming ou <strong>écran cyberpunk</strong> pour votre salle de jeu.',
          'Personnalisez chaque aspect de l\'<strong>animation Matrix</strong> avec 6 contrôles visuels et 6 thèmes de couleurs. Ajustez la vitesse, la densité, la traînée, la taille de police et l\'intensité lumineuse. Choisissez parmi Vert Classique, Cyan Cyberpunk, Rouge Carmin, Ambre Doré, Violet Néon ou Arc-en-Ciel.',
          'Ajoutez 3 drones audio cyberpunk d\'ambiance. Appuyez sur "F" pour l\'immersion plein écran et sur "R" pour réinitialiser. Interface à masquage automatique pour un <strong>fond Matrix</strong> épuré.'
        ]
      },
      de: {
        heading: 'Matrix-Bildschirm Online — Anpassbarer Digitaler Regen für Desktop & Laptop',
        paragraphs: [
          'Verwandeln Sie jeden Computerbildschirm in einen immersiven <strong>Matrix-Bildschirm</strong> mit kaskadierendem <strong>digitalem Regen</strong>. Unser kostenloser <strong>Matrix-Effekt</strong> online reproduziert den ikonischen grünen Code-Wasserfall aus den Filmen in Echtzeit auf HTML5 Canvas mit anpassbaren Katakana-, Binär- und alphanumerischen Zeichen. Ideal als <strong>Matrix-Hintergrund</strong> für den Entwickler-Schreibtisch, <strong>Hacker-Bildschirm</strong> für Streaming oder <strong>Cyberpunk-Bildschirm</strong> fürs Gaming-Zimmer.',
          'Passen Sie jeden Aspekt der <strong>Matrix-Animation</strong> mit 6 visuellen Reglern und 6 Farbschemata an. Wählen Sie zwischen Klassisches Grün, Cyberpunk-Cyan, Purpurrot, Goldgelb, Neon-Lila oder Regenbogen. Geben Sie benutzerdefinierten Text für den <strong>Code-Regen</strong> ein.',
          'Vervollständigen Sie die Atmosphäre mit 3 Cyberpunk-Ambient-Drones. Drücken Sie "F" für Vollbild-Immersion und "R" für Reset. Auto-Ausblend-Schnittstelle für einen sauberen <strong>Matrix-Hintergrund</strong>.'
        ]
      },
      hi: {
        heading: 'मैट्रिक्स स्क्रीन ऑनलाइन — डेस्कटॉप और लैपटॉप के लिए कस्टमाइज़ेबल डिजिटल रेन',
        paragraphs: [
          'किसी भी कंप्यूटर डिस्प्ले, लैपटॉप मॉनिटर, पीसी या स्मार्ट टीवी को एक इमर्सिव <strong>मैट्रिक्स स्क्रीन</strong> में बदलें। हमारा मुफ्त ऑनलाइन <strong>मैट्रिक्स इफ़ेक्ट</strong> फिल्मों के प्रतिष्ठित हरे कोड वॉटरफॉल को HTML5 Canvas पर रीयल-टाइम में रेंडर करता है। डेवलपर डेस्क <strong>मैट्रिक्स वॉलपेपर</strong>, स्ट्रीमिंग के लिए <strong>हैकर स्क्रीन</strong>, या गेमिंग रूम के लिए <strong>साइबरपंक स्क्रीन</strong> के रूप में एकदम सही।',
          '6 विज़ुअल कंट्रोल और 6 कलर थीम के साथ <strong>मैट्रिक्स एनिमेशन</strong> के हर पहलू को कस्टमाइज़ करें। क्लासिक ग्रीन, साइबरपंक सियान, क्रिमसन रेड, एम्बर गोल्ड, नियॉन पर्पल या रेनबो में से चुनें। <strong>कोड रेन</strong> टेक्स्ट के रूप में कोई भी नाम या संदेश टाइप करें।',
          '3 साइबरपंक एम्बिएंट ऑडियो ड्रोन के साथ माहौल को पूरा करें। "F" दबाकर फुलस्क्रीन में डूब जाएं। ऑटो-हाइड इंटरफ़ेस <strong>मैट्रिक्स बैकग्राउंड</strong> को साफ और विचलित करने वाली चीज़ों से मुक्त रखता है।'
        ]
      },
      ja: {
        heading: 'マトリックス画面 オンライン — デスクトップ・ノートPC用カスタマイズ可能なデジタルレイン',
        paragraphs: [
          'パソコン、ノートPC、モニター、Smart TVの画面を、降り注ぐ<strong>デジタルレイン</strong>を備えた没入感あふれる<strong>マトリックス画面</strong>に変身させましょう。映画の象徴的な緑のコードの滝をHTML5 Canvasでリアルタイムレンダリング。カタカナ、2進数、英数字をカスタマイズ可能。開発者デスク用の<strong>マトリックス壁紙</strong>、配信用の<strong>ハッカー画面</strong>、ゲーミングルーム用の<strong>サイバーパンク画面</strong>に最適です。',
          '6つのビジュアルコントロールと6つのカラーテーマで<strong>マトリックスアニメーション</strong>のあらゆる側面をカスタマイズ。クラシックグリーン、サイバーパンクシアン、クリムゾンレッド、アンバーゴールド、ネオンパープル、レインボーから選択。カスタムテキストを<strong>コードレイン</strong>として表示できます。',
          '3つのサイバーパンクアンビエントオーディオドローンで雰囲気を完璧に。「F」キーで全画面没入、「R」キーでリセット。自動非表示インターフェースで<strong>マトリックス背景</strong>をクリーンに保ちます。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'rain-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Rain Screen Online — Realistic Rain Ambience for Desktop, Laptop & TV',
        paragraphs: [
          'Transform any computer display, laptop monitor, PC, or Smart TV into a mesmerizing <strong>rain screen</strong> with realistic <strong>rain animation</strong>. Our free online <strong>rain ambience</strong> tool recreates the soothing experience of rainfall directly in your browser — rendered in real-time HTML5 Canvas with adjustable <strong>rain intensity</strong>, falling velocity, wind angle, and floor splashes. Whether you need a <strong>rain background</strong> for deep work focus, a <strong>rain wallpaper</strong> for your desktop, a <strong>rain screensaver</strong> for your TV, or a cozy <strong>rainy window</strong> effect for your bedroom monitor, this tool delivers a fully customizable <strong>rain display</strong> — no downloads, no installation, no ads.',
          'Personalize every aspect of the <strong>rain effect</strong> with comprehensive controls. Choose between two rain modes: <strong>Active Rain Streaks</strong> for falling diagonal rain with realistic wind physics, or <strong>Raindrops on Glass</strong> for a serene windowpane effect where droplets zigzag down your screen. Fine-tune rain density from a light sprinkle (10 particles) to a heavy downpour (600 particles), adjust falling velocity with a dual-range slider, and control wind slope from -6.0 to 6.0 for sweeping storm-like movement. Toggle floor splashes for added realism and enable <strong>ambient lightning</strong> with adjustable flash intervals from 5 to 60 seconds — the double-pulse lightning effect adds dramatic visual depth to any rainy scene.',
          'Complete the atmosphere with 8 aesthetic color presets — Pure Water, Glacier Teal, Emerald Forest, Electric Violet, Sunset Amber, Muted Slate, Crimson Storm, and Cyber Neon Green — each projecting a unique mood across your display. Select from multiple background scenes including misty forests and urban cityscapes to match your ideal rainy-day setting. Add ambient rain audio soundtracks with volume control, toggle mute with the "M" key, and press "F" for fullscreen immersion across your monitor, laptop, or TV. The auto-hide interface keeps your <strong>relaxing rain</strong> experience clean and distraction-free, making this the perfect companion for studying, coding, sleeping, meditation, or creating a cozy room atmosphere.'
        ]
      },
      es: {
        heading: 'Pantalla de Lluvia Online — Ambiente de Lluvia Realista para Escritorio, Portátil y TV',
        paragraphs: [
          'Transforma cualquier pantalla en una <strong>pantalla de lluvia</strong> hipnotizante con <strong>animación de lluvia</strong> realista. Nuestra herramienta gratuita de <strong>ambiente de lluvia</strong> online recrea la experiencia relajante de la lluvia directamente en tu navegador — renderizada en Canvas HTML5 con <strong>intensidad de lluvia</strong> ajustable, velocidad de caída, ángulo de viento y salpicaduras. Perfecta como <strong>fondo de lluvia</strong> para concentración, <strong>fondo de pantalla lluvioso</strong> para tu escritorio, <strong>salvapantallas de lluvia</strong> para tu TV o un acogedor efecto de <strong>ventana lluviosa</strong>.',
          'Personaliza cada aspecto del <strong>efecto de lluvia</strong>. Elige entre "Gotas de Lluvia Activas" para lluvia diagonal con física de viento realista o "Gotas sobre Vidrio" para un sereno efecto de ventana. Ajusta la densidad (10 a 600 partículas), velocidad y viento (-6.0 a 6.0). Activa salpicaduras y <strong>relámpagos ambientales</strong> con intervalos de 5 a 60 segundos.',
          'Completa con 8 colores estéticos y múltiples fondos de escena. Añade pistas de audio de lluvia ambiente con control de volumen. Presiona "F" para inmersión a pantalla completa y "M" para silenciar. La interfase auto-ocultable mantiene tu <strong>lluvia relajante</strong> limpia y sin distracciones.'
        ]
      },
      pt: {
        heading: 'Tela de Chuva Online — Ambiente de Chuva Realista para Desktop, Notebook e TV',
        paragraphs: [
          'Transforme qualquer tela em uma <strong>tela de chuva</strong> hipnotizante com <strong>animação de chuva</strong> realista. Nossa ferramenta gratuita de <strong>ambiente de chuva</strong> online recria a experiência relaxante da chuva diretamente no seu navegador — renderizada em Canvas HTML5 com <strong>intensidade de chuva</strong> ajustável, velocidade de queda, ângulo do vento e respingos. Perfeita como <strong>fundo de chuva</strong> para foco, <strong>papel de parede de chuva</strong> para desktop ou <strong>protetor de tela de chuva</strong> para TV.',
          'Personalize cada aspecto do <strong>efeito de chuva</strong>. Escolha entre "Gotas de Chuva Ativas" para chuva diagonal ou "Gotas no Vidro" para efeito de janela. Ajuste densidade (10 a 600 partículas), velocidade e vento (-6.0 a 6.0). Ative respingos e <strong>relâmpagos ambiente</strong> com intervalos de 5 a 60 segundos.',
          'Complete com 8 cores estéticas e múltiplos fundos de cena. Adicione trilhas de áudio de chuva ambiente. Pressione "F" para tela cheia e "M" para silenciar. Interface com ocultação automática para uma <strong>chuva relaxante</strong> sem distrações.'
        ]
      },
      fr: {
        heading: 'Écran de Pluie en Ligne — Ambiance Pluvieuse Réaliste pour PC, Portable et TV',
        paragraphs: [
          'Transformez n\'importe quel écran en un <strong>écran de pluie</strong> fascinant avec <strong>animation de pluie</strong> réaliste. Notre outil gratuit d\'<strong>ambiance pluvieuse</strong> en ligne recrée l\'expérience apaisante de la pluie directement dans votre navigateur — rendu en Canvas HTML5 avec <strong>intensité de pluie</strong> réglable, vitesse de chute, angle du vent et éclaboussures. Parfait comme <strong>fond de pluie</strong> pour la concentration, <strong>fond d\'écran pluvieux</strong> pour votre bureau ou <strong>économiseur d\'écran de pluie</strong> pour votre TV.',
          'Personnalisez chaque aspect de l\'<strong>effet de pluie</strong>. Choisissez entre "Gouttes de Pluie Actives" pour une pluie diagonale ou "Gouttes sur Verre" pour un effet de fenêtre. Ajustez la densité (10 à 600 particules), la vitesse et le vent (-6.0 à 6.0). Activez les éclaboussures et les <strong>éclairs d\'ambiance</strong> avec des intervalles de 5 à 60 secondes.',
          'Complétez avec 8 couleurs esthétiques et plusieurs arrière-plans. Ajoutez des pistes audio de pluie ambiante. Appuyez sur "F" pour le plein écran et "M" pour couper le son. Interface à masquage automatique pour une <strong>pluie relaxante</strong> sans distraction.'
        ]
      },
      de: {
        heading: 'Regen-Bildschirm Online — Realistische Regen-Atmosphäre für Desktop, Laptop & TV',
        paragraphs: [
          'Verwandeln Sie jeden Computerbildschirm in einen faszinierenden <strong>Regen-Bildschirm</strong> mit realistischer <strong>Regen-Animation</strong>. Unser kostenloses Online-<strong>Regen-Ambiente</strong> erschafft das beruhigende Regengefühl direkt in Ihrem Browser — gerendert in Echtzeit auf HTML5 Canvas mit einstellbarer <strong>Regenintensität</strong>, Fallgeschwindigkeit, Windwinkel und Bodenspritzern. Ideal als <strong>Regen-Hintergrund</strong> für Konzentration, <strong>Regen-Wallpaper</strong> für den Desktop oder <strong>Regen-Bildschirmschoner</strong> für den TV.',
          'Passen Sie jeden Aspekt des <strong>Regeneffekts</strong> an. Wählen Sie zwischen "Aktive Regenstreifen" für diagonalen Regen oder "Regentropfen auf Glas" für einen Fenstereffekt. Stellen Sie Dichte (10 bis 600 Partikel), Geschwindigkeit und Wind (-6.0 bis 6.0) ein. Aktivieren Sie Spritzer und <strong>Umgebungsblitze</strong> mit Intervallen von 5 bis 60 Sekunden.',
          'Vervollständigen Sie mit 8 ästhetischen Farben und mehreren Hintergrundszenen. Fügen Sie Umgebungs-Regen-Audio hinzu. Drücken Sie "F" für Vollbild und "M" zum Stummschalten. Auto-Ausblend-Schnittstelle für einen <strong>entspannenden Regen</strong> ohne Ablenkungen.'
        ]
      },
      hi: {
        heading: 'रेन स्क्रीन ऑनलाइन — डेस्कटॉप, लैपटॉप और टीवी के लिए यथार्थवादी बारिश का माहौल',
        paragraphs: [
          'किसी भी कंप्यूटर डिस्प्ले, लैपटॉप मॉनिटर, पीसी या स्मार्ट टीवी को यथार्थवादी <strong>बारिश एनिमेशन</strong> के साथ एक मनमोहक <strong>रेन स्क्रीन</strong> में बदलें। हमारा मुफ्त ऑनलाइन <strong>बारिश एम्बिएंस</strong> टूल सीधे आपके ब्राउज़र में बारिश के सुखद अनुभव को फिर से बनाता है — समायोज्य <strong>बारिश तीव्रता</strong>, गिरने की गति, हवा कोण और फर्श के छींटों के साथ।',
          '<strong>बारिश प्रभाव</strong> के हर पहलू को कस्टमाइज़ करें। विकर्ण बारिश के लिए "एक्टिव रेन स्ट्रीक्स" या खिड़की प्रभाव के लिए "रेनड्रॉप्स ऑन ग्लास" चुनें। घनत्व (10 से 600 कण), गति और हवा (-6.0 से 6.0) समायोजित करें। छींटे और <strong>एम्बिएंट लाइटनिंग</strong> (5 से 60 सेकंड अंतराल) चालू करें।',
          '8 सौंदर्य रंग प्रीसेट और कई पृष्ठभूमि दृश्यों के साथ माहौल को पूरा करें। एम्बिएंट रेन ऑडियो जोड़ें। "F" दबाकर फुलस्क्रीन और "M" दबाकर म्यूट करें। ऑटो-हाइड इंटरफ़ेस आपके <strong>आरामदायक बारिश</strong> अनुभव को साफ और विचलन मुक्त रखता है।'
        ]
      },
      ja: {
        heading: '雨の画面（レインスクリーン）オンライン — デスクトップ・ノートPC・TV向けリアルな雨の雰囲気',
        paragraphs: [
          'パソコン、ノートPC、モニター、Smart TVの画面を、リアルな<strong>雨のアニメーション</strong>で魅惑的な<strong>雨の画面</strong>に変身させましょう。無料のオンライン<strong>雨の雰囲気</strong>ツールは、ブラウザで直接、調整可能な<strong>雨の強さ</strong>、落下速度、風向き、床の跳ね返りを備えた没入感あふれる雨を再現します。<strong>雨の背景</strong>として集中作業に、<strong>雨の壁紙</strong>としてデスクトップに、<strong>雨のスクリーンセーバー</strong>としてTVに最適です。',
          '<strong>雨のエフェクト</strong>のあらゆる側面をカスタマイズ。斜めの雨には「アクティブな雨粒」、窓効果には「窓ガラスの雨粒」を選択。密度（10〜600粒子）、速度、風（-6.0〜6.0）を調整。跳ね返りと<strong>環境雷</strong>（5〜60秒間隔）を有効化。',
          '8つの美しいカラープリセットと複数の背景シーンで完璧な雰囲気に。環境雨のオーディオを追加。「F」キーで全画面、「M」キーでミュート。自動非表示インターフェースで<strong>リラックスできる雨</strong>の体験をクリーンに保ちます。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'snow-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Snow Screen Online — Falling Snow & Winter Ambience for Desktop, Laptop & TV',
        paragraphs: [
          'Transform any computer display, laptop monitor, PC, or Smart TV into a mesmerizing <strong>snow screen</strong> with realistic <strong>falling snow</strong> animation. Our free online <strong>snow background</strong> tool recreates the peaceful experience of <strong>snowfall</strong> directly in your browser — rendered with the react-snowfall library for smooth, performant <strong>snow animation</strong> across all devices. Whether you need a festive <strong>Christmas screen</strong> for holiday decoration, a <strong>winter wallpaper</strong> for your desktop, a <strong>snow screensaver</strong> for your TV, or a cozy <strong>winter background</strong> for your study space, this tool delivers a fully customizable <strong>snow display</strong> — no downloads, no installation, no ads.',
          'Personalize every aspect of the <strong>snowfall effect</strong> with comprehensive controls. Adjust <strong>snowflake count</strong> from a light dusting (20 flakes) to a heavy blizzard (800 flakes) using the snow density slider. Fine-tune <strong>falling speed</strong> with a dual-range slider (0.1 to 8.0) for natural variation, control <strong>wind drift</strong> from -5.0 to 5.0 for sweeping sideways movement, and adjust <strong>flake size</strong> from 0.5 to 15.0 pixels. Toggle <strong>photorealistic snowflake images</strong> mode to display detailed SVG snowflake shapes instead of colored circles — with independent size (5.0 to 50.0 pixels), opacity (10% to 100%), and rotation speed (0x to 4x) controls for the most realistic <strong>virtual snowfall</strong> experience.',
          'Complete the winter atmosphere with 20 aesthetic color presets — from Pure Snow and Glacier Blue to Aurora Green, Electric Cyan, and Sunset Orange — each casting a unique seasonal mood across your display. Select from multiple winter background scenes including snowy forests and mountain landscapes. Add ambient winter audio soundtracks with volume control, toggle mute with the "M" key, and press "F" for fullscreen immersion across your monitor, laptop, or TV. The auto-hide interface keeps your <strong>winter ambience</strong> experience clean and distraction-free, making this the perfect <strong>digital snowfall</strong> companion for Christmas decoration, holiday parties, cozy reading sessions, meditation, or creating a serene winter atmosphere in any room.'
        ]
      },
      es: {
        heading: 'Pantalla de Nieve Online — Nieve Cayendo y Ambiente Invernal para Escritorio, Portátil y TV',
        paragraphs: [
          'Transforma cualquier pantalla en una <strong>pantalla de nieve</strong> hipnotizante con <strong>nieve cayendo</strong> realista. Nuestra herramienta gratuita de <strong>fondo de nieve</strong> online recrea la experiencia tranquila de una <strong>nevada</strong> directamente en tu navegador. Perfecta como <strong>pantalla navideña</strong> para decoración, <strong>fondo de invierno</strong> para tu escritorio o <strong>salvapantallas de nieve</strong> para tu TV.',
          'Personaliza cada aspecto del <strong>efecto de nevada</strong>. Ajusta la cantidad de copos (20 a 800), velocidad (0.1 a 8.0), viento (-5.0 a 5.0) y tamaño de copo (0.5 a 15.0). Activa el modo de <strong>imágenes fotorrealistas</strong> para copos SVG detallados con tamaño, opacidad y rotación ajustables.',
          'Completa con 20 colores estéticos y múltiples fondos invernales. Añade pistas de audio de invierno. Presiona "F" para pantalla completa y "M" para silenciar. La interfaz auto-ocultable mantiene tu <strong>ambiente invernal</strong> limpio y sin distracciones.'
        ]
      },
      pt: {
        heading: 'Tela de Neve Online — Neve Caindo e Ambiente de Inverno para Desktop, Notebook e TV',
        paragraphs: [
          'Transforme qualquer tela em uma <strong>tela de neve</strong> hipnotizante com <strong>neve caindo</strong> realista. Nossa ferramenta gratuita de <strong>fundo de neve</strong> online recria a experiência tranquila de uma <strong>nevasca</strong> diretamente no seu navegador. Perfeita como <strong>tela de Natal</strong> para decoração, <strong>fundo de inverno</strong> para desktop ou <strong>protetor de tela de neve</strong> para TV.',
          'Personalize cada aspecto do <strong>efeito de neve</strong>. Ajuste a quantidade de flocos (20 a 800), velocidade (0.1 a 8.0), vento (-5.0 a 5.0) e tamanho (0.5 a 15.0). Ative o modo de <strong>imagens fotorrealistas</strong> para flocos SVG detalhados.',
          'Complete com 20 cores estéticas e múltiplos fundos de inverno. Adicione trilhas de áudio de inverno. Pressione "F" para tela cheia e "M" para silenciar.'
        ]
      },
      fr: {
        heading: 'Écran de Neige en Ligne — Chute de Neige et Ambiance Hivernale pour PC, Portable et TV',
        paragraphs: [
          'Transformez n\'importe quel écran en un <strong>écran de neige</strong> fascinant avec <strong>chute de neige</strong> réaliste. Notre outil gratuit d\'<strong>arrière-plan neigeux</strong> en ligne recrée l\'expérience paisible d\'une <strong>chute de neige</strong> directement dans votre navigateur. Parfait comme <strong>écran de Noël</strong> pour la décoration, <strong>fond d\'hiver</strong> pour votre bureau ou <strong>économiseur d\'écran de neige</strong> pour votre TV.',
          'Personnalisez chaque aspect de l\'<strong>effet de neige</strong>. Ajustez le nombre de flocons (20 à 800), la vitesse (0.1 à 8.0), le vent (-5.0 à 5.0) et la taille (0.5 à 15.0). Activez le mode <strong>photoréaliste</strong> pour des flocons SVG détaillés.',
          'Complétez avec 20 couleurs esthétiques et plusieurs arrière-plans hivernaux. Ajoutez des pistes audio d\'hiver. Appuyez sur "F" pour le plein écran et "M" pour couper le son.'
        ]
      },
      de: {
        heading: 'Schnee-Bildschirm Online — Fallender Schnee & Winter-Atmosphäre für Desktop, Laptop & TV',
        paragraphs: [
          'Verwandeln Sie jeden Computerbildschirm in einen faszinierenden <strong>Schnee-Bildschirm</strong> mit realistisch <strong>fallendem Schnee</strong>. Unser kostenloses Online-<strong>Schnee-Hintergrund</strong>-Tool erschafft das friedliche Erlebnis eines <strong>Schneefalls</strong> direkt in Ihrem Browser. Ideal als <strong>Weihnachtsbildschirm</strong> für Dekoration, <strong>Winter-Hintergrund</strong> für den Desktop oder <strong>Schnee-Bildschirmschoner</strong> für den TV.',
          'Passen Sie jeden Aspekt des <strong>Schneeeffekts</strong> an. Stellen Sie Flockenanzahl (20 bis 800), Geschwindigkeit (0.1 bis 8.0), Wind (-5.0 bis 5.0) und Größe (0.5 bis 15.0) ein. Schalten Sie den <strong>fotorealistischen Modus</strong> für detaillierte SVG-Schneeflocken ein.',
          'Vervollständigen Sie mit 20 ästhetischen Farben und mehreren Winterhintergrundszenen. Fügen Sie Winter-Ambient-Audio hinzu. Drücken Sie "F" für Vollbild und "M" zum Stummschalten.'
        ]
      },
      hi: {
        heading: 'स्नो स्क्रीन ऑनलाइन — डेस्कटॉप, लैपटॉप और टीवी के लिए गिरती बर्फ और सर्दियों का माहौल',
        paragraphs: [
          'किसी भी कंप्यूटर डिस्प्ले, लैपटॉप मॉनिटर, पीसी या स्मार्ट टीवी को यथार्थवादी <strong>गिरती बर्फ</strong> के साथ एक मनमोहक <strong>स्नो स्क्रीन</strong> में बदलें। हमारा मुफ्त ऑनलाइन <strong>बर्फ पृष्ठभूमि</strong> टूल सीधे आपके ब्राउज़र में <strong>बर्फबारी</strong> के शांतिपूर्ण अनुभव को फिर से बनाता है। त्योहारी सजावट के लिए <strong>क्रिसमस स्क्रीन</strong>, डेस्कटॉप के लिए <strong>विंटर वॉलपेपर</strong> या टीवी के लिए <strong>स्नो स्क्रीनसेवर</strong> के रूप में एकदम सही।',
          '<strong>बर्फबारी प्रभाव</strong> के हर पहलू को कस्टमाइज़ करें। बर्फ के टुकड़ों की संख्या (20 से 800), गति (0.1 से 8.0), हवा (-5.0 से 5.0) और आकार (0.5 से 15.0) समायोजित करें। विस्तृत SVG बर्फ के टुकड़ों के लिए <strong>फोटोरियलिस्टिक मोड</strong> चालू करें।',
          '20 सौंदर्य रंग प्रीसेट और कई सर्दियों के पृष्ठभूमि दृश्यों के साथ माहौल को पूरा करें। विंटर ऑडियो जोड़ें। "F" दबाकर फुलस्क्रीन और "M" दबाकर म्यूट करें।'
        ]
      },
      ja: {
        heading: '雪の画面（スノースクリーン）オンライン — デスクトップ・ノートPC・TV向け冬の雰囲気',
        paragraphs: [
          'パソコン、ノートPC、モニター、Smart TVの画面を、リアルな<strong>降雪</strong>で魅惑的な<strong>雪の画面</strong>に変身させましょう。無料のオンライン<strong>雪の背景</strong>ツールは、ブラウザで直接、<strong>降雪</strong>の穏やかな体験を再現します。クリスマスの飾り付けに<strong>クリスマス画面</strong>、デスクトップに<strong>冬の壁紙</strong>、TVに<strong>雪のスクリーンセーバー</strong>として最適です。',
          '<strong>降雪エフェクト</strong>のあらゆる側面をカスタマイズ。雪の数（20〜800）、速度（0.1〜8.0）、風（-5.0〜5.0）、サイズ（0.5〜15.0）を調整。詳細なSVG雪片には<strong>フォトリアルモード</strong>を有効化。',
          '20の美しいカラープリセットと複数の冬の背景シーンで完璧な雰囲気に。冬のオーディオを追加。「F」キーで全画面、「M」キーでミュート。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'ambient-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Ambient Screen Online — Animated Fluid Gradients & Interactive Soundscapes for Desktop, Laptop & TV',
        paragraphs: [
          'Transform any computer display, laptop monitor, PC, or Smart TV into an immersive <strong>ambient screen</strong> with animated fluid gradients, cosmic stars, and interactive soundscapes. Our free online <strong>ambient display</strong> tool creates a mesmerizing visual atmosphere directly in your browser — rendered in real-time HTML5 Canvas with <strong>fluid gradient animation</strong> that morphs and flows across your screen, 6 color presets, and mouse-interactive particle effects. Whether you need a <strong>calming background</strong> for deep work sessions, a <strong>meditation screen</strong> for mindfulness practice, a <strong>focus display</strong> for your office monitor, or an <strong>ambient wallpaper</strong> for your Smart TV, this tool delivers a fully customizable <strong>ambient experience</strong> — no downloads, no installation, no ads.',
          'Personalize every aspect of the <strong>ambient animation</strong> with comprehensive controls. Choose from 6 gradient presets: Cyber Neon (dark cyan with pink and purple morphing), Aurora Dreams (blue, teal, and green flowing gradients), Sunset Solitude (warm pink, red, and orange tones), Deep Forest (green and yellow earthy blends), Cherry Blossom (soft pink, lavender, and peach pastels), and Cosmic Myst (deep purple, violet, and blue cosmic blends). Adjust the Morphing Flow Speed from 0.0 (Frozen) to 2.0 (Fast) to control how quickly the fluid blobs move, blend, and transform. The animated blobs respond to mouse movement with a gentle attraction effect — move your cursor to guide the fluid flow for an interactive, immersive experience.',
          'Set the perfect cosmic atmosphere with the star particle system. Adjust Cosmic Star Density from 10 to 150 particles — watch as tiny twinkling stars drift lazily across your display, gently repelling away from your cursor as you move it. Complete the ambiance with the 4-channel Atmospheric Soundscape Mixer featuring independent volume controls for each channel: Calming Lofi Synth (warm analog-style synth pads), Gentle Rainfall (soft natural precipitation sounds), Crackling Hearth (cozy realistic fire crackling), and Custom Ambient Tracks (dynamically loaded from the assets directory). Toggle each channel on or off and blend them to create your perfect soundscape. Extend your experience with overlay modes: Clock (live digital clock with sans/serif/mono font styles, AM/PM toggle, and date display), Breathing (guided box breathing exercise with a 4-second expanding/contracting circle — inhale, hold, exhale, rest), and Timer (Pomodoro timer with presets for 5, 15, 25, and 45 minutes, start/pause controls, and a circular SVG progress ring). Press "F" for fullscreen immersion, Space for settings, "C" and "B" for quick overlay toggles, and Esc to return. The auto-hide interface keeps your <strong>ambient background</strong> clean and distraction-free, making this the perfect companion for focus work, relaxation, meditation, yoga, study sessions, or creating a serene atmosphere on any screen in your home.'
        ]
      },
      es: {
        heading: 'Pantalla Ambiental Online — Gradientes Animados y Paisajes Sonoros Interactivos para Escritorio, Portátil y TV',
        paragraphs: [
          'Transforma cualquier pantalla en una <strong>pantalla ambiental</strong> inmersiva con gradientes animados, estrellas cósmicas y paisajes sonoros interactivos. Nuestra herramienta gratuita de <strong>display ambiental</strong> online crea una atmósfera visual hipnotizante en tu navegador con <strong>gradientes fluidos animados</strong>, 6 presets de color y partículas interactivas con el ratón.',
          'Personaliza cada aspecto de la <strong>animación ambiental</strong>. Elige entre 6 presets de gradiente: Cyber Neon, Aurora Dreams, Sunset Solitude, Deep Forest, Cherry Blossom y Cosmic Myst. Ajusta la velocidad de 0.0 a 2.0. Las burbujas fluidas responden al movimiento del ratón. Ajusta la densidad de estrellas de 10 a 150 partículas.',
          'Completa con el mezclador de sonidos de 4 canales: Synth Lofi, Lluvia Suave, Chimenea y pistas personalizadas. Añade superposiciones de Reloj, Respiración Guiada o Temporizador Pomodoro (5, 15, 25, 45 min). Presiona "F" para pantalla completa, Espacio para ajustes, "C" para reloj, "B" para respiración. La interfaz auto-ocultable para una experiencia limpia.'
        ]
      },
      pt: {
        heading: 'Tela Ambiente Online — Gradientes Animados e Paisagens Sonoras Interativas para Desktop, Notebook e TV',
        paragraphs: [
          'Transforme qualquer tela em uma <strong>tela ambiente</strong> imersiva com gradientes animados, estrelas cósmicas e paisagens sonoras interativas. Nossa ferramenta gratuita de <strong>display ambiente</strong> online cria uma atmosfera visual hipnotizante no seu navegador com <strong>gradientes fluidos animados</strong>, 6 presets de cor e partículas interativas.',
          'Personalize cada aspecto da <strong>animação ambiente</strong>. Escolha entre 6 presets: Cyber Neon, Aurora Dreams, Sunset Solitude, Deep Forest, Cherry Blossom e Cosmic Myst. Ajuste a velocidade de 0.0 a 2.0. As bolhas fluidas respondem ao mouse. Ajuste a densidade de estrelas de 10 a 150 partículas.',
          'Complete com o mixer de som de 4 canais: Lofi Synth, Chuva Suave, Lareira e faixas personalizadas. Adicione sobreposições de Relógio, Respiração Guiada ou Timer Pomodoro (5, 15, 25, 45 min). Pressione "F" para tela cheia, Espaço para configurações, "C" para relógio, "B" para respiração.'
        ]
      },
      fr: {
        heading: 'Écran Ambiant en Ligne — Dégradés Animés et Paysages Sonores Interactifs pour PC, Portable et TV',
        paragraphs: [
          'Transformez n\'importe quel écran en un <strong>écran ambiant</strong> immersif avec des dégradés animés, des étoiles cosmiques et des paysages sonores interactifs. Notre outil gratuit d\'<strong>affichage ambiant</strong> en ligne crée une atmosphère visuelle fascinante dans votre navigateur avec des <strong>dégradés fluides animés</strong>, 6 thèmes de couleurs et des particules interactives.',
          'Personnalisez chaque aspect de l\'<strong>animation ambiante</strong>. Choisissez parmi 6 thèmes : Cyber Neon, Aurora Dreams, Sunset Solitude, Deep Forest, Cherry Blossom et Cosmic Myst. Réglez la vitesse de 0.0 à 2.0. Les bulles fluides réagissent à la souris. Ajustez la densité d\'étoiles de 10 à 150 particules.',
          'Complétez avec le mixeur 4 canaux : Lofi Synth, Pluie Douce, Cheminée et pistes personnalisées. Ajoutez les superpositions Horloge, Respiration Guidée ou Minuteur Pomodoro (5, 15, 25, 45 min). Appuyez sur "F" pour le plein écran, Espace pour les réglages, "C" pour l\'horloge, "B" pour la respiration.'
        ]
      },
      de: {
        heading: 'Ambiente-Bildschirm Online — Animierte Farbverläufe & Interaktive Klangwelten für Desktop, Laptop & TV',
        paragraphs: [
          'Verwandeln Sie jeden Computerbildschirm in einen immersiven <strong>Ambiente-Bildschirm</strong> mit animierten Farbverläufen, kosmischen Sternen und interaktiven Klanglandschaften. Unser kostenloses Online-<strong>Ambient-Display</strong> erschafft eine faszinierende visuelle Atmosphäre direkt in Ihrem Browser mit <strong>fließenden Gradienten-Animationen</strong>, 6 Farb-Presets und interaktiven Partikeln.',
          'Passen Sie jeden Aspekt der <strong>Ambient-Animation</strong> an. Wählen Sie aus 6 Presets: Cyber Neon, Aurora Dreams, Sunset Solitude, Deep Forest, Cherry Blossom und Cosmic Myst. Stellen Sie die Geschwindigkeit von 0.0 bis 2.0 ein. Die fließenden Blasen reagieren auf Mausbewegungen. Passen Sie die Sterndichte von 10 bis 150 Partikeln an.',
          'Vervollständigen Sie mit dem 4-Kanal-Soundmixer: Lofi Synth, Sanfter Regen, Kaminfeuer und benutzerdefinierte Titel. Fügen Sie Überlagerungen für Uhr, Geführte Atmung oder Pomodoro-Timer (5, 15, 25, 45 Min.) hinzu. Drücken Sie "F" für Vollbild, Leertaste für Einstellungen, "C" für Uhr, "B" für Atmung.'
        ]
      },
      hi: {
        heading: 'एम्बिएंट स्क्रीन ऑनलाइन — डेस्कटॉप, लैपटॉप और टीवी के लिए एनिमेटेड ग्रेडिएंट और इंटरैक्टिव साउंडस्केप',
        paragraphs: [
          'किसी भी कंप्यूटर डिस्प्ले, लैपटॉप मॉनिटर, पीसी या स्मार्ट टीवी को एनिमेटेड फ्लूइड ग्रेडिएंट, कॉस्मिक स्टार्स और इंटरैक्टिव साउंडस्केप के साथ एक इमर्सिव <strong>एम्बिएंट स्क्रीन</strong> में बदलें। हमारा मुफ्त ऑनलाइन <strong>एम्बिएंट डिस्प्ले</strong> टूल 6 कलर प्रीसेट और माउस-इंटरैक्टिव पार्टिकल्स के साथ एक मंत्रमुग्ध करने वाला दृश्य वातावरण बनाता है।',
          '<strong>एम्बिएंट एनिमेशन</strong> के हर पहलू को कस्टमाइज़ करें। 6 प्रीसेट में से चुनें: Cyber Neon, Aurora Dreams, Sunset Solitude, Deep Forest, Cherry Blossom और Cosmic Myst। गति 0.0 से 2.0 तक समायोजित करें। तारा घनत्व 10 से 150 कणों तक समायोजित करें।',
          '4-चैनल साउंडस्केप मिक्सर: लोफाई सिंथ, हल्की बारिश, जलती आग और कस्टम ट्रैक। ओवरले मोड: घड़ी, निर्देशित श्वास, पोमोडोरो टाइमर (5, 15, 25, 45 मिनट)। फुलस्क्रीन के लिए "F", सेटिंग्स के लिए स्पेस, घड़ी के लिए "C", श्वास के लिए "B" दबाएं।'
        ]
      },
      ja: {
        heading: 'アンビエント画面 オンライン — デスクトップ・ノートPC・TV向けアニメーショングラデーションとインタラクティブサウンドスケープ',
        paragraphs: [
          'パソコン、ノートPC、モニター、Smart TVの画面を、アニメーショングラデーション、宇宙の星、インタラクティブなサウンドスケープで没入感あふれる<strong>アンビエント画面</strong>に変身させましょう。6つのカラープリセットとマウス操作可能なパーティクルを備えた無料のオンライン<strong>アンビエントディスプレイ</strong>ツールです。',
          '<strong>アンビエントアニメーション</strong>のあらゆる側面をカスタマイズ。6つのプリセット（Cyber Neon、Aurora Dreams、Sunset Solitude、Deep Forest、Cherry Blossom、Cosmic Myst）から選択。速度は0.0〜2.0で調整。星の密度は10〜150粒子まで調整可能。',
          '4チャンネルサウンドスケープミキサー：Lofi Synth、穏やかな雨、暖炉、カスタムトラック。オーバーレイモード：時計、ガイド付き呼吸法、ポモドーロタイマー（5、15、25、45分）。全画面は「F」キー、設定はスペースキー、時計は「C」キー、呼吸法は「B」キー。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'clock-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Flip Clock Online — Aesthetic Fullscreen Clock with Pomodoro Timer for Focus & Ambience',
        paragraphs: [
          'Transform any computer display, laptop monitor, PC, or Smart TV into a stunning <strong>flip clock online</strong> with realistic retro flip-card animation, 6 aesthetic themes, and an integrated Pomodoro focus timer. Our free online <strong>fullscreen clock</strong> recreates the satisfying mechanical flip motion of vintage split-flap alarm clocks and airport departure boards — each digit smoothly flips down to reveal the next number with a subtle click sound. Whether you need a <strong>flip clock display</strong> for your desktop while working, a <strong>fullscreen flip clock</strong> for your second monitor during deep focus sessions, a <strong>Pomodoro timer</strong> with flip animation for study sprints, or an aesthetic <strong>digital flip clock</strong> for your living room TV, this tool delivers a completely customizable experience — no downloads, no installation, no ads.',
          'Personalize every aspect of the <strong>flip clock timer</strong> with comprehensive controls. Choose from 6 carefully crafted themes: <strong>Warm Retro</strong> with a vintage amber glow and classic flip clock aesthetic, <strong>Pure OLED</strong> with deep true blacks and crisp white digits for maximum contrast, <strong>Soft White</strong> for a clean minimal look, <strong>Cyber Grid</strong> with a neon grid background for a tech-inspired vibe, <strong>Rose Gold</strong> with warm pink metallic tones for an elegant feel, and <strong>Space Dusk</strong> with a dark cosmic gradient for a moody atmosphere. Each theme transforms the entire clock display — the background, digit colors, edges, and shadows — giving you a completely different visual experience without changing the core flip animation. Toggle between 12-hour and 24-hour format, show or hide seconds, and use the brightness slider (10% to 100%) to fine-tune the clock\'s visual intensity for any room lighting condition.',
          'The built-in <strong>Pomodoro focus timer</strong> makes this flip clock a powerful productivity tool. Press "T" to switch from clock mode to Countdown mode, then choose from preset focus intervals: 5 minutes (micro-break), 10 minutes (quick task), 15 minutes (Pomodoro sprint), 25 minutes (classic Pomodoro), 40 minutes (deep work), or 60 minutes (marathon focus). The flip animation works during countdown too — digits flip down satisfyingly as each second passes, providing a visual and auditory rhythm that helps you stay aware of time passing. When the timer reaches zero, a synthesized alarm chord plays to signal your break. The <strong>retro click sound</strong> adds an authentic mechanical feel to every digit flip; press "S" or use the mute toggle to control it. Keyboard shortcuts make control effortless: F for fullscreen, Space for settings, T to switch modes, R to reset, and Esc to exit. All settings are saved automatically in your browser via localStorage, so your theme, timer preference, and sound settings persist between sessions.'
        ]
      },
      es: {
        heading: 'Reloj Flip Online — Reloj Estético a Pantalla Completa con Temporizador Pomodoro para Enfoque y Ambiente',
        paragraphs: [
          'Transforma cualquier pantalla de ordenador, portátil, monitor o Smart TV en un impresionante <strong>reloj flip online</strong> con animación retro realista de tarjetas giratorias, 6 temas estéticos y un temporizador Pomodoro integrado. Nuestro <strong>reloj a pantalla completa</strong> gratuito recrea el satisfactorio movimiento mecánico de los relojes despertadores vintage: cada dígito gira hacia abajo para revelar el siguiente número con un sutil clic. Perfecto como <strong>reloj flip digital</strong> para tu escritorio, <strong>reloj de pantalla completa</strong> para tu segundo monitor, o <strong>temporizador Pomodoro</strong> con animación flip para sesiones de estudio.',
          'Personaliza cada aspecto del <strong>reloj flip temporizador</strong>. Elige entre 6 temas: Warm Retro (brillo ámbar vintage), Pure OLED (negros profundos con dígitos blancos nítidos), Soft White (minimalista), Cyber Grid (cuadrícula neón), Rose Gold (tonos rosas metálicos) y Space Dusk (gradiente cósmico oscuro). Cada tema transforma la apariencia completa del reloj: fondo, color de dígitos, bordes y sombras. Alterna entre formato de 12 y 24 horas, muestra u oculta los segundos, y ajusta el brillo del 10% al 100% para cualquier condición de iluminación.',
          'El <strong>temporizador de enfoque Pomodoro</strong> integrado convierte este reloj flip en una potente herramienta de productividad. Presiona "T" para cambiar al modo de cuenta atrás y elige entre intervalos predefinidos: 5, 10, 15, 25, 40 o 60 minutos. La animación flip funciona durante la cuenta atrás: los dígitos giran satisfactoriamente mientras los segundos pasan. Cuando el temporizador llega a cero, suena un acorde de alarma sintetizado. El <strong>sonido de clic retro</strong> añade una sensación mecánica auténtica; presiona "S" para controlarlo. Atajos de teclado: F para pantalla completa, Espacio para configuración, T para cambiar modo, R para reiniciar, Esc para salir.'
        ]
      },
      pt: {
        heading: 'Relógio Flip Online — Relógio Estético em Tela Cheia com Timer Pomodoro para Foco e Ambiente',
        paragraphs: [
          'Transforme qualquer tela de computador, notebook, monitor ou Smart TV em um impressionante <strong>relógio flip online</strong> com animação retrô realista de cartas giratórias, 6 temas estéticos e um timer Pomodoro integrado. Nosso <strong>relógio em tela cheia</strong> gratuito recria o satisfatório movimento mecânico dos relógios vintage: cada dígito gira para baixo revelando o próximo número com um sutil clique. Perfeito como <strong>relógio flip digital</strong> para desktop, <strong>relógio de tela cheia</strong> para segundo monitor, ou <strong>timer Pomodoro</strong> com animação flip.',
          'Personalize cada aspecto do <strong>relógio flip timer</strong>. Escolha entre 6 temas: Warm Retro (brilho âmbar vintage), Pure OLED (pretos profundos), Soft White (minimalista), Cyber Grid (grade neon), Rose Gold (rosa metálico) e Space Dusk (gradiente cósmico). Alterne entre 12/24h, mostre ou oculte segundos, ajuste o brilho de 10% a 100%.',
          'O <strong>timer de foco Pomodoro</strong> integrado torna este relógio flip uma ferramenta de produtividade. Pressione "T" para modo contagem regressiva e escolha entre intervalos: 5, 10, 15, 25, 40 ou 60 minutos. A animação flip funciona durante a contagem. Quando o timer chega a zero, um alarme toca. O <strong>som de clique retrô</strong> adiciona sensação mecânica autêntica; pressione "S" para controlar. Atalhos: F para tela cheia, Espaço para configurações, T para modo, R para reiniciar, Esc para sair.'
        ]
      },
      fr: {
        heading: 'Horloge à Volets en Ligne — Horloge Esthétique Plein Écran avec Minuteur Pomodoro pour la Concentration',
        paragraphs: [
          'Transformez n\'importe quel écran d\'ordinateur, portable, moniteur ou Smart TV en une superbe <strong>horloge à volets en ligne</strong> avec animation rétro réaliste de cartes à bascule, 6 thèmes esthétiques et un minuteur Pomodoro intégré. Notre <strong>horloge plein écran</strong> gratuite recrée le mouvement mécanique satisfaisant des réveils vintage : chaque chiffre bascule pour révéler le suivant avec un subtil clic. Parfaite comme <strong>horloge à volets numérique</strong> pour votre bureau, <strong>horloge plein écran</strong> pour votre deuxième moniteur, ou <strong>minuteur Pomodoro</strong> avec animation.',
          'Personnalisez chaque aspect de l\'<strong>horloge à volets minuteur</strong>. Choisissez parmi 6 thèmes : Warm Retro (lueur ambrée vintage), Pure OLED (noirs profonds), Soft White (minimaliste), Cyber Grid (grille néon), Rose Gold (tons rosés métalliques) et Space Dusk (dégradé cosmique sombre). Basculez entre 12/24h, affichez ou masquez les secondes, réglez la luminosité de 10% à 100%.',
          'Le <strong>minuteur de concentration Pomodoro</strong> intégré fait de cette horloge un outil de productivité puissant. Appuyez sur "T" pour passer en mode compte à rebours et choisissez parmi les intervalles : 5, 10, 15, 25, 40 ou 60 minutes. L\'animation flip fonctionne pendant le décompte. Un accord d\'alarme retentit à zéro. Le <strong>son de clic rétro</strong> ajoute une sensation mécanique authentique ; appuyez sur "S" pour le contrôler. Raccourcis : F plein écran, Espace réglages, T mode, R réinitialiser, Esc quitter.'
        ]
      },
      de: {
        heading: 'Klipp-Klapp-Uhr Online — Ästhetische Vollbild-Uhr mit Pomodoro-Timer für Konzentration & Ambiente',
        paragraphs: [
          'Verwandeln Sie jeden Computerbildschirm, Laptop, Monitor oder Smart TV in eine atemberaubende <strong>Klipp-Klapp-Uhr online</strong> mit realistischer Retro-Kippkarten-Animation, 6 ästhetischen Designs und integriertem Pomodoro-Timer. Unsere kostenlose <strong>Vollbild-Uhr</strong> erschafft die zufriedenstellende mechanische Bewegung vintage Wecker: jede Ziffer klappt nach unten um die nächste Zahl mit einem dezenten Klick zu enthüllen. Perfekt als <strong>digitale Klappuhr</strong> für den Schreibtisch, <strong>Vollbild-Klappuhr</strong> für den Zweitmonitor, oder <strong>Pomodoro-Timer</strong> mit Flip-Animation.',
          'Passen Sie jeden Aspekt der <strong>Klappuhr mit Timer</strong> an. Wählen Sie aus 6 Designs: Warm Retro (Vintage-Amber-Glow), Pure OLED (tiefe Schwarztöne), Soft White (minimalistisch), Cyber Grid (Neon-Gitter), Rose Gold (rosé-metallisch) und Space Dusk (dunkler kosmischer Verlauf). Wechseln Sie zwischen 12/24h, zeigen Sie Sekunden an oder aus, regeln Sie die Helligkeit von 10% bis 100%.',
          'Der integrierte <strong>Pomodoro-Konzentrations-Timer</strong> macht diese Klappuhr zu einem leistungsstarken Produktivitätstool. Drücken Sie "T" für den Countdown-Modus und wählen Sie aus Intervallen: 5, 10, 15, 25, 40 oder 60 Minuten. Die Flip-Animation läuft während des Countdowns. Ein Alarmton ertönt bei Null. Das <strong>Retro-Klickgeräusch</strong> sorgt für authentisches mechanisches Gefühl; "S" zum Steuern. Tasten: F Vollbild, Leertaste Einstellungen, T Modus, R Zurücksetzen, Esc Beenden.'
        ]
      },
      hi: {
        heading: 'फ्लिप घड़ी ऑनलाइन — पोमोडोरो टाइमर के साथ एस्थेटिक फुलस्क्रीन घड़ी फोकस और माहौल के लिए',
        paragraphs: [
          'किसी भी कंप्यूटर डिस्प्ले, लैपटॉप मॉनिटर, पीसी या स्मार्ट टीवी को यथार्थवादी रेट्रो फ्लिप-कार्ड एनिमेशन, 6 एस्थेटिक थीम और एकीकृत पोमोडोरो फोकस टाइमर के साथ एक शानदार <strong>फ्लिप घड़ी ऑनलाइन</strong> में बदलें। हमारी मुफ्त <strong>फुलस्क्रीन घड़ी</strong> विंटेज स्प्लिट-फ्लैप अलार्म घड़ियों की संतोषजनक यांत्रिक गति को फिर से बनाती है। डेस्कटॉप के लिए <strong>फ्लिप घड़ी डिस्प्ले</strong>, सेकेंड मॉनिटर के लिए <strong>फुलस्क्रीन फ्लिप घड़ी</strong>, या अध्ययन के लिए <strong>पोमोडोरो टाइमर</strong> के रूप में एकदम सही।',
          '<strong>फ्लिप घड़ी टाइमर</strong> के हर पहलू को कस्टमाइज़ करें। 6 थीम में से चुनें: वार्म रेट्रो (एम्बर ग्लो), प्योर OLED (गहरा काला), सॉफ्ट व्हाइट (मिनिमल), साइबर ग्रिड (नीयन ग्रिड), रोज़ गोल्ड (गुलाबी धात्विक) और स्पेस डस्क (कॉस्मिक ग्रेडिएंट)। 12/24 घंटे प्रारूप बदलें, सेकंड दिखाएं/छिपाएं, चमक 10% से 100% समायोजित करें।',
          'एकीकृत <strong>पोमोडोरो फोकस टाइमर</strong> इस फ्लिप घड़ी को एक शक्तिशाली उत्पादकता उपकरण बनाता है। "T" दबाकर काउंटडाउन मोड पर जाएं और अंतराल चुनें: 5, 10, 15, 25, 40 या 60 मिनट। काउंटडाउन के दौरान फ्लिप एनिमेशन काम करता है। जब टाइमर शून्य पर पहुंचता है तो अलार्म बजता है। <strong>रेट्रो क्लिक ध्वनि</strong> प्रामाणिक यांत्रिक अनुभव जोड़ती है; "S" दबाकर नियंत्रित करें। शॉर्टकट: F फुलस्क्रीन, स्पेस सेटिंग्स, T मोड, R रीसेट, Esc बाहर।'
        ]
      },
      ja: {
        heading: 'フリップ時計 オンライン — ポモドーロタイマー付き高級感のある全画面時計',
        paragraphs: [
          'パソコン、ノートPC、モニター、Smart TVの画面を、リアルなレトロフリップカードアニメーション、6つの美的テーマ、統合されたポモドーロタイマーを備えた魅惑的な<strong>フリップ時計オンライン</strong>に変身させましょう。ビンテージのスプリットフラップ時計の満足感あるメカニカルな動きを再現。デスクトップ用<strong>フリップ時計表示</strong>、セカンドモニター用<strong>全画面フリップ時計</strong>、学習用<strong>ポモドーロタイマー</strong>として最適。',
          '<strong>フリップ時計タイマー</strong>のあらゆる側面をカスタマイズ。6つのテーマから選択：Warm Retro（ビンテージアンバーグロー）、Pure OLED（深い黒）、Soft White（クリーンミニマル）、Cyber Grid（ネオングリッド）、Rose Gold（ローズゴールド）、Space Dusk（ダークコズミック）。12/24時間表示切替、秒表示ON/OFF、明るさ10%〜100%調節。',
          '統合された<strong>ポモドーロフォーカスタイマー</strong>が、このフリップ時計を強力な生産性ツールに変えます。「T」キーでカウントダウンモードに切り替え、インターバル（5、10、15、25、40、60分）を選択。カウントダウン中もフリップアニメーションが作動。タイマーがゼロになるとアラームが鳴動。<strong>レトロクリック音</strong>が本物のメカニカル感を演出。「S」キーで制御。ショートカット：F全画面、スペース設定、Tモード切替、Rリセット、Esc終了。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'red-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Red Screen Online Tool & Use Cases',
        paragraphs: [
          'When creators and photographers need a vibrant solid backdrop, they look for a red screen online tool. Using a red fullscreen background is a wonderful way to experiment with color filters and effects in film. Our high-fidelity red screen page runs instantly in any browser without logging in or downloading bundles. It is excellent for generating a unique atmospheric vibe or serving as a dark red screen for nocturnal reading and eye comfort.',
          'For display testing or night vision preservation, having a solid red screen background helps you inspect panel quality. Running a bright red screen makes it convenient to use a red screen to find dead pixels or perform a red subpixel check. If you have an older portable console showing a ds lite red screen boot error, or want to understand what a red screen door effect is, this web utility is perfect for testing display response and checking color replication across the red channel.',
          'Aside from display tests, this utility functions as a brilliant red screen light effect generator. By casting a solid red light online, it serves as a soft color source. Perfect as a TikTok light cast, a night light for video calls, or a red light for selfie shots, it projects an ambient glow. You can also project the canvas as a red screen for projector setups, bringing a sleek, artistic neon light atmosphere to any room or bedroom studio. For game display queries, if you want to know how to get red screen on iPhone or how to make Red Dead Online full screen on PC, you can easily use our fullscreen mode or press Alt + Enter while playing.'
        ]
      },
      es: {
        heading: 'Optimización de Pantalla Roja y Casos de Uso',
        paragraphs: [
          'Cuando los creadores de contenido y fotógrafos necesitan un fondo sólido vibrante, recurren a una herramienta de pantalla roja online. Utilizar una pantalla roja de fondo completo es una excelente forma de experimentar con filtros de color y efectos de iluminación en películas. Nuestra página de pantalla roja online se ejecuta al instante desde el navegador, ideal para crear una atmósfera única o usar una pantalla roja oscura para leer de noche cuidando la vista.',
          'Para mantenimiento, diagnóstico o preservar la visión nocturna, contar con un fondo de pantalla roja ayuda a verificar la calidad del monitor. Cargar un color rojo brillante permite usar la pantalla roja para encontrar píxeles muertos y verificar el subpíxel rojo. Si tienes una consola portátil antigua con error de pantalla roja en DS Lite o quieres saber qué es el efecto de puerta de pantalla roja, este sitio web te ayuda a evaluar la fidelidad de los colores.',
          'Además, esta página sirve como un gran panel de efecto de luz de pantalla roja. Al proyectar una luz roja online, funciona como luz de color rojo ambiental para tus videos de TikTok o videollamadas. Si quieres saber cómo poner la pantalla roja en iPhone con los filtros de color de iOS, o cómo hacer pantalla completa en Red Dead Online en tu ordenador con la tecla Alt + Enter, nuestra guía rápida y controles interactivos te facilitan configurar la pantalla al instante.'
        ]
      },
      pt: {
        heading: 'Ferramenta de Tela Vermelha e Cenários de Uso',
        paragraphs: [
          'Quando criadores de conteúdo e fotógrafos precisam de um fundo sólido vibrante, eles buscam uma tela vermelha online. Utilizar uma tela vermelha de fundo completo é excelente para experimentar filtros de cores e efeitos visuais em produções de vídeo. Nossa página de tela vermelha funciona no navegador sem downloads, ideal para gerar um clima único ou usar uma tela vermelha escura para leitura noturna confortável.',
          'Para manutenção de painéis e preservar a visão noturna nas trevas, a tela vermelha de fundo completo permite avaliar a qualidade do monitor. Uma tela vermelha brilhante ajuda a encontrar pixels mortos na tela ou fazer teste de subpíxel de cor. Se você está enfrentando o erro de tela vermelha no DS Lite ou quer aprender o que significa o efeito de porta de tela vermelha em LCDs antigos, nosso utilitário facilita a conferência de cores.',
          'Além disso, este site funciona como um ótimo gerador de efeito de luz de tela vermelha. Emitindo uma luz vermelha online, você tem uma luz de cor vermelha para vídeos do TikTok, selfies e chamadas. Caso queira saber como deixar a tela vermelha no iPhone usando os filtros de tela do aparelho, ou como colocar o Red dead online em tela cheia no computador apertando Alt + Enter, nosso painel de controle e tela cheia oferecem a solução imediata.'
        ]
      },
      fr: {
        heading: 'Outil Écran Rouge en Ligne & Cas d\'Usage',
        paragraphs: [
          'Lorsque les cinéastes et photographes ont besoin d\'un fond uni de couleur vive, ils recherchent un outil d\'écran rouge en ligne. L\'utilisation d\'un arrière-plan écran rouge plein écran est idéale pour tester des filtres de couleur et des effets artistiques en photo. Notre page d\'écran rouge en ligne se charge instantanément dans tout navigateur, parfaite pour instaurer une ambiance à l\'écran ou lire dans le noir avec un écran rouge sombre confortable.',
          'Pour le diagnostic d\'écran ou préserver sa vision nocturne, posséder un écran rouge de fond offre un excellent moyen d\'évaluer la dalle. Afficher un écran rouge vif permet de chercher des pixels morts ou faire un diagnostic de sous-pixels rouges. Si votre vieille console affiche un écran rouge sur DS Lite ou si vous désirez comprendre l\'effet porte d\'écran rouge des anciennes dalles LCD, cette page permet de tester le rendu du spectre rouge.',
          'Cet outil fait également office de panneau de lumière rouge en ligne. Très utile comme effet d\'éclairage rouge pour vos vidéos TikTok, vos visioconférences ou vos selfies. Pour savoir comment mettre l\'écran rouge sur iPhone via les réglages d\'accessibilité iOS, ou comment passer Red Dead Online en plein écran sur PC à l\'aide du raccourci clavier Alt + Entrée pendant la partie, notre application web et nos guides vous guident instantané.'
        ]
      },
      de: {
        heading: 'Roter Bildschirm Online-Tool & Anwendungen',
        paragraphs: [
          'Wenn Medienschaffende und Fotografen einen kräftigen einfarbigen Hintergrund benötigen, suchen sie nach einem roter Bildschirm Online-Tool. Ein roter Bildschirmhintergrund im Vollbildmodus ist ideal, um mit Farbfiltern und Beleuchtungseffekten beim Filmen zu experimentieren. Unsere rote Bildschirmseite läuft direkt im Browser ohne Anmeldung, perfekt für atmosphärisches Ambient-Licht oder als dunkler roter Bildschirm für augenschonendes Lesen in der Nacht.',
          'Für Display-Tests oder den Erhalt der Nachtsichtfähigkeit hilft ein roter Bildschirm zur Monitorreinigung oder Panelprüfung. Ein leuchtend roter Bildschirm erleichtert das Finden von Pixelfehlern und die Prüfung der roten Subpixel. Falls Sie bei einer älteren Spielekonsole einen DS Lite rote Bildschirm Bootfehler untersuchen möchten oder wissen wollen, was der rote Screen-Door-Effekt ist, bietet diese Anwendung eine sichere Testumgebung.',
          'Zudem lässt sich das Tool als rotes Licht online einsetzen. Es erzeugt eine rote Beleuchtung für TikTok-Videos, Videokonferenzen oder Selfies. Wenn Sie wissen möchten, wie Sie einen roten Bildschirm auf dem iPhone in den iOS-Farbfiltern einrichten oder wie Sie Red Dead Online ins Vollbild bringen am PC mit Alt + Enter, helfen Ihnen unsere einfachen Vollbild-Funktionen und Tipps sofort weiter.'
        ]
      },
      hi: {
        heading: 'लाल स्क्रीन ऑनलाइन टूल और सामान्य उपयोग',
        paragraphs: [
          'जब रचनाकारों और फोटोग्राफरों को एक चमकीले ठोस बैकग्राउंड की आवश्यकता होती है, तो वे लाल स्क्रीन ऑनलाइन टूल का उपयोग करते हैं। फिल्म और फोटोग्राफी में कलर फिल्टर और प्रभाव आजमाने के लिए लाल फुलस्क्रीन बैकग्राउंड एक शानदार विकल्प है। हमारा लाल स्क्रीन पेज बिना किसी शुल्क या डाउनलोड के तुरंत काम करता है, जो रात में रीडिंग के लिए डार्क लाल स्क्रीन और आंखों के आराम के लिए काफी उपयोगी है।',
          'डिस्प्ले परीक्षण या नाइट विजन (रात की दृष्टि) को सुरक्षित रखने के लिए लाल स्क्रीन बैकग्राउंड मददगार होता है। एक चमकीली लाल स्क्रीन चलाने से मॉनिटर की सफाई करने, डेड पिक्सल ढूंढने और लाल सबपिक्सेल की सेहत जांचने में मदद मिलती है। यदि आप डीएस लाइट लाल स्क्रीन एरर का सामना कर रहे हैं या स्क्रीन डोर इफेक्ट को समझना चाहते हैं, तो यह टूल रेड कलर चैनल की जांच करने का एक सुरक्षित विकल्प है।',
          'इसके अलावा, यह टूल एक बेहतरीन लाल लाइट ऑनलाइन स्रोत के रूप में काम करता है। यह टिकटॉक वीडियो, सेल्फी और वीडियो कॉल के लिए एक सॉफ्ट लाल रोशनी (सॉफ्ट रेड लाइट) प्रदान करता है। वहीं, अगर आप जानना चाहते हैं कि आईफोन पर लाल स्क्रीन कैसे लाएं या पीसी पर कीबोर्ड शॉर्टकट Alt + Enter दबाकर रेड डेड ऑनलाइन को फुल स्क्रीन कैसे करें, तो हमारे पास सभी उपयोगी गाइड उपलब्ध हैं।'
        ]
      },
      ja: {
        heading: '赤い画面（Red Screen）のSEO最適化と主な用途',
        paragraphs: [
          '映像制作や写真撮影で鮮やかな単色背景が必要な場合、赤い画面オンラインツールが役立ちます。全画面に赤い背景を表示することで、照明やカラーフィルターの効果を手軽に検証できます。当サイトの赤い画面はブラウザから直接開くことができ、暗い赤色の画面に設定することで、夜間のデジタル読書時の目の負担軽減にも最適です。',
          '液晶ディスプレイの検査や、暗闇での暗順応（ナイトビジョン）保護においても、赤い画面背景は大変重宝されます。明るい赤い画面を使用すれば、ドット抜けチェックや赤色サブピクセルの品質確認が容易に行えます。また、一部ゲーム機で発生するDS Liteの赤い画面エラーの検証や、スクリーンドア効果（格子状のすきま）の確認用としても活用されています。',
          'さらに、本機能はWEB上で使える赤色LEDライトとしても機能します。TikTok撮影の照明、ビデオ通話時のバックライト、自撮りのキャスティングライトとして最適です。iPhoneでアクセシビリティのカラーフィルタ機能を使って画面を永続的に赤く設定する方法や、PC版でAlt + Enterキーを押してレッドデッドオンラインをフルスクリーン切り替えする方法なども、全画面ツールを使って簡単にテスト可能です。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'orange-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Orange Screen Online Tool & Use Cases',
        paragraphs: [
          'When creators, designers, and e-learning instructors need a warm, vibrant solid backdrop, they look for an <strong>orange screen online free</strong> tool. Setting a display to an <strong>orange screen background</strong> is an excellent way to design virtual backdrops for online meetings, webinars, or social gatherings. Running an <strong>orange screen online aesthetic</strong> page casts a cozy <strong>orange screen light</strong> that helps make videos for YouTube and projects a beautiful orange glow during online calls. Parents and educators also use this page as an interactive learning tool, projecting a <strong>total orange screen</strong> or a <strong>full orange screen</strong> to highlight key information or act as an orange screen for kids.',
          'Beyond creative uses, a solid <strong>orange fullscreen background</strong> is a valuable technical utility. Setting a <strong>blank computer screen</strong> to orange is perfect as an <strong>orange screen for cleaning</strong> monitors, making it easy to perform monitor cleaning, find dead pixels, and spot dirty spots on the panel. For graphic designers and video editors, our tool allows you to perform device display calibration with an orange screen, verifying color rendering and fine-tuning device color settings. If you are preparing offline assets, you can configure your viewport layout to download an <strong>orange screen online png</strong> file for your design mockups.',
          'Many people use a warm, full orange display as a calming sleep aid before bedtime. By reducing harsh blue light, a soft <strong>orange screen phone</strong> or <strong>orange screen iphone</strong> background creates a relaxing, sleep-friendly environment for night reading. If you are wondering <strong>why is my screen turning orange</strong>, it is often due to features like <strong>orange screen Windows 10</strong> night light or eye comfort settings, but you can also use our page to manually set a comfortable orange aesthetic. Whether you are using the <strong>orange screen effect</strong> on a screen for projector installations, doing a tracing project (the <strong>orange screen method</strong> to copy an image that a classmate drew), or diagnosing an <strong>orange screen of death</strong> crash on a PC, this webpage is the ultimate tool to get an <strong>orange screen for pc</strong> or an <strong>orange screen for mobile</strong> instantly.'
        ]
      },
      es: {
        heading: 'Herramienta de Pantalla Naranja Online y Casos de Uso',
        paragraphs: [
          'Cuando los creadores, diseñadores e instructores de educación virtual necesitan un fondo sólido cálido y vibrante, buscan una herramienta de <strong>pantalla naranja online gratis</strong>. Tener un <strong>fondo de pantalla naranja</strong> es una forma maravillosa de diseñar fondos virtuales para reuniones en línea, seminarios web o eventos sociales. Usar una <strong>pantalla naranja online aesthetic</strong> proyecta una agradable <strong>luz de pantalla naranja</strong> que mejora los videos de YouTube y añade un brillo cálido durante las llamadas en línea. También sirve como un recurso interactivo para niños, proyectando una <strong>pantalla naranja completa</strong> o una <strong>pantalla naranja total</strong> para resaltar información clave u funcionar como pantalla naranja para niños.',
          'Más allá de los usos creativos, un <strong>fondo de pantalla naranja completo</strong> es una utilidad técnica para mantenimiento. Configurar una <strong>pantalla de ordenador en blanco</strong> (o color plano naranja) es ideal como una <strong>pantalla naranja para limpieza</strong> de monitores, facilitando la limpieza de la pantalla, encontrar píxeles muertos y localizar manchas sucias en el cristal físico. Para diseñadores gráficos y editores de video, esta utilidad permite realizar una calibración de colores con pantalla naranja, verificando la fidelidad del display. Además, puedes descargar una <strong>imagen de pantalla naranja png</strong> para tus maquetas de diseño.',
          'Muchas personas usan esta visualización naranja como ayuda para calmar el sueño antes de dormir. Al reducir la luz azul, una <strong>pantalla naranja en el móvil</strong> (teléfono) o una <strong>pantalla naranja en iPhone</strong> crea un entorno adecuado para lectura nocturna. Si te preguntas <strong>por qué mi pantalla se está poniendo naranja</strong>, puede deberse a la luz nocturna de <strong>pantalla naranja en Windows 10</strong> o configuraciones de comodidad visual, pero también puedes usar nuestra web para configurar este tono. Ya sea que uses la pantalla para proyector, para calcar (el <strong>método de la pantalla naranja</strong> para copiar un dibujo de un compañero de clase) o para inspeccionar un error de <strong>pantalla naranja de la muerte</strong>, esta página es la mejor opción para obtener una <strong>pantalla naranja para pc</strong> o una <strong>pantalla naranja para móvil</strong> al instante o probar el efecto de pantalla naranja.'
        ]
      },
      pt: {
        heading: 'Ferramenta de Tela Laranja Online e Cenários de Uso',
        paragraphs: [
          'Quando criadores, designers e educadores virtuais precisam de um fundo sólido quente e vibrante, eles procuram por uma ferramenta de <strong>tela laranja online grátis</strong>. Exibir um <strong>fundo de tela laranja</strong> completo é excelente para criar planos de fundo virtuais em reuniões virtuais, webinars ou transmissões. Uma <strong>tela laranja online aesthetic</strong> emite uma <strong>luz de tela laranja</strong> relaxante, ideal para gravar vídeos no YouTube e adicionar um brilho caloroso em chamadas de vídeo. Pais e professores também usam a página como apoio interativo, projetando uma <strong>tela laranja completa</strong> ou <strong>tela laranja total</strong> como uma tela laranja para crianças.',
          'Além dos usos decorativos, um <strong>fundo de tela laranja completo</strong> é um recurso técnico indispensável. Definir uma <strong>tela de computador em branco</strong> (ou cor plana laranja) serve como uma <strong>tela laranja para limpeza</strong> do monitor, ajudando a limpar marcas físicas, encontrar pixels mortos na tela e localizar manchas sujas de gordura. Para designers gráficos e editores de imagem, o site permite fazer a calibração de cores com tela laranja, avaliando o painel de forma profissional. Também é possível baixar um arquivo de <strong>tela laranja png</strong> para integrar em projetos gráficos.',
          'Vários usuários aproveitam o brilho laranja como auxílio relaxante para dormir. Reduzindo o excesso de luz azul, a tela do celular (<strong>tela laranja no telefone</strong>) ou <strong>tela laranja no iPhone</strong> cria uma iluminação aconchegante para leitura antes de deitar. Se você está em dúvida sobre <strong>por que minha tela está ficando laranja</strong>, isso se deve frequentemente ao ajuste de <strong>tela laranja no Windows 10</strong>, mas você pode usar nossa ferramenta para definir essa cor manualmente. Seja para usar em telas de projetor, calcar imagens (o <strong>método da tela laranja</strong> para copiar um desenho feito de um colega) ou examinar o erro de <strong>tela laranja da morte</strong>, nosso site fornece uma <strong>tela laranja para pc</strong> ou <strong>tela laranja para celular</strong> com o melhor efeito de tela laranja.'
        ]
      },
      fr: {
        heading: 'Outil Écran Orange en Ligne & Cas d\'Usage',
        paragraphs: [
          'Quand les vidéastes, concepteurs et enseignants en ligne ont besoin d\'un fond uni chaud et vif, ils se tournent vers un outil d\'<strong>écran orange en ligne gratuit</strong>. L\'affichage d\'un <strong>arrière-plan écran orange</strong> plein écran est une superbe façon de concevoir des fonds virtuels pour vos réunions, webinaires ou appels en ligne. Un <strong>écran orange en ligne esthétique</strong> génère une douce <strong>lumière d\'écran orange</strong> idéale pour le tournage de vidéos YouTube ou pour donner un éclat chaleureux pendant des appels vidéo. Les parents l\'utilisent également comme support d\'apprentissage interactif en projetant un <strong>écran orange complet</strong> ou un <strong>écran orange total</strong> pour servir d\'écran orange pour enfants ou élèves.',
          'Au-delà des usages artistiques, un <strong>arrière-plan écran orange plein écran</strong> constitue un excellent outil de maintenance. Transformer un <strong>écran d\'ordinateur vide</strong> en orange est idéal comme <strong>écran orange pour le nettoyage</strong> des écrans, facilitant le nettoyage du moniteur, permettant de trouver des pixels morts et de repérer les taches de saleté sur la dalle. Pour les graphistes, ce portail permet d\'effectuer un calibrage d\'affichage d\'écran avec l\'écran orange afin de valider et ajuster la fidélité des couleurs. De plus, vous pouvez télécharger un fichier <strong>écran orange png</strong> pour vos visuels.',
          'Beaucoup de gens utilisent cet écran orange comme aide au sommeil pour se détendre avant de se coucher. En atténuant la lumière bleue agressive, un téléphone (<strong>écran orange sur téléphone</strong>) ou un <strong>écran orange sur iPhone</strong> crée une ambiance relaxante pour lire au lit. Si vous vous demandez <strong>pourquoi mon écran devient orange</strong>, c\'est bien souvent à cause du mode nuit d\'un <strong>écran orange sous Windows 10</strong>, mais vous pouvez aussi utiliser notre page pour le régler manuellement. Qu\'il s\'agisse de projeter la couleur sur un écran pour projecteur, de calquer des croquis (la <strong>méthode de l\'écran orange</strong> pour copier un dessin fait par un camarade de classe) ou de réparer un crash d\'<strong>écran orange de la mort</strong>, notre site est parfait pour obtenir un <strong>écran orange pour pc</strong> ou un <strong>écran orange pour mobile</strong> avec un effet d\'écran orange optimal.'
        ]
      },
      de: {
        heading: 'Oranger Bildschirm Online-Tool & Anwendungen',
        paragraphs: [
          'Wenn Webdesigner, Streamer und E-Learning-Lehrer einen warmen, kräftigen Hintergrund benötigen, suchen sie nach einem <strong>orangen Bildschirm online und kostenlos</strong>. Ein <strong>oranger bildschirmhintergrund</strong> eignet sich hervorragend, um einen virtuellen Hintergrund für Online-Meetings, Webinare oder Videokonferenzen zu gestalten. Die Nutzung eines <strong>orangen Bildschirms online und ästhetisch</strong> wirft ein gemütliches <strong>oranges Bildschirmlicht</strong>, das YouTube-Videos aufwertet und einen warmen Schein bei Videoanrufen erzeugt. Eltern und Lehrer nutzen diese Seite auch als Lernwerkzeug, indem sie einen <strong>vollständigen orangen Bildschirm</strong> oder einen <strong>ganzen orangen Bildschirm</strong> als orangen Bildschirm für Kinder projizieren.',
          'Neben kreativen Zwecken ist ein <strong>vollflächiger oranger Hintergrund</strong> ein nützliches technisches Hilfsmittel zur Wartung. Einen <strong>leeren Computerbildschirm</strong> auf Orange einzustellen, eignet sich hervorragend als <strong>oranger Bildschirm zur Reinigung</strong> von Monitoren. Dies erleichtert das Reinigen des Glases, hilft dabei, Pixelfehler zu finden und Schmutzflecken auf dem Panel zu lokalisieren. Grafikdesigner und Bildbearbeiter können mit dem orangen Bildschirm eine Monitorkalibrierung durchführen. Sie können auch ein <strong>oranger bildschirm png</strong>-Bild herunterladen, um es offline in Grafik-Mockups zu verwenden.',
          'Viele Menschen nutzen das warme orangefarbene Licht als beruhigende Schlafhilfe vor dem Zubettgehen. Durch die Reduzierung von blauem Licht schafft ein Handy (<strong>oranger Bildschirm auf Handy</strong>) oder ein <strong>oranger Bildschirm auf dem iPhone</strong> eine entspannte Umgebung zum Lesen im Bett. Wenn Sie sich fragen, <strong>warum wird mein Bildschirm orange</strong>, liegt das meist an Funktionen wie dem <strong>orangen Bildschirm unter Windows 10</strong> (Nachtlicht), aber Sie können unsere Seite auch für manuelles Ambient-Licht nutzen. Ob für Beamer-Projektionen, zum Abpausen (die <strong>Orange-Bildschirm-Methode</strong>, um ein Bild abzuzeichnen, das ein Mitschüler gezeichnet hat) oder zur Überprüfung nach einem <strong>orangen Bildschirm des Todes</strong>, diese Seite bietet Ihnen sofort einen <strong>orangen Bildschirm für PC</strong> oder ein **Handy** mit perfektem orangen Bildschirm-Effekt an.'
        ]
      },
      hi: {
        heading: 'नारंगी स्क्रीन ऑनलाइन टूल और सामान्य उपयोग',
        paragraphs: [
          'जब रचनाकारों, डिजाइनरों और शिक्षकों को एक गर्म और चटक ठोस पृष्ठभूमि की आवश्यकता होती है, तो वे एक <strong>ऑरेंज स्क्रीन ऑनलाइन फ्री</strong> टूल की खोज करते हैं। एक <strong>ऑरेंज स्क्रीन बैकग्राउंड</strong> का उपयोग ऑनलाइन बैठकों, वेबिनार या सोशल मीटिंग के लिए एक प्यारा वर्चुअल बैकग्राउंड डिज़ाइन करने का शानदार माध्यम है। एक <strong>ऑरेंज स्क्रीन ऑनलाइन एस्थेटिक</strong> पेज से निकलने वाली <strong>ऑरेंज स्क्रीन लाइट</strong> यूट्यूब वीडियो में बढ़िया कंट्रास्ट लाती है और ऑनलाइन कॉल के दौरान चेहरे पर सुंदर वार्म ग्लो देती है। माता-पिता और शिक्षक इसे बच्चों के लिए <strong>बच्चों के लिए ऑरेंज स्क्रीन</strong> दृश्य के रूप में या एक शिक्षाप्रद <strong>कुल ऑरेंज स्क्रीन</strong> या <strong>पूरी ऑरेंज स्क्रीन</strong> बनाकर उपयोग करते हैं।',
          'रचनात्मक उपयोगों के साथ-साथ, एक ठोस <strong>ऑरेंज फुलस्क्रीन बैकग्राउंड</strong> रखरखाव के लिए एक मूल्यवान तकनीकी टूल है। अपने <strong>खाली कंप्यूटर स्क्रीन</strong> को ठोस नारंगी रंग पर सेट करना <strong>सफाई के लिए ऑरेंज स्क्रीन</strong> के रूप में एकदम सही है। इससे मॉनिटर की सफाई करना, डेड पिक्सल ढूंढना, और पैनल पर जमा गंदगी के धब्बे खोजना काफी आसान हो जाता है। ग्राफिक्स डिजाइनरों के लिए, यह डिस्प्ले कलर कैलिब्रेशन करने और रंग सटीकता जांचने में मदद करता है। इसके अलावा, आप डिज़ाइन प्रोजेक्ट्स के लिए <strong>ऑरेंज स्क्रीन ऑनलाइन पीएनजी</strong> डाउनलोड का उपयोग भी कर सकते हैं।',
          'बहुत से लोग सोने से पहले एक आरामदायक नींद सहायता के रूप में वार्म ऑरेंज डिस्प्ले प्रज्वलित करना पसंद करते हैं। नीली रोशनी को कम करके, एक <strong>ऑरेंज स्क्रीन फोन</strong> या <strong>ऑरेंज स्क्रीन आईफोन</strong> बैकग्राउंड रात में पढ़ने के लिए एक आरामदायक माहौल बनाता है। यदि आप सोच रहे हैं कि <strong>मेरी स्क्रीन नारंगी क्यों हो रही है</strong>, तो यह अक्सर <strong>ऑरेंज स्क्रीन विंडोज 10</strong> नाइट लाइट सुविधा के कारण होता है, लेकिन आप हमारे पेज से इसे मैन्युअल रूप से सेट कर सकते हैं। चाहे प्रोजेक्टर स्क्रीन पर वार्म वाइब बनानी हो, कोई ड्रॉइंग कॉपी करनी हो (जैसे सहपाठी के चित्र को छापने के लिए <strong>ऑरेंज स्क्रीन मेथड</strong>), या कंप्यूटर के क्रैश होने वाले <strong>ऑरेंज स्क्रीन ऑफ डेथ</strong> एरर की जांच करनी हो, यह पेज पीसी और मोबाइल के लिए झटपट ऑरेंज लुक पाने का सर्वोत्तम साधन है जिसमें बढ़िया ऑरेंज स्क्रीन इफ़ेक्ट मिलता है।'
        ]
      },
      ja: {
        heading: 'オレンジスクリーン（Orange Screen）のSEO最適化と主な用途',
        paragraphs: [
          'クリエイター、デザイナー、オンライン講師が温かみのある鮮明な単色背景を必要とする際、便利な <strong>オレンジスクリーンオンライン無料</strong> ツールが検索されます。全画面に <strong>オレンジの画面背景</strong> を表示することは、リモート会議やウェビナー、またはソーシャル通話のバーチャル背景として高い効果を発揮します。 <strong>オレンジ画面オンラインエステ</strong> 設定で発光される <strong>オレンジ画面ライト</strong> は、YouTube用の動画制作やオンラインミーティング時にお肌を元気に見せるオレンジ色のグロウ照明として役立ちます。また、教育用の視覚教材や <strong>子供用オレンジ画面</strong> としても、 <strong>全画面オレンジ</strong> または <strong>総オレンジ画面</strong> を投影してキー情報を目立たせることができます。',
          'クリエイティブな用途に加え、均一な <strong>オレンジ全画面背景</strong> はメンテナンス時の技術的なユーティリティとしても優れています。 <strong>空白のPC画面</strong> をオレンジ色に点灯させることは、ディスプレイの <strong>掃除用オレンジ画面</strong> として最適で、モニター掃除、ドット抜けチェック、液晶ガラス面に固着した汚れや埃の発見が容易に行えます。グラフィックデザイナーや動画編集者にとっては、このオレンジの画面を使ったカラーキャリブレーションでパネルの色表現をテスト・微調整するのに適しています。また、オフラインのデザインモックアップ用に <strong>オレンジ画面オンラインpng</strong> 画像をエクスポートすることも可能です。',
          '多くのユーザーが、就寝前のリラックスしたひとときにウォームオレンジ画面を睡眠補助ライトとして活用しています。刺激の強いブルーライトを和らげることで、スマホの <strong>オレンジ画面スマホ</strong> あるいは <strong>オレンジの画面iPhone</strong> ビジュアルは、ベッドでの夜間読書に快適な睡眠環境を整えます。もし自分のパソコンやスマホの <strong>画面がオレンジ色になるのはなぜ</strong> と疑問に感じたら、それは多くの場合 <strong>オレンジの画面Windows 10</strong> の夜間モード設定によるものですが、当サイトを使用して手動で心地よいオレンジの雰囲気を設定することも可能です。プロジェクター用スクリーンで温かいムードを作ったり、イラストをすかし写しするトレース方法（クラスメートの描いたイラストをコピーする <strong>オレンジ画面トレース方法</strong>）、PCのエラーである <strong>オレンジ画面の死（オレンジスクリーンオブデス）</strong> を検証する際など、当サイトはPCやスマホで瞬時にオレンジ画面を取得するための最もシンプルなウェブユーティリティであり、魅力的なオレンジ画面効果をもたらします。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'purple-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Purple Screen Online Tool & Creative Use Cases',
        paragraphs: [
          'When content creators, photographers, and wellness instructors need a premium aesthetic display, they use a <strong>purple screen online</strong> tool. Projecting a <strong>blank purple screen</strong> or using a <strong>purple screen saver</strong> (or <strong>purple screen savers</strong>) is a popular way to craft virtual backdrops for Zoom, Teams, or streaming environments. Displaying a <strong>purple screen to make a vibe</strong> helps set a relaxing mood, which is why developers integrate a <strong>full purple screen</strong> within yoga or meditation applications. You can easily adjust key parameters on this webpage to transition between a <strong>light purple screen</strong> and a <strong>dark purple screen</strong> for custom room lighting, music sessions, or virtual meetings.',
          'Aside from decor, a solid purple fullscreen background acts as a practical device utility. Launching a <strong>blank computer screen</strong> on a laptop or desktop monitor is ideal as a purple screen/light for display testing, allowing you to easily locate stuck subpixels on LCD panels and verify color accuracy. Many artists use a <strong>purple screen to copy image</strong> outlines, turning their tablet displays into an interactive light box to trace sketches. If you need portable high-resolution assets, you can use our built-in controls to customize the canvas and download a <strong>purple screen wallpaper</strong> in 4K or save a <strong>purple screen bright</strong> graphic for Photoshop projects or visual design mockups.',
          'For mobile diagnostics and classroom activities, our responsive design is optimized for various platforms. Whether you are troubleshooting system freezes like an <strong>ubuntu purple screen</strong> startup lock, checking graphics rendering on a <strong>purple screen on tv</strong> setup, or testing an <strong>iphone purple screen</strong> tint, this safe utility helps identify hardware anomalies without risking system crashes. It also serves as a playful purple screen for kids to stimulate learning or as a <strong>purple screen for photo</strong> backdrops. With no account signup or heavy downloads required, you can get a <strong>purple screen phone</strong> light source or run beautiful purple screen savers instantly on any computer panel.'
        ]
      },
      es: {
        heading: 'Herramienta de Pantalla Morada Online y Casos de Uso',
        paragraphs: [
          'Cuando los fotógrafos, diseñadores e instructores buscan un fondo estético, recurren a una herramienta de <strong>pantalla morada online</strong> (purple screen online). Proyectar una <strong>pantalla morada en blanco</strong> (blank purple screen) o usar un <strong>salvapantallas morado</strong> (purple screen saver) es excelente para crear fondos decorativos en llamadas virtuales. Utilizar una <strong>pantalla morada para crear ambiente</strong> (purple screen to make a vibe) ayuda a tranquilizar la mente, lo que lo convierte en un recurso ideal para aplicaciones de yoga o meditación. Además, puedes regular los tonos para pasar de una <strong>pantalla morada clara</strong> (light purple screen) a una <strong>pantalla morada oscura</strong> (dark purple screen) según tus necesidades de iluminación.',
          'Además del diseño, una pantalla morada de fondo completo es un recurso técnico de gran valor. Configurar una <strong>pantalla de ordenador en blanco</strong> (blank computer screen) es ideal como una pantalla morada para limpieza de monitores, facilitando encontrar píxeles muertos o manchas sucias. Muchos estudiantes de arte usan la <strong>pantalla morada para calcar dibujos</strong> (purple screen to copy image) y copiar bocetos usándola como caja de luz. Desde la barra de herramientas, puedes ajustar el brillo y descargar un <strong>fondo de pantalla morado</strong> (purple screen wallpaper) en alta resolución o guardar una imagen de <strong>pantalla morada brillante</strong> (purple screen bright) para tus ideas creativas.',
          'Para diagnósticos en móviles y actividades educativas, nuestro diseño web se adapta a cualquier monitor. Ya sea que estés comprobando un error de inicio de <strong>pantalla morada en Ubuntu</strong> (ubuntu purple screen), evaluando problemas visuales en una <strong>pantalla morada en la TV</strong> (purple screen on tv) o analizando un glitch de <strong>pantalla morada en iPhone</strong> (iphone purple screen), esta página web permite hacer pruebas seguras. Funciona perfectamente como una <strong>pantalla morada para fotos</strong> (purple screen for photo) de retrato o como <strong>pantalla morada móvil</strong> (purple screen phone). Consigue un panel limpio o activa los salvapantallas morados (purple screen savers) al instante sin suscripciones.'
        ]
      },
      pt: {
        heading: 'Ferramenta de Tela Roxa Online e Cenários de Uso',
        paragraphs: [
          'Quando produtores de conteúdo, instrutores de bem-estar e artistas precisam de um fundo elegante, eles usam uma <strong>tela roxa online</strong> (purple screen online). Exibir uma <strong>tela roxa em branco</strong> (blank purple screen) ou um <strong>protetor de tela roxo</strong> (purple screen saver) é muito requisitado para configurar planos de fundo virtuais no Teams ou Zoom. O uso de uma <strong>tela roxa para criar uma vibe</strong> (purple screen to make a vibe) ajuda na meditação e mindfulness, sendo muito comum em aplicativos de relaxamento. Ajustando a cor, você escolhe entre uma <strong>tela roxa clara</strong> (light purple screen) ou uma <strong>tela roxa escura</strong> (dark purple screen) para iluminação de reuniões ou estúdio de gravação.',
          'Além de ambientação, o fundo de tela roxo completo atua como uma ferramenta técnica. Transformar um <strong>monitor em branco</strong> (blank computer screen) é excelente como uma tela roxa para limpeza do monitor, identificando poeira e auxiliando no teste de tela para encontrar pixels mortos. Diversos desenhistas usam a <strong>tela roxa para copiar imagens</strong> (purple screen to copy image) colocada sobre o tablet como mesa de luz. No painel lateral, você customiza o brilho e pode baixar um <strong>papel de parede de tela roxa</strong> (purple screen wallpaper) em 4K ou salvar uma imagem de <strong>tela roxa brilhante</strong> (purple screen bright) para edição de fotos.',
          'Para testes visuais em dispositivos móveis e TVs, nossa interface responde rápido em qualquer aparelho. Seja para identificar problemas de boot na <strong>tela roxa do Ubuntu</strong> (ubuntu purple screen), analisar a reprodução cromática na <strong>tela roxa na TV</strong> (purple screen on tv), ou diagnosticar um glitch de <strong>tela roxa no iPhone</strong> (iphone purple screen), este site é 100% seguro. Ele também serve como uma <strong>tela roxa para fotos</strong> (purple screen for photo) de estúdio ou luz de cor da <strong>tela roxa no celular</strong> (purple screen phone). Aproveite nosso simulador para criar belos protetores de tela roxos (purple screen savers) de forma ágil e sem cadastro.'
        ]
      },
      fr: {
        heading: 'Outil Écran Violet en Ligne & Cas d\'Usage',
        paragraphs: [
          'Lorsque les créateurs, photographes et enseignants recherchent un fond élégant, ils utilisent un <strong>écran violet en ligne</strong> (purple screen online). Projeter un <strong>écran violet vide</strong> (blank purple screen) ou un <strong>économiseur d\'écran violet</strong> (purple screen saver) permet d\'établir d\'excellents arrière-plans pour vos appels Zoom ou diffusions. Utiliser un <strong>écran violet pour instaurer une ambiance</strong> (purple screen to make a vibe) favorise la concentration, raison pour laquelle il est présent dans les applications de relaxation. Notre site permet de varier les nuances entre un <strong>écran violet clair</strong> (light purple screen) et un <strong>écran violet foncé</strong> (dark purple screen) selon la luminosité voulue.',
          'Outre l\'éclairage de studio, un arrière-plan écran violet plein écran sert pour l\'entretien technique. Allumer un <strong>écran d\'ordinateur vide</strong> (blank computer screen) est idéal comme écran violet pour le nettoyage de moniteur, permettant de vite localiser un pixel défectueux ou de la poussière. Les amateurs de arts appliquent la technique d\'<strong>écran violet pour décalquer une image</strong> (purple screen to copy image), transformant la dalle en table lumineuse. Réglez la colorimétrie pour procéder au <strong>téléchargement d\'un fond d\'écran violet</strong> (purple screen wallpaper) 4K ou générer un rendu d\'<strong>écran violet brillant</strong> (purple screen bright) pour vos montages.',
          'Pour la maintenance et l\'apprentissage, notre page s\'affiche sans accroc sur tous les moniteurs. Qu\'il s\'agisse de résoudre un démarrage bloqué d\'<strong>écran violet sur Ubuntu</strong> (ubuntu purple screen), d\'inspecter les contrastes avec un <strong>écran violet sur TV</strong> (purple screen on tv) ou de diagnostiquer une teinte d\'<strong>écran violet sur iPhone</strong> (iphone purple screen), ce portail offre un support de calibration parfait. Le site fait également office d\'<strong>écran violet pour photo</strong> (purple screen for photo) de portrait ou d\'<strong>écran violet sur téléphone</strong> (purple screen phone) pour vos selfies, ou encore d\'économiseurs d\'écran violets (purple screen savers).'
        ]
      },
      de: {
        heading: 'Violetter Bildschirm Online-Tool & Anwendungen',
        paragraphs: [
          'Wenn Videoproduzenten, Streamer und Yogalehrer einen ästhetischen Hintergrund benötigen, nutzen sie einen <strong>lila Bildschirm online</strong> (purple screen online). Die Projektion eines <strong>leeren lila Bildschirms</strong> (blank purple screen) oder das Einschalten eines <strong>lila Bildschirmschoners</strong> (purple screen saver) eignet sich hervorragend, um Stimmung in Webinaren zu erzeugen. Ein <strong>lila Bildschirm für eine gemütliche Vibe</strong> (purple screen to make a vibe) hilft bei Meditation und Entspannung, weshalb Wellness-Apps diesen ruhigen Farbton in ihre Benutzeroberfläche einbinden. Passen Sie die Werte einfach an, um zwischen einem <strong>helllila Bildschirm</strong> (light purple screen) und einem <strong>dunkellila Bildschirm</strong> (dark purple screen) zu wählen.',
          'Neben Lichteffekten dient ein vollflächiger lila Hintergrund als praktisches Tool für Ihren Monitor. Das Anzeigen eines <strong>leeren Computerbildschirms</strong> (blank computer screen) ist ideal als lila Bildschirm zur Reinigung Ihrer Displays, um Fehler in den RGB-Farben zu finden und Staub zu entdecken. Viele Grafik-Einsteiger nutzen den <strong>lila Bildschirm zum Zeichnen und Abpausen von Bildern</strong> (purple screen to copy image) auf einem Tablet. Sie können das Licht anpassen, um ein passendes <strong>lila Bildschirmhintergrundbild</strong> (purple screen wallpaper) in hoher Qualität zu erstellen oder das Licht als <strong>leuchtend lila Bildschirm</strong> (purple screen bright) für Produktfotos zu gebrauchen.',
          'Für Smart-TVs und Mobilgeräte ist unser Design für alle Auflösungen ausgelegt. Ob bei Diagnosen zum <strong>lila Bildschirm unter Ubuntu</strong> (ubuntu purple screen), bei Farbprüfungen an einem <strong>lila Bildschirm auf dem Fernseher</strong> (purple screen on tv) oder beim Erkennen eines Farbstichs als <strong>lila Bildschirm auf dem iPhone</strong> (iphone purple screen) – diese Web-App ist absolut sicher ausführbar. Sie dient wunderbar als <strong>lila Bildschirm für Fotos</strong> (purple screen for photo) oder als <strong>lila Bildschirm auf dem Handy</strong> (purple screen phone) sowie zum Abspielen schicker lila Bildschirmschoner (purple screen savers) ohne Registrierung.'
        ]
      },
      hi: {
        heading: 'बैंगनी स्क्रीन ऑनलाइन टूल और रचनात्मक उपयोग',
        paragraphs: [
          'जब कंटेंट क्रिएटर, फोटोग्राफर और वेलनेस प्रशिक्षक स्टूडियो बैकग्राउंड बनाना चाहते हैं, तो वे <strong>बैंगनी स्क्रीन ऑनलाइन</strong> (purple screen online) टूल का उपयोग करते हैं। एक <strong>खाली बैंगनी स्क्रीन</strong> (blank purple screen) या <strong>बैंगनी स्क्रीन सेवर</strong> (purple screen saver) का उपयोग करके वीडियो कॉन्फ्रेंस के लिए सुंदर वातावरण तैयार किया जा सकता है। कमरे में <strong>बैंगनी स्क्रीन से वाइब बनाने</strong> (purple screen to make a vibe) से ध्यान और मानसिक विश्राम में सहायता मिलती है। हमारे विकल्पों की मदद से आप <strong>हल्की बैंगनी स्क्रीन</strong> (light purple screen) और <strong>डार्क बैंगनी स्क्रीन</strong> (dark purple screen) के बीच चमक को आसानी से नियंत्रित कर सकते हैं।',
          'सजावट के अलावा, ठोस बैंगनी फुलस्क्रीन बैकग्राउंड का उपयोग मॉनिटर रखरखाव में अधिक होता है। डिस्प्ले पर <strong>खाली कंप्यूटर स्क्रीन</strong> (blank computer screen) चलाना सफाई के लिए बैंगनी स्क्रीन के रूप में एक उपयोगी डायग्नोस्टिक टूल है, जो फंसे हुए पिक्सेल और गंदगी के धब्बे ढूंढने में मदद करता है। बहुत से छात्र <strong>चित्र कॉपी करने के लिए बैंगनी स्क्रीन</strong> (purple screen to copy image) का उपयोग करते हैं, जिससे उनके टैबलेट की स्क्रीन ट्रेसिंग हेतु लाइट बॉक्स बन जाती है। आप यहाँ से सुंदर <strong>बैंगनी स्क्रीन वॉलपेपर</strong> (purple screen wallpaper) डाउनलोड कर सकते हैं या <strong>चमकीली बैंगनी स्क्रीन</strong> (purple screen bright) को फोटो एडिटिंग में लगा सकते हैं।',
          'विभिन्न प्लेटफार्मों के लिए अनुकूलित यह टूल अत्यंत प्रतिक्रियाशील है। चाहे उबंटू को बूट करते समय <strong>उबंटू बैंगनी स्क्रीन</strong> (ubuntu purple screen) की विफलता की जांच करनी हो, टीवी पर <strong>टीवी पर बैंगनी स्क्रीन</strong> (purple screen on tv) चलाकर कलर चैनल टेस्ट करने हों, या फिर <strong>आईफोन बैंगनी स्क्रीन</strong> (iphone purple screen) की चमक का आकलन करना हो, यह सुरक्षित यूटिलिटी काफी कारगर है। इसका उपयोग फोटोशूट के लिए <strong>फोटो के लिए बैंगनी स्क्रीन</strong> (purple screen for photo) या पोर्टेबल <strong>बैंगनी स्क्रीन फोन</strong> (purple screen phone) लाइट के रूप में किया जा सकता है, जिससे आप बिना किसी झंझट के सुंदर बैंगनी स्क्रीन सेवर (purple screen savers) चला सकते हैं।'
        ]
      },
      ja: {
        heading: '紫の画面（Purple Screen）オンラインツールとクリエイティブな用途',
        paragraphs: [
          '映像クリエーターや写真家、瞑想のインストラクターが上品な背景を必要とする際、重宝されるのが <strong>紫の画面 オンライン</strong>（purple screen online）ツールです。画面全体に <strong>空白の紫の画面</strong>（blank purple screen）を表示したり、 <strong>紫のスクリーンセーバー</strong>（purple screen saver）を作動させることで、Zoom通話や動画配信のバーチャル背景をご自身で設計できます。さらに、 <strong>紫の画面で雰囲気作り</strong>（purple screen to make a vibe）をすることは、マインドフルネスのアプリ同様に脳をリラックスさせるため、健康アプリでも活用されています。輝度を調整して、 <strong>薄い紫の画面</strong>（light purple screen）から <strong>濃い紫の画面</strong>（dark purple screen）まで柔軟に出力が可能です。',
          'デザイン目的だけでなく、均一な紫の全画面背景は品質チェック等に役立つ実用的な機能です。ノートPCやモニターに <strong>空白 of PC画面</strong>（blank computer screen）を出すことは、液晶の掃除用紫の画面として最適で、パネル上のドット抜けや汚れの位置がはっきりと確認できます。また、トレースや模写を行うために <strong>画像コピー用紫の画面</strong>（purple screen to copy image）としてタブレットをライトボックス化し、学校の絵をすかし写しするのにも応用されます。サイドメニューを利用すれば、高解像度の <strong>紫の画面の壁紙</strong>（purple screen wallpaper）のダウンロードや、撮影用の <strong>鮮やかな紫の画面</strong>（purple screen bright）を簡単に書き出すことができます。',
          '本ツールはレスポンシブ対応となっており、様々なハードウェアで起動可能です。PC起動時の <strong>Ubuntuの紫の画面</strong>（ubuntu purple screen）バグの切り分け、モニター設定時の <strong>テレビ用紫の画面</strong>（purple screen on tv）カラーテスト、水没等による <strong>iPhoneの紫の画面</strong>（iphone purple screen）液晶不良など、システムをクラッシュさせる危険なく安心してディスプレイ能力を測定できます。人物撮影用の <strong>撮影用紫の画面</strong>（purple screen for photo）としても、持ち歩き可能な <strong>スマホ用紫の画面</strong>（purple screen phone）光源としても、また安らぎを与える紫のスクリーンセーバー（purple screen savers）としても、すぐにその場でお使いいただけます。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'pink-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Pink Screen Online Tool & Creative Use Cases',
        paragraphs: [
          'When content creators, photographers, and UI designers need a premium aesthetic display, they search for a <strong>pink screen</strong> utility. Building a custom <strong>pink screen saver</strong> or turning your monitor into a <strong>pink screen light app</strong> is a wonderful way to improve room vibes, design aesthetics, or video lighting. By displaying a <strong>full pink screen</strong> or <strong>blank pink screen</strong>, you can cast a soothing glow that serves as a <strong>pink light effect</strong> or <strong>pink light for photo</strong> shoots, casting a soft aura in the room.',
          'Beyond its creative purposes, a solid pink backdrop works as an effective hardware diagnostic tool. Propping up a <strong>light pink screen</strong> or <strong>bright pink screen</strong> makes it easy to run display quality checks on computer monitors or TV panels to identify dead pixels, check panel uniformity, or clean up smudges. Rather than getting alarmed over a critical GPU crash like a <strong>pink screen of death</strong> (which is often compared to a <strong>purple screen</strong> failure) or suspecting physical screen failure after witnessing a sudden <strong>macbook pink screen</strong> or <strong>macbook pro pink screen</strong> tint, you can use our safe online page to verify if it is a transient software error.',
          'For mobile setups and console checking, our tool is fully optimized for touchscreens and monitors. Whether you need a <strong>pink screen light on phone</strong> to illuminate your desk, want to customize a <strong>pink screen iphone</strong> layout, or are investigating a display issues like a <strong>samsung tv pink screen</strong> or general <strong>pink screen on tv</strong> connectivity drop, our clean web page lets you output a <strong>dark pink screen</strong> or <strong>hot pink screen</strong> instantly. This gives you a continuous <strong>pink screen light video</strong> glow or portrait fill light source without playback ads. Toggle fullscreen mode to match specific <strong>pink screen color code</strong> graphics for all your design and lighting needs.'
        ]
      },
      es: {
        heading: 'Optimización de Pantalla Rosa y Casos de Uso',
        paragraphs: [
          'Cuando los creadores de contenido, fotógrafos y diseñadores de interfaz buscan un fondo con estética premium, recurren a una herramienta de <strong>pantalla rosa</strong> (pink screen). Configurar un <strong>salvapantallas rosa</strong> (pink screen saver) o convertir tu monitor en una aplicación de <strong>luz de pantalla rosa en el teléfono</strong> (pink screen light app) es ideal para mejorar el ambiente de tu espacio o iluminar transmisiones en vivo. Al proyectar una <strong>pantalla rosa de fondo completo</strong> (full pink screen) o <strong>pantalla rosa en blanco</strong> (blank pink screen), generas un relax uniforme mediante un <strong>efecto de luz rosa</strong> (pink light effect) o una fuente de <strong>luz rosa para fotos</strong> (pink light for photo).',
          'Además del diseño, una pantalla rosa de fondo completo es un práctico recurso técnico. Utilizar una <strong>pantalla rosa claro</strong> (light pink screen) o una <strong>pantalla rosa brillante</strong> (bright pink screen) facilita probar la calidad del monitor o televisor para detectar píxeles muertos y limpiar la pantalla. En lugar de asustarte por un fallo de la GPU como la <strong>pantalla rosa de la muerte</strong> (pink screen of death) o preocuparte al ver una perturbadora <strong>pantalla rosa en MacBook</strong> (macbook pink screen), puedes utilizar nuestra página web para diagnosticar y descartar fallos de hardware.',
          'Para dispositivos móviles y televisores, nuestra interfaz se adapta perfectamente a cualquier tamaño de pantalla. Ya sea que uses una <strong>pantalla de luz rosa en el móvil</strong> (pink screen light on phone) para iluminar videollamadas, quieras cambiar el estilo de tu <strong>pantalla rosa en iPhone</strong> (pink screen iphone), o necesites diagnosticar problemas de visualización como una <strong>pantalla rosa en TV Samsung</strong> (samsung tv pink screen) o <strong>pantalla rosa en TV</strong> (pink screen on tv) por HDMI, nuestra web te ofrece tonos de <strong>pantalla rosa oscuro</strong> (dark pink screen) o <strong>pantalla rosa fuerte</strong> (hot pink screen) al instante usando el <strong>código de color rosa de pantalla</strong> (pink screen color code) ideal.'
        ]
      },
      pt: {
        heading: 'Ferramenta de Tela Rosa Online e Casos de Uso',
        paragraphs: [
          'Quando criadores de conteúdo, fotógrafos e designers de interfaces necessitam de uma estética premium para suas exibições, eles procuram uma utilidade de <strong>tela rosa</strong> (pink screen). Configurar um <strong>protetor de tela rosa</strong> (pink screen saver) ou transformar o seu monitor num aplicativo de <strong>tela de luz rosa no celular</strong> (pink screen light app) é uma ótima maneira de melhorar a iluminação facial e a decoração. Ao exibir uma <strong>tela rosa completa</strong> (full pink screen) ou uma <strong>tela rosa em branco</strong> (blank pink screen), você projeta um brilho uniforme que atua como <strong>efeito de luz rosa</strong> (pink light effect) ou <strong>luz rosa para fotos</strong> (pink light for photo) em estúdios.',
          'Além da criatividade, uma tela de fundo rosa sólido funciona como um ótimo teste de monitor. Exibir uma <strong>tela rosa claro</strong> (light pink screen) ou <strong>tela rosa brilhante</strong> (bright pink screen) ajuda no diagnóstico de subpixels de TVs ou monitores de PC e na limpeza da tela. Em vez de se desesperar com falhas graves de sistema como a <strong>tela rosa da morte</strong> (pink screen of death) ou notar um tom estranho de <strong>tela rosa no MacBook</strong> (macbook pink screen) que possa sugerir pane na tela, você pode usar nosso painel online para rodar um teste cromático seguro.',
          'Para smartphones e TVs, nosso site responde instantaneamente a qualquer proporção de tela. Se você quer uma <strong>tela de luz rosa no celular</strong> (pink screen light on phone), ecrãs para <strong>tela rosa no iPhone</strong> (pink screen iphone), ou está avaliando problemas de sinal de vídeo como uma <strong>tela rosa na TV Samsung</strong> (samsung tv pink screen) ou <strong>tela rosa na TV</strong> (pink screen on tv), nosso utilitário fornece tons de <strong>tela rosa escura</strong> (dark pink screen) ou <strong>tela rosa quente</strong> (hot pink screen) sob demanda. Combine nosso painel em tela cheia com o seu <strong>código de cor de tela rosa</strong> (pink screen color code) predileto.'
        ]
      },
      fr: {
        heading: 'Outil Écran Rose en Ligne & Applications Créatives',
        paragraphs: [
          'Lorsque les photographes, vidéastes et graphistes recherchent un affichage haut de gamme, ils utilisent notre outil d\'<strong>écran rose</strong> (pink screen). Rendre l\'affichage uni avec un <strong>économiseur d\'écran rose</strong> (pink screen saver) ou configurer une <strong>lumière d\'écran rose sur le téléphone</strong> (pink screen light app) est parfait pour ajouter une douce lueur d\'ambiance. Afficher un <strong>écran rose plein écran</strong> (full pink screen) ou un <strong>écran rose vide</strong> (blank pink screen) permet d\'émettre une lumière de portrait idéale comme <strong>effet de lumière rose</strong> (pink light effect) ou <strong>lumière rose pour photo</strong>.',
          'Outre la décoration, une dalle entièrement colorée en rose facilite la maintenance et la détection d\'anomalies physiques. Projeter un <strong>écran rose clair</strong> (light pink screen) ou un <strong>écran rose vif</strong> (bright pink screen) permet d\'inspecter l\'uniformité de la dalle et de nettoyer l\'écran en repérant mieux les poussières. Plutôt que de paniquer face à un crash de carte graphique comme l\'<strong>écran rose de la mort</strong> (pink screen of death) ou face à un bug d\'<strong>écran rose sur MacBook</strong> (macbook pink screen), lancez notre outil de test pour isoler s\'il s\'agit d\'un défaut physique ou d\'un bug temporaire.',
          'Pensé pour les mobiles, tablettes et téléviseurs, l\'utilitaire est compatible avec toutes les résolutions. Que ce soit pour projeter un flash de <strong>lumière rose sur téléphone</strong> (pink screen light on phone), personnaliser votre <strong>écran rose sur iPhone</strong> (pink screen iphone) pour les selfies, ou enquêter sur un signal HDMI corrompu sur une <strong>télévision Samsung à écran rose</strong> (samsung tv pink screen) ou une <strong>télévision avec écran rose</strong> (pink screen on tv), notre site fournit des palettes allant de l\'<strong>écran rose foncé</strong> (dark pink screen) à l\'<strong>écran rose fluo</strong> (hot pink screen) correspondant au <strong>code couleur d\'écran rose</strong> (pink screen color code) ajusté.'
        ]
      },
      de: {
        heading: 'Rosa Bildschirm Online-Tool & Anwendungen',
        paragraphs: [
          'Wenn Influencer, Fotografen und Designer eine ansprechende solide Kulisse benötigen, suchen sie nach einer <strong>rosa Bildschirm</strong>-Alternative (pink screen). Das Aktivieren eines <strong>rosa Bildschirmschoners</strong> (pink screen saver) oder die Nutzung des Displays als <strong>rosa Bildschirm-Taschenlampe</strong> (pink screen light app) eignet sich hervorragend, um die Raumbeleuchtung zu verbessern. Ein <strong>rosa Bildschirm in Vollbild</strong> (full pink screen) oder ein <strong>leerer rosa Bildschirm</strong> (blank pink screen) wirft ein sanftes Licht, das sich hervorragend als <strong>rosa Lichteffekt</strong> (pink light effect) oder als <strong>rosa Licht für Fotos</strong> (pink light for photo) für Porträtaufnahmen nutzen lässt.',
          'Zusätzlich zu kreativen Ambienten hilft ein rosa Hintergrund bei der schnellen Überprüfung von Displays. Ein <strong>hellrosa Bildschirm</strong> (light pink screen) oder ein <strong>knallrosa Bildschirm</strong> (bright pink screen) macht Staub und fehlerhafte Pixel auf PC-Monitoren oder Fernsehern sofort sichtbar. Anstatt bei einem Systemabsturz wie dem <strong>rosa Bildschirm des Todes</strong> (pink screen of death) oder einer plötzlichen Verfärbung wie dem <strong>MacBook rosa Bildschirm</strong> (macbook pink screen) sofort an einen Hardware-Defekt zu denken, können Sie mit unserer Seite manuell testen, ob der Monitor die Farbe korrekt darstellt.',
          'Dank des responsiven Designs läuft unser Tool hervorragend auf Handys und Smart-TVs. Egal, ob Sie ein <strong>rosa Bildschirmlicht auf dem Smartphone</strong> (pink screen light on phone) wünschen, einen <strong>rosa Bildschirm auf dem iPhone</strong> (pink screen iphone) testen oder Signalfehler wie einen <strong>rosa Bildschirm beim Samsung TV</strong> (samsung tv pink screen) oder <strong>rosa Bildschirm auf dem Fernseher</strong> (pink screen on tv) untersuchen – unser Tool liefert sofort einen <strong>dunkelrosa Bildschirm</strong> (dark pink screen) oder <strong>hot-pink Bildschirm</strong> (hot pink screen). Passen Sie den <strong>Farbcode für den rosa Bildschirm</strong> (pink screen color code) nach Belieben an.'
        ]
      },
      hi: {
        heading: 'गुलाबी स्क्रीन ऑनलाइन टूल और रचनात्मक उपयोग',
        paragraphs: [
          'जब रचनाकारों, फोटोग्राफरों और डिजाइनरों को एक सुंदर ठोस पृष्ठभूमि की आवश्यकता होती है, तो वे एक विश्वसनीय <strong>गुलाबी स्क्रीन</strong> (pink screen) टूल खोजते हैं। डेस्कटॉप पर <strong>पिंक स्क्रीन सेवर</strong> (pink screen saver) सेट करना या अपने मॉनिटर को <strong>पिंक स्क्रीन लाइट ऐप</strong> (pink screen light app) में बदलना कमरे का माहौल और वीडियो लाइटिंग सुधारने का बेहतरीन तरीका है। पूरी स्क्रीन को <strong>पूरी गुलाबी स्क्रीन</strong> (full pink screen) या <strong>खाली गुलाबी स्क्रीन</strong> (blank pink screen) में बदलकर, आप एक शांत और कोमल <strong>गुलाबी प्रकाश प्रभाव</strong> (pink light effect) या <strong>फोटो के लिए गुलाबी रोशनी</strong> (pink light for photo) प्राप्त कर सकते हैं।',
          'सजावट के अलावा, ठोस गुलाबी फुलस्क्रीन बैकग्राउंड डिस्प्ले की सेहत जांचने का एक व्यावहारिक साधन है। एक <strong>हल्की गुलाबी स्क्रीन</strong> (light pink screen) या <strong>चमकीली गुलाबी स्क्रीन</strong> (bright pink screen) का उपयोग करके आप टीवी पैनल या पीसी मॉनिटर पर डेड पिक्सेल का परीक्षण कर सकते हैं और स्क्रीन साफ कर सकते हैं। अचानक सिस्टम क्रैश होने वाले <strong>पिंक स्क्रीन ऑफ डेथ</strong> (pink screen of death) या लैपटॉप पर होने वाली <strong>मैकबुक गुलाबी स्क्रीन</strong> (macbook pink screen) की समस्या की जांच करने के लिए हमारा सुरक्षित ऑनलाइन पेज काम आता है।',
          'सभी मोबाइल और टैबलेट के लिए अनुकूलित, यह वेब पेज बहुत आसानी से काम करता है। चाहे आपको चेहरे पर ग्लो लाने के लिए <strong>फोन पर गुलाबी रोशनी</strong> (pink screen light on phone) चाहिए, अपने <strong>आईफोन गुलाबी स्क्रीन</strong> (pink screen iphone) को कस्टमाइज़ करना हो, या फिर टीवी में आ रहे एरर जैसे <strong>सैमसंग टीवी गुलाबी स्क्रीन</strong> (samsung tv pink screen) या <strong>टीवी पर गुलाबी स्क्रीन</strong> (pink screen on tv) की एचडीएमआई कनेक्टिविटी समस्या को हल करना हो, यह टूल आपको <strong>डार्क पिंक स्क्रीन</strong> (dark pink screen) और <strong>हॉट पिंक स्क्रीन</strong> (hot pink screen) की सुविधा तुरंत प्रदान करता है। Fullscreen टॉगल करके आप पसंदीदा <strong>पिंक स्क्रीन कलर कोड</strong> (pink screen color code) का चयन कर सकते हैं।'
        ]
      },
      ja: {
        heading: 'ピンク画面（Pink Screen）オンラインツールと主な用途',
        paragraphs: [
          'クリエイターや写真家、デザイナーがおしゃれな背景を必要とする際、便利な <strong>ピンク画面</strong>（pink screen）ツールが活用されます。 <strong>ピンクのスクリーンセーバー</strong>（pink screen saver）を起動したり、お使いのモニターを <strong>ピンクスクリーンライトアプリ</strong>（pink screen light app）のように使用して、お部屋の雰囲気や動画のライティングを最適化できます。 <strong>全画面ピンク画面</strong>（full pink screen）や <strong>空白のピンク画面</strong>（blank pink screen）を映すことで、撮影時の <strong>ピンク光効果</strong>（pink light effect）や <strong>撮影用ピンクライト</strong>（pink light for photo）として機能し、被写体を温かい光で優しく包み込みます。',
          'クリエイティブな使用だけでなく、単一のピンクスクリーンはモニター検査にも実用的なツールとなります。 <strong>薄いピンクの画面</strong>（light pink screen）や <strong>鮮やかなピンクの画面</strong>（bright pink screen）を表示することで、テレビやPCモニターのドット抜けテスト、および画面掃除の際の見やすさを向上させます。GPU不良による液晶フリーズの <strong>ピンクスクリーンオブデス</strong>（pink screen of death）が発生した場合や、 <strong>MacBookのピンク画面</strong>（macbook pink screen）偏色などの液晶トラブルの際、それが一時的なシステム起因かハードウェアの破損かを安全に試験できます。',
          'スマホやTVなど全デバイスにレスポンシブ動作し、ブラウザで瞬時に展開可能です。通話時に顔色を照らす <strong>スマホ用ピンクライト</strong>（pink screen light on phone）、 <strong>iPhoneのピンク画面</strong>（pink screen iphone）配色チェック、 <strong>Samsung製テレビのピンク画面</strong>（samsung tv pink screen）や一般的な <strong>テレビのピンク画面</strong>（pink screen on tv）エラー時の接続診断など、 <strong>濃いピンクの画面</strong>（dark pink screen）や <strong>ホットピンク画面</strong>（hot pink screen）を使い分けることで、最適な照明と検品が可能です。全画面モードで特定の <strong>ピンク画面カラーコード</strong>（pink screen color code）に合わせ、あらゆる用途にお役立てください。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'cyan-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Cyan Screen Online Tool & Digital Art Utilities',
        paragraphs: [
          'For content creators, photographers, and UI designers seeking a fresh cool-toned aesthetic, our <strong>cyan screen</strong> utility is a premium solution. Setting up a customized <strong>cyan screen saver</strong> or converting your monitor into a temporary <strong>cyan screen light app</strong> is an effective way to inject modern, relaxing vibes into your workspace or studio. By projecting a <strong>full cyan screen</strong> or a <strong>blank cyan screen</strong>, you can cast a vibrant blue-green glow that functions as a stunning <strong>cyan light effect</strong> or studio <strong>cyan light for photo</strong> shoots.',
          'Beyond its artistic uses, a solid cyan color field serves as an essential monitor checking tool. Renders of a <strong>light cyan screen</strong> or <strong>bright cyan screen</strong> make it incredibly simple to run display panel audits, checking color uniformity and revealing stuck or dead subpixels. Rather than worrying about severe operating system failures like a <strong>cyan screen of death</strong> or physical connection issues on your monitors, you can display a safe, solid <strong>cyan background</strong> to verify display performance and examine color accuracy across different channels.',
          'Designed responsively for mobile and desktop screens, our web app scales perfectly to any aspect ratio. Whether you are using a <strong>cyan screen light on phone</strong> as a face illumination light for video calls, styling a custom <strong>cyan screen iphone</strong> aesthetic layout, or utilizing a high-contrast <strong>dark cyan screen</strong> or vibrant <strong>hot cyan screen</strong> to evaluate display panels, our utility operates outputting the precise <strong>cyan screen color code</strong> you need. Toggle fullscreen mode to output clean, uninterrupted light on any device.'
        ]
      },
      es: {
        heading: 'Herramienta de Pantalla Cian Online y Casos de Uso',
        paragraphs: [
          'Para creadores de contenido, fotógrafos y diseñadores de interfaces que buscan una estética fresca y moderna, nuestra herramienta de <strong>pantalla cian</strong> (cyan screen) es el recurso ideal. Configurar un <strong>salvapantallas cian</strong> (cyan screen saver) o convertir tu monitor en una aplicación de <strong>luz de pantalla cian en el celular</strong> (cyan screen light app) es una excelente forma de dar un aire moderno a tu espacio de trabajo. Al proyectar una <strong>pantalla cian de fondo completo</strong> (full cyan screen) o <strong>pantalla cian en blanco</strong> (blank cyan screen), generas un brillo homogéneo que sirve como <strong>efecto de luz cian</strong> (cyan light effect) o <strong>luz cian para fotos</strong> (cyan light for photo).',
          'Además de la decoración de espacios, un fondo cian sólido es una herramienta útil de diagnóstico de hardware. Mostrar una <strong>pantalla cian claro</strong> (light cyan screen) o una <strong>pantalla cian brillante</strong> (bright cyan screen) facilita revisar la fidelidad cromática de monitores y televisores, así como detectar píxeles muertos. En lugar de asustarte por un error del sistema como la <strong>pantalla cian de la muerte</strong> (cyan screen of death) o fallos de conexión gráfica, puedes usar este <strong>fondo cian</strong> (cyan background) limpio para asegurar el correcto funcionamiento de tu pantalla.',
          'Nuestra aplicación web está optimizada para todo tipo de monitores y pantallas táctiles. Ya sea que requieras una <strong>pantalla de luz cian en el teléfono</strong> (cyan screen light on phone) para iluminar videollamadas, quieras configurar tu <strong>pantalla cian en iPhone</strong> (cyan screen iphone), o necesites tonos de <strong>pantalla cian oscuro</strong> (dark cyan screen) o <strong>pantalla cian fuerte</strong> (hot cyan screen), nuestro panel genera el <strong>código de color cian de pantalla</strong> (cyan screen color code) exacto al hacer clic en pantalla completa.'
        ]
      },
      pt: {
        heading: 'Utilidades de Tela Ciano Online e Efeitos de Iluminação',
        paragraphs: [
          'Para criadores de conteúdo, fotógrafos e designers de interfaces que buscam uma estética fresca e tecnológica, nossa ferramenta de <strong>tela ciano</strong> (cyan screen) é uma excelente opção. Definir um <strong>protetor de tela ciano</strong> (cyan screen saver) ou utilizar seu monitor como um aplicativo de <strong>tela de luz ciano no celular</strong> (cyan screen light app) ajuda a renovar a iluminação do estúdio. Ao exibir uma <strong>tela ciano completa</strong> (full cyan screen) ou uma <strong>tela ciano em branco</strong> (blank cyan screen), você projeta uma iluminação fria incrível que funciona como <strong>efeito de luz ciano</strong> (cyan light effect) ou <strong>luz ciano para fotos</strong> (cyan light for photo).',
          'Além do visual moderno, o plano de fundo ciano é ótimo para testes e manutenção do monitor. A visualização de uma <strong>tela ciano claro</strong> (light cyan screen) ou <strong>tela ciano brilhante</strong> (bright cyan screen) facilita a verificação da coloração do painel LCD/OLED, identificação de pixels travados e limpeza da tela. Diante de panes que remetem à temida <strong>tela ciano da morte</strong> (cyan screen of death) ou distorções causadas por mau contato físico, você pode usar nosso <strong>fundo ciano</strong> (cyan background) seguro para avaliar se a sua tela exibe o canal RGB correto.',
          'Totalmente responsivo e prático, nosso site se ajusta a qualquer tamanho de smartphone ou monitor. Seja para usar uma <strong>tela de luz ciano no celular</strong> (cyan screen light on phone) para iluminar chamadas de vídeo, personalizar a sua <strong>tela ciano no iPhone</strong> (cyan screen iphone) para fotos conceituais, ou testar tons de <strong>tela ciano escuro</strong> (dark cyan screen) ou <strong>tela ciano quente</strong> (hot cyan screen), a nossa utilidade gera o <strong>código de cor da tela ciano</strong> (cyan screen color code) com precisão. Entre no modo tela cheia para obter luz constante.'
        ]
      },
      fr: {
        heading: 'Outil Écran Cyan en Ligne & Effets de Lumière d\'Ambiance',
        paragraphs: [
          'Pour les créateurs, vidéastes et designers en quête d\'une esthétique froide et moderne, notre utilitaire d\'<strong>écran cyan</strong> (cyan screen) est la solution de référence. Mettre en place un <strong>économiseur d\'écran cyan</strong> (cyan screen saver) ou transformer votre moniteur en application de <strong>lumière d\'écran cyan sur téléphone</strong> (cyan screen light app) apporte une douce nuance futuriste à votre setup. Projeter un <strong>écran cyan plein écran</strong> (full cyan screen) ou un <strong>écran cyan vide</strong> (blank cyan screen) permet de créer un <strong>effet de lumière cyan</strong> (cyan light effect) ou de servir de <strong>lumière cyan pour photo</strong> portrait.',
          'Au-delà de la création, cette surface colorée unie est un outil technique d\'analyse de dalle. L\'affichage d\'un <strong>écran cyan clair</strong> (light cyan screen) ou d\'un <strong>écran cyan vif</strong> (bright cyan screen) facilite l\'inspection de l\'uniformité du rétroéclairage et la recherche de sous-pixels bloqués. Plutôt que de paniquer face à un dysfonctionnement graphique tel qu\'un <strong>écran cyan de la mort</strong> (cyan screen of death) ou un câble mal branché, utilisez notre <strong>arrière-plan cyan</strong> (cyan background) sécurisé en ligne pour vérifier le bon comportement de votre équipement.',
          'Compatible avec tous les PC, tablettes et mobiles, notre plateforme s\'adapte à n\'importe quel ratio d\'aspect. Que vous recherchiez un éclairage avec une <strong>lumière cyan sur téléphone</strong> (cyan screen light on phone), que vous personnalisiez votre <strong>écran cyan sur iPhone</strong> (cyan screen iphone), ou vouliez basculer sur un <strong>écran cyan foncé</strong> (dark cyan screen) ou un <strong>écran cyan turquoise</strong> (hot cyan screen), notre outil respecte le <strong>code couleur d\'écran cyan</strong> (cyan screen color code) idéal en plein écran d\'un simple clic.'
        ]
      },
      de: {
        heading: 'Cyan Bildschirm Online-Tool & Kreative Lichteffekte',
        paragraphs: [
          'Für Webdesigner, Streamer und Fotografen, die nach einer modernen, kühlen Ästhetik suchen, ist unser <strong>Cyan Bildschirm</strong>-Werkzeug (cyan screen) die ideale Lösung. Die Einrichtung eines <strong>Cyan Bildschirmschoners</strong> (cyan screen saver) oder die Verwendung des Displays als <strong>Cyan Bildschirm-Taschenlampe</strong> (cyan screen light app) verleiht Ihrem Raum eine entspannende Atmosphäre. Ein <strong>Cyan Bildschirm in Vollbild</strong> (full cyan screen) oder ein <strong>leerer Cyan Bildschirm</strong> (blank cyan screen) erzeugt ein gleichmäßiges blau-grünes Licht, das sich hervorragend als <strong>Cyan Lichteffekt</strong> (cyan light effect) oder als <strong>Cyan Licht für Fotos</strong> (cyan light for photo) für Porträts eignet.',
          'Neben dekorativen Szenarien dient die Vollbildfläche auch zur praktischen Wartung von Monitoren. Mit der Anzeige eines <strong>hellcyanen Bildschirms</strong> (light cyan screen) oder eines <strong>hellen Cyan Bildschirms</strong> (bright cyan screen) prüfen Sie Displays auf Farbfehler, Lichthöfe und Pixelfehler. Falls Ihr Monitor plötzlich unerwartete Farbverfälschungen wie einen <strong>Cyan Bildschirm des Todes</strong> (cyan screen of death) oder HDMI-Verbindungsfehler aufweist, können Sie mit unserer Seite einen neutralen <strong>Cyan Hintergrund</strong> (cyan background) aufrufen, um die Displayfunktion einfach zu testen.',
          'Unsere Webseite läuft ohne Installation auf jedem Smartphone und Smart-TV. Egal, ob Sie ein <strong>Cyan Bildschirmlicht auf dem Smartphone</strong> (cyan screen light on phone) für Selfies nutzen, Ihren <strong>Cyan Bildschirm auf dem iPhone</strong> (cyan screen iphone) anpassen oder die Tiefe eines <strong>dunkelcyanen Bildschirms</strong> (dark cyan screen) oder <strong>leuchtenden Cyan Bildschirms</strong> (hot cyan screen) testen möchten – wir liefern Ihnen sofort den richtigen <strong>Farbcode für den Cyan Bildschirm</strong> (cyan screen color code). Schalten Sie für beste Ergebnisse einfach in den Vollbildmodus.'
        ]
      },
      hi: {
        heading: 'स्यान स्क्रीन ऑनलाइन टूल और लाइट इफेक्ट्स',
        paragraphs: [
          'क्रिएटर्स, फ़ोटोग्राफ़र्स और डिज़ाइनर्स को एक कूल और मॉडर्न बैकग्राउंड देने के लिए हमारा <strong>स्यान स्क्रीन</strong> (cyan screen) टूल एक बेहतरीन विकल्प है। कंप्यूटर पर <strong>स्यान स्क्रीन सेवर</strong> (cyan screen saver) सेट करना या अपने मॉनिटर को <strong>स्यान स्क्रीन लाइट ऐप</strong> (cyan screen light app) की तरह इस्तेमाल करना कमरे में सुंदर वाइब्स जोड़ता है। स्क्रीन पर <strong>पूरी स्यान स्क्रीन</strong> (full cyan screen) या <strong>खाली स्यान स्क्रीन</strong> (blank cyan screen) दिखाने से एक कोमल नीला-हरा प्रकाश उत्पन्न होता है, जो बेहतरीन <strong>स्यान लाइट इफेक्ट</strong> (cyan light effect) या पोर्ट्रेट के लिए <strong>फोटो के लिए स्यान लाइट</strong> (cyan light for photo) का काम करता है।',
          'कलात्मक उपयोगों के अलावा, यह स्क्रीन हार्डवेयर परीक्षण और सफ़ाई में बहुत सहायक है। <strong>हल्की स्यान स्क्रीन</strong> (light cyan screen) या <strong>चमकीली स्यान स्क्रीन</strong> (bright cyan screen) की मदद से आप डिस्प्ले के कलर चैनल्स की जांच कर सकते हैं और डेड पिक्सेल का पता लगा सकते हैं। यदि आपके मॉनिटर पर खराबी के कारण अचानक <strong>स्यान स्क्रीन ऑफ़ डेथ</strong> (cyan screen of death) जैसा कलर फिल्टर आ जाता है, तो हमारे सुरक्षित <strong>स्यान बैकग्राउंड</strong> (cyan background) का उपयोग करके आप मॉनिटर की स्क्रीन हेल्थ का सही निदान कर सकते हैं।',
          'स्मार्टफोन और टीवी स्क्रीन के लिए पूरी तरह उत्तरदायी (responsive), यह टूल हर डिवाइस पर काम करता है। चाहे आपको वीडियो कॉल के लिए **फोन पर स्यान रोशनी** (cyan screen light on phone) चाहिए, अपने **आईफोन स्यान स्क्रीन** (cyan screen iphone) का स्टाइल बदलना हो, या फिर **डार्क स्यान स्क्रीन** (dark cyan screen) और **हॉट स्यान स्क्रीन** (hot cyan screen) रंगों का परीक्षण करना हो, यह टूल आपको सही **स्यान स्क्रीन कलर कोड** (cyan screen color code) प्रदान करता है। पूर्णप्रकाश अनुभव के लिए फुलस्क्रीन बटन दबाएं।'
        ]
      },
      ja: {
        heading: 'シアン画面（Cyan Screen）オンラインツールと主な用途',
        paragraphs: [
          'クリエイター、写真家、デザイナー向けに涼しげでテクノロジー感のあるデザインを提供する <strong>シアン画面</strong>（cyan screen）ツールです。 <strong>シアンのスクリーンセーバー</strong>（cyan screen saver）を起動したり、お使いのディスプレイを <strong>シアンスクリーンライトアプリ</strong>（cyan screen light app）のように使用してお部屋の雰囲気を演出できます。 <strong>全画面シアン画面</strong>（full cyan screen）や <strong>空白のシアン画面</strong>（blank cyan screen）を映すことで、美しい <strong>シアン光効果</strong>（cyan light effect）や撮影時の被写体を照らす <strong>撮影用シアンライト</strong>（cyan light for photo）として機能します。',
          'アート用途に加え、液晶モニターの検査やメンテナンスにも単色シアンは欠かせません。 <strong>薄いシアンの画面</strong>（light cyan screen）や <strong>鮮やかなシアン의画面</strong>（bright cyan screen）を表示することで、液晶パネル의カラーバランスを診査し、ドット抜けチェックや画面掃除を快適に行えます。PCのOSクラッシュを疑う <strong>シアンスクリーンオブデス</strong>（cyan screen of death）や液晶ケーブルの接続不良が発生した際、当サイトの安全な <strong>シアンの背景</strong>（cyan background）を表示させて正常に発色するか検証できます。',
          'レスポンシブWebデザインに対応し、どんなスマホやブラウザでもワンタップで全画面表示されます。ビデオ通話のライティングとして <strong>スマホ用シアンライト</strong>（cyan screen light on phone）を使用したり、 <strong>iPhoneのシアン画面</strong>（cyan screen iphone）チェックを行ったり、またコントラストの効いた <strong>濃いシアンの画面</strong>（dark cyan screen）やビビッドな <strong>ホットシアン画面</strong>（hot cyan screen）に切り替えるなど、お好みの <strong>シアン画面カラーコード</strong>（cyan screen color code）を活用してください。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'brown-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Brown Screen Online Tool & Cozy Ambient Aesthetics',
        paragraphs: [
          'A solid <strong>brown screen</strong> (brown screen) is one of the most effective tools for reducing blue light exposure and calming a scattered mind. Setting up a warm <strong>brown screen saver</strong> (brown screen saver) or downloading a relaxing <strong>brown screen wallpaper</strong> (brown screen wallpaper) helps turn your device into a cozy, earthy light source. When you need to take a break from the harshness of a standard <strong>white screen</strong> (white screen) or the total absence of light from a <strong>black screen</strong> (black screen), our full brown canvas delivers the perfect <strong>brown screen aesthetic</strong> (brown screen aesthetic) for your home office or bedroom.',
          'For screen testing and creative photography, this solid earth tone provides optimal warm lighting. From displaying a subtle <strong>light brown screen</strong> (light brown screen) to checking contrast on a <strong>dark brown screen</strong> (dark brown screen), our utility helps you analyze display color consistency and warm up your environment. Graphic designers and artists also use our system to simulate color backdrops analogous to <strong>brown screen printing equipment</strong> (brown screen printing equipment) or to check how details render against natural shades. It\'s an essential resource for photographers looking for sepia fill light or vintage photography lighting.',
          'Running natively in your web browser, our app supports all operating systems. If you encounter monitor coloring conflicts like a weird <strong>brown screen windows</strong> (brown screen windows) tint, or fear a hardware defect like an undocumented <strong>brown screen of death</strong> (brown screen of death), you can load our clean, full-screen color field to verify that your panel is functioning correctly. Switch between different brightness levels or copy precise HEX and RGB color values in one click to customize your screen experience.'
        ]
      },
      es: {
        heading: 'Herramienta de Pantalla Marrón y Efecto de Iluminación de Ambiente',
        paragraphs: [
          'Esta herramienta de <strong>pantalla marrón</strong> (brown screen) es ideal para quienes buscan descansar la vista del brillo agresivo de una <strong>pantalla blanca</strong> (white screen) o prefieren algo menos oscuro que una <strong>pantalla negra</strong> (black screen). Puedes usarla como un <strong>salvapantallas marrón</strong> (brown screen saver) personalizado o poner un <strong>fondo de pantalla marrón</strong> (brown screen wallpaper) para crear una <strong>estética de pantalla marrón</strong> (brown screen aesthetic) acogedora. Este color terroso natural evoca tranquilidad y ayuda a relajarte.',
          'En el ámbito técnico y del diseño gráfico, la pantalla unicolor te permite simular tonalidades tipo <strong>equipamiento de serigrafía marrón</strong> (brown screen printing equipment) o probar contrastes. El panel te permite seleccionar entre una <strong>pantalla marrón claro</strong> (light brown screen) y una <strong>pantalla marrón oscuro</strong> (dark brown screen) para realizar test de color en monitores o configurar luces cálidas de relleno sepia para fotografía creativa y retratos de estilo retro.',
          'Funciona sin problemas como una utilidad de <strong>pantalla marrón en Windows</strong> (brown screen windows) u otros sistemas operativos. Si crees que tu monitor tiene problemas de hardware debido a una inexplicable <strong>pantalla marrón de la muerte</strong> (brown screen of death), puedes invocar nuestro fondo a pantalla completa para diagnosticar el panel. Ajusta el brillo al instante para una comodidad óptima.'
        ]
      },
      pt: {
        heading: 'Tela Marrom Online: Iluminação Terrosa e Calma Visual',
        paragraphs: [
          'A nossa utilidade de <strong>tela marrom</strong> (brown screen) oferece o ambiente perfeito para acalmar a visão em comparação com a luz excessiva de uma <strong>tela branca</strong> (white screen) ou a escuridão total de uma <strong>tela preta</strong> (black screen). Ativar um <strong>protetor de tela marrom</strong> (brown screen saver) ou exibir um <strong>papel de parede de tela marrom</strong> (brown screen wallpaper) traz uma <strong>estética de tela marrom</strong> (brown screen aesthetic) quente e confortável aos seus aparelhos antes de adormecer.',
          'Para fotógrafos e profissionais criativos, essa cor sólida auxilia como iluminação quente em estúdio e na calibração de displays. Ajustar o monitor para uma <strong>tela marrom claro</strong> (light brown screen) ou verificar a retenção com uma <strong>tela marrom escuro</strong> (dark brown screen) torna a inspeção muito mais rápida. O painel também serve como referência visual simulando <strong>equipamentos de serigrafia marrom</strong> (brown screen printing equipment) ou paletas no design moderno.',
          'Quer você use a <strong>tela marrom no Windows</strong> (brown screen windows) ou no celular, o aplicativo se adapta perfeitamente sem instalar nada. Em situações em que ocorrem distorções cromáticas ou o monitor exibe um sinal de falha física semelhante a uma <strong>tela marrom da morte</strong> (brown screen of death), a nossa página unicolor serve para testar as cores e garantir a sanidade da tela de forma segura.'
        ]
      },
      fr: {
        heading: 'Écran Marron en Ligne & Outils d\'Ambiance Chaleureuse',
        paragraphs: [
          'Cette application d\'<strong>écran marron</strong> (brown screen) propose un environnement visuel doux et terreux. Que vous souhaitiez vous reposer de la lumière vive d\'un <strong>écran blanc</strong> (white screen) ou de l\'obscurité complète d\'un <strong>écran noir</strong> (black screen), lancer un <strong>économiseur d\'écran marron</strong> (brown screen saver) ou afficher un <strong>fond d\'écran marron</strong> (brown screen wallpaper) permet de configurer une <strong>esthétique d\'écran marron</strong> (brown screen aesthetic) apaisante dans votre pièce ou votre espace de travail.',
          'Cet outil performatif est également convoité pour le calibrage et la prise de vue. Vous pouvez basculer d\'un <strong>écran marron clair</strong> (light brown screen) à un <strong>écran marron foncé</strong> (dark brown screen) pour tester vos dalles ou générer une lumière chaude sépia. Les designers peuvent s\'en inspirer pour des projets simulant des <strong>équipements de sérigraphie marron</strong> (brown screen printing equipment) ou vérifier l\'harmonie des teintes naturelles neutres.',
          'Totalement responsive, notre page s\'exécute parfaitement comme <strong>écran marron sur Windows</strong> (brown screen windows) ou macOS. Si votre système présente des anomalies graphiques évoquant un <strong>écran marron de la mort</strong> (brown screen of death), lancez notre outil plein écran pour diagnostiquer le bon état de marche du matériel et ajustez la luminosité d\'un simple glissement.'
        ]
      },
      de: {
        heading: 'Brauner Bildschirm Online-Tool & Erdige Lichtakzente',
        paragraphs: [
          'Unser <strong>brauner Bildschirm</strong> (brown screen) bietet eine hervorragende Möglichkeit, die Augen vor der Helligkeit eines <strong>weißen Bildschirms</strong> (white screen) oder der Dunkelheit eines <strong>schwarzen Bildschirms</strong> (black screen) zu schonen. Mit der Aktivierung eines <strong>braunen Bildschirmschoners</strong> (brown screen saver) oder der Verwendung eines <strong>braunen Bildschirm-Hintergrundbilds</strong> (brown screen wallpaper) schaffen Sie eine gemütliche <strong>braune Bildschirm-Ästhetik</strong> (brown screen aesthetic) für Ihr Smartphone oder Arbeitszimmer.',
          'Im professionellen Bereich hilft das einfarbige Werkzeug beim Testen von Displays und bei der Lichtgestaltung. Durch das Umschalten zwischen einem <strong>hellbraunen Bildschirm</strong> (light brown screen) und einem <strong>dunkelbraunen Bildschirm</strong> (dark brown screen) können Sie Farbstiche prüfen. Zudem nutzen Designer die Farbfläche zur Simulation von <strong>braunen Siebdruckgeräten</strong> (brown screen printing equipment) oder für warme Sepia-Fotobeleuchtung im Fotostudio.',
          'Unabhängig davon, ob Sie den <strong>braunen Bildschirm unter Windows</strong> (brown screen windows) oder auf einem Smart-TV aufrufen: Sollte Ihr Monitor Anzeichen von Grafikfehlern wie einen <strong>braunen Bildschirm des Todes</strong> (brown screen of death) aufweisen, hilft Ihnen unser Online-Tool durch die Anzeige einer reinen Vollbildfarbe bei der schnellen Fehlersuche.'
        ]
      },
      hi: {
        heading: 'भूरी स्क्रीन (Brown Screen) ऑनलाइन टूल और आरामदायक वातावरण',
        paragraphs: [
          'यह <strong>भूरी स्क्रीन</strong> (brown screen) टूल आंखों को <strong>सफेद स्क्रीन</strong> (white screen) की तेज चमक या <strong>काली स्क्रीन</strong> (black screen) के घने अंधेरे से राहत देने का बेहतरीन जरिया है। अपने लैपटॉप पर <strong>ब्राउन स्क्रीन सेवर</strong> (brown screen saver) सेट करने या शांत <strong>ब्राउन स्क्रीन वॉलपेपर</strong> (brown screen wallpaper) लगाने से आपका डिवाइस एक सुंदर और कोजी <strong>ब्राउन स्क्रीन एस्थेटिक</strong> (brown screen aesthetic) में बदल जाता है, जो शाम के समय बहुत आरामदायक होता है।',
          'फोटोग्राफी और स्क्रीन टेस्टिंग के लिए यह एक शानदार उपयोगिता है। <strong>हल्की भूरी स्क्रीन</strong> (light brown screen) और <strong>डार्क ब्राउन स्क्रीन</strong> (dark brown screen) के बीच टॉगल करके आप डिस्प्ले के कलर कंट्रास्ट और ब्राइटनेस की जांच कर सकते हैं। इसके अलावा, डिजाइनर इसका उपयोग <strong>भूरी स्क्रीन प्रिंटिंग उपकरण</strong> (brown screen printing equipment) की रंगत देखने या अपने सेपिया टोन वाले फोटो बैकग्राउंड को बेहतर बनाने में करते हैं।',
          'यह टूल बिना किसी डाउनलोड के सीधे आपके ब्राउज़र में चलता है। यदि आपको अपने सिस्टम पर <strong>विंडोज ब्राउन स्क्रीन</strong> (brown screen windows) का अनुभव होता है या कोई गंभीर **ब्राउन स्क्रीन ऑफ डेथ** (brown screen of death) एरर का अंदेशा है, तो आप हमारी फुलस्क्रीन रंगीन सतह का उपयोग करके मॉनिटर के पिक्सल और हार्डवेयर का सही परीक्षण कर सकते हैं।'
        ]
      },
      ja: {
        heading: '茶色画面（Brown Screen）オンラインツールと癒しの光',
        paragraphs: [
          '当サイトの <strong>茶色画面</strong>（brown screen）ツールは、眩しい <strong>白色画面</strong>（white screen）や完全な暗闇である <strong>黒色画面</strong>（black screen）とは異なり、コントラストの低い優しい暖色光を提供します。便利な <strong>茶色のスクリーンセーバー</strong>（brown screen saver）として実行したり、心休まる <strong>茶色画面の壁紙</strong>（brown screen wallpaper）を表示して、スマホやPCにレトロで温かみのある <strong>茶色画面のアエステティック</strong>（brown screen aesthetic）を演出するのに最適です。',
          '写真撮影やディスプレイチェックにおいても、このベタ塗り画面は活躍します。 <strong>薄い茶色の画面</strong>（light brown screen）から <strong>濃い茶色の画面</strong>（dark brown screen）まで調整して、輝度テストや演色性のチェックが可能です。また、 <strong>茶色のシルクスクリーン印刷機器</strong>（brown screen printing equipment）の色合いシミュレーションや、ノスタルジックなセピア調の間接照明としても利用されています。',
          'このブラウザツールは、 <strong>Windowsの茶色画面</strong>（brown screen windows）をはじめ、各種OSやタブレットに対応しています。一時的なハードトラブルで <strong>茶色画面の死</strong>（brown screen of death）と呼ばれるような異常発色が生じた場合でも、本ツールの無地スクリーンを表示することで、ディスプレイ本体の故障かOS側の問題かを簡単に見極めることができます。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'grey-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Grey Screen Online Tool & Digital Uniformity Tests',
        paragraphs: [
          'Whether you are examining a new monitor or troubleshooting a display glitch, using a <strong>grey screen</strong> online tool is a simple and effective diagnostic practice. A solid <strong>blank grey screen</strong> or <strong>full grey screen</strong> is a neutral canvas that doesn\'t distract the eyes, making it ideal for checking panel color accuracy, display uniformity, and visual temperature. If you want to run a quick test, you can set your output to a <strong>50% gray screen</strong> (HEX #808080) to inspect mid-tone values, or project a neutral <strong>grey screen for projector</strong> calibration, which improves contrast accuracy in home theatres. Our free web utility runs instantly in any browser on a <strong>grey screen pc</strong>, <strong>grey screen laptop</strong>, or <strong>grey screen TV</strong> without needing to download large video files.',
          'For specialized diagnostics, conducting a <strong>grey screen test</strong> helps search for hardware anomalies. A <strong>grey uniformity test</strong> is the industry standard for evaluating the dreaded dirty screen effect (DSE) on TVs and monitors. You can easily switch to a <strong>dark grey screen</strong> when performing a <strong>grey screen test OLED</strong> or a general <strong>OLED burn-in test</strong> to see if static elements have permanently affected the organic light-emitting details. If you have an Apple smartphone and want to run a <strong>grey screen for burn in test iphone</strong>, or if you are dealing with a sudden <strong>grey screen iphone</strong> lock or <strong>iphone grey screen</strong> glitch, setting our tool to fullscreen can help you determine if it is a physical display error or a simple software calibration issue.',
          'Aside from testing, this tool is highly useful for multimedia creation and system testing. Film editors and digital artists frequently run a <strong>gray scale test</strong> or use a <strong>grey screen vfx</strong> layer as a compositing element to balance light values. If you are running into startup crashes, such as a <strong>grey screen windows 11</strong>, a <strong>grey screen windows 10</strong> freeze, or a <strong>grey screen mac</strong> startup issue, loading our web tool in fullscreen allows you to compare normal color outputs and trace connections. Toggle the fullscreen mode, adjust the brightness slider, and select the exact tone to match your needs.'
        ]
      },
      es: {
        heading: 'Herramienta de Pantalla Gris Online y Pruebas de Uniformidad',
        paragraphs: [
          'Ya sea que estés inspeccionando un monitor nuevo o diagnosticando un fallo de visualización, utilizar una <strong>pantalla gris</strong> (grey screen) online es una forma práctica y económica. Una <strong>pantalla gris en blanco</strong> (blank grey screen) o <strong>pantalla gris completa</strong> (full grey screen) proporciona una visualización neutra y uniforme, lo que la hace ideal para evaluar la precisión del color y el brillo. Puedes elegir una <strong>pantalla gris al 50%</strong> (50% gray screen) con el HEX #808080 para comprobar tonos grises medios, o configurar una <strong>pantalla gris para proyector</strong> (grey screen for projector) para equilibrar el contraste en salas oscuras. Nuestra herramienta se ejecuta al instante en cualquier navegador de tu <strong>pantalla gris en pc</strong> (grey screen pc), <strong>pantalla gris en portátil</strong> (grey screen laptop) o <strong>pantalla gris en TV</strong> (grey screen TV) sin descargas.',
          'Para evaluaciones más avanzadas, realizar una <strong>prueba de pantalla gris</strong> (grey screen test) te ayuda a encontrar defectos de luz. Una <strong>prueba de uniformidad gris</strong> (grey uniformity test) es el método estándar para probar el efecto de pantalla sucia en pantallas LCD y LED. También puedes seleccionar una <strong>pantalla gris oscuro</strong> (dark grey screen) para realizar una <strong>prueba de pantalla gris OLED</strong> (grey screen test OLED) o un <strong>prueba de quemado OLED</strong> (OLED burn-in test) para verificar si hay imágenes retenidas. Si buscas una <strong>pantalla gris para prueba de quemado en iphone</strong> (grey screen for burn in test iphone) o tu teléfono presenta un fallo de <strong>pantalla gris iphone</strong> (grey screen iphone) o <strong>iphone pantalla gris</strong> (iphone grey screen), nuestra web te permite rellenar la pantalla para comprobar si es un problema físico o de software.',
          'Además de los diagnósticos, esta página es de gran utilidad para creadores audiovisuales y efectos visuales. Los editores usan una <strong>prueba de escala de grises</strong> (gray scale test) o un fondo de <strong>pantalla gris vfx</strong> (grey screen vfx) para pruebas de rango dinámico. Si estás intentando solucionar fallos del sistema como una <strong>pantalla gris en windows 11</strong> (grey screen windows 11), una <strong>pantalla gris en windows 10</strong> (grey screen windows 10) o una pantalla bloqueada con <strong>pantalla gris en mac</strong> (grey screen mac), nuestra web te permite verificar la integridad visual con controles de brillo ajustables en pantalla completa.'
        ]
      },
      pt: {
        heading: 'Ferramenta de Tela Cinza Online e Testes de Uniformidade',
        paragraphs: [
          'Seja para avaliar um monitor novo ou diagnosticar algum problema físico, usar uma <strong>tela cinza</strong> (grey screen) online é um teste prático. Uma <strong>tela cinza em branco</strong> (blank grey screen) ou <strong>tela cinza completa</strong> (full grey screen) serve como um campo de cor neutro, perfeito para verificar a calibragem do brilho. Você pode selecionar a <strong>tela cinza 50%</strong> (50% gray screen) com código HEX #808080 para conferir tons intermediários, ou usar a <strong>tela cinza para projetor</strong> (grey screen for projector) para melhorar a precisão em projeções de vídeo. Nosso site roda direto no navegador, funcionando instantaneamente em seu navegador de <strong>tela cinza no pc</strong> (grey screen pc), <strong>tela cinza no notebook</strong> (grey screen laptop) ou <strong>tela cinza na TV</strong> (grey screen TV).',
          'Para diagnósticos detalhados, rodar um <strong>teste de tela cinza</strong> (grey screen test) é muito útil. O <strong>teste de referência de uniformidade cinza</strong> (grey uniformity test) serve para avaliar problemas de efeito de tela suja (DSE) em novos displays. Você também pode escurecer a cor para obter uma <strong>tela cinza escuro</strong> (dark grey screen) e fazer o <strong>teste de tela cinza OLED</strong> (grey screen test OLED) ou um <strong>teste de burn-in OLED</strong> (OLED burn-in test) contra retenção de imagem. Se precisar de uma <strong>tela cinza para teste de burn-in no iphone</strong> (grey screen for burn in test iphone) ou estiver investigando um erro de <strong>tela cinza no iphone</strong> (grey screen iphone) ou <strong>iphone tela cinza</strong> (iphone grey screen) travado, nossa plataforma ajuda a identificar defeitos.',
          'Além de diagnósticos de pixels, esta página serve de apoio para produtores de mídia e compositores de vídeo. Editores utilizam o <strong>teste de escala de cinza</strong> (gray scale test) e camadas de <strong>tela cinza vfx</strong> (grey screen vfx) para ajustar a iluminação de cenas. Se você está enfrentando problemas de inicialização no computador como **tela cinza no windows 11** (grey screen windows 11), **tela cinza no windows 10** (grey screen windows 10) ou uma inconveniente **tela cinza no mac** (grey screen mac), esse utilitário de tela cheia ajuda a isolar a integridade cromatico dos cabos de forma ágil.'
        ]
      },
      fr: {
        heading: 'Outil Écran Gris en Ligne & Tests d\'Uniformité de Dalle',
        paragraphs: [
          'Que vous inspectiez un nouveau moniteur ou résolviez une anomalie d\'affichage, utiliser un <strong>écran gris</strong> (grey screen) en ligne est une méthode de diagnostic efficace. Un <strong>écran gris vide</strong> (blank grey screen) ou <strong>écran gris plein écran</strong> (full grey screen) offre une surface neutre idéale pour vérifier la luminance et l\'équilibre des teintes. Vous pouvez choisir un <strong>écran gris 50%</strong> (50% gray screen) avec le code HEX #808080 pour évaluer les tons moyens, ou projeter un <strong>écran gris pour projecteur</strong> (grey screen for projector) afin d\'ajuster le taux de contraste de votre home cinéma. Notre site fonctionne sur n\'importe quel ordinateur avec <strong>écran gris pc</strong> (grey screen pc), <strong>écran gris portable</strong> (grey screen laptop) ou <strong>écran gris TV</strong> (grey screen TV).',
          'Pour des tests plus poussés, le lancement d\'un <strong>test écran gris</strong> (grey screen test) permet d\'identifier les variations de rétroéclairage. Effectuer un <strong>test d\'uniformité gris</strong> (grey uniformity test) est la meilleure façon de repérer l\'effet d\'écran sale sur les dalles LCD/LED. Vous pouvez également basculer sur un <strong>écran gris foncé</strong> (dark grey screen) afin d\'exécuter un <strong>test écran gris OLED</strong> (grey screen test OLED) ou un <strong>test de burn-in OLED</strong> (OLED burn-in test). Pour un <strong>écran gris pour test burn in iphone</strong> (grey screen for burn in test iphone) ou pour diagnostiquer un dysfonctionnement d\'un <strong>écran gris iphone</strong> (grey screen iphone) ou d\'un <strong>iphone écran gris</strong> (iphone écran gris), notre outil plein écran vous permet d\'inspecter chaque zone.',
          'Outre les tests matériels, cet outil est précieux pour les spécialistes des effets spéciaux et du montage. Les graphistes effectuent un <strong>test d\'échelle de gris</strong> (gray scale test) ou intègrent un <strong>écran gris vfx</strong> (grey screen vfx) pour harmoniser les ombres de leurs créations. Si vous êtes confronté à des bugs de démarrage du système d\'exploitation comme un <strong>écran gris windows 11</strong> (grey screen windows 11), un <strong>écran gris windows 10</strong> (grey screen windows 10) ou un <strong>écran gris mac</strong> (grey screen mac), notre application en ligne vous permet d\'analyser le signal de la dalle en plein écran.'
        ]
      },
      de: {
        heading: 'Grauer Bildschirm Online-Tool & Display-Gleichmäßigkeitstests',
        paragraphs: [
          'Egal, ob Sie einen neuen Monitor testen oder Bildfehler untersuchen möchten, die Nutzung von einem <strong>grauen Bildschirm</strong> (grey screen) online ist eine ideale Praxis. Ein <strong>leerer grauer Bildschirm</strong> (blank grey screen) oder <strong>grauer bildschirm vollbild</strong> (full grey screen) fungiert als farbneutraler Hintergrund, mit dem Sie Unregelmäßigkeiten des Panels analysieren können. Sie können einen <strong>50% grauen Bildschirm</strong> (50% gray screen) mit dem HEX-Wert #808080 wählen, um mittlere Graustufen zu überprüfen, oder einen <strong>grauen bildschirm für beamer</strong> (grey screen for projector) projizieren, um Kontrastwerte optimal einzustellen. Unser Tool erfordert keine Software-Downloads und funktioniert auf jedem <strong>grauen bildschirm pc</strong> (grey screen pc), <strong>grauen bildschirm laptop</strong> (grey screen laptop) und <strong>grauen bildschirm TV</strong> (grey screen TV).',
          'Für detaillierte Hardwareprüfungen hilft Ihnen ein gezielter <strong>grauer bildschirm test</strong> (grey screen test). Eine <strong>graue gleichmäßigkeitsprüfung</strong> (grey uniformity test) ist die gängigste Methode zur Ermittlung des Dirty-Screen-Effekts auf Fernsehern und Bildschirmen. Sie können auch zu einem <strong>dunklen grauen Bildschirm</strong> (dark grey screen) wechseln, um einen <strong>grauen bildschirm test OLED</strong> (grey screen test OLED) oder einen <strong>OLED einbrenntest</strong> (OLED burn-in test) durchzuführen, um zu prüfen, ob Pixel Schaden erlitten haben. Falls Sie einen <strong>grauen bildschirm für einbrenntest iphone</strong> (grey screen for burn in test iphone) benötigen oder Ihr Smartphone einen Fehler wie einen <strong>grauen bildschirm iphone</strong> (grey screen iphone) oder <strong>iphone grauen bildschirm</strong> (iphone grauen bildschirm) anzeigt, bietet diese Webseite eine bequeme Diagnose.',
          'Abseits von Paneltests ist unser Tool eine wichtige Hilfe bei VFX-Arbeiten und Kalibrierungen. Videoeditoren nutzen einen <strong>graustufentest</strong> (gray scale test) oder einen <strong>grauen bildschirm vfx</strong> (grey screen vfx) als neutralen Luminanzbezug bei der Farbkorrektur. Falls Sie Probleme beim Laden Ihres Betriebssystems untersuchen möchten, wie einen <strong>grauen bildschirm windows 11</strong> (grey screen windows 11), einen Systemfehler mit einem <strong>grauen bildschirm windows 10</strong> (grey screen windows 10) oder einen gesperrten <strong>grauen bildschirm mac</strong> (grey screen mac), können Sie mit unserer Plattform die Fehlerquellen eingrenzen.'
        ]
      },
      hi: {
        heading: 'ग्रे स्क्रीन ऑनलाइन टूल और डिस्प्ले यूनिफॉर्मिटी टेस्ट',
        paragraphs: [
          'चाहे आप एक नया डिस्प्ले टेस्ट कर रहे हों या किसी स्क्रीन दोष की जांच कर रहे हों, एक ऑनलाइन **ग्रे स्क्रीन** (grey screen) का उपयोग करना एक सामान्य और प्रभावी तरीका है। एक **खाली ग्रे स्क्रीन** (blank grey screen) या **फुल ग्रे स्क्रीन** (full grey screen) एक तटस्थ माध्यम है जिस पर आंखें थकती नहीं हैं, जो डिस्प्ले यूनिफॉर्मिटी और ब्राइटनेस की जांच के लिए आदर्श है। आप मध्यम ग्रे स्तर की जांच के लिए **50% ग्रे स्क्रीन** (50% gray screen) या होम थिएटर सेटअप में कंट्रास्ट सुधारने के लिए **प्रोजेक्टर के लिए ग्रे स्क्रीन** (grey screen for projector) सेट कर सकते हैं। यह टूल सीधे ब्राउज़र में चलता है और हर **ग्रे स्क्रीन पीसी** (grey screen pc), **ग्रे स्क्रीन लैपटॉप** (grey screen laptop), या **ग्रे स्क्रीन टीवी** (grey screen TV) पर काम करता है।',
          'विशेष हार्डवेयर जांच के लिए, एक व्यवस्थित **ग्रे स्क्रीन टेस्ट** (grey screen test) चलाना काफी मददगार होता है। टीवी और मॉनिटर पर डर्ट स्क्रीन इफेक्ट (DSE) की पुष्टि करने के लिए **ग्रे यूनिफॉर्मिटी टेस्ट** (grey uniformity test) एक बुनियादी परीक्षण है। आप कंट्रास्ट देखने के लिए एक **डार्क ग्रे स्क्रीन** (dark grey screen) का चयन कर सकते हैं और **ओएलईडी ग्रे स्क्रीन टेस्ट** (grey screen test OLED) या **ओएलईडी बर्न-इन टेस्ट** (OLED burn-in test) चला सकते हैं। यदि आप **आईफोन के लिए ग्रे स्क्रीन बर्न इन टेस्ट** (grey screen for burn in test iphone) करना चाहते हैं, या फोन में आने वाली **ग्रे स्क्रीन आईफोन** (grey screen iphone) या **आईफोन ग्रे स्क्रीन** (iphone grey screen) की खराबी की जांच करना चाहते हैं, तो हमारा टूल काफी उपयोगी है।',
          'डिस्प्ले टेस्ट के अलावा, यह टूल वीडियो संपादन और फिल्म प्रेमियों के लिए एक महत्वपूर्ण सहायक है। एडिटिंग विशेषज्ञ रोशनी और छाया को संतुलित करने के लिए **ग्रे स्केल टेस्ट** (gray scale test) या **ग्रे स्क्रीन वीएफएक्स** (grey screen vfx) प्रभाव का उपयोग करते हैं। यदि आप अपने कंप्यूटर के बूट सिस्टम जैसे **ग्रे स्क्रीन विंडोज 11** (grey screen windows 11), **ग्रे स्क्रीन विंडोज 10** (grey screen windows 10) एरर, या एप्पल के **ग्रे स्क्रीन मैक** (grey screen mac) लॉक की जांच कर रहे हैं, तो फुलस्क्रीन विकल्प की मदद से इसे आसानी से जांचा जा सकता है।'
        ]
      },
      ja: {
        heading: '灰色の画面 オンラインツールとディスプレイ均一性テスト',
        paragraphs: [
          '新しいディスプレイの検証 biographical 液晶の表示チェックでも、オンラインで **灰色の画面** (grey screen) を使用することは非常にシンプルで効果的です。**空白の灰色の画面** (blank grey screen) や **灰色の画面 全画面** (full grey screen) は目に優しい中間色のアートであり、パネルの視野角や色分布を評価するのに優れています。中間色を細かくチェックするために **50% 灰色の画面** (50% gray screen) をロードしたり、プロジェクションのコントラスト調律用として **灰色の画面 プロジェクター** (grey screen for projector) を投影することも可能です。このツールは **灰色の画面 pc** (grey screen pc)、**灰色の画面 ノートパソコン** (grey screen laptop)、または **灰色の画面 テレビ** (grey screen TV) で動作します。',
          'より専門的な検品においては、**灰色の画面 テスト** (grey screen test) がハードウェア異常の識別に効果的です。ディスプレイのムラや影を確かめられる **灰色均一性テスト** (grey uniformity test) は液晶の品質管理に最も利用されています。**濃い灰色の画面** (dark grey screen) を表示することで、**灰色の画面 テスト OLED** (grey screen test OLED) や **OLED焼き付きテスト** (OLED burn-in test) を行い、バックライト漏れをより正確に検査できます。**灰色の画面 焼き付きテスト iphone** (grey screen for burn in test iphone) の動作確認や、一時的なバグである **灰色の画面 iphone** (grey screen iphone) や **iphone 灰色の画面** (iphone 灰色の画面) の画面障害の切り分けにも役立ちます。',
          'カラーテスト目的以外では、ビデオ編集やVFX制作での適応検査ツールとしても利用されています。映像の明暗差の検証には **グレースケールテスト** (gray scale test) や **灰色の画面 vfx** (grey screen vfx) の合成用カラーレイアウトが用いられます。また、OS起動時フリーズの **灰色の画面 windows 11** (grey screen windows 11)、**灰色の画面 windows 10** (grey screen windows 10)、あるいは **灰色の画面 mac** (grey screen mac) などの液晶異常時において、ハード自体の表示能力を本ツールで正確に測定することができます。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'rgb-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'RGB Screen Test Online: Free Subpixel & Color Calibration',
        paragraphs: [
          'If you need to analyze the color replication or inspect subpixels on your monitor, mobile device, or TV, launching our <strong>rgb screen test</strong> is a highly effective diagnostic route. Displays utilize combined red, green, and blue light components to produce the millions of colors you see daily. Running a dedicated <strong>rgb screen</strong> full-screen layout allows you to isolate each color channel singly to identify defects. Designers, hardware testers, and casual users utilize this utility as a quick <strong>rgb color screen</strong> preview to inspect subpixel health, detect stuck subpixels, and evaluate color uniformity without distraction.',
          'A clean <strong>full screen rgb</strong> setup is invaluable when verifying that a new display does not feature manufacturing faults. You can run an <strong>rgb dead pixel test</strong> or a thorough <strong>rgb backlight check</strong> along the margins of your panel to find any uneven luminance. By using our utility as a client-side <strong>rgb display test</strong>, developers and photographers can match precise primary shades, calibrate white points, or project an adjustable <strong>rgb screen light</strong> to brighten spaces. With instant keyboard controls, you can toggle between solid red, green, blue, or custom color screens in seconds.',
          'Our web-based <strong>screen rgb test online</strong> requires no plugin installations, ensuring immediate load times and maximum performance. When carrying out <strong>rgb screen calibration</strong>, toggle your web browser to fullscreen mode so that navigation tabs and bookmarks do not distort your measurements. Creative professionals can also use our <strong>rgb screen wallpaper</strong> generator to download high-resolution default color palettes or solid primary channel assets. Add this simple, robust <strong>monitor rgb test</strong> to your digital diagnostic toolkit today.'
        ]
      },
      es: {
        heading: 'Prueba de Pantalla RGB Online: Calibración y Test de Subpíxeles',
        paragraphs: [
          'Si deseas evaluar la calidad de la pantalla de tu monitor, televisor o smartphone, utilizar una <strong>prueba de pantalla rgb</strong> (rgb screen test) online es un método de diagnóstico ideal. Las pantallas combinan los tres canales primarios para generar imágenes. Al ejecutar una <strong>pantalla rgb</strong> (rgb screen) sólida en pantalla completa, puedes aislar cada canal de color para comprobar la uniformidad del panel. Editores de video, diseñadores y técnicos utilizan esta herramienta como una rápida <strong>pantalla de color rgb</strong> (rgb color screen) para detectar fallos en la fidelidad.',
          'Tener una utilidad de <strong>rgb en pantalla completa</strong> (full screen rgb) es indispensable al comprar un nuevo monitor para verificar que no tenga defectos físicos de fábrica. Puedes realizar una <strong>prueba de píxeles muertos rgb</strong> (rgb dead pixel test) o una <strong>comprobación de retroiluminación rgb</strong> (rgb backlight check) para detectar fugas de luz. Con nuestro <strong>test de display rgb</strong> (rgb display test), puedes calibrar los puntos blancos o proyectar una <strong>luz de pantalla rgb</strong> (rgb screen light) para iluminar videollamadas con tonos puros. Alterna entre canales primarios y limpia tu pantalla fácilmente.',
          'Nuestra <strong>prueba de rgb en pantalla online</strong> (screen rgb test online) se ejecuta por completo en el navegador del cliente. Al realizar una <strong>calibración de pantalla rgb</strong> (rgb screen calibration), activa el modo de pantalla completa para evitar que los menús del navegador afecten tus pruebas. Los creadores también pueden usar nuestro generador para descargar diseños de <strong>fondo de pantalla rgb</strong> (rgb screen wallpaper) en alta definición o usar la herramienta como una completa <strong>prueba rgb de monitor</strong> (monitor rgb test) gratuita.'
        ]
      },
      pt: {
        heading: 'Teste de Tela RGB Online: Calibração de Subpixels e Canais',
        paragraphs: [
          'Para inspecionar a reprodução de cores cromáticas e testar subpixels em sua TV, monitor ou smartphone, rodar nosso <strong>teste de tela rgb</strong> (rgb screen test) é o método mais ágil. Os displays digitais utilizam luzes vermelhas, verdes e azuis integradas para desenhar qualquer imagem. Exibir uma <strong>tela rgb</strong> (rgb screen) em tela cheia permite isolar cada canal separadamente para buscar imperfeições. Designers teatrais, técnicos de hardware e entusiastas usam esta <strong>tela de cor rgb</strong> (rgb color screen) para aferir a qualidade geral de contraste e brilho do display.',
          'A experiência de <strong>rgb em tela cheia</strong> (full screen rgb) ajuda a rastrear anomalias estruturais no painel. Você faz um <strong>teste de pixel morto rgb</strong> (rgb dead pixel test) ou uma <strong>verificação de backlight rgb</strong> (rgb backlight check) nas bordas físicas da tela para identificar vazamentos de luz. Usando nosso utilitário como um prático <strong>teste de display rgb</strong> (rgb display test), fica simples projetar uma <strong>luz de tela rgb</strong> (rgb screen light) estável em seu estúdio ou reajustar saturações físicas utilizando comandos de teclado rápidos e amigáveis.',
          'Nosso <strong>teste rgb de tela online</strong> (screen rgb test online) roda 100% no cliente sem downloads redundantes. Ao fazer a <strong>calibragem de tela rgb</strong> (rgb screen calibration), utilize o modo de tela cheia para desativar barras de guias do navegador. Usuários também podem salvar as paletas de cores padrão como um <strong>papel de parede de tela rgb</strong> (rgb screen wallpaper) sólido em alta definição ou utilizar a ferramenta como um <strong>teste rgb de monitor</strong> (monitor rgb test) limpo e livre de interrupções comerciais.'
        ]
      },
      fr: {
        heading: 'Test Écran RGB en Ligne : Étalonnage des Sous-Pixels et Canaux',
        paragraphs: [
          'Si vous souhaitez vérifier le rendu des couleurs ou inspecter les sous-pixels de votre téléviseur, moniteur PC ou smartphone, notre <strong>test écran rgb</strong> (rgb screen test) est l\'outil de diagnostic idéal. Les écrans utilisent la combinaison de canaux rouge, vert et bleu pour reproduire chaque teinte. Afficher un <strong>écran rgb</strong> (rgb screen) unitaire permet d\'isoler chaque couleur pour déceler des aberrations d\'éclairage. Les professionnels et utilisateurs réguliers apprécient cet <strong>écran couleur rgb</strong> (rgb color screen) épuré pour valider l\'intégrité de leur matériel visuel.',
          'Bénéficier d\'une interface <strong>rgb plein écran</strong> (full screen rgb) est indispensable pour examiner un nouveau panneau LCD ou OLED. Effectuer un <strong>test de pixel mort rgb</strong> (rgb dead pixel test) ou un <strong>contrôle de rétroéclairage rgb</strong> (rgb backlight check) sur les bordures permet de repérer les fuites de lumière. En exploitant cet utilitaire comme <strong>test d\'affichage rgb</strong> (rgb display test), vous pouvez projeter une <strong>lumière d\'écran rgb</strong> (rgb screen light) d\'appoint ou ajuster les canaux primaires grâce à nos commandes fluides et intuitives.',
          'Gratuit et disponible sans téléchargement, notre <strong>test rgb d\'écran en ligne</strong> (screen rgb test online) convient à tous les navigateurs. Lors de votre session d\'<strong>étalonnage d\'écran rgb</strong> (rgb screen calibration), activez le plein écran pour libérer l\'espace des barres de navigation perturbatrices. Créez et téléchargez un plan de couleur pure comme <strong>fond d\'écran rgb</strong> (rgb screen wallpaper) ou utilisez-le comme <strong>test rgb de moniteur</strong> (monitor rgb test) de référence pour ajuster vos profils d\'affichage.'
        ]
      },
      de: {
        heading: 'RGB-Bildschirmtest Online: Subpixel & Farbkanal-Kalibrierung',
        paragraphs: [
          'Wenn Sie den Farbraum oder die Subpixel auf Ihrem Monitor, Fernseher oder Smartphone analysieren möchten, ist unser <strong>RGB-Bildschirmtest</strong> (rgb screen test) das perfekte Diagnosewerkzeug. Displays nutzen die Grundfarben Rot, Grün und Blau, um das gesamte Farbspektrum darzustellen. Durch einen dedizierten, einfarbigen <strong>RGB-Bildschirm</strong> (rgb screen) können Sie jeden Kanal einzeln bewerten. Grafiker, Techniker und Anwender nutzen diesen <strong>RGB-Farbbildschirm</strong> (rgb color screen) zur unkomplizierten Überprüfung der Ausleuchtung und zur schnellen Erkennung von Farbfehlern.',
          'Die Ausführung von <strong>RGB im Vollbildmodus</strong> (full screen rgb) ist besonders wertvoll bei der Inspektion von Neugeräten auf Fertigungsfehler. Sie können einen <strong>RGB-Pixelfehler-Test</strong> (rgb dead pixel test) durchführen oder einen <strong>RGB-Backlight-Check</strong> (rgb backlight check) machen, um Schwachstellen am Panel-Rand zu lokalisieren. Als webbasierter <strong>RGB-Displaytest</strong> (rgb display test) hilft Ihnen unser Tool, eine neutrale <strong>RGB-Bildschirmbeleuchtung</strong> (rgb screen light) als ambienter Lichtspender in Räumen zu nutzen oder Farbtemperaturen über praktische Tastatur-Shortcuts zu kalibrieren.',
          'Unser <strong>RGB-Bildschirmtest online</strong> (screen rgb test online) lädt sofort im Browser ohne Zusatzsoftware. Starten Sie die <strong>RGB-Bildschirmkalibrierung</strong> (rgb screen calibration) am besten im Vollbildmodus, damit Browserelemente die Lichtmessung nicht verfälschen. Designer können die reinen Farbflächen auch als <strong>RGB-Bildschirm-Wallpaper</strong> (rgb screen wallpaper) herunterladen oder unser Tool als standardisierten <strong>Monitor-RGB-Test</strong> (monitor rgb test) für Studio-Setups verwenden.'
        ]
      },
      hi: {
        heading: 'आरजीबी स्क्रीन टेस्ट ऑनलाइन: फ्री सब-पिक्सेल और कलर कैलिब्रेशन',
        paragraphs: [
          'यदि आप अपने मॉनिटर, स्मार्ट टीवी या मोबाइल की कलर रिप्रोडक्शन क्षमता को मापना चाहते हैं, तो हमारा ऑनलाइन <strong>आरजीबी स्क्रीन टेस्ट</strong> (rgb screen test) एक बेहतरीन जरिया है। सभी डिजिटल स्क्रीन लाल, हरे और नीले रंग के मिश्रण से चित्र बनाती हैं। फुलस्क्रीन <strong>आरजीबी स्क्रीन</strong> (rgb screen) चलाने से आप हर प्राइमरी कलर चैनल को व्यक्तिगत रूप से चलाकर जांच सकते हैं। फोटोग्राफर, गेमर और डेवलपर्स इस <strong>आरजीबी कलर स्क्रीन</strong> (rgb color screen) का उपयोग स्क्रीन की कलर कंसिस्टेंसी और सब-पिक्सल्स के स्वास्थ्य की जांच के लिए करते हैं।',
          'एक स्वच्छ <strong>फुल स्क्रीन आरजीबी</strong> (full screen rgb) डिस्प्ले पर भौतिक खराबी का पता लगाने में बहुत मददगार होता है। कंट्रास्ट की कमी को खोजने के लिए आप <strong>आरजीबी डेड पिक्सेल टेस्ट</strong> (rgb dead pixel test) या व्यापक <strong>आरजीबी बैकलाइट चेक</strong> (rgb backlight check) चला सकते हैं। इस <strong>आरजीबी डिस्प्ले टेस्ट</strong> (rgb display test) के माध्यम से, आप सॉफ्ट <strong>आरजीबी स्क्रीन लाइट</strong> (rgb screen light) भी प्रोजेक्ट कर सकते हैं जो वीडियो शूट या कमरे में रंगीन रोशनी के लिए काम आ सकती है। कीबोर्ड शॉर्टकट की मदद से आसानी से रंगों को बदलें।',
          'हमारी वेब-बेस्ड <strong>ऑनलाइन स्क्रीन आरजीबी टेस्ट</strong> (screen rgb test online) उपयोगिता सीधे क्लाइंट-साइड चलती है, जिससे यह बहुत तेज है। <strong>आरजीबी स्क्रीन कैलिब्रेशन</strong> (rgb screen calibration) करते समय, ब्राउज़र को फुलस्क्रीन कस्टमाइज़ेशन मोड में रखें ताकि कोई अन्य विंडो या बार आपकी आंखों को विचलित न करे। उपयोगकर्ता अपने पसंदीदा शुद्ध रंग को <strong>आरजीबी स्क्रीन वॉलपेपर</strong> (rgb screen wallpaper) के रूप में भी डाउनलोड कर सकते हैं या इसे एक भरोसेमंद <strong>आरजीबी मॉनिटर टेस्ट</strong> (monitor rgb test) टूल की तरह इस्तेमाल कर सकते हैं।'
        ]
      },
      ja: {
        heading: 'RGB画面テストオンライン：サブピクセル健全性＆カラーキャリブレーション',
        paragraphs: [
          'モニター、テレビ、またはスマートフォン端末の発色診断やサブピクセル検査を行いたい場合、当サイトの <strong>RGB画面テスト</strong>（rgb screen test）を実行するのが極めて実用的です。ディスプレイは、赤・緑・青の光の三原色を組み合わせて様々な色彩を描き出します。単色の <strong>RGB画面</strong>（rgb screen）を全画面表示することで、各色チャンネルを個別に分離して液晶のムラや特定色の欠陥を検査できます。デザイナーや技術者は、この簡潔な <strong>RGBカラー画面</strong>（rgb color screen）を利用しドット抜けの特定や発色均一性チェックを迅速に行うことができます。',
          '無駄のない <strong>全画面RGB</strong>（full screen rgb）ツールは、新しく購入したディスプレイの初期不良などを診断する際に非常に価値があります。液晶の端に沿って <strong>RGBドット抜けテスト</strong>（rgb dead pixel test）や <strong>RGBバックライト漏れチェック</strong>（rgb backlight check）を実行し、輝度のバラつきや光漏れが無いか診断できます。また、ブラウザで動作する <strong>RGB表示テスト</strong>（rgb display test）として機能し、撮影用などの簡易な <strong>RGBスクリーンライト</strong>（rgb screen light）としてスタジオで使用したり、キーボードのショートカットキーを使って赤・緑・青を瞬時に切り替えることが可能です。',
          '当サイトの <strong>モニターRGBテストオンライン</strong>（screen rgb test online）はソフトウェアのダウンロードを一切必要とせず、即座に起動します。 <strong>RGB画面調整</strong>（rgb screen calibration）を行う際は、ブラウザのツールバーやタブによる余計な発色干渉を防ぐため、全画面表示モードに切り替えて実行することをおすすめします。クリエイターは画面の色を <strong>RGB画面壁紙</strong>（rgb screen wallpaper）として好みの解像度でダウンロードすることもでき、プロフェッショナルな <strong>モニターRGBテスト</strong>（monitor rgb test）として愛用されています。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'hex-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'HEX Screen Test Online: Free Fullscreen Color Code & Palette Preview',
        paragraphs: [
          'If you need to test CSS hex codes or evaluate color palettes on a physical display, launching our <strong>hex screen test online</strong> is a fast, accurate method. Digital designers and software developers work daily with 6-digit hexadecimal codes such as <code>#0070F3</code>, <code>#7C3AED</code>, or <code>#121212</code>. Displaying a dedicated <strong>full screen hex color</strong> page allows you to inspect exact color rendering, white points, and saturation without surrounding browser chrome, tabs, or headers interfering with your vision.',
          'A clean <strong>hex code screen test</strong> is essential when verifying how UI design tokens appear across different display technologies, including OLED, IPS, and VA panels. Designers can enter up to four distinct <strong>hex color codes</strong> into our interactive swatches to create side-by-side color splits or full-panel color fills. You can evaluate dark mode hex values like <code>#0A0A0A</code> or <code>#1E1E1E</code> for OLED black crush, run a quick <strong>hex display test</strong>, or copy converted RGB and HSL values with a single click. Adjust the brightness slider to test color accuracy under bright daylight or dark studio viewing environments.',
          'Our web-based <strong>hex screen online</strong> utility requires no software downloads, loading in milliseconds for immediate QA workflows. When carrying out <strong>hex color calibration</strong>, toggle your browser to fullscreen mode to give the entire display panel to your selected color. Creative professionals can also use our <strong>hex wallpaper generator</strong> to export crisp PNG background assets in 4K, 1080p portrait, or device-native resolutions. Add this powerful <strong>monitor hex test</strong> tool to your digital diagnostic and design toolkit today.'
        ]
      },
      es: {
        heading: 'Pantalla HEX Online: Vista Previa de Códigos de Color y Paletas',
        paragraphs: [
          'Si necesitas verificar códigos hexadecimales CSS o evaluar paletas de color en un monitor real, nuestra <strong>prueba de pantalla hex online</strong> (hex screen test) es la solución perfecta. Diseñadores web y desarrolladores utilizan diariamente códigos de 6 dígitos como <code>#0070F3</code> o <code>#121212</code>. Proyectar una <strong>pantalla de color hex en pantalla completa</strong> (full screen hex color) te permite inspeccionar la fidelidad del color sin que la interfaz del navegador afecte tu percepción.',
          'Realizar un <strong>test de código hex en pantalla</strong> (hex code screen test) es fundamental para comprobar cómo lucen los componentes UI en pantallas OLED, IPS o VA. Puedes ingresar hasta cuatro <strong>códigos de color hex</strong> independientes en nuestras paletas interactivas para evaluar combinaciones lado a lado. Prueba tonos oscuros de modo noche como <code>#0A0A0A</code> o <code>#1E1E1E</code>, realiza un <strong>test de display hex</strong> (hex display test) y copia valores RGB/HSL en un clic.',
          'Nuestra herramienta de <strong>pantalla hex online</strong> (hex screen online) funciona de forma instantánea sin descargas. Al realizar una <strong>calibración de color hex</strong> (hex color calibration), activa el modo de pantalla completa para evitar distracciones. Los creadores también pueden usar nuestro generador para descargar imágenes de <strong>fondo de pantalla hex</strong> (hex wallpaper) en resolución 4K o adaptar la herramienta como una completa <strong>prueba hex para monitores</strong> (monitor hex test).'
        ]
      },
      pt: {
        heading: 'Tela HEX Online: Pré-visualização de Códigos de Cor e Paletas',
        paragraphs: [
          'Para testar códigos hexadecimais CSS e comparar paletas de cores em um display físico, nosso <strong>teste de tela hex online</strong> (hex screen test) oferece máxima precisão. Designers e desenvolvedores trabalham constantemente com códigos de 6 dígitos como <code>#0070F3</code> e <code>#121212</code>. Exibir uma <strong>cor hex em tela cheia</strong> (full screen hex color) permite checar a saturação e o contraste exatos sem a interferência de barras de navegação.',
          'Um bom <strong>teste de código hex na tela</strong> (hex code screen test) ajuda a avaliar a fidelidade cromática em painéis OLED, IPS e VA. Insira até quatro <strong>códigos de cor hex</strong> nas nossas amostras interativas para comparar uma paleta dividida na tela. Inspecione tons escuros de modo noturno como <code>#0A0A0A</code> e <code>#1E1E1E</code> com nosso <strong>teste de display hex</strong> (hex display test) e copie valores convertidos em RGB/HSL instantaneamente.',
          'Nosso utilitário de <strong>tela hex online</strong> (hex screen online) roda 100% no navegador sem instalações. Ao realizar uma <strong>calibração de cor hex</strong> (hex color calibration), utilize o modo de tela cheia para cobrir todo o painel. Salve suas combinações como um <strong>papel de parede hex</strong> (hex wallpaper) em 4K e adicione esta ferramenta de <strong>teste hex de monitor</strong> (monitor hex test) à sua rotina de desenvolvimento.'
        ]
      },
      fr: {
        heading: 'Écran HEX en Ligne : Aperçu des Codes Couleur & Palette Plein Écran',
        paragraphs: [
          'Si vous souhaitez tester des codes hexadécimaux CSS ou analyser des palettes de couleurs sur un écran physique, notre <strong>test écran hex en ligne</strong> (hex screen test) est l\'outil idéal. Les webdesigners et développeurs manipulent au quotidien des codes à 6 caractères tels que <code>#0070F3</code> ou <code>#121212</code>. Afficher un <strong>couleur hex plein écran</strong> (full screen hex color) vous garantit une restitution fidèle sans distorsion visuelle causée par l\'interface du navigateur.',
          'Un <strong>test de code hex d\'écran</strong> (hex code screen test) rigoureux est indispensable pour vérifier le rendu des composants UI sur dalles OLED, IPS ou VA. Saisissez jusqu\'à quatre <strong>codes couleur hex</strong> dans nos vignettes interactives pour évaluer des combinaisons côte à côte. Inspectez les teintes sombres de mode nuit comme <code>#0A0A0A</code> ou <code>#1E1E1E</code> avec notre <strong>test d\'affichage hex</strong> (hex display test) et copiez les équivalents RGB/HSL en un clic.',
          'Notre utilitaire <strong>écran hex en ligne</strong> (hex screen online) s\'exécute instantanément sans logiciel. Lors d\'une session d\'<strong>étalonnage de couleur hex</strong> (hex color calibration), passez en plein écran pour éliminer toute distraction. Téléchargez vos créations sous forme de <strong>fond d\'écran hex</strong> (hex wallpaper) 4K ou utilisez cette page comme <strong>test hex de moniteur</strong> (monitor hex test) professionnel.'
        ]
      },
      de: {
        heading: 'HEX-Bildschirm Online: Farbcode-Vorschau & Paletten-Tool',
        paragraphs: [
          'Wenn Sie CSS-Hex-Farbcodes auf einem echten Monitor testen oder Farbpaletten vergleichen möchten, ist unser <strong>online HEX-Bildschirmtest</strong> (hex screen test) die perfekte Lösung. Designer und Entwickler nutzen täglich 6-stellige Hexadezimal-Codes wie <code>#0070F3</code> oder <code>#121212</code>. Eine reine <strong>HEX-Farbe im Vollbildmodus</strong> (full screen hex color) ermöglicht die exakte Farbbewertung ohne störende Browserelemente.',
          'Ein präziser <strong>HEX-Code Bildschirmtest</strong> (hex code screen test) zeigt Ihnen, wie UI-Farben auf OLED-, IPS- und VA-Panels wirken. Geben Sie bis zu vier verschiedene <strong>HEX-Farbcodes</strong> in unsere Farbfelder ein, um Paletten im Split-Screen zu vergleichen. Prüfen Sie Dunkelmodus-Werte wie <code>#0A0A0A</code> oder <code>#1E1E1E</code> mit unserem <strong>HEX-Displaytest</strong> (hex display test) und kopieren Sie konvertierte RGB- und HSL-Werte mit einem Klick.',
          'Unser <strong>HEX-Bildschirm online</strong> (hex screen online) lädt sofort im Browser ohne Zusatzsoftware. Starten Sie die <strong>HEX-Farbkalibrierung</strong> (hex color calibration) im Vollbildmodus für beste Ergebnisse. Erstellen und laden Sie hochauflösende <strong>HEX-Bildschirm-Wallpaper</strong> (hex wallpaper) in 4K herunter und nutzen Sie unser Tool als standardisierten <strong>Monitor-HEX-Test</strong> (monitor hex test).'
        ]
      },
      hi: {
        heading: 'हेक्स स्क्रीन ऑनलाइन: फुलस्क्रीन कलर कोड प्रीव्यू और पैलेट टूल',
        paragraphs: [
          'यदि आप अपने मॉनिटर पर CSS हेक्स कोड का परीक्षण करना चाहते हैं, तो हमारा ऑनलाइन <strong>हेक्स स्क्रीन टेस्ट</strong> (hex screen test) सबसे सटीक साधन है। वेब डिजाइनर और डेवलपर्स <code>#0070F3</code> या <code>#121212</code> जैसे 6-अंकीय हेक्साडेसिमल कोड का उपयोग करते हैं। फुलस्क्रीन <strong>हेक्स कलर स्क्रीन</strong> (full screen hex color) चलाकर आप बिना किसी ब्राउज़र विकर्षण के शुद्ध रंगों का निरीक्षण कर सकते हैं।',
          'एक स्वच्छ <strong>हेक्स कोड स्क्रीन टेस्ट</strong> (hex code screen test) से आप जान सकते हैं कि आपकी वेबसाइट के रंग OLED, IPS या VA पैनल पर कैसे दिखते हैं। आप हमारी 4-कलर स्वाच में अलग-अलग <strong>हेक्स कलर कोड</strong> दर्ज कर सकते हैं, <code>#0A0A0A</code> जैसे डार्क मोड रंगों का परीक्षण (hex display test) कर सकते हैं और एक क्लिक में RGB या HSL मान कॉपी कर सकते हैं।',
          'हमारा वेब-आधारित <strong>ऑनलाइन हेक्स स्क्रीन टूल</strong> (hex screen online) सीधे ब्राउज़र में तुरंत खुलता है। <strong>हेक्स कलर कैलिब्रेशन</strong> (hex color calibration) करते समय फुलस्क्रीन मोड ऑन रखें। आप अपने पसंदीदा रंगों को <strong>हेक्स स्क्रीन वॉलपेपर</strong> (hex wallpaper) के रूप में 4K रिज़ॉल्यूशन में डाउनलोड भी कर सकते हैं या इसे एक भरोसेमंद <strong>मॉनिटर हेक्स टेस्ट</strong> (monitor hex test) के रूप में उपयोग कर सकते हैं।'
        ]
      },
      ja: {
        heading: 'HEX画面オンライン：全画面カラーコードプレビュー＆パレットツール',
        paragraphs: [
          'CSSの16進数カラーコードを実際のディスプレイで検証・比較したい場合、当サイトの <strong>HEX画面テスト</strong>（hex screen test）を実行するのが最適です。デザイナーやWebエンジニアは <code>#0070F3</code> や <code>#121212</code> といった6桁のHEXコードを日常的に使用します。単色の <strong>全画面HEXカラー</strong>（full screen hex color）を表示することで、ブラウザの枠に邪魔されずに正しい発色やコントラストを確認できます。',
          '精度の高い <strong>HEXコード画面テスト</strong>（hex code screen test）は、OLED、IPS、VA液晶パネルでのUIデザイン表示を検証する際に欠かせません。最大4つの <strong>HEXカラーコード</strong> を入力してカラーパレットを分割比較したり、<code>#0A0A0A</code> や <code>#1E1E1E</code> などのダークモードカラーの黒表現を <strong>HEX表示テスト</strong>（hex display test）で診断できます。ワンクリックでRGBやHSLの相互変換コードもコピー可能です。',
          '当サイトの <strong>HEX画面オンライン</strong>（hex screen online）はソフトウェアのダウンロード不要で即座に動作します。 <strong>HEXカラー調整</strong>（hex color calibration）を行う際は全画面モードで表示してください。作成したカラーは <strong>HEX画面壁紙</strong>（hex wallpaper）として4K高画質保存でき, プロフェッショナルな <strong>モニターHEXテスト</strong>（monitor hex test）ツールとしてご活用いただけます。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'gradient-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Gradient Screen Online: Free Color Banding & Calibration Tests',
        paragraphs: [
          'If you want to evaluate the quality of your monitor, TV, or smartphone display, using a <strong>gradient screen</strong> online is a highly effective method. A smooth transitions layout is a valuable tool for display calibration and testing. By displaying a seamless transition of tones, you can run a <strong>color banding test</strong> to check if your display can render intermediate color steps correctly. Whether you are running a <strong>color banding test screen</strong>, a dedicated <strong>monitor banding test</strong>, or a mobile <strong>display banding test</strong>, our tool provides a <strong>smooth gradient screen</strong> that helps you easily identify compression artifacting and panel limitations.',
          'A solid <strong>gradient background full screen</strong> experience allows developers, designers, and creators to inspect displays under realistic conditions. You can choose a <strong>white to black gradient screen</strong> or a <strong>black to white gradient screen</strong> to map luminance, or use an <strong>rgby gradient test</strong> to inspect secondary and primary channels (Red, Green, Blue, Yellow). In addition to running a <strong>gradient screen test</strong>, our utility serves as a creative asset, allowing you to preview gradient sweeps or download custom <strong>4k gradient wallpaper</strong> and <strong>full hd gradient wallpaper</strong> layouts to style your desktop.',
          'Our web-based <strong>gradient screen generator</strong> requires no external plugins or software downloads, running completely client-side. Toggle fullscreen mode to ensure your browser panels do not interfere with your <strong>gradient screen testing</strong>. Designers can project a <strong>colorful gradient screen</strong> as an ambient light panel, a video backdrop, or reference source for camera calibration. Level up your display toolkit and test for accurate color rendering on any screen in seconds.'
        ]
      },
      es: {
        heading: 'Pantalla de Degradado Online: Prueba de Banding de Color y Calibración',
        paragraphs: [
          'Si deseas evaluar la calidad de la pantalla de tu monitor, televisor o smartphone, utilizar una <strong>pantalla de degradado</strong> (gradient screen) online es un método sumamente eficaz. Este formato con transiciones de color es una herramienta valiosa para la calibración y el diagnóstico de paneles. Al reproducir una gama de tonos continuos, puedes realizar una <strong>prueba de banding de color</strong> (color banding test) para verificar si tu pantalla puede renderizar pasos de color intermedios. Ya sea que uses una <strong>pantalla de prueba de banding de color</strong> (color banding test screen), una <strong>prueba de banding de monitor</strong> (monitor banding test) o una <strong>prueba de banding de display</strong> (display banding test), nuestra web ofrece una <strong>pantalla de degradado suave</strong> (smooth gradient screen) para detectar artefactos de compresión.',
          'Disponer de un <strong>fondo de pantalla de degradado completo</strong> (gradient background full screen) permite a diseñadores y creadores inspeccionar pantallas en condiciones reales. Puedes elegir una <strong>pantalla de degradado de blanco a negro</strong> (white to black gradient screen) o una <strong>pantalla de degradado de negro a blanco</strong> (black to white gradient screen) para mapear la luminancia, o utilizar una <strong>prueba de degradado RGBY</strong> (rgby gradient test) para inspeccionar las transiciones de canales primarios. Además de servir para una <strong>prueba de pantalla de degradado</strong> (gradient screen test), nuestra utilidad te permite previsualizar degradados y descargar diseños de <strong>fondo de pantalla de degradado 4k</strong> (4k gradient wallpaper) o <strong>fondo de pantalla de degradado full hd</strong> (full hd gradient wallpaper).',
          'Nuestro <strong>generador de pantalla de degradado</strong> (gradient screen generator) web no requiere complementos externos y se ejecuta completamente en el cliente. Activa el modo de pantalla completa para evitar interferencias de la barra de navegación durante tu <strong>prueba de pantalla de degradado</strong> (gradient screen testing). Los creadores pueden proyectar una <strong>pantalla de degradado colorido</strong> (colorful gradient screen) como panel de luz ambiental o fondo de video. Mejora tu flujo de calibración hoy mismo de forma gratuita.'
        ]
      },
      pt: {
        heading: 'Tela de Degradê Online: Teste de Color Banding e Calibragem',
        paragraphs: [
          'Para verificar a qualidade cromática de um monitor, TV ou smartphone, acessar uma <strong>tela de degradê</strong> (gradient screen) online é um método excelente. Exibir transições de cores ajuda na calibragem. Ao projetar uma gama suave, você faz um <strong>teste de color banding</strong> (color banding test) para avaliar se o display renderiza tons médios perfeitamente. Seja rodando uma <strong>tela de teste de color banding</strong> (color banding test screen), um <strong>teste de banding de monitor</strong> (monitor banding test) ou um <strong>teste de banding de display</strong> (display banding test), nosso utilitário entrega uma <strong>tela de degradê suave</strong> (smooth gradient screen) para diagnosticar compressões no painel.',
          'Uma experiência de <strong>fundo de tela de degradê em tela cheia</strong> (gradient background full screen) ajuda profissionais do vídeo e do design. Você pode alternar entre uma <strong>tela de degradê de branco para preto</strong> (white to black gradient screen) e uma <strong>tela de degradê de preto para branco</strong> (black to white gradient screen) para mapear os níveis de cinza, ou utilizar um <strong>teste de degradê RGBY</strong> (rgby gradient test). Além de executar um <strong>teste de tela de degradê</strong> (gradient screen test), a ferramenta permite baixar arquivos como <strong>papel de parede degradê 4k</strong> (4k gradient wallpaper) e <strong>papel de parede degradê full hd</strong> (full hd gradient wallpaper) sob medida.',
          'Nosso <strong>gerador de tela de degradê</strong> (gradient screen generator) é leve e dispensa downloads, com controles de brilho integrados. Use a tela cheia para evitar interferências de janelas no seu teste de tela de degradê (gradient screen testing). Designers utilizam a <strong>tela de degradê colorido</strong> (colorful gradient screen) como fonte de iluminação suave para videochamadas ou cenografia. Potencialize seu arsenal de calibração virtual agora mesmo.'
        ]
      },
      fr: {
        heading: 'Écran Dégradé en Ligne : Élimination du Banding & Calibration',
        paragraphs: [
          'Pour évaluer la réactivité et la fidélité de votre moniteur, téléviseur ou smartphone, l\'utilisation d\'un <strong>écran dégradé</strong> (gradient screen) en ligne est incontournable. L\'affichage d\'une transition continue de couleurs est fort utile pour l\'étalonnage. En projetant un dégradé de blanc à noir, vous lancez un <strong>test de banding de couleur</strong> (color banding test) afin de vérifier si votre dalle reproduit les nuances intermédiaires sans artefacts. Que vous recherchiez un <strong>écran de test de banding de couleur</strong> (color banding test screen), un <strong>test de banding de moniteur</strong> (monitor banding test) ou un <strong>test de banding d\'affichage</strong> (display banding test), notre suite offre un <strong>écran dégradé fluide</strong> (smooth gradient screen) d\'une grande précision.',
          'Avoir un <strong>arrière-plan écran dégradé plein écran</strong> (gradient background full screen) donne aux vidéastes et graphistes un outil d\'inspection rigoureux. Vous pouvez afficher un <strong>écran dégradé de blanc à noir</strong> (white to black gradient screen) ou un <strong>écran dégradé de noir à blanc</strong> (black to white gradient screen) pour analyser le gamma, ou lancer un <strong>test de dégradé RGBY</strong> (rgby gradient test). En plus d\'un <strong>test d\'écran dégradé</strong> (gradient screen test), cet utilitaire vous permet d\'exporter des créations comme un <strong>fond d\'écran dégradé 4k</strong> (4k gradient wallpaper) ou un <strong>fond d\'écran dégradé full hd</strong> (full hd gradient wallpaper).',
          'Notre <strong>générateur d\'écran dégradé</strong> (gradient screen generator) web fonctionne côté client sans installation requise. Basculez en plein écran pour que vos navigateurs n\'altèrent pas vos sessions de <strong>test d\'écran dégradé</strong> (gradient screen testing). Cet <strong>écran dégradé coloré</strong> (colorful gradient screen) est fort utile comme panneau de lumière douce ou fond de studio. Calibrez chaque pixel de vos écrans en toute simplicité.'
        ]
      },
      de: {
        heading: 'Farbverlauf-Bildschirm Online: Color Banding Tests & Kalibrierung',
        paragraphs: [
          'Um die Gleichmäßigkeit und Qualität von Monitoren, TVs oder Smartphones zu testen, ist ein <strong>Farbverlauf-Bildschirm</strong> (gradient screen) ein ideales Hilfsmittel. Ein gleichmäßiger Farbübergang eignet sich perfekt für Farbkalibrierungen. Durch die Anzeige stufenloser Verläufe können Sie einen <strong>Color Banding Test</strong> (color banding test) durchführen, um zu prüfen, ob Ihr Display Zwischenfarbstufen flüssig darstellt. Egal, ob Sie einen <strong>Color Banding Test Bildschirm</strong> (color banding test screen), einen <strong>Monitor Banding Test</strong> (monitor banding test) oder einen mobilen <strong>Display Banding Test</strong> (display banding test) machen: Unser Tool liefert einen <strong>nahtlosen Farbverlauf-Bildschirm</strong> (smooth gradient screen) zur schnellen Fehlererkennung.',
          'Der <strong>Farbverlauf-Hintergrund im Vollbildmodus</strong> (gradient background full screen) gibt Grafikern und Film-Editoren ein präzises Diagnosewerkzeug an die Hand. Nutzen Sie einen <strong>Weiß-zu-Schwarz Farbverlauf-Bildschirm</strong> (white to black gradient screen) oder einen <strong>Schwarz-zu-Weiß Farbverlauf-Bildschirm</strong> (black to white gradient screen) für Helligkeitsskalen oder führen Sie einen <strong>RGBY-Verlaufstest</strong> (rgby gradient test) durch. Neben dem reinen <strong>Farbverlauf-Bildschirm Test</strong> (gradient screen test) können Sie die Farbmuster auch anpassen und als <strong>4k Farbverlauf-Wallpaper</strong> (4k gradient wallpaper) sowie <strong>Full HD Farbverlauf-Wallpaper</strong> (full hd gradient wallpaper) herunterladen.',
          'Unser <strong>Farbverlauf-Bildschirm Generator</strong> (gradient screen generator) ist browserbasiert und erfordert keine Installation. Aktivieren Sie die Vollbild-Anzeige für ein ungestörtes <strong>Farbverlauf-Bildschirm Testen</strong> (gradient screen testing). Verwenden Sie den <strong>bunten Farbverlauf-Bildschirm</strong> (colorful gradient screen) als Hintergrundlicht bei Webkonferenzen oder kreatives Studio-Hilfslicht. Kalibrieren Sie Ihr Ausgabegerät jetzt sekundenschnell im Browser.'
        ]
      },
      hi: {
        heading: 'ग्रेडिएंट स्क्रीन ऑनलाइन: कलर बैंडिंग टेस्ट और मॉनिटर कैलिब्रेशन',
        paragraphs: [
          'यदि आप अपने मॉनिटर, स्मार्ट टीवी या स्मार्टफोन डिस्प्ले की गुणवत्ता और प्रदर्शन को मापना चाहते हैं, तो ऑनलाइन <strong>ग्रेडिएंट स्क्रीन</strong> (gradient screen) का उपयोग सबसे तेज तरीका है। स्मूथ रंगीन बदलावों का यह लेआउट कैलिब्रेशन और निरीक्षण के लिए एक अनमोल साधन है। स्क्रीन पर रंगों के क्रमिक बहाव को चलाकर, आप <strong>कलर बैंडिंग टेस्ट</strong> (color banding test) कर सकते हैं और देख सकते हैं कि क्या आपका डिस्प्ले मध्यवर्ती रंगों के शेड्स को बिना किसी ब्लॉक के दिखाता है। चाहे आप <strong>कलर बैंडिंग टेस्ट स्क्रीन</strong> (color banding test screen) पर हों, <strong>मॉनिटर बैंडिंग टेस्ट</strong> (monitor banding test) चला रहे हों, या <strong>डिस्प्ले बैंडिंग टेस्ट</strong> (display banding test) कर रहे हों, हमारा टूल एक बिल्कुल <strong>स्मूथ ग्रेडिएंट स्क्रीन</strong> (smooth gradient screen) प्रदान करता है।',
          'एक बेदाग <strong>फुल स्क्रीन ग्रेडिएंट बैकग्राउंड</strong> (gradient background full screen) रचनाकारों, फोटोग्राफरों और डिजाइनरों को सटीक लाइटिंग और डार्कनेस का परीक्षण करने की अनुमति देता है। आप कंट्रास्ट की जांच के लिए सफेद से काली ग्रेडिएंट स्क्रीन (white to black gradient screen) या काली से सफेद ग्रेडिएंट स्क्रीन (black to white gradient screen) का उपयोग कर सकते हैं, अथवा primary रंगों में रंगत देखने के लिए RGBY ग्रेडिएंट टेस्ट (rgby gradient test) कर सकते हैं। इसके अलावा, एक व्यवस्थित <strong>ग्रेडिएंट स्क्रीन टेस्ट</strong> (gradient screen test) चलाने के साथ-साथ आप इसे सुंदर वॉलपेपर के रूप में इस्तेमाल कर सकते हैं और यहां से मुफ्त 4k ग्रेडिएंट वॉलपेपर (4k gradient wallpaper) या फुल एचडी ग्रेडिएंट वॉलपेपर (full hd gradient wallpaper) डाउनलोड कर सकते हैं।',
          'हमारा ऑनलाइन <strong>ग्रेडिएंट स्क्रीन जनरेटर</strong> (gradient screen generator) बिना किसी डाउनलोड के सीधे ब्राउज़र में चलता है। यह सुनिश्चित करने के लिए कि कोई ब्राउज़र बार या मेनू आपके <strong>ग्रेडिएंट स्क्रीन टेस्टिंग</strong> (gradient screen testing) में बाधा न बने, फुलस्क्रीन विकल्प चालू करें। कलाकार इस <strong>रंगीन ग्रेडिएंट स्क्रीन</strong> (colorful gradient screen) का उपयोग स्टूडियो में सॉफ्ट लाइट के रूप में या वीडियो के लिए कलात्मक बैकड्रॉप के रूप में कर सकते हैं। आज ही अपने डिस्प्ले को कैलिब्रेट और परफेक्ट बनाएं।'
        ]
      },
      ja: {
        heading: 'グラデーション画面オンライン：カラーバンディング検知＆表示色キャリブレーション',
        paragraphs: [
          '液晶モニター、テレビ、またはスマートフォン型デバイスの表示階調と画質を精緻に検証したい場合、オンラインの <strong>グラデーション画面</strong> (gradient screen) を使用するのが最適解です。滑らかな色の移り変わりを表示することは、モニターのキャリブレーションや品質診断に極めて実用的です。サイト上で一貫した色階調を描き出すことで、<strong>カラーバンディングテスト</strong> (color banding test) を行い、モニターが中間色の違いを忠実に描画できているか診断できます。<strong>カラーバンディングテスト画面</strong> (color banding test screen)、<strong>モニターバンディングテスト</strong> (monitor banding test)、あるいは <strong>ディスプレイバンディングテスト</strong> (display banding test) を行う際において、当サイトは最高精度の <strong>滑らかなグラデーション画面</strong> (smooth gradient screen) を表示できます。',
          '無地の <strong>全画面グラデーション背景</strong> (gradient background full screen) は、映像編集者、フォトグラファー、Webデザイナーの検査作業に広く活用されています。明暗差と輝度の推移のみを検証する <strong>白黒グラデーション画面</strong> (white to black gradient screen) もしくは <strong>黒白グラデーション画面</strong> (black to white gradient screen) のほか、各基本軸 of 混色を確認する <strong>RGBYグラデーションテスト</strong> (rgby gradient test) も利用可能です。単なる <strong>グラデーション画面テスト</strong> (gradient screen test) だけでなく、美しく変化するカラーチャートを <strong>4kグラデーション壁紙</strong> (4k gradient wallpaper) や <strong>フルHDグラデーション壁紙</strong> (full hd gradient wallpaper) 画像としてエクスポートすることも可能です。',
          'こちらの <strong>グラデーション画面ジェネレーター</strong> (gradient screen generator) は、ブラウザのみで稼働し特別なダウンロードを必要としません。液晶モニターの <strong>グラデーション画面テスト</strong> (gradient screen testing) を行う際は、不要なブラウザタブやアドレス欄を非表示にできる全画面機能をロードして行うと便利です。クリエイターは、検査だけでなくこの <strong>カラフルなグラデーション画面</strong> (colorful gradient screen) を動画撮影用の間接照明や演出背景としても採用しています。お使いのディスプレイの色表現力を数秒でアップグレードしてみましょう。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'custom-color-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Screen Color Testing Tool & Custom Color Diagnostics',
        paragraphs: [
          'When you need to evaluate the visual fidelity of a monitor, smartphone, tablet, or television, accessing a local <strong>screen color testing tool</strong> online is the fastest method. Our <strong>custom color screen</strong> utility acts as a highly flexible diagnostic display, allowing you to generate any solid shade using HEX codes, HSL adjustments, RGB sliders, or an interactive color picker. Conducting a comprehensive <strong>screen color test</strong> helps users verify panel calibration, check color accuracy, and view solid screens without the interference of browser bars or desktop elements. Whether you are using this as a <strong>monitor color test</strong> or a mobile <strong>display color test</strong>, you can test screen colors online in fullscreen with a single click.',
          'Using a dedicated <strong>color screen test</strong> has significant advantages when inspecting a new or aged panel for physical defects. For instance, putting your monitor through a <strong>dead pixel color test</strong> is essential to find lazy or dead subpixels by cycling through primary and secondary shades. Similarly, a <strong>back light bleed color test</strong> is ideal for identifying luminance leaks along display borders. With our <strong>screen color testing tool</strong>, you can store recent colors, set up favorite palettes, and use the <strong>rgb screen test</strong> mode to evaluate how uniformly your device renders light and shadows. By matching precise industrial color profiles, you get a clean <strong>test screen colors online</strong> helper to find any discrepancy.',
          'Beyond diagnosis, this <strong>color test screen</strong> serves as an indispensable tool for content creators, photographers, and professional technicians. Designers use it to compare color outputs against physical swatches, while filmmakers utilize the solid layouts as controlled ambient lighting sources. If you are calibrating a home projector, projecting a variety of solid <strong>screen colors for testing</strong> helps balance the color wheel and white levels. Our <strong>full screen color test</strong> utility runs completely client-side, eliminating external network dependencies, ensuring rapid load times, and providing high-resolution image downloads. Level up your display calibration workflow on any OS with the ultimate customizable test monitor colors assistant.'
        ]
      },
      es: {
        heading: 'Herramienta de Prueba de Color de Pantalla y Diagnósticos Cromáticos',
        paragraphs: [
          'Cuando necesitas evaluar la fidelidad visual de un monitor, teléfono inteligente, tableta o televisor, utilizar una <strong>herramienta de prueba de color de pantalla</strong> (screen color testing tool) online es el método más rápido. Nuestra utilidad de <strong>pantalla de color personalizado</strong> (custom color screen) actúa como un display de diagnóstico versátil, permitiéndote generar cualquier tono sólido mediante códigos HEX, valores HSL, reguladores RGB o un selector de color interactivo. Realizar una <strong>prueba de color de pantalla</strong> (screen color test) ayuda a verificar la calibración del panel, comprobar la precisión cromática y ver colores continuos sin la distracción de barras de navegación o ventanas. Ya sea que lo uses como una <strong>prueba de color de monitor</strong> (monitor color test) o una <strong>prueba de color de display</strong> (display color test) móvil, puedes probar colores de pantalla online en pantalla completa con facilidad.',
          'Diagnosticar anomalías físicas en un panel es mucho más sencillo con un <strong>test de color de pantalla</strong> (color screen test) específico. Por ejemplo, someter a tu dispositivo a una <strong>prueba de color para píxeles muertos</strong> (dead pixel color test) es la forma ideal de localizar subpíxeles inactivos al alternar entre tonos primarios y secundarios. De igual manera, una <strong>prueba de color para fugas de luz</strong> (back light bleed color test) te ayuda a ubicar fugas de brillo (backlight bleeding) en los bordes del chasis. Con este probador cromático, puedes almacenar tus tonos recientes, guardar paletas favoritas y usar el modo de <strong>prueba de pantalla RGB</strong> (rgb screen test) para analizar cómo se proyectan las luces y sombras sobre la pantalla.',
          'Además de los diagnósticos técnicos, esta herramienta de colores es de gran utilidad para fotógrafos, diseñadores y editores de video. Los creadores usan la pantalla de color sólido para equilibrar intensidades lumínicas y calibrar proyectores usando <strong>colores de pantalla para prueba</strong> (screen colors for testing) que ayudan a equilibrar el balance de blancos. Nuestra <strong>prueba de color de pantalla completa</strong> (full screen color test) se ejecuta directamente en el navegador, garantizando cargas rápidas, sin descargas y exportando imágenes en alta resolución. Optimiza tu proceso de calibración y aprende a <strong>probar colores de monitor</strong> (test monitor colors) de manera profesional.'
        ]
      },
      pt: {
        heading: 'Ferramenta de Teste de Cor de Tela e Calibração Personalizada',
        paragraphs: [
          'Para avaliar a fidelidade de cor de um monitor, smartphone, tablet ou TV, recorrer a uma <strong>ferramenta de teste de cor de tela</strong> (screen color testing tool) online é o caminho mais prático. O utilitário de <strong>tela de cor personalizada</strong> (custom color screen) funciona como um visor de diagnóstico, permitindo gerar cores sólidas através de HEX, formatos HSL, barras RGB ou seletor interativo. Realizar um <strong>teste de cor de tela</strong> (screen color test) ajuda a avaliar a calibragem, a fidelidade tonal e a uniformidade de brilho sem distração de barras ou abas do navegador. Seja como um <strong>teste de referência de cor de monitor</strong> (monitor color test) ou <strong>teste de cor de display</strong> (display color test), nosso site otimiza a inspeção visual.',
          'Identificar defeitos estruturais e falhas físicas nos painéis é o maior benefício de rodar um <strong>testador de cores de tela</strong> (color screen test). Por exemplo, submeter a tela a um <strong>teste de cor para pixels mortos</strong> (dead pixel color test) ajuda a encontrar subpixels inativos ao alternar de maneira uniforme entre fundos básicos. Também o <strong>teste de cor para vazamento de luz</strong> (back light bleed color test) localiza rapidamente vazamentos de iluminação nas bordas de telas LCD ou LED. Guarde os tons gerados recentemente, estruture seus favoritos e faça o <strong>teste de tela RGB</strong> (rgb screen test) para balanceamento.',
          'Além do controle técnico de displays, esse utilitário é uma peça-chave para fotógrafos corporativos e designers. A calibração de projetores é assistida projetando-se múltiplas <strong>cores de tela para teste</strong> (screen colors for testing) para calibrar contraste e luz ambiente. O <strong>teste de referência de cor em tela cheia</strong> (full screen color test) roda direto nos aparelhos sem instalar nada, resultando em desempenho imediato e downloads de imagens. Comece agora mesmo a <strong>testar cores do monitor</strong> (test monitor colors) de forma muito descomplicada.'
        ]
      },
      fr: {
        heading: 'Outil de Test de Couleur d\'Écran et Calibration Modulaire',
        paragraphs: [
          'Lorsque vous devez évaluer la fidélité visuelle d\'un moniteur, d\'un smartphone ou d\'un téléviseur, utiliser un <strong>outil de test de couleur d\'écran</strong> (screen color testing tool) en ligne est la solution la plus rapide. Notre utilitaire d\'<strong>écran couleur personnalisé</strong> (custom color screen) sert de mire de diagnostic polyvalente, vous permettant de générer n\'importe quelle nuance de couleur avec des codes HEX, HSL, RGB ou une pipette interactive. Effectuer un <strong>test de couleur d\'écran</strong> (screen color test) permet de vérifier la calibration globale et la justesse chromatique sans fenêtres superposées. Que vous fassiez un <strong>test de couleur de moniteur</strong> (monitor color test) ou un <strong>test de couleur d\'affichage</strong> (display color test) sur mobile, notre site simplifie les vérifications.',
          'Le diagnostic d\'un panneau d\'affichage est grandement facilité par un <strong>test d\'écran couleur</strong> (color screen test) ciblé. Soumettre votre matériel à un <strong>test de couleur pour pixel mort</strong> (dead pixel color test) est la méthode standard pour déceler des sous-pixels éteints en affichant des teintes unies. De même, lancer un <strong>test de couleur pour fuite de lumière</strong> (back light bleed color test) est idéal pour détecter les fuites de luminosité latérale. Notre interface permet de sauvegarder vos couleurs favorites et de lancer un <strong>test d\'écran RGB</strong> (rgb screen test) pour confirmer l\'uniformité visuelle.',
          'Outre l\'analyse matérielle, ce générateur sert aussi pour le travail d\'étalonnage des créateurs et l\'éclairage de studio. Le réglage d\'un vidéoprojecteur demande de projeter diverses <strong>couleurs d\'écran pour test</strong> (screen colors for testing) pour équilibrer la température et le contraste. Notre <strong>test de couleur plein écran</strong> (full screen color test) fonctionne sans téléchargement logiciel, garantissant une réactivité optimale et des téléchargements d\'images HD pour <strong>tester les couleurs du moniteur</strong> (test monitor colors) de manière professionnelle.'
        ]
      },
      de: {
        heading: 'Bildschirm-Farbtest-Tool & Kalibrierungs-Optionen',
        paragraphs: [
          'Wenn Sie die visuelle Qualität eines Monitors, Laptops, Tablets oder Fernsehers beurteilen möchten, ist die Nutzung von einem <strong>Bildschirm-Farbtest-Tool</strong> (screen color testing tool) online der schnellste Weg. Unser <strong>benutzerdefinierter Farbbildschirm</strong> (custom color screen) fungiert als anpassbare Testoberfläche, auf der Sie jede gewünschte Vollbildfarbe über HEX-Werte, HSL-Farbräume, RGB-Schieberegler oder eine Farbpipette erzeugen können. Ein sorgfältig durchgeführter <strong>Bildschirm-Farbtest</strong> (screen color test) hilft dabei, die Farbtemperatur zu justieren und die Darstellung ohne störende Browser-Menüleisten zu bewerten. Egal, ob Sie einen <strong>Monitor-Farbtest</strong> (monitor color test) oder einen mobilen <strong>Display-Farbtest</strong> (display-farbtest) machen, mit unserem Tool können Sie Bildschirmfarben online testen.',
          'Die Erkennung von Displayfehlern an Panels wird durch einen gezielten <strong>Farbbildschirmtest</strong> (color screen test) erheblich erleichtert. Ein <strong>Pixelfehler-Farbtest</strong> (dead pixel color test) hilft Ihnen dabei, träge oder tote Subpixel aufzuspüren, indem Sie Volltonfarben durchwechseln. Um Helligkeitsunterschiede an den Rändern zu finden, ist ein <strong>Backlight-Bleed-Farbtest</strong> (back light bleed color test) die empfohlene Methode. Sie können kürzlich genutzte Werte speichern, Favoriten anlegen und den <strong>RGB-Bildschirmtest</strong> (rgb screen test) verwenden, um die Homogenität der Farbdarstellung komfortabel zu überprüfen.',
          'Zusätzlich zur Fehlersuche dient diese Plattform Kreativen und Mediengestaltern als Referenzwerkzeug und Lichtquelle für Selfies oder Videokonferenzen. Beim Kalibrieren von Beamern und Projektoren projizieren Experten verschiedene <strong>Bildschirmfarben zum Testen</strong> (screen colors for testing), um Helligkeitswerte anzugleichen. Unser <strong>Vollbild-Farbtest</strong> (full screen color test) basiert auf reinem Client-Side-Code, was maximale Ladegeschwindigkeit garantiert. Erleichtert das <strong>Monitorfarben testen</strong> (test monitor colors) ohne mühsame Setups.'
        ]
      },
      hi: {
        heading: 'स्क्रीन कलर टेस्टिंग टूल और डिस्प्ले कस्टमाइजेशन',
        paragraphs: [
          'जब आपको किसी मॉनिटर, स्मार्टफोन, टैबलेट या टीवी की स्क्रीन गुणवत्ता को परखना हो, तो ऑनलाइन <strong>स्क्रीन कलर टेस्टिंग टूल</strong> (screen color testing tool) का उपयोग करना सबसे आसान तरीका है। हमारा <strong>कस्टम कलर स्क्रीन</strong> (custom color screen) टूल एक बहुमुखी डायग्नोस्टिक डिस्प्ले के रूप में काम करता है, जो आपको HEX कोड, HSL वैल्यू, RGB स्लाइडर्स या इंटरेक्टivo कलर पिकर की मदद से कोई भी सॉलिड कलर जेनरेट करने की सुविधा देता है। एक व्यवस्थित <strong>स्क्रीन कलर टेस्ट</strong> (screen color test) चलाने से आप डिस्प्ले के सटीक रंग असंतुलन की जांच कर सकते हैं। चाहे आप इसे एक <strong>मॉनिटर कलर टेस्ट</strong> (monitor color test) के रूप में इस्तेमाल कर रहे हों या मोबाइल <strong>डिस्प्ले कलर टेस्ट</strong> (display color test) के लिए, आप आसानी से अपने रंगों की जांच कर सकते हैं।',
          'नया या पुराना डिस्प्ले पैनल खरीदते समय उसकी जांच के लिए एक <strong>कलर स्क्रीन टेस्ट</strong> (color screen test) महत्वपूर्ण होता है। उदाहरण के लिए, खराब या बंद पिक्सल की पहचान के लिए <strong>डेड पिक्सेल कलर टेस्ट</strong> (dead pixel color test) करना आवश्यक है ताकि प्राथमिक और द्वितीयक रंगों का चक्र चलाकर दोषों की जांच की जा सके। इसी तरह, स्क्रीन के किनारों से रोशनी के लीकेज को पता करने के लिए <strong>बैकलाइट ब्लीड कलर टेस्ट</strong> (back light bleed color test) सबसे सटीक तरीका है। हमारे जांच माध्यम की मदद से आप हाल के रंगों को सहेज सकते हैं, पसंदीदा रंग जोड़ सकते हैं और <strong>आरजीबी स्क्रीन टेस्ट</strong> (rgb screen test) मोड का उपयोग करके डिस्प्ले के प्रकाश तथा संतुलन को आंक सकते हैं।',
          'डिस्प्ले के सुधार के अलावा, यह उपयोगिता डिजिटल निर्माताओं और फोटोग्राफरों के लिए सहायक भूमिका निभाती है। होम प्रोजेक्टर को सेट करने के दौरान, <strong>टेस्टिंग के लिए स्क्रीन रंग</strong> (screen colors for testing) प्रोजेक्ट करके आप कंट्रास्ट और व्हाइट लेवल्स को समायोजित कर सकते हैं। हमारा <strong>फुल स्क्रीन कलर टेस्ट</strong> (full screen color test) टूल पूरी तरह से क्लाइंट-साइड चलता है, जो बिना किसी बफरिंग के तेज़ गति से इमेज डाउनलोड विकल्प के साथ प्रस्तुत होता है। तो आज ही सेपिया, आरजीबी और अपने मनपसंद रंगों से <strong>ऑनलाइन स्क्रीन रंग टेस्ट</strong> (test screen colors online) करें और <strong>मॉनिटर रंग टेस्ट</strong> (test monitor colors) प्रक्रिया को आसान बनाएं।'
        ]
      },
      ja: {
        heading: '画面色テストツールとカスタムカラー画面による高度な診断',
        paragraphs: [
          '液晶モニター、スマートフォン、タブレット、あるいはテレビなどの画面表示能力や発色精度を評価する場合、オンラインの <strong>画面色テストツール</strong> (screen color testing tool) を利用するのが手軽です。当サイトの <strong>カスタムカラー画面</strong> (custom color screen) ツールは診断用テストパターン表示機として機能し、HEXコード、HSL調律、RGBカラーレンジ、独自カラーピッカーなどから任意の単色カラーを生成できます。全画面表示による <strong>画面色テスト</strong> (screen color test) は、ブラウザバーやデスクトップの邪魔な要素を完全に隠し、ディスプレイの視野角や色の再現力、発色偏差を見分けるのに重宝します。スマートフォン用の <strong>ディスプレイ色テスト</strong> (display color test) やPCでの <strong>モニター色テスト</strong> (monitor color test) に最適です。',
          '画面パネルに物理的な不良が潜んでいないかを特定するには、専用の <strong>カラー画面テスト</strong> (color screen test) を行うのが効果的です。例えば、液晶パネルのサブピクセル異常を検証する <strong>ドット抜けカラーテスト</strong> (dead pixel color test) は、複数の基本色を均一に切り替える検査として重要です。同様に、画面端部などからの光量漏れを確認する <strong>バックライト漏れカラーテスト</strong> (back light bleed color test) にも単色表示機能が欠かせません。この作成プログラムは、履歴の保存、お気に入りのグループ化、<strong>RGB画面テスト</strong> (rgb screen test) モードに対応しており、表示均一性を短時間で診断できます。',
          '品質判定チェックだけでなく、本ページは映像編集者や撮影スタジオにおける色調決定や照明としても役立てられています。プロジェクター投写環境의 セットアップ時において、様々な <strong>テスト用画面色</strong> (screen colors for testing) をスクリーンに投影することでホワイトバランスのズレを完璧に調整可能です。当サイトの <strong>全画面色テスト</strong> (full screen color test) の仕組みはローカル実行され、インターネット環境に左右されず即時表示・画像保存が行えます。ユーザーの用途に応じて <strong>画面色をオンラインでテスト</strong> (test screen colors online) し、簡単に <strong>モニター色をテスト</strong> (test monitor colors) してみてください。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'blue-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Blue Screen Online Tool & Use Cases',
        paragraphs: [
          'When creators and professionals need a vibrant solid backdrop, they look for a <strong>blue screen online</strong> tool. Using a <strong>blue fullscreen background</strong> is a wonderful alternative to green screens for compiling YouTube videos, or acting as a clear visual aid in presentations to make text jump out. Our high-fidelity <strong>blue screen online</strong> page runs instantly in any browser without logging in or downloading bundles. It is excellent for generating a unique atmospheric vibe or even serving as a <strong>blue screen for kids</strong> with educational canvas projections.',
          'For display testing, having a solid <strong>blue screen for cleaning</strong> helps you inspect panel quality. Running a <strong>blue screen for monitor cleaning</strong> makes it convenient to use a <strong>blue screen to find dead pixels</strong> and a <strong>blue screen to find dirty spots</strong> on your display. If you are a developer testing crash routines, instead of running a crash-inducing <strong>sysinternals blue screen tool</strong> (like NotMyFault) that risks corrupting files, you can use our safe <strong>fake blue screen online</strong> simulator to display a harmless blue field on your laptop or secondary monitors.',
          'Aside from display tests, this utility functions as a brilliant <strong>blue screen light effect</strong> panel. By casting a solid <strong>blue light online</strong>, it serves as a soft <strong>blue color light</strong> source. Perfect as a <strong>blue light for video calls</strong>, a <strong>blue light for selfie</strong> shots, or simulating <strong>blue led lights online</strong>, it projects a cool LED glow on your face. You can also project the canvas as a <strong>blue screen for projector</strong> setups, bringing a sleek, artistic neon light atmosphere to any room or bedroom studio.'
        ]
      },
      es: {
        heading: 'Optimización de Pantalla Azul y Casos de Uso',
        paragraphs: [
          'Cuando los creadores de contenido y profesionales necesitan un fondo sólido vibrante, recurren a una herramienta de <strong>pantalla azul online</strong>. Utilizar un <strong>fondo de pantalla azul completo</strong> es una excelente alternativa a las pantallas verdes para editar videos de YouTube o servir de ayuda visual en presentaciones profesionales. Nuestra página de <strong>pantalla azul online</strong> se ejecuta al instante sin descargas, ideal para crear una atmósfera relajante, inspirar la creatividad artística o configurar una <strong>pantalla azul para niños</strong> de uso educativo.',
          'Para mantenimiento y diagnóstico, contar con una <strong>pantalla azul para limpieza</strong> te ayuda a verificar la calidad del monitor. Hacer un mantenimiento de <strong>pantalla azul para limpieza de monitores</strong> permite usar una <strong>pantalla azul para encontrar píxeles muertos</strong> y una <strong>pantalla azul para encontrar manchas sucias</strong> en el panel físico. Si necesitas simular un error sin forzar la herramienta de <strong>pantalla azul de sysinternals</strong> (NotMyFault) que podría dañar tus archivos, nuestra utilidad proporciona una simulación inofensiva de <strong>pantalla azul falsa online</strong> perfecta para tus pruebas.',
          'Además, esta página sirve como un gran panel de <strong>efecto de luz de pantalla azul</strong>. Al proyectar una <strong>luz azul online</strong>, funciona como fuente de <strong>luz de color azul</strong> ambiental. Es ideal como <strong>luz azul para videollamadas</strong>, <strong>luz azul para selfies</strong> o para simular un conjunto de <strong>luces led azules online</strong>, proyectando una tonalidad fría en el rostro. También funciona como una <strong>pantalla azul para proyector</strong> en salas de estudio o estudios de fotografía.'
        ]
      },
      pt: {
        heading: 'Ferramenta de Tela Azul e Cenários de Uso',
        paragraphs: [
          'Quando criadores e profissionais precisam de um fundo sólido vibrante, eles buscam uma ferramenta de <strong>tela azul online</strong>. Utilizar um <strong>fundo de tela azul completo</strong> serve como ótima alternativa às telas verdes para produzir vídeos do YouTube ou como apoio visual em apresentações de slides. Nossa página de <strong>tela azul online</strong> funciona em qualquer dispositivo sem precisar baixar arquivos, ajudando a criar uma vibe relaxante no quarto, servir de inspiração artística ou entreter com uma <strong>tela azul para crianças</strong>.',
          'Para manutenção de painéis, a <strong>tela azul para limpeza</strong> permite verificar a integridade física do seu monitor. Utilizar a <strong>tela azul para limpeza de monitor</strong> ajuda a ter uma <strong>tela azul para encontrar pixels mortos</strong> ou travados e uma <strong>tela azul para achar manchas de sujeira</strong>. Caso precise simular erros de código sem utilizar a ferramenta de <strong>tela azul da sysinternals</strong> (como NotMyFault), que induz crashes reais, nosso simulador oferece uma <strong>tela azul falsa online</strong> inofensiva e segura para computadores.',
          'Além disso, o utilitário funciona como um excelente <strong>efeito de luz de tela azul</strong>. Ao emitir uma <strong>luz azul online</strong> contínua, serve como um painel de <strong>luz de cor azul</strong>. É excelente como <strong>luz azul para videochamadas</strong>, <strong>luz azul para selfie</strong> ou para simular <strong>luzes de led azul online</strong>. Você também pode projetar o sinal como uma <strong>tela azul para projetores</strong>, trazendo uma atmosfera neon minimalista a qualquer cômodo de trabalho.'
        ]
      },
      fr: {
        heading: 'Outil Écran Bleu en Ligne & Cas d\'Usage',
        paragraphs: [
          'Lorsque les créateurs et professionnels ont besoin d\'un fond uni coloré, ils recherchent un outil d\'<strong>écran bleu en ligne</strong>. Utiliser un <strong>arrière-plan écran bleu plein écran</strong> constitue une superbe alternative aux écrans verts pour le montage de vidéos YouTube ou comme support visuel dans vos présentations. Notre page d\'<strong>écran bleu en ligne</strong> se charge en un instant sans inscription, idéale pour créer une ambiance sereine, stimuler l\'inspiration artistique ou servir d\'<strong>écran bleu pour enfants</strong> lors d\'activités ludiques.',
          'Pour l\'entretien, disposer d\'un <strong>écran bleu pour le nettoyage</strong> vous permet d\'inspecter l\'état de votre écran. Utiliser un <strong>écran bleu pour le nettoyage de moniteur</strong> facilite la tâche pour utiliser un <strong>écran bleu pour trouver des pixels morts</strong> et un <strong>écran bleu pour repérer des tâches de saleté</strong>. Si vous êtes développeur et désirez simuler un plantage système sans utiliser l\'outil d\'<strong>écran bleu de sysinternals</strong> (NotMyFault) qui crash réellement l\'OS, notre site propose un <strong>faux écran bleu en ligne</strong> inoffensif.',
          'Cet outil fait également office de panneau d\'<strong>effet de lumière d\'écran bleu</strong>. En diffusant une <strong>lumière bleue en ligne</strong>, il agit comme source de <strong>lumière de couleur bleue</strong> douce. C\'est parfait comme <strong>lumière bleue pour visioconférence</strong>, <strong>lumière bleue pour selfie</strong> ou pour simuler des <strong>lumières led bleues en ligne</strong>. Vous pouvez également projeter ce rendu comme <strong>écran bleu pour projecteur</strong>, éclairant votre studio ou chambre d\'un éclat bleuté moderne.'
        ]
      },
      de: {
        heading: 'Blauer Bildschirm Online-Tool & Anwendungen',
        paragraphs: [
          'Wenn Web-Kreative und professionelle Anwender einen einfarbigen Hintergrund benötigen, greifen sie auf ein <strong>blauer Bildschirm Online-Tool</strong> zurück. Ein <strong>vollflächiger blauer bildschirmhintergrund</strong> ist eine hervorragende Alternative zu Greenscreens für YouTube-Videos oder dient als visuelle Hilfe bei Vorträgen. Unser <strong>blauer Bildschirm online</strong> ist werbefrei und läuft ohne Downloads, um eine entspannende Atmosphäre zu schaffen, die Kreativität anzuregen oder einen <strong>blauen Bildschirm für Kinder</strong> als Lernhilfe bereitzustellen.',
          'Zur Inspektion von Displays hilft ein <strong>blauer Bildschirm zur Reinigung</strong>, um die Panel-Qualität zu prüfen. Mit dem Tool für <strong>blauer Bildschirm zur Monitorreinigung</strong> können Sie bequem ein <strong>blauer bildschirm zum pixelfehler finden</strong> und ein <strong>blauer bildschirm zum schmutzflecken aufspüren</strong> nutzen. Wenn Sie Systemfehler simulieren wollen, ohne das absturzauslösende <strong>sysinternals blue screen tool</strong> (NotMyFault) auszuführen, liefert unsere Anwendung eine problemlose <strong>falsche blaue Bildschirm Online-Simulation</strong> für Ihr Notebook oder PC.',
          'Zudem eignet sich die Seite ideal als <strong>blaue Bildschirm-Lichteffekt</strong>-Quelle. Durch die Ausstrahlung von <strong>blaues Licht online</strong> erhalten Sie ein weiches <strong>blaues Farblicht</strong>. Perfekt als <strong>blaues Licht für Videocalls</strong>, <strong>blaues Licht für Selfies</strong> oder um eine <strong>blaue led-beleuchtung online</strong> zu simulieren, wirft das Display ein kühles Licht auf Ihr Gesicht. Sie können es auch als <strong>blauer Bildschirm für projektoren</strong> nutzen und ein modernes Neon-Ambient-Licht zaubern.'
        ]
      },
      hi: {
        heading: 'नीली स्क्रीन ऑनलाइन टूल और सामान्य उपयोग',
        paragraphs: [
          'जब कलाकारों और पेशेवरों को एक जीवंत ठोस पृष्ठभूमि की आवश्यकता होती है, तो वे एक <strong>नीली स्क्रीन ऑनलाइन</strong> टूल की तलाश करते हैं। यूट्यूब वीडियो संपादन के लिए ग्रीन स्क्रीन के विकल्प के रूप में या प्रस्तुति के दौरान टेक्स्ट को उभारने के लिए <strong>नीला फुलस्क्रीन बैकग्राउंड</strong> एक बेहतरीन सहायता है। हमारा <strong>नीली स्क्रीन ऑनलाइन</strong> पेज किसी भी ब्राउज़र में तुरंत चलता है, जो कमरे में एक शांत माहौल बनाने, कलात्मक प्रेरणा जगाने या बच्चों के लिए <strong>बच्चों के लिए नीली स्क्रीन</strong> प्रोजेक्टर के रूप में काम करता है।',
          'डिस्प्ले रखरखाव के लिए, एक <strong>सफाई के लिए नीली स्क्रीन</strong> होने से पैनल की गुणवत्ता की जांच आसान हो जाती है। <strong>मॉनिटर की सफाई के लिए नीली स्क्रीन</strong> का उपयोग करने से स्क्रीन पर <strong>डेड पिक्सल ढूंढने</strong> और <strong>गंदगी के धब्बे खोजने</strong> में मदद मिलती है। यदि आप ओएस त्रुटि का अनुकरण करना चाहते हैं और सिसइंटरनल्स के असली क्रैश करने वाले <strong>sysinternals ब्लू स्क्रीन टूल</strong> (NotMyFault) से बचना चाहते हैं, तो हमारा टूल एक सुरक्षित और हानिरहित <strong>नकली नीली स्क्रीन ऑनलाइन</strong> प्रदान करता है।',
          'इसके अतिरिक्त, यह टूल एक शानदार <strong>ब्लू स्क्रीन लाइट इफेक्ट</strong> के रूप में कार्य करता है। ठोस <strong>ब्लू लाइट ऑनलाइन</strong> डालकर, यह एक शांत <strong>नीला रंग प्रकाश</strong> स्रोत बनाता है। यह <strong>वीडियो कॉल के लिए ब्लू लाइट</strong>, <strong>सेल्फी के लिए ब्लू लाइट</strong> या ऑनलाइन <strong>ब्लू एलईडी लाइट्स सिम्यूलेटर</strong> के रूप में आपके चेहरे पर बढ़िया ग्लो फेंकता है। आप इसे <strong>प्रोजेक्टर के लिए नीली स्क्रीन</strong> के रूप में भी कास्ट कर सकते हैं, जिससे आपके स्टूडियो या कमरे में एक आधुनिक नियॉन लाइट्स का फील आता है।'
        ]
      },
      ja: {
        heading: 'ブルースクリーン（青い画面）のSEO最適化と主な用途',
        paragraphs: [
          'クリエイターやビジネス用途で鮮明な単色背景が必要な場合、便利な<strong>ブルースクリーンオンライン</strong>が重宝されます。編集素材として <strong>ブルー全画面背景</strong>を使用することは、ユーチューブ動画制作でグリーンバックの代わりとして使うのに最適で、スライド講義で視覚的な注目度を高めるのにも効果的です。当サイトの<strong>ブルースクリーンオンライン</strong>はインストール不要で素早く開き、部屋を落ち着いた雰囲気にしたり、絵画の発想を練る空間にしたり、<strong>子供用ブルースクリーン</strong>の投影画面としても活用できます。',
          '液晶の手入れ時には、全面の<strong>掃除用ブルースクリーン</strong>を表示することでパネルの品質を細かく点検できます।। **モニター掃除用ブルースクリーン**を利用することで、パネルに生じた<strong>ドット抜けを発見</strong>したり、<strong>液晶の汚れを発見</strong>することが非常に簡単になります。開発などでエラー画面を検証する際、PCを本当に強制ダウンさせる<strong>sysinternalsブルースクリーンツール</strong> (NotMyFault) を使用する代わりに、当サイトの安全な<strong>偽のブルースクリーンオンライン</strong>シミュレータが役立ちます。',
          'また、このWebツールは高輝度な<strong>青い画面の光効果</strong>用としても評価されています。全面に明るい<strong>ブルーライトオンライン</strong>を表示することで、冷涼感のある<strong>青いカラーライト</strong>を照射できます।। これは<strong>ビデオ通話用ブルーライト</strong>や、自撮りでの<strong>セルフィー用ブルーライト</strong>として利用でき、<strong>青いledライトオンライン</strong>照明のような雰囲気を演出します。さらに<strong>プロジェクター用ブルースクリーン</strong>として壁に投射すれば、部屋にモダンなネオンの輝きをもたらします。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'green-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Green Screen Online Tool & Use Cases',
        paragraphs: [
          'When configuring chroma key environments, video creators and remote workers look for a reliable <strong>green screen online tool</strong>. By using our <strong>full green screen online</strong> utility, you gain a stable, <strong>real green screen free</strong> of watermarks or overlays. It is a seamless <strong>green screen online tool free</strong> of charges or signups, serving as a dynamic <strong>green screen generator</strong> for high-quality video content creation, Photoshop superimpositions, and virtual meetings on Zoom or Teams where a clean <strong>green screen background</strong> is required.',
          'Many users visit a <strong>full green screen free</strong> page to create a soothing visual experience or cast a calming green glow. Running a <strong>green screen backgrounds</strong> page mimics the relaxing frequency of trees and grass, which works beautifully as a silent background to reduce eye strain during computer work pauses. It also serves as a premium <strong>green color light</strong> source, functioning as a <strong>green light online</strong> or <strong>green light for video calls</strong> and a <strong>green light for selfie</strong> shots, generating rich <strong>green screen lighting</strong> on your face.',
          'For display calibration, setting up a <strong>green screen test online</strong> or a <strong>green screen display problem</strong> check helps identify panel defects. When checking a laptop screen, monitor, or home projector, casting a solid green field makes it easy to spot dead pixels, dirty spots, and dark zones. The utility lets you run a detailed <strong>green screen test online</strong> sequence across different devices, from desktop panels to smartphone screens, ensuring absolute color channel uniformity and helping in physical monitor cleaning.',
          'To support offline workflows, our panel lets you initiate <strong>green screen backgrounds free</strong> downloads. Creators can export a <strong>real green screen png</strong> file or configure high-density layouts like <strong>green screen backgrounds 4k</strong> settings. This makes it simple to obtain <strong>free green screen backgrounds no copyright</strong> restrictions for editing, gaming backdrops, or classroom projections. With simple sidebar controls, you can customize your <strong>green fullscreen background</strong> or run a fast <strong>green led lights online</strong> simulation for kids and creators alike.'
        ]
      },
      es: {
        heading: 'Optimización de Pantalla Verde y Casos de Uso',
        paragraphs: [
          'Al configurar entornos de chroma key, los creadores de contenido y profesionales remotos buscan una <strong>herramienta de pantalla verde online</strong> confiable. Al utilizar nuestra utilidad de <strong>pantalla verde completa online</strong>, obtienes un recurso de <strong>pantalla verde real gratis</strong> de marcas de agua o anuncios invasivos. Es una <strong>herramienta de pantalla verde online gratis</strong> e inmediata, ideal como un <strong>generador de pantalla verde</strong> para la creación de videos de calidad profesional, montajes en Photoshop o fondos virtuales en Teams y Zoom donde se requiere un fondo de <strong>pantalla verde</strong> limpio para superponer imágenes.',
          'Muchos usuarios acceden a una <strong>pantalla verde completa gratis</strong> para crear una experiencia visual relajante o proyectar un agradable brillo verde. Configurar una página de <strong>fondos de pantalla verde</strong> imita la frecuencia relajante de árboles y plantas, lo cual es excelente como un fondo estático para reducir la fatiga visual durante las pausas laborales. También funciona como una fuente de <strong>luz verde online</strong> o <strong>luz verde para videollamadas</strong> y <strong>luz verde para selfies</strong>, proyectando una <strong>iluminación de pantalla verde</strong> uniforme en tu rostro en cualquier habitación.',
          'Para calibrar pantallas, realizar una <strong>prueba de pantalla verde online</strong> o una comprobación de <strong>problema en la pantalla verde</strong> te ayuda a revelar defectos de visualización. Al revisar un portátil, monitor externo o proyector, este fondo sólido de color verde facilita la búsqueda de píxeles muertos, manchas sucias o anomalías de color en el panel físico. El sitio permite ejecutar una <strong>prueba de pantalla verde online</strong> interactiva e inspeccionar la uniformidad del color, lo que también ayuda en el mantenimiento y la limpieza del monitor.',
          'Para proyectos fuera de línea, puedes iniciar una <strong>descarga de fondos de pantalla verde gratis</strong> desde el panel. Guarda una <strong>imagen de pantalla verde png</strong> real de alta calidad o plantillas en resolución <strong>fondos de pantalla verde 4k</strong>. Esto te permite obtener <strong>fondos de pantalla verde gratis sin derechos de autor</strong> para edición o fondos de videojuegos personalizados. Con controles laterales sencillos, regula tu <strong>pantalla verde de fondo completo</strong> o simula un panel de luces led verdes en tu dispositivo para uso educativo con niños.'
        ]
      },
      pt: {
        heading: 'Ferramenta de Tela Verde e Cenários de Uso',
        paragraphs: [
          'Ao configurar ambientes chroma key, criadores de vídeo e profissionais remotos buscam uma <strong>ferramenta de tela verde online</strong> confiável. Ao usar nosso recurso de <strong>tela verde completa online</strong>, você garante uma <strong>tela verde real grátis</strong> de marcas d\'água ou banners irritantes. É uma <strong>ferramenta de tela verde online grátis</strong> e rápida de carregar, operando como um <strong>gerador de tela verde</strong> dinâmico para edição avançada de vídeo, sobreposições em Photoshop e reuniões virtuais em que um fundo limpo de <strong>tela verde</strong> é essencial.',
          'Muitas pessoas acessam a <strong>tela verde completa grátis</strong> para obter uma visualização suavizante ou emitir um brilho verde relaxante. Exibir nossa página de <strong>fundos de tela verde</strong> ajuda a simular os tons verdes da floresta e da grama, um visual silencioso para descansar a vista durante pausas no trabalho de computador. A página também funciona como fonte de <strong>luz verde online</strong>, <strong>luz verde para videochamadas</strong> e <strong>luz verde para selfie</strong>, gerando uma <strong>iluminação de tela verde</strong> contínua sobre o rosto.',
          'Para calibração de displays, iniciar um <strong>teste de tela verde online</strong> ou uma inspeção de <strong>problema de exibição na tela verde</strong> ajuda a detectar falhas de pixels. Ao examinar a tela do notebook, monitor ou projetor, a cor verde brilhante ajuda a encontrar pixels mortos, manchas de sujeira no vidro e vazamento de luz. A ferramenta suporta a execução de um <strong>teste de tela verde online</strong> preciso em qualquer dispositivo, otimizando o processo de calibração e limpeza do monitor físico.',
          'Para trabalhos salvos localmente, nosso painel suporta <strong>baixar fundos de tela verde grátis</strong>. Desenvolvedores podem baixar um arquivo <strong>tela verde real png</strong> de alta resolução ou fazer o download em <strong>fundos de tela verde 4k</strong>. Isso facilita conseguir <strong>fundos de tela verde grátis sem direitos autorais</strong> para gameplay, apresentações de professores ou efeitos. Com a barra de ferramentas, controle a <strong>tela de fundo verde completa</strong> ou crie painéis de led educativos.'
        ]
      },
      fr: {
        heading: 'Outil Écran Vert en Ligne & Cas d\'Usage',
        paragraphs: [
          'Pour configurer des environnements avec incrustation chroma key, les créateurs de contenu recherchent un <strong>outil d\'écran vert en ligne</strong> performant. En ouvrant notre utilitaire d\'<strong>écran vert complet en ligne</strong>, vous profitez d\'un <strong>écran vert virtuel gratuit</strong> sans publicité intrusive. C\'est un <strong>outil d\'écran vert en ligne gratuit</strong> et direct, agissant comme un <strong>générateur d\'écran vert</strong> complet pour la production de vidéos, les retouches complexes sous Photoshop, et l\'affichage d\'un <strong>arrière-plan d\'écran vert</strong> neutre lors de réunions Zoom ou Teams.',
          'Nombre d\'internautes affichent un <strong>écran vert complet gratuit</strong> pour instaurer une ambiance apaisante ou projeter un halo lumineux vert. Notre page d\'<strong>arrière-plans d\'écran vert</strong> imite les fréquences végétales de la nature pour réduire la fatigue oculaire lors des pauses de travail. C\'est également une excellente source de <strong>lumière verte en ligne</strong>, de <strong>lumière verte pour réunions</strong> ou de <strong>lumière verte pour selfie</strong>, diffusant un <strong>éclairage d\'écran vert</strong> homogène pour vos tournages ou diffusions en direct.',
          'Pour la calibration d\'affichages, effectuer un <strong>test d\'écran vert en ligne</strong> ou cibler un <strong>problème d\'affichage d\'écran vert</strong> permet de détecter les anomalies de dalle. Que ce soit sur un écran de pc portable, un écran de bureau ou un projecteur, le vert solide met immédiatement en valeur les pixels défectueux ou la poussière. Lancez un <strong>test d\'écran vert en ligne</strong> pour vérifier la colorimétrie et faciliter le nettoyage de vos moniteurs.',
          'Pour vos besoins graphiques, notre application permet de lancer le <strong>téléchargement d\'arrière-plans d\'écran vert gratuits</strong>. Enregistrez une image d\'<strong>écran vert réel png</strong> haute définition ou configurez des formats d\'<strong>arrière-plans d\'écran vert 4k</strong>. Vous disposez ainsi d\'<strong>arrière-plans d\'écran vert gratuits sans droits d\'auteur</strong> pour la vidéo, le streaming de jeux ou des présentations scolaires. Utilisez nos contrôles d\'<strong>écran vert de fond plein écran</strong> pour animer l\'espace.'
        ]
      },
      de: {
        heading: 'Grüner Bildschirm Online-Tool & Anwendungen',
        paragraphs: [
          'Für die Erstellung von Chroma-Key-Effekten benötigen Videoproduzenten ein verlässliches <strong>grünes Bildschirm Online-Tool</strong>. Durch unsere <strong>grüner Bildschirm vollbild online</strong>-Anwendung erhalten Sie einen <strong>echten grünen Bildschirm kostenlos</strong> und ohne störende Werbebanner. Es handelt sich um ein <strong>grüner bildschirm online-tool kostenlos</strong>, das als <strong>Grünschirm-Generator</strong> arbeitet, um professionelle Videos, Fotobearbeitungen in Photoshop und virtuelle Meetings zu unterstützen, die einen sauberen <strong>Grünschirm-Hintergrund</strong> voraussetzen.',
          'Viele Besucher rufen einen <strong>vollständigen grünen Bildschirm kostenlos</strong> auf, um eine beruhigende Atmosphäre zu schaffen oder ein angenehmes grünes Leuchten zu erzeugen. Die Seite für <strong>Grünschirm-Hintergründe</strong> ahmt die erholsame Wirkung von Wald und Wiesen nach, um die Augen in Arbeitspausen am PC zu entspannen. Sie eignet sich zudem als Quelle für ein <strong>grünes Licht online</strong> bzw. <strong>grünes Licht für Videocalls</strong> und <strong>grünes Licht für Selfies</strong>, das eine weiche <strong>grüne Bildschirm-Beleuchtung</strong> liefert.',
          'Für Monitorkalibrierungen hilft ein <strong>grüner bildschirm test online</strong> oder eine Prüfung auf <strong>anzeigeprobleme bei grünem bildschirm</strong>, Panel-Fehler aufzubecken. Auf Laptops, Fernsehern oder Projektoren macht das solide Grün Pixelfehler, Staubreste und Farbverzerrungen sofort sichtbar. Testen Sie das Panel mit unserer interaktiven <strong>grüner bildschirm test online</strong>-Sequenz auf Reinheit, um das Display gründlich zu reinigen.',
          'Für Offline-Projekte ermöglicht unsere Steuerung den einfachen <strong>kostenlosen download grüner bildschirmhintergründe</strong>. Sie können ein <strong>echtes grüner bildschirm png</strong>-Bild speichern oder hochauflösende <strong>grüne bildschirmhintergründe 4k</strong>-Daten generieren. Damit erhalten Sie <strong>gratis grüne bildschirmhintergründe ohne urheberrecht</strong> für den Videoschnitt, Livestreams oder Schulprojekte. Gestalten Sie Ihren <strong>vollflächigen grünen hintergrund</strong> passend für Kinder und Kreative.'
        ]
      },
      hi: {
        heading: 'ग्रीन स्क्रीन ऑनलाइन टूल और सामान्य उपयोग',
        paragraphs: [
          'क्रोमा की (chroma key) सेटअप के लिए वीडियो क्रिएटर्स और रिमोट प्रोफेशनल्स एक विश्वसनीय <strong>ग्रीन स्क्रीन ऑनलाइन टूल</strong> खोजते हैं। हमारे <strong>फुल ग्रीन स्क्रीन ऑनलाइन</strong> टूल का उपयोग करके, आपको वॉटरमार्क या विज्ञापनों के बिना एक <strong>वास्तविक ग्रीन स्क्रीन फ्री</strong> में मिलती है। यह एक त्वरित <strong>ग्रीन स्क्रीन ऑनलाइन टूल फ्री</strong> प्रोग्राम है जो फोटोशॉप कंपोजिट, वीडियो कॉल्स और वीडियो एडिटिंग के लिए एक सहज <strong>ग्रीन स्क्रीन बैकग्राउंड</strong> प्रदान करने वाले <strong>ग्रीन स्क्रीन जनरेटर</strong> की तरह काम करता है।',
          'कई उपयोगकर्ता एक सुखद विज़ुअल अनुभव बनाने या हरी चमक फैलाने के लिए <strong>फुल ग्रीन स्क्रीन फ्री</strong> पेज चालू करते हैं। यह <strong>ग्रीन स्क्रीन बैकग्राउंड</strong> प्राकृतिक पत्तों और घास के रंगों की याद दिलाता है, जो कंप्यूटर पर काम के दौरान आँखों के तनाव को कम करने और रिलैक्स करने में मदद करता है। इसके अलावा, यह वीडियो कॉल और सेल्फी के लिए एक सुंदर <strong>ग्रीन लाइट ऑनलाइन</strong>, <strong>वीडियो कॉल के लिए ग्रीन लाइट</strong>, और <strong>सेल्फी के लिए ग्रीन लाइट</strong> का स्रोत बनकर चेहरे पर एक समान <strong>ग्रीन स्क्रीन लाइटिंग</strong> भी प्रदान करता है।',
          'डिस्प्ले विश्लेषण के लिए, <strong>ग्रीन स्क्रीन टेस्ट ऑनलाइन</strong> चलाना या <strong>ग्रीन स्क्रीन डिस्प्ले समस्या</strong> की जांच करना स्क्रीन के दोषों को प्रकट करता है। लैपटॉप, मॉनिटर या प्रोजेक्टर स्क्रीन की जांच करते समय, यह ठोस हरा रंग डेड पिक्सेल, गंदगी की धूल, और बैकलाइट समानताओं को आसानी से दिखा देता है। यह ऐप प्रत्येक डिवाइस पर बेहतर कलर चैनल जांच के लिए <strong>ग्रीन स्क्रीन टेस्ट ऑनलाइन</strong> करना आसान बनाता है ताकि मॉनिटर क्लीनिंग सरलता से की जा सके।',
          'ऑफ़लाइन आवश्यकताओं के लिए, यह पैनल आपको बिना किसी शुल्क के <strong>फ्री ग्रीन स्क्रीन बैकग्राउंड</strong> डाउनलोड करने देता है। आप उच्च गुणवत्ता वाला <strong>वास्तविक ग्रीन स्क्रीन PNG</strong> डाउनलोड कर सकते हैं या <strong>ग्रीन स्क्रीन बैकग्राउंड 4k</strong> रेजोल्यूशन सहेज सकते हैं। इससे आपको संपादन और गेमिंग बैकड्रॉप के लिए <strong>फ्री ग्रीन स्क्रीन बैकग्राउंड नो कॉपीराइट</strong> प्रतिबंधों के साथ मिल जाता है। हमारी नियंत्रण बार के साथ अपनी <strong>ग्रीन फुलस्क्रीन बैकग्राउंड</strong> को प्रबंधित करें या बच्चों के लिए कलर लाइटिंग बनाएं।'
        ]
      },
      ja: {
        heading: 'グリーンスクリーン（緑の画面）のSEO最適化と主な用途',
        paragraphs: [
          'クロマキー合成環境を設定する際、多くの映像制作者が実用的な<strong>グリーンスクリーンオンラインツール</strong>を探します。当サイトの<strong>グリーンバック全画面オンライン</strong>を活用することで、広告や透かし表示等の一切ない<strong>リアルなグリーンスクリーン無料</strong>版を体験できます。登録不要ですぐに使える便利な<strong>グリーンスクリーンオンラインツール無料</strong>ソフトとして、高品質な動画制作、フォトショップでの人物合成、さらにはビデオ会議用のクリーンな<strong>グリーンバック</strong>として機能する<strong>グリーンスクリーンジェネレーター</strong>です。',
          'リラックス効果や, 通話時のグリーンな光量調整を求めて<strong>全画面グリーンスクリーン無料</strong>ページを使用するユーザーも多くいます。エコロジーな<strong>グリーンバック背景</strong>を表示することは、木々や芝生の持つ色彩に近いリラックス感をもたらし、PC作業の休憩中に目のストレスを軽減するのに効果적です。また、自撮り用の<strong>グリーンライトオンライン</strong>や、<strong>ビデオ通話用グリーンライト</strong>、<strong>セルフィー用グリーンライト</strong>としても高輝度な<strong>グリーンスクリーン照明</strong>を提供します。',
          'モニターのドット抜けテストやキャリブレーション等では、<strong>グリーンスクリーンテストオンライン</strong>機能や<strong>グリーンスクリーン表示問題</strong>のチェックが色斑の検知に役立ちます。ノートPC、サブモニター、プロジェクターなどの表示精度を検証する際、均一な緑色を表示することでドット落ちや色むら、ホコリ汚れを目立たせることができます。これにより<strong>グリーンスクリーンテストオンライン</strong>が簡単に行え、モニターの清掃やメンテナンス工程を能率化します。',
          'オフラインでの編集作業用に、サイドツールから<strong>グリーンスクリーン背景無料ダウンロード</strong>を行えます。映像素材に適した透過対応の<strong>グリーンスクリーンpng</strong>データや、高精細な<strong>グリーンスクリーン背景4K</strong>サイズのエクスポートに対応しています。これにより、動画編集、ストリーマーのゲーム背景、教具用プロジェクション等で使える<strong>著作権フリーグリーンスクリーン背景</strong>を速やかに入手できます。自在に<strong>グリーン全画面背景</strong>を調整してお楽しみください。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'black-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Black Screen Optimization & Use Cases',
        paragraphs: [
          'When you need a solid dark background, users search for options like a <strong>black screen wallpaper</strong>, a <strong>black screen download</strong>, or a <strong>full black screen</strong> utility. If you are operating on a <strong>black screen full screen laptop</strong> or using <strong>black screen full screen windows 11</strong> setups, this free utility acts as a <strong>full black screen website</strong> that functions without ads or banners. It is an excellent alternative to running a <strong>black screen full screen YouTube</strong> loop, providing a stable <strong>black screen full screen online windows 11</strong> application.',
          'For display evaluation, this tool offers a comprehensive <strong>black screen test laptop</strong> option and an <strong>OLED black screen test</strong>. You can perform a <strong>black screen AMOLED test</strong>, check for backlight bleeding with a <strong>black screen test phone</strong> routine, or complete a <strong>black screen test iPhone</strong> diagnostics check. Running this test displays a pure <strong>black screen test image</strong> to identify stuck subpixels.',
          'For content creation and hardware workflows, creators often require specific sizes like a <strong>full black screen 1920x1080</strong>, a <strong>1080p black screen full screen</strong> layout, or a mobile-ready <strong>full black screen 9:16</strong> frame. You can use the sidebar options for rapid <strong>black screen full screen download</strong> to capture a <strong>black screen full screen image</strong> or a <strong>black full screen image</strong>. This serves as a <strong>free black screen online no copyright</strong> template, avoiding the need to search for a <strong>free black screen online video</strong> or look up a <strong>free black screen online download</strong> elsewhere, letting you quickly access pure <strong>black</strong>.',
          'People use a black screen for several key reasons. For display QA, a pure #000000 background helps reveal dead pixels and backlight bleed during monitor calibration. On OLED and AMOLED screens, using a dark screen switches off individual pixels, providing effective battery saving. Video editors use black screen backgrounds to check chroma-key margins and colors, while gamers use it to pad screen ratios. It is also perfect for cleaning dust off physical monitors, preventing static logo burn-in on plasma TVs, and creating a minimalist visual environment to concentrate or relax the eyes.'
        ]
      },
      es: {
        heading: 'Optimización de Pantalla Negra y Casos de Uso',
        paragraphs: [
          'Cuando se requiere un fondo oscuro sólido, los usuarios buscan opciones como un <strong>fondo de pantalla negra</strong>, una <strong>descarga de pantalla negra</strong> o un recurso de <strong>pantalla negra completa</strong>. Ya sea que lo use en una <strong>pantalla negra completa para portátil</strong> o en configuraciones de <strong>pantalla negra completa en Windows 11</strong>, esta utilidad gratuita funciona como un sitio de <strong>pantalla negra completa web</strong> limpio. Es una alternativa perfecta a transmitir una reproducción de <strong>pantalla negra completa en YouTube</strong>, actuando como una aplicación de <strong>pantalla negra completa online para Windows 11</strong>.',
          'Para inspección de paneles, esta página proporciona una <strong>prueba de pantalla negra en portátil</strong> y una <strong>prueba de pantalla negra en OLED</strong> dedicada. Permite ejecutar una <strong>prueba de pantalla negra en AMOLED</strong>, comprobar problemas con una <strong>prueba de pantalla negra en teléfono</strong>, o iniciar una <strong>prueba de pantalla negra en iPhone</strong> para identificar fugas de retroiluminación. Al usarla, se obtiene una <strong>imagen de prueba de pantalla negra</strong> pura para documentar fallos.',
          'En producción multimedia, los diseñadores necesitan dimensiones exactas como una <strong>pantalla negra completa de 1920x1080</strong>, un lienzo de <strong>pantalla negra completa de 1080p</strong> o un formato vertical de <strong>pantalla negra completa de 9:16</strong>. Las opciones de la barra permiten una <strong>descarga de pantalla negra completa</strong> instantánea para guardar una <strong>imagen de pantalla completa negra</strong> o una <strong>imagen negra en pantalla completa</strong>. Sirve como plantilla de <strong>pantalla negra online gratis sin derechos de autor</strong>, eliminando la necesidad de buscar un <strong>video de pantalla negra gratis online</strong> o recurrir a una <strong>descarga de video de pantalla negra gratis online</strong> para obtener el color <strong>negro</strong>.',
          'La gente utiliza una pantalla negra para diversos fines prácticos: calibrar monitores y revelar píxeles muertos, ahorrar batería en teléfonos móviles OLED al apagar fuentes de luz innecesarias, editar videos cromáticos como fondo neutro, oscurecer monitores secundarios sin apagarlos, reducir el gasto eléctrico y ocultar el brillo de ordenadores activos. También facilita limpiar motas de polvo del cristal físico, evita el quemado de imagen en pantallas de plasma y ofrece un espacio de minimalismo digital para estudiar o relajar la vista.'
        ]
      },
      pt: {
        heading: 'Cenários de pesquisa para tela preta',
        paragraphs: [
          'Quando as pessoas necessitam de um fundo escuro sólido, procuram termos como <strong>papel de parede tela preta</strong>, <strong>baixar tela preta</strong> ou a ferramenta de <strong>tela preta completa</strong>. Se você estiver operando em um <strong>notebook com tela preta cheia</strong> ou configurando uma <strong>tela preta cheia no Windows 11</strong>, esta página serve de <strong>site de tela preta completa</strong> limpo e imediato, superando a reprodução de uma <strong>tela preta cheia no YouTube</strong> e oferecendo uma <strong>tela preta completa online no Windows 11</strong> estável.',
          'Para testes de visor, este site oferece uma <strong>tela preta de teste para notebook</strong> e um <strong>teste de tela preta OLED</strong> de alta precisão. Você pode rodar um <strong>teste de tela preta AMOLED</strong>, verificar vazamento de luz com um <strong>teste de tela preta para celular</strong>, ou fazer um diagnóstico com um <strong>teste de tela preta para iPhone</strong>. O teste gera uma <strong>imagem de teste de tela preta</strong> ideal para capturar subpixels travados.',
          'Para fluxos de trabalho de vídeo e imagem, criadores buscam resoluções como <strong>tela preta completa 1920x1080</strong>, <strong>tela preta cheia em 1080p</strong> ou o enquadramento <strong>tela preta completa 9:16</strong> para dispositivos portáteis. O painel inclui a opção de <strong>baixar tela preta completa</strong> para arquivar localmente uma <strong>imagem de tela preta completa</strong> ou uma <strong>imagem preta em tela cheia</strong>. Esta ferramenta funciona como um modelo de <strong>tela preta online grátis sem direitos autorais</strong>, sem precisar procurar por um <strong>vídeo de tela preta grátis online</strong> ou <strong>baixar vídeo de tela preta grátis online</strong> para conseguir um fundo <strong>preto</strong>.',
          'As principais aplicações da tela preta incluem a detecção de pixels travados e backlight bleed na calibragem de monitores, economia de bateria em telas AMOLED desligando pixels inativos, revisão de chroma key de filmagens para editores de vídeo, e escurecimento de TVs ou monitores extras enquanto funcionam à noite. Além disso, expõe manchas de sujeira facilitando a limpeza física da tela, previne burn-in estático em TVs de plasma e apoia o foco visual para relaxar os olhos ou estudar.'
        ]
      },
      fr: {
        heading: "Usages et scénarios de recherche de l'écran noir",
        paragraphs: [
          'Pour obtenir un arrière-plan sombre, les utilisateurs recherchent un <strong>fond d\'écran noir</strong>, un <strong>téléchargement d\'écran noir</strong> ou un <strong>écran noir complet</strong>. Que vous travailliez sur un <strong>ordinateur portable avec écran noir complet</strong> ou une configuration sous <strong>écran noir complet Windows 11</strong>, ce site propose un <strong>site Web d\'écran noir complet</strong> immédiat. C\'est une excellente alternative à une boucle d\'<strong>écran noir complet sur YouTube</strong>, fonctionnant comme une application d\'<strong>écran noir complet en ligne pour Windows 11</strong>.',
          'Pour évaluer des panneaux d\'affichage, notre outil intègre un <strong>test d\'écran noir pour ordinateur portable</strong> et un <strong>test d\'écran noir OLED</strong>. Vous pouvez facilement lancer un <strong>test d\'écran noir AMOLED</strong>, déceler les fuites de rétroéclairage avec un <strong>test d\'écran noir pour téléphone</strong>, ou réaliser un diagnostic précis avec un <strong>test d\'écran noir pour iPhone</strong>. Ce processus génère une <strong>image de test d\'écran noir</strong> de référence pour repérer les anomalies.',
          'Pour la conception vidéo et graphique, les concepteurs exigent des formats comme un <strong>écran noir complet 1920x1080</strong>, une mise en page d\'<strong>écran noir complet 1080p</strong> ou un cadre de <strong>téléchargement écran noir complet 9:16</strong> vertical. Utilisez nos commandes latérales pour effectuer un <strong>téléchargement d\'écran noir complet</strong> afin d\'enregistrer une <strong>image d\'écran noir complet</strong> ou une <strong>image noire plein écran</strong>. Le service fait office de gabarit d\'<strong>écran noir en ligne gratuit sans droit d\'auteur</strong>, évitant d\'avoir à rechercher une <strong>vidéo d\'écran noir gratuit en ligne</strong> ou de chercher à <strong>télécharger une vidéo d\'écran noir gratuit en ligne</strong> pour obtenir du <strong>noir</strong>.',
          'Les utilisateurs exploitent l\'écran noir pour tester l\'uniformité de la dalle, économiser la batterie sur les téléphones mobiles OLED individuels, éditer et détourer des vidéos sur fond neutre, et éteindre visuellement un second moniteur sans couper le PC. De plus, il fait ressortir la poussière pour le nettoyage des écrans physiques, limite les risques de burn-in sur d\'anciens téléviseurs plasma, et favorise la concentration sous un environnement minimaliste.'
        ]
      },
      de: {
        heading: 'Schwarzer Bildschirm Optimierung & Einsatzzwecke',
        paragraphs: [
          'Wenn Sie ein solides dunkles Hintergrundbild benötigen, eignen sich Suchphrasen wie <strong>schwarzer bildschirm hintergrund</strong>, <strong>schwarzer bildschirm download</strong> oder <strong>schwarzer bildschirm vollbild</strong>. Ob auf einem <strong>schwarzer bildschirm vollbild laptop</strong> oder bei der Nutzung von <strong>schwarzer bildschirm vollbild windows 11</strong>, dieses kostenfreie Webtool fungiert als barrierefreie <strong>schwarzer bildschirm vollbild website</strong>. Es stellt eine erstklassige Alternative zu einem <strong>schwarzer bildschirm vollbild youtube</strong>-Video dar und bietet eine stabile <strong>schwarzer bildschirm vollbild online windows 11</strong>-Oberfläche.',
          'Zwecks Panel-Überprüfung enthält dieses Tool Optionen für einen <strong>schwarzer bildschirm test laptop</strong> und einen <strong>OLED schwarzer bildschirm test</strong>. Nutzer können einen <strong>schwarzer bildschirm AMOLED test</strong> starten, die Lichtverteilung mit einem <strong>schwarzer bildschirm test handy</strong> validieren oder einen <strong>schwarzer bildschirm test iPhone</strong> durchführen. Dabei wird ein reines <strong>schwarzer bildschirm test bild</strong> generiert, um fehlerhafte Pixel sichtbar zu machen.',
          'Für die Erstellung von Medieninhalten sind oft Abmessungen wie ein <strong>schwarzer bildschirm vollbild 1920x1080</strong>, eine <strong>1080p schwarzer bildschirm vollbild</strong>-Anzeige oder ein Hochformat-Ausschnitt in <strong>schwarzer bildschirm vollbild 9:16</strong> gefragt. Verwenden Sie die Seitenleiste für einen schnellen <strong>schwarzer bildschirm vollbild download</strong>, um ein <strong>schwarzer bildschirm vollbild bild</strong> oder ein <strong>schwarzes vollbild bild</strong> lokal zu speichern. So erhalten Sie eine Vorlage für einen <strong>freien schwarzer bildschirm online ohne urheberrecht</strong>, statt nach einem <strong>freien schwarzer bildschirm online video</strong> oder einem <strong>freien schwarzer bildschirm online download</strong> suchen zu müssen, um echtes <strong>schwarz</strong> darzustellen.',
          'Zu den beliebtesten Anwendungsbereichen gehören die Monitor-Kalibrierung (Erkennung von Pixelfehlern und Backlight-Bleeding), die Reduzierung des Energieverbrauchs bei OLED-Handys, das Maskieren beim Videoschnitt, das Abdunkeln von Zweitbildschirmen und der Schutz des Bildschirms vor statischem Einbrennen (Burn-In-Schutz bei Plasma-TVs). Zudem werden Staubflecken auf dem Glas beim Reinigen optimal sichtbar, und die dunkle Ästhetik hilft bei Meditation, konzentriertem Lernen oder der Entspannung geplagter Augen.'
        ]
      },
      hi: {
        heading: 'व्हाइट और ब्लैक स्क्रीन अनुकूलन और उपयोग',
        paragraphs: [
          'जब आपको एक ठोस गहरे बैकग्राउंड की आवश्यकता होती है, तो उपयोगकर्ता <strong>ब्लैक स्क्रीन वॉलपेपर</strong>, <strong>ब्लैक स्क्रीन डाउनलोड</strong>, या <strong>फुल ब्लैक स्क्रीन</strong> टूल की खोज करते हैं। चाहे आप <strong>ब्लैक स्क्रीन फुल स्क्रीन लैपटॉप</strong> का उपयोग कर रहे हों या <strong>ब्लैक स्क्रीन फुल स्क्रीन विंडोज़ 11</strong> सेटअप का, यह मुफ़्त यूटिलिटी एक <strong>फुल ब्लैक स्क्रीन वेबसाइट</strong> के रूप में कार्य करती है। यह <strong>ब्लैक स्क्रीन फुल स्क्रीन यूट्यूब</strong> वीडियो चलाने का एक उत्कृष्ट विकल्प है जो एक स्थिर <strong>ब्लैक स्क्रीन फुल स्क्रीन ऑनलाइन विंडोज़ 11</strong> वातावरण देता है।',
          'डिस्प्ले मूल्यांकन के लिए, यह टूल एक व्यापक <strong>ब्लैक स्क्रीन टेस्ट लैपटॉप</strong> विकल्प और विश्वसनीय <strong>ओएलईडी ब्लैक स्क्रीन टेस्ट</strong> प्रदान करता है। आप हमारे माध्यम से <strong>ब्लैक स्क्रीन एमोलेड टेस्ट</strong> कर सकते हैं, <strong>ब्लैक स्क्रीन टेस्ट फोन</strong> से बैकलाइट लीकेज की जांच कर सकते हैं, या <strong>ब्लैक स्क्रीन टेस्ट आईफोन</strong> डायग्नोस्टिक्स चला सकते हैं। यह टेस्ट डिस्प्ले पर एक शुद्ध <strong>ब्लैक स्क्रीन टेस्ट इमेज</strong> प्रस्तुत करता है।',
          'मीडिया संपादन के लिए, डिजाइनरों को अक्सर विशिष्ट आकारों की आवश्यकता होती है जैसे <strong>फुल ब्लैक स्क्रीन 1920x1080</strong>, <strong>1080p ब्लैक स्क्रीन फुल स्क्रीन</strong> लेआउट, या मोबाइल-रेडी <strong>फुल ब्लैक स्क्रीन 9:16</strong> फ्रेम। आप टूलबार से त्वरित <strong>ब्लैक स्क्रीन फुल स्क्रीन डाउनलोड</strong> का उपयोग करके एक <strong>ब्लैक स्क्रीन फुल स्क्रीन इमेज</strong> या एक <strong>ब्लैक फुल स्क्रीन इमेज</strong> प्राप्त कर सकते हैं। यह मुफ़्त <strong>फ्री ब्लैक स्क्रीन ऑनलाइन नो कॉपीराइट</strong> टेम्पलेट है, जिससे आपको <strong>फ्री ब्लैक स्क्रीन ऑनलाइन वीडियो</strong> या <strong>फ्री ब्लैक स्क्रीन ऑनलाइन डाउनलोड</strong> खोजने की आवश्यकता नहीं होगी, और आपको तुरंत गहरा <strong>काला</strong> रंग मिल जाएगा।',
          'लोग ब्लैक स्क्रीन का उपयोग कई कार्यों के लिए करते हैं: मॉनिटर कैलिब्रेशन के दौरान डेड पिक्सेल का परीक्षण, ओएलईडी फोन की स्क्रीन पर पिक्सेल बंद करके बैटरी बचाना, वीडियो संपादन में क्रोमा की का मूल्यांकन करना, बिना बंद किए सेकेंडरी मॉनिटर की चमक धीमा करना और आंखों को तनाव से बचाना। यह मॉनिटर से धूल साफ करने, प्लाज्मा टीवी पर स्क्रीन बर्न-इन को रोकने और विज़ुअल शांति के साथ पढ़ाई पर ध्यान केंद्रित करने में भी मदद करता है।'
        ]
      },
      ja: {
        heading: '黒い画面（Black Screen）のSEO最適化と主な用途',
        paragraphs: [
          '真っ暗な背景が必要な場合、ユーザーは <strong>黒い画面 壁紙</strong> や、<strong>黒い画面 ダウンロード</strong>、あるいは <strong>全画面 黒い画面</strong> といった用語を検索します。持ち運び用PCの <strong>黒い画面 全画面 ノートパソコン</strong> や、デスクトップの <strong>黒い画面 全画面 windows 11</strong> で作業をする場合、当ツールは完全に広告のない <strong>全画面 黒い画面 ウェブサイト</strong> として動作します。時間のかかる <strong>黒い画面 全画面 youtube</strong> 動画を再生するより簡単で、安定した <strong>黒い画面 全画面 オンライン windows 11</strong> ツールとして日常的に使えます。',
          '画面パネルのチェックにおいては、本ツールは詳細な <strong>黒い画面 テスト ノートパソコン</strong> や、定番の <strong>OLED 黒い画面 テスト</strong> 用途に最適です。画面の検査項目である <strong>黒い画面 AMOLED テスト</strong> や、モバイルディスプレイ向けの <strong>黒い画面 テスト スマホ</strong>、また <strong>黒い画面 テスト iPhone</strong> などを実行できます。このテストを実行すると、純粋な <strong>黒い画面 テスト 画像</strong> が出力され、初期確認などのドット抜け検知に役立ちます。',
          'メディア制作の現場では、映像クリエイターが <strong>全画面 黒い画面 1920x1080</strong> や、動画比率の <strong>1080p 黒い画面 全画面</strong>、スマホ向きの <strong>全画面 黒い画面 9:16</strong> などのサイズを必要とします。サイドメニューを使えば素早く <strong>黒い画面 全画面 ダウンロード</strong> を実行でき、<strong>黒い画面 全画面 画像</strong> や <strong>黒い全画面 画像</strong> をエクスポートできます。これにより <strong>無料 黒い画面 オンライン 著作権なし</strong> のテンプレート素材として使え、わざわざ <strong>無料 黒い画面 オンライン 動画</strong> を検索したり <strong>無料 黒い画面 オンライン ダウンロード</strong> で探す手間なしに、純粋な <strong>黒</strong> （ブラック）カラーを出力できます。',
          '黒い画面（無表示状態）は多くの目的で活用されます：モニターのキャリブレーションでスタックピクセルやバックライト漏れをチェックする、有機EL（OLED）スマートフォンの消灯ピクセル特性を利用してバッテリーを節約する、動画編集時のクロマキーチェックや合成動画の背景に使用する、パソコン本体を稼働させたまま（ダウンロードやエンコード中など）でサブモニターの輝度のみを暗くする、液晶テレビの焼き付き防止（Burn-in防止）、液晶表面のホコリ除去を楽にするためのクリーニング補助、または目の疲れを癒したり読書時の集中環境を整えるミニマリズム用途など、多岐にわたります。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'broken-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Broken Screen Prank – Fake Cracked Display Guide & Use Cases',
        paragraphs: [
          'The <strong>broken screen prank</strong> is one of the most effective and timeless pranks you can pull on friends, family, or coworkers. Our <strong>fake broken screen</strong> tool generates a photorealistic <strong>cracked screen</strong> effect that looks exactly like a physically shattered display. Whether you want a <strong>fake broken monitor prank</strong>, a <strong>fake broken laptop screen prank</strong>, or a <strong>fake cracked phone display</strong> to prank someone, this tool provides 8 high-resolution crack patterns that cycle through with a single click.',
          'People search for many related terms when looking for this kind of prank. Common search phrases include <strong>fake broken screen</strong>, <strong>broken screen prank</strong>, <strong>cracked screen simulator</strong>, <strong>fake crack screen</strong>, <strong>cracked screen prank</strong>, <strong>broken monitor prank</strong>, and <strong>fake broken phone screen</strong>. By using our tool, you get instant access to a convincing <strong>cracked screen simulator</strong> without downloading any apps, installing software, or searching for <strong>fake cracked screen images</strong> online.',
          'For the best prank experience, we recommend entering fullscreen mode before showing the screen to your target. The fullscreen effect hides browser UI elements that would otherwise reveal the prank. Adjust the brightness slider to match the ambient lighting of the room — a dimmer setting works best in darker environments, while higher brightness is more convincing in well-lit offices and living rooms. The tool also includes a <strong>brightness control</strong>, <strong>timer</strong>, and <strong>share</strong> feature to send the cracked screen to another device.',
          'The <strong>broken screen simulator</strong> is ideal for April Fools Day pranks, office jokes, YouTube and TikTok prank videos, theater and stage productions, gaming stream intermissions, and even film and video production where a broken display is needed on set. Because the tool runs entirely in the browser, it works on any device — desktop PCs, laptops, MacBooks, Chromebooks, tablets, smartphones, and Smart TVs. No account, no signup, no download — just open and prank.'
        ]
      },
      es: {
        heading: 'Broma de Pantalla Rota – Guía y Casos de Uso del Simulador de Pantalla Agrietada',
        paragraphs: [
          'La <strong>broma de pantalla rota</strong> es una de las bromas más efectivas y atemporales que puedes hacer a amigos, familiares o compañeros de trabajo. Nuestra herramienta de <strong>pantalla rota falsa</strong> genera un efecto fotorrealista de <strong>pantalla agrietada</strong> que se ve exactamente como una pantalla físicamente rota. Ya sea que quieras una <strong>broma de monitor roto falso</strong>, una <strong>broma de portátil con pantalla rota falsa</strong> o un <strong>teléfono con pantalla agrietada falsa</strong>, esta herramienta ofrece 8 patrones de grietas de alta resolución.',
          'Las frases de búsqueda comunes incluyen <strong>pantalla rota falsa</strong>, <strong>broma pantalla rota</strong>, <strong>simulador de pantalla agrietada</strong>, <strong>pantalla agrietada falsa</strong> y <strong>broma monitor roto</strong>. Con nuestra herramienta obtienes acceso instantáneo a un convincente <strong>simulador de pantalla rota</strong> sin descargar aplicaciones ni instalar software.',
          'Para la mejor experiencia, recomendamos entrar en modo de pantalla completa antes de mostrar la pantalla. El brillo ajustable te permite igualar la iluminación ambiente de la habitación. La herramienta también incluye control de brillo, temporizador y función de compartir para enviar la pantalla agrietada a otro dispositivo.'
        ]
      },
      pt: {
        heading: 'Pegadinha de Tela Quebrada – Guia e Casos de Uso do Simulador de Tela Rachada',
        paragraphs: [
          'A <strong>pegadinha de tela quebrada</strong> é uma das brincadeiras mais eficazes e atemporais que você pode fazer com amigos, familiares ou colegas de trabalho. Nossa ferramenta de <strong>tela quebrada falsa</strong> gera um efeito fotorrealista de <strong>tela rachada</strong> que parece exatamente uma tela fisicamente destruída. A ferramenta oferece 8 padrões de rachadura de alta resolução.',
          'Termos de busca comuns incluem <strong>tela quebrada falsa</strong>, <strong>pegadinha tela quebrada</strong>, <strong>simulador de tela rachada</strong>, <strong>tela rachada falsa</strong> e <strong>pegadinha monitor quebrado</strong>. Com nossa ferramenta você tem acesso instantâneo a um convincente <strong>simulador de tela quebrada</strong> sem baixar aplicativos.',
          'Para a melhor experiência, recomendamos entrar em modo tela cheia antes de mostrar a tela. O brilho ajustável permite igualar a iluminação ambiente. A ferramenta também inclui controle de brilho, temporizador e recurso de compartilhar.'
        ]
      },
      fr: {
        heading: 'Blague d\'Écran Cassé – Guide et Cas d\'Utilisation du Simulateur d\'Écran Fissuré',
        paragraphs: [
          'La <strong>blague d\'écran cassé</strong> est l\'une des farces les plus efficaces et intemporelles que vous puissiez faire à vos amis, votre famille ou vos collègues. Notre outil de <strong>faux écran cassé</strong> génère un effet photoréaliste d\'<strong>écran fissuré</strong> qui ressemble exactement à un écran physiquement brisé. L\'outil propose 8 motifs de fissures en haute résolution.',
          'Les termes de recherche courants incluent <strong>faux écran cassé</strong>, <strong>blague écran cassé</strong>, <strong>simulateur d\'écran fissuré</strong>, <strong>écran fissuré faux</strong> et <strong>farce écran cassé</strong>. Avec notre outil, vous avez un accès instantané à un <strong>simulateur d\'écran cassé</strong> convaincant sans téléchargement d\'application.',
          'Pour la meilleure expérience, nous recommandons le mode plein écran avant de montrer l\'écran. La luminosité réglable permet de correspondre à l\'éclairage ambiant. L\'outil inclut également le contrôle de la luminosité, une minuterie et une fonction de partage.'
        ]
      },
      de: {
        heading: 'Kaputter Bildschirm Scherz – Anleitung und Anwendungsfälle für den Rissbildschirm-Simulator',
        paragraphs: [
          'Der <strong>kaputter-Bildschirm-Streich</strong> ist einer der effektivsten und zeitlosesten Streiche, die Sie Freunden, Familie oder Kollegen spielen können. Unser Tool für <strong>falschen kaputten Bildschirm</strong> erzeugt einen fotorealistischen <strong>gesprungenen Bildschirm</strong>-Effekt, der genau wie ein physisch zerbrochener Bildschirm aussieht. Das Tool bietet 8 hochauflösende Rissmuster.',
          'Häufige Suchbegriffe sind <strong>falscher kaputter Bildschirm</strong>, <strong>Bildschirm kaputt Streich</strong>, <strong>Rissbildschirm-Simulator</strong>, <strong>gefälschter zerkratzter Bildschirm</strong> und <strong>Monitor kaputt Streich</strong>. Mit unserem Tool erhalten Sie sofortigen Zugang zu einem überzeugenden <strong>Rissbildschirm-Simulator</strong> ohne App-Download.',
          'Für die beste Erfahrung empfehlen wir den Vollbildmodus, bevor Sie den Bildschirm zeigen. Die einstellbare Helligkeit passt sich der Raumbeleuchtung an. Das Tool enthält auch Helligkeitsregelung, Timer und Teilen-Funktion.'
        ]
      },
      hi: {
        heading: 'टूटी स्क्रीन प्रैंक – फर्जी क्रैक-डिस्प्ले गाइड और उपयोग के मामले',
        paragraphs: [
          '<strong>टूटी स्क्रीन प्रैंक</strong> सबसे प्रभावी और कालातीत मजाक में से एक है जो आप दोस्तों, परिवार या सहकर्मियों पर कर सकते हैं। हमारा <strong>फर्जी टूटी स्क्रीन</strong> टूल एक फोटोरियलिस्टिक <strong>क्रैक-स्क्रीन</strong> इफ़ेक्ट उत्पन्न करता है जो बिल्कुल शारीरिक रूप से टूटी हुई स्क्रीन जैसा दिखता है। यह टूल 8 हाई-रिज़ॉल्यूशन क्रैक पैटर्न प्रदान करता है।',
          'सामान्य खोज वाक्यांशों में <strong>फर्जी टूटी स्क्रीन</strong>, <strong>टूटी स्क्रीन प्रैंक</strong>, <strong>क्रैक-डिस्प्ले सिम्युलेटर</strong>, <strong>फर्जी क्रैक स्क्रीन</strong> और <strong>टूटा मॉनिटर प्रैंक</strong> शामिल हैं। हमारे टूल से आपको बिना कोई ऐप डाउनलोड किए तुरंत एक विश्वसनीय <strong>क्रैक-स्क्रीन सिम्युलेटर</strong> मिल जाता है।',
          'सबसे अच्छे अनुभव के लिए, हम स्क्रीन दिखाने से पहले फुलस्क्रीन मोड में जाने की सलाह देते हैं। एडजस्टेबल ब्राइटनेस आपको कमरे की रोशनी से मेल खाने देता है। टूल में ब्राइटनेस कंट्रोल, टाइमर और शेयर फीचर भी शामिल है।'
        ]
      },
      ja: {
        heading: '壊れた画面のいたずら – 偽のひび割れディスプレイガイドと使用例',
        paragraphs: [
          '<strong>壊れた画面のいたずら</strong>は、友人、家族、同僚に仕掛けられる最も効果的で時代を超越したいたずらの一つです。私たちの<strong>偽の壊れた画面</strong>ツールは、物理的に割れたディスプレイにまったくそっくりなフォトリアリスティックな<strong>ひび割れ画面</strong>エフェクトを生成します。このツールは8つの高解像度ひび割れパターンを提供します。',
          '一般的な検索フレーズには、<strong>偽の壊れた画面</strong>、<strong>壊れた画面 いたずら</strong>、<strong>ひび割れ画面シミュレーター</strong>、<strong>偽のクラック画面</strong>、<strong>壊れたモニター いたずら</strong>などがあります。このツールを使えば、アプリをダウンロードすることなく、すぐに説得力のある<strong>ひび割れ画面シミュレーター</strong>を利用できます。',
          '最良の体験のために、画面を見せる前に全画面モードに入ることをお勧めします。調整可能な明るさで部屋の照明に合わせることができます。明るさコントロール、タイマー、共有機能も含まれています。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'blue-screen-prank') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Fake Blue Screen Prank – BSOD Simulator Guide & Use Cases',
        paragraphs: [
          'The <strong>fake blue screen prank</strong> is one of the most iconic computer pranks in history. Our <strong>BSOD simulator</strong> generates a photorealistic <strong>blue screen of death</strong> that replicates the modern Windows 10 and Windows 11 crash screen in stunning detail — complete with the sad face emoticon, authentic <strong>stop codes</strong> like CRITICAL_PROCESS_DIED and SYSTEM_SERVICE_EXCEPTION, a Windows-style QR code, and an animated progress percentage that follows real Windows easing curves with randomized pauses for maximum authenticity.',
          'Users search for many related terms when looking for this type of prank. Common search phrases include <strong>fake blue screen</strong>, <strong>blue screen prank</strong>, <strong>BSOD prank</strong>, <strong>fake windows crash</strong>, <strong>windows bsod simulator</strong>, <strong>online bsod prank</strong>, <strong>fullscreen blue screen prank</strong>, <strong>fake windows error screen</strong>, <strong>windows crash prank</strong>, and <strong>computer prank</strong>. Our simulator delivers all of these in a single page — no download, no installation, no account required. It works instantly in any modern browser on desktop, laptop, tablet, phone, and Smart TV.',
          'For the most convincing prank experience, we recommend entering fullscreen mode before your target sees the screen. The fullscreen effect hides all browser UI elements that would otherwise reveal the prank. Configure the duration and starting percentage using the settings panel (gear icon) to fine-tune the simulation speed. A longer duration (60-120 seconds) with a low start percentage makes the crash look like Windows is still collecting error information. For instant impact, set the start percentage higher so the progress appears to have been running for a while.',
          'The <strong>fake BSOD simulator</strong> is ideal for April Fools Day pranks, office and workplace jokes, YouTube and TikTok prank content, livestream intermissions, gaming entertainment, theater and stage productions, tech training demonstrations, and educational settings where teaching users to recognize and respond to BSOD errors is valuable. Because the tool runs entirely in the browser with no server-side processing, it works offline after the initial page load and leaves zero trace on the device when closed.'
        ]
      },
      es: {
        heading: 'Broma de Pantalla Azul Falsa – Guía del Simulador BSOD y Casos de Uso',
        paragraphs: [
          'La <strong>broma de pantalla azul falsa</strong> es una de las bromas informáticas más icónicas de la historia. Nuestro <strong>simulador BSOD</strong> genera una <strong>pantalla azul de la muerte</strong> fotorrealista que replica la pantalla de fallo moderna de Windows 10 y 11 con un detalle impresionante.',
          'Los usuarios buscan términos como <strong>pantalla azul falsa</strong>, <strong>broma pantalla azul</strong>, <strong>BSOD falso</strong>, <strong>simulador de pantalla azul</strong> y <strong>broma de windows falsa</strong>. Nuestro simulador ofrece todo esto en una sola página — sin descarga, sin instalación, sin necesidad de cuenta.',
          'Para la experiencia más convincente, recomendamos el modo pantalla completa antes de que la víctima vea la pantalla. Configura la duración y el porcentaje inicial usando el panel de ajustes (icono de engranaje) para afinar la velocidad de la simulación.'
        ]
      },
      pt: {
        heading: 'Pegadinha de Tela Azul Falsa – Guia do Simulador BSOD e Casos de Uso',
        paragraphs: [
          'A <strong>pegadinha de tela azul falsa</strong> é uma das brincadeiras de computador mais icônicas da história. Nosso <strong>simulador BSOD</strong> gera uma <strong>tela azul da morte</strong> fotorrealista que replica a tela de falha moderna do Windows 10 e 11.',
          'Termos de busca comuns incluem <strong>tela azul falsa</strong>, <strong>pegadinha tela azul</strong>, <strong>BSOD falso</strong>, <strong>simulador de tela azul</strong> e <strong>pegadinha windows falsa</strong>. Oferecemos tudo em uma página — sem download, sem instalação.',
          'Para maior realismo, entre em modo tela cheia antes da vítima ver a tela. Configure a duração e porcentagem inicial no painel de configurações.'
        ]
      },
      fr: {
        heading: 'Blague d\'Écran Bleu Faux – Guide du Simulateur BSOD et Cas d\'Utilisation',
        paragraphs: [
          'La <strong>blague d\'écran bleu faux</strong> est l\'une des farces informatiques les plus emblématiques de l\'histoire. Notre <strong>simulateur BSOD</strong> génère un <strong>écran bleu de la mort</strong> photoréaliste qui reproduit l\'écran de panne moderne de Windows 10 et 11.',
          'Les termes de recherche courants incluent <strong>faux écran bleu</strong>, <strong>blague écran bleu</strong>, <strong>faux BSOD</strong>, <strong>simulateur d\'écran bleu</strong> et <strong>blague windows</strong>. Notre simulateur offre tout cela en une page — sans téléchargement ni installation.',
          'Pour l\'expérience la plus convaincante, passez en plein écran avant que la cible ne voie l\'écran. Configurez la durée et le pourcentage de départ dans le panneau de configuration.'
        ]
      },
      de: {
        heading: 'Falscher Blauer Bildschirm Streich – BSOD-Simulator-Guide & Anwendungsfälle',
        paragraphs: [
          'Der <strong>falsche blaue Bildschirm Streich</strong> ist einer der ikonischsten Computerstreiche der Geschichte. Unser <strong>BSOD-Simulator</strong> erzeugt einen fotorealistischen <strong>blauen Bildschirm des Todes</strong>, der den modernen Windows 10- und 11-Absturzbildschirm detailgetreu nachbildet.',
          'Häufige Suchbegriffe sind <strong>falscher blauer Bildschirm</strong>, <strong>blauer Bildschirm Streich</strong>, <strong>falscher BSOD</strong>, <strong>Blauer-Bildschirm-Simulator</strong> und <strong>Windows-Streich</strong>. Unser Simulator bietet alles auf einer Seite — kein Download, keine Installation.',
          'Für die überzeugendste Erfahrung wechseln Sie in den Vollbildmodus, bevor die Zielperson den Bildschirm sieht. Passen Sie Dauer und Startprozentsatz im Einstellungsfeld an.'
        ]
      },
      hi: {
        heading: 'फर्जी ब्लू स्क्रीन प्रैंक – BSOD सिम्युलेटर गाइड और उपयोग के मामले',
        paragraphs: [
          '<strong>फर्जी ब्लू स्क्रीन प्रैंक</strong> इतिहास के सबसे प्रतिष्ठित कंप्यूटर प्रैंक में से एक है। हमारा <strong>BSOD सिम्युलेटर</strong> एक फोटोरियलिस्टिक <strong>ब्लू स्क्रीन ऑफ डेथ</strong> उत्पन्न करता है जो आधुनिक विंडोज 10 और 11 क्रैश स्क्रीन को विस्तार से रिप्लिकेट करता है।',
          'सामान्य खोज वाक्यांशों में <strong>फर्जी ब्लू स्क्रीन</strong>, <strong>ब्लू स्क्रीन प्रैंक</strong>, <strong>फर्जी BSOD</strong>, <strong>ब्लू स्क्रीन सिम्युलेटर</strong> और <strong>फर्जी विंडोज क्रैश</strong> शामिल हैं।',
          'सबसे विश्वसनीय अनुभव के लिए, लक्ष्य को स्क्रीन दिखाने से पहले फुलस्क्रीन मोड में जाएँ। सेटिंग्स पैनल का उपयोग करके अवधि और शुरुआती प्रतिशत कॉन्फ़िगर करें।'
        ]
      },
      ja: {
        heading: '偽のブルースクリーンいたずら – BSODシミュレーターガイドと使用例',
        paragraphs: [
          '<strong>偽のブルースクリーンいたずら</strong>は、歴史的なコンピュータいたずらの最も象徴的なものの一つです。私たちの<strong>BSODシミュレーター</strong>は、現代のWindows 10および11のクラッシュ画面を驚くほど詳細に再現するフォトリアリスティックな<strong>ブルースクリーンオブデス</strong>を生成します。',
          '一般的な検索フレーズには、<strong>偽のブルースクリーン</strong>、<strong>ブルースクリーンいたずら</strong>、<strong>偽BSOD</strong>、<strong>ブルースクリーンシミュレーター</strong>、<strong>偽のWindowsクラッシュ</strong>などがあります。',
          '最も説得力のある体験のために、ターゲットに画面を見せる前に全画面モードに切り替えてください。設定パネルを使用して、期間と開始パーセンテージを設定できます。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'windows-xp-crash') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Windows XP Crash Prank – Classic BSOD Simulator Guide & Use Cases',
        paragraphs: [
          'The <strong>Windows XP crash prank</strong> brings back the most nostalgic crash experience in computing history. Our <strong>Windows XP crash simulator</strong> recreates the full XP desktop environment — complete with the classic Bliss wallpaper, explorer.exe error cascading windows, and the legendary blue screen of death that defined an era. Unlike generic BSOD tools, this simulator builds the complete crash narrative: start with a functional-looking XP desktop, watch error dialogs multiply as you click around, and culminate in the iconic dark-blue <strong>Windows XP BSOD</strong> with its chkdsk-style memory dump counter and text-mode error codes.',
          'Users search for many related terms for this experience. Common search phrases include <strong>Windows XP crash simulator</strong>, <strong>fake Windows XP crash</strong>, <strong>XP BSOD prank</strong>, <strong>Windows XP blue screen</strong>, <strong>fake XP desktop crash</strong>, <strong>Windows XP error prank</strong>, <strong>explorer.exe fake error</strong>, <strong>retro BSOD prank</strong>, <strong>Windows XP prank online</strong>, and <strong>classic Windows crash</strong>. Our simulator delivers the complete XP crash journey — no download, no installation, no account required. It works instantly in any modern browser across desktop, laptop, tablet, and phone.',
          'For the most convincing XP prank experience, configure the settings before launching. Use the "On Start" dropdown to choose Cascade mode (error windows escalate progressively before the BSOD for dramatic effect) or Instant BSOD mode (immediate transition for a faster prank). Set the "BSOD Delay" to 5, 12, 20, or 30 seconds to control the pacing. Toggle the warning bell sound on for added authenticity — the classic Windows XP error chime adds nostalgic realism. Once configured, click "Fullscreen Prank" or press F and the simulation takes over.',
          'The <strong>XP crash simulator</strong> is perfect for retro tech pranks, nostalgia trips for millennials who grew up with Windows XP, YouTube and TikTok content recreating "the good old days" of Windows crashes, office pranks targeting colleagues who remember the XP era, livestream entertainment, tech nostalgia podcasts and videos, and educational demonstrations showing how far Windows crash handling has evolved. The tool runs entirely in the browser — no software installs, no system changes, completely reversible by pressing Escape.'
        ]
      },
      es: {
        heading: 'Broma de Crash de Windows XP – Guía del Simulador BSOD Clásico y Casos de Uso',
        paragraphs: [
          'La <strong>broma de crash de Windows XP</strong> revive la experiencia de crash más nostálgica en la historia de la informática. Nuestro <strong>simulador de crash de Windows XP</strong> recrea el entorno completo del escritorio XP con el fondo Bliss, ventanas de error de explorer.exe en cascada y la legendaria pantalla azul de la muerte.',
          'Los términos de búsqueda comunes incluyen <strong>simulador de crash Windows XP</strong>, <strong>falso crash Windows XP</strong>, <strong>BSOD XP broma</strong>, <strong>pantalla azul Windows XP</strong> y <strong>broma de Windows XP falsa</strong>. Ofrecemos todo en una página — sin descarga ni instalación.',
          'Para la experiencia más convincente, configure los ajustes antes de iniciar. Use "On Start" para elegir Cascade o Instant BSOD. Ajuste el retardo del BSOD a 5, 12, 20 o 30 segundos. Active el sonido de advertencia para mayor autenticidad.'
        ]
      },
      pt: {
        heading: 'Pegadinha de Crash do Windows XP – Guia do Simulador BSOD Clássico e Casos de Uso',
        paragraphs: [
          'A <strong>pegadinha de crash do Windows XP</strong> traz de volta a experiência de crash mais nostálgica da história da computação. Nosso <strong>simulador de crash do Windows XP</strong> recria o ambiente completo da área de trabalho do XP com o papel de parede Bliss, janelas de erro do explorer.exe em cascata e a lendária tela azul da morte.',
          'Termos de busca comuns incluem <strong>simulador de crash Windows XP</strong>, <strong>falso crash Windows XP</strong>, <strong>BSOD XP pegadinha</strong>, <strong>tela azul Windows XP</strong> e <strong>pegadinha Windows XP</strong>. Tudo em uma página — sem download ou instalação.',
          'Para maior realismo, configure antes de iniciar. Use "On Start" para Cascade ou Instant BSOD. Ajuste o atraso do BSOD para 5, 12, 20 ou 30 segundos. Ative o som de aviso para mais autenticidade.'
        ]
      },
      fr: {
        heading: 'Farce de Plantage Windows XP – Guide du Simulateur BSOD Classique et Cas d\'Utilisation',
        paragraphs: [
          'La <strong>farce de plantage Windows XP</strong> ravive l\'expérience de plantage la plus nostalgique de l\'histoire informatique. Notre <strong>simulateur de plantage Windows XP</strong> recrée l\'environnement complet du bureau XP avec le fond d\'écran Bliss, les fenêtres d\'erreur explorer.exe en cascade et le légendaire écran bleu de la mort.',
          'Les termes de recherche courants incluent <strong>simulateur de plantage Windows XP</strong>, <strong>faux plantage Windows XP</strong>, <strong>farce BSOD XP</strong>, <strong>écran bleu Windows XP</strong> et <strong>farce Windows XP</strong>. Le tout sur une seule page — sans téléchargement ni installation.',
          'Pour l\'expérience la plus convaincante, configurez les paramètres avant de lancer. Utilisez "On Start" pour Cascade ou Instant BSOD. Réglez le délai BSOD à 5, 12, 20 ou 30 secondes. Activez le son d\'avertissement pour plus d\'authenticité.'
        ]
      },
      de: {
        heading: 'Windows XP Absturz-Streich – Leitfaden für den klassischen BSOD-Simulator und Anwendungsfälle',
        paragraphs: [
          'Der <strong>Windows XP Absturz-Streich</strong> bringt die nostagischste Absturzerfahrung der Computergeschichte zurück. Unser <strong>Windows XP Absturzsimulator</strong> erschafft die vollständige XP-Desktop-Umgebung mit dem klassischen Bliss-Hintergrundbild, kaskadierenden Explorer.exe-Fehlermeldungen und dem legendären blauen Bildschirm des Todes.',
          'Häufige Suchbegriffe sind <strong>Windows XP Absturzsimulator</strong>, <strong>falscher Windows XP Absturz</strong>, <strong>XP BSOD Streich</strong>, <strong>blauer Bildschirm Windows XP</strong> und <strong>Windows XP Streich</strong>. Alles auf einer Seite — kein Download, keine Installation.',
          'Konfigurieren Sie die Einstellungen vor dem Start für die überzeugendste Erfahrung. Verwenden Sie "On Start" für Cascade oder Instant BSOD. Stellen Sie die BSOD-Verzögerung auf 5, 12, 20 oder 30 Sekunden ein. Schalten Sie den Warnton für zusätzliche Authentizität ein.'
        ]
      },
      hi: {
        heading: 'विंडोज एक्सपी क्रैश प्रैंक – क्लासिक BSOD सिम्युलेटर गाइड और उपयोग के मामले',
        paragraphs: [
          '<strong>विंडोज एक्सपी क्रैश प्रैंक</strong> कंप्यूटिंग इतिहास के सबसे नॉस्टैल्जिक क्रैश अनुभव को वापस लाता है। हमारा <strong>विंडोज एक्सपी क्रैश सिम्युलेटर</strong> क्लासिक ब्लिस वॉलपेपर, कैस्केडिंग explorer.exe त्रुटि विंडो और प्रतिष्ठित ब्लू स्क्रीन ऑफ डेथ के साथ पूर्ण XP डेस्कटॉप वातावरण को फिर से बनाता है।',
          'सामान्य खोज वाक्यांशों में <strong>विंडोज एक्सपी क्रैश सिम्युलेटर</strong>, <strong>फर्जी विंडोज एक्सपी क्रैश</strong>, <strong>XP BSOD प्रैंक</strong>, <strong>विंडोज एक्सपी ब्लू स्क्रीन</strong> और <strong>विंडोज एक्सपी प्रैंक</strong> शामिल हैं।',
          'सबसे विश्वसनीय अनुभव के लिए, शुरू करने से पहले सेटिंग्स कॉन्फ़िगर करें। "On Start" का उपयोग करके Cascade या Instant BSOD चुनें। BSOD देरी को 5, 12, 20 या 30 सेकंड पर सेट करें। अधिक प्रामाणिकता के लिए चेतावनी घंटी ध्वनि चालू करें।'
        ]
      },
      ja: {
        heading: 'Windows XPクラッシュいたずら – クラシックBSODシミュレーターガイドと使用例',
        paragraphs: [
          '<strong>Windows XPクラッシュいたずら</strong>は、コンピューティング史上最もノスタルジックなクラッシュ体験をよみがえらせます。私たちの<strong>Windows XPクラッシュシミュレーター</strong>は、クラシックなBlissの壁紙、explorer.exeのエラーカスケードウィンドウ、伝説的なブルースクリーンオブデスを備えた完全なXPデスクトップ環境を再現します。',
          '一般的な検索フレーズには、<strong>Windows XPクラッシュシミュレーター</strong>、<strong>偽のWindows XPクラッシュ</strong>、<strong>XP BSODいたずら</strong>、<strong>Windows XPブルースクリーン</strong>、<strong>Windows XPいたずら</strong>などがあります。',
          '最も説得力のある体験のために、開始前に設定を構成してください。「On Start」でCascadeまたはInstant BSODを選択します。BSOD遅延を5、12、20、30秒に設定します。信頼性を高めるために警告音をオンにします。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'radar-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Radar Screen Simulator – Fullscreen Tactical Display Guide & Use Cases',
        paragraphs: [
          'The <strong>radar screen simulator</strong> is an interactive fullscreen radar display that recreates the look and feel of real radar and sonar systems — complete with a rotating sweep beam, concentric range rings, compass headings, procedural terrain coastline, and simulated bogey targets. Unlike static radar images or pre-recorded radar video loops, this is a live, interactive <strong>radar simulation</strong> that responds to your input. Click to intercept hostile bogeys, adjust sweep speed in real time, switch between three tactical color themes, and watch the HUD update with live coordinates when geolocation is enabled.',
          'Users search for many related terms when looking for this type of display tool. Common search phrases include <strong>radar screen online</strong>, <strong>radar screen simulator</strong>, <strong>radar display</strong>, <strong>radar animation</strong>, <strong>radar screen fullscreen</strong>, <strong>military radar screen</strong>, <strong>green radar screen</strong>, <strong>sonar screen</strong>, <strong>tactical radar</strong>, <strong>radar scanner</strong>, <strong>radar sweep animation</strong>, <strong>radar visualization</strong>, <strong>free radar screen simulator</strong>, <strong>fullscreen radar display online</strong>, <strong>interactive radar screen</strong>, <strong>browser radar simulator</strong>, and <strong>online sonar display</strong>. Our simulator delivers all of these in a single page — no download, no installation, no account required. It works instantly in any modern browser on desktop, laptop, tablet, phone, and Smart TV.',
          'For the most immersive radar experience, enter fullscreen mode by pressing F or clicking the fullscreen button. The fullscreen effect hides all browser UI for a truly authentic tactical display. Configure the settings before or during the simulation: adjust sweep speed from 4 to 30 RPM using the slider, set sonar ping volume or mute audio completely, choose your target intrusion density to control how many bogeys appear on screen, and switch between Military Green, Oceanic Blue, or Red Alert frequency themes. Enable Dynamic Geolocator Nodes to display your actual coordinates on the HUD. The radar runs continuously with real-time animated sweep and audio feedback — pause with the Space key whenever needed.',
          'The <strong>radar screen</strong> is ideal for presentation and livestream backgrounds, YouTube and TikTok video production, sci-fi and cyberpunk room decoration, escape room and theatrical staging, gaming room and hacker setup ambience, classroom STEM demonstrations, party and event displays, and film production backgrounds. Because the tool runs entirely in the browser with Canvas-based rendering and Web Audio API, it works offline after the initial page load and leaves zero trace on the device.'
        ]
      },
      es: {
        heading: 'Simulador de Pantalla de Radar – Guía de Pantalla Táctica a Pantalla Completa y Casos de Uso',
        paragraphs: [
          'El <strong>simulador de pantalla de radar</strong> es una pantalla de radar interactiva a pantalla completa que recrea el aspecto y la sensación de los sistemas de radar y sónar reales, con un haz de barrido giratorio, anillos de alcance concéntricos, marcas de brújula, costa de terreno procedural y objetivos simulados. A diferencia de las imágenes de radar estáticas, esta es una <strong>simulación de radar</strong> en vivo e interactiva que responde a sus acciones.',
          'Los términos de búsqueda comunes incluyen <strong>pantalla de radar online</strong>, <strong>simulador de pantalla de radar</strong>, <strong>pantalla de radar militar</strong>, <strong>pantalla de radar verde</strong>, <strong>pantalla de sónar</strong> y <strong>visualización de radar</strong>. Nuestro simulador ofrece todo en una página — sin descarga, sin instalación, sin necesidad de cuenta.',
          'Para la experiencia más inmersiva, entre en modo de pantalla completa presionando F. Configure la velocidad de barrido, el volumen del sónar y el tema de color en el panel de configuración antes o durante la simulación.'
        ]
      },
      pt: {
        heading: 'Simulador de Tela de Radar – Guia de Exibição Tática em Tela Cheia e Casos de Uso',
        paragraphs: [
          'O <strong>simulador de tela de radar</strong> é uma tela de radar interativa em tela cheia que recria a aparência e a sensação de sistemas reais de radar e sonar, com feixe de varredura giratório, anéis de alcance concêntricos, marcas de bússola, costa de terreno procedural e alvos simulados. Esta é uma <strong>simulação de radar</strong> ao vivo e interativa.',
          'Termos de busca comuns incluem <strong>tela de radar online</strong>, <strong>simulador de tela de radar</strong>, <strong>tela de radar militar</strong>, <strong>tela de radar verde</strong>, <strong>tela de sonar</strong> e <strong>visualização de radar</strong>. Tudo em uma página — sem download ou instalação.',
          'Para a experiência mais imersiva, entre em modo tela cheia pressionando F. Ajuste a velocidade de varredura, volume do sonar e tema de cor no painel de configurações.'
        ]
      },
      fr: {
        heading: 'Simulateur d\'Écran Radar – Guide d\'Affichage Tactique Plein Écran et Cas d\'Utilisation',
        paragraphs: [
          'Le <strong>simulateur d\'écran radar</strong> est un affichage radar interactif plein écran qui recrée l\'aspect et la sensation des systèmes radar et sonar réels, avec un faisceau de balayage rotatif, des anneaux de portée concentriques, des relèvements de boussole, un littoral de terrain procédural et des cibles simulées. Il s\'agit d\'une <strong>simulation radar</strong> interactive en direct.',
          'Les termes de recherche courants incluent <strong>écran radar en ligne</strong>, <strong>simulateur d\'écran radar</strong>, <strong>écran radar militaire</strong>, <strong>écran radar vert</strong>, <strong>écran sonar</strong> et <strong>visualisation radar</strong>. Le tout sur une seule page — sans téléchargement ni installation.',
          'Pour l\'expérience la plus immersive, passez en plein écran en appuyant sur F. Ajustez la vitesse de balayage, le volume sonar et le thème de couleur dans le panneau des paramètres.'
        ]
      },
      de: {
        heading: 'Radar-Bildschirm-Simulator – Leitfaden für taktische Vollbildanzeige und Anwendungsfälle',
        paragraphs: [
          'Der <strong>Radar-Bildschirm-Simulator</strong> ist eine interaktive Vollbild-Radar-Anzeige, die das Aussehen und Gefühl echter Radar- und Sonarsysteme nachbildet — mit rotierendem Sweep-Strahl, konzentrischen Reichweitenringen, Kompasspeilungen, prozeduraler Küstenlinie und simulierten Bogey-Zielen. Es handelt sich um eine Live-<strong>Radar-Simulation</strong>, die auf Ihre Eingaben reagiert.',
          'Häufige Suchbegriffe sind <strong>Radar-Bildschirm online</strong>, <strong>Radar-Simulator</strong>, <strong>militärischer Radar-Bildschirm</strong>, <strong>grüner Radar-Bildschirm</strong>, <strong>Sonar-Bildschirm</strong> und <strong>Radar-Visualisierung</strong>. Alles auf einer Seite — kein Download, keine Installation.',
          'Für das immersivste Erlebnis wechseln Sie durch Drücken von F in den Vollbildmodus. Passen Sie Sweep-Geschwindigkeit, Sonar-Lautstärke und Farbthema im Einstellungsbereich an.'
        ]
      },
      hi: {
        heading: 'रडार स्क्रीन सिम्युलेटर – फुलस्क्रीन सामरिक डिस्प्ले गाइड और उपयोग के मामले',
        paragraphs: [
          '<strong>रडार स्क्रीन सिम्युलेटर</strong> एक इंटरैक्टिव फुलस्क्रीन रडार डिस्प्ले है जो घूमने वाली स्वीप बीम, संकेंद्रित रेंज रिंग, कम्पास हेडिंग, प्रोसीजरल टेरेन कोस्टलाइन और सिम्युलेटेड बोगी टार्गेट के साथ वास्तविक रडार और सोनार सिस्टम के रूप और अनुभव को फिर से बनाता है। यह एक लाइव, इंटरैक्टिव <strong>रडार सिमुलेशन</strong> है।',
          'सामान्य खोज वाक्यांशों में <strong>रडार स्क्रीन ऑनलाइन</strong>, <strong>रडार स्क्रीन सिम्युलेटर</strong>, <strong>सैन्य रडार स्क्रीन</strong>, <strong>हरी रडार स्क्रीन</strong>, <strong>सोनार स्क्रीन</strong> और <strong>रडार विज़ुअलाइज़ेशन</strong> शामिल हैं। हमारा सिम्युलेटर एक ही पेज पर सब कुछ प्रदान करता है — बिना डाउनलोड या इंस्टॉलेशन के।',
          'सबसे इमर्सिव अनुभव के लिए, F दबाकर फुलस्क्रीन मोड में जाएँ। सेटिंग्स पैनल में स्वीप स्पीड, सोनार वॉल्यूम और रंग थीम को एडजस्ट करें।'
        ]
      },
      ja: {
        heading: 'レーダー画面シミュレーター – 全画面戦術ディスプレイガイドと使用例',
        paragraphs: [
          '<strong>レーダー画面シミュレーター</strong>は、回転するスイープビーム、同心円状のレンジリング、コンパス方位、手続き型地形海岸線、シミュレートされたブギーターゲットを備え、実際のレーダーおよびソナーシステムの外観と雰囲気を再現するインタラクティブな全画面レーダーディスプレイです。これはライブのインタラクティブな<strong>レーダーシミュレーション</strong>です。',
          '一般的な検索フレーズには、<strong>レーダー画面 オンライン</strong>、<strong>レーダー画面シミュレーター</strong>、<strong>ミリタリーレーダー画面</strong>、<strong>緑のレーダー画面</strong>、<strong>ソナー画面</strong>、<strong>レーダー表示</strong>などがあります。すべて1ページで提供 — ダウンロードもインストールも不要。',
          '最も没入感のある体験のために、Fキーを押して全画面モードに切り替えてください。設定パネルでスイープ速度、ソナー音量、カラーテーマを調整できます。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'white-noise-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'White Noise Screen (TV Static) – Fullscreen Analog Television Simulator Guide & Use Cases',
        paragraphs: [
          'The <strong>white noise screen</strong> (also called <strong>TV static</strong> or <strong>television snow</strong>) recreates the iconic look and sound of an analog television with no signal. Our <strong>white noise simulator</strong> generates authentic <strong>analog TV static</strong> directly in your browser using Canvas-based rendering — no video files, no pre-recorded loops, no downloads. It generates real-time <strong>analog noise</strong> with three distinct static styles, CRT scanline overlays, VHS glitch drift effects, and Web Audio API-generated static audio for complete retro television authenticity.',
          'Users search for many related terms when looking for this type of visual effect. Common search phrases include <strong>white noise screen online</strong>, <strong>white noise static</strong>, <strong>TV static screen</strong>, <strong>analog TV static</strong>, <strong>fullscreen white noise</strong>, <strong>TV noise screen</strong>, <strong>white noise simulator</strong>, <strong>CRT static</strong>, <strong>no signal screen</strong>, <strong>TV snow</strong>, <strong>static effect</strong>, <strong>television noise</strong>, <strong>TV static animation</strong>, <strong>CRT simulation</strong>, <strong>free white noise screen online</strong>, <strong>fullscreen TV static generator</strong>, <strong>analog television simulator</strong>, <strong>browser white noise display</strong>, <strong>animated TV snow</strong>, <strong>CRT white noise effect</strong>, and <strong>no signal TV simulator</strong>. Our simulator delivers all of these in a single page — no download, no installation, no account required. It works instantly in any modern browser on desktop, laptop, tablet, phone, and Smart TV.',
          'For the most authentic retro TV experience, enter fullscreen mode by pressing F or clicking the fullscreen button. Audio static starts automatically in fullscreen mode for complete immersion. Configure the experience using the settings panel: choose between Analog (classic gray snow), Color (rainbow spectrum static), or VHS (glitchy drift with noise bands) styles. Toggle the CRT Scanlines overlay for that authentic cathode-ray tube look. Enable the "NO SIGNAL" badge for a retro television indicator in the corner. Adjust the Static Speed slider to control how fast the noise pattern updates. Select your audio mode — Static (pulsing detuned TV sound), White (flat hiss), Pink (deep ambient rumble), or Off — and set the volume to your preference. The audio runs through a low-pass filter and gain stage for realistic television speaker tone.',
          'The <strong>white noise screen</strong> is ideal for retro TV and VHS aesthetic scenes, film and video production backgrounds, YouTube and streaming intermission screens, horror and Halloween themed displays, cinematic transitions and title sequences, escape room and theatre stage props, photography and creative backdrops, gaming room and ambience decoration, presentation and event visual effects, and music video and content creation props. The tool runs entirely in the browser with Canvas rendering and Web Audio API — it works offline after the initial page load and leaves zero trace on the device. It also respects reduced motion preferences for accessibility.'
        ]
      },
      es: {
        heading: 'Pantalla de Ruido Blanco (Estática de TV) – Guía del Simulador de Televisión Analógica a Pantalla Completa y Casos de Uso',
        paragraphs: [
          'La <strong>pantalla de ruido blanco</strong> (también llamada <strong>estática de TV</strong> o <strong>nieve de televisión</strong>) recrea el aspecto y sonido icónicos de un televisor analógico sin señal. Nuestro <strong>simulador de ruido blanco</strong> genera <strong>estática de TV analógica</strong> auténtica directamente en su navegador.',
          'Los términos de búsqueda comunes incluyen <strong>pantalla de ruido blanco online</strong>, <strong>estática de TV</strong>, <strong>simulador de TV analógica</strong>, <strong>pantalla de nieve TV</strong>, <strong>efecto CRT</strong> y <strong>pantalla sin señal</strong>. Ofrecemos todo en una página — sin descarga, sin instalación.',
          'Para la experiencia más auténtica, entre en modo de pantalla completa presionando F. Elija entre los estilos Analógico, Color o VHS en el panel de configuración. Active las líneas CRT o el indicador SIN SEÑAL para mayor realismo retro.'
        ]
      },
      pt: {
        heading: 'Tela de Ruído Branco (Estática de TV) – Guia do Simulador de TV Analógica em Tela Cheia e Casos de Uso',
        paragraphs: [
          'A <strong>tela de ruído branco</strong> (também chamada de <strong>estática de TV</strong> ou <strong>neve de televisão</strong>) recria a aparência e o som icônicos de uma televisão analógica sem sinal. Nosso <strong>simulador de ruído branco</strong> gera <strong>estática de TV analógica</strong> autêntica diretamente no seu navegador.',
          'Termos de busca comuns incluem <strong>tela de ruído branco online</strong>, <strong>estática de TV</strong>, <strong>simulador de TV analógica</strong>, <strong>tela de neve TV</strong> e <strong>efeito CRT</strong>. Tudo em uma página — sem download ou instalação.',
          'Para a experiência mais autêntica, entre em modo tela cheia pressionando F. Escolha entre os estilos Analógico, Colorido ou VHS no painel de configurações.'
        ]
      },
      fr: {
        heading: 'Écran Bruit Blanc (Neige TV) – Guide du Simulateur de Télévision Analogique Plein Écran et Cas d\'Utilisation',
        paragraphs: [
          'L\'<strong>écran bruit blanc</strong> (également appelé <strong>neige TV</strong> ou <strong>statique télévision</strong>) recrée l\'aspect et le son emblématiques d\'un téléviseur analogique sans signal. Notre <strong>simulateur de bruit blanc</strong> génère de la <strong>statique TV analogique</strong> authentique directement dans votre navigateur.',
          'Les termes de recherche courants incluent <strong>écran bruit blanc en ligne</strong>, <strong>neige TV</strong>, <strong>simulateur de télévision analogique</strong>, <strong>statique télévision</strong> et <strong>effet CRT</strong>. Le tout sur une seule page — sans téléchargement ni installation.',
          'Pour l\'expérience la plus authentique, passez en plein écran en appuyant sur F. Choisissez entre les styles Analogique, Couleur ou VHS dans le panneau des paramètres.'
        ]
      },
      de: {
        heading: 'Weißes-Rauschen-Bildschirm (TV-Rauschen) – Leitfaden für den analogen Vollbild-TV-Simulator und Anwendungsfälle',
        paragraphs: [
          'Der <strong>Weißes-Rauschen-Bildschirm</strong> (auch <strong>TV-Rauschen</strong> oder <strong>Fernsehschnee</strong> genannt) erzeugt das ikonische Aussehen und Geräusch eines analogen Fernsehers ohne Signal. Unser <strong>Weißes-Rauschen-Simulator</strong> erzeugt authentisches <strong>analoges TV-Rauschen</strong> direkt in Ihrem Browser.',
          'Häufige Suchbegriffe sind <strong>Weißes-Rauschen-Bildschirm online</strong>, <strong>TV-Rauschen</strong>, <strong>Analog-TV-Simulator</strong>, <strong>Fernsehschnee</strong> und <strong>CRT-Effekt</strong>. Alles auf einer Seite — kein Download, keine Installation.',
          'Für das authentischste Erlebnis wechseln Sie durch Drücken von F in den Vollbildmodus. Wählen Sie zwischen den Stilen Analog, Farbe oder VHS im Einstellungsbereich.'
        ]
      },
      hi: {
        heading: 'व्हाइट नॉइज़ स्क्रीन (टीवी स्टैटिक) – फुलस्क्रीन एनालॉग टेलीविज़न सिम्युलेटर गाइड और उपयोग के मामले',
        paragraphs: [
          '<strong>व्हाइट नॉइज़ स्क्रीन</strong> (जिसे <strong>टीवी स्टैटिक</strong> या <strong>टेलीविज़न स्नो</strong> भी कहा जाता है) बिना सिग्नल के एनालॉग टेलीविज़न के प्रतिष्ठित रूप और ध्वनि को फिर से बनाता है। हमारा <strong>व्हाइट नॉइज़ सिम्युलेटर</strong> सीधे आपके ब्राउज़र में प्रामाणिक <strong>एनालॉग टीवी स्टैटिक</strong> उत्पन्न करता है।',
          'सामान्य खोज वाक्यांशों में <strong>व्हाइट नॉइज़ स्क्रीन ऑनलाइन</strong>, <strong>टीवी स्टैटिक</strong>, <strong>एनालॉग टेलीविज़न सिम्युलेटर</strong>, <strong>टेलीविज़न स्नो</strong> और <strong>CRT प्रभाव</strong> शामिल हैं। हमारा सिम्युलेटर एक ही पेज पर सब कुछ प्रदान करता है — बिना डाउनलोड के।',
          'सबसे प्रामाणिक अनुभव के लिए, F दबाकर फुलस्क्रीन मोड में जाएँ। सेटिंग्स पैनल में एनालॉग, कलर या VHS शैलियों में से चुनें।'
        ]
      },
      ja: {
        heading: 'ホワイトノイズ画面（TVノイズ） – 全画面アナログテレビシミュレーターガイドと使用例',
        paragraphs: [
          '<strong>ホワイトノイズ画面</strong>（<strong>TVノイズ</strong>または<strong>テレビスノー</strong>とも呼ばれます）は、信号のないアナログテレビの象徴的な外観と音を再現します。私たちの<strong>ホワイトノイズシミュレーター</strong>は、ブラウザ上で直接本物の<strong>アナログTVノイズ</strong>を生成します。',
          '一般的な検索フレーズには、<strong>ホワイトノイズ画面 オンライン</strong>、<strong>TVノイズ</strong>、<strong>アナログテレビシミュレーター</strong>、<strong>テレビスノー</strong>、<strong>CRT効果</strong>などがあります。すべて1ページで提供 — ダウンロード不要。',
          '最も本格的な体験のために、Fキーを押して全画面モードに切り替えてください。設定パネルでアナログ、カラー、VHSのスタイルから選択できます。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'fake-virus-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Fake Virus Screen – Free Online Virus Warning Simulator Guide & Prank Ideas',
        paragraphs: [
          'The <strong>fake virus screen</strong> (also called a <strong>virus prank simulator</strong> or <strong>fake malware warning</strong>) is a browser-based visual simulation that creates convincing fake security alerts, antivirus dashboards, and ransomware screens for harmless entertainment. Our <strong>fake virus simulator</strong> generates 4 realistic alert styles directly in your browser — no downloads, no installations, no risk. It is designed for pranks, theatrical effects, video production, cybersecurity awareness demonstrations, and creative staging.',
          'Users search for many related terms when looking for this type of prank tool. Common search phrases include <strong>fake virus screen</strong>, <strong>virus prank website</strong>, <strong>fake malware prank</strong>, <strong>fake antivirus online</strong>, <strong>fake ransomware screen</strong>, <strong>fake popup prank</strong>, <strong>hacker prank website</strong>, <strong>fake virus warning</strong>, <strong>fake security alert</strong>, <strong>prank website</strong>, <strong>fake PC virus</strong>, <strong>fake infection screen</strong>, <strong>browser virus prank</strong>, <strong>Windows virus prank</strong>, <strong>fullscreen fake virus</strong>, <strong>computer virus prank</strong>, <strong>fake hacker screen</strong>, and <strong>scare prank</strong>. Our simulator delivers all of these alert styles in a single page — no download, no installation, no account required. It works instantly in any modern browser on desktop, laptop, tablet, phone, and Smart TV.',
          'For the most convincing effect, enter fullscreen mode by pressing F or clicking the fullscreen button. Use the keyboard shortcuts to switch between alert styles: press 1 for the Google Chrome malware warning, 2 for Microsoft Defender SmartScreen, 3 for the Windows Security antivirus dashboard with fake scan progress, or 4 for the WannaCry ransomware screen with countdown timers. Press S to toggle the synthesized alert sounds on and off. Press Escape at any time to exit fullscreen and end the simulation instantly — no trace left behind.',
          'The <strong>fake virus screen</strong> is ideal for friendly pranks and office jokes, YouTube and TikTok prank videos, streaming and gaming intermissions, cybersecurity awareness demonstrations, classroom and training presentations, theatre stage productions and escape rooms, Halloween and party effects, and video production. The tool runs entirely in the browser with CSS animations and Web Audio API — it leaves zero trace on the device and is completely safe. It does not install software, modify system settings, or access personal files.'
        ]
      },
      es: {
        heading: 'Pantalla de Virus Falsa – Guía del Simulador de Aviso de Virus Online Gratis e Ideas de Bromas',
        paragraphs: [
          'La <strong>pantalla de virus falsa</strong> (también llamada <strong>simulador de broma de virus</strong> o <strong>aviso de malware falso</strong>) es una simulación visual basada en el navegador que crea alertas de seguridad falsas convincentes, paneles antivirus y pantallas de ransomware para entretenimiento inofensivo.',
          'Los usuarios buscan muchos términos relacionados como <strong>pantalla de virus falsa online</strong>, <strong>broma de virus para PC</strong>, <strong>simulador de malware falso</strong>, <strong>alerta de virus falsa</strong>, y <strong>broma de ransomware</strong>. Nuestro simulador ofrece 4 estilos de alerta realistas en una sola página.',
          'Para el efecto más convincente, entre en modo de pantalla completa presionando F. Use los atajos de teclado 1-4 para cambiar entre estilos y S para controlar el sonido. Presione Escape para salir al instante.'
        ]
      },
      pt: {
        heading: 'Tela de Vírus Falsa – Guia do Simulador de Aviso de Vírus Online Grátis e Ideias de Pegadinhas',
        paragraphs: [
          'A <strong>tela de vírus falsa</strong> (também chamada de <strong>simulador de pegadinha de vírus</strong> ou <strong>aviso de malware falso</strong>) é uma simulação visual baseada no navegador que cria alertas de segurança falsos convincentes.',
          'Termos de busca comuns incluem <strong>tela de vírus falsa online</strong>, <strong>pegadinha de vírus para PC</strong>, <strong>simulador de malware falso</strong> e <strong>alerta de vírus falso</strong>. 4 estilos de alerta realistas em uma única página.',
          'Para o efeito mais convincente, entre em modo tela cheia pressionando F. Use os atalhos 1-4 para alternar estilos e S para controlar o som. Pressione Escape para sair instantaneamente.'
        ]
      },
      fr: {
        heading: 'Fausse Écran de Virus – Guide du Simulateur d\'Alerte de Virus en Ligne Gratuit et Idées de Farces',
        paragraphs: [
          'La <strong>fausse écran de virus</strong> (également appelée <strong>simulateur de farce virale</strong> ou <strong>fausse alerte malware</strong>) est une simulation visuelle basée sur le navigateur qui crée de fausses alertes de sécurité convaincantes.',
          'Les termes de recherche courants incluent <strong>fausse écran de virus en ligne</strong>, <strong>farce de virus pour PC</strong>, <strong>simulateur de malware faux</strong> et <strong>fausse alerte de virus</strong>. 4 styles d\'alerte réalistes en une seule page.',
          'Pour l\'effet le plus convaincant, passez en plein écran en appuyant sur F. Utilisez les touches 1 à 4 pour changer de style et S pour contrôler le son. Appuyez sur Échap pour quitter instantanément.'
        ]
      },
      de: {
        heading: 'Gefälschter Virus-Bildschirm – Leitfaden für den kostenlosen Online-Viruswarnsimulator und Streichideen',
        paragraphs: [
          'Der <strong>gefälschte Virus-Bildschirm</strong> (auch <strong>Virus-Streich-Simulator</strong> oder <strong>gefälschte Malware-Warnung</strong> genannt) ist eine browserbasierte visuelle Simulation, die überzeugende gefälschte Sicherheitswarnungen erstellt.',
          'Häufige Suchbegriffe sind <strong>gefälschter Virus-Bildschirm online</strong>, <strong>Virus-Streich für PC</strong>, <strong>gefälschter Malware-Simulator</strong> und <strong>gefälschte Viruswarnung</strong>. 4 realistische Alarmstile auf einer einzigen Seite.',
          'Für den überzeugendsten Effekt wechseln Sie durch Drücken von F in den Vollbildmodus. Verwenden Sie die Tasten 1-4, um die Stile zu wechseln, und S, um den Ton zu steuern. Drücken Sie Escape zum sofortigen Beenden.'
        ]
      },
      hi: {
        heading: 'फर्जी वायरस स्क्रीन – मुफ्त ऑनलाइन वायरस चेतावनी सिम्युलेटर गाइड और प्रैंक आइडियाज',
        paragraphs: [
          '<strong>फर्जी वायरस स्क्रीन</strong> (जिसे <strong>वायरस प्रैंक सिम्युलेटर</strong> या <strong>फर्जी मैलवेयर चेतावनी</strong> भी कहा जाता है) एक ब्राउज़र-आधारित दृश्य सिमुलेशन है जो हानिरहित मनोरंजन के लिए विश्वसनीय फर्जी सुरक्षा अलर्ट बनाता है।',
          'सामान्य खोज वाक्यांशों में <strong>फर्जी वायरस स्क्रीन ऑनलाइन</strong>, <strong>वायरस प्रैंक</strong>, <strong>फर्जी मैलवेयर प्रैंक</strong> और <strong>फर्जी वायरस चेतावनी</strong> शामिल हैं। एक ही पेज पर 4 यथार्थवादी अलर्ट शैलियाँ।',
          'सबसे विश्वसनीय प्रभाव के लिए, F दबाकर फुलस्क्रीन मोड में जाएँ। शैलियाँ बदलने के लिए 1-4 और ध्वनि नियंत्रित करने के लिए S का उपयोग करें। तुरंत बाहर निकलने के लिए Escape दबाएं।'
        ]
      },
      ja: {
        heading: '偽ウイルス画面 – 無料オンラインウイルス警告シミュレーターガイドといたずらアイデア',
        paragraphs: [
          '<strong>偽ウイルス画面</strong>（<strong>ウイルスいたずらシミュレーター</strong>または<strong>偽マルウェア警告</strong>とも呼ばれます）は、無害なエンターテイメントのために説得力のある偽のセキュリティ警告を作成するブラウザベースの視覚シミュレーションです。',
          '一般的な検索フレーズには、<strong>偽ウイルス画面 オンライン</strong>、<strong>ウイルスいたずら</strong>、<strong>偽マルウェアいたずら</strong>、<strong>偽ウイルス警告</strong>などがあります。1ページで4つのリアルなアラートスタイル。',
          '最も説得力のある効果を得るには、Fキーを押して全画面モードに切り替えてください。1〜4のキーでスタイルを切り替え、Sキーでサウンドを制御します。Escapeキーですぐに終了できます。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'windows-update') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Fake Windows Update Screen – Free Online Windows Update Simulator Guide & Prank Ideas',
        paragraphs: [
          'The <strong>fake Windows Update screen</strong> (also called a <strong>Windows update prank simulator</strong> or <strong>fake update progress screen</strong>) is a browser-based visual simulation that creates convincing fake Windows update screens — spinning dots, update progress bars, blue screen of death, and recovery mode — for harmless entertainment. Our <strong>Windows Update simulator</strong> generates 4 realistic modes directly in your browser — no downloads, no installations, no risk. It is designed for pranks, theatrical effects, video production, classroom demonstrations, and creative staging.',
          'Users search for many related terms when looking for this type of prank tool. Common search phrases include <strong>fake Windows Update screen</strong>, <strong>Windows update prank</strong>, <strong>fake update screen</strong>, <strong>Windows update simulator</strong>, <strong>fake Windows loading screen</strong>, <strong>Windows blue screen prank</strong>, <strong>fake BSOD</strong>, <strong>false Windows update</strong>, <strong>fake update progress</strong>, <strong>Windows update joke</strong>, <strong>prank update screen</strong>, <strong>fake Windows recovery screen</strong>, <strong>fake PC update</strong>, <strong>Windows 11 update prank</strong>, <strong>fake download screen</strong>, <strong>fake system update</strong>, <strong>fullscreen Windows update</strong>, <strong>fake installing Windows</strong>, <strong>fake preparing automatic repair</strong>, <strong>fake blue screen prank website</strong>, and <strong>staged Windows update screen</strong>. Our simulator delivers all 4 modes in a single page — no download, no installation, no account required. It works instantly in any modern browser on desktop, laptop, tablet, phone, and Smart TV.',
          'For the most convincing effect, enter fullscreen mode by pressing F or clicking the fullscreen button. The fullscreen mode hides all browser chrome for maximum realism. Use the settings panel (gear icon) or keyboard shortcuts to switch between simulation modes: press 1 for Spinning Dots mode showing the classic "Getting Windows ready" animation, press 2 for Update Progress mode with a percentage bar and "Working on updates" text, press 3 for Blue Screen mode simulating a Windows blue screen of death with a sad face and error message, or press 4 for Recovery mode displaying "Automatic Repair" or "Preparing Automatic Repair" screens. Adjust the speed slider to control animation pace. Toggle "Show percentage" to display or hide numerical progress. Press R to pause and resume the animation. Press Escape at any time to exit fullscreen and end the simulation instantly — no trace left behind.',
          'The <strong>fake Windows Update screen</strong> is ideal for friendly pranks and office jokes, YouTube and TikTok prank videos, streaming and gaming intermissions, video production and content creation, classroom demonstrations, theatre stage productions and escape rooms, event screens and conference displays, and screen recording backdrops. The tool runs entirely in the browser with CSS animations — it leaves zero trace on the device and is completely safe. It does not install software, modify system settings, or access personal files.'
        ]
      },
      es: {
        heading: 'Pantalla de Actualización de Windows Falsa – Guía del Simulador de Actualización de Windows Online Gratis e Ideas de Bromas',
        paragraphs: [
          'La <strong>pantalla de actualización de Windows falsa</strong> (también llamada <strong>simulador de broma de actualización de Windows</strong> o <strong>pantalla de progreso de actualización falsa</strong>) es una simulación visual basada en el navegador que crea pantallas de actualización de Windows falsas convincentes — puntos giratorios, barras de progreso, pantalla azul y modo de recuperación — para entretenimiento inofensivo.',
          'Los términos de búsqueda comunes incluyen <strong>pantalla de actualización de Windows falsa</strong>, <strong>broma de actualización de Windows</strong>, <strong>pantalla de actualización falsa</strong>, <strong>simulador de actualización de Windows</strong> y <strong>pantalla de carga falsa de Windows</strong>. 4 modos realistas en una sola página.',
          'Para el efecto más convincente, entre en modo de pantalla completa presionando F. Use los atajos de teclado 1-4 para cambiar entre modos (1=puntos giratorios, 2=progreso, 3=pantalla azul, 4=recuperación). Ajuste la velocidad con el control deslizante. Presione R para pausar/reanudar. Presione Escape para salir al instante.'
        ]
      },
      pt: {
        heading: 'Tela de Atualização do Windows Falsa – Guia do Simulador de Atualização do Windows Online Grátis e Ideias de Pegadinhas',
        paragraphs: [
          'A <strong>tela de atualização do Windows falsa</strong> (também chamada de <strong>simulador de pegadinha de atualização do Windows</strong> ou <strong>tela de progresso de atualização falsa</strong>) é uma simulação visual baseada no navegador que cria telas de atualização do Windows falsas convincentes.',
          'Termos de busca comuns incluem <strong>tela de atualização do Windows falsa</strong>, <strong>pegadinha de atualização do Windows</strong>, <strong>tela de atualização falsa</strong> e <strong>simulador de atualização do Windows</strong>. 4 modos realistas em uma única página.',
          'Para o efeito mais convincente, entre em modo tela cheia pressionando F. Use os atalhos 1-4 para alternar modos. Ajuste a velocidade. Pressione R para pausar/retomar. Pressione Escape para sair instantaneamente.'
        ]
      },
      fr: {
        heading: 'Fausse Écran de Mise à Jour Windows – Guide du Simulateur de Mise à Jour Windows en Ligne Gratuit et Idées de Farces',
        paragraphs: [
          'La <strong>fausse écran de mise à jour Windows</strong> (également appelée <strong>simulateur de farce de mise à jour Windows</strong> ou <strong>fausse écran de progression de mise à jour</strong>) est une simulation visuelle basée sur le navigateur qui crée de fausses écrans de mise à jour Windows convaincantes.',
          'Les termes de recherche courants incluent <strong>fausse écran de mise à jour Windows</strong>, <strong>farce de mise à jour Windows</strong>, <strong>fausse écran de mise à jour</strong> et <strong>simulateur de mise à jour Windows</strong>. 4 modes réalistes en une seule page.',
          'Pour l\'effet le plus convaincant, passez en plein écran en appuyant sur F. Utilisez les touches 1 à 4 pour changer de mode. Ajustez la vitesse. Appuyez sur R pour pause/reprise. Appuyez sur Échap pour quitter instantanément.'
        ]
      },
      de: {
        heading: 'Gefälschter Windows-Update-Bildschirm – Leitfaden für den kostenlosen Online-Windows-Update-Simulator und Streichideen',
        paragraphs: [
          'Der <strong>gefälschte Windows-Update-Bildschirm</strong> (auch <strong>Windows-Update-Streich-Simulator</strong> oder <strong>gefälschter Update-Fortschrittsbildschirm</strong> genannt) ist eine browserbasierte visuelle Simulation, die überzeugende gefälschte Windows-Update-Bildschirme erstellt.',
          'Häufige Suchbegriffe sind <strong>gefälschter Windows-Update-Bildschirm</strong>, <strong>Windows-Update-Streich</strong>, <strong>gefälschter Update-Bildschirm</strong> und <strong>Windows-Update-Simulator</strong>. 4 realistische Modi auf einer einzigen Seite.',
          'Für den überzeugendsten Effekt wechseln Sie durch Drücken von F in den Vollbildmodus. Verwenden Sie die Tasten 1-4, um die Modi zu wechseln. Passen Sie die Geschwindigkeit an. Drücken Sie R zum Pause/Fortsetzen. Drücken Sie Escape zum sofortigen Beenden.'
        ]
      },
      hi: {
        heading: 'फर्जी विंडोज अपडेट स्क्रीन – मुफ्त ऑनलाइन विंडोज अपडेट सिम्युलेटर गाइड और प्रैंक आइडियाज',
        paragraphs: [
          '<strong>फर्जी विंडोज अपडेट स्क्रीन</strong> (जिसे <strong>विंडोज अपडेट प्रैंक सिम्युलेटर</strong> या <strong>फर्जी अपडेट प्रोग्रेस स्क्रीन</strong> भी कहा जाता है) एक ब्राउज़र-आधारित दृश्य सिमुलेशन है जो हानिरहित मनोरंजन के लिए विश्वसनीय फर्जी विंडोज अपडेट स्क्रीन बनाता है।',
          'सामान्य खोज वाक्यांशों में <strong>फर्जी विंडोज अपडेट स्क्रीन</strong>, <strong>विंडोज अपडेट प्रैंक</strong>, <strong>फर्जी अपडेट स्क्रीन</strong> और <strong>विंडोज अपडेट सिम्युलेटर</strong> शामिल हैं। एक ही पेज पर 4 यथार्थवादी मोड।',
          'सबसे विश्वसनीय प्रभाव के लिए, F दबाकर फुलस्क्रीन मोड में जाएँ। मोड बदलने के लिए 1-4 का उपयोग करें। गति समायोजित करें। रोकने/जारी रखने के लिए R दबाएं। तुरंत बाहर निकलने के लिए Escape दबाएं।'
        ]
      },
      ja: {
        heading: '偽Windowsアップデート画面 – 無料オンラインWindowsアップデートシミュレーターガイドといたずらアイデア',
        paragraphs: [
          '<strong>偽Windowsアップデート画面</strong>（<strong>Windowsアップデートいたずらシミュレーター</strong>または<strong>偽アップデート進捗画面</strong>とも呼ばれます）は、無害なエンターテイメントのために説得力のある偽のWindowsアップデート画面を作成するブラウザベースの視覚シミュレーションです。',
          '一般的な検索フレーズには、<strong>偽Windowsアップデート画面</strong>、<strong>Windowsアップデートいたずら</strong>、<strong>偽アップデート画面</strong>、<strong>Windowsアップデートシミュレーター</strong>などがあります。1ページで4つのリアルなモード。',
          '最も説得力のある効果を得るには、Fキーを押して全画面モードに切り替えてください。1〜4のキーでモードを切り替え。速度を調整。Rキーで一時停止/再開。Escapeキーですぐに終了できます。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  if (toolId === 'ubuntu-screen') {
    const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
      en: {
        heading: 'Ubuntu Screen Simulator – Free Online Ubuntu Update & Boot Screen Guide',
        paragraphs: [
          'The <strong>Ubuntu screen simulator</strong> (also called a <strong>fake Ubuntu update screen</strong> or <strong>Ubuntu boot simulator</strong>) is a browser-based visual simulation that creates a convincing fake Ubuntu update installation screen with authentic boot animation, non-linear progress bar, and reboot cycle — for harmless entertainment, Linux demonstrations, and video production. Our <strong>Ubuntu simulator</strong> renders a realistic Ubuntu-style update screen directly in your browser — no downloads, no installations, no risk. It is designed for Linux demos, educational training, video content creation, and creative staging.',
          'Users search for many related terms when looking for this type of simulation tool. Common search phrases include <strong>Ubuntu screen simulator</strong>, <strong>fake Ubuntu update</strong>, <strong>Ubuntu boot screen online</strong>, <strong>Linux simulator online</strong>, <strong>Ubuntu desktop simulator</strong>, <strong>fake Linux desktop</strong>, <strong>Ubuntu update prank</strong>, <strong>Ubuntu terminal simulator</strong>, <strong>Linux prank screen</strong>, <strong>fake Ubuntu installation</strong>, <strong>Ubuntu loading screen</strong>, <strong>Ubuntu progress bar</strong>, <strong>fullscreen Ubuntu simulator</strong>, <strong>Ubuntu presentation screen</strong>, <strong>fake Linux update</strong>, <strong>Ubuntu OBS background</strong>, <strong>Ubuntu video prop</strong>, <strong>Linux classroom demo</strong>, <strong>Ubuntu boot animation</strong>, and <strong>fake system update screen</strong>. Our simulator delivers authentic Ubuntu-style visuals in a single page — no download, no installation, no account required. It works instantly in any modern browser on desktop, laptop, tablet, phone, and Smart TV.',
          'For the most convincing effect, enter fullscreen mode by pressing F or clicking the fullscreen button. The fullscreen mode hides all browser chrome for maximum realism, and the cursor auto-hides after 2 seconds of inactivity for a clean presentation look. The simulation starts automatically with an authentic Ubuntu boot screen featuring the Ubuntu logo, a non-linear progress bar that mimics real update behaviour with realistic speed variations, and a reboot cycle animation. Adjust brightness through the settings panel to match your ambient environment for the most realistic display.',
          'The <strong>Ubuntu screen simulator</strong> is ideal for Linux demonstrations and training, YouTube and TikTok video production, streaming and OBS intermission screens, classroom and university Linux lectures, technology event displays and trade shows, theatre stage productions and escape rooms, developer environment backgrounds, and screen recording backdrops. The tool runs entirely in the browser with CSS animations — it leaves zero trace on the device and is completely safe. It does not install software, modify system settings, or access personal files. Everything runs locally in your browser after the initial page load.'
        ]
      },
      es: {
        heading: 'Simulador de Pantalla Ubuntu – Guía de Pantalla de Actualización y Arranque Ubuntu Online Gratis',
        paragraphs: [
          'El <strong>simulador de pantalla Ubuntu</strong> (también llamado <strong>pantalla de actualización Ubuntu falsa</strong> o <strong>simulador de arranque Ubuntu</strong>) es una simulación visual basada en el navegador que crea una pantalla de instalación de actualización Ubuntu falsa convincente.',
          'Los términos de búsqueda comunes incluyen <strong>simulador de pantalla Ubuntu</strong>, <strong>actualización Ubuntu falsa</strong>, <strong>pantalla de arranque Ubuntu online</strong>, <strong>simulador de Linux online</strong> y <strong>escritorio Ubuntu simulado</strong>. Nuestro simulador ofrece auténticos visuales estilo Ubuntu.',
          'Para el efecto más convincente, entre en modo de pantalla completa presionando F. El cursor se oculta automáticamente después de 2 segundos. El simulador comienza automáticamente con una animación de arranque Ubuntu auténtica. Ajuste el brillo según su entorno.'
        ]
      },
      pt: {
        heading: 'Simulador de Tela Ubuntu – Guia de Tela de Atualização e Boot Ubuntu Online Grátis',
        paragraphs: [
          'O <strong>simulador de tela Ubuntu</strong> (também chamado de <strong>tela de atualização Ubuntu falsa</strong> ou <strong>simulador de boot Ubuntu</strong>) é uma simulação visual baseada no navegador que cria uma tela de instalação de atualização Ubuntu falsa convincente.',
          'Termos de busca comuns incluem <strong>simulador de tela Ubuntu</strong>, <strong>atualização Ubuntu falsa</strong>, <strong>tela de boot Ubuntu online</strong> e <strong>simulador Linux online</strong>. Visuais autênticos estilo Ubuntu em uma única página.',
          'Para o efeito mais convincente, entre em modo tela cheia pressionando F. O cursor se oculta automaticamente. O simulador inicia automaticamente. Ajuste o brilho conforme necessário.'
        ]
      },
      fr: {
        heading: 'Simulateur d\'Écran Ubuntu – Guide de l\'Écran de Mise à Jour et Démarrage Ubuntu en Ligne Gratuit',
        paragraphs: [
          'Le <strong>simulateur d\'écran Ubuntu</strong> (également appelé <strong>fausse écran de mise à jour Ubuntu</strong> ou <strong>simulateur de démarrage Ubuntu</strong>) est une simulation visuelle basée sur le navigateur qui crée une fausse écran d\'installation de mise à jour Ubuntu convaincante.',
          'Les termes de recherche courants incluent <strong>simulateur d\'écran Ubuntu</strong>, <strong>fausse mise à jour Ubuntu</strong>, <strong>écran de démarrage Ubuntu en ligne</strong> et <strong>simulateur Linux en ligne</strong>. Visuels authentiques style Ubuntu.',
          'Pour l\'effet le plus convaincant, passez en plein écran en appuyant sur F. Le curseur se cache automatiquement. Le simulateur démarre automatiquement.'
        ]
      },
      de: {
        heading: 'Ubuntu-Bildschirm-Simulator – Leitfaden für den kostenlosen Online-Ubuntu-Update- und Boot-Bildschirm',
        paragraphs: [
          'Der <strong>Ubuntu-Bildschirm-Simulator</strong> (auch <strong>gefälschter Ubuntu-Update-Bildschirm</strong> oder <strong>Ubuntu-Boot-Simulator</strong> genannt) ist eine browserbasierte visuelle Simulation, die einen überzeugenden gefälschten Ubuntu-Update-Installationsbildschirm erstellt.',
          'Häufige Suchbegriffe sind <strong>Ubuntu-Bildschirm-Simulator</strong>, <strong>gefälschtes Ubuntu-Update</strong>, <strong>Ubuntu-Boot-Bildschirm online</strong> und <strong>Linux-Simulator online</strong>. Authentische Ubuntu-ähnliche Optik.',
          'Für den überzeugendsten Effekt wechseln Sie durch Drücken von F in den Vollbildmodus. Der Mauszeiger wird automatisch ausgeblendet. Der Simulator startet automatisch.'
        ]
      },
      hi: {
        heading: 'उबंटू स्क्रीन सिम्युलेटर – मुफ्त ऑनलाइन उबंटू अपडेट और बूट स्क्रीन गाइड',
        paragraphs: [
          '<strong>उबंटू स्क्रीन सिम्युलेटर</strong> (जिसे <strong>फर्जी उबंटू अपडेट स्क्रीन</strong> या <strong>उबंटू बूट सिम्युलेटर</strong> भी कहा जाता है) एक ब्राउज़र-आधारित दृश्य सिमुलेशन है जो हानिरहित मनोरंजन के लिए एक विश्वसनीय फर्जी उबंटू अपडेट इंस्टॉलेशन स्क्रीन बनाता है।',
          'सामान्य खोज वाक्यांशों में <strong>उबंटू स्क्रीन सिम्युलेटर</strong>, <strong>फर्जी उबंटू अपडेट</strong>, <strong>उबंटू बूट स्क्रीन ऑनलाइन</strong> और <strong>लिनक्स सिम्युलेटर ऑनलाइन</strong> शामिल हैं। एक ही पेज पर प्रामाणिक उबंटू-शैली विज़ुअल।',
          'सबसे विश्वसनीय प्रभाव के लिए, F दबाकर फुलस्क्रीन मोड में जाएँ। कर्सर स्वचालित रूप से छिप जाता है। सिम्युलेटर स्वचालित रूप से शुरू होता है।'
        ]
      },
      ja: {
        heading: 'Ubuntu画面シミュレーター – 無料オンラインUbuntuアップデート＆ブート画面ガイド',
        paragraphs: [
          '<strong>Ubuntu画面シミュレーター</strong>（<strong>偽Ubuntuアップデート画面</strong>または<strong>Ubuntuブートシミュレーター</strong>とも呼ばれます）は、無害なエンターテイメントのために説得力のある偽のUbuntuアップデートインストール画面を作成するブラウザベースの視覚シミュレーションです。',
          '一般的な検索フレーズには、<strong>Ubuntu画面シミュレーター</strong>、<strong>偽Ubuntuアップデート</strong>、<strong>Ubuntuブート画面 オンライン</strong>、<strong>Linuxシミュレーター オンライン</strong>などがあります。1ページで本格的なUbuntuスタイルのビジュアル。',
          '最も説得力のある効果を得るには、Fキーを押して全画面モードに切り替えてください。カーソルは自動的に非表示になります。シミュレーターは自動的に起動します。'
        ]
      }
    };
    return content[locale] ?? content.en;
  }

  const content: Record<Locale, { heading: string; paragraphs: string[] }> = {
    en: {
      heading: 'White Screen Utility Search Scenarios',
      paragraphs: [
        'When looking for screen setups, users frequently seek terms like a <strong>white screen wallpaper</strong>, a <strong>white screen light</strong> panel, or a dedicated <strong>white screen test</strong> utility. Whether you are using this on <strong>white screen Windows</strong> devices or running a <strong>white screen youtube</strong> loop for soft facial illumination, this tool serves as a pure <strong>white screen online</strong> without interruptions.',
        'For offline use and photography prep, click <strong>white screen download</strong> to save different device layouts. This allows you to generate a <strong>white screen background</strong> or stage the device as a <strong>white screen photo</strong> fill light. You can easily export the canvas to produce a high-luminance <strong>white screen image</strong> directly from the tool panel.'
      ]
    },
    es: {
      heading: 'Escenarios de búsqueda de la pantalla blanca',
      paragraphs: [
        'Para configurar la pantalla, la gente suele buscar términos como un <strong>fondo de pantalla blanca</strong>, un panel de <strong>luz de pantalla blanca</strong> o una herramienta de <strong>prueba de pantalla blanca</strong> específica. Ya sea que lo use en dispositivos con <strong>pantalla blanca Windows</strong> o mediante un bucle de <strong>pantalla blanca youtube</strong> para iluminación de retratos, este sitio web funciona como una <strong>pantalla blanca online</strong> limpia.',
        'Para uso sin conexión y producción fotográfica, use la opción de <strong>descargar pantalla blanca</strong> para guardar diseños de imagen. Esto le permite crear un <strong>fondo blanco pantalla</strong> personalizado o configurar su pantalla como una <strong>foto con pantalla blanca</strong> de relleno. Guarde una <strong>imagen de pantalla blanca</strong> limpia usando la barra de control.'
      ]
    },
    pt: {
      heading: 'Cenários de pesquisa para tela branca',
      paragraphs: [
        'Ao preparar monitores, as pessoas comumente procuram termos como <strong>papel de parede tela branca</strong>, um painel de <strong>luz de tela branca</strong>, ou um utilitário de <strong>teste de tela branca</strong>. Se você estiver configurando em dispositivos com <strong>tela branca Windows</strong> ou reproduzindo um clipe de <strong>tela branca youtube</strong> para iluminação suave, este site serve de <strong>tela branca online</strong> perfeita.',
        'Para fins criativos e off-line, utilize a opção de <strong>baixar tela branca</strong> para salvar layouts. Isso permite que você configure um <strong>fundo branco tela</strong> limpo ou configure seu estúdio para uma <strong>foto com tela branca</strong> de apoio. Exporte a <strong>imagem de tela branca</strong> ideal usando as configurações de corte na barra.'
      ]
    },
    fr: {
      heading: "Usages et scénarios de recherche de l'écran blanc",
      paragraphs: [
        "Pour ajuster un écran, on recherche fréquemment des expressions comme <strong>fond d'écran blanc</strong>, panneau de <strong>lumière écran blanc</strong>, ou outil de <strong>test écran blanc</strong>. Que vous l'affichiez sur des ordinateurs sous <strong>écran blanc Windows</strong> ou que vous lisiez une vidéo <strong>écran blanc youtube</strong> en boucle pour éclairer vos vidéoconférences, notre outil constitue un excellent <strong>écran blanc en ligne</strong>.",
        "Pour des projets de photographie, le bouton <strong>télécharger écran blanc</strong> permet de sauvegarder le rendu. Cela vous aide à générer un <strong>arrière-plan écran blanc</strong> uniforme ou à utiliser la dalle comme <strong>photo écran blanc</strong> éclairante. Récupérez instantanément l'<strong>image écran blanc</strong> de votre choix par les commandes."
      ]
    },
    de: {
      heading: 'Suchbegriffe und Szenarien für weißen Bildschirm',
      paragraphs: [
        'Zur Kalibrierung oder Ausleuchtung suchen Anwender oft nach Begriffen wie <strong>weißer bildschirm hintergrund</strong>, einem <strong>weißer bildschirm licht</strong> oder einem speziellen <strong>weißer bildschirm test</strong>. Unabhängig davon, ob Sie dieses Werkzeug für <strong>weißer bildschirm windows</strong>-Monitore nutzen oder ein <strong>weißer bildschirm youtube</strong>-Video zur Ausleuchtung abspielen, erhalten Sie hier einen idealen <strong>weißer bildschirm online</strong>.',
        'Für Fotografie und Offline-Grafiken können Sie die Option <strong>weißer bildschirm herunterladen</strong> verwenden. So erstellen Sie unkompliziert einen passenden <strong>weißer hintergrund bildschirm</strong> oder nutzen das Display als <strong>weißer bildschirm foto</strong>-Hilfsmittel. Erzeugen und speichern Sie das <strong>weißer bildschirm bild</strong> direkt über die Seitenleiste.'
      ]
    },
    hi: {
      heading: 'सफ़ेद स्क्रीन के लिए सामान्य खोज परिदृश्य',
      paragraphs: [
        'जब उपयोगकर्ता डिस्प्ले सेटअप की खोज करते हैं, तो वे अक्सर <strong>सफेद स्क्रीन वॉलपेपर</strong>, <strong>सफेद स्क्रीन लाइट</strong> स्रोत, या एक समर्पित <strong>सफेद स्क्रीन परीक्षण</strong> टूल खोजते हैं। चाहे आप इसे <strong>सफेद स्क्रीन विंडोज़</strong> सिस्टम पर उपयोग कर रहे हों या प्रकाश के लिए <strong>सफेद स्क्रीन यूट्यूब</strong> वीडियो चला रहे हों, यह टूल बिना किसी रुकावट के एक <strong>सफेद स्क्रीन ऑनलाइन</strong> के रूप में कार्य करता है।',
        'ऑफ़लाइन उपयोग और फोटोग्राफी के लिए, विभिन्न लेआउट सहेजने के लिए <strong>सफेद स्क्रीन डाउनलोड</strong> पर क्लिक करें। यह आपको <strong>सफेद स्क्रीन बैकग्राउंड</strong> तैयार करने या डिस्प्ले को <strong>सफेद स्क्रीन फोटो</strong> फिल लाइट के रूप में उपयोग करने की अनुमति देता है। आप सीधे पैनल से एक शानदार <strong>सफेद स्क्रीन इमेज</strong> निर्यात कर सकते हैं।'
      ]
    },
    ja: {
      heading: '白い画面の検索意図とよくあるキーワード',
      paragraphs: [
        'ディスプレイ設定の確認や照明用途として、多くの人が <strong>白い画面 壁紙</strong> や、ビデオ通話時の <strong>白い画面 ライト</strong>、ドット抜けチェックに使う <strong>白い画面 テスト</strong> などを探します。デスクトップPCの <strong>白い画面 Windows</strong> の検査や、長時間再生 of <strong>白い画面 youtube</strong> 代替用途など、広告等のないクリーンな <strong>白い画面 オンライン</strong> を提供します。',
        '撮影用の背景素材やオフライン環境で使用する場合は、<strong>白い画面 ダウンロード</strong> 機能を利用して画像を保存してください。これにより用途にあわせた <strong>白い画面 背景</strong> を瞬時に設定でき、ポートレート撮影時の <strong>白い画面 写真</strong> 照明機材としても役立ちます。必要な <strong>白い画面 画像</strong> をエクスポートしてご利用ください。'
      ]
    }
  };
  return content[locale] ?? content.en;
}
