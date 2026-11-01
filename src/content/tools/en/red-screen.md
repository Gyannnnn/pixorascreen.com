---
status: complete
title: Red Screen Test - Free Fullscreen Tool for Dead Pixel Check | PixoraScreen
description: Free red screen test for dead pixel and red sub-pixel detection. Also useful as a red light screen for night vision and eye comfort. Fullscreen, adjustable brightness.
h1: 'Red Screen Test: Dead Pixel Checker & Red Light Screen'
breadcrumb: Red Screen Test
appDescription: Free red screen test for dead pixel and red sub-pixel detection. Also useful as a red light screen for night vision and eye comfort. Fullscreen, adjustable brightness.
lede: A solid red fullscreen (#FF0000) for checking your display's red sub-pixels, plus a dim red light for stargazing, night reading, and video lighting effects.
chips:
  - fullscreen
  - brightness
  - copy HEX
  - copy RGB
  - HSL input
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
  - q: What does a red screen test show that a white screen does not?
    a: Red lights only the red sub-pixel in every pixel. A red sub-pixel that is dead or dim can hide inside a white pixel, because the green and blue around it still light up, but on a solid red field it shows as a dark dot.
  - q: What does a yellow or pink dot on the red screen mean?
    a: A different sub-pixel is stuck on. Red plus a stuck green sub-pixel looks yellow, and red plus a stuck blue sub-pixel looks magenta or pink. A black dot means the red sub-pixel itself has failed.
  - q: Does a red screen help preserve night vision?
    a: 'Only when it is dim. The rod cells your eyes use in the dark are least sensitive to deep red, which is why astronomers read charts by red light. Lower your device brightness to its minimum and this page''s slider to 20%, or pick a darker red such as #400000 in the custom color screen.'
  - q: Is a red screen better than a white screen at night?
    a: Red light contains none of the blue wavelengths that suppress melatonin most strongly, so a dim red screen disturbs evening routines less than a bright white one. Any bright screen close to your face can still keep you awake, so keep it dim and at a distance.
  - q: Why does my whole screen look red or pink?
    a: Check the settings first. Night Light or Night Shift at full strength, a color filter or color tint in the accessibility settings, or a monitor color preset can all tint the screen. If the tint flickers or changes when you move the cable, a damaged video cable or loose connector is a likely cause.
  - q: How do I make my iPhone screen red permanently?
    a: Open Settings, Accessibility, Display & Text Size, Color Filters. Turn Color Filters on, choose Color Tint, and move Intensity and Hue to full. You can add it to the Accessibility Shortcut so a triple-click of the side button switches the red tint on and off.
updated: '2026-10-30'
---

## How to Run a Red Screen Test

This page fills the display with pure red (`#FF0000`). Every pixel on an LCD or OLED screen is built from a red, a green, and a blue sub-pixel, and pure red switches on only the red ones. That makes it the cleanest way to check one color channel on its own, which a [white screen](tool:white-screen) or [black screen](tool:black-screen) cannot do.

1. Clean the screen, so dust is not mistaken for a fault.
2. Raise your device's brightness, open this page, and press <kbd>F</kbd> for fullscreen.
3. Scan the screen slowly, corner by corner, from close up. On phones and high-resolution laptops, a phone camera zoomed in on the glass works as a magnifier.
4. Note the position of any dot that is not the same red as its surroundings, then check the same spot on the [green screen](tool:green-screen) and the [blue screen](tool:blue-screen).

## What a Red Screen Reveals

### Dead or weak red sub-pixels

A black dot on red means the red sub-pixel at that point is not lighting. A dot that is visibly darker red means the sub-pixel is weak. Both are hard to see on normal content, because the pixel's other two sub-pixels keep it looking roughly right.

### Stuck green or blue sub-pixels

Any extra color mixed into the red points to a different stuck sub-pixel. A yellow dot means a green sub-pixel is stuck on; a magenta or pink dot means a blue one is. The [six-color dead pixel test](tool:dead-pixel-test) confirms the diagnosis by cycling every channel.

### Uneven color across the panel

Red is a strong test of uniformity on LCD screens, because shifts toward orange or pink in one area are easy to spot. On an OLED, faint shapes from static elements such as a taskbar can also show through a solid color, although mid-grey fills in the [OLED burn-in test](tool:oled-burn-in-test) separate burn-in more clearly.

## Red Light for Night Vision

After about 20 to 30 minutes in the dark, your eyes switch to rod cells that are very sensitive to dim light but barely respond to deep red. A dim red light lets you see a star chart, a camera's controls, or a page without undoing that adaptation, which is why astronomers and campers use red flashlights. To use this page that way:

- Lower your device's brightness to the minimum.
- Set this page's brightness slider to 20%.
- For an even gentler light, open the [custom color screen](tool:custom-color-screen) and enter a dark red such as `#400000`.

A bright red screen still dazzles. The benefit comes from red light at a low level.

## Other Uses

- **Mood and party lighting:** a TV or monitor in fullscreen red washes a room or a desk setup with color.
- **Video effects:** a red screen just out of frame gives a subject a red rim light for an alarm, horror, or nightclub look.
- **Projector checks:** a solid primary color shows whether each color in the projector's image reaches the edges evenly.
- **Images:** press <kbd>D</kbd> to download a red PNG at 1920×1080, 1080×1920, 1080×1080, or your screen's resolution.
