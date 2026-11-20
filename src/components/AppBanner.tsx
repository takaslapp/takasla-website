"use client";

import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { ANDROID_PACKAGE, ANDROID_RELEASED, APP_STORE_URL, PLAY_STORE_URL, SITE_URL } from "@/lib/site";

const DISMISS_KEY = "takasla_uygulama_banner";
const DISMISS_DAYS = 14;

type Platform = "ios-other" | "android" | "none";

/**
 * Mobilde "uygulamada aç" bandı.
 * - iOS Safari: Apple'ın kendi Smart App Banner'ı (layout'taki apple-itunes-app meta etiketi) gösterilir;
 *   uygulama yüklüyse "Aç", değilse "Al" der. Bu yüzden burada gösterilmez.
 * - iOS'ta diğer tarayıcılar / uygulama içi tarayıcılar (Chrome, Instagram vb.): bu bant App Store'a yönlendirir.
 * - Android: Play Store'da yayınlandığında (ANDROID_RELEASED açılınca) intent bağlantısıyla
 *   uygulama yüklüyse doğrudan açılır, değilse Play Store'a gider.
 */
function detect(): Platform {
  const ua = navigator.userAgent;
  const ios = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (ios) {
    const nativeSafari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS|GSA|Instagram|FBAN|FBAV|Line\/|Twitter|LinkedInApp/.test(ua);
    return nativeSafari ? "none" : "ios-other";
  }
  if (/Android/.test(ua)) return ANDROID_RELEASED ? "android" : "none";
  return "none";
}

function readState(): string {
  try {
    const consent = localStorage.getItem("takasla_cookie_consent");
    if (!consent) return "none"; // önce çerez tercihi alınsın, iki bant üst üste binmesin
    const dismissed = Number(localStorage.getItem(DISMISS_KEY) || 0);
    if (dismissed && Date.now() - dismissed < DISMISS_DAYS * 864e5) return "none";
  } catch {
    return "none";
  }
  return detect();
}

const listeners = new Set<() => void>();
function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("takasla-consent", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("takasla-consent", cb);
  };
}

export default function AppBanner() {
  const pathname = usePathname() || "/";
  const platform = useSyncExternalStore(subscribe, readState, () => "none") as Platform;
  if (platform === "none" || pathname.startsWith("/studio") || pathname.startsWith("/indir")) return null;

  const pageUrl = `${SITE_URL}${pathname}`;
  const href =
    platform === "android"
      ? `intent://${pageUrl.replace(/^https?:\/\//, "")}#Intent;scheme=https;package=${ANDROID_PACKAGE};S.browser_fallback_url=${encodeURIComponent(PLAY_STORE_URL)};end`
      : APP_STORE_URL;

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {}
    listeners.forEach((l) => l());
  };

  return (
    <aside
      aria-label="Takasla uygulaması"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-4px_16px_rgba(0,0,0,0.06)] sm:hidden"
    >
      <div className="flex items-center gap-3 px-3 py-2.5">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Kapat"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted hover:bg-surface"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/takasla-icon.jpg" alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded-[10px] border border-line" />
        <div className="min-w-0 flex-1 text-sm leading-tight">
          <p className="font-semibold">Takasla</p>
          <p className="truncate text-muted">Teklif ver ve mesajlaş: uygulamada aç</p>
        </div>
        <a
          href={href}
          rel="noopener"
          className="inline-flex h-9 shrink-0 items-center rounded-full bg-ink px-4 text-sm font-semibold text-white"
        >
          {platform === "android" ? "Aç" : "Uygulamayı aç"}
        </a>
      </div>
    </aside>
  );
}
