---
status: complete
title: Custom Color Screen - Free Fullscreen Color Picker | PixoraScreen
description: Pick any custom color and fill your screen fullscreen. Free color picker with HEX, RGB, and HSL input, saved favorites, and calibration-friendly display testing.
h1: Custom Color Screen — Fullscreen Color Picker & Display Tester
breadcrumb: Custom Color Screen
appDescription: Pick any custom color and fill your screen fullscreen. Free color picker with HEX, RGB, and HSL input, saved favorites, and calibration-friendly display testing.
lede: Fill your screen with any color. Type a HEX, RGB, or HSL value, use the color picker, or roll a random shade, then save the ones you like as favorites.
chips:
  - fullscreen
  - brightness
  - HEX input
  - RGB input
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
  - q: Which color formats can I type in?
    a: 'HEX as six digits with or without the # (for example #0070F3), RGB as three numbers from 0 to 255 separated by commas (0, 112, 243), and HSL as hue, saturation, and lightness (hsl(212, 100%, 48%)). Change any one field and the other two update to match.'
  - q: Are my favorite colors saved?
    a: Yes, in this browser on this device. Favorites live in the browser's local storage, so they are still there next time you open the page, but they do not sync to other devices, and clearing the site's data in your browser removes them.
  - q: How can I check my monitor for black crush?
    a: 'Enter #0A0A0A in fullscreen, then #141414, then #000000. On a well set up screen, each step looks slightly different. If the first two look identical to pure black, the display is crushing shadow detail; adjust its brightness, black level, or gamma setting and try again.'
  - q: Can I match the colors of two monitors with this?
    a: You can compare them. Open the same HEX value on both screens side by side and differences in tint and brightness become obvious, which helps you adjust each monitor's color settings. Exact matching needs a hardware calibrator, because a screen cannot measure its own light output.
  - q: What color makes a good soft light for video calls?
    a: 'A warm off-white such as #FFF1DC is gentler on skin tones than pure white. Put the screen slightly above eye level, behind or beside the camera, and lower the brightness slider until the light looks natural on camera.'
  - q: Can I save the color as an image?
    a: Yes. Choose landscape (1920×1080), portrait (1080×1920), square (1080×1080), or your device's resolution and press Download or the D key. The PNG's file name includes the color code.
updated: '2026-10-30'
---

## How to Set a Custom Screen Color

The custom color screen starts on a bright blue (`#0070F3`), and you can change it in four ways:

- **Color picker:** click the swatch to open your system's color chooser and pick visually.
- **HEX:** type a six-digit code such as `#FFB347`. The `#` is optional.
- **RGB:** type three channel values from 0 to 255, separated by commas, such as `255, 179, 71`.
- **HSL:** type hue, saturation, and lightness, such as `hsl(35, 100%, 64%)`.

Every field updates the others as you type, so you can pick a shade with the picker and copy its exact HEX or RGB value straight away. Press <kbd>F</kbd> for fullscreen, <kbd>R</kbd> for a random color, and <kbd>C</kbd> to copy the current code.

## Which Format to Use

HEX is the format web and design tools such as Figma, Canva, and CSS expect. RGB matches the 0–255 channel values in photo editors and in many lighting apps. HSL is the most useful one for adjusting a color by eye: keep the hue the same and lower the lightness to get a darker version of a color, or lower the saturation to make it calmer, without guessing at new numbers.

## Saving Favorites

Press the Favorite button to keep the current color in your list below the controls. Click a saved color to bring it back, or remove it when you no longer need it. Favorites stay in this browser on this device, so a set of colors for a recurring video shoot or a brand palette is ready the next time you open the page.

## Useful Colors to Try

| Purpose | Color | Why it works |
|---|---|---|
| Soft video call light | `#FFF1DC` | Warm off-white that flatters skin more than pure white |
| Night reading, stargazing | `#400000` | Dim deep red that preserves dark-adapted vision |
| Dark mode preview | `#121212` | The dark grey many dark themes use instead of pure black |
| Black crush check | `#0A0A0A` | Should look just above black on a well set up screen |
| White clipping check | `#F5F5F5` | Should look just below pure white, not identical to it |
| Sunset mood light | `#FFB347` | A soft golden orange for warm ambience |

## Testing a Display With Specific Colors

Solid primaries find faulty pixels, and the [six-color dead pixel test](tool:dead-pixel-test) covers that in one pass. A custom color answers different questions. Enter your brand color to see how it looks on a phone, a laptop, and a TV. Step through near-black values to see where a screen stops showing shadow detail, or near-white values to see where highlights clip. Open the same code on two monitors to see which one runs warmer.

For a specific primary, the [red screen](tool:red-screen), [green screen](tool:green-screen), and [white screen](tool:white-screen) each have their own tips. To preview several colors next to each other, the [HEX screen](tool:hex-screen) shows four swatches at once, and the [gradient screen](tool:gradient-screen) blends two colors to check for banding.

## Downloading a Solid Color Image

The Download button saves a PNG of the current color in landscape (1920×1080), portrait (1080×1920), square (1080×1080), or your device's exact resolution. It is a quick way to make a plain background for a phone wallpaper, a slide, or a video title card in exactly the color you chose.
