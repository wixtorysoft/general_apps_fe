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

  const whyI18n: Record<string, Record<string, string>> = {
    badge: {
      tr: "Neden Tercih Edilmeli?", en: "Why Choose?", it: "Perché Sceglierlo?", pt: "Por Que Escolher?",
      es: "¿Por Qué Elegirnos?", fr: "Pourquoi Choisir ?", de: "Warum Uns Wählen?", ru: "Почему Именно Мы?",
      ja: "選ばれる理由", zh: "为什么选择我们？", ar: "لماذا تختار هذا التطبيق؟"
    },
    desc: {
      tr: "Sıradan alternatiflerin ötesinde: Kullanıcı mahremiyeti, benzersiz tasarım ve üstün performans.",
      en: "Beyond ordinary alternatives: User privacy, unique aesthetic design, and superior performance.",
      it: "Oltre le alternative ordinarie: Privacy dell'utente, design estetico unico e prestazioni superiori.",
      pt: "Além de alternativas comuns: Privacidade do usuário, design estético único e desempenho superior.",
      es: "Más allá de alternativas comunes: Privacidad del usuario, diseño estético único y rendimiento superior.",
      fr: "Bien au-delà des alternatives ordinaires : Respect de la vie privée, design esthétique et performances de pointe.",
      de: "Jenseits gewöhnlicher Alternativen: Privatsphäre, einzigartiges Design und überlegene Leistung.",
      ru: "За пределами обычных решений: Полная конфиденциальность, уникальный дизайн и высокая скорость.",
      ja: "一般的なアプリを超える体験：ユーザープライバシーの尊重、洗練された美学、圧倒的なパフォーマンス。",
      zh: "超越平庸之选：坚守隐私无妥协，独具美学设计与卓越运行性能。",
      ar: "تفوق على البدائل التقليدية: خصوصية مطلقة، تصميم جمالي فريد وأداء فائق."
    }
  };

  const getWhyTitle = (name: string) => {
    switch (language) {
      case "tr": return `Neden ${name} Tercih Edilmeli?`;
      case "it": return `Perché Scegliere ${name}?`;
      case "pt": return `Por Que Escolher o ${name}?`;
      case "es": return `¿Por Qué Elegir ${name}?`;
      case "fr": return `Pourquoi Choisir ${name} ?`;
      case "de": return `Warum ${name} Wählen?`;
      case "ru": return `Почему Стоит Выбрать ${name}?`;
      case "ja": return `${name}が選ばれる理由`;
      case "zh": return `为什么选择 ${name}？`;
      case "ar": return `لماذا تختار ${name}؟`;
      default: return `Why Choose ${name}?`;
    }
  };

  const wStr = (key: string) => whyI18n[key]?.[language] || whyI18n[key]?.en || "";

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
            <span>{wStr("badge")}</span>
          </span>
          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "16px",
            }}
          >
            {getWhyTitle(currentApp.name)}
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
            {wStr("desc")}
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
