import Link from "next/link";
import Image from "next/image";
import { getAllPostsAsync } from "@/data/blog-posts";

export default async function HomeBlogSection() {
  const allPosts = await getAllPostsAsync();
  const latestPosts = allPosts.slice(0, 3);

  if (latestPosts.length === 0) return null;

  return (
    <section
      aria-labelledby="home-blog-heading"
      className="py-16 sm:py-24 bg-white border-b border-gray-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <h2
              id="home-blog-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight"
            >
              Eşya Takası ve Tasarruf Rehberleri
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">
              Kullanılmayan eşyaları değere dönüştürmek, bütçeni korumak ve güvenli takas yapmak için hazırladığımız güncel rehberler.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A859] hover:text-[#008f4c] transition-colors group"
            >
              <span>Tüm Yazıları Gör</span>
              <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => {
            const formattedDate = new Date(post.publishedAt).toLocaleDateString("tr-TR", {
              day: "numeric",
              month: "short",
              year: "numeric",
            });

            return (
              <article key={post.slug} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group bg-[#FAFAFA] hover:bg-white border border-gray-200/80 hover:border-gray-300 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full block"
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-gray-100 mb-4 border border-gray-100">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                        className="object-cover group-hover:scale-104 transition-transform duration-500"
                      />
                    </div>

                    {/* Category & Read Time */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2 py-0.5 rounded bg-[#00A859] text-white text-[10px] font-bold uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="text-xs text-gray-500 font-medium">
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#00A859] transition-colors leading-snug mb-2 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-500 mt-auto">
                    <time dateTime={post.publishedAt}>{formattedDate}</time>
                    <span className="text-[#00A859] font-medium group-hover:translate-x-0.5 transition-transform">
                      Oku →
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
