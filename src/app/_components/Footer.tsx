"use client";

import { ArrowUp, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      {/* Main footer section */}
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
            {'"Luis Keepoli Mongolia" ХХК'}
          </h3>
          <p className="text-sm leading-relaxed text-white/90 max-w-lg">
            {"Монгол улс, Улаанбаатар хот, Хан-Уул дүүрэг 22-р"}
            <br />
            {"хороо,Зайсангийн ам."}
          </p>
          <p className="text-sm text-white/90 flex items-center gap-2">
            <Phone className="h-4 w-4" />
            {"Утас: 91915176, 99080016"}
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#263280] text-white px-6 py-4 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/80">
          {
            'Copyright ©2026 "Luis Keepoli Mongolia" ХХК, Бүх эрх хуулиар хамгаалагдсан.'
          }
        </p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Email"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="bg-white/20 hover:bg-white/30 transition-colors rounded p-2"
          >
            <ArrowUp className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
