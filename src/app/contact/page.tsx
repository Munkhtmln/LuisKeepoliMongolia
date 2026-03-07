"use client";

import Header from "../_components/Header";
import Footer from "../_components/Footer";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <main className="bg-background py-12 sm:py-16">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-3xl">
            &quot;Си Си Ай Си Эм Эн Эйч Кэй&quot; ХХК
          </h1>
          <p className="mt-4 text-sm sm:text-base text-foreground/80">
            Монгол Улс, Улаанбаатар хот, Хан-Уул дүүрэг, 3-р хороо, Улаанчулуутын
            баруун зүгт, /ТЭЦ-4/ үйлдвэрээс 5.5 км
          </p>
          <p className="mt-1 text-sm sm:text-base text-foreground/80">
            Утас: 76101885
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-muted/40">
            <div className="relative w-full pb-[20%] sm:pb-[25%] md:pb-[28%] lg:pb-[22%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.788993796271!2d106.84000000000002!3d47.88600000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z4KSu4KS-4KS14KSw4KS_4KSV4KS-4KSC4KS2IOCkquCksOCkueCkqOCkv-Ckvg!5e0!3m2!1smn!2smn!4v1700000000000"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
                aria-label="Байршлын газрын зураг"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

