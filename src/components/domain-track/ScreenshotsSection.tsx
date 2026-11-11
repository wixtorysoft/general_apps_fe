"use client";

import React, { useCallback, useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Smartphone,
  Tablet,
  Layers,
} from "lucide-react";
import { screenshotData, ScreenshotItem } from "@/data/domain-track-translations";
import { useDomainTrackLanguageStore } from "@/store/domain-track-language-store";

function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="dt-phone-mockup">
      {/* Screen container */}
      <div className="dt-phone-screen">{children}</div>

      {/* Home bar indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "110px",
          height: "4px",
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          borderRadius: "9999px",
          zIndex: 20,
        }}
      />
    </div>
  );
}

function TabletMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="dt-tablet-mockup">
      {/* Screen container */}
      <div className="dt-tablet-screen">{children}</div>

      {/* Home bar indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "8px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "140px",
          height: "4px",
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          borderRadius: "9999px",
          zIndex: 20,
        }}
      />
    </div>
  );
}

function ThumbnailCard({
  item,
  index,
  total,
  onClick,
  isPrev,
}: {
  item: ScreenshotItem;
  index: number;
  total: number;
  onClick: () => void;
  isPrev?: boolean;
}) {
  const isTablet = item.device === "tablet";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        flexShrink: 0,
      }}
      className="dt-thumbnail-wrapper"
    >
      <button
        onClick={onClick}
        style={{
          position: "relative",
          borderRadius: "18px",
          padding: "5px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          cursor: "pointer",
          overflow: "hidden",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(192, 132, 252, 0.5)";
          e.currentTarget.style.transform = "scale(1.04)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
          e.currentTarget.style.transform = "scale(1)";
        }}
        title={`Slide ${index + 1}: ${item.title}`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          width={isTablet ? 110 : 96}
          height={isTablet ? 146 : 170}
          style={{
            width: isTablet ? "105px" : "96px",
            aspectRatio: isTablet ? "3/4" : "9/16",
            objectFit: "cover",
            borderRadius: "14px",
            display: "block",
            backgroundColor: "#000",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.35)",
            opacity: 0,
            transition: "opacity 0.2s ease",
          }}
          className="thumbnail-overlay"
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "rgba(0, 0, 0, 0.75)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#c084fc",
            }}
          >
            {isPrev ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </div>
        </div>
      </button>

      <span
        style={{
          fontSize: "11px",
          color: "var(--dt-text-muted)",
          fontFamily: "monospace",
        }}
      >
        {index + 1}/{total}
      </span>

      <style jsx>{`
        button:hover .thumbnail-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}

export function ScreenshotsSection() {
  const { t, language } = useDomainTrackLanguageStore();
  const [deviceFilter, setDeviceFilter] = useState<"all" | "phone" | "tablet">("all");
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filtered screenshot dataset
  const filteredScreens = useMemo(() => {
    if (deviceFilter === "all") return screenshotData;
    return screenshotData.filter((s) => s.device === deviceFilter);
  }, [deviceFilter]);

  const total = filteredScreens.length;

  // Reset current slide when filter changes
  useEffect(() => {
    setCurrent(0);
  }, [deviceFilter]);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  // Auto-play timer in carousel mode
  useEffect(() => {
    if (isHovered || lightboxIndex !== null) return;
    const interval = setInterval(next, 4500);
    return () => clearInterval(interval);
  }, [isHovered, next, lightboxIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredScreens.length) % filteredScreens.length : null
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredScreens.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredScreens.length]);

  const prevIndex = (current - 1 + total) % total;
  const nextIndex = (current + 1) % total;
  const activeItem = filteredScreens[current] || filteredScreens[0];

  // Device Counts
  const phoneCount = useMemo(
    () => screenshotData.filter((s) => s.device === "phone").length,
    []
  );
  const tabletCount = useMemo(
    () => screenshotData.filter((s) => s.device === "tablet").length,
    []
  );

  return (
    <section className="dt-section dt-section-alt1" id="screenshots">
      <div className="dt-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "36px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "9999px",
              background: "rgba(192, 132, 252, 0.12)",
              border: "1px solid rgba(192, 132, 252, 0.3)",
              marginBottom: "16px",
            }}
          >
            <Smartphone size={14} color="#c084fc" />
            <span
              style={{
                fontSize: "12.5px",
                fontWeight: 700,
                color: "#c084fc",
                letterSpacing: "0.04em",
              }}
            >
              1-MAIN & 4K APP SHOWCASE
            </span>
          </div>

          <h2
            className="dt-gradient-purple-pink"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "12px",
            }}
          >
            {t.section_screenshots}
          </h2>
        </motion.div>

        {/* Filter Toolbar: Device Tabs (Centered, no grid toggle) */}
        <div className="dt-toolbar">
          {/* Device Tabs */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", flexWrap: "wrap" }}>
            <button
              onClick={() => setDeviceFilter("all")}
              className={`dt-tab-btn ${deviceFilter === "all" ? "active" : ""}`}
            >
              <Layers size={16} />
              <span>{language === "tr" ? "Tümü" : "All Devices"}</span>
              <span className="dt-tab-count">
                {screenshotData.length}
              </span>
            </button>

            <button
              onClick={() => setDeviceFilter("phone")}
              className={`dt-tab-btn ${deviceFilter === "phone" ? "active" : ""}`}
            >
              <Smartphone size={16} />
              <span>{language === "tr" ? "Telefon" : "Phone"}</span>
              <span className="dt-tab-count">
                {phoneCount}
              </span>
            </button>

            <button
              onClick={() => setDeviceFilter("tablet")}
              className={`dt-tab-btn ${deviceFilter === "tablet" ? "active" : ""}`}
            >
              <Tablet size={16} />
              <span>{language === "tr" ? "Tablet" : "Tablet"}</span>
              <span className="dt-tab-count">
                {tabletCount}
              </span>
            </button>
          </div>
        </div>

        {/* CAROUSEL SHOWCASE */}
        <div
          style={{
            position: "relative",
            maxWidth: "1320px",
            width: "100%",
            margin: "0 auto",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "36px",
              }}
            >
              {/* Previous Thumbnail */}
              <div className="desktop-thumb">
                <ThumbnailCard
                  item={filteredScreens[prevIndex]}
                  index={prevIndex}
                  total={total}
                  onClick={prev}
                  isPrev
                />
              </div>

              {/* Central Device Mockup (Phone or Tablet) */}
              <div style={{ position: "relative" }}>
                {activeItem.device === "tablet" ? (
                  <TabletMockup>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeItem.src}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          width: "380px",
                          height: "506px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "zoom-in",
                        }}
                        onClick={() => setLightboxIndex(current)}
                      >
                        <Image
                          src={activeItem.src}
                          alt={activeItem.alt}
                          width={380}
                          height={506}
                          style={{
                            width: "380px",
                            height: "506px",
                            objectFit: "cover",
                            display: "block",
                          }}
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                  </TabletMockup>
                ) : (
                  <PhoneMockup>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeItem.src}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          width: "272px",
                          height: "572px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#000000",
                          cursor: "zoom-in",
                        }}
                        onClick={() => setLightboxIndex(current)}
                      >
                        <Image
                          src={activeItem.src}
                          alt={activeItem.alt}
                          width={272}
                          height={572}
                          style={{
                            width: "272px",
                            height: "572px",
                            objectFit: "cover",
                            display: "block",
                          }}
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                  </PhoneMockup>
                )}

                {/* Quick Zoom Hint Overlay */}
                <button
                  onClick={() => setLightboxIndex(current)}
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(0, 0, 0, 0.65)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(8px)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    zIndex: 25,
                    transition: "all 0.2s ease",
                  }}
                  title="Tam Ekran Büyüt"
                >
                  <Maximize2 size={16} />
                </button>
              </div>

              {/* Next Thumbnail */}
              <div className="desktop-thumb">
                <ThumbnailCard
                  item={filteredScreens[nextIndex]}
                  index={nextIndex}
                  total={total}
                  onClick={next}
                />
              </div>
            </div>

            {/* Slide Title and Caption */}
            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <div className="dt-carousel-caption">
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: activeItem.device === "tablet" ? "#0284c7" : "#7c3aed",
                  }}
                >
                  {activeItem.device === "tablet" ? "Tablet HD" : "Phone HD"}
                </span>
                <span style={{ opacity: 0.3 }}>•</span>
                <span style={{ fontSize: "13.5px", fontWeight: 600 }}>
                  {activeItem.title}
                </span>
              </div>
            </div>

            {/* Quick Arrow Buttons */}
            <button
              onClick={prev}
              className="dt-carousel-arrow"
              style={{ left: "8px" }}
              aria-label="Previous slide"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={next}
              className="dt-carousel-arrow"
              style={{ right: "8px" }}
              aria-label="Next slide"
            >
              <ChevronRight size={22} />
            </button>

            {/* Pagination Dots */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                marginTop: "24px",
              }}
            >
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", maxWidth: "450px" }}>
                {filteredScreens.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx)}
                    style={{
                      width: idx === current ? "22px" : "8px",
                      height: "8px",
                      borderRadius: "9999px",
                      backgroundColor:
                        idx === current ? "#7c3aed" : "var(--dt-subtle-box-border, rgba(148, 163, 184, 0.4))",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <span
                style={{
                  fontSize: "12px",
                  color: "var(--dt-text-muted)",
                  fontFamily: "monospace",
                  marginLeft: "8px",
                }}
              >
                {current + 1} {t.screenshot_of} {total}
              </span>
            </div>
          </div>

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="dt-lightbox-backdrop"
              onClick={() => setLightboxIndex(null)}
            >
              <div
                style={{
                  position: "relative",
                  maxWidth: "92vw",
                  maxHeight: "92vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setLightboxIndex(null)}
                  style={{
                    position: "absolute",
                    top: "-48px",
                    right: "0",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.12)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  title="Kapat (Esc)"
                >
                  <X size={20} />
                </button>

                {/* Left Arrow */}
                <button
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex - 1 + filteredScreens.length) % filteredScreens.length
                    )
                  }
                  style={{
                    position: "absolute",
                    left: "-56px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.12)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  title="Önceki (←)"
                >
                  <ChevronLeft size={22} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() =>
                    setLightboxIndex((lightboxIndex + 1) % filteredScreens.length)
                  }
                  style={{
                    position: "absolute",
                    right: "-56px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.12)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  title="Sonraki (→)"
                >
                  <ChevronRight size={22} />
                </button>

                {/* Lightbox Image Container */}
                <div
                  style={{
                    position: "relative",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 25px 70px rgba(0, 0, 0, 0.85)",
                    background: "#000",
                  }}
                >
                  <Image
                    src={filteredScreens[lightboxIndex].src}
                    alt={filteredScreens[lightboxIndex].alt}
                    width={filteredScreens[lightboxIndex].device === "tablet" ? 900 : 420}
                    height={filteredScreens[lightboxIndex].device === "tablet" ? 620 : 860}
                    style={{
                      maxHeight: "80vh",
                      width: "auto",
                      objectFit: "contain",
                      display: "block",
                    }}
                    priority
                  />
                </div>

                {/* Lightbox Caption */}
                <div
                  style={{
                    marginTop: "16px",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "11px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      background:
                        filteredScreens[lightboxIndex].device === "tablet"
                          ? "#06b6d4"
                          : "#c084fc",
                      color: "#fff",
                    }}
                  >
                    {filteredScreens[lightboxIndex].device}
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "#fff" }}>
                    {filteredScreens[lightboxIndex].title}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "rgba(255, 255, 255, 0.5)",
                      fontFamily: "monospace",
                    }}
                  >
                    ({lightboxIndex + 1} / {filteredScreens.length})
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          .desktop-thumb {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
