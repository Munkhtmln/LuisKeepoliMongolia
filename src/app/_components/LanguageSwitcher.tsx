"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "@/i18n/LocaleProvider";
import { locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

const localeConfig: Record<Locale, { flag: string; label: string }> = {
  mn: { flag: "🇲🇳", label: "Mn" },
  zh: { flag: "🇨🇳", label: "中文" },
};

type LanguageSwitcherProps = {
  /** Called after locale is changed (e.g. close sidebar on mobile) */
  onAfterSelect?: () => void;
  /** Optional class for the trigger button */
  className?: string;
};

export function LanguageSwitcher({ onAfterSelect, className }: LanguageSwitcherProps = {}) {
  const { locale, setLocale, t } = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const pathWithoutLocale = pathname.replace(/^\/(mn|zh)/, "") || "/";

  const handleSelect = (next: Locale) => {
    setLocale(next);
    const newPath = next === "mn" && pathWithoutLocale === "/" ? "/mn" : `/${next}${pathWithoutLocale}`;
    router.push(newPath);
    onAfterSelect?.();
  };

  const current = localeConfig[locale];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex min-w-0 items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground",
            "overflow-hidden hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            className
          )}
          aria-label={t("sidebar.menu")}
        >
          <span className="shrink-0 text-base leading-none" aria-hidden>
            {current.flag}
          </span>
          <span className="min-w-0 truncate">{current.label}</span>
          <ChevronDown className="size-4 shrink-0 text-muted-foreground" aria-hidden />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleSelect(loc)}
            className="cursor-pointer min-w-0 wrap-break-word"
          >
            <span className="mr-2 shrink-0">{localeConfig[loc].flag}</span>
            <span className="min-w-0 wrap-break-word">
              {loc === "mn" ? t("lang.mongolian") : t("lang.chinese")}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
