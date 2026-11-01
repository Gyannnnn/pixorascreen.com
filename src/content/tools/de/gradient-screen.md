---
status: complete
sourceHash: 1d6c9a7e21d832dd
title: "Farbverlauf-Bildschirm online – Vollbild-Test für Banding und Kalibrierung"
description: "Ein weicher Zweifarben-Verlauf im Vollbild, um Banding (Farbabstufungen) auf Monitor, Handy oder Fernseher zu erkennen – plus eigene Verlaufshintergründe zum Download als PNG."
h1: "Farbverlauf-Bildschirm."
breadcrumb: "Farbverlauf-Bildschirm"
appDescription: "Weiche Farbübergänge mit mehreren Stufen über das ganze Display für Banding-Tests, Display-Kalibrierung und stimmungsvolle Hintergründe. Im Vollbild öffnen."
lede: "Ein weicher Zweifarben-Verlauf im Vollbild, um Banding und Posterisierung auf jedem Display zu erkennen und eigene Verlaufshintergründe und Hintergrundbilder zu erstellen."
chips:
  - "Vollbild"
  - "Helligkeit"
  - "Farbe kopieren"
  - "Hintergrundbild herunterladen"
  - "Ambient-Modus"
shortcuts:
  - keys: F
    label: "Vollbildmodus"
  - keys: R
    label: "Zufälliger Verlauf"
  - keys: C
    label: "Ausgewählte Farbe kopieren"
  - keys: D
    label: "Bild herunterladen"
faqs:
  - q: "Was ist Banding?"
    a: "Von Banding spricht man, wenn ein weicher Farbübergang sichtbare Stufen oder Streifen statt eines nahtlosen Verlaufs zeigt. Das passiert, wenn ein Bildschirm, eine Datei oder ein Video nicht genug Zwischentöne darstellen kann: Benachbarte Töne werden auf denselben Wert gerundet und bilden Streifen."
  - q: "Ist etwas Banding auf jedem Bildschirm normal?"
    a: "Ja, bei kontrastarmen Verläufen. Ein normales 8-Bit-Signal hat 256 Stufen pro Farbkanal, daher hat ein Übergang zwischen zwei ähnlichen Farben über den ganzen Bildschirm vielleicht nur ein paar Dutzend unterscheidbare Stufen. Gleichmäßige, neutrale Stufen sind zu erwarten; ungleichmäßige, eingefärbte oder sehr breite Streifen deuten auf das Display oder seine Einstellungen hin."
  - q: "Warum zeigt mein Monitor mehr Banding als mein Handy?"
    a: "Häufige Gründe sind ein 6-Bit-Panel, das 8-Bit-Farbe simuliert, ein eingeschränkter RGB-Bereich oder ein falsches Farbprofil am Computer, dynamischer Kontrast oder Bildverbesserungen am Monitor und ein starkes Farbmanagement. Prüf zuerst den Bildmodus des Monitors und die Ausgabeeinstellungen des Grafiktreibers."
  - q: "Kann ich einen eigenen Verlauf erstellen?"
    a: "Ja. Klick auf eines der beiden Farbfelder, um eine neue Farbe zu wählen, oder gib einen HEX-, RGB- oder HSL-Wert ein. Drück R für einen zufälligen Zweifarben-Verlauf und speichere das Ergebnis mit der Schaltfläche „Herunterladen“ als PNG."
  - q: "Sieht der heruntergeladene Verlauf genauso aus wie auf dem Bildschirm?"
    a: "Das PNG verwendet dieselben zwei Farben, von Ecke zu Ecke im gewählten Format gezeichnet (Querformat, Hochformat, quadratisch oder in der Auflösung deines Geräts). Bildbetrachter und soziale Netzwerke können es komprimieren, und Kompression erzeugt eigenes Banding – teile daher nach Möglichkeit die Originaldatei."
updated: '2026-10-31'
---

## So prüfst du deinen Bildschirm auf Banding

