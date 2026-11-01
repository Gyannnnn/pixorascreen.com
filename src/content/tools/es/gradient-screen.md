---
status: complete
sourceHash: 1d6c9a7e21d832dd
title: "Pantalla de degradado online - Prueba de bandas de color y calibración a pantalla completa"
description: "Un degradado suave de dos colores a pantalla completa para detectar bandas de color en tu monitor, celular o TV, además de fondos de degradado personalizados que puedes descargar en PNG."
h1: "Pantalla de degradado."
breadcrumb: "Pantalla de degradado"
appDescription: "Transiciones de color suaves con varios puntos en toda la pantalla para pruebas de bandas de color, calibración de pantalla y fondos ambientales. Ábrela en pantalla completa."
lede: "Un degradado suave de dos colores a pantalla completa para detectar bandas de color y posterización en cualquier pantalla, y para crear fondos de degradado y fondos de pantalla a tu medida."
chips:
  - "pantalla completa"
  - "brillo"
  - "copiar color"
  - "descargar fondo de pantalla"
  - "modo ambiente"
shortcuts:
  - keys: F
    label: "Modo pantalla completa"
  - keys: R
    label: "Degradado aleatorio"
  - keys: C
    label: "Copiar el color seleccionado"
  - keys: D
    label: "Descargar imagen"
faqs:
  - q: "¿Qué son las bandas de color?"
    a: "Las bandas aparecen cuando una mezcla suave de colores muestra escalones o franjas visibles en lugar de una transición continua. Ocurre cuando una pantalla, un archivo o un video no puede representar suficientes tonos intermedios, así que los tonos vecinos se redondean al mismo valor y forman bandas."
  - q: "¿Es normal ver algunas bandas en cualquier pantalla?"
    a: "Sí, en degradados de bajo contraste. Una señal estándar de 8 bits tiene 256 niveles por canal de color, así que una mezcla entre dos colores parecidos puede tener solo unas pocas decenas de escalones distintos en toda la pantalla. Los escalones parejos y neutros son lo esperable; las bandas desiguales, teñidas o muy anchas apuntan a la pantalla o a su configuración."
  - q: "¿Por qué mi monitor muestra más bandas que mi celular?"
    a: "Las razones más comunes son un panel de 6 bits que simula color de 8 bits, un rango RGB limitado o un perfil de color incorrecto en la computadora, el contraste dinámico o las mejoras de imagen del monitor, y una gestión de color muy agresiva. Revisa primero el modo de imagen del monitor y la configuración de salida del controlador gráfico."
  - q: "¿Puedo crear mi propio degradado?"
    a: "Sí. Haz clic en cualquiera de las dos muestras para elegir un color nuevo, o escribe un valor HEX, RGB o HSL. Presiona R para obtener un degradado aleatorio de dos colores y guarda el resultado como PNG con el botón Descargar."
  - q: "¿El degradado descargado se ve igual que en pantalla?"
    a: "El PNG usa los mismos dos colores, dibujados de esquina a esquina en el tamaño elegido (horizontal, vertical, cuadrado o la resolución de tu dispositivo). Los visores de imágenes y las redes sociales pueden comprimirlo, y la compresión agrega sus propias bandas, así que comparte el archivo original siempre que puedas."
updated: '2026-10-31'
---

## Cómo revisar si tu pantalla muestra bandas

Un degradado es la imagen más difícil de mostrar limpiamente para una pantalla: cada columna de píxeles necesita un tono un poco distinto, y cualquier atajo en el panel o en la cadena de la señal convierte la mezcla suave en franjas visibles. Esta página dibuja un degradado diagonal entre dos colores, desde un azul brillante (`#007CF0`) hasta el cian (`#00DFD8`).

1. Desactiva el modo nocturno, los filtros de luz azul y cualquier modo de imagen “vívido” o de contraste dinámico.
2. Presiona <kbd>F</kbd> para ver en pantalla completa y mira la pantalla desde tu distancia habitual.
3. Busca franjas definidas que crucen la mezcla, y franjas teñidas de rosa o verde.
4. Ahora prueba un degradado exigente: haz clic en la primera muestra y escribe `000000`, luego en la segunda y escribe `333333`. En las mezclas oscuras y de bajo contraste es donde a las bandas más les cuesta esconderse.

## Cómo interpretar lo que ves

En una señal de 8 bits, cada canal de color tiene 256 niveles. Una mezcla de `#000000` a `#333333` solo tiene 51 escalones entre sus extremos, así que en una pantalla de 1920 píxeles de ancho cada escalón mide aproximadamente entre 30 y 40 píxeles, y con una mirada atenta se pueden ver en cualquier pantalla. Eso son matemáticas, no un defecto. Lo que sí apunta a un problema es:

- **Escalones desiguales**, cuando algunas bandas son mucho más anchas que otras.
- **Escalones de color**, cuando una mezcla gris muestra franjas rosas, verdes o moradas.
- **Manchas irregulares** en una zona que por lo demás es suave, señal de compresión o procesamiento intensos.
- **Muchas más bandas que en otra pantalla** con los mismos colores.

## Causas comunes y soluciones

| Causa | Qué probar |
|---|---|
| Panel de 6 bits con dithering | Suele darse en laptops y monitores económicos; no hay nada que arreglar, pero explica el resultado |
| Rango RGB limitado (16–235) | Configura la salida del controlador gráfico en rango completo para un monitor de computadora |
| Mejoras de imagen | Desactiva el contraste dinámico, los modos “vívidos” y la mejora de bordes |
| Perfil de color incorrecto | Restablece la configuración de color del monitor y el perfil de pantalla del sistema operativo |
| Video o imágenes comprimidos | Las bandas en streaming y en archivos JPEG vienen del archivo, no de la pantalla |

## Cómo crear fondos de degradado

La misma herramienta crea fondos de pantalla de degradado simples y limpios. Haz clic en una muestra para elegir cada color, presiona <kbd>R</kbd> para obtener una pareja aleatoria y descarga el resultado en horizontal, vertical, cuadrado o con la resolución de tu pantalla. Las mezclas entre tonos vecinos, como de azul a cian o de naranja a rosa, se ven más suaves y forman menos bandas que las mezclas entre colores opuestos, que pasan por un gris apagado en el medio. Para un solo color sólido, usa la [pantalla de color personalizado](tool:custom-color-screen); para comparar cuatro colores lado a lado, la [pantalla HEX](tool:hex-screen) los muestra como franjas.

Las bandas son solo una de varias revisiones de pantalla. Los píxeles defectuosos se ven mejor en el [test de píxeles muertos de seis colores](tool:dead-pixel-test), y el brillo desigual, en la [pantalla gris](tool:grey-screen) uniforme.
