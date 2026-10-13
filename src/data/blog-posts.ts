import { client, urlForImage } from "@/sanity/client";

export interface BlogSection {
  type: "paragraph" | "heading" | "callout" | "quote" | "list";
  level?: 2 | 3;
  text?: string;
  content?: string;
  title?: string;
  author?: string;
  items?: string[];
  variant?: "tip" | "info";
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string; // ISO date "YYYY-MM-DD"
  updatedAt?: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  sections: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "esya-takasinin-puf-noktalari-guvenli-ve-karli-takas-rehberi",
    title: "Eşya Takasının Püf Noktaları: Güvenli, Hızlı ve Karlı Takas Rehberi",
    excerpt:
      "Kullanmadığınız eşyaları nakit harcamadan değerlendirmenin en akılcı yollarını keşfedin. Doğru ilan hazırlamaktan güvenli teslimata kadar adım adım takas rehberi.",
    coverImage: "/images/blog/esya-takasi-rehberi.webp",
    category: "Rehber",
    author: {
      name: "Takasla Ekibi",
      role: "İçerik & Topluluk",
      avatar: "/images/takasla-icon.jpg",
    },
    publishedAt: "2026-10-13",
    readTime: "4 dk okuma",
    tags: ["Takas Rehberi", "Döngüsel Ekonomi", "Güvenli Alışveriş", "Tasarruf"],
    featured: true,
    sections: [
      {
        type: "paragraph",
        content:
          "Günümüzde artan tüketim çılgınlığı ve yükselen fiyatlar, kullanıcıları alternatif ve sürdürülebilir yöntemler aramaya yönlendiriyor. Evlerimizde dolapların bir köşesinde unutulan, çekmecelerde bekleyen veya artık ihtiyaç duymadığımız teknolojik cihazlar, kitaplar ve ev eşyaları aslında birer gizli bütçe kaynağı. İşte tam bu noktada eşya takası, para harcamadan yeni ihtiyaçlarımızı karşılamanın en doğal ve modern yolu haline geliyor.",
      },
      {
        type: "heading",
        level: 2,
        text: "1. İlanınızı Şeffaf ve Detaylı Hazırlayın",
      },
      {
        type: "paragraph",
        content:
          "Başarılı bir takas sürecinin ilk kuralı dürüst ve net iletişimdir. Eşyanızın fotoğraflarını çekerken gün ışığından faydalanın, tüm açıları net bir şekilde gösterin ve varsa ürünün üzerindeki küçük çizik veya kullanım izlerini gizlemeden belirtin. Karşı tarafta oluşturacağınız güven, takas teklifinizin dakikalar içinde kabul edilmesini sağlayacaktır.",
      },
      {
        type: "list",
        items: [
          "Farklı açılardan en az 3-4 net fotoğraf ekleyin.",
          "Ürünün garanti, kutu veya fatura durumunu açıklamada netleştirin.",
          "Açıklama kısmında takaslamak istediğiniz ürün kategorilerini açıkça yazın.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Takasla İpucu:",
        text: "İlan başlığında ürünün modelini ve kozmetik durumunu (örneğin: 'Temiz / Sıfır Ayarında Sony Kulaklık') net belirtmek, aramalarda 3 kat daha fazla görüntülenme almanızı sağlar.",
      },
      {
        type: "heading",
        level: 2,
        text: "2. Gerçekçi Değer Eşleşmesi Kurun",
      },
      {
        type: "paragraph",
        content:
          "Eşya takasında amaç genellikle 'birebir aynı kuruşu yakalamak' değil, her iki tarafın da birbirinin ihtiyacını adilce karşılamasıdır. Ancak teklif verirken teklif ettiğiniz ürünün ikinci el piyasa değeriyle karşı tarafın ürününün durumunu mutlaka dengede tutun. Değer denkliği kurulamayan teklifler genellikle geri çevrilir.",
      },
      {
        type: "quote",
        text: "Takas sadece bir eşya değişimi değil; cebinizdeki parayı korurken eşyalara yeni bir yaşam şansı tanıyan döngüsel tüketim bilincidir.",
        author: "Takasla Topluluk İlkeleri",
      },
      {
        type: "heading",
        level: 2,
        text: "3. Uygulama İçi İletişimden Asla Ayrılmayın",
      },
      {
        type: "paragraph",
        content:
          "İlan sahipleriyle iletişim kurarken daima platformun güvenli mesajlaşma kanalını kullanın. Karşı tarafın profil değerlendirmelerini, onay rozetlerini ve daha önceki takas geçmişini inceleyin. Uygulama içi mesajlaşma, ileride oluşabilecek yanlış anlaşılmaların önüne geçer ve her iki tarafın da haklarını kayıt altında tutar.",
      },
      {
        type: "heading",
        level: 2,
        text: "4. Güvenli Teslimat ve Kontrol Süreci",
      },
      {
        type: "paragraph",
        content:
          "Aynı şehirdeyseniz buluşma noktası olarak aydınlık, kalabalık ve merkezi kamusal alanları (AVM'ler, metro çıkışları, kafeler) tercih edin. Farklı şehirlerde kargo yoluyla takas yapacaksanız, anlaşmalı kargo kodlarıyla süreci takip edin ve ürün elinize ulaştığında fotoğraflarındakiyle aynı durumda olup olmadığını kontrol ettikten sonra takas onayını tamamlayın.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Özet Hatırlatma",
        text: "Kullanmadığınız her eşya, bir başkasının aradığı ürün olabilir. Bütçenizi korumak ve sürdürülebilir bir geleceğe katkı sunmak için Takasla ile takas yapmaya bugün başlayın.",
      },
    ],
  },
  {
    slug: "dongusel-tuketim-nedir-esya-takasi-ile-sifir-masraf-sifir-israf",
    title: "Döngüsel Tüketim Nedir? Eşya Takası ile Sıfır Masraf, Sıfır İsraf",
    excerpt:
      "Geleneksel 'satın al ve tüket' modeline alternatif olarak doğan döngüsel tüketim modelini ve eşya takasının hem bütçenize hem de gezegene sağladığı somut faydaları inceliyoruz.",
    coverImage: "/images/blog/dongusel-ekonomi-takas.webp",
    category: "Döngüsel Ekonomi",
    author: {
      name: "Takasla Ekibi",
      role: "Sürdürülebilirlik & Araştırma",
      avatar: "/images/takasla-icon.jpg",
    },
    publishedAt: "2026-10-12",
    readTime: "5 dk okuma",
    tags: ["Döngüsel Ekonomi", "Sürdürülebilir Yaşam", "Sıfır Atık", "Bilinçli Tüketim"],
    featured: false,
    sections: [
      {
        type: "paragraph",
        content:
          "Modern dünyada 'üret, kullan ve at' prensibine dayalı doğrusal ekonomi modeli, hem bireysel bütçeleri hem de doğal kaynakları hızla tüketiyor. Çoğu zaman bir hevesle aldığımız ya da işlevini yitirmemiş olan onlarca eşya, evlerimizde atıl bekleyerek değer kaybediyor. Döngüsel tüketim yaklaşımı ise bu döngüyü tersine çevirerek eşyaların kullanım ömrünü uzatmayı ve ihtiyaçları nakit harcamadan karşılamayı merkezine alıyor.",
      },
      {
        type: "heading",
        level: 2,
        text: "1. Doğrusal Ekonomiden Döngüsel Tüketime Geçiş",
      },
      {
        type: "paragraph",
        content:
          "Geleneksel tüketim alışkanlıkları bizi sürekli yeni ürünler satın almaya teşvik eder. Oysa bir ürünün ömrü, ilk sahibinin ihtiyacı bittiğinde sona ermez. Döngüsel modelde bir kişinin artık kullanmadığı bir monitör, bir başka kişinin uzaktan çalışma ihtiyacını karşılayabilir; bir çocuğun küçülen bisikleti başka bir çocuğun ilk bisikleti olabilir.",
      },
      {
        type: "heading",
        level: 2,
        text: "2. Eşya Takasının Bütçeye Doğrudan Katkısı",
      },
      {
        type: "paragraph",
        content:
          "Yeni bir telefon, fotoğraf makinesi veya çalışma masası almak günümüz ekonomik şartlarında ciddi bir bütçe kalemi oluşturur. Takas yöntemiyle kullanıcılar, ellerindeki atıl varlıkları birer değişim aracına dönüştürerek ceplerinden tek kuruş nakit çıkmadan ihtiyaçlarını tamamlarlar.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Tasarruf Gerçeği",
        text: "Ortalama bir hanede kullanılmadığı halde çalışır durumda bekleyen eşyaların toplam piyasa değeri binlerce lirayı buluyor. Takasla, bu gizli değeri nakit harcamadan aktif faydaya dönüştürür.",
      },
      {
        type: "heading",
        level: 2,
        text: "3. Karbon Ayak İzini Azaltmanın En Pratik Yolu",
      },
      {
        type: "paragraph",
        content:
          "Üretilen her yeni elektronik cihaz veya tekstil ürünü; hammadde madenciliği, fabrika üretimi, ambalajlama ve küresel lojistik süreçleriyle devasa bir karbon salınımına neden olur. Var olan bir ürünü takaslayarak yeniden ekonomiye kazandırmak, yeni bir ürünün üretilme ihtiyacını ortadan kaldırır ve çevreye doğrudan katkı sağlar.",
      },
      {
        type: "quote",
        text: "En sürdürülebilir ürün, henüz üretilmemiş olandır. İkinci en sürdürülebilir ürün ise hâlihazırda üretilmiş olup el değiştiren üründür.",
        author: "Döngüsel Tüketim Raporu",
      },
      {
        type: "heading",
        level: 2,
        text: "4. Takasla ile Döngüsel Yaşama İlk Adım",
      },
      {
        type: "paragraph",
        content:
          "Takas kültürünü modern bir mobil uygulama altyapısıyla buluşturan Takasla, bu döngüye katılmayı herkes için zahmetsiz hale getiriyor. Fotoğrafını çek, ilana koy, aradığın ürünle eşleştir ve paylaşım ekonomisinin bir parçası ol.",
      },
    ],
  },
];

