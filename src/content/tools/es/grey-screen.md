---
status: complete
sourceHash: a373973fc4700de1
title: "Pantalla gris online - Herramienta gratis en pantalla completa"
description: "Un gris medio neutro a pantalla completa (#808080) para detectar luz de fondo desigual, el efecto de pantalla sucia, cambios de tono y burn-in en OLED, además de pruebas cerca del negro."
h1: "Pantalla gris."
breadcrumb: "Pantalla gris"
appDescription: "Una superficie gris neutra a pantalla completa para revisar uniformidad, equilibrio de brillo y tonos medios. Ábrela en pantalla completa, ajusta el brillo y prueba tu pantalla."
lede: "Un gris medio neutro a pantalla completa (#808080) para detectar luz de fondo desigual, el efecto de pantalla sucia, cambios de tono y el burn-in en OLED que los colores brillantes esconden."
chips:
  - "pantalla completa"
  - "brillo"
  - "copiar HEX"
  - "copiar RGB"
  - "entrada RGB"
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
  - q: "¿Por qué #808080 se llama gris al 50 % si no se ve la mitad de brillante?"
    a: "El número está a medio camino entre el negro y el blanco, pero las pantallas usan codificación gamma, así que #808080 emite en realidad solo alrededor del 22 % de la luz del blanco total. Aun así, al ojo le parece un gris medio, porque nuestra percepción del brillo tampoco es lineal."
  - q: "¿Qué nivel de gris muestra mejor el efecto de pantalla sucia?"
    a: "Por lo general, los grises más oscuros. Empieza con el gris medio de esta página y luego escribe 333333 (alrededor del 20 %) y 1A1A1A (alrededor del 10 %) en el campo HEX. Las franjas verticales u horizontales tenues que se quedan quietas cuando mueves la cabeza son el efecto de pantalla sucia."
  - q: "¿Una pantalla gris puede mostrar burn-in en OLED?"
    a: "Sí. El burn-in se ve con más facilidad sobre un gris medio uniforme, donde el contorno tenue de una barra de estado, un logo o un teclado aparece como una forma un poco más oscura o teñida. El test de burn-in OLED recorre varios niveles de gris y agrega un patrón en movimiento para la retención de imagen."
  - q: "¿Qué es el mura?"
    a: "Mura es la palabra japonesa para la irregularidad y se usa para las manchas o nubes de un panel que quedan del proceso de fabricación. Se ve mejor sobre un gris uniforme y es una característica de cada panel, así que no cambia con los ajustes."
  - q: "¿Puedo usar una pantalla gris como fondo neutro para trabajar con color?"
    a: "Sí. Los editores de fotos usan gris neutro alrededor de las imágenes porque un entorno de color cambia cómo juzgamos el color. Una segunda pantalla gris, o un fondo de pantalla gris descargado de esta página, mantiene neutro el área alrededor de tu trabajo."
updated: '2026-10-31'
---

## Por qué el gris medio encuentra lo que los colores brillantes esconden

El blanco y el negro son los extremos de lo que puede mostrar una pantalla, y muchos paneles se ven mejor ahí. Los fallos de uniformidad de brillo y color se notan más en la mitad del rango, donde el panel tiene que mantener un nivel parcial exacto en todas partes a la vez. Esta página llena la pantalla de `#808080`, el clásico gris al 50 %, que es perfectamente neutro, con rojo, verde y azul iguales.

1. Desactiva Luz nocturna, Night Shift o cualquier modo de confort visual para que el gris se mantenga neutro.
2. Presiona <kbd>F</kbd> para ver en pantalla completa y oscurece un poco la habitación.
3. Recorre toda la pantalla desde tu asiento habitual y luego desde más lejos.
4. Repite con un gris más oscuro, como `333333`, escrito en el campo HEX.

## Qué buscar

### Brillo desigual y viñeteo

Las esquinas o los bordes más oscuros, o un lado más brillante que el otro, son comunes en monitores LCD y laptops con iluminación lateral. Se ven mucho más claramente sobre gris que sobre blanco.

### El efecto de pantalla sucia

En las TV LCD y OLED grandes, las franjas verticales u horizontales tenues que se quedan fijas cuando mueves la cabeza se conocen como efecto de pantalla sucia (dirty screen effect). Se nota más en deportes con grandes áreas lisas, como una cancha de fútbol o una pista de hielo, y en los grises más oscuros.

### Cambios de tono

Un gris realmente neutro debería verse del mismo color en todas partes. Las zonas que tiran a rosa, verde o azul son fallos de uniformidad de color; se evalúan mejor sobre gris que sobre blanco porque el ojo es más sensible al tono en los niveles medios.

### Mura y nubosidad

Las manchas o nubes que quedan del proceso de fabricación se llaman mura. Son una característica de cada panel, así que los ajustes no las eliminan.

### Burn-in en OLED

Las formas tenues de una barra de estado, un logo o un teclado en pantalla aparecen sobre el gris como contornos un poco más oscuros o teñidos. El [test de burn-in OLED](tool:oled-burn-in-test) recorre varios niveles de gris e incluye un patrón en movimiento para eliminar la retención de imagen temporal.

## Grises cercanos al negro

Las pantallas OLED pueden tener problemas con los grises más oscuros, justo por encima del negro, y mostrar ahí manchas o un ligero parpadeo. Escribe `0A0A0A`, `141414` y `1A1A1A` en el campo HEX, uno tras otro. Cada uno debería verse como un paso suave y un poco más claro. La [pantalla negra](tool:black-screen) revisa el negro puro, y la [pantalla de degradado](tool:gradient-screen) muestra una rampa suave donde destacan las bandas, es decir, los saltos visibles entre tonos.

## Un gris neutro para trabajar con color

Los editores de fotos y video rodean las imágenes de gris neutro por una razón: un fondo de color cambia cómo percibimos los colores que están al lado. Un segundo monitor gris, o un fondo de pantalla gris guardado con el botón Descargar, mantiene neutro tu entorno mientras editas. Para una revisión completa del panel de una sola vez, usa el [test de píxeles muertos de seis colores](tool:dead-pixel-test), que incluye el gris junto a los colores primarios.
