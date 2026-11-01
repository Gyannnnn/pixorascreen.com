---
status: complete
sourceHash: e40dabe36b7bb0ce
title: "Pantalla blanca - Prueba gratis en pantalla completa | PixoraScreen"
description: "Haz una prueba de pantalla blanca gratis para detectar píxeles muertos, sangrado de luz de fondo en LCD y tonos de color. En pantalla completa, con control de brillo y en cualquier dispositivo."
h1: "Pantalla blanca: prueba gratis en pantalla completa para detectar píxeles muertos"
breadcrumb: "Pantalla blanca"
appDescription: "Haz una prueba de pantalla blanca gratis para detectar píxeles muertos, sangrado de luz de fondo en LCD y tonos de color. En pantalla completa, con control de brillo y en cualquier dispositivo."
lede: "Una pantalla completa en blanco puro para revisar la limpieza de la pantalla, iluminar suavemente, inspeccionar pantallas y como luz de relleno en fotografía."
chips:
  - "pantalla completa"
  - "brillo"
  - "copiar HEX"
  - "copiar RGB"
  - "selector de color"
shortcuts:
  - keys: F
    label: "Modo pantalla completa"
  - keys: R
    label: "Color aleatorio"
  - keys: C
    label: "Copiar el color actual"
  - keys: D
    label: "Descargar imagen"
faqs:
  - q: "¿De qué color se ve un subpíxel muerto en una pantalla blanca?"
    a: "El blanco es rojo, verde y azul a máxima potencia, así que a un píxel al que le falta uno de ellos se le ve la mezcla de los otros dos. Un subpíxel azul muerto se ve amarillo, uno rojo muerto se ve cian y uno verde muerto se ve magenta. Un píxel completamente muerto se ve negro."
  - q: "¿Por qué la pantalla blanca se ve amarilla o azulada?"
    a: "Normalmente es un ajuste de la pantalla el que la tiñe. Luz nocturna en Windows, Night Shift y True Tone en dispositivos Apple, y los modos de confort visual o de lectura en Android calientan la imagen. Desactívalos y revisa el preset de temperatura de color del monitor; un modo de 6500K o «sRGB» da el blanco más neutro."
  - q: "¿Una pantalla blanca puede arreglar un píxel atascado?"
    a: "No. Una imagen blanca fija no cambia un píxel atascado. Alternar colores rápidamente sobre el punto o masajearlo con suavidad a través de un paño suave a veces lo libera, pero no hay garantía, y ningún software puede revivir un píxel muerto."
  - q: "¿La prueba de pantalla blanca es segura para una pantalla OLED?"
    a: "Sí, en sesiones normales de prueba de unos minutos. El burn-in se acumula cuando la misma imagen se muestra durante cientos de horas. Mantén cortas las sesiones de blanco a brillo máximo en celulares, que además se atenúan solos para proteger el panel."
  - q: "¿Puedo usar una tablet como caja de luz para calcar?"
    a: "Sí. Pon la pantalla en blanco a pantalla completa, sube el brillo y coloca el papel encima. Pon una hoja de plástico transparente entre el papel y el vidrio y calca con poca presión; presionar fuerte sobre una pantalla LCD puede dejar marcas temporales."
  - q: "¿El control de brillo hace que la pantalla brille más que su máximo?"
    a: "No. El blanco ya es lo más brillante que tu pantalla puede mostrar con su ajuste actual de luz de fondo. El control atenúa la imagen hasta el 20 %, y su refuerzo por encima del 100 % solo aclara los colores que todavía no están al máximo. Para tener más luz, sube el brillo del propio dispositivo."
updated: '2026-10-31'
---

## Cómo hacer una prueba de pantalla blanca

Una prueba de pantalla blanca pone cada píxel en blanco puro (`#ffffff`), es decir, todos los subpíxeles rojos, verdes y azules del panel funcionan a máxima potencia. Todo lo que no da el ancho se vuelve visible: un píxel que nunca se enciende, una esquina más tenue que el resto o un blanco que tira a amarillo o a azul. Es la revisión más rápida para una laptop nueva, un monitor de segunda mano o un celular después de cambiarle la pantalla.

