// Haftalık burç yorumları playlist ID'leri
export const weeklyPlaylists: Record<string, string> = {
  koc: "PL4kKxVfkjqJrqjbsopxY5zgqr-9pEl9Fs",
  boga: "PL4kKxVfkjqJopG6-AuhTzJOvqOGBx8hiO",
  ikizler: "PL4kKxVfkjqJpb4LrEPTrYwKbMXeVmCFqQ",
  yengec: "PL4kKxVfkjqJree2RnESrxM-WyTQv5ji9v",
  aslan: "PL4kKxVfkjqJrb4qHjFLjSeYdK0_UpYDou",
  basak: "PL4kKxVfkjqJoQk0yXNk3wvCxmfEbOhlQI",
  terazi: "PL4kKxVfkjqJrkW2_fs2rlymR64AWe3a5j",
  akrep: "PL4kKxVfkjqJpvBqBydQ8GS1QVNb8hOWa1",
  yay: "PL4kKxVfkjqJpdKSgNBQmBri5wN3egx4Vc",
  oglak: "PL4kKxVfkjqJqDQBtd-tPvI70-OWaFmImL",
  kova: "PL4kKxVfkjqJombAj72x8QKosXS8cLZEzj",
  balik: "PL4kKxVfkjqJrse8LAOVG0ENbG3V1R3XCK",
};

// Aylık burç yorumları playlist ID'leri
export const monthlyPlaylists: Record<string, string> = {
  koc: "PL4kKxVfkjqJrPysQ_Lp7bJzktVDBgKf2N",
  boga: "PL4kKxVfkjqJoB-EuGfEv82qoDaYGWCF5t",
  ikizler: "PL4kKxVfkjqJqYFPR-EjC2OO4MKpbYESah",
  yengec: "PL4kKxVfkjqJpendUntx1Jgics63mI_-OP",
  aslan: "PL4kKxVfkjqJroyBFqF7CbmXxK737WJ4kx",
  basak: "PL4kKxVfkjqJrvQ4AoElMq59gIuW7Hgrhx",
  terazi: "PL4kKxVfkjqJriSfvgMQdyeypUdQyKDu7H",
  akrep: "PL4kKxVfkjqJo0ZXD8X3JHmIP6t0VHm3GA",
  yay: "PL4kKxVfkjqJqvYq11VieGitJvPA4EWwPN",
  oglak: "PL4kKxVfkjqJp49WvKC__bzDI52i-r6JDF",
  kova: "PL4kKxVfkjqJrfWkhoenNUAws-T7mdNpdZ",
  balik: "PL4kKxVfkjqJrwWnlM5Dl-Z6tGVniyqkGi",
};

// Yeniay ve Dolunay playlist ID'leri
export const moonPlaylists = {
  yeniay: "PL4kKxVfkjqJrljqMI5yfo4oxDyISh_oMH",
  dolunay: "PL4kKxVfkjqJpQgRRiuAjavVis90Jnv1ql",
};

// Astroloji Eğitimi playlist ID
export const educationPlaylistId = "PL4kKxVfkjqJoJHjKChw59pzIG7JA4FR8B";

export function getEducationPlaylistId(): string {
  return educationPlaylistId;
}

export function getYeniayPlaylistId(): string {
  return moonPlaylists.yeniay;
}

export function getDolunayPlaylistId(): string {
  return moonPlaylists.dolunay;
}

// 2026 yıllık burç yorumları video ID'leri (tekil videolar)
export const yearlyVideos2026: Record<string, string> = {
  koc: "xGkIsebq-U4",
  boga: "l3i6IORsH-M",
  ikizler: "DBuAecZ-kAQ",
  yengec: "j0NE7sdTnME",
  aslan: "OdtgHE2MSaM",
  basak: "cP0gXgQ4dhA",
  terazi: "8uJwIBaoGp4",
  akrep: "POpjRhSlIkI",
  yay: "ejjK3BQPpKU",
  oglak: "yj0s7z5I4EU",
  kova: "GwBII1ssg7c",
  balik: "QrDANpcNLZc",
};

// Playlist ID'sini al
export function getWeeklyPlaylistId(zodiacId: string): string | null {
  return weeklyPlaylists[zodiacId] || null;
}

export function getMonthlyPlaylistId(zodiacId: string): string | null {
  return monthlyPlaylists[zodiacId] || null;
}

export function getYearly2026VideoId(zodiacId: string): string | null {
  return yearlyVideos2026[zodiacId] || null;
}
