export interface NavLinkData {
  i18nKey: string;
  sectionId: string;
  href: string;
}

export const navLinks: NavLinkData[] = [
  { i18nKey: "nav_home", sectionId: "hero", href: "/language-box" },
  { i18nKey: "nav_screenshots", sectionId: "screenshots", href: "/language-box/screenshots" },
  { i18nKey: "nav_games", sectionId: "games", href: "/language-box/games" },
  { i18nKey: "nav_features", sectionId: "features", href: "/language-box/features" },
  { i18nKey: "nav_advantages", sectionId: "advantages", href: "/language-box/advantages" },
  { i18nKey: "nav_faq", sectionId: "faq", href: "/language-box/faq" },
  { i18nKey: "nav_privacy", sectionId: "", href: "/language-box/privacy-policy" },
];

export const LOGO_URL =
  "https://raw.githubusercontent.com/celalaygar/main/refs/heads/main/project/language-box/Language-Box-Logo.png";

export const APP_STORE_URL = "https://apps.apple.com/tr/app/wixtory-language-box/id6761607811";
export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.wixbook.language_box";

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@WixtorySoft";
export const YOUTUBE_PROMO_URL = "https://www.youtube.com/watch?v=9eGQyR4rj-s&t=20s";
export const YOUTUBE_SHORTS_URL = "https://www.youtube.com/shorts/Ak_w8h79YUw";
export const YOUTUBE_PROMO_ID = "9eGQyR4rj-s";
export const YOUTUBE_SHORTS_ID = "Ak_w8h79YUw";
