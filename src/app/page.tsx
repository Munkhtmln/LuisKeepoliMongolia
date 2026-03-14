"use client";

import Body from "./_components/Body";
import ServicesSection from "./_components/ServiceSection";
import Image from "next/image";
import { useState, useEffect } from "react";
import ArticleSection from "./_components/Article-Section";

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
    <main className="min-h-screen bg-background">
      {/* --- HERO SLIDER SECTION --- */}
      <section className="relative w-full px-4 py-6 lg:px-8 lg:py-10 max-w-[1600px] mx-auto">
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden rounded-[2rem] shadow-2xl">
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Ken Burns Effect Image */}
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className={`object-cover transition-transform duration-[7000ms] ease-out ${
                  index === currentSlide ? "scale-100" : "scale-110"
                }`}
                priority={index === 0}
                sizes="100vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-24">
                <div
                  className={`transition-all duration-1000 transform ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
                    Мэргэжлийн Лаборатори
                  </span>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-2xl leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-8 font-light">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
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
                  className={`absolute inset-0 h-full bg-blue-500 transition-all ${
                    index === currentSlide
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

      {/* --- CONTENT SECTIONS --- */}
      <div className="space-y-20 pb-20">
        <Body />
        <ArticleSection />
        <ServicesSection />
      </div>
    </main>
  );
}
