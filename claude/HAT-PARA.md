# HAT-PARA — Gelir ölçümü: danışmanlık talebi, Udemy, kitap            son: 27 Eki 2026 · oturum: — · hâl: AÇILMADI
AMAÇ: "Site para kazandırıyor mu" sorusuna sayı ile cevap: WhatsApp tıklaması, Udemy kupon/satış, kitap tıklaması · KANON: (yazılacak) PARA-OLCUM.md · PLAN-PARA-1.md
DURUM (belgeye göre): fiyat sitede yok, her şey WhatsApp'a gider · Udemy kupon merkezi helper (`getUdemyUrl()`/`getCurrentCoupon()`, statik: yalnız redeploy'da değişir) · GA4 var, dönüşüm olayı tanımı yok · kupon ASTRO9 (ham HTML) / ASTRO22 (tarayıcı) tutarsız
AÇIK İŞ PAKETİ: yok · ilk paket: PARA-1 GA4 dönüşüm olayları (wa.me tık, Udemy tık, kitap tık) + kupon tek kaynak — kapı: GA4'te 3 olay görünüyor, kupon her yerde aynı
SIRADAKİ 3: 1) GA4 erişimi (Naci) 2) PARA-1 3) aylık gelir panosu (Udemy raporu + WhatsApp talep sayısı)
BULGU: —
BAĞIMLILIK: bu hat → WEB (buton/olay kodu yüzeyde) · REKLAM → bu hat (huni ölçümü) · ⛔ blokaj: yok
SON DEPLOY: — · AÇIK VAKA: —
OTURUM GEÇMİŞİ: —
