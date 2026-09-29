"use client";

import Link from "next/link";

interface LegalNavProps {
  currentPage:
    | "gizlilik-politikasi"
    | "kvkk-aydinlatma-metni"
    | "kullanim-kosullari"
    | "topluluk-kurallari"
    | "hesap-ve-veri-silme"
    | "cerez-politikasi"
    | "mesafeli-hizmet-sozlesmesi"
    | "on-bilgilendirme-formu"
    | "iptal-ve-iade-kosullari"
    | "iletisim-ve-ticari-bilgiler";
}

const LEGAL_LINKS = [
  { id: "kullanim-kosullari", label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
  { id: "gizlilik-politikasi", label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { id: "kvkk-aydinlatma-metni", label: "KVKK Metni", href: "/kvkk-aydinlatma-metni" },
  { id: "mesafeli-hizmet-sozlesmesi", label: "Mesafeli Sözleşme", href: "/mesafeli-hizmet-sozlesmesi" },
  { id: "on-bilgilendirme-formu", label: "Ön Bilgilendirme", href: "/on-bilgilendirme-formu" },
  { id: "iptal-ve-iade-kosullari", label: "İptal ve İade", href: "/iptal-ve-iade-kosullari" },
  { id: "cerez-politikasi", label: "Çerez Politikası", href: "/cerez-politikasi" },
  { id: "topluluk-kurallari", label: "Topluluk Kuralları", href: "/topluluk-kurallari" },
  { id: "hesap-ve-veri-silme", label: "Hesap Silme", href: "/hesap-ve-veri-silme" },
  { id: "iletisim-ve-ticari-bilgiler", label: "İletişim & Ticari", href: "/iletisim-ve-ticari-bilgiler" },
];

export default function LegalNav({ currentPage }: LegalNavProps) {
  return (
    <nav
      aria-label="Yasal Sayfalar Gezintisi"
      className="mb-8 w-full overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex items-center gap-2 min-w-max">
        {LEGAL_LINKS.map((link) => {
          const isActive = link.id === currentPage;
          return (
            <Link
              key={link.id}
              href={link.href}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all select-none ${
                isActive
                  ? "bg-[#151716] text-[#00E676] border border-[#00E676]/40 shadow-sm"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
