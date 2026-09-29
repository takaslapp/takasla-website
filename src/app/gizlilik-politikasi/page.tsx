import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalNav from "@/components/LegalNav";
import LegalHeader from "@/components/LegalHeader";

export const metadata: Metadata = {
  title: "Gizlilik Politikası - Takasla",
  description: "Takasla kullanıcılarının kişisel verilerinin korunması ve gizlilik politikası.",
};

export default function GizlilikPolitikasiPage() {
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
                Gizlilik Politikası
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
        <LegalNav currentPage="gizlilik-politikasi" />

        {/* Content Details */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-4 text-gray-700 leading-relaxed mb-12">

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla olarak kullanıcılarımızın gizliliğine ve kişisel verilerinin korunmasına önem veriyoruz. Bu Gizlilik Politikası, Takasla mobil uygulamasını ve takaslapp.com internet sitesini kullandığınızda hangi bilgilerin işlendiğini, bu bilgilerin hangi amaçlarla kullanıldığını, kimlerle paylaşılabileceğini, nasıl korunduğunu ve verilerinizle ilgili sahip olduğunuz seçenekleri açıklamaktadır.
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla hizmetlerinin işletilmesinden aşağıdaki kişi sorumludur:
          </p>

          <div className="bg-[#FAF9F5] border border-gray-200/80 rounded-2xl p-5 my-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p className="font-medium text-gray-900 mb-1">İletişim Bilgileri:</p>
            <p>Recep Aydoğan<br />Esenler Mah., Horasan Sok., Görgülü Center No:4/4<br />Selçuklu / Konya</p>
            <div className="mt-3 pt-3 border-t border-gray-200 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <p><strong>E-posta:</strong> <a href="mailto:destek@takasla.com" className="text-[#00A859] hover:underline font-medium">destek@takasla.com</a> / <a href="mailto:takaslappcom@gmail.com" className="text-[#00A859] hover:underline font-medium">takaslappcom@gmail.com</a></p>
              <p><strong>Telefon:</strong> <span className="text-gray-900 font-medium">0505 063 85 43</span></p>
              <p><strong>Web:</strong> <a href="https://takaslapp.com" className="text-[#00A859] hover:underline font-medium">takaslapp.com</a></p>
            </div>
          </div>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              1. Hangi Bilgileri İşliyoruz?
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla’nın çalışabilmesi ve kullanıcılar arasında güvenli şekilde takas yapılabilmesi için aşağıdaki bilgiler işlenebilir.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            1.1. Hesap ve Profil Bilgileri
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Hesap oluşturduğunuzda veya profilinizi düzenlediğinizde aşağıdaki bilgiler işlenebilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Ad</li>
            <li>Soyad</li>
            <li>Kullanıcı adı</li>
            <li>E-posta adresi</li>
            <li>İl</li>
            <li>İlçe</li>
            <li>Profil fotoğrafı</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Ayrıca sistemin çalışması amacıyla kullanıcı hesabınızla ilişkili olarak;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Kullanıcı kimliği</li>
            <li>Hesap oluşturma ve güncelleme tarihleri</li>
            <li>Kullanıcı rolü</li>
            <li>Hesap kısıtlama veya yasaklama durumu</li>
            <li>Ortalama değerlendirme puanı</li>
            <li>Tamamlanan takas sayısı</li>
            <li>TakasPara bakiyesi</li>
            <li>İlk ücretsiz takas teklifi hakkının kullanılıp kullanılmadığı</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            gibi sistemsel bilgiler işlenebilir.<br />Profil fotoğrafınızı değiştirdiğinizde eski profil fotoğrafınız depolama sisteminden kaldırılır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              2. İlan Bilgileri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla’da ilan oluşturduğunuzda aşağıdaki bilgiler işlenebilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>İlan başlığı</li>
            <li>İlan açıklaması</li>
            <li>Kategori</li>
            <li>Alt kategori</li>
            <li>İl ve ilçe bilgisi</li>
            <li>Ürün fotoğrafları</li>
            <li>İlan numarası</li>
            <li>İlanın yayın ve durum bilgisi</li>
            <li>Görüntülenme sayısı</li>
            <li>Favoriye eklenme sayısı</li>
            <li>İlan oluşturma ve güncelleme tarihleri</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            İlanın bulunduğu şehir ve ilçe bilgisi kullanıcı tarafından manuel olarak seçilir. Takasla cihazınızın GPS konumunu takip etmez.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              3. Takas İşlem Bilgileri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takas sürecinin yürütülebilmesi amacıyla aşağıdaki işlem verileri saklanabilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Gönderilen ve alınan takas teklifleri</li>
            <li>Teklif edilen ürünler</li>
            <li>Hedef ürün</li>
            <li>Teklifi gönderen ve alan kullanıcılar</li>
            <li>Teklifin durumu</li>
            <li>Kabul, ret veya iptal bilgileri</li>
            <li>Tarafların takas tamamlandı onayları</li>
            <li>Tamamlanan takas kayıtları</li>
            <li>İşlem tarihleri</li>
            <li>TakasPara ile ilgili işlem kayıtları</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Bu bilgiler takas sürecinin yürütülmesi, işlem bütünlüğünün korunması, kötüye kullanımın önlenmesi ve gerektiğinde uyuşmazlıkların incelenebilmesi amacıyla kullanılabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              4. Mesajlaşma Bilgileri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla içerisindeki mesajlaşma özelliğini kullandığınızda:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Gönderilen mesaj metni</li>
            <li>Gönderici bilgisi</li>
            <li>Konuşma bilgisi</li>
            <li>Mesaj tarihi</li>
            <li>Okundu bilgisi</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            saklanır.<br />Takasla’nın mevcut mesajlaşma sisteminde fotoğraf veya dosya eki gönderilmemektedir.<br />“Yazıyor…” veya çevrim içi durumu gibi anlık bilgiler kalıcı olarak saklanmaz; yalnızca anlık iletişim sırasında kullanılabilir.<br />Mesajlar, hesabınız aktif olduğu sürece platform içerisindeki iletişimin sağlanması amacıyla saklanabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              5. Değerlendirme, Şikâyet ve Engelleme Bilgileri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Platform güvenliği ve topluluk düzeninin korunması için aşağıdaki bilgiler işlenebilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Kullanıcı değerlendirme puanları</li>
            <li>Değerlendirme yorumları</li>
            <li>Şikâyet nedeni ve açıklaması</li>
            <li>Şikâyet durumu</li>
            <li>Engellenen ve engelleyen kullanıcı ilişkileri</li>
            <li>İçerik veya kullanıcı raporları</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Bu bilgiler kötüye kullanım, dolandırıcılık, taciz veya topluluk kurallarına aykırı davranışların incelenmesi amacıyla kullanılabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              6. Bildirim ve Cihaz Bilgileri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Anlık bildirimlerin cihazınıza ulaştırılabilmesi amacıyla:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Firebase Cloud Messaging (FCM) bildirim tokenı</li>
            <li>Platform bilgisi (iOS veya Android)</li>
            <li>Bildirim tokenının güncellenme zamanı</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            saklanabilir.<br />Takasla aşağıdaki cihaz bilgilerini toplamaz:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>IMEI</li>
            <li>UDID</li>
            <li>Seri numarası</li>
            <li>MAC adresi</li>
            <li>Donanım kimliği</li>
            <li>Cihaz modeli</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            FCM tokenı oturum kapatma veya hesap silme işlemleri sırasında sistemden temizlenebilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              7. IP Adresi ve Teknik Loglar
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla mobil uygulaması IP adresinizi kullanıcı profilinizin bir parçası olarak ayrıca kaydetmez.<br />Ancak Takasla’nın kullandığı sunucu ve altyapı hizmetleri;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Güvenlik</li>
            <li>Yetkisiz erişimlerin tespiti</li>
            <li>Rate limiting</li>
            <li>DDoS koruması</li>
            <li>Sistem hatalarının incelenmesi</li>
            <li>Hizmet sürekliliğinin sağlanması</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            amaçlarıyla IP adresi, istek zamanı ve benzeri teknik erişim kayıtlarını altyapı seviyesinde geçici olarak işleyebilir.<br />Bu teknik kayıtlar kullanıcı profilinin bir parçası olarak saklanmaz.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              8. Kamera ve Fotoğraf Erişimi
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla’da profil fotoğrafı veya ilan görseli eklemek için kamera ve fotoğraf seçme özelliklerini kullanabilirsiniz.<br />Kamera yalnızca sizin bu özelliği kullanmanız halinde devreye girer ve gerekli izin işletim sistemi tarafından talep edilir.<br />iOS cihazlarda fotoğraf seçimi Apple’ın sistem fotoğraf seçicisi üzerinden gerçekleştirilebilir. Bu durumda Takasla tüm fotoğraf arşivinize erişmek yerine yalnızca sizin seçtiğiniz görsellere erişir.<br />Takasla mevcut durumda:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Mikrofon</li>
            <li>Rehber</li>
            <li>GPS tabanlı hassas konum</li>
            <li>Reklam takip izni</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            talep etmez.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              9. Google ile Giriş
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Google ile giriş seçeneğini kullandığınızda Google tarafından Takasla’ya aşağıdaki bilgiler sağlanabilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>E-posta adresi</li>
            <li>Ad ve soyad</li>
            <li>Profil fotoğrafı</li>
            <li>Kimlik doğrulama için kullanılan geçici tokenlar</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kimlik doğrulama tokenları oturum açma işlemi sırasında kullanılır ve Takasla’nın normal kullanıcı profil tablolarında kalıcı olarak saklanmaz.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              10. Apple ile Giriş
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Sign in with Apple seçeneğini kullandığınızda Apple tarafından aşağıdaki bilgiler sağlanabilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>E-posta adresi</li>
            <li>Ad ve soyad</li>
            <li>Apple kullanıcı kimliği</li>
            <li>Kimlik doğrulama için kullanılan geçici token veya authorization code</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Apple’ın ad ve soyad bilgisini yalnızca ilk yetkilendirme sırasında sağlayabileceği durumlar olabilir.<br />Kimlik doğrulama tokenları kullanıcı profili içerisinde kalıcı olarak saklanmaz.<br />Apple ile oluşturulmuş bir Takasla hesabı kalıcı olarak silindiğinde, hesap silme işlemi sırasında kullanıcının Apple kimliği yeniden doğrulanabilir ve Takasla ile Apple hesabı arasındaki yetkilendirme bağlantısı sunucu tarafında iptal edilir. Apple, Sign in with Apple ile oluşturulan hesaplar silinirken ilgili kullanıcı tokenlarının revoke edilmesini istemektedir. 
          </p>

          <p className="mb-4">
            <a
              href="https://developer.apple.com/design/human-interface-guidelines/managing-accounts?changes=_8&utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A859] font-medium underline hover:text-[#00E676] transition-colors text-sm sm:text-base"
            >
              Apple Developer →
            </a>
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              11. TakasPara ve Uygulama İçi Satın Almalar
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla içerisinde kullanılan TakasPara, Apple App Store uygulama içi satın alma sistemi üzerinden edinilebilir.<br />Ödeme ve faturalandırma işlemleri Apple tarafından gerçekleştirilir.<br />Takasla aşağıdaki finansal bilgileri görmez veya saklamaz:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Kredi kartı numarası</li>
            <li>Banka kartı numarası</li>
            <li>Kart son kullanma tarihi</li>
            <li>CVC/CVV</li>
            <li>Banka hesabı bilgileri</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Satın alma işlemlerinin doğrulanması ve TakasPara bakiyesinin tanımlanabilmesi amacıyla aşağıdaki sınırlı işlem bilgileri saklanabilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>İşlem kimliği</li>
            <li>Satın alınan ürün/paket kimliği</li>
            <li>Yüklenen TakasPara miktarı</li>
            <li>İşlem zamanı</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Satın alma işlemlerinin doğrulanmasında Apple ve RevenueCat altyapıları kullanılmaktadır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              12. Bildirimler
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla aşağıdaki durumlarda bildirim gönderebilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Yeni takas teklifi</li>
            <li>Teklif kabul veya ret bilgisi</li>
            <li>Yeni mesaj</li>
            <li>Takas süreci güncellemeleri</li>
            <li>Takasın tamamlanması</li>
            <li>Değerlendirmeler</li>
            <li>Sistem veya moderasyon duyuruları</li>
            <li>Millî ve dinî bayramlar ile özel günlere ilişkin kutlama mesajları</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla mevcut durumda reklam veya kişiselleştirilmiş pazarlama ağı bildirimleri göndermemektedir.<br />Kullanıcılar uygulamadaki Ayarlar &gt; Bildirimler bölümünden bildirim tercihlerini yönetebilir.<br />Cihaz düzeyindeki bildirim izni ayrıca iOS veya Android sistem ayarlarından kapatılabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              13. Analitik ve Reklam Teknolojileri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla’nın mevcut sürümünde:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Google Analytics</li>
            <li>Firebase Analytics</li>
            <li>Firebase Crashlytics</li>
            <li>Sentry</li>
            <li>Mixpanel</li>
            <li>Amplitude</li>
            <li>Meta/Facebook SDK</li>
            <li>AdMob</li>
            <li>OneSignal</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            gibi reklam, kullanıcı davranışı analizi veya üçüncü taraf takip SDK’ları kullanılmamaktadır.<br />İleride bu yapı değişirse Gizlilik Politikası buna uygun şekilde güncellenecektir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              14. Kişisel Verilerin Kullanım Amaçları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Toplanan bilgiler başlıca aşağıdaki amaçlarla kullanılabilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Kullanıcı hesabının oluşturulması</li>
            <li>Kullanıcının kimliğinin doğrulanması</li>
            <li>Profil bilgilerinin yönetilmesi</li>
            <li>İlan oluşturulması ve yayınlanması</li>
            <li>Takas tekliflerinin gönderilmesi</li>
            <li>Takas sürecinin yönetilmesi</li>
            <li>Kullanıcılar arasında mesajlaşmanın sağlanması</li>
            <li>TakasPara işlemlerinin yürütülmesi</li>
            <li>Uygulama içi satın almaların doğrulanması</li>
            <li>Bildirimlerin gönderilmesi</li>
            <li>Kullanıcı değerlendirmelerinin tutulması</li>
            <li>Şikâyet ve engelleme mekanizmalarının işletilmesi</li>
            <li>Dolandırıcılık ve kötüye kullanımın önlenmesi</li>
            <li>Sistem ve hesap güvenliğinin sağlanması</li>
            <li>Teknik sorunların incelenmesi</li>
            <li>Hizmetin çalışmasının ve sürekliliğinin sağlanması</li>
            <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
          </ul>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              15. Üçüncü Taraf Hizmet Sağlayıcıları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla hizmetinin sunulabilmesi için aşağıdaki üçüncü taraf hizmetlerden yararlanılmaktadır:
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            Veritabanı ve Sunucu Altyapısı
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kimlik doğrulama, veritabanı, API, gerçek zamanlı iletişim ve sunucu servisleri altyapısı.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            Bulut Depolama Hizmetleri
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Profil ve ilan görsellerinin depolanması ve sunulması.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            Anlık Bildirim Servisleri
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Push bildirimlerinin cihazlara iletilmesi.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            Google
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Google ile giriş işlemleri.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            Apple
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Sign in with Apple ve App Store uygulama içi satın alma işlemleri.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            Uygulama İçi Satın Alma Altyapısı
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Uygulama içi satın alma işlemlerinin doğrulanması ve altyapı yönetimi.
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Bu hizmet sağlayıcılarıyla yalnızca ilgili hizmetin çalışması için gerekli bilgiler paylaşılabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              16. Verilerin Yurt Dışında İşlenmesi
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla’nın kullandığı bazı teknoloji ve altyapı hizmet sağlayıcılarının sunucuları veya hizmet altyapıları Türkiye dışında bulunabilir.<br />Bu nedenle bazı kişisel veriler hizmetin sunulması sırasında yurt dışında işlenebilir veya barındırılabilir.<br />Yurt dışına veri aktarımının söz konusu olduğu durumlarda, 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili mevzuatta öngörülen şartlara ve uygun güvence mekanizmalarına göre hareket edilmesi esastır.<br />KVKK’nın güncel yaklaşımında yurt dışı veri aktarımı ayrıca değerlendirilmesi gereken bir yükümlülüktür; bu nedenle kullanılan servislerin fiilî veri lokasyonları ve aktarım mekanizmaları işletmeci tarafından ayrıca takip edilmelidir. 
          </p>

          <p className="mb-4">
            <a
              href="https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A859] font-medium underline hover:text-[#00E676] transition-colors text-sm sm:text-base"
            >
              KVKK →
            </a>
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              17. Hesap Silme ve Verilerin Saklanması
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla hesabınızı uygulama içerisinden kalıcı olarak silebilirsiniz.<br />Hesap silme işlemi sırasında aşağıdaki veriler fiziksel olarak silinebilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Kullanıcı profili</li>
            <li>Kimlik doğrulama hesabı</li>
            <li>FCM bildirim tokenları</li>
            <li>Bildirim kayıtları</li>
            <li>Favoriler</li>
            <li>Kullanıcının açtığı şikâyet kayıtları</li>
            <li>Mesajlar</li>
            <li>Konuşmalar</li>
            <li>Aktif veya tamamlanmamış ilanlar</li>
            <li>Bu ilanlara ait görseller</li>
            <li>Aktif veya tamamlanmamış takas teklifleri</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Bununla birlikte tamamlanmış işlemlere ilişkin bazı kayıtlar platform bütünlüğünün korunması, değerlendirme sisteminin bozulmaması, işlem geçmişinin korunması veya hukuki yükümlülüklerin yerine getirilmesi amacıyla kullanıcı kimliğiyle doğrudan bağlantısı kaldırılarak saklanabilir.<br />Bu kapsamda:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Tamamlanmış takas kayıtları</li>
            <li>Tamamlanmış takas teklifleri</li>
            <li>Tamamlanmış ilan kayıtları</li>
            <li>Takas değerlendirmeleri</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            kişisel profil bağlantısı kaldırılarak veya anonimleştirilerek saklanabilir.<br />Apple da hesap oluşturulan uygulamalarda kullanıcının uygulama içinden hesap silme işlemini başlatabilmesini ve gerekli olmayan ilişkili kişisel verilerin silinmesini beklemektedir. 
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
              18. Hesabınızı Nasıl Silebilirsiniz?
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Hesabınızı Takasla uygulamasında:<br />Ayarlar &gt; Hesabımı kalıcı olarak sil<br />bölümünden silebilirsiniz.<br />Hesap silme işlemi geri alınamaz.<br />Güvenlik amacıyla işlem öncesinde ek doğrulama istenebilir.<br />Apple ile oluşturulmuş hesaplarda, Apple hesabıyla olan bağlantının da kaldırılabilmesi amacıyla hesap silme sırasında yeniden Apple kimlik doğrulaması istenebilir. Bu doğrulama yeni bir hesap oluşturmaz ve kullanıcının Takasla hesabına yeniden giriş yapması amacıyla kullanılmaz.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              19. Veri Güvenliği
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla, kullanıcı bilgilerinin yetkisiz erişime, değiştirmeye, açıklanmaya veya kayba karşı korunması amacıyla uygun teknik ve idari güvenlik önlemleri uygular.<br />Bu kapsamda örneğin:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Kullanıcı bazlı yetkilendirme</li>
            <li>Veritabanı erişim politikaları</li>
            <li>Yetki kontrolleri</li>
            <li>Sunucu taraflı işlem doğrulamaları</li>
            <li>Şifreli ağ iletişimi</li>
            <li>Güvenli kimlik doğrulama yöntemleri</li>
            <li>Private key ve servis secret’larının istemci uygulamasından ayrı tutulması</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            gibi yöntemler kullanılmaktadır.<br />Bununla birlikte internet üzerinden gerçekleştirilen hiçbir veri aktarımı veya depolama yönteminin mutlak biçimde risksiz olduğu garanti edilemez.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              20. Kullanıcı Hakları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcılar kişisel verileriyle ilgili olarak yürürlükteki mevzuat kapsamında;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Kişisel verilerinin işlenip işlenmediğini öğrenme</li>
            <li>İşlenen veriler hakkında bilgi talep etme</li>
            <li>Verilerin hangi amaçlarla kullanıldığını öğrenme</li>
            <li>Verilerin aktarıldığı taraflar hakkında bilgi alma</li>
            <li>Eksik veya yanlış verilerin düzeltilmesini talep etme</li>
            <li>Şartları oluştuğunda verilerin silinmesini veya yok edilmesini talep etme</li>
            <li>İlgili mevzuatta tanınan diğer haklarını kullanma</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            hakkına sahip olabilir.<br />KVKK kapsamındaki haklar ve veri işleme hukuki sebepleri ayrıca KVKK Aydınlatma Metni içerisinde açıklanacaktır. KVKK, aydınlatma metninde veri sorumlusunun kimliği, amaçlar, aktarım, toplama yöntemi/hukuki sebep ve ilgili kişinin haklarının açıklanmasını istemektedir. 
          </p>

          <p className="mb-4">
            <a
              href="https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A859] font-medium underline hover:text-[#00E676] transition-colors text-sm sm:text-base"
            >
              KVKK →
            </a>
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              21. Gizlilik Politikasındaki Değişiklikler
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla hizmetlerinde, teknik altyapısında, kullanılan üçüncü taraf hizmetlerde veya yürürlükteki mevzuatta değişiklik olması halinde bu Gizlilik Politikası güncellenebilir.<br />Önemli değişiklikler olması halinde kullanıcılar uygulama içerisinden veya uygun diğer iletişim yöntemlerinden bilgilendirilebilir.<br />Politikanın güncel sürümü Takasla uygulaması ve takaslapp.com üzerinden erişilebilir olacaktır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              22. İletişim
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Bu Gizlilik Politikası veya kişisel verilerinizle ilgili sorularınız için bizimle iletişime geçebilirsiniz:
          </p>

          <div className="bg-[#FAF9F5] border border-gray-200/80 rounded-2xl p-5 my-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p className="font-medium text-gray-900 mb-1">İletişim Bilgileri:</p>
            <p>Recep Aydoğan<br />Esenler Mah., Horasan Sok., Görgülü Center No:4/4<br />Selçuklu / Konya</p>
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
