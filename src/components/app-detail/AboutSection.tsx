"use client";

import React from "react";
import { DedicatedAppDetails, getLocalizedAppDetails } from "@/data/apps-detail-data";
import { useLanguage } from "@/context/LanguageContext";
import {
  Compass,
  Target,
  Users,
  Cpu,
  Smartphone,
  HardDrive,
  ShieldCheck,
  Database,
  PhoneCall,
  Lock,
  Sparkles,
  Zap,
} from "lucide-react";

interface AboutSectionProps {
  app: DedicatedAppDetails;
}

export function AboutSection({ app }: AboutSectionProps) {
  const { language } = useLanguage();
  const localizedApp = getLocalizedAppDetails(app.id, language);
  const isTr = language === "tr";
  const about = localizedApp.about;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone size={22} color={localizedApp.primaryColor} />;
      case "HardDrive":
        return <HardDrive size={22} color={localizedApp.primaryColor} />;
      case "ShieldCheck":
        return <ShieldCheck size={22} color="#10B981" />;
      case "Database":
        return <Database size={22} color={localizedApp.primaryColor} />;
      case "PhoneCall":
        return <PhoneCall size={22} color={localizedApp.primaryColor} />;
      case "Lock":
        return <Lock size={22} color="#10B981" />;
      default:
        return <Cpu size={22} color={localizedApp.primaryColor} />;
    }
  };

  return (
    <section
      id="about"
      style={{
        padding: "90px 0",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span
            className="pill-badge"
            style={{
              color: localizedApp.primaryColor,
              borderColor: localizedApp.primaryColor,
              marginBottom: "14px",
            }}
          >
            <Compass size={14} />
            <span>{about.badge}</span>
          </span>
          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 46px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: "1.15",
              marginBottom: "16px",
            }}
          >
            {about.title}
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "680px",
              margin: "0 auto",
              fontSize: "17px",
              lineHeight: "1.65",
            }}
          >
            {about.subtitle}
          </p>
        </div>

        {/* Two-Column Grid: Vision/Story on Left, Tech Architecture on Right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "36px",
            alignItems: "stretch",
          }}
          className="about-grid"
        >
          {/* Column 1: Story, Mission & Target Audience */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Story Card */}
            <div
              className="glass-panel"
              style={{
                padding: "36px",
                borderRadius: "28px",
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-card)",
                position: "relative",
                overflow: "hidden",
                flex: 1,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: localizedApp.primaryColor,
                  marginBottom: "14px",
                }}
              >
                <Sparkles size={16} />
                <span>{isTr ? "Doğuş Hikayesi & Vizyon" : "Origin Story & Vision"}</span>
              </div>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--text-secondary)",
                  lineHeight: "1.75",
                  margin: 0,
                }}
              >
                {about.story}
              </p>
            </div>

            {/* Mission & Target Audience Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "20px",
              }}
            >
              {/* Mission Box */}
              <div
                className="glass-panel"
                style={{
                  padding: "26px",
                  borderRadius: "22px",
                  background: `linear-gradient(135deg, ${localizedApp.primaryColor}10, var(--bg-card))`,
                  border: `1px solid ${localizedApp.primaryColor}33`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <Target size={18} color={localizedApp.primaryColor} />
                  <h4 style={{ fontSize: "15px", fontWeight: 700, margin: 0, color: "var(--text-main)" }}>
                    {isTr ? "Misyonumuz" : "Our Mission"}
                  </h4>
                </div>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6", margin: 0 }}>
                  {about.mission}
                </p>
              </div>

              {/* Target Audience Box */}
              <div
                className="glass-panel"
                style={{
                  padding: "26px",
                  borderRadius: "22px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <Users size={18} color={localizedApp.primaryColor} />
                  <h4 style={{ fontSize: "15px", fontWeight: 700, margin: 0, color: "var(--text-main)" }}>
                    {isTr ? "Kimin İçin Geliştirildi?" : "Who Is It For?"}
                  </h4>
                </div>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6", margin: 0 }}>
                  {about.targetAudience}
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Tech Highlights & Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Tech Highlights List */}
            <div
              className="glass-panel"
              style={{
                padding: "32px",
                borderRadius: "28px",
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: localizedApp.primaryColor,
                  marginBottom: "20px",
                }}
              >
                <Zap size={16} />
                <span>{isTr ? "Teknolojik Altyapı & Mühendislik" : "Technical Foundation & Stack"}</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {about.techHighlights.map((tech, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      gap: "16px",
                      padding: "16px",
                      borderRadius: "18px",
                      background: "var(--bg-glass)",
                      border: "1px solid var(--border-subtle)",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "14px",
                        background: `${localizedApp.primaryColor}15`,
                        border: `1px solid ${localizedApp.primaryColor}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {renderIcon(tech.icon)}
                    </div>
                    <div>
                      <h5 style={{ fontSize: "15px", fontWeight: 700, margin: "0 0 4px 0", color: "var(--text-main)" }}>
                        {tech.title}
                      </h5>
                      <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: "1.55", margin: 0 }}>
                        {tech.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2x2 Stats Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "16px",
              }}
            >
              {about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: "20px 24px",
                    borderRadius: "20px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: 900,
                      letterSpacing: "-0.02em",
                      color: localizedApp.primaryColor,
                      marginBottom: "4px",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "12.5px", color: "var(--text-secondary)", fontWeight: 600 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .about-grid {
            grid-template-columns: 1.05fr 0.95fr !important;
          }
        }
      `}</style>
    </section>
  );
}
