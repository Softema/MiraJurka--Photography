import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#F5F0E8]/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-display text-xl font-semibold text-[#C9A961] mb-3">
              Miroslav Jurka
            </p>
            <p className="text-[#F5F0E8]/70 font-body text-xs leading-relaxed mb-4">
              Profesionální fotograf specializující se na
              svatební fotografii a IRIS makrofotografii oční duhovky.
            </p>
            <p className="text-[#F5F0E8]/60 font-body text-xs">
              IČO: 11759411
            </p>
          </div>

          {/* Navigace */}
          <div>
            <p className="text-[#F5F0E8]/60 font-body text-xs tracking-[0.2em] uppercase mb-4">
              Navigace
            </p>
            <ul className="space-y-2.5">
              {[
                { href: "/#portfolio", label: "Portfolio" },
                { href: "/#iris", label: "IRIS Fotografie" },
                { href: "/#cenik", label: "Ceník" },
                { href: "/#kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#F5F0E8]/80 font-body text-sm hover:text-[#C9A961] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-[#F5F0E8]/60 font-body text-xs tracking-[0.2em] uppercase mb-4">
              Kontakt
            </p>
            <div className="space-y-2.5">
              <a
                href="tel:+420737039200"
                className="block text-[#F5F0E8]/80 font-body text-sm hover:text-[#C9A961] transition-colors"
              >
                737 039 200
              </a>
              <a
                href="mailto:mirekkjurka@seznam.cz"
                className="block text-[#F5F0E8]/80 font-body text-sm hover:text-[#C9A961] transition-colors"
              >
                mirekkjurka@seznam.cz
              </a>
              <p className="text-[#F5F0E8]/70 font-body text-sm">
                Uničov / Celá ČR
              </p>
            </div>

            {/* Sociální sítě */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/_miraa95_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 border border-[#C9A961]/40 flex items-center justify-center text-[#C9A961] hover:bg-[#C9A961]/10 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/people/Mirek-Jurka-MJ-Photo/100063463839766/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 border border-[#C9A961]/40 flex items-center justify-center text-[#C9A961] hover:bg-[#C9A961]/10 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Dělicí linka */}
        <div className="h-px bg-[#F5F0E8]/8 mb-6" />

        {/* Spodní řádek */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#F5F0E8]/60 font-body text-xs">
            © {year} Miroslav Jurka · Všechna práva vyhrazena
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/gdpr"
              className="text-[#F5F0E8]/60 font-body text-xs hover:text-[#C9A961] transition-colors"
            >
              Ochrana osobních údajů
            </Link>
            <Link
              href="/vop"
              className="text-[#F5F0E8]/60 font-body text-xs hover:text-[#C9A961] transition-colors"
            >
              VOP
            </Link>
            <Link
              href="/cookies"
              className="text-[#F5F0E8]/60 font-body text-xs hover:text-[#C9A961] transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
