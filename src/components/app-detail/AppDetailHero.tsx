"use client";

import React from "react";
import { DedicatedAppDetails, getLocalizedAppDetails } from "@/data/apps-detail-data";
import { useLanguage } from "@/context/LanguageContext";
import {
  Download,
  Smartphone,
  Star,
  ShieldCheck,
  Sparkles,
  ArrowDown,
  Layers,
} from "lucide-react";
import { StoreDownloadButtons } from "@/components/StoreDownloadButtons";

interface AppDetailHeroProps {
  app: DedicatedAppDetails;
}

export function AppDetailHero({ app }: AppDetailHeroProps) {
  const { t, language } = useLanguage();
  const localizedApp = getLocalizedAppDetails(app.id, language);
  const isAstro = localizedApp.id === "astrovibe";
  const isTr = language === "tr";

  return (
    <section
      style={{
        padding: "70px 0 80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "50px",
            alignItems: "center",
          }}
          className="app-hero-grid"
        >
          {/* Left Column: Text, Badges, CTAs */}
          <div>
            {/* Top Badges */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px", alignItems: "center" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "7px 18px",
                  borderRadius: "9999px",
                  border: `1px solid ${localizedApp.primaryColor}40`,
                  background: `${localizedApp.primaryColor}15`,
                  backdropFilter: "blur(12px)",
                  boxShadow: `0 0 18px ${localizedApp.glowColor}`,
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: localizedApp.primaryColor,
                    boxShadow: `0 0 8px ${localizedApp.primaryColor}`,
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontSize: "13.5px",
                    fontWeight: 800,
                    letterSpacing: "0.02em",
                    background: `linear-gradient(135deg, ${localizedApp.primaryColor} 0%, ${localizedApp.secondaryColor} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Wixtory: {localizedApp.name}
                </span>
              </div>

              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  background: "rgba(245, 158, 11, 0.15)",
                  border: "1px solid rgba(245, 158, 11, 0.4)",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#F59E0B",
                  boxShadow: "0 0 16px rgba(245, 158, 11, 0.25)",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "#F59E0B",
                    boxShadow: "0 0 8px #F59E0B",
                  }}
                />
                <span>{t("coming_soon_badge")}</span>
              </span>

              <span
                className="pill-badge"
                style={{
                  color: localizedApp.primaryColor,
                  borderColor: `${localizedApp.primaryColor}30`,
                  background: `${localizedApp.primaryColor}10`,
                }}
              >
                <Sparkles size={13} />
                <span>{localizedApp.heroBadge}</span>
              </span>

              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                }}
              >
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
                <strong style={{ color: "var(--text-main)" }}>{localizedApp.rating}</strong> ({localizedApp.reviewsCount} {t("reviews")})
              </span>

              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                }}
              >
                <Download size={13} style={{ color: localizedApp.primaryColor }} />
                <strong style={{ color: "var(--text-main)" }}>{localizedApp.downloads}</strong>
              </span>
            </div>

            {/* Giant Title */}
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 58px)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                lineHeight: "1.1",
                marginBottom: "20px",
              }}
            >
              <span>{localizedApp.name} </span>
              <span
                style={{
                  background: `linear-gradient(135deg, ${localizedApp.primaryColor} 0%, ${localizedApp.secondaryColor} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {localizedApp.heroTagline}
              </span>
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 19px)",
                color: "var(--text-secondary)",
                lineHeight: "1.65",
                maxWidth: "620px",
                marginBottom: "36px",
              }}
            >
              {localizedApp.heroSubheadline}
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "14px",
                marginBottom: "36px",
              }}
            >
              <StoreDownloadButtons
                layout="horizontal"
                isComingSoon={true}
                comingSoonText={t("coming_soon_stores")}
              />

              <a
                href="#key-features"
                className="btn-secondary"
                style={{
                  padding: "13px 22px",
                  borderRadius: "16px",
                  color: localizedApp.primaryColor,
                  border: `1px solid ${localizedApp.primaryColor}66`,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                <span>{t("features") || "Key Features"}</span>
                <ArrowDown size={16} />
              </a>
            </div>

            {/* Trust Micro-bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                paddingTop: "20px",
                borderTop: "1px solid var(--border-subtle)",
                fontSize: "13px",
                color: "var(--text-secondary)",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <ShieldCheck size={16} style={{ color: "#10B981" }} />
                <span>{t("privacy_guarantee")}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Sparkles size={16} style={{ color: localizedApp.primaryColor }} />
                <span>{t("offline_support")}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Phone Mockup Container */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Ambient Background Glow */}
            <div
              className="animate-pulse-glow"
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${localizedApp.glowColor} 0%, transparent 70%)`,
                filter: "blur(50px)",
                zIndex: 0,
              }}
            />

            {/* Mockup Frame */}
            <div
              className="animate-float"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: "370px",
                borderRadius: "46px",
                padding: "12px",
                background: "var(--bg-glass)",
                boxShadow: "var(--shadow-card)",
                border: "2px solid var(--border-subtle)",
              }}
            >
              <div
                style={{
                  background: isAstro ? "#0B0718" : "#040B14",
                  borderRadius: "38px",
                  overflow: "hidden",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "580px",
                }}
              >
                {/* Dynamic Island */}
                <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 8px 0" }}>
                  <div
                    style={{
                      width: "110px",
                      height: "22px",
                      background: "#000000",
                      borderRadius: "14px",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  />
                </div>

                {/* Mockup App Screen Content */}
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
                  {/* Top Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontSize: "11px", color: localizedApp.primaryColor, fontWeight: 700 }}>
                        {isAstro
                          ? isTr ? "AURA GÖSTERGESİ" : "AURA INDICATOR"
                          : isTr ? "KURTARICI MOD" : "RESCUE MODE"}
                      </div>
                      <div style={{ fontSize: "19px", fontWeight: 800, color: "#ffffff" }}>
                        {isAstro
                          ? isTr ? "Koç Burcu · Ateş" : "Aries · Fire Element"
                          : isTr ? "İş & Kurumsal" : "Corporate & Work"}
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "5px 12px",
                        borderRadius: "10px",
                        background: localizedApp.primaryColor,
                        color: "#ffffff",
                        fontSize: "11px",
                        fontWeight: 700,
                      }}
                    >
                      {isAstro
                        ? "Aura 98%"
                        : isTr ? "1.2K+ Bahane" : "1.2K+ Excuses"}
                    </div>
                  </div>

                  {/* Main Spotlight Card inside phone */}
                  <div
                    style={{
                      borderRadius: "24px",
                      padding: "22px",
                      background: isAstro
                        ? "linear-gradient(145deg, #1C1236 0%, #351A5C 100%)"
                        : "linear-gradient(145deg, #071C2E 0%, #0E3D5C 100%)",
                      border: `1px solid ${localizedApp.primaryColor}`,
                      boxShadow: `0 14px 28px -6px ${localizedApp.glowColor}`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "11px",
                        textTransform: "uppercase",
                        color: isAstro ? "#F59E0B" : "#10B981",
                        fontWeight: 700,
                        marginBottom: "6px",
                      }}
                    >
                      {isAstro
                        ? isTr ? "★ Günün Protez Tırnak Seçimi" : "★ Today's Nail Art Pick"
                        : isTr ? "⚡ Önerilen Kurtarıcı Bahane" : "⚡ Recommended Smart Excuse"}
                    </div>
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: 800,
                        color: "#ffffff",
                        marginBottom: "10px",
                        lineHeight: "1.3",
                      }}
                    >
                      {isAstro
                        ? isTr ? "Kozmik Altın French & Badem Form" : "Cosmic Gold French & Almond Shape"
                        : isTr
                          ? "“Acil müşteri veri tabanı senkronizasyon toplantısına girmem gerekti.”"
                          : "“Urgent client database sync call just came up; need to jump on immediately.”"}
                    </div>
                    <div style={{ fontSize: "12px", color: "#CBD5E1", lineHeight: "1.45" }}>
                      {isAstro
                        ? isTr
                          ? "Ateş elementinin tutkulu aurasını yansıtan yıldız tozu varak tasarımı."
                          : "Star-dust foil design radiating the passionate aura of the Fire element."
                        : isTr
                          ? "Yöneticiye ve ekip liderlerine karşı diplomatik ve sorgulanmaz mazeret."
                          : "A polished, unquestionable excuse tailored for managers and team leads."}
                    </div>

                    <div
                      style={{
                        marginTop: "18px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "11px",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          background: "rgba(0,0,0,0.4)",
                          color: "#ffffff",
                        }}
                      >
                        {isAstro
                          ? isTr ? "TikTok Dikey Akış" : "TikTok Vertical Feed"
                          : isTr ? "İnandırıcılık: %98" : "Credibility: 98%"}
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          color: localizedApp.primaryColor,
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        {isAstro ? (isTr ? "İncele" : "Explore") : "WhatsApp"} →
                      </span>
                    </div>
                  </div>

                  {/* Secondary Modules */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    <div
                      style={{
                        padding: "14px",
                        borderRadius: "16px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div style={{ fontSize: "10px", color: "var(--text-muted)" }}>
                        {isAstro ? (isTr ? "Mistik Tarot" : "Mystic Tarot") : (isTr ? "Koleksiyon" : "Collection")}
                      </div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginTop: "2px" }}>
                        {isAstro ? (isTr ? "Büyücü Kartı" : "The Magician") : (isTr ? "Acil Durum" : "Emergency")}
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "14px",
                        borderRadius: "16px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div style={{ fontSize: "10px", color: "var(--text-muted)" }}>
                        {isAstro ? (isTr ? "Stil Takı" : "Style Jewelry") : (isTr ? "Şans Ruleti" : "Lucky Spin")}
                      </div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginTop: "2px" }}>
                        {isAstro ? (isTr ? "Akik Kolye" : "Agate Pendant") : (isTr ? "Çarkı Çevir" : "Spin Wheel")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div style={{ padding: "12px 0", display: "flex", justifyContent: "center" }}>
                  <div
                    style={{
                      width: "120px",
                      height: "4px",
                      borderRadius: "2px",
                      background: "rgba(255,255,255,0.4)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .app-hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
