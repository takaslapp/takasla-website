import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ListingsPage from "@/components/market/ListingsPage";
import { getAllListings, getFacets, type Listing } from "@/lib/listings";
import { cityBySlug, parseLocation, slugify } from "@/lib/taxonomy";

export const revalidate = 300;

type Params = Promise<{ sehir: string; ilce: string }>;

async function load(sehir: string, ilce: string) {
  const city = cityBySlug(sehir);
  if (!city) return null;
  const all = await getAllListings();
  let districtName: string | null = null;
  const items: Listing[] = [];
  for (const l of all) {
    const loc = parseLocation(l.location);
    if (loc.city !== city.name || !loc.district || slugify(loc.district) !== ilce) continue;
    districtName ??= loc.district;
    items.push(l);
  }
  return { city, districtName, items };
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { sehir, ilce } = await params;
  const data = await load(sehir, ilce);
  if (!data?.districtName) return { title: "İlçe bulunamadı", robots: { index: false, follow: true } };
  const { city, districtName } = data;
  return {
    title: `${districtName}, ${city.name} takas ilanları`,
    description: `${city.name} ${districtName} ilçesindeki eşya takası ilanları. Yakınındaki kullanıcılarla yüz yüze takas et.`,
    alternates: { canonical: `/sehir/${city.slug}/${ilce}` },
  };
}

export default async function IlcePage({ params }: { params: Params }) {
  const { sehir, ilce } = await params;
  const data = await load(sehir, ilce);
  // İlan olmayan ilçeler için sayfa üretilmez (ince içerik oluşmasın).
  if (!data?.districtName) notFound();
  const { city, districtName, items } = data;

  const facets = await getFacets();
  const siblings = facets.districts
    .filter((d) => d.citySlug === city.slug && d.slug !== ilce)
    .map((d) => ({ name: d.name, slug: d.slug, count: d.count, href: `/sehir/${city.slug}/${d.slug}` }));

  return (
    <ListingsPage
      title={`${districtName} takas ilanları`}
      intro={`${city.name} ${districtName} ilçesinde takasa açık ${items.length} ürün.`}
      crumbs={[
        { name: "İlanlar", href: "/ilanlar" },
        { name: city.name, href: `/sehir/${city.slug}` },
        { name: districtName, href: `/sehir/${city.slug}/${ilce}` },
      ]}
      listings={items.slice(0, 96)}
      nextCursor={null}
      basePath={`/sehir/${city.slug}/${ilce}`}
      related={siblings.length ? { title: `${city.name} ilçeleri`, links: siblings } : undefined}
    />
  );
}
