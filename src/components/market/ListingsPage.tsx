import Link from "next/link";
import SiteHeader from "./SiteHeader";
import CategoryBar from "./CategoryBar";
import ListingGrid from "./ListingGrid";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import Footer from "@/components/Footer";
import type { Facet, Listing, ListingCursor } from "@/lib/listings";
import { absoluteUrl } from "@/lib/site";
import { listingPath } from "@/lib/taxonomy";

interface RelatedGroup {
  title: string;
  links: (Facet & { href: string })[];
}

interface ListingsPageProps {
  title: string;
  intro?: string;
  crumbs: Crumb[];
  listings: Listing[];
  nextCursor: ListingCursor | null;
  basePath: string;
  params?: Record<string, string | undefined>;
  activeCategory?: string;
  query?: string;
  /** Yan bağlantılar: ör. bu kategorideki şehirler */
  related?: RelatedGroup | RelatedGroup[];
  emptyText?: string;
}

/** Tüm liste sayfalarının (ilanlar, kategori, şehir) ortak iskeleti. */
export default function ListingsPage(p: ListingsPageProps) {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: p.title,
    itemListElement: p.listings.slice(0, 30).map((l, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(listingPath(l)),
      name: l.title,
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader query={p.query} />
      <CategoryBar active={p.activeCategory} />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
        {p.listings.length > 0 && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
        )}
        <Breadcrumbs items={p.crumbs} />
        <div className="mb-5 mt-3">
          <h1 className="text-xl font-semibold sm:text-2xl">{p.title}</h1>
          {p.intro && <p className="mt-1 max-w-3xl text-sm text-muted">{p.intro}</p>}
        </div>

        {(Array.isArray(p.related) ? p.related : p.related ? [p.related] : [])
          .filter((g) => g.links.length > 0)
          .map((g) => (
            <div key={g.title} className="mb-5">
              <p className="mb-2 text-sm text-muted">{g.title}</p>
              <ul className="flex flex-wrap gap-2 text-sm">
                {g.links.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="inline-block rounded-md border border-line px-2.5 py-1 hover:border-ink">
                      {r.name}
                      {r.count > 0 && <span className="text-muted"> ({r.count})</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        <ListingGrid
          listings={p.listings}
          nextCursor={p.nextCursor}
          basePath={p.basePath}
          params={p.params}
          emptyText={p.emptyText}
        />
      </main>
      <Footer />
    </div>
  );
}
