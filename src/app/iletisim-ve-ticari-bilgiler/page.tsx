import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "İletişim ve Ticari Bilgiler - Takasla",
  description:
    "Takasla mobil uygulaması ve takaslapp.com platformuna ilişkin resmi hizmet sağlayıcı, ticari unvan ve kurumsal iletişim bilgileri.",
};

export default function IletisimVeTicariBilgilerPage() {
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
                Kurumsal Bilgilendirme
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                İletişim ve Ticari Bilgiler
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
              Bu sayfa, Takasla mobil uygulaması ve takaslapp.com internet sitesi üzerinden sunulan hizmetlere ilişkin iletişim ve hizmet sağlayıcı bilgilerini içerir.
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
                <strong className="text-gray-900">Uygulama / Marka Adı:</strong> Takasla
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
                <strong className="text-gray-900">E-posta:</strong>{" "}
                <a
                  href="mailto:takaslappcom@gmail.com"
                  className="text-[#00A859] hover:underline font-medium"
                >
                  takaslappcom@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-gray-900">Adres:</strong> Esenler Mah., Horasan Sok., Görgülü Center No:4/4, Selçuklu / Konya
              </p>
            </div>
          </section>

          {/* Section 2: Takasla Hakkında */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              2. Takasla Hakkında
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla, kullanıcıların kullanmadıkları eşyalar için ilan oluşturabildiği, diğer kullanıcıların ürünlerini keşfedebildiği, kendi ürünleriyle takas teklifi gönderebildiği ve uygulama üzerinden iletişim kurabildiği dijital bir takas platformudur.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla, kullanıcılar arasında takasa konu edilen fiziksel ürünlerin satıcısı, alıcısı veya sahibi değildir. Platform, kullanıcıların birbirlerini bulmasını ve takas sürecini dijital ortamda yönetmesini sağlayan aracılık ve platform hizmetleri sunar.
            </p>
          </section>

          {/* Section 3: Destek ve İletişim */}
          <section className="space-y-4 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              3. Destek ve İletişim
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla ile ilgili;
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
              <li>hesap işlemleri,</li>
              <li>teknik sorunlar,</li>
              <li>satın alma ve TakasPara işlemleri,</li>
              <li>gizlilik ve kişisel veriler,</li>
              <li>ilan ve kullanıcı şikâyetleri,</li>
              <li>iptal, cayma ve iade talepleri,</li>
              <li>diğer destek talepleri</li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-1">
              için aşağıdaki iletişim kanalını kullanabilirsiniz:
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
            <p className="text-gray-500 text-xs sm:text-sm italic">
              Başvurularda, talebin daha hızlı incelenebilmesi amacıyla Takasla hesabınızla ilişkili bilgileri ve talebinizin konusunu belirtmeniz önerilir.
            </p>
          </section>

          {/* Section 4: Kişisel Verilere İlişkin Başvurular */}
          <section className="space-y-4 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              4. Kişisel Verilere İlişkin Başvurular
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Kişisel verilerin işlenmesine ilişkin talepler, Takasla&apos;nın{" "}
              <Link
                href="/gizlilik-politikasi"
                className="text-[#00A859] hover:underline font-medium"
              >
                Gizlilik Politikası
              </Link>{" "}
              ve{" "}
              <Link
                href="/kvkk-aydinlatma-metni"
                className="text-[#00A859] hover:underline font-medium"
              >
                KVKK Aydınlatma Metni
              </Link>{" "}
              kapsamında değerlendirilir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Bu kapsamdaki başvurular için:
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
                <strong className="text-gray-900">Adres:</strong> Esenler Mah., Horasan Sok., Görgülü Center No:4/4, Selçuklu / Konya
              </p>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              kanalları kullanılabilir.
            </p>
          </section>

          {/* Section 5: Tüketici İşlemleri */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              5. Tüketici İşlemleri
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla üzerinden gerçekleştirilen ücretli dijital hizmet veya uygulama içi satın alma işlemlerine ilişkin detaylar;
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
              <li>
                <Link
                  href="/mesafeli-hizmet-sozlesmesi"
                  className="text-[#00A859] hover:underline font-medium"
                >
                  Mesafeli Hizmet Sözleşmesi
                </Link>
              </li>
              <li>
                <Link
                  href="/on-bilgilendirme-formu"
                  className="text-[#00A859] hover:underline font-medium"
                >
                  Ön Bilgilendirme Formu
                </Link>
              </li>
              <li>
                <Link
                  href="/iptal-ve-iade-kosullari"
                  className="text-[#00A859] hover:underline font-medium"
                >
                  İptal / Cayma / İade Koşulları
                </Link>
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-1">
              sayfalarında açıklanmaktadır.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium text-gray-900">
              Kullanıcıların yürürlükteki tüketici mevzuatından doğan başvuru hakları saklıdır.
            </p>
          </section>

          {/* Section 6: Kullanıcılar Arasındaki Takaslar */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              6. Kullanıcılar Arasındaki Takaslar
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla üzerindeki fiziksel ürün ilanları kullanıcılar tarafından oluşturulur.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
              Ürünlerin;
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
              <li>doğruluğu,</li>
              <li>sahipliği,</li>
              <li>fiziksel durumu,</li>
              <li>teslimi,</li>
              <li>kullanıcılar arasındaki fiili değişimi</li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-1">
              ilgili kullanıcıların sorumluluğundadır.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla&apos;nın platform hizmetlerinden doğan yasal sorumlulukları saklıdır.
            </p>
          </section>

          {/* Section 7: Bildirim ve Talepler */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              7. Bildirim ve Talepler
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla&apos;ya gönderilen destek, şikâyet veya diğer talepler mümkün olan en kısa sürede incelenir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Gerekli görülmesi hâlinde kullanıcıdan talebin doğrulanabilmesi için ek bilgi veya belge istenebilir.
            </p>
          </section>

          {/* Section 8: İnternet Sitesi */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              8. İnternet Sitesi
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Takasla&apos;nın resmi internet sitesi:
            </p>
            <p className="text-base font-semibold text-gray-900">
              <a
                href="https://takaslapp.com"
                className="text-[#00A859] hover:underline"
              >
                takaslapp.com
              </a>
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Güncel yasal metinlere, kullanıcı bilgilendirmelerine ve iletişim kanallarına internet sitesi üzerinden ulaşılabilir.
            </p>
          </section>

          {/* Section 9: Yürürlük */}
          <section className="space-y-3 pt-6 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              9. Yürürlük
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Bu iletişim ve hizmet sağlayıcı bilgileri 29 Eylül 2026 tarihi itibarıyla geçerlidir.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Bilgilerde değişiklik olması hâlinde bu sayfa güncellenir.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer outerBg="bg-[#FAF9F5]" />
    </div>
  );
}
