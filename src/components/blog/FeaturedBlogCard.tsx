import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blog-posts";

interface FeaturedBlogCardProps {
  post: BlogPost;
}

export default function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="group bg-white border border-gray-200/90 rounded-3xl overflow-hidden shadow-xs hover:shadow-md hover:border-gray-300 transition-all">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 items-center">
        {/* Left: Cover Image */}
        <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] w-full bg-gray-100 overflow-hidden">
          <Link
            href={`/blog/${post.slug}`}
            className="block w-full h-full"
            tabIndex={-1}
            aria-hidden="true"
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-500 group-hover:scale-102"
            />
          </Link>
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-black text-white text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E676]" />
              Öne Çıkan Rehber
            </span>
          </div>
        </div>

        {/* Right: Editorial Content */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-6 lg:pr-8 flex flex-col justify-between">
          <div>
            {/* Category & Read Time */}
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block px-2.5 py-1 rounded-md bg-[#00A859] text-white text-[11px] font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-xs text-gray-500 font-medium">
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-3 tracking-tight">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>

            {/* Excerpt */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal mb-6">
              {post.excerpt}
            </p>
          </div>

          {/* Meta & Button */}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-gray-500">
              <span className="font-semibold text-gray-900 block">
                {post.author.name}
              </span>
              <time dateTime={post.publishedAt}>
                {formattedDate}
              </time>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 bg-[#00A859] hover:bg-[#008f4c] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-xl transition-all shadow-xs active:scale-95"
            >
              <span>Yazıyı Oku</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
