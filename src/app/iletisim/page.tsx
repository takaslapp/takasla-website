import type { Metadata } from "next";
import Link from "next/link";
import InfoLayout from "@/components/info/InfoLayout";
import { InstagramIcon, XIcon } from "@/components/market/StoreBadges";
import { absoluteUrl, CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Takasla destek, hesap, KVKK başvurusu, ilan şikâyeti ve iş birliği talepleri için iletişim kanalları. Sorunu doğru kanala ileterek daha hızlı yanıt al.",
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: "Takasla iletişim",
    description: "Destek, KVKK başvuruları ve iş birliği için Takasla iletişim kanalları.",
    url: absoluteUrl("/iletisim"),
    type: "website",
    locale: "tr_TR",
    siteName: "Takasla",
  },
};

function mail(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

const TOPICS = [
  {
    title: "Uygulama ve hesap desteği",
    text: "Giriş yapamama, profil, ilan yayınlama veya teklif sorunları. Kullanıcı adını ve sorunun ekran görüntüsünü eklersen daha hızlı inceleriz.",
    action: { label: "E-posta gönder", href: mail("Destek talebi") },
  },
  {
    title: "İlan veya kullanıcı şikâyeti",
    text: "Kurallara aykırı bir ilan ya da şüpheli bir kullanıcı gördüysen uygulamadaki şikâyet ve bildirim araçlarını kullan. Gerekirse ilan numarasıyla bize e-posta da gönderebilirsin.",
    action: { label: "Şikâyet bildir", href: mail("İlan / kullanıcı şikâyeti") },
  },
  {
    title: "TakasPara ve satın almalar",
    text: "Ödemesi tamamlandığı hâlde bakiyene yansımayan TakasPara ya da satın alma işlemleriyle ilgili soruların için bize yaz. İade ve cayma koşulları ayrı sayfada açıklanır.",
    action: { label: "İptal ve iade koşulları", href: "/iptal-ve-iade-kosullari" },
  },
  {
    title: "Kişisel veriler (KVKK)",
    text: "Verilerine erişim, düzeltme veya silme talepleri için başvurunu e-postayla ilet. Başvurunun nasıl değerlendirildiği KVKK Aydınlatma Metni'nde açıklanır.",
    action: { label: "KVKK başvurusu", href: mail("KVKK başvurusu") },
  },
  {
    title: "Hesap silme",
    text: "Hesabını uygulamadaki Ayarlar bölümünden silebilirsin. Uygulamaya erişemiyorsan silme talebini e-postayla da iletebilirsin.",
    action: { label: "Hesap ve veri silme", href: "/hesap-ve-veri-silme" },
  },
  {
    title: "Basın ve iş birliği",
    text: "Röportaj, içerik ortaklığı, kurumsal iş birliği ve etkinlik teklifleri için konu satırında kurumunun adını belirt.",
    action: { label: "Teklif gönder", href: mail("İş birliği") },
  },
];

export default function IletisimPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Takasla iletişim",
    url: absoluteUrl("/iletisim"),
    mainEntity: {
      "@type": "Organization",
      name: "Takasla",
      url: absoluteUrl("/"),
      contactPoint: [{ "@type": "ContactPoint", contactType: "customer support", email: CONTACT_EMAIL, availableLanguage: "Turkish" }],
      sameAs: ["https://instagram.com/takaslapp", "https://x.com/takaslapp"],
    },
  };

  return (
    <InfoLayout
      path="/iletisim"
      title="İletişim"
      lead="Takasla ekibine e-postayla ulaşabilirsin. Talebini aşağıdaki konulardan birine göre iletirsen doğru kişiye daha hızlı ulaşır."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="grid max-w-4xl gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
        <div className="bg-white p-5">
          <p className="text-sm text-muted">E-posta</p>
          <a href={mail("Takasla")} className="mt-1 block break-all text-lg font-medium hover:underline">
            {CONTACT_EMAIL}
          </a>
          <p className="mt-2 text-sm text-muted">Tüm talepler için tek adres. İş günlerinde yanıtlıyoruz.</p>
        </div>
        <div className="bg-white p-5">
          <p className="text-sm text-muted">Sosyal medya</p>
          <div className="mt-2 flex flex-col gap-2 text-[15px]">
            <a href="https://instagram.com/takaslapp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline">
              <InstagramIcon /> @takaslapp
            </a>
            <a href="https://x.com/takaslapp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline">
              <XIcon /> @takaslapp
            </a>
          </div>
        </div>
      </div>

      <section className="mt-12 max-w-4xl" aria-labelledby="konular">
        <h2 id="konular" className="text-lg font-semibold">
          Konuya göre iletişim
        </h2>
        <ul className="mt-4 border-t border-line">
          {TOPICS.map((t) => (
            <li key={t.title} className="grid gap-2 border-b border-line py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-8">
              <div>
                <h3 className="font-medium">{t.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-muted">{t.text}</p>
              </div>
              {t.action.href.startsWith("/") ? (
                <Link href={t.action.href} className="text-sm font-medium text-link underline underline-offset-2 sm:pt-0.5">
                  {t.action.label}
                </Link>
              ) : (
                <a href={t.action.href} className="text-sm font-medium text-link underline underline-offset-2 sm:pt-0.5">
                  {t.action.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="doc mt-12">
        <h2 id="once-bak">Yazmadan önce</h2>
        <p>
          Teklifler, TakasPara ve takas süreciyle ilgili soruların çoğunun cevabı{" "}
          <Link href="/sss">Sıkça Sorulan Sorular</Link> sayfasında. Takasla&apos;nın hizmet sağlayıcı ve adres
          bilgileri <Link href="/iletisim-ve-ticari-bilgiler">İletişim ve Ticari Bilgiler</Link> sayfasında yer alır.
        </p>
        <p>
          Takasla hiçbir zaman e-posta, SMS veya mesajla şifreni, doğrulama kodunu ya da ödeme bilgini istemez. Böyle
          bir talep alırsan yanıt verme ve bize bildir.
        </p>
      </section>
    </InfoLayout>
  );
}
