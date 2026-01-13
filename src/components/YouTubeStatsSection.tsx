import { getChannelStats } from "@/lib/youtube";

export default async function YouTubeStatsSection() {
  const stats = await getChannelStats();

  return (
    <section style={{
      padding: "48px 0",
      backgroundColor: "#FF0000"
    }}>
      <div className="site-container">
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px"
        }}>
          {/* YouTube Logo & Title */}
          <div style={{ textAlign: "center" }}>
            <a
              href="https://www.youtube.com/@demet.baltaci"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
                color: "white"
              }}
            >
              <svg style={{ width: "48px", height: "48px" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                Demet Baltacı
              </span>
            </a>
          </div>

          {/* Stats Row */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "48px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: "white" }}>
                {stats.subscriberCount}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "1px" }}>
                Abone
              </div>
            </div>
            <div style={{ width: "1px", height: "40px", backgroundColor: "rgba(255,255,255,0.3)" }} className="stat-divider" />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: "white" }}>
                {stats.videoCount}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "1px" }}>
                Video
              </div>
            </div>
            <div style={{ width: "1px", height: "40px", backgroundColor: "rgba(255,255,255,0.3)" }} className="stat-divider" />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: "white" }}>
                {stats.viewCount}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "1px" }}>
                Görüntüleme
              </div>
            </div>
          </div>

          {/* Subscribe Button */}
          <div style={{ textAlign: "center" }}>
            <a
              href="https://www.youtube.com/@demet.baltaci?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "white",
                color: "#FF0000",
                padding: "12px 28px",
                borderRadius: "24px",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}
            >
              Abone Ol
            </a>
            <p style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "12px",
              marginTop: "8px",
              fontWeight: 500
            }}>
              (ÜCRETSİZDİR)
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stat-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
