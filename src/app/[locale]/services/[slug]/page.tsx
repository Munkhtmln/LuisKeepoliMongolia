import Image from "next/image";
import { getServiceBySlug } from "@/lib/servicesData";

interface ServiceDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <main className="bg-muted/40 py-16 h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Үйлчилгээ олдсонгүй
          </h1>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            Хайлтын үр дүнд тохирох үйлчилгээ олдсонгүй. Та жагсаалтаас дахин
            сонгон үзнэ үү.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-muted/40 py-16 h-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top: title (right) + image (left) with intro beside image — same layout as screenshot */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="order-2 lg:order-1 w-full shrink-0 lg:w-[420px]">
            <div className="relative w-full aspect-16/10 overflow-hidden rounded-lg">
              <Image
                src={service.image}
                alt={service.pageTitle}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
              />
            </div>
            <p className="mt-3 text-center text-sm text-foreground/80">
              &quot;LuiskeepoliMongolia&quot; LLC
            </p>
          </div>
          <div className="order-1 lg:order-2 flex-1 min-w-0">
            <h1 className="text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl leading-snug">
              {service.pageTitle}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-foreground">
              {service.intro}
            </p>
          </div>
        </div>

        {/* Sections with bold subheadings and paragraphs */}
        <div className="mt-12 space-y-10">
          {service.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-base leading-relaxed text-foreground"
                  >
                    {paragraph}
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
