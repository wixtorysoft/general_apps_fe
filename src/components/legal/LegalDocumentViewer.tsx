"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LegalDocument, getAppSpecificLegalDoc } from "@/data/legal-data";
import { MainNavbar } from "@/components/MainNavbar";
import { useLanguage } from "@/context/LanguageContext";
import {
  Shield,
  ShieldCheck,
  ArrowLeft,
  Mail,
  Sparkles,
  Smartphone,
  Lock,
  Download,
  Code,
  Cookie,
  Scale,
  Globe,
  ExternalLink,
  BarChart3,
  Server,
  Users,
  Layers,
  Check,
  Copy,
  BookOpen,
  MessageSquare,
  Sliders,
  Database,
  Building,
} from "lucide-react";

export type EcosystemAppId = "all" | "domain-track" | "language-box" | "astrovibe" | "excuse";

interface LegalDocumentViewerProps {
  document: LegalDocument;
  currentType: "privacy" | "cookie" | "kvkk";
}

export function LegalDocumentViewer({ document: doc, currentType }: LegalDocumentViewerProps) {
  const { t, language } = useLanguage();
  const isTr = language === "tr";

  const [selectedApp, setSelectedApp] = useState<EcosystemAppId>("all");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(doc.contactEmail || "wixtoryy@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  // Determine active document dynamically based on selected app and current type
  const activeDoc: LegalDocument = currentType === "privacy"
    ? getAppSpecificLegalDoc("privacy", selectedApp, language)
    : doc;

  // 4 Core Ecosystem Applications Definition
  const ECOSYSTEM_APPS = [
    {
      id: "all" as const,
      name: isTr ? "Tüm Ekosistem" : "All Ecosystem",
      shortName: isTr ? "Tüm Ekosistem" : "All Ecosystem",
      pillBadge: isTr ? "4 Uygulama" : "4 Apps",
      icon: Layers,
      href: "/",
      githubUrl: "https://github.com/celalaygar/main/blob/main/project/wixtory-privacy-policy.md",
      heroSubtitle: isTr ? "Wixtory Ekosistemi için" : "for Wixtory Ecosystem",
      downloadName: "wixtory-ecosystem-privacy-policy.md",
    },
    {
      id: "language-box" as const,
      name: "Wixtory Language Box",
      shortName: "Language Box",
      pillBadge: isTr ? "Kelime & Dil" : "Language & Vocab",
      icon: BookOpen,
      href: "/language-box",
      githubUrl: "https://github.com/celalaygar/main/blob/main/project/language-box/privacy-policy.md",
      heroSubtitle: isTr ? "Wixtory Language Box için" : "for Wixtory Language Box",
      downloadName: "language-box-privacy-policy.md",
    },
    {
      id: "domain-track" as const,
      name: "Wixtory: Domain Track",
      shortName: "Domain Track",
      pillBadge: isTr ? "Alan Adı & DNS" : "Domain & DNS",
      icon: Globe,
      href: "/domain-track",
      githubUrl: "https://github.com/celalaygar/main/blob/main/project/wixtory-domain-track/privacy-policy.md",
      heroSubtitle: isTr ? "Wixtory: Domain Track için" : "for Wixtory: Domain Track",
      downloadName: "domain-track-privacy-policy.md",
    },
    {
      id: "astrovibe" as const,
      name: "AstroVibe",
      shortName: "AstroVibe",
      pillBadge: isTr ? "Astroloji & Stil" : "Astrology & Style",
      icon: Sparkles,
      href: "/astrovibe",
      githubUrl: "https://github.com/celalaygar/main/blob/main/project/astrovibe/privacy-policy.md",
      heroSubtitle: isTr ? "AstroVibe için" : "for AstroVibe",
      downloadName: "astrovibe-privacy-policy.md",
    },
    {
      id: "excuse" as const,
      name: "Excuse AI",
      shortName: "Excuse AI",
      pillBadge: isTr ? "Bahanematik" : "Excuse Generator",
      icon: MessageSquare,
      href: "/excuse",
      githubUrl: "https://github.com/celalaygar/main/blob/main/project/excuse/privacy-policy.md",
      heroSubtitle: isTr ? "Excuse AI için" : "for Excuse AI",
      downloadName: "excuse-ai-privacy-policy.md",
    },
  ];

  const activeAppMeta = ECOSYSTEM_APPS.find((a) => a.id === selectedApp) || ECOSYSTEM_APPS[0];

  // Helper icon selector for numbered policy sections (handles both 6-section apps and 14-section ecosystem)
  const getSectionIcon = (index: number) => {
    if (selectedApp === "language-box" || selectedApp === "domain-track") {
      switch (index) {
        case 0:
          return Shield; // 1. Kişisel Veri Toplama Yok
        case 1:
          return Smartphone; // 2. Yerel İlerleme Takibi (Önbellek) / Yerel Veri Depolama
        case 2:
          return BarChart3; // 3. İstatistikler / Arama İstatistikleri
        case 3:
          return Server; // 4. Üçüncü Taraf Hizmetleri ve Reklamlar
        case 4:
          return Lock; // 5. Veri Güvenliği
        case 5:
        default:
          return Mail; // 6. İletişim
      }
    }

    switch (index) {
      case 0:
        return Shield; // 1. Sıfır Üyelik & Sıfır Veri
      case 1:
        return Smartphone; // 2. Yerel Veri Depolama & Cihaz İçi Önbellek
      case 2:
        return BarChart3; // 3. Arama İstatistikleri & Çevrimdışı Çalışma
      case 3:
        return Sliders; // 4. Cihaz İzinleri & Donanım Erişimi
      case 4:
        return Sparkles; // 5. Yapay Zeka & Algoritmik Şeffaflık
      case 5:
        return Globe; // 6. Gerçek Zamanlı Ağ & HTTPS/TLS
      case 6:
        return Server; // 7. Reklamlar & AdMob
      case 7:
        return Users; // 8. 18 Yaş Altı / Çocuk Gizliliği
      case 8:
        return Database; // 9. Veri Saklama Süresi & Kaldırma
      case 9:
        return ShieldCheck; // 10. Sınır Ötesi Aktarım Yok
      case 10:
        return Scale; // 11. KVKK & GDPR Yasal Haklar
      case 11:
        return Lock; // 12. Veri Güvenliği, Teknik Tedbirler & Zafiyet Bildirimi
      case 12:
        return Building; // 13. Uygulanacak Hukuk & Uyuşmazlık Çözümü
      case 13:
      default:
        return Mail; // 14. Kapsam, Politika Güncellemeleri ve İletişim
    }
  };

  // Markdown Download Generator with Dynamic Tailoring for selected application
  const handleDownloadMarkdown = () => {
    let downloadFileName = "privacy-policy.md";
    let md = "";

    if (currentType === "privacy") {
      downloadFileName = activeAppMeta.downloadName || "privacy-policy.md";
      const targetDoc = activeDoc;

      md = `# ${targetDoc.title}\n\n`;
      md += `**${targetDoc.subtitle}**\n`;
      md += `*${isTr ? `Yürürlük Tarihi: ${targetDoc.effectiveDate}` : `Effective Date: ${targetDoc.effectiveDate}`}*\n\n`;
      md += `---\n\n`;

      if (selectedApp === "domain-track" || selectedApp === "language-box") {
        targetDoc.sections.forEach((section, sIdx) => {
          md += `## ${sIdx + 1}. ${section.title.replace(/^[0-9]+\.\s*/, "")}\n\n`;
          if (section.content && section.content.length > 0) {
            section.content.forEach((paragraph) => {
              md += `${paragraph}\n\n`;
            });
          }

          if (section.subsections && section.subsections.length > 0) {
            section.subsections.forEach((sub) => {
              md += `### ${sub.subtitle}\n`;
              sub.subcontent.forEach((item) => {
                md += `${item}\n\n`;
              });
            });
          }

          if (sIdx === targetDoc.sections.length - 1 && targetDoc.contactEmail) {
            md += `[${isTr ? "E-Posta" : "Email"}: ${targetDoc.contactEmail}](mailto:${targetDoc.contactEmail})\n\n`;
          }
        });
      } else {
        targetDoc.sections.forEach((section, sIdx) => {
          md += `## ${sIdx + 1}. ${section.title.replace(/^[0-9]+\.\s*/, "")}\n\n`;
          if (section.content && section.content.length > 0) {
            section.content.forEach((paragraph) => {
              md += `${paragraph}\n\n`;
            });
          }

          if (section.subsections && section.subsections.length > 0) {
            section.subsections.forEach((sub) => {
              md += `### ${sub.subtitle}\n`;
              sub.subcontent.forEach((item) => {
                md += `${item}\n\n`;
              });
            });
          }
        });

        if (targetDoc.contactEmail) {
          md += `\n---\n\n## ${isTr ? "İletişim & Geliştirici" : "Contact & Developer"}\n`;
          md += `- **${isTr ? "E-Posta" : "Email"}:** ${targetDoc.contactEmail}\n`;
          md += `- **${isTr ? "Geliştirici" : "Developer"}:** ${targetDoc.developerName}\n`;
          md += `- **${isTr ? "Konum" : "Location"}:** ${targetDoc.developerLocation}\n`;
          md += `- **${isTr ? "Resmi Web Sitesi" : "Website"}:** [${targetDoc.website}](${targetDoc.website})\n`;
        }
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
        md += `## ${sIdx + 1}. ${section.title}\n\n`;
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
      });
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
    },
    {
      id: "cookie",
      href: "/cookie-policy",
      label: isTr ? "Çerez Politikası" : "Cookie Policy",
    },
    {
      id: "kvkk",
      href: "/kvkk",
      label: isTr ? "KVKK Aydınlatma Metni" : "KVKK Disclosure",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg-primary)" }}>
      {/* Ecosystem Hub Top Navbar */}
      <MainNavbar />

      {/* Main Content */}
      <main style={{ flex: 1, padding: "36px 0 64px 0" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          {/* Subtle Legal Tabs Switcher */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "6px",
              marginBottom: "32px",
              flexWrap: "wrap",
            }}
          >
            {navTabs.map((tab) => {
              const isActive = currentType === tab.id;
              return (
                <Link
                  key={tab.id}
                  href={tab.href}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    fontSize: "13px",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#10b981" : "var(--text-muted)",
                    backgroundColor: isActive ? "rgba(16, 185, 129, 0.1)" : "transparent",
                    border: isActive ? "1px solid rgba(16, 185, 129, 0.25)" : "1px solid transparent",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>

          {/* Hero Section (Clean & Matching Language Box Privacy Policy) */}
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            {/* Eyebrow Badge: YASAL */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 14px",
                borderRadius: "9999px",
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                color: "#10b981",
                fontSize: "11.5px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              <Shield size={14} color="#10b981" />
              <span>{isTr ? "YASAL" : "LEGAL"}</span>
            </div>

            {/* Clean Solid Title */}
            <h1
              style={{
                fontSize: "clamp(30px, 5vw, 44px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--text-main)",
                margin: "0 0 10px 0",
                lineHeight: "1.2",
              }}
            >
              {currentType === "privacy"
                ? (isTr ? "Gizlilik Politikası" : "Privacy Policy")
                : activeDoc.title}
            </h1>

            {/* Clean Subtitle */}
            <p
              style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                margin: "0 0 14px 0",
                fontWeight: 500,
              }}
            >
              {activeDoc.subtitle}
            </p>

            {/* Date line with green dot */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13.5px",
                color: "var(--text-muted)",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  display: "inline-block",
                }}
              />
              <span>{isTr ? `Yürürlük Tarihi: ${activeDoc.effectiveDate}` : `Effective Date: ${activeDoc.effectiveDate}`}</span>
            </div>

            {/* Modern Application Selector Icon Buttons Bar */}
            {currentType === "privacy" && (
              <div
                style={{
                  display: "inline-flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px",
                  borderRadius: "20px",
                  backgroundColor: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                  marginBottom: "20px",
                  maxWidth: "100%",
                }}
              >
                {ECOSYSTEM_APPS.map((app) => {
                  const IconComp = app.icon;
                  const isSelected = selectedApp === app.id;
                  return (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => setSelectedApp(app.id)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "8px 16px",
                        borderRadius: "14px",
                        fontSize: "13.5px",
                        fontWeight: isSelected ? 700 : 550,
                        color: isSelected ? "#10b981" : "var(--text-secondary)",
                        backgroundColor: isSelected ? "rgba(16, 185, 129, 0.12)" : "transparent",
                        border: isSelected
                          ? "1.5px solid rgba(16, 185, 129, 0.45)"
                          : "1.5px solid transparent",
                        cursor: "pointer",
                        transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                        boxShadow: isSelected ? "0 4px 14px rgba(16, 185, 129, 0.15)" : "none",
                      }}
                    >
                      <IconComp
                        size={17}
                        color={isSelected ? "#10b981" : "currentColor"}
                        style={{ flexShrink: 0, transition: "color 0.2s ease" }}
                      />
                      <span>{app.shortName}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Utility Action Buttons: Download Policy & View on GitHub */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {/* Button: Politikayı İndir */}
              <button
                type="button"
                onClick={handleDownloadMarkdown}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "9px 20px",
                  borderRadius: "12px",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-main)",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "13.5px",
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  transition: "all 0.2s ease",
                }}
              >
                <Download size={15} color="#10b981" />
                <span>{isTr ? "Politikayı İndir" : "Download Policy"}</span>
              </button>

              {/* Button: GitHub'da Görüntüle */}
              <a
                href={activeAppMeta.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "9px 20px",
                  borderRadius: "12px",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-main)",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "13.5px",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  transition: "all 0.2s ease",
                }}
              >
                <ExternalLink size={15} color="#10b981" />
                <span>{isTr ? "GitHub'da Görüntüle" : "View on GitHub"}</span>
              </a>
            </div>
          </div>

          {/* Policy Sections Cards (Clean, Sleek & Dynamic for Selected App) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {activeDoc.sections.map((section, sIdx) => {
              const SectionIcon = getSectionIcon(sIdx);
              return (
                <section
                  key={section.id || sIdx}
                  id={section.id}
                  style={{
                    padding: "24px 28px",
                    borderRadius: "20px",
                    border: "1px solid var(--border-subtle)",
                    backgroundColor: "var(--bg-card)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    {/* Icon in Rounded Square w-10 h-10 */}
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "12px",
                        backgroundColor: "rgba(16, 185, 129, 0.1)",
                        border: "1px solid rgba(16, 185, 129, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "#10b981",
                      }}
                    >
                      <SectionIcon size={18} color="#10b981" />
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h2
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "var(--text-main)",
                          margin: "0 0 10px 0",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span style={{ color: "#10b981", fontWeight: 700 }}>{sIdx + 1}.</span>
                        <span>{section.title.replace(/^[0-9]+\.\s*/, "")}</span>
                      </h2>

                      {/* Paragraphs */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {section.content.map((p, pIdx) => (
                          <p
                            key={pIdx}
                            style={{
                              fontSize: "14.5px",
                              color: "var(--text-secondary)",
                              lineHeight: 1.65,
                              margin: 0,
                            }}
                          >
                            {p}
                          </p>
                        ))}
                      </div>

                      {/* Subsections with clean left border */}
                      {section.subsections && section.subsections.length > 0 && (
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "14px" }}>
                          {section.subsections.map((sub, subIdx) => (
                            <div
                              key={subIdx}
                              style={{
                                paddingLeft: "14px",
                                borderLeft: "2px solid rgba(16, 185, 129, 0.3)",
                                paddingTop: "2px",
                                paddingBottom: "2px",
                              }}
                            >
                              <h3
                                style={{
                                  fontSize: "14px",
                                  fontWeight: 650,
                                  color: "var(--text-main)",
                                  margin: "0 0 4px 0",
                                }}
                              >
                                {sub.subtitle}
                              </h3>
                              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                {sub.subcontent.map((item, iIdx) => (
                                  <p
                                    key={iIdx}
                                    style={{
                                      fontSize: "13.5px",
                                      color: "var(--text-secondary)",
                                      lineHeight: 1.6,
                                      margin: 0,
                                    }}
                                  >
                                    {item}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Table Data (for Cookies & KVKK) */}
                      {section.tableData && (
                        <div style={{ overflowX: "auto", margin: "16px 0" }}>
                          <table
                            style={{
                              width: "100%",
                              borderCollapse: "collapse",
                              fontSize: "13px",
                              textAlign: "left",
                              background: "var(--bg-glass)",
                              borderRadius: "12px",
                              overflow: "hidden",
                              border: "1px solid var(--border-subtle)",
                            }}
                          >
                            <thead>
                              <tr style={{ background: "rgba(16, 185, 129, 0.08)", borderBottom: "1px solid var(--border-subtle)" }}>
                                {section.tableData.headers.map((header, hIdx) => (
                                  <th
                                    key={hIdx}
                                    style={{
                                      padding: "10px 14px",
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
                                    borderBottom:
                                      rIdx < section.tableData!.rows.length - 1
                                        ? "1px solid var(--border-subtle)"
                                        : "none",
                                  }}
                                >
                                  {row.map((cell, cIdx) => (
                                    <td
                                      key={cIdx}
                                      style={{
                                        padding: "10px 14px",
                                        color: cIdx === 0 ? "#10b981" : "var(--text-secondary)",
                                        fontWeight: cIdx === 0 ? 650 : 400,
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

                      {/* Email Pill on Last Section */}
                      {sIdx === activeDoc.sections.length - 1 && (
                        <div
                          style={{
                            marginTop: "16px",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "8px 14px",
                            borderRadius: "10px",
                            backgroundColor: "rgba(16, 185, 129, 0.1)",
                            border: "1px solid rgba(16, 185, 129, 0.2)",
                          }}
                        >
                          <Mail size={15} color="#10b981" />
                          <a
                            href={`mailto:${activeDoc.contactEmail}`}
                            style={{
                              color: "#10b981",
                              textDecoration: "none",
                              fontWeight: 650,
                              fontSize: "13.5px",
                            }}
                          >
                            {isTr ? "E-Posta: " : "Email: "}{activeDoc.contactEmail}
                          </a>
                          <button
                            onClick={handleCopyEmail}
                            type="button"
                            title="Copy email"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              padding: "3px 7px",
                              borderRadius: "6px",
                              backgroundColor: "var(--bg-card)",
                              color: "var(--text-main)",
                              fontSize: "11px",
                              fontWeight: 600,
                              border: "1px solid var(--border-subtle)",
                              cursor: "pointer",
                              marginLeft: "4px",
                            }}
                          >
                            {copiedEmail ? <Check size={11} color="#10b981" /> : <Copy size={11} />}
                            <span>{copiedEmail ? (isTr ? "Kopyalandı" : "Copied") : (isTr ? "Kopyala" : "Copy")}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          {/* Bottom Note (Exact Replica of Language Box) */}
          <div style={{ marginTop: "36px", textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 22px",
                borderRadius: "16px",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                backgroundColor: "rgba(16, 185, 129, 0.08)",
                color: "#10b981",
                fontWeight: 600,
                fontSize: "13.5px",
                lineHeight: "1.5",
                maxWidth: "680px",
              }}
            >
              <Lock size={16} color="#10b981" style={{ flexShrink: 0 }} />
              <span>
                {isTr
                  ? `Wixtory ekosisteminde gizliliğiniz bir ayar veya sonradan eklenen bir özellik değil; değişmez temel mimaridir.`
                  : `Across the Wixtory ecosystem, privacy is not a setting or an afterthought—it is the immutable core architecture.`}
              </span>
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
