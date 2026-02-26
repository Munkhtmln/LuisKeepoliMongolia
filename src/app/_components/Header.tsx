"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronDown, Search, Youtube, Mail } from "lucide-react";

const navItems = [
  { label: "НҮҮР ХУУДАС", href: "#", hasDropdown: false },
  { label: "БИДНИЙ ТУХАЙ", href: "#", hasDropdown: true },
  { label: "МЭДЭЭ, МЭДЭЭЛЭЛ", href: "#", hasDropdown: false },
  { label: "ҮЙЛЧИЛГЭЭ", href: "#", hasDropdown: true },
  { label: "ХҮНИЙ НӨӨЦ", href: "#", hasDropdown: true },
  { label: "ГОМДОЛ САНАЛ", href: "#", hasDropdown: false },
  { label: "ХОЛБОО БАРИХ", href: "#", hasDropdown: false },
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
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex shrink-0 items-center"
              aria-label="CIC - Нүүр хуудас"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 lg:h-12 lg:w-12"
                aria-hidden="true"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  stroke="#1a3fa0"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  stroke="#1a3fa0"
                  strokeWidth="5"
                  fill="none"
                />
                <circle cx="50" cy="50" r="10" fill="#1a3fa0" />
                <line
                  x1="4"
                  y1="50"
                  x2="20"
                  y2="50"
                  stroke="#1a3fa0"
                  strokeWidth="5"
                />
                <text
                  x="50"
                  y="88"
                  textAnchor="middle"
                  fill="#1a3fa0"
                  fontSize="14"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  CIC
                </text>
              </svg>
            </a>

            {/* Desktop Navigation */}
            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label="Үндсэн цэс"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-0.5 px-3 py-2 text-sm font-bold tracking-wide text-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
                </a>
              ))}
            </nav>

            {/* Social + Search (Desktop) */}
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="#"
                className="text-foreground/70 transition-colors hover:text-primary"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-foreground/70 transition-colors hover:text-primary"
                aria-label="TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.44a8.16 8.16 0 0 0 3.76.96V6.09a4.84 4.84 0 0 1 0 .6z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-foreground/70 transition-colors hover:text-primary"
                aria-label="Имэйл"
              >
                <Mail className="h-5 w-5" />
              </a>
              <button
                className="ml-1 text-foreground/70 transition-colors hover:text-primary"
                aria-label="Хайх"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="flex items-center justify-center lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Цэс хаах" : "Цэс нээх"}
              aria-expanded={mobileMenuOpen}
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                    mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                    mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
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
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between px-2 py-3 text-sm font-bold tracking-wide text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-4 border-t border-border px-2 pt-4">
                <a
                  href="#"
                  className="text-foreground/70 hover:text-primary"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-primary"
                  aria-label="TikTok"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.44a8.16 8.16 0 0 0 3.76.96V6.09a4.84 4.84 0 0 1 0 .6z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-primary"
                  aria-label="Имэйл"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <button
                  className="text-foreground/70 hover:text-primary"
                  aria-label="Хайх"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Carousel */}
      <section
        className="relative w-full px-20 py-10 overflow-hidden"
        aria-label="Зургийн слайд"
      >
        <div className="relative aspect-[16/7] w-full px-10 sm:aspect-[16/4] lg:aspect-[16/5]">
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={index !== currentSlide}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
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
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
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
