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
   ========================================================================== */
export const PRIVACY_POLICY_TR: LegalDocument = {
  id: "privacy",
  title: "Gizlilik Politikası",
  subtitle: "Wixtory Ekosistemi için",
  lastUpdated: "5 Ekim 2026",
  effectiveDate: "8 Şubat 2026",
  companyName: "Wixtory Software & Digital Technologies",
  developerName: "Hacı Celal Aygar",
  contactEmail: "wixtoryy@gmail.com",
  developerLocation: "Ankara, Yenimahalle, Turkey",
  website: "https://www.wixtory.com",
  sections: [
    {
      id: "no-personal-data",
      title: "1. Sıfır Üyelik Sistemi ve Kişisel Veri Toplama Yok",
      badge: "Sıfır Üyelik & Sıfır Veri",
      content: [
        "Gizliliğinize en üst düzeyde ve tavizsiz önem veriyoruz. Wixtory ekosisteminde yer alan Wixtory: Domain Track, Wixtory: Language Box, AstroVibe, Excuse AI ve yayınlanan/yayınlanacak tüm mobil uygulamalarımızın hiçbirinde üyelik, kayıt veya kullanıcı hesabı açma zorunluluğu bulunmamaktadır.",
        "Uygulamalarımız ad, soyad, e-posta adresi, telefon numarası, konum, rehber, cihaz seri numarası veya herhangi bir kişisel kimlik bilgisini asla toplamaz, saklamaz, işlemez ve üçüncü şahıslarla paylaşmaz.",
        "Uygulamalarımızı cihazınıza indirdiğiniz andan itibaren hiçbir kişisel bilgi vermeksizin anında, güvenle ve eksiksiz kullanmaya başlayabilirsiniz.",
      ],
    },
    {
      id: "local-cache",
      title: "2. Yerel Veri Depolama ve Cihaz İçi Önbellek Sistemi (Caching)",
      badge: "Cihaz İçi Önbellek",
      content: [
        "Kesintisiz, ultra hızlı ve çevrimdışı öncelikli bir kullanıcı deneyimi sunabilmek için uygulamalarımız oyun ilerlemenizi, arama geçmişinizi, favorilerinizi ve tercihlerinizi yalnızca cihazınızda yerel olarak (istemci taraflı önbellek) saklar.",
      ],
      subsections: [
        {
          subtitle: "Nasıl Çalışır?",
          subcontent: [
            "Uygulamalarımızda tercihlerinizi ve nerede kaldığınızı hatırlamak için tamamen cihazınızın işletim sistemi üzerinde çalışan yerel bir Önbellek Servisi (SharedPreferences / NSUserDefaults / SQLite / LocalStorage) kullanılır.",
            "Wixtory: Domain Track: Gerçekleştirdiğiniz alan adı arama geçmişiniz, favorilere eklediğiniz alan adları, uzantı filtreleme tercihleri ve yerel arama sayaçlarınız yalnızca telefonunuzun yerel hafızasında saklanır.",
            "Wixtory: Language Box: Cümle Kurucu (Sentence Builder), Kelime Matrisi (Word Matrix), Kelime Pusulası (Word Compass) ve Karışık Kelimeler (Scrambled Words) oyunlarındaki ilerlemeniz, mevcut soru numaralarınız, seviye puanlarınız ve başarı istatistikleriniz yalnızca cihazınızın yerel önbelleğinde tutulur.",
            "AstroVibe: Beğendiğiniz protez tırnak modelleri, takı ilhamları, bebek isimleri, burç seçimleriniz ve tarot açılım geçmişiniz doğrudan telefonunuzun yerel önbelleğinde korunur.",
            "Excuse AI: Oluşturduğunuz mazeretler, acil durum kriz kategorileriniz ve favori kayıtlarınız telefonunuzun çevrimdışı yerel veritabanında saklanır.",
            "Yeni Eklenecek ve Gelecek Tüm Projeler: Wixtory portföyüne katılacak olan tüm yeni projeler istisnasız bu aynı sıfır üyelik ve cihaz içi yerel önbellek mimarisini kullanır; kullanıcı profillemesi ve sunucu tarafı veri kaydı barındırmaz.",
          ],
        },
        {
          subtitle: "Veri Konumu ve Mülkiyeti",
          subcontent: [
            "Bu veriler yalnızca ve tamamen sizin fiziksel cihazınızda kalır. Hiçbir merkezi sunucuya aktarılmaz, harici veritabanlarında depolanmaz ve herhangi bir kişisel kimlik veya hesapla asla ilişkilendirilmez.",
          ],
        },
        {
          subtitle: "Kullanıcı Kontrolü ('Önbelleği Temizle' Butonu)",
          subcontent: [
            "Kullanıcılarımız verileri üzerinde %100 denetime sahiptir. Oyun ilerlemenizi, arama geçmişinizi, favorilerinizi ve tercih verilerinizi dilediğiniz an uygulama ayarlarında yer alan 'Önbelleği Temizle' (Clear Cache) / 'Verileri Sıfırla' düğmesini kullanarak tek dokunuşla kalıcı olarak cihazınızdan silebilirsiniz.",
          ],
        },
      ],
    },
    {
      id: "statistics-offline",
      title: "3. Arama İstatistikleri ve Çevrimdışı Çalışma Kabiliyeti",
      badge: "İstemci Taraflı İşlem",
      content: [
        "Uygulamalarımız, kullanıcı deneyimini zenginleştirmek için aranan alan adı sayısı, öğrenilen kelime sayıları, en çok kontrol edilen uzantılar veya tercih edilen kategoriler gibi özet istatistikleri gösterebilir.",
        "Bu istatistikler ve sayaçlar yalnızca sizin görüntülemeniz amacıyla tamamen cihazınızın işlemcisinde yerel olarak üretilir; harici analitik şirketleriyle veya üçüncü taraflarla ASLA paylaşılmaz.",
        "İnternet bağlantınız olmadığında dahi, önceden sorgulanmış veya favorilenmiş verilerinizi yerel önbellek sayesinde güvenle inceleyebilirsiniz.",
      ],
    },
    {
      id: "device-permissions",
      title: "4. Cihaz İzinleri ve Donanım Erişimi Politikası",
      badge: "Hassas İzin Talep Edilmez",
      content: [
        "Wixtory uygulamalarının hiçbiri arka planda veya ön planda konum (GPS), telefon rehberi, kamera, mikrofon, SMS/arama geçmişi veya cihaz depolama alanındaki özel dosyalarınıza erişim izni TALEP ETMEZ.",
        "Uygulamalarımız yalnızca güncel içerik kataloglarını kontrol etmek ve sorguları gerçekleştirmek için standart internet ağ durumu iznine (`ACCESS_NETWORK_STATE`, `INTERNET`) ihtiyaç duyar.",
        "Kullanıcı çalışma veya burç hatırlatıcılarını açmayı tercih ederse, yalnızca işletim sisteminin standart yerel bildirim izni kullanılır; cihazınızın hiçbir donanım veya medya parçasına izinsiz erişim sağlanmaz.",
      ],
    },
    {
      id: "ai-algorithmic-transparency",
      title: "5. Yapay Zeka ve Algoritmik İçerik Şeffaflığı",
      badge: "Eğitim Verisi Olarak Saklanmaz",
      content: [
        "Excuse AI (durumsal mazeret üretimi), AstroVibe (tarot ve burç eşleştirme algoritmaları) ve Wixtory: Language Box (kelime zorluk seviyesi algoritmaları) gibi akıllı işlevlerimizde kullanıcı girdileri geçici (ephemeral) olarak işlenir.",
        "Kullanıcılarımızın girdiği senaryolar, kelimeler veya arama ifadeleri sunucularımızda ASLA kalıcı olarak depolanmaz, kullanıcı kimliğiyle eşleştirilmez veya yapay zeka modellerini eğitmek (training data) amacıyla kullanılmaz.",
        "Üretilen tüm içerikler tamamen eğlence, pratik yapma ve ilham alma amaçlıdır; algoritmalarımız kullanıcı davranışını profillemek veya ticari veri setleri oluşturmak için kullanılmaz.",
      ],
    },
    {
      id: "realtime-network",
      title: "6. Gerçek Zamanlı Ağ İletişimi ve Güvenli Bağlantı (APIs)",
      badge: "HTTPS & TLS 1.3",
      content: [
        "Wixtory: Domain Track uygulamasında anlık alan adı müsaitlik durumu kontrol edilirken veya diğer uygulamalarda dinamik katalog içerikleri alınırken, uygulamamız ile güvenli sunucumuz arasında gerçek zamanlı iletişim kurulur.",
        "Bu iletişim standart ve yüksek güvenlikli HTTPS / TLS 1.3 şifreleme protokolleri üzerinden gerçekleşir.",
        "Bu istekler esnasında sunucuya hiçbir kullanıcı kimliği, cihaz seri numarası veya kişisel veri iletilmez; yalnızca sorgulanan alan adı veya talep edilen içerik kodu işlenir.",
      ],
    },
    {
      id: "third-party-ads",
      title: "7. Üçüncü Taraf Hizmetleri ve Reklamlar (Google AdMob)",
      badge: "Google AdMob",
      content: [
        "Wixtory ekosistemindeki uygulamaların ücretsiz kalmasını sağlamak ve sunucu altyapı maliyetlerini karşılamak amacıyla uygulamalarımızda üçüncü taraf reklamlar (Google AdMob) gösterilmektedir.",
        "Bu üçüncü taraf reklam sağlayıcıları, ilgi alanlarınıza uygun reklamlar sunabilmek amacıyla standart mobil reklam tanımlayıcılarını (iOS'ta IDFA, Android'de AAID) veya çerez benzeri teknolojileri kullanabilir.",
        "Kullanıcılar diledikleri zaman mobil cihazlarının işletim sistemi ayarlarından (iOS: Ayarlar > Gizlilik ve Güvenlik > Takip; Android: Ayarlar > Gizlilik > Reklamlar) kişiselleştirilmiş reklamları kapatabilir veya reklam kimliklerini sıfırlayabilir.",
      ],
    },
    {
      id: "under-18-policy",
      title: "8. 18 Yaş Altı Kuralı (Çocukların ve Gençlerin Gizliliği)",
      badge: "18 Yaş Altı Koruma (COPPA / GDPR-K)",
      content: [
        "Wixtory uygulamaları, 18 yaşın altındaki bireylerden bilerek veya isteyerek hiçbir kişisel bilgi toplamaz, saklamaz veya talep etmez.",
        "Altyapımızda hiçbir kişisel veri toplama ve kullanıcı kaydı mekanizması bulunmadığından, çocukların veya gençlerin kimliğinin açığa çıkması, profillenmesi veya siber risk altına girmesi kesinlikle söz konusu değildir.",
        "Ebeveynler ve yasal vasiler diledikleri zaman çocuklarının cihazındaki uygulama önbelleğini temizleyebilir veya yerel tercihleri sıfırlayabilir.",
      ],
    },
    {
      id: "data-retention-deletion",
      title: "9. Veri Saklama Süresi ve Uygulama Kaldırma / Sıfırlama",
      badge: "Kaldırmayla Anında Silinir",
      content: [
        "Merkezi sunucularımızda hiçbir kullanıcı hesabı veya profil kaydı tutulmadığı için sunucu tarafında veri saklama süresi SIFIRDIR (0 gün).",
        "Cihazınızda saklanan arama geçmişi, kelime ilerlemesi veya favori kayıtları yalnızca siz uygulamayı cihazınızda tuttuğunuz sürece varlığını sürdürür.",
        "Uygulamayı cihazınızdan kaldırdığınızda (`uninstall`), işletim sisteminiz (iOS / Android) ilgili uygulamanın tüm yerel önbellek ve veritabanı dosyalarını anında ve geri döndürülemez biçimde kalıcı olarak siler.",
        "Ayrıca uygulamayı silmeden önce dilediğiniz an uygulama içerisindeki 'Önbelleği Temizle' butonuna basarak tüm kayıtları anında sıfırlayabilirsiniz.",
      ],
    },
    {
      id: "cross-border-transfers",
      title: "10. Sınır Ötesi / Uluslararası Veri Aktarımı Taahhüdü",
      badge: "Yurtdışı Veri Aktarımı Yok",
      content: [
        "6698 sayılı KVKK 9. Maddesi ve GDPR V. Bölümü uyarınca, Wixtory kullanıcılarının hiçbir kişisel verisi, kimliği veya kullanım geçmişi yabancı ülkelere, sınır ötesi sunuculara veya üçüncü taraf veri simsarlarına aktarılmaz.",
        "Tüm uygulamalarımız istemci taraflı (yerel cihaz) çalışma mimarisine sahip olduğundan, verileriniz fiziksel cihazınızın dışına çıkmaz.",
        "Yalnızca Google AdMob reklam altyapısının kendi küresel gizlilik sözleşmesi kapsamında işlenen anonim reklam istekleri Google sunucuları tarafından yönetilir.",
      ],
    },
    {
      id: "user-legal-rights",
      title: "11. Kullanıcının Yasal Hakları (KVKK Madde 11 & GDPR Hakları)",
      badge: "KVKK & GDPR Hakları",
      content: [
        "6698 sayılı KVKK 11. Maddesi ve GDPR 15-22. Maddeleri kapsamında her kullanıcı; kişisel verisinin işlenip işlenmediğini öğrenme, bilgi talep etme, silinmesini isteme ve kanuna aykırı işlem yapılması halinde zararın giderilmesini talep etme hakkına sahiptir.",
        "Sistemlerimizde hiçbir kullanıcı kimliği veya hesabı tutulmadığı için sunucu tarafında işlenen veya silinecek bir kişisel veri bulunmamaktadır.",
        "Yine de yasal haklarınız ve resmi bilgi talepleriniz için Veri Sorumlusu Hacı Celal Aygar'a `wixtoryy@gmail.com` e-posta adresi üzerinden 7/24 yazılı başvuruda bulunabilirsiniz. Başvurularınız en geç 30 gün içinde yasal mevzuat uyarınca ücretsiz sonuçlandırılır.",
      ],
    },
    {
      id: "data-security-vulnerability",
      title: "12. Veri Güvenliği, Teknik Tedbirler ve Güvenlik Zafiyeti Bildirimi",
      badge: "Teknik & İdari Tedbirler",
      content: [
        "Wixtory, tüm uygulamalarında ve dijital varlıklarında 'Tasarımda Gizlilik ve Güvenlik' (Privacy & Security by Design) ilkesini tavizsiz benimser.",
        "Cihazınızda tutulan yerel veriler, mobil işletim sistemlerinin korumalı kum havuzu (sandbox) alanlarında barındırılır. Başka hiçbir üçüncü parti uygulama izin almaksızın bu verilere erişemez.",
        "Sunucu iletişimlerimizin tamamı modern TLS 1.3 şifreleme ve PFS (Perfect Forward Secrecy) protokolleri ile korunmaktadır.",
        "Sorumlu Güvenlik Bildirimi (Responsible Disclosure): Uygulamalarımızda veya web servislerimizde potansiyel bir güvenlik açığı tespit eden güvenlik araştırmacıları ve kullanıcılar, bulgularını doğrudan `wixtoryy@gmail.com` adresine bildirebilir. Bildirilen bulgular en geç 48 saat içinde incelenir ve güvenlik tedbirleri ivedilikle hayata geçirilir.",
      ],
    },
    {
      id: "governing-law-dispute",
      title: "13. Uygulanacak Hukuk, Tüketici Hakları ve Uyuşmazlık Çözümü",
      badge: "Yetkili Yargı & Tüketici Hakları",
      content: [
        "Bu Gizlilik Politikası ve Wixtory uygulamalarının kullanımından doğabilecek her türlü hukuki uyuşmazlık, Türkiye Cumhuriyeti kanunlarına tabidir.",
        "Olası geri bildirim, soru ve uyuşmazlıklarda öncelikle dostane çözüm ve doğrudan geliştirici iletişimi (`wixtoryy@gmail.com`) esas alınır.",
        "Çözülemeyen uyuşmazlıklarda Ankara (Merkez) Mahkemeleri ve İcra Daireleri münhasıran yetkilidir. Ayrıca tüketiciler, 6502 sayılı Tüketicinin Korunması Hakkında Kanun uyarınca ikametgahlarının bulunduğu Tüketici Hakem Heyetlerine veya Tüketici Mahkemelerine başvurma hakkına sahiptir.",
      ],
    },
    {
      id: "ecosystem-scope-contact",
      title: "14. Kapsam, Evrensel Politika Güncellemeleri ve İletişim",
      badge: "Evrensel Ekosistem Çerçevesi",
      content: [
        "Bu gizlilik politikası Wixtory markası altında yayımlanan tüm mevcut mobil uygulamalar (Wixtory: Domain Track, Wixtory: Language Box, AstroVibe, Excuse AI) ve gelecekte portföye eklenecek tüm yeni yazılım projeleri için bağlayıcı genel yasal çatı metnidir.",
        "Politikada yapılabilecek her türlü güncelleme bu sayfada (https://apps.wixtory.com/privacy-policy) yayımlanacak ve yayımlandığı anda derhal yürürlüğe girecektir.",
        "Geliştirici / Veri Sorumlusu: Hacı Celal Aygar (Wixtory Software & Digital Technologies)",
        "Resmi İletişim & Destek E-postası: wixtoryy@gmail.com",
        "Konum: Ankara, Yenimahalle, Türkiye",
        "Resmi Web Sitesi: https://www.wixtory.com | Portalı: https://apps.wixtory.com",
      ],
    },
  ],
};

