import "server-only";
import { cache } from "react";
import { slugify, parseLocation } from "./taxonomy";

/**
 * Supabase'deki herkese açık ilan verisi. Yalnızca sunucuda çalışır.
 * Web'de kullanıcının tam adı gösterilmez; yalnızca kullanıcı adı kullanılır.
 */

export interface ListingSeller {
  id: string | null;
  username: string | null;
  avatarUrl: string | null;
  city: string | null;
  rating: number | null;
  swapCount: number;
  isVerified: boolean;
  memberSince: string | null;
}

export interface Listing {
  id: string | null;
  listingNo: number;
  title: string;
  description: string;
  category: string;
  location: string;
  conditionName: string;
  wantedItem: string | null;
  specs: Record<string, string>;
  images: string[];
  imageUrl: string | null;
  publishedAt: string | null;
  createdAt: string | null;
  expiresAt: string | null;
  viewCount: number | null;
  seller: ListingSeller | null;
}

export interface ListingCursor {
  publishedAt: string;
  id: string;
}

// Anon anahtar herkese açık olacak şekilde tasarlanmıştır (mobil uygulamada da gömülüdür);
// veri güvenliği Supabase RLS ve RPC yetkileriyle sağlanır. Ortam değişkeni varsa o kullanılır.
const SUPABASE_URL =
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "https://supabase.takaslapp.com";
const SUPABASE_ANON_KEY =
  process.env.SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc4ODM2MzAwMCwiZXhwIjo0OTQ0MDM2NjAwLCJyb2xlIjoiYW5vbiJ9.hUvf_6rITGdijl2NTia81kLIVR_yfYt8cbPO4WYsoyM";

