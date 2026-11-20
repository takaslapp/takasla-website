"use client";

import { useState } from "react";

const norm = (s: string) =>
  s.toLocaleLowerCase("tr-TR").replace(/ı/g, "i").normalize("NFD").replace(/[̀-ͯ]/g, "");

/**
 * Blog listesinde arama ve kategori filtresi. Yazıların tamamı sunucuda HTML olarak gelir
 * (arama motorları hepsini görür); bu bileşen yalnızca eşleşmeyen kartları gizler.
 */
export default function BlogFilter({ targetId, categories }: { targetId: string; categories: string[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const [empty, setEmpty] = useState(false);

  const apply = (query: string, category: string | null) => {
    const root = document.getElementById(targetId);
    if (!root) return;
    const nq = norm(query.trim());
    let shown = 0;
    root.querySelectorAll<HTMLElement>("[data-post]").forEach((el) => {
      const ok = (!category || el.dataset.category === category) && (!nq || norm(el.textContent || "").includes(nq));
      el.hidden = !ok;
      if (ok) shown++;
    });
    setEmpty(shown === 0);
  };

  const tab = (c: string | null, label: string) => (
    <button
      key={label}
      type="button"
      aria-pressed={cat === c}
      onClick={() => {
        setCat(c);
        apply(q, c);
      }}
      className={`h-9 shrink-0 rounded-full border px-4 text-sm ${
        cat === c ? "border-ink bg-ink text-white" : "border-line text-muted hover:border-ink hover:text-ink"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div>
      <label htmlFor="blog-ara" className="sr-only">
        Yazılarda ara
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
          id="blog-ara"
          type="search"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            apply(e.target.value, cat);
          }}
          placeholder="Yazılarda ara"
          className="h-11 w-full rounded-lg border border-line bg-white pl-10 pr-3 text-base outline-none placeholder:text-muted focus:border-ink sm:text-[15px]"
        />
      </div>
      {categories.length > 1 && (
        <div className="relative mt-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]" role="group" aria-label="Kategoriler">
          {tab(null, "Hepsi")}
          {categories.map((c) => tab(c, c))}
        </div>
      )}
      {empty && (
        <p className="mt-6 text-sm text-muted" role="status">
          Aramana uygun yazı bulunamadı.
        </p>
      )}
    </div>
  );
}
