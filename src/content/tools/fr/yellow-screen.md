---
status: complete
sourceHash: 66a7f5f93bf25b1d
title: "Écran jaune en ligne - Outil gratuit en plein écran"
description: "Un jaune vif en plein écran (#FFDD00) pour vérifier les canaux rouge et vert de votre écran, repérer une dominante jaune indésirable ou apporter une lumière chaude et ensoleillée à vos photos et vidéos."
h1: "Écran jaune."
breadcrumb: "Écran jaune"
appDescription: "Un écran jaune vif pour les tests de visibilité, une lumière d’appoint chaude et une couleur plein écran qui attire l’œil. Ouvrez-le en plein écran, réglez la luminosité et testez votre affichage."
lede: "Un jaune vif en plein écran (#FFDD00) pour vérifier les canaux rouge et vert de votre écran, le comparer à une dominante jaune indésirable et apporter une lumière ensoleillée à vos photos et vidéos."
chips:
  - "plein écran"
  - "luminosité"
  - "copier le HEX"
  - "copier le RGB"
  - "couleur aléatoire"
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
  - q: "Pourquoi tout mon écran paraît-il jaune ?"
    a: "La cause la plus fréquente est un filtre de lumière bleue comme l’éclairage nocturne, Night Shift ou le mode confort des yeux, souvent activé selon un horaire calé sur le coucher du soleil. Autres causes possibles : un préréglage de température de couleur « chaud » sur le moniteur, un mode lecture, un rétroéclairage LCD vieillissant ou une protection d’écran jaunie avec le temps."
  - q: "Qu’est-ce que l’écran jaune de la mort ?"
    a: "C’est le surnom de la page d’erreur jaune et blanche qu’affichent les anciens sites ASP.NET quand le code du serveur plante, avec l’erreur et la pile d’appels. Elle provient du site web, pas de votre ordinateur, et n’a rien à voir avec cette page."
  - q: "Que signifient des points de couleur sur l’écran jaune ?"
    a: "Le jaune mélange le rouge et le vert, sans bleu. Un point vert signifie qu’un sous-pixel rouge est mort, un point rouge ou orange qu’un sous-pixel vert est mort, et un point presque blanc qu’un sous-pixel bleu est bloqué allumé."
  - q: "Puis-je utiliser un écran jaune pour lire le soir ?"
    a: "Une lumière jaune ou ambrée tamisée contient bien moins de bleu qu’une lumière blanche : elle est donc plus douce le soir. Baissez le curseur de luminosité et la luminosité de votre appareil ; pour un ton encore plus chaud, essayez l’écran orange ou un ambre profond dans l’écran de couleur personnalisée."
  - q: "Quel code HEX utilise ce jaune ?"
    a: "Cette page affiche #FFDD00, un jaune légèrement doré. Le jaune pur à l’écran est #FFFF00, et la couleur CSS « gold » est #FFD700. Saisissez l’un d’eux dans le champ HEX pour comparer."
updated: '2026-10-31'
---

## Faire une vérification avec l’écran jaune

À l’écran, le jaune n’est pas une couleur à part entière : il est obtenu en allumant ensemble les sous-pixels rouges et verts, le bleu restant éteint. Cette page utilise `#FFDD00`, un jaune chaud légèrement doré. Comme deux canaux sont en jeu, un fond jaune permet de voir rapidement si le rouge et le vert sont équilibrés sur toute la dalle. Une zone qui tire vers l’orange a un vert plus faible à cet endroit ; une zone qui paraît verdâtre a un rouge plus faible.

1. Désactivez d’abord l’éclairage nocturne, Night Shift ou tout mode confort des yeux. Ils poussent toutes les couleurs vers le jaune et masqueraient les zones irrégulières.
2. Appuyez sur <kbd>F</kbd> pour passer en plein écran et parcourez l’écran à une distance normale.
3. Rapprochez-vous ensuite et cherchez des points isolés : vert signifie un sous-pixel rouge mort, rouge ou orange un sous-pixel vert mort, et presque blanc un sous-pixel bleu bloqué.

Le jaune ne peut pas révéler un sous-pixel bleu mort, puisque le bleu est éteint. L’[écran bleu](tool:blue-screen) s’en charge, et le [test de pixels morts en six couleurs](tool:dead-pixel-test) vérifie tous les canaux dans l’ordre.

## Votre écran est-il jaune alors qu’il ne devrait pas l’être ?

Si votre bureau habituel paraît jaune, ouvrez l’[écran blanc](tool:white-screen) et comparez-le avec une feuille de papier blanc à la lumière du jour. Une forte dominante vient généralement de l’une de ces causes :

- **Un filtre de lumière bleue** programmé : éclairage nocturne (Windows), Night Shift (Apple) ou mode confort des yeux et modes lecture (Android).
- **Un préréglage de couleur chaud** sur le moniteur ou le téléviseur. Cherchez plutôt une option 6500K, « Normal » ou « sRGB ».
- **True Tone ou la couleur adaptative** sur les appareils Apple, qui suit la couleur de l’éclairage de la pièce.
- **Une protection d’écran vieillie** qui a jauni au soleil.
- **Un vieux rétroéclairage LCD.** Les rétroéclairages fluorescents des anciens moniteurs jaunissent avec l’âge, et aucun réglage ne corrige complètement le problème.

## Le jaune comme lumière et comme fond

- **Du soleil par temps gris :** une tablette en jaune plein écran, un peu sur le côté et au-dessus d’un visage, ajoute la chaleur du soleil à un appel vidéo ou un selfie. Gardez une luminosité modérée pour que la peau ne paraisse pas cireuse.
- **Photos de produits :** un fond jaune rend les agrumes, les baskets et les emballages lumineux et gais, et le bouton Télécharger exporte la même couleur en PNG pour la retouche.
- **Attirer l’attention sur scène :** un écran entièrement jaune sur un projecteur sert de signal clair de « pause » ou de « temps écoulé » en classe ou en réunion.
- **Éclairage d’ambiance :** pour une lueur du soir, atténuez-le avec le curseur, ou passez à l’[écran orange](tool:orange-screen), plus chaud.

S’il vous faut une autre nuance, saisissez-la dans l’[écran de couleur personnalisée](tool:custom-color-screen), du jaune citron pâle à l’ambre profond.
