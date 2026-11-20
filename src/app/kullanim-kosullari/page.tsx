import type { Metadata } from "next";
import InfoLayout, { type TocItem } from "@/components/info/InfoLayout";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Takasla platformu kullanım şartları, kullanıcı hak ve sorumlulukları ile sözleşme esasları.",
  alternates: {
    canonical: "/kullanim-kosullari",
  },
  keywords: ["takasla kullanım koşulları","kullanıcı sözleşmesi","takas kuralları"],
};

const TOC: TocItem[] = [
  { id: "takasla-nedir", label: "1. Takasla Nedir?" },
  { id: "uyelik-ve-kullanici-hesabi", label: "2. Üyelik ve Kullanıcı Hesabı" },
  { id: "sosyal-giris-yontemleri", label: "3. Sosyal Giriş Yöntemleri" },
  { id: "ilan-olusturma", label: "4. İlan Oluşturma" },
  { id: "yasakli-urun-ve-icerikler", label: "5. Yasaklı Ürün ve İçerikler" },
  { id: "takas-teklifleri", label: "6. Takas Teklifleri" },
  { id: "takasin-tamamlanmasi", label: "7. Takasın Tamamlanması" },
  { id: "guvenli-takas", label: "8. Güvenli Takas" },
  { id: "mesajlasma", label: "9. Mesajlaşma" },
  { id: "takaspara-ve-teklif-islem-bedelleri", label: "10. TakasPara ve Teklif İşlem Bedelleri" },
  { id: "ilk-ucretsiz-takas-teklifi-hakki", label: "11. İlk Ücretsiz Takas Teklifi Hakkı" },
  { id: "uygulama-ici-satin-almalar-ve-odeme", label: "12. Uygulama İçi Satın Almalar ve Ödeme" },
  { id: "takasla-nin-kullanicilar-arasindaki-islemlerdeki-rolu", label: "13. Takasla’nın Kullanıcılar Arasındaki İşlemlerdeki Rolü" },
  { id: "kullanicinin-sorumlulugu", label: "14. Kullanıcının Sorumluluğu" },
  { id: "dolandiricilik-ve-kotuye-kullanim", label: "15. Dolandırıcılık ve Kötüye Kullanım" },
  { id: "icerik-moderasyonu", label: "16. İçerik Moderasyonu" },
  { id: "raporlama-ve-kullanici-engelleme", label: "17. Raporlama ve Kullanıcı Engelleme" },
  { id: "hesabin-askiya-alinmasi-veya-kapatilmasi", label: "18. Hesabın Askıya Alınması veya Kapatılması" },
  { id: "kullanicinin-hesabini-silmesi", label: "19. Kullanıcının Hesabını Silmesi" },
  { id: "hesap-silme-sonrasinda-veriler", label: "20. Hesap Silme Sonrasında Veriler" },
  { id: "fikri-mulkiyet-haklari", label: "21. Fikri Mülkiyet Hakları" },
  { id: "hizmetin-kullanilabilirligi", label: "22. Hizmetin Kullanılabilirliği" },
  { id: "ucuncu-taraf-hizmetleri-ve-altyapi", label: "23. Üçüncü Taraf Hizmetleri ve Altyapı" },
  { id: "sorumlulugun-sinirlari", label: "24. Sorumluluğun Sınırları" },
  { id: "mucbir-sebep-ve-kontrol-disi-durumlar", label: "25. Mücbir Sebep ve Kontrol Dışı Durumlar" },
  { id: "sozlesmenin-degistirilmesi", label: "26. Sözleşmenin Değiştirilmesi" },
  { id: "uygulanacak-hukuk-ve-kullanici-haklari", label: "27. Uygulanacak Hukuk ve Kullanıcı Hakları" },
  { id: "sozlesmenin-butunlugu", label: "28. Sözleşmenin Bütünlüğü" },
  { id: "iletisim", label: "29. İletişim" },
];

