"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { faqs } from "@/data";

export function FAQSection() {
  const { t } = useLanguage();

  return (
    <section
      id="faq"
      className="py-20 relative section-hover"
      style={{ background: "var(--section-faq)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
            {t("section_faq")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.qKey}
                value={`faq-${index}`}
                className="card-modern rounded-xl px-6 data-[state=open]:border-emerald-400/20 transition-all duration-300"
                style={{
                  background: "var(--card-faq)",
                  "--hover-accent": "rgba(16, 185, 129, 0.12)",
                } as React.CSSProperties}
              >
                <AccordionTrigger className="text-white font-semibold hover:text-emerald-400 hover:no-underline py-5 text-left">
                  {t(faq.qKey)}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 leading-relaxed pb-5">
                  {t(faq.aKey)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
