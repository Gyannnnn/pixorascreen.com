---
status: complete
sourceHash: 2b3659a5d6923178
title: "Écran vert en ligne - Fond vert gratuit en plein écran"
description: "Écran vert gratuit en ligne pour l’incrustation vidéo, les fonds de streaming et les tests d’écran. En plein écran, luminosité réglable, sur tous les appareils."
h1: "Écran vert : fond vert d’incrustation gratuit en plein écran"
breadcrumb: "Écran vert"
appDescription: "Écran vert gratuit en ligne pour l’incrustation vidéo, les fonds de streaming et les tests d’écran. En plein écran, luminosité réglable, sur tous les appareils."
lede: "Un écran entièrement vert dans le vert d’incrustation pur (#00FF00) pour détourer l’arrière-plan en vidéo, en streaming et en visio, et pour vérifier rapidement les sous-pixels verts de votre écran."
chips:
  - "plein écran"
  - "luminosité"
  - "copier le HEX"
  - "copier le RGB"
  - "saisie HEX"
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
  - q: "Quelle nuance de vert convient le mieux à l’incrustation ?"
    a: "Sur un écran, le vert pur (#00FF00) se détoure proprement car il est éloigné des tons chair. Les murs peints et les fonds en tissu utilisent un vert d’incrustation plus foncé, autour de #00B140, parce que les éclairages de studio les éclaircissent. Si votre caméra montre l’écran comme un vert jaunâtre pâle, baissez le curseur de luminosité jusqu’à obtenir un vert franc et saturé à l’image."
  - q: "Puis-je utiliser mon moniteur comme fond vert dans Zoom ?"
    a: "Oui, si l’écran couvre toute la zone derrière votre tête dans le cadre. Ouvrez cette page en plein écran sur un grand moniteur ou un téléviseur derrière vous, puis dans Zoom allez dans Paramètres, Arrière-plan et effets, choisissez un arrière-plan virtuel et cochez « J’ai un écran vert ». Dans OBS, vous pouvez plutôt ajouter un filtre Incrustation chromatique à la source caméra."
  - q: "Pourquoi vois-je des lignes ou un scintillement en filmant l’écran vert ?"
    a: "L’obturateur de la caméra n’est pas synchronisé avec le rafraîchissement de l’écran. Réglez la vitesse d’obturation sur la fréquence du secteur de votre pays, 1/60 s dans les régions à 60 Hz ou 1/50 s dans les régions à 50 Hz, ou sur un multiple, et les bandes qui défilent devraient disparaître."
  - q: "Puis-je télécharger une image de fond vert ?"
    a: "Oui. Choisissez paysage (1920×1080), portrait (1080×1920), carré (1080×1080) ou la résolution de votre appareil, puis appuyez sur Télécharger ou sur la touche D. Vous obtenez un PNG vert uni, utile comme calque provisoire pour un modèle que vous détourerez plus tard."
  - q: "Faut-il choisir un fond vert ou un fond bleu ?"
    a: "Le vert est le choix habituel avec les caméras numériques, car leurs capteurs enregistrent le vert avec le plus de détails et le moins de bruit : il se détoure donc plus proprement avec moins de lumière. Choisissez le bleu si votre sujet porte du vert ou comporte des éléments verts, ou si les reflets verts sur la peau sont difficiles à maîtriser."
  - q: "Un écran vert permet-il de vérifier les pixels morts ?"
    a: "Oui, pour le canal vert. Sur un fond vert uni, un pixel dont le sous-pixel vert est défaillant apparaît comme un point noir. Le vert représente aussi l’essentiel de la luminosité que nous percevons, si bien qu’un rétroéclairage inégal s’y voit clairement."
updated: '2026-10-31'
---

## Comment utiliser cet écran vert pour l’incrustation

