import type { Metadata } from "next";
import InfoLayout, { type TocItem } from "@/components/info/InfoLayout";

export const metadata: Metadata = {
  title: "Hesap ve Veri Silme",
  description: "Takasla hesabınızı silme adımları, veri silme ve saklama esasları hakkında bilgilendirme.",
  alternates: {
    canonical: "/hesap-ve-veri-silme",
  },
  keywords: ["takasla hesap silme","veri silme","hesap kapatma"],
};

const TOC: TocItem[] = [
  { id: "hesabimi-nasil-silebilirim", label: "1. Hesabımı Nasıl Silebilirim?" },
  { id: "hesap-silme-islemi-kalicidir", label: "2. Hesap Silme İşlemi Kalıcıdır" },
  { id: "hesap-silindiginde-kaldirilan-veriler", label: "3. Hesap Silindiğinde Kaldırılan Veriler" },
  { id: "profil-ilan-ve-sohbet-gorselleri", label: "4. Profil, İlan ve Sohbet Görselleri" },
  { id: "tamamlanmis-ilanlar", label: "5. Tamamlanmış İlanlar" },
  { id: "tamamlanmis-takaslar", label: "6. Tamamlanmış Takaslar" },
  { id: "degerlendirmeler", label: "7. Değerlendirmeler" },
  { id: "sikayet-ve-guvenlik-kayitlari", label: "8. Şikâyet ve Güvenlik Kayıtları" },
  { id: "takaspara-bekleyen-teklifler-ve-islem-kayitlari", label: "9. TakasPara, Bekleyen Teklifler ve İşlem Kayıtları" },
  { id: "mesajlar-ve-konusmalar", label: "10. Mesajlar ve Konuşmalar" },
  { id: "sosyal-giris-baglantilari", label: "11. Sosyal Giriş Bağlantıları" },
  { id: "verilerin-saklanmasi-ve-silinmesi", label: "12. Verilerin Saklanması ve Silinmesi" },
  { id: "hesabi-silmeden-veri-silme-talebi", label: "13. Hesabı Silmeden Veri Silme Talebi" },
  { id: "veri-silme-talebi-nasil-iletilir", label: "14. Veri Silme Talebi Nasıl İletilir?" },
  { id: "yasal-saklama-yukumlulukleri", label: "15. Yasal Saklama Yükümlülükleri" },
  { id: "bilgilendirmenin-guncellenmesi", label: "16. Bilgilendirmenin Güncellenmesi" },
];

