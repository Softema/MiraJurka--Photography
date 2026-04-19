const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://miroslav-jurka.cz";

const INSTAGRAM_URL = "https://www.instagram.com/_miraa95_/";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${baseUrl}/#business`,
    name: "Miroslav Jurka – Fotografie",
    description:
      "Profesionální svatební fotograf v Olomouci a okolí. Svatby, portrétní focení a unikátní makrofotografie oční duhovky (IRIS).",
    url: baseUrl,
    telephone: "+420737039200",
    email: "mirekkjurka@seznam.cz",
    image: `${baseUrl}/images/wedding-hero.webp`,
    logo: `${baseUrl}/favicon.ico`,
    priceRange: "1 000–17 000 Kč",
    currenciesAccepted: "CZK",
    paymentAccepted: "Hotovost, bankovní převod",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Olomoucký kraj" },
      { "@type": "City", name: "Olomouc" },
      { "@type": "City", name: "Uničov" },
      { "@type": "City", name: "Zábřeh" },
      { "@type": "City", name: "Šumperk" },
      { "@type": "City", name: "Prostějov" },
      { "@type": "City", name: "Zlín" },
      { "@type": "Country", name: "Česká republika" },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "CZ",
      addressRegion: "Olomoucký kraj",
      addressLocality: "Olomouc",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.5938,
      longitude: 17.2509,
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
    sameAs: [INSTAGRAM_URL],
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Miroslav Jurka",
    jobTitle: "Profesionální fotograf",
    url: baseUrl,
    email: "mirekkjurka@seznam.cz",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CZ",
      addressRegion: "Olomoucký kraj",
      addressLocality: "Olomouc",
    },
    knowsAbout: [
      "Svatební fotografie",
      "IRIS makrofotografie",
      "Portrétní fotografie",
      "Rodinné focení",
    ],
    sameAs: [INSTAGRAM_URL],
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Domů",
        item: baseUrl,
      },
    ],
  };
}

type GalleryImage = {
  src: string;
  name: string;
  description: string;
};

const galleryImages: GalleryImage[] = [
  {
    src: "/images/svatby/20240914-_DSC6703.webp",
    name: "Svatební obřad – Olomoucký kraj",
    description: "Svatební fotografie – okamžik obřadu",
  },
  {
    src: "/images/svatby/20240914-_DSC6731.webp",
    name: "Novomanželé – svatební reportáž",
    description: "Svatební fotografie – novomanželé",
  },
  {
    src: "/images/svatby/20250712-DSC02169.webp",
    name: "Svatební reportáž",
    description: "Svatební fotografie – reportáž",
  },
  {
    src: "/images/port%C3%A9ty/20241102-_DSC3977.webp",
    name: "Portrétní fotografie v přirozeném světle",
    description: "Portrétní focení v exteriéru",
  },
  {
    src: "/images/port%C3%A9ty/DSC00634-2.webp",
    name: "Studiový portrét",
    description: "Portrétní fotografie – studiový záběr",
  },
  {
    src: "/images/port%C3%A9ty/_DSC0787.webp",
    name: "Detail portrétu",
    description: "Portrétní fotografie – detail",
  },
  {
    src: "/images/iris/20260406-Gaba%20Hans%20100%20%20center.webp",
    name: "IRIS fotografie duhovky",
    description: "Umělecká makrofotografie oční duhovky",
  },
  {
    src: "/images/iris/20260410-Kotras-2.webp",
    name: "IRIS makro detail",
    description: "IRIS fotografie duhovky – detail",
  },
  {
    src: "/images/iris/20260410-Vasa%20Petra.webp",
    name: "IRIS makrofotografie",
    description: "IRIS fotografie duhovky – makro",
  },
];

export function getImageGallerySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Portfolio Miroslav Jurka – Svatby, portréty a IRIS fotografie",
    description:
      "Výběr fotografií z tvorby Miroslava Jurky: svatební reportáže, portréty v přirozeném světle a makro snímky oční duhovky.",
    url: `${baseUrl}/#portfolio`,
    image: galleryImages.map((img) => ({
      "@type": "ImageObject",
      contentUrl: `${baseUrl}${img.src}`,
      url: `${baseUrl}${img.src}`,
      name: img.name,
      description: img.description,
      creator: {
        "@type": "Person",
        name: "Miroslav Jurka",
        url: baseUrl,
      },
      copyrightHolder: {
        "@type": "Person",
        name: "Miroslav Jurka",
      },
      license: baseUrl,
      acquireLicensePage: `${baseUrl}/#kontakt`,
      creditText: "Miroslav Jurka",
    })),
  };
}
