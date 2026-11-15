import type { Metadata } from "next";
import { resolveI18n } from "@/i18n";
import { LanguageCode } from "@/i18n/types";

export const SITE_URL = "https://apps.wixtory.com";
export const SITE_NAME = "Wixtory Apps & Software Studio";

export const SUPPORTED_LANGUAGES: LanguageCode[] = [
  "tr",
  "en",
  "fr",
  "it",
  "es",
  "de",
  "pt",
  "ru",
  "ja",
  "zh",
  "ar",
];

export const PRIORITY_LANGUAGES: LanguageCode[] = [
  "tr",
  "en",
  "fr",
  "it",
  "es",
  "de",
];

export const OG_LOCALE_MAP: Record<LanguageCode, string> = {
  tr: "tr_TR",
  en: "en_US",
  fr: "fr_FR",
  it: "it_IT",
  es: "es_ES",
  de: "de_DE",
  pt: "pt_BR",
  ru: "ru_RU",
  ja: "ja_JP",
  zh: "zh_CN",
  ar: "ar_SA",
};

interface MetadataOptions {
  path?: string;
  titleKey: string;
  descKey: string;
  keywordsKey?: string;
  ogImage?: string;
  ogImageAlt?: string;
  lang?: LanguageCode;
}

/**
 * Builds localized hreflang alternate URLs for all supported languages
 * with x-default pointing to the canonical path.
 */
export function buildHreflangAlternates(pathname: string = ""): Record<string, string> {
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const normalizedPath = cleanPath === "/" ? "" : cleanPath;

  const alternates: Record<string, string> = {
    "x-default": `${SITE_URL}${normalizedPath || "/"}`,
  };

  SUPPORTED_LANGUAGES.forEach((l) => {
    alternates[l] = `${SITE_URL}${normalizedPath || "/"}?lang=${l}`;
  });

  return alternates;
}

/**
 * Generates production-grade Next.js Metadata with canonicals,
 * 11-language hreflang alternates, Open Graph, Twitter cards, and Googlebot directives.
 */
export function constructMetadata({
  path = "",
  titleKey,
  descKey,
  keywordsKey = "site_keywords",
  ogImage = "/general/logo1.png",
  ogImageAlt = "Wixtory Flagship Apps & Games",
  lang = "en",
}: MetadataOptions): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = cleanPath === "/" ? SITE_URL : `${SITE_URL}${cleanPath}`;

  const title = resolveI18n("seo", titleKey, lang);
  const description = resolveI18n("seo", descKey, lang);
  const keywordsStr = resolveI18n("seo", keywordsKey, lang);
  const keywords = keywordsStr ? keywordsStr.split(",").map((k) => k.trim()) : [];

  const hreflangLanguages = buildHreflangAlternates(cleanPath);

  const alternateLocales = SUPPORTED_LANGUAGES.filter((l) => l !== lang).map(
    (l) => OG_LOCALE_MAP[l]
  );

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    authors: [{ name: "Wixtory Apps & Software Studio", url: SITE_URL }],
    creator: "Wixtory",
    publisher: "Wixtory",
    alternates: {
      canonical: canonicalUrl,
      languages: hreflangLanguages,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: OG_LOCALE_MAP[lang] || "en_US",
      alternateLocale: alternateLocales,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 900,
          height: 284,
          alt: ogImageAlt,
        },
        {
          url: "/general/icon.png",
          width: 512,
          height: 512,
          alt: "Wixtory Icon",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      site: "@Wixtoryy",
      creator: "@Wixtoryy",
    },
    icons: {
      icon: [
        { url: "/general/icon.png?v=2", sizes: "32x32", type: "image/png" },
        { url: "/general/favicon.ico?v=2", type: "image/x-icon" },
        { url: "/icon.png?v=2", sizes: "32x32", type: "image/png" },
        { url: "/favicon.ico?v=2", type: "image/x-icon" },
      ],
      shortcut: "/general/favicon.ico?v=2",
      apple: "/general/icon.png?v=2",
    },
    category: "technology",
  };
}

