---
status: complete
sourceHash: 2b3659a5d6923178
title: "Greenscreen online – kostenloser Chroma Key im Vollbild"
description: "Kostenloser Online-Greenscreen für Chroma-Key-Videos, Streaming-Hintergründe und Displaytests. Im Vollbild, mit einstellbarer Helligkeit und auf jedem Gerät nutzbar."
h1: "Grüner Bildschirm: kostenloser Vollbild-Greenscreen für Chroma Key und Videohintergründe"
breadcrumb: "Grüner Bildschirm"
appDescription: "Kostenloser Online-Greenscreen für Chroma-Key-Videos, Streaming-Hintergründe und Displaytests. Im Vollbild, mit einstellbarer Helligkeit und auf jedem Gerät nutzbar."
lede: "Ein vollflächiger Greenscreen in reinem Chroma-Key-Grün (#00FF00), um Hintergründe in Videos, Streams und Calls auszustanzen – plus ein schneller Check der grünen Subpixel deines Displays."
chips:
  - "Vollbild"
  - "Helligkeit"
  - "HEX kopieren"
  - "RGB kopieren"
  - "HEX-Eingabe"
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
  - q: "Welcher Grünton eignet sich am besten für Chroma Key?"
    a: "Auf einem Bildschirm lässt sich reines Grün (#00FF00) sauber freistellen, weil es weit von Hauttönen entfernt ist. Gestrichene Wände und Stoffhintergründe nutzen ein dunkleres Chroma-Grün um #00B140, weil Studiolicht sie aufhellt. Zeigt deine Kamera den Bildschirm als blasses Gelbgrün, senk den Helligkeitsregler, bis er als sattes, gleichmäßiges Grün aufgenommen wird."
  - q: "Kann ich meinen Monitor in Zoom als Greenscreen nutzen?"
    a: "Ja, wenn der Bildschirm im Kamerabild die ganze Fläche hinter deinem Kopf ausfüllt. Öffne diese Seite im Vollbild auf einem großen Monitor oder Fernseher hinter dir, geh dann in Zoom zu Einstellungen, Hintergrund und Effekte, wähle einen virtuellen Hintergrund und setz das Häkchen bei „Ich habe einen Greenscreen“. In OBS kannst du stattdessen einen Chroma-Key-Filter zur Kameraquelle hinzufügen."
  - q: "Warum sehe ich Streifen oder Flackern, wenn ich den Greenscreen filme?"
    a: "Der Kameraverschluss ist nicht im Takt mit der Bildwiederholung des Bildschirms. Stell die Verschlusszeit auf die Netzfrequenz deines Landes ein, 1/60 s in 60-Hz-Regionen oder 1/50 s in 50-Hz-Regionen, oder auf ein Vielfaches davon, dann verschwinden die wandernden Streifen."
  - q: "Kann ich ein grünes Hintergrundbild herunterladen?"
    a: "Ja. Wähle Querformat (1920×1080), Hochformat (1080×1920), quadratisch (1080×1080) oder die Auflösung deines Geräts und drücke „Herunterladen“ oder die Taste D. Du bekommst ein einfarbig grünes PNG, praktisch als Platzhalterebene für eine Vorlage, die du später freistellst."
  - q: "Greenscreen oder Bluescreen – was ist besser?"
    a: "Grün ist bei Digitalkameras die übliche Wahl, weil ihre Sensoren Grün mit den meisten Details und dem geringsten Rauschen aufnehmen; es lässt sich daher mit weniger Licht sauberer freistellen. Nimm Blau, wenn dein Motiv Grün trägt oder grüne Elemente hat oder wenn sich grüne Reflexe auf der Haut schwer vermeiden lassen."
  - q: "Kann ein grüner Bildschirm mein Display auf tote Pixel prüfen?"
    a: "Ja, für den grünen Kanal. Auf einer vollgrünen Fläche erscheint ein Pixel mit ausgefallenem grünem Subpixel als schwarzer Punkt. Grün macht außerdem den Großteil der wahrgenommenen Helligkeit aus, deshalb fällt ungleichmäßige Hintergrundbeleuchtung darauf deutlich auf."
updated: '2026-10-31'
---

## So nutzt du diesen Greenscreen für Chroma Key

