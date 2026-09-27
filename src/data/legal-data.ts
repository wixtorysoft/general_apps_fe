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
  title: "Gizlilik Politikası (AstroVibe & Excuse AI)",
  subtitle:
    "Wixtory ekosistemi (AstroVibe & Excuse AI) için sıfır veri toplama, tamamen cihaz önbelleğinde çalışan yerel mimari ve 18 yaş altı gizlilik güvencesi.",
  lastUpdated: "24 Eylül 2026",
  effectiveDate: "08 Şubat 2026",
  companyName: "Wixtory Software & Digital Technologies",
  developerName: "Hacı Celal Aygar",
  contactEmail: "wixtorysoft@gmail.com",
  developerLocation: "Ankara, Yenimahalle, Turkey",
  website: "https://www.wixtory.com",
  sections: [
    {
      id: "no-personal-data",
      title: "1. Kişisel Veri Toplama Yok",
      badge: "Sıfır Veri Toplama",
      content: [
        "Gizliliğinize inanıyoruz. Wixtory ekosisteminde yer alan AstroVibe ve Excuse mobil uygulamaları herhangi bir kişisel tanımlayıcı bilgiyi toplamaz, saklamaz veya iletmez.",
        "Adınızı, e-posta adresinizi, telefon numaranızı veya diğer kişisel bilgilerinizi kesinlikle talep etmeyiz.",
      ],
    },
    {
      id: "local-cache",
      title: "2. Yerel İlerleme ve Tercih Takibi (Önbellek)",
      badge: "Cihaz İçi Önbellek",
      content: [
        "Kesintisiz bir deneyim sunmak için uygulamalarımız, tercihlerinizi ve ilerlemenizi yalnızca cihazınızda yerel olarak (istemci taraflı) takip eder.",
      ],
      subsections: [
        {
          subtitle: "Nasıl Çalışır?",
          subcontent: [
            "Her uygulamada nerede kaldığınızı ve tercihlerinizi hatırlamak için yerel bir Önbellek Servisi (SharedPreferences / NSUserDefaults / SQLite) kullanıyoruz.",
            "AstroVibe: Beğendiğiniz protez tırnak modelleri, burç/doğum saati girdileriniz ve tarot açılım geçmişiniz doğrudan telefonunuzun yerel önbelleğinde tutulur.",
            "Excuse AI: Acil durum kriz senaryolarınız, bahane kategorileriniz ve favori kayıtlarınız cihazınızın çevrimdışı yerel veritabanında saklanır.",
          ],
        },
        {
          subtitle: "Veri Konumu",
          subcontent: [
            "Bu veriler telefonunuzda kalır. Hiçbir uzak sunucuya aktarılmaz veya herhangi bir kişisel kimlikle bağlantılı değildir.",
          ],
        },
        {
          subtitle: "Kullanıcı Kontrolü",
          subcontent: [
            "İlerleme ve tercih verilerini cihazınızdan kalıcı olarak silmek için istediğiniz zaman cihaz ayarlarından 'Önbelleği Temizle' / 'Verileri Sıfırla' butonunu kullanabilir veya uygulamayı kaldırabilirsiniz.",
          ],
        },
      ],
    },
    {
      id: "statistics-offline",
      title: "3. İstatistikler & Çevrimdışı Çalışma",
      badge: "Yerel Hesaplama",
      content: [
        "Uygulamalarımız, performans ve yerel tercihlerinizi arayüz akışını kişiselleştirmek için gösterir.",
        "Bu istatistikler ve hesaplamalar yerel olarak oluşturulur ve asla üçüncü taraflarla paylaşılmaz veya uzak sunuculara iletilmez.",
      ],
    },
    {
      id: "third-party-ads",
      title: "4. Üçüncü Taraf Hizmetleri ve Reklamlar",
      badge: "Google AdMob",
      content: [
        "Uygulamalarımızın ücretsiz kalması ve geliştirilmeye devam etmesi için üçüncü taraf reklamlar (Google AdMob) içerebilir.",
        "Bu üçüncü taraf sağlayıcılar, ilgi alanlarınıza göre reklam göstermek için çerezler veya cihaz tanımlayıcıları kullanabilir. Bu tanımlayıcıları cihaz ayarlarınızdan (Kişiselleştirilmiş Reklamları Kapat / Reklam Kimliğini Sıfırla) dilediğiniz zaman yönetebilirsiniz.",
      ],
    },
    {
      id: "under-18-policy",
      title: "5. 18 Yaş Altı Kuralı (Çocukların ve Gençlerin Gizliliği)",
      badge: "18 Yaş Altı Koruma",
      content: [
        "AstroVibe ve Excuse uygulamaları, 18 yaşın altındaki bireylerden bilerek veya isteyerek hiçbir kişisel veri toplamaz, saklamaz veya talep etmez.",
        "Kişisel veri toplama mekanizmamız bulunmadığından çocukların veya gençlerin kimliğinin açığa çıkması veya risk altına girmesi kesinlikle söz konusu değildir.",
        "Ebeveynler ve vasiler diledikleri zaman çocuklarının cihazındaki uygulama önbelleğini temizleyebilir veya yerel tercihleri sıfırlayabilir.",
      ],
    },
    {
      id: "data-security",
      title: "6. Veri Güvenliği",
      badge: "HTTPS & Güvenli İletişim",
      content: [
        "Kişisel veri toplamadığımız için, kişisel kimliğinizin veritabanımız üzerinden tehlikeye atılması riski yoktur.",
        "Uygulama ve arka uç sunucumuz arasında yalnızca statik medya ve uygulama içeriğini (tırnak modelleri, tarot kartları, bahane şablonları) almak için güvenli iletişim (HTTPS / TLS) kullanıyoruz.",
      ],
    },
    {
      id: "contact",
      title: "7. İletişim",
      badge: "Geliştirici İletişim",
      content: [
        "Bu politika hakkında herhangi bir sorunuz için lütfen iletişime geçin:",
        "Developer: Hacı Celal Aygar",
        "E-posta: wixtorysoft@gmail.com",
        "Konum: Ankara, Yenimahalle, Turkey",
        "Web Sitesi: https://www.wixtory.com",
      ],
    },
  ],
};

