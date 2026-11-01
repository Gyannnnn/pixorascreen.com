---
status: complete
sourceHash: e40dabe36b7bb0ce
title: "Écran blanc - Test gratuit en plein écran | PixoraScreen"
description: "Lancez un test d’écran blanc gratuit pour détecter les pixels morts, les fuites de rétroéclairage LCD et les dominantes de couleur. En plein écran, avec réglage de luminosité, sur tous les appareils."
h1: "Écran blanc : test gratuit en plein écran pour détecter les pixels morts"
breadcrumb: "Écran blanc"
appDescription: "Lancez un test d’écran blanc gratuit pour détecter les pixels morts, les fuites de rétroéclairage LCD et les dominantes de couleur. En plein écran, avec réglage de luminosité, sur tous les appareils."
lede: "Un plein écran blanc pur pour vérifier la propreté de l’écran, éclairer en douceur, inspecter un affichage et servir de lumière d’appoint en photo."
chips:
  - "plein écran"
  - "luminosité"
  - "copier le HEX"
  - "copier le RGB"
  - "sélecteur de couleur"
shortcuts:
  - keys: F
    label: "Mode plein écran"
  - keys: R
    label: "Couleur aléatoire"
  - keys: C
    label: "Copier la couleur actuelle"
  - keys: D
    label: "Télécharger l’image"
faqs:
  - q: "De quelle couleur apparaît un sous-pixel mort sur un écran blanc ?"
    a: "Le blanc, c’est le rouge, le vert et le bleu à pleine puissance : un pixel privé de l’un d’eux affiche le mélange des deux autres. Un sous-pixel bleu mort paraît jaune, un rouge mort paraît cyan et un vert mort paraît magenta. Un pixel entièrement mort paraît noir."
  - q: "Pourquoi l’écran blanc paraît-il jaune ou bleuté ?"
    a: "En général, un réglage de l’écran le teinte. L’éclairage nocturne de Windows, Night Shift et True Tone sur les appareils Apple, ainsi que les modes confort des yeux ou lecture sur Android réchauffent l’image. Désactivez-les et vérifiez le préréglage de température de couleur du moniteur ; un mode 6500K ou « sRGB » donne le blanc le plus neutre."
  - q: "Un écran blanc peut-il réparer un pixel bloqué ?"
    a: "Non. Une image blanche fixe ne change rien à un pixel bloqué. Faire défiler rapidement des couleurs sur la zone ou la masser doucement à travers un chiffon doux débloque parfois un pixel, sans aucune garantie, et aucun logiciel ne peut faire revivre un pixel mort."
  - q: "Le test d’écran blanc est-il sans danger pour un écran OLED ?"
    a: "Oui, pour des sessions de test normales de quelques minutes. Le burn-in s’accumule quand la même image reste affichée des centaines d’heures. Écourtez les sessions de blanc à pleine luminosité sur les téléphones, qui baissent d’ailleurs leur luminosité automatiquement pour protéger la dalle."
  - q: "Puis-je utiliser une tablette comme table lumineuse pour décalquer ?"
    a: "Oui. Affichez le blanc en plein écran, montez la luminosité et posez votre papier dessus. Glissez une feuille de plastique transparent entre le papier et la vitre, et décalquez en appuyant légèrement ; appuyer fort sur un écran LCD peut laisser des marques temporaires."
  - q: "Le curseur de luminosité rend-il l’écran plus lumineux que son maximum ?"
    a: "Non. Le blanc est déjà ce que votre écran peut afficher de plus lumineux avec le réglage actuel du rétroéclairage. Le curseur assombrit l’image jusqu’à 20 %, et son renfort au-delà de 100 % éclaircit seulement les couleurs qui ne sont pas encore au maximum. Pour plus de lumière, augmentez la luminosité de l’appareil lui-même."
updated: '2026-10-31'
---

## Comment faire un test d’écran blanc

Un test d’écran blanc règle chaque pixel sur le blanc pur (`#ffffff`) : tous les sous-pixels rouges, verts et bleus de la dalle fonctionnent alors à pleine puissance. Tout ce qui ne suit pas devient visible : un pixel qui ne s’allume jamais, un coin plus sombre que le reste ou un blanc qui tire vers le jaune ou le bleu. C’est la vérification la plus rapide sur un ordinateur portable neuf, un moniteur d’occasion ou un téléphone après un changement d’écran.

