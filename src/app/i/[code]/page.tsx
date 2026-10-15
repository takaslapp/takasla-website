import Link from "next/link";
import type { Metadata } from "next";
import { getPublicListingByNo } from "@/lib/listing-share";
import ListingSlider from "@/components/listing/ListingSlider";
import ListingShareActions from "@/components/listing/ListingShareActions";
import ListingStickyBar from "@/components/listing/ListingStickyBar";
import Footer from "@/components/Footer";

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
      title: { absolute: "Geçersiz İlan Bağlantısı - Takasla" },
      description: "Bağlantı adresi eksik veya hatalı görünüyor.",
      robots: { index: false, follow: false },
    };
  }

  const listingNo = parseInt(cleanCode, 10);
  const listing = await getPublicListingByNo(listingNo);

  if (!listing) {
    return {
      title: { absolute: "İlan Bulunamadı - Takasla" },
      description: "Bu ilan artık yayında değil veya kaldırılmış olabilir.",
      robots: { index: false, follow: false },
    };
  }

  const rawTitle = listing.title?.trim() || "Ürün İlanı";
  const title = `${rawTitle} - Takasla`;
  
  const conditionText = listing.conditionName ? `Durum: ${listing.conditionName}.` : "";
  const locationText = listing.location ? `Konum: ${listing.location}.` : "";
  const description =
    listing.description && listing.description.length > 0
      ? `${listing.description.slice(0, 150)}... ${locationText} Takasla mobil uygulamasında inceleyin.`
      : `${rawTitle} ilanı Takasla'da. ${conditionText} ${locationText} Detayları görmek ve takas teklifi vermek için Takasla uygulamasını indirin.`;

  const pageUrl = `https://takaslapp.com/i/${listing.listingNo}`;
  const images = listing.imageUrl
    ? [
        {
          url: listing.imageUrl,
          width: 800,
          height: 800,
          alt: `${rawTitle} - Takasla`,
        },
      ]
    : [];

  return {
    title: { absolute: title },
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
      locale: "tr_TR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: listing.imageUrl ? [listing.imageUrl] : [],
    },
  };
}

function formatDate(dateStr?: string | null): string | null {
  if (!dateStr) return null;
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return null;
  }
}

