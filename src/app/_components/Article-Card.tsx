import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  slug: string;
}

export function ArticleCard({
  image,
  title,
  description,
  slug,
}: ArticleCardProps) {
  return (
    <article className="flex flex-col">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col flex-1 pt-5">
        <h3 className="text-lg font-bold text-foreground text-center leading-snug mb-3">
          {title}
        </h3>
        <p className="text-sm text-foreground leading-relaxed text-justify flex-1 mb-5">
          {description}
        </p>
        <div className="flex justify-center">
          <Link
            href={`/user/${slug}`}
            className="px-8 py-2.5 border border-foreground text-foreground text-sm font-medium rounded-sm hover:bg-foreground hover:text-background transition-colors cursor-pointer"
          >
            Дэлгэрэнгүй
          </Link>
        </div>
      </div>
    </article>
  );
}
