import Link from "next/link";
import type { Listing, ListingCursor } from "@/lib/listings";
import { serializeCursor } from "@/lib/listings";
import ListingCard from "./ListingCard";

interface ListingGridProps {
  listings: Listing[];
  /** Sonraki sayfa için temel yol ve mevcut sorgu parametreleri */
  nextCursor?: ListingCursor | null;
  basePath?: string;
  params?: Record<string, string | undefined>;
  emptyText?: string;
}

export default function ListingGrid({ listings, nextCursor, basePath, params = {}, emptyText }: ListingGridProps) {
  if (listings.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-line px-6 py-16 text-center">
        <p className="font-medium">{emptyText || "Bu aramaya uygun ilan bulunamadı."}</p>
        <p className="mt-1 text-sm text-muted">Farklı bir kelime deneyebilir veya tüm ilanlara göz atabilirsin.</p>
        <Link href="/ilanlar" className="mt-4 inline-block text-sm font-medium text-link underline">
          Tüm ilanları gör
        </Link>
      </div>
    );
  }

  let nextHref: string | null = null;
  if (nextCursor && basePath) {
    const sp = new URLSearchParams();
    for (const [k, v] of Object.entries(params)) if (v) sp.set(k, v);
    sp.set("sonraki", serializeCursor(nextCursor));
    nextHref = `${basePath}?${sp.toString()}`;
  }

  return (
    <>
      <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {listings.map((l, i) => (
          <li key={l.listingNo} className="flex">
            <ListingCard listing={l} priority={i < 4} />
          </li>
        ))}
      </ul>
      {nextHref && (
        <div className="mt-8 text-center">
          <Link
            href={nextHref}
            rel="next"
            className="inline-flex h-10 items-center rounded-lg border border-line px-5 text-sm font-medium hover:border-ink"
          >
            Daha fazla ilan
          </Link>
        </div>
      )}
    </>
  );
}
