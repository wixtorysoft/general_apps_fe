import { I18nRecord } from "../types";

export type ContactKey =
  | "badge"
  | "title"
  | "desc"
  | "brand_title"
  | "brand_tagline"
  | "channel_official_portal"
  | "channel_apps_hub"
  | "channel_email"
  | "channel_youtube"
  | "channel_location"
  | "country"
  | "map_heading"
  | "map_address"
  | "hours_label"
  | "hours_value"
  | "region_label"
  | "region_value"
  | "satellite_btn"
  | "map_btn"
  | "open_maps"
  | "directions";

export const contactI18n: I18nRecord<ContactKey> = {
  badge: {
    tr: "İletişim", en: "Contact", it: "Contatto", pt: "Contato", es: "Contacto",
    fr: "Contact", de: "Kontakt", ru: "Контакты", ja: "お問い合わせ", zh: "联系我们", ar: "اتصل بنا"
  },
  title: {
    tr: "İletişim & Destek", en: "Contact & Support", it: "Contatto & Supporto", pt: "Contato & Suporte",
    es: "Contacto y Soporte", fr: "Contact & Support", de: "Kontakt & Support", ru: "Контакты и Поддержка",
    ja: "お問い合わせ・サポート", zh: "联系与技术支持", ar: "الاتصال والدعم الفني"
  },
  desc: {
    tr: "Sorularınız, önerileriniz veya işbirliği talepleriniz mi var? Wixtory ekibine doğrudan ulaşın.",
    en: "Have questions, suggestions, or partnership inquiries? Reach out directly to the Wixtory team.",
    it: "Hai domande, suggerimenti o proposte di partnership? Contatta direttamente il team Wixtory.",
    pt: "Tem dúvidas, sugestões ou propostas de parceria? Fale diretamente com a equipe Wixtory.",
    es: "¿Tienes preguntas, sugerencias o propuestas de colaboración? Contacta directamente al equipo de Wixtory.",
    fr: "Vous avez des questions, des suggestions ou des partenariats ? Contactez directement l'équipe Wixtory.",
    de: "Haben Sie Fragen, Vorschläge oder Kooperationsanfragen? Wenden Sie sich direkt an das Wixtory-Team.",
    ru: "Есть вопросы, предложения или идеи о сотрудничестве? Свяжитесь напрямую с командой Wixtory.",
    ja: "ご質問、ご提案、提携に関するお問い合わせは、Wixtoryチームまで直接ご連絡ください。",
    zh: "有任何疑问、建议或商务合作需求？欢迎直接与 Wixtory 官方团队联系。",
    ar: "هل لديك أسئلة أو اقتراحات أو طلبات تعاون؟ تواصل مباشرة مع فريق Wixtory."
  },
  brand_title: {
    tr: "Wixtory", en: "Wixtory", it: "Wixtory", pt: "Wixtory", es: "Wixtory",
    fr: "Wixtory", de: "Wixtory", ru: "Wixtory", ja: "Wixtory", zh: "Wixtory", ar: "Wixtory"
  },
  brand_tagline: {
    tr: "Games & Software Studio", en: "Games & Software Studio", it: "Games & Software Studio",
    pt: "Games & Software Studio", es: "Games & Software Studio", fr: "Games & Software Studio",
    de: "Games & Software Studio", ru: "Games & Software Studio", ja: "Games & Software Studio",
    zh: "游戏与软件研发工作室", ar: "استوديو الألعاب والبرمجيات"
  },
  channel_official_portal: {
    tr: "Resmi Portal", en: "Official Portal", it: "Portale Ufficiale", pt: "Portal Oficial",
    es: "Portal Oficial", fr: "Portail Officiel", de: "Offizielles Portal", ru: "Официальный Портал",
    ja: "公式ポータル", zh: "官方主站门户", ar: "البوابة الرسمية"
  },
  channel_apps_hub: {
    tr: "Uygulama & Oyun Merkezi", en: "Apps & Games Hub", it: "Hub App & Giochi", pt: "Centro de Apps & Jogos",
    es: "Centro de Apps y Juegos", fr: "Hub Apps & Jeux", de: "Apps & Games Hub", ru: "Центр Приложений и Игр",
    ja: "アプリ＆ゲームハブ", zh: "应用与游戏生态中心", ar: "مركز التطبيقات والألعاب"
  },
  channel_email: {
    tr: "Doğrudan E-Posta", en: "Direct Email", it: "Email Diretta", pt: "Email Direto",
    es: "Correo Directo", fr: "Email Direct", de: "Direkte E-Mail", ru: "Прямой E-mail",
    ja: "ダイレクトメール", zh: "官方直达邮箱", ar: "البريد الإلكتروني المباشر"
  },
  channel_youtube: {
    tr: "YouTube Kanalı", en: "YouTube Channel", it: "Canale YouTube", pt: "Canal do YouTube",
    es: "Canal de YouTube", fr: "Chaîne YouTube", de: "YouTube-Kanal", ru: "YouTube-Канал",
    ja: "公式YouTubeチャンネル", zh: "YouTube 官方频道", ar: "قناة يوتيوب الرسمية"
  },
  channel_location: {
    tr: "Lokasyon", en: "Location", it: "Posizione", pt: "Localização",
    es: "Ubicación", fr: "Localisation", de: "Standort", ru: "Локация",
    ja: "所在地", zh: "地理位置", ar: "الموقع الجغرافي"
  },
  country: {
    tr: "Türkiye", en: "Turkey", it: "Turchia", pt: "Turquia",
    es: "Turquía", fr: "Turquie", de: "Türkei", ru: "Турция",
    ja: "トルコ", zh: "土耳其", ar: "تركيا"
  },
  map_heading: {
    tr: "Stüdyo Konumu & Harita", en: "Studio Location & Map", it: "Posizione dello Studio & Mappa",
    pt: "Localização do Estúdio & Mapa", es: "Ubicación del Estudio y Mapa", fr: "Emplacement du Studio & Carte",
    de: "Studio-Standort & Karte", ru: "Локация Студии и Карта", ja: "スタジオ所在地・マップ",
    zh: "工作室地理坐标与全景地图", ar: "موقع الاستوديو والخريطة"
  },
  map_address: {
    tr: "Podium AVM, Bağdat Cad. No:60/B, Urankent, Yenimahalle, Ankara, Türkiye",
    en: "Podium AVM, Bagdat St. No:60/B, Urankent, Yenimahalle, Ankara, Turkey",
    it: "Podium AVM, Via Bagdat N:60/B, Urankent, Yenimahalle, Ankara, Turchia",
    pt: "Podium AVM, Rua Bagdat Nº:60/B, Urankent, Yenimahalle, Ankara, Turquia",
    es: "Podium AVM, Calle Bagdat No:60/B, Urankent, Yenimahalle, Ankara, Turquía",
    fr: "Podium AVM, Rue Bagdat N°:60/B, Urankent, Yenimahalle, Ankara, Turquie",
    de: "Podium AVM, Bagdat-Str. Nr:60/B, Urankent, Yenimahalle, Ankara, Türkei",
    ru: "ТЦ Podium, ул. Багдат №60/B, Уранкент, Енимахалле, Анкара, Турция",
    ja: "Podium AVM, Bagdat Cad. No:60/B, Urankent, Yenimahalle, Ankara, Turkey",
    zh: "土耳其 安卡拉 Yenimahalle区 Urankent街区 Podium购物中心 60/B号",
    ar: "بوديوم مول، شارع بغداد رقم 60/B، أورانكنت، يني محلة، أنقرة، تركيا"
  },
  hours_label: {
    tr: "Çalışma Saatleri", en: "Working Hours", it: "Orari di Lavoro", pt: "Horário de Funcionamento",
    es: "Horario de Trabajo", fr: "Horaires de Travail", de: "Arbeitszeiten", ru: "Рабочие Часы",
    ja: "営業時間", zh: "工作时间", ar: "ساعات العمل"
  },
  hours_value: {
    tr: "Pazartesi — Cuma · 09:00 — 18:00 (GMT+3)",
    en: "Monday — Friday · 09:00 — 18:00 (GMT+3)",
    it: "Lunedì — Venerdì · 09:00 — 18:00 (GMT+3)",
    pt: "Segunda — Sexta · 09:00 — 18:00 (GMT+3)",
    es: "Lunes — Viernes · 09:00 — 18:00 (GMT+3)",
    fr: "Lundi — Vendredi · 09:00 — 18:00 (GMT+3)",
    de: "Montag — Freitag · 09:00 — 18:00 (GMT+3)",
    ru: "Понедельник — Пятница · 09:00 — 18:00 (GMT+3)",
    ja: "月曜日〜金曜日 · 09:00〜18:00 (GMT+3)",
    zh: "周一至周五 · 09:00 — 18:00 (GMT+3)",
    ar: "الإثنين — الجمعة · 09:00 — 18:00 (GMT+3)"
  },
  region_label: {
    tr: "Bölge & Adres", en: "Region & Address", it: "Regione & Indirizzo", pt: "Região & Endereço",
    es: "Región y Dirección", fr: "Région & Adresse", de: "Region & Adresse", ru: "Регион и Адрес",
    ja: "地域・住所", zh: "行政区划与地址", ar: "المنطقة والعنوان"
  },
  region_value: {
    tr: "Podium AVM, Yenimahalle, Ankara, Türkiye",
    en: "Podium AVM, Yenimahalle, Ankara, Turkey",
    it: "Podium AVM, Yenimahalle, Ankara, Turchia",
    pt: "Podium AVM, Yenimahalle, Ankara, Turquia",
    es: "Podium AVM, Yenimahalle, Ankara, Turquía",
    fr: "Podium AVM, Yenimahalle, Ankara, Turquie",
    de: "Podium AVM, Yenimahalle, Ankara, Türkei",
    ru: "ТЦ Podium, Енимахалле, Анкара, Турция",
    ja: "Podium AVM, Yenimahalle, Ankara, Turkey",
    zh: "土耳其安卡拉 Yenimahalle区 Podium商厦",
    ar: "بوديوم مول، يني محلة، أنقرة، تركيا"
  },
  satellite_btn: {
    tr: "Uydu", en: "Satellite", it: "Satellite", pt: "Satélite", es: "Satélite",
    fr: "Satellite", de: "Satellit", ru: "Спутник", ja: "衛星", zh: "卫星图", ar: "قمر صناعي"
  },
  map_btn: {
    tr: "Harita", en: "Map", it: "Mappa", pt: "Mapa", es: "Mapa",
    fr: "Carte", de: "Karte", ru: "Карта", ja: "地図", zh: "常规地图", ar: "خريطة"
  },
  open_maps: {
    tr: "Google Haritalar'da Aç", en: "Open in Google Maps", it: "Apri in Google Maps", pt: "Abrir no Google Maps",
    es: "Abrir en Google Maps", fr: "Ouvrir dans Google Maps", de: "In Google Maps öffnen", ru: "Открыть на Google Картах",
    ja: "Google マップで開く", zh: "在 Google 地图中查看", ar: "فتح في خرائط Google"
  },
  directions: {
    tr: "Yol Tarifi Al", en: "Get Directions", it: "Ottieni Indicazioni", pt: "Obter Direções",
    es: "Cómo Llegar", fr: "Obtenir l'Itinéraire", de: "Route berechnen", ru: "Маршрут",
    ja: "ルート案内", zh: "规划导航路线", ar: "الحصول على الاتجاهات"
  }
};

