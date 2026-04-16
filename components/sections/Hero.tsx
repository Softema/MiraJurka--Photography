"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Split background: světlá (levá/horní) a tmavá (pravá/dolní) */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        {/* Světlá polovina — Wedding */}
        <div className="relative flex-1 overflow-hidden">
          <Image
            src="/images/wedding-hero.webp"
            alt="Svatební fotografie – Miroslav Jurka"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Jemný světlý overlay */}
          <div className="absolute inset-0 bg-[#FAF7F2]/25" />
        </div>

        {/* Tmavá polovina — IRIS */}
        <div className="relative flex-1 overflow-hidden">
          <Image
            src="/images/iris-hero.webp"
            alt="IRIS fotografie oční duhovky – Miroslav Jurka"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Tmavý overlay pro kosmický efekt */}
          <div className="absolute inset-0 bg-[#0A0A0A]/40" />
        </div>
      </div>

      {/* Dělicí linka uprostřed */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="hidden md:block w-px h-full bg-gradient-to-b from-transparent via-white/60 to-transparent" />
        <div className="md:hidden h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>

      {/* Centrovaný obsah */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        {/* Horní eyebrow */}
        <p className="text-white/80 text-xs tracking-[0.3em] uppercase mb-4 drop-shadow-lg font-body">
          Profesionální fotograf
        </p>

        {/* Jméno — přes obě poloviny */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic text-white drop-shadow-2xl leading-none mb-2">
          Miroslav
        </h1>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white drop-shadow-2xl leading-none mb-8">
          Jurka
        </h1>

        {/* Dělicí zlatá linka */}
        <div className="w-16 h-px bg-[#C9A961] mb-8" />

        {/* Subtitle */}
        <p className="text-white/90 font-body text-sm md:text-base tracking-[0.15em] uppercase mb-10 drop-shadow-lg">
          Svatební fotografie&nbsp;&nbsp;·&nbsp;&nbsp;IRIS Makrofotografie
        </p>

        {/* CTA tlačítka */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#kontakt"
            className="px-8 py-3.5 bg-[#C9A961] text-[#0A0A0A] font-body text-sm font-medium tracking-[0.12em] uppercase hover:bg-[#D4AF85] transition-colors duration-300"
          >
            Rezervovat termín
          </a>
          <a
            href="#svatby"
            className="px-8 py-3.5 border border-white/60 text-white font-body text-sm tracking-[0.12em] uppercase hover:bg-white/10 transition-colors duration-300"
          >
            Prohlédnout portfolio
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-xs tracking-[0.2em] uppercase font-body">Scroll</span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className="text-white/60"
        >
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8" cy="8" r="2" fill="currentColor" className="animate-[scrollDot_2s_ease-in-out_infinite]" />
        </svg>
      </div>
    </section>
  );
}
