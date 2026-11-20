import { NextResponse, type NextRequest } from "next/server";
import { getListings, parseCursor, serializeCursor, toSummary } from "@/lib/listings";
import { categoryBySlug, cityBySlug } from "@/lib/taxonomy";

/**
 * Sonsuz kaydırma ve "yakınındaki ilanlar" için ilan sayfası (JSON).
 * GET /api/ilanlar?sonraki=<cursor>&kategori=<slug>&sehir=<slug>&limit=24
 */
export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const category = sp.get("kategori") ? categoryBySlug(sp.get("kategori")!)?.name : undefined;
  const city = sp.get("sehir") ? cityBySlug(sp.get("sehir")!)?.name : undefined;
  const limit = Math.min(Math.max(Number(sp.get("limit")) || 24, 1), 48);
  const q = sp.get("q")?.trim().slice(0, 80) || undefined;

  const { items, nextCursor } = await getListings({
    category,
    city,
    search: q,
    cursor: parseCursor(sp.get("sonraki") ?? undefined),
    limit,
  });

  return NextResponse.json(
    { items: items.map(toSummary), next: nextCursor ? serializeCursor(nextCursor) : null },
    { headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" } }
  );
}
