"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Check, ArrowLeft, Layers } from "lucide-react";
import { useDomainTrackLanguageStore } from "@/store/domain-track-language-store";
import { useDomainTrackThemeStore } from "@/store/domain-track-theme-store";
import { languages } from "@/data/domain-track-translations";
import { ThemeToggle } from "./ThemeToggle";

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const navItems = [
  { key: "nav_home", href: "/domain-track" },
  { key: "nav_screenshots", href: "/domain-track/screenshots" },
  { key: "nav_features", href: "/domain-track/features" },
  { key: "nav_why_us", href: "/domain-track/why-us" },
  { key: "nav_faq", href: "/domain-track/faq" },
  { key: "nav_contact", href: "/domain-track#contact" },
  { key: "nav_privacy", href: "/domain-track/privacy-policy" },
] as const;

export function Navbar() {
  const { language, setLanguage, t } = useDomainTrackLanguageStore();
  const { resolvedTheme } = useDomainTrackThemeStore();
  const isLight = resolvedTheme === "light";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLangOption = languages.find((l) => l.value === language) || languages[0];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: scrolled
          ? "var(--dt-nav-bg, rgba(15, 30, 43, 0.94))"
          : "var(--dt-nav-bg-top, rgba(15, 30, 43, 0.8))",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--dt-nav-border, rgba(255, 255, 255, 0.1))",
        boxShadow: scrolled ? "0 10px 30px -10px rgba(0, 0, 0, 0.25)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="dt-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "74px",
        }}
      >
        {/* Brand Logo & Wixtory Apps Back Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 12px",
              borderRadius: "8px",
              background: "var(--dt-pill-bg, rgba(255, 255, 255, 0.08))",
              border: "1px solid var(--dt-pill-border, rgba(255, 255, 255, 0.14))",
              color: "var(--dt-text-primary, rgba(255, 255, 255, 0.85))",
              fontSize: "12px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            title="Wixtory Apps Ana Sayfasına Dön"
          >
            <ArrowLeft size={14} />
            <span className="hidden-mobile">Wixtory Apps</span>
          </Link>

          <Link
            href="/domain-track"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
            title="Wixtory Domain Track"
          >
            <Image
              src={isLight ? "/domain-track/logo-dark.png" : "/domain-track/logo.png"}
              alt="Wixtory Domain Track Logo"
              width={40}
              height={40}
              style={{ height: "40px", width: "auto" }}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "8px",
          }}
          className="dt-desktop-nav"
        >
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/domain-track" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`dt-nav-link ${isActive ? "active" : ""}`}
                style={
                  isActive
                    ? {
                        color: isLight ? "#7c3aed" : "#c084fc",
                        background: isLight ? "rgba(124, 58, 237, 0.08)" : "rgba(192, 132, 252, 0.12)",
                        border: isLight ? "1px solid rgba(124, 58, 237, 0.25)" : "1px solid rgba(192, 132, 252, 0.25)",
                      }
                    : {}
                }
              >
                {t[item.key] || (item.key === "nav_contact" ? (language === "tr" ? "İletişim" : "Contact") : item.key)}
              </Link>
            );
          })}
        </div>

        {/* Right side: YouTube + Theme Toggle + Language Selector + Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Theme Switcher Toggle (Light, Dark, System) */}
          <ThemeToggle />

          {/* YouTube Channel Button */}
          <a
            href="https://www.youtube.com/@Wixtoryy"
            target="_blank"
            rel="noopener noreferrer"
            title="Official YouTube Channel @Wixtoryy"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "38px",
              height: "38px",
              borderRadius: "12px",
              background: "rgba(239, 68, 68, 0.12)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              color: "#ef4444",
              textDecoration: "none",
              transition: "all 0.25s ease",
              boxShadow: "0 2px 8px rgba(239, 68, 68, 0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.background = "rgba(239, 68, 68, 0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = "rgba(239, 68, 68, 0.12)";
            }}
          >
            <YoutubeIcon size={18} />
          </a>

          {/* Custom Language Dropdown */}
          <div ref={dropdownRef} style={{ position: "relative" }}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 14px",
                borderRadius: "12px",
                background: "var(--dt-pill-bg, rgba(255, 255, 255, 0.08))",
                border: "1px solid var(--dt-pill-border, rgba(255, 255, 255, 0.15))",
                color: "var(--dt-text-primary, #ffffff)",
                fontSize: "13.5px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              aria-label="Select Language"
            >
              <span>{currentLangOption.flag}</span>
              <span>{currentLangOption.label}</span>
              <ChevronDown
                size={14}
                style={{
                  transform: langDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  opacity: 0.7,
                }}
              />
            </button>

            {/* Dropdown Menu */}
            {langDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  width: "190px",
                  maxHeight: "340px",
                  overflowY: "auto",
                  backgroundColor: "var(--dt-card-bg, #0D1C29)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid var(--dt-card-border, rgba(255, 255, 255, 0.15))",
                  borderRadius: "14px",
                  padding: "6px",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.35)",
                  zIndex: 2000,
                }}
              >
                {languages.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setLanguage(opt.value);
                      setLangDropdownOpen(false);
                    }}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor:
                        language === opt.value
                          ? "rgba(168, 85, 247, 0.18)"
                          : "transparent",
                      color:
                        language === opt.value
                          ? "#c084fc"
                          : "var(--dt-text-primary, #ffffff)",
                      fontSize: "13px",
                      fontWeight: language === opt.value ? 700 : 500,
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) => {
                      if (language !== opt.value) {
                        e.currentTarget.style.backgroundColor =
                          "var(--dt-pill-bg, rgba(255, 255, 255, 0.08))";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (language !== opt.value) {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>{opt.flag}</span>
                      <span>{opt.label}</span>
                    </div>
                    {language === opt.value && <Check size={14} color="#c084fc" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "var(--dt-pill-bg, rgba(255, 255, 255, 0.08))",
              border: "1px solid var(--dt-pill-border, rgba(255, 255, 255, 0.12))",
              color: "var(--dt-text-primary, #ffffff)",
              cursor: "pointer",
            }}
            className="dt-mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "var(--dt-bg-alt1, #0F1E2B)",
            borderBottom: "1px solid var(--dt-card-border, rgba(255, 255, 255, 0.12))",
            padding: "16px 24px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          className="dt-mobile-drawer"
        >
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/domain-track" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "12px 16px",
                  borderRadius: "10px",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  color: isActive ? "#c084fc" : "var(--dt-text-primary, rgba(255, 255, 255, 0.85))",
                  backgroundColor: isActive
                    ? "rgba(192, 132, 252, 0.12)"
                    : "var(--dt-pill-bg, rgba(255, 255, 255, 0.04))",
                  border: isActive
                    ? "1px solid rgba(192, 132, 252, 0.3)"
                    : "1px solid transparent",
                }}
              >
                {t[item.key] || (item.key === "nav_contact" ? (language === "tr" ? "İletişim" : "Contact") : item.key)}
              </Link>
            );
          })}

          <div style={{ display: "flex", gap: "10px", marginTop: "6px" }}>
            <a
              href="https://www.youtube.com/@Wixtoryy"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                color: "#ff4444",
                backgroundColor: "rgba(239, 68, 68, 0.08)",
                border: "1px solid rgba(239, 68, 68, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <YoutubeIcon size={18} />
              <span>YouTube</span>
            </a>

            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                color: "#22d3ee",
                backgroundColor: "rgba(34, 211, 238, 0.08)",
                border: "1px solid rgba(34, 211, 238, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <Layers size={16} />
              <span>Wixtory</span>
            </Link>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (min-width: 860px) {
          .dt-desktop-nav {
            display: flex !important;
          }
          .dt-mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 859px) {
          .dt-desktop-nav {
            display: none !important;
          }
          .dt-mobile-toggle {
            display: flex !important;
          }
          .hidden-mobile {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
