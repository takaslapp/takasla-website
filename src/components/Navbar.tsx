"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Route değiştiğinde mobil menüyü otomatik kapat
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Mobil menü açıkken arkadaki sayfanın kaymasını engelle
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className="container mx-auto px-4 sm:px-6 relative z-50 flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]"
      data-purpose="main-nav"
    >
      {/* Sol Sütun:
          - Mobil & Tablet (< 1024px): Hamburger Butonu
          - Masaüstü (>= 1024px): İlk 3 Menü Öğesi (Ana Sayfa, Hakkımızda, Nasıl Çalışır?)
      */}
      <div className="flex items-center justify-start min-w-0">
        {/* Mobil & Tablet Hamburger Butonu */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/30 text-white transition-colors border border-white/20 cursor-pointer relative z-[60] flex items-center justify-center shadow-md select-none"
          aria-label={mobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
        >
          <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Masaüstü Sol Linkler - Asla satır kırmaz, MacBook ekranlarında ferah durur */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8 text-xs xl:text-sm font-medium text-gray-200 whitespace-nowrap">
          <Link className="hover:text-white transition-colors whitespace-nowrap" href="/">
            Ana Sayfa
          </Link>
          <Link className="hover:text-white transition-colors whitespace-nowrap" href="/hakkimizda">
            Hakkımızda
          </Link>
          <Link className="hover:text-white transition-colors whitespace-nowrap" href="/#nasil-calisir">
            Nasıl Çalışır?
          </Link>
        </div>
      </div>

      {/* Orta Sütun: Takasla Logosu (Ekranın tam ortasında dengeli durur) */}
      <div className="flex items-center justify-center px-4 shrink-0">
        <Link href="/" className="flex items-center group">
          <img
            src="/images/takasla-yesil-logo.webp"
            alt="Takasla"
            width={130}
            height={36}
            className="h-7 sm:h-8 lg:h-9 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </Link>
      </div>

      {/* Sağ Sütun:
          - Masaüstü (>= 1024px): Son 3 Menü Öğesi (SSS, Blog, İletişim) + Sosyal Medya İkonları
          - Mobil & Tablet (< 1024px): Sosyal Medya İkonları
      */}
      <div className="flex items-center justify-end gap-3.5 xl:gap-6 min-w-0">
        {/* Masaüstü Sağ Linkler */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8 text-xs xl:text-sm font-medium text-gray-200 whitespace-nowrap">
          <Link className="hover:text-white transition-colors whitespace-nowrap" href="/#sss">
            SSS
          </Link>
          <Link className="hover:text-white transition-colors whitespace-nowrap" href="/blog">
            Blog
          </Link>
          <Link className="hover:text-white transition-colors whitespace-nowrap" href="/iletisim">
            İletişim
          </Link>
        </div>

        {/* Masaüstünde linkler ile sosyal medya arasına şık dikey çizgi */}
        <div className="hidden lg:block w-px h-4 bg-white/20 shrink-0" aria-hidden="true" />

        {/* Sosyal Medya İkonları */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <a
            href="https://instagram.com/takaslapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#00E676] text-white hover:text-black flex items-center justify-center transition-all shadow-sm"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.441-1.44z" />
            </svg>
          </a>
          <a
            href="https://x.com/takaslapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#00E676] text-white hover:text-black flex items-center justify-center transition-all shadow-sm"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobil Menü Arka Plan Karartması (Dışarı tıklayınca menüyü kapatır) */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99998] lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobil Açılır Menü (Drawer) */}
      <div
        style={{ display: mobileMenuOpen ? "flex" : "none" }}
        className="fixed inset-x-4 top-20 bg-[#121413] text-white border border-white/20 rounded-2xl p-6 flex-col gap-4 text-center lg:hidden shadow-2xl z-[99999]"
      >
        <Link
          onClick={() => setMobileMenuOpen(false)}
          className="text-white hover:text-[#00E676] transition-colors py-3 text-base font-semibold border-b border-white/10"
          href="/"
        >
          Ana Sayfa
        </Link>
        <Link
          onClick={() => setMobileMenuOpen(false)}
          className="text-white hover:text-[#00E676] transition-colors py-3 text-base font-semibold border-b border-white/10"
          href="/hakkimizda"
        >
          Hakkımızda
        </Link>
        <Link
          onClick={() => setMobileMenuOpen(false)}
          className="text-white hover:text-[#00E676] transition-colors py-3 text-base font-semibold border-b border-white/10"
          href="/#nasil-calisir"
        >
          Nasıl Çalışır?
        </Link>
        <Link
          onClick={() => setMobileMenuOpen(false)}
          className="text-white hover:text-[#00E676] transition-colors py-3 text-base font-semibold border-b border-white/10"
          href="/#sss"
        >
          SSS
        </Link>
        <Link
          onClick={() => setMobileMenuOpen(false)}
          className="text-white hover:text-[#00E676] transition-colors py-3 text-base font-semibold border-b border-white/10"
          href="/blog"
        >
          Blog
        </Link>
        <Link
          onClick={() => setMobileMenuOpen(false)}
          className="text-white hover:text-[#00E676] transition-colors py-3 text-base font-semibold border-b border-white/10"
          href="/iletisim"
        >
          İletişim
        </Link>

        {/* Mobil Menü İçi Sosyal Linkler */}
        <div className="pt-2 flex items-center justify-center gap-4">
          <a
            href="https://instagram.com/takaslapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00E676] text-white hover:text-black flex items-center justify-center transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.441-1.44z" />
            </svg>
          </a>
          <a
            href="https://x.com/takaslapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00E676] text-white hover:text-black flex items-center justify-center transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
