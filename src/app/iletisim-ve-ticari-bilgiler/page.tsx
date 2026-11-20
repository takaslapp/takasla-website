import Link from "next/link";
import type { Metadata } from "next";
import InfoLayout, { type TocItem } from "@/components/info/InfoLayout";

export const metadata: Metadata = {
  title: "İletişim ve Ticari Bilgiler",
  description:
    "Takasla mobil uygulaması ve takaslapp.com platformuna ilişkin resmi hizmet sağlayıcı, ticari unvan ve kurumsal iletişim bilgileri.",
  alternates: {
    canonical: "/iletisim-ve-ticari-bilgiler",
  },
  keywords: ["takasla ticari bilgiler", "takasla hizmet sağlayıcı", "recep aydoğan"],
};

const TOC: TocItem[] = [
  { id: "hizmet-saglayici-bilgileri", label: "1. Hizmet Sağlayıcı Bilgileri" },
  { id: "takasla-hakkinda", label: "2. Takasla Hakkında" },
  { id: "destek-ve-iletisim", label: "3. Destek ve İletişim" },
  { id: "kisisel-verilere-iliskin-basvurular", label: "4. Kişisel Verilere İlişkin Başvurular" },
  { id: "tuketici-islemleri", label: "5. Tüketici İşlemleri" },
  { id: "kullanicilar-arasindaki-takaslar", label: "6. Kullanıcılar Arasındaki Takaslar" },
  { id: "bildirim-ve-talepler", label: "7. Bildirim ve Talepler" },
  { id: "internet-sitesi", label: "8. İnternet Sitesi" },
  { id: "yururluk", label: "9. Yürürlük" },
];

