> ⚠️ ARŞİV (27 Eki 2026, YONETIM-1): bu belge 16 Haz 2026 durumunu anlatır; **yerine docs/RAPOR-SEO-1EKI.md** (GEO-SEO kanonu). Açık işleri backlog.md B1–B4'e taşındı. Silinmez (KURAL 80).

# Demet Baltacı Sitesi — SEO Durum Raporu ve Sonraki Adım Planı

**Tarih:** 16 Haziran 2026
**Site:** demetbaltaci.com
**Hazırlayan:** Claude (Naci ile birlikte)
**Amaç:** Bu belge, bugün yapılan işleri ve sonraki oturumlarda yapılacak "büyük düzenlemeleri" kaydeder. Yeni bir oturuma başlarken bu dosyayı paylaş — kaldığımız yerden devam ederiz.

---

## 1. BUGÜN NE YAPTIK? (Tamamlananlar ✅)

### A) Trafik düşüşü teşhisi konuldu
- **Şikayet:** Site trafiği Mayıs sonunda düştü, "başarısız" görünüyordu.
- **İnceleme:** Google Search Console verileri (Sayfa sayısı, Performans, Analizler) detaylı incelendi.
- **SONUÇ (önemli):** Site teknik olarak **sağlam ve bozuk değil.**
  - Sitemap'teki önemli sayfaların **69'u indexte**, sadece 2'si işleniyor. Sorun yok.
  - "Tarandı–dizine eklenmedi" görünen ~70 sayfa, sitemap'te olmayan ikincil URL'ler (.txt vb.) — büyük ölçüde normal.
  - Düşüşün **gerçek sebebi: MEVSİMSELLİK.** Trafiğin neredeyse tamamı "2026 yıllık burç yorumu" sayfalarından geliyordu (Yay/Kova/Terazi 2026 vb.). Bu sayfalar Aralık-Ocak'ta zirve yapar, Haziran'da doğal olarak düşer. **Naci'nin hatası değil, normal dalga.**
  - **Asıl yapısal sorun:** Site "tek bacaklı" — sadece yıllık (2026) içeriğe bağımlı. Aylık/haftalık/günlük ve kalıcı (yükselen gibi) içerik ayakları zayıf.

### B) Açıklama metni keşfi (Naci'nin tespiti)
- Naci fark etti: 2026 sayfalarında YouTube **video açıklama metni** sayfaya basılmış → Google bunu içerik olarak okuyup değer veriyor.
- **İYİ HABER:** Bu model artık haftalık/aylık sayfalara da uygulanmış (eskiden eksikti, düzeldi). İkizler haftalık sayfasında açıklama metni görüldü.
- **KARAR:** Bu hâliyle **1 AY İZLENECEK**, sonra derin düzenleme yapılacak. (Transkript/AI içerik üretme fikri şimdilik ertelendi — gereksiz karmaşa, açıklama metni zaten yazılı ve SEO dostu.)

### C) Yükselen Burç sayfası güçlendirildi
Sayfa: `demetbaltaci.com/yukselen-burc-hesaplama/`

1. **Schema testi yapıldı → GEÇTİ.** Google Rich Results Test: "4 geçerli öğe" (BreadcrumbList, Person/Organization, WebApplication). 2 önemsiz uyarı var (kritik değil).
2. **12 yükselen burç metni sayfaya KALICI eklendi.**
   - Önceden bu metinler sadece hesaplama sonrası görünüyordu → Google göremiyordu.
   - Artık sayfanın altında "12 Yükselen Burç ve Özellikleri" H2 bölümü olarak HTML'de kalıcı duruyor (server-side render, Google görebiliyor).
   - Her burç: H3 başlık + "Yöneticisi: X" rozeti + açıklama metni + ilgili burç özellik sayfasına iç link.
   - Hedef: "akrep yükselen özellikleri", "aslan yükselen nasıldır" gibi onlarca aramayı yakalamak.
3. **Canlıya alındı (deploy edildi)** ve **Google'a indexleme isteği gönderildi.**

---

## 2. TEKNİK BİLGİLER (Sonraki oturumda lazım olacak)

### Site mimarisi
- **Teknoloji:** Next.js 16 + React 19 + Tailwind 4
- **Tip:** Statik export (`output: "export"` → `out/` klasörü üretir)
- **ÖNEMLİ:** SerApp'tan farklı — deploy.sh / pm2 KULLANILMAZ.
- **Proje yolu (Mac):** `/Users/nacibaltaci/Desktop/PROJELER/demetbaltaci`

