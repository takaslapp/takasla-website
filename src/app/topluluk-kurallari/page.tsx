import type { Metadata } from "next";
import InfoLayout, { type TocItem } from "@/components/info/InfoLayout";

export const metadata: Metadata = {
  title: "Topluluk Kuralları",
  description: "Takasla topluluk kuralları, saygılı iletişim standartları, yasaklı ürünler ve güvenli ilan politikası.",
  alternates: {
    canonical: "/topluluk-kurallari",
  },
  keywords: ["takasla topluluk kuralları","yasaklı ürünler","güvenli takas rehberi"],
};

const TOC: TocItem[] = [
  { id: "temel-topluluk-ilkeleri", label: "1. Temel Topluluk İlkeleri" },
  { id: "ilanlarda-dogru-bilgi-verme", label: "2. İlanlarda Doğru Bilgi Verme" },
  { id: "yasakli-urunler", label: "3. Yasaklı Ürünler" },
  { id: "sinirlandirilmis-veya-uygun-gorulmeyen-urunler", label: "4. Sınırlandırılmış veya Uygun Görülmeyen Ürünler" },
  { id: "pornografik-ve-cinsel-icerikler", label: "5. Pornografik ve Cinsel İçerikler" },
  { id: "siddet-tehdit-ve-taciz", label: "6. Şiddet, Tehdit ve Taciz" },
  { id: "nefret-ve-ayrimcilik", label: "7. Nefret ve Ayrımcılık" },
  { id: "dolandiricilik-ve-yaniltici-davranis", label: "8. Dolandırıcılık ve Yanıltıcı Davranış" },
  { id: "spam-ve-platformun-kotuye-kullanilmasi", label: "9. Spam ve Platformun Kötüye Kullanılması" },
  { id: "fikri-mulkiyet-haklari", label: "10. Fikri Mülkiyet Hakları" },
  { id: "kisisel-bilgilerin-korunmasi", label: "11. Kişisel Bilgilerin Korunması" },
  { id: "mesajlasma-kurallari", label: "12. Mesajlaşma Kuralları" },
  { id: "degerlendirme-kurallari", label: "13. Değerlendirme Kuralları" },
  { id: "kullanici-engelleme", label: "14. Kullanıcı Engelleme" },
  { id: "icerik-ve-kullanici-raporlama", label: "15. İçerik ve Kullanıcı Raporlama" },
  { id: "moderasyon-ve-icerik-kaldirma", label: "16. Moderasyon ve İçerik Kaldırma" },
  { id: "acil-veya-agir-ihlaller", label: "17. Acil veya Ağır İhlaller" },
  { id: "kullanici-sorumlulugu", label: "18. Kullanıcı Sorumluluğu" },
  { id: "kurallarin-guncellenmesi", label: "19. Kuralların Güncellenmesi" },
  { id: "iletisim", label: "20. İletişim" },
];

