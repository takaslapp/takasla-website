import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalNav from "@/components/LegalNav";
import LegalHeader from "@/components/LegalHeader";

export const metadata: Metadata = {
  title: "Kullanım Koşulları ve Kullanıcı Sözleşmesi - Takasla",
  description: "Takasla platformu kullanım şartları, kullanıcı hak ve sorumlulukları ile sözleşme esasları.",
  alternates: {
    canonical: "/kullanim-kosullari",
  },
  keywords: ["takasla kullanım koşulları","kullanıcı sözleşmesi","takas kuralları"],
};

export default function KullanimKosullariPage() {
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
                Kullanım Koşulları ve Kullanıcı Sözleşmesi
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
        <LegalNav currentPage="kullanim-kosullari" />

        {/* Content Details */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-4 text-gray-700 leading-relaxed mb-12">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Bu Kullanım Koşulları / Üyelik ve Hizmet Sözleşmesi (“Sözleşme”), Takasla mobil uygulaması ve takaslapp.com internet sitesi üzerinden sunulan hizmetlerin kullanımına ilişkin koşulları düzenlemektedir.<br />Takasla’yı kullanarak veya Takasla üzerinde kullanıcı hesabı oluşturarak, işbu Sözleşme’de belirtilen koşulları kabul etmiş olursunuz.
          </p>

          <div className="bg-[#FAF9F5] border border-gray-200/80 rounded-2xl p-5 my-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p className="font-medium text-gray-900 mb-1">Takasla – Recep Aydoğan</p>
            <p>Esenler Mah., Horasan Sok., Görgülü Center No:4/4<br />Selçuklu / Konya</p>
            <div className="mt-3 pt-3 border-t border-gray-200 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <p><strong>E-posta:</strong> <a href="mailto:takaslappcom@gmail.com" className="text-[#00A859] hover:underline font-medium">takaslappcom@gmail.com</a></p>
              <p><strong>İnternet Sitesi:</strong> <a href="https://takaslapp.com" className="text-[#00A859] hover:underline font-medium">takaslapp.com</a></p>
            </div>
          </div>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              1. Takasla Nedir?
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla, kullanıcıların kullanmadıkları eşyalar için ilan oluşturabildiği, diğer kullanıcıların ilanlarını keşfedebildiği ve kendi ürünleriyle takas teklifi gönderebildiği dijital bir takas platformudur.
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Platform içerisinde kullanıcılar;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>ilan oluşturabilir,</li>
            <li>,
              </li>
            <li>ilanları inceleyebilir,</li>
            <li>,
              </li>
            <li>takas teklifi gönderebilir ve alabilir,</li>
            <li>,
              </li>
            <li>diğer kullanıcılarla mesajlaşabilir,</li>
            <li>,
              </li>
            <li>takas süreçlerini yönetebilir,</li>
            <li>,
              </li>
            <li>tamamlanan takaslar sonrasında değerlendirme yapabilir.</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>Takasla, aksi açıkça belirtilmediği sürece kullanıcıların ilanlarında yer alan fiziksel ürünlerin sahibi, satıcısı veya üreticisi değildir.
Kullanıcılar arasında gerçekleştirilecek fiziksel ürün değişimi, teslim şekli, buluşma yöntemi ve ürünlerin fiilî teslimi kullanıcıların kendi sorumluluğundadır.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>2. Üyelik ve Kullanıcı Hesabı</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla’nın belirli özelliklerinden yararlanabilmek için kullanıcı hesabı oluşturulması gerekir.</li>
            <li>,
            ),
            _buildParagraph(</li>
            <li>Kullanıcı;</li>
            <li>),
            _buildBulletList([
              </li>
            <li>kayıt sırasında doğru ve güncel bilgiler vermek,</li>
            <li>,
              </li>
            <li>hesabına ilişkin bilgileri güncel tutmak,</li>
            <li>,
              </li>
            <li>hesabının ve giriş bilgilerinin güvenliğini sağlamak,</li>
            <li>,
              </li>
            <li>hesabının yetkisiz kullanımını fark etmesi halinde gerekli güvenlik önlemlerini almak</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>ile sorumludur.
Her kullanıcı kendi hesabı üzerinden gerçekleştirilen işlemlerden sorumludur.
Başka bir kişinin kimliğini kullanarak hesap oluşturulması, başka bir kullanıcıyı taklit etmek veya yanıltıcı hesap oluşturmak yasaktır.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>3. Sosyal Giriş Yöntemleri</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla, üçüncü taraf kimlik doğrulama hizmetleri üzerinden giriş yapılmasına olanak sağlayabilir.
Sosyal giriş yöntemlerinin kullanılması halinde ilgili hizmet sağlayıcının kendi kullanım koşulları ve gizlilik hükümleri de uygulanabilir.
Takasla, bu hizmetlerde meydana gelebilecek ve kendi kontrol alanı dışında kalan kesinti veya değişikliklerden sorumlu tutulamaz.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>4. İlan Oluşturma</li>
            <li>),
            _buildParagraph(</li>
            <li>Kullanıcılar yalnızca;</li>
            <li>),
            _buildBulletList([
              </li>
            <li>sahibi oldukları,</li>
            <li>,
              </li>
            <li>takas etmeye yetkili oldukları,</li>
            <li>,
              </li>
            <li>hukuka uygun,</li>
            <li>,
              </li>
            <li>gerçek,</li>
            <li>,
              </li>
            <li>yanıltıcı olmayan</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>ürünler için ilan oluşturmalıdır.
İlan içerisinde kullanılan:</li>
            <li>),
            _buildBulletList([
              </li>
            <li>başlık,</li>
            <li>,
              </li>
            <li>açıklama,</li>
            <li>,
              </li>
            <li>ürün bilgileri,</li>
            <li>,
              </li>
            <li>fotoğraflar,</li>
            <li>,
              </li>
            <li>kategori bilgileri</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>ilan sahibinin sorumluluğundadır.
Kullanıcı, ilanında ürünün mevcut durumu ve önemli özellikleri hakkında yanıltıcı bilgi vermemeyi kabul eder.
Başka kişilere ait fotoğrafların, telif hakkıyla korunan içeriklerin veya üçüncü kişilerin haklarını ihlal eden materyallerin izinsiz kullanılması yasaktır.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>5. Yasaklı Ürün ve İçerikler</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla üzerinden hukuka, kamu düzenine veya platform kurallarına aykırı ürün veya içeriklerin paylaşılması yasaktır.
Yasaklanan veya sınırlandırılan ürün ve içeriklere ilişkin ayrıntılı hükümler ayrıca Topluluk Kuralları / Yasaklı İçerik ve İlan Politikası içerisinde düzenlenir.
Takasla;</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>hukuka aykırı,</li>
            <li>,
              </li>
            <li>yanıltıcı,</li>
            <li>,
              </li>
            <li>üçüncü kişilerin haklarını ihlal eden,</li>
            <li>,
              </li>
            <li>güvenlik riski oluşturan,</li>
            <li>,
              </li>
            <li>platform kurallarına aykırı</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>ilanları önceden bildirimde bulunmaksızın yayından kaldırabilir veya incelemeye alabilir.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>6. Takas Teklifleri</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Bir kullanıcı başka bir ilana kendi ürünlerinden biri veya birkaçıyla takas teklifi gönderebilir.
Takas teklifi;</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>kabul edilebilir,</li>
            <li>,
              </li>
            <li>reddedilebilir,</li>
            <li>,
              </li>
            <li>iptal edilebilir,</li>
            <li>,
              </li>
            <li>belirlenen koşullarda sona erebilir.</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>Teklifin gönderilmiş olması tek başına fiziksel ürün değişiminin tamamlandığı anlamına gelmez.
Tarafların ürünlerin durumu, teslim şekli, buluşma noktası ve gerekli gördükleri diğer hususları takas tamamlanmadan önce kendi aralarında netleştirmeleri önerilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>7. Takasın Tamamlanması</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla içerisindeki “takas tamamlandı” veya benzeri onaylar, platform üzerindeki işlem durumunun kayıt altına alınmasını sağlar.
Kullanıcılar fiziksel takas işleminin gerçekten gerçekleştiğinden emin olmadan tamamlanma onayı vermemelidir.
Takasın iki tarafça tamamlanmış olarak işaretlenmesinden sonra ilgili ilanlar platform üzerinde tamamlanmış/pasif duruma getirilebilir.
Takasla, kullanıcılar arasında fiziksel olarak teslim edilen ürünlerin durumunu bizzat denetlemez.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>8. Güvenli Takas</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Kullanıcıların fiziksel takas öncesinde ürünü incelemesi ve gerekli gördüğü kontrolleri yapması kendi sorumluluğundadır.
Kullanıcıların;</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>ürünün ilan açıklamasıyla uyumunu kontrol etmesi,</li>
            <li>,
              </li>
            <li>mümkün olduğunda güvenli ve kamusal alanlarda buluşması,</li>
            <li>,
              </li>
            <li>şüpheli davranışlarda takası gerçekleştirmemesi,</li>
            <li>,
              </li>
            <li>gerektiğinde kullanıcıyı veya ilanı raporlaması</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>önerilir.
Daha ayrıntılı güvenlik önerileri uygulamadaki Güvenli Takas Rehberi bölümünde sunulabilir.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>9. Mesajlaşma</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla, kullanıcıların takas hakkında iletişim kurabilmesi amacıyla uygulama içi mesajlaşma özelliği sunar.
Mesajlaşma sistemi;</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>tehdit,</li>
            <li>,
              </li>
            <li>taciz,</li>
            <li>,
              </li>
            <li>hakaret,</li>
            <li>,
              </li>
            <li>dolandırıcılık,</li>
            <li>,
              </li>
            <li>spam,</li>
            <li>,
              </li>
            <li>yasa dışı faaliyet,</li>
            <li>,
              </li>
            <li>üçüncü kişilerin kişisel bilgilerinin hukuka aykırı paylaşımı</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>amacıyla kullanılamaz.
Takasla, şikâyet veya güvenlik incelemesi gereken durumlarda ilgili kayıtları yürürlükteki mevzuat ve Gizlilik Politikası çerçevesinde değerlendirebilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>10. TakasPara ve Teklif İşlem Bedelleri</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla içerisinde takas tekliflerinin iletilmesi ve platform özelliklerinin kullanılabilmesi amacıyla TakasPara sistemi kullanılır.
TakasPara’ya ilişkin temel kurallar şunlardır:</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>Normal takas teklifi oluşturulduğunda gönderen kullanıcının bakiyesinden 10 TakasPara (TP) güvence/işlem bedeli düşülür.</li>
            <li>,
              </li>
            <li>Teklif kabul edilmeden önce reddedilir, gönderen tarafından iptal edilir veya süresi dolarsa rezerve edilen 10 TP gönderenin hesabına otomatik olarak iade edilir.</li>
            <li>,
              </li>
            <li>Teklif karşı tarafça kabul edildiğinde, takas sürecinin başlatılması için karşı tarafın hesabından da 10 TP işlem bedeli tahsil edilir.</li>
            <li>,
              </li>
            <li>Teklif her iki tarafça kabul edildikten sonra takas süreci sonradan taraflarca iptal edilse dahi tahsil edilen 10 TP işlem bedelleri iade edilmez.</li>
            <li>,
              </li>
            <li>TakasPara nakit para, banka mevduatı veya elektronik para niteliğinde değildir; nakde çevrilemez veya platform dışına transfer edilemez.</li>
            <li>,
            ]),

            _buildSectionTitle(</li>
            <li>11. İlk Ücretsiz Takas Teklifi Hakkı</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla, yeni kayıt olan kullanıcılara platformu deneyimlemeleri amacıyla ilk takas tekliflerini ücretsiz oluşturma hakkı tanımlayabilir.</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>İlk ücretsiz teklif hakkına sahip kullanıcı, gönderdiği ilk takas teklifinde 10 TP ödemez.</li>
            <li>,
              </li>
            <li>Ücretsiz teklif hakkı, teklifin sisteme başarıyla iletildiği anda kullanılmış sayılır.</li>
            <li>,
              </li>
            <li>İlk ücretsiz teklifin karşı tarafça reddedilmesi, gönderen tarafından iptal edilmesi veya zaman aşımına uğraması halinde ücretsiz kullanım hakkı yeniden tanımlanmaz.</li>
            <li>,
              </li>
            <li>İlk ücretsiz teklif hakkı kullanılarak gönderilen bir teklif karşı tarafça kabul edilirse, kabul eden kullanıcının henüz kullanılmamış ilk ücretsiz teklif hakkı da bu işlem kapsamında kullanılmış sayılır. Kabul eden kullanıcının böyle bir hakkı bulunmuyorsa normal 10 TP işlem bedeli uygulanır.</li>
            <li>,
            ]),

            _buildSectionTitle(</li>
            <li>12. Uygulama İçi Satın Almalar ve Ödeme</li>
            <li>),
            _buildParagraph(
              </li>
            <li>TakasPara paketleri, Apple App Store uygulama içi satın alma sistemi (StoreKit) üzerinden satın alınabilir.
Ödeme ve faturalandırma işlemleri Apple tarafından gerçekleştirilir.
Takasla;</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>kredi kartı numarası,</li>
            <li>,
              </li>
            <li>banka kartı numarası,</li>
            <li>,
              </li>
            <li>kart son kullanma tarihi veya güvenlik kodu (CVV)</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>gibi hassas finansal ödeme verilerini doğrudan görmez veya saklamaz.
Satın alma işlemlerinin geçerliliği uygulama içi satın alma doğrulama altyapısı üzerinden teyit edilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>13. Takasla’nın Kullanıcılar Arasındaki İşlemlerdeki Rolü</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla, kullanıcıların birbirlerini ve takasa konu ilanları bulabilmesini sağlayan dijital araçlar sunar.
Takasla;</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>ürünün fiziksel sahibi değildir,</li>
            <li>,
              </li>
            <li>ürünlerin üreticisi değildir,</li>
            <li>,
              </li>
            <li>ürünlerin kalite veya ayıpsızlığını garanti etmez,</li>
            <li>,
              </li>
            <li>kullanıcı tarafından verilen ilan bilgilerinin doğruluğunu mutlak olarak garanti etmez,</li>
            <li>,
              </li>
            <li>fiziksel teslimatı gerçekleştirmez.</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>Bu hüküm, Takasla’nın yürürlükteki mevzuattan kaynaklanan ve sözleşmeyle kaldırılamayacak zorunlu sorumluluklarını ortadan kaldırmaz.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>14. Kullanıcının Sorumluluğu</li>
            <li>),
            _buildParagraph(</li>
            <li>Kullanıcı;</li>
            <li>),
            _buildBulletList([
              </li>
            <li>yayınladığı ilanlardan,</li>
            <li>,
              </li>
            <li>gönderdiği mesajlardan,</li>
            <li>,
              </li>
            <li>yaptığı takas tekliflerinden,</li>
            <li>,
              </li>
            <li>diğer kullanıcılara sağladığı bilgilerden,</li>
            <li>,
              </li>
            <li>fiziksel takas sırasında gerçekleştirdiği işlemlerden</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>sorumludur.
Kullanıcı, Takasla’yı yürürlükteki mevzuata ve işbu Sözleşme’ye uygun şekilde kullanmayı kabul eder.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>15. Dolandırıcılık ve Kötüye Kullanım</li>
            <li>),
            _buildParagraph(</li>
            <li>Aşağıdaki davranışlar yasaktır:</li>
            <li>),
            _buildBulletList([
              </li>
            <li>Gerçekte sahip olunmayan ürün için ilan oluşturmak</li>
            <li>,
              </li>
            <li>Başka bir kullanıcının hesabını ele geçirmek</li>
            <li>,
              </li>
            <li>Sahte veya yanıltıcı ilan oluşturmak</li>
            <li>,
              </li>
            <li>Kullanıcıları aldatmaya yönelik işlem yapmak</li>
            <li>,
              </li>
            <li>Takas sistemini veya TakasPara mekanizmasını manipüle etmek</li>
            <li>,
              </li>
            <li>Birden fazla hesap kullanarak kampanya veya ücretsiz haklardan kötüye yararlanmak</li>
            <li>,
              </li>
            <li>Uygulamanın güvenlik önlemlerini aşmaya çalışmak</li>
            <li>,
              </li>
            <li>Otomatik sistemlerle izinsiz veri toplamak</li>
            <li>,
              </li>
            <li>Platformun işleyişini bozacak faaliyetlerde bulunmak</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>Tespit edilen kötüye kullanım durumlarında Takasla gerekli güvenlik önlemlerini alabilir.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>16. İçerik Moderasyonu</li>
            <li>),
            _buildParagraph(</li>
            <li>Takasla platform güvenliğinin sağlanması amacıyla;</li>
            <li>),
            _buildBulletList([
              </li>
            <li>ilanları,</li>
            <li>,
              </li>
            <li>kullanıcı hesaplarını,</li>
            <li>,
              </li>
            <li>şikâyetleri,</li>
            <li>,
              </li>
            <li>değerlendirmeleri</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>inceleyebilir.
Kurallara aykırı olduğu değerlendirilen içerikler reddedilebilir, görünürlüğü sınırlandırılabilir veya kaldırılabilir.
Apple, kullanıcı tarafından oluşturulan içerik barındıran uygulamalarda uygunsuz içeriklerin filtrelenebilmesini, raporlama mekanizması, kullanıcı engelleme özelliği ve ulaşılabilir iletişim bilgisinin bulunmasını istemektedir. Takasla’nın moderasyon sistemi de bu yapı doğrultusunda çalışır. </li>
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
            <li>17. Raporlama ve Kullanıcı Engelleme</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Kullanıcılar platform kurallarına aykırı olduğunu düşündükleri kullanıcıları veya içerikleri raporlayabilir.
Kullanıcılar gerektiğinde diğer kullanıcıları engelleyebilir.
Takasla, iletilen raporları inceleyerek içeriğin kaldırılması, hesabın sınırlandırılması veya gerekli diğer önlemlerin uygulanmasına karar verebilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>18. Hesabın Askıya Alınması veya Kapatılması</li>
            <li>),
            _buildParagraph(</li>
            <li>Aşağıdaki durumlarda kullanıcı hesabı geçici veya kalıcı olarak sınırlandırılabilir:</li>
            <li>),
            _buildBulletList([
              </li>
            <li>İşbu Sözleşme’nin ihlal edilmesi</li>
            <li>,
              </li>
            <li>Topluluk kurallarının ihlal edilmesi</li>
            <li>,
              </li>
            <li>Dolandırıcılık veya kötüye kullanım şüphesi</li>
            <li>,
              </li>
            <li>Güvenlik ihlali</li>
            <li>,
              </li>
            <li>Hukuka aykırı faaliyet</li>
            <li>,
              </li>
            <li>Diğer kullanıcıların güvenliğini tehlikeye atan davranışlar</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>Durumun niteliğine göre kullanıcıdan açıklama veya ek doğrulama talep edilebilir.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>19. Kullanıcının Hesabını Silmesi</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Kullanıcı, Takasla hesabını uygulama içerisindeki:
Ayarlar &gt; Hesabımı kalıcı olarak sil
bölümünden silebilir.
Hesap silme işlemi geri alınamaz.
Güvenlik amacıyla kullanıcıdan ek kimlik doğrulaması istenebilir.
Sosyal giriş yöntemi kullanılan hesaplarda ilgili hizmetle Takasla arasındaki bağlantının kaldırılması amacıyla yeniden doğrulama yapılabilir.
Apple da hesap oluşturulabilen uygulamalarda hesap silme işleminin uygulama içinden başlatılabilmesini ve Sign in with Apple kullanılan hesapların ilişkili tokenlarının revoke edilmesini istemektedir. </li>
            <li>,
            ),
            _buildLink(
              </li>
            <li>Apple Developer</li>
            <li>,
              </li>
            <li>https://developer.apple.com/support/offering-account-deletion-in-your-app?utm_source=chatgpt.com</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>20. Hesap Silme Sonrasında Veriler</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Hesap silindiğinde hesaba bağlı kişisel bilgiler, mesajlar, aktif ilanlar ve gerekli olmayan diğer hesap verileri Gizlilik Politikası ve KVKK Aydınlatma Metni doğrultusunda silinebilir.
Tamamlanmış işlemlere ait bazı kayıtlar;</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>işlem bütünlüğünün korunması,</li>
            <li>,
              </li>
            <li>değerlendirme sisteminin devamlılığı,</li>
            <li>,
              </li>
            <li>hukuki hakların korunması,</li>
            <li>,
              </li>
            <li>zorunlu yasal yükümlülüklerin yerine getirilmesi</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>amacıyla yalnızca bu işlemlerin ve platform kayıtlarının devamlılığının gerektirdiği ölçüde saklanabilir.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>21. Fikri Mülkiyet Hakları</li>
            <li>),
            _buildParagraph(</li>
            <li>Takasla’ya ait;</li>
            <li>),
            _buildBulletList([
              </li>
            <li>marka,</li>
            <li>,
              </li>
            <li>logo,</li>
            <li>,
              </li>
            <li>uygulama tasarımı,</li>
            <li>,
              </li>
            <li>yazılım,</li>
            <li>,
              </li>
            <li>arayüz,</li>
            <li>,
              </li>
            <li>grafik öğeleri,</li>
            <li>,
              </li>
            <li>özgün metin ve diğer platform içerikleri</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>ilgili fikri mülkiyet mevzuatı kapsamında korunabilir.
Takasla’nın önceden yazılı izni olmadan bu içeriklerin ticari amaçlarla kopyalanması, çoğaltılması veya yetkisiz biçimde kullanılması yasaktır.
Kullanıcılar yükledikleri içeriklerin üçüncü kişilerin haklarını ihlal etmemesinden sorumludur.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>22. Hizmetin Kullanılabilirliği</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla hizmetlerinin kesintisiz veya hatasız şekilde çalışacağı garanti edilmez.
Bakım, güncelleme, güvenlik çalışmaları, teknik arızalar veya Takasla’nın kontrolü dışındaki altyapı sorunları nedeniyle hizmet geçici olarak kullanılamayabilir.
Takasla, makul ölçüde hizmet sürekliliğini sağlamaya yönelik gerekli teknik önlemleri almaya çalışır.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>23. Üçüncü Taraf Hizmetleri</li>
            <li>),
            _buildParagraph(</li>
            <li>Takasla’nın çalışabilmesi için çeşitli;</li>
            <li>),
            _buildBulletList([
              </li>
            <li>barındırma,</li>
            <li>,
              </li>
            <li>kimlik doğrulama,</li>
            <li>,
              </li>
            <li>bildirim,</li>
            <li>,
              </li>
            <li>depolama,</li>
            <li>,
              </li>
            <li>uygulama mağazası,</li>
            <li>,
              </li>
            <li>satın alma doğrulama</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>hizmetlerinden yararlanılabilir.
Bu hizmetlerin kendi şartları ve gizlilik politikaları ayrıca uygulanabilir.
Takasla’nın doğrudan kontrolü dışında bulunan üçüncü taraf hizmetlerde meydana gelen kesintilerden doğan sorumluluk, yürürlükteki mevzuatın izin verdiği ölçüde sınırlandırılabilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>24. Sorumluluğun Sınırları</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla, kullanıcıların kendi aralarında gerçekleştirdiği fiziksel takaslara ilişkin olarak ürünlerin;</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>kalitesini,</li>
            <li>,
              </li>
            <li>gerçekliğini,</li>
            <li>,
              </li>
            <li>çalışır durumda olmasını,</li>
            <li>,
              </li>
            <li>ilan açıklamasıyla tamamen aynı olmasını</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>önceden denetleyemez.
Kullanıcıların fiziksel teslim öncesinde ürünü incelemesi kendi sorumluluğundadır.
Ancak işbu madde, yürürlükteki mevzuat gereği Takasla’ya yüklenen ve sözleşmeyle ortadan kaldırılamayacak sorumlulukların kaldırıldığı anlamına gelmez.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>25. Mücbir Sebep ve Kontrol Dışı Durumlar</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Doğal afet, savaş, toplumsal olay, geniş çaplı internet veya enerji kesintisi, siber saldırı, kamu otoritesi kararı veya Takasla’nın makul kontrolü dışındaki benzeri durumlarda hizmetlerde geçici kesinti veya değişiklik meydana gelebilir.
Bu tür durumlarda Takasla hizmeti yeniden sağlamak için makul çabayı gösterir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>26. Sözleşmenin Değiştirilmesi</li>
            <li>),
            _buildParagraph(</li>
            <li>Takasla;</li>
            <li>),
            _buildBulletList([
              </li>
            <li>yeni özelliklerin eklenmesi,</li>
            <li>,
              </li>
            <li>hizmet modelinin değişmesi,</li>
            <li>,
              </li>
            <li>güvenlik gereksinimleri,</li>
            <li>,
              </li>
            <li>mevzuat değişiklikleri</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>gibi nedenlerle işbu Sözleşme’yi güncelleyebilir.
Önemli değişiklikler olması halinde kullanıcılar uygun yöntemlerle bilgilendirilebilir.
Güncel sürüm uygulama veya takaslapp.com üzerinden erişilebilir olacaktır.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>27. Uygulanacak Hukuk ve Kullanıcı Hakları</li>
            <li>),
            _buildParagraph(
              </li>
            <li>İşbu Sözleşme Türkiye Cumhuriyeti hukukuna tabidir.
Kullanıcının tüketici sıfatına sahip olduğu ve tüketici mevzuatının uygulanmasının gerektiği durumlarda 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve ilgili zorunlu mevzuattan kaynaklanan hakları saklıdır.
Türkiye’de platformlar üzerinden tüketici ile satıcı/sağlayıcı arasında mesafeli sözleşme kurulmasına aracılık edilen durumlarda platformlara ayrıca ön bilgilendirme, talep/şikâyet iletim sistemi ve işlem kayıtlarının tutulması gibi yükümlülükler getirilebilmektedir. Takasla’nın kendi hizmetleri ve kullanıcılar arasındaki işlemler bakımından uygulanabilir zorunlu mevzuat hükümleri saklıdır. </li>
            <li>,
            ),
            _buildLink(
              </li>
            <li>Ticaret Bakanlığı</li>
            <li>,
              </li>
            <li>https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/mesafeli-sozlesmeler-hakkinda-bilgilendirme?utm_source=chatgpt.com</li>
            <li>,
            ),
            _buildParagraph(
              </li>
            <li>Kullanıcıların kanunen yetkili tüketici hakem heyetlerine, tüketici mahkemelerine ve diğer yetkili mercilere başvuru hakları saklıdır.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>28. Sözleşmenin Bütünlüğü</li>
            <li>),
            _buildParagraph(</li>
            <li>İşbu Sözleşme aşağıdaki belgelerle birlikte değerlendirilir:</li>
            <li>),
            _buildBulletList([
              </li>
            <li>Gizlilik Politikası</li>
            <li>,
              </li>
            <li>KVKK Aydınlatma Metni</li>
            <li>,
              </li>
            <li>Topluluk Kuralları / Yasaklı İçerik ve İlan Politikası</li>
            <li>,
              </li>
            <li>Hesap Silme ve Veri Silme Bilgilendirmesi</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>Bu belgeler Takasla’nın kullanımına ilişkin farklı konuları düzenler ve birbirini tamamlar.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>29. İletişim</li>
            <li>),
            _buildParagraph(</li>
            <li>İşbu Sözleşme veya Takasla hizmetleriyle ilgili sorularınız için:</li>
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
            <li>İnternet Sitesi: </li>
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
