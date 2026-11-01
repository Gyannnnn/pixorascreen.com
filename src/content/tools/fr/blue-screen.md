---
status: complete
sourceHash: 02be85950d057e7e
title: "Écran bleu en ligne - Fond et test en plein écran | PixoraScreen"
description: "Écran bleu gratuit pour les tests d’affichage, les fonds d’appel vidéo et la vérification des moniteurs. En plein écran, luminosité réglable, sur tous les appareils."
h1: "Écran bleu."
breadcrumb: "Écran bleu"
appDescription: "Écran bleu gratuit pour les tests d’affichage, les fonds d’appel vidéo et la vérification des moniteurs. En plein écran, luminosité réglable, sur tous les appareils."
lede: "Un bleu saturé en plein écran (#0066FF) pour vérifier le canal bleu de votre écran, donner à une scène une lumière bleue froide ou détourer un arrière-plan quand le vert ne convient pas."
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
  - q: "Est-ce l’écran bleu de la mort de Windows ?"
    a: "Non. Cette page affiche une simple couleur bleue pour vérifier un écran et éclairer. Si vous voulez l’écran de plantage de Windows avec le smiley triste et le code d’arrêt, utilisez la blague de l’écran bleu, qui le reproduit sans danger dans le navigateur."
  - q: "Comment tester uniquement les sous-pixels bleus ?"
    a: "La teinte par défaut, #0066FF, contient un peu de vert. Pour tester le seul canal bleu, saisissez 0000FF dans le champ HEX. Chaque pixel n’allume alors que son sous-pixel bleu, et un sous-pixel mort apparaît comme un point noir."
  - q: "Pourquoi le bleu paraît-il irrégulier sur mon téléphone OLED ?"
    a: "Le matériau OLED bleu vieillit plus vite que le rouge et le vert : les zones qui ont affiché pendant des années un contenu fixe et lumineux peuvent paraître légèrement plus sombres ou plus chaudes sur un fond bleu. Une vérification rapide est sans danger ; si vous voyez des taches, confirmez-les sur un écran gris moyen."
  - q: "Quand utiliser un écran bleu plutôt qu’un écran vert ?"
    a: "Choisissez le bleu si votre sujet porte du vert, tient des objets verts ou si la scène contient du vert, ou encore si la lumière verte reflétée sur la peau est difficile à maîtriser. Le vert se détoure généralement mieux avec les caméras numériques ; il reste donc le premier choix dans les autres cas."
  - q: "Pourquoi tout mon écran est-il devenu bleu ?"
    a: "Si le bureau paraît teinté de bleu, vérifiez le préréglage de température de couleur du moniteur (un réglage « froid » paraît bleu) et tout filtre de couleur dans les options d’accessibilité. Si le rouge et le vert semblent totalement absents, rebranchez ou remplacez le câble vidéo, car un câble endommagé peut perdre des canaux de couleur."
updated: '2026-10-31'
---

## Vérifier le canal bleu de votre écran

Le bleu est la couleur la moins lumineuse à l’œil : un sous-pixel bleu entièrement allumé paraît bien plus sombre qu’un rouge ou un vert à la même puissance. Les défauts du canal bleu passent donc facilement inaperçus sur un contenu normal, et un fond bleu uni est le meilleur moyen de les repérer.

Cette page s’ouvre sur `#0066FF`, un bleu soutenu et un peu lumineux, agréable à regarder. Pour un test strict des seuls sous-pixels bleus, saisissez `0000FF` dans le champ HEX afin d’éteindre le canal vert.

1. Appuyez sur <kbd>F</kbd> pour passer en plein écran et augmentez la luminosité de votre appareil.
2. Parcourez l’écran de près. Un point noir signifie qu’un sous-pixel bleu est mort. Un point blanc, cyan ou magenta signifie qu’un autre sous-pixel est bloqué allumé.
3. Vérifiez les mêmes endroits sur l’[écran rouge](tool:red-screen) et l’[écran vert](tool:green-screen) pour identifier le canal en cause, ou laissez le [test de pixels morts en six couleurs](tool:dead-pixel-test) tout passer en revue.

## Le bleu sur les écrans OLED

Sur les téléphones, téléviseurs et moniteurs OLED, le matériau bleu qui émet la lumière s’use plus vite que le rouge ou le vert. Les dalles compensent cette usure, mais sur des écrans qui ont affiché la même interface lumineuse pendant des années, un fond bleu peut révéler de légères taches là où se trouvaient une barre d’état ou un clavier. Si vous remarquez quelque chose, confirmez-le avec les aplats gris moyens du [test de burn-in OLED](tool:oled-burn-in-test), qui distinguent le burn-in d’une irrégularité normale.

## Utiliser le bleu comme lumière

- **Scènes froides et nocturnes :** un moniteur ou une tablette en bleu plein écran, juste hors champ, donne au sujet la lumière froide d’une scène de nuit, d’un visage éclairé par un écran ou d’une ambiance sous-marine.
- **Bureau et setup gaming :** un second écran en bleu colore une pièce sans ruban LED. Baissez le curseur de luminosité pour une lueur plus douce.
- **Contraste de couleurs en photo :** une lumière bleue d’un côté et l’[écran orange](tool:orange-screen) de l’autre donnent l’éclairage chaud-froid typique des affiches de cinéma.

## Écran bleu pour l’incrustation

Le fond bleu était la norme de l’incrustation avant la vidéo numérique, et on l’utilise encore quand le vert entrerait en conflit avec le sujet : vêtements verts, plantes ou logo vert. Affichez cette page en plein écran derrière un petit sujet, gardez-le à une petite distance pour que la lumière bleue ne déborde pas sur lui, et choisissez le bleu comme couleur d’incrustation dans votre logiciel. Pour la plupart des autres plans, l’[écran vert](tool:green-screen) se détoure plus proprement, car les capteurs des caméras enregistrent le vert avec plus de détails.

## Ce n’est pas l’écran bleu de la mort

Beaucoup de personnes qui cherchent un écran bleu pensent à l’écran de plantage de Windows. Cette page n’est qu’une couleur. Pour le smiley triste, le code d’arrêt et le pourcentage qui grimpe, ouvrez la [blague de l’écran bleu](tool:blue-screen-prank). Si votre ordinateur en affiche un vrai, cette page explique aussi ce que signifient les codes d’arrêt.
