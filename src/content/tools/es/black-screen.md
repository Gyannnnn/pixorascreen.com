---
status: complete
sourceHash: e0c26a47a4b8ec5e
title: "Pantalla negra - Prueba gratis en pantalla completa | PixoraScreen"
description: "Haz una prueba de pantalla negra gratis para detectar píxeles muertos, píxeles atascados y sangrado de luz de fondo. En pantalla completa, apta para cuartos oscuros y compatible con cualquier dispositivo."
h1: "Pantalla negra: prueba gratis en pantalla completa para detectar píxeles defectuosos"
breadcrumb: "Pantalla negra"
appDescription: "Haz una prueba de pantalla negra gratis para detectar píxeles muertos, píxeles atascados y sangrado de luz de fondo. En pantalla completa, apta para cuartos oscuros y compatible con cualquier dispositivo."
lede: "Una superficie negra real en pantalla completa para revisar pantallas OLED, encontrar píxeles muertos, reducir reflejos y usar en habitaciones oscuras."
chips:
  - "pantalla completa"
  - "brillo"
  - "copiar HEX"
  - "copiar RGB"
  - "colores favoritos"
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
  - q: "¿Una prueba de pantalla negra puede encontrar píxeles muertos?"
    a: "No de forma fiable. Un píxel muerto nunca se enciende, así que sobre un fondo negro se ve exactamente igual que los demás. La pantalla negra encuentra el fallo contrario: píxeles que se quedan encendidos. Para detectar píxeles muertos, cambia a una pantalla blanca, donde un punto apagado aparece como una mota oscura."
  - q: "¿Es normal algo de sangrado de luz de fondo?"
    a: "Un poco de luz en los bordes es común en monitores LCD y laptops, sobre todo en paneles IPS con iluminación lateral, y normalmente solo se nota en un cuarto oscuro con el brillo al máximo. Si ves manchas brillantes en el uso normal, por ejemplo en una escena oscura de una película con tu brillo habitual, vale la pena pedir la garantía o una devolución."
  - q: "¿Cuál es la diferencia entre el IPS glow y el sangrado de luz?"
    a: "El IPS glow es un brillo plateado que cambia cuando mueves la cabeza o miras el panel desde un ángulo. El sangrado de luz se queda en el mismo lugar, normalmente como una mancha amarillenta o azulada en una esquina o un borde, sin importar desde dónde mires."
  - q: "¿Una pantalla negra ahorra batería?"
    a: "En pantallas OLED y AMOLED, sí. Los píxeles negros se apagan, así que casi no consumen energía. En pantallas LCD la luz de fondo sigue encendida detrás de la imagen negra, así que el ahorro es pequeño; suspender la pantalla ahorra mucho más."
  - q: "¿Por qué el negro se ve gris oscuro en mi monitor?"
    a: "La mayoría de los paneles LCD dejan pasar un poco de luz de fondo, así que el negro se ve gris oscuro en un cuarto con poca luz; los paneles VA mantienen mejor el negro que los IPS, y los OLED muestran un negro real. Si el negro se ve claramente lavado, revisa que tu tarjeta gráfica o tu TV no esté enviando un rango RGB limitado (16-235) a un monitor de rango completo."
  - q: "¿Cómo salgo de la pantalla negra en pantalla completa?"
    a: "Presiona Esc en el teclado, o mueve el mouse y haz clic en el botón de salir. En celulares y tablets, usa el gesto de volver o desliza hacia abajo desde el borde superior."
updated: '2026-10-31'
---

## Cómo hacer una prueba de pantalla negra

Una prueba de pantalla negra llena toda tu pantalla de negro puro (`#000000`). El negro es el estado más oscuro que puede producir una pantalla que funciona bien, así que cualquier cosa que siga emitiendo luz destaca de inmediato: un píxel que se quedó encendido, luz que se escapa por los bordes o una zona nublada que se ve gris en vez de negra. Estos fallos se esconden detrás de las ventanas y los fondos de pantalla normales; por eso un monitor, una laptop o un celular nuevos pueden verse perfectos hasta que ves una película oscura en un cuarto oscuro.

