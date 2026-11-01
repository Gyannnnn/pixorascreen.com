---
status: complete
sourceHash: e0c26a47a4b8ec5e
title: "Écran noir - Test gratuit en plein écran | PixoraScreen"
description: "Lancez un test d’écran noir gratuit pour détecter les pixels morts, les pixels bloqués et les fuites de rétroéclairage. En plein écran, adapté à une pièce sombre, sur tous les appareils."
h1: "Écran noir : test gratuit en plein écran pour détecter les pixels défectueux"
breadcrumb: "Écran noir"
appDescription: "Lancez un test d’écran noir gratuit pour détecter les pixels morts, les pixels bloqués et les fuites de rétroéclairage. En plein écran, adapté à une pièce sombre, sur tous les appareils."
lede: "Une surface noire profonde en plein écran pour les tests OLED, la détection de pixels morts, la réduction des reflets et l’usage dans une pièce sombre."
chips:
  - "plein écran"
  - "luminosité"
  - "copier le HEX"
  - "copier le RGB"
  - "couleurs favorites"
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
  - q: "Un test d’écran noir peut-il détecter les pixels morts ?"
    a: "Pas de manière fiable. Un pixel mort ne s’allume jamais : sur un fond noir, il ressemble donc exactement à tous les autres. L’écran noir révèle le défaut inverse, les pixels qui restent allumés. Pour repérer les pixels morts, passez à un écran blanc, où un point éteint apparaît comme une tache sombre."
  - q: "Un peu de fuite de rétroéclairage, est-ce normal ?"
    a: "Un peu de lumière sur les bords est courant sur les moniteurs LCD et les ordinateurs portables, surtout avec les dalles IPS à éclairage latéral, et ne se voit généralement que dans une pièce sombre à pleine luminosité. Si vous voyez des taches claires en usage normal, par exemple dans une scène de film sombre à votre luminosité habituelle, cela vaut la peine de faire jouer la garantie ou de demander un retour."
  - q: "Quelle différence entre l’IPS glow et la fuite de rétroéclairage ?"
    a: "L’IPS glow est un voile argenté qui change quand vous bougez la tête ou regardez la dalle de biais. La fuite de rétroéclairage reste au même endroit, généralement sous forme de tache jaunâtre ou bleutée dans un coin ou sur un bord, quelle que soit votre position."
  - q: "Un écran noir économise-t-il la batterie ?"
    a: "Sur les écrans OLED et AMOLED, oui. Les pixels noirs sont éteints et ne consomment presque rien. Sur les écrans LCD, le rétroéclairage reste allumé derrière l’image noire : l’économie est faible, et mettre l’écran en veille économise bien davantage."
  - q: "Pourquoi le noir paraît-il gris foncé sur mon moniteur ?"
    a: "La plupart des dalles LCD laissent passer un peu de rétroéclairage, si bien que le noir paraît gris foncé dans une pièce peu éclairée ; les dalles VA tiennent mieux le noir que les IPS, et l’OLED affiche un vrai noir. Si le noir semble nettement délavé, vérifiez que votre carte graphique ou votre téléviseur n’envoie pas une plage RGB limitée (16-235) à un moniteur en plage complète."
  - q: "Comment quitter l’écran noir en plein écran ?"
    a: "Appuyez sur Échap sur le clavier, ou bougez la souris et cliquez sur le bouton de sortie. Sur téléphone et tablette, utilisez le geste de retour ou balayez vers le bas depuis le bord supérieur."
updated: '2026-10-31'
---

## Comment faire un test d’écran noir

Un test d’écran noir remplit tout votre écran de noir pur (`#000000`). Le noir est l’état le plus sombre qu’un écran en bon état puisse produire : tout ce qui émet encore de la lumière ressort donc immédiatement, qu’il s’agisse d’un pixel resté allumé, d’une lumière qui s’échappe par les bords ou d’une zone nuageuse qui paraît grise au lieu de noire. Ces défauts se cachent derrière les fenêtres et les fonds d’écran habituels, c’est pourquoi un moniteur, un ordinateur portable ou un téléphone neuf peut sembler parfait jusqu’au jour où vous regardez un film sombre dans une pièce sombre.

