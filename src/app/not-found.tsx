"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { resolveI18n } from "@/i18n";
import {
  Compass,
  ArrowLeft,
  Home,
  Sparkles,
  Gamepad2,
  Moon,
  MessageSquare,
  PlaySquare,
  ExternalLink,
} from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const { language } = useLanguage();

  const badgeText = resolveI18n("notFound", "badge", language);
  const titleText = resolveI18n("notFound", "title", language);
  const descText = resolveI18n("notFound", "description", language);
  const homeBtn = resolveI18n("notFound", "home_button", language);
  const backBtn = resolveI18n("notFound", "back_button", language);
  const exploreTitle = resolveI18n("notFound", "explore_apps", language);

  const featuredApps = [
    {
      title: resolveI18n("notFound", "language_box_title", language),
      href: "/language-box",
      category: "Eğitim & Dil Oyunları",
      icon: Gamepad2,
      gradient: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-500",
      accent: "text-emerald-500",
    },
    {
      title: resolveI18n("notFound", "astrovibe_title", language),
      href: "/#astrovibe",
      category: "Astroloji, Tarot & Stil",
      icon: Moon,
      gradient: "from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400",
      accent: "text-purple-400",
    },
    {
      title: resolveI18n("notFound", "excuse_title", language),
      href: "/#excuse",
      category: "Mizah & Sosyal Savunma",
      icon: MessageSquare,
      gradient: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-500",
      accent: "text-amber-500",
    },
    {
      title: resolveI18n("notFound", "player_title", language),
      href: "/player",
      category: "Medya & Reel Flow",
      icon: PlaySquare,
      gradient: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400",
      accent: "text-cyan-400",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col justify-between relative overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-main)",
      }}
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-400/15 via-emerald-400/10 to-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[360px] h-[360px] bg-teal-400/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Compact Top Navigation Bar */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-3 group transition-transform duration-200 hover:scale-105"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20 text-white font-bold text-lg">
            W
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-base tracking-tight" style={{ color: "var(--text-main)" }}>
              WIXTORY
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase opacity-60" style={{ color: "var(--text-secondary)" }}>
              Apps & Software Ecosystem
            </span>
          </div>
        </Link>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-subtle)",
            color: "var(--text-main)",
          }}
        >
          <Home className="w-4 h-4 text-sky-500" />
          <span>{homeBtn}</span>
        </Link>
      </header>

      {/* Main 404 Hero Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 max-w-4xl mx-auto text-center w-full">
        {/* Glowing Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-semibold mb-6 shadow-sm animate-pulse"
          style={{
            backgroundColor: "var(--badge-bg)",
            borderColor: "var(--border-active)",
            color: "var(--primary)",
          }}
        >
          <Compass className="w-4 h-4 animate-spin" style={{ animationDuration: "12s" }} />
          <span>{badgeText}</span>
        </div>

        {/* 404 Number Glitch/Specular Display */}
        <div className="relative mb-4 select-none">
          <div
            className="text-8xl sm:text-9xl md:text-[140px] font-black tracking-tighter leading-none bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm"
          >
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <Sparkles className="w-32 h-32 text-sky-400" />
          </div>
        </div>

        {/* Title & Description */}
        <h1
          className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4 max-w-2xl leading-snug"
          style={{ color: "var(--text-main)" }}
        >
          {titleText}
        </h1>

        <p
          className="text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed opacity-80"
          style={{ color: "var(--text-secondary)" }}
        >
          {descText}
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-sky-500/25 hover:from-sky-400 hover:to-indigo-500 hover:shadow-sky-500/35 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            <span>{homeBtn}</span>
          </Link>

          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border font-bold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-subtle)",
              color: "var(--text-main)",
            }}
          >
            <ArrowLeft className="w-4 h-4 opacity-70" />
            <span>{backBtn}</span>
          </button>
        </div>

        {/* Popular Apps Quick Links */}
        <div className="w-full">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-current opacity-20" />
            <span
              className="text-xs sm:text-sm font-bold uppercase tracking-widest opacity-60"
              style={{ color: "var(--text-secondary)" }}
            >
              {exploreTitle}
            </span>
            <div className="h-px w-12 bg-current opacity-20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
            {featuredApps.map((app, idx) => {
              const Icon = app.icon;
              return (
                <Link
                  key={idx}
                  href={app.href}
                  className="group flex items-center justify-between p-4 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border bg-gradient-to-br ${app.gradient}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold uppercase tracking-wider opacity-60" style={{ color: "var(--text-secondary)" }}>
                        {app.category}
                      </div>
                      <div className="text-sm font-bold truncate group-hover:text-sky-500 transition-colors" style={{ color: "var(--text-main)" }}>
                        {app.title}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-30 group-hover:opacity-80 group-hover:translate-x-0.5 transition-all shrink-0 ml-3" />
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer minimal info */}
      <footer className="relative z-10 w-full py-6 text-center text-xs opacity-50" style={{ color: "var(--text-secondary)" }}>
        © {new Date().getFullYear()} Wixtory Ecosystem • All rights reserved.
      </footer>
    </div>
  );
}

