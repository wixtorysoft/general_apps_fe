"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { resolveI18n } from "@/i18n";
import { ThemeLogo } from "@/components/ThemeLogo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import {
  Compass,
  ArrowLeft,
  Home,
  Sparkles,
  Gamepad2,
  Globe,
  Moon,
  MessageSquare,
  PlaySquare,
  ArrowUpRight,
} from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const { language } = useLanguage();

  const badgeText = resolveI18n("notFound", "badge", language);
  const titleText = resolveI18n("notFound", "title", language);
  const descText = resolveI18n("notFound", "description", language);
  const homeBtn = resolveI18n("notFound", "home_button", language);
  const backBtn = resolveI18n("notFound", "back_button", language);
  const exploreTitle = resolveI18n("notFound", "explore_apps", language);

  const featuredApps = [
    {
      title: resolveI18n("notFound", "language_box_title", language),
      href: "/language-box",
      category: resolveI18n("notFound", "cat_education", language),
      icon: Gamepad2,
      accent: "#10b981",
      bgLight: "rgba(16, 185, 129, 0.12)",
    },
    {
      title: resolveI18n("notFound", "domain_track_title", language),
      href: "/domain-track",
      category: resolveI18n("notFound", "cat_domain", language),
      icon: Globe,
      accent: "#0284c7",
      bgLight: "rgba(2, 132, 199, 0.12)",
    },
    {
      title: resolveI18n("notFound", "astrovibe_title", language),
      href: "/#astrovibe",
      category: resolveI18n("notFound", "cat_astro", language),
      icon: Moon,
      accent: "#8b5cf6",
      bgLight: "rgba(139, 92, 246, 0.12)",
    },
    {
      title: resolveI18n("notFound", "excuse_title", language),
      href: "/#excuse",
      category: resolveI18n("notFound", "cat_excuse", language),
      icon: MessageSquare,
      accent: "#f59e0b",
      bgLight: "rgba(245, 158, 11, 0.12)",
    },
    {
      title: resolveI18n("notFound", "player_title", language),
      href: "/player",
      category: resolveI18n("notFound", "cat_player", language),
      icon: PlaySquare,
      accent: "#06b6d4",
      bgLight: "rgba(6, 182, 212, 0.12)",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(700px, 90vw)",
          height: "min(700px, 90vw)",
          background: "radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(90px)",
          pointerEvents: "none",
          opacity: 0.8,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, var(--secondary-glow) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
          opacity: 0.6,
        }}
      />

      {/* Modern Top Navigation Bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 900,
          width: "100%",
          background: "var(--bg-glass)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "76px",
          }}
        >
          {/* Official Brand Logo */}
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              transition: "transform 0.2s ease",
            }}
          >
            <ThemeLogo height={34} />
          </Link>

          {/* Quick Header Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <LanguageToggle />
            <ThemeToggle />
            <Link
              href="/"
              className="btn-secondary"
              style={{
                padding: "8px 16px",
                fontSize: "13px",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              <Home size={15} style={{ color: "var(--primary)" }} />
              <span className="hide-mobile">{homeBtn}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main 404 Hero Stage */}
      <main
        className="container"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "50px",
          paddingBottom: "60px",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Top Status Pill */}
        <div style={{ marginBottom: "20px" }}>
          <span
            className="pill-badge"
            style={{
              padding: "7px 18px",
              fontSize: "13px",
              boxShadow: "0 4px 14px -2px var(--primary-glow)",
            }}
          >
            <Compass
              size={15}
              style={{
                animation: "spinSlow 12s linear infinite",
              }}
            />
            <span>{badgeText}</span>
          </span>
        </div>

        {/* 404 Hero Monument */}
        <div
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
            userSelect: "none",
          }}
        >
          <div
            style={{
              fontSize: "clamp(88px, 14vw, 150px)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              fontFamily: "'Space Grotesk', -apple-system, sans-serif",
              background: "linear-gradient(135deg, var(--text-main) 10%, var(--primary) 55%, var(--secondary) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 14px 28px var(--primary-glow))",
            }}
          >
            404
          </div>
          {/* Orbital micro decoration */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <Sparkles
              size={36}
              style={{
                color: "var(--primary)",
                animation: "pulse404 3s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 800,
            marginBottom: "14px",
            maxWidth: "680px",
            letterSpacing: "-0.02em",
            color: "var(--text-main)",
          }}
        >
          {titleText}
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            lineHeight: 1.6,
            maxWidth: "580px",
            margin: "0 auto 32px auto",
            color: "var(--text-secondary)",
          }}
        >
          {descText}
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
            marginBottom: "52px",
          }}
        >
          <Link
            href="/"
            className="btn-primary"
            style={{
              textDecoration: "none",
              padding: "13px 28px",
              borderRadius: "14px",
            }}
          >
            <Home size={17} />
            <span>{homeBtn}</span>
          </Link>

          <button
            onClick={() => router.back()}
            className="btn-secondary"
            style={{
              padding: "13px 24px",
              borderRadius: "14px",
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={16} />
            <span>{backBtn}</span>
          </button>
        </div>

        {/* Popular Apps Quick Access Grid */}
        <div style={{ width: "100%", maxWidth: "840px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                height: "1px",
                flex: 1,
                maxWidth: "60px",
                background: "var(--border-subtle)",
              }}
            />
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
              }}
            >
              {exploreTitle}
            </span>
            <div
              style={{
                height: "1px",
                flex: 1,
                maxWidth: "60px",
                background: "var(--border-subtle)",
              }}
            />
          </div>

          <div className="nf-apps-grid">
            {featuredApps.map((app, idx) => {
              const Icon = app.icon;
              return (
                <Link
                  key={idx}
                  href={app.href}
                  className="glass-card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "18px 22px",
                    borderRadius: "16px",
                    textDecoration: "none",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      minWidth: 0,
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        backgroundColor: app.bgLight,
                        border: `1px solid ${app.accent}33`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: app.accent,
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          color: "var(--text-muted)",
                          marginBottom: "2px",
                        }}
                      >
                        {app.category}
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "var(--text-main)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {app.title}
                      </div>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    style={{
                      color: "var(--text-muted)",
                      flexShrink: 0,
                      marginLeft: "12px",
                      transition: "transform 0.2s ease, color 0.2s ease",
                    }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      {/* Minimal Brand Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border-subtle)",
          padding: "20px 0",
          textAlign: "center",
          fontSize: "12px",
          color: "var(--text-muted)",
        }}
      >
        <div className="container">
          © {new Date().getFullYear()} Wixtory Ecosystem • All rights reserved.
        </div>
      </footer>
    </div>
  );
}
