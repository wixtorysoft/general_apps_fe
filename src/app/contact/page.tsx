"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageSquare,
  Globe,
  Layers,
  Mail,
  MapPin,
  Send,
  ExternalLink,
} from "lucide-react";
import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";
import { StudioLocationMap } from "@/components/contact/StudioLocationMap";
import { useLanguage } from "@/context/LanguageContext";
import { resolveI18n } from "@/i18n";

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function ContactPage() {
  const { language } = useLanguage();
  const tContact = (key: any) => resolveI18n("contact", key, language);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-main)",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Dynamic Ambient Background Glows */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(800px, 95vw)",
          height: "min(600px, 95vw)",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* Top Navbar */}
      <MainNavbar />

      {/* Page Main Content */}
      <main
        style={{
          flex: 1,
          padding: "56px 16px 80px 16px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="container" style={{ maxWidth: "1060px", margin: "0 auto" }}>
          {/* Header Section */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            {/* Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 18px",
                borderRadius: "9999px",
                background: "rgba(16, 185, 129, 0.1)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                color: "#10b981",
                fontSize: "12px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "16px",
              }}
            >
              <MessageSquare size={14} />
              <span>{tContact("badge")}</span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: "clamp(32px, 4.5vw, 48px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                marginBottom: "14px",
                color: "var(--text-main)",
              }}
            >
              {tContact("title")}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                maxWidth: "620px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              {tContact("desc")}
            </p>
          </div>

          {/* Centered Studio Card */}
          <div
            style={{
              maxWidth: "540px",
              margin: "0 auto 64px auto",
            }}
          >
            <div
              className="glass-card"
              style={{
                borderRadius: "28px",
                overflow: "hidden",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 24px 48px -18px rgba(0, 0, 0, 0.08)",
                background: "var(--bg-card)",
                textAlign: "center",
              }}
            >
              {/* Top Accent Gradient Bar */}
              <div
                style={{
                  height: "4px",
                  background: "linear-gradient(90deg, #10b981 0%, #06b6d4 100%)",
                }}
              />

              <div style={{ padding: "36px 28px 32px 28px" }}>
                {/* Brand Logo Squircle */}
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    margin: "0 auto 16px auto",
                    borderRadius: "20px",
                    background: "#080c18",
                    border: "1px solid rgba(16, 185, 129, 0.35)",
                    boxShadow: "0 10px 24px -4px rgba(16, 185, 129, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                  }}
                >
                  <Image
                    src="/general/icon.png"
                    alt="Wixtory"
                    width={52}
                    height={52}
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* Brand Titles */}
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    margin: "0 0 4px 0",
                    color: "var(--text-main)",
                  }}
                >
                  {tContact("brand_title")}
                </h2>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#10b981",
                    marginBottom: "26px",
                  }}
                >
                  {tContact("brand_tagline")}
                </div>

                {/* Contact Channels List */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginBottom: "24px",
                    textAlign: "left",
                  }}
                >
                  {/* Official Portal */}
                  <a
                    href="https://wixtory.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      borderRadius: "16px",
                      background: "var(--bg-glass)",
                      border: "1px solid var(--border-subtle)",
                      textDecoration: "none",
                      color: "inherit",
                      transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.5)";
                      e.currentTarget.style.backgroundColor = "rgba(16, 185, 129, 0.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                      e.currentTarget.style.backgroundColor = "var(--bg-glass)";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "12px",
                          backgroundColor: "rgba(16, 185, 129, 0.12)",
                          border: "1px solid rgba(16, 185, 129, 0.25)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#10b981",
                          flexShrink: 0,
                        }}
                      >
                        <Globe size={18} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "10px",
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            color: "var(--text-muted)",
                          }}
                        >
                          {tContact("channel_official_portal")}
                        </div>
                        <div
                          style={{
                            fontSize: "13.5px",
                            fontWeight: 700,
                            color: "var(--text-main)",
                            marginTop: "1px",
                          }}
                        >
                          wixtory.com
                        </div>
                      </div>
                    </div>
                    <ExternalLink size={14} color="var(--text-muted)" />
                  </a>

                  {/* Apps & Games Hub */}
                  <a
                    href="https://apps.wixtory.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      borderRadius: "16px",
                      background: "var(--bg-glass)",
                      border: "1px solid var(--border-subtle)",
                      textDecoration: "none",
                      color: "inherit",
                      transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.5)";
                      e.currentTarget.style.backgroundColor = "rgba(6, 182, 212, 0.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                      e.currentTarget.style.backgroundColor = "var(--bg-glass)";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "12px",
                          backgroundColor: "rgba(6, 182, 212, 0.12)",
                          border: "1px solid rgba(6, 182, 212, 0.25)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#06b6d4",
                          flexShrink: 0,
                        }}
                      >
                        <Layers size={18} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "10px",
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            color: "var(--text-muted)",
                          }}
                        >
                          {tContact("channel_apps_hub")}
                        </div>
                        <div
                          style={{
                            fontSize: "13.5px",
                            fontWeight: 700,
                            color: "var(--text-main)",
                            marginTop: "1px",
                          }}
                        >
                          apps.wixtory.com
                        </div>
                      </div>
                    </div>
                    <ExternalLink size={14} color="var(--text-muted)" />
                  </a>

                  {/* Direct Email */}
                  <a
                    href="mailto:wixtoryy@gmail.com"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      borderRadius: "16px",
                      background: "var(--bg-glass)",
                      border: "1px solid var(--border-subtle)",
                      textDecoration: "none",
                      color: "inherit",
                      transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(14, 165, 233, 0.5)";
                      e.currentTarget.style.backgroundColor = "rgba(14, 165, 233, 0.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                      e.currentTarget.style.backgroundColor = "var(--bg-glass)";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "12px",
                          backgroundColor: "rgba(14, 165, 233, 0.12)",
                          border: "1px solid rgba(14, 165, 233, 0.25)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#0ea5e9",
                          flexShrink: 0,
                        }}
                      >
                        <Mail size={18} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "10px",
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            color: "var(--text-muted)",
                          }}
                        >
                          {tContact("channel_email")}
                        </div>
                        <div
                          style={{
                            fontSize: "13.5px",
                            fontWeight: 700,
                            color: "var(--text-main)",
                            marginTop: "1px",
                          }}
                        >
                          wixtoryy@gmail.com
                        </div>
                      </div>
                    </div>
                    <Send size={14} color="var(--text-muted)" />
                  </a>

                  {/* YouTube Channel */}
                  <a
                    href="https://youtube.com/@Wixtoryy"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      borderRadius: "16px",
                      background: "var(--bg-glass)",
                      border: "1px solid var(--border-subtle)",
                      textDecoration: "none",
                      color: "inherit",
                      transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(239, 68, 68, 0.5)";
                      e.currentTarget.style.backgroundColor = "rgba(239, 68, 68, 0.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                      e.currentTarget.style.backgroundColor = "var(--bg-glass)";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "12px",
                          backgroundColor: "rgba(239, 68, 68, 0.12)",
                          border: "1px solid rgba(239, 68, 68, 0.25)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#ef4444",
                          flexShrink: 0,
                        }}
                      >
                        <YoutubeIcon size={18} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "10px",
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            color: "var(--text-muted)",
                          }}
                        >
                          {tContact("channel_youtube")}
                        </div>
                        <div
                          style={{
                            fontSize: "13.5px",
                            fontWeight: 700,
                            color: "var(--text-main)",
                            marginTop: "1px",
                          }}
                        >
                          @Wixtoryy
                        </div>
                      </div>
                    </div>
                    <ExternalLink size={14} color="var(--text-muted)" />
                  </a>

                  {/* Location */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      borderRadius: "16px",
                      background: "var(--bg-glass)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "12px",
                          backgroundColor: "rgba(139, 92, 246, 0.12)",
                          border: "1px solid rgba(139, 92, 246, 0.25)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#8b5cf6",
                          flexShrink: 0,
                        }}
                      >
                        <MapPin size={18} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "10px",
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            color: "var(--text-muted)",
                          }}
                        >
                          {tContact("channel_location")}
                        </div>
                        <div
                          style={{
                            fontSize: "13.5px",
                            fontWeight: 700,
                            color: "var(--text-main)",
                            marginTop: "1px",
                          }}
                        >
                          {tContact("country")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "12px",
                  }}
                >
                  <a
                    href="https://wixtory.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "12px 20px",
                      borderRadius: "14px",
                      background: "#10b981",
                      color: "#ffffff",
                      fontSize: "13.5px",
                      fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 6px 16px -2px rgba(16, 185, 129, 0.4)",
                      transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-1px)";
                      e.currentTarget.style.boxShadow = "0 8px 20px -2px rgba(16, 185, 129, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 6px 16px -2px rgba(16, 185, 129, 0.4)";
                    }}
                  >
                    <Globe size={15} />
                    <span>wixtory.com</span>
                    <ExternalLink size={13} style={{ opacity: 0.8 }} />
                  </a>

                  <a
                    href="https://apps.wixtory.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "12px 20px",
                      borderRadius: "14px",
                      background: "var(--bg-glass)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-main)",
                      fontSize: "13.5px",
                      fontWeight: 700,
                      textDecoration: "none",
                      transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-1px)";
                      e.currentTarget.style.borderColor = "var(--border-active)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                    }}
                  >
                    <Layers size={15} color="#06b6d4" />
                    <span>apps.wixtory.com</span>
                    <ExternalLink size={13} style={{ opacity: 0.6 }} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Interactive Map Section */}
          <StudioLocationMap />
        </div>
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

