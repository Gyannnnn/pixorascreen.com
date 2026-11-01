---
status: complete
sourceHash: 0603e05d7fc4787c
title: "Matrix-Bildschirm – digitaler Regen online und anpassbarer Matrix-Effekt"
description: "Der fallende grüne Code aus Matrix im Vollbild, mit Katakana, Binärcode oder deinem eigenen Text, 6 Farbpaletten, einstellbarem Tempo, Dichte und Schweif sowie einem Ambient-Synth."
h1: "Matrix-Bildschirm."
breadcrumb: "Matrix-Bildschirm"
appDescription: "Gestalte einen Online-Matrix-Bildschirm mit fallendem digitalem Regen, Neonfarben, Cyberpunk-Klangflächen und deinem eigenen Namen im Code. Vollbild-Matrix-Effekt für Desktop, Laptop, Monitor und Fernseher – ohne Installation."
lede: "Der fallende grüne Code aus Matrix im Vollbild, mit Katakana, Binärcode, Buchstaben oder deinen eigenen Worten, sechs Farbpaletten, einstellbarem Tempo, Dichte und Schweif sowie einem Ambient-Synth-Soundtrack."
chips:
  - "Vollbildmodus"
  - "eigener Name/Text"
  - "Farbthemen"
  - "Regentempo und Dichte"
  - "Schriftgröße und Leuchten"
shortcuts:
  - keys: F
    label: "Vollbild"
  - keys: Leertaste
    label: "Anpassungsfeld ein- oder ausblenden"
  - keys: M
    label: "Ambient-Ton an oder aus"
  - keys: C
    label: "Zeichentyp wechseln"
  - keys: R
    label: "Optionen zurücksetzen"
  - keys: Esc
    label: "Vollbild beenden"
faqs:
  - q: "Welche Zeichen nutzt der Original-Matrix-Code?"
    a: "Der digitale Regen im Film besteht vor allem aus gespiegelten japanischen Halbbreiten-Katakana, gemischt mit Zahlen und ein paar lateinischen Buchstaben. Der Modus „Klassische Matrix“ auf dieser Seite nutzt denselben Katakana-Stil; drück C, um zu Binärcode, normalen Buchstaben oder deinem eigenen Text zu wechseln."
  - q: "Kann der Code meinen Namen oder eine Nachricht schreiben?"
    a: "Ja. Öffne die Einstellungen mit der Leertaste, wähl „Eigener Text“ und gib deinen Text ein. „Der Reihe nach buchstabiert“ lässt die Buchstaben in Folge fallen, sodass sich die Wörter in den Spalten lesen lassen, „Zufällige Buchstaben“ verteilt dieselben Buchstaben zufällig."
  - q: "Ist der Matrix-Bildschirm schlecht für einen OLED-Bildschirm?"
    a: "Er ist recht schonend. Der Hintergrund ist schwarz, die meisten Pixel bleiben also aus, und die Zeichen bleiben nie an einer Stelle. Wie bei jedem Bildschirm, der stundenlang läuft: Halte die Helligkeit moderat und schalte das Display aus, wenn niemand zusieht."
  - q: "Gibt es Ton?"
    a: "Nur wenn du willst. Der Ambient-Synthesizer erzeugt im Browser ein tiefes, atmosphärisches Brummen. Drück M, um ihn ein- oder auszuschalten, und stell mit dem Lautstärkeregler den Pegel ein."
  - q: "Warum wirkt der Code spärlich oder überladen?"
    a: "Das hängt von Spaltendichte, Schriftgröße und Bildschirmgröße ab. Kleinere Schrift und höhere Dichte füllen einen großen Monitor; auf dem Handy hält eine größere Schrift mit geringerer Dichte die Zeichen lesbar."
updated: '2026-10-31'
---

## Der digitale Regen aus Matrix

In Matrix (1999) wird die Welt innerhalb der Simulation als Spalten leuchtend grüner Zeichen dargestellt, die über einen schwarzen Bildschirm regnen. Der Effekt wurde zu einem der bekanntesten Bilder der Filmgeschichte und seitdem zum Kürzel für Hacker, Code und Computer. Diese Seite bildet ihn in deinem Browser nach: Dutzende Spalten fallen mit unterschiedlicher Geschwindigkeit, jede angeführt von einem hellen Zeichen und mit einem Schweif, der in dunkleres Grün ausläuft.

