---
status: complete
title: Grey Screen Online - Free Fullscreen Tool
description: A neutral mid-grey fullscreen (#808080) for spotting uneven backlight, the dirty screen effect, color tint shifts, and OLED burn-in, plus near-black checks.
h1: Grey Screen.
breadcrumb: Grey Screen
appDescription: A neutral grey fullscreen surface for uniformity, brightness balance, and midtone display checks. Open in fullscreen, adjust brightness, and test your display.
lede: A neutral mid-grey fullscreen (#808080) for spotting uneven backlight, the dirty screen effect, tint shifts, and OLED burn-in that bright colors hide.
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
  - q: 'Why is #808080 called 50% grey if it does not look half as bright?'
    a: 'The number is halfway between black and white, but screens use gamma encoding, so #808080 actually gives off only about 22% of the light of full white. It still looks like a middle grey to the eye, because our perception of brightness is not linear either.'
  - q: Which grey level shows the dirty screen effect best?
    a: Darker greys usually do. Start with this page's mid-grey, then type 333333 (about 20% grey) and 1A1A1A (about 10%) into the HEX field. Faint vertical or horizontal bands that stay put while you move your head are the dirty screen effect.
  - q: Can a grey screen show OLED burn-in?
    a: Yes. Burn-in is easiest to see on a flat mid-grey, where a faint outline of a status bar, logo, or keyboard shows as a slightly darker or tinted shape. The OLED burn-in test steps through several grey levels and adds a moving pattern for image retention.
  - q: What is mura?
    a: Mura is the Japanese word for unevenness, used for blotchy or cloudy patches in a panel left over from manufacturing. It shows best on a uniform grey and is a property of the individual panel, so it does not change with settings.
  - q: Can I use a grey screen as a neutral background for color work?
    a: Yes. Photo editors use neutral grey around images because a colored surround shifts how we judge color. A grey second screen, or a grey wallpaper downloaded from this page, keeps the area around your work neutral.
updated: '2026-10-30'
---

## Why Mid-Grey Finds What Bright Colors Hide

White and black are the extremes of what a display can show, and many panels look their best there. Faults in brightness and color uniformity are easiest to see in the middle of the range, where the panel has to hold an exact partial level everywhere at once. This page fills the screen with `#808080`, the classic 50% grey, which is perfectly neutral, with equal red, green, and blue.

1. Turn off Night Light, Night Shift, or any eye-comfort mode, so the grey stays neutral.
2. Press <kbd>F</kbd> for fullscreen, and darken the room a little.
3. Look across the whole screen from your normal seat, then from further back.
4. Repeat with a darker grey, such as `333333`, typed into the HEX field.

## What to Look For

### Uneven brightness and vignetting

Darker corners or edges, or one side brighter than the other, are common on edge-lit LCD monitors and laptops. They show far more clearly on grey than on white.

### The dirty screen effect

On large LCD and OLED TVs, faint vertical or horizontal bands that stay fixed while you move your head are known as the dirty screen effect. It is most visible in sports with large plain areas, such as a football field or an ice rink, and on darker greys.

### Tint shifts

A truly neutral grey should look the same color everywhere. Areas that lean pink, green, or blue are color uniformity faults; they are easier to judge on grey than on white because the eye is more sensitive to tint at mid levels.

### Mura and clouding

Cloudy or blotchy patches left over from manufacturing are called mura. They are a property of the individual panel, so settings will not remove them.

### OLED burn-in

Faint shapes of a status bar, a logo, or an on-screen keyboard show up on grey as slightly darker or tinted outlines. The [OLED burn-in test](tool:oled-burn-in-test) steps through several grey levels and includes a moving pattern for clearing temporary image retention.

## Near-Black Greys

OLED screens can struggle with the darkest greys just above black, showing blotches or a slight flicker there. Type `0A0A0A`, `141414`, and `1A1A1A` into the HEX field in turn. Each should look like a smooth, slightly lighter step. The [black screen](tool:black-screen) checks pure black, and the [gradient screen](tool:gradient-screen) shows a smooth ramp where banding, visible steps between shades, stands out.

## A Neutral Grey for Color Work

Photo and video editors surround images with neutral grey for a reason: a colored background shifts how we perceive colors next to it. A grey second monitor, or a grey wallpaper saved with the Download button, keeps your surroundings neutral while you edit. For a full panel check in one pass, run the [six-color dead pixel test](tool:dead-pixel-test), which includes grey alongside the primaries.