### Çalışma modeli
- **Claude** = strateji/planlama beyni + Code görevlerini yazar
- **Naci** = köprü (görevleri Code'a iletir, çıktıları paylaşır)
- **Claude Code** (terminal aracı) = kodu yazar
- Naci yazılım bilmiyor → basit Türkçe, adım adım anlatım şart.

### Deploy reçetesi (docs/DEPLOY-demetbaltaci.md'de kayıtlı)
- **Sunucu:** `root@64.23.250.214` (SerApp ile aynı sunucu)
- **Hedef klasör:** `/var/www/demetbaltaci/public_html/`
- **KRİTİK:** Sunucu komutları Code İÇİNDEN çalışmaz (Permission denied). Naci'nin **Mac terminalinden** şifre ile çalışır (şifre ekranda görünmez, normaldir).

**Deploy adımları (Mac terminalinde, sırayla):**
1. Build: `cd /Users/nacibaltaci/Desktop/PROJELER/demetbaltaci && npm run build`
2. Dry-run (deneme, hiçbir şey silmez — `n` harfine dikkat):
   `rsync -avzn --delete out/ root@64.23.250.214:/var/www/demetbaltaci/public_html/`
3. Gerçek gönderim (`n` YOK):
   `rsync -avz --delete out/ root@64.23.250.214:/var/www/demetbaltaci/public_html/`
4. İzinler:
   `ssh root@64.23.250.214 "chown -R www-data:www-data /var/www/demetbaltaci/public_html/ && chmod -R 755 /var/www/demetbaltaci/public_html/"`
5. Cloudflare → Caching → Configuration → **Purge Everything**
6. Test: tarayıcıda `Cmd + Shift + R`
- **Not:** `out/` sonundaki `/` önemli. Komutları doğru sırada çalıştır (önce gönderim, sonra izinler).

### Diğer sabitler
- WhatsApp numarası: `905076075017`
- Google Analytics ID: `G-HHLP4FJKTS` (doğru/aktif olan)
- Video CTA slug deseni: `/haftalik-burc-yorumlari-astroloji/{id}-burcu-haftalik-yorumu`
- Burç özellik linkleri: `/tum-burclar-astroloji/{slug}-burcu-ozellikleri/`
- Burç id'leri (SIGNS sırası): koc, boga, ikizler, yengec, aslan, basak, terazi, akrep, yay, oglak, kova, balik

### Son commit durumu
- `0bf5ac0` — yükselen sayfasına 12 yükselen burç içeriği (bu oturumda)
- `cb4cfb8` — deploy rehberi + modül belgesi
- `b7acfe4` — yükselen burç hesaplama modülü
- **3 commit push bekliyor** (push opsiyonel, deploy'a etkisi yok).

---

## 3. SONRAKİ OTURUMLAR İÇİN PLAN (Yapılacaklar 📌)

### Öncelik 1 — Aylık/haftalık içerik değerlendirmesi (~1 ay sonra: Temmuz ortası)
"1 ay izle, sonra derin düzenleme" kararı. O gün bakılacaklar:
- Açıklama metinleri **otomatik güncelleniyor mu**, yoksa donuk mu? (Statik sitede kritik — yeni videoda metin kendiliğinden değişiyor mu?)
- Açıklamalardaki **tekrar eden bloklar** (Udemy linki, "abone ol" vb.) Google'ın gözünde özgünlüğü düşürüyor mu? Search Console verisi gösterecek.
- Search Console'da aylık/haftalık sayfaların trafiği arttı mı?

### Öncelik 2 — "3 ayaklı içerik" stratejisi (büyük düzenleme)
Site mevsimselliğe daha az bağımlı olmalı. Üç ayak:
1. **Yıllık (2026):** Çalışıyor ama mevsimi geçti.
2. **Aylık/haftalık/günlük:** Sürekli aranır — güçlendirilecek (taze video + yazılı özet).
3. **Kalıcı/sabit:** Yükselen burç modülü ilk örnek. Sıraya: "doğum haritası hesaplama", "burç uyumu/sinastri hesaplama" gibi mevsime bağlı olmayan araçlar eklenebilir.

### Öncelik 3 — Yükselen sayfası Adım 3 (zenginleştirme)
- Demet'in "yükselen burç nedir/nasıl bulunur" videosu varsa sayfaya göm (VideoObject schema).
- "Güneş burcu vs yükselen farkı" gibi ek içerik bölümleri.
- Schema'daki 2 önemsiz uyarıyı temizle (opsiyonel).

### Öncelik 4 — Hydration uyarısı temizliği (teknik)
- Sorun: `src/app/aylik-burc-yorumlari-astroloji/[slug]/page.tsx` (~51. satır) dev modunda "Hydration failed (recoverable)" veriyor.
- Kök neden: header style sunucu/istemci tutarsızlığı (`top: 0` vs `"0px"`).
- **Deploy'u BLOKE ETMİYOR** — canlı sitede kullanıcıya görünmez.
- Ortak header'dan geliyorsa tüm [slug] sayfalarında olabilir → tek noktadan düzeltilebilir.

---

## 4. BAŞARI KRİTERLERİ (Hatırlatma)
6 ay hedefi: "astrolog demet baltacı" aramasında 1. sıra, "koç burcu günlük" gibi aramalarda ilk 10, aylık 50.000+ organik ziyaretçi, WhatsApp'tan aylık 100+ danışmanlık talebi.

**Mevcut gerçek:** Site sağlam, indexleme tamam. Asıl iş = mevsimselliği kıracak kalıcı + taze içerik üretmek. Bugün o yolda ilk büyük adımı (yükselen kalıcı içerik) attık.

---

*Not: SEO sabır işidir. Bir değişiklik yapıp hemen üstüne başkasını yapmak, neyin işe yaradığını ölçmeyi engeller. Bu yüzden "1 ay izle" kararı doğru — veriyi toplayıp sonra büyük düzenlemeye geçeceğiz.*
