"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Loader2, Sparkles } from "lucide-react";

export function PageTransitionLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [showPill, setShowPill] = useState(false);
  const [progress, setProgress] = useState(0);

  const prevPathRef = useRef(pathname);
  const pillTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startLoading = () => {
    setIsLoading(true);
    setProgress(15);

    // Increment progress in gentle steps
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 85) {
          if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
          return 85;
        }
        return prev + Math.floor(Math.random() * 12 + 6);
      });
    }, 120);

    // Show floating pill only if transition takes longer than 150ms
    if (pillTimerRef.current) clearTimeout(pillTimerRef.current);
    pillTimerRef.current = setTimeout(() => {
      setShowPill(true);
    }, 150);
  };

  const finishLoading = () => {
    setProgress(100);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    if (pillTimerRef.current) clearTimeout(pillTimerRef.current);

    setTimeout(() => {
      setIsLoading(false);
      setShowPill(false);
      setProgress(0);
    }, 280);
  };

  // Complete loading when pathname or searchParams change
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      finishLoading();
    }
  }, [pathname, searchParams]);

  // Intercept internal link clicks
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;

      if (!anchor) return;
      const href = anchor.getAttribute("href");

      // Check if it's an internal route navigation (starts with /, not an anchor on same page, not external, not download/target blank)
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("/#") &&
        !href.includes("#") &&
        anchor.target !== "_blank" &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey &&
        !e.altKey &&
        href !== pathname
      ) {
        startLoading();
      }
    };

    const handlePopState = () => {
      startLoading();
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleDocumentClick, { capture: true });
      window.removeEventListener("popstate", handlePopState);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (pillTimerRef.current) clearTimeout(pillTimerRef.current);
    };
  }, [pathname]);

  if (!isLoading && progress === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        pointerEvents: "none",
        width: "100%",
      }}
    >
      {/* Top glowing progress bar */}
      <div
        style={{
          height: "3.5px",
          width: `${progress}%`,
          transition: progress === 100 ? "width 200ms ease-out" : "width 300ms ease-out",
          background: "linear-gradient(90deg, #0284c7 0%, #06b6d4 35%, #10b981 70%, #6366f1 100%)",
          boxShadow: "0 0 14px rgba(6, 182, 212, 0.85), 0 0 24px rgba(16, 185, 129, 0.5)",
        }}
      />

      {/* Floating Centered Transition Pill */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: showPill ? "translateX(-50%) translateY(0) scale(1)" : "translateX(-50%) translateY(-12px) scale(0.95)",
          opacity: showPill ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 99999,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 18px",
            borderRadius: "9999px",
            border: "1px solid var(--border-active, rgba(2, 132, 199, 0.4))",
            backgroundColor: "var(--bg-glass, rgba(255, 255, 255, 0.92))",
            color: "var(--text-main, #0c2340)",
            boxShadow: "0 12px 36px -6px var(--primary-glow, rgba(2, 132, 199, 0.35))",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "16px",
              height: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Loader2
              size={16}
              style={{
                color: "var(--primary, #0284c7)",
                animation: "spinSlow 1.5s linear infinite",
              }}
            />
            <Sparkles
              size={10}
              style={{
                color: "var(--secondary, #06b6d4)",
                position: "absolute",
              }}
            />
          </div>
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.03em" }}>
            Wixtory Yükleniyor...
          </span>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "var(--primary, #0284c7)",
              boxShadow: "0 0 8px var(--primary, #0284c7)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
