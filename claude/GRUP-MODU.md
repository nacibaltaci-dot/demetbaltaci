# 🧩 GRUP MODU — çok-AI çalışma grubu protokolü (demetbaltaci.com · v1.0 · 27 Eki 2026 · şablon: NACI-SISTEM/SABLONLAR/GRUP-MODU-SABLON.md)

> Her projede `docs/GRUP-MODU.md` bu şablondan doğar: `demetbaltaci.com` yer tutucuları doldurulur, §6 tur defteri boş başlar. Kaynak/pilot: SerApp `GRUP-MODU.md` (26 Eki 2026; emsal DIŞ GÖRÜŞ 17 Eki). Naci kararı: **HAT DEĞİL, PROTOKOL** — her hat kullanır, YÖNETİM sahibidir.
> Niyet (Naci): "Claude yönetiminde, benim kararımla bir AI çalışma grubu. Claude yazılıma odaklansın; görsel, içerik, araştırma gruba. Prompt'u hat (Claude) yazar, ben yazmam; ben ne istediğimi söylerim ve karar veririm."

## 1 · ROLLER
- **Naci:** isteğini hat sohbetine **tek cümleyle** söyler. Prompt yazmaz. Cevapları olduğu gibi (yapıştır/dosya) hatta getirir. **Karar verir.**
- **Hat Claude'u:** BRİFİNG yazar (bağlam dâhil, kopyala-yapıştır, her platforma aynı); cevapları SENTEZ'ler; karar adayı sunar; belgeler. Hat kendisi de teklif edebilir: **"Naci, bu konuyu GRUP MODU'nda paylaşıp görüş alalım."**
- **Grup (dış AI'lar):** görüş üretir. Karar vermez, proje bağlamını bilmez, kodu görmez.
- **YÖNETİM:** protokol sahibi; karnede ölçer; kırmızı çizgileri korur.

## 2 · AKIŞ (6 adım · en fazla 2 tur)
1. **TETİK** — Naci "GRUP: <tek cümle>" ya da hat teklifi + Naci onayı.
2. **BRİFİNG** — hat Claude'u, ≤1 sayfa, tek metin (§3).
3. **DAĞITIM** — Naci 3 platforma yapıştırır (varsayılan ChatGPT · Gemini · Perplexity; görselde Midjourney/Ideogram eklenir). Platform başına 1 mesaj, takip sorusu yok (ölçüm bozulur).
4. **TOPLAMA** — cevaplar olduğu gibi hatta; Naci ayıklamaz.
5. **SENTEZ** — tablo: *uzlaşı · çelişki · yalnız birinin bulduğu · bizim bağlamda geçersiz (neden)* → karar adayı + 5 gerekçe + karşı görüş. "Üçü de söyledi" gerekçe değildir; kanıt istenir.
6. **KARAR** — Naci → `decisions.md` "kaynak: GRUP turu <hat>-<n>" · AKIŞ etiketi `GRUP` · §6 tur defterine 1 satır. İkinci tur yalnız sentez yeni soru doğurursa; üçüncü tur yok.

## 3 · BRİFİNG ŞABLONU (hat Claude'u doldurur — Naci asla)
```
ROLÜN: <uzman rolü; aynı soru 3 farklı rolde sorulabilir>
BAĞLAM: <proje 3 cümle · pazar · bugünkü durum SAYILARLA · daha önce denenen ve sonucu>
SORU: <tek, net soru>
KISITLAR: <bütçe · zaman · yasal (KVKK/İYS) · teknik sınır · yapılmayacaklar>
İSTENEN ÇIKTI: <biçim · uzunluk · "emin değilsen söyle">
DEĞERLENDİRME ÖLÇÜTÜ: <biz neye göre seçeceğiz>
NE İSTEMİYORUZ: <genel eğitim, araç/ajans listesi, "siteni iyileştir", kesinmiş gibi sunulan tahmin>
```
Kalite kuralı: genel soru → genel cevap. Brifingin değeri **projenin gerçeğini** (sayılar, denenenler, kısıtlar) taşımasındadır; bunu yalnız hat bilir.

## 4 · NEREDE KULLANILIR · NEREDE KULLANILMAZ
Kullan: ① **AI-görünürlük ölçümü** (aynı N sorgu × 3 platform: projemiz geçiyor mu, kim alıntılanıyor — aylık, GEO nabzına) ② görsel/marka (maskot kiti, reklam kreatifi, mağaza görselleri) ③ içerik eleştirisi (hedef müşteri rolüyle) ④ kaynaklı araştırma (mevzuat, rakip, fiyat) ⑤ karar kırmızı takımı ("bu planı yık") ⑥ sunum provası ("yatırımcı gözüyle sor").
Kullanma: kod · mimari · deploy · belge sistemi · sır/env/anahtar · müşteri verisi/PII · proje bağlamı gerektiren teşhis (dış AI belgeleri bilmez; brifing bağlamı taşıyamıyorsa GRUP'a gitmez).

## 5 · KIRMIZI ÇİZGİLER
Sır, env, anahtar, hesap no asla · PII asla (KVKK) · üretilen görselin ticari kullanım hakkı platform şartına bağlı — marka kanonuna kaynak/platform notu · dış AI cevabı "kaynak" değildir, kaynak gösterirse Claude doğrular · Claude'un yazılım kararı GRUP'a sorulmaz · NotebookLM vb. belge-yükleme araçlarına sır/PII içeren belge yüklenmez.

## 6 · TUR DEFTERİ (demetbaltaci.com)
| # | Tarih | Hat | Soru (kısa) | Platformlar | Sentez belgesi | Karar | Benimsenen / Naci saati |
|---|---|---|---|---|---|---|---|
| G-1 | | | | | | | |

## 7 · ÖLÇÜM (KARNE, 4 haftada bir)
Tur sayısı · benimsenme oranı (karar adayı olan öneri / toplam öneri) · Naci saati / tur · benimsenme <%30 → protokol daraltılır.

## 8 · PLATFORM ENVANTERİ (Ekim 2026 bilgisi; abonelik/sürüm Naci doğrular)
ChatGPT (görsel üretim, derin araştırma, metin) · Gemini (uzun bağlam, Google zemini, görsel/video, Deep Research) · Perplexity (kaynaklı araştırma) · NotebookLM (belge soru-cevap; sır/PII yok) · Midjourney / Ideogram / Recraft (tutarlı karakter, yazılı görsel, vektör) · HeyGen vb. (avatar video) · ElevenLabs (ses) · Grok (anlık X trendi, opsiyon) · Figma Make / v0 / Lovable (UI fikir prototipi; kod Claude'da). Başlangıç seti: 3 abonelik (ChatGPT · Gemini · Perplexity).
