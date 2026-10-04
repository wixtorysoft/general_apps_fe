"use client";

import Link from "next/link";
import { Navbar } from "@/components/language-box/navbar";
import { Footer } from "@/components/language-box/footer";
import { useLanguage } from "@/lib/i18n/language-context";
import { Shield, Mail, Lock, BarChart3, Smartphone, Server, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const GITHUB_URL = "https://github.com/celalaygar/main/blob/main/project/language-box/privacy-policy.md";

const sections = [
  {
    icon: Shield,
    number: "1",
    titleKey: "privacy_no_data_title",
    contentKey: "privacy_no_data_content",
  },
  {
    icon: Smartphone,
    number: "2",
    titleKey: "privacy_caching_title",
    contentKey: "privacy_caching_content",
    hasSubItems: true,
  },
  {
    icon: BarChart3,
    number: "3",
    titleKey: "privacy_stats_title",
    contentKey: "privacy_stats_content",
  },
  {
    icon: Server,
    number: "4",
    titleKey: "privacy_third_party_title",
    contentKey: "privacy_third_party_content",
  },
  {
    icon: Lock,
    number: "5",
    titleKey: "privacy_security_title",
    contentKey: "privacy_security_content",
  },
  {
    icon: Mail,
    number: "6",
    titleKey: "privacy_contact_title",
    contentKey: "privacy_contact_content",
    hasEmail: true,
  },
];

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  const handleDownload = () => {
    // Build markdown content using translations
    const lines: string[] = [];
    lines.push(`# ${t("privacy_policy")}`);
    lines.push("");
    lines.push(`**${t("privacy_for_app")}**`);
    lines.push(`*${t("privacy_effective_date")}*`);
    lines.push("");
    lines.push("---");
    lines.push("");
    lines.push(`## 1. ${t("privacy_no_data_title")}`);
    lines.push("");
    lines.push(t("privacy_no_data_content"));
    lines.push("");
    lines.push(`## 2. ${t("privacy_caching_title")}`);
    lines.push("");
    lines.push(t("privacy_caching_content"));
    lines.push("");
    lines.push(`### ${t("privacy_how_it_works")}`);
    lines.push(t("privacy_how_it_works_desc"));
    lines.push("");
    lines.push(`### ${t("privacy_data_location")}`);
    lines.push(t("privacy_data_location_desc"));
    lines.push("");
    lines.push(`### ${t("privacy_control")}`);
    lines.push(t("privacy_control_desc"));
    lines.push("");
    lines.push(`## 3. ${t("privacy_stats_title")}`);
    lines.push("");
    lines.push(t("privacy_stats_content"));
    lines.push("");
    lines.push(`## 4. ${t("privacy_third_party_title")}`);
    lines.push("");
    lines.push(t("privacy_third_party_content"));
    lines.push("");
    lines.push(`## 5. ${t("privacy_security_title")}`);
    lines.push("");
    lines.push(t("privacy_security_content"));
    lines.push("");
    lines.push(`## 6. ${t("privacy_contact_title")}`);
    lines.push("");
    lines.push(t("privacy_contact_content"));
    lines.push("");
    lines.push("Email: wixtoryy@gmail.com");
    lines.push("");

    const blob = new Blob([lines.join("\n")], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "language-box-privacy-policy.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-6">
              <Shield className="h-3.5 w-3.5" />
              {t("privacy_legal")}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {t("privacy_policy")}
            </h1>
            <p className="text-white/50 text-lg">{t("privacy_for_app")}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400/60" />
              {t("privacy_effective_date")}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/privacy-policy">
                <Button
                  variant="outline"
                  className="border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:text-white gap-2 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02]"
                >
                  <Shield className="h-4 w-4 text-emerald-400" />
                  Wixtory Ekosistem Politikası
                </Button>
              </Link>
              <Button
                onClick={handleDownload}
                className="bg-emerald-600 hover:bg-emerald-500 text-white gap-2 px-6 rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:shadow-emerald-500/30 hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" />
                {t("privacy_download")}
              </Button>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white gap-2 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02]"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t("privacy_view_github")}
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <motion.section
                  key={section.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="card-modern rounded-2xl p-6 sm:p-8 border border-white/10 backdrop-blur-xl bg-white/[0.03]"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Icon & Number */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-emerald-400" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg sm:text-xl font-semibold text-white/90 mb-3">
                        <span className="text-emerald-400/60 mr-2">{section.number}.</span>
                        {t(section.titleKey)}
                      </h2>
                      <p className="text-white/50 leading-relaxed">{t(section.contentKey)}</p>

                      {/* Sub-items for Section 2 - Caching */}
                      {section.hasSubItems && (
                        <div className="mt-4 space-y-3">
                          <div className="pl-4 border-l-2 border-white/10 py-1">
                            <p className="text-white/70 text-sm font-medium mb-1">
                              {t("privacy_how_it_works")}
                            </p>
                            <p className="text-white/40 text-sm leading-relaxed">
                              {t("privacy_how_it_works_desc")}
                            </p>
                          </div>
                          <div className="pl-4 border-l-2 border-white/10 py-1">
                            <p className="text-white/70 text-sm font-medium mb-1">
                              {t("privacy_data_location")}
                            </p>
                            <p className="text-white/40 text-sm leading-relaxed">
                              {t("privacy_data_location_desc")}
                            </p>
                          </div>
                          <div className="pl-4 border-l-2 border-white/10 py-1">
                            <p className="text-white/70 text-sm font-medium mb-1">
                              {t("privacy_control")}
                            </p>
                            <p className="text-white/40 text-sm leading-relaxed">
                              {t("privacy_control_desc")}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Email for Contact section */}
                      {section.hasEmail && (
                        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5">
                          <Mail className="h-4 w-4 text-emerald-400/70" />
                          <a
                            href="mailto:wixtoryy@gmail.com"
                            className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
                          >
                            wixtoryy@gmail.com
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.section>
              );
            })}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 font-medium text-sm">
              <Lock className="h-4 w-4 shrink-0 text-emerald-400" />
              <span>{t("privacy_bottom_note")}</span>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
