"use client";
import { newsItems } from "@/lib/newsData";
import { NewsCard } from "./NewsCard";
import { useLocale } from "@/i18n/LocaleProvider";

interface NewsSectionProps {
  /** Set to false when used on the news page (page has its own title). Default true for homepage. */
  showTitle?: boolean;
}

export default function NewsSection({ showTitle = true }: NewsSectionProps) {
  const { t } = useLocale();
  return (
    <section className="w-full bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {showTitle && (
          <div className="mb-10 md:mb-12">
            <h2 className="text-2xl font-bold text-foreground leading-tight">
              {t("userPage.herotitle")}
            </h2>
            <div className="mt-3 w-16 h-1 bg-muted-foreground/30" />
          </div>
        )}
        <div className="flex flex-col gap-12 md:gap-16">
          {newsItems.map((item) => (
            <NewsCard
              key={item.slug}
              image={item.image}
              title={t(item.titleKey)}
              description={t(item.descriptionKey)}
              slug={item.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
