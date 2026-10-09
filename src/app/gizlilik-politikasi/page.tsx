import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalNav from "@/components/LegalNav";
import LegalHeader from "@/components/LegalHeader";

export const metadata: Metadata = {
  title: "Gizlilik Politikası - Takasla",
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
                Son Güncelleme: 9 Ekim 2026
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
            <li>,
              </li>
            <li>Kullanıcı adı</li>
            <li>,
              </li>
            <li>E-posta adresi</li>
            <li>,
              </li>
            <li>İl ve ilçe seçimi</li>
            <li>,
              </li>
            <li>Profil fotoğrafı</li>
            <li>,
              </li>
            <li>Hesabınızı ve oturumunuzu yönetmek için gerekli teknik hesap tanımlayıcıları</li>
            <li>,
              </li>
            <li>Oturum açma yöntemi (e-posta, Apple veya Google)</li>
            <li>,
              </li>
            <li>Hesap oluşturma ve son güncelleme zamanları</li>
            <li>,
              </li>
            <li>Ortalama kullanıcı değerlendirme puanı</li>
            <li>,
              </li>
            <li>Tamamlanan takas sayısı</li>
            <li>,
              </li>
            <li>TakasPara bakiyesi ve ilk teklif hakkı durumu</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>Şifreniz Takasla tarafından düz metin olarak saklanmaz; kimlik doğrulama işlemleri güvenli kimlik doğrulama altyapısı üzerinden yürütülür.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>2. Konum Bilgileri</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla cihazınızın hassas GPS konumunu toplamaz ve konum izni istemez.
İlanlarınızın ve profilinizin bulunduğu il ve ilçe bilgileri kullanıcı tarafından arayüz üzerinden manuel olarak seçilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>3. İlan ve Kullanıcı Tarafından Oluşturulan İçerik</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Platform üzerinde ilan yayınladığınızda veya içerik paylaştığınızda aşağıdaki veriler işlenir:</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>İlan başlığı ve detaylı ürün açıklaması</li>
            <li>,
              </li>
            <li>Kategori ve ürünün kullanım durumu</li>
            <li>,
              </li>
            <li>İlana eklenen ürün fotoğrafları</li>
            <li>,
              </li>
            <li>İlanın manuel seçilen il ve ilçe konumu</li>
            <li>,
              </li>
            <li>İlanın oluşturulma, düzenlenme ve yayın durumları</li>
            <li>,
              </li>
            <li>İlan görüntülenme ve favoriye eklenme sayıları</li>
            <li>,
              </li>
            <li>Favoriye eklediğiniz ilanlar</li>
            <li>,
              </li>
            <li>Takas sonrası verilen kullanıcı puanları ve değerlendirme yorumları</li>
            <li>,
              </li>
            <li>Şikayet, rapor ve engelleme kayıtları</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>Bu veriler; platform hizmetinin sunulması, ilanların diğer kullanıcılar tarafından keşfedilmesi, moderasyon, topluluk kurallarının uygulanması ve platform güvenliğinin sağlanması amacıyla işlenir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>4. Mesajlaşma ve İletişim</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Uygulama içi mesajlaşma özelliğini kullandığınızda aşağıdaki veriler işlenir:</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>Kullanıcılar arasında gönderilen mesaj metinleri</li>
            <li>,
              </li>
            <li>Gönderici ve alıcı hesap bilgileri</li>
            <li>,
              </li>
            <li>İlgili sohbet ve ilan bağlantısı</li>
            <li>,
              </li>
            <li>Mesaj gönderim zamanı ve okundu durumu</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>Mevcut mesajlaşma sisteminde dosya veya fotoğraf eki gönderilmemektedir.
Mesaj veya teklif bildirimlerinin cihazınıza ulaştırılabilmesi amacıyla, push bildirim altyapısı sağlayıcıları ve Apple Push Notification Service üzerinden bildirim başlığı, mesaj özeti ve teknik yönlendirme verileri iletilebilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>5. Takas ve TakasPara Süreçleri</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takas teklifleri ve takas süreçlerinin yürütülmesi kapsamında aşağıdaki işlem verileri işlenir:</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>Gönderilen ve alınan takas teklifleri</li>
            <li>,
              </li>
            <li>Teklife konu edilen ürünler ve varsa nakit farkı bilgisi</li>
            <li>,
              </li>
            <li>Teklifin güncel durumu (beklemede, kabul edildi, reddedildi, iptal edildi, tamamlandı)</li>
            <li>,
              </li>
            <li>Teklif tarafları ve işlem zamanları</li>
            <li>,
              </li>
            <li>TakasPara bakiyesi ve teklif işlem hareketleri</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>Bu veriler takas süreçlerinin yönetilmesi, teklif güvence bakiyesinin takibi, işlem bütünlüğünün korunması ve uyuşmazlıkların incelenmesi amacıyla işlenir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>6. Uygulama İçi Satın Alma ve Ödeme Güvenliği</li>
            <li>),
            _buildParagraph(
              </li>
            <li>TakasPara paketlerinin satın alınması, Apple App Store uygulama içi satın alma sistemi (StoreKit) üzerinden gerçekleştirilir.
Satın alım işlemlerinin doğrulanması ve TakasPara bakiyesinin hesaba tanımlanabilmesi amacıyla aşağıdaki sınırlı işlem bilgileri işlenebilir:</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>Satın alınan paket kimliği</li>
            <li>,
              </li>
            <li>İşlem (transaction) kimliği</li>
            <li>,
              </li>
            <li>Satın alma tarihi ve işlem makbuzu doğrulama bilgileri</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>Takasla kredi kartı numarası, son kullanma tarihi, CVV veya banka hesap bilgilerinizi görmez veya saklamaz. Tüm ödeme ve faturalandırma işlemleri doğrudan Apple tarafından yürütülür.
Satın alma işlemlerinin teknik doğrulanmasında uygulama içi satın alma doğrulama hizmeti sağlayıcılarından yararlanılır.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>7. Analitik ve Uygulama Kullanım Ölçümü</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla, kullanıcı deneyimini iyileştirmek, özelliklerin performansını ölçmek ve uygulama kararlılığını sağlamak amacıyla analitik ve uygulama kullanım ölçüm hizmetlerinden yararlanır.</li>
            <li>,
            ),
            _buildParagraph(</li>
            <li>Bu kapsamda işlenebilecek veriler:</li>
            <li>),
            _buildBulletList([
              </li>
            <li>Görüntülenen uygulama ekranları (semantik ekran isimleri)</li>
            <li>,
              </li>
            <li>Kategori görüntüleme ve filtreleme etkileşimleri</li>
            <li>,
              </li>
            <li>İlan oluşturma, görüntüleme, paylaşma ve favori etkileşimleri</li>
            <li>,
              </li>
            <li>Takas teklifi başlatma ve sonuçlandırma etkileşimleri</li>
            <li>,
              </li>
            <li>Oturum açma ve kayıt yöntemi türü</li>
            <li>,
              </li>
            <li>TakasPara paket seçimi</li>
            <li>,
              </li>
            <li>Arama özelliğinin kullanımı ve arama metninin karakter uzunluğu (arama metninin kendisi gönderilmez)</li>
            <li>,
              </li>
            <li>Cihaz modeli, işletim sistemi sürümü ve uygulama sürümü</li>
            <li>,
              </li>
            <li>Kurulum ve cihaz seviyesinde teknik tanımlayıcılar (IDFV, kurulum tanımlayıcısı)</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>Takasla tarafından analitik sistemine; e-posta adresi, kullanıcı adı, kullanıcı hesap kimliği, mesaj içeriği, ilan veya teklif kimlikleri, gerçek arama metni, il, ilçe veya GPS koordinatı gönderilmez.
Uygulamada üçüncü taraf reklam ağları (AdMob, Meta Ads vb.) veya uygulamalar arası çapraz takip (IDFA / cross-app tracking) teknolojileri yer almamaktadır.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>8. Uygulama Hata ve Çökme Raporlama</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Uygulamanın kararlılığını sağlamak, çökmeleri önceden tespit etmek ve teknik hataları gidermek amacıyla hata ve çökme raporlama hizmetlerinden yararlanılır.</li>
            <li>,
            ),
            _buildParagraph(</li>
            <li>Bir hata veya çökme meydana geldiğinde işlenebilecek veriler:</li>
            <li>),
            _buildBulletList([
              </li>
            <li>Çökme anındaki çağrı yığını (stack trace) ve hata detayları</li>
            <li>,
              </li>
            <li>Cihaz modeli, işletim sistemi sürümü ve mimarisi</li>
            <li>,
              </li>
            <li>Uygulama sürümü ve derleme numarası</li>
            <li>,
              </li>
            <li>Çökme anındaki teknik uygulama durumu (ön plan/arka plan, bellek durumu)</li>
            <li>,
              </li>
            <li>Kurulum veya oturum seviyesinde teknik tanımlayıcılar</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>Takasla’nın kendi kodu tarafından hata raporlama sistemine özel olarak e-posta adresi, kullanıcı hesabı kimliği, mesaj metni veya bildirim jetonu aktarılmaz.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>9. Kimlik Doğrulama ve Sunucu Altyapısı</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla hizmetlerinin kesintisiz sunulabilmesi, verilerinizin güvenle saklanması ve anlık iletişim özelliklerinin çalışması için kimlik doğrulama, veritabanı, gerçek zamanlı iletişim ve sunucu altyapısı hizmet sağlayıcılarından yararlanılmaktadır.
Bu altyapı; kullanıcı profili, ilanlar, mesajlar, takaslar, favoriler, bildirimler ve işlem kayıtlarının güvenli sunucularda işlenmesini ve korunmasını sağlar.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>10. Görsel ve Dosya Depolama</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Kullanıcıların yüklediği profil fotoğrafları ve ilan görselleri, uygulamanın sunulması amacıyla bulut depolama ve içerik barındırma hizmeti sağlayıcıları aracılığıyla saklanır ve sunulur.
Profil fotoğrafı değiştirildiğinde veya ilan silindiğinde ilgili görsel dosyaları depolama sisteminden temizlenebilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>11. Sosyal Giriş Yöntemleri</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Apple ile Giriş veya Google ile Giriş seçeneklerini kullandığınızda, ilgili sağlayıcı tarafından kimlik doğrulama amacıyla aşağıdaki bilgiler sağlanabilir:</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>Apple veya Google kullanıcı hesap tanımlayıcısı</li>
            <li>,
              </li>
            <li>E-posta adresi (Apple için gizli relay e-posta dahil)</li>
            <li>,
              </li>
            <li>İlk yetkilendirmede sağlanan ad ve soyad bilgisi</li>
            <li>,
              </li>
            <li>Profil fotoğrafı bağlantısı (Google)</li>
            <li>,
              </li>
            <li>Kimlik doğrulama için kullanılan geçici yetkilendirme kodları ve tokenlar</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>Bu bilgiler yalnızca güvenli giriş ve oturum açma amacıyla kullanılır; geçici tokenlar profilde kalıcı olarak saklanmaz.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>12. Kişisel Verilerin Paylaşıldığı Alıcı Grupları</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Kişisel verileriniz, yalnızca hizmetin sunulması, güvenliğin sağlanması ve yasal yükümlülüklerin yerine getirilmesi için gerekli olduğu ölçüde aşağıdaki alıcı gruplarıyla paylaşılabilir:</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>Kimlik doğrulama ve sunucu altyapısı hizmeti sağlayıcıları</li>
            <li>,
              </li>
            <li>Bulut depolama ve içerik barındırma hizmeti sağlayıcıları</li>
            <li>,
              </li>
            <li>Analitik ve kullanım ölçüm hizmeti sağlayıcıları</li>
            <li>,
              </li>
            <li>Hata ve çökme raporlama hizmeti sağlayıcıları</li>
            <li>,
              </li>
            <li>Push bildirim altyapısı sağlayıcıları ve Apple Push Notification Service</li>
            <li>,
              </li>
            <li>Uygulama içi satın alma doğrulama hizmeti sağlayıcıları</li>
            <li>,
              </li>
            <li>Kullanıcının tercih ettiği kimlik doğrulama hizmeti sağlayıcıları (Apple, Google)</li>
            <li>,
              </li>
            <li>Hukuki zorunluluk halinde yetkili kamu kurum ve kuruluşları</li>
            <li>,
            ]),

            _buildSectionTitle(</li>
            <li>13. Verilerin Yurt Dışında İşlenmesi</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Uygulamanın sunulması kapsamında bazı kişisel veriler, kullanılan kimlik doğrulama, bulut altyapısı, depolama, analitik, hata raporlama, bildirim ve uygulama içi satın alma hizmetlerinin niteliğine bağlı olarak yurt dışında bulunan veya yurt dışından hizmet sunan hizmet sağlayıcılar tarafından işlenebilir.
Yurt dışına kişisel veri aktarımları, yürürlükteki 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun 9. maddesinde öngörülen şartlar ve uygulanabilir aktarım mekanizmaları çerçevesinde gerçekleştirilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>14. Hesap Silme ve Veri Saklama Esasları</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla hesabınızı istediğiniz zaman uygulama içerisindeki Ayarlar &gt; Hesabımı Kalıcı Olarak Sil bölümünden silebilirsiniz.
Hesap silme işlemi tamamlandığında aşağıdaki aktif veriler sistemden silinir:</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>Kullanıcı hesabı ve profil bilgileri</li>
            <li>,
              </li>
            <li>Cihaz push bildirim kayıtları ve bildirimler</li>
            <li>,
              </li>
            <li>Aktif ve tamamlanmamış ilanlar ile bunlara ait fotoğraflar</li>
            <li>,
              </li>
            <li>Aktif mesajlar ve sohbet kayıtları</li>
            <li>,
              </li>
            <li>Favori kayıtları</li>
            <li>,
              </li>
            <li>Kullanıcının oluşturduğu şikayet ve rapor kayıtları</li>
            <li>,
              </li>
            <li>Tamamlanmamış veya bekleyen takas teklifleri</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>Hesap silme işlemi sırasında bazı tamamlanmış işlem, satın alma/cüzdan ve değerlendirme kayıtları otomatik olarak silinmeyebilir. Bu kayıtlar yalnızca ilgili işlemlerin ve platform kayıtlarının devamlılığının gerektirdiği ölçüde saklanabilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>15. Veri Güvenliği</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla, kişisel verilerinizin güvenliğini sağlamak amacıyla uygun teknik ve idari güvenlik önlemlerini uygular. Bu kapsamda şifreli ağ iletişimi (HTTPS/TLS), kullanıcı bazlı yetkilendirme politikaları, güvenli veritabanı erişim kontrolleri ve sunucu taraflı işlem doğrulamaları uygulanmaktadır.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>16. Kullanıcı Hakları ve İletişim</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Kişisel verilerinizle ilgili bilgi alma, düzeltme, silme veya diğer yasal haklarınızı kullanmak için bizimle iletişime geçebilirsiniz:</li>
            <li>,
            ),
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(16),
              margin: const EdgeInsets.only(top: 8, bottom: 24),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: const Color(0xFFE2E8F0)),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  SelectableText(
                    </li>
            <li>Recep Aydoğan
Esenler Mah., Horasan Sok., Görgülü Center No:4/4
Selçuklu / Konya</li>
            <li>,
                    style: GoogleFonts.inter(
                      fontSize: 13.5,
                      color: const Color(0xFF475569),
                      height: 1.5,
                    ),
                  ),
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      Text(
                        </li>
            <li>E-posta: </li>
            <li>,
                        style: GoogleFonts.inter(
                          fontSize: 13.5,
                          fontWeight: FontWeight.w600,
                          color: const Color(0xFF475569),
                        ),
                      ),
                      GestureDetector(
                        onTap: () =&gt; _launchUrl(</li>
            <li>mailto:takaslappcom@gmail.com</li>
            <li>),
                        child: Text(
                          </li>
            <li>takaslappcom@gmail.com</li>
            <li>,
                          style: GoogleFonts.inter(
                            fontSize: 13.5,
                            fontWeight: FontWeight.w600,
                            color: const Color(0xFF2563EB),
                            decoration: TextDecoration.underline,
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 4),
                  Row(
                    children: [
                      Text(
                        </li>
            <li>İnternet Sitesi: </li>
            <li>,
                        style: GoogleFonts.inter(
                          fontSize: 13.5,
                          fontWeight: FontWeight.w600,
                          color: const Color(0xFF475569),
                        ),
                      ),
                      GestureDetector(
                        onTap: () =&gt; _launchUrl(</li>
            <li>https://takaslapp.com</li>
            <li>),
                        child: Text(
                          </li>
            <li>takaslapp.com</li>
            <li>,
                          style: GoogleFonts.inter(
                            fontSize: 13.5,
                            fontWeight: FontWeight.w600,
                            color: const Color(0xFF2563EB),
                            decoration: TextDecoration.underline,
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(height: 40),
          </li>
          </ul>
        </div>
      </main>

      {/* Main Footer */}
      <Footer outerBg="bg-[#FAF9F5]" className="pt-12" />
    </div>
  );
}
