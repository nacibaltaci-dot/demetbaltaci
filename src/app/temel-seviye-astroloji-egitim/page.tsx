import { Metadata } from "next";
import Link from "next/link";
import EducationCTASection from "@/components/EducationCTASection";

export const metadata: Metadata = {
  title: "Astroloji Eğitimleri",
  description: "Astrolog Demet Baltacı ile astroloji eğitimi. Temel seviyeden ileri seviyeye astroloji öğrenin.",
};

export default function EgitimlerPage() {

  return (
    <div style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "14px", color: "#6B7280" }}>
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>Ana Sayfa</Link>
          <span>&gt;</span>
          <span>Eğitimler</span>
        </nav>

        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#1E3A8A", marginBottom: "16px", textTransform: "uppercase" }}>Temel Seviye Astroloji Eğitimi</h1>
          <p style={{ color: "#6B7280", fontSize: "18px", maxWidth: "700px", margin: "0 auto", lineHeight: 1.6 }}>
            Doğum haritanızı alın ve astroloji öğrenmeye hemen başlayın... Önce Kendinizin, sonra aileniz ve arkadaşlarınızın astroloğu olun!
          </p>
        </div>
      </div>

      {/* Eğitim Video Bölümü */}
      <EducationCTASection />
    </div>
  );
}
