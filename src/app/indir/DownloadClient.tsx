"use client";

import { useEffect, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppStoreBadge, GooglePlayBadgeSoon } from "@/components/market/StoreBadges";
import { APP_STORE_URL } from "@/lib/site";

type Device = "ios" | "android" | "other" | "unknown";

function detect(): Device {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) return "ios";
  if (/Android/.test(ua)) return "android";
  return "other";
}
const noop = () => () => {};

/**
 * Kısa indirme bağlantısı (/indir). iPhone'da App Store'a otomatik yönlendirir;
 * Android ve masaüstünde bilgi ve mağaza bağlantılarını gösterir.
 */
export default function DownloadClient() {
  const device = useSyncExternalStore(noop, detect, () => "unknown" as Device);

  useEffect(() => {
    if (device !== "ios") return;
    const t = setTimeout(() => window.location.replace(APP_STORE_URL), 150);
    return () => clearTimeout(t);
  }, [device]);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-white text-ink">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-md items-center justify-between px-5 py-4">
          <Link href="/" aria-label="Takasla ana sayfa">
            <Image src="/images/takasla-koyu-logo.webp" alt="Takasla" width={97} height={28} className="h-7 w-auto" />
          </Link>
          <Link href="/ilanlar" className="text-sm text-muted hover:text-ink">
            İlanlara göz at
          </Link>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-5 py-10 text-center">
        <Image
          src="/images/takasla-icon.jpg"
          alt="Takasla uygulama simgesi"
          width={96}
          height={96}
          priority
          className="h-24 w-24 rounded-[22px] border border-line"
        />
        <h1 className="mt-5 text-2xl font-semibold">Takasla uygulamasını indir</h1>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          Kullanmadığın eşyayı ücretsiz ilan ver, beğendiğin ilana kendi ürününle takas teklifi gönder.
        </p>

        <div className="mt-7 flex w-full flex-col items-center gap-3">
          {device === "ios" && (
            <p className="flex items-center gap-2 text-sm text-muted" role="status">
              <span className="h-2 w-2 animate-pulse rounded-full bg-link" aria-hidden="true" />
              App Store açılıyor…
            </p>
          )}
          <AppStoreBadge height={48} />
          <GooglePlayBadgeSoon height={48} />
          {device === "android" && (
            <p className="mt-1 text-sm text-muted">
              Android sürümü test aşamasında. Yayınlandığında bu sayfadan Google Play&apos;e yönlendireceğiz.
            </p>
          )}
        </div>

        <ul className="mt-10 w-full divide-y divide-line border-y border-line text-left text-sm">
          <li className="flex justify-between gap-4 py-3">
            <span className="text-muted">İlan vermek</span>
            <span className="font-medium">Ücretsiz</span>
          </li>
          <li className="flex justify-between gap-4 py-3">
            <span className="text-muted">İlk başarılı takas teklifi</span>
            <span className="font-medium">Ücretsiz</span>
          </li>
          <li className="flex justify-between gap-4 py-3">
            <span className="text-muted">Platform</span>
            <span className="font-medium">iOS · Android yakında</span>
          </li>
        </ul>
      </main>

      <footer className="pb-6 text-center text-xs text-muted">
        <Link href="/nasil-calisir" className="hover:text-ink hover:underline">
          Takasla nasıl çalışır?
        </Link>
      </footer>
    </div>
  );
}
