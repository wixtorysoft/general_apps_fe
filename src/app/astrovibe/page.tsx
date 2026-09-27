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
  title: "AstroVibe — Kozmik Astroloji, 3D Tarot & Protez Tırnak Stil Rehberi",
  description:
    "Astrolojiyi salt metin yorumlarından çıkarıp editoryal bir stil ve yaşam tarzı deneyimine dönüştürün. Burcunuza özel tırnak tasarımları, 3D tarot açılımları ve günlük burç yorumları.",
  keywords: [
    "AstroVibe",
    "Astroloji",
    "Burç Yorumları",
    "Tarot Açılımı",
    "Protez Tırnak",
    "Nail Art",
    "Zodyak Stili",
    "Doğal Taşlar",
  ],
  openGraph: {
    title: "AstroVibe — Kozmik Astroloji & Stil Rehberi",
    description:
      "Burcunuza özel protez tırnak stilleri, 3D tarot açılımları ve günlük burç analizleri tek bir uygulamada.",
    type: "website",
  },
};

export default function AstroVibePage() {
  const app = APPS_DETAILED_DATA.astrovibe;

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
