"use client";

import { useState } from "react";

const norm = (s: string) => s.toLocaleLowerCase("tr-TR").normalize("NFD").replace(/[̀-ͯ]/g, "");

/**
 * SSS içinde anlık arama. Soruların tamamı sunucuda HTML olarak gelir (arama motorları
 * hepsini görür); bu bileşen yalnızca eşleşmeyenleri gizler.
 */
export default function FaqSearch({ targetId }: { targetId: string }) {
  const [empty, setEmpty] = useState(false);

  const onInput = (value: string) => {
    const root = document.getElementById(targetId);
    if (!root) return;
    const q = norm(value.trim());
    let total = 0;
    root.querySelectorAll<HTMLElement>("[data-faq-group]").forEach((group) => {
      let visible = 0;
      group.querySelectorAll<HTMLDetailsElement>("[data-faq]").forEach((item) => {
        const hit = !q || norm(item.textContent || "").includes(q);
        item.hidden = !hit;
        if (q && hit) item.open = true;
        if (!q) item.open = false;
        if (hit) visible++;
      });
      group.hidden = visible === 0;
      total += visible;
    });
    setEmpty(total === 0);
  };

  return (
    <div className="max-w-3xl">
      <label htmlFor="faq-search" className="sr-only">
        Sorularda ara
      </label>
      <div className="relative">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
        <input
          id="faq-search"
          type="search"
          placeholder="Sorularda ara: TakasPara, teklif, hesap silme…"
          onChange={(e) => onInput(e.target.value)}
          className="h-11 w-full rounded-lg border border-line bg-white pl-10 pr-3 text-[15px] outline-none placeholder:text-muted focus:border-ink"
        />
      </div>
      {empty && (
        <p className="mt-4 text-sm text-muted" role="status">
          Aradığın soruyu bulamadık. Bize{" "}
          <a href="/iletisim" className="text-link underline">
            iletişim sayfasından
          </a>{" "}
          yazabilirsin.
        </p>
      )}
    </div>
  );
}
