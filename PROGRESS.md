# Localization & AdSense Readiness — Progress

Plan: full localization of all 7 locales plus an English content-quality pass, so that no indexed page is a near-duplicate or templated. Background: AdSense rejected the site for "Low-value content" (2026-10-30).

How to resume: read **Next session starts here**, run `nvm use` (Node 22; the shell default is v18 and Astro 7 needs ≥22.12), then `npm run verify` once it exists, or `npm run build` before that.

## Next session starts here

- **M3 is done** (2026-10-31). All 41 English articles are rewritten: average shared text 0.3% (baseline 47.7%), every tool has at least 400 words, and titles/H1s are byte-identical to the M2 baseline. `npm run verify` now includes `content-audit --strict`.
- **Owner action:** deploy, then request the AdSense review (non-English pages stay noindexed and hidden until translated).
- **M4 is done** (2026-10-31). All 287 tool pages (41 × 7) render from `src/content/tools/<locale>/<id>.md`; the 246 non-en files are `status: draft` seeds of the old (partly English) pages and get rewritten in M8.
- **M5 is done** (2026-10-31): locale-aware chrome, UI catalogs, localized about/privacy/contact routes, the language banner, and localized 404/500.
- **M6 is done** (2026-10-31): every tool widget reads its text from the catalogs (876 widget strings in 27 namespaces); English output is unchanged.
- **M7 is done** (2026-10-31): chrome strings (542 per locale, including the card-visible widgets), contact, 404/500, and about/privacy are translated into es, pt, fr, de, hi, and ja. 24 more pages are indexed (home, about, contact, privacy × 6) with reciprocal hreflang; the sitemap has 69 URLs.
- **M8 is done** (2026-11-01): all 41 tools are translated into es, pt, fr, de, hi, and ja (246 locale files, all `status: complete` and stamped), together with every widget namespace. All 315 pages are indexable with reciprocal hreflang; the sitemap has 315 URLs.
- **M9 is done** (2026-11-01): `deploy` is gated on `verify`; the docs are final; the SEO, hreflang, content, and browser passes are done, and their fixes are in (see *M9 result*). `npm run verify` passes.
- **Next:** the owner actions at the end of this file: deploy, resubmit the sitemap, and request the AdSense review.

## Decisions (2026-10-30)

1. Non-en pages that aren't 100% translated get `noindex,follow`, are left out of the sitemap and hreflang, and are hidden from the language switcher. They re-enter automatically when complete.
2. The URL is the language state. The explicit choice is remembered in `localStorage['pixora-locale']`; on a page in another language a dismissible "View in <language>" banner appears. Never auto-redirect.
3. English may be rewritten freely to remove boilerplate. Keep URLs/slugs and the titles/H1s that already work.
4. Spanish: neutral Latin American. Portuguese: Brazilian. Hindi: natural Hindi with common tech loanwords in Devanagari.
5. HowTo JSON-LD gets dropped (Google retired HowTo rich results); the steps live in the article body.

## Milestones

| | Milestone | Status | Date |
|---|---|---|---|
| M0 | Baseline: `.nvmrc`, snapshot tooling, baseline numbers, docs skeletons | done | 2026-10-30 |
| M1 | Gating (noindex/sitemap/hreflang/switcher) + privacy/about AdSense fixes | done | 2026-10-30 |
| M2 | Content collection + pure English move (zero diff) | done | 2026-10-30 |
| M3 | English SEO audit + rewrite, then re-apply to AdSense | done | 2026-10-31 |
| M4 | Seed locale files as drafts + delete legacy code | done | 2026-10-31 |
| M5 | Locale-aware chrome (links, catalogs, about/privacy/contact routes, banner, 404) | done | 2026-10-31 |
| M6 | Extract widget strings (6a/6b/6c) | done | 2026-10-31 |
| M7 | Chrome translation, one locale per session | done | 2026-10-31 |
| M8 | Tool translations, one tool × 6 locales per session | done | 2026-11-01 |
| M9 | Hardening: `deploy` gated on `verify`, final SEO pass | done | 2026-11-01 |

## Baseline (M0, 2026-10-30, commit a29b7bd)

- Build: 9 s with Node 22.23.1. 299 HTML pages (41 tools × 7 locales, 7 homes, about/privacy/contact, 404, 500).
- Sitemap: 297 URLs (every locale page indexed).
- Client JS (`dist/client/_astro/*.js`): 980,434 bytes.
- `astro check`: 16 errors (15 in the `Navbar.astro` script, 1 in `tools.ts` `categories` missing `testing`), 111 hints.
- English leakage measured on the build: `/black-screen/` has 447 English function words; `/hi/kala-screen/` 266, `/ja/kuroi-gamen/` 274, `/es/pantalla-negra/` ~275.
- Snapshot: `.i18n-snapshots/m0-baseline.json` (local, git-ignored). Compare with `npm run snapshot -- --diff m0-baseline <name>`.

## M1 result (2026-10-30)

