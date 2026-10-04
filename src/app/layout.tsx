import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" dir="ltr" data-theme="sky-breeze" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
