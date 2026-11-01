---
status: complete
sourceHash: 57eb745ea44d2bdc
title: "Simulador de pantalla de Ubuntu online - Pantalla falsa de actualización y arranque de Ubuntu gratis"
description: "La clásica pantalla de arranque de Ubuntu a pantalla completa, el logo de Ubuntu sobre berenjena con cinco puntos que laten, para bromas de Linux, videos, demostraciones en clase y nostalgia de escritorio retro."
h1: "Actualización de Ubuntu."
breadcrumb: "Actualización de Ubuntu"
appDescription: "Convierte cualquier pantalla en un simulador realista de actualización falsa de Ubuntu, con animación de arranque auténtica, barra de progreso, ciclo de reinicio y la estética de terminal naranja de Ubuntu. Herramienta gratis de bromas online para demostraciones de Linux, utilería de video y capacitación en clase. Pantalla completa, atajos de teclado y brillo ajustable. Sin descargas, sin instalar nada, sin riesgos."
lede: "La clásica pantalla de arranque de Ubuntu a pantalla completa, el logo de Ubuntu sobre un fondo berenjena con cinco puntos que laten, para bromas de Linux, escenas de video y demostraciones en clase."
chips:
  - "pantalla completa"
  - "animación de arranque auténtica"
  - "simulación de progreso no lineal"
  - "ciclo de reinicio"
  - "brillo"
shortcuts:
  - keys: F
    label: "Pantalla completa"
  - keys: Esc
    label: "Salir de pantalla completa"
faqs:
  - q: "¿Qué es esta pantalla de Ubuntu?"
    a: "Recrea la pantalla de arranque que Ubuntu mostró durante muchos años al iniciar o al terminar actualizaciones: el logo blanco de Ubuntu sobre un fondo berenjena oscuro, con cinco puntos que se encienden por turnos. Es solo una imagen; no ejecuta Linux ni cambia nada en tu computadora."
  - q: "¿Tiene configuración, como las pantallas de actualización de Windows y Mac?"
    a: "No. Muestra la pantalla de arranque con sus puntos en bucle, que es todo lo que muestra también la pantalla real. Para porcentajes, escenarios y temporizadores, usa la pantalla falsa de actualización de Windows o la de actualización de macOS."
  - q: "¿Por qué Ubuntu usa ese color morado?"
    a: "El berenjena, un morado oscuro, forma parte de la identidad visual de Ubuntu desde principios de la década de 2010; se usa en sus pantallas de arranque, en el fondo de la terminal y en su imagen de marca, junto con su característico naranja."
  - q: "¿Cómo veo qué está haciendo un arranque real de Ubuntu detrás de la pantalla de carga?"
    a: "Presiona Esc mientras se muestra la pantalla de arranque. En un sistema Ubuntu real, eso cambia del logo al registro de arranque en texto, que muestra cada servicio a medida que inicia y es el primer lugar donde mirar si el arranque se queda trabado."
  - q: "¿Es convincente en una laptop con Windows?"
    a: "Solo para quien no sepa que la laptop usa Windows. Funciona mejor en una máquina en la que la gente ya espera ver Linux, en un laboratorio de computación o como escena en un video."
updated: '2026-10-31'
---

## La pantalla de arranque de Ubuntu

Ubuntu es una de las distribuciones de Linux más populares, y durante muchos años su pantalla de inicio se veía así: el logotipo blanco de Ubuntu centrado sobre un fondo berenjena oscuro, con una fila de cinco puntos debajo que se encienden uno tras otro mientras el sistema carga. Esta página recrea esa pantalla a pantalla completa.

1. Presiona <kbd>F</kbd>, o el botón de la esquina, para llenar la pantalla.
2. Deja el mouse quieto; el puntero se oculta a los dos segundos.
3. Presiona <kbd>Esc</kbd> para salir de pantalla completa.

No hay ninguna configuración que cambiar, porque la pantalla real tampoco tiene: simplemente espera con sus puntos hasta que el sistema esté listo.

## Ideas para usarla

- **Bromas en el laboratorio de computación:** en un laboratorio u oficina llena de equipos con Linux, una pantalla de arranque que nunca termina es una broma suave.
- **Videos y películas:** un momento creíble de “computadora iniciando” para una escena con un usuario de Linux, una sala de servidores o un personaje hacker.
- **Enseñanza:** presenta Linux a una clase con la pantalla que mucha gente ve la primera vez que instala Ubuntu.
- **Nostalgia:** quienes usan Ubuntu desde hace tiempo reconocerán los puntos de las versiones de la década de 2010.

## Cómo ocultar el navegador por completo

El modo de pantalla completa oculta el navegador en la mayoría de los sistemas, pero para un laboratorio de computación o una pantalla que se queda encendida mucho tiempo, el modo quiosco es aún más limpio. En Linux, inicia Chromium o Google Chrome con la opción `--kiosk` seguida de la dirección de esta página, y la pantalla de arranque llena la pantalla sin pestañas, barra de direcciones ni botón de salida; ciérrala con <kbd>Alt</kbd> + <kbd>F4</kbd>. En Firefox, <kbd>F11</kbd> da una vista a pantalla completa parecida.

## Qué pasa detrás de una pantalla de arranque real de Ubuntu

En un sistema real, la pantalla de arranque la dibuja un programa llamado Plymouth, que tapa los mensajes de texto que se imprimen mientras Linux inicia. Detrás, se carga el kernel, los controladores detectan tu hardware y arrancan decenas de servicios. En Ubuntu, las actualizaciones normalmente se instalan mientras sigues trabajando, pero algunas, como las del kernel, terminan en el siguiente reinicio detrás de esta misma pantalla.

Si una máquina Ubuntu real parece trabada en la pantalla de arranque:

1. Presiona <kbd>Esc</kbd> para cambiar al registro de arranque en texto y ver qué paso está esperando.
2. Espera unos minutos si menciona una revisión del disco o un servicio de red; los dos pueden tardar.
3. Si nunca continúa, reinicia y abre el menú GRUB (mantén presionada <kbd>Mayús</kbd> en equipos con BIOS antiguos o presiona varias veces <kbd>Esc</kbd> en equipos UEFI), elige Opciones avanzadas y arranca con un kernel anterior o en modo de recuperación.

Para otras pantallas de sistema falsas, la [pantalla falsa de actualización de Windows](tool:windows-update) y la [actualización de macOS](tool:macos-screen) agregan progreso, temporizadores y escenarios, y la [pantalla de actualización de Android](tool:android-update) cubre los celulares.
