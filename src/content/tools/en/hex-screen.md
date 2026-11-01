---
status: complete
title: HEX Screen Test Online - Fullscreen Color Code Preview & Palette Tool
description: 'Preview HEX color codes and 4-color palettes in fullscreen. Compare brand colors side by side, check dark mode shades like #121212, and download palette images.'
h1: HEX Screen.
breadcrumb: HEX Screen
appDescription: 'Preview exact CSS HEX color codes in full screen. Test brand colors, compare 4-color palettes, inspect dark mode shades (#121212, #000000), and download 4K wallpapers.'
lede: Preview exact HEX color codes in fullscreen, compare up to four colors side by side, check dark mode shades, and download the palette as an image.
chips:
  - fullscreen
  - brightness
  - HEX & RGB input
  - copy HEX
  - HEX presets
shortcuts:
  - keys: F
    label: Fullscreen mode
  - keys: R
    label: Random 4-color palette
  - keys: C
    label: Copy selected HEX code
  - keys: D
    label: Download palette image
faqs:
  - q: How do I change one of the four colors?
    a: Click the swatch you want to change; it becomes the selected color. Then pick a new color in the picker or type a HEX, RGB, or HSL value. Only the selected band changes, and C copies its HEX code.
  - q: What HEX formats does the screen accept?
    a: 'Six-digit codes, with or without the leading #, such as #7C3AED or 7c3aed. Three-digit shorthand such as #FFF and eight-digit codes with transparency are not supported; expand #FFF to #FFFFFF.'
  - q: 'Why do dark themes use #121212 instead of pure black?'
    a: 'Pure black makes elevation and shadows invisible and can look harsh next to white text. On OLED screens, pure black pixels are switched off, and turning them back on while scrolling can leave a brief smear. A very dark grey such as #121212 avoids both, which is why Material Design recommends it.'
  - q: Will my brand color look the same on every screen?
    a: Not exactly. A HEX code describes a color in the sRGB standard, but screens differ in brightness, white point, and color gamut, and wide-gamut displays can make colors look more saturated. Checking the palette in fullscreen on several devices shows you the range your audience will see.
  - q: Can I download my palette?
    a: Yes. Press D or the Download button to save the four colors as vertical bands in a PNG, in landscape, portrait, square, or your device's resolution. The file name lists the four HEX codes.
updated: '2026-10-30'
---

## Previewing Colors at Full Size

Colors look different in a small swatch than they do filling a whole screen. A shade that seems calm in a color picker can feel loud as a full background, and two colors that look distinct as dots can blur together as large areas. The HEX screen shows up to four colors as tall bands across the whole display, so you can judge them at the size they will really be used.

It opens with a sample palette: near-black `#171717`, violet `#7C3AED`, hot pink `#FF0080`, and amber `#F9CB28`.

1. Click a band's swatch to select it, then type a HEX code or pick a color.
2. Repeat for the other bands, or press <kbd>R</kbd> for a random palette to start from.
3. Press <kbd>F</kbd> for fullscreen and look at the palette from a normal distance.
4. Press <kbd>C</kbd> to copy the selected color's code, and <kbd>D</kbd> to save the palette as an image.

## Checking a Brand or Interface Palette

- **Compare across devices.** Open the same palette on a laptop, a phone, and a TV. Colors that hold together on one screen can clash or wash out on another.
- **Look at neighboring colors.** Two saturated colors side by side, such as red next to blue, can seem to vibrate at their edge. Large bands make that easy to notice before it ends up in a design.
- **Check the darks.** Near-black shades that are clearly different on a good monitor may merge on a cheaper screen. If two dark bands look identical, give them more contrast.
- **Remember text contrast.** Bands show how colors relate as surfaces, but readable text also needs enough contrast between text and background. Check text pairs with a WCAG contrast checker.

## Dark Mode Shades

The presets row includes the two most common dark-mode backgrounds. **OLED Black** (`#000000`) switches OLED pixels off completely. **Dark Mode** (`#121212`) is the very dark grey recommended in Material Design: it keeps shadows and elevated surfaces visible, looks softer next to white text, and avoids the slight smear some OLED screens show when pure black pixels switch on while scrolling. Put both on screen next to each other to see which suits your design. The presets also include a bright blue (`#0070F3`) and white, and Reset returns to the starting palette.

## How HEX Codes Work

A HEX code such as `#7C3AED` is three pairs of digits for red, green, and blue, each from `00` (off) to `FF` (full). So `#FF0000` is pure red, `#000000` is black, and `#FFFFFF` is white. Each pair is a number from 0 to 255 written in base 16, which is why the same color can also be written as RGB `124, 58, 237`.

To fill the screen with one color instead of four, use the [custom color screen](tool:custom-color-screen). For a smooth blend between two colors, the [gradient screen](tool:gradient-screen) shows the transition and any banding along it, and the [RGB screen](tool:rgb-screen) compares the display's pure primaries.
