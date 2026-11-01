---
status: complete
sourceHash: 472e899ce9bbb51f
title: "Fake-Bluescreen-Streich – Windows-10/11-BSOD-Simulator | PixoraScreen"
description: "Realistischer gefälschter Windows-Absturzbildschirm für Streiche, Streams und IT-Schulungen. Originalgetreuer Windows-10/11-Bluescreen mit animiertem Fortschritt, 8 Stoppcodes und QR-Code."
h1: "Bluescreen-Streich."
breadcrumb: "Bluescreen-Streich"
appDescription: "Realistischer gefälschter Windows-Absturzbildschirm für Streiche, Streams und IT-Schulungen. Originalgetreuer Windows-10/11-Bluescreen mit animiertem Fortschritt, 8 Stoppcodes und QR-Code."
lede: "Ein realistischer Windows-Bluescreen mit steigendem Prozentwert, zufälligem Stoppcode und QR-Code. Er läuft im Browser-Tab und verändert nichts am Computer."
chips:
  - "Vollbild"
  - "Hinweis zum Beenden"
  - "animierter Fortschritt"
  - "Stoppcodes"
  - "QR-Code"
shortcuts:
  - keys: F
    label: "Vollbild"
  - keys: Esc
    label: "Vollbild beenden"
faqs:
  - q: "Ist der Fake-Bluescreen für meinen Computer sicher?"
    a: "Ja. Es ist eine gewöhnliche Webseite aus HTML und JavaScript. Sie installiert nichts, ändert keine Einstellungen und kann den Computer nicht zum Absturz bringen. Drücke Esc oder schließe den Tab, und alles ist wieder normal."
  - q: "Wie beende ich den Fake-Bluescreen?"
    a: "Drücke Esc, um das Vollbild zu verlassen, und die Seite sieht wieder normal aus. Auf einem Touchscreen wischst du vom oberen Rand nach unten oder nutzt die Zurück-Geste. Auch das Schließen des Browser-Tabs beendet ihn."
  - q: "Kann ich einstellen, wie lange der falsche Absturz dauert?"
    a: "Ja. Klicke vor dem Start auf das Zahnradsymbol. „Dauer“ legt fest, wie lange der Prozentwert bis 100 % braucht, von 5 bis 180 Sekunden, und mit „Startprozentsatz“ beginnt die Zählung irgendwo zwischen 0 % und 95 %, sodass es aussieht, als liefe der Absturz schon eine Weile."
  - q: "Welche Stoppcodes zeigt der Simulator?"
    a: "Bei jedem Laden der Seite wählt er einen von acht echten Windows-Stoppcodes: CRITICAL_PROCESS_DIED, SYSTEM_SERVICE_EXCEPTION, MEMORY_MANAGEMENT, IRQL_NOT_LESS_OR_EQUAL, KMODE_EXCEPTION_NOT_HANDLED, PAGE_FAULT_IN_NONPAGED_AREA, DRIVER_IRQL_NOT_LESS_OR_EQUAL oder BAD_POOL_HEADER."
  - q: "Stürzt Windows 11 noch mit einem Bluescreen ab?"
    a: "Das hängt von der Version ab. Windows 10 und die meisten Windows-11-PCs vor den Updates von 2025 zeigen das hier nachgebildete blaue Design. 2025 begann Microsoft, in Windows 11 einen schlichteren schwarzen Absturzbildschirm einzuführen; auf einem vollständig aktualisierten Windows-11-Rechner wirkt die blaue Version daher womöglich weniger vertraut."
  - q: "Funktioniert er auf Mac, Chromebook oder Smartphone?"
    a: "Er läuft in jedem modernen Browser, also auf all diesen Geräten. Am überzeugendsten ist er aber auf einem Windows-Laptop oder -Desktop, denn nur dort erwartet jemand einen Windows-Absturzbildschirm."
updated: '2026-10-31'
---

## So richtest du den Bluescreen-Streich ein

Die Seite bildet den Absturzbildschirm nach, den Windows nach einem schweren Fehler zeigt: den großen traurigen Smiley, „Auf Ihrem PC ist ein Problem aufgetreten. Er muss neu gestartet werden.“, einen Prozentwert, der bis 100 zählt, einen QR-Code und einen Stoppcode. Alles läuft im Browser-Tab – es sieht aus wie ein Absturz, während der Computer darunter ganz normal weiterarbeitet.

