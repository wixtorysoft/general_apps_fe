"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Gamepad2, Shield, Mail, Globe, ExternalLink } from "lucide-react";
import { useDomainTrackLanguageStore } from "@/store/domain-track-language-store";
import { StoreButtons } from "./StoreButtons";

function TwitterIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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
                { icon: TwitterIcon, href: "https://twitter.com/wixtory", label: "Twitter" },
                { icon: FacebookIcon, href: "https://facebook.com/wixtory", label: "Facebook" },
                { icon: InstagramIcon, href: "https://instagram.com/wixtory", label: "Instagram" },
                { icon: LinkedinIcon, href: "https://linkedin.com/company/wixtory", label: "LinkedIn" },
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
                { label: t.footer_support_developer, href: "/domain-track#developer" },
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
                href="https://www.wixtory.com"
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
                <span>www.wixtory.com</span>
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
