"use client";

export default function ContactPage() {
  return (
    <main className="bg-background py-12 sm:py-16 h-full">
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
          <div className="relative w-full pb-[56.25%]">
            <iframe
              src="https://maps.google.com/maps?q=47.8769,106.7382&z=14&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
              aria-label="Байршлын газрын зураг"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