export default async function ListingPreviewPage({ params }: PageProps) {
  const { code } = await params;
  const cleanCode = typeof code === "string" ? code.trim() : "";
  const isValidFormat = /^[0-9]{8}$/.test(cleanCode);

  // 1. Format Hatası Durumu
  if (!isValidFormat) {
    return (
      <div className="min-h-screen bg-[#FAF9F5] text-gray-800 flex flex-col justify-between font-sans">
        <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img
                src="/images/takasla-yesil-logo.webp"
                alt="Takasla"
                className="h-7 w-auto object-contain"
              />
            </Link>
            <Link
              href="/"
              className="text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Ana Sayfa
            </Link>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-xs">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4 border border-amber-100">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-lg font-bold text-gray-900 mb-2">
              Geçersiz İlan Bağlantısı
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
              Görüntülemek istediğiniz bağlantı formatı eksik veya geçersiz.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-black text-white font-medium px-5 py-2.5 rounded-xl transition-all text-xs sm:text-sm shadow-xs"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </main>

        <Footer outerBg="bg-[#FAF9F5]" />
      </div>
    );
  }

  // 2. Veri Çekme
  const listingNo = parseInt(cleanCode, 10);
  const listing = await getPublicListingByNo(listingNo);

  // 3. İlan Bulunamadı Durumu
  if (!listing) {
    return (
      <div className="min-h-screen bg-[#FAF9F5] text-gray-800 flex flex-col justify-between font-sans">
        <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img
                src="/images/takasla-yesil-logo.webp"
                alt="Takasla"
                className="h-7 w-auto object-contain"
              />
            </Link>
            <Link
              href="/"
              className="text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Ana Sayfa
            </Link>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-xs">
            <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mx-auto mb-4 border border-gray-200">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h1 className="text-lg font-bold text-gray-900 mb-2">
              İlan Bulunamadı
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
              Bu ilan yayından kaldırılmış veya bağlantı adresi değişmiş olabilir.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-black text-white font-medium px-5 py-2.5 rounded-xl transition-all text-xs sm:text-sm shadow-xs"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </main>

        <Footer outerBg="bg-[#FAF9F5]" />
      </div>
    );
  }

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: listing.title,
    image: listing.images.length > 0 ? listing.images : (listing.imageUrl ? [listing.imageUrl] : []),
    description: listing.description || `${listing.title} Takasla ilan detayları.`,
    category: listing.category,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
      itemCondition: listing.conditionName?.includes("Sıfır")
        ? "https://schema.org/NewCondition"
        : "https://schema.org/UsedCondition",
    },
  };

  const formattedDate = formatDate(listing.createdAt);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-gray-800 flex flex-col justify-between font-sans pb-20 md:pb-0">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="w-full border-b border-gray-200/80 bg-white sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/images/takasla-yesil-logo.webp"
              alt="Takasla"
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="#uygulamayi-indir"
              className="hidden sm:inline-flex items-center justify-center bg-gray-900 hover:bg-black text-white font-medium text-xs sm:text-sm px-4 py-2 rounded-xl transition-all shadow-xs"
            >
              Uygulamayı İndir
            </Link>
            <Link
              href="/"
              className="text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Ana Sayfa
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-5 text-xs text-gray-500 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Ana Sayfa
          </Link>
          <span className="text-gray-300">/</span>
          {listing.category && (
            <>
              <span className="text-gray-600">{listing.category}</span>
              <span className="text-gray-300">/</span>
            </>
          )}
          <span className="text-gray-900 font-medium">#{listing.listingNo}</span>
        </nav>

        {/* 2-Column Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Swipeable Images */}
          <div className="lg:col-span-6">
            <ListingSlider
              images={listing.images}
              title={listing.title}
            />
          </div>

          {/* Right Column: Listing Details */}
          <div className="lg:col-span-6 space-y-6">
            {/* Meta & Share Actions */}
            <ListingShareActions listingNo={listing.listingNo} title={listing.title} />

            {/* Product Title */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-snug">
                {listing.title}
              </h1>
              {formattedDate && (
                <p className="text-xs text-gray-500 mt-1">
                  Yayınlanma Tarihi: {formattedDate}
                </p>
              )}
            </div>

            {/* Specifications Table */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                İlan Bilgileri
              </h2>

              <div className="divide-y divide-gray-100 text-sm">
                {listing.conditionName && (
                  <div className="py-2.5 flex justify-between items-center gap-4">
                    <span className="text-gray-500">Ürün Durumu</span>
                    <span className="font-semibold text-gray-900 text-right">
                      {listing.conditionName}
                    </span>
                  </div>
                )}

                {listing.location && (
                  <div className="py-2.5 flex justify-between items-center gap-4">
                    <span className="text-gray-500">Konum</span>
                    <span className="font-semibold text-gray-900 text-right">
                      {listing.location}
                    </span>
                  </div>
                )}

                {listing.category && (
                  <div className="py-2.5 flex justify-between items-center gap-4">
                    <span className="text-gray-500">Kategori</span>
                    <span className="font-semibold text-gray-900 text-right">
                      {listing.category}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Wanted Item (Takas Tercihi) */}
            {listing.wantedItem && (
              <div className="bg-white border border-gray-200/90 rounded-2xl p-4 sm:p-5 shadow-xs">
                <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  İlan Sahibinin Aradığı Ürünler
                </h2>
                <p className="text-sm font-medium text-gray-800 leading-relaxed">
                  {listing.wantedItem}
                </p>
              </div>
            )}

            {/* Description */}
            {listing.description ? (
              <div className="bg-white border border-gray-200/90 rounded-2xl p-4 sm:p-5 shadow-xs">
                <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Açıklama
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {listing.description}
                </p>
              </div>
            ) : null}

            {/* Seller Info */}
            {listing.seller && (listing.seller.fullName || listing.seller.username) && (
              <div className="bg-white border border-gray-200/90 rounded-2xl p-4 flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 text-gray-700 flex items-center justify-center font-bold text-xs shrink-0">
                    {listing.seller.fullName
                      ? listing.seller.fullName.slice(0, 2).toUpperCase()
                      : "TK"}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {listing.seller.fullName || listing.seller.username}
                    </p>
                    {listing.seller.username && (
                      <p className="text-xs text-gray-400">@{listing.seller.username}</p>
                    )}
                  </div>
                </div>

                {typeof listing.seller.rating === "number" && (
                  <div className="flex items-center gap-1 text-xs font-medium text-gray-600 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-200/60">
                    <span className="text-amber-500">★</span>
                    <span>{listing.seller.rating.toFixed(1)}</span>
                  </div>
                )}
              </div>
            )}

            {/* Minimal App Conversion Card */}
            <section
              id="uygulamayi-indir"
              className="bg-white border border-gray-200/90 rounded-2xl p-5 sm:p-6 shadow-xs text-center"
            >
              <h3 className="text-base font-bold text-gray-900 mb-1.5">
                Takas Teklifi Gönderin
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-5 max-w-sm mx-auto leading-relaxed">
                Bu ilan Takasla mobil uygulamasında yayındadır. İlan sahibiyle mesajlaşmak ve takas teklifi vermek için uygulamayı indirin.
              </p>

              {/* Store Button */}
              <div className="flex justify-center">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2.5 bg-black hover:bg-gray-900 text-white px-5 py-2.5 rounded-xl transition-all shadow-xs active:scale-95"
                >
                  <img
                    src="/images/apple-logo.webp"
                    alt="App Store"
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain brightness-0 invert"
                  />
                  <div className="flex flex-col text-left leading-none">
                    <span className="text-[9px] text-gray-300 font-normal">App Store&apos;da</span>
                    <span className="text-xs font-semibold text-white mt-0.5">Çok Yakında</span>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer outerBg="bg-[#FAF9F5]" showAboutTeaser={false} />

      {/* Mobile Sticky Bar */}
      <ListingStickyBar
        listingNo={listing.listingNo}
        title={listing.title}
        conditionName={listing.conditionName}
        imageUrl={listing.imageUrl}
      />
    </div>
  );
}
