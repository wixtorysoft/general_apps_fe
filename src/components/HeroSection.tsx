"use client";

import React from "react";
import { AppModel } from "@/data/apps-data";
import { useLanguage } from "@/context/LanguageContext";
import {
  Download,
  Star,
  ShieldCheck,
  Smartphone,
  Sparkles,
  ArrowRight,
  Flame,
} from "lucide-react";

interface HeroSectionProps {
  app: AppModel;
}

export function HeroSection({ app }: HeroSectionProps) {
  const { t } = useLanguage();
  const isAstro = app.id === "astrovibe";

  return (
    <section
      style={{
        padding: "60px 0 70px 0",
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
          className="hero-grid"
        >
          {/* Left Column: Editorial Copy & CTAs */}
          <div>
            {/* Top Pill */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "18px" }}>
              <span
                className="pill-badge"
                style={{
                  color: app.primaryColor,
                  borderColor: app.primaryColor,
                  background: `rgba(${isAstro ? "139, 92, 246" : "6, 182, 212"}, 0.12)`,
                }}
              >
                <Flame size={14} />
                <span>{app.badge}</span>
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 12px",
                  borderRadius: "9999px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                }}
              >
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
                <strong style={{ color: "var(--text-main)" }}>{app.rating}</strong> ({app.reviewsCount} {t("reviews")})
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(34px, 5.5vw, 54px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: "1.12",
                marginBottom: "20px",
              }}
            >
              <span>{app.name} </span>
              <span
                style={{
                  background: `linear-gradient(135deg, ${app.primaryColor} 0%, ${app.secondaryColor} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {app.tagline}
              </span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 18px)",
                color: "var(--text-secondary)",
                lineHeight: "1.6",
                maxWidth: "600px",
                marginBottom: "32px",
              }}
            >
              {app.fullDesc}
            </p>

            {/* Call To Actions */}
            <div
              id="store-downloads"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                marginBottom: "36px",
              }}
            >
              <a
                href={app.storeLinks.appStore || "#"}
                className="btn-primary"
                style={{
                  background: `linear-gradient(135deg, ${app.primaryColor} 0%, ${app.secondaryColor} 120%)`,
                  boxShadow: `0 12px 28px -6px ${app.glowColor}`,
                }}
              >
                <Download size={18} />
                <span>{t("app_store_btn")}</span>
              </a>

              <a
                href={app.storeLinks.playStore || "#"}
                className="btn-secondary"
              >
                <Smartphone size={18} />
                <span>{t("google_play_btn")}</span>
              </a>

              <a
                href="#features"
                className="btn-secondary"
                style={{
                  color: app.primaryColor,
                  border: `1px solid ${app.primaryColor}`,
                }}
              >
                <span>{t("explore_features")}</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Guarantee / Privacy assurance micro-bar */}
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
                <Sparkles size={16} style={{ color: app.primaryColor }} />
                <span>{t("offline_support")}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Live Mockup Device Frame */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Ambient Background Glow Orb */}
            <div
              className="animate-pulse-glow"
              style={{
                position: "absolute",
                width: "360px",
                height: "360px",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${app.glowColor} 0%, transparent 70%)`,
                filter: "blur(40px)",
                zIndex: 0,
              }}
            />

            {/* 3D Phone Mockup Container */}
            <div
              className="animate-float"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: "360px",
                borderRadius: "44px",
                padding: "12px",
                background: "linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.03) 100%)",
                boxShadow: `0 30px 60px -15px rgba(0,0,0,0.8), 0 0 40px -10px ${app.glowColor}`,
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {/* Phone Inner Screen */}
              <div
                style={{
                  background: isAstro ? "#0B0818" : "#040B14",
                  borderRadius: "36px",
                  overflow: "hidden",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "560px",
                }}
              >
                {/* Phone Notch / Dynamic Island */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "12px 0 8px 0",
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "22px",
                      background: "#000000",
                      borderRadius: "14px",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  />
                </div>

                {/* In-App Mockup Content */}
                <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
                  {/* Mock App Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontSize: "11px", color: app.primaryColor, fontWeight: 700 }}>
                        {isAstro ? "KOZMİK REHBER" : "BAHANEMATİK"}
                      </div>
                      <div style={{ fontSize: "18px", fontWeight: 800, color: "#ffffff" }}>
                        {isAstro ? "Koç Burcu · Ateş" : "İş & Toplantı"}
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "5px 10px",
                        borderRadius: "10px",
                        background: app.primaryColor,
                        color: "#ffffff",
                        fontSize: "11px",
                        fontWeight: 700,
                      }}
                    >
                      {isAstro ? "Aura 96%" : "1.2K"}
                    </div>
                  </div>

                  {/* Main Spotlight Card inside phone */}
                  <div
                    style={{
                      borderRadius: "22px",
                      padding: "20px",
                      background: isAstro
                        ? "linear-gradient(145deg, #1C1236 0%, #321A58 100%)"
                        : "linear-gradient(145deg, #071C2E 0%, #0E3D5C 100%)",
                      border: `1px solid ${app.primaryColor}`,
                      boxShadow: `0 12px 24px -6px ${app.glowColor}`,
                      position: "relative",
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
                      {isAstro ? "★ Günün Protez Tırnak Seçimi" : "⚡ Önerilen Kurtarıcı Bahane"}
                    </div>
                    <div
                      style={{
                        fontSize: "17px",
                        fontWeight: 800,
                        color: "#ffffff",
                        marginBottom: "10px",
                        lineHeight: "1.3",
                      }}
                    >
                      {isAstro
                        ? "Kozmik Altın French & Badem Form"
                        : "“Acil müşteri veri tabanı senkronizasyon toplantısına girmem gerekti.”"}
                    </div>
                    <div style={{ fontSize: "12px", color: "#CBD5E1", lineHeight: "1.4" }}>
                      {isAstro
                        ? "Ateş elementinin tutkulu aurasını yansıtan yıldız tozu varak tasarımı."
                        : "Yöneticiye ve ekip liderlerine karşı diplomatik ve sorgulanmaz mazeret."}
                    </div>

                    <div
                      style={{
                        marginTop: "16px",
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
                        {isAstro ? "TikTok Dikey Akış" : "Başarı: %98"}
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          color: app.primaryColor,
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        {isAstro ? "Detayı Gör" : "WhatsApp"} →
                      </span>
                    </div>
                  </div>

                  {/* Secondary Feature Cards inside phone */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    <div
                      style={{
                        padding: "12px",
                        borderRadius: "16px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div style={{ fontSize: "10px", color: "var(--text-muted)" }}>
                        {isAstro ? "Mistik Tarot" : "Koleksiyon"}
                      </div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff", marginTop: "2px" }}>
                        {isAstro ? "Büyücü Kartı" : "Acil Durum"}
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "12px",
                        borderRadius: "16px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div style={{ fontSize: "10px", color: "var(--text-muted)" }}>
                        {isAstro ? "Stil Takı" : "Şans Ruleti"}
                      </div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff", marginTop: "2px" }}>
                        {isAstro ? "Akik Kolye" : "Çarkı Çevir"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Bottom Home Bar */}
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
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
