import type { Metadata } from "next";
import Link from "next/link";
import InfoLayout from "@/components/info/InfoLayout";
import { AppStoreBadge } from "@/components/market/StoreBadges";
import { absoluteUrl, CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Takasla, kullanmadığın eşyayı para ödemeden başka bir eşyayla takas etmeni sağlayan ilan platformudur. Nasıl çalıştığımızı, ilkelerimizi ve ekibimizi tanı.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    title: "Takasla hakkında",
    description: "Para yerine eşya: Takasla'nın neden kurulduğu ve nasıl çalıştığı.",
    url: absoluteUrl("/hakkimizda"),
    type: "website",
    locale: "tr_TR",
    siteName: "Takasla",
  },
};

const FACTS: [string, string][] = [
  ["Para el değiştirmez", "Ürün karşılığında ürün verilir. Takasla satış, ödeme aracılığı veya kargo hizmeti sunmaz."],
  ["İlan vermek ücretsiz", "Fotoğrafını çek, açıklamanı yaz, karşılığında ne aradığını belirt. İlanlar yayından önce kurallara uygunluk açısından kontrol edilir."],
  ["İlk başarılı teklif ücretsiz", "Sonraki tekliflerde iki taraftan 10'ar TakasPara işlem bedeli alınır. Reddedilen veya süresi dolan teklifte bedel iade edilir."],
  ["Teslimatı taraflar belirler", "Teklif kabul edilince uygulama içinden yazışırsın; buluşma yerini ve zamanını karşı tarafla birlikte seçersin."],
];

const PRINCIPLES = [
  {
    title: "Sade kurallar",
    text: "Teklif ve iade koşullarını tek cümleyle anlatabileceğimiz kadar basit tutuyoruz. Kuralların tamamı Kullanım Koşulları'nda ve Sıkça Sorulan Sorular'da açıkça yazılı.",
  },
  {
    title: "Kontrollü ilanlar",
    text: "Her ilan yayına girmeden önce Topluluk Kuralları'na göre incelenir. Yasaklı ürünler, yanıltıcı ilanlar ve sahte hesaplar yayından kaldırılır.",
  },
  {
    title: "Karşılıklı güven",
    text: "Tamamlanan her takastan sonra taraflar birbirini değerlendirir. Profilde görünen takas sayısı ve puan, bir sonraki kullanıcının karar vermesine yardımcı olur.",
  },
  {
    title: "Gerekli kadar veri",
    text: "Hizmeti sunmak için gereken bilgiyi işler, kişisel verileri KVKK kapsamında korur ve hesabını sildiğinde verilerini mevzuatın izin verdiği ölçüde sileriz.",
  },
];

export default function HakkimizdaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Takasla hakkında",
    url: absoluteUrl("/hakkimizda"),
    about: { "@type": "Organization", name: "Takasla", url: absoluteUrl("/"), email: CONTACT_EMAIL },
  };

  return (
    <InfoLayout
      path="/hakkimizda"
      title="Hakkımızda"
      lead="Takasla, kullanmadığın eşyayı başka bir kullanıcının eşyasıyla takas etmen için kurulmuş bir ilan platformu. Para el değiştirmez; ürün karşılığında ürün verilir."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_220px] md:gap-12">
        <div className="doc">
          <h2 id="neden">Neden takas?</h2>
          <p>
            Hemen her evde bir dolap dolusu “bir gün lazım olur” eşyası var: bir kez giyilip kenara kaldırılan mont,
            çocuk büyüdüğü için kullanılmayan bebek arabası, yenisi alınınca çekmeceye giren telefon. Bunları satmak
            uğraştırıyor; atmak ise hem israf hem de vicdani bir yük.
          </p>
          <p>
            Takas bu iki seçeneğin arasında kalan boşluğu dolduruyor. Senin işine yaramayan eşya başkasının ihtiyacı
            olabilir, onun elindeki de senin. Takasla bu iki kişiyi aynı ekranda buluşturmak için var.
          </p>
          <p>
            Pazarlık, fiyat etiketi veya ödeme yok. İlanını verirken karşılığında ne aradığını yazıyorsun; teklifler
            buna göre geliyor. Uygun bir teklif gördüğünde kabul ediyor, karşı tarafla yazışıp takası
            tamamlıyorsun.
          </p>
        </div>
        <img
          src="/images/app/takasla-app-kesfet.webp"
          alt="Takasla uygulamasında ilanları keşfet ekranı"
          width={220}
          height={476}
          loading="lazy"
          className="mx-auto hidden w-[200px] rounded-2xl border border-line md:block"
        />
      </section>

      <section className="mt-12" aria-labelledby="temel-bilgiler">
        <h2 id="temel-bilgiler" className="text-lg font-semibold">
          Kısaca Takasla
        </h2>
        <dl className="mt-4 grid border-t border-line sm:grid-cols-2">
          {FACTS.map(([t, d], i) => (
            <div
              key={t}
              className={`border-b border-line py-5 sm:pr-8 ${i % 2 === 1 ? "sm:border-l sm:pl-8 sm:pr-0" : ""}`}
            >
              <dt className="font-medium">{t}</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-muted">{d}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12" aria-labelledby="ilkeler">
        <h2 id="ilkeler" className="text-lg font-semibold">
          Nasıl çalışıyoruz
        </h2>
        <ol className="mt-4 space-y-6">
          {PRINCIPLES.map((p, i) => (
            <li key={p.title} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 sm:max-w-3xl">
              <span className="pt-0.5 text-sm tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-muted">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="doc mt-12">
        <h2 id="bugun">Bugün neredeyiz?</h2>
        <p>
          Takasla Konya&apos;da geliştirilen bağımsız bir girişim. iOS uygulamamız App Store&apos;da yayında, Android
          sürümü test aşamasında. Bu sitede uygulamada yayınlanan ilanları herkes görüntüleyebilir; teklif göndermek
          ve mesajlaşmak için uygulamayı kullanman gerekir.
        </p>
        <p>
          Ürünü geliştirirken en çok kullanıcılarımızdan gelen geri bildirimlerden yararlanıyoruz. Bir öneri,
          şikâyet veya iş birliği teklifin varsa <Link href="/iletisim">iletişim sayfasından</Link> bize ulaşabilirsin.
        </p>
      </section>

      <div className="mt-10 flex max-w-3xl flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm">
          <p className="font-medium">Takasla&apos;yı uygulamada dene</p>
          <p className="mt-0.5 text-muted">
            <Link href="/nasil-calisir" className="underline">
              Nasıl çalışır
            </Link>{" "}
            ·{" "}
            <Link href="/sss" className="underline">
              Sıkça sorulan sorular
            </Link>{" "}
            ·{" "}
            <Link href="/kariyer" className="underline">
              Kariyer
            </Link>
          </p>
        </div>
        <AppStoreBadge height={42} />
      </div>
    </InfoLayout>
  );
}
