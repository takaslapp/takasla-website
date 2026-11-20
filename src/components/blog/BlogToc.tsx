"use client";

import { useEffect, useState } from "react";

export interface TocEntry {
  id: string;
  text: string;
}

/** İçindekiler: okunan başlığı vurgular. */
export default function BlogToc({ items }: { items: TocEntry[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-90px 0px -65% 0px" }
    );
    els.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, [items]);

  return (
    <nav aria-label="İçindekiler">
      <p className="text-xs font-semibold tracking-wide text-muted">İÇİNDEKİLER</p>
      <ol className="mt-3 space-y-0.5 border-l border-line text-sm">
        {items.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              aria-current={active === h.id ? "location" : undefined}
              className={`-ml-px block border-l-2 py-1.5 pl-3 leading-snug ${
                active === h.id ? "border-link font-medium text-ink" : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
