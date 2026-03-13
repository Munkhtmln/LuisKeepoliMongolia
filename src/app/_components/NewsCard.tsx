import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
  slug: string;
}

export function NewsCard({ image, title, description, slug }: NewsCardProps) {
  return (
    <article className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 lg:gap-10 w-full">
      {/* Text: left on desktop, below image on mobile */}
      <div className="flex-1 min-w-0 order-2 md:order-1">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
          {title}
        </h3>
        <p className="mt-3 sm:mt-4 text-base text-foreground/80 leading-relaxed">
          {description}
        </p>
        <div className="mt-4 sm:mt-5">
          {/* <Link
            href={`/user/${slug}`}
            className="inline-flex items-center justify-center rounded-md bg-muted px-6 py-2.5 text-sm font-medium text-foreground hover:bg-muted/80 transition-colors"
          >
            Дэлгэрэнгүй
          </Link> */}
        </div>
      </div>
      {/* Image: right on desktop, above text on mobile */}
      <div className="relative w-full md:w-[42%] md:min-w-[320px] aspect-16/10 md:aspect-4/3 rounded-lg overflow-hidden shrink-0 order-1 md:order-2 bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 42vw"
        />
      </div>
    </article>
  );
}
