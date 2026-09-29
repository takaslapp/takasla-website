import Link from "next/link";

interface FooterProps {
  className?: string;
  outerBg?: string;
  showAboutTeaser?: boolean;
}

export default function Footer({
  className = "",
  outerBg = "bg-[#0B0D0C]",
  showAboutTeaser = true,
}: FooterProps = {}) {
  return (
    <footer
      className={`relative ${outerBg} pt-0 pb-0 ${className}`}
      data-purpose="main-footer"
    >
      {/* Top About Teaser Section (Hakkımızda & Görsel Alanı) */}
      {showAboutTeaser && (
        <section
          aria-labelledby="footer-about-heading"
          className="bg-white text-gray-900 border-t border-gray-100 py-12 sm:py-16 md:py-20 px-6 sm:px-12 md:px-16 lg:px-24"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (Text) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <h2
                id="footer-about-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
              >
                Takasla
              </h2>
              <div className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-3 font-normal">
                <p>
                  <strong className="text-gray-900 font-semibold">Takasla nedir?</strong> Takasla; bireylerin kullanmadıkları, atıl duran ya da ihtiyaç fazlası ürünlerini yeni bir nakit bütçe harcamadan, güvenli ve şeffaf bir ortamda diğer kullanıcıların eşyalarıyla takas edebilmelerini sağlayan yeni nesil bir dijital takas platformudur. Amacımız; geleneksel tüketime ve sürekli satın almaya karşı sürdürülebilir, ekonomik ve herkes için erişilebilir bir paylaşım modeli oluşturmaktır.
                </p>
                <p>
                  Takasla ekosisteminde kullanıcılar kendi ürünleri için saniyeler içinde ilan oluşturabilir, binlerce farklı kategorideki takas fırsatlarını keşfedebilir ve doğrudan teklif gönderebilir. Uygulama içi mesajlaşma, şeffaf onay mekanizmaları ve güven odaklı yapısıyla Takasla; hem bireysel bütçeleri korur hem de eşyaları yeniden ekonomiye kazandırarak döngüsel tüketim bilincini güçlendirir.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/hakkimizda"
                  className="inline-flex items-center gap-2 text-[#00A859] hover:text-[#008f4c] font-semibold text-sm sm:text-base group transition-colors"
                >
                  <span>Devamını Oku</span>
                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Content (Image Area - Currently empty placeholder as requested) */}
            <div className="lg:col-span-5 w-full">
              <div
                className="w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl border-2 border-dashed border-gray-200/90 bg-gray-50/70 overflow-hidden flex items-center justify-center relative transition-all group"
                aria-label="Görsel Alanı"
              >
                {/* Clean, subtle visual space ready for image */}
                <div className="flex flex-col items-center justify-center text-gray-400 p-6 text-center select-none">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center text-gray-400 mb-2">
                    <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-gray-400">Görsel Alanı</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Dark Container stretching with large rounded top corners */}
      <div className="relative bg-[#151716] text-white rounded-t-[44px] sm:rounded-t-[64px] md:rounded-t-[80px] border-t border-white/10 px-6 sm:px-12 md:px-16 lg:px-24 pt-0 pb-12">
        {/* Subtle topographic background contour lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 rounded-t-[44px] sm:rounded-t-[64px] md:rounded-t-[80px]">
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 1440 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-100 200 C300 80, 700 350, 1540 120"
              stroke="#ffffff"
              strokeWidth="1.2"
            />
            <path
              d="M-100 350 C400 220, 800 500, 1540 280"
              stroke="#ffffff"
              strokeWidth="1.2"
            />
            <path
              d="M-100 500 C200 380, 950 620, 1540 420"
              stroke="#ffffff"
              strokeWidth="1.2"
            />
            <path
              d="M-50 120 C500 40, 750 320, 1440 60"
              stroke="#00E676"
              strokeWidth="1.2"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Center Brand Logo & Subtitle */}
        <div className="text-center relative z-10 mb-8 pt-12 sm:pt-16 flex flex-col items-center">
          <Link href="/" className="inline-block group mb-3">
            <img
              src="/images/takasla-yesil-logo.png"
              alt="Takasla"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-[0_4px_24px_rgba(190,243,73,0.3)]"
            />
          </Link>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-sans font-normal not-italic tracking-normal">
            Parayla değil, Takasla.
          </p>
        </div>

        {/* Apple App Store Corporate Button Centered */}
        <div className="flex items-center justify-center relative z-10 mb-10">
          <Link
            href="#"
            className="inline-flex items-center gap-3 bg-black hover:bg-[#111111] text-white px-5 py-2.5 rounded-xl border border-white/20 hover:border-white/40 transition-all shadow-xl hover:scale-105 active:scale-95 group"
          >
            <img
              src="/images/apple-logo.png"
              alt="Apple"
              className="w-6 h-6 object-contain brightness-0 invert"
            />
            <div className="flex flex-col text-left leading-none">
              <span className="text-[10px] text-gray-300 font-normal tracking-wide">
                App Store&apos;dan
              </span>
              <span className="text-base font-semibold text-white tracking-tight mt-0.5">
                İndirin
              </span>
            </div>
          </Link>
        </div>

        {/* Corporate 3-Column Footer Grid: Contact, Legal & Privacy, Contracts & Rights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pt-8 pb-10 border-t border-white/10 relative z-10">
          {/* Column 1: Contact Details & Social */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <h4 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#00E676] rounded-full inline-block" />
              İletişim & Şirket
            </h4>
            <div className="text-xs sm:text-sm text-gray-300 space-y-1.5 font-light leading-relaxed">
              <p className="font-normal text-white">Recep Aydoğan</p>
              <p>Esenler Mh. Horasan Sk. Görgülü Center 4/4</p>
              <p>Selçuklu / Konya</p>
              <p className="pt-1">
                <span className="text-gray-400">E-posta:</span>{" "}
                <a
                  href="mailto:takaslappcom@gmail.com"
                  className="text-gray-200 hover:text-[#00E676] underline transition-colors"
                >
                  takaslappcom@gmail.com
                </a>
              </p>
            </div>

            {/* Quick Corporate Links */}
            <div className="pt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-300">
              <Link href="/hakkimizda" className="hover:text-[#00E676] transition-colors">
                Hakkımızda
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/iletisim" className="hover:text-[#00E676] transition-colors">
                İletişim
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/kariyer" className="hover:text-[#00E676] transition-colors">
                Kariyer
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com/takaslapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#00E676] text-[#00E676] hover:text-black flex items-center justify-center transition-all shadow-sm border border-white/10 hover:border-transparent"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://x.com/takaslapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#00E676] text-[#00E676] hover:text-black flex items-center justify-center transition-all shadow-sm border border-white/10 hover:border-transparent"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Legal & Privacy */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#00E676] rounded-full inline-block" />
              Yasal & Gizlilik
            </h4>
            <ul className="text-xs sm:text-sm text-gray-300 space-y-2.5">
              <li>
                <Link href="/kullanim-kosullari" className="hover:text-[#00E676] transition-colors inline-block py-0.5">
                  Kullanım Koşulları
                </Link>
              </li>
              <li>
                <Link href="/gizlilik-politikasi" className="hover:text-[#00E676] transition-colors inline-block py-0.5">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/kvkk-aydinlatma-metni" className="hover:text-[#00E676] transition-colors inline-block py-0.5">
                  KVKK Aydınlatma Metni
                </Link>
              </li>
              <li>
                <Link href="/cerez-politikasi" className="hover:text-[#00E676] transition-colors inline-block py-0.5">
                  Çerez Politikası
                </Link>
              </li>
              <li>
                <Link href="/topluluk-kurallari" className="hover:text-[#00E676] transition-colors inline-block py-0.5">
                  Topluluk Kuralları
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contracts & Consumer Rights */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#00E676] rounded-full inline-block" />
              Sözleşmeler & Haklar
            </h4>
            <ul className="text-xs sm:text-sm text-gray-300 space-y-2.5">
              <li>
                <Link href="/mesafeli-hizmet-sozlesmesi" className="hover:text-[#00E676] transition-colors inline-block py-0.5">
                  Mesafeli Hizmet Sözleşmesi
                </Link>
              </li>
              <li>
                <Link href="/on-bilgilendirme-formu" className="hover:text-[#00E676] transition-colors inline-block py-0.5">
                  Ön Bilgilendirme Formu
                </Link>
              </li>
              <li>
                <Link href="/iptal-ve-iade-kosullari" className="hover:text-[#00E676] transition-colors inline-block py-0.5">
                  İptal, Cayma ve İade Koşulları
                </Link>
              </li>
              <li>
                <Link href="/hesap-ve-veri-silme" className="hover:text-[#00E676] transition-colors inline-block py-0.5">
                  Hesap ve Veri Silme
                </Link>
              </li>
              <li>
                <Link href="/iletisim-ve-ticari-bilgiler" className="hover:text-[#00E676] transition-colors inline-block py-0.5">
                  İletişim ve Ticari Bilgiler
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Copyright & Assurance */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            © 2026 Takasla. Tüm hakları saklıdır.
          </p>
          <p className="text-gray-400 font-light text-center sm:text-right">
            Parayla Değil, <span className="text-[#00E676] font-medium">Takasla</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
