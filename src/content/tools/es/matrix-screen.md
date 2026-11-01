---
status: complete
sourceHash: 0603e05d7fc4787c
title: "Pantalla Matrix – Lluvia digital online y efecto Matrix personalizable"
description: "El código verde que cae de Matrix a pantalla completa, con katakana, binario o tu propio texto, 6 paletas de color, velocidad, densidad y estelas ajustables, y un sintetizador ambiental."
h1: "Pantalla Matrix."
breadcrumb: "Pantalla Matrix"
appDescription: "Personaliza una pantalla Matrix online con lluvia digital, colores neón brillantes, sonidos ambientales cyberpunk y tu propio nombre en el código. Efecto Matrix a pantalla completa para computadoras, laptops, monitores y televisores, sin instalar nada."
lede: "El código verde que cae de Matrix a pantalla completa, con katakana, binario, letras o tus propias palabras, seis paletas de color, velocidad, densidad y estelas ajustables, y una banda sonora de sintetizador ambiental."
chips:
  - "modo pantalla completa"
  - "nombre o texto personalizado"
  - "temas de color"
  - "velocidad y densidad de la lluvia"
  - "tamaño de fuente y brillo"
shortcuts:
  - keys: F
    label: "Pantalla completa"
  - keys: Espacio
    label: "Mostrar u ocultar el panel de personalización"
  - keys: M
    label: "Activar o desactivar el sonido ambiental"
  - keys: C
    label: "Cambiar el tipo de caracteres"
  - keys: R
    label: "Restablecer opciones"
  - keys: Esc
    label: "Salir de pantalla completa"
faqs:
  - q: "¿Qué caracteres usa el código original de Matrix?"
    a: "La lluvia digital de la película está hecha sobre todo de katakana japonés de ancho medio en espejo, mezclado con números y algunas letras latinas. El modo Matrix clásico de esta página usa el mismo estilo de katakana; presiona C para cambiar a binario, letras comunes o tu propio texto."
  - q: "¿Puedo hacer que el código escriba mi nombre o un mensaje?"
    a: "Sí. Abre la configuración con Espacio, elige Texto personalizado y escribe tu texto. Deletreado en orden deja caer las letras en secuencia para que las palabras se puedan leer en las columnas, mientras que Letras al azar reparte esas mismas letras de forma aleatoria."
  - q: "¿La pantalla Matrix es mala para una pantalla OLED?"
    a: "Es bastante suave. El fondo es negro, así que la mayoría de los píxeles quedan apagados, y los caracteres nunca se quedan en el mismo lugar. Como con cualquier pantalla que se deja encendida durante horas, mantén un brillo moderado y apágala cuando nadie la esté mirando."
  - q: "¿Tiene sonido?"
    a: "Solo si tú quieres. El Sintetizador de audio ambiental genera en el navegador un zumbido grave y atmosférico. Presiona M para activarlo o desactivarlo y usa el control de volumen para ajustar su nivel."
  - q: "¿Por qué el código se ve escaso o demasiado lleno?"
    a: "Depende de la Densidad de columnas, el Tamaño de fuente y el tamaño de tu pantalla. Las fuentes más pequeñas y una densidad más alta llenan un monitor grande; en un celular, una fuente más grande con menos densidad mantiene legibles los caracteres."
updated: '2026-10-31'
---

## La lluvia digital de Matrix

En Matrix (1999), el mundo dentro de la simulación se muestra como columnas de caracteres verdes brillantes que llueven sobre una pantalla negra. El efecto se convirtió en una de las imágenes más conocidas del cine y, desde entonces, en el símbolo de hackers, código y computadoras. Esta página lo recrea en tu navegador: decenas de columnas que caen a distintas velocidades, cada una encabezada por un carácter brillante y con una estela que se apaga hacia un verde más oscuro.

1. Presiona <kbd>F</kbd> para ver en pantalla completa.
2. Presiona <kbd>Espacio</kbd> para abrir el personalizador.
3. Elige un tipo de caracteres y una paleta de color, y luego ajusta los controles.
4. Presiona <kbd>Espacio</kbd> otra vez para ocultar el panel y deja caer el código.

## Tipos de caracteres

Presiona <kbd>C</kbd> para recorrerlos, o elige uno en la configuración:

- **Matrix clásico:** katakana japonés de ancho medio y números, lo más parecido a la película.
- **Código binario:** solo ceros y unos, para un aspecto de “computadora” más literal.
- **Alfanumérico:** letras y números.
- **Texto personalizado, deletreado en orden:** tus propias palabras, que caen letra por letra para que se puedan leer a lo largo de las columnas. Ideal para nombres en una fiesta o el nombre de un canal en un stream.
- **Texto personalizado, letras al azar:** las letras de tu texto en orden aleatorio, para un toque personal más sutil.

## Ajustes finos del aspecto

**Tamaño de fuente** (de 10 a 36) define qué tan grandes son los caracteres. **Velocidad de la lluvia** define qué tan rápido caen. **Densidad de columnas** decide cuántas columnas están activas a la vez, y **Largo de la estela**, qué tan larga es la cola que se desvanece detrás de cada una. Seis paletas cambian el brillo: Verde clásico, Cian cyberpunk, Rojo carmesí, Ámbar dorado, Púrpura neón y Arcoíris. Presiona <kbd>R</kbd> en cualquier momento para volver a los valores predeterminados.

## Cómo se dibuja el efecto

La lluvia digital se vuelve a dibujar muchas veces por segundo. En cada fotograma, la página limpia la pantalla a negro y vuelve a dibujar cada columna: un carácter “cabeza” brillante al frente, seguido de una cola de caracteres que se atenúan cuanto más lejos están de la cabeza. A medida que la cabeza baja, toda la columna se mueve con ella, y eso se percibe como caracteres que brillan y luego se desvanecen. Largo de la estela decide cuántos caracteres tiene la cola antes de desaparecer, y Densidad de columnas, cuántas columnas caen a la vez. Muchas versiones clásicas pintan en cambio una capa negra semitransparente sobre el fotograma anterior; dibujar cada cola de forma explícita mantiene los caracteres nítidos y evita manchas grises en pantallas brillantes.

## Ideas para usarla

- **Fondos para streams y videos:** una pantalla de “empezamos pronto” o un fondo detrás de la cámara para canales de tecnología y gaming.
- **Fiestas temáticas y escape rooms:** una guarida hacker o un set de ciencia ficción, idealmente con la banda sonora del sintetizador activada.
- **Ambiente para el escritorio:** una lluvia lenta y escasa en un segundo monitor mientras programas.
- **Inicio de clases:** un gancho visual rápido antes de una clase de informática o ciberseguridad.

Para una pantalla que escribe código de aspecto real mientras presionas teclas, prueba [Hacker Typer](tool:hacker-typer). La [pantalla de radar](tool:radar-screen) agrega una pantalla de sala de control con barrido, y la [pantalla de lluvia](tool:rain-screen) ofrece la lluvia original, la que moja.
