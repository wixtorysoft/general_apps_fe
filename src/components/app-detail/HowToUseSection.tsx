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

  const howI18n: Record<string, Record<string, string>> = {
    badge: {
      tr: "Nasıl Kullanılır", en: "How to Use", it: "Come Funziona", pt: "Como Usar",
      es: "Cómo Funciona", fr: "Comment Utiliser", de: "So Funktioniert Es", ru: "Как Пользоваться",
      ja: "使い方", zh: "如何使用", ar: "طريقة الاستخدام"
    },
    title_suffix: {
      tr: "Nasıl Kullanılır?", en: "How to Use?", it: "Come si Usa?", pt: "Como Funciona?",
      es: "¿Cómo se Usa?", fr: "Comment ça Marche ?", de: "Wie Funktioniert Es?", ru: "Как Это Работает?",
      ja: "簡単3ステップ", zh: "快速上手指南", ar: "كيف يعمل التطبيق؟"
    },
    desc: {
      tr: "Karmaşık ayarlar yok. Yalnızca 3 adımda kusursuz bir deneyime başlayın.",
      en: "No complicated setups. Start your seamless experience in just 3 quick steps.",
      it: "Nessuna configurazione complessa. Inizia la tua esperienza in soli 3 semplici passaggi.",
      pt: "Sem configurações complexas. Inicie sua experiência em apenas 3 passos simples.",
      es: "Sin configuraciones complejas. Comienza una experiencia fluida en solo 3 pasos.",
      fr: "Aucune configuration complexe. Démarrez votre expérience fluide en 3 étapes simples.",
      de: "Keine komplizierten Einstellungen. Starten Sie in nur 3 schnellen Schritten.",
      ru: "Никаких сложных настроек. Начните работу всего за 3 простых шага.",
      ja: "複雑な設定は不要。わずか3ステップで快適な体験をスタート。",
      zh: "无需复杂配置，只需轻松 3 步即可开启高效顺畅体验。",
      ar: "لا توجد إعدادات معقدة. ابدأ تجربتك السلسة في 3 خطوات بسيطة فقط."
    },
    tip_prefix: {
      tr: "İpucu: ", en: "Tip: ", it: "Consiglio: ", pt: "Dica: ",
      es: "Consejo: ", fr: "Astuce : ", de: "Tipp: ", ru: "Совет: ",
      ja: "ヒント: ", zh: "小贴士：", ar: "نصيحة: "
    }
  };

  const hStr = (key: string) => howI18n[key]?.[language] || howI18n[key]?.en || "";

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
            <span>{hStr("badge")}</span>
          </span>
          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "16px",
            }}
          >
            {currentApp.name} {hStr("title_suffix")}
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
            {hStr("desc")}
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
                      {hStr("tip_prefix")}
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
