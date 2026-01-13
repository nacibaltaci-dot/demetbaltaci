import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hakkımızda - Demet Baltacı",
  description: "Astrolog Demet Baltacı hakkında bilgi. YouTube'da 230 bin aboneli astroloji kanalı.",
};

export default function HakkimizdasPage() {
  return (
    <div style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "14px", color: "#6B7280" }}>
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>Ana Sayfa</Link>
          <span>&gt;</span>
          <span>Hakkımızda</span>
        </nav>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#1E3A8A" }}>Hakkımızda</h1>
        </div>

        <div style={{
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          overflow: "hidden",
          marginBottom: "32px"
        }}>
          <div style={{ display: "flex", flexDirection: "column" }} className="about-content">
            <div style={{
              padding: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F8FAFC"
            }} className="about-image">
              <Image
                src="/images/demet.png"
                alt="Astrolog Demet Baltaci"
                width={200}
                height={200}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div style={{ padding: "32px" }} className="about-text">
              <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Demet Baltacı Kimdir?</h2>
              <p style={{ color: "#6B7280", marginBottom: "16px", lineHeight: 1.7 }}>
                Demet Baltacı, YouTube&apos;da 230 binin üzerinde abonesi bulunan Türkiye&apos;nin öncü astroloji kanalının kurucusudur.
                Yıllardır astroloji alanında eğitim vermekte ve binlerce kişiye doğum haritası danışmanlığı yapmaktadır.
              </p>
              <p style={{ color: "#6B7280", marginBottom: "24px", lineHeight: 1.7 }}>
                Günlük, haftalık ve aylık burç yorumları ile takipçilerine düzenli olarak astrolojik rehberlik sunmaktadır.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a
                  href="https://www.youtube.com/@demet.baltaci"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#1E3A8A",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "9999px",
                    fontWeight: 600,
                    textDecoration: "none"
                  }}
                >
                  YouTube
                </a>
                <a
                  href="https://www.instagram.com/demetbaltaci_"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "white",
                    color: "#1E3A8A",
                    border: "2px solid #1E3A8A",
                    padding: "12px 24px",
                    borderRadius: "9999px",
                    fontWeight: 600,
                    textDecoration: "none"
                  }}
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          marginBottom: "32px"
        }} className="stats-grid">
          <div style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "24px",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
          }}>
            <div style={{
              fontSize: "2rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #1E3A8A 0%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>230K+</div>
            <div style={{ color: "#6B7280", fontSize: "14px", textTransform: "uppercase" }}>YouTube Abone</div>
          </div>
          <div style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "24px",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
          }}>
            <div style={{
              fontSize: "2rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #1E3A8A 0%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>34K+</div>
            <div style={{ color: "#6B7280", fontSize: "14px", textTransform: "uppercase" }}>Video</div>
          </div>
          <div style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "24px",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
          }}>
            <div style={{
              fontSize: "2rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #1E3A8A 0%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>91M+</div>
            <div style={{ color: "#6B7280", fontSize: "14px", textTransform: "uppercase" }}>Görüntüleme</div>
          </div>
        </div>

        <div style={{
          backgroundColor: "#F8FAFC",
          borderRadius: "16px",
          padding: "32px",
          marginBottom: "32px"
        }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Hizmetlerimiz</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Doğum Haritası Analizi",
              "İlişki Uyumu (Sinastri) Analizi",
              "Yıllık Öngörü (Solar Return)",
              "Çocuk Doğum Haritası Analizi",
              "Astroloji Eğitimleri"
            ].map((item, index) => (
              <li key={index} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px", color: "#6B7280" }}>
                <span style={{ color: "#D4AF37" }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{
          background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
          borderRadius: "16px",
          padding: "32px",
          textAlign: "center",
          color: "white"
        }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "16px" }}>İletişime Geçin</h2>
          <p style={{ color: "#BFDBFE", marginBottom: "24px" }}>Danışmanlık ve eğitim hakkında bilgi almak için WhatsApp üzerinden ulaşabilirsiniz.</p>
          <a
            href="https://wa.me/905076075017"
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
          .about-content {
            flex-direction: row !important;
          }
          .about-image {
            width: 33.33% !important;
          }
          .about-text {
            width: 66.67% !important;
          }
        }
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
