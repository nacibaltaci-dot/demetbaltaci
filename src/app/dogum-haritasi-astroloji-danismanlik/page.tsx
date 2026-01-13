import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Astroloji Danışmanlık | Online Doğum Haritası Analizi | Demet Baltacı",
  description: "Astrolog Demet Baltacı ile online astroloji danışmanlık hizmeti. Kişisel doğum haritası analizi, sinastri (ilişki uyumu), solar return yıllık öngörü. WhatsApp ile randevu alın.",
  keywords: [
    "astroloji danışmanlık",
    "online astroloji danışmanlık",
    "doğum haritası analizi",
    "kişisel doğum haritası",
    "sinastri analizi",
    "ilişki uyumu astroloji",
    "demet baltacı danışmanlık",
    "astroloji seansı",
  ],
  openGraph: {
    title: "Astroloji Danışmanlık - Astrolog Demet Baltacı",
    description: "Online astroloji danışmanlık. Doğum haritası analizi, ilişki uyumu ve yıllık öngörü.",
  },
};

const services = [
  {
    title: "Doğum Haritası Analizi",
    description: "Kişisel doğum haritanızın detaylı analizi. Karakteriniz, yetenekleriniz ve yaşam yolunuz hakkında bilgi.",
    href: "/astroloji-danismanlik",
    icon: "🗺️",
  },
  {
    title: "İlişkiler ve Uyum (Sinastri)",
    description: "İki kişi arasındaki astrolojik uyum analizi. Aşk, evlilik ve iş ortaklığı için.",
    href: "/danismanlik/iliski-astroloji-sinastri",
    icon: "💕",
  },
  {
    title: "Yıllık Öngörü (Solar Return)",
    description: "Doğum gününüzden bir sonraki doğum gününüze kadar olan yılın analizi.",
    href: "/danismanlik/solar-return-yillik-ongoru",
    icon: "🎂",
  },
  {
    title: "Bebek-Çocuk-Ergen Doğum Haritası",
    description: "Çocuğunuzun doğum haritası analizi. Yetenekleri, ihtiyaçları ve gelişimi hakkında bilgi.",
    href: "/danismanlik/bebek-cocuk-ergen-dogum-haritasi",
    icon: "👶",
  },
];

export default function DanismanlikPage() {
  return (
    <div style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "14px", color: "#6B7280" }}>
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>Ana Sayfa</Link>
          <span>&gt;</span>
          <span>Danışmanlık</span>
        </nav>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#1E3A8A", marginBottom: "16px" }}>
            Danışmanlık Hizmetleri
          </h1>
          <p style={{ color: "#6B7280", fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>
            Kişisel astroloji danışmanlığı ile kendinizi ve yaşamınızdaki olayları daha iyi anlayın.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "24px",
          marginBottom: "48px"
        }} className="services-grid">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                border: "1px solid #E5E7EB",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
              className="service-card"
            >
              <div style={{ fontSize: "3rem", marginBottom: "16px" }}>{service.icon}</div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#1F2937", marginBottom: "8px" }}>
                {service.title}
              </h2>
              <p style={{ color: "#6B7280" }}>{service.description}</p>
            </Link>
          ))}
        </div>

        <div style={{
          background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
          borderRadius: "16px",
          padding: "48px 32px",
          textAlign: "center",
          color: "white"
        }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "16px" }}>
            Nasıl Randevu Alabilirim?
          </h2>
          <p style={{ color: "#BFDBFE", marginBottom: "24px", maxWidth: "500px", margin: "0 auto 24px auto" }}>
            Danışmanlık hizmetleri hakkında detaylı bilgi almak ve randevu oluşturmak için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.
          </p>
          <a
            href="https://wa.me/905076075017?text=Merhaba,%20danismanlik%20hakkinda%20bilgi%20almak%20istiyorum."
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

      <style>{`
        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(30, 58, 138, 0.15) !important;
          border-color: #3B82F6 !important;
        }
      `}</style>
    </div>
  );
}
