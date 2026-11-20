import Link from "next/link";
import { APP_STORE_URL } from "@/lib/site";

interface SiteHeaderProps {
  /** Arama kutusundaki mevcut sorgu */
  query?: string;
}

const NAV = [
  { href: "/ilanlar", label: "Tüm ilanlar" },
  { href: "/nasil-calisir", label: "Nasıl çalışır?" },
  { href: "/blog", label: "Blog" },
  { href: "/sss", label: "Yardım" },
];

export default function SiteHeader({ query }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 sm:flex-nowrap sm:gap-6">
        <Link href="/" className="mr-auto shrink-0 sm:mr-0" aria-label="Takasla ana sayfa">
          <img
            src="/images/takasla-yesil-logo.webp"
            alt="Takasla"
            width={120}
            height={32}
            className="h-7 w-auto"
          />
        </Link>

        <form action="/ilanlar" method="get" role="search" className="order-last flex w-full min-w-0 sm:order-none sm:w-auto sm:flex-1">
          <label htmlFor="site-search" className="sr-only">
            İlanlarda ara
          </label>
          <input
            id="site-search"
            name="q"
            type="search"
            defaultValue={query}
            placeholder="Ne arıyorsun? Örn. iPhone, bisiklet, mont"
            className="h-10 min-w-0 flex-1 rounded-l-lg border border-r-0 border-line bg-surface px-3 text-sm outline-none placeholder:text-muted focus:border-ink focus:bg-white"
          />
          <button
            type="submit"
            className="h-10 shrink-0 rounded-r-lg bg-ink px-4 text-sm font-medium text-white hover:bg-black"
          >
            Ara
          </button>
        </form>

        <nav aria-label="Ana menü" className="hidden items-center gap-5 text-sm text-muted lg:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-ink">
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 shrink-0 items-center rounded-lg bg-brand px-4 text-sm font-semibold text-brand-ink hover:brightness-95"
        >
          İlan ver
        </a>

        {/* Mobil menü: JavaScript gerektirmez */}
        <details className="relative lg:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-line [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Menüyü aç</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <nav
            aria-label="Mobil menü"
            className="absolute right-0 top-12 w-56 rounded-lg border border-line bg-white p-2 text-sm shadow-lg"
          >
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="block rounded-md px-3 py-2 hover:bg-surface">
                {n.label}
              </Link>
            ))}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block rounded-md bg-brand px-3 py-2 font-semibold text-brand-ink"
            >
              İlan ver
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
