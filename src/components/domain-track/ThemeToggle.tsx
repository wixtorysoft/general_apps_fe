"use client";

import React, { useEffect, useState, useRef } from "react";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import { useDomainTrackThemeStore, DomainTrackTheme } from "@/store/domain-track-theme-store";
import { useDomainTrackLanguageStore } from "@/store/domain-track-language-store";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme, initTheme } = useDomainTrackThemeStore();
  const { language } = useDomainTrackLanguageStore();
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    initTheme();

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (useDomainTrackThemeStore.getState().theme === "system") {
        initTheme();
      }
    };
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [initTheme]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    return (
      <div
        style={{
          width: "38px",
          height: "38px",
          borderRadius: "12px",
          background: "var(--dt-pill-bg, rgba(255, 255, 255, 0.08))",
          border: "1px solid var(--dt-pill-border, rgba(255, 255, 255, 0.15))",
        }}
      />
    );
  }

  const isTr = language === "tr";

  const isLight = resolvedTheme === "light";
  const activeColor = isLight ? "#7c3aed" : "#c084fc";

  const themeOptions: { value: DomainTrackTheme; label: string; icon: typeof Sun }[] = [
    { value: "light", label: isTr ? "Açık (Light)" : "Light", icon: Sun },
    { value: "dark", label: isTr ? "Koyu (Dark)" : "Dark", icon: Moon },
    { value: "system", label: isTr ? "Sistem (Auto)" : "System", icon: Monitor },
  ];

  const currentIcon = () => {
    if (theme === "light") return <Sun size={17} color="#f59e0b" />;
    if (theme === "dark") return <Moon size={17} color="#38bdf8" />;
    return <Monitor size={17} color={resolvedTheme === "dark" ? "#38bdf8" : "#7c3aed"} />;
  };

  return (
    <div ref={dropdownRef} style={{ position: "relative" }}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "38px",
          height: "38px",
          borderRadius: "12px",
          background: "var(--dt-pill-bg, rgba(255, 255, 255, 0.08))",
          border: "1px solid var(--dt-pill-border, rgba(255, 255, 255, 0.15))",
          color: "var(--dt-text-primary, #ffffff)",
          cursor: "pointer",
          transition: "all 0.25s ease",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
        aria-label="Toggle Theme"
        title={isTr ? "Tema Değiştir (Açık / Koyu / Sistem)" : "Toggle Theme (Light / Dark / System)"}
      >
        {currentIcon()}
      </button>

      {dropdownOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            width: "165px",
            background: "var(--dt-card-bg, #0D1C29)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--dt-card-border, rgba(255, 255, 255, 0.15))",
            borderRadius: "14px",
            padding: "6px",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.35)",
            zIndex: 2000,
          }}
        >
          {themeOptions.map((opt) => {
            const Icon = opt.icon;
            const isSelected = theme === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => {
                  setTheme(opt.value);
                  setDropdownOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: isSelected ? 700 : 500,
                  backgroundColor: isSelected
                    ? (isLight ? "rgba(124, 58, 237, 0.1)" : "rgba(168, 85, 247, 0.15)")
                    : "transparent",
                  color: isSelected
                    ? activeColor
                    : "var(--dt-text-primary, #ffffff)",
                  transition: "all 0.15s ease",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor =
                      "var(--dt-pill-bg, rgba(255, 255, 255, 0.08))";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Icon
                    size={15}
                    color={
                      opt.value === "light"
                        ? "#f59e0b"
                        : opt.value === "dark"
                        ? "#38bdf8"
                        : "#7c3aed"
                    }
                  />
                  <span>{opt.label}</span>
                </div>
                {isSelected && <Check size={14} color={activeColor} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

