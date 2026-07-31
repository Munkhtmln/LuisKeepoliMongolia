"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import Link from "next/link";

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <main className="bg-muted/40 py-12 lg:py-20">
      <div className="mx-auto max-w-6xl space-y-20 px-4 sm:px-6 lg:px-10">
        {/* Hero / Company introduction */}
        <section
          aria-labelledby="about-hero-title"
          className="space-y-30 gap-6  "
        >
          <div className="grid gap-8  lg:items-start">
            <div className="space-y-4 lg:pl-4">
              <h1
                id="about-hero-title"
                className="text-xl font-bold tracking-tight text-start text-foreground sm:text-3xl lg:text-[28px]"
              >
                {t("rules.heroDescription1")}
              </h1>
              <Link
                href="https://legalinfo.mn/mn/detail/63"
                target="_blank"
                className="text-sm text-blue-500 hover:underline"
              >
                {t("rules.heroDescription1")}
              </Link>
            </div>
          </div>
          <div className="grid gap-8  lg:items-start">
            <div className="space-y-4 lg:pl-4">
              <h1
                id="about-hero-title"
                className="text-2xl font-bold tracking-tight text-start text-foreground sm:text-3xl lg:text-[28px]"
              >
                {t("rules.heroDescription2")}
              </h1>
              <Link
                href="https://legalinfo.mn/mn/detail?lawId=16230709635751"
                target="_blank"
                className="text-sm text-blue-500 hover:underline"
              >
                {t("rules.heroDescription2")}
              </Link>
            </div>
          </div>
          <div className=" gap-8  lg:items-start">
            <div className="space-y-4 lg:pl-4">
              <h1
                id="about-hero-title"
                className="text-2xl font-bold tracking-tight text-start text-foreground sm:text-3xl lg:text-[28px]"
              >
                {t("rules.heroDescription3")}
              </h1>
              <Link
                href="https://legalinfo.mn/mn/detail/13071"
                target="_blank"
                className="text-sm text-blue-500 hover:underline"
              >
                {t("rules.heroDescription3")}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
