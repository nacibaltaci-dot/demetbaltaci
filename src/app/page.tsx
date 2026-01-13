import HeroSection from "@/components/HeroSection";
import DailyVideoSection from "@/components/DailyVideoSection";
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
