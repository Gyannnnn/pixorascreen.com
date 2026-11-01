import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One file per tool per locale: src/content/tools/<locale>/<tool-id>.md, id "<locale>/<tool-id>".
// The body is the tool's article; internal links use tool:<id>, page:<id> and home: tokens,
// resolved to the right locale's URL at render time (src/i18n/content.ts). See TRANSLATION.md.
const toolContent = defineCollection({
  loader: glob({
    pattern: '*/*.md',
    base: './src/content/tools',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z
    .object({
      /** Only `complete` translations are indexed and offered in the language switcher. */
      status: z.enum(['draft', 'complete']),
      /** Translations only: hash of the English file they were translated from. */
      sourceHash: z.string().optional(),
      /** Raw page title; SeoHead appends " | PixoraScreen" when it is missing. */
      title: z.string(),
      description: z.string(),
      h1: z.string(),
      /** Name used in the breadcrumb trail and the WebApplication/BreadcrumbList JSON-LD. */
      breadcrumb: z.string(),
      /** WebApplication JSON-LD description. */
      appDescription: z.string(),
      /** Paragraph under the H1. */
      lede: z.string(),
      chips: z.array(z.string()).max(5),
      shortcuts: z.array(z.object({ keys: z.string(), label: z.string() }).strict()),
      faqs: z.array(z.object({ q: z.string(), a: z.string() }).strict()),
      /** Date the content was last meaningfully revised; shown in the byline and as dateModified. */
      updated: z.coerce.date().optional(),
    })
    .strict(),
});

// About and privacy pages, one file per locale: src/content/pages/<locale>/<about|privacy>.md.
// (The contact page is built from the "contact" UI strings instead.)
const pages = defineCollection({
  loader: glob({
    pattern: '*/*.md',
    base: './src/content/pages',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z
    .object({
      status: z.enum(['draft', 'complete']),
      sourceHash: z.string().optional(),
      /** Page title; SeoHead appends " | PixoraScreen" when it is missing. */
      title: z.string(),
      description: z.string(),
      eyebrow: z.string(),
      h1: z.string(),
      lede: z.string(),
      /** Shown as "Last updated: <date>" under the lede when present. */
      updated: z.coerce.date().optional(),
    })
    .strict(),
});

export const collections = {
  toolContent,
  pages,
};
