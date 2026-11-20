import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/market/SiteHeader";
import Breadcrumbs from "@/components/market/Breadcrumbs";
import AppCta from "@/components/market/AppCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Takasla nasıl çalışır?",
  description:
    "Takasla'da ilan verme, takas teklifi gönderme, TakasPara ve takası tamamlama adımları. Uygulamanın nasıl çalıştığını ekran görüntüleriyle incele.",
  alternates: { canonical: "/nasil-calisir" },
};

const STEPS = [
  {
    title: "1. İlanları keşfet",
    text: "Kategorilere ve konuma göre takasa açık ürünlere göz at. Her ilanda ürünün durumu ve ilan sahibinin karşılığında aradığı ürünler yazar.",
    img: "/images/app/takasla-app-kesfet.webp",
  },
  {
    title: "2. Kendi ilanını ver",
    text: "Fotoğraf ekle, başlık ve açıklama yaz, ürünün durumunu seç. İlanlar Topluluk Kuralları'na uygunluk açısından kontrol edildikten sonra yayınlanır. İlan vermek ücretsizdir.",
    img: "/images/app/takasla-app-ilan-ver.webp",
  },
  {
    title: "3. Takas teklifi gönder",
    text: "Beğendiğin ilana kendi ürünlerinden bir veya birkaçını seçerek teklif gönder. Teklifler 24 saat geçerlidir. Hesabının ilk başarılı teklifi ücretsizdir; sonraki tekliflerde gönderen ve kabul eden taraftan 10'ar TakasPara işlem bedeli alınır. Reddedilen, iptal edilen veya süresi dolan tekliflerde gönderenin TakasPara'sı iade edilir.",
    img: "/images/app/takasla-app-kategoriler.webp",
  },
  {
    title: "4. Yazış ve buluş",
    text: "Teklif kabul edilince takas aktif hale gelir ve uygulama içinden yazışabilirsiniz. Teslimatın yerini ve zamanını taraflar belirler; Takasla kargo veya ödeme aracılığı yapmaz.",
    img: "/images/app/takasla-app-mesajlasma.webp",
  },
  {
    title: "5. Takası tamamla ve değerlendir",
    text: "Ürünler el değiştirdikten sonra takası uygulamada tamamla ve karşı tarafı değerlendir. Değerlendirmeler, sonraki kullanıcıların güvenle takas yapmasına yardımcı olur.",
    img: "/images/app/takasla-app-degerlendir.webp",
  },
];

export default function NasilCalisirPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-6">
        <Breadcrumbs items={[{ name: "Nasıl çalışır?", href: "/nasil-calisir" }]} />
        <h1 className="mt-3 text-2xl font-semibold">Takasla nasıl çalışır?</h1>
        <p className="mt-2 text-muted">
          Takasla, kullanmadığın eşyaları başka kullanıcıların eşyalarıyla takas etmen için bir ilan platformu. Para
          el değiştirmez; ürün karşılığında ürün verilir.
        </p>

        <ol className="mt-8 space-y-10">
          {STEPS.map((s) => (
            <li key={s.title} className="grid items-center gap-6 sm:grid-cols-[200px_1fr]">
              <img
                src={s.img}
                alt={`Takasla uygulaması: ${s.title.replace(/^\d+\.\s*/, "")} ekranı`}
                loading="lazy"
                className="mx-auto w-44 rounded-xl border border-line sm:w-full"
              />
              <div>
                <h2 className="text-lg font-semibold">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <AppCta text="Takasla şu an iOS'ta yayında, Android sürümü yakında." />
        </div>
        <p className="mt-6 text-sm text-muted">
          Daha fazla soru için{" "}
          <Link href="/sss" className="text-link underline">
            Sıkça Sorulan Sorular
          </Link>{" "}
          sayfasına göz at.
        </p>
      </main>
      <Footer />
    </div>
  );
}
