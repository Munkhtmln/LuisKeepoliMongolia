import Image from "next/image";
import { notFound } from "next/navigation";

import Header from "../../_components/Header";
import Footer from "../../_components/Footer";
import { getNewsBySlug } from "../newsData";

interface NewsDetailPageProps {
  params: {
    slug: string;
  };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const newsItem = getNewsBySlug(params.slug);

  if (!newsItem) {
    return (
      <div>
        <Header />
        <main className="bg-muted/40 py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Мэдээ олдсонгүй
            </h1>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              Хайлтын үр дүнд тохирох мэдээ олдсонгүй. Та жагсаалтаас дахин
              сонгон үзнэ үү.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="mx-auto flex max-w-5xl flex-col gap-10 rounded-2xl bg-background p-8 shadow-lg md:flex-row md:items-center">
            {/* Left: image with caption */}
            <div className="w-full shrink-0 md:w-[420px]">
              <div className="relative w-full aspect-4/3 overflow-hidden rounded-2xl">
                <Image
                  src={newsItem.image}
                  alt={newsItem.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 420px, 100vw"
                />
              </div>
              <p className="mt-3 text-xs text-foreground/70 text-center">
                "CCICMNHK" LLC
              </p>
            </div>

            {/* Right: title and description */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold leading-snug text-foreground sm:text-3xl">
                {newsItem.title}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-foreground/85">
                {newsItem.description}
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}