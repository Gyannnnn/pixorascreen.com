---
status: complete
sourceHash: 57eb745ea44d2bdc
title: "Ubuntu-Bildschirm-Simulator online – kostenloser Fake-Ubuntu-Update- und Startbildschirm"
description: "Der klassische Ubuntu-Startbildschirm im Vollbild – das Ubuntu-Logo auf Aubergine mit fünf pulsierenden Punkten – für Linux-Streiche, Videos, Vorführungen im Unterricht und Retro-Desktop-Nostalgie."
h1: "Ubuntu-Update."
breadcrumb: "Ubuntu-Update"
appDescription: "Verwandle jeden Bildschirm in einen realistischen Fake-Ubuntu-Update-Simulator mit authentischer Startanimation, Fortschrittsbalken, Neustartzyklus und der orangefarbenen Ubuntu-Terminal-Ästhetik. Kostenloses Online-Streich-Tool für Linux-Demos, Video-Requisiten und Schulungen. Vollbild, Tastenkürzel und einstellbare Helligkeit. Kein Download, keine Installation, kein Risiko."
lede: "Der klassische Ubuntu-Startbildschirm im Vollbild – das Ubuntu-Logo auf auberginefarbenem Hintergrund mit fünf pulsierenden Punkten – für Linux-Streiche, Videoszenen und Vorführungen im Unterricht."
chips:
  - "Vollbild"
  - "authentische Startanimation"
  - "nichtlinearer Fortschritt"
  - "Neustartzyklus"
  - "Helligkeit"
shortcuts:
  - keys: F
    label: "Vollbild"
  - keys: Esc
    label: "Vollbild beenden"
faqs:
  - q: "Was ist dieser Ubuntu-Bildschirm?"
    a: "Er bildet den Startbildschirm nach, den Ubuntu viele Jahre lang beim Hochfahren oder beim Abschluss von Updates gezeigt hat: das weiße Ubuntu-Logo auf dunklem Aubergine mit fünf Punkten, die nacheinander aufleuchten. Er ist rein visuell, führt kein Linux aus und verändert nichts an deinem Computer."
  - q: "Hat er Einstellungen wie die Windows- und Mac-Update-Bildschirme?"
    a: "Nein. Er zeigt den Startbildschirm mit seinen kreisenden Punkten – mehr zeigt der echte Bildschirm auch nicht. Für Prozentanzeige, Szenarien und Timer nutze den Fake-Windows-Update-Bildschirm oder das macOS-Update."
  - q: "Warum verwendet Ubuntu dieses Lila?"
    a: "Aubergine, ein dunkles Lila, gehört seit Anfang der 2010er zur visuellen Identität von Ubuntu – auf Startbildschirmen, als Terminal-Hintergrund und im Markenauftritt, neben dem charakteristischen Orange."
  - q: "Wie sehe ich, was ein echter Ubuntu-Start hinter dem Startbildschirm macht?"
    a: "Drück Esc, während der Startbildschirm angezeigt wird. Auf einem echten Ubuntu-System wechselt die Anzeige dann vom Logo zum Text-Startprotokoll, das jeden Dienst beim Starten zeigt – die erste Anlaufstelle, wenn der Start hängt."
  - q: "Ist er auf einem Windows-Laptop überzeugend?"
    a: "Nur für Leute, die nicht wissen, dass auf dem Laptop Windows läuft. Am besten wirkt er auf einem Rechner, bei dem man ohnehin Linux erwartet, in einem Computerraum oder als Szene in einem Video."
updated: '2026-10-31'
---

## Der Ubuntu-Startbildschirm

Ubuntu ist eine der beliebtesten Linux-Distributionen, und viele Jahre lang sah ihr Startbildschirm so aus: der weiße Ubuntu-Schriftzug mittig auf dunklem Aubergine, darunter eine Reihe aus fünf Punkten, die nacheinander aufleuchten, während das System lädt. Diese Seite bildet diesen Startbildschirm im Vollbild nach.

1. Drücke <kbd>F</kbd> oder die Schaltfläche in der Ecke, um den Bildschirm zu füllen.
2. Lass die Maus ruhen; der Zeiger verschwindet nach zwei Sekunden.
3. Drücke <kbd>Esc</kbd>, um das Vollbild zu beenden.

Es gibt keine Einstellungen, weil der echte Startbildschirm auch keine hat: Er wartet einfach mit seinen Punkten, bis das System bereit ist.

## Ideen für den Einsatz

- **Streiche im Computerraum:** In einem Computerraum oder Büro voller Linux-Rechner ist ein Startbildschirm, der nie fertig wird, ein sanfter Scherz.
- **Videos und Filme:** ein glaubwürdiger „Computer fährt hoch“-Moment für eine Szene mit einem Linux-Nutzer, einem Serverraum oder einer Hackerfigur.
- **Unterricht:** Stell einer Klasse Linux mit dem Bildschirm vor, den viele sehen, wenn sie Ubuntu zum ersten Mal installieren.
- **Nostalgie:** Langjährige Ubuntu-Nutzer erkennen die Punkte aus den Versionen der 2010er wieder.

## Den Browser komplett ausblenden

Der Vollbildmodus blendet den Browser auf den meisten Systemen aus, aber für einen Computerraum oder eine Anzeige, die lange läuft, ist der Kioskmodus noch sauberer. Starte unter Linux Chromium oder Google Chrome mit der Option `--kiosk`, gefolgt von der Adresse dieser Seite, und der Startbildschirm füllt das Display ohne Tabs, Adressleiste oder Schließen-Schaltfläche; beende ihn mit <kbd>Alt</kbd> + <kbd>F4</kbd>. In Firefox liefert <kbd>F11</kbd> eine ähnliche Vollbildansicht.

## Was hinter einem echten Ubuntu-Startbildschirm passiert

Auf einem echten System zeichnet ein Programm namens Plymouth den Startbildschirm und verdeckt damit die Textmeldungen, die beim Linux-Start ausgegeben werden. Dahinter lädt der Kernel, Treiber erkennen deine Hardware, und Dutzende Dienste starten. Updates werden unter Ubuntu normalerweise installiert, während du weiterarbeitest, aber manche, etwa Kernel-Updates, werden beim nächsten Neustart hinter genau diesem Bildschirm abgeschlossen.

Wenn ein echter Ubuntu-Rechner auf seinem Startbildschirm hängen zu bleiben scheint:

1. Drücke <kbd>Esc</kbd>, um zum Text-Startprotokoll zu wechseln und zu sehen, welcher Schritt wartet.
2. Warte ein paar Minuten, wenn eine Datenträgerprüfung oder ein Netzwerkdienst erwähnt wird; beides kann dauern.
3. Geht es nie weiter, starte neu und öffne das GRUB-Menü (halte auf älteren BIOS-Rechnern die <kbd>Umschalttaste</kbd> gedrückt oder tippe auf UEFI-Rechnern mehrmals <kbd>Esc</kbd>), wähl die erweiterten Optionen und starte einen älteren Kernel oder den Wiederherstellungsmodus.

Für weitere Fake-Systembildschirme ergänzen der [Fake-Windows-Update-Bildschirm](tool:windows-update) und das [macOS-Update](tool:macos-screen) Fortschritt, Timer und Szenarien, und der [Android-Update-Bildschirm](tool:android-update) deckt Handys ab.
