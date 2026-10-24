"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { useEffect, useState, useMemo } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  Gamepad2,
  BarChart3,
  Layers,
  SlidersHorizontal,
  LayoutGrid,
  Tv,
  Smartphone,
  Tablet,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  screenshots,
  type ScreenshotCategory,
  type ScreenshotDevice,
} from "@/data/screenshots";

interface ScreenshotsSectionProps {
  initialViewMode?: "carousel" | "grid";
  titleKey?: string;
  descKey?: string;
  showViewToggle?: boolean;
}

export function ScreenshotsSection({
  initialViewMode = "carousel",
  showViewToggle = false,
}: ScreenshotsSectionProps) {
  const { t, language } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<ScreenshotCategory>("all");
  const [activeDevice, setActiveDevice] = useState<ScreenshotDevice>("all");
  const [viewMode, setViewMode] = useState<"carousel" | "grid">(
    showViewToggle ? initialViewMode : "carousel"
  );

  const resolveText = (trText: string, fallbackEn?: string) =>
    language === "tr" ? trText : fallbackEn || trText;

  // Device options (All, Phone, Tablet)
  const devices = useMemo(
    () => [
      {
        id: "all" as const,
        label: t("dev_tab_all") || resolveText("Tüm Cihazlar", "All Devices"),
        icon: Layers,
        count: screenshots.length,
      },
      {
        id: "phone" as const,
        label: t("dev_tab_phone") || resolveText("Telefon", "Phone"),
        icon: Smartphone,
        count: screenshots.filter((s) => s.device === "phone").length,
      },
      {
        id: "tablet" as const,
        label: t("dev_tab_tablet") || resolveText("Tablet", "Tablet"),
        icon: Tablet,
        count: screenshots.filter((s) => s.device === "tablet").length,
      },
    ],
    [t, language]
  );

  // Category options (Filtered dynamically by device)
  const categories = useMemo(() => {
    const baseList =
      activeDevice === "all"
        ? screenshots
        : screenshots.filter((s) => s.device === activeDevice);

    return [
      {
        id: "all" as const,
        label: t("cat_tab_all"),
        icon: Layers,
        count: baseList.length,
      },
      {
        id: "games" as const,
        label: t("cat_tab_games"),
        icon: Gamepad2,
        count: baseList.filter((s) => s.category === "games").length,
      },
      {
        id: "menu" as const,
        label: t("cat_tab_menu"),
        icon: LayoutGrid,
        count: baseList.filter((s) => s.category === "menu").length,
      },
      {
        id: "stats" as const,
        label: t("cat_tab_stats"),
        icon: BarChart3,
        count: baseList.filter((s) => s.category === "stats").length,
      },
      {
        id: "settings" as const,
        label: t("cat_tab_settings"),
        icon: SlidersHorizontal,
        count: baseList.filter((s) => s.category === "settings").length,
      },
    ];
  }, [t, activeDevice]);

  // Filtered Screenshots
  const filteredScreens = useMemo(() => {
    return screenshots.filter((s) => {
      const matchCat =
        activeCategory === "all" || s.category === activeCategory;
      const matchDev =
        activeDevice === "all" || s.device === activeDevice;
      return matchCat && matchDev;
    });
  }, [activeCategory, activeDevice]);

  const handleCategoryChange = (catId: ScreenshotCategory) => {
    setActiveCategory(catId);
    setCurrent(0);
    if (api) {
      api.scrollTo(0);
    }
  };

  const handleDeviceChange = (devId: ScreenshotDevice) => {
    setActiveDevice(devId);
    setCurrent(0);
    if (api) {
      api.scrollTo(0);
    }
  };

  // Sync Carousel State
  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      const idx = api.selectedScrollSnap();
      setCurrent(idx);
    };

    handleSelect();
    api.on("select", handleSelect);
    api.on("reInit", handleSelect);
    return () => {
      api.off("select", handleSelect);
      api.off("reInit", handleSelect);
    };
  }, [api]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === "Escape") setLightboxIndex(null);
        if (e.key === "ArrowLeft") {
          setLightboxIndex((prev) =>
            prev !== null
              ? (prev - 1 + filteredScreens.length) % filteredScreens.length
              : null
          );
        }
        if (e.key === "ArrowRight") {
          setLightboxIndex((prev) =>
            prev !== null ? (prev + 1) % filteredScreens.length : null
          );
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredScreens.length]);

  return (
    <section
      id="screenshots"
      className="py-16 sm:py-24 relative overflow-hidden section-hover transition-colors duration-300"
      style={{
        background: "var(--section-screenshots, rgba(13, 17, 28, 0.7))",
      }}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="screens-header-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm shadow-emerald-500/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("screens_header_badge")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent mb-4 tracking-tight">
            {t("screens_section_title")}
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            {t("screens_section_desc")}
          </p>
        </motion.div>

        {/* 1. Device Filter Tabs (All / Phone / Tablet) */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-1.5 p-1 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm">
            {devices.map((dev) => {
              const DevIcon = dev.icon;
              const isDevActive = activeDevice === dev.id;
              return (
                <button
                  key={dev.id}
                  onClick={() => handleDeviceChange(dev.id)}
                  className={cn(
                    "flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200",
                    isDevActive
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md shadow-emerald-500/20"
                      : "text-white/70 hover:text-white hover:bg-white/[0.06]"
                  )}
                >
                  <DevIcon className="w-4 h-4" />
                  <span>{dev.label}</span>
                  <span
                    className={cn(
                      "text-[10px] font-extrabold px-1.5 py-0.5 rounded-md transition-colors",
                      isDevActive
                        ? "bg-slate-950/20 text-slate-950"
                        : "bg-white/10 text-white/60"
                    )}
                  >
                    {dev.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 max-w-4xl mx-auto px-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={cn(
                  "screen-cat-btn inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border",
                  isActive
                    ? "active bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-md shadow-emerald-500/10"
                    : "bg-white/[0.04] text-white/70 hover:text-white hover:bg-white/[0.08] border-white/10"
                )}
              >
                <Icon
                  className={cn(
                    "w-4 h-4 transition-colors",
                    isActive ? "text-emerald-400" : "text-white/60"
                  )}
                />
                <span>{cat.label}</span>
                <span
                  className={cn(
                    "screen-cat-count ml-0.5 text-[11px] font-bold px-1.5 py-0.5 rounded-md",
                    isActive
                      ? "bg-emerald-500/30 text-emerald-200"
                      : "bg-white/10 text-white/60"
                  )}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* View Mode Toggle (Carousel vs Grid) */}
        {showViewToggle && (
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-card border border-border shadow-sm">
              <button
                onClick={() => setViewMode("carousel")}
                className={cn(
                  "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors",
                  viewMode === "carousel"
                    ? "bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 border border-emerald-500/40 shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Tv className="w-3.5 h-3.5" />
                <span>Carousel</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors",
                  viewMode === "grid"
                    ? "bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 border border-emerald-500/40 shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid Gallery</span>
              </button>
            </div>
          </div>
        )}

        {/* 1. CAROUSEL VIEW */}
        {viewMode === "carousel" && (
          <div className="relative max-w-5xl mx-auto px-2 sm:px-12">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <button
                onClick={() => api?.scrollPrev()}
                aria-label="Önceki Ekran"
                className="slider-arrow-btn absolute -left-2 sm:-left-6 md:-left-10 lg:-left-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center shadow-xl backdrop-blur-md hover:scale-110 active:scale-95 transition-all"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={() => api?.scrollNext()}
                aria-label="Sonraki Ekran"
                className="slider-arrow-btn absolute -right-2 sm:-right-6 md:-right-10 lg:-right-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center shadow-xl backdrop-blur-md hover:scale-110 active:scale-95 transition-all"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <CarouselContent className="-ml-4 py-6">
                {filteredScreens.map((shot, idx) => {
                  const isTablet = shot.device === "tablet";
                  return (
                    <CarouselItem
                      key={shot.id}
                      className={cn(
                        "pl-4 flex justify-center",
                        isTablet
                          ? "basis-full sm:basis-1/2 md:basis-[45%]"
                          : "basis-full sm:basis-1/2 md:basis-1/3"
                      )}
                    >
                      <div
                        onClick={() => setLightboxIndex(idx)}
                        className={cn(
                          "group relative cursor-pointer flex flex-col items-center w-full",
                          isTablet ? "max-w-[340px]" : "max-w-[280px]"
                        )}
                      >
                        {/* Device Frame */}
                        <div
                          className={cn(
                            "relative w-full bg-neutral-900 border-2 border-white/15 shadow-xl group-hover:border-emerald-400/50 group-hover:shadow-2xl group-hover:shadow-emerald-500/20 transition-all duration-300 group-hover:-translate-y-1 overflow-hidden",
                            isTablet
                              ? "aspect-[1488/2266] rounded-[26px] p-2"
                              : "aspect-[1242/2688] rounded-[32px] p-2.5"
                          )}
                        >
                          {/* Camera Cutout */}
                          {isTablet ? (
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 border border-white/15 rounded-full z-20" />
                          ) : (
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-20" />
                          )}

                          <div
                            className={cn(
                              "w-full h-full overflow-hidden bg-black relative",
                              isTablet ? "rounded-[20px]" : "rounded-[24px]"
                            )}
                          >
                            <img
                              src={shot.src}
                              alt={shot.alt}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />

                            {/* Hover Overlay with Zoom Icon */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-emerald-500/90 text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                                <Maximize2 className="w-5 h-5" />
                              </div>
                            </div>
                          </div>

                          {/* Device & Category Badge */}
                          <div className="absolute top-4 right-4 z-20 flex gap-1.5">
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold border backdrop-blur-md shadow-sm bg-black/60 text-white/80 border-white/20">
                              {isTablet ? "TABLET" : "PHONE"}
                            </span>
                            {shot.tag && (
                              <span
                                className={cn(
                                  "px-2 py-0.5 rounded-full text-[9px] font-bold border backdrop-blur-md shadow-sm",
                                  shot.badgeColor ||
                                    "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                                )}
                              >
                                {resolveText(shot.tag, shot.tagEn)}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Card Info Below Device */}
                        <div className="mt-3 text-center px-2 w-full">
                          <h4 className="text-foreground text-sm font-bold truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {resolveText(shot.title, shot.titleEn)}
                          </h4>
                          <p className="text-muted-foreground text-xs line-clamp-1 mt-0.5 font-medium">
                            {resolveText(shot.description, shot.descriptionEn)}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={() => api?.scrollPrev()}
                className="rounded-full border-border bg-card hover:bg-muted text-foreground w-10 h-10 shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <span className="text-foreground/80 text-xs font-mono font-bold">
                {current + 1} / {filteredScreens.length}
              </span>

              <Button
                variant="outline"
                size="icon"
                onClick={() => api?.scrollNext()}
                className="rounded-full border-border bg-card hover:bg-muted text-foreground w-10 h-10 shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}

        {/* 2. GRID GALLERY VIEW */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredScreens.map((shot, idx) => {
              const isTablet = shot.device === "tablet";
              return (
                <motion.div
                  key={shot.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative cursor-pointer p-4 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between shadow-lg"
                >
                  {/* Device Preview */}
                  <div
                    className={cn(
                      "relative w-full rounded-2xl overflow-hidden bg-black border border-white/10 mb-4 shadow-inner",
                      isTablet
                        ? "aspect-[1488/2266]"
                        : "aspect-[1242/2688]"
                    )}
                  >
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Zoom Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/90 text-white flex items-center justify-center shadow-lg">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Device Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold border backdrop-blur-md shadow-sm bg-black/60 text-white/80 border-white/20">
                        {isTablet ? "TABLET" : "PHONE"}
                      </span>
                    </div>

                    {shot.tag && (
                      <div className="absolute top-3 right-3 z-10">
                        <span
                          className={cn(
                            "px-2 py-0.5 rounded-full text-[9px] font-bold border backdrop-blur-md",
                            shot.badgeColor ||
                              "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                          )}
                        >
                          {resolveText(shot.tag, shot.tagEn)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-base group-hover:text-emerald-400 transition-colors">
                      {resolveText(shot.title, shot.titleEn)}
                    </h4>
                    <p className="text-white/60 text-xs leading-relaxed mt-1 line-clamp-2">
                      {resolveText(shot.description, shot.descriptionEn)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {lightboxIndex !== null && filteredScreens[lightboxIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev / Next Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    (lightboxIndex - 1 + filteredScreens.length) %
                      filteredScreens.length
                  );
                }}
                className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    (lightboxIndex + 1) % filteredScreens.length
                  );
                }}
                className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full flex flex-col items-center max-h-[92vh] overflow-y-auto"
              >
                {/* Responsive Mockup */}
                <div
                  className={cn(
                    "relative w-full bg-neutral-900 border-4 border-white/20 shadow-2xl overflow-hidden",
                    filteredScreens[lightboxIndex].device === "tablet"
                      ? "max-w-[540px] aspect-[1488/2266] rounded-[28px] p-2.5"
                      : "max-w-[340px] aspect-[1242/2688] rounded-[36px] p-3"
                  )}
                >
                  <div
                    className={cn(
                      "w-full h-full overflow-hidden bg-black",
                      filteredScreens[lightboxIndex].device === "tablet"
                        ? "rounded-[22px]"
                        : "rounded-[26px]"
                    )}
                  >
                    <img
                      src={filteredScreens[lightboxIndex].src}
                      alt={filteredScreens[lightboxIndex].alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="mt-4 text-center max-w-md">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-white/80 border border-white/20">
                      {filteredScreens[lightboxIndex].device === "tablet"
                        ? "TABLET"
                        : "PHONE"}
                    </span>
                    <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                      {resolveText(
                        filteredScreens[lightboxIndex].tag || "EKRAN DETAYI",
                        filteredScreens[lightboxIndex].tagEn || "SCREEN DETAIL"
                      )}
                    </span>
                  </div>
                  <h3 className="text-white text-lg font-bold">
                    {resolveText(
                      filteredScreens[lightboxIndex].title,
                      filteredScreens[lightboxIndex].titleEn
                    )}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm mt-1">
                    {resolveText(
                      filteredScreens[lightboxIndex].description,
                      filteredScreens[lightboxIndex].descriptionEn
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
