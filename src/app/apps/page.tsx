"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Sparkles, Shield, Zap } from "lucide-react";
import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";
import { StoreBadgesRow } from "@/components/games/StoreBadges";
import { useLanguage } from "@/context/LanguageContext";

export default function AppsPage() {
  const { t, language } = useLanguage();

  const appsI18n: Record<string, Record<string, string>> = {
    hero_pre: {
      tr: "Özenle Tasarlanmış ", en: "Handcrafted ", it: "Progettate con Cura ", pt: "Cuidadosamente Desenvolvidos ",
      es: "Diseñadas con Esmero ", fr: "Conçues avec Soin ", de: "Sorgfältig Entwickelte ", ru: "С Любовью Созданные ",
      ja: "細部まで作り込まれた ", zh: "精心打造的 ", ar: "مصممة بعناية "
    },
    hero_title: {
      tr: "Mobil Uygulamalarımız", en: "Mobile Applications", it: "Applicazioni Mobili", pt: "Aplicativos Móveis",
      es: "Aplicaciones Móviles", fr: "Applications Mobiles", de: "Mobile Anwendungen", ru: "Мобильные Приложения",
      ja: "モバイルアプリケーション", zh: "移动应用程序", ar: "تطبيقاتنا المحمولة"
    },
    hero_desc: {
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
    cat_lang: {
      tr: "EĞİTİM & ÇOK DİLLİ ÖĞRENME", en: "EDUCATION & LANGUAGE GAMING", it: "ISTRUZIONE & APPRENDIMENTO LINGUE", pt: "EDUCAÇÃO & JOGOS DE IDIOMAS",
      es: "EDUCACIÓN & APRENDIZAJE DE IDIOMAS", fr: "ÉDUCATION & APPRENTISSAGE LINGUISTIQUE", de: "BILDUNG & SPRACHSPIELE", ru: "ОБРАЗОВАНИЕ И ИЗУЧЕНИЕ ЯЗЫКОВ",
      ja: "教育＆マルチリンガル学習", zh: "教育与多语言学习", ar: "التعليم وتعلم اللغات"
    },
    cat_domain: {
      tr: "GELİŞTİRİCİ & ALAN ADI", en: "DEVELOPER & DOMAIN TOOL", it: "SVILUPPATORE & TOOL DOMINI", pt: "DESENVOLVEDOR & FERRAMENTA DE DOMÍNIOS",
      es: "DESARROLLADOR & HERRAMIENTA DE DOMINIOS", fr: "DÉVELOPPEUR & OUTIL DOMAINE", de: "ENTWICKLER & DOMAIN-TOOL", ru: "РАЗРАБОТКА И АНАЛИЗ ДОМЕНОВ",
      ja: "開発者＆ドメインツール", zh: "开发者与域名工具", ar: "المطور وأدوات النطاقات"
    },
    cat_astro: {
      tr: "KOZMİK ASTROLOJİ & YAŞAM", en: "ASTROLOGY & LIFESTYLE", it: "ASTROLOGIA & STILE DI VITA", pt: "ASTROLOGIA & ESTILO DE VIDA",
      es: "ASTROLOGÍA & ESTILO DE VIDA", fr: "ASTROLOGIE & MODE DE VIE", de: "ASTROLOGIE & LIFESTYLE", ru: "АСТРОЛОГИЯ И СТИЛЬ ЖИЗНИ",
      ja: "占星術＆ライフスタイル", zh: "星座占星与生活方式", ar: "علم الفلك وأسلوب الحياة"
    },
    cat_excuse: {
      tr: "YAPAY ZEKA ASİSTANI", en: "AI LIFESAVER ASSISTANT", it: "ASSISTENTE SALVAVITA AI", pt: "ASSISTENTE SALVA-VIDAS IA",
      es: "ASISTENTE SALVAVIDAS IA", fr: "ASSISTANT SAUVEGARDE IA", de: "KI-LEBENSRETTER-ASSISTENT", ru: "ИИ-СПАСАТЕЛЬНЫЙ АССИСТЕНТ",
      ja: "AIライフセーバーアシスタント", zh: "AI 智能救急助手", ar: "مساعد الذكاء الاصطناعي المنقذ"
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
    },
    astrovibe_p1: {
      tr: "Zodyak yorumlarını dikey video akışında editoryal estetiğe dönüştürün. 7 zaman periyoduyla (şimdi, gece, yarın, haftalık, aylık, yıllık) derinlikli burç analizleri ve mistik öngörüler.",
      en: "Transform cosmic astrology into an editorial TikTok-style visual feed. In-depth zodiac forecasts across 7 timeframes (now, tonight, tomorrow, weekly, monthly, yearly).",
      it: "Trasforma l'astrologia cosmica in un feed video editoriale fluido. Previsioni zodiacali approfondite su 7 periodi temporali.",
      pt: "Transforme a astrologia cósmica em um feed de vídeo editorial fluido. Previsões zodiacais detalhadas em 7 períodos temporais.",
      es: "Transforma la astrología cósmica en un feed de video editorial y dinámico. Predicciones zodiacales profundas en 7 periodos temporales.",
      fr: "Transformez l'astrologie cosmique en un flux vidéo éditorial élégant. Prévisions zodiacales détaillées sur 7 périodes temporelles.",
      de: "Verwandeln Sie kosmische Astrologie in einen redaktionellen Video-Feed. Tiefgründige Tierkreis-Analysen über 7 Zeiträume hinweg.",
      ru: "Превратите астрологию в визуальную ленту в стиле современных видео. Глубокие гороскопы по 7 временным периодам.",
      ja: "星々のメッセージをモダンな縦型フィードでお届け。7つの時間枠にわたる詳細な星占いとインサイト。",
      zh: "将星座运势转化为极具美感的流媒体动态，覆盖 7 个时间维度的深度星象分析与神秘洞察。",
      ar: "حوّل علم الفلك إلى موجز مرئي تحريري جذاب. تحليلات فلكية عميقة عبر 7 فترات زمنية مختلفة."
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
    excuse_p1: {
      tr: "Beklenmedik ve zorlu durumlardan zahmetsizce sıyrılın. İkna edici, duruma özel yapay zeka üretimi profesyonel bahaneler ve durum açıklamaları parmaklarınızın ucunda.",
      en: "Effortlessly handle awkward social encounters. Plausible, context-aware AI-generated witty and professional excuses at your fingertips.",
      it: "Esci con disinvoltura da situazioni sociali imbarazzanti grazie a scuse intelligenti e professionali generate dall'IA contestuale.",
      pt: "Saia com facilidade de situações embaraçosas com desculpas convincentes e profissionais geradas por IA contextual.",
      es: "Maneja situaciones sociales incómodas con facilidad. Excusas convincentes e inteligentes generadas por IA al instante.",
      fr: "Gérez sans effort les situations sociales délicates grâce à des excuses contextuelles et convaincantes générées par IA.",
      de: "Meistern Sie unangenehme Situationen mühelos mit überzeugenden, kontextbezogenen KI-generierten Ausreden auf Knopfdruck.",
      ru: "Легко выходите из неловких ситуаций с помощью правдоподобных и остроумных оправданий от искусственного интеллекта.",
      ja: "気まずい場面もスマートに回避。AIが状況に合わせて生成する説得力のある言い訳とスマートな返答。",
      zh: "从容化解尴尬社交场合。触手可及的 AI 上下文智能借口生成器与得体应对方案。",
      ar: "تجاوز المواقف الاجتماعية المحرجة بكل سهولة مع أعذار ذكية ومقنعة تم إنشاؤها بواسطة الذكاء الاصطناعي."
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
    lang_box_p1: {
      tr: "Sentence Builder, Word Matrix, Word Compass, Dinleme ve Konuşma gibi 6 etkileşimli oyun ile yabancı dil öğrenmeyi eğlenceli ve kalıcı bir deneyime dönüştürün.",
      en: "Master new languages through 6 engaging interactive games including Sentence Builder, Word Matrix, and Word Compass with speech and pronunciation practice.",
      it: "Impara nuove lingue con 6 coinvolgenti giochi interattivi tra cui Sentence Builder, Word Matrix e Word Compass con pratica di ascolto e pronuncia.",
      pt: "Domine novos idiomas com 6 jogos interativos envolventes, incluindo Sentence Builder, Word Matrix e Word Compass com prática de pronúncia.",
      es: "Domina nuevos idiomas a través de 6 atractivos juegos interactivos que incluyen Sentence Builder, Word Matrix y Word Compass con práctica de pronunciación.",
      fr: "Maîtrisez de nouvelles langues grâce à 6 jeux interactifs captivants, dont Sentence Builder, Word Matrix et Word Compass avec pratique de la prononciation.",
      de: "Meistern Sie neue Sprachen mit 6 fesselnden interaktiven Spielen wie Sentence Builder, Word Matrix und Word Compass mit Ausspracheübungen.",
      ru: "Осваивайте новые языки с помощью 6 увлекательных интерактивных игр, включая Sentence Builder, Word Matrix и Word Compass с практикой произношения.",
      ja: "Sentence Builder、Word Matrix、Word Compassなど6つの魅力的なゲームで、リスニングと発音を楽しく学べます。",
      zh: "通过包含句子构建器、单词矩阵和单词罗盘在内的 6 款趣味互动游戏，结合听力与发音练习，轻松掌握新语言。",
      ar: "أتقن لغات جديدة عبر 6 ألعاب تفاعلية شيقة تشمل Sentence Builder و Word Matrix و Word Compass مع ممارسة النطق والاستماع."
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
    domain_track_p1: {
      tr: "Yüzlerce uzantıda (.com, .net, .org, .io, .ai) anlık ve gerçek zamanlı alan adı sorgulaması yapın. Arama geçmişinizi ve yıldızlı alan adlarınızı cihazınızın yerel önbelleğinde sıfır veri toplama güvencesiyle saklayın.",
      en: "Search real-time domain availability across hundreds of extensions (.com, .net, .org, .io, .ai). Keep your favorites and search history strictly in on-device local cache with zero telemetry guarantees.",
      it: "Cerca la disponibilità dei domini in tempo reale su centinaia di estensioni (.com, .net, .org, .io, .ai). Salva preferiti e cronologia nella cache locale senza alcuna raccolta dati.",
      pt: "Pesquise a disponibilidade de domínios em tempo real em centenas de extensões (.com, .net, .org, .io, .ai). Mantenha favoritos e histórico no cache local com zero telemetria.",
      es: "Busca disponibilidad de dominios en tiempo real en cientos de extensiones (.com, .net, .org, .io, .ai). Guarda tus favoritos e historial localmente con cero recopilación de datos.",
      fr: "Vérifiez la disponibilité de domaines en temps réel sur des centaines d'extensions (.com, .net, .org, .io, .ai). Conservez vos favoris et historique en cache local sans collecte de données.",
      de: "Prüfen Sie die Domain-Verfügbarkeit in Echtzeit über Hunderte von Endungen (.com, .net, .org, .io, .ai). Speichern Sie Favoriten und Verlauf sicher im lokalen Cache ohne Telemetrie.",
      ru: "Проверяйте доступность доменов в реальном времени для сотен зон (.com, .net, .org, .io, .ai). История и избранное сохраняются в локальном кэше без сбора данных.",
      ja: "数百種類のTLD（.com、.net、.org、.io、.ai等）でドメインの空き状況をリアルタイム検索。お気に入りと履歴はゼロテレメトリで端末ローカルに安全保存。",
      zh: "支持数百种域名后缀（.com、.net、.org、.io、.ai 等）的实时可用性查询。收藏夹与查询历史严格保存在设备本地缓存中，承诺零数据追踪。",
      ar: "ابحث عن توفر أسماء النطاقات في الوقت الفعلي عبر مئات الامتدادات (.com, .net, .org, .io, .ai). احتفظ بالمفضلة وسجل البحث محلياً دون أي تتبع."
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
    }
  };

  const aStr = (key: string) => appsI18n[key]?.[language] || appsI18n[key]?.en || "";

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
        {/* Header Hero */}
        <section
          style={{
            padding: "60px 0 40px 0",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div className="container" style={{ maxWidth: "840px" }}>
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
              <span>Wixtory Apps</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 54px)",
                fontWeight: 850,
                letterSpacing: "-0.03em",
                lineHeight: "1.15",
                marginBottom: "16px",
                color: "var(--text-main)",
              }}
            >
              {aStr("hero_pre")}
              <span
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 60%, #3B82F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {aStr("hero_title")}
              </span>
            </h1>

            <p
              style={{
                fontSize: "17px",
                color: "var(--text-secondary)",
                lineHeight: "1.65",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              {aStr("hero_desc")}
            </p>
          </div>
        </section>

        {/* Applications Showcase Sections (Alternating Layout) */}
        <section style={{ padding: "20px 0" }}>
          <div className="container" style={{ maxWidth: "1140px" }}>
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
                      {aStr("cat_lang")}
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
                      fontSize: "clamp(32px, 4vw, 44px)",
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
                    {aStr("lang_box_p1")}
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {aStr("lang_box_p2")}
                  </p>

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

                  {/* App Store & Google Play Badges + Details Link */}
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
                      {aStr("cat_domain")}
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
                      fontSize: "clamp(32px, 4vw, 44px)",
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
                    {aStr("domain_track_p1")}
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {aStr("domain_track_p2")}
                  </p>

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

                  {/* App Store & Google Play Badges + Details Link */}
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
                      {aStr("cat_astro")}
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
                      fontSize: "clamp(32px, 4vw, 44px)",
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
                    {aStr("astrovibe_p1")}
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {aStr("astrovibe_p2")}
                  </p>

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

                  {/* App Store & Google Play Badges + Details Link */}
                  <StoreBadgesRow
                    detailUrl="/astrovibe"
                    isComingSoon={true}
                    comingSoonText={t("coming_soon_stores")}
                  />
                </div>
              </div>

              {/* APP 4: EXCUSE AI (Text Left, Icon Right) */}
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
                      {aStr("cat_excuse")}
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
                      fontSize: "clamp(32px, 4vw, 44px)",
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
                    {aStr("excuse_p1")}
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {aStr("excuse_p2")}
                  </p>

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

                  {/* App Store & Google Play Badges + Details Link */}
                  <StoreBadgesRow
                    detailUrl="/excuse"
                    isComingSoon={true}
                    comingSoonText={t("coming_soon_stores")}
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
                    {aStr("life_at")}
                  </h2>

                  <p
                    style={{
                      fontSize: "16px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.65",
                      margin: 0,
                    }}
                  >
                    {aStr("life_desc_1")}
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {aStr("life_desc_2")}
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
                      <span>{aStr("see_more")}</span>
                      <ArrowRight size={17} />
                    </Link>
                  </div>
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
