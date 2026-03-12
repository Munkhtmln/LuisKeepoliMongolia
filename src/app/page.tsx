"use client";

import Body from "./_components/Body";
import ServicesSection from "./_components/ServiceSection";
import Bracket from "./_components/Bracket";
import Image from "next/image";
import { useState } from "react";
import ArticleSection from "./_components/Article-Section";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: "/uil-ajillagaa2.JPG",
      alt: "Химийн лабораторид ажиллаж буй судлаачид",
    },
    {
      src: "/uil-ajillagaa1.JPG",
      alt: "Орчин үеийн шинжилгээний тоног төхөөрөмж",
    },
  ];
  return (
    <div className="">
      <section
        className="relative w-full overflow-hidden"
        aria-label="Зургийн слайд"
      >
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <div className="relative aspect-[16/7] w-full px-2 sm:aspect-[16/8] sm:px-4 lg:aspect-[16/5] lg:px-10">
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
                  className="object-cover rounded-2xl"
                  priority={index === 0}
                  sizes="50vw"
                />
              </div>
            ))}
          </div>
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
      <Body />
      <ArticleSection />
      <Bracket />
      <ServicesSection />
    </div>
  );
}
