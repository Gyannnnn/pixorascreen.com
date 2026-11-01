---
status: complete
sourceHash: c657e8d8e22a12fe
title: "Pantalla de color personalizado - Selector de color gratis en pantalla completa | PixoraScreen"
description: "Elige cualquier color y llena tu pantalla a pantalla completa. Selector de color gratis con entrada HEX, RGB y HSL, favoritos guardados y pruebas de pantalla útiles para calibrar."
h1: "Pantalla de color personalizado: selector de color y prueba de pantalla a pantalla completa"
breadcrumb: "Pantalla de color personalizado"
appDescription: "Elige cualquier color y llena tu pantalla a pantalla completa. Selector de color gratis con entrada HEX, RGB y HSL, favoritos guardados y pruebas de pantalla útiles para calibrar."
lede: "Llena tu pantalla con cualquier color. Escribe un valor HEX, RGB o HSL, usa el selector de color o genera un tono al azar, y guarda como favoritos los que te gusten."
chips:
  - "pantalla completa"
  - "brillo"
  - "entrada HEX"
  - "entrada RGB"
  - "entrada HSL"
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
  - q: "¿Qué formatos de color puedo escribir?"
    a: "HEX con seis dígitos, con o sin # (por ejemplo, #0070F3); RGB como tres números de 0 a 255 separados por comas (0, 112, 243), y HSL como tono, saturación y luminosidad (hsl(212, 100%, 48%)). Si cambias cualquiera de los campos, los otros dos se actualizan para coincidir."
  - q: "¿Se guardan mis colores favoritos?"
    a: "Sí, en este navegador y en este dispositivo. Los favoritos se guardan en el almacenamiento local del navegador, así que siguen ahí la próxima vez que abras la página, pero no se sincronizan con otros dispositivos, y borrar los datos del sitio en tu navegador los elimina."
  - q: "¿Cómo reviso si mi monitor aplasta los negros?"
    a: "Pon #0A0A0A a pantalla completa, luego #141414 y después #000000. En una pantalla bien ajustada, cada paso se ve un poco distinto. Si los dos primeros se ven idénticos al negro puro, la pantalla está perdiendo el detalle de las sombras; ajusta el brillo, el nivel de negro o la gamma y vuelve a probar."
  - q: "¿Puedo igualar los colores de dos monitores con esto?"
    a: "Puedes compararlos. Abre el mismo valor HEX en las dos pantallas, una al lado de la otra, y las diferencias de tono y brillo se vuelven evidentes, lo que te ayuda a ajustar la configuración de color de cada monitor. Igualarlos con exactitud requiere un calibrador por hardware, porque una pantalla no puede medir su propia luz."
  - q: "¿Qué color sirve como luz suave para videollamadas?"
    a: "Un blanco cálido como #FFF1DC es más amable con los tonos de piel que el blanco puro. Coloca la pantalla un poco por encima de la altura de los ojos, detrás o al lado de la cámara, y baja el control de brillo hasta que la luz se vea natural en cámara."
  - q: "¿Puedo guardar el color como imagen?"
    a: "Sí. Elige horizontal (1920×1080), vertical (1080×1920), cuadrado (1080×1080) o la resolución de tu dispositivo y presiona Descargar o la tecla D. El nombre del archivo PNG incluye el código del color."
updated: '2026-10-31'
---

## Cómo elegir un color de pantalla personalizado

La pantalla de color personalizado empieza en un azul brillante (`#0070F3`), y puedes cambiarlo de cuatro maneras:

- **Selector de color:** haz clic en la muestra para abrir el selector de color de tu sistema y elegir a ojo.
- **HEX:** escribe un código de seis dígitos como `#FFB347`. El `#` es opcional.
- **RGB:** escribe tres valores de canal de 0 a 255 separados por comas, como `255, 179, 71`.
- **HSL:** escribe tono, saturación y luminosidad, como `hsl(35, 100%, 64%)`.

Cada campo actualiza a los demás mientras escribes, así que puedes elegir un tono con el selector y copiar al instante su valor HEX o RGB exacto. Presiona <kbd>F</kbd> para ver en pantalla completa, <kbd>R</kbd> para un color aleatorio y <kbd>C</kbd> para copiar el código actual.

## Qué formato usar

HEX es el formato que esperan las herramientas web y de diseño como Figma, Canva y CSS. RGB coincide con los valores de canal de 0 a 255 de los editores de fotos y de muchas apps de iluminación. HSL es el más útil para ajustar un color a ojo: mantén el mismo tono y baja la luminosidad para obtener una versión más oscura, o baja la saturación para hacerlo más tranquilo, sin adivinar números nuevos.

## Guardar favoritos

Presiona el botón de favorito para guardar el color actual en tu lista, debajo de los controles. Haz clic en un color guardado para recuperarlo, o quítalo cuando ya no lo necesites. Los favoritos se quedan en este navegador y en este dispositivo, así que una serie de colores para una grabación recurrente o una paleta de marca estará lista la próxima vez que abras la página.

## Colores útiles para probar

| Uso | Color | Por qué funciona |
|---|---|---|
| Luz suave para videollamadas | `#FFF1DC` | Un blanco cálido que favorece la piel más que el blanco puro |
| Lectura nocturna, observación de estrellas | `#400000` | Un rojo profundo y tenue que conserva la visión adaptada a la oscuridad |
| Vista previa de modo oscuro | `#121212` | El gris oscuro que usan muchos temas oscuros en lugar del negro puro |
| Prueba de negros aplastados | `#0A0A0A` | Debería verse apenas por encima del negro en una pantalla bien ajustada |
| Prueba de blancos recortados | `#F5F5F5` | Debería verse apenas por debajo del blanco puro, no idéntico a él |
| Luz ambiental de atardecer | `#FFB347` | Un naranja dorado suave para un ambiente cálido |

## Probar una pantalla con colores específicos

Los colores primarios sólidos encuentran píxeles defectuosos, y el [test de píxeles muertos de seis colores](tool:dead-pixel-test) lo cubre de una sola vez. Un color personalizado responde a otras preguntas. Escribe el color de tu marca para ver cómo se ve en un celular, una laptop y una TV. Recorre valores cercanos al negro para ver dónde una pantalla deja de mostrar detalle en las sombras, o valores cercanos al blanco para ver dónde se recortan las luces. Abre el mismo código en dos monitores para ver cuál es más cálido.

Para un color primario concreto, la [pantalla roja](tool:red-screen), la [pantalla verde](tool:green-screen) y la [pantalla blanca](tool:white-screen) tienen cada una sus propios consejos. Para comparar varios colores lado a lado, la [pantalla HEX](tool:hex-screen) muestra cuatro muestras a la vez, y la [pantalla de degradado](tool:gradient-screen) mezcla dos colores para revisar si hay bandas.

## Descargar una imagen de color sólido

El botón Descargar guarda un PNG del color actual en horizontal (1920×1080), vertical (1080×1920), cuadrado (1080×1080) o la resolución exacta de tu dispositivo. Es una forma rápida de crear un fondo liso para el fondo de pantalla del celular, una diapositiva o la placa de título de un video, exactamente del color que elegiste.
