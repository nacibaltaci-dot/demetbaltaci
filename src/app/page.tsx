import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import DailyVideoSection from "@/components/DailyVideoSection";
import RisingSignCalculator from "@/components/RisingSignCalculator";
import EducationCTASection from "@/components/EducationCTASection";
import YouTubeStatsSection from "@/components/YouTubeStatsSection";
import InstagramChannelsSection from "@/components/InstagramChannelsSection";
import ZodiacGridSection from "@/components/ZodiacGridSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Daily Video Section */}
      <DailyVideoSection />

      {/* Yükselen Burç Hesaplama Modülü */}
      <RisingSignCalculator />
      <div style={{ textAlign: "center", marginTop: "-24px", paddingBottom: "16px" }}>
        <Link
          href="/yukselen-burc-hesaplama"
          style={{ color: "#1E3A8A", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}
        >
          Yükselen burç nedir, nasıl hesaplanır? Detaylı sayfa →
        </Link>
      </div>

      {/* Education CTA Section */}
      <EducationCTASection />

      {/* YouTube Stats Section */}
      <YouTubeStatsSection />

      {/* Instagram Channels Section */}
      <InstagramChannelsSection />

      {/* Zodiac Grid Section */}
      <ZodiacGridSection />
    </>
  );
}
