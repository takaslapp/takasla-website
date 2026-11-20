import Link from "next/link";
import type { ReactNode } from "react";
import SiteHeader from "@/components/market/SiteHeader";
import Breadcrumbs from "@/components/market/Breadcrumbs";
import Footer from "@/components/Footer";

export const CORPORATE_PAGES = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/nasil-calisir", label: "Nasıl çalışır?" },
  { href: "/sss", label: "Sıkça sorulan sorular" },
  { href: "/iletisim", label: "İletişim" },
  { href: "/kariyer", label: "Kariyer" },
];

export const LEGAL_PAGES = [
  { href: "/kullanim-kosullari", label: "Kullanım koşulları" },
  { href: "/gizlilik-politikasi", label: "Gizlilik politikası" },
  { href: "/kvkk-aydinlatma-metni", label: "KVKK aydınlatma metni" },
  { href: "/cerez-politikasi", label: "Çerez politikası" },
  { href: "/topluluk-kurallari", label: "Topluluk kuralları" },
  { href: "/hesap-ve-veri-silme", label: "Hesap ve veri silme" },
  { href: "/mesafeli-hizmet-sozlesmesi", label: "Mesafeli hizmet sözleşmesi" },
  { href: "/on-bilgilendirme-formu", label: "Ön bilgilendirme formu" },
  { href: "/iptal-ve-iade-kosullari", label: "İptal ve iade koşulları" },
  { href: "/iletisim-ve-ticari-bilgiler", label: "Ticari bilgiler" },
];

export interface TocItem {
  id: string;
  label: string;
}

interface InfoLayoutProps {
  /** Sayfanın kanonik yolu, ör. "/hakkimizda" */
  path: string;
  title: string;
  /** Başlık altındaki kısa açıklama */
  lead?: ReactNode;
  /** Yasal metinlerde "Son güncelleme" tarihi */
  updated?: string;
  /** Uzun metinler için içindekiler */
  toc?: TocItem[];
  children: ReactNode;
}

function NavGroup({ title, items, path }: { title: string; items: { href: string; label: string }[]; path: string }) {
  return (
    <div>
      <p className="px-3 pb-1.5 text-xs font-medium text-muted">{title}</p>
      <ul>
        {items.map((i) => {
          const active = i.href === path;
          return (
            <li key={i.href}>
              <Link
                href={i.href}
                aria-current={active ? "page" : undefined}
                className={`block rounded-md px-3 py-1.5 text-sm ${
                  active ? "bg-surface font-medium text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {i.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Kurumsal ve yasal sayfaların ortak düzeni: solda bölüm menüsü (mobilde açılır liste),
 * sağda okunaklı tek sütun metin.
 */
export default function InfoLayout({ path, title, lead, updated, toc, children }: InfoLayoutProps) {
  const isLegal = LEGAL_PAGES.some((p) => p.href === path);
  const section = isLegal ? "Yasal" : "Kurumsal";

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-4">
        <Breadcrumbs items={[{ name: title, href: path }]} />

        <div className="mt-6 grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
          {/* Masaüstü bölüm menüsü */}
          <nav aria-label={`${section} sayfalar`} className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <NavGroup title="Takasla" items={CORPORATE_PAGES} path={path} />
              <NavGroup title="Sözleşmeler ve politikalar" items={LEGAL_PAGES} path={path} />
            </div>
          </nav>

          <div className="min-w-0">
            {/* Mobil bölüm menüsü */}
            <details className="group mb-6 rounded-lg border border-line lg:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="text-muted">{section} / </span>
                  <span className="font-medium">{title}</span>
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="transition-transform group-open:rotate-180">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <div className="space-y-4 border-t border-line py-3">
                <NavGroup title="Takasla" items={CORPORATE_PAGES} path={path} />
                <NavGroup title="Sözleşmeler ve politikalar" items={LEGAL_PAGES} path={path} />
              </div>
            </details>

            <header className="max-w-3xl">
              <h1 className="text-2xl font-semibold leading-tight sm:text-3xl">{title}</h1>
              {lead && <div className="mt-3 text-[15px] leading-relaxed text-muted sm:text-base">{lead}</div>}
              {updated && <p className="mt-3 text-sm text-muted">Son güncelleme: {updated}</p>}
            </header>

            {toc && toc.length > 3 && (
              <details className="mt-6 max-w-3xl rounded-lg bg-surface open:pb-2" open={toc.length <= 12}>
                <summary className="cursor-pointer px-4 py-3 text-sm font-medium">İçindekiler</summary>
                <ol className="columns-1 gap-8 px-4 text-sm sm:columns-2">
                  {toc.map((t) => (
                    <li key={t.id} className="break-inside-avoid py-1">
                      <a href={`#${t.id}`} className="text-muted hover:text-ink hover:underline">
                        {t.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>
            )}

            <div className="mt-8">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
