"use client";

import React from "react";
import { AppModel } from "@/data/apps-data";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, MessageSquareQuote, CheckCircle2, ChevronRight } from "lucide-react";

interface AppSwitcherProps {
  apps: AppModel[];
  selectedApp: AppModel;
  onSelectApp: (app: AppModel) => void;
}

export function AppSwitcher({ apps, selectedApp, onSelectApp }: AppSwitcherProps) {
  const { t } = useLanguage();

  return (
    <section
      style={{
        padding: "36px 0 10px 0",
      }}
    >
      <div className="container">
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <span className="pill-badge" style={{ marginBottom: "10px" }}>
            <Sparkles size={13} />
            <span>Wixtory Apps</span>
          </span>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 34px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "10px",
            }}
          >
            {t("select_app_title")}
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "15px",
            }}
          >
            {t("select_app_subtitle")}
          </p>
        </div>

        {/* Interactive App Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            maxWidth: "920px",
            margin: "0 auto",
          }}
        >
          {apps.map((app) => {
            const isSelected = app.id === selectedApp.id;
            const isAstro = app.id === "astrovibe";

            return (
              <div
                key={app.id}
                onClick={() => onSelectApp(app)}
                className="glass-card"
                style={{
                  cursor: "pointer",
                  borderColor: isSelected ? app.primaryColor : "var(--border-subtle)",
                  background: isSelected
                    ? `linear-gradient(145deg, var(--bg-card-hover) 0%, rgba(${
                        isAstro ? "139, 92, 246" : "6, 182, 212"
                      }, 0.12) 100%)`
                    : "var(--bg-card)",
                  boxShadow: isSelected
                    ? `0 16px 36px -10px ${app.glowColor}`
                    : "var(--shadow-card)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  transform: isSelected ? "translateY(-3px) scale(1.01)" : "translateY(0)",
                }}
              >
                {/* Active Indicator Top Badge */}
                {isSelected && (
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: app.primaryColor,
                      background: "var(--badge-bg)",
                      padding: "4px 10px",
                      borderRadius: "9999px",
                      border: `1px solid ${app.primaryColor}`,
                    }}
                  >
                    <CheckCircle2 size={13} />
                    <span>{t("selected_app_badge")}</span>
                  </div>
                )}

                <div>
                  {/* Icon & Category */}
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "16px",
                        background: `linear-gradient(135deg, ${app.primaryColor} 0%, ${app.secondaryColor} 100%)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                        boxShadow: `0 8px 20px -4px ${app.glowColor}`,
                        flexShrink: 0,
                      }}
                    >
                      {isAstro ? <Sparkles size={26} /> : <MessageSquareQuote size={26} />}
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: app.primaryColor,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {app.category}
                      </div>
                      <h3
                        style={{
                          fontSize: "22px",
                          fontWeight: 800,
                          color: "var(--text-main)",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        {app.name}
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: 600,
                            padding: "2px 8px",
                            borderRadius: "6px",
                            background: "var(--bg-glass)",
                            border: "1px solid var(--border-subtle)",
                            color: "var(--text-muted)",
                          }}
                        >
                          {app.version}
                        </span>
                      </h3>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.5",
                      marginBottom: "18px",
                    }}
                  >
                    {app.shortDesc}
                  </p>
                </div>

                {/* Bottom Metrics Bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "14px",
                    borderTop: "1px solid var(--border-subtle)",
                    fontSize: "13px",
                  }}
                >
                  <div style={{ display: "flex", gap: "16px" }}>
                    <div>
                      <span style={{ color: "var(--text-muted)", fontSize: "11px", display: "block" }}>
                        {t("downloads")}
                      </span>
                      <strong style={{ color: "var(--text-main)" }}>{app.downloads}</strong>
                    </div>
                    <div>
                      <span style={{ color: "var(--text-muted)", fontSize: "11px", display: "block" }}>
                        {t("rating")}
                      </span>
                      <strong style={{ color: "#F59E0B" }}>★ {app.rating}</strong>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      color: isSelected ? app.primaryColor : "var(--text-secondary)",
                      fontWeight: 600,
                      fontSize: "13px",
                    }}
                  >
                    <span>{isSelected ? t("active") : t("select_and_inspect")}</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
