import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ListingsPage from "@/components/market/ListingsPage";
import { getListings, parseCursor } from "@/lib/listings";
import { categoryBySlug, cityBySlug } from "@/lib/taxonomy";

export const revalidate = 60;

type Params = Promise<{ kategori: string; sehir: string }>;
type SP = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateMetadata({ params, searchParams }: { params: Params; searchParams: SP }): Promise<Metadata> {
  const { kategori, sehir } = await params;
  const cat = categoryBySlug(kategori);
  const city = cityBySlug(sehir);
  if (!cat || !city) return {};
  const sp = await searchParams;
  const { items } = await getListings({ category: cat.name, city: city.name, limit: 1 });
  return {
    title: `${city.name} ${cat.name} takas ilanları`,
    description: `${city.name} ilindeki ${cat.name} takas ilanları. Takasla ile ${city.name}'da kullanmadığın eşyayı takas et.`,
    alternates: { canonical: `/kategori/${cat.slug}/${city.slug}` },
    // İlan olmayan kombinasyonlar dizine eklenmez (ince içerik oluşmasın).
    robots: items.length === 0 || sp.sonraki ? { index: false, follow: true } : undefined,
  };
}

export default async function KategoriSehirPage({ params, searchParams }: { params: Params; searchParams: SP }) {
  const { kategori, sehir } = await params;
  const cat = categoryBySlug(kategori);
  const city = cityBySlug(sehir);
  if (!cat || !city) notFound();
  const sp = await searchParams;
  const { items, nextCursor } = await getListings({
    category: cat.name,
    city: city.name,
    cursor: parseCursor(sp.sonraki),
    limit: 24,
  });

  return (
    <ListingsPage
      title={`${city.name} ${cat.name} ilanları`}
      intro={`${city.name} ilinde ${cat.name} kategorisinde takasa açık ürünler.`}
      crumbs={[
        { name: "İlanlar", href: "/ilanlar" },
        { name: cat.name, href: `/kategori/${cat.slug}` },
        { name: city.name, href: `/kategori/${cat.slug}/${city.slug}` },
      ]}
      listings={items}
      nextCursor={nextCursor}
      basePath={`/kategori/${cat.slug}/${city.slug}`}
      activeCategory={cat.slug}
      related={{
        title: "Diğer",
        links: [
          { name: `Tüm ${cat.name}`, slug: cat.slug, count: 0, href: `/kategori/${cat.slug}` },
          { name: `${city.name} tüm ilanlar`, slug: city.slug, count: 0, href: `/sehir/${city.slug}` },
        ],
      }}
      emptyText={`${city.name} için bu kategoride şu an ilan yok.`}
    />
  );
}
