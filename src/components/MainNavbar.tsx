"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Layers,
  Gamepad2,
  Compass,
  Target,
  Shield,
  Code,
  Menu,
  X,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { resolveI18n } from "@/i18n";

export function MainNavbar() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navStr = (key: string) => resolveI18n("navigation", key, language);

  const navItems = [
    {
      href: "/apps",
      label: navStr("apps"),
      icon: Layers,
      isActive: pathname.startsWith("/apps") || pathname.startsWith("/games") || pathname === "/#apps",
      badge: "NEW",
    },
    {
      href: "/about",
      label: navStr("about"),
      icon: Compass,
      isActive: pathname.startsWith("/about"),
    },
    {
      href: "/vision-mission",
      label: navStr("vision"),
      icon: Target,
      isActive: pathname.startsWith("/vision-mission"),
    },
    {
      href: "/privacy-policy",
      label: navStr("privacy"),
      icon: Shield,
      isActive: pathname.startsWith("/privacy-policy"),
    },
    {
      href: "/developer",
      label: navStr("developer"),
      icon: Code,
      isActive: pathname.startsWith("/developer"),
    },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        background: "var(--bg-glass)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border-subtle)",
        boxShadow: "0 4px 24px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        className="container"
        style={{
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            color: "inherit",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              boxShadow: "0 8px 20px -4px var(--primary-glow)",
            }}
          >
            <Layers size={22} />
          </div>
          <div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 850,
                letterSpacing: "-0.03em",
                color: "var(--text-main)",
                lineHeight: 1.15,
              }}
            >
              Wixtory <span style={{ color: "var(--primary)" }}>Apps</span>
            </div>
            <div
              style={{
                fontSize: "10.5px",
                color: "var(--text-muted)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Ecosystem Hub
            </div>
          </div>
        </Link>

        {/* Desktop Nav: Clean Essential Links */}
        <nav className="hub-desktop-nav" aria-label={navStr("menu_pages")}>
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const active = item.isActive;

            return (
              <Link
                key={idx}
                href={item.href}
                className="hub-nav-pill"
                style={{
                  background: active ? "var(--badge-bg)" : "transparent",
                  color: active ? "var(--primary)" : "var(--text-secondary)",
                  borderColor: active ? "var(--border-active)" : "transparent",
                  fontWeight: active ? 700 : 600,
                  position: "relative",
                }}
              >
                <Icon size={15} color={active ? "var(--primary)" : "var(--text-secondary)"} />
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    style={{
                      fontSize: "9px",
                      fontWeight: 800,
                      padding: "1px 5px",
                      borderRadius: "999px",
                      background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
                      color: "#fff",
                      letterSpacing: "0.04em",
                      marginLeft: "2px",
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Single Language Combobox + Single Theme Combobox + Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <LanguageToggle />
          <ThemeToggle />

          {/* Mobile Hamburger Toggle Button (Strictly hidden on desktop via CSS) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            className="hub-mobile-toggle"
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              border: "1px solid var(--border-subtle)",
              background: "var(--bg-card)",
              color: "var(--text-main)",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "72px",
            left: 0,
            width: "100%",
            height: "calc(100vh - 72px)",
            background: "var(--bg-primary)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            overflowY: "auto",
            padding: "24px 20px 48px 20px",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          {/* Quick Navigation Links */}
          <div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 800,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "12px",
                paddingLeft: "4px",
              }}
            >
              {navStr("menu_pages")}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {navItems.map((item, idx) => {
                const Icon = item.icon;
                const active = item.isActive;

                return (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 16px",
                      borderRadius: "14px",
                      background: active ? "var(--badge-bg)" : "var(--bg-glass)",
                      border: `1px solid ${active ? "var(--border-active)" : "var(--border-subtle)"}`,
                      color: active ? "var(--primary)" : "var(--text-main)",
                      fontSize: "15px",
                      fontWeight: active ? 700 : 600,
                      textDecoration: "none",
                      minHeight: "48px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <Icon size={18} color={active ? "var(--primary)" : "var(--text-secondary)"} />
                      <span>{item.label}</span>
                      {item.badge && (
                        <span
                          style={{
                            fontSize: "9px",
                            fontWeight: 800,
                            padding: "1px 6px",
                            borderRadius: "999px",
                            background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
                            color: "#fff",
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronRight size={16} color="var(--text-muted)" />
                  </Link>
                );
              })}

              <Link
                href="/cookie-policy"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-main)",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  minHeight: "48px",
                }}
              >
                <Shield size={18} color="var(--primary)" />
                <span>{navStr("cookie_policy")}</span>
              </Link>
            </div>
          </div>

          {/* Direct App & Game Portals */}
          <div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 800,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "12px",
                paddingLeft: "4px",
              }}
            >
              {navStr("mobile_apps")}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Link
                href="/domain-track"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-main)",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <span>Domain Track</span>
                <ChevronRight size={16} color="#8B5CF6" />
              </Link>

              <Link
                href="/astrovibe"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-main)",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <span>AstroVibe</span>
                <ChevronRight size={16} color="#8B5CF6" />
              </Link>

              <Link
                href="/excuse"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-main)",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <span>Excuse AI</span>
                <ChevronRight size={16} color="#10B981" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
