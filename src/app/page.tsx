import type { Metadata } from "next";
import SiteHeader from "@/components/market/SiteHeader";
import CategoryBar from "@/components/market/CategoryBar";
import BannerStrip from "@/components/market/BannerStrip";
import ListingRow from "@/components/market/ListingRow";
import NearbyListings from "@/components/market/NearbyListings";
import InfiniteListings from "@/components/market/InfiniteListings";
import Footer from "@/components/Footer";
import HomeSeoText from "@/components/market/HomeSeoText";
import { getBanners, getFacets, getListings, getMostViewed, serializeCursor, toSummary } from "@/lib/listings";
import { getAllPostsAsync } from "@/data/blog-posts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: { absolute: "Eşya Takası Sitesi ve Takas Uygulaması | Takasla" },
  description:
    "Kullanmadığın eşyayı ücretsiz ilan ver, telefon, elektronik, giyim ve ev eşyalarını para ödemeden takas et. Türkiye genelinde güncel takas ilanları Takasla'da.",
  openGraph: {
    title: "Eşya Takası Sitesi ve Takas Uygulaması | Takasla",
    description: "Kullanmadığın eşyayı ücretsiz ilan ver, ihtiyacın olan ürünle para ödemeden takas et.",
    url: "https://takaslapp.com",
    type: "website",
    siteName: "Takasla",
    locale: "tr_TR",
    images: [{ url: "/images/takasla-icon.jpg", width: 1024, height: 1024, alt: "Takasla" }],
  },
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
        <h1 className="sr-only">Takasla: eşya takası sitesi ve takas ilanları</h1>

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

        <HomeSeoText cities={facets.cities} posts={posts} />
      </main>

      <Footer />
    </div>
  );
}
