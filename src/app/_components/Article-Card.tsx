"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";

interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  slug: string;
}

export function ArticleCard({ image, slug }: ArticleCardProps) {
  const { locale, t } = useLocale();
  return (
    <article className="flex h-50 bg-card rounded-lg  mt-10 border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-30/100 aspect-[26/10] overflow-hidden">
        <Image src={image} alt={"title"} fill className="object-cover" />
      </div>
      <div className="flex flex-col flex-1 p-4 w-70/100">
        <h3 className="text-base font-semibold text-foreground leading-snug mb-2 line-clamp-2">
          {t("userPage.course.title")}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4 line-clamp-3">
          {t("userPage.course.description")}
        </p>
        <div className="flex justify-center">
          <Link
            href={`/${locale}/user`}
            className="px-6 py-2 border border-foreground text-foreground text-xs font-medium rounded-sm hover:bg-foreground hover:text-background transition-colors cursor-pointer"
          >
            Дэлгэрэнгүй
          </Link>
        </div>
      </div>
    </article>
  );
}
