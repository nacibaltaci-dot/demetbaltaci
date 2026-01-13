import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yükselen Burç Nedir?",
  description: "Yükselen burç (Ascendant) nedir? Yükselen burcunuzun önemi ve nasıl hesaplanır?",
};

export default function YukselenBurcNedirPage() {
  return (
    <div style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "896px", margin: "0 auto", padding: "0 24px" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "14px", color: "#6B7280" }}>
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>Ana Sayfa</Link>
          <span>&gt;</span>
          <Link href="/astroloji-ogreniyorum" style={{ color: "#1E3A8A", textDecoration: "none" }}>Astroloji Öğreniyorum</Link>
          <span>&gt;</span>
          <span>Yükselen Burç Nedir?</span>
        </nav>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ fontSize: "4rem", marginBottom: "16px" }}>⬆️</div>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#1E3A8A", marginBottom: "16px" }}>Yükselen Burç Nedir?</h1>
        </div>

        <div style={{ backgroundColor: "white", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", padding: "32px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Yükselen Burç (Ascendant)</h2>
          <p style={{ color: "#6B7280", marginBottom: "16px", lineHeight: 1.7 }}>
            Yükselen burç, doğduğunuz anda doğu ufkunda yükselen burçtur. Dış görünüşünüzü, diğer insanlara verdiğiniz ilk izlenimi ve yaşama başlama şeklinizi temsil eder.
          </p>
          <p style={{ color: "#6B7280", lineHeight: 1.7 }}>
            Yükselen burç hesaplamak için doğum saatinizin bilinmesi gerekir. Yaklaşık her 2 saatte bir yükselen burç değişir.
          </p>
        </div>

        <div style={{ backgroundColor: "#F8FAFC", borderRadius: "16px", padding: "32px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Yükselen Burç Neyi Temsil Eder?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span>Fiziksel görünüşünüz ve vücut yapınız</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span>Diğer insanlara verdiğiniz ilk izlenim</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span>Yaşama başlama şekliniz</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span>Sosyal maskeniz</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span>Hayata yaklaşım tarzınız</span>
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
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "16px" }}>Yükselen Burcunuzu Öğrenin</h2>
          <p style={{ color: "#BFDBFE", marginBottom: "24px" }}>Doğum haritası analizi ile yükselen burcunuzu ve anlamını öğrenin.</p>
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
    </div>
  );
}