1. Sube al máximo el brillo de tu pantalla desde la configuración del sistema o del monitor. El control deslizante de esta página solo puede atenuar la imagen o añadir un refuerzo por software; no puede subir la luz de fondo.
2. Oscurece la habitación y limpia la pantalla, para que los reflejos y el polvo no parezcan defectos.
3. Presiona <kbd>F</kbd> o el botón de pantalla completa para que ninguna barra del navegador ni la barra de tareas tape los bordes. En iPhone, Safari no permite que las páginas web ocupen toda la pantalla; gira el teléfono en horizontal y deja que la barra de direcciones se oculte.
4. Dale a tus ojos unos 30 segundos para adaptarse y luego recorre la pantalla por zonas: las cuatro esquinas, los bordes y después el centro.
5. Vuelve a mirar de frente y desde un ángulo bajo. Algunos brillos solo aparecen fuera del eje.
6. Presiona <kbd>Esc</kbd> para salir de pantalla completa.

## Qué revela una pantalla negra

### Píxeles atascados y calientes

Un subpíxel atascado encendido se ve como un punto rojo, verde o azul brillante; un píxel completamente encendido se ve blanco. Son los defectos que mejor encuentra el negro, porque incluso un solo subpíxel encendido es imposible de pasar por alto sobre un fondo oscuro.

### Sangrado de luz de fondo

Los paneles LCD se iluminan desde atrás o desde los bordes. Cuando el panel queda presionado de forma desigual contra su marco, la luz se escapa y aparece como manchas brillantes, normalmente en las esquinas o a lo largo del borde inferior.

### IPS glow

Los paneles IPS muestran un brillo suave en las esquinas cuando se miran en ángulo. A diferencia del sangrado, se mueve y cambia cuando mueves la cabeza, y se atenúa si te sientas más lejos. Algo de glow es una característica de la tecnología, no un defecto.

### Nubosidad y halos

Las zonas más claras y manchadas en el centro de la pantalla se llaman nubosidad (clouding). En pantallas con atenuación local, un puntero brillante sobre negro también puede crear un halo a su alrededor, conocido como blooming. Ambos se evalúan fácilmente sobre un fondo completamente negro.

## Lo que no puede mostrar

Una pantalla negra no revela píxeles muertos, porque un píxel apagado es invisible sobre el negro; para eso usa la [pantalla blanca](tool:white-screen). Tampoco puede mostrar el burn-in, que necesita un relleno gris medio como el del [test de burn-in OLED](tool:oled-burn-in-test). Si un canal de color se ve mal, la [pantalla roja](tool:red-screen) y las demás pantallas de un solo color aíslan cada subpíxel, y el [test de píxeles muertos de seis colores](tool:dead-pixel-test) recorre toda la secuencia por ti.

## ¿Es un defecto o es normal?

La mayoría de los fabricantes evalúan los fallos de píxeles según las clases de la norma ISO 9241-307, que suelen permitir algunos puntos oscuros pero menos puntos brillantes. Las políticas cambian según la marca, así que revisa las condiciones de tu garantía y prueba una pantalla nueva mientras todavía puedas devolverla. Si fotografías un fallo para un reclamo, baja la exposición de la cámara: las cámaras de los celulares aclaran las escenas oscuras y hacen que un sangrado normal parezca mucho peor de lo que es.

## Otros usos de una pantalla negra

- **Reposo en OLED:** en una TV o un celular OLED, una pantalla negra apaga los píxeles, así que es un estado de «apagado» tranquilo que no desgasta el panel.
- **Segundo monitor durante una película:** oscurece un monitor lateral sin desconectarlo, para que su luz no te distraiga.
- **Pruebas de proyector:** compara qué tan oscuro es realmente el negro antes y después de cerrar las cortinas.
- **Edición de video:** el botón Descargar guarda un PNG negro de 1920×1080, 1080×1920 para video vertical, 1080×1080 cuadrado o la resolución exacta de tu dispositivo. Presiona <kbd>D</kbd> como atajo.
