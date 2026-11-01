---
status: complete
sourceHash: 66a7f5f93bf25b1d
title: "Gelber Bildschirm online – kostenloses Vollbild-Tool"
description: "Ein helles Vollbild-Gelb (#FFDD00), um den Rot- und Grünkanal deines Displays zu prüfen, einen unerwünschten Gelbstich zu erkennen oder Fotos und Videos warmes, sonniges Licht zu geben."
h1: "Gelber Bildschirm."
breadcrumb: "Gelber Bildschirm"
appDescription: "Ein heller gelber Bildschirm für Sichtbarkeitstests, warmes Aufhelllicht und auffällige Vollbildfarbe. Im Vollbild öffnen, Helligkeit anpassen und dein Display testen."
lede: "Ein helles Vollbild-Gelb (#FFDD00), um den Rot- und Grünkanal deines Displays zu prüfen, es mit einem unerwünschten Gelbstich zu vergleichen und Fotos und Videos sonniges Licht zu geben."
chips:
  - "Vollbild"
  - "Helligkeit"
  - "HEX kopieren"
  - "RGB kopieren"
  - "Zufallsfarbe"
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
  - q: "Warum sieht mein ganzer Bildschirm gelb aus?"
    a: "Die häufigste Ursache ist ein Blaulichtfilter wie Nachtmodus, Night Shift oder Augenschutz, der oft zeitgesteuert ab Sonnenuntergang aktiv wird. Andere Ursachen sind eine „warme“ Farbtemperatur-Voreinstellung am Monitor, ein Lesemodus, eine alternde LCD-Hintergrundbeleuchtung oder eine mit der Zeit vergilbte Displayschutzfolie."
  - q: "Was ist der gelbe Bildschirm des Todes?"
    a: "So nennt man die gelb-weiße Fehlerseite, die ältere ASP.NET-Websites anzeigen, wenn der Servercode abstürzt – mit Fehlermeldung und Stacktrace. Sie kommt von der Website, nicht von deinem Computer, und hat mit dieser Seite nichts zu tun."
  - q: "Was bedeuten farbige Punkte auf dem gelben Bildschirm?"
    a: "Gelb mischt Rot und Grün ohne Blau. Ein grüner Punkt bedeutet einen toten roten Subpixel, ein roter oder oranger Punkt einen toten grünen Subpixel und ein fast weißer Punkt einen dauerhaft leuchtenden blauen Subpixel."
  - q: "Kann ich einen gelben Bildschirm zum Lesen am Abend nutzen?"
    a: "Gedimmtes gelbes oder bernsteinfarbenes Licht enthält viel weniger Blau als weißes Licht und ist abends deshalb angenehmer. Senk den Helligkeitsregler und die Helligkeit deines Geräts; für einen noch wärmeren Ton probier den orangen Bildschirm oder ein tiefes Bernstein im benutzerdefinierten Farbbildschirm."
  - q: "Welchen HEX-Code nutzt dieses Gelb?"
    a: "Diese Seite zeigt #FFDD00, ein leicht goldenes Gelb. Reines Bildschirmgelb ist #FFFF00, und die CSS-Farbe „gold“ ist #FFD700. Gib einen davon in das HEX-Feld ein, um zu vergleichen."
updated: '2026-10-31'
---

## Einen Gelbbild-Check durchführen

Gelb ist auf einem Bildschirm keine eigene Farbe: Es entsteht, wenn die roten und grünen Subpixel gemeinsam leuchten und Blau ausgeschaltet ist. Diese Seite nutzt `#FFDD00`, ein warmes, leicht goldenes Gelb. Weil zwei Kanäle beteiligt sind, zeigt eine gelbe Fläche schnell, ob Rot und Grün über das ganze Panel ausgewogen sind. Eine Stelle, die ins Orange driftet, hat dort schwächeres Grün; eine grünlich wirkende Stelle hat schwächeres Rot.

1. Schalte zuerst Nachtmodus, Night Shift oder jeden Augenschutzmodus aus. Sie schieben alle Farben Richtung Gelb und würden ungleichmäßige Bereiche verdecken.
2. Drücke <kbd>F</kbd> für das Vollbild und betrachte den Bildschirm aus normalem Abstand.
3. Geh dann näher heran und achte auf einzelne Punkte: Grün bedeutet einen toten roten Subpixel, Rot oder Orange einen toten grünen Subpixel und fast Weiß einen hängenden blauen Subpixel.

Gelb kann keinen toten blauen Subpixel zeigen, weil Blau ausgeschaltet ist. Das übernimmt der [blaue Bildschirm](tool:blue-screen), und der [Pixelfehler-Test mit sechs Farben](tool:dead-pixel-test) prüft alle Kanäle der Reihe nach.

## Ist dein Bildschirm gelb, obwohl er es nicht sein sollte?

Wirkt dein normaler Desktop gelb, öffne den [weißen Bildschirm](tool:white-screen) und vergleiche ihn bei Tageslicht mit einem Blatt weißem Papier. Ein starker Farbstich hat meist eine dieser Ursachen:

- **Ein zeitgesteuerter Blaulichtfilter:** Nachtmodus (Windows), Night Shift (Apple) oder Augenschutz- und Lesemodi (Android).
- **Eine warme Farbvoreinstellung** am Monitor oder Fernseher. Such stattdessen eine Option wie 6500K, „Normal“ oder „sRGB“.
- **True Tone oder adaptive Farbe** auf Apple-Geräten, die sich an der Farbe des Raumlichts orientiert.
- **Eine gealterte Displayschutzfolie,** die in der Sonne vergilbt ist.
- **Eine alte LCD-Hintergrundbeleuchtung.** Die Leuchtstoff-Hintergrundbeleuchtung älterer Monitore vergilbt mit den Jahren, und keine Einstellung gleicht das vollständig aus.

## Gelb als Licht und Hintergrund

- **Sonne an einem grauen Tag:** Ein Tablet in vollflächigem Gelb, etwas seitlich über einem Gesicht, bringt die Wärme von Sonnenlicht in einen Videocall oder ein Selfie. Halte die Helligkeit moderat, damit die Haut nicht fahl wirkt.
- **Produktfotos:** Ein gelber Hintergrund lässt Zitrusfrüchte, Sneaker und Verpackungen hell und fröhlich wirken, und die Schaltfläche „Herunterladen“ exportiert dieselbe Farbe als PNG für die Bearbeitung.
- **Aufmerksamkeit auf der Bühne:** Ein vollflächig gelber Bildschirm auf dem Beamer ist im Unterricht oder Meeting ein klares Signal für „Pause“ oder „Zeit ist um“.
- **Stimmungslicht:** Für ein abendliches Leuchten dimmst du ihn mit dem Regler oder wechselst zum wärmeren [orangen Bildschirm](tool:orange-screen).

Brauchst du einen anderen Ton, gib ihn im [benutzerdefinierten Farbbildschirm](tool:custom-color-screen) ein – von blassem Zitronengelb bis zu tiefem Bernstein.
