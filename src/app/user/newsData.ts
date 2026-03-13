export interface NewsItem {
  slug: string;
  image: string;
  title: string;
  description: string;
}

export const newsItems: NewsItem[] = [
  {
    slug: "Medee-medeelel",
    image: "/zurg3.jpg",
    title: "Сургалтанд хамрагдсан тухай мэдээлэл",
    description:
      "Лабораторийн ажилтанууд “Эко бест химистри” ХХК-ийн зохион байгуулсан химийн бодистой харьцах ажиллагсадыг чадавхижуулах, техникийн хяналтын ажилтануудын ажлын ур чадварыг дээшлүүлэх   сургалтанд тус тус хамрагдав. ",
  },
  {
    slug: "itgemjlel",
    image: "/zurg3.jpg",
    title: "Итгэмжлэл",
    description:
      "Хяналтын ажил эрхэлдэг төрөл бүрийн байгууллагын үйл ажиллагаанд тавих шаардлага”  MNS ISO/IEC 17020 стандартын дагуу Монгол Улсын Үндэсний Итгэмжлэлийн Төвийн даргын 2025 оны 09-р сарын 03-ны өдрийн А/204 тоот тушаалаар итгэмжлэгдэн техникийн хяналтын чиглэлээр  үйл ажиллагаа явуулж байна.",
  },
  {
    slug: "Nuursnii-shinjilgeenii-tuhai",
    image: "/zurg3.jpg",
    title: "Нүүрсний шинжилгээний тухай товч мэдээлэл",
    description:
      "Бид нүүрсний шинжилгээний цогц үйлчилгээгээр таны үйл ажиллагааны чанар, гүйцэтгэл, үр ашиг, зохицуулалтын шаардлагад нийцсэн шийдвэр гаргахад шаардлагатай гол мэдээллийг өгдөг.",
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}
