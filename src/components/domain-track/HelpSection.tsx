"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, History, Star, Settings } from "lucide-react";
import { useDomainTrackLanguageStore } from "@/store/domain-track-language-store";

const helpCards = [
  {
    titleKey: "help_search_title" as const,
    contentKey: "help_search_content" as const,
    icon: Search,
    gradient: "linear-gradient(135deg, #22d3ee, #3b82f6)",
    borderColor: "#22d3ee",
    topLineColor: "#22d3ee",
  },
  {
    titleKey: "help_history_title" as const,
    contentKey: "help_history_content" as const,
    icon: History,
    gradient: "linear-gradient(135deg, #f472b6, #ef4444)",
    borderColor: "#34d399",
    topLineColor: "#34d399",
  },
  {
    titleKey: "help_favorites_title" as const,
    contentKey: "help_favorites_content" as const,
    icon: Star,
    gradient: "linear-gradient(135deg, #facc15, #f59e0b)",
    borderColor: "#facc15",
    topLineColor: "#facc15",
  },
  {
    titleKey: "help_settings_title" as const,
    contentKey: "help_settings_content" as const,
    icon: Settings,
    gradient: "linear-gradient(135deg, #c084fc, #8b5cf6)",
    borderColor: "#c084fc",
    topLineColor: "#c084fc",
  },
];

export function HelpSection() {
  const { t } = useDomainTrackLanguageStore();

  return (
    <section className="dt-section dt-section-alt2" id="help">
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
            {t.help_title}
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
            {t.help_subtitle}
          </p>
        </motion.div>

        {/* 4 Cards */}
        <div className="dt-grid-4">
          {helpCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.titleKey}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="dt-card"
                style={{
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
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
                    width: "64px",
                    height: "64px",
                    borderRadius: "18px",
                    background: card.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    marginBottom: "20px",
                    boxShadow: `0 10px 24px -4px ${card.topLineColor}55`,
                    transition: "transform 0.3s ease",
                  }}
                  className="dt-help-icon"
                >
                  <Icon size={28} />
                </div>

                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "12px",
                  }}
                >
                  {t[card.titleKey]}
                </h3>

                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.72)",
                    lineHeight: "1.6",
                  }}
                >
                  {t[card.contentKey]}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .dt-card:hover .dt-help-icon {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
