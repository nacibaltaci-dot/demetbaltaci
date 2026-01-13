import { Metadata } from "next";
import Link from "next/link";
import { getUdemyLinkFromEducationPlaylist } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Temel Seviye Astroloji Eğitimi",
  description: "Astrolojinin temellerini öğrenin. Burçlar, gezegenler, evler ve açılar hakkında kapsamlı eğitim.",
};

export default async function TemelAstrolojiPage() {
  const udemyLink = await getUdemyLinkFromEducationPlaylist();

  return (
    <div style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "896px", margin: "0 auto", padding: "0 24px" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "14px", color: "#6B7280" }}>
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>Ana Sayfa</Link>
          <span>&gt;</span>
          <Link href="/temel-seviye-astroloji-egitim" style={{ color: "#1E3A8A", textDecoration: "none" }}>Eğitimler</Link>
          <span>&gt;</span>
          <span>Temel Astroloji</span>
        </nav>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ fontSize: "4rem", marginBottom: "16px" }}>📚</div>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#1E3A8A", marginBottom: "16px" }}>Temel Seviye Astroloji Eğitimi</h1>
          <p style={{ color: "#6B7280", fontSize: "18px" }}>Astrolog Demet Baltacı</p>
        </div>

        <div style={{ backgroundColor: "white", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", padding: "32px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Eğitim Hakkında</h2>
          <p style={{ color: "#6B7280", lineHeight: 1.7 }}>
            Bu eğitim, astrolojiye yeni başlayanlar için tasarlanmıştır. Sıfırdan başlayarak astrolojinin temel kavramlarını öğrenecek
            ve eğitim sonunda kendi doğum haritanızı yorumlayabilir hale geleceksiniz.
          </p>
        </div>

        <div style={{ backgroundColor: "#F8FAFC", borderRadius: "16px", padding: "32px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Eğitim İçeriği</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "16px" }}>
              <h3 style={{ fontWeight: 600, color: "#1E3A8A", marginBottom: "4px" }}>Modül 1: Astrolojiye Giriş</h3>
              <p style={{ fontSize: "14px", color: "#6B7280" }}>Astroloji nedir, tarihi, temel kavramlar</p>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "16px" }}>
              <h3 style={{ fontWeight: 600, color: "#1E3A8A", marginBottom: "4px" }}>Modül 2: 12 Burç</h3>
              <p style={{ fontSize: "14px", color: "#6B7280" }}>Her burcun özellikleri, elementler, modaliteler</p>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "16px" }}>
              <h3 style={{ fontWeight: 600, color: "#1E3A8A", marginBottom: "4px" }}>Modül 3: Gezegenler</h3>
              <p style={{ fontSize: "14px", color: "#6B7280" }}>10 gezegen ve anlamları, gezegen enerjileri</p>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "16px" }}>
              <h3 style={{ fontWeight: 600, color: "#1E3A8A", marginBottom: "4px" }}>Modül 4: 12 Ev</h3>
              <p style={{ fontSize: "14px", color: "#6B7280" }}>Her evin anlamı ve yaşam alanları</p>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "16px" }}>
              <h3 style={{ fontWeight: 600, color: "#1E3A8A", marginBottom: "4px" }}>Modül 5: Açılar (Aspektler)</h3>
              <p style={{ fontSize: "14px", color: "#6B7280" }}>Gezegen açılarının yorumlanması</p>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "16px" }}>
              <h3 style={{ fontWeight: 600, color: "#1E3A8A", marginBottom: "4px" }}>Modül 6: Harita Yorumu</h3>
              <p style={{ fontSize: "14px", color: "#6B7280" }}>Doğum haritası yorumlama pratiği</p>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", marginBottom: "32px" }} className="edu-cta-grid">
          <div style={{
            background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
            borderRadius: "16px",
            padding: "24px",
            textAlign: "center",
            color: "white"
          }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "16px" }}>Canlı Eğitim</h3>
            <p style={{ color: "#BFDBFE", marginBottom: "16px" }}>WhatsApp üzerinden detaylı bilgi alın</p>
            <a
              href="https://wa.me/905076075017?text=Merhaba,%20astroloji%20egitimi%20hakkinda%20bilgi%20almak%20istiyorum."
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
              Bilgi Alın
            </a>
          </div>
          <div style={{
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            padding: "24px",
            textAlign: "center"
          }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Udemy Kursu</h3>
            <p style={{ color: "#6B7280", marginBottom: "16px" }}>Online video eğitim için</p>
            <a
              href={udemyLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#A435F0",
                color: "white",
                padding: "12px 24px",
                borderRadius: "9999px",
                fontWeight: 600,
                textDecoration: "none"
              }}
            >
              Udemy&apos;e Git
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .edu-cta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
