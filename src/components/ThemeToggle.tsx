"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme, THEMES, ThemeType } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Sun, Moon, Check, ChevronDown } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, currentThemeMeta } = useTheme();
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isTr = language === "tr";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const getThemeLabel = (isDark: boolean) => {
    if (isTr) {
      return isDark ? "Koyu Mod" : "Açık Mod";
    }
    return isDark ? "Dark Mode" : "Light Mode";
  };

  const getThemeDescription = (tId: ThemeType) => {
    if (tId === "midnight-dark") {
      return isTr ? "Gece Obsidiyen" : "Midnight Obsidian";
    }
    return isTr ? "Ferah Gök Mavisi" : "Sky Breeze";
  };

  return (
    <div style={{ position: "relative" }} ref={dropdownRef}>
      {/* Combobox Trigger Button */}
      <button
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={isTr ? "Tema Seçimi" : "Theme Selection"}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "7px 12px",
          borderRadius: "12px",
          background: "var(--bg-glass)",
          border: `1px solid ${isOpen ? "var(--primary)" : "var(--border-subtle)"}`,
          color: "var(--text-main)",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: isOpen ? "0 0 0 2px var(--primary-glow)" : "var(--shadow-card)",
          transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
          userSelect: "none",
        }}
        onMouseEnter={(e) => {
          if (!isOpen) {
            e.currentTarget.style.borderColor = "var(--border-active)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.currentTarget.style.borderColor = "var(--border-subtle)";
            e.currentTarget.style.transform = "translateY(0)";
          }
        }}
      >
        <div
          style={{
            width: "22px",
            height: "22px",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: currentThemeMeta.isDark
              ? "rgba(165, 180, 252, 0.15)"
              : "rgba(2, 132, 199, 0.15)",
            color: currentThemeMeta.isDark ? "#A5B4FC" : "#0284C7",
            flexShrink: 0,
          }}
        >
          {currentThemeMeta.isDark ? <Moon size={13} /> : <Sun size={13} />}
        </div>

        <span style={{ fontSize: "13px", fontWeight: 600, whiteSpace: "nowrap" }}>
          {getThemeLabel(currentThemeMeta.isDark)}
        </span>

        <ChevronDown
          size={14}
          style={{
            color: "var(--text-secondary)",
            transition: "transform 0.2s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            marginLeft: "2px",
          }}
        />
      </button>

      {/* Combobox Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          aria-label={isTr ? "Mevcut Temalar" : "Available Themes"}
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            width: "210px",
            background: "var(--bg-card)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--border-active)",
            borderRadius: "16px",
            padding: "6px",
            boxShadow: "0 16px 36px -8px rgba(0, 0, 0, 0.35)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            animation: "fadeIn 0.15s ease-out",
          }}
        >
          <div
            style={{
              padding: "6px 10px 4px 10px",
              fontSize: "10.5px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
              borderBottom: "1px solid var(--border-subtle)",
              marginBottom: "2px",
            }}
          >
            {isTr ? "Tema Seçimi" : "Select Theme"}
          </div>

          {THEMES.map((t) => {
            const isSelected = t.id === theme;

            return (
              <button
                key={t.id}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 10px",
                  borderRadius: "10px",
                  background: isSelected ? "var(--badge-bg)" : "transparent",
                  border: isSelected ? "1px solid var(--border-active)" : "1px solid transparent",
                  color: isSelected ? "var(--primary)" : "var(--text-main)",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  textAlign: "left",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.background = "var(--bg-glass)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "7px",
                      background: `linear-gradient(135deg, ${t.primary}, ${t.secondary})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      flexShrink: 0,
                      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                    }}
                  >
                    {t.isDark ? <Moon size={13} /> : <Sun size={13} />}
                  </div>

                  <div>
                    <div style={{ fontSize: "12.5px", fontWeight: 700, lineHeight: 1.2 }}>
                      {getThemeLabel(t.isDark)}
                    </div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                      {getThemeDescription(t.id)}
                    </div>
                  </div>
                </div>

                {isSelected && (
                  <Check
                    size={14}
                    color="var(--primary)"
                    style={{ flexShrink: 0, marginLeft: "6px" }}
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
