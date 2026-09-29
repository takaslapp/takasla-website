import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalHeader from "@/components/LegalHeader";
import CorporateSidebar from "@/components/CorporateSidebar";

export const metadata: Metadata = {
  title: "Kariyer - Takasla",
  description:
    "Takasla ekibine katılın! Türkiye'nin yeni nesil takas platformunu birlikte inşa edelim.",
};

export default function KariyerPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-gray-800 flex flex-col justify-between font-sans">
      {/* Top Header with Centered Logo */}
      <LegalHeader />

      {/* Breadcrumb Navigation */}
      <div className="border-b border-gray-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center gap-2 text-xs text-gray-500">
          <Link
            href="/"
            aria-label="Ana Sayfa"
            className="hover:text-black transition-colors flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </Link>
          <span className="text-gray-300">&gt;</span>
          <span>Kurumsal</span>
          <span className="text-gray-300">&gt;</span>
          <span className="text-gray-900 font-semibold">Kariyer</span>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 py-10 sm:py-14 w-full flex-grow">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Corporate Sidebar */}
          <CorporateSidebar activeTab="kariyer" />

          {/* Right Main Content */}
          <div className="flex-1 space-y-8">
            {/* Title with Green Vertical Bar */}
            <div className="border-l-4 border-[#00A859] pl-4 py-0.5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Kariyer
              </h1>
            </div>

            {/* Intro Content */}
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                <strong className="text-gray-900 font-semibold">Takasla</strong> ailesi olarak; döngüsel ekonomiye inanan, yenilikçi fikirlere açık ve teknolojiyi kullanıcı faydasına dönüştürmekten heyecan duyan dinamik bir ekiple büyüyoruz.
              </p>
              <p>
                Bizimle birlikte milyonlarca kullanıcının hayatına dokunan, sürdürülebilir bir geleceği inşa eden projelere imza atmak ister misiniz?
              </p>
            </div>

            {/* Open Positions Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#00E676]/10 text-[#00A859] flex items-center justify-center">
                <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                Açık Pozisyonlar & Genel Başvuru
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Şu an için açık bir pozisyon ilanımız bulunmasa da, yetenekli ve motivasyonu yüksek yol arkadaşlarımızı her zaman aramıza katmaktan mutluluk duyarız.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:takaslappcom@gmail.com?subject=Kariyer%20-%20Genel%20Ba%C5%9Fvuru"
                  className="inline-flex items-center gap-2 bg-[#151716] hover:bg-black text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all hover:scale-105 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Özgeçmişini Gönder (takaslappcom@gmail.com)
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer outerBg="bg-[#FAF9F5]" />
    </div>
  );
}
