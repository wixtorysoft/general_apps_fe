"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Brain, Smartphone, Shield } from "lucide-react";
import { useDomainTrackLanguageStore } from "@/store/domain-track-language-store";

const benefitCards = [
  {
    titleKey: "benefit1_title" as const,
    descKey: "benefit1_desc" as const,
    icon: Zap,
    gradient: "linear-gradient(135deg, #22d3ee, #3b82f6)",
    borderColor: "#22d3ee",
    topLineColor: "#22d3ee",
  },
  {
    titleKey: "benefit2_title" as const,
    descKey: "benefit2_desc" as const,
    icon: Brain,
    gradient: "linear-gradient(135deg, #34d399, #10b981)",
    borderColor: "#34d399",
    topLineColor: "#34d399",
  },
  {
    titleKey: "benefit3_title" as const,
    descKey: "benefit3_desc" as const,
    icon: Smartphone,
    gradient: "linear-gradient(135deg, #facc15, #f59e0b)",
    borderColor: "#facc15",
    topLineColor: "#facc15",
  },
  {
    titleKey: "benefit4_title" as const,
    descKey: "benefit4_desc" as const,
    icon: Shield,
    gradient: "linear-gradient(135deg, #c084fc, #8b5cf6)",
    borderColor: "#c084fc",
    topLineColor: "#c084fc",
  },
];

export function BenefitsSection() {
  const { t } = useDomainTrackLanguageStore();

  return (
    <section className="dt-section dt-section-alt3" id="why-us">
      <div className="dt-container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <h2
            className="dt-gradient-purple-pink"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            {t.section_benefits}
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: "680px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            {t.section_benefits_desc}
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="dt-grid-2">
          {benefitCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.titleKey}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="dt-card"
                style={{
                  padding: "32px 28px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "24px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = card.borderColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                <div
                  className="dt-card-topline"
                  style={{ backgroundColor: card.topLineColor }}
                />
                <div className="dt-shimmer" />

                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "18px",
                    background: card.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    flexShrink: 0,
                    boxShadow: `0 10px 24px -4px ${card.topLineColor}55`,
                    transition: "transform 0.3s ease",
                  }}
                  className="dt-benefit-icon"
                >
                  <Icon size={28} />
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "19px",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "8px",
                    }}
                  >
                    {t[card.titleKey]}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "rgba(255, 255, 255, 0.72)",
                      lineHeight: "1.65",
                    }}
                  >
                    {t[card.descKey]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .dt-card:hover .dt-benefit-icon {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
