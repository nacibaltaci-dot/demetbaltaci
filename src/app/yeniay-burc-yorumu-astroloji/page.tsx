import { Metadata } from "next";
import Link from "next/link";
import { getYeniayPlaylistId } from "@/lib/playlist-config";
import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title: "Yeniay Burç Yorumu | Astrolog Demet Baltacı",
  description: "Yeniay dönemlerinin burç etkileri ve astroloji yorumları. Yeniay nedir, yeniayda neler yapılır? Astrolog Demet Baltacı ile yeniay yorumları.",
  keywords: [
    "yeniay burç yorumu",
    "yeniay nedir",
    "yeniay astroloji",
    "yeniay etkileri",
    "yeniay ritüelleri",
  ],
};

export const revalidate = 3600; // 1 saat

export default function YeniayYorumlarPage() {
  const playlistId = getYeniayPlaylistId();

  return (
    <div style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "14px", color: "#6B7280" }}>
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>Ana Sayfa</Link>
          <span>&gt;</span>
          <span>Yeniay Burç Yorumu</span>
        </nav>
      </div>

      {/* Video Section */}
      <VideoSection
        playlistId={playlistId}
        title="Yeniay Burç Yorumu"
        subtitle="Astrolog Demet Baltacı"
        zodiacSymbol="🌑"
      />

      {/* İçerik */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          padding: "32px",
          marginTop: "32px",
          marginBottom: "32px"
        }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Yeniay Nedir?</h2>
          <p style={{ color: "#6B7280", marginBottom: "16px", lineHeight: 1.7 }}>
            Yeniay, Ay&apos;ın Güneş ile aynı yönde olduğu ve gökyüzünden görülmediği dönemdir.
            Bu dönem yeni başlangıçları, niyetler belirlemeyi ve iç dünya çalışmasını temsil eder.
          </p>
          <p style={{ color: "#6B7280", lineHeight: 1.7 }}>
            Her yeniay farklı bir burçta gerçekleşir ve o burcun enerjilerini ön plana çıkarır.
          </p>
        </div>

        {/* Danışmanlık CTA */}
        <div style={{
          background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
          borderRadius: "16px",
          padding: "32px",
          textAlign: "center",
          color: "white"
        }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "8px" }}>Kişisel Danışmanlık</h3>
          <p style={{ color: "#BFDBFE", marginBottom: "16px" }}>Doğum haritanıza özel detaylı analiz için iletişime geçin.</p>
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
              padding: "12px 24px",
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
