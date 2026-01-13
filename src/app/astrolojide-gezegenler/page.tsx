import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Astrolojide Gezegenler",
  description: "Astrolojide 10 gezegen ve anlamları. Güneş, Ay, Merkür, Venüs, Mars, Jüpiter, Satürn, Uranüs, Neptün, Plüton.",
};

const planets = [
  { name: "Güneş", symbol: "☉", meaning: "Benlik, ego, yaşam enerjisi" },
  { name: "Ay", symbol: "☽", meaning: "Duygular, iç dünya, anne" },
  { name: "Merkür", symbol: "☿", meaning: "İletişim, düşünce, öğrenme" },
  { name: "Venüs", symbol: "♀", meaning: "Aşk, güzellik, değerler" },
  { name: "Mars", symbol: "♂", meaning: "Enerji, irade, tutku" },
  { name: "Jüpiter", symbol: "♃", meaning: "Şans, genişleme, bilgelik" },
  { name: "Satürn", symbol: "♄", meaning: "Disiplin, sorumluluk, sınırlar" },
  { name: "Uranüs", symbol: "♅", meaning: "Değişim, özgürlük, yenilik" },
  { name: "Neptün", symbol: "♆", meaning: "Hayal gücü, spiritüalite, ilham" },
  { name: "Plüton", symbol: "♇", meaning: "Dönüşüm, güç, yeniden doğuş" },
];

export default function GezegenlerPage() {
  return (
    <div style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "896px", margin: "0 auto", padding: "0 24px" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "14px", color: "#6B7280" }}>
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>Ana Sayfa</Link>
          <span>&gt;</span>
          <Link href="/astroloji-ogreniyorum" style={{ color: "#1E3A8A", textDecoration: "none" }}>Astroloji Öğreniyorum</Link>
          <span>&gt;</span>
          <span>Gezegenler</span>
        </nav>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ fontSize: "4rem", marginBottom: "16px" }}>🪐</div>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#1E3A8A", marginBottom: "16px" }}>Astrolojide Gezegenler</h1>
        </div>

        <div style={{ backgroundColor: "white", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", padding: "32px", marginBottom: "32px" }}>
          <p style={{ color: "#6B7280", lineHeight: 1.7 }}>
            Astrolojide gezegenler, yaşam enerjimizin farklı yönlerini temsil eder. Her gezegenin kendine özgü bir anlamı ve etkisi vardır.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
          {planets.map((planet) => (
            <div key={planet.name} style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              border: "1px solid #F3F4F6",
              display: "flex",
              alignItems: "center",
              gap: "16px"
            }}>
              <div style={{ fontSize: "2.5rem", color: "#1E3A8A" }}>{planet.symbol}</div>
              <div>
                <h3 style={{ fontWeight: 600, color: "#1E3A8A", marginBottom: "4px" }}>{planet.name}</h3>
                <p style={{ fontSize: "14px", color: "#6B7280" }}>{planet.meaning}</p>
              </div>
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
          <p style={{ color: "#BFDBFE", marginBottom: "24px" }}>YouTube kanalımızda her gezegen hakkında detaylı videolar bulabilirsiniz.</p>
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
