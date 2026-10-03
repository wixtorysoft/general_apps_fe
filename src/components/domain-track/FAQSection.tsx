"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useDomainTrackLanguageStore } from "@/store/domain-track-language-store";

const faqItems = [
  { qKey: "faq1_q" as const, aKey: "faq1_a" as const },
  { qKey: "faq2_q" as const, aKey: "faq2_a" as const },
  { qKey: "faq3_q" as const, aKey: "faq3_a" as const },
  { qKey: "faq4_q" as const, aKey: "faq4_a" as const },
  { qKey: "faq5_q" as const, aKey: "faq5_a" as const },
  { qKey: "faq6_q" as const, aKey: "faq6_a" as const },
  { qKey: "faq7_q" as const, aKey: "faq7_a" as const },
  { qKey: "faq8_q" as const, aKey: "faq8_a" as const },
  { qKey: "faq9_q" as const, aKey: "faq9_a" as const },
  { qKey: "faq10_q" as const, aKey: "faq10_a" as const },
];

export function FAQSection() {
  const { t } = useDomainTrackLanguageStore();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="dt-section dt-section-alt1" id="faq">
      <div className="dt-container" style={{ maxWidth: "860px" }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <h2
            className="dt-gradient-purple-pink"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            {t.section_faq}
          </h2>
        </motion.div>

        {/* Accordion list */}
        <div>
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.qKey}
                className={`dt-accordion-item ${isOpen ? "open" : ""}`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="dt-accordion-trigger"
                  aria-expanded={isOpen}
                >
                  <span style={{ fontSize: "16px", fontWeight: 650, letterSpacing: "-0.01em" }}>
                    {t[item.qKey]}
                  </span>
                  <div
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      color: isOpen ? "#c084fc" : "rgba(255, 255, 255, 0.5)",
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="dt-accordion-content">
                        {t[item.aKey]}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
