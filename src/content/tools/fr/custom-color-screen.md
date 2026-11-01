---
status: complete
sourceHash: c657e8d8e22a12fe
title: "Écran de couleur personnalisée - Sélecteur de couleur gratuit en plein écran | PixoraScreen"
description: "Choisissez n’importe quelle couleur et remplissez votre écran en plein écran. Sélecteur de couleur gratuit avec saisie HEX, RGB et HSL, favoris enregistrés et tests d’affichage utiles pour la calibration."
h1: "Écran de couleur personnalisée : sélecteur de couleur et test d’affichage en plein écran"
breadcrumb: "Écran de couleur personnalisée"
appDescription: "Choisissez n’importe quelle couleur et remplissez votre écran en plein écran. Sélecteur de couleur gratuit avec saisie HEX, RGB et HSL, favoris enregistrés et tests d’affichage utiles pour la calibration."
lede: "Remplissez votre écran de n’importe quelle couleur. Saisissez une valeur HEX, RGB ou HSL, utilisez le sélecteur de couleur ou tirez une teinte au hasard, puis enregistrez vos préférées en favoris."
chips:
  - "plein écran"
  - "luminosité"
  - "saisie HEX"
  - "saisie RGB"
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
  - q: "Quels formats de couleur puis-je saisir ?"
    a: "Le HEX sur six chiffres, avec ou sans # (par exemple #0070F3) ; le RGB sous forme de trois nombres de 0 à 255 séparés par des virgules (0, 112, 243) ; et le HSL sous forme de teinte, saturation et luminosité (hsl(212, 100%, 48%)). Modifiez l’un des champs et les deux autres se mettent à jour."
  - q: "Mes couleurs favorites sont-elles enregistrées ?"
    a: "Oui, dans ce navigateur et sur cet appareil. Les favoris sont stockés dans le stockage local du navigateur : ils sont toujours là à la prochaine ouverture de la page, mais ils ne se synchronisent pas avec vos autres appareils, et effacer les données du site dans votre navigateur les supprime."
  - q: "Comment vérifier si mon moniteur écrase les noirs ?"
    a: "Affichez #0A0A0A en plein écran, puis #141414, puis #000000. Sur un écran bien réglé, chaque palier paraît légèrement différent. Si les deux premiers semblent identiques au noir pur, l’écran écrase les détails dans les ombres ; ajustez la luminosité, le niveau de noir ou le gamma, puis recommencez."
  - q: "Puis-je harmoniser les couleurs de deux moniteurs avec cet outil ?"
    a: "Vous pouvez les comparer. Ouvrez la même valeur HEX sur les deux écrans côte à côte : les différences de teinte et de luminosité sautent aux yeux, ce qui aide à régler les couleurs de chaque moniteur. Une correspondance exacte nécessite une sonde de calibration, car un écran ne peut pas mesurer sa propre lumière."
  - q: "Quelle couleur donne une lumière douce pour les appels vidéo ?"
    a: "Un blanc cassé chaud comme #FFF1DC est plus flatteur pour la peau que le blanc pur. Placez l’écran légèrement au-dessus des yeux, derrière ou à côté de la caméra, et baissez le curseur de luminosité jusqu’à ce que la lumière paraisse naturelle à l’image."
  - q: "Puis-je enregistrer la couleur sous forme d’image ?"
    a: "Oui. Choisissez paysage (1920×1080), portrait (1080×1920), carré (1080×1080) ou la résolution de votre appareil, puis appuyez sur Télécharger ou sur la touche D. Le nom du fichier PNG contient le code de la couleur."
updated: '2026-10-31'
---

## Comment choisir une couleur d’écran personnalisée

L’écran de couleur personnalisée démarre sur un bleu vif (`#0070F3`), que vous pouvez modifier de quatre façons :

