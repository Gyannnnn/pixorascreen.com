---
status: complete
sourceHash: 5dabf925f0493c70
title: "Test de pantalla RGB online - Subpíxeles y calibración de color a pantalla completa"
description: "Un test de pantalla RGB que muestra rojo, verde y azul lado a lado o de uno en uno a pantalla completa, para comparar los colores primarios de tu pantalla y revisar cada canal de subpíxeles."
h1: "Pantalla RGB."
breadcrumb: "Pantalla RGB"
appDescription: "Haz un test de pantalla RGB online a pantalla completa. Revisa los subpíxeles rojos, verdes y azules, busca píxeles atascados o muertos, comprueba los canales de color del monitor y calibra pantallas."
lede: "Rojo, verde y azul lado a lado o de uno en uno a pantalla completa, para comparar los tres colores primarios de tu pantalla y revisar cada canal de subpíxeles."
chips:
  - "pantalla completa"
  - "brillo"
  - "canales de subpíxeles RGB"
  - "copiar RGB/HEX"
  - "ciclo automático de colores"
shortcuts:
  - keys: F
    label: "Modo pantalla completa"
  - keys: R
    label: "Rojo puro"
  - keys: G
    label: "Verde puro"
  - keys: B
    label: "Azul puro"
  - keys: W / K
    label: "Blanco / negro"
  - keys: S
    label: "Rojo, verde y azul lado a lado"
  - keys: D
    label: "Descargar imagen"
faqs:
  - q: "¿Qué muestra la vista dividida RGB?"
    a: "Muestra los tres colores primarios de la pantalla uno junto al otro a máxima intensidad. Puedes comparar qué tan saturado y brillante se ve cada uno, detectar un primario que tira hacia otro color y ver de un vistazo si falta un canal por completo, porque su franja se vería negra."
  - q: "¿Un test RGB puede encontrar píxeles muertos o atascados?"
    a: "Sí, cuando llenas la pantalla con un color a la vez. Presiona R, G o B para encender solo ese subpíxel en todo el panel; uno muerto se ve como un punto negro. El test de píxeles muertos de seis colores recorre los mismos colores, además de negro, blanco y gris."
  - q: "¿Por qué el rojo se ve anaranjado o el verde amarillento?"
    a: "Cada panel tiene sus propios primarios. Las pantallas de gama amplia suelen mostrar primarios muy saturados, casi neón, cuando el contenido no tiene gestión de color, mientras que algunas pantallas económicas tienen primarios que tiran hacia colores vecinos. Un modo de imagen sRGB suele acercarlos al estándar."
  - q: "¿Cómo puedo ver los subpíxeles en sí?"
    a: "Abre una pantalla blanca o RGB y mira el vidrio con una lupa, o con el modo macro o el zoom máximo de la cámara de tu celular. Verás el patrón de elementos rojos, verdes y azules, que cambia entre las franjas de los LCD y las distribuciones de los celulares y televisores OLED."
  - q: "¿Esto es una prueba de iluminación RGB para teclados o tiras LED?"
    a: "No. Esta página prueba la pantalla en la que la abres. La iluminación RGB de teclados y tiras LED se controla con su propio software, aunque una pantalla completamente roja, verde o azul puede servir para igualar sus colores a ojo."
updated: '2026-10-31'
---

## Cómo usar la pantalla RGB

La página se abre con los tres colores primarios lado a lado: rojo puro (`#FF0000`), verde puro (`#00FF00`) y azul puro (`#0000FF`). Todos los colores que muestra tu pantalla se mezclan a partir de estos tres, así que mirarlos directamente dice mucho del panel.

- Presiona <kbd>F</kbd> para ver en pantalla completa.
- Presiona <kbd>R</kbd>, <kbd>G</kbd> o <kbd>B</kbd> para llenar toda la pantalla con un primario, <kbd>W</kbd> para el blanco y <kbd>K</kbd> para el negro.
- Presiona <kbd>S</kbd> para volver a la vista lado a lado.
- Los botones debajo de la vista previa hacen lo mismo en pantallas táctiles, y cada franja se puede cambiar a cualquier color con su muestra.

## Cómo comparar los tres primarios

En la vista lado a lado, mira cada franja por turnos:

- **¿Alguna franja se ve negra o muy oscura?** Falta un canal completo, normalmente por un cable de video flojo o dañado.
- **¿El rojo tira a naranja, o el verde a amarillo?** Los primarios del panel difieren del estándar. Algo de variación es normal; un modo de imagen sRGB suele acercarlos.
- **¿Los colores se ven neón, casi luminosos?** Es típico de los monitores de gama amplia que muestran contenido común sin gestión de color. Las fotos y los sitios web se verán sobresaturados de la misma manera.
- **¿Una franja es mucho más tenue que las otras?** El verde siempre parece el más brillante y el azul el más oscuro, por cómo funciona el ojo. Un azul casi invisible o un rojo que se ve marrón sí vale la pena investigarlos.

## Cómo revisar cada canal de subpíxeles

Llenar la pantalla con un primario enciende solo ese tipo de subpíxel en todo el panel. Un punto negro sobre el rojo es un subpíxel rojo muerto; un punto de color significa que otro subpíxel está atascado encendido. Para una versión guiada con los seis colores de prueba e indicaciones en pantalla, usa el [test de píxeles muertos de seis colores](tool:dead-pixel-test), o abre la [pantalla roja](tool:red-screen), la [pantalla verde](tool:green-screen) o la [pantalla azul](tool:blue-screen) para ver consejos específicos de cada color.

## Cómo ver la distribución de subpíxeles

Con aumento, una pantalla es una cuadrícula de diminutos elementos rojos, verdes y azules, y el patrón cambia según la tecnología:

| Tipo de pantalla | Distribución típica de subpíxeles |
|---|---|
| La mayoría de monitores y laptops LCD | Franjas verticales en el orden rojo, verde, azul |
| Muchos celulares OLED | Distribuciones en diamante o “PenTile”, con más elementos verdes que rojos o azules |
| Televisores y monitores WOLED | Rojo, verde, azul y un subpíxel blanco adicional |
| Televisores y monitores QD-OLED | Rojo, verde y azul dispuestos en triángulo |

Para verlo en tu propia pantalla, muestra el blanco o la vista dividida RGB y mira de cerca con una lupa, o con el modo macro de la cámara de tu celular. La distribución explica por qué el texto pequeño puede mostrar bordes de color en algunos monitores OLED: el suavizado de texto de la mayoría de los sistemas operativos da por hecho la clásica franja RGB.

## Cómo descargar el patrón

Presiona <kbd>D</kbd> para guardar la vista actual como PNG, ya sean las tres franjas o un solo color, en horizontal, vertical, cuadrado o con la resolución de tu dispositivo. Es una imagen de prueba rápida para revisar un televisor o un proyector desde una memoria USB.
