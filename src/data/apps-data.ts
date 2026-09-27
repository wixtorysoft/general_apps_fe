export interface AppFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface AppWhyUse {
  title: string;
  problem: string;
  solution: string;
  iconName: string;
}

export interface AppBenefit {
  title: string;
  desc: string;
  statNumber: string;
  statLabel: string;
}

export interface AppShowcaseTab {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  badge: string;
  accentColor: string;
  tags: string[];
  mockupContent: {
    heading: string;
    subheading: string;
    details: string[];
    gradient: string;
    previewType: "card" | "feed" | "wheel" | "horoscope";
  };
}

export interface AppModel {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  badge: string;
  version: string;
  rating: number;
  reviewsCount: string;
  downloads: string;
  primaryColor: string;
  secondaryColor: string;
  glowColor: string;
  contactEmail: string;
  storeLinks: {
    appStore?: string;
    playStore?: string;
    webDemo?: string;
  };
  whyUse: AppWhyUse[];
  benefits: AppBenefit[];
  features: AppFeature[];
  showcaseTabs: AppShowcaseTab[];
  privacyHighlights: string[];
}

export const APPS_DATA: AppModel[] = [
  {
    id: "astrovibe",
    slug: "astrovibe",
    name: "AstroVibe",
    tagline: "Kozmik Astroloji, Tarot & Burca Özel Stil Rehberi",
    shortDesc: "Yıldızların rehberliğinde günlük burç yorumları, 3D tarot açılımları, protez tırnak ve mücevher koleksiyonları.",
    fullDesc:
      "AstroVibe, astrolojiyi salt metin tahminlerinden çıkarıp modern bir yaşam tarzı ve görsel editoryal deneyimine dönüştürür. Burcunuzun elementine, yönetici gezegenine ve enerjisine uygun protez tırnak tasarımlarını TikTok akışında keşfedin; 22 majör kartlı mistik tarot seanslarıyla enerjinizi anında hizalayın.",
    category: "Astroloji, Moda & Yaşam Tarzı",
    badge: "Kozmik Stil & Tarot",
    version: "v1.2.0",
    rating: 4.9,
    reviewsCount: "12.4K",
    downloads: "50.000+",
    primaryColor: "#8B5CF6",
    secondaryColor: "#F59E0B",
    glowColor: "rgba(139, 92, 246, 0.45)",
    contactEmail: "astrovibe@wixtory.com",
    storeLinks: {
      appStore: "#",
      playStore: "#",
      webDemo: "#",
    },
    whyUse: [
      {
        title: "Monoton Burç Metinlerinden Kurtulun",
        problem: "Geleneksel astroloji uygulamaları sıkıcı, uzun ve ruhsuz metin blokları sunar.",
        solution: "AstroVibe, burcunuzun enerjisini sinematik renk geçişleri, şık kartlar ve günlük kozmik tüyolarla görsel bir şölene dönüştürür.",
        iconName: "Sparkles",
      },
      {
        title: "Burcunuza Özel Stil & Nail Art Bulun",
        problem: "Özel bir davet veya günlük hayat için stilinize uygun tırnak veya takı konsepti bulmak zaman alır.",
        solution: "12 burca özel badem, stiletto ve oval formlu yüzlerce protez tırnak tasarımını ve doğal taşlı takı koleksiyonlarını TikTok dikey akışında gezinin.",
        iconName: "Palette",
      },
      {
        title: "Anında Karar & Mistik Rehberlik",
        problem: "Zihniniz karmaşıkken ve kararsız kaldığınızda hızlı ve sezgisel bir içgörüye ihtiyaç duyarsınız.",
        solution: "Tek dokunuşla çevrilen 3D kart animasyonlu günlük tekli ve 3'lü Tarot açılımı ile bilinçaltı rehberliğinizi anında alın.",
        iconName: "Compass",
      },
    ],
    benefits: [
      {
        title: "Kişiselleştirilmiş Kozmik Profil",
        desc: "Doğum tarihinize göre burç, element ve yönetici gezegeniniz anında analiz edilir.",
        statNumber: "%100",
        statLabel: "Bireysel Uyum",
      },
      {
        title: "Görsel Stil İlhamı",
        desc: "Burcunuzun aurasını yansıtan protez tırnak, kolye, küpe, yüzük ve bileklik katalogları.",
        statNumber: "350+",
        statLabel: "Özgün Tasarım",
      },
      {
        title: "5 Dilli Küresel Deneyim",
        desc: "Türkçe, İngilizce, Almanca, İspanyolca ve Fransızca eksiksiz çeviri altyapısı.",
        statNumber: "5",
        statLabel: "Dil Desteği",
      },
      {
        title: "Hafif ve Ultra Hızlı",
        desc: "Offline önbellekleme ve optimize görsellerle sıfır bekleme süresi.",
        statNumber: "<0.1s",
        statLabel: "Tepki Süresi",
      },
    ],
    features: [
      {
        id: "horoscope",
        title: "Periyodik Burç Yorumları",
        description: "Aşk, kariyer, para ve sağlık alanlarında günlük, haftalık, aylık ve yıllık derinlemesine kozmik rehberlik.",
        iconName: "MoonStar",
        badge: "Günlük Yenilenen",
      },
      {
        id: "nail_art",
        title: "TikTok Dikey Protez Tırnak Akışı",
        description: "Tam ekran dikey kaydırma, çift tıklamayla kalp efekti, stilist ipuçları ve sonsuz döngü modu.",
        iconName: "Brush",
        badge: "Trend Görseller",
      },
      {
        id: "jewelry",
        title: "Mücevher & Burç Taşları",
        description: "Doğal taşlar, 14K altın kaplama zincirler ve burç auranızı güçlendiren editoryal takı serileri.",
        iconName: "Gem",
        badge: "4 Koleksiyon",
      },
      {
        id: "tarot",
        title: "3D Çevrilen Tarot Kartları",
        description: "Rider-Waite 22 Majör Arkana kartının ters/düz anlamları, derin aşk ve kariyer açılımları.",
        iconName: "Layers",
        badge: "Mistik Seans",
      },
      {
        id: "baby_names",
        title: "Kozmik Bebek İsimleri Rehberi",
        description: "Burç enerjisi ve numerolojik uyuma göre kız, erkek ve unisex anlamlı isim önerileri.",
        iconName: "HeartHandshake",
        badge: "Sonsuz Sayfalama",
      },
      {
        id: "favorites",
        title: "Editoryal Favoriler Galerisi",
        description: "Beğendiğiniz tüm tırnak modelleri ve kolyeleri kategorize ederek offline saklayabileceğiniz şık kütüphane.",
        iconName: "BookmarkCheck",
        badge: "Offline Cache",
      },
    ],
    showcaseTabs: [
      {
        id: "nails_showcase",
        label: "Protez Tırnak",
        title: "Kozmik Nail Art Deneyimi",
        subtitle: "Burcunuzun aurasına uygun badem, stiletto ve balerin formları",
        badge: "Dikey Swipe",
        accentColor: "#EC4899",
        tags: ["French Glam", "Altın Varak", "Minimalist Kozmik", "Neon Gece"],
        mockupContent: {
          heading: "Kozmik Altın Parıltısı",
          subheading: "Koç Burcu · Ateş Elementi Enerjisi",
          details: [
            "✨ Güçlü ve cesur stiletto tırnak yapısı",
            "💎 Yıldız tozu ışıltılı altın varak geçişler",
            "💡 Stilist İpucu: Altın tonlu eklem yüzükleriyle kusursuz kombin",
          ],
          gradient: "linear-gradient(145deg, #180d24 0%, #30103b 50%, #4a154b 100%)",
          previewType: "feed",
        },
      },
      {
        id: "tarot_showcase",
        label: "Tarot Kartı",
        title: "3D İnteraktif Tarot Açılımı",
        subtitle: "Günün enerjisini kartınızı seçerek anında keşfedin",
        badge: "Kart Çevir",
        accentColor: "#F59E0B",
        tags: ["22 Majör Arkana", "Aşk & Kariyer", "Bilinçaltı İçgörü"],
        mockupContent: {
          heading: "Büyücü (The Magician)",
          subheading: "Kart No: I · İrade & Yaratım Gücü",
          details: [
            "🔮 Elinizdeki tüm kaynakları kullanma vakti",
            "⭐ Zihinsel netlik ve yeni bir döngünün başlangıcı",
            "🔑 'İstediğin değişimi başlatacak güç senin içinde.'",
          ],
          gradient: "linear-gradient(145deg, #1f1406 0%, #362208 50%, #523407 100%)",
          previewType: "card",
        },
      },
      {
        id: "horoscope_showcase",
        label: "Burç Analizi",
        title: "Derinlemesine Kozmik Yorumlar",
        subtitle: "Gezegen transitleri ve retro dönemlerine göre özel tahminler",
        badge: "Aura Skoru",
        accentColor: "#8B5CF6",
        tags: ["Gezegen Hareketleri", "Aura Skoru: 94%", "Şanslı Sayı: 7"],
        mockupContent: {
          heading: "Bugün Kozmik Enerjin Zirvede",
          subheading: "Güneş & Jüpiter Üçgeni Etkisi",
          details: [
            "❤️ Aşk: Karşılıklı anlayış ve tutkulu konuşmalar",
            "💼 Kariyer: Bekleyen projelerde beklenmedik hızlanma",
            "🌿 Enerji: Yüksek yaratıcılık ve içsel dinginlik",
          ],
          gradient: "linear-gradient(145deg, #100a26 0%, #201347 50%, #351a6e 100%)",
          previewType: "horoscope",
        },
      },
    ],
    privacyHighlights: [
      "Kişisel doğum tarihiniz yalnızca burç hesaplaması için cihazınızda yerel saklanır.",
      "Kamera veya galeri erişimi sadece stil/tırnak görseli yüklemek isterseniz talep edilir.",
      "Verileriniz üçüncü şahıslara veya reklam ağlarına ASLA satılmaz.",
    ],
  },
  {
    id: "excuse",
    slug: "excuse",
    name: "Excuse",
    tagline: "Hayatın Her Anı İçin Zeki, Yaratıcı & Eğlenceli Bahanematik",
    shortDesc: "Toplantıya geç kaldığınızda veya istemediğiniz davetleri diplomatikçe savuşturmak istediğinizde yanınızda.",
    fullDesc:
      "Excuse, hayatın beklenmedik anlarında imdadınıza koşan akıllı ve yaratıcı bahanematik uygulamasıdır. İster iş yerinde yöneticiye, ister arkadaş grubuna, ister aileye karşı olsun; durumunuza ve aradığınız ciddiyet tonuna göre en ikna edici bahaneyi saniyeler içinde sunar.",
    category: "Verimlilik, Sosyal İletişim & Eğlence",
    badge: "Zeki Yaşam Asistanı",
    version: "v1.4.2",
    rating: 4.8,
    reviewsCount: "18.9K",
    downloads: "100.000+",
    primaryColor: "#06B6D4",
    secondaryColor: "#10B981",
    glowColor: "rgba(6, 182, 212, 0.45)",
    contactEmail: "excuse@wixtory.com",
    storeLinks: {
      appStore: "#",
      playStore: "#",
      webDemo: "#",
    },
    whyUse: [
      {
        title: "Nazikçe 'Hayır' Demenin En Zeki Yolu",
        problem: "İstemediğiniz bir buluşmaya veya fazladan iş yüküne kırıcı olmadan nasıl 'hayır' diyeceğinizi bilemezsiniz.",
        solution: "Excuse, karşınızdakini incitmeden, diplomatik, profesyonel veya esprili mazeretleri tek tuşla üretir.",
        iconName: "ShieldCheck",
      },
      {
        title: "Klişe Bahanelerin Ötesine Geçin",
        problem: "'Trafik vardı', 'alarm çalmadı' gibi klişe bahaneler artık kimseye inandırıcı gelmez.",
        solution: "Kategori bazlı (Trafik, Sağlık, Acil Aile Durumu, Evcil Hayvan, Dijital Arıza) akıl almaz inandırıcılıkta yüzlerce özgün senaryo sunar.",
        iconName: "Zap",
      },
      {
        title: "Sosyal Stresten ve Zaman Kaybından Korunun",
        problem: "Gitmeyi istemediğiniz ortamlarda harcanan saatler motivasyonunuzu ve enerjinizi tüketir.",
        solution: "Kendinize zaman ayırın! Durumunuzu özetleyen bahaneyi tek dokunuşla WhatsApp veya SMS ile paylaşın.",
        iconName: "Smile",
      },
    ],
    benefits: [
      {
        title: "Anında Kurtarıcı Çözümler",
        desc: "Saniyeler içinde durumunuza en uygun kurtarıcı mazereti ekrana getirir.",
        statNumber: "< 2 sn",
        statLabel: "Bahane Bulma Hızı",
      },
      {
        title: "Geniş Senaryo Havuzu",
        desc: "İş, okul, sevgili, aile ve acil durumlar için kategorize edilmiş yüzlerce içerik.",
        statNumber: "1.200+",
        statLabel: "Aktif Bahane",
      },
      {
        title: "12 Farklı Tasarım Teması",
        desc: "Cyber Neon, Pitch Black, Ocean Breeze ve Forest Night dahil 12 renk modu.",
        statNumber: "12",
        statLabel: "Zengin Tema",
      },
      {
        title: "Tamamen Çevrimdışı Çalışma",
        desc: "Metroda, uçakta veya internetin çekmediği her yerde kesintisiz kullanım.",
        statNumber: "%100",
        statLabel: "Offline Destek",
      },
    ],
    features: [
      {
        id: "categories",
        title: "Duruma Göre Kategoriler",
        description: "İş toplantısı, arkadaş partisi, aile ziyareti, randevu ve okul için özel filtreler.",
        iconName: "FolderKanban",
        badge: "10+ Kategori",
      },
      {
        id: "swipe_deck",
        title: "Tinder Tarzı Swipe Kartları",
        description: "Sağa kaydırarak beğendiğiniz bahaneleri koleksiyonunuza ekleyin, sola kaydırıp yenisini görün.",
        iconName: "Layers",
        badge: "Kaydır & Seç",
      },
      {
        id: "roulette_wheel",
        title: "Şans Çarkı / Rastgele Bahane Çarkı",
        description: "Kararsız kaldığınızda çarkı çevirin; algoritma o anki durumunuz için en uygun bahaneyi seçsin.",
        iconName: "RotateCcw",
        badge: "Çarkı Çevir",
      },
      {
        id: "collections",
        title: "Kişisel Bahane Koleksiyonları",
        description: "Geçmişte işe yarayan 'efsanevi bahanelerinizi' favori listenize kaydedip etiketleyin.",
        iconName: "Heart",
        badge: "Koleksiyonlar",
      },
      {
        id: "one_click_share",
        title: "Tek Dokunuşla WhatsApp / SMS Paylaşımı",
        description: "Üretilen bahaneyi anında kopyalayın veya doğrudan mesajlaşma uygulamanıza aktarın.",
        iconName: "Share2",
        badge: "Hızlı Paylaşım",
      },
      {
        id: "ai_generator",
        title: "Yapay Zeka Destekli Kişiselleştirme",
        description: "Kişi adını ve mekanı yazın, duruma özel nokta atışı hikaye oluştursun.",
        iconName: "Bot",
        badge: "Akıllı Motor",
      },
    ],
    showcaseTabs: [
      {
        id: "work_excuse",
        label: "İş & Toplantı",
        title: "Profesyonel & Diplomatik Mazeretler",
        subtitle: "Yöneticiniz veya müşterinizle aranızı bozmadan zaman kazandıran bahaneler",
        badge: "Kurumsal Ton",
        accentColor: "#06B6D4",
        tags: ["Acil Sunucu Güncellemesi", "VPN Güvenlik Arızası", "Müşteri Acil Çağrısı"],
        mockupContent: {
          heading: "Kritik Müşteri Görüşmesi",
          subheading: "Ton: Profesyonel · Başarı Oranı: %96",
          details: [
            "👔 'Yurt dışı merkezli ana paydaşımızla acil durum çağrısına girmem gerekti.'",
            "📊 'Toplantı notlarını gün sonunda inceleyip geri bildirimimi yazılı ileteceğim.'",
            "🚀 Tek tıkla Slack & E-posta formatında hazırlandı",
          ],
          gradient: "linear-gradient(145deg, #071927 0%, #0d2f47 50%, #114364 100%)",
          previewType: "card",
        },
      },
      {
        id: "social_excuse",
        label: "Sosyal & Parti",
        title: "Arkadaş Davetlerini Kibarca Erteleme",
        subtitle: "Kimseyi kırmadan, sempatik ve doğal bahanelerle evde dinlenme fırsatı",
        badge: "Sosyal Kurtarıcı",
        accentColor: "#10B981",
        tags: ["Kedi Mama Saati", "Şarj Bitti", "Beklenmeyen Misafir"],
        mockupContent: {
          heading: "Ailevi Sürpriz Ziyaret",
          subheading: "Ton: Samimi & Masum · Başarı Oranı: %98",
          details: [
            "🍕 'Kuzenim haber vermeden şehre geldi, bu akşam onu yalnız bırakamıyorum!'",
            "❤️ 'Hafta sonu kahvesi benden, mutlaka telafi edelim.'",
            "📱 Doğrudan WhatsApp hazır mesajı olarak gönder",
          ],
          gradient: "linear-gradient(145deg, #06221a 0%, #0c3b2e 50%, #125542 100%)",
          previewType: "feed",
        },
      },
      {
        id: "wheel_excuse",
        label: "Şans Çarkı",
        title: "Kararsızlar İçin Bahane Ruleti",
        subtitle: "Bırakın çark sizin yerinize en eğlenceli bahaneyi saniyeler içinde seçsin",
        badge: "İnteraktif Çark",
        accentColor: "#F59E0B",
        tags: ["Rastgele Mod", "Günün Şansı", "Absürt Bahaneler"],
        mockupContent: {
          heading: "Bahanematik Çarkı Durdu!",
          subheading: "Kategori: Beklenmeyen Ev Kazası",
          details: [
            "🔑 'Anahtarı içeride unuttum, çilingirin gelmesini kapıda bekliyorum.'",
            "🎲 İkna Edicilik Skoru: 9.4 / 10",
            "🔄 Yeniden Çevir tuşuyla anında başka bir alternatif çek",
          ],
          gradient: "linear-gradient(145deg, #241403 0%, #442405 50%, #633306 100%)",
          previewType: "wheel",
        },
      },
    ],
    privacyHighlights: [
      "Ürettiğiniz veya favorilediğiniz hiçbir bahane sunuculara gönderilmez; tamamen cihazınızda kalır.",
      "Kişi adları veya özel mesaj içerikleri asla toplanmaz ve izlenmez.",
      "İnternet bağlantısı olmasa dahi %100 gizlilikle yerel çalışır.",
    ],
  },
];
