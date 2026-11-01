---
status: complete
sourceHash: 472e899ce9bbb51f
title: "Broma de pantalla azul falsa - Simulador de BSOD de Windows 10/11 | PixoraScreen"
description: "Pantalla de error de Windows falsa y realista para bromas, transmisiones y capacitación técnica. BSOD de Windows 10/11 fiel al original, con progreso animado, 8 códigos de detención y código QR."
h1: "Broma de pantalla azul."
breadcrumb: "Broma de pantalla azul"
appDescription: "Pantalla de error de Windows falsa y realista para bromas, transmisiones y capacitación técnica. BSOD de Windows 10/11 fiel al original, con progreso animado, 8 códigos de detención y código QR."
lede: "Una pantalla azul de la muerte de Windows realista, con un porcentaje que sube, un código de detención al azar y un código QR. Funciona en la pestaña del navegador y no cambia nada en la computadora."
chips:
  - "pantalla completa"
  - "aviso para salir"
  - "progreso animado"
  - "códigos de detención"
  - "código QR"
shortcuts:
  - keys: F
    label: "Pantalla completa"
  - keys: Esc
    label: "Salir de pantalla completa"
faqs:
  - q: "¿La pantalla azul falsa es segura para mi computadora?"
    a: "Sí. Es una página web común dibujada con HTML y JavaScript. No instala nada, no cambia ninguna configuración y no puede bloquear la computadora. Presiona Esc o cierra la pestaña y todo vuelve a la normalidad."
  - q: "¿Cómo salgo de la pantalla azul falsa?"
    a: "Presiona Esc para salir de pantalla completa y la página vuelve a la normalidad. En una pantalla táctil, desliza hacia abajo desde el borde superior o usa el gesto de volver. Cerrar la pestaña del navegador también la termina."
  - q: "¿Puedo cambiar cuánto tarda el fallo falso?"
    a: "Sí. Haz clic en el ícono de engranaje antes de empezar. Duración define cuánto tarda el porcentaje en llegar al 100 %, de 5 a 180 segundos, y Porcentaje inicial permite que el conteo empiece en cualquier punto entre 0 % y 95 %, para que parezca que el fallo lleva un rato."
  - q: "¿Qué códigos de detención muestra el simulador?"
    a: "Cada vez que se carga la página, elige uno de ocho códigos de detención reales de Windows: CRITICAL_PROCESS_DIED, SYSTEM_SERVICE_EXCEPTION, MEMORY_MANAGEMENT, IRQL_NOT_LESS_OR_EQUAL, KMODE_EXCEPTION_NOT_HANDLED, PAGE_FAULT_IN_NONPAGED_AREA, DRIVER_IRQL_NOT_LESS_OR_EQUAL o BAD_POOL_HEADER."
  - q: "¿Windows 11 todavía falla con una pantalla azul?"
    a: "Depende de la versión. Windows 10 y la mayoría de las PC con Windows 11 anteriores a las actualizaciones de 2025 muestran el diseño azul que se recrea aquí. En 2025 Microsoft empezó a implementar en Windows 11 una pantalla de error negra más simple, así que en un equipo con Windows 11 totalmente actualizado la versión azul puede resultar menos familiar."
  - q: "¿Funciona en una Mac, una Chromebook o un celular?"
    a: "Funciona en cualquier navegador moderno, así que sí, en todos. Aun así, es más convincente en una laptop o computadora de escritorio con Windows, porque es el único lugar donde alguien espera ver una pantalla de error de Windows."
updated: '2026-10-31'
---

## Cómo preparar la broma de pantalla azul

La página recrea la pantalla de error que muestra Windows después de un fallo grave: la gran carita triste, «Tu PC tuvo un problema y debe reiniciarse», un porcentaje que sube hasta 100, un código QR y un código de detención. Todo funciona dentro de la pestaña del navegador, así que parece un fallo mientras la computadora sigue funcionando con normalidad por debajo.

1. Abre esta página en la computadora que quieras usar, idealmente una laptop o computadora de escritorio con Windows.
2. Haz clic en el ícono de engranaje en la esquina de la vista previa. Ajusta **Duración** para definir cuánto tarda el conteo en llegar al 100 %, entre 5 y 180 segundos, y **Porcentaje inicial** si quieres que empiece a la mitad.
3. Cierra el panel de configuración y presiona <kbd>F</kbd> o el botón de pantalla completa. Las pestañas y la barra de direcciones del navegador desaparecen, y el conteo empieza.
4. Mueve el puntero del mouse al borde de la pantalla y déjalo ahí.
5. Cuando la broma haya hecho efecto, presiona <kbd>Esc</kbd> para terminarla.

El porcentaje no sube de forma pareja. Como en la pantalla real, se detiene en puntos al azar durante uno o dos segundos antes de seguir, y eso es lo que la hace creíble. Cada vez que se carga la página se elige un nuevo código de detención.

## Qué significan los códigos de detención

Los ocho códigos de detención de esta página son errores reales de Windows. Si ves uno en un fallo de verdad, esto es más o menos lo que indica:

| Código de detención | Qué suele significar |
|---|---|
| CRITICAL_PROCESS_DIED | Un proceso sin el que Windows no puede funcionar se detuvo inesperadamente |
| SYSTEM_SERVICE_EXCEPTION | Un servicio del sistema o un controlador encontró un error que no pudo manejar |
| MEMORY_MANAGEMENT | Windows detectó un error de memoria, por una RAM defectuosa o un controlador |
| IRQL_NOT_LESS_OR_EQUAL | Un controlador accedió a memoria a la que no tenía permitido acceder en ese momento |
| DRIVER_IRQL_NOT_LESS_OR_EQUAL | El mismo fallo, atribuido a un controlador específico |
| KMODE_EXCEPTION_NOT_HANDLED | Falló un programa que se ejecutaba en modo kernel |
| PAGE_FAULT_IN_NONPAGED_AREA | Algo hizo referencia a una memoria que no existía |
| BAD_POOL_HEADER | Se dañó el registro interno de memoria de Windows, a menudo por un controlador |

## Si ves una pantalla azul real

Una sola pantalla azul después de actualizar un controlador o Windows es común y muchas veces no vuelve a aparecer. Anota el código de detención, deja que la PC se reinicie e instala las actualizaciones pendientes de Windows y del controlador gráfico. Si el mismo código sigue apareciendo, búscalo en el sitio de soporte de Microsoft, deshaz el último cambio de hardware o de controladores y ejecuta el Diagnóstico de memoria de Windows si el código menciona la memoria. Una pantalla azul no borra tus archivos; la computadora solo se reinicia.

## Úsala con responsabilidad

Una buena broma termina con todos riéndose en uno o dos minutos. Revélala pronto y elige bien el momento: no cuando alguien corre contra una fecha de entrega o tiene trabajo sin guardar que le dará pánico perder. Nunca uses una pantalla de error falsa para que alguien llame a un número de teléfono, pague una «reparación» o instale algo. Esos son los trucos de los estafadores de soporte técnico, y las pantallas de error reales nunca piden nada de eso.

## Otras pantallas de error y actualización

Para una PC más antigua, la [pantalla de fallo de Windows XP](tool:windows-xp-crash) recrea los diálogos de error de explorer.exe de esa época. La [pantalla falsa de actualización de Windows](tool:windows-update) es más lenta: una actualización que parece no terminar nunca. La [pantalla de virus falso](tool:fake-virus-screen) muestra advertencias de seguridad simuladas en lugar de un fallo, y la [pantalla rota](tool:broken-screen) hace que la propia pantalla parezca agrietada.
