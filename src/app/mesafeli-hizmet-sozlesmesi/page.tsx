import type { Metadata } from "next";
import InfoLayout, { type TocItem } from "@/components/info/InfoLayout";

export const metadata: Metadata = {
  title: "Mesafeli Hizmet Sözleşmesi",
  description:
    "Takasla mobil uygulaması ve platformu üzerinden sunulan ücretli dijital hizmetler ve TakasPara kullanımına ilişkin Mesafeli Hizmet Sözleşmesi.",
  alternates: {
    canonical: "/mesafeli-hizmet-sozlesmesi",
  },
  // Yasal metin: sitede erişilebilir kalır, ancak arama sonuçlarında listelenmez (ince içerik oranını düşürür)
  robots: { index: false, follow: true },
  keywords: ["mesafeli hizmet sözleşmesi", "takasla sözleşme", "dijital hizmet satın alma"],
};

const TOC: TocItem[] = [
  { id: "taraflar", label: "1. Taraflar" },
  { id: "sozlesmenin-konusu", label: "2. Sözleşmenin Konusu" },
  { id: "ucretli-hizmetler-ve-takaspara", label: "3. Ücretli Hizmetler ve TakasPara" },
  { id: "takas-islem-bedeli", label: "4. Takas İşlem Bedeli" },
  { id: "hizmetin-ifasi", label: "5. Hizmetin İfası" },
  { id: "fiyat-ve-odeme", label: "6. Fiyat ve Ödeme" },
  { id: "cayma-hakki", label: "7. Cayma Hakkı" },
  { id: "cayma-bildirimi", label: "8. Cayma Bildirimi" },
  { id: "iade-kosullari", label: "9. İade Koşulları" },
  { id: "takas-konusu-urunler", label: "10. Takas Konusu Ürünler" },
  { id: "kullanicinin-yukumlulukleri", label: "11. Kullanıcının Yükümlülükleri" },
  { id: "teknik-kesintiler", label: "12. Teknik Kesintiler" },
  { id: "sikayet-ve-basvurular", label: "13. Şikâyet ve Başvurular" },
  { id: "sozlesmenin-saklanmasi", label: "14. Sözleşmenin Saklanması" },
  { id: "yururluk", label: "15. Yürürlük" },
];