Ein Farbverlauf ist das schwierigste Bild, das ein Display sauber darstellen muss: Jede Pixelspalte braucht einen etwas anderen Farbton, und jede Abkürzung im Panel oder in der Signalkette macht aus dem weichen Übergang sichtbare Streifen. Diese Seite zeichnet einen diagonalen Verlauf zwischen zwei Farben, von einem kräftigen Blau (`#007CF0`) bis zu Cyan (`#00DFD8`).

1. Schalte Nachtmodus, Blaulichtfilter und jeden „lebendigen“ Bildmodus oder dynamischen Kontrast aus.
2. Drücke <kbd>F</kbd> für das Vollbild und betrachte den Bildschirm aus deinem normalen Sitzabstand.
3. Achte auf deutliche Streifen quer durch den Verlauf und auf Streifen mit rosa oder grünem Stich.
4. Probier dann einen anspruchsvollen Verlauf: Klick auf das erste Farbfeld und gib `000000` ein, dann auf das zweite und gib `333333` ein. In dunklen, kontrastarmen Übergängen kann sich Banding am schlechtesten verstecken.

## So deutest du, was du siehst

In einem 8-Bit-Signal hat jeder Farbkanal 256 Stufen. Ein Übergang von `#000000` nach `#333333` hat zwischen seinen Enden nur 51 Stufen. Auf einem 1920 Pixel breiten Bildschirm ist jede Stufe also etwa 30 bis 40 Pixel breit, und bei genauem Hinsehen erkennt man sie auf jedem Bildschirm. Das ist Mathematik, kein Fehler. Auf ein Problem deuten hin:

- **Ungleichmäßige Stufen**, bei denen manche Streifen viel breiter sind als andere.
- **Farbige Stufen**, wenn ein grauer Verlauf rosa, grüne oder violette Streifen zeigt.
- **Fleckige Stellen** in einer sonst glatten Fläche, ein Zeichen für starke Kompression oder Bildbearbeitung.
- **Deutlich mehr Banding als auf einem anderen Bildschirm** mit denselben Farben.

## Häufige Ursachen und Lösungen

| Ursache | Was du tun kannst |
|---|---|
| 6-Bit-Panel mit Dithering | Meist bei günstigen Laptops und Monitoren; nicht behebbar, erklärt aber das Ergebnis |
| Eingeschränkter RGB-Bereich (16–235) | Stell die Ausgabe des Grafiktreibers für einen Computermonitor auf vollen Bereich |
| Bildverbesserungen | Schalte dynamischen Kontrast, „lebendige“ Modi und Kantenschärfung aus |
| Falsches Farbprofil | Setz die Farbeinstellungen des Monitors und das Anzeigeprofil des Betriebssystems zurück |
| Komprimierte Videos oder Bilder | Banding in Streams und JPEG-Dateien stammt aus der Datei, nicht vom Bildschirm |

## Verlaufshintergründe erstellen

Dasselbe Tool erstellt schlichte, saubere Hintergrundbilder mit Farbverlauf. Klick auf ein Farbfeld, um jede Farbe zu wählen, drück <kbd>R</kbd> für ein zufälliges Paar und lade das Ergebnis im Querformat, Hochformat, quadratisch oder in deiner Bildschirmauflösung herunter. Übergänge zwischen benachbarten Farbtönen, etwa von Blau zu Cyan oder von Orange zu Rosa, wirken weicher und zeigen weniger Banding als Übergänge zwischen Gegenfarben, die in der Mitte durch ein trübes Grau laufen. Für eine einzelne Volltonfarbe nutze den [benutzerdefinierten Farbbildschirm](tool:custom-color-screen); um vier Farben nebeneinander zu vergleichen, zeigt der [HEX-Bildschirm](tool:hex-screen) sie als Streifen.

Banding ist nur eine von mehreren Displayprüfungen. Defekte Pixel findest du am besten mit dem [Pixelfehler-Test mit sechs Farben](tool:dead-pixel-test), ungleichmäßige Helligkeit auf dem gleichmäßigen [grauen Bildschirm](tool:grey-screen).
