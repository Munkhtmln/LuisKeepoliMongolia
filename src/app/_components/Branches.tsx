import Image from "next/image";
import Link from "next/link";

const branches = [
  {
    image: "/zurg3.jpg",
    title: "Овоот салбар лаборатори",
    description:
      '"СИ СИ АЙ СИ ЭМ ЭН ЭЙЧ КЭЙ" ХХК-ийн Овоот салбар лаборатори нь MNS ISO/IEC 17025:2018 стандарт буюу "Сорилтын болон шалгалт тохируулгын лабораторид тавих шаардлага"-ыг бүрэн хангаж, итгэмжлэлийн хүрээнд нүүрснээс дээж авах, дээж бэлтгэх, нийт нүүрсний чанарын 16 төрлийн үзүүлэлтийг 12 стандартын дагуу тодорхойлон ажиллаж байна.',
  },
  {
    image: "/zurg3.jpg",
    title: "Цогт цэций салбар лаборатори",
    description:
      "Итгэмжлэлийн хүрээнд нүүрснээс дээж авах, дээж бэлтгэх, нийт нүүрсний чанарын 8 төрлийн үзүүлэлтийг 6 стандартын дагуу тодорхойлон ажиллаж байна.",
  },
  {
    image: "/zurg3.jpg",
    title: "Хотгор салбар лаборатори",
    description:
      "Итгэмжлэлийн хүрээнд нүүрснээс дээж авах, дээж бэлтгэх, нийт нүүрсний чанарын 15 төрлийн үзүүлэлтийг 12 стандартын дагуу тодорхойлон ажиллаж байна.",
  },
];

export default function BranchesSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          Салбарууд
        </h2>
        {/* Gold underline */}
        <div className="flex justify-center mt-3 mb-6">
          <div className="w-16 h-1 rounded-full bg-amber-400" />
        </div>
        {/* Subtitle */}
        <p className="text-center text-muted-foreground mb-12">
          Орон нутгийн лабораторийн алба
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-background rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={branch.image}
                  alt={branch.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-foreground text-center mb-4">
                  {branch.title}
                </h3>
                <p className="text-sm text-muted-foreground text-justify leading-relaxed flex-1">
                  {branch.description}
                </p>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm mt-4 inline-block"
                >
                  Дэлгэрэнгүй
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
