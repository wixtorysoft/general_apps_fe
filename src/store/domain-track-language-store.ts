"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Language } from "@/data/domain-track-translations";
import { translations, getDomainTrackLanguageMeta } from "@/data/domain-track-translations";

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
      setLanguage: (lang: Language) => {
        if (typeof document !== "undefined") {
          const meta = getDomainTrackLanguageMeta(lang);
          document.documentElement.setAttribute("lang", lang);
          document.documentElement.setAttribute("dir", meta.dir);
        }
        set({
          language: lang,
          t: translations[lang] || translations.en,
        });
      },
    }),
    {
      name: "wixtory-domain-track-language",
      onRehydrateStorage: () => (state) => {
        if (state && typeof document !== "undefined") {
          const meta = getDomainTrackLanguageMeta(state.language);
          document.documentElement.setAttribute("lang", state.language);
          document.documentElement.setAttribute("dir", meta.dir);
        }
      },
    }
  )
);
