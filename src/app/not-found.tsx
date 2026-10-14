import Link from "next/link";
import type { Metadata } from "next";
import LegalHeader from "@/components/LegalHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  description: "Aradığınız sayfa kaldırılmış veya bağlantı adresi değişmiş olabilir. Takasla ana sayfasına dönerek devam edebilirsiniz.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-gray-800 flex flex-col justify-between font-sans">
      {/* Top Header */}
      <LegalHeader />

      {/* Main 404 Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-lg w-full text-center">
          {/* Subtle clean 404 display */}
          <div className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-gray-300 mb-2 select-none">
            404
          </div>

          {/* User Requested Catchy Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Aradığın Sayfa Takaslanmış Olabilir!
          </h1>

          {/* Refined corporate description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto font-normal">
            Ulaşmaya çalıştığın sayfa yayından kaldırılmış, taşınmış veya bağlantı adresi değişmiş olabilir. Ana sayfaya dönerek takas dünyasını keşfetmeye devam edebilirsin.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00A859] hover:bg-[#008f4c] text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              <span>Ana Sayfaya Dön</span>
            </Link>

            <Link
              href="/sss"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 font-medium px-6 py-3 rounded-xl border border-gray-200/90 shadow-xs hover:border-gray-300 transition-all text-sm sm:text-base"
            >
              Sıkça Sorulan Sorular
            </Link>
          </div>

          {/* Corporate Quick Links */}
          <div className="pt-6 border-t border-gray-200/70">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Popüler Sayfalar
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-gray-600">
              <Link href="/hakkimizda" className="hover:text-black transition-colors">
                Hakkımızda
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/iletisim" className="hover:text-black transition-colors">
                İletişim
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/kariyer" className="hover:text-black transition-colors">
                Kariyer
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/kullanim-kosullari" className="hover:text-black transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer showAboutTeaser={false} outerBg="bg-[#FAF9F5]" />
    </div>
  );
}