1. Limpia primero el vidrio. Sobre el blanco, el polvo y las huellas se ven exactamente igual que los píxeles oscuros.
2. Desactiva Luz nocturna, Night Shift, True Tone y cualquier modo de confort visual, porque tiñen el blanco a propósito.
3. Pon la pantalla con un brillo alto y presiona <kbd>F</kbd> o el botón de pantalla completa.
4. Recorre la pantalla por zonas desde una distancia normal y luego acércate.
5. En una pantalla pequeña y nítida de celular o laptop, usa el zoom de la cámara del celular como lupa. Un solo píxel muerto en una pantalla de alta densidad es más pequeño que un grano de sal.
6. Presiona <kbd>Esc</kbd> cuando termines.

## Qué muestra una pantalla blanca

### Píxeles y subpíxeles muertos

Un píxel completamente muerto es un punto negro. Un píxel que solo perdió un subpíxel muestra un color: amarillo si falta el azul, cian si falta el rojo y magenta si falta el verde. Ese color te dice exactamente qué subpíxel falló.

### Brillo desigual

En paneles LCD, un campo blanco muestra esquinas tenues, franjas más oscuras y zonas donde la luz de fondo es más débil. Las TV grandes también pueden mostrar franjas verticales u horizontales tenues, el llamado efecto de pantalla sucia (dirty screen effect); un campo gris medio como la [pantalla gris](tool:grey-screen) lo hace más fácil de ver.

### Tono y balance de blancos

El blanco debería verse neutro, como papel a la luz del día. Pon dos pantallas lado a lado en esta página y las diferencias de temperatura de color se vuelven obvias, algo útil cuando igualas monitores en una configuración de doble pantalla.

### Polvo y manchas

Un fondo brillante y uniforme ilumina cada huella y cada raya, así que es un buen momento para limpiar la pantalla antes de probar cualquier otra cosa.

## Lo que no puede mostrar

El blanco esconde el fallo contrario: un píxel atascado siempre encendido es invisible sobre un campo blanco. Búscalos en la [pantalla negra](tool:black-screen), que además muestra mucho mejor el sangrado de luz de fondo. Para una inspección completa, el [test de píxeles muertos de seis colores](tool:dead-pixel-test) recorre negro, blanco, rojo, verde, azul y gris en secuencia, y el [test de burn-in OLED](tool:oled-burn-in-test) usa niveles de gris donde la retención de imagen es más fácil de detectar.

## Usar una pantalla blanca como luz

- **Caja de luz para calcar:** una tablet o laptop en blanco total detrás de un papel delgado te permite calcar un dibujo o unas letras. Un protector de hojas transparente evita que el lápiz marque el vidrio.
- **Revisar negativos y diapositivas:** sostén un negativo o una diapositiva contra la pantalla iluminada para buscar polvo y rayones antes de escanearlo.
- **Luz de relleno para videollamadas:** un monitor o una tablet de sobra en blanco total, colocado un poco por encima de tu cara, suaviza las sombras. Si el blanco puro se siente duro, elige un blanco cálido como `#FFF1DC` en la [pantalla de color personalizado](tool:custom-color-screen).
- **Fotos de producto:** una pantalla blanca detrás de un objeto pequeño de vidrio o plástico da un fondo limpio e iluminado de forma pareja.

## Notas para pantallas OLED

El blanco total al brillo máximo es lo más exigente para un panel OLED, por eso los celulares atenúan automáticamente las áreas blancas grandes para proteger la pantalla. Una prueba de unos minutos es inofensiva; el burn-in viene de que la misma imagen se muestre durante cientos de horas. El botón Descargar guarda un PNG blanco de 1920×1080, 1080×1920, 1080×1080 o la resolución de tu dispositivo, si necesitas un fondo blanco para un documento o un video.
