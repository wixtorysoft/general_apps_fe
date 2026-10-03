import { LanguageCode } from "@/data/translations";

export interface PolicySection {
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
}

export interface PrivacyPolicyData {
  title: string;
  subtitle: string;
  lastUpdated: string;
  effectiveDate: string;
  companyName: string;
  contactEmail: string;
  supportedAppsSummary: string;
  sections: PolicySection[];
}

export const PRIVACY_POLICY_DATA_TR: PrivacyPolicyData = {
  title: "Gizlilik Politikası (Wixtory Mobil Uygulamaları & Dijital Ekosistem)",
  subtitle: "Wixtory ekosisteminde yer alan tüm mobil uygulamalar (Wixtory: Domain Track, AstroVibe, Excuse AI ve gelecekteki tüm projeler) için sıfır veri toplama, tamamen cihaz önbelleğinde çalışan yerel mimari, Google AdMob ve 18 yaş altı gizlilik güvencesi.",
  lastUpdated: "03 Ekim 2026",
  effectiveDate: "08 Şubat 2026",
  companyName: "Wixtory Software & Digital Technologies",
  contactEmail: "wixtoryy@gmail.com",
  supportedAppsSummary: "Bu gizlilik politikası; Wixtory markası altında yayımlanan tüm mevcut mobil uygulamalar (Wixtory: Domain Track, AstroVibe, Excuse AI) ve gelecekte eklenecek tüm yazılım projeleri için bağlayıcı ortak yasal çerçevedir.",
  sections: [
    {
      id: "no-personal-data",
      title: "1. Kişisel Veri Toplama Yok",
      badge: "Sıfır Veri Toplama",
      content: [
        "Gizliliğinize en üst düzeyde önem veriyoruz. Wixtory ekosisteminde yer alan Wixtory: Domain Track, AstroVibe, Excuse AI ve yayınlanan tüm mobil uygulamalarımız herhangi bir kişisel tanımlayıcı bilgiyi (ad, soyad, e-posta, telefon numarası, kimlik numarası vb.) toplamaz, saklamaz, işlemez veya üçüncü şahıslara iletmez.",
        "Uygulamalarımızı kullanmak için hesap oluşturmanız, üye girişi yapmanız veya kişisel kimlik bilgilerinizi paylaşmanız kesinlikle gerekmez.",
      ],
    },
    {
      id: "local-cache",
      title: "2. Yerel Veri Depolama ve Cihaz İçi Önbellek Denetimi",
      badge: "Cihaz İçi Önbellek",
      content: [
        "Kesintisiz, hızlı ve çevrimdışı destekli bir deneyim sunmak için uygulamalarımız tercihlerinizi, geçmişinizi ve ayarlarınızı yalnızca cihazınızda yerel olarak (istemci taraflı) saklar.",
      ],
      subsections: [
        {
          subtitle: "Nasıl Çalışır?",
          subcontent: [
            "Uygulamalarımızda tercihlerinizi ve geçmişinizi hatırlamak için tamamen cihazınız üzerinde çalışan yerel bir Önbellek Servisi (SharedPreferences / NSUserDefaults / SQLite) kullanılır.",
            "Wixtory: Domain Track: Gerçekleştirdiğiniz alan adı arama geçmişiniz, favorilere eklediğiniz alan adları ve seçtiğiniz uzantı tercihleri yalnızca cihazınızın yerel önbelleğinde saklanır.",
            "AstroVibe: Beğendiğiniz protez tırnak modelleri, burç/doğum saati girdileriniz ve tarot açılım geçmişiniz doğrudan telefonunuzun yerel önbelleğinde tutulur.",
            "Excuse AI: Acil durum kriz senaryolarınız, bahane kategorileriniz ve favori kayıtlarınız cihazınızın çevrimdışı yerel veritabanında saklanır.",
          ],
        },
        {
          subtitle: "Veri Konumu ve Mülkiyeti",
          subcontent: [
            "Bu veriler yalnızca ve tamamen sizin cihazınızda kalır. Hiçbir merkezi sunucuya aktarılmaz, harici veritabanlarında depolanmaz veya herhangi bir kişisel kimlikle eşleştirilmez.",
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
        "Wixtory uygulamaları, 18 yaşın altındaki bireylerden bilerek veya isteyerek hiçbir kişisel veri toplamaz, saklamaz veya talep etmez.",
        "Kişisel veri toplama mekanizmamız bulunmadığından çocukların veya gençlerin kimliğinin açığa çıkması veya risk altına girmesi kesinlikle söz konusu değildir.",
        "Ebeveynler ve vasiler diledikleri zaman çocuklarının cihazındaki uygulama önbelleğini temizleyebilir veya yerel tercihleri sıfırlayabilir.",
      ],
    },
    {
      id: "data-security",
      title: "7. Veri Güvenliği",
      badge: "Uçtan Uca Koruma",
      content: [
        "Kişisel veri toplamadığımız için, kişisel kimliğinizin veritabanımız üzerinden tehlikeye atılması riski yoktur.",
        "Uygulama ve arka uç sunucumuz arasında yalnızca statik medya ve alan adı kontrol istekleri için güvenli iletişim (HTTPS / TLS 1.3) kullanıyoruz.",
      ],
    },
    {
      id: "contact",
      title: "8. İletişim & Geliştirici Bilgileri",
      badge: "Geliştirici İletişim",
      content: [
        "Bu politika hakkında herhangi bir sorunuz için lütfen iletişime geçin:",
        "Developer: Hacı Celal Aygar",
        "E-posta: wixtoryy@gmail.com",
        "Konum: Ankara, Yenimahalle, Turkey",
        "Web Sitesi: https://www.wixtory.com",
        "Uygulama Portalı: https://apps.wixtory.com",
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

export const PRIVACY_POLICY_DATA_EN: PrivacyPolicyData = {
  title: "Privacy Policy (Wixtory Mobile Apps & Digital Ecosystem)",
  subtitle: "Universal privacy policy covering all mobile applications across the Wixtory ecosystem (Wixtory: Domain Track, AstroVibe, Excuse AI, and future projects) with zero personal data collection, on-device cache architecture, Google AdMob disclosures, and under-18 privacy guarantees.",
  lastUpdated: "October 03, 2026",
  effectiveDate: "February 08, 2026",
  companyName: "Wixtory Software & Digital Technologies",
  contactEmail: "wixtoryy@gmail.com",
  supportedAppsSummary: "This unified privacy policy acts as the binding legal framework across Wixtory: Domain Track, AstroVibe, Excuse AI, and all future software releases.",
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
            "AstroVibe: Your bookmarked press-on nail models, birth chart inputs, and tarot draws are preserved exclusively in your phone's local cache.",
            "Excuse AI: Your emergency excuse templates, crisis categories, and favorite picks reside in your phone's local offline database.",
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
        "Parents and legal guardians can clear local device caches or reset preferences at any time through operating system settings.",
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

export const PRIVACY_POLICY_DATA = PRIVACY_POLICY_DATA_TR;

export function getLocalizedPrivacyPolicy(language: LanguageCode): PrivacyPolicyData {
  if (language === "tr") {
    return PRIVACY_POLICY_DATA_TR;
  }
  return PRIVACY_POLICY_DATA_EN;
}

