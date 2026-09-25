import Link from "next/link";
import type { Metadata } from "next";
import { getPublicListingByNo } from "@/lib/listing-share";

interface PageProps {
  params: Promise<{
    code: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params;
  const cleanCode = typeof code === "string" ? code.trim() : "";
  const isValidFormat = /^[0-9]{8}$/.test(cleanCode);

  if (!isValidFormat) {
    return {
      title: "Geçersiz İlan Bağlantısı - Takasla",
      description: "Bağlantı adresi eksik veya hatalı görünüyor.",
      robots: { index: false, follow: false },
    };
  }

  const listingNo = parseInt(cleanCode, 10);
  const listing = await getPublicListingByNo(listingNo);

  if (!listing) {
    return {
      title: "İlan Bulunamadı - Takasla",
      description: "Bu ilan artık görüntülenemiyor.",
      robots: { index: false, follow: false },
    };
  }

  const title = `${listing.title} | Takasla`;
  const description =
    listing.description && listing.description.length > 0
      ? listing.description.length > 160
        ? `${listing.description.slice(0, 157)}...`
        : listing.description
      : "Bu ilana Takasla'da göz at.";

  const pageUrl = `https://takaslapp.com/i/${listing.listingNo}`;
  const images = listing.imageUrl
    ? [
        {
          url: listing.imageUrl,
          alt: listing.title,
        },
      ]
    : [];

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "Takasla",
      images,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: listing.imageUrl ? [listing.imageUrl] : [],
    },
  };
}

