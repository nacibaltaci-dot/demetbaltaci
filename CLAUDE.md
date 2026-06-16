# DEMET BALTACI WEB SİTESİ

## Deploy / Yayınlama
Bu site STATİKtir (output: "export"). SerApp'tan FARKLIDIR:
deploy.sh / pm2 KULLANILMAZ. Yayın yöntemi: npm run build → out/ klasörünü
rsync ile root@64.23.250.214:/var/www/demetbaltaci/public_html/ adresine
gönder → sunucuda izinler → Cloudflare purge.
Tam adımlar, tuzaklar ve rollback için: docs/DEPLOY-demetbaltaci.md
Modülün teknik detayı için: docs/MODUL-yukselen-burc.md
Not: Sunucuya bağlanan komutlar Code içinden DEĞİL, Naci'nin Mac
terminalinden çalıştırılır (şifre ile).

## Proje Bilgileri
- Domain: www.demetbaltaci.com
- Diller: Türkçe (ana) + İngilizce (/en/ dizini)
- Tasarım: Mobil öncelikli, responsive
- Ana Hedef: SEO - Google'da üst sıralar

## Renk Paleti
- Primary: #1E3A8A (Koyu Mavi)
- Primary Light: #3B82F6 (Açık Mavi)
- Secondary: #D4AF37 (Altın Sarısı)
- Beyaz: #FFFFFF
- Açık Arka Plan: #F8FAFC
- Metin: #1F2937

## Teknik Bilgiler
- YouTube Kanal ID: UCQPOQyi95rqf9foC4Nr2Cdg
- Günlük Playlist: PL4kKxVfkjqJoha2BBocgSRNp-DhDr2bEg
- YouTube API v3 kullanılıyor
- WhatsApp floating buton tüm sayfalarda
- Fiyat bilgisi sitede gösterilmez, WhatsApp'a yönlendirilir

## Menü Yapısı (8 Ana Menü)
1. Burç Yorumları (Günlük, Haftalık, Aylık, Yıllık, Yeniay, Dolunay)
2. Burcunu Seç (12 burç grid)
3. Danışmanlık (WhatsApp CTA)
4. Eğitimler (Udemy kursu)
5. Öğreniyorum (Astroloji Rehberi)
6. SSS
7. Hakkımızda
8. İletişim

## Bilinen Sorunlar
- YouTube API günlük video otomatik güncellenmiyordu (çözülmeli)
- Site 403 hatası veriyordu (hosting/Cloudflare ayarları kontrol edilmeli)
- Yazılı içerik yok, her sayfada YouTube video embed + 100-200 kelime SEO açıklama metni olmalı

## Önemli Kurallar
- Yazılı burç yorumu OLMAYACAK, sadece YouTube video embed
- Her video altına 100-200 kelime SEO açıklama metni eklenecek
- URL'lerde Türkçe karakter kullanılmayacak (ö→o, ş→s, ç→c, ü→u, ğ→g, ı→i)
- Schema markup: Person, FAQPage, VideoObject
- Hreflang etiketleri TR/EN için

## Kaynaklar
- YouTube: https://www.youtube.com/@demet.baltaci
- Instagram: https://www.instagram.com/demetbaltaci_
- Udemy: https://www.udemy.com/course/astrolog-demet-baltaci-astroloji-egitimi/
