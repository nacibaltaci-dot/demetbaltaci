"use client";

import Image from "next/image";

export default function HeroSectionEn() {
  return (
    <section style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)" }}>
      <div className="site-container hero-section">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "48px",
          alignItems: "center"
        }} className="hero-grid">
          {/* Text Content */}
          <div style={{ order: 2 }} className="hero-text">
            <h1 style={{
              fontSize: "3rem",
              fontWeight: 700,
              color: "#1E3A8A",
              marginBottom: "32px",
              lineHeight: 1.2
            }} className="hero-title">
              Welcome
            </h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", color: "#4B5563", fontSize: "18px", lineHeight: 1.7 }}>
              <p>
                On our website, you will find a wide range of astrology content and videos.
              </p>
              <p>
                Please contact us via WhatsApp. We will definitely get back to you.
              </p>
              <div style={{ paddingTop: "16px" }}>
                <p style={{ color: "#1E3A8A", fontWeight: 500, fontStyle: "italic", fontSize: "18px" }}>
                  With love,
                </p>
                <p style={{ color: "#1E3A8A", fontSize: "24px", fontWeight: 700 }}>
                  Demet Baltaci
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <a
                href="https://wa.me/905076075017?text=Hello,%20I%20am%20contacting%20from%20your%20website."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  backgroundColor: "#25D366",
                  color: "white",
                  padding: "16px 32px",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(37, 211, 102, 0.4)"
                }}
              >
                <svg style={{ width: "24px", height: "24px" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact via WhatsApp
              </a>
              <a
                href="https://www.youtube.com/@demet.baltaci"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  backgroundColor: "#1E3A8A",
                  color: "white",
                  padding: "16px 32px",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(30, 58, 138, 0.4)"
                }}
              >
                <svg style={{ width: "24px", height: "24px" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                My YouTube Channel
              </a>
            </div>
          </div>

          {/* Image */}
          <div style={{ order: 1, display: "flex", justifyContent: "center" }} className="hero-image">
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute",
                inset: "-24px",
                background: "linear-gradient(135deg, #1E3A8A 0%, #D4AF37 100%)",
                borderRadius: "9999px",
                filter: "blur(48px)",
                opacity: 0.2
              }}></div>
              <Image
                src="/images/demet.png"
                alt="Astrologer Demet Baltaci"
                width={450}
                height={450}
                style={{
                  position: "relative",
                  borderRadius: "9999px",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  border: "4px solid white",
                  width: "300px",
                  height: "300px",
                  objectFit: "cover"
                }}
                className="hero-img"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 64px !important;
          }
          .hero-text {
            order: 1 !important;
          }
          .hero-image {
            order: 2 !important;
            justify-content: flex-end !important;
          }
          .hero-title {
            font-size: 3.75rem !important;
          }
        }
        @media (min-width: 640px) {
          :global(.hero-img) {
            width: 380px !important;
            height: 380px !important;
          }
        }
        @media (min-width: 1024px) {
          :global(.hero-img) {
            width: 450px !important;
            height: 450px !important;
          }
        }
      `}</style>
    </section>
  );
}
