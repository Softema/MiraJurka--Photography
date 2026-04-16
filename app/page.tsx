import Hero from "@/components/sections/Hero";
import WeddingSection from "@/components/sections/WeddingSection";
import IrisSection from "@/components/sections/IrisSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import { getLocalBusinessSchema, getPersonSchema } from "@/lib/schema";

export default function Home() {
  const localBusinessSchema = getLocalBusinessSchema();
  const personSchema = getPersonSchema();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <main>
        <Hero />
        <WeddingSection />
        <IrisSection />
        <PricingSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
