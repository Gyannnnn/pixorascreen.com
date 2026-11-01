---
status: complete
sourceHash: a373973fc4700de1
title: "Grauer Bildschirm online – kostenloses Vollbild-Tool"
description: "Ein neutrales Vollbild-Mittelgrau (#808080), um ungleichmäßige Hintergrundbeleuchtung, den Dirty-Screen-Effekt, Farbstiche und OLED-Einbrennen zu erkennen – plus Checks knapp über Schwarz."
h1: "Grauer Bildschirm."
breadcrumb: "Grauer Bildschirm"
appDescription: "Eine neutrale graue Vollbildfläche für Gleichmäßigkeit, Helligkeitsbalance und Mitteltonprüfungen am Display. Im Vollbild öffnen, Helligkeit anpassen und dein Display testen."
lede: "Ein neutrales Vollbild-Mittelgrau (#808080), um ungleichmäßige Hintergrundbeleuchtung, den Dirty-Screen-Effekt, Farbstiche und OLED-Einbrennen zu erkennen, die helle Farben verbergen."
chips:
  - "Vollbild"
  - "Helligkeit"
  - "HEX kopieren"
  - "RGB kopieren"
  - "RGB-Eingabe"
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
  - q: "Warum heißt #808080 50-%-Grau, wenn es nicht halb so hell aussieht?"
    a: "Der Wert liegt genau zwischen Schwarz und Weiß, aber Bildschirme nutzen eine Gamma-Kodierung: #808080 gibt tatsächlich nur etwa 22 % des Lichts von vollem Weiß ab. Für das Auge wirkt es trotzdem wie ein mittleres Grau, weil auch unsere Helligkeitswahrnehmung nicht linear ist."
  - q: "Welche Graustufe zeigt den Dirty-Screen-Effekt am besten?"
    a: "Meist dunklere Grautöne. Beginn mit dem Mittelgrau dieser Seite und gib dann 333333 (etwa 20 % Grau) und 1A1A1A (etwa 10 %) in das HEX-Feld ein. Schwache senkrechte oder waagerechte Streifen, die stehen bleiben, wenn du den Kopf bewegst, sind der Dirty-Screen-Effekt."
  - q: "Kann ein grauer Bildschirm OLED-Einbrennen zeigen?"
    a: "Ja. Einbrennen ist auf einem gleichmäßigen Mittelgrau am leichtesten zu sehen: Der schwache Umriss einer Statusleiste, eines Logos oder einer Tastatur erscheint als etwas dunklere oder eingefärbte Form. Der OLED-Burn-in-Test geht mehrere Graustufen durch und bietet ein bewegtes Muster gegen Nachbilder."
  - q: "Was ist Mura?"
    a: "Mura ist das japanische Wort für Ungleichmäßigkeit und bezeichnet fleckige oder wolkige Stellen in einem Panel, die aus der Herstellung stammen. Es zeigt sich am besten auf gleichmäßigem Grau und ist eine Eigenschaft des einzelnen Panels, ändert sich also nicht durch Einstellungen."
  - q: "Kann ich einen grauen Bildschirm als neutralen Hintergrund für die Farbarbeit nutzen?"
    a: "Ja. Bildbearbeiter umgeben Bilder mit neutralem Grau, weil eine farbige Umgebung unser Farburteil verschiebt. Ein grauer zweiter Bildschirm oder ein von dieser Seite heruntergeladenes graues Hintergrundbild hält den Bereich um deine Arbeit neutral."
updated: '2026-10-31'
---

## Warum Mittelgrau findet, was helle Farben verbergen

Weiß und Schwarz sind die Extreme dessen, was ein Display zeigen kann, und viele Panels sehen genau dort am besten aus. Fehler in der Helligkeits- und Farbgleichmäßigkeit fallen in der Mitte des Bereichs am ehesten auf, wo das Panel überall gleichzeitig eine exakte Zwischenstufe halten muss. Diese Seite füllt den Bildschirm mit `#808080`, dem klassischen 50-%-Grau, das mit gleichen Anteilen Rot, Grün und Blau perfekt neutral ist.

1. Schalte Nachtmodus, Night Shift oder jeden Augenschutzmodus aus, damit das Grau neutral bleibt.
2. Drücke <kbd>F</kbd> für das Vollbild und dunkle den Raum etwas ab.
3. Betrachte den ganzen Bildschirm von deinem normalen Platz aus und dann aus größerer Entfernung.
4. Wiederhole das mit einem dunkleren Grau wie `333333`, das du in das HEX-Feld eingibst.

## Worauf du achten solltest

### Ungleichmäßige Helligkeit und Vignettierung

Dunklere Ecken oder Ränder oder eine Seite, die heller ist als die andere, sind bei seitlich beleuchteten LCD-Monitoren und Laptops häufig. Auf Grau sieht man sie viel deutlicher als auf Weiß.

### Der Dirty-Screen-Effekt

Auf großen LCD- und OLED-Fernsehern nennt man schwache senkrechte oder waagerechte Streifen, die stehen bleiben, wenn du den Kopf bewegst, den Dirty-Screen-Effekt. Er fällt vor allem bei Sportübertragungen mit großen einfarbigen Flächen auf, etwa einem Fußballfeld oder einer Eisfläche, und auf dunkleren Grautönen.

### Farbstiche

Ein wirklich neutrales Grau sollte überall dieselbe Farbe haben. Bereiche, die ins Rosa, Grün oder Blau kippen, sind Fehler in der Farbgleichmäßigkeit; auf Grau lassen sie sich leichter beurteilen als auf Weiß, weil das Auge auf mittleren Stufen empfindlicher für Farbstiche ist.

### Mura und Clouding

Wolkige oder fleckige Stellen aus der Herstellung nennt man Mura. Sie sind eine Eigenschaft des einzelnen Panels, deshalb lassen sie sich mit Einstellungen nicht beseitigen.

### OLED-Einbrennen

Schwache Formen einer Statusleiste, eines Logos oder einer Bildschirmtastatur zeigen sich auf Grau als etwas dunklere oder eingefärbte Umrisse. Der [OLED-Burn-in-Test](tool:oled-burn-in-test) geht mehrere Graustufen durch und enthält ein bewegtes Muster, um vorübergehende Nachbilder zu löschen.

## Grautöne knapp über Schwarz

OLED-Bildschirme haben manchmal Probleme mit den dunkelsten Grautönen knapp über Schwarz und zeigen dort Flecken oder ein leichtes Flackern. Gib nacheinander `0A0A0A`, `141414` und `1A1A1A` in das HEX-Feld ein. Jeder Wert sollte als gleichmäßige, etwas hellere Stufe erscheinen. Der [schwarze Bildschirm](tool:black-screen) prüft reines Schwarz, und der [Farbverlauf-Bildschirm](tool:gradient-screen) zeigt einen weichen Verlauf, auf dem Banding – sichtbare Stufen zwischen Farbtönen – auffällt.

## Ein neutrales Grau für die Farbarbeit

Foto- und Videobearbeiter umgeben Bilder aus gutem Grund mit neutralem Grau: Ein farbiger Hintergrund verschiebt, wie wir die Farben daneben wahrnehmen. Ein grauer zweiter Monitor oder ein mit der Schaltfläche „Herunterladen“ gespeichertes graues Hintergrundbild hält deine Umgebung beim Bearbeiten neutral. Für eine vollständige Panelprüfung in einem Durchgang starte den [Pixelfehler-Test mit sechs Farben](tool:dead-pixel-test), der Grau zusammen mit den Grundfarben enthält.
