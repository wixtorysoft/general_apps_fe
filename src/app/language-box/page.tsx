"use client";

import { Navbar } from "@/components/language-box/navbar";
import { HeroSection } from "@/components/language-box/hero-section";
import { VideoShowcaseSection } from "@/components/language-box/video-showcase-section";
import { ScreenshotsSection } from "@/components/language-box/screenshots-section";
import { GamesSection } from "@/components/language-box/games-section";
import { ComingSoonSection } from "@/components/language-box/coming-soon-section";
import { FeaturesSection } from "@/components/language-box/features-section";
import { AdvantagesSection } from "@/components/language-box/advantages-section";
import { FAQSection } from "@/components/language-box/faq-section";
import { Footer } from "@/components/language-box/footer";

export default function LanguageBoxHomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <VideoShowcaseSection />
        <ScreenshotsSection showViewToggle={false} initialViewMode="carousel" />
        <GamesSection />
        <ComingSoonSection />
        <FeaturesSection />
        <AdvantagesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
