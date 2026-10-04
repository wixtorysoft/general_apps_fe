"use client";

import { Navbar } from "@/components/language-box/navbar";
import { FeaturesSection } from "@/components/language-box/features-section";
import { Footer } from "@/components/language-box/footer";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-16">
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
