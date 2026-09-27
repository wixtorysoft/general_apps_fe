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
  title: "Gizlilik Politikası (AstroVibe & Excuse AI)",
  subtitle: "Wixtory ekosistemi (AstroVibe & Excuse AI) için sıfır veri toplama, tamamen cihaz önbelleğinde çalışan yerel mimari ve 18 yaş altı gizlilik güvencesi.",
  lastUpdated: "24 Eylül 2026",
  effectiveDate: "08 Şubat 2026",
  companyName: "Wixtory Software & Digital Technologies",
  contactEmail: "wixtorysoft@gmail.com",
  supportedAppsSummary: "Bu gizlilik politikası; AstroVibe ve Excuse uygulamaları için bağlayıcı ortak yasal çerçevedir.",
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

export const PRIVACY_POLICY_DATA_EN: PrivacyPolicyData = {
  title: "Privacy Policy (AstroVibe & Excuse AI)",
  subtitle: "Zero personal data collection, on-device local cache architecture, and under-18 privacy guarantees across the Wixtory ecosystem.",
  lastUpdated: "September 24, 2026",
  effectiveDate: "February 08, 2026",
  companyName: "Wixtory Software & Digital Technologies",
  contactEmail: "wixtorysoft@gmail.com",
  supportedAppsSummary: "This unified privacy policy acts as the binding legal framework across AstroVibe and Excuse applications.",
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

export const PRIVACY_POLICY_DATA = PRIVACY_POLICY_DATA_TR;

export function getLocalizedPrivacyPolicy(language: LanguageCode): PrivacyPolicyData {
  if (language === "tr") {
    return PRIVACY_POLICY_DATA_TR;
  }
  return PRIVACY_POLICY_DATA_EN;
}
