import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalHeader from "@/components/LegalHeader";
import CorporateSidebar from "@/components/CorporateSidebar";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular (SSS) - Takasla",
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

export default function SssPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-gray-800 flex flex-col justify-between font-sans">
      {/* Top Header with Centered Logo */}
      <LegalHeader />

      {/* Breadcrumb Navigation */}
      <div className="border-b border-gray-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center gap-2 text-xs text-gray-500">
          <Link
            href="/"
            aria-label="Ana Sayfa"
            className="hover:text-black transition-colors flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </Link>
          <span className="text-gray-300">&gt;</span>
          <span>Kurumsal</span>
          <span className="text-gray-300">&gt;</span>
          <span className="text-gray-900 font-semibold">Sıkça Sorulan Sorular</span>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 py-10 sm:py-14 w-full flex-grow">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Corporate Sidebar */}
          <CorporateSidebar activeTab="sss" />

          {/* Right Main Content */}
          <div className="flex-1 space-y-10">
            {/* Title with Green Vertical Bar */}
            <div className="border-l-4 border-[#00A859] pl-4 py-0.5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Sıkça Sorulan Sorular
              </h1>
              <p className="text-gray-500 text-sm sm:text-base mt-2">
                Takasla kullanımı, TakasPara, teklif mekanizmaları ve güvenlik süreçlerine dair tüm detaylar.
              </p>
            </div>

            {/* Categorized FAQ Accordion List */}
            <div className="space-y-10">
              {FAQ_DATA.map((cat, idx) => (
                <section key={idx} className="space-y-4">
                  {/* Category Title with Dot Indicator */}
                  <div className="flex items-center gap-2.5 pb-2 border-b border-gray-200">
                    <span className="w-2 h-2 rounded-full bg-[#00A859]" />
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                      {cat.category}
                    </h2>
                  </div>

                  {/* Accordion Items */}
                  <div className="space-y-3">
                    {cat.items.map((item, qIdx) => (
                      <details
                        key={qIdx}
                        className="group bg-white rounded-2xl border border-gray-200/90 shadow-2xs overflow-hidden transition-all hover:border-[#00A859]/50"
                      >
                        <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer list-none font-semibold text-gray-900 select-none text-sm sm:text-base">
                          <span className="group-open:text-[#00A859] transition-colors">
                            {item.q}
                          </span>
                          <span className="w-7 h-7 rounded-full bg-gray-100 group-open:bg-[#00A859]/10 group-open:text-[#00A859] flex items-center justify-center flex-shrink-0 transition-transform group-open:rotate-180">
                            <svg
                              className="w-4 h-4 fill-none stroke-current"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-4 sm:px-5 pb-5 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100">
                          {item.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer outerBg="bg-[#FAF9F5]" />
    </div>
  );
}
