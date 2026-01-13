import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { zodiacSigns, zodiacSlugMappings, getZodiacBySlug, getZodiacInstagramLink } from "@/lib/zodiac-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return zodiacSlugMappings.burclar.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sign = getZodiacBySlug(slug);
  if (!sign) return { title: "Burç Bulunamadı" };

  return {
    title: `${sign.name} Burcu Özellikleri | ${sign.name} Burcu Kadın Erkek Karakteri`,
    description: `${sign.name} burcu özellikleri, karakteri, uyumlu olduğu burçlar. ${sign.name} burcu kadın ve erkek karakter analizi. ${sign.dates} tarihleri arasında doğanlar. Astrolog Demet Baltacı.`,
    keywords: [
      `${sign.name.toLowerCase()} burcu`,
      `${sign.name.toLowerCase()} burcu özellikleri`,
      `${sign.name.toLowerCase()} burcu kadın`,
      `${sign.name.toLowerCase()} burcu erkek`,
      `${sign.name.toLowerCase()} burcu karakteri`,
      `${sign.name.toLowerCase()} burcu uyumlu burçlar`,
      `${sign.name.toLowerCase()} burcu aşk`,
      `yükselen ${sign.name.toLowerCase()}`,
    ],
    openGraph: {
      title: `${sign.name} Burcu - Özellikleri ve Karakteri`,
      description: `${sign.name} burcu hakkında tüm bilgiler. Özellikleri, karakteri ve uyumlu burçları.`,
    },
  };
}

