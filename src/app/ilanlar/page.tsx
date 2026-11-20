import type { Metadata } from "next";
import ListingsPage from "@/components/market/ListingsPage";
import { getFacets, getListings, parseCursor } from "@/lib/listings";

export const revalidate = 60;

type SP = Promise<{ [key: string]: string | string[] | undefined }>;

function first(v: string | string[] | undefined): string {
  return (Array.isArray(v) ? v[0] : v)?.trim().slice(0, 80) ?? "";
}

export async function generateMetadata({ searchParams }: { searchParams: SP }): Promise<Metadata> {
  const sp = await searchParams;
  const q = first(sp.q);
  const paged = Boolean(first(sp.sonraki));
  return {
    title: q ? `"${q}" takas ilanları` : "Tüm takas ilanları",
    description: q
      ? `Takasla'da "${q}" için yayındaki takas ilanları.`
      : "Takasla'da yayındaki tüm eşya takası ilanları. Elektronik, giyim, ev eşyası ve daha fazlası; kullanmadığın eşyayla takas et.",
    alternates: { canonical: "/ilanlar" },
    // Arama sonuçları ve sonraki sayfalar dizine eklenmez, bağlantıları takip edilir.
    robots: q || paged ? { index: false, follow: true } : undefined,
  };
}

export default async function IlanlarPage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  const q = first(sp.q);
  const cursor = parseCursor(sp.sonraki);
  const [{ items, nextCursor }, facets] = await Promise.all([
    getListings({ search: q || undefined, cursor, limit: 24 }),
    getFacets(),
  ]);

  return (
    <ListingsPage
      title={q ? `"${q}" için sonuçlar` : "Tüm takas ilanları"}
      intro={q ? undefined : `${facets.total} ilan yayında. En yeni ilanlar önce listelenir.`}
      crumbs={[{ name: "İlanlar", href: "/ilanlar" }]}
      listings={items}
      nextCursor={nextCursor}
      basePath="/ilanlar"
      params={{ q: q || undefined }}
      query={q}
      related={{
        title: "Şehirler",
        links: facets.cities.slice(0, 15).map((c) => ({ ...c, href: `/sehir/${c.slug}` })),
      }}
    />
  );
}
