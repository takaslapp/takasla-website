import type { Metadata } from "next";
import Link from "next/link";
import InfoLayout from "@/components/info/InfoLayout";
import { AppStoreBadge } from "@/components/market/StoreBadges";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Takasla nasıl çalışır?",
  description:
    "Takasla'da ilan verme, takas teklifi gönderme, TakasPara işlem bedeli ve takası tamamlama adımları. İlk başarılı teklif ücretsiz, teklifler 24 saat geçerli.",
  alternates: { canonical: "/nasil-calisir" },
  openGraph: {
    title: "Takasla nasıl çalışır?",
    description: "İlan ver, teklif gönder, buluş ve takası tamamla: adım adım Takasla.",
    url: absoluteUrl("/nasil-calisir"),
    type: "website",
    locale: "tr_TR",
    siteName: "Takasla",
    images: [{ url: "/images/app/takasla-app-kesfet.webp", alt: "Takasla uygulaması" }],
  },
};

const STEPS = [
  {
    id: "kesfet",
    title: "İlanları keşfet",
    text: "Kategorilere ve konuma göre takasa açık ürünlere göz at. Her ilanda ürünün durumu, fotoğrafları ve ilan sahibinin karşılığında aradığı ürünler yazar.",
    img: "/images/app/takasla-app-kesfet.webp",
    alt: "Takasla uygulamasında ilanları keşfet ekranı",
  },
  {
    id: "ilan-ver",
    title: "Kendi ilanını ver",
    text: "Fotoğraf ekle, başlık ve açıklama yaz, ürünün durumunu ve karşılığında ne aradığını seç. İlanlar Topluluk Kuralları'na uygunluk açısından kontrol edildikten sonra yayınlanır. İlan vermek ücretsizdir.",
    img: "/images/app/takasla-app-ilan-ver.webp",
    alt: "Takasla uygulamasında ilan oluşturma ekranı",
  },
  {
    id: "teklif",
    title: "Takas teklifi gönder",
    text: "Beğendiğin ilana kendi ürünlerinden bir veya birkaçını seçerek teklif gönder. Karşı taraf tekliflerden yalnızca bir kısmını da kabul edebilir. Bekleyen teklifler 24 saat geçerlidir.",
    img: "/images/app/takasla-app-kategoriler.webp",
    alt: "Takasla uygulamasında kategori ve ürün seçimi ekranı",
  },
  {
    id: "bulus",
    title: "Yazış ve buluş",
    text: "Teklif kabul edilince takas aktif hâle gelir ve uygulama içinden yazışabilirsiniz. Teslimatın yerini ve zamanını taraflar birlikte belirler; Takasla kargo veya ödeme aracılığı yapmaz.",
    img: "/images/app/takasla-app-mesajlasma.webp",
    alt: "Takasla uygulamasında mesajlaşma ekranı",
  },
  {
    id: "tamamla",
    title: "Takası tamamla ve değerlendir",
    text: "Ürünler el değiştirdikten sonra takası uygulamada tamamla ve karşı tarafı değerlendir. Değerlendirmeler, sonraki kullanıcıların güvenle takas yapmasına yardımcı olur.",
    img: "/images/app/takasla-app-degerlendir.webp",
    alt: "Takasla uygulamasında takas değerlendirme ekranı",
  },
];

const FEES: [string, string][] = [
  ["Hesabın ilk başarılı teklifi", "Ücretsiz"],
  ["Teklif gönderdiğinde", "10 TP (gönderenden)"],
  ["Teklif kabul edildiğinde", "10 TP (kabul edenden)"],
  ["Teklif reddedilirse, iptal edilirse veya 24 saat dolarsa", "Gönderenin 10 TP'si iade edilir"],
  ["Kabul edilen takas sonradan iptal edilirse", "İade edilmez"],
];

export default function NasilCalisirPage() {
  return (
    <InfoLayout
      path="/nasil-calisir"
      title="Takasla nasıl çalışır?"
      lead="Takasla'da para el değiştirmez: kullanmadığın bir eşyayı, ihtiyacın olan başka bir eşyayla takas edersin. Süreç beş adımdan oluşur."
      toc={[
        ...STEPS.map((s, i) => ({ id: s.id, label: `${i + 1}. ${s.title}` })),
        { id: "takaspara", label: "TakasPara işlem bedeli" },
        { id: "guvenli-takas", label: "Güvenli takas için" },
      ]}
    >
      <ol className="max-w-4xl">
        {STEPS.map((s, i) => (
          <li
            key={s.id}
            id={s.id}
            className="grid scroll-mt-24 items-center gap-6 border-t border-line py-8 first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,1fr)_200px] sm:gap-12"
          >
            <div className={i % 2 === 1 ? "sm:order-2" : ""}>
              <p className="text-sm tabular-nums text-muted">Adım {i + 1}</p>
              <h2 className="mt-1 text-xl font-semibold">{s.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed sm:text-base">{s.text}</p>
            </div>
            <div className={`rounded-2xl bg-surface px-6 pt-6 ${i % 2 === 1 ? "sm:order-1" : ""}`}>
              <img
                src={s.img}
                alt={s.alt}
                width={200}
                height={432}
                loading={i === 0 ? "eager" : "lazy"}
                className="mx-auto block max-h-[300px] w-auto rounded-t-xl"
              />
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-12 max-w-4xl" aria-labelledby="takaspara">
        <h2 id="takaspara" className="scroll-mt-24 text-lg font-semibold">
          TakasPara işlem bedeli
        </h2>
        <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-muted">
          TakasPara (TP), teklif işlemlerinde kullanılan uygulama içi kullanım hakkıdır. Nakit para değildir ve
          uygulama dışında kullanılamaz.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[480px] border-t border-line text-left text-[15px]">
            <caption className="sr-only">TakasPara işlem bedelleri</caption>
            <thead>
              <tr className="text-sm text-muted">
                <th scope="col" className="border-b border-line py-2.5 pr-4 font-normal">Durum</th>
                <th scope="col" className="border-b border-line py-2.5 font-normal">Bedel</th>
              </tr>
            </thead>
            <tbody>
              {FEES.map(([k, v]) => (
                <tr key={k}>
                  <td className="border-b border-line py-3 pr-4">{k}</td>
                  <td className="border-b border-line py-3 font-medium">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="doc mt-12">
        <h2 id="guvenli-takas">Güvenli takas için</h2>
        <ul>
          <li>Buluşmayı gündüz, kalabalık ve herkese açık bir yerde yap.</li>
          <li>Ürünü teslim almadan önce çalıştığını ve ilandaki gibi olduğunu kontrol et.</li>
          <li>Kapora, kargo ücreti veya ön ödeme isteyenlere itibar etme; Takasla hiçbir aşamada ödeme almaz.</li>
          <li>Yazışmaları uygulama içinde tut; şüpheli bir durumda kullanıcıyı uygulamadan bildir.</li>
        </ul>
        <p>
          Kuralların tamamı için <Link href="/topluluk-kurallari">Topluluk Kuralları</Link>, diğer sorular için{" "}
          <Link href="/sss">Sıkça Sorulan Sorular</Link> sayfasına göz at.
        </p>
      </section>

      <div className="mt-10 flex max-w-4xl flex-col gap-4 rounded-xl bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium">Takasla iOS&apos;ta yayında</p>
          <p className="mt-0.5 text-sm text-muted">Android sürümü test aşamasında, yakında Google Play&apos;de.</p>
        </div>
        <AppStoreBadge height={42} />
      </div>
    </InfoLayout>
  );
}
