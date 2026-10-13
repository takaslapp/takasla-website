import type { Metadata } from "next";
import Link from "next/link";
import LegalHeader from "@/components/LegalHeader";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { getAllPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog & Rehber - Takasla | Eşya Takası ve Döngüsel Yaşam",
  description:
    "Eşya takası, sürdürülebilir yaşam, döngüsel ekonomi ve güvenli takas süreçlerine dair en güncel rehberler, püf noktaları ve tasarruf ipuçları.",
  keywords: [
    "takas rehberi",
    "eşya takası",
    "döngüsel ekonomi",
    "ikinci el takas ipuçları",
    "para harcamadan takas",
    "takasla blog",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://takaslapp.com/blog",
    siteName: "Takasla",
    title: "Blog & Rehber - Takasla",
    description:
      "Eşya takası, sürdürülebilir yaşam ve döngüsel ekonomi rehberleri.",
    images: [
      {
        url: "/images/blog/esya-takasi-rehberi.webp",
        width: 1200,
        height: 630,
        alt: "Takasla Blog & Rehber",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Rehber - Takasla",
    description:
      "Eşya takası, sürdürülebilir yaşam ve döngüsel ekonomi rehberleri.",
    images: ["/images/blog/esya-takasi-rehberi.webp"],
  },
};

export default function BlogIndexPage() {
  const allPosts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-gray-800 flex flex-col justify-between font-sans">
      {/* Top Header */}
      <LegalHeader />

      {/* Breadcrumb Navigation */}
      <div className="border-b border-gray-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center gap-2 text-xs text-gray-500">
          <Link
            href="/"
            aria-label="Ana Sayfa"
            className="hover:text-black transition-colors flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span>Ana Sayfa</span>
          </Link>
          <span className="text-gray-300">&gt;</span>
          <span className="text-gray-900 font-semibold">Blog & Rehber</span>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 w-full flex-grow">
        {/* Editorial Heading (Clean, Solid, No Subtitle Label) */}
        <div className="mb-10 sm:mb-14">
          <div className="border-l-4 border-[#00A859] pl-4 py-0.5 mb-3">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Blog & Rehber
            </h1>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
            Eşyalarını paraya değil yeni bir değere dönüştürmek, bilinçli tüketim yapmak ve güvenle takas gerçekleştirmek için hazırladığımız güncel rehberler.
          </p>
        </div>

        {/* 2-by-2 Grid Layout (En az 2 yazı 2 2 düzeninde) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {allPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Solid Corporate Conversion CTA Card (No Translucent Wash) */}
        <section
          aria-label="Takasla Uygulamasına Katıl"
          className="mt-16 sm:mt-20 bg-[#151716] text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-lg text-center"
        >
          <div className="max-w-xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 rounded-md bg-[#00A859] text-white text-xs font-bold uppercase tracking-wider">
              Takas Dünyasına Katılın
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Kullanmadığın Eşyaları Değerlendirmeye Başla
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
              Yüzlerce kategorideki binlerce takas ilanını incele, dilediğin ürüne teklif ver ya da kendi ilanını saniyeler içinde ücretsiz yayınla.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/"
                className="bg-[#00E676] hover:bg-[#00c966] text-black font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-md active:scale-95"
              >
                Uygulamayı Keşfet
              </Link>
              <Link
                href="/sss"
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium text-sm px-6 py-3 rounded-xl transition-all"
              >
                Nasıl Çalışır?
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer showAboutTeaser={false} outerBg="bg-[#FAF9F5]" />
    </div>
  );
}
