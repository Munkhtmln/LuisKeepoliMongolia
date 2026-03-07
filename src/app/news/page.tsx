"use client";

import Header from "../_components/Header";
import Footer from "../_components/Footer";
import NewsSection from "../_components/News-Section";

export default function NewsPage() {
  return (
    <div>
      <Header />
      <main className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Мэдээ, мэдээлэл
            </h1>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              Компанийн үйл ажиллагаа, шинэчлэл, арга хэмжээ, төслүүдтэй холбоотой
              мэдээ мэдээллийг энэ хэсгээс авах боломжтой.
            </p>
          </div>
        </div>
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

