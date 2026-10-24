"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  Send,
  Layers,
} from "lucide-react";
import { LOGO_URL, YOUTUBE_CHANNEL_URL } from "@/data/language-box";

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-20 relative section-hover"
      style={{ background: "var(--section-developer)" }}
    >
      {/* Anchor for backward compatibility with #developer */}
      <span id="developer" className="absolute -top-24" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm shadow-emerald-500/10">
            <Mail className="w-3.5 h-3.5" />
            <span>{t("nav_contact") || "İletişim"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
            {t("section_contact") || "İletişim & Destek"}
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            {t("section_contact_desc") ||
              "Sorularınız, önerileriniz veya iş birliği talepleriniz için Wixtory ekibiyle doğrudan iletişime geçin."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <Card
            className="card-modern rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            style={
              {
                background: "var(--card-developer)",
                "--hover-accent": "rgba(16, 185, 129, 0.15)",
              } as React.CSSProperties
            }
          >
            <div className="h-2 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

            <CardContent className="p-8 sm:p-10 text-center">
              {/* Brand Logo */}
              <div className="relative w-20 h-20 mx-auto mb-4 p-2.5 rounded-2xl bg-black/60 border border-emerald-500/30 shadow-lg shadow-emerald-500/15 flex items-center justify-center">
                <img
                  src={LOGO_URL}
                  alt="Wixtory"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1 tracking-tight">
                Wixtory
              </h3>
              <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
                Games & Software Studio
              </p>

              {/* Contact Channels Grid */}
              <div className="space-y-3 mb-6 text-left">
                {/* Official Website (wixtory.com) */}
                <a
                  href="https://wixtory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/40 hover:bg-emerald-500/5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                      Official Portal
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
                      wixtory.com
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                {/* Apps & Games Platform (apps.wixtory.com) */}
                <a
                  href="https://apps.wixtory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-teal-400/40 hover:bg-teal-500/5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center shrink-0 text-teal-400 group-hover:scale-110 transition-transform">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                      Apps & Games Hub
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-teal-400 transition-colors truncate">
                      apps.wixtory.com
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                {/* Email Address */}
                <a
                  href="mailto:wixtoryy@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/5 transition-all duration-200 group"
                  title="wixtoryy@gmail.com"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                      Direct Email
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors truncate">
                      wixtoryy@gmail.com
                    </div>
                  </div>
                  <Send className="w-4 h-4 text-white/30 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                {/* Official YouTube Channel */}
                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-red-500/40 hover:bg-red-500/5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center shrink-0 text-red-500 group-hover:scale-110 transition-transform">
                    <YoutubeIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                      YouTube Channel
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-red-400 transition-colors truncate">
                      @Wixtoryy
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-red-400 transition-colors shrink-0" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center shrink-0 text-indigo-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                      Location
                    </div>
                    <div className="text-sm font-medium text-white/90">
                      Turkey
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons (wixtory.com & apps.wixtory.com) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="https://wixtory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm hover:from-emerald-400 hover:to-teal-400 transition-all duration-200 shadow-md shadow-emerald-500/20 hover:-translate-y-0.5"
                >
                  <Globe className="h-4 w-4" />
                  <span>wixtory.com</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                </a>

                <a
                  href="https://apps.wixtory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/10 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Layers className="h-4 w-4 text-teal-400" />
                  <span>apps.wixtory.com</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// Backward compatibility alias
export const DeveloperSection = ContactSection;
