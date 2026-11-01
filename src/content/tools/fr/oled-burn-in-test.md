---
status: complete
sourceHash: 9e879d272df33ee9
title: "Test de burn-in OLED - Vérificateur gratuit de protection d’écran en plein écran | PixoraScreen"
description: "Test de burn-in OLED gratuit : vérifiez si votre écran OLED ou AMOLED présente des images fantômes ou de la rémanence avec des couleurs unies et des motifs en mouvement. Fonctionne sur téléphones, téléviseurs et moniteurs."
h1: "Test de burn-in OLED : détectez les images fantômes et la rémanence"
breadcrumb: "Test de burn-in OLED"
appDescription: "Test de burn-in OLED gratuit avec des contrôles statiques en couleur et un mode motif en mouvement, pour vérifier et aider à prévenir les images fantômes et la rémanence."
lede: "Un test de burn-in OLED à deux modes : des gris et des couleurs unies pour révéler les images fantômes déjà présentes, et un motif en mouvement qui aide à prévenir l’usure inégale des pixels sur les écrans OLED et AMOLED."
chips:
  - "plein écran"
  - "contrôle statique"
  - "motif en mouvement"
  - "gris et couleurs"
  - "luminosité"
shortcuts:
  - keys: F
    label: "Plein écran"
  - keys: M
    label: "Basculer entre contrôle et motif"
  - keys: →
    label: "Couleur de test suivante"
  - keys: ←
    label: "Couleur de test précédente"
  - keys: Échap
    label: "Quitter le plein écran"
faqs:
  - q: "Qu’est-ce que le burn-in OLED et quelle en est la cause ?"
    a: "Le burn-in (marquage) est une décoloration permanente ou semi-permanente qui apparaît quand certaines zones d’une dalle OLED s’usent de façon inégale. Chaque pixel OLED perd un peu de luminosité à l’usage : tout ce qui reste au même endroit à forte luminosité (une barre d’état, le logo d’une chaîne, l’interface d’un jeu, une barre de navigation) use donc ses pixels plus vite que le contenu animé qui l’entoure. Une fois l’écart assez grand, le contour de cet élément fixe reste légèrement visible, quoi qu’affiche l’écran."
  - q: "Comment savoir si mon écran a déjà du burn-in ?"
    a: "Utilisez le mode Contrôle statique et faites défiler les gris dans une pièce peu éclairée. Un gris moyen uniforme est le plus révélateur, car une légère décoloration que le blanc efface et que le noir cache devient évidente sur un ton moyen uni. Cherchez les contours sombres d’éléments d’interface que vous utilisez sans cesse, ou des taches qui restent au même endroit pendant que la couleur change autour. Ce qui bouge avec l’image est un reflet, pas du burn-in."
  - q: "Ce test peut-il lui-même provoquer du burn-in ?"
    a: "Pas dans un usage réaliste. Le burn-in vient d’un contenu fixe affiché pendant des centaines d’heures, pas d’un contrôle d’une ou deux minutes, et le Contrôle statique est fait pour être parcouru, pas pour rester figé. Le mode Motif en mouvement est tout le contraire d’un risque : rien n’y reste immobile, donc aucun pixel ne garde la même valeur assez longtemps pour s’user de façon inégale. Par précaution, affichez brièvement les couleurs vives et baissez le curseur de luminosité."
  - q: "En quoi est-ce différent d’un simple écran noir ou blanc ?"
    a: "Un écran noir est idéal pour repérer les pixels bloqués et la lumière qui fuit par les bords, et un écran blanc pour les pixels morts et la poussière. Ce sont deux aplats uniques pour trouver des défauts. Cette page vise spécifiquement le burn-in : elle fournit les niveaux de gris où les images fantômes se détachent vraiment du fond, et ajoute un mode motif en mouvement qui aide à prévenir l’usure inégale au lieu de seulement la diagnostiquer. Utilisez les écrans noir et blanc pour les défauts de pixels, et celui-ci pour la rémanence et les images fantômes."
  - q: "Cela concerne-t-il aussi les écrans LCD/LED, ou seulement les OLED/AMOLED ?"
    a: "Le vrai burn-in est un problème propre aux OLED et AMOLED, car ces dalles s’usent pixel par pixel. Les écrans LCD et LED peuvent présenter de la rémanence, une image fantôme temporaire qui disparaît généralement d’elle-même en quelques minutes une fois l’image fixe partie, et les deux modes de cette page permettent de la repérer et de l’effacer. Si une ombre sur un LCD ne s’estompe pas au bout d’un moment, il s’agit plus probablement d’un défaut de la dalle que de rémanence."
updated: '2026-10-31'
---

## Qu’est-ce que le burn-in OLED ?

Le burn-in (marquage) est une décoloration permanente ou semi-permanente laissée sur un écran quand ses pixels s’usent de façon inégale. Sur une dalle OLED ou AMOLED, chaque pixel produit sa propre lumière et perd un peu de luminosité à chaque heure d’allumage : la luminosité s’use donc pixel par pixel, au lieu de provenir d’un rétroéclairage commun. Tout ce qui reste au même endroit à forte luminosité s’use ainsi plus vite que l’image animée qui l’entoure.

