import type { Metadata } from "next";
import Link from "next/link";
import RisingSignCalculator from "@/components/RisingSignCalculator";

const PAGE_URL = "https://www.demetbaltaci.com/yukselen-burc-hesaplama/";
const WHATSAPP_NUMBER = "905076075017"; // Site genelindeki numara ile aynı

export const metadata: Metadata = {
  title: "Yükselen Burç Hesaplama – Doğum Saatine Göre Yükselenini Bul | Demet Baltacı",
  description:
    "Doğum tarihi, saati ve yerine göre yükselen burcunu ücretsiz hesapla. Yükselen burç nasıl bulunur, neden önemli? Astrolog Demet Baltacı ile öğren.",
  keywords: [
    "yükselen burç hesaplama",
    "yükselen burç nasıl bulunur",
    "yükselen burç nasıl hesaplanır",
    "yükselenim ne",
    "yükselen burç öğrenme",
    "yükselen burç 2026",
  ],
  alternates: {
    canonical: "/yukselen-burc-hesaplama",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: PAGE_URL,
    siteName: "Astrolog Demet Baltacı",
    title: "Yükselen Burç Hesaplama – Doğum Saatine Göre Yükselenini Bul",
    description:
      "Doğum tarihi, saati ve yerine göre yükselen burcunu ücretsiz hesapla. Yükselen burç nasıl bulunur, neden önemli? Astrolog Demet Baltacı ile öğren.",
    images: [
      {
        url: "/images/demet.png",
        width: 1200,
        height: 630,
        alt: "Yükselen Burç Hesaplama - Astrolog Demet Baltacı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yükselen Burç Hesaplama | Demet Baltacı",
    description: "Doğum saatine göre yükselen burcunu ücretsiz hesapla.",
    images: ["/images/demet.png"],
  },
};

// ---------- SSS verisi (hem görünür metin hem FAQPage schema) ----------
const FAQ: { q: string; a: string }[] = [
  {
    q: "Yükselen burç nedir?",
    a: "Yükselen burç, doğduğun anda doğu ufkunda yükselen burçtur; doğum haritasının 1. evi, dışa verdiğin ilk izlenimi temsil eder.",
  },
  {
    q: "Yükselen burç nasıl bulunur / hesaplanır?",
    a: "Tam doğum saati, doğum yeri (koordinat) ve tarih gerekir; ufuk yaklaşık 2 saatte bir değiştiği için doğum saati kritiktir.",
  },
  {
    q: "Yükselen burç neden güneş burcundan önemli olabilir?",
    a: "İnsanların seni ilk algılayışı çoğu zaman yükselenindir; harita analizinin kilididir.",
  },
  {
    q: "Doğum saatimi bilmiyorsam yükselenimi bulabilir miyim?",
    a: "Evet, “rektifikasyon” yöntemiyle hayat olaylarından doğum saati bulunabilir. Bu, Demet Baltacı danışmanlığında yapılır; WhatsApp üzerinden iletişime geçebilirsin.",
  },
  {
    q: "Yükselen burç kaç saatte bir değişir?",
    a: "Yaklaşık 2 saatte bir değişir; bu yüzden doğru doğum saati çok önemlidir.",
  },
  {
    q: "Yorumu güneş burcumdan mı yükselenimden mi izlemeliyim?",
    a: "Doğrusu yükselenden izlemektir; önce yükselenini bul, sonra o burcun videosunu izle.",
  },
];

// ---------- JSON-LD Schema ----------
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Yükselen Burç Nasıl Hesaplanır?",
  description:
    "Doğum tarihi, saati ve doğum yerini girerek yükselen burcunu birkaç adımda hesapla.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Doğum tarihini gir", text: "Doğduğun günü (gün/ay/yıl) seç." },
    { "@type": "HowToStep", position: 2, name: "Doğum saatini gir", text: "Doğduğun saati ve dakikayı gir. Yükselen ~2 saatte bir değiştiği için saat kritiktir." },
    { "@type": "HowToStep", position: 3, name: "Ülke ve şehri seç", text: "Doğduğun ülkeyi ve şehri seç; saat dilimi (yaz saati dahil) otomatik hesaplanır." },
    { "@type": "HowToStep", position: 4, name: "Hesapla", text: "“Yükselenimi Hesapla” butonuna bas ve yükselen burcunu öğren." },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Yükselen Burç Hesaplama",
  url: PAGE_URL,
  applicationCategory: "LifestyleApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
  author: { "@type": "Person", name: "Demet Baltacı" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.demetbaltaci.com/" },
    { "@type": "ListItem", position: 2, name: "Yükselen Burç Hesaplama", item: PAGE_URL },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Demet Baltacı",
  jobTitle: "Astrolog",
  url: "https://www.demetbaltaci.com/",
  sameAs: [
    "https://www.youtube.com/@demet.baltaci",
    "https://www.instagram.com/demetbaltaci_",
    "https://www.udemy.com/course/astrolog-demet-baltaci-astroloji-egitimi/",
  ],
};

// ---------- Ortak stiller ----------
const h2Style: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "#1E3A8A",
  marginBottom: "12px",
};
const pStyle: React.CSSProperties = { color: "#475569", lineHeight: 1.75, marginBottom: "16px" };
const cardStyle: React.CSSProperties = {
  backgroundColor: "white",
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
  padding: "28px",
  marginBottom: "24px",
};

