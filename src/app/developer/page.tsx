"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";
import { useLanguage } from "@/context/LanguageContext";
import {
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  Code,
  Copy,
  Check,
  Lock,
  Zap,
  Cpu,
  Layers,
  BookOpen,
  Sparkles,
  MessageSquare,
  Terminal,
  ArrowRight,
  Shield,
  Smartphone,
} from "lucide-react";

export default function DeveloperPage() {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const isTr = language === "tr";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("wixtoryy@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const applications = [
    {
      id: "language-box",
      name: "Wixtory Language Box",
      badge: isTr ? "Kelime & Dil Öğrenimi" : "Vocabulary & Language",
      description: isTr
        ? "Oyunlaştırılmış aralıklı tekrar sistemi (SRS), 5+ küresel dil desteği, etkileşimli testler ve %100 yerel çevrimdışı ilerleme takibi."
        : "Gamified spaced repetition system (SRS), 5+ global languages, interactive quizzes, and 100% on-device offline progress tracking.",
      tags: ["Flutter", "SQLite", "SRS Algorithm", "5+ Languages", "Zero Accounts"],
      href: "/language-box",
      icon: BookOpen,
      accentColor: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
    },
    {
      id: "domain-track",
      name: "Wixtory: Domain Track",
      badge: isTr ? "Alan Adı & DNS İstihbaratı" : "Domain & DNS Intelligence",
      description: isTr
        ? "Gerçek zamanlı alan adı uygunluk kontrolü, WHOIS analizi, DNS kayıt çözümleme ve yerel favori portföy takip asistanı."
        : "Real-time domain availability check, WHOIS intelligence, DNS record resolver, and local portfolio tracking assistant.",
      tags: ["Flutter", "WHOIS Protocol", "DNS Resolver", "HTTPS API", "Local Cache"],
      href: "/domain-track",
      icon: Globe,
      accentColor: "#0ea5e9",
      gradient: "linear-gradient(135deg, #0ea5e9, #3b82f6)",
    },
    {
      id: "astrovibe",
      name: "AstroVibe",
      badge: isTr ? "Astroloji & Stil Stüdyosu" : "Astrology & Style Studio",
      description: isTr
        ? "7 periyotlu derinlikli burç analizleri, tırnak sanatı (nail art) modelleri, mücevher ilhamı ve kozmik yaşam rehberi."
        : "7-period in-depth horoscope analysis, cosmic nail art designs, jewelry inspiration, and celestial lifestyle guide.",
      tags: ["Flutter 60FPS", "Spring Boot", "MinIO CDN", "7-Period Horoscopes"],
      href: "/astrovibe",
      icon: Sparkles,
      accentColor: "#ec4899",
      gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    },
    {
      id: "excuse",
      name: "Excuse AI",
      badge: isTr ? "Akıllı Bahane & Sosyal Kurtarıcı" : "Smart Excuse & Social Lifesaver",
      description: isTr
        ? "Beklenmedik krizler, geç kalmalar ve zorlu sosyal durumlar için mizahi ve zeki yanıtlar üreten yapay zeka asistanı."
        : "AI-powered quick social excuse assistant generating clever, contextual, and polite responses for awkward moments.",
      tags: ["Spring Boot", "NLP Engine", "Flutter", "Responsive UI"],
      href: "/excuse",
      icon: MessageSquare,
      accentColor: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    },
  ];

  const visionPillars = [
    {
      title: isTr ? "Tasarımda Gizlilik & Sıfır Telemetri" : "Privacy by Design & Zero Telemetry",
      subtitle: isTr ? "Privacy-First Mimari" : "Privacy-First Architecture",
      icon: Lock,
      color: "#10b981",
      description: isTr
        ? "Kullanıcı verisi en büyük emanettir. Wixtory çatısı altındaki hiçbir uygulama zorunlu üyelik, profil kaydı veya kimlik bilgisi talep etmez. Arama geçmişi ve tercihler merkezi sunucularda değil, yalnızca kullanıcının kendi cihazında güvenle barındırılır."
        : "Zero telemetry and zero accounts. No personal information is ever collected or tracked on remote servers. All queries, learning history, and favorites stay strictly inside the client's local sandbox storage.",
    },
    {
      title: isTr ? "60 FPS Donanım Hızlandırmalı Akıcılık" : "Fluid 60 FPS Native Graphics",
      subtitle: isTr ? "Performans & Haptik" : "Performance & Haptics",
      icon: Zap,
      color: "#38bdf8",
      description: isTr
        ? "Flutter'ın grafik motoru ile iOS ve Android platformlarında 60 FPS tavizsiz akıcılık, fizik tabanlı mikro-etkileşimler, dokunsal (haptic) geri bildirimler ve bellek sızıntılarından arındırılmış kaynak yönetimi."
        : "Hardware-accelerated 60 FPS performance across iOS and Android with spring physics, responsive micro-animations, tactile haptic feedback, and lean memory footprint.",
    },
    {
      title: isTr ? "Tip Güvenli Domain Modelleri & i18n" : "Type-Safe Domain Enums & i18n",
      subtitle: isTr ? "Temiz Mimari" : "Clean Architecture",
      icon: Cpu,
      color: "#a855f7",
      description: isTr
        ? "Sihirli dizgilerden (magic strings) arındırılmış, domain seviyesinde çift yönlü JSON serileştirme garantisi sunan tip güvenli enum mimarisi. 5+ dilde (TR, EN, DE, ES, FR) UI katmanından bağımsız yerelleştirme."
        : "Strict type-safe domain models eliminating magic strings with bidirectional JSON serialization. Decoupled multilingual engine supporting 5+ global languages across client and server.",
    },
    {
      title: isTr ? "Dayanıklı Mikroservisler & MinIO CDN" : "Resilient Backend & MinIO CDN",
      subtitle: isTr ? "Ölçeklenebilir Altyapı" : "Scalable Infrastructure",
      icon: Layers,
      color: "#f59e0b",
      description: isTr
        ? "Spring Boot kurumsal arka uç altyapısı, JWT tabanlı sıfır-güven (zero-trust) mutasyon güvenliği, TLS 1.3 şifreleme ve MinIO nesne depolama ile gecikmesiz yüksek hızlı medya dağıtımı."
        : "Enterprise-grade Spring Boot microservices, zero-trust mutation protection, TLS 1.3 communication, and high-speed MinIO object storage CDN delivery.",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Ecosystem Hub Top Navbar */}
      <MainNavbar />

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: "50px 0 90px 0" }}>
        <div className="container" style={{ maxWidth: "980px" }}>
          
          {/* Hero Profile Header */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span
              className="pill-badge"
              style={{
                background: "var(--badge-bg)",
                borderColor: "var(--border-active)",
                color: "var(--primary)",
                marginBottom: "16px",
                padding: "6px 16px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: 700,
              }}
            >
              <Code size={15} />
              <span>{isTr ? "Geliştirici & Sistem Mimarı" : "Developer & System Architect"}</span>
            </span>

            <h1
              style={{
                fontSize: "clamp(34px, 5.5vw, 50px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                marginBottom: "12px",
                color: "var(--text-main)",
                lineHeight: "1.15",
              }}
            >
              Hacı Celal Aygar
            </h1>

            <p
              style={{
                fontSize: "18px",
                color: "var(--primary)",
                fontWeight: 650,
                marginBottom: "8px",
              }}
            >
              {isTr ? "Senior Software Engineer & Wixtory Kurucusu" : "Senior Software Engineer & Founder of Wixtory"}
            </p>

            <p
              style={{
                fontSize: "15px",
                color: "var(--text-secondary)",
                maxWidth: "640px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              {isTr
                ? "Gizlilik öncelikli yerel mimariler, Flutter 60 FPS mobil deneyimler ve kurumsal Spring Boot sistemleri inşa eden yazılım mühendisi."
                : "Architecting privacy-first on-device mobile applications with 60 FPS Flutter performance and resilient Spring Boot backends."}
            </p>
          </div>

          {/* Profile & Contact Details Card */}
          <div
            className="glass-card"
            style={{
              padding: "clamp(24px, 4vw, 36px)",
              borderRadius: "28px",
              border: "1.5px solid var(--border-active)",
              background: "var(--bg-card)",
              boxShadow: "var(--shadow-card)",
              marginBottom: "44px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Ambient accent background blur */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "280px",
                height: "280px",
                background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
                opacity: 0.12,
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
            />

            {/* Profile Info Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "28px",
                borderBottom: "1px solid var(--border-subtle)",
                paddingBottom: "22px",
                flexWrap: "wrap",
              }}
            >
              {/* Avatar Initial Ring */}
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, var(--primary) 0%, #38bdf8 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontSize: "26px",
                  fontWeight: 850,
                  boxShadow: "0 10px 24px -4px var(--shadow-glow)",
                  flexShrink: 0,
                }}
              >
                HCA
              </div>

              <div>
                <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--text-main)", marginBottom: "4px" }}>
                  Hacı Celal Aygar
                </h2>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: "12.5px",
                      padding: "3px 10px",
                      borderRadius: "9999px",
                      backgroundColor: "var(--badge-bg)",
                      color: "var(--primary)",
                      border: "1px solid var(--border-active)",
                      fontWeight: 650,
                    }}
                  >
                    Senior Software Engineer
                  </span>
                  <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>•</span>
                  <span style={{ fontSize: "13px", color: "var(--text-secondary)", fontWeight: 550 }}>
                    Wixtory Apps Ecosystem Hub
                  </span>
                </div>
              </div>
            </div>

            {/* Structured Developer Information Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "18px",
              }}
            >
              {/* Email Card */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "18px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {isTr ? "E-Posta" : "Email"}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: copied ? "#10B981" : "var(--text-muted)",
                      cursor: "pointer",
                      padding: "2px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "11px",
                      fontWeight: 600,
                    }}
                    title="Copy Email"
                  >
                    {copied ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                    <span>{copied ? (isTr ? "Kopyalandı" : "Copied") : (isTr ? "Kopyala" : "Copy")}</span>
                  </button>
                </div>
                <a
                  href="mailto:wixtoryy@gmail.com"
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "var(--text-main)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Mail size={16} color="var(--primary)" />
                  <span>wixtoryy@gmail.com</span>
                </a>
              </div>

              {/* Location Card */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "18px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {isTr ? "Konum" : "Location"}
                </span>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "var(--text-main)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <MapPin size={16} color="var(--primary)" />
                  <span>Ankara, Yenimahalle, Türkiye</span>
                </div>
              </div>

              {/* Official Website Card */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "18px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {isTr ? "Resmi Web Portalı" : "Official Web Portal"}
                </span>
                <a
                  href="https://www.wixtory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "var(--primary)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Globe size={16} />
                  <span>www.wixtory.com</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Geliştirilen Uygulamalar (Developed Applications) Section */}
          <section style={{ marginBottom: "50px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#10b981",
                }}
              >
                <Layers size={18} />
              </div>
              <h2 style={{ fontSize: "22px", fontWeight: 850, color: "var(--text-main)", margin: 0 }}>
                {isTr ? "Geliştirilen Uygulamalar" : "Developed Applications"}
              </h2>
            </div>
            <p style={{ fontSize: "14.5px", color: "var(--text-secondary)", marginBottom: "22px" }}>
              {isTr
                ? "Wixtory ekosisteminde aktif olarak geliştirilen, sıfır-üyelik ve %100 yerel gizlilik mimarisiyle çalışan 4 amiral mobil uygulama:"
                : "The 4 flagship mobile applications actively architected and published under the Wixtory ecosystem:"}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
              {applications.map((app) => {
                const IconComponent = app.icon;
                return (
                  <Link
                    key={app.id}
                    href={app.href}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: "24px",
                      borderRadius: "22px",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      textDecoration: "none",
                      color: "inherit",
                      transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = app.accentColor;
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = `0 12px 28px -6px ${app.accentColor}25`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div>
                      {/* Top Row: Icon + Badge */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "14px",
                            background: app.gradient,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            boxShadow: `0 8px 18px -4px ${app.accentColor}40`,
                          }}
                        >
                          <IconComponent size={22} />
                        </div>
                        <span
                          style={{
                            fontSize: "11.5px",
                            fontWeight: 700,
                            padding: "4px 10px",
                            borderRadius: "9999px",
                            backgroundColor: `${app.accentColor}15`,
                            color: app.accentColor,
                            border: `1px solid ${app.accentColor}30`,
                          }}
                        >
                          {app.badge}
                        </span>
                      </div>

                      {/* App Title */}
                      <h3 style={{ fontSize: "18px", fontWeight: 800, color: "var(--text-main)", marginBottom: "8px" }}>
                        {app.name}
                      </h3>

                      {/* Description */}
                      <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "18px" }}>
                        {app.description}
                      </p>
                    </div>

                    {/* Footer Row: Tags + Link Indicator */}
                    <div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
                        {app.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            style={{
                              fontSize: "11px",
                              fontWeight: 600,
                              padding: "2px 8px",
                              borderRadius: "6px",
                              background: "var(--bg-glass)",
                              border: "1px solid var(--border-subtle)",
                              color: "var(--text-muted)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "13px",
                          fontWeight: 700,
                          color: app.accentColor,
                        }}
                      >
                        <span>{isTr ? "Uygulama Sayfasını İncele" : "Explore App Hub"}</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Mühendislik Vizyonu (Engineering Vision) Section */}
          <section style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "rgba(56, 189, 248, 0.12)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#38bdf8",
                }}
              >
                <Terminal size={18} />
              </div>
              <h2 style={{ fontSize: "22px", fontWeight: 850, color: "var(--text-main)", margin: 0 }}>
                {isTr ? "Mühendislik Vizyonu" : "Engineering Vision"}
              </h2>
            </div>
            <p style={{ fontSize: "14.5px", color: "var(--text-secondary)", marginBottom: "22px" }}>
              {isTr
                ? "Wixtory ekosisteminde geliştirilen tüm ürünler, aşağıdaki 4 değişmez mühendislik ilkesi doğrultusunda inşa edilmektedir:"
                : "Every product developed under the Wixtory brand adheres strictly to the following 4 foundational engineering pillars:"}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
              {visionPillars.map((pillar, pIdx) => {
                const PillarIcon = pillar.icon;
                return (
                  <div
                    key={pIdx}
                    style={{
                      padding: "24px",
                      borderRadius: "22px",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "12px",
                          background: `${pillar.color}15`,
                          border: `1px solid ${pillar.color}35`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: pillar.color,
                          flexShrink: 0,
                        }}
                      >
                        <PillarIcon size={20} />
                      </div>
                      <div>
                        <span style={{ fontSize: "11.5px", fontWeight: 700, color: pillar.color, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                          {pillar.subtitle}
                        </span>
                        <h3 style={{ fontSize: "16.5px", fontWeight: 800, color: "var(--text-main)", margin: 0 }}>
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: "1.65", margin: 0 }}>
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </main>

      {/* Main Ecosystem Footer */}
      <MainFooter />
    </div>
  );
}
