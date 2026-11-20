import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/market/SiteHeader";
import Breadcrumbs from "@/components/market/Breadcrumbs";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { getAllPostsAsync } from "@/data/blog-posts";
import { absoluteUrl } from "@/lib/site";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Takas rehberleri ve blog",
  description:
    "Eşya takası, ikinci el ürün değerlendirme, güvenli takas ve bilinçli tüketim üzerine Takasla ekibinin hazırladığı rehberler.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: absoluteUrl("/blog"),
    siteName: "Takasla",
    title: "Takas rehberleri - Takasla",
    description: "Eşya takası, ikinci el ürün değerlendirme ve güvenli takas rehberleri.",
    images: [{ url: "/images/blog/esya-takasi-rehberi.webp", width: 1200, height: 630, alt: "Takasla blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Takas rehberleri - Takasla",
    description: "Eşya takası, ikinci el ürün değerlendirme ve güvenli takas rehberleri.",
    images: ["/images/blog/esya-takasi-rehberi.webp"],
  },
};

export default async function BlogIndexPage() {
  const posts = await getAllPostsAsync();
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p !== featured);
  const categories = [...new Set(posts.map((p) => p.category))];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Takasla takas rehberleri",
    url: absoluteUrl("/blog"),
    blogPost: posts.slice(0, 20).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: absoluteUrl(`/blog/${p.slug}`),
      datePublished: p.publishedAt,
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-4">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />

        <header className="mt-5 flex flex-col gap-4 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-semibold sm:text-3xl">Takas rehberleri</h1>
            <p className="mt-2 text-[15px] leading-relaxed text-muted sm:text-base">
              Eşyanın değerini belirlemekten güvenli buluşmaya kadar, takas yaparken işine yarayacak pratik bilgiler.
            </p>
          </div>
          {categories.length > 1 && (
            <ul className="flex flex-wrap gap-2 text-sm" aria-label="Konular">
              {categories.map((c) => (
                <li key={c} className="rounded-full border border-line px-3 py-1 text-muted">
                  {c}
                </li>
              ))}
            </ul>
          )}
        </header>

        {featured ? (
          <>
            <div className="mt-8">
              <BlogCard post={featured} featured priority />
            </div>
            {rest.length > 0 && (
              <section className="mt-14" aria-labelledby="tum-yazilar">
                <h2 id="tum-yazilar" className="mb-5 text-lg font-semibold">
                  Tüm yazılar
                </h2>
                <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((p) => (
                    <BlogCard key={p.slug} post={p} />
                  ))}
                </div>
              </section>
            )}
          </>
        ) : (
          <p className="mt-10 text-muted">Henüz yayınlanmış yazı yok.</p>
        )}

        <div className="mt-16 flex flex-col gap-4 rounded-xl bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium">Okuduklarını uygulamaya hazır mısın?</p>
            <p className="mt-0.5 text-sm text-muted">Yayındaki takas ilanlarına göz at, kullanmadığın eşyanı değerlendir.</p>
          </div>
          <Link
            href="/ilanlar"
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-lg bg-ink px-4 text-sm font-medium text-white hover:bg-black"
          >
            İlanlara göz at
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
