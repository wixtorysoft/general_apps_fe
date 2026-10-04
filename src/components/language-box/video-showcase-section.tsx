"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  ExternalLink,
  Sparkles,
  Smartphone,
  Tv,
  LayoutGrid,
  CheckCircle2,
  Volume2,
  Share2,
} from "lucide-react";

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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  YOUTUBE_CHANNEL_URL,
  YOUTUBE_PROMO_URL,
  YOUTUBE_SHORTS_URL,
  YOUTUBE_PROMO_ID,
  YOUTUBE_SHORTS_ID,
} from "@/data/nav";
import { useLanguage } from "@/lib/i18n/language-context";

type VideoTab = "walkthrough" | "shorts" | "dual";

interface VideoShowcaseSectionProps {
  className?: string;
  showTitle?: boolean;
}

export function VideoShowcaseSection({
  className,
  showTitle = true,
}: VideoShowcaseSectionProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<VideoTab>("walkthrough");
  const [copied, setCopied] = useState(false);

  const handleShare = (url: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="videos"
      className={cn("py-16 sm:py-24 relative overflow-hidden transition-colors duration-300 scroll-mt-24", className)}
      style={{ background: "var(--section-videos)" }}
    >
      {/* Ambient background glow */}
      <div className="video-ambient-glow absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="video-ambient-glow absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[550px] h-[550px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 hover:bg-red-500/20 text-xs sm:text-sm font-medium transition-all mb-4 group shadow-sm shadow-red-500/10"
              >
                <YouTubeBrandIcon className="w-4 h-4 text-red-600 dark:text-red-500 group-hover:scale-110 transition-transform" />
                <span>YouTube @WixtorySoft</span>
                <ExternalLink className="w-3 h-3 text-red-500/70" />
              </a>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                {t("video_section_title")}
                <span className="bg-gradient-to-r from-red-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  {t("video_section_title_highlight")}
                </span>
              </h2>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {t("video_section_desc")}
              </p>
            </motion.div>
          </div>
        )}

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          <button
            onClick={() => setActiveTab("walkthrough")}
            className={cn(
              "video-tab-btn flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 border",
              activeTab === "walkthrough"
                ? "active bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/30 scale-[1.02]"
                : "bg-card text-foreground/80 border-border hover:bg-card/80 hover:text-foreground shadow-sm"
            )}
          >
            <Tv className="w-4 h-4" />
            <span>{t("video_tab_walkthrough")}</span>
          </button>

          <button
            onClick={() => setActiveTab("shorts")}
            className={cn(
              "video-tab-btn flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 border",
              activeTab === "shorts"
                ? "active bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/30 scale-[1.02]"
                : "bg-card text-foreground/80 border-border hover:bg-card/80 hover:text-foreground shadow-sm"
            )}
          >
            <Smartphone className="w-4 h-4" />
            <span>{t("video_tab_shorts")}</span>
          </button>

          <button
            onClick={() => setActiveTab("dual")}
            className={cn(
              "video-tab-btn hidden md:flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 border",
              activeTab === "dual"
                ? "active bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/30 scale-[1.02]"
                : "bg-card text-foreground/80 border-border hover:bg-card/80 hover:text-foreground shadow-sm"
            )}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>{t("video_tab_dual")}</span>
          </button>
        </div>

        {/* Video Player Display */}
        <AnimatePresence mode="wait">
          {activeTab === "walkthrough" && (
            <motion.div
              key="walkthrough"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div
                className="video-player-frame card-modern relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-2xl p-2 sm:p-3 backdrop-blur-md transition-all"
                style={{ background: "var(--card-videos)" }}
              >
                <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-inner">
                  <iframe
                    className="w-full h-full object-cover"
                    src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_PROMO_ID}?start=20&rel=0&modestbranding=1`}
                    title="Wixtory Language Box - Master Gameplay Walkthrough"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                {/* Video Info Bar */}
                <div className="video-info-bar p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border mt-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <Badge className="bg-red-500/15 text-red-600 dark:text-red-300 border-red-500/30 text-xs font-semibold">
                        {t("video_badge_full")}
                      </Badge>
                      <span className="text-muted-foreground text-xs font-medium">• 1080p Full HD</span>
                      <span className="text-muted-foreground text-xs font-medium">• 10 Languages</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {t("video_card_title_text")}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare(YOUTUBE_PROMO_URL)}
                      className="border-border bg-card hover:bg-muted text-foreground gap-1.5 text-xs shadow-sm"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>{copied ? t("video_copied_btn") : t("video_share_btn")}</span>
                    </Button>
                    <a
                      href={YOUTUBE_PROMO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-md transition-colors"
                    >
                      <span>{t("video_watch_btn")}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "shorts" && (
            <motion.div
              key="shorts"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Vertical Phone Mockup for Shorts */}
              <div className="md:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[36px] p-3 bg-gradient-to-b from-neutral-800 via-neutral-900 to-black border-4 border-slate-700/60 shadow-2xl shadow-red-500/15">
                  {/* Phone notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-neutral-950 rounded-full z-20 flex items-center justify-end px-2">
                    <div className="w-2 h-2 rounded-full bg-blue-950 border border-blue-800" />
                  </div>

                  <div className="w-full h-full rounded-[28px] overflow-hidden bg-black">
                    <iframe
                      className="w-full h-full object-cover"
                      src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_SHORTS_ID}?rel=0&modestbranding=1&loop=1`}
                      title="Wixtory Language Box - YouTube Shorts"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              {/* Shorts Side Information Card */}
              <div className="md:col-span-6 space-y-6">
                <div>
                  <Badge className="bg-red-500/15 text-red-600 dark:text-red-300 border-red-500/30 text-xs font-semibold mb-3">
                    YOUTUBE SHORTS • 58 SECONDS
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
                    Quick Mobile Tour: Stop Memorizing, Start Playing!
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Designed for fast social watching on mobile devices. See how 5
                    minutes of Sentence Builder and Word Compass fit seamlessly into
                    your daily commute.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Watch in 9:16 vertical Full HD reel format",
                    "Real in-game tile tap & victory sound effects",
                    "Shows Sunset Dark & Mint Fresh day/night modes",
                    "Under 1 minute — perfect for busy learners",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-foreground/90 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={YOUTUBE_SHORTS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-all shadow-lg shadow-red-600/30"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Open in YouTube Shorts</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <Button
                    variant="outline"
                    onClick={() => handleShare(YOUTUBE_SHORTS_URL)}
                    className="border-border bg-card hover:bg-muted text-foreground"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    <span>{copied ? "Link Copied!" : "Share Short"}</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "dual" && (
            <motion.div
              key="dual"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left: 16:9 Player (7 cols) */}
              <div
                className="video-player-frame card-modern lg:col-span-8 rounded-2xl sm:rounded-3xl overflow-hidden border border-border p-3 shadow-2xl backdrop-blur-md transition-all"
                style={{ background: "var(--card-videos)" }}
              >
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-black shadow-inner">
                  <iframe
                    className="w-full h-full object-cover"
                    src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_PROMO_ID}?start=20&rel=0`}
                    title="Wixtory Language Box - 16:9"
                    allowFullScreen
                  />
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">Full Gameplay (16:9)</span>
                  <a
                    href={YOUTUBE_PROMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-red-600 dark:text-red-400 hover:underline flex items-center gap-1 font-medium"
                  >
                    Open YouTube <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Right: 9:16 Shorts Player (4 cols) */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-[280px] aspect-[9/16] rounded-3xl p-2.5 bg-neutral-900 border-2 border-slate-700/60 shadow-xl overflow-hidden">
                  <iframe
                    className="w-full h-full rounded-2xl object-cover bg-black"
                    src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_SHORTS_ID}?rel=0`}
                    title="Wixtory Language Box - 9:16"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subscribe & Official Channel Banner */}
        <div
          className="video-subscribe-banner mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-red-500/25 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-xl transition-all"
          style={{ background: "var(--card-videos)" }}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center shrink-0 shadow-inner">
              <YouTubeBrandIcon className="w-8 h-8 text-red-600 dark:text-red-500" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span>Official WixtorySoft Channel</span>
                <Badge className="bg-red-600 text-white text-[10px] uppercase font-bold py-0.5 px-1.5">
                  SUBSCRIBE
                </Badge>
              </h4>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Follow @WixtorySoft for gameplay strategies, new language drops, and update releases.
              </p>
            </div>
          </div>

          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/30 hover:scale-105 transition-all"
          >
            <YouTubeBrandIcon className="w-4 h-4 fill-white" />
            <span>Subscribe on YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
