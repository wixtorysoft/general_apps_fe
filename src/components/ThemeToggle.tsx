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

  const themeI18n: Record<string, Record<string, string>> = {
    select: {
      tr: "Tema Seçimi", en: "Theme Selection", it: "Selezione Tema", pt: "Seleção de Tema", es: "Selección de Tema",
      fr: "Sélection du Thème", de: "Themenauswahl", ru: "Выбор Темы", ja: "テーマ選択", zh: "选择主题", ar: "اختيار السمة"
    },
    available: {
      tr: "Mevcut Temalar", en: "Available Themes", it: "Temi Disponibili", pt: "Temas Disponíveis", es: "Temas Disponibles",
      fr: "Thèmes Disponibles", de: "Verfügbare Themen", ru: "Доступные Темы", ja: "利用可能なテーマ", zh: "可用主题", ar: "السمات المتاحة"
    },
    dark: {
      tr: "Koyu Mod", en: "Dark Mode", it: "Modalità Scura", pt: "Modo Escuro", es: "Modo Oscuro",
      fr: "Mode Sombre", de: "Dunkelmodus", ru: "Темная Тема", ja: "ダークモード", zh: "深色模式", ar: "الوضع الداكن"
    },
    light: {
      tr: "Açık Mod", en: "Light Mode", it: "Modalità Chiara", pt: "Modo Claro", es: "Modo Claro",
      fr: "Mode Clair", de: "Hellmodus", ru: "Светлая Тема", ja: "ライトモード", zh: "浅色模式", ar: "الوضع الفاتح"
    },
    midnight: {
      tr: "Gece Obsidiyen", en: "Midnight Obsidian", it: "Ossidiana di Mezzanotte", pt: "Obsidiana da Meia-Noite", es: "Obsidiana de Medianoche",
      fr: "Obsidienne de Minuit", de: "Mitternachts-Obsidian", ru: "Полуночный Обсидиан", ja: "ミッドナイト・オブシディアン", zh: "午夜曜石", ar: "سبج منتصف الليل"
    },
    sky: {
      tr: "Ferah Gök Mavisi", en: "Sky Breeze", it: "Brezza Celeste", pt: "Brisa Celeste", es: "Brisa Celestial",
      fr: "Brise Céleste", de: "Himmelsbrise", ru: "Небесный Бриз", ja: "スカイ・ブリーズ", zh: "天际微风", ar: "نسيم السماء"
    }
  };

  const str = (key: string) => themeI18n[key]?.[language] || themeI18n[key]?.en || "";

  const getThemeLabel = (isDark: boolean) => {
    return isDark ? str("dark") : str("light");
  };

  const getThemeDescription = (tId: ThemeType) => {
    return tId === "midnight-dark" ? str("midnight") : str("sky");
  };

  return (
    <div style={{ position: "relative" }} ref={dropdownRef}>
      {/* Combobox Trigger Button */}
      <button
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={str("select")}
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
          aria-label={str("available")}
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
            {str("select")}
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
