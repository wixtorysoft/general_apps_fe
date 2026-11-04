"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Shield,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Music,
  Film,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Lock,
  Zap,
  ChevronDown,
  RotateCcw,
  Disc,
  Sliders,
  Mail,
  FileText,
  X,
  Layers,
  ChevronRight,
  ChevronLeft,
  Check,
  Cpu,
  EyeOff,
} from "lucide-react";
import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { resolveI18n } from "@/i18n";

export default function WixtoryPlayerPage() {
  const { language } = useLanguage();
  const { currentThemeMeta } = useTheme();
  const isDark = currentThemeMeta.isDark;

  // Localized string resolver
  const t = (key: string) => resolveI18n("wixtoryPlayer", key, language);

  // Early access notification form state
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Interactive Live Mockup State
  const [activeTab, setActiveTab] = useState<"video" | "audio">("video");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(85);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [isFitContain, setIsFitContain] = useState(true);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Full Privacy Policy Modal State
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  // Simulated Media Items
  const sampleVideos = [
    {
      title: "Neon_City_Night_Drive.mp4",
      duration: "00:45",
      type: "MP4 Video",
      accent: "#00F2FE",
      gradient: "linear-gradient(135deg, #07192F 0%, #0C3656 50%, #032035 100%)",
      tag: "4K 60FPS · 16:9 Landscape",
      sub: "Cihaz İçi Depolama / DCIM / Videos",
    },
    {
      title: "Sunset_Coastal_Horizon.mp4",
      duration: "00:32",
      type: "MP4 Video",
      accent: "#FE2C55",
      gradient: "linear-gradient(135deg, #360D1E 0%, #54142D 50%, #200511 100%)",
      tag: "FHD · 9:16 Portrait",
      sub: "Cihaz İçi Depolama / Download",
    },
    {
      title: "Cyberpunk_Synthwave_Visual.mp4",
      duration: "01:10",
      type: "MP4 Video",
      accent: "#8B5CF6",
      gradient: "linear-gradient(135deg, #1C0F38 0%, #361769 50%, #110724 100%)",
      tag: "120FPS · 16:9 Landscape",
      sub: "Cihaz İçi Depolama / WhatsApp Media",
    },
  ];

  const sampleAudios = [
    {
      title: "Midnight_Echoes_Master.mp3",
      duration: "03:24",
      artist: "Analog Synth Project",
      accent: "#00F2FE",
      sub: "Cihaz İçi Depolama / Music / Synth",
    },
    {
      title: "Deep_Focus_Ambient_Chill.mp3",
      duration: "04:12",
      artist: "Lo-Fi Beats Collective",
      accent: "#10B981",
      sub: "Cihaz İçi Depolama / Audiobooks",
    },
  ];

  const activeMediaList = activeTab === "video" ? sampleVideos : sampleAudios;
  const totalItems = activeMediaList.length;

  // Restore early access subscription from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("wixtory_player_early_access");
      if (saved) {
        setIsSubscribed(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      try {
        localStorage.setItem("wixtory_player_early_access", email);
      } catch {
        // ignore
      }
    }, 600);
  };

  const handleNextMedia = () => {
    // Seamless infinite looping back to start!
    setCurrentMediaIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const cycleSpeed = () => {
    const speeds = [0.5, 1.0, 1.5, 2.0];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    setPlaybackSpeed(speeds[nextIdx]);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        color: "var(--text-main)",
        position: "relative",
        overflowX: "clip",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {/* 1. Global Wixtory Navigation */}
      <MainNavbar />

      {/* Ambient Theme-Aware Atmospheric Glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "1200px",
          height: "650px",
          background: isDark
            ? "radial-gradient(circle at 50% 25%, rgba(0, 242, 254, 0.16) 0%, rgba(254, 44, 85, 0.12) 42%, transparent 70%)"
            : "radial-gradient(circle at 50% 25%, rgba(2, 132, 199, 0.14) 0%, rgba(244, 63, 94, 0.08) 45%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <main style={{ position: "relative", zIndex: 1 }}>
        {/* ============================================================== */}
        {/* HERO SECTION (ELEVATED 2-COLUMN WIDESCREEN LAYOUT)             */}
        {/* ============================================================== */}
        <section
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "60px 24px 80px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "clamp(40px, 6vw, 80px)",
              alignItems: "center",
            }}
          >
            {/* Left Column: Headline, Brand, Early Access */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Eyebrow Pill */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "7px 16px",
                    borderRadius: "9999px",
                    background: isDark ? "rgba(0, 242, 254, 0.1)" : "rgba(2, 132, 199, 0.1)",
                    border: `1px solid ${isDark ? "rgba(0, 242, 254, 0.35)" : "rgba(2, 132, 199, 0.3)"}`,
                    color: isDark ? "#00F2FE" : "#0284C7",
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: "0.06em",
                    boxShadow: isDark
                      ? "0 0 24px rgba(0, 242, 254, 0.2)"
                      : "0 0 20px rgba(2, 132, 199, 0.15)",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: isDark ? "#00F2FE" : "#0284C7",
                      boxShadow: `0 0 8px ${isDark ? "#00F2FE" : "#0284C7"}`,
                    }}
                  />
                  <span>{t("coming_soon_badge")}</span>
                </div>

                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "5px 12px",
                    borderRadius: "9999px",
                    background: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(2, 132, 199, 0.08)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-secondary)",
                  }}
                >
                  %100 Cihaz İçi & Sıfır Bulut
                </span>
              </div>

              {/* App Brand Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "18px",
                    overflow: "hidden",
                    border: `1.5px solid ${isDark ? "rgba(0, 242, 254, 0.4)" : "rgba(2, 132, 199, 0.35)"}`,
                    boxShadow: isDark
                      ? "0 10px 28px rgba(0, 242, 254, 0.28)"
                      : "0 10px 28px rgba(2, 132, 199, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isDark ? "#0D1322" : "#FFFFFF",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src="/apps/wixtory-player-icon.png"
                    alt="Wixtory Player Icon"
                    width={58}
                    height={58}
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
                <div>
                  <h2
                    style={{
                      fontSize: "clamp(24px, 3.2vw, 32px)",
                      fontWeight: 850,
                      color: "var(--text-main)",
                      letterSpacing: "-0.03em",
                      margin: 0,
                    }}
                  >
                    Wixtory Player
                  </h2>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: isDark ? "#00F2FE" : "#0284C7",
                      margin: "2px 0 0",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {t("category_tag")}
                  </p>
                </div>
              </div>

              {/* Main Headline (Theme-Safe High Contrast) */}
              <h1
                style={{
                  fontSize: "clamp(34px, 4.4vw, 56px)",
                  fontWeight: 900,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  margin: 0,
                }}
              >
                <span style={{ color: "var(--text-main)" }}>{t("hero_title_1")} </span>
                <span
                  style={{
                    background: isDark
                      ? "linear-gradient(135deg, #00F2FE 0%, #FE2C55 100%)"
                      : "linear-gradient(135deg, #0284C7 0%, #E11D48 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {t("hero_title_highlight")}
                </span>
                <br />
                <span style={{ color: "var(--text-main)" }}>{t("hero_title_2")}</span>
              </h1>

              {/* Editorial Description */}
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: "580px",
                }}
              >
                {t("hero_description")}
              </p>

              {/* Early Access Notification Capsule */}
              <div
                style={{
                  background: "var(--bg-card)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "22px",
                  padding: "22px",
                  boxShadow: "var(--shadow-card)",
                  marginTop: "6px",
                  maxWidth: "560px",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 800,
                    color: "var(--text-main)",
                    marginBottom: "6px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Zap size={16} color={isDark ? "#00F2FE" : "#0284C7"} />
                  <span>{t("notify_title")}</span>
                </div>
                <p
                  style={{
                    fontSize: "12.5px",
                    color: "var(--text-muted)",
                    marginBottom: "16px",
                    lineHeight: 1.45,
                    margin: "0 0 16px",
                  }}
                >
                  {t("notify_subtitle")}
                </p>

                {isSubscribed ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "14px 18px",
                      borderRadius: "14px",
                      background: "rgba(16, 185, 129, 0.12)",
                      border: "1px solid rgba(16, 185, 129, 0.35)",
                      color: "#10B981",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    <CheckCircle2 size={18} />
                    <span>{t("notify_success")}</span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ flex: "1 1 240px", position: "relative" }}>
                      <Mail
                        size={16}
                        color={isDark ? "#64748B" : "#94A3B8"}
                        style={{
                          position: "absolute",
                          left: "14px",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t("email_placeholder")}
                        style={{
                          width: "100%",
                          padding: "12px 14px 12px 40px",
                          borderRadius: "12px",
                          border: "1px solid var(--border-subtle)",
                          background: isDark ? "rgba(15, 23, 42, 0.65)" : "#FFFFFF",
                          color: "var(--text-main)",
                          fontSize: "14px",
                          outline: "none",
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        padding: "12px 26px",
                        borderRadius: "12px",
                        border: "none",
                        background: isDark
                          ? "linear-gradient(135deg, #00F2FE 0%, #FE2C55 100%)"
                          : "linear-gradient(135deg, #0284C7 0%, #E11D48 100%)",
                        color: "#FFFFFF",
                        fontWeight: 700,
                        fontSize: "14px",
                        cursor: "pointer",
                        boxShadow: "0 8px 24px rgba(254, 44, 85, 0.3)",
                        transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 12px 28px rgba(254, 44, 85, 0.45)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(254, 44, 85, 0.3)";
                      }}
                    >
                      {isSubmitting ? "..." : t("btn_notify")}
                    </button>
                  </form>
                )}
              </div>

              {/* 3 Value Metric Chips */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "12px",
                  marginTop: "8px",
                  maxWidth: "560px",
                }}
              >
                <div
                  style={{
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "14px",
                    padding: "12px 14px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "18px", fontWeight: 900, color: isDark ? "#00F2FE" : "#0284C7" }}>
                    0 ms
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px", fontWeight: 600 }}>
                    Sıfır Bulut Gecikmesi
                  </div>
                </div>

                <div
                  style={{
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "14px",
                    padding: "12px 14px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "18px", fontWeight: 900, color: "#FE2C55" }}>
                    120 FPS
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px", fontWeight: 600 }}>
                    Sonsuz Dikey Döngü
                  </div>
                </div>

                <div
                  style={{
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "14px",
                    padding: "12px 14px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "18px", fontWeight: 900, color: "#10B981" }}>
                    %100
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px", fontWeight: 600 }}>
                    Cihaz İçi Güvence
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Smartphone Mockup */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              {/* Backlight Ambient Glow behind Phone */}
              <div
                style={{
                  position: "absolute",
                  width: "320px",
                  height: "500px",
                  borderRadius: "50%",
                  background: activeMediaList[currentMediaIndex].accent
                    ? `radial-gradient(circle, ${activeMediaList[currentMediaIndex].accent}44 0%, transparent 70%)`
                    : "radial-gradient(circle, rgba(0, 242, 254, 0.25) 0%, transparent 70%)",
                  filter: "blur(60px)",
                  transition: "background 0.5s ease",
                  zIndex: 0,
                }}
              />

              {/* Titanium Smartphone Frame */}
              <div
                style={{
                  width: "100%",
                  maxWidth: "370px",
                  background: isDark ? "#0A0D14" : "#1E293B",
                  borderRadius: "44px",
                  border: isDark ? "4px solid #2A3347" : "4px solid #475569",
                  boxShadow: isDark
                    ? "0 36px 90px -16px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 242, 254, 0.2)"
                    : "0 30px 70px -12px rgba(2, 132, 199, 0.28), 0 10px 30px rgba(0,0,0,0.15)",
                  padding: "12px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Dynamic Island / Top Speaker Notch */}
                <div
                  style={{
                    width: "104px",
                    height: "24px",
                    background: "#08070F",
                    borderRadius: "20px",
                    position: "absolute",
                    top: "18px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 30,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
                  }}
                >
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#111827" }} />
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#00F2FE" }} />
                </div>

                {/* Internal Screen Viewport */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "9 / 18",
                    background: activeMediaList[currentMediaIndex].accent
                      ? (activeMediaList[currentMediaIndex] as any).gradient || "#0E1322"
                      : "#0E1322",
                    borderRadius: "32px",
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    transition: "background 0.5s ease",
                  }}
                >
                  {/* Top Feed Bar: Counter + Looping Indicator */}
                  <div
                    style={{
                      position: "absolute",
                      top: "34px",
                      left: "14px",
                      right: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      zIndex: 20,
                    }}
                  >
                    <span
                      style={{
                        background: "rgba(0, 0, 0, 0.65)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        color: "#FFFFFF",
                        fontSize: "11px",
                        fontWeight: 800,
                        padding: "4px 10px",
                        borderRadius: "12px",
                      }}
                    >
                      {currentMediaIndex + 1} / {totalItems}
                    </span>

                    <div
                      style={{
                        background: "rgba(0, 0, 0, 0.65)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(0, 242, 254, 0.4)",
                        padding: "4px 12px",
                        borderRadius: "16px",
                        fontSize: "11px",
                        fontWeight: 800,
                        color: "#00F2FE",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Disc size={12} />
                      <span>Favori Medyalar</span>
                    </div>

                    <button
                      onClick={handleNextMedia}
                      title="Sonsuz Döngüde İlerle"
                      style={{
                        background: "rgba(254, 44, 85, 0.25)",
                        border: "1px solid rgba(254, 44, 85, 0.5)",
                        color: "#FE2C55",
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <RotateCcw size={13} />
                    </button>
                  </div>

                  {/* Volume Slider HUD (Interactive) */}
                  <div
                    style={{
                      position: "absolute",
                      top: "78px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      zIndex: 20,
                      background: "rgba(0, 0, 0, 0.75)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "20px",
                      padding: "5px 12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: isMuted ? "#FE2C55" : "#00F2FE",
                        cursor: "pointer",
                        padding: 0,
                        display: "flex",
                      }}
                    >
                      {isMuted || volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={isMuted ? 0 : volume}
                      onChange={(e) => {
                        setVolume(Number(e.target.value));
                        if (isMuted) setIsMuted(false);
                      }}
                      style={{
                        width: "75px",
                        accentColor: "#00F2FE",
                        cursor: "pointer",
                      }}
                    />
                    <span style={{ fontSize: "10px", fontWeight: 700, color: "#FFFFFF" }}>
                      {isMuted ? "0%" : `${volume}%`}
                    </span>
                  </div>

                  {/* Video / Audio Content Canvas */}
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "16px",
                      position: "relative",
                    }}
                  >
                    {activeTab === "video" ? (
                      // MP4 Video Frame
                      <div
                        style={{
                          width: "100%",
                          height: isFitContain ? "68%" : "100%",
                          background: "#000000",
                          borderRadius: isFitContain ? "16px" : "0",
                          overflow: "hidden",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          border: isFitContain ? "1px solid rgba(255, 255, 255, 0.12)" : "none",
                          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        <Film size={44} color="#00F2FE" style={{ opacity: 0.85 }} />
                        <div
                          style={{
                            fontSize: "12px",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            marginTop: "8px",
                            textAlign: "center",
                            padding: "0 10px",
                          }}
                        >
                          {sampleVideos[currentMediaIndex].title}
                        </div>
                        <div style={{ fontSize: "10px", color: "#94A3B8", marginTop: "4px" }}>
                          {sampleVideos[currentMediaIndex].tag}
                        </div>

                        {/* Play / Pause Toggle Button */}
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          style={{
                            position: "absolute",
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            background: "rgba(0, 0, 0, 0.55)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.25)",
                            color: "#FFFFFF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                          }}
                        >
                          {isPlaying ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: "3px" }} />}
                        </button>

                        {/* Bottom Seekbar */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "3px",
                            background: "rgba(255, 255, 255, 0.2)",
                          }}
                        >
                          <div
                            style={{
                              width: isPlaying ? "72%" : "35%",
                              height: "100%",
                              background: "#FE2C55",
                              transition: "width 0.3s ease",
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      // MP3 Audio + Vinyl Frame
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {/* Spinning Analog Vinyl */}
                        <div
                          style={{
                            width: "155px",
                            height: "155px",
                            borderRadius: "50%",
                            background:
                              "radial-gradient(circle, #2a2a2a 20%, #111111 25%, #222222 50%, #0d0d0d 75%, #000000 100%)",
                            boxShadow: "0 14px 40px rgba(0, 0, 0, 0.85), 0 0 24px rgba(0, 242, 254, 0.25)",
                            border: "3px solid #1E293B",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            animation: isPlaying ? "spin 6s linear infinite" : "none",
                          }}
                        >
                          <div
                            style={{
                              width: "54px",
                              height: "54px",
                              borderRadius: "50%",
                              background: "linear-gradient(135deg, #00F2FE 0%, #FE2C55 100%)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#FFFFFF",
                              boxShadow: "inset 0 0 8px rgba(0, 0, 0, 0.7)",
                            }}
                          >
                            <Music size={20} />
                          </div>
                        </div>

                        {/* Dynamic Waveform Bars */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-end",
                            gap: "4px",
                            height: "30px",
                            marginTop: "22px",
                          }}
                        >
                          {[16, 28, 20, 32, 24, 18, 30, 22, 14].map((h, i) => (
                            <div
                              key={i}
                              style={{
                                width: "4px",
                                height: isPlaying ? `${h}px` : "6px",
                                borderRadius: "2px",
                                background: "#00F2FE",
                                transition: "height 0.2s ease",
                              }}
                            />
                          ))}
                        </div>

                        <div
                          style={{
                            marginTop: "14px",
                            fontSize: "13px",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            textAlign: "center",
                          }}
                        >
                          {sampleAudios[currentMediaIndex % sampleAudios.length].title}
                        </div>
                        <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: "2px" }}>
                          {sampleAudios[currentMediaIndex % sampleAudios.length].artist}
                        </div>
                      </div>
                    )}

                    {/* Right Hand TikTok Action Pills */}
                    <div
                      style={{
                        position: "absolute",
                        right: "10px",
                        bottom: "55px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "12px",
                        zIndex: 20,
                      }}
                    >
                      {activeTab === "video" && (
                        <button
                          onClick={() => setIsFitContain(!isFitContain)}
                          title={isFitContain ? "Tam Ekran (Cover)" : "En-Boy Sığdır (Contain)"}
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            background: "rgba(0, 0, 0, 0.65)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            color: isFitContain ? "#00F2FE" : "#FE2C55",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                          }}
                        >
                          {isFitContain ? <Maximize2 size={15} /> : <Minimize2 size={15} />}
                        </button>
                      )}

                      <button
                        onClick={cycleSpeed}
                        title="Oynatma Hızı"
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          background: "rgba(0, 0, 0, 0.65)",
                          backdropFilter: "blur(8px)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          color: "#FFFFFF",
                          fontSize: "11px",
                          fontWeight: 800,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        {playbackSpeed}x
                      </button>

                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          background: "#111827",
                          border: "2px solid #FE2C55",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          animation: isPlaying ? "spin 4s linear infinite" : "none",
                        }}
                      >
                        <Music size={14} color="#FE2C55" />
                      </div>
                    </div>

                    {/* Bottom Metadata */}
                    <div
                      style={{
                        position: "absolute",
                        left: "14px",
                        bottom: "55px",
                        right: "60px",
                        zIndex: 15,
                      }}
                    >
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 800,
                          color: "#FFFFFF",
                          textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                        }}
                      >
                        @my_storage
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#E2E8F0",
                          marginTop: "2px",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                        }}
                      >
                        <Music size={11} color="#00F2FE" />
                        <span>{activeMediaList[currentMediaIndex].title}</span>
                      </div>
                    </div>
                  </div>

                  {/* Phone Bottom Mode Bar */}
                  <div
                    style={{
                      height: "44px",
                      background: "rgba(0, 0, 0, 0.88)",
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      zIndex: 25,
                    }}
                  >
                    <button
                      onClick={() => {
                        setActiveTab("video");
                        setCurrentMediaIndex(0);
                      }}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: activeTab === "video" ? "#00F2FE" : "#64748B",
                        fontSize: "11px",
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <Film size={13} />
                      <span>MP4 Video</span>
                    </button>

                    <button
                      onClick={() => {
                        setActiveTab("audio");
                        setCurrentMediaIndex(0);
                      }}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: activeTab === "audio" ? "#00F2FE" : "#64748B",
                        fontSize: "11px",
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <Music size={13} />
                      <span>MP3 Müzik</span>
                    </button>
                  </div>
                </div>

                {/* External Controller Row under Phone */}
                <div
                  style={{
                    marginTop: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 6px",
                  }}
                >
                  <button
                    onClick={handlePrevMedia}
                    style={{
                      background: isDark ? "rgba(255, 255, 255, 0.08)" : "#FFFFFF",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-main)",
                      padding: "7px 14px",
                      borderRadius: "10px",
                      fontSize: "12px",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <ChevronLeft size={14} />
                    <span>Önceki</span>
                  </button>

                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    style={{
                      background: isPlaying ? "rgba(254, 44, 85, 0.2)" : "rgba(0, 242, 254, 0.2)",
                      border: `1px solid ${isPlaying ? "#FE2C55" : "#00F2FE"}`,
                      color: isPlaying ? "#FE2C55" : isDark ? "#00F2FE" : "#0284C7",
                      padding: "7px 16px",
                      borderRadius: "10px",
                      fontSize: "12px",
                      fontWeight: 800,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                    <span>{isPlaying ? "Durdur" : "Oynat"}</span>
                  </button>

                  <button
                    onClick={handleNextMedia}
                    style={{
                      background: isDark ? "rgba(255, 255, 255, 0.08)" : "#FFFFFF",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-main)",
                      padding: "7px 14px",
                      borderRadius: "10px",
                      fontSize: "12px",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span>Sonraki</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* CORE ARCHITECTURAL PILLARS (HIGH-END BENTO GRID)               */}
        {/* ============================================================== */}
        <section
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "40px 24px 80px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 800,
                color: isDark ? "#00F2FE" : "#0284C7",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              MİMARİ & PERFORMANS
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 850,
                color: "var(--text-main)",
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Neden Wixtory Player?
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Bento Card 1 */}
            <div
              style={{
                background: "var(--bg-card)",
                backdropFilter: "blur(16px)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "var(--shadow-card)",
                transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.35)",
                  color: "#10B981",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <Shield size={24} />
              </div>
              <h3 style={{ fontSize: "19px", fontWeight: 800, color: "var(--text-main)", margin: "0 0 10px" }}>
                {t("pillar_1_title")}
              </h3>
              <p style={{ fontSize: "14.5px", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {t("pillar_1_desc")}
              </p>
            </div>

            {/* Bento Card 2 */}
            <div
              style={{
                background: "var(--bg-card)",
                backdropFilter: "blur(16px)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "var(--shadow-card)",
                transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: isDark ? "rgba(0, 242, 254, 0.12)" : "rgba(2, 132, 199, 0.12)",
                  border: `1px solid ${isDark ? "rgba(0, 242, 254, 0.35)" : "rgba(2, 132, 199, 0.3)"}`,
                  color: isDark ? "#00F2FE" : "#0284C7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <RotateCcw size={24} />
              </div>
              <h3 style={{ fontSize: "19px", fontWeight: 800, color: "var(--text-main)", margin: "0 0 10px" }}>
                {t("pillar_2_title")}
              </h3>
              <p style={{ fontSize: "14.5px", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {t("pillar_2_desc")}
              </p>
            </div>

            {/* Bento Card 3 */}
            <div
              style={{
                background: "var(--bg-card)",
                backdropFilter: "blur(16px)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "var(--shadow-card)",
                transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "rgba(254, 44, 85, 0.12)",
                  border: "1px solid rgba(254, 44, 85, 0.35)",
                  color: "#FE2C55",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <Disc size={24} />
              </div>
              <h3 style={{ fontSize: "19px", fontWeight: 800, color: "var(--text-main)", margin: "0 0 10px" }}>
                {t("pillar_3_title")}
              </h3>
              <p style={{ fontSize: "14.5px", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {t("pillar_3_desc")}
              </p>
            </div>

            {/* Bento Card 4 */}
            <div
              style={{
                background: "var(--bg-card)",
                backdropFilter: "blur(16px)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "var(--shadow-card)",
                transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "rgba(245, 158, 11, 0.12)",
                  border: "1px solid rgba(245, 158, 11, 0.35)",
                  color: "#F59E0B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <Sliders size={24} />
              </div>
              <h3 style={{ fontSize: "19px", fontWeight: 800, color: "var(--text-main)", margin: "0 0 10px" }}>
                {t("pillar_4_title")}
              </h3>
              <p style={{ fontSize: "14.5px", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {t("pillar_4_desc")}
              </p>
            </div>

            {/* Bento Card 5 */}
            <div
              style={{
                background: "var(--bg-card)",
                backdropFilter: "blur(16px)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "var(--shadow-card)",
                transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "rgba(59, 130, 246, 0.12)",
                  border: "1px solid rgba(59, 130, 246, 0.35)",
                  color: "#3B82F6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <Cpu size={24} />
              </div>
              <h3 style={{ fontSize: "19px", fontWeight: 800, color: "var(--text-main)", margin: "0 0 10px" }}>
                {t("pillar_5_title")}
              </h3>
              <p style={{ fontSize: "14.5px", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {t("pillar_5_desc")}
              </p>
            </div>

            {/* Bento Card 6 */}
            <div
              style={{
                background: "var(--bg-card)",
                backdropFilter: "blur(16px)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "var(--shadow-card)",
                transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "rgba(168, 85, 247, 0.12)",
                  border: "1px solid rgba(168, 85, 247, 0.35)",
                  color: "#A855F7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <EyeOff size={24} />
              </div>
              <h3 style={{ fontSize: "19px", fontWeight: 800, color: "var(--text-main)", margin: "0 0 10px" }}>
                {t("pillar_6_title")}
              </h3>
              <p style={{ fontSize: "14.5px", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {t("pillar_6_desc")}
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 3: TRADITIONAL PLAYERS VS WIXTORY PLAYER               */}
        {/* ============================================================== */}
        <section
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "20px 24px 80px",
          }}
        >
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "28px",
              padding: "clamp(28px, 4vw, 48px)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  color: isDark ? "#00F2FE" : "#0284C7",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                STANDARTLARI YENİDEN YAZIYORUZ
              </span>
              <h2
                style={{
                  fontSize: "clamp(24px, 3.5vw, 36px)",
                  fontWeight: 850,
                  color: "var(--text-main)",
                  margin: "8px 0 0",
                  letterSpacing: "-0.02em",
                }}
              >
                Geleneksel Oynatıcılar ile Wixtory Player Farkı
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {/* Legacy Players Column */}
              <div
                style={{
                  background: isDark ? "rgba(255, 255, 255, 0.02)" : "rgba(241, 245, 249, 0.6)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "20px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "#EF4444",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <X size={18} />
                  <span>Eski Tip Medya Oynatıcılar</span>
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    fontSize: "13.5px",
                    color: "var(--text-secondary)",
                  }}
                >
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <span style={{ color: "#EF4444", fontWeight: 800 }}>✕</span>
                    <span>Yatay videoları dikey ekranda kenarlardan keser ve içeriği bozar.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <span style={{ color: "#EF4444", fontWeight: 800 }}>✕</span>
                    <span>Listenin son videosuna geldiğinde donup durur, akış kesilir.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <span style={{ color: "#EF4444", fontWeight: 800 }}>✕</span>
                    <span>Dosyaları bulut hesabına senkronize etmeye zorlar veya reklam gösterir.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <span style={{ color: "#EF4444", fontWeight: 800 }}>✕</span>
                    <span>Müzik ve videolar için ayrı pencereler ve hantal klasör ağaçları kullanır.</span>
                  </li>
                </ul>
              </div>

              {/* Wixtory Player Column */}
              <div
                style={{
                  background: isDark ? "rgba(0, 242, 254, 0.05)" : "rgba(2, 132, 199, 0.05)",
                  border: `1.5px solid ${isDark ? "rgba(0, 242, 254, 0.35)" : "rgba(2, 132, 199, 0.35)"}`,
                  borderRadius: "20px",
                  padding: "24px",
                  boxShadow: isDark
                    ? "0 10px 30px rgba(0, 242, 254, 0.12)"
                    : "0 10px 30px rgba(2, 132, 199, 0.1)",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: isDark ? "#00F2FE" : "#0284C7",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Check size={18} />
                  <span>Wixtory Player Deneyimi</span>
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    fontSize: "13.5px",
                    color: "var(--text-main)",
                    fontWeight: 500,
                  }}
                >
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <span style={{ color: "#10B981", fontWeight: 800 }}>✓</span>
                    <span><strong>Akıllı Sığdırma (Contain):</strong> Yatay videolar asla kırpılmaz, tam genişliğe hizalanır.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <span style={{ color: "#10B981", fontWeight: 800 }}>✓</span>
                    <span><strong>Sonsuz TikTok Döngüsü:</strong> Son medyadan sonra doğrudan başa döner, akış asla bitmez.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <span style={{ color: "#10B981", fontWeight: 800 }}>✓</span>
                    <span><strong>%100 Cihaz İçi & Sıfır Bulut:</strong> Sıfır sunucu transferi, sıfır reklam ve sıfır takip.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <span style={{ color: "#10B981", fontWeight: 800 }}>✓</span>
                    <span><strong>MP3 & MP4 Hibrit Liste:</strong> Videolar ve müzikler aynı akışta, döner plak eşliğinde çalar.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* DEDICATED PRIVACY POLICY SPOTLIGHT SECTION                     */}
        {/* ============================================================== */}
        <section
          id="privacy"
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "20px 24px 80px",
          }}
        >
          <div
            style={{
              background: "var(--bg-card)",
              border: `1.5px solid ${isDark ? "rgba(0, 242, 254, 0.3)" : "rgba(2, 132, 199, 0.25)"}`,
              borderRadius: "32px",
              padding: "clamp(28px, 4vw, 48px)",
              position: "relative",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "9999px",
                background: isDark ? "rgba(0, 242, 254, 0.1)" : "rgba(2, 132, 199, 0.1)",
                color: isDark ? "#00F2FE" : "#0284C7",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.08em",
                marginBottom: "16px",
              }}
            >
              <Shield size={14} />
              <span>{t("privacy_section_badge")}</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(24px, 3.2vw, 36px)",
                fontWeight: 850,
                color: "var(--text-main)",
                margin: "0 0 16px",
                letterSpacing: "-0.02em",
              }}
            >
              {t("privacy_title")}
            </h2>

            <p
              style={{
                fontSize: "15px",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                marginBottom: "32px",
                maxWidth: "860px",
              }}
            >
              {t("privacy_lead")}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  background: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(241, 245, 249, 0.8)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "18px",
                  padding: "22px",
                }}
              >
                <div style={{ fontSize: "15px", fontWeight: 800, color: "var(--text-main)", marginBottom: "8px" }}>
                  {t("privacy_point_1_title")}
                </div>
                <div style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {t("privacy_point_1_desc")}
                </div>
              </div>

              <div
                style={{
                  background: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(241, 245, 249, 0.8)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "18px",
                  padding: "22px",
                }}
              >
                <div style={{ fontSize: "15px", fontWeight: 800, color: "var(--text-main)", marginBottom: "8px" }}>
                  {t("privacy_point_2_title")}
                </div>
                <div style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {t("privacy_point_2_desc")}
                </div>
              </div>

              <div
                style={{
                  background: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(241, 245, 249, 0.8)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "18px",
                  padding: "22px",
                }}
              >
                <div style={{ fontSize: "15px", fontWeight: 800, color: "var(--text-main)", marginBottom: "8px" }}>
                  {t("privacy_point_3_title")}
                </div>
                <div style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {t("privacy_point_3_desc")}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
              <button
                onClick={() => setShowPrivacyModal(true)}
                style={{
                  padding: "12px 24px",
                  borderRadius: "12px",
                  background: isDark ? "rgba(0, 242, 254, 0.15)" : "rgba(2, 132, 199, 0.12)",
                  border: `1px solid ${isDark ? "rgba(0, 242, 254, 0.4)" : "rgba(2, 132, 199, 0.35)"}`,
                  color: isDark ? "#00F2FE" : "#0284C7",
                  fontWeight: 700,
                  fontSize: "13.5px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <FileText size={16} />
                <span>{t("view_privacy_page")} (Hızlı İncele)</span>
              </button>

              <Link
                href="/wixtory-player/privacy"
                style={{
                  padding: "12px 24px",
                  borderRadius: "12px",
                  background: isDark ? "rgba(255, 255, 255, 0.05)" : "#FFFFFF",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-main)",
                  fontWeight: 700,
                  fontSize: "13.5px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                }}
              >
                <span>Resmi Yasal Sayfa</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 5: INTERACTIVE FAQ ACCORDION                           */}
        {/* ============================================================== */}
        <section
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            padding: "20px 24px 100px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 3.2vw, 36px)",
              fontWeight: 850,
              color: "var(--text-main)",
              textAlign: "center",
              marginBottom: "36px",
              letterSpacing: "-0.02em",
            }}
          >
            {t("faq_title")}
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { q: t("faq_1_q"), a: t("faq_1_a") },
              { q: t("faq_2_q"), a: t("faq_2_a") },
              { q: t("faq_3_q"), a: t("faq_3_a") },
            ].map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "transparent",
                    border: "none",
                    color: "var(--text-main)",
                    fontSize: "15.5px",
                    fontWeight: 750,
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: openFaq === idx ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                      color: isDark ? "#00F2FE" : "#0284C7",
                    }}
                  />
                </button>
                {openFaq === idx && (
                  <div
                    style={{
                      padding: "0 24px 20px",
                      fontSize: "14.5px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                      borderTop: "1px solid var(--border-subtle)",
                      paddingTop: "16px",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ============================================================== */}
      {/* QUICK PRIVACY POLICY MODAL (THEME-AWARE)                       */}
      {/* ============================================================== */}
      {showPrivacyModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(14px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setShowPrivacyModal(false)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "720px",
              maxHeight: "85vh",
              overflowY: "auto",
              background: "var(--card-bg)",
              border: `1.5px solid ${isDark ? "rgba(0, 242, 254, 0.4)" : "rgba(2, 132, 199, 0.35)"}`,
              borderRadius: "26px",
              padding: "36px",
              position: "relative",
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.6)",
              color: "var(--text-main)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPrivacyModal(false)}
              style={{
                position: "absolute",
                top: "22px",
                right: "22px",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-main)",
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={16} />
            </button>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "11px",
                color: isDark ? "#00F2FE" : "#0284C7",
                fontWeight: 800,
                marginBottom: "8px",
              }}
            >
              <Shield size={14} />
              <span>WIXTORY PLAYER · RESMİ GİZLİLİK POLİTİKASI</span>
            </div>

            <h3 style={{ fontSize: "22px", fontWeight: 850, color: "var(--text-main)", margin: "0 0 16px" }}>
              {t("privacy_title")}
            </h3>

            <div style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "20px" }}>
              <p>{t("privacy_lead")}</p>
              <h4 style={{ color: "var(--text-main)", fontSize: "15px", margin: "16px 0 8px", fontWeight: 800 }}>
                {t("privacy_point_1_title")}
              </h4>
              <p>{t("privacy_point_1_desc")}</p>
              <h4 style={{ color: "var(--text-main)", fontSize: "15px", margin: "16px 0 8px", fontWeight: 800 }}>
                {t("privacy_point_2_title")}
              </h4>
              <p>{t("privacy_point_2_desc")}</p>
              <h4 style={{ color: "var(--text-main)", fontSize: "15px", margin: "16px 0 8px", fontWeight: 800 }}>
                {t("privacy_point_3_title")}
              </h4>
              <p>{t("privacy_point_3_desc")}</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: "16px",
              }}
            >
              <Link
                href="/wixtory-player/privacy"
                style={{
                  color: isDark ? "#00F2FE" : "#0284C7",
                  fontSize: "13px",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>Resmi Yasal Sayfada Aç</span>
                <ArrowRight size={14} />
              </Link>

              <button
                onClick={() => setShowPrivacyModal(false)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "10px",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-main)",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global CSS for Vinyl Animation */}
      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* Global Ecosystem Footer */}
      <MainFooter />
    </div>
  );
}
