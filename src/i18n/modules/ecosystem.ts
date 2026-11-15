import { I18nRecord } from "../types";

export type EcosystemKey =
  | "ecosystem_lead"
  | "hero_headline_1"
  | "hero_headline_2"
  | "hero_concise_sub"
  | "explore_ecosystem_btn"
  | "contact_us_btn"
  | "orbit_center_label"
  | "orbit_hint";

export const ecosystemI18n: I18nRecord<EcosystemKey> = {
  ecosystem_lead: {
    tr: "Oyun temelli çok dilli öğrenme platformu {langBox}, gerçek zamanlı alan adı takip asistanı {domainTrack}, astrolojiyi editoryal stile dönüştüren {astroVibe} ({soon}) ve zeki yapay zeka asistanı {excuse} ({soon}). İncelemek istediğiniz uygulamayı seçin.",
    en: "Gamified multilingual learning with {langBox}, real-time domain tracker with {domainTrack}, editorial astrological lifestyle in {astroVibe} ({soon}), and smart assistant {excuse} ({soon}). Choose an app below to explore.",
    it: "Apprendimento multilingue gamificato con {langBox}, monitoraggio domini in tempo reale con {domainTrack}, astrologia e stile in {astroVibe} ({soon}) e assistente intelligente {excuse} ({soon}). Scegli un'app qui sotto per iniziare.",
    pt: "Aprendizado multilíngue gamificado com {langBox}, rastreador de domínios em tempo real com {domainTrack}, estilo astrológico editorial no {astroVibe} ({soon}) e assistente inteligente {excuse} ({soon}). Escolha um aplicativo abaixo para explorar.",
    es: "Aprendizaje multilingüe gamificado con {langBox}, rastreador de dominios en tiempo real con {domainTrack}, estilo astrológico editorial en {astroVibe} ({soon}) y asistente inteligente {excuse} ({soon}). Elige una aplicación para comenzar.",
    fr: "Apprentissage multilingue ludifié avec {langBox}, suivi de domaines en temps réel avec {domainTrack}, style astrologique éditorial dans {astroVibe} ({soon}) et assistant intelligent {excuse} ({soon}). Choisissez une application pour explorer.",
    de: "Spielerisches mehrsprachiges Lernen mit {langBox}, Echtzeit-Domain-Tracker mit {domainTrack}, astrologischer Lifestyle in {astroVibe} ({soon}) und smarter Assistent {excuse} ({soon}). Wählen Sie eine App aus.",
    ru: "Геймифицированное изучение языков с {langBox}, мониторинг доменов с {domainTrack}, астрологический стиль в {astroVibe} ({soon}) и умный помощник {excuse} ({soon}). Выберите приложение для знакомства.",
    ja: "ゲーム感覚の多言語学習 {langBox}、リアルタイムドメイン追跡 {domainTrack}、占星術とスタイルの {astroVibe} ({soon})、スマートAIアシスタント {excuse} ({soon})。気になるアプリをお選びください。",
    zh: "游戏化多语言学习应用 {langBox}、实时域名状态追踪工具 {domainTrack}、融合占星与生活美学的 {astroVibe} ({soon})，以及智能助手 {excuse} ({soon})。点击下方卡片开启探索。",
    ar: "التعلم التفاعلي للغات مع {langBox}، ومتابعة النطاقات الفورية مع {domainTrack}، ونمط الحياة الفلكي مع {astroVibe} ({soon})، والمساعد الذكي {excuse} ({soon}). اختر تطبيقاً للاستكشاف."
  },
  hero_headline_1: {
    tr: "Geleceğin Bağımsız",
    en: "Next-Generation Independent",
    de: "Unabhängige Digitale",
    it: "Esperienze Digitali",
    es: "Experiencias Digitales",
    fr: "Expériences Numériques",
    ru: "Независимые Цифровые",
    zh: "下一代独立研发",
    ja: "次世代の独立型",
    ar: "تجارب رقمية مستقلة",
    pt: "Experiências Digitais"
  },
  hero_headline_2: {
    tr: "Uygulama Ekosistemi",
    en: "Application Ecosystem",
    de: "App-Ökosystem",
    it: "Ecosistema di App",
    es: "Ecosistema de Aplicaciones",
    fr: "Écosystème d'Applications",
    ru: "Экосистема Приложений",
    zh: "数字应用与软件生态",
    ja: "アプリ＆ソフトウェア生態系",
    ar: "منظومة التطبيقات والبرمجيات",
    pt: "Ecossistema de Aplicativos"
  },
  hero_concise_sub: {
    tr: "Eğitimden astrolojiye, alan adı takibinden yerel medya oynatıcıya; sıfır şişkinlik ve %100 yerel gizlilikle geliştirilen modern dijital ürünler.",
    en: "From gamified language learning to domain intelligence and local reel media; privacy-first digital products engineered with zero bloat.",
    de: "Von spielerischem Sprachenlernen bis zu Domain-Tracking und lokalem Medienplayer – moderne Apps mit 100% lokalem Datenschutz.",
    it: "Dall'apprendimento linguistico al monitoraggio domini e player multimediale locale: app moderne con privacy al 100% e zero bloat.",
    es: "Desde aprendizaje de idiomas hasta monitoreo de dominios y reproductor multimedia local: productos digitales con 100% de privacidad.",
    fr: "De l'apprentissage des langues à la surveillance de domaines et lecteur média local : des apps modernes axées sur la confidentialité.",
    ru: "От изучения языков до мониторинга доменов и локального медиаплеера: современные приложения с упором на 100% приватность.",
    zh: "涵盖互动语言启蒙、域名全维监控、灵性星座占星与本地短视频影音；践行零冗余代码与 100% 设备端离线隐私。",
    ja: "語学学習からドメイン監視、占星術ライフスタイル、ローカルメディア再生まで。端末内完結のプライバシーと俊敏な動作を実現。",
    ar: "من تعلم اللغات التفاعلي إلى تتبع النطاقات ومشغل الوسائط المحلي؛ تطبيقات رقمية حديثة بخصوصية محلية 100% وسرعة فائقة.",
    pt: "Do aprendizado de idiomas ao monitoramento de domínios e reprodutor de mídia local: produtos digitais com 100% de privacidade local."
  },
  explore_ecosystem_btn: {
    tr: "Ekosistemi Keşfet",
    en: "Explore Ecosystem",
    de: "Ökosystem Erkunden",
    it: "Esplora l'Ecosistema",
    es: "Explorar Ecosistema",
    fr: "Explorer l'Écosystème",
    ru: "Изучить Экосистему",
    zh: "探索全景生态",
    ja: "エコシステムを探索",
    ar: "استكشف المنظومة",
    pt: "Explorar Ecossistema"
  },
  contact_us_btn: {
    tr: "İletişim & Destek",
    en: "Contact & Support",
    de: "Kontakt & Support",
    it: "Contatto & Supporto",
    es: "Contacto y Soporte",
    fr: "Contact & Support",
    ru: "Связь и Поддержка",
    zh: "联系与技术支持",
    ja: "お問い合わせ・サポート",
    ar: "الاتصال والدعم الفني",
    pt: "Contato & Suporte"
  },
  orbit_center_label: {
    tr: "WİXTORY MERKEZİ",
    en: "WIXTORY HUB",
    de: "WIXTORY ZENTRUM",
    it: "HUB WIXTORY",
    es: "CENTRO WIXTORY",
    fr: "CENTRE WIXTORY",
    ru: "ЦЕНТР WIXTORY",
    zh: "WIXTORY 核心生态",
    ja: "WIXTORY ハブ",
    ar: "مركز WIXTORY",
    pt: "CENTRO WIXTORY"
  },
  orbit_hint: {
    tr: "İncelemek için uygulamaya tıklayın",
    en: "Click an app to explore",
    de: "Klicken Sie zum Erkunden",
    it: "Clicca su un'app per esplorare",
    es: "Haz clic en una app para explorar",
    fr: "Cliquez pour explorer",
    ru: "Нажмите на приложение для перехода",
    zh: "点击任意应用卡片进入详情",
    ja: "アプリをクリックして詳細へ",
    ar: "انقر على أي تطبيق للاستكشاف",
    pt: "Clique em um app para explorar"
  }
};