- New: `src/i18n/locales.ts` (native labels, og:locale), `src/i18n/paths.ts` (`homePath`, `toolPath`, `staticPagePath`, `absoluteUrl`), `src/i18n/indexing.ts` (`isIndexable`, `alternates`, `languageOptions`, `sitemapEntries`). `src/data/locales.ts` re-exports; `seo.ts` re-exports `toolPath`/`absoluteUrl`/`siteUrl`.
- `BaseLayout` takes a `pageKey` instead of `alternates`; `SeoHead` emits `noindex,follow`, `og:locale` and `og:locale:alternate`, and hreflang only among indexable pages.
- The language switcher lists only the current page plus indexable translations, and hides when that is a single language. Option values are target URLs. The choice is saved to `localStorage['pixora-locale']`. Search results link within the current locale.
- Sitemaps: 297 → 45 URLs (English home, 41 tools, about/privacy/contact). All 252 non-en pages: `noindex,follow`, no hreflang.
- Privacy policy rewritten (AdSense cookies + opt-outs, Google partner-sites link, EEA consent, GA4 + opt-out, local storage, Resend contact form, Cloudflare logs, children, rights). "Ad-free / no ads" claims removed from about, home `analysis.p2` + `why.body` (all 7 locales) and 6 English tool blog blocks.
- Breadcrumb JSON-LD home item now points to the locale home (`/hi/`), not `/`.
- `astro check`: 16 → 0 errors (Navbar script typed; unused `testing` category removed from `ToolCategoryId`).
- New `scripts/i18n-audit.mjs` (`npm run audit:i18n`): lang, canonical, noindex ⇔ sitemap ⇔ hreflang, reciprocity, x-default, link resolution. Cross-locale links are warnings until M5 (15,048 today). `npm run verify` = check + build + audit: passes.
- Snapshots: `m1-final` vs `m0-baseline` reviewed; English text changes are only the intended copy edits.

## M2 result (2026-10-30)

- `src/content.config.ts`: `toolContent` collection (glob `src/content/tools/*/*.md`, ids `<locale>/<tool-id>`, strict zod schema: status, sourceHash, title, description, h1, breadcrumb, appDescription, lede, chips, shortcuts, faqs).
- `astro.config.mjs`: Markdown via `@astrojs/markdown-satteri` 0.3.3 (pinned direct dependency) with smart punctuation off.
- `src/i18n/content.ts`: `getToolEntry()`, `localizeHtml()` (resolves `tool:`/`page:`/`home:` link tokens per locale and throws on unknown ids; tested), and `toolText()`, which returns one text object for a tool page from its Markdown entry, or from the legacy data when no entry exists.
- `[...slug].astro` and `toolJsonLd()` read everything from `toolText()`: title, description, breadcrumb, H1, lede, chips, shortcuts, FAQs, article, and the JSON-LD names. The legacy `ToolArticle` and the hardcoded shortcut lists render only when there's no entry (all non-en pages until M4).
- 41 English files generated by `scripts/migrate/html-to-md.mjs` from the M1 build (kept for M4; delete after). `.rich-article kbd/code` CSS replaces the per-element utility classes.
- `src/i18n/indexing.ts`: a tool page in another locale becomes indexable when its entry is `status: complete` **and** the locale's chrome is translated (`chromeComplete()`, which is false for non-en until M5–M7).
- New `npm run i18n:status` regenerates the matrix below.
- Verification: snapshot `m2-final` vs `m1-final` shows **0 changed pages of 299** (text, links, headings, meta, JSON-LD, sitemap). `npm run verify` passes; `astro check` 0 errors.
- Deviation from the plan: the frozen `keywords` field for related-tool scoring moves to M4, where `summary`/`intent`/`useCases` leave `tools.ts`. M2 doesn't touch them.
- Existing quirk preserved by the zero-diff move: countdown-timer's article reads "starts and pauses,`R` resets" with no space (Astro had stripped the whitespace between `<kbd>` tags on the live site too). It gets rewritten in M3.

## M3 log

