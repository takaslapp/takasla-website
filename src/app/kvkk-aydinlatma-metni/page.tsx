import type { Metadata } from "next";
import InfoLayout, { type TocItem } from "@/components/info/InfoLayout";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "Takasla 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca aydınlatma metni.",
  alternates: {
    canonical: "/kvkk-aydinlatma-metni",
  },
  keywords: ["takasla kvkk","aydınlatma metni","kişisel verilerin korunması"],
};

const TOC: TocItem[] = [
  { id: "veri-sorumlusu", label: "1. Veri Sorumlusu" },
  { id: "islenen-kisisel-veri-kategorileri", label: "2. İşlenen Kişisel Veri Kategorileri" },
  { id: "kisisel-verilerin-islenme-amaclari", label: "3. Kişisel Verilerin İşlenme Amaçları" },
  { id: "kisisel-verilerin-toplanma-yontemi", label: "4. Kişisel Verilerin Toplanma Yöntemi" },
  { id: "kisisel-verilerin-islenmesinin-hukuki-sebepleri", label: "5. Kişisel Verilerin İşlenmesinin Hukuki Sebepleri" },
  { id: "kisisel-verilerin-aktarilabilecegi-alici-gruplari", label: "6. Kişisel Verilerin Aktarılabileceği Alıcı Grupları" },
  { id: "kisisel-verilerin-yurt-disina-aktarilmasi", label: "7. Kişisel Verilerin Yurt Dışına Aktarılması" },
  { id: "kisisel-verilerin-saklanmasi-ve-silinmesi", label: "8. Kişisel Verilerin Saklanması ve Silinmesi" },
  { id: "kvkk-nin-11-maddesi-kapsamindaki-haklariniz", label: "9. KVKK’nın 11. Maddesi Kapsamındaki Haklarınız" },
  { id: "basvuru-ve-iletisim-kanallari", label: "10. Başvuru ve İletişim Kanalları" },
];

