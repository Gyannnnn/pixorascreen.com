---
status: complete
sourceHash: 86b94a5e7f473b83
title: "Roter Bildschirm – kostenloser Vollbild-Test für Pixelfehler | PixoraScreen"
description: "Kostenloser Rotbild-Test, um tote Pixel und Fehler des roten Subpixels zu finden. Auch als Rotlicht-Bildschirm für die Nachtsicht und angenehmes Sehen nutzbar. Im Vollbild, mit einstellbarer Helligkeit."
h1: "Roter Bildschirm: Pixelfehler-Test und Rotlicht-Bildschirm"
breadcrumb: "Roter Bildschirm"
appDescription: "Kostenloser Rotbild-Test, um tote Pixel und Fehler des roten Subpixels zu finden. Auch als Rotlicht-Bildschirm für die Nachtsicht und angenehmes Sehen nutzbar. Im Vollbild, mit einstellbarer Helligkeit."
lede: "Ein sattes Vollbild-Rot (#FF0000), um die roten Subpixel deines Displays zu prüfen – und gedimmtes Rotlicht für die Sternbeobachtung, nächtliches Lesen und Lichteffekte im Video."
chips:
  - "Vollbild"
  - "Helligkeit"
  - "HEX kopieren"
  - "RGB kopieren"
  - "HSL-Eingabe"
shortcuts:
  - keys: F
    label: "Vollbildmodus"
  - keys: R
    label: "Zufällige Farbe"
  - keys: C
    label: "Aktuelle Farbe kopieren"
  - keys: D
    label: "Bild herunterladen"
faqs:
  - q: "Was zeigt ein Rotbild-Test, was ein weißer Bildschirm nicht zeigt?"
    a: "Rot schaltet in jedem Pixel nur den roten Subpixel ein. Ein toter oder schwacher roter Subpixel kann sich in einem weißen Pixel verstecken, weil Grün und Blau daneben weiter leuchten – auf einer vollroten Fläche erscheint er dagegen als dunkler Punkt."
  - q: "Was bedeutet ein gelber oder rosa Punkt auf dem roten Bildschirm?"
    a: "Dass ein anderer Subpixel dauerhaft leuchtet. Rot plus ein hängender grüner Subpixel ergibt Gelb, Rot plus ein hängender blauer Subpixel ergibt Magenta oder Rosa. Ein schwarzer Punkt bedeutet, dass der rote Subpixel selbst ausgefallen ist."
  - q: "Hilft ein roter Bildschirm, die Nachtsicht zu erhalten?"
    a: "Nur wenn er gedimmt ist. Die Stäbchen, mit denen deine Augen im Dunkeln sehen, sind für tiefes Rot am unempfindlichsten – deshalb lesen Astronomen ihre Karten bei Rotlicht. Stell die Helligkeit deines Geräts auf das Minimum und den Regler dieser Seite auf 20 % oder wähl im benutzerdefinierten Farbbildschirm ein dunkleres Rot wie #400000."
  - q: "Ist ein roter Bildschirm nachts besser als ein weißer?"
    a: "Rotes Licht enthält keine der blauen Wellenlängen, die Melatonin am stärksten unterdrücken, deshalb stört ein gedimmter roter Bildschirm die Abendroutine weniger als ein heller weißer. Jeder helle Bildschirm nah am Gesicht kann dich trotzdem wach halten, also halte ihn dunkel und auf Abstand."
  - q: "Warum sieht mein ganzer Bildschirm rot oder rosa aus?"
    a: "Prüf zuerst die Einstellungen. Nachtmodus oder Night Shift auf voller Stärke, ein Farbfilter oder eine Farbtönung in den Bedienungshilfen oder eine Farbvoreinstellung des Monitors können den Bildschirm einfärben. Flackert die Tönung oder ändert sie sich, wenn du das Kabel bewegst, ist wahrscheinlich ein beschädigtes Videokabel oder ein lockerer Stecker die Ursache."
  - q: "Wie mache ich den Bildschirm meines iPhones dauerhaft rot?"
    a: "Öffne Einstellungen, Bedienungshilfen, Anzeige & Textgröße, Farbfilter. Aktiviere Farbfilter, wähle Farbtönung und schieb Intensität und Farbton auf das Maximum. Du kannst die Funktion dem Kurzbefehl der Bedienungshilfen hinzufügen, sodass ein Dreifachklick auf die Seitentaste die rote Tönung ein- und ausschaltet."
updated: '2026-10-31'
---

