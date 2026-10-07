"use client";

import React, { useState } from "react";
import { DedicatedAppDetails, getLocalizedAppDetails } from "@/data/apps-detail-data";
import { useLanguage } from "@/context/LanguageContext";
import { resolveI18n, appDetailI18n } from "@/i18n";
import { HelpCircle, ChevronDown, MessageCircle, Mail } from "lucide-react";

interface FAQSectionProps {
  app: DedicatedAppDetails;
}

export function FAQSection({ app }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language } = useLanguage();
  const localizedApp = getLocalizedAppDetails(app.id, language);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      style={{
        padding: "90px 0",
        position: "relative",
      }}
    >
      <div className="container" style={{ maxWidth: "860px" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span
            className="pill-badge"
            style={{
              color: localizedApp.primaryColor,
              borderColor: localizedApp.primaryColor,
              marginBottom: "14px",
            }}
          >
            <HelpCircle size={14} />
            <span>{resolveI18n(appDetailI18n, "faq_badge", language)}</span>
          </span>
          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "16px",
            }}
          >
            {resolveI18n(appDetailI18n, "faq_title", language)}
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "580px",
              margin: "0 auto",
              fontSize: "17px",
              lineHeight: "1.6",
            }}
          >
            {`${localizedApp.name} — ${resolveI18n(appDetailI18n, "faq_desc", language)}`}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {localizedApp.faq.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="glass-panel"
                style={{
                  borderRadius: "20px",
                  border: isOpen
                    ? `1.5px solid ${app.primaryColor}88`
                    : "1px solid var(--border-color)",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  boxShadow: isOpen
                    ? `0 12px 30px -10px ${app.primaryColor}25`
                    : "none",
                }}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleItem(index)}
                  style={{
                    width: "100%",
                    padding: "24px 28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    gap: "16px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: isOpen ? app.primaryColor : "var(--text-main)",
                      letterSpacing: "-0.01em",
                      lineHeight: "1.4",
                    }}
                  >
                    {item.question}
                  </span>

                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: isOpen ? `${app.primaryColor}22` : "var(--badge-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isOpen ? app.primaryColor : "var(--text-secondary)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "all 0.25s ease",
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div
                    style={{
                      padding: "0 28px 24px 28px",
                      borderTop: "1px solid var(--border-subtle)",
                      paddingTop: "18px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: "1.7",
                        color: "var(--text-secondary)",
                        margin: 0,
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Support Help Box */}
        <div
          className="glass-panel"
          style={{
            marginTop: "48px",
            padding: "28px 32px",
            borderRadius: "24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            background: `linear-gradient(135deg, ${localizedApp.primaryColor}12, var(--bg-card))`,
            border: `1px solid ${localizedApp.primaryColor}33`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "16px",
                background: localizedApp.primaryColor,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MessageCircle size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: "16px", fontWeight: 700, margin: 0, color: "var(--text-main)" }}>
                {resolveI18n(appDetailI18n, "faq_contact_prompt", language)}
              </h4>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", margin: "4px 0 0 0" }}>
                {resolveI18n(appDetailI18n, "faq_contact_sub", language)}
              </p>
            </div>
          </div>

          <a
            href={`mailto:${localizedApp.contactEmail}`}
            className="btn btn-primary"
            style={{
              padding: "12px 24px",
              fontSize: "14px",
              background: localizedApp.primaryColor,
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Mail size={16} />
            <span>{localizedApp.contactEmail}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
