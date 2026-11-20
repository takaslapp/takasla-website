import { DEFAULT_AUTHOR, type Author } from "./authors";
import { BLOG_REDIRECTS } from "./blog-redirects";
import { client, urlForImage } from "@/sanity/client";

/** Satır içi metin parçası: kalın, italik ve bağlantı bilgisini korur. */
export interface InlineSpan {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  href?: string;
}

export interface BlogSection {
  type: "paragraph" | "heading" | "callout" | "quote" | "list" | "table";
  /** Paragraf, başlık ve alıntılarda biçimli metin */
  spans?: InlineSpan[];
  /** Listelerde her madde için biçimli metin */
  richItems?: InlineSpan[][];
  ordered?: boolean;
  level?: 2 | 3;
  text?: string;
  content?: string;
  title?: string;
  author?: string;
  items?: string[];
  variant?: "tip" | "info";
  table?: {
    rows: {
      cells: string[];
    }[];
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: Author;

  publishedAt: string; // ISO date "YYYY-MM-DD"
  updatedAt?: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  sections: BlogSection[];
}

// Static fallback posts (empty now that Sanity CMS is active)
function isMarkdownTable(text: string): boolean {
  const lines = text.trim().split("\n").map((l) => l.trim()).filter(Boolean);
  return lines.length >= 2 && lines[0].includes("|") && (lines[1].includes("---") || lines[1].includes("|"));
}

function parseMarkdownTable(text: string, defaultCols: number = 3): { rows: { cells: string[] }[] } {
  const lines = text.trim().split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) return { rows: [] };

  const hasPipes = lines.some((l) => l.includes("|"));
  const hasTabs = lines.some((l) => l.includes("\t"));

  const rows: { cells: string[] }[] = [];

  if (hasPipes) {
    for (const line of lines) {
      if (line.replace(/[|\s-:]/g, "").length === 0) continue;
      const rawCells = line.split("|").map((c) => c.trim());
      const cells = rawCells.filter((c, idx) => {
        if (idx === 0 && line.startsWith("|") && c === "") return false;
        if (idx === rawCells.length - 1 && line.endsWith("|") && c === "") return false;
        return true;
      });
      if (cells.length > 0) {
        rows.push({ cells });
      }
    }
  } else if (hasTabs) {
    for (const line of lines) {
      const cells = line.split("\t").map((c) => c.trim()).filter(Boolean);
      if (cells.length > 0) {
        rows.push({ cells });
      }
    }
  } else {
    // Flattened text lines (copied from browser without pipes or tabs)
    const cols =
      defaultCols && defaultCols >= 2
        ? defaultCols
        : lines.length % 3 === 0
        ? 3
        : lines.length % 2 === 0
        ? 2
        : 3;

    for (let i = 0; i < lines.length; i += cols) {
      const cells = lines.slice(i, i + cols);
      if (cells.length > 0) {
        rows.push({ cells });
      }
    }
  }

  return { rows };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toSpans(block: any): InlineSpan[] {
  if (!Array.isArray(block.children)) return [];
  const defs = new Map<string, string>();
  for (const d of Array.isArray(block.markDefs) ? block.markDefs : []) {
    if (d?._key && typeof d.href === "string") defs.set(d._key, d.href.trim());
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return block.children.map((c: any) => {
    const marks: string[] = Array.isArray(c.marks) ? c.marks : [];
    const span: InlineSpan = { text: c.text || "" };
    if (marks.includes("strong")) span.bold = true;
    if (marks.includes("em")) span.italic = true;
    if (marks.includes("code")) span.code = true;
    const link = marks.map((m) => defs.get(m)).find(Boolean);
    if (link) span.href = link;
    return span;
  });
}

// Transform raw Sanity post into BlogPost interface
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function transformSanityPost(sp: any): BlogPost {
  const sections: BlogSection[] = [];
  let pendingTableLines: string[] = [];

  const flushTable = () => {
    if (pendingTableLines.length > 0) {
      const tableData = parseMarkdownTable(pendingTableLines.join("\n"));
      if (tableData.rows.length > 0) {
        sections.push({
          type: "table",
          table: tableData,
        });
      }
      pendingTableLines = [];
    }
  };

  if (Array.isArray(sp.content)) {
    for (const block of sp.content) {
      if (block._type === "block") {
        const text = Array.isArray(block.children)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ? block.children.map((c: any) => c.text || "").join("")
          : "";
        if (!text.trim()) continue;

        // If this line is part of a markdown table (e.g. "| Kriter | Satış |")
        if (text.trim().startsWith("|") || isMarkdownTable(text)) {
          pendingTableLines.push(text.trim());
          continue;
        }

        // If we were accumulating table lines and now reached non-table text:
        flushTable();

        const spans = toSpans(block);
        if (block.style === "h2") {
          sections.push({ type: "heading", level: 2, text });
        } else if (block.style === "h3" || block.style === "h4") {
          sections.push({ type: "heading", level: 3, text });
        } else if (block.style === "blockquote") {
          sections.push({ type: "quote", text, spans });
        } else if (block.listItem) {
          // Ardışık liste maddelerini tek listede topla (numaralı / madde işaretli)
          const ordered = block.listItem === "number";
          const prev = sections[sections.length - 1];
          if (prev && prev.type === "list" && prev.ordered === ordered && prev.richItems) {
            prev.items!.push(text);
            prev.richItems.push(spans);
          } else {
            sections.push({ type: "list", ordered, items: [text], richItems: [spans] });
          }
        } else {
          sections.push({ type: "paragraph", content: text, spans });
        }
      } else {
        flushTable();
        if (block._type === "table") {
          const cols = typeof block.columnsCount === "number" ? block.columnsCount : 3;
          if (block.rawMarkdown && typeof block.rawMarkdown === "string") {
            const tableData = parseMarkdownTable(block.rawMarkdown, cols);
            if (tableData.rows.length > 0) {
              sections.push({
                type: "table",
                title: block.title,
                table: tableData,
              });
            }
          } else if (Array.isArray(block.rows)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const rows = block.rows.map((r: any) => ({
              cells: Array.isArray(r.cells) ? r.cells : [],
            }));
            sections.push({
              type: "table",
              title: block.title,
              table: { rows },
            });
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
    flushTable();
  }

  const slug = typeof sp.slug === "string" ? sp.slug : sp.slug?.current || "";
  const imageUrl = urlForImage(sp.coverImage) || "/images/blog/esya-takasi-rehberi.webp";

  return {
    slug,
    title: sp.title || "",
    excerpt: sp.excerpt || "",
    coverImage: imageUrl,
    category: sp.category || "Rehber",
    author: DEFAULT_AUTHOR,
    publishedAt: sp.publishedAt || new Date().toISOString().split("T")[0],
    updatedAt: typeof sp._updatedAt === "string" ? sp._updatedAt.split("T")[0] : undefined,
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
        return sanityPosts.map(transformSanityPost).filter((p) => !BLOG_REDIRECTS[p.slug]);
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
