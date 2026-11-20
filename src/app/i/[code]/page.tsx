import { notFound, permanentRedirect } from "next/navigation";
import { getListingByNo } from "@/lib/listings";
import { listingPath } from "@/lib/taxonomy";

/**
 * Uygulamadan paylaşılan kısa linkler (/i/12345678).
 * Uygulama yüklüyse iOS Universal Link uygulamayı açar; tarayıcıda ise
 * kalıcı olarak kanonik ilan sayfasına (/ilan/<baslik>-<no>) yönlendirilir.
 */
export default async function ShortListingLink({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  if (!/^[0-9]{8}$/.test(code.trim())) notFound();
  const listing = await getListingByNo(Number(code));
  if (!listing) notFound();
  permanentRedirect(listingPath(listing));
}
