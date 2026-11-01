---
status: complete
sourceHash: 02be85950d057e7e
title: "Pantalla azul online - Fondo y prueba de pantalla completa | PixoraScreen"
description: "Pantalla azul gratis para pruebas de pantalla, fondos de videollamadas y revisión de monitores. En pantalla completa, con brillo ajustable y en cualquier dispositivo."
h1: "Pantalla azul."
breadcrumb: "Pantalla azul"
appDescription: "Pantalla azul gratis para pruebas de pantalla, fondos de videollamadas y revisión de monitores. En pantalla completa, con brillo ajustable y en cualquier dispositivo."
lede: "Un azul saturado a pantalla completa (#0066FF) para revisar el canal azul de tu pantalla, darle a una escena una luz azul fría o recortar un fondo donde el verde no sirve."
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
  - q: "¿Esta es la pantalla azul de la muerte de Windows?"
    a: "No. Esta página es un color azul liso para revisar pantallas e iluminar. Si quieres la pantalla de error de Windows con la carita triste y el código de detención, usa la broma de pantalla azul, que la recrea de forma inofensiva en el navegador."
  - q: "¿Cómo pruebo solo los subpíxeles azules?"
    a: "El tono predeterminado, #0066FF, incluye un poco de verde. Para probar solo el canal azul, escribe 0000FF en el campo HEX. Así cada píxel enciende únicamente su subpíxel azul, y uno muerto aparece como un punto negro."
  - q: "¿Por qué el azul se ve desigual en mi celular OLED?"
    a: "El material OLED azul envejece más rápido que el rojo y el verde, así que las zonas que mostraron contenido fijo y brillante durante años pueden verse un poco más tenues o cálidas sobre un campo azul. Una revisión breve es inofensiva; si ves manchas, confírmalas en una pantalla gris media."
  - q: "¿Cuándo conviene usar una pantalla azul en vez de una verde?"
    a: "Usa el azul cuando el sujeto viste de verde, sostiene objetos verdes o hay verde en la escena, o cuando la luz verde que se refleja en la piel es difícil de controlar. El verde suele recortarse mejor con cámaras digitales, así que en los demás casos sigue siendo la primera opción."
  - q: "¿Por qué toda mi pantalla se volvió azul?"
    a: "Si el escritorio se ve teñido de azul, revisa el preset de temperatura de color del monitor (un ajuste «frío» se ve azul) y cualquier filtro de color en la configuración de accesibilidad. Si el rojo y el verde parecen faltar por completo, vuelve a conectar o reemplaza el cable de video, porque un cable dañado puede perder canales de color."
updated: '2026-10-31'
---

## Cómo revisar el canal azul de tu pantalla

El azul es el color con menos brillo percibido: un subpíxel azul totalmente encendido se ve mucho más tenue que uno rojo o verde a la misma potencia. Por eso los fallos del canal azul pasan desapercibidos fácilmente con contenido normal, y un campo azul sólido es la mejor forma de encontrarlos.

Esta página se abre en `#0066FF`, un azul intenso y algo luminoso que es cómodo de mirar. Para una prueba estricta solo de los subpíxeles azules, escribe `0000FF` en el campo HEX para que se apague el canal verde.

1. Presiona <kbd>F</kbd> para ver en pantalla completa y sube el brillo de tu dispositivo.
2. Recorre la pantalla de cerca. Un punto negro significa que un subpíxel azul está muerto. Un punto blanco, cian o magenta significa que otro subpíxel está atascado encendido.
3. Revisa los mismos puntos en la [pantalla roja](tool:red-screen) y la [pantalla verde](tool:green-screen) para saber qué canal falla, o deja que el [test de píxeles muertos de seis colores](tool:dead-pixel-test) lo recorra todo.

## El azul en pantallas OLED

En celulares, TV y monitores OLED, el material azul que emite luz se desgasta más rápido que el rojo o el verde. Los paneles lo compensan, pero en pantallas que mostraron la misma interfaz brillante durante años, un campo azul puede revelar manchas tenues donde solía estar una barra de estado o un teclado. Si notas algo, confírmalo con los rellenos de gris medio del [test de burn-in OLED](tool:oled-burn-in-test), que separan el burn-in de la irregularidad normal.

## Usar el azul como luz

- **Escenas frías y nocturnas:** un monitor o una tablet en azul a pantalla completa, justo fuera del encuadre, le da al sujeto la luz fría de una escena nocturna, de una cara iluminada por una pantalla o de un ambiente submarino.
- **Escritorios y setups gamer:** una segunda pantalla en azul agrega color a una habitación sin tira LED. Baja el control de brillo para un resplandor más tranquilo.
- **Contraste de color para fotos:** luz azul de un lado y la [pantalla naranja](tool:orange-screen) del otro dan la iluminación dividida cálida y fría típica de los pósteres de cine.

## Pantalla azul para croma

La pantalla azul era el estándar para recortar antes del video digital y se sigue usando cuando el verde chocaría con el sujeto, por ejemplo con ropa verde, plantas o un logo verde. Pon esta página a pantalla completa detrás de un sujeto pequeño, mantenlo a poca distancia para que la luz azul no se derrame sobre él y elige el azul como color de recorte en tu editor. Para casi todas las demás tomas, la [pantalla verde](tool:green-screen) se recorta mejor, porque los sensores de las cámaras registran el verde con más detalle.

## No es la pantalla azul de la muerte

Muchas personas que buscan una pantalla azul se refieren a la pantalla de error de Windows. Esta página es solo un color. Para la carita triste, el código de detención y el porcentaje que sube, abre la [broma de pantalla azul](tool:blue-screen-prank). Si tu computadora está mostrando una de verdad, esa página también explica qué significan los códigos de detención.
