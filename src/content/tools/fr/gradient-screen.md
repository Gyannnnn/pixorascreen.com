---
status: complete
sourceHash: 1d6c9a7e21d832dd
title: "Écran dégradé en ligne - Test d’effet de bandes et de calibrage en plein écran"
description: "Un dégradé fluide de deux couleurs en plein écran pour repérer l’effet de bandes sur votre moniteur, téléphone ou téléviseur, et créer des fonds dégradés à télécharger en PNG."
h1: "Écran dégradé."
breadcrumb: "Écran dégradé"
appDescription: "Des transitions de couleurs fluides à plusieurs points sur tout l’écran pour tester l’effet de bandes, calibrer l’affichage et créer une ambiance. Ouvrez-le en plein écran."
lede: "Un dégradé fluide de deux couleurs en plein écran pour repérer l’effet de bandes et la postérisation sur n’importe quel écran, et pour créer vos propres fonds et fonds d’écran dégradés."
chips:
  - "plein écran"
  - "luminosité"
  - "copier la couleur"
  - "télécharger le fond d’écran"
  - "mode ambiance"
shortcuts:
  - keys: F
    label: "Mode plein écran"
  - keys: R
    label: "Dégradé aléatoire"
  - keys: C
    label: "Copier la couleur sélectionnée"
  - keys: D
    label: "Télécharger l’image"
faqs:
  - q: "Qu’est-ce que l’effet de bandes ?"
    a: "On parle d’effet de bandes (banding) quand un mélange de couleurs censé être fluide montre des paliers ou des bandes visibles au lieu d’une transition continue. Cela arrive quand un écran, un fichier ou une vidéo ne peut pas représenter assez de nuances intermédiaires : les nuances voisines sont arrondies à la même valeur et forment des bandes."
  - q: "Un peu d’effet de bandes est-il normal sur tous les écrans ?"
    a: "Oui, dans les dégradés à faible contraste. Un signal 8 bits standard compte 256 niveaux par canal de couleur ; un mélange entre deux couleurs proches peut donc n’avoir que quelques dizaines de paliers distincts sur toute la largeur de l’écran. Des paliers réguliers et neutres sont attendus ; des bandes inégales, teintées ou très larges désignent l’écran ou ses réglages."
  - q: "Pourquoi mon moniteur montre-t-il plus de bandes que mon téléphone ?"
    a: "Les raisons les plus courantes sont une dalle 6 bits qui simule des couleurs 8 bits, une plage RGB limitée ou un mauvais profil colorimétrique sur l’ordinateur, le contraste dynamique ou les améliorations d’image du moniteur, et une gestion des couleurs trop lourde. Vérifiez d’abord le mode d’image du moniteur et les réglages de sortie du pilote graphique."
  - q: "Puis-je créer mon propre dégradé ?"
    a: "Oui. Cliquez sur l’une des deux pastilles pour choisir une nouvelle couleur, ou saisissez une valeur HEX, RGB ou HSL. Appuyez sur R pour obtenir un dégradé aléatoire de deux couleurs, puis enregistrez le résultat en PNG avec le bouton Télécharger."
  - q: "Le dégradé téléchargé est-il identique à celui de l’écran ?"
    a: "Le PNG utilise les deux mêmes couleurs, tracées d’un coin à l’autre au format choisi (paysage, portrait, carré ou résolution de votre appareil). Les visionneuses d’images et les réseaux sociaux peuvent le compresser, et la compression ajoute ses propres bandes : partagez le fichier d’origine quand c’est possible."
updated: '2026-10-31'
---

## Comment vérifier l’effet de bandes sur votre écran

Un dégradé est l’image la plus difficile à afficher proprement : chaque colonne de pixels exige une nuance légèrement différente, et le moindre raccourci dans la dalle ou dans la chaîne du signal transforme le mélange fluide en bandes visibles. Cette page trace un dégradé en diagonale entre deux couleurs, d’un bleu vif (`#007CF0`) jusqu’au cyan (`#00DFD8`).

1. Désactivez le mode nuit, les filtres de lumière bleue et tout mode d’image « éclatant » ou à contraste dynamique.
2. Appuyez sur <kbd>F</kbd> pour passer en plein écran et regardez l’écran à votre distance habituelle.
3. Cherchez des bandes nettes qui traversent le mélange, ainsi que des bandes teintées de rose ou de vert.
4. Essayez ensuite un dégradé exigeant : cliquez sur la première pastille et saisissez `000000`, puis sur la seconde et saisissez `333333`. C’est dans les mélanges sombres et peu contrastés que l’effet de bandes a le plus de mal à se cacher.

## Interpréter ce que vous voyez

Dans un signal 8 bits, chaque canal de couleur compte 256 niveaux. Un mélange de `#000000` à `#333333` n’a que 51 paliers entre ses extrémités : sur un écran de 1920 pixels de large, chaque palier mesure donc environ 30 à 40 pixels, et un regard attentif peut les voir sur n’importe quel écran. C’est une question de calcul, pas un défaut. Ce qui signale un problème :

- **Des paliers inégaux**, certaines bandes étant bien plus larges que d’autres.
- **Des paliers colorés**, quand un mélange gris montre des bandes roses, vertes ou violettes.
- **Des taches irrégulières** dans une zone par ailleurs fluide, signe d’une compression ou d’un traitement lourds.
- **Beaucoup plus de bandes qu’un autre écran** avec les mêmes couleurs.

## Causes courantes et solutions

| Cause | Que faire |
|---|---|
| Dalle 6 bits avec tramage (dithering) | Fréquent sur les portables et moniteurs d’entrée de gamme ; rien à corriger, mais cela explique le résultat |
| Plage RGB limitée (16–235) | Réglez la sortie du pilote graphique sur la plage complète pour un moniteur d’ordinateur |
| Améliorations d’image | Désactivez le contraste dynamique, les modes « éclatants » et l’accentuation des contours |
| Mauvais profil colorimétrique | Réinitialisez les réglages de couleur du moniteur et le profil d’affichage du système d’exploitation |
| Vidéos ou images compressées | Les bandes dans les flux vidéo et les JPEG viennent du fichier, pas de l’écran |

## Créer des fonds dégradés

Le même outil crée des fonds d’écran dégradés simples et nets. Cliquez sur une pastille pour choisir chaque couleur, appuyez sur <kbd>R</kbd> pour une paire aléatoire et téléchargez le résultat en paysage, en portrait, en carré ou à la résolution de votre écran. Les mélanges entre teintes voisines, comme du bleu au cyan ou de l’orange au rose, paraissent plus fluides et forment moins de bandes que les mélanges entre couleurs opposées, qui passent par un gris terne au milieu. Pour une seule couleur unie, utilisez l’[écran de couleur personnalisée](tool:custom-color-screen) ; pour comparer quatre couleurs côte à côte, l’[écran HEX](tool:hex-screen) les affiche en bandes.

L’effet de bandes n’est qu’une vérification d’affichage parmi d’autres. Les pixels défectueux se voient le mieux avec le [test de pixels morts en six couleurs](tool:dead-pixel-test), et la luminosité inégale sur l’[écran gris](tool:grey-screen) uni.
