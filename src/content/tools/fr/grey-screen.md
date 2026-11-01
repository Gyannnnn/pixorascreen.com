---
status: complete
sourceHash: a373973fc4700de1
title: "Écran gris en ligne - Outil gratuit en plein écran"
description: "Un gris moyen neutre en plein écran (#808080) pour repérer un rétroéclairage inégal, l’effet d’écran sale, les dérives de teinte et le burn-in OLED, avec des tests proches du noir."
h1: "Écran gris."
breadcrumb: "Écran gris"
appDescription: "Une surface gris neutre en plein écran pour vérifier l’uniformité, l’équilibre de la luminosité et les tons moyens. Ouvrez-la en plein écran, réglez la luminosité et testez votre affichage."
lede: "Un gris moyen neutre en plein écran (#808080) pour repérer un rétroéclairage inégal, l’effet d’écran sale, les dérives de teinte et le burn-in OLED que les couleurs vives masquent."
chips:
  - "plein écran"
  - "luminosité"
  - "copier le HEX"
  - "copier le RGB"
  - "saisie RGB"
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
  - q: "Pourquoi #808080 s’appelle-t-il gris 50 % s’il ne paraît pas deux fois moins lumineux ?"
    a: "Le nombre est à mi-chemin entre le noir et le blanc, mais les écrans utilisent un codage gamma : #808080 n’émet en réalité qu’environ 22 % de la lumière du blanc intégral. Il paraît pourtant gris moyen à l’œil, car notre perception de la luminosité n’est pas linéaire non plus."
  - q: "Quel niveau de gris révèle le mieux l’effet d’écran sale ?"
    a: "En général, les gris plus foncés. Commencez par le gris moyen de cette page, puis saisissez 333333 (environ 20 %) et 1A1A1A (environ 10 %) dans le champ HEX. De légères bandes verticales ou horizontales qui restent en place quand vous bougez la tête, c’est l’effet d’écran sale."
  - q: "Un écran gris peut-il révéler le burn-in OLED ?"
    a: "Oui. Le burn-in se voit plus facilement sur un gris moyen uniforme, où le contour pâle d’une barre d’état, d’un logo ou d’un clavier apparaît comme une forme légèrement plus sombre ou teintée. Le test de burn-in OLED passe par plusieurs niveaux de gris et ajoute un motif en mouvement contre la rémanence."
  - q: "Qu’est-ce que le mura ?"
    a: "Mura est le mot japonais pour l’irrégularité ; il désigne les taches ou nuages d’une dalle hérités de la fabrication. Il se voit le mieux sur un gris uniforme et est propre à chaque dalle : il ne change donc pas avec les réglages."
  - q: "Puis-je utiliser un écran gris comme fond neutre pour travailler la couleur ?"
    a: "Oui. Les retoucheurs entourent les images de gris neutre, car un entourage coloré modifie notre jugement des couleurs. Un second écran gris, ou un fond d’écran gris téléchargé sur cette page, garde neutre la zone autour de votre travail."
updated: '2026-10-31'
---

## Pourquoi le gris moyen révèle ce que les couleurs vives masquent

Le blanc et le noir sont les extrêmes de ce qu’un écran peut afficher, et beaucoup de dalles y sont à leur avantage. Les défauts d’uniformité de luminosité et de couleur se voient le plus facilement au milieu de la plage, là où la dalle doit maintenir partout en même temps un niveau intermédiaire précis. Cette page remplit l’écran de `#808080`, le gris 50 % classique, parfaitement neutre, avec autant de rouge, de vert et de bleu.

1. Désactivez l’éclairage nocturne, Night Shift ou tout mode confort des yeux, pour que le gris reste neutre.
2. Appuyez sur <kbd>F</kbd> pour passer en plein écran et assombrissez un peu la pièce.
3. Parcourez tout l’écran depuis votre place habituelle, puis en reculant.
4. Recommencez avec un gris plus foncé, comme `333333`, saisi dans le champ HEX.

## Ce qu’il faut chercher

### Luminosité inégale et vignettage

Des coins ou des bords plus sombres, ou un côté plus lumineux que l’autre, sont fréquents sur les moniteurs LCD et les ordinateurs portables à éclairage latéral. Ils se voient bien plus nettement sur du gris que sur du blanc.

### L’effet d’écran sale

Sur les grands téléviseurs LCD et OLED, de légères bandes verticales ou horizontales qui restent fixes quand vous bougez la tête forment ce qu’on appelle l’effet d’écran sale (dirty screen effect). Il se remarque surtout dans les sports aux grandes surfaces unies, comme un terrain de football ou une patinoire, et sur les gris foncés.

### Dérives de teinte

Un gris vraiment neutre doit avoir la même couleur partout. Les zones qui tirent vers le rose, le vert ou le bleu sont des défauts d’uniformité des couleurs ; elles s’évaluent plus facilement sur du gris que sur du blanc, car l’œil est plus sensible aux teintes dans les niveaux moyens.

### Mura et effet nuageux

Les taches ou nuages hérités de la fabrication s’appellent le mura. Ils sont propres à chaque dalle : aucun réglage ne les supprime.

### Burn-in OLED

Les formes pâles d’une barre d’état, d’un logo ou d’un clavier virtuel apparaissent sur le gris sous forme de contours légèrement plus sombres ou teintés. Le [test de burn-in OLED](tool:oled-burn-in-test) passe par plusieurs niveaux de gris et comprend un motif en mouvement pour effacer la rémanence temporaire.

## Les gris proches du noir

Les écrans OLED peinent parfois avec les gris les plus sombres juste au-dessus du noir, où apparaissent des taches ou un léger scintillement. Saisissez tour à tour `0A0A0A`, `141414` et `1A1A1A` dans le champ HEX. Chacun doit apparaître comme un palier régulier, légèrement plus clair. L’[écran noir](tool:black-screen) vérifie le noir pur, et l’[écran dégradé](tool:gradient-screen) affiche une rampe douce où les effets de bandes, c’est-à-dire les paliers visibles entre les teintes, ressortent.

## Un gris neutre pour travailler la couleur

Les monteurs et retoucheurs entourent les images de gris neutre pour une bonne raison : un fond coloré modifie notre perception des couleurs voisines. Un second moniteur gris, ou un fond d’écran gris enregistré avec le bouton Télécharger, garde votre environnement neutre pendant que vous retouchez. Pour une vérification complète de la dalle en une seule passe, lancez le [test de pixels morts en six couleurs](tool:dead-pixel-test), qui inclut le gris en plus des couleurs primaires.
