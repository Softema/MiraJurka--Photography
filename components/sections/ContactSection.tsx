import ContactForm from "@/components/ui/ContactForm";

const contactDetails = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.07 6.07l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
    label: "Telefon",
    value: "737 039 200",
    href: "tel:+420737039200",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "E-mail",
    value: "mirekkjurka@seznam.cz",
    href: "mailto:mirekkjurka@seznam.cz",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Lokalita",
    value: "Uničov / Celá ČR",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section id="kontakt" className="section-dark py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Levý sloupec — text + kontakty */}
          <div>
            <p className="text-[#C9A961] text-xs tracking-[0.3em] uppercase mb-4 font-body">
              Pojďme se potkat
            </p>
            <h2 className="font-display text-5xl lg:text-6xl font-light italic text-[#F5F0E8] leading-tight mb-2">
              Začněme
            </h2>
            <h2 className="font-display text-5xl lg:text-6xl font-semibold text-[#F5F0E8] leading-tight mb-6">
              váš příběh
            </h2>
            <div className="w-12 h-px bg-[#C9A961] mb-8" />
            <p className="text-[#F5F0E8]/90 font-body text-base leading-relaxed mb-12">
              Těším se na každou novou spolupráci. Neváhejte se ozvat pro
              ověření volného termínu, zodpovězení dotazů nebo jen pro
              nezávaznou konzultaci.
            </p>

            {/* Kontaktní údaje */}
            <div className="flex flex-col gap-6 mb-12">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#C9A961]/30 flex items-center justify-center text-[#C9A961] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[#F5F0E8]/80 font-body text-xs tracking-[0.15em] uppercase mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[#F5F0E8] font-body text-sm hover:text-[#C9A961] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#F5F0E8] font-body text-sm">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Sociální sítě */}
            <div>
              <p className="text-[#F5F0E8]/80 font-body text-xs tracking-[0.15em] uppercase mb-4">
                Sledujte mě
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/_miraa95_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 border border-[#C9A961]/40 flex items-center justify-center text-[#C9A961] hover:border-[#C9A961] hover:bg-[#C9A961]/10 transition-colors duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/Mirek-Jurka-MJ-Photo/100063463839766/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 border border-[#C9A961]/40 flex items-center justify-center text-[#C9A961] hover:border-[#C9A961] hover:bg-[#C9A961]/10 transition-colors duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Pravý sloupec — formulář */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
