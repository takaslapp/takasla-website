import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/market/SiteHeader";
import Breadcrumbs from "@/components/market/Breadcrumbs";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { getAllPostsAsync } from "@/data/blog-posts";
import { AUTHORS, authorBySlug, authorPath } from "@/data/authors";
import { absoluteUrl } from "@/lib/site";
import { InstagramIcon } from "@/components/market/StoreBadges";

export const revalidate = 300;

type Params = Promise<{ yazar: string }>;

export function generateStaticParams() {
  return AUTHORS.map((a) => ({ yazar: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { yazar } = await params;
  const a = authorBySlug(yazar);
  if (!a) return { title: "Yazar bulunamadı", robots: { index: false, follow: true } };
  return {
    title: `${a.name} - ${a.role}`,
    description: `${a.name}, ${a.role}. Takasla blogundaki eşya takası ve ikinci el rehberleri.`,
    alternates: { canonical: authorPath(a) },
    openGraph: { type: "profile", url: absoluteUrl(authorPath(a)), title: a.name, siteName: "Takasla", locale: "tr_TR" },
  };
}

export default async function AuthorPage({ params }: { params: Params }) {
  const { yazar } = await params;
  const author = authorBySlug(yazar);
  if (!author) notFound();

  const posts = (await getAllPostsAsync()).filter((p) => p.author.slug === author.slug);
  const path = authorPath(author);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: absoluteUrl(path),
    mainEntity: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
      description: author.bio,
      url: absoluteUrl(path),
      worksFor: { "@id": absoluteUrl("/#organization") },
      ...(author.sameAs?.length ? { sameAs: author.sameAs } : {}),
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-4">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            { name: author.name, href: path },
          ]}
        />

        <section className="mt-6 flex flex-col gap-5 rounded-2xl bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
          <Image
            src={author.avatar || "/images/takasla-icon.jpg"}
            alt={author.name}
            width={96}
            height={96}
            className="h-20 w-20 shrink-0 rounded-full border border-line object-cover sm:h-24 sm:w-24"
          />
          <div className="max-w-2xl">
            <h1 className="text-2xl font-semibold sm:text-3xl">{author.name}</h1>
            <p className="mt-1 text-muted">{author.role}</p>
            <p className="mt-3 text-[15px] leading-relaxed">{author.bio}</p>
            {author.sameAs && author.sameAs.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2 text-sm">
                {author.sameAs.map((url) => {
                  const label = url.includes("linkedin.com") ? "LinkedIn" : url.includes("instagram.com") ? "Instagram" : new URL(url).hostname;
                  return (
                    <li key={url}>
                      <a
                        href={url}
                        target="_blank"
                        rel="me noopener noreferrer"
                        className="inline-flex h-9 items-center gap-2 rounded-full border border-line bg-white px-3.5 hover:border-ink"
                      >
                        {label === "Instagram" ? (
                          <InstagramIcon size={16} />
                        ) : label === "LinkedIn" ? (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                          </svg>
                        ) : null}
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>

        <section className="mt-10" aria-labelledby="yazilar">
          <h2 id="yazilar" className="mb-5 text-lg font-semibold">
            Yazıları ({posts.length})
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
