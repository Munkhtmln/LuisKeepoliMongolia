import { NewsCard } from "./NewsCard";

const newsItems = [
  {
    image: "/zurg3.jpg",
    title: "Санамж бичигт гарын үсэг зурлаа",
    description:
      'Үндэсний Итгэмжлэлийн Төв, "Си Си Ай Си Эм Эн Эйч Кэй" ХХК, МонСертф, ISA "Хамтын ажиллагааны санамж бичиг"-т гарын үсэг зурах үйл ажиллагаа',
  },
  {
    image: "/zurg3.jpg",
    title: "Итгэмжлэх хугацааг сунгалаа",
    description:
      "Үндэсний итгэмжлэлийн төвийн даргын 2025 оны А/27 тоот тушаалаар итгэмжлэлийн хугацааг 4 жилээр сунгуулан итгэмжлэлийн гэрчилгээгээ гардан авлаа.",
  },
  {
    image: "/zurg3.jpg",
    title: "CCIC группийн сагсан бөмбөгийн тэмцээнд амжилттай оролцлоо",
    description:
      "CCIC группийн сагсан бөмбөгийн тэмцээнд CCICMNHK LLC-н залуус амжилт гаргалаа.",
  },
];

export default function NewsSection() {
  return (
    <section className="w-full bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left title area */}
          <div className="lg:w-56 shrink-0">
            <h2 className="text-2xl font-bold text-foreground leading-tight">
              {"Мэдээ, мэдээлэл"}
            </h2>
            <div className="mt-3 w-16 h-1 bg-muted-foreground/30" />
          </div>

          {/* News cards grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <NewsCard
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
