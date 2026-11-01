---
status: complete
sourceHash: 5dabf925f0493c70
title: "RGB-Bildschirmtest online – Subpixel- und Farbkalibrierung im Vollbild"
description: "Ein RGB-Bildschirmtest, der Rot, Grün und Blau nebeneinander oder einzeln im Vollbild zeigt, um die Grundfarben deines Displays zu vergleichen und jeden Subpixel-Kanal zu prüfen."
h1: "RGB-Bildschirm."
breadcrumb: "RGB-Bildschirm"
appDescription: "Mach einen RGB-Bildschirmtest online im Vollbild. Prüfe rote, grüne und blaue Subpixel, suche nach hängenden oder toten Pixeln, kontrolliere die Farbkanäle des Monitors und kalibriere Displays."
lede: "Rot, Grün und Blau nebeneinander oder einzeln im Vollbild, um die drei Grundfarben deines Displays zu vergleichen und jeden Subpixel-Kanal zu prüfen."
chips:
  - "Vollbild"
  - "Helligkeit"
  - "RGB-Subpixel-Kanäle"
  - "RGB/HEX kopieren"
  - "automatischer Farbwechsel"
shortcuts:
  - keys: F
    label: "Vollbildmodus"
  - keys: R
    label: "Reines Rot"
  - keys: G
    label: "Reines Grün"
  - keys: B
    label: "Reines Blau"
  - keys: W / K
    label: "Weiß / Schwarz"
  - keys: S
    label: "Rot, Grün und Blau nebeneinander"
  - keys: D
    label: "Bild herunterladen"
faqs:
  - q: "Was zeigt die geteilte RGB-Ansicht?"
    a: "Sie zeigt die drei Grundfarben des Displays nebeneinander in voller Stärke. Du kannst vergleichen, wie gesättigt und hell jede wirkt, eine Grundfarbe erkennen, die zu einer anderen Farbe hin kippt, und auf einen Blick sehen, ob ein Kanal ganz fehlt, denn sein Streifen wäre schwarz."
  - q: "Kann ein RGB-Test tote oder hängende Pixel finden?"
    a: "Ja, wenn du den Bildschirm mit jeweils einer Farbe füllst. Drück R, G oder B, um auf dem ganzen Panel nur diesen Subpixel leuchten zu lassen; ein toter Subpixel erscheint als schwarzer Punkt. Der Pixelfehler-Test mit sechs Farben geht dieselben Farben durch, dazu Schwarz, Weiß und Grau."
  - q: "Warum wirkt das Rot orange oder das Grün gelblich?"
    a: "Jedes Panel hat eigene Grundfarben. Wide-Gamut-Bildschirme zeigen oft sehr gesättigte, fast neonartige Grundfarben, wenn der Inhalt kein Farbmanagement hat, während manche günstigen Bildschirme Grundfarben haben, die zu Nachbarfarben hin kippen. Ein sRGB-Bildmodus bringt sie meist näher an den Standard."
  - q: "Wie kann ich die Subpixel selbst sehen?"
    a: "Öffne einen weißen oder RGB-Bildschirm und betrachte das Glas mit einer Lupe oder mit dem Makromodus beziehungsweise maximalen Zoom deiner Handykamera. Du siehst das Muster aus roten, grünen und blauen Elementen, das sich zwischen den Streifen von LCDs und den Anordnungen in OLED-Handys und -Fernsehern unterscheidet."
  - q: "Ist das ein RGB-Beleuchtungstest für Tastaturen oder LED-Streifen?"
    a: "Nein. Diese Seite testet den Bildschirm, auf dem sie geöffnet ist. Die RGB-Beleuchtung von Tastaturen und LED-Streifen wird über eigene Software gesteuert, auch wenn ein komplett roter, grüner oder blauer Bildschirm praktisch sein kann, um ihre Farben nach Augenmaß abzustimmen."
updated: '2026-10-31'
---

## So nutzt du den RGB-Bildschirm

Die Seite startet mit den drei Grundfarben nebeneinander: reines Rot (`#FF0000`), reines Grün (`#00FF00`) und reines Blau (`#0000FF`). Jede Farbe, die dein Bildschirm zeigt, wird aus diesen dreien gemischt – ein direkter Blick auf sie verrät also viel über das Panel.

