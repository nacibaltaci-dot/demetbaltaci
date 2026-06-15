// Yükselen Burç hesaplama motoru
// NOT: Astronomi mantığı yukselen-burc-demo.html'den BİREBİR taşınmıştır, değiştirilmemiştir.
// Saat dilimi yalnızca Intl.DateTimeFormat (IANA) ile hesaplanır — elle DST kuralı yoktur.

export interface SignInfo {
  tr: string;
  g: string;
  el: string;
  t: string;
}

// Ülke/şehir verisi (26 ülke / 364 şehir) risingSignLocations.ts'ten gelir.
// COUNTRIES ve tipler buradan re-export edilir; mevcut import'lar ("@/lib/risingSign") değişmez.
export type { City, Country } from "./risingSignLocations";
export { COUNTRIES } from "./risingSignLocations";

/* ---------- Burç verisi ---------- */
export const SIGNS: SignInfo[] = [
  { tr: "Koç", g: "♈", el: "Ateş", t: "Cesur, enerjik ve doğrudan bir ilk izlenim." },
  { tr: "Boğa", g: "♉", el: "Toprak", t: "Sakin, güven veren ve sıcak bir duruş." },
  { tr: "İkizler", g: "♊", el: "Hava", t: "Meraklı, konuşkan ve hızlı zekâlı bir hava." },
  { tr: "Yengeç", g: "♋", el: "Su", t: "Şefkatli, korumacı ve duygusal bir ilk izlenim." },
  { tr: "Aslan", g: "♌", el: "Ateş", t: "Karizmatik, sıcak ve dikkat çeken bir duruş." },
  { tr: "Başak", g: "♍", el: "Toprak", t: "Zarif, düzenli ve özenli bir görünüm." },
  { tr: "Terazi", g: "♎", el: "Hava", t: "Zarif, uyumlu ve cana yakın bir hava." },
  { tr: "Akrep", g: "♏", el: "Su", t: "Yoğun, gizemli ve etkileyici bir duruş." },
  { tr: "Yay", g: "♐", el: "Ateş", t: "Özgür, neşeli ve maceracı bir ilk izlenim." },
  { tr: "Oğlak", g: "♑", el: "Toprak", t: "Ciddi, ağırbaşlı ve güven veren bir duruş." },
  { tr: "Kova", g: "♒", el: "Hava", t: "Özgün, farklı ve zihinsel bir hava." },
  { tr: "Balık", g: "♓", el: "Su", t: "Yumuşak, hayalperest ve sezgisel bir ilk izlenim." },
];

/* ---------- Astronomi (demo'dan birebir) ---------- */
const rad = (d: number) => (d * Math.PI) / 180;
const deg = (r: number) => (r * 180) / Math.PI;
const norm360 = (x: number) => {
  x %= 360;
  return x < 0 ? x + 360 : x;
};

export function julianDay(Y: number, M: number, D: number, utHour: number): number {
  if (M <= 2) {
    Y -= 1;
    M += 12;
  }
  const A = Math.floor(Y / 100),
    B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (Y + 4716)) + Math.floor(30.6001 * (M + 1)) + D + B - 1524.5 + utHour / 24;
}

export function ascendant(JD: number, lat: number, lon: number): number {
  const T = (JD - 2451545) / 36525;
  const g = 280.46061837 + 360.98564736629 * (JD - 2451545) + 0.000387933 * T * T - (T * T * T) / 38710000;
  const lst = norm360(norm360(g) + lon),
    e = 23.4392911 - 0.0130042 * T;
  const r = rad(lst),
    er = rad(e),
    p = rad(lat);
  return norm360(deg(Math.atan2(Math.cos(r), -(Math.sin(r) * Math.cos(er) + Math.tan(p) * Math.sin(er)))));
}

/* Resmi IANA veritabanından, verilen tarihteki gerçek UTC farkı (geçmiş yaz saati dahil) */
export function tzOffsetHours(zone: string, Y: number, M: number, D: number, h: number, mi: number): number | null {
  try {
    const asUTC = Date.UTC(Y, M - 1, D, h, mi);
    const dtf = new Intl.DateTimeFormat("en-US", {
      timeZone: zone,
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    const p: Record<string, string> = {};
    dtf.formatToParts(new Date(asUTC)).forEach((x) => (p[x.type] = x.value));
    const shown = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute);
    return (shown - asUTC) / 3600000;
  } catch {
    return null;
  }
}

/* ---------- Yüksek seviyeli yardımcı ---------- */
export interface RisingSignResult {
  sign: SignInfo;
  index: number;
  degreeInSign: number; // 0-30 arası
  ascendant: number; // 0-360 ekliptik boylam
  offset: number; // kullanılan UTC farkı
}

/**
 * Yükselen burcu hesaplar.
 * @param offset UTC farkı saat cinsinden (manuel modda doğrudan, şehir modunda tzOffsetHours sonucu)
 */
export function computeRisingSign(
  Y: number,
  M: number,
  D: number,
  hh: number,
  mm: number,
  lat: number,
  lon: number,
  offset: number
): RisingSignResult {
  const ut = hh + mm / 60 - offset;
  const asc = ascendant(julianDay(Y, M, D, ut), lat, lon);
  const index = Math.floor(asc / 30);
  const degInSign = asc % 30;
  return {
    sign: SIGNS[index],
    index,
    degreeInSign: degInSign,
    ascendant: asc,
    offset,
  };
}
