"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroSplash() {
  const [phase, setPhase] = useState<"enter" | "visible" | "exit" | "done">(
    "enter"
  );
  const [textPhase, setTextPhase] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("visible"), 300);
    const t2 = setTimeout(() => setTextPhase(true), 900);
    const t3 = setTimeout(() => setPhase("exit"), 3800);
    const t4 = setTimeout(() => setPhase("done"), 4600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (phase === "done") return null;

  const transition = "all 1s cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a1628",
        opacity: phase === "exit" ? 0 : 1,
        transition: "opacity 0.8s ease",
      }}
    >
      {/* LEFT text — travels from left:0 to beside logo */}
      <div
        className="splash-text"
        style={{
          position: "absolute",
          top: "50%",
          transition,
          transform: "translateY(-50%)",
          left: textPhase ? "calc(45% - 220px)" : 0,
          opacity: textPhase ? 1 : 0.6,
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: 600,
            whiteSpace: "wrap",
            letterSpacing: "0.04em",
          }}
        >
          LuisKeepoliMongolia
        </p>
      </div>

      {/* CENTER logo */}
      <div
        style={{
          position: "relative",
          width: 96,
          height: 96,
          zIndex: 10,
          transition: "opacity 0.7s ease, transform 0.7s ease",
          opacity: phase === "enter" ? 0 : 1,
          transform: phase === "enter" ? "scale(0.75)" : "scale(1)",
          flexShrink: 0,
        }}
      >
        <Image
          src="/logo.jpg"
          alt="Лого"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* RIGHT text — travels from right:0 to beside logo */}
      <div
        className="splash-text"
        style={{
          position: "absolute",
          top: "50%",
          transition,
          transform: "translateY(-50%)",
          right: textPhase ? "calc(42% - 220px)" : 0,
          opacity: textPhase ? 1 : 0.6,
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: 600,
            whiteSpace: "wrap",
            letterSpacing: "0.04em",
          }}
        >
          Луис кееполи монголиа
        </p>
      </div>

      {/* BOTTOM text — travels from bottom:0 to below logo */}
      <div
        className="splash-text"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          transition: `${transition.replace("all", "bottom")}, opacity 1s ease`,
          transitionDelay: "0.1s",
          bottom: textPhase ? "calc(45% - 110px)" : 0,
          opacity: textPhase ? 1 : 0.6,
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: 600,
            whiteSpace: "wrap",
            letterSpacing: "0.04em",
          }}
        >
          路易·基波利蒙古
        </p>
      </div>

      {/* Progress bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 2,
          background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
          animation: "splashProgress 3s linear forwards",
          animationDelay: "0.5s",
          width: 0,
        }}
      />

      <style>{`
        @keyframes splashProgress {
          from { width: 0% }
          to { width: 100% }
        }
        @media (max-width: 640px) {
          .splash-text { display: none; }
        }
      `}</style>
    </div>
  );
}
