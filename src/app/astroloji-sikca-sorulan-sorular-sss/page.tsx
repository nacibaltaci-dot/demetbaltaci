import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description: "Astroloji ve danışmanlık hizmetleri hakkında sıkça sorulan sorular ve cevapları.",
};

const faqs = [
  {
    question: "Doğum haritası analizi için hangi bilgilere ihtiyaç var?",
    answer: "Doğum haritası çıkarılabilmesi için doğum tarihiniz, doğum saatiniz (mümkünse dakika olarak) ve doğum yeriniz (şehir) bilgilerine ihtiyaç vardır. Doğum saati ne kadar kesin olursa analiz o kadar doğru olur."
  },
  {
    question: "Danışmanlık nasıl gerçekleşir?",
    answer: "Danışmanlıklar online olarak video görüşme şeklinde gerçekleşir. WhatsApp üzerinden randevu aldıktan sonra, belirlenen tarih ve saatte görüşme yapılır."
  },
  {
    question: "Doğum saatimi bilmiyorum, ne yapabilirim?",
    answer: "Doğum saatiniz yoksa, nüfus müdürlüğünden veya doğduğunuz hastaneden doğum saatinizi öğrenebilirsiniz. Eğer doğum saati bulunamazsa, sınırlı bir analiz yapılabilir."
  },
  {
    question: "Burç yorumları ne sıklıkla güncellenir?",
    answer: "Günlük burç yorumları her gün YouTube kanalımızda yayınlanmaktadır. Haftalık ve aylık yorumlar da düzenli olarak paylaşılmaktadır."
  },
  {
    question: "Astroloji eğitimi almak için ne yapmam gerekiyor?",
    answer: "Astroloji eğitimi için WhatsApp üzerinden iletişime geçebilir veya Udemy platformundaki kurslarımıza kaydolabilirsiniz."
  },
  {
    question: "Sinastri (ilişki uyumu) analizi için ne gerekiyor?",
    answer: "Sinastri analizi için her iki kişinin de doğum tarihi, saati ve yeri bilgilerine ihtiyaç vardır."
  },
];

// FAQ Schema for Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function SSSPage() {
  return (
    <div style={{ padding: "48px 0" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div style={{ maxWidth: "896px", margin: "0 auto", padding: "0 24px" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "14px", color: "#6B7280" }}>
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>Ana Sayfa</Link>
          <span>&gt;</span>
          <span>SSS</span>
        </nav>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#1E3A8A", marginBottom: "16px" }}>Sıkça Sorulan Sorular</h1>
          <p style={{ color: "#6B7280", fontSize: "18px" }}>
            En çok sorulan soruların cevaplarını burada bulabilirsiniz.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              border: "1px solid #F3F4F6",
              padding: "24px"
            }}>
              <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#1E3A8A", marginBottom: "12px" }}>{faq.question}</h2>
              <p style={{ color: "#6B7280", lineHeight: 1.7 }}>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div style={{
          background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
          borderRadius: "16px",
          padding: "32px",
          textAlign: "center",
          color: "white"
        }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "16px" }}>Başka Sorularınız mı Var?</h2>
          <p style={{ color: "#BFDBFE", marginBottom: "24px" }}>WhatsApp üzerinden bizimle iletişime geçebilirsiniz.</p>
          <a
            href="https://wa.me/905076075017?text=Merhaba,%20bir%20sorum%20var."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#25D366",
              color: "white",
              padding: "14px 28px",
              borderRadius: "9999px",
              fontWeight: 600,
              textDecoration: "none"
            }}
          >
            WhatsApp ile İletişime Geçin
          </a>
        </div>
      </div>
    </div>
  );
}
