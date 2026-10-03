"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  HardDrive,
  BarChart3,
  Radio,
  Lock,
  Mail,
  Download,
  ExternalLink,
  Layers,
} from "lucide-react";
import { PageLayout } from "@/components/domain-track/PageLayout";
import { useDomainTrackLanguageStore } from "@/store/domain-track-language-store";

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

const privacySections = [
  {
    numberKey: "1",
    titleKey: "privacy_section1_title" as const,
    icon: Shield,
    gradient: "linear-gradient(135deg, #34d399, #10b981)",
    borderColor: "#34d399",
    topLine: "#34d399",
    content: "privacy_section1_content" as const,
  },
  {
    numberKey: "2",
    titleKey: "privacy_section2_title" as const,
    icon: HardDrive,
    gradient: "linear-gradient(135deg, #22d3ee, #3b82f6)",
    borderColor: "#22d3ee",
    topLine: "#22d3ee",
    hasList: true,
  },
  {
    numberKey: "3",
    titleKey: "privacy_section3_title" as const,
    icon: BarChart3,
    gradient: "linear-gradient(135deg, #c084fc, #8b5cf6)",
    borderColor: "#c084fc",
    topLine: "#c084fc",
    content: "privacy_section3_content" as const,
  },
  {
    numberKey: "4",
    titleKey: "privacy_section4_title" as const,
    icon: Radio,
    gradient: "linear-gradient(135deg, #fb923c, #f59e0b)",
    borderColor: "#fb923c",
    topLine: "#fb923c",
    content: "privacy_section4_content" as const,
  },
  {
    numberKey: "5",
    titleKey: "privacy_section5_title" as const,
    icon: Lock,
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)",
    borderColor: "#f472b6",
    topLine: "#f472b6",
    content: "privacy_section5_content" as const,
  },
  {
    numberKey: "6",
    titleKey: "privacy_section6_title" as const,
    icon: Mail,
    gradient: "linear-gradient(135deg, #facc15, #f59e0b)",
    borderColor: "#facc15",
    topLine: "#facc15",
    content: "privacy_section6_content" as const,
    hasEmail: true,
  },
];

export default function DomainTrackPrivacyPolicyPage() {
  const { t } = useDomainTrackLanguageStore();

  return (
    <PageLayout>
      <section className="dt-section dt-section-main" style={{ paddingTop: "40px", paddingBottom: "80px" }}>
        <div className="dt-container" style={{ maxWidth: "900px" }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: "center", marginBottom: "36px" }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <Shield size={36} color="#34d399" />
              <h1
                className="dt-gradient-emerald-cyan"
                style={{
                  fontSize: "clamp(30px, 4.5vw, 44px)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                }}
              >
                {t.privacy_title}
              </h1>
            </div>

            <p style={{ fontSize: "18px", color: "rgba(255, 255, 255, 0.75)", fontWeight: 600, marginBottom: "8px" }}>
              {t.privacy_subtitle}
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.45)", fontFamily: "monospace" }}>
              {t.privacy_effective_date}
            </p>
          </motion.div>

          {/* Action Buttons: Download Markdown & Ecosystem Link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "14px",
              marginBottom: "48px",
            }}
          >
            <a
              href="/privacy-policy.md"
              download="Wixtory_Privacy_Policy.md"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "14.5px",
                textDecoration: "none",
                boxShadow: "0 10px 24px -6px rgba(16, 185, 129, 0.4)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <Download size={18} />
              <span>{t.privacy_download}</span>
            </a>

            <Link
              href="/privacy-policy"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "14px",
                border: "1px solid rgba(192, 132, 252, 0.35)",
                background: "rgba(192, 132, 252, 0.1)",
                color: "#e9d5ff",
                fontWeight: 600,
                fontSize: "14.5px",
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(192, 132, 252, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(192, 132, 252, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Layers size={18} color="#c084fc" />
              <span>Unified Wixtory Ecosystem Policy</span>
            </Link>

            <a
              href="https://github.com/celalaygar/main/blob/main/project/wixtory-domain-track/privacy-policy.md"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "14px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                background: "rgba(255, 255, 255, 0.05)",
                color: "rgba(255, 255, 255, 0.85)",
                fontWeight: 600,
                fontSize: "14.5px",
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <GithubIcon />
              <span>View on GitHub</span>
              <ExternalLink size={14} style={{ opacity: 0.6 }} />
            </a>
          </motion.div>

          {/* Policy Cards List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {privacySections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.numberKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.07 }}
                  className="dt-card"
                  style={{
                    padding: "36px 32px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = section.borderColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  }}
                >
                  <div
                    className="dt-card-topline"
                    style={{ backgroundColor: section.topLine }}
                  />
                  <div className="dt-shimmer" />

                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "18px" }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "14px",
                        background: section.gradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={24} />
                    </div>

                    <h2 style={{ fontSize: "20px", fontWeight: 750, color: "#ffffff", margin: 0 }}>
                      <span style={{ color: "rgba(255, 255, 255, 0.4)", fontFamily: "monospace", marginRight: "8px" }}>
                        {section.numberKey}.
                      </span>
                      {t[section.titleKey]}
                    </h2>
                  </div>

                  {/* Body Content */}
                  <div style={{ paddingLeft: "4px" }}>
                    {section.content && (
                      <p style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.7", margin: 0 }}>
                        {t[section.content]}
                      </p>
                    )}

                    {section.hasList && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "10px" }}>
                        <div style={{ paddingLeft: "16px", borderLeft: "2px solid rgba(255, 255, 255, 0.15)" }}>
                          <p style={{ fontSize: "14.5px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                            {t.privacy_section2_how}
                          </p>
                          <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", lineHeight: "1.6" }}>
                            {t.privacy_section2_how_content}
                          </p>
                        </div>

                        <div style={{ paddingLeft: "16px", borderLeft: "2px solid rgba(255, 255, 255, 0.15)" }}>
                          <p style={{ fontSize: "14.5px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                            {t.privacy_section2_data}
                          </p>
                          <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", lineHeight: "1.6" }}>
                            {t.privacy_section2_data_content}
                          </p>
                        </div>

                        <div style={{ paddingLeft: "16px", borderLeft: "2px solid rgba(255, 255, 255, 0.15)" }}>
                          <p style={{ fontSize: "14.5px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                            {t.privacy_section2_control}
                          </p>
                          <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", lineHeight: "1.6" }}>
                            {t.privacy_section2_control_content}
                          </p>
                        </div>
                      </div>
                    )}

                    {section.hasEmail && (
                      <div style={{ marginTop: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                        <Mail size={16} color="#facc15" />
                        <a
                          href="mailto:wixtoryy@gmail.com"
                          style={{
                            fontSize: "15px",
                            fontWeight: 600,
                            color: "#facc15",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                        >
                          {t.privacy_contact_email}
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
