"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const APP_STORE_URL =
  "https://apps.apple.com/tr/app/takasla-yeni-nesil-takas/id6812309534?l=tr";

export default function DownloadClient() {
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    // Tarayıcı ve Instagram in-app browser için anında yönlendirme
    const timer = setTimeout(() => {
      try {
        window.location.replace(APP_STORE_URL);
        setRedirected(true);
      } catch {
        window.location.href = APP_STORE_URL;
        setRedirected(true);
      }
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenStore = () => {
    window.location.href = APP_STORE_URL;
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between bg-[#0b0f0d] text-white px-5 py-8 sm:py-12 overflow-hidden selection:bg-[#00D084]/20 selection:text-[#00D084]">
      {/* Arka plan ambient ışık efektleri */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-gradient-to-b from-[#00A86B]/25 via-[#19FF8C]/10 to-transparent blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 w-[420px] h-[420px] bg-[#00A86B]/15 blur-[140px] rounded-full" />

      {/* Üst Logo */}
      <header className="relative z-10 w-full max-w-md flex items-center justify-center pt-2">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 transition-transform duration-200 active:scale-95"
          title="Takasla Ana Sayfa"
        >
          <Image
            src="/images/takasla-yesil-logo.webp"
            alt="Takasla"
            width={140}
            height={42}
            priority
            className="h-9 w-auto object-contain drop-shadow-[0_4px_16px_rgba(0,168,107,0.3)]"
          />
        </Link>
      </header>

      {/* Ana Kart / İçerik */}
      <main className="relative z-10 w-full max-w-sm mx-auto my-auto flex flex-col items-center text-center">
        {/* Uygulama İkonu */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-tr from-[#00A86B] via-[#19FF8C] to-[#00A86B] opacity-75 blur-md animate-pulse" />
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-[24px] overflow-hidden bg-black/60 border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
            <Image
              src="/images/takasla-icon.jpg"
              alt="Takasla Uygulama İkonu"
              fill
              sizes="128px"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Başlık & Slogan */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14231b] border border-[#00A86B]/30 text-xs font-semibold text-[#19FF8C] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#19FF8C] animate-ping" />
          App Store&apos;da Yayında
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1.5 font-[family-name:var(--font-outfit)]">
          Takasla
        </h1>
        <p className="text-sm sm:text-base text-gray-300 font-medium mb-5">
          Yeni Nesil Eşya Takası Platformu
        </p>

        {/* Rozetler */}
        <div className="flex items-center justify-center gap-2 mb-6 text-xs text-gray-300 font-medium">
          <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
            ⭐️ 5.0 (Puan)
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
            📦 Eşya Takası
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[#00A86B]/15 border border-[#00A86B]/30 text-[#19FF8C]">
            Ücretsiz
          </span>
        </div>

        {/* Otomatik Yönlendirme Bildirimi */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 bg-white/[0.03] border border-white/[0.08] px-3.5 py-2 rounded-xl">
          <div className="w-2 h-2 rounded-full bg-[#19FF8C] animate-pulse" />
          <span>App Store&apos;a yönlendiriliyorsunuz...</span>
        </div>

        {/* Ana İndir / Aç Butonu */}
        <a
          href={APP_STORE_URL}
          onClick={handleOpenStore}
          className="group relative w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#00A86B] to-[#008f5a] hover:from-[#00ba77] hover:to-[#00a86b] text-white font-bold text-base shadow-[0_10px_30px_rgba(0,168,107,0.4)] hover:shadow-[0_12px_36px_rgba(0,168,107,0.6)] active:scale-[0.98] transition-all duration-200 border border-white/20"
        >
          {/* Apple Logo SVG */}
          <svg
            className="w-6 h-6 fill-current text-white shrink-0 drop-shadow-sm"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.93.04-2.02.63-2.67 1.39-.58.67-.99 1.74-.85 2.77 1.04.08 2-.54 2.6-1.29z" />
          </svg>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[11px] font-medium text-white/90 uppercase tracking-wider">
              Hemen İndir
            </span>
            <span className="text-base font-bold text-white tracking-wide">
              App Store&apos;da Aç
            </span>
          </div>
        </a>

        {/* Yardımcı metin */}
        <p className="mt-3.5 text-[11px] text-gray-500">
          Otomatik açılmadıysa yukarıdaki butona dokunun
        </p>

        {/* Öne Çıkan Özellikler */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] w-full grid grid-cols-3 gap-2 text-center">
          <div className="flex flex-col items-center">
            <span className="text-base mb-0.5">🛡️</span>
            <span className="text-[11px] font-semibold text-gray-300">Güvenli</span>
            <span className="text-[9px] text-gray-500">Kullanıcı Doğrulama</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base mb-0.5">🪙</span>
            <span className="text-[11px] font-semibold text-gray-300">TakasPara</span>
            <span className="text-[9px] text-gray-500">Adil Değerleme</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base mb-0.5">⚡</span>
            <span className="text-[11px] font-semibold text-gray-300">Hızlı</span>
            <span className="text-[9px] text-gray-500">Anında Eşleşme</span>
          </div>
        </div>
      </main>

      {/* Alt Bilgi */}
      <footer className="relative z-10 w-full max-w-sm text-center pt-6">
        <Link
          href="/"
          className="text-xs text-gray-400 hover:text-[#19FF8C] transition-colors underline-offset-4 hover:underline"
        >
          takaslapp.com web sitesine git →
        </Link>
      </footer>
    </div>
  );
}
