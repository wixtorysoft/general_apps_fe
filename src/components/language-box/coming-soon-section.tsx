"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  FileJson,
  Smartphone,
  Tablet,
  ArrowRightLeft,
  ShieldCheck,
  Sparkles,
  Layers,
  Clock,
  Download,
  Upload,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";

export function ComingSoonSection() {
  const { t } = useLanguage();

  const highlights = [
    { icon: Download, text: t("backup_feature_1") },
    { icon: RefreshCw, text: t("backup_feature_2") },
    { icon: ShieldCheck, text: t("backup_feature_3") },
    { icon: Layers, text: t("backup_feature_4") },
  ];

  const tags = [
    "tag_json_backup",
    "tag_cross_device",
    "tag_no_account",
    "tag_instant_resume",
  ];

  return (
    <section
      id="coming-soon"
      className="py-20 relative overflow-hidden section-hover"
      style={{ background: "var(--section-games)" }}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="coming-soon-header-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/15 via-emerald-500/15 to-teal-500/15 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm shadow-sm shadow-cyan-500/10">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>{t("badge_coming_soon")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent mb-4">
            {t("section_coming_soon")}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base sm:text-lg">
            {t("section_coming_soon_desc")}
          </p>
        </motion.div>

        {/* JSON Backup & Restore Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <Card
            className="card-modern coming-soon-main-card relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl backdrop-blur-xl"
            style={{
              background: "var(--card-games)",
              "--hover-accent": "rgba(6, 182, 212, 0.18)",
            } as React.CSSProperties}
          >
            {/* Top gradient accent line */}
            <div className="coming-soon-accent-line absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-teal-400" />

            <CardContent className="p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Visual Showcase Side */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
                  <div className="relative group w-full max-w-sm mx-auto">
                    {/* Glowing outer backdrop */}
                    <div className="coming-soon-visual-glow absolute -inset-4 bg-gradient-to-tr from-cyan-600/30 via-emerald-500/25 to-teal-600/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

                    <div className="coming-soon-diagram-card relative p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-900/95 via-[#0d1322]/95 to-slate-950/95 border border-cyan-500/30 shadow-2xl backdrop-blur-xl flex flex-col items-center">
                      {/* Upper visual: Device Transfer Diagram */}
                      <div className="flex items-center justify-between w-full gap-2 sm:gap-3 my-2">
                        {/* Device A (Current Phone) */}
                        <div className="coming-soon-device-box flex-1 flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/40 transition-colors">
                          <div className="coming-soon-device-icon w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mb-2 shadow-lg shadow-cyan-500/10 text-cyan-400">
                            <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <span className="coming-soon-device-title text-[11px] sm:text-xs font-bold text-white">Device A</span>
                          <span className="coming-soon-device-sub text-[9px] text-white/50">Phone</span>
                          <div className="coming-soon-badge-export mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[9px] font-mono border border-cyan-500/20">
                            <Download className="w-2.5 h-2.5" /> Export
                          </div>
                        </div>

                        {/* Center Transfer Flow (JSON Payload) */}
                        <div className="flex flex-col items-center shrink-0 px-1">
                          <div className="coming-soon-packet-box w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-cyan-500/25 via-emerald-500/20 to-teal-500/25 border border-cyan-400/50 flex flex-col items-center justify-center relative shadow-lg shadow-cyan-500/25">
                            <FileJson className="coming-soon-packet-icon w-6 h-6 sm:w-7 sm:h-7 text-emerald-300 animate-pulse" />
                            <span className="coming-soon-packet-text text-[8px] font-mono font-bold text-cyan-300 mt-0.5">.JSON</span>
                          </div>
                          <div className="coming-soon-arrow flex items-center gap-1 mt-2 text-cyan-400">
                            <ArrowRightLeft className="w-3.5 h-3.5 animate-pulse" />
                          </div>
                        </div>

                        {/* Device B (New Phone / Tablet) */}
                        <div className="coming-soon-device-box flex-1 flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-400/40 transition-colors">
                          <div className="coming-soon-device-icon w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-2 shadow-lg shadow-emerald-500/10 text-emerald-400">
                            <Tablet className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <span className="coming-soon-device-title text-[11px] sm:text-xs font-bold text-white">Device B</span>
                          <span className="coming-soon-device-sub text-[9px] text-white/50">Phone / Tablet</span>
                          <div className="coming-soon-badge-import mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 text-[9px] font-mono border border-emerald-500/20">
                            <Upload className="w-2.5 h-2.5" /> Import
                          </div>
                        </div>
                      </div>

                      {/* Status pill under diagram */}
                      <div className="coming-soon-status-pill mt-4 w-full flex items-center justify-center gap-2 py-1.5 px-3 rounded-xl bg-white/[0.03] border border-white/10 text-white/70 text-[11px]">
                        <CheckCircle2 className="coming-soon-check-icon w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Zero Cloud • 100% Privacy • Offline JSON</span>
                      </div>
                    </div>
                  </div>

                  {/* Feature Tag */}
                  <div className="coming-soon-feature-pill mt-6 flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium">
                    <FileJson className="w-3.5 h-3.5 text-cyan-400" />
                    <span>JSON Data Portability • Free & Private</span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  {/* Status Indicator */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span>{t("status_in_development")}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>{t("badge_backup_feature")}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{t("badge_coming_soon")}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
                    {t("backup_title")}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                    {t("backup_desc")}
                  </p>

                  {/* Highlight Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {highlights.map((h, i) => {
                      const HIcon = h.icon;
                      return (
                        <div
                          key={i}
                          className="coming-soon-highlight-item flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-colors"
                        >
                          <div className="coming-soon-highlight-icon w-7 h-7 rounded-lg bg-cyan-500/15 flex items-center justify-center shrink-0 text-cyan-300">
                            <HIcon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-medium text-white/80">
                            {h.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="coming-soon-tag-badge text-xs px-2.5 py-1 bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
                      >
                        {t(tag)}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
