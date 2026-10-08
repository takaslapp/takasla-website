"use client";

import { useState, useRef, TouchEvent } from "react";

interface ListingSliderProps {
  images: string[];
  title: string;
}

export default function ListingSlider({ images, title }: ListingSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const displayImages = Array.isArray(images) ? images.filter(Boolean) : [];
  const total = displayImages.length;

  const nextSlide = () => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (diff > minSwipeDistance) {
      nextSlide();
    } else if (diff < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (total === 0) {
    return (
      <div className="w-full aspect-[4/3] sm:aspect-square bg-gray-100 rounded-2xl border border-gray-200 flex flex-col items-center justify-center text-gray-400">
        <svg className="w-10 h-10 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs font-medium">Görsel bulunmuyor</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Main Image Slider Viewport */}
      <div
        className="relative w-full aspect-[4/3] sm:aspect-square bg-gray-50 rounded-2xl border border-gray-200/90 overflow-hidden flex items-center justify-center select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={displayImages[currentIndex]}
          alt={`${title} - Görsel ${currentIndex + 1}`}
          className="w-full h-full object-contain p-2 sm:p-4 transition-all duration-200"
        />

        {/* Counter Badge (e.g. 1 / 5) */}
        {total > 1 && (
          <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] font-medium px-2.5 py-1 rounded-full backdrop-blur-xs">
            {currentIndex + 1} / {total}
          </div>
        )}

        {/* Previous Button */}
        {total > 1 && (
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Önceki Görsel"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white shadow-md text-gray-800 flex items-center justify-center border border-gray-200 transition-transform active:scale-95 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Next Button */}
        {total > 1 && (
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Sonraki Görsel"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white shadow-md text-gray-800 flex items-center justify-center border border-gray-200 transition-transform active:scale-95 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Thumbnails Row (All 5 images clickable & swipeable) */}
      {total > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-0.5 scrollbar-none">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Görsel ${idx + 1}`}
              className={`relative shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 bg-gray-50 transition-all cursor-pointer ${
                currentIndex === idx
                  ? "border-gray-900 ring-2 ring-gray-900/10"
                  : "border-gray-200 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt={`${title} - Küçük Görsel ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
