import type { Locale } from "./translations";

export type { Locale };
export const locales: Locale[] = ["mn", "zh"];
export const defaultLocale: Locale = "mn";

export function isLocale(value: string): value is Locale {
  return value === "mn" || value === "zh";
}