Audit method: the claude-seo `seo-content` framework (Google's Who/How/Why test, E-E-A-T, AI-content markers) applied to each page, plus `scripts/content-audit.mjs` for templated text. Baseline 2026-10-30: **47.7% average shared text; all 41 tools over the 5% limit.**

Site-wide changes (2026-10-30):
- Byline + freshness: optional `updated` frontmatter date. Pages with it show "By Gyanranjan Patra (linked to /about/) · Updated <date>" (`tool.byline`, translated in all 7 locales) and add `dateModified` and `author` (Person) to the WebPage JSON-LD.
- `.rich-article` table styles for Markdown tables.

Batch 1 (2026-10-30): black, white, green, red, orange, custom-color, blue-screen-prank, fake-virus-screen. Each is now at 0–1.3% shared text and 500–660 words; titles and H1s unchanged.

Findings fixed in batch 1:
- All 8 pages: removed the shared intro, "Controls and workflow", "Why this page is built differently" (self-referential SEO talk about schema/hreflang), the closing paragraph, and the keyword-stuffed "Optimization & Use Cases" / "Search Scenarios" blocks (20–30 bolded search queries each).
- black: claimed a black screen shows dead pixels (it cannot; a dead pixel is unlit and invisible on black). Rewritten with accurate fault types (stuck/hot pixels, bleed vs. IPS glow, clouding/blooming), what it cannot show, and ISO 9241-307 warranty context.
- white: dead sub-pixel color mapping (dead blue → yellow, red → cyan, green → magenta); FAQ questions no longer carry keyword variants in parentheses.
- green: practical chroma-key guidance (spill, rolling-shutter flicker, moiré, Zoom "I have a green screen", OBS Chroma Key); removed unsupported eye-strain claims.
- red: removed off-topic keyword-grab FAQs ("Red Dead Online full screen", "DS Lite red screen"); added stuck-sub-pixel color mapping and a dim-red-light night-vision method.
- orange: explained what #FF8A00 can and cannot test (no blue channel); removed the sleep-aid and "orange screen method" claims; an accurate FAQ on the Windows orange crash screen.
- custom-color: removed the claims about "recent colors" and "RGB sliders" (neither exists); documented the formats the parser actually accepts; added black-crush/white-clipping checks.
- blue-screen-prank: removed the "8 crack patterns / crack lines" text copied from broken-screen; added a stop-code reference table, real-BSOD help, the 2025 Windows 11 black crash screen note, and a responsible-use section.
- fake-virus-screen: the FAQ falsely said the page has "no analytics, no tracking scripts, no cookies" (the site runs GA4 + AdSense), now corrected; the meta description shortened from 380 to 165 characters; added "how to tell a fake warning from a real one".

Batch 2 (2026-10-30): blue, yellow, purple, pink, cyan, brown, grey, clock. All 0–0.8% shared text, 440–540 words.
- Each color covers what it can and can't test (channel mix), a real "why is my screen X" troubleshooting path where people search for it (missing green → purple/pink, missing red → cyan, blue-light filters → yellow), and accurate notes on the purple (VMware ESXi) and yellow (ASP.NET) "screens of death". Pink links pink noise on the white noise screen; brown says honestly that brown noise isn't offered.
- Purple: myth-buster that a screen can't act as a black light (no UV).
- Grey: gamma explanation (#808080 ≈ 22% of white's light), dirty screen effect, mura, near-black OLED steps.
- Clock: documents the real features (6 themes, 1–180 min timer, chime, label, saved settings), an honest note that it's one countdown, not an automatic Pomodoro cycle, screen-timeout steps (no Wake Lock), and an OLED burn-in caution.
- Templated meta descriptions ("… Open in fullscreen, adjust brightness, and test your display.") replaced on the color pages.

Batch 3 (2026-10-30): gradient, rgb, hex, plus dead-pixel-test, oled-burn-in-test, dvd-screensaver, countdown-timer, fake-video-call.
- gradient: banding explained with the 8-bit math (when steps are expected vs. a fault), a causes/fixes table, and smooth vs. muddy blends.
- rgb: primaries comparison, sub-pixel layouts table (LCD stripe, PenTile, WOLED, QD-OLED), and why text fringes on OLED monitors.
- hex: palette preview workflow, #121212 vs #000000 dark mode, how HEX codes work.
- The five dedicated tools already had specific content: removed the template sections, added related-tool links, fixed "grey shows bleed" (bleed shows on black), and on fake-video-call replaced "a believable excuse to step away" (description and body) with teaching/demo uses ("a running joke, not an alibi").

Code fixes found during the audit:
- Space-bar shortcut never fired in `ClockScreen.tsx`, `SnowScreen.tsx`, `MatrixScreen.tsx` (they compared `e.key` to `'space'`; it is `' '`). Fixed.
- Color screen "device" download used CSS pixels (a phone got a 390×844 PNG). It now multiplies by `devicePixelRatio`, so it saves the real panel resolution (`ScreenTool.astro`).
- False shortcut labels: rgb "Space: Toggle RGB Auto Cycle" (no auto cycle exists), hex "1-4: Select Color Swatch" and "D: Download 4K Wallpaper" (no number keys; no 4K export). Shortcut lists now match the code.

Batch 4 (2026-10-31): stars, galaxy, aquarium, matrix, fireplace, rain, snow, ambient.
- Shortcut lists corrected to the real keys: stars has none (click for fullscreen); galaxy Space/F/R/M; fireplace F, then C/M/↑↓ in fullscreen (its keys live in `fireplace-engine.js`); ambient F/Space/C/B. Three pages listed the color-screen keys R/C, which do nothing there.
- Accurate feature tables (galaxy ranges, fireplace settings and sleep timer behavior, rain modes, snow image mode), plus genuine background: gravitational lensing, the 1966 WPIX Yule log, AAP guidance on infant sleep-sound volume, how the Matrix effect is actually drawn (verified against the code; an earlier draft described a different technique and was corrected).

Batch 5 (2026-10-31): hacker-typer, broken-screen, windows-xp-crash, radar, white-noise, windows-update, macos, ubuntu, android-update.
- Each fake-OS page adds "if a real update is stuck" help specific to that OS (Windows troubleshooter, macOS Recovery, Ubuntu Esc boot log and GRUB, Android force restart).
- broken-screen: "if your screen is really cracked" steps; xp-crash: the explorer.exe trail glitch and the end of XP support in 2014; radar: how real radar and PPI displays work, plus disclosure that Locate uses browser geolocation only on the page; white-noise: white vs pink noise and why analog static existed.
- Removed the "Guide & Use Cases" keyword blocks ("Common search phrases include …") from all nine.

Code fix: `FakeVirusScreen.astro` "Check Payment" / "Decrypt" no longer open a blocking `alert()` demanding "$300". They briefly show "Prank only - no files were touched".

Open decision for the owner (AdSense / Safe Browsing risk): `FakeVirusScreen.astro` imitates Chrome's Safe Browsing page and Microsoft Defender, and its WannaCry template shows a ransom demand ("Send $300 worth of bitcoin", plus an `alert()` asking to "transfer $300"). The address is invalid, so no money can be sent, but Google treats pages that look like browser or device warnings as possible social engineering. Done: the payment `alert()` is removed. Still the owner's call: a small permanent "Prank simulation" label on each template.

## M4 result (2026-10-31)

- Seeded 246 draft files (`es pt fr de hi ja` × 41) from the built legacy pages (migration script since deleted). Zero text diff; only article links changed, from English paths to in-locale paths (102 pages, intended).
- Deleted the legacy code:
  - `ToolArticle.astro`;
  - the hardcoded shortcut chain in `[...slug].astro` (now 197 lines);
  - from `seo.ts` (1,136 → 133 lines): `customTitles`, `customDescriptions`, `customH1`, `customBreadcrumbNames`, `customAppDescriptions`, the `*ForTool()` functions, and the HowTo JSON-LD;
  - from `translations.ts` (8,887 → 905 lines): `localizedFaqs`, `toolFaqs`, `getRelatedSearches`, `getBlogKeywordsContent`;
  - from `tools.ts`: `faqs`, `controls`, the FAQ generators, and the unused `localizedName`/`localizedSummary`.
- `intent`/`useCases`/`summary` stay in `tools.ts` as non-rendered related-tool scoring inputs (`summary` is also the English card text until M5).
- `src/i18n/content.ts` now requires a content file for every tool in every locale; a missing one fails the build.
- Diff vs M4-seeded: only 77 pages changed, all in JSON-LD (HowTo removed from 11 tools × 7 locales), as planned.

## M5 result (2026-10-31)

- **UI catalogs** in `src/i18n/ui/`:
  - `en.ts` holds every key (`"<namespace>.<name>"`), the source of truth: site chrome plus the names, short names, and card summaries of all 41 tools and the category names and descriptions.
  - `es/pt/fr/de/hi/ja.ts` were generated from the old `site`/`toolNames`/`toolSummaries` data (≈131 keys each).
  - `index.ts` provides `t()` (fills every `{param}`; throws on unknown keys), `strings(locale, ns)` for client scripts, `missingKeys`, `unknownKeys`, `uiComplete`, plus `toolName`/`toolShortName`/`toolSummary`/`categoryName`/`categoryDescription`/`categoryLabel`.
  - `src/data/translations.ts` is deleted; unused keys were dropped (`site.title`, `site.tagline`, `hero.run_test`, `nav.tools`, and the `footer.categories/popular/languages/company/terms/github`, `tool.shortcut_*`, `tool.related_searches*`, and `screen.color/hex/rgb/hsl/choose_color` groups). The brand always comes from `siteName`, which fixed hi's "फ्री ऑनलाइन स्क्रीन".
- **Completeness:** `src/i18n/widgets.ts` lists each tool's widget namespaces (`screen` for the 16 color tools). In `indexing.ts`, a page is complete when the chrome namespaces (everything except widget and page-only namespaces) are translated, plus:
  - tool pages: the tool's Markdown is `complete` and its widget namespaces are translated;
  - about/privacy: a translated `src/content/pages/<locale>/<page>.md` with `status: complete`;
  - contact: the `contact.*` keys are translated.
- **Links:** every internal link uses the path helpers (navbar, drawer, search, footer, cards, related tools, breadcrumb, home anchors, article tokens). `i18n-audit` now **errors** on any link that leaves the page's locale: 0 across 315 pages.
- **Pages:** about/privacy moved to the `pages` collection (`src/content/pages/<locale>/*.md`, English text unchanged), rendered by `components/pages/ContentPage.astro`. Contact is `components/pages/ContactPage.astro`, built from `contact.*` strings; failed sends now show the localized message instead of the server's English error. New routes `src/pages/[locale]/{about,privacy,contact}.astro` add 18 pages, noindexed until translated.
- **404/500:** `components/pages/ErrorPage.astro` renders a complete block per locale (minimal header, message, popular tools, footer); an inline script shows the block for the URL's locale prefix and sets `<html lang>` and the title. Cloudflare serves the root `404.html` for every miss (the adapter's `fallbackToAssets` → Astro 404 route), which is why it is one file. `BaseLayout` has `chrome={false}` for these pages.
- **Language banner:** `BaseLayout` adds a fixed-position "View this page in <language>" suggestion when `localStorage['pixora-locale']` differs from the page and a complete translation exists. It is dismissible, remembered per chosen language, and reset when you pick a language in the switcher. No redirects.
- **JSON-LD:** `landingJsonLd(locale)` has localized tool names, in-locale URLs, and `inLanguage`; tool WebPage JSON-LD has `inLanguage`.
- **Island props:** the unused `tool` prop was removed from all 10 React islands (home page HTML 241 KB → 229 KB).
- **CSS:** article links are now visibly colored (Tailwind's reset had made them inherit the text color, an existing UX bug); Markdown lists show bullets; `:lang(hi)` / `:lang(ja)` font stacks, Devanagari-safe heading line-height, no letter-spacing for hi, and `word-break: auto-phrase` for ja.
- **Verification:** English pages show 0 changes across text, attributes, headings, links, title, meta, og, lang, canonical, and hreflang (45 pages). Non-en changes: localized links (252 pages), the hi brand fix (42 pages), 18 added pages. Client JS 980,472 bytes (baseline 980,434).

## M6 result (2026-10-31)

- **Widget catalogs:** `en.ts` now has 1,109 keys. 876 of them are widget text in 27 namespaces, from `screen` (the 16 color tools) to `winupdate` (102 strings, including the 63 rotating update messages) and `macupdate` (104).
  - `.astro` widgets read their namespace from `data-i18n` JSON on the root element (`text.*` / `T.*`).
  - React islands get a `strings` prop and read `ui.*`. Card previews pass no strings, except CountdownTimer's mode label.
  - Dates and times follow the page language: the XP taskbar clock and the Defender threat date use `Intl.DateTimeFormat`, and the aquarium and ambient date lines now format with `<html lang>` instead of the browser's locale. The clock's AM/PM labels come from the catalog.
- **Completeness wiring:** `src/i18n/widgets.ts` maps 25 tools plus the 16 color tools to their namespaces. The `.astro` widgets that render full markup inside tool cards (`winupdate`, `macupdate`, `ubuntu`, `android`) joined `countdown`, `videocall`, `fireplace`, `whitenoise`, and `radar` as card-visible, so they count as chrome: a locale's home page can't be indexed until they are translated.
- **Fixes found while extracting:**
  - space-bar handlers in Clock/Snow/Matrix;
  - the Fireplace shortcut list (its handler lives in `fireplace-engine.js`);
  - the dead-pixel grey hint and FAQ, which said bleed shows on grey (clouding and uneven backlight show on grey; edge bleed shows on black);
  - the ambient article and FAQ now list the fourth mixer channel (Crackling Hearth).
- **New checks** (wired into `npm run verify`):
  - `i18n-lint` errors when a script reads a `text.*`/`T.*` string, or an island a `ui.*` string, that its namespace doesn't define.
  - `i18n-lint` checks catalog stamps (`src/i18n/ui/stamps/<locale>.json`, written by the new `npm run i18n:stamp`), so a translation of an English string that later changes is reported as stale.
  - English leakage (`scripts/lib/leakage.mjs`) is checked in catalog values, in complete Markdown translations (lint), and on every indexable non-English page (audit: visible text, attributes, meta/og, JSON-LD, `data-i18n` strings).
  - The snapshot/audit HTML parser now handles `>` inside quoted attributes (valid HTML that ultrahtml misparsed).
- **Verification:**
  - English pages show 0 changes against the M5 snapshot (47 pages: text, attributes, headings, links, title, meta).
  - `npm run verify` passes: 0 type errors, lint 0 errors, content audit pass, audit 0 errors on 315 pages.
  - Client JS is 978,325 bytes (M5: 980,472).
  - The lint's new stamp and leakage checks report the old partial es–ja catalogs as unstamped (and two hi summaries with English theme names); M7 replaces those catalogs.

## M7 result (2026-10-31)

- **Catalogs:** `src/i18n/ui/{es,pt,fr,de,hi,ja}.ts` were rewritten from the current English, not patched. Several old values translated English that M1/M3 had since replaced (`analysis.p2` still promised "no ads", summaries described old features), and two hi summaries kept English theme names. Each locale now has 641 strings:
  - all chrome: site UI, tool names, short names, and card summaries for all 41 tools, categories, share, and fallback;
  - the card-visible widgets: video call, countdown, fireplace, white noise, radar, and the Windows/macOS/Ubuntu/Android update screens with their real OS wording;
  - contact, 404, and 500;
  - the `screen` namespace of the 16 color tools.
- **Stamps:** `src/i18n/ui/stamps/<locale>.json` record the English each string was translated from, so the lint fails when an English string changes later.
- **Pages:** `src/content/pages/<locale>/{about,privacy}.md` are complete and stamped. The privacy policy keeps every AdSense disclosure: third-party vendor cookies, Google's partner-sites link, the opt-out links, and the EEA/UK/CH consent message.
- **Indexing:** home, about, contact, and privacy in all six locales are now indexable, so the sitemap grew from 45 to 69 URLs. Each of these pages has hreflang to all 7 languages plus x-default. Tool pages stay noindexed until M8.
- **English fixes found while translating:**
  - The Android "Start time" label was on a 0–90% slider, so it now reads "Start percentage".
  - The garbled "Fast controls block-wide…" sentence and the overclaiming "flawless, high-fidelity experience" in about.md were rewritten.
  - The byline author link and the JSON-LD author URL now point to the about page in the page's own language. Translated pages would otherwise have linked to the English one once they got an `updated` date.
- **Markup:**
  - The logo wordmark has `translate="no"`, so Google Translate leaves the brand alone.
  - Switcher options carry their own `lang` (e.g. `lang="hi"` on हिन्दी), as WCAG's language-of-parts rule requires.
  - The leakage audit skips both, along with any `data-i18n-ignore` subtree.
- **French typography:** a no-break space before `: ; ! ?` and inside « ». `scripts/i18n-fr-spaces.mjs` inserts them, and the lint rejects ordinary spaces there.
- **Verification:**
  - `astro check`: 0 errors, 0 warnings.
  - `i18n-lint`: 0 errors. The 101 warnings are values that are the same word in both languages, such as "Menu", "Timer", "Radar", or "macOS".
  - `i18n-audit`: 0 errors on 315 pages, including the English-leakage check on the 24 newly indexable pages.
  - English snapshot against M5: the only changes are the intended copy fixes above, plus the language switcher now listing the indexable translations. Titles and H1s are unchanged.

## M8 log

Per-tool procedure (one tool, all six locales, then verify):

1. `rm src/content/tools/{es,pt,fr,de,hi,ja}/<id>.md` (the drafts are old partial translations; nothing in them is reused) and read `src/content/tools/en/<id>.md`.
2. Write the six files from the current English: same frontmatter keys, same FAQ/shortcut/chip counts, same H2/H3 structure, the same `tool:` tokens (including duplicates), `status: draft`, `updated: '2026-10-31'`. Double-quote YAML strings and use typographic quotes inside them.
3. If the tool has its own widget namespace (`src/i18n/widgets.ts`), add it to all six catalogs: write the blocks to a file with `=== <locale>` sections and run `python3 -I .i18n-work/add_ns.py <file>` (inserts before `// @end`), then `npm run i18n:stamp -- --ui <locale> --ns <namespace>` for each locale.
4. `node scripts/i18n-fr-spaces.mjs`, `npm run i18n:stamp -- <id>` (sets `status: complete` and `sourceHash`), `node scripts/i18n-lint.mjs`.
5. `npx astro build` and `node scripts/i18n-audit.mjs` (0 errors; the sitemap grows by 6 per tool).

Order (plan: top-10 first, then colors, tests, savers, pranks/fake screens):

| # | tool | widget namespace | status |
|---|---|---|---|
| 1 | black-screen | screen | ✅ |
| 2 | white-screen | screen | ✅ |
| 3 | red-screen | screen | ✅ |
| 4 | green-screen | screen | ✅ |
| 5 | blue-screen | screen | ✅ |
| 6 | blue-screen-prank | bsod | ✅ |
| 7 | fake-virus-screen | fakevirus | ✅ |
| 8 | custom-color-screen | screen | ✅ |
| 9 | orange-screen | screen | ✅ |
| 10 | clock-screen | clock | ✅ |
| 11–16 | yellow, purple, pink, cyan, brown, grey | screen | ✅ |
| 17–19 | gradient, rgb, hex | screen | ✅ |
| 20–21 | dead-pixel-test, oled-burn-in-test | deadpixel, oled | ✅ |
| 22–23 | dvd-screensaver, stars | dvd, stars | ✅ |
| 24–25 | galaxy, matrix | galaxy, matrix | ✅ |
| 26 | rain | rain | ✅ |
| 27–28 | snow, aquarium | snow, aquarium | ✅ |
| 29 | ambient | ambient | ✅ |
| 30–31 | fireplace, white-noise | (card-visible: done in M7) | ✅ |
| 32–33 | radar, countdown-timer | (card-visible: done in M7) | ✅ |
| 34 | hacker-typer | hackertyper | ✅ |
| 35 | windows-xp-crash | xpcrash | ✅ |
| 36 | broken-screen | broken | ✅ |
| 37 | fake-video-call | (card-visible: done in M7) | ✅ |
| 38 | windows-update | (card-visible: done in M7) | ✅ |
| 39 | ubuntu-screen | (card-visible: done in M7) | ✅ |
| 40 | macos-screen | (card-visible: done in M7) | ✅ |
| 41 | android-update | (card-visible: done in M7) | ✅ |

Strings M6 missed, found during M8 (React islands are client-only, so the build audit cannot see them; scan each saver component for literal English before translating it): rain's "Falling Velocity" slider and its soundtrack names, which were built from the filenames "Background Sound 1–4" (now `rain.speed` and `rain.track`, keeping the file number); snow's four slider labels and its "Background Sound N" options (`snow.speed`, `snow.wind`, `snow.size`, `snow.image_size`, `snow.track`); ambient's soundtrack labels, which were cleaned-up uploader filenames ("Apalonbeats Ambient Ambient Music") and are now a numbered `ambient.track` ("Ambient track 1"; the one intended English wording change, inside the client-only island).

Component fix during M8: the dead-pixel and OLED widgets lowercase color names inside aria-labels ("Show the black test screen"); German keeps the capital because the color is a noun there ("Testbildschirm Schwarz anzeigen").

Hacker typer: the fake editor's terminal title, file tree, tabs, code, overlay log output and shell prompt are marked `translate="no"` (a real editor shows them the same in every language; the title left the catalog). The audit now also skips `<code>` and `<pre>`, matching the lint, which already ignored Markdown code spans.

Leakage-check additions during M8: share-platform brand names (Facebook, WhatsApp, …) and code identifiers such as Windows stop codes (`CRITICAL_PROCESS_DIED`) count as neutral.

## M8 result (2026-11-01)

- **Coverage:** 41 tools × 6 locales, written from the M3 English rather than patched from the old drafts. The matrix below is 41/41 in every locale, and every widget namespace is complete in all six catalogs.
- **Indexing:** the sitemap grew from 69 to 315 URLs (45 pages × 7 locales); every page has hreflang to all 7 languages plus x-default, and the switcher lists all seven languages on every page.
- **English changes caused by M8** (snapshot `m9` against `m7`): the 41 tool pages gained hreflang, `og:locale:alternate`, and the switcher entries. The only other English differences are listed under *M9 result*, plus the client-only saver strings noted in the *M8 log*. Titles, descriptions, canonicals, and H1s are unchanged.

## M9 result (2026-11-01)

- **Deploy gate:** `npm run deploy` is now `npm run verify && wrangler deploy`, so a lint, audit, or type error blocks the deploy.
- **Catalogs:** no `.wip` files remain; every namespace is complete in every locale.
- **Docs:** TRANSLATION.md has the whole-tool procedure ("Translating a tool into all locales"), the `translate="no"` and code/pre rules, the "no literal English in components" rule for islands, and the full command list. GLOSSARY.md has the fake-OS rules and real OS wording tables (Chrome, Windows Security, Windows 10/11 stop screen, Windows XP), key names, and the display-test terms.
- **SEO pass over all 315 built pages** (scripted: titles, descriptions, canonical, og:locale, hreflang, JSON-LD, h1 count):
  - No duplicate titles or descriptions within any locale; every page has a self canonical, `og:locale`, and 8 hreflang links.
  - **Fixed:** fake-virus-screen had three `<h1>` elements: the fake Chrome "Deceptive site ahead" and SmartScreen titles were headings too. They are now `role="heading" aria-level="2"` divs. The aquarium clock overlay's `<h1>` (client-rendered, but Google renders JavaScript) is now a `<div>`. Every page now has exactly one h1.
  - **Fixed:** about, privacy, and contact had no structured data. They now carry `AboutPage` (with the author as `mainEntity`), `WebPage` (with `dateModified`), and `ContactPage` JSON-LD, each with `inLanguage` and `isPartOf` the WebSite. Every page now has JSON-LD with `inLanguage`.
  - **Reported, not changed:** 23 English titles exceed 70 characters (max 103), and the es/pt/fr/de translations of them run longer (max 135). Decision 3 keeps the English titles that already rank, and the translations mirror them. Google truncates these in results but still reads the whole title. Descriptions over 170 characters follow the same pattern (en 8, es 40, fr 41); ja runs short (5 under 70 characters), which is normal for Japanese.
- **seo-page checklist** (en home, red-screen, fake-virus-screen, and the black screen in each locale):
  - **Fixed, page weight:** the card thumbnails were 1920×1080 PNGs shown about 400px wide, and broken-screen's was 2.5 MB, loaded on every page whose related tools include it. They are now 960×540 WebP with `width`/`height` (broken-screen 2482 → 77 KB, XP crash 290 → 26 KB, hacker typer 143 → 20 KB, macOS update 132 → 4 KB; nine files). The PNGs stay in `public/` in case anything outside links to them.
  - **Fixed, social previews:** `og:image` was `/og.svg`, which Facebook, X, LinkedIn, and WhatsApp do not render, and it still said "Free Online Screen" (the old name). Each locale now has `public/og/<locale>.png` (1200×630, PixoraScreen plus that locale's `hero.heading` and `hero.browse`), with `og:image:type/width/height`; `npm run og:images` (`scripts/og-images.mjs`) regenerates them.
  - **Fixed, heading outline:** "Share this tool" was an h3 straight under the h1 (now h2); the mobile menu's category labels were h3s ahead of the h1 (now `<p>`); the fake XP dialog's bold line was an h4 (now `<p>`). No page skips a heading level, and every indexable page has exactly one h1.
  - **Fixed:** the 404 and 500 pages had no robots tag, so `/404.html` fetched directly would have been indexable. A page without a `pageKey` is now `noindex,follow`.
  - Canonical, robots, hreflang, OG/Twitter tags, JSON-LD, and render-blocking scripts were clean on every sampled page.
- **seo-hreflang:** 0 issues on 315 pages (45 sets × 7 languages): every page references itself with its canonical URL, every relation has its return tag, x-default is the English page, codes are ISO 639-1, all HTTPS with trailing slashes, and the sitemap lists exactly the indexable set (hreflang lives in the HTML only).
  - **Fixed, number format:** the Spanish galaxy article wrote `2.000`/`12.000`, which Mexico reads as decimals. Neutral Spanish now follows the RAE/ASALE rule (`2000`, `12 000`); GLOSSARY.md has the number rules for every locale.
- **seo-content:** articles run 530–780 words plus 6 FAQs, each with a localized byline linked to the about page and a visible updated date, 4–7 contextual internal links, and an answer-first "How to…" section; about, contact, and privacy exist in every language. No changes needed. Optional, not done: cite a few external authorities (for example, ISO 9241-307 pixel-defect classes on the display tests, Microsoft's tech-support-scam guidance on the prank pages), and add a Terms page.
- **Browser check** (headless Chrome over the DevTools protocol, dev server; the Claude in Chrome extension was not connected):
  - Choosing हिन्दी on `/black-screen/` lands on `/hi/kala-screen/` and stores `pixora-locale`; every internal link on that page stays in `/hi/`; on `/red-screen/` the banner offers "यह पेज हिन्दी में देखें" → `/hi/lal-screen/`; dismissing it holds on the next English page; there is no redirect.
  - **Fixed, Japanese overflow:** `/ja/` and every Japanese page listing the Android card scrolled 7px sideways at 375px. `word-break: auto-phrase` never breaks inside a phrase, and 「偽のAndroidシステムアップデート画面シミュレーター」 is one 332px phrase. `:lang(ja)` now also sets `overflow-wrap: anywhere`, which breaks inside a phrase only when it cannot fit.
  - **Fixed, hydration mismatch:** the clock card preview (server-rendered, `client:idle`) read the clock for the blinking colon during render, so build-time and load-time opacity disagreed on about half of all loads. The colon stays lit until mount.
  - **Fixed, broken sound (pre-existing):** the ambient screen's rain toggle requested `dragon-studio-gentle-rain-07-437321.mp3`, which commit b5eeb56 (2026-07-29) renamed to `Background Sound 2.mp3`; it 404ed. The snow screen's fallback background also pointed at a missing `bg.jpg` (now `bg1.png`).
  - **Console sweep:** all 315 pages at 375px after these fixes: 0 pages with console errors, exceptions, or failed requests. The 375px overflow check passes on the sampled de, fr, hi, and ja pages (and 320px on de and ja); a full 315-page overflow sweep and a desktop console sweep were still running at the time of writing.
- **Verification:** `npm run verify` exit 0: `astro check` 0 errors and 0 warnings, `i18n-lint` 0 errors (126 warnings, all values that are the same word in both languages: brand names, HEX/RGB, "Pause", "Menu", "Timer"), `content-audit --strict` average shared text 0.3% with no tool over 5%, build OK, `i18n-audit` 0 errors and 0 warnings on 315 pages and 315 sitemap URLs.

## Tool × locale matrix

<!-- i18n:status:start -->
Generated by `npm run i18n:status` on 2026-11-01. ✅ translated and stamped · draft (noindex) · — no file. A tool page is indexed when its Markdown is ✅ and its widget strings (last table) are ✅.

| tool (41) | es | pt | fr | de | hi | ja |
|---|---|---|---|---|---|---|
| ambient-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| android-update | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| aquarium-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| black-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| blue-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| blue-screen-prank | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| broken-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| brown-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| clock-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| countdown-timer | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| custom-color-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| cyan-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dead-pixel-test | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dvd-screensaver | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| fake-video-call | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| fake-virus-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| fireplace-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| galaxy-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| gradient-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| green-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| grey-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| hacker-typer | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| hex-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| macos-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| matrix-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| oled-burn-in-test | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| orange-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pink-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| purple-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| radar-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| rain-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| red-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| rgb-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| snow-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| stars-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| ubuntu-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| white-noise-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| white-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| windows-update | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| windows-xp-crash | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| yellow-screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **complete** | 41/41 | 41/41 | 41/41 | 41/41 | 41/41 | 41/41 |

| page | es | pt | fr | de | hi | ja |
|---|---|---|---|---|---|---|
| about | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| privacy | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| contact | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

| UI strings (card-visible widgets count as chrome) | es | pt | fr | de | hi | ja |
|---|---|---|---|---|---|---|
| chrome (542 strings, every page) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| contact | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| not_found | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| server_error | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| ambient | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| aquarium | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| broken | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| bsod | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| clock | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| deadpixel | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dvd | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| fakevirus | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| galaxy | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| hackertyper | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| matrix | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| oled | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| rain | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| screen | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| snow | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| stars | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| xpcrash | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
<!-- i18n:status:end -->

## Findings log

- 2026-10-30: `privacy.astro` said "We do not use advertising cookies" while `BaseLayout.astro` loads AdSense; `about.astro` and home `analysis.p2` claimed "ad-free / no ads". Fixed in M1.
- 2026-10-30: non-English blog blocks still say "sin anuncios / sem anúncios / ohne Werbung / 広告なし…" (fireplace, green, blue de, black ja, white ja, FAQ green pt/ja). Those pages are noindexed and their text is regenerated in M8, so they were left as is.
- 2026-10-30: English blog blocks are keyword-stuffed (e.g. "black screen full screen laptop / windows 11 / YouTube" on black-screen). Remove in M3.
- 2026-10-30: yellow-screen renders white-screen's blog text; the generic prank block mentions "8 crack patterns" on 4 tools that have no cracks; "Why this page is built differently" is identical on all 41 tools. To be fixed in M3.

## User actions outside the code

- [ ] Before deploying M1: export Google Search Console clicks for non-en URLs (sets the M7/M8 order; those pages get noindexed).
- [ ] AdSense → Privacy & messaging: enable Google's certified consent message for EEA/UK/Switzerland.
- [ ] Deploy after M1 and after M3; request the AdSense review once M3 is live.
- [ ] Deploy M9 with `npm run deploy` (it runs `verify` first). Commit `public/og/` and the new `public/assets/thumbnails/**/*.webp` with it.
- [ ] Google Search Console: resubmit `https://pixorascreen.com/sitemap.xml` (315 URLs, up from 45 at M3) and use URL Inspection → Request indexing on a few translated pages per locale.
- [ ] Request the AdSense review again once the deploy is live.
- [ ] Optional: a native speaker spot-checks hi and ja (a few tool pages and one fake-OS screen each).
