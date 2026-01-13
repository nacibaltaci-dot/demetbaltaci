import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İlişki Uyumu - Sinastri Analizi",
  description: "İki kişi arasındaki astrolojik uyum analizi. Aşk, evlilik ve iş ortaklığı için sinastri danışmanlığı.",
};

export default function SinAstriPage() {
  return (
    <div style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "896px", margin: "0 auto", padding: "0 24px" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "14px", color: "#6B7280" }}>
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>Ana Sayfa</Link>
          <span>&gt;</span>
          <Link href="/dogum-haritasi-astroloji-danismanlik" style={{ color: "#1E3A8A", textDecoration: "none" }}>Danışmanlık</Link>
          <span>&gt;</span>
          <span>Sinastri</span>
        </nav>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ fontSize: "4rem", marginBottom: "16px" }}>💕</div>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#1E3A8A", marginBottom: "16px" }}>İlişki Uyumu (Sinastri)</h1>
          <p style={{ color: "#6B7280", fontSize: "18px" }}>Astrolog Demet Baltacı</p>
        </div>

        <div style={{ backgroundColor: "white", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", padding: "32px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Sinastri Nedir?</h2>
          <p style={{ color: "#6B7280", marginBottom: "16px", lineHeight: 1.7 }}>
            Sinastri, iki kişinin doğum haritalarının karşılaştırılması ile yapılan ilişki uyumu analizidir.
            Bu analiz ile iki kişi arasındaki çekim, uyum, zorluklar ve potansiyeller ortaya konur.
          </p>
          <p style={{ color: "#6B7280", lineHeight: 1.7 }}>
            Romantik ilişkiler, evlilik, aile ilişkileri veya iş ortaklıkları için sinastri analizi yapılabilir.
          </p>
        </div>

        <div style={{ backgroundColor: "#F8FAFC", borderRadius: "16px", padding: "32px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Sinastri Analizi Neleri Kapsar?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span>İki harita arasındaki gezegen açılarının analizi</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span>Duygusal uyum (Ay-Ay, Ay-Venüs ilişkileri)</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span>İletişim uyumu (Merkür bağlantıları)</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span>Fiziksel çekim (Mars-Venüs ilişkileri)</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span>Uzun vadeli uyum potansiyeli</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span>Zorluklar ve çözüm önerileri</span>
            </div>
          </div>
        </div>

        <div style={{
          background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
          borderRadius: "16px",
          padding: "32px",
          textAlign: "center",
          color: "white"
        }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "16px" }}>Sinastri Analizi Yaptırın</h2>
          <p style={{ color: "#BFDBFE", marginBottom: "24px" }}>Detaylı bilgi ve fiyat için WhatsApp üzerinden bizimle iletişime geçin.</p>
          <a
            href="https://wa.me/905076075017?text=Merhaba,%20sinastri%20analizi%20yaptirmak%20istiyorum."
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
