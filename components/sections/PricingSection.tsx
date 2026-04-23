const plans = [
  {
    id: "iris",
    category: "IRIS Fotografie",
    name: "Makro portrét duhovky",
    price: "1 000",
    originalPrice: "1 700",
    currency: "Kč",
    badge: "Zaváděcí cena",
    details: "Umělecký makro portrét oční duhovky",
    includes: [
      "Focení na naší lokaci",
      "Digitální soubor ve vysokém rozlišení",
      "Základní retuš a úprava barev",
      "Možnost tisku na plátno nebo akryl",
    ],
    dark: true,
    featured: true,
  },
  {
    id: "portret",
    category: "Portréty & Rodina",
    name: "Rodinné / portrétní",
    price: "1 500",
    originalPrice: null,
    currency: "Kč",
    badge: null,
    details: "15 upravených fotografií",
    includes: [
      "Až 2 hodiny focení",
      "15 profesionálně upravených fotek",
      "Online galerie ke stažení",
      "Přirozené světlo, outdoorové focení",
    ],
    dark: false,
    featured: false,
  },
  {
    id: "svatba-pul",
    category: "Svatební fotografie",
    name: "Půlden",
    price: "8 500",
    originalPrice: null,
    currency: "Kč",
    badge: null,
    details: "cca 6 hodin focení",
    includes: [
      "6 hodin nepřetržitého focení",
      "Obřad + focení páru",
      "Reportáž ze svatební párty",
      "Editovaná galerie online",
    ],
    dark: false,
    featured: false,
  },
  {
    id: "svatba-cel",
    category: "Svatební fotografie",
    name: "Celý den",
    price: "17 000",
    originalPrice: null,
    currency: "Kč",
    badge: "Nejoblíbenější",
    details: "cca 12 hodin focení",
    includes: [
      "12 hodin nepřetržitého focení",
      "Od příprav po večerní tancování",
      "Kompletní reportáž i portréty",
      "Editovaná galerie online",
      "Prioritní zpracování",
    ],
    dark: false,
    featured: true,
  },
];

export default function PricingSection() {
  return (
    <section id="cenik" className="py-24 lg:py-36 bg-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-4 font-body">
            Investice do vzpomínek
          </p>
          <h2 className="font-display text-5xl lg:text-6xl font-light text-[#1A1A1A] leading-tight mb-4">
            <span className="italic">Ceník</span>{" "}
            <span className="font-semibold">služeb</span>
          </h2>
          <div className="w-12 h-px bg-[#B8956A] mx-auto mb-6" />
          <p className="text-[#1A1A1A]/60 font-body text-base leading-relaxed">
            Ceny jsou konečné, bez skrytých poplatků. Záloha 30 % při
            rezervaci termínu.
          </p>
        </div>

        {/* Karty */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative flex flex-col p-7 rounded-sm
                ${plan.dark
                  ? "bg-[#0A0A0A] text-[#F5F0E8]"
                  : plan.featured
                    ? "bg-[#1A1A1A] text-[#F5F0E8]"
                    : "bg-white text-[#1A1A1A] border border-[#E8E2D9]"
                }
              `}
            >
              {/* Badge */}
              {plan.badge && (
                <span
                  className={`
                    absolute -top-3 left-6 px-3 py-1 text-xs tracking-[0.15em] uppercase font-body font-medium
                    ${plan.dark ? "bg-[#C9A961] text-[#0A0A0A]" : "bg-[#B8956A] text-white"}
                  `}
                >
                  {plan.badge}
                </span>
              )}

              {/* Kategorie */}
              <p
                className={`text-xs tracking-[0.2em] uppercase font-body mb-3 ${plan.dark
                    ? "text-[#C9A961]"
                    : plan.featured
                      ? "text-[#B8956A]"
                      : "text-[#B8956A]"
                  }`}
              >
                {plan.category}
              </p>

              {/* Název */}
              <h3
                className={`font-display text-2xl font-semibold mb-1 ${plan.dark || plan.featured
                    ? "text-[#F5F0E8]"
                    : "text-[#1A1A1A]"
                  }`}
              >
                {plan.name}
              </h3>

              {/* Detail */}
              <p
                className={`font-body text-sm mb-6 ${plan.dark || plan.featured
                    ? "text-[#F5F0E8]/50"
                    : "text-[#1A1A1A]/50"
                  }`}
              >
                {plan.details}
              </p>

              {/* Cena */}
              <div className="mb-6">
                {plan.originalPrice && (
                  <p
                    className={`font-body text-sm line-through mb-1 ${plan.dark ? "text-[#F5F0E8]/30" : "text-[#1A1A1A]/30"
                      }`}
                  >
                    {plan.originalPrice} {plan.currency}
                  </p>
                )}
                <p
                  className={`font-display text-4xl font-bold ${plan.dark
                      ? "text-[#C9A961]"
                      : plan.featured
                        ? "text-[#B8956A]"
                        : "text-[#1A1A1A]"
                    }`}
                >
                  {plan.price}{" "}
                  <span className="text-xl font-normal">{plan.currency}</span>
                </p>
              </div>

              {/* Dělicí linka */}
              <div
                className={`h-px mb-6 ${plan.dark
                    ? "bg-[#F5F0E8]/10"
                    : plan.featured
                      ? "bg-[#F5F0E8]/10"
                      : "bg-[#E8E2D9]"
                  }`}
              />

              {/* Co zahrnuje */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.includes.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-2.5 font-body text-sm ${plan.dark || plan.featured
                        ? "text-[#F5F0E8]/70"
                        : "text-[#1A1A1A]/70"
                      }`}
                  >
                    <span
                      className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${plan.dark
                          ? "bg-[#C9A961]"
                          : plan.featured
                            ? "bg-[#B8956A]"
                            : "bg-[#B8956A]"
                        }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#kontakt"
                className={`
                  block text-center py-3 text-sm font-body font-medium tracking-[0.1em] uppercase transition-colors duration-300
                  ${plan.dark
                    ? "bg-[#C9A961] text-[#0A0A0A] hover:bg-[#D4AF85]"
                    : plan.featured
                      ? "bg-[#B8956A] text-white hover:bg-[#C9A961] hover:text-[#0A0A0A]"
                      : "border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white"
                  }
                `}
              >
                Rezervovat
              </a>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-[#1A1A1A]/70 font-body text-sm mt-8 tracking-wide">
          Ceny jsou uvedeny včetně DPH · Individuální nabídka na vyžádání
        </p>
      </div>
    </section>
  );
}
