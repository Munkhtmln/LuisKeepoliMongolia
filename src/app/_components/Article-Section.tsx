import { useLocale } from "@/i18n/LocaleProvider";
import { ArticleCard } from "./Article-Card";
import { newsItems } from "@/lib/newsData";

export default function ArticleSection() {
  const { t } = useLocale();
  return (
    <section className="w-full bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className=" lg:flex-row gap-12 lg:gap-16">
          {/* Left title area */}
          <div className="lg:w-60 shrink-0">
            <h2 className="text-2xl font-bold  text-foreground leading-tight">
              {t("userPage.herotitle")}
            </h2>
            <div className="mt-3 w-60 h-1 bg-muted-foreground/30" />
          </div>

          {/* News cards grid */}
          <div className="flex-1  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <ArticleCard
                key={item.slug}
                image={item.image}
                title={item.titleKey}
                description={item.descriptionKey}
                slug={item.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
