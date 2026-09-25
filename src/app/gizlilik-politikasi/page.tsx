import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gizlilik Politikası - Takasla",
  description: "Takasla kullanıcılarının kişisel verilerinin korunması ve gizlilik politikası.",
};

export default function GizlilikPolitikasiPage() {
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
                Gizlilik Politikası
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
              1. Veri Sorumlusu
            </h2>
            <p>
              Takasla platformu olarak kişisel verilerinizin gizliliğine ve güvenliğine
              büyük önem veriyoruz. Bu Gizlilik Politikası, platformumuzu kullandığınızda
              toplanan kişisel verilerinizin nasıl işlendiğini ve korunduğunu açıklar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              2. Toplanan Kişisel Veriler
            </h2>
            <p className="mb-3">
              Takasla hizmetlerini kullanırken aşağıdaki verileriniz işlenebilir:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>
                <strong className="text-gray-800">Kimlik ve İletişim Bilgileri:</strong> E-posta
                adresi, telefon numarası ve kullanıcı profil bilgileri.
              </li>
              <li>
                <strong className="text-gray-800">İşlem ve Takas Verileri:</strong> Eklenen
                ilanlar, teklifler ve gerçekleştirilen takas geçmişi.
              </li>
              <li>
                <strong className="text-gray-800">Teknik Veriler:</strong> IP adresi, cihaz türü ve
                kullanım istatistikleri.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              3. Kişisel Verilerin İşlenme Amaçları
            </h2>
            <p>
              Toplanan kişisel verileriniz; hesabınızın oluşturulması, takas tekliflerinin
              eşleştirilmesi, platform güvenliğinin sağlanması ve yasal yükümlülüklerin
              yerine getirilmesi amaçlarıyla işlenmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              4. Veri Güvenliği ve Saklama
            </h2>
            <p>
              Kişisel verileriniz endüstri standardı güvenlik önlemleri ve şifreleme
              protokolleri ile korunmaktadır. Verileriniz, yasal saklama süreleri ve
              hizmet gereksinimleri süresince güvenli sunucularda saklanır.
            </p>
          </section>

          <section className="pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              5. Haklarınız ve İletişim
            </h2>
            <p>
              Kişisel verilerinize erişme, düzeltilmesini veya silinmesini talep etme
              hakkına sahipsiniz. Tüm talep ve başvurularınız için bizimle{" "}
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
