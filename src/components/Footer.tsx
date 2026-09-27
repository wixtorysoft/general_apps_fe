"use client";

import React from "react";
import Link from "next/link";
import { AppModel } from "@/data/apps-data";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, ShieldCheck, Heart, Mail, Code, Cookie, Scale } from "lucide-react";

interface FooterProps {
  apps: AppModel[];
  onSelectApp: (app: AppModel) => void;
}

export function Footer({ apps, onSelectApp }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--bg-secondary)",
        padding: "60px 0 36px 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                }}
              >
                <Sparkles size={18} />
              </div>
              <span style={{ fontSize: "20px", fontWeight: 800, color: "var(--text-main)" }}>
                WIXTORY APPS
              </span>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-secondary)",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}
            >
              {t("footer_desc")}
            </p>
            <div style={{ fontSize: "13px", color: "var(--text-muted)" }}>
              {t("footer_stack")}
            </div>
          </div>

          {/* Col 2: Uygulamalarımız */}
          <div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--text-main)",
                marginBottom: "16px",
              }}
            >
              {t("footer_apps")}
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {apps.map((app) => (
                <li key={app.id}>
                  <button
                    onClick={() => {
                      onSelectApp(app);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = app.primaryColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: app.primaryColor,
                      }}
                    />
                    <span>{app.name}</span>
                    <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>— {app.badge}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Yasal ve Gizlilik */}
          <div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--text-main)",
                marginBottom: "16px",
              }}
            >
              {t("footer_legal")}
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link
                  href="/privacy-policy"
                  style={{
                    fontSize: "14px",
                    color: "var(--primary)",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <ShieldCheck size={16} />
                  <span>{t("privacy_nav")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Cookie size={16} />
                  <span>Çerez Politikası (Cookie Policy)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/kvkk"
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Scale size={16} />
                  <span>KVKK Aydınlatma Metni</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/developer"
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Code size={16} />
                  <span>Developer (Hacı Celal Aygar)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: İletişim & Destek */}
          <div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--text-main)",
                marginBottom: "16px",
              }}
            >
              {t("footer_contact")}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
              <a
                href="mailto:support@wixtory.com"
                style={{ color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Mail size={16} />
                <span>support@wixtory.com</span>
              </a>
              <a
                href="mailto:privacy@wixtory.com"
                style={{ color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "8px" }}
              >
                <ShieldCheck size={16} />
                <span>privacy@wixtory.com</span>
              </a>
              <div style={{ color: "var(--text-muted)", fontSize: "12px", marginTop: "6px" }}>
                İstanbul / Türkiye
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "13px",
            color: "var(--text-muted)",
          }}
        >
          <div>
            © 2026 Wixtory Software & Digital Tech. {t("footer_all_rights")}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span>Wixtory Ecosystem</span>
            <Heart size={14} color="#EF4444" fill="#EF4444" />
            <span>AstroVibe & Excuse</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
