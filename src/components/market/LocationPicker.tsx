"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { nearestProvinces } from "@/lib/geo";
import { slugify } from "@/lib/taxonomy";

export interface PickerCity {
  name: string;
  slug: string;
  count: number;
}
export interface PickerDistrict extends PickerCity {
  city: string;
  citySlug: string;
}

interface Recent {
  label: string;
  href: string;
}

const RECENT_KEY = "takasla_son_konumlar";

const norm = (s: string) =>
  s
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

function readRecent(): Recent[] {
  try {
    const v = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
    return Array.isArray(v) ? v.filter((x) => x && typeof x.href === "string" && typeof x.label === "string").slice(0, 5) : [];
  } catch {
    return [];
  }
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={className}>
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

/**
 * Konum seçici: başlıktaki düğme, il/ilçe aramalı bir pencere açar.
 * Seçim, taranabilir şehir/ilçe sayfalarına (/sehir/konya, /sehir/konya/selcuklu) yönlendirir.
 * Tarayıcı konumu yalnızca cihazda en yakın ili bulmak için kullanılır.
 */
export default function LocationPicker({ cities, districts }: { cities: PickerCity[]; districts: PickerDistrict[] }) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState<Recent[]>([]);
  const [geo, setGeo] = useState<"idle" | "locating" | "denied" | "error">("idle");

  // Bulunulan sayfadan bağlam: kategori sayfasındaysak şehir seçimi kategoriyi korur.
  const seg = pathname.split("/").filter(Boolean);
  const categorySlug = seg[0] === "kategori" ? seg[1] : null;
  const currentCitySlug = seg[0] === "sehir" ? seg[1] : seg[0] === "kategori" ? seg[2] : undefined;
  const currentDistrictSlug = seg[0] === "sehir" ? seg[2] : undefined;
  const currentCity = cities.find((c) => c.slug === currentCitySlug);
  const currentDistrict = currentDistrictSlug
    ? districts.find((d) => d.citySlug === currentCitySlug && d.slug === currentDistrictSlug)
    : undefined;
  const label = currentDistrict ? `${currentDistrict.name}, ${currentDistrict.city}` : currentCity?.name ?? "Tüm Türkiye";

  const cityHref = (slug: string) => (categorySlug ? `/kategori/${categorySlug}/${slug}` : `/sehir/${slug}`);
  const allHref = categorySlug ? `/kategori/${categorySlug}` : "/ilanlar";

  const results = useMemo(() => {
    const q = norm(query.trim());
    if (!q) return [];
    const out: { key: string; label: string; sub: string; href: string; count: number; score: number }[] = [];
    for (const c of cities) {
      const n = norm(c.name);
      if (n.includes(q)) out.push({ key: `c-${c.slug}`, label: c.name, sub: "İl", href: cityHref(c.slug), count: c.count, score: n.startsWith(q) ? 0 : 2 });
    }
    for (const d of districts) {
      const n = norm(`${d.name} ${d.city}`);
      if (n.includes(q))
        out.push({
          key: `d-${d.citySlug}-${d.slug}`,
          label: `${d.name}, ${d.city}`,
          sub: "İlçe",
          href: `/sehir/${d.citySlug}/${d.slug}`,
          count: d.count,
          score: norm(d.name).startsWith(q) ? 1 : 3,
        });
    }
    return out.sort((a, b) => a.score - b.score || b.count - a.count || a.label.localeCompare(b.label, "tr")).slice(0, 30);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, cities, districts, categorySlug]);

  const popular = cities.filter((c) => c.count > 0).slice(0, 12);

  const open = () => {
    setRecent(readRecent());
    setQuery("");
    setGeo("idle");
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = "hidden";
    // Masaüstünde aramaya odaklan; mobilde klavye ekranı kapatmasın.
    if (window.matchMedia("(min-width: 640px)").matches) {
      requestAnimationFrame(() => document.getElementById("konum-ara")?.focus());
    }
  };
  const close = () => dialogRef.current?.close();

  const remember = (r: Recent) => {
    try {
      const next = [r, ...readRecent().filter((x) => x.href !== r.href)].slice(0, 5);
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
    } catch {}
    close();
  };

  const locateMe = () => {
    if (!("geolocation" in navigator)) return setGeo("error");
    setGeo("locating");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        try {
          localStorage.setItem("takasla_konum_izni", "1");
        } catch {}
        const [nearest] = nearestProvinces(pos.coords.latitude, pos.coords.longitude, 1);
        if (!nearest) return setGeo("error");
        const href = cityHref(slugify(nearest.name));
        remember({ label: nearest.name, href });
        router.push(href);
      },
      (err) => setGeo(err.code === err.PERMISSION_DENIED ? "denied" : "error"),
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 30 * 60 * 1000 }
    );
  };

  const row = "flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-[15px] hover:bg-surface";

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className="inline-flex h-10 min-w-0 max-w-[8.5rem] shrink-0 items-center gap-1.5 rounded-lg border border-line px-2.5 text-sm hover:border-ink sm:max-w-[11rem]"
      >
        <PinIcon className="shrink-0 text-muted" />
        {currentCity ? (
          <span className="truncate">{label}</span>
        ) : (
          <span className="truncate">
            <span className="hidden sm:inline">Tüm </span>Türkiye
          </span>
        )}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="shrink-0 text-muted">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="konum-baslik"
        onClose={() => (document.documentElement.style.overflow = "")}
        onClick={(e) => e.target === dialogRef.current && close()}
        className="m-0 h-[100dvh] max-h-none w-full max-w-none bg-white p-0 text-ink backdrop:bg-black/40 sm:m-auto sm:h-[min(580px,85vh)] sm:max-w-lg sm:rounded-xl"
      >
        <div className="flex h-full max-h-[inherit] flex-col">
          <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-5">
            <p id="konum-baslik" className="text-lg font-semibold">
              Konum seç
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Kapat"
              className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-surface"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="px-4 pt-4 sm:px-5">
            <label htmlFor="konum-ara" className="sr-only">
              İl veya ilçe ara
            </label>
            <div className="relative">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input
                id="konum-ara"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="İl veya ilçe ara"
                autoComplete="off"
                className="h-11 w-full rounded-lg border border-line bg-surface pl-10 pr-3 text-[16px] outline-none placeholder:text-muted focus:border-ink focus:bg-white"
              />
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-4 pt-2 sm:px-3">
            {query.trim() ? (
              results.length ? (
                <ul aria-label="Arama sonuçları">
                  {results.map((r) => (
                    <li key={r.key}>
                      <Link href={r.href} onClick={() => remember({ label: r.label, href: r.href })} className={row}>
                        <span className="min-w-0">
                          <span className="block truncate">{r.label}</span>
                          <span className="block text-xs text-muted">{r.sub}</span>
                        </span>
                        <span className="shrink-0 text-sm text-muted">{r.count > 0 ? `${r.count} ilan` : "İlan yok"}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="px-3 py-6 text-center text-sm text-muted">“{query.trim()}” için sonuç bulunamadı.</p>
              )
            ) : (
              <>
                <button
                  type="button"
                  onClick={locateMe}
                  disabled={geo === "locating"}
                  className="flex w-full items-start gap-3 rounded-lg px-3 py-3 text-left hover:bg-surface disabled:opacity-60"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-brand-ink">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M21 3L3 10.5l7.5 2.9L13.4 21z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-medium">
                      {geo === "locating" ? "Konumun bulunuyor…" : "Mevcut konumumu kullan"}
                    </span>
                    <span className="block text-sm text-muted">
                      {geo === "denied"
                        ? "Konum izni verilmedi. Tarayıcı ayarlarından izin verebilir ya da il seçebilirsin."
                        : geo === "error"
                          ? "Konum alınamadı. Lütfen listeden bir il seç."
                          : "En yakın ildeki ilanları gösterelim. Konumun cihazında kalır."}
                    </span>
                  </span>
                </button>

                <Link href={allHref} onClick={() => remember({ label: "Tüm Türkiye", href: allHref })} className={`${row} mt-1`}>
                  <span>Tüm Türkiye</span>
                  {!currentCity && <span className="text-sm text-muted">Seçili</span>}
                </Link>

                {recent.length > 0 && (
                  <section className="mt-4" aria-labelledby="konum-son">
                    <p id="konum-son" className="px-3 pb-1 text-sm text-muted">
                      Son seçtiklerin
                    </p>
                    <ul>
                      {recent.map((r) => (
                        <li key={r.href}>
                          <Link href={r.href} onClick={() => remember(r)} className={row}>
                            <span className="flex min-w-0 items-center gap-2">
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="shrink-0 text-muted">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M12 7v5l3 2" />
                              </svg>
                              <span className="truncate">{r.label}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {popular.length > 0 && (
                  <section className="mt-4 px-3" aria-labelledby="konum-populer">
                    <p id="konum-populer" className="pb-2 text-sm text-muted">
                      İlan olan şehirler
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {popular.map((c) => (
                        <li key={c.slug}>
                          <Link
                            href={cityHref(c.slug)}
                            onClick={() => remember({ label: c.name, href: cityHref(c.slug) })}
                            className={`inline-flex h-9 items-center gap-1.5 rounded-full border px-3 text-sm ${
                              c.slug === currentCitySlug ? "border-ink bg-ink text-white" : "border-line hover:border-ink"
                            }`}
                          >
                            <PinIcon className={c.slug === currentCitySlug ? "" : "text-muted"} />
                            {c.name}
                            <span className={c.slug === currentCitySlug ? "text-white/70" : "text-muted"}>{c.count}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
