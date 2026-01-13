import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { zodiacSigns, zodiacSlugMappings, getZodiacBySlug } from "@/lib/zodiac-data";
import { getYearly2026VideoId } from "@/lib/playlist-config";
import SingleVideoSection from "@/components/SingleVideoSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return zodiacSlugMappings.yillik2026.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sign = getZodiacBySlug(slug);
  if (!sign) return { title: "Burç Bulunamadı" };

  return {
    title: `${sign.name} Burcu 2026 Yıllık Yorum | Astrolog Demet Baltacı`,
    description: `${sign.name} burcu için 2026 yılı astroloji yorumu. Yıllık burç yorumları ve astroloji tahminleri.`,
  };
}

export default async function Yillik2026BurcPage({ params }: Props) {
  const { slug } = await params;
  const sign = getZodiacBySlug(slug);
  if (!sign) notFound();

  const otherSigns = zodiacSigns.filter((s) => s.id !== sign.id);
  const videoId = getYearly2026VideoId(sign.id);

  return (
    <div style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Breadcrumb */}
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "14px", color: "#6B7280", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>Ana Sayfa</Link>
          <span>&gt;</span>
          <Link href="/2026-burc-yorumlari-astroloji" style={{ color: "#1E3A8A", textDecoration: "none" }}>2026 Burç Yorumları</Link>
          <span>&gt;</span>
          <span>{sign.name}</span>
        </nav>
      </div>

      {/* Video Section - Video ID varsa göster */}
      {videoId ? (
        <SingleVideoSection
          videoId={videoId}
          title={`${sign.name} Burcu 2026 Yıllık Yorum`}
          subtitle="Astrolog Demet Baltacı"
          zodiacId={sign.id}
        />
      ) : (
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div style={{ marginBottom: "16px" }}>
              <Image
                src={`/images/zodiac/${sign.id}.png`}
                alt={`${sign.name} burcu`}
                width={80}
                height={80}
                style={{ margin: "0 auto" }}
              />
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#1E3A8A", marginBottom: "8px" }}>
              {sign.name} Burcu 2026 Yıllık Yorum
            </h1>
            <p style={{ color: "#6B7280" }}>Astrolog Demet Baltacı</p>
          </div>

          <div style={{
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            padding: "32px",
            marginBottom: "32px",
            textAlign: "center"
          }}>
            <p style={{ color: "#6B7280", marginBottom: "16px", lineHeight: 1.7 }}>
              2026 yılı burç yorumlarınız için YouTube kanalımızı takip edin.
            </p>
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
              YouTube&apos;da İzle
            </a>
          </div>
        </div>
      )}

      {/* Burç Bilgileri */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          backgroundColor: "#F8FAFC",
          borderRadius: "16px",
          padding: "24px",
          marginBottom: "32px",
          marginTop: "32px"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
            textAlign: "center"
          }} className="info-grid">
            <div>
              <div style={{ fontSize: "12px", color: "#6B7280", textTransform: "uppercase", marginBottom: "4px" }}>Tarih Aralığı</div>
              <div style={{ fontWeight: 600, color: "#1E3A8A" }}>{sign.dates}</div>
            </div>
            <div>
              <div style={{ fontSize: "12px", color: "#6B7280", textTransform: "uppercase", marginBottom: "4px" }}>Element</div>
              <div style={{ fontWeight: 600, color: "#1E3A8A" }}>{sign.element}</div>
            </div>
            <div>
              <div style={{ fontSize: "12px", color: "#6B7280", textTransform: "uppercase", marginBottom: "4px" }}>Yönetici Gezegen</div>
              <div style={{ fontWeight: 600, color: "#1E3A8A" }}>{sign.planet}</div>
            </div>
            <div>
              <div style={{ fontSize: "12px", color: "#6B7280", textTransform: "uppercase", marginBottom: "4px" }}>Sembol</div>
              <Image
                src={`/images/zodiac/${sign.id}.png`}
                alt={`${sign.name} burcu`}
                width={40}
                height={40}
                style={{ margin: "0 auto" }}
              />
            </div>
          </div>
        </div>

        {/* Danışmanlık CTA */}
        <div style={{
          background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
          borderRadius: "16px",
          padding: "32px",
          textAlign: "center",
          color: "white",
          marginBottom: "32px"
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

        <div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#1E3A8A", marginBottom: "16px" }}>Diğer Burçlar</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "8px"
          }} className="other-signs-grid">
            {otherSigns.map((s) => (
              <Link
                key={s.id}
                href={`/2026-burc-yorumlari-astroloji/${s.id}-burcu-2026-yorumu`}
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  padding: "12px",
                  textAlign: "center",
                  textDecoration: "none",
                  border: "1px solid #E5E7EB"
                }}
              >
                <Image
                  src={`/images/zodiac/${s.id}.png`}
                  alt={`${s.name} burcu`}
                  width={40}
                  height={40}
                  style={{ margin: "0 auto" }}
                />
                <div style={{ fontSize: "12px", fontWeight: 500, color: "#1F2937", marginTop: "4px" }}>{s.name}</div>
              </Link>
            ))}
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
      `}</style>
    </div>
  );
}
