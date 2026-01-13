export interface ZodiacSign {
  id: string;
  name: string;
  nameEn: string;
  symbol: string;
  dates: string;
  datesEn: string;
  element: string;
  elementEn: string;
  planet: string;
  planetEn: string;
}

export const zodiacSigns: ZodiacSign[] = [
  {
    id: "koc",
    name: "Koç",
    nameEn: "Aries",
    symbol: "\u2648",
    dates: "21 Mart - 19 Nisan",
    datesEn: "March 21 - April 19",
    element: "Ateş",
    elementEn: "Fire",
    planet: "Mars",
    planetEn: "Mars",
  },
  {
    id: "boga",
    name: "Boğa",
    nameEn: "Taurus",
    symbol: "\u2649",
    dates: "20 Nisan - 20 Mayıs",
    datesEn: "April 20 - May 20",
    element: "Toprak",
    elementEn: "Earth",
    planet: "Venüs",
    planetEn: "Venus",
  },
  {
    id: "ikizler",
    name: "İkizler",
    nameEn: "Gemini",
    symbol: "\u264A",
    dates: "21 Mayıs - 20 Haziran",
    datesEn: "May 21 - June 20",
    element: "Hava",
    elementEn: "Air",
    planet: "Merkür",
    planetEn: "Mercury",
  },
  {
    id: "yengec",
    name: "Yengeç",
    nameEn: "Cancer",
    symbol: "\u264B",
    dates: "21 Haziran - 22 Temmuz",
    datesEn: "June 21 - July 22",
    element: "Su",
    elementEn: "Water",
    planet: "Ay",
    planetEn: "Moon",
  },
  {
    id: "aslan",
    name: "Aslan",
    nameEn: "Leo",
    symbol: "\u264C",
    dates: "23 Temmuz - 22 Ağustos",
    datesEn: "July 23 - August 22",
    element: "Ateş",
    elementEn: "Fire",
    planet: "Güneş",
    planetEn: "Sun",
  },
  {
    id: "basak",
    name: "Başak",
    nameEn: "Virgo",
    symbol: "\u264D",
    dates: "23 Ağustos - 22 Eylül",
    datesEn: "August 23 - September 22",
    element: "Toprak",
    elementEn: "Earth",
    planet: "Merkür",
    planetEn: "Mercury",
  },
  {
    id: "terazi",
    name: "Terazi",
    nameEn: "Libra",
    symbol: "\u264E",
    dates: "23 Eylül - 22 Ekim",
    datesEn: "September 23 - October 22",
    element: "Hava",
    elementEn: "Air",
    planet: "Venüs",
    planetEn: "Venus",
  },
  {
    id: "akrep",
    name: "Akrep",
    nameEn: "Scorpio",
    symbol: "\u264F",
    dates: "23 Ekim - 21 Kasım",
    datesEn: "October 23 - November 21",
    element: "Su",
    elementEn: "Water",
    planet: "Plüton",
    planetEn: "Pluto",
  },
  {
    id: "yay",
    name: "Yay",
    nameEn: "Sagittarius",
    symbol: "\u2650",
    dates: "22 Kasım - 21 Aralık",
    datesEn: "November 22 - December 21",
    element: "Ateş",
    elementEn: "Fire",
    planet: "Jüpiter",
    planetEn: "Jupiter",
  },
  {
    id: "oglak",
    name: "Oğlak",
    nameEn: "Capricorn",
    symbol: "\u2651",
    dates: "22 Aralık - 19 Ocak",
    datesEn: "December 22 - January 19",
    element: "Toprak",
    elementEn: "Earth",
    planet: "Satürn",
    planetEn: "Saturn",
  },
  {
    id: "kova",
    name: "Kova",
    nameEn: "Aquarius",
    symbol: "\u2652",
    dates: "20 Ocak - 18 Şubat",
    datesEn: "January 20 - February 18",
    element: "Hava",
    elementEn: "Air",
    planet: "Uranüs",
    planetEn: "Uranus",
  },
  {
    id: "balik",
    name: "Balık",
    nameEn: "Pisces",
    symbol: "\u2653",
    dates: "19 Şubat - 20 Mart",
    datesEn: "February 19 - March 20",
    element: "Su",
    elementEn: "Water",
    planet: "Neptün",
    planetEn: "Neptune",
  },
];

export function getZodiacById(id: string): ZodiacSign | undefined {
  return zodiacSigns.find((sign) => sign.id === id);
}

export function getZodiacByNameEn(nameEn: string): ZodiacSign | undefined {
  return zodiacSigns.find(
    (sign) => sign.nameEn.toLowerCase() === nameEn.toLowerCase()
  );
}

// SEO-friendly slug mappings
export const zodiacSlugMappings = {
  haftalik: zodiacSigns.map(s => ({ id: s.id, slug: `${s.id}-burcu-haftalik-yorumu` })),
  aylik: zodiacSigns.map(s => ({ id: s.id, slug: `${s.id}-burcu-aylik-yorumu` })),
  yillik2026: zodiacSigns.map(s => ({ id: s.id, slug: `${s.id}-burcu-2026-yorumu` })),
  burclar: zodiacSigns.map(s => ({ id: s.id, slug: `${s.id}-burcu-ozellikleri` })),
};

export function getZodiacBySlug(slug: string): ZodiacSign | undefined {
  // Extract zodiac id from slug (e.g., "koc-burcu-haftalik-yorumu" -> "koc")
  const id = slug.split('-burcu-')[0];
  return getZodiacById(id);
}

// Burç Instagram hesapları
export const zodiacInstagramLinks: Record<string, string> = {
  koc: "https://www.instagram.com/koc_burcu_astroloji/",
  boga: "https://www.instagram.com/boga_burcu_astroloji/",
  ikizler: "https://www.instagram.com/ikizler_burcu_astroloji/",
  yengec: "https://www.instagram.com/yengec_burcu_astroloji/",
  aslan: "https://www.instagram.com/aslan_burcu_astroloji/",
  basak: "https://www.instagram.com/basak_burcu_astroloji/",
  terazi: "https://www.instagram.com/terazi_burcu_astroloji/",
  akrep: "https://www.instagram.com/akrep_burcu_astroloji/",
  yay: "https://www.instagram.com/yay_burcu_astroloji/",
  oglak: "https://www.instagram.com/oglak_burcu__astroloji/",
  kova: "https://www.instagram.com/kova_burcu_astroloji__/",
  balik: "https://www.instagram.com/balik_burcu_astroloji__/",
};

export function getZodiacInstagramLink(id: string): string {
  return zodiacInstagramLinks[id] || "";
}
