import type { Metadata } from "next";
import InfoLayout, { type TocItem } from "@/components/info/InfoLayout";

export const metadata: Metadata = {
  title: "Ön Bilgilendirme Formu",
  description:
    "Takasla mobil uygulaması ve platformu üzerinden sunulan ücretli dijital hizmetlerin satın alınmasına ilişkin Ön Bilgilendirme Formu.",
  alternates: {
    canonical: "/on-bilgilendirme-formu",
  },
  // Yasal metin: sitede erişilebilir kalır, ancak arama sonuçlarında listelenmez (ince içerik oranını düşürür)
  robots: { index: false, follow: true },
  keywords: ["ön bilgilendirme formu", "takasla tüketici hakları", "mesafeli sözleşme bilgilendirme"],
};

const TOC: TocItem[] = [
  { id: "hizmet-saglayici-bilgileri", label: "1. Hizmet Sağlayıcı Bilgileri" },
  { id: "hizmetin-temel-ozellikleri", label: "2. Hizmetin Temel Özellikleri" },
  { id: "takaspara", label: "3. TakasPara" },
  { id: "takas-islemlerinde-takaspara-kullanimi", label: "4. Takas İşlemlerinde TakasPara Kullanımı" },
  { id: "toplam-fiyat-ve-odeme", label: "5. Toplam Fiyat ve Ödeme" },
  { id: "odeme-yontemi", label: "6. Ödeme Yöntemi" },
  { id: "hizmetin-ifasi", label: "7. Hizmetin İfası" },
  { id: "cayma-hakki", label: "8. Cayma Hakkı" },
  { id: "cayma-talebinin-iletilmesi", label: "9. Cayma Talebinin İletilmesi" },
  { id: "iade", label: "10. İade" },
  { id: "dijital-hakkin-kullanilmis-olmasi", label: "11. Dijital Hakkın Kullanılmış Olması" },
  { id: "sikayet-ve-basvuru", label: "12. Şikâyet ve Başvuru" },
  { id: "on-bilgilendirmenin-onayi", label: "13. Ön Bilgilendirmenin Onayı" },
];

