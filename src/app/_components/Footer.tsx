"use client";

import { ArrowUp, Youtube, Mail, Phone } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z" />
    </svg>
  );
}

function CICLogo() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="white"
        strokeWidth="4"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r="36"
        stroke="white"
        strokeWidth="3"
        fill="none"
      />
      {/* Arrow on top of circle */}
      <path d="M78 18 L88 8 L82 18 Z" fill="white" />
      <path
        d="M 50 4 A 46 46 0 0 1 85 20"
        stroke="white"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <polygon points="83,12 92,16 84,22" fill="white" />
      {/* CIC text */}
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fill="white"
        fontSize="20"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        CIC
      </text>
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      {/* Main footer section */}
      <div className="bg-[#3044a8] text-white px-6 py-10 md:px-16 lg:px-24">
        <div className="mb-6">
          <CICLogo />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-white">
            {'"Luis Keepoli Mongolia" ХХК'}
          </h3>
          <p className="text-sm leading-relaxed text-white/90 max-w-lg">
            {"Монгол улс, Улаанбаатар хот, Хан-Уул дүүрэг 3-р"}
            <br />
            {"хороо, Үйлдвэрийн баруун бүс /17070/ гудамж, 51-5"}
            <br />
            {"тоот"}
          </p>
          <p className="text-sm text-white/90 flex items-center gap-2">
            <Phone className="h-4 w-4" />
            {"Утас: 76101085"}
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#263280] text-white px-6 py-4 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/80">
          {
            'Copyright ©2025 "Luis Keepoli Mongolia" ХХК, Бүх эрх хуулиар хамгаалагдсан.'
          }
        </p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="YouTube"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-white/80 hover:text-white transition-colors"
            >
              <TikTokIcon className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <span className="text-xs text-white/60">{"Тоолуур 1113"}</span>

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
