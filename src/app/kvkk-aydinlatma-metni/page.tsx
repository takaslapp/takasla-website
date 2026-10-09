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
            <li>Sosyal giriş (Apple / Google) sağlayıcı hesap tanımlayıcıları</li>
            <li>,
            ]),
            _buildSubSectionTitle(</li>
            <li>2.2. Kullanıcı ve Profil Bilgileri</li>
            <li>),
            _buildBulletList([
              </li>
            <li>Profil fotoğrafı</li>
            <li>,
              </li>
            <li>Kullanıcı hesap kimliği</li>
            <li>,
              </li>
            <li>Hesap oluşturma ve güncelleme tarihleri</li>
            <li>,
              </li>
            <li>Kullanıcı değerlendirme puanı ve tamamlanan takas sayısı</li>
            <li>,
              </li>
            <li>TakasPara bakiyesi ve ilk teklif hakkı durumu</li>
            <li>,
            ]),
            _buildSubSectionTitle(</li>
            <li>2.3. İlan ve Kullanıcı İçeriği Bilgileri</li>
            <li>),
            _buildBulletList([
              </li>
            <li>İlan başlığı, açıklaması, kategorisi ve ürün durumu</li>
            <li>,
              </li>
            <li>İlan fotoğrafları</li>
            <li>,
              </li>
            <li>İlan yayın, güncelleme, görüntülenme ve favori istatistikleri</li>
            <li>,
              </li>
            <li>Favoriye eklenen ilanlar</li>
            <li>,
              </li>
            <li>Kullanıcı değerlendirme puanları ve yorumları</li>
            <li>,
              </li>
            <li>Şikayet, rapor ve engelleme kayıtları</li>
            <li>,
            ]),
            _buildSubSectionTitle(</li>
            <li>2.4. Manuel Seçilen Konum Bilgileri</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Kullanıcı tarafından formlar ve filtreler üzerinden manuel olarak seçilen il ve ilçe bilgileri işlenir. Takasla, cihazınızın hassas GPS konumunu toplamaz ve konum izni talep etmez.</li>
            <li>,
            ),
            _buildSubSectionTitle(</li>
            <li>2.5. Takas ve Mesajlaşma Bilgileri</li>
            <li>),
            _buildBulletList([
              </li>
            <li>Gönderilen ve alınan takas teklifleri, teklif durumları ve işlem onayları</li>
            <li>,
              </li>
            <li>Kullanıcılar arası anlık mesaj metinleri, gönderici/alıcı bilgisi ve mesaj zamanları</li>
            <li>,
            ]),
            _buildSubSectionTitle(</li>
            <li>2.6. Müşteri İşlem ve Satın Alma Doğrulama Bilgileri</li>
            <li>),
            _buildBulletList([
              </li>
            <li>TakasPara kullanım ve işlem hareketleri</li>
            <li>,
              </li>
            <li>Uygulama içi satın alma paket kimliği, işlem (transaction) kimliği ve satın alma zamanı</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>Takasla kredi kartı veya banka hesap bilgilerinizi görmez veya saklamaz.</li>
            <li>,
            ),
            _buildSubSectionTitle(</li>
            <li>2.7. İşlem Güvenliği, Analitik ve Teknik Tanılama Verileri</li>
            <li>),
            _buildBulletList([
              </li>
            <li>Push bildirim jetonları ve işletim sistemi bilgisi</li>
            <li>,
              </li>
            <li>Semantik ekran görüntüleme isimleri ve uygulama içi özellik etkileşimleri</li>
            <li>,
              </li>
            <li>Arama özelliğinin kullanım sıklığı ve arama metninin karakter uzunluğu (arama metninin kendisi işlenmez)</li>
            <li>,
              </li>
            <li>Çökme anındaki teknik hata raporları (stack trace, exception bilgileri)</li>
            <li>,
              </li>
            <li>Cihaz modeli, işletim sistemi sürümü, uygulama sürümü ve kurulum tanımlayıcıları</li>
            <li>,
              </li>
            <li>Sunucu ve güvenlik altyapısı seviyesinde işlenen teknik erişim kayıtları</li>
            <li>,
            ]),

            _buildSectionTitle(</li>
            <li>3. Kişisel Verilerin İşlenme Amaçları</li>
            <li>),
            _buildParagraph(</li>
            <li>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</li>
            <li>),
            _buildBulletList([
              </li>
            <li>Kullanıcı hesabının oluşturulması, kimliğin doğrulanması ve oturumun yönetilmesi</li>
            <li>,
              </li>
            <li>Profil ve ilanların oluşturulması, yayınlanması ve yönetilmesi</li>
            <li>,
              </li>
            <li>Takas tekliflerinin gönderilmesi, alınması, yürütülmesi ve sonuçlandırılması</li>
            <li>,
              </li>
            <li>Uygulama içi mesajlaşmanın sağlanması ve bildirimlerin iletilmesi</li>
            <li>,
              </li>
            <li>TakasPara sistemi ve uygulama içi satın alma doğrulama süreçlerinin yürütülmesi</li>
            <li>,
              </li>
            <li>Kullanıcı değerlendirme, moderasyon, şikayet ve engelleme sistemlerinin işletilmesi</li>
            <li>,
              </li>
            <li>Platform ve hesap güvenliğinin sağlanması, dolandırıcılığın ve kötüye kullanımın önlenmesi</li>
            <li>,
              </li>
            <li>Teknik hataların, çökmelerin tespiti ve uygulamanın kararlılığının artırılması</li>
            <li>,
              </li>
            <li>Kullanıcı deneyiminin iyileştirilmesi ve uygulama performansının ölçülmesi</li>
            <li>,
              </li>
            <li>Hukuki hakların tesisi, kullanılması, korunması ve yasal yükümlülüklerin yerine getirilmesi</li>
            <li>,
            ]),

            _buildSectionTitle(</li>
            <li>4. Kişisel Verilerin Toplanma Yöntemi</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Kişisel verileriniz, Takasla mobil uygulaması ve internet sitesi üzerinden tamamen veya kısmen otomatik yöntemlerle;</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>Kayıt ve profil düzenleme formları</li>
            <li>,
              </li>
            <li>İlan oluşturma ve görsel yükleme işlemleri</li>
            <li>,
              </li>
            <li>Takas teklifleri ve takas tamamlama onayları</li>
            <li>,
              </li>
            <li>Uygulama içi mesajlaşma ekranları</li>
            <li>,
              </li>
            <li>Sosyal giriş (Apple / Google) yetkilendirme akışları</li>
            <li>,
              </li>
            <li>Uygulama içi satın alma mağaza doğrulama sistemleri</li>
            <li>,
              </li>
            <li>Uygulamanın kullanımı sırasında oluşan teknik etkileşim, hata ve erişim kayıtları</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>aracılığıyla elektronik ortamda toplanmaktadır.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>5. Kişisel Verilerin İşlenmesinin Hukuki Sebepleri</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Kişisel verileriniz, KVKK’nın 5. maddesinde belirtilen aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:</li>
            <li>,
            ),
            _buildSubSectionTitle(</li>
            <li>5.1. Sözleşmenin Kurulması veya İfası (KVKK m.5/2-c)</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Kullanıcı hesabı oluşturulması, profil yönetimi, ilan yayınlama, takas teklifleri, mesajlaşma ve TakasPara işlemlerinin yürütülmesi.</li>
            <li>,
            ),
            _buildSubSectionTitle(</li>
            <li>5.2. Hukuki Yükümlülüğün Yerine Getirilmesi (KVKK m.5/2-ç)</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Yürürlükteki mevzuattan kaynaklanan yasal yükümlülüklerin yerine getirilmesi ve yetkili mercilerin taleplerinin karşılanması.</li>
            <li>,
            ),
            _buildSubSectionTitle(</li>
            <li>5.3. Bir Hakkın Tesisi, Kullanılması veya Korunması (KVKK m.5/2-e)</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Tamamlanmış işlem kayıtlarının, değerlendirmelerin, moderasyon ve uyuşmazlık kayıtlarının delil niteliğinde muhafaza edilmesi.</li>
            <li>,
            ),
            _buildSubSectionTitle(</li>
            <li>5.4. Meşru Menfaat (KVKK m.5/2-f)</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Temel hak ve özgürlüklerinize zarar vermemek kaydıyla; platform güvenliğinin sağlanması, dolandırıcılığın önlenmesi, teknik hataların giderilmesi, uygulama kararlılığının ve kullanıcı deneyiminin geliştirilmesi.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>6. Kişisel Verilerin Aktarılabileceği Alıcı Grupları</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Kişisel verileriniz, yalnızca yukarıda belirtilen amaçların gerçekleştirilmesi için gerekli olduğu ölçüde aşağıdaki alıcı gruplarına aktarılabilir:</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>Kimlik doğrulama, veritabanı ve sunucu altyapısı hizmeti sağlayıcıları</li>
            <li>,
              </li>
            <li>Bulut depolama ve görsel barındırma hizmeti sağlayıcıları</li>
            <li>,
              </li>
            <li>Analitik ve uygulama kullanım ölçüm hizmeti sağlayıcıları</li>
            <li>,
              </li>
            <li>Hata ve çökme raporlama hizmeti sağlayıcıları</li>
            <li>,
              </li>
            <li>Push bildirim hizmeti sağlayıcıları ve Apple Push Notification Service</li>
            <li>,
              </li>
            <li>Uygulama içi satın alma doğrulama hizmeti sağlayıcıları</li>
            <li>,
              </li>
            <li>Kullanıcının tercih ettiği kimlik doğrulama sağlayıcıları (Apple, Google)</li>
            <li>,
              </li>
            <li>Yasal zorunluluk halinde yetkili kamu kurum ve kuruluşları</li>
            <li>,
            ]),

            _buildSectionTitle(</li>
            <li>7. Kişisel Verilerin Yurt Dışına Aktarılması</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Uygulamanın sunulması kapsamında bazı kişisel veriler, kullanılan kimlik doğrulama, bulut altyapısı, depolama, analitik, hata raporlama, bildirim ve uygulama içi satın alma hizmetlerinin niteliğine bağlı olarak yurt dışında bulunan veya yurt dışından hizmet sunan hizmet sağlayıcılar tarafından işlenebilir.
Yurt dışına kişisel veri aktarımları, yürürlükteki 6698 sayılı Kanun’un 9. maddesinde öngörülen şartlar ve uygulanabilir aktarım mekanizmaları çerçevesinde gerçekleştirilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>8. Kişisel Verilerin Saklanması ve Silinmesi</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Kişisel verileriniz, işlenme amacının gerektirdiği ve yasal düzenlemelerde öngörülen süreler boyunca saklanır.
Hesabınızı Ayarlar &gt; Hesabımı Kalıcı Olarak Sil bölümünden sildiğinizde; profiliniz, aktif/tamamlanmamış ilanlarınız, mesajlarınız, bildirim jetonlarınız ve favorileriniz sistemden silinir.
Hesap silme işlemi sırasında bazı tamamlanmış işlem, satın alma/cüzdan ve değerlendirme kayıtları otomatik olarak silinmeyebilir. Bu kayıtlar yalnızca ilgili işlemlerin ve platform kayıtlarının devamlılığının gerektirdiği ölçüde saklanabilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>9. KVKK’nın 11. Maddesi Kapsamındaki Haklarınız</li>
            <li>),
            _buildParagraph(</li>
            <li>KVKK’nın 11. maddesi uyarınca veri sorumlusuna başvurarak;</li>
            <li>),
            _buildBulletList([
              </li>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
            <li>,
              </li>
            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
            <li>,
              </li>
            <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>,
              </li>
            <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
            <li>,
              </li>
            <li>Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme,</li>
            <li>,
              </li>
            <li>KVKK m.7 çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
            <li>,
              </li>
            <li>Düzeltme, silme ve yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
            <li>,
              </li>
            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
            <li>,
              </li>
            <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>haklarına sahipsiniz.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>10. Başvuru ve İletişim Kanalları</li>
            <li>),
            _buildParagraph(</li>
            <li>Yukarıda belirtilen haklarınıza ilişkin taleplerinizi veri sorumlusuna iletebilirsiniz:</li>
            <li>),
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(16),
              margin: const EdgeInsets.only(top: 4, bottom: 12),
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
            <li>Veri Sorumlusu: Recep Aydoğan
Adres: Esenler Mah., Horasan Sok., Görgülü Center No:4/4, Selçuklu / Konya</li>
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
