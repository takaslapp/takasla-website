"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface ScreenItem {
  id: string;
  image: string;
  badge: string;
  title: string;
  description: string;
}

const screens: ScreenItem[] = [
  {
    id: "kesfet",
    image: "/images/app/takasla-app-kesfet.webp",
    badge: "1. Keşif",
    title: "Kullanmadığın Eşyaları Değerlendir",
    description: "Sana en yakın takas fırsatlarını incele, aradığın ürünleri para harcamadan keşfet.",
  },
  {
    id: "ilan-ver",
    image: "/images/app/takasla-app-ilan-ver.webp",
    badge: "2. İlan Verme",
    title: "Kolayca İlan Oluştur",
    description: "Fotoğraf ekle, takaslamak istediğin ürünleri seç ve saniyeler içinde ilana koy.",
  },
  {
    id: "kategoriler",
    image: "/images/app/takasla-app-kategoriler.webp",
    badge: "3. Çeşitlilik",
    title: "İhtiyacın Olanı Bul",
    description: "Elektronikten giyime binlerce farklı kategoride eşyalarını takasa aç.",
  },
  {
    id: "mesajlasma",
    image: "/images/app/takasla-app-mesajlasma.webp",
    badge: "4. İletişim",
    title: "Mesajlaş & Takasını Tamamla",
    description: "Doğrudan teklif gönder, uygulama içi güvenli sohbetle detayları görüş ve anlaş.",
  },
  {
    id: "degerlendir",
    image: "/images/app/takasla-app-degerlendir.webp",
    badge: "5. Döngüsel Tüketim",
    title: "Değere Dönüşsün",
    description: "Parayla değil, Takasla. Eşyaların atıl kalmasın, yeni sahipleriyle hayat bulsun.",
  },
];

export default function AppShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index on scroll
  const handleScrollEvent = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    // Calculate which card is closest to center
    const cardWidth = scrollRef.current.firstElementChild
      ? (scrollRef.current.firstElementChild as HTMLElement).clientWidth + 24
      : clientWidth;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), screens.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScrollEvent, { passive: true });
    return () => el.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const children = scrollRef.current.children;
    if (children[index]) {
      (children[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveIndex(index);
    }
  };

  const nextCard = () => {
    if (activeIndex < screens.length - 1) {
      scrollToCard(activeIndex + 1);
    }
  };

  const prevCard = () => {
    if (activeIndex > 0) {
      scrollToCard(activeIndex - 1);
    }
  };

  return (
    <section
      id="uygulama-deneyimi"
      aria-label="Takasla Mobil Uygulama Deneyimi"
      className="py-16 sm:py-24 md:py-28 bg-[#FAFAFA] text-gray-900 relative overflow-hidden border-b border-gray-100"
    >
      {/* Background soft ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#00E676]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            Takasla Deneyimi Cebinizde
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
            İlan vermekten teklif göndermeye, canlı mesajlaşmadan güvenli takas anlaşmalarına kadar tüm süreç elinizin altında.
          </p>
        </div>

        {/* Category Tabs for Fast Switching */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar -mx-4 px-4 sm:mx-0">
          {screens.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToCard(index)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeIndex === index
                  ? "bg-gray-900 text-white shadow-md scale-102"
                  : "bg-white text-gray-600 hover:text-black border border-gray-200/80 hover:bg-gray-50"
              }`}
            >
              {item.badge.replace(/^\d+\.\s*/, "")}
            </button>
          ))}
        </div>

        {/* Carousel Reel: Clean App Store Cards without fake double-bezels */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-4 sm:px-8 no-scrollbar -mx-4 sm:mx-0 items-start"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {screens.map((item, index) => {
              const isSelected = activeIndex === index;
              return (
                <div
                  key={item.id}
                  onClick={() => scrollToCard(index)}
                  className={`flex-shrink-0 w-[78vw] sm:w-[280px] md:w-[310px] lg:w-[320px] snap-center transition-all duration-300 cursor-pointer ${
                    isSelected ? "scale-100 opacity-100" : "scale-[0.98] opacity-85 hover:opacity-100"
                  }`}
                >
                  {/* Clean App Store Card */}
                  <div className="relative aspect-[1284/2778] w-full rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_14px_35px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)] transition-all border border-gray-200/80 bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 78vw, (max-width: 1024px) 280px, 320px"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>

                  {/* Card Caption */}
                  <div className="mt-4 px-1 text-center sm:text-left">
                    <span className="text-[11px] font-bold text-[#00A859] uppercase tracking-wider block mb-1">
                      {item.badge}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Overlay Arrows on Desktop */}
          {activeIndex > 0 && (
            <button
              type="button"
              onClick={prevCard}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/95 text-gray-900 shadow-xl border border-gray-200 items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer z-20 active:scale-95"
              aria-label="Önceki Kart"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {activeIndex < screens.length - 1 && (
            <button
              type="button"
              onClick={nextCard}
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/95 text-gray-900 shadow-xl border border-gray-200 items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer z-20 active:scale-95"
              aria-label="Sonraki Kart"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Carousel Pagination Dots & Progress Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {screens.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToCard(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === index
                  ? "w-8 h-2 bg-[#00A859]"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`${index + 1}. Görsele Git`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
