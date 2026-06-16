# demetbaltaci.com — Deploy (Yayınlama) Rehberi

> Bu site **statik** bir Next.js sitesidir (`output: "export"`). SerApp'tan FARKLIDIR:
> SerApp çalışan bir uygulamadır (pm2 + deploy.sh). demetbaltaci ise sadece
> hazır dosyaların sunucudaki bir klasöre kopyalanmasıyla yayınlanır.
> **deploy.sh / pm2 KULLANILMAZ.**

## Hızlı özet (her güncellemede yapılacaklar)
1. `npm run build` → `out/` üretir
2. (Önce kontrol) `rsync --dry-run` ile ne gideceğini gör
3. `rsync` ile sunucuya yükle
4. Sunucuda izinleri düzelt
5. Cloudflare cache temizle
6. Siteyi sert yenileme (Cmd+Shift+R) ile kontrol et

---

## Sunucu bilgileri
| | |
|---|---|
| Sunucu IP | `64.23.250.214` (SerApp ile aynı sunucu) |
| Kullanıcı | `root` (SSH şifre ile giriş — Mac terminalinden) |
| Hedef klasör | `/var/www/demetbaltaci/public_html/` |
| Servis | nginx (statik dosya servisi, pm2 yok) |
| nginx config | `/etc/nginx/sites-available/` → demetbaltaci.com |
| SSL | Let's Encrypt (otomatik yenileme) |
| DNS / CDN | Cloudflare proxy (Full strict) |
| Yerel proje | `/Users/nacibaltaci/Desktop/PROJELER/demetbaltaci` |

**ÖNEMLİ:** Tüm sunucu komutları **Naci'nin Mac terminalinden** çalıştırılır
(Code'un içinden `!` ile DEĞİL — şifre sorusu orada çalışmaz). Komut şifre
sorduğunda sunucu şifresi girilir (ekranda görünmez, normaldir).

---

## Adım adım deploy

### 1) Build (yerelde)
```
cd /Users/nacibaltaci/Desktop/PROJELER/demetbaltaci
npm run build
```
- `.env.local` içinde `NEXT_PUBLIC_YOUTUBE_API_KEY` DOLU olmalı (videolar için).
- Temiz biterse `out/` klasörü hazırdır.

### 2) Önce KONTROL — dry-run (hiçbir şey silmez/yazmaz)
```
rsync -avzn --delete out/ root@64.23.250.214:/var/www/demetbaltaci/public_html/
```
Çıktıda iki şeyi teyit et:
- Hedef `…/demetbaltaci/public_html/` — başka site (serapp, kuran…) DEĞİL.
- `deleting …` satırları varsa, yalnız eski build kalıntıları (eski `_next/`
  hash'leri, bayat HTML) olmalı. Alakasız bir silme görürsen DUR.

### 3) Gerçek gönderim (`n` harfi yok)
```
rsync -avz --delete out/ root@64.23.250.214:/var/www/demetbaltaci/public_html/
```
- `--delete`: eski/artık dosyaları siler ki klasör şişmesin (önemli; her build
  yeni hash üretir).
- Bitince `sent … bytes received … bytes` özeti görünür.

### 4) Sunucuda izinler (nginx okuyabilsin)
```
ssh root@64.23.250.214 "chown -R www-data:www-data /var/www/demetbaltaci/public_html/ && chmod -R 755 /var/www/demetbaltaci/public_html/"
```
- Çıktı vermez; hata gelmeden temiz dönerse başarılı.

### 5) Cloudflare cache temizle
- dash.cloudflare.com → demetbaltaci.com → **Caching → Configuration**
- **Purge Everything** → onayla.
- Sadece bu butona dokun; proxy/SSL ayarlarına dokunma.

### 6) Kontrol
- Tarayıcıda **Cmd+Shift+R** (sert yenile) veya gizli sekme.
- demetbaltaci.com ve değiştirdiğin sayfaları aç, doğrula.

---

## Önemli notlar / tuzaklar
- **rsync yönü:** `out/` sonundaki `/` ÖNEMLİ — klasörün İÇERİĞİNİ kopyalar.
  `out` (slash'sız) yazarsan `public_html/out/` oluşturup siteyi bozarsın.
- **Sadece Mac terminalinden:** Sunucuya bağlanan komutları Code içinden çalıştırma
  (şifre sorusu çalışmaz → "Permission denied"). Code komutu hazırlar, Naci çalıştırır.
- **YouTube API anahtarı:** Statik build anahtarı dosyalara gömer. `.env.local`
  boşsa videolar fallback'e düşer. Build'den önce kontrol et.
- **Google Analytics ID:** `G-HHLP4FJKTS` (doğru/aktif, panelden teyitli). layout.tsx'te
  bu kalmalı; eski `G-K0TDWLQM7R` atıl.
- **Node sürümü:** Şu an v25 (odd). İleride v22 LTS önerilir; build'i engellemez ama
  prod için daha güvenli.
- **Git:** `git push` siteyi YAYINLAMAZ — sadece kod yedeğidir. Yayın yukarıdaki
  rsync akışıyla olur. Yine de her deploy öncesi commit (yedek) iyi pratiktir.

## Geri dönüş (rollback) — bir şey bozulursa
- Yüklemeden önceki sağlam commit'e dön: `git checkout <commit>` → `npm run build`
  → tekrar rsync. (Son bilinen iyi commit: `b7acfe4` — yükselen modülü.)
