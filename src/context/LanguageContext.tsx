"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { TRANSLATIONS, TranslationKey, LanguageCode } from "@/data/translations";

export interface LanguageMeta {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  dir: "ltr" | "rtl";
}

export const LANGUAGES: LanguageMeta[] = [
  { code: "tr", name: "Türkçe", nativeName: "Türkçe", flag: "🇹🇷", dir: "ltr" },
  { code: "en", name: "İngilizce", nativeName: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "it", name: "İtalyanca", nativeName: "Italiano", flag: "🇮🇹", dir: "ltr" },
  { code: "pt", name: "Portekizce", nativeName: "Português", flag: "🇵🇹", dir: "ltr" },
  { code: "es", name: "İspanyolca", nativeName: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "fr", name: "Fransızca", nativeName: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "de", name: "Almanca", nativeName: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "ru", name: "Rusça", nativeName: "Русский", flag: "🇷🇺", dir: "ltr" },
  { code: "ja", name: "Japonca", nativeName: "日本語", flag: "🇯🇵", dir: "ltr" },
  { code: "zh", name: "Çince", nativeName: "简体中文", flag: "🇨🇳", dir: "ltr" },
  { code: "ar", name: "Arapça", nativeName: "العربية", flag: "🇸🇦", dir: "rtl" },
];

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  currentLanguageMeta: LanguageMeta;
  t: (key: TranslationKey | string) => string;
}

const defaultContext: LanguageContextType = {
  language: "tr",
  setLanguage: () => {},
  currentLanguageMeta: LANGUAGES[0],
  t: (key: TranslationKey | string) => {
    const dict = TRANSLATIONS.tr as Record<string, string>;
    const enDict = TRANSLATIONS.en as Record<string, string>;
    return dict[key] || enDict[key] || (key as string);
  },
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("tr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("wixtory_app_lang") as LanguageCode | null;
      if (saved && LANGUAGES.some((l) => l.code === saved)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLanguageState(saved);
        const meta = LANGUAGES.find((l) => l.code === saved);
        document.documentElement.setAttribute("lang", saved);
        document.documentElement.setAttribute("dir", meta?.dir || "ltr");
      } else {
        document.documentElement.setAttribute("lang", "tr");
        document.documentElement.setAttribute("dir", "ltr");
      }
    } catch {
      // Ignore SSR / localStorage error
    }
  }, []);

  const setLanguage = (newLang: LanguageCode) => {
    setLanguageState(newLang);
    const meta = LANGUAGES.find((l) => l.code === newLang);
    try {
      localStorage.setItem("wixtory_app_lang", newLang);
      document.documentElement.setAttribute("lang", newLang);
      document.documentElement.setAttribute("dir", meta?.dir || "ltr");
    } catch {
      // Ignore
    }
  };

  const currentLanguageMeta = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  const t = (key: TranslationKey | string): string => {
    const dict = TRANSLATIONS[language] as Record<string, string> | undefined;
    if (dict && dict[key]) {
      return dict[key];
    }
    const enDict = TRANSLATIONS.en as Record<string, string> | undefined;
    if (enDict && enDict[key]) {
      return enDict[key];
    }
    const trDict = TRANSLATIONS.tr as Record<string, string> | undefined;
    if (trDict && trDict[key]) {
      return trDict[key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        currentLanguageMeta,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context || defaultContext;
}