export default function ToplulukKurallariPage() {
  return (
    <InfoLayout path="/topluluk-kurallari" title="Topluluk Kuralları ve Yasaklı İlan Politikası" updated="10 Ekim 2026" toc={TOC}>
      <div className="doc">
        <p>
        Takasla, kullanıcıların güvenli ve saygılı bir ortamda ilan oluşturabilmesi, takas teklifleri gönderebilmesi ve diğer kullanıcılarla iletişim kurabilmesi amacıyla faaliyet gösteren bir platformdur.<br />Bu Topluluk Kuralları ve Yasaklı İlan Politikası, Takasla üzerinde paylaşılabilecek içeriklerin sınırlarını ve kullanıcıların uyması gereken temel kuralları belirler.<br />Takasla’yı kullanan herkes bu kurallara uymayı kabul eder.
      </p>

      <section>
        <h2 id="temel-topluluk-ilkeleri">1. Temel Topluluk İlkeleri</h2>
      </section>

      <p>
        Takasla kullanılırken;
      </p>

      <ul>
        <li>diğer kullanıcılara saygılı davranılması,</li>
        <li>doğru ve yanıltıcı olmayan bilgi verilmesi,</li>
        <li>yalnızca hukuka uygun ürünlerin paylaşılması,</li>
        <li>diğer kullanıcıların güvenliğinin tehlikeye atılmaması,</li>
        <li>üçüncü kişilerin haklarına saygı gösterilmesi,</li>
        <li>platformun amacı dışında kullanılmaması</li>
      </ul>

      <p>
        beklenir.<br />Takasla, platform güvenliğini ve topluluk düzenini korumak amacıyla kurallara aykırı içerikleri inceleyebilir, sınırlandırabilir veya kaldırabilir.
      </p>

      <section>
        <h2 id="ilanlarda-dogru-bilgi-verme">2. İlanlarda Doğru Bilgi Verme</h2>
      </section>

      <p>
        Kullanıcılar oluşturdukları ilanlarda ürünün gerçek durumunu doğru şekilde belirtmelidir.<br />Aşağıdaki davranışlara izin verilmez:
      </p>

      <ul>
        <li>Gerçekte sahip olunmayan ürün için ilan oluşturmak</li>
        <li>Başka bir ürüne ait fotoğraf kullanmak</li>
        <li>Ürünün durumunu bilinçli olarak yanlış göstermek</li>
        <li>Ürünün önemli kusurlarını bilerek gizlemek</li>
        <li>Yanıltıcı veya sahte açıklamalar kullanmak</li>
        <li>Kullanıcıları aldatmaya yönelik ilan oluşturmak</li>
      </ul>

      <p>
        İlan görselleri mümkün olduğunca ilana konu gerçek ürünü göstermelidir.
      </p>

      <section>
        <h2 id="yasakli-urunler">3. Yasaklı Ürünler</h2>
      </section>

      <p>
        Takasla üzerinden yürürlükteki mevzuata aykırı ürünlerin takasa sunulması yasaktır.<br />Bunlara örnek olarak:
      </p>

      <ul>
        <li>Uyuşturucu ve yasa dışı maddeler</li>
        <li>Ruhsatsız veya hukuka aykırı silahlar ve mühimmat</li>
        <li>Patlayıcı maddeler</li>
        <li>Çalıntı veya hukuka aykırı şekilde elde edilmiş ürünler</li>
        <li>Sahte veya taklit ürünler</li>
        <li>Reçeteye tabi veya hukuken satışı sınırlandırılmış ilaçlar</li>
        <li>Hukuka aykırı tıbbi ürünler</li>
        <li>İnsan organı, doku veya benzeri biyolojik materyaller</li>
        <li>Nesli koruma altında olan canlılar veya bunlardan elde edilen hukuka aykırı ürünler</li>
        <li>Resmî belge, kimlik, ruhsat veya benzeri kişiye özel belgeler</li>
        <li>Yasa dışı erişim sağlayan hesap, yazılım, cihaz veya hizmetler</li>
        <li>Başkasına ait kişisel veya finansal bilgiler</li>
        <li>Hukuken ticareti veya devri yasaklanan diğer her türlü ürün</li>
      </ul>

      <p>
        yer almaktadır.<br />Bu liste sınırlı değildir. Yürürlükteki mevzuat kapsamında takası, satışı veya devri yasaklanan bir ürün Takasla üzerinde de paylaşılmaz.
      </p>

      <section>
        <h2 id="sinirlandirilmis-veya-uygun-gorulmeyen-urunler">4. Sınırlandırılmış veya Uygun Görülmeyen Ürünler</h2>
      </section>

      <p>
        Takasla, hukuken tamamen yasak olmasa dahi kullanıcı güvenliği veya platformun yapısı nedeniyle belirli ürünlerin ilan edilmesine izin vermeyebilir.<br />Bu kapsamda örneğin:
      </p>

      <ul>
        <li>Alkol ve tütün ürünleri</li>
        <li>Nikotin içeren ürünler</li>
        <li>Elektronik sigara ve benzeri ürünler</li>
        <li>Ateşli silah aksesuarları</li>
        <li>Kullanımı ciddi güvenlik riski doğurabilecek ürünler</li>
        <li>Yaş sınırlamasına tabi ürünler</li>
        <li>Canlı hayvan ticareti</li>
        <li>Sağlık açısından risk oluşturabilecek kullanılmış kişisel ürünler</li>
      </ul>

      <p>
        moderasyon kapsamında sınırlandırılabilir veya kaldırılabilir.
      </p>

      <section>
        <h2 id="pornografik-ve-cinsel-icerikler">5. Pornografik ve Cinsel İçerikler</h2>
      </section>

      <p>
        Pornografik, açık cinsel veya cinsel hizmet niteliğindeki içeriklere izin verilmez.<br />Aşağıdakiler yasaktır:
      </p>

      <ul>
        <li>Pornografik görseller</li>
        <li>Cinsel hizmet teklifleri</li>
        <li>Cinsel içerikli ürün veya hizmetlerin uygunsuz şekilde pazarlanması</li>
        <li>Çocukların cinsel istismarını veya sömürüsünü içeren her türlü içerik</li>
        <li>Bir kişinin rızası dışında paylaşılan mahrem görüntüler</li>
      </ul>

      <p>
        Çocukların cinsel istismarı veya sömürüsüne ilişkin içerikler kesinlikle yasaktır ve gerekli durumlarda yetkili makamlara bildirilebilir. 
      </p>

      <p>
        <a
          href="https://developer.apple.com/app-store/review/guidelines/uk/?utm_source=chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple Developer →
        </a>
      </p>

      <section>
        <h2 id="siddet-tehdit-ve-taciz">6. Şiddet, Tehdit ve Taciz</h2>
      </section>

      <p>
        Aşağıdaki içerik ve davranışlara izin verilmez:
      </p>

      <ul>
        <li>Fiziksel şiddet tehdidi</li>
        <li>Taciz</li>
        <li>Israrlı rahatsız etme</li>
        <li>Şantaj</li>
        <li>Zorbalık</li>
        <li>Bir kullanıcıyı korkutmaya veya sindirmeye yönelik mesajlar</li>
        <li>Şiddeti teşvik eden içerikler</li>
      </ul>

      <p>
        Bir kullanıcı kendisini tehdit altında hissediyorsa diğer kullanıcıyı engelleyebilir ve ilgili içerik veya hesabı Takasla’ya bildirebilir.
      </p>

      <section>
        <h2 id="nefret-ve-ayrimcilik">7. Nefret ve Ayrımcılık</h2>
      </section>

      <p>
        Bir kişi veya gruba;
      </p>

      <ul>
        <li>ırk,</li>
        <li>etnik köken,</li>
        <li>milliyet,</li>
        <li>din,</li>
        <li>cinsiyet,</li>
        <li>cinsel yönelim,</li>
        <li>engellilik,</li>
        <li>benzeri korunan nitelikler</li>
      </ul>

      <p>
        üzerinden aşağılayıcı, tehdit edici veya nefret teşvik eden içeriklerin paylaşılması yasaktır.
      </p>

      <section>
        <h2 id="dolandiricilik-ve-yaniltici-davranis">8. Dolandırıcılık ve Yanıltıcı Davranış</h2>
      </section>

      <p>
        Takasla aşağıdaki davranışlara tolerans göstermez:
      </p>

      <ul>
        <li>Sahte ürün ilanı oluşturmak</li>
        <li>Kullanıcıları para veya ürün göndermeye kandırmak</li>
        <li>Başka bir kişi veya kurum gibi davranmak</li>
        <li>Sahte hesap oluşturmak</li>
        <li>Takas işlemini manipüle etmek</li>
        <li>Bir kullanıcıyı platform dışındaki şüpheli ödeme yöntemlerine yönlendirmek</li>
        <li>Kimlik veya finansal bilgi istemek</li>
        <li>Phishing bağlantıları paylaşmak</li>
        <li>Kampanya, ücretsiz teklif veya TakasPara sistemini kötüye kullanmak</li>
      </ul>

      <p>
        Şüpheli hesap veya içerikler sınırlandırılabilir.
      </p>

      <section>
        <h2 id="spam-ve-platformun-kotuye-kullanilmasi">9. Spam ve Platformun Kötüye Kullanılması</h2>
      </section>

      <p>
        Aşağıdaki davranışlara izin verilmez:
      </p>

      <ul>
        <li>Aynı ilanı gereksiz şekilde tekrar tekrar paylaşmak</li>
        <li>Kullanıcılara toplu ve istenmeyen mesaj göndermek</li>
        <li>Reklam veya tanıtım amacıyla kullanıcıları rahatsız etmek</li>
        <li>Bot veya otomatik sistemlerle izinsiz işlem yapmak</li>
        <li>Platformdan sistematik şekilde veri toplamak</li>
        <li>Güvenlik önlemlerini aşmaya çalışmak</li>
        <li>Sistemin normal çalışmasını bozacak davranışlarda bulunmak</li>
      </ul>

      <section>
        <h2 id="fikri-mulkiyet-haklari">10. Fikri Mülkiyet Hakları</h2>
      </section>

      <p>
        Kullanıcılar yalnızca paylaşmaya yetkili oldukları fotoğraf, metin ve diğer içerikleri kullanmalıdır.<br />Aşağıdaki içerikler kaldırılabilir:
      </p>

      <ul>
        <li>Başkasına ait fotoğrafın izinsiz kullanılması</li>
        <li>Telif hakkını ihlal eden görseller</li>
        <li>Marka veya tasarım haklarını ihlal eden içerikler</li>
        <li>Taklit veya sahte ürün ilanları</li>
      </ul>

      <p>
        Hak sahibi olduğunu düşünen kişiler Takasla ile iletişime geçebilir.
      </p>

      <section>
        <h2 id="kisisel-bilgilerin-korunmasi">11. Kişisel Bilgilerin Korunması</h2>
      </section>

      <p>
        Kullanıcıların başka kişilere ait;
      </p>

      <ul>
        <li>telefon numarası,</li>
        <li>açık adres,</li>
        <li>kimlik bilgileri,</li>
        <li>banka veya kart bilgileri,</li>
        <li>şifreler,</li>
        <li>özel yazışmalar,</li>
        <li>diğer kişisel bilgiler</li>
      </ul>

      <p>
        gibi verileri ilgili kişinin rızası veya hukuki dayanak olmaksızın paylaşması yasaktır.<br />Hesap şifreleri veya doğrulama kodları hiçbir kullanıcıyla paylaşılmamalıdır.
      </p>

      <section>
        <h2 id="mesajlasma-kurallari">12. Mesajlaşma Kuralları</h2>
      </section>

      <p>
        Takasla mesajlaşma sistemi öncelikle takas hakkında iletişim kurulması amacıyla kullanılmalıdır.<br />Mesajlaşma üzerinden;
      </p>

      <ul>
        <li>taciz,</li>
        <li>tehdit,</li>
        <li>spam,</li>
        <li>dolandırıcılık,</li>
        <li>pornografik içerik,</li>
        <li>hukuka aykırı faaliyet,</li>
        <li>kişisel bilgi elde etmeye yönelik girişimler</li>
      </ul>

      <p>
        yasaktır.<br />Kullanıcılar rahatsız edici hesapları engelleyebilir ve gerekli durumlarda raporlayabilir.
      </p>

      <section>
        <h2 id="degerlendirme-kurallari">13. Değerlendirme Kuralları</h2>
      </section>

      <p>
        Kullanıcı değerlendirmeleri gerçek bir takas deneyimine dayanmalıdır.<br />Aşağıdakilere izin verilmez:
      </p>

      <ul>
        <li>Gerçekleşmemiş işlem hakkında sahte değerlendirme yapmak</li>
        <li>Değerlendirme sistemini manipüle etmek</li>
        <li>Bir kullanıcıyı tehdit etmek amacıyla değerlendirme kullanmak</li>
        <li>Hakaret veya kişisel saldırı içeren değerlendirme yazmak</li>
        <li>Birden fazla hesap kullanarak puan yükseltmek veya düşürmek</li>
      </ul>

      <p>
        Takasla, kötüye kullanım içeren değerlendirmeleri kaldırabilir.
      </p>

      <section>
        <h2 id="kullanici-engelleme">14. Kullanıcı Engelleme</h2>
      </section>

      <p>
        Kullanıcılar kendileriyle iletişim kurmasını istemedikleri diğer kullanıcıları engelleyebilir.<br />Engelleme işlemi, uygulamanın teknik yapısına göre ilgili kullanıcının mesajlaşma veya diğer etkileşimlerinin sınırlandırılmasına neden olabilir.<br />Apple, kullanıcı tarafından oluşturulan içerik veya sosyal etkileşim içeren uygulamalarda kötüye kullanan kullanıcıların engellenebilmesini açıkça istemektedir. 
      </p>

      <p>
        <a
          href="https://developer.apple.com/app-store/review/guidelines/uk/?utm_source=chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple Developer →
        </a>
      </p>

      <section>
        <h2 id="icerik-ve-kullanici-raporlama">15. İçerik ve Kullanıcı Raporlama</h2>
      </section>

      <p>
        Kullanıcılar;
      </p>

      <ul>
        <li>ilanları,</li>
        <li>kullanıcı hesaplarını,</li>
        <li>mesajları veya mevcut raporlama özelliği bulunan diğer içerikleri</li>
      </ul>

      <p>
        uygunsuz veya kurallara aykırı olduğunu düşündüklerinde Takasla’ya bildirebilir.<br />Raporlar moderasyon kapsamında incelenebilir.<br />Bir raporun gönderilmiş olması içeriğin otomatik olarak kaldırılacağı anlamına gelmez.<br />Apple, UGC uygulamalarında kullanıcıların uygunsuz içerikleri raporlayabilmesini ve geliştiricinin bu raporlara zamanında yanıt verebilmesini şart koşmaktadır. 
      </p>

      <p>
        <a
          href="https://developer.apple.com/app-store/review/guidelines/uk/?utm_source=chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple Developer →
        </a>
      </p>

      <section>
        <h2 id="moderasyon-ve-icerik-kaldirma">16. Moderasyon ve İçerik Kaldırma</h2>
      </section>

      <p>
        Takasla platform güvenliğinin sağlanması amacıyla;
      </p>

      <ul>
        <li>otomatik kontroller,</li>
        <li>manuel moderasyon,</li>
        <li>kullanıcı şikâyetleri,</li>
        <li>güvenlik incelemeleri</li>
      </ul>

      <p>
        sonucunda platform kurallarına aykırı olduğunu değerlendirdiği içerikleri inceleyebilir.<br />Gerekli görülmesi halinde:
      </p>

      <ul>
        <li>ilan reddedilebilir,</li>
        <li>içerik kaldırılabilir,</li>
        <li>ilan pasife alınabilir,</li>
        <li>belirli özelliklere erişim sınırlandırılabilir,</li>
        <li>kullanıcıdan ek bilgi istenebilir,</li>
        <li>hesap geçici olarak kısıtlanabilir,</li>
        <li>ciddi veya tekrarlanan ihlallerde hesap kalıcı olarak kapatılabilir.</li>
      </ul>

      <section>
        <h2 id="acil-veya-agir-ihlaller">17. Acil veya Ağır İhlaller</h2>
      </section>

      <p>
        Aşağıdaki durumlarda Takasla daha hızlı güvenlik önlemleri uygulayabilir:
      </p>

      <ul>
        <li>Dolandırıcılık</li>
        <li>Fiziksel tehdit</li>
        <li>Çocukların güvenliğini tehlikeye atan içerik</li>
        <li>Çalıntı ürün şüphesi</li>
        <li>Yasa dışı ürün veya faaliyet</li>
        <li>Kullanıcı hesabının ele geçirilmesi</li>
        <li>Platform güvenliğine yönelik saldırı</li>
        <li>Tekrarlanan ciddi kural ihlalleri</li>
      </ul>

      <p>
        Kanunen gerekli olması halinde ilgili bilgiler yetkili mercilerle paylaşılabilir.
      </p>

      <section>
        <h2 id="kullanici-sorumlulugu">18. Kullanıcı Sorumluluğu</h2>
      </section>

      <p>
        Kullanıcı, Takasla’ya yüklediği veya gönderdiği içeriklerin hukuka ve bu kurallara uygun olmasından sorumludur.<br />Kullanıcının içeriğinin Takasla tarafından yayınlanmış veya ilk aşamada moderasyon sisteminden geçmiş olması, söz konusu içeriğin hukuka uygun olduğunun Takasla tarafından garanti edildiği anlamına gelmez.
      </p>

      <section>
        <h2 id="kurallarin-guncellenmesi">19. Kuralların Güncellenmesi</h2>
      </section>

      <p>
        Platformun gelişmesi, yeni özelliklerin eklenmesi, kullanıcı güvenliği veya mevzuat değişiklikleri nedeniyle bu kurallar güncellenebilir.<br />Önemli değişiklikler uygun yöntemlerle kullanıcıya bildirilebilir.<br />Güncel kurallar Takasla uygulaması veya takaslapp.com üzerinden erişilebilir olacaktır.
      </p>

      <section>
        <h2 id="iletisim">20. İletişim</h2>
      </section>

      <p>
        Topluluk kuralları, yasaklı ilanlar veya bir güvenlik problemi hakkında bize ulaşabilirsiniz:
      </p>

      <div className="doc-box">
        <p>Takasla – Recep Aydoğan</p>
        <p>Esenler Mah., Horasan Sok., Görgülü Center No:4/4<br />Selçuklu / Konya</p>
        <div>
          <p><strong>E-posta:</strong> <a href="mailto:takaslappcom@gmail.com">takaslappcom@gmail.com</a></p>
          <p><strong>İnternet Sitesi:</strong> <a href="https://takaslapp.com">takaslapp.com</a></p>
        </div>
      </div>
      </div>
    </InfoLayout>
  );
}
