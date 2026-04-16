"use client";

import Image from "next/image";

const irisFeatures = [
  {
    icon: "◎",
    title: "Unikátní struktura",
    desc: "Každá duhovka je jako otisk prstu – dokonale jedinečná.",
  },
  {
    icon: "✦",
    title: "Makro preciznost",
    desc: "Snímáme detaily, které pouhým okem nikdy neuvidíte.",
  },
  {
    icon: "◈",
    title: "Umělecký portrét",
    desc: "Výsledkem je zarámovaný tisk hodný výstavní galerie.",
  },
];

export default function IrisSection() {
  return (
    <section
      id="iris"
      className="section-dark py-24 lg:py-36 relative overflow-hidden"
    >
      {/* Dekorativní kosmický gradient na pozadí */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, #7B4FBE 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, #C9A961 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Levý sloupec — obraz IRIS */}
          <div className="order-2 lg:order-1">
            {/* Hlavní IRIS obraz */}
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Dekorativní kruh — kosmický rámeček */}
              <div className="absolute inset-0 rounded-full border border-[#C9A961]/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-[#7B4FBE]/15 scale-125" />

              {/* Obrázek */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-[#C9A961]/30">
                <Image
                  src="/images/iris-hero.webp"
                  alt="IRIS makrofotografie oční duhovky"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
                {/* Jemný vignette */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#0A0A0A]/30 via-transparent to-transparent" />
              </div>

              {/* Badge — zaváděcí cena */}
              <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-[#C9A961] text-[#0A0A0A] rounded-full w-24 h-24 flex flex-col items-center justify-center text-center shadow-2xl">
                <span className="text-xs font-body font-semibold tracking-wide leading-tight">
                  od
                </span>
                <span className="text-xl font-display font-bold leading-none">
                  1 000
                </span>
                <span className="text-xs font-body font-semibold leading-tight">
                  Kč
                </span>
              </div>
            </div>
          </div>

          {/* Pravý sloupec — obsah */}
          <div className="order-1 lg:order-2">
            <p className="text-[#C9A961] text-xs tracking-[0.3em] uppercase mb-4 font-body">
              Kapitola II
            </p>
            <h2 className="font-display text-5xl lg:text-6xl font-light italic text-[#F5F0E8] leading-tight mb-2">
              Vesmír
            </h2>
            <h2 className="font-display text-5xl lg:text-6xl font-semibold text-[#F5F0E8] leading-tight mb-6">
              ve vašem oku
            </h2>
            <div className="w-12 h-px bg-[#C9A961] mb-6" />
            <p className="text-[#F5F0E8]/70 font-body text-base leading-relaxed mb-4">
              Oční duhovka ukrývá neuvěřitelné struktury — žilky, krystaly,
              pigmenty a vzory, které se nemají s ničím jiným na světě.
              IRIS makrofotografie je umělecký způsob, jak je odhalit.
            </p>
            <p className="text-[#F5F0E8]/70 font-body text-base leading-relaxed mb-10">
              Výsledkem je velkoformátový tisk vhodný do bytu nebo jako
              originální dárek, který nikdo jiný na světě nemá.
            </p>

            {/* Features */}
            <div className="flex flex-col gap-5 mb-10">
              {irisFeatures.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <span className="text-[#C9A961] text-lg mt-0.5 w-6 flex-shrink-0">
                    {f.icon}
                  </span>
                  <div>
                    <h3 className="font-body text-sm font-semibold text-[#F5F0E8] tracking-wide mb-0.5">
                      {f.title}
                    </h3>
                    <p className="text-[#F5F0E8]/55 font-body text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Akční nabídka */}
            <div className="border border-[#C9A961]/30 bg-[#C9A961]/8 p-5 mb-8 rounded-sm">
              <p className="text-[#C9A961] text-xs tracking-[0.2em] uppercase mb-2 font-body">
                Zaváděcí akce
              </p>
              <p className="text-[#F5F0E8] font-body text-sm leading-relaxed">
                Nyní za speciální cenu{" "}
                <strong className="text-[#C9A961]">1 000 Kč</strong>{" "}
                <span className="text-[#F5F0E8]/40 line-through">
                  (původně 1 700 Kč)
                </span>
                . Nabídka platí do vyprodání kapacity.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="px-8 py-3.5 bg-[#C9A961] text-[#0A0A0A] font-body text-sm font-medium tracking-[0.12em] uppercase hover:bg-[#D4AF85] transition-colors duration-300"
              >
                Objednat IRIS
              </a>
              <a
                href="#cenik"
                className="px-8 py-3.5 border border-[#F5F0E8]/25 text-[#F5F0E8] font-body text-sm tracking-[0.12em] uppercase hover:border-[#C9A961] hover:text-[#C9A961] transition-colors duration-300"
              >
                Ceník
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
