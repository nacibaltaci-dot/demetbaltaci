import { getLatestDailyVideo, formatDateTurkish, truncateDescriptionAtUdemy } from "@/lib/youtube";

// Günlük burç yorumları playlist ID
const DAILY_PLAYLIST_ID = "PL4kKxVfkjqJoha2BBocgSRNp-DhDr2bEg";

// URL'leri, hashtag'leri ve timestamp'leri tıklanabilir linklere dönüştür
function linkifyText(text: string, videoId: string): string {
  // 1. URL pattern - http, https, and www links
  let result = text.replace(/(https?:\/\/[^\s]+|www\.[^\s]+)/g, (url) => {
    const href = url.startsWith('www.') ? `https://${url}` : url;
    const cleanUrl = href.replace(/[.,;:!?)]+$/, '');
    const displayUrl = url.replace(/[.,;:!?)]+$/, '');
    return `<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" class="video-link">${displayUrl}</a>`;
  });

  // 2. Hashtag'leri YouTube aramasına linkle
  result = result.replace(/#([a-zA-ZğüşöçıİĞÜŞÖÇ0-9_]+)/g, (match, tag) => {
    return `<a href="https://www.youtube.com/hashtag/${tag}" target="_blank" rel="noopener noreferrer" class="video-hashtag">${match}</a>`;
  });

  // 3. Timestamp'leri video linkine dönüştür (0:00, 00:00, 0:00:00 formatları)
  result = result.replace(/\b(\d{1,2}):(\d{2})(?::(\d{2}))?\b/g, (match, h, m, s) => {
    let seconds = 0;
    if (s) {
      // Format: H:MM:SS
      seconds = parseInt(h) * 3600 + parseInt(m) * 60 + parseInt(s);
    } else {
      // Format: M:SS
      seconds = parseInt(h) * 60 + parseInt(m);
    }
    return `<a href="https://www.youtube.com/watch?v=${videoId}&t=${seconds}s" target="_blank" rel="noopener noreferrer" class="video-timestamp">${match}</a>`;
  });

  return result;
}

export default async function DailyVideoSection() {
  const video = await getLatestDailyVideo();

  // API key yoksa veya varsayılan video ise playlist embed kullan
  const usePlaylistEmbed = video.videoId === "dQw4w9WgXcQ";

  // Bugünün tarihini formatla
  const today = new Date();
  const dayNames = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  const monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
  const day = today.getDate();
  const month = monthNames[today.getMonth()];
  const year = today.getFullYear();
  const dayName = dayNames[today.getDay()];

  // Video açıklamasını Udemy linkinden sonra kes ve linkli HTML'e dönüştür
  const truncatedDescription = truncateDescriptionAtUdemy(video.description);
  const descriptionWithLinks = linkifyText(truncatedDescription, video.videoId);

  // Varsayılan SEO metni (API key yoksa)
  const defaultSeoText = `Demet Baltacı ile ${day} ${month} ${year} günlük burç yorumları. Koç, Boğa, İkizler, Yengeç, Aslan, Başak, Terazi, Akrep, Yay, Oğlak, Kova ve Balık burçlarının günlük yorumları.`;

  return (
    <section style={{ padding: "40px 0" }}>
      <div className="site-container">
        {/* Ana Kutu */}
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 40px rgba(30, 58, 138, 0.12)",
          overflow: "hidden"
        }}>

          {/* Başlık - Kompakt ve Şık */}
          <div style={{
            padding: "20px 24px",
            borderBottom: "1px solid #E2E8F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{
                width: "44px",
                height: "44px",
                background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <svg style={{ width: "22px", height: "22px", color: "white" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "#1E3A8A",
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  Günlük Burç Yorumu
                </h2>
                <p style={{
                  color: "#64748B",
                  fontSize: "13px",
                  margin: 0
                }}>
                  Astrolog Demet Baltacı
                </p>
              </div>
            </div>

            <div style={{
              backgroundColor: "#F1F5F9",
              padding: "8px 16px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}>
              <svg style={{ width: "14px", height: "14px", color: "#1E3A8A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#1E3A8A" }}>
                {day} {month} {year}, {dayName}
              </span>
            </div>
          </div>

          {/* Video */}
          <div style={{ padding: "20px" }}>
            <div style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
            }}>
              {usePlaylistEmbed ? (
                <iframe
                  src={`https://www.youtube.com/embed/videoseries?list=${DAILY_PLAYLIST_ID}&rel=0`}
                  title="Günlük Burç Yorumları Playlist"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none"
                  }}
                />
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none"
                  }}
                />
              )}
            </div>
          </div>

          {/* Açıklama */}
          <div style={{ padding: "0 20px 20px 20px" }}>
            <div style={{
              backgroundColor: "#F8FAFC",
              borderRadius: "12px",
              padding: "16px 20px",
              border: "1px solid #E2E8F0"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "12px"
              }}>
                <svg style={{ width: "16px", height: "16px", color: "#1E3A8A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#1E3A8A", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Video Açıklaması
                </span>
              </div>

              {usePlaylistEmbed ? (
                <p style={{
                  color: "#475569",
                  lineHeight: 1.7,
                  fontSize: "14px",
                  margin: 0
                }}>
                  {defaultSeoText}
                </p>
              ) : (
                <div
                  style={{
                    color: "#475569",
                    lineHeight: 1.75,
                    fontSize: "14px",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    maxHeight: "200px",
                    overflowY: "auto"
                  }}
                  dangerouslySetInnerHTML={{ __html: descriptionWithLinks }}
                />
              )}
            </div>
          </div>

          {/* Alt Butonlar */}
          <div style={{
            padding: "16px 20px 20px 20px",
            borderTop: "1px solid #E2E8F0",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center"
          }}>
            <a
              href={`https://www.youtube.com/playlist?list=${DAILY_PLAYLIST_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "white",
                backgroundColor: "#DC2626",
                padding: "10px 20px",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "13px",
                textDecoration: "none",
                transition: "all 0.2s ease"
              }}
            >
              <svg style={{ width: "16px", height: "16px" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Tüm Günlük Yorumlar
            </a>
            <a
              href="https://www.youtube.com/@demet.baltaci?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#1E3A8A",
                backgroundColor: "white",
                border: "2px solid #E2E8F0",
                padding: "10px 20px",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "13px",
                textDecoration: "none",
                transition: "all 0.2s ease"
              }}
            >
              <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              Kanala Abone Ol
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
