"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Bot,
  Shield,
  ArrowRight,
  Star,
  Download,
  Smartphone,
  CheckCircle2,
  Globe,
  Layers,
  Zap,
  Compass,
  Lock,
  Cpu,
  Code,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export default function HubPortalPage() {
  const { t, language } = useLanguage();
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
      {/* Background ambient lighting */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "450px",
          background: "radial-gradient(ellipse at center, var(--primary-glow) 0%, var(--secondary-glow) 50%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Top Sticky Navbar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
          background: "var(--bg-glass)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border-subtle)",
          boxShadow: "0 4px 24px -2px rgba(0, 0, 0, 0.06)",
        }}
      >
        <div
          className="container"
          style={{
            height: "76px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                boxShadow: "0 8px 24px -6px var(--primary-glow)",
              }}
            >
              <Layers size={22} />
            </div>
            <div>
              <div style={{ fontSize: "19px", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-main)" }}>
                Wixtory <span style={{ color: "var(--primary)" }}>Apps</span>
              </div>
              <div style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Ecosystem Hub
              </div>
            </div>
          </Link>

          {/* Nav Links to separate paths */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <Link
              href="/astrovibe"
              style={{
                fontSize: "14.5px",
                fontWeight: 600,
                color: "var(--text-secondary)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              <Sparkles size={16} color="#8B5CF6" />
              <span>AstroVibe</span>
            </Link>

            <Link
              href="/excuse"
              style={{
                fontSize: "14.5px",
                fontWeight: 600,
                color: "var(--text-secondary)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--secondary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              <Bot size={16} color="#10B981" />
              <span>Excuse AI</span>
            </Link>

            <a
              href="#about"
              style={{
                fontSize: "14.5px",
                fontWeight: 600,
                color: "var(--text-secondary)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              <Compass size={15} color="var(--primary)" />
              <span>{isTr ? "Ekosistem Vizyonu" : "Ecosystem Vision"}</span>
            </a>

            <Link
              href="/privacy-policy"
              style={{
                fontSize: "14.5px",
                fontWeight: 600,
                color: "var(--text-secondary)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Shield size={15} color="var(--primary)" />
              <span>{isTr ? "Gizlilik" : "Privacy"}</span>
            </Link>

            <Link
              href="/developer"
              style={{
                fontSize: "14.5px",
                fontWeight: 600,
                color: "var(--text-secondary)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Code size={15} color="var(--primary)" />
              <span>Developer</span>
            </Link>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "8px" }}>
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, position: "relative", zIndex: 1 }}>
        {/* Grand Hub Hero */}
        <section style={{ padding: "80px 0 50px 0", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <span
              className="pill-badge"
              style={{
                marginBottom: "20px",
              }}
            >
              <Zap size={14} />
              <span>Wixtory Mobile Apps Ecosystem</span>
            </span>

            <h1
              style={{
                fontSize: "clamp(36px, 5.5vw, 62px)",
                fontWeight: 850,
                letterSpacing: "-0.04em",
                lineHeight: "1.1",
                marginBottom: "24px",
                color: "var(--text-main)",
              }}
            >
              {isTr ? "Geleceğin Mobil Deneyimlerini " : "Experience the Future of "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {isTr ? "Keşfedin" : "Mobile Apps"}
              </span>
            </h1>

            <p
              style={{
                fontSize: "19px",
                color: "var(--text-secondary)",
                lineHeight: "1.65",
                maxWidth: "720px",
                margin: "0 auto 40px auto",
              }}
            >
              {isTr ? (
                <>
                  Astrolojiyi TikTok akışında editoryal stile dönüştüren <strong>AstroVibe</strong> ve 
                  hayat kurtaran yapay zeka asistanı <strong>Excuse AI</strong>. İncelemek istediğiniz uygulamayı seçin.
                </>
              ) : (
                <>
                  Transforming astrology into an editorial TikTok-style aesthetic with <strong>AstroVibe</strong> and 
                  an indispensable instant lifesaver AI with <strong>Excuse AI</strong>. Choose an app below to explore.
                </>
              )}
            </p>
          </div>
        </section>

        {/* Flagship App Cards Grid */}
        <section style={{ padding: "20px 0 80px 0" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))",
                gap: "36px",
              }}
            >
              {/* CARD 1: ASTROVIBE */}
              <div
                className="glass-panel"
                style={{
                  padding: "48px 40px",
                  borderRadius: "32px",
                  border: "1.5px solid var(--border-subtle)",
                  background: "var(--bg-card)",
                  boxShadow: "var(--shadow-card)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.borderColor = "#8B5CF6";
                  e.currentTarget.style.boxShadow = "0 30px 60px -15px rgba(139, 92, 246, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                }}
              >
                <div>
                  {/* Top Badge & Rating */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "28px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "18px",
                          background: "linear-gradient(135deg, #8B5CF6, #6366F1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          boxShadow: "0 12px 24px -6px rgba(139, 92, 246, 0.5)",
                        }}
                      >
                        <Sparkles size={28} />
                      </div>
                      <div>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#8B5CF6",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {isTr ? "Astroloji & Protez Tırnak" : "Astrology & Press-On Nails"}
                        </span>
                        <h2
                          style={{
                            fontSize: "30px",
                            fontWeight: 800,
                            letterSpacing: "-0.02em",
                            margin: 0,
                            color: "var(--text-main)",
                          }}
                        >
                          AstroVibe
                        </h2>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "6px 14px",
                        borderRadius: "20px",
                        background: "rgba(245, 158, 11, 0.12)",
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "#F59E0B",
                        fontSize: "13px",
                        fontWeight: 700,
                      }}
                    >
                      <Star size={14} fill="#F59E0B" />
                      <span>4.9 (12.4K)</span>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p
                    style={{
                      fontSize: "16px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.65",
                      marginBottom: "28px",
                    }}
                  >
                    {isTr
                      ? "Burcunuzun elementine uygun protez tırnak tasarımlarını TikTok akışında keşfedin. 3D tarot açılımları ve günlük gezegen transitleriyle enerjinizi anında hizalayın."
                      : "Discover press-on nail styles tailored to your zodiac element via a TikTok feed. Align your energy with 3D tarot card readings and daily planetary transits."}
                  </p>

                  {/* Feature Highlights Pills */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
                    {(isTr
                      ? [
                          "TikTok tarzı dikey protez tırnak akışı ve stilist ipuçları",
                          "3D kart çevirme efektli ve anlık yorumlu 3'lü Tarot açılımı",
                          "Aşk, kariyer ve retro döngülerine özel burç analizleri",
                          "Doğal taş ve mücevher frekans uyum kataloğu",
                        ]
                      : [
                          "TikTok-style vertical nail design feed & stylist tips",
                          "3D card flip effects with instant 3-card Tarot interpretations",
                          "Special horoscope readings for love, career & retro cycles",
                          "Crystal gemstone frequency harmony catalog",
                        ]
                    ).map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <CheckCircle2 size={16} color="#8B5CF6" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: "14px", color: "var(--text-secondary)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <Link
                  href="/astrovibe"
                  className="btn"
                  style={{
                    padding: "16px 28px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "16px",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    boxShadow: "0 12px 28px -6px rgba(139, 92, 246, 0.5)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>{isTr ? "AstroVibe Sayfasına Git" : "Explore AstroVibe"}</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* CARD 2: EXCUSE AI */}
              <div
                className="glass-panel"
                style={{
                  padding: "48px 40px",
                  borderRadius: "32px",
                  border: "1.5px solid var(--border-subtle)",
                  background: "var(--bg-card)",
                  boxShadow: "var(--shadow-card)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.borderColor = "#10B981";
                  e.currentTarget.style.boxShadow = "0 30px 60px -15px rgba(16, 185, 129, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                }}
              >
                <div>
                  {/* Top Badge & Rating */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "28px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "18px",
                          background: "linear-gradient(135deg, #10B981, #059669)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          boxShadow: "0 12px 24px -6px rgba(16, 185, 129, 0.5)",
                        }}
                      >
                        <Bot size={28} />
                      </div>
                      <div>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#10B981",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {isTr ? "Yapay Zeka & Asistan" : "AI & Smart Assistant"}
                        </span>
                        <h2
                          style={{
                            fontSize: "30px",
                            fontWeight: 800,
                            letterSpacing: "-0.02em",
                            margin: 0,
                            color: "var(--text-main)",
                          }}
                        >
                          Excuse AI
                        </h2>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "6px 14px",
                        borderRadius: "20px",
                        background: "rgba(16, 185, 129, 0.12)",
                        border: "1px solid rgba(16, 185, 129, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "#10B981",
                        fontSize: "13px",
                        fontWeight: 700,
                      }}
                    >
                      <Star size={14} fill="#10B981" />
                      <span>4.8 (8.9K)</span>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p
                    style={{
                      fontSize: "16px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.65",
                      marginBottom: "28px",
                    }}
                  >
                    {isTr
                      ? "Uzayan toplantılardan, sıkıcı buluşmalardan veya kriz anlarından sıyrılmak için gerçekçi, inandırıcı ve yapay zeka destekli mazeretler ve sahte çağrılar oluşturun."
                      : "Generate realistic, believable, and AI-powered excuses and fake incoming calls to gracefully slip away from tedious meetings, awkward dates, or crises."}
                  </p>

                  {/* Feature Highlights Pills */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
                    {(isTr
                      ? [
                          "Tek tuşla acil durum ve kurtarıcı sahte çağrı simülatörü",
                          "Kurumsal, aşk, sağlık ve trafik kategorili akıllı mazeret motoru",
                          "Telsiz, siren ve metro arka plan ses efektleriyle desteklenen kanıtlar",
                          "WhatsApp ve e-posta için tek tıkla şablonlu mesaj formatlama",
                        ]
                      : [
                          "One-tap emergency fake incoming call simulator",
                          "Smart excuse engine for corporate, romance, health & traffic",
                          "Audio proof effects: police radio, siren, airport, subway",
                          "One-click formatted templates for WhatsApp and email",
                        ]
                    ).map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: "14px", color: "var(--text-secondary)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <Link
                  href="/excuse"
                  className="btn"
                  style={{
                    padding: "16px 28px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "16px",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    boxShadow: "0 12px 28px -6px rgba(16, 185, 129, 0.5)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>{isTr ? "Excuse AI Sayfasına Git" : "Explore Excuse AI"}</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem About & Vision Section */}
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
              <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 48px auto" }}>
                <span className="pill-badge" style={{ marginBottom: "16px" }}>
                  <Compass size={14} />
                  <span>{isTr ? "Ekosistem Vizyonu & Felsefesi" : "Ecosystem Vision & Philosophy"}</span>
                </span>
                <h2
                  style={{
                    fontSize: "clamp(28px, 4vw, 42px)",
                    fontWeight: 800,
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
                    fontSize: "16.5px",
                    color: "var(--text-secondary)",
                    lineHeight: "1.65",
                    margin: 0,
                  }}
                >
                  {isTr
                    ? "Wixtory ekosistemi; her biri kendi alanında mükemmelleştirilmiş, gereksiz yüklerden arındırılmış ve ortak gizlilik standartlarını paylaşan odaklanmış uygulamalar bütünüdür."
                    : "The Wixtory ecosystem is designed around specialized, zero-bloat mobile apps that master specific lifestyle domains under unified privacy and performance standards."}
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
                    padding: "28px",
                    borderRadius: "22px",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
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
                      ? "Astroloji arayan kullanıcı mazeret motorunun karmaşasıyla, mazeret arayan kullanıcı zodyak detaylarıyla yorulmaz. Her uygulama hedef odaklıdır."
                      : "Users seeking astrological style get pure aesthetics; users seeking emergency excuses get instant resolution without distractions."}
                  </p>
                </div>

                <div
                  style={{
                    padding: "28px",
                    borderRadius: "22px",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
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
                      ? "AstroVibe, Excuse ve eklenecek gelecekteki tüm uygulamalar tek bir 'Sıfır Telemetri & Çevrimdışı Çalışma' ortak gizlilik sözleşmesine tabidir."
                      : "All current and upcoming Wixtory apps adhere to our single, rigorous Zero-Telemetry, offline-first data protection charter."}
                  </p>
                </div>

                <div
                  style={{
                    padding: "28px",
                    borderRadius: "22px",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
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
        <section style={{ padding: "40px 0 80px 0" }}>
          <div className="container">
            <div
              className="glass-panel"
              style={{
                padding: "40px 48px",
                borderRadius: "28px",
                border: "1px solid var(--border-subtle)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "32px",
                textAlign: "center",
              }}
            >
              <div>
                <div style={{ fontSize: "36px", fontWeight: 900, color: "var(--primary)", marginBottom: "8px" }}>
                  {isTr ? "11 Dil" : "11 Languages"}
                </div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-main)" }}>
                  {isTr ? "Global Yerelleştirme" : "Global Localization"}
                </div>
                <div style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px" }}>
                  {isTr ? "TR, EN, DE, FR, ES, IT, PT, RU, JA, ZH, AR desteği" : "Full support for TR, EN, DE, FR, ES, IT, PT, RU, JA, ZH, AR"}
                </div>
              </div>

              <div>
                <div style={{ fontSize: "36px", fontWeight: 900, color: "var(--secondary)", marginBottom: "8px" }}>
                  %100
                </div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-main)" }}>
                  {isTr ? "Gizlilik Odaklı (KVKK/GDPR)" : "Privacy Focused (GDPR/KVKK)"}
                </div>
                <div style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px" }}>
                  {isTr ? "Ortak yüksek standartlı gizlilik politikası" : "Unified enterprise-grade privacy protection"}
                </div>
              </div>

              <div>
                <div style={{ fontSize: "36px", fontWeight: 900, color: "var(--accent)", marginBottom: "8px" }}>
                  60 FPS
                </div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-main)" }}>
                  {isTr ? "Sıfır Gecikme & Akıcı UI" : "Zero Latency & Smooth UI"}
                </div>
                <div style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px" }}>
                  {isTr ? "Entegre MinIO CDN & microservice altyapısı" : "Integrated MinIO CDN & high-speed microservices"}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border-subtle)",
          padding: "40px 0",
          background: "var(--bg-glass)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Layers size={18} color="var(--primary)" />
            <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-main)" }}>Wixtory General Apps Portal</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
            <Link href="/astrovibe" style={{ fontSize: "13.5px", color: "var(--text-secondary)", textDecoration: "none" }}>
              AstroVibe
            </Link>
            <Link href="/excuse" style={{ fontSize: "13.5px", color: "var(--text-secondary)", textDecoration: "none" }}>
              Excuse AI
            </Link>
            <Link href="/privacy-policy" style={{ fontSize: "13.5px", color: "var(--text-secondary)", textDecoration: "none" }}>
              {isTr ? "Gizlilik Sözleşmesi" : "Privacy Policy"}
            </Link>
            <Link href="/cookie-policy" style={{ fontSize: "13.5px", color: "var(--text-secondary)", textDecoration: "none" }}>
              {isTr ? "Çerez Politikası" : "Cookie Policy"}
            </Link>
            <Link href="/kvkk" style={{ fontSize: "13.5px", color: "var(--text-secondary)", textDecoration: "none" }}>
              {isTr ? "KVKK Aydınlatma" : "KVKK Disclosure"}
            </Link>
            <Link href="/developer" style={{ fontSize: "13.5px", color: "var(--text-secondary)", textDecoration: "none" }}>
              Developer
            </Link>
          </div>

          <div style={{ fontSize: "13px", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Wixtory Ecosystem.
          </div>
        </div>
      </footer>
    </div>
  );
}
