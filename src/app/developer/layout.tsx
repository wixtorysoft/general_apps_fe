import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo-config";

export const metadata: Metadata = constructMetadata({
  path: "/developer",
  titleKey: "developer_title",
  descKey: "developer_desc",
  keywordsKey: "site_keywords",
  ogImage: "/general/logo1.png",
  ogImageAlt: "Wixtory Developer & Architecture",
});

export default function DeveloperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

