---
status: complete
sourceHash: 57eb745ea44d2bdc
title: "Simulateur d’écran Ubuntu en ligne - Faux écran de mise à jour et de démarrage Ubuntu gratuit"
description: "Le célèbre écran de démarrage d’Ubuntu en plein écran, le logo Ubuntu sur fond aubergine avec cinq points qui pulsent, pour les farces sous Linux, les vidéos, les démonstrations en classe et la nostalgie des bureaux d’antan."
h1: "Mise à jour Ubuntu."
breadcrumb: "Mise à jour Ubuntu"
appDescription: "Transformez n’importe quel écran en simulateur réaliste de fausse mise à jour Ubuntu, avec une animation de démarrage authentique, une barre de progression, un cycle de redémarrage et l’esthétique du terminal orange d’Ubuntu. Outil de farce gratuit en ligne pour les démonstrations Linux, les accessoires vidéo et la formation en classe. Plein écran, raccourcis clavier et luminosité réglable. Sans téléchargement, sans installation, sans risque."
lede: "Le célèbre écran de démarrage d’Ubuntu en plein écran, le logo Ubuntu sur fond aubergine avec cinq points qui pulsent, pour les farces sous Linux, les scènes vidéo et les démonstrations en classe."
chips:
  - "plein écran"
  - "animation de démarrage authentique"
  - "progression non linéaire"
  - "cycle de redémarrage"
  - "luminosité"
shortcuts:
  - keys: F
    label: "Plein écran"
  - keys: Échap
    label: "Quitter le plein écran"
faqs:
  - q: "Qu’est-ce que cet écran Ubuntu ?"
    a: "Il recrée l’écran de démarrage qu’Ubuntu a affiché pendant des années au lancement ou à la fin des mises à jour : le logo Ubuntu blanc sur un fond aubergine foncé, avec cinq points qui s’allument tour à tour. C’est uniquement visuel : il n’exécute pas Linux et ne modifie rien sur votre ordinateur."
  - q: "A-t-il des réglages, comme les écrans de mise à jour de Windows et de Mac ?"
    a: "Non. Il affiche l’écran de démarrage avec ses points en boucle, ce qui est aussi tout ce que montre le vrai écran. Pour un pourcentage, des scénarios et des minuteurs, utilisez le faux écran de mise à jour Windows ou l’écran de mise à jour macOS."
  - q: "Pourquoi Ubuntu utilise-t-il cette couleur violette ?"
    a: "L’aubergine, un violet foncé, fait partie de l’identité visuelle d’Ubuntu depuis le début des années 2010 : on la retrouve sur ses écrans de démarrage, en fond de terminal et dans son image de marque, aux côtés de son orange emblématique."
  - q: "Comment voir ce que fait un vrai démarrage d’Ubuntu derrière l’écran de chargement ?"
    a: "Appuyez sur Échap pendant l’affichage de l’écran de démarrage. Sur un vrai système Ubuntu, cela remplace le logo par le journal de démarrage en mode texte, qui affiche chaque service au fur et à mesure qu’il démarre ; c’est le premier endroit où regarder si le démarrage se bloque."
  - q: "Est-il convaincant sur un portable sous Windows ?"
    a: "Seulement auprès de ceux qui ignorent que le portable tourne sous Windows. Il marche le mieux sur une machine dont on s’attend déjà à ce qu’elle tourne sous Linux, dans une salle informatique, ou comme scène dans une vidéo."
updated: '2026-10-31'
---

## L’écran de démarrage d’Ubuntu

Ubuntu est l’une des distributions Linux les plus populaires, et pendant de nombreuses années, son écran de démarrage ressemblait à ceci : le logotype Ubuntu blanc centré sur un fond aubergine foncé, avec en dessous une rangée de cinq points qui s’allument l’un après l’autre pendant le chargement du système. Cette page recrée cet écran en plein écran.

1. Appuyez sur <kbd>F</kbd>, ou sur le bouton dans le coin, pour remplir l’écran.
2. Ne touchez plus à la souris : le pointeur disparaît au bout de deux secondes.
3. Appuyez sur <kbd>Échap</kbd> pour quitter le plein écran.

Il n’y a aucun réglage à modifier, car le vrai écran n’en a pas non plus : il attend simplement avec ses points que le système soit prêt.

## Idées d’utilisation

- **Farces en salle informatique :** dans une salle ou un bureau rempli de machines sous Linux, un écran de démarrage qui ne finit jamais est une blague tout en douceur.
- **Vidéos et films :** un moment crédible d’« ordinateur qui démarre » pour une scène avec un utilisateur de Linux, une salle de serveurs ou un personnage de hacker.
- **Enseignement :** présentez Linux à une classe avec l’écran que beaucoup découvrent en installant Ubuntu pour la première fois.
- **Nostalgie :** les utilisateurs de longue date d’Ubuntu reconnaîtront les points des versions des années 2010.

## Masquer complètement le navigateur

Le mode plein écran masque le navigateur sur la plupart des systèmes, mais pour une salle informatique ou un affichage qui reste longtemps allumé, le mode kiosque est encore plus propre. Sous Linux, lancez Chromium ou Google Chrome avec l’option `--kiosk` suivie de l’adresse de cette page : l’écran de démarrage remplit tout l’affichage, sans onglets, sans barre d’adresse ni bouton de sortie ; fermez-le avec <kbd>Alt</kbd> + <kbd>F4</kbd>. Dans Firefox, <kbd>F11</kbd> offre un affichage plein écran similaire.

## Ce qui se passe derrière un vrai écran de démarrage Ubuntu

Sur un vrai système, l’écran de démarrage est dessiné par un programme appelé Plymouth, qui masque les messages texte affichés pendant le démarrage de Linux. Derrière, le noyau se charge, les pilotes détectent votre matériel et des dizaines de services démarrent. Sous Ubuntu, les mises à jour s’installent normalement pendant que vous continuez à travailler, mais certaines, comme celles du noyau, se terminent au redémarrage suivant, derrière ce même écran.

Si une vraie machine Ubuntu semble bloquée sur son écran de démarrage :

1. Appuyez sur <kbd>Échap</kbd> pour passer au journal de démarrage en mode texte et voir quelle étape est en attente.
2. Patientez quelques minutes s’il mentionne une vérification du disque ou un service réseau : les deux peuvent être lents.
3. Si le démarrage ne reprend jamais, redémarrez et ouvrez le menu GRUB (maintenez <kbd>Maj</kbd> sur les anciennes machines BIOS ou appuyez plusieurs fois sur <kbd>Échap</kbd> sur les machines UEFI), choisissez Options avancées, puis démarrez sur un noyau plus ancien ou en mode de récupération.

Pour d’autres faux écrans système, le [faux écran de mise à jour Windows](tool:windows-update) et la [mise à jour macOS](tool:macos-screen) ajoutent une progression, des minuteurs et des scénarios, et l’[écran de mise à jour Android](tool:android-update) couvre les téléphones.
