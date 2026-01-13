import { MetadataRoute } from "next";
import { zodiacSigns } from "@/lib/zodiac-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.demetbaltaci.com";
  const now = new Date();

  // Ana sayfa - en yüksek öncelik
  const homePage: MetadataRoute.Sitemap = [{
    url: baseUrl,
    lastModified: now,
    changeFrequency: "daily",
    priority: 1,
  }];

  // Günlük güncellenen sayfalar
  const dailyPages: MetadataRoute.Sitemap = [
    "/gunluk-burc-yorumlari",
    "/yeniay-burc-yorumu-astroloji",
    "/dolunay-burc-yorumu-astroloji",
  ].map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  // Haftalık güncellenen sayfalar
  const weeklyPages: MetadataRoute.Sitemap = [
    "/haftalik-burc-yorumlari-astroloji",
  ].map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Aylık güncellenen sayfalar
  const monthlyPages: MetadataRoute.Sitemap = [
    "/aylik-burc-yorumlari-astroloji",
    "/2026-burc-yorumlari-astroloji",
  ].map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Statik sayfalar
  const staticPages: MetadataRoute.Sitemap = [
    "/tum-burclar-astroloji",
    "/dogum-haritasi-astroloji-danismanlik",
    "/astroloji-danismanlik",
    "/danismanlik/iliski-astroloji-sinastri",
    "/danismanlik/solar-return-yillik-ongoru",
    "/danismanlik/bebek-cocuk-ergen-dogum-haritasi",
    "/temel-seviye-astroloji-egitim",
    "/temel-seviye-astroloji-egitimi",
    "/astroloji-nedir",
    "/dogum-haritasi-nedir",
    "/yukselen-burc-nedir",
    "/astrolojide-gezegenler",
    "/astrolojide-acilar",
    "/astroloji-sikca-sorulan-sorular-sss",
    "/hakkimizda",
    "/iletisim",
  ].map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic zodiac pages
  const zodiacPages: MetadataRoute.Sitemap = [];

  zodiacSigns.forEach((sign) => {
    // Burç özellikleri sayfası
    zodiacPages.push({
      url: `${baseUrl}/tum-burclar-astroloji/${sign.id}-burcu-ozellikleri`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });

    // Haftalık yorum sayfası
    zodiacPages.push({
      url: `${baseUrl}/haftalik-burc-yorumlari-astroloji/${sign.id}-burcu-haftalik-yorumu`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    // Aylık yorum sayfası
    zodiacPages.push({
      url: `${baseUrl}/aylik-burc-yorumlari-astroloji/${sign.id}-burcu-aylik-yorumu`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });

    // 2026 yorum sayfası
    zodiacPages.push({
      url: `${baseUrl}/2026-burc-yorumlari-astroloji/${sign.id}-burcu-2026-yorumu`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    });
  });

  return [...homePage, ...dailyPages, ...weeklyPages, ...monthlyPages, ...staticPages, ...zodiacPages];
}
