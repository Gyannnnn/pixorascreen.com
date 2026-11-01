// URL builders for every locale. All internal links should come from here so a page
// in one language never links into another by accident.
import type { Tool } from '../data/tools';
import { defaultLocale, isLocale, locales, type Locale } from './locales';

export const siteUrl = 'https://pixorascreen.com';

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export const staticPageIds = ['about', 'privacy', 'contact'] as const;
export type StaticPageId = (typeof staticPageIds)[number];

export function localePrefix(locale: Locale) {
  return locales[locale].pathPrefix;
}

/** Home page path, always with a trailing slash: `/`, `/hi/`. */
export function homePath(locale: Locale = defaultLocale) {
  return `${localePrefix(locale)}/`;
}

export function toolSlug(tool: Pick<Tool, 'slug' | 'localizedSlugs'>, locale: Locale = defaultLocale) {
  return locale === defaultLocale ? tool.slug : tool.localizedSlugs[locale as Exclude<Locale, 'en'>] ?? tool.slug;
}

export function toolPath(tool: Pick<Tool, 'slug' | 'localizedSlugs'>, locale: Locale = defaultLocale) {
  return `${localePrefix(locale)}/${toolSlug(tool, locale)}/`;
}

/** about/privacy/contact in any locale: `/about/`, `/hi/about/`. */
export function staticPagePath(page: StaticPageId, locale: Locale = defaultLocale) {
  return `${localePrefix(locale)}/${page}/`;
}

export function localeFromPath(pathname: string): Locale {
  const first = pathname.split('/')[1] ?? '';
  return first && first !== defaultLocale && isLocale(first) ? first : defaultLocale;
}
