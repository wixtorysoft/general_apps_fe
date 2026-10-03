import { Twitter, Facebook, Instagram, Linkedin, Globe, Youtube, type LucideIcon } from "lucide-react";
import { YOUTUBE_CHANNEL_URL } from "./nav";

export interface DeveloperData {
  nameKey: string;
  emailKey: string;
  locationKey: string;
  websiteKey: string;
  websiteUrl: string;
}

export const developer: DeveloperData = {
  nameKey: "dev_name",
  emailKey: "dev_email",
  locationKey: "dev_location",
  websiteKey: "dev_website",
  websiteUrl: "https://www.wixtory.com",
};

export interface SocialLinkData {
  icon: LucideIcon;
  href: string;
  label: string;
  color?: string;
}

export const socialLinks: SocialLinkData[] = [
  { icon: Youtube, href: YOUTUBE_CHANNEL_URL, label: "YouTube @WixtorySoft", color: "hover:text-red-500 hover:border-red-500/30" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];
