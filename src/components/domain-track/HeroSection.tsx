"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Search, History, Star } from "lucide-react";
import { useDomainTrackLanguageStore } from "@/store/domain-track-language-store";
import { StoreButtons } from "./StoreButtons";

export function HeroSection() {
  const { t } = useDomainTrackLanguageStore();

  return (
    <section
      className="dt-section dt-section-main"
      style={{
        paddingTop: "140px",
        paddingBottom: "80px",
        position: "relative",
      }}
    >
      {/* Background radial gradient halos */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.16) 0%, rgba(236, 72, 153, 0.08) 50%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-120px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.14) 0%, rgba(59, 130, 246, 0.06) 50%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="dt-container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="dt-hero-grid"
        >
          {/* Left Column: Headlines & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Pill Badge matching Language Box style */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 20px",
                borderRadius: "9999px",
                background: "rgba(168, 85, 247, 0.12)",
                border: "1px solid rgba(168, 85, 247, 0.35)",
                backdropFilter: "blur(12px)",
                marginBottom: "24px",
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.15)",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#38bdf8",
                  boxShadow: "0 0 10px #38bdf8",
                  display: "inline-block",
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                }}
              />
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 800,
                  letterSpacing: "0.02em",
                  background: "linear-gradient(135deg, #c084fc 0%, #f472b6 45%, #38bdf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Wixtory Domain Track
              </span>
            </div>

            {/* Main Gradient H1 */}
            <h1
              style={{
                fontSize: "clamp(34px, 5vw, 56px)",
                fontWeight: 900,
                letterSpacing: "-0.035em",
                lineHeight: "1.12",
                marginBottom: "24px",
              }}
            >
              <span className="dt-gradient-purple-pink">
                {t.hero_h1_1}
              </span>
              <br />
              <span className="dt-gradient-pink-orange">
                {t.hero_h1_2}
              </span>
              {t.hero_h1_3 && (
                <>
                  <br />
                  <span className="dt-gradient-cyan-blue">
                    {t.hero_h1_3}
                  </span>
                </>
              )}
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "17.5px",
                color: "rgba(255, 255, 255, 0.72)",
                lineHeight: "1.65",
                marginBottom: "36px",
                maxWidth: "580px",
              }}
            >
              {t.hero_desc}
            </p>

            {/* App Store & Google Play CTA Buttons */}
            <div style={{ marginBottom: "36px" }}>
              <StoreButtons layout="row" />
            </div>

            {/* Quick Feature Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {[
                { icon: Search, label: t.badge_search, color: "#c084fc" },
                { icon: History, label: t.badge_history, color: "#22d3ee" },
                { icon: Star, label: t.badge_favorites, color: "#fbbf24" },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="dt-pill"
                >
                  <Icon size={15} color={color} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Floating 3D Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Glowing Backdrop behind logo */}
            <div
              style={{
                position: "absolute",
                width: "360px",
                height: "360px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(236, 72, 153, 0.12) 50%, transparent 70%)",
                filter: "blur(50px)",
                zIndex: 0,
              }}
            />

            {/* Floating Image */}
            <div className="dt-floating-logo" style={{ position: "relative", zIndex: 1 }}>
              <Image
                src="https://raw.githubusercontent.com/celalaygar/main/refs/heads/main/project/wixtory-domain-track/domain-track-logo.png"
                alt="Wixtory Domain Track 3D Logo"
                width={400}
                height={400}
                style={{
                  width: "100%",
                  maxWidth: "380px",
                  height: "auto",
                  filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.6))",
                }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .dt-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
