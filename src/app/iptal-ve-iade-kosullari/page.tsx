import type { Metadata } from "next";
import InfoLayout, { type TocItem } from "@/components/info/InfoLayout";

export const metadata: Metadata = {
  title: "İptal ve İade Koşulları",
  description:
    "Takasla mobil uygulaması ve platformu üzerinden sunulan ücretli dijital hizmetler, TakasPara kullanımı ve satın alma işlemlerine ilişkin iptal, cayma ve iade esasları.",
  alternates: {
    canonical: "/iptal-ve-iade-kosullari",
  },
  // Yasal metin: sitede erişilebilir kalır, ancak arama sonuçlarında listelenmez (ince içerik oranını düşürür)
  robots: { index: false, follow: true },
  keywords: ["takasla iade", "takasla cayma hakkı", "iptal koşulları", "takaspara iade"],
};

const TOC: TocItem[] = [
  { id: "genel-esaslar", label: "1. Genel Esaslar" },
  { id: "takaspara-satin-alimlari", label: "2. TakasPara Satın Alımları" },
  { id: "cayma-hakki", label: "3. Cayma Hakkı" },
  { id: "cayma-talebinin-bildirilmesi", label: "4. Cayma Talebinin Bildirilmesi" },
  { id: "kullanilmamis-dijital-haklar", label: "5. Kullanılmamış Dijital Haklar" },
  { id: "kullanilmis-takaspara", label: "6. Kullanılmış TakasPara" },
  { id: "takas-teklifi-icin-kullanilan-takaspara", label: "7. Takas Teklifi İçin Kullanılan TakasPara" },
  { id: "takasin-iptal-edilmesi", label: "8. Takasın İptal Edilmesi" },
  { id: "fiziksel-urunlerin-iadesi", label: "9. Fiziksel Ürünlerin İadesi" },
  { id: "teknik-hata-veya-mukerrer-tahsilat", label: "10. Teknik Hata veya Mükerrer Tahsilat" },
  { id: "uygulama-magazasi-uzerinden-yapilan-satin-alimlar", label: "11. Uygulama Mağazası Üzerinden Yapılan Satın Alımlar" },
  { id: "geri-odeme-yontemi", label: "12. Geri Ödeme Yöntemi" },
  { id: "inceleme-ve-kotuye-kullanim", label: "13. İnceleme ve Kötüye Kullanım" },
  { id: "basvuru-ve-iletisim", label: "14. Başvuru ve İletişim" },
  { id: "yururluk", label: "15. Yürürlük" },
];

