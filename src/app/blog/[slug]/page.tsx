import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/market/SiteHeader";
import Breadcrumbs from "@/components/market/Breadcrumbs";
import ListingRow from "@/components/market/ListingRow";
import { getListings, toSummary } from "@/lib/listings";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import BlogShareBar from "@/components/blog/BlogShareBar";
import { getAllPostsAsync, getPostBySlugAsync } from "@/data/blog-posts";

export const revalidate = 60;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9ğüşıöç\s-]/gi, "")
    .trim()
    .replace(/\s+/g, "-");
}

export async function generateStaticParams() {
  const posts = await getAllPostsAsync();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlugAsync(slug);

  if (!post) {
    return {
      title: "Yazı Bulunamadı - Takasla",
      robots: { index: false, follow: false },
    };
  }

  const pageUrl = `https://takaslapp.com/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "tr_TR",
      url: pageUrl,
      siteName: "Takasla",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlugAsync(slug);

  if (!post) {
    notFound();
  }

  const [allPosts, latest] = await Promise.all([getAllPostsAsync(), getListings({ limit: 10 })]);
  const otherPosts = allPosts.filter((p) => p.slug !== post.slug);
  // Önce aynı kategorideki yazılar, sonra en yeniler: güçlü iç bağlantı için 4 kart
  const relatedPosts = [
    ...otherPosts.filter((p) => p.category === post.category),
    ...otherPosts.filter((p) => p.category !== post.category),
  ].slice(0, 3);
  const moreLinks = otherPosts.filter((p) => !relatedPosts.includes(p));
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const canonicalUrl = `https://takaslapp.com/blog/${post.slug}`;

  // Extract all headings for Table of Contents (İçindekiler)
  const headings = post.sections.filter(
    (s): s is typeof s & { text: string } => s.type === "heading" && Boolean(s.text)
  );

  // Schema.org BlogPosting Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage
      ? post.coverImage.startsWith("http://") || post.coverImage.startsWith("https://")
        ? post.coverImage
        : `https://takaslapp.com${post.coverImage.startsWith("/") ? "" : "/"}${post.coverImage}`
      : "https://takaslapp.com/images/takasla-icon.jpg",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      url: "https://takaslapp.com/hakkimizda",
      worksFor: { "@id": "https://takaslapp.com/#organization" },
    },
    publisher: {
      "@type": "Organization",
      name: "Takasla",
      url: "https://takaslapp.com",
      logo: {
        "@type": "ImageObject",
        url: "https://takaslapp.com/images/takasla-icon.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    keywords: post.tags.join(", "),
  };


  const renderSection = (section: (typeof post.sections)[number], idx: number) => {
    if (section.type === "paragraph") return <p key={idx}>{section.content}</p>;

    if (section.type === "heading") {
      const id = section.text ? slugifyHeading(section.text) : undefined;
      return section.level === 3 ? (
        <h3 key={idx} id={id}>
          {section.text}
        </h3>
      ) : (
        <h2 key={idx} id={id}>
          {section.text}
        </h2>
      );
    }

    if (section.type === "list" && section.items) {
      return (
        <ul key={idx}>
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }

    if (section.type === "callout") {
      return (
        <aside key={idx} className="article-note">
          {section.title && <p className="article-note-title">{section.title}</p>}
          <p>{section.text}</p>
        </aside>
      );
    }

    if (section.type === "quote") {
      return (
        <blockquote key={idx}>
          <p>{section.text}</p>
          {section.author && <cite>{section.author}</cite>}
        </blockquote>
      );
    }

    if (section.type === "table" && section.table?.rows?.length) {
      const [headerRow, ...bodyRows] = section.table.rows;
      return (
        <div key={idx} className="article-table">
          <table>
            {headerRow && (
              <thead>
                <tr>
                  {headerRow.cells.map((c, i) => (
                    <th key={i} scope="col">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {bodyRows.map((row, r) => (
                <tr key={r}>
                  {row.cells.map((c, i) => (
                    <td key={i}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return null;
  };

  const toc = headings.filter((h) => h.level !== 3);
  const cleanHeading = (t: string) => t.replace(/^\d+\.\s*/, "");

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-12 pt-4">
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            { name: post.title, href: `/blog/${post.slug}` },
          ]}
        />

        <article className="mt-6">
          <header className="mx-auto max-w-3xl">
            <p className="text-sm text-link">{post.category}</p>
            <h1 className="mt-2 text-[28px] font-semibold leading-[1.2] sm:text-4xl">{post.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">{post.excerpt}</p>
            <div className="mt-6 flex items-center gap-3 border-t border-line pt-5 text-sm">
              <Image
                src={post.author.avatar || "/images/takasla-icon.jpg"}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-full border border-line object-cover"
              />
              <div className="min-w-0">
                <p className="font-medium">{post.author.name}</p>
                <p className="text-muted">
                  <time dateTime={post.publishedAt}>{formattedDate}</time> · {post.readTime}
                </p>
              </div>
            </div>
          </header>

          <div className="relative mx-auto mt-8 aspect-[16/9] max-w-4xl overflow-hidden rounded-xl bg-surface">
            <Image src={post.coverImage} alt={post.title} fill priority sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_220px]">
            <div className="min-w-0">
              {toc.length > 2 && (
                <details className="mb-8 rounded-lg bg-surface lg:hidden">
                  <summary className="cursor-pointer px-4 py-3 text-sm font-medium">Bu yazıda</summary>
                  <ol className="space-y-1.5 px-4 pb-4 text-sm">
                    {toc.map((h, i) => (
                      <li key={i}>
                        <a href={`#${slugifyHeading(h.text)}`} className="text-muted hover:text-ink hover:underline">
                          {cleanHeading(h.text)}
                        </a>
                      </li>
                    ))}
                  </ol>
                </details>
              )}

              <div className="article">{post.sections.map(renderSection)}</div>

              <BlogShareBar title={post.title} url={canonicalUrl} />
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 max-h-[calc(100vh-7rem)] space-y-8 overflow-y-auto pb-4">
                {toc.length > 2 && (
                  <nav aria-label="Bu yazıda">
                    <p className="text-sm font-medium">Bu yazıda</p>
                    <ol className="mt-3 space-y-2 border-l border-line text-sm">
                      {toc.map((h, i) => (
                        <li key={i}>
                          <a
                            href={`#${slugifyHeading(h.text)}`}
                            className="-ml-px block border-l border-transparent pl-3 leading-snug text-muted hover:border-ink hover:text-ink"
                          >
                            {cleanHeading(h.text)}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}
                <div className="rounded-xl border border-line p-4 text-sm">
                  <p className="font-medium">Takasa açık ilanlar</p>
                  <p className="mt-1 text-muted">Kullanmadığın eşyayı ihtiyacın olan bir ürünle takas et.</p>
                  <Link href="/ilanlar" className="mt-3 inline-block font-medium text-link underline">
                    İlanlara göz at
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="mx-auto mt-16 max-w-5xl border-t border-line pt-10" aria-labelledby="ilgili">
            <h2 id="ilgili" className="mb-6 text-lg font-semibold">
              İlgili rehberler
            </h2>
            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((r) => (
                <BlogCard key={r.slug} post={r} />
              ))}
            </div>
            {moreLinks.length > 0 && (
              <nav aria-label="Diğer rehberler" className="mt-10">
                <p className="text-sm font-medium">Diğer yazılar</p>
                <ul className="mt-3 space-y-2 text-[15px]">
                  {moreLinks.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`} className="text-muted hover:text-ink hover:underline">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </section>
        )}
      </main>

      <div className="pb-12">
        <ListingRow title="Yeni takas ilanları" listings={latest.items.map(toSummary)} moreHref="/ilanlar" />
      </div>
      <Footer />
    </div>
  );
}
