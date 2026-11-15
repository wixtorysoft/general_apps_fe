import type { Metadata } from "next";
import "@/styles/language-box.css";
import { LanguageProvider } from "@/lib/i18n/language-context";
import { ThemeProvider } from "@/components/language-box/theme-provider";
import { constructMetadata } from "@/lib/seo-config";

export const metadata: Metadata = constructMetadata({
  path: "/language-box",
  titleKey: "langbox_title",
  descKey: "langbox_desc",
  keywordsKey: "site_keywords",
  ogImage: "/apps/language-box-icon.png",
  ogImageAlt: "Wixtory Language Box - 8 Interactive Games",
});

import { LanguageBoxThemeScope } from "@/components/language-box/language-box-theme-scope";

export default function LanguageBoxLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      themes={["light", "dark", "emerald", "system"]}
      enableSystem={false}
    >
      <LanguageProvider>
        <LanguageBoxThemeScope className="language-box-scope min-h-screen bg-background text-foreground antialiased selection:bg-emerald-500 selection:text-white font-sans">
          {children}
        </LanguageBoxThemeScope>
      </LanguageProvider>
    </ThemeProvider>
  );
}
