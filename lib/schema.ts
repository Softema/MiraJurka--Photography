const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://miroslav-jurka.cz";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${baseUrl}/#business`,
    name: "Miroslav Jurka – Fotografie",
    description:
      "Profesionální fotograf specializující se na svatební fotografii a unikátní IRIS makrofotografii oční duhovky.",
    url: baseUrl,
    telephone: "+420XXXXXXXXX",
    email: "info@miroslav-jurka.cz",
    image: `${baseUrl}/images/wedding-hero.webp`,
    logo: `${baseUrl}/favicon.ico`,
    priceRange: "1 000–17 000 Kč",
    currenciesAccepted: "CZK",
    paymentAccepted: "Hotovost, bankovní převod",
    areaServed: {
      "@type": "Country",
      name: "Česká republika",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "CZ",
      addressLocality: "[DOPLNIT MĚSTO]",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fotografické služby",
      itemListElement: [
        {
          "@type": "Offer",
          name: "IRIS Fotografie duhovky",
          description: "Umělecký makro portrét oční duhovky",
          price: "1000",
          priceCurrency: "CZK",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "1000",
            priceCurrency: "CZK",
          },
        },
        {
          "@type": "Offer",
          name: "Portrétní / rodinné focení",
          description: "15 profesionálně upravených fotografií",
          price: "1500",
          priceCurrency: "CZK",
        },
        {
          "@type": "Offer",
          name: "Svatební fotografie – půlden",
          description: "cca 6 hodin focení",
          price: "8500",
          priceCurrency: "CZK",
        },
        {
          "@type": "Offer",
          name: "Svatební fotografie – celý den",
          description: "cca 12 hodin focení",
          price: "17000",
          priceCurrency: "CZK",
        },
      ],
    },
    sameAs: [
      // Doplňte URL sociálních sítí:
      // "https://www.instagram.com/miroslavjurka",
      // "https://www.facebook.com/miroslavjurka",
    ],
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Miroslav Jurka",
    jobTitle: "Profesionální fotograf",
    url: baseUrl,
    email: "info@miroslav-jurka.cz",
    knowsAbout: [
      "Svatební fotografie",
      "IRIS makrofotografie",
      "Portrétní fotografie",
      "Rodinné focení",
    ],
  };
}
