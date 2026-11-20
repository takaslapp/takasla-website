import Link from "next/link";
import type { Metadata } from "next";
import InfoLayout from "@/components/info/InfoLayout";
import FaqSearch from "@/components/info/FaqSearch";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Takasla hakkında en çok merak edilen sorular; üyelik, ilan oluşturma, takas teklifleri, TakasPara kullanımı ve güvenlik süreçleri.",
  keywords: [
    "takasla sss",
    "takasla sıkça sorulan sorular",
    "takaspara nedir",
    "takas teklifi nasıl yapılır",
    "takasla güvenli mi",
  ],
  alternates: {
    canonical: "/sss",
  },
  openGraph: {
    title: "Sıkça Sorulan Sorular - Takasla",
    description:
      "Takasla platformu, TakasPara sistemi, takas teklifleri ve güvenlik hakkında merak ettiğiniz tüm soruların cevapları.",
    url: "https://takaslapp.com/sss",
    type: "website",
    locale: "tr_TR",
    siteName: "Takasla",
    images: [{ url: "/images/takasla-icon.jpg", width: 1024, height: 1024, alt: "Takasla" }],
  },
};

interface FaqCategory {
  category: string;
  items: { q: string; a: string }[];
}

const FAQ_DATA: FaqCategory[] = [
  {
    category: "Üyelik ve Hesap",
    items: [
      {
        q: "Takasla’ya nasıl üye olabilirim?",
        a: "Takasla’ya uygulama içerisindeki kayıt adımlarını takip ederek hesap oluşturabilirsin. Hesabını oluşturduktan sonra profilini tamamlayabilir, ilanlarını yayınlayabilir ve diğer kullanıcıların ürünlerini keşfetmeye başlayabilirsin.",
      },
      {
        q: "Hesap bilgilerimi sonradan değiştirebilir miyim?",
        a: "Profilinde düzenlenmesine izin verilen bilgileri uygulama içerisindeki profil ve ayarlar alanından güncelleyebilirsin.",
      },
      {
        q: "Hesabımı silebilir miyim?",
        a: "Evet. Hesap silme işlemini uygulama içerisindeki ilgili ayarlardan başlatabilirsin. Hesap silme işleminde kişisel verilerin ve hesabınla ilişkili içeriklerin işlenmesi, Takasla’nın Hesap ve Veri Silme Bilgilendirmesi ile yürürlükteki yasal yükümlülüklere göre gerçekleştirilir.",
      },
      {
        q: "Aynı hesabı farklı cihazlarda kullanabilir miyim?",
        a: "Hesabına desteklenen giriş yönteminle erişebilirsin. Hesap güvenliğin için giriş bilgilerini başka kişilerle paylaşmamanı öneririz.",
      },
    ],
  },
  {
    category: "İlanlar ve Ürünler",
    items: [
      {
        q: "Nasıl ilan oluşturabilirim?",
        a: "Uygulama içerisinden ilan oluşturma alanına girerek ürününün fotoğraflarını, başlığını, açıklamasını ve gerekli diğer bilgileri ekleyebilirsin. İlan, platform kurallarına uygun şekilde oluşturulduktan sonra yayınlanır.",
      },
      {
        q: "Hangi ürünleri ilan olarak paylaşabilirim?",
        a: "Yasal olarak sahip olduğun ve Takasla Topluluk Kuralları ile Yasaklı İlan Politikası’na uygun ürünleri paylaşabilirsin. Yasaklı, hukuka aykırı, yanıltıcı veya üçüncü kişilerin haklarını ihlal eden ürünler yayınlanamaz.",
      },
      {
        q: "İlanımı sonradan düzenleyebilir miyim?",
        a: "Evet. Aktif ilanlarında düzenlemeye açık alanları değiştirebilirsin. Yapılan bazı değişiklikler, güvenlik ve içerik kontrolü nedeniyle ilan durumunun yeniden değerlendirilmesini gerektirebilir.",
      },
      {
        q: "İlanımı kaldırabilir miyim?",
        a: "Uygun durumdaki kendi ilanlarını uygulama içerisinden kaldırabilir veya pasif hâle getirebilirsin. Devam eden bir takas süreci bulunan ilanlarda bazı işlemler sınırlandırılabilir.",
      },
      {
        q: "Takas tamamlandığında ilanıma ne olur?",
        a: "Takas başarıyla tamamlandığında, ilgili takasın konusu olan ilan sistem tarafından tamamlanmış/pasif duruma geçirilir ve yeni takas tekliflerine kapatılır.",
      },
      {
        q: "Bir ürünün gerçekten karşı tarafa ait olduğunu Takasla garanti ediyor mu?",
        a: "Hayır. İlanlar kullanıcılar tarafından oluşturulur. Ürünün sahipliği, fiziksel durumu, doğruluğu ve ilan bilgilerinin gerçeğe uygunluğu ilanı oluşturan kullanıcının sorumluluğundadır.",
      },
    ],
  },
  {
    category: "Takas Teklifleri",
    items: [
      {
        q: "Nasıl takas teklifi gönderebilirim?",
        a: "Beğendiğin bir ilanın detay sayfasından kendi uygun ürünlerinden bir veya birden fazlasını seçerek takas teklifi gönderebilirsin.",
      },
      {
        q: "Bir ilana birden fazla ürün teklif edebilir miyim?",
        a: "Evet. Aynı ilana karşı birden fazla ürününü aynı teklif grubu içerisinde sunabilirsin.",
      },
      {
        q: "Karşı taraf birden fazla ürün teklifimden bazılarını kabul edebilir mi?",
        a: "Evet. Örneğin üç ürün teklif ettiysen karşı taraf bunlardan iki tanesini seçerek takası kabul edebilir. Kabul edilen ürünler daha sonra tek bir aktif takas süreci olarak değerlendirilir.",
      },
      {
        q: "Takas teklifine ne kadar sürede yanıt verilmesi gerekir?",
        a: "Takas teklifleri 24 saat boyunca geçerlidir. Bu süre içerisinde kabul edilmeyen tekliflerin süresi dolar.",
      },
      {
        q: "Gönderdiğim takas teklifini iptal edebilir miyim?",
        a: "Teklif henüz kabul edilmemiş ve bekleyen durumdaysa iptal edebilirsin. Kabul edilmiş bir teklif artık aktif takas durumundadır ve farklı iptal kuralları uygulanır.",
      },
      {
        q: "Gelen takas teklifini reddedebilir miyim?",
        a: "Evet. Sana gönderilmiş ve henüz bekleyen durumdaki bir takas teklifini kabul edebilir veya reddedebilirsin.",
      },
    ],
  },
  {
    category: "TakasPara ve İşlem Bedelleri",
    items: [
      {
        q: "TakasPara nedir?",
        a: "TakasPara, Takasla içerisindeki belirli işlemlerde kullanılan uygulama içi dijital kullanım hakkıdır. Nakit para veya elektronik para değildir ve uygulama dışında ödeme aracı olarak kullanılamaz.",
      },
      {
        q: "İlk takas teklifim ücretli mi?",
        a: "Hayır. Hesabının ilk başarılı takas teklifi ücretsizdir. Bu ücretsiz teklif hakkı ilk başarılı teklif oluşturulduğunda kullanılmış sayılır ve tekrar kazanılmaz.",
      },
      {
        q: "Normal bir takas teklifinde kaç TakasPara kullanılır?",
        a: "Ücretli bir takas teklifinde teklif gönderen kullanıcıdan 10 TP işlem bedeli alınır.",
      },
      {
        q: "Teklif kabul edilirse karşı taraftan da TakasPara alınır mı?",
        a: "Evet. Teklif kabul edildiğinde, kabul eden kullanıcıdan da 10 TP işlem bedeli alınır.",
      },
      {
        q: "Bekleyen teklif reddedilirse TakasPara geri gelir mi?",
        a: "Evet. Bekleyen ücretli teklif reddedilirse, teklif gönderen kullanıcının ödediği 10 TP geri verilir.",
      },
      {
        q: "Bekleyen teklifimi kendim iptal edersem TakasPara geri gelir mi?",
        a: "Evet. Teklif henüz kabul edilmemişse ve gönderen kullanıcı tarafından iptal edilirse 10 TP geri verilir.",
      },
      {
        q: "Teklifin 24 saatlik süresi dolarsa ne olur?",
        a: "Bekleyen teklif süresi dolarsa teklif iptal edilir ve ücretli teklif için gönderenden alınmış olan 10 TP geri verilir.",
      },
      {
        q: "Teklif kabul edildikten sonra takas iptal edilirse TakasPara geri gelir mi?",
        a: "Hayır. Takas kabul edildikten sonra işlem bedelleri kullanılmış sayılır. Aktif takas daha sonra iptal edilse bile gönderenin veya kabul eden tarafın 10 TP’si iade edilmez.",
      },
      {
        q: "Tamamlanmış takasta TakasPara iadesi yapılır mı?",
        a: "Hayır. Tamamlanmış takaslarda kullanılan işlem bedelleri iade edilmez.",
      },
    ],
  },
  {
    category: "Aktif Takas ve Mesajlaşma",
    items: [
      {
        q: "Teklif kabul edilince ne olur?",
        a: "Teklif kabul edildiğinde takas Aktif Takas durumuna geçer. Taraflar uygulama içerisindeki sohbet üzerinden iletişim kurarak ürünlerin teslimi ve takasın gerçekleştirilmesi konusunda anlaşabilir.",
      },
      {
        q: "Birden fazla ürün kabul edildiyse aktif takas nasıl görünür?",
        a: "Aynı teklif grubundan birden fazla ürün kabul edilmişse bunlar tek aktif takas olarak değerlendirilir. Sonradan ürünlerden yalnızca birini ayrı şekilde iptal etme mantığı bulunmaz.",
      },
      {
        q: "Aktif takası iptal edebilir miyim?",
        a: "Evet. Aktif takas taraflardan biri tarafından iptal edilebilir. Grup takaslarında iptal işlemi kabul edilmiş grubun tamamını kapsar.",
      },
      {
        q: "Aktif takası iptal edersem ürünlerden sadece birini çıkarabilir miyim?",
        a: "Hayır. Kabul edilen ürünler artık aynı aktif takasın parçasıdır. Takas iptal edildiğinde kabul edilmiş grubun tamamı iptal edilir.",
      },
      {
        q: "Aktif takas iptal edilince sohbet silinir mi?",
        a: "Hayır. Takasın iptal edilmesi sohbet geçmişini otomatik olarak silmez. Takas durumu sonlandırılır ancak mevcut mesajlaşma geçmişi korunur.",
      },
      {
        q: "Takasla ürünlerin teslimini gerçekleştiriyor mu?",
        a: "Hayır. Fiziksel ürünlerin teslim yöntemi, yeri ve zamanı kullanıcılar tarafından belirlenir. Takasla, kullanıcılar arasında fiziksel teslimat hizmeti sunmaz.",
      },
    ],
  },
  {
    category: "Takasın Tamamlanması ve Geçmiş",
    items: [
      {
        q: "Takas ne zaman tamamlanmış sayılır?",
        a: "Aktif takasın tamamlanma süreci, uygulamadaki takas tamamlama akışı üzerinden yürütülür. Gerekli onaylar tamamlandığında takas sistemde tamamlanmış duruma geçer.",
      },
      {
        q: "Takas tamamlandığında ne olur?",
        a: "Takas tamamlandığında ilgili işlem Aktif Takas listesinden çıkar ve geçmişe taşınır. Takasın konusu olan ilgili ilan da tamamlanmış/pasif duruma getirilir.",
      },
      {
        q: "Eski takaslarımı görebilir miyim?",
        a: "Evet. Sonuçlanmış takaslar Takas Geçmişi alanında görüntülenebilir.",
      },
      {
        q: "Bir ilana karşı gönderdiğim çoklu teklif geçmişte nasıl görünür?",
        a: "Aynı teklif grubuna ait ürünler geçmişte de aynı takas grubu altında birlikte gösterilir. Örneğin bir ilana üç ürün teklif edildiğinde bu üç teklif aynı geçmiş kaydı içerisinde görüntülenir.",
      },
      {
        q: "Reddedilen ve iptal edilen ürünler aynı gruptaysa ne olur?",
        a: "Aynı teklif grubuna ait oldukları sürece geçmişte grup bütünlüğü korunur. Ürünlerin münferit sonuçları farklı olsa bile aynı orijinal takas grubunun parçaları olarak değerlendirilir.",
      },
      {
        q: "Tamamlanmış bir takası sonradan iptal edebilir miyim?",
        a: "Hayır. Tamamlanmış takaslar artık sonuçlanmış işlemlerdir ve aktif takas iptal akışına geri döndürülemez.",
      },
    ],
  },
  {
    category: "Güvenlik, Şikâyet ve Sorun Bildirimi",
    items: [
      {
        q: "Şüpheli bir kullanıcıyı veya ilanı bildirebilir miyim?",
        a: "Evet. Uygulamadaki mevcut bildirim/şikâyet araçlarını kullanarak uygunsuz ilanları, kullanıcıları veya yaşadığın sorunları Takasla’ya iletebilirsin.",
      },
      {
        q: "Dolandırıcılık şüphesi varsa ne yapmalıyım?",
        a: "Takas işlemine devam etmemeli, ilgili kullanıcı veya içeriği uygulama içerisinden bildirmeli ve gerekli gördüğün durumlarda ilgili resmi mercilere başvurmalısın.",
      },
      {
        q: "Takas sırasında ödeme yapmalı mıyım?",
        a: "Takasla’nın temel sistemi ürünlerin ürünlerle takas edilmesi üzerine kuruludur. Uygulama dışında gerçekleştirilen para transferleri veya kullanıcılar arasındaki harici ödeme anlaşmaları Takasla’nın takas sistemi kapsamında değildir.",
      },
      {
        q: "Ürünü teslim almadan önce nelere dikkat etmeliyim?",
        a: "Ürünü mümkün olduğunca teslim sırasında kontrol etmeni, ilan bilgileriyle karşılaştırmanı ve ürünün fiziksel durumundan emin olduktan sonra takası tamamlamanı öneririz.",
      },
      {
        q: "Başka bir kullanıcıyla kişisel bilgilerimi paylaşmalı mıyım?",
        a: "Takasın gerçekleştirilmesi için gerekli olmayan hassas kişisel bilgileri paylaşmamalısın. Şifre, doğrulama kodu, banka bilgileri ve benzeri güvenlik bilgileri hiçbir kullanıcıyla paylaşılmamalıdır.",
      },
      {
        q: "Takasla anlaşmazlıklarda taraf oluyor mu?",
        a: "Takasla kullanıcıların birbirini bulmasına ve takas sürecini uygulama üzerinden yönetmesine yardımcı olan bir platformdur. Kullanıcıların fiziksel ürünleri ve fiili teslim süreçleri kendi sorumluluklarındadır. Bununla birlikte platform kurallarını ihlal eden içerik veya kullanıcılar Takasla’ya bildirilebilir.",
      },
    ],
  },
  {
    category: "Ödemeler ve Satın Alma",
    items: [
      {
        q: "TakasPara nasıl satın alınır?",
        a: "Uygulama içerisinde sunulan TakasPara paketlerinden birini seçerek desteklenen uygulama içi satın alma sistemi üzerinden işlem gerçekleştirebilirsin.",
      },
      {
        q: "Satın aldığım TakasPara hesabıma gelmezse ne yapmalıyım?",
        a: "Ödeme işlemi tamamlandığı hâlde TakasPara bakiyene yansımadıysa Takasla destek kanalı üzerinden işlemi bildirerek inceleme talep edebilirsin.",
      },
      {
        q: "Yanlışlıkla satın alma yaptım. İade alabilir miyim?",
        a: "Uygulama içi satın alma iadeleri satın almanın gerçekleştirildiği platformun kuralları ve yürürlükteki tüketici mevzuatı kapsamında değerlendirilir. Detaylar için İptal / Cayma / İade Koşulları sayfasını inceleyebilirsin.",
      },
      {
        q: "TakasPara’yı nakde çevirebilir miyim?",
        a: "Hayır. TakasPara nakit para değildir ve nakit karşılığı çekilemez.",
      },
      {
        q: "TakasPara başka kullanıcıya gönderilebilir mi?",
        a: "TakasPara, Takasla içerisindeki belirlenen hizmetlerin kullanımı için oluşturulmuş dijital kullanım hakkıdır. Kullanıcılar arasında para transferi aracı olarak kullanılmaz.",
      },
      {
        q: "TakasPara bakiyemi nereden görebilirim?",
        a: "Mevcut TakasPara bakiyeni uygulama içerisindeki cüzdan/TakasPara alanından görüntüleyebilirsin.",
      },
    ],
  },
];

