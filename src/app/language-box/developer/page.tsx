"use client";

import { Navbar } from "@/components/language-box/navbar";
import { DeveloperSection } from "@/components/language-box/developer-section";
import { Footer } from "@/components/language-box/footer";

export default function DeveloperPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-16">
        <DeveloperSection />
      </main>
      <Footer />
    </div>
  );
}
