"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  History,
  Star,
  Settings,
  ArrowLeft,
  ArrowRight,
  RotateCw,
  Lock,
  PanelLeft,
} from "lucide-react";
import { useDomainTrackLanguageStore } from "@/store/domain-track-language-store";

const helpCards = [
  {
    step: "01",
    path: "https://domain.track/search",
    titleKey: "help_search_title" as const,
    contentKey: "help_search_content" as const,
    icon: Search,
    gradient: "linear-gradient(135deg, #22d3ee, #3b82f6)",
    borderColor: "#22d3ee",
    accentColor: "#0284c7",
  },
  {
    step: "02",
    path: "https://domain.track/history",
    titleKey: "help_history_title" as const,
    contentKey: "help_history_content" as const,
    icon: History,
    gradient: "linear-gradient(135deg, #f472b6, #ef4444)",
    borderColor: "#f472b6",
    accentColor: "#db2777",
  },
  {
    step: "03",
    path: "https://domain.track/favorites",
    titleKey: "help_favorites_title" as const,
    contentKey: "help_favorites_content" as const,
    icon: Star,
    gradient: "linear-gradient(135deg, #facc15, #f59e0b)",
    borderColor: "#facc15",
    accentColor: "#d97706",
  },
  {
    step: "04",
    path: "https://domain.track/settings",
    titleKey: "help_settings_title" as const,
    contentKey: "help_settings_content" as const,
    icon: Settings,
    gradient: "linear-gradient(135deg, #c084fc, #8b5cf6)",
    borderColor: "#c084fc",
    accentColor: "#7c3aed",
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
          <p className="dt-subtitle">
            {t.help_subtitle}
          </p>
        </motion.div>

        {/* 4 MacBook Browser Window Cards */}
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
                className="dt-browser-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = card.borderColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--dt-card-border)";
                }}
              >
                {/* Top Animated Accent Border */}
                <div
                  className="dt-card-topline"
                  style={{ backgroundColor: card.borderColor }}
                />
                <div className="dt-shimmer" />

                {/* MacBook Safari Browser Window Header Bar */}
                <div className="dt-browser-header">
                  {/* Traffic Light Window Controls */}
                  <div className="dt-traffic-lights">
                    <span className="dt-traffic-dot close" />
                    <span className="dt-traffic-dot minimize" />
                    <span className="dt-traffic-dot maximize" />
                  </div>

                  {/* Browser Nav Action Icons (Panel, Arrows, Refresh) */}
                  <div className="dt-browser-nav-icons">
                    <PanelLeft size={12} style={{ opacity: 0.7 }} />
                    <ArrowLeft size={12} style={{ opacity: 0.7 }} />
                    <ArrowRight size={12} style={{ opacity: 0.3 }} />
                    <RotateCw size={11} style={{ opacity: 0.7 }} />
                  </div>

                  {/* Browser URL Bar with Lock */}
                  <div className="dt-browser-url-bar">
                    <Lock size={10} color="#10b981" />
                    <span>{card.path.replace("https://", "")}</span>
                  </div>
                </div>

                {/* Browser Window Body Content */}
                <div className="dt-browser-body">
                  {/* Step Pill */}
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: card.accentColor,
                      padding: "4px 10px",
                      borderRadius: "9999px",
                      background: "var(--dt-subtle-box-bg)",
                      border: "1px solid var(--dt-subtle-box-border)",
                      marginBottom: "12px",
                    }}
                  >
                    STEP {card.step}
                  </span>

                  {/* Glowing Icon Box */}
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
                      marginBottom: "16px",
                      boxShadow: `0 10px 24px -4px ${card.borderColor}55`,
                      transition: "transform 0.3s ease",
                    }}
                    className="dt-help-icon"
                  >
                    <Icon size={26} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "17.5px",
                      fontWeight: 700,
                      color: "var(--dt-text-primary)",
                      marginBottom: "10px",
                      lineHeight: "1.3",
                    }}
                  >
                    {t[card.titleKey]}
                  </h3>

                  {/* Content Description */}
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "var(--dt-text-secondary)",
                      lineHeight: "1.6",
                    }}
                  >
                    {t[card.contentKey]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .dt-browser-card:hover .dt-help-icon {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}
