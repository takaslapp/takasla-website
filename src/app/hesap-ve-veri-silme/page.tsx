import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalNav from "@/components/LegalNav";
import LegalHeader from "@/components/LegalHeader";

export const metadata: Metadata = {
  title: "Hesap ve Veri Silme Bilgilendirmesi - Takasla",
  description: "Takasla hesabınızı silme adımları, veri silme ve saklama esasları hakkında bilgilendirme.",
  alternates: {
    canonical: "/hesap-ve-veri-silme",
  },
  keywords: ["takasla hesap silme","veri silme","hesap kapatma"],
};

export default function HesapVeVeriSilmePage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-gray-800 flex flex-col justify-between font-sans">
      <LegalHeader />

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 py-12 sm:py-16 w-full flex-grow">
        {/* Banner Card */}
        <div className="bg-[#151716] text-white rounded-3xl p-8 sm:p-12 mb-6 sm:mb-8 relative overflow-hidden shadow-xl border border-white/10">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="inline-block bg-[#00E676]/15 text-[#00E676] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Yasal Bilgilendirme
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Hesap ve Veri Silme Bilgilendirmesi
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                Son Güncelleme: 10 Ekim 2026
              </p>
            </div>
            <img
              src="/images/takasla-3d.png"
              alt="Takasla 3D"
              className="hidden md:block w-24 h-24 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex-shrink-0"
            />
          </div>
        </div>

        {/* Legal Navigation Bar */}
        <LegalNav currentPage="hesap-ve-veri-silme" />

        {/* Content Details */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-4 text-gray-700 leading-relaxed mb-12">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla kullanıcıları hesaplarını istedikleri zaman uygulama içerisinden kalıcı olarak silebilir.<br />Bu sayfa, hesap silme işleminin nasıl gerçekleştirildiğini, silme sonrasında hangi verilerin kaldırıldığını ve hangi kayıtların sınırlı durumlarda saklanabileceğini açıklamaktadır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              1. Hesabımı Nasıl Silebilirim?
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla hesabınızı uygulama içerisinden:<br />Ayarlar &gt; Hesabımı kalıcı olarak sil<br />adımlarını takip ederek silebilirsiniz.<br />Hesap silme işlemi başlatıldığında kullanıcıdan işlemi onaylaması istenir.<br />Hesabın yetkisiz bir kişi tarafından silinmesini önlemek amacıyla gerekli durumlarda yeniden kimlik doğrulaması talep edilebilir.<br />Apple ile oluşturulan hesaplarda, hesabın ve Takasla ile kurulan Apple bağlantısının güvenli şekilde kaldırılabilmesi için silme sırasında Apple ile yeniden doğrulama yapılabilir.<br />Apple da hesap silme sırasında kullanıcının yeniden doğrulanmasına izin vermekte ve Sign in with Apple kullanan uygulamalarda hesap silindiğinde ilişkili kullanıcı tokenlarının iptal edilmesini istemektedir. 
          </p>

          <p className="mb-4">
            <a
              href="https://developer.apple.com/support/offering-account-deletion-in-your-app?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A859] font-medium underline hover:text-[#00E676] transition-colors text-sm sm:text-base"
            >
              Apple Developer →
            </a>
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              2. Hesap Silme İşlemi Kalıcıdır
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Hesap silme işlemi tamamlandığında hesap yeniden etkinleştirilemez.<br />Silinen hesabın;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>profil bilgilerine,</li>
            <li>aktif ilanlarına,</li>
            <li>mesajlarına ve sohbet kayıtlarına,</li>
            <li>favorilerine,</li>
            <li>bildirimlerine,</li>
            <li>aktif veya bekleyen takas tekliflerine</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            yeniden erişilemez.<br />Takasla’yı tekrar kullanmak isteyen kullanıcıların yeni bir hesap oluşturması gerekir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              3. Hesap Silindiğinde Kaldırılan Veriler
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Mevcut Takasla sistemi kapsamında hesap silme işlemiyle birlikte, hesaba bağlı aşağıdaki veriler sistemden kaldırılır veya artık kullanıcı hesabıyla ilişkilendirilemez hale getirilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
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

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              4. Profil, İlan ve Sohbet Görselleri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Hesap silme kapsamında kullanıcıya ait profil fotoğrafı, silinen ilan görselleri ve sohbet görsellerinin veritabanı referansları kaldırılır.<br />Veritabanında referansı kalmayan (yetim) medya dosyaları, Takasla tarafından kullanılan bulut depolama sistemindeki (Cloudflare R2) otomatik saklama temizliği süreci kapsamında belirli bir güvenlik aralığının ardından fiziksel depolamadan silinir.<br />Kullanıcı profil fotoğrafını değiştirdiğinde de artık kullanılmayan eski profil görselleri bu temizlik süreciyle kaldırılır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              5. Tamamlanmış İlanlar
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Daha önce tamamlanmış bir takasın parçası olan ilan kayıtları işlem geçmişinin ve platform kayıtlarının bütünlüğünün korunması amacıyla saklanabilir.<br />Ancak kullanıcının kişisel içeriğini korumak amacıyla ilan başlığı (&quot;Silinmiş İlan&quot;), konumu (&quot;Silinmiş Konum&quot;), aranan ürün bilgisi (&quot;Silinmiş Bilgi&quot;), açıklaması ve özellikleri nötr sistem değerleriyle temizlenerek kimlik bilgilerinden ayrıştırılır ve ilana ait tüm fotoğraflar silinir. İlanın kullanıcı profiliyle olan doğrudan bağlantısı kaldırılır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              6. Tamamlanmış Takaslar
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Tamamlanmış takaslara ilişkin işlem kayıtları; işlem bütünlüğünün korunması, takas geçmişinin devamlılığı, uyuşmazlıkların incelenebilmesi ve hukuki hakların korunması amacıyla ilgili mevzuat ve işleme amacının gerektirdiği süre boyunca saklanabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              7. Değerlendirmeler
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcı tarafından başka kullanıcılar için yazılmış değerlendirme metinleri/yorumları hesap silme işlemi sırasında tamamen kaldırılır.<br />Tamamlanan takaslara ait sayısal değerlendirme puanları (1-5 puan), platformdaki değerlendirme sisteminin ve puan ortalamasının bütünlüğünün korunması amacıyla kullanıcı kimliğinden ayrıştırılmış olarak korunabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              8. Şikâyet ve Güvenlik Kayıtları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Hesap sahibinin oluşturduğu şikâyet ve rapor kayıtları hesap silme kapsamında kaldırılır.<br />Ancak güvenlik olayları, dolandırıcılık incelemeleri, hukuki uyuşmazlıklar veya yürürlükteki mevzuat nedeniyle saklanması gereken sınırlı kayıtlar, gerekli olduğu süre boyunca muhafaza edilebilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              9. TakasPara, Bekleyen Teklifler ve İşlem Kayıtları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Hesabın silinmesiyle birlikte kullanıcının aktif TakasPara kullanım hakkı ve hesapla ilişkili bakiye erişimi sona erer.<br />Hesap silindiğinde henüz kabul edilmemiş bekleyen (pending) takas teklifleri iptal edilir ve teklif gönderen kullanıcının 10 TP teminatı iade edilir.<br />Ancak taraflarca daha önce kabul edilmiş (accepted) takas tekliflerinde işlem bedeli kesinleştiğinden, hesap silme nedeniyle takas sona erse dahi 10 TP iadesi yapılmaz.<br />Uygulama içi satın almalara veya geçmiş işlemlere ilişkin sınırlı işlem kayıtları; işlemlerin teyidi, uyuşmazlıkların incelenmesi ve yasal yükümlülüklerin yerine getirilmesi amacıyla ilgili mevzuat ve işleme amacının gerektirdiği süre boyunca saklanabilir.<br />TakasPara nakit para veya banka hesabındaki bakiye niteliğinde değildir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              10. Mesajlar ve Konuşmalar
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Mevcut Takasla sisteminde hesap silme işlemi sırasında kullanıcıya bağlı mesajlar, konuşmalar ve sohbet görselleri referansları kaldırılır.<br />Mesajlaşma verilerinin saklanmasını gerektiren ayrı bir hukuki yükümlülük veya yetkili makam talebi bulunması halinde uygulanabilir mevzuat hükümleri saklıdır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              11. Sosyal Giriş Bağlantıları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla hesabının Apple veya benzeri bir sosyal giriş yöntemiyle oluşturulması halinde hesap silme sürecinde ilgili bağlantının güvenli şekilde sonlandırılması için yeniden kimlik doğrulaması gerekebilir.<br />Bu işlem yeni bir kullanıcı hesabı oluşturmaz ve hesabın silinmesini iptal etmez; yalnızca silme talebinde bulunan kişinin hesap sahibi olduğunun doğrulanması ve mevcut yetkilendirme bağlantısının kaldırılması amacıyla gerçekleştirilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              12. Verilerin Saklanması ve Silinmesi
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Hesap silme işlemi sırasında aktif kullanıcı verileri silinir veya temizlenir. Tamamlanmış işlemlere ve cüzdan hareketlerine ait sınırlı kayıtlar yalnızca ilgili işlemlerin, uyuşmazlık incelemelerinin ve platform kayıtlarının devamlılığının gerektirdiği ölçüde saklanabilir.<br />Saklama gerekçesi tamamen ortadan kalkan veriler mevzuata uygun şekilde silinir, yok edilir veya kimlik bilgilerinden arındırılır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              13. Hesabı Silmeden Veri Silme Talebi
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcılar, hesabını tamamen silmeden de KVKK kapsamındaki kişisel verilerine ilişkin taleplerini Takasla’ya iletebilir.<br />Bu kapsamda kullanıcı;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>kişisel verilerinin işlenip işlenmediğini öğrenme,</li>
            <li>kendisi hakkında işlenen verilere ilişkin bilgi talep etme,</li>
            <li>yanlış veya eksik verilerin düzeltilmesini isteme,</li>
            <li>şartları oluştuğunda verilerin silinmesini veya yok edilmesini talep etme</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            haklarını kullanabilir.<br />Kişisel verilerin işlenmesini gerektiren sebepler ortadan kalkmışsa KVKK kapsamında verilerin silinmesi, yok edilmesi veya anonim hale getirilmesi gerekir. 
          </p>

          <p className="mb-4">
            <a
              href="https://www.kvkk.gov.tr/Icerik/5441/KISISEL-VERILERIN-SILINMESI-YOK-EDILMESI-VEYA-ANONIM-HALE-GETIRILMESI-HAKKINDA-YONETMELIK?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A859] font-medium underline hover:text-[#00E676] transition-colors text-sm sm:text-base"
            >
              KVKK →
            </a>
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              14. Veri Silme Talebi Nasıl İletilir?
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Hesap veya kişisel verilerinizle ilgili bir talebiniz bulunması halinde aşağıdaki iletişim bilgileri üzerinden Takasla’ya ulaşabilirsiniz:
          </p>

          <div className="bg-[#FAF9F5] border border-gray-200/80 rounded-2xl p-5 my-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p className="font-medium text-gray-900 mb-1">Takasla – Recep Aydoğan</p>
            <p>Esenler Mah., Horasan Sok., Görgülü Center No:4/4<br />Selçuklu / Konya</p>
            <div className="mt-3 pt-3 border-t border-gray-200 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <p><strong>E-posta:</strong> <a href="mailto:takaslappcom@gmail.com" className="text-[#00A859] hover:underline font-medium">takaslappcom@gmail.com</a></p>
              <p><strong>İnternet Sitesi:</strong> <a href="https://takaslapp.com" className="text-[#00A859] hover:underline font-medium">takaslapp.com</a></p>
            </div>
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Başvurunun gerçekten ilgili kullanıcı tarafından yapıldığının doğrulanması amacıyla ek bilgi veya kimlik doğrulaması talep edilebilir.<br />KVKK kapsamındaki bir silme veya yok etme talebinde, işleme şartlarının tamamı ortadan kalkmışsa başvurunun en geç otuz gün içerisinde sonuçlandırılması öngörülmektedir. 
          </p>

          <p className="mb-4">
            <a
              href="https://www.kvkk.gov.tr/Icerik/5441/KISISEL-VERILERIN-SILINMESI-YOK-EDILMESI-VEYA-ANONIM-HALE-GETIRILMESI-HAKKINDA-YONETMELIK?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A859] font-medium underline hover:text-[#00E676] transition-colors text-sm sm:text-base"
            >
              KVKK →
            </a>
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              15. Yasal Saklama Yükümlülükleri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Hesap silme talebi, yürürlükteki mevzuat nedeniyle saklanması zorunlu olan kayıtların her durumda derhal yok edilmesini gerektirmeyebilir.<br />Saklanması hukuken gerekli olan veriler yalnızca ilgili yükümlülüğün yerine getirilmesi amacıyla ve gerekli süre boyunca muhafaza edilir.<br />Saklama sebebi sona erdiğinde kişisel veriler mevzuata uygun şekilde silinir, yok edilir veya anonim hale getirilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              16. Bilgilendirmenin Güncellenmesi
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla’nın hesap silme sistemi, kişisel veri işleme faaliyetleri veya yürürlükteki mevzuatta değişiklik yapılması halinde bu bilgilendirme metni güncellenebilir.<br />Güncel metne Takasla uygulaması veya takaslapp.com üzerinden erişilebilir.
          </p>

          <div className="bg-[#FAF9F5] border border-gray-200/80 rounded-2xl p-5 my-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p className="font-medium text-gray-900 mb-1">Takasla – Recep Aydoğan</p>
            <p>Esenler Mah., Horasan Sok., Görgülü Center No:4/4<br />Selçuklu / Konya</p>
            <div className="mt-3 pt-3 border-t border-gray-200 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <p><strong>E-posta:</strong> <a href="mailto:takaslappcom@gmail.com" className="text-[#00A859] hover:underline font-medium">takaslappcom@gmail.com</a></p>
              <p><strong>İnternet Sitesi:</strong> <a href="https://takaslapp.com" className="text-[#00A859] hover:underline font-medium">takaslapp.com</a></p>
            </div>
          </div>
        </div>
      </main>

      {/* Main Footer */}
      <Footer outerBg="bg-[#FAF9F5]" className="pt-12" />
    </div>
  );
}
