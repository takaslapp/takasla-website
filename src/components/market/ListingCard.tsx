import Link from "next/link";
import Image from "next/image";
import { listingPath, parseLocation } from "@/lib/taxonomy";

export interface CardListing {
  listingNo: number;
  title: string;
  imageUrl: string | null;
  location: string;
  conditionName: string;
  wantedItem: string | null;
  publishedAt: string | null;
  createdAt: string | null;
  /** Fotoğraf sayısı (özet veride) */
  imageCount?: number;
  /** Tam ilan verisinde fotoğraflar */
  images?: string[];
}

export default function ListingCard({ listing, priority = false }: { listing: CardListing; priority?: boolean }) {
  const { city, district } = parseLocation(listing.location);
  const place = district || city;

  return (
    <Link
      href={listingPath(listing)}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
    >
      <div className="relative aspect-square overflow-hidden bg-surface">
        {listing.imageUrl ? (
          <Image
            src={listing.imageUrl}
            alt={listing.title}
            fill
            sizes="(min-width: 1024px) 230px, (min-width: 640px) 30vw, 46vw"
            priority={priority}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-muted">Fotoğraf yok</div>
        )}
        {listing.conditionName && (
          <span className="absolute left-2 top-2 max-w-[calc(100%-1rem)] truncate rounded-md bg-white/95 px-1.5 py-0.5 text-[11px] font-medium text-ink shadow-sm">
            {listing.conditionName}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-2.5 sm:p-3">
        <h3 className="line-clamp-2 text-[14px] font-medium leading-snug text-ink sm:text-[15px]">{listing.title}</h3>
        {listing.wantedItem && (
          <p className="mt-1.5 flex items-start gap-1 text-[12.5px] leading-snug text-muted">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="mt-[2px] shrink-0 text-link">
              <path d="M7 4L3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7" />
            </svg>
            <span className="line-clamp-1">
              <span className="sr-only">Karşılığında: </span>
              {listing.wantedItem}
            </span>
          </p>
        )}
        <div className="mt-auto flex items-center gap-2 pt-2.5 text-[12px] text-muted">
          {place && (
            <span className="flex min-w-0 items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="shrink-0">
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              <span className="truncate">{place}</span>
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
