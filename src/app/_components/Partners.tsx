import Image from "next/image";

const row1 = [
  {
    name: "Эрдэнэс Тавантолгой",
    src: "/zurg3.jpg",
  },
  { name: "Тавантолгой ХК", src: "/zurg3.jpg" },
  {
    name: "Energy Resources LLC",
    src: "/zurg3.jpg",
  },
  { name: "SouthGobi Sands", src: "/zurg3.jpg" },
  { name: "Terra Energy", src: "/zurg3.jpg" },
  { name: "Ikh Gobi Energy LLC", src: "/zurg3.jpg" },
];

const row2 = [
  {
    name: "Сэкер Ресорсус Монголиа",
    src: "/zurg3.jpg",
  },
  { name: "MAK", src: "/zurg3.jpg" },
  {
    name: "Bayalag Energy Resource",
    src: "/zurg3.jpg",
  },
];

const row3 = [
  { name: "Эрдэнэт Үйлдвэр ТӨҮГ", src: "/zurg3.jpg" },
  { name: "MEG", src: "/zurg3.jpg" },
  { name: "TTJVCO", src: "/zurg3.jpg" },
];

export default function PartnersSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          {"Хамтрагч байгууллагууд"}
        </h2>

        {/* Row 1 - 6 logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 mb-12">
          {row1.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center w-28 md:w-36 h-20"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={144}
                height={80}
                className="object-contain max-h-20"
              />
            </div>
          ))}
        </div>

        {/* Row 2 - 3 logos */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 mb-12">
          {row2.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center w-40 md:w-56 h-24"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={224}
                height={96}
                className="object-contain max-h-24"
              />
            </div>
          ))}
        </div>

        {/* Row 3 - 3 logos */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 mb-16">
          {row3.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center w-40 md:w-56 h-24"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={224}
                height={96}
                className="object-contain max-h-24"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-foreground font-semibold text-sm md:text-base max-w-3xl mx-auto">
          {
            "Эдгээр компаниудаас гадна 60 гаруй уул, уурхайн комдпаниудтай хамтран ажиллаж байна."
          }
        </p>
      </div>
    </section>
  );
}
