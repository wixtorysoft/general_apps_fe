"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Mail, MapPin, Globe, MessageCircle, ExternalLink } from "lucide-react";
import { useDomainTrackLanguageStore } from "@/store/domain-track-language-store";

export function DeveloperSection() {
  const { t } = useDomainTrackLanguageStore();

  return (
    <section className="dt-section dt-section-main" id="developer">
      <div className="dt-container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <h2
            className="dt-gradient-emerald-teal"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            {t.section_dev}
          </h2>
        </motion.div>

        {/* Developer Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="dt-card"
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            padding: "40px 32px",
            textAlign: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(52, 211, 153, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
          }}
        >
          <div
            className="dt-card-topline"
            style={{ backgroundColor: "#34d399" }}
          />
          <div className="dt-shimmer" />

          {/* Avatar */}
          <div
            style={{
              width: "92px",
              height: "92px",
              borderRadius: "50%",
              margin: "0 auto 20px auto",
              background: "linear-gradient(135deg, #10b981, #06b6d4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              boxShadow: "0 12px 28px -6px rgba(16, 185, 129, 0.5)",
              transition: "transform 0.3s ease",
            }}
            className="dt-avatar-box"
          >
            <User size={46} />
          </div>

          {/* Developer Name */}
          <h3
            style={{
              fontSize: "24px",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            {t.dev_name}
          </h3>

          {/* Contact Details */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                color: "rgba(255, 255, 255, 0.65)",
                fontSize: "14.5px",
              }}
            >
              <Mail size={16} color="#34d399" />
              <span>{t.dev_email}</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                color: "rgba(255, 255, 255, 0.65)",
                fontSize: "14.5px",
              }}
            >
              <MapPin size={16} color="#34d399" />
              <span>{t.dev_location}</span>
            </div>
          </div>

          {/* Action Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <a
              href="https://www.wixtory.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "12px 20px",
                borderRadius: "14px",
                background: "rgba(52, 211, 153, 0.08)",
                border: "1px solid rgba(52, 211, 153, 0.25)",
                color: "#34d399",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(52, 211, 153, 0.16)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(52, 211, 153, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Globe size={16} />
              <span>www.wixtory.com</span>
              <ExternalLink size={14} style={{ opacity: 0.7 }} />
            </a>

            <a
              href="https://www.wixtory.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "13px 20px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #10b981 0%, #0d9488 100%)",
                color: "#ffffff",
                fontSize: "14.5px",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 10px 24px -6px rgba(16, 185, 129, 0.35)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 14px 28px -4px rgba(16, 185, 129, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 24px -6px rgba(16, 185, 129, 0.35)";
              }}
            >
              <MessageCircle size={16} />
              <span>Contact via Website</span>
              <ExternalLink size={14} style={{ opacity: 0.8 }} />
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .dt-card:hover .dt-avatar-box {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}
