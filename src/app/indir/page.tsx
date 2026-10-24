import type { Metadata } from "next";
import DownloadClient from "./DownloadClient";

export const metadata: Metadata = {
  title: "Takasla'yı İndir - Yeni Nesil Eşya Takası (App Store)",
  description:
    "Takasla iOS uygulamasını App Store'dan hemen ücretsiz indirin. İhtiyacınız olmayanı verin, aradığınızı para harcamadan güvenle takaslayın!",
  alternates: {
    canonical: "/indir",
  },
  openGraph: {
    title: "Takasla'yı İndir - App Store",
    description:
      "Türkiye'nin yeni nesil eşya takası platformu Takasla'yı App Store'dan hemen ücretsiz indirin. Parayla değil, Takasla!",
    url: "https://takaslapp.com/indir",
    siteName: "Takasla",
    images: [
      {
        url: "/images/takasla-3d.png",
        width: 1200,
        height: 630,
        alt: "Takasla Uygulaması App Store'da",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Takasla'yı İndir - App Store",
    description:
      "Türkiye'nin yeni nesil eşya takası platformu Takasla'yı App Store'dan hemen ücretsiz indirin. Parayla değil, Takasla!",
    images: ["/images/takasla-3d.png"],
  },
  itunes: {
    appId: "6812309534",
    appArgument: "https://takaslapp.com/indir",
  },
};

export default function IndirPage() {
  return (
    <>
      <noscript>
        <meta
          httpEquiv="refresh"
          content="0;url=https://apps.apple.com/tr/app/takasla-yeni-nesil-takas/id6812309534?l=tr"
        />
      </noscript>
      <DownloadClient />
    </>
  );
}
