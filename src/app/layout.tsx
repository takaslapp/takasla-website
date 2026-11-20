import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: "#151716",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://takaslapp.com"),
  title: {
    default: "Takasla - Eşya takası ilanları",
    template: "%s - Takasla",
  },
  description:
    "Takasla'da kullanmadığın eşyayı ilana koy, ihtiyacın olan ürünle takas et. Türkiye genelinde eşya takası ilanları.",
  authors: [{ name: "Takasla", url: "https://takaslapp.com" }],
  creator: "Takasla",
  publisher: "Takasla",
  category: "Shopping & Lifestyle",
  applicationName: "Takasla",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/takasla-icon.jpg",
    apple: "/images/takasla-icon.jpg",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://takaslapp.com",
    siteName: "Takasla",
    title: "Takasla - Eşya takası ilanları",
    description:
      "Kullanmadığın eşyaları ilana koy, aradığın ürünleri keşfet ve yeni bir şey satın almadan güvenle takas yap.",
    images: [
      {
        url: "/images/takasla-icon.jpg",
        width: 1024,
        height: 1024,
        alt: "Takasla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Takasla - Eşya takası ilanları",
    description:
      "Kullanmadığın eşyaları ilana koy, aradığın ürünleri keşfet ve yeni bir şey satın almadan güvenle takas yap.",
    site: "@takaslapp",
    creator: "@takaslapp",
    images: ["/images/takasla-icon.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  itunes: {
    appId: "6812309534",
  },
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-WGPBVYF545";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data for Google Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://takaslapp.com/#organization",
        name: "Takasla",
        url: "https://takaslapp.com",
        logo: "https://takaslapp.com/images/takasla-icon.jpg",
        email: "takaslappcom@gmail.com",
        sameAs: [
          "https://instagram.com/takaslapp",
          "https://x.com/takaslapp",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Esenler Mh. Horasan Sk. Görgülü Center No:4/4",
          addressLocality: "Selçuklu",
          addressRegion: "Konya",
          addressCountry: "TR",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://takaslapp.com/#website",
        url: "https://takaslapp.com",
        name: "Takasla",
        description: "Eşya takası ilanları. Parayla değil, Takasla.",
        publisher: {
          "@id": "https://takaslapp.com/#organization",
        },
        inLanguage: "tr-TR",
      },
      {
        "@type": "SoftwareApplication",
        name: "Takasla - Yeni Nesil Takas",
        operatingSystem: "iOS",
        applicationCategory: "ShoppingApplication",
        installUrl: "https://apps.apple.com/tr/app/takasla-yeni-nesil-takas/id6812309534?l=tr",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "TRY",
        },
      },
    ],
  };

  return (
    <html lang="tr" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-ink antialiased overflow-x-hidden font-sans">
        {children}
        <CookieBanner gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
