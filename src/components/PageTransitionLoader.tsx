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
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[99999] transition-all">
      {/* Top glowing progress bar */}
      <div
        className="h-[3px] w-full transition-all ease-out"
        style={{
          width: `${progress}%`,
          transitionDuration: progress === 100 ? "200ms" : "300ms",
          background: "linear-gradient(90deg, #0284c7 0%, #06b6d4 35%, #10b981 70%, #6366f1 100%)",
          boxShadow: "0 0 12px rgba(6, 182, 212, 0.8), 0 0 24px rgba(16, 185, 129, 0.4)",
        }}
      />

      {/* Floating Centered Transition Pill (Appears gracefully on longer transitions) */}
      <div
        className={`fixed top-5 left-1/2 -translate-x-1/2 transition-all duration-300 ease-out ${
          showPill ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95"
        }`}
      >
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border shadow-xl backdrop-blur-md"
          style={{
            backgroundColor: "var(--bg-glass, rgba(255, 255, 255, 0.88))",
            borderColor: "var(--border-active, rgba(2, 132, 199, 0.35))",
            color: "var(--text-main, #0c2340)",
          }}
        >
          <div className="relative w-4 h-4 flex items-center justify-center">
            <Loader2 className="w-4 h-4 text-sky-500 animate-spin" />
            <Sparkles className="w-2.5 h-2.5 text-emerald-400 absolute" />
          </div>
          <span className="text-xs font-bold tracking-wide">
            Wixtory Yükleniyor...
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping ml-0.5" />
        </div>
      </div>
    </div>
  );
}

