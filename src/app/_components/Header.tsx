"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "НҮҮР ХУУДАС", href: "/" },
  { label: "БИДНИЙ ТУХАЙ", href: "/about" },
  { label: "МЭДЭЭ, МЭДЭЭЛЭЛ", href: "/news" },
  { label: "ҮЙЛЧИЛГЭЭ", href: "/services" },
  { label: "ГОМДОЛ САНАЛ", href: "/feedback" },
  { label: "ХОЛБОО БАРИХ", href: "/contact" },
];

export default function Header() {
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
        <div className="flex h-16 items-center  gap-20 lg:h-20">
          {/* Logo - overflowing (visible overflow, no shrink) */}
          <div className="relative flex shrink-0 overflow-visible">
            <Link
              href="/"
              className="flex items-center overflow-visible"
              aria-label="LKM - Нүүр хуудас"
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

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Үндсэн цэс"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-0.5 px-3 py-2 text-sm font-bold tracking-wide text-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile: Sheet trigger */}
          <div className="flex lg:hidden">
            <Sheet open={mobileSheetOpen} onOpenChange={setMobileSheetOpen}>
              <SheetTrigger asChild>
                <button
                  className="inline-flex size-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={mobileSheetOpen ? "Цэс хаах" : "Цэс нээх"}
                  aria-expanded={mobileSheetOpen}
                >
                  <Menu className="size-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-xs border-l bg-white/95 backdrop-blur-md sm:max-w-sm"
              >
                <SheetHeader className="sr-only">
                  <SheetTitle>Цэс</SheetTitle>
                </SheetHeader>
                <nav
                  className="flex flex-col gap-1 pt-6"
                  aria-label="Мобайл цэс"
                >
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileSheetOpen(false)}
                      className="rounded-lg px-3 py-3 text-sm font-bold tracking-wide text-foreground transition-colors hover:bg-black/5 hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
