"use client";

import Link from "next/link";
import Image from "next/image";
import { zodiacSigns } from "@/lib/zodiac-data";

export default function ZodiacGridSection() {
  return (
    <section style={{ padding: "64px 0", backgroundColor: "#F8FAFC" }}>
      <div className="site-container">
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#1E3A8A", marginBottom: "8px" }}>
            Burcunuzu Seçin
          </h2>
          <p style={{ color: "#6B7280" }}>
            Günlük, haftalık ve aylık burç yorumlarınız için burcunuza tıklayın
          </p>
        </div>

        {/* Zodiac Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px"
        }} className="zodiac-grid">
          {zodiacSigns.map((sign) => (
            <Link
              key={sign.id}
              href={`/tum-burclar-astroloji/${sign.id}-burcu-ozellikleri`}
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "24px",
                textAlign: "center",
                textDecoration: "none",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                border: "2px solid transparent"
              }}
              className="zodiac-card-item"
            >
              <Image
                src={`/images/zodiac/${sign.id}.png`}
                alt={`${sign.name} burcu`}
                width={56}
                height={56}
                style={{ margin: "0 auto 8px auto" }}
              />
              <h3 style={{ fontWeight: 600, color: "#1F2937", marginBottom: "4px" }}>
                {sign.name}
              </h3>
              <p style={{ fontSize: "12px", color: "#6B7280" }}>
                {sign.dates}
              </p>
            </Link>
          ))}
        </div>

        {/* Quick Links */}
        <div style={{ marginTop: "48px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
          <Link
            href="/gunluk-burc-yorumlari"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#1E3A8A",
              color: "white",
              padding: "14px 28px",
              borderRadius: "9999px",
              fontWeight: 600,
              textDecoration: "none"
            }}
          >
            Günlük Yorumlar
          </Link>
          <Link
            href="/haftalik-burc-yorumlari-astroloji"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#D4AF37",
              color: "#1E3A8A",
              padding: "14px 28px",
              borderRadius: "9999px",
              fontWeight: 600,
              textDecoration: "none"
            }}
          >
            Haftalık Yorumlar
          </Link>
          <Link
            href="/aylik-burc-yorumlari-astroloji"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#D4AF37",
              color: "#1E3A8A",
              padding: "14px 28px",
              borderRadius: "9999px",
              fontWeight: 600,
              textDecoration: "none"
            }}
          >
            Aylık Yorumlar
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 640px) {
          .zodiac-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 768px) {
          .zodiac-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .zodiac-grid {
            grid-template-columns: repeat(6, 1fr) !important;
          }
        }
        .zodiac-card-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(30, 58, 138, 0.15);
          border-color: #3B82F6 !important;
        }
      `}</style>
    </section>
  );
}
