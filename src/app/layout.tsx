import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://takaslapp.com"),
  title: {
    default: "Takasla - Parayla Değil, Takasla | Türkiye'nin Yeni Nesil Takas Platformu",
    template: "%s | Takasla",
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
    title: "Takasla - Parayla Değil, Takasla",
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
    title: "Takasla - Parayla Değil, Takasla",
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
};

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
        name: "Takasla",
        operatingSystem: "iOS, Android",
        applicationCategory: "ShoppingApplication",
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
      <body className="bg-white text-gray-800 antialiased overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
