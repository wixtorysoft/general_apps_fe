"use client";

import React from "react";

interface ThemeLogoProps {
  height?: number;
  width?: number;
  size?: number; // legacy fallback
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}

/**
 * ThemeLogo displays the official Wixtory brand logo:
 * - /general/logo1.png in Dark Mode (midnight-dark)
 * - /general/logo2.png in Light Mode (sky-breeze)
 *
 * Natural image aspect ratio is 900x284 (~3.17:1).
 * Displays unclipped with natural width.
 */
export function ThemeLogo({
  height = 34,
  width,
  size,
  className = "",
  style = {},
  alt = "Wixtory Logo",
}: ThemeLogoProps) {
  const h = height || size || 34;
  const w = width || Math.round(h * (900 / 284));

  return (
    <div
      className={`theme-logo-container ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        lineHeight: 1,
        flexShrink: 0,
        ...style,
      }}
    >
      <div
        className="theme-logo-wrapper"
        style={{
          position: "relative",
          height: `${h}px`,
          width: `${w}px`,
          display: "inline-flex",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        {/* Light Theme Logo: logo2.png (900x284) */}
        <img
          src="/general/logo2.png"
          alt={alt}
          width={w}
          height={h}
          className="theme-logo-img theme-logo-light"
          style={{
            height: `${h}px`,
            width: "auto",
            maxWidth: "none",
            objectFit: "contain",
            display: "block",
          }}
        />

        {/* Dark Theme Logo: logo1.png (900x284) */}
        <img
          src="/general/logo1.png"
          alt={alt}
          width={w}
          height={h}
          className="theme-logo-img theme-logo-dark"
          style={{
            height: `${h}px`,
            width: "auto",
            maxWidth: "none",
            objectFit: "contain",
            display: "none",
          }}
        />
      </div>
    </div>
  );
}
