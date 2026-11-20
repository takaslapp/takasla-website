import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/market/SiteHeader";
import Breadcrumbs from "@/components/market/Breadcrumbs";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import BlogFilter from "@/components/blog/BlogFilter";
import { getAllPostsAsync } from "@/data/blog-posts";
import { authorPath } from "@/data/authors";
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
    publisher: { "@id": absoluteUrl("/#organization") },
    blogPost: posts.slice(0, 20).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: absoluteUrl(`/blog/${p.slug}`),
      datePublished: p.publishedAt,
      author: { "@type": "Person", name: p.author.name, url: absoluteUrl(authorPath(p.author)) },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-4">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />

        <header className="mx-auto mt-6 max-w-3xl text-center">
          <h1 className="text-3xl font-semibold sm:text-4xl">Takas rehberleri</h1>
          <p className="mt-3 text-[15px] leading-relaxed text-muted sm:text-base">
            Eşyanın değerini belirlemekten güvenli buluşmaya kadar, takas yaparken işine yarayacak pratik bilgiler.
          </p>
        </header>

        <div className="mx-auto mt-8 max-w-3xl">
          <BlogFilter targetId="blog-yazilari" categories={categories} />
        </div>

        <div id="blog-yazilari" className="mt-8">
          {featured ? (
            <>
              <BlogCard post={featured} featured priority />
              {rest.length > 0 && (
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((p) => (
                    <BlogCard key={p.slug} post={p} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-muted">Henüz yayınlanmış yazı yok.</p>
          )}
        </div>

        <div className="mt-14 flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
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
