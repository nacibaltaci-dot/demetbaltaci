import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Doğum Haritası Nedir? | Natal Harita Nasıl Yorumlanır?",
  description: "Doğum haritası (natal harita) nedir, nasıl hesaplanır ve yorumlanır? Doğum haritasının bileşenleri: gezegenler, evler, açılar. Kişisel doğum haritanızı öğrenin.",
  keywords: [
    "doğum haritası nedir",
    "doğum haritası hesaplama",
    "natal harita nedir",
    "doğum haritası yorumu",
    "doğum haritası nasıl yorumlanır",
    "kişisel doğum haritası",
    "doğum haritası evler",
    "doğum haritası gezegenler",
  ],
  openGraph: {
    title: "Doğum Haritası Nedir? - Astroloji Rehberi",
    description: "Doğum haritası nedir ve nasıl yorumlanır? Astrolojide natal harita hakkında her şey.",
  },
};

export default function DogumHaritasiNedirPage() {
  return (
    <div style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "896px", margin: "0 auto", padding: "0 24px" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "14px", color: "#6B7280" }}>
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>Ana Sayfa</Link>
          <span>&gt;</span>
          <Link href="/astroloji-ogreniyorum" style={{ color: "#1E3A8A", textDecoration: "none" }}>Astroloji Öğreniyorum</Link>
          <span>&gt;</span>
          <span>Doğum Haritası Nedir?</span>
        </nav>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ fontSize: "4rem", marginBottom: "16px" }}>🗺️</div>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#1E3A8A", marginBottom: "16px" }}>Doğum Haritası Nedir?</h1>
        </div>

        <div style={{ backgroundColor: "white", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", padding: "32px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Doğum Haritası (Natal Harita)</h2>
          <p style={{ color: "#6B7280", marginBottom: "16px", lineHeight: 1.7 }}>
            Doğum haritası, bir kişinin doğduğu an gökyüzündeki gezegenlerin konumlarını gösteren bir haritadır.
            Bu harita, o kişinin &quot;kozmik parmak izi&quot; gibidir ve eşsizdir.
          </p>
          <p style={{ color: "#6B7280", lineHeight: 1.7 }}>
            Doğum haritası çıkarılabilmesi için doğum tarihi, saati ve yeri bilgilerine ihtiyaç vardır.
          </p>
        </div>

        <div style={{ backgroundColor: "#F8FAFC", borderRadius: "16px", padding: "32px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Doğum Haritasının Bileşenleri</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }} className="grid-cols-1 md:grid-cols-2">
            <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "16px" }}>
              <h3 style={{ fontWeight: 600, color: "#1E3A8A", marginBottom: "4px" }}>Güneş Burcu</h3>
              <p style={{ fontSize: "14px", color: "#6B7280" }}>Temel kimliğiniz ve benliğiniz</p>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "16px" }}>
              <h3 style={{ fontWeight: 600, color: "#1E3A8A", marginBottom: "4px" }}>Ay Burcu</h3>
              <p style={{ fontSize: "14px", color: "#6B7280" }}>Duygularınız ve iç dünyanız</p>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "16px" }}>
              <h3 style={{ fontWeight: 600, color: "#1E3A8A", marginBottom: "4px" }}>Yükselen Burç</h3>
              <p style={{ fontSize: "14px", color: "#6B7280" }}>Dış görünüşünüz ve ilk izlenim</p>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "16px" }}>
              <h3 style={{ fontWeight: 600, color: "#1E3A8A", marginBottom: "4px" }}>Evler</h3>
              <p style={{ fontSize: "14px", color: "#6B7280" }}>Yaşam alanlarınız</p>
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
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "16px" }}>Doğum Haritanızı Yorumlatın</h2>
          <p style={{ color: "#BFDBFE", marginBottom: "24px" }}>Profesyonel doğum haritası analizi için iletişime geçin.</p>
          <a
            href="https://wa.me/905076075017?text=Merhaba,%20dogum%20haritasi%20analizi%20yaptirmak%20istiyorum."
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
