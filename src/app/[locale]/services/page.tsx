"use client";

import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/servicesData";
import { useLocale } from "@/i18n/LocaleProvider";

export default function ServicesPage() {
  const { locale, t } = useLocale();

  return (
    <main className="bg-muted/40 py-16 h-full">
      <div className="mx-auto max-w-screen px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Left text */}
          <section className="lg:w-4/12">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl leading-snug">
              {t("services.pageTitle")}
            </h1>
            <div className="mt-4 h-0.5 w-16 bg-primary/60" />
          </section>

          {/* Service cards */}
          <section className="lg:w-8/12">
            <div className="grid gap-10 md:grid-cols-2">
              {services.map((service) => (
                <article key={service.slug} className="flex flex-col">
                  <div className="relative w-full aspect-4/3 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={t(service.titleKey)}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>

                  <div className="flex flex-1 flex-col pt-5">
                    <h2 className="mb-3 text-center text-lg font-bold leading-snug text-foreground">
                      {t(service.titleKey)}
                    </h2>

                    <p className="flex-1 text-justify text-sm leading-relaxed text-foreground">
                      {t(service.descriptionKey)}
                    </p>

                    <div className="mt-4 flex justify-center">
                      <Link
                        href={`/${locale}/services/${service.slug}`}
                        className="text-sm font-semibold text-blue-700 underline decoration-blue-700/70 underline-offset-4 hover:text-blue-900"
                      >
                        {t("services.readMore")}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
