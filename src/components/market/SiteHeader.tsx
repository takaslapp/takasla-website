import Link from "next/link";
import Image from "next/image";
import { APP_STORE_URL } from "@/lib/site";
import { getFacets } from "@/lib/listings";
import { CITY_LIST } from "@/lib/taxonomy";
import LocationPicker from "./LocationPicker";
import SearchField from "./SearchField";

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

async function locationData() {
  try {
    const f = await getFacets();
    const counts = new Map(f.cities.map((c) => [c.slug, c.count]));
    const cities = CITY_LIST.map((c) => ({ ...c, count: counts.get(c.slug) ?? 0 })).sort(
      (a, b) => b.count - a.count || a.name.localeCompare(b.name, "tr")
    );
    return { cities, districts: f.districts };
  } catch {
    return { cities: CITY_LIST.map((c) => ({ ...c, count: 0 })), districts: [] };
  }
}

export default async function SiteHeader({ query }: SiteHeaderProps) {
  const loc = await locationData();
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 sm:flex-nowrap sm:gap-6">
        <Link href="/" className="mr-auto shrink-0 sm:mr-0" aria-label="Takasla ana sayfa">
          <Image
            src="/images/takasla-koyu-logo.webp"
            alt="Takasla"
            width={97}
            height={28}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <div className="order-last flex w-full min-w-0 gap-2 sm:order-none sm:w-auto sm:flex-1">
          <LocationPicker cities={loc.cities} districts={loc.districts} />
          <form action="/ilanlar" method="get" role="search" className="flex min-w-0 flex-1 rounded-lg focus-within:ring-2 focus-within:ring-ink/15">
            <label htmlFor="site-search" className="sr-only">
              İlanlarda ara
            </label>
            <SearchField defaultValue={query} />
            <button
              type="submit"
              aria-label="Ara"
              className="flex h-10 shrink-0 items-center rounded-r-lg border border-ink bg-ink px-3 text-sm font-medium text-white hover:bg-black sm:px-5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" className="sm:hidden">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <span className="hidden sm:inline">Ara</span>
            </button>
          </form>
        </div>

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
