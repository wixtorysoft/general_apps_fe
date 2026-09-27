"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LegalDocument } from "@/data/legal-data";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import {
  ShieldCheck,
  ArrowLeft,
  Calendar,
  Building,
  Mail,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Lock,
  DownloadCloud,
  Code,
  Cookie,
  Scale,
  MapPin,
  Globe,
  ExternalLink,
} from "lucide-react";

interface LegalDocumentViewerProps {
  document: LegalDocument;
  currentType: "privacy" | "cookie" | "kvkk";
}

export function LegalDocumentViewer({ document: doc, currentType }: LegalDocumentViewerProps) {
  const { t, language } = useLanguage();
  const isTr = language === "tr";

  // Markdown Download Generator
  const handleDownloadMarkdown = () => {
    let downloadFileName = "privacy-policy.md";
    let md = "";

    if (doc.id === "privacy") {
      downloadFileName = "privacy-policy.md";
      if (isTr) {
        md = `# Gizlilik Politikası\n\n`;
        md += `AstroVibe ve Excuse AI için\n\n`;
        md += `Yürürlük Tarihi: ${doc.effectiveDate}\n\n`;

        doc.sections.forEach((section) => {
          md += `## ${section.title}\n\n`;
          section.content.forEach((paragraph) => {
            md += `${paragraph}\n\n`;
          });

          if (section.subsections && section.subsections.length > 0) {
            section.subsections.forEach((sub) => {
              if (sub.subcontent.length === 1 && !sub.subcontent[0].includes(":")) {
                md += `- **${sub.subtitle}**: ${sub.subcontent[0]}\n\n`;
              } else {
                md += `- **${sub.subtitle}**:\n`;
                sub.subcontent.forEach((item) => {
                  if (item.includes(":")) {
                    const colonIdx = item.indexOf(":");
                    const label = item.substring(0, colonIdx).trim();
                    const rest = item.substring(colonIdx + 1).trim();
                    md += `  - **${label}**: ${rest}\n`;
                  } else {
                    md += `  - ${item}\n`;
                  }
                });
                md += `\n`;
              }
            });
          }
        });
      } else {
        md = `# Privacy Policy\n\n`;
        md += `For AstroVibe & Excuse AI\n\n`;
        md += `Effective Date: ${doc.effectiveDate}\n\n`;

        doc.sections.forEach((section) => {
          md += `## ${section.title}\n\n`;
          section.content.forEach((paragraph) => {
            md += `${paragraph}\n\n`;
          });

          if (section.subsections && section.subsections.length > 0) {
            section.subsections.forEach((sub) => {
              if (sub.subcontent.length === 1 && !sub.subcontent[0].includes(":")) {
                md += `- **${sub.subtitle}**: ${sub.subcontent[0]}\n\n`;
              } else {
                md += `- **${sub.subtitle}**:\n`;
                sub.subcontent.forEach((item) => {
                  if (item.includes(":")) {
                    const colonIdx = item.indexOf(":");
                    const label = item.substring(0, colonIdx).trim();
                    const rest = item.substring(colonIdx + 1).trim();
                    md += `  - **${label}**: ${rest}\n`;
                  } else {
                    md += `  - ${item}\n`;
                  }
                });
                md += `\n`;
              }
            });
          }
        });
      }
    } else {
      downloadFileName = doc.id === "cookie" ? "cookie-policy.md" : "kvkk-aydinlatma-metni.md";
      md = `# ${doc.title}\n\n`;
      md += `> ${doc.subtitle}\n\n`;
      md += `| Alan / Parameter | Değer / Value |\n`;
      md += `| --- | --- |\n`;
      md += `| **Son Güncelleme / Last Updated** | ${doc.lastUpdated} |\n`;
      md += `| **Yürürlük Tarihi / Effective Date** | ${doc.effectiveDate} |\n`;
      md += `| **Veri Sorumlusu / Controller** | ${doc.developerName} (${doc.companyName}) |\n`;
      md += `| **E-Posta / Email** | ${doc.contactEmail} |\n`;
      md += `| **Konum / Location** | ${doc.developerLocation} |\n`;
      md += `| **Web Sitesi / Website** | ${doc.website} |\n\n`;
      md += `---\n\n`;

      doc.sections.forEach((section, sIdx) => {
        md += `## ${section.title}\n\n`;
        if (section.badge) {
          md += `*Etiket / Badge: ${section.badge}*\n\n`;
        }
        section.content.forEach((paragraph) => {
          md += `${paragraph}\n\n`;
        });

        if (section.tableData) {
          md += `| ` + section.tableData.headers.join(" | ") + ` |\n`;
          md += `| ` + section.tableData.headers.map(() => "---").join(" | ") + ` |\n`;
          section.tableData.rows.forEach((row) => {
            md += `| ` + row.join(" | ") + ` |\n`;
          });
          md += `\n`;
        }

        if (section.subsections && section.subsections.length > 0) {
          section.subsections.forEach((sub, subIdx) => {
            md += `### ${sIdx + 1}.${subIdx + 1} ${sub.subtitle}\n\n`;
            sub.subcontent.forEach((subParagraph) => {
              md += `${subParagraph}\n\n`;
            });
          });
        }

        if (section.appSpecific && section.appSpecific.length > 0) {
          md += `### Projeler Bazında Detaylar (AstroVibe & Excuse Details)\n\n`;
          section.appSpecific.forEach((app) => {
            md += `#### ${app.appName}\n`;
            app.details.forEach((item) => {
              md += `- ${item}\n`;
            });
            md += `\n`;
          });
        }

        md += `---\n\n`;
      });

      md += `\n## Wixtory İletişim / Developer Verification\n`;
      md += `- **Geliştirici / Developer:** ${doc.developerName}\n`;
      md += `- **E-Posta:** ${doc.contactEmail}\n`;
      md += `- **Konum:** ${doc.developerLocation}\n`;
      md += `- **Web:** [${doc.website}](${doc.website})\n`;
    }

    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", downloadFileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const navTabs = [
    {
      id: "privacy",
      href: "/privacy-policy",
      label: isTr ? "Gizlilik Sözleşmesi" : "Privacy Policy",
      icon: ShieldCheck,
      badge: "KVKK & GDPR",
    },
    {
      id: "cookie",
      href: "/cookie-policy",
      label: isTr ? "Çerez Politikası" : "Cookie Policy",
      icon: Cookie,
      badge: isTr ? "Yerel Depolama" : "Local Storage",
    },
    {
      id: "kvkk",
      href: "/kvkk",
      label: isTr ? "KVKK Aydınlatma Metni" : "KVKK Disclosure",
      icon: Scale,
      badge: "6698 SK",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Sticky Top Navbar */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 900,
          background: "var(--bg-glass)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "14px 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--text-main)",
                textDecoration: "none",
              }}
            >
              <ArrowLeft size={16} />
              <span>{t("back_to_home")}</span>
            </Link>

            <Link
              href="/developer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--primary)",
                textDecoration: "none",
                padding: "4px 12px",
                borderRadius: "9999px",
                background: "var(--badge-bg)",
                border: "1px solid var(--border-active)",
              }}
            >
              <Code size={14} />
              <span>Developer (Hacı Celal Aygar)</span>
            </Link>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Download as Markdown Button */}
            <button
              onClick={handleDownloadMarkdown}
              id="download-md-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                fontSize: "12.5px",
                fontWeight: 700,
                padding: "6px 14px",
                borderRadius: "9999px",
                backgroundColor: "var(--bg-card)",
                color: "var(--text-main)",
                border: "1.5px solid var(--border-active)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--primary)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-active)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              title="Download Document as Markdown file"
            >
              <DownloadCloud size={15} color="var(--primary)" />
              <span>{isTr ? "MD Olarak İndir" : "Download .MD"}</span>
            </button>

            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "40px 0 80px 0" }}>
        <div className="container" style={{ maxWidth: "980px" }}>
          {/* Legal Hub Switcher Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "36px",
              flexWrap: "wrap",
            }}
          >
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentType === tab.id;
              return (
                <Link
                  key={tab.id}
                  href={tab.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    borderRadius: "16px",
                    background: isActive ? "var(--primary)" : "var(--bg-card)",
                    color: isActive ? "#ffffff" : "var(--text-secondary)",
                    border: isActive ? "1.5px solid var(--primary)" : "1.5px solid var(--border-subtle)",
                    fontSize: "14px",
                    fontWeight: isActive ? 750 : 600,
                    textDecoration: "none",
                    boxShadow: isActive ? "0 8px 20px -4px var(--shadow-glow)" : "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                  <span
                    style={{
                      fontSize: "10.5px",
                      padding: "2px 6px",
                      borderRadius: "6px",
                      background: isActive ? "rgba(255, 255, 255, 0.2)" : "var(--badge-bg)",
                      color: isActive ? "#ffffff" : "var(--primary)",
                      fontWeight: 700,
                    }}
                  >
                    {tab.badge}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Header Banner */}
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span
              className="pill-badge"
              style={{
                marginBottom: "14px",
                background: "var(--badge-bg)",
                borderColor: "var(--border-active)",
                color: "var(--primary)",
              }}
            >
              <Sparkles size={14} />
              <span>{isTr ? "Wixtory Yasal & Güvenlik Merkezi" : "Wixtory Legal & Security Hub"}</span>
            </span>

            <h1
              style={{
                fontSize: "clamp(28px, 4.5vw, 42px)",
                fontWeight: 850,
                letterSpacing: "-0.025em",
                marginBottom: "14px",
                color: "var(--text-main)",
              }}
            >
              {doc.title}
            </h1>

            <p
              style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                lineHeight: "1.65",
                maxWidth: "760px",
                margin: "0 auto 20px auto",
              }}
            >
              {doc.subtitle}
            </p>

            {/* Metadata Pills */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                fontSize: "13px",
                color: "var(--text-muted)",
                flexWrap: "wrap",
                marginBottom: "20px",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Calendar size={14} />
                {t("last_updated")}: {doc.lastUpdated}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Building size={14} />
                {doc.companyName}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Mail size={14} />
                {doc.contactEmail}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <MapPin size={14} />
                {doc.developerLocation}
              </span>
            </div>

            {/* Quick Action Button */}
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "16px" }}>
              <button
                onClick={handleDownloadMarkdown}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 22px",
                  borderRadius: "9999px",
                  background: "var(--primary)",
                  color: "#ffffff",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 8px 20px -4px var(--shadow-glow)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <DownloadCloud size={17} />
                <span>{isTr ? `${doc.title} Metnini (.md) İndir` : `Download ${doc.title} (.md)`}</span>
              </button>
            </div>
          </div>

          {/* Policy Sections Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {doc.sections.map((section) => {
              return (
                <div
                  key={section.id}
                  id={section.id}
                  className="glass-card"
                  style={{
                    padding: "clamp(24px, 4vw, 36px)",
                    borderRadius: "24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "20px",
                        fontWeight: 750,
                        color: "var(--text-main)",
                      }}
                    >
                      {section.title}
                    </h2>
                    {section.badge && (
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          padding: "3px 10px",
                          borderRadius: "9999px",
                          background: "var(--badge-bg)",
                          color: "var(--primary)",
                          border: "1px solid var(--border-active)",
                        }}
                      >
                        {section.badge}
                      </span>
                    )}
                  </div>

                  {/* Paragraphs */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>
                    {section.content.map((p, idx) => (
                      <p
                        key={idx}
                        style={{
                          fontSize: "14.5px",
                          color: "var(--text-secondary)",
                          lineHeight: "1.65",
                        }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Table Data (Cookies / KVKK Categories) */}
                  {section.tableData && (
                    <div style={{ overflowX: "auto", margin: "20px 0" }}>
                      <table
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          fontSize: "13.5px",
                          textAlign: "left",
                          background: "var(--bg-glass)",
                          borderRadius: "14px",
                          overflow: "hidden",
                          border: "1px solid var(--border-subtle)",
                        }}
                      >
                        <thead>
                          <tr style={{ background: "var(--badge-bg)", borderBottom: "1px solid var(--border-subtle)" }}>
                            {section.tableData.headers.map((header, hIdx) => (
                              <th
                                key={hIdx}
                                style={{
                                  padding: "12px 16px",
                                  fontWeight: 700,
                                  color: "var(--text-main)",
                                }}
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.tableData.rows.map((row, rIdx) => (
                            <tr
                              key={rIdx}
                              style={{
                                borderBottom: rIdx < section.tableData!.rows.length - 1 ? "1px solid var(--border-subtle)" : "none",
                              }}
                            >
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  style={{
                                    padding: "12px 16px",
                                    color: cIdx === 0 ? "var(--primary)" : "var(--text-secondary)",
                                    fontWeight: cIdx === 0 ? 600 : 400,
                                  }}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* App Specific Details */}
                  {section.appSpecific && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "20px" }}>
                      {section.appSpecific.map((appItem, aIdx) => (
                          <div
                            key={aIdx}
                            style={{
                              padding: "20px",
                              borderRadius: "16px",
                              background: "var(--bg-glass)",
                              border: "1px solid var(--border-active)",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                fontSize: "16px",
                                fontWeight: 700,
                                color: "var(--primary)",
                                marginBottom: "12px",
                              }}
                            >
                              <Smartphone size={18} />
                              <span>{appItem.appName}</span>
                            </div>

                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                              {appItem.details.map((detail, dIdx) => (
                                <li
                                  key={dIdx}
                                  style={{
                                    fontSize: "13.5px",
                                    color: "var(--text-secondary)",
                                    lineHeight: "1.55",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "8px",
                                  }}
                                >
                                  <CheckCircle2 size={15} style={{ color: "#10B981", flexShrink: 0, marginTop: "3px" }} />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Developer Contact Card */}
          <div
            className="glass-panel"
            style={{
              padding: "36px",
              marginTop: "48px",
              borderRadius: "28px",
              textAlign: "center",
              border: "1.5px solid var(--border-active)",
            }}
          >
            <Lock size={32} style={{ color: "var(--primary)", marginBottom: "14px" }} />
            <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "8px" }}>
              {isTr ? "Kişisel Veri ve Gizlilik Talepleriniz İçin" : "Privacy & Data Protection Inquiries"}
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-secondary)",
                maxWidth: "600px",
                margin: "0 auto 20px auto",
                lineHeight: "1.6",
              }}
            >
              {isTr
                ? "KVKK 11. Madde ve GDPR kapsamındaki tüm haklarınız, veri silme veya çerez tercihleri için doğrudan veri sorumlusu Hacı Celal Aygar ile iletişime geçebilirsiniz."
                : "For any GDPR/KVKK requests, data erasure, or cookie preferences, feel free to directly contact Data Controller Hacı Celal Aygar."}
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <a
                href={`mailto:${doc.contactEmail}`}
                className="btn-primary"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Mail size={16} />
                <span>{doc.contactEmail}</span>
              </a>

              <Link
                href="/developer"
                className="btn-secondary"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Code size={16} />
                <span>Developer Info</span>
              </Link>

              <a
                href="https://www.wixtory.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Globe size={16} />
                <span>www.wixtory.com</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border-subtle)",
          padding: "24px 0",
          textAlign: "center",
          fontSize: "13px",
          color: "var(--text-muted)",
        }}
      >
        © 2026 Wixtory Software & Digital Tech. Hacı Celal Aygar. {t("footer_all_rights")}
      </footer>
    </div>
  );
}
