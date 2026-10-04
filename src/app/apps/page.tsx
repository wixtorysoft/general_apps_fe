"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Sparkles, Shield, Zap } from "lucide-react";
import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";
import { StoreBadgesRow } from "@/components/games/StoreBadges";
import { useLanguage } from "@/context/LanguageContext";

export default function AppsPage() {
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
      <MainNavbar />

      <main style={{ flex: 1, paddingBottom: "100px" }}>
        {/* Header Hero */}
        <section
          style={{
            padding: "60px 0 40px 0",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div className="container" style={{ maxWidth: "840px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "9999px",
                background: "rgba(139, 92, 246, 0.12)",
                border: "1px solid rgba(139, 92, 246, 0.35)",
                color: "#8B5CF6",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              <Layers size={15} />
              <span>Wixtory Mobile Apps</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 54px)",
                fontWeight: 850,
                letterSpacing: "-0.03em",
                lineHeight: "1.15",
                marginBottom: "16px",
                color: "var(--text-main)",
              }}
            >
              {isTr ? "Özenle Tasarlanmış " : "Handcrafted "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 60%, #3B82F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {isTr ? "Mobil Uygulamalarımız" : "Mobile Applications"}
              </span>
            </h1>

            <p
              style={{
                fontSize: "17px",
                color: "var(--text-secondary)",
                lineHeight: "1.65",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              {isTr
                ? "Şişirilmiş ve gizliliği ihlal eden monolitik süper uygulamalar yerine; her biri kendi alanında mükemmelleştirilmiş mikro-odaklı mobil araçlar. Cihaz içi yerel önbellekleme ve 60 FPS akıcılık."
                : "Instead of bloated super-apps, we craft micro-focused digital utilities perfected for their specific domains. 100% on-device privacy and buttery 60 FPS performance."}
            </p>
          </div>
        </section>

        {/* Applications Showcase Sections (Alternating Layout) */}
        <section style={{ padding: "20px 0" }}>
          <div className="container" style={{ maxWidth: "1140px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
              {/* APP 1: WIXTORY LANGUAGE BOX (Icon Left, Text Right) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "clamp(32px, 5vw, 70px)",
                  alignItems: "center",
                  padding: "20px 0",
                }}
              >
                {/* Left: App Icon */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "340px",
                      aspectRatio: "1 / 1",
                      borderRadius: "48px",
                      overflow: "hidden",
                      boxShadow: "0 24px 56px -12px rgba(16, 185, 129, 0.35)",
                      border: "2px solid rgba(16, 185, 129, 0.4)",
                      background: "linear-gradient(135deg, #06281e 0%, #0d4637 100%)",
                      position: "relative",
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <Image
                      src="/apps/language-box-icon.png"
                      alt="Wixtory Language Box App Icon"
                      width={300}
                      height={300}
                      priority
                      style={{ objectFit: "contain", borderRadius: "32px" }}
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 850,
                        color: "#10B981",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {isTr ? "EĞİTİM & ÇOK DİLLİ ÖĞRENME" : "EDUCATION & LANGUAGE GAMING"}
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 850,
                        color: "#fff",
                        background: "linear-gradient(135deg, #10B981, #06B6D4)",
                        padding: "2px 8px",
                        borderRadius: "9999px",
                      }}
                    >
                      {isTr ? "#1 SIRADA" : "#1 RANKED"}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: "clamp(32px, 4vw, 44px)",
                      fontWeight: 850,
                      letterSpacing: "-0.03em",
                      margin: 0,
                      color: "var(--text-main)",
                    }}
                  >
                    Wixtory Language Box
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
                      ? "Sentence Builder, Word Matrix, Word Compass, Dinleme ve Konuşma gibi 6 etkileşimli oyun ile yabancı dil öğrenmeyi eğlenceli ve kalıcı bir deneyime dönüştürün."
                      : "Master new languages through 6 engaging interactive games including Sentence Builder, Word Matrix, and Word Compass with speech and pronunciation practice."}
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {isTr
                      ? "Üyelik veya hesap oluşturma zorunluluğu yok! İlerleme ve istatistikleriniz %100 yerel cihaz önbelleğinde güvenle tutulur. İstediğiniz an 'Önbelleği Temizle' ile tam denetim."
                      : "Zero account registration or login required! 100% of your progress and scores stay in on-device local cache. Full control anytime with 'Clear Cache'."}
                  </p>

                  <div
                    style={{
                      fontSize: "11.5px",
                      color: "var(--text-muted)",
                      lineHeight: "1.5",
                      marginTop: "2px",
                    }}
                  >
                    Wixtory Language Box © 2026 Wixtory Software. All rights reserved.
                  </div>

                  {/* App Store & Google Play Badges + Details Link */}
                  <StoreBadgesRow
                    appleUrl="https://apps.apple.com/tr/app/wixtory-language-box/id6761607811"
                    googleUrl="https://play.google.com/store/apps/details?id=com.wixbook.language_box"
                    detailUrl="/language-box"
                    detailText={isTr ? "Uygulamayı İncele" : "Explore App"}
                  />
                </div>
              </div>

              {/* APP 2: DOMAIN TRACK (Text Left, Icon Right - Alternating!) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "clamp(32px, 5vw, 70px)",
                  alignItems: "center",
                  padding: "20px 0",
                }}
              >
                {/* Left: Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px", order: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        color: "#8B5CF6",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {isTr ? "GELİŞTİRİCİ & ALAN ADI" : "DEVELOPER & DOMAIN TOOL"}
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

                  <h2
                    style={{
                      fontSize: "clamp(32px, 4vw, 44px)",
                      fontWeight: 850,
                      letterSpacing: "-0.03em",
                      margin: 0,
                      color: "var(--text-main)",
                    }}
                  >
                    Wixtory: Domain Track
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
                      ? "Yüzlerce uzantıda (.com, .net, .org, .io, .ai) anlık ve gerçek zamanlı alan adı sorgulaması yapın. Arama geçmişinizi ve yıldızlı alan adlarınızı cihazınızın yerel önbelleğinde sıfır veri toplama güvencesiyle saklayın."
                      : "Search real-time domain availability across hundreds of extensions (.com, .net, .org, .io, .ai). Keep your favorites and search history strictly in on-device local cache with zero telemetry guarantees."}
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {isTr
                      ? "Tek dokunuşla kişisel portföy yönetimi, 'Önbelleği Temizle' ile tam kullanıcı kontrolü ve 10 küresel dilde eksiksiz yerelleştirme."
                      : "One-tap personal portfolio tracking, full user control with 'Clear Cache', and deep dark-mode ergonomics across 10 global languages."}
                  </p>

                  <div
                    style={{
                      fontSize: "11.5px",
                      color: "var(--text-muted)",
                      lineHeight: "1.5",
                      marginTop: "2px",
                    }}
                  >
                    Wixtory: Domain Track © 2026 Wixtory Software. All rights reserved.
                  </div>

                  {/* App Store & Google Play Badges + Details Link */}
                  <StoreBadgesRow
                    appleUrl="https://apps.apple.com/tr/app/wixtory-domain-track/id6790164419"
                    googleUrl="https://play.google.com/store/apps/details?id=com.wixtory.domain_track"
                    detailUrl="/domain-track"
                    detailText={isTr ? "Uygulamayı İncele" : "Explore App"}
                  />
                </div>

                {/* Right: App Icon */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    order: 2,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "340px",
                      aspectRatio: "1 / 1",
                      borderRadius: "48px",
                      overflow: "hidden",
                      boxShadow: "0 24px 56px -12px rgba(139, 92, 246, 0.3)",
                      border: "2px solid rgba(139, 92, 246, 0.35)",
                      background: "linear-gradient(135deg, #0F1E2B 0%, #1A1A2E 100%)",
                      position: "relative",
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <Image
                      src="/apps/domain-track-icon.png"
                      alt="Wixtory: Domain Track App Icon"
                      width={300}
                      height={300}
                      priority
                      style={{ objectFit: "contain", borderRadius: "32px" }}
                    />
                  </div>
                </div>
              </div>

              {/* APP 3: ASTROVIBE (Icon Left, Text Right) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "clamp(32px, 5vw, 70px)",
                  alignItems: "center",
                  padding: "20px 0",
                }}
              >
                {/* Left: App Icon */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "340px",
                      aspectRatio: "1 / 1",
                      borderRadius: "48px",
                      overflow: "hidden",
                      boxShadow: "0 24px 56px -12px rgba(99, 102, 241, 0.3)",
                      border: "2px solid rgba(99, 102, 241, 0.35)",
                      position: "relative",
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, #130D24 0%, #1E1538 100%)",
                      padding: "20px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <Image
                      src="/apps/astrovibe-icon.png"
                      alt="AstroVibe App Icon"
                      width={300}
                      height={300}
                      priority
                      style={{ objectFit: "contain", borderRadius: "32px" }}
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        color: "#6366F1",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {isTr ? "KOZMİK ASTROLOJİ & YAŞAM" : "ASTROLOGY & LIFESTYLE"}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: "clamp(32px, 4vw, 44px)",
                      fontWeight: 850,
                      letterSpacing: "-0.03em",
                      margin: 0,
                      color: "var(--text-main)",
                    }}
                  >
                    AstroVibe
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
                      ? "Zodyak yorumlarını dikey video akışında editoryal estetiğe dönüştürün. 7 zaman periyoduyla (şimdi, gece, yarın, haftalık, aylık, yıllık) derinlikli burç analizleri ve mistik öngörüler."
                      : "Transform cosmic astrology into an editorial TikTok-style visual feed. In-depth zodiac forecasts across 7 timeframes (now, tonight, tomorrow, weekly, monthly, yearly)."}
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {isTr
                      ? "3D fizik motoruyla interaktif tarot kart çekimleri ve burcunuza özel estetik protez tırnak & takı stil kataloğu parmaklarınızın ucunda."
                      : "Interactive 3D physics-based tarot card pulls, mystical spreads, and personalized cosmic press-on nail beauty catalogs."}
                  </p>

                  <div
                    style={{
                      fontSize: "11.5px",
                      color: "var(--text-muted)",
                      lineHeight: "1.5",
                      marginTop: "2px",
                    }}
                  >
                    AstroVibe © 2026 Wixtory Software. All rights reserved.
                  </div>

                  {/* App Store & Google Play Badges + Details Link */}
                  <StoreBadgesRow
                    detailUrl="/astrovibe"
                    detailText={isTr ? "Uygulamayı İncele" : "Explore App"}
                  />
                </div>
              </div>

              {/* APP 4: EXCUSE AI (Text Left, Icon Right) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "clamp(32px, 5vw, 70px)",
                  alignItems: "center",
                  padding: "20px 0",
                }}
              >
                {/* Left: Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px", order: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        color: "#10B981",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {isTr ? "YAPAY ZEKA ASİSTANI" : "AI LIFESAVER ASSISTANT"}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: "clamp(32px, 4vw, 44px)",
                      fontWeight: 850,
                      letterSpacing: "-0.03em",
                      margin: 0,
                      color: "var(--text-main)",
                    }}
                  >
                    Excuse AI
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
                      ? "Beklenmedik ve zorlu durumlardan zahmetsizce sıyrılın. İkna edici, duruma özel yapay zeka üretimi profesyonel bahaneler ve durum açıklamaları parmaklarınızın ucunda."
                      : "Effortlessly handle awkward social encounters. Plausible, context-aware AI-generated witty and professional excuses at your fingertips."}
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {isTr
                      ? "Zorlu ortamlardan veya toplantılardan ayrılmak için özelleştirilebilir zamanlayıcılı gerçekçi sahte gelen arama simülatörü ve tek dokunuşla mesaj paylaşımı."
                      : "Emergency simulated incoming phone calls with customizable timer triggers, voice scripts, and instant messenger sharing."}
                  </p>

                  <div
                    style={{
                      fontSize: "11.5px",
                      color: "var(--text-muted)",
                      lineHeight: "1.5",
                      marginTop: "2px",
                    }}
                  >
                    Excuse AI © 2026 Wixtory Software. All rights reserved.
                  </div>

                  {/* App Store & Google Play Badges + Details Link */}
                  <StoreBadgesRow
                    detailUrl="/excuse"
                    detailText={isTr ? "Uygulamayı İncele" : "Explore App"}
                  />
                </div>

                {/* Right: App Icon */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    order: 2,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "340px",
                      aspectRatio: "1 / 1",
                      borderRadius: "48px",
                      overflow: "hidden",
                      boxShadow: "0 24px 56px -12px rgba(16, 185, 129, 0.3)",
                      border: "2px solid rgba(16, 185, 129, 0.35)",
                      position: "relative",
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, #0A231C 0%, #133A2E 100%)",
                      padding: "20px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <Image
                      src="/apps/excuse-icon.png"
                      alt="Excuse AI App Icon"
                      width={300}
                      height={300}
                      style={{ objectFit: "contain", borderRadius: "32px" }}
                    />
                  </div>
                </div>
              </div>

              {/* STUDIO CULTURE SECTION: Life at Wixtory Apps */}
              <div
                style={{
                  borderTop: "1px solid var(--border-subtle)",
                  paddingTop: "70px",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "clamp(32px, 5vw, 60px)",
                  alignItems: "center",
                }}
              >
                {/* Left: Studio Photos Container */}
                <div>
                  <div
                    style={{
                      borderRadius: "28px",
                      overflow: "hidden",
                      border: "1px solid var(--border-subtle)",
                      boxShadow: "0 20px 48px -10px rgba(0,0,0,0.22)",
                      position: "relative",
                      aspectRatio: "16 / 11",
                    }}
                  >
                    <Image
                      src="/about/studio-life.jpg"
                      alt="Life at Wixtory Apps Team"
                      fill
                      sizes="(max-width: 768px) 100vw, 540px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>

                {/* Right: Studio Culture Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <h2
                    style={{
                      fontSize: "clamp(30px, 4vw, 42px)",
                      fontWeight: 850,
                      letterSpacing: "-0.03em",
                      margin: 0,
                      color: "var(--text-main)",
                    }}
                  >
                    {isTr ? "Wixtory'de Yaşam" : "Life at Wixtory Apps"}
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
                      ? "Yaptığı işte uzman olan, daima daha iyisini hedefleyen, başarı için güçlerini birleştiren ve iz bırakmayı hayal eden bir ekibiz."
                      : "We team up with colleagues who are good at what they do, strive to become great, cooperate to succeed, dream to make an impact."}
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {isTr
                      ? "Ekip arkadaşlarımızın verimli çalışabilecekleri ve tüm potansiyellerini ortaya koyabilecekleri doğru çalışma ortamını ve ilham verici kültürü inşa etmek en büyük önceliğimizdir."
                      : "It's our top priority to create the right environment for our teammates to work efficiently and bring out their full potential."}
                  </p>

                  <div>
                    <Link
                      href="/about"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        background: "#4C1D95",
                        color: "#ffffff",
                        padding: "14px 28px",
                        borderRadius: "9999px",
                        fontWeight: 700,
                        fontSize: "15px",
                        textDecoration: "none",
                        boxShadow: "0 8px 24px -4px rgba(76, 29, 149, 0.45)",
                        transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.background = "#5B21B6";
                        e.currentTarget.style.boxShadow = "0 12px 28px -4px rgba(91, 33, 182, 0.6)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.background = "#4C1D95";
                        e.currentTarget.style.boxShadow = "0 8px 24px -4px rgba(76, 29, 149, 0.45)";
                      }}
                    >
                      <span>{isTr ? "Daha Fazlası" : "See More"}</span>
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MainFooter />
    </div>
  );
}
