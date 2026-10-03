"use client";

import React from "react";
import Link from "next/link";
import {
  Target,
  Compass,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Eye,
  Rocket,
  Lock,
  Globe,
  Layers,
  Gamepad2,
} from "lucide-react";
import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";
import { useLanguage } from "@/context/LanguageContext";

export default function VisionMissionPage() {
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
        {/* Hero Section */}
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
              <Target size={15} />
              <span>{isTr ? "VİZYON & MİSYON" : "VISION & MISSION"}</span>
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
              {isTr ? "Dijital Dünyada " : "Pioneering Purposeful "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #3B82F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {isTr ? "Geleceği Şekillendirmek" : "Digital Excellence"}
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
                ? "Kullanıcıların dikkatini sömüren ve verilerini metalaştıran devasa hantal platformlara karşı; saf, hızlı, estetik ve saygılı bir mobil ekosistem inşa ediyoruz."
                : "Building a respectful, lightning-fast, and aesthetically engineered mobile ecosystem that empowers users without exploiting attention or personal data."}
            </p>
          </div>
        </section>

        {/* Vision & Mission Two Big Flagship Cards */}
        <section style={{ padding: "20px 0 60px 0" }}>
          <div className="container" style={{ maxWidth: "1140px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                gap: "32px",
              }}
            >
              {/* VISION CARD */}
              <div
                className="glass-panel"
                style={{
                  padding: "clamp(36px, 5vw, 48px)",
                  borderRadius: "28px",
                  border: "1.5px solid rgba(139, 92, 246, 0.4)",
                  background: "var(--bg-card)",
                  boxShadow: "0 20px 50px -15px rgba(139, 92, 246, 0.18)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "18px",
                      background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      boxShadow: "0 10px 24px -4px rgba(139, 92, 246, 0.5)",
                      marginBottom: "24px",
                    }}
                  >
                    <Eye size={28} />
                  </div>

                  <span
                    style={{
                      fontSize: "11.5px",
                      fontWeight: 800,
                      color: "#8B5CF6",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {isTr ? "GELECEK TASAVVURUMUZ" : "OUR LONG-TERM HORIZON"}
                  </span>

                  <h2
                    style={{
                      fontSize: "clamp(26px, 3.5vw, 36px)",
                      fontWeight: 850,
                      letterSpacing: "-0.025em",
                      margin: "8px 0 18px 0",
                      color: "var(--text-main)",
                    }}
                  >
                    {isTr ? "Vizyonumuz" : "Our Vision"}
                  </h2>

                  <p
                    style={{
                      fontSize: "16px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.7",
                      marginBottom: "20px",
                    }}
                  >
                    {isTr
                      ? "Mobil dünyada kullanıcıları reklamlara, gizli telemetriye ve karmaşık arayüzlere boğan şişkin 'süper uygulamalar' dönemini geride bırakmak. Her biri kendi alanında uzmanlaşmış mikro-odaklı mobil uygulamaların ve sürükleyici oyunların küresel standardını oluşturmak."
                      : "To leave behind bloated super-apps that exploit attention and invade privacy. We envision a global standard of micro-focused mobile applications and captivating games that excel purely in their domains."}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "24px" }}>
                    {[
                      isTr ? "Sıfır şişkinlik, saf hedef odaklı kullanıcı deneyimi" : "Zero bloat, pure goal-oriented user experience",
                      isTr ? "Kullanıcı verilerine tam saygı ve cihaz içi yerel mimari" : "Absolute respect for user privacy with on-device storage",
                      isTr ? "60 FPS pürüzsüz donanım hızlandırmalı akıcılık" : "Buttery 60 FPS hardware-accelerated fluid interfaces",
                    ].map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <CheckCircle2 size={16} color="#8B5CF6" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontSize: "14px", color: "var(--text-secondary)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* MISSION CARD */}
              <div
                className="glass-panel"
                style={{
                  padding: "clamp(36px, 5vw, 48px)",
                  borderRadius: "28px",
                  border: "1.5px solid rgba(16, 185, 129, 0.4)",
                  background: "var(--bg-card)",
                  boxShadow: "0 20px 50px -15px rgba(16, 185, 129, 0.18)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "18px",
                      background: "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      boxShadow: "0 10px 24px -4px rgba(16, 185, 129, 0.5)",
                      marginBottom: "24px",
                    }}
                  >
                    <Rocket size={28} />
                  </div>

                  <span
                    style={{
                      fontSize: "11.5px",
                      fontWeight: 800,
                      color: "#10B981",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {isTr ? "VAROLUŞ AMACIMIZ" : "OUR CORE PURPOSE"}
                  </span>

                  <h2
                    style={{
                      fontSize: "clamp(26px, 3.5vw, 36px)",
                      fontWeight: 850,
                      letterSpacing: "-0.025em",
                      margin: "8px 0 18px 0",
                      color: "var(--text-main)",
                    }}
                  >
                    {isTr ? "Misyonumuz" : "Our Mission"}
                  </h2>

                  <p
                    style={{
                      fontSize: "16px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.7",
                      marginBottom: "20px",
                    }}
                  >
                    {isTr
                      ? "Milyonlarca insana her gün ilham veren, sorun çözen ve keyif katan mobil araçlar ve oyunlar üretmek. Bunu yaparken veri mahremiyetini devredilemez bir hak olarak korumak ve 11+ dilde küresel kapsayıcılık sağlamak."
                      : "To craft daily mobile tools and games that inspire, solve problems, and bring delight to millions. In doing so, we treat user privacy as an inalienable human right while delivering seamless experiences across 11+ global languages."}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "24px" }}>
                    {[
                      isTr ? "Zarif, göz yormayan ve modern arayüz mühendisliği" : "Elegant, ergonomic, eye-friendly interface engineering",
                      isTr ? "KVKK, GDPR ve küresel gizlilik yasalarıyla tam uyum" : "Full GDPR, KVKK, and global privacy compliance",
                      isTr ? "Her yaş ve seviyeye uygun erişilebilir dijital deneyim" : "Accessible, intuitive digital experiences for all ages",
                    ].map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontSize: "14px", color: "var(--text-secondary)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Commitments */}
        <section style={{ padding: "20px 0 60px 0" }}>
          <div className="container" style={{ maxWidth: "1140px" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#06B6D4",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {isTr ? "STRATEJİK TAAHHÜTLER" : "OUR COMMITMENTS"}
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
                {isTr ? "Kullanıcılarımıza Verdiğimiz 4 Söz" : "Our 4 Guarantees to Users"}
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
                  icon: <Lock size={22} color="#10B981" />,
                  title: isTr ? "1. Sıfır Telemetri Sözü" : "1. Zero Telemetry Pledge",
                  desc: isTr
                    ? "Kişisel verileriniz, arama geçmişiniz ve favorileriniz sunucularımızda asla satılmaz veya profillenmez."
                    : "Your searches, favorites, and usage habits are never monetized, stored on third-party ad networks, or profiled.",
                },
                {
                  icon: <Zap size={22} color="#8B5CF6" />,
                  title: isTr ? "2. Saf Performans Güvencesi" : "2. Pure Performance",
                  desc: isTr
                    ? "Arka planda gereksiz veri çeken veya bataryayı tüketen arka plan servislerine izin vermeyiz."
                    : "No heavy background trackers or battery-draining telemetry. Instant load times and responsive animations.",
                },
                {
                  icon: <Globe size={22} color="#06B6D4" />,
                  title: isTr ? "3. Çok Dilli Kapsayıcılık" : "3. Global Multilingual Inclusion",
                  desc: isTr
                    ? "Dünyanın her yerindeki kullanıcılarımıza kendi anadillerinde kusursuz yerelleştirilmiş arayüzler sunarız."
                    : "Native localization across 11 major global languages, giving everyone a first-class native experience.",
                },
                {
                  icon: <Compass size={22} color="#F59E0B" />,
                  title: isTr ? "4. Şeffaflık & Tam Kontrol" : "4. Total User Control",
                  desc: isTr
                    ? "Tüm uygulamalarımızda 'Önbelleği Temizle' ve tek tıkla cihaz verilerini sıfırlama hakkı kullanıcıya aittir."
                    : "Every app includes a one-tap 'Clear Cache' button, putting data management firmly in user hands.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: "28px 22px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "var(--badge-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid var(--border-active)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, margin: 0, color: "var(--text-main)" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: "1.6", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section style={{ padding: "20px 0 40px 0" }}>
          <div className="container" style={{ maxWidth: "1140px" }}>
            <div
              className="glass-panel"
              style={{
                padding: "48px 40px",
                borderRadius: "28px",
                background: "linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.12) 100%)",
                border: "1.5px solid rgba(139, 92, 246, 0.35)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "20px",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(26px, 3.5vw, 38px)",
                  fontWeight: 850,
                  letterSpacing: "-0.025em",
                  margin: 0,
                  color: "var(--text-main)",
                }}
              >
                {isTr ? "Ürünlerimizi ve Oyunlarımızı Keşfedin" : "Experience Our Apps & Games"}
              </h2>

              <p
                style={{
                  fontSize: "16px",
                  color: "var(--text-secondary)",
                  maxWidth: "680px",
                  margin: 0,
                  lineHeight: "1.65",
                }}
              >
                {isTr
                  ? "Wixtory ekosisteminin amiral gemisi uygulamalarını inceleyin veya bağımsız oyun stüdyomuzun geliştirdiği eğlenceli oyun dünyalarına adım atın."
                  : "Explore our flagship mobile utilities or step into the fun worlds crafted by our independent gaming studio."}
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                <Link
                  href="/games"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 28px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, #8B5CF6, #D946EF)",
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 10px 24px -4px rgba(139, 92, 246, 0.5)",
                  }}
                >
                  <Gamepad2 size={18} />
                  <span>{isTr ? "Oyunları Gör" : "Explore Games"}</span>
                </Link>

                <Link
                  href="/#apps"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 28px",
                    borderRadius: "14px",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-main)",
                    fontSize: "15px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  <Layers size={18} color="var(--primary)" />
                  <span>{isTr ? "Uygulamalara Git" : "Go to Apps"}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MainFooter />
    </div>
  );
}
