import { cache } from "react";

export interface ListingSellerProfile {
  id?: string;
  username?: string | null;
  fullName?: string | null;
  avatarUrl?: string | null;
  rating?: number | null;
  swapCount?: number | null;
  isVerified?: boolean | null;
  city?: string | null;
}

export interface PublicListing {
  id?: string;
  listingNo: number;
  title: string;
  description: string;
  location: string;
  conditionName: string;
  category: string;
  imageUrl: string | null;
  images: string[];
  wantedItem?: string | null;
  createdAt?: string | null;
  viewCount?: number | null;
  seller?: ListingSellerProfile | null;
}

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.SUPABASE_URL ||
  "https://supabase.takaslapp.com";

const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc4ODM2MzAwMCwiZXhwIjo0OTQ0MDM2NjAwLCJyb2xlIjoiYW5vbiJ9.hUvf_6rITGdijl2NTia81kLIVR_yfYt8cbPO4WYsoyM";

/**
 * 8 haneli listing_no ile public ilan verisini server-side çeker.
 * React cache() sayesinde aynı render döngüsünde (generateMetadata + Page)
 * RPC sorgusu yalnız 1 kez çalıştırılır.
 */
export const getPublicListingByNo = cache(
  async (listingNo: number): Promise<PublicListing | null> => {
    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/rpc/get_listing_by_no`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ p_listing_no: listingNo }),
          next: { revalidate: 60 },
        }
      );

      if (!response.ok) {
        console.error(
          `[getPublicListingByNo] RPC HTTP error: ${response.status} ${response.statusText}`
        );
        return null;
      }

      const data = await response.json();
      if (!data || typeof data !== "object") {
        return null;
      }

      // Çoklu görsel listesini display_order'a göre sırala
      let images: string[] = [];
      if (Array.isArray(data.listing_images) && data.listing_images.length > 0) {
        const sortedImages = [...data.listing_images].sort(
          (a, b) => (Number(a?.display_order) || 0) - (Number(b?.display_order) || 0)
        );
        images = sortedImages
          .map((img) => {
            if (typeof img === "string") return img;
            if (img && typeof img === "object") {
              return img.image_url || img.url || img.imageUrl || null;
            }
            return null;
          })
          .filter((url): url is string => Boolean(url && typeof url === "string" && url.trim().length > 0));
      }

      if (images.length === 0 && data.image_url) {
        images = [String(data.image_url).trim()];
      }

      const primaryImageUrl = images[0] || null;

      // Satıcı profil bilgisi
      let seller: ListingSellerProfile | null = null;
      if (data.profiles && typeof data.profiles === "object") {
        seller = {
          id: data.profiles.id,
          username: data.profiles.username || null,
          fullName: data.profiles.full_name || null,
          avatarUrl: data.profiles.avatar_url || null,
          rating: typeof data.profiles.rating === "number" ? data.profiles.rating : null,
          swapCount: typeof data.profiles.swap_count === "number" ? data.profiles.swap_count : 0,
          isVerified: Boolean(data.profiles.is_verified),
          city: data.profiles.city || null,
        };
      }

      // Yalnızca public güvenli alanları döndür
      return {
        id: data.id ? String(data.id) : undefined,
        listingNo: Number(data.listing_no) || listingNo,
        title: String(data.title || "").trim(),
        description: String(data.description || "").trim(),
        location: String(data.location || "").trim(),
        conditionName: String(data.condition_name || "").trim(),
        category: String(data.category || "").trim(),
        imageUrl: primaryImageUrl,
        images,
        wantedItem: data.wanted_item ? String(data.wanted_item).trim() : null,
        createdAt: data.created_at ? String(data.created_at) : null,
        viewCount: typeof data.view_count === "number" ? data.view_count : null,
        seller,
      };
    } catch (error) {
      console.error("[getPublicListingByNo] Request failure:", error);
      return null;
    }
  }
);
