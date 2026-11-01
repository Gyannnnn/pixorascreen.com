// Server-only access to the per-locale tool content in src/content/tools/<locale>/<tool-id>.md.
import { getCollection, type CollectionEntry } from 'astro:content';
import { tools, type Tool } from '../data/tools';
import { localeOrder, type Locale } from './locales';
import { homePath, staticPageIds, staticPagePath, toolPath, type StaticPageId } from './paths';

type ToolEntry = CollectionEntry<'toolContent'>;
type PageEntry = CollectionEntry<'pages'>;

const entries = new Map<string, ToolEntry>((await getCollection('toolContent')).map((entry) => [entry.id, entry]));
const pageEntries = new Map<string, PageEntry>((await getCollection('pages')).map((entry) => [entry.id, entry]));
const toolsById = new Map(tools.map((tool) => [tool.id, tool]));

// Every tool needs a file in every locale (a draft is fine), so a missing one fails the build.
const missing = tools.flatMap((tool) => localeOrder.filter((locale) => !entries.has(`${locale}/${tool.id}`)).map((locale) => `${locale}/${tool.id}.md`));
if (missing.length) throw new Error(`Missing tool content files in src/content/tools/: ${missing.join(', ')}`);

export function getToolEntry(locale: Locale, toolId: string): ToolEntry | undefined {
  return entries.get(`${locale}/${toolId}`);
}

/**
 * Resolve the link tokens used in Markdown articles to real URLs for `locale`:
 * `tool:<id>`, `page:<about|privacy|contact>` and `home:`, each with an optional `#fragment`.
 * Throws on an unknown token so a typo fails the build instead of shipping a dead link.
 */
export function localizeHtml(html: string, locale: Locale, source = 'article'): string {
  return html.replace(/href="(tool|page|home):([^"#]*)(#[^"]*)?"/g, (_match, kind: string, id: string, fragment = '') => {
    let path: string;
    if (kind === 'tool') {
      const tool = toolsById.get(id);
      if (!tool) throw new Error(`${source}: unknown link token "tool:${id}"`);
      path = toolPath(tool, locale);
    } else if (kind === 'page') {
      if (!staticPageIds.includes(id as StaticPageId)) throw new Error(`${source}: unknown link token "page:${id}"`);
      path = staticPagePath(id as StaticPageId, locale);
    } else {
      if (id) throw new Error(`${source}: "home:" takes no id, got "home:${id}"`);
      path = homePath(locale);
    }
    return `href="${path}${fragment}"`;
  });
}

export type ToolText = {
  status: 'draft' | 'complete';
  title: string;
  description: string;
  h1: string;
  breadcrumb: string;
  appDescription: string;
  lede: string;
  chips: string[];
  shortcuts: { keys: string; label: string }[];
  faqs: { question: string; answer: string }[];
  articleHtml: string;
  /** Last revision date, shown in the byline. */
  updated: Date | null;
};

/** Everything a tool page says, from src/content/tools/<locale>/<tool-id>.md. */
export function toolText(tool: Tool, locale: Locale): ToolText {
  const entry = getToolEntry(locale, tool.id)!;
  const data = entry.data;
  return {
    status: data.status,
    title: data.title,
    description: data.description,
    h1: data.h1,
    breadcrumb: data.breadcrumb,
    appDescription: data.appDescription,
    lede: data.lede,
    chips: data.chips,
    shortcuts: data.shortcuts,
    faqs: data.faqs.map((faq) => ({ question: faq.q, answer: faq.a })),
    articleHtml: localizeHtml(entry.rendered?.html ?? '', locale, `src/content/tools/${entry.id}.md`),
    updated: data.updated ?? null,
  };
}

export type ContentPageId = 'about' | 'privacy';

/** The about/privacy entry for `locale`; locales without a translation yet show the English page as a draft. */
export function getPageEntry(locale: Locale, page: ContentPageId): { entry: PageEntry; translated: boolean } {
  const own = pageEntries.get(`${locale}/${page}`);
  if (own) return { entry: own, translated: true };
  const english = pageEntries.get(`en/${page}`);
  if (!english) throw new Error(`Missing src/content/pages/en/${page}.md`);
  return { entry: english, translated: false };
}

export function pageContent(locale: Locale, page: ContentPageId) {
  const { entry, translated } = getPageEntry(locale, page);
  return {
    ...entry.data,
    status: translated ? entry.data.status : ('draft' as const),
    html: localizeHtml(entry.rendered?.html ?? '', locale, `src/content/pages/${entry.id}.md`),
  };
}
