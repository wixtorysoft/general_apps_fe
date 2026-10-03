"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Language } from "@/data/domain-track-translations";
import { translations } from "@/data/domain-track-translations";

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)["en"];
}

export const useDomainTrackLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "en",
      t: translations.en,
      setLanguage: (lang: Language) =>
        set({
          language: lang,
          t: translations[lang] || translations.en,
        }),
    }),
    {
      name: "wixtory-domain-track-language",
    }
  )
);
