import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LegalHeader from "@/components/LegalHeader";
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

  const allPosts = await getAllPostsAsync();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
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
    image: `https://takaslapp.com${post.coverImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
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

  // Breadcrumb Schema
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://takaslapp.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://takaslapp.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-gray-800 flex flex-col justify-between font-sans w-full overflow-x-hidden">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Top Header */}
      <LegalHeader />

      {/* Breadcrumb Navigation - Clean, Never Overflowing on Mobile */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-200/80 bg-white w-full overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-1.5 sm:gap-2 text-xs text-gray-500 min-w-0">
          <Link
            href="/"
            aria-label="Ana Sayfa"
            className="hover:text-black transition-colors flex items-center gap-1 shrink-0"
          >
            <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span>Ana Sayfa</span>
          </Link>
          <span className="text-gray-300 shrink-0">&gt;</span>
          <Link href="/blog" className="hover:text-black transition-colors shrink-0">
            Blog
          </Link>
          <span className="text-gray-300 shrink-0">&gt;</span>
          <span className="text-gray-900 font-semibold truncate min-w-0 flex-1" title={post.title}>
            <span className="sm:hidden">{post.category}</span>
            <span className="hidden sm:inline">{post.title}</span>
          </span>
        </div>
      </nav>

      {/* Main Article Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-14 w-full flex-grow overflow-x-hidden">
        <article className="w-full max-w-full overflow-hidden">
          {/* Article Header */}
          <header className="mb-8 sm:mb-10">
            {/* Category Badge & Read Time (Solid Opaque, No Glass Effect) */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 rounded-md bg-[#00A859] text-white text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-xs text-gray-500 font-medium">
                {post.readTime}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.2] mb-4 break-words">
              {post.title}
            </h1>

            {/* Excerpt Lead Paragraph */}
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed font-normal mb-6 break-words">
              {post.excerpt}
            </p>

            {/* Author & Publish Meta Box */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-200 min-w-0">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 shrink-0 relative bg-white shadow-xs">
                <Image
                  src={post.author.avatar || "/images/takasla-icon.jpg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-gray-900 leading-tight truncate">
                  {post.author.name}
                </p>
                <p className="text-xs text-gray-500 mt-0.5 truncate">
                  {post.author.role} • <time dateTime={post.publishedAt}>{formattedDate}</time>
                </p>
              </div>
            </div>
          </header>

          {/* Cover Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 mb-10 sm:mb-12 border border-gray-200/90 shadow-sm">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Table of Contents (İçindekiler) */}
          {headings.length > 0 && (
            <nav
              aria-label="İçindekiler"
              className="bg-white border border-gray-200/90 rounded-2xl p-5 sm:p-7 mb-10 shadow-xs max-w-full overflow-hidden"
            >
              <div className="flex items-center gap-2.5 mb-4 text-gray-900 font-bold text-base sm:text-lg border-b border-gray-100 pb-3">
                <svg className="w-5 h-5 text-[#00A859]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                <span>İçindekiler</span>
              </div>
              <ol className="space-y-2.5 text-sm sm:text-base text-gray-700 min-w-0">
                {headings.map((heading, i) => {
                  const headingId = slugifyHeading(heading.text);
                  const cleanText = heading.text.replace(/^\d+\.\s*/, "");
                  return (
                    <li key={i} className="min-w-0">
                      <a
                        href={`#${headingId}`}
                        className="hover:text-[#00A859] hover:underline underline-offset-4 transition-colors flex items-start gap-2.5 group min-w-0"
                      >
                        <span className="text-[#00A859] font-bold text-xs mt-1 shrink-0">
                          {i + 1}.
                        </span>
                        <span className="group-hover:text-[#00A859] leading-snug break-words min-w-0 flex-1">
                          {cleanText}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}

          {/* Article Body Content */}
          <div className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-12 shadow-xs space-y-6 text-gray-800 text-base sm:text-lg leading-[1.8] font-normal max-w-full overflow-hidden break-words">
            {post.sections.map((section, idx) => {
              if (section.type === "paragraph") {
                return (
                  <p key={idx} className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                );
              }

              if (section.type === "heading") {
                const headingId = section.text ? slugifyHeading(section.text) : undefined;
                if (section.level === 3) {
                  return (
                    <h3
                      key={idx}
                      id={headingId}
                      className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight pt-4 mt-6 first:pt-0 scroll-mt-24"
                    >
                      {section.text}
                    </h3>
                  );
                }
                return (
                  <div key={idx} className="border-l-4 border-[#00A859] pl-4 py-0.5 mt-10 mb-4 first:mt-0 scroll-mt-24" id={headingId}>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                      {section.text}
                    </h2>
                  </div>
                );
              }

              if (section.type === "list" && section.items) {
                return (
                  <ul key={idx} className="space-y-2.5 my-4 text-base text-gray-700 pl-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#00A859] mt-2.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              if (section.type === "callout") {
                const isTip = section.variant === "tip";
                return (
                  <div
                    key={idx}
                    className={`my-6 p-5 sm:p-6 rounded-2xl border-l-4 border-y-0 border-r-0 ${
                      isTip
                        ? "bg-[#F7FDF9] border-[#00A859] text-gray-900"
                        : "bg-gray-50 border-gray-700 text-gray-900"
                    }`}
                  >
                    {section.title && (
                      <p className="font-bold text-sm sm:text-base mb-1.5 flex items-center gap-2 text-[#00A859]">
                        <span>●</span>
                        <span>{section.title}</span>
                      </p>
                    )}
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                      {section.text}
                    </p>
                  </div>
                );
              }

              if (section.type === "quote") {
                return (
                  <blockquote
                    key={idx}
                    className="border-l-4 border-gray-900 pl-5 sm:pl-6 my-8 italic text-gray-800 text-lg sm:text-xl font-medium leading-relaxed bg-gray-50 py-4 rounded-r-xl"
                  >
                    <p className="mb-2">&ldquo;{section.text}&rdquo;</p>
                    {section.author && (
                      <cite className="block not-italic text-xs font-semibold uppercase tracking-wider text-gray-500">
                        — {section.author}
                      </cite>
                    )}
                  </blockquote>
                );
              }

              if (section.type === "table" && section.table && section.table.rows && section.table.rows.length > 0) {
                const [headerRow, ...bodyRows] = section.table.rows;
                return (
                  <div key={idx} className="my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-xs">
                    <table className="w-full text-left text-sm border-collapse bg-white min-w-[500px]">
                      {headerRow && (
                        <thead className="bg-[#121413] text-white">
                          <tr>
                            {headerRow.cells.map((cell, cIdx) => (
                              <th
                                key={cIdx}
                                className="px-4 py-3.5 font-bold tracking-tight border-b border-gray-800 first:pl-5 last:pr-5"
                              >
                                {cell}
                              </th>
                            ))}
                          </tr>
                        </thead>
                      )}
                      <tbody className="divide-y divide-gray-100 text-gray-700">
                        {bodyRows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className={rIdx % 2 === 0 ? "bg-white hover:bg-gray-50/80 transition-colors" : "bg-gray-50/50 hover:bg-gray-50/80 transition-colors"}
                          >
                            {row.cells.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`px-4 py-3.5 leading-relaxed first:pl-5 last:pr-5 ${
                                  cIdx === 0 ? "font-semibold text-gray-900" : ""
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }

              return null;
            })}

            {/* Social Share Bar */}
            <BlogShareBar title={post.title} url={canonicalUrl} />
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-14 sm:mt-16 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                İlgili Diğer Rehberler
              </h3>
              <div className={`grid gap-6 ${relatedPosts.length > 1 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 max-w-xl"}`}>
                {relatedPosts.map((related) => (
                  <BlogCard key={related.slug} post={related} />
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      {/* Footer */}
      <Footer showAboutTeaser={false} outerBg="bg-[#FAF9F5]" />
    </div>
  );
}
