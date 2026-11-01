---
status: complete
sourceHash: bf1eac1f2289d6ff
title: "Pantalla naranja - Prueba gratis en pantalla completa | PixoraScreen"
description: "Prueba de pantalla naranja gratis para revisar monitores y píxeles muertos, además de iluminación ambiental y fotografía. En pantalla completa, con control de brillo y en cualquier dispositivo."
h1: "Pantalla naranja: prueba de pantalla e iluminación a pantalla completa"
breadcrumb: "Pantalla naranja"
appDescription: "Prueba de pantalla naranja gratis para revisar monitores y píxeles muertos, además de iluminación ambiental y fotografía. En pantalla completa, con control de brillo y en cualquier dispositivo."
lede: "Un naranja cálido a pantalla completa (#FF8A00) para revisar los canales rojo y verde de tu pantalla, y para dar luz ámbar a fotos, videos y ambientes nocturnos."
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
  - q: "¿Qué puede mostrar una prueba de pantalla naranja?"
    a: "El naranja enciende los subpíxeles rojos a máxima potencia y los verdes a cerca de la mitad, con el azul apagado. Muestra fallos en los canales rojo y verde y cambios de color en el panel, pero no puede probar el azul. Para eso usa la pantalla azul o el test de píxeles muertos de seis colores."
  - q: "¿Por qué mi pantalla se pone naranja?"
    a: "Casi siempre es un filtro de luz azul. Luz nocturna en Windows, Night Shift en iPhone y Mac y los modos de confort visual o lectura en Android calientan la pantalla, a menudo con un horario al atardecer. Desactiva la función o cambia su horario en la configuración de pantalla y vuelven los colores normales."
  - q: "¿Puedo usar una pantalla naranja como luz cálida?"
    a: "Sí. Un naranja a pantalla completa da un brillo ámbar parecido a la luz de una vela o de un atardecer, sin luz azul. Atenúalo con el control de brillo para una luz suave por la noche, o déjalo brillante y cerca de un sujeto para un contraluz cálido en fotos."
  - q: "¿Qué código HEX tiene este naranja?"
    a: "Esta página usa #FF8A00, que es RGB 255, 138, 0. Como referencia, el color CSS llamado «orange» es #FFA500 y «darkorange» es #FF8C00. Puedes escribir cualquier otro tono en los campos HEX, RGB o HSL."
  - q: "¿Qué es la pantalla naranja de la muerte?"
    a: "Algunas PC con Windows han mostrado una versión naranja de la pantalla de error en lugar de la azul habitual, normalmente relacionada con los controladores gráficos o con hardware que falla. No tiene nada que ver con esta página. Trátala como cualquier pantalla de error: anota el código de detención y actualiza o revierte el controlador gráfico."
  - q: "¿Puedo descargar una imagen de fondo naranja?"
    a: "Sí. Elige horizontal (1920×1080), vertical (1080×1920), cuadrado (1080×1080) o la resolución de tu dispositivo y presiona Descargar o la tecla D para guardar un PNG naranja sólido."
updated: '2026-10-31'
---

## Cómo hacer una prueba de pantalla naranja

El naranja es un color mezclado: esta página muestra `#FF8A00`, que enciende los subpíxeles rojos a máxima potencia, los verdes a cerca de la mitad y deja el azul apagado. Esa mezcla lo hace útil para una tarea distinta de la de los colores primarios puros. Revisa dos canales a la vez y muestra qué tan parejo reproduce el panel un brillo intermedio de verde, que es donde algunos paneles se desvían hacia el amarillo o el rojo por zonas.

1. Desactiva Luz nocturna, Night Shift o cualquier modo de confort visual. Estos filtros llevan todos los colores hacia el naranja y esconderían lo que buscas.
2. Abre la página, presiona <kbd>F</kbd> para ver en pantalla completa y pon tu dispositivo con un brillo alto.
3. Recorre toda la pantalla buscando zonas que se vean más amarillas o más rojas que el resto.
4. Acércate y busca puntos sueltos de un color distinto al de su entorno.

## Cómo interpretar los resultados

- **Un punto verdoso u oscuro:** el subpíxel rojo de ese lugar falló y solo queda el verde tenue.
- **Un punto de un rojo más profundo:** el subpíxel verde no se enciende.
- **Un punto rosa pálido o blanquecino:** un subpíxel azul está atascado encendido y agrega un azul que no debería estar.
- **Zonas amarillas o rojas en la pantalla:** reproducción de color desigual, común en los bordes de paneles LCD económicos y en pantallas con una luz de fondo envejecida.

Como el naranja deja el azul apagado, no puede mostrar un subpíxel azul muerto. Revisa ese canal en la [pantalla azul](tool:blue-screen), compara solo el canal rojo en la [pantalla roja](tool:red-screen) o usa el [test de píxeles muertos de seis colores](tool:dead-pixel-test) para cubrirlo todo de una vez.

## El naranja como luz cálida

Una luz naranja sin nada de azul tiene un efecto distinto al de una lámpara blanca, y una pantalla permite colocarla exactamente donde la quieres.

- **Look de atardecer para fotos:** una tablet o una laptop en naranja a pantalla completa, justo fuera del encuadre y al costado de una cara, da en interiores la luz lateral cálida de la hora dorada. Apaga las luces de la habitación y deja que la pantalla naranja sea la única luz de ese lado.
- **Ambiente nocturno:** una TV o un monitor con poco brillo da un resplandor ámbar tranquilo para relajarse, sin el azul de la luz blanca.
- **Decoración de temporada y fiestas:** las vitrinas de otoño, las ventanas de Halloween y los streams temáticos quedan bien con una pantalla naranja sólida.
- **Fotos de producto y comida:** un fondo cálido debajo de una botella, una bebida o productos horneados agrega color sin editar.

Para un tono más suave y dorado, prueba la [pantalla amarilla](tool:yellow-screen) o escribe un tono como `#FFB347` en la [pantalla de color personalizado](tool:custom-color-screen).

## Guardar un fondo naranja

El botón Descargar exporta un PNG naranja sólido en horizontal (1920×1080), vertical (1080×1920), cuadrado (1080×1080) o la resolución exacta de tu pantalla. El nombre del archivo incluye el código HEX, algo útil cuando igualas colores en un proyecto. Copiar HEX y Copiar RGB ponen los valores exactos en tu portapapeles para las herramientas de diseño.
