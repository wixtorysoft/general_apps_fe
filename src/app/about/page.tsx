"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Sparkles,
  Shield,
  Zap,
  Users,
  Heart,
  Globe,
  Award,
  ArrowRight,
  Gamepad2,
  Layers,
} from "lucide-react";
import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
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
        {/* About Hero Section */}
        <section style={{ padding: "70px 0 50px 0", textAlign: "center", position: "relative" }}>
          <div className="container" style={{ maxWidth: "860px" }}>
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
                marginBottom: "20px",
              }}
            >
              <Compass size={15} />
              <span>{isTr ? "HAKKIMIZDA & KÜLTÜR" : "ABOUT US & CULTURE"}</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(34px, 5.5vw, 58px)",
                fontWeight: 850,
                letterSpacing: "-0.035em",
                lineHeight: "1.15",
                marginBottom: "20px",
                color: "var(--text-main)",
              }}
            >
              {isTr ? "Geleceğin Dijital Deneyimlerini " : "Building Meaningful "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #3B82F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {isTr ? "Tutkuyla Üretiyoruz" : "Digital Experiences"}
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(16px, 2vw, 18px)",
                color: "var(--text-secondary)",
                lineHeight: "1.7",
                maxWidth: "740px",
                margin: "0 auto",
              }}
            >
              {isTr
                ? "Wixtory; mobil uygulamalar ve eğlenceli mobil oyunlar geliştiren bağımsız bir dijital stüdyodur. Kullanıcı gizliliğinden asla ödün vermeden, saf performans ve üst düzey estetik mühendisliği bir araya getiriyoruz."
                : "Wixtory is an independent digital studio creating focused mobile applications and engaging games. We unite high-end aesthetic engineering with zero-compromise data privacy."}
            </p>
          </div>
        </section>

        {/* Studio Life Visual Feature */}
        <section style={{ padding: "20px 0 60px 0" }}>
          <div className="container" style={{ maxWidth: "1140px" }}>
            <div
              className="glass-panel"
              style={{
                padding: "clamp(24px, 4vw, 48px)",
                borderRadius: "32px",
                border: "1px solid var(--border-subtle)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "clamp(32px, 5vw, 60px)",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 20px 48px -10px rgba(0,0,0,0.25)",
                  border: "1px solid var(--border-subtle)",
                  position: "relative",
                  aspectRatio: "16 / 11",
                }}
              >
                <Image
                  src="/about/studio-life.jpg"
                  alt="Wixtory Team Studio Life"
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "var(--primary)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {isTr ? "EKİP RUHU & YAŞAM" : "OUR PEOPLE & SPIRIT"}
                </span>

                <h2
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 38px)",
                    fontWeight: 850,
                    letterSpacing: "-0.025em",
                    margin: 0,
                    color: "var(--text-main)",
                  }}
                >
                  {isTr ? "İlham Veren Bir Kültür, Fark Yaratan Ürünler" : "Inspiring Culture, Impactful Products"}
                </h2>

                <p
                  style={{
                    fontSize: "15.5px",
                    color: "var(--text-secondary)",
                    lineHeight: "1.65",
                    margin: 0,
                  }}
                >
                  {isTr
                    ? "Bizler kod yazmanın, arayüz tasarlamanın ve oyun kurgulamanın sadece bir iş değil; kullanıcıların günlük hayatına değer katan bir zanaat olduğuna inanıyoruz."
                    : "We believe that building software, crafting interfaces, and designing game worlds is not merely a job—it is a craft that enriches people's everyday lives."}
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
                    ? "Karmaşık ve şişirilmiş süper uygulamalar yerine; her biri alanında en iyi olan, hızlı açılan, pili tüketmeyen ve kullanıcı verilerini satmayan özel uygulamalar inşa ediyoruz."
                    : "Instead of bloated super-apps, we build focused experiences: fast to open, battery-friendly, zero telemetry, and delightfully fluid."}
                </p>

                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "6px" }}>
                  <Link
                    href="/games"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "12px 22px",
                      borderRadius: "14px",
                      background: "linear-gradient(135deg, #8B5CF6, #D946EF)",
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 8px 20px -4px rgba(139, 92, 246, 0.45)",
                    }}
                  >
                    <Gamepad2 size={16} />
                    <span>{isTr ? "Oyunlarımızı Gör" : "Explore Games"}</span>
                  </Link>

                  <Link
                    href="/vision-mission"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "12px 22px",
                      borderRadius: "14px",
                      background: "var(--bg-glass)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-main)",
                      fontSize: "14px",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    <span>{isTr ? "Vizyon & Misyon" : "Vision & Mission"}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Values */}
        <section style={{ padding: "40px 0 60px 0" }}>
          <div className="container" style={{ maxWidth: "1140px" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#10B981",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {isTr ? "DEĞERLERİMİZ" : "CORE VALUES"}
              </span>
              <h2
                style={{
                  fontSize: "clamp(26px, 3.5vw, 38px)",
                  fontWeight: 850,
                  letterSpacing: "-0.03em",
                  marginTop: "8px",
                  color: "var(--text-main)",
                }}
              >
                {isTr ? "Bizi Biz Yapan 4 Temel İlke" : "4 Pillars That Guide Us"}
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "24px",
              }}
            >
              {[
                {
                  icon: <Sparkles size={24} color="#8B5CF6" />,
                  title: isTr ? "Estetik Mühendislik" : "Aesthetic Engineering",
                  desc: isTr
                    ? "Sıradan, düz ve ruhsuz tasarımlara asla tolerans göstermeyiz. Her arayüz 'WOW' dedirtecek görsel derinliğe ve dokunmatik zarafete sahiptir."
                    : "Zero tolerance for flat, lifeless interfaces. Every UI delivers high-end chromatic depth, tactile feedback, and intuitive elegance.",
                },
                {
                  icon: <Shield size={24} color="#10B981" />,
                  title: isTr ? "Sıfır Tavizli Gizlilik" : "Zero-Compromise Privacy",
                  desc: isTr
                    ? "Kullanıcı verileri hiçbir şartta satılmaz veya reklam havuzlarıyla paylaşılmaz. Arama geçmişi ve favoriler yerel cihazda saklanır."
                    : "User data is never monetized or fed into ad trackers. Searches, history, and preferences stay on your device.",
                },
                {
                  icon: <Zap size={24} color="#06B6D4" />,
                  title: isTr ? "60 FPS Akıcılık" : "60 FPS Fluid Performance",
                  desc: isTr
                    ? "Donanım hızlandırmalı Flutter çalışma zamanı ve MinIO CDN altyapısıyla sıfır gecikmeli, anlık tepki veren mobil uygulamalar."
                    : "Hardware-accelerated Flutter runtime and edge MinIO CDN infrastructure ensure zero lag and instant screen transitions.",
                },
                {
                  icon: <Globe size={24} color="#F59E0B" />,
                  title: isTr ? "Global Kapsayıcılık" : "Global Multilingual Reach",
                  desc: isTr
                    ? "Uygulamalarımız ilk günden itibaren 11 küresel dilde (TR, EN, DE, FR, ES, IT, PT, RU, JA, ZH, AR) eksiksiz yerelleştirilir."
                    : "All applications are natively localized across 11 global languages with elastic multi-lingual layout safety.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: "30px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "var(--badge-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid var(--border-active)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, margin: 0, color: "var(--text-main)" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Numbers Banner */}
        <section style={{ padding: "20px 0 40px 0" }}>
          <div className="container" style={{ maxWidth: "1140px" }}>
            <div
              className="glass-panel"
              style={{
                padding: "36px 40px",
                borderRadius: "24px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "32px",
                textAlign: "center",
              }}
            >
              <div>
                <div style={{ fontSize: "36px", fontWeight: 900, color: "var(--primary)", marginBottom: "4px" }}>
                  6+
                </div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-main)" }}>
                  {isTr ? "Uygulama & Oyun" : "Apps & Games"}
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "2px" }}>
                  {isTr ? "Sürekli büyüyen katalog" : "Ever-growing catalog"}
                </div>
              </div>

              <div>
                <div style={{ fontSize: "36px", fontWeight: 900, color: "var(--secondary)", marginBottom: "4px" }}>
                  11
                </div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-main)" }}>
                  {isTr ? "Desteklenen Dil" : "Supported Languages"}
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "2px" }}>
                  {isTr ? "Küresel kullanıcı kitlesi" : "Global player community"}
                </div>
              </div>

              <div>
                <div style={{ fontSize: "36px", fontWeight: 900, color: "#10B981", marginBottom: "4px" }}>
                  %100
                </div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-main)" }}>
                  {isTr ? "Kullanıcı Gizliliği" : "User Privacy Focus"}
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "2px" }}>
                  {isTr ? "Sıfır telemetri politikası" : "Zero telemetry standard"}
                </div>
              </div>

              <div>
                <div style={{ fontSize: "36px", fontWeight: 900, color: "#8B5CF6", marginBottom: "4px" }}>
                  60 FPS
                </div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-main)" }}>
                  {isTr ? "Akıcı Deneyim" : "Smooth Framerate"}
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "2px" }}>
                  {isTr ? "Flutter & Edge CDN" : "Flutter & Edge CDN"}
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
