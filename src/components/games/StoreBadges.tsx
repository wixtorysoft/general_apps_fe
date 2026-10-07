"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { resolveI18n } from "@/i18n";

export function AppleStoreBadge({ href = "#" }: { href?: string }) {
  const { language } = useLanguage();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="game-store-badge"
      aria-label="Download on the App Store"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        background: "#000000",
        color: "#ffffff",
        border: "1px solid rgba(255, 255, 255, 0.28)",
        borderRadius: "10px",
        padding: "7px 16px",
        textDecoration: "none",
        transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        height: "46px",
        boxSizing: "border-box",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.6)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.28)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Apple SVG */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#ffffff"
        style={{ flexShrink: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", textAlign: "left", lineHeight: 1 }}>
        <span style={{ fontSize: "9.5px", letterSpacing: "0.02em", color: "rgba(255, 255, 255, 0.8)", marginBottom: "2px" }}>
          {resolveI18n("common", "download_on_app_store", language)}
        </span>
        <span style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "-0.01em", color: "#ffffff", fontFamily: "system-ui, -apple-system, sans-serif" }}>
          App Store
        </span>
      </div>
    </a>
  );
}

export function GooglePlayBadge({ href = "#" }: { href?: string }) {
  const { language } = useLanguage();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="game-store-badge"
      aria-label="Get it on Google Play"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        background: "#000000",
        color: "#ffffff",
        border: "1px solid rgba(255, 255, 255, 0.28)",
        borderRadius: "10px",
        padding: "7px 16px",
        textDecoration: "none",
        transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        height: "46px",
        boxSizing: "border-box",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.6)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.28)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Google Play Triangle SVG */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        style={{ flexShrink: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.609 1.814L13.792 12.027L3.61 22.186C3.471 22.076 3.384 21.907 3.384 21.713V2.287C3.384 2.093 3.471 1.924 3.609 1.814Z" fill="#2196F3" />
        <path d="M17.092 8.65L14.073 11.673L13.792 11.392V12.027V12.662L14.073 12.381L17.092 15.404L17.331 15.266L20.923 13.187C21.792 12.678 21.792 11.376 20.923 10.867L17.331 8.788L17.092 8.65Z" fill="#FFC107" />
        <path d="M13.792 12.027L3.609 22.186C3.703 22.263 3.827 22.31 3.967 22.31C4.186 22.31 4.354 22.213 4.517 22.119L14.073 12.381L13.792 12.027Z" fill="#0C9D58" />
        <path d="M3.967 1.744C3.827 1.744 3.703 1.791 3.609 1.868L13.792 12.027L14.073 11.673L4.517 1.935C4.354 1.841 4.186 1.744 3.967 1.744Z" fill="#F44336" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", textAlign: "left", lineHeight: 1 }}>
        <span style={{ fontSize: "9px", letterSpacing: "0.05em", color: "rgba(255, 255, 255, 0.8)", textTransform: "uppercase", marginBottom: "2px" }}>
          {resolveI18n("common", "get_it_on_google_play", language)}
        </span>
        <span style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "-0.01em", color: "#ffffff", fontFamily: "system-ui, -apple-system, sans-serif" }}>
          Google Play
        </span>
      </div>
    </a>
  );
}

export function StoreBadgesRow({
  appleUrl = "#",
  googleUrl = "#",
  detailUrl,
  detailText,
  isComingSoon = false,
  comingSoonText,
}: {
  appleUrl?: string;
  googleUrl?: string;
  detailUrl?: string;
  detailText?: string;
  isComingSoon?: boolean;
  comingSoonText?: string;
}) {
  const { t } = useLanguage();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
      {isComingSoon && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "5px 14px",
            borderRadius: "9999px",
            background: "rgba(245, 158, 11, 0.12)",
            border: "1px solid rgba(245, 158, 11, 0.35)",
            color: "#F59E0B",
            fontSize: "12.5px",
            fontWeight: 750,
            width: "fit-content",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: "#F59E0B",
              display: "inline-block",
              boxShadow: "0 0 8px #F59E0B",
            }}
          />
          <span>{comingSoonText || t("coming_soon_stores")}</span>
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
        <AppleStoreBadge href={appleUrl} />
        <GooglePlayBadge href={googleUrl} />
        {detailUrl && (
          <Link
            href={detailUrl}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              height: "46px",
              padding: "0 18px",
              borderRadius: "10px",
              background: "var(--bg-glass)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-main)",
              fontSize: "13.5px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-active)";
              e.currentTarget.style.color = "var(--primary)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-subtle)";
              e.currentTarget.style.color = "var(--text-main)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>{detailText || t("explore_app")}</span>
            <ArrowRight size={15} />
          </Link>
        )}
      </div>
    </div>
  );
}
