import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { zodiacSigns } from "@/lib/zodiac-data";

export const metadata: Metadata = {
  title: "Burçlar",
  description: "12 burç hakkında detaylı bilgi. Koç, Boğa, İkizler, Yengeç, Aslan, Başak, Terazi, Akrep, Yay, Oğlak, Kova, Balık burçları.",
};

export default function BurclarPage() {
  return (
    <div style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "14px", color: "#6B7280" }}>
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>Ana Sayfa</Link>
          <span>&gt;</span>
          <span>Tüm Burçlar</span>
        </nav>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#1E3A8A", marginBottom: "16px" }}>Tüm Burçlar</h1>
          <p style={{ color: "#6B7280", fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>
            12 burç hakkında detaylı bilgi edinin. Her burcun özellikleri, elementleri ve yönetici gezegenleri.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "24px"
        }} className="burclar-grid">
          {zodiacSigns.map((sign) => (
            <Link
              key={sign.id}
              href={`/tum-burclar-astroloji/${sign.id}-burcu-ozellikleri`}
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                border: "1px solid #E5E7EB",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
              className="burc-card"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <Image
                  src={`/images/zodiac/${sign.id}.png`}
                  alt={`${sign.name} burcu`}
                  width={64}
                  height={64}
                />
                <div>
                  <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#1F2937" }}>{sign.name} Burcu</h2>
                  <p style={{ fontSize: "14px", color: "#6B7280" }}>{sign.dates}</p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "14px" }}>
                <div>
                  <span style={{ color: "#6B7280" }}>Element:</span>
                  <span style={{ fontWeight: 500, marginLeft: "4px", color: "#1F2937" }}>{sign.element}</span>
                </div>
                <div>
                  <span style={{ color: "#6B7280" }}>Gezegen:</span>
                  <span style={{ fontWeight: 500, marginLeft: "4px", color: "#1F2937" }}>{sign.planet}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .burclar-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .burclar-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        .burc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(30, 58, 138, 0.15) !important;
          border-color: #3B82F6 !important;
        }
      `}</style>
    </div>
  );
}
