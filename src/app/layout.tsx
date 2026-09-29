import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Takasla - Parayla değil takasla",
  description:
    "Kullanmadığın eşyaları ilana koy, aradığın ürünleri keşfet ve yeni bir şey satın almadan güvenle takas yap.",
  icons: {
    icon: "/images/takasla-icon.jpg",
    apple: "/images/takasla-icon.jpg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Takasla",
  },
};

export const viewport: Viewport = {
  themeColor: "#30779b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={outfit.variable}>
      <body className="bg-[#FAF9F5] text-gray-800 antialiased overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
