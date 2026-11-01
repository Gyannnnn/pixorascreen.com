export type Locale = 'en' | 'es' | 'pt' | 'fr' | 'de' | 'hi' | 'ja';

export const defaultLocale: Locale = 'en';

type LocaleInfo = {
  /** Language name written in that language, as shown in the language switcher. */
  label: string;
  pathPrefix: string;
  /** Value for <html lang> and hreflang. */
  lang: string;
  /** Value for og:locale. */
  ogLocale: string;
};

export const locales: Record<Locale, LocaleInfo> = {
  en: { label: 'English', pathPrefix: '', lang: 'en', ogLocale: 'en_US' },
  es: { label: 'Español', pathPrefix: '/es', lang: 'es', ogLocale: 'es_419' },
  pt: { label: 'Português', pathPrefix: '/pt', lang: 'pt', ogLocale: 'pt_BR' },
  fr: { label: 'Français', pathPrefix: '/fr', lang: 'fr', ogLocale: 'fr_FR' },
  de: { label: 'Deutsch', pathPrefix: '/de', lang: 'de', ogLocale: 'de_DE' },
  hi: { label: 'हिन्दी', pathPrefix: '/hi', lang: 'hi', ogLocale: 'hi_IN' },
  ja: { label: '日本語', pathPrefix: '/ja', lang: 'ja', ogLocale: 'ja_JP' },
};

export const localeOrder = Object.keys(locales) as Locale[];

export function isLocale(value: string): value is Locale {
  return value in locales;
}
