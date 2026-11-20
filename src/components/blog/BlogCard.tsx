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

export default function BlogCard({ post, featured = false, priority = false }: BlogCardProps) {
  const date = formatDateTR(post.publishedAt);

  if (featured) {
    return (
      <article>
        <Link href={`/blog/${post.slug}`} className="group grid items-center gap-5 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:gap-10">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <div>
            <p className="text-sm text-link">{post.category}</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight group-hover:underline sm:text-3xl">{post.title}</h2>
            <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-muted sm:text-base">{post.excerpt}</p>
            <p className="mt-4 text-sm text-muted">
              <time dateTime={post.publishedAt}>{date}</time> · {post.readTime}
            </p>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="h-full">
      <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <p className="mt-4 text-sm text-link">{post.category}</p>
        <h3 className="mt-1.5 text-lg font-semibold leading-snug group-hover:underline">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-muted">{post.excerpt}</p>
        <p className="mt-auto pt-3 text-sm text-muted">
          <time dateTime={post.publishedAt}>{date}</time> · {post.readTime}
        </p>
      </Link>
    </article>
  );
}
