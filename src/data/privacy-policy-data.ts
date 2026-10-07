import { PRIVACY_POLICY_TR, PRIVACY_POLICY_EN } from "@/data/legal-data";
import { LanguageCode } from "@/data/translations";

export interface PolicySection {
  id: string;
  title: string;
  badge?: string;
  content: string[];
  subsections?: {
    subtitle: string;
    subcontent: string[];
  }[];
  appSpecific?: {
    appName: string;
    appSlug: string;
    details: string[];
  }[];
}

export interface PrivacyPolicyData {
  title: string;
  subtitle: string;
  lastUpdated: string;
  effectiveDate: string;
  companyName: string;
  contactEmail: string;
  supportedAppsSummary: string;
  sections: PolicySection[];
}

export const PRIVACY_POLICY_DATA_TR: PrivacyPolicyData = {
  title: PRIVACY_POLICY_TR.title,
  subtitle: PRIVACY_POLICY_TR.subtitle,
  lastUpdated: PRIVACY_POLICY_TR.lastUpdated,
  effectiveDate: PRIVACY_POLICY_TR.effectiveDate,
  companyName: PRIVACY_POLICY_TR.companyName,
  contactEmail: PRIVACY_POLICY_TR.contactEmail,
  supportedAppsSummary:
    "Bu gizlilik politikası; Wixtory markası altında yayımlanan tüm mevcut uygulamalar (Wixtory: Domain Track, Wixtory: Language Box, AstroVibe, Excuse AI) ve gelecekte eklenecek tüm yeni yazılım projeleri için bağlayıcı tek ve ortak yasal çerçevedir.",
  sections: PRIVACY_POLICY_TR.sections,
};

export const PRIVACY_POLICY_DATA_EN: PrivacyPolicyData = {
  title: PRIVACY_POLICY_EN.title,
  subtitle: PRIVACY_POLICY_EN.subtitle,
  lastUpdated: PRIVACY_POLICY_EN.lastUpdated,
  effectiveDate: PRIVACY_POLICY_EN.effectiveDate,
  companyName: PRIVACY_POLICY_EN.companyName,
  contactEmail: PRIVACY_POLICY_EN.contactEmail,
  supportedAppsSummary:
    "This unified privacy policy acts as the binding legal framework across Wixtory: Domain Track, Wixtory: Language Box, AstroVibe, Excuse AI, and all future software releases joining our ecosystem.",
  sections: PRIVACY_POLICY_EN.sections,
};

export const PRIVACY_POLICY_DATA = PRIVACY_POLICY_DATA_TR;

const PRIVACY_DATA_MAP: Partial<Record<LanguageCode, PrivacyPolicyData>> = {
  tr: PRIVACY_POLICY_DATA_TR,
  en: PRIVACY_POLICY_DATA_EN,
};

export function getLocalizedPrivacyPolicy(language: LanguageCode): PrivacyPolicyData {
  return PRIVACY_DATA_MAP[language] || PRIVACY_DATA_MAP.en || PRIVACY_DATA_MAP.tr!;
}

