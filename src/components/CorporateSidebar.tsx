"use client";

import Link from "next/link";

interface CorporateSidebarProps {
  activeTab: "hakkimizda" | "iletisim" | "kariyer";
}

const CORPORATE_NAV = [
  { id: "hakkimizda", label: "Hakkımızda", href: "/hakkimizda" },
  { id: "iletisim", label: "İletişim", href: "/iletisim" },
  { id: "kariyer", label: "Kariyer", href: "/kariyer" },
];

export default function CorporateSidebar({ activeTab }: CorporateSidebarProps) {
  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      {/* Desktop Vertical Menu */}
      <div className="hidden md:flex flex-col space-y-2 pr-6 border-r border-gray-200">
        {CORPORATE_NAV.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`text-base font-medium py-2 px-3 rounded-lg transition-all ${
                isActive
                  ? "text-[#00A859] font-semibold bg-[#00E676]/10"
                  : "text-gray-700 hover:text-black hover:bg-gray-100"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile Horizontal Tabs */}
      <div className="md:hidden overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 flex gap-2 border-b border-gray-200 mb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {CORPORATE_NAV.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isActive
                  ? "bg-[#151716] text-[#00E676] shadow-sm font-semibold"
                  : "bg-white text-gray-600 border border-gray-200 hover:text-black"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
