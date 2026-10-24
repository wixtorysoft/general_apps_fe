"use client";

import { useTheme } from "@/components/language-box/theme-provider";
import { useEffect, useState } from "react";

export function LanguageBoxThemeScope({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const { resolvedTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = mounted
    ? theme === "system"
      ? resolvedTheme || "dark"
      : theme || "dark"
    : "dark";

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.remove("light", "dark", "emerald", "amber");
    root.classList.add(activeTheme);
    return () => {
      root.classList.remove("light", "dark", "emerald", "amber");
    };
  }, [mounted, activeTheme]);

  return (
    <div className={`${className} ${activeTheme}`}>
      {children}
    </div>
  );
}
