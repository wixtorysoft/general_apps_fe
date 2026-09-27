import React from "react";
import { Metadata } from "next";
import { APPS_DETAILED_DATA } from "@/data/apps-detail-data";
import { AppDetailNav } from "@/components/app-detail/AppDetailNav";
import { AppDetailHero } from "@/components/app-detail/AppDetailHero";
import { AboutSection } from "@/components/app-detail/AboutSection";
import { FeaturesSection } from "@/components/app-detail/FeaturesSection";
import { KeyFeaturesSection } from "@/components/app-detail/KeyFeaturesSection";
import { HowToUseSection } from "@/components/app-detail/HowToUseSection";
import { WhyChooseSection } from "@/components/app-detail/WhyChooseSection";
import { FAQSection } from "@/components/app-detail/FAQSection";
import { FinalCallToAction } from "@/components/app-detail/FinalCallToAction";
import { AppDetailFooter } from "@/components/app-detail/AppDetailFooter";

export const metadata: Metadata = {
  title: "Excuse AI — Yapay Zeka Destekli Hayat Kurtaran Mazeret & Senaryo Üretici",
  description:
    "Toplantılardan, uzayan buluşmalardan veya acil durumlardan sıyrılmak için gerçekçi, kanıtlı ve akıllı mazeretler üreten yapay zeka asistanı.",
  keywords: [
    "Excuse AI",
    "Mazeret Üretici",
    "Yapay Zeka Mazeret",
    "Sahte Çağrı",
    "Gecikme Bahanesi",
    "Kurumsal Mazeret",
    "AI Asistan",
  ],
  openGraph: {
    title: "Excuse AI — Hayat Kurtaran Mazeret Asistanınız",
    description:
      "Trafik, teknik arıza, sağlık ve kurumsal senaryolar için sesli ve görsel kanıt simülasyonlu mazeret üretici.",
    type: "website",
  },
};

export default function ExcusePage() {
  const app = APPS_DETAILED_DATA.excuse;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        position: "relative",
        overflowX: "clip",
      }}
    >
      {/* 1. Sticky Header & Navigation */}
      <AppDetailNav app={app} />

      {/* 1.1 Hero Section with 3D Phone Mockup */}
      <AppDetailHero app={app} />

      {/* 1.2 About Section (Story, Vision, Mission & Tech Architecture) */}
      <AboutSection app={app} />

      {/* 2. Features (Core Architectural Pillars - 3-Column Grid) */}
      <FeaturesSection app={app} />

      {/* 3. Key Features (Deep Dive & Interactive Previews - Alternating Z-Pattern) */}
      <KeyFeaturesSection app={app} />

      {/* 4. How to Use (Step-by-Step Onboarding Workflow - Timeline / Stepper) */}
      <HowToUseSection app={app} />

      {/* 5. Why Choose ? (Value Matrix & Competitive Edge) */}
      <WhyChooseSection app={app} />

      {/* 6. FAQ (Frequently Asked Questions - Accordion) */}
      <FAQSection app={app} />

      {/* 7. Final Call to Action */}
      <FinalCallToAction app={app} />

      {/* Footer */}
      <AppDetailFooter app={app} />
    </main>
  );
}