Diese Seite füllt dein Display mit reinem Chroma-Key-Grün (`#00FF00`). Stell den Bildschirm hinter das, was du filmst, und jedes Videoschnittprogramm oder jede Streaming-App mit Chroma-Key-Effekt kann das Grün durch einen neuen Hintergrund ersetzen. Das funktioniert am besten mit Motiven, die kleiner als der Bildschirm sind: Produkte auf dem Schreibtisch, Hände, die etwas vorführen, ein Spielzeug oder eine Figur oder eine Kopf-Schulter-Aufnahme vor einem großen Fernseher. Für Ganzkörperaufnahmen brauchst du weiterhin einen Stoff- oder gestrichenen Hintergrund, denn kein Monitor ist groß genug, um das Bild zu füllen.

1. Nimm das größte Display, das du hast, öffne diese Seite und drücke <kbd>F</kbd> für das Vollbild, damit keine Browserleisten das Grün unterbrechen.
2. Platziere das Motiv mit etwas Abstand vor dem Bildschirm, ohne ihn zu berühren. Abstand verringert das grüne Licht, das auf das Motiv zurückstrahlt.
3. Beleuchte das Motiv mit einer Lampe oder durch ein Fenster. Der Greenscreen soll der Hintergrund sein, nicht die Hauptlichtquelle.
4. Fixiere Belichtung und Weißabgleich der Kamera, damit das Grün von Bild zu Bild denselben Ton behält.
5. Wirkt das Grün in der Kamera blass oder gelblich, senk den Helligkeitsregler dieser Seite, bis es als tiefes, gleichmäßiges Grün aufgenommen wird.
6. Füge in deiner Software einen Chroma-Key-Effekt hinzu: den Chroma-Key-Filter in OBS, Ultra-Key in Premiere Pro, den 3D-Keyer in DaVinci Resolve oder Chroma Key in CapCut.

## Häufige Keying-Probleme lösen

### Grüne Ränder um Haare oder Gegenstände

Grünes Licht fällt auf das Motiv. Rück das Motiv weiter vom Bildschirm weg, senk die Bildschirmhelligkeit und nutze die Spill-Unterdrückung deines Schnittprogramms.

### Wandernde Streifen oder Flackern

Der Kameraverschluss ist nicht mit der Bildwiederholrate des Bildschirms synchron. Nutze eine Verschlusszeit von 1/60 s in 60-Hz-Ländern oder 1/50 s in 50-Hz-Ländern.

### Moiré-Muster

Feine Wellenmuster entstehen, wenn die Kamera das Pixelraster des Bildschirms auflösen kann. Öffne die Blende, damit der Hintergrund etwas weicher wird, oder geh mit der Kamera ein Stück zurück.

### Fleckiges Keying

Spiegelungen von Lampen und Fenstern auf dem Glas zerreißen das Grün. Dreh den Bildschirm etwas von hellen Lichtquellen weg oder schalte das Raumlicht aus, das sich darin spiegelt.

## Greenscreen für Streaming und Videocalls

Ein großer Monitor oder Fernseher hinter deinem Stuhl kann als Greenscreen für eine Webcam dienen, die Kopf und Schultern zeigt. Zoom bietet in den Hintergrundeinstellungen die Option „Ich habe einen Greenscreen“, die die Vollfarbe für eine schärfere Freistellung nutzt als die automatische Hintergrundentfernung. In OBS Studio klickst du mit der rechten Maustaste auf die Kameraquelle, öffnest „Filter“ und fügst „Chroma Key“ hinzu. Halte den Bildschirm hinter dir gleichmäßig beleuchtet und frei von Spiegelungen, und achte darauf, dass kein Kleidungsstück einen ähnlichen Grünton hat.

## Grün zum Testen eines Displays nutzen

Eine vollgrüne Fläche schaltet nur die grünen Subpixel ein. Ein ausgefallener erscheint als schwarzer Punkt, und weil Grün rund 70 % der vom Auge wahrgenommenen Helligkeit ausmacht, sind ungleichmäßige Hintergrundbeleuchtung und Clouding hier leichter zu sehen als auf Rot oder Blau. Vergleiche mit dem [roten Bildschirm](tool:red-screen) und dem [blauen Bildschirm](tool:blue-screen), um alle drei Kanäle zu prüfen, oder starte den [Pixelfehler-Test mit sechs Farben](tool:dead-pixel-test), der sie der Reihe nach durchgeht. Brauchst du eine andere Key-Farbe, akzeptiert der [benutzerdefinierte Farbbildschirm](tool:custom-color-screen) jeden HEX-, RGB- oder HSL-Wert.
