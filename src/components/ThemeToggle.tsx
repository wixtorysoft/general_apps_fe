"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme, THEMES } from "@/context/ThemeContext";
import { Sun, Moon, Check, Sparkles } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, currentThemeMeta, toggleNextTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={{ position: "relative" }} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Tema Seçimi"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 16px",
          borderRadius: "9999px",
          background: "var(--bg-glass)",
          border: "1.5px solid var(--border-subtle)",
          color: "var(--text-main)",
          fontSize: "13px",
          fontWeight: 700,
          cursor: "pointer",
          backdropFilter: "blur(12px)",
          boxShadow: "var(--shadow-card)",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--border-active)";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border-subtle)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {currentThemeMeta.isDark ? (
          <Moon size={15} color="#A5B4FC" />
        ) : (
          <Sun size={15} color="#0284C7" />
        )}
        <span>{currentThemeMeta.name}</span>
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            right: 0,
            width: "230px",
            background: "var(--bg-card)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1.5px solid var(--border-active)",
            borderRadius: "18px",
            padding: "8px",
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.25)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <div
            style={{
              padding: "6px 12px",
              fontSize: "11px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
              borderBottom: "1px solid var(--border-subtle)",
              marginBottom: "4px",
            }}
          >
            TEMA SEÇENEKLERİ
          </div>

          {THEMES.map((t) => {
            const isSelected = t.id === theme;

            return (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 12px",
                  borderRadius: "12px",
                  background: isSelected ? "var(--badge-bg)" : "transparent",
                  border: isSelected ? "1px solid var(--border-active)" : "1px solid transparent",
                  color: isSelected ? "var(--primary)" : "var(--text-main)",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  textAlign: "left",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "8px",
                      background: `linear-gradient(135deg, ${t.primary}, ${t.secondary})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    {t.isDark ? <Moon size={14} /> : <Sun size={14} />}
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700 }}>{t.name}</div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>{t.badge}</div>
                  </div>
                </div>

                {isSelected && <Check size={16} color="var(--primary)" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
