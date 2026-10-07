"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Cookie,
  ShieldCheck,
  Check,
  ArrowRight,
  X,
  Sliders,
  Database,
  BarChart3,
  ChevronLeft,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { resolveI18n } from "@/i18n";

const STORAGE_KEY = "wixtory_cookie_consent";
const STORAGE_PREFS_KEY = "wixtory_cookie_preferences";
const STORAGE_DATE_KEY = "wixtory_cookie_consent_date";

export interface CookiePreferences {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  functional: true,
  analytics: false,
};

export function CookieConsentBanner() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);

  const cStr = (key: string) => resolveI18n("cookie", key, language);

  useEffect(() => {
    setMounted(true);
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      const savedPrefs = localStorage.getItem(STORAGE_PREFS_KEY);
      if (savedPrefs) {
        setPreferences(JSON.parse(savedPrefs));
      }
      if (!consent) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 700);
        return () => clearTimeout(timer);
      }
    } catch {
      // Storage restricted
    }
  }, []);

  // Listen for global reopen events (from footers or policy pages)
  useEffect(() => {
    const handleReopen = () => {
      try {
        const savedPrefs = localStorage.getItem(STORAGE_PREFS_KEY);
        if (savedPrefs) {
          setPreferences(JSON.parse(savedPrefs));
        }
      } catch {}
      setShowSettings(true);
      setIsVisible(true);
    };

    window.addEventListener("wixtory_open_cookie_consent", handleReopen);
    return () => {
      window.removeEventListener("wixtory_open_cookie_consent", handleReopen);
    };
  }, []);

  const saveAndClose = (choice: "accepted" | "essential" | "custom", prefs: CookiePreferences) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
      localStorage.setItem(STORAGE_PREFS_KEY, JSON.stringify(prefs));
      localStorage.setItem(STORAGE_DATE_KEY, new Date().toISOString());
      window.dispatchEvent(
        new CustomEvent("wixtory_cookie_consent_updated", {
          detail: { choice, preferences: prefs },
        })
      );
    } catch {}
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    const allOn: CookiePreferences = { essential: true, functional: true, analytics: true };
    setPreferences(allOn);
    saveAndClose("accepted", allOn);
  };

  const handleEssentialOnly = () => {
    const essentialOn: CookiePreferences = { essential: true, functional: false, analytics: false };
    setPreferences(essentialOn);
    saveAndClose("essential", essentialOn);
  };

  const handleSaveCustom = () => {
    saveAndClose("custom", preferences);
  };

  if (!mounted || !isVisible) {
    return null;
  }

  return (
    <aside
      id="wixtory-cookie-consent"
      aria-label={cStr("cookie_consent_title")}
      role="region"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 32px)",
        maxWidth: showSettings ? "820px" : "860px",
        zIndex: 9999,
        backgroundColor: "var(--cookie-bg, var(--bg-card))",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid var(--border-subtle)",
        boxShadow: "var(--cookie-shadow, 0 20px 48px -10px rgba(0,0,0,0.35))",
        borderRadius: "22px",
        padding: showSettings ? "24px 28px" : "20px 24px",
        color: "var(--text-main)",
        animation: "cookieSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        maxHeight: "calc(100vh - 40px)",
        overflowY: "auto",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <style jsx>{`
        @keyframes cookieSlideUp {
          from {
            opacity: 0;
            transform: translate(-50%, 28px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
      `}</style>

      {!showSettings ? (
        /* ================= COMPACT BANNER VIEW ================= */
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Header Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, rgba(245, 158, 11, 0.22) 0%, rgba(217, 119, 6, 0.15) 100%)",
                  border: "1px solid rgba(245, 158, 11, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f59e0b",
                  flexShrink: 0,
                }}
              >
                <Cookie size={20} />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <h3
                  style={{
                    fontSize: "15.5px",
                    fontWeight: 700,
                    color: "var(--text-main)",
                    margin: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {cStr("cookie_consent_title")}
                </h3>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: "999px",
                    background: "rgba(16, 185, 129, 0.14)",
                    color: "#10b981",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <ShieldCheck size={11} />
                  {cStr("cookie_consent_badge")}
                </span>
              </div>
            </div>

            <button
              onClick={handleEssentialOnly}
              aria-label="Dismiss"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
                padding: "6px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "color 0.2s, background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-main)";
                e.currentTarget.style.backgroundColor = "var(--cookie-btn-secondary-bg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Description */}
          <p
            style={{
              margin: 0,
              fontSize: "13.5px",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
            }}
          >
            {cStr("cookie_consent_desc")}
          </p>

          {/* Actions Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
              paddingTop: "4px",
            }}
          >
            <Link
              href="/cookie-policy"
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--primary)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <span>{cStr("cookie_consent_policy_link")}</span>
              <ArrowRight size={13} />
            </Link>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {/* Settings / Customize button */}
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                style={{
                  fontSize: "12.5px",
                  fontWeight: 600,
                  padding: "8px 14px",
                  borderRadius: "10px",
                  background: "var(--cookie-btn-secondary-bg)",
                  color: "var(--text-main)",
                  border: "1px solid var(--border-subtle)",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--cookie-btn-secondary-hover)";
                  e.currentTarget.style.borderColor = "var(--border-active)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--cookie-btn-secondary-bg)";
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                }}
              >
                <Sliders size={13} />
                <span>{cStr("cookie_manage_btn")}</span>
              </button>

              {/* Essential only button */}
              <button
                type="button"
                onClick={handleEssentialOnly}
                style={{
                  fontSize: "12.5px",
                  fontWeight: 600,
                  padding: "8px 14px",
                  borderRadius: "10px",
                  background: "var(--cookie-btn-secondary-bg)",
                  color: "var(--text-main)",
                  border: "1px solid var(--border-subtle)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--cookie-btn-secondary-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--cookie-btn-secondary-bg)";
                }}
              >
                {cStr("cookie_consent_essential")}
              </button>

              {/* Accept All button */}
              <button
                type="button"
                onClick={handleAcceptAll}
                style={{
                  fontSize: "12.5px",
                  fontWeight: 700,
                  padding: "8px 18px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                  color: "#ffffff",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px var(--primary-glow, rgba(14, 165, 233, 0.35))",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 18px var(--primary-glow, rgba(14, 165, 233, 0.45))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 14px var(--primary-glow, rgba(14, 165, 233, 0.35))";
                }}
              >
                <Check size={14} />
                <span>{cStr("cookie_consent_accept")}</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* ================= EXPANDED SETTINGS VIEW ================= */
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Settings Top Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              borderBottom: "1px solid var(--border-subtle)",
              paddingBottom: "14px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                style={{
                  background: "var(--cookie-btn-secondary-bg)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-main)",
                  cursor: "pointer",
                  padding: "6px 10px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "12px",
                  fontWeight: 600,
                  transition: "all 0.2s",
                }}
              >
                <ChevronLeft size={14} />
                <span>{cStr("cookie_back_btn")}</span>
              </button>

              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--text-main)",
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                {cStr("cookie_settings_title")}
              </h3>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              aria-label="Close"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
                padding: "6px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X size={18} />
            </button>
          </div>

          <p
            style={{
              margin: 0,
              fontSize: "13px",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
            }}
          >
            {cStr("cookie_settings_desc")}
          </p>

          {/* 3 Categories List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* 1. Essential Category (Locked Always Active) */}
            <div
              style={{
                padding: "16px 18px",
                borderRadius: "14px",
                background: "var(--cookie-inner-bg)",
                border: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "14px",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flex: 1 }}>
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "10px",
                    background: "rgba(16, 185, 129, 0.14)",
                    color: "#10b981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <ShieldCheck size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      flexWrap: "wrap",
                      marginBottom: "4px",
                    }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-main)" }}>
                      {cStr("cookie_cat_essential_title")}
                    </span>
                    <span
                      style={{
                        fontSize: "10.5px",
                        fontWeight: 700,
                        padding: "1px 7px",
                        borderRadius: "999px",
                        background: "rgba(16, 185, 129, 0.15)",
                        color: "#10b981",
                        border: "1px solid rgba(16, 185, 129, 0.3)",
                      }}
                    >
                      {cStr("cookie_cat_essential_badge")}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "12.5px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    {cStr("cookie_cat_essential_desc")}
                  </p>
                </div>
              </div>

              {/* Locked Active Toggle */}
              <div
                style={{
                  width: "44px",
                  height: "24px",
                  borderRadius: "12px",
                  background: "#10b981",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  padding: "2px",
                  opacity: 0.85,
                  cursor: "not-allowed",
                  flexShrink: 0,
                }}
                title={cStr("cookie_cat_essential_badge")}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                  }}
                />
              </div>
            </div>

            {/* 2. Functional Category (Toggleable) */}
            <div
              style={{
                padding: "16px 18px",
                borderRadius: "14px",
                background: "var(--cookie-inner-bg)",
                border: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "14px",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flex: 1 }}>
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "10px",
                    background: "rgba(2, 132, 199, 0.12)",
                    color: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Database size={17} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: "4px" }}>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-main)" }}>
                      {cStr("cookie_cat_functional_title")}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "12.5px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    {cStr("cookie_cat_functional_desc")}
                  </p>
                </div>
              </div>

              {/* Interactive Toggle */}
              <button
                type="button"
                role="switch"
                aria-checked={preferences.functional}
                onClick={() =>
                  setPreferences((p) => ({ ...p, functional: !p.functional }))
                }
                style={{
                  width: "44px",
                  height: "24px",
                  borderRadius: "12px",
                  background: preferences.functional
                    ? "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)"
                    : "rgba(100, 116, 139, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: preferences.functional ? "flex-end" : "flex-start",
                  padding: "2px",
                  cursor: "pointer",
                  border: "none",
                  flexShrink: 0,
                  transition: "background 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>
            </div>

            {/* 3. Anonymous Analytics Category (Toggleable) */}
            <div
              style={{
                padding: "16px 18px",
                borderRadius: "14px",
                background: "var(--cookie-inner-bg)",
                border: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "14px",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flex: 1 }}>
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "10px",
                    background: "rgba(99, 102, 241, 0.12)",
                    color: "var(--secondary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <BarChart3 size={17} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: "4px" }}>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-main)" }}>
                      {cStr("cookie_cat_analytics_title")}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "12.5px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    {cStr("cookie_cat_analytics_desc")}
                  </p>
                </div>
              </div>

              {/* Interactive Toggle */}
              <button
                type="button"
                role="switch"
                aria-checked={preferences.analytics}
                onClick={() =>
                  setPreferences((p) => ({ ...p, analytics: !p.analytics }))
                }
                style={{
                  width: "44px",
                  height: "24px",
                  borderRadius: "12px",
                  background: preferences.analytics
                    ? "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)"
                    : "rgba(100, 116, 139, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: preferences.analytics ? "flex-end" : "flex-start",
                  padding: "2px",
                  cursor: "pointer",
                  border: "none",
                  flexShrink: 0,
                  transition: "background 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>
            </div>
          </div>

          {/* Settings Bottom Actions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
              paddingTop: "6px",
              borderTop: "1px solid var(--border-subtle)",
            }}
          >
            <Link
              href="/cookie-policy"
              style={{
                fontSize: "12.5px",
                fontWeight: 600,
                color: "var(--primary)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span>{cStr("cookie_consent_policy_link")}</span>
              <ArrowRight size={13} />
            </Link>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={handleAcceptAll}
                style={{
                  fontSize: "12.5px",
                  fontWeight: 600,
                  padding: "8px 14px",
                  borderRadius: "10px",
                  background: "var(--cookie-btn-secondary-bg)",
                  color: "var(--text-main)",
                  border: "1px solid var(--border-subtle)",
                  cursor: "pointer",
                }}
              >
                {cStr("cookie_consent_accept")}
              </button>

              <button
                type="button"
                onClick={handleSaveCustom}
                style={{
                  fontSize: "12.5px",
                  fontWeight: 700,
                  padding: "8px 18px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                  color: "#ffffff",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px var(--primary-glow, rgba(14, 165, 233, 0.35))",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Check size={14} />
                <span>{cStr("cookie_save_btn")}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
