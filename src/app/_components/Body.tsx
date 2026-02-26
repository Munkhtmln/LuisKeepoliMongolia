import Image from "next/image";

export default function Body() {
  return (
    <section className="bg-muted/40 py-12 lg:py-20" aria-label="Танилцуулга">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-6">
          {/* Left: Text Content */}
          <div className="flex flex-col bg-blue-50 px-8 justify-center lg:w-5/12">
            <h2 className="text-balance text-l font-bold leading-tight text-foreground sm:text-xl lg:text-2xl">
              {'"Luis Keepoli Mongolia" ХХК-ийн үйл ажиллагаатай танилцлаа'}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-foreground/70 sm:text-lg">
              {
                'Үндэсний Итгэмжлэлийн төвийн дарга С.Ням-Эрдэнэ, удирдлагууд "Эрдэнэт үйлдвэр" ТӨҮГ-ын Чанар, хяналтын хэлтсийн дарга С.Ганцогт болон лабораториудын эрхлэгч нар "Си Си Ай Си Эм Эн Эйч Кэй" ХХК лабораторийн үйл ажиллагаатай танилцлаа.'
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

          {/* Right: Image Grid */}
          <div className="flex flex-col gap-4 lg:w-7/12">
            {/* Top Large Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
              <Image
                src="/zurg3.jpg"
                alt="CCIC барилга"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
            {/* Bottom Two Images */}
            <div className="flex gap-4">
              <div className="relative aspect-[4/3] w-2/3 overflow-hidden rounded-lg">
                <Image
                  src="/zurg3.jpg"
                  alt="CCIC коридор"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 66vw, 38vw"
                />
              </div>
              <div className="relative aspect-[4/3] w-1/3 overflow-hidden rounded-lg">
                <Image
                  src="/zurg4.jpg"
                  alt="CCIC уулзалт"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 33vw, 20vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
