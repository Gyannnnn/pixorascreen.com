---
status: complete
sourceHash: 472e899ce9bbb51f
title: "Fausse blague de l’écran bleu - Simulateur de BSOD Windows 10/11 | PixoraScreen"
description: "Faux écran de plantage Windows réaliste pour les blagues, les streams et les formations techniques. BSOD Windows 10/11 fidèle à l’original, avec progression animée, 8 codes d’arrêt et un QR code."
h1: "Blague de l’écran bleu."
breadcrumb: "Blague de l’écran bleu"
appDescription: "Faux écran de plantage Windows réaliste pour les blagues, les streams et les formations techniques. BSOD Windows 10/11 fidèle à l’original, avec progression animée, 8 codes d’arrêt et un QR code."
lede: "Un écran bleu de la mort Windows réaliste, avec un pourcentage qui grimpe, un code d’arrêt aléatoire et un QR code. Il fonctionne dans l’onglet du navigateur et ne modifie rien sur l’ordinateur."
chips:
  - "plein écran"
  - "rappel pour quitter"
  - "progression animée"
  - "codes d’arrêt"
  - "QR code"
shortcuts:
  - keys: F
    label: "Plein écran"
  - keys: Échap
    label: "Quitter le plein écran"
faqs:
  - q: "Le faux écran bleu est-il sans danger pour mon ordinateur ?"
    a: "Oui. C’est une page web ordinaire, dessinée en HTML et JavaScript. Elle n’installe rien, ne modifie aucun réglage et ne peut pas faire planter l’ordinateur. Appuyez sur Échap ou fermez l’onglet, et tout redevient normal."
  - q: "Comment quitter le faux écran bleu ?"
    a: "Appuyez sur Échap pour quitter le plein écran et la page redevient normale. Sur un écran tactile, balayez vers le bas depuis le bord supérieur ou utilisez le geste de retour. Fermer l’onglet du navigateur y met aussi fin."
  - q: "Puis-je changer la durée du faux plantage ?"
    a: "Oui. Cliquez sur l’icône d’engrenage avant de commencer. Durée fixe le temps que met le pourcentage pour atteindre 100 %, de 5 à 180 secondes, et Pourcentage de départ permet de démarrer le compteur n’importe où entre 0 % et 95 %, comme si le plantage durait déjà depuis un moment."
  - q: "Quels codes d’arrêt le simulateur affiche-t-il ?"
    a: "À chaque chargement de la page, il choisit l’un de huit vrais codes d’arrêt Windows : CRITICAL_PROCESS_DIED, SYSTEM_SERVICE_EXCEPTION, MEMORY_MANAGEMENT, IRQL_NOT_LESS_OR_EQUAL, KMODE_EXCEPTION_NOT_HANDLED, PAGE_FAULT_IN_NONPAGED_AREA, DRIVER_IRQL_NOT_LESS_OR_EQUAL ou BAD_POOL_HEADER."
  - q: "Windows 11 plante-t-il encore avec un écran bleu ?"
    a: "Cela dépend de la version. Windows 10 et la plupart des PC sous Windows 11 antérieurs aux mises à jour de 2025 affichent le design bleu reproduit ici. En 2025, Microsoft a commencé à déployer dans Windows 11 un écran de plantage noir plus simple : sur une machine Windows 11 entièrement à jour, la version bleue peut donc sembler moins familière."
  - q: "Fonctionne-t-il sur Mac, Chromebook ou téléphone ?"
    a: "Il fonctionne dans n’importe quel navigateur récent, donc sur tous ces appareils. Il est toutefois plus convaincant sur un ordinateur portable ou de bureau sous Windows, car c’est le seul endroit où l’on s’attend à voir un écran de plantage Windows."
updated: '2026-10-31'
---

## Comment préparer la blague de l’écran bleu

La page reproduit l’écran de plantage que Windows affiche après une erreur grave : le grand smiley triste, « Votre ordinateur a rencontré un problème et doit redémarrer », un pourcentage qui monte jusqu’à 100, un QR code et un code d’arrêt. Tout se passe dans l’onglet du navigateur : on dirait un plantage, alors que l’ordinateur continue de fonctionner normalement en arrière-plan.

