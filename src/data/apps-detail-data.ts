import { LanguageCode } from "@/data/translations";

export interface DetailedFeature {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface KeyFeatureSpotlight {
  id: string;
  tag: string;
  title: string;
  headline: string;
  description: string;
  bulletPoints: string[];
  metricNumber: string;
  metricLabel: string;
  gradient: string;
  accentColor: string;
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
  tip: string;
}

export interface WhyChooseReason {
  title: string;
  description: string;
  versusCompetitors: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface AboutTechHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface AboutStat {
  label: string;
  value: string;
}

export interface ProjectAbout {
  badge: string;
  title: string;
  subtitle: string;
  story: string;
  mission: string;
  targetAudience: string;
  techHighlights: AboutTechHighlight[];
  stats: AboutStat[];
}

export interface DedicatedAppDetails {
  id: "astrovibe" | "excuse";
  slug: string;
  name: string;
  heroTagline: string;
  heroSubheadline: string;
  heroBadge: string;
  category: string;
  rating: number;
  reviewsCount: string;
  downloads: string;
  version: string;
  primaryColor: string;
  secondaryColor: string;
  glowColor: string;
  about: ProjectAbout;
  features: DetailedFeature[];
  keyFeatures: KeyFeatureSpotlight[];
  howToUse: WorkflowStep[];
  whyChoose: WhyChooseReason[];
  faq: FAQItem[];
  contactEmail: string;
}

export const APPS_DETAILED_DATA_TR: Record<"astrovibe" | "excuse", DedicatedAppDetails> = {
  astrovibe: {
    id: "astrovibe",
    slug: "astrovibe",
    name: "AstroVibe",
    heroTagline: "Kozmik Astroloji, 3D Tarot & Burca Özel Protez Tırnak Stil Rehberi",
    heroSubheadline:
      "Astrolojiyi salt metin yorumlarından çıkarıp editoryal bir stil ve yaşam tarzı deneyimine dönüştürün. Burcunuzun elementine uygun protez tırnak tasarımlarını TikTok akışında keşfedin, 3D tarot açılımlarıyla auranızı anında hizalayın.",
    heroBadge: "Kozmik Stil & Tarot v1.2",
    category: "Astroloji, Moda & Yaşam Tarzı",
    rating: 4.9,
    reviewsCount: "12.4K+",
    downloads: "50.000+",
    version: "v1.2.0",
    primaryColor: "#8B5CF6",
    secondaryColor: "#F59E0B",
    glowColor: "rgba(139, 92, 246, 0.45)",
    contactEmail: "astrovibe@wixtory.com",
    about: {
      badge: "Proje Vizyonu & Mimari",
      title: "Astrolojiyi Görsel Bir Yaşam Tarzı ve Editoryal Sanata Dönüştürüyoruz",
      subtitle: "Geleneksel burç yorumlarının ötesine geçerek estetik, protez tırnak sanatı ve 3D mistik deneyimleri modern mobil teknolojilerle buluşturuyoruz.",
      story: "AstroVibe, standart ve metin yığınlarından ibaret klasik burç uygulamalarının yarattığı tekdüzeliğe tepki olarak doğdu. Zodyak döngülerinin kişinin stilini, aurasını ve estetik tercihlerini doğrudan etkilediğine inanıyoruz. Bu vizyonla; TikTok tarzı akıcı dikey video formatında protez tırnak sanatı ile mistik 3D tarot ritüellerini tek bir modern mobil çatı altında birleştirdik.",
      mission: "Her burcun kendine has kozmik frekansını; tırnak sanatından doğal taş takılara, renk paletlerinden günlük stil önerilerine kadar elle tutulur bir yaşam tarzına dönüştürmek.",
      targetAudience: "Astroloji tutkunları, protez tırnak stilistleri, güzellik ve estetik meraklıları ile ruhani dengesini görsel bir dille ifade etmek isteyen tüm mobil kullanıcılar.",
      techHighlights: [
        {
          title: "Flutter 3.x & GPU Hızlandırma",
          description: "Akıcı dikey TikTok stili kaydırma ve 3D tarot kart çevirme fizik simülasyonu.",
          icon: "Smartphone",
        },
        {
          title: "Özel MinIO S3 Nesne Depolama",
          description: "Yüzlerce 4K tırnak sanatı ve takı görseli Edge CDN önbelleği ile 120ms altında anında yüklenir.",
          icon: "HardDrive",
        },
        {
          title: "Sıfır Telemetri & Katı Gizlilik",
          description: "Doğum haritası ve hesaplamalar sunuculara gönderilmeden doğrudan cihaz hafızasında güvenle işlenir.",
          icon: "ShieldCheck",
        },
      ],
      stats: [
        { label: "Özgün Tırnak Kataloğu", value: "500+ Model" },
        { label: "3D Tarot Destesi", value: "78 Kartlık Rider-Waite" },
        { label: "CDN Önbellek Hızı", value: "< 120ms" },
        { label: "Kullanıcı Memnuniyeti", value: "%99.4" },
      ],
    },
    features: [
      {
        id: "daily_horoscope",
        title: "Periyodik Burç Analizleri",
        description: "Aşk, kariyer, finans ve sağlık alanlarında gezegen transitlerine ve retro döngülerine göre günlük, haftalık ve aylık derin kozmik yorumlar.",
        badge: "Günlük Yenilenen",
        iconName: "MoonStar",
      },
      {
        id: "nail_art_feed",
        title: "TikTok Dikey Protez Tırnak Akışı",
        description: "Tam ekran dikey kaydırma, çift dokunmayla kalp efekti, stilist ipuçları ve döngüsel sonsuz tırnak vitrini.",
        badge: "Trend Görseller",
        iconName: "Sparkles",
      },
      {
        id: "jewelry_collection",
        title: "Doğal Taş & Mücevher Koleksiyonu",
        description: "Burç enerjinizi dengeleyen kolyeler, küpeler, yüzükler ve bilekliklerden oluşan 4 kapsamlı stil kataloğu.",
        badge: "4 Koleksiyon",
        iconName: "Gem",
      },
      {
        id: "tarot_reading",
        title: "3D Çevrilen Tarot Seansları",
        description: "22 Majör Arkana kartının ters/düz anlamları, derin aşk ve kariyer açılımlarıyla sezgisel bilinçaltı rehberliği.",
        badge: "3D İnteraktif",
        iconName: "Layers",
      },
      {
        id: "baby_names",
        title: "Kozmik Bebek İsimleri Rehberi",
        description: "Burç elementi ve numerolojik enerjiye göre kız, erkek ve unisex isim tavsiyeleri ve anlamları.",
        badge: "Sonsuz Liste",
        iconName: "Compass",
      },
      {
        id: "editorial_favorites",
        title: "Editoryal Favoriler Galerisi",
        description: "Beğendiğiniz tüm tırnak modelleri ve mücevherleri kategorize ederek offline saklayabileceğiniz şık kütüphane.",
        badge: "Offline Cache",
        iconName: "ShieldCheck",
      },
    ],
    keyFeatures: [
      {
        id: "spotlight_nail_art",
        tag: "ÖNE ÇIKAN YETENEK 01",
        title: "TikTok Dikey Protez Tırnak Vitrini",
        headline: "Burcunuzun Aurasını Yansıtan Sinematik Nail Art Akışı",
        description:
          "Sıradan statik fotoğraflar yerine, 24px yuvarlatılmış sinematik editoryal kartlarda burcunuza özel badem, stiletto ve balerin tırnak tasarımlarını dikey akışla gezin. Çift dokunmayla kalp efekti verin ve burç stilist ipuçlarını okuyun.",
        bulletPoints: [
          "12 Burca özel yüzlerce yüksek çözünürlüklü özgün tırnak modeli",
          "Son modelden sonra başa dönen kesintisiz Sonsuz Döngü (Circular Loop)",
          "Burcun elementi ve yönetici gezegenine göre stilist kombin tavsiyeleri",
          "Tam ekran TikTok dikey modu ve liste modu arasında anlık geçiş",
        ],
        metricNumber: "350+",
        metricLabel: "Özgün Nail Art Tasarımı",
        gradient: "linear-gradient(145deg, rgba(139, 92, 246, 0.15) 0%, rgba(236, 72, 153, 0.08) 100%)",
        accentColor: "#EC4899",
      },
      {
        id: "spotlight_tarot",
        tag: "ÖNE ÇIKAN YETENEK 02",
        title: "3D Dokun & Çevir Tarot Deneyimi",
        headline: "Günün Enerjisini Sezgisel Tarot Açılımıyla Hizalayın",
        description:
          "Gerçek Rider-Waite sembolizmine dayanan 22 Majör Arkana kartı ile günün enerjisini hissedin. Kartınızı seçin, dokunarak 3D olarak ters veya düz çevirin ve derin psikolojik rehberliğe ulaşın.",
        bulletPoints: [
          "Gerçekçi 3D kart çevirme ve parıltı fizik motoru animasyonları",
          "Tekli günün kartı seansı ve 3'lü derin geçmiş-şimdi-gelecek açılımı",
          "Aşk, para, kariyer ve ruhsal denge üzerine detaylı yorumlar",
          "Yeniden çek tuşuyla kartı kapatıp anında yeni odaklanma fırsatı",
        ],
        metricNumber: "22",
        metricLabel: "Majör Arkana Kartı",
        gradient: "linear-gradient(145deg, rgba(245, 158, 11, 0.15) 0%, rgba(217, 119, 6, 0.08) 100%)",
        accentColor: "#F59E0B",
      },
      {
        id: "spotlight_cosmic_engine",
        tag: "ÖNE ÇIKAN YETENEK 03",
        title: "Gezegen Transitleri & Enerji Paneli",
        headline: "Kişiselleştirilmiş Enerji Dağılımı ve Astrolojik Öngörüler",
        description:
          "Doğum tarihinizi girdiğiniz an burcunuz, elementiniz, şanslı sayılarınız ve yönetici gezegeniniz hesaplanır. Günlük aura skorunuz gezegen konumlarına göre anlık güncellenir.",
        bulletPoints: [
          "Sınır tarihlerde %100 hatasız burç tespit algoritması",
          "Kişisel verileriniz sunucuya gitmeden cihazınızda güvenle işlenir",
          "11 farklı küresel dilde anında yerelleştirme desteği",
          "İnternet kesildiğinde dahi kesintisiz offline çalışma garantisi",
        ],
        metricNumber: "%100",
        metricLabel: "Kişisel Gizlilik & Uyum",
        gradient: "linear-gradient(145deg, rgba(139, 92, 246, 0.18) 0%, rgba(79, 70, 229, 0.1) 100%)",
        accentColor: "#8B5CF6",
      },
    ],
    howToUse: [
      {
        stepNumber: "01",
        title: "Doğum Tarihinizi Seçin",
        description: "Uygulamayı açtığınızda doğum tarihinizi belirleyin. Burcunuz, elementiniz ve yönetici gezegeniniz otomatik hesaplansın.",
        tip: "İstediğiniz zaman üst bardan burcunuzu değiştirebilirsiniz.",
      },
      {
        stepNumber: "02",
        title: "Günün Burç ve Tarot Yorumunu Alın",
        description: "Ana ekranda günün aura skorunu okuyun, 3D tarot seansına girerek kartınızı dokunup çevirin.",
        tip: "Tekli veya 3'lü kart açılımını seçebilirsiniz.",
      },
      {
        stepNumber: "03",
        title: "Protez Tırnak ve Mücevher Vitrinini Gezin",
        description: "Burcunuzun aurasına özel tasarlanmış protez tırnak modellerini TikTok tarzı dikey akışta kaydırarak inceleyin.",
        tip: "Beğendiğiniz görsele çift tıklayarak kalp patlaması efekti verin!",
      },
    ],
    whyChoose: [
      {
        title: "Görsel & Editoryal Yaşam Tarzı",
        description: "Sıkıcı metin paragrafları yerine burcunuza özel tırnak, stil ve makyaj trendlerini yüksek çözünürlüklü reels akışında keşfedin.",
        versusCompetitors: "Sıradan astroloji uygulamaları sadece uzun yazılar gösterirken AstroVibe görsel bir şölen sunar.",
        iconName: "Sparkles",
      },
      {
        title: "Gerçekçi 3D Dokunsal Fizik Motoru",
        description: "Fiziksel kart çevirme hissi veren Matrix4 3D animasyonları, ses efektleri ve ışık parıltıları ile büyüleyici tarot deneyimi.",
        versusCompetitors: "Diğer uygulamalar düz 2D kart gösterirken, AstroVibe gerçekçi derinlik ve dönüş açısı sağlar.",
        iconName: "Zap",
      },
      {
        title: "MinIO S3 Instant CDN Streaming",
        description: "Yüksek çözünürlüklü görseller WebP formatında sıkıştırılarak cihazınızda akıllıca önbelleklenir ve sıfır gecikmeyle açılır.",
        versusCompetitors: "Rakip uygulamalarda görseller geç yüklenirken AstroVibe sıfır bekleme sunar.",
        iconName: "Smartphone",
      },
      {
        title: "Gizlilik Öncelikli & Reklamsız Deneyim",
        description: "Doğum haritanız ve favorileriniz sunucuya aktarılmadan cihazınızda saklanır. Rahatsız edici tam ekran reklamlar içermez.",
        versusCompetitors: "Piyasadaki uygulamalar sürekli reklam gösterirken AstroVibe temiz bir kullanıcı deneyimi sunar.",
        iconName: "ShieldCheck",
      },
    ],
    faq: [
      {
        question: "AstroVibe hem iOS hem Android cihazlarda kullanılabilir mi?",
        answer: "Evet, AstroVibe Flutter 3.x mimarisiyle geliştirilmiş olup hem Apple App Store hem de Google Play Store üzerinden akıcı hızda kullanılabilir.",
        category: "Platform",
      },
      {
        question: "3D Tarot kartı açılımı nasıl çalışır?",
        answer: "Özel Matrix4 perspektif motorumuz sayesinde kartlara dokunduğunuzda 180 derece döner. Kartın ters veya düz gelme olasılığı gerçek kart karıştırma algoritmasıyla belirlenir.",
        category: "Özellikler",
      },
      {
        question: "Protez tırnak görselleri nereden sağlanmaktadır?",
        answer: "Stilist ekibimiz tarafından hazırlanan burç tasarımları, S3 uyumlu MinIO nesne depolama bulutumuz üzerinden düzenli olarak güncellenmektedir.",
        category: "İçerik",
      },
      {
        question: "Uygulamayı internetsiz (çevrimdışı) kullanabilir miyim?",
        answer: "Evet! Tarot kartları, burç hesaplama motoru ve önceden görüntülenen tüm favori modelleriniz çevrimdışı yerel hafızada saklanır.",
        category: "Teknik",
      },
      {
        question: "Burç yorumları ne sıklıkla yenileniyor?",
        answer: "Günlük transit analizleri her gece 00:00 UTC saatinde otomatik olarak güncellenir. Tırnak trendleri ise haftalık olarak yenilenir.",
        category: "Güncellemeler",
      },
      {
        question: "Favorilerim silinir mi?",
        answer: "Favorileriniz cihazınızın güvenli yerel hafızasında tutulur. Uygulamayı silmediğiniz sürece kaybolmaz.",
        category: "Güvenlik",
      },
    ],
  },
  excuse: {
    id: "excuse",
    slug: "excuse",
    name: "Excuse AI",
    heroTagline: "Yapay Zeka Destekli Hayat Kurtaran Mazeret & Acil Durum Kaçış Asistanı",
    heroSubheadline:
      "Uzayan iş toplantılarından, sıkıcı randevulardan veya zoraki ortamlardan sıyrılmak için gerçekçi, inandırıcı ve yapay zeka destekli mazeretler ve sahte çağrılar oluşturun.",
    heroBadge: "AI Panik Motoru v1.0",
    category: "Verimlilik, Araçlar & Mizah",
    rating: 4.8,
    reviewsCount: "8.9K+",
    downloads: "25.000+",
    version: "v1.0.0",
    primaryColor: "#10B981",
    secondaryColor: "#06B6D4",
    glowColor: "rgba(16, 185, 129, 0.45)",
    contactEmail: "excuse@wixtory.com",
    about: {
      badge: "Proje Vizyonu & Mimari",
      title: "Sosyal ve Profesyonel Yaşamda Sınırlarınızı Koruyan Akıllı Asistan",
      subtitle: "Sosyal tükenmişliği önleyen, kriz anlarında nezaketi bozmadan diplomatik çıkış yolları sunan yerel yapay zeka asistanı.",
      story: "Yoğun iş temposunda, bitmeyen toplantılarda veya nezaket gereği kabul edilip sonradan pişmanlık duyulan davetlerde herkes diplomatik bir çıkış yoluna ihtiyaç duyar. Excuse AI, kullanıcıların sosyal ilişkilerini zedelemeden kriz anlarından sıyrılmalarını sağlayan psikoloji temelli mazeretler ve sahte çağrı simülasyonları üretmek üzere geliştirildi.",
      mission: "Kullanıcıya kişisel alanını, zihinsel sağlığını ve en değerli varlığı olan zamanını tek bir dokunuşla geri kazandırmak.",
      targetAudience: "Kurumsal çalışanlar, yöneticiler, sosyal kaygı veya tükenmişlik yaşayan bireyler, öğrenciler ve acil durum çıkış planına ihtiyaç duyan herkes.",
      techHighlights: [
        {
          title: "%100 Çevrimdışı SQLite Veritabanı",
          description: "İnternet bağlantısı veya sinyal olmadan dahi 9 dilde kategorize edilmiş binlerce mazerete sıfır gecikmeyle erişin.",
          icon: "Database",
        },
        {
          title: "Gerçek Zamanlı Sahte Arama Simülatörü",
          description: "Zaman ayarlı sahte gelen aramalar ve telsiz/siren/metro gibi kanıt ses efektleriyle desteklenen inandırıcı ortamlar.",
          icon: "PhoneCall",
        },
        {
          title: "Sıfır Telemetri & Tam Gizlilik",
          description: "Kopyalanan, düzenlenen veya üretilen hiçbir mazeret sunuculara kaydedilmez; mahremiyetiniz %100 korunur.",
          icon: "Lock",
        },
      ],
      stats: [
        { label: "Kategorize Mazeret", value: "1.200+ Senaryo" },
        { label: "Ortam Ses Profili", value: "18 Kanıt Efekti" },
        { label: "Çevrimdışı Çalışma", value: "%100 Offline" },
        { label: "Acil Kurtarma Hızı", value: "< 2 Saniye" },
      ],
    },
    features: [
      {
        id: "panic_shake",
        title: "Salla & Kurtul Panik Modu",
        description: "İvmeölçer sensörü sayesinde telefonunuzu 2 saniye salladığınızda anında acil durum kriz mazereti üretilir.",
        badge: "Hareket Sensörü",
        iconName: "ShieldAlert",
      },
      {
        id: "swipe_deck",
        title: "Tinder Tarzı Kart Kaydırma",
        description: "Mazeretleri sağa kaydırarak favorileyip panoya kopyalayın, sola kaydırarak sonraki seçeneğe geçin.",
        badge: "Swipe UI",
        iconName: "Flame",
      },
      {
        id: "theme_engine",
        title: "12 Dinamik Görsel Tema",
        description: "Cyber Neon, Pitch Black OLED, Deep Purple, Ocean Breeze gibi zengin renk paletleri arasında anında geçiş yapın.",
        badge: "12 Tema",
        iconName: "Layers",
      },
      {
        id: "categories_pool",
        title: "9 Tematik Kategori Havuzu",
        description: "İş & Ofis, Aşk & Flört, Aile, Trafik, Sosyal Buluşmalar, Sağlık ve Acil Durum senaryolarına özel binlerce içerik.",
        badge: "9 Kategori",
        iconName: "Bot",
      },
      {
        id: "intensity_levels",
        title: "3 Kademeli Yoğunluk Motoru",
        description: "Hafif (küçük gecikmeler), Orta (öncelik değişimi) ve Kritik/Panik (acil ayrılma zorunluluğu) seviyeleri.",
        badge: "3 Seviye",
        iconName: "Volume2",
      },
      {
        id: "offline_first",
        title: "%100 Çevrimdışı Çalışma Garantisi",
        description: "Metroda, uçakta veya çekmeyen bodrum katlarında dahi sıfır internet ihtiyacıyla anında çalışır.",
        badge: "%100 Offline",
        iconName: "Globe",
      },
    ],
    keyFeatures: [
      {
        id: "spotlight_shake_sensor",
        tag: "ÖNE ÇIKAN YETENEK 01",
        title: "İvmeölçer Panik Sallama Tetikleyicisi",
        headline: "Cihazı Gizlice Salla, Saniyeler İçinde Ortamdan Sıyrıl",
        description:
          "Zoraki bir muhabbetin ortasında kaldığınızda cebinizdeki telefonu gizlice sallayın. Sensör anında en inandırıcı acil durum mazeretini üretir ve panoya kopyalar.",
        bulletPoints: [
          "Özelleştirilebilir ivmeölçer hassasiyet eşiği",
          "Titreşimle (Haptic Feedback) başarı onayı",
          "Kilitli ekranda veya arka planda çalışabilme kabiliyeti",
          "Cihazda şüphe çekecek hiçbir açık log bırakmaz",
        ],
        metricNumber: "< 1s",
        metricLabel: "Bahane Üretim Hızı",
        gradient: "linear-gradient(145deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%)",
        accentColor: "#10B981",
      },
      {
        id: "spotlight_swipe_deck",
        tag: "ÖNE ÇIKAN YETENEK 02",
        title: "Tinder Tarzı Bahane Kart Destesi",
        headline: "Yüzlerce Senaryoyu Sezgisel Hareketlerle Eleyin",
        description:
          "Tek elle kullanıma uygun kart destesinde sağa kaydırarak beğendiğiniz mazereti anında WhatsApp veya mesajlara yapıştırın, sola kaydırarak diğerine geçin.",
        bulletPoints: [
          "Akıcı kart destesi fizik animasyonları",
          "Tek dokunuşla WhatsApp, SMS veya E-Posta kopyalama",
          "Anlık kategori ve yoğunluk filtreleme",
          "Sık kullanılan senaryolar için favoriler klasörü",
        ],
        metricNumber: "1.2K+",
        metricLabel: "Küratörlü Mazeret",
        gradient: "linear-gradient(145deg, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%)",
        accentColor: "#06B6D4",
      },
      {
        id: "spotlight_multi_themes",
        tag: "ÖNE ÇIKAN YETENEK 03",
        title: "12 Görsel Tema & OLED Siyah Modu",
        headline: "Her Işık Koşuluna Uyum Sağlayan Fütüristik Arayüz",
        description:
          "Pil tasarrufu sağlayan gerçek AMOLED siyahından neon siber arayüze kadar 12 benzersiz görsel kimlik ile mazeret üretiminizi keyifli hale getirin.",
        bulletPoints: [
          "Pitch Black OLED modu ile AMOLED ekranlarda %40'a varan pil tasarrufu",
          "Göz yormayan neon vurgular ve modern cam efektleri",
          "Uygulamayı yeniden başlatmadan tek dokunuşla tema değişimi",
          "Sistem gece/gündüz moduyla tam otomatik uyum",
        ],
        metricNumber: "12",
        metricLabel: "Özel Renk Teması",
        gradient: "linear-gradient(145deg, rgba(139, 92, 246, 0.18) 0%, rgba(16, 185, 129, 0.1) 100%)",
        accentColor: "#8B5CF6",
      },
    ],
    howToUse: [
      {
        stepNumber: "01",
        title: "Kategorini ve Yoğunluğu Belirle",
        description: "İş, Aşk, Trafik veya Sosyal kategorilerinden birini seçin; yoğunluğu Hafif veya Panik olarak ayarlayın.",
        tip: "Çok acil durumdaysanız telefonunuzu iki kez sallayın!",
      },
      {
        stepNumber: "02",
        title: "Kartları Kaydırarak Seç",
        description: "Tinder tarzı akışta kartları kaydırarak durumunuza en uygun olan gerçekçi mazereti bulun.",
        tip: "Sağa kaydırmak mazereti anında panoya kopyalar.",
      },
      {
        stepNumber: "03",
        title: "Tek Dokunuşla Paylaş veya Kurtul",
        description: "WhatsApp'tan gönderin veya sahte çağrı simülatörünü başlatarak ortamdan nezaketle ayrılın.",
        tip: "Arka plan siren veya metro ses efektlerini kullanabilirsiniz.",
      },
    ],
    whyChoose: [
      {
        title: "Sıfır Kayıt & 1 Saniyede Erişim",
        description: "Üyelik, e-posta veya şifre gerekmez. Uygulamayı açtığınız anda bahane üretmeye hazırsınız.",
        versusCompetitors: "Diğer araçlar kayıt ve kredi kartı isterken Excuse anında çalışır.",
        iconName: "Zap",
      },
      {
        title: "Gerçek İvmeölçer Sallama Modu",
        description: "Donanım sensörleri ile gizlice telefonunuzu sallayarak ekrana bakmadan kriz anında bahane üretebilirsiniz.",
        versusCompetitors: "Rakipler ekranda menü aramayı zorunlu kılarken Excuse tek hareketle tetiklenir.",
        iconName: "ShieldAlert",
      },
      {
        title: "%100 Çevrimdışı Çalışma Garantisi",
        description: "İnternetinizin çekmediği otoparklarda veya uçak modunda dahi tüm bahane kütüphanesine eksiksiz erişim.",
        versusCompetitors: "Bulut tabanlı uygulamalar internetsiz çalışmazken Excuse her zaman hazırdır.",
        iconName: "Globe",
      },
      {
        title: "12 Zengin Görsel Tema",
        description: "True OLED siyahı ve neon siber renkler dahil 12 farklı yüksek kaliteli tasarım modunu seçebilirsiniz.",
        versusCompetitors: "Sıradan uygulamalar sade ve reklam dolu tasarımlara sahipken Excuse estetik bir deneyim sunar.",
        iconName: "Sparkles",
      },
    ],
    faq: [
      {
        question: "Telefonu sallayarak mazeret üretme özelliği nasıl çalışır?",
        answer: "Cihazınızın ivmeölçer sensörünü dinleriz. Telefonunuzu belirli bir şiddette salladığınızda en kritik mazeret otomatik olarak panonuza kopyalanır ve hafif bir titreşimle haber verilir.",
        category: "Sensörler",
      },
      {
        question: "İnternetim olmadığında uygulama çalışır mı?",
        answer: "Evet, %100 çevrimdışı çalışır! Tüm bahane veri tabanı uygulamanın içine gömülüdür; uçak modunda dahi sorunsuz kullanabilirsiniz.",
        category: "Kullanım",
      },
      {
        question: "Ürettiğim mazeretler veya kişisel verilerim kaydediliyor mu?",
        answer: "Kesinlikle hayır. Excuse AI sıfır telemetri ilkesiyle çalışır; aramalarınız ve kopyalanan metinler sadece telefonunuzda kalır.",
        category: "Gizlilik",
      },
      {
        question: "Spring Boot backend entegrasyonu ne işe yarar?",
        answer: "İnternet bağlantınız olduğunda, backend API üzerinden yeni ve trend mazeretler arka planda güncellenerek yerel kütüphanenize eklenir.",
        category: "Mimari",
      },
      {
        question: "Bahaneyi düzenleyebilir miyim?",
        answer: "Evet! Beğendiğiniz mazeret kartına dokunarak kişi isimlerini, saatleri veya konumları göndermeden önce değiştirebilirsiniz.",
        category: "Özelleştirme",
      },
      {
        question: "Hangi platformlarda paylaşabilirim?",
        answer: "Tek tıkla panoya kopyalayabilir, WhatsApp, Telegram, iMessage veya E-posta üzerinden hazır şablonla gönderebilirsiniz.",
        category: "Paylaşım",
      },
    ],
  },
};

export const APPS_DETAILED_DATA_EN: Record<"astrovibe" | "excuse", DedicatedAppDetails> = {
  astrovibe: {
    id: "astrovibe",
    slug: "astrovibe",
    name: "AstroVibe",
    heroTagline: "Cosmic Astrology, 3D Tarot & Zodiac-Tailored Nail Art Style Guide",
    heroSubheadline:
      "Transform astrology from plain text into an editorial style and lifestyle experience. Discover custom nail art designs in a TikTok-style feed, and align your aura with interactive 3D tarot card spreads.",
    heroBadge: "Cosmic Style & Tarot v1.2",
    category: "Astrology, Fashion & Lifestyle",
    rating: 4.9,
    reviewsCount: "12.4K+",
    downloads: "50,000+",
    version: "v1.2.0",
    primaryColor: "#8B5CF6",
    secondaryColor: "#F59E0B",
    glowColor: "rgba(139, 92, 246, 0.45)",
    contactEmail: "astrovibe@wixtory.com",
    about: {
      badge: "Project Vision & Architecture",
      title: "Transforming Astrology into a Visual Lifestyle & Editorial Nail Art",
      subtitle: "Moving beyond conventional text horoscopes to merge aesthetics, custom nail art, and 3D mystic experiences on modern mobile tech.",
      story: "AstroVibe was conceived to transcend traditional, text-heavy astrology apps. We believe celestial cycles directly influence one's aesthetic identity, aura, and personal styling. With this vision, we unified TikTok-style vertical nail art feeds with immersive 3D interactive tarot readings into a sleek, modern mobile application.",
      mission: "Empowering every user to translate their cosmic resonance into tangible aesthetics—from press-on nail styles to crystal gemstone accessories.",
      targetAudience: "Zodiac enthusiasts, press-on nail stylists, fashion & beauty creators, and aesthetic-conscious mobile users wanting to express their vibe.",
      techHighlights: [
        {
          title: "Flutter 3.x & GPU Shaders",
          description: "Fluid vertical feeds with realistic 3D tarot card flipping physics.",
          icon: "Smartphone",
        },
        {
          title: "Private MinIO S3 Object Storage",
          description: "Hundreds of 4K nail art & jewelry media assets delivered under 120ms via Edge CDN caching.",
          icon: "HardDrive",
        },
        {
          title: "Strict Zero-Telemetry Privacy",
          description: "Birth chart calculations are processed locally on the device with zero server tracking.",
          icon: "ShieldCheck",
        },
      ],
      stats: [
        { label: "Curated Styles", value: "500+ Designs" },
        { label: "3D Tarot Deck", value: "78-Card Rider-Waite" },
        { label: "Edge CDN Response", value: "< 120ms" },
        { label: "User Satisfaction", value: "99.4%" },
      ],
    },
    features: [
      {
        id: "daily_horoscope",
        title: "Periodic Horoscope Forecasts",
        description: "Deep cosmic forecasts for love, career, finance, and wellness based on planetary transits and retrogrades.",
        badge: "Updated Daily",
        iconName: "MoonStar",
      },
      {
        id: "nail_art_feed",
        title: "TikTok-Style Vertical Nail Feed",
        description: "Full-screen vertical reels feed, double-tap heart animations, stylist tips, and endless circular looping showcases.",
        badge: "Trending Styles",
        iconName: "Sparkles",
      },
      {
        id: "jewelry_collection",
        title: "Gemstones & Jewelry Frequency",
        description: "A curated 4-part lifestyle catalog of necklaces, earrings, rings, and bracelets balancing your zodiac energy.",
        badge: "4 Collections",
        iconName: "Gem",
      },
      {
        id: "tarot_reading",
        title: "3D Interactive Tarot Spreads",
        description: "22 Major Arcana cards with upright and reversed interpretations, offering deep psychological and intuitive guidance.",
        badge: "3D Interactive",
        iconName: "Layers",
      },
      {
        id: "baby_names",
        title: "Cosmic Baby Names Guide",
        description: "Curated baby names categorized by zodiac elements, planetary harmony, and numerological vibration.",
        badge: "Endless Catalog",
        iconName: "Compass",
      },
      {
        id: "editorial_favorites",
        title: "Editorial Saved Favorites",
        description: "Save your favorite nail art and jewelry designs locally with offline caching and category sorting.",
        badge: "Offline Cache",
        iconName: "ShieldCheck",
      },
    ],
    keyFeatures: [
      {
        id: "spotlight_nail_art",
        tag: "STANDOUT CAPABILITY 01",
        title: "TikTok Vertical Nail Art Showcase",
        headline: "Cinematic Nail Art Feed Reflecting Your Zodiac Aura",
        description:
          "Browse custom almond, stiletto, and ballerina nail art tailored to your zodiac sign in cinematic 24px rounded editorial cards. Double-tap to send hearts and read stylist pairing tips.",
        bulletPoints: [
          "Hundreds of high-resolution original nail art styles for all 12 signs",
          "Seamless endless looping (returns to start smoothly)",
          "Stylist combination tips based on ruling planets and elements",
          "Instant toggle between TikTok vertical mode and list mode",
        ],
        metricNumber: "350+",
        metricLabel: "Original Nail Art Designs",
        gradient: "linear-gradient(145deg, rgba(139, 92, 246, 0.15) 0%, rgba(236, 72, 153, 0.08) 100%)",
        accentColor: "#EC4899",
      },
      {
        id: "spotlight_tarot",
        tag: "STANDOUT CAPABILITY 02",
        title: "3D Tap & Flip Tarot Experience",
        headline: "Align Your Daily Energy with Intuitive Tarot Spreads",
        description:
          "Experience the vibrations of 22 Major Arcana cards based on authentic Rider-Waite symbolism. Tap to flip cards in 3D and receive profound guidance.",
        bulletPoints: [
          "Realistic 3D Matrix4 card flip and celestial shimmer physics",
          "Single daily card draw and 3-card Past-Present-Future spread",
          "In-depth insights into love, career, money, and inner balance",
          "Reshuffle & redraw button to flip cards back and start fresh",
        ],
        metricNumber: "22",
        metricLabel: "Major Arcana Cards",
        gradient: "linear-gradient(145deg, rgba(245, 158, 11, 0.15) 0%, rgba(217, 119, 6, 0.08) 100%)",
        accentColor: "#F59E0B",
      },
      {
        id: "spotlight_cosmic_engine",
        tag: "STANDOUT CAPABILITY 03",
        title: "Planetary Transits & Energy Dashboard",
        headline: "Personalized Energy Dashboard & Astrological Forecasts",
        description:
          "Calculate your element, ruling planet, lucky numbers, and daily cosmic power bars in real time based on active planetary positions.",
        bulletPoints: [
          "100% accurate sign calculation across transition boundary dates",
          "Device-level private computation without transmitting personal data",
          "Multilingual global localization across 11 languages",
          "Guaranteed offline functionality even without internet connection",
        ],
        metricNumber: "100%",
        metricLabel: "Privacy & Energy Accuracy",
        gradient: "linear-gradient(145deg, rgba(139, 92, 246, 0.18) 0%, rgba(79, 70, 229, 0.1) 100%)",
        accentColor: "#8B5CF6",
      },
    ],
    howToUse: [
      {
        stepNumber: "01",
        title: "Select Your Birth Date",
        description: "Set your birth date when launching the app. Your zodiac sign, element, and ruling planet are calculated automatically.",
        tip: "You can switch your sign anytime from the top bar.",
      },
      {
        stepNumber: "02",
        title: "Get Your Daily Forecast & Tarot Reading",
        description: "Check your daily aura score on the home view and tap to flip cards in the 3D tarot chamber.",
        tip: "Choose between single card or 3-card spread.",
      },
      {
        stepNumber: "03",
        title: "Explore TikTok Nail Art & Jewelry",
        description: "Browse custom nail designs tailored to your sign in a TikTok-style vertical feed.",
        tip: "Double-tap any image to trigger bursting heart animations!",
      },
    ],
    whyChoose: [
      {
        title: "Visual & Editorial Lifestyle Focus",
        description: "Instead of overwhelming text-heavy horoscopes, AstroVibe connects astrology with modern beauty, fashion, and daily inspiration.",
        versusCompetitors: "Competitors only show boring text; AstroVibe delivers visual TikTok reels.",
        iconName: "Sparkles",
      },
      {
        title: "Realistic 3D Tactile Physics",
        description: "Our custom Matrix4 animation engine replicates the physical touch and sound of drawing and flipping real tarot cards.",
        versusCompetitors: "Generic apps display static flat cards without real 3D depth.",
        iconName: "Zap",
      },
      {
        title: "MinIO S3 Instant CDN Streaming",
        description: "High-resolution nail art images are compressed in WebP and cached locally on your device for zero-lag scrolling.",
        versusCompetitors: "Other apps suffer from slow image loads and blurry photos.",
        iconName: "Smartphone",
      },
      {
        title: "Privacy First & Ad-Free Experience",
        description: "Your birth date and saved favorites are stored locally on your device with zero invasive tracking.",
        versusCompetitors: "Alternative apps bombard you with banner ads and collect personal telemetry.",
        iconName: "ShieldCheck",
      },
    ],
    faq: [
      {
        question: "Is AstroVibe available for both iOS and Android?",
        answer: "Yes, AstroVibe is built natively with Flutter 3.x and delivers smooth performance on both Apple iOS and Android.",
        category: "Platform",
      },
      {
        question: "How does the 3D Tarot flip card animation work?",
        answer: "We use a customized Matrix4 perspective transformation engine. Tapping a card rotates it 180 degrees with smooth shadow and light physics, revealing the card's upright or reversed meaning.",
        category: "Features",
      },
      {
        question: "Where do the nail art photos come from?",
        answer: "Our editorial styling team curates zodiac-tailored nail designs and hosts them on an S3-compatible MinIO object storage CDN with localized disk caching.",
        category: "Content",
      },
      {
        question: "Can I use the app offline?",
        answer: "Yes! All horoscope algorithms, tarot decks, and previously browsed styles are cached locally on your device for full offline access.",
        category: "Technical",
      },
      {
        question: "How often are the horoscopes and nail trends updated?",
        answer: "Daily astrological transits update every morning at 00:00 UTC, while new nail art trends and jewelry collections drop weekly.",
        category: "Updates",
      },
      {
        question: "Are my favorites backed up?",
        answer: "Your favorite items are saved securely in your device's encrypted local storage with one-tap export and sharing options.",
        category: "Security",
      },
    ],
  },
  excuse: {
    id: "excuse",
    slug: "excuse",
    name: "Excuse AI",
    heroTagline: "AI-Powered Life-Saving Excuse & Emergency Escape Simulator",
    heroSubheadline:
      "Escape awkward meetings, dragging dates, or unexpected crises with convincing, proof-backed AI excuses and simulated emergency phone calls.",
    heroBadge: "AI Panic Engine v1.0",
    category: "Productivity, Utilities & Humor",
    rating: 4.8,
    reviewsCount: "8.9K+",
    downloads: "25,000+",
    version: "v1.0.0",
    primaryColor: "#10B981",
    secondaryColor: "#06B6D4",
    glowColor: "rgba(16, 185, 129, 0.45)",
    contactEmail: "excuse@wixtory.com",
    about: {
      badge: "Project Vision & Architecture",
      title: "Your Diplomatic Intelligent Assistant to Protect Time and Boundaries",
      subtitle: "Preventing social burnout and providing elegant, respectful escape routes during awkward moments with zero cloud telemetry.",
      story: "In today's fast-paced corporate and social environments, unexpected crises, endless meetings, and awkward commitments often cause unnecessary stress. Excuse AI was built on behavioral psychology principles to provide polished, respectful, and unquestionable excuses and fake incoming calls that gracefully resolve delicate situations without damaging relationships.",
      mission: "Reclaiming personal space, mental bandwidth, and your most valuable asset—time—with a single confidential tap.",
      targetAudience: "Corporate professionals, team leads, remote workers experiencing meeting fatigue, students, and anyone needing a discreet emergency exit plan.",
      techHighlights: [
        {
          title: "100% Offline SQLite Architecture",
          description: "Access thousands of structured excuses categorized across 9 languages with zero latency and no internet connection required.",
          icon: "Database",
        },
        {
          title: "Real-Time Fake Call & Audio Simulator",
          description: "Schedule incoming phone calls with realistic background proof audio such as police dispatch, sirens, airport, or subway.",
          icon: "PhoneCall",
        },
        {
          title: "Zero-Telemetry & Confidentiality",
          description: "No generated, copied, or modified excuses are ever logged to external servers. Your privacy remains 100% safeguarded.",
          icon: "Lock",
        },
      ],
      stats: [
        { label: "Curated Scenarios", value: "1,200+ Presets" },
        { label: "Audio Proof Profiles", value: "18 Soundscapes" },
        { label: "Offline Capability", value: "100% Offline" },
        { label: "Emergency Speed", value: "< 2 Seconds" },
      ],
    },
    features: [
      {
        id: "panic_shake",
        title: "Shake-to-Excuse Panic Mode",
        description: "Shake your phone for 2 seconds to instantly trigger an urgent crisis excuse via your accelerometer.",
        badge: "Shake Sensor",
        iconName: "ShieldAlert",
      },
      {
        id: "swipe_deck",
        title: "Tinder-Style Swipe Interface",
        description: "Swipe right to favorite and copy an excuse to clipboard; swipe left to skip to the next candidate.",
        badge: "Swipe UI",
        iconName: "Flame",
      },
      {
        id: "theme_engine",
        title: "12 Dynamic Visual Themes",
        description: "Switch between Cyber Neon, Pitch Black OLED, Deep Purple, and Ocean Breeze for full visual comfort.",
        badge: "12 Themes",
        iconName: "Layers",
      },
      {
        id: "categories_pool",
        title: "9 Thematic Category Vaults",
        description: "Curated excuses for Work & Office, Dating, Family, Traffic, Social gatherings, Health, and Emergencies.",
        badge: "9 Categories",
        iconName: "Bot",
      },
      {
        id: "intensity_levels",
        title: "3 Urgency Levels",
        description: "Choose between Mild (minor delay), Moderate (priority shift), and Urgent (immediate exit required).",
        badge: "3 Levels",
        iconName: "Volume2",
      },
      {
        id: "offline_first",
        title: "100% Offline-First Architecture",
        description: "Access thousands of excuses in 9 languages without needing an active internet connection.",
        badge: "100% Offline",
        iconName: "Globe",
      },
    ],
    keyFeatures: [
      {
        id: "spotlight_shake_sensor",
        tag: "STANDOUT CAPABILITY 01",
        title: "Accelerometer Panic Shake Trigger",
        headline: "Shake Your Device and Escape in Seconds",
        description:
          "When trapped in a conversation you cannot politely interrupt, discreetly shake your phone in your pocket. The sensor triggers an instant urgent scenario with haptic feedback.",
        bulletPoints: [
          "Customizable accelerometer sensitivity threshold",
          "Instant copy to clipboard with vibration confirmation",
          "Works in locked screen and background mode",
          "Leaves zero suspicious history on your device",
        ],
        metricNumber: "< 1s",
        metricLabel: "Panic Generation Speed",
        gradient: "linear-gradient(145deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%)",
        accentColor: "#10B981",
      },
      {
        id: "spotlight_swipe_deck",
        tag: "STANDOUT CAPABILITY 02",
        title: "Tinder-Style Excuse Swipe Deck",
        headline: "Swipe Through Curated Escape Scenarios Effortlessly",
        description:
          "Find the most convincing excuse in seconds using intuitive gesture navigation. Swipe right to copy, swipe left to pass, or tap to customize wording.",
        bulletPoints: [
          "Smooth physics card stack navigation",
          "Instant 1-tap copy to WhatsApp, Messages, or Email",
          "Category and urgency filtering on the fly",
          "Favorites collection for recurring emergency situations",
        ],
        metricNumber: "1.2K+",
        metricLabel: "Curated Excuses",
        gradient: "linear-gradient(145deg, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%)",
        accentColor: "#06B6D4",
      },
      {
        id: "spotlight_multi_themes",
        tag: "STANDOUT CAPABILITY 03",
        title: "12 Visual Themes & OLED Black Mode",
        headline: "Ultra-Sleek Aesthetic Adapting to Any Lighting",
        description:
          "Personalize your emergency console with 12 handcrafted color palettes, including battery-saving True OLED pitch black and Cyber Neon.",
        bulletPoints: [
          "Pitch Black OLED mode saves up to 40% battery on AMOLED screens",
          "Subtle neon glowing accents and glassmorphic cards",
          "Seamless instant theme switching without restarting the app",
          "System dark/light auto-match support",
        ],
        metricNumber: "12",
        metricLabel: "Curated Visual Themes",
        gradient: "linear-gradient(145deg, rgba(139, 92, 246, 0.18) 0%, rgba(16, 185, 129, 0.1) 100%)",
        accentColor: "#8B5CF6",
      },
    ],
    howToUse: [
      {
        stepNumber: "01",
        title: "Pick Category & Urgency",
        description: "Select from Work, Social, Traffic, or Dating, and set urgency from Mild to Critical Panic.",
        tip: "Need an immediate escape? Just shake your phone twice!",
      },
      {
        stepNumber: "02",
        title: "Swipe to Find the Perfect Excuse",
        description: "Flip through cards Tinder-style to preview realistic scenarios tailored to your situation.",
        tip: "Swipe right to copy immediately to your clipboard.",
      },
      {
        stepNumber: "03",
        title: "Send via WhatsApp or Fake a Call",
        description: "Paste the pre-formatted text or trigger a simulated incoming call to exit gracefully.",
        tip: "Includes background audio sound effects like sirens or subway noise.",
      },
    ],
    whyChoose: [
      {
        title: "Zero Friction & No Sign-Up",
        description: "No account, no login, no email required. Open the app and escape within 1 second.",
        versusCompetitors: "Other tools demand account creation and credit card info; Excuse is instant.",
        iconName: "Zap",
      },
      {
        title: "Hardware-Backed Shake Sensor",
        description: "Our panic mode listens to device accelerometer gestures for true discreet activation.",
        versusCompetitors: "Competitors require opening menus and typing manual searches.",
        iconName: "ShieldAlert",
      },
      {
        title: "100% Offline Capability",
        description: "Thousands of verified excuses are preloaded locally on your device for guaranteed connectivity-free peace of mind.",
        versusCompetitors: "Cloud-only apps fail when you lose signal in basements or parking lots.",
        iconName: "Globe",
      },
      {
        title: "12 Handcrafted Themes & OLED Black",
        description: "Enjoy premium cyber-grade visuals with true pitch black OLED modes for discreet night usage.",
        versusCompetitors: "Generic apps look like spreadsheets with blinding white ads.",
        iconName: "Sparkles",
      },
    ],
    faq: [
      {
        question: "How does the Shake-to-Excuse feature work?",
        answer: "We utilize device motion sensors (accelerometer). When you shake your phone with a distinct force, it triggers an instant urgent excuse and copies it to your clipboard with haptic feedback.",
        category: "Sensors",
      },
      {
        question: "Does the app work without internet?",
        answer: "Yes, 100%! All core excuse databases are packaged locally within the app in 9 languages, so you can escape situations even in airplane mode.",
        category: "Usage",
      },
      {
        question: "Are my generated excuses or data tracked?",
        answer: "No. Excuse AI has a strict zero-telemetry policy. Your searches, copied texts, and favorites stay encrypted on your device and are never sent to external servers.",
        category: "Privacy",
      },
      {
        question: "How does the backend integration work?",
        answer: "When online, the app can optionally sync new seasonal excuses from our lightweight Spring Boot API to keep your database fresh.",
        category: "Architecture",
      },
      {
        question: "Can I customize the wording of an excuse?",
        answer: "Yes! Tapping any excuse card allows you to tweak names, times, and locations before copying or sharing.",
        category: "Customization",
      },
      {
        question: "What formats can I share excuses in?",
        answer: "You can copy directly to clipboard, share formatted text to WhatsApp, Telegram, and SMS, or trigger a simulated timer-based fake incoming call.",
        category: "Sharing",
      },
    ],
  },
};

export const APPS_DETAILED_DATA = APPS_DETAILED_DATA_TR;

const APPS_DETAIL_MAP: Partial<Record<LanguageCode, Record<"astrovibe" | "excuse", DedicatedAppDetails>>> = {
  tr: APPS_DETAILED_DATA_TR,
  en: APPS_DETAILED_DATA_EN,
};

export function getLocalizedAppDetails(appId: "astrovibe" | "excuse", language: LanguageCode): DedicatedAppDetails {
  const localized = APPS_DETAIL_MAP[language]?.[appId];
  if (localized) return localized;
  return APPS_DETAIL_MAP.en?.[appId] || APPS_DETAIL_MAP.tr![appId];
}