export default function IptalVeIadeKosullariPage() {
  return (
    <InfoLayout path="/iptal-ve-iade-kosullari" title="İptal, Cayma ve İade Koşulları" updated="29 Eylül 2026" toc={TOC}>
      <div className="doc">
        <div>
        <p>
          Bu metin, Takasla mobil uygulaması ve takaslapp.com üzerinden sunulan ücretli dijital hizmetler, TakasPara kullanımı ve uygulama içi satın alma işlemlerine ilişkin iptal, cayma ve iade esaslarını açıklamak amacıyla hazırlanmıştır.
        </p>
      </div>

      <section>
        <h2 id="genel-esaslar">1. Genel Esaslar</h2>
        <p>
          Takasla üzerinden sunulan ücretli hizmetler ve TakasPara işlemleri dijital niteliktedir. Kullanıcının satın alma işlemini tamamlaması, ilgili dijital hizmetin veya kullanım hakkının hesabına tanımlanması sonucunu doğurur.
        </p>
        <p>
          Tüketicilerin mesafeli sözleşmelerde kural olarak 14 günlük cayma hakkı bulunur. Ancak elektronik ortamda anında ifa edilen hizmetler, tüketiciye anında teslim edilen gayrimaddi ürünler ve cayma süresi dolmadan tüketicinin onayıyla ifasına başlanan hizmetler bakımından cayma hakkı istisnaları uygulanabilir (
          <a
            href="https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/mesafeli-sozlesmeler-hakkinda-bilgilendirme"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mesafeli Sözleşmeler Hakkında Bilgilendirme
          </a>
          ).
        </p>
      </section>

      <section>
        <h2 id="takaspara-satin-alimlari">2. TakasPara Satın Alımları</h2>
        <p>
          TakasPara (“TP”), yalnızca Takasla içerisinde belirlenen hizmetlerde kullanılabilen uygulama içi dijital kullanım hakkıdır.
        </p>
        <p>
          TakasPara:
        </p>
        <ul>
          <li>nakit para veya elektronik para değildir,</li>
          <li>uygulama dışında ödeme aracı olarak kullanılamaz,</li>
          <li>kanunen zorunlu hâller dışında nakde çevrilemez,</li>
          <li>satın alma ekranında belirtilen Takasla hizmetlerinde kullanılabilir.</li>
        </ul>
        <p>
          Kullanıcı, satın alma işlemini tamamlamadan önce satın alacağı TakasPara miktarını ve toplam ödeme tutarını görür.
        </p>
      </section>

      <section>
        <h2 id="cayma-hakki">3. Cayma Hakkı</h2>
        <p>
          Cayma hakkının uygulanabildiği durumlarda kullanıcı, sözleşmenin kurulduğu tarihten itibaren 14 gün içinde herhangi bir gerekçe göstermeden cayma hakkını kullanabilir (
          <a
            href="https://ticaret.gov.tr/data/5d42a9b313b87632542a2dae/Tuketicinin_Korunmasi_Hakkinda_Kanun_6502_Ocak_2021_Kitap.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            6502 Sayılı Kanun
          </a>
          ).
        </p>
        <p>
          Ancak TakasPara veya başka bir dijital hizmetin kullanıcının hesabına anında tanımlanması, tüketicinin talebi ve onayıyla hizmetin ifasına başlanması veya dijital hakkın kullanılması hâlinde cayma hakkı mevzuattaki istisnalar kapsamında sınırlanabilir veya kullanılamayabilir (
          <a
            href="https://tuketici.ticaret.gov.tr/data/5e819a8e13b876a1b04c7a4a/Mesafeli%20S%C3%B6zle%C5%9Fmeler%20Y%C3%B6netmeli%C4%9Fi.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mesafeli Sözleşmeler Yönetmeliği
          </a>
          ).
        </p>
      </section>

      <section>
        <h2 id="cayma-talebinin-bildirilmesi">4. Cayma Talebinin Bildirilmesi</h2>
        <p>
          Cayma hakkının mevcut olduğu durumlarda kullanıcı talebini açık bir beyanla aşağıdaki adrese iletebilir:
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
          Talepte kullanıcının hesabını ve ilgili satın alma işlemini belirlemeye yetecek bilgilerin bulunması gerekebilir.
        </p>
        <p>
          Uygulama mağazası üzerinden gerçekleştirilen satın almalarda iade veya cayma işlemleri ilgili mağazanın kendi iade sistemi ve kurallarına da tabi olabilir.
        </p>
      </section>

      <section>
        <h2 id="kullanilmamis-dijital-haklar">5. Kullanılmamış Dijital Haklar</h2>
        <p>
          Satın alınan dijital hakkın veya TakasPara&apos;nın hiç kullanılmamış olması, iade değerlendirmesinde dikkate alınabilir.
        </p>
        <p>
          İade hakkının mevzuat gereği bulunduğu durumlarda geri ödeme, ilgili satın alma işleminin gerçekleştirildiği ödeme yöntemi veya uygulama mağazası prosedürleri doğrultusunda gerçekleştirilir.
        </p>
      </section>

      <section>
        <h2 id="kullanilmis-takaspara">6. Kullanılmış TakasPara</h2>
        <p>
          TakasPara&apos;nın tamamen veya kısmen uygulama içinde kullanılmış olması hâlinde, kullanılan bölüme ilişkin hizmet ifa edilmiş kabul edilebilir.
        </p>
        <p>
          Mevzuattan doğan zorunlu tüketici hakları saklı olmak üzere, tüketilmiş veya kullanılmış dijital hakların iadesi mümkün olmayabilir.
        </p>
      </section>

      <section>
        <h2 id="takas-teklifi-icin-kullanilan-takaspara">7. Takas Teklifi İçin Kullanılan TakasPara</h2>
        <p>
          Takasla&apos;da takas tekliflerine ilişkin işlem bedelleri kullanıcıya işlem öncesinde gösterilir.
        </p>
        <div className="doc-box">
          <p>
            Mevcut sistemde geçerli kurallar:
          </p>
          <ul>
            <li>
              <span>Teklif Reddi:</span> Bekleyen bir teklif reddedilirse, teklif gönderen kullanıcının ilgili 10 TP işlem bedeli geri verilir.
            </li>
            <li>
              <span>Kullanıcı İptali:</span> Bekleyen teklif, teklif gönderen kullanıcı tarafından iptal edilirse ilgili 10 TP geri verilir.
            </li>
            <li>
              <span>Zaman Aşımı:</span> Bekleyen teklif süresi dolduğu için iptal edilirse ilgili 10 TP geri verilir.
            </li>
            <li>
              <span>Teklif Kabulü:</span> Teklif kabul edilirse gönderen kullanıcının kullandığı 10 TP geri verilmez.
            </li>
            <li>
              <span>Karşı Taraf Bedeli:</span> Teklif kabul edildiğinde karşı taraftan da ilgili 10 TP işlem bedeli alınır.
            </li>
            <li>
              <span>Kabul Sonrası İptal:</span> Kabul edilmiş bir takas daha sonra taraflardan biri tarafından iptal edilirse hiçbir tarafa TakasPara iadesi yapılmaz.
            </li>
            <li>
              <span>Tamamlanan Takaslar:</span> Tamamlanmış takaslarda işlem bedelleri iade edilmez.
            </li>
            <li>
              <span>İlk Ücretsiz Teklif:</span> İlk ücretsiz teklif kapsamında herhangi bir TakasPara tahsil edilmemişse iade konusu da oluşmaz.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 id="takasin-iptal-edilmesi">8. Takasın İptal Edilmesi</h2>
        <p>
          Kullanıcıların birbirleri arasında gerçekleştirdiği fiziksel ürün takası ile TakasPara satın alma işlemi birbirinden farklıdır.
        </p>
        <p>
          Bir takasın uygulama içinde iptal edilmesi, daha önce satın alınmış TakasPara paketinin otomatik olarak iade edileceği anlamına gelmez. Takasın hangi aşamada iptal edildiğine göre yukarıdaki işlem bedeli kuralları uygulanır.
        </p>
      </section>

      <section>
        <h2 id="fiziksel-urunlerin-iadesi">9. Fiziksel Ürünlerin İadesi</h2>
        <p>
          Takasla, kullanıcılar arasındaki fiziksel ürünlerin satıcısı veya alıcısı değildir.
        </p>
        <p>
          Kullanıcıların kendi aralarında değiştirdiği fiziksel ürünlerin geri verilmesi, değiştirilmesi veya takasın fiilen geri alınması taraflar arasındaki ilişkiye bağlıdır.
        </p>
        <p>
          Takasla&apos;nın bu metindeki iade hükümleri, esas olarak Takasla tarafından sunulan dijital hizmetler ve TakasPara işlemleri bakımından uygulanır.
        </p>
      </section>

      <section>
        <h2 id="teknik-hata-veya-mukerrer-tahsilat">10. Teknik Hata veya Mükerrer Tahsilat</h2>
        <p>
          Kullanıcının kontrolü dışında gerçekleşen:
        </p>
        <ul>
          <li>mükerrer ödeme,</li>
          <li>satın alınan TakasPara&apos;nın hesaba hiç yansımaması,</li>
          <li>ödeme tamamlanmasına rağmen dijital hizmetin sunulmaması,</li>
          <li>doğrulanabilir teknik satın alma hataları</li>
        </ul>
        <p>
          gibi durumlarda kullanıcı destek talebi oluşturabilir. Takasla, ilgili işlemi teknik kayıtlar ve ödeme sağlayıcısı kayıtları üzerinden inceleyebilir.
        </p>
      </section>

      <section>
        <h2 id="uygulama-magazasi-uzerinden-yapilan-satin-alimlar">11. Uygulama Mağazası Üzerinden Yapılan Satın Alımlar</h2>
        <p>
          Takasla içindeki satın alma işlemleri bir uygulama mağazası üzerinden gerçekleştirildiyse ödeme ve geri ödeme işlemlerinin tamamı veya bir bölümü ilgili mağazanın prosedürlerine tabi olabilir.
        </p>
        <p>
          Bu durumda kullanıcıdan iade talebini ilgili uygulama mağazasının iade kanalı üzerinden iletmesi istenebilir.
        </p>
      </section>

      <section>
        <h2 id="geri-odeme-yontemi">12. Geri Ödeme Yöntemi</h2>
        <p>
          İade hakkının mevcut olduğu ve iade talebinin kabul edildiği durumlarda ödeme, mümkün olduğu ölçüde kullanıcının satın alma sırasında kullandığı ödeme yöntemine uygun biçimde gerçekleştirilir. Mesafeli satışlarda cayma hakkının geçerli olduğu durumlarda geri ödemenin tüketicinin kullandığı ödeme aracına uygun şekilde yapılması esastır (
          <a
            href="https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/mesafeli-sozlesmeler-hakkinda-bilgilendirme"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mesafeli Sözleşmeler Rehberi
          </a>
          ).
        </p>
      </section>

      <section>
        <h2 id="inceleme-ve-kotuye-kullanim">13. İnceleme ve Kötüye Kullanım</h2>
        <p>
          İade, cayma veya teknik hata taleplerinde Takasla; satın alma kaydı, TakasPara hareketleri ve ilgili işlem geçmişini inceleyebilir.
        </p>
        <p>
          Hileli işlem, kötüye kullanım, sahte talep veya aynı dijital hakkın hem kullanılıp hem iade edilmeye çalışılması gibi durumlarda talep reddedilebilir. Yürürlükteki mevzuattan doğan zorunlu tüketici hakları saklıdır.
        </p>
      </section>

      <section>
        <h2 id="basvuru-ve-iletisim">14. Başvuru ve İletişim</h2>
        <p>
          İptal, cayma veya iade talepleri için:
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
            <strong>İnternet Sitesi:</strong>{" "}
            <a
              href="https://takaslapp.com"
            >
              takaslapp.com
            </a>
          </p>
        </div>
        <p>
          Kullanıcıların Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri dahil olmak üzere mevzuattan doğan başvuru hakları saklıdır.
        </p>
      </section>

      <section>
        <h2 id="yururluk">15. Yürürlük</h2>
        <p>
          Bu koşullar, Takasla üzerinden gerçekleştirilen dijital hizmet ve TakasPara işlemlerinde uygulanır.
        </p>
        <p>
          Takasla, yasal yükümlülükler veya hizmet modelindeki değişiklikler doğrultusunda bu metni güncelleyebilir. Kullanıcıların emredici mevzuattan doğan hakları bu değişikliklerden etkilenmez.
        </p>
      </section>
      </div>
    </InfoLayout>
  );
}