export const PRIVACY_POLICY_EN: LegalDocument = {
  id: "privacy",
  title: "Privacy Policy (AstroVibe & Excuse AI)",
  subtitle:
    "Zero personal data collection, on-device local cache architecture, and under-18 privacy guarantees across the Wixtory ecosystem.",
  lastUpdated: "September 24, 2026",
  effectiveDate: "February 08, 2026",
  companyName: "Wixtory Software & Digital Technologies",
  developerName: "Hacı Celal Aygar",
  contactEmail: "wixtorysoft@gmail.com",
  developerLocation: "Ankara, Yenimahalle, Turkey",
  website: "https://www.wixtory.com",
  sections: [
    {
      id: "no-personal-data",
      title: "1. No Personal Data Collection",
      badge: "Zero Data Collection",
      content: [
        "We believe in your privacy. AstroVibe and Excuse do not collect, store, or transmit any personally identifiable information.",
        "We do not ask for your name, email address, phone number, or other personal details.",
      ],
    },
    {
      id: "local-cache",
      title: "2. Local Progress & Preference Tracking (Cache)",
      badge: "On-Device Storage",
      content: [
        "To provide a seamless experience, our apps track your preferences and progress locally on your device.",
      ],
      subsections: [
        {
          subtitle: "How It Works",
          subcontent: [
            "We use a local Cache Service (SharedPreferences / NSUserDefaults / SQLite) to remember your preferences and where you left off.",
            "AstroVibe: Your bookmarked press-on nail models, birth chart inputs, and tarot draws are preserved exclusively in your phone's local cache.",
            "Excuse AI: Your emergency excuse templates, crisis categories, and favorite picks reside in your phone's local offline database.",
          ],
        },
        {
          subtitle: "Data Location",
          subcontent: [
            "This data stays strictly on your phone. It is never uploaded to remote servers and is not linked to any personal identity.",
          ],
        },
        {
          subtitle: "User Control",
          subcontent: [
            "You can permanently delete progress and preference data from your device at any time by using the 'Clear Cache' / 'Clear Data' button in device settings or by uninstalling the application.",
          ],
        },
      ],
    },
    {
      id: "statistics-offline",
      title: "3. Statistics & Offline Functionality",
      badge: "Client-Side Processing",
      content: [
        "The apps display your preferences and history to personalize your interface flow.",
        "These statistics and calculations are generated entirely client-side and are never transmitted to remote servers or shared with third parties.",
      ],
    },
    {
      id: "third-party-ads",
      title: "4. Third-Party Services and Advertisements",
      badge: "Google AdMob",
      content: [
        "To keep our applications free to use, they may contain third-party advertisements (Google AdMob).",
        "These third-party providers may use cookies or device identifiers to display relevant advertisements based on your interests. You can manage these identifiers in your mobile device privacy settings at any time.",
      ],
    },
    {
      id: "under-18-policy",
      title: "5. Under-18 Policy (Child & Teen Privacy)",
      badge: "Under-18 Protection",
      content: [
        "AstroVibe and Excuse do not knowingly request, collect, or store any personal data from individuals under 18 years of age.",
        "Since our applications do not collect personal data, there is zero risk of minor identity compromise or data exposure.",
        "Parents and guardians can clear local device cache or reset preferences at any time through operating system settings.",
      ],
    },
    {
      id: "data-security",
      title: "6. Data Security",
      badge: "HTTPS & Secure Transport",
      content: [
        "Because we do not collect personal data, there is no risk of your personal identity being compromised through our database.",
        "Secure communication (HTTPS / TLS) is strictly used between the app and backend server only to fetch static media and application content (nail designs, tarot artwork, excuse templates).",
      ],
    },
    {
      id: "contact",
      title: "7. Contact",
      badge: "Developer Contact",
      content: [
        "For any questions regarding this policy, please contact:",
        "Developer: Hacı Celal Aygar",
        "Email: wixtorysoft@gmail.com",
        "Location: Ankara, Yenimahalle, Turkey",
        "Website: https://www.wixtory.com",
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
  contactEmail: "wixtorysoft@gmail.com",
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
  contactEmail: "wixtorysoft@gmail.com",
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
  contactEmail: "wixtorysoft@gmail.com",
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
        "Veri Sorumlusu İletişim: Hacı Celal Aygar - wixtorysoft@gmail.com - Yenimahalle / Ankara / Türkiye",
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
        "• Kayıtlı e-posta adresinizden wixtorysoft@gmail.com adresine yazılı olarak gönderebilirsiniz.",
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
  contactEmail: "wixtorysoft@gmail.com",
  developerLocation: "Ankara, Yenimahalle, Turkey",
  website: "https://www.wixtory.com",
  sections: [
    {
      id: "kvkk-intro",
      title: "1. Identity of the Data Controller",
      badge: "KVKK Art. 10/a",
      content: [
        "In accordance with Law No. 6698 on the Protection of Personal Data ('KVKK'), Hacı Celal Aygar (Wixtory Software), acting in the capacity of Data Controller, ensures rigorous security measures over your data.",
        "Data Controller Contact: Hacı Celal Aygar - wixtorysoft@gmail.com - Yenimahalle / Ankara / Turkey",
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
        "To exercise these rights, submit your written request to wixtorysoft@gmail.com. We respond within thirty (30) days.",
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
