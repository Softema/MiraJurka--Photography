"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type CookieChoice = "all" | "necessary" | null;

const STORAGE_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Krátká prodleva pro lepší UX — nejprve se načte stránka
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (choice: CookieChoice) => {
    if (choice) {
      localStorage.setItem(STORAGE_KEY, choice);
    }
    setVisible(false);
    setShowDetails(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Nastavení cookies"
      aria-modal="false"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 md:bottom-6 md:left-6 md:right-auto md:max-w-sm"
    >
      <div className="bg-[#0A0A0A] border border-[#F5F0E8]/10 shadow-2xl p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h2 className="font-display text-lg font-semibold text-[#F5F0E8]">
            Soubory cookies
          </h2>
          <button
            onClick={() => accept("necessary")}
            aria-label="Zavřít"
            className="text-[#F5F0E8]/30 hover:text-[#F5F0E8] transition-colors ml-4 flex-shrink-0"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Text */}
        <p className="text-[#F5F0E8]/60 font-body text-xs leading-relaxed mb-4">
          Tento web používá analytické cookies (Vercel Analytics) pro sledování
          návštěvnosti bez ukládání osobních údajů. Žádná reklama ani sledování
          třetích stran.
        </p>

        {/* Detail */}
        {showDetails && (
          <div className="mb-4 p-3 bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 text-xs font-body">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#F5F0E8]/80">Nezbytné cookies</span>
              <span className="text-[#C9A961] text-xs">Vždy aktivní</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#F5F0E8]/80">Analytické (Vercel)</span>
              <span className="text-[#F5F0E8]/40 text-xs">Bez osobních dat</span>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-[#C9A961]/60 font-body text-xs hover:text-[#C9A961] transition-colors mb-5 underline"
        >
          {showDetails ? "Skrýt detaily" : "Zobrazit detaily"}
        </button>

        {/* Tlačítka */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => accept("all")}
            className="w-full py-2.5 bg-[#C9A961] text-[#0A0A0A] font-body text-xs font-medium tracking-[0.1em] uppercase hover:bg-[#D4AF85] transition-colors duration-300"
          >
            Přijmout vše
          </button>
          <button
            onClick={() => accept("necessary")}
            className="w-full py-2.5 border border-[#F5F0E8]/15 text-[#F5F0E8]/60 font-body text-xs tracking-[0.1em] uppercase hover:border-[#F5F0E8]/30 hover:text-[#F5F0E8] transition-colors duration-300"
          >
            Pouze nezbytné
          </button>
        </div>

        {/* Odkaz na cookies stránku */}
        <p className="text-center mt-4">
          <Link
            href="/cookies"
            className="text-[#F5F0E8]/25 font-body text-xs hover:text-[#C9A961] transition-colors"
          >
            Zásady používání cookies
          </Link>
        </p>
      </div>
    </div>
  );
}