- Drücke <kbd>F</kbd> für das Vollbild.
- Drücke <kbd>R</kbd>, <kbd>G</kbd> oder <kbd>B</kbd>, um den ganzen Bildschirm mit einer Grundfarbe zu füllen, <kbd>W</kbd> für Weiß und <kbd>K</kbd> für Schwarz.
- Drücke <kbd>S</kbd>, um zur Ansicht nebeneinander zurückzukehren.
- Die Schaltflächen unter der Vorschau machen dasselbe auf Touchscreens, und jeder Streifen lässt sich über sein Farbfeld auf jede beliebige Farbe ändern.

## Die drei Grundfarben vergleichen

Betrachte in der Ansicht nebeneinander jeden Streifen der Reihe nach:

- **Ist ein Streifen schwarz oder sehr dunkel?** Ein ganzer Kanal fehlt, meist wegen eines lockeren oder beschädigten Videokabels.
- **Kippt Rot ins Orange oder Grün ins Gelbe?** Die Grundfarben des Panels weichen vom Standard ab. Etwas Abweichung ist normal; ein sRGB-Bildmodus bringt sie meist näher heran.
- **Wirken die Farben neonartig, fast leuchtend?** Das ist typisch für Wide-Gamut-Monitore, die normale Inhalte ohne Farbmanagement zeigen. Fotos und Webseiten wirken dann ebenso übersättigt.
- **Ist ein Streifen deutlich dunkler als die anderen?** Grün wirkt wegen der Funktionsweise des Auges immer am hellsten und Blau am dunkelsten. Ein fast unsichtbares Blau oder ein Rot, das braun aussieht, solltest du dir aber genauer ansehen.

## Jeden Subpixel-Kanal prüfen

Füllst du den Bildschirm mit einer Grundfarbe, leuchtet auf dem ganzen Panel nur diese Art von Subpixel. Ein schwarzer Punkt auf Rot ist ein toter roter Subpixel; ein farbiger Punkt bedeutet, dass ein anderer Subpixel dauerhaft leuchtet. Für eine geführte Version mit allen sechs Testfarben und Hinweisen auf dem Bildschirm nutze den [Pixelfehler-Test mit sechs Farben](tool:dead-pixel-test), oder öffne den [roten Bildschirm](tool:red-screen), den [grünen Bildschirm](tool:green-screen) oder den [blauen Bildschirm](tool:blue-screen) für Tipps zu jeder einzelnen Farbe.

## Die Subpixel-Anordnung sehen

Unter Vergrößerung ist ein Bildschirm ein Raster aus winzigen roten, grünen und blauen Elementen, und das Muster hängt von der Technik ab:

| Displaytyp | Typische Subpixel-Anordnung |
|---|---|
| Die meisten LCD-Monitore und Laptops | Senkrechte Streifen in der Reihenfolge Rot, Grün, Blau |
| Viele OLED-Handys | Rauten- oder „PenTile“-Anordnungen mit mehr grünen als roten oder blauen Elementen |
| WOLED-Fernseher und -Monitore | Rot, Grün, Blau und ein zusätzlicher weißer Subpixel |
| QD-OLED-Fernseher und -Monitore | Rot, Grün und Blau im Dreieck angeordnet |

Um es auf deinem eigenen Bildschirm zu sehen, zeig Weiß oder die geteilte RGB-Ansicht und schau mit einer Lupe oder dem Makromodus deiner Handykamera genau hin. Die Anordnung erklärt, warum kleine Schrift auf manchen OLED-Monitoren farbige Säume zeigen kann: Die Schriftglättung der meisten Betriebssysteme geht vom klassischen RGB-Streifen aus.

## Das Muster herunterladen

Drücke <kbd>D</kbd>, um die aktuelle Ansicht als PNG zu speichern – die drei Streifen oder eine einzelne Farbe, im Querformat, Hochformat, quadratisch oder in der Auflösung deines Geräts. So hast du schnell ein Testbild, um einen Fernseher oder Beamer per USB-Stick zu prüfen.
