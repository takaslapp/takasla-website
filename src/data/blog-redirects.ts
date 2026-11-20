/**
 * Birleştirilen (yinelenen) blog yazıları: eski adres → yazının birleştirildiği adres.
 * Aynı aramayı hedefleyen iki yazı birbirinin sıralamasını düşürür (keyword cannibalization).
 * Buraya eklenen yazı sitede listelenmez, sitemap'ten çıkar ve kalıcı olarak yönlenir.
 */
export const BLOG_REDIRECTS: Record<string, string> = {
  "ikinci-el-esya-takasi-nasil-yapilir": "esya-takasi-nedir-ve-nasil-yapilir",
};
