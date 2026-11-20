import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ListingsPage from "@/components/market/ListingsPage";
import { getAllListings, getListings, parseCursor } from "@/lib/listings";
import { CATEGORY_SEO } from "@/lib/category-seo";
import { CATEGORY_LIST, categoryBySlug, parseLocation, slugify } from "@/lib/taxonomy";

export const revalidate = 60;

type Params = Promise<{ kategori: string }>;
type SP = Promise<{ [key: string]: string | string[] | undefined }>;

export function generateStaticParams() {
  return CATEGORY_LIST.map((c) => ({ kategori: c.slug }));
}

export async function generateMetadata({ params, searchParams }: { params: Params; searchParams: SP }): Promise<Metadata> {
  const { kategori } = await params;
  const cat = categoryBySlug(kategori);
  if (!cat) return {};
  const sp = await searchParams;
  const { items } = await getListings({ category: cat.name, limit: 1 });
  const seo = CATEGORY_SEO[cat.slug];
  return {
    title: seo?.title ?? `${cat.name} takas ilanları`,
    description:
      seo?.description ?? `${cat.name} kategorisindeki takas ilanları. Kullanmadığın eşyayı para ödemeden takas et.`,
    alternates: { canonical: `/kategori/${cat.slug}` },
    robots: items.length === 0 || sp.sonraki ? { index: false, follow: true } : undefined,
  };
}

export default async function KategoriPage({ params, searchParams }: { params: Params; searchParams: SP }) {
  const { kategori } = await params;
  const cat = categoryBySlug(kategori);
  if (!cat) notFound();
  const sp = await searchParams;

  const [{ items, nextCursor }, all] = await Promise.all([
    getListings({ category: cat.name, cursor: parseCursor(sp.sonraki), limit: 24 }),
    getAllListings(),
  ]);

  // Bu kategoride ilan bulunan şehirler
  const counts = new Map<string, { name: string; slug: string; count: number }>();
  for (const l of all) {
    if (l.category !== cat.name) continue;
    const c = parseLocation(l.location).city;
    if (!c) continue;
    const s = slugify(c);
    const f = counts.get(s) ?? { name: c, slug: s, count: 0 };
    f.count++;
    counts.set(s, f);
  }
  const cities = [...counts.values()].sort((a, b) => b.count - a.count);

  const seo = CATEGORY_SEO[cat.slug];
  return (
    <ListingsPage
      title={seo?.h1 ?? `${cat.name} takas ilanları`}
      intro={
        seo?.intro ??
        `${cat.name} kategorisinde takasa açık ürünler. İlanı aç, beğendiysen uygulamadan kendi ürününle teklif gönder.`
      }
      seoSections={sp.sonraki ? undefined : seo?.sections}
      crumbs={[
        { name: "İlanlar", href: "/ilanlar" },
        { name: cat.name, href: `/kategori/${cat.slug}` },
      ]}
      listings={items}
      nextCursor={nextCursor}
      basePath={`/kategori/${cat.slug}`}
      activeCategory={cat.slug}
      related={{
        title: "Şehre göre",
        links: cities.map((c) => ({ ...c, href: `/kategori/${cat.slug}/${c.slug}` })),
      }}
      emptyText="Bu kategoride şu an yayında ilan yok."
    />
  );
}
