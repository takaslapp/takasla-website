import Link from "next/link";
import ListingCard, { type CardListing } from "./ListingCard";

interface Props {
  title: string;
  listings: CardListing[];
  moreHref?: string;
  moreLabel?: string;
}

/** Yatay kaydırılan ilan şeridi (ör. en çok görüntülenenler). */
export default function ListingRow({ title, listings, moreHref, moreLabel = "Tümünü gör" }: Props) {
  if (listings.length === 0) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 pt-8">
      <div className="mb-3 flex items-end justify-between gap-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {moreHref && (
          <Link href={moreHref} className="shrink-0 text-sm text-link underline">
            {moreLabel}
          </Link>
        )}
      </div>
      <ul className="flex snap-x gap-3 overflow-x-auto pb-2 [scrollbar-width:thin]">
        {listings.map((l) => (
          <li key={l.listingNo} className="flex w-[44%] shrink-0 snap-start sm:w-[30%] lg:w-[18.5%]">
            <ListingCard listing={l} />
          </li>
        ))}
      </ul>
    </section>
  );
}
