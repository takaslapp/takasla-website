import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalNav from "@/components/LegalNav";
import LegalHeader from "@/components/LegalHeader";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni - Takasla",
  description: "Takasla 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca aydınlatma metni.",
  alternates: {
    canonical: "/kvkk-aydinlatma-metni",
  },
  keywords: ["takasla kvkk","aydınlatma metni","kişisel verilerin korunması"],
};

export default function KvkkAydinlatmaMetniPage() {
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
                KVKK Aydınlatma Metni
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
        <LegalNav currentPage="kvkk-aydinlatma-metni" />

        {/* Content Details */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-4 text-gray-700 leading-relaxed mb-12">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında, Takasla mobil uygulaması ve takaslapp.com internet sitesi üzerinden gerçekleştirilen kişisel veri işleme faaliyetleri hakkında sizleri bilgilendirmek amacıyla işbu KVKK Aydınlatma Metni hazırlanmıştır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              1. Veri Sorumlusu
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            KVKK kapsamında kişisel verileriniz bakımından veri sorumlusu:
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
            KVKK uyarınca aydınlatma metninde veri sorumlusunun kimliği, kişisel verilerin işlenme amaçları, aktarılabileceği taraflar ve amaçları, veri toplama yöntemi ve hukuki sebebi ile ilgili kişinin haklarının açıklanması esastır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              2. İşlenen Kişisel Veri Kategorileri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla hizmetlerinden yararlanmanız kapsamında aşağıdaki veri kategorileri işlenebilir:
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            2.1. Kimlik ve İletişim Bilgileri
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Ad ve soyad</li>
            <li>Kullanıcı adı</li>
            <li>E-posta adresi</li>
            <li>Sosyal giriş (Apple / Google) sağlayıcı hesap tanımlayıcıları</li>
          </ul>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            2.2. Kullanıcı ve Profil Bilgileri
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Profil fotoğrafı</li>
            <li>Kullanıcı hesap kimliği</li>
            <li>Hesap oluşturma ve güncelleme tarihleri</li>
            <li>Kullanıcı değerlendirme puanı ve tamamlanan takas sayısı</li>
            <li>TakasPara bakiyesi ve ilk teklif hakkı durumu</li>
          </ul>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            2.3. İlan ve Kullanıcı İçeriği Bilgileri
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>İlan başlığı, açıklaması, kategorisi ve ürün kullanım durumu</li>
            <li>İlan fotoğrafları</li>
            <li>Takasta aranan ürün ve ürünün özellikleri</li>
            <li>İlan yayın, güncelleme, görüntülenme ve favori istatistikleri</li>
            <li>Favoriye eklenen ilanlar</li>
            <li>Kullanıcı değerlendirme puanları ve yorumları</li>
            <li>Şikayet, rapor ve engelleme kayıtları</li>
          </ul>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            2.4. Manuel Seçilen Konum Bilgileri
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcı tarafından formlar ve filtreler üzerinden manuel olarak seçilen il ve ilçe bilgileri işlenir. Takasla, cihazınızın hassas GPS konumunu toplamaz ve konum izni talep etmez.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            2.5. Takas ve Mesajlaşma Bilgileri
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Gönderilen ve alınan takas teklifleri, teklif durumları ve işlem onayları</li>
            <li>Kullanıcılar arası anlık mesaj metinleri, paylaşılan sohbet görselleri, gönderici/alıcı bilgisi ve mesaj zamanları</li>
          </ul>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            2.6. Müşteri İşlem ve Satın Alma Doğrulama Bilgileri
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>TakasPara kullanım ve işlem hareketleri</li>
            <li>Uygulama içi satın alma paket kimliği, işlem (transaction) kimliği ve satın alma zamanı</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla kredi kartı veya banka hesap bilgilerinizi görmez veya saklamaz.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            2.7. İşlem Güvenliği, Analitik ve Teknik Tanılama Verileri
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Push bildirim jetonları ve işletim sistemi bilgisi</li>
            <li>Uygulama kullanım ve etkileşim bilgileri, semantik ekran görüntüleme isimleri ve özellik etkileşimleri</li>
            <li>Arama özelliğinin kullanım sıklığı ve arama metninin karakter uzunluğu (arama metninin kendisi işlenmez)</li>
            <li>Hata ve çökme anındaki teknik teşhis verileri (stack trace, exception bilgileri)</li>
            <li>Cihaz modeli, işletim sistemi sürümü, uygulama sürümü ve kurulum tanımlayıcıları</li>
            <li>Sunucu ve güvenlik altyapısı seviyesinde işlenen teknik erişim kayıtları</li>
          </ul>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              3. Kişisel Verilerin İşlenme Amaçları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
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

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              4. Kişisel Verilerin Toplanma Yöntemi
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kişisel verileriniz, Takasla mobil uygulaması ve internet sitesi üzerinden tamamen veya kısmen otomatik yöntemlerle;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Kayıt ve profil düzenleme formları, e-posta doğrulama akışları</li>
            <li>İlan oluşturma ve görsel yükleme işlemleri</li>
            <li>Takas teklifleri ve takas tamamlama onayları</li>
            <li>Uygulama içi mesajlaşma ve görsel paylaşım ekranları</li>
            <li>Sosyal giriş (Apple / Google) yetkilendirme akışları</li>
            <li>Uygulama içi satın alma mağaza doğrulama sistemleri</li>
            <li>Uygulamanın kullanımı sırasında oluşan teknik etkileşim, hata ve erişim kayıtları</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            aracılığıyla elektronik ortamda toplanmaktadır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              5. Kişisel Verilerin İşlenmesinin Hukuki Sebepleri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kişisel verileriniz, KVKK’nın 5. maddesinde belirtilen aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            5.1. Sözleşmenin Kurulması veya İfası (KVKK m.5/2-c)
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kullanıcı hesabı oluşturulması, profil yönetimi, ilan yayınlama, takas teklifleri, mesajlaşma ve TakasPara işlemlerinin yürütülmesi.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            5.2. Hukuki Yükümlülüğün Yerine Getirilmesi (KVKK m.5/2-ç)
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Yürürlükteki mevzuattan kaynaklanan yasal yükümlülüklerin yerine getirilmesi ve yetkili mercilerin taleplerinin karşılanması.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            5.3. Bir Hakkın Tesisi, Kullanılması veya Korunması (KVKK m.5/2-e)
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Tamamlanmış işlem kayıtlarının, değerlendirmelerin, moderasyon ve uyuşmazlık kayıtlarının delil niteliğinde muhafaza edilmesi.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            5.4. Meşru Menfaat (KVKK m.5/2-f)
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Temel hak ve özgürlüklerinize zarar vermemek kaydıyla; platform güvenliğinin sağlanması, dolandırıcılığın önlenmesi, teknik hataların giderilmesi, uygulama kararlılığının ve kullanıcı deneyiminin geliştirilmesi.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              6. Kişisel Verilerin Aktarılabileceği Alıcı Grupları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kişisel verileriniz, yalnızca yukarıda belirtilen amaçların gerçekleştirilmesi için gerekli olduğu ölçüde aşağıdaki alıcı gruplarına aktarılabilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Bulut nesne depolama ve görsel barındırma hizmeti sağlayıcıları (Cloudflare R2)</li>
            <li>E-posta gönderim ve doğrulama altyapısı sağlayıcıları (Resend)</li>
            <li>Analitik ve uygulama kullanım ölçüm hizmeti sağlayıcıları (Google / Firebase Analytics)</li>
            <li>Hata ve çökme raporlama hizmeti sağlayıcıları (Google / Firebase Crashlytics)</li>
            <li>Push bildirim hizmeti sağlayıcıları (Google FCM, Apple Push Notification service)</li>
            <li>Uygulama içi satın alma doğrulama hizmeti sağlayıcıları</li>
            <li>Kullanıcının tercih ettiği kimlik doğrulama sağlayıcıları (Apple, Google)</li>
            <li>Yasal zorunluluk halinde yetkili kamu kurum ve kuruluşları</li>
          </ul>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              7. Kişisel Verilerin Yurt Dışına Aktarılması
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Uygulamanın sunulması kapsamında bazı kişisel veriler, kullanılan bulut depolama, analitik, hata raporlama, bildirim ve e-posta doğrulama hizmetlerinin teknik niteliğine bağlı olarak yurt dışında bulunan veya yurt dışından hizmet sunan hizmet sağlayıcılar tarafından işlenebilir.<br />Yurt dışına kişisel veri aktarımları, yürürlükteki 6698 sayılı Kanun’un 9. maddesinde öngörülen şartlar ve uygulanabilir aktarım mekanizmaları çerçevesinde gerçekleştirilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              8. Kişisel Verilerin Saklanması ve Silinmesi
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kişisel verileriniz, işlenme amacının gerektirdiği ve yasal düzenlemelerde öngörülen süreler boyunca saklanır.<br />Hesabınızı Ayarlar &gt; Hesabımı Kalıcı Olarak Sil bölümünden sildiğinizde; profiliniz, aktif/tamamlanmamış ilanlarınız, mesajlarınız, sohbet görselleri referanslarınız, bildirim jetonlarınız ve favorileriniz sistemden silinir.<br />Tamamlanmış takaslara ait ilanların kullanıcı tarafından oluşturulan serbest metin ve konum bilgileri nötr sistem değerleriyle temizlenerek kimlik bilgilerinden ayrıştırılır (&quot;Silinmiş İlan&quot;, &quot;Silinmiş Konum&quot;, &quot;Silinmiş Bilgi&quot; vb.) ve ilan fotoğrafları silinir. İlan kaydının kullanıcı kimliğiyle doğrudan bağlantısı kaldırılır.<br />Kullanıcının yazdığı değerlendirme yorum metinleri kaldırılır; tamamlanmış işlemlere ait sayısal değerlendirme puanları platform güvenliği ve puan ortalamasının korunması amacıyla kullanıcı kimliğinden ayrıştırılmış olarak tutulabilir.<br />Hesap silme sırasında silinen medya dosyalarının veritabanı referansları kaldırılır ve ilişkisiz kalan dosyalar otomatik depolama temizliği süreci kapsamında fiziksel olarak silinir.<br />Tamamlanmış işlemlere ve cüzdan/satın alma hareketlerine ilişkin sınırlı işlem kayıtları; hukuki uyuşmazlıkların çözümü, muhasebe/işlem bütünlüğü veya yasal yükümlülüklerin yerine getirilmesi amacıyla ilgili mevzuat ve işleme amacının gerektirdiği süre boyunca saklanabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              9. KVKK’nın 11. Maddesi Kapsamındaki Haklarınız
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            KVKK’nın 11. maddesi uyarınca veri sorumlusuna başvurarak;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
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

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            haklarına sahipsiniz.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              10. Başvuru ve İletişim Kanalları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Yukarıda belirtilen haklarınıza ilişkin taleplerinizi veri sorumlusuna iletebilirsiniz:
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
