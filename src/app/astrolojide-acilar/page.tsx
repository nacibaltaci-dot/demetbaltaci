import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Açılar (Aspektler)",
  description: "Astrolojide açılar (aspektler) nedir? Kavuşum, kare, üçgen, karşıt açı ve diğer aspektler.",
};

const aspects = [
  { name: "Kavuşum", angle: "0°", symbol: "☌", nature: "Güçlü birleştirici", description: "İki gezegen aynı noktada" },
  { name: "Kare", angle: "90°", symbol: "□", nature: "Zorlu", description: "Gerilim ve çatışma" },
  { name: "Üçgen", angle: "120°", symbol: "△", nature: "Uyumlu", description: "Doğal yetenek ve akış" },
  { name: "Karşıt", angle: "180°", symbol: "☍", nature: "Zorlu/Dengeleyici", description: "Karşıtlıkların dengesi" },
  { name: "Altıgen", angle: "60°", symbol: "⚹", nature: "Uyumlu", description: "Fırsatlar ve yetenekler" },
];

export default function AcilarPage() {
  return (
    <div style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "896px", margin: "0 auto", padding: "0 24px" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "14px", color: "#6B7280" }}>
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>Ana Sayfa</Link>
          <span>&gt;</span>
          <Link href="/astroloji-ogreniyorum" style={{ color: "#1E3A8A", textDecoration: "none" }}>Astroloji Öğreniyorum</Link>
          <span>&gt;</span>
          <span>Açılar</span>
        </nav>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ fontSize: "4rem", marginBottom: "16px" }}>📐</div>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#1E3A8A", marginBottom: "16px" }}>Açılar (Aspektler)</h1>
        </div>

        <div style={{ backgroundColor: "white", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", padding: "32px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Aspekt Nedir?</h2>
          <p style={{ color: "#6B7280", lineHeight: 1.7 }}>
            Aspektler, doğum haritasındaki gezegenler arasındaki geometrik açılardır. Bu açılar, gezegen enerjilerinin birbirleriyle nasıl etkileştiğini gösterir.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
          {aspects.map((aspect) => (
            <div key={aspect.name} style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              border: "1px solid #F3F4F6"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "8px" }}>
                <div style={{ fontSize: "2rem", color: "#1E3A8A" }}>{aspect.symbol}</div>
                <div>
                  <h3 style={{ fontWeight: 600, color: "#1E3A8A" }}>{aspect.name} ({aspect.angle})</h3>
                  <span style={{ fontSize: "12px", padding: "4px 8px", backgroundColor: "#F8FAFC", borderRadius: "9999px" }}>{aspect.nature}</span>
                </div>
              </div>
              <p style={{ fontSize: "14px", color: "#6B7280" }}>{aspect.description}</p>
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
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "16px" }}>Daha Fazla Öğrenin</h2>
          <p style={{ color: "#BFDBFE", marginBottom: "24px" }}>YouTube kanalımızda aspektler hakkında detaylı videolar bulabilirsiniz.</p>
          <a
            href="https://www.youtube.com/@demet.baltaci"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#DC2626",
              color: "white",
              padding: "14px 28px",
              borderRadius: "9999px",
              fontWeight: 600,
              textDecoration: "none"
            }}
          >
            YouTube Kanalına Git
          </a>
        </div>
      </div>
    </div>
  );
}