Cette page remplit votre écran de vert d’incrustation pur (`#00FF00`). Placez l’écran derrière ce que vous filmez, et n’importe quel logiciel de montage ou application de streaming doté d’un effet d’incrustation pourra remplacer le vert par un nouvel arrière-plan. Cela fonctionne le mieux avec des sujets plus petits que l’écran : des produits sur un bureau, des mains qui font une démonstration, un jouet ou une figurine, ou un plan buste devant un grand téléviseur. Pour des plans en pied, il vous faut encore un fond en tissu ou peint, car aucun moniteur n’est assez grand pour remplir le cadre.

1. Utilisez le plus grand écran dont vous disposez, ouvrez cette page et appuyez sur <kbd>F</kbd> pour passer en plein écran, sans barre de navigateur qui coupe le vert.
2. Placez le sujet à une petite distance devant l’écran, sans le toucher. La distance réduit la lumière verte qui rebondit sur le sujet.
3. Éclairez le sujet avec une lampe ou une fenêtre. L’écran vert doit servir d’arrière-plan, pas de source de lumière principale.
4. Verrouillez l’exposition et la balance des blancs de la caméra pour que le vert garde la même nuance d’une image à l’autre.
5. Si le vert paraît pâle ou jaunâtre à la caméra, baissez le curseur de luminosité de cette page jusqu’à obtenir un vert profond et uniforme.
6. Ajoutez un effet d’incrustation dans votre logiciel : le filtre Incrustation chromatique dans OBS, Ultra Key dans Premiere Pro, le 3D Keyer dans DaVinci Resolve ou l’incrustation chromatique dans CapCut.

## Résoudre les problèmes d’incrustation courants

### Contours verts autour des cheveux ou des objets

La lumière verte déborde sur le sujet. Éloignez-le davantage de l’écran, baissez la luminosité de l’écran et utilisez l’option de suppression des débordements (spill) de votre logiciel.

### Lignes qui défilent ou scintillement

L’obturateur de la caméra n’est pas synchronisé avec la fréquence de rafraîchissement de l’écran. Utilisez une vitesse d’obturation de 1/60 s dans les pays à 60 Hz ou de 1/50 s dans les pays à 50 Hz.

### Effet de moiré

De fines ondulations apparaissent lorsque la caméra parvient à distinguer la grille de pixels de l’écran. Ouvrez le diaphragme pour adoucir légèrement l’arrière-plan, ou reculez un peu la caméra.

### Détourage irrégulier

Les reflets des lampes et des fenêtres sur la vitre morcellent le vert. Tournez légèrement l’écran pour l’éloigner des sources de lumière vive, ou éteignez la lumière de la pièce qui s’y reflète.

## Écran vert pour le streaming et les appels vidéo

Un grand moniteur ou un téléviseur derrière votre chaise peut servir de fond vert pour une webcam qui cadre la tête et les épaules. Zoom propose l’option « J’ai un écran vert » dans ses réglages d’arrière-plan : elle exploite la couleur unie pour un détourage plus net que la suppression automatique de l’arrière-plan. Dans OBS Studio, faites un clic droit sur la source caméra, ouvrez Filtres et ajoutez Incrustation chromatique. Gardez l’écran derrière vous éclairé uniformément et sans reflets, et vérifiez qu’aucun de vos vêtements n’est d’un vert proche.

## Utiliser le vert pour tester un écran

Un fond vert uni n’allume que les sous-pixels verts. Un sous-pixel défaillant apparaît comme un point noir, et comme le vert porte environ 70 % de la luminosité perçue par l’œil, le rétroéclairage inégal et l’effet nuageux se voient plus facilement ici que sur le rouge ou le bleu. Comparez avec l’[écran rouge](tool:red-screen) et l’[écran bleu](tool:blue-screen) pour vérifier les trois canaux, ou lancez le [test de pixels morts en six couleurs](tool:dead-pixel-test) pour les passer en revue dans l’ordre. S’il vous faut une autre couleur d’incrustation, l’[écran de couleur personnalisée](tool:custom-color-screen) accepte n’importe quelle valeur HEX, RGB ou HSL.
