"use client";

import Header from "../_components/Header";
import Footer from "../_components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="bg-muted/40 py-12 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 space-y-20">
          {/* Hero / Company introduction (matches screenshot layout) */}
          <section aria-labelledby="about-hero-title" className="space-y-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              {/* Left: hero image */}
              <div className="relative overflow-hidden rounded-md border border-border bg-background shadow-sm">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/about-hero.jpg"
                    alt="CCIC группийн үйл ажиллагааны танилцуулга"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <p className="py-1 pr-4 text-right text-[11px] text-foreground/70">
                  CCIC group
                </p>
              </div>

              {/* Right: title + first paragraph */}
              <div className="space-y-4 lg:pl-4">
                <h1
                  id="about-hero-title"
                  className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[28px]"
                >
                  CCIC группийн танилцуулга
                </h1>
                <p className="text-sm leading-relaxed text-foreground/80">
                  CCIC групп нь БНХАУ-ын төрийн өмчит, олон улсын шалгагч,
                  баталгаажуулалт, стандартын чиглэлийн{" "}
                  <span className="font-semibold">компани</span> бөгөөд 1980 онд
                  байгуулагдсан цагаасаа хойш дэлхийн олон оронд салбартаа
                  тэргүүлэх үйлчилгээ үзүүлж байна.
                </p>
              </div>
            </div>

            {/* Hero bottom long text (full width under both columns) */}
            <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <p>
                Одоогийн байдлаар 200 гаруй салбар, 500 гаруй лабораторитой үйл
                ажиллагаагаа явуулж, 20,000 гаруй мэргэжилтэн ажиллаж байна.
                Тэд экспорт, импортын бүх үе шатанд чанарын хяналт,
                баталгаажуулалт, техникийн шинжилгээг олон улсын стандартын дагуу
                гүйцэтгэдэг.
              </p>
              <p>
                “Илүү найдвартай гинжин хэлхээ бий болгох” гэсэн зорилтын дагуу
                CCIC групп нь тээвэр, эрдэс баялаг, үйлдвэрлэл, худалдаа, хүнс,
                хөдөө аж ахуй зэрэг гол салбаруудад чанарын үнэлгээ, хяналт,
                аудит, баталгаажуулалтын цогц шийдэл санал болгодог.
              </p>
            </div>
          </section>

          {/* Local company / team section (matches screenshot layout) */}
          <section aria-labelledby="about-team-title" className="space-y-6">
            <div className="grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-start">
              {/* Left: team photo */}
              <div>
                <div className="relative overflow-hidden rounded-md border border-border bg-background shadow-sm">
                  <div className="relative aspect-4/3 w-full">
                    <Image
                      src="/about-team.jpg"
                      alt="CCICMNHK хамт олон"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </div>
                <p className="mt-2 text-center text-[11px] text-foreground/70">
                  &quot;CCICMNHK&quot; LLC
                </p>
              </div>

              {/* Right: title + text */}
              <div className="space-y-4">
                <h2
                  id="about-team-title"
                  className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl"
                >
                  &quot;Си Си Ай Си Эм Эн Эйч Кэй&quot; ХХК
                </h2>
                <p className="text-sm leading-relaxed text-foreground/80">
                  &quot;Си Си Ай Си Эм Эн Эйч Кэй&quot; ХХК нь БНХАУ-ын CCIC
                  группийн Монгол Улс дахь албан ёсны төлөөлөгч, лабораторийн
                  үйлчилгээ үзүүлэгч байгууллага юм. Бид уул уурхай, эрдэс
                  баялгийн бүтээгдэхүүн, эрчим хүч, авто машин, тоног төхөөрөмж,
                  барилгын материал зэрэг өргөн хүрээний бүтээгдэхүүнд чанарын
                  хяналт, баталгаажуулалтын үйлчилгээ үзүүлж байна.
                </p>
                <p className="text-sm leading-relaxed text-foreground/80">
                  Манай байгууллагын хамт олон олон улсын стандартын дагуу
                  мэргэжлийн өндөр түвшинд ажиллахыг эрхэмлэн, харилцагчдынхаа
                  итгэлийг урт хугацаанд хадгалах зорилготой.
                </p>
              </div>
            </div>

            {/* Extra bottom text under team block (full width) */}
            <p className="text-sm leading-relaxed text-foreground/80">
              Мөн сав баглаа боодол, маркшейдэрийн хэмжилт, шинжилгээ,
              экспортын өмнөх шалгалт зэрэг чиглэлээр үйл ажиллагаагаа
              тэлэн хөгжүүлж, итгэмжлэгдсэн лабораторийн үйлчилгээ, баталгаажуулалтын
              үйлчилгээг хэрэглэгчдэдээ хүргэн ажиллаж байна.
            </p>
          </section>

          {/* Organization chart */}
          <section
            aria-labelledby="about-structure-title"
            className="space-y-6"
          >
            <div className="text-center space-y-1">
              <h2
                id="about-structure-title"
                className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl"
              >
                &quot;Си Си Ай Си Эм Эн Эйч Кэй&quot; ХХК
              </h2>
              <p className="text-sm font-medium text-foreground/80">
                Байгууллагын бүтэц
              </p>
            </div>

            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border border-border bg-background shadow-sm">
              <div className="relative aspect-16/10 w-full">
                <Image
                  src="/about-org-chart.png"
                  alt="Байгууллагын бүтэц"
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 1024px) 100vw, 64rem"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

