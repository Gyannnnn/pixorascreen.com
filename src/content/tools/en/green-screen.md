---
status: complete
title: Green Screen Online - Free Chroma Key & Fullscreen Tool
description: Free online green screen for chroma key video, streaming backgrounds, and display testing. Fullscreen, adjustable brightness, works on any device.
h1: 'Green Screen: Free Fullscreen Chroma Key & Video Background Tool'
breadcrumb: Green Screen
appDescription: Free online green screen for chroma key video, streaming backgrounds, and display testing. Fullscreen, adjustable brightness, works on any device.
lede: A full green screen in pure chroma key green (#00FF00) for keying out backgrounds in video, streaming, and calls, plus a quick check of your display's green sub-pixels.
chips:
  - fullscreen
  - brightness
  - copy HEX
  - copy RGB
  - HEX input
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
  - q: Which shade of green is best for chroma key?
    a: 'On a screen, pure green (#00FF00) keys cleanly because it is far from skin tones. Painted walls and fabric backdrops use a darker chroma green, around #00B140, because studio lights brighten them. If your camera shows the screen as a pale yellow-green, lower the brightness slider until it records as a solid, saturated green.'
  - q: Can I use my monitor as a green screen in Zoom?
    a: Yes, if the screen fills the area behind your head in the camera frame. Open this page in fullscreen on a large monitor or TV behind you, then in Zoom go to Settings, Background & effects, choose a virtual background, and tick "I have a green screen". OBS users can add a Chroma Key filter to the camera source instead.
  - q: Why do I see lines or flicker when I film the green screen?
    a: The camera's shutter is out of step with the screen's refresh. Set the shutter speed to match the mains frequency where you live, 1/60 s in 60 Hz regions or 1/50 s in 50 Hz regions, or a multiple of it, and the rolling bands should disappear.
  - q: Can I download a green screen background image?
    a: Yes. Choose landscape (1920×1080), portrait (1080×1920), square (1080×1080), or your device's resolution, then press Download or the D key. You get a plain green PNG, useful as a placeholder layer when building a template you will key later.
  - q: Should I use a green screen or a blue screen?
    a: Green is the usual choice for digital cameras because their sensors record green with the most detail and the least noise, so it keys more cleanly with less light. Choose blue when your subject wears green or has green elements, or when green spill on skin is hard to control.
  - q: Can a green screen check my display for dead pixels?
    a: Yes, for the green channel. On a solid green field, a pixel whose green sub-pixel has failed shows as a black dot. Green also makes up most of the brightness we perceive, so uneven backlighting shows up clearly on it.
updated: '2026-10-30'
---

## How to Use This Green Screen for Chroma Key

This page fills your display with pure chroma key green (`#00FF00`). Put the screen behind whatever you are filming, and any video editor or streaming app with a chroma key effect can replace the green with a new background. It works best for subjects that are smaller than the screen: products on a desk, hands demonstrating something, a toy or figure, or a head-and-shoulders shot in front of a large TV. For full-body shots you still need a fabric or painted backdrop, because no monitor is big enough to fill the frame.

1. Use the largest display you have, open this page, and press <kbd>F</kbd> for fullscreen so no browser bars break the green.
2. Place the subject a short distance in front of the screen, not touching it. Distance reduces green light bouncing onto the subject.
3. Light the subject with a lamp or window. The green screen should be the background, not the main light source.
4. Lock the camera's exposure and white balance so the green stays the same shade from frame to frame.
5. If the green looks pale or yellowish on camera, lower this page's brightness slider until it records as a deep, even green.
6. Add a chroma key effect in your software: the Chroma Key filter in OBS, Ultra Key in Premiere Pro, the 3D Keyer in DaVinci Resolve, or Chroma key in CapCut.

## Fixing Common Keying Problems

### Green edges around hair or objects

Green light is spilling onto the subject. Move the subject further from the screen, lower the screen brightness, and use your editor's spill suppression setting.

### Rolling lines or flicker

The camera shutter is out of sync with the screen's refresh rate. Use a shutter speed of 1/60 s in 60 Hz countries or 1/50 s in 50 Hz countries.

### Moiré patterns

Fine rippled patterns appear when the camera can resolve the screen's pixel grid. Open the lens aperture so the background softens slightly, or move the camera a little further back.

### A patchy key

Reflections of lamps and windows on the glass break up the green. Turn the screen slightly away from bright light sources, or switch off the room light that reflects in it.

## Green Screen for Streaming and Video Calls

A large monitor or TV behind your chair can act as a green screen for a webcam that frames your head and shoulders. Zoom has an "I have a green screen" option in its background settings, which uses the solid color for a sharper cutout than its automatic background removal. In OBS Studio, right-click the camera source, open Filters, and add Chroma Key. Keep the screen behind you evenly lit and free of reflections, and make sure no part of your clothing is close to the same green.

## Using Green to Test a Display

A solid green field lights only the green sub-pixels. A failed one shows as a black dot, and because green carries roughly 70% of the brightness the eye perceives, uneven backlighting and clouding are easier to see here than on red or blue. Compare with the [red screen](tool:red-screen) and the [blue screen](tool:blue-screen) to check all three channels, or run the [six-color dead pixel test](tool:dead-pixel-test) to go through them in order. If you need a different key color, the [custom color screen](tool:custom-color-screen) accepts any HEX, RGB, or HSL value.
