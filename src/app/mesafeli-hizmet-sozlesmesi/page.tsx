import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalNav from "@/components/LegalNav";
import LegalHeader from "@/components/LegalHeader";

export const metadata: Metadata = {
  title: "Mesafeli Hizmet Sözleşmesi - Takasla",
  description:
    "Takasla mobil uygulaması ve platformu üzerinden sunulan ücretli dijital hizmetler ve TakasPara kullanımına ilişkin Mesafeli Hizmet Sözleşmesi.",
};

export default function MesafeliHizmetSozlesmesiPage() {
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
                Mesafeli Hizmet Sözleşmesi
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
        <LegalNav currentPage="mesafeli-hizmet-sozlesmesi" />

        {/* Content Details */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed mb-12">
          {/* Section 1: Taraflar */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              1. Taraflar
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              İşbu Mesafeli Hizmet Sözleşmesi (“Sözleşme”), Takasla mobil uygulaması ve takaslapp.com internet sitesi üzerinden sunulan ücretli dijital hizmetlerden yararlanan kullanıcı (“Kullanıcı” veya “Tüketici”) ile aşağıdaki hizmet sağlayıcı arasında elektronik ortamda kurulmaktadır.
            </p>

            <div className="bg-[#FAF9F5] border border-gray-200/80 rounded-2xl p-5 text-sm sm:text-base leading-relaxed text-gray-700 space-y-2">
              <p>
                <strong className="text-gray-900">Hizmet Sağlayıcı:</strong> Recep Aydoğan
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
              <p>
                <strong className="text-gray-900">Hizmet / Uygulama Adı:</strong> Takasla
              </p>
            </div>
          </section>

          {/* Section 2: Sözleşmenin Konusu */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              2. Sözleşmenin Konusu
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Bu Sözleşmenin konusu, Kullanıcının Takasla üzerinden satın aldığı dijital hizmetlerin ve uygulama içi kullanım haklarının sunulmasına ilişkin tarafların hak ve yükümlülüklerinin belirlenmesidir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla; kullanıcıların ilan oluşturmasına, diğer kullanıcıların ilanlarını keşfetmesine, takas teklifi göndermesine, teklifleri değerlendirmesine ve uygulama içi mesajlaşma yoluyla iletişim kurmasına imkân sağlayan dijital bir platformdur.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla, kullanıcıların birbirleriyle takas ettikleri fiziksel ürünlerin satıcısı veya sahibi değildir. Kullanıcılar arasındaki takasın konusu olan ürünler doğrudan ilgili kullanıcıların sorumluluğundadır.
            </p>
          </section>

          {/* Section 3: Ücretli Hizmetler ve TakasPara */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              3. Ücretli Hizmetler ve TakasPara
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla içerisinde belirli özelliklerin kullanımı için uygulama içi dijital bakiye niteliğinde TakasPara (TP) kullanılabilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
              TakasPara;
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
              <li>yalnızca Takasla uygulaması içerisindeki belirlenmiş hizmetlerde kullanılabilir,</li>
              <li>nakit para, elektronik para veya banka mevduatı niteliğinde değildir,</li>
              <li>uygulama dışında ödeme aracı olarak kullanılamaz,</li>
              <li>başka bir kullanıcıya nakit karşılığı devredilemez,</li>
              <li>kanunen zorunlu hâller dışında nakde çevrilemez.</li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-2">
              Kullanıcının satın alma işleminden önce ödeyeceği toplam bedel ve elde edeceği TakasPara miktarı ilgili satın alma ekranında gösterilir.
            </p>
          </section>

          {/* Section 4: Takas İşlem Bedeli */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              4. Takas İşlem Bedeli
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takas tekliflerinde uygulanacak TakasPara bedeli, işlem gerçekleştirilmeden önce kullanıcıya uygulama içerisinde gösterilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Mevcut sistemde, ücretli bir takas teklifinde teklif gönderen kullanıcıdan ilgili işlem için belirlenen TakasPara tahsil edilir. Teklif kabul edildiğinde karşı taraftan da uygulamada belirtilen TakasPara işlem bedeli alınabilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Bekleyen bir teklif reddedilir, kullanıcı tarafından iptal edilir veya süresi içinde kabul edilmezse, ilgili işleme ilişkin iade kuralları uygulama içerisinde belirtilen güncel Takasla kurallarına göre uygulanır.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Kabul edilmiş bir takasın daha sonra taraflardan biri tarafından iptal edilmesi hâlinde, işlem için daha önce kullanılmış TakasPara tutarları iade edilmez.
            </p>
          </section>

          {/* Section 5: Hizmetin İfası */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              5. Hizmetin İfası
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Dijital hizmet veya TakasPara satın alımının başarıyla tamamlanmasının ardından ilgili kullanım hakkı, teknik olarak mümkün olan en kısa sürede kullanıcının Takasla hesabına tanımlanır.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Uygulama mağazaları üzerinden gerçekleştirilen satın alma işlemlerinde ödeme işlemleri ilgili uygulama mağazasının ödeme altyapısı üzerinden yürütülebilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Ödeme yöntemi, para birimi, vergiler ve satın alma işlemine ilişkin diğer bilgiler işlem öncesinde kullanıcıya gösterilir.
            </p>
          </section>

          {/* Section 6: Fiyat ve Ödeme */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              6. Fiyat ve Ödeme
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Ücretli hizmetlerin fiyatları satın alma ekranında belirtilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Kullanıcı, satın alma işlemini onaylamadan önce toplam ödeme tutarını görebilir. Satın alma işleminin onaylanması ödeme yükümlülüğü doğurur. Mesafeli sözleşmelerde tüketicinin sipariş onayından hemen önce bu konuda açık şekilde bilgilendirilmesi gerekir (
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
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Uygulama mağazası tarafından uygulanabilecek döviz kuru, vergi, komisyon veya ödeme yöntemine bağlı diğer unsurlar ilgili mağazanın kendi koşullarına tabi olabilir.
            </p>
          </section>

          {/* Section 7: Cayma Hakkı */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              7. Cayma Hakkı
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Tüketiciler, kural olarak mesafeli hizmet sözleşmelerinde sözleşmenin kurulduğu tarihten itibaren 14 gün içinde, herhangi bir gerekçe göstermeden cayma hakkına sahiptir (
              <a
                href="https://tuketici.ticaret.gov.tr/data/5e81982d13b876a1b04c7a42/2023-6502%20Say%C4%B1l%C4%B1%20T%C3%BCketicinin%20Korunmas%C4%B1%20Hakk%C4%B1nda%20Kanun.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00A859] hover:underline font-medium"
              >
                Tüketicinin Korunması Hakkında Kanun
              </a>
              ).
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Ancak dijital hizmetin veya elektronik ortamda anında ifa edilen hizmetin, tüketicinin açık talebi ve gerekli onayları doğrultusunda cayma süresi sona ermeden kullanılmaya başlanması hâlinde cayma hakkının kapsamı yürürlükteki tüketici mevzuatına göre değişebilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Kullanıcı, satın aldığı TakasPara veya dijital hizmeti kullanmadan önce cayma ve iade koşullarını ilgili satın alma ekranından incelemelidir.
            </p>
          </section>

          {/* Section 8: Cayma Bildirimi */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              8. Cayma Bildirimi
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Cayma hakkının mevcut olduğu durumlarda Kullanıcı, cayma talebini açık bir beyanla aşağıdaki iletişim kanalına iletebilir:
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
              Cayma bildiriminin yazılı veya kalıcı veri saklayıcısı yoluyla yapılması mümkündür (
              <a
                href="https://tuketici.ticaret.gov.tr/data/5e819a8e13b876a1b04c7a4a/Mesafeli%20S%C3%B6zle%C5%9Fmeler%20Y%C3%B6netmeli%C4%9Fi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00A859] hover:underline font-medium"
              >
                Mesafeli Sözleşmeler Yönetmeliği
              </a>
              ).
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Uygulama mağazası üzerinden gerçekleştirilen satın almalarda, iade süreci ilgili mağazanın iade sistemi üzerinden de yürütülebilir.
            </p>
          </section>

          {/* Section 9: İade Koşulları */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              9. İade Koşulları
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              İade hakkının mevcut olduğu ve talebin kabul edildiği durumlarda geri ödeme, işlemin gerçekleştirildiği ödeme yöntemi ve ilgili uygulama mağazasının ödeme prosedürleri dikkate alınarak gerçekleştirilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Aşağıdaki durumlarda, yürürlükteki mevzuattan doğan zorunlu haklar saklı kalmak üzere, kullanılmış dijital hakların veya gerçekleştirilmiş hizmetlerin iadesi mümkün olmayabilir:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
              <li>satın alınan TakasPara&apos;nın tamamen veya kısmen kullanılması,</li>
              <li>dijital hizmetin kullanıcı talebiyle derhal ifasına başlanması,</li>
              <li>takas işleminin kabul edilmesi nedeniyle hizmetin fiilen gerçekleştirilmiş olması,</li>
              <li>kullanıcının ilgili dijital hakkı tüketmiş olması.</li>
            </ul>
          </section>

          {/* Section 10: Takas Konusu Ürünler */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              10. Takas Konusu Ürünler
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla, kullanıcılar tarafından yayımlanan ilanlardaki fiziksel ürünlerin sahibi, satıcısı veya alıcısı değildir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
              Ürünlerin;
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
              <li>doğruluğu,</li>
              <li>gerçekliği,</li>
              <li>ayıplı olup olmadığı,</li>
              <li>teslimi,</li>
              <li>fiziki durumu,</li>
              <li>kullanıcılar arasındaki fiili değişimi</li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-1">
              ilgili kullanıcıların sorumluluğundadır.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla’nın sorumluluğu, yürürlükteki mevzuattan doğan zorunlu sorumluluklar saklı kalmak üzere, dijital platform hizmetinin sunulmasıyla sınırlıdır.
            </p>
          </section>

          {/* Section 11: Kullanıcının Yükümlülükleri */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              11. Kullanıcının Yükümlülükleri
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
              Kullanıcı;
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
              <li>hesap bilgilerini doğru şekilde vermeyi,</li>
              <li>hukuka aykırı ilan yayımlamamayı,</li>
              <li>sahte veya yanıltıcı ürün bilgisi paylaşmamayı,</li>
              <li>başka kişilerin haklarını ihlal etmemeyi,</li>
              <li>ödeme ve uygulama sistemlerini kötüye kullanmamayı,</li>
              <li>Takasla Kullanım Koşulları ve Topluluk Kuralları&apos;na uymayı</li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-1">
              kabul eder.
            </p>
          </section>

          {/* Section 12: Teknik Kesintiler */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              12. Teknik Kesintiler
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Bakım, teknik arıza, internet bağlantısı, uygulama mağazaları, ödeme altyapıları veya Takasla&apos;nın makul kontrolü dışındaki üçüncü taraf hizmetlerden kaynaklanan geçici kesintiler meydana gelebilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla, bu tür durumların giderilmesi için makul ölçüde gerekli teknik çalışmaları yürütür.
            </p>
          </section>

          {/* Section 13: Şikâyet ve Başvurular */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              13. Şikâyet ve Başvurular
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Kullanıcılar satın alma, hizmet veya sözleşmeye ilişkin taleplerini aşağıdaki iletişim kanalından iletebilir:
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
              Tüketiciler ayrıca, ilgili parasal sınırlar ve görev kuralları çerçevesinde Tüketici Hakem Heyetleri veya Tüketici Mahkemelerine başvurabilir.
            </p>
          </section>

          {/* Section 14: Sözleşmenin Saklanması */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              14. Sözleşmenin Saklanması
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Bu Sözleşmenin güncel sürümü takaslapp.com üzerinden kullanıcıların erişimine sunulur.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Satın alma işlemi sırasında kullanıcıya sunulan bilgiler ve işlem kayıtları ilgili yasal yükümlülükler kapsamında saklanabilir. Elektronik ticarette işlem ve bilgilendirme kayıtlarının tutulmasına ilişkin yükümlülükler de bulunmaktadır (
              <a
                href="https://ticaret.gov.tr/ic-ticaret/elektronik-ticaret/mevzuat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00A859] hover:underline font-medium"
              >
                Elektronik Ticaret Mevzuatı
              </a>
              ).
            </p>
          </section>

          {/* Section 15: Yürürlük */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              15. Yürürlük
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Kullanıcının ücretli hizmet veya dijital içerik satın alma işlemini elektronik ortamda onaylamasıyla işbu Sözleşme yürürlüğe girer.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium text-gray-900">
              Kullanıcının 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve ilgili mevzuattan doğan zorunlu hakları saklıdır.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer outerBg="bg-[#FAF9F5]" />
    </div>
  );
}
