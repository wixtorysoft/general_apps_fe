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
  logoUrl?: string;
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
    id: "language-box",
    slug: "language-box",
    name: "Wixtory Language Box",
    tagline: "Oyun Temelli İnteraktif Çok Dilli Öğrenme & Kelime Dağarcığı Kutusu",
    shortDesc: "6 farklı eğlenceli ve etkileşimli oyun ile yeni dilleri kolayca keşfedin, kelime ve gramer becerilerinizi yerel önbellek güvencesiyle geliştirin.",
    fullDesc:
      "Wixtory Language Box, dil öğrenimini sıkıcı dersler yerine heyecan verici mini oyunlara dönüştüren yeni nesil bir mobil eğitim uygulamasıdır. Sentence Builder, Scrambled Word, Word Compass, Word Matrix, Dinleme ve Konuşma pratikleri gibi 6 oyun modu ile kelime dağarcığınızı pekiştirir. Tüm oyun ilerlemeniz ve istatistikleriniz yalnızca cihazınızın önbelleğinde güvenle tutulur; üyelik ve kişisel bilgi paylaşımı gerekmez.",
    category: "Eğitim & Dil Öğrenme",
    badge: "#1 Dil & Kelime Oyunları",
    logoUrl: "/apps/language-box-icon.png",
    version: "v1.2.0",
    rating: 4.9,
    reviewsCount: "3.4K",
    downloads: "20.000+",
    primaryColor: "#10B981",
    secondaryColor: "#06B6D4",
    glowColor: "rgba(16, 185, 129, 0.45)",
    contactEmail: "wixtoryy@gmail.com",
    storeLinks: {
      appStore: "https://apps.apple.com/tr/app/wixtory-language-box/id6761607811",
      playStore: "https://play.google.com/store/apps/details?id=com.wixbook.language_box",
      webDemo: "/language-box",
    },
    whyUse: [
      {
        title: "6 Etkileşimli Oyun ile Doğal Öğrenme",
        problem: "Geleneksel kelime ezberi çabuk unutulur ve motivasyon kaybına yol açar.",
        solution: "Sentence Builder, Word Matrix ve Word Compass gibi 6 dinamik oyun moduyla kalıcı öğrenme sağlar.",
        iconName: "Gamepad2",
      },
      {
        title: "%100 Cihaz İçi Gizlilik & Sıfır Üyelik",
        problem: "Çoğu eğitim uygulaması e-posta, telefon ve kişisel profil oluşturmayı zorunlu kılar.",
        solution: "Language Box'ta üyelik yoktur. Oyun skorlarınız ve seviyeniz yalnızca cihazınızın yerel önbelleğinde saklanır.",
        iconName: "Shield",
      },
      {
        title: "Çok Dilli Küresel Deneyim",
        problem: "Yalnızca İngilizceye sıkışan uygulamalar farklı dilleri keşfetmeyi sınırlar.",
        solution: "Türkçe, İngilizce, Almanca, İspanyolca, Fransızca dahil geniş dil desteği ve çift yönlü alıştırmalar.",
        iconName: "Globe",
      },
    ],
    benefits: [
      {
        title: "6 Özgün Mini Oyun",
        desc: "Farklı zeka ve hafıza becerilerine hitap eden 6 ayrı oyun mekaniği.",
        statNumber: "6",
        statLabel: "Oyun Modu",
      },
      {
        title: "Çoklu Dil Yelpazesi",
        desc: "Dünyanın en popüler dillerinde kapsamlı kelime ve cümle dağarcığı.",
        statNumber: "10+",
        statLabel: "Desteklenen Dil",
      },
      {
        title: "Sıfır Kişisel Veri Toplama",
        desc: "İlerleme ve istatistikler yalnızca telefonunuzun yerel önbelleğinde tutulur.",
        statNumber: "%100",
        statLabel: "Yerel Önbellek",
      },
      {
        title: "Kullanıcı Kontrolü",
        desc: "İstediğiniz an 'Önbelleği Temizle' butonu ile sıfırlama özgürlüğü.",
        statNumber: "%100",
        statLabel: "Kullanıcı Denetimi",
      },
    ],
    features: [
      {
        id: "sentence_builder",
        title: "Sentence Builder (Cümle Kurucu)",
        description: "Karışık verilen kelimeleri doğru gramer sırasıyla dizerek cümle tamamlama refleksinizi geliştirin.",
        iconName: "Puzzle",
        badge: "Gramer",
      },
      {
        id: "word_matrix",
        title: "Word Matrix (Kelime Matrisi)",
        description: "Harf matrisinde gizlenen yabancı kelimeleri hızlıca bularak görsel hafızanızı pekiştirin.",
        iconName: "Grid",
        badge: "Kelime",
      },
      {
        id: "word_compass",
        title: "Word Compass (Kelime Pusulası)",
        description: "Doğru anlam ve yönü gösteren interaktif pusula bulmacaları ile sözcük dağarcığınızı genişletin.",
        iconName: "Compass",
        badge: "Etkileşim",
      },
      {
        id: "listening_audio",
        title: "Sesli Telaffuz ve Dinleme",
        description: "Ana dili konuşanların ses kayıtlarıyla dinleme ve anlama yeteneğinizi güçlendirin.",
        iconName: "Headphones",
        badge: "Telaffuz",
      },
      {
        id: "offline_progress",
        title: "Çevrimdışı İlerleme Takibi",
        description: "İnternet bağlantısına ihtiyaç duymadan nerede kaldıysanız yerel önbellekten devam edin.",
        iconName: "Zap",
        badge: "Çevrimdışı",
      },
      {
        id: "clear_cache_control",
        title: "Önbellek Temizleme Denetimi",
        description: "Ayarlar menüsünden tek tuşla tüm ilerlemenizi sıfırlayabilir veya dilediğiniz gibi yönetebilirsiniz.",
        iconName: "Trash2",
        badge: "Gizlilik",
      },
    ],
    showcaseTabs: [
      {
        id: "games_tab",
        label: "İnteraktif Oyunlar",
        title: "Öğrenmeyi Oyuna Dönüştürün",
        subtitle: "Kelime ezberlemeyi sıkıcı bir görevden eğlenceli bir maceraya dönüştüren 6 mod",
        badge: "Oyun Modları",
        accentColor: "#10B981",
        tags: ["Sentence Builder", "Word Matrix", "Word Compass", "Scrambled"],
        mockupContent: {
          heading: "Word Matrix — Seviye 12",
          subheading: "Puan: 1,450 · Süre: 00:45 · Seri: 8 Doğru",
          details: [
            "🟢 'Achievement' kelimesi başarıyla bulundu!",
            "⚡ Hızlı yanıt bonusu: +50 XP",
            "🏆 Seviye Yıldızı: 3 / 3 Tamamlandı",
          ],
          gradient: "linear-gradient(145deg, #06281e 0%, #0d4637 50%, #105946 100%)",
          previewType: "card",
        },
      },
      {
        id: "privacy_tab",
        label: "Cihaz İçi Gizlilik",
        title: "Sıfır Üyelik, %100 Yerel Önbellek",
        subtitle: "Öğrenme istatistikleriniz cihazınızda kalır, hiçbir merkezi sunucuya gönderilmez",
        badge: "Yerel Önbellek",
        accentColor: "#06B6D4",
        tags: ["Üyeliksiz", "SharedPreferences", "Önbelleği Temizle"],
        mockupContent: {
          heading: "Önbellek Denetim Masası",
          subheading: "Yerel Hafıza: 2.4 MB · Kayıtlı Seviye: 24",
          details: [
            "🔒 Kişisel veri toplanmaz ve kimlikle eşleştirilmez",
            "🗑️ 'Önbelleği Temizle' butonu ile anında kalıcı silme",
            "📱 Verileriniz yalnızca cihazınızın işletim sisteminde tutulur",
          ],
          gradient: "linear-gradient(145deg, #05212a 0%, #0c3e4f 50%, #105166 100%)",
          previewType: "card",
        },
      },
    ],
    privacyHighlights: [
      "Kullanıcı hesabı oluşturmanız, ad veya e-posta girmeniz kesinlikle gerekmez.",
      "Oyun ilerlemeniz ve istatistikleriniz tamamen cihazınızın yerel önbelleğinde (Cache Service) saklanır.",
      "İstediğiniz zaman ayarlar menüsündeki 'Önbelleği Temizle' butonuyla tüm ilerlemenizi kalıcı olarak silebilirsiniz.",
    ],
  },
  {
    id: "domain-track",
    slug: "domain-track",
    name: "Wixtory: Domain Track",
    tagline: "Gerçek Zamanlı Alan Adı Sorgulama, Müsaitlik & Portföy Takip Asistanı",
    shortDesc: "Yüzlerce uzantıda anında alan adı müsaitliği kontrol edin, favorilerinizi cihazınızda güvenle takip edin.",
    fullDesc:
      "Wixtory: Domain Track, girişimciler, geliştiriciler ve marka sahipleri için tasarlanmış yüksek performanslı alan adı sorgulama ve portföy takip asistanıdır. .com, .net, .org, .io, .ai gibi popüler uzantılarda gerçek zamanlı kontrol sağlar. Tamamen cihaz içi önbellek mimarisiyle sıfır veri toplama güvencesi sunar.",
    category: "Geliştirici Araçları & Alan Adı Yönetimi",
    badge: "Müsaitlik & Portföy",
    logoUrl: "/domain-track-logo.png",
    version: "v1.0.0",
    rating: 4.9,
    reviewsCount: "2.8K",
    downloads: "15.000+",
    primaryColor: "#8B5CF6",
    secondaryColor: "#EC4899",
    glowColor: "rgba(139, 92, 246, 0.45)",
    contactEmail: "wixtoryy@gmail.com",
    storeLinks: {
      appStore: "https://apps.apple.com/tr/app/wixtory-domain-track/id6790164419",
      playStore: "https://play.google.com/store/apps/details?id=com.wixtory.domain_track",
      webDemo: "/domain-track",
    },
    whyUse: [
      {
        title: "Çoklu Uzantıda Anında Müsaitlik",
        problem: "Tek tek her uzantıyı kontrol etmek zaman alır ve aradığınız alan adını kaçırmanıza yol açar.",
        solution: "Wixtory: Domain Track, .com, .net, .org, .io, .dev ve onlarca TLD'de tek sorguyla aynı anda müsaitliği kontrol eder.",
        iconName: "Search",
      },
      {
        title: "%100 Cihaz İçi Gizlilik & Güvenlik",
        problem: "Birçok arama motoru aradığınız alan adlarını kaydeder ve fiyatları yapay olarak yükseltebilir.",
        solution: "Aramalarınız ve favorileriniz sunucularımızda asla saklanmaz; yalnızca cihazınızın yerel önbelleğinde tutulur.",
        iconName: "Shield",
      },
      {
        title: "Favori Portföyü ve Hızlı Geçmiş",
        problem: "Beğendiğiniz potansiyel isimleri unutursunuz veya tekrar aramak için zaman kaybedersiniz.",
        solution: "Tek dokunuşla favorilere ekleyin, arama geçmişinizden anında geri çağırın ve portföyünüzü çevrimdışı yönetin.",
        iconName: "Star",
      },
    ],
    benefits: [
      {
        title: "Gerçek Zamanlı Hızlı Arama",
        desc: "Saniyeler içinde yüzlerce uzantıda alan adı müsaitlik durumunu sorgular.",
        statNumber: "< 1 sn",
        statLabel: "Sorgu Yanıt Süresi",
      },
      {
        title: "Geniş Uzantı Yelpazesi",
        desc: "En popüler küresel ve yerel TLD uzantı desteği.",
        statNumber: "100+",
        statLabel: "Desteklenen TLD",
      },
      {
        title: "Sıfır Kişisel Veri Toplama",
        desc: "Arama geçmişi ve favoriler yalnızca telefonunuzda saklanır.",
        statNumber: "%100",
        statLabel: "Cihaz İçi Gizlilik",
      },
      {
        title: "10 Küresel Dil Desteği",
        desc: "Türkçe, İngilizce, Fransızca, Almanca, İspanyolca dahil 10 dil.",
        statNumber: "10",
        statLabel: "Küresel Dil",
      },
    ],
    features: [
      {
        id: "instant_search",
        title: "Anında Alan Adı Sorgulama",
        description: "İstediğiniz alan adını yazın; müsaitlik durumunu renk kodlu rozetlerle anında görün.",
        iconName: "Search",
        badge: "Gerçek Zamanlı",
      },
      {
        id: "extension_filter",
        title: "Çoklu Uzantı Filtreleme",
        description: ".com, .net, .org, .io, .ai gibi farklı TLD kategorilerini seçip filtreleyin.",
        iconName: "Filter",
        badge: "Geniş Kapsam",
      },
      {
        id: "local_history",
        title: "Yerel Arama Geçmişi",
        description: "Geçmişte yaptığınız aramalar cihazınızda güvenle tutulur, tek tıkla tekrar açılır.",
        iconName: "History",
        badge: "Hızlı Erişim",
      },
      {
        id: "favorites_tracker",
        title: "Favori Alan Adları Takibi",
        description: "Kayıt etmeyi düşündüğünüz isimleri yıldızlayarak favori listenize ekleyin.",
        iconName: "Star",
        badge: "Portföy",
      },
      {
        id: "multilingual",
        title: "10 Farklı Dil Desteği",
        description: "Uygulama arayüzünü 10 farklı dünya dilinde tam yerelleştirme ile kullanın.",
        iconName: "Globe",
        badge: "i18n",
      },
      {
        id: "clean_ui",
        title: "Modern & Ergonomik Tasarım",
        description: "Göz yormayan koyu mavi estetik ve parmak dostu mobil gezinme deneyimi.",
        iconName: "Palette",
        badge: "Koyu Tema",
      },
    ],
    showcaseTabs: [
      {
        id: "search_showcase",
        label: "Alan Adı Arama",
        title: "Çoklu Uzantı Müsaitlik Kontrolü",
        subtitle: "Tek bir kelime girin, tüm popüler uzantılardaki durumunu saniyeler içinde görün",
        badge: "Anlık Arama",
        accentColor: "#8B5CF6",
        tags: [".com", ".net", ".org", ".io", ".dev"],
        mockupContent: {
          heading: "wixtory.com — Müsait!",
          subheading: "Kayıt Durumu: Uygun · Önerilen TLD: .com",
          details: [
            "🟢 wixtory.com — Müsait (Hemen Kaydet)",
            "🔴 wixtory.net — Alınmış (Whois İncele)",
            "🟢 wixtory.io — Müsait (Girişimler İçin İdeal)",
          ],
          gradient: "linear-gradient(145deg, #0d1e2e 0%, #152d42 50%, #1c3b57 100%)",
          previewType: "card",
        },
      },
      {
        id: "favorites_showcase",
        label: "Favori Takip",
        title: "Portföy & Takip Listesi",
        subtitle: "Satın almayı planladığınız alan adlarını kategorilere göre düzenleyin",
        badge: "Yıldızlı İsimler",
        accentColor: "#EC4899",
        tags: ["Girişim Fikirleri", "Kişisel Blog", "E-Ticaret"],
        mockupContent: {
          heading: "Kişisel Takip Portföyünüz",
          subheading: "Toplam 5 Kayıtlı Alan Adı",
          details: [
            "⭐ mystartup.io — Öncelikli",
            "⭐ cloudsuite.dev — İncelemede",
            "🔒 Tüm favoriler telefonunuzda şifreli saklanır",
          ],
          gradient: "linear-gradient(145deg, #1b0c26 0%, #351347 50%, #4f1a66 100%)",
          previewType: "feed",
        },
      },
      {
        id: "history_showcase",
        label: "Arama Geçmişi",
        title: "Çevrimdışı Arama Kayıtları",
        subtitle: "İnternet olmasa dahi geçmişte aradığınız isimlere ve sonuçlarına anında ulaşın",
        badge: "Önbellek",
        accentColor: "#06B6D4",
        tags: ["Hızlı Tekrar", "Önbelleği Temizle", "Sıfır Sunucu Kaydı"],
        mockupContent: {
          heading: "Son Yapılan Aramalar",
          subheading: "Cihaz İçi Önbellek Aktif",
          details: [
            "🕐 15 dakika önce — 4 uzantı kontrol edildi",
            "🗑️ 'Önbelleği Temizle' butonu ile anında silme imkanı",
            "🛡️ Sıfır log ve sıfır kişisel profil kaydı",
          ],
          gradient: "linear-gradient(145deg, #081d24 0%, #0d3642 50%, #135263 100%)",
          previewType: "card",
        },
      },
    ],
    privacyHighlights: [
      "Aradığınız veya favorilediğiniz hiçbir alan adı harici sunucularda toplanmaz.",
      "Kişisel kullanıcı hesabı açmanız veya e-posta girmeniz kesinlikle gerekmez.",
      "İstediğiniz an uygulama ayarlarından 'Önbelleği Temizle' butonuyla tüm verileri silebilirsiniz.",
    ],
  },
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
