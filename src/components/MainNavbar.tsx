"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Layers,
  Gamepad2,
  Globe,
  Moon,
  MessageSquare,
  PlaySquare,
  Compass,
  Target,
  Code,
  Shield,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeLogo } from "@/components/ThemeLogo";
import { useLanguage } from "@/context/LanguageContext";
import { resolveI18n } from "@/i18n";

export function MainNavbar() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navStr = (key: string) => resolveI18n("navigation", key, language);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProjectsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setProjectsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProjectsDropdownOpen(false);
    }, 200);
  };

  // Flagship projects for the dropdown
  const projects = [
    {
      title: "Wixtory Language Box",
      desc: {
        tr: "8 İnteraktif oyunla dil öğrenme platformu",
        en: "Learn languages through 8 interactive games",
        de: "Sprachen lernen mit 8 interaktiven Spielen",
        it: "Impara le lingue con 8 giochi interattivi",
        es: "Aprende idiomas con 8 juegos interactivos",
        fr: "Apprenez des langues avec 8 jeux interactifs",
        ru: "Изучение языков через 8 интерактивных игр",
        zh: "通过 8 款益智互动游戏趣味学语言",
        ja: "8つのゲームで楽しく学べる語学プラットフォーム",
        ar: "تعلم اللغات عبر 8 ألعاب تفاعلية مسلية",
        pt: "Aprenda idiomas com 8 jogos interativos",
      },
      href: "/language-box",
      icon: Gamepad2,
      logoUrl: "/apps/language-box-icon.png",
      accent: "#10b981",
      bg: "rgba(16, 185, 129, 0.12)",
      badge: "LIVE",
      badgeColor: "#10b981",
    },
    {
      title: "Wixtory: Domain Track",
      desc: {
        tr: "Alan adı, SSL ve DNS anlık takip asistanı",
        en: "Real-time domain, SSL & DNS monitoring",
        de: "Echtzeit-Überwachung für Domain, SSL und DNS",
        it: "Monitoraggio domini, SSL e DNS in tempo reale",
        es: "Monitoreo en tiempo real de dominios, SSL y DNS",
        fr: "Surveillance en temps réel de domaines, SSL et DNS",
        ru: "Мониторинг доменов, сертификатов SSL и DNS",
        zh: "域名注册、SSL 证书与 DNS 实时监测助手",
        ja: "ドメイン・SSL・DNSリアルタイム監視アシスタント",
        ar: "مراقبة النطاقات وشهادات SSL وDNS في الوقت الفعلي",
        pt: "Monitoramento em tempo real de domínios, SSL e DNS",
      },
      href: "/domain-track",
      icon: Globe,
      logoUrl: "/domain-track/logo.png",
      logoDarkUrl: "/domain-track/logo-dark.png",
      accent: "#0284c7",
      bg: "rgba(2, 132, 199, 0.12)",
      badge: "NEW",
      badgeColor: "#0284c7",
    },
    {
      title: "AstroVibe",
      desc: {
        tr: "Kozmik astroloji, tarot ve tırnak stil rehberi",
        en: "Cosmic astrology, tarot & nail art guide",
        de: "Kosmische Astrologie, Tarot & Nagel-Design",
        it: "Astrologia cosmica, tarocchi e nail art",
        es: "Astrología cósmica, tarot y diseño de uñas",
        fr: "Astrologie cosmique, tarot et nail art",
        ru: "Астрология, расклады таро и дизайн ногтей",
        zh: "宇宙星座占星、塔罗牌与美甲美学灵感",
        ja: "占星術・タロット・ネイルアートスタイルガイド",
        ar: "علم الفلك الكوني والتاروت وأفكار فنون الأظافر",
        pt: "Astrologia cósmica, tarô e guia de nail art",
      },
      href: "/astrovibe",
      icon: Moon,
      logoUrl: "/apps/astrovibe-icon.png",
      accent: "#8b5cf6",
      bg: "rgba(139, 92, 246, 0.12)",
      badge: "SOON",
      badgeColor: "#8b5cf6",
    },
    {
      title: "Wixtory Excuse AI",
      desc: {
        tr: "Zeki bahanematik ve yapay zeka kurtarıcısı",
        en: "Smart excuse generator & AI lifesaver",
        de: "Intelligenter Ausreden-Generator & KI-Helfer",
        it: "Generatore di scuse intelligenti & assistente AI",
        es: "Generador de excusas inteligentes y salvavidas IA",
        fr: "Générateur d'excuses intelligent & IA",
        ru: "Умный генератор отговорок и ИИ-помощник",
        zh: "高情商创意借口生成与社交解围助手",
        ja: "スマート言い訳ジェネレーター＆AIアシスタント",
        ar: "مولد الأعذار الذكي ومساعد الذكاء الاصطناعي",
        pt: "Gerador inteligente de desculpas e salva-vidas IA",
      },
      href: "/excuse",
      icon: MessageSquare,
      logoUrl: "/apps/excuse-icon.png",
      accent: "#f59e0b",
      bg: "rgba(245, 158, 11, 0.12)",
      badge: "SOON",
      badgeColor: "#f59e0b",
    },
    {
      title: "Wixtory Player",
      desc: {
        tr: "Yerel MP3/MP4 sonsuz dikey akış oynatıcı",
        en: "Local MP3/MP4 infinite vertical reel flow",
        de: "Lokaler MP3/MP4 vertikaler Reel-Player",
        it: "Player locale MP3/MP4 a scorrimento verticale",
        es: "Reproductor local de MP3/MP4 en flujo vertical",
        fr: "Lecteur local MP3/MP4 en défilement vertical",
        ru: "Локальный вертикальный медиаплеер MP3/MP4",
        zh: "本地 MP3 音频与 MP4 视频竖屏流播放器",
        ja: "ローカルMP3/MP4縦型リールメディアプレーヤー",
        ar: "مشغل وسائط MP3 وMP4 محلي بتمرير عمودي لا نهائي",
        pt: "Reprodutor local de MP3/MP4 em fluxo vertical",
      },
      href: "/player",
      icon: PlaySquare,
      logoUrl: "/apps/wixtory-player-icon.png",
      accent: "#06b6d4",
      bg: "rgba(6, 182, 212, 0.12)",
      badge: "NATIVE",
      badgeColor: "#06b6d4",
    },
  ];

  const getDesc = (d: Record<string, string>) => {
    return d[language] || d["en"] || d["tr"] || "";
  };

  const isHome = pathname === "/";
  const isProjectsActive =
    pathname.startsWith("/apps") ||
    pathname.startsWith("/language-box") ||
    pathname.startsWith("/domain-track") ||
    pathname.startsWith("/astrovibe") ||
    pathname.startsWith("/excuse") ||
    pathname.startsWith("/player") ||
    pathname === "/#apps";
  const isAbout = pathname.startsWith("/about") || pathname === "/#about";
  const isVision = pathname.startsWith("/vision-mission");
  const isDeveloper = pathname.startsWith("/developer");
  const isPrivacy = pathname.startsWith("/privacy-policy");
  const isContact = pathname.startsWith("/contact") || pathname.startsWith("/iletisim");

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        background: "var(--bg-glass)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border-subtle)",
        boxShadow: "0 4px 24px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        className="container"
        style={{
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
            flexShrink: 0,
          }}
        >
          <ThemeLogo height={34} />
        </Link>

        {/* Desktop Nav: Clean Essential Links with Projeler Dropdown & Privacy */}
        <nav
          className="hub-desktop-nav"
          aria-label={navStr("menu_pages")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/* Ana Sayfa */}
          <Link
            href="/"
            className="hub-nav-pill"
            style={{
              color: isHome ? "var(--primary)" : "var(--text-secondary)",
              fontWeight: isHome ? 700 : 600,
            }}
          >
            <span>{navStr("home")}</span>
          </Link>

          {/* Projeler Dropdown */}
          <div
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: "relative" }}
          >
            <button
              onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
              className="hub-nav-pill"
              aria-expanded={projectsDropdownOpen}
              aria-haspopup="true"
              style={{
                cursor: "pointer",
                border: "1px solid transparent",
                background: projectsDropdownOpen || isProjectsActive ? "var(--badge-bg)" : "transparent",
                color: projectsDropdownOpen || isProjectsActive ? "var(--primary)" : "var(--text-secondary)",
                fontWeight: projectsDropdownOpen || isProjectsActive ? 700 : 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <span>{navStr("projects")}</span>
              <ChevronDown
                size={14}
                style={{
                  transform: projectsDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </button>

            {/* Floating Projects Dropdown Menu */}
            {projectsDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "620px",
                  maxWidth: "calc(100vw - 32px)",
                  background: "var(--bg-card)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  borderRadius: "22px",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "0 24px 50px -12px rgba(0, 0, 0, 0.18), 0 0 0 1px var(--border-subtle)",
                  padding: "16px",
                  zIndex: 300,
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                {/* Header label in dropdown */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "4px 8px 12px 8px",
                    borderBottom: "1px solid var(--border-subtle)",
                    marginBottom: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                      style={{
                        width: "26px",
                        height: "26px",
                        borderRadius: "8px",
                        background: "rgba(16, 185, 129, 0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#10b981",
                      }}
                    >
                      <Layers size={15} />
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "var(--text-main)",
                      }}
                    >
                      {navStr("all_projects")}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                    }}
                  >
                    {navStr("projects_desc")}
                  </span>
                </div>

                {/* Projects 2-Column Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: "8px",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  {projects.map((p, idx) => {
                    const Icon = p.icon;
                    const desc = getDesc(p.desc);
                    const isLastOdd = idx === projects.length - 1 && projects.length % 2 === 1;

                    return (
                      <Link
                        key={idx}
                        href={p.href}
                        onClick={() => setProjectsDropdownOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "10px 12px",
                          borderRadius: "14px",
                          textDecoration: "none",
                          transition: "all 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
                          background: "transparent",
                          border: "1px solid transparent",
                          minWidth: 0,
                          width: "100%",
                          boxSizing: "border-box",
                          overflow: "hidden",
                          gridColumn: isLastOdd ? "span 2" : "auto",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(16, 185, 129, 0.05)";
                          e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.25)";
                          e.currentTarget.style.transform = "translateX(2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.borderColor = "transparent";
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                      >
                        <div
                          style={{
                            width: "38px",
                            height: "38px",
                            borderRadius: "10px",
                            overflow: "hidden",
                            backgroundColor: "var(--bg-card)",
                            border: `1px solid ${p.accent}44`,
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          {p.logoDarkUrl ? (
                            <>
                              <Image
                                src={p.logoDarkUrl}
                                alt={p.title}
                                width={38}
                                height={38}
                                className="theme-logo-light"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                              />
                              <Image
                                src={p.logoUrl}
                                alt={p.title}
                                width={38}
                                height={38}
                                className="theme-logo-dark"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                              />
                            </>
                          ) : (
                            <Image
                              src={p.logoUrl}
                              alt={p.title}
                              width={38}
                              height={38}
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                          )}
                        </div>
                        <div style={{ minWidth: 0, flex: 1, overflow: "hidden" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              marginBottom: "2px",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "13.5px",
                                fontWeight: 700,
                                color: "var(--text-main)",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                lineHeight: 1.25,
                              }}
                            >
                              {p.title}
                            </span>
                            <span
                              style={{
                                fontSize: "9px",
                                fontWeight: 800,
                                padding: "1px 5px",
                                borderRadius: "6px",
                                backgroundColor: `${p.badgeColor}18`,
                                color: p.badgeColor,
                                border: `1px solid ${p.badgeColor}33`,
                                letterSpacing: "0.04em",
                                flexShrink: 0,
                              }}
                            >
                              {p.badge}
                            </span>
                          </div>
                          <div
                            style={{
                              fontSize: "11px",
                              color: "var(--text-muted)",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Footer Link in Dropdown */}
                <div
                  style={{
                    marginTop: "12px",
                    paddingTop: "10px",
                    borderTop: "1px solid var(--border-subtle)",
                    textAlign: "center",
                  }}
                >
                  <Link
                    href="/apps"
                    onClick={() => setProjectsDropdownOpen(false)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "12.5px",
                      fontWeight: 700,
                      color: "#10b981",
                      textDecoration: "none",
                      padding: "6px 14px",
                      borderRadius: "10px",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(16, 185, 129, 0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <span>{navStr("view_all_projects")}</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Hakkımızda */}
          <Link
            href="/#about"
            className="hub-nav-pill"
            style={{
              color: isAbout ? "var(--primary)" : "var(--text-secondary)",
              fontWeight: isAbout ? 700 : 600,
            }}
          >
            <span>{navStr("about")}</span>
          </Link>

          {/* Vizyon & Misyon */}
          <Link
            href="/vision-mission"
            className="hub-nav-pill"
            style={{
              color: isVision ? "var(--primary)" : "var(--text-secondary)",
              fontWeight: isVision ? 700 : 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Target size={14} color={isVision ? "var(--primary)" : "var(--text-secondary)"} />
            <span>{navStr("vision")}</span>
          </Link>

          {/* Geliştirici */}
          <Link
            href="/developer"
            className="hub-nav-pill"
            style={{
              color: isDeveloper ? "var(--primary)" : "var(--text-secondary)",
              fontWeight: isDeveloper ? 700 : 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Code size={14} color={isDeveloper ? "var(--primary)" : "var(--text-secondary)"} />
            <span>{navStr("developer")}</span>
          </Link>

          {/* Gizlilik (Privacy Policy) */}
          <Link
            href="/privacy-policy"
            className="hub-nav-pill"
            style={{
              color: isPrivacy ? "var(--primary)" : "var(--text-secondary)",
              fontWeight: isPrivacy ? 700 : 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Shield size={14} color={isPrivacy ? "var(--primary)" : "var(--text-secondary)"} />
            <span>{navStr("privacy")}</span>
          </Link>

          {/* İletişim (Highlighted Green Pill Matching the Screenshot) */}
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 16px",
              borderRadius: "9999px",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
              backgroundColor: isContact
                ? "rgba(16, 185, 129, 0.16)"
                : "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.35)",
              color: "#10b981",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(16, 185, 129, 0.2)";
              e.currentTarget.style.borderColor = "#10b981";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isContact
                ? "rgba(16, 185, 129, 0.16)"
                : "rgba(16, 185, 129, 0.1)";
              e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.35)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>{navStr("contact")}</span>
          </Link>
        </nav>

        {/* Right Actions: Single Language Combobox + Single Theme Combobox + Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <LanguageToggle />
          <ThemeToggle />

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            className="hub-mobile-toggle"
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              border: "1px solid var(--border-subtle)",
              background: "var(--bg-card)",
              color: "var(--text-main)",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "72px",
            left: 0,
            width: "100%",
            height: "calc(100vh - 72px)",
            background: "var(--bg-primary)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            overflowY: "auto",
            padding: "24px 20px 48px 20px",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          {/* Quick Navigation Links */}
          <div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 800,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "12px",
                paddingLeft: "4px",
              }}
            >
              {navStr("menu_pages")}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {/* Ana Sayfa */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  background: isHome ? "var(--badge-bg)" : "var(--bg-glass)",
                  border: `1px solid ${isHome ? "var(--border-active)" : "var(--border-subtle)"}`,
                  color: isHome ? "var(--primary)" : "var(--text-main)",
                  fontSize: "15px",
                  fontWeight: isHome ? 700 : 600,
                  textDecoration: "none",
                  minHeight: "48px",
                }}
              >
                <span>{navStr("home")}</span>
                <ChevronRight size={16} color="var(--text-muted)" />
              </Link>

              {/* Projeler Accordion */}
              <div>
                <button
                  onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 16px",
                    borderRadius: "14px",
                    background: mobileProjectsOpen ? "var(--badge-bg)" : "var(--bg-glass)",
                    border: `1px solid ${mobileProjectsOpen ? "var(--border-active)" : "var(--border-subtle)"}`,
                    color: "var(--text-main)",
                    fontSize: "15px",
                    fontWeight: 600,
                    cursor: "pointer",
                    textAlign: "left",
                    minHeight: "48px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Layers size={18} color="#10b981" />
                    <span>{navStr("projects")} ({navStr("all_projects")})</span>
                  </div>
                  <ChevronDown
                    size={16}
                    color="var(--text-muted)"
                    style={{
                      transform: mobileProjectsOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </button>

                {mobileProjectsOpen && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      padding: "8px 0 8px 12px",
                      marginTop: "4px",
                    }}
                  >
                    {projects.map((p, idx) => (
                      <Link
                        key={idx}
                        href={p.href}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "10px 12px",
                          borderRadius: "12px",
                          background: "var(--bg-glass)",
                          border: "1px solid var(--border-subtle)",
                          color: "var(--text-main)",
                          fontSize: "13.5px",
                          fontWeight: 600,
                          textDecoration: "none",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <div
                            style={{
                              width: "24px",
                              height: "24px",
                              borderRadius: "7px",
                              overflow: "hidden",
                              flexShrink: 0,
                              backgroundColor: "var(--bg-card)",
                              border: `1px solid ${p.accent}44`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {p.logoDarkUrl ? (
                              <>
                                <Image
                                  src={p.logoDarkUrl}
                                  alt={p.title}
                                  width={24}
                                  height={24}
                                  className="theme-logo-light"
                                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                                <Image
                                  src={p.logoUrl}
                                  alt={p.title}
                                  width={24}
                                  height={24}
                                  className="theme-logo-dark"
                                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                              </>
                            ) : (
                              <Image
                                src={p.logoUrl}
                                alt={p.title}
                                width={24}
                                height={24}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                              />
                            )}
                          </div>
                          <span>{p.title}</span>
                        </div>
                        <span
                          style={{
                            fontSize: "9px",
                            fontWeight: 800,
                            padding: "1px 6px",
                            borderRadius: "6px",
                            backgroundColor: `${p.badgeColor}18`,
                            color: p.badgeColor,
                          }}
                        >
                          {p.badge}
                        </span>
                      </Link>
                    ))}
                    <Link
                      href="/apps"
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 12px",
                        borderRadius: "12px",
                        background: "rgba(16, 185, 129, 0.1)",
                        border: "1px solid rgba(16, 185, 129, 0.25)",
                        color: "#10b981",
                        fontSize: "13.5px",
                        fontWeight: 700,
                        textDecoration: "none",
                      }}
                    >
                      <span>{navStr("view_all_projects")}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>

              {/* Hakkımızda */}
              <Link
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  background: isAbout ? "var(--badge-bg)" : "var(--bg-glass)",
                  border: `1px solid ${isAbout ? "var(--border-active)" : "var(--border-subtle)"}`,
                  color: isAbout ? "var(--primary)" : "var(--text-main)",
                  fontSize: "15px",
                  fontWeight: isAbout ? 700 : 600,
                  textDecoration: "none",
                  minHeight: "48px",
                }}
              >
                <span>{navStr("about")}</span>
                <ChevronRight size={16} color="var(--text-muted)" />
              </Link>

              {/* Vizyon & Misyon */}
              <Link
                href="/vision-mission"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  background: isVision ? "var(--badge-bg)" : "var(--bg-glass)",
                  border: `1px solid ${isVision ? "var(--border-active)" : "var(--border-subtle)"}`,
                  color: isVision ? "var(--primary)" : "var(--text-main)",
                  fontSize: "15px",
                  fontWeight: isVision ? 700 : 600,
                  textDecoration: "none",
                  minHeight: "48px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Target size={18} color={isVision ? "var(--primary)" : "var(--text-secondary)"} />
                  <span>{navStr("vision")}</span>
                </div>
                <ChevronRight size={16} color="var(--text-muted)" />
              </Link>

              {/* Geliştirici */}
              <Link
                href="/developer"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  background: isDeveloper ? "var(--badge-bg)" : "var(--bg-glass)",
                  border: `1px solid ${isDeveloper ? "var(--border-active)" : "var(--border-subtle)"}`,
                  color: isDeveloper ? "var(--primary)" : "var(--text-main)",
                  fontSize: "15px",
                  fontWeight: isDeveloper ? 700 : 600,
                  textDecoration: "none",
                  minHeight: "48px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Code size={18} color={isDeveloper ? "var(--primary)" : "var(--text-secondary)"} />
                  <span>{navStr("developer")}</span>
                </div>
                <ChevronRight size={16} color="var(--text-muted)" />
              </Link>

              {/* Gizlilik */}
              <Link
                href="/privacy-policy"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  background: isPrivacy ? "var(--badge-bg)" : "var(--bg-glass)",
                  border: `1px solid ${isPrivacy ? "var(--border-active)" : "var(--border-subtle)"}`,
                  color: isPrivacy ? "var(--primary)" : "var(--text-main)",
                  fontSize: "15px",
                  fontWeight: isPrivacy ? 700 : 600,
                  textDecoration: "none",
                  minHeight: "48px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Shield size={18} color="var(--primary)" />
                  <span>{navStr("privacy")}</span>
                </div>
                <ChevronRight size={16} color="var(--text-muted)" />
              </Link>

              {/* İletişim */}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  background: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.35)",
                  color: "#10b981",
                  fontSize: "15px",
                  fontWeight: 700,
                  textDecoration: "none",
                  minHeight: "48px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <MessageSquare size={18} color="#10b981" />
                  <span>{navStr("contact")}</span>
                </div>
                <ChevronRight size={16} color="#10b981" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
