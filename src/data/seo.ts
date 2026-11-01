import { localeOrder, locales, type Locale } from './locales';
import { tools, type Tool } from './tools';
import { t, toolName } from '../i18n/ui';
import { absoluteUrl, homePath, siteUrl, staticPagePath, toolPath } from '../i18n/paths';

export { absoluteUrl, siteUrl, toolPath };

export const siteName = 'PixoraScreen';
/** Author of the tool articles, shown in the byline and the WebPage JSON-LD. */
export const siteAuthor = { name: 'Gyanranjan Patra' };
export const defaultDescription =
  'PixoraScreen is a premium collection of fullscreen color screens, display tests, screen savers, prank screens, and fake update screens.';

export function allToolPaths() {
  return tools.flatMap((tool) => localeOrder.map((locale) => ({ tool, locale, path: toolPath(tool, locale) })));
}

export function landingJsonLd(locale: Locale) {
  const lang = locales[locale].lang;
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    inLanguage: lang,
    description: t(locale, 'home.site_description'),
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
  };

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: t(locale, 'home.collection_name', { site: siteName }),
    url: absoluteUrl(homePath(locale)),
    inLanguage: lang,
    hasPart: tools.map((tool) => ({
      '@type': 'WebApplication',
      name: toolName(locale, tool),
      url: absoluteUrl(toolPath(tool, locale)),
    })),
  };

  return [websiteSchema, organizationSchema, collectionPageSchema];
}

function stripHtml(text: string): string {
  return text.replace(/<[^>]*>/g, '');
}

/** The page text the JSON-LD repeats; comes from the tool's content entry (src/i18n/content.ts). */
export type ToolJsonLdText = {
  title: string;
  description: string;
  breadcrumb: string;
  appDescription: string;
  faqs: { question: string; answer: string }[];
  updated?: Date | null;
};

export function toolJsonLd(tool: Tool, path: string, locale: Locale, text: ToolJsonLdText) {
  const url = absoluteUrl(path);
  const crumbName = text.breadcrumb;
  const baseSchemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: text.title,
      url,
      inLanguage: locales[locale].lang,
      description: text.description,
      ...(text.updated
        ? {
            dateModified: text.updated.toISOString().slice(0, 10),
            author: { '@type': 'Person', name: siteAuthor.name, url: absoluteUrl(staticPagePath('about', locale)) },
          }
        : {}),
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
      mainEntity: {
        '@type': 'SoftwareApplication',
        name: crumbName,
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t(locale, 'tool.breadcrumb_home'), item: absoluteUrl(homePath(locale)) },
        { '@type': 'ListItem', position: 2, name: crumbName, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: text.faqs.map((faq) => ({
        '@type': 'Question',
        name: stripHtml(faq.question),
        acceptedAnswer: {
          '@type': 'Answer',
          text: stripHtml(faq.answer),
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: crumbName,
      url,
      description: text.appDescription,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
  ];

  return baseSchemas;
}
