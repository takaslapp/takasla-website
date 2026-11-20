import type { Metadata } from "next";
import InfoLayout, { type TocItem } from "@/components/info/InfoLayout";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "Takasla internet sitesi ve mobil platformunda kullanılan çerezler, takip teknolojileri ve çerez yönetimi politikası.",
  alternates: {
    canonical: "/cerez-politikasi",
  },
  // Yasal metin: sitede erişilebilir kalır, ancak arama sonuçlarında listelenmez (ince içerik oranını düşürür)
  robots: { index: false, follow: true },
  keywords: ["takasla çerez politikası", "cookie policy", "çerez yönetimi"],
};

const TOC: TocItem[] = [
  { id: "cerez-cookie-nedir", label: "1. Çerez (Cookie) Nedir?" },
  { id: "kullanilan-cerez-turleri", label: "2. Kullanılan Çerez Türleri" },
  { id: "cerezlerin-kullanim-amaclari", label: "3. Çerezlerin Kullanım Amaçları" },
  { id: "cerez-tercihlerinin-yonetimi", label: "4. Çerez Tercihlerinin Yönetimi" },
  { id: "iletisim", label: "5. İletişim" },
];

export default function CerezPolitikasiPage() {
  return (
    <InfoLayout path="/cerez-politikasi" title="Çerez Politikası" updated="10 Ekim 2026" toc={TOC}>
      <div className="doc">
        <section>
        <h2 id="cerez-cookie-nedir">1. Çerez (Cookie) Nedir?</h2>
        <p>
          Çerezler, web sitemizi veya mobil uygulamamızı ziyaret ettiğinizde
          tarayıcınız ya da cihazınız aracılığıyla depolanan küçük metin
          dosyalarıdır. Çerezler, kullanıcı deneyiminizi iyileştirmek,
          güvenliğinizi sağlamak ve platformumuzu optimize etmek amacıyla
          kullanılmaktadır.
        </p>
      </section>

      <section>
        <h2 id="kullanilan-cerez-turleri">2. Kullanılan Çerez Türleri</h2>
        <ul>
          <li>
            <strong>Zorunlu Çerezler:</strong> Platformun
            temel fonksiyonlarının çalışması ve oturum güvenliği için gereklidir.
          </li>
          <li>
            <strong>Performans ve Analiz Çerezleri:</strong>{" "}
            Ziyaretçilerin siteyi nasıl kullandığını anlamamıza ve hizmet kalitemizi
            artırmamıza yardımcı olur.
          </li>
          <li>
            <strong>İşlevsellik Çerezleri:</strong> Tercihlerinizi
            (dil, bölge vb.) hatırlayarak kişiselleştirilmiş bir deneyim sunar.
          </li>
        </ul>
      </section>

      <section>
        <h2 id="cerezlerin-kullanim-amaclari">3. Çerezlerin Kullanım Amaçları</h2>
        <p>
          Takasla platformunda çerezler; kullanıcı kimlik doğrulamalarının yapılması,
          güvenli takas süreçlerinin yürütülmesi ve kullanıcı deneyimini daha akıcı
          hale getirmek amacıyla işlenmektedir.
        </p>
      </section>

      <section>
        <h2 id="cerez-tercihlerinin-yonetimi">4. Çerez Tercihlerinin Yönetimi</h2>
        <p>
          Tarayıcı ayarlarınız üzerinden dilediğiniz zaman çerez tercihlerinizi
          değiştirebilir veya mevcut çerezleri silebilirsiniz. Ancak zorunlu
          çerezlerin devre dışı bırakılması durumunda platformun bazı işlevleri
          düzgün çalışmayabilir.
        </p>
      </section>

      <section>
        <h2 id="iletisim">5. İletişim</h2>
        <p>
          Çerez Politikamıza ilişkin her türlü soru ve talepleriniz için bizimle{" "}
          <a
            href="mailto:takaslappcom@gmail.com"
          >
            takaslappcom@gmail.com
          </a>{" "}
          adresi üzerinden iletişime geçebilirsiniz.
        </p>
      </section>
      </div>
    </InfoLayout>
  );
}
