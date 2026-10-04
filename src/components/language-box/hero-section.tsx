"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Gamepad2, Languages, TrendingUp } from "lucide-react";
import { LOGO_URL } from "@/data";
import { StoreButtons } from "@/components/language-box/store-buttons";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 section-hover scroll-mt-24"
      style={{ background: "var(--section-hero)" }}
    >
      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5" />
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent"
            style={{
              left: `${(i + 1) * 8}%`,
              height: "100%",
            }}
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 backdrop-blur-md mb-6 shadow-sm shadow-emerald-500/10">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-bold tracking-wide bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Wixtory Language Box
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {t("hero_h1_1")}
              </span>
              <br />
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                {t("hero_h1_2")}
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                {t("hero_h1_3")}
              </span>
            </h1>

            <p className="text-lg text-white/60 mb-8 max-w-xl leading-relaxed">
              {t("hero_desc")}
            </p>

            <div className="mb-8">
              <StoreButtons />
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge
                variant="secondary"
                className="px-3 py-1.5 border border-white/10 text-white/70 hover:bg-white/10 transition-colors"
                style={{ background: "var(--card-games)" }}
              >
                <Gamepad2 className="mr-1.5 h-3.5 w-3.5 text-emerald-400" />
                {t("badge_games")}
              </Badge>
              <Badge
                variant="secondary"
                className="px-3 py-1.5 border border-white/10 text-white/70 hover:bg-white/10 transition-colors"
                style={{ background: "var(--card-games)" }}
              >
                <Languages className="mr-1.5 h-3.5 w-3.5 text-teal-400" />
                {t("badge_languages")}
              </Badge>
              <Badge
                variant="secondary"
                className="px-3 py-1.5 border border-white/10 text-white/70 hover:bg-white/10 transition-colors"
                style={{ background: "var(--card-games)" }}
              >
                <TrendingUp className="mr-1.5 h-3.5 w-3.5 text-cyan-400" />
                {t("badge_tracking")}
              </Badge>
            </div>
          </motion.div>

          {/* Logo Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl" />
              <img
                src={LOGO_URL}
                alt="Language Box Logo"
                className="relative z-10 h-64 md:h-80 lg:h-96 w-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
