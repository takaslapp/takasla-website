import { client, urlForImage } from "@/sanity/client";

export interface BlogSection {
  type: "paragraph" | "heading" | "callout" | "quote" | "list";
  level?: 2 | 3;
  text?: string;
  content?: string;
  title?: string;
  author?: string;
  items?: string[];
  variant?: "tip" | "info";
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string; // ISO date "YYYY-MM-DD"
  updatedAt?: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  sections: BlogSection[];
}

// Static fallback posts (empty now that Sanity CMS is active)
export const BLOG_POSTS: BlogPost[] = [];

// Helper functions for retrieval and SEO
export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS];
}

export function getFeaturedPost(): BlogPost | undefined {
  return BLOG_POSTS[0];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getCategories(): string[] {
  const categories = new Set(BLOG_POSTS.map((p) => p.category));
  return ["Tümü", ...Array.from(categories)];
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, limit);
}

// Transform raw Sanity post into BlogPost interface
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function transformSanityPost(sp: any): BlogPost {
  const sections: BlogSection[] = [];
  if (Array.isArray(sp.content)) {
    for (const block of sp.content) {
      if (block._type === "block") {
        const text = Array.isArray(block.children)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ? block.children.map((c: any) => c.text || "").join("")
          : "";
        if (!text.trim()) continue;

        if (block.style === "h2") {
          sections.push({ type: "heading", level: 2, text });
        } else if (block.style === "h3") {
          sections.push({ type: "heading", level: 3, text });
        } else if (block.style === "blockquote") {
          sections.push({ type: "quote", text });
        } else if (block.listItem) {
          sections.push({ type: "list", items: [text] });
        } else {
          sections.push({ type: "paragraph", content: text });
        }
      } else if (block._type === "callout") {
        sections.push({
          type: "callout",
          variant: "tip",
          title: block.title || "Önemli İpucu",
          text: block.text || "",
        });
      }
    }
  }

  const slug = typeof sp.slug === "string" ? sp.slug : sp.slug?.current || "";
  const imageUrl = urlForImage(sp.coverImage) || "/images/blog/esya-takasi-rehberi.webp";

  return {
    slug,
    title: sp.title || "",
    excerpt: sp.excerpt || "",
    coverImage: imageUrl,
    category: sp.category || "Rehber",
    author: {
      name: "Takasla Ekibi",
      role: "İçerik & Topluluk",
      avatar: "/images/takasla-icon.jpg",
    },
    publishedAt: sp.publishedAt || new Date().toISOString().split("T")[0],
    readTime: sp.readTime || "4 dk okuma",
    tags: [sp.category || "Rehber"],
    featured: Boolean(sp.featured),
    sections: sections.length > 0 ? sections : [
      { type: "paragraph", content: sp.excerpt || "" }
    ],
  };
}

export async function getAllPostsAsync(): Promise<BlogPost[]> {
  if (client) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sanityPosts: any[] = await client.fetch(
        `*[_type == "post"] | order(publishedAt desc)`
      );
      if (Array.isArray(sanityPosts)) {
        return sanityPosts.map(transformSanityPost);
      }
    } catch (e) {
      console.warn("Failed to fetch posts from Sanity:", e);
    }
  }
  return [];
}

export async function getPostBySlugAsync(slug: string): Promise<BlogPost | undefined> {
  if (client) {
    try {
      const sp = await client.fetch(
        `*[_type == "post" && slug.current == $slug][0]`,
        { slug }
      );
      if (sp) {
        return transformSanityPost(sp);
      }
    } catch (e) {
      console.warn("Failed to fetch post from Sanity:", e);
    }
  }
  return undefined;
}
