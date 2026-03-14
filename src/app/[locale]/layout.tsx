import type { Metadata } from "next";
import "../globals.css";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Luis Keepoli Mongolia LLC",
  description: "",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <LocaleProvider initialLocale={locale}>
      <Header />
      <main className="flex-1 h-full">{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
