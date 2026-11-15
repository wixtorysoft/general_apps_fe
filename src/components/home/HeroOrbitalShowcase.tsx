"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Gamepad2,
  Globe,
  Moon,
  MessageSquare,
  PlaySquare,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { resolveI18n } from "@/i18n";

export function HeroOrbitalShowcase() {
  const { language } = useLanguage();
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  const tEco = (key: any) => resolveI18n("ecosystem", key, language);

  const apps = [
    {
      id: "langbox",
      name: "Language Box",
      fullName: "Wixtory Language Box",
      logoUrl: "/apps/language-box-icon.png",
      tagline: {
        tr: "8 İnteraktif Oyunla Dil Öğren",
        en: "Learn Languages with 8 Games",
        de: "Sprachen lernen mit 8 Spielen",
        it: "Impara le lingue con 8 giochi",
        es: "Aprende idiomas con 8 juegos",
        fr: "Apprenez des langues avec 8 jeux",
        ru: "Изучение языков через 8 игр",
        zh: "8 款益智游戏趣味学语言",
        ja: "8つのゲームで語学学習",
        ar: "تعلم اللغات عبر 8 ألعاب",
        pt: "Aprenda idiomas com 8 jogos",
      },
      href: "/language-box",
      icon: Gamepad2,
      accent: "#10b981",
      glow: "rgba(16, 185, 129, 0.35)",
      bgLight: "rgba(16, 185, 129, 0.12)",
      badge: "LIVE",
    },
    {
      id: "domaintrack",
      name: "Domain Track",
      fullName: "Wixtory: Domain Track",
      logoUrl: "/domain-track/logo.png",
      logoDarkUrl: "/domain-track/logo-dark.png",
      tagline: {
        tr: "Alan Adı, SSL & DNS Takibi",
        en: "Domain, SSL & DNS Monitoring",
        de: "Domain-, SSL- & DNS-Tracking",
        it: "Monitoraggio Dominio, SSL e DNS",
        es: "Monitoreo de Dominio, SSL y DNS",
        fr: "Surveillance Domaine, SSL & DNS",
        ru: "Мониторинг Доменов, SSL и DNS",
        zh: "域名、SSL与DNS全维监控",
        ja: "ドメイン・SSL・DNSリアルタイム監視",
        ar: "مراقبة النطاقات وSSL وDNS",
        pt: "Monitoramento de Domínio, SSL e DNS",
      },
      href: "/domain-track",
      icon: Globe,
      accent: "#0284c7",
      glow: "rgba(2, 132, 199, 0.35)",
      bgLight: "rgba(2, 132, 199, 0.12)",
      badge: "NEW",
    },
    {
      id: "astrovibe",
      name: "AstroVibe",
      fullName: "AstroVibe",
      logoUrl: "/apps/astrovibe-icon.png",
      tagline: {
        tr: "Astroloji, Tarot & Protez Tırnak",
        en: "Astrology, Tarot & Nail Art",
        de: "Astrologie, Tarot & Nagel-Design",
        it: "Astrologia, Tarocchi & Nail Art",
        es: "Astrología, Tarot y Uñas",
        fr: "Astrologie, Tarot & Nail Art",
        ru: "Астрология, Таро и Дизайн Ногтей",
        zh: "星座占卜、塔罗与美甲灵感",
        ja: "星座占い・タロット・ネイルアート",
        ar: "الأبراج والتاروت وفنون الأظافر",
        pt: "Astrologia, Tarô & Nail Art",
      },
      href: "/astrovibe",
      icon: Moon,
      accent: "#8b5cf6",
      glow: "rgba(139, 92, 246, 0.35)",
      bgLight: "rgba(139, 92, 246, 0.12)",
      badge: "SOON",
    },
    {
      id: "excuse",
      name: "Excuse AI",
      fullName: "Wixtory Excuse AI",
      logoUrl: "/apps/excuse-icon.png",
      tagline: {
        tr: "Zeki Bahanematik & Kurtarıcı",
        en: "Smart Excuse Generator & Lifesaver",
        de: "Intelligenter Ausreden-Generator",
        it: "Generatore di Scuse Intelligente",
        es: "Generador Inteligente de Excusas",
        fr: "Générateur d'Excuses Intelligent",
        ru: "Умный генератор отговорок",
        zh: "高情商创意借口与社交救星",
        ja: "スマート言い訳ジェネレーター",
        ar: "مولد الأعذar الذكي والمنقذ",
        pt: "Gerador Inteligente de Desculpas",
      },
      href: "/excuse",
      icon: MessageSquare,
      accent: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.35)",
      bgLight: "rgba(245, 158, 11, 0.12)",
      badge: "SOON",
    },
    {
      id: "player",
      name: "Wixtory Player",
      fullName: "Wixtory Player",
      logoUrl: "/apps/wixtory-player-icon.png",
      tagline: {
        tr: "Yerel MP3/MP4 Dikey Akış Oynatıcı",
        en: "Local MP3/MP4 Vertical Reel Flow",
        de: "Lokaler MP3/MP4 Reel-Player",
        it: "Player Locale MP3/MP4 Verticale",
        es: "Reproductor MP3/MP4 Vertical",
        fr: "Lecteur MP3/MP4 Défilement Vertical",
        ru: "Локальный вертикальный MP3/MP4 плеер",
        zh: "本地 MP3/MP4 竖屏流播放器",
        ja: "ローカルMP3/MP4縦型リールプレーヤー",
        ar: "مشغل وسائط MP3/MP4 بتمرير عمودي",
        pt: "Reprodutor MP3/MP4 Vertical",
      },
      href: "/player",
      icon: PlaySquare,
      accent: "#06b6d4",
      glow: "rgba(6, 182, 212, 0.35)",
      bgLight: "rgba(6, 182, 212, 0.12)",
      badge: "NATIVE",
    },
  ];

  // Rotate smoothly over time (stops on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.3) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Radius of the main circular orbit path in pixels
  const ORBIT_RADIUS = 176;

  const activeApp = apps[activeAppIndex];
  const activeTagline =
    activeApp.tagline[language as keyof typeof activeApp.tagline] ||
    activeApp.tagline["en"] ||
    activeApp.tagline["tr"];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "520px",
        height: "500px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Ambient Radiant Glows */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${activeApp.glow} 0%, transparent 70%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
          transition: "background 0.5s ease",
          opacity: 0.75,
        }}
      />

      {/* Outer Decorative Dashed Ring */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "440px",
          height: "440px",
          borderRadius: "50%",
          border: "1px dashed var(--border-subtle)",
          pointerEvents: "none",
          opacity: 0.45,
        }}
      />

      {/* Main Orbit Track Ring */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: `${ORBIT_RADIUS * 2}px`,
          height: `${ORBIT_RADIUS * 2}px`,
          borderRadius: "50%",
          border: "1.5px solid var(--border-subtle)",
          boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.03)",
          pointerEvents: "none",
        }}
      />

      {/* Central Wixtory Hub Core */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "114px",
          height: "114px",
          borderRadius: "30px",
          background: "var(--bg-card)",
          border: "1px solid var(--border-subtle)",
          boxShadow: "0 12px 32px -8px rgba(0, 0, 0, 0.12), 0 0 0 1px var(--border-subtle)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          padding: "10px",
          textAlign: "center",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "14px",
            background: "#080c18",
            border: "1px solid rgba(16, 185, 129, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "6px",
            boxShadow: "0 6px 16px -2px rgba(16, 185, 129, 0.3)",
          }}
        >
          <Image
            src="/general/icon.png"
            alt="Wixtory Core"
            width={32}
            height={32}
            style={{ objectFit: "contain" }}
          />
        </div>
        <span
          style={{
            fontSize: "9.5px",
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--text-main)",
            lineHeight: 1.1,
          }}
        >
          {tEco("orbit_center_label")}
        </span>
      </div>

      {/* 5 Orbiting App Nodes */}
      {apps.map((app, index) => {
        const Icon = app.icon;
        // Evenly space 5 apps (360 / 5 = 72 degrees each)
        const angleDeg = rotationAngle + index * (360 / apps.length);
        const angleRad = (angleDeg * Math.PI) / 180;
        const x = Math.cos(angleRad) * ORBIT_RADIUS;
        const y = Math.sin(angleRad) * ORBIT_RADIUS;
        const isActive = activeAppIndex === index;

        return (
          <Link
            key={app.id}
            href={app.href}
            onMouseEnter={() => {
              setActiveAppIndex(index);
              setIsPaused(true);
            }}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isActive ? 1.12 : 1})`,
              transition: "transform 0.15s ease-out, box-shadow 0.2s ease, border-color 0.2s ease",
              textDecoration: "none",
              zIndex: isActive ? 25 : 15,
            }}
          >
            <div
              className="glass-card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "6px 14px 6px 6px",
                borderRadius: "18px",
                background: isActive ? "var(--bg-card)" : "var(--bg-glass)",
                border: `1.5px solid ${isActive ? app.accent : "var(--border-subtle)"}`,
                boxShadow: isActive
                  ? `0 12px 30px -4px ${app.glow}, 0 0 0 2px ${app.accent}44`
                  : "0 6px 18px -4px rgba(0, 0, 0, 0.08)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Real App Logo Icon */}
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  backgroundColor: "var(--bg-card)",
                  border: `1px solid ${isActive ? app.accent : "var(--border-subtle)"}`,
                  boxShadow: `0 3px 10px rgba(0, 0, 0, 0.12)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  position: "relative",
                }}
              >
                {app.logoDarkUrl ? (
                  <>
                    <Image
                      src={app.logoDarkUrl}
                      alt={app.name}
                      width={36}
                      height={36}
                      className="theme-logo-light"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <Image
                      src={app.logoUrl}
                      alt={app.name}
                      width={36}
                      height={36}
                      className="theme-logo-dark"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </>
                ) : (
                  <Image
                    src={app.logoUrl}
                    alt={app.name}
                    width={36}
                    height={36}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>

              {/* App Label */}
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: isActive ? app.accent : "var(--text-main)",
                  lineHeight: 1,
                }}
              >
                {app.name}
              </span>

              {/* Badge */}
              <span
                style={{
                  fontSize: "8.5px",
                  fontWeight: 800,
                  padding: "2px 6px",
                  borderRadius: "6px",
                  backgroundColor: `${app.accent}18`,
                  color: app.accent,
                  border: `1px solid ${app.accent}33`,
                  letterSpacing: "0.04em",
                }}
              >
                {app.badge}
              </span>
            </div>
          </Link>
        );
      })}

      {/* Active App Interactive Pill / Callout at Bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "12px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          textAlign: "center",
          width: "90%",
          maxWidth: "360px",
        }}
      >
        <Link
          href={activeApp.href}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            padding: "8px 16px 8px 10px",
            borderRadius: "16px",
            background: "var(--bg-card)",
            border: `1px solid ${activeApp.accent}55`,
            boxShadow: `0 8px 26px -4px ${activeApp.glow}`,
            textDecoration: "none",
            width: "100%",
            boxSizing: "border-box",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {/* Active App Logo */}
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "11px",
              overflow: "hidden",
              border: `1px solid ${activeApp.accent}44`,
              boxShadow: "0 3px 10px rgba(0, 0, 0, 0.12)",
              flexShrink: 0,
              background: "var(--bg-card)",
            }}
          >
            {activeApp.logoDarkUrl ? (
              <>
                <Image
                  src={activeApp.logoDarkUrl}
                  alt={activeApp.fullName}
                  width={40}
                  height={40}
                  className="theme-logo-light"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <Image
                  src={activeApp.logoUrl}
                  alt={activeApp.fullName}
                  width={40}
                  height={40}
                  className="theme-logo-dark"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </>
            ) : (
              <Image
                src={activeApp.logoUrl}
                alt={activeApp.fullName}
                width={40}
                height={40}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}
          </div>

          <div style={{ textAlign: "left", minWidth: 0, flex: 1 }}>
            <div
              style={{
                fontSize: "12.5px",
                fontWeight: 800,
                color: activeApp.accent,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {activeApp.fullName}
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "var(--text-secondary)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginTop: "1px",
              }}
            >
              {activeTagline}
            </div>
          </div>
          <ArrowRight size={15} color={activeApp.accent} style={{ flexShrink: 0 }} />
        </Link>
      </div>
    </div>
  );
}

