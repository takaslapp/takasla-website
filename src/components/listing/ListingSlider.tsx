"use client";

import { useRef, useState, type TouchEvent } from "react";
import Image from "next/image";

interface ListingSliderProps {
  images: string[];
  title: string;
}

/** İlan fotoğraf galerisi: büyük görsel + küçük resimler, kaydırma ve klavye desteği. */
export default function ListingSlider({ images, title }: ListingSliderProps) {
  const list = images.filter(Boolean);
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const total = list.length;

  const go = (d: number) => total > 1 && setIndex((i) => (i + d + total) % total);

  const onTouchStart = (e: TouchEvent) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e: TouchEvent) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) go(diff > 0 ? 1 : -1);
    startX.current = null;
  };

  if (total === 0) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-surface text-sm text-muted">
        Bu ilanda fotoğraf yok
      </div>
    );
  }

  return (
    <div>
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#eef0ed] outline-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
        aria-roledescription="galeri"
        aria-label={`${title} fotoğrafları`}
      >
        <Image
          key={list[index]}
          src={list[index]}
          alt={`${title} - fotoğraf ${index + 1}`}
          fill
          sizes="(min-width: 1024px) 660px, 100vw"
          priority={index === 0}
          className="object-contain"
        />
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Önceki fotoğraf"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-sm hover:bg-surface"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Sonraki fotoğraf"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-sm hover:bg-surface"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            <span className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-0.5 text-xs text-white">
              {index + 1} / {total}
            </span>
          </>
        )}
      </div>

      {total > 1 && (
        <ul className="relative mt-2 flex gap-2 overflow-x-auto pb-1">
          {list.map((src, i) => (
            <li key={src} className="shrink-0">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Fotoğraf ${i + 1}`}
                aria-current={i === index}
                className={`relative block h-16 w-16 overflow-hidden rounded-lg border-2 ${
                  i === index ? "border-ink" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={src} alt="" fill sizes="64px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
