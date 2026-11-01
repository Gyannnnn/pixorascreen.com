---
status: complete
title: OLED Burn-In Test - Free Fullscreen Screen Protection Checker | PixoraScreen
description: Free OLED burn-in test — check your OLED or AMOLED display for ghosting and image retention using solid colors and moving patterns. Works on phones, TVs, and monitors.
h1: 'OLED Burn-In Test: Check for Ghosting & Image Retention'
breadcrumb: OLED Burn-In Test
appDescription: Free OLED burn-in test with static color checks and a moving pattern mode, for checking and helping prevent screen ghosting and image retention.
lede: 'A two mode OLED burn-in test: flat grey and color fills to reveal existing ghosting, plus a moving pattern that helps prevent uneven pixel ageing on OLED and AMOLED screens.'
chips:
  - fullscreen
  - static check
  - moving pattern
  - grey and color fills
  - brightness
shortcuts:
  - keys: F
    label: Fullscreen
  - keys: M
    label: Switch Check / Pattern Mode
  - keys: →
    label: Next Test Fill
  - keys: ←
    label: Previous Test Fill
  - keys: Esc
    label: Exit Fullscreen
faqs:
  - q: What is OLED burn-in and what causes it?
    a: Burn-in is permanent or semi-permanent discoloration left behind when parts of an OLED panel age unevenly. Every OLED pixel dims slightly as it is used, so anything that stays in one place at high brightness — a status bar, a channel logo, a game HUD, a navigation row — wears its pixels faster than the moving content around them. Once the gap is wide enough, the outline of that static element stays faintly visible no matter what is on screen.
  - q: How can I tell if my screen already has burn-in?
    a: Use Static Check mode and step through the grey fills in a dimly lit room. An even mid-grey is the most revealing, because faint discoloration that white washes out and black hides becomes obvious against a flat mid-tone. Look for shadowy outlines of interface elements you use constantly, or patches that stay in the same place while the fill color changes around them. Anything that moves with the image is reflection, not burn-in.
  - q: Does running this test itself cause burn-in?
    a: 'Not in any realistic use. Burn-in comes from static content held for hundreds of hours, not from a check that lasts a minute or two, and Static Check is meant to be stepped through rather than parked on. Moving Pattern mode is the opposite of a risk: nothing in it stays still, so no pixel holds one value long enough to age unevenly. If you want to be careful, run the bright fills briefly and lower the brightness slider.'
  - q: How is this different from a plain black or white screen test?
    a: 'A black screen is best for spotting stuck pixels and light leaking from the edges, and a white screen is best for dead pixels and dust. Both are single flat fills for finding defects. This page targets burn-in specifically: it gives you the grey levels where ghosting actually separates from the background, and it adds a moving pattern mode that helps prevent uneven ageing rather than only diagnosing it. Use the black and white screen tools for pixel faults and this one for retention and ghosting.'
  - q: Does this apply to LCD/LED screens too, or only OLED/AMOLED?
    a: True burn-in is an OLED and AMOLED problem, because those panels age per pixel. LCD and LED screens can show image retention, a temporary ghost that usually clears by itself within minutes once the static image is gone, and both modes here work fine for spotting and clearing it. If a shadow on an LCD does not fade after a while, it is more likely a panel fault than retention.
updated: '2026-10-30'
---

## What Is OLED Burn-In?

Burn-in is permanent or semi-permanent discoloration left on a display when its pixels age unevenly. On an OLED or AMOLED panel every pixel generates its own light and dims a little each hour it is lit, so brightness is spent per pixel rather than drawn from a shared backlight. Anything that sits in the same place at high brightness therefore wears faster than the moving picture around it.

That is why burn-in nearly always takes the shape of interface furniture rather than the shape of content: a phone status bar or navigation row, a broadcaster's logo in the corner of a television, a game HUD, a dashboard readout, a taskbar. Those elements hold still for hundreds of hours while everything else changes. Once the gap between the worn pixels and their neighbours is wide enough, the outline stays faintly visible on every screen you open.

It is worth separating burn-in from **image retention**, which looks similar and is not the same thing. Retention is a temporary ghost that fades on its own once the static image is gone, often within minutes, and it happens on LCD panels too. Burn-in does not fade. Checking a suspected ghost again after twenty minutes of varied content is the simplest way to tell them apart.

## How to Check for Existing Burn-In

Switch the tool to **Static Check** and work through the fills. This is a diagnostic pass, so the aim is a completely flat field with nothing in it to distract the eye.

### Use the grey levels first

Mid-grey is the most revealing fill on the page, which is why three grey levels come before the colors. Pure white is bright enough to wash faint discoloration out and pure black gives it nothing to show against, but an even mid-tone sits exactly where a worn patch separates from an unworn one. Step through 20%, 50%, and 75% grey and give each a few seconds.

### Work in a dim room at a steady brightness

Ambient light and reflections hide precisely the low-contrast detail you are hunting for. Darken the room, hold the display at one brightness while you compare fills, and use the brightness slider rather than your device controls so the level stays consistent between them.

### Look for shapes that stay put

Real burn-in keeps its position while the fill color changes around it, and it looks like something you recognise: the bar along the top, a rectangle where a logo lives, a row of icons. If a mark moves as you tilt the screen or shifts with the light in the room, it is a reflection or a smudge. Check the colored fills afterwards as well, since a single worn sub-pixel channel can show against red, green, or blue before it shows against grey.

If you find something, photograph the screen on the fill that shows it most clearly. A dated photo is far more persuasive than a description if you go on to open a warranty claim.

## How to Help Prevent Burn-In

Switch to **Moving Pattern** and the job changes completely. Nothing in this mode holds still: the grid drifts, a soft sweep travels across the panel, and a colored block wanders the full area, all on a dark base so average brightness stays low. No pixel sits at one value long enough to age ahead of its neighbours, which is the same principle behind every screensaver ever shipped for this problem.

Leave it running during the periods that actually cause burn-in, which are the idle ones: a display paused on a menu, a monitor left on a static dashboard, a television showing a channel with a permanent logo, a kiosk between visitors. Those are the hours that do the damage, not ordinary viewing.

The habits matter more than any single tool. Avoid leaving bright static interface elements on screen for long stretches, turn on auto-hide for taskbars and playback controls where you can, and lower overall brightness, since wear scales with how hard the pixels are driven. Most modern OLED phones and televisions already ship with pixel shifting, logo dimming, and periodic refresh cycles running quietly in the background. Leave those enabled. This page is a supplement to them, not a replacement.

## Related Checks

Burn-in is only one kind of OLED fault. A pixel that stays lit on a dark field is stuck rather than burned in, and the [black screen](tool:black-screen) is the clearest way to see it. A dark speck on a bright field is a dead pixel, best confirmed on the [white screen](tool:white-screen). The [grey screen](tool:grey-screen) lets you hold a single grey level for as long as you like and type in your own, and the [six-color dead pixel test](tool:dead-pixel-test) checks every sub-pixel channel in one pass.
