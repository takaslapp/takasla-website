import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Çerez Politikası - Takasla",
  description: "Takasla platformunda kullanılan çerezler ve çerez yönetimi politikası.",
};

export default function CerezPolitikasiPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-gray-800 flex flex-col justify-between font-sans">
      {/* Header */}
      <header className="w-full bg-[#151716] text-white py-5 px-6 sm:px-12 flex items-center justify-between border-b border-white/10 shadow-md">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/images/takasla-simge.webp"
            alt="Takasla"
            className="w-9 h-9 object-contain group-hover:scale-105 transition-transform"
          />
          <span className="text-2xl font-bold tracking-tight text-white font-sans">
            Takasla
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-xs sm:text-sm font-medium text-gray-300 hover:text-[#00E676] transition-colors"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/"
            className="text-xs sm:text-sm font-medium text-gray-300 hover:text-[#00E676] transition-colors"
          >
            Nasıl Çalışır?
          </Link>
          <Link
            href="/"
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
                Çerez Politikası
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                Son Güncelleme: 15 Ağustos 2026
              </p>
            </div>
            <img
              src="/images/takasla-simge.webp"
              alt="Takasla Simge"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain opacity-90 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] self-end md:self-center"
            />
          </div>
        </div>

        {/* Content Details */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base mb-12">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              1. Çerez (Cookie) Nedir?
            </h2>
            <p>
              Çerezler, web sitemizi veya mobil uygulamamızı ziyaret ettiğinizde
              tarayıcınız ya da cihazınız aracılığıyla depolanan küçük metin
              dosyalarıdır. Çerezler, kullanıcı deneyiminizi iyileştirmek,
              güvenliğinizi sağlamak ve platformumuzu optimize etmek amacıyla
              kullanılmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              2. Kullanılan Çerez Türleri
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>
                <strong className="text-gray-800">Zorunlu Çerezler:</strong> Platformun
                temel fonksiyonlarının çalışması ve oturum güvenliği için gereklidir.
              </li>
              <li>
                <strong className="text-gray-800">Performans ve Analiz Çerezleri:</strong>{" "}
                Ziyaretçilerin siteyi nasıl kullandığını anlamamıza ve hizmet kalitemizi
                artırmamıza yardımcı olur.
              </li>
              <li>
                <strong className="text-gray-800">İşlevsellik Çerezleri:</strong> Tercihlerinizi
                (dil, bölge vb.) hatırlayarak kişiselleştirilmiş bir deneyim sunar.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              3. Çerezlerin Kullanım Amaçları
            </h2>
            <p>
              Takasla platformunda çerezler; kullanıcı kimlik doğrulamalarının yapılması,
              güvenli takas süreçlerinin yürütülmesi ve kullanıcı deneyimini daha akıcı
              hale getirmek amacıyla işlenmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              4. Çerez Tercihlerinin Yönetimi
            </h2>
            <p>
              Tarayıcı ayarlarınız üzerinden dilediğiniz zaman çerez tercihlerinizi
              değiştirebilir veya mevcut çerezleri silebilirsiniz. Ancak zorunlu
              çerezlerin devre dışı bırakılması durumunda platformun bazı işlevleri
              düzgün çalışmayabilir.
            </p>
          </section>

          <section className="pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              5. İletişim
            </h2>
            <p>
              Çerez Politikamıza ilişkin her türlü soru ve talepleriniz için bizimle{" "}
              <a
                href="mailto:destek@takasla.com"
                className="text-[#00A859] font-medium underline hover:text-[#00E676] transition-colors"
              >
                destek@takasla.com
              </a>{" "}
              adresi üzerinden iletişime geçebilirsiniz.
            </p>
          </section>
        </div>
      </main>

      {/* Main Footer */}
      <Footer />
    </div>
  );
}
