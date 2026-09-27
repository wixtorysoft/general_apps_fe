"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage, LANGUAGES, LanguageMeta } from "@/context/LanguageContext";
import { Globe, Check, ChevronDown } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage, currentLanguageMeta } = useLanguage();
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
        aria-label="Dil Seçimi"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 14px",
          borderRadius: "9999px",
          background: "var(--bg-glass)",
          border: "1px solid var(--border-subtle)",
          color: "var(--text-main)",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          backdropFilter: "blur(12px)",
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
        <span style={{ fontSize: "16px" }}>{currentLanguageMeta.flag}</span>
        <span style={{ textTransform: "uppercase" }}>{currentLanguageMeta.code}</span>
        <ChevronDown size={14} style={{ color: "var(--text-secondary)" }} />
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            right: currentLanguageMeta.dir === "rtl" ? "auto" : 0,
            left: currentLanguageMeta.dir === "rtl" ? 0 : "auto",
            width: "220px",
            maxHeight: "360px",
            overflowY: "auto",
            background: "var(--bg-card)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--border-active)",
            borderRadius: "18px",
            padding: "8px",
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <div
            style={{
              padding: "6px 10px",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Globe size={13} />
            <span>11 DİL DESTEĞİ</span>
          </div>

          {LANGUAGES.map((langItem) => {
            const isSelected = langItem.code === language;
            return (
              <button
                key={langItem.code}
                onClick={() => {
                  setLanguage(langItem.code);
                  setIsOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 12px",
                  borderRadius: "10px",
                  background: isSelected ? "var(--badge-bg)" : "transparent",
                  border: isSelected ? "1px solid var(--border-active)" : "1px solid transparent",
                  color: isSelected ? "var(--primary)" : "var(--text-main)",
                  fontSize: "13px",
                  fontWeight: isSelected ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) e.currentTarget.style.background = "var(--bg-glass)";
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) e.currentTarget.style.background = "transparent";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "16px" }}>{langItem.flag}</span>
                  <div>
                    <div style={{ lineHeight: 1.2 }}>{langItem.nativeName}</div>
                    <div style={{ fontSize: "10px", color: "var(--text-muted)" }}>{langItem.name}</div>
                  </div>
                </div>
                {isSelected && <Check size={14} style={{ color: "var(--primary)" }} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
