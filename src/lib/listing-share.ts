import { cache } from "react";

export interface PublicListing {
  listingNo: number;
  title: string;
  description: string;
  location: string;
  conditionName: string;
  category: string;
  imageUrl: string | null;
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

      // İmaj listesinden display_order'a göre ilk görseli seç
      let primaryImageUrl: string | null = null;
      if (Array.isArray(data.listing_images) && data.listing_images.length > 0) {
        const sortedImages = [...data.listing_images].sort(
          (a, b) => (Number(a.display_order) || 0) - (Number(b.display_order) || 0)
        );
        primaryImageUrl = sortedImages[0]?.image_url || null;
      }

      // Yalnızca public güvenli alanları döndür
      return {
        listingNo: Number(data.listing_no) || listingNo,
        title: String(data.title || "").trim(),
        description: String(data.description || "").trim(),
        location: String(data.location || "").trim(),
        conditionName: String(data.condition_name || "").trim(),
        category: String(data.category || "").trim(),
        imageUrl: primaryImageUrl,
      };
    } catch (error) {
      console.error("[getPublicListingByNo] Request failure:", error);
      return null;
    }
  }
);
