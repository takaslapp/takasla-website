import Link from "next/link";
import type { ReactNode } from "react";
import type { InlineSpan } from "@/data/blog-posts";

const SITE_HOSTS = ["takaslapp.com", "www.takaslapp.com"];

/** Sanity'deki bağlantıyı site içi göreli yola çevirir; dış bağlantıysa null döner. */
function internalPath(href: string): string | null {
  if (href.startsWith("/")) return href;
  try {
    const u = new URL(href);
    if (SITE_HOSTS.includes(u.hostname)) return `${u.pathname}${u.search}${u.hash}` || "/";
  } catch {
    // "kategori/elektronik" gibi başında / olmayan yazımlar
    if (!/^[a-z]+:/i.test(href)) return `/${href.replace(/^\.?\/*/, "")}`;
  }
  return null;
}

/** Blog metnindeki kalın, italik ve bağlantıları korur. */
export default function RichText({ spans, fallback }: { spans?: InlineSpan[]; fallback?: string }) {
  if (!spans || spans.length === 0) return <>{fallback}</>;
  return (
    <>
      {spans.map((s, i) => {
        let node: ReactNode = s.text;
        if (s.code) node = <code>{node}</code>;
        if (s.italic) node = <em>{node}</em>;
        if (s.bold) node = <strong>{node}</strong>;
        if (s.href) {
          const path = internalPath(s.href);
          node = path ? (
            <Link href={path}>{node}</Link>
          ) : (
            <a href={s.href} target="_blank" rel="noopener noreferrer">
              {node}
            </a>
          );
        }
        return <span key={i}>{node}</span>;
      })}
    </>
  );
}
