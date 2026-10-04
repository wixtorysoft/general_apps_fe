"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { advantages } from "@/data";

export function AdvantagesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="advantages"
      className="py-20 relative section-hover scroll-mt-24"
      style={{ background: "var(--section-advantages)" }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
            {t("section_advantages")}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            {t("section_advantages_desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="card-modern rounded-2xl h-full"
                  style={{
                    background: "var(--card-advantages)",
                    "--hover-accent": adv.hoverAccent,
                  } as React.CSSProperties}
                >
                  <CardContent className="p-6 text-center flex flex-col items-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${adv.gradient} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {t(adv.titleKey)}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed flex-grow">
                      {t(adv.descKey)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
