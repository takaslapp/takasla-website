import Link from "next/link";

export default function LegalHeader() {
  return (
    <header className="w-full bg-[#151716] text-white py-5 px-6 flex items-center justify-center border-b border-white/10 shadow-md">
      <Link href="/" className="flex items-center group" aria-label="Takasla Ana Sayfa">
        <img
          src="/images/takasla-yesil-logo.png"
          alt="Takasla"
          className="h-7 sm:h-8 w-auto object-contain group-hover:scale-105 transition-transform"
        />
      </Link>
    </header>
  );
}
