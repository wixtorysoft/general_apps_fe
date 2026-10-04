"use client";

import { Navbar } from "@/components/language-box/navbar";
import { ScreenshotsSection } from "@/components/language-box/screenshots-section";
import { VideoShowcaseSection } from "@/components/language-box/video-showcase-section";
import { Footer } from "@/components/language-box/footer";
import { motion } from "framer-motion";
import { Sparkles, Download } from "lucide-react";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/data/nav";
import { useLanguage } from "@/lib/i18n/language-context";

function YouTubeBrandIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#FF0000"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
      />
      <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function ScreenshotsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-20 sm:pt-24">
        {/* Page Hero Header */}
        <section className="relative py-12 sm:py-16 overflow-hidden border-b border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm shadow-emerald-500/10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t("page_screens_badge")}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
                {t("page_screens_title_1")}{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  {t("page_screens_title_2")}
                </span>
              </h1>

              <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
                {t("page_screens_desc")}
              </p>

              {/* Quick Action Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#videos"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-red-600/25 transition-all"
                >
                  <YouTubeBrandIcon className="w-4 h-4" />
                  <span>{t("page_btn_watch_videos")}</span>
                </a>

                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm border border-white/10 transition-colors"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>{t("app_store_btn")}</span>
                </a>

                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm border border-white/10 transition-colors"
                >
                  <Download className="w-4 h-4 text-teal-400" />
                  <span>{t("google_play_btn")}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 1. Screenshots Gallery (with grid/carousel view toggle) */}
        <ScreenshotsSection initialViewMode="grid" />

        {/* 2. Embedded Video Showcase */}
        <VideoShowcaseSection className="border-t border-white/10" />
      </main>

      <Footer />
    </div>
  );
}
