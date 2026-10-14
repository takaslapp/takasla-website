import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalNav from "@/components/LegalNav";
import LegalHeader from "@/components/LegalHeader";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Takasla kullanıcılarının kişisel verilerinin korunması, işlenmesi ve gizlilik esasları.",
  alternates: {
    canonical: "/gizlilik-politikasi",
  },
  keywords: ["takasla gizlilik politikası","veri güvenliği","kullanıcı gizliliği"],
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
                Son Güncelleme: 10 Ekim 2026
              </p>
            </div>
            <img
              src="/images/takasla-3d.webp"
              alt="Takasla 3D"
              width={96}
              height={96}
              className="hidden md:block w-24 h-24 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex-shrink-0"
            />
          </div>
        </div>

        {/* Legal Navigation Bar */}
        <LegalNav currentPage="gizlilik-politikasi" />

        {/* Content Details */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-4 text-gray-700 leading-relaxed mb-12">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla olarak kullanıcılarımızın gizliliğine ve kişisel verilerinin korunmasına büyük önem veriyoruz. Bu Gizlilik Politikası, Takasla mobil uygulamasını ve takaslapp.com internet sitesini kullandığınızda hangi kişisel verilerin işlendiğini, bu verilerin hangi amaçlarla kullanıldığını, kimlerle paylaşılabileceğini, nasıl korunduğunu ve haklarınızı açıklamaktadır.
          </p>

          <div className="bg-[#FAF9F5] border border-gray-200/80 rounded-2xl p-5 my-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p className="font-medium text-gray-900 mb-1">Takasla – Recep Aydoğan</p>
            <p>Esenler Mah., Horasan Sok., Görgülü Center No:4/4<br />Selçuklu / Konya</p>
            <div className="mt-3 pt-3 border-t border-gray-200 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <p><strong>E-posta:</strong> <a href="mailto:takaslappcom@gmail.com" className="text-[#00A859] hover:underline font-medium">takaslappcom@gmail.com</a></p>
              <p><strong>İnternet Sitesi:</strong> <a href="https://takaslapp.com" className="text-[#00A859] hover:underline font-medium">takaslapp.com</a></p>
            </div>
          </div>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              1. Hesap ve Profil Verileri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla hesabı oluşturduğunuzda veya profilinizi güncellediğinizde aşağıdaki veriler işlenebilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Ad ve soyad</li>
            <li>Kullanıcı adı</li>
            <li>E-posta adresi</li>
            <li>İl ve ilçe seçimi</li>
            <li>Profil fotoğrafı</li>
            <li>Hesabınızı ve oturumunuzu yönetmek için gerekli teknik hesap tanımlayıcıları</li>
            <li>Oturum açma yöntemi (e-posta, Apple veya Google)</li>
            <li>Hesap oluşturma ve son güncelleme zamanları</li>
            <li>Ortalama kullanıcı değerlendirme puanı</li>
            <li>Tamamlanan takas sayısı</li>
            <li>TakasPara bakiyesi ve ilk teklif hakkı durumu</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Şifreniz Takasla tarafından düz metin olarak saklanmaz; kimlik doğrulama işlemleri güvenli kimlik doğrulama altyapısı üzerinden yürütülür.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              2. Konum Bilgileri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla cihazınızın hassas GPS konumunu toplamaz ve konum izni istemez.<br />İlanlarınızın ve profilinizin bulunduğu il ve ilçe bilgileri kullanıcı tarafından arayüz üzerinden manuel olarak seçilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              3. İlan ve Kullanıcı Tarafından Oluşturulan İçerik
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Platform üzerinde ilan yayınladığınızda veya içerik paylaştığınızda aşağıdaki veriler işlenir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>İlan başlığı ve detaylı ürün açıklaması</li>
            <li>Kategori ve ürünün kullanım durumu</li>
            <li>İlana eklenen ürün fotoğrafları</li>
            <li>Takasta aranan ürün (wanted_item) ve ürün özellikleri (specs)</li>
            <li>İlanın manuel seçilen il ve ilçe konumu</li>
            <li>İlanın oluşturulma, düzenlenme ve yayın durumları</li>
            <li>İlan görüntülenme ve favoriye eklenme sayıları</li>
            <li>Favoriye eklediğiniz ilanlar</li>
            <li>Takas sonrası verilen kullanıcı puanları ve değerlendirme yorumları</li>
            <li>Şikayet, rapor ve engelleme kayıtları</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Bu veriler; platform hizmetinin sunulması, ilanların diğer kullanıcılar tarafından keşfedilmesi, moderasyon, topluluk kurallarının uygulanması ve platform güvenliğinin sağlanması amacıyla işlenir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              4. Mesajlaşma ve İletişim
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Uygulama içi mesajlaşma özelliğini kullandığınızda aşağıdaki veriler işlenir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Kullanıcılar arasında gönderilen mesaj metinleri</li>
            <li>Sohbet kapsamında paylaşılan ürün ve detay fotoğrafları/görselleri</li>
            <li>Gönderici ve alıcı hesap bilgileri</li>
            <li>İlgili sohbet ve ilan bağlantısı</li>
            <li>Mesaj gönderim zamanı ve okundu durumu</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcılar takas süreçlerine ilişkin bilgi alışverişinde bulunmak amacıyla mesaj metinleri ve ürün detaylarına dair görseller iletebilir.<br />Mesaj veya teklif bildirimlerinin cihazınıza ulaştırılabilmesi amacıyla, push bildirim altyapısı sağlayıcıları (Firebase Cloud Messaging) ve Apple Push Notification service üzerinden bildirim başlığı, mesaj özeti ve teknik yönlendirme verileri iletilebilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              5. Takas ve TakasPara Süreçleri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takas teklifleri ve takas süreçlerinin yürütülmesi kapsamında aşağıdaki işlem verileri işlenir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Gönderilen ve alınan takas teklifleri</li>
            <li>Teklife konu edilen ürünler ve varsa nakit farkı bilgisi</li>
            <li>Teklifin güncel durumu (beklemede, kabul edildi, reddedildi, iptal edildi, tamamlandı)</li>
            <li>Teklif tarafları ve işlem zamanları</li>
            <li>TakasPara bakiyesi ve teklif işlem hareketleri</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Bu veriler takas süreçlerinin yönetilmesi, teklif güvence bakiyesinin takibi, işlem bütünlüğünün korunması ve uyuşmazlıkların incelenmesi amacıyla işlenir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              6. Uygulama İçi Satın Alma ve Ödeme Güvenliği
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            TakasPara paketlerinin satın alınması, Apple App Store uygulama içi satın alma sistemi (StoreKit) üzerinden gerçekleştirilir.<br />Satın alım işlemlerinin doğrulanması ve TakasPara bakiyesinin hesaba tanımlanabilmesi amacıyla aşağıdaki sınırlı işlem bilgileri işlenebilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Satın alınan paket kimliği</li>
            <li>İşlem (transaction) kimliği</li>
            <li>Satın alma tarihi ve işlem makbuzu doğrulama bilgileri</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla kredi kartı numarası, son kullanma tarihi, CVV veya banka hesap bilgilerinizi görmez veya saklamaz. Tüm ödeme ve faturalandırma işlemleri doğrudan Apple tarafından yürütülür.<br />Satın alma işlemlerinin teknik doğrulanmasında uygulama içi satın alma doğrulama hizmeti sağlayıcılarından yararlanılır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              7. Analitik ve Uygulama Kullanım Ölçümü
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla, kullanıcı deneyimini iyileştirmek, özelliklerin performansını ölçmek ve uygulama kararlılığını sağlamak amacıyla analitik ve uygulama kullanım ölçüm hizmetlerinden yararlanır.
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Bu kapsamda işlenebilecek veriler:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Görüntülenen uygulama ekranları (semantik ekran isimleri)</li>
            <li>Kategori görüntüleme ve filtreleme etkileşimleri</li>
            <li>İlan oluşturma, görüntüleme, paylaşma ve favori etkileşimleri</li>
            <li>Takas teklifi başlatma ve sonuçlandırma etkileşimleri</li>
            <li>Oturum açma ve kayıt yöntemi türü</li>
            <li>TakasPara paket seçimi</li>
            <li>Arama özelliğinin kullanımı ve arama metninin karakter uzunluğu (arama metninin kendisi gönderilmez)</li>
            <li>Cihaz modeli, işletim sistemi sürümü ve uygulama sürümü</li>
            <li>Kurulum ve cihaz seviyesinde teknik tanımlayıcılar (IDFV, kurulum tanımlayıcısı)</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla tarafından analitik sistemine; e-posta adresi, kullanıcı adı, kullanıcı hesap kimliği, mesaj içeriği, ilan veya teklif kimlikleri, gerçek arama metni, il, ilçe veya GPS koordinatı gönderilmez.<br />Uygulamada üçüncü taraf reklam ağları (AdMob, Meta Ads vb.) veya uygulamalar arası çapraz takip (IDFA / cross-app tracking) teknolojileri yer almamaktadır.
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Analitik hizmet sağlayıcıları, cihazın ağ bağlantısı gibi teknik bilgilerden ülke veya yaklaşık bölge düzeyinde konum bilgisi türetebilir. Takasla tarafından analitik sistemine kullanıcının manuel olarak seçtiği il/ilçe bilgisi veya hassas GPS koordinatı gönderilmez.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              8. Uygulama Hata ve Çökme Raporlama
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Uygulamanın kararlılığını sağlamak, çökmeleri önceden tespit etmek ve teknik hataları gidermek amacıyla hata ve çökme raporlama hizmetlerinden yararlanılır.
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Bir hata veya çökme meydana geldiğinde işlenebilecek veriler:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Çökme anındaki çağrı yığını (stack trace) ve hata detayları</li>
            <li>Cihaz modeli, işletim sistemi sürümü ve mimarisi</li>
            <li>Uygulama sürümü ve derleme numarası</li>
            <li>Çökme anındaki teknik uygulama durumu (ön plan/arka plan, bellek durumu)</li>
            <li>Kurulum veya oturum seviyesinde teknik tanımlayıcılar</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla’nın kendi kodu tarafından hata raporlama sistemine özel olarak e-posta adresi, kullanıcı hesabı kimliği, mesaj metni veya bildirim jetonu aktarılmaz.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              9. Kimlik Doğrulama, E-posta ve Sunucu Altyapısı
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla hizmetlerinin kesintisiz sunulabilmesi, verilerinizin güvenle saklanması, e-posta doğrulama iletilerinin gönderilmesi ve anlık iletişim özelliklerinin çalışması için kendi yönetimimizdeki güvenli sunucu ve veri tabanı altyapımız ile e-posta iletim altyapısı hizmet sağlayıcılarından yararlanılmaktadır.<br />Bu altyapı; kullanıcı profili, ilanlar, mesajlar, takaslar, favoriler, bildirimler ve işlem kayıtlarının güvenli sunucularda işlenmesini ve korunmasını sağlar.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              10. Görsel ve Dosya Depolama
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcıların yüklediği profil fotoğrafları, ilan görselleri ve sohbet görselleri, uygulamanın sunulması amacıyla bulut nesne depolama ve içerik barındırma hizmeti sağlayıcıları (Cloudflare R2) aracılığıyla saklanır ve sunulur.<br />Profil fotoğrafı değiştirildiğinde, ilan silindiğinde veya hesap silme işlemi gerçekleştirildiğinde ilgili medya referansları veritabanından kaldırılır ve artık referansı kalmayan (yetim) dosyalar otomatik saklama temizliği süreci kapsamında fiziksel depolamadan silinir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              11. Sosyal Giriş Yöntemleri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Apple ile Giriş veya Google ile Giriş seçeneklerini kullandığınızda, ilgili sağlayıcı tarafından kimlik doğrulama amacıyla aşağıdaki bilgiler sağlanabilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Apple veya Google kullanıcı hesap tanımlayıcısı</li>
            <li>E-posta adresi (Apple için gizli relay e-posta dahil)</li>
            <li>İlk yetkilendirmede sağlanan ad ve soyad bilgisi</li>
            <li>Profil fotoğrafı bağlantısı (Google)</li>
            <li>Kimlik doğrulama için kullanılan geçici yetkilendirme kodları ve tokenlar</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Bu bilgiler yalnızca güvenli giriş ve oturum açma amacıyla kullanılır; geçici tokenlar profilde kalıcı olarak saklanmaz.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              12. Kişisel Verilerin Paylaşıldığı Alıcı Grupları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kişisel verileriniz, yalnızca hizmetin sunulması, güvenliğin sağlanması ve yasal yükümlülüklerin yerine getirilmesi için gerekli olduğu ölçüde aşağıdaki alıcı gruplarıyla paylaşılabilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Bulut nesne depolama ve içerik barındırma hizmeti sağlayıcıları (Cloudflare R2)</li>
            <li>E-posta gönderim ve doğrulama altyapısı sağlayıcıları (Resend)</li>
            <li>Analitik ve kullanım ölçüm hizmeti sağlayıcıları (Google / Firebase Analytics)</li>
            <li>Hata ve çökme raporlama hizmeti sağlayıcıları (Google / Firebase Crashlytics)</li>
            <li>Push bildirim altyapısı sağlayıcıları (Google FCM, Apple Push Notification service)</li>
            <li>Uygulama içi satın alma doğrulama hizmeti sağlayıcıları</li>
            <li>Kullanıcının tercih ettiği kimlik doğrulama hizmeti sağlayıcıları (Apple, Google)</li>
            <li>Hukuki zorunluluk halinde yetkili kamu kurum ve kuruluşları</li>
          </ul>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              13. Verilerin Yurt Dışında İşlenmesi
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Uygulamanın sunulması kapsamında bazı kişisel veriler, kullanılan bulut depolama, analitik, hata raporlama, bildirim ve e-posta doğrulama hizmetlerinin teknik niteliğine bağlı olarak yurt dışında bulunan veya yurt dışından hizmet sunan hizmet sağlayıcılar tarafından işlenebilir.<br />Yurt dışına kişisel veri aktarımları, yürürlükteki 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun 9. maddesinde öngörülen şartlar ve uygulanabilir aktarım mekanizmaları çerçevesinde gerçekleştirilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              14. Hesap Silme ve Veri Saklama Esasları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla hesabınızı istediğiniz zaman uygulama içerisindeki Ayarlar &gt; Hesabımı Kalıcı Olarak Sil bölümünden silebilirsiniz.<br />Hesap silme işlemi tamamlandığında aşağıdaki aktif veriler sistemden silinir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Kullanıcı hesabı ve profil bilgileri</li>
            <li>Cihaz push bildirim kayıtları ve bildirimler</li>
            <li>Aktif ve tamamlanmamış ilanlar ile bunlara ait fotoğraflar</li>
            <li>Aktif mesajlar, sohbet kayıtları ve sohbet görselleri referansları</li>
            <li>Favori kayıtları</li>
            <li>Kullanıcının oluşturduğu şikayet ve rapor kayıtları</li>
            <li>Tamamlanmamış veya bekleyen takas teklifleri</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Tamamlanmış takaslara ilişkin işlem geçmişinin ve platform kayıtlarının bütünlüğü korunur; ancak silinen kullanıcıya ait tamamlanmış ilanların başlık, açıklama, aranan ürün, özellik ve konum gibi serbest metin ve kişisel içerikleri nötr sistem değerleriyle temizlenerek kimlik bilgilerinden ayrıştırılır (&quot;Silinmiş İlan&quot;, &quot;Silinmiş Konum&quot;, &quot;Silinmiş Bilgi&quot; vb.) ve ilan fotoğrafları silinir. İlan kaydının kullanıcı kimliğiyle doğrudan bağlantısı kaldırılır.<br />Kullanıcının başka kullanıcılar için yazdığı değerlendirme yorum metinleri kaldırılır; tamamlanmış işlemlere ait sayısal değerlendirme puanları platform güvenliği ve puan ortalamasının korunması amacıyla kullanıcı kimliğinden ayrıştırılmış olarak tutulabilir.<br />Hesap silme sırasında silinen görsellerin veritabanı referansları kaldırılır ve ilişkisiz kalan dosyalar otomatik depolama temizliği kapsamında fiziksel olarak silinir.<br />Tamamlanmış işlemlere ve cüzdan/satın alma hareketlerine ilişkin sınırlı işlem kayıtları; hukuki uyuşmazlıkların çözümü, muhasebe/işlem bütünlüğü veya yasal yükümlülüklerin yerine getirilmesi amacıyla ilgili mevzuat ve işleme amacının gerektirdiği süre boyunca saklanabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              15. Veri Güvenliği
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla, kişisel verilerinizin güvenliğini sağlamak amacıyla uygun teknik ve idari güvenlik önlemlerini uygular. Bu kapsamda şifreli ağ iletişimi (HTTPS/TLS), kullanıcı bazlı yetkilendirme politikaları, güvenli veritabanı erişim kontrolleri ve sunucu taraflı işlem doğrulamaları uygulanmaktadır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              16. Kullanıcı Hakları ve İletişim
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kişisel verilerinizle ilgili bilgi alma, düzeltme, silme veya diğer yasal haklarınızı kullanmak için bizimle iletişime geçebilirsiniz:
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
