import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalNav from "@/components/LegalNav";
import LegalHeader from "@/components/LegalHeader";

export const metadata: Metadata = {
  title: "Hesap Silme ve Veri Silme Bilgilendirmesi - Takasla",
  description: "Takasla kullanıcı hesabı ve kişisel verilerin silinmesi süreç bilgilendirmesi.",
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
                Hesap Silme ve Veri Silme Bilgilendirmesi
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                Son Güncelleme: 28 Eylül 2026
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
            Takasla kullanıcıları hesaplarını istedikleri zaman uygulama içerisinden kalıcı olarak silebilir.<br />Bu sayfa, hesap silme işleminin nasıl gerçekleştirildiğini, silme sonrasında hangi verilerin kaldırıldığını ve hangi kayıtların sınırlı durumlarda kimlikten ayrıştırılmış şekilde saklanabileceğini açıklamaktadır.
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
            <li>ilanlarına,</li>
            <li>mesajlarına,</li>
            <li>favorilerine,</li>
            <li>bildirimlerine,</li>
            <li>aktif takaslarına</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            yeniden erişilemeyebilir.<br />Takasla’yı tekrar kullanmak isteyen kullanıcıların yeni bir hesap oluşturması gerekebilir.
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
            <li>Bildirim tokenları</li>
            <li>Uygulama içi bildirim kayıtları</li>
            <li>Favori kayıtları</li>
            <li>Mesajlar</li>
            <li>Konuşmalar</li>
            <li>Tamamlanmamış ilanlar</li>
            <li>Tamamlanmamış ilanlara ait görseller</li>
            <li>Aktif veya tamamlanmamış takas işlemleri</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Hesap silme sırasında aktif ve tamamlanmamış takasların sonlandırılması gerekebilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              4. Profil ve İlan Görselleri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Hesap silme kapsamında kullanıcıya ait profil görseli ve silinen ilanlara ait görseller, Takasla tarafından kullanılan dosya depolama sistemlerinden kaldırılabilir.<br />Kullanıcı profil fotoğrafını değiştirdiğinde, artık kullanılmayan eski profil görselleri de sistemden temizlenebilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              5. Tamamlanmış İlanlar
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Daha önce tamamlanmış bir takasın parçası olan ilan kayıtlarının bazıları işlem geçmişinin ve platform bütünlüğünün korunması amacıyla tutulabilir.<br />Bu durumda ilan ile silinen kullanıcı hesabı arasındaki doğrudan bağlantı kaldırılabilir.<br />Kullanıcının aktif hesabı silindikten sonra bu kayıtlar kullanıcının aktif profiline bağlı şekilde gösterilmez.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              6. Tamamlanmış Takaslar
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Tamamlanmış takaslara ilişkin bazı kayıtlar;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>işlem bütünlüğünün korunması,</li>
            <li>takas geçmişinin bozulmaması,</li>
            <li>uyuşmazlıkların incelenebilmesi,</li>
            <li>kullanıcı değerlendirmelerinin bütünlüğünün korunması,</li>
            <li>hukuki hakların tesisi, kullanılması veya korunması</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            gibi amaçlarla tutulabilir.<br />Bu tür kayıtlarda silinen kullanıcı hesabına ilişkin doğrudan kimlik bağlantıları kaldırılabilir veya veriler kimlikten ayrıştırılabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              7. Değerlendirmeler
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Tamamlanan takaslardan sonra oluşturulan değerlendirmeler, platformdaki değerlendirme sisteminin bütünlüğünün korunması amacıyla hesap silindikten sonra da tutulabilir.<br />Bu durumda değerlendirme kaydı, silinen kullanıcının aktif hesabıyla doğrudan bağlantılı olmayacak şekilde saklanabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              8. Şikâyet ve Güvenlik Kayıtları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Hesap sahibinin oluşturduğu belirli şikâyet ve rapor kayıtları hesap silme kapsamında kaldırılabilir.<br />Ancak güvenlik olayları, hukuki uyuşmazlıklar veya yürürlükteki mevzuat nedeniyle saklanması gereken sınırlı kayıtlar, gerekli olduğu süre boyunca muhafaza edilebilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              9. TakasPara ve İşlem Kayıtları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Hesabın silinmesiyle birlikte kullanıcının aktif TakasPara kullanım hakkı ve hesapla ilişkili bakiye erişimi sona erer.<br />Uygulama içi satın almalara veya geçmiş işlemlere ilişkin bazı işlem kayıtları;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>muhasebesel veya hukuki yükümlülüklerin yerine getirilmesi,</li>
            <li>işlemlerin doğrulanması,</li>
            <li>kötüye kullanım veya uyuşmazlıkların incelenmesi,</li>
            <li>hakların korunması</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            amacıyla gerekli olduğu ölçüde saklanabilir.<br />TakasPara&apos;nın nakit para veya banka hesabındaki bakiye niteliğinde olduğu anlamına gelmez.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              10. Mesajlar ve Konuşmalar
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Mevcut Takasla sisteminde hesap silme işlemi sırasında kullanıcıya bağlı mesaj ve konuşma kayıtları kaldırılır.<br />Mesajlaşma verilerinin saklanması gereken ayrı bir hukuki yükümlülük veya yetkili makam talebi bulunması halinde uygulanabilir mevzuat hükümleri saklıdır.
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
              12. Silme, Yok Etme ve Anonim Hale Getirme
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kişisel verilerin işlenmesini gerektiren sebeplerin tamamen ortadan kalkması halinde veriler, yürürlükteki mevzuata uygun olarak silinir, yok edilir veya anonim hale getirilir.<br />KVKK düzenlemelerine göre anonim hale getirilen verinin, başka verilerle eşleştirilse dahi kimliği belirli veya belirlenebilir bir gerçek kişiyle ilişkilendirilememesi gerekir. 
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

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla, verinin niteliğine ve saklanma sebebine göre uygun yöntemi uygular.
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
            <p className="font-medium text-gray-900 mb-1">İletişim Bilgileri:</p>
            <p>Veri Sorumlusu: Recep Aydoğan<br />Adres: Esenler Mah., Horasan Sok., Görgülü Center No:4/4, Selçuklu / Konya</p>
            <div className="mt-3 pt-3 border-t border-gray-200 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <p><strong>E-posta:</strong> <a href="mailto:destek@takasla.com" className="text-[#00A859] hover:underline font-medium">destek@takasla.com</a> / <a href="mailto:takaslappcom@gmail.com" className="text-[#00A859] hover:underline font-medium">takaslappcom@gmail.com</a></p>
              <p><strong>Telefon:</strong> <span className="text-gray-900 font-medium">0505 063 85 43</span></p>
              <p><strong>Web:</strong> <a href="https://takaslapp.com" className="text-[#00A859] hover:underline font-medium">takaslapp.com</a></p>
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
            <p className="font-medium text-gray-900 mb-1">İletişim Bilgileri:</p>
            <p>Takasla – Recep Aydoğan</p>
            <div className="mt-3 pt-3 border-t border-gray-200 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <p><strong>E-posta:</strong> <a href="mailto:destek@takasla.com" className="text-[#00A859] hover:underline font-medium">destek@takasla.com</a> / <a href="mailto:takaslappcom@gmail.com" className="text-[#00A859] hover:underline font-medium">takaslappcom@gmail.com</a></p>
              <p><strong>Telefon:</strong> <span className="text-gray-900 font-medium">0505 063 85 43</span></p>
              <p><strong>Web:</strong> <a href="https://takaslapp.com" className="text-[#00A859] hover:underline font-medium">takaslapp.com</a></p>
            </div>
          </div>
        </div>
      </main>

      {/* Main Footer */}
      <Footer outerBg="bg-[#FAF9F5]" className="pt-12" />
    </div>
  );
}
