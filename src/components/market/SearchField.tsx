"use client";

import { useEffect, useState } from "react";

/** Arama kutusunda sırayla gösterilen popüler takas aramaları. */
const TERMS = ["iPhone", "PlayStation 5", "Bisiklet", "Bebek arabası"];
const INTERVAL = 2600;

/**
 * Arama kutusu: boşken "Ne takaslamak istiyorsun?" ve popüler eşyaları aşağıdan yukarı
 * kayan bir animasyonla dönüşümlü gösterir. Odaklanınca veya yazı girilince gizlenir.
 */
export default function SearchField({ defaultValue = "" }: { defaultValue?: string }) {
  const [value, setValue] = useState(defaultValue);
  const [focused, setFocused] = useState(false);
  const [index, setIndex] = useState(-1); // -1: ilk ifade

  const show = !value && !focused;

  useEffect(() => {
    if (!show || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % TERMS.length), INTERVAL);
    return () => clearInterval(t);
  }, [show]);

  const text = index < 0 ? null : TERMS[index];

  return (
    <div className="relative min-w-0 flex-1">
      <input
        id="site-search"
        name="q"
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={focused ? "Ne takaslamak istiyorsun?" : ""}
        className="h-10 w-full min-w-0 rounded-l-lg border border-r-0 border-line bg-surface px-3 text-base outline-none placeholder:text-muted focus:border-ink focus:bg-white focus-visible:outline-none sm:text-sm"
      />
      {show && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-3 right-2 flex items-center overflow-hidden text-base text-muted sm:text-sm"
        >
          {text === null ? (
            <span key="ilk" className="search-hint-in truncate">
              Ne takaslamak istiyorsun?
            </span>
          ) : (
            <span key={text} className="search-hint-in truncate">
              <span className="hidden sm:inline">Takasla&apos;da ara: </span>
              <span className="font-medium text-ink">{text}</span>
            </span>
          )}
        </span>
      )}
    </div>
  );
}
