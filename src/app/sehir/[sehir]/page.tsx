import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ListingsPage from "@/components/market/ListingsPage";
import { getAllListings, getFacets, getListings, parseCursor } from "@/lib/listings";
import { cityBySlug, parseLocation, slugify } from "@/lib/taxonomy";

export const revalidate = 60;

type Params = Promise<{ sehir: string }>;
type SP = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateMetadata({ params, searchParams }: { params: Params; searchParams: SP }): Promise<Metadata> {
  const { sehir } = await params;
  const city = cityBySlug(sehir);
  if (!city) return {};
  const sp = await searchParams;
  const { items } = await getListings({ city: city.name, limit: 1 });
  return {
    title: `${city.name} takas ilanları`,
    description: `${city.name} ilindeki eşya takası ilanları. Elektronik, giyim, ev eşyası ve daha fazlasını ${city.name}'da takasla.`,
    alternates: { canonical: `/sehir/${city.slug}` },
    robots: items.length === 0 || sp.sonraki ? { index: false, follow: true } : undefined,
  };
}

export default async function SehirPage({ params, searchParams }: { params: Params; searchParams: SP }) {
  const { sehir } = await params;
  const city = cityBySlug(sehir);
  if (!city) notFound();
  const sp = await searchParams;

  const [{ items, nextCursor }, all, facets] = await Promise.all([
    getListings({ city: city.name, cursor: parseCursor(sp.sonraki), limit: 24 }),
    getAllListings(),
    getFacets(),
  ]);
  const districts = facets.districts
    .filter((d) => d.citySlug === city.slug)
    .map((d) => ({ name: d.name, slug: d.slug, count: d.count, href: `/sehir/${city.slug}/${d.slug}` }));

  const counts = new Map<string, { name: string; slug: string; count: number }>();
  for (const l of all) {
    if (parseLocation(l.location).city !== city.name || !l.category) continue;
    const s = slugify(l.category);
    const f = counts.get(s) ?? { name: l.category, slug: s, count: 0 };
    f.count++;
    counts.set(s, f);
  }
  const cats = [...counts.values()].sort((a, b) => b.count - a.count);

  return (
    <ListingsPage
      title={`${city.name} takas ilanları`}
      intro={`${city.name} ilinde takasa açık ürünler. Yüz yüze teslim için yakınındaki ilanlara göz at.`}
      crumbs={[
        { name: "İlanlar", href: "/ilanlar" },
        { name: city.name, href: `/sehir/${city.slug}` },
      ]}
      listings={items}
      nextCursor={nextCursor}
      basePath={`/sehir/${city.slug}`}
      related={[
        { title: "İlçeye göre", links: districts },
        { title: "Kategoriye göre", links: cats.map((c) => ({ ...c, href: `/kategori/${c.slug}/${city.slug}` })) },
      ]}
      emptyText={`${city.name} için şu an yayında ilan yok.`}
    />
  );
}
