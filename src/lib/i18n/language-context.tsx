"use client";

import React, { createContext, useContext, useCallback, useEffect, useState } from "react";
import {
  translations,
  LanguageCode,
  LanguageOption,
  languages,
  getLanguageMeta,
} from "./translations";

// LocalStorage keys for persisting language preference
const STORAGE_KEY = "lang-box-language";
const GLOBAL_STORAGE_KEY = "wixtory_app_lang";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  currentLanguageMeta: LanguageOption;
  t: (key: string) => string;
  languages: LanguageOption[];
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Start with 'en' on SSR and initial client hydration to guarantee identical HTML
  const [language, setLanguageState] = useState<LanguageCode>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      // Check LanguageBox preference first, fallback to ecosystem preference
      const saved = (localStorage.getItem(STORAGE_KEY) ||
        localStorage.getItem(GLOBAL_STORAGE_KEY)) as LanguageCode | null;

      if (saved && languages.some((l) => l.code === saved)) {
        setLanguageState(saved);
        const meta = getLanguageMeta(saved);
        document.documentElement.setAttribute("lang", saved);
        document.documentElement.setAttribute("dir", meta.dir);
      } else {
        const meta = getLanguageMeta("en");
        document.documentElement.setAttribute("lang", "en");
        document.documentElement.setAttribute("dir", meta.dir);
      }
    } catch {
      // localStorage may fail in restricted browser contexts
    }
  }, []);

  const setLanguage = useCallback((lang: LanguageCode) => {
    setLanguageState(lang);
    const meta = getLanguageMeta(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      localStorage.setItem(GLOBAL_STORAGE_KEY, lang);
    } catch {
      // localStorage may fail in restricted browser contexts
    }
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", meta.dir);
  }, []);

  const t = useCallback(
    (key: string): string => {
      // Cascade: current language -> English -> Turkish -> key identifier
      const currentDict = translations[language];
      if (currentDict && currentDict[key]) {
        return currentDict[key];
      }
      const enDict = translations.en;
      if (enDict && enDict[key]) {
        return enDict[key];
      }
      const trDict = translations.tr;
      if (trDict && trDict[key]) {
        return trDict[key];
      }
      return key;
    },
    [language]
  );

  const currentLanguageMeta = getLanguageMeta(language);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        currentLanguageMeta,
        t,
        languages,
        mounted,
      }}
    >
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