export default function OnBilgilendirmeFormuPage() {
  return (
    <InfoLayout path="/on-bilgilendirme-formu" title="Ön Bilgilendirme Formu" updated="29 Eylül 2026" toc={TOC}>
      <div className="doc">
        <div>
        <p>
          İşbu Ön Bilgilendirme Formu, Takasla mobil uygulaması ve takaslapp.com üzerinden sunulan ücretli dijital hizmetlerin satın alınmasından önce kullanıcıyı bilgilendirmek amacıyla hazırlanmıştır. Mesafeli sözleşmelerde tüketicinin sözleşme kurulmadan önce hizmetin temel özellikleri, toplam bedel, sağlayıcı bilgileri, cayma hakkı ve başvuru yolları gibi konularda açık ve anlaşılır biçimde bilgilendirilmesi gerekir (
          <a
            href="https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/mesafeli-sozlesmeler-hakkinda-bilgilendirme"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tüketici Tanıtım Portalı - Mesafeli Sözleşmeler Hakkında Bilgilendirme
          </a>
          ).
        </p>
      </div>

      <section>
        <h2 id="hizmet-saglayici-bilgileri">1. Hizmet Sağlayıcı Bilgileri</h2>
        <div className="doc-box">
          <p>
            <strong>Hizmet Sağlayıcı:</strong> Recep Aydoğan
          </p>
          <p>
            <strong>Uygulama / Hizmet Adı:</strong> Takasla
          </p>
          <p>
            <strong>Adres:</strong> Esenler Mah., Horasan Sok., Görgülü Center No:4/4, Selçuklu / Konya
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
            <strong>İnternet Sitesi:</strong>{" "}
            <a
              href="https://takaslapp.com"
            >
              takaslapp.com
            </a>
          </p>
        </div>
      </section>

      <section>
        <h2 id="hizmetin-temel-ozellikleri">2. Hizmetin Temel Özellikleri</h2>
        <p>
          Takasla, kullanıcıların kullanmadıkları ürünler için ilan oluşturabildiği, diğer kullanıcıların ilanlarını keşfedebildiği, kendi ürünleriyle takas teklifi gönderebildiği ve uygulama içerisinden iletişim kurabildiği dijital bir platformdur.
        </p>
        <p>
          Takasla üzerinden sunulan ücretli hizmetler, uygulama içerisinde kullanılabilen dijital hakları ve TakasPara kullanımını kapsayabilir.
        </p>
        <p>
          Takasla, kullanıcıların takas ettiği fiziksel ürünlerin sahibi, satıcısı veya alıcısı değildir. Fiziksel ürünlerin durumu, doğruluğu, teslimi ve kullanıcılar arasındaki fiili takas süreci ilgili kullanıcıların sorumluluğundadır.
        </p>
      </section>

      <section>
        <h2 id="takaspara">3. TakasPara</h2>
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
          <li>satın alma ekranında belirtilen uygulama içi işlemlerde kullanılabilir.</li>
        </ul>
        <p>
          Kullanıcı, satın alma işlemini tamamlamadan önce elde edeceği TakasPara miktarını ve ödeyeceği toplam bedeli görebilir.
        </p>
      </section>

      <section>
        <h2 id="takas-islemlerinde-takaspara-kullanimi">4. Takas İşlemlerinde TakasPara Kullanımı</h2>
        <p>
          Ücretli bir takas teklifinde uygulanacak TakasPara bedeli, işlem gerçekleştirilmeden önce kullanıcıya gösterilir.
        </p>
        <p>
          Takasla’nın mevcut işleyişinde:
        </p>
        <ul>
          <li>teklif gönderen kullanıcıdan ilgili takas teklifine ilişkin TakasPara işlem bedeli alınabilir,</li>
          <li>teklif kabul edildiğinde kabul eden kullanıcıdan da ilgili TakasPara işlem bedeli alınabilir,</li>
          <li>bekleyen teklif reddedildiğinde, gönderen tarafından iptal edildiğinde veya süresi dolduğunda uygulanacak iade kuralı Takasla sistemi kapsamında yürütülür,</li>
          <li>kabul edilmiş bir takas daha sonra iptal edilirse daha önce kullanılan TakasPara tutarları iade edilmez.</li>
        </ul>
      </section>

      <section>
        <h2 id="toplam-fiyat-ve-odeme">5. Toplam Fiyat ve Ödeme</h2>
        <p>
          Satın alınacak dijital hizmet veya TakasPara paketinin toplam fiyatı, satın alma işlemi onaylanmadan önce kullanıcıya gösterilir.
        </p>
        <p>
          Gösterilen fiyat; işlem sırasında geçerli olan uygulama mağazası fiyatlandırması, vergiler ve ilgili ödeme altyapısının kurallarına göre belirlenebilir.
        </p>
        <p>
          Kullanıcı satın alma işlemini onayladığında, bunun bir ödeme yükümlülüğü doğurduğu kendisine açık şekilde gösterilmelidir. Bu bilgilendirmenin sözleşme kurulmadan önce yapılması mevzuatta açıkça öngörülmektedir (
          <a
            href="https://tuketici.ticaret.gov.tr/data/5e81982d13b876a1b04c7a42/2023-6502%20Say%C4%B1l%C4%B1%20T%C3%BCketicinin%20Korunmas%C4%B1%20Hakk%C4%B1nda%20Kanun.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            6502 Sayılı Tüketicinin Korunması Hakkında Kanun
          </a>
          ).
        </p>
      </section>

      <section>
        <h2 id="odeme-yontemi">6. Ödeme Yöntemi</h2>
        <p>
          Ödemeler, Takasla’nın kullanıldığı platforma bağlı olarak ilgili uygulama mağazasının veya yetkilendirilmiş ödeme altyapısının sunduğu yöntemler aracılığıyla gerçekleştirilebilir.
        </p>
        <p>
          Kredi kartı, banka kartı veya diğer ödeme araçlarına ilişkin bilgiler Takasla tarafından doğrudan işlenmeyebilir; ödeme işlemleri ilgili ödeme veya uygulama mağazası altyapısı üzerinden gerçekleştirilebilir.
        </p>
      </section>

      <section>
        <h2 id="hizmetin-ifasi">7. Hizmetin İfası</h2>
        <p>
          Satın alma işlemi başarıyla tamamlandığında ilgili dijital hak veya TakasPara, teknik olarak mümkün olan en kısa sürede kullanıcının Takasla hesabına tanımlanır.
        </p>
        <p>
          Dijital hizmet, kullanıcının satın aldığı hakkın hesabına tanımlanması veya ilgili özelliğin kullanıma açılmasıyla ifa edilmeye başlanır.
        </p>
      </section>

      <section>
        <h2 id="cayma-hakki">8. Cayma Hakkı</h2>
        <p>
          Mesafeli sözleşmelerde tüketiciye kural olarak 14 günlük cayma hakkı tanınmaktadır. Bununla birlikte, elektronik ortamda anında ifa edilen hizmetler veya tüketicinin açık talebiyle cayma süresi sona ermeden ifasına başlanan bazı dijital hizmetlerde cayma hakkına ilişkin istisnalar uygulanabilir (
          <a
            href="https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/mesafeli-sozlesmeler-hakkinda-bilgilendirme"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mesafeli Sözleşmeler Bilgilendirme
          </a>
          ).
        </p>
        <p>
          Kullanıcı, satın aldığı dijital hakkı veya TakasPara’yı kullanmaya başlamadan önce ilgili cayma ve iade şartlarını incelemelidir.
        </p>
      </section>

      <section>
        <h2 id="cayma-talebinin-iletilmesi">9. Cayma Talebinin İletilmesi</h2>
        <p>
          Cayma hakkının mevcut olduğu durumlarda kullanıcı talebini aşağıdaki iletişim kanalından iletebilir:
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
          Uygulama mağazası üzerinden gerçekleştirilen satın alma işlemlerinde iade veya cayma talebi, ilgili mağazanın kendi süreçlerine de tabi olabilir.
        </p>
      </section>

      <section>
        <h2 id="iade">10. İade</h2>
        <p>
          İade hakkının bulunduğu ve iade talebinin kabul edildiği durumlarda geri ödeme, satın alma işleminin gerçekleştirildiği yöntem ve ilgili ödeme altyapısının kuralları çerçevesinde gerçekleştirilir.
        </p>
        <p>
          Yürürlükteki mevzuattan doğan zorunlu tüketici hakları saklıdır.
        </p>
      </section>

      <section>
        <h2 id="dijital-hakkin-kullanilmis-olmasi">11. Dijital Hakkın Kullanılmış Olması</h2>
        <p>
          Satın alınan TakasPara veya diğer dijital hizmetlerin tamamen veya kısmen kullanılmış olması durumunda, hizmetin ifa edilmiş kısmına ilişkin iade hakkı mevzuat ve ilgili satın alma koşulları kapsamında sınırlanabilir.
        </p>
        <p>
          Özellikle takas teklifinin kabul edilmesiyle birlikte ilgili TakasPara hizmetinin fiilen kullanılmış olması hâlinde, Takasla’nın uygulama içi işlem kuralları uygulanır.
        </p>
      </section>

      <section>
        <h2 id="sikayet-ve-basvuru">12. Şikâyet ve Başvuru</h2>
        <p>
          Kullanıcılar satın alma veya hizmete ilişkin soru, talep ve şikâyetlerini aşağıdaki iletişim kanalına iletebilir:
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
          Tüketicilerin mevzuattan doğan Tüketici Hakem Heyeti ve Tüketici Mahkemesine başvuru hakları saklıdır.
        </p>
      </section>

      <section>
        <h2 id="on-bilgilendirmenin-onayi">13. Ön Bilgilendirmenin Onayı</h2>
        <p>
          Kullanıcı, satın alma işlemini tamamlamadan önce:
        </p>
        <ul>
          <li>hizmetin temel özellikleri,</li>
          <li>toplam fiyat,</li>
          <li>ödeme yöntemi,</li>
          <li>hizmetin ifası,</li>
          <li>cayma ve iade koşulları,</li>
          <li>hizmet sağlayıcı bilgileri</li>
        </ul>
        <p>
          hakkında bilgilendirildiğini kabul eder.
        </p>
        <p>
          Bu form, Mesafeli Hizmet Sözleşmesinin ayrılmaz bir parçasıdır.
        </p>
      </section>
      </div>
    </InfoLayout>
  );
}
