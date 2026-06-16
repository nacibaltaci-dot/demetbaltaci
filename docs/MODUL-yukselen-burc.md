# Yükselen Burç Modülü — Teknik Belge

Yayına alındı: 16 Haziran 2026 · Canlı: https://demetbaltaci.com/yukselen-burc-hesaplama

## Ne yapar
Ziyaretçi doğum tarihi + saati + yeri (ülke/şehir) girer, **yükselen burcunu**
hesaplar. Amaç: burç yorumları yükselen burçtan izlendiği için, yükselenini
bilmeyenleri siteye çekmek ve danışmanlığa (rektifikasyon → WhatsApp) yönlendirmek.

## Nerede görünür
1. **Ana sayfa** — günlük video bölümünün altında (kompakt) + "Detaylı sayfa →" linki.
2. **Ayrı SEO sayfası** — `/yukselen-burc-hesaplama` (araç + içerik + SSS + schema).
3. **Menü** — "Yükselen Burcunu Bul" → bu sayfaya.

## Dosyalar
| Dosya | Görevi |
|---|---|
| `src/lib/risingSign.ts` | Hesaplama motoru (julianDay, ascendant, tzOffsetHours) + tipler. COUNTRIES'i locations'tan re-export eder. |
| `src/lib/risingSignLocations.ts` | 26 ülke / 364 şehir verisi (koordinat + IANA saat dilimi). |
| `src/lib/risingSignDescriptions.ts` | 12 yükselen burç açıklama metni (SEO içeriği). |
| `src/components/RisingSignCalculator.tsx` | `"use client"` arayüz: form, sonuç, CTA'lar, paylaşım. |
| `src/app/yukselen-burc-hesaplama/page.tsx` | SEO sayfası: H1 → araç → H2'ler → SSS → 5 JSON-LD schema. |
| `src/components/Header.tsx` | Menüde "Yükselen Burcunu Bul" linki. |
| `src/app/sitemap.ts` | /yukselen-burc-hesaplama eklendi. |

## Hesaplama mantığı (DOĞRULANMIŞ — değiştirme)
- Yükselen = doğum anında doğu ufkunda yükselen burç (1. ev).
- Girdi: tarih, tam saat, koordinat (şehirden), saat dilimi.
- **Saat dilimi `Intl.DateTimeFormat` (IANA) ile bulunur** — geçmiş yaz saati dahil
  otomatik doğru. ELLE DST KURALI YAZMA (eski tarihlerde hata veriyordu).
- Regresyon testi: **Balıkesir 09.10.1970 19:15 → Boğa ~23°** (offset +2). Bu
  test her değişiklikten sonra doğru kalmalı.
- Doğruluk girilen bilgi kadar iyidir; saat bilinmiyorsa → rektifikasyon (WhatsApp).

## Dönüşüm akışı (iş hedefi)
- Sonuç + "X yükselen için bu haftanın videosu" → ilgili haftalık burç sayfası.
  Slug deseni: `/haftalik-burc-yorumlari-astroloji/{id}-burcu-haftalik-yorumu`
  (id'ler: koc, boga, ikizler, yengec, aslan, basak, terazi, akrep, yay, oglak,
  kova, balik — SIGNS sırasıyla).
- "Tam saatinden emin değil misin?" → WhatsApp rektifikasyon (`905076075017`).
- "Sonucu Paylaş" → mobilde native paylaşım, masaüstünde WhatsApp/X/Facebook.

## SEO
- Hedef kelimeler: yükselen burç hesaplama / nasıl bulunur / nasıl hesaplanır /
  yükselenim ne / öğrenme / 2026.
- Schema (JSON-LD): FAQPage, HowTo, WebApplication, BreadcrumbList, Person.
- 12 yükselen metni "akrep yükselen özellikleri" gibi long-tail aramalar için.

## Bilinen/sonraki işler
- 12 metin Demet onayından geçti (16 Haz). İlerde üslup güncellemesi isterse
  sadece `risingSignDescriptions.ts` düzenlenir.
- Şehir listesi gerekirse `risingSignLocations.ts`'ten genişletilir.
- İngilizce sürüm ileride: `/en/rising-sign-calculator` + hreflang.
- Paylaşımın görsel kart (Instagram story) versiyonu ileride eklenebilir.
