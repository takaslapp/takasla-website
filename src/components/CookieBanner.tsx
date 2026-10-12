"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("takasla_cookie_consent");
      if (!consent) {
        // Subtle delay for seamless layout entry
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 600);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore localStorage exceptions in restrictive environments
    }
  }, []);

  const handleConsent = (type: "all" | "necessary") => {
    try {
      localStorage.setItem("takasla_cookie_consent", type);
    } catch {
      // ignore
    }
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 250);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Çerez Tercihleri"
      className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-auto sm:max-w-md z-[9999] transition-all duration-250 ease-out pb-[env(safe-area-inset-bottom,0px)] ${
        isClosing
          ? "opacity-0 translate-y-3 pointer-events-none"
          : "opacity-100 translate-y-0"
      }`}
    >
      <div className="bg-[#181A19]/95 text-white border border-white/10 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md">
        <div className="flex items-center justify-between gap-3 mb-2">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            Çerez Tercihleri
          </h2>
          <button
            type="button"
            onClick={() => handleConsent("necessary")}
            className="text-gray-400 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Kapat"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-xs text-gray-300 leading-relaxed mb-4 font-normal">
          Sitemizde kullanıcı deneyimini iyileştirmek, platform trafiğini analiz etmek ve temel fonksiyonları yerine getirmek amacıyla çerezler kullanılmaktadır. Detaylı bilgi için{" "}
          <Link
            href="/cerez-politikasi"
            className="text-[#00E676] hover:underline underline-offset-2"
          >
            Çerez Politikası
          </Link>
          {" "}ve{" "}
          <Link
            href="/gizlilik-politikasi"
            className="text-[#00E676] hover:underline underline-offset-2"
          >
            Gizlilik Politikası
          </Link>
          {" "}sayfalarımızı inceleyebilirsiniz.
        </p>

        <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:justify-end sm:gap-2.5">
          <button
            type="button"
            onClick={() => handleConsent("necessary")}
            className="w-full sm:w-auto px-3.5 py-2.5 sm:py-2 text-xs font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 rounded-xl transition-all text-center"
          >
            Yalnızca Gerekli
          </button>
          <button
            type="button"
            onClick={() => handleConsent("all")}
            className="w-full sm:w-auto px-4 py-2.5 sm:py-2 text-xs font-semibold text-black bg-[#00E676] hover:bg-[#00c966] active:bg-[#00b359] rounded-xl transition-all shadow-sm active:scale-[0.98] text-center"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </aside>
  );
}
