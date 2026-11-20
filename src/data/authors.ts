export interface Author {
  slug: string;
  name: string;
  role: string;
  avatar?: string;
  bio: string;
  /** Kişinin diğer profilleri (LinkedIn vb.); Person şemasında sameAs olarak kullanılır. */
  sameAs?: string[];
}

export const AUTHORS: Author[] = [
  {
    slug: "recep-aydogan",
    name: "Recep Aydoğan",
    role: "Takasla Kurucu Ortağı",
    bio: "Takasla'nın kurucu ortağı. Ürün geliştirme ve takas topluluğunun büyümesi üzerine çalışıyor. Blogda eşya takası, ikinci el ürünlerin değerlendirilmesi ve güvenli takas üzerine rehberler yazıyor.",
    sameAs: ["https://www.linkedin.com/in/recepaydogan/", "https://www.instagram.com/recepaydogaann"],
  },
];

export const DEFAULT_AUTHOR = AUTHORS[0];

export function authorBySlug(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}

export function authorPath(a: Pick<Author, "slug">): string {
  return `/blog/yazar/${a.slug}`;
}
