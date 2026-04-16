"use client";

import Image from "next/image";

// Placeholder fotky pro galerii (nahraďte skutečnými)
const galleryPlaceholders = [
  { id: 1, alt: "Svatební pár – romantický portrét" },
  { id: 2, alt: "Novomanželé na obřadu" },
  { id: 3, alt: "Detail – snubní prsteny" },
  { id: 4, alt: "Svatební párty – reportáž" },
  { id: 5, alt: "Romantický západ slunce" },
  { id: 6, alt: "Spontánní okamžik na svatbě" },
];

export default function WeddingSection() {
  return (
    <section
      id="svatby"
      className="section-light py-24 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-24">
          <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-4 font-body">
            Kapitola I
          </p>
          <h2 className="font-display text-5xl lg:text-6xl font-light italic text-[#1A1A1A] leading-tight mb-6">
            Váš příběh, <br />
            <span className="font-semibold not-italic">zachycený navždy</span>
          </h2>
          <div className="w-12 h-px bg-[#B8956A] mb-6" />
          <p className="text-[#1A1A1A]/70 font-body text-base leading-relaxed">
            Každá svatba je jedinečný příběh plný emocí, smíchu a lásky.
            Zaměřuji se na autentické reportáže a uvolněné portréty v přirozeném
            světle — okamžiky, které byste jinak nestihli zachytit.
          </p>
        </div>

        {/* Galerie — asymetrický grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4 mb-16">
          {galleryPlaceholders.map((item, index) => (
            <div
              key={item.id}
              className={`
                relative overflow-hidden group cursor-pointer
                ${index === 0 ? "col-span-2 md:col-span-1 row-span-2 aspect-[3/4]" : "aspect-square"}
              `}
            >
              {/* Placeholder šedý obdélník */}
              <div className="absolute inset-0 bg-[#E8E2D9] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 border border-[#B8956A]/40 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#B8956A]"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-[#B8956A]/60 text-xs font-body tracking-wider">
                    FOTO
                  </p>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/20 transition-colors duration-400" />
            </div>
          ))}
        </div>

        {/* Zonerama embed placeholder */}
        <div className="bg-[#F0EBE3] border border-[#B8956A]/20 rounded-sm p-8 mb-12 text-center">
          <p className="text-[#B8956A] text-xs tracking-[0.25em] uppercase mb-3 font-body">
            Plná galerie
          </p>
          <p className="text-[#1A1A1A]/50 font-body text-sm mb-4">
            {/* Nahradte skutečným Zonerama embed kódem */}
            Zde bude vložena galerie ze Zonerama — doplňte ID vašeho alba.
          </p>
          <code className="text-xs text-[#B8956A]/70 font-mono">
            {`<!-- Zonerama embed: https://www.zonerama.com/Embed/[ID-ALBA]?type=gallery -->`}
          </code>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href="#kontakt"
            className="px-8 py-3.5 bg-[#1A1A1A] text-white font-body text-sm font-medium tracking-[0.12em] uppercase hover:bg-[#B8956A] transition-colors duration-300"
          >
            Rezervovat svatbu
          </a>
          <div>
            <p className="text-[#1A1A1A]/60 font-body text-sm">
              Termíny se rychle obsazují
            </p>
            <p className="text-[#1A1A1A]/40 font-body text-xs mt-0.5">
              Doporučuji rezervovat 6–12 měsíců předem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
