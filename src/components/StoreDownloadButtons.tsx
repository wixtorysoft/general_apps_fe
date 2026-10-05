"use client";

import React from "react";
import { Apple, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface StoreDownloadButtonsProps {
  appStoreUrl?: string;
  googlePlayUrl?: string;
  layout?: "horizontal" | "vertical";
  showBadge?: boolean;
  badgeLabel?: string;
  className?: string;
  isComingSoon?: boolean;
  comingSoonText?: string;
}

export function GooglePlayIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M325.3 234.3L104.6 13l280.8 161.4-60.1 59.9z"
        fill="#00E676"
      />
      <path
        d="M47 0C44 2 41.5 4.8 40 8.3c-2.3 5.4-3.5 11.2-3.5 17.1v461.2c0 5.9 1.2 11.7 3.5 17.1 1.5 3.5 4 6.3 7 8.3l255.4-256L47 0z"
        fill="#0086F8"
      />
      <path
        d="M325.3 277.7l60.1 59.9L104.6 499 325.3 277.7z"
        fill="#FF3D00"
      />
      <path
        d="M472.2 237.9L385.4 188l-60.1 68 60.1 67.7 86.8-49.9c14.2-8.2 22.8-23.2 22.8-39.7 0-16.5-8.6-31.5-22.8-36.2z"
        fill="#FFD600"
      />
    </svg>
  );
}

export function StoreDownloadButtons({
  appStoreUrl = "#download",
  googlePlayUrl = "#download",
  layout = "horizontal",
  showBadge = false,
  badgeLabel = "DOWNLOAD & CONTACT",
  className = "",
  isComingSoon = false,
  comingSoonText,
}: StoreDownloadButtonsProps) {
  const { t } = useLanguage();
  const isHorizontal = layout === "horizontal";

  return (
    <div
      className={`store-buttons-wrapper ${className}`}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Coming Soon Notice Pill */}
      {isComingSoon && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            borderRadius: "9999px",
            background: "rgba(245, 158, 11, 0.15)",
            border: "1px solid rgba(245, 158, 11, 0.4)",
            color: "#F59E0B",
            fontSize: "12.5px",
            fontWeight: 800,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: "#F59E0B",
              boxShadow: "0 0 8px #F59E0B",
              display: "inline-block",
            }}
          />
          <span>{comingSoonText || t("coming_soon_badge")}</span>
        </div>
      )}
      {/* Optional Cyan Badge matching Reference Image */}
      {showBadge && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#00d2ff",
            fontSize: "13px",
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          <Mail size={18} strokeWidth={2.4} color="#00d2ff" />
          <span>{badgeLabel}</span>
        </div>
      )}

      {/* Buttons Container */}
      <div
        style={{
          display: "flex",
          flexDirection: isHorizontal ? "row" : "column",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "14px",
        }}
      >
        {/* App Store Button */}
        <a
          href={appStoreUrl}
          className="store-btn app-store"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: "11px 22px",
            borderRadius: "16px",
            backgroundColor: "#06090e",
            border: "1.5px solid rgba(255, 255, 255, 0.22)",
            color: "#ffffff",
            textDecoration: "none",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            boxShadow: "0 8px 24px -6px rgba(0, 0, 0, 0.6)",
            minWidth: "205px",
            cursor: "pointer",
            boxSizing: "border-box",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.55)";
            e.currentTarget.style.boxShadow = "0 12px 28px -4px rgba(0, 0, 0, 0.85)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.22)";
            e.currentTarget.style.boxShadow = "0 8px 24px -6px rgba(0, 0, 0, 0.6)";
          }}
        >
          <Apple size={30} color="#ffffff" style={{ flexShrink: 0 }} />
          <div style={{ display: "flex", flexDirection: "column", textAlign: "left", lineHeight: 1.15 }}>
            <span
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "rgba(255, 255, 255, 0.75)",
                textTransform: "uppercase",
                marginBottom: "2px",
              }}
            >
              {isComingSoon ? t("app_store_coming_soon") : "Download on the"}
            </span>
            <span
              style={{
                fontSize: "18px",
                fontWeight: 800,
                letterSpacing: "-0.01em",
                color: "#ffffff",
              }}
            >
              App Store
            </span>
          </div>
        </a>

        {/* Google Play Button */}
        <a
          href={googlePlayUrl}
          className="store-btn google-play"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: "11px 22px",
            borderRadius: "16px",
            backgroundColor: "#06090e",
            border: "1.5px solid rgba(255, 255, 255, 0.22)",
            color: "#ffffff",
            textDecoration: "none",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            boxShadow: "0 8px 24px -6px rgba(0, 0, 0, 0.6)",
            minWidth: "205px",
            cursor: "pointer",
            boxSizing: "border-box",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.55)";
            e.currentTarget.style.boxShadow = "0 12px 28px -4px rgba(0, 0, 0, 0.85)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.22)";
            e.currentTarget.style.boxShadow = "0 8px 24px -6px rgba(0, 0, 0, 0.6)";
          }}
        >
          <GooglePlayIcon size={26} />
          <div style={{ display: "flex", flexDirection: "column", textAlign: "left", lineHeight: 1.15 }}>
            <span
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: isComingSoon ? "#F59E0B" : "rgba(255, 255, 255, 0.75)",
                textTransform: "uppercase",
                marginBottom: "2px",
              }}
            >
              {isComingSoon ? t("google_play_coming_soon") : "Get it on"}
            </span>
            <span
              style={{
                fontSize: "18px",
                fontWeight: 800,
                letterSpacing: "-0.01em",
                color: "#ffffff",
              }}
            >
              Google Play
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