- **Sélecteur de couleur :** cliquez sur la pastille pour ouvrir le sélecteur de couleur de votre système et choisir à l’œil.
- **HEX :** saisissez un code à six chiffres comme `#FFB347`. Le `#` est facultatif.
- **RGB :** saisissez trois valeurs de canal de 0 à 255 séparées par des virgules, comme `255, 179, 71`.
- **HSL :** saisissez la teinte, la saturation et la luminosité, comme `hsl(35, 100%, 64%)`.

Chaque champ met à jour les autres pendant la saisie : vous pouvez donc choisir une teinte au sélecteur et copier aussitôt sa valeur HEX ou RGB exacte. Appuyez sur <kbd>F</kbd> pour le plein écran, sur <kbd>R</kbd> pour une couleur aléatoire et sur <kbd>C</kbd> pour copier le code actuel.

## Quel format utiliser

Le HEX est le format attendu par les outils web et de design comme Figma, Canva et CSS. Le RGB correspond aux valeurs de canal de 0 à 255 des logiciels de retouche photo et de nombreuses applications d’éclairage. Le HSL est le plus pratique pour ajuster une couleur à l’œil : gardez la même teinte et baissez la luminosité pour obtenir une version plus sombre, ou baissez la saturation pour l’adoucir, sans deviner de nouveaux chiffres.

## Enregistrer des favoris

Appuyez sur le bouton Favori pour ajouter la couleur actuelle à votre liste, sous les commandes. Cliquez sur une couleur enregistrée pour la rappeler, ou supprimez-la quand vous n’en avez plus besoin. Les favoris restent dans ce navigateur et sur cet appareil : une série de couleurs pour un tournage régulier ou une palette de marque est prête dès la prochaine ouverture de la page.

## Couleurs utiles à essayer

| Usage | Couleur | Pourquoi ça marche |
|---|---|---|
| Lumière douce pour la visio | `#FFF1DC` | Un blanc cassé chaud, plus flatteur pour la peau que le blanc pur |
| Lecture nocturne, observation des étoiles | `#400000` | Un rouge profond et faible qui préserve la vision nocturne |
| Aperçu du mode sombre | `#121212` | Le gris foncé que de nombreux thèmes sombres utilisent à la place du noir pur |
| Test d’écrasement des noirs | `#0A0A0A` | Doit paraître juste au-dessus du noir sur un écran bien réglé |
| Test de saturation des blancs | `#F5F5F5` | Doit paraître juste en dessous du blanc pur, pas identique |
| Lumière de coucher de soleil | `#FFB347` | Un orange doré et doux pour une ambiance chaleureuse |

## Tester un écran avec des couleurs précises

Les couleurs primaires unies révèlent les pixels défectueux, et le [test de pixels morts en six couleurs](tool:dead-pixel-test) s’en charge en une seule passe. Une couleur personnalisée répond à d’autres questions. Saisissez la couleur de votre marque pour voir son rendu sur un téléphone, un ordinateur portable et un téléviseur. Parcourez des valeurs proches du noir pour voir où un écran cesse d’afficher les détails dans les ombres, ou proches du blanc pour voir où les hautes lumières sont écrêtées. Ouvrez le même code sur deux moniteurs pour voir lequel tire vers le chaud.

Pour une couleur primaire précise, l’[écran rouge](tool:red-screen), l’[écran vert](tool:green-screen) et l’[écran blanc](tool:white-screen) ont chacun leurs propres conseils. Pour comparer plusieurs couleurs côte à côte, l’[écran HEX](tool:hex-screen) affiche quatre pastilles à la fois, et l’[écran dégradé](tool:gradient-screen) mélange deux couleurs pour repérer les effets de bandes.

## Télécharger une image de couleur unie

Le bouton Télécharger enregistre un PNG de la couleur actuelle en paysage (1920×1080), portrait (1080×1920), carré (1080×1080) ou à la résolution exacte de votre appareil. C’est un moyen rapide de créer un fond uni pour un fond d’écran de téléphone, une diapositive ou un carton de titre vidéo, exactement dans la couleur choisie.
