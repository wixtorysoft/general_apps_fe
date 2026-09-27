"use client";

import React, { useState } from "react";
import { DedicatedAppDetails, getLocalizedAppDetails } from "@/data/apps-detail-data";
import { useLanguage } from "@/context/LanguageContext";
import { HelpCircle, ArrowRight, Lightbulb, CheckCircle2 } from "lucide-react";

interface HowToUseSectionProps {
  app: DedicatedAppDetails;
}

export function HowToUseSection({ app }: HowToUseSectionProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const { language } = useLanguage();
  const currentApp = getLocalizedAppDetails(app.id, language) || app;
  const isTr = language === "tr";

  return (
    <section
      id="how-to-use"
      style={{
        padding: "90px 0",
        position: "relative",
        background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.015) 50%, transparent 100%)",
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
            <HelpCircle size={14} />
            <span>{isTr ? "Nasıl Kullanılır" : "How to Use"}</span>
          </span>
          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "16px",
            }}
          >
            {currentApp.name} {isTr ? "Nasıl Kullanılır?" : "How to Use?"}
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
              ? "Karmaşık ayarlar yok. Yalnızca 3 adımda kusursuz bir deneyime başlayın."
              : "No complicated setups. Start your seamless experience in just 3 quick steps."}
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            position: "relative",
          }}
        >
          {currentApp.howToUse.map((step, index) => {
            const isSelected = activeStep === index;

            return (
              <div
                key={step.stepNumber}
                className="glass-panel"
                onClick={() => setActiveStep(index)}
                style={{
                  padding: "32px 28px",
                  borderRadius: "24px",
                  cursor: "pointer",
                  position: "relative",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  border: isSelected
                    ? `1.5px solid ${app.primaryColor}`
                    : "1px solid var(--border-color)",
                  background: isSelected
                    ? `linear-gradient(160deg, ${app.primaryColor}14, var(--bg-card))`
                    : "var(--bg-card)",
                  boxShadow: isSelected
                    ? `0 20px 40px -15px ${app.primaryColor}33`
                    : "none",
                  transform: isSelected ? "translateY(-4px)" : "none",
                }}
              >
                {/* Step Number Top Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "24px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "26px",
                      fontWeight: 900,
                      fontFamily: "monospace",
                      color: isSelected ? app.primaryColor : "var(--text-tertiary)",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {step.stepNumber}
                  </span>

                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: isSelected ? app.primaryColor : "var(--badge-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isSelected ? "#fff" : "var(--text-muted)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {isSelected ? <CheckCircle2 size={16} /> : <ArrowRight size={14} />}
                  </div>
                </div>

                {/* Step Title */}
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    marginBottom: "12px",
                    letterSpacing: "-0.01em",
                    color: isSelected ? "var(--text-main)" : "var(--text-secondary)",
                  }}
                >
                  {step.title}
                </h3>

                {/* Step Description */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: "1.65",
                    marginBottom: "20px",
                  }}
                >
                  {step.description}
                </p>

                {/* Tip callout */}
                <div
                  style={{
                    padding: "12px 14px",
                    borderRadius: "14px",
                    background: "var(--badge-bg)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <Lightbulb
                    size={16}
                    style={{
                      color: app.secondaryColor || app.primaryColor,
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "12.5px",
                      color: "var(--text-tertiary)",
                      lineHeight: "1.45",
                      margin: 0,
                    }}
                  >
                    <strong style={{ color: "var(--text-secondary)" }}>
                      {isTr ? "İpucu: " : "Tip: "}
                    </strong>
                    {step.tip}
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