export default function YukselenBurcHesaplamaPage() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Merhaba, doğum saatimden tam emin değilim. Rektifikasyon ile yükselen burcumu bulmak ve danışmanlık almak istiyorum."
  )}`;

  return (
    <div style={{ padding: "40px 0 56px" }}>
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 20px" }}>
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px", fontSize: "14px", color: "#6B7280" }}
        >
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>
            Ana Sayfa
          </Link>
          <span aria-hidden="true">›</span>
          <span>Yükselen Burç Hesaplama</span>
        </nav>

        {/* H1 */}
        <h1 style={{ fontSize: "clamp(28px, 6vw, 38px)", fontWeight: 700, color: "#1E3A8A", textAlign: "center", lineHeight: 1.15, marginBottom: "8px" }}>
          Yükselen Burç Hesaplama
        </h1>
        <p style={{ textAlign: "center", color: "#64748B", fontSize: "16px", lineHeight: 1.6, maxWidth: "52ch", margin: "0 auto" }}>
          Doğum tarihi, saati ve yerine göre yükselen burcunu aşağıdaki araçla ücretsiz hesapla.
        </p>
      </div>

      {/* ARAÇ — kullanıcı önce aracı görür */}
      <RisingSignCalculator />

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 20px" }}>
        {/* H2: Nasıl bulunur */}
        <section style={cardStyle}>
          <h2 style={h2Style}>Yükselen Burç Nasıl Bulunur?</h2>
          <p style={pStyle}>
            Yükselen burcunu bulmak için üç bilgi gerekir: <strong>tam doğum saati</strong>, <strong>doğum yeri</strong> (şehir
            ya da koordinat) ve <strong>doğum tarihi</strong>. Doğu ufku yaklaşık 2 saatte bir değiştiği için doğum saati en
            kritik veridir; birkaç dakikalık fark bile bazen yükseleni değiştirebilir. Yukarıdaki yükselen burç hesaplama aracı,
            seçtiğin şehrin koordinatlarını ve o tarihteki saat dilimini (geçmiş yaz saati dahil) otomatik kullanarak yükselenini
            saniyeler içinde hesaplar.
          </p>
        </section>

        {/* H2: Nedir */}
        <section style={cardStyle}>
          <h2 style={h2Style}>Yükselen Burç Nedir?</h2>
          <p style={pStyle}>
            Yükselen burç, doğduğun anda doğu ufkunda yükselen burçtur ve doğum haritanın <strong>1. evini</strong> başlatır.
            Dışa verdiğin ilk izlenimi, yani bir tür <em>“maske”</em>ni temsil eder: insanlarla tanıştığında sergilediğin tavır,
            fiziksel duruş ve hayata yaklaşım tarzın büyük ölçüde yükseleninle ilgilidir. Güneş burcun “öz”ünü anlatırken,
            yükselenin dışarıya yansıyan yüzünü gösterir.
          </p>
        </section>

        {/* H2: Neden önemli */}
        <section style={cardStyle}>
          <h2 style={h2Style}>Yükselen Burç Neden Önemli?</h2>
          <p style={pStyle}>
            İnsanların seni ilk algılayışı çoğu zaman güneş burcun değil, yükselenindir. Bu yüzden yükselen burç, doğum haritası
            analizinin adeta kilididir; evlerin ve gezegenlerin haritandaki yerleşimi yükselenine göre şekillenir. Pratik bir
            sonucu da şudur: <strong>burç yorumlarının doğrusu yükselenden izlenir.</strong> Yükselenini öğrendiğinde, yorumları
            çok daha isabetli takip edebilirsin.
          </p>
        </section>

        {/* H2: Doğum saati bilinmiyor + WhatsApp CTA */}
        <section style={{ ...cardStyle, backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0" }}>
          <h2 style={h2Style}>Doğum Saatimi Bilmiyorum, Ne Yapmalıyım?</h2>
          <p style={pStyle}>
            Doğum saatini bilmiyorsan da yükselenini bulmanın bir yolu var: <strong>rektifikasyon</strong>. Bu yöntemde,
            hayatındaki önemli olaylardan (taşınma, evlilik, iş değişiklikleri gibi) yola çıkılarak doğum saatin geriye dönük
            olarak tespit edilir. Rektifikasyon uzmanlık gerektiren bir çalışmadır ve Astrolog Demet Baltacı danışmanlığında
            yapılır.
          </p>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 22px",
              borderRadius: "12px",
              color: "#06351b",
              background: "linear-gradient(180deg, #2bdd72, #1eb257)",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              boxShadow: "0 14px 30px -14px rgba(37,211,102,.6)",
            }}
          >
            <span aria-hidden="true">✆</span>
            WhatsApp ile Rektifikasyon Danışmanlığı Al
          </a>
        </section>

        {/* H2: SSS — görünür metin */}
        <section style={cardStyle}>
          <h2 style={h2Style}>Sık Sorulan Sorular</h2>
          <div>
            {FAQ.map((f) => (
              <div key={f.q} style={{ borderTop: "1px solid #E2E8F0", padding: "16px 0" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "8px" }}>{f.q}</h3>
                <p style={{ color: "#475569", lineHeight: 1.7, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
