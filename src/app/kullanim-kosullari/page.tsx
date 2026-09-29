import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalNav from "@/components/LegalNav";

export const metadata: Metadata = {
  title: "Kullanım Koşulları - Takasla",
  description: "Takasla platformu kullanım koşulları, üyelik ve hizmet sözleşmesi.",
};

export default function KullanimKosullariPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-gray-800 flex flex-col justify-between font-sans">
      {/* Header */}
      <header className="w-full bg-[#151716] text-white py-5 px-6 sm:px-12 flex items-center justify-between border-b border-white/10 shadow-md">
        <Link href="/" className="flex items-center group">
          <img
            src="/images/takasla-yesil-logo.png"
            alt="Takasla"
            className="h-7 sm:h-8 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-xs sm:text-sm font-medium text-gray-300 hover:text-[#00E676] transition-colors"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/#nasil-calisir"
            className="text-xs sm:text-sm font-medium text-gray-300 hover:text-[#00E676] transition-colors"
          >
            Nasıl Çalışır?
          </Link>
          <Link
            href="/#sss"
            className="text-xs sm:text-sm font-medium text-gray-300 hover:text-[#00E676] transition-colors"
          >
            SSS
          </Link>
        </div>
      </header>

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
                Kullanım Koşulları
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
        <LegalNav currentPage="kullanim-kosullari" />

        {/* Content Details */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-4 text-gray-700 leading-relaxed mb-12">

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Bu Kullanım Koşulları / Üyelik ve Hizmet Sözleşmesi (“Sözleşme”), Takasla mobil uygulaması ve takaslapp.com internet sitesi üzerinden sunulan hizmetlerin kullanımına ilişkin koşulları düzenlemektedir.<br />Takasla’yı kullanarak veya Takasla üzerinde kullanıcı hesabı oluşturarak, işbu Sözleşme’de belirtilen koşulları kabul etmiş olursunuz.
          </p>

          <div className="bg-[#FAF9F5] border border-gray-200/80 rounded-2xl p-5 my-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p className="font-medium text-gray-900 mb-1">İletişim Bilgileri:</p>
            <p>Hizmet Sağlayıcı: Recep Aydoğan<br />Adres: Esenler Mah., Horasan Sok., Görgülü Center No:4/4, Selçuklu / Konya</p>
            <div className="mt-3 pt-3 border-t border-gray-200 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <p><strong>E-posta:</strong> <a href="mailto:destek@takasla.com" className="text-[#00A859] hover:underline font-medium">destek@takasla.com</a> / <a href="mailto:takaslappcom@gmail.com" className="text-[#00A859] hover:underline font-medium">takaslappcom@gmail.com</a></p>
              <p><strong>Telefon:</strong> <span className="text-gray-900 font-medium">0505 063 85 43</span></p>
              <p><strong>Web:</strong> <a href="https://takaslapp.com" className="text-[#00A859] hover:underline font-medium">takaslapp.com</a></p>
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
            <li>ilanları inceleyebilir,</li>
            <li>takas teklifi gönderebilir ve alabilir,</li>
            <li>diğer kullanıcılarla mesajlaşabilir,</li>
            <li>takas süreçlerini yönetebilir,</li>
            <li>tamamlanan takaslar sonrasında değerlendirme yapabilir.</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla, aksi açıkça belirtilmediği sürece kullanıcıların ilanlarında yer alan fiziksel ürünlerin sahibi, satıcısı veya üreticisi değildir.<br />Kullanıcılar arasında gerçekleştirilecek fiziksel ürün değişimi, teslim şekli, buluşma yöntemi ve ürünlerin fiilî teslimi kullanıcıların kendi sorumluluğundadır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              2. Üyelik ve Kullanıcı Hesabı
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla’nın belirli özelliklerinden yararlanabilmek için kullanıcı hesabı oluşturulması gerekir.
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcı;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>kayıt sırasında doğru ve güncel bilgiler vermek,</li>
            <li>hesabına ilişkin bilgileri güncel tutmak,</li>
            <li>hesabının ve giriş bilgilerinin güvenliğini sağlamak,</li>
            <li>hesabının yetkisiz kullanımını fark etmesi halinde gerekli güvenlik önlemlerini almak</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            ile sorumludur.<br />Her kullanıcı kendi hesabı üzerinden gerçekleştirilen işlemlerden sorumludur.<br />Başka bir kişinin kimliğini kullanarak hesap oluşturulması, başka bir kullanıcıyı taklit etmek veya yanıltıcı hesap oluşturmak yasaktır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              3. Sosyal Giriş Yöntemleri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla, üçüncü taraf kimlik doğrulama hizmetleri üzerinden giriş yapılmasına olanak sağlayabilir.<br />Sosyal giriş yöntemlerinin kullanılması halinde ilgili hizmet sağlayıcının kendi kullanım koşulları ve gizlilik hükümleri de uygulanabilir.<br />Takasla, bu hizmetlerde meydana gelebilecek ve kendi kontrol alanı dışında kalan kesinti veya değişikliklerden sorumlu tutulamaz.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              4. İlan Oluşturma
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcılar yalnızca;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>sahibi oldukları,</li>
            <li>takas etmeye yetkili oldukları,</li>
            <li>hukuka uygun,</li>
            <li>gerçek,</li>
            <li>yanıltıcı olmayan</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            ürünler için ilan oluşturmalıdır.<br />İlan içerisinde kullanılan:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>başlık,</li>
            <li>açıklama,</li>
            <li>ürün bilgileri,</li>
            <li>fotoğraflar,</li>
            <li>kategori bilgileri</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            ilan sahibinin sorumluluğundadır.<br />Kullanıcı, ilanında ürünün mevcut durumu ve önemli özellikleri hakkında yanıltıcı bilgi vermemeyi kabul eder.<br />Başka kişilere ait fotoğrafların, telif hakkıyla korunan içeriklerin veya üçüncü kişilerin haklarını ihlal eden materyallerin izinsiz kullanılması yasaktır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              5. Yasaklı Ürün ve İçerikler
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla üzerinden hukuka, kamu düzenine veya platform kurallarına aykırı ürün veya içeriklerin paylaşılması yasaktır.<br />Yasaklanan veya sınırlandırılan ürün ve içeriklere ilişkin ayrıntılı hükümler ayrıca Topluluk Kuralları / Yasaklı İçerik ve İlan Politikası içerisinde düzenlenir.<br />Takasla;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>hukuka aykırı,</li>
            <li>yanıltıcı,</li>
            <li>üçüncü kişilerin haklarını ihlal eden,</li>
            <li>güvenlik riski oluşturan,</li>
            <li>platform kurallarına aykırı</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            ilanları önceden bildirimde bulunmaksızın yayından kaldırabilir veya incelemeye alabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              6. Takas Teklifleri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Bir kullanıcı başka bir ilana kendi ürünlerinden biri veya birkaçıyla takas teklifi gönderebilir.<br />Takas teklifi;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>kabul edilebilir,</li>
            <li>reddedilebilir,</li>
            <li>iptal edilebilir,</li>
            <li>belirlenen koşullarda sona erebilir.</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Teklifin gönderilmiş olması tek başına fiziksel ürün değişiminin tamamlandığı anlamına gelmez.<br />Tarafların ürünlerin durumu, teslim şekli, buluşma noktası ve gerekli gördükleri diğer hususları takas tamamlanmadan önce kendi aralarında netleştirmeleri önerilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              7. Takasın Tamamlanması
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla içerisindeki “takas tamamlandı” veya benzeri onaylar, platform üzerindeki işlem durumunun kayıt altına alınmasını sağlar.<br />Kullanıcılar fiziksel takas işleminin gerçekten gerçekleştiğinden emin olmadan tamamlanma onayı vermemelidir.<br />Takasın iki tarafça tamamlanmış olarak işaretlenmesinden sonra ilgili ilanlar platform üzerinde tamamlanmış/pasif duruma getirilebilir.<br />Takasla, kullanıcılar arasında fiziksel olarak teslim edilen ürünlerin durumunu bizzat denetlemez.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              8. Güvenli Takas
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcıların fiziksel takas öncesinde ürünü incelemesi ve gerekli gördüğü kontrolleri yapması kendi sorumluluğundadır.<br />Kullanıcıların;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>ürünün ilan açıklamasıyla uyumunu kontrol etmesi,</li>
            <li>mümkün olduğunda güvenli ve kamusal alanlarda buluşması,</li>
            <li>şüpheli davranışlarda takası gerçekleştirmemesi,</li>
            <li>gerektiğinde kullanıcıyı veya ilanı raporlaması</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            önerilir.<br />Daha ayrıntılı güvenlik önerileri uygulamadaki Güvenli Takas Rehberi bölümünde sunulabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              9. Mesajlaşma
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla, kullanıcıların takas hakkında iletişim kurabilmesi amacıyla uygulama içi mesajlaşma özelliği sunar.<br />Mesajlaşma sistemi;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>tehdit,</li>
            <li>taciz,</li>
            <li>hakaret,</li>
            <li>dolandırıcılık,</li>
            <li>spam,</li>
            <li>yasa dışı faaliyet,</li>
            <li>üçüncü kişilerin kişisel bilgilerinin hukuka aykırı paylaşımı</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            amacıyla kullanılamaz.<br />Takasla, şikâyet veya güvenlik incelemesi gereken durumlarda ilgili kayıtları yürürlükteki mevzuat ve Gizlilik Politikası çerçevesinde değerlendirebilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              10. TakasPara
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla içerisinde belirli özelliklerin veya takas işlemlerinin kullanılabilmesi amacıyla TakasPara sistemi kullanılabilir.<br />TakasPara’nın;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>kullanım alanları,</li>
            <li>gerekli miktarı,</li>
            <li>işlem sırasında uygulanacak ücretler,</li>
            <li>varsa ücretsiz kullanım veya kampanya hakları</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            ilgili işlem gerçekleştirilmeden önce uygulama içerisinde kullanıcıya gösterilebilir.<br />Takasla, TakasPara kullanım şartlarında veya gerekli miktarlarda değişiklik yapabilir. Kullanıcı açısından ücret doğuran bir işlem söz konusu olduğunda güncel bilgi işlem öncesinde gösterilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              11. İlk Ücretsiz Takas Teklifi ve Kampanyalar
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla belirli kullanıcılara ilk takas teklifi veya başka işlemler için ücretsiz kullanım hakkı, promosyon veya kampanya sunabilir.<br />Bu hakların;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>kapsamı,</li>
            <li>kullanım süresi,</li>
            <li>kullanım koşulları,</li>
            <li>tekrar kullanılıp kullanılamayacağı</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            kampanyaya veya ilgili uygulama özelliğine göre değişebilir.<br />Ücretsiz hakların nakit karşılığı bulunmaz ve başka bir kullanıcıya devredilemez.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              12. Uygulama İçi Satın Almalar
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            TakasPara veya diğer dijital uygulama içi ürünlerin satın alınması, kullanılan cihazın uygulama mağazası üzerinden gerçekleştirilebilir.<br />Ödeme işlemleri ilgili uygulama mağazasının ödeme altyapısı üzerinden yürütülür.<br />Takasla;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>kredi kartı numarası,</li>
            <li>banka kartı numarası,</li>
            <li>kart güvenlik kodu</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            gibi ödeme bilgilerini doğrudan almaz veya saklamaz.<br />Uygulama mağazası üzerinden gerçekleştirilen satın almaların ödeme ve iade süreçlerinde ilgili uygulama mağazasının geçerli kuralları uygulanabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              13. Takasla’nın Kullanıcılar Arasındaki İşlemlerdeki Rolü
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla, kullanıcıların birbirlerini ve takasa konu ilanları bulabilmesini sağlayan dijital araçlar sunar.<br />Takasla;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>ürünün fiziksel sahibi değildir,</li>
            <li>ürünlerin üreticisi değildir,</li>
            <li>ürünlerin kalite veya ayıpsızlığını garanti etmez,</li>
            <li>kullanıcı tarafından verilen ilan bilgilerinin doğruluğunu mutlak olarak garanti etmez,</li>
            <li>fiziksel teslimatı gerçekleştirmez.</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Bu hüküm, Takasla’nın yürürlükteki mevzuattan kaynaklanan ve sözleşmeyle kaldırılamayacak zorunlu sorumluluklarını ortadan kaldırmaz.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              14. Kullanıcının Sorumluluğu
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcı;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>yayınladığı ilanlardan,</li>
            <li>gönderdiği mesajlardan,</li>
            <li>yaptığı takas tekliflerinden,</li>
            <li>diğer kullanıcılara sağladığı bilgilerden,</li>
            <li>fiziksel takas sırasında gerçekleştirdiği işlemlerden</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            sorumludur.<br />Kullanıcı, Takasla’yı yürürlükteki mevzuata ve işbu Sözleşme’ye uygun şekilde kullanmayı kabul eder.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              15. Dolandırıcılık ve Kötüye Kullanım
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Aşağıdaki davranışlar yasaktır:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Gerçekte sahip olunmayan ürün için ilan oluşturmak</li>
            <li>Başka bir kullanıcının hesabını ele geçirmek</li>
            <li>Sahte veya yanıltıcı ilan oluşturmak</li>
            <li>Kullanıcıları aldatmaya yönelik işlem yapmak</li>
            <li>Takas sistemini veya TakasPara mekanizmasını manipüle etmek</li>
            <li>Birden fazla hesap kullanarak kampanya veya ücretsiz haklardan kötüye yararlanmak</li>
            <li>Uygulamanın güvenlik önlemlerini aşmaya çalışmak</li>
            <li>Otomatik sistemlerle izinsiz veri toplamak</li>
            <li>Platformun işleyişini bozacak faaliyetlerde bulunmak</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Tespit edilen kötüye kullanım durumlarında Takasla gerekli güvenlik önlemlerini alabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              16. İçerik Moderasyonu
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla platform güvenliğinin sağlanması amacıyla;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>ilanları,</li>
            <li>kullanıcı hesaplarını,</li>
            <li>şikâyetleri,</li>
            <li>değerlendirmeleri</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            inceleyebilir.<br />Kurallara aykırı olduğu değerlendirilen içerikler reddedilebilir, görünürlüğü sınırlandırılabilir veya kaldırılabilir.<br />Apple, kullanıcı tarafından oluşturulan içerik barındıran uygulamalarda uygunsuz içeriklerin filtrelenebilmesini, raporlama mekanizması, kullanıcı engelleme özelliği ve ulaşılabilir iletişim bilgisinin bulunmasını istemektedir. Takasla’nın moderasyon sistemi de bu yapı doğrultusunda çalışır. 
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
              17. Raporlama ve Kullanıcı Engelleme
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcılar platform kurallarına aykırı olduğunu düşündükleri kullanıcıları veya içerikleri raporlayabilir.<br />Kullanıcılar gerektiğinde diğer kullanıcıları engelleyebilir.<br />Takasla, iletilen raporları inceleyerek içeriğin kaldırılması, hesabın sınırlandırılması veya gerekli diğer önlemlerin uygulanmasına karar verebilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              18. Hesabın Askıya Alınması veya Kapatılması
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Aşağıdaki durumlarda kullanıcı hesabı geçici veya kalıcı olarak sınırlandırılabilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>İşbu Sözleşme’nin ihlal edilmesi</li>
            <li>Topluluk kurallarının ihlal edilmesi</li>
            <li>Dolandırıcılık veya kötüye kullanım şüphesi</li>
            <li>Güvenlik ihlali</li>
            <li>Hukuka aykırı faaliyet</li>
            <li>Diğer kullanıcıların güvenliğini tehlikeye atan davranışlar</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Durumun niteliğine göre kullanıcıdan açıklama veya ek doğrulama talep edilebilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              19. Kullanıcının Hesabını Silmesi
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcı, Takasla hesabını uygulama içerisindeki:<br />Ayarlar &gt; Hesabımı kalıcı olarak sil<br />bölümünden silebilir.<br />Hesap silme işlemi geri alınamaz.<br />Güvenlik amacıyla kullanıcıdan ek kimlik doğrulaması istenebilir.<br />Sosyal giriş yöntemi kullanılan hesaplarda ilgili hizmetle Takasla arasındaki bağlantının kaldırılması amacıyla yeniden doğrulama yapılabilir.<br />Apple da hesap oluşturulabilen uygulamalarda hesap silme işleminin uygulama içinden başlatılabilmesini ve Sign in with Apple kullanılan hesapların ilişkili tokenlarının revoke edilmesini istemektedir. 
          </p>

          <p className="mb-4">
            <a
              href="https://developer.apple.com/support/offering-account-deletion-in-your-app?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A859] font-medium underline hover:text-[#00E676] transition-colors text-sm sm:text-base"
            >
              Apple Developer →
            </a>
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              20. Hesap Silme Sonrasında Veriler
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Hesap silindiğinde hesaba bağlı kişisel bilgiler, mesajlar, aktif ilanlar ve gerekli olmayan diğer hesap verileri Gizlilik Politikası ve KVKK Aydınlatma Metni doğrultusunda silinebilir.<br />Tamamlanmış işlemlere ait bazı kayıtlar;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>işlem bütünlüğünün korunması,</li>
            <li>değerlendirme sisteminin devamlılığı,</li>
            <li>hukuki hakların korunması,</li>
            <li>zorunlu yasal yükümlülüklerin yerine getirilmesi</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            amacıyla kullanıcı kimliğiyle doğrudan bağlantısı kaldırılarak saklanabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              21. Fikri Mülkiyet Hakları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla’ya ait;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>marka,</li>
            <li>logo,</li>
            <li>uygulama tasarımı,</li>
            <li>yazılım,</li>
            <li>arayüz,</li>
            <li>grafik öğeleri,</li>
            <li>özgün metin ve diğer platform içerikleri</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            ilgili fikri mülkiyet mevzuatı kapsamında korunabilir.<br />Takasla’nın önceden yazılı izni olmadan bu içeriklerin ticari amaçlarla kopyalanması, çoğaltılması veya yetkisiz biçimde kullanılması yasaktır.<br />Kullanıcılar yükledikleri içeriklerin üçüncü kişilerin haklarını ihlal etmemesinden sorumludur.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              22. Hizmetin Kullanılabilirliği
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla hizmetlerinin kesintisiz veya hatasız şekilde çalışacağı garanti edilmez.<br />Bakım, güncelleme, güvenlik çalışmaları, teknik arızalar veya Takasla’nın kontrolü dışındaki altyapı sorunları nedeniyle hizmet geçici olarak kullanılamayabilir.<br />Takasla, makul ölçüde hizmet sürekliliğini sağlamaya yönelik gerekli teknik önlemleri almaya çalışır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              23. Üçüncü Taraf Hizmetleri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla’nın çalışabilmesi için çeşitli;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>barındırma,</li>
            <li>kimlik doğrulama,</li>
            <li>bildirim,</li>
            <li>depolama,</li>
            <li>uygulama mağazası,</li>
            <li>satın alma doğrulama</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            hizmetlerinden yararlanılabilir.<br />Bu hizmetlerin kendi şartları ve gizlilik politikaları ayrıca uygulanabilir.<br />Takasla’nın doğrudan kontrolü dışında bulunan üçüncü taraf hizmetlerde meydana gelen kesintilerden doğan sorumluluk, yürürlükteki mevzuatın izin verdiği ölçüde sınırlandırılabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              24. Sorumluluğun Sınırları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla, kullanıcıların kendi aralarında gerçekleştirdiği fiziksel takaslara ilişkin olarak ürünlerin;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>kalitesini,</li>
            <li>gerçekliğini,</li>
            <li>çalışır durumda olmasını,</li>
            <li>ilan açıklamasıyla tamamen aynı olmasını</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            önceden denetleyemez.<br />Kullanıcıların fiziksel teslim öncesinde ürünü incelemesi kendi sorumluluğundadır.<br />Ancak işbu madde, yürürlükteki mevzuat gereği Takasla’ya yüklenen ve sözleşmeyle ortadan kaldırılamayacak sorumlulukların kaldırıldığı anlamına gelmez.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              25. Mücbir Sebep ve Kontrol Dışı Durumlar
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Doğal afet, savaş, toplumsal olay, geniş çaplı internet veya enerji kesintisi, siber saldırı, kamu otoritesi kararı veya Takasla’nın makul kontrolü dışındaki benzeri durumlarda hizmetlerde geçici kesinti veya değişiklik meydana gelebilir.<br />Bu tür durumlarda Takasla hizmeti yeniden sağlamak için makul çabayı gösterir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              26. Sözleşmenin Değiştirilmesi
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>yeni özelliklerin eklenmesi,</li>
            <li>hizmet modelinin değişmesi,</li>
            <li>güvenlik gereksinimleri,</li>
            <li>mevzuat değişiklikleri</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            gibi nedenlerle işbu Sözleşme’yi güncelleyebilir.<br />Önemli değişiklikler olması halinde kullanıcılar uygun yöntemlerle bilgilendirilebilir.<br />Güncel sürüm uygulama veya takaslapp.com üzerinden erişilebilir olacaktır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              27. Uygulanacak Hukuk ve Kullanıcı Hakları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            İşbu Sözleşme Türkiye Cumhuriyeti hukukuna tabidir.<br />Kullanıcının tüketici sıfatına sahip olduğu ve tüketici mevzuatının uygulanmasının gerektiği durumlarda 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve ilgili zorunlu mevzuattan kaynaklanan hakları saklıdır.<br />Türkiye’de platformlar üzerinden tüketici ile satıcı/sağlayıcı arasında mesafeli sözleşme kurulmasına aracılık edilen durumlarda platformlara ayrıca ön bilgilendirme, talep/şikâyet iletim sistemi ve işlem kayıtlarının tutulması gibi yükümlülükler getirilebilmektedir. Takasla’nın kendi hizmetleri ve kullanıcılar arasındaki işlemler bakımından uygulanabilir zorunlu mevzuat hükümleri saklıdır. 
          </p>

          <p className="mb-4">
            <a
              href="https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/mesafeli-sozlesmeler-hakkinda-bilgilendirme?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A859] font-medium underline hover:text-[#00E676] transition-colors text-sm sm:text-base"
            >
              Ticaret Bakanlığı →
            </a>
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcıların kanunen yetkili tüketici hakem heyetlerine, tüketici mahkemelerine ve diğer yetkili mercilere başvuru hakları saklıdır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              28. Sözleşmenin Bütünlüğü
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            İşbu Sözleşme aşağıdaki belgelerle birlikte değerlendirilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Gizlilik Politikası</li>
            <li>KVKK Aydınlatma Metni</li>
            <li>Topluluk Kuralları / Yasaklı İçerik ve İlan Politikası</li>
            <li>Hesap Silme ve Veri Silme Bilgilendirmesi</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Bu belgeler Takasla’nın kullanımına ilişkin farklı konuları düzenler ve birbirini tamamlar.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              29. İletişim
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            İşbu Sözleşme veya Takasla hizmetleriyle ilgili sorularınız için:
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
