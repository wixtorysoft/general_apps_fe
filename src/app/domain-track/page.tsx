"use client";

import React from "react";
import "@/styles/domain-track.css";
import { Navbar } from "@/components/domain-track/Navbar";
import { HeroSection } from "@/components/domain-track/HeroSection";
import { ScreenshotsSection } from "@/components/domain-track/ScreenshotsSection";
import { FeaturesSection } from "@/components/domain-track/FeaturesSection";
import { HelpSection } from "@/components/domain-track/HelpSection";
import { BenefitsSection } from "@/components/domain-track/BenefitsSection";
import { FAQSection } from "@/components/domain-track/FAQSection";
import { DeveloperSection } from "@/components/domain-track/DeveloperSection";
import { Footer } from "@/components/domain-track/Footer";

export default function DomainTrackHomePage() {
  return (
    <div className="dt-root">
      <Navbar />
      <main style={{ flex: 1 }}>
        <HeroSection />
        <ScreenshotsSection />
        <FeaturesSection />
        <HelpSection />
        <BenefitsSection />
        <FAQSection />
        <DeveloperSection />
      </main>
      <Footer />
    </div>
  );
}
