"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Banner şeridini 6 saniyede bir sonraki bannera kaydırır (yalnızca şerit taşıyorsa, yani mobil/tablette).
 * Kullanıcı dokunurken veya fare üzerindeyken durur; "hareketi azalt" tercihine uyar.
 */
export default function BannerAutoScroll({ children, interval = 6000 }: { children: ReactNode; interval?: number }) {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ul = ref.current;
    if (!ul || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let paused = false;
    let resumeTimer: ReturnType<typeof setTimeout> | undefined;
    const pause = () => {
      paused = true;
      clearTimeout(resumeTimer);
    };
    const resume = () => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => (paused = false), interval);
    };

    const tick = setInterval(() => {
      if (paused || document.hidden) return;
      const max = ul.scrollWidth - ul.clientWidth;
      if (max <= 4) return; // her şey sığıyorsa (masaüstü) kaydırma yok
      const items = Array.from(ul.children) as HTMLElement[];
      const next = items.find((el) => el.offsetLeft > ul.scrollLeft + 8);
      const atEnd = ul.scrollLeft >= max - 4 || !next;
      ul.scrollTo({ left: atEnd ? 0 : next.offsetLeft, behavior: "smooth" });
    }, interval);

    ul.addEventListener("pointerenter", pause);
    ul.addEventListener("pointerleave", resume);
    ul.addEventListener("touchstart", pause, { passive: true });
    ul.addEventListener("touchend", resume, { passive: true });
    return () => {
      clearInterval(tick);
      clearTimeout(resumeTimer);
      ul.removeEventListener("pointerenter", pause);
      ul.removeEventListener("pointerleave", resume);
      ul.removeEventListener("touchstart", pause);
      ul.removeEventListener("touchend", resume);
    };
  }, [interval]);

  return (
    <ul
      ref={ref}
      className="relative flex snap-x snap-mandatory gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {children}
    </ul>
  );
}
