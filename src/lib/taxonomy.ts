/**
 * Kategori ve şehir adlarını URL dostu slug'lara çeviren yardımcılar.
 * Kategori adları uygulamadaki (Supabase) değerlerle birebir aynı olmalıdır.
 */

const TR_MAP: Record<string, string> = {
  ç: "c", Ç: "c", ğ: "g", Ğ: "g", ı: "i", I: "i", İ: "i",
  ö: "o", Ö: "o", ş: "s", Ş: "s", ü: "u", Ü: "u",
};

export function slugify(text: string): string {
  return text
    .replace(/[çÇğĞıIİöÖşŞüÜ]/g, (c) => TR_MAP[c] ?? c)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/** Uygulamadaki ana kategoriler (görüntülenme sırası). */
export const CATEGORIES = [
  "Elektronik & Teknoloji",
  "Giyim & Moda",
  "Ev, Yaşam & Dekorasyon",
  "Anne, Bebek & Çocuk",
  "Spor, Doğa & Outdoor",
  "Oyun & Konsol",
  "Hobi, Müzik & Koleksiyon",
  // TODO: Uygulamadaki tam kategori listesiyle eşitlenecek (şu an canlı ilanlarda görülenler).
] as const;

export interface Category {
  name: string;
  slug: string;
}

export const CATEGORY_LIST: Category[] = CATEGORIES.map((name) => ({ name, slug: slugify(name) }));

export function categoryBySlug(slug: string): Category | undefined {
  return CATEGORY_LIST.find((c) => c.slug === slug);
}

export function categorySlug(name: string): string {
  return slugify(name);
}

/** Türkiye'nin 81 ili. */
export const CITIES = [
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya",
  "Ardahan", "Artvin", "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik",
  "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum",
  "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir",
  "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Iğdır", "Isparta", "İstanbul",
  "İzmir", "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis",
  "Kırıkkale", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa",
  "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Osmaniye",
  "Rize", "Sakarya", "Samsun", "Şanlıurfa", "Siirt", "Sinop", "Şırnak", "Sivas",
  "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak",
] as const;

export interface City {
  name: string;
  slug: string;
}

export const CITY_LIST: City[] = CITIES.map((name) => ({ name, slug: slugify(name) }));

export function cityBySlug(slug: string): City | undefined {
  return CITY_LIST.find((c) => c.slug === slug);
}

/** "Konya, Selçuklu" → { city: "Konya", district: "Selçuklu" } */
export function parseLocation(location: string | null | undefined): { city: string | null; district: string | null } {
  if (!location) return { city: null, district: null };
  const [city, district] = location.split(",").map((s) => s.trim());
  return { city: city || null, district: district || null };
}

/** İlan detay URL'si: /ilan/macbook-pro-m4-16-50081134 */
export function listingPath(listing: { listingNo: number; title: string }): string {
  const base = slugify(listing.title).slice(0, 60).replace(/-+$/g, "");
  return `/ilan/${base ? `${base}-` : ""}${listing.listingNo}`;
}

/** "macbook-pro-50081134" → 50081134 (son 8 hane) */
export function listingNoFromSlug(slug: string): number | null {
  const m = /(?:^|-)(\d{8})$/.exec(slug);
  return m ? Number(m[1]) : null;
}

/** Kullanıcı profili URL'si: /profil/kullanici_adi */
export function profilePath(username: string): string {
  return `/profil/${encodeURIComponent(username)}`;
}
