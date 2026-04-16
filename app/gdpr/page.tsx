import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zásady ochrany osobních údajů",
  description:
    "Informace o zpracování osobních údajů na webu Miroslav Jurka Fotografie v souladu s GDPR.",
  robots: { index: false, follow: false },
};

export default function GdprPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-16 lg:pt-20">
      {/* Navigace zpět */}
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
        {/* Hlavička */}
        <div className="mb-12">
          <p className="text-[#B8956A] text-xs tracking-[0.25em] uppercase font-body mb-3">
            Právní dokumenty
          </p>
          <h1 className="font-display text-4xl lg:text-5xl font-light italic text-[#1A1A1A] mb-4">
            Zásady ochrany osobních údajů
          </h1>
          <div className="w-10 h-px bg-[#B8956A] mb-4" />
          <p className="text-[#1A1A1A]/50 font-body text-sm">
            Poslední aktualizace: 15. dubna 2024
          </p>
        </div>

        {/* Obsah */}
        <div className="prose prose-stone max-w-none font-body text-[#1A1A1A]">
          <div className="space-y-10">

            <section>
              <h2 className="font-display text-2xl font-semibold text-[#1A1A1A] mb-4">
                1. Správce osobních údajů
              </h2>
              <div className="bg-[#F0EBE3] border-l-2 border-[#B8956A] p-5 text-sm leading-relaxed text-[#1A1A1A]/80">
                <p><strong>Miroslav Jurka</strong></p>
                <p>IČO: [DOPLNIT]</p>
                <p>Adresa: [DOPLNIT]</p>
                <p>E-mail: info@miroslav-jurka.cz</p>
                <p>Telefon: +420 XXX XXX XXX</p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[#1A1A1A] mb-4">
                2. Jaké osobní údaje zpracováváme
              </h2>
              <p className="text-[#1A1A1A]/70 text-sm leading-relaxed mb-4">
                Zpracováváme pouze osobní údaje, které nám sami poskytnete prostřednictvím kontaktního
                formuláře na tomto webu:
              </p>
              <ul className="list-none space-y-2">
                {[
                  "Jméno a příjmení",
                  "E-mailová adresa",
                  "Telefonní číslo (pokud ho uvedete)",
                  "Text vaší zprávy / poptávky",
                  "Typ požadované služby",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#1A1A1A]/70">
                    <span className="mt-2 w-1 h-1 rounded-full bg-[#B8956A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[#1A1A1A] mb-4">
                3. Účel a právní základ zpracování
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-[#E8E2D9]">
                      <th className="text-left py-3 pr-4 font-medium text-[#1A1A1A]/50 tracking-wide text-xs uppercase">Účel</th>
                      <th className="text-left py-3 pr-4 font-medium text-[#1A1A1A]/50 tracking-wide text-xs uppercase">Právní základ</th>
                      <th className="text-left py-3 font-medium text-[#1A1A1A]/50 tracking-wide text-xs uppercase">Doba uchování</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#E8E2D9]">
                      <td className="py-3 pr-4 text-[#1A1A1A]/75">Odpověď na poptávku / komunikace</td>
                      <td className="py-3 pr-4 text-[#1A1A1A]/75">Čl. 6 odst. 1 písm. b) GDPR – plnění smlouvy</td>
                      <td className="py-3 text-[#1A1A1A]/75">3 roky od posledního kontaktu</td>
                    </tr>
                    <tr className="border-b border-[#E8E2D9]">
                      <td className="py-3 pr-4 text-[#1A1A1A]/75">Realizace fotosession / fakturace</td>
                      <td className="py-3 pr-4 text-[#1A1A1A]/75">Čl. 6 odst. 1 písm. c) GDPR – zákonná povinnost</td>
                      <td className="py-3 text-[#1A1A1A]/75">10 let (zákon o účetnictví)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[#1A1A1A] mb-4">
                4. Příjemci osobních údajů
              </h2>
              <p className="text-[#1A1A1A]/70 text-sm leading-relaxed mb-3">
                Vaše osobní údaje předáváme pouze těmto třetím stranám, které jsou nezbytné
                pro provoz webu a komunikaci:
              </p>
              <ul className="list-none space-y-3">
                <li className="text-sm text-[#1A1A1A]/70">
                  <strong className="text-[#1A1A1A]">Resend Inc.</strong> – služba pro odesílání transakčních e-mailů.
                  Sídlo v USA; přenos na základě standardních smluvních doložek EU.
                </li>
                <li className="text-sm text-[#1A1A1A]/70">
                  <strong className="text-[#1A1A1A]">Vercel Inc.</strong> – hosting webové aplikace.
                  Sídlo v USA; přenos na základě standardních smluvních doložek EU.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[#1A1A1A] mb-4">
                5. Vaše práva (GDPR čl. 15–22)
              </h2>
              <p className="text-[#1A1A1A]/70 text-sm leading-relaxed mb-4">
                Jako subjekt údajů máte právo:
              </p>
              <ul className="list-none space-y-2">
                {[
                  "Přístupu k osobním údajům (čl. 15)",
                  "Opravy nepřesných údajů (čl. 16)",
                  "Výmazu („právo být zapomenut") (čl. 17)",
                  "Omezení zpracování (čl. 18)",
                  "Přenositelnosti údajů (čl. 20)",
                  "Namítat vůči zpracování (čl. 21)",
                  "Podat stížnost u dozorového úřadu – Úřad pro ochranu osobních údajů (uoou.cz)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#1A1A1A]/70">
                    <span className="mt-2 w-1 h-1 rounded-full bg-[#B8956A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#1A1A1A]/70 text-sm leading-relaxed mt-4">
                Svá práva uplatněte e-mailem na{" "}
                <a href="mailto:info@miroslav-jurka.cz" className="text-[#B8956A] underline">
                  info@miroslav-jurka.cz
                </a>
                . Na žádost odpovíme nejpozději do 30 dnů.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[#1A1A1A] mb-4">
                6. Cookies a analytika
              </h2>
              <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">
                Tento web používá Vercel Analytics pro anonymní statistiku návštěvnosti. Tato
                služba <strong>nepoužívá cookies</strong> a neukládá žádné osobní identifikační údaje.
                Podrobnosti naleznete v{" "}
                <Link href="/cookies" className="text-[#B8956A] underline">
                  zásadách cookies
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-[#1A1A1A] mb-4">
                7. Zabezpečení
              </h2>
              <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">
                Veškerá komunikace mezi vaším prohlížečem a naším webem je šifrována protokolem
                HTTPS/TLS. Osobní údaje předávané e-mailem jsou chráněny šifrováním přenosu.
                Přijali jsme přiměřená technická a organizační opatření k ochraně vašich dat.
              </p>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
