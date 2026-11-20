"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";

const KEY = "takasla_cookie_consent";
type Consent = "all" | "necessary" | null;

let memoryConsent: Consent = null;
const listeners = new Set<() => void>();
function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
function readConsent(): Consent | "none" {
  try {
    const v = localStorage.getItem(KEY);
    if (v === "all" || v === "necessary") return v;
  } catch {}
  return memoryConsent ?? "none";
}

/**
 * Çerez onayı. Google Analytics yalnızca kullanıcı "Kabul et" dediğinde yüklenir
 * (KVKK / ePrivacy: analiz çerezleri açık rıza gerektirir).
 */
export default function CookieBanner({ gaId }: { gaId?: string }) {
  // localStorage'dan okunur; sunucuda "bilinmiyor" sayılır, böylece banner hidrasyonda yanıp sönmez.
  const stored = useSyncExternalStore(subscribe, readConsent, () => "unknown" as const);
  const consent: Consent = stored === "unknown" || stored === "none" ? null : stored;
  const ready = stored !== "unknown";

  const choose = (v: Exclude<Consent, null>) => {
    try {
      localStorage.setItem(KEY, v);
    } catch {
      memoryConsent = v; // depolama kapalıysa yalnızca bu oturum için geçerli olur
    }
    listeners.forEach((l) => l());
  };

  return (
    <>
      {gaId && consent === "all" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
          </Script>
        </>
      )}

      {ready && consent === null && (
        <aside
          aria-label="Çerez tercihleri"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white pb-[env(safe-area-inset-bottom,0px)]"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-muted">
              Siteyi çalıştırmak için gerekli çerezleri, izin verirsen de ziyaret istatistikleri için analiz çerezlerini
              kullanıyoruz.{" "}
              <Link href="/cerez-politikasi" className="text-link underline">
                Çerez politikası
              </Link>
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => choose("necessary")}
                className="h-9 rounded-lg border border-line px-3 font-medium hover:border-ink"
              >
                Yalnızca gerekli
              </button>
              <button
                type="button"
                onClick={() => choose("all")}
                className="h-9 rounded-lg bg-ink px-3 font-medium text-white hover:bg-black"
              >
                Kabul et
              </button>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
