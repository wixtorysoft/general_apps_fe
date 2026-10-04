"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface UseThemeProps {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  resolvedTheme: string | undefined;
  themes: string[];
  systemTheme: "dark" | "light" | undefined;
  forcedTheme?: string;
}

const ThemeContext = createContext<UseThemeProps>({
  theme: "dark",
  setTheme: () => {},
  resolvedTheme: "dark",
  themes: ["light", "dark", "emerald", "amber", "system"],
  systemTheme: "dark",
});

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "language_box_theme",
  themes = ["light", "dark", "emerald", "amber", "system"],
}: {
  children: React.ReactNode;
  defaultTheme?: string;
  storageKey?: string;
  themes?: string[];
  [key: string]: any;
}) {
  const [theme, setThemeState] = useState<string>(defaultTheme);
  const [systemTheme, setSystemTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(media.matches ? "dark" : "light");

    const listener = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };
    media.addEventListener("change", listener);

    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setThemeState(saved);
      }
    } catch (e) {}

    return () => media.removeEventListener("change", listener);
  }, [storageKey]);

  const setTheme = (newTheme: string) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(storageKey, newTheme);
    } catch (e) {}
  };

  const resolvedTheme = theme === "system" ? systemTheme : theme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        resolvedTheme,
        themes,
        systemTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
