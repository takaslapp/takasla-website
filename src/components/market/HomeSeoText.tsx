import Link from "next/link";
import { categorySlug } from "@/lib/taxonomy";
import type { Facet } from "@/lib/listings";

interface Props {
  cities: Facet[];
  posts: { slug: string; title: string }[];
}

const cat = (name: string) => `/kategori/${categorySlug(name)}`;
const L = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-ink underline underline-offset-2 hover:text-link">
    {children}
  </Link>
);

/**
 * Ana sayfa alt bilgi metni. Hedef aramalar: eşya takası, takas sitesi, takas uygulaması,
 * takas ilanları, ücretsiz takas sitesi, telefon/iPhone takas, takas nasıl yapılır, Takasla nedir.
 * Metin kullanıcıya gerçekten bilgi verecek şekilde yazıldı; anahtar kelime doldurulmadı.
 */
export default function HomeSeoText({ cities, posts }: Props) {
  return (
    <section
      aria-labelledby="takas-sitesi"
      className="mx-auto mt-16 max-w-6xl border-t border-line px-4 pt-10 text-[14px] leading-relaxed text-muted"
    >
      <h2 id="takas-sitesi" className="text-lg font-semibold text-ink">
        Eşya takası sitesi ve takas uygulaması: Takasla
      </h2>
      <p className="mt-3 max-w-4xl">
        Evinde kullanmadığın bir telefon, oyun konsolu, bebek arabası ya da hiç giyilmemiş bir mont mu var? Satmakla
        uğraşmak yerine onu ihtiyacın olan bir ürünle değiştirebilirsin. Takasla, kullanıcıların eşyalarını para
        ödemeden birbirleriyle takas ettiği bir <strong className="font-medium text-ink">eşya takası sitesi</strong> ve
        mobil <strong className="font-medium text-ink">takas uygulamasıdır</strong>. Türkiye genelindeki{" "}
        <L href="/ilanlar">takas ilanlarına</L> buradan göz atabilir, teklifini uygulama üzerinden gönderebilirsin.
      </p>

      <div className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
        <div>
          <h3 className="font-semibold text-ink">Takasla nedir?</h3>
          <p className="mt-2">
            Takasla, &quot;Parayla Değil, Takasla&quot; fikriyle kurulan bir takas platformudur. Her ilanda ürünün
            durumu, fotoğrafları ve ilan sahibinin karşılığında ne aradığı yazar. Böylece pazarlık etmeden, doğrudan
            sana uyan takaslara odaklanırsın. İlanlar yayından önce{" "}
            <L href="/topluluk-kurallari">topluluk kurallarına</L> göre kontrol edilir.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-ink">Takas nasıl yapılır?</h3>
          <ol className="mt-2 list-decimal space-y-1 pl-5">
            <li>Kullanmadığın eşyanın fotoğraflarını çek ve ücretsiz ilan ver.</li>
            <li>Beğendiğin ilana kendi ürünlerinden bir veya birkaçını teklif et.</li>
            <li>Teklif kabul edilince uygulamadan yazış, buluşma yerini birlikte belirleyin.</li>
            <li>Ürünleri yüz yüze kontrol edip değiştirin, ardından birbirinizi değerlendirin.</li>
          </ol>
          <p className="mt-2">
            Ayrıntılar için <L href="/nasil-calisir">takas nasıl yapılır</L> sayfasına bak.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-ink">Ücretsiz takas sitesi mi?</h3>
          <p className="mt-2">
            İlan vermek ücretsizdir ve hesabının ilk başarılı takas teklifi de ücret almaz. Sonraki tekliflerde iki
            taraftan 10&apos;ar TakasPara işlem bedeli alınır; reddedilen, iptal edilen ya da 24 saat içinde yanıt
            almayan tekliflerde bedel iade edilir. Takasla ödeme veya kargo aracılığı yapmaz, para hiçbir aşamada el
            değiştirmez.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-ink">Hangi eşyalar takas edilir?</h3>
          <p className="mt-2">
            En çok aranan takaslar <L href={cat("Elektronik & Teknoloji")}>telefon takası</L> ve{" "}
            <L href="/ilanlar?q=iphone">iPhone takası</L> gibi elektronik ürünler. Bunun yanında{" "}
            <L href={cat("Oyun & Konsol")}>oyun konsolu</L>, <L href={cat("Giyim & Moda")}>giyim ve ayakkabı</L>,{" "}
            <L href={cat("Ev, Yaşam & Dekorasyon")}>ev eşyası</L>,{" "}
            <L href={cat("Anne, Bebek & Çocuk")}>bebek ve çocuk ürünleri</L>,{" "}
            <L href={cat("Spor, Doğa & Outdoor")}>spor ekipmanı</L> ve{" "}
            <L href={cat("Hobi, Müzik & Koleksiyon")}>hobi ürünleri</L> de takasa açık. Yasal olarak sahip olduğun ve
            kurallara uygun her eşyayı ilana koyabilirsin.
          </p>
        </div>

        {cities.length > 0 && (
          <div>
            <h3 className="font-semibold text-ink">Şehrindeki takas ilanları</h3>
            <p className="mt-2">
              Takasta ürünler elden teslim edildiği için yakınındaki ilanlar önemlidir.{" "}
              {cities.slice(0, 12).map((c, i, arr) => (
                <span key={c.slug}>
                  <L href={`/sehir/${c.slug}`}>{c.name} takas ilanları</L>
                  {i < arr.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          </div>
        )}

        <div>
          <h3 className="font-semibold text-ink">Güvenli takas için</h3>
          <p className="mt-2">
            Buluşmayı gündüz ve kalabalık bir yerde yap, ürünü teslim almadan önce çalıştığını kontrol et. Kapora veya ön
            ödeme isteyenlere itibar etme. Merak ettiklerin için <L href="/sss">sıkça sorulan sorular</L>
            {posts.length > 0 && (
              <>
                {" "}ve <L href="/blog">takas rehberleri</L> sayfalarına göz at; örneğin{" "}
                <L href={`/blog/${posts[0].slug}`}>{posts[0].title}</L>
              </>
            )}
            .
          </p>
        </div>
      </div>
    </section>
  );
}
