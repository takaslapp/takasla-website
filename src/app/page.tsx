import Link from "next/link";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StatementSection from "@/components/StatementSection";
import AppShowcase from "@/components/AppShowcase";
import HomeBlogSection from "@/components/HomeBlogSection";

const FaqSection = dynamic(() => import("@/components/FaqSection"));

export default function Home() {
  return (
    <>
      {/* BEGIN: Hero Section (Full Viewport Height on PC) */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white min-h-screen lg:h-screen lg:max-h-screen overflow-hidden flex flex-col justify-between pt-5"
        style={{ backgroundImage: "url('/images/takasla-hero.webp')" }}
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
          {/* Main Slogan & Semantic H1 for SEO */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold leading-tight mb-4 max-w-4xl tracking-tight text-white drop-shadow-md flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3.5 md:gap-x-4 gap-y-2">
            <span>Parayla değil,</span>
            <img
              src="/images/takasla-yesil-logo.webp"
              alt="Takasla - Yeni Nesil Eşya Takası Platformu"
              width={193}
              height={52}
              fetchPriority="high"
              className="h-8 sm:h-10 md:h-12 lg:h-[52px] w-auto object-contain inline-block drop-shadow-[0_4px_20px_rgba(190,243,73,0.35)]"
            />
            <span className="sr-only">Takasla - Türkiye&apos;nin Yeni Nesil Eşya Takası ve İkinci El Takas Platformu</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-200 text-xs md:text-sm lg:text-base max-w-2xl mb-6 leading-relaxed font-light drop-shadow-sm">
            Kullanmadığın eşyaları ilana koy, aradığın ürünleri keşfet ve yeni bir şey
            satın almadan takas yap.
          </p>

          {/* Apple App Store Corporate Button Centered */}
          <div className="flex items-center justify-center mb-6">
            <Link
              href="https://apps.apple.com/app/takasla-yeni-nesil-takas/id6812309534"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black hover:bg-[#111111] text-white px-5 py-2.5 rounded-xl border border-white/20 hover:border-white/40 transition-all shadow-xl hover:scale-105 active:scale-95 group"
            >
              <img
                src="/images/apple-logo.webp"
                alt="Apple App Store"
                width={24}
                height={24}
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

      {/* BEGIN: App Showcase Section (5 Mobile Screens) */}
      <AppShowcase />
      {/* END: App Showcase Section */}

      {/* BEGIN: Latest Blog & Guides Section for Internal Linking & SEO */}
      <HomeBlogSection />
      {/* END: Latest Blog & Guides Section */}

      {/* BEGIN: FAQ Section */}
      <FaqSection />
      {/* END: FAQ Section */}

      {/* BEGIN: Footer Section */}
      <Footer showAboutTeaser={true} outerBg="bg-white" />
      {/* END: Footer Section */}
    </>
  );
}
