// SEO Keyword Konfigürasyonu - En çok aranan terimler baz alınarak

export const seoKeywords = {
  // Ana Sayfa
  home: [
    "astrolog demet baltacı",
    "burç yorumları",
    "günlük burç yorumu",
    "astroloji",
    "doğum haritası",
    "burç yorumu 2026",
    "bugünün burç yorumu",
    "haftalık burç yorumu",
    "aylık burç yorumu",
  ],

  // Günlük Burç Yorumları
  daily: [
    "günlük burç yorumu",
    "bugünün burç yorumu",
    "günlük burç yorumları",
    "bugün hangi burç şanslı",
    "günlük astroloji",
    "bugünkü burç yorumu",
  ],

  // Haftalık Burç Yorumları
  weekly: [
    "haftalık burç yorumu",
    "bu hafta burç yorumları",
    "haftalık astroloji",
    "bu hafta hangi burç şanslı",
    "haftanın burç yorumu",
  ],

  // Aylık Burç Yorumları
  monthly: [
    "aylık burç yorumu",
    "bu ay burç yorumları",
    "aylık astroloji",
    "ocak 2026 burç yorumu",
    "ayın burç yorumu",
  ],

  // 2026 Yıllık Burç Yorumları
  yearly2026: [
    "2026 burç yorumları",
    "2026 yılı burç yorumu",
    "2026 astroloji",
    "2026 hangi burç şanslı",
    "yıllık burç yorumu 2026",
  ],

  // Burç Bazlı Keywords
  zodiac: {
    koc: ["koç burcu", "koç burcu özellikleri", "koç burcu yorumu", "koç burcu kadın", "koç burcu erkek", "koç burcu aşk"],
    boga: ["boğa burcu", "boğa burcu özellikleri", "boğa burcu yorumu", "boğa burcu kadın", "boğa burcu erkek", "boğa burcu aşk"],
    ikizler: ["ikizler burcu", "ikizler burcu özellikleri", "ikizler burcu yorumu", "ikizler burcu kadın", "ikizler burcu erkek"],
    yengec: ["yengeç burcu", "yengeç burcu özellikleri", "yengeç burcu yorumu", "yengeç burcu kadın", "yengeç burcu erkek"],
    aslan: ["aslan burcu", "aslan burcu özellikleri", "aslan burcu yorumu", "aslan burcu kadın", "aslan burcu erkek", "aslan burcu aşk"],
    basak: ["başak burcu", "başak burcu özellikleri", "başak burcu yorumu", "başak burcu kadın", "başak burcu erkek"],
    terazi: ["terazi burcu", "terazi burcu özellikleri", "terazi burcu yorumu", "terazi burcu kadın", "terazi burcu erkek"],
    akrep: ["akrep burcu", "akrep burcu özellikleri", "akrep burcu yorumu", "akrep burcu kadın", "akrep burcu erkek", "akrep burcu aşk"],
    yay: ["yay burcu", "yay burcu özellikleri", "yay burcu yorumu", "yay burcu kadın", "yay burcu erkek"],
    oglak: ["oğlak burcu", "oğlak burcu özellikleri", "oğlak burcu yorumu", "oğlak burcu kadın", "oğlak burcu erkek", "oğlak burcu haftalık"],
    kova: ["kova burcu", "kova burcu özellikleri", "kova burcu yorumu", "kova burcu kadın", "kova burcu erkek"],
    balik: ["balık burcu", "balık burcu özellikleri", "balık burcu yorumu", "balık burcu kadın", "balık burcu erkek", "balık burcu aşk"],
  },

  // Danışmanlık
  consultancy: [
    "astroloji danışmanlık",
    "doğum haritası analizi",
    "online astroloji danışmanlık",
    "kişisel doğum haritası",
    "astroloji seansı",
    "sinastri analizi",
    "ilişki uyumu astroloji",
  ],

  // Doğum Haritası
  birthChart: [
    "doğum haritası",
    "doğum haritası nedir",
    "doğum haritası hesaplama",
    "doğum haritası yorumu",
    "natal harita",
    "doğum haritası analizi",
  ],

  // Yükselen Burç
  ascendant: [
    "yükselen burç",
    "yükselen burç nedir",
    "yükselen burç hesaplama",
    "yükselen burç ne demek",
    "ascendant nedir",
  ],

  // Astroloji Eğitim
  education: [
    "astroloji eğitimi",
    "astroloji kursu",
    "astroloji öğren",
    "online astroloji eğitimi",
    "astroloji dersleri",
  ],

  // Yeniay/Dolunay
  moonPhases: [
    "yeniay burç yorumu",
    "dolunay burç yorumu",
    "yeniay etkileri",
    "dolunay etkileri",
    "ay takvimleri astroloji",
  ],

  // Gezegenler
  planets: [
    "astrolojide gezegenler",
    "retrolar",
    "merkür retrosu",
    "venüs retrosu",
    "gezegen geçişleri",
  ],
};

// Sayfa bazlı meta description şablonları
export const seoDescriptions = {
  dailyZodiac: (signName: string, date: string) =>
    `${signName} burcu ${date} günlük burç yorumu. Astrolog Demet Baltacı ile ${signName} burcunun bugünkü aşk, kariyer, sağlık ve para yorumları.`,

  weeklyZodiac: (signName: string) =>
    `${signName} burcu haftalık yorum. Bu hafta ${signName} burcunu neler bekliyor? Astrolog Demet Baltacı ile haftalık astroloji tahminleri.`,

  monthlyZodiac: (signName: string, month: string) =>
    `${signName} burcu ${month} aylık burç yorumu. ${signName} burcunun bu ayki aşk, kariyer ve genel yorumları. Astrolog Demet Baltacı.`,

  yearlyZodiac: (signName: string, year: string) =>
    `${signName} burcu ${year} yıllık burç yorumu. ${year} yılında ${signName} burcunu neler bekliyor? Detaylı astroloji analizi.`,

  zodiacGeneral: (signName: string) =>
    `${signName} burcu özellikleri, karakteri ve uyumlu olduğu burçlar. ${signName} burcu hakkında tüm bilgiler. Astrolog Demet Baltacı.`,
};

// Structured Data için kişi bilgileri
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Demet Baltacı",
  jobTitle: "Astrolog",
  url: "https://www.demetbaltaci.com",
  sameAs: [
    "https://www.youtube.com/@demet.baltaci",
    "https://www.instagram.com/astrofoni",
  ],
  knowsAbout: ["Astroloji", "Burç Yorumları", "Doğum Haritası", "Natal Harita"],
};