export default function KvkkAydinlatmaMetniPage() {
  return (
    <InfoLayout path="/kvkk-aydinlatma-metni" title="KVKK Aydınlatma Metni" updated="10 Ekim 2026" toc={TOC}>
      <div className="doc">
        <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında, Takasla mobil uygulaması ve takaslapp.com internet sitesi üzerinden gerçekleştirilen kişisel veri işleme faaliyetleri hakkında sizleri bilgilendirmek amacıyla işbu KVKK Aydınlatma Metni hazırlanmıştır.
      </p>

      <section>
        <h2 id="veri-sorumlusu">1. Veri Sorumlusu</h2>
      </section>

      <p>
        KVKK kapsamında kişisel verileriniz bakımından veri sorumlusu:
      </p>

      <div className="doc-box">
        <p>Takasla – Recep Aydoğan</p>
        <p>Esenler Mah., Horasan Sok., Görgülü Center No:4/4<br />Selçuklu / Konya</p>
        <div>
          <p><strong>E-posta:</strong> <a href="mailto:takaslappcom@gmail.com">takaslappcom@gmail.com</a></p>
          <p><strong>İnternet Sitesi:</strong> <a href="https://takaslapp.com">takaslapp.com</a></p>
        </div>
      </div>

      <p>
        KVKK uyarınca aydınlatma metninde veri sorumlusunun kimliği, kişisel verilerin işlenme amaçları, aktarılabileceği taraflar ve amaçları, veri toplama yöntemi ve hukuki sebebi ile ilgili kişinin haklarının açıklanması esastır.
      </p>

      <section>
        <h2 id="islenen-kisisel-veri-kategorileri">2. İşlenen Kişisel Veri Kategorileri</h2>
      </section>

      <p>
        Takasla hizmetlerinden yararlanmanız kapsamında aşağıdaki veri kategorileri işlenebilir:
      </p>

      <h3>
        2.1. Kimlik ve İletişim Bilgileri
      </h3>

      <ul>
        <li>Ad ve soyad</li>
        <li>Kullanıcı adı</li>
        <li>E-posta adresi</li>
        <li>Sosyal giriş (Apple / Google) sağlayıcı hesap tanımlayıcıları</li>
      </ul>

      <h3>
        2.2. Kullanıcı ve Profil Bilgileri
      </h3>

      <ul>
        <li>Profil fotoğrafı</li>
        <li>Kullanıcı hesap kimliği</li>
        <li>Hesap oluşturma ve güncelleme tarihleri</li>
        <li>Kullanıcı değerlendirme puanı ve tamamlanan takas sayısı</li>
        <li>TakasPara bakiyesi ve ilk teklif hakkı durumu</li>
      </ul>

      <h3>
        2.3. İlan ve Kullanıcı İçeriği Bilgileri
      </h3>

      <ul>
        <li>İlan başlığı, açıklaması, kategorisi ve ürün kullanım durumu</li>
        <li>İlan fotoğrafları</li>
        <li>Takasta aranan ürün ve ürünün özellikleri</li>
        <li>İlan yayın, güncelleme, görüntülenme ve favori istatistikleri</li>
        <li>Favoriye eklenen ilanlar</li>
        <li>Kullanıcı değerlendirme puanları ve yorumları</li>
        <li>Şikayet, rapor ve engelleme kayıtları</li>
      </ul>

      <h3>
        2.4. Manuel Seçilen Konum Bilgileri
      </h3>

      <p>
        Kullanıcı tarafından formlar ve filtreler üzerinden manuel olarak seçilen il ve ilçe bilgileri işlenir. Takasla, cihazınızın hassas GPS konumunu toplamaz ve konum izni talep etmez.
      </p>

      <h3>
        2.5. Takas ve Mesajlaşma Bilgileri
      </h3>

      <ul>
        <li>Gönderilen ve alınan takas teklifleri, teklif durumları ve işlem onayları</li>
        <li>Kullanıcılar arası anlık mesaj metinleri, paylaşılan sohbet görselleri, gönderici/alıcı bilgisi ve mesaj zamanları</li>
      </ul>

      <h3>
        2.6. Müşteri İşlem ve Satın Alma Doğrulama Bilgileri
      </h3>

      <ul>
        <li>TakasPara kullanım ve işlem hareketleri</li>
        <li>Uygulama içi satın alma paket kimliği, işlem (transaction) kimliği ve satın alma zamanı</li>
      </ul>

      <p>
        Takasla kredi kartı veya banka hesap bilgilerinizi görmez veya saklamaz.
      </p>

      <h3>
        2.7. İşlem Güvenliği, Analitik ve Teknik Tanılama Verileri
      </h3>

      <ul>
        <li>Push bildirim jetonları ve işletim sistemi bilgisi</li>
        <li>Uygulama kullanım ve etkileşim bilgileri, semantik ekran görüntüleme isimleri ve özellik etkileşimleri</li>
        <li>Arama özelliğinin kullanım sıklığı ve arama metninin karakter uzunluğu (arama metninin kendisi işlenmez)</li>
        <li>Hata ve çökme anındaki teknik teşhis verileri (stack trace, exception bilgileri)</li>
        <li>Cihaz modeli, işletim sistemi sürümü, uygulama sürümü ve kurulum tanımlayıcıları</li>
        <li>Sunucu ve güvenlik altyapısı seviyesinde işlenen teknik erişim kayıtları</li>
      </ul>

      <section>
        <h2 id="kisisel-verilerin-islenme-amaclari">3. Kişisel Verilerin İşlenme Amaçları</h2>
      </section>

      <p>
        Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
      </p>

      <ul>
        <li>Kullanıcı hesabının oluşturulması, e-posta doğrulamasının yapılması, kimliğin doğrulanması ve oturumun yönetilmesi</li>
        <li>Profil ve ilanların oluşturulması, yayınlanması ve yönetilmesi</li>
        <li>Takas tekliflerinin gönderilmesi, alınması, yürütülmesi ve sonuçlandırılması</li>
        <li>Uygulama içi mesajlaşmanın ve sohbet üzerinden görsel paylaşımının sağlanması, bildirimlerin iletilmesi</li>
        <li>TakasPara sistemi ve uygulama içi satın alma doğrulama süreçlerinin yürütülmesi</li>
        <li>Kullanıcı değerlendirme, moderasyon, şikayet ve engelleme sistemlerinin işletilmesi</li>
        <li>Platform ve hesap güvenliğinin sağlanması, dolandırıcılığın ve kötüye kullanımın önlenmesi</li>
        <li>Teknik hataların, çökmelerin tespiti ve uygulamanın kararlılığının artırılması</li>
        <li>Kullanıcı deneyiminin iyileştirilmesi ve uygulama performansının ölçülmesi</li>
        <li>Hukuki hakların tesisi, kullanılması, korunması ve yasal yükümlülüklerin yerine getirilmesi</li>
      </ul>

      <section>
        <h2 id="kisisel-verilerin-toplanma-yontemi">4. Kişisel Verilerin Toplanma Yöntemi</h2>
      </section>

      <p>
        Kişisel verileriniz, Takasla mobil uygulaması ve internet sitesi üzerinden tamamen veya kısmen otomatik yöntemlerle;
      </p>

      <ul>
        <li>Kayıt ve profil düzenleme formları, e-posta doğrulama akışları</li>
        <li>İlan oluşturma ve görsel yükleme işlemleri</li>
        <li>Takas teklifleri ve takas tamamlama onayları</li>
        <li>Uygulama içi mesajlaşma ve görsel paylaşım ekranları</li>
        <li>Sosyal giriş (Apple / Google) yetkilendirme akışları</li>
        <li>Uygulama içi satın alma mağaza doğrulama sistemleri</li>
        <li>Uygulamanın kullanımı sırasında oluşan teknik etkileşim, hata ve erişim kayıtları</li>
      </ul>

      <p>
        aracılığıyla elektronik ortamda toplanmaktadır.
      </p>

      <section>
        <h2 id="kisisel-verilerin-islenmesinin-hukuki-sebepleri">5. Kişisel Verilerin İşlenmesinin Hukuki Sebepleri</h2>
      </section>

      <p>
        Kişisel verileriniz, KVKK’nın 5. maddesinde belirtilen aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:
      </p>

      <h3>
        5.1. Sözleşmenin Kurulması veya İfası (KVKK m.5/2-c)
      </h3>

      <p>
        Kullanıcı hesabı oluşturulması, profil yönetimi, ilan yayınlama, takas teklifleri, mesajlaşma ve TakasPara işlemlerinin yürütülmesi.
      </p>

      <h3>
        5.2. Hukuki Yükümlülüğün Yerine Getirilmesi (KVKK m.5/2-ç)
      </h3>

      <p>
        Yürürlükteki mevzuattan kaynaklanan yasal yükümlülüklerin yerine getirilmesi ve yetkili mercilerin taleplerinin karşılanması.
      </p>

      <h3>
        5.3. Bir Hakkın Tesisi, Kullanılması veya Korunması (KVKK m.5/2-e)
      </h3>

      <p>
        Tamamlanmış işlem kayıtlarının, değerlendirmelerin, moderasyon ve uyuşmazlık kayıtlarının delil niteliğinde muhafaza edilmesi.
      </p>

      <h3>
        5.4. Meşru Menfaat (KVKK m.5/2-f)
      </h3>

      <p>
        Temel hak ve özgürlüklerinize zarar vermemek kaydıyla; platform güvenliğinin sağlanması, dolandırıcılığın önlenmesi, teknik hataların giderilmesi, uygulama kararlılığının ve kullanıcı deneyiminin geliştirilmesi.
      </p>

      <section>
        <h2 id="kisisel-verilerin-aktarilabilecegi-alici-gruplari">6. Kişisel Verilerin Aktarılabileceği Alıcı Grupları</h2>
      </section>

      <p>
        Kişisel verileriniz, yalnızca yukarıda belirtilen amaçların gerçekleştirilmesi için gerekli olduğu ölçüde aşağıdaki alıcı gruplarına aktarılabilir:
      </p>

      <ul>
        <li>Bulut nesne depolama ve görsel barındırma hizmeti sağlayıcıları (Cloudflare R2)</li>
        <li>E-posta gönderim ve doğrulama altyapısı sağlayıcıları (Resend)</li>
        <li>Analitik ve uygulama kullanım ölçüm hizmeti sağlayıcıları (Google / Firebase Analytics)</li>
        <li>Hata ve çökme raporlama hizmeti sağlayıcıları (Google / Firebase Crashlytics)</li>
        <li>Push bildirim hizmeti sağlayıcıları (Google FCM, Apple Push Notification service)</li>
        <li>Uygulama içi satın alma doğrulama hizmeti sağlayıcıları</li>
        <li>Kullanıcının tercih ettiği kimlik doğrulama sağlayıcıları (Apple, Google)</li>
        <li>Yasal zorunluluk halinde yetkili kamu kurum ve kuruluşları</li>
      </ul>

      <section>
        <h2 id="kisisel-verilerin-yurt-disina-aktarilmasi">7. Kişisel Verilerin Yurt Dışına Aktarılması</h2>
      </section>

      <p>
        Uygulamanın sunulması kapsamında bazı kişisel veriler, kullanılan bulut depolama, analitik, hata raporlama, bildirim ve e-posta doğrulama hizmetlerinin teknik niteliğine bağlı olarak yurt dışında bulunan veya yurt dışından hizmet sunan hizmet sağlayıcılar tarafından işlenebilir.<br />Yurt dışına kişisel veri aktarımları, yürürlükteki 6698 sayılı Kanun’un 9. maddesinde öngörülen şartlar ve uygulanabilir aktarım mekanizmaları çerçevesinde gerçekleştirilir.
      </p>

      <section>
        <h2 id="kisisel-verilerin-saklanmasi-ve-silinmesi">8. Kişisel Verilerin Saklanması ve Silinmesi</h2>
      </section>

      <p>
        Kişisel verileriniz, işlenme amacının gerektirdiği ve yasal düzenlemelerde öngörülen süreler boyunca saklanır.<br />Hesabınızı Ayarlar &gt; Hesabımı Kalıcı Olarak Sil bölümünden sildiğinizde; profiliniz, aktif/tamamlanmamış ilanlarınız, mesajlarınız, sohbet görselleri referanslarınız, bildirim jetonlarınız ve favorileriniz sistemden silinir.<br />Tamamlanmış takaslara ait ilanların kullanıcı tarafından oluşturulan serbest metin ve konum bilgileri nötr sistem değerleriyle temizlenerek kimlik bilgilerinden ayrıştırılır (&quot;Silinmiş İlan&quot;, &quot;Silinmiş Konum&quot;, &quot;Silinmiş Bilgi&quot; vb.) ve ilan fotoğrafları silinir. İlan kaydının kullanıcı kimliğiyle doğrudan bağlantısı kaldırılır.<br />Kullanıcının yazdığı değerlendirme yorum metinleri kaldırılır; tamamlanmış işlemlere ait sayısal değerlendirme puanları platform güvenliği ve puan ortalamasının korunması amacıyla kullanıcı kimliğinden ayrıştırılmış olarak tutulabilir.<br />Hesap silme sırasında silinen medya dosyalarının veritabanı referansları kaldırılır ve ilişkisiz kalan dosyalar otomatik depolama temizliği süreci kapsamında fiziksel olarak silinir.<br />Tamamlanmış işlemlere ve cüzdan/satın alma hareketlerine ilişkin sınırlı işlem kayıtları; hukuki uyuşmazlıkların çözümü, muhasebe/işlem bütünlüğü veya yasal yükümlülüklerin yerine getirilmesi amacıyla ilgili mevzuat ve işleme amacının gerektirdiği süre boyunca saklanabilir.
      </p>

      <section>
        <h2 id="kvkk-nin-11-maddesi-kapsamindaki-haklariniz">9. KVKK’nın 11. Maddesi Kapsamındaki Haklarınız</h2>
      </section>

      <p>
        KVKK’nın 11. maddesi uyarınca veri sorumlusuna başvurarak;
      </p>

      <ul>
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
        <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
        <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
        <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
        <li>Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme,</li>
        <li>KVKK m.7 çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
        <li>Düzeltme, silme ve yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
        <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
        <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
      </ul>

      <p>
        haklarına sahipsiniz.
      </p>

      <section>
        <h2 id="basvuru-ve-iletisim-kanallari">10. Başvuru ve İletişim Kanalları</h2>
      </section>

      <p>
        Yukarıda belirtilen haklarınıza ilişkin taleplerinizi veri sorumlusuna iletebilirsiniz:
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
