import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo-config";

export const metadata: Metadata = constructMetadata({
  path: "/wixtory-player",
  titleKey: "player_title",
  descKey: "player_desc",
  keywordsKey: "site_keywords",
  ogImage: "/apps/wixtory-player-icon.png",
  ogImageAlt: "Wixtory Player Local Media Flow",
});

export default function WixtoryPlayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

