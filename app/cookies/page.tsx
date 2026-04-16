import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zásady cookies",
  description: "Informace o používání cookies na webu Miroslav Jurka Fotografie.",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-16 lg:pt-20">
      <div className="border-b border-[#E8E2D9]">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="text-[#B8956A] font-body text-sm tracking-[0.1em] hover:text-[#1A1A1A] transition-colors flex items-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Zpět na web
          </Link>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-[#B8956A] text-xs tracking-[0.25em] uppercase font-body mb-3">
            Právní dokumenty
          </p>
          <h1 className="font-display text-4xl lg:text-5xl font-light italic text-[#1A1A1A] mb-4">
            Zásady používání cookies
          </h1>
          <div className="w-10 h-px bg-[#B8956A] mb-4" />
          <p className="text-[#1A1A1A]/50 font-body text-sm">
            Poslední aktualizace: 15. dubna 2024
          </p>
        </div>

        <div className="space-y-10 font-body text-sm text-[#1A1A1A]">

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">Co jsou cookies?</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed">
              Cookies jsou malé textové soubory, které webové stránky ukládají do vašeho
              prohlížeče. Pomáhají zajistit funkčnost webu a shromažďovat anonymní statistiky
              návštěvnosti.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">Jaké cookies používáme</h2>

            <div className="space-y-4">
              <div className="border border-[#E8E2D9] p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[#1A1A1A]">Nezbytné cookies</h3>
                  <span className="text-xs bg-[#B8956A]/15 text-[#B8956A] px-2 py-1 font-medium tracking-wide">
                    Vždy aktivní
                  </span>
                </div>
                <p className="text-[#1A1A1A]/65 leading-relaxed text-xs mb-3">
                  Tyto cookies jsou nezbytné pro správné fungování webu. Nelze je vypnout.
                </p>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-[#E8E2D9]">
                      <th className="text-left py-2 pr-4 text-[#1A1A1A]/40 font-medium">Název</th>
                      <th className="text-left py-2 pr-4 text-[#1A1A1A]/40 font-medium">Účel</th>
                      <th className="text-left py-2 text-[#1A1A1A]/40 font-medium">Expirace</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#E8E2D9]">
                      <td className="py-2 pr-4 font-mono text-[#1A1A1A]/70">cookie-consent</td>
                      <td className="py-2 pr-4 text-[#1A1A1A]/70">Uložení vaší volby cookies (localStorage)</td>
                      <td className="py-2 text-[#1A1A1A]/70">Bez expirace</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="border border-[#E8E2D9] p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[#1A1A1A]">Analytické cookies</h3>
                  <span className="text-xs bg-[#1A1A1A]/8 text-[#1A1A1A]/50 px-2 py-1 font-medium tracking-wide">
                    Volitelné
                  </span>
                </div>
                <p className="text-[#1A1A1A]/65 leading-relaxed text-xs mb-3">
                  <strong className="text-[#1A1A1A]">Vercel Analytics</strong> sbírá anonymní statistiky
                  návštěvnosti (počet návštěv, stránky). Tato služba <strong className="text-green-700">nepoužívá cookies</strong>{" "}
                  a nepracuje s osobními identifikačními údaji. Data jsou agregovaná a anonymní.
                  Žádné reklamní ani sledovací cookies třetích stran nejsou na tomto webu použity.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">Správa cookies</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed mb-4">
              Svou volbu ohledně cookies můžete kdykoli změnit:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2 text-[#1A1A1A]/70">
                <span className="mt-2 w-1 h-1 rounded-full bg-[#B8956A] flex-shrink-0" />
                Kliknutím na odkaz „Nastavení cookies" v patičce webu
              </li>
              <li className="flex items-start gap-2 text-[#1A1A1A]/70">
                <span className="mt-2 w-1 h-1 rounded-full bg-[#B8956A] flex-shrink-0" />
                Nastavením vašeho prohlížeče – návod pro{" "}
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#B8956A] underline">Chrome</a>,{" "}
                <a href="https://support.mozilla.org/cs/kb/povoleni-zakazani-cookies" target="_blank" rel="noopener noreferrer" className="text-[#B8956A] underline">Firefox</a>,{" "}
                <a href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#B8956A] underline">Safari</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">Kontakt</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed">
              V případě dotazů k této politice cookies kontaktujte správce webu:{" "}
              <a href="mailto:info@miroslav-jurka.cz" className="text-[#B8956A] underline">
                info@miroslav-jurka.cz
              </a>
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
