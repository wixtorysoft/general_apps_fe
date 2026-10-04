"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Bot,
  Shield,
  ArrowRight,
  Star,
  CheckCircle2,
  Layers,
  Zap,
  Compass,
  Lock,
  Cpu,
  Code,
  Menu,
  X,
  ChevronRight,
  Globe,
  ExternalLink,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";

export default function HubPortalPage() {
  const { language } = useLanguage();
  const isTr = language === "tr";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        color: "var(--text-main)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflowX: "clip",
      }}
    >
      {/* Ambient Chromatic Void Glows */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-180px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1000px",
          maxWidth: "100vw",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.22) 0%, rgba(6, 182, 212, 0.14) 45%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "800px",
          right: "-100px",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Shared Ecosystem Navbar */}
      <MainNavbar />

      {/* Main Content */}
      <main style={{ flex: 1, position: "relative", zIndex: 1 }}>
        {/* Grand Hero Section */}
        <section style={{ padding: "80px 0 60px 0", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "920px" }}>
            {/* Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 18px",
                borderRadius: "9999px",
                background: "rgba(139, 92, 246, 0.12)",
                border: "1px solid rgba(139, 92, 246, 0.35)",
                color: "#8B5CF6",
                fontSize: "12.5px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "24px",
                boxShadow: "0 0 24px -4px rgba(139, 92, 246, 0.25)",
              }}
            >
              <Sparkles size={15} />
              <span>Wixtory Mobile Apps Ecosystem</span>
            </div>

            {/* Display Headline */}
            <h1
              style={{
                fontSize: "clamp(34px, 5.5vw, 62px)",
                fontWeight: 850,
                letterSpacing: "-0.035em",
                lineHeight: "1.12",
                marginBottom: "22px",
                color: "var(--text-main)",
              }}
            >
              {isTr ? "Geleceğin Mobil Deneyimlerini " : "Experience the Future of "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #3B82F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {isTr ? "Keşfedin" : "Mobile Apps"}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 19px)",
                color: "var(--text-secondary)",
                lineHeight: "1.65",
                maxWidth: "760px",
                margin: "0 auto 36px auto",
              }}
            >
              {isTr ? (
                <>
                  Oyun temelli çok dilli öğrenme platformu <strong>Wixtory Language Box</strong>, 
                  gerçek zamanlı alan adı takip asistanı <strong>Wixtory: Domain Track</strong>, 
                  astrolojiyi editoryal stile dönüştüren <strong>AstroVibe</strong> ve 
                  zeki yapay zeka asistanı <strong>Excuse AI</strong>. İncelemek istediğiniz uygulamayı seçin.
                </>
              ) : (
                <>
                  Gamified multilingual learning with <strong>Wixtory Language Box</strong>, 
                  real-time domain availability tracker with <strong>Wixtory: Domain Track</strong>, 
                  editorial astrological lifestyle in <strong>AstroVibe</strong>, and 
                  smart assistant <strong>Excuse AI</strong>. Choose an app below to explore.
                </>
              )}
            </p>

            {/* Hero Interactive CTAs */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "48px",
              }}
            >
              <a
                href="#apps"
                className="btn-cosmic"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 30px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 10px 28px -6px rgba(16, 185, 129, 0.55)",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 14px 36px -4px rgba(16, 185, 129, 0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 10px 28px -6px rgba(16, 185, 129, 0.55)";
                }}
              >
                <span>{isTr ? "Uygulamaları Keşfet" : "Explore Applications"}</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="#about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 26px",
                  borderRadius: "16px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-main)",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "var(--shadow-card)",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor = "var(--border-active)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                }}
              >
                <Compass size={17} color="var(--primary)" />
                <span>{isTr ? "Ekosistem Vizyonu" : "Ecosystem Vision"}</span>
              </a>
            </div>

            {/* Quick Metrics / Value Badges */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "14px",
                maxWidth: "840px",
                margin: "0 auto",
              }}
            >
              {[
                {
                  icon: <Zap size={16} color="#10B981" />,
                  title: isTr ? "4 Amiral Uygulama" : "4 Flagship Apps",
                  desc: isTr ? "Tek ekosistem, sıfır karmaşa" : "Unified ecosystem, zero bloat",
                },
                {
                  icon: <Globe size={16} color="#06B6D4" />,
                  title: isTr ? "11 Küresel Dil" : "11 Global Languages",
                  desc: isTr ? "Eksiksiz yerelleştirme" : "Full native localization",
                },
                {
                  icon: <Shield size={16} color="#10B981" />,
                  title: isTr ? "%100 Cihaz İçi Gizlilik" : "100% On-Device Privacy",
                  desc: isTr ? "Sıfır veri satışı & KVKK" : "Zero telemetry & GDPR",
                },
                {
                  icon: <Cpu size={16} color="#F59E0B" />,
                  title: isTr ? "60 FPS Flutter & CDN" : "60 FPS Flutter & CDN",
                  desc: isTr ? "MinIO yüksek hız mimarisi" : "High-speed MinIO S3 edge",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "16px",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    textAlign: "left",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "var(--badge-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-main)", lineHeight: 1.2 }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flagship App Cards Grid */}
        <section id="apps" style={{ padding: "40px 0 80px 0" }}>
          <div className="container">
            <div
              style={{
                textAlign: "center",
                marginBottom: "48px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 800,
                  color: "#8B5CF6",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "8px",
                }}
              >
                {isTr ? "AMİRAL GEMİSİ UYGULAMALAR" : "FLAGSHIP MOBILE PRODUCTS"}
              </div>
              <h2
                style={{
                  fontSize: "clamp(26px, 3.5vw, 40px)",
                  fontWeight: 850,
                  letterSpacing: "-0.03em",
                  color: "var(--text-main)",
                  margin: 0,
                }}
              >
                {isTr ? "Özenle Tasarlanmış Dijital Dünyalar" : "Crafted for Everyday Excellence"}
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                gap: "32px",
              }}
            >
              {/* CARD 1: WIXTORY LANGUAGE BOX (#1 RANKED) */}
              <div
                className="glass-panel"
                style={{
                  padding: "44px 36px",
                  borderRadius: "28px",
                  border: "1.5px solid rgba(16, 185, 129, 0.45)",
                  background: "var(--bg-card)",
                  boxShadow: "0 20px 50px -15px rgba(16, 185, 129, 0.25)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "#10B981";
                  e.currentTarget.style.boxShadow = "0 30px 60px -15px rgba(16, 185, 129, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.45)";
                  e.currentTarget.style.boxShadow = "0 20px 50px -15px rgba(16, 185, 129, 0.25)";
                }}
              >
                <div>
                  {/* Top Header Row: Logo + Title + Rating */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "24px",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "16px",
                          background: "linear-gradient(135deg, #06281e 0%, #0d4637 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1.5px solid rgba(16, 185, 129, 0.5)",
                          boxShadow: "0 10px 24px -4px rgba(16, 185, 129, 0.5)",
                          flexShrink: 0,
                          overflow: "hidden",
                          padding: "6px",
                        }}
                      >
                        <Image
                          src="/apps/language-box-icon.png"
                          alt="Wixtory Language Box Logo"
                          width={44}
                          height={44}
                          style={{ objectFit: "contain", borderRadius: "10px" }}
                        />
                      </div>

                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span
                            style={{
                              fontSize: "11px",
                              fontWeight: 800,
                              color: "#10B981",
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                            }}
                          >
                            {isTr ? "EĞİTİM & ÇOK DİLLİ" : "EDUCATION & GAMING"}
                          </span>
                          <span
                            style={{
                              fontSize: "10px",
                              fontWeight: 800,
                              color: "#fff",
                              background: "linear-gradient(135deg, #10B981, #06B6D4)",
                              padding: "2px 8px",
                              borderRadius: "9999px",
                            }}
                          >
                            {isTr ? "#1 SIRADA" : "#1 RANKED"}
                          </span>
                        </div>
                        <h3
                          style={{
                            fontSize: "26px",
                            fontWeight: 850,
                            letterSpacing: "-0.02em",
                            margin: "4px 0 0 0",
                            color: "var(--text-main)",
                          }}
                        >
                          Language Box
                        </h3>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "6px 12px",
                        borderRadius: "20px",
                        background: "rgba(245, 158, 11, 0.12)",
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "#F59E0B",
                        fontSize: "12.5px",
                        fontWeight: 700,
                      }}
                    >
                      <Star size={13} fill="#F59E0B" />
                      <span>4.9 (3.4K)</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.65",
                      marginBottom: "24px",
                    }}
                  >
                    {isTr
                      ? "Sentence Builder, Word Matrix, Word Compass gibi 6 eğlenceli oyunla yeni dilleri keşfedin. Üyeliksiz, %100 yerel cihaz önbelleğinde çalışan güvenli öğrenme deneyimi."
                      : "Master new languages through 6 engaging interactive games. Sentence Builder, Word Matrix, Word Compass with 100% on-device local cache and zero signup."}
                  </p>

                  {/* Bullet Highlights */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                    {(isTr
                      ? [
                          "6 Özgün Mini Oyun (Sentence Builder, Word Matrix, Word Compass)",
                          "Sıfır üyelik & e-posta: Tamamen cihazınızın önbelleğinde saklanır",
                          "İstediğiniz an 'Önbelleği Temizle' butonu ile tam kullanıcı kontrolü",
                          "10+ küresel dilde sesli telaffuz ve zümrüt yeşili modern arayüz",
                        ]
                      : [
                          "6 Unique Interactive Games (Sentence Builder, Word Matrix, Compass)",
                          "Zero signup & no personal data: Strictly in on-device local cache",
                          "Full user control anytime with instant 'Clear Cache' button",
                          "Native pronunciation audio across 10+ global languages",
                        ]
                    ).map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.45 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <Link
                  href="/language-box"
                  style={{
                    padding: "14px 24px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "15px",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    boxShadow: "0 10px 24px -4px rgba(16, 185, 129, 0.45)",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1.0)")}
                >
                  <span>{isTr ? "Language Box Sayfasına Git" : "Explore Language Box"}</span>
                  <ArrowRight size={17} />
                </Link>
              </div>

              {/* CARD 2: DOMAIN TRACK */}
              <div
                className="glass-panel"
                style={{
                  padding: "44px 36px",
                  borderRadius: "28px",
                  border: "1.5px solid rgba(139, 92, 246, 0.45)",
                  background: "var(--bg-card)",
                  boxShadow: "0 20px 50px -15px rgba(139, 92, 246, 0.22)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "#8B5CF6";
                  e.currentTarget.style.boxShadow = "0 30px 60px -15px rgba(139, 92, 246, 0.38)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.45)";
                  e.currentTarget.style.boxShadow = "0 20px 50px -15px rgba(139, 92, 246, 0.22)";
                }}
              >
                <div>
                  {/* Top Header Row: Logo + Title + Rating */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "24px",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "16px",
                          background: "linear-gradient(135deg, #0F1E2B 0%, #1A1A2E 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1.5px solid rgba(139, 92, 246, 0.5)",
                          boxShadow: "0 10px 24px -4px rgba(139, 92, 246, 0.5)",
                          flexShrink: 0,
                          overflow: "hidden",
                          padding: "6px",
                        }}
                      >
                        <Image
                          src="/domain-track-logo.png"
                          alt="Wixtory: Domain Track Logo"
                          width={44}
                          height={44}
                          style={{ objectFit: "contain", borderRadius: "10px" }}
                        />
                      </div>

                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span
                            style={{
                              fontSize: "11px",
                              fontWeight: 800,
                              color: "#8B5CF6",
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                            }}
                          >
                            {isTr ? "ALAN ADI & WHOIS" : "DOMAIN & WHOIS TOOL"}
                          </span>
                          <span
                            style={{
                              fontSize: "10px",
                              fontWeight: 800,
                              color: "#fff",
                              background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
                              padding: "2px 8px",
                              borderRadius: "9999px",
                            }}
                          >
                            {isTr ? "ÖNE ÇIKAN" : "FEATURED"}
                          </span>
                        </div>
                        <h3
                          style={{
                            fontSize: "26px",
                            fontWeight: 850,
                            letterSpacing: "-0.02em",
                            margin: "4px 0 0 0",
                            color: "var(--text-main)",
                          }}
                        >
                          Domain Track
                        </h3>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "6px 12px",
                        borderRadius: "20px",
                        background: "rgba(245, 158, 11, 0.12)",
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "#F59E0B",
                        fontSize: "12.5px",
                        fontWeight: 700,
                      }}
                    >
                      <Star size={13} fill="#F59E0B" />
                      <span>4.9 (2.8K)</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.65",
                      marginBottom: "24px",
                    }}
                  >
                    {isTr
                      ? "Yüzlerce uzantıda anlık alan adı sorgulayın. Favorilerinizi ve geçmişinizi sıfır veri toplama güvencesiyle doğrudan cihazınızın önbelleğinde saklayın."
                      : "Search real-time domain availability across hundreds of extensions. Keep your favorites and history safely in on-device cache with zero telemetry."}
                  </p>

                  {/* Bullet Highlights */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                    {(isTr
                      ? [
                          "Gerçek zamanlı çoklu TLD (.com, .net, .org, .io, .ai) sorgulama",
                          "Tek dokunuşla kişisel portföy ve yıldızlı favori alan adları",
                          "Cihaz içi önbellek & 'Önbelleği Temizle' ile tam kullanıcı kontrolü",
                          "10 küresel dilde eksiksiz yerelleştirme ve gece mavisi arayüz",
                        ]
                      : [
                          "Real-time multi-TLD (.com, .net, .org, .io, .ai) instant check",
                          "One-tap saved portfolio & starred favorite domain tracking",
                          "On-device local caching & full control with 'Clear Cache' button",
                          "Full localization across 10 global languages with deep blue dark UI",
                        ]
                    ).map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <CheckCircle2 size={16} color="#8B5CF6" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.45 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <Link
                  href="/domain-track"
                  style={{
                    padding: "14px 24px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "15px",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    boxShadow: "0 10px 24px -4px rgba(139, 92, 246, 0.45)",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1.0)")}
                >
                  <span>{isTr ? "Domain Track Sayfasına Git" : "Explore Domain Track"}</span>
                  <ArrowRight size={17} />
                </Link>
              </div>

              {/* CARD 2: ASTROVIBE */}
              <div
                className="glass-panel"
                style={{
                  padding: "44px 36px",
                  borderRadius: "28px",
                  border: "1.5px solid rgba(99, 102, 241, 0.35)",
                  background: "var(--bg-card)",
                  boxShadow: "0 20px 50px -15px rgba(99, 102, 241, 0.18)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "#6366F1";
                  e.currentTarget.style.boxShadow = "0 30px 60px -15px rgba(99, 102, 241, 0.32)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.35)";
                  e.currentTarget.style.boxShadow = "0 20px 50px -15px rgba(99, 102, 241, 0.18)";
                }}
              >
                <div>
                  {/* Top Header Row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "24px",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "16px",
                          background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          boxShadow: "0 10px 24px -4px rgba(99, 102, 241, 0.5)",
                          flexShrink: 0,
                        }}
                      >
                        <Sparkles size={28} />
                      </div>

                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span
                            style={{
                              fontSize: "11px",
                              fontWeight: 800,
                              color: "#6366F1",
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                            }}
                          >
                            {isTr ? "ASTROLOJİ & YAŞAM" : "ASTROLOGY & LIFESTYLE"}
                          </span>
                        </div>
                        <h3
                          style={{
                            fontSize: "26px",
                            fontWeight: 850,
                            letterSpacing: "-0.02em",
                            margin: "4px 0 0 0",
                            color: "var(--text-main)",
                          }}
                        >
                          AstroVibe
                        </h3>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "6px 12px",
                        borderRadius: "20px",
                        background: "rgba(245, 158, 11, 0.12)",
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "#F59E0B",
                        fontSize: "12.5px",
                        fontWeight: 700,
                      }}
                    >
                      <Star size={13} fill="#F59E0B" />
                      <span>4.8 (12K+)</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.65",
                      marginBottom: "24px",
                    }}
                  >
                    {isTr
                      ? "Zodyak yorumlarını dikey video akışında editoryal estetiğe dönüştürün. 3D interaktif tarot açılımları ve burcunuza özel yapay zeka tırnak sanatı keşfedin."
                      : "Transform cosmic astrology into an editorial TikTok-style video feed. Experience interactive 3D tarot cards and AI-powered zodiac nail art catalogues."}
                  </p>

                  {/* Bullet Highlights */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                    {(isTr
                      ? [
                          "7 zaman periyoduyla (şimdi, gece, yarın, haftalık, aylık) burç yorumu",
                          "3D fizik motoruyla interaktif tarot kart çekimleri ve mistik açılımlar",
                          "Burca ve enerjiye özel protez tırnak, takı ve estetik stil kataloğu",
                          "Canlı animasyonlu reels akışı ve dikey TikTok dinamiklerinde arayüz",
                        ]
                      : [
                          "7-period zodiac forecasts (now, tonight, tomorrow, weekly, monthly)",
                          "3D physics-based interactive tarot card pulls and mystical insights",
                          "Zodiac-aligned press-on nails, jewelry, and cosmic beauty catalog",
                          "Immersive vertical TikTok-style reels UI with buttery 60 FPS fluidity",
                        ]
                    ).map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <CheckCircle2 size={16} color="#6366F1" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.45 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <Link
                  href="/astrovibe"
                  style={{
                    padding: "14px 24px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "15px",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    boxShadow: "0 10px 24px -4px rgba(99, 102, 241, 0.45)",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1.0)")}
                >
                  <span>{isTr ? "AstroVibe Sayfasına Git" : "Explore AstroVibe"}</span>
                  <ArrowRight size={17} />
                </Link>
              </div>

              {/* CARD 3: EXCUSE AI */}
              <div
                className="glass-panel"
                style={{
                  padding: "44px 36px",
                  borderRadius: "28px",
                  border: "1.5px solid rgba(16, 185, 129, 0.35)",
                  background: "var(--bg-card)",
                  boxShadow: "0 20px 50px -15px rgba(16, 185, 129, 0.18)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "#10B981";
                  e.currentTarget.style.boxShadow = "0 30px 60px -15px rgba(16, 185, 129, 0.32)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.35)";
                  e.currentTarget.style.boxShadow = "0 20px 50px -15px rgba(16, 185, 129, 0.18)";
                }}
              >
                <div>
                  {/* Top Header Row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "24px",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "16px",
                          background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          boxShadow: "0 10px 24px -4px rgba(16, 185, 129, 0.5)",
                          flexShrink: 0,
                        }}
                      >
                        <Bot size={28} />
                      </div>

                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span
                            style={{
                              fontSize: "11px",
                              fontWeight: 800,
                              color: "#10B981",
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                            }}
                          >
                            {isTr ? "YAPAY ZEKA ASİSTANI" : "AI LIFESAVER ASSISTANT"}
                          </span>
                        </div>
                        <h3
                          style={{
                            fontSize: "26px",
                            fontWeight: 850,
                            letterSpacing: "-0.02em",
                            margin: "4px 0 0 0",
                            color: "var(--text-main)",
                          }}
                        >
                          Excuse AI
                        </h3>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "6px 12px",
                        borderRadius: "20px",
                        background: "rgba(245, 158, 11, 0.12)",
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "#F59E0B",
                        fontSize: "12.5px",
                        fontWeight: 700,
                      }}
                    >
                      <Star size={13} fill="#F59E0B" />
                      <span>4.8 (8.5K+)</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.65",
                      marginBottom: "24px",
                    }}
                  >
                    {isTr
                      ? "Beklenmedik durumlardan zahmetsizce sıyrılın. Zeki mazeret üretimi, profesyonel durum açıklamaları ve acil durum sahte arama kurtarıcısı parmaklarınızın ucunda."
                      : "Effortlessly handle awkward social encounters. Smart excuse generation, professional wording, and emergency simulated incoming phone calls."}
                  </p>

                  {/* Bullet Highlights */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                    {(isTr
                      ? [
                          "İkna edici ve duruma özel yapay zeka üretimi profesyonel bahaneler",
                          "Zorlu ortamlardan ayrılmak için gerçekçi sahte gelen arama simülatörü",
                          "4 temel kategori (İş hayatı, Aile/Ev, Sosyal ortamlar, Romantik ilişkiler)",
                          "Tek dokunuşla panoya kopyalama, WhatsApp ve mesaj paylaşım desteği",
                        ]
                      : [
                          "Plausible & context-aware AI-generated witty and professional excuses",
                          "Emergency simulated fake phone calls with customizable timer triggers",
                          "4 versatile life categories (Work, Family/Home, Social, Romantic)",
                          "One-tap clipboard copy, WhatsApp, and instant messenger sharing",
                        ]
                    ).map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.45 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <Link
                  href="/excuse"
                  style={{
                    padding: "14px 24px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "15px",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    boxShadow: "0 10px 24px -4px rgba(16, 185, 129, 0.45)",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1.0)")}
                >
                  <span>{isTr ? "Excuse AI Sayfasına Git" : "Explore Excuse AI"}</span>
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Philosophy & Architecture Section */}
        <section id="about" style={{ padding: "40px 0 80px 0" }}>
          <div className="container">
            <div
              className="glass-panel"
              style={{
                padding: "clamp(36px, 5vw, 64px)",
                borderRadius: "32px",
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-card)",
                boxShadow: "var(--shadow-card)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 48px auto" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 16px",
                    borderRadius: "9999px",
                    background: "var(--badge-bg)",
                    border: "1px solid var(--border-active)",
                    color: "var(--primary)",
                    fontSize: "12px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "16px",
                  }}
                >
                  <Compass size={14} />
                  <span>{isTr ? "Ekosistem Vizyonu & Felsefesi" : "Ecosystem Vision & Philosophy"}</span>
                </div>

                <h2
                  style={{
                    fontSize: "clamp(26px, 4vw, 40px)",
                    fontWeight: 850,
                    letterSpacing: "-0.03em",
                    lineHeight: "1.2",
                    marginBottom: "16px",
                  }}
                >
                  {isTr
                    ? "Neden Tek Bir 'Süper Uygulama' Yerine Mikro Hedefli Mobil Deneyimler?"
                    : "Why Specialized Mobile Apps Instead of Bloated Super-Apps?"}
                </h2>

                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--text-secondary)",
                    lineHeight: "1.65",
                    margin: 0,
                  }}
                >
                  {isTr
                    ? "Wixtory ekosistemi; her biri kendi alanında mükemmelleştirilmiş, gereksiz yüklerden arındırılmış ve ortak gizlilik standartlarını paylaşan odaklanmış uygulamalar bütünüdür."
                    : "The Wixtory ecosystem is built around dedicated, zero-bloat mobile apps that master specific lifestyle domains under unified privacy and performance standards."}
                </p>
              </div>

              {/* 3 Pillars Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "24px",
                }}
              >
                <div
                  style={{
                    padding: "30px",
                    borderRadius: "22px",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(2, 132, 199, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                      marginBottom: "16px",
                    }}
                  >
                    <Zap size={22} />
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px", color: "var(--text-main)" }}>
                    {isTr ? "Sıfır Şişkinlik & Saf Deneyim" : "Zero Bloat & Pure Focus"}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6", margin: 0 }}>
                    {isTr
                      ? "Astroloji arayan kullanıcı mazeret motorunun karmaşasıyla, alan adı arayan kullanıcı zodyak detaylarıyla yorulmaz. Her uygulama hedef odaklıdır."
                      : "Users seeking astrological aesthetics aren't burdened by excuse generators, and domain searchers get pure speed without distraction."}
                  </p>
                </div>

                <div
                  style={{
                    padding: "30px",
                    borderRadius: "22px",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(16, 185, 129, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#10B981",
                      marginBottom: "16px",
                    }}
                  >
                    <Lock size={22} />
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px", color: "var(--text-main)" }}>
                    {isTr ? "Birleşik Katı Gizlilik" : "Unified Privacy Standard"}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6", margin: 0 }}>
                    {isTr
                      ? "Domain Track, AstroVibe, Excuse ve eklenecek gelecekteki tüm uygulamalar tek bir 'Sıfır Telemetri & Çevrimdışı Öncelik' ortak gizlilik sözleşmesine tabidir."
                      : "All current and upcoming Wixtory apps adhere to our single, rigorous Zero-Telemetry, offline-first data protection charter."}
                  </p>
                </div>

                <div
                  style={{
                    padding: "30px",
                    borderRadius: "22px",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(139, 92, 246, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#8B5CF6",
                      marginBottom: "16px",
                    }}
                  >
                    <Cpu size={22} />
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px", color: "var(--text-main)" }}>
                    {isTr ? "60 FPS Flutter & MinIO CDN" : "60 FPS Flutter & MinIO CDN"}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6", margin: 0 }}>
                    {isTr
                      ? "Özel nesne depolama kümeleri (MinIO S3), Edge CDN ve GPU hızlandırmalı Flutter mimarisiyle sıfır takılma ile akıcı deneyim."
                      : "Private MinIO S3 object storage, Edge CDN, and hardware-accelerated Flutter runtime ensure lightning-fast UI responsiveness."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Infrastructure Banner */}
        <section style={{ padding: "0 0 80px 0" }}>
          <div className="container">
            <div
              className="glass-panel"
              style={{
                padding: "36px 44px",
                borderRadius: "24px",
                border: "1px solid var(--border-subtle)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "32px",
                textAlign: "center",
              }}
            >
              <div>
                <div style={{ fontSize: "36px", fontWeight: 900, color: "var(--primary)", marginBottom: "6px" }}>
                  {isTr ? "11 Dil" : "11 Languages"}
                </div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-main)" }}>
                  {isTr ? "Global Yerelleştirme" : "Global Localization"}
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px" }}>
                  {isTr ? "TR, EN, DE, FR, ES, IT, PT, RU, JA, ZH, AR" : "Full support for TR, EN, DE, FR, ES, IT, PT, RU, JA, ZH, AR"}
                </div>
              </div>

              <div>
                <div style={{ fontSize: "36px", fontWeight: 900, color: "var(--secondary)", marginBottom: "6px" }}>
                  %100
                </div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-main)" }}>
                  {isTr ? "Gizlilik Odaklı (KVKK/GDPR)" : "Privacy Focused (GDPR/KVKK)"}
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px" }}>
                  {isTr ? "Ortak yüksek standartlı gizlilik politikası" : "Unified enterprise-grade privacy protection"}
                </div>
              </div>

              <div>
                <div style={{ fontSize: "36px", fontWeight: 900, color: "#8B5CF6", marginBottom: "6px" }}>
                  60 FPS
                </div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-main)" }}>
                  {isTr ? "Sıfır Gecikme & Akıcı UI" : "Zero Latency & Smooth UI"}
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px" }}>
                  {isTr ? "MinIO CDN & Mikroservis mimarisi" : "MinIO CDN & high-speed microservices"}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Ecosystem Footer */}
      <MainFooter />
    </div>
  );
}