export default async function ListingPreviewPage({ params }: PageProps) {
  const { code } = await params;
  const cleanCode = typeof code === "string" ? code.trim() : "";
  const isValidFormat = /^[0-9]{8}$/.test(cleanCode);

  // 1. Format Doğrulama Hatası
  if (!isValidFormat) {
    return (
      <div className="min-h-screen bg-[#0E1110] text-zinc-100 flex flex-col justify-between font-sans selection:bg-[#22C55E]/30 selection:text-white">
        {/* Top Header */}
        <header className="w-full border-b border-white/[0.08] bg-[#121514]/80 backdrop-blur-md sticky top-0 z-30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center transition-opacity hover:opacity-85">
              <img
                src="/images/takasla-yesil-logo.png"
                alt="Takasla"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </Link>
            <Link
              href="/"
              className="text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Ana Sayfa
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md bg-[#161917] border border-white/[0.08] rounded-2xl p-6 sm:p-8 text-center shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-white mb-2 tracking-tight">
              Geçersiz İlan Bağlantısı
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
              Görüntülemek istediğiniz bağlantı formatı hatalı veya eksik.
            </p>
            <Link
              href="/"
              className="w-full inline-flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white font-medium px-4 py-2.5 rounded-xl border border-white/10 transition-all text-xs sm:text-sm"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-white/[0.06] py-5 text-center text-xs text-zinc-500">
          Parayla değil, Takasla. &copy; {new Date().getFullYear()} Tüm hakları saklıdır.
        </footer>
      </div>
    );
  }

  // 2. Veri Çekme
  const listingNo = parseInt(cleanCode, 10);
  const listing = await getPublicListingByNo(listingNo);

  // 3. İlan Bulunamadı / Pasif Durumu
  if (!listing) {
    return (
      <div className="min-h-screen bg-[#0E1110] text-zinc-100 flex flex-col justify-between font-sans selection:bg-[#22C55E]/30 selection:text-white">
        {/* Top Header */}
        <header className="w-full border-b border-white/[0.08] bg-[#121514]/80 backdrop-blur-md sticky top-0 z-30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center transition-opacity hover:opacity-85">
              <img
                src="/images/takasla-yesil-logo.png"
                alt="Takasla"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </Link>
            <Link
              href="/"
              className="text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Ana Sayfa
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md bg-[#161917] border border-white/[0.08] rounded-2xl p-6 sm:p-8 text-center shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/10 text-zinc-400 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-white mb-2 tracking-tight">
              Bu ilan artık görüntülenemiyor.
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
              İlan yayından kaldırılmış, takas tamamlanmış veya bağlantı adresi değişmiş olabilir.
            </p>
            <Link
              href="/"
              className="w-full inline-flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white font-medium px-4 py-2.5 rounded-xl border border-white/10 transition-all text-xs sm:text-sm"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-white/[0.06] py-5 text-center text-xs text-zinc-500">
          Parayla değil, Takasla. &copy; {new Date().getFullYear()} Tüm hakları saklıdır.
        </footer>
      </div>
    );
  }

  // 4. Geçerli İlan Kartı (Kurumsal & Profesyonel Tasarım)
  return (
    <div className="min-h-screen bg-[#0E1110] text-zinc-100 flex flex-col justify-between font-sans selection:bg-[#22C55E]/30 selection:text-white">
      {/* Top Header */}
      <header className="w-full border-b border-white/[0.08] bg-[#121514]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-85">
            <img
              src="/images/takasla-yesil-logo.png"
              alt="Takasla"
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Ana Sayfa
            </Link>
          </div>
        </div>
      </header>

      {/* Main Listing View */}
      <main className="flex-1 w-full max-w-xl mx-auto px-4 py-6 sm:py-8">
        <div className="bg-[#151817] border border-white/[0.08] rounded-2xl shadow-xl overflow-hidden">
          {/* Listing Image Container */}
          <div className="relative w-full aspect-[4/3] bg-[#1a1e1c] flex items-center justify-center overflow-hidden border-b border-white/[0.06]">
            {listing.imageUrl ? (
              <img
                src={listing.imageUrl}
                alt={listing.title}
                className="w-full h-full object-contain p-2 sm:p-3"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-zinc-500">
                <svg className="w-12 h-12 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs font-medium">Görsel bulunmuyor</span>
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="p-5 sm:p-7">
            {/* Meta Row: Listing No & Status */}
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase font-medium">
                İlan No: #{listing.listingNo}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Takasa Açık
              </span>
            </div>

            {/* Listing Title */}
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-4">
              {listing.title}
            </h1>

            {/* Structured Specifications Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {listing.conditionName && (
                <div className="bg-[#1C201E] border border-white/[0.06] rounded-xl p-3 sm:p-3.5 flex flex-col justify-center">
                  <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
                    Ürün Durumu
                  </span>
                  <span className="text-sm font-semibold text-zinc-100 mt-1">
                    {listing.conditionName}
                  </span>
                </div>
              )}
              {listing.location && (
                <div className="bg-[#1C201E] border border-white/[0.06] rounded-xl p-3 sm:p-3.5 flex flex-col justify-center">
                  <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
                    Konum
                  </span>
                  <span className="text-sm font-semibold text-zinc-100 mt-1 truncate flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {listing.location}
                  </span>
                </div>
              )}
            </div>

            {/* Description (if present) */}
            {listing.description && (
              <div className="mb-6 pt-4 border-t border-white/[0.06]">
                <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  İlan Açıklaması
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed whitespace-pre-line bg-[#1A1D1B] p-3.5 rounded-xl border border-white/[0.04]">
                  {listing.description}
                </p>
              </div>
            )}

            {/* Corporate Callout / Conversion Card */}
            <div className="bg-[#19221D] border border-[#273B30] rounded-xl p-4 sm:p-5 mt-4 text-center">
              <h3 className="text-sm font-semibold text-white tracking-tight mb-1">
                Takas Teklifi Gönderin
              </h3>
              <p className="text-xs text-zinc-300 mb-4 max-w-sm mx-auto leading-relaxed">
                Bu ilan Takasla mobil uygulamasında yayındadır. İlan sahibiyle mesajlaşmak ve takas teklifi göndermek için Takasla&apos;yı indirin.
              </p>

              {/* App Store Corporate Button */}
              <div className="flex justify-center">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-3 bg-black hover:bg-[#111111] text-white px-5 py-3 rounded-xl border border-white/20 hover:border-white/40 transition-all shadow-lg hover:scale-[1.02] active:scale-98 group"
                >
                  <img
                    src="/images/apple-logo.png"
                    alt="Apple"
                    className="w-5 h-5 object-contain brightness-0 invert"
                  />
                  <div className="flex flex-col text-left leading-none">
                    <span className="text-[10px] text-zinc-400 font-normal tracking-wide">
                      App Store&apos;dan
                    </span>
                    <span className="text-sm font-semibold text-white tracking-tight mt-0.5">
                      İndirin
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/[0.06] py-5 text-center text-xs text-zinc-500">
        Parayla değil, Takasla. &copy; {new Date().getFullYear()} Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
