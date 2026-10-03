"use client";

import React from "react";
import "@/styles/domain-track.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dt-root">
      <Navbar />
      <main style={{ flex: 1, paddingTop: "80px" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
