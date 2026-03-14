export interface NewsItem {
  slug: string;
  image: string;
  title: string;
  description: string;
}

export const newsItems: NewsItem[] = [
  {
    slug: "Medee-medeelel",
    image: "/surgalt.jpg",
    title: "Сургалтанд хамрагдсан тухай мэдээлэл",
    description:
      "Лабораторийн ажилтанууд “Эко бест химистри” ХХК-ийн зохион байгуулсан химийн бодистой харьцах ажиллагсадыг чадавхижуулах, техникийн хяналтын ажилтануудын ажлын ур чадварыг дээшлүүлэх   сургалтанд тус тус хамрагдав. ",
  },
  {
    slug: "itgemjlel",
    image: "/unnamed.jpg",
    title: "Итгэмжлэл",
    description:
      "Монгол Улсын Үндэсний Итгэмжлэлийн Төвийн дарга итгэмжлэлийн гэрчилгээ гардуулав.",
  },
  {
    slug: "Nuursnii-shinjilgeenii-tuhai",
    image: "/shagnal.jpg",
    title: "Шагнал гардуулалт",
    description:
      "Хятад улсын Бугат хотод “Луис кееполи туршилт, технологи” ХХК -ийн зохион байгуулсан нийт ажилтануудын 2025 оны ажил дүгнэх ёслолын арга хэмжээнд оролцож “Луис кееполи Монголиа” ХХК-ийн захирал Ц.Цогтгэрэл оны тэргүүний ажилтанаар шалгарав.",
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}
