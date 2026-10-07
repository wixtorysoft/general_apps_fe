"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { AppModel } from "@/data/apps-data";
import { ThemeLogo } from "./ThemeLogo";
import { Sparkles, Menu, X, ShieldCheck, ArrowUpRight, Code } from "lucide-react";

interface HeaderProps {
  apps: AppModel[];
  selectedApp: AppModel;
  onSelectApp: (app: AppModel) => void;
}

export function Header({ apps, selectedApp, onSelectApp }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 900,
        width: "100%",
        background: "var(--bg-glass)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "76px",
        }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <ThemeLogo height={36} />
        </Link>

        {/* Desktop App Switcher Pills in Navbar */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "6px",
            padding: "5px 6px",
            background: "var(--bg-card)",
            borderRadius: "9999px",
            border: "1px solid var(--border-subtle)",
          }}
          className="desktop-app-pills"
        >
          {apps.map((app) => {
            const isActive = app.id === selectedApp.id;
            return (
              <button
                key={app.id}
                onClick={() => onSelectApp(app)}
                style={{
                  padding: "7px 16px",
                  borderRadius: "9999px",
                  background: isActive ? "var(--primary)" : "transparent",
                  color: isActive ? "#ffffff" : "var(--text-secondary)",
                  fontSize: "13px",
                  fontWeight: isActive ? 700 : 500,
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "pointer",
                  boxShadow: isActive ? "0 4px 14px var(--primary-glow)" : "none",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: isActive ? "#ffffff" : app.primaryColor,
                  }}
                />
                {app.name}
              </button>
            );
          })}
        </div>

        {/* Navigation Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "24px",
          }}
          className="desktop-nav"
        >
          <a
            href="#why-use"
            style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-main)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            {t("why_choose")}
          </a>
          <a
            href="#features"
            style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-main)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            {t("features")}
          </a>
          <a
            href="#showcase"
            style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-main)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            {t("showcase")}
          </a>
          <Link
            href="/privacy-policy"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            <ShieldCheck size={14} />
            <span>{t("privacy_nav")}</span>
          </Link>
          <Link
            href="/developer"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            <Code size={14} />
            <span>Developer</span>
          </Link>
          <a
            href="#contact"
            style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-main)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            {t("contact_nav")}
          </a>
        </nav>

        {/* Right Action Cluster */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* 11 Languages Selector */}
          <LanguageToggle />

          {/* Multi-theme Selector */}
          <ThemeToggle />

          <a
            href="#store-downloads"
            className="btn-primary"
            style={{
              padding: "9px 18px",
              fontSize: "13px",
              display: "none",
            }}
            id="header-cta-btn"
          >
            <span>{selectedApp.name} {t("download_app")}</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "var(--bg-glass)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-main)",
            }}
            className="mobile-menu-btn"
            aria-label="Menü"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            padding: "20px 24px",
            background: "var(--bg-card)",
            borderBottom: "1px solid var(--border-subtle)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            {apps.map((app) => (
              <button
                key={app.id}
                onClick={() => {
                  onSelectApp(app);
                  setMobileMenuOpen(false);
                }}
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "10px",
                  background: app.id === selectedApp.id ? "var(--primary)" : "var(--bg-glass)",
                  color: app.id === selectedApp.id ? "#ffffff" : "var(--text-main)",
                  fontWeight: 600,
                  fontSize: "14px",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                {app.name}
              </button>
            ))}
          </div>

          <div
            style={{
              height: "1px",
              background: "var(--border-subtle)",
              margin: "6px 0",
            }}
          />

          <a
            href="#why-use"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "15px", color: "var(--text-main)", padding: "6px 0" }}
          >
            {t("why_choose")}
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "15px", color: "var(--text-main)", padding: "6px 0" }}
          >
            {t("features")}
          </a>
          <a
            href="#showcase"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "15px", color: "var(--text-main)", padding: "6px 0" }}
          >
            {t("showcase")}
          </a>
          <Link
            href="/privacy-policy"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: "15px",
              color: "var(--primary)",
              fontWeight: 600,
              padding: "6px 0",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <ShieldCheck size={16} />
            {t("privacy_nav")}
          </Link>
          <Link
            href="/developer"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: "15px",
              color: "var(--text-main)",
              fontWeight: 600,
              padding: "6px 0",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Code size={16} />
            Developer
          </Link>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "15px", color: "var(--text-main)", padding: "6px 0" }}
          >
            {t("contact_nav")}
          </a>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-app-pills {
            display: flex !important;
          }
          #header-cta-btn {
            display: inline-flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
