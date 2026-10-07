"use client";

import React from "react";
import { DedicatedAppDetails, getLocalizedAppDetails } from "@/data/apps-detail-data";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  MoonStar,
  Gem,
  Layers,
  Compass,
  ShieldCheck,
  Bot,
  Volume2,
  Share2,
  Flame,
  ShieldAlert,
  Globe,
  Grid,
  Zap,
} from "lucide-react";

interface FeaturesSectionProps {
  app: DedicatedAppDetails;
}

const ICON_MAP: Record<string, React.ElementType> = {
  MoonStar,
  Sparkles,
  Gem,
  Layers,
  Compass,
  ShieldCheck,
  Bot,
  Volume2,
  Share2,
  Flame,
  ShieldAlert,
  Globe,
};

export function FeaturesSection({ app }: FeaturesSectionProps) {
  const { language, t } = useLanguage();
  const currentApp = getLocalizedAppDetails(app.id, language) || app;

  const featI18n: Record<string, Record<string, string>> = {
    badge: {
      tr: "Özellikler", en: "Features", it: "Funzionalità", pt: "Recursos",
      es: "Características", fr: "Fonctionnalités", de: "Funktionen", ru: "Возможности",
      ja: "機能一覧", zh: "功能特性", ar: "الميزات"
    },
    title_suffix: {
      tr: "Kapsamlı Özellik Seti", en: "Comprehensive Features", it: "Insieme Completo di Funzionalità", pt: "Conjunto Completo de Recursos",
      es: "Conjunto Integral de Funciones", fr: "Ensemble Complet de Fonctionnalités", de: "Umfassender Funktionsumfang", ru: "Полный Набор Возможностей",
      ja: "充実の機能セット", zh: "全景功能体系", ar: "مجموعة الميزات الشاملة"
    },
    desc: {
      tr: "Günlük ritüellerinizi ve zor anlarınızı konfora dönüştüren, en son teknolojiyle donatılmış tüm modüller.",
      en: "Advanced modules equipped with modern technology designed to elevate your daily lifestyle.",
      it: "Moduli avanzati dotati di tecnologia moderna per migliorare la tua vita quotidiana.",
      pt: "Módulos avançados equipados com tecnologia moderna projetados para elevar seu estilo de vida.",
      es: "Módulos avanzados con tecnología moderna diseñados para optimizar tu día a día.",
      fr: "Des modules de pointe conçus avec une technologie moderne pour sublimer votre quotidien.",
      de: "Fortschrittliche Module mit modernster Technologie zur Bereicherung Ihres Alltags.",
      ru: "Продвинутые модули на современной архитектуре, созданные для максимального удобства.",
      ja: "日常のあらゆる瞬間を快適にする、最新テクノロジーを凝縮したモジュール群。",
      zh: "搭载前沿技术架构的丰富模块，全方位提升您的日常数字体验。",
      ar: "وحدات متطورة مدعومة بأحدث التقنيات للارتقاء بأسلوب حياتك اليومي."
    }
  };

  const fStr = (key: string) => featI18n[key]?.[language] || featI18n[key]?.en || "";

  return (
    <section
      id="features"
      style={{
        padding: "90px 0",
        position: "relative",
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "350px",
          background: `radial-gradient(ellipse at center, ${currentApp.primaryColor}15 0%, transparent 70%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span
            className="pill-badge"
            style={{
              color: currentApp.primaryColor,
              borderColor: currentApp.primaryColor,
              marginBottom: "14px",
            }}
          >
            <Grid size={14} />
            <span>{fStr("badge")}</span>
          </span>
          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "16px",
            }}
          >
            {currentApp.name} {fStr("title_suffix")}
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "640px",
              margin: "0 auto",
              fontSize: "17px",
              lineHeight: "1.6",
            }}
          >
            {fStr("desc")}
          </p>
        </div>

        {/* Features 6-Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {currentApp.features.map((feature, idx) => {
            const IconComponent = ICON_MAP[feature.iconName] || Zap;

            return (
              <div
                key={feature.id}
                className="glass-panel"
                style={{
                  padding: "32px",
                  borderRadius: "24px",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  border: "1px solid var(--border-color)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = `${app.primaryColor}66`;
                  e.currentTarget.style.boxShadow = `0 20px 40px -15px ${app.primaryColor}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--border-color)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Accent top indicator */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${app.primaryColor}, ${app.secondaryColor})`,
                    opacity: 0.7,
                  }}
                />

                <div>
                  {/* Top row: Icon + Badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "16px",
                        background: `${app.primaryColor}18`,
                        border: `1px solid ${app.primaryColor}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: app.primaryColor,
                      }}
                    >
                      <IconComponent size={24} />
                    </div>

                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        padding: "5px 12px",
                        borderRadius: "20px",
                        background: "var(--badge-bg)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-secondary)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      marginBottom: "12px",
                      letterSpacing: "-0.01em",
                      color: "var(--text-main)",
                    }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "14.5px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.65",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Index watermark */}
                <div
                  style={{
                    marginTop: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "16px",
                    borderTop: "1px solid var(--border-subtle)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    {app.name} Core 0{idx + 1}
                  </span>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: app.primaryColor,
                      opacity: 0.6,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
