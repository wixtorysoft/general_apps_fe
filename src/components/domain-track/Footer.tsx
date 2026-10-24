"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Gamepad2, Shield, Mail, Globe, ExternalLink } from "lucide-react";
import { useDomainTrackLanguageStore } from "@/store/domain-track-language-store";
import { StoreButtons } from "./StoreButtons";

function YoutubeIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function Footer() {
  const { t } = useDomainTrackLanguageStore();

  return (
    <footer className="dt-section-footer" style={{ padding: "64px 0 32px 0" }}>
      <div className="dt-container">
        {/* 4-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr 1.2fr",
            gap: "40px",
            marginBottom: "48px",
          }}
          className="dt-footer-grid"
        >
          {/* Column 1: Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <Image
                src="/domain-track/logo.png"
                alt="Wixtory Domain Track"
                width={40}
                height={40}
                style={{ height: "40px", width: "auto" }}
              />
              <span
                className="dt-gradient-purple-pink"
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  letterSpacing: "-0.01em",
                }}
              >
                {t.app_title}
              </span>
            </div>

            <p
              style={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.6)",
                lineHeight: "1.65",
                marginBottom: "20px",
              }}
            >
              {t.footer_brand_desc}
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { icon: YoutubeIcon, href: "https://www.youtube.com/@Wixtoryy", label: "YouTube @Wixtoryy" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255, 255, 255, 0.7)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(192, 132, 252, 0.25)";
                    e.currentTarget.style.color = "#c084fc";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <Gamepad2 size={18} color="#22d3ee" />
              <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.05em", color: "#ffffff", textTransform: "uppercase" }}>
                {t.footer_product}
              </h3>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: t.footer_product_home, href: "/domain-track" },
                { label: t.footer_product_screenshots, href: "/domain-track/screenshots" },
                { label: t.footer_product_features, href: "/domain-track/features" },
                { label: t.footer_product_games, href: "/domain-track/screenshots" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: "14px",
                      color: "rgba(255, 255, 255, 0.65)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.65)")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <Shield size={18} color="#22d3ee" />
              <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.05em", color: "#ffffff", textTransform: "uppercase" }}>
                {t.footer_support}
              </h3>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: t.footer_support_why_us, href: "/domain-track/why-us" },
                { label: t.footer_support_faq, href: "/domain-track/faq" },
                { label: t.nav_contact || "Contact", href: "/domain-track#contact" },
                { label: t.footer_support_privacy, href: "/domain-track/privacy-policy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: "14px",
                      color: "rgba(255, 255, 255, 0.65)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.65)")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Download & Contact */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <Mail size={18} color="#22d3ee" />
              <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.05em", color: "#ffffff", textTransform: "uppercase" }}>
                {t.footer_download_contact}
              </h3>
            </div>

            <div style={{ marginBottom: "18px" }}>
              <StoreButtons layout="column" />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13.5px", color: "rgba(255, 255, 255, 0.6)" }}>
              <a
                href="https://wixtory.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "inherit",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#34d399")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
              >
                <Globe size={14} color="#34d399" />
                <span>wixtory.com</span>
                <ExternalLink size={12} style={{ opacity: 0.6 }} />
              </a>

              <a
                href="https://apps.wixtory.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "inherit",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#34d399")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
              >
                <Globe size={14} color="#34d399" />
                <span>apps.wixtory.com</span>
                <ExternalLink size={12} style={{ opacity: 0.6 }} />
              </a>

              <a
                href="mailto:wixtoryy@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "inherit",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#34d399")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
              >
                <Mail size={14} color="#34d399" />
                <span>wixtoryy@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "24px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.4)" }}>
            {t.footer_rights} · Official Portal under Wixtory Software Ecosystem
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .dt-footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .dt-footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
