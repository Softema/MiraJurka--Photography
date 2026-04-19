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
    default:
      "Miroslav Jurka | Svatební fotograf Olomouc, portréty & IRIS Fotografie",
    template: "%s | Miroslav Jurka",
  },
  description:
    "Profesionální svatební fotograf v Olomouci a okolí. Svatby, portrétní focení a unikátní makrofotografie oční duhovky (IRIS). Působím v Olomouckém kraji — Uničov, Zábřeh, Šumperk, Prostějov i Zlín. Rezervujte termín online.",
  keywords: [
    "svatební fotograf",
    "svatební fotograf Olomouc",
    "svatební fotograf Olomoucký kraj",
    "fotograf Olomouc",
    "fotograf Uničov",
    "fotograf Zábřeh",
    "fotograf Šumperk",
    "fotograf Prostějov",
    "fotograf Zlín",
    "portrétní fotograf Olomouc",
    "rodinné focení Olomouc",
    "IRIS fotografie",
    "IRIS fotografie Olomouc",
    "focení duhovky",
    "makrofotografie oka",
    "Miroslav Jurka",
  ],
  authors: [{ name: "Miroslav Jurka" }],
  creator: "Miroslav Jurka",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "/",
    siteName: "Miroslav Jurka Fotografie",
    title:
      "Miroslav Jurka | Svatební fotograf Olomouc, portréty & IRIS Fotografie",
    description:
      "Zachycuji emoce na svatbách, portrétech a odhaluji vesmír ve vaší oční duhovce. Profesionální fotograf v Olomouci a okolí.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miroslav Jurka | Fotograf Olomouc",
    description:
      "Svatební fotografie, portréty & IRIS makrofotografie oční duhovky. Olomoucký kraj. Rezervujte termín.",
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
  verification: {
    // Po přidání property v Google Search Console zvolit HTML tag metodu
    // a doplnit hodnotu z `content="..."`
    google: "__REPLACE_WITH_GSC_VERIFICATION_CODE__",
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
