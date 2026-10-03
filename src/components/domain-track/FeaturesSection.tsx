"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, History, Star, Settings, Globe, Palette } from "lucide-react";
import { useDomainTrackLanguageStore } from "@/store/domain-track-language-store";

const featureCards = [
  {
    titleKey: "feature1_title" as const,
    descKey: "feature1_desc" as const,
    icon: Search,
    gradient: "linear-gradient(135deg, #fb923c, #f59e0b)",
    borderColor: "#fb923c",
    topLineColor: "#fb923c",
    tags: ["tag_search", "tag_extensions", "tag_availability"] as const,
  },
  {
    titleKey: "feature2_title" as const,
    descKey: "feature2_desc" as const,
    icon: History,
    gradient: "linear-gradient(135deg, #f472b6, #ef4444)",
    borderColor: "#ef4444",
    topLineColor: "#ef4444",
    tags: ["tag_tracking", "tag_records", "tag_history"] as const,
  },
  {
    titleKey: "feature3_title" as const,
    descKey: "feature3_desc" as const,
    icon: Star,
    gradient: "linear-gradient(135deg, #facc15, #f59e0b)",
    borderColor: "#f59e0b",
    topLineColor: "#f59e0b",
    tags: ["tag_bookmarks", "tag_quick_access", "tag_saving"] as const,
  },
  {
    titleKey: "feature4_title" as const,
    descKey: "feature4_desc" as const,
    icon: Settings,
    gradient: "linear-gradient(135deg, #c084fc, #8b5cf6)",
    borderColor: "#8b5cf6",
    topLineColor: "#8b5cf6",
    tags: ["tag_customization", "tag_languages", "tag_preferences"] as const,
  },
  {
    titleKey: "feature5_title" as const,
    descKey: "feature5_desc" as const,
    icon: Globe,
    gradient: "linear-gradient(135deg, #22d3ee, #3b82f6)",
    borderColor: "#22d3ee",
    topLineColor: "#22d3ee",
    tags: ["tag_i18n", "tag_localization", "tag_global"] as const,
  },
  {
    titleKey: "feature6_title" as const,
    descKey: "feature6_desc" as const,
    icon: Palette,
    gradient: "linear-gradient(135deg, #34d399, #10b981)",
    borderColor: "#10b981",
    topLineColor: "#10b981",
    tags: ["tag_design", "tag_usability", "tag_modern"] as const,
  },
];

export function FeaturesSection() {
  const { t } = useDomainTrackLanguageStore();

  return (
    <section className="dt-section dt-section-main" id="features">
      <div className="dt-container">
        {/* Header */}
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
            {t.section_features}
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
            {t.section_features_desc}
          </p>
        </motion.div>

        {/* 6 Features Grid */}
        <div className="dt-grid-3">
          {featureCards.map((card, idx) => {
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
                  padding: "36px 28px",
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
                {/* Animated colored top border line */}
                <div
                  className="dt-card-topline"
                  style={{ backgroundColor: card.topLineColor }}
                />
                <div className="dt-shimmer" />

                {/* Glowing Icon Badge */}
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "20px",
                    background: card.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    marginBottom: "24px",
                    boxShadow: `0 12px 28px -6px ${card.topLineColor}66`,
                    transition: "transform 0.3s ease",
                  }}
                  className="dt-icon-box"
                >
                  <Icon size={32} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "12px",
                  }}
                >
                  {t[card.titleKey]}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "14.5px",
                    color: "rgba(255, 255, 255, 0.72)",
                    lineHeight: "1.65",
                    marginBottom: "20px",
                    flexGrow: 1,
                  }}
                >
                  {t[card.descKey]}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    justifyContent: "center",
                  }}
                >
                  {card.tags.map((tagKey) => (
                    <span key={tagKey} className="dt-tag">
                      {t[tagKey]}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .dt-card:hover .dt-icon-box {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
