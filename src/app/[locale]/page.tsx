"use client";

import Body from "../_components/Body";
import ServicesSection from "../_components/ServiceSection";
import Bracket from "../_components/Bracket";
import Image from "next/image";
import { useState, useEffect } from "react";
import ArticleSection from "../_components/Article-Section";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "/DSCN0645.JPG",
      title: "Нарийн Шинжилгээ",
      description: "Орчин үеийн лабораторийн цогц шийдэл",
    },
    {
      src: "/DSCN0643.JPG",
      title: "Дэвшилтэт Технологи",
      description: "Дэлхийн стандартад нийцсэн тоног төхөөрөмж",
    },
    {
      src: "/nvvrs-deej.png",
      title: "Чанарын Баталгаа",
      description: "Итгэмжлэгдсэн сорилт, шинжилгээний төв",
    },
    {
      src: "/tehnik.JPG",
      title: "Мэргэжлийн Баг",
      description: "Арвин туршлагатай судлаач хамт олон",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

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
                className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                aria-hidden={index !== currentSlide}
              >
                <Image
                  src={slide.src}
                  alt={slide.title} 
                  fill
                  className="object-cover rounded-2xl"
                  priority={index === 0}
                  sizes="50vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${index === currentSlide
                ? "scale-110 bg-foreground"
                : "bg-foreground/50 hover:bg-foreground/75"
                }`}
              aria-label={`Слайд ${index + 1}-рүү очих`}
              aria-current={index === currentSlide ? "true" : undefined}
            />
          ))}

          {/* Modern Progress Navigation */}
          <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3 bg-black/20 backdrop-blur-md p-3 rounded-2xl border border-white/10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group relative h-1.5 w-12 overflow-hidden rounded-full bg-white/20 transition-all"
              >
                <div
                  className={`absolute inset-0 h-full bg-blue-500 transition-all ${index === currentSlide
                      ? "translate-x-0"
                      : "-translate-x-full"
                    }`}
                  style={{
                    transitionDuration:
                      index === currentSlide ? "6000ms" : "0ms",
                    transitionTimingFunction: "linear",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Body />
      <ArticleSection />
      <ServicesSection />
    </div>
  );
}
