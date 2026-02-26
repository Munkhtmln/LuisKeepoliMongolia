import Image from "next/image";

export default function Body2() {
  return (
    <section className="py-12 lg:py-20" aria-label="Итгэмжлэлийн өдөр">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-6">
          {/* Left: Image Grid */}
          <div className="flex flex-col gap-4 lg:w-7/12">
            {/* Top Large Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
              <Image
                src="/zurg3.jpg"
                alt="CCIC баг арга хэмжээнд"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
            {/* Bottom Two Images */}
            <div className="flex gap-4">
              <div className="relative aspect-[4/3] w-1/2 overflow-hidden rounded-lg">
                <Image
                  src="/zurg3.jpg"
                  alt="CCIC үзэсгэлэнгийн майхан"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 29vw"
                />
              </div>
              <div className="relative aspect-[4/3] w-1/2 overflow-hidden rounded-lg">
                <Image
                  src="/zurg3.jpg"
                  alt="Илтгэгч"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 29vw"
                />
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center lg:w-5/12">
            <h2 className="text-balance text-2xl font-bold uppercase leading-tight text-foreground sm:text-xl lg:text-2xl">
              {"ДЭЛХИЙН ИТГЭМЖЛЭЛИЙН ӨДӨР-2025"}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-foreground/70 sm:text-lg">
              {
                '2025.06.08 "Жижиг дунд үйлдвэрлэл эрхлэгчдийн хөгжлийг дэмжинэ" уриан дор зохион байгуулагдаж буй НЭЭЛТТЭЙ ӨДӨРЛӨГТ оролцлоо.'
              }
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Дэлгэрэнгүй
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
