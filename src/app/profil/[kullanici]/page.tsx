import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import SiteHeader from "@/components/market/SiteHeader";
import Breadcrumbs from "@/components/market/Breadcrumbs";
import ListingGrid from "@/components/market/ListingGrid";
import { AppStoreBadge } from "@/components/market/StoreBadges";
import Footer from "@/components/Footer";
import { getProfileByUsername, isIndexable } from "@/lib/listings";
import { profilePath } from "@/lib/taxonomy";
import { absoluteUrl } from "@/lib/site";

export const revalidate = 300;

type Params = Promise<{ kullanici: string }>;

function memberSince(iso: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("tr-TR", { month: "long", year: "numeric", timeZone: "Europe/Istanbul" });
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { kullanici } = await params;
  const data = await getProfileByUsername(decodeURIComponent(kullanici));
  if (!data) return { title: "Kullanıcı bulunamadı", robots: { index: false, follow: true } };
  const { profile, listings } = data;
  const u = profile.username!;
  const description = `@${u} kullanıcısının Takasla'daki ${listings.length} takas ilanı${
    profile.city ? `, ${profile.city}` : ""
  }. Ürünlerine göz at, uygulamadan takas teklifi gönder.`;
  return {
    title: `@${u} takas ilanları`,
    description,
    alternates: { canonical: profilePath(u) },
    robots: listings.some(isIndexable) ? undefined : { index: false, follow: true },
    openGraph: {
      type: "profile",
      url: absoluteUrl(profilePath(u)),
      title: `@${u} - Takasla`,
      description,
      siteName: "Takasla",
      locale: "tr_TR",
      images: profile.avatarUrl ? [{ url: profile.avatarUrl }] : listings[0]?.imageUrl ? [{ url: listings[0].imageUrl }] : undefined,
    },
  };
}

export default async function ProfilPage({ params }: { params: Params }) {
  const { kullanici } = await params;
  const data = await getProfileByUsername(decodeURIComponent(kullanici));
  if (!data) notFound();
  const { profile, listings } = data;
  const u = profile.username!;
  const path = profilePath(u);
  if (decodeURIComponent(kullanici) !== u) permanentRedirect(path);

  const since = memberSince(profile.memberSince);
  const stats: [string, string][] = [
    ["Yayındaki ilan", String(listings.length)],
    ["Tamamlanan takas", String(profile.swapCount)],
    ["Puan", profile.rating && profile.rating > 0 ? profile.rating.toFixed(1) : "Henüz yok"],
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: absoluteUrl(path),
    mainEntity: {
      "@type": "Person",
      alternateName: `@${u}`,
      identifier: u,
      ...(profile.avatarUrl ? { image: profile.avatarUrl } : {}),
      ...(profile.city ? { homeLocation: { "@type": "Place", name: profile.city } } : {}),
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-4">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Breadcrumbs items={[{ name: `@${u}`, href: path }]} />

        <section className="mt-5 flex flex-col gap-6 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-4 sm:gap-5">
            <img
              src={profile.avatarUrl || "/images/takasla-icon.jpg"}
              alt=""
              width={88}
              height={88}
              className="h-[72px] w-[72px] shrink-0 rounded-full border border-line object-cover sm:h-[88px] sm:w-[88px]"
            />
            <div className="min-w-0">
              <h1 className="flex items-center gap-2 text-xl font-semibold sm:text-2xl">
                <span className="truncate">@{u}</span>
                {profile.isVerified && (
                  <svg width="20" height="20" viewBox="0 0 24 24" role="img" aria-label="Doğrulanmış hesap" className="shrink-0">
                    <circle cx="12" cy="12" r="10" fill="#2f6b12" />
                    <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </h1>
              <p className="mt-1 text-sm text-muted">
                {[profile.city, since ? `${since}'den beri üye` : null, profile.isVerified ? "Doğrulanmış hesap" : null]
                  .filter(Boolean)
                  .join(" · ") || "Takasla üyesi"}
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-3 divide-x divide-line rounded-xl border border-line md:min-w-[380px]">
            {stats.map(([k, v]) => (
              <div key={k} className="flex flex-col-reverse px-3 py-3 text-center sm:px-4">
                <dt className="mt-0.5 text-xs text-muted">{k}</dt>
                <dd className="text-lg font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-8" aria-labelledby="ilanlar">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 id="ilanlar" className="text-lg font-semibold">
              Takasa açık ilanları
            </h2>
            <p className="text-sm text-muted">Teklif göndermek için ilanı uygulamada aç.</p>
          </div>
          <ListingGrid listings={listings} nextCursor={null} basePath={path} emptyText="Bu kullanıcının yayında ilanı yok." />
        </section>

        <div className="mt-10 flex flex-col gap-4 rounded-xl bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium">@{u} ile takas yapmak ister misin?</p>
            <p className="mt-0.5 text-sm text-muted">
              Teklif gönderme ve mesajlaşma yalnızca Takasla uygulamasında yapılır.
            </p>
          </div>
          <AppStoreBadge height={42} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
