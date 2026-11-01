# Translation Guide

How PixoraScreen stays fully translated in all 7 locales (en, es, pt, fr, de, hi, ja). The wording rules are in [GLOSSARY.md](GLOSSARY.md); the migration status is in [PROGRESS.md](PROGRESS.md).

> This guide is filled in as the migration lands. Sections marked _(pending Mx)_ describe code that doesn't exist yet.

## The rule

A non-English page is either **complete** — every visible string, meta tag and JSON-LD value is in its language — or it is **draft**. Draft pages are built but get `noindex,follow`, are left out of the sitemap and every hreflang set, and are not offered by the language switcher. Nothing half-translated is ever shown to Google or offered to visitors.

## Where indexability is decided

`src/i18n/indexing.ts` → `isIndexable(pageKey, locale)`. English is always indexable. Every other locale is indexable only when its translations are complete. The same function drives:

- `<meta name="robots">` in `SeoHead.astro`
- hreflang alternates (only between indexable pages)
- `sitemap.xml` / `sitemap-0.xml`
- the language switcher options in `Navbar.astro`

## Where a tool page's text lives

Each tool has one Markdown file per locale: `src/content/tools/<locale>/<tool-id>.md` (the file name is the `id` from `src/data/tools.ts`, never the translated slug). The schema is in `src/content.config.ts`, and a file that doesn't match it fails the build.

```markdown
---
status: complete            # draft | complete. Only complete translations are indexed.
title: Black Screen Test - Free Fullscreen Tool | PixoraScreen   # " | PixoraScreen" is appended if missing
description: Meta description (≈150 characters).
h1: The page heading
breadcrumb: Short tool name for the breadcrumb and JSON-LD
appDescription: One-sentence WebApplication description for JSON-LD
lede: The paragraph under the H1.
chips: [fullscreen, brightness]   # up to 5 feature chips under the lede
shortcuts:
  - keys: F
    label: Fullscreen mode
faqs:
  - q: Question?
    a: Plain-text answer (no HTML, no Markdown).
---

## Article heading

Article body in Markdown.
```

Rules for the article body:

