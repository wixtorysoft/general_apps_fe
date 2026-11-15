import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Suspense } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { PageTransitionLoader } from "@/components/PageTransitionLoader";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  SITE_NAME,
  buildHreflangAlternates,
  SUPPORTED_LANGUAGES,
  OG_LOCALE_MAP,
} from "@/lib/seo-config";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080c18" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wixtory Apps & Games | Official Flagship Ecosystem Portal",
    template: "%s | Wixtory Apps & Games",
  },
  description:
    "Discover Wixtory's official application ecosystem: Wixtory Language Box (interactive language games), Domain Track (domain, SSL & DNS monitor), AstroVibe (cosmic astrology & style), Excuse AI (smart excuse generator), and Wixtory Player (local vertical reel player). 100% privacy-first Flutter & modern web applications.",
  keywords: [
    "Wixtory",
    "apps wixtory",
    "Wixtory Apps",
    "Wixtory Language Box",
    "Domain Track",
    "AstroVibe",
    "Excuse AI",
    "Wixtory Player",
    "Language Learning Games",
    "Domain Expiration Monitor",
    "SSL Certificate Checker",
    "DNS Record Tracker",
    "Zodiac Nails Astrology",
    "3D Tarot",
    "Excuse Generator",
    "Local Reel Player",
    "Flutter Apps",
    "Privacy First Software",
    "Zero Telemetry",
  ],
  authors: [{ name: "Wixtory Apps & Software Studio", url: SITE_URL }],
  creator: "Wixtory",
  publisher: "Wixtory",
  alternates: {
    canonical: SITE_URL,
    languages: buildHreflangAlternates("/"),
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
    title: "Wixtory Apps & Games | Official Flagship Ecosystem Portal",
    description:
      "Explore Wixtory's flagship mobile and web applications: Wixtory Language Box, Domain Track, AstroVibe, Excuse AI, and Wixtory Player. Zero-telemetry, crafted for excellence.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    alternateLocale: SUPPORTED_LANGUAGES.map((l) => OG_LOCALE_MAP[l]),
    type: "website",
    images: [
      {
        url: "/general/logo1.png",
        width: 900,
        height: 284,
        alt: "Wixtory Apps & Software Studio",
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
    title: "Wixtory Apps & Games | Official Flagship Ecosystem Portal",
    description:
      "Discover Wixtory's official application ecosystem: Language Box, Domain Track, AstroVibe, Excuse AI, and Wixtory Player.",
    images: ["/general/logo1.png"],
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
  manifest: "/manifest.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" dir="ltr" data-theme="sky-breeze" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/general/icon.png?v=2" sizes="32x32" type="image/png" />
        <link rel="icon" href="/general/favicon.ico?v=2" sizes="any" type="image/x-icon" />
        <link rel="shortcut icon" href="/general/favicon.ico?v=2" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/general/icon.png?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <JsonLd />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <ThemeProvider>
            <Suspense fallback={null}>
              <PageTransitionLoader />
            </Suspense>
            {children}
            <CookieConsentBanner />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
