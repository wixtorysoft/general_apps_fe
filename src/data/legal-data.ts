import { LanguageCode } from "@/data/translations";

export interface LegalSection {
  id: string;
  title: string;
  badge?: string;
  content: string[];
  subsections?: {
    subtitle: string;
    subcontent: string[];
  }[];
  appSpecific?: {
    appName: string;
    appSlug: string;
    details: string[];
  }[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

export interface LegalDocument {
  id: "privacy" | "cookie" | "kvkk";
  title: string;
  subtitle: string;
  lastUpdated: string;
  effectiveDate: string;
  companyName: string;
  developerName: string;
  contactEmail: string;
  developerLocation: string;
  website: string;
  sections: LegalSection[];
}

/* ==========================================================================
   1. GİZLİLİK SÖZLEŞMESİ (PRIVACY POLICY)
   ========================================================================== */
export const PRIVACY_POLICY_TR: LegalDocument = {
  id: "privacy",
  title: "Gizlilik Politikası (Wixtory Mobil Uygulamaları & Dijital Ekosistem)",
  subtitle:
    "Wixtory ekosisteminde yer alan tüm mobil uygulamalar (Wixtory: Domain Track, AstroVibe, Excuse AI ve gelecekteki tüm projeler) için sıfır veri toplama, tamamen cihaz önbelleğinde çalışan yerel mimari, Google AdMob ve 18 yaş altı gizlilik güvencesi.",
  lastUpdated: "03 Ekim 2026",
  effectiveDate: "08 Şubat 2026",
  companyName: "Wixtory Software & Digital Technologies",
  developerName: "Hacı Celal Aygar",
  contactEmail: "wixtoryy@gmail.com",
  developerLocation: "Ankara, Yenimahalle, Turkey",
  website: "https://www.wixtory.com",
  sections: [
    {
      id: "no-personal-data",
      title: "1. Kişisel Veri Toplama Yok",
      badge: "Sıfır Veri Toplama",
      content: [
        "Gizliliğinize en üst düzeyde önem veriyoruz. Wixtory ekosisteminde yer alan Wixtory: Domain Track, AstroVibe, Excuse AI ve yayınlanan tüm mobil uygulamalarımız herhangi bir kişisel olarak tanımlanabilir bilgiyi (ad, soyad, e-posta, telefon numarası, T.C. kimlik numarası vb.) toplamaz, saklamaz, işlemez ve üçüncü şahıslara iletmez.",
        "Uygulamalarımızı kullanmak için hesap oluşturmanız, üye girişi yapmanız veya kişisel kimlik bilgilerinizi paylaşmanız kesinlikle gerekmez.",
      ],
    },
    {
      id: "local-cache",
      title: "2. Yerel Veri Depolama ve Cihaz İçi Önbellek Denetimi",
      badge: "Cihaz İçi Önbellek",
      content: [
        "Kesintisiz, hızlı ve çevrimdışı destekli bir kullanıcı deneyimi sunabilmek için uygulamalarımız tercihlerinizi, geçmişinizi ve ayarlarınızı yalnızca cihazınızda yerel olarak (istemci taraflı) saklar.",
      ],
      subsections: [
        {
          subtitle: "Nasıl Çalışır?",
          subcontent: [
            "Uygulamalarımızda tercihlerinizi ve geçmişinizi hatırlamak için tamamen cihazınız üzerinde çalışan yerel bir Önbellek Servisi (SharedPreferences / NSUserDefaults / SQLite) kullanılır.",
            "Wixtory: Domain Track: Gerçekleştirdiğiniz alan adı arama geçmişiniz, favorilere eklediğiniz alan adları ve seçtiğiniz uzantı tercihleri yalnızca cihazınızın yerel önbelleğinde saklanır.",
            "AstroVibe: Beğendiğiniz protez tırnak modelleri, doğum haritası burç seçimleriniz ve tarot açılım geçmişiniz doğrudan telefonunuzun yerel hafızasında tutulur.",
            "Excuse AI: Oluşturduğunuz mazeretler, acil durum kriz kategorileriniz ve favori kayıtlarınız telefonunuzun çevrimdışı yerel veritabanında korunur.",
          ],
        },
        {
          subtitle: "Veri Konumu ve Mülkiyeti",
          subcontent: [
            "Bu veriler yalnızca ve tamamen sizin cihazınızda kalır. Hiçbir merkezi sunucuya aktarılmaz, harici veritabanlarında depolanmaz ve herhangi bir kişisel kimlik veya hesapla eşleştirilmez.",
          ],
        },
        {
          subtitle: "Kullanıcı Kontrolü ('Önbelleği Temizle' Butonu)",
          subcontent: [
            "Kullanıcılarımız verileri üzerinde %100 denetime sahiptir. Arama geçmişinizi, favorilerinizi ve tercih verilerinizi dilediğiniz an uygulama ayarlarında yer alan 'Önbelleği Temizle' / 'Verileri Sıfırla' düğmesini kullanarak veya cihazınızın uygulama yöneticisinden kalıcı olarak silebilirsiniz.",
          ],
        },
      ],
    },
    {
      id: "statistics-offline",
      title: "3. Arama İstatistikleri ve Çevrimdışı Çalışma",
      badge: "Yerel Hesaplama",
      content: [
        "Uygulamalarımız, kullanıcı deneyimini zenginleştirmek için aranan alan adı sayısı, en çok kontrol edilen uzantılar veya tercih edilen kategoriler gibi özet istatistikleri gösterebilir.",
        "Bu istatistikler ve sayaçlar yalnızca sizin görüntülemeniz amacıyla tamamen cihazınızın işlemcisinde yerel olarak üretilir; harici analitik şirketleriyle veya üçüncü taraflarla ASLA paylaşılmaz.",
        "İnternet bağlantınız olmadığında dahi, önceden sorgulanmış veya favorilenmiş verilerinizi yerel önbellek sayesinde güvenle inceleyebilirsiniz.",
      ],
    },
    {
      id: "realtime-network",
      title: "4. Gerçek Zamanlı Ağ İletişimi ve Güvenli Bağlantı",
      badge: "HTTPS & TLS 1.3",
      content: [
        "Wixtory: Domain Track uygulamasında alan adı müsaitlik durumu kontrol edilirken veya diğer uygulamalarda dinamik katalog içerikleri alınırken, uygulamamız ile güvenli sunucumuz arasında gerçek zamanlı iletişim kurulur.",
        "Bu iletişim standart ve yüksek güvenlikli HTTPS / TLS 1.3 şifreleme protokolleri üzerinden gerçekleşir.",
        "Bu istekler esnasında sunucuya hiçbir kullanıcı kimliği, cihaz seri numarası veya kişisel veri iletilmez; yalnızca sorgulanan alan adı veya talep edilen içerik kodu işlenir.",
      ],
    },
    {
      id: "third-party-ads",
      title: "5. Üçüncü Taraf Hizmetleri ve Reklamlar (Google AdMob)",
      badge: "Google AdMob",
      content: [
        "Wixtory ekosistemindeki uygulamaların ücretsiz kalmasını sağlamak ve sunucu altyapı maliyetlerini karşılamak amacıyla uygulamalarımızda üçüncü taraf reklamlar (Google AdMob) gösterilmektedir.",
        "Bu üçüncü taraf reklam sağlayıcıları, ilgi alanlarınıza uygun reklamlar sunabilmek amacıyla standart mobil reklam tanımlayıcılarını (iOS'ta IDFA, Android'de AAID) veya çerez benzeri teknolojileri kullanabilir.",
        "Kullanıcılar diledikleri zaman mobil cihazlarının işletim sistemi ayarlarından (iOS: Ayarlar > Gizlilik ve Güvenlik > Takip; Android: Ayarlar > Gizlilik > Reklamlar) kişiselleştirilmiş reklamları kapatabilir veya reklam kimliklerini sıfırlayabilir.",
      ],
    },
    {
      id: "under-18-policy",
      title: "6. 18 Yaş Altı Kuralı (Çocukların ve Gençlerin Gizliliği)",
      badge: "18 Yaş Altı Koruma (COPPA / GDPR-K)",
      content: [
        "Wixtory uygulamaları, 18 yaşın altındaki bireylerden bilerek veya isteyerek hiçbir kişisel bilgi toplamaz, saklamaz veya talep etmez.",
        "Altyapımızda hiçbir kişisel veri toplama mekanizması bulunmadığından, çocukların veya gençlerin kimliğinin açığa çıkması, profillenmesi veya siber risk altına girmesi kesinlikle söz konusu değildir.",
        "Ebeveynler ve yasal vasiler diledikleri zaman çocuklarının cihazındaki uygulama önbelleğini temizleyebilir veya yerel tercihleri sıfırlayabilir.",
      ],
    },
    {
      id: "data-security",
      title: "7. Veri Güvenliği",
      badge: "Uçtan Uca Koruma",
      content: [
        "Merkezi sunucularımızda hiçbir kişisel kullanıcı veritabanı tutulmadığı için, kimlik bilgilerinizin çalınması veya yetkisiz erişime uğraması riski bulunmamaktadır.",
        "Uygulama ve sunucu arasındaki tüm veri alışverişleri en güncel endüstriyel şifreleme standartları (HTTPS / TLS) ile korunmaktadır.",
      ],
    },
    {
      id: "contact",
      title: "8. İletişim & Geliştirici Bilgileri",
      badge: "Geliştirici İletişim",
      content: [
        "Bu gizlilik politikası veya Wixtory uygulamaları hakkında her türlü soru, öneri ve geri bildiriminiz için bizimle doğrudan iletişime geçebilirsiniz:",
        "Geliştirici / Yayıncı: Hacı Celal Aygar (Wixtory)",
        "Resmi Destek E-postası: wixtoryy@gmail.com",
        "Konum: Ankara, Yenimahalle, Türkiye",
        "Resmi Web Sitesi: https://www.wixtory.com",
        "Uygulamalar Portalı: https://apps.wixtory.com",
      ],
    },
    {
      id: "ecosystem-scope",
      title: "9. Kapsam ve Politika Güncellemeleri",
      badge: "Evrensel Ekosistem Çerçevesi",
      content: [
        "Bu gizlilik politikası Wixtory markası altında yayımlanan tüm mevcut mobil uygulamalar (Wixtory: Domain Track, AstroVibe, Excuse AI) ve gelecekte yayımlanacak tüm yazılım projeleri için bağlayıcı genel yasal çatı metnidir.",
        "Politikada yapılabilecek her türlü güncelleme bu sayfada (https://apps.wixtory.com/privacy-policy) yayımlanacak ve derhal yürürlüğe girecektir.",
      ],
    },
  ],
};

export const PRIVACY_POLICY_EN: LegalDocument = {
  id: "privacy",
  title: "Privacy Policy (Wixtory Mobile Apps & Digital Ecosystem)",
  subtitle:
    "Universal privacy policy covering all mobile applications across the Wixtory ecosystem (Wixtory: Domain Track, AstroVibe, Excuse AI, and future projects) with zero personal data collection, on-device cache architecture, Google AdMob disclosures, and under-18 privacy guarantees.",
  lastUpdated: "October 03, 2026",
  effectiveDate: "February 08, 2026",
  companyName: "Wixtory Software & Digital Technologies",
  developerName: "Hacı Celal Aygar",
  contactEmail: "wixtoryy@gmail.com",
  developerLocation: "Ankara, Yenimahalle, Turkey",
  website: "https://www.wixtory.com",
  sections: [
    {
      id: "no-personal-data",
      title: "1. No Personal Data Collection",
      badge: "Zero Data Collection",
      content: [
        "We believe fundamentally in your privacy. Wixtory: Domain Track, AstroVibe, Excuse AI, and all applications published under the Wixtory account do not collect, store, process, or transmit any personally identifiable information (PII) such as your name, email address, phone number, physical address, or national ID.",
        "We do not require account registration, login credentials, or any personal profiling to use any of our applications.",
      ],
    },
    {
      id: "local-cache",
      title: "2. Local Data Storage & User Cache Control",
      badge: "On-Device Storage",
      content: [
        "To provide a seamless, ultra-fast, and offline-compatible user experience, our applications track preferences, search histories, and settings strictly locally on your device (client-side).",
      ],
      subsections: [
        {
          subtitle: "How It Works",
          subcontent: [
            "We use a localized Cache Service (SharedPreferences / NSUserDefaults / SQLite) operating exclusively on your device to remember where you left off.",
            "Wixtory: Domain Track: Your domain search history, bookmarked favorite domains, extension filters, and local search counters are saved locally on your device so you can access them instantly without re-typing.",
            "AstroVibe: Your bookmarked press-on nail models, zodiac birth chart selections, and tarot card draws are preserved exclusively in your phone's local cache.",
            "Excuse AI: Your generated excuses, emergency crisis categories, and favorite picks reside in your phone's local offline database.",
          ],
        },
        {
          subtitle: "Data Location and Ownership",
          subcontent: [
            "This data stays strictly on your physical phone. It is never uploaded to remote servers, external databases, or linked to any personal identity or user account.",
          ],
        },
        {
          subtitle: "User Control ('Clear Cache' Button)",
          subcontent: [
            "Users maintain 100% control over their local data. You can permanently delete your search history, favorite lists, and cached preference data from your device at any time using the 'Clear Cache' button in the app settings or via your operating system's application management settings.",
          ],
        },
      ],
    },
    {
      id: "statistics-offline",
      title: "3. Search Statistics & Offline Capability",
      badge: "Client-Side Processing",
      content: [
        "Our applications may display summarized metrics such as the total number of domains searched, your most checked extensions, or lifestyle statistics for your own personal viewing.",
        "These metrics and calculations are generated entirely client-side using your device's processor and are NEVER transmitted to external analytics brokers or shared with third parties.",
        "Even without an active internet connection, you can view your locally cached search records and favorite items seamlessly.",
      ],
    },
    {
      id: "realtime-network",
      title: "4. Real-Time Network Communication & APIs",
      badge: "HTTPS & TLS 1.3",
      content: [
        "When performing real-time domain availability checks (Wixtory: Domain Track) or fetching static design catalogs (AstroVibe, Excuse AI), the app establishes a secure connection with our backend server.",
        "All network communications are strictly encrypted using industry-standard HTTPS / TLS 1.3 protocols.",
        "No personal identity, user token, or device serial number is attached to these domain query requests; only the requested domain name or catalog asset is queried.",
      ],
    },
    {
      id: "third-party-ads",
      title: "5. Third-Party Services & Advertisements (Google AdMob)",
      badge: "Google AdMob",
      content: [
        "To keep our applications completely free to download and use without subscription barriers, our apps may feature third-party advertisements via Google AdMob.",
        "These third-party providers may utilize standard mobile advertising identifiers (IDFA on iOS, Google Advertising ID / AAID on Android) or cookie-like identifiers to display ads relevant to your interests, governed by Google's Privacy Policies.",
        "Users can manage, disable personalized ads, or reset their advertising identifier at any time through their device operating system settings (iOS: Settings > Privacy & Security > Tracking; Android: Settings > Privacy > Ads).",
      ],
    },
    {
      id: "under-18-policy",
      title: "6. Under-18 Policy (Child & Teen Privacy)",
      badge: "Under-18 Protection (COPPA / GDPR-K)",
      content: [
        "Wixtory applications do not knowingly solicit, collect, or store any personal data from individuals under 18 years of age.",
        "Because our architecture operates on a zero-personal-data model, there is zero risk of minor identity compromise, tracking, or exposure.",
        "Parents and legal guardians can clear local device caches or reset preferences at any time through the operating system settings.",
      ],
    },
    {
      id: "data-security",
      title: "7. Data Security & Integrity",
      badge: "End-to-End Protection",
      content: [
        "Because we do not store personal data in any centralized database, there is no risk of your personal identity being compromised or breached through our servers.",
        "All communications between our mobile apps and our backend infrastructure are encrypted using modern HTTPS protocols.",
      ],
    },
    {
      id: "contact",
      title: "8. Contact & Developer Information",
      badge: "Developer Contact",
      content: [
        "For any questions, feedback, or inquiries regarding this Privacy Policy or any Wixtory application, please contact us directly:",
        "Developer / Publisher: Hacı Celal Aygar (Wixtory)",
        "Official Support Email: wixtoryy@gmail.com",
        "Location: Ankara, Yenimahalle, Turkey",
        "Official Website: https://www.wixtory.com",
        "Apps Hub: https://apps.wixtory.com",
      ],
    },
    {
      id: "ecosystem-scope",
      title: "9. Universal Scope & Policy Updates",
      badge: "Ecosystem Framework",
      content: [
        "This policy acts as the universal umbrella privacy framework for all mobile applications published by Wixtory (Wixtory: Domain Track, AstroVibe, Excuse AI) and any future software releases.",
        "Any future modifications will be immediately posted on this portal (https://apps.wixtory.com/privacy-policy) and will take effect upon publication.",
      ],
    },
  ],
};

/* ==========================================================================
   2. ÇEREZ POLİTİKASI (COOKIE & STORAGE POLICY)
   ========================================================================== */
export const COOKIE_POLICY_TR: LegalDocument = {
  id: "cookie",
  title: "Çerez ve Yerel Depolama Politikası",
  subtitle:
    "Wixtory web portalında ve AstroVibe ile Excuse mobil uygulamalarında kullanılan çerezler, yerel depolama (localStorage) ve istemci taraflı veri saklama standartları.",
  lastUpdated: "23 Eylül 2026",
  effectiveDate: "01 Ocak 2026",
  companyName: "Wixtory Software & Digital Technologies",
  developerName: "Hacı Celal Aygar",
  contactEmail: "wixtoryy@gmail.com",
  developerLocation: "Ankara, Yenimahalle, Turkey",
  website: "https://www.wixtory.com",
  sections: [
    {
      id: "cookie-definition",
      title: "1. Çerez (Cookie) ve Yerel Depolama Nedir?",
      badge: "Tanımlar",
      content: [
        "Çerezler; ziyaret ettiğiniz web siteleri tarafından tarayıcınıza veya cihazınıza kaydedilen küçük metin dosyalarıdır.",
        "Mobil uygulamalarda ise çerezlerin yerini 'Yerel Depolama' (SharedPreferences, NSUserDefaults, SQLite ve App Cache) mekanizmaları alır.",
        "Wixtory ekosistemi, kullanıcı deneyimini kesintisiz kılmak ve tercihlerinizi hatırlamak için yalnızca zorunlu ve işlevsel yerel depolama teknolojilerini kullanır.",
      ],
    },
    {
      id: "cookie-types",
      title: "2. Kullanılan Çerez ve Depolama Türleri",
      badge: "Şeffaf Tablo",
      content: [
        "Aşağıdaki tabloda web portalımızda ve uygulamalarımızda saklanan verilerin amacı ve süreleri listelenmiştir:",
      ],
      tableData: {
        headers: ["Anahtar Adı / Teknoloji", "Kategori", "Kullanım Amacı", "Saklama Süresi"],
        rows: [
          [
            "wixtory_app_theme (localStorage)",
            "Zorunlu / Tercih",
            "Kullanıcının seçtiği Koyu (Dark) veya Açık (Light) tema tercihini hatırlar.",
            "Kalıcı (Kullanıcı sıfırlayana kadar)",
          ],
          [
            "wixtory_app_lang (localStorage)",
            "Zorunlu / Tercih",
            "Arayüz dil tercihini (Türkçe, İngilizce vb.) hatırlar.",
            "Kalıcı (Kullanıcı değiştirene kadar)",
          ],
          [
            "cf_clearance (Cloudflare Çerezi)",
            "Güvenlik",
            "Bot saldırılarını engellemek ve web portalı güvenliğini sağlamak için Cloudflare tarafından atanır.",
            "1 Yıl",
          ],
          [
            "astrovibe_favorites (SharedPreferences)",
            "İşlevsel (Mobil)",
            "AstroVibe içinde beğendiğiniz tırnak modelleri ve tarot kartı favorilerini cihazınızda tutar.",
            "Uygulama silinene kadar",
          ],
          [
            "excuse_offline_cache (SQLite / Prefs)",
            "İşlevsel (Mobil)",
            "Excuse uygulamasının internet olmadan anında çalışabilmesi için bahane kütüphanesini cihazda tutar.",
            "Uygulama silinene kadar",
          ],
        ],
      },
    },
    {
      id: "project-storage-details",
      title: "3. Projeler Bazında Çerez ve Yerel Depolama Kullanımı",
      badge: "AstroVibe & Excuse",
      content: [
        "Her projemizin istemci taraflı depolama prensipleri:",
      ],
      appSpecific: [
        {
          appName: "AstroVibe",
          appSlug: "astrovibe",
          details: [
            "✨ Favori Tırnak Tasarımları: Beğendiğiniz protez tırnak stilleri yerel anahtar-değer deposunda saklanır; sunucuya kaydedilmez.",
            "🔮 Son Çekilen Tarot Kartları: Günlük açılım geçmişiniz yalnızca cihazınızın önbelleğinde tutulur.",
            "🖼️ MinIO Medya Önbelleği: Mobil cihazınız, sık görüntülenen tırnak görsellerini CDN üzerinden bir kez indirip yerel belleğe (Disk Cache) alarak internet kotanızı korur.",
          ],
        },
        {
          appName: "Excuse",
          appSlug: "excuse",
          details: [
            "📴 Çevrimdışı SQLite Kütüphanesi: Tüm bahaneler cihazınızda yerel SQLite tablosunda barınır. Çerez veya harici ağ sorgusu kullanılmaz.",
            "⚡ Hızlı Kriz Şablonları: Özel oluşturduğunuz acil bahane kayıtları doğrudan SharedPreferences içinde şifreli korunur.",
          ],
        },
        {
          appName: "Wixtory Web Portal",
          appSlug: "web-portal",
          details: [
            "🎯 Üçüncü Taraf Reklam Çerezleri YOKTUR: Google AdSense, Facebook Pixel gibi kullanıcıyı internet genelinde takip eden izleyiciler kullanılmaz.",
          ],
        },
      ],
    },
    {
      id: "cookie-management",
      title: "4. Çerezleri ve Yerel Depolamayı Nasıl Yönetebilirsiniz?",
      badge: "Kontrol Sizde",
      content: [
        "Web Tarayıcılarında: Chrome, Safari, Firefox veya Edge ayarlarından 'Çerezleri ve Site Verilerini Temizle' seçeneğiyle Wixtory'ye ait kayıtlı tercihleri silebilirsiniz.",
        "Mobil Uygulamalarda: Cihazınızın Ayarlar > Uygulamalar > [AstroVibe / Excuse] > 'Depolama' sekmesinden 'Önbelleği Temizle' veya 'Verileri Sıfırla' butonuna dokunarak tüm yerel verileri sıfırlayabilirsiniz.",
        "Zorunlu çerezleri/depolamayı devre dışı bırakmanız durumunda web sitesi temanızı veya dilinizi hatırlayamayabilir.",
      ],
    },
  ],
};

export const COOKIE_POLICY_EN: LegalDocument = {
  id: "cookie",
  title: "Cookie & Local Storage Policy",
  subtitle:
    "Standards regarding cookies, localStorage, and on-device storage utilized across the Wixtory web portal, AstroVibe, and Excuse mobile applications.",
  lastUpdated: "September 23, 2026",
  effectiveDate: "January 01, 2026",
  companyName: "Wixtory Software & Digital Technologies",
  developerName: "Hacı Celal Aygar",
  contactEmail: "wixtoryy@gmail.com",
  developerLocation: "Ankara, Yenimahalle, Turkey",
  website: "https://www.wixtory.com",
  sections: [
    {
      id: "cookie-definition",
      title: "1. What are Cookies & Local Storage?",
      badge: "Definitions",
      content: [
        "Cookies are compact text files stored on your browser or device by visited web portals.",
        "In mobile applications, cookies are superseded by native local storage interfaces (SharedPreferences, NSUserDefaults, SQLite, and App Cache).",
        "Wixtory uses exclusively essential and functional storage mechanisms to preserve user preferences such as visual themes and languages.",
      ],
    },
    {
      id: "cookie-types",
      title: "2. Types of Cookies & Storage Keys Used",
      badge: "Storage Table",
      content: [
        "The following table details the client-side storage keys active on our platform:",
      ],
      tableData: {
        headers: ["Storage Key / Technology", "Category", "Purpose", "Retention Duration"],
        rows: [
          [
            "wixtory_app_theme (localStorage)",
            "Essential / Preference",
            "Remembers your chosen Dark or Light visual interface mode.",
            "Persistent (Until cleared by user)",
          ],
          [
            "wixtory_app_lang (localStorage)",
            "Essential / Preference",
            "Remembers your chosen interface language (English, Turkish, etc.).",
            "Persistent (Until cleared by user)",
          ],
          [
            "cf_clearance (Cloudflare Cookie)",
            "Security",
            "Mitigates DDoS threats and malicious automated scrapers.",
            "1 Year",
          ],
          [
            "astrovibe_favorites (SharedPreferences)",
            "Functional (Mobile)",
            "Stores your favorite nail art and tarot cards locally on device.",
            "Until app uninstallation",
          ],
          [
            "excuse_offline_cache (SQLite / Prefs)",
            "Functional (Mobile)",
            "Stores offline excuse collections for zero-latency instant access.",
            "Until app uninstallation",
          ],
        ],
      },
    },
    {
      id: "project-storage-details",
      title: "3. Project-Specific Storage Paradigms",
      badge: "AstroVibe & Excuse",
      content: [
        "Project-specific client-side storage policies:",
      ],
      appSpecific: [
        {
          appName: "AstroVibe",
          appSlug: "astrovibe",
          details: [
            "✨ Bookmarked Styles: Saved nail designs reside in client-side key-value pairs without cloud persistence.",
            "🔮 Tarot History: Daily card draws are stored in your device cache.",
            "🖼️ MinIO Disk Cache: High-definition images stream from MinIO CDN and are cached locally to save mobile bandwidth.",
          ],
        },
        {
          appName: "Excuse",
          appSlug: "excuse",
          details: [
            "📴 Offline SQLite Database: Excuse libraries reside in a local SQLite file; zero network requests needed.",
            "⚡ Quick Preset Keys: Custom emergency excuses are preserved in device-encrypted preferences.",
          ],
        },
      ],
    },
    {
      id: "cookie-management",
      title: "4. Managing Cookies & Local Storage",
      badge: "User Control",
      content: [
        "On Browsers: Access your browser settings (Chrome, Safari, Firefox) and select 'Clear site cookies and data' to purge Wixtory keys.",
        "On Mobile: Navigate to Settings > Apps > [AstroVibe / Excuse] > 'Storage' and tap 'Clear Cache' or 'Clear Data'.",
      ],
    },
  ],
};

/* ==========================================================================
   3. KVKK AYDINLATMA METNİ (6698 SAYILI KANUN KAPSAMINDA)
   ========================================================================== */
export const KVKK_TEXT_TR: LegalDocument = {
  id: "kvkk",
  title: "6698 Sayılı KVKK Uyarınca Aydınlatma Metni",
  subtitle:
    "Wixtory ekosisteminde yer alan AstroVibe, Excuse mobil uygulamaları ve resmi web portalı kapsamında kişisel verilerin korunması ve işlenmesine ilişkin resmi aydınlatma metnidir.",
  lastUpdated: "23 Eylül 2026",
  effectiveDate: "01 Ocak 2026",
  companyName: "Wixtory Software & Digital Technologies",
  developerName: "Hacı Celal Aygar",
  contactEmail: "wixtoryy@gmail.com",
  developerLocation: "Ankara, Yenimahalle, Turkey",
  website: "https://www.wixtory.com",
  sections: [
    {
      id: "kvkk-intro",
      title: "1. Veri Sorumlusunun Kimliği",
      badge: "KVKK Madde 10/a",
      content: [
        "6698 sayılı Kişisel Verilerin Korunması Kanunu ('KVKK') uyarınca, veri sorumlusu sıfatıyla hareket eden Hacı Celal Aygar (Wixtory Yazılım), kişisel verilerinizin güvenliği hususunda en üst düzeyde hassasiyet göstermektedir.",
        "Bu aydınlatma metni; AstroVibe ve Excuse mobil uygulamalarımızı indiren, kullanan ve wixtory.com portalını ziyaret eden ilgili kişileri bilgilendirmek amacıyla hazırlanmıştır.",
        "Veri Sorumlusu İletişim: Hacı Celal Aygar - wixtoryy@gmail.com - Yenimahalle / Ankara / Türkiye",
      ],
    },
    {
      id: "kvkk-categories",
      title: "2. İşlenen Kişisel Veri Kategorileri ve Toplama Yöntemleri",
      badge: "KVKK Madde 10/b",
      content: [
        "Kişisel verileriniz, mobil uygulamalarımız ve web sitemiz üzerinden elektronik ortamda, otomatik veya kısmen otomatik yöntemlerle toplanmaktadır:",
      ],
      tableData: {
        headers: ["Veri Kategorisi", "İşlenen Veriler", "Uygulama Alanı", "Toplama Yöntemi"],
        rows: [
          [
            "İşlem Güvenliği & Teknik Veri",
            "İşletim sistemi sürümü (iOS/Android), cihaz modeli, IP adresi (yalnızca web), uygulama versiyonu",
            "AstroVibe, Excuse, Web Portal",
            "Elektronik ortamda otomatik sistem logları",
          ],
          [
            "İletişim & Kimlik",
            "Ad, Soyad, E-posta adresi (Yalnızca destek/iletişim formunu dolduranlar için)",
            "Web Portal / Destek E-postası",
            "Kullanıcının form doldurması ile doğrudan",
          ],
          [
            "Astroloji & Stil Tercihleri",
            "Doğum tarihi, doğum saati, favori tırnak stilleri, tarot açılım geçmişi",
            "AstroVibe",
            "Yalnızca kullanıcının cihazındaki yerel depolama",
          ],
          [
            "Görsel Veri (Opsiyonel)",
            "Kullanıcının stil karşılaştırma için galeriden seçtiği fotoğraf",
            "AstroVibe",
            "Kullanıcının açık rızasıyla anlık analiz; saklanmaz",
          ],
          [
            "Kriz & Bahane Tercihleri",
            "Favoriye eklenen kriz kategorileri ve bahane şablonları",
            "Excuse",
            "Yalnızca cihazdaki çevrimdışı SQLite veritabanı",
          ],
        ],
      },
    },
    {
      id: "kvkk-purposes",
      title: "3. Kişisel Verilerin İşlenme Amaçları ve Hukuki Sebepleri",
      badge: "KVKK Madde 10/ç & Madde 5",
      content: [
        "Kişisel verileriniz, KVKK'nın 5. ve 6. maddelerinde belirtilen aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:",
        "• Sözleşmenin Kurulması ve İfası (KVKK m.5/2-c): AstroVibe ve Excuse uygulamalarının temel özelliklerinin, arayüzlerinin ve çevrimdışı motorlarının çalıştırılabilmesi,",
        "• Meşru Menfaat (KVKK m.5/2-f): Uygulama kararlılığının sürdürülmesi, çökme loglarının incelenmesi ve siber güvenliğin sağlanması,",
        "• Veri Sorumlusunun Hukuki Yükümlülüğü (KVKK m.5/2-ç): Yasal mevzuattan kaynaklanan bilgi saklama ve resmi makamların taleplerini karşılama zorunlulukları,",
        "• Açık Rıza (KVKK m.5/1): Kamera/galeri erişimi veya yerel bildirim gönderimleri gibi kullanıcının isteğine bağlı özel modüller.",
      ],
    },
    {
      id: "kvkk-transfers",
      title: "4. Kişisel Verilerin Aktarımı",
      badge: "Veri Aktarımı",
      content: [
        "Wixtory, kullanıcı verilerini üçüncü taraf reklam şirketlerine, veri simsarlarına veya pazarlama ajanslarına KESİNLİKLE SATMAZ, KİRALAMAZ VEYA AKTARMAZ.",
        "Kişisel verileriniz yalnızca aşağıdaki zorunlu hallerde sınırlı olarak aktarılabilir:",
        "1. Yasal Zorunluluk: Mahkemeler ve yetkili idari mercilerin usulüne uygun bağlayıcı talepleri (KVKK m.8/2-a),",
        "2. Altyapı Sağlayıcıları: Yüksek çözünürlüklü görsel dosyaların dağıtımı için MinIO özel nesne depolama ve Cloudflare CDN sunucuları (Yalnızca teknik statik veri).",
      ],
    },
    {
      id: "kvkk-rights",
      title: "5. İlgili Kişinin Hakları (KVKK Madde 11)",
      badge: "Madde 11 Hakları",
      content: [
        "KVKK'nın 11. maddesi uyarınca veri sahibi olarak aşağıdaki haklara sahipsiniz:",
        "a) Kişisel verilerinizin işlenip işlenmediğini öğrenme,",
        "b) Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,",
        "c) Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,",
        "ç) Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,",
        "d) Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,",
        "e) KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,",
        "f) Yapılan düzeltme, silme ve yok edilme işlemlerinin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
        "g) İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,",
        "ğ) Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.",
      ],
    },
    {
      id: "kvkk-application",
      title: "6. Başvuru Yöntemi ve Hakların Kullanımı",
      badge: "Başvuru Usulü",
      content: [
        "Yukarıda belirtilen haklarınızı kullanmak için taleplerinizi içeren başvurunuzu;",
        "• Kayıtlı e-posta adresinizden wixtoryy@gmail.com adresine yazılı olarak gönderebilirsiniz.",
        "Başvurularınız, talebin niteliğine göre en kısa sürede ve en geç otuz (30) gün içinde ücretsiz olarak sonuçlandırılacaktır. Ancak işlemin ayrıca bir maliyet gerektirmesi hâlinde Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilir.",
      ],
    },
  ],
};

export const KVKK_TEXT_EN: LegalDocument = {
  id: "kvkk",
  title: "KVKK Clarification Text (Under Law No. 6698)",
  subtitle:
    "Official disclosure regarding the collection, processing, and protection of personal data across the AstroVibe and Excuse applications and the Wixtory web portal in compliance with the Turkish Personal Data Protection Law (KVKK No. 6698).",
  lastUpdated: "September 23, 2026",
  effectiveDate: "January 01, 2026",
  companyName: "Wixtory Software & Digital Technologies",
  developerName: "Hacı Celal Aygar",
  contactEmail: "wixtoryy@gmail.com",
  developerLocation: "Ankara, Yenimahalle, Turkey",
  website: "https://www.wixtory.com",
  sections: [
    {
      id: "kvkk-intro",
      title: "1. Identity of the Data Controller",
      badge: "KVKK Art. 10/a",
      content: [
        "In accordance with Law No. 6698 on the Protection of Personal Data ('KVKK'), Hacı Celal Aygar (Wixtory Software), acting in the capacity of Data Controller, ensures rigorous security measures over your data.",
        "Data Controller Contact: Hacı Celal Aygar - wixtoryy@gmail.com - Yenimahalle / Ankara / Turkey",
      ],
    },
    {
      id: "kvkk-categories",
      title: "2. Data Categories & Collection Methods",
      badge: "KVKK Art. 10/b",
      content: [
        "Personal data is collected electronically via mobile applications and the web portal through automated or semi-automated methods:",
        "• Technical & Operational: Device model, operating system version, and system crash diagnostics.",
        "• Identity & Communication: Full name and email address exclusively when you submit an inquiry form.",
        "• App-Specific Preferences: Birthdate (AstroVibe) and emergency categories (Excuse) stored locally on device.",
      ],
    },
    {
      id: "kvkk-purposes",
      title: "3. Purposes and Legal Bases for Processing",
      badge: "KVKK Art. 5",
      content: [
        "Data is processed under KVKK Article 5 provisions:",
        "• Contract Performance (Art. 5/2-c): Delivering mobile app utilities and offline features,",
        "• Legitimate Interests (Art. 5/2-f): Maintaining infrastructure integrity and debugging crashes,",
        "• Legal Obligations (Art. 5/2-ç): Fulfilling regulatory retention duties,",
        "• Explicit Consent (Art. 5/1): Optional camera or local push notifications.",
      ],
    },
    {
      id: "kvkk-rights",
      title: "4. Rights of the Data Subject (Article 11)",
      badge: "KVKK Art. 11",
      content: [
        "Under Article 11 of the KVKK, you have the right to learn whether your data is processed, request information, request correction or erasure, and claim compensation for damages in case of unlawful processing.",
        "To exercise these rights, submit your written request to wixtoryy@gmail.com. We respond within thirty (30) days.",
      ],
    },
  ],
};

/* ==========================================================================
   HELPER GETTER FUNCTIONS
   ========================================================================== */
export function getLocalizedLegalDoc(
  docType: "privacy" | "cookie" | "kvkk",
  language: LanguageCode
): LegalDocument {
  const isTr = language === "tr";
  if (docType === "cookie") {
    return isTr ? COOKIE_POLICY_TR : COOKIE_POLICY_EN;
  }
  if (docType === "kvkk") {
    return isTr ? KVKK_TEXT_TR : KVKK_TEXT_EN;
  }
  return isTr ? PRIVACY_POLICY_TR : PRIVACY_POLICY_EN;
}
