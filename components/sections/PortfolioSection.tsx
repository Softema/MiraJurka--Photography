"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

type Category = "svatby" | "portrety" | "iris";
type Filter = "all" | Category;

type Photo = {
  src: string;
  category: Category;
  alt: string;
};

const photos: Photo[] = [
  {
    src: "/images/svatby/20240914-_DSC6703.webp",
    category: "svatby",
    alt: "Svatební fotografie – okamžik obřadu",
  },
  {
    src: "/images/svatby/20240914-_DSC6731.webp",
    category: "svatby",
    alt: "Svatební fotografie – novomanželé",
  },
  {
    src: "/images/svatby/20250712-DSC02169.webp",
    category: "svatby",
    alt: "Svatební fotografie – reportáž",
  },
  {
    src: "/images/portéty/20241102-_DSC3977.webp",
    category: "portrety",
    alt: "Portrétní fotografie v přirozeném světle",
  },
  {
    src: "/images/portéty/DSC00634-2.webp",
    category: "portrety",
    alt: "Portrétní fotografie – studiový záběr",
  },
  {
    src: "/images/portéty/_DSC0787.webp",
    category: "portrety",
    alt: "Portrétní fotografie – detail",
  },
  {
    src: "/images/iris/20260406-Gaba Hans 100  center.webp",
    category: "iris",
    alt: "IRIS fotografie duhovky",
  },
  {
    src: "/images/iris/20260410-Kotras-2.webp",
    category: "iris",
    alt: "IRIS fotografie duhovky – detail",
  },
  {
    src: "/images/iris/20260410-Vasa Petra.webp",
    category: "iris",
    alt: "IRIS fotografie duhovky – makro",
  },
];

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "Vše" },
  { value: "svatby", label: "Svatby" },
  { value: "portrety", label: "Portréty" },
  { value: "iris", label: "IRIS" },
];

const categoryLabel: Record<Category, string> = {
  svatby: "Svatby",
  portrety: "Portrét",
  iris: "IRIS",
};

export default function PortfolioSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visiblePhotos = useMemo(
    () => (filter === "all" ? photos : photos.filter((p) => p.category === filter)),
    [filter]
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showNext = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? i : (i + 1) % visiblePhotos.length
    );
  }, [visiblePhotos.length]);

  const showPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? i : (i - 1 + visiblePhotos.length) % visiblePhotos.length
    );
  }, [visiblePhotos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") showNext();
      else if (e.key === "ArrowLeft") showPrev();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  useEffect(() => {
    setLightboxIndex(null);
  }, [filter]);

  const activePhoto = lightboxIndex !== null ? visiblePhotos[lightboxIndex] : null;

  return (
    <section id="portfolio" className="section-light py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-4 font-body">
            Portfolio
          </p>
          <h2 className="font-display text-5xl lg:text-6xl font-light italic text-[#1A1A1A] leading-tight mb-6">
            Vybrané okamžiky, <br />
            <span className="font-semibold not-italic">z mého objektivu</span>
          </h2>
          <div className="w-12 h-px bg-[#B8956A] mb-6" />
          <p className="text-[#1A1A1A]/70 font-body text-base leading-relaxed">
            Ukázka z mé tvorby — svatební reportáže, portréty v přirozeném světle
            a unikátní makro snímky duhovky IRIS. Klikněte na fotografii pro
            zvětšení.
          </p>
        </div>

        {/* Filtr záložek */}
        <div className="flex flex-wrap gap-3 mb-10 lg:mb-14">
          {filters.map((f) => {
            const isActive = f.value === filter;
            return (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                className={`
                  px-5 py-2.5 font-body text-xs tracking-[0.2em] uppercase
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#1A1A1A] text-white border border-[#1A1A1A]"
                      : "border border-[#1A1A1A]/20 text-[#1A1A1A] hover:border-[#B8956A] hover:text-[#B8956A]"
                  }
                `}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Galerie */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {visiblePhotos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="relative overflow-hidden group cursor-pointer aspect-square bg-[#E8E2D9] focus:outline-none focus:ring-2 focus:ring-[#B8956A] focus:ring-offset-2"
              aria-label={`Zobrazit fotografii: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-[#1A1A1A]/0 to-[#1A1A1A]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              {/* Kategorie štítek */}
              <span className="absolute bottom-3 left-3 text-white text-[0.65rem] tracking-[0.25em] uppercase font-body opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                {categoryLabel[photo.category]}
              </span>
            </button>
          ))}
        </div>

        {visiblePhotos.length === 0 && (
          <p className="text-[#1A1A1A]/50 font-body text-center py-12">
            V této kategorii zatím nejsou fotografie.
          </p>
        )}
      </div>

      {/* Lightbox */}
      {activePhoto && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Galerie fotografií"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Zavřít galerii"
            className="absolute top-5 right-5 lg:top-8 lg:right-8 text-white/80 hover:text-[#C9A961] transition-colors duration-300 p-2 z-10"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          {visiblePhotos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Předchozí fotografie"
              className="absolute left-3 lg:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-[#C9A961] transition-colors duration-300 p-2 z-10"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-[92vw] h-[82vh] lg:w-[85vw] lg:h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activePhoto.src}
              alt={activePhoto.alt}
              fill
              sizes="92vw"
              className="object-contain"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 text-center pb-2">
              <p className="text-white/70 text-xs tracking-[0.25em] uppercase font-body">
                {categoryLabel[activePhoto.category]} · {lightboxIndex + 1} / {visiblePhotos.length}
              </p>
            </div>
          </div>

          {/* Next */}
          {visiblePhotos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Další fotografie"
              className="absolute right-3 lg:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-[#C9A961] transition-colors duration-300 p-2 z-10"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>
      )}
    </section>
  );
}
