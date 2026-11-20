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
import BlogToc, { type TocEntry } from "@/components/blog/BlogToc";
import ReadingProgress from "@/components/blog/ReadingProgress";
import CopyLinkButton from "@/components/blog/CopyLinkButton";
import AiSummaryLinks from "@/components/blog/AiSummaryLinks";
import { authorPath } from "@/data/authors";
import { absoluteUrl, formatDateTR } from "@/lib/site";
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
      authors: [absoluteUrl(authorPath(post.author))],
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
  if (!post) notFound();

  const [allPosts, latest] = await Promise.all([getAllPostsAsync(), getListings({ limit: 10 })]);
  const otherPosts = allPosts.filter((p) => p.slug !== post.slug);
  // Önce aynı kategorideki yazılar, sonra en yeniler
  const relatedPosts = [
    ...otherPosts.filter((p) => p.category === post.category),
    ...otherPosts.filter((p) => p.category !== post.category),
  ].slice(0, 3);
  const canonicalUrl = absoluteUrl(`/blog/${post.slug}`);
  const updated = formatDateTR(post.updatedAt || post.publishedAt);
  const published = formatDateTR(post.publishedAt);
  const authorUrl = authorPath(post.author);

  const toc: TocEntry[] = post.sections
    .filter((s) => s.type === "heading" && s.text && s.level !== 3)
    .map((s) => ({ id: slugifyHeading(s.text!), text: s.text!.replace(/^\d+\.\s*/, "") }));

  const imageUrl = post.coverImage.startsWith("http") ? post.coverImage : absoluteUrl(post.coverImage);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      url: absoluteUrl(authorUrl),
      worksFor: { "@id": absoluteUrl("/#organization") },
    },
    publisher: {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: "Takasla",
      url: absoluteUrl("/"),
      logo: { "@type": "ImageObject", url: absoluteUrl("/images/takasla-icon.jpg") },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    inLanguage: "tr-TR",
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

  return (
    <div className="flex min-h-screen flex-col">
      <ReadingProgress targetId="yazi-govdesi" />
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
          <header className="mx-auto max-w-4xl">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex rounded-md bg-[#eef6e4] px-2 py-0.5 text-xs font-medium text-link">
                {post.category}
              </span>
              <CopyLinkButton url={canonicalUrl} />
            </div>
            <h1 className="mt-4 text-[28px] font-semibold leading-[1.2] sm:text-[40px]">{post.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">{post.excerpt}</p>

            <div className="mt-6 flex flex-col gap-3 border-y border-line py-4 sm:flex-row sm:items-center sm:justify-between">
              <Link href={authorUrl} className="group flex items-center gap-3" rel="author">
                <Image
                  src={post.author.avatar || "/images/takasla-icon.jpg"}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-full border border-line object-cover"
                />
                <span className="text-sm">
                  <span className="block font-medium group-hover:underline">{post.author.name}</span>
                  <span className="block text-muted">{post.author.role}</span>
                </span>
              </Link>
              <p className="text-sm text-muted">
                {post.updatedAt && post.updatedAt !== post.publishedAt ? (
                  <>
                    Son güncelleme: <time dateTime={post.updatedAt}>{updated}</time>
                  </>
                ) : (
                  <time dateTime={post.publishedAt}>{published}</time>
                )}{" "}
                · {post.readTime}
              </p>
            </div>
          </header>

          <div className="relative mx-auto mt-8 aspect-[16/9] max-w-4xl overflow-hidden rounded-2xl bg-surface">
            <Image src={post.coverImage} alt={post.title} fill priority sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-14">
            <aside className="hidden lg:block">
              <div className="sticky top-24 max-h-[calc(100vh-7rem)] space-y-6 overflow-y-auto pb-4">
                {toc.length > 1 && <BlogToc items={toc} />}
                <div className="rounded-xl bg-surface p-4 text-sm">
                  <p className="font-medium">Takasa açık ilanlar</p>
                  <p className="mt-1 text-muted">Kullanmadığın eşyayı ihtiyacın olan bir ürünle takas et.</p>
                  <Link
                    href="/ilanlar"
                    className="mt-3 inline-flex h-9 items-center rounded-lg bg-ink px-3 font-medium text-white hover:bg-black"
                  >
                    İlanlara göz at
                  </Link>
                </div>
              </div>
            </aside>

            <div className="min-w-0 max-w-[720px]" id="yazi-govdesi">
              <AiSummaryLinks url={canonicalUrl} title={post.title} />

              {toc.length > 1 && (
                <details className="mt-6 rounded-xl border border-line lg:hidden">
                  <summary className="cursor-pointer px-4 py-3 text-sm font-medium">İçindekiler</summary>
                  <ol className="space-y-2 border-t border-line px-4 py-3 text-sm">
                    {toc.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="text-muted hover:text-ink hover:underline">
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </details>
              )}

              <div className="article mt-8">{post.sections.map(renderSection)}</div>

              <BlogShareBar title={post.title} url={canonicalUrl} />

              <section aria-label="Yazar hakkında" className="mt-10 flex gap-4 rounded-2xl bg-surface p-5">
                <Image
                  src={post.author.avatar || "/images/takasla-icon.jpg"}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-full border border-line object-cover"
                />
                <div className="min-w-0 text-sm">
                  <p className="text-muted">Yazar</p>
                  <Link href={authorUrl} className="text-base font-semibold hover:underline" rel="author">
                    {post.author.name}
                  </Link>
                  <p className="text-muted">{post.author.role}</p>
                  <p className="mt-2 leading-relaxed">{post.author.bio}</p>
                  <Link href={authorUrl} className="mt-2 inline-block font-medium text-link underline">
                    Tüm yazıları
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="mt-16 border-t border-line pt-10" aria-labelledby="ilgili">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 id="ilgili" className="text-xl font-semibold">
                İlgili yazılar
              </h2>
              <Link href="/blog" className="text-sm text-link underline">
                Tüm yazılar
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((r) => (
                <BlogCard key={r.slug} post={r} />
              ))}
            </div>
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
