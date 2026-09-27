"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowLeft,
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  Code,
  Copy,
  Check,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Layers,
  Terminal,
} from "lucide-react";

export default function DeveloperPage() {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const isTr = language === "tr";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("wixtorysoft@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Sticky Top Navbar */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 900,
          background: "var(--bg-glass)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "14px 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--text-main)",
                textDecoration: "none",
              }}
            >
              <ArrowLeft size={16} />
              <span>{t("back_to_home")}</span>
            </Link>

            <Link
              href="/privacy-policy"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--text-secondary)",
                textDecoration: "none",
                padding: "4px 12px",
                borderRadius: "9999px",
                background: "var(--bg-glass)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <ShieldCheck size={14} />
              <span>{isTr ? "Gizlilik Politikası" : "Privacy Policy"}</span>
            </Link>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main style={{ flex: 1, padding: "50px 0 80px 0" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          {/* Header Badge */}
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <span
              className="pill-badge"
              style={{
                background: "var(--badge-bg)",
                borderColor: "var(--border-active)",
                color: "var(--primary)",
                marginBottom: "14px",
              }}
            >
              <Code size={14} />
              <span>{isTr ? "Geliştirici Profili" : "Developer Profile"}</span>
            </span>

            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 46px)",
                fontWeight: 850,
                letterSpacing: "-0.03em",
                marginBottom: "12px",
                color: "var(--text-main)",
              }}
            >
              Hacı Celal Aygar
            </h1>

            <p
              style={{
                fontSize: "17px",
                color: "var(--primary)",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              {isTr ? "Mobil Uygulama Mimarı & Wixtory Kurucusu" : "Mobile Software Architect & Founder at Wixtory"}
            </p>
          </div>

          {/* Main Profile & Contact Card */}
          <div
            className="glass-card"
            style={{
              padding: "clamp(28px, 5vw, 44px)",
              borderRadius: "28px",
              border: "1.5px solid var(--border-active)",
              background: "var(--bg-card)",
              boxShadow: "var(--shadow-card)",
              marginBottom: "36px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Ambient accent background blur */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "250px",
                height: "250px",
                background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
                opacity: 0.12,
                filter: "blur(50px)",
                pointerEvents: "none",
              }}
            />

            {/* Profile Info Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "32px",
                borderBottom: "1px solid var(--border-subtle)",
                paddingBottom: "24px",
                flexWrap: "wrap",
              }}
            >
              {/* Avatar Initial Ring */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "22px",
                  background: "linear-gradient(135deg, var(--primary) 0%, #38bdf8 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontSize: "26px",
                  fontWeight: 850,
                  boxShadow: "0 10px 24px -4px var(--shadow-glow)",
                  flexShrink: 0,
                }}
              >
                HCA
              </div>

              <div>
                <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--text-main)", marginBottom: "4px" }}>
                  Hacı Celal Aygar
                </h2>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: "12.5px",
                      padding: "3px 10px",
                      borderRadius: "9999px",
                      backgroundColor: "var(--badge-bg)",
                      color: "var(--primary)",
                      border: "1px solid var(--border-active)",
                      fontWeight: 600,
                    }}
                  >
                    Senior Software Engineer
                  </span>
                  <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>•</span>
                  <span style={{ fontSize: "13px", color: "var(--text-secondary)", fontWeight: 500 }}>
                    Wixtory Mobile Eco
                  </span>
                </div>
              </div>
            </div>

            {/* Structured Developer Information Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "20px",
                marginBottom: "36px",
              }}
            >
              {/* Email Card */}
              <div
                style={{
                  padding: "18px 20px",
                  borderRadius: "18px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: copied ? "#10B981" : "var(--text-muted)",
                      cursor: "pointer",
                      padding: "2px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "11px",
                      fontWeight: 600,
                    }}
                    title="Copy Email"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copied ? (isTr ? "Kopyalandı" : "Copied") : (isTr ? "Kopyala" : "Copy")}</span>
                  </button>
                </div>
                <a
                  href="mailto:wixtorysoft@gmail.com"
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "var(--text-main)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Mail size={16} color="var(--primary)" />
                  <span>wixtorysoft@gmail.com</span>
                </a>
              </div>

              {/* Location Card */}
              <div
                style={{
                  padding: "18px 20px",
                  borderRadius: "18px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {isTr ? "Konum" : "Location"}
                </span>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "var(--text-main)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <MapPin size={16} color="var(--primary)" />
                  <span>Ankara, Yenimahalle, Turkey</span>
                </div>
              </div>

              {/* Website Domain Card */}
              <div
                style={{
                  padding: "18px 20px",
                  borderRadius: "18px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {isTr ? "Resmi Web Sitesi" : "Official Website"}
                </span>
                <a
                  href="https://www.wixtory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "var(--primary)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Globe size={16} />
                  <span>www.wixtory.com</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* Contact via Website Action Card */}
              <div
                style={{
                  padding: "18px 20px",
                  borderRadius: "18px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-active)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <a
                  href="https://www.wixtory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    textDecoration: "none",
                    padding: "10px 18px",
                    fontSize: "14px",
                    fontWeight: 700,
                    borderRadius: "12px",
                  }}
                >
                  <ExternalLink size={16} />
                  <span>Contact via Website</span>
                </a>
              </div>
            </div>

            {/* Development Philosophy / Bio */}
            <div
              style={{
                padding: "24px",
                borderRadius: "20px",
                background: "var(--badge-bg)",
                border: "1px solid var(--border-subtle)",
                marginBottom: "32px",
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: 750, color: "var(--text-main)", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                <Terminal size={17} color="var(--primary)" />
                <span>{isTr ? "Mühendislik Vizyonu" : "Engineering Vision"}</span>
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.65" }}>
                {isTr
                  ? "Wixtory ekosisteminde AstroVibe ve Excuse gibi yüksek performanslı, estetik ve kullanıcı gizliliğine tam saygılı mobil ürünler geliştirilmektedir. Modern mimariler, çevrimdışı öncelikli veritabanları ve akıcı mikro-etkileşimler üzerine odaklanılmaktadır."
                  : "Architecting privacy-first, fluid mobile experiences within the Wixtory ecosystem including AstroVibe and Excuse App. Focused on offline-first architectures, high-performance UI engines, and cross-platform native precision."}
              </p>
            </div>

            {/* Developed Applications Showcase */}
            <div>
              <h3 style={{ fontSize: "17px", fontWeight: 800, color: "var(--text-main)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <Layers size={18} color="var(--primary)" />
                <span>{isTr ? "Geliştirilen Uygulamalar" : "Developed Applications"}</span>
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
                {/* AstroVibe Link */}
                <Link
                  href="/astrovibe"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "16px",
                    borderRadius: "16px",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#ec4899";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "18px",
                      flexShrink: 0,
                    }}
                  >
                    ✨
                  </div>
                  <div>
                    <h4 style={{ fontSize: "15px", fontWeight: 750, color: "var(--text-main)", marginBottom: "2px" }}>
                      AstroVibe
                    </h4>
                    <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
                      {isTr ? "Kozmik Moda & Tırnak Sanatı" : "Cosmic Fashion & Nail Studio"}
                    </span>
                  </div>
                </Link>

                {/* Excuse Link */}
                <Link
                  href="/excuse"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "16px",
                    borderRadius: "16px",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#00d2ff";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #00d2ff, #3a7bd5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "18px",
                      flexShrink: 0,
                    }}
                  >
                    🛡️
                  </div>
                  <div>
                    <h4 style={{ fontSize: "15px", fontWeight: 750, color: "var(--text-main)", marginBottom: "2px" }}>
                      Excuse
                    </h4>
                    <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
                      {isTr ? "Kriz Kurtarıcı Bahane Asistanı" : "Emergency Social Excuse Assistant"}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border-subtle)",
          padding: "24px 0",
          textAlign: "center",
          fontSize: "13px",
          color: "var(--text-muted)",
        }}
      >
        © 2026 Wixtory Software & Digital Tech. Hacı Celal Aygar. {t("footer_all_rights")}
      </footer>
    </div>
  );
}
