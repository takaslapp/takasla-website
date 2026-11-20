import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import SiteHeader from "@/components/market/SiteHeader";
import Breadcrumbs from "@/components/market/Breadcrumbs";
import ListingCard from "@/components/market/ListingCard";
import AppCta from "@/components/market/AppCta";
import ListingSlider from "@/components/listing/ListingSlider";
import ListingShareActions from "@/components/listing/ListingShareActions";
import Footer from "@/components/Footer";
import { getListingByNo, getListings, isIndexable, type Listing } from "@/lib/listings";
import { categorySlug, cityBySlug, listingNoFromSlug, listingPath, parseLocation, slugify } from "@/lib/taxonomy";
import { absoluteUrl, formatDateTR } from "@/lib/site";

export const revalidate = 300;

type Params = Promise<{ slug: string }>;

async function load(slug: string): Promise<Listing | null> {
  const no = listingNoFromSlug(slug);
  if (!no) return null;
  return getListingByNo(no);
}

function isExpired(l: Listing): boolean {
  return Boolean(l.expiresAt && Date.parse(l.expiresAt) < Date.now());
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const l = await load(slug);
  if (!l) return { title: "İlan bulunamadı", robots: { index: false, follow: true } };

  const { city, district } = parseLocation(l.location);
  const place = [district, city].filter(Boolean).join(", ");
  const desc = l.description
    ? `${l.description.replace(/\s+/g, " ").slice(0, 120)}${l.description.length > 120 ? "…" : ""}`
    : `${l.title} takas ilanı.`;
  const description = `${desc}${place ? ` ${place}.` : ""} Takasla'da takas teklifi gönder.`;
  const path = listingPath(l);

  return {
    title: `${l.title}${city ? ` - ${city}` : ""} takas ilanı`,
    description,
    alternates: { canonical: path },
    robots: !isIndexable(l) || isExpired(l) ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      url: absoluteUrl(path),
      title: l.title,
      description,
      siteName: "Takasla",
      locale: "tr_TR",
      images: l.imageUrl ? [{ url: l.imageUrl, alt: l.title }] : undefined,
    },
    twitter: { card: "summary_large_image", title: l.title, description, images: l.imageUrl ? [l.imageUrl] : undefined },
  };
}

export default async function IlanPage({ params }: { params: Params }) {
  const { slug } = await params;
  const l = await load(slug);
  if (!l) notFound();

  // Başlık değiştiyse ya da eski/eksik slug ile gelindiyse kalıcı olarak doğru adrese yönlendir.
  const path = listingPath(l);
  if (`/ilan/${slug}` !== path) permanentRedirect(path);

  const { city, district } = parseLocation(l.location);
  const cityInfo = city ? cityBySlug(slugify(city)) : undefined;
  const catSlug = l.category ? categorySlug(l.category) : null;
  const expired = isExpired(l);

  const similar = l.category
    ? (await getListings({ category: l.category, limit: 9 })).items.filter((x) => x.listingNo !== l.listingNo).slice(0, 8)
    : [];

  const details: [string, string][] = [
    ["İlan no", String(l.listingNo)],
    ...(l.conditionName ? ([["Durum", l.conditionName]] as [string, string][]) : []),
    ...(l.category ? ([["Kategori", l.category]] as [string, string][]) : []),
    ...(l.location ? ([["Konum", [district, city].filter(Boolean).join(", ")]] as [string, string][]) : []),
    ...Object.entries(l.specs),
  ];
  const published = formatDateTR(l.publishedAt || l.createdAt);

  const crumbs = [
    { name: "İlanlar", href: "/ilanlar" },
    ...(l.category && catSlug ? [{ name: l.category, href: `/kategori/${catSlug}` }] : []),
    ...(catSlug && cityInfo ? [{ name: cityInfo.name, href: `/kategori/${catSlug}/${cityInfo.slug}` }] : []),
    { name: l.title, href: path },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
        <Breadcrumbs items={crumbs} />

        {expired && (
          <p className="mt-4 rounded-lg border border-line bg-surface p-3 text-sm">
            Bu ilanın yayın süresi doldu. Benzer ilanlara aşağıdan göz atabilirsin.
          </p>
        )}

        <div className="mt-4 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ListingSlider images={l.images} title={l.title} />
          </div>

          <div className="space-y-5 lg:col-span-5">
            <div>
              <h1 className="text-xl font-semibold leading-snug sm:text-2xl">{l.title}</h1>
              {published && <p className="mt-1 text-xs text-muted">Yayın tarihi: {published}</p>}
            </div>

            {l.wantedItem && (
              <div className="rounded-lg border border-line p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-muted">Karşılığında aradığı</p>
                <p className="mt-1 font-medium">{l.wantedItem}</p>
              </div>
            )}

            <AppCta />

            <dl className="divide-y divide-line rounded-lg border border-line text-sm">
              {details.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 px-4 py-2.5">
                  <dt className="text-muted">{k}</dt>
                  <dd className="text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>

            {l.seller?.username && (
              <div className="flex items-center gap-3 rounded-lg border border-line p-4">
                {l.seller.avatarUrl ? (
                  <img src={l.seller.avatarUrl} alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-sm font-semibold">
                    {l.seller.username.slice(0, 1).toUpperCase()}
                  </div>
                )}
                <div className="min-w-0 text-sm">
                  <p className="font-medium">
                    @{l.seller.username}
                    {l.seller.isVerified && <span className="ml-1.5 text-xs text-link">Doğrulanmış</span>}
                  </p>
                  <p className="text-xs text-muted">
                    {l.seller.swapCount > 0 ? `${l.seller.swapCount} tamamlanmış takas` : "Henüz tamamlanmış takası yok"}
                    {l.seller.rating ? ` · ${l.seller.rating.toFixed(1)} puan` : ""}
                  </p>
                </div>
              </div>
            )}

            <ListingShareActions listingNo={l.listingNo} title={l.title} />
          </div>
        </div>

        {l.description && (
          <section className="mt-8 max-w-3xl">
            <h2 className="mb-2 text-lg font-semibold">Açıklama</h2>
            <p className="whitespace-pre-line text-sm leading-relaxed">{l.description}</p>
          </section>
        )}

        <section className="mt-8 max-w-3xl rounded-lg border border-line p-4 text-sm text-muted">
          <h2 className="mb-1 font-semibold text-ink">Güvenli takas için</h2>
          Ürünü teslim almadan önce yüz yüze, kalabalık bir yerde kontrol et. Takasla teslimat yapmaz ve ödeme almaz;
          ilan sahibinden kapora veya ön ödeme isteyen kişilere itibar etme.{" "}
          <Link href="/topluluk-kurallari" className="text-link underline">
            Topluluk kuralları
          </Link>
        </section>

        {similar.length > 0 && (
          <section className="mt-10">
            <div className="mb-4 flex items-end justify-between">
              <h2 className="text-lg font-semibold">Benzer ilanlar</h2>
              {catSlug && (
                <Link href={`/kategori/${catSlug}`} className="text-sm text-link underline">
                  Tümünü gör
                </Link>
              )}
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
              {similar.map((s) => (
                <li key={s.listingNo} className="flex">
                  <ListingCard listing={s} />
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
