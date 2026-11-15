import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo-config";

export const metadata: Metadata = constructMetadata({
  path: "/contact",
  titleKey: "contact_title",
  descKey: "contact_desc",
  keywordsKey: "site_keywords",
  ogImage: "/general/logo1.png",
  ogImageAlt: "Wixtory Contact & Support",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

