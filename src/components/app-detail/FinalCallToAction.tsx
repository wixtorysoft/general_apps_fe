"use client";

import React from "react";
import { DedicatedAppDetails, getLocalizedAppDetails } from "@/data/apps-detail-data";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, ShieldCheck, Star, QrCode } from "lucide-react";
import { StoreDownloadButtons } from "@/components/StoreDownloadButtons";

interface FinalCallToActionProps {
  app: DedicatedAppDetails;
}

export function FinalCallToAction({ app }: FinalCallToActionProps) {
  const { t, language } = useLanguage();
  const localizedApp = getLocalizedAppDetails(app.id, language);
  const isTr = language === "tr";

  return (
    <section
      id="download"
      style={{
        padding: "80px 0 100px 0",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          className="glass-panel"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "32px",
            padding: "clamp(40px, 6vw, 70px) clamp(24px, 5vw, 60px)",
            background: `radial-gradient(circle at 50% 0%, ${localizedApp.primaryColor}18 0%, var(--bg-card) 75%)`,
            border: `1.5px solid ${localizedApp.primaryColor}44`,
            boxShadow: "var(--shadow-card)",
            textAlign: "center",
          }}
        >
          {/* Ambient glow */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "500px",
              height: "300px",
              background: `radial-gradient(ellipse at center, ${localizedApp.primaryColor}40 0%, transparent 70%)`,
              filter: "blur(70px)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "720px", margin: "0 auto" }}>
            <span
              className="pill-badge"
              style={{
                color: "#F59E0B",
                borderColor: "rgba(245, 158, 11, 0.4)",
                background: "rgba(245, 158, 11, 0.15)",
                marginBottom: "20px",
                boxShadow: "0 0 16px rgba(245, 158, 11, 0.2)",
              }}
            >
              <Sparkles size={14} />
              <span>{t("coming_soon_stores")}</span>
            </span>

            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 50px)",
                fontWeight: 850,
                letterSpacing: "-0.03em",
                lineHeight: "1.15",
                marginBottom: "20px",
                color: "var(--text-main)",
              }}
            >
              {localizedApp.name}{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${localizedApp.primaryColor}, ${localizedApp.secondaryColor || "#38BDF8"})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {isTr ? "ile Yaşam Tarzınızı Yeniden Tanımlayın" : "Reinvents Your Daily Lifestyle"}
              </span>
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "var(--text-secondary)",
                lineHeight: "1.65",
                marginBottom: "36px",
              }}
            >
              {localizedApp.id === "astrovibe"
                ? isTr
                  ? "Burcunuzun elementine özel protez tırnak akışını keşfedin, 3D tarot açılımlarıyla auranızı dengeleyin. Çok yakında cebinizde olacak, takipte kalın!"
                  : "Discover horoscope-matched press-on nail styles on TikTok feeds and align your aura with 3D tarot spreads. Coming soon to your phone, stay tuned!"
                : isTr
                  ? "Beklenmedik davetlerden, uzayan iş toplantılarından ve kriz anlarından tek dokunuşla sıyrılın. %100 çevrimdışı çalışan akıllı asistanınız çok yakında mağazalarda!"
                  : "Escape awkward social invitations, endless office meetings, and emergencies in a single tap. Your 100% offline smart excuse assistant is coming soon!"}
            </p>

            {/* Download Buttons Row matching user reference */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "36px",
              }}
            >
              <StoreDownloadButtons
                layout="horizontal"
                showBadge={true}
                badgeLabel={t("coming_soon")}
                isComingSoon={true}
                comingSoonText={t("coming_soon_stores")}
              />
            </div>

            {/* Badges footer */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px",
                fontSize: "13.5px",
                color: "var(--text-secondary)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Star size={15} color="#F59E0B" fill="#F59E0B" />
                <span>
                  <strong>{localizedApp.rating} / 5.0</strong> ({localizedApp.reviewsCount} {isTr ? "Değerlendirme" : "Reviews"})
                </span>
              </div>
              <span>•</span>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <ShieldCheck size={16} color={localizedApp.primaryColor} />
                <span>{isTr ? "%100 Gizlilik & Reklamsız Sürüm" : "100% Privacy & Ad-Free Experience"}</span>
              </div>
              <span>•</span>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <QrCode size={15} />
                <span>{isTr ? "Hızlı QR Kurulum Desteği" : "Quick QR Install Support"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
