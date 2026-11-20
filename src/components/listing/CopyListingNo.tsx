"use client";

import { useState } from "react";

/** İlan numarasını panoya kopyalar (destek ve şikâyet bildirimlerinde kullanılır). */
export default function CopyListingNo({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const t = document.createElement("textarea");
      t.value = value;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="select-all tabular-nums">{value}</span>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "İlan numarası kopyalandı" : "İlan numarasını kopyala"}
        title={copied ? "Kopyalandı" : "Kopyala"}
        className="inline-flex h-7 items-center gap-1 rounded-md px-1.5 text-xs text-muted hover:bg-surface hover:text-ink"
      >
        {copied ? (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" className="text-link">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
            <span aria-live="polite">Kopyalandı</span>
          </>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15V6a2 2 0 0 1 2-2h9" />
          </svg>
        )}
      </button>
    </span>
  );
}
