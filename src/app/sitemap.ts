import { MetadataRoute } from "next";
import { SITE_URL, SUPPORTED_LANGUAGES } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { path: "", changeFrequency: "daily" as const, priority: 1.0 },
    { path: "/apps", changeFrequency: "daily" as const, priority: 0.95 },
    { path: "/language-box", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/domain-track", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/astrovibe", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/excuse", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/wixtory-player", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/player", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/iletisim", changeFrequency: "monthly" as const, priority: 0.75 },
    { path: "/vision-mission", changeFrequency: "monthly" as const, priority: 0.75 },
    { path: "/developer", changeFrequency: "monthly" as const, priority: 0.75 },
    { path: "/privacy-policy", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/cookie-policy", changeFrequency: "monthly" as const, priority: 0.5 },
    { path: "/kvkk", changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  return routes.map((route) => {
    const url = `${SITE_URL}${route.path}`;

    // Build hreflang alternates for each language
    const languages: Record<string, string> = {
      "x-default": url,
    };

    SUPPORTED_LANGUAGES.forEach((lang) => {
      languages[lang] = `${url}${route.path ? "" : "/"}?lang=${lang}`;
    });

    return {
      url,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages,
      },
    };
  });
}

