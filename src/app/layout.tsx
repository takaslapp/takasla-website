import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
    default: "Takasla - Türkiye'nin Yeni Nesil Eşya Takası Platformu | Parayla Değil Takasla",
    template: "%s - Takasla",
  },
  description:
    "Takasla; kullanmadığın eşyaları ilana ekleyip, aradığın ürünleri para harcamadan güvenle takas edebileceğin yeni nesil dijital takas platformudur. Parayla değil, Takasla!",
  keywords: [
    "takas",
    "takasla",
    "takasla nedir",
    "parayla değil takasla",
    "ikinci el takas",
    "takas platformu",
    "ürün takası",
    "eşya takası",
    "takas uygulaması",
    "güvenli takas",
    "takas pazarı",
    "döngüsel ekonomi",
    "ücretsiz takas",
  ],
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
    title: "Takasla - Türkiye'nin Yeni Nesil Eşya Takası Platformu",
    description:
      "Kullanmadığın eşyaları ilana koy, aradığın ürünleri keşfet ve yeni bir şey satın almadan güvenle takas yap.",
    images: [
      {
        url: "/images/takasla-icon.jpg",
        width: 1200,
        height: 630,
        alt: "Takasla - Yeni Nesil Takas Platformu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Takasla - Türkiye'nin Yeni Nesil Eşya Takası Platformu",
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
        description: "Parayla değil, Takasla. Yeni nesil takas platformu.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="image"
          href="/images/takasla-yesil-logo.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/takasla-hero.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-gray-800 antialiased overflow-x-hidden font-sans">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
