import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo-config";

export const metadata: Metadata = constructMetadata({
  path: "/apps",
  titleKey: "apps_hub_title",
  descKey: "apps_hub_desc",
  keywordsKey: "site_keywords",
  ogImage: "/general/logo1.png",
  ogImageAlt: "Wixtory Flagship Applications Catalog",
});

export default function AppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

