"use client";

import { Navbar } from "@/components/language-box/navbar";
import { FAQSection } from "@/components/language-box/faq-section";
import { Footer } from "@/components/language-box/footer";

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-16">
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