export default function IletisimVeTicariBilgilerPage() {
  return (
    <InfoLayout path="/iletisim-ve-ticari-bilgiler" title="İletişim ve Ticari Bilgiler" updated="29 Eylül 2026" toc={TOC}>
      <div className="doc">
        <div>
        <p>
          Bu sayfa, Takasla mobil uygulaması ve takaslapp.com internet sitesi üzerinden sunulan hizmetlere ilişkin iletişim ve hizmet sağlayıcı bilgilerini içerir.
        </p>
      </div>

      <section>
        <h2 id="hizmet-saglayici-bilgileri">1. Hizmet Sağlayıcı Bilgileri</h2>
        <div className="doc-box">
          <p>
            <strong>Hizmet Sağlayıcı:</strong> Recep Aydoğan
          </p>
          <p>
            <strong>Uygulama / Marka Adı:</strong> Takasla
          </p>
          <p>
            <strong>İnternet Sitesi:</strong>{" "}
            <a
              href="https://takaslapp.com"
            >
              takaslapp.com
            </a>
          </p>
          <p>
            <strong>E-posta:</strong>{" "}
            <a
              href="mailto:takaslappcom@gmail.com"
            >
              takaslappcom@gmail.com
            </a>
          </p>
          <p>
            <strong>Adres:</strong> Esenler Mah., Horasan Sok., Görgülü Center No:4/4, Selçuklu / Konya
          </p>
        </div>
      </section>

      <section>
        <h2 id="takasla-hakkinda">2. Takasla Hakkında</h2>
        <p>
          Takasla, kullanıcıların kullanmadıkları eşyalar için ilan oluşturabildiği, diğer kullanıcıların ürünlerini keşfedebildiği, kendi ürünleriyle takas teklifi gönderebildiği ve uygulama üzerinden iletişim kurabildiği dijital bir takas platformudur.
        </p>
        <p>
          Takasla, kullanıcılar arasında takasa konu edilen fiziksel ürünlerin satıcısı, alıcısı veya sahibi değildir. Platform, kullanıcıların birbirlerini bulmasını ve takas sürecini dijital ortamda yönetmesini sağlayan aracılık ve platform hizmetleri sunar.
        </p>
      </section>

      <section>
        <h2 id="destek-ve-iletisim">3. Destek ve İletişim</h2>
        <p>
          Takasla ile ilgili;
        </p>
        <ul>
          <li>hesap işlemleri,</li>
          <li>teknik sorunlar,</li>
          <li>satın alma ve TakasPara işlemleri,</li>
          <li>gizlilik ve kişisel veriler,</li>
          <li>ilan ve kullanıcı şikâyetleri,</li>
          <li>iptal, cayma ve iade talepleri,</li>
          <li>diğer destek talepleri</li>
        </ul>
        <p>
          için aşağıdaki iletişim kanalını kullanabilirsiniz:
        </p>
        <div className="doc-box">
          <p>
            <strong>E-posta:</strong>{" "}
            <a
              href="mailto:takaslappcom@gmail.com"
            >
              takaslappcom@gmail.com
            </a>
          </p>
        </div>
        <p>
          Başvurularda, talebin daha hızlı incelenebilmesi amacıyla Takasla hesabınızla ilişkili bilgileri ve talebinizin konusunu belirtmeniz önerilir.
        </p>
      </section>

      <section>
        <h2 id="kisisel-verilere-iliskin-basvurular">4. Kişisel Verilere İlişkin Başvurular</h2>
        <p>
          Kişisel verilerin işlenmesine ilişkin talepler, Takasla&apos;nın{" "}
          <Link
            href="/gizlilik-politikasi"
          >
            Gizlilik Politikası
          </Link>{" "}
          ve{" "}
          <Link
            href="/kvkk-aydinlatma-metni"
          >
            KVKK Aydınlatma Metni
          </Link>{" "}
          kapsamında değerlendirilir.
        </p>
        <p>
          Bu kapsamdaki başvurular için:
        </p>
        <div className="doc-box">
          <p>
            <strong>E-posta:</strong>{" "}
            <a
              href="mailto:takaslappcom@gmail.com"
            >
              takaslappcom@gmail.com
            </a>
          </p>
          <p>
            <strong>Adres:</strong> Esenler Mah., Horasan Sok., Görgülü Center No:4/4, Selçuklu / Konya
          </p>
        </div>
        <p>
          kanalları kullanılabilir.
        </p>
      </section>

      <section>
        <h2 id="tuketici-islemleri">5. Tüketici İşlemleri</h2>
        <p>
          Takasla üzerinden gerçekleştirilen ücretli dijital hizmet veya uygulama içi satın alma işlemlerine ilişkin detaylar;
        </p>
        <ul>
          <li>
            <Link
              href="/mesafeli-hizmet-sozlesmesi"
            >
              Mesafeli Hizmet Sözleşmesi
            </Link>
          </li>
          <li>
            <Link
              href="/on-bilgilendirme-formu"
            >
              Ön Bilgilendirme Formu
            </Link>
          </li>
          <li>
            <Link
              href="/iptal-ve-iade-kosullari"
            >
              İptal / Cayma / İade Koşulları
            </Link>
          </li>
        </ul>
        <p>
          sayfalarında açıklanmaktadır.
        </p>
        <p>
          Kullanıcıların yürürlükteki tüketici mevzuatından doğan başvuru hakları saklıdır.
        </p>
      </section>

      <section>
        <h2 id="kullanicilar-arasindaki-takaslar">6. Kullanıcılar Arasındaki Takaslar</h2>
        <p>
          Takasla üzerindeki fiziksel ürün ilanları kullanıcılar tarafından oluşturulur.
        </p>
        <p>
          Ürünlerin;
        </p>
        <ul>
          <li>doğruluğu,</li>
          <li>sahipliği,</li>
          <li>fiziksel durumu,</li>
          <li>teslimi,</li>
          <li>kullanıcılar arasındaki fiili değişimi</li>
        </ul>
        <p>
          ilgili kullanıcıların sorumluluğundadır.
        </p>
        <p>
          Takasla&apos;nın platform hizmetlerinden doğan yasal sorumlulukları saklıdır.
        </p>
      </section>

      <section>
        <h2 id="bildirim-ve-talepler">7. Bildirim ve Talepler</h2>
        <p>
          Takasla&apos;ya gönderilen destek, şikâyet veya diğer talepler mümkün olan en kısa sürede incelenir.
        </p>
        <p>
          Gerekli görülmesi hâlinde kullanıcıdan talebin doğrulanabilmesi için ek bilgi veya belge istenebilir.
        </p>
      </section>

      <section>
        <h2 id="internet-sitesi">8. İnternet Sitesi</h2>
        <p>
          Takasla&apos;nın resmi internet sitesi:
        </p>
        <p>
          <a
            href="https://takaslapp.com"
          >
            takaslapp.com
          </a>
        </p>
        <p>
          Güncel yasal metinlere, kullanıcı bilgilendirmelerine ve iletişim kanallarına internet sitesi üzerinden ulaşılabilir.
        </p>
      </section>

      <section>
        <h2 id="yururluk">9. Yürürlük</h2>
        <p>
          Bu iletişim ve hizmet sağlayıcı bilgileri 29 Eylül 2026 tarihi itibarıyla geçerlidir.
        </p>
        <p>
          Bilgilerde değişiklik olması hâlinde bu sayfa güncellenir.
        </p>
      </section>
      </div>
    </InfoLayout>
  );
}
