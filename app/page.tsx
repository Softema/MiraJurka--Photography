import Hero from "@/components/sections/Hero";
import PortfolioSection from "@/components/sections/PortfolioSection";
import IrisSection from "@/components/sections/IrisSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import {
  getBreadcrumbSchema,
  getImageGallerySchema,
  getLocalBusinessSchema,
  getPersonSchema,
} from "@/lib/schema";

export default function Home() {
  const localBusinessSchema = getLocalBusinessSchema();
  const personSchema = getPersonSchema();
  const breadcrumbSchema = getBreadcrumbSchema();
  const imageGallerySchema = getImageGallerySchema();

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />

      <main>
        <Hero />
        <PortfolioSection />
        <IrisSection />
        <PricingSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
