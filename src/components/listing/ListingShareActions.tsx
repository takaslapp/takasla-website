"use client";

import { useState } from "react";

interface ListingShareActionsProps {
  listingNo: number;
  title: string;
}

export default function ListingShareActions({
  listingNo,
  title,
}: ListingShareActionsProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedNo, setCopiedNo] = useState(false);

  const handleCopyNo = async () => {
    try {
      await navigator.clipboard.writeText(String(listingNo));
      setCopiedNo(true);
      setTimeout(() => setCopiedNo(false), 2000);
    } catch {
      // Ignore
    }
  };

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : `https://takaslapp.com/i/${listingNo}`;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `${title} - Takasla`,
          text: `${title} ilanına Takasla'da göz at!`,
          url,
        });
        return;
      } catch {
        // User cancelled
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      // Ignore
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 text-xs text-gray-500 pb-2 border-b border-gray-100">
      {/* Listing Number with copy */}
      <div className="flex items-center gap-1.5">
        <span>İlan No:</span>
        <button
          type="button"
          onClick={handleCopyNo}
          className="font-mono font-medium text-gray-700 hover:text-gray-900 transition-colors cursor-pointer flex items-center gap-1"
          title="Numarayı Kopyala"
        >
          <span>#{listingNo}</span>
          {copiedNo ? (
            <span className="text-emerald-600 text-[11px] font-sans font-medium">✓</span>
          ) : (
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Share Button */}
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium transition-colors cursor-pointer"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        <span>{copiedLink ? "Kopyalandı" : "Paylaş"}</span>
      </button>
    </div>
  );
}
