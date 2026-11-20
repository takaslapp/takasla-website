import type { Metadata } from "next";
import DownloadClient from "./DownloadClient";

export const metadata: Metadata = {
  title: "Takasla uygulamasını indir",
  description: "Takasla iOS uygulamasını App Store'dan ücretsiz indir. Kullanmadığın eşyayı ilan ver, para ödemeden takas et.",
  alternates: { canonical: "/indir" },
  // Yönlendirme sayfası: arama sonuçlarında ana sayfa ve "Nasıl çalışır" öne çıksın.
  robots: { index: false, follow: true },
  itunes: { appId: "6812309534", appArgument: "https://takaslapp.com/indir" },
};

export default function IndirPage() {
  return (
    <>
      <DownloadClient />
    </>
  );
}
