---
status: complete
title: Black Screen Test - Free Fullscreen Tool | PixoraScreen
description: Run a free black screen test to check for dead pixels, stuck pixels, and backlight bleeding. Fullscreen, dark-room safe, works on any device.
h1: 'Black Screen Test: Free Fullscreen Display & Dead Pixel Checker'
breadcrumb: Black Screen Test
appDescription: Run a free black screen test to check for dead pixels, stuck pixels, and backlight bleeding. Fullscreen, dark-room safe, works on any device.
lede: A true black fullscreen surface for OLED checks, dead pixel discovery, glare reduction, and dark-room use.
chips:
  - fullscreen
  - brightness
  - copy HEX
  - copy RGB
  - favorite colors
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
  - q: Can a black screen test find dead pixels?
    a: Not reliably. A dead pixel never lights up, so on a black background it looks exactly like every other pixel. A black screen finds the opposite fault, pixels that stay lit. To catch dead pixels, switch to a white screen, where an unlit dot shows up as a dark speck.
  - q: Is some backlight bleed normal?
    a: A little light at the edges is common on LCD monitors and laptops, especially edge-lit IPS panels, and usually only shows in a dark room at full brightness. If you can see bright patches during normal use, such as a dark movie scene at your usual brightness, it is worth a warranty or return claim.
  - q: What is the difference between IPS glow and backlight bleed?
    a: IPS glow is a silvery sheen that changes when you move your head or view the panel from an angle. Backlight bleed stays in the same place, usually as a yellowish or bluish patch at a corner or edge, no matter where you sit.
  - q: Does a black screen save battery?
    a: On OLED and AMOLED screens, yes. Black pixels are switched off, so they use almost no power. On LCD screens the backlight stays on behind the black image, so the saving is small, and putting the display to sleep saves far more.
  - q: Why does black look dark grey on my monitor?
    a: Most LCD panels let a little backlight through, so black looks dark grey in a dim room; VA panels hold black better than IPS, and OLED shows true black. If black looks clearly washed out, check that your graphics card or TV is not sending a limited (16-235) RGB range to a full-range monitor.
  - q: How do I get out of the fullscreen black screen?
    a: Press Esc on a keyboard, or move the mouse and click the exit button. On phones and tablets, use the back gesture or swipe down from the top edge.
updated: '2026-10-30'
---

## How to Perform a Black Screen Test

A black screen test fills your whole display with pure black (`#000000`). Black is the darkest state a working screen can produce, so anything that still gives off light stands out at once: a pixel stuck on, light leaking around the edges, or a cloudy patch that looks grey instead of black. These faults hide behind normal windows and wallpapers, which is why a new monitor, laptop, or phone can look perfect until you watch a dark film in a dark room.

1. Raise your display's own brightness to maximum in the system or monitor settings. The slider on this page can only dim the image or add a software boost; it cannot turn up the backlight.
2. Darken the room and wipe the screen, so reflections and dust do not look like defects.
3. Press <kbd>F</kbd> or the Fullscreen button so no browser bars or taskbar cover the edges. On iPhone, Safari does not let web pages go fully fullscreen; turn the phone sideways and let the address bar collapse.
4. Give your eyes about 30 seconds to adjust, then scan in a grid: the four corners, the edges, then the middle.
5. Look again from straight on and from a low angle. Some glow only appears off-axis.
6. Press <kbd>Esc</kbd> to leave fullscreen.

## What a Black Screen Reveals

### Stuck and hot pixels

A sub-pixel that is stuck on shows as a bright red, green, or blue dot; a fully lit pixel shows as white. These are the defects black is best at finding, because even one lit sub-pixel is impossible to miss on a dark field.

### Backlight bleed

LCD panels are lit from behind or from the edges. When the panel is pressed unevenly against its frame, light escapes and appears as bright patches, usually in the corners or along the bottom edge.

### IPS glow

IPS panels show a soft sheen in the corners when viewed at an angle. Unlike bleed, it moves and changes as you move your head, and it fades when you sit further back. Some glow is a property of the technology rather than a fault.

### Clouding and blooming

Blotchy lighter areas across the middle of the screen are called clouding. On screens with local dimming, a bright mouse pointer on black can also cause a halo around it, known as blooming. Both are easy to judge against a full black field.

## What It Cannot Show

A black screen will not reveal dead pixels, because an unlit pixel is invisible against black; use the [white screen](tool:white-screen) for that. It also cannot show burn-in, which needs a mid-grey fill like the one in the [OLED burn-in test](tool:oled-burn-in-test). If one color channel looks wrong, the [red screen](tool:red-screen) and other single-color screens isolate each sub-pixel, and the [six-color dead pixel test](tool:dead-pixel-test) runs the whole sequence for you.

## Is It a Defect or Normal?

Most manufacturers judge pixel faults against the ISO 9241-307 classes, which usually allow a few dark dots but fewer bright ones. Policies differ by brand, so check your warranty terms and test a new display while you can still return it. When you photograph a fault for a claim, lower the camera exposure: phone cameras brighten dark scenes and make normal bleed look far worse than it is.

## Other Uses for a Black Screen

- **OLED standby:** on an OLED TV or phone, a black screen turns the pixels off, so it is a calm "off" state that does not wear the panel.
- **Second monitor during a film:** blank a side monitor without unplugging it, so its light does not distract you.
- **Projector checks:** compare how dark black really is before and after closing the curtains.
- **Video editing:** the Download button saves a black PNG at 1920×1080, 1080×1920 for vertical video, 1080×1080 square, or your device's exact resolution. Press <kbd>D</kbd> as a shortcut.
