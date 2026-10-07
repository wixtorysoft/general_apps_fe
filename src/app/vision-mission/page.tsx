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
  const { t, language } = useLanguage();

  const vmI18n: Record<string, Record<string, string>> = {
    vm_badge: {
      tr: "VİZYON & MİSYON", en: "VISION & MISSION", it: "VISIONE & MISSIONE", pt: "VISÃO & MISSÃO",
      es: "VISIÓN & MISIÓN", fr: "VISION & MISSION", de: "VISION & MISSION", ru: "ВИДЕНИЕ И МИССИЯ",
      ja: "ビジョン＆ミッション", zh: "愿景与使命", ar: "الرؤية والرسالة"
    },
    hero_pre: {
      tr: "Dijital Dünyada ", en: "Pioneering Purposeful ", it: "Nel Mondo Digitale, ", pt: "No Mundo Digital, ",
      es: "En el Mundo Digital, ", fr: "Dans le Monde Numérique, ", de: "In der Digitalen Welt ", ru: "В Цифровом Мире ",
      ja: "デジタル世界において ", zh: "在数字世界中 ", ar: "في العالم الرقمي "
    },
    hero_grad: {
      tr: "Geleceği Şekillendirmek", en: "Digital Excellence", it: "Plasmare il Futuro", pt: "Moldando o Futuro",
      es: "Forjando el Futuro", fr: "Façonner l'Avenir", de: "Zukunft Gestalten", ru: "Формируя Будущее",
      ja: "未来を拓く卓越性", zh: "引领数字未来", ar: "صياغة المستقبل الرقمي"
    },
    hero_desc: {
      tr: "Kullanıcıların dikkatini sömüren ve verilerini metalaştıran devasa hantal platformlara karşı; saf, hızlı, estetik ve saygılı bir mobil ekosistem inşa ediyoruz.",
      en: "Building a respectful, lightning-fast, and aesthetically engineered mobile ecosystem that empowers users without exploiting attention or personal data.",
      it: "Costruiamo un ecosistema mobile puro, veloce, estetico e rispettoso, lontano dalle piattaforme pesanti che sfruttano l'attenzione e i dati.",
      pt: "Construindo um ecossistema móvel puro, rápido, estético e respeitoso, que capacita usuários sem explorar atenção ou dados pessoais.",
      es: "Construyendo un ecosistema móvil puro, veloz, estético y respetuoso que empodera a los usuarios sin explotar su atención ni sus datos.",
      fr: "Bâtir un écosystème mobile pur, ultra-rapide, esthétique et respectueux, loin des plateformes lourdes qui exploitent les données personnelles.",
      de: "Wir schaffen ein respektvolles, blitzschnelles und ästhetisches mobiles Ökosystem, das Nutzer stärkt, ohne Aufmerksamkeit oder Daten auszubeuten.",
      ru: "Мы создаем уважительную, молниеносную и эстетичную мобильную экосистему, которая уважает пользователя и защищает его данные.",
      ja: "ユーザーの関心を搾取しデータを商品化する巨大プラットフォームに対抗し、純粋で高速、美しく誠実なモバイルエコシステムを構築します。",
      zh: "拒绝过度索取注意力和滥用隐私的臃肿平台；我们致力于打造纯粹、极速、极具美感且尊重用户的移动生态。",
      ar: "نبني منظومة محمولة فائقة السرعة، جمالية ومحترمة للمستخدم دون استغلال للبيانات الشخصية أو الانتباه."
    },
    commitments_badge: {
      tr: "STRATEJİK TAAHHÜTLER", en: "OUR COMMITMENTS", it: "IMPEGNI STRATEGICI", pt: "COMPROMISSOS ESTRATÉGICOS",
      es: "COMPROMISOS ESTRATÉGICOS", fr: "ENGAGEMENTS STRATÉGIQUES", de: "STRATEGISCHE VERPFLICHTUNGEN", ru: "СТРАТЕГИЧЕСКИЕ ОБЯЗАТЕЛЬСТВА",
      ja: "お約束とコミットメント", zh: "战略承诺", ar: "التزاماتنا الاستراتيجية"
    },
    commitments_title: {
      tr: "Kullanıcılarımıza Verdiğimiz 4 Söz", en: "Our 4 Guarantees to Users", it: "Le Nostre 4 Promesse agli Utenti", pt: "Nossas 4 Garantias aos Usuários",
      es: "Nuestras 4 Garantías para los Usuarios", fr: "Nos 4 Engagements envers les Utilisateurs", de: "Unsere 4 Garantien an die Nutzer", ru: "4 Обещания Нашим Пользователям",
      ja: "ユーザーにお約束する4つの保証", zh: "我们向用户做出的4项核心保证", ar: "عهودنا الأربعة لمستخدمينا"
    },
    guar_1_title: {
      tr: "1. Sıfır Telemetri Sözü", en: "1. Zero Telemetry Pledge", it: "1. Zero Telemetria", pt: "1. Zero Telemetria",
      es: "1. Cero Telemetría", fr: "1. Zéro Télémétrie", de: "1. Null-Telemetrie-Versprechen", ru: "1. Обещание Нулевой Телеметрии",
      ja: "1. ゼロ・テレメトリーの誓い", zh: "1. 零遥测隐私保证", ar: "1. عهد انعدام القياس عن بعد"
    },
    guar_1_desc: {
      tr: "Kişisel verileriniz, arama geçmişiniz ve favorileriniz sunucularımızda asla satılmaz veya profillenmez.",
      en: "Your searches, favorites, and usage habits are never monetized, stored on third-party ad networks, or profiled.",
      it: "Ricerche, preferiti e dati di utilizzo non vengono mai monetizzati, ceduti a terzi o profilati.",
      pt: "Suas pesquisas, favoritos e hábitos de uso nunca são monetizados nem perfilados por terceiros.",
      es: "Tus búsquedas, favoritos y hábitos nunca se comercializan ni se comparten con redes de publicidad.",
      fr: "Vos recherches, favoris et habitudes ne sont jamais monétisés ni transmis à des régies publicitaires.",
      de: "Ihre Suchen, Favoriten und Gewohnheiten werden niemals monetarisiert oder für Werbeprofile genutzt.",
      ru: "Ваши поиски, избранное и история никогда не монетизируются и не передаются рекламодателям.",
      ja: "検索履歴やお気に入りなどの利用データが広告目的でプロファイリング・売却されることは一切ありません。",
      zh: "您的搜索习惯、收藏与数据绝不会被分析画像，更不会向第三方广告平台出售。",
      ar: "لا يتم مطلقاً بيع عمليات البحث أو المفضلة أو سجل الاستخدام أو استغلالها إعلانياً."
    },
    guar_2_title: {
      tr: "2. Saf Performans Güvencesi", en: "2. Pure Performance", it: "2. Prestazioni Pure", pt: "2. Desempenho Puro",
      es: "2. Rendimiento Puro", fr: "2. Pure Performance", de: "2. Reine Leistung", ru: "2. Чистая Производительность",
      ja: "2. ピュア・パフォーマンス保証", zh: "2. 极致性能保证", ar: "2. ضمان الأداء الصافي"
    },
    guar_2_desc: {
      tr: "Arka planda gereksiz veri çeken veya bataryayı tüketen arka plan servislerine izin vermeyiz.",
      en: "No heavy background trackers or battery-draining telemetry. Instant load times and responsive animations.",
      it: "Nessun tracciatore in background che consumi batteria. Tempi di caricamento istantanei e fluidità estrema.",
      pt: "Sem rastreadores em segundo plano drenando a bateria. Carregamentos instantâneos e extrema fluidez.",
      es: "Sin rastreadores en segundo plano que agoten la batería. Carga instantánea y máxima fluidez.",
      fr: "Aucun traceur d'arrière-plan vidant la batterie. Temps de chargement instantanés et fluidité absolue.",
      de: "Keine batteriehungrigen Hintergrund-Dienste. Blitzschnelle Ladezeiten und reaktionsschnelle Animationen.",
      ru: "Никаких скрытых фоновых процессов, разряжающих батарею. Мгновенная загрузка и абсолютная плавность.",
      ja: "バッテリーを消耗する不要なバックグラウンド通信を排除。瞬時の読み込みと滑らかなレスポンスを提供します。",
      zh: "坚决不设任何耗电偷跑后台服务，确保瞬间启动与极速交互响应。",
      ar: "لا توجد خدمات خلفية تستهلك البطارية أو البيانات. أوقات تحميل فورية وتفاعلات سلسة."
    },
    guar_3_title: {
      tr: "3. Çok Dilli Kapsayıcılık", en: "3. Global Multilingual Inclusion", it: "3. Inclusione Multilingue Globale", pt: "3. Inclusão Multilíngue Global",
      es: "3. Inclusión Multilingüe Global", fr: "3. Inclusion Multilingue Mondiale", de: "3. Globale Mehrsprachigkeit", ru: "3. Многоязычная Доступность",
      ja: "3. グローバル多言語対応", zh: "3. 全球多语言包容性", ar: "3. شمولية متعددة اللغات عالمياً"
    },
    guar_3_desc: {
      tr: "Dünyanın her yerindeki kullanıcılarımıza kendi anadillerinde kusursuz yerelleştirilmiş arayüzler sunarız.",
      en: "Native localization across 11 major global languages, giving everyone a first-class native experience.",
      it: "Localizzazione nativa in 11 lingue mondiali, offrendo a ciascuno un'esperienza di primo livello.",
      pt: "Localização nativa em 11 idiomas globais, proporcionando uma experiência de primeira classe a todos.",
      es: "Localización nativa en 11 idiomas globales, brindando una experiencia impecable a todos.",
      fr: "Localisation native dans 11 langues mondiales pour une expérience utilisateur irréprochable.",
      de: "Native Lokalisierung in 11 Weltsprachen für ein erstklassiges Nutzungserlebnis weltweit.",
      ru: "Нативная локализация на 11 мировых языков для полноценного и удобного взаимодействия.",
      ja: "主要11言語へのネイティブローカライズを実施し、母国語で快適にご利用いただけます。",
      zh: "深度适配全球 11 种核心语言，为每位用户带来原汁原味的使用体验。",
      ar: "تعريب وتوطين محلي في 11 لغة عالمية رئيسية لمنح تجربة استخدام متكاملة."
    },
    guar_4_title: {
      tr: "4. Şeffaflık & Tam Kontrol", en: "4. Total User Control", it: "4. Trasparenza & Pieno Controllo", pt: "4. Transparência & Controle Total",
      es: "4. Transparencia & Control Total", fr: "4. Transparence & Contrôle Total", de: "4. Transparenz & Volle Kontrolle", ru: "4. Прозрачность и Полный Контроль",
      ja: "4. 透明性と完全なユーザー管理権", zh: "4. 透明性与完全掌控权", ar: "4. الشفافية والتحكم الكامل"
    },
    guar_4_desc: {
      tr: "Tüm uygulamalarımızda 'Önbelleği Temizle' ve tek tıkla cihaz verilerini sıfırlama hakkı kullanıcıya aittir.",
      en: "Every app includes a one-tap 'Clear Cache' button, putting data management firmly in user hands.",
      it: "Ogni app include il pulsante 'Svuota Cache' per consentire all'utente il controllo assoluto dei dati.",
      pt: "Cada aplicativo inclui um botão 'Limpar Cache', mantendo o gerenciamento de dados em suas mãos.",
      es: "Cada aplicación incluye un botón 'Borrar Caché', dejando el control de los datos en tus manos.",
      fr: "Chaque application propose un bouton 'Vider le cache', plaçant la gestion des données entre vos mains.",
      de: "Jede App bietet 'Cache leeren' per Fingertipp – die Datenkontrolle verbleibt stets bei Ihnen.",
      ru: "Каждое приложение оснащено функцией очистки кэша в один клик, оставляя управление данными за вами.",
      ja: "全アプリにワンタップで端末データを消去できる「キャッシュ削除」機能を備え、管理権をユーザーへ。",
      zh: "所有应用均提供一键“清理缓存”功能，数据去留由您自主掌控。",
      ar: "يتضمن كل تطبيق زراً لمسح ذاكرة التخزين المؤقت بضغطة واحدة، لإبقاء التحكم بيدك دائماً."
    },
    cta_title: {
      tr: "Ürünlerimizi ve Oyunlarımızı Keşfedin", en: "Experience Our Apps & Games", it: "Scopri le Nostre App e i Nostri Giochi", pt: "Descubra Nossos Aplicativos e Jogos",
      es: "Descubre Nuestras Aplicaciones y Juegos", fr: "Découvrez Nos Applications et Jeux", de: "Entdecken Sie Unsere Apps & Spiele", ru: "Познакомьтесь с Нашими Приложениями и Играми",
      ja: "アプリとゲームを体験する", zh: "体验我们的精品应用与游戏", ar: "اكتشف تطبيقاتنا وألعابنا"
    },
    cta_desc: {
      tr: "Wixtory ekosisteminin amiral gemisi uygulamalarını inceleyin veya bağımsız oyun stüdyomuzun geliştirdiği eğlenceli oyun dünyalarına adım atın.",
      en: "Explore our flagship mobile utilities or step into the fun worlds crafted by our independent gaming studio.",
      it: "Esplora le nostre utility mobili di punta o immergiti nei mondi divertenti creati dal nostro studio di giochi indipendente.",
      pt: "Explore nossas ferramentas móveis de destaque ou entre nos mundos divertidos criados pelo nosso estúdio independente.",
      es: "Explora nuestras aplicaciones móviles insignia o sumérgete en los divertidos mundos creados por nuestro estudio de juegos independiente.",
      fr: "Découvrez nos utilitaires mobiles phares ou plongez dans les univers ludiques créés par notre studio indépendant.",
      de: "Entdecken Sie unsere führenden mobilen Werkzeuge oder tauchen Sie ein in die fesselnden Spielewelten unseres Studios.",
      ru: "Изучите наши флагманские мобильные утилиты или погрузитесь в увлекательные миры наших независимых игр.",
      ja: "Wixtoryエコシステムの主力アプリをチェックするか、独立系ゲームスタジオが贈る楽しい世界をご体験ください。",
      zh: "探索 Wixtory 生态系统的旗舰级移动工具，或走进我们独立游戏工作室打造的精彩互动世界。",
      ar: "استكشف أدواتنا المحمولة الرائدة أو انضم إلى عوالم الألعاب الممتعة التي يقدمها استوديو ألعابنا المستقل."
    },
    cta_games: {
      tr: "Oyunları Gör", en: "Explore Games", it: "Scopri i Giochi", pt: "Explorar Jogos",
      es: "Explorar Juegos", fr: "Explorer les Jeux", de: "Spiele Entdecken", ru: "Смотреть Игры",
      ja: "ゲームを見る", zh: "探索游戏", ar: "استكشاف الألعاب"
    },
    cta_apps: {
      tr: "Uygulamalara Git", en: "Go to Apps", it: "Vai alle App", pt: "Ir para Apps",
      es: "Ir a las Apps", fr: "Voir les Applications", de: "Zu den Apps", ru: "К Приложениям",
      ja: "アプリ一覧へ", zh: "前往应用", ar: "الانتقال للتطبيقات"
    }
  };

  const vStr = (key: string) => vmI18n[key]?.[language] || vmI18n[key]?.en || "";

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
              <span>{vStr("vm_badge")}</span>
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
              {vStr("hero_pre")}
              <span
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #3B82F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {vStr("hero_grad")}
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
              {vStr("hero_desc")}
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
                    {t("vision_badge")}
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
                    {t("vision_title")}
                  </h2>

                  <p
                    style={{
                      fontSize: "16px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.7",
                      marginBottom: "20px",
                    }}
                  >
                    {t("vision_desc")}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "24px" }}>
                    {[
                      t("vision_bullet_1"),
                      t("vision_bullet_2"),
                      t("vision_bullet_3"),
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
                    {t("mission_purpose_badge")}
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
                    {t("mission_title")}
                  </h2>

                  <p
                    style={{
                      fontSize: "16px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.7",
                      marginBottom: "20px",
                    }}
                  >
                    {t("mission_desc")}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "24px" }}>
                    {[
                      t("mission_bullet_1"),
                      t("mission_bullet_2"),
                      t("mission_bullet_3"),
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
                {vStr("commitments_badge")}
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
                {vStr("commitments_title")}
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
                  title: vStr("guar_1_title"),
                  desc: vStr("guar_1_desc"),
                },
                {
                  icon: <Zap size={22} color="#8B5CF6" />,
                  title: vStr("guar_2_title"),
                  desc: vStr("guar_2_desc"),
                },
                {
                  icon: <Globe size={22} color="#06B6D4" />,
                  title: vStr("guar_3_title"),
                  desc: vStr("guar_3_desc"),
                },
                {
                  icon: <Compass size={22} color="#F59E0B" />,
                  title: vStr("guar_4_title"),
                  desc: vStr("guar_4_desc"),
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
                {vStr("cta_title")}
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
                {vStr("cta_desc")}
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
                  <span>{vStr("cta_games")}</span>
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
                  <span>{vStr("cta_apps")}</span>
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
