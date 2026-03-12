export interface NewsItem {
  slug: string;
  image: string;
  title: string;
  description: string;
}

export const newsItems: NewsItem[] = [
  // {
  //   slug: "sanamj-bichig-gariin-useg",
  //   image: "/zurg3.jpg",
  //   title: "Сургалтанд хамрагдлаа",
  //   description: "",
  // },
  {
    slug: "itgemjlel",
    image: "/zurg3.jpg",
    title: "Итгэмжлэл",
    description:
      "Хяналтын ажил эрхэлдэг төрөл бүрийн байгууллагын үйл ажиллагаанд тавих шаардлага”  MNS ISO/IEC 17020 стандартын дагуу Монгол Улсын Үндэсний Итгэмжлэлийн Төвийн даргын 2025 оны 09-р сарын 03-ны өдрийн А/204 тоот тушаалаар итгэмжлэгдэн техникийн хяналтын чиглэлээр  үйл ажиллагаа явуулж байна.",
  },
  // {
  //   slug: "basketball-temtseend-amjilttai-oroltssloo",
  //   image: "/zurg3.jpg",
  //   title: "CCIC группийн сагсан бөмбөгийн тэмцээнд амжилттай оролцлоо",
  //   description:
  //     "CCIC группийн сагсан бөмбөгийн тэмцээнд CCICMNHK LLC-н залуус амжилт гаргалаа.",
  // },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}
