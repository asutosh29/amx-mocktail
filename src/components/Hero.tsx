"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Ready for GSAP animations!
      // Example:
      // gsap.from(".hero-title", { y: 50, opacity: 0, duration: 1, ease: "power3.out" });
      // gsap.from(".hero-subtitle", { y: 30, opacity: 0, duration: 1, delay: 0.2, ease: "power3.out" });
      // gsap.from(".hero-btn", { scale: 0.8, opacity: 0, duration: 0.8, delay: 0.4, ease: "back.out(1.7)" });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center sm:py-32 lg:px-8"
    >
      {/* Background glow decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-400 to-indigo-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          GSAP + Next.js Starter
        </div>

        <h1 className="hero-title text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white">
          Master Modern Web <span className="text-emerald-500">Animations</span>
        </h1>

        <p className="hero-subtitle mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Build high-performance, engaging, and silky-smooth animations with GreenSock
          Animation Platform and React.
        </p>

        <div className="hero-cta mt-10 flex items-center justify-center gap-x-6">
          <button
            type="button"
            className="hero-btn rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-colors cursor-pointer"
          >
            Get Started
          </button>
          <a
            href="https://gsap.com/docs/v3/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100 hover:text-emerald-500 transition-colors"
          >
            GSAP Docs <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
