import { FlaskConical, Truck, FileCheck } from "lucide-react";

const services = [
  {
    icon: FlaskConical,
    title: "Лабораторийн шинжилгээ",
    description:
      'MNS ISO/IEC 17025:2018 "Сорилтын болон шалгалт тохируулгын лабораторийн чадавхид тавих ерөнхий шаардлага"-ыг хангаж итгэмжлэгдсэн лаборатори нь Монгол Улсын болон хятад, олон улсын стандарт, арга аргачлалын дагуу нүүрс, газрын тос болон эрдсийн 74 нэр төрлийн шинжилгээг хийж гүйцэтгэж байна.',
  },
  {
    icon: Truck,
    title: "Техникийн хяналтын үйлчилгээ",
    description:
      'MNS ISO/IEC 17020:2013 "Тохирлын үнэлгээ. Хяналтын ажил эрхэлдэг төрөл бүрийн байгууллагын ажиллагаанд тавих шаардлага"-ыг хангаж итгэмжлэгдсэн Хяналтын алба нь олон улсын стандарт, арга аргачлалын дагуу гэрээт байгууллагын талбай, байршилд нүүрс, зэсийн баяжмалын ачилт, буулгалт, жин тооны хэмжээний техникийн хяналтыг гүйцэтгэж байна.',
  },
  {
    icon: FileCheck,
    title: "Баталгаажуулалтын үйлчилгээ",
    description:
      'Баталгаажуулалтын алба нь MNS ISO/IEC 17021:2015 "Тохирлын үнэлгээ. Менежментийн тогтолцооны аудит болон баталгаажуулалтыг гүйцэтгэх байгууллагад тавих шаардлага" хангасан менежментийн тогтолцооны баталгаажуулалтын үйл ажиллагаа эхлүүлэхээр холбогдох бэлтгэлээ хангаж байна.',
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

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col">
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
                href="#"
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
