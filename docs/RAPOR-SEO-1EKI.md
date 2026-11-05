# RAPOR-SEO-1EKI — demetbaltaci.com Durum Analizi ve Yol Haritası (1 Ekim 2026)

> 🕔 Repoya taşındı: 27 Eki 2026, YONETIM-1 (KURAL 73: repo tek gerçek; Claude Docs özgün kaynağı: https://claude.ai/code/artifact/a526a8bb-7ad7-4b98-a92e-f54d612d7af6). **GEO-SEO hattı KANON #1.** Bölüm 6'daki 8 fazlı plan 27 Eki YÖNETİM-1 kararıyla hat düzenine dağıldı (bkz. decisions.md #1); tarihli kapı 15 Kas 2026 (2027 sezonu) geçerli.

---

# demetbaltaci.com — Durum Analizi ve Yol Haritası Raporu

2026-10-01 · @Naci

## Özet

demetbaltaci.com ayakta ve içeriği güçlü bir markaya dayanıyor, ama site bu gücün çok küçük bir kısmını kullanıyor ve NACI-SISTEM disiplininin neredeyse hiçbir adımı bu projede kurulmamış. Kanal 232 bin abone, 34.923 video ve 95 milyon izlenmeye, Instagram ağı 420 binin üzerinde takipçiye sahip. Buna karşılık sitenin Google'ın gördüğü hâli sayfa başına 40-150 kelime.

En kritik 5 bulgu:

1. **Kanonik hatası (kritik):** 72 sayfanın hepsi `canonical` olarak ana sayfayı gösteriyor. Google'a her sayfa için "ben ana sayfanın kopyasıyım" deniyor. Kök neden `layout.tsx` içindeki `canonical: "/"` satırının tüm alt sayfalara miras kalması.
2. **Donmuş içerik (kritik):** Site en son 4 Ağustos 2026'da derlenmiş. Bugün (1 Ekim) haftalık sayfaların 11'i 20-21 Haziran videosunu, aylık sayfalar Ağustos yorumunu gösteriyor. Yalnız ana sayfadaki günlük video tarayıcıda canlı çekildiği için güncel.
3. **Boş İngilizce ayağı (yüksek):** Ana sayfa `hreflang` ile `/en/` sayfasını işaret ediyor ama `/en/` ve tüm İngilizce adresler 404 veriyor.
4. **Kayıp kod riski (kritik, sistemsel):** Canlıdaki son derleme yereldeki kodla eşleşmiyor. Yerel klasörde 10 değişmiş + 13 hiç commit edilmemiş dosya var, son commit 16 Haziran, GitHub'a push kanıtı yok, `node_modules` silinmiş (yerelde derleme şu an yapılamaz). KURAL 58 (push kanıtı) ihlali.
5. **Sistem geride (yüksek):** Proje NACI-SISTEM v1.0 damgasında, güncel sürüm v2.6. Devir oturumu hiç yapılmamış; `decisions`, `backlog`, `progress`, `session-logs` dosyaları boş şablon. GEO-SEO işletiminin zorunlu üç belgesi (PLAN, NABIZ, SAYFA ŞABLONLARI) yok.

Henüz bir plan yok. Her şey var ama plan yok: Ocak 2026 strateji planı, Haziran SEO notu ve GEO-SEO anayasası birbirine bağlanmamış ve hiçbirinde tarihli hedefler ya da geçilmesi gereken kontroller (kapılar) yok. Bu raporun 6. bölümü o planın taslağı.

## NACI-SISTEM kuralları ve bu projedeki karşılığı

OKUNAN: NACI-SISTEM/README · KURALLAR-EVRENSEL (v1.8, SON-KURAL 80) · SISTEM-SURUM (v2.6) · GEO-SEO-ANAYASA (v1.4) · GEO-SEO-ISLETIM (v1.0) · YENI-PROJE-KURULUM-REHBERI (v1.1 ekleri dahil) · WHATSAPP-CLOUD-API-REHBERI § 4 ve § 6 · proje `docs/` klasörünün tamamı + CLAUDE.md + Ocak 2026 strateji planı.

Sistemin özü şu: Claude strateji ve belgeyi yazar, Code uygular, sen köprü ve karar mercisisin; her karar 5 gerekçeyle yazılır, her bilgi tek kanonik yerde yaşar, belge işlemin hemen ardından yazılır ve hiçbir oturum push kanıtı olmadan kapanmaz. Aşağıdaki tablo, bu projeyi bağlayan kuralların bugünkü durumunu gösteriyor.

| Kural / belge | Ne istiyor | demetbaltaci.com bugün |
|---|---|---|
| KURAL 58 — Push kanıtı | Her oturum sonunda working tree temiz + `HEAD = origin/main` | ❌ 23 dosya commit dışı, son commit 16 Haz, upstream tanımlı değil |
| KURAL 61 — Belge borcu biriktirilmez | Karar/deploy/akış değişince anında belge | ❌ Haziran sonrası işler (OneSignal, Kitaplarım, kupon, favicon, 4 Ağu deploy) hiçbir proje belgesinde yok |
| KURAL 17.E — Evrensel belge kopyalanmaz | Felsefe yalnız kanonik yoldan okunur | ❌ `docs/NACI-GIRISIMCI-FELSEFESI.md` kopyası duruyor (şimdilik birebir aynı) |
| KURAL 35 + 73 — Oturum ritüeli ve süreklilik köprüsü | `YENI-OTURUM.md`, `rules.md`, claude.ai projesinde `ACILIS-RITUELI.md` + oturum özetleri | ❌ Hiçbiri yok; çekirdek 14 Temmuz'da donmuş |
| SISTEM-SURUM senkronu | Proje damgası güncel sürümde | ❌ v1.0 (güncel v2.6) |
| KURAL 59 — İş akışı haritası | `docs/IS-AKISI-HARITASI.md` | ❌ Yok |
| KURAL 62 — Sessiz arıza yasağı / nabız | Her sayfa tipinden bir URL'yi yoklayan cron + tatbikatlı alarm | ❌ Yok. İçeriğin 2 aydır donuk olması tam bu kuralın önlediği arıza |
| KURAL 60 — Yedekleme anayasası | 3-2-1-1-0, restore tatbikatı | ⚠️ Statik site olduğu için risk düşük; ama tek yedek olması gereken GitHub push'suz |
| Code akıcı çalışma kuralı + 66.G | `.claude/settings.json` (acceptEdits + deny kalkanı) + statusline | ❌ Yalnız `settings.local.json` var, kalkan yok |
| Risk sınıfı tablosu (KURAL 55 evrenseli) | Projeye özel Kırmızı iş listesi | ❌ Yok (bu projede Kırmızı: deploy, sunucu, API anahtarı, WhatsApp token) |
| GEO-SEO-ISLETIM § 1 | PLAN · NABIZ · SAYFA ŞABLONLARI | ❌ Üçü de yok |
| GEO-SEO-ISLETIM § 2 (14 madde) | GSC, Bing, GA4+rıza, log `$host`, AI botları, llms.txt, canonical/lastmod, JSON-LD, alarm, T0 ölçümü, aylık sorgu testi | ⚠️ Yalnız GSC ve GA4 var; rıza kapısı, Bing, llms.txt, log ayrımı, T0, alarm yok; canonical hatalı |
| GEO-SEO-ANAYASA Bölüm 7 — Trafiği olan siteyi yenileme | Önce URL envanteri + yönlendirme haritası, sonra kod | ✅ Henüz URL değişikliği yapılmadı; büyük düzenlemeden önce bu kapı zorunlu |
| WhatsApp Cloud API rehberi § 6 | demetbaltaci.com = rehberin v1.0 "1 günde kur" testi | ⏳ Sırada; henüz başlanmamış |

Önemli bir çelişki de var: GEO-SEO-ANAYASA Bölüm 11 bu siteyi "henüz yapılmadı, baştan kurulacak" diye yazıyor, oysa site 2026 başından beri canlı ve Google'da 69 sayfası indeksli. Anayasadaki satır güncellenmeli; bu site "sıfırdan kurulum" değil, Bölüm 7 kapsamında "trafiği olan siteyi yenileme" işidir.

## Projeyi nasıl anlıyorum

**Ne:** Demet Baltacı'nın 20 yıllık astroloji işinin web vitrini. Burada içerik zaten her gün üretiliyor: YouTube'a günlük, haftalık (12 burç), aylık, yıllık, yeniay ve dolunay videoları düşüyor. Sitenin işi bu akışı aramada ve yapay zekâ cevaplarında bulunur hâle getirmek, ziyaretçiyi de gelire çevirmek.

**Portföydeki yeri:** GEO-SEO anayasasına göre bu site ürün katmanında değil, trafik katmanında. Yıllarca birikmiş güven ve kitle taşıyor. SerApp'teki "kullanıcı içerik üretir" ilkesinin buradaki karşılığı şu: içeriği Demet Hanım'ın video akışı üretir, site onu otomatik olarak alıntılanabilir metne çevirir.

**Gelir yolları (fiyat sitede yok, hepsi WhatsApp'a ya da dış siteye yönlenir):** kişisel danışmanlık (doğum haritası, sinastri, solar return, bebek-çocuk haritası, rektifikasyon), Udemy temel seviye eğitimi (441 video, 48 saat, kuponlu), "Ay Işığında Karmik Astroloji" kitabı (Kitapyurdu). Dolaylı kazanç ise YouTube ve Instagram büyümesi.

**Hedef kitle:** Türkiye ağırlıklı, gurbetçi Türkler ikinci halka (yükselen hesaplayıcısında Almanya, Hollanda, Belçika gibi 26 ülke var). İngilizce kitle Ocak planında hedeflenmiş ama hiç kurulmamış.

**Teknik yapı:** Next.js 16 + React 19 + Tailwind 4, statik dışa aktarım (`output: "export"`). SerApp ile aynı sunucuda (64.23.250.214) nginx sunuyor, önünde Cloudflare var. Yayın: yerelde `npm run build` → rsync → izinler → Cloudflare purge. YouTube API v3 hem derleme anında (haftalık, aylık, yıllık sayfalar) hem tarayıcıda (ana sayfa günlük video) çağrılıyor. OneSignal web push, GA4 (`G-HHLP4FJKTS`) ve WhatsApp tıkla-yaz butonu kurulu.

**Bu mimarinin kilit sonucu:** Statik sitede sayfa içeriği yalnız yeniden derlenince değişir. Kimse derlemezse site donar. Şu an yaşanan da bu. Haziran'daki "açıklama metinleri otomatik güncelleniyor mu?" sorusunun cevabı artık ortada: güncellenmiyor.

**Belgelerden çıkan kararlar:**

- Sitede yazılı burç yorumu olmayacak; her sayfada video + video açıklama metni olacak (CLAUDE.md).
- URL'lerde Türkçe karakter yok; fiyat gösterilmez, WhatsApp'a yönlendirilir.
- Haziran trafik düşüşü mevsimsel sayıldı: trafik neredeyse tamamen "2026 yıllık" sayfalarından geliyor ve bu sayfalar Aralık-Ocak'ta zirve yapıyor.
- "1 ay izle, sonra derin düzenleme" kararı verildi (Haziran ortası). Temmuz ortası değerlendirmesi yapılmadı.
- "3 ayaklı içerik" yönü belirlendi: yıllık + aylık/haftalık/günlük + kalıcı araçlar. Yükselen burç hesaplayıcısı kalıcı ayağın ilk örneği.
- Proje, NACI-SISTEM sırasında kuran.gen.tr'den sonra geliyor; WhatsApp Cloud API'nin ikinci kurulum yeri olarak seçildi.

**Ocak 2026 strateji planından çıkarken bilerek (ya da sessizce) değişenler:** WordPress yerine Next.js seçildi. Mor-pembe palet yerine lacivert-altın kullanıldı. Günlük/haftalık sayfalar burç başına ayrı URL olarak kuruldu, ama plandaki "koç kadını/erkeği" sayfaları, 12 ev, retrolar, tutulmalar, sözlük ve blog/video arşivi hiç yapılmadı. Bu değişikliklerin hiçbiri `decisions.md`'de yok.

## Canlı site incelemesi (1 Ekim 2026)

Site hatasız açılıyor, sitemap'teki 72 sayfanın tümü 200 dönüyor ve gerçek 404'ler doğru çalışıyor; sorunlar teknik çöküş değil, içerik ve SEO sinyali. Ölçüm Chrome üzerinden, sayfaların ham HTML'i (Google ve yapay zekâ botlarının gördüğü hâl) ve tarayıcıda oluşan hâli karşılaştırılarak yapıldı. Kelime sayıları menü ve alt bilgi çıkarıldıktan sonraki ana içeriktir.

| Sayfa grubu | Adet | Ham HTML kelime | Gösterdiği içerik tarihi | Bulgu |
|---|---|---|---|---|
| Ana sayfa | 1 | 233 | Günlük video: 1 Eki 2026 (tarayıcıda) | İki H1 var, biri "Hoş Geldiniz." — arama değeri sıfır. Danışmanlık menüde yok |
| Günlük yorum | 1 | 2 | Yalnız tarayıcıda yükleniyor | Botlar için boş sayfa |
| Haftalık (12 burç + hub) | 13 | 65-78 (Koç: 249) | 11 burç 20-21 Haz, Koç 1 Ağu | 3,5 ay bayat; açıklamada eski kupon ASTRO9 |
| Aylık (12 + hub) | 13 | 60-61 | 28 Haz - 31 Tem (Ağustos yorumu) | Ekim'de Ağustos yorumu gösteriyor |
| 2026 yıllık (12 + hub) | 13 | 135-141 | 12-15 Ara 2025 | Trafik motoru; H1 ham HTML'de boş; 2027 sayfası yok |
| Yeniay / Dolunay | 2 | ~88 | 24 Tem 2026 | Bayat |
| Burç özellikleri (12 + hub) | 13 | 74-87 | Kalıcı | İnce içerik; H1 "Akrep BURCU" biçimli |
| Danışmanlık sayfaları | 6 | 58-99 | Kalıcı | Gelir sayfaları en zayıf metinli sayfalar; menüden erişilmiyor; iki ayrı "Danışmanlık Hizmetleri" sayfası aynı H1 ile |
| Rehber (astroloji nedir, doğum haritası, gezegenler, açılar, yükselen nedir) | 5 | 44-71 | Kalıcı | Plan 500-1000 kelime diyordu |
| Yükselen hesaplama | 1 | En zengin sayfa | Kalıcı | 12 yükselen metni + SSS + 5 schema; kanonik doğru olan tek sayfa |
| SSS / Hakkımda / İletişim | 3 | 151 / 65 / 31 | Kalıcı | SSS'te FAQPage schema var |
| Eğitim | 2 adres | 80 ve 1 | Kalıcı | Menüdeki "Eğitimler" linki `/temel-seviye-astroloji-egitim/` adresine gidiyor; orada yalnız "Yönlendiriliyor..." yazıyor (JS yönlendirmesi) |
| İngilizce `/en/*` | 0 | 404 | — | `hreflang` 404'e işaret ediyor |

**Teknik SEO bulguları:**

- **Kanonik:** 72 sayfanın 71'inde `<link rel="canonical" href="https://www.demetbaltaci.com/">`. GSC'de "69 sayfa indeksli" görünmesi Google'ın bu sinyali çoğu yerde yok saymasından; ama sinyal sayfaların kendi sıralama gücünü zayıflatıyor.
- **Başlık tekrarı:** Alt sayfa başlıkları "… | Astrolog Demet Baltacı | Astrolog Demet Baltacı" diye marka adını iki kez yazıyor (sayfa başlığı + şablon eki).
- **Schema:** Her sayfada yalnız site geneli Person + ProfessionalService var. Video sayfalarında VideoObject, sayfalarda BreadcrumbList yok (yükselen sayfası hariç).
- **Sitemap:** 72 URL, tümünün `lastmod` değeri aynı derleme anı (4 Ağu 19:59). Bu, Google'a "hepsi aynı anda değişti" diyor ve tazelik sinyalini anlamsızlaştırıyor. İngilizce sayfa yok.
- **robots.txt:** Herkese açık, sitemap tanımlı. AI botlarına açık izin satırları yok (engel de yok). `llms.txt` yok, web manifest yok.
- **Kupon tutarsızlığı:** Ham HTML'de ve haftalık açıklamalarda ASTRO9, tarayıcıda yüklenen günlük kutuda ASTRO22. Botlar ve eski sayfalar eski kuponu görüyor.
- **Rıza / KVKK:** Çerez bildirimi yok, ama GA4 ve OneSignal yükleniyor. Meta Pixel eklenmeden önce bu kapı zaten plandaydı; GA4 için de gerekli.
- **Bekleyen iki küçük teknik iş:** aylık sayfadaki hydration uyarısı ve PNG uzantılı JPG görseller. İkisi de kullanıcıya görünmüyor.

**Güçlü yanlar (korunacak):** URL yapısı temiz ve tutarlı; yükselen burç aracı portföyün en iyi "kalıcı araç" örneği; WhatsApp ve Udemy dönüşüm yolları her sayfada; ana sayfadaki sosyal kanıt (232K abone, 420K+ Instagram) gerçek ve etkileyici.

Bu incelemede ölçemediklerim: sunucu erişim logu (AI bot trafiği), GSC ve GA4'ün güncel sayıları, sayfa hızı puanları. Bulut ortamım siteye doğrudan bağlanamıyor; ölçümü senin Chrome'unla yaptım.

## Eksikler (öncelik sırasıyla)

En büyük eksik tek bir teknik hata değil, sitenin kendi kendini güncel tutan bir motorunun ve onu izleyen bir nabzın olmaması; diğer eksiklerin çoğu bunun sonucu. Sıralamayı "zararı bugün sürüyor mu" ve "Aralık zirvesine yetişmesi gerekiyor mu" sorularına göre yaptım.

| # | Eksik | Neden önemli | Öncelik |
|---|---|---|---|
| 1 | Kodun güvence altına alınması (commit + push + yerelde derlenebilir hâl) | Canlıdaki 4 Ağu derlemesinin kaynağı doğrulanamıyor; disk sorunu olursa site yeniden üretilemez | Kritik |
| 2 | Sayfa başına doğru kanonik | 71 sayfa Google'a "ana sayfanın kopyasıyım" diyor | Kritik |
| 3 | Otomatik yeniden derleme (tazelik motoru) | Haftalık/aylık sayfalar aylarca bayat kalıyor; tazelik GEO'da sıralama sinyali | Kritik |
| 4 | 2027 yıllık sayfaları | Trafiğin ana kaynağı yıllık sayfalar; Aralık-Ocak zirvesinden önce indekslenmiş olmalı | Kritik (tarihli) |
| 5 | Nabız + alarm (KURAL 62) | Bayatlık 2 ay kimse fark etmeden sürdü | Yüksek |
| 6 | Bozuk `hreflang` / boş İngilizce | 404'e işaret eden dil sinyali; ya kaldırılmalı ya da İngilizce kurulmalı | Yüksek |
| 7 | Danışmanlık sayfaları menüde yok ve 60 kelime | Gelirin asıl kapısı görünmüyor ve ikna etmiyor | Yüksek |
| 8 | Botların gördüğü içerik incecik (40-150 kelime), günlük sayfa boş | GEO kuralı: kritik içerik sunucu HTML'inde olmalı; alıntılanacak cümle yok | Yüksek |
| 9 | NACI-SISTEM senkronu (v1.0 → v2.6) ve boş defterler | Her oturum kör açılıyor; kararlar kayıt dışı | Yüksek |
| 10 | GEO-SEO üç belgesi + 14 maddelik kurulum listesi (Bing, llms.txt, log `$host`, T0 ölçümü) | Ölçüm yoksa "işe yaradı mı" bilinemez | Yüksek |
| 11 | KVKK rıza bildirimi | GA4 ve OneSignal rızasız yükleniyor; Meta Pixel'in de ön şartı | Orta (hukuki) |
| 12 | Küçük SEO düzeltmeleri: çift marka başlığı, "Hoş Geldiniz" H1, boş H1'ler, JS yönlendirmeli Eğitimler linki, aynı `lastmod`, VideoObject/Breadcrumb eksikliği, kupon tutarsızlığı | Tek tek küçük, toplamda kalite sinyali | Orta |
| 13 | Rehber içeriği ve Ocak planındaki sayfalar (evler, retrolar, tutulmalar, sözlük, burç uyumu) | Mevsimsizliği kıracak kalıcı ayağın eksik parçaları | Orta |
| 14 | WhatsApp Cloud API kurulumu | NACI-SISTEM rehberinin v1.0 testi bu projede planlı | Orta (plan içinde sırası belirlenecek) |
| 15 | Meta Pixel, hydration uyarısı, görsel formatları | Bekleyen küçük işler | Düşük |

## Yapılması gerekenler: önerilen plan

Planın sabit tarihi 15 Kasım 2026: 2027 yıllık sayfaları o güne kadar yayında ve indekslenmiş olmalı, çünkü sitenin trafiğinin büyük kısmı Aralık-Ocak'ta bu sayfalardan geliyor. Ondan önceki her faz o tarihe zemin hazırlıyor. Senin tercihine uygun olarak fazlar sırayla yürür, biri kapanmadan ötekine geçilmez; her fazın bir kapısı var ve kapı ölçümle açılır.

| Faz | Ne yapılır | Hedef tarih | Kapı (geçmek için kanıt) |
|---|---|---|---|
| 0 — Zemin ve kurtarma | Kodun envanteri, commit + push, `npm install` + yerel derleme; canlıyla yerel çıktının karşılaştırılması. NACI-SISTEM v2.6 senkronu: `rules.md` (kanonik yol tablosu), `YENI-OTURUM.md`, `.claude/settings.json`, felsefe kopyasının kaldırılması (senin onayınla, KURAL 80), claude.ai projesine `ACILIS-RITUELI.md`, risk sınıfı tablosu, bu planın `GEO-SEO-PLAN.md` olarak repoya girmesi | 8 Ekim | PUSH KANITI: `HEAD = origin/main` · yerel derlemenin sitemap'i canlıyla 72/72 eşleşiyor |
| 1 — Acil SEO onarımı | Sayfa başına kanonik, çift marka başlığı, boş H1'ler, gerçek Eğitimler linki, `hreflang` kaldırma, kuponun tek kaynaktan gelmesi, sayfa başına `lastmod` | 15 Ekim | 72/72 sayfada kanonik = kendi adresi (ölçüm tablosu) · senin göz onayın · GSC'de yeniden dizin isteği |
| 2 — Tazelik motoru + nabız | Günlük otomatik yeniden derleme ve yayın; her sayfa tipinden bir URL'yi yoklayan nabız; bayatlık alarmı (örn. haftalık video 8 günden eskiyse) | 25 Ekim | 7 gün boyunca yeni video 24 saat içinde sayfada · alarm tatbikatı cebine düştü |
| 3 — GEO-SEO işletim kurulumu | Üç zorunlu belge, 14 maddelik liste: Bing Webmaster, `llms.txt`, AI bot izinleri, nginx log'da `$host`, KVKK rıza kapısı, JSON-LD (VideoObject, Breadcrumb), T0 ölçümü, 20 soruluk aylık sorgu testi | 5 Kasım | 14 maddenin her biri tarih + kanıtla işaretli · T0 NABIZ'a yazıldı |
| 4 — 2027 sezonu | 2027 hub + 12 burç sayfası (video gelince dolar); 2026 sayfaları arşiv olarak aynı adreste kalır; yeniay/dolunay ve retro takvimine tarihli sayfalar | 15 Kasım | 13 sayfa canlı ve GSC'de indeksli · 2026 URL'leri 200 dönüyor |
| 5 — İçerik derinleştirme | Danışmanlık menüye ve 400+ kelimeye; video açıklaması yazım standardı (her videoya 120-200 kelimelik özgün paragraf); burç özellikleri ve rehber sayfaları; SSS'lerin gerçek sorulardan üretilmesi | Aralık - Ocak | Sayfa tipi başına ham HTML kelime hedefi tuttu · aylık sorgu testinde ilk alıntı |
| 6 — WhatsApp Cloud API | NACI-SISTEM rehberi § 6'ya göre "1 günde kur" testi | Ocak zirvesinden sonra (öneri) | Rehberin § 4 kontrol listesi tam |
| 7 — İngilizce | Karar verilirse `/en/` kurulumu | Karar sonrası | — |

**Faz 2 için önerdiğim teknik yol ve 5 gerekçesi.** Tazelik motorunu sunucuda, günde bir kez çalışan bir "derle ve yayınla" görevi olarak kurmayı öneriyorum. Kod değişmeden yalnız video içeriğini yeniler; kod değişikliği içeren her deploy yine seninle, elle yapılır.

1. **Statik mimari korunur.** Siteyi SerApp gibi sürekli çalışan bir uygulamaya çevirmek (pm2, sunucu tarafı render) daha fazla hareketli parça ve çökme riski demek. Statik site bu projenin en sağlam yanı.
2. **İçerik botlara görünür kalır.** Alternatif olan "tarayıcıda çek" yolu (günlük videoda olduğu gibi) kullanıcıya taze içerik gösterir ama Google ve yapay zekâ botları boş sayfa görür. Günlük sayfanın 2 kelime olması bunun kanıtı.
3. **İnsan hafızasına dayanmaz.** "Unutmazsak derleriz" 2 aylık bayatlığı üretti. NACI-SISTEM'in dersi: hatırlanmaya muhtaç kural işlemez.
4. **Maliyeti sıfıra yakın.** Aynı sunucu, aynı derleme komutu, günde bir tetik. YouTube API kotası günde bir derleme için fazlasıyla yeter.
5. **Kural sistemiyle uyumlu hale getirilebilir.** KURAL 43 "deploy'u yalnız Naci yapar" diyor; bu görev yeni kod taşımadığı için bir "içerik yenileme" istisnası olarak kayıt altına alınır ve nabızla izlenir. Bu istisnayı açmak senin kararın; açılmazsa her gün elle derleme gerekir, ki bu sürdürülebilir değil.

**Bilerek plana almadıklarım:** Vikipedi sayfası, uluslararası dernek üyelikleri, basın çalışması gibi Ocak planındaki site dışı işler. Bunlar değerli ama sitenin kendisi düzelmeden gelecek ziyaretçiyi boşa harcar. Backlog'a yazılmalılar.

## Netleştirmem gereken sorular

Planı kesinleştirmek için bu soruların cevabına ihtiyacım var. İlk üçü Faz 0'ı doğrudan etkiliyor.

1. **4 Ağustos deploy'u:** Canlıdaki son derleme 4 Ağustos'ta yapılmış, ama bu klasördeki derleme çıktısı 18 Haziran tarihli ve `node_modules` yok. O gün derleme başka bir klasörden ya da başka bir bilgisayardan mı yapıldı? Yoksa sonradan bir disk temizliğinde bu klasör kısmen mi temizlendi?
2. **GitHub:** `nacibaltaci-dot/demetbaltaci` deposuna en son ne zaman push yapıldığını biliyor musun? Bilmiyorsan Faz 0'da Code'a kontrol ettiririz; yalnız depoda yereldekinden farklı bir sürüm varsa hangisinin asıl olduğuna birlikte karar vereceğiz.
3. **Otomatik yeniden derleme:** Sunucuda günde bir kez yalnız içerik yenileyen bir görevin çalışmasına, KURAL 43'e kayıtlı bir istisna olarak izin verir misin?
4. **Hedef:** Ocak planındaki 6 aylık hedefler ("astrolog demet baltacı" aramasında 1. sıra, aylık 50.000+ organik ziyaretçi, ayda 100+ WhatsApp danışmanlık talebi, Udemy satışlarında %30 artış) hâlâ geçerli mi? Asıl öncelik hangisi: danışmanlık talebi mi, eğitim satışı mı, kanal büyümesi mi?
5. **İngilizce:** İngilizce site hâlâ hedef mi, yoksa şimdilik İngilizce izlerini kaldırıp Türkçeye mi odaklanalım? (Önerim: şimdilik kaldıralım, 2027 sezonundan sonra değerlendirelim.)
6. **İçerik kaynağı:** Video açıklamalarını kim yazıyor, Demet Hanım mı yoksa bir ekip mi? Her videoya 120-200 kelimelik özgün bir paragraf eklenmesi mümkün mü? Sitenin yapay zekâ cevaplarında alıntılanacak benzersiz cümlesi buradan doğacak.
7. **2027 yıllık videoları:** Geçen yıl 12-15 Aralık'ta çekilmiş. Bu yıl da benzer tarihte mi gelecek? Daha erken gelirse sayfaları erken doldurur, zirveyi daha iyi yakalarız.
8. **Danışmanlık:** Hizmetler güncel mi (doğum haritası, sinastri, solar return, bebek-çocuk-ergen, rektifikasyon)? Talep bugün ayda yaklaşık ne kadar ve WhatsApp'ta kim cevaplıyor? Menüde neden yer almadığı bilinçli bir karar mıydı?
9. **Ölçüm erişimi:** Search Console'u (ve varsa GA4'ü) SerApp'teki gibi Chrome'da açık bırakırsan T0 ölçümünü ben okurum. Bing Webmaster hesabı var mı?
10. **Sıra:** Bu proje şu an portföyde aktif sırada mı? SerApp saha pilotu ve diğer projelerle birlikte haftada kaç oturum ayırabilirsin? 15 Kasım tarihi buna göre ya tutar ya kayar.
