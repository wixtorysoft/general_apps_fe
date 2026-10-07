"use client";

import React from "react";
import { DedicatedAppDetails, getLocalizedAppDetails } from "@/data/apps-detail-data";
import { useLanguage } from "@/context/LanguageContext";
import {
  Download,
  Smartphone,
  Star,
  ShieldCheck,
  Sparkles,
  ArrowDown,
  Layers,
} from "lucide-react";
import { StoreDownloadButtons } from "@/components/StoreDownloadButtons";

interface AppDetailHeroProps {
  app: DedicatedAppDetails;
}

export function AppDetailHero({ app }: AppDetailHeroProps) {
  const { t, language } = useLanguage();
  const localizedApp = getLocalizedAppDetails(app.id, language);
  const isAstro = localizedApp.id === "astrovibe";

  const heroI18n: Record<string, Record<string, string>> = {
    aura_indicator: {
      tr: "AURA GÖSTERGESİ", en: "AURA INDICATOR", it: "INDICATORE AURA", pt: "INDICADOR DE AURA",
      es: "INDICADOR DE AURA", fr: "INDICATEUR D'AURA", de: "AURA-ANZEIGE", ru: "ИНДИКАТОР АУРЫ",
      ja: "オーラ指標", zh: "灵气指标", ar: "مؤشر الهالة"
    },
    rescue_mode: {
      tr: "KURTARICI MOD", en: "RESCUE MODE", it: "MODALITÀ SALVATAGGIO", pt: "MODO RESGATE",
      es: "MODO RESCATE", fr: "MODE SAUVETAGE", de: "RETTUNGSMODUS", ru: "РЕЖИМ СПАСЕНИЯ",
      ja: "レスキューモード", zh: "救急模式", ar: "وضع الإنقاذ"
    },
    aries_fire: {
      tr: "Koç Burcu · Ateş", en: "Aries · Fire Element", it: "Ariete · Fuoco", pt: "Áries · Fogo",
      es: "Aries · Fuego", fr: "Bélier · Feu", de: "Widder · Feuer", ru: "Овен · Огонь",
      ja: "牡羊座 · 火のエレメント", zh: "白羊座 · 火象星座", ar: "الحمل · عنصر النار"
    },
    corporate_work: {
      tr: "İş & Kurumsal", en: "Corporate & Work", it: "Lavoro & Ufficio", pt: "Trabalho & Corporativo",
      es: "Trabajo & Corporativo", fr: "Travail & Entreprise", de: "Beruf & Business", ru: "Работа и Бизнес",
      ja: "仕事＆ビジネス", zh: "职场与商务", ar: "العمل والشركات"
    },
    excuses_stat: {
      tr: "1.2K+ Bahane", en: "1.2K+ Excuses", it: "1.2K+ Scuse", pt: "1.2K+ Desculpas",
      es: "1.2K+ Excusas", fr: "1.2K+ Excuses", de: "1.2K+ Ausreden", ru: "1.2K+ Оправданий",
      ja: "1.2K+の言い訳", zh: "1200+ 借口方案", ar: "+1.2 ألف عذر"
    },
    nail_pick: {
      tr: "★ Günün Protez Tırnak Seçimi", en: "★ Today's Nail Art Pick", it: "★ Nail Art del Giorno", pt: "★ Nail Art do Dia",
      es: "★ Nail Art del Día", fr: "★ Nail Art du Jour", de: "★ Nail-Art des Tages", ru: "★ Маникюр Дня",
      ja: "★ 本日のネイルアート", zh: "★ 今日美甲精选", ar: "★ اختيار أظافر اليوم"
    },
    excuse_pick: {
      tr: "⚡ Önerilen Kurtarıcı Bahane", en: "⚡ Recommended Smart Excuse", it: "⚡ Scusa Consigliata", pt: "⚡ Desculpa Recomendada",
      es: "⚡ Excusa Recomendada", fr: "⚡ Excuse Recommandée", de: "⚡ Empfohlene Ausrede", ru: "⚡ Рекомендуемое Оправдание",
      ja: "⚡ おすすめのスマート言い訳", zh: "⚡ 推荐救急借口", ar: "⚡ العذر الذكي الموصى به"
    },
    nail_title: {
      tr: "Kozmik Altın French & Badem Form", en: "Cosmic Gold French & Almond Shape", it: "French Dorato Cosmico & Mandorla", pt: "French Dourado Cósmico & Amêndoa",
      es: "French Dorado Cósmico & Almendra", fr: "French Doré Cosmique & Amande", de: "Kosmisches Gold-French & Mandelform", ru: "Космический Золотой Френч и Миндаль",
      ja: "コズミックゴールドフレンチ＆アーモンド", zh: "璀璨金星法式美甲 · 杏仁甲型", ar: "فرنش ذهبي كوني وشكل لوزي"
    },
    excuse_title: {
      tr: "“Acil müşteri veri tabanı senkronizasyon toplantısına girmem gerekti.”",
      en: "“Urgent client database sync call just came up; need to jump on immediately.”",
      it: "“È appena saltata fuori una riunione urgente di sincronizzazione dati; devo collegarmi subito.”",
      pt: "“Surgiu uma reunião urgente de sincronização com cliente; preciso entrar agora.”",
      es: "“Surgió una reunión urgente de sincronización con el cliente; debo conectarme ya.”",
      fr: "“Une réunion urgente de synchronisation client vient de tomber ; je dois m'y connecter tout de suite.”",
      de: "“Es gab einen dringenden Synchronisationstermin mit dem Kunden; ich muss sofort rein.”",
      ru: "«Срочный созвон по синхронизации базы данных клиента; нужно немедленно подключиться».",
      ja: "「クライアントとの緊急データベース同期ミーティングが入り、すぐに対応が必要です。」",
      zh: "“临时收到客户数据库紧急同步会议通知，需要立即接入处理。”",
      ar: "“ظهر فجأة اجتماع طارئ لمزامنة قاعدة بيانات العميل؛ يجب أن أنضم فوراً.”"
    },
    nail_desc: {
      tr: "Ateş elementinin tutkulu aurasını yansıtan yıldız tozu varak tasarımı.",
      en: "Star-dust foil design radiating the passionate aura of the Fire element.",
      it: "Design dorato stellare che irradia l'energia passionale dell'elemento Fuoco.",
      pt: "Design com folha de ouro estelar refletindo a aura apaixonada do elemento Fogo.",
      es: "Diseño con detalles de polvo estelar que irradia la energía del elemento Fuego.",
      fr: "Design feuille d'or scintillant reflétant l'aura passionnée de l'élément Feu.",
      de: "Sternenstaub-Goldfolien-Design, das die feurige Aura des Elements widerspiegelt.",
      ru: "Дизайн с золотой звездной поталью, отражающий пламенную ауру стихии Огня.",
      ja: "火のエレメントの情熱的なオーラを放つスターダスト箔デザイン。",
      zh: "融入星尘金箔璀璨质感，完美映衬火象星座的热烈气场。",
      ar: "تصميم رقائق غبار النجوم يعكس الهالة الشغوفة لعنصر النار."
    },
    excuse_desc: {
      tr: "Yöneticiye ve ekip liderlerine karşı diplomatik ve sorgulanmaz mazeret.",
      en: "A polished, unquestionable excuse tailored for managers and team leads.",
      it: "Una giustificazione diplomatica e impeccabile per manager e leader di team.",
      pt: "Uma desculpa diplomática e inquestionável pensada para gerentes e líderes.",
      es: "Una excusa diplomática e incuestionable pensada para gerentes y líderes.",
      fr: "Une excuse diplomatique et irréprochable adaptée pour les managers et chefs d'équipe.",
      de: "Eine diplomatische und unanfechtbare Ausrede für Manager und Teamleiter.",
      ru: "Дипломатичное и неоспоримое оправдание для руководителей и коллег.",
      ja: "上司やチームリーダーに対してスマートかつ疑われないビジネス表現。",
      zh: "适用于团队管理者或客户的专业得体、难以辩驳的得体说辞。",
      ar: "عذر دبلوماسي لا يقبل الشك ومصمم للمدراء وقادة الفرق."
    },
    tiktok_feed: {
      tr: "TikTok Dikey Akış", en: "TikTok Vertical Feed", it: "Feed Verticale TikTok", pt: "Feed Vertical TikTok",
      es: "Feed Vertical TikTok", fr: "Flux Vertical TikTok", de: "TikTok Vertikaler Feed", ru: "Вертикальная Лента TikTok",
      ja: "TikTok風縦型フィード", zh: "竖屏信息流", ar: "موجز تيك توك الرأسي"
    },
    credibility: {
      tr: "İnandırıcılık: %98", en: "Credibility: 98%", it: "Credibilità: 98%", pt: "Credibilidade: 98%",
      es: "Credibilidad: 98%", fr: "Crédibilité: 98%", de: "Glaubwürdigkeit: 98%", ru: "Правдоподобность: 98%",
      ja: "信憑性: 98%", zh: "可信度：98%", ar: "المصداقية: 98%"
    },
    explore_btn: {
      tr: "İncele", en: "Explore", it: "Esplora", pt: "Explorar", es: "Explorar",
      fr: "Explorer", de: "Erkunden", ru: "Обзор", ja: "詳しく", zh: "浏览", ar: "استعراض"
    },
    mystic_tarot: {
      tr: "Mistik Tarot", en: "Mystic Tarot", it: "Tarocchi Mistici", pt: "Tarô Místico", es: "Tarot Místico",
      fr: "Tarot Mystique", de: "Mystisches Tarot", ru: "Мистическое Таро", ja: "神秘のタロット", zh: "神秘塔罗", ar: "التاروت الصوفي"
    },
    collection_label: {
      tr: "Koleksiyon", en: "Collection", it: "Collezione", pt: "Coleção", es: "Colección",
      fr: "Collection", de: "Sammlung", ru: "Коллекция", ja: "コレクション", zh: "收藏分类", ar: "المجموعة"
    },
    magician_card: {
      tr: "Büyücü Kartı", en: "The Magician", it: "Il Mago", pt: "O Mago", es: "El Mago",
      fr: "Le Bateleur", de: "Der Magier", ru: "Карта Мага", ja: "魔術師のカード", zh: "魔术师牌", ar: "بطاقة الساحر"
    },
    emergency_label: {
      tr: "Acil Durum", en: "Emergency", it: "Emergenza", pt: "Emergência", es: "Emergencia",
      fr: "Urgence", de: "Notfall", ru: "Экстренный Случай", ja: "緊急時", zh: "紧急突发", ar: "حالة طارئة"
    },
    jewelry_label: {
      tr: "Stil Takı", en: "Style Jewelry", it: "Gioielli di Stile", pt: "Joias de Estilo", es: "Joyería de Estilo",
      fr: "Bijoux de Style", de: "Stilvoller Schmuck", ru: "Украшения", ja: "スタイルジュエリー", zh: "风格珠宝", ar: "مجوهرات أنيقة"
    },
    lucky_spin: {
      tr: "Şans Ruleti", en: "Lucky Spin", it: "Ruota della Fortuna", pt: "Roleta da Sorte", es: "Ruleta de la Suerte",
      fr: "Roue de la Chance", de: "Glücksrad", ru: "Колесо Удачи", ja: "ラッキースピン", zh: "幸运转盘", ar: "عجلة الحظ"
    },
    agate_pendant: {
      tr: "Akik Kolye", en: "Agate Pendant", it: "Pendente in Agata", pt: "Pingente de Ágata", es: "Colgante de Ágata",
      fr: "Pendentif en Agate", de: "Achat-Anhänger", ru: "Кулон из Агата", ja: "瑪瑙ペンダント", zh: "玛瑙吊坠", ar: "قلادة العقيق"
    },
    spin_wheel: {
      tr: "Çarkı Çevir", en: "Spin Wheel", it: "Gira la Ruota", pt: "Girar Roleta", es: "Girar Ruleta",
      fr: "Tourner la Roue", de: "Rad Drehen", ru: "Крутить Колесо", ja: "ルーレットを回す", zh: "旋转轮盘", ar: "أدر العجلة"
    }
  };

  const hStr = (key: string) => heroI18n[key]?.[language] || heroI18n[key]?.en || "";

  return (
    <section
      style={{
        padding: "70px 0 80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "50px",
            alignItems: "center",
          }}
          className="app-hero-grid"
        >
          {/* Left Column: Text, Badges, CTAs */}
          <div>
            {/* Top Badges */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px", alignItems: "center" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "7px 18px",
                  borderRadius: "9999px",
                  border: `1px solid ${localizedApp.primaryColor}40`,
                  background: `${localizedApp.primaryColor}15`,
                  backdropFilter: "blur(12px)",
                  boxShadow: `0 0 18px ${localizedApp.glowColor}`,
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: localizedApp.primaryColor,
                    boxShadow: `0 0 8px ${localizedApp.primaryColor}`,
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontSize: "13.5px",
                    fontWeight: 800,
                    letterSpacing: "0.02em",
                    background: `linear-gradient(135deg, ${localizedApp.primaryColor} 0%, ${localizedApp.secondaryColor} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Wixtory: {localizedApp.name}
                </span>
              </div>

              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  background: "rgba(245, 158, 11, 0.15)",
                  border: "1px solid rgba(245, 158, 11, 0.4)",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#F59E0B",
                  boxShadow: "0 0 16px rgba(245, 158, 11, 0.25)",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "#F59E0B",
                    boxShadow: "0 0 8px #F59E0B",
                  }}
                />
                <span>{t("coming_soon_badge")}</span>
              </span>

              <span
                className="pill-badge"
                style={{
                  color: localizedApp.primaryColor,
                  borderColor: `${localizedApp.primaryColor}30`,
                  background: `${localizedApp.primaryColor}10`,
                }}
              >
                <Sparkles size={13} />
                <span>{localizedApp.heroBadge}</span>
              </span>

              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                }}
              >
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
                <strong style={{ color: "var(--text-main)" }}>{localizedApp.rating}</strong> ({localizedApp.reviewsCount} {t("reviews")})
              </span>

              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                }}
              >
                <Download size={13} style={{ color: localizedApp.primaryColor }} />
                <strong style={{ color: "var(--text-main)" }}>{localizedApp.downloads}</strong>
              </span>
            </div>

            {/* Giant Title */}
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 58px)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                lineHeight: "1.1",
                marginBottom: "20px",
              }}
            >
              <span>{localizedApp.name} </span>
              <span
                style={{
                  background: `linear-gradient(135deg, ${localizedApp.primaryColor} 0%, ${localizedApp.secondaryColor} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {localizedApp.heroTagline}
              </span>
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 19px)",
                color: "var(--text-secondary)",
                lineHeight: "1.65",
                maxWidth: "620px",
                marginBottom: "36px",
              }}
            >
              {localizedApp.heroSubheadline}
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "14px",
                marginBottom: "36px",
              }}
            >
              <StoreDownloadButtons
                layout="horizontal"
                isComingSoon={true}
                comingSoonText={t("coming_soon_stores")}
              />

              <a
                href="#key-features"
                className="btn-secondary"
                style={{
                  padding: "13px 22px",
                  borderRadius: "16px",
                  color: localizedApp.primaryColor,
                  border: `1px solid ${localizedApp.primaryColor}66`,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                <span>{t("features") || "Key Features"}</span>
                <ArrowDown size={16} />
              </a>
            </div>

            {/* Trust Micro-bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                paddingTop: "20px",
                borderTop: "1px solid var(--border-subtle)",
                fontSize: "13px",
                color: "var(--text-secondary)",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <ShieldCheck size={16} style={{ color: "#10B981" }} />
                <span>{t("privacy_guarantee")}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Sparkles size={16} style={{ color: localizedApp.primaryColor }} />
                <span>{t("offline_support")}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Phone Mockup Container */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Ambient Background Glow */}
            <div
              className="animate-pulse-glow"
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${localizedApp.glowColor} 0%, transparent 70%)`,
                filter: "blur(50px)",
                zIndex: 0,
              }}
            />

            {/* Mockup Frame */}
            <div
              className="animate-float"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: "370px",
                borderRadius: "46px",
                padding: "12px",
                background: "var(--bg-glass)",
                boxShadow: "var(--shadow-card)",
                border: "2px solid var(--border-subtle)",
              }}
            >
              <div
                style={{
                  background: isAstro ? "#0B0718" : "#040B14",
                  borderRadius: "38px",
                  overflow: "hidden",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "580px",
                }}
              >
                {/* Dynamic Island */}
                <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 8px 0" }}>
                  <div
                    style={{
                      width: "110px",
                      height: "22px",
                      background: "#000000",
                      borderRadius: "14px",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  />
                </div>

                {/* Mockup App Screen Content */}
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
                  {/* Top Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontSize: "11px", color: localizedApp.primaryColor, fontWeight: 700 }}>
                        {isAstro ? hStr("aura_indicator") : hStr("rescue_mode")}
                      </div>
                      <div style={{ fontSize: "19px", fontWeight: 800, color: "#ffffff" }}>
                        {isAstro ? hStr("aries_fire") : hStr("corporate_work")}
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "5px 12px",
                        borderRadius: "10px",
                        background: localizedApp.primaryColor,
                        color: "#ffffff",
                        fontSize: "11px",
                        fontWeight: 700,
                      }}
                    >
                      {isAstro ? "Aura 98%" : hStr("excuses_stat")}
                    </div>
                  </div>

                  {/* Main Spotlight Card inside phone */}
                  <div
                    style={{
                      borderRadius: "24px",
                      padding: "22px",
                      background: isAstro
                        ? "linear-gradient(145deg, #1C1236 0%, #351A5C 100%)"
                        : "linear-gradient(145deg, #071C2E 0%, #0E3D5C 100%)",
                      border: `1px solid ${localizedApp.primaryColor}`,
                      boxShadow: `0 14px 28px -6px ${localizedApp.glowColor}`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "11px",
                        textTransform: "uppercase",
                        color: isAstro ? "#F59E0B" : "#10B981",
                        fontWeight: 700,
                        marginBottom: "6px",
                      }}
                    >
                      {isAstro ? hStr("nail_pick") : hStr("excuse_pick")}
                    </div>
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: 800,
                        color: "#ffffff",
                        marginBottom: "10px",
                        lineHeight: "1.3",
                      }}
                    >
                      {isAstro ? hStr("nail_title") : hStr("excuse_title")}
                    </div>
                    <div style={{ fontSize: "12px", color: "#CBD5E1", lineHeight: "1.45" }}>
                      {isAstro ? hStr("nail_desc") : hStr("excuse_desc")}
                    </div>

                    <div
                      style={{
                        marginTop: "18px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "11px",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          background: "rgba(0,0,0,0.4)",
                          color: "#ffffff",
                        }}
                      >
                        {isAstro ? hStr("tiktok_feed") : hStr("credibility")}
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          color: localizedApp.primaryColor,
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        {isAstro ? hStr("explore_btn") : "WhatsApp"} →
                      </span>
                    </div>
                  </div>

                  {/* Secondary Modules */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    <div
                      style={{
                        padding: "14px",
                        borderRadius: "16px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div style={{ fontSize: "10px", color: "var(--text-muted)" }}>
                        {isAstro ? hStr("mystic_tarot") : hStr("collection_label")}
                      </div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginTop: "2px" }}>
                        {isAstro ? hStr("magician_card") : hStr("emergency_label")}
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "14px",
                        borderRadius: "16px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div style={{ fontSize: "10px", color: "var(--text-muted)" }}>
                        {isAstro ? hStr("jewelry_label") : hStr("lucky_spin")}
                      </div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginTop: "2px" }}>
                        {isAstro ? hStr("agate_pendant") : hStr("spin_wheel")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div style={{ padding: "12px 0", display: "flex", justifyContent: "center" }}>
                  <div
                    style={{
                      width: "120px",
                      height: "4px",
                      borderRadius: "2px",
                      background: "rgba(255,255,255,0.4)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .app-hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
