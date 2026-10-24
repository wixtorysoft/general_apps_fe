"use client";

import { Navbar } from "@/components/language-box/navbar";
import { ContactSection } from "@/components/language-box/developer-section";
import { Footer } from "@/components/language-box/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-16">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
