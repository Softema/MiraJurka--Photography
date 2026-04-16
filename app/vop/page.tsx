import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Všeobecné obchodní podmínky",
  description:
    "Všeobecné obchodní podmínky fotografa Miroslava Jurky pro fotografické služby.",
  robots: { index: false, follow: false },
};

export default function VopPage() {
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
            Všeobecné obchodní podmínky
          </h1>
          <div className="w-10 h-px bg-[#B8956A] mb-4" />
          <p className="text-[#1A1A1A]/50 font-body text-sm">
            Platné od: 15. dubna 2024 · Miroslav Jurka, IČO: [DOPLNIT]
          </p>
        </div>

        <div className="space-y-10 font-body text-sm text-[#1A1A1A]">

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">1. Úvodní ustanovení</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed">
              Tyto všeobecné obchodní podmínky (dále jen „VOP") upravují smluvní vztah mezi
              Miroslavem Jurkou (dále jen „fotograf") a zákazníkem při objednávce a realizaci
              fotografických služeb. Uzavřením objednávky zákazník potvrzuje, že se s těmito VOP
              seznámil a souhlasí s nimi.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">2. Předmět smlouvy</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed mb-3">
              Fotograf poskytuje tyto fotografické služby:
            </p>
            <ul className="list-none space-y-2">
              {[
                "IRIS makrofotografie oční duhovky",
                "Portrétní a rodinné focení",
                "Svatební fotografie (půlden – cca 6 hod. / celý den – cca 12 hod.)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[#1A1A1A]/70">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#B8956A] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">3. Objednávka a rezervace</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed mb-3">
              Objednávka vzniká:
            </p>
            <ol className="list-none space-y-2 mb-4">
              {[
                "Zákazník vyplní kontaktní formulář nebo se ozve jiným způsobem.",
                "Fotograf potvrdí dostupný termín a zašle shrnutí zakázky.",
                "Zákazník uhradí zálohu (viz čl. 4). Tímto je termín závazně rezervován.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1A1A1A]/70">
                  <span className="font-semibold text-[#B8956A] flex-shrink-0">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
            <p className="text-[#1A1A1A]/70 leading-relaxed">
              <strong className="text-[#1A1A1A]">Poznámka k termínům:</strong> Termíny se
              obsazují průběžně. Rezervace bez úhrady zálohy není závazná.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">4. Ceny a platební podmínky</h2>
            <div className="bg-[#F0EBE3] border-l-2 border-[#B8956A] p-5 mb-4 text-[#1A1A1A]/70 leading-relaxed">
              <p className="mb-2"><strong className="text-[#1A1A1A]">Záloha:</strong> 30 % z celkové ceny splatná do 7 dnů od potvrzení termínu.</p>
              <p><strong className="text-[#1A1A1A]">Doplatek:</strong> Zbývající částka splatná nejpozději v den focení, v hotovosti nebo převodem.</p>
            </div>
            <p className="text-[#1A1A1A]/70 leading-relaxed">
              Aktuální ceník je uveden na webové stránce a v potvrzovacím e-mailu. Ceny jsou
              konečné. Fotograf není plátcem DPH. Bankovní spojení: [DOPLNIT].
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">5. Dodací lhůty</h2>
            <ul className="list-none space-y-2">
              {[
                "IRIS fotografie: do 14 pracovních dnů od focení",
                "Portrétní / rodinné focení: do 21 pracovních dnů",
                "Svatební fotografie: do 6–8 týdnů od svatebního dne",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[#1A1A1A]/70">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#B8956A] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[#1A1A1A]/70 leading-relaxed mt-4">
              Fotografie jsou doručeny formou odkazu na online galerii ve vysokém rozlišení.
              Na výslovné přání lze dodat i fyzickým médiem (USB) za příplatek.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">6. Autorská práva</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed mb-3">
              Fotograf si vyhrazuje veškerá autorská práva k pořízeným fotografiím dle
              zákona č. 121/2000 Sb. (autorský zákon). Zákazník obdrží nevýhradní licenci
              k osobnímu, nekomerčnímu užití fotografií v digitální formě.
            </p>
            <p className="text-[#1A1A1A]/70 leading-relaxed">
              Fotograf je oprávněn použít pořízené fotografie pro vlastní prezentaci
              (portfolio, web, sociální sítě) s možností zákazníka tento souhlas odvolat
              písemnou žádostí.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">7. Storno podmínky</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#E8E2D9]">
                    <th className="text-left py-3 pr-4 font-medium text-[#1A1A1A]/50 text-xs uppercase tracking-wide">Zrušení před termínem</th>
                    <th className="text-left py-3 font-medium text-[#1A1A1A]/50 text-xs uppercase tracking-wide">Storno poplatek</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { period: "více než 30 dní", fee: "Záloha se vrací v plné výši" },
                    { period: "14–30 dní", fee: "50 % zálohy" },
                    { period: "méně než 14 dní", fee: "Záloha propadá" },
                    { period: "Zrušení v den focení", fee: "100 % ceny zakázky" },
                  ].map((row) => (
                    <tr key={row.period} className="border-b border-[#E8E2D9]">
                      <td className="py-3 pr-4 text-[#1A1A1A]/70">{row.period}</td>
                      <td className="py-3 text-[#1A1A1A]/70">{row.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[#1A1A1A]/70 leading-relaxed mt-4">
              V případě zrušení termínu ze strany fotografa z vážných důvodů (nemoc, havárie)
              bude záloha vrácena v plné výši nebo nabídnut náhradní termín.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">8. Reklamace</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed">
              Zákazník je oprávněn reklamovat zjevné vady dodaných fotografií do 30 dnů od
              jejich doručení. Reklamaci uplatněte e-mailem na{" "}
              <a href="mailto:info@miroslav-jurka.cz" className="text-[#B8956A] underline">
                info@miroslav-jurka.cz
              </a>{" "}
              s popisem a ukázkou vady. Fotograf se k reklamaci vyjádří do 14 pracovních dnů.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-4">9. Závěrečná ustanovení</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed">
              Tyto VOP se řídí právním řádem České republiky. Případné spory budou řešeny
              přednostně smírnou cestou; jinak u příslušného soudu v ČR. Fotograf je oprávněn
              tyto VOP jednostranně změnit; změna nabývá účinnosti zveřejněním na webu a
              neplatí pro již uzavřené smlouvy.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
