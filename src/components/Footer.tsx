import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";
import { CATEGORY_LIST } from "@/lib/taxonomy";
import { AppStoreBadge, GooglePlayBadgeSoon, InstagramIcon, XIcon } from "@/components/market/StoreBadges";

interface FooterProps {
  className?: string;
  /** Eski sayfalarla uyumluluk için tutuluyor; artık kullanılmıyor. */
  outerBg?: string;
  showAboutTeaser?: boolean;
}

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Keşfet",
    links: [
      { href: "/ilanlar", label: "Tüm ilanlar" },
      { href: "/sehir/istanbul", label: "İstanbul ilanları" },
      { href: "/sehir/konya", label: "Konya ilanları" },
      { href: "/blog", label: "Takas rehberleri" },
    ],
  },
  {
    title: "Takasla",
    links: [
      { href: "/hakkimizda", label: "Hakkımızda" },
      { href: "/nasil-calisir", label: "Nasıl çalışır?" },
      { href: "/kariyer", label: "Kariyer" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
  {
    title: "Yardım",
    links: [
      { href: "/sss", label: "Sıkça sorulan sorular" },
      { href: "/topluluk-kurallari", label: "Topluluk kuralları" },
      { href: "/hesap-ve-veri-silme", label: "Hesap ve veri silme" },
      { href: `mailto:${CONTACT_EMAIL}`, label: "Destek" },
    ],
  },
];

const LEGAL = [
  { href: "/kullanim-kosullari", label: "Kullanım Koşulları" },
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { href: "/kvkk-aydinlatma-metni", label: "KVKK Aydınlatma Metni" },
  { href: "/cerez-politikasi", label: "Çerez Politikası" },
  { href: "/mesafeli-hizmet-sozlesmesi", label: "Mesafeli Hizmet Sözleşmesi" },
  { href: "/on-bilgilendirme-formu", label: "Ön Bilgilendirme Formu" },
  { href: "/iptal-ve-iade-kosullari", label: "İptal ve İade" },
  { href: "/iletisim-ve-ticari-bilgiler", label: "Ticari Bilgiler" },
];

export default function Footer({ className = "" }: FooterProps = {}) {
  return (
    <footer className={`border-t border-line bg-white text-sm ${className}`}>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <img src="/images/takasla-yesil-logo.webp" alt="Takasla" width={120} height={32} className="h-7 w-auto" />
          <p className="mt-3 max-w-xs text-muted">
            Eşya takası ilan platformu. Kullanmadığını ver, ihtiyacın olanı al.
          </p>
          <div className="mt-5 flex flex-col items-start gap-2.5">
            <AppStoreBadge height={40} />
            <GooglePlayBadgeSoon height={40} />
          </div>
          <div className="mt-5 flex items-center gap-4 text-muted">
            <a href="https://instagram.com/takaslapp" target="_blank" rel="noopener noreferrer" aria-label="Takasla Instagram" className="hover:text-ink">
              <InstagramIcon />
            </a>
            <a href="https://x.com/takaslapp" target="_blank" rel="noopener noreferrer" aria-label="Takasla X" className="hover:text-ink">
              <XIcon />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted">Kategoriler</p>
          <ul className="space-y-2.5">
            {CATEGORY_LIST.map((c) => (
              <li key={c.slug}>
                <Link href={`/kategori/${c.slug}`} className="hover:underline">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted">{col.title}</p>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-muted lg:flex-row lg:justify-between">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Takasla. Parayla Değil, Takasla.</p>
            <p>Takas teklifleri, mesajlaşma ve takas işlemleri resmi Takasla uygulaması üzerinden yapılır.</p>
          </div>
          <ul className="flex flex-wrap gap-x-4 gap-y-1.5 lg:max-w-xl lg:justify-end">
            {LEGAL.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-ink hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
