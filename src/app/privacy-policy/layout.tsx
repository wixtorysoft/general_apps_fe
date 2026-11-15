import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo-config";

export const metadata: Metadata = constructMetadata({
  path: "/privacy-policy",
  titleKey: "privacy_title",
  descKey: "privacy_desc",
  keywordsKey: "site_keywords",
  ogImage: "/general/logo1.png",
  ogImageAlt: "Wixtory Privacy Policy & Standards",
});

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

