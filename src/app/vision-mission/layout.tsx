import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo-config";

export const metadata: Metadata = constructMetadata({
  path: "/vision-mission",
  titleKey: "vision_title",
  descKey: "vision_desc",
  keywordsKey: "site_keywords",
  ogImage: "/general/logo1.png",
  ogImageAlt: "Wixtory Vision & Mission",
});

export default function VisionMissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

