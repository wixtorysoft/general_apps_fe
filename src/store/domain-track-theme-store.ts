"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type DomainTrackTheme = "light" | "dark" | "system";

interface DomainTrackThemeState {
  theme: DomainTrackTheme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: DomainTrackTheme) => void;
  initTheme: () => void;
}

function getSystemTheme(): "light" | "dark" {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light";
}

export const useDomainTrackThemeStore = create<DomainTrackThemeState>()(
  persist(
    (set, get) => ({
      theme: "system",
      resolvedTheme: "light",
      setTheme: (theme: DomainTrackTheme) => {
        const resolved: "light" | "dark" =
          theme === "system" ? getSystemTheme() : theme;

        if (typeof document !== "undefined") {
          const root = document.querySelector(".dt-root");
          if (root) {
            root.classList.remove("dt-theme-light", "dt-theme-dark");
            root.classList.add(`dt-theme-${resolved}`);
          }
        }

        set({ theme, resolvedTheme: resolved });
      },
      initTheme: () => {
        const currentTheme = get().theme;
        const resolved: "light" | "dark" =
          currentTheme === "system" ? getSystemTheme() : currentTheme;

        if (typeof document !== "undefined") {
          const root = document.querySelector(".dt-root");
          if (root) {
            root.classList.remove("dt-theme-light", "dt-theme-dark");
            root.classList.add(`dt-theme-${resolved}`);
          }
        }

        set({ resolvedTheme: resolved });
      },
    }),
    {
      name: "wixtory-domain-track-theme",
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.initTheme();
        }
      },
    }
  )
);

