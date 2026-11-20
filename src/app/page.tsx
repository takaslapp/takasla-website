import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/market/SiteHeader";
import CategoryBar from "@/components/market/CategoryBar";
import ListingGrid from "@/components/market/ListingGrid";
import Footer from "@/components/Footer";
import { getFacets, getListings } from "@/lib/listings";
import { getAllPostsAsync } from "@/data/blog-posts";
import { APP_STORE_URL } from "@/lib/site";

export const revalidate = 60;

export const metadata: Metadata = {
  title: { absolute: "Takasla - Eşya takası ilanları | Parayla değil, Takasla" },
  description:
    "Kullanmadığın eşyayı ilana koy, ihtiyacın olan ürünle takas et. Elektronik, giyim, ev eşyası ve daha fazlasında Türkiye genelinde takas ilanları.",
  alternates: { canonical: "/" },
};

const STEPS = [
  ["İlan ver", "Kullanmadığın ürünün fotoğrafını çek, durumunu ve karşılığında ne aradığını yaz."],
  ["Teklif gönder", "Beğendiğin ilana kendi ürünlerinden bir veya birkaçını seçerek takas teklif et."],
  ["Buluş ve takasla", "Teklif kabul edilince uygulama içinden yazışın, teslimatı birlikte planlayın."],
];

export default async function Home() {
  const [{ items }, facets, posts] = await Promise.all([
    getListings({ limit: 16 }),
    getFacets(),
    getAllPostsAsync(),
  ]);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <CategoryBar />

      <main className="flex-1">
        <section className="border-b border-line bg-surface">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold sm:text-3xl">Eşya takası ilanları</h1>
              <p className="mt-1 max-w-xl text-sm text-muted">
                Kullanmadığın eşyayı ver, ihtiyacın olanı al. Para ödemeden, ilan sahibiyle doğrudan takas.
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              <Link
                href="/ilanlar"
                className="inline-flex h-10 items-center whitespace-nowrap rounded-lg border border-line bg-white px-4 text-sm font-medium hover:border-ink"
              >
                İlanlara göz at
              </Link>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center whitespace-nowrap rounded-lg bg-brand px-4 text-sm font-semibold text-brand-ink hover:brightness-95"
              >
                Ücretsiz ilan ver
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-lg font-semibold">Yeni ilanlar</h2>
            <Link href="/ilanlar" className="text-sm text-link underline">
              Tümünü gör ({facets.total})
            </Link>
          </div>
          <ListingGrid listings={items} emptyText="Şu an yayında ilan yok." />
        </section>

        {facets.cities.length > 0 && (
          <section className="mx-auto max-w-6xl px-4 pb-8">
            <h2 className="mb-3 text-lg font-semibold">Şehirlere göre ilanlar</h2>
            <ul className="flex flex-wrap gap-2 text-sm">
              {facets.cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/sehir/${c.slug}`} className="inline-block rounded-md border border-line px-2.5 py-1 hover:border-ink">
                    {c.name} <span className="text-muted">({c.count})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-8">
            <div className="mb-4 flex items-end justify-between">
              <h2 className="text-lg font-semibold">Takasla nasıl çalışır?</h2>
              <Link href="/nasil-calisir" className="text-sm text-link underline">
                Detaylar
              </Link>
            </div>
            <ol className="grid gap-4 sm:grid-cols-3">
              {STEPS.map(([t, d], i) => (
                <li key={t} className="rounded-lg border border-line bg-white p-4">
                  <p className="text-xs font-medium text-muted">Adım {i + 1}</p>
                  <p className="mt-1 font-semibold">{t}</p>
                  <p className="mt-1 text-sm text-muted">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {posts.length > 0 && (
          <section className="mx-auto max-w-6xl px-4 py-8">
            <div className="mb-4 flex items-end justify-between">
              <h2 className="text-lg font-semibold">Takas rehberleri</h2>
              <Link href="/blog" className="text-sm text-link underline">
                Blog
              </Link>
            </div>
            <ul className="grid gap-4 sm:grid-cols-3">
              {posts.slice(0, 3).map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="group block">
                    <img
                      src={p.coverImage}
                      alt=""
                      loading="lazy"
                      className="aspect-[16/9] w-full rounded-lg border border-line object-cover"
                    />
                    <p className="mt-2 font-medium leading-snug group-hover:underline">{p.title}</p>
                    <p className="mt-1 line-clamp-2 text-sm text-muted">{p.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
