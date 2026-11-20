import type { Metadata } from "next";
import Link from "next/link";
import InfoLayout from "@/components/info/InfoLayout";
import { absoluteUrl, CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kariyer",
  description:
    "Takasla'da çalışmak: küçük bir ekip, gerçek kullanıcılar ve sahiplenilen işler. Açık pozisyonlar ve genel başvuru hakkında bilgi.",
  alternates: { canonical: "/kariyer" },
  openGraph: {
    title: "Takasla'da kariyer",
    description: "Açık pozisyonlar ve genel başvuru.",
    url: absoluteUrl("/kariyer"),
    type: "website",
    locale: "tr_TR",
    siteName: "Takasla",
  },
};

const AREAS = [
  { title: "Mobil geliştirme", text: "Flutter ile iOS ve Android uygulaması; performans, bildirimler, mesajlaşma ve teklif akışları." },
  { title: "Web ve altyapı", text: "Next.js ile ilan sitesi, arama ve SEO; Supabase/PostgreSQL üzerinde veri modeli ve güvenlik." },
  { title: "Topluluk ve güven", text: "İlan moderasyonu, kullanıcı destek talepleri, şikâyetlerin incelenmesi ve topluluk kurallarının uygulanması." },
  { title: "İçerik ve büyüme", text: "Takas rehberleri, sosyal medya, kullanıcı araştırması ve şehir bazlı tanıtım çalışmaları." },
];

const APPLY_SUBJECT = "Kariyer - Genel başvuru";

export default function KariyerPage() {
  return (
    <InfoLayout
      path="/kariyer"
      title="Kariyer"
      lead="Takasla küçük bir ekip tarafından geliştiriliyor. Burada yaptığın her iş, birkaç hafta içinde gerçek kullanıcıların elinde olur."
    >
      <div className="max-w-3xl rounded-xl border border-line p-5">
        <p className="font-medium">Şu anda açık pozisyon bulunmuyor</p>
        <p className="mt-1 text-[15px] leading-relaxed text-muted">
          Yine de aşağıdaki alanlardan birinde katkı sunabileceğini düşünüyorsan genel başvuru yapabilirsin. Yeni bir
          rol açıldığında ilk olarak bu başvuruları değerlendiriyoruz.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(APPLY_SUBJECT)}`}
          className="mt-4 inline-flex h-10 items-center rounded-lg bg-ink px-4 text-sm font-medium text-white hover:bg-black"
        >
          Genel başvuru gönder
        </a>
      </div>

      <section className="mt-12 max-w-4xl" aria-labelledby="alanlar">
        <h2 id="alanlar" className="text-lg font-semibold">
          Birlikte çalışabileceğimiz alanlar
        </h2>
        <dl className="mt-4 grid border-t border-line sm:grid-cols-2">
          {AREAS.map((a, i) => (
            <div key={a.title} className={`border-b border-line py-5 sm:pr-8 ${i % 2 === 1 ? "sm:border-l sm:pl-8 sm:pr-0" : ""}`}>
              <dt className="font-medium">{a.title}</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-muted">{a.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="doc mt-12">
        <h2 id="nasil-calisiyoruz">Nasıl çalışıyoruz?</h2>
        <ul>
          <li>Kararları kullanıcı geri bildirimine ve veriye bakarak, kısa döngülerle veriyoruz.</li>
          <li>Herkes üstlendiği işin baştan sona sahibi; fikirden yayına kadar süreci birlikte yürütüyoruz.</li>
        </ul>

        <h2 id="basvuru">Başvurunda neler olmalı?</h2>
        <ol>
          <li>Kısa bir tanıtım: hangi alanda katkı sunmak istediğin ve neden Takasla.</li>
          <li>Özgeçmiş veya LinkedIn profili.</li>
          <li>Varsa üzerinde çalıştığın işler: GitHub, portföy, yayımlanmış uygulama veya yazı bağlantıları.</li>
        </ol>
        <p>
          Başvurunu <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(APPLY_SUBJECT)}`}>{CONTACT_EMAIL}</a>{" "}
          adresine “{APPLY_SUBJECT}” konu başlığıyla gönderebilirsin. Her başvuruyu okuyoruz; profiline uygun bir
          ihtiyaç doğduğunda seninle iletişime geçiyoruz.
        </p>
        <p className="text-sm text-muted">
          Başvurunda paylaştığın kişisel veriler yalnızca değerlendirme amacıyla işlenir. Ayrıntılar için{" "}
          <Link href="/kvkk-aydinlatma-metni">KVKK Aydınlatma Metni</Link>&apos;ne bakabilirsin.
        </p>
      </section>
    </InfoLayout>
  );
}
