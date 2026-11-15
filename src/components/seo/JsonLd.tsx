import React from "react";
import { SITE_URL } from "@/lib/seo-config";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Wixtory Apps & Software Studio",
    alternateName: "Wixtory",
    url: SITE_URL,
    logo: `${SITE_URL}/general/logo1.png`,
    image: `${SITE_URL}/general/icon.png`,
    email: "wixtoryy@gmail.com",
    sameAs: [
      SITE_URL,
      "https://wixtory.com",
      "https://youtube.com/@Wixtoryy",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "wixtoryy@gmail.com",
        availableLanguage: [
          "Turkish",
          "English",
          "French",
          "Italian",
          "Spanish",
          "German",
        ],
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Wixtory Apps & Games",
    description:
      "Official flagship mobile and web applications ecosystem by Wixtory Software Studio.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: [
      "tr",
      "en",
      "fr",
      "it",
      "es",
      "de",
      "pt",
      "ru",
      "ja",
      "zh",
      "ar",
    ],
  };

  const softwareCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Wixtory Flagship Applications",
    description: "Official published applications of the Wixtory Ecosystem",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "Wixtory Language Box",
          description:
            "Gamified language learning platform with 8 interactive games including Word Ring and Word Matrix.",
          applicationCategory: "EducationalApplication",
          operatingSystem: "Android, iOS, Web",
          image: `${SITE_URL}/apps/language-box-icon.png`,
          url: `${SITE_URL}/language-box`,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          publisher: { "@id": `${SITE_URL}/#organization` },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: "Wixtory: Domain Track",
          description:
            "Real-time domain expiration, WHOIS, SSL certificate validity, and DNS monitor assistant.",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Android, iOS, Web",
          image: `${SITE_URL}/apps/domain-track-icon.png`,
          url: `${SITE_URL}/domain-track`,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          publisher: { "@id": `${SITE_URL}/#organization` },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "SoftwareApplication",
          name: "AstroVibe",
          description:
            "Cosmic astrology, 3D animated tarot readings, 7-period horoscopes and zodiac nail art styling.",
          applicationCategory: "LifestyleApplication",
          operatingSystem: "Android, iOS",
          image: `${SITE_URL}/apps/astrovibe-icon.png`,
          url: `${SITE_URL}/astrovibe`,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          publisher: { "@id": `${SITE_URL}/#organization` },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "SoftwareApplication",
          name: "Wixtory Excuse AI",
          description:
            "Smart AI excuse generator for escaping awkward social commitments and lengthy meetings.",
          applicationCategory: "EntertainmentApplication",
          operatingSystem: "Android, iOS, Web",
          image: `${SITE_URL}/apps/excuse-icon.png`,
          url: `${SITE_URL}/excuse`,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          publisher: { "@id": `${SITE_URL}/#organization` },
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "SoftwareApplication",
          name: "Wixtory Player",
          description:
            "Offline local MP3 & MP4 infinite vertical reel flow media player with zero telemetry.",
          applicationCategory: "MultimediaApplication",
          operatingSystem: "Android, iOS",
          image: `${SITE_URL}/apps/wixtory-player-icon.png`,
          url: `${SITE_URL}/wixtory-player`,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          publisher: { "@id": `${SITE_URL}/#organization` },
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareCatalogSchema) }}
      />
    </>
  );
}

