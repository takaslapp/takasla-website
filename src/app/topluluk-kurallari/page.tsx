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
  keywords: ["takasla topluluk kuralları","yasaklı ürünler","güvenli takas rehberi"],
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
                Topluluk Kuralları ve Yasaklı İlan Politikası
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                Son Güncelleme: 9 Ekim 2026
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
            <li>,
              </li>
            <li>doğru ve yanıltıcı olmayan bilgi verilmesi,</li>
            <li>,
              </li>
            <li>yalnızca hukuka uygun ürünlerin paylaşılması,</li>
            <li>,
              </li>
            <li>diğer kullanıcıların güvenliğinin tehlikeye atılmaması,</li>
            <li>,
              </li>
            <li>üçüncü kişilerin haklarına saygı gösterilmesi,</li>
            <li>,
              </li>
            <li>platformun amacı dışında kullanılmaması</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>beklenir.
Takasla, platform güvenliğini ve topluluk düzenini korumak amacıyla kurallara aykırı içerikleri inceleyebilir, sınırlandırabilir veya kaldırabilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>2. İlanlarda Doğru Bilgi Verme</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Kullanıcılar oluşturdukları ilanlarda ürünün gerçek durumunu doğru şekilde belirtmelidir.
Aşağıdaki davranışlara izin verilmez:</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>Gerçekte sahip olunmayan ürün için ilan oluşturmak</li>
            <li>,
              </li>
            <li>Başka bir ürüne ait fotoğraf kullanmak</li>
            <li>,
              </li>
            <li>Ürünün durumunu bilinçli olarak yanlış göstermek</li>
            <li>,
              </li>
            <li>Ürünün önemli kusurlarını bilerek gizlemek</li>
            <li>,
              </li>
            <li>Yanıltıcı veya sahte açıklamalar kullanmak</li>
            <li>,
              </li>
            <li>Kullanıcıları aldatmaya yönelik ilan oluşturmak</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>İlan görselleri mümkün olduğunca ilana konu gerçek ürünü göstermelidir.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>3. Yasaklı Ürünler</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla üzerinden yürürlükteki mevzuata aykırı ürünlerin takasa sunulması yasaktır.
Bunlara örnek olarak:</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>Uyuşturucu ve yasa dışı maddeler</li>
            <li>,
              </li>
            <li>Ruhsatsız veya hukuka aykırı silahlar ve mühimmat</li>
            <li>,
              </li>
            <li>Patlayıcı maddeler</li>
            <li>,
              </li>
            <li>Çalıntı veya hukuka aykırı şekilde elde edilmiş ürünler</li>
            <li>,
              </li>
            <li>Sahte veya taklit ürünler</li>
            <li>,
              </li>
            <li>Reçeteye tabi veya hukuken satışı sınırlandırılmış ilaçlar</li>
            <li>,
              </li>
            <li>Hukuka aykırı tıbbi ürünler</li>
            <li>,
              </li>
            <li>İnsan organı, doku veya benzeri biyolojik materyaller</li>
            <li>,
              </li>
            <li>Nesli koruma altında olan canlılar veya bunlardan elde edilen hukuka aykırı ürünler</li>
            <li>,
              </li>
            <li>Resmî belge, kimlik, ruhsat veya benzeri kişiye özel belgeler</li>
            <li>,
              </li>
            <li>Yasa dışı erişim sağlayan hesap, yazılım, cihaz veya hizmetler</li>
            <li>,
              </li>
            <li>Başkasına ait kişisel veya finansal bilgiler</li>
            <li>,
              </li>
            <li>Hukuken ticareti veya devri yasaklanan diğer her türlü ürün</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>yer almaktadır.
