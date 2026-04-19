"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[calc(100svh-4rem)] lg:h-[calc(100svh-5rem)] min-h-[560px] sm:min-h-[620px] w-full overflow-hidden">
      {/* Split background: světlá (levá/horní) a tmavá (pravá/dolní) */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        {/* Světlá polovina — Wedding */}
        <div className="hero-half-left hero-half-top relative flex-1 overflow-hidden">
          <Image
            src="/images/wedding-hero.webp"
            alt="Svatební fotografie – Miroslav Jurka"
            fill
            priority
            className="object-cover object-[center_30%] md:object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Overlay pro čitelnost textu */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Tmavá polovina — IRIS */}
        <div className="hero-half-right hero-half-bottom relative flex-1 overflow-hidden">
          <Image
            src="/images/iris-hero.webp"
            alt="IRIS fotografie oční duhovky – Miroslav Jurka"
            fill
            priority
            className="object-cover object-[center_40%] md:object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Tmavý overlay pro kosmický efekt */}
          <div className="absolute inset-0 bg-[#0A0A0A]/10" />
        </div>
      </div>

      {/* Centrální vigneta — ztmaví střed kde sedí text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 50%, rgba(0,0,0,0.45) 0%, transparent 100%)",
        }}
      />


      {/* Centrovaný obsah */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
        {/* Horní eyebrow */}
        <p
          className="text-white text-[11px] sm:text-sm lg:text-base tracking-[0.25em] sm:tracking-[0.35em] uppercase mb-3 sm:mb-5 font-body"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.8)" }}
        >
          Profesionální fotograf
        </p>

        {/* Jméno — přes obě poloviny */}
        <h1
          className="font-display text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl text-white leading-none mb-4 sm:mb-6 lg:mb-8"
          style={{ textShadow: "0 2px 32px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)" }}
        >
          <span className="block font-light italic mb-2">Miroslav</span>
          <span className="block font-semibold">Jurka</span>
        </h1>

        {/* Dělicí zlatá linka */}
        <div className="w-14 sm:w-16 h-px bg-[#C9A961] mb-4 sm:mb-6 lg:mb-8 shadow-lg" />

        {/* Subtitle */}
        <p
          className="text-white font-body text-[11px] sm:text-sm lg:text-base tracking-[0.15em] sm:tracking-[0.18em] uppercase mb-5 sm:mb-8 lg:mb-10"
          style={{ textShadow: "0 1px 16px rgba(0,0,0,0.8)" }}
        >
          Svatební fotografie&nbsp;&nbsp;·&nbsp;&nbsp;IRIS Makrofotografie
        </p>

        {/* Inline animace pro nekonečný odlesk */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes infiniteShine {
            0% { left: -150%; }
            25% { left: 200%; }
            100% { left: 200%; }
          }
          .animate-infinite-shine {
            animation: infiniteShine 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
        `}} />

        {/* CTA tlačítka */}
        <div className="flex flex-col items-center gap-2.5 sm:gap-4 lg:gap-5 mt-2 sm:mt-4 lg:mt-8 w-full max-w-[240px] sm:max-w-[280px] lg:max-w-xs mx-auto">
          <a
            href="#kontakt"
            className="group relative flex items-center justify-center gap-2.5 w-full px-4 py-2.5 sm:px-6 sm:py-3.5 lg:px-8 lg:py-4 bg-[#C9A961]/10 backdrop-blur-md border border-[#C9A961] text-[#C9A961] font-body text-xs sm:text-sm lg:text-base font-bold tracking-[0.12em] sm:tracking-[0.15em] uppercase transition-all duration-300 overflow-hidden rounded-sm shadow-[0_0_15px_rgba(201,169,97,0.3)] hover:bg-[#C9A961]/20 hover:shadow-[0_0_25px_rgba(201,169,97,0.6)] hover:-translate-y-1 whitespace-nowrap"
          >
            {/* Nekonečný Shine efekt */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-0 -left-[150%] h-full w-[120%] -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-infinite-shine" />
            </div>

            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="relative z-10 transition-transform duration-300 group-hover:scale-110"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            <span className="relative z-10">Rezervovat termín</span>
          </a>

          <a
            href="#portfolio"
            className="group relative flex items-center justify-center gap-2.5 w-full px-4 py-2.5 sm:px-6 sm:py-3.5 lg:px-8 lg:py-4 border border-white/60 text-white font-body text-xs sm:text-sm lg:text-base font-bold tracking-[0.12em] sm:tracking-[0.15em] uppercase bg-white/10 backdrop-blur-md transition-all duration-300 rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:border-[#C9A961]/80 hover:bg-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:-translate-y-1 whitespace-nowrap"
          >
            Portfolio
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1 group-hover:text-[#C9A961]"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>


    </section>
  );
}
