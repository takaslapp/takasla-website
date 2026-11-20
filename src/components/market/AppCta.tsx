import { AppStoreBadge } from "./StoreBadges";

/** Sade uygulama çağrısı: teklif ve mesajlaşma yalnızca uygulamada. */
export default function AppCta({ text }: { text?: string }) {
  return (
    <div className="flex flex-col items-start justify-between gap-3 rounded-xl bg-surface p-4 sm:flex-row sm:items-center">
      <p className="text-sm">
        {text || "Takas teklifi göndermek ve ilan sahibiyle yazışmak için Takasla uygulamasını kullan."}
      </p>
      <AppStoreBadge height={40} />
    </div>
  );
}