Bu liste sınırlı değildir. Yürürlükteki mevzuat kapsamında takası, satışı veya devri yasaklanan bir ürün Takasla üzerinde de paylaşılmaz.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>4. Sınırlandırılmış veya Uygun Görülmeyen Ürünler</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla, hukuken tamamen yasak olmasa dahi kullanıcı güvenliği veya platformun yapısı nedeniyle belirli ürünlerin ilan edilmesine izin vermeyebilir.
Bu kapsamda örneğin:</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>Alkol ve tütün ürünleri</li>
            <li>,
              </li>
            <li>Nikotin içeren ürünler</li>
            <li>,
              </li>
            <li>Elektronik sigara ve benzeri ürünler</li>
            <li>,
              </li>
            <li>Ateşli silah aksesuarları</li>
            <li>,
              </li>
            <li>Kullanımı ciddi güvenlik riski doğurabilecek ürünler</li>
            <li>,
              </li>
            <li>Yaş sınırlamasına tabi ürünler</li>
            <li>,
              </li>
            <li>Canlı hayvan ticareti</li>
            <li>,
              </li>
            <li>Sağlık açısından risk oluşturabilecek kullanılmış kişisel ürünler</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>moderasyon kapsamında sınırlandırılabilir veya kaldırılabilir.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>5. Pornografik ve Cinsel İçerikler</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Pornografik, açık cinsel veya cinsel hizmet niteliğindeki içeriklere izin verilmez.
