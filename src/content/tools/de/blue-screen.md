---
status: complete
sourceHash: 02be85950d057e7e
title: "Blauer Bildschirm online – Vollbild-Hintergrund und Displaytest | PixoraScreen"
description: "Kostenloser blauer Bildschirm für Displaytests, Videocall-Hintergründe und Monitorchecks. Im Vollbild, mit einstellbarer Helligkeit und auf jedem Gerät nutzbar."
h1: "Blauer Bildschirm."
breadcrumb: "Blauer Bildschirm"
appDescription: "Kostenloser blauer Bildschirm für Displaytests, Videocall-Hintergründe und Monitorchecks. Im Vollbild, mit einstellbarer Helligkeit und auf jedem Gerät nutzbar."
lede: "Ein sattes Vollbild-Blau (#0066FF), um den Blaukanal deines Displays zu prüfen, einer Szene kühles blaues Licht zu geben oder einen Hintergrund freizustellen, wenn Grün nicht passt."
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
  - q: "Ist das der Windows-Bluescreen?"
    a: "Nein. Diese Seite zeigt nur ein einfarbiges Blau für Displaychecks und als Lichtquelle. Wenn du den Windows-Absturzbildschirm mit traurigem Smiley und Stoppcode willst, nimm den Bluescreen-Streich, der ihn harmlos im Browser nachbildet."
  - q: "Wie teste ich nur die blauen Subpixel?"
    a: "Der Standardton #0066FF enthält etwas Grün. Für einen Test nur des Blaukanals gib 0000FF in das HEX-Feld ein. Dann leuchtet in jedem Pixel nur der blaue Subpixel, und ein toter erscheint als schwarzer Punkt."
  - q: "Warum wirkt das Blau auf meinem OLED-Smartphone ungleichmäßig?"
    a: "Blaues OLED-Material altert schneller als rotes und grünes. Bereiche, die jahrelang helle statische Inhalte gezeigt haben, können auf einer blauen Fläche daher etwas dunkler oder wärmer wirken. Ein kurzer Check ist harmlos; siehst du Flecken, prüfe sie auf einem mittelgrauen Bildschirm nach."
  - q: "Wann sollte ich einen Bluescreen statt eines Greenscreens nutzen?"
    a: "Nimm Blau, wenn dein Motiv Grün trägt, grüne Gegenstände hält oder Grün im Bild ist, oder wenn sich grünes Licht auf der Haut schwer vermeiden lässt. Grün lässt sich mit Digitalkameras meist sauberer freistellen und bleibt sonst die erste Wahl."
  - q: "Warum ist mein ganzer Bildschirm blau geworden?"
    a: "Wirkt der Desktop blaustichig, prüf die Farbtemperatur-Voreinstellung des Monitors (eine „kalte“ Einstellung wirkt blau) und eventuelle Farbfilter in den Bedienungshilfen. Scheinen Rot und Grün komplett zu fehlen, steck das Videokabel neu ein oder tausche es aus, denn ein beschädigtes Kabel kann Farbkanäle verlieren."
updated: '2026-10-31'
---

## Den Blaukanal deines Displays prüfen

Blau ist die Farbe mit der geringsten wahrgenommenen Helligkeit: Ein voll leuchtender blauer Subpixel wirkt für das Auge viel dunkler als ein roter oder grüner bei gleicher Leistung. Deshalb übersieht man Fehler im Blaukanal bei normalen Inhalten leicht, und eine vollblaue Fläche ist der beste Weg, sie zu finden.

Diese Seite startet mit `#0066FF`, einem kräftigen, etwas helleren Blau, das angenehm anzusehen ist. Für einen strengen Test nur der blauen Subpixel gib `0000FF` in das HEX-Feld ein, damit der Grünkanal ausgeschaltet wird.

1. Drücke <kbd>F</kbd> für das Vollbild und erhöhe die Helligkeit deines Geräts.
2. Suche den Bildschirm aus der Nähe ab. Ein schwarzer Punkt bedeutet, dass ein blauer Subpixel tot ist. Ein weißer, cyanfarbener oder magentafarbener Punkt bedeutet, dass ein anderer Subpixel dauerhaft leuchtet.
3. Prüfe dieselben Stellen auf dem [roten Bildschirm](tool:red-screen) und dem [grünen Bildschirm](tool:green-screen), um den fehlerhaften Kanal zu finden, oder lass den [Pixelfehler-Test mit sechs Farben](tool:dead-pixel-test) alles durchgehen.

## Blau auf OLED-Bildschirmen

Bei OLED-Smartphones, -Fernsehern und -Monitoren nutzt sich das blau leuchtende Material schneller ab als das rote oder grüne. Die Panels gleichen das aus, doch auf Bildschirmen, die jahrelang dieselbe helle Oberfläche gezeigt haben, kann eine blaue Fläche schwache Flecken dort sichtbar machen, wo früher eine Statusleiste oder Tastatur saß. Fällt dir etwas auf, prüfe es mit den mittelgrauen Flächen im [OLED-Burn-in-Test](tool:oled-burn-in-test) nach, die Einbrennen von normaler Ungleichmäßigkeit unterscheiden.

## Blau als Licht nutzen

- **Kühle Nachtszenen:** Ein Monitor oder Tablet in vollflächigem Blau knapp außerhalb des Bildausschnitts gibt deinem Motiv das kalte Licht einer Nachtszene, eines bildschirmbeleuchteten Gesichts oder einer Unterwasserstimmung.
- **Gaming- und Schreibtisch-Setups:** Ein zweiter Bildschirm in Blau bringt Farbe in den Raum – ganz ohne LED-Streifen. Senk den Helligkeitsregler für ein ruhigeres Leuchten.
- **Farbkontrast für Fotos:** Blaues Licht auf der einen Seite und der [orange Bildschirm](tool:orange-screen) auf der anderen ergeben das warm-kalte Split-Licht, das man von Filmplakaten kennt.

## Bluescreen für Chroma Key

Der Bluescreen war vor dem Digitalvideo der Standard zum Freistellen und wird heute noch genutzt, wenn Grün mit dem Motiv kollidieren würde, etwa bei grüner Kleidung, Pflanzen oder einem grünen Logo. Stell diese Seite im Vollbild hinter ein kleines Motiv, halte etwas Abstand, damit kein blaues Licht darauf fällt, und wähl in deinem Schnittprogramm Blau als Key-Farbe. Für die meisten anderen Aufnahmen lässt sich der [grüne Bildschirm](tool:green-screen) sauberer freistellen, weil Kamerasensoren Grün mit mehr Details aufnehmen.

## Nicht der Windows-Bluescreen

Wer nach einem blauen Bildschirm sucht, meint oft den Windows-Absturzbildschirm. Diese Seite ist nur eine Farbe. Für den traurigen Smiley, den Stoppcode und den steigenden Prozentwert öffne den [Bluescreen-Streich](tool:blue-screen-prank). Zeigt dein Computer einen echten Bluescreen, erklärt diese Seite auch, was die Stoppcodes bedeuten.
