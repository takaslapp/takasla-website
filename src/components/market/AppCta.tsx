import { APP_STORE_URL } from "@/lib/site";

/** Sade uygulama çağrısı: teklif ve mesajlaşma yalnızca uygulamada. */
export default function AppCta({ text }: { text?: string }) {
  return (
    <div className="flex flex-col items-start justify-between gap-3 rounded-lg border border-line bg-surface p-4 sm:flex-row sm:items-center">
      <p className="text-sm">
        {text || "Takas teklifi göndermek ve ilan sahibiyle yazışmak için Takasla uygulamasını kullan."}
      </p>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 shrink-0 items-center rounded-lg bg-ink px-4 text-sm font-medium text-white hover:bg-black"
      >
        App Store&apos;dan indir
      </a>
    </div>
  );
}
