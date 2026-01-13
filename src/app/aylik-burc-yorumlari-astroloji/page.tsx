import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { zodiacSigns } from "@/lib/zodiac-data";

const currentMonth = new Date().toLocaleDateString("tr-TR", { month: "long" });
const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Aylık Burç Yorumları ${currentMonth} ${currentYear} | Bu Ay Burçları Neler Bekliyor?`,
  description: `${currentMonth} ${currentYear} aylık burç yorumları. Bu ay tüm burçları neler bekliyor? Koç, Boğa, İkizler, Yengeç, Aslan, Başak, Terazi, Akrep, Yay, Oğlak, Kova ve Balık aylık astroloji tahminleri. Astrolog Demet Baltacı.`,
  keywords: [
    "aylık burç yorumu",
    `${currentMonth} ${currentYear} burç yorumu`,
    "bu ay burç yorumları",
    "aylık astroloji",
    "ayın burç yorumu",
    "aylık burç yorumları 2026",
    "demet baltacı aylık yorum",
  ],
  openGraph: {
    title: `Aylık Burç Yorumları ${currentMonth} ${currentYear}`,
    description: "Bu ay tüm burçları neler bekliyor? Aylık astroloji tahminleri.",
  },
};

export default function AylikYorumlarPage() {
  const currentMonth = new Date().toLocaleDateString("tr-TR", { month: "long", year: "numeric" });

  return (
    <div style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "14px", color: "#6B7280" }}>
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>Ana Sayfa</Link>
          <span>&gt;</span>
          <span>Aylık Burç Yorumları</span>
        </nav>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#1E3A8A", marginBottom: "16px" }}>Aylık Burç Yorumları</h1>
          <p style={{ color: "#6B7280", fontSize: "18px" }}>{currentMonth}</p>
          <p style={{ color: "#6B7280", marginTop: "8px" }}>Astrolog Demet Baltacı</p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px"
        }} className="zodiac-subpage-grid">
          {zodiacSigns.map((sign) => (
            <Link
              key={sign.id}
              href={`/aylik-burc-yorumlari-astroloji/${sign.id}-burcu-aylik-yorumu`}
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "24px",
                textAlign: "center",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                border: "1px solid #E5E7EB",
                transition: "all 0.3s ease"
              }}
              className="zodiac-link-card"
            >
              <Image
                src={`/images/zodiac/${sign.id}.png`}
                alt={`${sign.name} burcu`}
                width={56}
                height={56}
                style={{ margin: "0 auto 8px auto" }}
              />
              <h2 style={{ fontWeight: 600, color: "#1F2937", marginBottom: "4px" }}>{sign.name}</h2>
              <p style={{ fontSize: "12px", color: "#6B7280" }}>{sign.dates}</p>
            </Link>
          ))}
        </div>

        <div style={{
          marginTop: "48px",
          backgroundColor: "#F8FAFC",
          borderRadius: "16px",
          padding: "32px",
          textAlign: "center"
        }}>
          <p style={{ color: "#6B7280", marginBottom: "16px" }}>Aylık burç yorumlarınız YouTube kanalımızda yayınlanmaktadır.</p>
          <a
            href="https://www.youtube.com/@demet.baltaci"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#1E3A8A",
              color: "white",
              padding: "12px 24px",
              borderRadius: "9999px",
              fontWeight: 600,
              textDecoration: "none"
            }}
          >
            YouTube Kanalına Git
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .zodiac-subpage-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 768px) {
          .zodiac-subpage-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .zodiac-subpage-grid {
            grid-template-columns: repeat(6, 1fr) !important;
          }
        }
        .zodiac-link-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(30, 58, 138, 0.15) !important;
          border-color: #3B82F6 !important;
        }
      `}</style>
    </div>
  );
}