export const PRIVACY_POLICY_EN: LegalDocument = {
  id: "privacy",
  title: "Privacy Policy",
  subtitle: "for Wixtory Ecosystem",
  lastUpdated: "October 05, 2026",
  effectiveDate: "February 08, 2026",
  companyName: "Wixtory Software & Digital Technologies",
  developerName: "Hacı Celal Aygar",
  contactEmail: "wixtoryy@gmail.com",
  developerLocation: "Ankara, Yenimahalle, Turkey",
  website: "https://www.wixtory.com",
  sections: [
    {
      id: "no-personal-data",
      title: "1. Zero Membership System & No Personal Data Collection",
      badge: "Zero Accounts & Zero Telemetry",
      content: [
        "We believe fundamentally in your privacy. None of our applications—including Wixtory: Domain Track, Wixtory: Language Box, AstroVibe, Excuse AI, and any upcoming projects—feature any user registration, membership, or login systems.",
        "We do not collect, store, process, or transmit any Personally Identifiable Information (PII) such as your name, email address, phone number, location, contacts, or national identifiers.",
        "You can use all our applications freely, instantly, and completely without sharing any personal credentials.",
      ],
    },
    {
      id: "local-cache",
      title: "2. Local Data Storage & User Cache Control (Caching)",
      badge: "On-Device Storage",
      content: [
        "To provide a seamless, ultra-fast, and offline-compatible user experience, our applications track learning progress, search histories, and preferences strictly locally on your device (client-side).",
      ],
      subsections: [
        {
          subtitle: "How It Works",
          subcontent: [
            "We use a localized Cache Service (SharedPreferences / NSUserDefaults / SQLite / LocalStorage) operating exclusively on your device to remember where you left off.",
            "Wixtory: Domain Track: Your domain search history, bookmarked favorite domains, extension filters, and local search counters are saved locally on your device so you can access them instantly without re-typing.",
            "Wixtory: Language Box: Your progress in game modes (Sentence Builder, Word Matrix, Word Compass, Scrambled Words), current question numbers, skill levels, and game statistics are tracked strictly locally on your physical device.",
            "AstroVibe: Your bookmarked nail art models, jewelry picks, baby names, zodiac birth chart selections, and tarot card draws are preserved exclusively in your phone's local cache.",
            "Excuse AI: Your generated excuses, emergency crisis categories, and favorite picks reside in your phone's local offline database.",
            "Upcoming & Future Projects: All new applications joining the Wixtory portfolio automatically adhere to this exact same on-device caching design without server-side user profiling.",
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
            "Users maintain 100% control over their local data. You can permanently delete your game progress, search history, favorite lists, and cached preference data from your device at any time using the 'Clear Cache' button in the app settings or via your operating system's application management settings.",
          ],
        },
      ],
    },
    {
      id: "statistics-offline",
      title: "3. Search Statistics & Offline Capability",
      badge: "Client-Side Processing",
      content: [
        "Our applications may display summarized metrics such as the total number of domains searched, words learned, or favorite items saved for your own personal viewing.",
        "These metrics and calculations are generated entirely client-side using your device's processor and are NEVER transmitted to external analytics brokers or shared with third parties.",
        "Even without an active internet connection, you can view your locally cached search records and favorite items seamlessly.",
      ],
    },
    {
      id: "device-permissions",
      title: "4. Device Permissions & Hardware Access Policy",
      badge: "No Sensitive Permissions",
      content: [
        "None of the applications in the Wixtory ecosystem request or require sensitive device permissions such as GPS Location, Contacts, Camera, Microphone, SMS/Call logs, or Media Storage.",
        "Our applications only rely on standard baseline network state permissions (`ACCESS_NETWORK_STATE`, `INTERNET`) to verify connectivity and communicate with our encrypted content endpoints.",
        "If you choose to enable study or horoscope reminders, standard on-device local notification permissions are used. We never inspect, access, or scan your device's private hardware or personal media.",
      ],
    },
    {
      id: "ai-algorithmic-transparency",
      title: "5. AI & Algorithmic Processing Transparency",
      badge: "Zero Model Training",
      content: [
        "For smart features across Excuse AI (creative excuse generation), AstroVibe (tarot and astrology matching logic), and Language Box (adaptive vocabulary difficulty), all inputs are processed ephemerally.",
        "Your inputs, scenarios, and queries are NEVER stored permanently on remote servers, never linked to personal profiles, and NEVER used to train machine learning or AI models.",
        "All algorithmic outputs are designed strictly for entertainment, educational progress, and creative inspiration without any hidden user behavioral profiling or commercial data harvesting.",
      ],
    },
    {
      id: "realtime-network",
      title: "6. Real-Time Network Communication & APIs",
      badge: "HTTPS & TLS 1.3",
      content: [
        "When performing real-time domain availability checks (Wixtory: Domain Track) or fetching static design catalogs (AstroVibe, Excuse AI), the app establishes a secure connection with our backend server.",
        "All network communications are strictly encrypted using industry-standard HTTPS / TLS 1.3 protocols.",
        "No personal identity, user token, or device serial number is attached to these domain query requests; only the requested domain name or catalog asset is queried anonymously.",
      ],
    },
    {
      id: "third-party-ads",
      title: "7. Third-Party Services & Advertisements (Google AdMob)",
      badge: "Google AdMob",
      content: [
        "To keep our applications completely free to download and use without subscription barriers, our apps may feature third-party advertisements via Google AdMob.",
        "These third-party providers may utilize standard mobile advertising identifiers (IDFA on iOS, Google Advertising ID / AAID on Android) or cookie-like identifiers to display ads relevant to your interests, governed by Google's Privacy Policies.",
        "Users can manage, disable personalized ads, or reset their advertising identifier at any time through their device operating system settings (iOS: Settings > Privacy & Security > Tracking; Android: Settings > Privacy > Ads).",
      ],
    },
    {
      id: "under-18-policy",
      title: "8. Under-18 Policy (Child & Teen Privacy)",
      badge: "Under-18 Protection (COPPA / GDPR-K)",
      content: [
        "Wixtory applications do not knowingly solicit, collect, or store any personal data from individuals under 18 years of age.",
        "Because our architecture operates on a zero-personal-data and zero-account model, there is zero risk of minor identity compromise, tracking, or exposure.",
        "Parents and legal guardians can clear local device caches or reset preferences at any time through operating system settings.",
      ],
    },
    {
      id: "data-retention-deletion",
      title: "9. Data Retention & App Deletion / Erasure",
      badge: "Instant Wipe on Uninstall",
      content: [
        "Because we do not maintain user accounts or identity registries on centralized servers, server-side personal data retention is ZERO (0 days).",
        "All locally stored search queries, vocabulary skills, and bookmark preferences exist solely on your physical device for as long as you keep the app installed.",
        "Uninstalling the application from your operating system (iOS / Android) immediately and permanently purges all local databases, cache files, and preferences without leaving trace files behind.",
        "You can also manually reset all local data at any time via the 'Clear Cache' button in the settings menu without needing to uninstall the app.",
      ],
    },
    {
      id: "cross-border-transfers",
      title: "10. Cross-Border & International Data Transfer Commitment",
      badge: "No Cross-Border Transfers",
      content: [
        "In compliance with GDPR Chapter V and KVKK Article 9, Wixtory does not transfer personal data, identities, or search records across international borders or to third-party data brokers.",
        "Because our core software architecture is client-side and on-device, your usage data remains strictly within your physical possession.",
        "The only external interactions are anonymous advertisement requests governed directly by Google AdMob's own global compliance framework.",
      ],
    },
    {
      id: "user-legal-rights",
      title: "11. Your Legal Rights (KVKK Article 11 & GDPR Articles 15-22)",
      badge: "User Data Rights",
      content: [
        "Under GDPR Articles 15-22 and KVKK Article 11, you have the right to access, rectify, erase, restrict processing, and request information regarding your personal data.",
        "Because we operate on a strict zero-account and zero-PII architecture, our servers hold no personal records associated with you to retrieve or delete.",
        "Nevertheless, for any legal inquiries or formal requests, you may contact Data Controller Hacı Celal Aygar directly at `wixtoryy@gmail.com`. All legitimate inquiries are resolved free of charge within 30 days.",
      ],
    },
    {
      id: "data-security-vulnerability",
      title: "12. Data Security, Technical Safeguards & Responsible Vulnerability Disclosure",
      badge: "Technical & Administrative Safeguards",
      content: [
        "Wixtory strictly adheres to the principle of 'Privacy & Security by Design' across all current and future software applications.",
        "All data stored on your device is kept inside the operating system's isolated sandbox storage (iOS Keychain/UserDefaults & Android Scoped Storage), ensuring no other application can access your local data without explicit operating system consent.",
        "All external network interactions utilize TLS 1.3 encryption with Perfect Forward Secrecy (PFS) to prevent interception.",
        "Responsible Vulnerability Disclosure: We welcome constructive collaboration with independent security researchers. If you identify a potential security or privacy flaw, please report it confidentially to `wixtoryy@gmail.com`. All reports are acknowledged within 48 hours and resolved promptly.",
      ],
    },
    {
      id: "governing-law-dispute",
      title: "13. Governing Law, Consumer Rights & Dispute Resolution",
      badge: "Jurisdiction & Consumer Rights",
      content: [
        "This Privacy Policy and any disputes arising from the use of Wixtory applications shall be governed by and construed in accordance with the laws of the Republic of Turkey.",
        "In the event of any concern or dispute, we strongly encourage contacting us directly at `wixtoryy@gmail.com` for an amicable and speedy resolution.",
        "Any formal unresolved disputes shall be subject to the exclusive jurisdiction of the Courts and Enforcement Directorates of Ankara, Turkey, without prejudice to consumer protection rights enforceable before local Consumer Arbitration Committees.",
      ],
    },
    {
      id: "ecosystem-scope-contact",
      title: "14. Universal Scope, Policy Updates & Controller Verification",
      badge: "Ecosystem Framework",
      content: [
        "This privacy policy serves as the universal umbrella framework for all active Wixtory mobile applications (Wixtory: Domain Track, Wixtory: Language Box, AstroVibe, Excuse AI) as well as all future software releases.",
        "Any updates will be posted immediately on this portal (https://apps.wixtory.com/privacy-policy) and will take effect upon publication.",
        "Publisher & Data Controller: Hacı Celal Aygar (Wixtory Software & Digital Technologies)",
        "Official Contact Email: wixtoryy@gmail.com",
        "Location: Ankara, Yenimahalle, Turkey",
        "Website: https://www.wixtory.com | Apps Portal: https://apps.wixtory.com",
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
          [
            "domaintrack_history (SharedPreferences / Storage)",
            "İşlevsel (Mobil/Web)",
            "Wixtory: Domain Track alan adı arama geçmişinizi ve favori alan adı listenizi yerel olarak saklar.",
            "Kullanıcı temizleyene kadar",
          ],
          [
            "languagebox_progress (Prefs / LocalStorage)",
            "İşlevsel (Mobil/Web)",
            "Wixtory: Language Box oyun ilerlemenizi, seviye skorlarınızı ve öğrenilen kelime istatistiklerinizi cihazınızda tutar.",
            "Kullanıcı temizleyene kadar",
          ],
        ],
      },
    },
    {
      id: "project-storage-details",
      title: "3. Projeler Bazında Çerez ve Yerel Depolama Kullanımı",
      badge: "Mobil & Web Ekosistemi",
      content: [
        "Her projemizin istemci taraflı depolama prensipleri:",
      ],
      appSpecific: [
        {
          appName: "Wixtory: Domain Track",
          appSlug: "domain-track",
          details: [
            "🔍 Arama Geçmişi: Sorguladığınız alan adları ve uzantı filtreleri yalnızca cihazınızın yerel belleğinde saklanır.",
            "⭐ Favori Listesi: Yıldızladığınız alan adları sunucuya değil, telefonunuzun SharedPreferences / yerel hafızasına yazılır.",
            "📊 Çevrimdışı Sayaç: Toplam kontrol edilen alan adı sayısı cihazınızda hesaplanır.",
          ],
        },
        {
          appName: "Wixtory: Language Box",
          appSlug: "language-box",
          details: [
            "🎮 Oyun İlerlemesi: Cümle Kurucu, Kelime Matrisi, Kelime Pusulası gibi modlardaki soru numaralarınız ve skorlarınız cihazınızın yerel önbelleğinde tutulur.",
            "🧠 Öğrenme İstatistikleri: Günlük serileriniz ve başarı dereceleriniz harici sunuculara gönderilmez.",
            "⚡ Anında Sıfırlama: 'Önbelleği Temizle' seçeneğiyle tüm oyun verilerini dilediğiniz an sıfırlayabilirsiniz.",
          ],
        },
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
          appName: "Excuse AI",
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
          [
            "domaintrack_history (SharedPreferences / Storage)",
            "Functional (Mobile/Web)",
            "Stores your domain search history and bookmarked domains locally.",
            "Until cleared by user",
          ],
          [
            "languagebox_progress (Prefs / LocalStorage)",
            "Functional (Mobile/Web)",
            "Stores game progression, question indices, and vocabulary scores locally.",
            "Until cleared by user",
          ],
        ],
      },
    },
    {
      id: "project-storage-details",
      title: "3. Project-Specific Storage Paradigms",
      badge: "Mobile & Web Ecosystem",
      content: [
        "Project-specific client-side storage policies:",
      ],
      appSpecific: [
        {
          appName: "Wixtory: Domain Track",
          appSlug: "domain-track",
          details: [
            "🔍 Search History: Checked domains and extension filters are saved strictly in your device's local memory.",
            "⭐ Bookmarks: Starred domains are written directly to on-device storage; zero server tracking.",
            "📊 Client Counters: Aggregated check metrics are evaluated locally without external telemetry.",
          ],
        },
        {
          appName: "Wixtory: Language Box",
          appSlug: "language-box",
          details: [
            "🎮 Game Progress: Sentence Builder, Word Matrix, Word Compass, and Scrambled Words progress is stored in local preferences.",
            "🧠 Learning Stats: Daily streaks and skill level scores remain on your physical device.",
            "⚡ Instant Reset: Purge all local data instantly with the 'Clear Cache' button.",
          ],
        },
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
          appName: "Excuse AI",
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
   APP-SPECIFIC PRIVACY POLICIES (LANGUAGE BOX & DOMAIN TRACK)
   ========================================================================== */
export const LANGUAGE_BOX_PRIVACY_TR: LegalDocument = {
  id: "privacy",
  title: "Gizlilik Politikası",
  subtitle: "Wixtory Language Box için",
  lastUpdated: "08 Şubat 2026",
  effectiveDate: "8 Şubat 2026",
  companyName: "Wixtory Software & Digital Technologies",
  developerName: "Hacı Celal Aygar",
  contactEmail: "wixtoryy@gmail.com",
  developerLocation: "Ankara, Yenimahalle, Turkey",
  website: "https://www.wixtory.com",
  sections: [
    {
      id: "no-personal-data",
      title: "1. Kişisel Veri Toplama Yok",
      content: [
        "Gizliliğinize inanıyoruz. Language Box herhangi bir kişisel tanımlayıcı bilgiyi toplamaz, saklamaz veya iletmez. Adınızı, e-posta adresinizi, telefon numaranızı veya diğer kişisel bilgilerinizi talep etmeyiz.",
      ],
    },
    {
      id: "local-cache",
      title: "2. Yerel İlerleme Takibi (Önbellek)",
      content: [
        "Kesintisiz bir öğrenme deneyimi sunmak için uygulama, ilerlemenizi (örneğin, mevcut soru numarası ve oyun istatistikleri) cihazınızda yerel olarak takip eder.",
      ],
      subsections: [
        {
          subtitle: "Nasıl çalışır",
          subcontent: [
            "Her oyun modunda (Cümle Kurucu, Karışık Kelime vb.) nerede kaldığınızı hatırlamak için yerel bir Önbellek Servisi kullanıyoruz.",
          ],
        },
        {
          subtitle: "Veri Konumu",
          subcontent: [
            "Bu veriler telefonunuzda kalır. Herhangi bir kişisel kimlikle bağlantılı değildir.",
          ],
        },
        {
          subtitle: "Kontrol",
          subcontent: [
            'İlerleme verilerini cihazınızdan kalıcı olarak silmek için istediğiniz zaman ayarlardaki "Önbelleği Temizle" butonunu kullanabilirsiniz.',
          ],
        },
      ],
    },
    {
      id: "statistics",
      title: "3. İstatistikler",
      content: [
        "Uygulama, oyunlardaki performansınıza göre beceri seviyelerinizi gösterir. Bu istatistikler yerel olarak oluşturulur ve üçüncü taraflarla paylaşılmaz.",
      ],
    },
    {
      id: "third-party-ads",
      title: "4. Üçüncü Taraf Hizmetleri ve Reklamlar",
      content: [
        "Uygulama ücretsiz kalması için üçüncü taraf reklamlar (Google AdMob) içermektedir. Bu üçüncü taraf sağlayıcılar, ilgi alanlarınıza göre reklam göstermek için çerezler veya cihaz tanımlayıcıları kullanabilir. Bu tanımlayıcıları cihaz ayarlarınızdan yönetebilirsiniz.",
      ],
    },
    {
      id: "data-security",
      title: "5. Veri Güvenliği",
      content: [
        "Kişisel veri toplamadığımız için, kişisel kimliğinizin veritabanımız üzerinden tehlikeye atılması riski yoktur. Uygulama ve arka uç sunucumuz arasında oyun içeriğini (soru ve cevapları) almak için güvenli iletişim (HTTPS) kullanıyoruz.",
      ],
    },
    {
      id: "contact",
      title: "6. İletişim",
      content: [
        "Bu politika hakkında herhangi bir sorunuz için lütfen iletişime geçin:",
      ],
    },
  ],
};

export const LANGUAGE_BOX_PRIVACY_EN: LegalDocument = {
  id: "privacy",
  title: "Privacy Policy",
  subtitle: "for Wixtory Language Box",
  lastUpdated: "February 08, 2026",
  effectiveDate: "February 8, 2026",
  companyName: "Wixtory Software & Digital Technologies",
  developerName: "Hacı Celal Aygar",
  contactEmail: "wixtoryy@gmail.com",
  developerLocation: "Ankara, Yenimahalle, Turkey",
  website: "https://www.wixtory.com",
  sections: [
    {
      id: "no-personal-data",
      title: "1. No Personal Data Collection",
      content: [
        "We believe in your privacy. Language Box does not collect, store, or transmit any personally identifiable information. We do not ask for your name, email address, phone number, or any other personal credentials.",
      ],
    },
    {
      id: "local-cache",
      title: "2. Local Progress Tracking (Caching)",
      content: [
        "To provide a seamless learning experience, the App tracks your progress (e.g., current question number and game statistics) locally on your device.",
      ],
      subsections: [
        {
          subtitle: "How it works",
          subcontent: [
            "We use a local Cache Service to remember where you left off in each game mode (Sentence Builder, Scrambled Word, etc.).",
          ],
        },
        {
          subtitle: "Data Location",
          subcontent: [
            "This data stays on your phone. It is not linked to any personal identity.",
          ],
        },
        {
          subtitle: "Control",
          subcontent: [
            'You can use the "Clear Cache" button in the settings at any time to permanently delete this progress data from your device.',
          ],
        },
      ],
    },
    {
      id: "statistics",
      title: "3. Statistics",
      content: [
        "The App displays your skill levels based on your performance in the games. These statistics are generated locally for your own viewing and are not shared with third parties.",
      ],
    },
    {
      id: "third-party-ads",
      title: "4. Third-Party Services & Ads",
      content: [
        "The App includes third-party advertisements (Google AdMob) to remain free to use. These third-party providers may use cookies or device identifiers to serve ads based on your interests. You can manage these identifiers through your device settings.",
      ],
    },
    {
      id: "data-security",
      title: "5. Data Security",
      content: [
        "Since we do not collect personal data, there is no risk of your personal identity being compromised through our database. We use secure communication (HTTPS) between the App and our backend server to fetch game content (questions and answers).",
      ],
    },
    {
      id: "contact",
      title: "6. Contact",
      content: [
        "For any questions regarding this policy, please contact:",
      ],
    },
  ],
};

export const DOMAIN_TRACK_PRIVACY_TR: LegalDocument = {
  id: "privacy",
  title: "Gizlilik Politikası",
  subtitle: "Wixtory: Domain Track için",
  lastUpdated: "08 Şubat 2026",
  effectiveDate: "8 Şubat 2026",
  companyName: "Wixtory Software & Digital Technologies",
  developerName: "Hacı Celal Aygar",
  contactEmail: "wixtoryy@gmail.com",
  developerLocation: "Ankara, Yenimahalle, Turkey",
  website: "https://www.wixtory.com",
  sections: [
    {
      id: "no-personal-data",
      title: "1. Kişisel Veri Toplama Yok",
      content: [
        "Gizliliğinize inanıyoruz. Wixtory Domain Track herhangi bir kişisel olarak tanımlanabilir bilgi toplamaz, saklamaz veya iletmez. Adınızı, e-posta adresinizi, telefon numaranızı veya başka herhangi bir kişisel kimlik bilginizi talep etmeyiz.",
      ],
    },
    {
      id: "local-cache",
      title: "2. Yerel Veri Depolama",
      content: [],
      subsections: [
        {
          subtitle: "Nasıl çalışır:",
          subcontent: [
            "Uygulama, alan adı arama geçmişinizi ve favori alan adlarınızı yerel bir Önbellek Hizmeti kullanarak cihazınızda yerel olarak saklar, böylece bunlara daha sonra kolayca erişebilirsiniz.",
          ],
        },
        {
          subtitle: "Veri Konumu:",
          subcontent: [
            "Bu veriler cihazınızda kalır. Herhangi bir kişisel kimlik veya hesapla bağlantılı değildir.",
          ],
        },
        {
          subtitle: "Kontrol:",
          subcontent: [
            'Arama geçmişinizi ve favori verilerinizi cihazınızdan kalıcı olarak silmek için ayarlardaki "Önbelleği Temizle" düğmesini istediğiniz zaman kullanabilirsiniz.',
          ],
        },
      ],
    },
    {
      id: "statistics",
      title: "3. Arama İstatistikleri",
      content: [
        "Uygulama, aranan alan adı sayısı ve en çok kontrol ettiğiniz uzantılar gibi arama istatistiklerini gösterebilir. Bu istatistikler kendi görüntünüz için cihazınızda yerel olarak oluşturulur ve üçüncü taraflarla paylaşılmaz.",
      ],
    },
    {
      id: "third-party-ads",
      title: "4. Üçüncü Taraf Hizmetleri ve Reklamlar",
      content: [
        "Uygulama, ücretsiz kalabilmek için üçüncü taraf reklamlar (Google AdMob) içermektedir. Bu üçüncü taraf sağlayıcılar, ilgi alanlarınıza göre reklam sunmak için çerezler veya cihaz tanımlayıcıları kullanabilir. Bu tanımlayıcıları cihaz ayarlarınız üzerinden yönetebilirsiniz.",
      ],
    },
    {
      id: "data-security",
      title: "5. Veri Güvenliği",
      content: [
        "Kişisel veri toplamadığımız için, kişisel kimliğinizin veritabanımız aracılığıyla tehlikeye atılma riski yoktur. Uygulama ve arka uç sunucumuz arasında alan adı kullanılabilirliğini gerçek zamanlı olarak kontrol etmek için güvenli iletişim (HTTPS) kullanıyoruz.",
      ],
    },
    {
      id: "contact",
      title: "6. İletişim",
      content: [
        "Bu politikayla ilgili herhangi bir sorunuz için lütfen iletişime geçin:",
      ],
    },
  ],
};

export const DOMAIN_TRACK_PRIVACY_EN: LegalDocument = {
  id: "privacy",
  title: "Privacy Policy",
  subtitle: "for Wixtory: Domain Track",
  lastUpdated: "February 08, 2026",
  effectiveDate: "February 8, 2026",
  companyName: "Wixtory Software & Digital Technologies",
  developerName: "Hacı Celal Aygar",
  contactEmail: "wixtoryy@gmail.com",
  developerLocation: "Ankara, Yenimahalle, Turkey",
  website: "https://www.wixtory.com",
  sections: [
    {
      id: "no-personal-data",
      title: "1. No Personal Data Collection",
      content: [
        "We believe in your privacy. Wixtory Domain Track does not collect, store, or transmit any personally identifiable information. We do not ask for your name, email address, phone number, or any other personal credentials.",
      ],
    },
    {
      id: "local-cache",
      title: "2. Local Data Storage",
      content: [],
      subsections: [
        {
          subtitle: "How it works:",
          subcontent: [
            "The App saves your domain search history and favorite domains locally on your device using a local Cache Service, so you can easily access them later.",
          ],
        },
        {
          subtitle: "Data Location:",
          subcontent: [
            "This data stays on your device. It is not linked to any personal identity or account.",
          ],
        },
        {
          subtitle: "Control:",
          subcontent: [
            'You can use the "Clear Cache" button in the settings at any time to permanently delete your search history and favorites data from your device.',
          ],
        },
      ],
    },
    {
      id: "statistics",
      title: "3. Search Statistics",
      content: [
        "The App may display search statistics such as the number of domains searched and your most checked extensions. These statistics are generated locally on your device for your own viewing and are not shared with third parties.",
      ],
    },
    {
      id: "third-party-ads",
      title: "4. Third-Party Services & Ads",
      content: [
        "The App includes third-party advertisements (Google AdMob) to remain free to use. These third-party providers may use cookies or device identifiers to serve ads based on your interests. You can manage these identifiers through your device settings.",
      ],
    },
    {
      id: "data-security",
      title: "5. Data Security",
      content: [
        "Since we do not collect personal data, there is no risk of your personal identity being compromised through our database. We use secure communication (HTTPS) between the App and our backend server to check domain availability in real-time.",
      ],
    },
    {
      id: "contact",
      title: "6. Contact",
      content: [
        "For any questions regarding this policy, please contact:",
      ],
    },
  ],
};

/* ==========================================================================
   HELPER GETTER FUNCTIONS
   ========================================================================== */
const LEGAL_DOC_MAP: Partial<Record<LanguageCode, Record<"privacy" | "cookie" | "kvkk", LegalDocument>>> = {
  tr: {
    privacy: PRIVACY_POLICY_TR,
    cookie: COOKIE_POLICY_TR,
    kvkk: KVKK_TEXT_TR,
  },
  en: {
    privacy: PRIVACY_POLICY_EN,
    cookie: COOKIE_POLICY_EN,
    kvkk: KVKK_TEXT_EN,
  },
};

const APP_SPECIFIC_MAP: Partial<Record<LanguageCode, Record<string, LegalDocument>>> = {
  tr: {
    "language-box": LANGUAGE_BOX_PRIVACY_TR,
    "domain-track": DOMAIN_TRACK_PRIVACY_TR,
  },
  en: {
    "language-box": LANGUAGE_BOX_PRIVACY_EN,
    "domain-track": DOMAIN_TRACK_PRIVACY_EN,
  },
};

export function getLocalizedLegalDoc(
  docType: "privacy" | "cookie" | "kvkk",
  language: LanguageCode
): LegalDocument {
  const localized = LEGAL_DOC_MAP[language]?.[docType];
  if (localized) return localized;
  return LEGAL_DOC_MAP.en?.[docType] || LEGAL_DOC_MAP.tr![docType];
}

export function getAppSpecificLegalDoc(
  docType: "privacy" | "cookie" | "kvkk",
  appId: string,
  language: LanguageCode
): LegalDocument {
  if (docType === "privacy") {
    const appDoc = APP_SPECIFIC_MAP[language]?.[appId] || APP_SPECIFIC_MAP.en?.[appId];
    if (appDoc) return appDoc;
  }
  return getLocalizedLegalDoc(docType, language);
}


