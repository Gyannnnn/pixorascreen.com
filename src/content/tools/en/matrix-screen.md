---
status: complete
title: Matrix Screen – Online Digital Rain & Customizable Matrix Effect
description: The falling green code from The Matrix in fullscreen, with katakana, binary, or your own text, 6 color palettes, adjustable speed, density, and trails, and an ambient synth.
h1: Matrix Screen.
breadcrumb: Matrix Screen
appDescription: Customize an online Matrix screen with falling digital rain, neon glow colors, cyberpunk audio drones, and custom name text. Fullscreen Matrix effect for desktop, laptop, monitor, and TV — no install required.
lede: The falling green code from The Matrix in fullscreen, with katakana, binary, letters, or your own words, six color palettes, adjustable speed, density, and trails, plus an ambient synth soundtrack.
chips:
  - fullscreen mode
  - custom name/text
  - color themes
  - rain speed & density
  - font size & glow
shortcuts:
  - keys: F
    label: Fullscreen
  - keys: Space
    label: Toggle Customizer Drawer
  - keys: M
    label: Toggle Sound/Ambient Focus
  - keys: C
    label: Cycle Code Stream Type
  - keys: R
    label: Reset Options
  - keys: Esc
    label: Exit Fullscreen
faqs:
  - q: What characters does the original Matrix code use?
    a: The film's digital rain is made mostly of mirrored half-width Japanese katakana mixed with numbers and a few Latin letters. This page's Classical Matrix mode uses the same katakana style; press C to switch to binary, plain letters, or your own text.
  - q: Can I make the code spell my name or a message?
    a: Yes. Open the settings with Space, choose Custom String, and type your text. Sequence Spell-out drops the letters in order so the words can be read in the columns, while Random Sample scatters the same letters randomly.
  - q: Is the Matrix screen bad for an OLED screen?
    a: It is fairly gentle. The background is black, so most pixels stay off, and the characters never stay in one place. As with any screen left on for hours, keep brightness moderate and switch off the display when nobody is watching.
  - q: Does it make sound?
    a: Only if you want it to. The Ambient Audio Synthesizer generates a low, atmospheric drone in the browser. Press M to turn it on or off and use the volume slider to set its level.
  - q: Why does the code look sparse or crowded?
    a: That depends on Stream Density, Font Size, and your screen size. Smaller fonts and higher density fill a large monitor; on a phone, a larger font with lower density keeps the characters legible.
updated: '2026-10-31'
---

## The Digital Rain From The Matrix

In The Matrix (1999), the world inside the simulation is shown as columns of glowing green characters raining down a black screen. The effect became one of the best-known images in film and a shorthand for hackers, code, and computers ever since. This page recreates it in your browser: dozens of columns falling at different speeds, each led by a bright character and trailing off into darker green.

1. Press <kbd>F</kbd> for fullscreen.
2. Press <kbd>Space</kbd> to open the customizer.
3. Pick a character set and a color palette, then adjust the sliders.
4. Press <kbd>Space</kbd> again to hide the panel and let the code fall.

## Character Sets

Press <kbd>C</kbd> to cycle through them, or pick one in the settings:

- **Classical Matrix:** half-width Japanese katakana and numerals, closest to the film.
- **Binary Code:** only zeros and ones, for a more literal "computer" look.
- **Alphanumeric:** English letters and numbers.
- **Custom String, Sequence Spell-out:** your own words, dropped letter by letter so they can be read down the columns. Good for names at a party or a channel name on a stream.
- **Custom String, Random Sample:** the letters of your text in random order, for a subtler personal touch.

## Fine-Tuning the Look

**Font Size** (10 to 36) sets how big the characters are. **Rain Speed** sets how fast they fall. **Stream Density** decides how many columns are active at once, and **Trail Length** how long the fading tail behind each one is. Six palettes change the glow: Classic Green, Cyberpunk Cyan, Crimson Red, Amber Gold, Neon Purple, and Rainbow. Press <kbd>R</kbd> at any time to go back to the defaults.

## How the Effect Is Drawn

The digital rain is redrawn many times per second. On every frame, the page clears the screen to black and draws each column again: a bright "head" character at the front, followed by a tail of characters that get dimmer the further they are from the head. As the head moves down, the whole stream moves with it, which reads as characters glowing and then fading. Trail Length decides how many characters the tail holds before it disappears, and Stream Density how many columns are falling at once. Many classic versions instead paint a see-through layer of black over the previous frame; drawing every tail explicitly keeps the characters crisp and avoids grey smears on bright screens.

## Ideas for Using It

- **Stream and video backgrounds:** a "starting soon" screen, or a backdrop behind a webcam for tech and gaming channels.
- **Themed parties and escape rooms:** a hacker hideout or a sci-fi set, ideally with the synth soundtrack on.
- **Desk ambience:** a slow, sparse rain on a second monitor while you code.
- **Classroom openers:** a quick visual hook before a lesson on computing or cybersecurity.

For a screen that types real-looking code as you press keys, try the [hacker typer](tool:hacker-typer). The [radar screen](tool:radar-screen) adds a sweeping control-room display, and the [rain screen](tool:rain-screen) offers the original, wetter kind of rain.
