"use client";

import Image from "next/image";

// Instagram hesap verileri (statik - SEO için optimize)
// Son güncelleme: Ocak 2026
const mainAccounts = [
  {
    name: "Demet Baltacı",
    username: "@demetbaltaci_",
    href: "https://www.instagram.com/demetbaltaci_/",
    followers: "52.6K",
    posts: "2.847",
    avatar: "👩‍🦰",
    description: "Astrolog & İçerik Üreticisi"
  },
  {
    name: "Astroloji Eğitimi",
    username: "@demetbaltaci_astroloji",
    href: "https://www.instagram.com/demetbaltaci_astroloji/",
    followers: "3.7K",
    posts: "892",
    avatar: "📚",
    description: "Astroloji Dersleri & Eğitim"
  }
];

const zodiacAccounts = [
  { id: "koc", name: "Koç", href: "https://www.instagram.com/koc_burcu_astroloji/", followers: "27.5K" },
  { id: "boga", name: "Boğa", href: "https://www.instagram.com/boga_burcu_astroloji/", followers: "36.4K" },
  { id: "ikizler", name: "İkizler", href: "https://www.instagram.com/ikizler_burcu_astroloji/", followers: "37.2K" },
  { id: "yengec", name: "Yengeç", href: "https://www.instagram.com/yengec_burcu_astroloji/", followers: "32K" },
  { id: "aslan", name: "Aslan", href: "https://www.instagram.com/aslan_burcu_astroloji/", followers: "30.3K" },
  { id: "basak", name: "Başak", href: "https://www.instagram.com/basak_burcu_astroloji/", followers: "43K" },
  { id: "terazi", name: "Terazi", href: "https://www.instagram.com/terazi_burcu_astroloji/", followers: "51.8K" },
  { id: "akrep", name: "Akrep", href: "https://www.instagram.com/akrep_burcu_astroloji/", followers: "26.3K" },
  { id: "yay", name: "Yay", href: "https://www.instagram.com/yay_burcu_astroloji/", followers: "24.1K" },
  { id: "oglak", name: "Oğlak", href: "https://www.instagram.com/oglak_burcu__astroloji/", followers: "31.9K" },
  { id: "kova", name: "Kova", href: "https://www.instagram.com/kova_burcu_astroloji__/", followers: "20.5K" },
  { id: "balik", name: "Balık", href: "https://www.instagram.com/balik_burcu_astroloji__/", followers: "26.6K" }
];

export default function InstagramChannelsSection() {
  return (
    <section style={{ padding: "64px 0", backgroundColor: "white" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Başlık */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px"
          }}>
            <div style={{
              width: "56px",
              height: "56px",
              background: "linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(225, 48, 108, 0.3)"
            }}>
              <svg style={{ width: "32px", height: "32px", color: "white" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </div>
          </div>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#1E3A8A", marginBottom: "8px" }}>
            Instagram Kanallarımız
          </h2>
          <p style={{ color: "#6B7280", fontSize: "1.1rem" }}>
            420.000+ takipçili Instagram ailemize katılın
          </p>
        </div>

        {/* Ana Hesaplar - Minimal Kartlar */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "48px",
          flexWrap: "wrap"
        }}>
          {mainAccounts.map((account) => (
            <a
              key={account.name}
              href={account.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                backgroundColor: "white",
                borderRadius: "50px",
                padding: "8px 20px 8px 8px",
                textDecoration: "none",
                border: "2px solid #EFEFEF",
                transition: "all 0.3s ease"
              }}
              className="main-account-card"
            >
              {/* Avatar */}
              <div style={{
                width: "48px",
                height: "48px",
                background: "linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2px"
              }}>
                <div style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem"
                }}>
                  {account.avatar}
                </div>
              </div>

              {/* İsim ve Takipçi */}
              <div>
                <div style={{ fontWeight: 600, color: "#262626", fontSize: "14px" }}>
                  {account.name}
                </div>
                <div style={{ color: "#E1306C", fontSize: "13px", fontWeight: 600 }}>
                  {account.followers} takipçi
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Burç Hesapları - Kompakt Kartlar */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#1E3A8A" }}>
            12 BURÇ İNSTAGRAM KANALLARIMIZ
          </h3>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "12px"
        }} className="instagram-zodiac-grid">
          {zodiacAccounts.map((account) => (
            <a
              key={account.name}
              href={account.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#FAFAFA",
                padding: "20px 12px",
                borderRadius: "16px",
                textDecoration: "none",
                border: "1px solid #EFEFEF",
                transition: "all 0.3s ease"
              }}
              className="instagram-zodiac-card"
            >
              {/* Avatar */}
              <Image
                src={`/images/zodiac/${account.id}.png`}
                alt={`${account.name} burcu`}
                width={56}
                height={56}
              />

              {/* İsim */}
              <span style={{ fontWeight: 600, color: "#262626", fontSize: "14px" }}>
                {account.name}
              </span>

              {/* Takipçi Sayısı */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                backgroundColor: "#F0F0F0",
                padding: "4px 10px",
                borderRadius: "12px"
              }}>
                <svg style={{ width: "12px", height: "12px", color: "#8E8E8E" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#8E8E8E" }}>
                  {account.followers}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Toplam İstatistik */}
        <div style={{
          marginTop: "48px",
          textAlign: "center",
          padding: "24px",
          background: "linear-gradient(135deg, rgba(131,58,180,0.1) 0%, rgba(225,48,108,0.1) 50%, rgba(247,119,55,0.1) 100%)",
          borderRadius: "16px"
        }}>
          <p style={{ color: "#262626", fontSize: "14px", marginBottom: "8px" }}>
            Tüm hesaplarda toplam
          </p>
          <p style={{ fontSize: "2rem", fontWeight: 700, color: "#E1306C", margin: 0 }}>
            420.000+ Takipçi
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .main-accounts-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 640px) {
          .instagram-zodiac-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (min-width: 768px) {
          .instagram-zodiac-grid {
            grid-template-columns: repeat(6, 1fr) !important;
          }
        }
        .instagram-zodiac-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(225, 48, 108, 0.2);
          border-color: #E1306C !important;
        }
        .main-account-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(225, 48, 108, 0.2);
          border-color: #E1306C !important;
        }
      `}</style>
    </section>
  );
}
