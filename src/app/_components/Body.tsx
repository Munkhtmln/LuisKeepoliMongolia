"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Body() {
  const { locale, t } = useLocale();

  return (
    <section className="bg-muted/40 py-12 lg:py-20" aria-label="Танилцуулга">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-6">
          {/* Left: Text Content */}
          <div className="flex flex-col bg-blue-50 px-8 p-5 justify-center lg:w-5/12">
            <h2 className="text-balance text-l font-bold leading-tight text-foreground sm:text-xl lg:text-2xl">
              {t("body.welcome")}
            </h2>

            <p className="mt-6 text-pretty leading-relaxed text-foreground/70 sm:text-lg">
              {t("body.description")}
            </p>

            <div className="mt-8">
              <Link
                href={`/${locale}/about`}
                className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t("nav.about")}
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex flex-col gap-4 lg:w-7/12">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
              <Image
                src="/DSCN0642.JPG"
                alt="LuisKM"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
