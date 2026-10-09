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
              href=",
              "
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
            <li>,
              </li>
            <li>ilanlarına,</li>
            <li>,
              </li>
            <li>mesajlarına,</li>
            <li>,
              </li>
            <li>favorilerine,</li>
            <li>,
              </li>
            <li>bildirimlerine,</li>
            <li>,
              </li>
            <li>aktif takaslarına</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>yeniden erişilemeyebilir.
Takasla’yı tekrar kullanmak isteyen kullanıcıların yeni bir hesap oluşturması gerekebilir.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>3. Hesap Silindiğinde Kaldırılan Veriler</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Mevcut Takasla sistemi kapsamında hesap silme işlemiyle birlikte, hesaba bağlı aşağıdaki veriler sistemden kaldırılır veya artık kullanıcı hesabıyla ilişkilendirilemez hale getirilir:</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>Ad ve soyad</li>
            <li>,
              </li>
            <li>Kullanıcı adı</li>
            <li>,
              </li>
            <li>E-posta adresi</li>
            <li>,
              </li>
            <li>Profil fotoğrafı</li>
            <li>,
              </li>
            <li>İl ve ilçe bilgileri</li>
            <li>,
              </li>
            <li>Kullanıcı hesabı ve kimlik doğrulama kaydı</li>
            <li>,
              </li>
            <li>Bildirim tokenları</li>
            <li>,
              </li>
            <li>Uygulama içi bildirim kayıtları</li>
            <li>,
              </li>
            <li>Favori kayıtları</li>
            <li>,
              </li>
            <li>Mesajlar</li>
            <li>,
              </li>
            <li>Konuşmalar</li>
            <li>,
              </li>
            <li>Tamamlanmamış ilanlar</li>
            <li>,
              </li>
            <li>Tamamlanmamış ilanlara ait görseller</li>
            <li>,
              </li>
            <li>Aktif veya tamamlanmamış takas işlemleri</li>
            <li>,
            ]),
            _buildParagraph(</li>
            <li>Hesap silme sırasında aktif ve tamamlanmamış takasların sonlandırılması gerekebilir.</li>
            <li>),

            _buildSectionTitle(</li>
            <li>4. Profil ve İlan Görselleri</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Hesap silme kapsamında kullanıcıya ait profil görseli ve silinen ilanlara ait görseller, Takasla tarafından kullanılan dosya depolama sistemlerinden kaldırılabilir.
Kullanıcı profil fotoğrafını değiştirdiğinde, artık kullanılmayan eski profil görselleri de sistemden temizlenebilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>5. Tamamlanmış İlanlar</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Daha önce tamamlanmış bir takasın parçası olan ilan kayıtları işlem geçmişinin ve platform kayıtlarının korunması amacıyla saklanabilir.
Kullanıcının aktif hesabı silindikten sonra bu kayıtlar aktif bir kullanıcı profiline bağlı şekilde gösterilmez.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>6. Tamamlanmış Takaslar</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Tamamlanmış takaslara ilişkin işlem kayıtları; işlem bütünlüğünün korunması, takas geçmişinin devamlılığı, uyuşmazlıkların incelenebilmesi ve hakların korunması amacıyla saklanabilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>7. Değerlendirmeler</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Tamamlanan takaslardan sonra oluşturulan değerlendirmeler, platformdaki değerlendirme sisteminin bütünlüğünün korunması amacıyla hesap silindikten sonra da saklanabilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>8. Şikâyet ve Güvenlik Kayıtları</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Hesap sahibinin oluşturduğu belirli şikâyet ve rapor kayıtları hesap silme kapsamında kaldırılabilir.
Ancak güvenlik olayları, hukuki uyuşmazlıklar veya yürürlükteki mevzuat nedeniyle saklanması gereken sınırlı kayıtlar, gerekli olduğu süre boyunca muhafaza edilebilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>9. TakasPara ve İşlem Kayıtları</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Hesabın silinmesiyle birlikte kullanıcının aktif TakasPara kullanım hakkı ve hesapla ilişkili bakiye erişimi sona erer.
Uygulama içi satın almalara veya geçmiş işlemlere ilişkin bazı işlem kayıtları; işlemlerin teyidi, kötüye kullanım veya uyuşmazlıkların incelenmesi ve platform kayıtlarının devamlılığı amacıyla gerekli olduğu ölçüde saklanabilir.
TakasPara nakit para veya banka hesabındaki bakiye niteliğinde değildir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>10. Mesajlar ve Konuşmalar</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Mevcut Takasla sisteminde hesap silme işlemi sırasında kullanıcıya bağlı mesaj ve konuşma kayıtları kaldırılır.
Mesajlaşma verilerinin saklanması gereken ayrı bir hukuki yükümlülük veya yetkili makam talebi bulunması halinde uygulanabilir mevzuat hükümleri saklıdır.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>11. Sosyal Giriş Bağlantıları</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla hesabının Apple veya benzeri bir sosyal giriş yöntemiyle oluşturulması halinde hesap silme sürecinde ilgili bağlantının güvenli şekilde sonlandırılması için yeniden kimlik doğrulaması gerekebilir.
Bu işlem yeni bir kullanıcı hesabı oluşturmaz ve hesabın silinmesini iptal etmez; yalnızca silme talebinde bulunan kişinin hesap sahibi olduğunun doğrulanması ve mevcut yetkilendirme bağlantısının kaldırılması amacıyla gerçekleştirilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>12. Verilerin Saklanması ve Silinmesi</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Hesap silme işlemi sırasında bazı tamamlanmış işlem, satın alma/cüzdan ve değerlendirme kayıtları otomatik olarak silinmeyebilir. Bu kayıtlar yalnızca ilgili işlemlerin ve platform kayıtlarının devamlılığının gerektirdiği ölçüde saklanabilir.
Saklama gerekçesi tamamen ortadan kalkan veriler mevzuata uygun şekilde silinir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>13. Hesabı Silmeden Veri Silme Talebi</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Kullanıcılar, hesabını tamamen silmeden de KVKK kapsamındaki kişisel verilerine ilişkin taleplerini Takasla’ya iletebilir.
Bu kapsamda kullanıcı;</li>
            <li>,
            ),
            _buildBulletList([
              </li>
            <li>kişisel verilerinin işlenip işlenmediğini öğrenme,</li>
            <li>,
              </li>
            <li>kendisi hakkında işlenen verilere ilişkin bilgi talep etme,</li>
            <li>,
              </li>
            <li>yanlış veya eksik verilerin düzeltilmesini isteme,</li>
            <li>,
              </li>
            <li>şartları oluştuğunda verilerin silinmesini veya yok edilmesini talep etme</li>
            <li>,
            ]),
            _buildParagraph(
              </li>
            <li>haklarını kullanabilir.
Kişisel verilerin işlenmesini gerektiren sebepler ortadan kalkmışsa KVKK kapsamında verilerin silinmesi, yok edilmesi veya anonim hale getirilmesi gerekir. </li>
            <li>,
            ),
            _buildLink(
              </li>
            <li>KVKK</li>
            <li>,
              </li>
            <li>https://www.kvkk.gov.tr/Icerik/5441/KISISEL-VERILERIN-SILINMESI-YOK-EDILMESI-VEYA-ANONIM-HALE-GETIRILMESI-HAKKINDA-YONETMELIK?utm_source=chatgpt.com</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>14. Veri Silme Talebi Nasıl İletilir?</li>
            <li>),
            _buildParagraph(</li>
            <li>Hesap veya kişisel verilerinizle ilgili bir talebiniz bulunması halinde aşağıdaki iletişim bilgileri üzerinden Takasla’ya ulaşabilirsiniz:</li>
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
                  const SizedBox(height: 4),
                  Row(
                    children: [
                      Text(
                        </li>
            <li>Web: </li>
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
            _buildParagraph(
              </li>
            <li>Başvurunun gerçekten ilgili kullanıcı tarafından yapıldığının doğrulanması amacıyla ek bilgi veya kimlik doğrulaması talep edilebilir.
KVKK kapsamındaki bir silme veya yok etme talebinde, işleme şartlarının tamamı ortadan kalkmışsa başvurunun en geç otuz gün içerisinde sonuçlandırılması öngörülmektedir. </li>
            <li>,
            ),
            _buildLink(
              </li>
            <li>KVKK</li>
            <li>,
              </li>
            <li>https://www.kvkk.gov.tr/Icerik/5441/KISISEL-VERILERIN-SILINMESI-YOK-EDILMESI-VEYA-ANONIM-HALE-GETIRILMESI-HAKKINDA-YONETMELIK?utm_source=chatgpt.com</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>15. Yasal Saklama Yükümlülükleri</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Hesap silme talebi, yürürlükteki mevzuat nedeniyle saklanması zorunlu olan kayıtların her durumda derhal yok edilmesini gerektirmeyebilir.
Saklanması hukuken gerekli olan veriler yalnızca ilgili yükümlülüğün yerine getirilmesi amacıyla ve gerekli süre boyunca muhafaza edilir.
Saklama sebebi sona erdiğinde kişisel veriler mevzuata uygun şekilde silinir, yok edilir veya anonim hale getirilir.</li>
            <li>,
            ),

            _buildSectionTitle(</li>
            <li>16. Bilgilendirmenin Güncellenmesi</li>
            <li>),
            _buildParagraph(
              </li>
            <li>Takasla’nın hesap silme sistemi, kişisel veri işleme faaliyetleri veya yürürlükteki mevzuatta değişiklik yapılması halinde bu bilgilendirme metni güncellenebilir.
Güncel metne Takasla uygulaması veya takaslapp.com üzerinden erişilebilir.</li>
            <li>,
            ),
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(16),
              margin: const EdgeInsets.only(top: 12, bottom: 24),
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
            <li>Takasla – Recep Aydoğan</li>
            <li>,
                    style: GoogleFonts.inter(
                      fontSize: 13.5,
                      fontWeight: FontWeight.w700,
                      color: AppColors.deepNavy,
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
