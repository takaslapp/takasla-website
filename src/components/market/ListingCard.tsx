import Link from "next/link";
import Image from "next/image";
import type { Listing } from "@/lib/listings";
import { listingPath, parseLocation } from "@/lib/taxonomy";
import { relativeDateTR } from "@/lib/site";

export default function ListingCard({ listing, priority = false }: { listing: Listing; priority?: boolean }) {
  const { city, district } = parseLocation(listing.location);
  const place = [district, city].filter(Boolean).join(", ");
  const date = relativeDateTR(listing.publishedAt || listing.createdAt);

  return (
    <Link
      href={listingPath(listing)}
      className="group flex w-full flex-col overflow-hidden rounded-lg border border-line bg-white hover:border-ink/40"
    >
      <div className="relative aspect-square bg-surface">
        {listing.imageUrl ? (
          <Image
            src={listing.imageUrl}
            alt={listing.title}
            fill
            sizes="(min-width: 1024px) 270px, (min-width: 640px) 33vw, 50vw"
            priority={priority}
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-muted">Fotoğraf yok</div>
        )}
        {listing.conditionName && (
          <span className="absolute left-2 top-2 rounded bg-white/95 px-1.5 py-0.5 text-[11px] font-medium text-ink">
            {listing.conditionName}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <h3 className="line-clamp-2 text-sm font-medium leading-snug text-ink group-hover:underline">
          {listing.title}
        </h3>
        {listing.wantedItem && (
          <p className="line-clamp-1 text-xs text-muted">
            <span className="font-medium text-link">Takas:</span> {listing.wantedItem}
          </p>
        )}
        <p className="mt-auto pt-1 text-xs text-muted">
          {place}
          {place && date ? " · " : ""}
          {date}
        </p>
      </div>
    </Link>
  );
}
