---
status: complete
title: Blue Screen Online - Fullscreen Background & Display Test | PixoraScreen
description: Free blue screen for display testing, video call backgrounds, and monitor checks. Fullscreen, adjustable brightness, works on any device.
h1: Blue Screen.
breadcrumb: Blue Screen
appDescription: Free blue screen for display testing, video call backgrounds, and monitor checks. Fullscreen, adjustable brightness, works on any device.
lede: A saturated blue fullscreen (#0066FF) for checking your display's blue channel, giving a scene a cool blue light, or keying out a background where green will not work.
chips:
  - fullscreen
  - brightness
  - copy HEX
  - copy RGB
  - RGB input
shortcuts:
  - keys: F
    label: Fullscreen mode
  - keys: R
    label: Random color
  - keys: C
    label: Copy current color
  - keys: D
    label: Download image
faqs:
  - q: Is this the Windows blue screen of death?
    a: No. This page is a plain blue color for display checks and lighting. If you want the Windows crash screen with the sad face and stop code, use the blue screen prank, which recreates it harmlessly in the browser.
  - q: How do I test only the blue sub-pixels?
    a: 'The default shade, #0066FF, includes a little green. For a test of the blue channel alone, type 0000FF into the HEX field. Every pixel then lights only its blue sub-pixel, and a dead one shows as a black dot.'
  - q: Why does the blue look uneven on my OLED phone?
    a: Blue OLED material ages faster than red and green, so areas that showed bright static content for years can look slightly dimmer or warmer on a blue field. A brief check is harmless; if you see patches, confirm them on a mid-grey screen.
  - q: When should I use a blue screen instead of a green screen?
    a: Use blue when your subject wears green, holds green objects, or has green in the scene, or when green light reflecting onto skin is hard to control. Green usually keys more cleanly on digital cameras, so it remains the first choice otherwise.
  - q: Why has my whole screen turned blue?
    a: If the desktop looks tinted blue, check the monitor's color-temperature preset (a "cool" setting looks blue) and any color filter in the accessibility settings. If red and green seem missing entirely, reseat or replace the video cable, since a damaged cable can drop color channels.
updated: '2026-10-30'
---

## Checking Your Display's Blue Channel

Blue is the weakest color in perceived brightness: a fully lit blue sub-pixel looks far dimmer to the eye than a red or green one at the same power. That makes faults in the blue channel easy to miss on normal content, and a solid blue field the best way to find them.

This page opens on `#0066FF`, a strong, slightly bright blue that is comfortable to look at. For a strict test of the blue sub-pixels alone, type `0000FF` into the HEX field so the green channel switches off.

1. Press <kbd>F</kbd> for fullscreen and raise your device's brightness.
2. Scan the screen closely. A black dot means a blue sub-pixel is dead. A white, cyan, or magenta dot means another sub-pixel is stuck on.
3. Check the same spots on the [red screen](tool:red-screen) and [green screen](tool:green-screen) to see which channel is at fault, or let the [six-color dead pixel test](tool:dead-pixel-test) step through everything.

## Blue on OLED Screens

On OLED phones, TVs, and monitors, the blue light-emitting material wears out faster than red or green. Panels compensate for this, but on screens that have shown the same bright interface for years, a blue field can reveal faint patches where a status bar or keyboard used to sit. If you spot something, confirm it with the mid-grey fills in the [OLED burn-in test](tool:oled-burn-in-test), which separate burn-in from normal unevenness.

## Using Blue as Light

- **Cool, moonlit scenes:** a monitor or tablet at fullscreen blue, just out of frame, gives a subject the cold light of a night scene, a screen-lit face, or an underwater look.
- **Gaming and desk setups:** a second screen in blue adds color to a room without an LED strip. Lower the brightness slider for a calmer glow.
- **Color contrast for photos:** blue light on one side and the [orange screen](tool:orange-screen) on the other gives the warm-and-cool split lighting common in film posters.

## Blue Screen for Chroma Key

Blue screen was the standard for keying before digital video and is still used when green would clash with the subject, such as green clothing, plants, or a green logo. Set this page to fullscreen behind a small subject, keep the subject a short distance away so blue light does not spill onto it, and choose the blue key color in your editor. For most other shots, the [green screen](tool:green-screen) keys more cleanly, because camera sensors record green with more detail.

## Not the Blue Screen of Death

People searching for a blue screen often mean the Windows crash screen. This page is only a color. For the sad face, stop code, and climbing percentage, open the [blue screen prank](tool:blue-screen-prank). If your computer is showing a real one, that page also explains what the stop codes mean.
