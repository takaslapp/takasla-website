import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import SiteHeader from "@/components/market/SiteHeader";
import Breadcrumbs from "@/components/market/Breadcrumbs";
import ListingRow from "@/components/market/ListingRow";
import { AppStoreBadge } from "@/components/market/StoreBadges";
import ListingSlider from "@/components/listing/ListingSlider";
import ListingShareActions from "@/components/listing/ListingShareActions";
import Footer from "@/components/Footer";
import {
  getListingByNo,
  getListings,
  getListingsBySeller,
  isIndexable,
  toSummary,
  type Listing,
} from "@/lib/listings";
import { categorySlug, cityBySlug, listingNoFromSlug, listingPath, parseLocation, slugify } from "@/lib/taxonomy";
import { absoluteUrl, formatDateTR, relativeDateTR } from "@/lib/site";

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

function memberSince(iso: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("tr-TR", { month: "long", year: "numeric" });
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
  const seller = l.seller;

  const [sellerOthers, similarPage] = await Promise.all([
    seller?.id ? getListingsBySeller(seller.id, l.listingNo, 10) : Promise.resolve([]),
    l.category ? getListings({ category: l.category, limit: 14 }) : Promise.resolve({ items: [], nextCursor: null }),
  ]);
  const shown = new Set([l.listingNo, ...sellerOthers.map((x) => x.listingNo)]);
  const similar = similarPage.items.filter((x) => !shown.has(x.listingNo)).slice(0, 10);

  const details: [string, string][] = [
    ["İlan no", String(l.listingNo)],
    ...(l.conditionName ? ([["Durumu", l.conditionName]] as [string, string][]) : []),
    ...(l.category ? ([["Kategori", l.category]] as [string, string][]) : []),
    ...(l.location ? ([["Konum", [district, city].filter(Boolean).join(", ")]] as [string, string][]) : []),
    ...Object.entries(l.specs),
  ];
  const published = formatDateTR(l.publishedAt || l.createdAt);
  const ago = relativeDateTR(l.publishedAt || l.createdAt);

  const crumbs = [
    { name: "İlanlar", href: "/ilanlar" },
    ...(l.category && catSlug ? [{ name: l.category, href: `/kategori/${catSlug}` }] : []),
    ...(catSlug && cityInfo ? [{ name: cityInfo.name, href: `/kategori/${catSlug}/${cityInfo.slug}` }] : []),
    { name: l.title, href: path },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-12 pt-4">
        <Breadcrumbs items={crumbs} />

        {expired && (
          <p className="mt-4 rounded-lg bg-surface p-3 text-sm">
            Bu ilanın yayın süresi doldu. Benzer ilanlara aşağıdan göz atabilirsin.
          </p>
        )}

        <div className="mt-4 grid gap-x-10 gap-y-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* Mobil sıra: galeri → başlık/takas paneli → bilgiler. Masaüstünde panel sağda sabit. */}
          <div className="min-w-0 lg:col-start-1 lg:row-start-1">
            <ListingSlider images={l.images} title={l.title} />
          </div>

          <aside className="lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start">
            <h1 className="text-xl font-semibold leading-snug sm:text-2xl">{l.title}</h1>
            <p className="mt-2 text-sm text-muted">
              {[district && city ? `${district}, ${city}` : city, ago].filter(Boolean).join(" · ")}
            </p>

            {l.wantedItem && (
              <div className="mt-5 border-t border-line pt-4">
                <p className="text-sm text-muted">Karşılığında aradığı</p>
                <p className="mt-1 text-base font-medium">{l.wantedItem}</p>
              </div>
            )}

            <div className="mt-5 rounded-xl border border-line p-4">
              <p className="font-medium">Bu ilana takas teklif et</p>
              <p className="mt-1 text-sm text-muted">
                Teklif göndermek ve takasçıyla yazışmak için ilanı Takasla uygulamasında aç.
              </p>
              <div className="mt-3">
                <AppStoreBadge height={44} />
              </div>
            </div>

            {seller?.username && (
              <div className="mt-5 flex items-center gap-3 border-t border-line pt-5">
                <img
                  src={seller.avatarUrl || "/images/takasla-icon.jpg"}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 rounded-full border border-line object-cover"
                />
                <div className="min-w-0 text-sm">
                  <p className="flex items-center gap-1.5 font-medium">
                    @{seller.username}
                    {seller.isVerified && (
                      <svg width="16" height="16" viewBox="0 0 24 24" aria-label="Doğrulanmış hesap" role="img">
                        <circle cx="12" cy="12" r="10" fill="#2f6b12" />
                        <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </p>
                  <p className="text-muted">
                    {[
                      memberSince(seller.memberSince) ? `${memberSince(seller.memberSince)}'den beri üye` : null,
                      seller.swapCount > 0 ? `${seller.swapCount} takas` : null,
                      seller.rating ? `${seller.rating.toFixed(1)} puan` : null,
                    ]
                      .filter(Boolean)
                      .join(" · ") || "Takasla üyesi"}
                  </p>
                </div>
              </div>
            )}

            <div className="mt-5 border-t border-line pt-4">
              <ListingShareActions listingNo={l.listingNo} title={l.title} />
              {published && <p className="mt-2 text-xs text-muted">Yayın tarihi: {published}</p>}
            </div>

            <p className="mt-5 text-xs leading-relaxed text-muted">
              Ürünü yüz yüze, kalabalık bir yerde kontrol ederek takas et. Takasla ödeme almaz ve kargo yapmaz; kapora
              veya ön ödeme isteyenlere itibar etme.{" "}
              <Link href="/topluluk-kurallari" className="underline">
                Güvenli takas
              </Link>
            </p>
          </aside>

          <div className="min-w-0 lg:col-start-1 lg:row-start-2">
            <section className="lg:mt-2">
              <h2 className="mb-3 text-base font-semibold">İlan bilgileri</h2>
              <dl className="grid border-t border-line text-sm sm:grid-cols-2 sm:gap-x-8">
                {details.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-line py-2.5">
                    <dt className="text-muted">{k}</dt>
                    <dd className="text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {l.description && (
              <section className="mt-8">
                <h2 className="mb-3 text-base font-semibold">Açıklama</h2>
                <p className="whitespace-pre-line text-[15px] leading-relaxed">{l.description}</p>
              </section>
            )}
          </div>
        </div>
      </main>

      <div className="pb-12">
        <ListingRow
          title={seller?.username ? `@${seller.username} kullanıcısının diğer ilanları` : "Takasçının diğer ilanları"}
          listings={sellerOthers.map(toSummary)}
        />
        <ListingRow
          title="Benzer ilanlar"
          listings={similar.map(toSummary)}
          moreHref={catSlug ? `/kategori/${catSlug}` : "/ilanlar"}
        />
      </div>

      <Footer />
    </div>
  );
}
