import Link from "next/link";
import Image from "next/image";
import { listingPath, parseLocation } from "@/lib/taxonomy";
import { relativeDateTR } from "@/lib/site";

export interface CardListing {
  listingNo: number;
  title: string;
  imageUrl: string | null;
  location: string;
  conditionName: string;
  wantedItem: string | null;
  publishedAt: string | null;
  createdAt: string | null;
}

export default function ListingCard({ listing, priority = false }: { listing: CardListing; priority?: boolean }) {
  const { city, district } = parseLocation(listing.location);
  const place = [district, city].filter(Boolean).join(", ");
  const date = relativeDateTR(listing.publishedAt || listing.createdAt);

  return (
    <Link href={listingPath(listing)} className="group flex w-full flex-col">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-surface">
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
      </div>
      <div className="flex flex-1 flex-col pt-2">
        <h3 className="line-clamp-2 text-[15px] leading-snug text-ink">{listing.title}</h3>
        {listing.wantedItem && (
          <p className="mt-0.5 line-clamp-1 text-[13px] text-muted">
            Takas: <span className="text-ink">{listing.wantedItem}</span>
          </p>
        )}
        <p className="mt-1 text-xs text-muted">{[place, date].filter(Boolean).join(" · ")}</p>
      </div>
    </Link>
  );
}