async function rpc<T>(fn: string, body: Record<string, unknown>, revalidate: number): Promise<T | null> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error("[listings] SUPABASE_URL / SUPABASE_ANON_KEY tanımlı değil");
    return null;
  }
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(body),
      next: { revalidate, tags: ["listings"] },
    });
    if (!res.ok) {
      console.error(`[listings] ${fn} HTTP ${res.status}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (e) {
    console.error(`[listings] ${fn} failed`, e);
    return null;
  }
}

const str = (v: unknown): string => (typeof v === "string" ? v.trim() : v == null ? "" : String(v).trim());
const strOrNull = (v: unknown): string | null => str(v) || null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeSeller(p: any): ListingSeller | null {
  if (!p || typeof p !== "object") return null;
  return {
    id: strOrNull(p.id),
    username: strOrNull(p.username),
    avatarUrl: strOrNull(p.avatar_url),
    city: strOrNull(p.city),
    rating: typeof p.rating === "number" ? p.rating : null,
    swapCount: typeof p.swap_count === "number" ? p.swap_count : 0,
    isVerified: Boolean(p.is_verified),
    memberSince: strOrNull(p.created_at),
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function normalizeListing(d: any): Listing | null {
  if (!d || typeof d !== "object" || !d.listing_no) return null;

  let images: string[] = [];
  if (Array.isArray(d.listing_images)) {
    images = [...d.listing_images]
      .sort((a, b) => (Number(a?.display_order) || 0) - (Number(b?.display_order) || 0))
      .map((img) => (typeof img === "string" ? img : img?.image_url || img?.url || null))
      .filter((u): u is string => typeof u === "string" && u.trim().length > 0);
  }
  if (images.length === 0 && d.image_url) images = [str(d.image_url)];

  const specs: Record<string, string> = {};
  if (d.specs && typeof d.specs === "object" && !Array.isArray(d.specs)) {
    for (const [k, v] of Object.entries(d.specs)) {
      const val = str(v);
      if (val) specs[k] = val;
    }
  }

  return {
    id: strOrNull(d.id),
    listingNo: Number(d.listing_no),
    title: str(d.title) || "İlan",
    description: str(d.description),
    category: str(d.category),
    location: str(d.location),
    conditionName: str(d.condition_name),
    wantedItem: strOrNull(d.wanted_item),
    specs,
    images,
    imageUrl: images[0] ?? null,
    publishedAt: strOrNull(d.published_at),
    createdAt: strOrNull(d.created_at),
    expiresAt: strOrNull(d.expires_at),
    viewCount: typeof d.view_count === "number" ? d.view_count : null,
    seller: normalizeSeller(d.profiles),
  };
}

export interface ListingQuery {
  category?: string;
  city?: string;
  search?: string;
  cursor?: ListingCursor | null;
  limit?: number;
}

export interface ListingPage {
  items: Listing[];
  nextCursor: ListingCursor | null;
}

/** Onaylı ve aktif ilanlar; en yeni önce, cursor ile sayfalı. */
export const getListings = cache(async (q: ListingQuery = {}): Promise<ListingPage> => {
  const limit = Math.min(Math.max(q.limit ?? 24, 1), 100);
  const data = await rpc<unknown[]>(
    "get_public_listings_v2",
    {
      p_category: q.category || null,
      p_city: q.city || null,
      p_search: q.search?.trim() || null,
      p_limit: limit,
      p_cursor_published_at: q.cursor?.publishedAt ?? null,
      p_cursor_id: q.cursor?.id ?? null,
    },
    60
  );
  const items = (Array.isArray(data) ? data : []).map(normalizeListing).filter((l): l is Listing => l !== null);
  const last = items[items.length - 1];
  const nextCursor =
    items.length === limit && last?.publishedAt && last.id ? { publishedAt: last.publishedAt, id: last.id } : null;
  return { items, nextCursor };
});

/** Sitemap ve sayaçlar için tüm aktif ilanları sayfa sayfa çeker (üst sınır: 5000). */
export const getAllListings = cache(async (): Promise<Listing[]> => {
  const all: Listing[] = [];
  let cursor: ListingCursor | null = null;
  for (let i = 0; i < 50; i++) {
    const page: ListingPage = await getListings({ limit: 100, cursor });
    all.push(...page.items);
    if (!page.nextCursor) break;
    cursor = page.nextCursor;
  }
  return all;
});

export const getListingByNo = cache(async (listingNo: number): Promise<Listing | null> => {
  const data = await rpc<unknown>("get_listing_by_no", { p_listing_no: listingNo }, 300);
  return normalizeListing(data);
});

/** "?sonraki=<iso>_<uuid>" biçimindeki cursor'u çözer. */
export function parseCursor(raw: string | string[] | undefined): ListingCursor | null {
  const v = Array.isArray(raw) ? raw[0] : raw;
  if (!v) return null;
  const i = v.lastIndexOf("_");
  if (i <= 0) return null;
  const publishedAt = v.slice(0, i);
  const id = v.slice(i + 1);
  if (Number.isNaN(Date.parse(publishedAt)) || !/^[0-9a-f-]{36}$/i.test(id)) return null;
  return { publishedAt, id };
}

export function serializeCursor(c: ListingCursor): string {
  return `${c.publishedAt}_${c.id}`;
}

/** Fotoğrafsız veya çok kısa açıklamalı ilanlar arama motorlarında listelenmez. */
export function isIndexable(l: Listing): boolean {
  return l.images.length > 0 && l.description.length >= 30;
}

export interface Facet {
  name: string;
  slug: string;
  count: number;
}

/** Aktif ilanlardan kategori ve şehir sayıları (iç linkleme ve indeks kararı için). */
export const getFacets = cache(async (): Promise<{ categories: Facet[]; cities: Facet[]; total: number }> => {
  const all = await getAllListings();
  const cat = new Map<string, Facet>();
  const city = new Map<string, Facet>();
  for (const l of all) {
    if (l.category) {
      const s = slugify(l.category);
      const f = cat.get(s) ?? { name: l.category, slug: s, count: 0 };
      f.count++;
      cat.set(s, f);
    }
    const c = parseLocation(l.location).city;
    if (c) {
      const s = slugify(c);
      const f = city.get(s) ?? { name: c, slug: s, count: 0 };
      f.count++;
      city.set(s, f);
    }
  }
  const sort = (m: Map<string, Facet>) => [...m.values()].sort((a, b) => b.count - a.count);
  return { categories: sort(cat), cities: sort(city), total: all.length };
});
