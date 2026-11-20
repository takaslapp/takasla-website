"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import ListingCard, { type CardListing } from "./ListingCard";

interface Props {
  initial: CardListing[];
  initialNext: string | null;
  /** /api/ilanlar için ek filtreler (kategori, sehir, q) */
  filters?: Record<string, string | undefined>;
  /** JavaScript kapalıysa ve botlar için taranabilir sonraki sayfa yolu */
  fallbackPath: string;
}

/**
 * İlanları kaydırdıkça otomatik yükler. Arama motorları ve JS kapalı
 * kullanıcılar için altta normal "Daha fazla ilan" bağlantısı kalır.
 */
export default function InfiniteListings({ initial, initialNext, filters = {}, fallbackPath }: Props) {
  const [items, setItems] = useState(initial);
  const [next, setNext] = useState(initialNext);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  const busy = useRef(false);

  const loadMore = useCallback(async () => {
    if (!next || busy.current) return;
    busy.current = true;
    setLoading(true);
    setFailed(false);
    try {
      const sp = new URLSearchParams({ sonraki: next });
      for (const [k, v] of Object.entries(filters)) if (v) sp.set(k, v);
      const res = await fetch(`/api/ilanlar?${sp.toString()}`);
      if (!res.ok) throw new Error(String(res.status));
      const data: { items: CardListing[]; next: string | null } = await res.json();
      setItems((prev) => {
        const seen = new Set(prev.map((p) => p.listingNo));
        return [...prev, ...data.items.filter((i) => !seen.has(i.listingNo))];
      });
      setNext(data.next);
    } catch {
      setFailed(true);
    } finally {
      busy.current = false;
      setLoading(false);
    }
  }, [next, filters]);

  useEffect(() => {
    const el = sentinel.current;
    if (!el || !next || failed) return;
    const io = new IntersectionObserver((entries) => entries[0]?.isIntersecting && loadMore(), {
      rootMargin: "800px 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, [next, failed, loadMore]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-5">
        {items.map((l, i) => (
          <li key={l.listingNo} className="flex">
            <ListingCard listing={l} priority={i < 5} />
          </li>
        ))}
      </ul>

      <div ref={sentinel} className="mt-8 flex min-h-10 justify-center">
        {loading && <p className="text-sm text-muted">İlanlar yükleniyor…</p>}
        {failed && (
          <button type="button" onClick={loadMore} className="text-sm text-link underline">
            Yüklenemedi, tekrar dene
          </button>
        )}
        {!loading && !failed && next && (
          <Link
            href={`${fallbackPath}?sonraki=${encodeURIComponent(next)}`}
            rel="next"
            onClick={(e) => {
              e.preventDefault();
              loadMore();
            }}
            className="inline-flex h-10 items-center rounded-lg border border-line px-5 text-sm font-medium hover:border-ink"
          >
            Daha fazla ilan
          </Link>
        )}
        {!next && items.length > 0 && <p className="text-sm text-muted">Tüm ilanları gördün.</p>}
      </div>
    </>
  );
}
