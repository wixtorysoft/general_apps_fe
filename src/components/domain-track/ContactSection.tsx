"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  Layers,
  Send,
} from "lucide-react";
import { useDomainTrackLanguageStore } from "@/store/domain-track-language-store";

function YoutubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function ContactSection() {
  const { language } = useDomainTrackLanguageStore();
  const isTr = language === "tr";

  return (
    <section
      id="contact"
      className="dt-section dt-section-alt2"
      style={{
        position: "relative",
        padding: "100px 0",
        overflow: "hidden",
      }}
    >
      {/* Anchor for backward compatibility with #developer */}
      <span id="developer" style={{ position: "absolute", top: "-100px" }} />

      {/* Ambient background halos */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, rgba(192, 132, 252, 0.08) 45%, transparent 70%)",
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="dt-container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 18px",
              borderRadius: "9999px",
              background: "rgba(34, 211, 238, 0.12)",
              border: "1px solid rgba(34, 211, 238, 0.3)",
              color: "#22d3ee",
              fontSize: "12.5px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "16px",
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.15)",
            }}
          >
            <Mail size={14} />
            <span>{isTr ? "İletişim" : "Contact"}</span>
          </div>

          <h2
            className="dt-gradient-cyan-blue"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            {isTr ? "İletişim & Destek" : "Contact & Support"}
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.65)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            {isTr
              ? "Sorularınız, önerileriniz veya iş birliği talepleriniz için Wixtory ekibiyle doğrudan iletişime geçin."
              : "Have questions, suggestions, or need assistance? Reach out to the Wixtory team directly."}
          </p>
        </motion.div>

        {/* Studio Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: "560px", margin: "0 auto" }}
        >
          <div
            className="dt-card"
            style={{
              borderRadius: "28px",
              background: "rgba(13, 28, 41, 0.85)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 35px rgba(34, 211, 238, 0.1)",
              overflow: "hidden",
            }}
          >
            {/* Gradient Top Line */}
            <div
              style={{
                height: "4px",
                width: "100%",
                background: "linear-gradient(90deg, #22d3ee 0%, #60a5fa 50%, #c084fc 100%)",
              }}
            />

            <div style={{ padding: "36px 32px", textAlign: "center" }}>
              {/* Logo Badge */}
              <div
                style={{
                  position: "relative",
                  width: "76px",
                  height: "76px",
                  margin: "0 auto 16px auto",
                  padding: "10px",
                  borderRadius: "20px",
                  background: "rgba(0, 0, 0, 0.5)",
                  border: "1px solid rgba(34, 211, 238, 0.35)",
                  boxShadow: "0 10px 25px rgba(34, 211, 238, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/domain-track/logo.png"
                  alt="Wixtory"
                  width={56}
                  height={56}
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* Title & Subtitle */}
              <h3
                style={{
                  fontSize: "26px",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                  marginBottom: "4px",
                }}
              >
                Wixtory
              </h3>
              <p
                style={{
                  color: "#22d3ee",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "28px",
                }}
              >
                Games & Software Studio
              </p>

              {/* Channels List */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "24px",
                  textAlign: "left",
                }}
              >
                {/* Official Portal */}
                <a
                  href="https://wixtory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dt-contact-row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 16px",
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "inherit",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: "rgba(34, 211, 238, 0.15)",
                      border: "1px solid rgba(34, 211, 238, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#22d3ee",
                      flexShrink: 0,
                    }}
                  >
                    <Globe size={20} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "rgba(255, 255, 255, 0.5)" }}>
                      Official Portal
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                      wixtory.com
                    </div>
                  </div>
                  <ExternalLink size={16} style={{ color: "rgba(255, 255, 255, 0.4)", flexShrink: 0 }} />
                </a>

                {/* Apps & Games Hub */}
                <a
                  href="https://apps.wixtory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dt-contact-row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 16px",
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "inherit",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: "rgba(96, 165, 250, 0.15)",
                      border: "1px solid rgba(96, 165, 250, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#60a5fa",
                      flexShrink: 0,
                    }}
                  >
                    <Layers size={20} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "rgba(255, 255, 255, 0.5)" }}>
                      Apps & Games Hub
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                      apps.wixtory.com
                    </div>
                  </div>
                  <ExternalLink size={16} style={{ color: "rgba(255, 255, 255, 0.4)", flexShrink: 0 }} />
                </a>

                {/* Direct Email */}
                <a
                  href="mailto:wixtoryy@gmail.com"
                  className="dt-contact-row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 16px",
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "inherit",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: "rgba(45, 212, 191, 0.15)",
                      border: "1px solid rgba(45, 212, 191, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2dd4bf",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "rgba(255, 255, 255, 0.5)" }}>
                      Direct Email
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                      wixtoryy@gmail.com
                    </div>
                  </div>
                  <Send size={16} style={{ color: "rgba(255, 255, 255, 0.4)", flexShrink: 0 }} />
                </a>

                {/* YouTube Channel */}
                <a
                  href="https://www.youtube.com/@Wixtoryy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dt-contact-row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 16px",
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "inherit",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: "rgba(239, 68, 68, 0.15)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ef4444",
                      flexShrink: 0,
                    }}
                  >
                    <YoutubeIcon size={20} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "rgba(255, 255, 255, 0.5)" }}>
                      YouTube Channel
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                      @Wixtoryy
                    </div>
                  </div>
                  <ExternalLink size={16} style={{ color: "rgba(255, 255, 255, 0.4)", flexShrink: 0 }} />
                </a>

                {/* Location */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 16px",
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: "rgba(192, 132, 252, 0.15)",
                      border: "1px solid rgba(192, 132, 252, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#c084fc",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "rgba(255, 255, 255, 0.5)" }}>
                      Location
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "rgba(255, 255, 255, 0.9)" }}>
                      Turkey
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                  paddingTop: "6px",
                }}
                className="dt-contact-btn-grid"
              >
                <a
                  href="https://wixtory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "12px 18px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)",
                    color: "#0B1A27",
                    fontWeight: 700,
                    fontSize: "13.5px",
                    textDecoration: "none",
                    boxShadow: "0 8px 20px rgba(34, 211, 238, 0.25)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <Globe size={16} />
                  <span>wixtory.com</span>
                  <ExternalLink size={13} style={{ opacity: 0.8 }} />
                </a>

                <a
                  href="https://apps.wixtory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "12px 18px",
                    borderRadius: "14px",
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "13.5px",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  }}
                >
                  <Layers size={16} color="#22d3ee" />
                  <span>apps.wixtory.com</span>
                  <ExternalLink size={13} style={{ opacity: 0.6 }} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .dt-contact-row:hover {
          background: rgba(34, 211, 238, 0.08) !important;
          border-color: rgba(34, 211, 238, 0.3) !important;
          transform: translateY(-1px);
        }
        @media (max-width: 520px) {
          .dt-contact-btn-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export const DeveloperSection = ContactSection;
