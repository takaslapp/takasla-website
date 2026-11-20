import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blog-posts";
import { formatDateTR } from "@/lib/site";

interface BlogCardProps {
  post: BlogPost;
  /** Liste başındaki öne çıkan yazı: yatay ve büyük */
  featured?: boolean;
  priority?: boolean;
}

function Meta({ post }: { post: BlogPost }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-muted">
      <span className="inline-flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3.5" y="5" width="17" height="15" rx="2" />
          <path d="M3.5 10h17M8 3v4M16 3v4" />
        </svg>
        <time dateTime={post.publishedAt}>{formatDateTR(post.publishedAt)}</time>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </svg>
        {post.readTime}
      </span>
    </p>
  );
}

function Category({ name }: { name: string }) {
  return (
    <span className="inline-flex rounded-md bg-[#eef6e4] px-2 py-0.5 text-xs font-medium text-link">{name}</span>
  );
}

export default function BlogCard({ post, featured = false, priority = false }: BlogCardProps) {
  if (featured) {
    return (
      <article data-post data-category={post.category}>
        <Link
          href={`/blog/${post.slug}`}
          className="group grid overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)] md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]"
        >
          <div className="relative aspect-[16/10] bg-surface md:aspect-auto md:min-h-[320px]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : "auto"}
              sizes="(min-width: 1024px) 620px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-5 sm:p-8">
            <div>
              <Category name={post.category} />
            </div>
            <h2 className="mt-3 text-2xl font-semibold leading-tight group-hover:underline sm:text-[28px]">{post.title}</h2>
            <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-muted">{post.excerpt}</p>
            <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
              <Image
                src={post.author.avatar || "/images/takasla-icon.jpg"}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-full border border-line object-cover"
              />
              <div className="min-w-0 text-sm">
                <p className="font-medium">{post.author.name}</p>
                <Meta post={post} />
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="h-full" data-post data-category={post.category}>
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-line bg-white p-3 transition-shadow hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            loading={priority ? "eager" : "lazy"}
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-1 flex-col px-1.5 pb-1.5 pt-4">
          <div>
            <Category name={post.category} />
          </div>
          <h3 className="mt-2.5 line-clamp-2 text-[17px] font-semibold leading-snug group-hover:underline">{post.title}</h3>
          <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-muted">{post.excerpt}</p>
          <div className="mt-auto pt-4">
            <Meta post={post} />
          </div>
        </div>
      </Link>
    </article>
  );
}
