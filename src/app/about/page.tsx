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

import { LanguageCode } from "@/data/translations";

export default function AboutPage() {
  const { t, language } = useLanguage();

  const aboutI18n: Record<string, Record<LanguageCode, string>> = {
    hero_badge: {
      tr: "HAKKIMIZDA & KÜLTÜR", en: "ABOUT US & CULTURE", it: "CHI SIAMO & CULTURA", pt: "SOBRE NÓS & CULTURA",
      es: "SOBRE NOSOTROS & CULTURA", fr: "À PROPOS & CULTURE", de: "ÜBER UNS & KULTUR", ru: "О НАС И КУЛЬТУРА",
      ja: "会社案内＆カルチャー", zh: "关于我们与工程文化", ar: "من نحن وثقافتنا"
    },
    hero_title_pre: {
      tr: "Geleceğin Dijital Deneyimlerini ", en: "Building Meaningful ", it: "Costruiamo Esperienze Digitali ", pt: "Construindo Experiências Digitais ",
      es: "Construyendo Experiencias Digitales ", fr: "Bâtir des Expériences Numériques ", de: "Bedeutende Digitale Erlebnisse ", ru: "Создаем Значимый Цифровой Опыт ",
      ja: "価値あるデジタル体験を", zh: "以匠心雕琢有意义的", ar: "نبني تجارب رقمية ذات معنى "
    },
    hero_title_grad: {
      tr: "Tutkuyla Üretiyoruz", en: "Digital Experiences", it: "con Autentica Passione", pt: "com Paixão e Propósito",
      es: "con Auténtica Pasión", fr: "avec Passion et Rigueur", de: "mit Wahrer Leidenschaft", ru: "с Истинной Страстью",
      ja: "情熱を込めて創造する", zh: "极致数字化体验", ar: "بشغف وإتقان متناهي"
    },
    hero_desc: {
      tr: "Wixtory; mobil uygulamalar ve eğlenceli mobil oyunlar geliştiren bağımsız bir dijital stüdyodur. Kullanıcı gizliliğinden asla ödün vermeden, saf performans ve üst düzey estetik mühendisliği bir araya getiriyoruz.",
      en: "Wixtory is an independent digital studio creating focused mobile applications and engaging games. We unite high-end aesthetic engineering with zero-compromise data privacy.",
      it: "Wixtory è uno studio digitale indipendente che sviluppa applicazioni mobili e giochi interattivi. Uniamo ingegneria estetica di alto livello e privacy senza compromessi.",
      pt: "A Wixtory é um estúdio digital independente focado em aplicativos móveis e jogos envolventes. Unimos engenharia estética refinada e privacidade intransigente.",
      es: "Wixtory es un estudio digital independiente que crea aplicaciones móviles y juegos atractivos. Unimos ingeniería estética de alto nivel y privacidad total sin concesiones.",
      fr: "Wixtory est un studio numérique indépendant concevant des applications mobiles et des jeux captivants. Nous allions ingénierie esthétique de pointe et respect absolu de la vie privée.",
      de: "Wixtory ist ein unabhängiges digitales Studio für fokussierte mobile Apps und fesselnde Spiele. Wir vereinen High-End-Ästhetik mit kompromisslosem Datenschutz.",
      ru: "Wixtory — независимая цифровая студия, создающая мобильные приложения и игры. Мы объединяем передовую эстетическую инженерию и бескомпромиссную защиту данных.",
      ja: "Wixtoryは、特化型モバイルアプリと魅力的なゲームを創り出す独立系デジタルスタジオです。ハイエンドな美学エンジニアリングと妥協なきプライバシー保護を融合しています。",
      zh: "Wixtory 是一家专注于打造垂直领域移动应用与趣味游戏的独立数字工作室。我们将高质感的美学工程与零妥协的数据隐私完美融为一体。",
      ar: "Wixtory استوديو رقمي مستقل يبتكر تطبيقات جوال متميزة وألعاباً تفاعلية شيقة، جامعاً بين الهندسة الجمالية الفائقة والخصوصية الصارمة."
    },
    spirit_badge: {
      tr: "EKİP RUHU & YAŞAM", en: "OUR PEOPLE & SPIRIT", it: "IL NOSTRO SPIRITO & VITA", pt: "NOSSO ESPÍRITO & VIDA",
      es: "NUESTRO ESPÍRITU & VIDA", fr: "NOTRE ESPRIT & VIE D'ÉQUIPE", de: "TEAMGEIST & LEBEN", ru: "НАШ ДУХ И ЖИЗНЬ",
      ja: "チームスピリット＆文化", zh: "团队精神与研发生态", ar: "روح الفريق وحياتنا"
    },
    spirit_title: {
      tr: "İlham Veren Bir Kültür, Fark Yaratan Ürünler", en: "Inspiring Culture, Impactful Products", it: "Cultura Ispiratrice, Prodotti d'Impatto", pt: "Cultura Inspiradora, Produtos de Impacto",
      es: "Cultura Inspiradora, Productos de Impacto", fr: "Une Culture Inspirante, des Produits Remarquables", de: "Inspirierende Kultur, Eindrucksvolle Produkte", ru: "Вдохновляющая Культура и Сильные Продукты",
      ja: "インスピレーションに満ちた文化、確かなインパクトを生む製品", zh: "充满灵感的研发文化，打造卓越影响力的数字产品", ar: "ثقافة ملهمة ومنتجات تصنع فارقاً حقيقياً"
    },
    spirit_p1: {
      tr: "Bizler kod yazmanın, arayüz tasarlamanın ve oyun kurgulamanın sadece bir iş değil; kullanıcıların günlük hayatına değer katan bir zanaat olduğuna inanıyoruz.",
      en: "We believe that building software, crafting interfaces, and designing game worlds is not merely a job—it is a craft that enriches people's everyday lives.",
      it: "Crediamo che sviluppare software, disegnare interfacce e creare giochi sia più di un lavoro: è un'arte che arricchisce la vita quotidiana.",
      pt: "Acreditamos que criar software, interfaces e jogos é mais que um trabalho: é um ofício que enriquece o dia a dia das pessoas.",
      es: "Creemos que desarrollar software, diseñar interfaces y crear juegos no es un simple trabajo: es un oficio que enriquece la vida diaria.",
      fr: "Nous croyons que concevoir des logiciels, des interfaces et des jeux n'est pas un simple métier : c'est un artisanat qui enrichit le quotidien.",
      de: "Wir glauben, dass Softwareentwicklung, Interface-Design und Spielekreation mehr als ein Beruf sind: Es ist ein Handwerk, das den Alltag bereichert.",
      ru: "Мы верим, что создание кода, интерфейсов и игровых миров — это не просто работа, а искусство, приносящее пользу в повседневную жизнь.",
      ja: "コードを書き、インターフェースを磨き、ゲームを創り上げることは単なる仕事ではなく、人々の日常を豊かにするクラフトマンシップであると信じています。",
      zh: "我们坚信编写代码、设计界面与构筑游戏世界不仅是一份工作，更是一门为全球用户日常生活赋予真正价值的精湛工匠艺术。",
      ar: "نؤمن بأن كتابة البرمجيات وتصميم الواجهات والألعاب ليست مجرد وظيفة، بل هي حرفة أصيلة تثري الحياة اليومية للمستخدمين."
    },
    spirit_p2: {
      tr: "Karmaşık ve şişirilmiş süper uygulamalar yerine; her biri alanında en iyi olan, hızlı açılan, pili tüketmeyen ve kullanıcı verilerini satmayan özel uygulamalar inşa ediyoruz.",
      en: "Instead of bloated super-apps, we build focused experiences: fast to open, battery-friendly, zero telemetry, and delightfully fluid.",
      it: "Al posto di super-app sovraccariche, creiamo esperienze focalizzate: veloci all'avvio, efficienti nei consumi, senza telemetria ed estremamente fluide.",
      pt: "Em vez de superaplicativos inchados, construímos experiências focadas: abertura rápida, consumo eficiente de bateria, zero telemetria e fluidez pura.",
      es: "En lugar de superaplicaciones sobrecargadas, creamos experiencias enfocadas: apertura instantánea, bajo consumo de batería, cero telemetría y máxima fluidez.",
      fr: "Au lieu de super-applications encombrées, nous créons des expériences ciblées : rapides à charger, économes en batterie, sans télémétrie et d'une grande fluidité.",
      de: "Statt überladener Super-Apps bauen wir fokussierte Erlebnisse: blitzschnell geöffnet, akkuschonend, ohne Telemetrie und bemerkenswert flüssig.",
      ru: "Вместо перегруженных суперприложений мы создаем точечные продукты: мгновенный запуск, экономия батареи, ноль телеметрии и плавная работа.",
      ja: "肥大化したスーパーアプリではなく、高速起動・省電力・ゼロテレメトリ・滑らかな操作性を誇る特化型アプリを丹念に構築しています。",
      zh: "相比臃肿繁杂的超级应用，我们坚持打造专注克制的数字体验：秒级极速冷启动、低耗电、零遥测隐私追踪以及行云流水般的流畅交互。",
      ar: "بدلاً من التطبيقات الشاملة المتضخمة، نبني تجارب مركزة ومستقلة: سريعة الفتح وموفرة للبطارية وبدون أي تتبع، وبسلاسة مبهجة."
    },
    btn_explore_games: {
      tr: "Oyunlarımızı Gör", en: "Explore Games", it: "Esplora i Giochi", pt: "Explorar Jogos",
      es: "Explorar Juegos", fr: "Découvrir nos Jeux", de: "Spiele Entdecken", ru: "Смотреть Игры",
      ja: "ゲーム一覧を見る", zh: "浏览所有游戏", ar: "استعراض الألعاب"
    },
    btn_vision_mission: {
      tr: "Vizyon & Misyon", en: "Vision & Mission", it: "Visione & Missione", pt: "Visão & Missão",
      es: "Visión & Misión", fr: "Vision & Mission", de: "Vision & Mission", ru: "Видение и Миссия",
      ja: "ビジョン＆ミッション", zh: "愿景与战略使命", ar: "الرؤية والرسالة"
    },
    values_badge: {
      tr: "DEĞERLERİMİZ", en: "CORE VALUES", it: "I NOSTRI VALORI", pt: "NOSSOS VALORES",
      es: "NUESTROS VALORES", fr: "NOS VALEURS", de: "UNSERE WERTE", ru: "НАШИ ЦЕННОСТИ",
      ja: "コアバリュー", zh: "核心价值观", ar: "قيمنا الجوهرية"
    },
    values_title: {
      tr: "Bizi Biz Yapan 4 Temel İlke", en: "4 Pillars That Guide Us", it: "4 Pilastri che ci Guidano", pt: "4 Pilares que nos Guiam",
      es: "4 Pilares que nos Guían", fr: "4 Piliers qui nous Guident", de: "4 Säulen, die uns Leiten", ru: "4 Принципа, которые Направляют Нас",
      ja: "私たちを導く4つの基本原則", zh: "引领我们前行的 4 大核心基石", ar: "4 ركائز توجه مسيرتنا"
    },
    metric_apps_label: {
      tr: "Uygulama & Oyun", en: "Apps & Games", it: "App & Giochi", pt: "Apps & Jogos",
      es: "Apps & Juegos", fr: "Apps & Jeux", de: "Apps & Spiele", ru: "Приложения и Игры",
      ja: "アプリ＆ゲーム", zh: "旗舰应用与精品游戏", ar: "تطبيقات وألعاب"
    },
    metric_apps_sub: {
      tr: "Sürekli büyüyen katalog", en: "Ever-growing catalog", it: "Catalogo in continua crescita", pt: "Catálogo em constante expansão",
      es: "Catálogo en constante crecimiento", fr: "Catalogue en constante expansion", de: "Stetig wachsender Katalog", ru: "Постоянно растущий каталог",
      ja: "進化し続けるプロダクトカタログ", zh: "持续迭代扩展的矩阵", ar: "كتالوج متجدد باستمرار"
    },
    metric_lang_label: {
      tr: "Desteklenen Dil", en: "Supported Languages", it: "Lingue Supportate", pt: "Idiomas Suportados",
      es: "Idiomas Compatibles", fr: "Langues Prises en Charge", de: "Unterstützte Sprachen", ru: "Поддерживаемые Языки",
      ja: "対応言語数", zh: "全球深度支持语言", ar: "اللغات المدعومة"
    },
    metric_lang_sub: {
      tr: "Küresel kullanıcı kitlesi", en: "Global player community", it: "Community globale di utenti", pt: "Comunidade global de usuários",
      es: "Comunidad global de usuarios", fr: "Communauté mondiale d'utilisateurs", de: "Globale Nutzer-Community", ru: "Глобальное сообщество пользователей",
      ja: "世界中のプレイヤーコミュニティ", zh: "覆盖全球的活跃用户群体", ar: "مجتمع عالمي من المستخدمين"
    },
    metric_privacy_label: {
      tr: "Kullanıcı Gizliliği", en: "User Privacy Focus", it: "Focus sulla Privacy", pt: "Foco em Privacidade",
      es: "Enfoque en Privacidad", fr: "Priorité à la Confidentialité", de: "Fokus auf Datenschutz", ru: "Приоритет Приватности",
      ja: "完全なプライバシー保護", zh: "用户数据最高级别隐私", ar: "التركيز على خصوصية المستخدم"
    },
    metric_privacy_sub: {
      tr: "Sıfır telemetri politikası", en: "Zero telemetry standard", it: "Standard zero telemetria", pt: "Padrão de zero telemetria",
      es: "Estándar de cero telemetría", fr: "Norme zéro télémétrie", de: "Zero-Telemetry-Standard", ru: "Стандарт нулевой телеметрии",
      ja: "ゼロテレメトリ運用ポリシー", zh: "严苛恪守零遥测保护规范", ar: "معيار تصفير التتبع البرمجي"
    },
    metric_native_label: {
      tr: "Yerel & Akıcı Deneyim", en: "Native & Smooth Experience", it: "Esperienza Nativa & Fluida", pt: "Experiência Nativa & Fluida",
      es: "Experiencia Nativa & Fluida", fr: "Expérience Native & Fluide", de: "Native & Flüssige Performance", ru: "Нативный и Плавный Опыт",
      ja: "ネイティブ＆快適な操作性", zh: "原生架构极速流畅体验", ar: "تجربة أصلية فائقة السلاسة"
    },
    metric_native_sub: {
      tr: "Flutter & Edge CDN", en: "Flutter & Edge CDN", it: "Flutter & CDN Edge", pt: "Flutter & CDN Edge",
      es: "Flutter & Edge CDN", fr: "Flutter & CDN Edge", de: "Flutter & Edge-CDN", ru: "Flutter и Edge CDN",
      ja: "Flutter＆エッジCDN基盤", zh: "Flutter 与 Edge CDN 极速加速", ar: "فلاتر وشبكة Edge CDN"
    }
  };

  const aStr = (key: string) => aboutI18n[key]?.[language] || aboutI18n[key]?.en || "";

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
              <span>{aStr("hero_badge")}</span>
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
              {aStr("hero_title_pre")}
              <span
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #3B82F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {aStr("hero_title_grad")}
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
              {aStr("hero_desc")}
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
                  {aStr("spirit_badge")}
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
                  {aStr("spirit_title")}
                </h2>

                <p
                  style={{
                    fontSize: "15.5px",
                    color: "var(--text-secondary)",
                    lineHeight: "1.65",
                    margin: 0,
                  }}
                >
                  {aStr("spirit_p1")}
                </p>

                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  {aStr("spirit_p2")}
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
                    <span>{aStr("btn_explore_games")}</span>
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
                    <span>{aStr("btn_vision_mission")}</span>
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
                {aStr("values_badge")}
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
                {aStr("values_title")}
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
                  title: t("value_aesthetic_title"),
                  desc: t("value_aesthetic_desc"),
                },
                {
                  icon: <Shield size={24} color="#10B981" />,
                  title: t("value_privacy_title"),
                  desc: t("value_privacy_desc"),
                },
                {
                  icon: <Zap size={24} color="#06B6D4" />,
                  title: t("value_performance_title"),
                  desc: t("value_performance_desc"),
                },
                {
                  icon: <Globe size={24} color="#F59E0B" />,
                  title: t("value_multilingual_title"),
                  desc: t("value_multilingual_desc"),
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
                    {aStr("metric_apps_label")}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "2px" }}>
                    {aStr("metric_apps_sub")}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "36px", fontWeight: 900, color: "var(--secondary)", marginBottom: "4px" }}>
                    11
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-main)" }}>
                    {aStr("metric_lang_label")}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "2px" }}>
                    {aStr("metric_lang_sub")}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "36px", fontWeight: 900, color: "#10B981", marginBottom: "4px" }}>
                    %100
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-main)" }}>
                    {aStr("metric_privacy_label")}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "2px" }}>
                    {aStr("metric_privacy_sub")}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "36px", fontWeight: 900, color: "#8B5CF6", marginBottom: "4px" }}>
                    100% Native
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-main)" }}>
                    {aStr("metric_native_label")}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "2px" }}>
                    {aStr("metric_native_sub")}
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
