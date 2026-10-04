"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";
import { socialLinks, LOGO_URL, GOOGLE_PLAY_URL, APP_STORE_URL } from "@/data";
import { Shield, Gamepad2, Mail, ChevronRight, Globe, ExternalLink } from "lucide-react";

const productLinks = [
  { i18nKey: "nav_home", href: "/language-box", sectionId: "hero" },
  { i18nKey: "nav_screenshots", href: "/language-box/screenshots", sectionId: "screenshots" },
  { i18nKey: "nav_games", href: "/language-box/games", sectionId: "games" },
  { i18nKey: "nav_features", href: "/language-box/features", sectionId: "features" },
] as const;

const supportLinks = [
  { i18nKey: "nav_advantages", href: "/language-box/advantages", sectionId: "advantages" },
  { i18nKey: "nav_faq", href: "/language-box/faq", sectionId: "faq" },
  { i18nKey: "nav_developer", href: "/language-box/developer", sectionId: "developer" },
  { i18nKey: "nav_privacy", href: "/language-box/privacy-policy", sectionId: "" },
] as const;

export function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined" && (window.location.pathname === "/language-box" || window.location.pathname === "/language-box/") && id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
  };

  return (
    <footer
      className="border-t border-white/5 mt-auto"
      style={{ background: "var(--section-footer)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/language-box" className="inline-flex items-center gap-3 mb-4">
              <img
                src={LOGO_URL}
                alt="Language Box Logo"
                className="h-9 md:h-10 w-auto object-contain shrink-0 rounded-lg drop-shadow-sm"
              />
              <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {t("app_title")}
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              {t("footer_description")}
            </p>

            {/* Social Icons */}
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 transition-all duration-300 hover:-translate-y-0.5 ${
                      social.color || "hover:text-emerald-400 hover:border-emerald-400/20"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>

            {/* Back to Wixtory Apps Hub */}
            <div className="mt-4 pt-3 border-t border-white/5">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/hub"
              >
                <span className="group-hover/hub:-translate-x-0.5 transition-transform">←</span>
                <span>Wixtory Apps Ana Sayfası</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
              <Gamepad2 className="h-4 w-4 text-emerald-400" />
              {t("footer_product")}
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.i18nKey}>
                  <Link
                    href={link.href}
                    onClick={() => scrollToSection(link.sectionId)}
                    className="group inline-flex items-center gap-1.5 text-white/40 hover:text-emerald-400 text-sm transition-all duration-300"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {t(link.i18nKey)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-400" />
              {t("footer_support")}
            </h3>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.i18nKey}>
                  <Link
                    href={link.href}
                    onClick={() => scrollToSection(link.sectionId)}
                    className="group inline-flex items-center gap-1.5 text-white/40 hover:text-emerald-400 text-sm transition-all duration-300"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {t(link.i18nKey)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Download & Contact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="size-5 text-cyan-400" />
              <h3 className="text-white font-semibold text-sm tracking-wider">
                {t("footer_download")}
              </h3>
            </div>

            {/* Store Buttons */}
            <div className="mb-5">
              <div className="flex flex-wrap gap-3">
                {/* App Store Button */}
                <a
                  href={APP_STORE_URL || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#000000] border border-[#424242] hover:border-[#6e6e6e] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/5"
                >
                  <svg className="h-7 w-7 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                  </svg>
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px] font-normal text-white/70 uppercase tracking-wide">Download on the</span>
                    <span className="text-base font-semibold text-white -mt-0.5">App Store</span>
                  </div>
                </a>

                {/* Google Play Button */}
                <a
                  href={GOOGLE_PLAY_URL || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#000000] border border-[#424242] hover:border-[#6e6e6e] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/5"
                >
                  <svg className="h-7 w-7 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3.609 1.814L13.792 12.027L3.61 22.186C3.471 22.076 3.384 21.907 3.384 21.713V2.287C3.384 2.093 3.471 1.924 3.609 1.814Z" fill="#2196F3" />
                    <path d="M17.092 8.65L14.073 11.673L13.792 11.392V12.027V12.662L14.073 12.381L17.092 15.404L17.331 15.266L20.923 13.187C21.792 12.678 21.792 11.376 20.923 10.867L17.331 8.788L17.092 8.65Z" fill="#FFC107" />
                    <path d="M13.792 12.027L3.609 22.186C3.703 22.263 3.827 22.31 3.967 22.31C4.186 22.31 4.354 22.213 4.517 22.119L14.073 12.381L13.792 12.027Z" fill="#0C9D58" />
                    <path d="M3.967 1.744C3.827 1.744 3.703 1.791 3.609 1.868L13.792 12.027L14.073 11.673L4.517 1.935C4.354 1.841 4.186 1.744 3.967 1.744Z" fill="#F44336" />
                    <path d="M17.092 8.65L4.517 1.935C4.354 1.841 4.186 1.744 3.967 1.744C3.827 1.744 3.703 1.791 3.609 1.868L13.792 12.027L3.609 22.186C3.703 22.263 3.827 22.31 3.967 22.31C4.186 22.31 4.354 22.213 4.517 22.119L17.092 15.404L14.073 12.381L13.792 12.662V12.027V11.392L14.073 11.673L17.092 8.65Z" fill="url(#gplay-gradient)" opacity="0.2" />
                    <defs>
                      <linearGradient id="gplay-gradient" x1="13.792" y1="12.027" x2="13.792" y2="12.027" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px] font-normal text-white/70 uppercase tracking-wide">GET IT ON</span>
                    <span className="text-base font-semibold text-white -mt-0.5">Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Links */}
            <div className="space-y-1.5 text-white/50 text-sm">
              <a
                href="https://www.wixtory.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-200 group/site"
              >
                <Globe className="size-3.5 text-emerald-400/60" />
                <span>www.wixtory.com</span>
                <ExternalLink className="size-3 opacity-0 group-hover/site:opacity-70 transition-opacity" />
              </a>
              <a
                href="mailto:wixtoryy@gmail.com"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-200"
              >
                <Mail className="size-3.5 text-emerald-400/60" />
                <span>wixtoryy@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">{t("footer_rights")}</p>
          <div className="flex items-center gap-4">
            <Link
              href="/language-box/privacy-policy"
              className="inline-flex items-center gap-1.5 text-white/25 hover:text-emerald-400 text-xs transition-colors duration-300"
            >
              <Shield className="h-3 w-3" />
              {t("privacy_policy")}
            </Link>
            <span className="text-white/10">|</span>
            <span className="text-white/20 text-xs">Made with 💚 by Wixtory</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
