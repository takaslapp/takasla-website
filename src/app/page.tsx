import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/market/SiteHeader";
import CategoryBar from "@/components/market/CategoryBar";
import BannerStrip from "@/components/market/BannerStrip";
import ListingRow from "@/components/market/ListingRow";
import NearbyListings from "@/components/market/NearbyListings";
import InfiniteListings from "@/components/market/InfiniteListings";
import Footer from "@/components/Footer";
import { getBanners, getFacets, getListings, getMostViewed, serializeCursor, toSummary } from "@/lib/listings";
import { getAllPostsAsync } from "@/data/blog-posts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: { absolute: "Takasla - Eşya takası ilanları | Parayla değil, Takasla" },
  description:
    "Kullanmadığın eşyayı ilana koy, ihtiyacın olan ürünle takas et. Elektronik, giyim, ev eşyası ve daha fazlasında Türkiye genelinde takas ilanları.",
  alternates: { canonical: "/" },
};

export default async function Home() {
  const [banners, mostViewed, firstPage, facets, posts] = await Promise.all([
    getBanners(),
    getMostViewed(12),
    getListings({ limit: 20 }),
    getFacets(),
    getAllPostsAsync(),
  ]);

  const topCategory = facets.categories[0];
  const topCategoryItems = topCategory
    ? (await getListings({ category: topCategory.name, limit: 12 })).items
    : [];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <CategoryBar />

      <main className="flex-1 pb-12">
        <h1 className="sr-only">Takasla: eşya takası ilanları</h1>

        <BannerStrip banners={banners} />

        <NearbyListings />

        <ListingRow title="En çok görüntülenenler" listings={mostViewed.map(toSummary)} moreHref="/ilanlar" />

        {topCategory && (
          <ListingRow
            title={`${topCategory.name} kategorisinde yeni`}
            listings={topCategoryItems.map(toSummary)}
            moreHref={`/kategori/${topCategory.slug}`}
          />
        )}

        <section className="mx-auto max-w-6xl px-4 pt-10">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-lg font-semibold">Son eklenen ilanlar</h2>
            <span className="text-sm text-muted">{facets.total} ilan yayında</span>
          </div>
          <InfiniteListings
            initial={firstPage.items.map(toSummary)}
            initialNext={firstPage.nextCursor ? serializeCursor(firstPage.nextCursor) : null}
            fallbackPath="/ilanlar"
          />
        </section>

        <section className="mx-auto mt-14 max-w-6xl border-t border-line px-4 pt-10 text-sm leading-relaxed text-muted">
          <h2 className="mb-2 text-base font-semibold text-ink">Takasla ile eşya takası</h2>
          <p>
            Takasla, kullanmadığın eşyaları para ödemeden başka kullanıcıların eşyalarıyla değiştirebildiğin bir takas
            ilan platformudur. İlan vermek ücretsizdir; beğendiğin ilana kendi ürünlerinden birini veya birkaçını teklif
            edersin, karşı taraf kabul ederse uygulama içinden yazışıp teslimatı birlikte planlarsınız.
          </p>
          {facets.categories.length > 0 && (
            <p className="mt-3">
              Kategoriler:{" "}
              {facets.categories.map((c, i) => (
                <span key={c.slug}>
                  {i > 0 && ", "}
                  <Link href={`/kategori/${c.slug}`} className="text-ink underline">
                    {c.name}
                  </Link>
                </span>
              ))}
              .
            </p>
          )}
          {facets.cities.length > 0 && (
            <p className="mt-3">
              Şehirler:{" "}
              {facets.cities.map((c, i) => (
                <span key={c.slug}>
                  {i > 0 && ", "}
                  <Link href={`/sehir/${c.slug}`} className="text-ink underline">
                    {c.name} takas ilanları
                  </Link>
                </span>
              ))}
              .
            </p>
          )}
          <p className="mt-3">
            İlk kez mi takas yapacaksın?{" "}
            <Link href="/nasil-calisir" className="text-ink underline">
              Takasla nasıl çalışır
            </Link>
            {posts.length > 0 && (
              <>
                {" "}sayfasına ve{" "}
                <Link href={`/blog/${posts[0].slug}`} className="text-ink underline">
                  {posts[0].title}
                </Link>{" "}
                gibi{" "}
                <Link href="/blog" className="text-ink underline">
                  takas rehberlerimize
                </Link>{" "}
                göz at.
              </>
            )}
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
