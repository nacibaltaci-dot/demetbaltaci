# decisions.md — demetbaltaci.com
🕔 Son senkron: YONETIM-1 — 27 Eki 2026

> Format: tarih · karar veren · bağlam · 5 gerekçe · karşı görüş. Append-only. Kaynak "GRUP turu" ise belirtilir (GRUP-MODU.md §2.6).
> **Mühür notu:** #1–#9 YONETIM-1'de Claude önerdi; Naci'nin kurulum commit kartını Code'a yapıştırması = #1, #2, #3, #6, #7, #8 için mühür. #4, #5, #9 AÇIK kalır (PANO §4).

## #1 — 1 Ekim 8 fazlı plan hat düzenine dağıldı; 15 Kasım kapısı geçerli (27 Eki 2026 · Naci)
Bağlam: 1 Eki durum analizi raporu (RAPOR-SEO-1EKI.md) 8 fazlı tek hat plan önerdi, onaylanmadan kaldı; 21 Eki YÖNETİM sistemi (KURAL 81) geldi.
Gerekçe: ① tek kişilik kapasitede 8 faz tek hatta sıkışır, hatlar paralel spec/seri kod izin verir ② fazların içeriği değil sırası değişti — bilgi kaybı yok ③ 15 Kas tarihi mevsimin tarihi, bizim değil ④ hat defterleri fazların kapılarını taşır (ölçülebilirlik korunur) ⑤ rapor GEO-SEO kanonu olarak canlı kalır, arşiv değil.
Karşı görüş: tek plan tek hat daha az koordinasyon ister — ama OPS/GEO-SEO/WEB bağımlılıkları zaten üç ayrı iş.

## #2 — OPS-1 zemin commit'i doğrudan main'e (tek seferlik §7.6 istisnası) (27 Eki · Naci)
Bağlam: 18 Haz kodu zaten canlıda; hat dalı kuralı "kabul edilmemiş paket main'e girmez" der.
Gerekçe: ① bu kod kabul edilmiş, canlıda 2+ ay ② dal açmak "canlı ≠ main" durumunu uzatır ③ kabul ölçütü canlıyla fark sıfır — en sert kabul ④ sonraki her hat dalı temiz main'den çıkar ⑤ rollback noktası netleşir.
Karşı görüş: istisna alışkanlık olabilir — bu yüzden "tek seferlik" yazılı, OPS-2'den itibaren `hat/ops`.

## #3 — GEO-SEO-1 = canonical + hreflang düzeltmesi + ilk içerik, TEK paket; "teknik önce" ihlali değil (27 Eki · Naci)
Bağlam: Naci kuralı "önce içerik, sonra teknik"; 71/72 sayfa canonical = ana sayfa.
Gerekçe: ① canonical kanaması içeriği görünmez kılar — düzeltme içeriğin ön şartı ② tek satırlık iş, ayrı "teknik paket" kapasite israfı ③ hreflang 404 aynı dosyada, aynı anda ④ kabul canlı HTML ölçümü ile (KURAL 72/78) ⑤ içerik (danışmanlık + SSS) aynı pakette → "özü olan iş".
Karşı görüş: iki ayrı kabul ölçütü tek pakette — kapı iki adımlı yazıldı.

## #4 — AÇIK: WhatsApp webhook nerede koşar (öneri a: VPS'te ayrı küçük servis)
Bağlam: statik sitede sunucu süreci yok; rehber §3 backend varsayar. Seçenekler a/b/c HAT-WHATSAPP.md'de. WHATSAPP açılmadan verilir.

## #5 — AÇIK: İngilizce site. Karar verilen kısım: hreflang şimdi kalkar (GEO-SEO-1). /en/ yapılıp yapılmayacağı PLAN-WEB-1'de.

## #6 — GÜVENLİK ayrı hat değil: yedek/rollback OPS'ta, KVKK/rıza REKLAM'da (27 Eki · Naci)
Gerekçe: ① tek kişi, 8 hat zaten dikkat sınırı ② statik sitede saldırı yüzeyi dar ③ KVKK Pixel'in ön şartı — REKLAM'ın işi ④ yedek anayasası OPS kanonu ⑤ ihtiyaç doğarsa hat sonradan açılır (AÇILMADI maliyetsiz).

## #7 — GRUP MODU protokolü projeye girdi (27 Eki · Naci · NACI-SISTEM v2.10)
docs/GRUP-MODU.md şablondan üretildi; "GRUP <konu>" komutu YONETIM-SISTEMI.md §6'da; hat değil protokol, her hat kullanır. İlk aday kullanımlar: GEO-SEO AI-görünürlük ölçümü (aylık, 3 platform) · WEB yeniden düzenleme "hedef müşteri gözüyle eleştiri" · REKLAM kreatif.

## #8 — Hat listesi mühürlendi: OPS · GEO-SEO · WEB · REKLAM · WHATSAPP · İÇERİK · PARA · SUNUM + YÖNETİM (27 Eki · Naci)
Gerekçe: §9 çekirdek şablon + projeye özgü (WHATSAPP, İÇERİK, REKLAM); APP yok (mobil yok); BÜYÜME → REKLAM; GÜVENLİK → #6.

## #9 — AÇIK: Tazelik ritmi (OPS-2). Öneri: sunucuda günlük "derle ve yayınla" görevi, KURAL 43'e kayıtlı istisna (gerekçeler RAPOR-SEO-1EKI.md "Faz 2"). Alternatif: haftalık elle build+deploy (Naci terminali). Naci verir.

## #10 — Yeni hat VIDEO (video montaj) açıldı (5 Kas 2026 · Naci)
Bağlam: NACI-SISTEM v2.11 VIDEO-URETIM-REHBERI v0.1 (SerApp SUNUM-1, 1 Kas: HyperFrames + HeyGen + ElevenLabs + whisper-cpp, 2 video KABUL). Rehberin "ilk çoğaltma hedefi" bu proje.
Kapsam: Demet Baltacı astroloji videoları (YouTube/Instagram/site) için prompt'la MP4 üretimi. DIŞI: site kodu (WEB) · SEO (GEO-SEO) · reklam (REKLAM) · yayın takvimi (İÇERİK — VIDEO üretir, İÇERİK yayınlar).
Gerekçe: ① reçete kanıtlı, sıfırdan değil çoğaltma ② Demet'in içerik üretimi zaten video — bu hat ham maddeyi işler, sitenin değil kanalın gücünü büyütür ③ ayrı Node 22 ortamı `video/` altında, site build'ine dokunmaz, deploy değil → OPS/WEB ile çakışmaz ④ rehber v0.2 (9:16 reçetesi) bu projede doğacak — NACI-SISTEM'e geri besleme ⑤ AKTİF-SPEC hâli AKTİF-KOD sınırını (günde 1) yemez.
Karşı görüş: 9. hat tek kişinin dikkatini böler — bu yüzden V-0 küçük (ortam + 10 sn) ve avatar/klon kararı önden.

## #11 — AÇIK: VIDEO ses/avatar (Naci verir; VIDEO-1'in ilk sorusu)
(a) Demet'in kendi yüzü/sesi: HeyGen avatar + ElevenLabs ses klonu → Demet'in yazılı rızası + kayıt oturumu şart (KVKK / kişilik hakkı; rıza belgesi docs/hat/VIDEO/ altında) · (b) sunucusuz: metin + görsel + altyazı (+ seçili stok ses) · (c) karışık: Demet'in gerçek çekimi DONDUR klip, üstüne HyperFrames grafik. Kural: Naci cevaplamadan avatar/klon işi başlamaz; (b) ile 10 sn deneme bloklanmaz.
