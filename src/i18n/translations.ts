import mnJson from "./locales/mn.json";
import zhJson from "./locales/zh.json";

export type Locale = "mn" | "zh";

type TranslationDict = Record<string, unknown>;

export const translations: Record<Locale, TranslationDict> = {
  mn: mnJson as TranslationDict,
  zh: zhJson as TranslationDict,
};
