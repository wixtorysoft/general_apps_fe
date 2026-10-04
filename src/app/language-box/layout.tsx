import type { Metadata } from "next";
import "@/styles/language-box.css";
import { LanguageProvider } from "@/lib/i18n/language-context";
import { ThemeProvider } from "@/components/language-box/theme-provider";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wixtory Language Box - Learn Languages Through Games",
  description:
    "Master new languages with our engaging collection of interactive games designed to make learning fun and effective. 6 games, multiple languages, progress tracking.",
  keywords: [
    "language learning",
    "Language Box",
    "Wixtory",
    "interactive games",
    "vocabulary",
    "grammar",
    "multilingual",
  ],
  authors: [{ name: "Hacı Celal Aygar" }],
  icons: {
    icon: "https://raw.githubusercontent.com/celalaygar/main/refs/heads/main/project/language-box/Language-Box-Logo.png",
  },
  openGraph: {
    title: "Wixtory Language Box - Learn Languages Through Games",
    description:
      "Master new languages with interactive games. Fun, effective, and engaging.",
    type: "website",
  },
};

import { LanguageBoxThemeScope } from "@/components/language-box/language-box-theme-scope";

export default function LanguageBoxLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      themes={["light", "dark", "emerald", "amber", "system"]}
      enableSystem
    >
      <LanguageProvider>
        <LanguageBoxThemeScope className={`language-box-scope ${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased selection:bg-emerald-500 selection:text-white font-sans`}>
          {children}
        </LanguageBoxThemeScope>
      </LanguageProvider>
    </ThemeProvider>
  );
}
