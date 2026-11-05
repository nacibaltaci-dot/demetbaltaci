# OTURUM-CEKIRDEK.md — demetbaltaci.com

**İşaret belgesi** · NACI-SISTEM: v2.10 · YONETIM-SISTEMI: v1.0.5 · 🕔 Son senkron: YONETIM-1 — 5 Kas 2026

> 14 Temmuz 2026 çekirdeği bu kurulumla **yutuldu**: içeriği hat defterlerine ve panoya dağıldı. Bu dosya artık yalnız yol gösterir; "bugün / aktif iş / yapılacaklar" burada tutulmaz.

## Nereye bakılır
| Soru | Belge |
|---|---|
| Sistem şu an nerede, bu hafta ne var, deploy sırası | docs/YONETIM-PANO.md |
| Hatlardan ne geldi (olay günlüğü) | docs/YONETIM-AKIS.md |
| Bir hattın durumu, açık paketi, sıradaki 3 iş | docs/HAT-<KOD>.md (OPS · GEO-SEO · WEB · REKLAM · WHATSAPP · ICERIK · PARA · SUNUM · VIDEO) |
| İş akışı kuralları (hat, oturum, paket, deploy, dal) | docs/YONETIM-SISTEMI.md (proje kopyası) |
| Kararlar / dersler / havuz | docs/decisions.md · patterns.md · backlog.md |
| 2027 sezonu kapısı | docs/LANSMAN-KAPISI.md |
| Çok-AI çalışma grubu | docs/GRUP-MODU.md |
| Hat sohbeti nasıl açılır | docs/ACILIS-RITUELI.md + docs/HAT-OTURUM-ACILIS-SABLON.md |
| Deploy (statik: build → rsync → izin → Cloudflare) | CLAUDE.md + docs/DEPLOY-demetbaltaci.md |
| SEO durumu ve yol haritası (1 Eki 2026) | docs/RAPOR-SEO-1EKI.md |
| Naci merceği / felsefe | NACI-SISTEM/NACI-GIRISIMCI-FELSEFESI.md (tek gerçek, kopya yok) |

## Proje 30 saniye
Demet Baltacı'nın (20 yıllık astrolog, YouTube 232K abone) sitesi; Next.js statik export, nginx + Cloudflare, aynı VPS'te SerApp ile. İçerik YouTube video + açıklama metni; yazılı burç yorumu yok. Gelir: danışmanlık (WhatsApp), Udemy kursu, kitap. Trafik mevsimsel: yıllık burç sayfaları Aralık–Ocak zirvesi → 15 Kas 2026 "2027 sezonu hazır" kapısı.

## Roller
Claude.ai (YÖNETİM + hat sohbetleri): strateji, spec, belge içeriği · Naci: köprü, karar, göz testi, sunucu komutları · Code: kod, commit, push, teknik defterler (progress, session-logs); çekirdeğe ve stratejik belgelere dokunmaz.
