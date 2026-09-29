import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalHeader from "@/components/LegalHeader";
import CorporateSidebar from "@/components/CorporateSidebar";

export const metadata: Metadata = {
  title: "İletişim - Takasla",
  description:
    "Takasla iletişim bilgileri, genel merkez adresi ve harita konumu. Bizimle iletişime geçin.",
};

export default function IletisimPage() {
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
          <span className="text-gray-900 font-semibold">İletişim</span>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 py-10 sm:py-14 w-full flex-grow">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Corporate Sidebar */}
          <CorporateSidebar activeTab="iletisim" />

          {/* Right Main Content */}
          <div className="flex-1 space-y-8">
            {/* Title with Green Vertical Bar */}
            <div className="border-l-4 border-[#00A859] pl-4 py-0.5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                İletişim
              </h1>
            </div>

            {/* Content & Map Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Contact Details */}
              <div className="lg:col-span-5 space-y-6 text-sm sm:text-base">
                {/* Şirket Ünvanı / Hizmet Sağlayıcı */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Şirket Ünvanı / Hizmet Sağlayıcı
                  </h3>
                  <p className="font-semibold text-gray-900">
                    Recep Aydoğan <span className="font-normal text-gray-600">(Takasla)</span>
                  </p>
                </div>

                {/* Adres */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Adres
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Esenler Mh. Horasan Sk. Görgülü Center No:4/4 Selçuklu Konya
                  </p>
                </div>

                {/* E-Posta */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    E-Posta
                  </h3>
                  <a
                    href="mailto:takaslappcom@gmail.com"
                    className="text-gray-900 hover:text-[#00A859] font-medium transition-colors inline-block"
                  >
                    takaslappcom@gmail.com
                  </a>
                </div>

                {/* İnternet Sitesi */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    İnternet Sitesi
                  </h3>
                  <a
                    href="https://takaslapp.com"
                    className="text-gray-900 hover:text-[#00A859] font-medium transition-colors inline-block"
                  >
                    takaslapp.com
                  </a>
                </div>

                {/* Takipte Kalın / Sosyal Medya */}
                <div className="pt-2">
                  <h3 className="text-sm font-bold text-gray-900 mb-3">
                    Takipte Kalın
                  </h3>
                  <div className="flex items-center gap-2.5">
                    {/* Instagram */}
                    <a
                      href="https://instagram.com/takaslapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-9 h-9 rounded-full border border-gray-300/80 hover:border-gray-900 text-gray-600 hover:text-black hover:bg-black/5 flex items-center justify-center transition-all"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>

                    {/* X (Twitter) */}
                    <a
                      href="https://x.com/takaslapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X (Twitter)"
                      className="w-9 h-9 rounded-full border border-gray-300/80 hover:border-gray-900 text-gray-600 hover:text-black hover:bg-black/5 flex items-center justify-center transition-all"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:takaslappcom@gmail.com"
                      aria-label="E-Posta Gönder"
                      className="w-9 h-9 rounded-full border border-gray-300/80 hover:border-gray-900 text-gray-600 hover:text-black hover:bg-black/5 flex items-center justify-center transition-all"
                    >
                      <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Google Maps Embed */}
              <div className="lg:col-span-7">
                <div className="w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-gray-100">
                  <iframe
                    title="Bromak Agency Konum Haritası"
                    src="https://maps.google.com/maps?q=Bromak+Agency,+G%C3%B6rg%C3%Bcl%C3%BC+Center,+Sel%C3%A7uklu,+Konya&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
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
