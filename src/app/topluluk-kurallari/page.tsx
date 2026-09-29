import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalNav from "@/components/LegalNav";
import LegalHeader from "@/components/LegalHeader";

export const metadata: Metadata = {
  title: "Topluluk Kuralları - Takasla",
  description: "Takasla topluluk kuralları, saygılı iletişim standartları, yasaklı ürünler ve güvenli ilan politikası.",
  alternates: {
    canonical: "/topluluk-kurallari",
  },
  keywords: ["takasla topluluk kuralları", "yasaklı ürünler", "güvenli takas rehberi"],
};

export default function ToplulukKurallariPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-gray-800 flex flex-col justify-between font-sans">
      <LegalHeader />

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 py-12 sm:py-16 w-full flex-grow">
        {/* Banner Card */}
        <div className="bg-[#151716] text-white rounded-3xl p-8 sm:p-12 mb-6 sm:mb-8 relative overflow-hidden shadow-xl border border-white/10">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="inline-block bg-[#00E676]/15 text-[#00E676] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Yasal Bilgilendirme
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Topluluk Kuralları
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                Son Güncelleme: 28 Eylül 2026
              </p>
            </div>
            <img
              src="/images/takasla-3d.png"
              alt="Takasla 3D"
              className="hidden md:block w-24 h-24 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex-shrink-0"
            />
          </div>
        </div>

        {/* Legal Navigation Bar */}
        <LegalNav currentPage="topluluk-kurallari" />

        {/* Content Details */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-4 text-gray-700 leading-relaxed mb-12">

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla, kullanıcıların güvenli ve saygılı bir ortamda ilan oluşturabilmesi, takas teklifleri gönderebilmesi ve diğer kullanıcılarla iletişim kurabilmesi amacıyla faaliyet gösteren bir platformdur.<br />Bu Topluluk Kuralları ve Yasaklı İlan Politikası, Takasla üzerinde paylaşılabilecek içeriklerin sınırlarını ve kullanıcıların uyması gereken temel kuralları belirler.<br />Takasla’yı kullanan herkes bu kurallara uymayı kabul eder.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              1. Temel Topluluk İlkeleri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla kullanılırken;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>diğer kullanıcılara saygılı davranılması,</li>
            <li>doğru ve yanıltıcı olmayan bilgi verilmesi,</li>
            <li>yalnızca hukuka uygun ürünlerin paylaşılması,</li>
            <li>diğer kullanıcıların güvenliğinin tehlikeye atılmaması,</li>
            <li>üçüncü kişilerin haklarına saygı gösterilmesi,</li>
            <li>platformun amacı dışında kullanılmaması</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            beklenir.<br />Takasla, platform güvenliğini ve topluluk düzenini korumak amacıyla kurallara aykırı içerikleri inceleyebilir, sınırlandırabilir veya kaldırabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              2. İlanlarda Doğru Bilgi Verme
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcılar oluşturdukları ilanlarda ürünün gerçek durumunu doğru şekilde belirtmelidir.<br />Aşağıdaki davranışlara izin verilmez:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Gerçekte sahip olunmayan ürün için ilan oluşturmak</li>
            <li>Başka bir ürüne ait fotoğraf kullanmak</li>
            <li>Ürünün durumunu bilinçli olarak yanlış göstermek</li>
            <li>Ürünün önemli kusurlarını bilerek gizlemek</li>
            <li>Yanıltıcı veya sahte açıklamalar kullanmak</li>
            <li>Kullanıcıları aldatmaya yönelik ilan oluşturmak</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            İlan görselleri mümkün olduğunca ilana konu gerçek ürünü göstermelidir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              3. Yasaklı Ürünler
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla üzerinden yürürlükteki mevzuata aykırı ürünlerin takasa sunulması yasaktır.<br />Bunlara örnek olarak:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Uyuşturucu ve yasa dışı maddeler</li>
            <li>Ruhsatsız veya hukuka aykırı silahlar ve mühimmat</li>
            <li>Patlayıcı maddeler</li>
            <li>Çalıntı veya hukuka aykırı şekilde elde edilmiş ürünler</li>
            <li>Sahte veya taklit ürünler</li>
            <li>Reçeteye tabi veya hukuken satışı sınırlandırılmış ilaçlar</li>
            <li>Hukuka aykırı tıbbi ürünler</li>
            <li>İnsan organı, doku veya benzeri biyolojik materyaller</li>
            <li>Nesli koruma altında olan canlılar veya bunlardan elde edilen hukuka aykırı ürünler</li>
            <li>Resmî belge, kimlik, ruhsat veya benzeri kişiye özel belgeler</li>
            <li>Yasa dışı erişim sağlayan hesap, yazılım, cihaz veya hizmetler</li>
            <li>Başkasına ait kişisel veya finansal bilgiler</li>
            <li>Hukuken ticareti veya devri yasaklanan diğer her türlü ürün</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            yer almaktadır.<br />Bu liste sınırlı değildir. Yürürlükteki mevzuat kapsamında takası, satışı veya devri yasaklanan bir ürün Takasla üzerinde de paylaşılmaz.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              4. Sınırlandırılmış veya Uygun Görülmeyen Ürünler
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla, hukuken tamamen yasak olmasa dahi kullanıcı güvenliği veya platformun yapısı nedeniyle belirli ürünlerin ilan edilmesine izin vermeyebilir.<br />Bu kapsamda örneğin:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Alkol ve tütün ürünleri</li>
            <li>Nikotin içeren ürünler</li>
            <li>Elektronik sigara ve benzeri ürünler</li>
            <li>Ateşli silah aksesuarları</li>
            <li>Kullanımı ciddi güvenlik riski doğurabilecek ürünler</li>
            <li>Yaş sınırlamasına tabi ürünler</li>
            <li>Canlı hayvan ticareti</li>
            <li>Sağlık açısından risk oluşturabilecek kullanılmış kişisel ürünler</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            moderasyon kapsamında sınırlandırılabilir veya kaldırılabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              5. Pornografik ve Cinsel İçerikler
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Pornografik, açık cinsel veya cinsel hizmet niteliğindeki içeriklere izin verilmez.<br />Aşağıdakiler yasaktır:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Pornografik görseller</li>
            <li>Cinsel hizmet teklifleri</li>
            <li>Cinsel içerikli ürün veya hizmetlerin uygunsuz şekilde pazarlanması</li>
            <li>Çocukların cinsel istismarını veya sömürüsünü içeren her türlü içerik</li>
            <li>Bir kişinin rızası dışında paylaşılan mahrem görüntüler</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Çocukların cinsel istismarı veya sömürüsüne ilişkin içerikler kesinlikle yasaktır ve gerekli durumlarda yetkili makamlara bildirilebilir. 
          </p>

          <p className="mb-4">
            <a
              href="https://developer.apple.com/app-store/review/guidelines/uk/?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A859] font-medium underline hover:text-[#00E676] transition-colors text-sm sm:text-base"
            >
              Apple Developer →
            </a>
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              6. Şiddet, Tehdit ve Taciz
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Aşağıdaki içerik ve davranışlara izin verilmez:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Fiziksel şiddet tehdidi</li>
            <li>Taciz</li>
            <li>Israrlı rahatsız etme</li>
            <li>Şantaj</li>
            <li>Zorbalık</li>
            <li>Bir kullanıcıyı korkutmaya veya sindirmeye yönelik mesajlar</li>
            <li>Şiddeti teşvik eden içerikler</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Bir kullanıcı kendisini tehdit altında hissediyorsa diğer kullanıcıyı engelleyebilir ve ilgili içerik veya hesabı Takasla’ya bildirebilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              7. Nefret ve Ayrımcılık
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Bir kişi veya gruba;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>ırk,</li>
            <li>etnik köken,</li>
            <li>milliyet,</li>
            <li>din,</li>
            <li>cinsiyet,</li>
            <li>cinsel yönelim,</li>
            <li>engellilik,</li>
            <li>benzeri korunan nitelikler</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            üzerinden aşağılayıcı, tehdit edici veya nefret teşvik eden içeriklerin paylaşılması yasaktır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              8. Dolandırıcılık ve Yanıltıcı Davranış
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla aşağıdaki davranışlara tolerans göstermez:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Sahte ürün ilanı oluşturmak</li>
            <li>Kullanıcıları para veya ürün göndermeye kandırmak</li>
            <li>Başka bir kişi veya kurum gibi davranmak</li>
            <li>Sahte hesap oluşturmak</li>
            <li>Takas işlemini manipüle etmek</li>
            <li>Bir kullanıcıyı platform dışındaki şüpheli ödeme yöntemlerine yönlendirmek</li>
            <li>Kimlik veya finansal bilgi istemek</li>
            <li>Phishing bağlantıları paylaşmak</li>
            <li>Kampanya, ücretsiz teklif veya TakasPara sistemini kötüye kullanmak</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Şüpheli hesap veya içerikler sınırlandırılabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              9. Spam ve Platformun Kötüye Kullanılması
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Aşağıdaki davranışlara izin verilmez:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Aynı ilanı gereksiz şekilde tekrar tekrar paylaşmak</li>
            <li>Kullanıcılara toplu ve istenmeyen mesaj göndermek</li>
            <li>Reklam veya tanıtım amacıyla kullanıcıları rahatsız etmek</li>
            <li>Bot veya otomatik sistemlerle izinsiz işlem yapmak</li>
            <li>Platformdan sistematik şekilde veri toplamak</li>
            <li>Güvenlik önlemlerini aşmaya çalışmak</li>
            <li>Sistemin normal çalışmasını bozacak davranışlarda bulunmak</li>
          </ul>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              10. Fikri Mülkiyet Hakları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcılar yalnızca paylaşmaya yetkili oldukları fotoğraf, metin ve diğer içerikleri kullanmalıdır.<br />Aşağıdaki içerikler kaldırılabilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Başkasına ait fotoğrafın izinsiz kullanılması</li>
            <li>Telif hakkını ihlal eden görseller</li>
            <li>Marka veya tasarım haklarını ihlal eden içerikler</li>
            <li>Taklit veya sahte ürün ilanları</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Hak sahibi olduğunu düşünen kişiler Takasla ile iletişime geçebilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              11. Kişisel Bilgilerin Korunması
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcıların başka kişilere ait;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>telefon numarası,</li>
            <li>açık adres,</li>
            <li>kimlik bilgileri,</li>
            <li>banka veya kart bilgileri,</li>
            <li>şifreler,</li>
            <li>özel yazışmalar,</li>
            <li>diğer kişisel bilgiler</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            gibi verileri ilgili kişinin rızası veya hukuki dayanak olmaksızın paylaşması yasaktır.<br />Hesap şifreleri veya doğrulama kodları hiçbir kullanıcıyla paylaşılmamalıdır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              12. Mesajlaşma Kuralları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla mesajlaşma sistemi öncelikle takas hakkında iletişim kurulması amacıyla kullanılmalıdır.<br />Mesajlaşma üzerinden;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>taciz,</li>
            <li>tehdit,</li>
            <li>spam,</li>
            <li>dolandırıcılık,</li>
            <li>pornografik içerik,</li>
            <li>hukuka aykırı faaliyet,</li>
            <li>kişisel bilgi elde etmeye yönelik girişimler</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            yasaktır.<br />Kullanıcılar rahatsız edici hesapları engelleyebilir ve gerekli durumlarda raporlayabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              13. Değerlendirme Kuralları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcı değerlendirmeleri gerçek bir takas deneyimine dayanmalıdır.<br />Aşağıdakilere izin verilmez:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Gerçekleşmemiş işlem hakkında sahte değerlendirme yapmak</li>
            <li>Değerlendirme sistemini manipüle etmek</li>
            <li>Bir kullanıcıyı tehdit etmek amacıyla değerlendirme kullanmak</li>
            <li>Hakaret veya kişisel saldırı içeren değerlendirme yazmak</li>
            <li>Birden fazla hesap kullanarak puan yükseltmek veya düşürmek</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla, kötüye kullanım içeren değerlendirmeleri kaldırabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              14. Kullanıcı Engelleme
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcılar kendileriyle iletişim kurmasını istemedikleri diğer kullanıcıları engelleyebilir.<br />Engelleme işlemi, uygulamanın teknik yapısına göre ilgili kullanıcının mesajlaşma veya diğer etkileşimlerinin sınırlandırılmasına neden olabilir.<br />Apple, kullanıcı tarafından oluşturulan içerik veya sosyal etkileşim içeren uygulamalarda kötüye kullanan kullanıcıların engellenebilmesini açıkça istemektedir. 
          </p>

          <p className="mb-4">
            <a
              href="https://developer.apple.com/app-store/review/guidelines/uk/?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A859] font-medium underline hover:text-[#00E676] transition-colors text-sm sm:text-base"
            >
              Apple Developer →
            </a>
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              15. İçerik ve Kullanıcı Raporlama
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcılar;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>ilanları,</li>
            <li>kullanıcı hesaplarını,</li>
            <li>mesajları veya mevcut raporlama özelliği bulunan diğer içerikleri</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            uygunsuz veya kurallara aykırı olduğunu düşündüklerinde Takasla’ya bildirebilir.<br />Raporlar moderasyon kapsamında incelenebilir.<br />Bir raporun gönderilmiş olması içeriğin otomatik olarak kaldırılacağı anlamına gelmez.<br />Apple, UGC uygulamalarında kullanıcıların uygunsuz içerikleri raporlayabilmesini ve geliştiricinin bu raporlara zamanında yanıt verebilmesini şart koşmaktadır. 
          </p>

          <p className="mb-4">
            <a
              href="https://developer.apple.com/app-store/review/guidelines/uk/?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A859] font-medium underline hover:text-[#00E676] transition-colors text-sm sm:text-base"
            >
              Apple Developer →
            </a>
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              16. Moderasyon ve İçerik Kaldırma
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla platform güvenliğinin sağlanması amacıyla;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>otomatik kontroller,</li>
            <li>manuel moderasyon,</li>
            <li>kullanıcı şikâyetleri,</li>
            <li>güvenlik incelemeleri</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            sonucunda platform kurallarına aykırı olduğunu değerlendirdiği içerikleri inceleyebilir.<br />Gerekli görülmesi halinde:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>ilan reddedilebilir,</li>
            <li>içerik kaldırılabilir,</li>
            <li>ilan pasife alınabilir,</li>
            <li>belirli özelliklere erişim sınırlandırılabilir,</li>
            <li>kullanıcıdan ek bilgi istenebilir,</li>
            <li>hesap geçici olarak kısıtlanabilir,</li>
            <li>ciddi veya tekrarlanan ihlallerde hesap kalıcı olarak kapatılabilir.</li>
          </ul>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              17. Acil veya Ağır İhlaller
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Aşağıdaki durumlarda Takasla daha hızlı güvenlik önlemleri uygulayabilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Dolandırıcılık</li>
            <li>Fiziksel tehdit</li>
            <li>Çocukların güvenliğini tehlikeye atan içerik</li>
            <li>Çalıntı ürün şüphesi</li>
            <li>Yasa dışı ürün veya faaliyet</li>
            <li>Kullanıcı hesabının ele geçirilmesi</li>
            <li>Platform güvenliğine yönelik saldırı</li>
            <li>Tekrarlanan ciddi kural ihlalleri</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kanunen gerekli olması halinde ilgili bilgiler yetkili mercilerle paylaşılabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              18. Kullanıcı Sorumluluğu
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcı, Takasla’ya yüklediği veya gönderdiği içeriklerin hukuka ve bu kurallara uygun olmasından sorumludur.<br />Kullanıcının içeriğinin Takasla tarafından yayınlanmış veya ilk aşamada moderasyon sisteminden geçmiş olması, söz konusu içeriğin hukuka uygun olduğunun Takasla tarafından garanti edildiği anlamına gelmez.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              19. Kuralların Güncellenmesi
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Platformun gelişmesi, yeni özelliklerin eklenmesi, kullanıcı güvenliği veya mevzuat değişiklikleri nedeniyle bu kurallar güncellenebilir.<br />Önemli değişiklikler uygun yöntemlerle kullanıcıya bildirilebilir.<br />Güncel kurallar Takasla uygulaması veya takaslapp.com üzerinden erişilebilir olacaktır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              20. İletişim
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Topluluk kuralları, yasaklı ilanlar veya bir güvenlik problemi hakkında bize ulaşabilirsiniz:
          </p>

          <div className="bg-[#FAF9F5] border border-gray-200/80 rounded-2xl p-5 my-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p className="font-medium text-gray-900 mb-1">İletişim Bilgileri:</p>
            <p>Takasla – Recep Aydoğan<br />Esenler Mah., Horasan Sok., Görgülü Center No:4/4<br />Selçuklu / Konya</p>
            <div className="mt-3 pt-3 border-t border-gray-200 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <p><strong>E-posta:</strong> <a href="mailto:destek@takasla.com" className="text-[#00A859] hover:underline font-medium">destek@takasla.com</a> / <a href="mailto:takaslappcom@gmail.com" className="text-[#00A859] hover:underline font-medium">takaslappcom@gmail.com</a></p>
              <p><strong>Telefon:</strong> <span className="text-gray-900 font-medium">0505 063 85 43</span></p>
              <p><strong>Web:</strong> <a href="https://takaslapp.com" className="text-[#00A859] hover:underline font-medium">takaslapp.com</a></p>
            </div>
          </div>
        </div>
      </main>

      {/* Main Footer */}
      <Footer outerBg="bg-[#FAF9F5]" className="pt-12" />
    </div>
  );
}
