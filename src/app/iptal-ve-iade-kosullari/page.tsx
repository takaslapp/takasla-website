import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "İptal, Cayma ve İade Koşulları - Takasla",
  description:
    "Takasla mobil uygulaması ve platformu üzerinden sunulan ücretli dijital hizmetler, TakasPara kullanımı ve satın alma işlemlerine ilişkin iptal, cayma ve iade esasları.",
};

export default function IptalVeIadeKosullariPage() {
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
        <div className="bg-[#151716] text-white rounded-3xl p-8 sm:p-12 mb-10 relative overflow-hidden shadow-xl border border-white/10">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="inline-block bg-[#00E676]/15 text-[#00E676] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Yasal Bilgilendirme
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                İptal, Cayma ve İade Koşulları
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                Son Güncelleme: 29 Eylül 2026
              </p>
            </div>
            <img
              src="/images/takasla-3d.png"
              alt="Takasla 3D"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] self-end md:self-center"
            />
          </div>
        </div>

        {/* Content Details */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed mb-12">
          {/* Giriş */}
          <div className="space-y-3">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Bu metin, Takasla mobil uygulaması ve takaslapp.com üzerinden sunulan ücretli dijital hizmetler, TakasPara kullanımı ve uygulama içi satın alma işlemlerine ilişkin iptal, cayma ve iade esaslarını açıklamak amacıyla hazırlanmıştır.
            </p>
          </div>

          {/* Section 1: Genel Esaslar */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              1. Genel Esaslar
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla üzerinden sunulan ücretli hizmetler ve TakasPara işlemleri dijital niteliktedir. Kullanıcının satın alma işlemini tamamlaması, ilgili dijital hizmetin veya kullanım hakkının hesabına tanımlanması sonucunu doğurur.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Tüketicilerin mesafeli sözleşmelerde kural olarak 14 günlük cayma hakkı bulunur. Ancak elektronik ortamda anında ifa edilen hizmetler, tüketiciye anında teslim edilen gayrimaddi ürünler ve cayma süresi dolmadan tüketicinin onayıyla ifasına başlanan hizmetler bakımından cayma hakkı istisnaları uygulanabilir (
              <a
                href="https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/mesafeli-sozlesmeler-hakkinda-bilgilendirme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00A859] hover:underline font-medium"
              >
                Mesafeli Sözleşmeler Hakkında Bilgilendirme
              </a>
              ).
            </p>
          </section>

          {/* Section 2: TakasPara Satın Alımları */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              2. TakasPara Satın Alımları
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
              <li>satın alma ekranında belirtilen Takasla hizmetlerinde kullanılabilir.</li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-2">
              Kullanıcı, satın alma işlemini tamamlamadan önce satın alacağı TakasPara miktarını ve toplam ödeme tutarını görür.
            </p>
          </section>

          {/* Section 3: Cayma Hakkı */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              3. Cayma Hakkı
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Cayma hakkının uygulanabildiği durumlarda kullanıcı, sözleşmenin kurulduğu tarihten itibaren 14 gün içinde herhangi bir gerekçe göstermeden cayma hakkını kullanabilir (
              <a
                href="https://ticaret.gov.tr/data/5d42a9b313b87632542a2dae/Tuketicinin_Korunmasi_Hakkinda_Kanun_6502_Ocak_2021_Kitap.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00A859] hover:underline font-medium"
              >
                6502 Sayılı Kanun
              </a>
              ).
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Ancak TakasPara veya başka bir dijital hizmetin kullanıcının hesabına anında tanımlanması, tüketicinin talebi ve onayıyla hizmetin ifasına başlanması veya dijital hakkın kullanılması hâlinde cayma hakkı mevzuattaki istisnalar kapsamında sınırlanabilir veya kullanılamayabilir (
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
          </section>

          {/* Section 4: Cayma Talebinin Bildirilmesi */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              4. Cayma Talebinin Bildirilmesi
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Cayma hakkının mevcut olduğu durumlarda kullanıcı talebini açık bir beyanla aşağıdaki adrese iletebilir:
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
              Talepte kullanıcının hesabını ve ilgili satın alma işlemini belirlemeye yetecek bilgilerin bulunması gerekebilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Uygulama mağazası üzerinden gerçekleştirilen satın almalarda iade veya cayma işlemleri ilgili mağazanın kendi iade sistemi ve kurallarına da tabi olabilir.
            </p>
          </section>

          {/* Section 5: Kullanılmamış Dijital Haklar */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              5. Kullanılmamış Dijital Haklar
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Satın alınan dijital hakkın veya TakasPara&apos;nın hiç kullanılmamış olması, iade değerlendirmesinde dikkate alınabilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              İade hakkının mevzuat gereği bulunduğu durumlarda geri ödeme, ilgili satın alma işleminin gerçekleştirildiği ödeme yöntemi veya uygulama mağazası prosedürleri doğrultusunda gerçekleştirilir.
            </p>
          </section>

          {/* Section 6: Kullanılmış TakasPara */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              6. Kullanılmış TakasPara
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              TakasPara&apos;nın tamamen veya kısmen uygulama içinde kullanılmış olması hâlinde, kullanılan bölüme ilişkin hizmet ifa edilmiş kabul edilebilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Mevzuattan doğan zorunlu tüketici hakları saklı olmak üzere, tüketilmiş veya kullanılmış dijital hakların iadesi mümkün olmayabilir.
            </p>
          </section>

          {/* Section 7: Takas Teklifi İçin Kullanılan TakasPara */}
          <section className="space-y-4 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              7. Takas Teklifi İçin Kullanılan TakasPara
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla&apos;da takas tekliflerine ilişkin işlem bedelleri kullanıcıya işlem öncesinde gösterilir.
            </p>
            <div className="bg-[#FAF9F5] border border-gray-200/80 rounded-2xl p-5 space-y-3">
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                Mevcut sistemde geçerli kurallar:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                <li>
                  <span className="font-medium text-gray-900">Teklif Reddi:</span> Bekleyen bir teklif reddedilirse, teklif gönderen kullanıcının ilgili 10 TP işlem bedeli geri verilir.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Kullanıcı İptali:</span> Bekleyen teklif, teklif gönderen kullanıcı tarafından iptal edilirse ilgili 10 TP geri verilir.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Zaman Aşımı:</span> Bekleyen teklif süresi dolduğu için iptal edilirse ilgili 10 TP geri verilir.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Teklif Kabulü:</span> Teklif kabul edilirse gönderen kullanıcının kullandığı 10 TP geri verilmez.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Karşı Taraf Bedeli:</span> Teklif kabul edildiğinde karşı taraftan da ilgili 10 TP işlem bedeli alınır.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Kabul Sonrası İptal:</span> Kabul edilmiş bir takas daha sonra taraflardan biri tarafından iptal edilirse hiçbir tarafa TakasPara iadesi yapılmaz.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Tamamlanan Takaslar:</span> Tamamlanmış takaslarda işlem bedelleri iade edilmez.
                </li>
                <li>
                  <span className="font-medium text-gray-900">İlk Ücretsiz Teklif:</span> İlk ücretsiz teklif kapsamında herhangi bir TakasPara tahsil edilmemişse iade konusu da oluşmaz.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8: Takasın İptal Edilmesi */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              8. Takasın İptal Edilmesi
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Kullanıcıların birbirleri arasında gerçekleştirdiği fiziksel ürün takası ile TakasPara satın alma işlemi birbirinden farklıdır.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Bir takasın uygulama içinde iptal edilmesi, daha önce satın alınmış TakasPara paketinin otomatik olarak iade edileceği anlamına gelmez. Takasın hangi aşamada iptal edildiğine göre yukarıdaki işlem bedeli kuralları uygulanır.
            </p>
          </section>

          {/* Section 9: Fiziksel Ürünlerin İadesi */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              9. Fiziksel Ürünlerin İadesi
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla, kullanıcılar arasındaki fiziksel ürünlerin satıcısı veya alıcısı değildir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Kullanıcıların kendi aralarında değiştirdiği fiziksel ürünlerin geri verilmesi, değiştirilmesi veya takasın fiilen geri alınması taraflar arasındaki ilişkiye bağlıdır.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla&apos;nın bu metindeki iade hükümleri, esas olarak Takasla tarafından sunulan dijital hizmetler ve TakasPara işlemleri bakımından uygulanır.
            </p>
          </section>

          {/* Section 10: Teknik Hata veya Mükerrer Tahsilat */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              10. Teknik Hata veya Mükerrer Tahsilat
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
              Kullanıcının kontrolü dışında gerçekleşen:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
              <li>mükerrer ödeme,</li>
              <li>satın alınan TakasPara&apos;nın hesaba hiç yansımaması,</li>
              <li>ödeme tamamlanmasına rağmen dijital hizmetin sunulmaması,</li>
              <li>doğrulanabilir teknik satın alma hataları</li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-1">
              gibi durumlarda kullanıcı destek talebi oluşturabilir. Takasla, ilgili işlemi teknik kayıtlar ve ödeme sağlayıcısı kayıtları üzerinden inceleyebilir.
            </p>
          </section>

          {/* Section 11: Uygulama Mağazası Üzerinden Yapılan Satın Alımlar */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              11. Uygulama Mağazası Üzerinden Yapılan Satın Alımlar
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla içindeki satın alma işlemleri bir uygulama mağazası üzerinden gerçekleştirildiyse ödeme ve geri ödeme işlemlerinin tamamı veya bir bölümü ilgili mağazanın prosedürlerine tabi olabilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Bu durumda kullanıcıdan iade talebini ilgili uygulama mağazasının iade kanalı üzerinden iletmesi istenebilir.
            </p>
          </section>

          {/* Section 12: Geri Ödeme Yöntemi */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              12. Geri Ödeme Yöntemi
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              İade hakkının mevcut olduğu ve iade talebinin kabul edildiği durumlarda ödeme, mümkün olduğu ölçüde kullanıcının satın alma sırasında kullandığı ödeme yöntemine uygun biçimde gerçekleştirilir. Mesafeli satışlarda cayma hakkının geçerli olduğu durumlarda geri ödemenin tüketicinin kullandığı ödeme aracına uygun şekilde yapılması esastır (
              <a
                href="https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/mesafeli-sozlesmeler-hakkinda-bilgilendirme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00A859] hover:underline font-medium"
              >
                Mesafeli Sözleşmeler Rehberi
              </a>
              ).
            </p>
          </section>

          {/* Section 13: İnceleme ve Kötüye Kullanım */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              13. İnceleme ve Kötüye Kullanım
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              İade, cayma veya teknik hata taleplerinde Takasla; satın alma kaydı, TakasPara hareketleri ve ilgili işlem geçmişini inceleyebilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Hileli işlem, kötüye kullanım, sahte talep veya aynı dijital hakkın hem kullanılıp hem iade edilmeye çalışılması gibi durumlarda talep reddedilebilir. Yürürlükteki mevzuattan doğan zorunlu tüketici hakları saklıdır.
            </p>
          </section>

          {/* Section 14: Başvuru ve İletişim */}
          <section className="space-y-4 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              14. Başvuru ve İletişim
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              İptal, cayma veya iade talepleri için:
            </p>
            <div className="bg-[#FAF9F5] border border-gray-200/80 rounded-2xl p-5 text-sm sm:text-base leading-relaxed text-gray-700 space-y-2">
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
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Kullanıcıların Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri dahil olmak üzere mevzuattan doğan başvuru hakları saklıdır.
            </p>
          </section>

          {/* Section 15: Yürürlük */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              15. Yürürlük
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Bu koşullar, Takasla üzerinden gerçekleştirilen dijital hizmet ve TakasPara işlemlerinde uygulanır.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla, yasal yükümlülükler veya hizmet modelindeki değişiklikler doğrultusunda bu metni güncelleyebilir. Kullanıcıların emredici mevzuattan doğan hakları bu değişikliklerden etkilenmez.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer outerBg="bg-[#FAF9F5]" />
    </div>
  );
}
