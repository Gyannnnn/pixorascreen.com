// Decides which locale versions of a page are shown to search engines and offered in
// the language switcher. A non-English page is indexable only once it is completely
// translated; until then it is built but gets noindex, stays out of the sitemap and
// hreflang, and is hidden from the switcher. See TRANSLATION.md.
import { tools } from '../data/tools';
import { getPageEntry, getToolEntry } from './content';
import { namespaces, uiComplete } from './ui';
import { pageOnlyNamespaces, toolPageOnlyNamespaces, widgetNamespaces } from './widgets';
import { defaultLocale, localeOrder, locales, type Locale } from './locales';
import { absoluteUrl, homePath, staticPageIds, staticPagePath, toolPath, type StaticPageId } from './paths';

export type PageKey = { kind: 'home' } | { kind: 'tool'; id: string } | { kind: 'page'; id: StaticPageId };

const toolsById = new Map(tools.map((tool) => [tool.id, tool]));

/** The path of `key` in `locale`, or null when that locale has no version of the page. */
export function pathFor(key: PageKey, locale: Locale): string | null {
  switch (key.kind) {
    case 'home':
      return homePath(locale);
    case 'tool': {
      const tool = toolsById.get(key.id);
      if (!tool) throw new Error(`Unknown tool id "${key.id}"`);
      return toolPath(tool, locale);
    }
    case 'page':
      return staticPagePath(key.id, locale);
  }
}

/** UI namespaces every page shows: navbar, footer, home, cards, share bar, banner, and so on. */
const chromeNamespaces = namespaces.filter((namespace) => !toolPageOnlyNamespaces.has(namespace) && !pageOnlyNamespaces.has(namespace));

const chromeCache = new Map<Locale, boolean>();
/** True when the shared site chrome is fully translated for `locale`. */
export function chromeComplete(locale: Locale): boolean {
  if (!chromeCache.has(locale)) chromeCache.set(locale, uiComplete(locale, chromeNamespaces));
  return chromeCache.get(locale)!;
}

/** True when every string on the page is in `locale`. */
function isComplete(key: PageKey, locale: Locale): boolean {
  if (locale === defaultLocale) return true;
  if (!chromeComplete(locale)) return false;
  switch (key.kind) {
    case 'home':
      return true;
    case 'tool':
      return getToolEntry(locale, key.id)?.data.status === 'complete' && uiComplete(locale, widgetNamespaces(key.id));
    case 'page':
      if (key.id === 'contact') return uiComplete(locale, ['contact']);
      return getPageEntry(locale, key.id).translated && getPageEntry(locale, key.id).entry.data.status === 'complete';
  }
}

export function isIndexable(key: PageKey, locale: Locale): boolean {
  return pathFor(key, locale) !== null && isComplete(key, locale);
}

export function equivalents(key: PageKey) {
  return localeOrder.flatMap((locale) => {
    const path = pathFor(key, locale);
    return path === null ? [] : [{ locale, path, indexable: isComplete(key, locale) }];
  });
}

/** hreflang alternates for the page in `locale`: only between indexable versions, and only when there are at least two. */
export function alternates(key: PageKey, locale: Locale) {
  if (!isIndexable(key, locale)) return [];
  const indexable = equivalents(key).filter((entry) => entry.indexable);
  if (indexable.length < 2) return [];
  return indexable.map((entry) => ({ locale: entry.locale, lang: locales[entry.locale].lang, href: absoluteUrl(entry.path) }));
}

/** Language switcher options: the current page plus every indexable translation of it. */
export function languageOptions(key: PageKey | undefined, current: Locale) {
  const entries = key ? equivalents(key).filter((entry) => entry.indexable || entry.locale === current) : [];
  if (!entries.some((entry) => entry.locale === current)) entries.push({ locale: current, path: homePath(current), indexable: false });
  return localeOrder
    .map((locale) => entries.find((entry) => entry.locale === locale))
    .filter((entry) => entry !== undefined)
    .map((entry) => ({ locale: entry.locale, lang: locales[entry.locale].lang, label: locales[entry.locale].label, href: entry.path, current: entry.locale === current }));
}

export function allPageKeys(): PageKey[] {
  return [
    { kind: 'home' },
    ...tools.map((tool): PageKey => ({ kind: 'tool', id: tool.id })),
    ...staticPageIds.map((id): PageKey => ({ kind: 'page', id })),
  ];
}

function sitemapPriority(key: PageKey, locale: Locale) {
  if (key.kind === 'home') return { priority: locale === defaultLocale ? '1.0' : '0.8', changefreq: locale === defaultLocale ? 'daily' : 'weekly' };
  if (key.kind === 'page') return { priority: '0.4', changefreq: 'monthly' };
  return { priority: key.id === 'black-screen' || key.id === 'white-screen' ? '0.9' : '0.8', changefreq: 'weekly' };
}

/** Every indexable URL, for sitemap.xml and sitemap-0.xml. */
export function sitemapEntries() {
  return allPageKeys().flatMap((key) =>
    localeOrder.flatMap((locale) => {
      const path = pathFor(key, locale);
      return path !== null && isIndexable(key, locale) ? [{ loc: absoluteUrl(path), ...sitemapPriority(key, locale) }] : [];
    }),
  );
}
