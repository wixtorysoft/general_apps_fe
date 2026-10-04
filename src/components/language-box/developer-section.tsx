"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Mail, MapPin, User, Globe, ExternalLink, MessageCircle } from "lucide-react";
import { developer } from "@/data";

export function DeveloperSection() {
  const { t } = useLanguage();

  return (
    <section
      id="developer"
      className="py-20 relative section-hover scroll-mt-24"
      style={{ background: "var(--section-developer)" }}
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
            {t("section_dev")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <Card
            className="card-modern rounded-2xl"
            style={{
              background: "var(--card-developer)",
              "--hover-accent": "rgba(16, 185, 129, 0.12)",
            } as React.CSSProperties}
          >
            <CardContent className="p-8 text-center">
              <Avatar className="w-24 h-24 mx-auto mb-5">
                <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-3xl">
                  <User className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>

              <h3 className="text-2xl font-bold text-white mb-4">
                {t(developer.nameKey)}
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3 text-white/50">
                  <Mail className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm">{t(developer.emailKey)}</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white/50">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm">{t(developer.locationKey)}</span>
                </div>

                {/* Website / Contact Link - Wixtory.com */}
                <a
                  href={developer.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-4 px-6 py-3 rounded-xl border border-emerald-400/20 bg-emerald-400/5 text-emerald-400 text-sm font-medium hover:bg-emerald-400/10 hover:border-emerald-400/30 transition-all duration-300 group"
                >
                  <Globe className="h-4 w-4" />
                  <span>{t(developer.websiteKey)}</span>
                  <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* Contact via Website Button */}
                <a
                  href={developer.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-3 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-sm hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{t("dev_contact_website")}</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
