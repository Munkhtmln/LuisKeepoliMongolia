"use client";

import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";
import NewsSection from "@/app/_components/News-Section";

export default function NewsPage() {
  const { t } = useLocale();

  return (
    <main className="h-full bg-muted/40 py-16">
      {/* 7 photos under h1 */}
      <div className="mt-5 mx-auto mb-20  items-center justify-center max-w-7xl">
        <h1 className="text-2xl m-auto font-bold tracking-tight flex items-center justify-center text-foreground sm:text-3xl">
          {t("userPage.hero.title")}
        </h1>
        {/* //tom hoyr// */}
        <div className="grid h-120 place-items-center gap-20 mt-10 grid-cols-2">
          <div className="relative aspect-3/3 h-100 overflow-hidden rounded-lg">
            <Image src="/udirdlagamn.jpg" alt="photo3" fill className="" />
          </div>

          <div className="relative aspect-3/3 h-100 overflow-hidden rounded-lg">
            <Image src="/udirdlagacn.jpg" alt="photo4" fill className="" />
          </div>
        </div>
        {/* deed 2  */}
        <div className="grid place-items-center  gap-10 mt-20 grid-cols-2">
          <div className="relative aspect-[3/3] h-[300px] overflow-hidden rounded-lg">
            <Image src="/gerchilgee2.jpg" alt="photo1" fill className="" />
          </div>

          <div className="relative aspect-[3/3] h-[300px] overflow-hidden rounded-lg">
            <Image src="/itgemjleliin.png" alt="photo2" fill className="" />
          </div>
        </div>
        {/* dood 3  */}
        <div className="grid place-items-center gap-10 mt-20 grid-cols-3">
          <div className="relative aspect-[3/3] h-[300px] overflow-hidden rounded-lg">
            <Image src="/erdes-baylag.png" alt="photo2" fill className="" />
          </div>
          <div className="relative aspect-[3/3] h-[300px] overflow-hidden rounded-lg">
            <Image src="/a-turul.png" alt="photo2" fill className="" />
          </div>
          <div className="relative aspect-[3/3] h-[300px] overflow-hidden rounded-lg">
            <Image src="/nariivchilsan.png" alt="photo2" fill className="" />
          </div>
        </div>
      </div>

      <NewsSection showTitle={false} />

      <article className="m-auto flex max-w-305 w-full flex-col gap-6 md:flex-row md:items-center md:gap-8 lg:gap-10">
        <div className="order-2 min-w-0 flex-1 md:order-1">
          <h3 className="text-xl font-bold leading-tight text-foreground sm:text-2xl">
            {t("userPage.coalIntro.title")}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-foreground/80 sm:mt-4">
            {t("userPage.coalIntro.description")}
          </p>
          <div className="mt-4 sm:mt-5"></div>
        </div>

        <div className="relative order-1 aspect-4/3 w-full shrink-0 overflow-hidden rounded-lg bg-muted md:order-2 md:w-[42%] md:min-w-[320px]">
          <Image
            src="/nuursjinshin.png"
            alt={t("userPage.coalIntro.imageAlt")}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>
      </article>
    </main>
  );
}
