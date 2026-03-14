"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/LocaleProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navKeys = [
  { key: "nav.home", path: "" },
  { key: "nav.about", path: "/about" },
  { key: "nav.user", path: "/user" },
  { key: "nav.services", path: "/services" },
  { key: "nav.feedback", path: "/feedback" },
  { key: "nav.contact", path: "/contact" },
] as const;

export default function Header() {
  const { locale, t } = useLocale();
  const [scrollY, setScrollY] = useState(0);
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Opacity increases with scroll: 0 at top -> 1 when scrolled (e.g. after 80px)
  const scrollThreshold = 80;
  const opacity = Math.min(1, scrollY / scrollThreshold);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 ease-out",
        "bg-white/70 backdrop-blur-md border-b border-white/20",
        "supports-backdrop-filter:bg-white/60"
      )}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${0.6 + opacity * 0.4})`,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex h-16 min-w-0 items-center gap-4 lg:h-20",
            locale === "zh" && "justify-between"
          )}
        >
          {/* Logo - overflowing (visible overflow, no shrink) */}
          <div className="relative flex shrink-0 overflow-visible">
            <Link
              href={`/${locale}`}
              className="flex items-center overflow-visible"
              aria-label={t("header.logoAria")}
            >
              <Image
                src="/logo.jpg"
                alt="LKM Logo"
                width={100}
                height={32}
                className="h-8 w-auto min-w-[80px] object-contain sm:h-9 lg:h-10 lg:min-w-[100px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation + Language switcher */}
          <div className="hidden min-w-0 shrink items-center gap-4 lg:flex">
            <nav
              className="flex min-w-0 shrink items-center gap-1"
              aria-label={t("header.mainNav")}
            >
              {navKeys.map((item) => (
                <Link
                  key={item.key}
                  href={item.path === "" ? `/${locale}` : `/${locale}${item.path}`}
                  className="min-w-0 wrap-break-word px-3 py-2 text-sm font-bold tracking-wide text-foreground transition-colors hover:text-primary"
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>
            <LanguageSwitcher />
          </div>

          {/* Mobile: Sheet trigger */}
          <div className="flex items-center lg:hidden">
            <Sheet open={mobileSheetOpen} onOpenChange={setMobileSheetOpen}>
              <SheetTrigger asChild>
                <button
                  className="inline-flex size-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={
                    mobileSheetOpen ? t("sidebar.closeMenu") : t("sidebar.openMenu")
                  }
                  aria-expanded={mobileSheetOpen}
                >
                  <Menu className="size-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-3xs border-l bg-white/95 backdrop-blur-md sm:max-w-sm"
              >
                <SheetHeader className="sr-only">
                  <SheetTitle>{t("sidebar.menu")}</SheetTitle>
                </SheetHeader>
                <nav
                  className="flex min-w-0 flex-col gap-1 pt-6"
                  aria-label={t("sidebar.mobileNav")}
                >
                  {navKeys.map((item) => (
                    <Link
                      key={item.key}
                      href={item.path === "" ? `/${locale}` : `/${locale}${item.path}`}
                      onClick={() => setMobileSheetOpen(false)}
                      className="min-w-0 wrap-break-word rounded-lg px-3 py-3 text-sm font-bold tracking-wide text-foreground transition-colors hover:bg-black/5 hover:text-primary"
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </nav>
                {/* Same language switcher as desktop (oval + dropdown) */}
                <div className="mt-6 border-t border-black/10 pt-4">
                  <LanguageSwitcher
                    onAfterSelect={() => setMobileSheetOpen(false)}
                    className="w-full justify-center"
                  />
                </div>
                <SheetClose asChild>
                  <Button
                    variant="outline"
                    className="border-0 bg-transparent hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring absolute top-4 right-4"
                    aria-label={t("sidebar.close")}
                  >
                    {t("sidebar.close")}
                  </Button>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
