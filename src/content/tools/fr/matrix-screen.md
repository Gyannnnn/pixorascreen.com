---
status: complete
sourceHash: 0603e05d7fc4787c
title: "Écran Matrix – Pluie numérique en ligne et effet Matrix personnalisable"
description: "Le code vert qui tombe de Matrix en plein écran, avec des katakana, du binaire ou votre propre texte, 6 palettes de couleur, vitesse, densité et traînées réglables, et un synthé d’ambiance."
h1: "Écran Matrix."
breadcrumb: "Écran Matrix"
appDescription: "Personnalisez un écran Matrix en ligne avec une pluie numérique, des lueurs néon, des nappes sonores cyberpunk et votre propre nom dans le code. Effet Matrix plein écran pour ordinateur, portable, moniteur et téléviseur, sans installation."
lede: "Le code vert qui tombe de Matrix en plein écran, avec des katakana, du binaire, des lettres ou vos propres mots, six palettes de couleur, vitesse, densité et traînées réglables, et une bande-son de synthé d’ambiance."
chips:
  - "mode plein écran"
  - "nom ou texte personnalisé"
  - "thèmes de couleur"
  - "vitesse et densité de la pluie"
  - "taille de police et lueur"
shortcuts:
  - keys: F
    label: "Plein écran"
  - keys: Espace
    label: "Afficher ou masquer le panneau de personnalisation"
  - keys: M
    label: "Activer ou couper le son d’ambiance"
  - keys: C
    label: "Changer de type de caractères"
  - keys: R
    label: "Réinitialiser les options"
  - keys: Échap
    label: "Quitter le plein écran"
faqs:
  - q: "Quels caractères utilise le code original de Matrix ?"
    a: "La pluie numérique du film est surtout composée de katakana japonais demi-chasse inversés, mêlés à des chiffres et à quelques lettres latines. Le mode Matrix classique de cette page reprend le même style de katakana ; appuyez sur C pour passer au binaire, à de simples lettres ou à votre propre texte."
  - q: "Puis-je faire écrire mon nom ou un message au code ?"
    a: "Oui. Ouvrez les réglages avec Espace, choisissez Texte personnalisé et tapez votre texte. Épelé dans l’ordre fait tomber les lettres dans l’ordre pour qu’on puisse lire les mots dans les colonnes, tandis que Lettres au hasard disperse ces mêmes lettres aléatoirement."
  - q: "L’écran Matrix est-il mauvais pour un écran OLED ?"
    a: "Il est plutôt doux. Le fond est noir, donc la plupart des pixels restent éteints, et les caractères ne restent jamais au même endroit. Comme pour tout écran allumé pendant des heures, gardez une luminosité modérée et éteignez l’affichage quand personne ne regarde."
  - q: "Y a-t-il du son ?"
    a: "Seulement si vous le voulez. Le Synthétiseur d’ambiance génère dans le navigateur un bourdonnement grave et atmosphérique. Appuyez sur M pour l’activer ou le couper, et utilisez le curseur de volume pour régler son niveau."
  - q: "Pourquoi le code paraît-il clairsemé ou trop chargé ?"
    a: "Cela dépend de la Densité des colonnes, de la Taille de police et de la taille de votre écran. Des polices plus petites et une densité plus élevée remplissent un grand moniteur ; sur un téléphone, une police plus grande avec une densité plus faible garde les caractères lisibles."
updated: '2026-10-31'
---

## La pluie numérique de Matrix

Dans Matrix (1999), le monde à l’intérieur de la simulation apparaît sous forme de colonnes de caractères verts lumineux qui pleuvent sur un écran noir. L’effet est devenu l’une des images les plus célèbres du cinéma et, depuis, le symbole des hackers, du code et des ordinateurs. Cette page le recrée dans votre navigateur : des dizaines de colonnes qui tombent à des vitesses différentes, chacune menée par un caractère lumineux et suivie d’une traînée qui s’assombrit vers un vert plus foncé.

1. Appuyez sur <kbd>F</kbd> pour passer en plein écran.
2. Appuyez sur <kbd>Espace</kbd> pour ouvrir le panneau de personnalisation.
3. Choisissez un type de caractères et une palette de couleur, puis réglez les curseurs.
4. Appuyez de nouveau sur <kbd>Espace</kbd> pour masquer le panneau et laisser tomber le code.

## Types de caractères

Appuyez sur <kbd>C</kbd> pour les faire défiler, ou choisissez-en un dans les réglages :

- **Matrix classique :** des katakana japonais demi-chasse et des chiffres, au plus près du film.
- **Code binaire :** uniquement des zéros et des uns, pour un look « ordinateur » plus littéral.
- **Alphanumérique :** des lettres et des chiffres.
- **Texte personnalisé, épelé dans l’ordre :** vos propres mots, qui tombent lettre par lettre pour qu’on puisse les lire le long des colonnes. Parfait pour des prénoms lors d’une fête ou le nom d’une chaîne pendant un stream.
- **Texte personnalisé, lettres au hasard :** les lettres de votre texte dans un ordre aléatoire, pour une touche personnelle plus discrète.

## Affiner le rendu

**Taille de police** (de 10 à 36) définit la taille des caractères. **Vitesse de la pluie** règle la vitesse de leur chute. **Densité des colonnes** détermine combien de colonnes sont actives à la fois, et **Longueur de la traînée**, la longueur de la queue qui s’efface derrière chacune. Six palettes changent la lueur : Vert classique, Cyan cyberpunk, Rouge cramoisi, Ambre doré, Violet néon et Arc-en-ciel. Appuyez sur <kbd>R</kbd> à tout moment pour revenir aux valeurs par défaut.

## Comment l’effet est dessiné

La pluie numérique est redessinée de nombreuses fois par seconde. À chaque image, la page efface l’écran en noir et redessine chaque colonne : un caractère de « tête » lumineux à l’avant, suivi d’une queue de caractères qui pâlissent à mesure qu’ils s’éloignent de la tête. Quand la tête descend, toute la colonne se déplace avec elle, ce qui donne l’impression de caractères qui s’illuminent puis s’éteignent. Longueur de la traînée détermine combien de caractères compte la queue avant de disparaître, et Densité des colonnes, combien de colonnes tombent en même temps. Beaucoup de versions classiques peignent plutôt un voile noir semi-transparent sur l’image précédente ; dessiner chaque queue explicitement garde les caractères nets et évite les traînées grises sur les écrans lumineux.

## Idées d’utilisation

- **Fonds pour streams et vidéos :** un écran « ça commence bientôt » ou un fond derrière la webcam pour les chaînes tech et gaming.
- **Soirées à thème et escape games :** un repaire de hacker ou un décor de science-fiction, idéalement avec la bande-son du synthé activée.
- **Ambiance de bureau :** une pluie lente et clairsemée sur un second moniteur pendant que vous codez.
- **Ouverture de cours :** une accroche visuelle rapide avant un cours d’informatique ou de cybersécurité.

Pour un écran qui tape du code d’apparence réelle quand vous appuyez sur les touches, essayez [Hacker Typer](tool:hacker-typer). L’[écran radar](tool:radar-screen) ajoute un affichage de salle de contrôle avec balayage, et l’[écran de pluie](tool:rain-screen) propose la pluie d’origine, celle qui mouille.
