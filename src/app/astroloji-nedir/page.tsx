import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Astroloji Nedir? | Astroloji Nasıl Çalışır? | Başlangıç Rehberi",
  description: "Astroloji nedir, nasıl çalışır? Astrolojinin tarihi, temel prensipleri ve burçlar. Astroloji öğrenmek isteyenler için kapsamlı başlangıç rehberi.",
  keywords: [
    "astroloji nedir",
    "astroloji nasıl çalışır",
    "astroloji öğren",
    "astroloji başlangıç",
    "astroloji tarihi",
    "burçlar ve astroloji",
    "astroloji rehberi",
  ],
  openGraph: {
    title: "Astroloji Nedir? - Başlangıç Rehberi",
    description: "Astroloji nedir ve nasıl çalışır? Astroloji hakkında temel bilgiler.",
  },
};

export default function AstrolojiNedirPage() {
  return (
    <div style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "896px", margin: "0 auto", padding: "0 24px" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "14px", color: "#6B7280" }}>
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>Ana Sayfa</Link>
          <span>&gt;</span>
          <Link href="/astroloji-ogreniyorum" style={{ color: "#1E3A8A", textDecoration: "none" }}>Astroloji Öğreniyorum</Link>
          <span>&gt;</span>
          <span>Astroloji Nedir?</span>
        </nav>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ fontSize: "4rem", marginBottom: "16px" }}>🌟</div>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#1E3A8A", marginBottom: "16px" }}>Astroloji Nedir?</h1>
        </div>

        <div style={{ backgroundColor: "white", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", padding: "32px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Astrolojinin Tanımı</h2>
          <p style={{ color: "#6B7280", marginBottom: "16px", lineHeight: 1.7 }}>
            Astroloji, gök cisimlerinin (gezegenler, Güneş, Ay) konumlarının ve hareketlerinin insanların yaşamları
            üzerindeki etkilerini inceleyen bir sistemdir. Binlerce yıllık bir geçmişe sahip olan astroloji,
            farklı kültürlerde farklı şekillerde yorumlanmış ve uygulanmıştır.
          </p>
          <p style={{ color: "#6B7280", lineHeight: 1.7 }}>
            Modern astroloji, kişisel gelişim, kendini tanıma ve yaşam rehberliği amacıyla kullanılmaktadır.
          </p>
        </div>

        <div style={{ backgroundColor: "#F8FAFC", borderRadius: "16px", padding: "32px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Astrolojinin Temel Bileşenleri</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span><strong>Burçlar:</strong> 12 burç ve özellikleri</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span><strong>Gezegenler:</strong> Her gezegenin temsil ettiği enerji</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span><strong>Evler:</strong> 12 ev ve yaşam alanları</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span><strong>Açılar:</strong> Gezegenler arası ilişkiler</span>
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
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "16px" }}>Daha Fazla Öğrenin</h2>
          <p style={{ color: "#BFDBFE", marginBottom: "24px" }}>YouTube kanalımızda astroloji hakkında detaylı videolar bulabilirsiniz.</p>
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
