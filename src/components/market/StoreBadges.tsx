import Image from "next/image";
import { APP_STORE_URL } from "@/lib/site";

/** Apple'ın resmi "App Store'dan İndirin" rozeti (Apple Marketing Tools üzerinden). */
const APP_STORE_BADGE =
  "https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/tr-tr?releaseDate=1758844800";

export function AppStoreBadge({ height = 40 }: { height?: number }) {
  return (
    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-block shrink-0">
      <img
        src={APP_STORE_BADGE}
        alt="App Store'dan İndirin"
        height={height}
        width={Math.round(height * 3)}
        style={{ height, width: "auto" }}
      />
    </a>
  );
}

/** Google'ın resmi "Google Play'den alın" rozeti. Android sürümü yayında olmadığı için bağlantı vermez. */
const GOOGLE_PLAY_BADGE = "https://play.google.com/intl/en_us/badges/static/images/badges/tr_badge_web_generic.png";

export function GooglePlayBadgeSoon({ height = 40 }: { height?: number }) {
  // Resmi rozet görselinde kenar boşluğu var; App Store rozetiyle aynı boyda görünmesi için büyütülüp kırpılır.
  const imgH = Math.round(height * 1.45);
  return (
    <span className="inline-flex shrink-0 items-center gap-2" aria-label="Google Play sürümü yakında">
      <span className="inline-block overflow-hidden rounded-[7px]" style={{ height, width: Math.round(height * 3.37) }}>
        <Image
          src={GOOGLE_PLAY_BADGE}
          alt="Google Play'den alın"
          height={imgH}
          width={Math.round(imgH * 2.584)}
          sizes={`${Math.round(imgH * 2.584)}px`}
          style={{ height: imgH, width: "auto", maxWidth: "none", margin: `${-(imgH - height) / 2}px 0 0 ${-Math.round(height * 0.2)}px` }}
        />
      </span>
      <span className="rounded-full bg-surface px-2 py-0.5 text-xs font-medium text-muted">Yakında</span>
    </span>
  );
}

export function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}
