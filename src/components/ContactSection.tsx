"use client";

import React, { useState } from "react";
import { AppModel } from "@/data/apps-data";
import { useLanguage } from "@/context/LanguageContext";
import {
  Mail,
  Send,
  MessageSquare,
  Building2,
  CheckCircle2,
  MapPin,
  Clock,
} from "lucide-react";

interface ContactSectionProps {
  app: AppModel;
}

export function ContactSection({ app }: ContactSectionProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: `${app.name} Support`,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: `${app.name} Support`,
        message: "",
      });
    }, 4000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "80px 0 100px 0",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span
            className="pill-badge"
            style={{
              color: app.primaryColor,
              borderColor: app.primaryColor,
              marginBottom: "12px",
            }}
          >
            <Mail size={14} />
            <span>{t("contact_badge")}</span>
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "14px",
            }}
          >
            {t("contact_title")}
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "16px",
            }}
          >
            {t("contact_subtitle")}
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "36px",
            maxWidth: "1060px",
            margin: "0 auto",
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* App Support Card */}
            <div className="glass-card" style={{ padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: `linear-gradient(135deg, ${app.primaryColor} 0%, ${app.secondaryColor} 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    boxShadow: `0 6px 16px -2px ${app.glowColor}`,
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    {t("official_email")}
                  </div>
                  <a
                    href={`mailto:${app.contactEmail}`}
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: app.primaryColor,
                      textDecoration: "none",
                    }}
                  >
                    {app.contactEmail}
                  </a>
                </div>
              </div>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                {t("response_time")}
              </p>
            </div>

            {/* General Publisher Info */}
            <div className="glass-card" style={{ padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-main)",
                  }}
                >
                  <Building2 size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    {t("publisher")}
                  </div>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-main)" }}>
                    Wixtory Software & Digital Tech
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", color: "var(--text-secondary)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <MapPin size={16} style={{ color: app.primaryColor }} />
                  <span>{t("location")}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Clock size={16} style={{ color: app.primaryColor }} />
                  <span>{t("hours")}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <MessageSquare size={16} style={{ color: app.primaryColor }} />
                  <span>support@wixtory.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="glass-panel" style={{ padding: "36px" }}>
            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "rgba(16, 185, 129, 0.2)",
                    border: "2px solid #10B981",
                    color: "#10B981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: "var(--text-main)" }}>
                  {t("form_success_title")}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", maxWidth: "400px" }}>
                  {t("form_success_desc")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "var(--text-main)", marginBottom: "4px" }}>
                  {t("form_title")}
                </h3>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "6px",
                    }}
                  >
                    {t("form_name")}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Celal Aygar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      background: "var(--bg-glass)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-main)",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "6px",
                    }}
                  >
                    {t("form_email")}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      background: "var(--bg-glass)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-main)",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "6px",
                    }}
                  >
                    {t("form_message")}
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={`${app.name}...`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      background: "var(--bg-glass)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-main)",
                      fontSize: "14px",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "inherit",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    marginTop: "8px",
                    width: "100%",
                    background: `linear-gradient(135deg, ${app.primaryColor} 0%, ${app.secondaryColor} 120%)`,
                    boxShadow: `0 8px 24px -4px ${app.glowColor}`,
                  }}
                >
                  <Send size={16} />
                  <span>{t("form_send")}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1.25fr !important;
          }
        }
      `}</style>
    </section>
  );
}
