"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeType = "sky-breeze" | "midnight-dark";

export interface ThemeMeta {
  id: ThemeType;
  name: string;
  badge: string;
  primary: string;
  secondary: string;
  isDark: boolean;
}

export const THEMES: ThemeMeta[] = [
  {
    id: "sky-breeze",
    name: "Ferah Gök Mavisi",
    badge: "Ferah Açık Mavi",
    primary: "#0284C7",
    secondary: "#06B6D4",
    isDark: false,
  },
  {
    id: "midnight-dark",
    name: "Gece Obsidiyen",
    badge: "Derin Koyu Mod",
    primary: "#6366F1",
    secondary: "#22D3EE",
    isDark: true,
  },
];

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  toggleNextTheme: () => void;
  currentThemeMeta: ThemeMeta;
}

const defaultThemeContext: ThemeContextType = {
  theme: "sky-breeze",
  setTheme: () => {},
  toggleNextTheme: () => {},
  currentThemeMeta: THEMES[0],
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeType>("sky-breeze");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("wixtory_app_theme") as ThemeType | null;
      if (saved && THEMES.some((t) => t.id === saved)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setThemeState(saved);
        document.documentElement.setAttribute("data-theme", saved);
      } else {
        document.documentElement.setAttribute("data-theme", "sky-breeze");
      }
    } catch {
      // In case localStorage is disabled or SSR
    }
  }, []);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("wixtory_app_theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    } catch {
      // Ignore
    }
  };

  const toggleNextTheme = () => {
    const currentIndex = THEMES.findIndex((t) => t.id === theme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    setTheme(THEMES[nextIndex].id);
  };

  const currentThemeMeta = THEMES.find((t) => t.id === theme) || THEMES[0];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleNextTheme, currentThemeMeta }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return defaultThemeContext;
  }
  return context;
}
