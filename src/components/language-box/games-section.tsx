"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { games } from "@/data";

export function GamesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="games"
      className="py-20 relative section-hover scroll-mt-24"
      style={{ background: "var(--section-games)" }}
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
            {t("section_games")}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            {t("section_games_desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => {
            const Icon = game.icon;
            return (
              <motion.div
                key={game.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="card-modern rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{
                    background: "var(--card-games)",
                    "--hover-accent": game.hoverAccent,
                  } as React.CSSProperties}
                >
                  <div
                    className={`absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r ${game.gradient} group-hover:w-full transition-all duration-500`}
                  />

                  <CardContent className="p-6 text-center relative flex flex-col flex-1">
                    <div
                      className={`w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${game.gradient} p-1 shadow-2xl group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 relative overflow-hidden flex items-center justify-center`}
                    >
                      <div className="w-full h-full bg-slate-950/60 backdrop-blur-sm rounded-[14px] p-2 flex items-center justify-center">
                        {game.image ? (
                          <img
                            src={game.image}
                            alt={t(game.titleKey)}
                            className="w-full h-full object-contain filter drop-shadow-lg"
                          />
                        ) : (
                          <Icon className="h-10 w-10 text-white" />
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {t(game.titleKey)}
                    </h3>

                    <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
                      {t(game.descKey)}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mt-auto">
                      {game.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className={`text-xs ${game.tagColor}`}
                        >
                          {t(tag)}
                        </Badge>
                      ))}
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
