# 🧠 YÖNETİM SİSTEMİ — demetbaltaci.com (proje kopyası)

> 27 Eki 2026 · YONETIM-1 · Kaynak: NACI-SISTEM/YONETIM-SISTEMI-EVRENSEL.md v1.0.5 — birebir; proje farkları yalnız bu kutuda. **Evrensel değişince bu kopya YÖNETİM'de yenilenir** (SISTEM-SURUM damgası).
> **Proje farkları:** ① deploy = statik (build → rsync → izin → Cloudflare); rsync/ssh yalnız Naci terminali, Code'dan sunucuya bağlanılmaz (CLAUDE.md) ② §7.6 hat dalı aynen; "main her an deploy edilebilir" = main'den alınan build canlıya gidebilir; dalda build alınıp gönderilmez ③ OPS-1 zemin commit'i tek seferlik doğrudan main (Karar #2) ④ "GRUP <konu>" komutu §6'da — docs/GRUP-MODU.md (v2.10) ⑤ LANSMAN KAPISI bu projede "2027 SEZONU HAZIR, 15 Kas 2026" ⑥ **§2 hat listesi (proje):** OPS · GEO-SEO · WEB · REKLAM · WHATSAPP · İÇERİK · PARA · SUNUM · **VIDEO** (5 Kas 2026, Karar #10 — prompt'la MP4 üretimi; kanon NACI-SISTEM/VIDEO-URETIM-REHBERI.md; yalnız üretir, İÇERİK yayınlar) + YÖNETİM. APP yok; BÜYÜME → REKLAM; GÜVENLİK → OPS + REKLAM (Karar #6).

---

# 🧠 YÖNETİM SİSTEMİ — EVRENSEL (hat + yönetim iş akışı) v1.0.5

> 🕔 21 Ekim 2026 · Kaynak: SerApp `YONETIM-SISTEMI.md` v1.0.1 (19–20 Eki, YONETIM-1 toplantı #2 + §7.6 hat dalı) · **MÜHÜRLÜ.** Projeden bağımsızdır; SerApp pilot. SSoT: proje `docs/YONETIM-SISTEMI.md`; bu dosya evrensel öz.
> Doğuş: Naci — "Proje büyüdü, ben 1 kişiyim. Her ana konu bir oturum; üstte YÖNETİM beyin olsun; tüm projelerde tek tip."

---

## 1 · ÜÇ KAVRAM (karıştırılmaz)

| Kavram | Tanım | Ömrü | Nerede yaşar |
|---|---|---|---|
| **HAT** | Kalıcı ana konu | **Asla kapanmaz** | `HAT-<KOD>.md` defteri (1 sayfa, sabit 8 satır) + kanon belgeler (≤5) |
| **OTURUM** | Hattın bir sohbeti (`<KOD>-1`, `<KOD>-2`) | Context dolana/ağırlaşana kadar — Claude KURAL 63.G uyarısı verene kadar aynı oturum sürer. İş bitince oturum KAPANMAZ. | Proje sohbeti; adı = hat kodu + sıra no |
| **İŞ PAKETİ** | Hattın içindeki bitirilebilir iş | Kapısı geçilince biter — "yapıldı, belgelendi, deploy varsa canlıda" = tamam | Defterin AÇIK İŞ PAKETİ satırı + PLAN/GOREV-KARTLARI belgeleri |

## 2 · HATLAR (proje başında kesinleşir — §9 şablonuna bak)

Her projede hat listesi **ilk YÖNETİM oturumunda** Naci + Claude birlikte belirler (§9 çekirdek şablonu + projeye özgü ürün hatları). Sahiplik kuralı: **bir panel/yüzey değişikliği, onu isteyen özelliğin hattına yazılır** (panelin genel yapısını/ortak bileşenlerini tutan hat ayrıca onay vermeden dokunulamaz). Çakışırsa YÖNETİM karar verir. Hat rengi (🔴 bu ay · 🟡 sırada · 🟢 periyodik/boşta) YÖNETİM her toplantıda yeniler.

### 2.1 · BİLEŞEN SAHİPLİĞİ (sert kural)

Bir hat başka hattın **bileşenini/modülünü kullanır, DEĞİŞTİREMEZ.** Değişiklik gerekiyorsa sahibi hatta tek kart gider (AKIŞ'a KARAR-İSTER/BULGU), sahibi hat yapar, isteyen hat bekler.

Neden bu kadar sert: bileşenin kanonu sahibinde; hat kuralı gereği başka hat o kanonu okumaz → "kelimeyle tarif" → yaklaştırır → tur tur döner.

> **Örnek (SerApp, 18 Eki):** Serap kutusu marka sayfasına → yerleşim/metin/SSR şartı GEO-SEO'nun, `SerapMarka`/jest/kayan pencere/düğme SERAP'ın. GEO-SEO hattı 5 kart/4 turda bitiremedi; kural bu vakadan doğdu (YONETIM-1 §2.1).

## 3 · HAT HÂLLERİ (5) ve kapasite

| Hâl | Anlamı | Sınır |
|---|---|---|
| 🔴 **AKTİF-KOD** | Code'a kart veren hat | **Aynı günde en fazla 1** |
| 🟠 **AKTİF-SPEC** | Plan/test/ürün/analiz/belge, kod yok, deploy yok | Sınır yok — sınır Naci'nin dikkati; PANO gün yazar |
| 🟡 **PARK** | Açık iş paketi var, bu hafta kapalı | — |
| 🟢 **BOŞTA** | Yayında, bekleyen iş paketi yok | — |
| ⚪ **AÇILMADI** | Defteri var, hiç oturum açılmadı | — |

**Kapasite kuralı:** Naci 1 kişi ≈ haftada 5 gün + tek kota. YÖNETİM kapasiteyi **gün olarak** PANO'ya yazar. **Gün yazılmamış hat "öncelik" ilan edilemez.** İş paketleri 1–2 günlük.

## 4 · HAT OTURUMU PROTOKOLÜ

**Mevcut açık sohbetlerin yeni düzene geçişi:** Açık sohbetler kapatılmaz; her birine YENİ DÜZEN BİLDİRİMİ kutusu yapıştırılır (`SABLONLAR/HAT-OTURUM-KUTULARI-SABLON.md` §B); Claude defterini okur, kapsam cümlesini yazar, oturum adını `<KOD>-1` sayar, devam eder.

**Yeni hat oturumu ne zaman açılır:** İlk iş paketi geldiğinde — boş oturum açılmaz (açılış token + dikkat; AÇILMADI hâli bunun için var). Açılış 2 dakikadır (şablon).

**Açılış:** Projenin açılış ritüelinin hat sürümü; ADIM 2'de **yalnız kendi `HAT-<KOD>.md` + kanonları** okunur (≤15 KB); başka hattın belgesi okunmaz — bağımlılık varsa PANO'dan tek satır. İlk mesajda kapsam cümlesi: *"Bu oturum yalnız \<HAT\>; başka konu çıkarsa defterin BULGU satırına, YÖNETİM'e."*

**Kart kalitesi:** ① görsel işte referans varsa tarif YASAK — referans bileşenin **dosya:satır + sınıf dizgisi birebir** karta yazılır ② **kabul = sahip ekranı + DOM/HTML ölçümü** (KURAL 72/78); Code raporu kabul değildir, "yapıldı" yazısı kanıt değildir ③ **üç tur freni:** aynı iş paketinde 3. düzeltme kartı yazılacaksa DUR → AKIŞ'a KARAR-İSTER; yaklaşım yanlıştır, YÖNETİM yeniden kurar; 4. kart yazılmaz ④ **refactor yasağı:** iş paketi içinde ortak hook çıkarma/başka bileşeni değiştirme = ayrı iş paketi + YÖNETİM onayı; "basit" paket basit kalır.

**Çalışma ağacı hijyeni:** Çalışma ağacı paylaşımlıdır — hat, iş paketi kapanışında **commit'lenmemiş belge bırakmaz**; başka hattın dosyasına `git add -A`/stash/checkout ile dokunmaz (yalnız açık yollarla add). Kasıtlı commit'lenmeyecek yerel dosyalar `skip-worktree` ile işaretlenir.

**Ağırlık eşiği:** Hat oturumu 48 saatte 15+ AKIŞ satırı ya da 10+ belge yazdıysa Claude kendiliğinden 63.G uyarısı verir; YÖNETİM "ağırlaşıyor" yazdıysa yeni kart yazılmaz, önce DEVİR.

**Çalışma:** Hat **bulgu üretir, iş açmaz.** Test sırasında çıkan her şey BULGU satırına; işe dönüşmesine YÖNETİM karar verir. **İstisna:** canlıyı kıran arıza — anında yapılır, YÖNETİM'e sonradan yazılır.

**İş paketi kapanışı (KURAL 61 hat sürümü, bekçili):** Özet + **defterin 8 satırı güncellenir** (zorunlu; güncellenmemiş defter = denetim ❌). Deploy yaptıysa PANO kuyruk satırı kapatılır + deploy kaydı. **Sohbet kapanmaz** — sıradaki paket aynı sohbette.

**Devir (hat oturumu N → N+1):** Tetik: Claude 63.G uyarısı ya da Naci "ağırlaştı" der. Sıra: ① Naci N sohbetine DEVİR KUTUSU yapıştırır (`SABLONLAR/HAT-OTURUM-KUTULARI-SABLON.md` §C) ② Claude defterin 8 satırını günceller + **KALDIĞIMIZ YER** bloğunu deftere yazar (son iş · açık kart · bekleyen karar · bilinen hatalar · sıradaki ilk adım · okunacak ≤5 belge) ③ OTURUM GEÇMİŞİ satırı: "`<KOD>-<N>` (tarih, kapandı) · `<KOD>-<N+1>` (açık)" ④ sohbette olup belgede olmayan hiçbir bilgi devredilmez — **"sohbette var, belgede yok" = yok** (KURAL 61); Claude kapanmadan bunu tarar ve eksikleri deftere/kanona işler ⑤ N+1 açılış kutusuyla açılır; N sohbeti arşiv olarak kalır, silinmez (KURAL 80).

## 5 · DEFTER FORMATI (`HAT-<KOD>.md`, 1 sayfa, sabit 8 satır — makine-okunur)

```
# HAT-<KOD> — <ad>            son: <tarih> · oturum: <KOD-N> · hâl: <AKTİF-KOD|AKTİF-SPEC|PARK|BOŞTA|AÇILMADI>
AMAÇ: <1 cümle> · KANON: <≤5 belge>
DURUM: ✅ canlıda ne var (3-5 madde)
AÇIK İŞ PAKETİ: <ad> · kapı: <ölçüt> · deploy gerekir mi · plan belgesi
SIRADAKİ 3: 1) … 2) … 3) …
BULGU: <test/çalışma sırasında çıkan, YÖNETİM kararı bekleyen maddeler>
BAĞIMLILIK: bu hat → <hat> (neden) · <hat> → bu hat (neden) · ⛔ blokaj
SON DEPLOY: #N <hash> <tarih> · AÇIK VAKA: …
OTURUM GEÇMİŞİ: <KOD-1> (tarih, kapandı) · <KOD-2> (açık) · belgeleri: …
```

**DURUM satırı prod kanıtısız yazılmaz:** Belgeden türetilen durum "belgeye göre" diye işaretlenir; ilk hat oturumu prod fotoğrafıyla doğrular.

**Hat belge düzeni:** Hat kanonu ≤5 belge kök `docs/`'ta; analiz/ölçüm/kart/brifing gibi **ekler `docs/hat/<KOD>/`** klasörüne. Kanon ve defter kökte kalır; denetim betiği kökü sayar.

YÖNETİM açılış betiği tüm defterleri bu satırlardan toplar → pano taslağı otomatik.

→ Boş şablon: `SABLONLAR/HAT-DEFTER-SABLON.md`

### 5.1 · HAT → BEYİN VERİ AKIŞI (sistemin özü)

İki kanal; ikisini de **hat oturumunun Claude'u** yazar (Naci yazmaz, onaylar):

| Kanal | Dosya | Ne zaman | Ne |
|---|---|---|---|
| **DURUM** | `HAT-<KOD>.md` | her iş paketi bitişinde, deploy sonrası, devirde | 8 satırın tamamı bugünkü gerçeğe göre |
| **OLAY** | `YONETIM-AKIS.md` (append-only, tek dosya, en yeni en altta) | iş paketi bitti · deploy · rollback · bulgu · blokaj · devir · karar-ister · oturum-açıldı | 1 satır: ne oldu (kanıt) + YÖNETİM'den ne isteniyor |

**Kapanış sırası (her iş paketi):** ① kendi kanon md'leri ② `HAT-<KOD>.md` ③ `YONETIM-AKIS.md` 1 satır ④ claude/ kopyası ⑤ tek Code commit kartı — beşi yapılmadan "paket bitti" denmez (KURAL 61).

**AKIŞ hijyeni:** ① **Numara = `<HAT-N>-<kendi sayacı>`** (örn. `SERAP-1-14`); global sıra YOK — numara çakışmasının kaynağıdır; YÖNETİM imleci **tarih-saat**tir ② satır **≤ 300 karakter**: ne oldu + kanıt adı + YÖNETİM'e ne istiyorum; ayrıntı belgeye, satıra değil ③ periyodik YÖNETİM (ör. Pazartesi), 7 günden eski satırları `YONETIM-AKIS-ARSIV-H<NN>.md`'ye taşır; aktif dosya son 7 gün ④ **sessiz hat kuralı:** 7 gün AKIŞ'a satır yazmayan hat otomatik PARK; bekleyen iş varsa YÖNETİM Naci'ye "bu hat aç kaldı" uyarısı yazar ⑤ **YÖNETİM kararı AKIŞ'a yazılır; hatta uzun kutu yapıştırılmaz** — Naci hat sohbetine yalnız `YÖNETİM: AKIŞ <tarih-saat> satırını oku ve uygula` yazar (kutu yalnız yeni hat açılışı ve devir için).

YÖNETİM her mesajında AKIŞ'ın yeni satırlarını okur (imleç panoda "AKIŞ okundu: \<son numara\>"); defterleri yalnız haftalık turda ve derin soruda okur.

→ AKIŞ satır şablonu: `SABLONLAR/YONETIM-AKIS-SABLON.md`

## 6 · YÖNETİM OTURUMU

**Ne zaman:** HER AN. YÖNETİM sohbeti sürekli açık ve dinamiktir: Naci her çalışma öncesi burada bilgi verir/planlar, aklına takılanı burada fırtınaya açar; Claude her an tüm sistemin durumuna hâkimdir, **beklemez, öngörür**: eksik akışı Naci söylemeden kurar, riski görünce uyarır. Zamanlanmış görev (ör. Pazartesi) yalnız panonun zorunlu tazeleme ritmidir.

**Oturum ömrü:** YÖNETİM de bir hattır — sohbeti kapanmaz, context dolunca devirle N+1 açılır. **Toplantı biter, oturum bitmez.** KURAL 63.H ("1 konu") YÖNETİM hattına uygulanmaz.

**Beyin + kalp bilinci:** YÖNETİM yalnız karar mercii değil, sistemin nabzıdır. Claude burada **beklemez, öngörür**: eksik akışı Naci söylemeden kurar, riski görünce uyarır, her mesajda "sistem şu an nerede" bilincini taşır. Naci'nin bir şeyi ikinci kez söylemesi = sistem eksik demektir, Claude eksiği kendisi kapatır.

**YÖNETİM komutları (Naci'nin tek kelimelik istekleri — Claude şablonla cevaplar):**
- **"DURUM"** → AKIŞ'ın yeni satırları okunur → tüm resim: hat × hâl × bu hafta ne oldu × blokaj × deploy kuyruğu × senden bekleyen kararlar × sıradaki 3 iş (≤ 1 sayfa) + pano güncellenir
- **"HAT \<KOD\>"** → o hattın defteri + AKIŞ'taki satırları → hat yorumu: yapılan işin kalitesi, kapı geçildi mi, riskler, büyük resme etkisi, sıradaki adım
- **"FIRTINA \<konu\>"** → BEYİN-FIRTINASI-PROTOKOLU 6 adım; karar adayı üretir, mühürlemez
- **"PLAN \<hat\>"** → o hat için PLAN belgesi taslağı (hedef · kapı · sıra · tarih)
- **"KARAR \<konu\>"** → 5 gerekçeli öneri + karşı görüş; Naci mühürler, `decisions.md`'ye girer
- **"GRUP \<konu\>"** → çok-AI çalışma grubu turu (`docs/GRUP-MODU.md` ← `SABLONLAR/GRUP-MODU-SABLON.md`): hat Claude'u BRİFİNG yazar, Naci 3 platforma dağıtır, Claude SENTEZ, Naci KARAR (decisions "kaynak: GRUP turu"). Hat kendisi de teklif edebilir. **Hat değil, protokol** (26 Eki 2026, SerApp).

**Model politikası:** YÖNETİM sohbeti = yüksek kapasiteli model (fırtına/karar günlerinde maksimum kapasite); hat oturumları = performans modeli (YÖNETİM'in ayrı haftalık kotasına dokunmaz). Model tercihini Naci belirler; kota ekranını Naci paylaşır, Claude uydurmaz.

> **Örnek (SerApp, 16 Eki):** YÖNETİM Fable 5.1 Medium (fırtına/karar High), hatlar Opus 5.5.

**Girdi (yalnız bunlar):** Tüm defterler + deploy son kaydı + açık vakalar + Naci'nin kota ekranı. **Hat belgelerine inmez.** ≤ 1 saat.

**Çıktı:** `YONETIM-PANO.md` yenilenir: hat × hâl × bu hafta gün × sıradaki iş × blokaj × deploy kuyruğu × kota notu. Tek sayfa.

→ Pano şablonu: `SABLONLAR/PANO-SABLON.md`

**Yetkileri (yalnız burada):** öncelik ve kapasite · iş paketi açma/kapama · deploy kuyruğu sırası · kural/çekirdek/anayasa değişikliği · LANSMAN KAPISI · beyin fırtınaları · hat değerlendirmesi · bekçi/zamanlanmış görev tanımı.

**Yasakları:** kod yazdırmaz, kart yazmaz, deploy koşturmaz. Tek istisna: belge senkron kartı.

**İlke:** önce biriken önemli işler PANO'ya yazılır ve hızla bitirilir, sonra düzenli planlama.

## 7 · DEPLOY KUYRUĞU

**7.1** Deploy yalnız **PANO'da sırası gelen hat** tarafından, § -1 beyanıyla.

**7.2** `main` paylaşımlıdır: beyanda **"main'de bekleyen yabancı commit'ler"** sayılır; her commit tek başına deploy'a güvenli olmalı (env yoksa eski davranış, migration katkısal).

**7.3** Günde 1 AKTİF-KOD hattı → kuyruk doğal olarak teke iner.

**7.4** Deploy numarası **çalışma sırasıdır**; PANO önceden numara ayırmaz.

**7.5** Deploy sonrası üç yere yazılır: deploy kaydı · PANO kuyruk satırı kapanır · hat defteri SON DEPLOY. **Rollback vakaları OPS defterine** düşer, hangi hat deploy etmiş olursa olsun.

**Deploy hattındır:** Her hat kendi iş paketinin deploy'unu kendi oturumunda, projenin deploy belgesi adımlarının tamamıyla koşar. Deploy *altyapısı* arızalanırsa OPS devreye girer: teşhis + altyapı düzeltmesi OPS'ta; OPS "deploy hattı açık" sinyalini AKIŞ'a yazınca sıradaki hat kendi deploy'unu koşar. Altyapı kodu OPS'un; özellik kodu hattın.

**7.6 HAT DALI — main her an deploy edilebilir:**

Kural: **kabul edilmemiş paket `main`'e girmez.** Her hat kodu kendi dalında yazar: `hat/<kod>` (örn. `hat/serap`). Paket kabul edilince (lokal kabul + göz onayı) hat kendi dalını `main`'e **merge eder = "deploy'a hazır" beyanı**; merge'den sonra main'deki her şey canlıya çıkabilir. Deploy `main`'i çeker.

İşletim (tek çalışma ağacı): günde 1 AKTİF-KOD hattı = o gün checkout edilen dal; hat Code'a kart verirken ilk satır `git switch hat/<kod>` (yoksa main'den oluştur); paket bitince `git switch main && git merge --no-ff hat/<kod>`; başka hattın dalı checkout'luyken o hat Code'a kart vermez (çalışma ağacı hijyeni §4).

Belgeler (`docs/`) dalda değil doğrudan main'de commit'lenir (çatışma olmaz, deploy'u etkilemez). Taban = `origin/main`; `reset --keep` (paylaşımlı ağaçta `--hard` yasak — başka hattın commit'lenmemiş dosyaları silinir). Rebase yasak.

> **Vaka (SerApp WEB-1 #97, 20 Eki):** WEB acil düzeltmesi SERAP'ın yarım P3-a'sının üstüne binmek üzereydi. P3-a `hat/serap` dalına taşındı; main WEB commit'lerine indirildi; kural o andan doğdu.

## 8 · LANSMAN KAPISI

"Test aşaması geçildi"nin yazılı ölçütü: hangi hatların hangi iş paketleri lansman için **şart**, hangileri lansman **sonrası**. Hat, paketini bitirince LANSMAN KAPISI satırını ✅ yapar. Kapı tamamen yeşil = lansman. Bu belge olmadan "proje uzuyor" cümlesi ölçülemez.

→ Şablon: `SABLONLAR/LANSMAN-KAPISI-SABLON.md`

## 9 · BEKÇİLER + HAT LİSTESİ ŞABLONU

Bekçisiz kural dilektir. Asgari bekçiler:

| Bekçi | Tetik | Ne yapar |
|---|---|---|
| Periyodik YÖNETİM | Zamanlanmış görev (ör. Pazartesi 08:52; **"Bu bilgisayarı zorunlu kıl" AÇILMALI**) | Yalnız hatırlatır; toplantı açık YÖNETİM sohbetinde |
| Bakım ritüeli | Zamanlanmış görev (ör. Çarşamba 18:00) | KURAL 71 bakım adımları |
| Denetim betiği | Her açılış | Defter damgası + "güncellenmemiş defter" ❌ |

**Hat listesi şablonu (yeni projede ilk YÖNETİM'de kesinleşir):**

| Hat | Kapsam |
|---|---|
| **OPS** | sunucu/deploy/bakım/nabız |
| **GÜVENLİK** | siber savunma + felaket kurtarma + hukuk/KVKK |
| **WEB** | site + paneller yüzey olarak (özellik kartları sahibi hatta) |
| **APP** | mobil (varsa) |
| **GEO-SEO** | coğrafi sayfalar + içerik + ölçüm + sitemap |
| **PARA** | ödeme + komisyon + kampanya + kilitler |
| **BÜYÜME** | reklam + ortaklar + envanter büyütme |
| **SUNUM** | yatırımcı/ortak sunumları + finansal model |
| + ürün hatları | projeye özel (örn. ARAMA-0850, SERAP, WHATSAPP) |
| **YÖNETİM** | pano + öncelik + kapasite + deploy kuyruğu + kural/çekirdek + lansman kapısı |

## 10 · DEĞİŞİKLİK GÜNLÜĞÜ
- 27 Eki 2026 · v1.0.5 — §6 "GRUP <konu>" komutu + GRUP-MODU-SABLON (çok-AI çalışma grubu; hat değil protokol). SerApp v1.0.4 §4.1 (ÇIKIŞ TEYİDİ · kim bozar o korur · PARK hatta kutu yasağı) ve §5.2 (çekirdek dosyaların yeri) henüz evrensele taşınmadı → SENKRON BORCU.

- **21 Eki 2026 · v1.0.1** — SerApp `YONETIM-SISTEMI.md` v1.0.1 ile tam eşleme. Eklenen/genişletilen: §2.1 bileşen sahipliği (sert kural, vaka örneği) · §4 kart kalitesi/üç tur freni/refactor yasağı/ağırlık eşiği/working-tree hijyeni/devir tam metni · §5 defter düzeni (hat/\<KOD\>/ klasörü + DURUM kanıt kuralı) · §5.1 AKIŞ hijyeni (hat-bazlı numara, ≤300 karakter, haftalık arşiv, sessiz hat PARK, kısa yol "AKIŞ satırını oku") · §6 beyin+kalp+komutlar+model politikası genelleştirildi (SerApp modeli örnek kutuya) · §7.1–7.5 deploy adımları numaralandı · §7.6 hat dalı (yeni: kabul edilmemiş paket main'e girmez, `hat/<kod>` dalı, merge = deploy'a hazır beyanı, rebase yasak, vaka WEB-1 #97). Kaynak: SerApp Karar #331 + §7.6 20 Eki 2026.
- **15 Eki 2026 · v0.9.5.5** — SerApp YONETIM-1 öğleden sonra dersleri: §4.1 veri akışı (DURUM+OLAY), §4.2 oturum ömrü/geçiş/devir, §5 beyin+kalp+komutlar; 2 yeni şablon.
- **15 Eki 2026 · v0.9** — doğuş (SerApp YONETIM-1).

## 11 · PROJE DEĞİŞİKLİK GÜNLÜĞÜ (yalnız bu kopya; evrensel gövdeye dokunulmaz)
- 27 Eki 2026 · YONETIM-1 · proje kopyası doğdu (evrensel v1.0.5), 8 hat + YÖNETİM, GRUP MODU.
- 5 Kas 2026 · YONETIM-1 · §2 hat listesine VIDEO eklendi (Karar #10); 9 hat + YÖNETİM.
