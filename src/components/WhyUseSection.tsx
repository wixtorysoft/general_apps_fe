"use client";

import React from "react";
import { AppModel } from "@/data/apps-data";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  Palette,
  Compass,
  ShieldCheck,
  Zap,
  Smile,
  AlertCircle,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

interface WhyUseSectionProps {
  app: AppModel;
}

export function WhyUseSection({ app }: WhyUseSectionProps) {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles size={24} />;
      case "Palette":
        return <Palette size={24} />;
      case "Compass":
        return <Compass size={24} />;
      case "ShieldCheck":
        return <ShieldCheck size={24} />;
      case "Zap":
        return <Zap size={24} />;
      case "Smile":
        return <Smile size={24} />;
      default:
        return <HelpCircle size={24} />;
    }
  };

  return (
    <section
      id="why-use"
      style={{
        padding: "80px 0",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span
            className="pill-badge"
            style={{
              color: app.primaryColor,
              borderColor: app.primaryColor,
              marginBottom: "12px",
            }}
          >
            <HelpCircle size={14} />
            <span>{t("why_use_badge")}</span>
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4.5vw, 42px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            {t("why_use_title")} {app.name}?
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "640px",
              margin: "0 auto",
              fontSize: "16px",
              lineHeight: "1.6",
            }}
          >
            {t("why_use_subtitle")}
          </p>
        </div>

        {/* 3-Column Problem / Solution Comparison Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "24px",
          }}
        >
          {app.whyUse.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "32px 26px",
                borderRadius: "24px",
              }}
            >
              <div>
                {/* Card Icon & Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: `linear-gradient(135deg, ${app.primaryColor} 0%, ${app.secondaryColor} 100%)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      boxShadow: `0 8px 18px -4px ${app.glowColor}`,
                    }}
                  >
                    {getIcon(item.iconName)}
                  </div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "var(--text-main)",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Problem Container */}
                <div
                  style={{
                    padding: "14px 16px",
                    borderRadius: "14px",
                    background: "rgba(239, 68, 68, 0.08)",
                    border: "1px solid rgba(239, 68, 68, 0.2)",
                    marginBottom: "14px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "11px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#EF4444",
                      marginBottom: "4px",
                    }}
                  >
                    <AlertCircle size={13} />
                    <span>{t("problem_badge")}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                    {item.problem}
                  </p>
                </div>

                {/* Solution Container */}
                <div
                  style={{
                    padding: "14px 16px",
                    borderRadius: "14px",
                    background: `rgba(${app.id === "astrovibe" ? "139, 92, 246" : "6, 182, 212"}, 0.1)`,
                    border: `1px solid ${app.primaryColor}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "11px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: app.primaryColor,
                      marginBottom: "4px",
                    }}
                  >
                    <CheckCircle size={13} />
                    <span>{app.name} {t("solution_badge")}</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--text-main)", lineHeight: "1.5", fontWeight: 500 }}>
                    {item.solution}
                  </p>
                </div>
              </div>

              {/* Bottom Card Index */}
              <div
                style={{
                  marginTop: "24px",
                  paddingTop: "14px",
                  borderTop: "1px solid var(--border-subtle)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "12px",
                  color: "var(--text-muted)",
                }}
              >
                <span>#{idx + 1}</span>
                <span style={{ color: app.primaryColor, fontWeight: 600 }}>{t("guaranteed_result")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
