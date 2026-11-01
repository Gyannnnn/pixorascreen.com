---
status: complete
sourceHash: 3d004954ba04ab2a
title: "HEX-Bildschirmtest online – Vollbild-Vorschau für Farbcodes und Paletten"
description: "HEX-Farbcodes und 4-Farben-Paletten im Vollbild ansehen. Markenfarben nebeneinander vergleichen, Dunkelmodus-Töne wie #121212 prüfen und Palettenbilder herunterladen."
h1: "HEX-Bildschirm."
breadcrumb: "HEX-Bildschirm"
appDescription: "Exakte CSS-HEX-Farbcodes im Vollbild ansehen. Markenfarben testen, 4-Farben-Paletten vergleichen, Dunkelmodus-Töne (#121212, #000000) prüfen und Hintergrundbilder in 4K herunterladen."
lede: "Exakte HEX-Farbcodes im Vollbild ansehen, bis zu vier Farben nebeneinander vergleichen, Dunkelmodus-Töne prüfen und die Palette als Bild herunterladen."
chips:
  - "Vollbild"
  - "Helligkeit"
  - "HEX- und RGB-Eingabe"
  - "HEX kopieren"
  - "HEX-Vorlagen"
shortcuts:
  - keys: F
    label: "Vollbildmodus"
  - keys: R
    label: "Zufällige 4-Farben-Palette"
  - keys: C
    label: "Ausgewählten HEX-Code kopieren"
  - keys: D
    label: "Palettenbild herunterladen"
faqs:
  - q: "Wie ändere ich eine der vier Farben?"
    a: "Klick auf das Farbfeld, das du ändern willst; es wird zur ausgewählten Farbe. Wähl dann im Farbwähler eine neue Farbe oder gib einen HEX-, RGB- oder HSL-Wert ein. Nur der ausgewählte Streifen ändert sich, und C kopiert seinen HEX-Code."
  - q: "Welche HEX-Formate akzeptiert der Bildschirm?"
    a: "Sechsstellige Codes, mit oder ohne vorangestelltes #, etwa #7C3AED oder 7c3aed. Die dreistellige Kurzform wie #FFF und achtstellige Codes mit Transparenz werden nicht unterstützt; schreib #FFF aus als #FFFFFF."
  - q: "Warum nutzen dunkle Designs #121212 statt reinem Schwarz?"
    a: "Reines Schwarz macht Ebenen und Schatten unsichtbar und kann neben weißem Text hart wirken. Auf OLED-Bildschirmen sind rein schwarze Pixel ausgeschaltet, und wenn sie beim Scrollen wieder angehen, kann ein kurzes Schmieren entstehen. Ein sehr dunkles Grau wie #121212 vermeidet beides – deshalb empfiehlt Material Design es."
  - q: "Sieht meine Markenfarbe auf jedem Bildschirm gleich aus?"
    a: "Nicht ganz. Ein HEX-Code beschreibt eine Farbe im sRGB-Standard, aber Bildschirme unterscheiden sich in Helligkeit, Weißpunkt und Farbraum, und Wide-Gamut-Displays können Farben gesättigter wirken lassen. Wenn du die Palette im Vollbild auf mehreren Geräten prüfst, siehst du die Bandbreite, die dein Publikum sehen wird."
  - q: "Kann ich meine Palette herunterladen?"
    a: "Ja. Drück D oder die Schaltfläche „Herunterladen“, um die vier Farben als senkrechte Streifen in einem PNG zu speichern – im Querformat, Hochformat, quadratisch oder in der Auflösung deines Geräts. Der Dateiname enthält die vier HEX-Codes."
updated: '2026-10-31'
---

## Farben in voller Größe ansehen

