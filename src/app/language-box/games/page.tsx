"use client";

import { Navbar } from "@/components/language-box/navbar";
import { GamesSection } from "@/components/language-box/games-section";
import { ComingSoonSection } from "@/components/language-box/coming-soon-section";
import { Footer } from "@/components/language-box/footer";

export default function GamesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-16">
        <GamesSection />
        <ComingSoonSection />
      </main>
      <Footer />
    </div>
  );
}
