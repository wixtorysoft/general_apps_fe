"use client";

import React from "react";
import Link from "next/link";
import { Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function MainFooter() {
  const { language } = useLanguage();
  const isTr = language === "tr";

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        padding: "44px 0 36px 0",
        background: "var(--bg-glass)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        marginTop: "auto",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Brand */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <Layers size={16} />
            </div>
            <div>
              <span style={{ fontSize: "15px", fontWeight: 800, color: "var(--text-main)" }}>
                Wixtory <span style={{ color: "var(--primary)" }}>Apps</span>
              </span>
              <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                {isTr ? "Mobil Uygulama Ekosistemi" : "Mobile App Ecosystem"}
              </div>
            </div>
          </Link>

          {/* Links Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Link href="/apps" style={{ fontSize: "13.5px", color: "var(--text-secondary)", textDecoration: "none" }}>
              {isTr ? "Uygulamalar" : "Apps"}
            </Link>
            <Link href="/about" style={{ fontSize: "13.5px", color: "var(--text-secondary)", textDecoration: "none" }}>
              {isTr ? "Hakkımızda" : "About"}
            </Link>
            <Link href="/vision-mission" style={{ fontSize: "13.5px", color: "var(--text-secondary)", textDecoration: "none" }}>
              {isTr ? "Vizyon & Misyon" : "Vision & Mission"}
            </Link>
            <Link href="/privacy-policy" style={{ fontSize: "13.5px", color: "var(--text-secondary)", textDecoration: "none" }}>
              {isTr ? "Gizlilik Sözleşmesi" : "Privacy Policy"}
            </Link>
            <Link href="/cookie-policy" style={{ fontSize: "13.5px", color: "var(--text-secondary)", textDecoration: "none" }}>
              {isTr ? "Çerez Politikası" : "Cookie Policy"}
            </Link>
            <Link href="/kvkk" style={{ fontSize: "13.5px", color: "var(--text-secondary)", textDecoration: "none" }}>
              {isTr ? "KVKK" : "KVKK Disclosure"}
            </Link>
            <Link href="/developer" style={{ fontSize: "13.5px", color: "var(--text-secondary)", textDecoration: "none" }}>
              Developer
            </Link>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "12px",
            color: "var(--text-muted)",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <div>
            © {new Date().getFullYear()} Wixtory Ecosystem. {isTr ? "Tüm hakları saklıdır." : "All rights reserved."}
          </div>
          <div>
            {isTr ? "60 FPS Flutter & Sıfır-Telemetri Gizlilik Standartları" : "60 FPS Flutter & Zero-Telemetry Privacy Standards"}
          </div>
        </div>
      </div>
    </footer>
  );
}
