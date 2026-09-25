import Link from "next/link";

export default function StatementSection() {
  return (
    <section className="py-20 sm:py-28 md:py-32 bg-[#FAFAFA] border-b border-gray-100 relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00E676]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
        <h2 className="text-2xl sm:text-4xl md:text-[48px] font-medium sm:font-semibold text-[#131515] leading-[1.4] sm:leading-[1.4] tracking-tight font-sans">
          Kullanmadığın eşyaları{" "}
          <span className="inline-block align-middle mx-1 sm:mx-2">
            <img
              src="/images/takasla-simge.webp"
              alt="Takasla Icon"
              className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain inline-block align-middle animate-[spin_10s_linear_infinite] drop-shadow-[0_4px_12px_rgba(0,230,118,0.4)]"
            />
          </span>{" "}
          Takasla fırsata dönüştür, yeni bir şey satın almadan{" "}
          <span className="inline-block align-middle text-3xl sm:text-4xl md:text-5xl mx-1.5 transition-transform hover:scale-110">
            🤝
          </span>{" "}
          güvenle takas yap,{" "}
          <span className="inline-block align-middle text-3xl sm:text-4xl md:text-5xl mx-1.5 transition-transform hover:scale-110">
            🌤️
          </span>{" "}
          bütçene ve geleceğe değer kat.
        </h2>

        {/* Social Proof Section */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center animate-fade-in-up">
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 mb-6">
            Binlerce kişi eşyalarını takasla değerlendiriyor.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            <span className="px-3.5 py-1.5 bg-[#EEEEEE] hover:bg-gray-200 transition-colors rounded-full text-[13px] sm:text-sm font-medium text-[#333333] cursor-default">
              #Öğrenciler
            </span>
            <span className="px-3.5 py-1.5 bg-[#EEEEEE] hover:bg-gray-200 transition-colors rounded-full text-[13px] sm:text-sm font-medium text-[#333333] cursor-default">
              #Anneler
            </span>
            <span className="px-3.5 py-1.5 bg-[#EEEEEE] hover:bg-gray-200 transition-colors rounded-full text-[13px] sm:text-sm font-medium text-[#333333] cursor-default">
              #Oyuncular
            </span>
            <span className="px-3.5 py-1.5 bg-[#EEEEEE] hover:bg-gray-200 transition-colors rounded-full text-[13px] sm:text-sm font-medium text-[#333333] cursor-default">
              #TeknolojiTutkunları
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