export default function HesapVeVeriSilmePage() {
  return (
    <InfoLayout path="/hesap-ve-veri-silme" title="Hesap ve Veri Silme Bilgilendirmesi" updated="10 Ekim 2026" toc={TOC}>
      <div className="doc">
        <p>
        Takasla kullanıcıları hesaplarını istedikleri zaman uygulama içerisinden kalıcı olarak silebilir.<br />Bu sayfa, hesap silme işleminin nasıl gerçekleştirildiğini, silme sonrasında hangi verilerin kaldırıldığını ve hangi kayıtların sınırlı durumlarda saklanabileceğini açıklamaktadır.
      </p>

      <section>
        <h2 id="hesabimi-nasil-silebilirim">1. Hesabımı Nasıl Silebilirim?</h2>
      </section>

      <p>
        Takasla hesabınızı uygulama içerisinden:<br />Ayarlar &gt; Hesabımı kalıcı olarak sil<br />adımlarını takip ederek silebilirsiniz.<br />Hesap silme işlemi başlatıldığında kullanıcıdan işlemi onaylaması istenir.<br />Hesabın yetkisiz bir kişi tarafından silinmesini önlemek amacıyla gerekli durumlarda yeniden kimlik doğrulaması talep edilebilir.<br />Apple ile oluşturulan hesaplarda, hesabın ve Takasla ile kurulan Apple bağlantısının güvenli şekilde kaldırılabilmesi için silme sırasında Apple ile yeniden doğrulama yapılabilir.<br />Apple da hesap silme sırasında kullanıcının yeniden doğrulanmasına izin vermekte ve Sign in with Apple kullanan uygulamalarda hesap silindiğinde ilişkili kullanıcı tokenlarının iptal edilmesini istemektedir. 
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
        <h2 id="hesap-silme-islemi-kalicidir">2. Hesap Silme İşlemi Kalıcıdır</h2>
      </section>

      <p>
        Hesap silme işlemi tamamlandığında hesap yeniden etkinleştirilemez.<br />Silinen hesabın;
      </p>

      <ul>
        <li>profil bilgilerine,</li>
        <li>aktif ilanlarına,</li>
        <li>mesajlarına ve sohbet kayıtlarına,</li>
        <li>favorilerine,</li>
        <li>bildirimlerine,</li>
        <li>aktif veya bekleyen takas tekliflerine</li>
      </ul>

      <p>
        yeniden erişilemez.<br />Takasla’yı tekrar kullanmak isteyen kullanıcıların yeni bir hesap oluşturması gerekir.
      </p>

      <section>
        <h2 id="hesap-silindiginde-kaldirilan-veriler">3. Hesap Silindiğinde Kaldırılan Veriler</h2>
      </section>

      <p>
        Mevcut Takasla sistemi kapsamında hesap silme işlemiyle birlikte, hesaba bağlı aşağıdaki veriler sistemden kaldırılır veya artık kullanıcı hesabıyla ilişkilendirilemez hale getirilir:
      </p>

      <ul>
        <li>Ad ve soyad</li>
        <li>Kullanıcı adı</li>
        <li>E-posta adresi</li>
        <li>Profil fotoğrafı</li>
        <li>İl ve ilçe bilgileri</li>
        <li>Kullanıcı hesabı ve kimlik doğrulama kaydı</li>
        <li>Bildirim jetonları ve uygulama içi bildirim kayıtları</li>
        <li>Favori kayıtları</li>
        <li>Mesajlar ve konuşmalar</li>
        <li>Sohbet kapsamında paylaşılan görsellerin veritabanı referansları</li>
        <li>Tamamlanmamış (aktif/taslak/reddedilmiş) ilanlar ve bunlara ait fotoğraflar</li>
        <li>Tamamlanmamış veya bekleyen takas teklifleri</li>
        <li>Kullanıcının oluşturduğu şikayet ve rapor kayıtları</li>
      </ul>

      <section>
        <h2 id="profil-ilan-ve-sohbet-gorselleri">4. Profil, İlan ve Sohbet Görselleri</h2>
      </section>

      <p>
        Hesap silme kapsamında kullanıcıya ait profil fotoğrafı, silinen ilan görselleri ve sohbet görsellerinin veritabanı referansları kaldırılır.<br />Veritabanında referansı kalmayan (yetim) medya dosyaları, Takasla tarafından kullanılan bulut depolama sistemindeki (Cloudflare R2) otomatik saklama temizliği süreci kapsamında belirli bir güvenlik aralığının ardından fiziksel depolamadan silinir.<br />Kullanıcı profil fotoğrafını değiştirdiğinde de artık kullanılmayan eski profil görselleri bu temizlik süreciyle kaldırılır.
      </p>

      <section>
        <h2 id="tamamlanmis-ilanlar">5. Tamamlanmış İlanlar</h2>
      </section>

      <p>
        Daha önce tamamlanmış bir takasın parçası olan ilan kayıtları işlem geçmişinin ve platform kayıtlarının bütünlüğünün korunması amacıyla saklanabilir.<br />Ancak kullanıcının kişisel içeriğini korumak amacıyla ilan başlığı (&quot;Silinmiş İlan&quot;), konumu (&quot;Silinmiş Konum&quot;), aranan ürün bilgisi (&quot;Silinmiş Bilgi&quot;), açıklaması ve özellikleri nötr sistem değerleriyle temizlenerek kimlik bilgilerinden ayrıştırılır ve ilana ait tüm fotoğraflar silinir. İlanın kullanıcı profiliyle olan doğrudan bağlantısı kaldırılır.
      </p>

      <section>
        <h2 id="tamamlanmis-takaslar">6. Tamamlanmış Takaslar</h2>
      </section>

      <p>
        Tamamlanmış takaslara ilişkin işlem kayıtları; işlem bütünlüğünün korunması, takas geçmişinin devamlılığı, uyuşmazlıkların incelenebilmesi ve hukuki hakların korunması amacıyla ilgili mevzuat ve işleme amacının gerektirdiği süre boyunca saklanabilir.
      </p>

      <section>
        <h2 id="degerlendirmeler">7. Değerlendirmeler</h2>
      </section>

      <p>
        Kullanıcı tarafından başka kullanıcılar için yazılmış değerlendirme metinleri/yorumları hesap silme işlemi sırasında tamamen kaldırılır.<br />Tamamlanan takaslara ait sayısal değerlendirme puanları (1-5 puan), platformdaki değerlendirme sisteminin ve puan ortalamasının bütünlüğünün korunması amacıyla kullanıcı kimliğinden ayrıştırılmış olarak korunabilir.
      </p>

      <section>
        <h2 id="sikayet-ve-guvenlik-kayitlari">8. Şikâyet ve Güvenlik Kayıtları</h2>
      </section>

      <p>
        Hesap sahibinin oluşturduğu şikâyet ve rapor kayıtları hesap silme kapsamında kaldırılır.<br />Ancak güvenlik olayları, dolandırıcılık incelemeleri, hukuki uyuşmazlıklar veya yürürlükteki mevzuat nedeniyle saklanması gereken sınırlı kayıtlar, gerekli olduğu süre boyunca muhafaza edilebilir.
      </p>

      <section>
        <h2 id="takaspara-bekleyen-teklifler-ve-islem-kayitlari">9. TakasPara, Bekleyen Teklifler ve İşlem Kayıtları</h2>
      </section>

      <p>
        Hesabın silinmesiyle birlikte kullanıcının aktif TakasPara kullanım hakkı ve hesapla ilişkili bakiye erişimi sona erer.<br />Hesap silindiğinde henüz kabul edilmemiş bekleyen (pending) takas teklifleri iptal edilir ve teklif gönderen kullanıcının 10 TP teminatı iade edilir.<br />Ancak taraflarca daha önce kabul edilmiş (accepted) takas tekliflerinde işlem bedeli kesinleştiğinden, hesap silme nedeniyle takas sona erse dahi 10 TP iadesi yapılmaz.<br />Uygulama içi satın almalara veya geçmiş işlemlere ilişkin sınırlı işlem kayıtları; işlemlerin teyidi, uyuşmazlıkların incelenmesi ve yasal yükümlülüklerin yerine getirilmesi amacıyla ilgili mevzuat ve işleme amacının gerektirdiği süre boyunca saklanabilir.<br />TakasPara nakit para veya banka hesabındaki bakiye niteliğinde değildir.
      </p>

      <section>
        <h2 id="mesajlar-ve-konusmalar">10. Mesajlar ve Konuşmalar</h2>
      </section>

      <p>
        Mevcut Takasla sisteminde hesap silme işlemi sırasında kullanıcıya bağlı mesajlar, konuşmalar ve sohbet görselleri referansları kaldırılır.<br />Mesajlaşma verilerinin saklanmasını gerektiren ayrı bir hukuki yükümlülük veya yetkili makam talebi bulunması halinde uygulanabilir mevzuat hükümleri saklıdır.
      </p>

      <section>
        <h2 id="sosyal-giris-baglantilari">11. Sosyal Giriş Bağlantıları</h2>
      </section>

      <p>
        Takasla hesabının Apple veya benzeri bir sosyal giriş yöntemiyle oluşturulması halinde hesap silme sürecinde ilgili bağlantının güvenli şekilde sonlandırılması için yeniden kimlik doğrulaması gerekebilir.<br />Bu işlem yeni bir kullanıcı hesabı oluşturmaz ve hesabın silinmesini iptal etmez; yalnızca silme talebinde bulunan kişinin hesap sahibi olduğunun doğrulanması ve mevcut yetkilendirme bağlantısının kaldırılması amacıyla gerçekleştirilir.
      </p>

      <section>
        <h2 id="verilerin-saklanmasi-ve-silinmesi">12. Verilerin Saklanması ve Silinmesi</h2>
      </section>

      <p>
        Hesap silme işlemi sırasında aktif kullanıcı verileri silinir veya temizlenir. Tamamlanmış işlemlere ve cüzdan hareketlerine ait sınırlı kayıtlar yalnızca ilgili işlemlerin, uyuşmazlık incelemelerinin ve platform kayıtlarının devamlılığının gerektirdiği ölçüde saklanabilir.<br />Saklama gerekçesi tamamen ortadan kalkan veriler mevzuata uygun şekilde silinir, yok edilir veya kimlik bilgilerinden arındırılır.
      </p>

      <section>
        <h2 id="hesabi-silmeden-veri-silme-talebi">13. Hesabı Silmeden Veri Silme Talebi</h2>
      </section>

      <p>
        Kullanıcılar, hesabını tamamen silmeden de KVKK kapsamındaki kişisel verilerine ilişkin taleplerini Takasla’ya iletebilir.<br />Bu kapsamda kullanıcı;
      </p>

      <ul>
        <li>kişisel verilerinin işlenip işlenmediğini öğrenme,</li>
        <li>kendisi hakkında işlenen verilere ilişkin bilgi talep etme,</li>
        <li>yanlış veya eksik verilerin düzeltilmesini isteme,</li>
        <li>şartları oluştuğunda verilerin silinmesini veya yok edilmesini talep etme</li>
      </ul>

      <p>
        haklarını kullanabilir.<br />Kişisel verilerin işlenmesini gerektiren sebepler ortadan kalkmışsa KVKK kapsamında verilerin silinmesi, yok edilmesi veya anonim hale getirilmesi gerekir. 
      </p>

      <p>
        <a
          href="https://www.kvkk.gov.tr/Icerik/5441/KISISEL-VERILERIN-SILINMESI-YOK-EDILMESI-VEYA-ANONIM-HALE-GETIRILMESI-HAKKINDA-YONETMELIK?utm_source=chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          KVKK →
        </a>
      </p>

      <section>
        <h2 id="veri-silme-talebi-nasil-iletilir">14. Veri Silme Talebi Nasıl İletilir?</h2>
      </section>

      <p>
        Hesap veya kişisel verilerinizle ilgili bir talebiniz bulunması halinde aşağıdaki iletişim bilgileri üzerinden Takasla’ya ulaşabilirsiniz:
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
        Başvurunun gerçekten ilgili kullanıcı tarafından yapıldığının doğrulanması amacıyla ek bilgi veya kimlik doğrulaması talep edilebilir.<br />KVKK kapsamındaki bir silme veya yok etme talebinde, işleme şartlarının tamamı ortadan kalkmışsa başvurunun en geç otuz gün içerisinde sonuçlandırılması öngörülmektedir. 
      </p>

      <p>
        <a
          href="https://www.kvkk.gov.tr/Icerik/5441/KISISEL-VERILERIN-SILINMESI-YOK-EDILMESI-VEYA-ANONIM-HALE-GETIRILMESI-HAKKINDA-YONETMELIK?utm_source=chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          KVKK →
        </a>
      </p>

      <section>
        <h2 id="yasal-saklama-yukumlulukleri">15. Yasal Saklama Yükümlülükleri</h2>
      </section>

      <p>
        Hesap silme talebi, yürürlükteki mevzuat nedeniyle saklanması zorunlu olan kayıtların her durumda derhal yok edilmesini gerektirmeyebilir.<br />Saklanması hukuken gerekli olan veriler yalnızca ilgili yükümlülüğün yerine getirilmesi amacıyla ve gerekli süre boyunca muhafaza edilir.<br />Saklama sebebi sona erdiğinde kişisel veriler mevzuata uygun şekilde silinir, yok edilir veya anonim hale getirilir.
      </p>

      <section>
        <h2 id="bilgilendirmenin-guncellenmesi">16. Bilgilendirmenin Güncellenmesi</h2>
      </section>

      <p>
        Takasla’nın hesap silme sistemi, kişisel veri işleme faaliyetleri veya yürürlükteki mevzuatta değişiklik yapılması halinde bu bilgilendirme metni güncellenebilir.<br />Güncel metne Takasla uygulaması veya takaslapp.com üzerinden erişilebilir.
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
