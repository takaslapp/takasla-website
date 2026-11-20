/**
 * Kategori sayfalarının arama motoru metinleri. Her kategori kendi arama niyetini hedefler
 * (ör. "telefon takas", "ps5 takas", "bebek arabası takas") ve benzersiz içerik taşır.
 * Anahtar: kategori slug'ı.
 */
export interface CategorySeo {
  /** <title> (marka şablonla eklenir) */
  title: string;
  /** Sayfadaki H1 */
  h1: string;
  description: string;
  /** Liste üstündeki kısa giriş */
  intro: string;
  /** Liste altındaki bilgilendirici metin */
  sections: { heading: string; text: string }[];
}

export const CATEGORY_SEO: Record<string, CategorySeo> = {
  "elektronik-teknoloji": {
    title: "Telefon ve Elektronik Takas İlanları",
    h1: "Telefon ve elektronik takas ilanları",
    description:
      "iPhone, Samsung ve diğer telefonlar, laptop, tablet, kulaklık ve kamera takas ilanları. Kullanmadığın elektronik ürünü para ödemeden takas et.",
    intro:
      "Telefon, bilgisayar, tablet, kulaklık ve kamera gibi elektronik ürünlerde takasa açık ilanlar. Beğendiğin ilana uygulamadan kendi ürününle teklif gönder.",
    sections: [
      {
        heading: "Telefon takası nasıl yapılır?",
        text: "Telefonunu takas etmeden önce yedeğini al, hesaplarından çıkış yap ve cihazı fabrika ayarlarına döndür. İlanında model, hafıza, pil sağlığı ve kozmetik durumu açıkça yaz. Buluşmada karşı tarafın cihazının IMEI kaydını, iCloud ya da Google hesap kilidinin kapalı olduğunu ve ekran, kamera, şarj girişinin çalıştığını mutlaka kontrol et.",
      },
      {
        heading: "iPhone ve laptop takasında dikkat edilecekler",
        text: "iPhone takasında Ayarlar > Genel > Hakkında bölümünden model ve garanti bilgisini, Pil Sağlığı ekranından kapasiteyi birlikte kontrol edin. Laptop takasında şarj adaptörünü, klavye ve ekranı test edin. Fatura veya kutu varsa ilanda belirtmek güven sağlar ve takas sürecini hızlandırır.",
      },
    ],
  },
  "oyun-konsol": {
    title: "PS5, PS4 ve Oyun Konsolu Takas İlanları",
    h1: "Oyun konsolu takas ilanları",
    description:
      "PS5, PS4, Xbox, Nintendo Switch, oyun kolu ve oyun takas ilanları. Konsolunu ya da oyunlarını para ödemeden başka bir ürünle takas et.",
    intro:
      "PlayStation, Xbox ve Nintendo konsolları, kollar, oyunlar ve oyuncu ekipmanlarında takasa açık ilanlar.",
    sections: [
      {
        heading: "Konsol takasında neyi kontrol etmeli?",
        text: "Konsolu takas öncesi bir ekrana bağlayıp açılışını, disk okuyucusunu (varsa), fan sesini ve kolların bağlantısını test edin. Hesabından çıkış yaptığından ve konsolu sıfırladığından emin ol. Garanti süresi devam ediyorsa ilanda belirt.",
      },
      {
        heading: "Oyun ve aksesuar takası",
        text: "Bitirdiğin oyunları yeni bir oyunla, kullanmadığın kolu ya da kulaklığı ihtiyacın olan bir aksesuarla takas edebilirsin. Dijital kodlar ve hesap satışları kurallara aykırıdır; yalnızca fiziksel ürünler takas edilebilir.",
      },
    ],
  },
  "giyim-moda": {
    title: "Giyim, Ayakkabı ve Çanta Takas İlanları",
    h1: "Giyim ve moda takas ilanları",
    description:
      "Mont, elbise, ayakkabı, çanta ve aksesuar takas ilanları. Dolabındaki giymediğin kıyafetleri para ödemeden yeni parçalarla takas et.",
    intro:
      "Kadın, erkek ve çocuk giyim, ayakkabı, çanta ve aksesuarlarda takasa açık ilanlar. Etiketli ve az kullanılmış ürünler dahil.",
    sections: [
      {
        heading: "Kıyafet takası neden mantıklı?",
        text: "Bir kez giyilip dolapta kalan mont ya da beden uymayan ayakkabı, başka biri için tam aradığı parça olabilir. Kıyafet takası hem bütçeni korur hem de yeni ürün almadan gardırobunu yenilemeni sağlar.",
      },
      {
        heading: "İlanında neleri belirtmelisin?",
        text: "Beden, marka, kumaş ve kullanım durumunu yaz; varsa leke veya yıpranmayı fotoğrafla göster. Gün ışığında çekilmiş net fotoğraflar ve ölçü bilgisi, takas teklifini hızlandırır.",
      },
    ],
  },
  "ev-yasam-dekorasyon": {
    title: "Ev Eşyası, Mobilya ve Dekorasyon Takas İlanları",
    h1: "Ev eşyası ve dekorasyon takas ilanları",
    description:
      "Mobilya, beyaz eşya, mutfak gereçleri, küçük ev aletleri ve dekorasyon takas ilanları. Evindeki fazlalıkları para ödemeden takas et.",
    intro:
      "Mobilya, mutfak ürünleri, küçük ev aletleri, aydınlatma ve dekorasyon ürünlerinde takasa açık ilanlar.",
    sections: [
      {
        heading: "Ev eşyası takası",
        text: "Taşınırken ya da evini yenilerken elinde kalan eşyaları atmak yerine takas edebilirsin. Airfryer, süpürge, vantilatör gibi küçük ev aletleri ve dekorasyon ürünleri en çok takas edilen ürünler arasında.",
      },
      {
        heading: "Büyük eşyalarda teslimat",
        text: "Mobilya ve beyaz eşya gibi büyük ürünlerde ölçüleri ilana mutlaka ekle. Takasla kargo hizmeti vermez; taşıma ve teslimatı karşı tarafla birlikte planlarsınız. Bu yüzden aynı şehirdeki ilanlar daha kolay takas edilir.",
      },
    ],
  },
  "anne-bebek-cocuk": {
    title: "Bebek Arabası, Oyuncak ve Çocuk Ürünleri Takas İlanları",
    h1: "Anne, bebek ve çocuk ürünleri takas ilanları",
    description:
      "Bebek arabası, puset, oto koltuğu, mama sandalyesi, oyuncak ve çocuk kıyafeti takas ilanları. Çocuğun büyüdükçe ürünleri takasla yenile.",
    intro:
      "Bebek arabası, oto koltuğu, beşik, oyuncak, akülü araba ve çocuk giyiminde takasa açık ilanlar.",
    sections: [
      {
        heading: "Bebek ürünlerinde takas",
        text: "Çocuklar hızla büyüdüğü için bebek arabası, ana kucağı ya da oyuncaklar kısa sürede kullanılmaz hale gelir. Bu ürünleri takas ederek bir sonraki yaşa uygun ürünlere para harcamadan ulaşabilirsin.",
      },
      {
        heading: "Güvenlik ve hijyen",
        text: "Oto koltuğu ve bebek arabası takasında kaza geçmişi, kemer ve kilit mekanizmalarının sağlamlığı ile üretim tarihini sor. Ürünleri temizleyip ilana gerçek durumunu yansıtan fotoğraflar ekle.",
      },
    ],
  },
  "spor-doga-outdoor": {
    title: "Bisiklet, Scooter ve Spor Ekipmanı Takas İlanları",
    h1: "Spor ve outdoor takas ilanları",
    description:
      "Bisiklet, elektrikli scooter, kamp malzemesi, fitness ekipmanı ve spor giyim takas ilanları. Kullanmadığın spor ürününü takasla değerlendir.",
    intro:
      "Bisiklet, scooter, kamp ve outdoor ekipmanı, fitness aletleri ve spor giyimde takasa açık ilanlar.",
    sections: [
      {
        heading: "Bisiklet ve scooter takası",
        text: "Bisiklet takasında kadro ölçüsü, vites ve fren sistemi, lastiklerin durumu önemlidir. Elektrikli scooter takasında pil kapasitesini, menzili ve şarj cihazını birlikte kontrol edin.",
      },
      {
        heading: "Kamp ve fitness ekipmanı",
        text: "Sezonluk kullanılan çadır, uyku tulumu ya da evde kullanılmayan dambıl ve pilates seti, başka bir hobiye geçmek isteyenler için ideal takas ürünleridir.",
      },
    ],
  },
  "hobi-muzik-koleksiyon": {
    title: "Hobi, Müzik Aleti ve Koleksiyon Takas İlanları",
    h1: "Hobi, müzik ve koleksiyon takas ilanları",
    description:
      "Gitar, müzik aletleri, kitap, plak, figür, 3D yazıcı ve koleksiyon ürünleri takas ilanları. Hobi ürünlerini para ödemeden takas et.",
    intro:
      "Müzik aletleri, kitaplar, plaklar, figürler, maket ve koleksiyon ürünlerinde takasa açık ilanlar.",
    sections: [
      {
        heading: "Hobi ürünlerini takas et",
        text: "Bir hobiyi bırakıp yenisine başlarken eski ekipmanını takas etmek, yeni hobine para harcamadan başlamanın en kolay yolu. Gitar, klavye, fotoğraf ekipmanı ve 3D yazıcı gibi ürünler sık takas edilir.",
      },
      {
        heading: "Koleksiyon ürünlerinde güven",
        text: "Koleksiyon ürünlerinde orijinallik önemlidir. Seri numarası, kutu ve sertifika varsa ilana ekle; buluşmada ürünü detaylı inceleme fırsatı ver.",
      },
    ],
  },
};
