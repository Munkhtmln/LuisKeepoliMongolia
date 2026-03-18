"use client";

import Link from "next/link";
import { FlaskConical, Truck } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";

const services = [
  {
    icon: FlaskConical,
    translationKey: "laboratory",
    slug: "coal-testing-laboratory",
  },
  {
    icon: Truck,
    translationKey: "inspection",
    slug: "technical-control-department",
  },
];

export default function ServicesSection() {
  const { t } = useLocale();
  const { locale } = useLocale();
  return (
    <section className="bg-muted/40 py-16 px-6 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl text-balance">
          {t("services.heroTitle")}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground leading-relaxed">
          {t("services.heroDescription")}
        </p>

        <div className="mt-14 grid grid-cols-1 justify-center gap-10 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.slug} className="flex flex-col items-center">
              <div className="flex justify-center md:justify-start">
                <service.icon
                  className="h-20 w-20 text-foreground"
                  strokeWidth={1.2}
                />
              </div>
              <h3 className="mt-8 text-lg font-bold text-foreground">
                {t(`services.items.${service.translationKey}.title`)}
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed text-justify">
                {t(`services.items.${service.translationKey}.description`)}
              </p>
              <Link
                href={`/${locale}/services`}
                className="mt-6 inline-block text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                {t("services.readMore")}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
