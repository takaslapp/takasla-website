import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalNav from "@/components/LegalNav";
import LegalHeader from "@/components/LegalHeader";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni - Takasla",
  description: "6698 sayılı KVKK kapsamında Takasla kişisel veri işleme, saklama ve haklarınıza ilişkin aydınlatma metni.",
  alternates: {
    canonical: "/kvkk-aydinlatma-metni",
  },
  keywords: ["takasla kvkk", "kişisel verilerin korunması", "kvkk aydınlatma"],
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
            <p className="font-medium text-gray-900 mb-1">İletişim Bilgileri:</p>
            <p>Recep Aydoğan<br />Esenler Mah., Horasan Sok., Görgülü Center No:4/4<br />Selçuklu / Konya</p>
            <div className="mt-3 pt-3 border-t border-gray-200 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <p><strong>E-posta:</strong> <a href="mailto:destek@takasla.com" className="text-[#00A859] hover:underline font-medium">destek@takasla.com</a> / <a href="mailto:takaslappcom@gmail.com" className="text-[#00A859] hover:underline font-medium">takaslappcom@gmail.com</a></p>
              <p><strong>Telefon:</strong> <span className="text-gray-900 font-medium">0505 063 85 43</span></p>
              <p><strong>Web:</strong> <a href="https://takaslapp.com" className="text-[#00A859] hover:underline font-medium">takaslapp.com</a></p>
            </div>
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            KVKK uyarınca aydınlatma metninde veri sorumlusunun kimliği, kişisel verilerin işlenme amaçları, aktarılabileceği taraflar ve amaçları, veri toplama yöntemi ve hukuki sebebi ile ilgili kişinin haklarının açıklanması gerekmektedir. 
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
              2. İşlenen Kişisel Veriler
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla hizmetlerinden yararlanmanız kapsamında aşağıdaki kişisel veriler işlenebilir.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            2.1. Kimlik ve Profil Bilgileri
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Ad</li>
            <li>Soyad</li>
            <li>Kullanıcı adı</li>
            <li>E-posta adresi</li>
            <li>İl</li>
            <li>İlçe</li>
            <li>Profil fotoğrafı</li>
            <li>Kullanıcı hesap kimliği</li>
            <li>Hesap oluşturma ve güncelleme tarihleri</li>
            <li>Hesap durumu</li>
            <li>Kullanıcı rolü</li>
            <li>Kullanıcı değerlendirme puanı</li>
            <li>Tamamlanan takas sayısı</li>
          </ul>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            2.2. İlan ve İçerik Bilgileri
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>İlan başlığı</li>
            <li>İlan açıklaması</li>
            <li>Kategori ve alt kategori</li>
            <li>İl ve ilçe bilgisi</li>
            <li>Ürün fotoğrafları</li>
            <li>İlan numarası</li>
            <li>İlan durumu</li>
            <li>İlan oluşturma ve güncelleme tarihleri</li>
            <li>Görüntülenme ve favori istatistikleri</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla cihazınızın GPS konumunu takip etmez. İl ve ilçe bilgileri kullanıcı tarafından manuel olarak seçilir.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            2.3. Takas ve İşlem Bilgileri
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Gönderilen ve alınan takas teklifleri</li>
            <li>Takasa konu olan ilanlar</li>
            <li>Teklif durumu</li>
            <li>Kabul, ret, iptal ve tamamlanma bilgileri</li>
            <li>Takas tamamlanma kayıtları</li>
            <li>Tarafların takas sürecine ilişkin onayları</li>
            <li>TakasPara bakiyesi</li>
            <li>TakasPara hareketleri</li>
            <li>Uygulama içi satın alma işlem kimliği</li>
            <li>Satın alınan paket veya ürün bilgisi</li>
            <li>İşlem zamanı</li>
          </ul>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            2.4. Mesajlaşma Bilgileri
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Mesaj içeriği</li>
            <li>Gönderen kullanıcı bilgisi</li>
            <li>Konuşma bilgisi</li>
            <li>Mesaj gönderim zamanı</li>
            <li>Mesajın okunma durumu</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Mevcut Takasla mesajlaşma sisteminde fotoğraf veya dosya eki gönderilmemektedir.<br />“Yazıyor…” ve benzeri anlık iletişim bilgileri kalıcı kullanıcı verisi olarak saklanmaz.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            2.5. Değerlendirme ve Platform Güvenliği Bilgileri
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Kullanıcı değerlendirme puanları</li>
            <li>Değerlendirme yorumları</li>
            <li>Şikâyet nedeni ve açıklaması</li>
            <li>Şikâyet durumu</li>
            <li>Kullanıcı engelleme kayıtları</li>
            <li>İçerik ve kullanıcı raporları</li>
            <li>Hesap kısıtlama veya yasaklama bilgileri</li>
          </ul>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            2.6. Teknik Bilgiler
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Bildirim tokenı</li>
            <li>İşletim sistemi platform bilgisi (iOS veya Android)</li>
            <li>Bildirim tokenı güncelleme zamanı</li>
            <li>Sınırlı sistemsel zaman kayıtları</li>
            <li>Sunucu ve güvenlik altyapısı seviyesinde işlenebilen IP adresi ve erişim kayıtları</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla mevcut hizmet yapısında;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>IMEI,</li>
            <li>UDID,</li>
            <li>cihaz seri numarası,</li>
            <li>MAC adresi,</li>
            <li>telefon rehberi,</li>
            <li>GPS tabanlı hassas konum</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            gibi verileri toplamamaktadır.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              3. Kişisel Verilerin İşlenme Amaçları
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kişisel verileriniz aşağıdaki amaçlarla işlenebilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Kullanıcı hesabının oluşturulması ve yönetilmesi</li>
            <li>Kullanıcı kimliğinin doğrulanması</li>
            <li>Profil bilgilerinin oluşturulması ve güncellenmesi</li>
            <li>İlanların oluşturulması, yayınlanması ve yönetilmesi</li>
            <li>Kullanıcıların ilanları keşfedebilmesinin sağlanması</li>
            <li>Takas tekliflerinin gönderilmesi, alınması ve sonuçlandırılması</li>
            <li>Takas sürecinin yürütülmesi</li>
            <li>Tamamlanan takas kayıtlarının oluşturulması</li>
            <li>Uygulama içi mesajlaşmanın sağlanması</li>
            <li>Kullanıcı değerlendirme sisteminin işletilmesi</li>
            <li>Şikâyet, engelleme ve moderasyon süreçlerinin yürütülmesi</li>
            <li>TakasPara sisteminin ve işlem kayıtlarının yönetilmesi</li>
            <li>Uygulama içi satın almaların doğrulanması</li>
            <li>Push bildirimlerinin gönderilmesi</li>
            <li>Sistem ve hesap güvenliğinin sağlanması</li>
            <li>Yetkisiz erişim ve kötüye kullanımın önlenmesi</li>
            <li>Dolandırıcılık girişimlerinin tespit edilmesi</li>
            <li>Teknik sorunların tespit edilmesi ve giderilmesi</li>
            <li>Hizmet sürekliliğinin sağlanması</li>
            <li>Kullanıcı taleplerinin ve şikâyetlerinin değerlendirilmesi</li>
            <li>Hakların tesisi, kullanılması veya korunması</li>
            <li>Yetkili kamu kurumlarından gelen hukuka uygun taleplerin yerine getirilmesi</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            İşleme amaçlarının belirli, açık ve meşru olması; genel ve muğlak ifadeler kullanılmaması KVKK aydınlatma yükümlülüğünün temel gereklerindendir. 
          </p>

          <p className="mb-4">
            <a
              href="https://www.kvkk.gov.tr/Icerik/6765/AYDINLATMA-YUKUMLULUGUNUN-YERINE-GETIRILMESI-HAKKINDA-KAMUOYU-DUYURUSU?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A859] font-medium underline hover:text-[#00E676] transition-colors text-sm sm:text-base"
            >
              KVKK →
            </a>
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              4. Kişisel Verilerin Toplanma Yöntemi
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kişisel verileriniz, tamamen veya kısmen otomatik yöntemlerle başlıca aşağıdaki yollar üzerinden elde edilebilir:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Takasla kayıt ekranına girdiğiniz bilgiler</li>
            <li>Profilinizi düzenlerken sağladığınız bilgiler</li>
            <li>İlan oluştururken girdiğiniz bilgiler ve yüklediğiniz görseller</li>
            <li>Takas teklifleri ve takas süreçlerinde gerçekleştirdiğiniz işlemler</li>
            <li>Uygulama içindeki mesajlaşmalar</li>
            <li>Kullanıcı değerlendirmeleri</li>
            <li>Şikâyet ve engelleme işlemleri</li>
            <li>Apple veya Google hesabıyla kimlik doğrulaması sırasında sağlanan bilgiler</li>
            <li>Uygulama içi satın alma sistemlerinden gelen işlem doğrulama bilgileri</li>
            <li>Bildirim hizmetinin çalışması sırasında oluşturulan teknik tokenlar</li>
            <li>Sunucu ve güvenlik altyapısında oluşan teknik erişim kayıtları</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla, kullanıcı konumunu cihaz GPS’i üzerinden otomatik olarak toplamaz.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              5. Kişisel Verilerin İşlenmesinin Hukuki Sebepleri
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kişisel verileriniz, işleme faaliyetinin niteliğine göre KVKK’nın 5. maddesinde belirtilen kişisel veri işleme şartlarından bir veya birkaçına dayanılarak işlenmektedir.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            5.1. Sözleşmenin Kurulması veya İfasıyla Doğrudan İlgili Olması
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            KVKK m.5/2-c kapsamında;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>kullanıcı hesabının oluşturulması,</li>
            <li>profilin yönetilmesi,</li>
            <li>ilanların yayınlanması,</li>
            <li>takas tekliflerinin yürütülmesi,</li>
            <li>mesajlaşma hizmetinin sunulması,</li>
            <li>TakasPara işlemlerinin gerçekleştirilmesi</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            gibi Takasla hizmetinin sunulması için gerekli veriler işlenebilir.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            5.2. Hukuki Yükümlülüğün Yerine Getirilmesi
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            KVKK m.5/2-ç kapsamında, veri sorumlusunun tabi olduğu yasal yükümlülüklerin yerine getirilmesi amacıyla gerekli kişisel veriler işlenebilir.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            5.3. Bir Hakkın Tesisi, Kullanılması veya Korunması
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            KVKK m.5/2-e kapsamında;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>tamamlanmış işlem kayıtları,</li>
            <li>uyuşmazlık kayıtları,</li>
            <li>şikâyet ve moderasyon kayıtları,</li>
            <li>değerlendirme kayıtları,</li>
            <li>güvenlik ve işlem bütünlüğüne ilişkin kayıtlar</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            hakların tesisi, kullanılması veya korunmasının gerekli olduğu ölçüde işlenebilir.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            5.4. Meşru Menfaat
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            KVKK m.5/2-f kapsamında, ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>platform güvenliğinin sağlanması,</li>
            <li>kötüye kullanımın engellenmesi,</li>
            <li>dolandırıcılığın önlenmesi,</li>
            <li>teknik sorunların tespit edilmesi,</li>
            <li>hizmet güvenliği ve sürekliliğinin sağlanması</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            amacıyla gerekli sınırlı veriler işlenebilir.<br />Açık rıza gerektiren ayrı bir veri işleme faaliyeti bulunması halinde açık rıza, Aydınlatma Metninden ayrı olarak alınır. Aydınlatma ile açık rızanın birbirinden ayrı süreçler olması gerektiği KVKK tarafından açıkça belirtilmektedir. 
          </p>

          <p className="mb-4">
            <a
              href="https://www.kvkk.gov.tr/Icerik/6765/AYDINLATMA-YUKUMLULUGUNUN-YERINE-GETIRILMESI-HAKKINDA-KAMUOYU-DUYURUSU?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A859] font-medium underline hover:text-[#00E676] transition-colors text-sm sm:text-base"
            >
              KVKK →
            </a>
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              6. Kişisel Verilerin Aktarılabileceği Taraflar
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kişisel verileriniz yalnızca hizmetin yürütülmesi için gerekli olduğu ölçüde ve ilgili mevzuata uygun olarak aşağıdaki alıcı gruplarına aktarılabilir.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            6.1. Teknoloji ve Altyapı Hizmeti Sağlayıcıları
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kişisel veriler;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>sunucu ve veritabanı altyapısının işletilmesi,</li>
            <li>görsellerin güvenli biçimde saklanması,</li>
            <li>kimlik doğrulama işlemlerinin gerçekleştirilmesi,</li>
            <li>push bildirimlerinin iletilmesi,</li>
            <li>uygulama içi satın alma işlemlerinin doğrulanması,</li>
            <li>teknik güvenliğin ve hizmet sürekliliğinin sağlanması</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            amaçlarıyla Takasla’ya teknik hizmet sağlayan altyapı ve teknoloji hizmet sağlayıcılarıyla gerekli olduğu ölçüde paylaşılabilir.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            6.2. İşlem ve Ödeme Altyapısı Sağlayıcıları
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Uygulama içi satın alma işlemlerinin gerçekleştirilmesi ve doğrulanması amacıyla sınırlı işlem bilgileri ilgili platform ve ödeme altyapısı sağlayıcılarına aktarılabilir.<br />Takasla kredi veya banka kartı numaranızı doğrudan almaz veya saklamaz.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-4 mb-2">
            6.3. Yetkili Kamu Kurum ve Kuruluşları
          </h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Yasal yükümlülük bulunması veya hukuka uygun yetkili makam talebi olması halinde ilgili kişisel veriler yetkili kamu kurum ve kuruluşlarıyla paylaşılabilir.<br />Kişisel veri aktarımı, aktarım amacı bakımından gerekli olan veriyle sınırlı tutulur.<br />KVKK açısından aktarım yapılması halinde alıcı gruplarının ve aktarım amaçlarının aydınlatma metninde belirtilmesi gerekmektedir. 
          </p>

          <p className="mb-4">
            <a
              href="https://www.kvkk.gov.tr/Icerik/6765/AYDINLATMA-YUKUMLULUGUNUN-YERINE-GETIRILMESI-HAKKINDA-KAMUOYU-DUYURUSU?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A859] font-medium underline hover:text-[#00E676] transition-colors text-sm sm:text-base"
            >
              KVKK →
            </a>
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              7. Kişisel Verilerin Yurt Dışına Aktarılması
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla tarafından kullanılan bazı teknoloji, kimlik doğrulama, bildirim, depolama ve uygulama içi satın alma hizmetlerinin altyapıları Türkiye dışında bulunabilir veya hizmet sağlayıcılar verileri yurt dışında işleyebilir.<br />Bu nedenle hizmetin sunulması kapsamında bazı kişisel verilerin yurt dışında işlenmesi veya aktarılması söz konusu olabilir.<br />Yurt dışına kişisel veri aktarımı söz konusu olduğunda KVKK’nın 9. maddesi ve ilgili ikincil mevzuatta belirlenen şartlar ile uygun güvence mekanizmalarına uygun hareket edilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              8. Kişisel Verilerin Saklanması ve Silinmesi
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Kişisel veriler, işlenme amaçlarının gerektirdiği süre ve ilgili mevzuat kapsamında gerekli olan süre boyunca saklanır.<br />Kullanıcı hesabının kalıcı olarak silinmesi halinde hesabın aktif şekilde kullanılmasına bağlı kişisel veriler uygun şekilde silinir.<br />Mevcut Takasla hesap silme sistemi kapsamında başlıca;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>kullanıcı profili,</li>
            <li>kimlik doğrulama hesabı,</li>
            <li>mesajlar ve konuşmalar,</li>
            <li>push bildirim tokenları,</li>
            <li>bildirim kayıtları,</li>
            <li>favori kayıtları,</li>
            <li>tamamlanmamış ilanlar ve bunlara ait görseller,</li>
            <li>tamamlanmamış takas işlemleri</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            sistemden silinebilir.<br />Tamamlanmış işlemlere ilişkin bazı kayıtlar ise;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>işlem bütünlüğünün korunması,</li>
            <li>değerlendirme sisteminin bütünlüğünün devam ettirilmesi,</li>
            <li>uyuşmazlıkların incelenebilmesi,</li>
            <li>hakların tesisi, kullanılması veya korunması,</li>
            <li>yasal yükümlülüklerin yerine getirilmesi</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            amaçlarıyla kullanıcı hesabıyla doğrudan bağlantısı kaldırılarak, kimlikten ayrıştırılarak veya gerekli olduğu ölçüde saklanabilir.<br />Kişisel verilerin işlenmesini gerektiren sebeplerin ortadan kalkması halinde veriler ilgili mevzuata uygun şekilde silinir, yok edilir veya anonim hale getirilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              9. Hesap Silme
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla kullanıcıları hesaplarını uygulama içerisinde:<br />Ayarlar &gt; Hesabımı kalıcı olarak sil<br />bölümünden silebilir.<br />Hesap silme işlemi geri alınamaz.<br />Güvenliğin sağlanması ve hesabın gerçekten hesap sahibinin talebiyle silindiğinin doğrulanması amacıyla ek kimlik doğrulaması talep edilebilir.<br />Sosyal giriş yöntemi kullanılarak oluşturulmuş hesaplarda, ilgili hesabın Takasla ile olan yetkilendirme bağlantısının kaldırılması için yeniden kimlik doğrulaması yapılabilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              10. KVKK Kapsamındaki Haklarınız
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            KVKK’nın 11. maddesi kapsamında kişisel verisi işlenen kişiler;
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
            <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
            <li>Kişisel verilerin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
            <li>Kişisel verilerin eksik veya yanlış işlenmesi halinde düzeltilmesini isteme,</li>
            <li>Kanunda belirtilen şartların oluşması halinde kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
            <li>Düzeltme, silme veya yok etme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
            <li>İşlenen verilerin münhasıran otomatik sistemler aracılığıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
            <li>Kişisel verilerin kanuna aykırı şekilde işlenmesi nedeniyle zarara uğranması halinde zararın giderilmesini talep etme</li>
          </ul>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            haklarına sahiptir.<br />KVKK m.11 kapsamındaki hakların kullanıcıya bildirilmesi, aydınlatma yükümlülüğünün zorunlu unsurlarındandır. 
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
              11. Haklarınızı Nasıl Kullanabilirsiniz?
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            KVKK kapsamındaki taleplerinizi veri sorumlusuna aşağıdaki iletişim bilgileri üzerinden iletebilirsiniz:
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
            Başvurunun niteliğine göre başvurunun gerçekten ilgili kişi tarafından yapıldığının doğrulanabilmesi amacıyla ek bilgi talep edilebilir.<br />Başvurular yürürlükteki mevzuatta belirtilen usul ve süreler çerçevesinde değerlendirilir.
          </p>

          <section className="pt-6 first:pt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              12. Aydınlatma Metninin Güncellenmesi
            </h2>
          </section>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Takasla’nın kişisel veri işleme faaliyetlerinde, teknik altyapısında veya yürürlükteki mevzuatta değişiklik yapılması halinde bu Aydınlatma Metni güncellenebilir.<br />Güncel Aydınlatma Metnine Takasla uygulaması veya takaslapp.com internet sitesi üzerinden erişilebilir.
          </p>

          <div className="bg-[#FAF9F5] border border-gray-200/80 rounded-2xl p-5 my-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p className="font-medium text-gray-900 mb-1">İletişim Bilgileri:</p>
            <p>Veri Sorumlusu<br />Recep Aydoğan</p>
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
