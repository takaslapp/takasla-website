import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blog-posts";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="group bg-white border border-gray-200/90 hover:border-gray-300 rounded-3xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full block"
      >
        <div>
          {/* Top: Large, Eye-Catching Cover Image */}
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-100 mb-5 border border-gray-100">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
              className="object-cover group-hover:scale-104 transition-transform duration-500"
            />
          </div>

          {/* Underneath: Category & Read Time */}
          <div className="flex items-center gap-2 mb-2.5">
            <span className="inline-block px-2.5 py-1 rounded-md bg-[#00A859] text-white text-[11px] font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-gray-500 font-medium">
              {post.readTime}
            </span>
          </div>

          {/* Title - Full Width & Clean */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-2.5">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-sm text-gray-600 leading-relaxed font-normal line-clamp-2 mb-4">
            {post.excerpt}
          </p>
        </div>

        {/* Bottom Row: Date & Circular Action Button */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
          <time dateTime={post.publishedAt} className="text-xs text-gray-400 font-medium">
            {formattedDate}
          </time>

          {/* Circular Button with Arrow (As requested) */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black text-white flex items-center justify-center shrink-0 group-hover:bg-[#00A859] group-hover:scale-105 transition-all shadow-xs">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}
