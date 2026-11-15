import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo-config";

export const metadata: Metadata = constructMetadata({
  path: "/kvkk",
  titleKey: "privacy_title",
  descKey: "privacy_desc",
  keywordsKey: "site_keywords",
  ogImage: "/general/logo1.png",
  ogImageAlt: "Wixtory KVKK Aydınlatma Metni",
  lang: "tr",
});

export default function KvkkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