export default function KullanimKosullariPage() {
  return (
    <InfoLayout path="/kullanim-kosullari" title="Kullanım Koşulları ve Kullanıcı Sözleşmesi" updated="10 Ekim 2026" toc={TOC}>
      <div className="doc">
        <p>
        Bu Kullanım Koşulları / Üyelik ve Hizmet Sözleşmesi (“Sözleşme”), Takasla mobil uygulaması ve takaslapp.com internet sitesi üzerinden sunulan hizmetlerin kullanımına ilişkin koşulları düzenlemektedir.<br />Takasla’yı kullanarak veya Takasla üzerinde kullanıcı hesabı oluşturarak, işbu Sözleşme’de belirtilen koşulları kabul etmiş olursunuz.
      </p>

      <div className="doc-box">
        <p>Takasla – Recep Aydoğan</p>
        <p>Esenler Mah., Horasan Sok., Görgülü Center No:4/4<br />Selçuklu / Konya</p>
        <div>
          <p><strong>E-posta:</strong> <a href="mailto:takaslappcom@gmail.com">takaslappcom@gmail.com</a></p>
          <p><strong>İnternet Sitesi:</strong> <a href="https://takaslapp.com">takaslapp.com</a></p>
        </div>
      </div>

      <section>
        <h2 id="takasla-nedir">1. Takasla Nedir?</h2>
      </section>

      <p>
        Takasla, kullanıcıların kullanmadıkları eşyalar için ilan oluşturabildiği, diğer kullanıcıların ilanlarını keşfedebildiği ve kendi ürünleriyle takas teklifi gönderebildiği dijital bir takas platformudur.
      </p>

      <p>
        Platform içerisinde kullanıcılar;
      </p>

      <ul>
        <li>ilan oluşturabilir,</li>
        <li>ilanları inceleyebilir,</li>
        <li>takas teklifi gönderebilir ve alabilir,</li>
        <li>diğer kullanıcılarla mesajlaşabilir ve görsel paylaşabilir,</li>
        <li>takas süreçlerini yönetebilir,</li>
        <li>tamamlanan takaslar sonrasında değerlendirme yapabilir.</li>
      </ul>

      <p>
        Takasla, aksi açıkça belirtilmediği sürece kullanıcıların ilanlarında yer alan fiziksel ürünlerin sahibi, satıcısı veya üreticisi değildir.<br />Kullanıcılar arasında gerçekleştirilecek fiziksel ürün değişimi, teslim şekli, buluşma yöntemi ve ürünlerin fiilî teslimi kullanıcıların kendi sorumluluğundadır.
      </p>

      <section>
        <h2 id="uyelik-ve-kullanici-hesabi">2. Üyelik ve Kullanıcı Hesabı</h2>
      </section>

      <p>
        Takasla’nın belirli özelliklerinden yararlanabilmek için kullanıcı hesabı oluşturulması gerekir.
      </p>

      <p>
        Kullanıcı;
      </p>

      <ul>
        <li>kayıt sırasında doğru ve güncel bilgiler vermek,</li>
        <li>hesabına ilişkin bilgileri güncel tutmak,</li>
        <li>hesabının ve giriş bilgilerinin güvenliğini sağlamak,</li>
        <li>hesabının yetkisiz kullanımını fark etmesi halinde gerekli güvenlik önlemlerini almak</li>
      </ul>

      <p>
        ile sorumludur.<br />Her kullanıcı kendi hesabı üzerinden gerçekleştirilen işlemlerden sorumludur.<br />Başka bir kişinin kimliğini kullanarak hesap oluşturulması, başka bir kullanıcıyı taklit etmek veya yanıltıcı hesap oluşturmak yasaktır.
      </p>

      <section>
        <h2 id="sosyal-giris-yontemleri">3. Sosyal Giriş Yöntemleri</h2>
      </section>

      <p>
        Takasla, üçüncü taraf kimlik doğrulama hizmetleri üzerinden giriş yapılmasına olanak sağlayabilir.<br />Sosyal giriş yöntemlerinin kullanılması halinde ilgili hizmet sağlayıcının kendi kullanım koşulları ve gizlilik hükümleri de uygulanabilir.<br />Takasla, bu hizmetlerde meydana gelebilecek ve kendi kontrol alanı dışında kalan kesinti veya değişikliklerden sorumlu tutulamaz.
      </p>

      <section>
        <h2 id="ilan-olusturma">4. İlan Oluşturma</h2>
      </section>

      <p>
        Kullanıcılar yalnızca;
      </p>

      <ul>
        <li>sahibi oldukları,</li>
        <li>takas etmeye yetkili oldukları,</li>
        <li>hukuka uygun,</li>
        <li>gerçek,</li>
        <li>yanıltıcı olmayan</li>
      </ul>

      <p>
        ürünler için ilan oluşturmalıdır.<br />İlan içerisinde kullanılan:
      </p>

      <ul>
        <li>başlık,</li>
        <li>açıklama,</li>
        <li>ürün bilgileri ve özellikleri,</li>
        <li>takasta aranan ürün bilgisi,</li>
        <li>fotoğraflar,</li>
        <li>kategori bilgileri</li>
      </ul>

      <p>
        ilan sahibinin sorumluluğundadır.<br />Kullanıcı, ilanında ürünün mevcut durumu ve önemli özellikleri hakkında yanıltıcı bilgi vermemeyi kabul eder.<br />Başka kişilere ait fotoğrafların, telif hakkıyla korunan içeriklerin veya üçüncü kişilerin haklarını ihlal eden materyallerin izinsiz kullanılması yasaktır.
      </p>

      <section>
        <h2 id="yasakli-urun-ve-icerikler">5. Yasaklı Ürün ve İçerikler</h2>
      </section>

      <p>
        Takasla üzerinden hukuka, kamu düzenine veya platform kurallarına aykırı ürün veya içeriklerin paylaşılması yasaktır.<br />Yasaklanan veya sınırlandırılan ürün ve içeriklere ilişkin ayrıntılı hükümler ayrıca Topluluk Kuralları / Yasaklı İçerik ve İlan Politikası içerisinde düzenlenir.<br />Takasla;
      </p>

      <ul>
        <li>hukuka aykırı,</li>
        <li>yanıltıcı,</li>
        <li>üçüncü kişilerin haklarını ihlal eden,</li>
        <li>güvenlik riski oluşturan,</li>
        <li>platform kurallarına aykırı</li>
      </ul>

      <p>
        ilanları önceden bildirimde bulunmaksızın yayından kaldırabilir veya incelemeye alabilir.
      </p>

      <section>
        <h2 id="takas-teklifleri">6. Takas Teklifleri</h2>
      </section>

      <p>
        Bir kullanıcı başka bir ilana kendi ürünlerinden biri veya birkaçıyla takas teklifi gönderebilir.<br />Takas teklifi;
      </p>

      <ul>
        <li>kabul edilebilir,</li>
        <li>reddedilebilir,</li>
        <li>iptal edilebilir,</li>
        <li>belirlenen koşullarda sona erebilir.</li>
      </ul>

      <p>
        Teklifin gönderilmiş olması tek başına fiziksel ürün değişiminin tamamlandığı anlamına gelmez.<br />Tarafların ürünlerin durumu, teslim şekli, buluşma noktası ve gerekli gördükleri diğer hususları takas tamamlanmadan önce kendi aralarında netleştirmeleri önerilir.
      </p>

      <section>
        <h2 id="takasin-tamamlanmasi">7. Takasın Tamamlanması</h2>
      </section>

      <p>
        Takasla içerisindeki “takas tamamlandı” veya benzeri onaylar, platform üzerindeki işlem durumunun kayıt altına alınmasını sağlar.<br />Kullanıcılar fiziksel takas işleminin gerçekten gerçekleştiğinden emin olmadan tamamlanma onayı vermemelidir.<br />Takasın iki tarafça tamamlanmış olarak işaretlenmesinden sonra ilgili ilanlar platform üzerinde tamamlanmış/pasif duruma getirilebilir.<br />Takasla, kullanıcılar arasında fiziksel olarak teslim edilen ürünlerin durumunu bizzat denetlemez.
      </p>

      <section>
        <h2 id="guvenli-takas">8. Güvenli Takas</h2>
      </section>

      <p>
        Kullanıcıların fiziksel takas öncesinde ürünü incelemesi ve gerekli gördüğü kontrolleri yapması kendi sorumluluğundadır.<br />Kullanıcıların;
      </p>

      <ul>
        <li>ürünün ilan açıklamasıyla uyumunu kontrol etmesi,</li>
        <li>mümkün olduğunda güvenli ve kamusal alanlarda buluşması,</li>
        <li>şüpheli davranışlarda takası gerçekleştirmemesi,</li>
        <li>gerektiğinde kullanıcıyı veya ilanı raporlaması</li>
      </ul>

      <p>
        önerilir.<br />Daha ayrıntılı güvenlik önerileri uygulamadaki Güvenli Takas Rehberi bölümünde sunulabilir.
      </p>

      <section>
        <h2 id="mesajlasma">9. Mesajlaşma</h2>
      </section>

      <p>
        Takasla, kullanıcıların takas hakkında iletişim kurabilmesi ve ürün detaylarını paylaşabilmesi amacıyla uygulama içi mesajlaşma ve görsel paylaşım özelliği sunar.<br />Mesajlaşma sistemi;
      </p>

      <ul>
        <li>tehdit,</li>
        <li>taciz,</li>
        <li>hakaret,</li>
        <li>dolandırıcılık,</li>
        <li>spam,</li>
        <li>yasa dışı faaliyet,</li>
        <li>üçüncü kişilerin kişisel bilgilerinin hukuka aykırı paylaşımı</li>
      </ul>

      <p>
        amacıyla kullanılamaz.<br />Takasla, şikâyet veya güvenlik incelemesi gereken durumlarda ilgili kayıtları yürürlükteki mevzuat ve Gizlilik Politikası çerçevesinde değerlendirebilir.
      </p>

      <section>
        <h2 id="takaspara-ve-teklif-islem-bedelleri">10. TakasPara ve Teklif İşlem Bedelleri</h2>
      </section>

      <p>
        Takasla içerisinde takas tekliflerinin iletilmesi ve platform özelliklerinin kullanılabilmesi amacıyla TakasPara sistemi kullanılır.<br />TakasPara’ya ilişkin temel kurallar şunlardır:
      </p>

      <ul>
        <li>Normal takas teklifi oluşturulduğunda gönderen kullanıcının bakiyesinden 10 TakasPara (TP) güvence/işlem bedeli rezerve edilir/düşülür.</li>
        <li>Teklif kabul edilmeden önce reddedilir, gönderen tarafından iptal edilir, süresi dolar veya henüz beklemedeyken (pending) hesap silme nedeniyle sonlanırsa rezerve edilen 10 TP gönderenin hesabına otomatik olarak iade edilir.</li>
        <li>Teklif karşı tarafça kabul edildiğinde (accepted), takas sürecinin başlatılması için karşı tarafın hesabından da 10 TP işlem bedeli tahsil edilir ve işlem bedelleri kesinleşir.</li>
        <li>Teklif her iki tarafça kabul edildikten sonra takas süreci sonradan taraflarca iptal edilse veya taraflardan birinin hesabı silinse dahi tahsil edilen 10 TP işlem bedelleri iade edilmez.</li>
        <li>TakasPara nakit para, banka mevduatı veya elektronik para niteliğinde değildir; nakde çevrilemez veya platform dışına transfer edilemez.</li>
      </ul>

      <section>
        <h2 id="ilk-ucretsiz-takas-teklifi-hakki">11. İlk Ücretsiz Takas Teklifi Hakkı</h2>
      </section>

      <p>
        Takasla, yeni kayıt olan kullanıcılara platformu deneyimlemeleri amacıyla ilk takas tekliflerini ücretsiz oluşturma hakkı tanımlayabilir.
      </p>

      <ul>
        <li>İlk ücretsiz teklif hakkına sahip kullanıcı, gönderdiği ilk takas teklifinde 10 TP ödemez.</li>
        <li>Ücretsiz teklif hakkı, teklifin sisteme başarıyla iletildiği anda kullanılmış sayılır.</li>
        <li>İlk ücretsiz teklifin karşı tarafça reddedilmesi, gönderen tarafından iptal edilmesi veya zaman aşımına uğraması halinde ücretsiz kullanım hakkı yeniden tanımlanmaz.</li>
        <li>İlk ücretsiz teklif hakkı kullanılarak gönderilen bir teklif karşı tarafça kabul edilirse, kabul eden kullanıcının henüz kullanılmamış ilk ücretsiz teklif hakkı da bu işlem kapsamında kullanılmış sayılır. Kabul eden kullanıcının böyle bir hakkı bulunmuyorsa normal 10 TP işlem bedeli uygulanır.</li>
      </ul>

      <section>
        <h2 id="uygulama-ici-satin-almalar-ve-odeme">12. Uygulama İçi Satın Almalar ve Ödeme</h2>
      </section>

      <p>
        TakasPara paketleri, Apple App Store uygulama içi satın alma sistemi (StoreKit) üzerinden satın alınabilir.<br />Ödeme ve faturalandırma işlemleri Apple tarafından gerçekleştirilir.<br />Takasla;
      </p>

      <ul>
        <li>kredi kartı numarası,</li>
        <li>banka kartı numarası,</li>
        <li>kart son kullanma tarihi veya güvenlik kodu (CVV)</li>
      </ul>

      <p>
        gibi hassas finansal ödeme verilerini doğrudan görmez veya saklamaz.<br />Satın alma işlemlerinin geçerliliği uygulama içi satın alma doğrulama altyapısı üzerinden teyit edilir.
      </p>

      <section>
        <h2 id="takasla-nin-kullanicilar-arasindaki-islemlerdeki-rolu">13. Takasla’nın Kullanıcılar Arasındaki İşlemlerdeki Rolü</h2>
      </section>

      <p>
        Takasla, kullanıcıların birbirlerini ve takasa konu ilanları bulabilmesini sağlayan dijital araçlar sunar.<br />Takasla;
      </p>

      <ul>
        <li>ürünün fiziksel sahibi değildir,</li>
        <li>ürünlerin üreticisi değildir,</li>
        <li>ürünlerin kalite veya ayıpsızlığını garanti etmez,</li>
        <li>kullanıcı tarafından verilen ilan bilgilerinin doğruluğunu mutlak olarak garanti etmez,</li>
        <li>fiziksel teslimatı gerçekleştirmez.</li>
      </ul>

      <p>
        Bu hüküm, Takasla’nın yürürlükteki mevzuattan kaynaklanan ve sözleşmeyle kaldırılamayacak zorunlu sorumluluklarını ortadan kaldırmaz.
      </p>

      <section>
        <h2 id="kullanicinin-sorumlulugu">14. Kullanıcının Sorumluluğu</h2>
      </section>

      <p>
        Kullanıcı;
      </p>

      <ul>
        <li>yayınladığı ilanlardan,</li>
        <li>gönderdiği mesajlardan ve görsellerden,</li>
        <li>yaptığı takas tekliflerinden,</li>
        <li>diğer kullanıcılara sağladığı bilgilerden,</li>
        <li>fiziksel takas sırasında gerçekleştirdiği işlemlerden</li>
      </ul>

      <p>
        sorumludur.<br />Kullanıcı, Takasla’yı yürürlükteki mevzuata ve işbu Sözleşme’ye uygun şekilde kullanmayı kabul eder.
      </p>

      <section>
        <h2 id="dolandiricilik-ve-kotuye-kullanim">15. Dolandırıcılık ve Kötüye Kullanım</h2>
      </section>

      <p>
        Aşağıdaki davranışlar yasaktır:
      </p>

      <ul>
        <li>Gerçekte sahip olunmayan ürün için ilan oluşturmak</li>
        <li>Başka bir kullanıcının hesabını ele geçirmek</li>
        <li>Sahte veya yanıltıcı ilan oluşturmak</li>
        <li>Kullanıcıları aldatmaya yönelik işlem yapmak</li>
        <li>Takas sistemini veya TakasPara mekanizmasını manipüle etmek</li>
        <li>Birden fazla hesap kullanarak kampanya veya ücretsiz haklardan kötüye yararlanmak</li>
        <li>Uygulamanın güvenlik önlemlerini aşmaya çalışmak</li>
        <li>Otomatik sistemlerle izinsiz veri toplamak</li>
        <li>Platformun işleyişini bozacak faaliyetlerde bulunmak</li>
      </ul>

      <p>
        Tespit edilen kötüye kullanım durumlarında Takasla gerekli güvenlik önlemlerini alabilir.
      </p>

      <section>
        <h2 id="icerik-moderasyonu">16. İçerik Moderasyonu</h2>
      </section>

      <p>
        Takasla platform güvenliğinin sağlanması amacıyla;
      </p>

      <ul>
        <li>ilanları,</li>
        <li>kullanıcı hesaplarını,</li>
        <li>şikâyetleri,</li>
        <li>değerlendirmeleri</li>
      </ul>

      <p>
        inceleyebilir.<br />Kurallara aykırı olduğu değerlendirilen içerikler reddedilebilir, görünürlüğü sınırlandırılabilir veya kaldırılabilir.<br />Apple, kullanıcı tarafından oluşturulan içerik barındıran uygulamalarda uygunsuz içeriklerin filtrelenebilmesini, raporlama mekanizması, kullanıcı engelleme özelliği ve ulaşılabilir iletişim bilgisinin bulunmasını istemektedir. Takasla’nın moderasyon sistemi de bu yapı doğrultusunda çalışır. 
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
        <h2 id="raporlama-ve-kullanici-engelleme">17. Raporlama ve Kullanıcı Engelleme</h2>
      </section>

      <p>
        Kullanıcılar platform kurallarına aykırı olduğunu düşündükleri kullanıcıları veya içerikleri raporlayabilir.<br />Kullanıcılar gerektiğinde diğer kullanıcıları engelleyebilir.<br />Takasla, iletilen raporları inceleyerek içeriğin kaldırılması, hesabın sınırlandırılması veya gerekli diğer önlemlerin uygulanmasına karar verebilir.
      </p>

      <section>
        <h2 id="hesabin-askiya-alinmasi-veya-kapatilmasi">18. Hesabın Askıya Alınması veya Kapatılması</h2>
      </section>

      <p>
        Aşağıdaki durumlarda kullanıcı hesabı geçici veya kalıcı olarak sınırlandırılabilir:
      </p>

      <ul>
        <li>İşbu Sözleşme’nin ihlal edilmesi</li>
        <li>Topluluk kurallarının ihlal edilmesi</li>
        <li>Dolandırıcılık veya kötüye kullanım şüphesi</li>
        <li>Güvenlik ihlali</li>
        <li>Hukuka aykırı faaliyet</li>
        <li>Diğer kullanıcıların güvenliğini tehlikeye atan davranışlar</li>
      </ul>

      <p>
        Durumun niteliğine göre kullanıcıdan açıklama veya ek doğrulama talep edilebilir.
      </p>

      <section>
        <h2 id="kullanicinin-hesabini-silmesi">19. Kullanıcının Hesabını Silmesi</h2>
      </section>

      <p>
        Kullanıcı, Takasla hesabını uygulama içerisindeki:<br />Ayarlar &gt; Hesabımı kalıcı olarak sil<br />bölümünden silebilir.<br />Hesap silme işlemi geri alınamaz.<br />Güvenlik amacıyla kullanıcıdan ek kimlik doğrulaması istenebilir.<br />Sosyal giriş yöntemi kullanılan hesaplarda ilgili hizmetle Takasla arasındaki bağlantının kaldırılması amacıyla yeniden doğrulama yapılabilir.<br />Apple da hesap oluşturulabilen uygulamalarda hesap silme işleminin uygulama içinden başlatılabilmesini ve Sign in with Apple kullanılan hesapların ilişkili tokenlarının revoke edilmesini istemektedir. 
      </p>

      <p>
        <a
          href="https://developer.apple.com/support/offering-account-deletion-in-your-app?utm_source=chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple Developer →
        </a>
      </p>

      <section>
        <h2 id="hesap-silme-sonrasinda-veriler">20. Hesap Silme Sonrasında Veriler</h2>
      </section>

      <p>
        Hesap silindiğinde profil bilgileri, aktif mesajlar, sohbet görselleri referansları, bildirim jetonları ve tamamlanmamış ilanlar sistemden silinir.<br />Tamamlanmış takaslara ait ilanların kullanıcı metinleri, konumu ve serbest verileri nötr sistem değerleriyle temizlenerek kimlik bilgilerinden ayrıştırılır (&quot;Silinmiş İlan&quot;, &quot;Silinmiş Konum&quot;, &quot;Silinmiş Bilgi&quot; vb.) ve ilan fotoğrafları silinir. İlan kaydının kullanıcı kimliğiyle doğrudan bağlantısı kaldırılır.<br />Kullanıcının yazdığı değerlendirme yorum metinleri kaldırılır; tamamlanmış işlemlere ait sayısal değerlendirme puanları platform güvenliği ve puan ortalamasının korunması amacıyla kullanıcı kimliğinden ayrıştırılmış olarak saklanabilir.<br />Tamamlanmış işlemlere ve satın alma/cüzdan hareketlerine ait sınırlı işlem kayıtları; işlem bütünlüğünün korunması, uyuşmazlık çözümü, hakların tesisi ve yasal yükümlülüklerin yerine getirilmesi amacıyla ilgili mevzuat ve işleme amacının gerektirdiği süre boyunca saklanabilir.<br />Hesap silme sırasında bekleyen (pending) takas tekliflerindeki 10 TP güvencesi iade edilir; ancak daha önce kabul edilmiş (accepted) takas tekliflerinde işlem bedeli kesinleştiğinden iade yapılmaz.
      </p>

      <section>
        <h2 id="fikri-mulkiyet-haklari">21. Fikri Mülkiyet Hakları</h2>
      </section>

      <p>
        Takasla’ya ait;
      </p>

      <ul>
        <li>marka,</li>
        <li>logo,</li>
        <li>uygulama tasarımı,</li>
        <li>yazılım,</li>
        <li>arayüz,</li>
        <li>grafik öğeleri,</li>
        <li>özgün metin ve diğer platform içerikleri</li>
      </ul>

      <p>
        ilgili fikri mülkiyet mevzuatı kapsamında korunabilir.<br />Takasla’nın önceden yazılı izni olmadan bu içeriklerin ticari amaçlarla kopyalanması, çoğaltılması veya yetkisiz biçimde kullanılması yasaktır.<br />Kullanıcılar yükledikleri içeriklerin üçüncü kişilerin haklarını ihlal etmemesinden sorumludur.
      </p>

      <section>
        <h2 id="hizmetin-kullanilabilirligi">22. Hizmetin Kullanılabilirliği</h2>
      </section>

      <p>
        Takasla hizmetlerinin kesintisiz veya hatasız şekilde çalışacağı garanti edilmez.<br />Bakım, güncelleme, güvenlik çalışmaları, teknik arızalar veya Takasla’nın kontrolü dışındaki altyapı sorunları nedeniyle hizmet geçici olarak kullanılamayabilir.<br />Takasla, makul ölçüde hizmet sürekliliğini sağlamaya yönelik gerekli teknik önlemleri almaya çalışır.
      </p>

      <section>
        <h2 id="ucuncu-taraf-hizmetleri-ve-altyapi">23. Üçüncü Taraf Hizmetleri ve Altyapı</h2>
      </section>

      <p>
        Takasla’nın çalışabilmesi için çeşitli;
      </p>

      <ul>
        <li>güvenli sunucu ve veri tabanı altyapısı,</li>
        <li>bulut nesne depolama (Cloudflare R2),</li>
        <li>e-posta gönderimi ve doğrulama (Resend),</li>
        <li>analitik ve hata raporlama (Firebase Analytics, Crashlytics),</li>
        <li>kimlik doğrulama,</li>
        <li>bildirim,</li>
        <li>uygulama mağazası,</li>
        <li>satın alma doğrulama</li>
      </ul>

      <p>
        hizmetlerinden yararlanılabilir.<br />Bu hizmetlerin kendi şartları ve gizlilik politikaları ayrıca uygulanabilir.<br />Takasla’nın doğrudan kontrolü dışında bulunan üçüncü taraf hizmetlerde meydana gelen kesintilerden doğan sorumluluk, yürürlükteki mevzuatın izin verdiği ölçüde sınırlandırılabilir.
      </p>

      <section>
        <h2 id="sorumlulugun-sinirlari">24. Sorumluluğun Sınırları</h2>
      </section>

      <p>
        Takasla, kullanıcıların kendi aralarında gerçekleştirdiği fiziksel takaslara ilişkin olarak ürünlerin;
      </p>

      <ul>
        <li>kalitesini,</li>
        <li>gerçekliğini,</li>
        <li>çalışır durumda olmasını,</li>
        <li>ilan açıklamasıyla tamamen aynı olmasını</li>
      </ul>

      <p>
        önceden denetleyemez.<br />Kullanıcıların fiziksel teslim öncesinde ürünü incelemesi kendi sorumluluğundadır.<br />Ancak işbu madde, yürürlükteki mevzuat gereği Takasla’ya yüklenen ve sözleşmeyle ortadan kaldırılamayacak sorumlulukların kaldırıldığı anlamına gelmez.
      </p>

      <section>
        <h2 id="mucbir-sebep-ve-kontrol-disi-durumlar">25. Mücbir Sebep ve Kontrol Dışı Durumlar</h2>
      </section>

      <p>
        Doğal afet, savaş, toplumsal olay, geniş çaplı internet veya enerji kesintisi, siber saldırı, kamu otoritesi kararı veya Takasla’nın makul kontrolü dışındaki benzeri durumlarda hizmetlerde geçici kesinti veya değişiklik meydana gelebilir.<br />Bu tür durumlarda Takasla hizmeti yeniden sağlamak için makul çabayı gösterir.
      </p>

      <section>
        <h2 id="sozlesmenin-degistirilmesi">26. Sözleşmenin Değiştirilmesi</h2>
      </section>

      <p>
        Takasla;
      </p>

      <ul>
        <li>yeni özelliklerin eklenmesi,</li>
        <li>hizmet modelinin değişmesi,</li>
        <li>güvenlik gereksinimleri,</li>
        <li>mevzuat değişiklikleri</li>
      </ul>

      <p>
        gibi nedenlerle işbu Sözleşme’yi güncelleyebilir.<br />Önemli değişiklikler olması halinde kullanıcılar uygun yöntemlerle bilgilendirilebilir.<br />Güncel sürüm uygulama veya takaslapp.com üzerinden erişilebilir olacaktır.
      </p>

      <section>
        <h2 id="uygulanacak-hukuk-ve-kullanici-haklari">27. Uygulanacak Hukuk ve Kullanıcı Hakları</h2>
      </section>

      <p>
        İşbu Sözleşme Türkiye Cumhuriyeti hukukuna tabidir.<br />Kullanıcının tüketici sıfatına sahip olduğu ve tüketici mevzuatının uygulanmasının gerektiği durumlarda 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve ilgili zorunlu mevzuattan kaynaklanan hakları saklıdır.<br />Türkiye’de platformlar üzerinden tüketici ile satıcı/sağlayıcı arasında mesafeli sözleşme kurulmasına aracılık edilen durumlarda platformlara ayrıca ön bilgilendirme, talep/şikâyet iletim sistemi ve işlem kayıtlarının tutulması gibi yükümlülükler getirilebilmektedir. Takasla’nın kendi hizmetleri ve kullanıcılar arasındaki işlemler bakımından uygulanabilir zorunlu mevzuat hükümleri saklıdır. 
      </p>

      <p>
        <a
          href="https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/mesafeli-sozlesmeler-hakkinda-bilgilendirme?utm_source=chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ticaret Bakanlığı →
        </a>
      </p>

      <p>
        Kullanıcıların kanunen yetkili tüketici hakem heyetlerine, tüketici mahkemelerine ve diğer yetkili mercilere başvuru hakları saklıdır.
      </p>

      <section>
        <h2 id="sozlesmenin-butunlugu">28. Sözleşmenin Bütünlüğü</h2>
      </section>

      <p>
        İşbu Sözleşme aşağıdaki belgelerle birlikte değerlendirilir:
      </p>

      <ul>
        <li>Gizlilik Politikası</li>
        <li>KVKK Aydınlatma Metni</li>
        <li>Topluluk Kuralları / Yasaklı İçerik ve İlan Politikası</li>
        <li>Hesap Silme ve Veri Silme Bilgilendirmesi</li>
      </ul>

      <p>
        Bu belgeler Takasla’nın kullanımına ilişkin farklı konuları düzenler ve birbirini tamamlar.
      </p>

      <section>
        <h2 id="iletisim">29. İletişim</h2>
      </section>

      <p>
        İşbu Sözleşme veya Takasla hizmetleriyle ilgili sorularınız için:
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