Aşağıdakiler yasaktır:</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>Pornografik görseller</li>
            <li>,
              </li>
            <li>Cinsel hizmet teklifleri</li>
            <li>,
              </li>
            <li>Cinsel içerikli ürün veya hizmetlerin uygunsuz şekilde pazarlanması</li>
            <li>,
              </li>
            <li>Çocukların cinsel istismarını veya sömürüsünü içeren her türlü içerik</li>
            <li>,
              </li>
            <li>Bir kişinin rızası dışında paylaşılan mahrem görüntüler</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>Çocukların cinsel istismarı veya sömürüsüne ilişkin içerikler kesinlikle yasaktır ve gerekli durumlarda yetkili makamlara bildirilebilir. </li>
            <li>,
            ),
            _buildLink(
              </li>
            <li>Apple Developer</li>
            <li>,
              </li>
            <li>https://developer.apple.com/app-store/review/guidelines/uk/?utm_source=chatgpt.com</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>6. Şiddet, Tehdit ve Taciz</li>
            <li>),
            _buildParagraph(</li>
            <li>Aşağıdaki içerik ve davranışlara izin verilmez:</li>
            <li>),
            _buildBulletList([
              </li>
            <li>Fiziksel şiddet tehdidi</li>
            <li>,
              </li>
            <li>Taciz</li>
            <li>,
              </li>
            <li>Israrlı rahatsız etme</li>
            <li>,
              </li>
            <li>Şantaj</li>
            <li>,
              </li>
            <li>Zorbalık</li>
            <li>,
              </li>
            <li>Bir kullanıcıyı korkutmaya veya sindirmeye yönelik mesajlar</li>
            <li>,
              </li>
            <li>Şiddeti teşvik eden içerikler</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>Bir kullanıcı kendisini tehdit altında hissediyorsa diğer kullanıcıyı engelleyebilir ve ilgili içerik veya hesabı Takasla’ya bildirebilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>7. Nefret ve Ayrımcılık</li>
            <li>),
            _buildParagraph(</li>
            <li>Bir kişi veya gruba;</li>
            <li>),
            _buildBulletList([
              </li>
            <li>ırk,</li>
            <li>,
              </li>
            <li>etnik köken,</li>
            <li>,
              </li>
            <li>milliyet,</li>
            <li>,
              </li>
            <li>din,</li>
            <li>,
              </li>
            <li>cinsiyet,</li>
            <li>,
              </li>
            <li>cinsel yönelim,</li>
            <li>,
              </li>
            <li>engellilik,</li>
            <li>,
              </li>
            <li>benzeri korunan nitelikler</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>üzerinden aşağılayıcı, tehdit edici veya nefret teşvik eden içeriklerin paylaşılması yasaktır.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>8. Dolandırıcılık ve Yanıltıcı Davranış</li>
            <li>),
            _buildParagraph(</li>
            <li>Takasla aşağıdaki davranışlara tolerans göstermez:</li>
            <li>),
            _buildBulletList([
              </li>
            <li>Sahte ürün ilanı oluşturmak</li>
            <li>,
              </li>
            <li>Kullanıcıları para veya ürün göndermeye kandırmak</li>
            <li>,
              </li>
            <li>Başka bir kişi veya kurum gibi davranmak</li>
            <li>,
              </li>
            <li>Sahte hesap oluşturmak</li>
            <li>,
              </li>
            <li>Takas işlemini manipüle etmek</li>
            <li>,
              </li>
            <li>Bir kullanıcıyı platform dışındaki şüpheli ödeme yöntemlerine yönlendirmek</li>
            <li>,
              </li>
            <li>Kimlik veya finansal bilgi istemek</li>
            <li>,
              </li>
            <li>Phishing bağlantıları paylaşmak</li>
            <li>,
              </li>
            <li>Kampanya, ücretsiz teklif veya TakasPara sistemini kötüye kullanmak</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>Şüpheli hesap veya içerikler sınırlandırılabilir.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>9. Spam ve Platformun Kötüye Kullanılması</li>
            <li>),
            _buildParagraph(</li>
            <li>Aşağıdaki davranışlara izin verilmez:</li>
            <li>),
            _buildBulletList([
              </li>
            <li>Aynı ilanı gereksiz şekilde tekrar tekrar paylaşmak</li>
            <li>,
              </li>
            <li>Kullanıcılara toplu ve istenmeyen mesaj göndermek</li>
            <li>,
              </li>
            <li>Reklam veya tanıtım amacıyla kullanıcıları rahatsız etmek</li>
            <li>,
              </li>
            <li>Bot veya otomatik sistemlerle izinsiz işlem yapmak</li>
            <li>,
              </li>
            <li>Platformdan sistematik şekilde veri toplamak</li>
            <li>,
              </li>
            <li>Güvenlik önlemlerini aşmaya çalışmak</li>
            <li>,
              </li>
            <li>Sistemin normal çalışmasını bozacak davranışlarda bulunmak</li>
            <li>,
            ]),

            _buildSectionTitle(</li>
            <li>10. Fikri Mülkiyet Hakları</li>
            <li>),
            _buildParagraph(</li>
            <li>Kullanıcılar yalnızca paylaşmaya yetkili oldukları fotoğraf, metin ve diğer içerikleri kullanmalıdır.
Aşağıdaki içerikler kaldırılabilir:</li>
            <li>),
            _buildBulletList([
              </li>
            <li>Başkasına ait fotoğrafın izinsiz kullanılması</li>
            <li>,
              </li>
            <li>Telif hakkını ihlal eden görseller</li>
            <li>,
              </li>
            <li>Marka veya tasarım haklarını ihlal eden içerikler</li>
            <li>,
              </li>
            <li>Taklit veya sahte ürün ilanları</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>Hak sahibi olduğunu düşünen kişiler Takasla ile iletişime geçebilir.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>11. Kişisel Bilgilerin Korunması</li>
            <li>),
            _buildParagraph(</li>
            <li>Kullanıcıların başka kişilere ait;</li>
            <li>),
            _buildBulletList([
              </li>
            <li>telefon numarası,</li>
            <li>,
              </li>
            <li>açık adres,</li>
            <li>,
              </li>
            <li>kimlik bilgileri,</li>
            <li>,
              </li>
            <li>banka veya kart bilgileri,</li>
            <li>,
              </li>
            <li>şifreler,</li>
            <li>,
              </li>
            <li>özel yazışmalar,</li>
            <li>,
              </li>
            <li>diğer kişisel bilgiler</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>gibi verileri ilgili kişinin rızası veya hukuki dayanak olmaksızın paylaşması yasaktır.
Hesap şifreleri veya doğrulama kodları hiçbir kullanıcıyla paylaşılmamalıdır.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>12. Mesajlaşma Kuralları</li>
            <li>),
            _buildParagraph(</li>
            <li>Takasla mesajlaşma sistemi öncelikle takas hakkında iletişim kurulması amacıyla kullanılmalıdır.
Mesajlaşma üzerinden;</li>
            <li>),
            _buildBulletList([
              </li>
            <li>taciz,</li>
            <li>,
              </li>
            <li>tehdit,</li>
            <li>,
              </li>
            <li>spam,</li>
            <li>,
              </li>
            <li>dolandırıcılık,</li>
            <li>,
              </li>
            <li>pornografik içerik,</li>
            <li>,
              </li>
            <li>hukuka aykırı faaliyet,</li>
            <li>,
              </li>
            <li>kişisel bilgi elde etmeye yönelik girişimler</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>yasaktır.
Kullanıcılar rahatsız edici hesapları engelleyebilir ve gerekli durumlarda raporlayabilir.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>13. Değerlendirme Kuralları</li>
            <li>),
            _buildParagraph(</li>
            <li>Kullanıcı değerlendirmeleri gerçek bir takas deneyimine dayanmalıdır.
Aşağıdakilere izin verilmez:</li>
            <li>),
            _buildBulletList([
              </li>
            <li>Gerçekleşmemiş işlem hakkında sahte değerlendirme yapmak</li>
            <li>,
              </li>
            <li>Değerlendirme sistemini manipüle etmek</li>
            <li>,
              </li>
            <li>Bir kullanıcıyı tehdit etmek amacıyla değerlendirme kullanmak</li>
            <li>,
              </li>
            <li>Hakaret veya kişisel saldırı içeren değerlendirme yazmak</li>
            <li>,
              </li>
            <li>Birden fazla hesap kullanarak puan yükseltmek veya düşürmek</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>Takasla, kötüye kullanım içeren değerlendirmeleri kaldırabilir.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>14. Kullanıcı Engelleme</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Kullanıcılar kendileriyle iletişim kurmasını istemedikleri diğer kullanıcıları engelleyebilir.
Engelleme işlemi, uygulamanın teknik yapısına göre ilgili kullanıcının mesajlaşma veya diğer etkileşimlerinin sınırlandırılmasına neden olabilir.
Apple, kullanıcı tarafından oluşturulan içerik veya sosyal etkileşim içeren uygulamalarda kötüye kullanan kullanıcıların engellenebilmesini açıkça istemektedir. </li>
            <li>,
            ),
            _buildLink(
              </li>
            <li>Apple Developer</li>
            <li>,
              </li>
            <li>https://developer.apple.com/app-store/review/guidelines/uk/?utm_source=chatgpt.com</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>15. İçerik ve Kullanıcı Raporlama</li>
            <li>),
            _buildParagraph(</li>
            <li>Kullanıcılar;</li>
            <li>),
            _buildBulletList([
              </li>
            <li>ilanları,</li>
            <li>,
              </li>
            <li>kullanıcı hesaplarını,</li>
            <li>,
              </li>
            <li>mesajları veya mevcut raporlama özelliği bulunan diğer içerikleri</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>uygunsuz veya kurallara aykırı olduğunu düşündüklerinde Takasla’ya bildirebilir.
Raporlar moderasyon kapsamında incelenebilir.
Bir raporun gönderilmiş olması içeriğin otomatik olarak kaldırılacağı anlamına gelmez.
Apple, UGC uygulamalarında kullanıcıların uygunsuz içerikleri raporlayabilmesini ve geliştiricinin bu raporlara zamanında yanıt verebilmesini şart koşmaktadır. </li>
            <li>,
            ),
            _buildLink(
              </li>
            <li>Apple Developer</li>
            <li>,
              </li>
            <li>https://developer.apple.com/app-store/review/guidelines/uk/?utm_source=chatgpt.com</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>16. Moderasyon ve İçerik Kaldırma</li>
            <li>),
            _buildParagraph(</li>
            <li>Takasla platform güvenliğinin sağlanması amacıyla;</li>
            <li>),
            _buildBulletList([
              </li>
            <li>otomatik kontroller,</li>
            <li>,
              </li>
            <li>manuel moderasyon,</li>
            <li>,
              </li>
            <li>kullanıcı şikâyetleri,</li>
            <li>,
              </li>
            <li>güvenlik incelemeleri</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>sonucunda platform kurallarına aykırı olduğunu değerlendirdiği içerikleri inceleyebilir.
Gerekli görülmesi halinde:</li>
            <li>),
            _buildBulletList([
              </li>
            <li>ilan reddedilebilir,</li>
            <li>,
              </li>
            <li>içerik kaldırılabilir,</li>
            <li>,
              </li>
            <li>ilan pasife alınabilir,</li>
            <li>,
              </li>
            <li>belirli özelliklere erişim sınırlandırılabilir,</li>
            <li>,
              </li>
            <li>kullanıcıdan ek bilgi istenebilir,</li>
            <li>,
              </li>
            <li>hesap geçici olarak kısıtlanabilir,</li>
            <li>,
              </li>
            <li>ciddi veya tekrarlanan ihlallerde hesap kalıcı olarak kapatılabilir.</li>
            <li>,
            ]),

            _buildSectionTitle(</li>
            <li>17. Acil veya Ağır İhlaller</li>
            <li>),
            _buildParagraph(</li>
            <li>Aşağıdaki durumlarda Takasla daha hızlı güvenlik önlemleri uygulayabilir:</li>
            <li>),
            _buildBulletList([
              </li>
            <li>Dolandırıcılık</li>
            <li>,
              </li>
            <li>Fiziksel tehdit</li>
            <li>,
              </li>
            <li>Çocukların güvenliğini tehlikeye atan içerik</li>
            <li>,
              </li>
            <li>Çalıntı ürün şüphesi</li>
            <li>,
              </li>
            <li>Yasa dışı ürün veya faaliyet</li>
            <li>,
              </li>
            <li>Kullanıcı hesabının ele geçirilmesi</li>
            <li>,
              </li>
            <li>Platform güvenliğine yönelik saldırı</li>
            <li>,
              </li>
            <li>Tekrarlanan ciddi kural ihlalleri</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>Kanunen gerekli olması halinde ilgili bilgiler yetkili mercilerle paylaşılabilir.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>18. Kullanıcı Sorumluluğu</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Kullanıcı, Takasla’ya yüklediği veya gönderdiği içeriklerin hukuka ve bu kurallara uygun olmasından sorumludur.
Kullanıcının içeriğinin Takasla tarafından yayınlanmış veya ilk aşamada moderasyon sisteminden geçmiş olması, söz konusu içeriğin hukuka uygun olduğunun Takasla tarafından garanti edildiği anlamına gelmez.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>19. Kuralların Güncellenmesi</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Platformun gelişmesi, yeni özelliklerin eklenmesi, kullanıcı güvenliği veya mevzuat değişiklikleri nedeniyle bu kurallar güncellenebilir.
Önemli değişiklikler uygun yöntemlerle kullanıcıya bildirilebilir.
Güncel kurallar Takasla uygulaması veya takaslapp.com üzerinden erişilebilir olacaktır.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>20. İletişim</li>
            <li>),
            _buildParagraph(</li>
            <li>Topluluk kuralları, yasaklı ilanlar veya bir güvenlik problemi hakkında bize ulaşabilirsiniz:</li>
            <li>),
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(16),
              margin: const EdgeInsets.only(top: 4, bottom: 24),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: const Color(0xFFE2E8F0)),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  SelectableText(
                    </li>
            <li>Takasla – Recep Aydoğan
Esenler Mah., Horasan Sok., Görgülü Center No:4/4
Selçuklu / Konya</li>
            <li>,
                    style: GoogleFonts.inter(
                      fontSize: 13.5,
                      color: const Color(0xFF475569),
                      height: 1.5,
                    ),
                  ),
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      Text(
                        </li>
            <li>E-posta: </li>
            <li>,
                        style: GoogleFonts.inter(
                          fontSize: 13.5,
                          fontWeight: FontWeight.w600,
                          color: const Color(0xFF475569),
                        ),
                      ),
                      GestureDetector(
                        onTap: () =&gt; _launchUrl(</li>
            <li>mailto:takaslappcom@gmail.com</li>
            <li>),
                        child: Text(
                          </li>
            <li>takaslappcom@gmail.com</li>
            <li>,
                          style: GoogleFonts.inter(
                            fontSize: 13.5,
                            fontWeight: FontWeight.w600,
                            color: const Color(0xFF2563EB),
                            decoration: TextDecoration.underline,
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 4),
                  Row(
                    children: [
                      Text(
                        </li>
            <li>Web: </li>
            <li>,
                        style: GoogleFonts.inter(
                          fontSize: 13.5,
                          fontWeight: FontWeight.w600,
                          color: const Color(0xFF475569),
                        ),
                      ),
                      GestureDetector(
                        onTap: () =&gt; _launchUrl(</li>
            <li>https://takaslapp.com</li>
            <li>),
                        child: Text(
                          </li>
            <li>takaslapp.com</li>
            <li>,
                          style: GoogleFonts.inter(
                            fontSize: 13.5,
                            fontWeight: FontWeight.w600,
                            color: const Color(0xFF2563EB),
                            decoration: TextDecoration.underline,
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(height: 40),
          </li>
          </ul>
        </div>
      </main>

      {/* Main Footer */}
      <Footer outerBg="bg-[#FAF9F5]" className="pt-12" />
    </div>
  );
}
