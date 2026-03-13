import { FlaskConical, Truck, FileCheck } from "lucide-react";

const services = [
  {
    icon: FlaskConical,
    title: "Нүүрсний сорилт шинжилгээний лаборатори",
    description:
      "Нүүрсний сорилт, шинжилгээний лаборатори нь MNS ISO/IEC 17025:2018 стандартын шаардлага хангасан тул Монгол Улсын Үндэсний Итгэмжлэлийн Төвийн даргын ...",
    slug: "coal-testing-laboratory",
  },
  {
    icon: Truck,
    title: "Техникийн хяналтын алба",
    description:
      "Техникийн хяналтын албаны  ажилтнууд нь СХЗГазар болон Монгол Улсын Шинжлэх ухаан, технологийн их сургуулиас 2019-2025 онуудад зохион байгуулагдсан...",
    slug: "technical-control-department",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-muted/40 py-16 px-6 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl text-balance">
          Бидний үйлчилгээ
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground leading-relaxed">
          Аж үйлдвэрийн гинжин хэлхээний холбоос бүрийн хэрэгцээнд тулгуурлан
          үйлчилгээ үзүүлж, илүү найдвартай үйлчилгээг бий болгон ажиллаж байна.
        </p>

        <div className="mt-14 grid grid-cols-1 justify-center gap-10 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center">
              <div className="flex justify-center md:justify-start">
                <service.icon
                  className="h-20 w-20 text-foreground"
                  strokeWidth={1.2}
                />
              </div>
              <h3 className="mt-8 text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed text-justify">
                {service.description}
              </p>
              <a
                href={`/services`}
                className="mt-6 inline-block text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                Дэлгэрэнгүй
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