1. Ouvrez cette page sur l’ordinateur que vous voulez utiliser, idéalement un portable ou un PC de bureau sous Windows.
2. Cliquez sur l’icône d’engrenage dans le coin de l’aperçu. Réglez **Durée** pour fixer le temps que met le compteur pour atteindre 100 %, entre 5 et 180 secondes, et **Pourcentage de départ** si vous voulez qu’il commence en cours de route.
3. Fermez le panneau de réglages et appuyez sur <kbd>F</kbd> ou sur le bouton Plein écran. Les onglets et la barre d’adresse du navigateur disparaissent, et le compteur démarre.
4. Placez le pointeur de la souris au bord de l’écran et laissez-le là.
5. Une fois la blague réussie, appuyez sur <kbd>Échap</kbd> pour y mettre fin.

Le pourcentage ne monte pas régulièrement. Comme sur le vrai écran, il se fige à des moments aléatoires pendant une ou deux secondes avant de repartir, et c’est ce qui le rend crédible. Un nouveau code d’arrêt est choisi à chaque chargement de la page.

## Ce que signifient les codes d’arrêt

Les huit codes d’arrêt de cette page sont de vraies erreurs Windows. Si vous en voyez un lors d’un vrai plantage, voici en gros ce qu’il indique :

| Code d’arrêt | Ce qu’il signifie en général |
|---|---|
| CRITICAL_PROCESS_DIED | Un processus indispensable à Windows s’est arrêté de façon inattendue |
| SYSTEM_SERVICE_EXCEPTION | Un service système ou un pilote a rencontré une erreur qu’il n’a pas pu gérer |
| MEMORY_MANAGEMENT | Windows a détecté une erreur de mémoire, due à une RAM défectueuse ou à un pilote |
| IRQL_NOT_LESS_OR_EQUAL | Un pilote a accédé à une zone mémoire qui lui était interdite à ce moment-là |
| DRIVER_IRQL_NOT_LESS_OR_EQUAL | Le même défaut, attribué à un pilote précis |
| KMODE_EXCEPTION_NOT_HANDLED | Un programme exécuté en mode noyau a planté |
| PAGE_FAULT_IN_NONPAGED_AREA | Un élément a fait référence à une mémoire inexistante |
| BAD_POOL_HEADER | La gestion interne de la mémoire de Windows a été corrompue, souvent par un pilote |

## Si vous voyez un vrai écran bleu

Un écran bleu isolé après une mise à jour de pilote ou de Windows est courant et ne revient souvent jamais. Notez le code d’arrêt, laissez le PC redémarrer et installez les mises à jour Windows et de pilote graphique en attente. Si le même code revient, recherchez-le sur le site d’assistance de Microsoft, annulez le dernier changement de matériel ou de pilote, et lancez l’outil Diagnostics de mémoire Windows si le code mentionne la mémoire. Un écran bleu n’efface pas vos fichiers : l’ordinateur redémarre simplement.

## L’utiliser de façon responsable

Une bonne blague se termine par un fou rire général en une ou deux minutes. Dévoilez-la vite et choisissez votre moment : pas quand quelqu’un court après une échéance ou a un travail non enregistré qui le ferait paniquer. N’utilisez jamais un faux écran d’erreur pour pousser quelqu’un à appeler un numéro, à payer une « réparation » ou à installer quoi que ce soit. Ce sont les ficelles des arnaques au faux support technique, et les vrais écrans de plantage ne demandent jamais rien de tout cela.

## Autres écrans de plantage et de mise à jour

Pour un PC plus ancien, l’[écran de plantage de Windows XP](tool:windows-xp-crash) reproduit les boîtes d’erreur d’explorer.exe de cette époque. Le [faux écran de mise à jour Windows](tool:windows-update) joue la carte de la lenteur : une mise à jour qui ne semble jamais finir. Le [faux écran de virus](tool:fake-virus-screen) affiche de fausses alertes de sécurité au lieu d’un plantage, et l’[écran cassé](tool:broken-screen) donne l’impression que l’écran lui-même est fissuré.
