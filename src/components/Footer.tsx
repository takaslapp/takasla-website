import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative bg-white pt-20 pb-0"
      data-purpose="main-footer"
    >
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

        {/* Bottom Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end justify-between relative z-10">
          <div className="md:col-span-12 space-y-2">
            <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              İletişim
            </h4>
            <div className="text-xs sm:text-sm text-gray-300 space-y-1 font-light leading-relaxed">
              <p className="font-normal text-white">
                Esenler Mh. Horasan Sk. Görgülü Center 4/4
              </p>
              <p className="font-normal text-white">Selçuklu / Konya</p>
              <p className="pt-1 text-gray-300">0505 063 85 43</p>
              <p>
                <a
                  href="mailto:destek@takasla.com"
                  className="text-gray-300 hover:text-[#00E676] underline transition-colors"
                >
                  destek@takasla.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row: Social Icons on Left | Centered Copyright | Legal Links Pill on Right */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 items-center gap-4 relative z-10">
          {/* Social Media Links - ICON ONLY */}
          <div className="flex items-center justify-center md:justify-start gap-3 order-2 md:order-1">
            <Link
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#00E676] text-[#00E676] hover:text-black flex items-center justify-center transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#00E676] text-[#00E676] hover:text-black flex items-center justify-center transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
          </div>

          {/* Copyright Notice Centered */}
          <p className="text-xs sm:text-sm text-gray-400 font-normal text-center order-3 md:order-2">
            © 2026 Takasla. Tüm hakları saklıdır.
          </p>

          {/* Right Column: Cream Pill Badge */}
          <div className="flex justify-center md:justify-end order-1 md:order-3">
            <div className="bg-[#FAF7EE] text-gray-900 px-6 py-2.5 rounded-full text-xs font-semibold flex items-center gap-5 shadow-md">
              <Link href="/cerez-politikasi" className="hover:text-[#00A859] transition-colors">
                Çerez Politikası
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/gizlilik-politikasi" className="hover:text-[#00A859] transition-colors">
                Gizlilik Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
