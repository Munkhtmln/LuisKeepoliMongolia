import Image from "next/image";

export default function FeaturedArticle() {
  return (
    <section className="w-full bg-muted">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Left image */}
          <div className="lg:w-1/2 shrink-0">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/zurg3.jpg"
                alt="Байгууллагын аварга шалгаруулах спортын 6 төрөлт тэмцээн"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-foreground text-center leading-tight mb-2">
              {'"БАЙГУУЛЛАГЫН АВАРГА ШАЛГАРУУЛАХ"'}
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-foreground text-center leading-tight mb-6">
              {"СПОРТЫН 6 ТӨРӨЛТ ТЭМЦЭЭН"}
            </h3>
            <p className="text-sm md:text-base text-foreground leading-relaxed text-justify flex-1 mb-8">
              {
                "Ажилчдын дунд нөхөрсөг, хамтач уур амьсгал бүрдүүлэх; чөлөөт цагийг зөв зохистой үр бүтээлтэй өнгөрүүлэх; биеийн тамир спортод өргөнөөр хамруулж, спортод хандах идэвх сонирхлыг өрнүүлэх; бие бялдрыг хөгжүүлэх, эрүүл аж төрөх ёсыг хэвшүүлэх; тамирчдын ур чадварыг дээшлүүлэх зорилготойгоор байгууллагын аварга шалгаруулах 6 төрөлт анхдугаар тэмцээн 2025 оны 05 сарын 09-өөс 11-ний өдрүүдэд амжилттай зохион байгуулагдлаа."
              }
            </p>
            <div className="flex justify-center">
              <button className="px-10 py-3 bg-foreground text-background text-sm font-medium rounded-sm hover:bg-foreground/90 transition-colors cursor-pointer">
                {"Дэлгэрэнгүй"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
