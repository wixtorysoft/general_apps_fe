import { LanguageCode, I18nRecord } from "./types";
import { legalI18n } from "./modules/legal";
import { appDetailI18n } from "./modules/app-detail";
import { ecosystemI18n } from "./modules/ecosystem";
import { navigationI18n } from "./modules/navigation";
import { commonI18n } from "./modules/common";
import { developerI18n } from "./modules/developer";

export * from "./types";
export * from "./modules/legal";
export * from "./modules/app-detail";
export * from "./modules/ecosystem";
export * from "./modules/navigation";
export * from "./modules/common";
export * from "./modules/developer";

export const I18N_MODULES = {
  navigation: navigationI18n,
  common: commonI18n,
  developer: developerI18n,
  legal: legalI18n,
  appDetail: appDetailI18n,
  ecosystem: ecosystemI18n,
} as const;

export type I18nModuleName = keyof typeof I18N_MODULES;

/**
 * Resolves a key from an I18nRecord or registered module name with guaranteed cascade fallback:
 * requested lang -> en -> tr -> key fallback
 */
export function resolveI18n<K extends string = string>(
  dictOrModule: I18nRecord<K> | I18nModuleName | string,
  key: K,
  lang: LanguageCode | string,
  fallback: LanguageCode | string = "en"
): string {
  const dict: I18nRecord<K> | undefined =
    typeof dictOrModule === "string"
      ? (I18N_MODULES[dictOrModule as I18nModuleName] as I18nRecord<K> | undefined)
      : (dictOrModule as I18nRecord<K>);

  if (!dict) return key;
  const item = dict[key];
  if (!item) return key;

  // Normalize legacy or variant language codes (e.g. pr -> pt)
  const normalizedLang = lang === "pr" ? "pt" : lang;
  const normalizedFallback = fallback === "pr" ? "pt" : fallback;
  const itemMap = item as unknown as Record<string, string>;

  return (
    itemMap[normalizedLang] ||
    itemMap[normalizedFallback] ||
    itemMap.en ||
    itemMap.tr ||
    key
  );
}

/**
 * Convenient alias for resolveI18n adhering to ecosystem standard t11 helper
 */
export const t11 = resolveI18n;

/**
 * Higher-order resolver helper bound to a dictionary or module name
 */
export function createI18nResolver<K extends string>(dictOrModule: I18nRecord<K> | I18nModuleName | string) {
  return (key: K, lang: LanguageCode | string) => resolveI18n(dictOrModule, key, lang);
}
