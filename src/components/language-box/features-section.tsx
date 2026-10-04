"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { features } from "@/data";

export function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="features"
      className="py-20 relative section-hover scroll-mt-24"
      style={{ background: "var(--section-features)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
            {t("section_features")}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            {t("section_features_desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="card-modern rounded-2xl"
                  style={{
                    background: "var(--card-features)",
                    "--hover-accent": feature.hoverAccent,
                  } as React.CSSProperties}
                >
                  <CardContent className="p-6 flex gap-5">
                    <div
                      className={`w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {t(feature.titleKey)}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {t(feature.descKey)}
                      </p>
                    </div>
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
