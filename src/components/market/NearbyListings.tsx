"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import ListingCard, { type CardListing } from "./ListingCard";
import { nearestProvinces } from "@/lib/geo";
import { slugify } from "@/lib/taxonomy";

type State =
  | { kind: "idle" }
  | { kind: "locating" }
  | { kind: "denied" }
  | { kind: "error" }
  | { kind: "done"; city: string; citySlug: string; items: CardListing[]; usedCities: string[] };

const STORE_KEY = "takasla_konum_izni";

/**
 * Tarayıcı konumuna göre en yakın il(ler)deki ilanlar.
 * Koordinatlar cihazda kalır; sunucuya yalnızca il adı gider.
 */
export default function NearbyListings() {
  const [state, setState] = useState<State>({ kind: "idle" });

  const load = useCallback((lat: number, lon: number) => {
    (async () => {
      try {
        const near = nearestProvinces(lat, lon, 6).filter((p, i) => i === 0 || p.km < 250);
        const collected: CardListing[] = [];
        const used: string[] = [];
        for (const p of near) {
          const res = await fetch(`/api/ilanlar?sehir=${slugify(p.name)}&limit=12`);
          if (!res.ok) continue;
          const data: { items: CardListing[] } = await res.json();
          if (data.items.length) used.push(p.name);
          collected.push(...data.items);
          if (collected.length >= 10) break;
        }
        setState({
          kind: "done",
          city: near[0].name,
          citySlug: slugify(near[0].name),
          items: collected.slice(0, 10),
          usedCities: used,
        });
      } catch {
        setState({ kind: "error" });
      }
    })();
  }, []);

  const locate = useCallback(() => {
    if (!("geolocation" in navigator)) {
      setState({ kind: "error" });
      return;
    }
    setState({ kind: "locating" });
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        try {
          localStorage.setItem(STORE_KEY, "1");
        } catch {}
        load(pos.coords.latitude, pos.coords.longitude);
      },
      (err) => setState({ kind: err.code === err.PERMISSION_DENIED ? "denied" : "error" }),
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 30 * 60 * 1000 }
    );
  }, [load]);

  // Daha önce izin verildiyse sormadan otomatik göster.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const remembered = localStorage.getItem(STORE_KEY) === "1";
        const perm = await navigator.permissions?.query({ name: "geolocation" as PermissionName });
        if (!cancelled && perm?.state === "granted" && remembered) locate();
      } catch {}
    })();
    return () => {
      cancelled = true;
    };
  }, [locate]);

  return (
    <section className="mx-auto max-w-6xl px-4 pt-8">
      <div className="mb-3 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">Yakınındaki ilanlar</h2>
          {state.kind === "done" && (
            <p className="text-sm text-muted">
              {state.usedCities.length > 0 ? state.usedCities.join(", ") : state.city} çevresindeki takas ilanları
            </p>
          )}
        </div>
        {state.kind === "done" && (
          <Link href={`/sehir/${state.citySlug}`} className="shrink-0 text-sm text-link underline">
            {state.city} ilanları
          </Link>
        )}
      </div>

      {state.kind === "idle" && (
        <div className="flex flex-col items-start gap-3 rounded-xl bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">Konumunu paylaşırsan sana en yakın ildeki ilanları gösteririz. Konum bilgin cihazında kalır.</p>
          <button
            type="button"
            onClick={locate}
            className="h-10 shrink-0 rounded-lg bg-ink px-4 text-sm font-medium text-white hover:bg-black"
          >
            Konumumu kullan
          </button>
        </div>
      )}
      {state.kind === "locating" && <p className="rounded-xl bg-surface p-4 text-sm text-muted">Konumun alınıyor…</p>}
      {state.kind === "denied" && (
        <p className="rounded-xl bg-surface p-4 text-sm text-muted">
          Konum izni verilmedi. Şehir seçerek de bakabilirsin:{" "}
          <Link href="/ilanlar" className="text-link underline">
            tüm ilanlar
          </Link>
        </p>
      )}
      {state.kind === "error" && (
        <p className="rounded-xl bg-surface p-4 text-sm text-muted">
          Konum alınamadı.{" "}
          <button type="button" onClick={locate} className="text-link underline">
            Tekrar dene
          </button>
        </p>
      )}
      {state.kind === "done" &&
        (state.items.length > 0 ? (
          <ul className="relative flex snap-x gap-3 overflow-x-auto pb-2 [scrollbar-width:thin]">
            {state.items.map((l) => (
              <li key={l.listingNo} className="flex w-[44%] shrink-0 snap-start sm:w-[30%] lg:w-[18.5%]">
                <ListingCard listing={l} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="rounded-xl bg-surface p-4 text-sm text-muted">
            {state.city} ve çevresinde şu an ilan yok.{" "}
            <Link href="/ilanlar" className="text-link underline">
              Tüm ilanlara göz at
            </Link>
          </p>
        ))}
    </section>
  );
}
