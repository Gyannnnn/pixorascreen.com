---
status: complete
sourceHash: 3d004954ba04ab2a
title: "Test de pantalla HEX online - Vista previa de códigos de color y paletas a pantalla completa"
description: "Previsualiza códigos de color HEX y paletas de 4 colores a pantalla completa. Compara colores de marca lado a lado, revisa tonos de modo oscuro como #121212 y descarga imágenes de la paleta."
h1: "Pantalla HEX."
breadcrumb: "Pantalla HEX"
appDescription: "Previsualiza códigos de color HEX de CSS exactos a pantalla completa. Prueba colores de marca, compara paletas de 4 colores, revisa tonos de modo oscuro (#121212, #000000) y descarga fondos de pantalla en 4K."
lede: "Previsualiza códigos de color HEX exactos a pantalla completa, compara hasta cuatro colores lado a lado, revisa tonos de modo oscuro y descarga la paleta como imagen."
chips:
  - "pantalla completa"
  - "brillo"
  - "entrada HEX y RGB"
  - "copiar HEX"
  - "ajustes HEX"
shortcuts:
  - keys: F
    label: "Modo pantalla completa"
  - keys: R
    label: "Paleta aleatoria de 4 colores"
  - keys: C
    label: "Copiar el código HEX seleccionado"
  - keys: D
    label: "Descargar imagen de la paleta"
faqs:
  - q: "¿Cómo cambio uno de los cuatro colores?"
    a: "Haz clic en la muestra que quieres cambiar; pasa a ser el color seleccionado. Luego elige un color nuevo en el selector o escribe un valor HEX, RGB o HSL. Solo cambia la franja seleccionada, y C copia su código HEX."
  - q: "¿Qué formatos HEX acepta la pantalla?"
    a: "Códigos de seis dígitos, con o sin el # inicial, como #7C3AED o 7c3aed. No se admiten la forma abreviada de tres dígitos, como #FFF, ni los códigos de ocho dígitos con transparencia; escribe #FFF como #FFFFFF."
  - q: "¿Por qué los temas oscuros usan #121212 en lugar del negro puro?"
    a: "El negro puro hace invisibles la elevación y las sombras, y puede verse duro junto a texto blanco. En las pantallas OLED, los píxeles negros puros se apagan, y volver a encenderlos al desplazarte puede dejar una breve estela. Un gris muy oscuro como #121212 evita ambas cosas; por eso lo recomienda Material Design."
  - q: "¿Mi color de marca se verá igual en todas las pantallas?"
    a: "No exactamente. Un código HEX describe un color en el estándar sRGB, pero las pantallas varían en brillo, punto blanco y gama de color, y las de gama amplia pueden hacer que los colores se vean más saturados. Revisar la paleta a pantalla completa en varios dispositivos te muestra el rango que verá tu público."
  - q: "¿Puedo descargar mi paleta?"
    a: "Sí. Presiona D o el botón Descargar para guardar los cuatro colores como franjas verticales en un PNG, en horizontal, vertical, cuadrado o con la resolución de tu dispositivo. El nombre del archivo incluye los cuatro códigos HEX."
updated: '2026-10-31'
---

## Cómo previsualizar colores a tamaño completo

Los colores se ven distintos en una muestra pequeña que cuando llenan toda la pantalla. Un tono que parece tranquilo en un selector de color puede resultar estridente como fondo completo, y dos colores que se distinguen bien como puntos pueden confundirse en áreas grandes. La pantalla HEX muestra hasta cuatro colores como franjas altas a lo ancho de toda la pantalla, para que los juzgues al tamaño en que realmente se van a usar.

Se abre con una paleta de ejemplo: casi negro `#171717`, violeta `#7C3AED`, rosa intenso `#FF0080` y ámbar `#F9CB28`.

1. Haz clic en la muestra de una franja para seleccionarla y luego escribe un código HEX o elige un color.
2. Repite con las demás franjas, o presiona <kbd>R</kbd> para empezar desde una paleta aleatoria.
3. Presiona <kbd>F</kbd> para ver en pantalla completa y mira la paleta desde una distancia normal.
4. Presiona <kbd>C</kbd> para copiar el código del color seleccionado y <kbd>D</kbd> para guardar la paleta como imagen.

## Cómo revisar una paleta de marca o de interfaz

- **Compara entre dispositivos.** Abre la misma paleta en una laptop, un celular y un televisor. Colores que combinan bien en una pantalla pueden chocar o verse desvaídos en otra.
- **Mira los colores vecinos.** Dos colores saturados lado a lado, como rojo junto a azul, pueden parecer vibrar en su borde. Las franjas grandes hacen que eso se note fácilmente antes de que termine en un diseño.
- **Revisa los oscuros.** Tonos casi negros que se distinguen claramente en un buen monitor pueden fundirse en una pantalla más económica. Si dos franjas oscuras se ven idénticas, dales más contraste.
- **Recuerda el contraste del texto.** Las franjas muestran cómo se relacionan los colores como superficies, pero un texto legible también necesita suficiente contraste con el fondo. Revisa las combinaciones de texto con un verificador de contraste WCAG.

## Tonos de modo oscuro

La fila de ajustes incluye los dos fondos de modo oscuro más comunes. **Negro OLED** (`#000000`) apaga por completo los píxeles OLED. **Modo oscuro** (`#121212`) es el gris muy oscuro que recomienda Material Design: mantiene visibles las sombras y las superficies elevadas, se ve más suave junto a texto blanco y evita la ligera estela que muestran algunas pantallas OLED cuando los píxeles negros puros se encienden al desplazarte. Pon los dos en pantalla uno al lado del otro para ver cuál le queda mejor a tu diseño. Los ajustes también incluyen un azul brillante (`#0070F3`) y el blanco, y el botón “Paleta dividida de 4 colores” vuelve a la paleta inicial.

## Cómo funcionan los códigos HEX

Un código HEX como `#7C3AED` son tres pares de dígitos para el rojo, el verde y el azul, cada uno de `00` (apagado) a `FF` (máximo). Así, `#FF0000` es rojo puro, `#000000` es negro y `#FFFFFF` es blanco. Cada par es un número del 0 al 255 escrito en base 16; por eso el mismo color también se puede escribir como RGB `124, 58, 237`.

Para llenar la pantalla con un solo color en lugar de cuatro, usa la [pantalla de color personalizado](tool:custom-color-screen). Para una mezcla suave entre dos colores, la [pantalla de degradado](tool:gradient-screen) muestra la transición y cualquier banda que aparezca en ella, y la [pantalla RGB](tool:rgb-screen) compara los primarios puros de la pantalla.
