import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Takasla İlanı",
  description: "Bu ilan Takasla uygulamasında görüntülenebilir.",
};

interface PageProps {
  params: Promise<{
    code: string;
  }>;
}

export default async function ListingFallbackPage({ params }: PageProps) {
  const { code } = await params;
  const isValid = typeof code === "string" && /^[0-9]{8}$/.test(code.trim());

  return (
    <div className="min-h-screen bg-[#0A1C16] text-white flex flex-col justify-between items-center p-6 relative overflow-hidden font-sans">
      {/* Background radial glow */}
      <div className="hero-glow"></div>

      {/* Top Brand Anchor */}
      <header className="w-full max-w-md pt-4 flex justify-center relative z-10">
        <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95">
          <img
            src="/images/takasla-yesil-logo.png"
            alt="Takasla"
            className="h-9 w-auto object-contain drop-shadow-[0_4px_20px_rgba(34,197,94,0.35)]"
          />
        </Link>
      </header>

      {/* Center Card */}
      <main className="w-full max-w-md my-auto relative z-10 py-8">
        <div className="bg-[#12241D]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl text-center">
          {isValid ? (
            <>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-semibold px-3 py-1 rounded-full mb-6">
                <span>İlan No: #{code}</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-[26px] font-bold text-white mb-3 tracking-tight leading-snug">
                Bu ilan Takasla uygulamasında görüntülenebilir.
              </h1>

              {/* Subtext */}
              <p className="text-sm text-gray-300 mb-8 leading-relaxed">
                İlanı görüntülemek ve takas tekliflerini incelemek için Takasla&apos;yı aç.
              </p>

              {/* Primary CTA: App Store (exact reuse of website button) */}
              <div className="flex flex-col items-center gap-4">
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

                {/* Secondary link */}
                <Link
                  href="/"
                  className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors pt-2 underline underline-offset-4 font-medium"
                >
                  Ana Sayfaya Dön
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Invalid State Icon */}
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-5 shadow-inner">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>

              {/* Invalid Title */}
              <h1 className="text-2xl sm:text-[26px] font-bold text-white mb-3 tracking-tight leading-snug">
                Geçersiz ilan bağlantısı
              </h1>

              {/* Invalid Subtext */}
              <p className="text-sm text-gray-300 mb-8 leading-relaxed">
                Bağlantı adresi eksik veya hatalı görünüyor.
              </p>

              {/* Action */}
              <Link
                href="/"
                className="w-full inline-flex items-center justify-center bg-[#22C55E] hover:bg-[#1eb054] text-black font-semibold px-5 py-3.5 rounded-xl transition-all shadow-lg hover:scale-[1.02] active:scale-95 text-sm"
              >
                Ana Sayfaya Dön
              </Link>
            </>
          )}
        </div>
      </main>

      {/* Subtle Footer info */}
      <footer className="w-full max-w-md pb-4 text-center relative z-10 text-[11px] text-gray-500">
        Parayla değil, Takasla. &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
