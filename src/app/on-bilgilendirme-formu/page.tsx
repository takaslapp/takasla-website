import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalNav from "@/components/LegalNav";
import LegalHeader from "@/components/LegalHeader";

export const metadata: Metadata = {
  title: "Ön Bilgilendirme Formu - Takasla",
  description:
    "Takasla mobil uygulaması ve platformu üzerinden sunulan ücretli dijital hizmetlerin satın alınmasına ilişkin Ön Bilgilendirme Formu.",
};

export default function OnBilgilendirmeFormuPage() {
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
                Ön Bilgilendirme Formu
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                Son Güncelleme: 29 Eylül 2026
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
        <LegalNav currentPage="on-bilgilendirme-formu" />

        {/* Content Details */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed mb-12">
          {/* Giriş */}
          <div className="space-y-3">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              İşbu Ön Bilgilendirme Formu, Takasla mobil uygulaması ve takaslapp.com üzerinden sunulan ücretli dijital hizmetlerin satın alınmasından önce kullanıcıyı bilgilendirmek amacıyla hazırlanmıştır. Mesafeli sözleşmelerde tüketicinin sözleşme kurulmadan önce hizmetin temel özellikleri, toplam bedel, sağlayıcı bilgileri, cayma hakkı ve başvuru yolları gibi konularda açık ve anlaşılır biçimde bilgilendirilmesi gerekir (
              <a
                href="https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/mesafeli-sozlesmeler-hakkinda-bilgilendirme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00A859] hover:underline font-medium"
              >
                Tüketici Tanıtım Portalı - Mesafeli Sözleşmeler Hakkında Bilgilendirme
              </a>
              ).
            </p>
          </div>

          {/* Section 1: Hizmet Sağlayıcı Bilgileri */}
          <section className="space-y-4 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              1. Hizmet Sağlayıcı Bilgileri
            </h2>
            <div className="bg-[#FAF9F5] border border-gray-200/80 rounded-2xl p-5 text-sm sm:text-base leading-relaxed text-gray-700 space-y-2">
              <p>
                <strong className="text-gray-900">Hizmet Sağlayıcı:</strong> Recep Aydoğan
              </p>
              <p>
                <strong className="text-gray-900">Uygulama / Hizmet Adı:</strong> Takasla
              </p>
              <p>
                <strong className="text-gray-900">Adres:</strong> Esenler Mah., Horasan Sok., Görgülü Center No:4/4, Selçuklu / Konya
              </p>
              <p>
                <strong className="text-gray-900">E-posta:</strong>{" "}
                <a
                  href="mailto:takaslappcom@gmail.com"
                  className="text-[#00A859] hover:underline font-medium"
                >
                  takaslappcom@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-gray-900">İnternet Sitesi:</strong>{" "}
                <a
                  href="https://takaslapp.com"
                  className="text-[#00A859] hover:underline font-medium"
                >
                  takaslapp.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 2: Hizmetin Temel Özellikleri */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              2. Hizmetin Temel Özellikleri
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla, kullanıcıların kullanmadıkları ürünler için ilan oluşturabildiği, diğer kullanıcıların ilanlarını keşfedebildiği, kendi ürünleriyle takas teklifi gönderebildiği ve uygulama içerisinden iletişim kurabildiği dijital bir platformdur.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla üzerinden sunulan ücretli hizmetler, uygulama içerisinde kullanılabilen dijital hakları ve TakasPara kullanımını kapsayabilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla, kullanıcıların takas ettiği fiziksel ürünlerin sahibi, satıcısı veya alıcısı değildir. Fiziksel ürünlerin durumu, doğruluğu, teslimi ve kullanıcılar arasındaki fiili takas süreci ilgili kullanıcıların sorumluluğundadır.
            </p>
          </section>

          {/* Section 3: TakasPara */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              3. TakasPara
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              TakasPara (“TP”), yalnızca Takasla içerisinde belirlenen hizmetlerde kullanılabilen uygulama içi dijital kullanım hakkıdır.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
              TakasPara:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
              <li>nakit para veya elektronik para değildir,</li>
              <li>uygulama dışında ödeme aracı olarak kullanılamaz,</li>
              <li>kanunen zorunlu hâller dışında nakde çevrilemez,</li>
              <li>satın alma ekranında belirtilen uygulama içi işlemlerde kullanılabilir.</li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-2">
              Kullanıcı, satın alma işlemini tamamlamadan önce elde edeceği TakasPara miktarını ve ödeyeceği toplam bedeli görebilir.
            </p>
          </section>

          {/* Section 4: Takas İşlemlerinde TakasPara Kullanımı */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              4. Takas İşlemlerinde TakasPara Kullanımı
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Ücretli bir takas teklifinde uygulanacak TakasPara bedeli, işlem gerçekleştirilmeden önce kullanıcıya gösterilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
              Takasla’nın mevcut işleyişinde:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
              <li>teklif gönderen kullanıcıdan ilgili takas teklifine ilişkin TakasPara işlem bedeli alınabilir,</li>
              <li>teklif kabul edildiğinde kabul eden kullanıcıdan da ilgili TakasPara işlem bedeli alınabilir,</li>
              <li>bekleyen teklif reddedildiğinde, gönderen tarafından iptal edildiğinde veya süresi dolduğunda uygulanacak iade kuralı Takasla sistemi kapsamında yürütülür,</li>
              <li>kabul edilmiş bir takas daha sonra iptal edilirse daha önce kullanılan TakasPara tutarları iade edilmez.</li>
            </ul>
          </section>

          {/* Section 5: Toplam Fiyat ve Ödeme */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              5. Toplam Fiyat ve Ödeme
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Satın alınacak dijital hizmet veya TakasPara paketinin toplam fiyatı, satın alma işlemi onaylanmadan önce kullanıcıya gösterilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Gösterilen fiyat; işlem sırasında geçerli olan uygulama mağazası fiyatlandırması, vergiler ve ilgili ödeme altyapısının kurallarına göre belirlenebilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Kullanıcı satın alma işlemini onayladığında, bunun bir ödeme yükümlülüğü doğurduğu kendisine açık şekilde gösterilmelidir. Bu bilgilendirmenin sözleşme kurulmadan önce yapılması mevzuatta açıkça öngörülmektedir (
              <a
                href="https://tuketici.ticaret.gov.tr/data/5e81982d13b876a1b04c7a42/2023-6502%20Say%C4%B1l%C4%B1%20T%C3%BCketicinin%20Korunmas%C4%B1%20Hakk%C4%B1nda%20Kanun.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00A859] hover:underline font-medium"
              >
                6502 Sayılı Tüketicinin Korunması Hakkında Kanun
              </a>
              ).
            </p>
          </section>

          {/* Section 6: Ödeme Yöntemi */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              6. Ödeme Yöntemi
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Ödemeler, Takasla’nın kullanıldığı platforma bağlı olarak ilgili uygulama mağazasının veya yetkilendirilmiş ödeme altyapısının sunduğu yöntemler aracılığıyla gerçekleştirilebilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Kredi kartı, banka kartı veya diğer ödeme araçlarına ilişkin bilgiler Takasla tarafından doğrudan işlenmeyebilir; ödeme işlemleri ilgili ödeme veya uygulama mağazası altyapısı üzerinden gerçekleştirilebilir.
            </p>
          </section>

          {/* Section 7: Hizmetin İfası */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              7. Hizmetin İfası
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Satın alma işlemi başarıyla tamamlandığında ilgili dijital hak veya TakasPara, teknik olarak mümkün olan en kısa sürede kullanıcının Takasla hesabına tanımlanır.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Dijital hizmet, kullanıcının satın aldığı hakkın hesabına tanımlanması veya ilgili özelliğin kullanıma açılmasıyla ifa edilmeye başlanır.
            </p>
          </section>

          {/* Section 8: Cayma Hakkı */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              8. Cayma Hakkı
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Mesafeli sözleşmelerde tüketiciye kural olarak 14 günlük cayma hakkı tanınmaktadır. Bununla birlikte, elektronik ortamda anında ifa edilen hizmetler veya tüketicinin açık talebiyle cayma süresi sona ermeden ifasına başlanan bazı dijital hizmetlerde cayma hakkına ilişkin istisnalar uygulanabilir (
              <a
                href="https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/mesafeli-sozlesmeler-hakkinda-bilgilendirme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00A859] hover:underline font-medium"
              >
                Mesafeli Sözleşmeler Bilgilendirme
              </a>
              ).
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Kullanıcı, satın aldığı dijital hakkı veya TakasPara’yı kullanmaya başlamadan önce ilgili cayma ve iade şartlarını incelemelidir.
            </p>
          </section>

          {/* Section 9: Cayma Talebinin İletilmesi */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              9. Cayma Talebinin İletilmesi
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Cayma hakkının mevcut olduğu durumlarda kullanıcı talebini aşağıdaki iletişim kanalından iletebilir:
            </p>
            <div className="bg-[#FAF9F5] border border-gray-200/80 rounded-2xl p-4 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-gray-900">E-posta:</strong>{" "}
                <a
                  href="mailto:takaslappcom@gmail.com"
                  className="text-[#00A859] hover:underline font-medium"
                >
                  takaslappcom@gmail.com
                </a>
              </p>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Uygulama mağazası üzerinden gerçekleştirilen satın alma işlemlerinde iade veya cayma talebi, ilgili mağazanın kendi süreçlerine de tabi olabilir.
            </p>
          </section>

          {/* Section 10: İade */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              10. İade
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              İade hakkının bulunduğu ve iade talebinin kabul edildiği durumlarda geri ödeme, satın alma işleminin gerçekleştirildiği yöntem ve ilgili ödeme altyapısının kuralları çerçevesinde gerçekleştirilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium text-gray-900">
              Yürürlükteki mevzuattan doğan zorunlu tüketici hakları saklıdır.
            </p>
          </section>

          {/* Section 11: Dijital Hakkın Kullanılmış Olması */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              11. Dijital Hakkın Kullanılmış Olması
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Satın alınan TakasPara veya diğer dijital hizmetlerin tamamen veya kısmen kullanılmış olması durumunda, hizmetin ifa edilmiş kısmına ilişkin iade hakkı mevzuat ve ilgili satın alma koşulları kapsamında sınırlanabilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Özellikle takas teklifinin kabul edilmesiyle birlikte ilgili TakasPara hizmetinin fiilen kullanılmış olması hâlinde, Takasla’nın uygulama içi işlem kuralları uygulanır.
            </p>
          </section>

          {/* Section 12: Şikâyet ve Başvuru */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              12. Şikâyet ve Başvuru
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Kullanıcılar satın alma veya hizmete ilişkin soru, talep ve şikâyetlerini aşağıdaki iletişim kanalına iletebilir:
            </p>
            <div className="bg-[#FAF9F5] border border-gray-200/80 rounded-2xl p-4 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-gray-900">E-posta:</strong>{" "}
                <a
                  href="mailto:takaslappcom@gmail.com"
                  className="text-[#00A859] hover:underline font-medium"
                >
                  takaslappcom@gmail.com
                </a>
              </p>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Tüketicilerin mevzuattan doğan Tüketici Hakem Heyeti ve Tüketici Mahkemesine başvuru hakları saklıdır.
            </p>
          </section>

          {/* Section 13: Ön Bilgilendirmenin Onayı */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              13. Ön Bilgilendirmenin Onayı
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
              Kullanıcı, satın alma işlemini tamamlamadan önce:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
              <li>hizmetin temel özellikleri,</li>
              <li>toplam fiyat,</li>
              <li>ödeme yöntemi,</li>
              <li>hizmetin ifası,</li>
              <li>cayma ve iade koşulları,</li>
              <li>hizmet sağlayıcı bilgileri</li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-1">
              hakkında bilgilendirildiğini kabul eder.
            </p>
            <p className="text-gray-900 text-sm sm:text-base leading-relaxed font-semibold pt-2 border-t border-gray-100">
              Bu form, Mesafeli Hizmet Sözleşmesinin ayrılmaz bir parçasıdır.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer outerBg="bg-[#FAF9F5]" />
    </div>
  );
}
