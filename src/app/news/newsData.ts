export interface NewsItem {
  slug: string;
  image: string;
  title: string;
  description: string;
}

export const newsItems: NewsItem[] = [
  {
    slug: "sanamj-bichig-gariin-useg",
    image: "/zurg3.jpg",
    title: "Санамж бичигт гарын үсэг зурлаа",
    description:
      'Үндэсний Итгэмжлэлийн Төв, "Си Си Ай Си Эм Эн Эйч Кэй" ХХК, МонСертф, ISA "Хамтын ажиллагааны санамж бичиг"-т гарын үсэг зурах үйл ажиллагаа',
  },
  {
    slug: "itgemjleh-hugatsaa-sungalaa",
    image: "/zurg3.jpg",
    title: "Итгэмжлэх хугацааг сунгалаа",
    description:
      "Үндэсний итгэмжлэлийн төвийн даргын 2025 оны А/27 тоот тушаалаар итгэмжлэлийн хугацааг 4 жилээр сунгуулан итгэмжлэлийн гэрчилгээгээ гардан авлаа.",
  },
  {
    slug: "basketball-temtseend-amjilttai-oroltssloo",
    image: "/zurg3.jpg",
    title: "CCIC группийн сагсан бөмбөгийн тэмцээнд амжилттай оролцлоо",
    description:
      "CCIC группийн сагсан бөмбөгийн тэмцээнд CCICMNHK LLC-н залуус амжилт гаргалаа.",
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}
