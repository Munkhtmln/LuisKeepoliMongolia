"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search, Youtube, Mail } from "lucide-react";

const navItems = [
  { label: "НҮҮР ХУУДАС", href: "/" },
  { label: "БИДНИЙ ТУХАЙ", href: "/about" },
  { label: "МЭДЭЭ, МЭДЭЭЛЭЛ", href: "/news" },
  { label: "ҮЙЛЧИЛГЭЭ", href: "/services" },
  { label: "ГОМДОЛ САНАЛ", href: "/complaints" },
  { label: "ХОЛБОО БАРИХ", href: "/contact" },
];

const slides = [
  { src: "/zurg1.jpg", alt: "Химийн лабораторид ажиллаж буй судлаачид" },
  { src: "/zurg2.jpg", alt: "Орчин үеийн шинжилгээний тоног төхөөрөмж" },
];

export default function CICHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="min-h-100 bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-6">
          <div className="flex h-16 items-center gap-8 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center"
              aria-label="LKM - Нүүр хуудас"
            >
              <Image src="/logo.jpg" alt="LKM Logo" width={80} height={20} />
            </Link>

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
                  {/* {item && <ChevronDown className="h-3.5 w-3.5" />} */}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="flex items-center justify-center lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Цэс хаах" : "Цэс нээх"}
              aria-expanded={mobileMenuOpen}
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                    }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""
                    }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                    }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav
              className="border-t border-border pb-4 lg:hidden"
              aria-label="Мобайл цэс"
            >
              <div className="flex flex-col gap-1 pt-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between px-2 py-3 text-sm font-bold tracking-wide text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                    {/* {item && <ChevronDown className="h-4 w-4" />} */}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-4 border-t border-border px-2 pt-4"></div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Carousel */}
      <section
        className="relative w-full px-33  py-10 overflow-hidden"
        aria-label="Зургийн слайд"
      >
        <div className="relative aspect-[16/7] w-50vw px-10 sm:aspect-[16/8] lg:aspect-[16/5]">
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              aria-hidden={index !== currentSlide}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover rounded-2xl"
                priority={index === 0}
                sizes="50vw"
              />
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${index === currentSlide
                ? "scale-110 bg-background"
                : "bg-background/50 hover:bg-background/75"
                }`}
              aria-label={`Слайд ${index + 1}-рүү очих`}
              aria-current={index === currentSlide ? "true" : undefined}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
