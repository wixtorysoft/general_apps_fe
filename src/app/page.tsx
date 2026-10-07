"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Bot,
  Shield,
  ArrowRight,
  CheckCircle2,
  Layers,
  Zap,
  Compass,
  Lock,
  Cpu,
  Code,
  Menu,
  X,
  ChevronRight,
  Globe,
  ExternalLink,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { resolveI18n, ecosystemI18n, LanguageCode } from "@/i18n";
import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";
import { StoreBadgesRow } from "@/components/games/StoreBadges";

export default function HubPortalPage() {
  const { t, language } = useLanguage();

  const hubI18n: Record<string, Record<string, string>> = {
    hero_pre: {
      tr: "Geleceğin Mobil Deneyimlerini ", en: "Experience the Future of ", it: "Scopri il Futuro delle ", pt: "Experimente o Futuro dos ",
      es: "Experimenta el Futuro de las ", fr: "Découvrez le Futur des ", de: "Erleben Sie die Zukunft ", ru: "Откройте Будущее ",
      ja: "未来のモバイル体験を ", zh: "探索未来的移动体验：", ar: "اكتشف مستقبل التجارب المحمولة: "
    },
    hero_title: {
      tr: "Keşfedin", en: "Mobile Apps", it: "App Mobili", pt: "Aplicativos Móveis",
      es: "Aplicaciones Móviles", fr: "Applications Mobiles", de: "Mobiler Apps", ru: "Мобильных Приложений",
      ja: "発見する", zh: "移动应用矩阵", ar: "تطبيقات الهاتف"
    },
    explore_apps_btn: {
      tr: "Uygulamaları Keşfet", en: "Explore Applications", it: "Esplora Applicazioni", pt: "Explorar Aplicativos",
      es: "Explorar Aplicaciones", fr: "Explorer les Applications", de: "Apps Erkunden", ru: "Изучить Приложения",
      ja: "アプリを見る", zh: "浏览全部应用", ar: "استكشاف التطبيقات"
    },
    ecosystem_vision_btn: {
      tr: "Ekosistem Vizyonu", en: "Ecosystem Vision", it: "Visione dell'Ecosistema", pt: "Visão do Ecossistema",
      es: "Visión del Ecosistema", fr: "Vision de l'Écosystème", de: "Ökosystem-Vision", ru: "Видение Экосистемы",
      ja: "エコシステムビジョン", zh: "生态全景愿景", ar: "رؤية المنظومة"
    },
    flagship_badge: {
      tr: "AMİRAL GEMİSİ UYGULAMALAR", en: "FLAGSHIP MOBILE PRODUCTS", it: "PRODOTTI MOBILI DI PUNTA", pt: "PRODUTOS MÓVEIS PRINCIPAIS",
      es: "PRODUCTOS MÓVILES PRINCIPALES", fr: "PRODUITS MOBILES PHARES", de: "FLAGGSCHIFF-MOBILPRODUKTE", ru: "ФЛАГМАНСКИЕ МОБИЛЬНЫЕ ПРОДУКТЫ",
      ja: "フラッグシップモバイル製品", zh: "旗舰级移动产品矩阵", ar: "المنتجات المحمولة الرائدة"
    },
    flagship_title: {
      tr: "Özenle Tasarlanmış Dijital Dünyalar", en: "Crafted for Everyday Excellence", it: "Progettati per l'Eccellenza Quotidiana", pt: "Criados para a Excelência Diária",
      es: "Diseñados para la Excelencia Diaria", fr: "Conçus pour l'Excellence Quotidienne", de: "Entwickelt für Tägliche Exzellenz", ru: "Создано для Ежедневного Совершенства",
      ja: "毎日の卓越性のために作られた製品", zh: "为日常卓越体验精心雕琢", ar: "مصممة للتميز اليومي الفائق"
    },
    cat_lang: {
      tr: "EĞİTİM & ÇOK DİLLİ", en: "EDUCATION & GAMING", it: "ISTRUZIONE & GIOCHI", pt: "EDUCAÇÃO & JOGOS",
      es: "EDUCACIÓN & JUEGOS", fr: "ÉDUCATION & JEUX", de: "BILDUNG & SPIELE", ru: "ОБРАЗОВАНИЕ И ИГРЫ",
      ja: "教育＆ゲーミフィケーション", zh: "教育与多语言游戏", ar: "التعليم والألعاب"
    },
    cat_domain: {
      tr: "ALAN ADI & WHOIS", en: "DOMAIN & WHOIS TOOL", it: "DOMINI & WHOIS TOOL", pt: "DOMÍNIOS & WHOIS",
      es: "DOMINIOS & WHOIS", fr: "DOMAINES & WHOIS", de: "DOMAIN & WHOIS-TOOL", ru: "ДОМЕНЫ И WHOIS",
      ja: "ドメイン＆WHOISツール", zh: "域名与 WHOIS 查询", ar: "النطاقات وأداة WHOIS"
    },
    cat_astro: {
      tr: "ASTROLOJİ & YAŞAM", en: "ASTROLOGY & LIFESTYLE", it: "ASTROLOGIA & STILE DI VITA", pt: "ASTROLOGIA & ESTILO DE VIDA",
      es: "ASTROLOGÍA & ESTILO DE VIDA", fr: "ASTROLOGIE & MODE DE VIE", de: "ASTROLOGIE & LIFESTYLE", ru: "АСТРОЛОГИЯ И СТИЛЬ ЖИЗНИ",
      ja: "占星術＆ライフスタイル", zh: "星座占星与生活方式", ar: "علم الفلك وأسلوب الحياة"
    },
    cat_excuse: {
      tr: "YAPAY ZEKA ASİSTANI", en: "AI LIFESAVER ASSISTANT", it: "ASSISTENTE SALVAVITA AI", pt: "ASSISTENTE SALVA-VIDAS IA",
      es: "ASISTENTE SALVAVIDAS IA", fr: "ASSISTANT SAUVEGARDE IA", de: "KI-LEBENSRETTER-ASSISTENT", ru: "ИИ-СПАСАТЕЛЬНЫЙ АССИСТЕНТ",
      ja: "AIライフセーバーアシスタント", zh: "AI 智能救急助手", ar: "مساعد الذكاء الاصطناعي المنقذ"
    },
    go_lang_box: {
      tr: "Language Box Sayfasına Git", en: "Explore Language Box", it: "Esplora Language Box", pt: "Explorar Language Box",
      es: "Explorar Language Box", fr: "Explorer Language Box", de: "Language Box Erkunden", ru: "Перейти к Language Box",
      ja: "Language Boxの詳細を見る", zh: "前往 Language Box 页面", ar: "استعراض Language Box"
    },
    go_domain_track: {
      tr: "Domain Track Sayfasına Git", en: "Explore Domain Track", it: "Esplora Domain Track", pt: "Explorar Domain Track",
      es: "Explorar Domain Track", fr: "Explorer Domain Track", de: "Domain Track Erkunden", ru: "Перейти к Domain Track",
      ja: "Domain Trackの詳細を見る", zh: "前往 Domain Track 页面", ar: "استعراض Domain Track"
    },
    vision_section_badge: {
      tr: "Ekosistem Vizyonu & Felsefesi", en: "Ecosystem Vision & Philosophy", it: "Visione e Filosofia dell'Ecosistema", pt: "Visão e Filosofia do Ecossistema",
      es: "Visión y Filosofía del Ecosistema", fr: "Vision et Philosophie de l'Écosystème", de: "Ökosystem-Vision & Philosophie", ru: "Видение и Философия Экосистемы",
      ja: "エコシステムビジョン＆哲学", zh: "生态愿景与工程哲学", ar: "رؤية وفلسفة المنظومة"
    },
    pillar_zero_bloat: {
      tr: "Sıfır Şişkinlik & Saf Deneyim", en: "Zero Bloat & Pure Focus", it: "Zero Complessità Superflua & Focus Puro", pt: "Zero Inchaço & Foco Puro",
      es: "Cero Exceso & Enfoque Puro", fr: "Zéro Superflu & Clarté Absolue", de: "Kein Ballast & Reiner Fokus", ru: "Никакого Балласта и Фокус",
      ja: "無駄ゼロ＆純粋なフォーカス", zh: "极致纯粹，零冗余体积", ar: "نقاء تام وبدون أي حشو"
    },
    pillar_zero_bloat_desc: {
      tr: "Astroloji arayan kullanıcı mazeret motorunun karmaşasıyla, alan adı arayan kullanıcı zodyak detaylarıyla yorulmaz. Her uygulama hedef odaklıdır.",
      en: "Users seeking astrological aesthetics aren't burdened by excuse generators, and domain searchers get pure speed without distraction.",
      it: "Chi cerca l'estetica astrologica non è appesantito da scuse, e chi cerca domini ottiene pura velocità senza distrazioni.",
      pt: "Quem busca astrologia não se sobrecarrega com geradores de desculpas, e quem pesquisa domínios obtém velocidade pura sem distrações.",
      es: "Quien busca astrología no se complica con generadores de excusas, y quien busca dominios obtiene velocidad pura sin distracciones.",
      fr: "L'utilisateur en quête d'astrologie n'est pas encombré par des générateurs d'excuses, et la recherche de domaines reste directe et sans distraction.",
      de: "Wer Astrologie sucht, wird nicht von Ausredengeneratoren abgelenkt, und Domainsucher erhalten pure Geschwindigkeit ohne Ballast.",
      ru: "Пользователи астрологии не перегружены генератором отговорок, а поиск доменов работает на максимальной скорости без отвлекающих факторов.",
      ja: "占星術を探すユーザーが言い訳機能に邪魔されることも、ドメイン検索者が余計な要素に惑わされることもありません。",
      zh: "寻找星座美学的用户无需面对借口生成器的冗余，域名查询者也能获得毫无干扰的极致响应速度。",
      ar: "الباحث عن علم الفلك لن يثقل بمولد الأعذار، والباحث عن النطاقات يحصل على سرعة نقية بدون أي تشتيت."
    },
    pillar_unified_privacy: {
      tr: "Birleşik Katı Gizlilik", en: "Unified Privacy Standard", it: "Standard di Privacy Unificato", pt: "Padrão Unificado de Privacidade",
      es: "Estándar de Privacidad Unificado", fr: "Norme Unifiée de Confidentialité", de: "Vereinter Datenschutzstandard", ru: "Единый Стандарт Приватности",
      ja: "統一された厳格なプライバシー基準", zh: "统一高规格隐私标准", ar: "معايير خصوصية موحدة وصارمة"
    },
    pillar_unified_privacy_desc: {
      tr: "Domain Track, AstroVibe, Excuse ve eklenecek gelecekteki tüm uygulamalar tek bir 'Sıfır Telemetri & Çevrimdışı Öncelik' ortak gizlilik sözleşmesine tabidir.",
      en: "All current and upcoming Wixtory apps adhere to our single, rigorous Zero-Telemetry, offline-first data protection charter.",
      it: "Tutte le app Wixtory attuali e future aderiscono a un'unica e rigorosa carta sulla protezione dei dati con zero telemetria e priorità offline.",
      pt: "Todos os aplicativos Wixtory atuais e futuros seguem nosso rigoroso compromisso de zero telemetria e prioridade offline.",
      es: "Todas las aplicaciones de Wixtory actuales y futuras cumplen nuestro riguroso compromiso de cero telemetría y prioridad offline.",
      fr: "Toutes les applications Wixtory actuelles et à venir respectent notre charte rigoureuse de zéro télémétrie et de priorité hors ligne.",
      de: "Alle aktuellen und kommenden Wixtory-Apps unterliegen unserer einheitlichen Charta für Zero-Telemetry und Offline-First-Datenschutz.",
      ru: "Все текущие и будущие приложения Wixtory соответствуют единому регламенту нулевой телеметрии и приоритета локальной работы.",
      ja: "現在および将来のすべてのWixtoryアプリは、ゼロテレメトリ＆オフラインファーストの厳格なプライバシー憲章に準拠しています。",
      zh: "现有的及未来的所有 Wixtory 应用均恪守统一的零遥测、离线优先数据保护宪章。",
      ar: "تلتزم جميع تطبيقات Wixtory الحالية والمستقبلية بميثاق موحد وصارم لحماية البيانات بدون تتبع وأولوية للعمل دون اتصال."
    },
    pillar_modern_flutter: {
      tr: "Modern Flutter & MinIO CDN", en: "Modern Flutter & MinIO CDN", it: "Flutter Moderno & CDN MinIO", pt: "Flutter Moderno & CDN MinIO",
      es: "Flutter Moderno & CDN MinIO", fr: "Flutter Moderne & CDN MinIO", de: "Modernes Flutter & MinIO CDN", ru: "Современный Flutter и MinIO CDN",
      ja: "最新のFlutter＆MinIO CDN", zh: "现代 Flutter 与 MinIO CDN 架构", ar: "فلاتر الحديثة وبنية MinIO CDN"
    },
    pillar_modern_flutter_desc: {
      tr: "Özel nesne depolama kümeleri (MinIO S3), Edge CDN ve GPU hızlandırmalı Flutter mimarisiyle sıfır takılma ile akıcı deneyim.",
      en: "Private MinIO S3 object storage, Edge CDN, and hardware-accelerated Flutter runtime ensure lightning-fast UI responsiveness.",
      it: "Archiviazione a oggetti privata MinIO S3, Edge CDN e runtime Flutter con accelerazione hardware garantiscono fluidità immediata.",
      pt: "Armazenamento de objetos privado MinIO S3, Edge CDN e runtime Flutter com aceleração por hardware garantem fluidez máxima.",
      es: "Almacenamiento de objetos privado MinIO S3, Edge CDN y tiempo de ejecución Flutter con aceleración por hardware garantizan fluidez total.",
      fr: "Stockage objet privé MinIO S3, Edge CDN et runtime Flutter avec accélération matérielle garantissent une fluidité absolue.",
      de: "Privater MinIO S3-Objektspeicher, Edge-CDN und GPU-beschleunigte Flutter-Architektur garantieren kompromisslose Flüssigkeit.",
      ru: "Частное объектное хранилище MinIO S3, Edge CDN и аппаратно-ускоренный Flutter обеспечивают мгновенную отзывчивость интерфейса.",
      ja: "プライベートMinIO S3オブジェクトストレージ、Edge CDN、GPUアクセラレーション対応Flutterにより極めて滑らかな操作感を実現。",
      zh: "专属 MinIO S3 对象存储、Edge CDN 与 GPU 硬件加速 Flutter 运行时，确保行云流水般的流畅交互。",
      ar: "تخزين كائنات MinIO S3 خاص، وشبكة Edge CDN، وبنية فلاتر المسرعة بالعتاد تضمن استجابة فائقة السرعة."
    },
    philosophy_h2: {
      tr: "Neden Tek Bir 'Süper Uygulama' Yerine Mikro Hedefli Mobil Deneyimler?",
      en: "Why Specialized Mobile Apps Instead of Bloated Super-Apps?",
      it: "Perché app mobili specializzate invece di super-app sovraccariche?",
      pt: "Por que aplicativos móveis especializados em vez de superaplicativos sobrecarregados?",
      es: "¿Por qué aplicaciones móviles especializadas en lugar de superaplicaciones sobrecargadas?",
      fr: "Pourquoi des applications mobiles spécialisées plutôt que des super-applications encombrées ?",
      de: "Warum spezialisierte mobile Apps statt überladener Super-Apps?",
      ru: "Почему специализированные мобильные приложения вместо перегруженных суперприложений?",
      ja: "肥大化したスーパーアプリではなく、なぜ特化型モバイルアプリなのか？",
      zh: "为什么选择专注垂直场景的独立应用，而非臃肿的超级应用？",
      ar: "لماذا تطبيقات جوال متخصصة ومصقولة بدلاً من التطبيقات الشاملة المتضخمة؟"
    },
    philosophy_sub: {
      tr: "Wixtory ekosistemi; her biri kendi alanında mükemmelleştirilmiş, gereksiz yüklerden arındırılmış ve ortak gizlilik standartlarını paylaşan odaklanmış uygulamalar bütünüdür.",
      en: "The Wixtory ecosystem is built around dedicated, zero-bloat mobile apps that master specific lifestyle domains under unified privacy and performance standards.",
      it: "L'ecosistema Wixtory è incentrato su app dedicate e prive di complessità, che eccellono in ambiti specifici con standard unificati di privacy e prestazioni.",
      pt: "O ecossistema Wixtory é baseado em aplicativos dedicados e sem inchaço, que dominam áreas específicas sob padrões unificados de privacidade e desempenho.",
      es: "El ecosistema Wixtory se basa en aplicaciones dedicadas y ligeras que dominan dominios específicos bajo estándares unificados de privacidad y rendimiento.",
      fr: "L'écosystème Wixtory repose sur des applications dédiées et légères, excellant dans des domaines précis avec des normes unifiées de confidentialité.",
      de: "Das Wixtory-Ökosystem basiert auf dedizierten Apps ohne unnötigen Ballast, die spezifische Lebensbereiche unter einheitlichen Standards meistern.",
      ru: "Экосистема Wixtory построена на специализированных приложениях без лишнего веса, обеспечивающих высокое качество и единые стандарты приватности.",
      ja: "Wixtoryエコシステムは、統一されたプライバシーとパフォーマンス基準のもと、各領域を極めた無駄のない特化型アプリ群です。",
      zh: "Wixtory 生态系统由精简专注的独立移动应用组成，在统一的企业级隐私与性能标准下深耕各自专属领域。",
      ar: "منظومة Wixtory مبنية على تطبيقات متخصصة خالية من الحشو، تتقن مجالات محددة وفق معايير خصوصية وأداء موحدة."
    },
    lang_box_desc: {
      tr: "Sentence Builder, Word Matrix, Word Compass gibi 6 eğlenceli oyunla yeni dilleri keşfedin. Üyeliksiz, %100 yerel cihaz önbelleğinde çalışan güvenli öğrenme deneyimi.",
      en: "Master new languages through 6 engaging interactive games. Sentence Builder, Word Matrix, Word Compass with 100% on-device local cache and zero signup.",
      it: "Impara nuove lingue con 6 coinvolgenti giochi interattivi. Sentence Builder, Word Matrix, Word Compass con cache locale al 100% e nessuna registrazione.",
      pt: "Domine novos idiomas através de 6 jogos interativos envolventes. Sentence Builder, Word Matrix, Word Compass com 100% de cache local no dispositivo e sem cadastro.",
      es: "Domina nuevos idiomas a través de 6 atractivos juegos interactivos. Sentence Builder, Word Matrix, Word Compass con caché 100% local en el dispositivo y sin registro.",
      fr: "Maîtrisez de nouvelles langues grâce à 6 jeux interactifs captivants. Sentence Builder, Word Matrix, Word Compass avec cache local à 100% et sans inscription.",
      de: "Meistern Sie neue Sprachen mit 6 fesselnden interaktiven Spielen. Sentence Builder, Word Matrix, Word Compass mit 100% lokalem Cache und ohne Registrierung.",
      ru: "Осваивайте новые языки с помощью 6 увлекательных интерактивных игр. Sentence Builder, Word Matrix, Word Compass со 100% локальным кэшем и без регистрации.",
      ja: "Sentence Builder、Word Matrix、Word Compassなど6つの魅力的なゲームで新しい言語を習得。端末内キャッシュ100%で登録不要。",
      zh: "通过句子构建器、单词矩阵、单词罗盘等 6 款趣味游戏掌握新语言。100% 本地缓存，无需注册。",
      ar: "أتقن لغات جديدة عبر 6 ألعاب تفاعلية شيقة. بناء الجمل، مصفوفة الكلمات، بوصلة الكلمات مع تخزين مؤقت على الجهاز وبدون تسجيل."
    },
    domain_track_desc: {
      tr: "Yüzlerce uzantıda anlık alan adı sorgulayın. Favorilerinizi ve geçmişinizi sıfır veri toplama güvencesiyle doğrudan cihazınızın önbelleğinde saklayın.",
      en: "Search real-time domain availability across hundreds of extensions. Keep your favorites and history safely in on-device cache with zero telemetry.",
      it: "Verifica la disponibilità dei domini in tempo reale su centinaia di estensioni. Mantieni preferiti e cronologia al sicuro nella cache locale senza telemetria.",
      pt: "Verifique a disponibilidade de domínios em tempo real em centenas de extensões. Mantenha seus favoritos e histórico salvos no dispositivo com zero telemetria.",
      es: "Comprueba la disponibilidad de dominios en tiempo real en cientos de extensiones. Guarda tus favoritos e historial localmente sin recopilación de datos.",
      fr: "Vérifiez la disponibilité de domaines en temps réel sur des centaines d'extensions. Conservez vos favoris et votre historique dans le cache local sans télémétrie.",
      de: "Echtzeit-Domainprüfung über Hunderte von Erweiterungen. Speichern Sie Favoriten und Verlauf sicher im lokalen Speicher ohne Telemetrie.",
      ru: "Мгновенная проверка доменов в сотнях зон в реальном времени. Храните избранное и историю в локальном кэше устройства без сбора данных.",
      ja: "数百の拡張子でドメインの空き状況をリアルタイム検索。お気に入りと履歴は端末内キャッシュに安全保存。",
      zh: "实时查询数百个顶级域名的可用性。收藏夹与搜索记录安全保存在设备本地，零遥测无隐私追踪。",
      ar: "استعلم فورياً عن توفر النطاقات عبر مئات الامتدادات مع الحفاظ على مفضلتك وسجلك في ذاكرة الجهاز المؤقتة بدون تتبع."
    },
    astrovibe_desc: {
      tr: "Zodyak yorumlarını dikey video akışında editoryal estetiğe dönüştürün. 3D interaktif tarot açılımları ve burcunuza özel yapay zeka tırnak sanatı keşfedin.",
      en: "Transform cosmic astrology into an editorial TikTok-style video feed. Experience interactive 3D tarot cards and AI-powered zodiac nail art catalogues.",
      it: "Trasforma l'astrologia in un feed video editoriale in stile social. Scopri letture interattive di tarocchi 3D e nail art zodiacale con IA.",
      pt: "Transforme a astrologia em um feed editorial de vídeos verticais. Explore cartas de tarô interativas em 3D e catálogos de unhas do zodíaco com IA.",
      es: "Transforma la astrología en un feed editorial de vídeos verticales. Descubre tiradas interactivas de tarot en 3D y arte de uñas zodiacal con IA.",
      fr: "Transformez l'astrologie en un flux vidéo éditorial vertical. Découvrez des tirages de tarot 3D interactifs et du nail art zodiacal par IA.",
      de: "Verwandeln Sie Horoskope in einen vertikalen Video-Feed im Editorial-Stil. Entdecken Sie interaktive 3D-Tarotkarten und KI-Nailart passend zum Sternzeichen.",
      ru: "Превратите астрологию в эстетичный вертикальный видеопоток. Интерактивные 3D-карты Таро и подбор дизайна ногтей по знаку зодиака с ИИ.",
      ja: "星占いをエディトリアルな縦型動画フィードで体験。3Dインタラクティブタロット占いとAIによる星座別ネイルアートカタログ。",
      zh: "将星座运势转变为沉浸式短视频流。体验 3D 交互式塔罗牌抽牌与 AI 专属星座美甲设计展馆。",
      ar: "حول استكشاف الأبراج إلى خلاصة فيديو عمودية غامرة. تجربة قراءة تاروت ثلاثية الأبعاد وكتالوجات أظافر مستوحاة من الأبراج."
    },
    excuse_desc: {
      tr: "Beklenmedik durumlardan zahmetsizce sıyrılın. Zeki mazeret üretimi, profesyonel durum açıklamaları ve acil durum sahte arama kurtarıcısı parmaklarınızın ucunda.",
      en: "Effortlessly handle awkward social encounters. Smart excuse generation, professional wording, and emergency simulated incoming phone calls.",
      it: "Gestisci situazioni sociali imbarazzanti senza sforzo. Generazione intelligente di scuse, messaggi professionali e simulatore di chiamate di emergenza.",
      pt: "Lide facilmente com situações sociais desconfortáveis. Geração inteligente de desculpas, mensagens profissionais e chamadas simuladas de emergência.",
      es: "Gestiona situaciones incómodas sin esfuerzo. Generación inteligente de excusas, redacciones profesionales y llamadas simuladas de emergencia.",
      fr: "Sortez sans effort des situations délicates. Génération intelligente d'excuses, formulations professionnelles et simulateur d'appels d'urgence.",
      de: "Meistern Sie unangenehme Situationen mühelos. Intelligente Ausredengenerierung, professionelle Formulierungen und Notfall-Anrufsimulator.",
      ru: "Легко выходите из неловких ситуаций. Умная генерация отговорок, деловые формулировки и симулятор экстренных входящих звонков.",
      ja: "気まずい場面からスマートに回避。AIによる状況別言い訳生成、プロフェッショナルな釈明文、緊急着信シミュレーター。",
      zh: "自如应对各种社交尴尬场合。智能借口生成、专业场景解释与紧急模拟来电助手触手可及。",
      ar: "تجاوز المواقف الاجتماعية المحرجة بسلاسة. توليد أعذار ذكية وصياغات احترافية ومحاكاة مكالمات هاتفية طارئة."
    },
    metric_lang_num: {
      tr: "11 Dil", en: "11 Languages", it: "11 Lingue", pt: "11 Idiomas",
      es: "11 Idiomas", fr: "11 Langues", de: "11 Sprachen", ru: "11 Языков",
      ja: "11言語", zh: "11种语言", ar: "11 لغة"
    },
    metric_lang_title: {
      tr: "Global Yerelleştirme", en: "Global Localization", it: "Localizzazione Globale", pt: "Localização Global",
      es: "Localización Global", fr: "Localisation Mondiale", de: "Globale Lokalisierung", ru: "Глобальная Локализация",
      ja: "グローバルローカライズ", zh: "全球深度本地化", ar: "توطين عالمي متكامل"
    },
    metric_lang_desc: {
      tr: "TR, EN, DE, FR, ES, IT, PT, RU, JA, ZH, AR", en: "Full support for TR, EN, DE, FR, ES, IT, PT, RU, JA, ZH, AR",
      it: "Supporto completo per TR, EN, DE, FR, ES, IT, PT, RU, JA, ZH, AR", pt: "Suporte completo para TR, EN, DE, FR, ES, IT, PT, RU, JA, ZH, AR",
      es: "Soporte completo para TR, EN, DE, FR, ES, IT, PT, RU, JA, ZH, AR", fr: "Support complet de TR, EN, DE, FR, ES, IT, PT, RU, JA, ZH, AR",
      de: "Vollständige Unterstützung für TR, EN, DE, FR, ES, IT, PT, RU, JA, ZH, AR", ru: "Полная поддержка TR, EN, DE, FR, ES, IT, PT, RU, JA, ZH, AR",
      ja: "TR, EN, DE, FR, ES, IT, PT, RU, JA, ZH, ARを完全サポート", zh: "全面支持中、英、土、德、法、西、意、葡、俄、日、阿", ar: "دعم كامل لـ TR, EN, DE, FR, ES, IT, PT, RU, JA, ZH, AR"
    },
    metric_privacy_title: {
      tr: "Gizlilik Odaklı (KVKK/GDPR)", en: "Privacy Focused (GDPR/KVKK)", it: "Incentrato sulla Privacy (GDPR/KVKK)", pt: "Focado em Privacidade (GDPR/KVKK)",
      es: "Enfoque en Privacidad (GDPR/KVKK)", fr: "Axé sur la Confidentialité (RGPD/KVKK)", de: "Datenschutzfokussiert (DSGVO/KVKK)", ru: "Приоритет Приватности (GDPR/KVKK)",
      ja: "プライバシー重視 (GDPR/KVKK)", zh: "隐私至上 (GDPR/KVKK)", ar: "الخصوصية أولاً (GDPR/KVKK)"
    },
    metric_privacy_desc: {
      tr: "Ortak yüksek standartlı gizlilik politikası", en: "Unified enterprise-grade privacy protection", it: "Protezione della privacy unificata di livello enterprise",
      pt: "Proteção de privacidade unificada de alto padrão", es: "Protección de privacidad unificada de alto nivel", fr: "Protection unifiée des données de haut niveau",
      de: "Einheitlicher Datenschutz auf Unternehmensniveau", ru: "Единая корпоративная защита данных", ja: "エンタープライズ水準の統一プライバシー保護",
      zh: "全生态统一的企业级高规格隐私保护", ar: "حماية خصوصية موحدة وشاملة"
    },
    metric_ui_title: {
      tr: "Yerel & Akıcı UI", en: "Native & Smooth UI", it: "UI Nativa & Fluida", pt: "UI Nativa & Fluida",
      es: "UI Nativa & Fluida", fr: "UI Native & Fluide", de: "Native & Flüssige UI", ru: "Нативный и Плавный UI",
      ja: "ネイティブ＆スムーズUI", zh: "极致流畅原生界面", ar: "واجهة أصلية فائقة السلاسة"
    },
    metric_ui_desc: {
      tr: "MinIO CDN & Mikroservis mimarisi", en: "MinIO CDN & high-speed microservices", it: "CDN MinIO & microservizi ad alta velocità",
      pt: "CDN MinIO & microsserviços de alta velocidade", es: "CDN MinIO y microservicios de alta velocidad", fr: "CDN MinIO et microservices haute vitesse",
      de: "MinIO CDN & Hochgeschwindigkeits-Mikroservices", ru: "MinIO CDN и высокоскоростные микросервисы", ja: "MinIO CDN＆超高速マイクロサービス",
      zh: "MinIO CDN 与高速微服务分布式架构", ar: "بنية MinIO CDN والخدمات المصغرة فائقة السرعة"
    },
    apps_hero_desc: {
      tr: "Şişirilmiş ve gizliliği ihlal eden monolitik süper uygulamalar yerine; her biri kendi alanında mükemmelleştirilmiş mikro-odaklı mobil araçlar. Cihaz içi yerel önbellekleme ve akıcı performans.",
      en: "Instead of bloated super-apps, we craft micro-focused digital utilities perfected for their specific domains. 100% on-device privacy and fluid performance.",
      it: "Al posto di super-app sovraccariche, creiamo strumenti digitali focalizzati e perfezionati nei rispettivi ambiti, con privacy locale al 100%.",
      pt: "Em vez de superaplicativos inchados, criamos ferramentas digitais microfocadas aperfeiçoadas para suas áreas, com privacidade local de 100%.",
      es: "En lugar de superaplicaciones pesadas, diseñamos herramientas móviles microenfocadas y optimizadas, con privacidad 100% en el dispositivo.",
      fr: "Plutôt que des super-applications surchargées, nous créons des utilitaires mobiles micro-ciblés et perfectionnés, avec 100% de confidentialité locale.",
      de: "Statt überladener Super-Apps entwickeln wir fokussierte mobile Werkzeuge mit 100% Datenschutz auf dem Gerät und flüssiger Leistung.",
      ru: "Вместо громоздких суперприложений мы создаем точечные мобильные инструменты с абсолютной конфиденциальностью и плавной работой.",
      ja: "肥大化したスーパーアプリではなく、各分野に特化し洗練されたマイクロアプリをお届けします。100%端末内プライバシーと圧倒的な流暢性を実現。",
      zh: "告别臃肿的超级应用，我们为您打造在专属领域极致打磨的微型专注工具，100%设备端隐私保障与流畅性能。",
      ar: "بدلاً من التطبيقات الضخمة المنتفخة، نبتكر أدوات رقمية مصغرة فائقة التميز في مجالاتها مع خصوصية محلية بنسبة 100% وأداء سلس."
    },
    lang_box_p2: {
      tr: "Üyelik veya hesap oluşturma zorunluluğu yok! İlerleme ve istatistikleriniz %100 yerel cihaz önbelleğinde güvenle tutulur. İstediğiniz an 'Önbelleği Temizle' ile tam denetim.",
      en: "Zero account registration or login required! 100% of your progress and scores stay in on-device local cache. Full control anytime with 'Clear Cache'.",
      it: "Nessuna registrazione richiesta! Il 100% dei tuoi progressi e punteggi rimane nella cache locale del dispositivo. Controllo totale in qualsiasi momento con 'Cancella Cache'.",
      pt: "Sem necessidade de criar conta! 100% do seu progresso e pontuações ficam no cache local do dispositivo. Controle total com 'Limpar Cache'.",
      es: "¡Sin registro ni inicio de sesión! El 100% de tu progreso y puntuaciones se guarda en la memoria local del dispositivo. Control total con 'Borrar Caché'.",
      fr: "Aucune création de compte requise ! 100% de votre progression et de vos scores restent dans le cache local de l'appareil. Contrôle total avec 'Vider le cache'.",
      de: "Keine Registrierung erforderlich! 100% Ihres Fortschritts und Ihrer Punktestände bleiben im lokalen Gerätespeicher. Volle Kontrolle mit 'Cache leeren'.",
      ru: "Регистрация не требуется! 100% вашего прогресса и баллов сохраняются в локальном кэше устройства. Полный контроль с функцией 'Очистить кэш'.",
      ja: "会員登録やログインは一切不要！進捗とスコアは100%端末のローカルキャッシュに保存され、「キャッシュをクリア」でいつでも自由に管理可能。",
      zh: "无需注册账号或登录！学习进度与积分 100% 仅保存在设备本地缓存中，随时可一键“清除缓存”拥有完全控制权。",
      ar: "لا حاجة لإنشاء حساب أو تسجيل الدخول! جميع درجاتك وتقدمك محفوظة بنسبة 100% في الذاكرة المحلية للجهاز، مع تحكم كامل بزر 'مسح الذاكرة المؤقتة'."
    },
    domain_track_p2: {
      tr: "Tek dokunuşla kişisel portföy yönetimi, 'Önbelleği Temizle' ile tam kullanıcı kontrolü ve 11 küresel dilde eksiksiz yerelleştirme.",
      en: "One-tap personal portfolio tracking, full user control with 'Clear Cache', and deep dark-mode ergonomics across 11 global languages.",
      it: "Gestione del portfolio personale con un tocco, controllo completo con 'Cancella Cache' e localizzazione completa in 11 lingue globali.",
      pt: "Gerenciamento de portfólio pessoal com um toque, controle total com 'Limpar Cache' e localização completa em 11 idiomas globais.",
      es: "Gestión de cartera personal con un solo toque, control total con 'Borrar Caché' y localización completa en 11 idiomas globales.",
      fr: "Gestion de portefeuille personnel en un geste, contrôle total avec 'Vider le cache' et localisation complète en 11 langues mondiales.",
      de: "Persönliches Portfolio-Tracking mit einem Fingertipp, volle Kontrolle mit 'Cache leeren' und vollständige Lokalisierung in 11 Sprachen.",
      ru: "Управление портфолио в одно касание, полный контроль с функцией 'Очистить кэш' и безупречная локализация на 11 языках.",
      ja: "ワンタップでの個人ポートフォリオ管理、「キャッシュをクリア」による完全な自己管理、そして11のグローバル言語に対応。",
      zh: "一键管理个人域名组合，支持“清除缓存”由您完全掌控，并在 11 种全球语言下拥有出色的暗色沉浸体验。",
      ar: "إدارة المحفظة الشخصية بنقرة واحدة، تحكم كامل بزر 'مسح الذاكرة المؤقتة' وترجمة متكاملة بـ 11 لغة عالمية."
    },
    astrovibe_p2: {
      tr: "3D fizik motoruyla interaktif tarot kart çekimleri ve burcunuza özel estetik protez tırnak & takı stil kataloğu parmaklarınızın ucunda.",
      en: "Interactive 3D physics-based tarot card pulls, mystical spreads, and personalized cosmic press-on nail beauty catalogs.",
      it: "Letture interattive di tarocchi con motore fisico 3D e cataloghi di unghie e gioielli personalizzati per il tuo segno.",
      pt: "Tiragens interativas de tarô com física 3D e catálogo estético de unhas e joias personalizadas para o seu signo.",
      es: "Tiradas interactivas de cartas de tarot con física 3D y catálogos estéticos de uñas y joyas personalizados para tu signo.",
      fr: "Tirages de tarot interactifs avec moteur physique 3D et catalogue personnalisé de faux ongles et bijoux selon votre signe.",
      de: "Interaktive 3D-Tarot-Ziehungen und personalisierte kosmische Nagel- und Schmuck-Stil-Kataloge für Ihr Sternzeichen.",
      ru: "Интерактивные расклады карт Таро на 3D физическом движке и персонализированные каталоги маникюра и украшений для вашего знака.",
      ja: "3D物理演算を用いたタロットカード占いと、あなたの星座に合わせたネイル＆ジュエリースタイルカタログ。",
      zh: "基于 3D 物理引擎的互动塔罗牌占卜，以及为您专属定制的星座穿戴甲与珠宝美学目录。",
      ar: "سحوبات تاروت تفاعلية مع محرك فيزياء ثلاثي الأبعاد وكتالوج جمالي مخصص لأظافر ومجوهرات برجك."
    },
    excuse_p2: {
      tr: "Zorlu ortamlardan veya toplantılardan ayrılmak için özelleştirilebilir zamanlayıcılı gerçekçi sahte gelen arama simülatörü ve tek dokunuşla mesaj paylaşımı.",
      en: "Emergency simulated incoming phone calls with customizable timer triggers, voice scripts, and instant messenger sharing.",
      it: "Simulatore di chiamate in arrivo d'emergenza con timer personalizzabile e condivisione istantanea tramite app di messaggistica.",
      pt: "Simulador de chamadas recebidas de emergência com temporizador personalizável e compartilhamento instantâneo via mensagens.",
      es: "Simulador de llamadas entrantes de emergencia con temporizador personalizable y compartición instantánea de mensajes.",
      fr: "Simulateur d'appels entrants d'urgence avec minuterie personnalisable et partage instantané de messages.",
      de: "Realistischer Notfall-Anruf-Simulator mit anpassbarem Timer und sofortigem Teilen per Messenger.",
      ru: "Реалистичный симулятор входящих звонков с настраиваемым таймером для выхода из любых встреч и быстрая отправка сообщений.",
      ja: "タイマー付きのリアルな緊急着信シミュレーターとワンタップでのメッセージ共有機能。",
      zh: "具备自定义定时器的逼真紧急模拟来电助手，以及一键消息快速分享功能。",
      ar: "محاكي مكالمات واردة وهمي لحالات الطوارئ مع مؤقت قابل للتخصيص ومشاركة سريعة للرسائل."
    },
    life_at: {
      tr: "Wixtory'de Yaşam", en: "Life at Wixtory Apps", it: "La Vita in Wixtory Apps", pt: "A Vida na Wixtory Apps",
      es: "La Vida en Wixtory Apps", fr: "La Vie chez Wixtory Apps", de: "Leben bei Wixtory Apps", ru: "Жизнь в Wixtory Apps",
      ja: "Wixtory Appsの日常", zh: "走进 Wixtory Apps", ar: "الحياة في تطبيقات Wixtory"
    },
    life_desc_1: {
      tr: "Yaptığı işte uzman olan, daima daha iyisini hedefleyen, başarı için güçlerini birleştiren ve iz bırakmayı hayal eden bir ekibiz.",
      en: "We team up with colleagues who are good at what they do, strive to become great, cooperate to succeed, dream to make an impact.",
      it: "Collaboriamo con colleghi esperti, guidati dall'eccellenza, uniti per avere successo e lasciare un'impronta duratura.",
      pt: "Trabalhamos com profissionais dedicados que buscam a excelência, cooperam para o sucesso e sonham em gerar impacto.",
      es: "Nos asociamos con personas talentosas que persiguen la excelencia, colaboran para triunfar y sueñan con dejar huella.",
      fr: "Nous collaborons avec des talents passionnés qui visent l'excellence, s'entraident pour réussir et souhaitent avoir un réel impact.",
      de: "Wir arbeiten mit Experten zusammen, die nach Exzellenz streben, gemeinsam Erfolge feiern und Spuren hinterlassen wollen.",
      ru: "Мы объединяем мастеров своего дела, которые стремятся к лучшему, сотрудничают ради успеха и создают значимые продукты.",
      ja: "専門性を持ち、より高い水準を目指し、成功のために協力し合ってインパクトを生み出すチームです。",
      zh: "我们与在各自领域追求卓越、紧密协作并渴望创造深远影响的伙伴并肩前行。",
      ar: "نحن فريق من المحترفين الذين يسعون للتميز ويتعاونون لتحقيق النجاح وترك أثر ملهم."
    },
    life_desc_2: {
      tr: "Ekip arkadaşlarımızın verimli çalışabilecekleri ve tüm potansiyellerini ortaya koyabilecekleri doğru çalışma ortamını ve ilham verici kültürü inşa etmek en büyük önceliğimizdir.",
      en: "It's our top priority to create the right environment for our teammates to work efficiently and bring out their full potential.",
      it: "La nostra priorità assoluta è creare l'ambiente ideale affinché il team possa esprimere appieno il proprio potenziale.",
      pt: "Nossa maior prioridade é construir o ambiente certo para que os membros da equipe atinjam seu potencial máximo.",
      es: "Nuestra máxima prioridad es crear el entorno adecuado para que nuestros compañeros alcancen su máximo potencial.",
      fr: "Notre priorité absolue est d'offrir le meilleur environnement pour permettre à chacun d'exprimer son plein potentiel.",
      de: "Unsere oberste Priorität ist es, das optimale Umfeld zu schaffen, in dem jedes Teammitglied sein volles Potenzial entfalten kann.",
      ru: "Наш главный приоритет — создать вдохновляющую рабочую атмосферу, позволяющую каждому раскрыть весь свой потенциал.",
      ja: "メンバーが効率的に働き、その能力を最大限に発揮できる理想的な環境と文化を築くことが最優先事項です。",
      zh: "打造能够激发灵感并帮助团队每位成员充分释放潜能的工作环境，是我们的最高准则。",
      ar: "أولويتنا القصوى هي بناء بيئة عمل ملهمة تتيح لجميع أعضاء الفريق إطلاق كامل طاقاتهم وإمكاناتهم."
    },
    see_more: {
      tr: "Daha Fazlası", en: "See More", it: "Scopri di Più", pt: "Ver Mais", es: "Ver Más",
      fr: "En Savoir Plus", de: "Mehr Erfahren", ru: "Узнать Больше", ja: "もっと見る", zh: "查看更多", ar: "عرض المزيد"
    }
  };

  const hStr = (key: string) => hubI18n[key]?.[language] || hubI18n[key]?.en || "";

  const appBullets: Record<string, Record<LanguageCode, string[]>> = {
    lang_box: {
      tr: [
        "6 Özgün Mini Oyun (Sentence Builder, Word Matrix, Word Compass)",
        "Cihaz içi önbellek & 'Önbelleği Temizle' ile tam kullanıcı kontrolü",
        "İlerleme takibi & beceri analitiği ile hedefe yönelik pratik",
        "10+ küresel dilde sesli telaffuz ve zümrüt yeşili modern arayüz",
      ],
      en: [
        "6 Unique Interactive Games (Sentence Builder, Word Matrix, Compass)",
        "On-device local cache & full user control with 'Clear Cache'",
        "Progress tracking & skill analytics for targeted practice",
        "Native pronunciation audio across 10+ global languages",
      ],
      it: [
        "6 giochi interattivi unici (Sentence Builder, Word Matrix, Compass)",
        "Cache locale sul dispositivo & pieno controllo con 'Cancella Cache'",
        "Monitoraggio dei progressi & statistiche delle abilità per uno studio mirato",
        "Pronuncia audio nativa in oltre 10 lingue globali",
      ],
      pt: [
        "6 mini-jogos exclusivos (Sentence Builder, Word Matrix, Compass)",
        "Cache local no dispositivo & controle total com 'Limpar Cache'",
        "Acompanhamento de progresso & estatísticas para aprendizado focado",
        "Áudio com pronúncia nativa em mais de 10 idiomas globais",
      ],
      es: [
        "6 minijuegos interactivos únicos (Sentence Builder, Word Matrix, Compass)",
        "Caché local en el dispositivo & control total con 'Limpiar Caché'",
        "Seguimiento de progreso & estadísticas de habilidades para práctica dirigida",
        "Audio de pronunciación nativa en más de 10 idiomas globales",
      ],
      fr: [
        "6 mini-jeux interactifs uniques (Sentence Builder, Word Matrix, Compass)",
        "Cache local sur l'appareil & contrôle total via 'Vider le cache'",
        "Suivi de progression & statistiques de compétences pour un entraînement ciblé",
        "Prononciation audio native dans plus de 10 langues mondiales",
      ],
      de: [
        "6 einzigartige Minispiele (Sentence Builder, Word Matrix, Compass)",
        "Lokaler Gerätespeicher & volle Benutzerkontrolle per 'Cache Leeren'",
        "Fortschrittsverfolgung & Kompetenzstatistiken für zielgerichtetes Lernen",
        "Muttersprachliche Audio-Aussprache in über 10 Weltsprachen",
      ],
      ru: [
        "6 уникальных мини-игр (Sentence Builder, Word Matrix, Compass)",
        "Локальный кэш на устройстве и полный контроль с кнопкой «Очистить кэш»",
        "Отслеживание прогресса и статистика навыков для эффективного обучения",
        "Озвучка произношения носителями на 10+ языках мира",
      ],
      ja: [
        "6つのユニークなミニゲーム（Sentence Builder、Word Matrix、Compass）",
        "端末内ローカルキャッシュ＆「キャッシュ消去」による完全なユーザー主導管理",
        "進捗トラッキング＆スキル分析による確かな学習成果",
        "10以上の言語に対応したネイティブ音声発音機能",
      ],
      zh: [
        "6 款趣味互动迷你游戏（句子构建器、单词矩阵、单词罗盘等）",
        "设备本地安全缓存加持，随时支持一键“清除缓存”完全掌控",
        "全方位学习进度追踪与技能统计分析，助力目标化提升",
        "支持 10+ 种全球主流语言的母语级真实语音发音",
      ],
      ar: [
        "6 ألعاب مصغرة تفاعلية ومبتكرة (بناء الجمل، مصفوفة الكلمات، البوصلة)",
        "ذاكرة تخزين مؤقت محلية على الجهاز وتحكم كامل للمستخدم مع زر 'مسح الذاكرة المؤقتة'",
        "متابعة التقدم وإحصاءات المهارات لتعلم مستمر وموجه نحو الأهداف",
        "نطق صوتي أصلي بأكثر من 10 لغات عالمية",
      ],
    },
    domain_track: {
      tr: [
        "Gerçek zamanlı çoklu TLD (.com, .net, .org, .io, .ai) sorgulama",
        "Tek dokunuşla kişisel portföy ve yıldızlı favori alan adları",
        "Cihaz içi önbellek & 'Önbelleği Temizle' ile tam kullanıcı kontrolü",
        "10 küresel dilde eksiksiz yerelleştirme ve gece mavisi arayüz",
      ],
      en: [
        "Real-time multi-TLD (.com, .net, .org, .io, .ai) instant check",
        "One-tap saved portfolio & starred favorite domain tracking",
        "On-device local caching & full control with 'Clear Cache' button",
        "Full localization across 10 global languages with deep blue dark UI",
      ],
      it: [
        "Verifica istantanea multi-TLD (.com, .net, .org, .io, .ai) in tempo reale",
        "Portafoglio personale e domini preferiti salvati con un tocco",
        "Cache locale sul dispositivo e controllo completo con 'Cancella Cache'",
        "Localizzazione completa in 10 lingue con elegante tema scuro",
      ],
      pt: [
        "Consulta instantânea multi-TLD (.com, .net, .org, .io, .ai) em tempo real",
        "Portfólio pessoal e dominiós favoritos salvos com um toque",
        "Cache local no dispositivo e controle total com 'Limpar Cache'",
        "Localização completa em 10 idiomas globais com interface moderna",
      ],
      es: [
        "Consulta instantánea multi-TLD (.com, .net, .org, .io, .ai) en tiempo real",
        "Cartera personal y dominios favoritos guardados con un toque",
        "Caché local en el dispositivo y control total con 'Limpiar Caché'",
        "Localización completa en 10 idiomas con interfaz nocturna",
      ],
      fr: [
        "Recherche instantanée multi-TLD (.com, .net, .org, .io, .ai) en temps réel",
        "Portefeuille personnel et domaines favoris enregistrés en un clic",
        "Cache local sur l'appareil et contrôle total via 'Vider le cache'",
        "Traduction complète en 10 langues avec interface sombre raffinée",
      ],
      de: [
        "Echtzeit-Prüfung mehrerer TLDs (.com, .net, .org, .io, .ai)",
        "Persönliches Portfolio und favorisierte Domains mit einem Fingertipp",
        "Lokaler Gerätespeicher & volle Kontrolle per 'Cache Leeren'-Button",
        "Vollständige Lokalisierung in 10 Sprachen mit modernem Dark-Mode",
      ],
      ru: [
        "Мгновенная проверка множества TLD (.com, .net, .org, .io, .ai)",
        "Личный портфель и избранные доменные имена в один клик",
        "Локальный кэш на устройстве и кнопка «Очистить кэш» для контроля",
        "Полная локализация на 10 языков и темная ночная тема",
      ],
      ja: [
        "複数TLD（.com、.net、.org、.io、.ai）のリアルタイム空き状況確認",
        "ワンタップで個人ポートフォリオとお気に入りドメインを保存",
        "端末内ローカルキャッシュと「キャッシュ消去」による完全な保護",
        "10言語完全ローカライズと洗練されたダークモードUI",
      ],
      zh: [
        "实时多顶级域名（.com, .net, .org, .io, .ai 等）秒级可用性查询",
        "一键添加收藏夹与自建域名监控资产库",
        "本地安全缓存加持，支持一键“清除缓存”保障隐私",
        "10 种全球语言深度本地化及深色极客质感界面",
      ],
      ar: [
        "استعلام فوري متعدد النطاقات (.com, .net, .org, .io, .ai)",
        "محفظة شخصية ومتابعة النطاقات المفضلة بنقرة واحدة",
        "ذاكرة محلية وتحكم كامل عبر زر 'مسح الذاكرة المؤقتة'",
        "توطين كامل بـ 10 لغات عالمية مع واجهة ليلية أنيقة",
      ],
    },
    astrovibe: {
      tr: [
        "7 zaman periyoduyla (şimdi, gece, yarın, haftalık, aylık) burç yorumu",
        "3D fizik motoruyla interaktif tarot kart çekimleri ve mistik açılımlar",
        "Burca ve enerjiye özel protez tırnak, takı ve estetik stil kataloğu",
        "Canlı animasyonlu reels akışı ve dikey TikTok dinamiklerinde arayüz",
      ],
      en: [
        "7-period zodiac forecasts (now, tonight, tomorrow, weekly, monthly)",
        "3D physics-based interactive tarot card pulls and mystical insights",
        "Zodiac-aligned press-on nails, jewelry, and cosmic beauty catalog",
        "Immersive vertical TikTok-style reels UI with buttery fluidity",
      ],
      it: [
        "Oroscopo in 7 periodi temporali (ora, stasera, domani, settimanale, mensile)",
        "Tarocchi 3D interattivi basati su motore fisico e letture mistiche",
        "Catalogo di nail art zodiacale, gioielli e stile cosmico",
        "Feed video verticale stile social con animazioni ultra-fluide",
      ],
      pt: [
        "Previsões do zodíaco em 7 períodos (agora, noite, amanhã, semanal, mensal)",
        "Tiragens interativas de tarô 3D com física realista e insights místicos",
        "Catálogo de unhas postiças, joias e beleza alinhado ao zodíaco",
        "Interface dinâmica em feed vertical estilo reels com extrema fluidez",
      ],
      es: [
        "Horóscopo en 7 períodos (ahora, esta noche, mañana, semanal, mensual)",
        "Tiradas interactivas de cartas del tarot en 3D con motor de física",
        "Catálogo de uñas, joyería y belleza personalizado por signo zodiacal",
        "Interfaz dinámica de vídeos verticales tipo reels con fluidez total",
      ],
      fr: [
        "Horoscope sur 7 périodes (maintenant, ce soir, demain, hebdo, mensuel)",
        "Tirages interactifs de tarot 3D avec moteur physique et révélations",
        "Catalogue d'ongles, bijoux et beauté cosmique selon le signe zodiacal",
        "Flux vidéo vertical dynamique style reels d'une fluidité remarquable",
      ],
      de: [
        "Horoskope für 7 Zeiträume (jetzt, heute Nacht, morgen, wöchentlich, monatlich)",
        "Interaktives 3D-Tarot mit Physik-Engine und mystischen Einblicken",
        "Auf Sternzeichen abgestimmter Katalog für Nail-Art, Schmuck und Beauty",
        "Vertikaler Video-Feed im modernen Reels-Stil mit flüssigen Animationen",
      ],
      ru: [
        "Гороскопы на 7 временных периодов (сейчас, ночь, завтра, неделя, месяц)",
        "Интерактивные 3D-расклады карт Таро с физическим движком",
        "Каталог маникюра, украшений и стиля по знакам зодиака",
        "Вертикальный видеопоток в формате reels с плавной анимацией",
      ],
      ja: [
        "7つの時間軸（現在、今夜、明日、週間、月間）で届く詳細な星座占い",
        "3D物理エンジンによる臨場感あふれるインタラクティブなタロット占い",
        "星座とエネルギーに連動したネイルアート、ジュエリー、美容カタログ",
        "滑らかに流れるリール感覚の縦型動画フィードUI",
      ],
      zh: [
        "涵盖 7 个精细时间维度（当下、今夜、明日、每周、每月）的深度星座运势",
        "基于 3D 物理引擎的逼真塔罗抽牌体验与神秘牌阵解析",
        "按星座星象量身定制的美甲艺术、星座配饰与美学风格展馆",
        "沉浸式纵向视频流界面，行云流水般的流畅交互",
      ],
      ar: [
        "توقعات الأبراج عبر 7 فترات زمنية (الآن، الليلة، غداً، أسبوعياً، شهرياً)",
        "سحب بطاقات تاروت تفاعلي ثلاثي الأبعاد بمحرك فيزيائي وتأملات ملهمة",
        "كتالوج أظافر مستوحاة من الأبراج ومجوهرات وأناقة فلكية",
        "خلاصة فيديو عمودية تفاعلية بأسلوب المقاطع القصيرة بسلاسة فائقة",
      ],
    },
    excuse_ai: {
      tr: [
        "İkna edici ve duruma özel yapay zeka üretimi profesyonel bahaneler",
        "Zorlu ortamlardan ayrılmak için gerçekçi sahte gelen arama simülatörü",
        "4 temel kategori (İş hayatı, Aile/Ev, Sosyal ortamlar, Romantik ilişkiler)",
        "Tek dokunuşla panoya kopyalama, WhatsApp ve mesaj paylaşım desteği",
      ],
      en: [
        "Plausible & context-aware AI-generated witty and professional excuses",
        "Emergency simulated fake phone calls with customizable timer triggers",
        "4 versatile life categories (Work, Family/Home, Social, Romantic)",
        "One-tap clipboard copy, WhatsApp, and instant messenger sharing",
      ],
      it: [
        "Scuse convincenti e professionali generate dall'intelligenza artificiale",
        "Simulatore realistico di chiamate in arrivo con timer per emergenze",
        "4 categorie di vita (Lavoro, Famiglia/Casa, Sociale, Relazioni)",
        "Copia negli appunti con un tocco e condivisione su WhatsApp e messaggi",
      ],
      pt: [
        "Desculpas convincentes e profissionais geradas por inteligência artificial",
        "Simulador realista de chamada recebida de emergência com temporizador",
        "4 categorias essenciais (Trabalho, Família/Casa, Social, Romântico)",
        "Cópia para área de transferência em um toque e compartilhamento instantâneo",
      ],
      es: [
        "Excusas convincentes y profesionales generadas por inteligencia artificial",
        "Simulador realista de llamadas entrantes falsas con temporizador de rescate",
        "4 categorías de la vida (Trabajo, Familia/Hogar, Social, Pareja)",
        "Copia al portapapeles con un toque y compartir en WhatsApp y mensajes",
      ],
      fr: [
        "Excuses convaincantes et professionnelles générées par intelligence artificielle",
        "Simulateur réaliste de faux appels entrants d'urgence avec minuteur",
        "4 catégories clés (Travail, Famille/Maison, Social, Romantique)",
        "Copie dans le presse-papiers en un clic et partage instantané via WhatsApp",
      ],
      de: [
        "Glaubwürdige und kontextbezogene KI-generierte Ausreden",
        "Realistischer Fake-Anrufsimulator mit einstellbarem Notfall-Timer",
        "4 Alltagskategorien (Arbeit, Familie/Zuhause, Sozial, Romantik)",
        "Kopieren in die Zwischenablage mit einem Fingertipp und WhatsApp-Teilen",
      ],
      ru: [
        "Убедительные и контекстные отговорки, сгенерированные искусственным интеллектом",
        "Реалистичный симулятор экстренных входящих звонков с таймером спасения",
        "4 жизненные категории (Работа, Семья/Дом, Друзья, Отношения)",
        "Копирование в буфер обмена в один клик и удобная отправка в мессенджеры",
      ],
      ja: [
        "状況に合わせてAIが生成する説得力のあるスマートな言い訳",
        "気まずい場所から抜け出すためのタイマー設定可能な緊急着信シミュレーター",
        "4つのライフカテゴリー（仕事、家庭、社交、恋愛）",
        "ワンタップでクリップボードにコピー＆各種メッセージアプリへ共有",
      ],
      zh: [
        "根据不同情境由 AI 智能生成的极具说服力且得体的借口与托辞",
        "支持定时触发的高度逼真紧急模拟来电救援助手",
        "4 大核心生活场景分类（职场工作、家庭生活、社交场合、恋爱关系）",
        "一键快捷复制至剪贴板，支持无缝分享至微信等即时通讯工具",
      ],
      ar: [
        "أعذار ذكية ومقنعة ومصممة وفق السياق ومولدة بالذكاء الاصطناعي",
        "محاكاة واقعية لمكالمات واردة طارئة مع مؤقت زمني قابل للتخصيص",
        "4 فئات حياتية متنوعة (العمل، الأسرة/المنزل، المناسبات الاجتماعية، العلاقات)",
        "نسخ بنقرة واحدة إلى الحافظة والمشاركة الفورية عبر واتساب والرسائل",
      ],
    },
  };

  const getBullets = (key: string) => appBullets[key]?.[language] || appBullets[key]?.en || [];

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
      {/* Ambient Chromatic Void Glows */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-180px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1000px",
          maxWidth: "100vw",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.22) 0%, rgba(6, 182, 212, 0.14) 45%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "800px",
          right: "-100px",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Shared Ecosystem Navbar */}
      <MainNavbar />

      {/* Main Content */}
      <main style={{ flex: 1, position: "relative", zIndex: 1 }}>
        {/* Grand Hero Section */}
        <section style={{ padding: "80px 0 60px 0", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "920px" }}>
            {/* Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 18px",
                borderRadius: "9999px",
                background: "rgba(139, 92, 246, 0.12)",
                border: "1px solid rgba(139, 92, 246, 0.35)",
                color: "#8B5CF6",
                fontSize: "12.5px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "24px",
                boxShadow: "0 0 24px -4px rgba(139, 92, 246, 0.25)",
              }}
            >
              <Sparkles size={15} />
              <span>Wixtory Apps</span>
            </div>

            {/* Display Headline */}
            <h1
              style={{
                fontSize: "clamp(34px, 5.5vw, 62px)",
                fontWeight: 850,
                letterSpacing: "-0.035em",
                lineHeight: "1.12",
                marginBottom: "22px",
                color: "var(--text-main)",
              }}
            >
              {hStr("hero_pre")}
              <span
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #3B82F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {hStr("hero_title")}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 19px)",
                color: "var(--text-secondary)",
                lineHeight: "1.65",
                maxWidth: "760px",
                margin: "0 auto 36px auto",
              }}
            >
              {(() => {
                const raw = resolveI18n(ecosystemI18n, "ecosystem_lead", language);
                const parts = raw.split(/(\{langBox\}|\{domainTrack\}|\{astroVibe\}|\{excuse\}|\{soon\})/g);
                return parts.map((part, idx) => {
                  if (part === "{langBox}") return <strong key={idx}>Wixtory Language Box</strong>;
                  if (part === "{domainTrack}") return <strong key={idx}>Wixtory: Domain Track</strong>;
                  if (part === "{astroVibe}") return <strong key={idx}>AstroVibe</strong>;
                  if (part === "{excuse}") return <strong key={idx}>Excuse AI</strong>;
                  if (part === "{soon}") return <span key={idx} style={{ color: "#F59E0B", fontWeight: 700 }}>{t("coming_soon")}</span>;
                  return part;
                });
              })()}
            </p>

            {/* Hero Interactive CTAs */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "48px",
              }}
            >
              <a
                href="#apps"
                className="btn-cosmic"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 30px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 10px 28px -6px rgba(16, 185, 129, 0.55)",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 14px 36px -4px rgba(16, 185, 129, 0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 10px 28px -6px rgba(16, 185, 129, 0.55)";
                }}
              >
                <span>{hStr("explore_apps_btn")}</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="#about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 26px",
                  borderRadius: "16px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-main)",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "var(--shadow-card)",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor = "var(--border-active)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                }}
              >
                <Compass size={17} color="var(--primary)" />
                <span>{hStr("ecosystem_vision_btn")}</span>
              </a>
            </div>

            {/* Quick Metrics / Value Badges */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "14px",
                maxWidth: "840px",
                margin: "0 auto",
              }}
            >
              {[
                {
                  icon: <Zap size={16} color="#10B981" />,
                  title: t("feature_flagship_apps_title"),
                  desc: t("feature_flagship_apps_desc"),
                },
                {
                  icon: <Globe size={16} color="#06B6D4" />,
                  title: t("feature_global_languages_title"),
                  desc: t("feature_global_languages_desc"),
                },
                {
                  icon: <Shield size={16} color="#10B981" />,
                  title: t("feature_privacy_title"),
                  desc: t("feature_privacy_desc"),
                },
                {
                  icon: <Cpu size={16} color="#F59E0B" />,
                  title: t("feature_flutter_cdn_title"),
                  desc: t("feature_flutter_cdn_desc"),
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "16px",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    textAlign: "left",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "var(--badge-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-main)", lineHeight: 1.2 }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Showcase Sections (Alternating Layout matching /apps) */}
        <section id="apps" style={{ padding: "40px 0 80px 0" }}>
          <div className="container" style={{ maxWidth: "1140px" }}>
            <div
              style={{
                textAlign: "center",
                marginBottom: "56px",
              }}
            >
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
                  marginBottom: "16px",
                }}
              >
                <Layers size={15} />
                <span>{hStr("flagship_badge")}</span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(30px, 4.5vw, 48px)",
                  fontWeight: 850,
                  letterSpacing: "-0.03em",
                  lineHeight: "1.2",
                  marginBottom: "16px",
                  color: "var(--text-main)",
                }}
              >
                {hStr("flagship_title")}
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  color: "var(--text-secondary)",
                  lineHeight: "1.65",
                  maxWidth: "740px",
                  margin: "0 auto",
                }}
              >
                {hStr("apps_hero_desc")}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
              {/* APP 1: WIXTORY LANGUAGE BOX (Icon Left, Text Right) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "clamp(32px, 5vw, 70px)",
                  alignItems: "center",
                  padding: "20px 0",
                }}
              >
                {/* Left: App Icon */}
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
                      maxWidth: "340px",
                      aspectRatio: "1 / 1",
                      borderRadius: "48px",
                      overflow: "hidden",
                      boxShadow: "0 24px 56px -12px rgba(16, 185, 129, 0.3)",
                      border: "2px solid rgba(16, 185, 129, 0.35)",
                      position: "relative",
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, #062b1f 0%, #0c3d2e 100%)",
                      padding: "20px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <Image
                      src="/apps/language-box-icon.png"
                      alt="Wixtory Language Box App Icon"
                      width={300}
                      height={300}
                      priority
                      style={{ objectFit: "contain", borderRadius: "32px" }}
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        color: "#10B981",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {hStr("cat_lang")}
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 850,
                        color: "#fff",
                        background: "linear-gradient(135deg, #10B981, #06B6D4)",
                        padding: "2px 8px",
                        borderRadius: "9999px",
                      }}
                    >
                      {t("live_badge")}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: "clamp(30px, 3.8vw, 42px)",
                      fontWeight: 850,
                      letterSpacing: "-0.03em",
                      margin: 0,
                      color: "var(--text-main)",
                    }}
                  >
                    Wixtory Language Box
                  </h2>

                  <p
                    style={{
                      fontSize: "16px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.65",
                      margin: 0,
                    }}
                  >
                    {hStr("lang_box_desc")}
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {hStr("lang_box_p2")}
                  </p>

                  {/* Bullet Highlights */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "4px 0" }}>
                    {getBullets("lang_box").map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.45 }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      fontSize: "11.5px",
                      color: "var(--text-muted)",
                      lineHeight: "1.5",
                      marginTop: "2px",
                    }}
                  >
                    Wixtory Language Box © 2026 Wixtory Software. All rights reserved.
                  </div>

                  {/* Store Badges & Explore Link */}
                  <StoreBadgesRow
                    appleUrl="https://apps.apple.com/tr/app/wixtory-language-box/id6761607811"
                    googleUrl="https://play.google.com/store/apps/details?id=com.wixbook.language_box"
                    detailUrl="/language-box"
                    detailText={t("explore_app")}
                  />
                </div>
              </div>

              {/* APP 2: DOMAIN TRACK (Text Left, Icon Right - Alternating!) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "clamp(32px, 5vw, 70px)",
                  alignItems: "center",
                  padding: "20px 0",
                }}
              >
                {/* Left: Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px", order: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        color: "#8B5CF6",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {hStr("cat_domain")}
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 800,
                        color: "#fff",
                        background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
                        padding: "2px 8px",
                        borderRadius: "9999px",
                      }}
                    >
                      {t("live_badge")}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: "clamp(30px, 3.8vw, 42px)",
                      fontWeight: 850,
                      letterSpacing: "-0.03em",
                      margin: 0,
                      color: "var(--text-main)",
                    }}
                  >
                    Wixtory: Domain Track
                  </h2>

                  <p
                    style={{
                      fontSize: "16px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.65",
                      margin: 0,
                    }}
                  >
                    {hStr("domain_track_desc")}
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {hStr("domain_track_p2")}
                  </p>

                  {/* Bullet Highlights */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "4px 0" }}>
                    {getBullets("domain_track").map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <CheckCircle2 size={16} color="#8B5CF6" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.45 }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      fontSize: "11.5px",
                      color: "var(--text-muted)",
                      lineHeight: "1.5",
                      marginTop: "2px",
                    }}
                  >
                    Wixtory: Domain Track © 2026 Wixtory Software. All rights reserved.
                  </div>

                  {/* Store Badges & Explore Link */}
                  <StoreBadgesRow
                    appleUrl="https://apps.apple.com/tr/app/wixtory-domain-track/id6790164419"
                    googleUrl="https://play.google.com/store/apps/details?id=com.wixtory.domain_track"
                    detailUrl="/domain-track"
                    detailText={t("explore_app")}
                  />
                </div>

                {/* Right: App Icon */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    order: 2,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "340px",
                      aspectRatio: "1 / 1",
                      borderRadius: "48px",
                      overflow: "hidden",
                      boxShadow: "0 24px 56px -12px rgba(139, 92, 246, 0.3)",
                      border: "2px solid rgba(139, 92, 246, 0.35)",
                      background: "linear-gradient(135deg, #0F1E2B 0%, #1A1A2E 100%)",
                      position: "relative",
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <Image
                      src="/apps/domain-track-icon.png"
                      alt="Wixtory: Domain Track App Icon"
                      width={300}
                      height={300}
                      priority
                      style={{ objectFit: "contain", borderRadius: "32px" }}
                    />
                  </div>
                </div>
              </div>

              {/* APP 3: ASTROVIBE (Icon Left, Text Right) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "clamp(32px, 5vw, 70px)",
                  alignItems: "center",
                  padding: "20px 0",
                }}
              >
                {/* Left: App Icon */}
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
                      maxWidth: "340px",
                      aspectRatio: "1 / 1",
                      borderRadius: "48px",
                      overflow: "hidden",
                      boxShadow: "0 24px 56px -12px rgba(99, 102, 241, 0.3)",
                      border: "2px solid rgba(99, 102, 241, 0.35)",
                      position: "relative",
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, #130D24 0%, #1E1538 100%)",
                      padding: "20px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <Image
                      src="/apps/astrovibe-icon.png"
                      alt="AstroVibe App Icon"
                      width={300}
                      height={300}
                      priority
                      style={{ objectFit: "contain", borderRadius: "32px" }}
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        color: "#6366F1",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {hStr("cat_astro")}
                    </span>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "3px 10px",
                        borderRadius: "9999px",
                        background: "rgba(245, 158, 11, 0.15)",
                        border: "1px solid rgba(245, 158, 11, 0.35)",
                        color: "#F59E0B",
                        fontSize: "11.5px",
                        fontWeight: 800,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {t("coming_soon_badge")}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: "clamp(30px, 3.8vw, 42px)",
                      fontWeight: 850,
                      letterSpacing: "-0.03em",
                      margin: 0,
                      color: "var(--text-main)",
                    }}
                  >
                    AstroVibe
                  </h2>

                  <p
                    style={{
                      fontSize: "16px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.65",
                      margin: 0,
                    }}
                  >
                    {hStr("astrovibe_desc")}
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {hStr("astrovibe_p2")}
                  </p>

                  {/* Bullet Highlights */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "4px 0" }}>
                    {getBullets("astrovibe").map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <CheckCircle2 size={16} color="#6366F1" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.45 }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      fontSize: "11.5px",
                      color: "var(--text-muted)",
                      lineHeight: "1.5",
                      marginTop: "2px",
                    }}
                  >
                    AstroVibe © 2026 Wixtory Software. All rights reserved.
                  </div>

                  {/* Store Badges & Explore Link */}
                  <StoreBadgesRow
                    detailUrl="/astrovibe"
                    isComingSoon={true}
                    comingSoonText={t("coming_soon_stores")}
                    detailText={t("explore_app")}
                  />
                </div>
              </div>

              {/* APP 4: EXCUSE AI (Text Left, Icon Right - Alternating!) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "clamp(32px, 5vw, 70px)",
                  alignItems: "center",
                  padding: "20px 0",
                }}
              >
                {/* Left: Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px", order: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        color: "#10B981",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {hStr("cat_excuse")}
                    </span>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "3px 10px",
                        borderRadius: "9999px",
                        background: "rgba(245, 158, 11, 0.15)",
                        border: "1px solid rgba(245, 158, 11, 0.35)",
                        color: "#F59E0B",
                        fontSize: "11.5px",
                        fontWeight: 800,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {t("coming_soon_badge")}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: "clamp(30px, 3.8vw, 42px)",
                      fontWeight: 850,
                      letterSpacing: "-0.03em",
                      margin: 0,
                      color: "var(--text-main)",
                    }}
                  >
                    Excuse AI
                  </h2>

                  <p
                    style={{
                      fontSize: "16px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.65",
                      margin: 0,
                    }}
                  >
                    {hStr("excuse_desc")}
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {hStr("excuse_p2")}
                  </p>

                  {/* Bullet Highlights */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "4px 0" }}>
                    {getBullets("excuse_ai").map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.45 }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      fontSize: "11.5px",
                      color: "var(--text-muted)",
                      lineHeight: "1.5",
                      marginTop: "2px",
                    }}
                  >
                    Excuse AI © 2026 Wixtory Software. All rights reserved.
                  </div>

                  {/* Store Badges & Explore Link */}
                  <StoreBadgesRow
                    detailUrl="/excuse"
                    isComingSoon={true}
                    comingSoonText={t("coming_soon_stores")}
                    detailText={t("explore_app")}
                  />
                </div>

                {/* Right: App Icon */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    order: 2,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "340px",
                      aspectRatio: "1 / 1",
                      borderRadius: "48px",
                      overflow: "hidden",
                      boxShadow: "0 24px 56px -12px rgba(16, 185, 129, 0.3)",
                      border: "2px solid rgba(16, 185, 129, 0.35)",
                      position: "relative",
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, #0A231C 0%, #133A2E 100%)",
                      padding: "20px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <Image
                      src="/apps/excuse-icon.png"
                      alt="Excuse AI App Icon"
                      width={300}
                      height={300}
                      style={{ objectFit: "contain", borderRadius: "32px" }}
                    />
                  </div>
                </div>
              </div>

              {/* STUDIO CULTURE SECTION: Life at Wixtory Apps */}
              <div
                style={{
                  borderTop: "1px solid var(--border-subtle)",
                  paddingTop: "70px",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "clamp(32px, 5vw, 60px)",
                  alignItems: "center",
                }}
              >
                {/* Left: Studio Photos Container */}
                <div>
                  <div
                    style={{
                      borderRadius: "28px",
                      overflow: "hidden",
                      border: "1px solid var(--border-subtle)",
                      boxShadow: "0 20px 48px -10px rgba(0,0,0,0.22)",
                      position: "relative",
                      aspectRatio: "16 / 11",
                    }}
                  >
                    <Image
                      src="/about/studio-life.jpg"
                      alt="Life at Wixtory Apps Team"
                      fill
                      sizes="(max-width: 768px) 100vw, 540px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>

                {/* Right: Studio Culture Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <h2
                    style={{
                      fontSize: "clamp(30px, 4vw, 42px)",
                      fontWeight: 850,
                      letterSpacing: "-0.03em",
                      margin: 0,
                      color: "var(--text-main)",
                    }}
                  >
                    {hStr("life_at")}
                  </h2>

                  <p
                    style={{
                      fontSize: "16px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.65",
                      margin: 0,
                    }}
                  >
                    {hStr("life_desc_1")}
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {hStr("life_desc_2")}
                  </p>

                  <div>
                    <Link
                      href="/about"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        background: "#4C1D95",
                        color: "#ffffff",
                        padding: "14px 28px",
                        borderRadius: "9999px",
                        fontWeight: 700,
                        fontSize: "15px",
                        textDecoration: "none",
                        boxShadow: "0 8px 24px -4px rgba(76, 29, 149, 0.45)",
                        transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.background = "#5B21B6";
                        e.currentTarget.style.boxShadow = "0 12px 28px -4px rgba(91, 33, 182, 0.6)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.background = "#4C1D95";
                        e.currentTarget.style.boxShadow = "0 8px 24px -4px rgba(76, 29, 149, 0.45)";
                      }}
                    >
                      <span>{hStr("see_more")}</span>
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Philosophy & Architecture Section */}
        <section id="about" style={{ padding: "40px 0 80px 0" }}>
          <div className="container">
            <div
              className="glass-panel"
              style={{
                padding: "clamp(36px, 5vw, 64px)",
                borderRadius: "32px",
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-card)",
                boxShadow: "var(--shadow-card)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 48px auto" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 16px",
                    borderRadius: "9999px",
                    background: "var(--badge-bg)",
                    border: "1px solid var(--border-active)",
                    color: "var(--primary)",
                    fontSize: "12px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "16px",
                  }}
                >
                  <Compass size={14} />
                  <span>{hStr("vision_section_badge")}</span>
                </div>

                <h2
                  style={{
                    fontSize: "clamp(26px, 4vw, 40px)",
                    fontWeight: 850,
                    letterSpacing: "-0.03em",
                    lineHeight: "1.2",
                    marginBottom: "16px",
                  }}
                >
                  {hStr("philosophy_h2")}
                </h2>

                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--text-secondary)",
                    lineHeight: "1.65",
                    margin: 0,
                  }}
                >
                  {hStr("philosophy_sub")}
                </p>
              </div>

              {/* 3 Pillars Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "24px",
                }}
              >
                <div
                  style={{
                    padding: "30px",
                    borderRadius: "22px",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(2, 132, 199, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                      marginBottom: "16px",
                    }}
                  >
                    <Zap size={22} />
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px", color: "var(--text-main)" }}>
                    {hStr("pillar_zero_bloat")}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6", margin: 0 }}>
                    {hStr("pillar_zero_bloat_desc")}
                  </p>
                </div>

                <div
                  style={{
                    padding: "30px",
                    borderRadius: "22px",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(16, 185, 129, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#10B981",
                      marginBottom: "16px",
                    }}
                  >
                    <Lock size={22} />
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px", color: "var(--text-main)" }}>
                    {hStr("pillar_unified_privacy")}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6", margin: 0 }}>
                    {hStr("pillar_unified_privacy_desc")}
                  </p>
                </div>

                <div
                  style={{
                    padding: "30px",
                    borderRadius: "22px",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(139, 92, 246, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#8B5CF6",
                      marginBottom: "16px",
                    }}
                  >
                    <Cpu size={22} />
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px", color: "var(--text-main)" }}>
                    {hStr("pillar_modern_flutter")}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6", margin: 0 }}>
                    {hStr("pillar_modern_flutter_desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Infrastructure Banner */}
        <section style={{ padding: "0 0 80px 0" }}>
          <div className="container">
            <div
              className="glass-panel"
              style={{
                padding: "36px 44px",
                borderRadius: "24px",
                border: "1px solid var(--border-subtle)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "32px",
                textAlign: "center",
              }}
            >
              <div>
                <div style={{ fontSize: "36px", fontWeight: 900, color: "var(--primary)", marginBottom: "6px" }}>
                  {hStr("metric_lang_num")}
                </div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-main)" }}>
                  {hStr("metric_lang_title")}
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px" }}>
                  {hStr("metric_lang_desc")}
                </div>
              </div>

              <div>
                <div style={{ fontSize: "36px", fontWeight: 900, color: "var(--secondary)", marginBottom: "6px" }}>
                  %100
                </div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-main)" }}>
                  {hStr("metric_privacy_title")}
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px" }}>
                  {hStr("metric_privacy_desc")}
                </div>
              </div>

              <div>
                <div style={{ fontSize: "36px", fontWeight: 900, color: "#8B5CF6", marginBottom: "6px" }}>
                  100% Native
                </div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-main)" }}>
                  {hStr("metric_ui_title")}
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px" }}>
                  {hStr("metric_ui_desc")}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Ecosystem Footer */}
      <MainFooter />
    </div>
  );
}
