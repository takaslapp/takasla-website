import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FaqSection from "@/components/FaqSection";
import StatementSection from "@/components/StatementSection";

export default function Home() {
  return (
    <>
      {/* BEGIN: Hero Section (Full Viewport Height on PC) */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white min-h-screen lg:h-screen lg:max-h-screen overflow-hidden flex flex-col justify-between pt-5"
        style={{ backgroundImage: "url('/images/hero.webp')" }}
        data-purpose="hero-section"
      >
        {/* Balanced overlay preserving image vibrance and text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/40 pointer-events-none z-0"></div>
        <div className="hero-glow"></div>

        {/* BEGIN: Navigation (With Hamburger Menu for Mobile) */}
        <Navbar />
        {/* END: Navigation */}

        {/* BEGIN: Hero Content */}
        <main
          className="container mx-auto px-6 relative z-10 flex-grow flex flex-col items-center text-center justify-center pt-20 sm:pt-28 lg:pt-36 pb-20 sm:pb-28"
          data-purpose="hero-content"
        >
          {/* Main Slogan */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold leading-tight mb-4 max-w-4xl tracking-tight text-white drop-shadow-md flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3.5 md:gap-x-4 gap-y-2">
            <span>Parayla değil,</span>
            <img
              src="/images/takasla-yesil-logo.png"
              alt="takasla"
              className="h-8 sm:h-10 md:h-12 lg:h-[52px] w-auto object-contain inline-block drop-shadow-[0_4px_20px_rgba(190,243,73,0.35)]"
            />
          </h1>

          {/* Subtitle */}
          <p className="text-gray-200 text-xs md:text-sm lg:text-base max-w-2xl mb-6 leading-relaxed font-light drop-shadow-sm">
            Kullanmadığın eşyaları ilana koy, aradığın ürünleri keşfet ve yeni bir şey
            satın almadan takas yap.
          </p>

          {/* Apple App Store Corporate Button Centered */}
          <div className="flex items-center justify-center mb-6">
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

        </main>
        {/* END: Hero Content */}
      </section>
      {/* END: Hero Section */}


      {/* BEGIN: Statement Section with Inline Emojis & Pills */}
      <StatementSection />
      {/* END: Statement Section */}

      {/* BEGIN: About Us Section */}
      <section className="py-24 bg-white" data-purpose="about-section">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h4 className="text-brand-green font-semibold mb-4 text-xs tracking-wider uppercase">
              Hakkımızda
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Kapsamlı ve Akıllı Takas Çözümleri
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
              Para harcamadan elindeki eşyaları değerlendir, aradığın ürünlere
              güvenle ve kolayca ulaş.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            {/* Left: Image & Stats Mockup */}
            <div className="relative">
              <div className="bg-brand-primary rounded-3xl w-4/5 h-[400px] absolute bottom-0 left-0 -z-10 rounded-tl-none rounded-br-none translate-y-6 -translate-x-6"></div>
              <img
                alt="User working on laptop"
                className="rounded-2xl object-cover w-full h-[450px] shadow-lg grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNZVq-csl6EX2bbdgv5a9kLDiLtRmqihnbVbPfhpcFijxUbvsLc-jqtlDrM9s0bWvxha7crC84i52JI8xzAvEQRDD62EFG6Xl6-SzdlNi0L5Uo0QQZUbuXrAJp2VqbtKKsFYaYtJIAlnNZVZ7rndVool9meG6oy0ssko0C6CvG9gIkINY0igd0p0ng6_kOW5Sj_BumQq8jUKJ04PiKvYZjUTNdCkS7giwUhSHVUOePTZNOOOxufrRS"
              />

              {/* Overlay Stats Widget */}
              <div className="absolute -left-10 bottom-10 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 grid grid-cols-2 gap-4 w-[320px]">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-50">
                  <p className="text-[10px] text-gray-500 font-medium mb-1">
                    Toplam Takas
                  </p>
                  <div className="flex items-end justify-between">
                    <p className="text-sm font-bold text-brand-green">14.850+</p>
                    <span className="text-xs text-gray-500 font-medium">+%8</span>
                  </div>
                  {/* Mini chart placeholder */}
                  <svg
                    className="w-full h-8 mt-2 text-brand-green"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 30"
                  >
                    <path
                      d="M0,30 L10,20 L30,25 L50,10 L70,15 L90,5 L100,20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-50">
                  <p className="text-[10px] text-gray-500 font-medium mb-1">
                    Toplam Tasarruf
                  </p>
                  <div className="flex items-end justify-between">
                    <p className="text-sm font-bold text-brand-green">₺8.450.000</p>
                    <span className="text-xs text-gray-500 font-medium">+%6</span>
                  </div>
                  {/* Mini chart placeholder */}
                  <svg
                    className="w-full h-8 mt-2 text-brand-green"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 30"
                  >
                    <path
                      d="M0,20 L15,25 L35,15 L55,20 L75,5 L100,10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-50">
                  <p className="text-[10px] text-gray-500 font-medium mb-1">
                    Aktif İlanlar
                  </p>
                  <div className="flex items-end justify-between">
                    <p className="text-sm font-bold text-brand-green">42.689</p>
                    <span className="text-xs text-gray-500 font-medium">+%4</span>
                  </div>
                  {/* Mini chart placeholder */}
                  <svg
                    className="w-full h-8 mt-2 text-brand-green"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 30"
                  >
                    <path
                      d="M0,15 L20,10 L40,20 L60,5 L80,15 L100,10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-50">
                  <p className="text-[10px] text-gray-500 font-medium mb-1">
                    Başarı Oranı
                  </p>
                  <div className="flex items-end justify-between">
                    <p className="text-sm font-bold text-brand-green">%98.4</p>
                    <span className="text-xs text-gray-500 font-medium">+%4</span>
                  </div>
                  {/* Mini chart placeholder */}
                  <svg
                    className="w-full h-8 mt-2 text-brand-green"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 30"
                  >
                    <path
                      d="M0,25 L20,15 L40,20 L60,10 L80,15 L100,5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right: Feature List */}
            <div className="pl-0 md:pl-10">
              <h3 className="text-xl font-bold text-gray-900 mb-10">
                Akıllı Takas Çözümleri
              </h3>
              <div className="space-y-8">
                {/* Feature Item 1 */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 bg-gray-50 px-4 py-2 rounded-lg">
                    <span className="text-xs font-semibold text-brand-green">
                      Büyüme
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      İster bireysel ister kurumsal olun, takas araçlarımız
                      her zaman avantajlı kalmanızı sağlar.
                    </p>
                  </div>
                </div>

                {/* Feature Item 2 */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 bg-gray-50 px-4 py-2 rounded-lg">
                    <span className="text-xs font-semibold text-brand-green">
                      Kolaylık
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Eşleşen teklifleri kolayca yönetin, anlık bildirimlerle
                      takas sürecinizi hızlandırın.
                    </p>
                  </div>
                </div>

                {/* Feature Item 3 */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 bg-gray-50 px-4 py-2 rounded-lg">
                    <span className="text-xs font-semibold text-brand-green">
                      Akıllı
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Yapay zeka destekli değer eşleştirme ile her zaman adil
                      ve güvenilir takas yapın.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BEGIN: FAQ Section */}
      <FaqSection />
      {/* END: FAQ Section */}

      {/* BEGIN: Footer Section */}
      <Footer />
      {/* END: Footer Section */}
    </>
  );
}