Farben wirken in einem kleinen Farbfeld anders als auf dem ganzen Bildschirm. Ein Ton, der im Farbwähler ruhig aussieht, kann als vollflächiger Hintergrund schreiend wirken, und zwei Farben, die als Punkte klar verschieden sind, können auf großen Flächen ineinanderlaufen. Der HEX-Bildschirm zeigt bis zu vier Farben als hohe Streifen über das ganze Display, damit du sie in der Größe beurteilen kannst, in der sie wirklich eingesetzt werden.

Er startet mit einer Beispielpalette: fast schwarzes `#171717`, Violett `#7C3AED`, knalliges Pink `#FF0080` und Bernstein `#F9CB28`.

1. Klick auf das Farbfeld eines Streifens, um ihn auszuwählen, und gib dann einen HEX-Code ein oder wähl eine Farbe.
2. Wiederhole das für die anderen Streifen oder drück <kbd>R</kbd>, um mit einer zufälligen Palette zu beginnen.
3. Drück <kbd>F</kbd> für das Vollbild und betrachte die Palette aus normalem Abstand.
4. Drück <kbd>C</kbd>, um den Code der ausgewählten Farbe zu kopieren, und <kbd>D</kbd>, um die Palette als Bild zu speichern.

## Eine Marken- oder Interface-Palette prüfen

- **Auf mehreren Geräten vergleichen.** Öffne dieselbe Palette auf Laptop, Handy und Fernseher. Farben, die auf einem Bildschirm harmonieren, können sich auf einem anderen beißen oder verwaschen wirken.
- **Auf Nachbarfarben achten.** Zwei gesättigte Farben nebeneinander, etwa Rot neben Blau, scheinen an ihrer Kante zu flimmern. Große Streifen machen das leicht sichtbar, bevor es in einem Design landet.
- **Die dunklen Töne prüfen.** Fast schwarze Töne, die auf einem guten Monitor klar verschieden sind, können auf einem günstigeren Bildschirm verschmelzen. Wenn zwei dunkle Streifen gleich aussehen, gib ihnen mehr Kontrast.
- **An den Textkontrast denken.** Die Streifen zeigen, wie Farben als Flächen zusammenwirken, aber lesbarer Text braucht außerdem genug Kontrast zum Hintergrund. Prüf Text-Hintergrund-Paare mit einem WCAG-Kontrastprüfer.

## Dunkelmodus-Töne

Die Vorlagenzeile enthält die zwei gängigsten Hintergründe für den Dunkelmodus. **OLED-Schwarz** (`#000000`) schaltet OLED-Pixel vollständig ab. **Dunkelmodus** (`#121212`) ist das sehr dunkle Grau, das Material Design empfiehlt: Es hält Schatten und erhöhte Flächen sichtbar, wirkt neben weißem Text weicher und vermeidet das leichte Schmieren, das manche OLED-Bildschirme zeigen, wenn rein schwarze Pixel beim Scrollen angehen. Zeig beide nebeneinander an, um zu sehen, welcher Ton zu deinem Design passt. Die Vorlagen enthalten außerdem ein kräftiges Blau (`#0070F3`) und Weiß, und die Schaltfläche „4-Farben-Palette“ stellt die Startpalette wieder her.

## So funktionieren HEX-Codes

Ein HEX-Code wie `#7C3AED` besteht aus drei Ziffernpaaren für Rot, Grün und Blau, jeweils von `00` (aus) bis `FF` (voll). `#FF0000` ist also reines Rot, `#000000` Schwarz und `#FFFFFF` Weiß. Jedes Paar ist eine Zahl von 0 bis 255 im Sechzehnersystem, deshalb lässt sich dieselbe Farbe auch als RGB `124, 58, 237` schreiben.

Um den Bildschirm mit einer statt vier Farben zu füllen, nutze den [benutzerdefinierten Farbbildschirm](tool:custom-color-screen). Für einen weichen Übergang zwischen zwei Farben zeigt der [Farbverlauf-Bildschirm](tool:gradient-screen) den Verlauf samt etwaigem Banding, und der [RGB-Bildschirm](tool:rgb-screen) vergleicht die reinen Grundfarben des Displays.
