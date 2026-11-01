---
status: complete
title: Gradient Screen Online - Fullscreen Color Banding & Calibration Test
description: A smooth two-color fullscreen gradient for spotting color banding on your monitor, phone, or TV, plus custom gradient backgrounds you can download as PNG.
h1: Gradient Screen.
breadcrumb: Gradient Screen
appDescription: Smooth multi-stop color transitions across the display for color banding tests, display calibration, and ambient backdrops. Open in fullscreen.
lede: A smooth two-color fullscreen gradient for spotting color banding and posterization on any display, and for making custom gradient backgrounds and wallpapers.
chips:
  - fullscreen
  - brightness
  - copy color
  - download wallpaper
  - ambient mode
shortcuts:
  - keys: F
    label: Fullscreen mode
  - keys: R
    label: Random gradient
  - keys: C
    label: Copy selected color
  - keys: D
    label: Download image
faqs:
  - q: What is color banding?
    a: Banding is when a smooth blend of colors shows visible steps or stripes instead of a seamless transition. It happens when a screen, file, or video cannot represent enough in-between shades, so neighboring shades are rounded to the same value and form bands.
  - q: Is some banding normal on every screen?
    a: Yes, in low-contrast gradients. A standard 8-bit signal has 256 levels per color channel, so a blend between two similar colors may only have a few dozen distinct steps across the whole screen. Even, neutral steps are expected; uneven, tinted, or very wide bands point to the display or its settings.
  - q: Why does my monitor show more banding than my phone?
    a: Common reasons are a 6-bit panel that simulates 8-bit color, a limited RGB range or wrong color profile on the computer, dynamic contrast or picture enhancements on the monitor, and heavy color management. Check the monitor's picture mode and the graphics driver's output settings first.
  - q: Can I make my own gradient?
    a: Yes. Click either color swatch to pick a new color, or type a HEX, RGB, or HSL value. Press R for a random two-color gradient, and save the result as a PNG with the Download button.
  - q: Does the downloaded gradient look the same as on screen?
    a: The PNG uses the same two colors, drawn corner to corner across the chosen size (landscape, portrait, square, or your device resolution). Image viewers and social apps may compress it, and compression adds its own banding, so share the original file where you can.
updated: '2026-10-30'
---

## How to Check Your Screen for Banding

A gradient is the hardest image for a display to show cleanly: every column of pixels needs a slightly different shade, and any shortcut in the panel or the signal chain turns the smooth blend into visible stripes. This page draws a diagonal gradient between two colors, starting from a bright blue (`#007CF0`) to cyan (`#00DFD8`).

1. Turn off night mode, blue-light filters, and any "vivid" or dynamic contrast picture mode.
2. Press <kbd>F</kbd> for fullscreen and look at the screen from your normal viewing distance.
3. Look for distinct stripes running across the blend, and for stripes that are tinted pink or green.
4. Now try a demanding gradient: click the first swatch and enter `000000`, then the second and enter `333333`. Dark, low-contrast blends are where banding is hardest to hide.

## Reading What You See

In an 8-bit signal each color channel has 256 levels. A blend from `#000000` to `#333333` only has 51 steps between its ends, so on a 1920-pixel-wide screen each step is roughly 30 to 40 pixels wide, and a careful look can see them on any screen. That is the math, not a fault. What points to a problem is:

- **Uneven steps**, where some bands are much wider than others.
- **Colored steps**, where a grey blend shows pink, green, or purple stripes.
- **Blotchy patches** in an otherwise smooth area, a sign of heavy compression or processing.
- **Far more banding than another screen** shows with the same colors.

## Common Causes and Fixes

| Cause | What to try |
|---|---|
| 6-bit panel with dithering | Usually budget laptops and monitors; nothing to fix, but it explains the result |
| Limited RGB range (16–235) | Set the graphics driver's output to full range for a computer monitor |
| Picture enhancements | Turn off dynamic contrast, "vivid" modes, and edge enhancement |
| Wrong color profile | Reset the monitor's color settings and the operating system's display profile |
| Compressed video or images | Banding in streams and JPEGs comes from the file, not the screen |

## Making Gradient Backgrounds

The same tool makes plain, clean gradient wallpapers. Click a swatch to choose each color, press <kbd>R</kbd> for a random pair, and download the result in landscape, portrait, square, or your screen's resolution. Blends between neighboring hues, such as blue to cyan or orange to pink, look smoother and band less than blends between opposite colors, which pass through a muddy grey in the middle. For a single solid color, use the [custom color screen](tool:custom-color-screen); to compare four colors side by side, the [HEX screen](tool:hex-screen) shows them as bands.

Banding is one of several display checks. Faulty pixels show up best in the [six-color dead pixel test](tool:dead-pixel-test), and uneven brightness on the flat [grey screen](tool:grey-screen).