- **Internal links are tokens, never paths.** Write `[white screen](tool:white-screen)`, `[privacy policy](page:privacy)` or `[all tools](home:#colors)`. They resolve to the right URL for the file's locale at build time, so the same token works in every language. An unknown token fails the build with the file name.
- External links are normal Markdown links.
- Keys: `<kbd>F</kbd>`. Code and values: `` `#ff0000` ``. Raw HTML is limited to `<kbd>` and `<br>`.
- Headings start at `##` (the page's H1 comes from frontmatter). Use `###` for subsections.
- Smart punctuation is off, so quotes and dashes render exactly as typed. Use each language's own punctuation (see GLOSSARY.md).

Every tool must have a file in all seven locales; a missing file fails the build. A locale file can be `status: draft` (built, noindexed, hidden from the switcher) until it is fully translated.

## Updating English content

1. Edit `src/content/tools/en/<tool-id>.md`.
2. `npm run build`, then check the page.
3. Every translation made from the old English is now stale: `npm run i18n:lint` fails for each locale file whose `sourceHash` no longer matches the English file. For each locale, either update the translation and run `npm run i18n:stamp -- <tool-id> --locale <locale>`, or set it back to `status: draft` (noindexed until it is redone). Use `git diff` on the English file to see what to re-translate.

## UI strings (navbar, footer, cards, tool widgets)

Short interface text lives in catalogs, not in components:

- `src/i18n/ui/en.ts`: every key, in English. Keys are `"<namespace>.<name>"`, for example `"nav.search"`, `"share.copy"`, `"tool_name.black-screen"`.
- `src/i18n/ui/<locale>.ts`: the same keys translated. A key missing from a locale falls back to English for display, and every page that needs it stays noindexed until it is translated.
- `src/i18n/ui/stamps/<locale>.json`: a hash of the English value each translated string was made from, written by `npm run i18n:stamp -- --ui <locale>`. When an English string changes, the lint names every translation of it as stale.
- `{param}` placeholders must appear unchanged in every translation. Strings with `\n` keep their line breaks (the fake-OS screens split on them).

How components read them:

- **Server markup (`.astro`):** `t(locale, 'ns.key', { param })`.
- **Client scripts in `.astro` components:** the root element carries its namespace as JSON, `data-i18n={JSON.stringify(strings(locale, 'ns'))}`, and the script reads it as `text.key` (or `T.key`). `{param}` values are filled in by the script.
- **React islands (`.tsx`):** the `.astro` wrapper passes `strings={strings(locale, 'ns')}` and the island reads `ui.key`. Card previews pass no strings, so islands must not render visible text in card mode (CountdownTimer is the one exception; its namespace counts as chrome).
- **Dates and times:** format with `Intl.DateTimeFormat(locales[locale].lang, …)` on the server, or `document.documentElement.lang` in the browser, never a hand-written English format.
- **Text that must stay in its original language**: mark the element `translate="no"` (or `data-i18n-ignore` for source code) so the leakage audit skips it. Use this only for what a real system shows unchanged in every language: product names, file names and paths, threat names, stop codes and dump lines, terminal titles, shell prompts, code. The audit also skips `<code>` and `<pre>` (Markdown code spans), matching the lint.
- **No literal English in components.** React islands render client-side, so the build audit never sees their text: a hardcoded `label="…"`, a JSX text node, or a label built from a filename leaks English on every locale without failing anything. Before translating a tool, scan its component for literal strings (`grep -nE 'label="[A-Z]|>\s*[A-Z][a-z]+ [a-z]' src/components/<Name>.tsx`) and move them into the catalog. Soundtrack or image labels derived from filenames get a numbered catalog string instead (`rain.track`: "Background Sound {n}").

The lint checks all of this statically: every `t()` key, every `text.*`/`T.*` read in a script, and every `ui.*` read in an island must exist in the namespace the component loads.

Which namespaces matter where (`src/i18n/indexing.ts`, `src/i18n/widgets.ts`):

- **Chrome** (every page): all namespaces except the ones below. Translate these first; until a locale's chrome is complete, none of its pages are indexed.
- **Widget namespaces** (only that tool's page): listed per tool in `src/i18n/widgets.ts`, for example `screen` for the 16 color tools and `winupdate` for the Windows Update screen. Exception: a widget whose text also renders inside the tool-card previews (home page, related tools) is in `cardVisible` there and counts as chrome: `countdown`, `videocall`, `fireplace`, `whitenoise`, `radar`, `winupdate`, `macupdate`, `ubuntu`, `android`.
- **Page-only:** `contact`, `not_found`, `server_error`.

### Adding a UI string

1. Add the key to `src/i18n/ui/en.ts` in the right namespace.
2. Use it through `t()`, `text.key`, or `ui.key` as above.
3. Add the translation to all six locale files, then `npm run i18n:stamp -- --ui <locale> --keys <ns.key>` for each. Until you do, the pages that show it are noindexed in those locales.

Changing an English string works the same way: edit `en.ts`, re-translate the key in each locale, and re-stamp it with `--keys`. The lint fails until every locale is done.

## About, privacy, and contact

- About and privacy: `src/content/pages/<locale>/<about|privacy>.md` (frontmatter: `status`, `title`, `description`, `eyebrow`, `h1`, `lede`, optional `updated`; Markdown body with the same link tokens). A locale without its own file shows the English page as a noindexed draft.
- Contact: built entirely from the `contact.*` strings.

## Adding a new tool

1. `src/data/tools.ts`: add the structural entry (id, slug, `localizedSlugs`, category, kind, color, plus `summary`/`intent`/`useCases` as related-tool scoring keywords). Wire its component in `src/pages/[...slug].astro`.
2. `src/i18n/ui/en.ts`: add `tool_name.<id>`, `tool_short.<id>`, and `tool_summary.<id>`; if the widget has its own strings, add a namespace for them and register it in `src/i18n/widgets.ts`.
3. `src/content/tools/en/<id>.md` with `status: complete`.
4. Translate steps 2 and 3 into all six locales. Every locale must have a content file (the build fails otherwise); use `status: draft` until the translation is finished.
5. `npm run verify`, then `npm run i18n:status`.

## Translating a tool into all locales

One tool at a time, all six locales together, so each finished tool is indexed in every language at once:

1. Read `src/content/tools/en/<id>.md` and GLOSSARY.md. Delete any old draft files for the tool.
2. Write `src/content/tools/<locale>/<id>.md` for es, pt, fr, de, hi, ja from the current English: the same frontmatter keys, the same FAQ, shortcut and chip counts, the same H2/H3 structure, the same `tool:` tokens (duplicates included), `status: draft`. Double-quote YAML strings and use the locale's typographic quotes inside them. Name settings, buttons and messages exactly as the widget's catalog strings say them in that locale, and localize key caps per GLOSSARY (Espacio, Leertaste, Échap…).
3. If the tool has its own widget namespace (`src/i18n/widgets.ts`) that is not translated yet, add it to all six catalogs before the `// @end` line, then `npm run i18n:stamp -- --ui <locale> --ns <namespace>` for each locale.
4. `node scripts/i18n-fr-spaces.mjs` (French no-break spaces), `npm run i18n:stamp -- <id>` (sets `status: complete` and `sourceHash`), `npm run i18n:lint`.
5. `npm run build` and `npm run audit:i18n`: 0 errors, and the sitemap grows by six URLs.

## Commands

| Command | What it does |
|---|---|
| `nvm use` | Switch to Node 22 (required by Astro 7) |
| `npm run build` | Production build into `dist/` |
| `npm run check` | `astro check` type check |
| `npm run snapshot -- <name>` | Record the SEO-visible state of every built page |
| `npm run snapshot -- --diff <a> <b>` | Compare two snapshots (`--filter`, `--fields`, `--max`) |
| `npm run audit:i18n` | Audit `dist/client`: lang, canonical, noindex ⇔ sitemap ⇔ hreflang, reciprocity, in-locale links, English leakage on indexable non-English pages (`--only <regex>`, `--verbose`) |
| `npm run i18n:lint` | Source checks: catalog keys, placeholders, stamps, leakage; content frontmatter/heading/FAQ parity, link tokens, `sourceHash`, length ratio |
| `npm run i18n:stamp -- <tool-id>` | Mark a tool's translations complete and record the English they were made from (`--locale`, `--page about`, `--ui <locale> [--keys …\|--ns …]`) |
| `npm run content:audit` | English content quality: words per tool, shared 8-word phrases between tools (`--strict` fails on boilerplate) |
| `npm run verify` | `astro check` + lint + content audit + build + i18n audit — must pass before every deploy |
| `npm run deploy` | `npm run verify`, then `wrangler deploy`; a failing check stops the deploy |
| `node scripts/i18n-fr-spaces.mjs` | Insert French no-break spaces before `: ; ! ?` and inside « » in `fr.ts` and every French content file (the lint rejects ordinary spaces there) |
| `npm run i18n:status` | Regenerate the tool × locale matrix in PROGRESS.md |
