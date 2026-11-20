export const SITE_URL = "https://takaslapp.com";
export const APP_STORE_URL = "https://apps.apple.com/tr/app/takasla-yeni-nesil-takas/id6812309534?l=tr";
export const IOS_APP_ID = "6812309534";
/** Android paket adı ve Play Store bağlantısı. Uygulama Play Store'da yayınlanınca ortam değişkenlerine eklenir. */
export const ANDROID_PACKAGE = process.env.NEXT_PUBLIC_ANDROID_PACKAGE || "";
export const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL || (ANDROID_PACKAGE ? `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}` : "");
export const CONTACT_EMAIL = "takaslappcom@gmail.com";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export function formatDateTR(iso: string | null | undefined): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Istanbul" });
}

/** "3 gün önce" gibi kısa göreli tarih (sunucu saatine göre). */
export function relativeDateTR(iso: string | null | undefined): string | null {
  if (!iso) return null;
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return null;
  const diff = Math.max(0, Date.now() - t);
  const h = Math.floor(diff / 3_600_000);
  if (h < 1) return "Az önce";
  if (h < 24) return `${h} saat önce`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d} gün önce`;
  return formatDateTR(iso);
}
