import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo-config";

export const metadata: Metadata = constructMetadata({
  path: "/domain-track",
  titleKey: "domaintrack_title",
  descKey: "domaintrack_desc",
  keywordsKey: "site_keywords",
  ogImage: "/domain-track/logo.png",
  ogImageAlt: "Wixtory: Domain Track Assistant",
});

export default function DomainTrackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