## So machst du einen Rotbild-Test

Diese Seite füllt das Display mit reinem Rot (`#FF0000`). Jeder Pixel eines LCD- oder OLED-Bildschirms besteht aus einem roten, einem grünen und einem blauen Subpixel, und reines Rot schaltet nur die roten ein. Damit ist es die sauberste Methode, einen einzelnen Farbkanal zu prüfen – etwas, das ein [weißer Bildschirm](tool:white-screen) oder ein [schwarzer Bildschirm](tool:black-screen) nicht kann.

1. Reinige den Bildschirm, damit Staub nicht für einen Fehler gehalten wird.
2. Erhöhe die Helligkeit deines Geräts, öffne diese Seite und drücke <kbd>F</kbd> für das Vollbild.
3. Suche den Bildschirm langsam und aus der Nähe Ecke für Ecke ab. Bei Smartphones und hochauflösenden Laptops dient eine auf das Glas gezoomte Handykamera als Lupe.
4. Merke dir die Position jedes Punkts, der nicht dasselbe Rot hat wie seine Umgebung, und prüfe dieselbe Stelle dann auf dem [grünen Bildschirm](tool:green-screen) und dem [blauen Bildschirm](tool:blue-screen).

## Was ein roter Bildschirm zeigt

### Tote oder schwache rote Subpixel

Ein schwarzer Punkt auf Rot bedeutet, dass der rote Subpixel an dieser Stelle nicht leuchtet. Ein sichtbar dunklerer roter Punkt bedeutet, dass der Subpixel schwach ist. Beides ist bei normalen Inhalten schwer zu sehen, weil die beiden anderen Subpixel des Pixels ihn ungefähr richtig aussehen lassen.

### Hängende grüne oder blaue Subpixel

Jede zusätzliche Farbe, die sich ins Rot mischt, weist auf einen anderen hängenden Subpixel hin. Ein gelber Punkt bedeutet, dass ein grüner Subpixel dauerhaft leuchtet; ein magentafarbener oder rosa Punkt, dass es ein blauer ist. Der [Pixelfehler-Test mit sechs Farben](tool:dead-pixel-test) bestätigt die Diagnose, indem er alle Kanäle durchschaltet.

### Ungleichmäßige Farbe auf dem Panel

Rot ist auf LCD-Bildschirmen ein strenger Test der Gleichmäßigkeit, weil Verschiebungen ins Orange oder Rosa in einem Bereich leicht auffallen. Bei OLEDs können außerdem schwache Formen statischer Elemente wie einer Taskleiste durch eine Vollfarbe schimmern, auch wenn die mittelgrauen Flächen im [OLED-Burn-in-Test](tool:oled-burn-in-test) Einbrennen deutlicher erkennen lassen.

## Rotlicht für die Nachtsicht

Nach etwa 20 bis 30 Minuten im Dunkeln schalten deine Augen auf die Stäbchen um, die sehr empfindlich für schwaches Licht sind, auf tiefes Rot aber kaum reagieren. Gedimmtes Rotlicht lässt dich eine Sternkarte, die Bedienelemente einer Kamera oder eine Buchseite sehen, ohne diese Anpassung aufzuheben – deshalb nutzen Astronomen und Camper rote Taschenlampen. So nutzt du diese Seite dafür:

- Stell die Helligkeit deines Geräts auf das Minimum.
- Stell den Helligkeitsregler dieser Seite auf 20 %.
- Für noch sanfteres Licht öffne den [benutzerdefinierten Farbbildschirm](tool:custom-color-screen) und gib ein dunkles Rot wie `#400000` ein.

Ein heller roter Bildschirm blendet trotzdem. Der Nutzen entsteht durch rotes Licht auf niedriger Stufe.

## Weitere Einsatzmöglichkeiten

- **Stimmungs- und Partylicht:** Ein Fernseher oder Monitor in vollflächigem Rot taucht einen Raum oder ein Schreibtisch-Setup in Farbe.
- **Videoeffekte:** Ein roter Bildschirm knapp außerhalb des Bildausschnitts gibt deinem Motiv ein rotes Kantenlicht für Alarm-, Horror- oder Club-Szenen.
- **Beamer-Check:** Eine satte Grundfarbe zeigt, ob jede Farbe im Bild des Projektors die Ränder gleichmäßig erreicht.
- **Bilder:** Drücke <kbd>D</kbd>, um ein rotes PNG in 1920×1080, 1080×1920, 1080×1080 oder in der Auflösung deines Bildschirms herunterzuladen.
