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
      type: "website",
      siteName: "Takasla",
      title,
      description,
      url: pageUrl,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: listing.imageUrl ? [listing.imageUrl] : [],
    },
  };
}

export default async function ListingFallbackPage({ params }: PageProps) {
  const { code } = await params;
  const cleanCode = typeof code === "string" ? code.trim() : "";
  const isValidFormat = /^[0-9]{8}$/.test(cleanCode);

  // 1. Format Doğrulama: 8 haneli değilse RPC çağırmadan hata göster
  if (!isValidFormat) {
    return (
      <div className="min-h-screen bg-[#0A1C16] text-white flex flex-col justify-between items-center p-6 relative overflow-hidden font-sans">
        <div className="hero-glow"></div>

        <header className="w-full max-w-md pt-4 flex justify-center relative z-10">
          <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95">
            <img
              src="/images/takasla-yesil-logo.png"
              alt="Takasla"
              className="h-9 w-auto object-contain drop-shadow-[0_4px_20px_rgba(34,197,94,0.35)]"
            />
          </Link>
        </header>

        <main className="w-full max-w-md my-auto relative z-10 py-8">
          <div className="bg-[#12241D]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl text-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-5 shadow-inner">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-3 tracking-tight leading-snug">
              Geçersiz ilan bağlantısı
            </h1>
            <p className="text-sm text-gray-300 mb-8 leading-relaxed">
              Bağlantı adresi eksik veya hatalı görünüyor.
            </p>
            <Link
              href="/"
              className="w-full inline-flex items-center justify-center bg-[#22C55E] hover:bg-[#1eb054] text-black font-semibold px-5 py-3.5 rounded-xl transition-all shadow-lg hover:scale-[1.02] active:scale-95 text-sm"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </main>

        <footer className="w-full max-w-md pb-4 text-center relative z-10 text-[11px] text-gray-500">
          Parayla değil, Takasla. &copy; {new Date().getFullYear()}
        </footer>
      </div>
    );
  }

  // 2. Server-side RPC İlan Sorgusu (React cache() sayesinde duplicate çağrı yapılmaz)
  const listingNo = parseInt(cleanCode, 10);
  const listing = await getPublicListingByNo(listingNo);

  // 3. İlan Bulunamadı / Pasif Durumu
  if (!listing) {
    return (
      <div className="min-h-screen bg-[#0A1C16] text-white flex flex-col justify-between items-center p-6 relative overflow-hidden font-sans">
        <div className="hero-glow"></div>

        <header className="w-full max-w-md pt-4 flex justify-center relative z-10">
          <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95">
            <img
              src="/images/takasla-yesil-logo.png"
              alt="Takasla"
              className="h-9 w-auto object-contain drop-shadow-[0_4px_20px_rgba(34,197,94,0.35)]"
            />
          </Link>
        </header>

        <main className="w-full max-w-md my-auto relative z-10 py-8">
          <div className="bg-[#12241D]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl text-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-5 shadow-inner">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-3 tracking-tight leading-snug">
              Bu ilan artık görüntülenemiyor.
            </h1>
            <p className="text-sm text-gray-300 mb-8 leading-relaxed">
              İlan yayından kaldırılmış veya bağlantı adresi değişmiş olabilir.
            </p>
            <Link
              href="/"
              className="w-full inline-flex items-center justify-center bg-[#22C55E] hover:bg-[#1eb054] text-black font-semibold px-5 py-3.5 rounded-xl transition-all shadow-lg hover:scale-[1.02] active:scale-95 text-sm"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </main>

        <footer className="w-full max-w-md pb-4 text-center relative z-10 text-[11px] text-gray-500">
          Parayla değil, Takasla. &copy; {new Date().getFullYear()}
        </footer>
      </div>
    );
  }

  // 4. Geçerli İlan Kartı (Gerçek İlan Önizlemesi)
  return (
    <div className="min-h-screen bg-[#0A1C16] text-white flex flex-col justify-between items-center p-4 sm:p-6 relative overflow-hidden font-sans">
      <div className="hero-glow"></div>

      {/* Brand Header */}
      <header className="w-full max-w-md pt-2 sm:pt-4 flex justify-center relative z-10">
        <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95">
          <img
            src="/images/takasla-yesil-logo.png"
            alt="Takasla"
            className="h-8 sm:h-9 w-auto object-contain drop-shadow-[0_4px_20px_rgba(34,197,94,0.35)]"
          />
        </Link>
      </header>

      {/* Main Listing Preview Card */}
      <main className="w-full max-w-md my-auto relative z-10 py-6 sm:py-8">
        <div className="bg-[#12241D]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-7 shadow-2xl">
          {/* Listing Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-[#0F2C23] border border-white/10 shadow-lg">
            {listing.imageUrl ? (
              <img
                src={listing.imageUrl}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                <svg className="w-12 h-12 mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs">Görsel bulunmuyor</span>
              </div>
            )}
            <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md text-[#22C55E] text-xs font-semibold px-2.5 py-1 rounded-full border border-white/10">
              #{listing.listingNo}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight leading-snug">
            {listing.title}
          </h1>

          {/* Condition & Location Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {listing.conditionName && (
              <span className="inline-flex items-center gap-1.5 bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-medium px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
                {listing.conditionName}
              </span>
            )}
            {listing.location && (
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/10 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {listing.location}
              </span>
            )}
          </div>

          {/* Short Description */}
          {listing.description && (
            <p className="text-xs sm:text-sm text-gray-300 mb-5 leading-relaxed line-clamp-3 bg-white/5 p-3 rounded-xl border border-white/5">
              {listing.description}
            </p>
          )}

          {/* App Prompt Subtext */}
          <div className="border-t border-white/10 pt-4 mb-4 text-center">
            <p className="text-xs text-gray-300">
              Bu ilan Takasla uygulamasında. İlanı incelemek ve teklif göndermek için Takasla&apos;yı aç.
            </p>
          </div>

          {/* Primary CTA: App Store Button */}
          <div className="flex flex-col items-center gap-3">
            <Link
              href="#"
              className="w-full inline-flex items-center justify-center gap-3 bg-black hover:bg-[#111111] text-white px-5 py-3.5 rounded-xl border border-white/20 hover:border-white/40 transition-all shadow-xl hover:scale-[1.02] active:scale-95 group"
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

            {/* Secondary Link: Home */}
            <Link
              href="/"
              className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors pt-1 underline underline-offset-4 font-medium"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-md pb-3 text-center relative z-10 text-[11px] text-gray-500">
        Parayla değil, Takasla. &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
