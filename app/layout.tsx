import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://miroslav-jurka.cz"
  ),
  title: {
    default: "Miroslav Jurka | Svatební fotograf & IRIS Fotografie duhovky",
    template: "%s | Miroslav Jurka",
  },
  description:
    "Profesionální fotograf Miroslav Jurka. Zachycení emocí na svatbách a unikátní makrofotografie oční duhovky (IRIS). Rezervujte si svůj termín online.",
  keywords: [
    "svatební fotograf",
    "IRIS fotografie",
    "focení duhovky",
    "portrétní fotograf",
    "rodinné focení",
    "Miroslav Jurka",
    "makrofotografie oka",
  ],
  authors: [{ name: "Miroslav Jurka" }],
  creator: "Miroslav Jurka",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "/",
    siteName: "Miroslav Jurka Fotografie",
    title: "Miroslav Jurka | Svatební fotograf & IRIS Fotografie duhovky",
    description:
      "Zachycuji emoce na svatbách a odhaluji vesmír ve vaší oční duhovce. Profesionální fotograf pro vaše nejdůležitější okamžiky.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Miroslav Jurka – Fotograf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miroslav Jurka | Fotograf",
    description:
      "Svatební fotografie & IRIS makrofotografie oční duhovky. Rezervujte si termín.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
