// UI string catalogs for every locale. English (en.ts) defines every key; other locales may be
// partial while translation is in progress. Missing keys fall back to English for display, and
// the page that needs them stays noindexed (see uiComplete() and src/i18n/indexing.ts).
import type { Locale } from '../locales';
import type { Catalog } from './types';
import { en } from './en';
import { es } from './es';
import { pt } from './pt';
import { fr } from './fr';
import { de } from './de';
import { hi } from './hi';
import { ja } from './ja';

export type { Catalog };

export const catalogs: Record<Locale, Catalog> = { en, es, pt, fr, de, hi, ja };

const namespaceOf = (key: string) => key.slice(0, key.indexOf('.'));

/** Every namespace defined in English, e.g. "nav", "footer", "screen". */
export const namespaces = [...new Set(Object.keys(en).map(namespaceOf))];

function fill(value: string, params?: Record<string, string>) {
  if (!params) return value;
  return value.replace(/\{([a-z_]+)\}/g, (match, name: string) => params[name] ?? match);
}

/** The text for `key` in `locale`, falling back to English. Throws on a key English does not define. */
export function t(locale: Locale, key: string, params?: Record<string, string>): string {
  const value = catalogs[locale][key] ?? en[key];
  if (value === undefined) throw new Error(`Unknown UI string "${key}"`);
  return fill(value, params);
}

/** All strings of one namespace for `locale`, keyed without the namespace prefix. For passing to client scripts. */
export function strings(locale: Locale, namespace: string): Record<string, string> {
  const prefix = `${namespace}.`;
  const out: Record<string, string> = {};
  for (const key of Object.keys(en)) {
    if (key.startsWith(prefix)) out[key.slice(prefix.length)] = catalogs[locale][key] ?? en[key];
  }
  return out;
}

/** English keys in `namespaces` that `locale` has not translated yet. */
export function missingKeys(locale: Locale, inNamespaces: readonly string[] = namespaces): string[] {
  const wanted = new Set(inNamespaces);
  return Object.keys(en).filter((key) => wanted.has(namespaceOf(key)) && !catalogs[locale][key]?.trim());
}

/** Keys in a locale file that English does not define (typos or leftovers). */
export function unknownKeys(locale: Locale): string[] {
  return Object.keys(catalogs[locale]).filter((key) => !(key in en));
}

export function uiComplete(locale: Locale, inNamespaces: readonly string[]): boolean {
  return missingKeys(locale, inNamespaces).length === 0;
}

type ToolRef = { id: string };
type CategoryRef = string;

export const toolName = (locale: Locale, tool: ToolRef) => t(locale, `tool_name.${tool.id}`);
export const toolShortName = (locale: Locale, tool: ToolRef) => t(locale, `tool_short.${tool.id}`);
export const toolSummary = (locale: Locale, tool: ToolRef) => t(locale, `tool_summary.${tool.id}`);
export const categoryName = (locale: Locale, category: CategoryRef) => t(locale, `category_name.${category}`);
export const categoryDescription = (locale: Locale, category: CategoryRef) => t(locale, `category_desc.${category}`);
export const categoryLabel = (locale: Locale, category: CategoryRef) => t(locale, `category_label.${category}`);
