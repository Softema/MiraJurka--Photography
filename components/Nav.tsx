"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#svatby", label: "Svatby" },
  { href: "#iris", label: "IRIS" },
  { href: "#cenik", label: "Nabídka" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detekce tmavé sekce (IRIS) pomocí pozice scrollu
      const irisSection = document.getElementById("iris");
      const cenik = document.getElementById("cenik");

      if (irisSection) {
        const rect = irisSection.getBoundingClientRect();
        const cenikRect = cenik?.getBoundingClientRect();
        // Navigace je v tmavé části, pokud je IRIS sekce viditelná nahoře
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
  const bgClass = scrolled
    ? isDark
      ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[rgba(245,240,232,0.08)]"
      : "bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[rgba(26,26,26,0.08)]"
    : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          href="/"
          className={`font-display text-xl lg:text-2xl font-semibold tracking-wide transition-colors duration-500 ${logoColor}`}
        >
          Miroslav Jurka
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
              href="#kontakt"
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

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
          className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors duration-300 ${textColor}`}
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
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } ${isDark ? "bg-[#0A0A0A]/95" : "bg-[#FAF7F2]/95"} backdrop-blur-md`}
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
              href="#kontakt"
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