export default function MesafeliHizmetSozlesmesiPage() {
  return (
    <InfoLayout path="/mesafeli-hizmet-sozlesmesi" title="Mesafeli Hizmet Sözleşmesi" updated="29 Eylül 2026" toc={TOC}>
      <div className="doc">
        <section>
        <h2 id="taraflar">1. Taraflar</h2>
        <p>
          İşbu Mesafeli Hizmet Sözleşmesi (“Sözleşme”), Takasla mobil uygulaması ve takaslapp.com internet sitesi üzerinden sunulan ücretli dijital hizmetlerden yararlanan kullanıcı (“Kullanıcı” veya “Tüketici”) ile aşağıdaki hizmet sağlayıcı arasında elektronik ortamda kurulmaktadır.
        </p>

        <div className="doc-box">
          <p>
            <strong>Hizmet Sağlayıcı:</strong> Recep Aydoğan
          </p>
          <p>
            <strong>Adres:</strong> Esenler Mah., Horasan Sok., Görgülü Center No:4/4, Selçuklu / Konya
          </p>
          <p>
            <strong>E-posta:</strong>{" "}
            <a
              href="mailto:takaslappcom@gmail.com"
            >
              takaslappcom@gmail.com
            </a>
          </p>
          <p>
            <strong>İnternet Sitesi:</strong>{" "}
            <a
              href="https://takaslapp.com"
            >
              takaslapp.com
            </a>
          </p>
          <p>
            <strong>Hizmet / Uygulama Adı:</strong> Takasla
          </p>
        </div>
      </section>

      <section>
        <h2 id="sozlesmenin-konusu">2. Sözleşmenin Konusu</h2>
        <p>
          Bu Sözleşmenin konusu, Kullanıcının Takasla üzerinden satın aldığı dijital hizmetlerin ve uygulama içi kullanım haklarının sunulmasına ilişkin tarafların hak ve yükümlülüklerinin belirlenmesidir.
        </p>
        <p>
          Takasla; kullanıcıların ilan oluşturmasına, diğer kullanıcıların ilanlarını keşfetmesine, takas teklifi göndermesine, teklifleri değerlendirmesine ve uygulama içi mesajlaşma yoluyla iletişim kurmasına imkân sağlayan dijital bir platformdur.
        </p>
        <p>
          Takasla, kullanıcıların birbirleriyle takas ettikleri fiziksel ürünlerin satıcısı veya sahibi değildir. Kullanıcılar arasındaki takasın konusu olan ürünler doğrudan ilgili kullanıcıların sorumluluğundadır.
        </p>
      </section>

      <section>
        <h2 id="ucretli-hizmetler-ve-takaspara">3. Ücretli Hizmetler ve TakasPara</h2>
        <p>
          Takasla içerisinde belirli özelliklerin kullanımı için uygulama içi dijital bakiye niteliğinde TakasPara (TP) kullanılabilir.
        </p>
        <p>
          TakasPara;
        </p>
        <ul>
          <li>yalnızca Takasla uygulaması içerisindeki belirlenmiş hizmetlerde kullanılabilir,</li>
          <li>nakit para, elektronik para veya banka mevduatı niteliğinde değildir,</li>
          <li>uygulama dışında ödeme aracı olarak kullanılamaz,</li>
          <li>başka bir kullanıcıya nakit karşılığı devredilemez,</li>
          <li>kanunen zorunlu hâller dışında nakde çevrilemez.</li>
        </ul>
        <p>
          Kullanıcının satın alma işleminden önce ödeyeceği toplam bedel ve elde edeceği TakasPara miktarı ilgili satın alma ekranında gösterilir.
        </p>
      </section>

      <section>
        <h2 id="takas-islem-bedeli">4. Takas İşlem Bedeli</h2>
        <p>
          Takas tekliflerinde uygulanacak TakasPara bedeli, işlem gerçekleştirilmeden önce kullanıcıya uygulama içerisinde gösterilir.
        </p>
        <p>
          Mevcut sistemde, ücretli bir takas teklifinde teklif gönderen kullanıcıdan ilgili işlem için belirlenen TakasPara tahsil edilir. Teklif kabul edildiğinde karşı taraftan da uygulamada belirtilen TakasPara işlem bedeli alınabilir.
        </p>
        <p>
          Bekleyen bir teklif reddedilir, kullanıcı tarafından iptal edilir veya süresi içinde kabul edilmezse, ilgili işleme ilişkin iade kuralları uygulama içerisinde belirtilen güncel Takasla kurallarına göre uygulanır.
        </p>
        <p>
          Kabul edilmiş bir takasın daha sonra taraflardan biri tarafından iptal edilmesi hâlinde, işlem için daha önce kullanılmış TakasPara tutarları iade edilmez.
        </p>
      </section>

      <section>
        <h2 id="hizmetin-ifasi">5. Hizmetin İfası</h2>
        <p>
          Dijital hizmet veya TakasPara satın alımının başarıyla tamamlanmasının ardından ilgili kullanım hakkı, teknik olarak mümkün olan en kısa sürede kullanıcının Takasla hesabına tanımlanır.
        </p>
        <p>
          Uygulama mağazaları üzerinden gerçekleştirilen satın alma işlemlerinde ödeme işlemleri ilgili uygulama mağazasının ödeme altyapısı üzerinden yürütülebilir.
        </p>
        <p>
          Ödeme yöntemi, para birimi, vergiler ve satın alma işlemine ilişkin diğer bilgiler işlem öncesinde kullanıcıya gösterilir.
        </p>
      </section>

      <section>
        <h2 id="fiyat-ve-odeme">6. Fiyat ve Ödeme</h2>
        <p>
          Ücretli hizmetlerin fiyatları satın alma ekranında belirtilir.
        </p>
        <p>
          Kullanıcı, satın alma işlemini onaylamadan önce toplam ödeme tutarını görebilir. Satın alma işleminin onaylanması ödeme yükümlülüğü doğurur. Mesafeli sözleşmelerde tüketicinin sipariş onayından hemen önce bu konuda açık şekilde bilgilendirilmesi gerekir (
          <a
            href="https://tuketici.ticaret.gov.tr/data/5e81982d13b876a1b04c7a42/2023-6502%20Say%C4%B1l%C4%B1%20T%C3%BCketicinin%20Korunmas%C4%B1%20Hakk%C4%B1nda%20Kanun.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            6502 Sayılı Tüketicinin Korunması Hakkında Kanun
          </a>
          ).
        </p>
        <p>
          Uygulama mağazası tarafından uygulanabilecek döviz kuru, vergi, komisyon veya ödeme yöntemine bağlı diğer unsurlar ilgili mağazanın kendi koşullarına tabi olabilir.
        </p>
      </section>

      <section>
        <h2 id="cayma-hakki">7. Cayma Hakkı</h2>
        <p>
          Tüketiciler, kural olarak mesafeli hizmet sözleşmelerinde sözleşmenin kurulduğu tarihten itibaren 14 gün içinde, herhangi bir gerekçe göstermeden cayma hakkına sahiptir (
          <a
            href="https://tuketici.ticaret.gov.tr/data/5e81982d13b876a1b04c7a42/2023-6502%20Say%C4%B1l%C4%B1%20T%C3%BCketicinin%20Korunmas%C4%B1%20Hakk%C4%B1nda%20Kanun.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tüketicinin Korunması Hakkında Kanun
          </a>
          ).
        </p>
        <p>
          Ancak dijital hizmetin veya elektronik ortamda anında ifa edilen hizmetin, tüketicinin açık talebi ve gerekli onayları doğrultusunda cayma süresi sona ermeden kullanılmaya başlanması hâlinde cayma hakkının kapsamı yürürlükteki tüketici mevzuatına göre değişebilir.
        </p>
        <p>
          Kullanıcı, satın aldığı TakasPara veya dijital hizmeti kullanmadan önce cayma ve iade koşullarını ilgili satın alma ekranından incelemelidir.
        </p>
      </section>

      <section>
        <h2 id="cayma-bildirimi">8. Cayma Bildirimi</h2>
        <p>
          Cayma hakkının mevcut olduğu durumlarda Kullanıcı, cayma talebini açık bir beyanla aşağıdaki iletişim kanalına iletebilir:
        </p>
        <div className="doc-box">
          <p>
            <strong>E-posta:</strong>{" "}
            <a
              href="mailto:takaslappcom@gmail.com"
            >
              takaslappcom@gmail.com
            </a>
          </p>
        </div>
        <p>
          Cayma bildiriminin yazılı veya kalıcı veri saklayıcısı yoluyla yapılması mümkündür (
          <a
            href="https://tuketici.ticaret.gov.tr/data/5e819a8e13b876a1b04c7a4a/Mesafeli%20S%C3%B6zle%C5%9Fmeler%20Y%C3%B6netmeli%C4%9Fi.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mesafeli Sözleşmeler Yönetmeliği
          </a>
          ).
        </p>
        <p>
          Uygulama mağazası üzerinden gerçekleştirilen satın almalarda, iade süreci ilgili mağazanın iade sistemi üzerinden de yürütülebilir.
        </p>
      </section>

      <section>
        <h2 id="iade-kosullari">9. İade Koşulları</h2>
        <p>
          İade hakkının mevcut olduğu ve talebin kabul edildiği durumlarda geri ödeme, işlemin gerçekleştirildiği ödeme yöntemi ve ilgili uygulama mağazasının ödeme prosedürleri dikkate alınarak gerçekleştirilir.
        </p>
        <p>
          Aşağıdaki durumlarda, yürürlükteki mevzuattan doğan zorunlu haklar saklı kalmak üzere, kullanılmış dijital hakların veya gerçekleştirilmiş hizmetlerin iadesi mümkün olmayabilir:
        </p>
        <ul>
          <li>satın alınan TakasPara&apos;nın tamamen veya kısmen kullanılması,</li>
          <li>dijital hizmetin kullanıcı talebiyle derhal ifasına başlanması,</li>
          <li>takas işleminin kabul edilmesi nedeniyle hizmetin fiilen gerçekleştirilmiş olması,</li>
          <li>kullanıcının ilgili dijital hakkı tüketmiş olması.</li>
        </ul>
      </section>

      <section>
        <h2 id="takas-konusu-urunler">10. Takas Konusu Ürünler</h2>
        <p>
          Takasla, kullanıcılar tarafından yayımlanan ilanlardaki fiziksel ürünlerin sahibi, satıcısı veya alıcısı değildir.
        </p>
        <p>
          Ürünlerin;
        </p>
        <ul>
          <li>doğruluğu,</li>
          <li>gerçekliği,</li>
          <li>ayıplı olup olmadığı,</li>
          <li>teslimi,</li>
          <li>fiziki durumu,</li>
          <li>kullanıcılar arasındaki fiili değişimi</li>
        </ul>
        <p>
          ilgili kullanıcıların sorumluluğundadır.
        </p>
        <p>
          Takasla’nın sorumluluğu, yürürlükteki mevzuattan doğan zorunlu sorumluluklar saklı kalmak üzere, dijital platform hizmetinin sunulmasıyla sınırlıdır.
        </p>
      </section>

      <section>
        <h2 id="kullanicinin-yukumlulukleri">11. Kullanıcının Yükümlülükleri</h2>
        <p>
          Kullanıcı;
        </p>
        <ul>
          <li>hesap bilgilerini doğru şekilde vermeyi,</li>
          <li>hukuka aykırı ilan yayımlamamayı,</li>
          <li>sahte veya yanıltıcı ürün bilgisi paylaşmamayı,</li>
          <li>başka kişilerin haklarını ihlal etmemeyi,</li>
          <li>ödeme ve uygulama sistemlerini kötüye kullanmamayı,</li>
          <li>Takasla Kullanım Koşulları ve Topluluk Kuralları&apos;na uymayı</li>
        </ul>
        <p>
          kabul eder.
        </p>
      </section>

      <section>
        <h2 id="teknik-kesintiler">12. Teknik Kesintiler</h2>
        <p>
          Bakım, teknik arıza, internet bağlantısı, uygulama mağazaları, ödeme altyapıları veya Takasla&apos;nın makul kontrolü dışındaki üçüncü taraf hizmetlerden kaynaklanan geçici kesintiler meydana gelebilir.
        </p>
        <p>
          Takasla, bu tür durumların giderilmesi için makul ölçüde gerekli teknik çalışmaları yürütür.
        </p>
      </section>

      <section>
        <h2 id="sikayet-ve-basvurular">13. Şikâyet ve Başvurular</h2>
        <p>
          Kullanıcılar satın alma, hizmet veya sözleşmeye ilişkin taleplerini aşağıdaki iletişim kanalından iletebilir:
        </p>
        <div className="doc-box">
          <p>
            <strong>E-posta:</strong>{" "}
            <a
              href="mailto:takaslappcom@gmail.com"
            >
              takaslappcom@gmail.com
            </a>
          </p>
        </div>
        <p>
          Tüketiciler ayrıca, ilgili parasal sınırlar ve görev kuralları çerçevesinde Tüketici Hakem Heyetleri veya Tüketici Mahkemelerine başvurabilir.
        </p>
      </section>

      <section>
        <h2 id="sozlesmenin-saklanmasi">14. Sözleşmenin Saklanması</h2>
        <p>
          Bu Sözleşmenin güncel sürümü takaslapp.com üzerinden kullanıcıların erişimine sunulur.
        </p>
        <p>
          Satın alma işlemi sırasında kullanıcıya sunulan bilgiler ve işlem kayıtları ilgili yasal yükümlülükler kapsamında saklanabilir. Elektronik ticarette işlem ve bilgilendirme kayıtlarının tutulmasına ilişkin yükümlülükler de bulunmaktadır (
          <a
            href="https://ticaret.gov.tr/ic-ticaret/elektronik-ticaret/mevzuat"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elektronik Ticaret Mevzuatı
          </a>
          ).
        </p>
      </section>

      <section>
        <h2 id="yururluk">15. Yürürlük</h2>
        <p>
          Kullanıcının ücretli hizmet veya dijital içerik satın alma işlemini elektronik ortamda onaylamasıyla işbu Sözleşme yürürlüğe girer.
        </p>
        <p>
          Kullanıcının 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve ilgili mevzuattan doğan zorunlu hakları saklıdır.
        </p>
      </section>
      </div>
    </InfoLayout>
  );
}
