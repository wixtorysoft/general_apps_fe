"use client";

import React from "react";
import { DedicatedAppDetails, getLocalizedAppDetails } from "@/data/apps-detail-data";
import { useLanguage } from "@/context/LanguageContext";
import {
  HelpCircle,
  ShieldCheck,
  Zap,
  Sparkles,
  Smartphone,
  HeartHandshake,
  CheckCircle,
  XCircle,
  Award,
} from "lucide-react";

interface WhyChooseSectionProps {
  app: DedicatedAppDetails;
}

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck,
  Zap,
  Sparkles,
  Smartphone,
  HeartHandshake,
  Award,
};

export function WhyChooseSection({ app }: WhyChooseSectionProps) {
  const { language } = useLanguage();
  const currentApp = getLocalizedAppDetails(app.id, language) || app;
  const isTr = language === "tr";

  return (
    <section
      id="why-choose"
      style={{
        padding: "90px 0",
        position: "relative",
      }}
    >
      <div className="container">
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
            <Award size={14} />
            <span>{isTr ? "Neden Tercih Edilmeli?" : "Why Choose?"}</span>
          </span>
          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "16px",
            }}
          >
            {isTr ? `Neden ${currentApp.name} Tercih Edilmeli?` : `Why Choose ${currentApp.name}?`}
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
            {isTr
              ? "Sıradan alternatiflerin ötesinde: Kullanıcı mahremiyeti, benzersiz tasarım ve üstün performans."
              : "Beyond ordinary alternatives: User privacy, unique aesthetic design, and superior performance."}
          </p>
        </div>

        {/* 4 Value Proposition Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "28px",
          }}
        >
          {currentApp.whyChoose.map((reason, idx) => {
            const IconComponent = ICON_MAP[reason.iconName] || ShieldCheck;

            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: "36px 32px",
                  borderRadius: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: "1px solid var(--border-color)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = `${app.primaryColor}55`;
                  e.currentTarget.style.boxShadow = `0 24px 48px -15px ${app.primaryColor}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--border-color)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Background glow circle */}
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${app.primaryColor}22 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                <div>
                  {/* Icon & Title */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      marginBottom: "18px",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "16px",
                        background: `${app.primaryColor}18`,
                        border: `1px solid ${app.primaryColor}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: app.primaryColor,
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={24} />
                    </div>

                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                        color: "var(--text-main)",
                      }}
                    >
                      {reason.title}
                    </h3>
                  </div>

                  {/* Main Description */}
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.65",
                      marginBottom: "24px",
                    }}
                  >
                    {reason.description}
                  </p>
                </div>

                {/* Versus Competitors comparison strip */}
                <div
                  style={{
                    padding: "16px",
                    borderRadius: "18px",
                    background: "var(--badge-bg)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "12px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: app.primaryColor,
                    }}
                  >
                    <CheckCircle size={14} />
                    <span>Diğer Uygulamalara Karşı Farkı</span>
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    {reason.versusCompetitors}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
