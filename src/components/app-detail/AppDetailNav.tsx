"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { DedicatedAppDetails, getLocalizedAppDetails } from "@/data/apps-detail-data";
import {
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Menu,
  X,
  ExternalLink,
  ChevronLeft,
} from "lucide-react";

interface AppDetailNavProps {
  app: DedicatedAppDetails;
}

export function AppDetailNav({ app }: AppDetailNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();
  const localizedApp = getLocalizedAppDetails(app.id, language);
  const isTr = language === "tr";
  const otherAppSlug = localizedApp.id === "astrovibe" ? "excuse" : "astrovibe";
  const otherAppName = localizedApp.id === "astrovibe" ? "Excuse" : "AstroVibe";

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        background: "var(--bg-glass)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border-subtle)",
        boxShadow: "0 4px 24px -2px rgba(0, 0, 0, 0.06)",
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
        {/* Left: Back to Portal & App Branding */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 12px",
              borderRadius: "10px",
              background: "var(--bg-glass)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-secondary)",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text-main)";
              e.currentTarget.style.borderColor = "var(--border-active)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.borderColor = "var(--border-subtle)";
            }}
          >
            <ChevronLeft size={16} />
            <span>Portal</span>
          </Link>

          <Link
            href={`/${localizedApp.slug}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "11px",
                background: `linear-gradient(135deg, ${localizedApp.primaryColor} 0%, ${localizedApp.secondaryColor} 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                boxShadow: `0 4px 14px ${localizedApp.glowColor}`,
              }}
            >
              <Sparkles size={18} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "var(--text-main)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>{localizedApp.name}</span>
                <span
                  style={{
                    fontSize: "10px",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    background: `${localizedApp.primaryColor}22`,
                    color: localizedApp.primaryColor,
                    border: `1px solid ${localizedApp.primaryColor}55`,
                    fontWeight: 700,
                  }}
                >
                  {localizedApp.version}
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Center: In-Page Section Anchor Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "22px",
          }}
          className="desktop-app-nav"
        >
          <a
            href="#about"
            style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-main)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            {isTr ? "Hakkında" : "About"}
          </a>
          <a
            href="#features"
            style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-main)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            Features
          </a>
          <a
            href="#key-features"
            style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-main)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            Key Features
          </a>
          <a
            href="#how-to-use"
            style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-main)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            How to Use
          </a>
          <a
            href="#why-choose"
            style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-main)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            Why Choose ?
          </a>
          <a
            href="#faq"
            style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-main)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            FAQ
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
            <span>{isTr ? "Gizlilik" : "Privacy"}</span>
          </Link>
        </nav>

        {/* Right: Switch to Other App + Language + Theme */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Direct Switch to Other App */}
          <Link
            href={`/${otherAppSlug}`}
            style={{
              display: "none",
              alignItems: "center",
              gap: "6px",
              padding: "7px 14px",
              borderRadius: "9999px",
              background: "var(--bg-glass)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-main)",
              fontSize: "12px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            id="other-app-link"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-active)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-subtle)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>{isTr ? `${otherAppName}'e Geç` : `Switch to ${otherAppName}`}</span>
            <ArrowRight size={13} />
          </Link>

          <LanguageToggle />
          <ThemeToggle />

          {/* Mobile hamburger */}
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
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            padding: "20px 24px",
            background: "var(--bg-card)",
            borderBottom: "1px solid var(--border-subtle)",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 700 }}>
              {isTr ? "DİĞER UYGULAMA:" : "OTHER APP:"}
            </span>
            <Link
              href={`/${otherAppSlug}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "13px",
                color: "var(--primary)",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span>{isTr ? `${otherAppName} Sayfası` : `${otherAppName} Page`}</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ height: "1px", background: "var(--border-subtle)" }} />

          <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "15px" }}>
            {isTr ? "Hakkında" : "About"}
          </a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "15px" }}>
            Features
          </a>
          <a href="#key-features" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "15px" }}>
            Key Features
          </a>
          <a href="#how-to-use" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "15px" }}>
            How to Use
          </a>
          <a href="#why-choose" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "15px" }}>
            Why Choose ?
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "15px" }}>
            FAQ
          </a>
          <Link
            href="/privacy-policy"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "15px", color: "var(--primary)", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px" }}
          >
            <ShieldCheck size={16} />
            <span>{isTr ? "Ortak Gizlilik Politikası" : "Unified Privacy Policy"}</span>
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-app-nav {
            display: flex !important;
          }
          #other-app-link {
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
