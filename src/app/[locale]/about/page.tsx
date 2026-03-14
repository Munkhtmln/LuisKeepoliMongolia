"use client";

import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <main className="bg-muted/40 py-12 lg:py-20">
      <div className="mx-auto max-w-6xl space-y-20 px-4 sm:px-6 lg:px-10">
        {/* Hero / Company introduction */}
        <section aria-labelledby="about-hero-title" className="space-y-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="relative overflow-hidden rounded-md border border-border bg-background shadow-sm">
              <div className="relative aspect-video w-full">
                <Image
                  src="/uwurmongol.png"
                  alt={t("about.hero.imageAlt")}
                  fill
                  className=""
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <p className="py-1 pr-4 text-right text-[11px] text-foreground/70">
                LuisKeepoliMongolia
              </p>
            </div>

            <div className="space-y-4 lg:pl-4">
              <h1
                id="about-hero-title"
                className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[28px]"
              >
                {t("about.hero.title")}
              </h1>
              <p className="text-sm leading-relaxed text-foreground/80">
                {t("about.hero.paragraph1")}
              </p>
            </div>
          </div>

          <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
            <p>{t("about.hero.paragraph2")}</p>
            <p>{t("about.hero.paragraph3")}</p>
            <p>{t("about.hero.paragraph4")}</p>
          </div>
        </section>

        {/* Local company / team section */}
        <section aria-labelledby="about-team-title" className="space-y-6">
          <div className="grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-start">
            <div>
              <div className="relative overflow-hidden rounded-md border border-border bg-background shadow-sm">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src="/ajilchid.JPG"
                    alt={t("about.team.imageAlt")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>
              <p className="mt-2 text-center text-[11px] text-foreground/70">
                &quot;LuiskeepoliMongolia&quot; LLC
              </p>
            </div>

            <div className="space-y-4">
              <h2
                id="about-team-title"
                className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl"
              >
                {t("about.team.title")}
              </h2>
              <p className="text-sm leading-relaxed text-foreground/80">
                {t("about.team.paragraph1")}
              </p>
              <p className="text-sm leading-relaxed text-foreground/80">
                {t("about.team.paragraph2")}
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-foreground/80">
            {t("about.team.paragraph3")}
          </p>

          <p className="text-sm leading-relaxed text-foreground/80">
            <b>{t("about.mission.title")}</b> <br />
            {t("about.mission.description")}
          </p>

          <p className="text-sm leading-relaxed text-foreground/80">
            <b>{t("about.vision.title")}</b> <br />
            {t("about.vision.description")}
          </p>

          <p className="text-sm leading-relaxed text-foreground/80">
            <b>{t("about.quality.title")}</b> <br />
            {t("about.quality.description")}
          </p>

          <p className="text-sm leading-relaxed text-foreground/80">
            <b>{t("about.values.title")}</b> <br />
            {t("about.values.description")}
          </p>

          <p className="text-sm leading-relaxed text-foreground/80">
            <b>{t("about.customerService.title")}</b> <br />
            {t("about.customerService.description")}
          </p>

          <p className="text-sm leading-relaxed text-foreground/80">
            <b>{t("about.respect.title")}</b> <br />
            {t("about.respect.description")}
          </p>

          <p className="text-sm leading-relaxed text-foreground/80">
            <b>{t("about.responsibility.title")}</b> <br />
            {t("about.responsibility.description")}
          </p>
        </section>
      </div>
    </main>
  );
}
