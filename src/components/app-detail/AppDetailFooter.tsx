"use client";

import React from "react";
import Link from "next/link";
import { DedicatedAppDetails, getLocalizedAppDetails } from "@/data/apps-detail-data";
import { useLanguage } from "@/context/LanguageContext";
import { Shield, Sparkles, Layers, ArrowUpRight, Mail, Heart, Cookie, Scale } from "lucide-react";

interface AppDetailFooterProps {
  app: DedicatedAppDetails;
}

export function AppDetailFooter({ app }: AppDetailFooterProps) {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const localizedApp = getLocalizedAppDetails(app.id, language);
  const isTr = language === "tr";

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--bg-glass)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        padding: "70px 0 36px 0",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px",
            marginBottom: "56px",
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: "320px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "12px",
                  background: `linear-gradient(135deg, ${localizedApp.primaryColor}, ${localizedApp.secondaryColor || "var(--secondary)"})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  boxShadow: `0 8px 20px -4px ${localizedApp.primaryColor}55`,
                }}
              >
                <Sparkles size={20} />
              </div>
              <span style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-main)" }}>
                {localizedApp.name}
              </span>
            </div>

            <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
              {localizedApp.heroTagline}
            </p>

            <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
              <span
                style={{
                  fontSize: "12px",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  background: "var(--badge-bg)",
                  color: localizedApp.primaryColor,
                  fontWeight: 700,
                  border: `1px solid ${localizedApp.primaryColor}44`,
                }}
              >
                {localizedApp.version}
              </span>
              <span
                style={{
                  fontSize: "12px",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  background: "var(--badge-bg)",
                  color: "var(--text-muted)",
                  fontWeight: 600,
                  border: "1px solid var(--border-subtle)",
                }}
              >
                Production Ready
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-main)",
                marginBottom: "20px",
              }}
            >
              {isTr ? "Bölümler" : "Sections"}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li>
                <a href="#about" style={{ color: "var(--text-secondary)", fontSize: "14px", textDecoration: "none" }}>
                  {isTr ? "Hakkında" : "About"}
                </a>
              </li>
              <li>
                <a href="#features" style={{ color: "var(--text-secondary)", fontSize: "14px", textDecoration: "none" }}>
                  Features
                </a>
              </li>
              <li>
                <a href="#key-features" style={{ color: "var(--text-secondary)", fontSize: "14px", textDecoration: "none" }}>
                  Key Features
                </a>
              </li>
              <li>
                <a href="#how-to-use" style={{ color: "var(--text-secondary)", fontSize: "14px", textDecoration: "none" }}>
                  How to Use
                </a>
              </li>
              <li>
                <a href="#why-choose" style={{ color: "var(--text-secondary)", fontSize: "14px", textDecoration: "none" }}>
                  Why Choose ?
                </a>
              </li>
              <li>
                <a href="#faq" style={{ color: "var(--text-secondary)", fontSize: "14px", textDecoration: "none" }}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Wixtory Ecosystem */}
          <div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-main)",
                marginBottom: "20px",
              }}
            >
              {isTr ? "Uygulama Portalı" : "Apps Portal"}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li>
                <Link
                  href="/"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "14px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Layers size={14} color="var(--primary)" />
                  <span>{isTr ? "Tüm Uygulamalar Portalı" : "All Apps Hub"}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/astrovibe"
                  style={{
                    color: localizedApp.id === "astrovibe" ? localizedApp.primaryColor : "var(--text-secondary)",
                    fontWeight: localizedApp.id === "astrovibe" ? 700 : 400,
                    fontSize: "14px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span>AstroVibe Landing</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
              <li>
                <Link
                  href="/excuse"
                  style={{
                    color: localizedApp.id === "excuse" ? localizedApp.primaryColor : "var(--text-secondary)",
                    fontWeight: localizedApp.id === "excuse" ? 700 : 400,
                    fontSize: "14px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span>Excuse AI Landing</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "14px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Shield size={14} color="var(--primary)" />
                  <span>{isTr ? "Ortak Gizlilik Sözleşmesi" : "Unified Privacy Policy"}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "14px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Cookie size={14} color="var(--primary)" />
                  <span>{isTr ? "Çerez Politikası" : "Cookie Policy"}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/kvkk"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "14px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Scale size={14} color="var(--primary)" />
                  <span>{isTr ? "KVKK Aydınlatma Metni" : "KVKK Disclosure"}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-main)",
                marginBottom: "20px",
              }}
            >
              {isTr ? "İletişim & Güvenlik" : "Contact & Security"}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href={`mailto:${localizedApp.contactEmail}`}
                style={{
                  color: "var(--primary)",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Mail size={15} />
                <span>{localizedApp.contactEmail}</span>
              </a>
              <div style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.5" }}>
                {isTr
                  ? "Wixtory Mobile Ecosystem tarafından tasarlanmış ve geliştirilmiştir."
                  : "Designed & engineered by Wixtory Mobile Ecosystem."}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: "28px",
            borderTop: "1px solid var(--border-subtle)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>
            © {currentYear} {localizedApp.name} — {isTr ? "Tüm Hakları Saklıdır. Wixtory General Apps." : "All Rights Reserved. Wixtory General Apps."}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link
              href="/privacy-policy"
              style={{ fontSize: "13px", color: "var(--text-secondary)", textDecoration: "none" }}
            >
              {isTr ? "Gizlilik & KVKK" : "Privacy & Compliance"}
            </Link>
            <span style={{ color: "var(--border-subtle)" }}>•</span>
            <Link
              href="/cookie-policy"
              style={{ fontSize: "13px", color: "var(--text-secondary)", textDecoration: "none" }}
            >
              {isTr ? "Çerez Politikası" : "Cookie Policy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