export default async function BurcOzellikleriPage({ params }: Props) {
  const { slug } = await params;
  const sign = getZodiacBySlug(slug);
  if (!sign) notFound();

  const otherSigns = zodiacSigns.filter((s) => s.id !== sign.id);
  const instagramLink = getZodiacInstagramLink(sign.id);

  return (
    <div style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
        {/* Breadcrumb */}
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px", fontSize: "14px", color: "#6B7280", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>Ana Sayfa</Link>
          <span>&gt;</span>
          <Link href="/tum-burclar-astroloji" style={{ color: "#1E3A8A", textDecoration: "none" }}>Tüm Burçlar</Link>
          <span>&gt;</span>
          <span>{sign.name} Burcu</span>
        </nav>

        {/* BÖLÜM 1: Burç Videoları Alanı */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(30, 58, 138, 0.1)",
          padding: "40px 32px",
          marginBottom: "32px",
          textAlign: "center"
        }}>
          {/* Başlık */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ marginBottom: "16px" }}>
              <Image
                src={`/images/zodiac/${sign.id}.png`}
                alt={`${sign.name} burcu`}
                width={100}
                height={100}
                style={{ margin: "0 auto" }}
              />
            </div>
            <h1 style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "#1E3A8A",
              marginBottom: "8px",
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}>
              {sign.name} BURCU
            </h1>
            <p style={{
              fontSize: "1.25rem",
              color: "#6B7280",
              marginBottom: "8px"
            }}>
              ve
            </p>
            <h2 style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#1E3A8A",
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}>
              YÜKSELEN {sign.name} BURCU
            </h2>
          </div>

          <p style={{
            color: "#6B7280",
            fontSize: "16px",
            marginBottom: "32px",
            maxWidth: "500px",
            margin: "0 auto 32px auto"
          }}>
            Buradan burcunuza özel içerikleri kolayca takip edebilirsiniz.
          </p>

          {/* Linkler */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px", margin: "0 auto" }}>
            {/* Instagram */}
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                background: "linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)",
                color: "white",
                padding: "16px 24px",
                borderRadius: "12px",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}
            >
              <svg style={{ width: "20px", height: "20px" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/>
              </svg>
              {sign.name} Burcu Instagram Sayfamız
            </a>
            <p style={{ fontSize: "12px", color: "#E1306C", marginTop: "-4px", marginBottom: "8px" }}>
              (Lütfen Sayfayı Takip Ediniz)
            </p>

            {/* Haftalık Yorum */}
            <Link
              href={`/haftalik-burc-yorumlari-astroloji/${sign.id}-burcu-haftalik-yorumu`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                backgroundColor: "#1E3A8A",
                color: "white",
                padding: "16px 24px",
                borderRadius: "12px",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}
            >
              <span style={{ fontSize: "18px" }}>📅</span>
              {sign.name} Burcu - Haftalık Yorumu
            </Link>

            {/* Aylık Yorum */}
            <Link
              href={`/aylik-burc-yorumlari-astroloji/${sign.id}-burcu-aylik-yorumu`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                backgroundColor: "#3B82F6",
                color: "white",
                padding: "16px 24px",
                borderRadius: "12px",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}
            >
              <span style={{ fontSize: "18px" }}>🗓️</span>
              {sign.name} Burcu - Aylık Yorumu
            </Link>

            {/* 2026 Yıllık Yorum */}
            <Link
              href={`/2026-burc-yorumlari-astroloji/${sign.id}-burcu-2026-yorumu`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                backgroundColor: "#D4AF37",
                color: "white",
                padding: "16px 24px",
                borderRadius: "12px",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}
            >
              <span style={{ fontSize: "18px" }}>⭐</span>
              {sign.name} Burcu 2026 Yıllık Yorumu
            </Link>
          </div>
        </div>

        {/* BÖLÜM 2: Diğer Burçlar */}
        <div style={{ marginBottom: "32px" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px", textAlign: "center" }}>
            Diğer Burçlar
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "8px"
          }} className="other-signs-grid">
            {otherSigns.map((s) => (
              <Link
                key={s.id}
                href={`/tum-burclar-astroloji/${s.id}-burcu-ozellikleri`}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "16px 12px",
                  textAlign: "center",
                  textDecoration: "none",
                  border: "1px solid #E5E7EB",
                  transition: "all 0.2s ease"
                }}
                className="other-sign-card"
              >
                <Image
                  src={`/images/zodiac/${s.id}.png`}
                  alt={`${s.name} burcu`}
                  width={48}
                  height={48}
                  style={{ margin: "0 auto 4px auto" }}
                />
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#1F2937" }}>{s.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* BÖLÜM 3: SEO İçerik */}
        <div style={{
          backgroundColor: "#F8FAFC",
          borderRadius: "16px",
          padding: "32px",
          marginBottom: "32px"
        }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "20px" }}>
            {sign.name} Burcu Özellikleri
          </h2>

          {/* Temel Bilgiler */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
            marginBottom: "24px"
          }} className="info-grid">
            <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "12px" }}>
              <div style={{ fontSize: "12px", color: "#6B7280", textTransform: "uppercase", marginBottom: "4px" }}>Tarih Aralığı</div>
              <div style={{ fontWeight: 600, color: "#1E3A8A" }}>{sign.dates}</div>
            </div>
            <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "12px" }}>
              <div style={{ fontSize: "12px", color: "#6B7280", textTransform: "uppercase", marginBottom: "4px" }}>Element</div>
              <div style={{ fontWeight: 600, color: "#1E3A8A" }}>{sign.element}</div>
            </div>
            <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "12px" }}>
              <div style={{ fontSize: "12px", color: "#6B7280", textTransform: "uppercase", marginBottom: "4px" }}>Yönetici Gezegen</div>
              <div style={{ fontWeight: 600, color: "#1E3A8A" }}>{sign.planet}</div>
            </div>
            <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "12px" }}>
              <div style={{ fontSize: "12px", color: "#6B7280", textTransform: "uppercase", marginBottom: "4px" }}>Nitelik</div>
              <div style={{ fontWeight: 600, color: "#1E3A8A" }}>
                {sign.id === "koc" || sign.id === "yengec" || sign.id === "terazi" || sign.id === "oglak" ? "Öncü" :
                 sign.id === "boga" || sign.id === "aslan" || sign.id === "akrep" || sign.id === "kova" ? "Sabit" : "Değişken"}
              </div>
            </div>
          </div>

          {/* Burç Hakkında Genel Bilgi */}
          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "12px" }}>
              {sign.name} Burcu Hakkında
            </h3>
            <p style={{ color: "#4B5563", lineHeight: 1.8, marginBottom: "12px" }}>
              {sign.name} burcu, {sign.dates} tarihleri arasında doğan kişilerin güneş burcudur.
              {sign.element} elementi ve {sign.planet} gezegeni tarafından yönetilen {sign.name} burcu,
              zodyak&apos;ın {zodiacSigns.findIndex(s => s.id === sign.id) + 1}. burcudur.
            </p>
            <p style={{ color: "#4B5563", lineHeight: 1.8 }}>
              Yükselen {sign.name} burcu olan kişiler ise doğum anında {sign.name} burcunun doğu ufkunda
              yükseldiği kişilerdir. Yükselen burç, kişinin dış görünüşünü, ilk izlenimini ve
              hayata yaklaşım tarzını belirler.
            </p>
          </div>

          {/* Detaylı Bilgi İçin CTA */}
          <div style={{
            background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
            borderRadius: "12px",
            padding: "24px",
            textAlign: "center",
            color: "white"
          }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "8px" }}>
              Kişisel Doğum Haritası Analizi
            </h3>
            <p style={{ color: "#BFDBFE", marginBottom: "16px", fontSize: "14px" }}>
              Sadece güneş burcunuz değil, ay burcunuz ve yükselen burcunuzla birlikte tam doğum haritanızı öğrenin.
            </p>
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
                padding: "12px 24px",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none"
              }}
            >
              WhatsApp ile İletişime Geçin
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .info-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (min-width: 640px) {
          .other-signs-grid {
            grid-template-columns: repeat(6, 1fr) !important;
          }
        }
        .other-sign-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(30, 58, 138, 0.15);
          border-color: #1E3A8A;
        }
      `}</style>
    </div>
  );
}