C’est pourquoi le burn-in prend presque toujours la forme des éléments fixes de l’interface plutôt que celle du contenu : la barre d’état ou de navigation d’un téléphone, le logo d’une chaîne dans le coin d’un téléviseur, l’interface d’un jeu, les indicateurs d’un tableau de bord, une barre des tâches. Ces éléments restent immobiles pendant des centaines d’heures pendant que tout le reste change. Une fois l’écart assez grand entre les pixels usés et leurs voisins, le contour reste légèrement visible sur chaque écran que vous ouvrez.

Il faut distinguer le burn-in de la **rémanence**, qui lui ressemble sans être la même chose. La rémanence est une image fantôme temporaire qui s’estompe d’elle-même une fois l’image fixe partie, souvent en quelques minutes, et elle touche aussi les dalles LCD. Le burn-in, lui, ne s’estompe pas. Revérifier une image fantôme suspecte après vingt minutes de contenu varié est le moyen le plus simple de les distinguer.

## Comment détecter un burn-in existant

Passez l’outil en **Contrôle statique** et parcourez les couleurs de test. C’est une passe de diagnostic : le but est d’avoir un aplat parfaitement uni, sans rien pour distraire l’œil.

### Commencez par les niveaux de gris

Le gris moyen est la couleur la plus révélatrice de la page ; c’est pourquoi les trois niveaux de gris passent avant les couleurs. Le blanc pur est assez lumineux pour effacer une légère décoloration, et le noir pur ne lui offre aucun fond sur lequel ressortir, mais un ton moyen uniforme se situe exactement là où une zone usée se détache d’une zone intacte. Passez par le gris 20 %, 50 % et 75 %, en accordant quelques secondes à chacun.

### Travaillez dans une pièce sombre, à luminosité constante

La lumière ambiante et les reflets masquent justement les détails à faible contraste que vous cherchez. Assombrissez la pièce, gardez l’écran à la même luminosité pendant que vous comparez les couleurs, et utilisez le curseur de luminosité de la page plutôt que les réglages de l’appareil, pour que le niveau reste identique de l’une à l’autre.

### Cherchez des formes qui restent en place

Un vrai burn-in garde sa position pendant que la couleur change autour, et il ressemble à quelque chose que vous reconnaissez : la barre du haut, un rectangle à l’emplacement d’un logo, une rangée d’icônes. Si une marque bouge quand vous inclinez l’écran ou change avec la lumière de la pièce, c’est un reflet ou une trace. Vérifiez aussi les couleurs ensuite, car un seul canal de sous-pixels usé peut apparaître sur le rouge, le vert ou le bleu avant d’apparaître sur le gris.

Si vous trouvez quelque chose, photographiez l’écran sur la couleur qui le montre le plus nettement. Une photo datée est bien plus convaincante qu’une description si vous faites ensuite jouer la garantie.

## Comment aider à prévenir le burn-in

Passez en **Motif en mouvement** et la mission change complètement. Rien ne reste immobile dans ce mode : la grille dérive, un balayage doux traverse la dalle et un bloc coloré se promène sur toute la surface, le tout sur un fond sombre pour que la luminosité moyenne reste faible. Aucun pixel ne reste assez longtemps sur la même valeur pour s’user avant ses voisins ; c’est le même principe que tous les économiseurs d’écran conçus pour ce problème.

Laissez-le tourner pendant les périodes qui provoquent vraiment le burn-in, c’est-à-dire les périodes d’inactivité : un écran en pause sur un menu, un moniteur laissé sur un tableau de bord fixe, un téléviseur sur une chaîne au logo permanent, une borne entre deux visiteurs. Ce sont ces heures-là qui font les dégâts, pas l’usage ordinaire.

Les habitudes comptent plus que n’importe quel outil. Évitez de laisser longtemps à l’écran des éléments d’interface fixes et lumineux, activez le masquage automatique des barres des tâches et des commandes de lecture quand c’est possible, et baissez la luminosité générale, car l’usure augmente avec l’intensité à laquelle les pixels sont sollicités. La plupart des téléphones et téléviseurs OLED récents intègrent déjà le décalage des pixels, l’atténuation des logos et des cycles de rafraîchissement périodiques qui tournent discrètement en arrière-plan. Laissez-les activés. Cette page les complète, elle ne les remplace pas.

## Vérifications associées

Le burn-in n’est qu’un des défauts possibles d’un OLED. Un pixel qui reste allumé sur un fond sombre est bloqué, pas marqué, et l’[écran noir](tool:black-screen) est le moyen le plus clair de le voir. Une tache sombre sur un fond lumineux est un pixel mort, que l’on confirme le mieux sur l’[écran blanc](tool:white-screen). L’[écran gris](tool:grey-screen) vous permet de garder un seul niveau de gris aussi longtemps que vous le voulez et de saisir le vôtre, et le [test de pixels morts en six couleurs](tool:dead-pixel-test) vérifie chaque canal de sous-pixels en un seul passage.
