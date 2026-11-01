---
status: complete
sourceHash: 86b94a5e7f473b83
title: "Écran rouge - Test gratuit de pixels morts en plein écran | PixoraScreen"
description: "Test d’écran rouge gratuit pour détecter les pixels morts et les défauts du sous-pixel rouge. Sert aussi de lumière rouge pour préserver la vision nocturne et le confort des yeux. En plein écran, luminosité réglable."
h1: "Écran rouge : test de pixels morts et écran de lumière rouge"
breadcrumb: "Écran rouge"
appDescription: "Test d’écran rouge gratuit pour détecter les pixels morts et les défauts du sous-pixel rouge. Sert aussi de lumière rouge pour préserver la vision nocturne et le confort des yeux. En plein écran, luminosité réglable."
lede: "Un rouge uni en plein écran (#FF0000) pour vérifier les sous-pixels rouges de votre écran, et une lumière rouge tamisée pour observer les étoiles, lire la nuit ou créer des effets d’éclairage vidéo."
chips:
  - "plein écran"
  - "luminosité"
  - "copier le HEX"
  - "copier le RGB"
  - "saisie HSL"
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
  - q: "Que montre un test d’écran rouge qu’un écran blanc ne montre pas ?"
    a: "Le rouge n’allume que le sous-pixel rouge de chaque pixel. Un sous-pixel rouge mort ou faible peut se cacher dans un pixel blanc, car le vert et le bleu voisins restent allumés, mais sur un fond rouge uni il apparaît comme un point sombre."
  - q: "Que signifie un point jaune ou rose sur l’écran rouge ?"
    a: "Qu’un autre sous-pixel est bloqué allumé. Le rouge plus un sous-pixel vert bloqué donne du jaune, et le rouge plus un sous-pixel bleu bloqué donne du magenta ou du rose. Un point noir signifie que le sous-pixel rouge lui-même est défaillant."
  - q: "Un écran rouge aide-t-il à préserver la vision nocturne ?"
    a: "Seulement s’il est faible. Les bâtonnets, les cellules que vos yeux utilisent dans l’obscurité, sont les moins sensibles au rouge profond, c’est pourquoi les astronomes lisent leurs cartes à la lumière rouge. Baissez la luminosité de votre appareil au minimum et le curseur de cette page à 20 %, ou choisissez un rouge plus sombre comme #400000 dans l’écran de couleur personnalisée."
  - q: "Un écran rouge est-il préférable à un écran blanc le soir ?"
    a: "La lumière rouge ne contient pas les longueurs d’onde bleues qui freinent le plus la mélatonine : un écran rouge tamisé perturbe donc moins vos soirées qu’un écran blanc lumineux. Un écran lumineux près du visage peut toutefois vous tenir éveillé ; gardez-le faible et à distance."
  - q: "Pourquoi tout mon écran paraît-il rouge ou rose ?"
    a: "Vérifiez d’abord les réglages. L’éclairage nocturne ou Night Shift au maximum, un filtre ou une teinte de couleur dans les options d’accessibilité ou un préréglage de couleur du moniteur peuvent teinter l’écran. Si la teinte clignote ou change quand vous bougez le câble, un câble vidéo abîmé ou un connecteur mal enfoncé en est probablement la cause."
  - q: "Comment rendre l’écran de mon iPhone rouge en permanence ?"
    a: "Ouvrez Réglages, Accessibilité, Affichage et taille du texte, Filtres de couleur. Activez Filtres de couleur, choisissez Teinte et poussez Intensité et Nuance au maximum. Vous pouvez l’ajouter au Raccourci accessibilité pour qu’un triple clic sur le bouton latéral active et désactive la teinte rouge."
updated: '2026-10-31'
---

## Comment faire un test d’écran rouge

Cette page remplit l’écran de rouge pur (`#FF0000`). Chaque pixel d’un écran LCD ou OLED se compose d’un sous-pixel rouge, d’un vert et d’un bleu, et le rouge pur n’allume que les rouges. C’est donc la façon la plus nette de vérifier un canal de couleur isolément, ce que ni un [écran blanc](tool:white-screen) ni un [écran noir](tool:black-screen) ne permettent.

1. Nettoyez l’écran pour ne pas confondre la poussière avec un défaut.
2. Augmentez la luminosité de votre appareil, ouvrez cette page et appuyez sur <kbd>F</kbd> pour passer en plein écran.
3. Parcourez lentement l’écran, coin par coin et de près. Sur les téléphones et les portables haute résolution, l’appareil photo d’un téléphone zoomé sur la vitre sert de loupe.
4. Notez la position de tout point qui n’a pas le même rouge que son entourage, puis vérifiez le même endroit sur l’[écran vert](tool:green-screen) et l’[écran bleu](tool:blue-screen).

## Ce que révèle un écran rouge

### Sous-pixels rouges morts ou faibles

Un point noir sur le rouge signifie que le sous-pixel rouge à cet endroit ne s’allume pas. Un point d’un rouge nettement plus sombre signifie que le sous-pixel est faible. Les deux sont difficiles à voir sur un contenu normal, car les deux autres sous-pixels du pixel lui donnent à peu près le bon aspect.

### Sous-pixels verts ou bleus bloqués

Toute couleur supplémentaire mêlée au rouge désigne un autre sous-pixel bloqué. Un point jaune signifie qu’un sous-pixel vert est bloqué allumé ; un point magenta ou rose, qu’il s’agit d’un bleu. Le [test de pixels morts en six couleurs](tool:dead-pixel-test) confirme le diagnostic en passant par tous les canaux.

### Couleur inégale sur la dalle

Le rouge est un test exigeant d’uniformité sur les écrans LCD, car une zone qui tire vers l’orange ou le rose se repère facilement. Sur un OLED, les formes pâles d’éléments fixes comme la barre des tâches peuvent aussi transparaître à travers une couleur unie, même si les aplats gris moyens du [test de burn-in OLED](tool:oled-burn-in-test) isolent le burn-in plus nettement.

## Lumière rouge pour la vision nocturne

Après environ 20 à 30 minutes dans le noir, vos yeux passent aux bâtonnets, très sensibles à la lumière faible mais presque insensibles au rouge profond. Une lumière rouge faible permet de lire une carte du ciel, les commandes d’un appareil photo ou une page sans perdre cette adaptation, c’est pourquoi astronomes et campeurs utilisent des lampes rouges. Pour utiliser cette page ainsi :

- Baissez la luminosité de votre appareil au minimum.
- Réglez le curseur de luminosité de cette page sur 20 %.
- Pour une lumière encore plus douce, ouvrez l’[écran de couleur personnalisée](tool:custom-color-screen) et saisissez un rouge sombre comme `#400000`.

Un écran rouge lumineux éblouit quand même. Le bénéfice vient d’une lumière rouge à faible intensité.

## Autres usages

- **Ambiance et éclairage de fête :** un téléviseur ou un moniteur en rouge plein écran baigne une pièce ou un bureau de couleur.
- **Effets vidéo :** un écran rouge placé juste hors champ donne au sujet un contour de lumière rouge pour une ambiance d’alarme, d’horreur ou de boîte de nuit.
- **Réglage d’un projecteur :** une couleur primaire unie montre si chaque couleur de l’image projetée atteint les bords de façon homogène.
- **Images :** appuyez sur <kbd>D</kbd> pour télécharger un PNG rouge en 1920×1080, 1080×1920, 1080×1080 ou à la résolution de votre écran.
