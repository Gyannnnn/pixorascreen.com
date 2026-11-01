---
status: complete
sourceHash: e1ba4dc44b7200ca
title: "Écran cyan en ligne - Outil gratuit en plein écran"
description: "Un cyan lumineux en plein écran (#00E5FF) pour vérifier les canaux vert et bleu de votre écran, éclairer une scène de tons aqua froids ou diagnostiquer un moniteur teinté de cyan."
h1: "Écran cyan."
breadcrumb: "Écran cyan"
appDescription: "Un cyan net en plein écran pour vérifier les canaux de couleur, l’éclairage d’ambiance et les fonds numériques. Ouvrez-le en plein écran, réglez la luminosité et testez votre affichage."
lede: "Un cyan lumineux en plein écran (#00E5FF) pour vérifier les canaux vert et bleu de votre écran, apporter une lumière aqua froide aux photos et vidéos, et diagnostiquer un écran devenu cyan."
chips:
  - "plein écran"
  - "luminosité"
  - "copier le HEX"
  - "copier le RGB"
  - "partager l’écran actuel"
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
  - q: "Pourquoi tout mon écran est-il cyan ou bleu-vert ?"
    a: "Une dominante cyan ou sarcelle sur tout l’écran signifie que la composante rouge de l’image manque, car le vert et le bleu ensemble donnent le cyan. La cause habituelle est un câble vidéo mal branché ou abîmé, surtout les anciens câbles VGA et DVI aux broches tordues. Rebranchez ou remplacez le câble, puis vérifiez l’écran rouge pour confirmer le retour du rouge."
  - q: "Que signifient les points sur l’écran cyan ?"
    a: "Le cyan allume le vert et le bleu, le rouge restant éteint. Un point bleu signifie qu’un sous-pixel vert est mort, un point vert qu’un sous-pixel bleu est mort, et un point blanchâtre qu’un sous-pixel rouge est bloqué allumé."
  - q: "Le cyan de l’écran est-il le même que celui de l’imprimante ?"
    a: "Non. Les écrans produisent le cyan avec de la lumière verte et bleue et peuvent afficher un cyan plus lumineux et plus saturé que n’importe quelle encre. Le cyan quadrichromique de l’impression CMJN paraît nettement plus profond. Pour l’impression, comparez les couleurs à une épreuve papier plutôt qu’à l’écran."
  - q: "Qu’est-ce que le look teal and orange ?"
    a: "C’est un style colorimétrique courant au cinéma et dans les clips, où des ombres cyan ou sarcelle froides contrastent avec des carnations orange chaudes. Vous pouvez le créer en éclairage réel : cet écran cyan d’un côté du sujet et l’écran orange de l’autre."
  - q: "Quel est le code HEX de ce cyan ?"
    a: "Cette page utilise #00E5FF. Le cyan pur à l’écran est #00FFFF (appelé aussi « aqua » en CSS), et un sarcelle plus calme est #008080. Saisissez l’un d’eux dans le champ HEX pour changer."
updated: '2026-10-31'
---

## Vérifier les canaux vert et bleu

Le cyan est le mélange de lumière verte et bleue, le rouge restant éteint. Cette page affiche `#00E5FF`, un cyan lumineux légèrement adouci. Cette combinaison en fait un complément utile aux tests unicolores : il vérifie deux canaux à la fois et montre immédiatement si le canal rouge apparaît là où il ne devrait pas.

1. Appuyez sur <kbd>F</kbd> pour passer en plein écran et réglez votre appareil sur une luminosité élevée.
2. Parcourez tout l’écran à la recherche de zones qui tirent vers le vert ou le bleu, signe d’une luminosité inégale dans l’un des deux canaux.
3. Rapprochez-vous et cherchez des points : bleu signifie un sous-pixel vert mort, vert un sous-pixel bleu mort, et blanc ou rose pâle un sous-pixel rouge bloqué allumé.

Pour isoler chaque canal, poursuivez avec l’[écran vert](tool:green-screen) et l’[écran bleu](tool:blue-screen), ou lancez le [test de pixels morts en six couleurs](tool:dead-pixel-test).

## Un moniteur devenu cyan

Quand toutes les fenêtres, photos et vidéos paraissent soudain sarcelle ou cyan, le signal rouge n’atteint pas l’écran. C’est une panne classique des câbles mal branchés :

- Éteignez le moniteur, rebranchez le câble vidéo aux deux extrémités et vérifiez que les anciennes fiches VGA ou DVI n’ont pas de broches tordues.
- Essayez un autre câble et un autre port, ou un autre appareil sur le même moniteur.
- Ouvrez l’[écran rouge](tool:red-screen). S’il paraît noir ou très sombre, le rouge manque toujours, et le câble, le port ou la carte graphique est probablement en cause.

Sur un ordinateur portable ou un téléphone, une teinte cyan apparue après une chute indique en général un dommage interne de l’écran plutôt qu’un réglage.

## Une lumière froide pour la photo et la vidéo

Un écran cyan en plein écran projette une lumière nette et froide qui convient à plusieurs styles :

- **Scènes sous-marines et d’aquarium :** une lumière cyan venue d’en haut, pièce plongée dans le noir, donne à un visage ou à un objet un éclat aquatique.
- **Teal and orange :** placez cet écran cyan d’un côté du sujet et l’[écran orange](tool:orange-screen) de l’autre pour le contraste des affiches de cinéma et des clips.
- **Décors tech et science-fiction :** le cyan est la couleur de référence des hologrammes, des tableaux de bord et des interfaces futuristes dans les productions vidéo.
- **Éclairage de bureau apaisant :** un cyan atténué sur un second écran apporte une note fraîche à la pièce.

## Cyan d’écran et cyan d’impression

Les graphistes utilisent parfois un écran cyan pour juger du rendu d’une couleur de marque. Gardez à l’esprit qu’un écran crée le cyan en émettant de la lumière verte et bleue, alors qu’une imprimante utilise une encre cyan qui absorbe la lumière rouge du papier blanc. Un écran peut afficher un cyan bien plus vif que n’importe quelle encre : des couleurs éclatantes ici peuvent paraître nettement plus ternes à l’impression. Vérifiez vos travaux d’impression sur papier.

Besoin d’une autre nuance ? L’[écran de couleur personnalisée](tool:custom-color-screen) accepte n’importe quelle valeur HEX, RGB ou HSL.
