# patterns.md — demetbaltaci.com
🕔 Son senkron: YONETIM-1 — 27 Eki 2026

> Format: sorun → kural/refleks → ilgili (kural, karar, oturum). Append-only. Evrensel olanlar NACI-SISTEM/PATTERNLER-EVRENSEL.md'ye taşınır (KURAL 74).

## P1 — "Canlıda var, repoda yok" (27 Eki 2026, YONETIM-1)
Sorun: 18 Haz'da yapılan 5–6 iş canlıya çıktı, hafızada "tamamlandı" sayıldı, ama hiç commit'lenmedi; 4 ay sonra canlının kaynağı kanıtlanamıyor, node_modules de yok.
Refleks: deploy'dan önce commit (DEPLOY belgesi zaten söylüyordu) yetmez — **deploy sonrası push kanıtı kapanış şartı** (KURAL 58). Hat kapanış 5 adımının ⑤'i bu.
İlgili: KURAL 58, 61 · Karar #2 · OPS-1.

## P2 — Statik sitede "içerik otomatik güncelleniyor" yanılgısı (27 Eki 2026)
Sorun: 16 Haz'da "açıklama metinleri otomatik güncelleniyor mu?" sorusu açık bırakıldı; cevap 1 Eki'de ölçüldü: hayır — statik site yalnız yeniden derlenince değişir. 11 hafta bayat kaldı.
Refleks: statik projede her "canlı veri" özelliği için "**hangi tetikle yeniden derlenir?**" sorusu spec'e yazılır; cevabı yoksa özellik donuktur.
İlgili: KURAL 62 · Karar #9 · RAPOR-SEO-1EKI Faz 2.

## P3 — Rapor sohbette/Docs'ta kalırsa plan havada kalır (27 Eki 2026)
Sorun: 1 Eki raporu Claude Docs'ta kaldı, repoya girmedi; 26 gün sonra "onaylandı mı" bilinmiyordu.
Refleks: KURAL 73 — rapor yazıldığı oturumda `docs/`'a girer, kararı `decisions.md`'de "AÇIK" olarak bile olsa yazılır.
İlgili: KURAL 61, 73 · Karar #1.

## P4 — Bayat `index.lock` commit'i durdurur; köprü ve Code silemez (5 Kas 2026, YONETIM-1)
Sorun: `.git/index.lock` (19 Ağu 2026 21:31, 0 bayt — yarıda kalmış bir git işleminin kalıntısı) 2,5 ay fark edilmedi; ilk commit denemesinde Code "index.lock exists" ile durdu, `rm` yapamadı (KURAL 80), iş Naci'ye düştü. YÖNETİM ilk anda kilidi kendi köprü `git status`'una bağladı — dosya tarihi aksini gösterdi: **teşhis önce `ls -la`, sonra suçlu.**
Refleks: ① zemin denetimine `ls .git/*.lock` eklenir (OPS-1 kapısına girdi) ② köprüden git yalnız salt-okur: `git log/diff/show/ls-files`; `git status` gerekiyorsa `git --no-optional-locks status` (köprü kilit silemez, ihtimali sıfırlar) ③ kilit varsa: `pgrep -fl git` boşsa Naci kendi terminalinden adıyla siler (KURAL 80 ⑤/⑥ uyumlu), Code devam eder.
İlgili: Pattern #197 (köprüden git yok) · KURAL 80 ④ · KURAL 68 teşhis merdiveni.