1. Réglez la luminosité de l’écran au maximum dans les paramètres du système ou du moniteur. Le curseur de cette page peut seulement assombrir l’image ou ajouter un renfort logiciel ; il ne peut pas augmenter le rétroéclairage.
2. Assombrissez la pièce et nettoyez l’écran, pour que les reflets et la poussière ne ressemblent pas à des défauts.
3. Appuyez sur <kbd>F</kbd> ou sur le bouton Plein écran pour qu’aucune barre du navigateur ni barre des tâches ne masque les bords. Sur iPhone, Safari ne permet pas aux pages web de passer entièrement en plein écran ; tournez le téléphone à l’horizontale et laissez la barre d’adresse se replier.
4. Laissez vos yeux s’adapter pendant environ 30 secondes, puis parcourez l’écran par zones : les quatre coins, les bords, puis le centre.
5. Regardez à nouveau de face, puis sous un angle bas. Certaines lueurs n’apparaissent que hors de l’axe.
6. Appuyez sur <kbd>Échap</kbd> pour quitter le plein écran.

## Ce que révèle un écran noir

### Pixels bloqués et pixels chauds

Un sous-pixel bloqué allumé apparaît comme un point rouge, vert ou bleu lumineux ; un pixel entièrement allumé apparaît blanc. Ce sont les défauts que le noir détecte le mieux, car même un seul sous-pixel allumé est impossible à manquer sur un fond sombre.

### Fuite de rétroéclairage

Les dalles LCD sont éclairées par l’arrière ou par les bords. Lorsque la dalle est pressée de manière inégale contre son cadre, la lumière s’échappe et forme des taches claires, généralement dans les coins ou le long du bord inférieur.

### IPS glow

Les dalles IPS affichent une lueur douce dans les coins lorsqu’on les regarde de biais. Contrairement à la fuite, elle bouge et change quand vous bougez la tête, et elle s’atténue quand vous vous éloignez. Un peu de glow est une propriété de la technologie, pas un défaut.

### Nuages et halos

Les zones plus claires et irrégulières au centre de l’écran s’appellent le clouding (effet nuageux). Sur les écrans à gradation locale, un pointeur de souris lumineux sur fond noir peut aussi créer un halo autour de lui, appelé blooming. Les deux s’évaluent facilement sur un fond entièrement noir.

## Ce qu’il ne peut pas montrer

Un écran noir ne révèle pas les pixels morts, car un pixel éteint est invisible sur du noir ; utilisez pour cela l’[écran blanc](tool:white-screen). Il ne montre pas non plus le burn-in, qui nécessite un aplat gris moyen comme celui du [test de burn-in OLED](tool:oled-burn-in-test). Si un canal de couleur semble anormal, l’[écran rouge](tool:red-screen) et les autres écrans unicolores isolent chaque sous-pixel, et le [test de pixels morts en six couleurs](tool:dead-pixel-test) enchaîne toute la séquence pour vous.

## Défaut ou comportement normal ?

La plupart des fabricants évaluent les défauts de pixels selon les classes de la norme ISO 9241-307, qui tolèrent généralement quelques points sombres mais moins de points lumineux. Les politiques varient selon les marques : vérifiez les conditions de votre garantie et testez un écran neuf tant que vous pouvez encore le retourner. Si vous photographiez un défaut pour une réclamation, baissez l’exposition de l’appareil photo : les appareils photo des téléphones éclaircissent les scènes sombres et font paraître une fuite normale bien pire qu’elle ne l’est.

## Autres usages d’un écran noir

- **Veille OLED :** sur un téléviseur ou un téléphone OLED, un écran noir éteint les pixels ; c’est donc un état « éteint » paisible qui n’use pas la dalle.
- **Deuxième moniteur pendant un film :** éteignez visuellement un écran secondaire sans le débrancher, pour que sa lumière ne vous distraie pas.
- **Réglage d’un projecteur :** comparez la profondeur réelle du noir avant et après avoir fermé les rideaux.
- **Montage vidéo :** le bouton Télécharger enregistre un PNG noir en 1920×1080, en 1080×1920 pour la vidéo verticale, en 1080×1080 carré ou à la résolution exacte de votre appareil. Appuyez sur <kbd>D</kbd> comme raccourci.