1. Öffne diese Seite auf dem Computer, den du nutzen willst, am besten auf einem Windows-Laptop oder -Desktop.
2. Klicke auf das Zahnradsymbol in der Ecke der Vorschau. Stell unter **Dauer** ein, wie lange die Zählung bis 100 % braucht (5 bis 180 Sekunden), und unter **Startprozentsatz**, ob sie mittendrin beginnen soll.
3. Schließe das Einstellungsfenster und drücke <kbd>F</kbd> oder die Vollbild-Schaltfläche. Tabs und Adressleiste des Browsers verschwinden, und die Zählung beginnt.
4. Bewege den Mauszeiger an den Bildschirmrand und lass ihn dort.
5. Wenn der Streich gewirkt hat, drücke <kbd>Esc</kbd>, um ihn zu beenden.

Der Prozentwert steigt nicht gleichmäßig. Wie beim echten Bildschirm bleibt er an zufälligen Stellen ein, zwei Sekunden hängen, bevor er weiterläuft – genau das macht ihn glaubwürdig. Bei jedem Laden der Seite wird ein neuer Stoppcode gewählt.

## Was die Stoppcodes bedeuten

Die acht Stoppcodes auf dieser Seite sind echte Windows-Fehler. Siehst du einen davon bei einem echten Absturz, deutet er ungefähr auf Folgendes hin:

| Stoppcode | Was er meist bedeutet |
|---|---|
| CRITICAL_PROCESS_DIED | Ein Prozess, ohne den Windows nicht laufen kann, wurde unerwartet beendet |
| SYSTEM_SERVICE_EXCEPTION | Ein Systemdienst oder Treiber ist auf einen Fehler gestoßen, den er nicht behandeln konnte |
| MEMORY_MANAGEMENT | Windows hat einen Speicherfehler gefunden, verursacht durch defekten RAM oder einen Treiber |
| IRQL_NOT_LESS_OR_EQUAL | Ein Treiber hat auf Speicher zugegriffen, auf den er in diesem Moment nicht zugreifen durfte |
| DRIVER_IRQL_NOT_LESS_OR_EQUAL | Derselbe Fehler, einem bestimmten Treiber zugeordnet |
| KMODE_EXCEPTION_NOT_HANDLED | Ein im Kernelmodus laufendes Programm ist abgestürzt |
| PAGE_FAULT_IN_NONPAGED_AREA | Etwas hat auf Speicher verwiesen, der nicht vorhanden war |
| BAD_POOL_HEADER | Die interne Speicherverwaltung von Windows wurde beschädigt, oft durch einen Treiber |

## Wenn du einen echten Bluescreen siehst

Ein einzelner Bluescreen nach einem Treiber- oder Windows-Update ist häufig und tritt oft nie wieder auf. Notiere den Stoppcode, lass den PC neu starten und installiere ausstehende Windows- und Grafiktreiber-Updates. Taucht derselbe Code immer wieder auf, such ihn auf der Support-Website von Microsoft, mach die letzte Hardware- oder Treiberänderung rückgängig und führe die Windows-Speicherdiagnose aus, wenn der Code Speicher erwähnt. Durch einen Bluescreen gehen deine Dateien nicht verloren; der Computer startet nur neu.

## Verantwortungsvoll einsetzen

Ein guter Streich endet damit, dass nach ein, zwei Minuten alle lachen. Lös ihn schnell auf und wähl den richtigen Moment: nicht, wenn jemand unter Zeitdruck steht oder ungespeicherte Arbeit hat, um die er sich Sorgen machen würde. Nutze einen gefälschten Fehlerbildschirm nie, um jemanden dazu zu bringen, eine Telefonnummer anzurufen, für eine „Reparatur“ zu bezahlen oder etwas zu installieren. Das sind die Tricks von Betrügern, die sich als technischer Support ausgeben, und echte Absturzbildschirme verlangen nichts davon.

## Weitere Absturz- und Update-Bildschirme

Für einen älteren PC bildet der [Windows-XP-Absturz](tool:windows-xp-crash) die explorer.exe-Fehlerdialoge jener Zeit nach. Der [Fake-Windows-Update-Bildschirm](tool:windows-update) setzt auf Geduld: ein Update, das scheinbar nie fertig wird. Der [Fake-Virus-Bildschirm](tool:fake-virus-screen) zeigt nachgemachte Sicherheitswarnungen statt eines Absturzes, und der [kaputte Bildschirm](tool:broken-screen) lässt das Display selbst gesprungen aussehen.
