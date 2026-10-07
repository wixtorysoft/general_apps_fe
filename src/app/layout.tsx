import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Wixtory Apps | AstroVibe & Excuse Resmi Tanıtım Portalı",
  description:
    "AstroVibe (Kozmik Astroloji, Tarot ve Protez Tırnak Stil Rehberi) ve Excuse (Zeki, Eğlenceli ve Yaratıcı Bahanematik) uygulamalarının resmi tanıtım, detay ve ortak gizlilik politikası platformu.",
  keywords: [
    "AstroVibe",
    "Excuse",
    "Bahanematik",
    "Astroloji",
    "Protez Tırnak",
    "Tarot",
    "Wixtory",
    "General Apps",
    "Gizlilik Politikası",
    "KVKK",
    "GDPR",
  ],
  authors: [{ name: "Wixtory Software" }],
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
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <ThemeProvider>
            {children}
            <CookieConsentBanner />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
