"use client";

import React, { useEffect, useState } from "react";
import { useDomainTrackThemeStore } from "@/store/domain-track-theme-store";

export function DomainTrackThemeScope({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { resolvedTheme, initTheme } = useDomainTrackThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    initTheme();
  }, [initTheme]);

  const activeThemeClass = mounted ? `dt-theme-${resolvedTheme}` : "dt-theme-light";
  const fullClassName = ["dt-root", activeThemeClass, className].filter(Boolean).join(" ");

  return (
    <div className={fullClassName} style={style} suppressHydrationWarning>
      {children}
    </div>
  );
}

