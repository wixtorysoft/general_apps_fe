import React from "react";

export default function RootLoading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--bg-primary, #f0f7ff)",
        color: "var(--text-main, #0c2340)",
      }}
    >
      {/* Background Soft Glow */}
      <div
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, var(--primary-glow, rgba(2, 132, 199, 0.2)) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      {/* Modern Frosted Glass Loading Card */}
      <div
        className="glass-card"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "36px 32px",
          borderRadius: "24px",
          maxWidth: "360px",
          width: "calc(100% - 32px)",
          textAlign: "center",
          boxShadow: "var(--shadow-card)",
        }}
      >
        {/* Animated Double-Ring Spinner */}
        <div
          style={{
            position: "relative",
            width: "60px",
            height: "60px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "3.5px solid var(--border-subtle, rgba(2, 132, 199, 0.2))",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "3.5px solid transparent",
              borderTopColor: "var(--primary, #0284c7)",
              borderRightColor: "var(--secondary, #06b6d4)",
              animation: "spinSlow 1.2s linear infinite",
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, var(--primary, #0284c7) 0%, var(--secondary, #06b6d4) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "14px",
              boxShadow: "0 4px 12px var(--primary-glow)",
            }}
          >
            W
          </div>
        </div>

        {/* Text Details */}
        <h3
          style={{
            fontSize: "17px",
            fontWeight: 800,
            letterSpacing: "-0.01em",
            marginBottom: "6px",
            color: "var(--text-main, #0c2340)",
          }}
        >
          Wixtory Ekosistemi
        </h3>
        <p
          style={{
            fontSize: "13px",
            fontWeight: 500,
            opacity: 0.7,
            marginBottom: "20px",
            color: "var(--text-secondary, #33557a)",
          }}
        >
          Sayfa ve bileşenler hazırlanıyor...
        </p>

        {/* Shimmering Progress Bar */}
        <div
          style={{
            width: "100%",
            height: "4px",
            backgroundColor: "rgba(2, 132, 199, 0.1)",
            borderRadius: "9999px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "50%",
              background: "linear-gradient(90deg, var(--primary, #0284c7) 0%, var(--secondary, #06b6d4) 100%)",
              borderRadius: "9999px",
              animation: "shimmer 1.4s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}