const TR_MAP: Record<string, string> = { ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u", â: "a", î: "i", û: "u" };
function anchor(s: string) {
  return s
    .toLocaleLowerCase("tr-TR")
    .replace(/[çğıöşüâîû]/g, (c) => TR_MAP[c] || c)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function SssPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: absoluteUrl("/sss"),
    mainEntity: FAQ_DATA.flatMap((c) =>
      c.items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
    ),
  };

  return (
    <InfoLayout
      path="/sss"
      title="Sıkça sorulan sorular"
      lead="Üyelik, ilanlar, takas teklifleri, TakasPara ve güvenlik hakkında en çok sorulan sorular. Cevabını bulamazsan bize yazabilirsin."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <FaqSearch targetId="sss-listesi" />

      <nav aria-label="Soru başlıkları" className="mt-5 max-w-3xl">
        <ul className="flex flex-wrap gap-2">
          {FAQ_DATA.map((c) => (
            <li key={c.category}>
              <a
                href={`#${anchor(c.category)}`}
                className="inline-flex h-8 items-center rounded-full border border-line px-3 text-sm text-muted hover:border-ink hover:text-ink"
              >
                {c.category}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div id="sss-listesi" className="mt-10 max-w-3xl space-y-12">
        {FAQ_DATA.map((cat) => (
          <section key={cat.category} data-faq-group aria-labelledby={anchor(cat.category)}>
            <h2 id={anchor(cat.category)} className="scroll-mt-24 text-lg font-semibold">
              {cat.category}
            </h2>
            <div className="mt-3 border-t border-line">
              {cat.items.map((item) => (
                <details key={item.q} data-faq className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 text-[15px] font-medium sm:text-base [&::-webkit-details-marker]:hidden">
                    <h3 className="font-medium">{item.q}</h3>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-muted transition-transform group-open:rotate-45"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </summary>
                  <p className="pb-5 pr-8 text-[15px] leading-relaxed text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 max-w-3xl border-t border-line pt-6 text-[15px]">
        <p className="font-medium">Sorunun cevabını bulamadın mı?</p>
        <p className="mt-1 text-muted">
          <Link href="/iletisim" className="text-link underline">
            İletişim sayfasından
          </Link>{" "}
          bize yaz ya da adım adım anlatım için{" "}
          <Link href="/nasil-calisir" className="text-link underline">
            Nasıl çalışır
          </Link>{" "}
          sayfasına göz at.
        </p>
      </div>
    </InfoLayout>
  );
}
