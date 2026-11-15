"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Clock,
  MapPin,
  Plus,
  Minus,
  Layers,
  ExternalLink,
  Navigation,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { resolveI18n } from "@/i18n";

// Coordinates for Podium AVM, Yenimahalle, Ankara, Turkey
const PODIUM_LAT = 39.9678;
const PODIUM_LNG = 32.7842;
const DEFAULT_ZOOM = 16;

// Convert lat/lng to tile coordinate at specific zoom
function latLngToTile(lat: number, lng: number, zoom: number) {
  const latRad = (lat * Math.PI) / 180;
  const n = Math.pow(2, zoom);
  const x = Math.floor(((lng + 180) / 360) * n);
  const y = Math.floor(
    ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n
  );
  return { x, y };
}

// Convert tile coordinate to lat/lng (north-west corner)
function tileToLatLng(x: number, y: number, zoom: number) {
  const n = Math.pow(2, zoom);
  const lng = (x / n) * 360 - 180;
  const latRad = Math.atan(Math.sinh(Math.PI * (1 - (2 * y) / n)));
  const lat = (latRad * 180) / Math.PI;
  return { lat, lng };
}

export function StudioLocationMap() {
  const { language } = useLanguage();
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const [isSatellite, setIsSatellite] = useState(false);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ startX: number; startY: number; initPanX: number; initPanY: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const tContact = (key: any) => resolveI18n("contact", key, language);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 1, 18));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 1, 13));

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initPanX: panOffset.x,
      initPanY: panOffset.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !dragStartRef.current) return;
    const dx = e.clientX - dragStartRef.current.startX;
    const dy = e.clientY - dragStartRef.current.startY;
    setPanOffset({
      x: dragStartRef.current.initPanX + dx,
      y: dragStartRef.current.initPanY + dy,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    dragStartRef.current = null;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      dragStartRef.current = {
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY,
        initPanX: panOffset.x,
        initPanY: panOffset.y,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !dragStartRef.current || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - dragStartRef.current.startX;
    const dy = e.touches[0].clientY - dragStartRef.current.startY;
    setPanOffset({
      x: dragStartRef.current.initPanX + dx,
      y: dragStartRef.current.initPanY + dy,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    dragStartRef.current = null;
  };

  // Calculate center tile coordinates
  const centerTile = latLngToTile(PODIUM_LAT, PODIUM_LNG, zoom);

  // Generate 5x5 tile grid around center
  const tileRange = [-2, -1, 0, 1, 2];
  const maxTile = Math.pow(2, zoom);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${PODIUM_LAT},${PODIUM_LNG}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${PODIUM_LAT},${PODIUM_LNG}`;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1060px",
        margin: "0 auto",
      }}
    >
      {/* Studio Header Label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "16px",
          padding: "0 4px",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            backgroundColor: "rgba(16, 185, 129, 0.12)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#10b981",
            flexShrink: 0,
          }}
        >
          <MapPin size={18} />
        </div>
        <div>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: 800,
              color: "var(--text-main)",
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            {tContact("map_heading")}
          </h2>
          <p
            style={{
              fontSize: "13px",
              color: "var(--text-secondary)",
              margin: "2px 0 0 0",
            }}
          >
            {tContact("map_address")}
          </p>
        </div>
      </div>

      {/* Map Container Card */}
      <div
        className="glass-card"
        style={{
          borderRadius: "24px",
          overflow: "hidden",
          border: "1px solid var(--border-subtle)",
          boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.08)",
          background: "var(--bg-card)",
          position: "relative",
        }}
      >
        {/* Top Info Chips Bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "12px",
            padding: "16px 20px",
            background: "var(--bg-card)",
            borderBottom: "1px solid var(--border-subtle)",
            zIndex: 10,
            position: "relative",
          }}
        >
          {/* Working Hours Chip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 16px",
              borderRadius: "14px",
              background: "rgba(16, 185, 129, 0.06)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(16, 185, 129, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#10b981",
                flexShrink: 0,
              }}
            >
              <Clock size={16} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "#10b981",
                }}
              >
                {tContact("hours_label")}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--text-main)",
                  marginTop: "1px",
                }}
              >
                {tContact("hours_value")}
              </div>
            </div>
          </div>

          {/* Region & Address Chip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 16px",
              borderRadius: "14px",
              background: "rgba(16, 185, 129, 0.06)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(16, 185, 129, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#10b981",
                flexShrink: 0,
              }}
            >
              <MapPin size={16} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "#10b981",
                }}
              >
                {tContact("region_label")}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--text-main)",
                  marginTop: "1px",
                }}
              >
                {tContact("region_value")}
              </div>
            </div>
          </div>
        </div>

        {/* Map View Canvas Area */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            position: "relative",
            width: "100%",
            height: "440px",
            backgroundColor: isSatellite ? "#0a1128" : "#f1ede6",
            overflow: "hidden",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
          }}
        >
          {/* Dynamic Tiles Grid Container */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(calc(-50% + ${panOffset.x}px), calc(-50% + ${panOffset.y}px))`,
              width: "1280px",
              height: "1280px",
              display: "grid",
              gridTemplateColumns: "repeat(5, 256px)",
              gridTemplateRows: "repeat(5, 256px)",
              pointerEvents: "none",
            }}
          >
            {tileRange.map((dy) =>
              tileRange.map((dx) => {
                const tx = (centerTile.x + dx + maxTile) % maxTile;
                const ty = (centerTile.y + dy + maxTile) % maxTile;
                const tileUrl = isSatellite
                  ? `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${zoom}/${ty}/${tx}`
                  : `https://tile.openstreetmap.org/${zoom}/${tx}/${ty}.png`;

                return (
                  <div
                    key={`${zoom}-${tx}-${ty}`}
                    style={{
                      width: "256px",
                      height: "256px",
                      backgroundImage: `url(${tileUrl})`,
                      backgroundSize: "256px 256px",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                );
              })
            )}
          </div>

          {/* Glowing Green Circle Radius Overlay around Podium AVM */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(calc(-50% + ${panOffset.x}px), calc(-50% + ${panOffset.y}px))`,
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              backgroundColor: "rgba(16, 185, 129, 0.18)",
              border: "2px solid rgba(16, 185, 129, 0.6)",
              pointerEvents: "none",
              boxShadow: "0 0 30px rgba(16, 185, 129, 0.25)",
            }}
          />

          {/* Central Location Pin Marker */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(calc(-50% + ${panOffset.x}px), calc(-100% + ${panOffset.y}px))`,
              pointerEvents: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 5,
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50% 50% 50% 0",
                transform: "rotate(-45deg)",
                background: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
                border: "2px solid #ffffff",
              }}
            >
              <div
                style={{
                  transform: "rotate(45deg)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MapPin size={18} fill="#ffffff" />
              </div>
            </div>
            {/* Marker Shadow */}
            <div
              style={{
                width: "12px",
                height: "4px",
                borderRadius: "50%",
                background: "rgba(0,0,0,0.3)",
                marginTop: "2px",
              }}
            />
          </div>

          {/* Left Zoom Controls (+ / -) */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
              border: "1px solid var(--border-subtle)",
              background: "var(--bg-card)",
              zIndex: 10,
            }}
          >
            <button
              onClick={handleZoomIn}
              aria-label="Zoom In"
              style={{
                width: "34px",
                height: "34px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid var(--border-subtle)",
                color: "var(--text-main)",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-glass)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <Plus size={16} />
            </button>
            <button
              onClick={handleZoomOut}
              aria-label="Zoom Out"
              style={{
                width: "34px",
                height: "34px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "none",
                color: "var(--text-main)",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-glass)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <Minus size={16} />
            </button>
          </div>

          {/* Right Satellite / Map Toggle Button */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              zIndex: 10,
            }}
          >
            <button
              onClick={() => setIsSatellite(!isSatellite)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                borderRadius: "10px",
                background: isSatellite ? "#10b981" : "var(--bg-card)",
                color: isSatellite ? "#ffffff" : "var(--text-main)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                fontSize: "12px",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <span>{isSatellite ? "🗺 Harita" : "🗺 Uydu"}</span>
            </button>
          </div>

          {/* Bottom Right Map Attribution */}
          <div
            style={{
              position: "absolute",
              bottom: "4px",
              right: "8px",
              fontSize: "10px",
              color: isSatellite ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)",
              background: isSatellite ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.85)",
              padding: "2px 8px",
              borderRadius: "4px",
              pointerEvents: "none",
              zIndex: 10,
            }}
          >
            Leaflet | © OpenStreetMap contributors
          </div>
        </div>

        {/* Action Link Footer under Map */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "12px",
            padding: "14px 20px",
            background: "var(--bg-card)",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12.5px",
              fontWeight: 700,
              color: "var(--text-secondary)",
              textDecoration: "none",
              padding: "6px 12px",
              borderRadius: "8px",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#10b981";
              e.currentTarget.style.backgroundColor = "rgba(16, 185, 129, 0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <span>{tContact("open_maps")}</span>
            <ExternalLink size={13} />
          </a>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12.5px",
              fontWeight: 700,
              color: "#10b981",
              textDecoration: "none",
              padding: "6px 14px",
              borderRadius: "8px",
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#10b981";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(16, 185, 129, 0.1)";
              e.currentTarget.style.color = "#10b981";
            }}
          >
            <Navigation size={13} />
            <span>{tContact("directions")}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

