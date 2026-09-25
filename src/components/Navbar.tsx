"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="container mx-auto px-4 sm:px-6 relative z-50 flex items-center justify-between md:grid md:grid-cols-3"
      data-purpose="main-nav"
    >
      {/* Left Column: Hamburger Button on Mobile | Desktop Links on Desktop */}
      <div className="flex items-center justify-start">
        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/30 text-white transition-colors border border-white/20 cursor-pointer relative z-[60] flex items-center justify-center shadow-md select-none"
          aria-label="Menüyü Aç/Kapat"
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

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-200">
          <Link className="hover:text-white transition-colors" href="#">
            Ana Sayfa
          </Link>
          <Link className="hover:text-white transition-colors" href="#nasil-calisir">
            Nasıl Çalışır?
          </Link>
          <Link className="hover:text-white transition-colors" href="#guvenli-takas">
            Güvenli Takas
          </Link>
          <Link className="hover:text-white transition-colors" href="#sss">
            SSS
          </Link>
        </div>
      </div>

      {/* Center: Takasla Logo */}
      <div className="flex items-center justify-center">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/images/takasla-simge.webp"
            alt="Takasla Logo"
            className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform drop-shadow-[0_4px_16px_rgba(0,230,118,0.5)]"
          />
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white font-sans">
            Takasla
          </span>
        </Link>
      </div>

      {/* Right: Social Media Icons */}
      <div className="flex items-center gap-2 sm:gap-3 justify-end">
        <Link
          href="#"
          aria-label="Facebook"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#00E676] text-white hover:text-black flex items-center justify-center transition-all shadow-sm"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </Link>
        <Link
          href="#"
          aria-label="Instagram"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#00E676] text-white hover:text-black flex items-center justify-center transition-all shadow-sm"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </Link>
        <Link
          href="#"
          aria-label="LinkedIn"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#00E676] text-white hover:text-black flex items-center justify-center transition-all shadow-sm"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </Link>
      </div>

      {/* Mobile Drawer Menu Overlay (Rendered using inline display style) */}
      <div
        style={{ display: mobileMenuOpen ? "flex" : "none" }}
        className="fixed inset-x-4 top-20 bg-[#121413] text-white border border-white/20 rounded-2xl p-6 flex-col gap-4 text-center md:hidden shadow-2xl z-[99999]"
      >
        <Link
          onClick={() => setMobileMenuOpen(false)}
          className="text-white hover:text-[#00E676] transition-colors py-3 text-base font-semibold border-b border-white/10"
          href="#"
        >
          Ana Sayfa
        </Link>
        <Link
          onClick={() => setMobileMenuOpen(false)}
          className="text-white hover:text-[#00E676] transition-colors py-3 text-base font-semibold border-b border-white/10"
          href="#nasil-calisir"
        >
          Nasıl Çalışır?
        </Link>
        <Link
          onClick={() => setMobileMenuOpen(false)}
          className="text-white hover:text-[#00E676] transition-colors py-3 text-base font-semibold border-b border-white/10"
          href="#guvenli-takas"
        >
          Güvenli Takas
        </Link>
        <Link
          onClick={() => setMobileMenuOpen(false)}
          className="text-white hover:text-[#00E676] transition-colors py-3 text-base font-semibold"
          href="#sss"
        >
          SSS
        </Link>
      </div>
    </nav>
  );
}
