# HAT-WHATSAPP — WhatsApp Cloud API            son: 27 Eki 2026 · oturum: — · hâl: AÇILMADI
AMAÇ: Rehberin "1 günde kur" testi; takipçi karşılama + randevu hatırlatma + kampanya duyurusu (opt-in) · KANON: NACI-SISTEM/WHATSAPP-CLOUD-API-REHBERI.md (§1, §4, §6) · (yazılacak) docs/WHATSAPP.md · PLAN-WHATSAPP-1.md
DURUM (belgeye göre): sitede yalnız wa.me tıkla-yaz butonu (905076075017) · Cloud API hesabı, şablon, webhook, opt-in altyapısı yok
AÇIK İŞ PAKETİ: yok · ⛔ KARAR #4 verilmeden açılmaz: webhook (gelen mesaj ucu) statik sitede koşamaz — (a) aynı VPS'te ayrı küçük servis (öneri) · (b) SerApp backend'inde çok-kiracılı kanal · (c) webhook'suz, yalnız giden + wa.me
SIRADAKİ 3: 1) KARAR #4 2) spec işi erken başlatılabilir: Meta işletme doğrulaması (rehber §1, uzun sürer) 3) WHATSAPP-1 hesap + webhook + ilk UTILITY şablon
BULGU: —
BAĞIMLILIK: bu hat → OPS (sunucu servisi, env, pm2 — seçenek a) · bu hat → REKLAM (opt-in/KVKK rıza altyapısı ortak) · ⛔ blokaj: KARAR #4
SON DEPLOY: — · AÇIK VAKA: —
OTURUM GEÇMİŞİ: —
