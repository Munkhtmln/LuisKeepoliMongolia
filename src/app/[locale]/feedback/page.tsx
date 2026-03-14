"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

const FEEDBACK_EMAIL = "complaints@example.com";

export default function FeedbackPage() {
  const { t } = useLocale();
  const [, setStatus] = useState<"idle" | "opening" | "error">("idle");
  const [error, setError] = useState("");

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError(t("feedbackPage.form.unavailable"));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const applicantType =
      data.get("applicantType") === "legal"
        ? t("feedbackPage.form.applicantType.legal")
        : t("feedbackPage.form.applicantType.citizen");

    const fullName = (data.get("fullName") as string)?.trim() || "";
    const emailVal = (data.get("email") as string)?.trim() || "";
    const phone = (data.get("phone") as string)?.trim() || "";
    const subject = (data.get("subject") as string)?.trim() || "";
    const content = (data.get("content") as string)?.trim() || "";
    const date = (data.get("date") as string)?.trim() || "";

    const body = [
      `${t("feedbackPage.mail.labels.type")}: ${applicantType}`,
      `${t("feedbackPage.mail.labels.fullName")}: ${fullName}`,
      `${t("feedbackPage.mail.labels.email")}: ${emailVal}`,
      `${t("feedbackPage.mail.labels.phone")}: ${phone}`,
      `${t("feedbackPage.mail.labels.subject")}: ${subject}`,
      `${t("feedbackPage.mail.labels.date")}: ${date}`,
      "",
      `${t("feedbackPage.mail.labels.content")}:`,
      content,
    ].join("\n");

    const mailto = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(
      subject || t("feedbackPage.mail.defaultSubject")
    )}&body=${encodeURIComponent(body)}`;

    setStatus("opening");
    try {
      window.location.href = mailto;
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="flex-1 h-full bg-muted/40 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <section>
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {t("feedbackPage.hero.title")}
            </h1>

            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              {t("feedbackPage.hero.description")}
            </p>

            <h2 className="mt-8 text-base font-semibold text-foreground">
              {t("feedbackPage.requirements.title")}
            </h2>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
              <li>{t("feedbackPage.requirements.items.0")}</li>
              <li>{t("feedbackPage.requirements.items.1")}</li>
              <li>{t("feedbackPage.requirements.items.2")}</li>
            </ul>

            <h2 className="mt-8 text-base font-semibold text-foreground">
              {t("feedbackPage.response.title")}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              {t("feedbackPage.response.description")}
            </p>
          </section>

          {/* Form хувилбар хэрэглэх бол энэ хэсгийн comment-ийг буцааж авч болно */}
          {/* <section>
            <div className="rounded-xl bg-background shadow-sm ring-1 ring-border">
              <form className="space-y-6 p-6 sm:p-8" onSubmit={handleSubmit}>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {t("feedbackPage.form.typeLabel")}
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
                      <span>{t("feedbackPage.form.applicantType.citizen")}</span>
                    </label>
                    <label className="inline-flex items-center gap-2 text-sm text-foreground">
                      <input
                        type="radio"
                        name="applicantType"
                        value="legal"
                        className="h-4 w-4 border-border text-primary focus:ring-primary"
                      />
                      <span>{t("feedbackPage.form.applicantType.legal")}</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-foreground"
                    >
                      {t("feedbackPage.form.fields.fullName")}
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
                        {t("feedbackPage.form.fields.email")}
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
                        {t("feedbackPage.form.fields.phone")}
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
                      {t("feedbackPage.form.fields.subject")}
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
                      {t("feedbackPage.form.fields.content")}
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
                      {t("feedbackPage.form.fields.date")}
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

                <div>
                  <button
                    type="submit"
                    onClick={handleClick}
                    className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {t("feedbackPage.form.submit")}
                  </button>

                  {error && (
                    <p className="mt-2 text-sm text-red-500">{error}</p>
                  )}
                </div>
              </form>
            </div>
          </section> */}

          <section className="flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-xl font-semibold">
                {t("feedbackPage.contact.title")}
              </h2>

              <a
                href="mailto:example@gmail.com"
                className="mt-2 block text-primary underline hover:text-primary/80"
              >
                {t("feedbackPage.contact.email")}
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
