---
status: complete
title: Ubuntu Screen Simulator Online - Free Fake Ubuntu Update & Boot Screen
description: The classic Ubuntu boot splash in fullscreen, the Ubuntu logo on aubergine with five pulsing dots, for Linux pranks, videos, classroom demos, and retro desktop nostalgia.
h1: Ubuntu Update.
breadcrumb: Ubuntu Update
appDescription: Turn any screen into a realistic fake Ubuntu update screen simulator with authentic boot animation, progress bar, reboot cycle, and Ubuntu orange terminal aesthetic. Free online prank tool for Linux demos, video props, and classroom training. Fullscreen, keyboard shortcuts, and adjustable brightness. No download, no install, no risk.
lede: The classic Ubuntu boot splash in fullscreen, the Ubuntu logo on an aubergine background with five pulsing dots, for Linux pranks, video scenes, and classroom demos.
chips:
  - fullscreen
  - authentic boot animation
  - non-linear progress simulation
  - reboot cycle
  - brightness
shortcuts:
  - keys: F
    label: Fullscreen
  - keys: Esc
    label: Exit fullscreen
faqs:
  - q: What is this Ubuntu screen?
    a: It recreates the boot splash Ubuntu showed for many years while starting up or finishing updates, the white Ubuntu logo on a deep aubergine background with five dots that light up in turn. It is a visual only and does not run Linux or change your computer.
  - q: Does it have settings like the Windows and Mac update screens?
    a: No. It shows the splash with its looping dots, which is all the real screen shows too. For a percentage, scenarios, and timers, use the fake Windows update or macOS update screens.
  - q: Why does Ubuntu use that purple color?
    a: Aubergine, a deep purple, has been part of Ubuntu's visual identity since the early 2010s, used in its splash screens, terminal background, and branding, alongside its signature orange.
  - q: How do I see what a real Ubuntu boot is doing behind the splash?
    a: Press Esc while the splash is showing. On a real Ubuntu system, that switches from the logo to the text boot log, which shows each service as it starts and is the first place to look if startup hangs.
  - q: Is it convincing on a Windows laptop?
    a: Only to people who do not know the laptop runs Windows. It works best on a machine that people already expect to run Linux, in a computer lab, or as a scene in a video.
updated: '2026-10-31'
---

## The Ubuntu Boot Splash

Ubuntu is one of the most popular Linux distributions, and for many years its startup screen looked like this: the white Ubuntu wordmark centered on a deep aubergine background, with a row of five dots underneath lighting up one after another while the system loads. This page recreates that splash in fullscreen.

1. Press <kbd>F</kbd>, or the button in the corner, to fill the screen.
2. Leave the mouse still; the pointer hides after two seconds.
3. Press <kbd>Esc</kbd> to leave fullscreen.

There are no settings to change, because the real splash has none either: it simply waits with its dots until the system is ready.

## Ideas for Using It

- **Computer lab pranks:** in a lab or office full of Linux machines, a splash that never finishes is a gentle joke.
- **Videos and films:** a believable "computer starting up" moment for a scene with a Linux user, a server room, or a hacker character.
- **Teaching:** introduce Linux to a class with the screen many people see the first time they install Ubuntu.
- **Nostalgia:** long-time Ubuntu users will recognize the dots from the releases of the 2010s.

## Hiding the Browser Completely

Fullscreen mode hides the browser on most systems, but for a computer lab or a long-running display, kiosk mode is even cleaner. On Linux, start Chromium or Google Chrome with the `--kiosk` option followed by this page's address, and the splash fills the screen with no tabs, address bar, or exit button; close it with <kbd>Alt</kbd> + <kbd>F4</kbd>. In Firefox, <kbd>F11</kbd> gives a similar full-screen view.

## What Happens Behind a Real Ubuntu Splash

On a real system, the splash is drawn by a program called Plymouth, which covers the text messages printed while Linux starts. Behind it, the kernel loads, drivers detect your hardware, and dozens of services start. Updates in Ubuntu normally install while you keep working, but some, such as kernel updates, finish on the next restart behind this same splash.

If a real Ubuntu machine seems stuck on its splash:

1. Press <kbd>Esc</kbd> to switch to the text boot log and see which step is waiting.
2. Wait a few minutes if it mentions a disk check or a network service; both can be slow.
3. If it never continues, restart and open the GRUB menu (hold <kbd>Shift</kbd> on older BIOS machines or tap <kbd>Esc</kbd> on UEFI machines), choose Advanced options, and boot an older kernel or recovery mode.

For other fake system screens, the [fake Windows update screen](tool:windows-update) and the [macOS update screen](tool:macos-screen) add progress, timers, and scenarios, and the [Android update screen](tool:android-update) covers phones.
