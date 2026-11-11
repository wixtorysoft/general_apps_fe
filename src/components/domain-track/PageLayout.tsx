"use client";

import React from "react";
import "@/styles/domain-track.css";
import { DomainTrackThemeScope } from "./DomainTrackThemeScope";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <DomainTrackThemeScope>
      <Navbar />
      <main style={{ flex: 1, paddingTop: "80px" }}>
        {children}
      </main>
      <Footer />
    </DomainTrackThemeScope>
  );
}
