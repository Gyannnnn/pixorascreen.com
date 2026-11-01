---
status: complete
sourceHash: 3d004954ba04ab2a
title: "Test d’écran HEX en ligne - Aperçu des codes couleur et palettes en plein écran"
description: "Prévisualisez des codes couleur HEX et des palettes de 4 couleurs en plein écran. Comparez vos couleurs de marque côte à côte, vérifiez les teintes de mode sombre comme #121212 et téléchargez la palette."
h1: "Écran HEX."
breadcrumb: "Écran HEX"
appDescription: "Prévisualisez des codes couleur HEX CSS exacts en plein écran. Testez vos couleurs de marque, comparez des palettes de 4 couleurs, examinez les teintes de mode sombre (#121212, #000000) et téléchargez des fonds d’écran en 4K."
lede: "Prévisualisez des codes couleur HEX exacts en plein écran, comparez jusqu’à quatre couleurs côte à côte, vérifiez les teintes de mode sombre et téléchargez la palette en image."
chips:
  - "plein écran"
  - "luminosité"
  - "saisie HEX et RGB"
  - "copier le HEX"
  - "préréglages HEX"
shortcuts:
  - keys: F
    label: "Mode plein écran"
  - keys: R
    label: "Palette aléatoire de 4 couleurs"
  - keys: C
    label: "Copier le code HEX sélectionné"
  - keys: D
    label: "Télécharger l’image de la palette"
faqs:
  - q: "Comment changer l’une des quatre couleurs ?"
    a: "Cliquez sur la pastille à modifier : elle devient la couleur sélectionnée. Choisissez ensuite une nouvelle couleur dans le sélecteur ou saisissez une valeur HEX, RGB ou HSL. Seule la bande sélectionnée change, et C copie son code HEX."
  - q: "Quels formats HEX l’écran accepte-t-il ?"
    a: "Les codes à six chiffres, avec ou sans le # initial, comme #7C3AED ou 7c3aed. La forme abrégée à trois chiffres comme #FFF et les codes à huit chiffres avec transparence ne sont pas pris en charge ; écrivez #FFF sous la forme #FFFFFF."
  - q: "Pourquoi les thèmes sombres utilisent-ils #121212 plutôt que le noir pur ?"
    a: "Le noir pur rend l’élévation et les ombres invisibles, et peut paraître dur à côté d’un texte blanc. Sur les écrans OLED, les pixels d’un noir pur sont éteints, et les rallumer pendant le défilement peut laisser une brève traînée. Un gris très foncé comme #121212 évite ces deux problèmes ; c’est pourquoi Material Design le recommande."
  - q: "Ma couleur de marque sera-t-elle identique sur tous les écrans ?"
    a: "Pas exactement. Un code HEX décrit une couleur dans la norme sRGB, mais les écrans diffèrent par leur luminosité, leur point blanc et leur gamut, et les écrans à large gamut peuvent rendre les couleurs plus saturées. Vérifier la palette en plein écran sur plusieurs appareils vous montre l’éventail de ce que verra votre public."
  - q: "Puis-je télécharger ma palette ?"
    a: "Oui. Appuyez sur D ou sur le bouton Télécharger pour enregistrer les quatre couleurs en bandes verticales dans un PNG, en paysage, en portrait, en carré ou à la résolution de votre appareil. Le nom du fichier reprend les quatre codes HEX."
updated: '2026-10-31'
---

## Prévisualiser les couleurs en grand

Une couleur ne paraît pas la même dans une petite pastille et sur un écran entier. Une teinte qui semble calme dans un sélecteur de couleur peut devenir criarde en fond plein écran, et deux couleurs bien distinctes sous forme de points peuvent se confondre en grandes surfaces. L’écran HEX affiche jusqu’à quatre couleurs en hautes bandes sur toute la largeur de l’écran, pour que vous puissiez les juger à la taille à laquelle elles seront vraiment utilisées.

Il s’ouvre sur une palette d’exemple : quasi-noir `#171717`, violet `#7C3AED`, rose vif `#FF0080` et ambre `#F9CB28`.

1. Cliquez sur la pastille d’une bande pour la sélectionner, puis saisissez un code HEX ou choisissez une couleur.
2. Recommencez pour les autres bandes, ou appuyez sur <kbd>R</kbd> pour partir d’une palette aléatoire.
3. Appuyez sur <kbd>F</kbd> pour passer en plein écran et regardez la palette à une distance normale.
4. Appuyez sur <kbd>C</kbd> pour copier le code de la couleur sélectionnée, et sur <kbd>D</kbd> pour enregistrer la palette en image.

## Vérifier une palette de marque ou d’interface

- **Comparez sur plusieurs appareils.** Ouvrez la même palette sur un portable, un téléphone et un téléviseur. Des couleurs qui s’accordent sur un écran peuvent jurer ou paraître délavées sur un autre.
- **Regardez les couleurs voisines.** Deux couleurs saturées côte à côte, comme du rouge à côté du bleu, peuvent sembler vibrer à leur frontière. Les grandes bandes permettent de le remarquer facilement avant que cela ne se retrouve dans un design.
- **Vérifiez les tons sombres.** Des quasi-noirs bien distincts sur un bon moniteur peuvent se confondre sur un écran moins cher. Si deux bandes sombres paraissent identiques, augmentez leur contraste.
- **Pensez au contraste du texte.** Les bandes montrent comment les couleurs s’accordent en tant que surfaces, mais un texte lisible exige aussi un contraste suffisant avec le fond. Vérifiez les paires texte-fond avec un outil de contraste WCAG.

## Teintes de mode sombre

La rangée de préréglages comprend les deux fonds de mode sombre les plus courants. **Noir OLED** (`#000000`) éteint complètement les pixels OLED. **Mode sombre** (`#121212`) est le gris très foncé recommandé par Material Design : il garde visibles les ombres et les surfaces surélevées, paraît plus doux à côté d’un texte blanc et évite la légère traînée que montrent certains écrans OLED quand des pixels d’un noir pur se rallument pendant le défilement. Affichez-les côte à côte pour voir lequel convient à votre design. Les préréglages comprennent aussi un bleu vif (`#0070F3`) et le blanc, et le bouton « Palette divisée en 4 couleurs » revient à la palette de départ.

## Comment fonctionnent les codes HEX

Un code HEX comme `#7C3AED` se compose de trois paires de chiffres pour le rouge, le vert et le bleu, chacune de `00` (éteint) à `FF` (maximum). Ainsi, `#FF0000` est un rouge pur, `#000000` le noir et `#FFFFFF` le blanc. Chaque paire est un nombre de 0 à 255 écrit en base 16 ; c’est pourquoi la même couleur peut aussi s’écrire en RGB `124, 58, 237`.

Pour remplir l’écran d’une seule couleur plutôt que de quatre, utilisez l’[écran de couleur personnalisée](tool:custom-color-screen). Pour un mélange fluide entre deux couleurs, l’[écran dégradé](tool:gradient-screen) montre la transition et l’éventuel effet de bandes, et l’[écran RGB](tool:rgb-screen) compare les primaires pures de l’affichage.
