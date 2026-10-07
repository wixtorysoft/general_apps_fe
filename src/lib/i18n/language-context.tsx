"use client";

import React, { createContext, useContext, useCallback } from "react";
import { translations, LanguageCode, LanguageOption, languages } from "./translations";

// LocalStorage key for persisting language preference
const STORAGE_KEY = "lang-box-language";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
  languages: LanguageOption[];
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Start with 'en' on SSR and initial client hydration to guarantee identical HTML
  const [language, setLanguageState] = React.useState<LanguageCode>("en");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
      if (saved && translations[saved]) {
        setLanguageState(saved);
        document.documentElement.lang = saved;
        document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
      }
    } catch {
      // localStorage may fail in restricted browser contexts
    }
  }, []);

  const setLanguage = useCallback((lang: LanguageCode) => {
    if (translations[lang]) {
      setLanguageState(lang);
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {}
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language]?.[key] || translations.en[key] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
