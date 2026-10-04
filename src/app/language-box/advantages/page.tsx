"use client";

import { Navbar } from "@/components/language-box/navbar";
import { AdvantagesSection } from "@/components/language-box/advantages-section";
import { Footer } from "@/components/language-box/footer";

export default function AdvantagesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-16">
        <AdvantagesSection />
      </main>
      <Footer />
    </div>
  );
}
