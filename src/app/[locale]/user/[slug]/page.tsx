import Image from "next/image";
import { getNewsBySlug } from "../newsData";
import { translations } from "@/i18n/translations";

interface NewsDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

function getNested(obj: Record<string, unknown>, path: string) {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : undefined;
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug, locale } = await params;
  const newsItem = getNewsBySlug(slug);

  const t = (key: string) =>
    getNested(translations[locale as keyof typeof translations], key) ?? key;

  if (!newsItem) {
    return (
      <main className="bg-muted/40 py-16 h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t("news.notFound.title")}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            {t("news.notFound.description")}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-muted/40 py-16 h-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="order-2 lg:order-1 w-full shrink-0 lg:w-[420px]">
            <div className="relative w-full aspect-4/3 overflow-hidden rounded-lg">
              <Image
                src={newsItem.image}
                alt={t(newsItem.pageTitleKey)}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
              />
            </div>
            <p className="mt-3 text-sm text-foreground/70 text-center">
              &quot;Luis Keepoli Mongolia&quot; LLC
            </p>
          </div>

          <div className="order-1 lg:order-2 flex-1 min-w-0">
            <h1 className="text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
              {t(newsItem.pageTitleKey)}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-foreground">
              {t(newsItem.introKey)}
            </p>
          </div>
        </article>

        {/* sections байвал */}
        {newsItem.sections.length > 0 && (
          <div className="mt-12 space-y-10">
            {newsItem.sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-lg font-bold text-foreground sm:text-xl">
                  {t(section.headingKey)}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphKeys.map((key, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-base leading-relaxed text-foreground"
                    >
                      {t(key)}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
