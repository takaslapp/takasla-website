import Link from "next/link";
import Image from "next/image";
import type { Banner } from "@/lib/listings";
import BannerAutoScroll from "./BannerAutoScroll";

/**
 * Admin panelindeki bannerlar (1200×400, 3:1). Mobilde tek tek kaydırılır,
 * masaüstünde yan yana iki banner görünür; görsel kırpılmaz.
 */
export default function BannerStrip({ banners }: { banners: Banner[] }) {
  if (banners.length === 0) return null;
  const single = banners.length === 1;

  return (
    <section aria-label="Kampanyalar" className="mx-auto max-w-6xl px-4 pt-5">
      <BannerAutoScroll>
        {banners.map((b, i) => {
          const img = (
            <Image
              src={b.imageUrl}
              alt={b.title || "Takasla kampanya"}
              fill
              sizes={single ? "(min-width: 1152px) 1120px, 100vw" : "(min-width: 1024px) 560px, 92vw"}
              priority={i < 2}
              className="object-cover"
            />
          );
          return (
            <li
              key={b.id}
              className={`relative aspect-[3/1] shrink-0 snap-start overflow-hidden rounded-xl bg-surface ${
                single ? "w-full" : "w-[92%] lg:w-[calc(50%-6px)]"
              }`}
            >
              {b.external ? (
                <a href={b.href} target="_blank" rel="noopener noreferrer" className="relative block h-full">
                  {img}
                </a>
              ) : (
                <Link href={b.href} className="relative block h-full">
                  {img}
                </Link>
              )}
            </li>
          );
        })}
      </BannerAutoScroll>
    </section>
  );
}
