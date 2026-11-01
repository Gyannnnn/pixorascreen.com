---
status: complete
sourceHash: 5dabf925f0493c70
title: "Test d’écran RGB en ligne - Sous-pixels et calibrage des couleurs en plein écran"
description: "Un test d’écran RGB qui affiche le rouge, le vert et le bleu côte à côte ou un par un en plein écran, pour comparer les couleurs primaires de votre écran et vérifier chaque canal de sous-pixels."
h1: "Écran RGB."
breadcrumb: "Écran RGB"
appDescription: "Faites un test d’écran RGB en ligne en plein écran. Inspectez les sous-pixels rouges, verts et bleus, cherchez les pixels bloqués ou morts, vérifiez les canaux de couleur du moniteur et calibrez vos écrans."
lede: "Le rouge, le vert et le bleu côte à côte ou un par un en plein écran, pour comparer les trois couleurs primaires de votre écran et vérifier chaque canal de sous-pixels."
chips:
  - "plein écran"
  - "luminosité"
  - "canaux de sous-pixels RGB"
  - "copier RGB/HEX"
  - "cycle de couleurs automatique"
shortcuts:
  - keys: F
    label: "Mode plein écran"
  - keys: R
    label: "Rouge pur"
  - keys: G
    label: "Vert pur"
  - keys: B
    label: "Bleu pur"
  - keys: W / K
    label: "Blanc / noir"
  - keys: S
    label: "Rouge, vert et bleu côte à côte"
  - keys: D
    label: "Télécharger l’image"
faqs:
  - q: "Que montre la vue partagée RGB ?"
    a: "Elle affiche les trois couleurs primaires de l’écran côte à côte, à pleine intensité. Vous pouvez comparer la saturation et la luminosité de chacune, repérer une primaire qui tire vers une autre couleur et voir d’un coup d’œil si un canal manque complètement, car sa bande paraîtrait noire."
  - q: "Un test RGB peut-il trouver des pixels morts ou bloqués ?"
    a: "Oui, si vous remplissez l’écran d’une seule couleur à la fois. Appuyez sur R, G ou B pour n’allumer que ce sous-pixel sur toute la dalle ; un sous-pixel mort apparaît comme un point noir. Le test de pixels morts en six couleurs passe par les mêmes couleurs, plus le noir, le blanc et le gris."
  - q: "Pourquoi le rouge paraît-il orangé ou le vert jaunâtre ?"
    a: "Chaque dalle a ses propres primaires. Les écrans à large gamut affichent souvent des primaires très saturées, presque fluo, quand le contenu n’est pas géré en couleur, tandis que certains écrans d’entrée de gamme ont des primaires qui tirent vers les couleurs voisines. Un mode d’image sRGB les rapproche généralement de la norme."
  - q: "Comment voir les sous-pixels eux-mêmes ?"
    a: "Ouvrez un écran blanc ou RGB et observez la vitre à la loupe, ou avec le mode macro ou le zoom maximal de l’appareil photo de votre téléphone. Vous verrez le motif des éléments rouges, verts et bleus, qui diffère entre les bandes des écrans LCD et les agencements des téléphones et téléviseurs OLED."
  - q: "Est-ce un test d’éclairage RGB pour claviers ou rubans LED ?"
    a: "Non. Cette page teste l’écran sur lequel elle est ouverte. L’éclairage RGB des claviers et des rubans LED se pilote avec son propre logiciel, même si un écran entièrement rouge, vert ou bleu peut aider à accorder leurs couleurs à l’œil."
updated: '2026-10-31'
---

## Comment utiliser l’écran RGB

La page s’ouvre sur les trois couleurs primaires côte à côte : rouge pur (`#FF0000`), vert pur (`#00FF00`) et bleu pur (`#0000FF`). Toutes les couleurs que votre écran affiche sont mélangées à partir de ces trois-là ; les regarder directement en dit donc long sur la dalle.

- Appuyez sur <kbd>F</kbd> pour passer en plein écran.
- Appuyez sur <kbd>R</kbd>, <kbd>G</kbd> ou <kbd>B</kbd> pour remplir tout l’écran d’une primaire, sur <kbd>W</kbd> pour le blanc et sur <kbd>K</kbd> pour le noir.
- Appuyez sur <kbd>S</kbd> pour revenir à la vue côte à côte.
- Les boutons sous l’aperçu font la même chose sur écran tactile, et chaque bande peut prendre n’importe quelle couleur grâce à sa pastille.

## Comparer les trois primaires

Dans la vue côte à côte, regardez chaque bande tour à tour :

- **Une bande est-elle noire ou très sombre ?** Un canal entier manque, le plus souvent à cause d’un câble vidéo mal branché ou abîmé.
- **Le rouge tire-t-il vers l’orange, ou le vert vers le jaune ?** Les primaires de la dalle s’écartent de la norme. Une certaine variation est normale ; un mode d’image sRGB les rapproche généralement.
- **Les couleurs paraissent-elles fluo, presque lumineuses ?** C’est typique des moniteurs à large gamut qui affichent du contenu ordinaire sans gestion des couleurs. Les photos et les sites web paraîtront sursaturés de la même façon.
- **Une bande est-elle beaucoup moins lumineuse que les autres ?** Le vert paraît toujours le plus lumineux et le bleu le plus sombre, en raison du fonctionnement de l’œil. Un bleu presque invisible, ou un rouge qui paraît brun, mérite qu’on s’y intéresse.

## Vérifier chaque canal de sous-pixels

Remplir l’écran d’une primaire n’allume que ce type de sous-pixel sur toute la dalle. Un point noir sur le rouge est un sous-pixel rouge mort ; un point coloré signifie qu’un autre sous-pixel est bloqué allumé. Pour une version guidée avec les six couleurs de test et des indications à l’écran, utilisez le [test de pixels morts en six couleurs](tool:dead-pixel-test), ou ouvrez l’[écran rouge](tool:red-screen), l’[écran vert](tool:green-screen) ou l’[écran bleu](tool:blue-screen) pour des conseils propres à chaque couleur.

## Voir l’agencement des sous-pixels

Sous un grossissement, un écran est une grille de minuscules éléments rouges, verts et bleus, dont le motif varie selon la technologie :

| Type d’écran | Agencement typique des sous-pixels |
|---|---|
| La plupart des moniteurs et portables LCD | Bandes verticales dans l’ordre rouge, vert, bleu |
| De nombreux téléphones OLED | Agencements en losange ou « PenTile », avec plus d’éléments verts que de rouges ou de bleus |
| Téléviseurs et moniteurs WOLED | Rouge, vert, bleu et un sous-pixel blanc supplémentaire |
| Téléviseurs et moniteurs QD-OLED | Rouge, vert et bleu disposés en triangle |

Pour le voir sur votre propre écran, affichez le blanc ou la vue partagée RGB et regardez de près à la loupe, ou avec le mode macro de l’appareil photo de votre téléphone. L’agencement explique pourquoi les petits textes peuvent présenter des franges colorées sur certains moniteurs OLED : le lissage du texte de la plupart des systèmes d’exploitation suppose la bande RGB classique.

## Télécharger la mire

Appuyez sur <kbd>D</kbd> pour enregistrer la vue actuelle en PNG, avec les trois bandes ou une seule couleur, en paysage, en portrait, en carré ou à la résolution de votre appareil. C’est une image de test rapide pour vérifier un téléviseur ou un projecteur depuis une clé USB.
