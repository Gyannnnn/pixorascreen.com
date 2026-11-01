---
status: complete
title: Yellow Screen Online - Free Fullscreen Tool
description: A bright yellow fullscreen (#FFDD00) to check your display's red and green channels, spot an unwanted yellow tint, or add warm, sunny light to photos and video.
h1: Yellow Screen.
breadcrumb: Yellow Screen
appDescription: A bright yellow screen for visibility checks, warm fill light, and attention-grabbing full-screen color. Open in fullscreen, adjust brightness, and test your display.
lede: A bright yellow fullscreen (#FFDD00) for checking your display's red and green channels, comparing against an unwanted yellow tint, and adding sunny light to photos and video.
chips:
  - fullscreen
  - brightness
  - copy HEX
  - copy RGB
  - random color
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
  - q: Why does my whole screen look yellow?
    a: The most common cause is a blue-light filter such as Night Light, Night Shift, or Eye Comfort, often switched on by a sunset schedule. Other causes are a "warm" color-temperature preset on the monitor, a reading mode, an aging LCD backlight, or a screen protector that has yellowed with age.
  - q: What is the yellow screen of death?
    a: It is the nickname for the yellow-and-white error page that older ASP.NET websites show when the server code crashes, listing the error and a stack trace. It comes from the website, not your computer, and has nothing to do with this page.
  - q: What do colored dots on the yellow screen mean?
    a: Yellow mixes red and green with no blue. A green dot means a red sub-pixel is dead, a red or orange dot means a green sub-pixel is dead, and a near-white dot means a blue sub-pixel is stuck on.
  - q: Can I use a yellow screen to read at night?
    a: A dim yellow or amber light contains far less blue than white light, so it is gentler in the evening. Lower the brightness slider and your device brightness; for an even warmer tone, try the orange screen or a deep amber in the custom color screen.
  - q: Which HEX code does this yellow use?
    a: 'This page shows #FFDD00, a slightly golden yellow. Pure screen yellow is #FFFF00, and the CSS color named "gold" is #FFD700. Type any of them into the HEX field to compare.'
updated: '2026-10-30'
---

## Running a Yellow Screen Check

Yellow on a screen is not a color of its own: it is made by lighting the red and green sub-pixels together, with blue switched off. This page uses `#FFDD00`, a warm, slightly golden yellow. Because two channels are involved, a yellow field is a quick way to see whether red and green are balanced across the whole panel. A patch that drifts toward orange has weaker green there; a patch that looks greenish has weaker red.

1. Turn off Night Light, Night Shift, or any eye-comfort mode first. They push every color toward yellow and would hide uneven areas.
2. Press <kbd>F</kbd> for fullscreen and look across the screen from a normal distance.
3. Then move in close and look for single dots: green means a dead red sub-pixel, red or orange means a dead green sub-pixel, and near-white means a stuck blue sub-pixel.

Yellow cannot reveal a dead blue sub-pixel, because blue is off. The [blue screen](tool:blue-screen) covers that, and the [six-color dead pixel test](tool:dead-pixel-test) checks every channel in order.

## Is Your Screen Yellow When It Shouldn't Be?

If your normal desktop looks yellow, open the [white screen](tool:white-screen) and compare it with a sheet of white paper under daylight. A strong tint usually comes from one of these:

- **A blue-light filter** on a schedule: Night Light (Windows), Night Shift (Apple), or Eye Comfort and reading modes (Android).
- **A warm color preset** on the monitor or TV. Look for a 6500K, "Normal", or "sRGB" option instead.
- **True Tone or adaptive color** on Apple devices, which follows the color of the room light.
- **An aging screen protector** that has yellowed in sunlight.
- **An old LCD backlight.** Fluorescent backlights in older monitors turn yellow with age, and no setting fully corrects it.

## Yellow as Light and Background

- **Sunshine on a grey day:** a tablet at fullscreen yellow, a little to the side and above a face, adds the warmth of sunlight to a video call or selfie. Keep the brightness moderate so skin does not turn sallow.
- **Product photos:** a yellow background makes citrus, sneakers, and packaging look bright and cheerful, and the Download button exports the same color as a PNG for editing.
- **Attention on stage:** a full yellow screen on a projector works as a clear "break" or "time's up" signal in a classroom or meeting.
- **Mood lighting:** for an evening glow, dim it with the slider, or step to the warmer [orange screen](tool:orange-screen).

If you need a different shade, enter it in the [custom color screen](tool:custom-color-screen), from pale lemon to deep amber.
