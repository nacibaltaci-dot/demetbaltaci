# 📋 YÖNETİM PANOSU — Hafta 2 (3 – 9 Kas 2026) · rev 2
> 5 Kas 2026 · YONETIM-1 · sonraki yenileme: Pazartesi 10 Kas · zemin: prod = 4 Ağu 2026 derlemesi (numarasız, kaynak OPS-1 doğrular) · main 0bf5ac0 (16 Haz) · karar son #11 · kural: NACI-SISTEM KURALLAR-EVRENSEL v1.8 (SON-KURAL 81) · çekirdek damgası: NACI-SISTEM v2.10 · YONETIM-SISTEMI v1.0.5 · AKIŞ okundu: YONETIM-1-3

## 1 · HAT TABLOSU
| Hat | Hâl | Bu hafta gün | Sıradaki iş paketi | Blokaj / bağımlılık | Son deploy |
|---|---|---|---|---|---|
| 🔴 OPS | AKTİF-KOD (ilk sıra) | 1 | OPS-1 ZEMİN KURTARMA (commit + push + build + canlı karşılaştırma + yol düzeltmesi) | — | 4 Ağu (kaynak ?) |
| 🟠 GEO-SEO | AKTİF-SPEC → OPS-1 bitince AKTİF-KOD | 2 | PLAN-GEO-SEO-1 yazımı → GEO-SEO-1 (canonical + hreflang + danışmanlık içeriği) | ⛔ OPS-1 | — |
| 🟠 WEB | AKTİF-SPEC (kart yok) | 1 | WEB-1 = PLAN-WEB-1 yazımı (yeniden düzenleme 1–2 günlük paketlere) | OPS-1 (kod için) | 4 Ağu |
| ⚪ REKLAM | AÇILMADI | 0 | Pixel ID gelince REKLAM-1 (Pixel + KVKK rıza) | Pixel ID yok | — |
| ⚪ WHATSAPP | AÇILMADI | 0 | KARAR #4 (webhook yeri) sonrası | ⛔ KARAR #4 | — |
| ⚪ İÇERİK | AÇILMADI | 0 | açıklama yazım standardı | "yazar kim" cevabı | — |
| ⚪ PARA | AÇILMADI | 0 | GA4 dönüşüm olayları + kupon tek kaynak | GA4 erişimi | — |
| ⚪ SUNUM | AÇILMADI | 0 | talep gelince | — | — |
| 🟠 VIDEO | AKTİF-SPEC (5 Kas'ta doğdu; kod yok, deploy yok) | 1 | V-0 ORTAM + İLK 10 SN (video/ iskeleti, sürüm kanıtı, 10 sn deneme, PLAN-VIDEO-1) | KARAR #11 ses/avatar (yalnız avatar/klon için) | — (deploy etmez) |
| 🧠 YÖNETİM | AKTİF | 1 | kurulum commit'i · Pazartesi turu | — | — |
Toplam gün = 5 (OPS 1 · GEO-SEO 1 · WEB 1 · VIDEO 1 · YÖNETİM 1) · AKTİF-KOD aynı gün yalnız 1: sıra OPS-1 → GEO-SEO-1 (WEB kod'a girmez; VIDEO kod değil, ayrı ortam)
⚠️ Hafta 1 (27 Eki–2 Kas) hiçbir hat açılmadı; kurulum commit'i yapılmadı. Hafta 2 aynı sırayla başlar.

## 2 · DEPLOY KUYRUĞU
| Sıra | Deploy | Hat | İçerik | main'de bekleyen yabancı commit | Durum |
|---|---|---|---|---|---|
| 1 | #1 (yeni sayım) | GEO-SEO | GEO-SEO-1: canonical + hreflang (+ danışmanlık içeriği) | OPS-1 zemin commit'i (canlıyla aynı — güvenli) | bekliyor (OPS-1 sonrası) |
Deploy numarası bu panodan itibaren sayılır (#1 = ilk PANO sıralı deploy). Deploy yalnız Naci terminalinden (rsync + ssh), § -1 beyanıyla.

## 3 · BORÇLAR (YÖNETİM takibinde)
- ⛔ **KURULUM COMMIT'İ 27 Eki'den beri bekliyor** (docs/ + claude/ izlenmiyor — 1 hafta, KURAL 58/61 borcu); VIDEO hattı aynı commit'e eklendi, kart yenilendi
- OPS: commit'lenmemiş 18 Haz kodu (OPS-1) · yol tutarsızlığı CLAUDE.md/DEPLOY (OPS-1) · tazelik ritmi yok (KARAR #9) · nabız yok (OPS-3)
- GEO-SEO: canonical kanaması (1 Eki'den beri) · hreflang 404 · 2027 sayfaları yok (kapı 15 Kas) · ISLETIM üç belge yok
- SİSTEM: OTURUM-CEKIRDEK 14 Tem'den bu kurulumla v2.10'a çekildi · `.claude/settings.json` kalkan yok (OPS-1'e not) · NACI-SISTEM SENKRON BORCU: SerApp §4.1 + §5.2 evrensele taşınmadı (NACI-SISTEM'in işi, bu projenin değil)
- 1 Eki'den kalan açık sorular: 4 Ağu kaynağı (OPS-1 kanıtlar) · açıklama yazarı · 2027 video tarihi · danışmanlık hizmetleri güncel mi · GSC/GA4/Bing erişimi

## 4 · AÇIK KARARLAR (Naci)
| # | Karar | Durum |
|---|---|---|
| 4 | WhatsApp webhook nerede koşar (a VPS ayrı servis · b SerApp backend · c webhook'suz) — öneri (a) | AÇIK, WHATSAPP açılmadan |
| 5 | İngilizce site: hreflang şimdi kalkar (GEO-SEO-1); /en/ yapılacak mı → PLAN-WEB-1'de | AÇIK |
| 11 | VIDEO ses/avatar: (a) Demet'in yüzü/sesi — HeyGen avatar + ElevenLabs klon, yazılı rıza + kayıt gerekir (KVKK/kişilik hakkı) · (b) sunucusuz metin+görsel+altyazı · (c) karışık (gerçek çekim DONDUR + grafik) — Naci cevaplamadan avatar/klon başlamaz | AÇIK, VIDEO-1 ilk sorusu |
| 9 | Tazelik ritmi: haftalık elle build+deploy mi, sunucuda zamanlanmış build mi (KURAL 43 istisnası) — öneri: sunucuda günlük, kayıtlı istisna | AÇIK, OPS-2 öncesi |
| — | Pixel ID · GA4/GSC erişimi · açıklama yazarı · 2027 video tarihi | bilgi bekleniyor |

## 5 · KOTA NOTU (Naci bildirir; Claude uydurmaz)
— (ekran paylaşılmadı)
