import Link from "next/link";
import { APP_STORE_URL, CONTACT_EMAIL } from "@/lib/site";
import { CATEGORY_LIST } from "@/lib/taxonomy";

interface FooterProps {
  className?: string;
  /** Eski sayfalarla uyumluluk için tutuluyor; artık kullanılmıyor. */
  outerBg?: string;
  showAboutTeaser?: boolean;
}

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Takasla",
    links: [
      { href: "/hakkimizda", label: "Hakkımızda" },
      { href: "/nasil-calisir", label: "Nasıl çalışır?" },
      { href: "/blog", label: "Blog" },
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
      { href: "/iletisim-ve-ticari-bilgiler", label: "Ticari bilgiler" },
    ],
  },
  {
    title: "Yasal",
    links: [
      { href: "/kullanim-kosullari", label: "Kullanım koşulları" },
      { href: "/gizlilik-politikasi", label: "Gizlilik politikası" },
      { href: "/kvkk-aydinlatma-metni", label: "KVKK aydınlatma metni" },
      { href: "/cerez-politikasi", label: "Çerez politikası" },
      { href: "/mesafeli-hizmet-sozlesmesi", label: "Mesafeli hizmet sözleşmesi" },
      { href: "/on-bilgilendirme-formu", label: "Ön bilgilendirme formu" },
      { href: "/iptal-ve-iade-kosullari", label: "İptal ve iade koşulları" },
    ],
  },
];

export default function Footer({ className = "" }: FooterProps = {}) {
  return (
    <footer className={`border-t border-line bg-surface text-sm ${className}`}>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="mb-3 font-semibold">Kategoriler</p>
          <ul className="space-y-2 text-muted">
            {CATEGORY_LIST.map((c) => (
              <li key={c.slug}>
                <Link href={`/kategori/${c.slug}`} className="hover:text-ink hover:underline">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="mb-3 font-semibold">{col.title}</p>
            <ul className="space-y-2 text-muted">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-ink hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="mb-3 font-semibold">İletişim</p>
          <address className="space-y-1 not-italic text-muted">
            <p>Recep Aydoğan</p>
            <p>Esenler Mh. Horasan Sk. Görgülü Center 4/4</p>
            <p>Selçuklu / Konya</p>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ink hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </address>
          <div className="mt-4 flex gap-4 text-muted">
            <a href="https://instagram.com/takaslapp" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              Instagram
            </a>
            <a href="https://x.com/takaslapp" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              X
            </a>
          </div>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-9 items-center rounded-lg bg-ink px-3 text-xs font-medium text-white hover:bg-black"
          >
            App Store&apos;dan indir
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted">© {new Date().getFullYear()} Takasla</p>
      </div>
    </footer>
  );
}
