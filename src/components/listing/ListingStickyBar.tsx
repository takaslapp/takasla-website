"use client";

interface ListingStickyBarProps {
  listingNo: number;
  title: string;
  conditionName?: string;
  imageUrl?: string | null;
}

export default function ListingStickyBar({
  listingNo,
  title,
  conditionName,
  imageUrl,
}: ListingStickyBarProps) {
  const handleOpenApp = () => {
    const appUrl = `takasla://listing/${listingNo}`;
    window.location.href = appUrl;
    setTimeout(() => {
      const el = document.getElementById("uygulamayi-indir");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 1200);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 px-4 shadow-lg">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          {imageUrl && (
            <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 shrink-0 overflow-hidden flex items-center justify-center">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-gray-900 truncate leading-tight">
              {title}
            </p>
            {conditionName && (
              <p className="text-[11px] text-gray-500 truncate mt-0.5">
                {conditionName}
              </p>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={handleOpenApp}
          className="shrink-0 inline-flex items-center justify-center bg-gray-900 hover:bg-black text-white font-medium text-xs px-4 py-2.5 rounded-xl transition-all active:scale-95 shadow-xs cursor-pointer"
        >
          Uygulamada Aç
        </button>
      </div>
    </div>
  );
}