1. Drücke <kbd>F</kbd> für das Vollbild.
2. Drücke die <kbd>Leertaste</kbd>, um die Anpassung zu öffnen.
3. Wähl einen Zeichentyp und eine Farbpalette und stell dann die Regler ein.
4. Drücke erneut die <kbd>Leertaste</kbd>, um das Feld auszublenden, und lass den Code fallen.

## Zeichentypen

Drück <kbd>C</kbd>, um durch sie zu wechseln, oder wähl einen in den Einstellungen:

- **Klassische Matrix:** japanische Halbbreiten-Katakana und Ziffern, am nächsten am Film.
- **Binärcode:** nur Nullen und Einsen, für einen wörtlicheren „Computer“-Look.
- **Alphanumerisch:** Buchstaben und Zahlen.
- **Eigener Text, der Reihe nach buchstabiert:** deine eigenen Worte, Buchstabe für Buchstabe fallend, sodass sie sich entlang der Spalten lesen lassen. Gut für Namen auf einer Party oder einen Kanalnamen im Stream.
- **Eigener Text, zufällige Buchstaben:** die Buchstaben deines Textes in zufälliger Reihenfolge, für eine dezentere persönliche Note.

## Den Look feinjustieren

**Schriftgröße** (10 bis 36) legt fest, wie groß die Zeichen sind. **Regengeschwindigkeit** bestimmt, wie schnell sie fallen. **Spaltendichte** entscheidet, wie viele Spalten gleichzeitig aktiv sind, und **Schweiflänge**, wie lang der verblassende Schweif hinter jeder ist. Sechs Paletten ändern das Leuchten: Klassisches Grün, Cyberpunk-Cyan, Karminrot, Bernsteingold, Neonviolett und Regenbogen. Drück jederzeit <kbd>R</kbd>, um zu den Standardwerten zurückzukehren.

## So wird der Effekt gezeichnet

Der digitale Regen wird viele Male pro Sekunde neu gezeichnet. In jedem Frame setzt die Seite den Bildschirm auf Schwarz zurück und zeichnet jede Spalte neu: vorne ein helles „Kopf“-Zeichen, dahinter ein Schweif aus Zeichen, die umso dunkler werden, je weiter sie vom Kopf entfernt sind. Wandert der Kopf nach unten, bewegt sich die ganze Spalte mit – das wirkt wie Zeichen, die aufleuchten und dann verblassen. Die Schweiflänge bestimmt, wie viele Zeichen der Schweif hat, bevor er verschwindet, die Spaltendichte, wie viele Spalten gleichzeitig fallen. Viele klassische Versionen legen stattdessen eine halbtransparente schwarze Schicht über den vorherigen Frame; jeden Schweif ausdrücklich zu zeichnen hält die Zeichen scharf und vermeidet graue Schlieren auf hellen Bildschirmen.

## Ideen für den Einsatz

- **Hintergründe für Streams und Videos:** ein „Gleich geht’s los“-Bild oder ein Hintergrund hinter der Webcam für Tech- und Gaming-Kanäle.
- **Mottopartys und Escape Rooms:** ein Hackerversteck oder eine Sci-Fi-Kulisse, am besten mit eingeschaltetem Synth-Soundtrack.
- **Stimmung am Schreibtisch:** ein langsamer, spärlicher Regen auf einem zweiten Monitor, während du programmierst.
- **Einstieg in den Unterricht:** ein schneller visueller Aufhänger vor einer Stunde über Informatik oder Cybersicherheit.

Für einen Bildschirm, der beim Tippen echt aussehenden Code schreibt, probier den [Hacker-Typer](tool:hacker-typer). Der [Radar-Bildschirm](tool:radar-screen) bringt eine Leitstand-Anzeige mit Radarstrahl, und der [Regen-Bildschirm](tool:rain-screen) bietet die ursprüngliche, nassere Art von Regen.
