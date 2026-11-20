import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

export interface Crumb {
  name: string;
  href: string;
}

/** Görünür içerik yolu + BreadcrumbList yapılandırılmış verisi. */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Ana sayfa", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.href),
    })),
  };
  return (
    <nav aria-label="İçerik yolu" className="text-xs text-muted">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-1">
        {all.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === all.length - 1 ? (
              <span className="text-ink" aria-current="page">
                {c.name}
              </span>
            ) : (
              <Link href={c.href} className="hover:text-ink hover:underline">
                {c.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
