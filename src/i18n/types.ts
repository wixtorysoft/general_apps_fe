export type LanguageCode =
  | "tr" // Turkish
  | "en" // English
  | "it" // Italian
  | "pt" // Portuguese
  | "es" // Spanish
  | "fr" // French
  | "de" // German
  | "ru" // Russian
  | "ja" // Japanese
  | "zh" // Simplified Chinese
  | "ar"; // Arabic (RTL)

export type I18nRecord<K extends string = string> = Record<K, Record<LanguageCode, string>>;

export interface LanguageMeta {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  dir: "ltr" | "rtl";
}
