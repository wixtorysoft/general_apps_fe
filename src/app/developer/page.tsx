"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";
import { useLanguage } from "@/context/LanguageContext";
import {
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  Code,
  Copy,
  Check,
  Lock,
  Zap,
  Cpu,
  Layers,
  BookOpen,
  Sparkles,
  MessageSquare,
  Terminal,
  ArrowRight,
  Shield,
  Smartphone,
} from "lucide-react";

import { LanguageCode } from "@/data/translations";

export default function DeveloperPage() {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const devI18n: Record<string, Record<LanguageCode, string>> = {
    hero_badge: {
      tr: "Geliştirici & Sistem Mimarı", en: "Developer & System Architect", it: "Sviluppatore & Architetto di Sistema", pt: "Desenvolvedor & Arquiteto de Sistemas",
      es: "Desarrollador & Arquitecto de Sistemas", fr: "Développeur & Architecte Système", de: "Entwickler & Systemarchitekt", ru: "Разработчик и Архитектор Систем",
      ja: "開発者＆システムアーキテクト", zh: "核心开发者与系统架构师", ar: "مطور ومهندس معماري للنظم"
    },
    hero_role: {
      tr: "Senior Software Engineer & Wixtory Kurucusu", en: "Senior Software Engineer & Founder of Wixtory", it: "Senior Software Engineer & Fondatore di Wixtory", pt: "Engenheiro de Software Sênior & Fundador da Wixtory",
      es: "Ingeniero de Software Senior & Fundador de Wixtory", fr: "Ingénieur Logiciel Senior & Fondateur de Wixtory", de: "Senior Software Engineer & Gründer von Wixtory", ru: "Ведущий Инженер-Программист и Основатель Wixtory",
      ja: "シニアソフトウェアエンジニア＆Wixtory創設者", zh: "资深软件工程师兼 Wixtory 创始人", ar: "مهندس برمجيات أول ومؤسس Wixtory"
    },
    hero_bio: {
      tr: "Gizlilik öncelikli yerel mimariler, modern Flutter mobil deneyimleri ve kurumsal Spring Boot sistemleri inşa eden yazılım mühendisi.",
      en: "Architecting privacy-first on-device mobile applications with modern Flutter performance and resilient Spring Boot backends.",
      it: "Progetta applicazioni mobili con privacy locale prioritaria, alte prestazioni Flutter e backend Spring Boot resilienti.",
      pt: "Desenvolve aplicativos móveis com foco em privacidade local, alta performance em Flutter e backends robustos em Spring Boot.",
      es: "Diseña aplicaciones móviles con privacidad local garantizada, alto rendimiento en Flutter y backends sólidos en Spring Boot.",
      fr: "Conçoit des applications mobiles axées sur la confidentialité locale, des performances Flutter de pointe et des backends Spring Boot résilients.",
      de: "Entwickelt datenschutzorientierte On-Device-Apps mit modernem Flutter und robusten Spring Boot-Microservices.",
      ru: "Проектирует мобильные приложения с приоритетом приватности на Flutter и надежные микросервисы на Spring Boot.",
      ja: "端末内完結のプライバシー最優先設計、最新Flutterによる俊敏な動作、堅牢なSpring Bootバックエンドを構築。",
      zh: "专注于隐私至上的设备端架构、原生级流畅的现代 Flutter 移动体验以及高可用 Spring Boot 企业微服务体系。",
      ar: "هندسة تطبيقات جوال تركز على الخصوصية المحلية وأداء فلاتر فائق مع خلفيات برمجية قوية بـ Spring Boot."
    },
    email_label: {
      tr: "E-Posta", en: "Email", it: "Email", pt: "E-mail",
      es: "Correo", fr: "E-mail", de: "E-Mail", ru: "Эл. почта",
      ja: "メールアドレス", zh: "电子邮箱", ar: "البريد الإلكتروني"
    },
    copy_label: {
      tr: "Kopyala", en: "Copy", it: "Copia", pt: "Copiar",
      es: "Copiar", fr: "Copier", de: "Kopieren", ru: "Копировать",
      ja: "コピー", zh: "复制", ar: "نسخ"
    },
    copied_label: {
      tr: "Kopyalandı", en: "Copied", it: "Copiato", pt: "Copiado",
      es: "Copiado", fr: "Copié", de: "Kopiert", ru: "Скопировано",
      ja: "コピー完了", zh: "已复制", ar: "تم النسخ"
    },
    location_label: {
      tr: "Konum", en: "Location", it: "Posizione", pt: "Localização",
      es: "Ubicación", fr: "Localisation", de: "Standort", ru: "Местоположение",
      ja: "拠点", zh: "所在地", ar: "الموقع"
    },
    portal_label: {
      tr: "Resmi Web Portalı", en: "Official Web Portal", it: "Portale Web Ufficiale", pt: "Portal Web Oficial",
      es: "Portal Web Oficial", fr: "Portail Web Officiel", de: "Offizielles Webportal", ru: "Официальный Веб-Портал",
      ja: "公式ウェブポータル", zh: "官方网络门户", ar: "البوابة الإلكترونية الرسمية"
    },
    apps_heading: {
      tr: "Geliştirilen Uygulamalar", en: "Developed Applications", it: "Applicazioni Sviluppate", pt: "Aplicativos Desenvolvidos",
      es: "Aplicaciones Desarrolladas", fr: "Applications Développées", de: "Entwickelte Anwendungen", ru: "Разработанные Приложения",
      ja: "開発アプリケーション", zh: "已开发旗舰应用矩阵", ar: "التطبيقات المطورة"
    },
    apps_desc: {
      tr: "Wixtory ekosisteminde aktif olarak geliştirilen, sıfır-üyelik ve %100 yerel gizlilik mimarisiyle çalışan 4 amiral mobil uygulama:",
      en: "The 4 flagship mobile applications actively architected and published under the Wixtory ecosystem:",
      it: "Le 4 applicazioni mobili di punta sviluppate nell'ecosistema Wixtory con zero account e privacy locale al 100%:",
      pt: "Os 4 aplicativos móveis emblemáticos desenvolvidos no ecossistema Wixtory com zero contas e 100% de privacidade local:",
      es: "Las 4 aplicaciones móviles emblemáticas desarrolladas en el ecosistema Wixtory sin cuentas y con 100% de privacidad local:",
      fr: "Les 4 applications mobiles phares développées dans l'écosystème Wixtory sans compte et avec une confidentialité locale à 100% :",
      de: "Die 4 Flaggschiff-Apps im Wixtory-Ökosystem, entwickelt ohne Kontozwang und mit 100% lokalem Datenschutz:",
      ru: "4 флагманских мобильных приложения экосистемы Wixtory, созданных без регистрации со 100% локальной защитой данных:",
      ja: "Wixtoryエコシステムのもとで開発された、会員登録不要・端末内プライバシー100%の4大フラッグシップアプリ：",
      zh: "Wixtory 生态系统自主设计研发的 4 大旗舰移动应用，践行零注册、100% 设备端离线隐私架构：",
      ar: "التطبيقات الأربعة الرائدة المطورة في منظومة Wixtory بدون تسجيل وخصوصية محلية بنسبة 100%:"
    },
    explore_app_hub: {
      tr: "Uygulama Sayfasını İncele", en: "Explore App Hub", it: "Esplora Hub App", pt: "Explorar Hub de Apps",
      es: "Explorar Centro de Apps", fr: "Explorer le Hub de l'App", de: "App-Hub Erkunden", ru: "Перейти к Приложению",
      ja: "アプリ詳細を見る", zh: "查看应用详情", ar: "استعراض تفاصيل التطبيق"
    },
    vision_heading: {
      tr: "Mühendislik Vizyonu", en: "Engineering Vision", it: "Visione Ingegneristica", pt: "Visão de Engenharia",
      es: "Visión de Ingeniería", fr: "Vision Ingénierie", de: "Engineering-Vision", ru: "Инженерное Видение",
      ja: "エンジニアリングビジョン", zh: "核心工程哲学与架构愿景", ar: "رؤية الهندسة البرمجية"
    },
    vision_desc: {
      tr: "Wixtory ekosisteminde geliştirilen tüm ürünler, aşağıdaki 4 değişmez mühendislik ilkesi doğrultusunda inşa edilmektedir:",
      en: "Every product developed under the Wixtory brand adheres strictly to the following 4 foundational engineering pillars:",
      it: "Ogni prodotto dell'ecosistema Wixtory è realizzato secondo i seguenti 4 pilastri ingegneristici fondamentali:",
      pt: "Todos os produtos desenvolvidos no ecossistema Wixtory seguem rigorosamente estes 4 pilares de engenharia:",
      es: "Cada producto desarrollado en el ecosistema Wixtory cumple estrictamente estos 4 pilares fundamentales de ingeniería:",
      fr: "Chaque produit développé dans l'écosystème Wixtory adhère rigoureusement à ces 4 piliers d'ingénierie fondamentaux :",
      de: "Jedes im Wixtory-Ökosystem entwickelte Produkt folgt strikt diesen 4 grundlegenden Engineering-Säulen:",
      ru: "Каждый продукт экосистемы Wixtory создается в строгом соответствии с 4 фундаментальными инженерными принципами:",
      ja: "Wixtoryエコシステムのすべての製品は、以下の4つの不変のエンジニアリング原則に基づいて設計されています：",
      zh: "Wixtory 生态系统旗下的所有产品与技术组件，均严格恪守以下 4 大核心工程基石：",
      ar: "كل منتج يتم تطويره في منظومة Wixtory يلتزم بدقة بالمبادئ الهندسية الأربعة التالية:"
    },
    app_lang_badge: {
      tr: "Kelime & Dil Öğrenimi", en: "Vocabulary & Language", it: "Vocabolario & Lingue", pt: "Vocabulário & Idiomas",
      es: "Vocabulario & Idiomas", fr: "Vocabulaire & Langues", de: "Vokabeln & Sprachen", ru: "Словарный Запас и Языки",
      ja: "語彙＆言語学習", zh: "词汇与多语言启蒙", ar: "المفردات وتعلم اللغات"
    },
    app_lang_desc: {
      tr: "Oyunlaştırılmış aralıklı tekrar sistemi (SRS), 5+ küresel dil desteği, etkileşimli testler ve %100 yerel çevrimdışı ilerleme takibi.",
      en: "Gamified spaced repetition system (SRS), 5+ global languages, interactive quizzes, and 100% on-device offline progress tracking.",
      it: "Sistema a ripetizione spaziata (SRS) con giochi, oltre 5 lingue globali, quiz interattivi e monitoraggio progressi 100% offline.",
      pt: "Sistema gamificado de repetição espaçada (SRS), mais de 5 idiomas, quizzes interativos e progresso 100% offline no dispositivo.",
      es: "Sistema gamificado de repetición espaciada (SRS), más de 5 idiomas, cuestionarios interactivos y progreso 100% local sin conexión.",
      fr: "Système de répétition espacée (SRS) ludifié, 5+ langues, quiz interactifs et suivi des progrès 100% hors ligne sur l'appareil.",
      de: "Gamifiziertes SRS-Wiederholungssystem, 5+ Sprachen, interaktive Quizze und 100% lokales Offline-Lernen.",
      ru: "Геймифицированная система интервальных повторений (SRS), 5+ языков, тесты и 100% локальное отслеживание прогресса.",
      ja: "ゲーム感覚の間隔反復学習（SRS）、5カ国語以上の対応、インタラクティブクイズ、100%完全オフライン進行管理。",
      zh: "游戏化间隔重复记忆系统（SRS），支持 5+ 种全球语言，交互式词汇闯关，100% 设备端完全离线追踪进度。",
      ar: "نظام تكرار متباعد شيق (SRS) مع دعم أكثر من 5 لغات واختبارات تفاعلية ومتابعة للتقدم بدون اتصال بنسبة 100%."
    },
    app_domain_badge: {
      tr: "Alan Adı & DNS İstihbaratı", en: "Domain & DNS Intelligence", it: "Domini & Intelligence DNS", pt: "Domínios & Inteligência DNS",
      es: "Dominios e Inteligencia DNS", fr: "Domaines & Renseignement DNS", de: "Domain- & DNS-Intelligence", ru: "Домены и Аналитика DNS",
      ja: "ドメイン＆DNSインテリジェンス", zh: "域名与 DNS 全景情报", ar: "النطاقات واستخبارات DNS"
    },
    app_domain_desc: {
      tr: "Gerçek zamanlı alan adı uygunluk kontrolü, WHOIS analizi, DNS kayıt çözümleme ve yerel favori portföy takip asistanı.",
      en: "Real-time domain availability check, WHOIS intelligence, DNS record resolver, and local portfolio tracking assistant.",
      it: "Verifica disponibilità domini in tempo reale, analisi WHOIS, risoluzione record DNS e portfolio preferiti locale.",
      pt: "Verificação de disponibilidade em tempo real, análise WHOIS, resolução de registros DNS e portfólio de favoritos local.",
      es: "Consulta en tiempo real de disponibilidad, análisis WHOIS, resolución DNS y gestor de dominios favoritos local.",
      fr: "Vérification en temps réel des domaines, analyse WHOIS, résolution DNS et suivi de portefeuille favori local.",
      de: "Echtzeit-Domainverfügbarkeitsprüfung, WHOIS-Analyse, DNS-Auflösung und lokales Favoriten-Portfolio.",
      ru: "Проверка доступности доменов в реальном времени, WHOIS-анализ, резолвер DNS-записей и локальный трекер портфолио.",
      ja: "リアルタイムドメイン空き確認、WHOIS詳細解析、DNSレコード名前解決、端末内完結のドメイン資産管理。",
      zh: "实时顶级域名注册状态毫秒级查询，WHOIS 深度画像分析，DNS 权威解析器与本地安全资产监控。",
      ar: "فحص فوري لتوفر النطاقات مع تحليل WHOIS وحل سجلات DNS ومساعد محلي لمتابعة المحفظة المفضلة."
    },
    app_astro_badge: {
      tr: "Astroloji & Stil Stüdyosu (Yakında)", en: "Astrology & Style Studio (Coming Soon)", it: "Astrologia & Studio di Stile (In Arrivo)", pt: "Astrologia & Estúdio de Estilo (Em Breve)",
      es: "Astrología & Estudio de Estilo (Próximamente)", fr: "Astrologie & Studio de Style (Bientôt)", de: "Astrologie & Style-Studio (Demnächst)", ru: "Астрология и Студия Стиля (Скоро)",
      ja: "占星術＆スタイルスタジオ（近日公開）", zh: "星座与美学生活馆（即将上线）", ar: "علم الفلك واستوديو الأناقة (قريباً)"
    },
    app_astro_desc: {
      tr: "7 periyotlu derinlikli burç analizleri, tırnak sanatı (nail art) modelleri, mücevher ilhamı ve kozmik yaşam rehberi. Çok yakında yayında!",
      en: "7-period in-depth horoscope analysis, cosmic nail art designs, jewelry inspiration, and celestial lifestyle guide. Launching soon!",
      it: "Oroscopo dettagliato in 7 periodi temporali, nail art zodiacale, ispirazione gioielli e guida lifestyle cosmica. In arrivo!",
      pt: "Análises de horóscopo em 7 períodos, nail art cósmica, joias e guia de estilo de vida celestial. Em breve!",
      es: "Horóscopo detallado en 7 períodos, arte de uñas cósmico, joyería y guía de estilo de vida celestial. ¡Próximamente!",
      fr: "Horoscope sur 7 périodes, nail art cosmique, bijoux et guide lifestyle céleste. Bientôt disponible !",
      de: "Tiefgründige Horoskope über 7 Zeiträume, Nail-Art-Kataloge, Schmuckinspiration und kosmischer Lifestyle. Demnächst verfügbar!",
      ru: "Подробный гороскоп на 7 периодов, идеи маникюра по знакам зодиака, украшения и космический гид стиля. Скоро!",
      ja: "7つの時間軸で届く深層星座占い、星空モチーフのネイルアート、ジュエリー提案、コズミックライフガイド。間もなくリリース！",
      zh: "7 个精细时间跨度的深度星座星盘分析，按星象推荐美甲设计与轻奢配饰灵感，引领先锋美学生活。即将正式推出！",
      ar: "تحليلات أبراج عميقة لـ 7 فترات ونماذج أظافر مستوحاة من الأبراج ومجوهرات ودليل حياة فلكي. قريباً جداً!"
    },
    app_excuse_badge: {
      tr: "Akıllı Bahane & Sosyal Kurtarıcı (Yakında)", en: "Smart Excuse & Social Lifesaver (Coming Soon)", it: "Scuse Intelligenti & Salvavita Sociale (In Arrivo)", pt: "Desculpas Inteligentes & Salva-Vidas Social (Em Breve)",
      es: "Excusas Inteligentes & Salvavidas Social (Próximamente)", fr: "Excuses Intelligentes & Sauvegarde Sociale (Bientôt)", de: "Clevere Ausreden & Sozialer Retter (Demnächst)", ru: "Умные Отговорки и Социальный Спасатель (Скоро)",
      ja: "スマート言い訳＆ソーシャルライフセーバー（近日公開）", zh: "AI 智能借口与社交救急助手（即将上线）", ar: "أعذار ذكية ومنقذ للمواقف الاجتماعية (قريباً)"
    },
    app_excuse_desc: {
      tr: "Beklenmedik krizler, geç kalmalar ve zorlu sosyal durumlar için mizahi ve zeki yanıtlar üreten yapay zeka asistanı. Çok yakında yayında!",
      en: "AI-powered quick social excuse assistant generating clever, contextual, and polite responses for awkward moments. Launching soon!",
      it: "Assistente IA per generare scuse brillanti, contestuali ed educate per imprevisti e momenti imbarazzanti. In arrivo!",
      pt: "Assistente de IA para criar desculpas inteligentes, contextuais e elegantes para situações constrangedoras. Em breve!",
      es: "Asistente con IA para generar excusas ingeniosas, contextuales y educadas para momentos incómodos. ¡Próximamente!",
      fr: "Assistant IA générant des réponses spirituelles, contextuelles et polies face aux situations délicates. Bientôt !",
      de: "KI-Assistent für clevere, kontextbezogene und höfliche Antworten in ungemütlichen sozialen Momenten. Demnächst!",
      ru: "ИИ-ассистент, создающий остроумные, вежливые и правдоподобные ответы для неловких социальных ситуаций. Скоро!",
      ja: "気まずい瞬間や予期せぬピンチに役立つ、文脈に応じた機転の利く言い訳をAIが即座に生成。間もなくリリース！",
      zh: "应对突发社交危机、晚点迟到与尴尬局面的 AI 智能救急助手，生成幽默得体的高情商回复。即将正式推出！",
      ar: "مساعد ذكاء اصطناعي لتوليد ردود ذكية ولبقة ومناسبة للسياق للمواقف المحرجة. قريباً جداً!"
    },
    pillar_privacy_title: {
      tr: "Tasarımda Gizlilik & Sıfır Telemetri", en: "Privacy by Design & Zero Telemetry", it: "Privacy by Design & Zero Telemetria", pt: "Privacidade por Design & Zero Telemetria",
      es: "Privacidad por Diseño & Cero Telemetría", fr: "Confidentialité Dès la Conception & Zéro Télémétrie", de: "Privacy by Design & Keine Telemetrie", ru: "Приватность в Архитектуре и Ноль Телеметрии",
      ja: "プライバシーバイデザイン＆ゼロテレメトリ", zh: "设计即隐私与零遥测架构", ar: "الخصوصية في التصميم وتصفير التتبع"
    },
    pillar_privacy_sub: {
      tr: "Privacy-First Mimari", en: "Privacy-First Architecture", it: "Architettura Privacy-First", pt: "Arquitetura Privacy-First",
      es: "Arquitectura Privacy-First", fr: "Architecture Privacy-First", de: "Privacy-First-Architektur", ru: "Архитектура Privacy-First",
      ja: "プライバシーファースト設計", zh: "隐私第一核心架构", ar: "هندسة الخصوصية أولاً"
    },
    pillar_privacy_desc: {
      tr: "Kullanıcı verisi en büyük emanettir. Wixtory çatısı altındaki hiçbir uygulama zorunlu üyelik, profil kaydı veya kimlik bilgisi talep etmez. Arama geçmişi ve tercihler merkezi sunucularda değil, yalnızca kullanıcının kendi cihazında güvenle barındırılır.",
      en: "Zero telemetry and zero accounts. No personal information is ever collected or tracked on remote servers. All queries, learning history, and favorites stay strictly inside the client's local sandbox storage.",
      it: "Zero telemetria e nessun account. Nessun dato personale viene raccolto sui server. Tutte le ricerche e i preferiti risiedono nella memoria locale del dispositivo.",
      pt: "Zero telemetria e sem contas de usuário. Nenhum dado pessoal é coletado em servidores remotos. Todas as buscas e histórico permanecem no dispositivo.",
      es: "Cero telemetría y sin cuentas. No se recopila información personal en servidores remotos. Todas las consultas y favoritos se guardan localmente.",
      fr: "Zéro télémétrie et sans compte utilisateur. Aucune donnée personnelle n'est envoyée vers des serveurs distants. Tout reste sur l'appareil.",
      de: "Keine Telemetrie und kein Kontozwang. Keine persönlichen Daten werden auf Servern gespeichert. Verlauf und Favoriten verbleiben lokal auf dem Gerät.",
      ru: "Нулевая телеметрия и отсутствие учетных записей. Персональные данные никогда не собираются на удаленных серверах. Все сохраняется локально на устройстве.",
      ja: "ゼロテレメトリ＆アカウント不要。リモートサーバーへの個人情報送信は一切行いません。検索履歴や学習進捗は端末内の保護領域にのみ保存されます。",
      zh: "零用户遥测与零强制账号要求。绝不向云端服务器采集或追踪任何个人私密数据，所有的查询记录、学习进度及收藏夹均被严格保存在本地沙盒之中。",
      ar: "صفر تتبع وبدون حسابات إلزامية. لا نجمع أي بيانات شخصية على خوادم بعيدة، ويبقى كل السجل والمفضلة بأمان في جهازك المحلي فقط."
    },
    pillar_perf_title: {
      tr: "Yüksek Performanslı Yerel Arayüzler", en: "High-Performance Native Interfaces", it: "Interfacce Native ad Alte Prestazioni", pt: "Interfaces Nativas de Alto Desempenho",
      es: "Interfaces Nativas de Alto Rendimiento", fr: "Interfaces Natives Haute Performance", de: "Leistungsstarke Native Interfaces", ru: "Высокопроизводительные Нативные Интерфейсы",
      ja: "高性能ネイティブインターフェース", zh: "极致性能原生交互界面", ar: "واجهات أصلية فائقة الأداء"
    },
    pillar_perf_sub: {
      tr: "Performans & Haptik", en: "Performance & Haptics", it: "Prestazioni & Tattilità", pt: "Performance & Háptica",
      es: "Rendimiento & Háptica", fr: "Performance & Haptique", de: "Performance & Haptik", ru: "Производительность и Тактильность",
      ja: "パフォーマンス＆触覚フィードバック", zh: "极致性能与触感微交互", ar: "الأداء والاستجابة اللمسية"
    },
    pillar_perf_desc: {
      tr: "Flutter'ın modern grafik motoru ile iOS ve Android platformlarında tavizsiz akıcılık, fizik tabanlı mikro-etkileşimler, dokunsal (haptic) geri bildirimler ve bellek sızıntılarından arındırılmış kaynak yönetimi.",
      en: "High-performance native interfaces across iOS and Android with spring physics, responsive micro-animations, tactile haptic feedback, and lean memory footprint.",
      it: "Interfacce native fluide su iOS e Android con animazioni basate sulla fisica, feedback aptico e gestione efficiente della memoria.",
      pt: "Interfaces nativas fluidas no iOS e Android com física elástica, micro-animações responsivas, feedback tátil e consumo enxuto de memória.",
      es: "Interfaces nativas fluidas en iOS y Android con física realista, microanimaciones reactivas, respuesta háptica y uso óptimo de memoria.",
      fr: "Interfaces natives fluides sur iOS et Android avec physique dynamique, micro-animations réactives, retour haptique et gestion mémoire allégée.",
      de: "Flüssige native Oberflächen für iOS und Android mit Federphysik, reaktionsschnellen Mikroanimationen, haptischem Feedback und minimalem Speicherbedarf.",
      ru: "Высокопроизводительные интерфейсы для iOS и Android с физикой пружин, отзывчивой анимацией, тактильным откликом и чистой памятью.",
      ja: "iOSとAndroidの双方でFlutterの最新グラフィックパイプラインを駆使し、物理バネ運動、心地よい触覚フィードバック、メモリ効率を追求。",
      zh: "依托 Flutter 现代化底层渲染引擎，在 iOS 和 Android 双端带来丝般顺滑的弹性物理微交互、精准触觉反馈与零内存泄漏的高能资源管理。",
      ar: "واجهات أصلية فائقة الاستجابة عبر iOS و Android مع حركات فيزيائية حيوية وتغذية راجعة لمسية وإدارة ذكية للذاكرة."
    },
    pillar_domain_title: {
      tr: "Tip Güvenli Domain Modelleri & i18n", en: "Type-Safe Domain Enums & i18n", it: "Modelli di Dominio Type-Safe & i18n", pt: "Modelos de Domínio Type-Safe & i18n",
      es: "Modelos de Dominio con Seguridad de Tipos & i18n", fr: "Modèles de Domaine Type-Safe & i18n", de: "Typsichere Domain-Modelle & i18n", ru: "Типобезопасные Модели Домена и i18n",
      ja: "型安全なドメインモデル＆多言語化", zh: "类型安全领域模型与纯净国际化", ar: "نماذج مجالات آمنة برمجياً ودعم لغوي شامل"
    },
    pillar_domain_sub: {
      tr: "Temiz Mimari", en: "Clean Architecture", it: "Clean Architecture", pt: "Clean Architecture",
      es: "Arquitectura Limpia", fr: "Architecture Propre", de: "Clean Architecture", ru: "Чистая Архитектура",
      ja: "クリーンアーキテクチャ", zh: "整洁架构规范", ar: "هندسة برمجية نظيفة"
    },
    pillar_domain_desc: {
      tr: "Sihirli dizgilerden (magic strings) arındırılmış, domain seviyesinde çift yönlü JSON serileştirme garantisi sunan tip güvenli enum mimarisi. 11 dilde UI katmanından bağımsız yerelleştirme.",
      en: "Strict type-safe domain models eliminating magic strings with bidirectional JSON serialization. Decoupled multilingual engine supporting 11 global languages across client and server.",
      it: "Modelli di dominio type-safe senza stringhe magiche con serializzazione JSON bidirezionale. Motore multilingue disaccoppiato in 11 lingue.",
      pt: "Modelos de domínio estritamente tipados eliminando strings mágicas com serialização bidirecional em JSON. Suporte desacoplado a 11 idiomas.",
      es: "Modelos de dominio seguros sin cadenas mágicas y con serialización JSON bidireccional. Motor multilingüe desacoplado con soporte para 11 idiomas.",
      fr: "Modèles de domaine type-safe éliminant les chaînes magiques avec sérialisation JSON bidirectionnelle. Moteur multilingue découplé en 11 langues.",
      de: "Typsichere Domain-Modelle ohne Magic Strings mit bidirektionaler JSON-Serialisierung. Entkoppelte Lokalisierung für 11 globale Sprachen.",
      ru: "Типобезопасные модели предметной области без магических строк с двусторонней сериализацией JSON. Независимый движок локализации на 11 языков.",
      ja: "マジックストリングを完全に排除し、双方向JSONシリアライズを保証する型安全なドメインモデル。UI層から独立した11言語のグローバル展開。",
      zh: "彻底摒弃魔术字符串，在领域驱动设计层面确保双向 JSON 序列化无误差。UI 展示层与多语言引擎彻底解耦，无缝驱动 11 种全球语言。",
      ar: "نماذج بيانات دقيقة تلغي النصوص العشوائية مع دعم موثوق لتسلسل JSON، ومحرك ترجمة مستقل يدعم 11 لغة عالمية."
    },
    pillar_infra_title: {
      tr: "Dayanıklı Mikroservisler & MinIO CDN", en: "Resilient Backend & MinIO CDN", it: "Backend Resiliente & CDN MinIO", pt: "Backend Resiliente & CDN MinIO",
      es: "Backend Resiliente & CDN MinIO", fr: "Backend Résilient & CDN MinIO", de: "Widerstandsfähiges Backend & MinIO CDN", ru: "Надежный Бэкенд и MinIO CDN",
      ja: "高耐久バックエンド＆MinIO CDN", zh: "高可用企业后端与 MinIO CDN", ar: "خلفية برمجية متينة وبنية MinIO CDN"
    },
    pillar_infra_sub: {
      tr: "Ölçeklenebilir Altyapı", en: "Scalable Infrastructure", it: "Infrastruttura Scalabile", pt: "Infraestrutura Escalável",
      es: "Infraestructura Escalable", fr: "Infrastructure Évolutive", de: "Skalierbare Infrastruktur", ru: "Масштабируемая Инфраструктура",
      ja: "スケーラブルなインフラ", zh: "高弹性扩展基础设施", ar: "بنية تحتية قابلة للتوسع"
    },
    pillar_infra_desc: {
      tr: "Spring Boot kurumsal arka uç altyapısı, JWT tabanlı sıfır-güven (zero-trust) mutasyon güvenliği, TLS 1.3 şifreleme ve MinIO nesne depolama ile gecikmesiz yüksek hızlı medya dağıtımı.",
      en: "Enterprise-grade Spring Boot microservices, zero-trust mutation protection, TLS 1.3 communication, and high-speed MinIO object storage CDN delivery.",
      it: "Microservizi aziendali Spring Boot, sicurezza a tolleranza zero con JWT, crittografia TLS 1.3 e distribuzione multimediale ad alta velocità con MinIO CDN.",
      pt: "Microsserviços Spring Boot corporativos, proteção zero-trust com JWT, criptografia TLS 1.3 e entrega rápida de mídia via MinIO CDN.",
      es: "Microservicios Spring Boot de nivel empresarial, protección de mutación de confianza cero con JWT, cifrado TLS 1.3 y distribución rápida de medios con MinIO.",
      fr: "Microservices d'entreprise Spring Boot, sécurité zéro confiance avec JWT, chiffrement TLS 1.3 et diffusion multimédia haute vitesse MinIO CDN.",
      de: "Enterprise Spring Boot Microservices, Zero-Trust-Mutationsschutz mit JWT, TLS 1.3 und MinIO S3-Objektspeicher für verzögerungsfreie Medienauslieferung.",
      ru: "Корпоративные микросервисы Spring Boot, защита мутаций по модели Zero-Trust с JWT, шифрование TLS 1.3 и быстрая доставка медиа через MinIO CDN.",
      ja: "エンタープライズ水準のSpring Bootマイクロサービス、JWTによるゼロトラスト変更保護、TLS 1.3通信、MinIO S3による高速メディア配信。",
      zh: "企业级 Spring Boot 分布式微服务中枢，JWT 零信任安全数据校验体系，全面启用 TLS 1.3 传输加密，依托 MinIO 对象存储集群实现低延迟极速媒体分发。",
      ar: "خدمات مصغرة مؤسسية بـ Spring Boot مع حماية Zero-Trust وتشفير TLS 1.3 وتخزين كائنات MinIO لتوزيع وسائط عالي السرعة وبدون تأخير."
    }
  };

  const dStr = (key: string) => devI18n[key]?.[language] || devI18n[key]?.en || "";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("wixtoryy@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const applications = [
    {
      id: "language-box",
      name: "Wixtory Language Box",
      badge: dStr("app_lang_badge"),
      description: dStr("app_lang_desc"),
      tags: ["Flutter", "SQLite", "SRS Algorithm", "11 Languages", "Zero Accounts"],
      href: "/language-box",
      icon: BookOpen,
      accentColor: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
    },
    {
      id: "domain-track",
      name: "Wixtory: Domain Track",
      badge: dStr("app_domain_badge"),
      description: dStr("app_domain_desc"),
      tags: ["Flutter", "WHOIS Protocol", "DNS Resolver", "HTTPS API", "Local Cache"],
      href: "/domain-track",
      icon: Globe,
      accentColor: "#0ea5e9",
      gradient: "linear-gradient(135deg, #0ea5e9, #3b82f6)",
    },
    {
      id: "astrovibe",
      name: "AstroVibe",
      badge: dStr("app_astro_badge"),
      isComingSoon: true,
      description: dStr("app_astro_desc"),
      tags: ["Flutter", "Spring Boot", "MinIO CDN", "7-Period Horoscopes"],
      href: "/astrovibe",
      icon: Sparkles,
      accentColor: "#ec4899",
      gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    },
    {
      id: "excuse",
      name: "Excuse AI",
      badge: dStr("app_excuse_badge"),
      isComingSoon: true,
      description: dStr("app_excuse_desc"),
      tags: ["Spring Boot", "NLP Engine", "Flutter", "Responsive UI"],
      href: "/excuse",
      icon: MessageSquare,
      accentColor: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    },
  ];

  const visionPillars = [
    {
      title: dStr("pillar_privacy_title"),
      subtitle: dStr("pillar_privacy_sub"),
      icon: Lock,
      color: "#10b981",
      description: dStr("pillar_privacy_desc"),
    },
    {
      title: dStr("pillar_perf_title"),
      subtitle: dStr("pillar_perf_sub"),
      icon: Zap,
      color: "#38bdf8",
      description: dStr("pillar_perf_desc"),
    },
    {
      title: dStr("pillar_domain_title"),
      subtitle: dStr("pillar_domain_sub"),
      icon: Cpu,
      color: "#a855f7",
      description: dStr("pillar_domain_desc"),
    },
    {
      title: dStr("pillar_infra_title"),
      subtitle: dStr("pillar_infra_sub"),
      icon: Layers,
      color: "#f59e0b",
      description: dStr("pillar_infra_desc"),
    },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Ecosystem Hub Top Navbar */}
      <MainNavbar />

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: "50px 0 90px 0" }}>
        <div className="container" style={{ maxWidth: "980px" }}>
          
          {/* Hero Profile Header */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span
              className="pill-badge"
              style={{
                background: "var(--badge-bg)",
                borderColor: "var(--border-active)",
                color: "var(--primary)",
                marginBottom: "16px",
                padding: "6px 16px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: 700,
              }}
            >
              <Code size={15} />
              <span>{dStr("hero_badge")}</span>
            </span>

            <h1
              style={{
                fontSize: "clamp(34px, 5.5vw, 50px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                marginBottom: "12px",
                color: "var(--text-main)",
                lineHeight: "1.15",
              }}
            >
              Hacı Celal Aygar
            </h1>

            <p
              style={{
                fontSize: "18px",
                color: "var(--primary)",
                fontWeight: 650,
                marginBottom: "8px",
              }}
            >
              {dStr("hero_role")}
            </p>

            <p
              style={{
                fontSize: "15px",
                color: "var(--text-secondary)",
                maxWidth: "640px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              {dStr("hero_bio")}
            </p>
          </div>

          {/* Profile & Contact Details Card */}
          <div
            className="glass-card"
            style={{
              padding: "clamp(24px, 4vw, 36px)",
              borderRadius: "28px",
              border: "1.5px solid var(--border-active)",
              background: "var(--bg-card)",
              boxShadow: "var(--shadow-card)",
              marginBottom: "44px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Ambient accent background blur */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "280px",
                height: "280px",
                background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
                opacity: 0.12,
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
            />

            {/* Profile Info Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "28px",
                borderBottom: "1px solid var(--border-subtle)",
                paddingBottom: "22px",
                flexWrap: "wrap",
              }}
            >
              {/* Avatar Initial Ring */}
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, var(--primary) 0%, #38bdf8 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontSize: "26px",
                  fontWeight: 850,
                  boxShadow: "0 10px 24px -4px var(--shadow-glow)",
                  flexShrink: 0,
                }}
              >
                HCA
              </div>

              <div>
                <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--text-main)", marginBottom: "4px" }}>
                  Hacı Celal Aygar
                </h2>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: "12.5px",
                      padding: "3px 10px",
                      borderRadius: "9999px",
                      backgroundColor: "var(--badge-bg)",
                      color: "var(--primary)",
                      border: "1px solid var(--border-active)",
                      fontWeight: 650,
                    }}
                  >
                    Senior Software Engineer
                  </span>
                  <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>•</span>
                  <span style={{ fontSize: "13px", color: "var(--text-secondary)", fontWeight: 550 }}>
                    Wixtory Apps Ecosystem Hub
                  </span>
                </div>
              </div>
            </div>

            {/* Structured Developer Information Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "18px",
              }}
            >
              {/* Email Card */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "18px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {dStr("email_label")}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: copied ? "#10B981" : "var(--text-muted)",
                      cursor: "pointer",
                      padding: "2px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "11px",
                      fontWeight: 600,
                    }}
                    title="Copy Email"
                  >
                    {copied ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                    <span>{copied ? dStr("copied_label") : dStr("copy_label")}</span>
                  </button>
                </div>
                <a
                  href="mailto:wixtoryy@gmail.com"
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "var(--text-main)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Mail size={16} color="var(--primary)" />
                  <span>wixtoryy@gmail.com</span>
                </a>
              </div>

              {/* Location Card */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "18px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {dStr("location_label")}
                </span>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "var(--text-main)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <MapPin size={16} color="var(--primary)" />
                  <span>Ankara, Yenimahalle, Türkiye</span>
                </div>
              </div>

              {/* Official Website Card */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "18px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {dStr("portal_label")}
                </span>
                <a
                  href="https://www.wixtory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "var(--primary)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Globe size={16} />
                  <span>www.wixtory.com</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Geliştirilen Uygulamalar (Developed Applications) Section */}
          <section style={{ marginBottom: "50px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#10b981",
                }}
              >
                <Layers size={18} />
              </div>
              <h2 style={{ fontSize: "22px", fontWeight: 850, color: "var(--text-main)", margin: 0 }}>
                {dStr("apps_heading")}
              </h2>
            </div>
            <p style={{ fontSize: "14.5px", color: "var(--text-secondary)", marginBottom: "22px" }}>
              {dStr("apps_desc")}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
              {applications.map((app) => {
                const IconComponent = app.icon;
                return (
                  <Link
                    key={app.id}
                    href={app.href}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: "24px",
                      borderRadius: "22px",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      textDecoration: "none",
                      color: "inherit",
                      transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = app.accentColor;
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = `0 12px 28px -6px ${app.accentColor}25`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div>
                      {/* Top Row: Icon + Badge */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "14px",
                            background: app.gradient,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            boxShadow: `0 8px 18px -4px ${app.accentColor}40`,
                          }}
                        >
                          <IconComponent size={22} />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                          {app.isComingSoon && (
                            <span
                              style={{
                                fontSize: "11px",
                                fontWeight: 800,
                                padding: "4px 8px",
                                borderRadius: "9999px",
                                backgroundColor: "rgba(245, 158, 11, 0.15)",
                                color: "#F59E0B",
                                border: "1px solid rgba(245, 158, 11, 0.35)",
                              }}
                            >
                              🚀 {t("coming_soon")}
                            </span>
                          )}
                          <span
                            style={{
                              fontSize: "11.5px",
                              fontWeight: 700,
                              padding: "4px 10px",
                              borderRadius: "9999px",
                              backgroundColor: `${app.accentColor}15`,
                              color: app.accentColor,
                              border: `1px solid ${app.accentColor}30`,
                            }}
                          >
                            {app.badge}
                          </span>
                        </div>
                      </div>

                      {/* App Title */}
                      <h3 style={{ fontSize: "18px", fontWeight: 800, color: "var(--text-main)", marginBottom: "8px" }}>
                        {app.name}
                      </h3>

                      {/* Description */}
                      <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "18px" }}>
                        {app.description}
                      </p>
                    </div>

                    {/* Footer Row: Tags + Link Indicator */}
                    <div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
                        {app.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            style={{
                              fontSize: "11px",
                              fontWeight: 600,
                              padding: "2px 8px",
                              borderRadius: "6px",
                              background: "var(--bg-glass)",
                              border: "1px solid var(--border-subtle)",
                              color: "var(--text-muted)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "13px",
                          fontWeight: 700,
                          color: app.accentColor,
                        }}
                      >
                        <span>{dStr("explore_app_hub")}</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Mühendislik Vizyonu (Engineering Vision) Section */}
          <section style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "rgba(56, 189, 248, 0.12)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#38bdf8",
                }}
              >
                <Terminal size={18} />
              </div>
              <h2 style={{ fontSize: "22px", fontWeight: 850, color: "var(--text-main)", margin: 0 }}>
                {dStr("vision_heading")}
              </h2>
            </div>
            <p style={{ fontSize: "14.5px", color: "var(--text-secondary)", marginBottom: "22px" }}>
              {dStr("vision_desc")}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
              {visionPillars.map((pillar, pIdx) => {
                const PillarIcon = pillar.icon;
                return (
                  <div
                    key={pIdx}
                    style={{
                      padding: "24px",
                      borderRadius: "22px",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "12px",
                          background: `${pillar.color}15`,
                          border: `1px solid ${pillar.color}35`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: pillar.color,
                          flexShrink: 0,
                        }}
                      >
                        <PillarIcon size={20} />
                      </div>
                      <div>
                        <span style={{ fontSize: "11.5px", fontWeight: 700, color: pillar.color, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                          {pillar.subtitle}
                        </span>
                        <h3 style={{ fontSize: "16.5px", fontWeight: 800, color: "var(--text-main)", margin: 0 }}>
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: "1.65", margin: 0 }}>
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </main>

      {/* Main Ecosystem Footer */}
      <MainFooter />
    </div>
  );
}
