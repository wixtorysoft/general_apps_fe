"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, History, Star, ShieldCheck, Zap } from "lucide-react";
import { useDomainTrackLanguageStore } from "@/store/domain-track-language-store";
import { useDomainTrackThemeStore } from "@/store/domain-track-theme-store";
import { StoreButtons } from "./StoreButtons";

export function HeroSection() {
  const { t } = useDomainTrackLanguageStore();
  const { resolvedTheme } = useDomainTrackThemeStore();
  const isLight = resolvedTheme === "light";

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
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, rgba(236, 72, 153, 0.08) 50%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.16) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 70%)",
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
                color: "var(--dt-text-secondary)",
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

          {/* Right Column: Modern 3D Device Showcase featuring 1-main.png & 3D Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              minHeight: "520px",
            }}
          >
            {/* Glowing Backdrop behind device */}
            <div
              style={{
                position: "absolute",
                width: "420px",
                height: "420px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 70%)",
                filter: "blur(60px)",
                zIndex: 0,
              }}
            />

            {/* Central Phone Mockup with 1-main.png */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                transform: "rotate(-2deg)",
                transition: "transform 0.4s ease",
              }}
              className="dt-hero-phone-wrap"
            >
              <div
                className="dt-phone-mockup"
                style={{
                  boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.85), 0 0 45px rgba(168, 85, 247, 0.25)",
                }}
              >
                <div className="dt-phone-screen">
                  <Image
                    src="/domain-track/screens/Phone-DomainSearchScreen1.png"
                    alt="Domain Track Domain Search Screen"
                    width={272}
                    height={572}
                    style={{
                      width: "272px",
                      height: "572px",
                      objectFit: "cover",
                      display: "block",
                    }}
                    priority
                  />
                </div>
              </div>

              {/* Floating Mini 3D Logo Badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  bottom: "-25px",
                  right: "-35px",
                  zIndex: 3,
                  width: "110px",
                  height: "110px",
                  borderRadius: "26px",
                  background: "var(--dt-card-bg)",
                  backdropFilter: "blur(16px)",
                  border: "1.5px solid var(--dt-card-border)",
                  boxShadow: "var(--dt-card-shadow)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <Image
                  src={isLight ? "/domain-track/logo-dark.png" : "/domain-track/logo.png"}
                  alt="Wixtory Domain Track 3D Emblem"
                  width={90}
                  height={90}
                  style={{
                    width: "100%",
                    height: "auto",
                    filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))",
                  }}
                  priority
                />
              </motion.div>

              {/* Floating Status Mini-Card */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: "40px",
                  left: "-45px",
                  zIndex: 3,
                  padding: "10px 16px",
                  borderRadius: "16px",
                  background: "var(--dt-card-bg)",
                  backdropFilter: "blur(14px)",
                  border: "1px solid var(--dt-card-border)",
                  boxShadow: "var(--dt-card-shadow)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "10px",
                    background: "rgba(56, 189, 248, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#38bdf8",
                  }}
                >
                  <Zap size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--dt-text-primary)" }}>
                    Whois & DNS Instant
                  </div>
                  <div style={{ fontSize: "10px", color: "var(--dt-text-muted)" }}>
                    100+ TLD Availability
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .dt-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
      `}</style>
    </section>
  );
}
