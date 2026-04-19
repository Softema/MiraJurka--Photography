"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#iris", label: "IRIS" },
  { href: "/#cenik", label: "Nabídka" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detekce tmavé sekce (IRIS) pomocí pozice scrollu
      const irisSection = document.getElementById("iris");
      const cenik = document.getElementById("cenik");

      if (irisSection) {
        const rect = irisSection.getBoundingClientRect();
        const cenikRect = cenik?.getBoundingClientRect();
        const inIris = rect.top <= 80 && rect.bottom > 80;
        const afterIrisBeforeCenik =
          cenikRect
            ? rect.bottom <= 80 && cenikRect.top > 80
            : rect.bottom <= 80;
        setIsDark(inIris || afterIrisBeforeCenik);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isDark ? "text-[#F5F0E8]" : "text-[#1A1A1A]";
  const logoColor = isDark ? "text-[#C9A961]" : "text-[#B8956A]";
  const bgClass = isDark
    ? "bg-[#0A0A0A] border-b border-[rgba(245,240,232,0.08)]"
    : "bg-[#FAF7F2] border-b border-[rgba(26,26,26,0.08)]";

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${bgClass}`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center gap-2.5 font-display text-xl lg:text-2xl font-semibold tracking-wide transition-colors duration-500 ${logoColor}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 lg:w-7 lg:h-7 flex-shrink-0"
            aria-hidden="true"
          >
            {/* Tělo fotoaparátu */}
            <rect x="2" y="7" width="20" height="14" rx="2.5" />
            {/* Objektiv */}
            <circle cx="12" cy="14" r="4" />
            <circle cx="12" cy="14" r="1.5" />
            {/* Výřez pro blesk / horní část */}
            <path d="M7 7V5.5A1.5 1.5 0 0 1 8.5 4h3L13 7" />
            {/* Malý blesk / detail vpravo nahoře */}
            <circle cx="18" cy="11" r="1" fill="currentColor" stroke="none" />
          </svg>
          <span className="flex flex-col leading-tight">
            Miroslav Jurka
            <span className={`text-[0.6rem] lg:text-[0.65rem] tracking-[0.25em] font-medium uppercase transition-colors duration-500 ${isDark ? "text-[#C9A961]" : "text-[#B8956A]"}`}>
              Photography
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`
                  font-body text-sm tracking-[0.12em] uppercase transition-colors duration-500
                  hover:opacity-70 ${textColor}
                `}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#kontakt"
              className={`
                ml-4 px-5 py-2 text-sm tracking-[0.1em] uppercase font-medium border
                transition-all duration-300 hover:opacity-80
                ${
                  isDark
                    ? "border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-[#0A0A0A]"
                    : "border-[#B8956A] text-[#B8956A] hover:bg-[#B8956A] hover:text-white"
                }
              `}
            >
              Rezervovat
            </a>
          </li>
        </ul>

        {/* Mobile: kontaktní ikony + hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href="tel:+420737039200"
            aria-label="Telefon"
            className={`transition-colors duration-500 hover:opacity-70 ${textColor}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.07 6.07l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
            </svg>
          </a>
          <a
            href="mailto:mirekkjurka@seznam.cz"
            aria-label="E-mail"
            className={`transition-colors duration-500 hover:opacity-70 ${textColor}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
          <button
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
            className={`flex flex-col gap-1.5 p-2 transition-colors duration-300 ${textColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${isDark ? "bg-[#F5F0E8]" : "bg-[#1A1A1A]"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${isDark ? "bg-[#F5F0E8]" : "bg-[#1A1A1A]"} ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${isDark ? "bg-[#F5F0E8]" : "bg-[#1A1A1A]"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } ${isDark ? "bg-[#0A0A0A]" : "bg-[#FAF7F2]"}`}
      >
        <ul className="flex flex-col py-6 px-6 gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-body text-base tracking-[0.12em] uppercase ${textColor}`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#kontakt"
              onClick={() => setMenuOpen(false)}
              className={`inline-block px-5 py-2.5 text-sm tracking-[0.1em] uppercase font-medium border ${
                isDark
                  ? "border-[#C9A961] text-[#C9A961]"
                  : "border-[#B8956A] text-[#B8956A]"
              }`}
            >
              Rezervovat termín
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
