import Link from "next/link";
import { CATEGORY_LIST } from "@/lib/taxonomy";

export default function CategoryBar({ active }: { active?: string }) {
  return (
    <nav aria-label="Kategoriler" className="border-b border-line bg-white">
      <ul className="relative mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 text-sm [scrollbar-width:none]">
        <li>
          <Link
            href="/ilanlar"
            className={`block whitespace-nowrap rounded-md px-3 py-1.5 ${!active ? "bg-ink text-white" : "text-muted hover:bg-surface hover:text-ink"}`}
          >
            Tümü
          </Link>
        </li>
        {CATEGORY_LIST.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/kategori/${c.slug}`}
              aria-current={active === c.slug ? "page" : undefined}
              className={`block whitespace-nowrap rounded-md px-3 py-1.5 ${active === c.slug ? "bg-ink text-white" : "text-muted hover:bg-surface hover:text-ink"}`}
            >
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
