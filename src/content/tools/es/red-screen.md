---
status: complete
sourceHash: 86b94a5e7f473b83
title: "Pantalla roja - Prueba gratis de píxeles muertos en pantalla completa | PixoraScreen"
description: "Prueba de pantalla roja gratis para detectar píxeles muertos y fallos del subpíxel rojo. También sirve como luz roja para la visión nocturna y el confort visual. En pantalla completa y con brillo ajustable."
h1: "Pantalla roja: prueba de píxeles muertos y pantalla de luz roja"
breadcrumb: "Pantalla roja"
appDescription: "Prueba de pantalla roja gratis para detectar píxeles muertos y fallos del subpíxel rojo. También sirve como luz roja para la visión nocturna y el confort visual. En pantalla completa y con brillo ajustable."
lede: "Un rojo sólido a pantalla completa (#FF0000) para revisar los subpíxeles rojos de tu pantalla, y además una luz roja tenue para observar estrellas, leer de noche y crear efectos de iluminación en video."
chips:
  - "pantalla completa"
  - "brillo"
  - "copiar HEX"
  - "copiar RGB"
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
  - q: "¿Qué muestra una prueba de pantalla roja que no muestre una pantalla blanca?"
    a: "El rojo enciende solo el subpíxel rojo de cada píxel. Un subpíxel rojo muerto o débil puede esconderse dentro de un píxel blanco, porque el verde y el azul de su lado siguen encendidos, pero sobre un campo rojo sólido aparece como un punto oscuro."
  - q: "¿Qué significa un punto amarillo o rosa en la pantalla roja?"
    a: "Que otro subpíxel está atascado encendido. Rojo más un subpíxel verde atascado se ve amarillo, y rojo más un subpíxel azul atascado se ve magenta o rosa. Un punto negro significa que falló el propio subpíxel rojo."
  - q: "¿Una pantalla roja ayuda a conservar la visión nocturna?"
    a: "Solo si es tenue. Los bastones, las células que tus ojos usan en la oscuridad, son los menos sensibles al rojo intenso, y por eso los astrónomos leen sus cartas con luz roja. Baja el brillo de tu dispositivo al mínimo y el control de esta página al 20 %, o elige un rojo más oscuro como #400000 en la pantalla de color personalizado."
  - q: "¿Una pantalla roja es mejor que una blanca por la noche?"
    a: "La luz roja no contiene las longitudes de onda azules que más suprimen la melatonina, así que una pantalla roja tenue altera menos tu rutina nocturna que una blanca y brillante. Aun así, cualquier pantalla brillante cerca de la cara puede quitarte el sueño, así que mantenla tenue y a distancia."
  - q: "¿Por qué toda mi pantalla se ve roja o rosada?"
    a: "Revisa primero la configuración. La luz nocturna o Night Shift al máximo, un filtro o matiz de color en las opciones de accesibilidad o un preset de color del monitor pueden teñir la pantalla. Si el tono parpadea o cambia al mover el cable, lo más probable es un cable de video dañado o un conector flojo."
  - q: "¿Cómo pongo la pantalla de mi iPhone roja de forma permanente?"
    a: "Abre Ajustes, Accesibilidad, Pantalla y tamaño del texto, Filtros de color. Activa Filtros de color, elige Matiz de color y lleva Intensidad y Tono al máximo. Puedes agregarlo a la Función rápida de accesibilidad para que un triple clic en el botón lateral active y desactive el tono rojo."
updated: '2026-10-31'
---

## Cómo hacer una prueba de pantalla roja

Esta página llena la pantalla de rojo puro (`#FF0000`). Cada píxel de una pantalla LCD u OLED está formado por un subpíxel rojo, uno verde y uno azul, y el rojo puro enciende solo los rojos. Eso lo convierte en la forma más limpia de revisar un canal de color por separado, algo que una [pantalla blanca](tool:white-screen) o una [pantalla negra](tool:black-screen) no pueden hacer.

1. Limpia la pantalla para no confundir el polvo con un fallo.
2. Sube el brillo de tu dispositivo, abre esta página y presiona <kbd>F</kbd> para ver en pantalla completa.
3. Recorre la pantalla despacio, esquina por esquina y de cerca. En celulares y laptops de alta resolución, la cámara de un celular con zoom sobre el vidrio funciona como lupa.
4. Anota la posición de cualquier punto que no tenga el mismo rojo que su entorno y luego revisa ese mismo lugar en la [pantalla verde](tool:green-screen) y en la [pantalla azul](tool:blue-screen).

## Qué revela una pantalla roja

### Subpíxeles rojos muertos o débiles

Un punto negro sobre el rojo significa que el subpíxel rojo de ese lugar no se enciende. Un punto de un rojo visiblemente más oscuro significa que el subpíxel está débil. Ambos son difíciles de ver con contenido normal, porque los otros dos subpíxeles del píxel hacen que se vea más o menos bien.

### Subpíxeles verdes o azules atascados

Cualquier color extra mezclado con el rojo apunta a otro subpíxel atascado. Un punto amarillo significa que un subpíxel verde está atascado encendido; un punto magenta o rosa, que es uno azul. El [test de píxeles muertos de seis colores](tool:dead-pixel-test) confirma el diagnóstico recorriendo todos los canales.

### Color desigual en el panel

El rojo es una prueba exigente de uniformidad en pantallas LCD, porque es fácil notar si una zona tira a naranja o a rosa. En una OLED, las formas tenues de elementos fijos como la barra de tareas también pueden asomar a través de un color sólido, aunque los rellenos de gris medio del [test de burn-in OLED](tool:oled-burn-in-test) aíslan el burn-in con más claridad.

## Luz roja para la visión nocturna

Después de unos 20 a 30 minutos en la oscuridad, tus ojos pasan a usar los bastones, muy sensibles a la luz tenue pero que casi no responden al rojo intenso. Una luz roja tenue te deja ver una carta estelar, los controles de una cámara o una página sin perder esa adaptación; por eso los astrónomos y los campistas usan linternas rojas. Para usar esta página así:

- Baja el brillo de tu dispositivo al mínimo.
- Pon el control de brillo de esta página en el 20 %.
- Para una luz todavía más suave, abre la [pantalla de color personalizado](tool:custom-color-screen) e ingresa un rojo oscuro como `#400000`.

Una pantalla roja brillante sigue deslumbrando. El beneficio viene de la luz roja a bajo nivel.

## Otros usos

- **Iluminación ambiental y de fiesta:** una TV o un monitor en rojo a pantalla completa baña de color una habitación o un escritorio.
- **Efectos de video:** una pantalla roja justo fuera del encuadre le da al sujeto un contraluz rojo para escenas de alarma, terror o discoteca.
- **Pruebas de proyector:** un color primario sólido muestra si cada color de la imagen del proyector llega de forma pareja a los bordes.
- **Imágenes:** presiona <kbd>D</kbd> para descargar un PNG rojo de 1920×1080, 1080×1920, 1080×1080 o la resolución de tu pantalla.