// Helper functions for retrieval and SEO
export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedPost(): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getCategories(): string[] {
  const categories = new Set(BLOG_POSTS.map((p) => p.category));
  return ["Tümü", ...Array.from(categories)];
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];

  return BLOG_POSTS.filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize same category
      if (a.category === current.category && b.category !== current.category) return -1;
      if (b.category === current.category && a.category !== current.category) return 1;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    })
    .slice(0, limit);
}

// Transform raw Sanity post into BlogPost interface
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function transformSanityPost(sp: any): BlogPost {
  const sections: BlogSection[] = [];
  if (Array.isArray(sp.content)) {
    for (const block of sp.content) {
      if (block._type === "block") {
        const text = Array.isArray(block.children)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ? block.children.map((c: any) => c.text || "").join("")
          : "";
        if (!text.trim()) continue;

        if (block.style === "h2") {
          sections.push({ type: "heading", level: 2, text });
        } else if (block.style === "h3") {
          sections.push({ type: "heading", level: 3, text });
        } else if (block.style === "blockquote") {
          sections.push({ type: "quote", text });
        } else if (block.listItem) {
          sections.push({ type: "list", items: [text] });
        } else {
          sections.push({ type: "paragraph", content: text });
        }
      } else if (block._type === "callout") {
        sections.push({
          type: "callout",
          variant: "tip",
          title: block.title || "Önemli İpucu",
          text: block.text || "",
        });
      }
    }
  }

  const slug = typeof sp.slug === "string" ? sp.slug : sp.slug?.current || "";
  const imageUrl = urlForImage(sp.coverImage) || "/images/blog/esya-takasi-rehberi.webp";

  return {
    slug,
    title: sp.title || "",
    excerpt: sp.excerpt || "",
    coverImage: imageUrl,
    category: sp.category || "Rehber",
    author: {
      name: "Takasla Ekibi",
      role: "İçerik & Topluluk",
      avatar: "/images/takasla-icon.jpg",
    },
    publishedAt: sp.publishedAt || new Date().toISOString().split("T")[0],
    readTime: sp.readTime || "4 dk okuma",
    tags: [sp.category || "Rehber"],
    featured: Boolean(sp.featured),
    sections: sections.length > 0 ? sections : [
      { type: "paragraph", content: sp.excerpt || "" }
    ],
  };
}

export async function getAllPostsAsync(): Promise<BlogPost[]> {
  if (client) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sanityPosts: any[] = await client.fetch(
        `*[_type == "post"] | order(publishedAt desc)`
      );
      if (Array.isArray(sanityPosts) && sanityPosts.length > 0) {
        const transformed = sanityPosts.map(transformSanityPost);
        const sanitySlugs = new Set(transformed.map((p) => p.slug));
        const filteredStatic = BLOG_POSTS.filter((p) => !sanitySlugs.has(p.slug));
        return [...transformed, ...filteredStatic];
      }
    } catch (e) {
      console.warn("Failed to fetch posts from Sanity, falling back to static:", e);
    }
  }
  return getAllPosts();
}

export async function getPostBySlugAsync(slug: string): Promise<BlogPost | undefined> {
  if (client) {
    try {
      const sp = await client.fetch(
        `*[_type == "post" && slug.current == $slug][0]`,
        { slug }
      );
      if (sp) {
        return transformSanityPost(sp);
      }
    } catch (e) {
      console.warn("Failed to fetch post from Sanity:", e);
    }
  }
  return getPostBySlug(slug);
}

