import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Doğum Haritası Analizi",
  description: "Kişisel doğum haritanızın detaylı analizi. Astrolog Demet Baltacı ile karakteriniz, yetenekleriniz ve yaşam yolunuz hakkında bilgi edinin.",
};

export default function DogumHaritasiPage() {
  return (
    <div style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "896px", margin: "0 auto", padding: "0 24px" }}>
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "14px", color: "#6B7280" }}>
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>Ana Sayfa</Link>
          <span>&gt;</span>
          <Link href="/dogum-haritasi-astroloji-danismanlik" style={{ color: "#1E3A8A", textDecoration: "none" }}>Danışmanlık</Link>
          <span>&gt;</span>
          <span>Doğum Haritası Analizi</span>
        </nav>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ fontSize: "4rem", marginBottom: "16px" }}>🗺️</div>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#1E3A8A", marginBottom: "16px" }}>Doğum Haritası Analizi</h1>
          <p style={{ color: "#6B7280", fontSize: "18px" }}>Astrolog Demet Baltacı</p>
        </div>

        <div style={{ backgroundColor: "white", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", padding: "32px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Doğum Haritası Nedir?</h2>
          <p style={{ color: "#6B7280", marginBottom: "16px", lineHeight: 1.7 }}>
            Doğum haritası, doğduğunuz an gökyüzündeki gezegenlerin konumlarını gösteren bir haritadır.
            Bu harita sizin kişisel &quot;kozmik parmak iziniz&quot; gibidir ve yaşam boyunca sizi etkileyen enerjileri ortaya koyar.
          </p>
          <p style={{ color: "#6B7280", lineHeight: 1.7 }}>
            Profesyonel bir doğum haritası analizi ile kendinizi daha iyi tanımanız, güçlü ve zayıf yönlerinizi keşfetmeniz,
            yaşam amaçlarınızı ve potansiyelinizi anlamanız mümkün olur.
          </p>
        </div>

        <div style={{ backgroundColor: "#F8FAFC", borderRadius: "16px", padding: "32px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Danışmanlık Neleri Kapsar?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span>Güneş, Ay ve Yükselen burç analizi</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span>Tüm gezegenlerin konum ve açılarının yorumu</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span>12 evin detaylı incelemesi</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span>Kariyer ve iş yaşamı potansiyeli</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span>İlişki ve aşk hayatı analizi</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span>Sağlık eğilimleri</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#6B7280" }}>
              <span style={{ color: "#D4AF37" }}>✓</span>
              <span>Maddi konular ve finansal potansiyel</span>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "white", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", padding: "32px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Nasıl Çalışır?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
            <div style={{ textAlign: "center", padding: "16px" }}>
              <div style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#1E3A8A",
                color: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 12px",
                fontSize: "1.25rem",
                fontWeight: 700
              }}>1</div>
              <h3 style={{ fontWeight: 600, marginBottom: "8px" }}>WhatsApp&apos;tan Ulaşın</h3>
              <p style={{ fontSize: "14px", color: "#6B7280" }}>Danışmanlık talebinizi iletin</p>
            </div>
            <div style={{ textAlign: "center", padding: "16px" }}>
              <div style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#1E3A8A",
                color: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 12px",
                fontSize: "1.25rem",
                fontWeight: 700
              }}>2</div>
              <h3 style={{ fontWeight: 600, marginBottom: "8px" }}>Bilgilerinizi Gönderin</h3>
              <p style={{ fontSize: "14px", color: "#6B7280" }}>Doğum tarihi, saati ve yeri</p>
            </div>
            <div style={{ textAlign: "center", padding: "16px" }}>
              <div style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#1E3A8A",
                color: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 12px",
                fontSize: "1.25rem",
                fontWeight: 700
              }}>3</div>
              <h3 style={{ fontWeight: 600, marginBottom: "8px" }}>Randevu Alın</h3>
              <p style={{ fontSize: "14px", color: "#6B7280" }}>Uygun tarih ve saat belirleyin</p>
            </div>
            <div style={{ textAlign: "center", padding: "16px" }}>
              <div style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#1E3A8A",
                color: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 12px",
                fontSize: "1.25rem",
                fontWeight: 700
              }}>4</div>
              <h3 style={{ fontWeight: 600, marginBottom: "8px" }}>Online Görüşme</h3>
              <p style={{ fontSize: "14px", color: "#6B7280" }}>Detaylı analiz ve soru-cevap</p>
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
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "16px" }}>Hemen Randevu Alın</h2>
          <p style={{ color: "#BFDBFE", marginBottom: "24px" }}>Detaylı bilgi ve fiyat için WhatsApp üzerinden bizimle iletişime geçin.</p>
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
