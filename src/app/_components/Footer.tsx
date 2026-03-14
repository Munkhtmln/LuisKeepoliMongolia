"use client";

import { ArrowUp, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Footer() {
  const { t } = useLocale();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      {/* Main footer */}
      <div className="bg-[#3044a8] text-white px-6 py-10 md:px-16 lg:px-24">
        <div className="mb-6">
          <Image
            src="/logo.jpg"
            alt="LKM Logo"
            width={100}
            height={32}
            className="h-8 w-auto min-w-[80px] pr-14 object-contain sm:h-9 lg:h-10 lg:min-w-[100px]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-white">
            {t("footer.company")}
          </h3>

          <p className="max-w-lg text-sm leading-relaxed text-white/90">
            {t("footer.addressLine1")}
            <br />
            {t("footer.addressLine2")}
          </p>

          <p className="flex items-center gap-2 text-sm text-white/90">
            <Phone className="h-4 w-4" />
            {t("footer.phoneLabel")}: {t("footer.phone")}
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col items-center justify-between gap-4 bg-[#263280] px-6 py-4 text-white md:flex-row md:px-16 lg:px-24">
        <p className="text-xs text-white/80">{t("footer.copyright")}</p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${t("footer.email")}`}
              aria-label="Email"
              className="text-white/80 transition-colors hover:text-white"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label={t("footer.scrollTop")}
            className="rounded bg-white/20 p-2 transition-colors hover:bg-white/30"
          >
            <ArrowUp className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
