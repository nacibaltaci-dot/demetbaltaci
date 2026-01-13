import { Metadata } from "next";
import Link from "next/link";
import DailyVideoSection from "@/components/DailyVideoSection";

// Bugünün tarihini al
const today = new Date();
const day = today.getDate();
const monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
const month = monthNames[today.getMonth()];
const year = today.getFullYear();

export const metadata: Metadata = {
  title: `Günlük Burç Yorumları ${day} ${month} ${year} | Bugünün Burç Yorumu`,
  description: `${day} ${month} ${year} günlük burç yorumları. Bugün Koç, Boğa, İkizler, Yengeç, Aslan, Başak, Terazi, Akrep, Yay, Oğlak, Kova ve Balık burçlarını neler bekliyor? Astrolog Demet Baltacı ile günlük astroloji tahminleri.`,
  keywords: [
    "günlük burç yorumu",
    "bugünün burç yorumu",
    `${day} ${month} ${year} burç yorumu`,
    "günlük burç yorumları",
    "bugün hangi burç şanslı",
    "günlük astroloji",
    "demet baltacı günlük yorum",
  ],
  openGraph: {
    title: `Günlük Burç Yorumları - ${day} ${month} ${year}`,
    description: `Bugünün tüm burç yorumları. Astrolog Demet Baltacı ile ${day} ${month} ${year} günlük astroloji tahminleri.`,
    type: "article",
    publishedTime: new Date().toISOString(),
  },
};

export default function GunlukYorumlarPage() {
  return (
    <div style={{ padding: "48px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Breadcrumb */}
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", fontSize: "14px", color: "#6B7280" }}>
          <Link href="/" style={{ color: "#1E3A8A", textDecoration: "none" }}>Ana Sayfa</Link>
          <span>&gt;</span>
          <span>Günlük Burç Yorumları</span>
        </nav>
      </div>

      {/* Video Section - Ana sayfadaki ile aynı */}
      <DailyVideoSection />
    </div>
  );
}
