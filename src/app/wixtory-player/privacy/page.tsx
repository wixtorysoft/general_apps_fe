"use client";

import React from "react";
import Link from "next/link";
import { Shield, ArrowLeft, Lock, FileCheck, HardDrive, Smartphone } from "lucide-react";
import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function WixtoryPlayerPrivacyPage() {
  const { language } = useLanguage();
  const { currentThemeMeta } = useTheme();
  const isDark = currentThemeMeta.isDark;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        color: "var(--text-main)",
        position: "relative",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <MainNavbar />

      <main
        style={{
          maxWidth: "920px",
          margin: "0 auto",
          padding: "50px 24px 100px",
        }}
      >
        {/* Back Link */}
        <Link
          href="/wixtory-player"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: isDark ? "#00F2FE" : "#0284C7",
            fontSize: "13px",
            fontWeight: 700,
            textDecoration: "none",
            marginBottom: "32px",
            background: isDark ? "rgba(0, 242, 254, 0.08)" : "rgba(2, 132, 199, 0.08)",
            padding: "8px 16px",
            borderRadius: "12px",
            border: `1px solid ${isDark ? "rgba(0, 242, 254, 0.25)" : "rgba(2, 132, 199, 0.25)"}`,
            transition: "all 0.2s ease",
          }}
        >
          <ArrowLeft size={16} />
          <span>Wixtory Player Sayfasına Dön</span>
        </Link>

        {/* Header Document Info */}
        <div style={{ marginBottom: "36px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "9999px",
              background: isDark ? "rgba(0, 242, 254, 0.12)" : "rgba(2, 132, 199, 0.12)",
              color: isDark ? "#00F2FE" : "#0284C7",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.08em",
              marginBottom: "16px",
            }}
          >
            <Shield size={14} />
            <span>RESMİ GİZLİLİK POLİTİKASI · V1.0</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 4.5vw, 44px)",
              fontWeight: 850,
              letterSpacing: "-0.03em",
              margin: "0 0 16px",
              color: "var(--text-main)",
            }}
          >
            Wixtory Player Gizlilik Politikası
          </h1>

          <p
            style={{
              fontSize: "14.5px",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Son Güncelleme: 04 Kasım 2026 · Yürürlük Tarihi: 04 Kasım 2026
            <br />
            Veri Sorumlusu: Wixtory Software & Digital Technologies (wixtoryy@gmail.com)
          </p>
        </div>

        {/* Content Box */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "26px",
            padding: "clamp(24px, 4vw, 40px)",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            fontSize: "15px",
            boxShadow: "var(--shadow-card)",
          }}
        >
          {/* Section 1 */}
          <div style={{ marginBottom: "32px" }}>
            <h2
              style={{
                color: "var(--text-main)",
                fontSize: "20px",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "0 0 12px",
              }}
            >
              <HardDrive size={20} color={isDark ? "#00F2FE" : "#0284C7"} />
              <span>1. Sıfır Bulut ve %100 Cihaz İçi Yerel Mimari</span>
            </h2>
            <p>
              Wixtory Player, &apos;Tasarımda Gizlilik ve Güvenlik&apos; (Privacy by Design) ilkesini temel alarak
              geliştirilmiştir. Uygulama içerisinde hesap açma, kullanıcı profili oluşturma veya kişisel bilgi girme
              zorunluluğu bulunmamaktadır. Cihazınızda oynatmak üzere seçtiğiniz yerel MP3 ve MP4 medya dosyaları
              fiziksel cihazınızın dışına asla aktarılmaz ve hiçbir harici sunucuya veya bulut altyapısına yüklenmez.
            </p>
          </div>

          {/* Section 2 */}
          <div style={{ marginBottom: "32px" }}>
            <h2
              style={{
                color: "var(--text-main)",
                fontSize: "20px",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "0 0 12px",
              }}
            >
              <Smartphone size={20} color="#FE2C55" />
              <span>2. Talep Edilen Cihaz İzinleri ve Kullanım Kapsamı</span>
            </h2>
            <p>
              Wixtory Player, yalnızca kullanıcının bizzat seçtiği yerel video ve ses dosyalarını oynatabilmek amacıyla
              Android ve iOS işletim sistemlerinin gerektirdiği standart yerel medya okuma izinlerini
              (<code>READ_MEDIA_VIDEO</code> ve <code>READ_MEDIA_AUDIO</code>) kullanır.
            </p>
            <p style={{ marginTop: "10px" }}>
              Bu izin dışında uygulamamız hiçbir koşulda:
            </p>
            <ul style={{ paddingLeft: "24px", marginTop: "8px", listStyle: "circle" }}>
              <li>Kişiler ve Telefon Rehberinize,</li>
              <li>GPS ve Anlık Coğrafi Konumunuza,</li>
              <li>Kamera veya Mikrofonunuza,</li>
              <li>SMS, Çağrı Geçmişi veya Arama Kayıtlarınıza</li>
            </ul>
            <p style={{ marginTop: "10px" }}>
              erişmez ve bu tür hassas izinleri talep dahi etmez.
            </p>
          </div>

          {/* Section 3 */}
          <div style={{ marginBottom: "32px" }}>
            <h2
              style={{
                color: "var(--text-main)",
                fontSize: "20px",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "0 0 12px",
              }}
            >
              <FileCheck size={20} color="#10B981" />
              <span>3. Çalma Listeleri ve Tercihlerin Saklanması</span>
            </h2>
            <p>
              Uygulamada oluşturduğunuz özel çalma listeleri, favori listesi, oynatma hızı (0.5x - 2.0x), ses seviyesi
              ve en-boy oranı tercihleri yalnızca telefonunuzun kendi güvenli yerel önbelleğinde (SharedPreferences /
              Hive / Room) tutulur. Bu veriler herhangi bir merkezi sunucuya senkronize edilmez.
            </p>
          </div>

          {/* Section 4 */}
          <div style={{ marginBottom: "32px" }}>
            <h2
              style={{
                color: "var(--text-main)",
                fontSize: "20px",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "0 0 12px",
              }}
            >
              <Lock size={20} color="#F59E0B" />
              <span>4. Sıfır Reklam ve Sıfır Davranışsal Takip</span>
            </h2>
            <p>
              Wixtory Player, kullanıcıların özel medya tüketim alışkanlıklarını izleyen hiçbir analitik SDK&apos;sı
              veya üçüncü taraf reklam ağı barındırmaz. Kişisel videolarınızın arasında asla araya giren veya ekranı
              kaplayan reklam gösterilmez.
            </p>
          </div>

          {/* Section 5 */}
          <div style={{ marginBottom: "16px" }}>
            <h2
              style={{
                color: "var(--text-main)",
                fontSize: "20px",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "0 0 12px",
              }}
            >
              <Shield size={20} color={isDark ? "#00F2FE" : "#0284C7"} />
              <span>5. KVKK ve GDPR Kapsamında İletişim</span>
            </h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR)
              uyarınca; gizlilik haklarınız veya teknik sorularınız için Veri Sorumlusu Wixtory&apos;ye dilediğiniz an{" "}
              <a
                href="mailto:wixtoryy@gmail.com"
                style={{ color: isDark ? "#00F2FE" : "#0284C7", textDecoration: "underline", fontWeight: 700 }}
              >
                wixtoryy@gmail.com
              </a>{" "}
              adresi üzerinden yazılı başvuruda bulunabilirsiniz.
            </p>
          </div>
        </div>
      </main>

      <MainFooter />
    </div>
  );
}