1. Nettoyez d’abord la vitre. Sur du blanc, la poussière et les traces de doigts ressemblent exactement à des pixels sombres.
2. Désactivez l’éclairage nocturne, Night Shift, True Tone et tout mode confort des yeux, car ils teintent volontairement le blanc.
3. Réglez l’écran sur une luminosité élevée, puis appuyez sur <kbd>F</kbd> ou sur le bouton Plein écran.
4. Parcourez l’écran par zones à une distance normale, puis rapprochez-vous.
5. Sur un petit écran très net de téléphone ou d’ordinateur portable, utilisez le zoom de l’appareil photo de votre téléphone comme loupe. Un pixel mort sur un écran haute densité est plus petit qu’un grain de sel.
6. Appuyez sur <kbd>Échap</kbd> quand vous avez terminé.

## Ce que montre un écran blanc

### Pixels et sous-pixels morts

Un pixel entièrement mort forme un point noir. Un pixel qui n’a perdu qu’un sous-pixel affiche une couleur : jaune s’il manque le bleu, cyan s’il manque le rouge, magenta s’il manque le vert. Cette couleur indique précisément quel sous-pixel est défaillant.

### Luminosité inégale

Sur les dalles LCD, un fond blanc révèle des coins plus sombres, des bandes foncées et des zones où le rétroéclairage est plus faible. Les grands téléviseurs peuvent aussi montrer de légères bandes verticales ou horizontales, appelées effet d’écran sale (dirty screen effect) ; un fond gris moyen comme l’[écran gris](tool:grey-screen) le rend plus visible.

### Teinte et balance des blancs

Le blanc doit paraître neutre, comme du papier à la lumière du jour. Placez deux écrans côte à côte sur cette page et les différences de température de couleur sautent aux yeux, ce qui aide à harmoniser les moniteurs d’une configuration à deux écrans.

### Poussière et traces

Un fond lumineux et uniforme fait ressortir chaque trace de doigt et chaque strie : c’est le bon moment pour nettoyer l’écran avant de tester quoi que ce soit d’autre.

## Ce qu’il ne peut pas montrer

Le blanc cache le défaut inverse : un pixel bloqué allumé en permanence est invisible sur un fond blanc. Cherchez-les sur l’[écran noir](tool:black-screen), qui montre aussi bien mieux les fuites de rétroéclairage. Pour une inspection complète, le [test de pixels morts en six couleurs](tool:dead-pixel-test) enchaîne noir, blanc, rouge, vert, bleu et gris, et le [test de burn-in OLED](tool:oled-burn-in-test) utilise des niveaux de gris où la rémanence est la plus facile à repérer.

## Utiliser un écran blanc comme source de lumière

- **Table lumineuse pour décalquer :** une tablette ou un ordinateur portable en blanc total derrière un papier fin permet de décalquer un dessin ou un lettrage. Une pochette transparente évite les traces de crayon sur la vitre.
- **Contrôle de films et de diapositives :** tenez un négatif ou une diapositive contre l’écran lumineux pour repérer poussières et rayures avant de le numériser.
- **Lumière d’appoint en visio :** un moniteur ou une tablette inutilisés en blanc total, placés légèrement au-dessus de votre visage, adoucissent les ombres. Si le blanc pur vous semble trop dur, choisissez un blanc cassé chaud comme `#FFF1DC` dans l’[écran de couleur personnalisée](tool:custom-color-screen).
- **Photos de produits :** un écran blanc derrière un petit objet en verre ou en plastique donne un fond net et uniformément éclairé.

## Remarques pour les écrans OLED

Le blanc intégral à luminosité maximale est ce qu’une dalle OLED fait de plus exigeant, c’est pourquoi les téléphones assombrissent automatiquement les grandes zones blanches pour protéger l’écran. Un test de quelques minutes est sans danger ; le burn-in provient d’une même image affichée pendant des centaines d’heures. Le bouton Télécharger enregistre un PNG blanc en 1920×1080, 1080×1920, 1080×1080 ou à la résolution de votre appareil si vous avez besoin d’un fond blanc pour un document ou une vidéo.
