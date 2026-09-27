"use client";

import React, { useState } from "react";
import { AppModel } from "@/data/apps-data";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Eye, Check, RefreshCw } from "lucide-react";

interface ShowcaseVisualsProps {
  app: AppModel;
}

export function ShowcaseVisuals({ app }: ShowcaseVisualsProps) {
  const { t } = useLanguage();
  const [activeTabId, setActiveTabId] = useState<string>(app.showcaseTabs[0]?.id || "");

  // Update activeTabId if app changes
  const activeTab =
    app.showcaseTabs.find((t) => t.id === activeTabId) || app.showcaseTabs[0];

  return (
    <section
      id="showcase"
      style={{
        padding: "80px 0",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span
            className="pill-badge"
            style={{
              color: app.primaryColor,
              borderColor: app.primaryColor,
              marginBottom: "12px",
            }}
          >
            <Eye size={14} />
            <span>{t("showcase_badge")}</span>
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "14px",
            }}
          >
            {app.name} {t("showcase_title")}
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "16px",
            }}
          >
            {t("showcase_subtitle")}
          </p>
        </div>

        {/* Tab Buttons Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "36px",
          }}
        >
          {app.showcaseTabs.map((tab) => {
            const isActive = tab.id === activeTab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                style={{
                  padding: "10px 22px",
                  borderRadius: "9999px",
                  background: isActive ? "var(--primary)" : "var(--bg-card)",
                  color: isActive ? "#ffffff" : "var(--text-secondary)",
                  border: isActive ? "1px solid var(--primary)" : "1px solid var(--border-subtle)",
                  fontSize: "14px",
                  fontWeight: isActive ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: isActive ? "0 8px 20px -4px var(--primary-glow)" : "none",
                }}
              >
                <span>{tab.label}</span>
                <span
                  style={{
                    fontSize: "10px",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    background: isActive ? "rgba(255,255,255,0.25)" : "var(--badge-bg)",
                    color: isActive ? "#ffffff" : "var(--primary)",
                    fontWeight: 700,
                  }}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Showcase Panel */}
        <div
          className="glass-panel"
          style={{
            padding: "40px",
            maxWidth: "1000px",
            margin: "0 auto",
            border: `1px solid ${activeTab.accentColor}44`,
            boxShadow: `0 24px 60px -15px ${activeTab.accentColor}25`,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "40px",
              alignItems: "center",
            }}
            className="showcase-content-grid"
          >
            {/* Left Description Column */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  background: `${activeTab.accentColor}18`,
                  color: activeTab.accentColor,
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                <Sparkles size={13} />
                <span>{activeTab.badge}</span>
              </div>

              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  marginBottom: "10px",
                  color: "var(--text-main)",
                }}
              >
                {activeTab.title}
              </h3>

              <p
                style={{
                  fontSize: "16px",
                  color: "var(--text-secondary)",
                  lineHeight: "1.6",
                  marginBottom: "24px",
                }}
              >
                {activeTab.subtitle}
              </p>

              {/* Tags Cloud */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
                {activeTab.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "9999px",
                      background: "var(--bg-glass)",
                      border: "1px solid var(--border-subtle)",
                      fontSize: "12px",
                      color: "var(--text-main)",
                      fontWeight: 500,
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Bullet Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {activeTab.mockupContent.details.map((detail, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14px",
                      color: "var(--text-main)",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: `${activeTab.accentColor}25`,
                        color: activeTab.accentColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Check size={12} />
                    </div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card / Visual Mockup Canvas */}
            <div
              style={{
                borderRadius: "28px",
                background: activeTab.mockupContent.gradient,
                border: `1px solid ${activeTab.accentColor}66`,
                boxShadow: `0 20px 40px -10px ${activeTab.accentColor}33`,
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "360px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Card Watermark */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "-20px",
                  fontSize: "120px",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.03)",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {app.name.toUpperCase()}
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: activeTab.accentColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {t("live_preview")}
                  </span>
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: "9999px",
                      background: "rgba(255,255,255,0.1)",
                      fontSize: "11px",
                      color: "#ffffff",
                    }}
                  >
                    {tabOrLabel(activeTab.label)}
                  </span>
                </div>

                <h4
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "8px",
                  }}
                >
                  {activeTab.mockupContent.heading}
                </h4>

                <div
                  style={{
                    fontSize: "14px",
                    color: "#cbd5e1",
                    marginBottom: "24px",
                  }}
                >
                  {activeTab.mockupContent.subheading}
                </div>
              </div>

              {/* Dynamic Mockup Interactive Element */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "16px",
                  background: "rgba(0,0,0,0.45)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontSize: "13px", color: "#f8fafc", fontWeight: 600 }}>
                    {activeTab.mockupContent.details[0]}
                  </div>
                  <button
                    style={{
                      padding: "6px 12px",
                      borderRadius: "8px",
                      background: activeTab.accentColor,
                      color: "#ffffff",
                      fontSize: "12px",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <RefreshCw size={12} />
                    <span>{t("refresh_btn")}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 850px) {
          .showcase-content-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function tabOrLabel(label: string) {
  return label;
}
