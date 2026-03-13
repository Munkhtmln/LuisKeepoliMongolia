import Image from "next/image";
import Link from "next/link";

export default function Body() {
  return (
    <section className="bg-muted/40 py-12 lg:py-20" aria-label="Танилцуулга">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-6">
          {/* Left: Text Content */}
          <div className="flex flex-col bg-blue-50 px-8 p-5 justify-center lg:w-5/12">
            <h2 className="text-balance text-l font-bold leading-tight text-foreground sm:text-xl lg:text-2xl">
              {"“Луис кееполи Монголиа” ХХК-ийн товч танилцуулга"}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-foreground/70 sm:text-lg">
              &quot;“Луис кееполи Монголиа” ХХК (цаашид “Манай компани” гэх) нь
              Өвөр Монголын ”Луис кееполи туршилт, технологи” ХХК-ийн 100%
              хөрөнгө оруулалттай, Өвөр Монголын анхны хил дамнасан шинжилгээний
              эрх бүхий байгууллага бөгөөд...&quot;
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Дэлгэрэнгүй
              </Link>
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="flex flex-col gap-4  lg:w-7/12">
            {/* Top Large Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
              <Image
                src="/DSCN0642.JPG"
                alt="LuisKM "
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
            {/* Bottom Two Images */}
            {/* <div className="flex gap-4">
              <div className="relative aspect-[4/3] w-2/3 overflow-hidden rounded-lg">
                <Image
                  src="/bidnii-tuhai1.JPG"
                  alt="LuisKM "
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 66vw, 38vw"
                />
              </div>
              <div className="relative aspect-[4/3] w-1/3 overflow-hidden rounded-lg">
                <Image
                  src="/bidnii-tuhai2.JPG"
                  alt="LuisKM "
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 33vw, 20vw"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
