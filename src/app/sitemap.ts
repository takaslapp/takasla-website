import type { MetadataRoute } from "next";
import { getAllPostsAsync } from "@/data/blog-posts";
import { getAllListings, getFacets, isIndexable } from "@/lib/listings";
import { listingPath, parseLocation, slugify } from "@/lib/taxonomy";

// 60 saniyede bir sitemap'i Sanity'deki yeni yazılarla otomatik güncelle (ISR)
export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://takaslapp.com";
  // Statik sayfaların içeriği değiştiğinde bu tarihi güncelleyin.
  // Her istekte "şimdi" göstermek Google'ın lastmod'a güvenini azaltır.
  const staticLastModified = new Date("2026-11-20");
  const [blogPosts, listings, facets] = await Promise.all([getAllPostsAsync(), getAllListings(), getFacets()]);

  const blogPostEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const newestHome = listings[0]?.publishedAt ? new Date(listings[0].publishedAt) : staticLastModified;

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: newestHome,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/indir`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: staticLastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kariyer`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sss`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kullanim-kosullari`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/gizlilik-politikasi`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kvkk-aydinlatma-metni`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/topluluk-kurallari`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/hesap-ve-veri-silme`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/iletisim-ve-ticari-bilgiler`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const newest = listings[0]?.publishedAt ? new Date(listings[0].publishedAt) : staticLastModified;

  const marketEntries: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/ilanlar`, lastModified: newest, changeFrequency: "hourly", priority: 0.9 },
    { url: `${baseUrl}/nasil-calisir`, lastModified: staticLastModified, changeFrequency: "monthly", priority: 0.7 },
    ...facets.categories.map((c) => ({
      url: `${baseUrl}/kategori/${c.slug}`,
      lastModified: newest,
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
    ...facets.cities.map((c) => ({
      url: `${baseUrl}/sehir/${c.slug}`,
      lastModified: newest,
      changeFrequency: "daily" as const,
      priority: 0.7,
    })),
    ...facets.districts.map((d) => ({
      url: `${baseUrl}/sehir/${d.citySlug}/${d.slug}`,
      lastModified: newest,
      changeFrequency: "daily" as const,
      priority: 0.6,
    })),
  ];

  // Kategori + şehir kombinasyonları (yalnızca ilan olanlar)
  const combos = new Set<string>();
  for (const l of listings) {
    const city = parseLocation(l.location).city;
    if (l.category && city) combos.add(`${slugify(l.category)}/${slugify(city)}`);
  }
  const comboEntries: MetadataRoute.Sitemap = [...combos].map((c) => ({
    url: `${baseUrl}/kategori/${c}`,
    lastModified: newest,
    changeFrequency: "daily",
    priority: 0.6,
  }));

  const listingEntries: MetadataRoute.Sitemap = listings.filter(isIndexable).map((l) => ({
    url: `${baseUrl}${listingPath(l)}`,
    lastModified: new Date(l.publishedAt || l.createdAt || staticLastModified),
    changeFrequency: "weekly",
    priority: 0.7,
    images: l.imageUrl ? [l.imageUrl] : undefined,
  }));

  return [...staticEntries, ...marketEntries, ...comboEntries, ...listingEntries, ...blogPostEntries];
}
