"use client";

import { useState } from "react";

const FEEDBACK_EMAIL = "complaints@example.com";

export default function FeedbackPage() {
  const [, setStatus] = useState<"idle" | "opening" | "error">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const applicantType = data.get("applicantType") === "legal" ? "Өргөдөл хуулийн этгээд" : "Өргөдөл иргэн";
    const fullName = (data.get("fullName") as string)?.trim() || "";
    const emailVal = (data.get("email") as string)?.trim() || "";
    const phone = (data.get("phone") as string)?.trim() || "";
    const subject = (data.get("subject") as string)?.trim() || "";
    const content = (data.get("content") as string)?.trim() || "";
    const date = (data.get("date") as string)?.trim() || "";

    const body = [
      `Өргөдөл илгээх төрөл: ${applicantType}`,
      `Өргөдөл гаргагчийн овог нэр: ${fullName}`,
      `Цахим шуудан: ${emailVal}`,
      `Утасны дугаар: ${phone}`,
      `Өргөдлийн товч утга: ${subject}`,
      `Өргөдөл гаргасан огноо: ${date}`,
      "",
      "Өргөдлийн агуулга:",
      content,
    ].join("\n");

    const mailto = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(subject || "Өргөдөл / Гомдол")}&body=${encodeURIComponent(body)}`;
    setStatus("opening");
    try {
      window.location.href = mailto;
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="bg-muted/40 py-16 h-full flex-1">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          {/* Left: instructions */}
          <section>
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              САНАЛ, ӨРГӨДӨЛ, ГОМДОЛ ХҮЛЭЭН АВАХ
            </h1>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              &quot;Си Си Ай Си Эм Эн Кэй&quot; ХХК‑ийн лабораторийн үйл ажиллагаа
              болон лабораторийн сорил шинжилгээний ажлын чанар, бусад асуудлаар
              лабораторийн удирдлага, албаны тушаалтанд хандаж гаргах санал,
              хүсэлт, гомдол, өргөдлийг хүлээн авч шийдвэрлэхэд зориулагдана.
            </p>

            <h2 className="mt-8 text-base font-semibold text-foreground">
              Өргөдөл, гомдол тавих шаардлага
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
              <li>
                Иргэн өргөдөл, гомдолд гардаж өгч буй, эсхүл цахим шуудангийн хаяг,
                утасны дугаараа тодорхой бичиж, гарын үсэг зурна.
              </li>
              <li>
                Өргөдөл, гомдолд дурдсан асуудал бодит, баримтад үндэслэгдсэн,
                баримт бичгийг хавсаргасан байх нь зүйтэй.
              </li>
              <li>Өргөдөл, гомдлыг ил тодорхой, гаргацтай бичсэн байна.</li>
            </ul>

            <h2 className="mt-8 text-base font-semibold text-foreground">
              Өргөдөл, гомдлыг шийдвэрлэх, хариу өгөх хугацаа
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              Санал гомдлыг хуулийн хугацаанд буюу 30 хоногт багтаан шийдвэрлэнэ.
              Зайлшгүй тохиолдолд 15 хоногоор нэг удаа сунгаж болох ба сунгасан
              тухай өргөдөл гаргагчид мэдэгдэнэ. Аливаа санал гомдлыг орж ирсэн өдрөөс
              эхлэн бүртгэн авч архивын сан хөмрөгт хамгийн багадаа 3 жилийн
              хугацаанд хадгална.
            </p>
          </section>

          {/* Right: form */}
          <section>
            <div className="rounded-xl bg-background shadow-sm ring-1 ring-border">
              <form
                className="space-y-6 p-6 sm:p-8"
                onSubmit={handleSubmit}
              >
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Өргөдөл илгээх төрөл
                  </p>
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-6">
                    <label className="inline-flex items-center gap-2 text-sm text-foreground">
                      <input
                        type="radio"
                        name="applicantType"
                        value="citizen"
                        defaultChecked
                        className="h-4 w-4 border-border text-primary focus:ring-primary"
                      />
                      <span>Өргөдөл иргэн</span>
                    </label>
                    <label className="inline-flex items-center gap-2 text-sm text-foreground">
                      <input
                        type="radio"
                        name="applicantType"
                        value="legal"
                        className="h-4 w-4 border-border text-primary focus:ring-primary"
                      />
                      <span>Өргөдөл хуулийн этгээд</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-foreground"
                    >
                      Өргөдөл гаргагчийн овог нэр
                    </label>
                    <textarea
                      id="fullName"
                      name="fullName"
                      rows={2}
                      className="block w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground"
                      >
                        Цахим шуудан
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground"
                      >
                        Утасны дугаар
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="block w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground"
                    >
                      Өргөдлийн товч утга
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="block w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="content"
                      className="block text-sm font-medium text-foreground"
                    >
                      Өргөдлийн агуулга
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      rows={4}
                      className="block w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-foreground"
                    >
                      Өргөдөл гаргасан огноо
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="block w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Өргөдөл илгээх
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
