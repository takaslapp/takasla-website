import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalHeader from "@/components/LegalHeader";
import CorporateSidebar from "@/components/CorporateSidebar";

export const metadata: Metadata = {
  title: "Hakkımızda - Takasla",
  description:
    "Takasla, ihtiyaç fazlası ürünlerin döngüsel ekonomiye kazandırılması ve güvenle takas edilmesi için geliştirilmiş yeni nesil dijital takas platformudur.",
};

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-gray-800 flex flex-col justify-between font-sans">
      {/* Top Header with Centered Logo */}
      <LegalHeader />

      {/* Breadcrumb Navigation */}
      <div className="border-b border-gray-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center gap-2 text-xs text-gray-500">
          <Link
            href="/"
            aria-label="Ana Sayfa"
            className="hover:text-black transition-colors flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </Link>
          <span className="text-gray-300">&gt;</span>
          <span>Kurumsal</span>
          <span className="text-gray-300">&gt;</span>
          <span className="text-gray-900 font-semibold">Hakkımızda</span>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 py-10 sm:py-14 w-full flex-grow">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Corporate Sidebar */}
          <CorporateSidebar activeTab="hakkimizda" />

          {/* Right Main Content */}
          <div className="flex-1 space-y-8">
            {/* Title with Green Vertical Bar */}
            <div className="border-l-4 border-[#00A859] pl-4 py-0.5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Hakkımızda
              </h1>
            </div>

            {/* Intro Paragraph */}
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                <strong className="text-gray-900 font-semibold">Takasla</strong>, Türkiye&apos;nin dört bir yanındaki kullanıcıların kullanmadıkları eşyalarını ekonomiye ve günlük hayata geri kazandırmak amacıyla kurulmuş yenilikçi bir dijital takas platformudur. Amacımız; kullanıcılarımıza güvenilir, pratik ve şeffaf bir platform sunarak, yeni bir harcama yapmadan aradıkları ürünlere kolayca ulaşmalarını sağlamaktır. Her takas fırsatını titizlikle destekliyor, sürdürülebilir bir geleceği güvence altına alacak döngüsel tüketim bilincini yaygınlaştırıyoruz.
              </p>
            </div>

            {/* Section: Takas Neden Önemli? */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Takas Neden Önemli?
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Takas, insanlık tarihinin en köklü ve en güvenilir dayanışma modellerinden biridir. Günümüz dünyasında ise kaynakların verimli kullanımı, israfın önlenmesi ve bireysel bütçelerin korunması açısından vazgeçilmez bir çözüm haline gelmiştir. Takasla olarak, bu kadim paylaşım kültürünü modern dijital teknolojiler ve akıllı eşleşme algoritmalarıyla buluşturuyor; birikimlerinizi ve eşyalarınızı en doğru şekilde değerlendirmenizi sağlıyoruz.
              </p>
            </div>

            {/* Section: Neler Yapıyoruz? */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Neler Yapıyoruz?
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Takasla olarak, takas süreçlerinizi en verimli ve güvenli şekilde yönetebilmeniz için sizlere çeşitli hizmetler sunuyoruz:
              </p>

              <div className="space-y-3 text-sm sm:text-base leading-relaxed text-gray-700">
                <p>
                  <strong className="text-gray-900 font-semibold">Akıllı Eşleşme ve İlan Keşfi:</strong> Algoritmamız, listelediğiniz ürünün kategorisine, değerine ve aradığınız eşyalara göre en uygun takas tekliflerini tespit eder ve sizinle buluşturur.
                </p>
                <p>
                  <strong className="text-gray-900 font-semibold">Güvenli Takas Altyapısı:</strong> Her kullanıcının güvenliği önceliğimizdir. Şeffaf teklif akışı, onay mekanizmaları ve kullanıcı puanlama sistemiyle takas sürecinizi güvenceye alıyoruz.
                </p>
                <p>
                  <strong className="text-gray-900 font-semibold">Hızlı ve Doğrudan İletişim:</strong> Sizi bekletmeden, anlık uygulama içi mesajlaşma ile takas tekliflerinizi saniyeler içinde iletebilir ve taraflarla doğrudan anlaşabilirsiniz.
                </p>
                <p>
                  <strong className="text-gray-900 font-semibold">Sıfır İsraf ve Çevre Dostu Yaklaşım:</strong> Atıl duran eşyaları yeniden değerlendirerek karbon ayak izinizi azaltmanıza ve döngüsel ekonomiye katkıda bulunmanıza aracılık ediyoruz.
                </p>
              </div>
            </div>

            {/* Mission & Vision Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Misyonumuz Card */}
              <div className="bg-[#0B251C] text-white rounded-2xl p-7 border border-[#00E676]/20 shadow-lg relative overflow-hidden group hover:border-[#00E676]/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-[#00E676]/15 flex items-center justify-center text-[#00E676] mb-5">
                  <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                    <line x1="4" y1="22" x2="4" y2="15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  Misyonumuz
                </h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
                  Kullanıcılarımızın ihtiyaç fazlası ürünlerini paraya ihtiyaç duymadan, güvenli ve kolay bir ortamda takas edebilmelerini sağlamak; sürdürülebilir tüketim bilincini herkes için erişilebilir bir yaşam biçimine dönüştürmektir.
                </p>
              </div>

              {/* Vizyonumuz Card */}
              <div className="bg-[#0B251C] text-white rounded-2xl p-7 border border-[#00E676]/20 shadow-lg relative overflow-hidden group hover:border-[#00E676]/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-[#00E676]/15 flex items-center justify-center text-[#00E676] mb-5">
                  <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  Vizyonumuz
                </h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
                  Türkiye&apos;de ve dünyada takas denildiğinde akla gelen ilk dijital platform olmak; döngüsel ekonomiye liderlik ederek milyonlarca eşyayı yeniden ekonomiye kazandırmak ve sektörün öncüsü olmaktır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer outerBg="bg-[#FAF9F5]" />
    </div>
  );
}
