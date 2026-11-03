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
  Gauge,
  FolderPlus,
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
} from "lucide-react";
import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";
import { useLanguage } from "@/context/LanguageContext";
import { resolveI18n } from "@/i18n";

export default function WixtoryPlayerPage() {
  const { language } = useLanguage();

  // Helper for localized strings
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Full Privacy Policy Modal State
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  // Simulated Media Items
  const sampleVideos = [
    {
      title: "Neon_City_Night_Drive.mp4",
      duration: "00:45",
      type: "MP4 Video",
      accent: "#00F2FE",
      gradient: "linear-gradient(135deg, #091224 0%, #0d2847 50%, #064057 100%)",
      tag: "4K 60FPS · 16:9 Landscape",
      sub: "Cihaz İçi Hafıza / DCIM / Videos",
    },
    {
      title: "Sunset_Coastal_Horizon.mp4",
      duration: "00:32",
      type: "MP4 Video",
      accent: "#FE2C55",
      gradient: "linear-gradient(135deg, #2b0b1c 0%, #451025 50%, #611833 100%)",
      tag: "FHD · 9:16 Portrait",
      sub: "Cihaz İçi Hafıza / Download",
    },
    {
      title: "Cyberpunk_Synthwave_Visual.mp4",
      duration: "01:10",
      type: "MP4 Video",
      accent: "#8B5CF6",
      gradient: "linear-gradient(135deg, #1b0c33 0%, #2e1257 50%, #4c1d95 100%)",
      tag: "120FPS · 16:9 Landscape",
      sub: "Cihaz İçi Hafıza / WhatsApp Media",
    },
  ];

  const sampleAudios = [
    {
      title: "Midnight_Echoes_Master.mp3",
      duration: "03:24",
      artist: "Analog Synth Project",
      accent: "#00F2FE",
      sub: "Cihaz İçi Hafıza / Music / Synth",
    },
    {
      title: "Deep_Focus_Ambient_Chill.mp3",
      duration: "04:12",
      artist: "Lo-Fi Beats Collective",
      accent: "#10B981",
      sub: "Cihaz İçi Hafıza / Audiobooks",
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
      // ignore in strict privacy environments
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
    // Seamless infinite looping!
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
        background: "#08070F",
        color: "#F3F4F6",
        position: "relative",
        overflowX: "clip",
        fontFamily: "'Space Grotesk', 'Outfit', sans-serif",
      }}
    >
      {/* 1. Global Wixtory Navigation */}
      <MainNavbar />

      {/* Hero Ambient Glow Layer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "1000px",
          height: "600px",
          background:
            "radial-gradient(circle at 50% 30%, rgba(0, 242, 254, 0.15) 0%, rgba(254, 44, 85, 0.12) 40%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <main style={{ position: "relative", zIndex: 1 }}>
        {/* ============================================================== */}
        {/* HERO SECTION                                                   */}
        {/* ============================================================== */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 24px 60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Eyebrow Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "999px",
              background: "rgba(0, 242, 254, 0.08)",
              border: "1px solid rgba(0, 242, 254, 0.35)",
              color: "#00F2FE",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              marginBottom: "28px",
              boxShadow: "0 0 20px rgba(0, 242, 254, 0.2)",
            }}
          >
            <Sparkles size={14} />
            <span>{t("coming_soon_badge")}</span>
          </div>

          {/* App Title with Icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1.5px solid rgba(0, 242, 254, 0.4)",
                boxShadow: "0 8px 24px rgba(0, 242, 254, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#0F111E",
              }}
            >
              <Image
                src="/apps/wixtory-player-icon.png"
                alt="Wixtory Player Icon"
                width={56}
                height={56}
                style={{ objectFit: "cover" }}
              />
            </div>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Wixtory Player
            </h2>
          </div>

          {/* Hero Main Heading */}
          <h1
            style={{
              fontSize: "clamp(32px, 5.5vw, 62px)",
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: "960px",
              letterSpacing: "-0.03em",
              margin: "0 0 24px",
            }}
          >
            <span>{t("hero_title_1")} </span>
            <span
              style={{
                background: "linear-gradient(135deg, #00F2FE 0%, #FE2C55 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("hero_title_highlight")}
            </span>
            <br />
            <span>{t("hero_title_2")}</span>
          </h1>

          {/* Hero Subtitle */}
          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 19px)",
              color: "#94A3B8",
              maxWidth: "760px",
              lineHeight: 1.6,
              margin: "0 0 40px",
            }}
          >
            {t("hero_description")}
          </p>

          {/* Early Access Notification Form Box */}
          <div
            style={{
              width: "100%",
              maxWidth: "560px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(16px)",
              borderRadius: "24px",
              padding: "24px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#E2E8F0",
                marginBottom: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <Zap size={16} color="#00F2FE" />
              <span>{t("notify_title")}</span>
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "#94A3B8",
                marginBottom: "16px",
                lineHeight: 1.4,
              }}
            >
              {t("notify_subtitle")}
            </p>

            {isSubscribed ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "14px 18px",
                  borderRadius: "14px",
                  background: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.35)",
                  color: "#10B981",
                  fontSize: "13px",
                  fontWeight: 600,
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
                <div
                  style={{
                    flex: "1 1 240px",
                    position: "relative",
                  }}
                >
                  <Mail
                    size={16}
                    color="#64748B"
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
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      background: "rgba(15, 23, 42, 0.6)",
                      color: "#FFFFFF",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "12px",
                    border: "none",
                    background: "linear-gradient(135deg, #00F2FE 0%, #FE2C55 100%)",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "14px",
                    cursor: "pointer",
                    boxShadow: "0 8px 20px rgba(254, 44, 85, 0.35)",
                    transition: "transform 0.15s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  {isSubmitting ? "..." : t("btn_notify")}
                </button>
              </form>
            )}
          </div>

          {/* Quick Pillar Micro-Badges */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              flexWrap: "wrap",
              fontSize: "13px",
              color: "#94A3B8",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Shield size={15} color="#10B981" />
              %100 Cihaz İçi & Sıfır Bulut
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Layers size={15} color="#00F2FE" />
              Sonsuz Dikey Reel Akışı
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Lock size={15} color="#FE2C55" />
              Sıfır Reklam & Sıfır Takipçi
            </span>
          </div>
        </section>

        {/* ============================================================== */}
        {/* INTERACTIVE LIVE MOCKUP SHOWCASE SECTION                       */}
        {/* ============================================================== */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "40px 24px 80px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 38px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                margin: "0 0 12px",
              }}
            >
              {t("interactive_demo_title")}
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#94A3B8",
                maxWidth: "650px",
                margin: "0 auto",
                lineHeight: 1.5,
              }}
            >
              {t("interactive_demo_sub")}
            </p>
          </div>

          {/* Interactive Phone Frame Container */}
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
                maxWidth: "380px",
                background: "#000000",
                borderRadius: "44px",
                border: "4px solid #222634",
                boxShadow:
                  "0 32px 80px -16px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 242, 254, 0.15)",
                padding: "12px",
                position: "relative",
              }}
            >
              {/* Dynamic Island / Top Speaker Pill */}
              <div
                style={{
                  width: "100px",
                  height: "22px",
                  background: "#161922",
                  borderRadius: "20px",
                  position: "absolute",
                  top: "18px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#08070F",
                  }}
                />
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "#00F2FE",
                  }}
                />
              </div>

              {/* Internal Phone Screen Canvas */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "9 / 18",
                  background: activeMediaList[currentMediaIndex].accent
                    ? (activeMediaList[currentMediaIndex] as any).gradient || "#0E1322"
                    : "#0E1322",
                  borderRadius: "34px",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  transition: "background 0.5s ease",
                }}
              >
                {/* Simulated Top Feed Header */}
                <div
                  style={{
                    position: "absolute",
                    top: "34px",
                    left: "14px",
                    right: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    zIndex: 10,
                  }}
                >
                  {/* Media Counter Badge */}
                  <span
                    style={{
                      background: "rgba(0, 0, 0, 0.6)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#FFFFFF",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "12px",
                    }}
                  >
                    {currentMediaIndex + 1} / {totalItems}
                  </span>

                  {/* Playlist Selector Pill */}
                  <div
                    style={{
                      background: "rgba(0, 0, 0, 0.6)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(0, 242, 254, 0.4)",
                      padding: "4px 12px",
                      borderRadius: "16px",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#00F2FE",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Disc size={12} />
                    <span>Favori Medyalar</span>
                  </div>

                  {/* Infinite Loop Indicator */}
                  <button
                    onClick={handleNextMedia}
                    title="Sonraki Medya (Sonsuz Döngü)"
                    style={{
                      background: "rgba(254, 44, 85, 0.2)",
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

                {/* Floating Volume Slider HUD (Visible when adjusting) */}
                <div
                  style={{
                    position: "absolute",
                    top: "80px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 15,
                    background: "rgba(0, 0, 0, 0.75)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "20px",
                    padding: "6px 14px",
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
                      width: "80px",
                      accentColor: "#00F2FE",
                      cursor: "pointer",
                    }}
                  />
                  <span style={{ fontSize: "10px", fontWeight: 700, color: "#FFFFFF" }}>
                    {isMuted ? "0%" : `${volume}%`}
                  </span>
                </div>

                {/* Main Reel Viewport Body */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    position: "relative",
                  }}
                >
                  {activeTab === "video" ? (
                    // Simulated MP4 Video Reel Screen
                    <div
                      style={{
                        width: "100%",
                        height: isFitContain ? "70%" : "100%",
                        background: "#000000",
                        borderRadius: isFitContain ? "16px" : "0",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        border: isFitContain ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {/* Video Aspect Ratio Simulation Graphics */}
                      <Film size={44} color="#00F2FE" style={{ opacity: 0.8 }} />
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          marginTop: "8px",
                          textAlign: "center",
                        }}
                      >
                        {sampleVideos[currentMediaIndex].title}
                      </div>
                      <div
                        style={{
                          fontSize: "10px",
                          color: "#94A3B8",
                          marginTop: "4px",
                        }}
                      >
                        {sampleVideos[currentMediaIndex].tag}
                      </div>

                      {/* Play/Pause Watermark Overlay */}
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        style={{
                          position: "absolute",
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          background: "rgba(0, 0, 0, 0.5)",
                          backdropFilter: "blur(8px)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        {isPlaying ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: "3px" }} />}
                      </button>

                      {/* Video Progress Bar */}
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
                            width: isPlaying ? "65%" : "30%",
                            height: "100%",
                            background: "#FE2C55",
                            transition: "width 0.3s ease",
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    // Simulated MP3 Music & Vinyl Player Screen
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* Realistic Spinning Vinyl Record */}
                      <div
                        style={{
                          width: "160px",
                          height: "160px",
                          borderRadius: "50%",
                          background:
                            "radial-gradient(circle, #2a2a2a 20%, #111111 25%, #222222 50%, #0d0d0d 75%, #000000 100%)",
                          boxShadow: "0 12px 36px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 242, 254, 0.2)",
                          border: "3px solid #1A1A1A",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          animation: isPlaying ? "spin 6s linear infinite" : "none",
                        }}
                      >
                        {/* Vinyl Center Label */}
                        <div
                          style={{
                            width: "55px",
                            height: "55px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #00F2FE 0%, #FE2C55 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#FFFFFF",
                            boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          <Music size={20} />
                        </div>
                      </div>

                      {/* Animated Audio Equalizer Waveform Bars */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                          gap: "4px",
                          height: "32px",
                          marginTop: "24px",
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
                          fontWeight: 700,
                          color: "#FFFFFF",
                          textAlign: "center",
                        }}
                      >
                        {sampleAudios[currentMediaIndex % sampleAudios.length].title}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#94A3B8",
                          marginTop: "2px",
                        }}
                      >
                        {sampleAudios[currentMediaIndex % sampleAudios.length].artist}
                      </div>
                    </div>
                  )}

                  {/* Bottom Right Floating Action Bar (TikTok Style) */}
                  <div
                    style={{
                      position: "absolute",
                      right: "12px",
                      bottom: "55px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "14px",
                      zIndex: 15,
                    }}
                  >
                    {/* Aspect Ratio Switcher (Contain / Cover) */}
                    {activeTab === "video" && (
                      <button
                        onClick={() => setIsFitContain(!isFitContain)}
                        title={isFitContain ? "Tam Ekran (Cover)" : "En-Boy Sığdır (Contain)"}
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "50%",
                          background: "rgba(0, 0, 0, 0.6)",
                          backdropFilter: "blur(8px)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          color: isFitContain ? "#00F2FE" : "#FE2C55",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        {isFitContain ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                      </button>
                    )}

                    {/* Speed Multiplier Button */}
                    <button
                      onClick={cycleSpeed}
                      title="Oynatma Hızı"
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        background: "rgba(0, 0, 0, 0.6)",
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

                    {/* Playlists Button */}
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        background: "rgba(0, 0, 0, 0.6)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "#00F2FE",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FolderPlus size={16} />
                    </div>

                    {/* Spinning Mini Disc */}
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "#111",
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

                  {/* Bottom Left Info Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      left: "14px",
                      bottom: "55px",
                      right: "60px",
                      zIndex: 12,
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
                        color: "#CBD5E1",
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

                {/* Simulated Bottom App Bar Nav */}
                <div
                  style={{
                    height: "46px",
                    background: "rgba(0, 0, 0, 0.85)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    padding: "0 10px",
                    zIndex: 20,
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
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      cursor: "pointer",
                    }}
                  >
                    <Film size={13} />
                    <span>Video</span>
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
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      cursor: "pointer",
                    }}
                  >
                    <Music size={13} />
                    <span>Müzik</span>
                  </button>
                </div>
              </div>

              {/* External Interactive Controls Under Phone */}
              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 8px",
                }}
              >
                <button
                  onClick={handlePrevMedia}
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#FFFFFF",
                    padding: "8px 14px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
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
                    color: isPlaying ? "#FE2C55" : "#00F2FE",
                    padding: "8px 16px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: 700,
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
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#FFFFFF",
                    padding: "8px 14px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span>Sonraki</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* CORE ARCHITECTURAL PILLARS (BENTO GRID)                       */}
        {/* ============================================================== */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "40px 24px 80px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 800,
                color: "#00F2FE",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              MİMARİ & PERFORMANS
            </div>
            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 42px)",
                fontWeight: 800,
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
            {/* Pillar 1 */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "24px",
                padding: "28px",
                transition: "border-color 0.2s, transform 0.2s",
              }}
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
              <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 10px" }}>
                {t("pillar_1_title")}
              </h3>
              <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.6, margin: 0 }}>
                {t("pillar_1_desc")}
              </p>
            </div>

            {/* Pillar 2 */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "24px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "rgba(0, 242, 254, 0.12)",
                  border: "1px solid rgba(0, 242, 254, 0.35)",
                  color: "#00F2FE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <RotateCcw size={24} />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 10px" }}>
                {t("pillar_2_title")}
              </h3>
              <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.6, margin: 0 }}>
                {t("pillar_2_desc")}
              </p>
            </div>

            {/* Pillar 3 */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "24px",
                padding: "28px",
              }}
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
              <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 10px" }}>
                {t("pillar_3_title")}
              </h3>
              <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.6, margin: 0 }}>
                {t("pillar_3_desc")}
              </p>
            </div>

            {/* Pillar 4 */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "24px",
                padding: "28px",
              }}
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
              <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 10px" }}>
                {t("pillar_4_title")}
              </h3>
              <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.6, margin: 0 }}>
                {t("pillar_4_desc")}
              </p>
            </div>

            {/* Pillar 5 */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "24px",
                padding: "28px",
              }}
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
                <Smartphone size={24} />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 10px" }}>
                {t("pillar_5_title")}
              </h3>
              <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.6, margin: 0 }}>
                {t("pillar_5_desc")}
              </p>
            </div>

            {/* Pillar 6 */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "24px",
                padding: "28px",
              }}
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
                <Lock size={24} />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 10px" }}>
                {t("pillar_6_title")}
              </h3>
              <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.6, margin: 0 }}>
                {t("pillar_6_desc")}
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* DEDICATED PRIVACY POLICY & ZERO-TRUST SECTION                  */}
        {/* ============================================================== */}
        <section
          id="privacy"
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "40px 24px 80px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(145deg, rgba(14, 20, 36, 0.8) 0%, rgba(9, 12, 22, 0.95) 100%)",
              border: "1.5px solid rgba(0, 242, 254, 0.25)",
              borderRadius: "32px",
              padding: "40px",
              position: "relative",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.6)",
            }}
          >
            {/* Header Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "rgba(0, 242, 254, 0.1)",
                color: "#00F2FE",
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
                fontWeight: 800,
                margin: "0 0 16px",
              }}
            >
              {t("privacy_title")}
            </h2>

            <p
              style={{
                fontSize: "15px",
                color: "#CBD5E1",
                lineHeight: 1.65,
                marginBottom: "32px",
              }}
            >
              {t("privacy_lead")}
            </p>

            {/* 3 Privacy Guarantee Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
                marginBottom: "32px",
              }}
            >
              {/* Point 1 */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  padding: "20px",
                }}
              >
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#FFFFFF", marginBottom: "6px" }}>
                  {t("privacy_point_1_title")}
                </div>
                <div style={{ fontSize: "13px", color: "#94A3B8", lineHeight: 1.6 }}>
                  {t("privacy_point_1_desc")}
                </div>
              </div>

              {/* Point 2 */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  padding: "20px",
                }}
              >
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#FFFFFF", marginBottom: "6px" }}>
                  {t("privacy_point_2_title")}
                </div>
                <div style={{ fontSize: "13px", color: "#94A3B8", lineHeight: 1.6 }}>
                  {t("privacy_point_2_desc")}
                </div>
              </div>

              {/* Point 3 */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  padding: "20px",
                }}
              >
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#FFFFFF", marginBottom: "6px" }}>
                  {t("privacy_point_3_title")}
                </div>
                <div style={{ fontSize: "13px", color: "#94A3B8", lineHeight: 1.6 }}>
                  {t("privacy_point_3_desc")}
                </div>
              </div>
            </div>

            {/* Action Buttons to View Privacy Policy */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => setShowPrivacyModal(true)}
                style={{
                  padding: "12px 22px",
                  borderRadius: "12px",
                  background: "rgba(0, 242, 254, 0.15)",
                  border: "1px solid rgba(0, 242, 254, 0.4)",
                  color: "#00F2FE",
                  fontWeight: 700,
                  fontSize: "13px",
                  display: "flex",
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
                  padding: "12px 22px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#CBD5E1",
                  fontWeight: 600,
                  fontSize: "13px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                }}
              >
                <span>Resmi Yasal Sayfa</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* FAQ ACCORDION SECTION                                          */}
        {/* ============================================================== */}
        <section
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px 24px 100px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 3.2vw, 36px)",
              fontWeight: 800,
              textAlign: "center",
              marginBottom: "36px",
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
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: "100%",
                    padding: "18px 22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "transparent",
                    border: "none",
                    color: "#FFFFFF",
                    fontSize: "15px",
                    fontWeight: 700,
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
                      color: "#00F2FE",
                    }}
                  />
                </button>
                {openFaq === idx && (
                  <div
                    style={{
                      padding: "0 22px 18px",
                      fontSize: "14px",
                      color: "#94A3B8",
                      lineHeight: 1.6,
                      borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                      paddingTop: "14px",
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
      {/* QUICK PRIVACY POLICY MODAL                                      */}
      {/* ============================================================== */}
      {showPrivacyModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0, 0, 0, 0.85)",
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
              maxWidth: "700px",
              maxHeight: "85vh",
              overflowY: "auto",
              background: "#0F111E",
              border: "1.5px solid rgba(0, 242, 254, 0.3)",
              borderRadius: "24px",
              padding: "32px",
              position: "relative",
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.8)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPrivacyModal(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "none",
                color: "#FFFFFF",
                width: "32px",
                height: "32px",
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
                color: "#00F2FE",
                fontWeight: 800,
                marginBottom: "8px",
              }}
            >
              <Shield size={14} />
              <span>WIXTORY PLAYER · RESMİ GİZLİLİK POLİTİKASI</span>
            </div>

            <h3 style={{ fontSize: "22px", fontWeight: 800, margin: "0 0 16px" }}>
              {t("privacy_title")}
            </h3>

            <div style={{ fontSize: "14px", color: "#CBD5E1", lineHeight: 1.6, marginBottom: "20px" }}>
              <p>{t("privacy_lead")}</p>
              <h4 style={{ color: "#FFFFFF", fontSize: "15px", margin: "16px 0 8px" }}>
                {t("privacy_point_1_title")}
              </h4>
              <p>{t("privacy_point_1_desc")}</p>
              <h4 style={{ color: "#FFFFFF", fontSize: "15px", margin: "16px 0 8px" }}>
                {t("privacy_point_2_title")}
              </h4>
              <p>{t("privacy_point_2_desc")}</p>
              <h4 style={{ color: "#FFFFFF", fontSize: "15px", margin: "16px 0 8px" }}>
                {t("privacy_point_3_title")}
              </h4>
              <p>{t("privacy_point_3_desc")}</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                paddingTop: "16px",
              }}
            >
              <Link
                href="/wixtory-player/privacy"
                style={{
                  color: "#00F2FE",
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
                  padding: "8px 18px",
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "none",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global CSS for Vinyl Spin Keyframes */}
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

