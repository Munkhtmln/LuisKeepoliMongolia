"use client";

export default function ContactPage() {
  return (
    <main className="bg-background py-12 sm:py-16 h-full">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-3xl">
          &quot;Луис кееполи Монголиа&quot; ХХК
        </h1>
        <p className="mt-4 text-sm sm:text-base text-foreground/80">
          Монгол Улс, Улаанбаатар хот, Хан-Уул дүүрэг, 22-р хороо,Зайсангийн ам.
        </p>
        <p className="mt-1 text-sm sm:text-base text-foreground/80">
          Утас: 91915176, 99080016 | И-мэйл: example@mail.com
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-muted/40">
          <div className="relative w-full pb-[56.25%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2676.234077523426!2d106.9029706893311!3d47.87379509699724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693eea86b887d%3A0x291c9681fa13e12!2sAr%20Zaisan%20St%2C%20HUD%20-%2022%20khoroo%2C%20Ulaanbaatar!5e0!3m2!1sen!2smn!4v1773047001180!5m2!1sen!2smn"
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
