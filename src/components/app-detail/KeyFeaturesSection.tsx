"use client";

import React, { useState } from "react";
import { DedicatedAppDetails, getLocalizedAppDetails } from "@/data/apps-detail-data";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  Check,
  Heart,
  RotateCw,
  Copy,
  Smartphone,
  Flame,
  Volume2,
  CheckCheck,
  Compass,
  Layers,
} from "lucide-react";

interface KeyFeaturesSectionProps {
  app: DedicatedAppDetails;
}

export function KeyFeaturesSection({ app }: KeyFeaturesSectionProps) {
  const { language } = useLanguage();
  const currentApp = getLocalizedAppDetails(app.id, language) || app;

  const kfI18n: Record<string, Record<string, string>> = {
    badge: {
      tr: "Öne Çıkan Yetenekler", en: "Key Standout Features", it: "Caratteristiche Principali", pt: "Recursos em Destaque",
      es: "Características Destacadas", fr: "Fonctionnalités Clés", de: "Herausragende Funktionen", ru: "Ключевые Возможности",
      ja: "注目のコア機能", zh: "核心亮点功能", ar: "أبرز الميزات والقدرات"
    },
    title_suffix: {
      tr: "Öne Çıkan Derinlemesine Yetenekleri", en: "Core Standout Capabilities", it: "Funzionalità Distintive Avanzate", pt: "Recursos Distintivos Avançados",
      es: "Capacidades Clave Distintivas", fr: "Capacités Phares Approfondies", de: "Wichtigste Kernfähigkeiten", ru: "Флагманские Возможности",
      ja: "注目の独自機能", zh: "核心纵深能力", ar: "القدرات الأساسية المتميزة"
    },
    desc: {
      tr: "Sıradan uygulamalardan ayrışan, kullanıcı odaklı 3 ana amiral gemisi modülü canlı olarak deneyimleyin.",
      en: "Experience the 3 flagship capabilities live and discover how they elevate user experience beyond ordinary apps.",
      it: "Sperimenta dal vivo le 3 funzionalità di punta e scopri come elevano l'esperienza utente.",
      pt: "Experimente os 3 recursos principais ao vivo e descubra como eles elevam a experiência do usuário.",
      es: "Experimenta los 3 módulos insignia en vivo y descubre cómo transforman la experiencia del usuario.",
      fr: "Découvrez en direct les 3 modules phares et voyez comment ils subliment l'expérience utilisateur.",
      de: "Erleben Sie die 3 Hauptfunktionen live und entdecken Sie, wie sie das Nutzungserlebnis verbessern.",
      ru: "Попробуйте 3 флагманские функции и узнайте, как они превосходят обычные приложения.",
      ja: "日常のアプリとは一線を画す、3つのフラッグシップモジュールをご体験ください。",
      zh: "现场体验 3 大核心旗舰模块，感受超越常规应用的极致用户体验。",
      ar: "جرّب القدرات الثلاث الرائدة واكتشف كيف ترتقي بتجربة الاستخدام."
    }
  };

  const kStr = (key: string) => kfI18n[key]?.[language] || kfI18n[key]?.en || "";

  // Interactive state for AstroVibe
  const [nailLikes, setNailLikes] = useState(1420);
  const [isLiked, setIsLiked] = useState(false);
  const [tarotFlipped, setTarotFlipped] = useState(false);
  const [selectedZodiacTab, setSelectedZodiacTab] = useState<"fire" | "earth" | "air" | "water">("water");

  // Interactive state for Excuse
  const [isShaking, setIsShaking] = useState(false);
  const [shakeCount, setShakeCount] = useState(0);
  const [currentExcuseIdx, setCurrentExcuseIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeExcuseTheme, setActiveExcuseTheme] = useState<"cyber" | "oled" | "purple">("cyber");

  const sampleExcusesData: Record<string, { text: string; cat: string; urgency: string }[]> = {
    tr: [
      { text: "Ofiste beklenmedik bir sunucu kesintisi oldu, müdahale ediyorum.", cat: "İş & Ofis", urgency: "Orta" },
      { text: "Metro hattında sinyalizasyon arızası var, sonraki trene biniyorum.", cat: "Trafik", urgency: "Hafif" },
      { text: "Evde su borusu patladı, acil tesisatçı gelmek üzere!", cat: "Acil Durum", urgency: "Kritik" },
    ],
    en: [
      { text: "Unexpected server outage at the office, investigating right now.", cat: "Work & Office", urgency: "Moderate" },
      { text: "Signaling malfunction on the subway line, catching the next train.", cat: "Transit", urgency: "Mild" },
      { text: "Water pipe burst at home, emergency plumber arriving soon!", cat: "Urgent", urgency: "Critical" },
    ],
    it: [
      { text: "Interruzione improvvisa del server in ufficio, sto intervenendo adesso.", cat: "Lavoro & Ufficio", urgency: "Moderata" },
      { text: "Guasto ai segnali sulla linea della metropolitana, prendo il prossimo treno.", cat: "Trasporti", urgency: "Lieve" },
      { text: "Tubo rotto a casa, l'idraulico d'urgenza sta arrivando!", cat: "Emergenza", urgency: "Critica" },
    ],
    pt: [
      { text: "Queda inesperada do servidor no escritório, estou verificando agora.", cat: "Trabalho & Escritório", urgency: "Moderada" },
      { text: "Falha de sinal na linha do metrô, pegando o próximo trem.", cat: "Trânsito", urgency: "Leve" },
      { text: "Cano estourou em casa, o encanador de emergência está chegando!", cat: "Emergência", urgency: "Crítica" },
    ],
    es: [
      { text: "Corte inesperado del servidor en la oficina, investigando ahora mismo.", cat: "Trabajo & Oficina", urgency: "Moderada" },
      { text: "Fallo de señalización en la línea del metro, tomando el siguiente tren.", cat: "Tráfico", urgency: "Leve" },
      { text: "Tubería rota en casa, ¡el fontanero de emergencia está por llegar!", cat: "Urgente", urgency: "Crítica" },
    ],
    fr: [
      { text: "Panne de serveur imprévue au bureau, j'interviens immédiatement.", cat: "Travail & Bureau", urgency: "Modérée" },
      { text: "Problème de signalisation sur la ligne de métro, je prends le suivant.", cat: "Transports", urgency: "Légère" },
      { text: "Fuite d'eau urgente à la maison, le plombier arrive d'une minute à l'autre !", cat: "Urgence", urgency: "Critique" },
    ],
    de: [
      { text: "Unerwarteter Serverausfall im Büro, ich kümmere mich sofort darum.", cat: "Arbeit & Büro", urgency: "Mittel" },
      { text: "Signalstörung bei der U-Bahn, ich nehme den nächsten Zug.", cat: "Verkehr", urgency: "Gering" },
      { text: "Wasserrohrbruch zu Hause, der Notfall-Installateur ist unterwegs!", cat: "Notfall", urgency: "Kritisch" },
    ],
    ru: [
      { text: "Внезапный сбой сервера в офисе, срочно подключаюсь к решению.", cat: "Работа и Офис", urgency: "Средняя" },
      { text: "Сбой сигнализации на линии метро, сажусь на следующий поезд.", cat: "Транспорт", urgency: "Низкая" },
      { text: "Дома прорвало трубу, срочно жду аварийного сантехника!", cat: "Срочно", urgency: "Критическая" },
    ],
    ja: [
      { text: "オフィスのサーバーで予期せぬ障害が発生し、緊急対応中です。", cat: "仕事・職場", urgency: "中" },
      { text: "地下鉄の信号トラブルのため、次の電車に乗車します。", cat: "交通", urgency: "小" },
      { text: "自宅で水道管のトラブルが発生し、修理業者の到着を待っています！", cat: "緊急", urgency: "重大" },
    ],
    zh: [
      { text: "公司服务器突发故障中断，正在紧急排查处理中。", cat: "工作与办公", urgency: "中度" },
      { text: "地铁线路信号故障延误，正等待下一趟列车。", cat: "交通出行", urgency: "轻度" },
      { text: "家里水管突发破裂，紧急维修师傅正在赶来！", cat: "紧急状况", urgency: "严重" },
    ],
    ar: [
      { text: "حدث عطل غير متوقع في خادم المكتب، أقوم بمتابعته حالياً.", cat: "العمل والمكتب", urgency: "متوسط" },
      { text: "عطل في إشارات المترو، سأستقل القطار التالي.", cat: "المواصلات", urgency: "طفيف" },
      { text: "انفجار أنبوب مياه في المنزل، سباك الطوارئ في الطريق!", cat: "طوارئ", urgency: "حرج" },
    ],
  };

  const sampleExcuses = sampleExcusesData[language] || sampleExcusesData.en;

  const handleShakeSimulator = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
      setShakeCount((prev) => prev + 1);
      setCurrentExcuseIdx((prev) => (prev + 1) % sampleExcuses.length);
    }, 600);
  };

  const handleCopyExcuse = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="key-features"
      style={{
        padding: "90px 0",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span
            className="pill-badge"
            style={{
              color: currentApp.primaryColor,
              borderColor: `${currentApp.primaryColor}55`,
              background: `${currentApp.primaryColor}14`,
              marginBottom: "14px",
            }}
          >
            <Sparkles size={14} />
            <span>{kStr("badge")}</span>
          </span>
          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "16px",
              color: "var(--text-main)",
            }}
          >
            {currentApp.name} {kStr("title_suffix")}
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "640px",
              margin: "0 auto",
              fontSize: "17px",
              lineHeight: "1.6",
            }}
          >
            {kStr("desc")}
          </p>
        </div>

        {/* Spotlights Stack - Alternating Z-Pattern */}
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {currentApp.keyFeatures.map((spotlight, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={spotlight.id}
                className="glass-panel"
                style={{
                  padding: "clamp(28px, 4vw, 48px)",
                  border: `1.5px solid ${spotlight.accentColor}33`,
                  background: spotlight.gradient,
                  boxShadow: `0 24px 60px -15px ${spotlight.accentColor}18`,
                  borderRadius: "28px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className={`spotlight-row ${isEven ? "row-reversed" : ""}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "40px",
                    alignItems: "center",
                  }}
                >
                  {/* Narrative Text Column */}
                  <div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "12px",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        color: spotlight.accentColor,
                        marginBottom: "12px",
                        textTransform: "uppercase",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        background: `${spotlight.accentColor}18`,
                        border: `1px solid ${spotlight.accentColor}33`,
                      }}
                    >
                      <span>{spotlight.tag}</span>
                    </div>

                    <h3
                      style={{
                        fontSize: "clamp(24px, 3.2vw, 32px)",
                        fontWeight: 800,
                        color: "var(--text-main)",
                        marginBottom: "14px",
                        letterSpacing: "-0.02em",
                        lineHeight: "1.25",
                      }}
                    >
                      {spotlight.headline}
                    </h3>

                    <p
                      style={{
                        fontSize: "16px",
                        color: "var(--text-secondary)",
                        lineHeight: "1.65",
                        marginBottom: "24px",
                      }}
                    >
                      {spotlight.description}
                    </p>

                    {/* Bullet Points */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                      {spotlight.bulletPoints.map((point, pIdx) => (
                        <div
                          key={pIdx}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "10px",
                            fontSize: "14.5px",
                            color: "var(--text-main)",
                          }}
                        >
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              background: `${spotlight.accentColor}25`,
                              color: spotlight.accentColor,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              marginTop: "2px",
                            }}
                          >
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Metric pill */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px 18px",
                        borderRadius: "16px",
                        background: "var(--badge-bg)",
                        border: `1px solid ${spotlight.accentColor}33`,
                      }}
                    >
                      <span style={{ fontSize: "24px", fontWeight: 900, color: spotlight.accentColor }}>
                        {spotlight.metricNumber}
                      </span>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-secondary)" }}>
                        {spotlight.metricLabel}
                      </span>
                    </div>
                  </div>

                  {/* Interactive Micro-App Mockup Column */}
                  <div
                    style={{
                      borderRadius: "24px",
                      background: "var(--bg-glass)",
                      backdropFilter: "blur(20px)",
                      border: `1.5px solid ${spotlight.accentColor}44`,
                      padding: "28px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      minHeight: "360px",
                      position: "relative",
                      boxShadow: "var(--shadow-card)",
                    }}
                  >
                    {/* ASTROVIBE SPOTLIGHTS */}
                    {app.id === "astrovibe" && index === 0 && (
                      /* Spotlight 1: TikTok Reel Interactive Frame */
                      <div style={{ width: "100%", maxWidth: "300px", textAlign: "center" }}>
                        <div
                          style={{
                            borderRadius: "20px",
                            padding: "20px",
                            background: "var(--bg-card)",
                            border: "1.5px solid rgba(236, 72, 153, 0.3)",
                            position: "relative",
                            boxShadow: "var(--shadow-card)",
                          }}
                        >
                          <div style={{ fontSize: "11px", fontWeight: 700, color: "#F472B6", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                            ✦ TikTok Dikey Reels Akışı
                          </div>
                          <div style={{ width: "100%", height: "150px", borderRadius: "14px", background: "radial-gradient(circle, #831843 0%, #1e1b4b 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", marginBottom: "14px" }}>
                            <Sparkles size={36} color="#F472B6" />
                            <div style={{ marginTop: "8px", fontSize: "13px", fontWeight: 700, color: "#fff" }}>
                              Sedefli Deniz Kızı Badem Tırnak
                            </div>
                            <div style={{ fontSize: "11px", color: "#FBCFE8" }}>Balık Burcu • Su Elementi</div>
                          </div>

                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <button
                              onClick={() => {
                                setIsLiked(!isLiked);
                                setNailLikes((prev) => (isLiked ? prev - 1 : prev + 1));
                              }}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                padding: "8px 14px",
                                borderRadius: "20px",
                                background: isLiked ? "rgba(236, 72, 153, 0.3)" : "rgba(255,255,255,0.08)",
                                color: isLiked ? "#F472B6" : "var(--text-secondary)",
                                border: isLiked ? "1px solid #F472B6" : "1px solid transparent",
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                              }}
                            >
                              <Heart size={16} fill={isLiked ? "#F472B6" : "none"} color={isLiked ? "#F472B6" : "currentColor"} />
                              <span style={{ fontSize: "12px", fontWeight: 700 }}>{nailLikes}</span>
                            </button>

                            <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                              Çift Dokun = Kalp ❤️
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {app.id === "astrovibe" && index === 1 && (
                      /* Spotlight 2: 3D Tarot Interactive Flip Card */
                      <div style={{ width: "100%", maxWidth: "300px", textAlign: "center" }}>
                        <div
                          onClick={() => setTarotFlipped(!tarotFlipped)}
                          style={{
                            perspective: "1000px",
                            cursor: "pointer",
                            marginBottom: "16px",
                          }}
                        >
                          <div
                            style={{
                              width: "180px",
                              height: "240px",
                              margin: "0 auto",
                              borderRadius: "18px",
                              border: "2px solid #F59E0B",
                              background: tarotFlipped
                                ? "linear-gradient(135deg, #78350F, #1E1B4B)"
                                : "linear-gradient(135deg, #1E1B4B, #0F172A)",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "16px",
                              boxShadow: "0 16px 36px -10px rgba(245, 158, 11, 0.4)",
                              transform: tarotFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                              transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            <div style={{ transform: tarotFlipped ? "rotateY(180deg)" : "none" }}>
                              {tarotFlipped ? (
                                <>
                                  <Sparkles size={36} color="#F59E0B" />
                                  <div style={{ fontSize: "15px", fontWeight: 800, color: "#FEF3C7", marginTop: "10px" }}>
                                    XIX • GÜNEŞ
                                  </div>
                                  <div style={{ fontSize: "11px", color: "#FDE68A", marginTop: "4px" }}>
                                    Başarı, Işık ve Canlılık
                                  </div>
                                </>
                              ) : (
                                <>
                                  <Compass size={40} color="#C4B5FD" />
                                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#E0E7FF", marginTop: "12px" }}>
                                    Kozmik Kartı Aç
                                  </div>
                                  <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "4px" }}>
                                    (Dokun ve Çevir)
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div style={{ fontSize: "12px", color: "#F59E0B", fontWeight: 600 }}>
                          {tarotFlipped ? "Kart açıldı! Tekrar dokunarak kapatabilirsiniz." : "3D Gerçek Kart Fiziği"}
                        </div>
                      </div>
                    )}

                    {app.id === "astrovibe" && index === 2 && (
                      /* Spotlight 3: Planetary Transits & Cosmic Energy Bars */
                      <div style={{ width: "100%", maxWidth: "320px" }}>
                        <div style={{ fontSize: "12px", fontWeight: 700, color: "#A78BFA", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>
                          ✦ Günlük Enerji Dağılımı
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                          {[
                            { label: "Aşk & Uyum", percent: 94, color: "#EC4899" },
                            { label: "Kariyer & Odak", percent: 88, color: "#3B82F6" },
                            { label: "Finans & Fırsat", percent: 76, color: "#10B981" },
                            { label: "Sezgi & Aura", percent: 98, color: "#8B5CF6" },
                          ].map((item, idx) => (
                            <div key={idx}>
                              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", marginBottom: "4px" }}>
                                <span style={{ color: "var(--text-secondary)" }}>{item.label}</span>
                                <span style={{ fontWeight: 800, color: item.color }}>%{item.percent}</span>
                              </div>
                              <div style={{ width: "100%", height: "7px", borderRadius: "4px", background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                                <div
                                  style={{
                                    width: `${item.percent}%`,
                                    height: "100%",
                                    background: item.color,
                                    borderRadius: "4px",
                                    boxShadow: `0 0 10px ${item.color}88`,
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* EXCUSE SPOTLIGHTS */}
                    {app.id === "excuse" && index === 0 && (
                      /* Spotlight 1: Shake-to-Excuse Simulator */
                      <div style={{ width: "100%", maxWidth: "320px", textAlign: "center" }}>
                        <div
                          style={{
                            padding: "20px",
                            borderRadius: "18px",
                            background: "rgba(16, 185, 129, 0.08)",
                            border: "1px solid rgba(16, 185, 129, 0.3)",
                            marginBottom: "16px",
                          }}
                        >
                          <div
                            style={{
                              display: "inline-block",
                              transform: isShaking ? "rotate(-15deg) scale(1.15)" : "rotate(0deg)",
                              transition: "transform 0.15s ease",
                              marginBottom: "10px",
                            }}
                          >
                            <Smartphone size={44} color="#10B981" />
                          </div>
                          <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-main)", marginBottom: "4px" }}>
                            {isShaking ? "⚡ Sallama Algılanıyor..." : "İvmeölçer Panik Modu"}
                          </div>
                          <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginBottom: "14px" }}>
                            {shakeCount > 0 ? `${shakeCount}. kriz bahanesi üretildi!` : "Telefonu 2 saniye salla ve kurtul"}
                          </div>

                          <button
                            onClick={handleShakeSimulator}
                            className="btn btn-primary"
                            style={{
                              width: "100%",
                              padding: "10px",
                              fontSize: "13px",
                              background: "#10B981",
                              borderRadius: "12px",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                            }}
                          >
                            <RotateCw size={14} className={isShaking ? "spin-icon" : ""} />
                            <span>Sallama Hareketini Simüle Et</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {app.id === "excuse" && index === 1 && (
                      /* Spotlight 2: Tinder Swipe Excuse Card */
                      <div style={{ width: "100%", maxWidth: "320px" }}>
                        <div
                          style={{
                            padding: "20px",
                            borderRadius: "20px",
                            background: "var(--bg-card)",
                            border: "1.5px solid rgba(6, 182, 212, 0.4)",
                            boxShadow: "var(--shadow-card)",
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                            <span style={{ fontSize: "11px", fontWeight: 800, padding: "3px 10px", borderRadius: "12px", background: "rgba(6, 182, 212, 0.2)", color: "#22D3EE" }}>
                              {sampleExcuses[currentExcuseIdx].cat}
                            </span>
                            <span style={{ fontSize: "11px", color: "#F59E0B", fontWeight: 700 }}>
                              {sampleExcuses[currentExcuseIdx].urgency}
                            </span>
                          </div>

                          <p style={{ fontSize: "14px", color: "var(--text-main)", lineHeight: "1.5", minHeight: "65px", margin: "0 0 14px 0" }}>
                            &ldquo;{sampleExcuses[currentExcuseIdx].text}&rdquo;
                          </p>

                          <div style={{ display: "flex", gap: "8px" }}>
                            <button
                              onClick={() => setCurrentExcuseIdx((prev) => (prev + 1) % sampleExcuses.length)}
                              style={{
                                flex: 1,
                                padding: "8px",
                                borderRadius: "10px",
                                background: "rgba(255,255,255,0.06)",
                                color: "var(--text-secondary)",
                                fontSize: "12px",
                                fontWeight: 600,
                              }}
                            >
                              Sıradaki (←)
                            </button>
                            <button
                              onClick={handleCopyExcuse}
                              style={{
                                flex: 1,
                                padding: "8px",
                                borderRadius: "10px",
                                background: copied ? "#10B981" : "#06B6D4",
                                color: "#fff",
                                fontSize: "12px",
                                fontWeight: 700,
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "6px",
                              }}
                            >
                              {copied ? <CheckCheck size={14} /> : <Copy size={14} />}
                              <span>{copied ? "Kopyalandı!" : "Seç & Kopyala"}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {app.id === "excuse" && index === 2 && (
                      /* Spotlight 3: 12 Multi-Theme Switcher Preview */
                      <div style={{ width: "100%", maxWidth: "320px", textAlign: "center" }}>
                        <div style={{ fontSize: "12px", fontWeight: 700, color: "#22D3EE", textTransform: "uppercase", marginBottom: "14px" }}>
                          ✦ Canlı Tema Paleti
                        </div>

                        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "16px" }}>
                          {[
                            { id: "cyber" as const, name: "Cyber Neon", color: "#06B6D4" },
                            { id: "oled" as const, name: "Pitch OLED", color: "#10B981" },
                            { id: "purple" as const, name: "Deep Purple", color: "#8B5CF6" },
                          ].map((t) => (
                            <button
                              key={t.id}
                              onClick={() => setActiveExcuseTheme(t.id)}
                              style={{
                                padding: "6px 12px",
                                borderRadius: "12px",
                                fontSize: "11.5px",
                                fontWeight: 700,
                                background: activeExcuseTheme === t.id ? t.color : "rgba(255,255,255,0.06)",
                                color: activeExcuseTheme === t.id ? "#fff" : "var(--text-secondary)",
                                border: `1px solid ${t.color}55`,
                              }}
                            >
                              {t.name}
                            </button>
                          ))}
                        </div>

                        <div
                          style={{
                            padding: "16px",
                            borderRadius: "16px",
                            background:
                              activeExcuseTheme === "cyber"
                                ? "#061A28"
                                : activeExcuseTheme === "oled"
                                ? "#000000"
                                : "#170C28",
                            border: `1px solid ${
                              activeExcuseTheme === "cyber"
                                ? "#06B6D4"
                                : activeExcuseTheme === "oled"
                                ? "#10B981"
                                : "#8B5CF6"
                            }66`,
                            fontSize: "13px",
                            color: "#fff",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <div style={{ fontWeight: 700, marginBottom: "4px" }}>
                            {activeExcuseTheme.toUpperCase()} Modu Aktif
                          </div>
                          <div style={{ fontSize: "11px", opacity: 0.7 }}>
                            12 Zengin renk teması tüm mobil bileşenlere anında uyarlanır.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .spotlight-row {
            grid-template-columns: 1.25fr 0.95fr !important;
          }
          .row-reversed {
            direction: rtl;
          }
          .row-reversed > * {
            direction: ltr;
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .spin-icon {
          animation: spin 0.6s linear infinite;
        }
      `}</style>
    </section>
  );
}
