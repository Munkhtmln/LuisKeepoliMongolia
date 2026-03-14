import Image from "next/image";
import { getServiceBySlug } from "@/lib/servicesData";
import { translations } from "@/i18n/translations";

interface ServiceDetailPageProps {
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

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug, locale } = await params;

  const service = getServiceBySlug(slug);

  const t = (key: string) =>
    getNested(translations[locale as keyof typeof translations], key) ?? key;

  if (!service) {
    return (
      <main className="bg-muted/40 py-16 h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t("services.notFound.title")}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            {t("services.notFound.description")}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-muted/40 py-16 h-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="order-2 lg:order-1 w-full shrink-0 lg:w-[420px]">
            <div className="relative w-full aspect-16/10 overflow-hidden rounded-lg">
              <Image
                src={service.image}
                alt={t(service.pageTitleKey)}
                fill
                className="object-cover"
              />
            </div>

            <p className="mt-3 text-center text-sm text-foreground/80">
              &quot;LuiskeepoliMongolia&quot; LLC
            </p>
          </div>

          <div className="order-1 lg:order-2 flex-1 min-w-0">
            <h1 className="text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
              {t(service.pageTitleKey)}
            </h1>

            <p className="mt-6 text-base leading-relaxed text-foreground">
              {t(service.introKey)}
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-10">
          {service.sections.map((section, index) => (
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
      </div>
    </main>
  );
}
