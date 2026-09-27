"use client";

import React from "react";
import { AppModel } from "@/data/apps-data";
import { useLanguage } from "@/context/LanguageContext";
import {
  MoonStar,
  Brush,
  Gem,
  Layers,
  HeartHandshake,
  BookmarkCheck,
  FolderKanban,
  RotateCcw,
  Heart,
  Share2,
  Bot,
  Zap,
  TrendingUp,
} from "lucide-react";

interface BenefitsSectionProps {
  app: AppModel;
}

export function BenefitsSection({ app }: BenefitsSectionProps) {
  const { t } = useLanguage();

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "MoonStar":
        return <MoonStar size={22} />;
      case "Brush":
        return <Brush size={22} />;
      case "Gem":
        return <Gem size={22} />;
      case "Layers":
        return <Layers size={22} />;
      case "HeartHandshake":
        return <HeartHandshake size={22} />;
      case "BookmarkCheck":
        return <BookmarkCheck size={22} />;
      case "FolderKanban":
        return <FolderKanban size={22} />;
      case "RotateCcw":
        return <RotateCcw size={22} />;
      case "Heart":
        return <Heart size={22} />;
      case "Share2":
        return <Share2 size={22} />;
      case "Bot":
        return <Bot size={22} />;
      default:
        return <Zap size={22} />;
    }
  };

  return (
    <section
      id="features"
      style={{
        padding: "80px 0",
        background: "var(--bg-secondary)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Metric Cards Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "60px",
          }}
        >
          {app.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "24px",
                textAlign: "center",
                background: "var(--bg-card)",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(32px, 4vw, 44px)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: app.primaryColor,
                  marginBottom: "4px",
                }}
              >
                {benefit.statNumber}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "var(--text-muted)",
                  marginBottom: "8px",
                }}
              >
                {benefit.statLabel}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "var(--text-main)",
                  marginBottom: "6px",
                }}
              >
                {benefit.title}
              </div>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                  lineHeight: "1.4",
                }}
              >
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Features Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span
            className="pill-badge"
            style={{
              color: app.primaryColor,
              borderColor: app.primaryColor,
              marginBottom: "12px",
            }}
          >
            <TrendingUp size={14} />
            <span>{t("benefits_badge")}</span>
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "14px",
            }}
          >
            {app.name} {t("what_app_offers")}
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "16px",
            }}
          >
            {t("benefits_subtitle")}
          </p>
        </div>

        {/* 6 Features Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {app.features.map((feature) => (
            <div
              key={feature.id}
              className="glass-card"
              style={{
                display: "flex",
                gap: "18px",
                alignItems: "flex-start",
                padding: "26px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: `linear-gradient(135deg, ${app.primaryColor} 0%, ${app.secondaryColor} 120%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  boxShadow: `0 8px 18px -4px ${app.glowColor}`,
                  flexShrink: 0,
                }}
              >
                {getFeatureIcon(feature.iconName)}
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "var(--text-main)" }}>
                    {feature.title}
                  </h3>
                  {feature.badge && (
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        padding: "2px 8px",
                        borderRadius: "6px",
                        background: "var(--badge-bg)",
                        color: app.primaryColor,
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      {feature.badge}
                    </span>
                  )}
                </div>

                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: "1.5",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
