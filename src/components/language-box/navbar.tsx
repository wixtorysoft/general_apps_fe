"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";
import { LanguageCode, languages } from "@/lib/i18n/translations";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Menu, X, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks, LOGO_URL, YOUTUBE_CHANNEL_URL } from "@/data";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/language-box/theme-toggle";

function YouTubeBrandIcon({ className = "w-5 h-5" }: { className?: string }) {
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

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -76;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleNavClick = (link: typeof navLinks[number]) => {
    setMobileMenuOpen(false);
    if ((pathname === "/language-box" || pathname === "/language-box/") && link.sectionId) {
      scrollToSection(link.sectionId);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-black/95 backdrop-blur-md py-2 border-white/10 shadow-lg shadow-emerald-500/5"
          : "bg-black/90 backdrop-blur-md py-3 border-white/5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-card/80 hover:bg-foreground/10 text-foreground/80 hover:text-foreground text-xs font-semibold transition-all duration-200 shadow-xs hover:scale-105"
              title="Wixtory Apps Ana Sayfasına Dön"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Wixtory Apps</span>
            </Link>

            <Link href="/language-box" className="flex items-center gap-2 group" title="Language Box">
              <img
                src={LOGO_URL}
                alt="Language Box Logo"
                className="h-9 md:h-10 w-auto object-contain shrink-0 rounded-lg drop-shadow-sm group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.i18nKey} href={link.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "text-white/70 hover:text-white hover:bg-white/10 text-sm gap-1.5",
                    (pathname === link.href || (link.href === "/language-box" && pathname === "/language-box")) && "text-white bg-white/5"
                  )}
                  onClick={() => handleNavClick(link)}
                >
                  {link.sectionId === "videos" && <YouTubeBrandIcon className="w-4 h-4 shrink-0" />}
                  <span>{t(link.i18nKey)}</span>
                </Button>
              </Link>
            ))}

            <div className="ml-4 pl-4 border-l border-white/10 flex items-center gap-2">
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Official YouTube Channel @WixtorySoft"
                className="w-9 h-9 rounded-lg border border-border bg-card/80 hover:bg-red-500/10 flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110"
              >
                <YouTubeBrandIcon className="w-5 h-5" />
              </a>
              <ThemeToggle />
              <Select
                value={language}
                onValueChange={(val) => setLanguage(val as LanguageCode)}
              >
                <SelectTrigger className="w-[140px] bg-white/5 border-white/10 text-white hover:bg-white/10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border text-popover-foreground z-50 shadow-xl">
                  {languages.map((lang) => (
                    <SelectItem
                      key={lang.code}
                      value={lang.code}
                      className="cursor-pointer focus:bg-emerald-500/20 focus:text-foreground"
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Mobile: Theme + Language + Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
              className="w-8 h-8 rounded-lg border border-border bg-card/80 hover:bg-red-500/10 flex items-center justify-center transition-all shadow-sm hover:scale-105"
            >
              <YouTubeBrandIcon className="w-4 h-4" />
            </a>
            <ThemeToggle />
            <Select
              value={language}
              onValueChange={(val) => setLanguage(val as LanguageCode)}
            >
              <SelectTrigger className="w-[50px] bg-white/5 border-white/10 text-white hover:bg-white/10 h-9 px-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border text-popover-foreground z-50 shadow-xl">
                {languages.map((lang) => (
                  <SelectItem
                    key={lang.code}
                    value={lang.code}
                    className="cursor-pointer focus:bg-emerald-500/20 focus:text-foreground"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4 space-y-1">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="ghost"
                className="w-full justify-start text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 gap-2 font-bold mb-2 border border-emerald-500/20"
              >
                <ArrowLeft className="w-4 h-4 shrink-0" />
                <span>Wixtory Apps Ana Sayfası</span>
              </Button>
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.i18nKey}
                href={link.href}
                onClick={() => handleNavClick(link)}
              >
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-white/70 hover:text-white hover:bg-white/10 gap-2",
                    (pathname === link.href || (link.href === "/language-box" && pathname === "/language-box")) && "text-white bg-white/5"
                  )}
                >
                  {link.sectionId === "videos" && <YouTubeBrandIcon className="w-4 h-4 shrink-0" />}
                  <span>{t(link.i18nKey)}</span>
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
