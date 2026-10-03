"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { screenshotData } from "@/data/domain-track-translations";
import { useDomainTrackLanguageStore } from "@/store/domain-track-language-store";

function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="dt-phone-mockup">
      {/* Notch */}
      <div className="dt-phone-notch" />

      {/* Screen container */}
      <div className="dt-phone-screen">
        {children}
      </div>

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

function ThumbnailCard({
  src,
  alt,
  index,
  total,
  onClick,
  isPrev,
}: {
  src: string;
  alt: string;
  index: number;
  total: number;
  onClick: () => void;
  isPrev?: boolean;
}) {
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
          e.currentTarget.style.borderColor = "rgba(192, 132, 252, 0.4)";
          e.currentTarget.style.transform = "scale(1.04)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
          e.currentTarget.style.transform = "scale(1)";
        }}
        title={`Slide ${index + 1}: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={112}
          height={200}
          style={{
            width: "96px",
            aspectRatio: "9/16",
            objectFit: "contain",
            borderRadius: "14px",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.3)",
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
              background: "rgba(0, 0, 0, 0.7)",
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

      <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.35)", fontFamily: "monospace" }}>
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
  const { t } = useDomainTrackLanguageStore();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = screenshotData.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  // Auto-play timer (4 seconds)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isHovered, next]);

  const prevIndex = (current - 1 + total) % total;
  const nextIndex = (current + 1) % total;

  return (
    <section className="dt-section dt-section-alt1" id="screenshots">
      <div className="dt-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <h2
            className="dt-gradient-purple-pink"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            {t.section_screenshots}
          </h2>
        </motion.div>

        {/* Carousel Showcase */}
        <div
          style={{
            position: "relative",
            maxWidth: "960px",
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
                src={screenshotData[prevIndex].src}
                alt={screenshotData[prevIndex].alt}
                index={prevIndex}
                total={total}
                onClick={prev}
                isPrev
              />
            </div>

            {/* Central Phone Mockup Frame */}
            <PhoneMockup>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: "272px",
                    height: "572px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#000000",
                  }}
                >
                  <Image
                    src={screenshotData[current].src}
                    alt={screenshotData[current].alt}
                    width={272}
                    height={572}
                    style={{
                      width: "272px",
                      height: "572px",
                      objectFit: "contain",
                    }}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </PhoneMockup>

            {/* Next Thumbnail */}
            <div className="desktop-thumb">
              <ThumbnailCard
                src={screenshotData[nextIndex].src}
                alt={screenshotData[nextIndex].alt}
                index={nextIndex}
                total={total}
                onClick={next}
              />
            </div>
          </div>

          {/* Quick arrow buttons */}
          <button
            onClick={prev}
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              backgroundColor: "rgba(0, 0, 0, 0.65)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              transition: "all 0.2s ease",
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              backgroundColor: "rgba(0, 0, 0, 0.65)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              transition: "all 0.2s ease",
            }}
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginTop: "36px",
          }}
        >
          <div style={{ display: "flex", gap: "6px" }}>
            {screenshotData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                style={{
                  width: idx === current ? "22px" : "8px",
                  height: "8px",
                  borderRadius: "9999px",
                  backgroundColor: idx === current ? "#c084fc" : "rgba(255, 255, 255, 0.25)",
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
              color: "rgba(255, 255, 255, 0.4)",
              fontFamily: "monospace",
              marginLeft: "8px",
            }}
          >
            {current + 1} {t.screenshot_of} {total}
          </span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-thumb {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
