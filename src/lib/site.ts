export const SITE_URL = "https://takaslapp.com";
export const APP_STORE_URL = "https://apps.apple.com/tr/app/takasla-yeni-nesil-takas/id6812309534?l=tr";
export const IOS_APP_ID = "6812309534";
/** Android uygulaması (Play Console > Android geliştirici doğrulaması). */
export const ANDROID_PACKAGE = process.env.NEXT_PUBLIC_ANDROID_PACKAGE || "com.takaslapp.app";
/**
 * Uygulama Play Store'da herkese açık yayınlanınca true yapılır (veya NEXT_PUBLIC_ANDROID_RELEASED=1).
 * O zamana kadar Android'de "uygulamada aç" bandı gösterilmez; kapalı testteki kullanıcılar
 * dışındakiler Play Store'da uygulamayı bulamaz.
 */
export const ANDROID_RELEASED = process.env.NEXT_PUBLIC_ANDROID_RELEASED === "1";
/** Play Console'daki imza sertifikası SHA-256 parmak izleri (App Links doğrulaması için, herkese açık bilgidir). */
export const ANDROID_SHA256_FINGERPRINTS = [
  "16:8B:6D:B8:F6:B7:58:B6:FA:84:AC:5D:9D:10:01:13:31:A2:78:07:01:70:17:E5:A1:B4:2C:78:DE:B6:0E:1A",
  "2A:31:DE:FC:75:43:AD:F3:B6:4F:45:FA:A2:CA:5F:74:26:09:B3:7E:4C:F2:02:32:8F:E5:C9:2D:C6:AB:2D:12",
  "09:B1:EE:EC:29:DA:CA:BC:D2:66:A9:68:56:C4:D8:FD:06:99:9A:17:D6:0F:1E:D2:D9:2E:60:85:33:82:55:9A",
];
export const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL || `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;
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
