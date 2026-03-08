import Image from "next/image";
import { getNewsBySlug } from "../newsData";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const newsItem = getNewsBySlug(slug);

  if (!newsItem) {
    return (
      <main className="bg-muted/40 py-16 h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Мэдээ олдсонгүй
          </h1>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            Хайлтын үр дүнд тохирох мэдээ олдсонгүй. Та жагсаалтаас дахин
            сонгон үзнэ үү.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-muted/40 py-16 h-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="flex flex-col gap-10 md:flex-row md:items-start">
          <div className="w-full shrink-0 md:w-[420px]">
            <div className="relative w-full aspect-4/3 overflow-hidden rounded-lg">
              <Image
                src={newsItem.image}
                alt={newsItem.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 420px, 100vw"
              />
            </div>
            <p className="mt-3 text-sm text-foreground/70 text-center">
              &quot;CCICMNHK&quot; LLC
            </p>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-snug text-foreground sm:text-3xl">
              {newsItem.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/85">
              {newsItem.description}
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}