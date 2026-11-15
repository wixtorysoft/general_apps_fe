import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo-config";

export const metadata: Metadata = constructMetadata({
  path: "/about",
  titleKey: "about_title",
  descKey: "about_desc",
  keywordsKey: "site_keywords",
  ogImage: "/about/studio-life.jpg",
  ogImageAlt: "Wixtory Software Studio",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

