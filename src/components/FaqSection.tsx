"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Takasla nasıl çalışır?",
    answer:
      "Kullanmadığın eşyaların fotoğraflarını çekip ücretsiz ilana yüklersin. İlgilendiğin diğer ürünleri keşfeder, ilan sahiplerine takas teklifi gönderirsin. Karşılıklı anlaşma sağlandığında eşleşme gerçekleşir ve paran cebinde kalır.",
  },
  {
    question: "Takas işlemleri için herhangi bir komisyon öder miyim?",
    answer:
      "Hayır! Takasla platformunda ilan vermek, ürünleri keşfetmek, mesajlaşmak ve takas teklifinde bulunmak tamamen ücretsizdir. Sıfır komisyon anlayışıyla çalışıyoruz.",
  },
  {
    question: "Takas sürecinde güvenlik nasıl sağlanıyor?",
    answer:
      "Profil doğrulama sistemleri, kullanıcı değerlendirme puanları ve şeffaf mesajlaşma altyapımız ile güvenli bir topluluk oluşturuyoruz. Kargo veya yüz yüze teslimat seçenekleriyle takasınızı güvenle tamamlayabilirsiniz.",
  },
  {
    question: "Hangi kategorideki ürünleri takaslayabilirim?",
    answer:
      "Elektronik, giyim, kitap, ev eşyası, spor ekipmanları, hobi ürünleri ve aksesuar gibi pek çok farklı kategoride kullanmadığın her türlü ürünü ilan verebilirsin.",
  },
  {
    question: "Takas teklifi geldiğinde ne yapmalıyım?",
    answer:
      "Sana gelen takas tekliflerini uygulamadaki 'Teklifler' sekmesinden anında görüntüleyebilirsin. Teklifi inceleyip kabul edebilir, reddedebilir veya karşı teklif oluşturabilirsin.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-20 md:py-28 bg-[#0B0D0C] text-white relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00E676]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="bg-[#00E676]/10 text-[#00E676] border border-[#00E676]/20 text-xs font-semibold px-4 py-1.5 rounded-full inline-block mb-3 uppercase tracking-wider">
            Merak Edilenler
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-light">
            Takasla hakkında en çok merak edilen soruların yanıtlarını burada bulabilirsin.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-200 hover:border-[#00E676]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base sm:text-lg text-white font-sans">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#00E676] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#00E676]/20" : ""
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-gray-300 text-sm sm:text-base leading-relaxed font-light border-t border-white/5">
                    <p className="mt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
