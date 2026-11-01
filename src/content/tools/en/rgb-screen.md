---
status: complete
title: RGB Screen Test Online - Fullscreen Subpixel & Color Calibration
description: An RGB screen test that shows red, green, and blue side by side or one at a time in fullscreen, to compare your display's primaries and check each sub-pixel channel.
h1: RGB Screen.
breadcrumb: RGB Screen
appDescription: Perform an RGB screen test online in full screen. Inspect red, green, and blue subpixels, test for stuck or dead pixels, check monitor color channels, and calibrate displays.
lede: Red, green, and blue side by side or one at a time in fullscreen, to compare your display's three primary colors and check each sub-pixel channel.
chips:
  - fullscreen
  - brightness
  - RGB subpixel channels
  - copy RGB/HEX
  - auto color cycle
shortcuts:
  - keys: F
    label: Fullscreen mode
  - keys: R
    label: Pure red
  - keys: G
    label: Pure green
  - keys: B
    label: Pure blue
  - keys: W / K
    label: White / black
  - keys: S
    label: Red, green, and blue side by side
  - keys: D
    label: Download image
faqs:
  - q: What does the RGB split view show?
    a: It shows the display's three primary colors next to each other at full strength. You can compare how saturated and how bright each one looks, spot a primary that leans toward another color, and see at a glance if one channel is missing entirely, because its band would look black.
  - q: Can an RGB test find dead or stuck pixels?
    a: Yes, when you fill the screen with one color at a time. Press R, G, or B to light only that sub-pixel across the panel; a dead one shows as a black dot. The six-color dead pixel test walks through the same colors plus black, white, and grey.
  - q: Why does the red look orange or the green look yellowish?
    a: Each panel has its own primaries. Wide-gamut screens often show very saturated, neon-like primaries when the content is not color managed, while some budget screens have primaries that lean toward neighboring colors. An sRGB picture mode usually brings them closer to standard.
  - q: How can I see the sub-pixels themselves?
    a: Open a white or RGB screen and look at the glass through a magnifier, or with your phone camera's macro mode or maximum zoom. You will see the pattern of red, green, and blue elements, which differs between LCD stripes and the layouts used by OLED phones and TVs.
  - q: Is this an RGB lighting test for keyboards or LED strips?
    a: No. This page tests the screen it is opened on. RGB lighting on keyboards and LED strips is controlled by its own software, though a full red, green, or blue screen can be handy for matching their colors by eye.
updated: '2026-10-30'
---

## How to Use the RGB Screen

The page opens with the three primary colors side by side: pure red (`#FF0000`), pure green (`#00FF00`), and pure blue (`#0000FF`). Every color your screen shows is mixed from these three, so looking at them directly tells you a lot about the panel.

- Press <kbd>F</kbd> for fullscreen.
- Press <kbd>R</kbd>, <kbd>G</kbd>, or <kbd>B</kbd> to fill the whole screen with one primary, <kbd>W</kbd> for white, and <kbd>K</kbd> for black.
- Press <kbd>S</kbd> to return to the side-by-side view.
- The buttons under the preview do the same on touch screens, and each band can be changed to any color with its swatch.

## Comparing the Three Primaries

In the side-by-side view, look at each band in turn:

- **Is any band black or very dark?** A whole channel is missing, usually because of a loose or damaged video cable.
- **Does red lean orange, or green lean yellow?** The panel's primaries differ from the standard. Some variation is normal; an sRGB picture mode usually brings them closer.
- **Do the colors look neon and almost glowing?** That is typical of wide-gamut monitors showing ordinary content without color management. Photos and websites will look oversaturated in the same way.
- **Is one band much dimmer than the others in brightness?** Green always looks brightest and blue darkest, because of how the eye works. A blue that is close to invisible, or a red that looks brown, is worth investigating.

## Checking Each Sub-Pixel Channel

Filling the screen with one primary lights only that kind of sub-pixel across the entire panel. A black dot on the red fill is a dead red sub-pixel; a colored dot means another sub-pixel is stuck on. For a guided version with all six test colors and on-screen hints, use the [six-color dead pixel test](tool:dead-pixel-test), or open the [red screen](tool:red-screen), [green screen](tool:green-screen), or [blue screen](tool:blue-screen) for tips specific to each color.

## Seeing the Sub-Pixel Layout

Under magnification, a screen is a grid of tiny red, green, and blue elements, and the pattern differs by technology:

| Display type | Typical sub-pixel layout |
|---|---|
| Most LCD monitors and laptops | Vertical stripes in the order red, green, blue |
| Many OLED phones | Diamond or "PenTile" layouts with more green elements than red or blue |
| WOLED TVs and monitors | Red, green, blue, and an extra white sub-pixel |
| QD-OLED TVs and monitors | Red, green, and blue arranged in a triangle |

To see it on your own screen, show white or the RGB split and look closely through a magnifier, or with your phone camera's macro mode. The layout explains why small text can show colored fringes on some OLED monitors: text smoothing in most operating systems assumes the classic RGB stripe.

## Downloading the Pattern

Press <kbd>D</kbd> to save the current view as a PNG, either the three bands or a single color, in landscape, portrait, square, or your device's resolution. It is a quick test image for checking a TV or projector from a USB stick.
